'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Classifier = undefined;

var _porter_stemmer = require('../stemmers/porter_stemmer');

var _porter_stemmer2 = _interopRequireDefault(_porter_stemmer);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

try {
    var Threads = require('webworker-threads');
} catch (e) {
    // Since webworker-threads are optional, only thow if the module is found
    if (e.code !== 'MODULE_NOT_FOUND') throw e;
}

function checkThreadSupport() {
    if (typeof Threads === 'undefined') {
        throw new Error('parallel classification requires the optional dependency webworker-threads');
    }
}

var Classifier = exports.Classifier = function Classifier(classifier, stemmer) {
    this.classifier = classifier;
    this.docs = [];
    this.features = {};
    this.stemmer = stemmer || _porter_stemmer2.default;
    this.lastAdded = 0;
    this.events = new _events2.default.EventEmitter();
};

function addDocument(text, classification) {
    // Ignore further processing if classification is undefined
    if (typeof classification === 'undefined') return;

    // If classification is type of string then make sure it's dosen't have blank space at both end
    if (typeof classification === 'string') {
        classification = classification.trim();
    }

    if (typeof text === 'string') text = this.stemmer.tokenizeAndStem(text, this.keepStops);

    if (text.length === 0) {
        // ignore empty documents
        return;
    }

    this.docs.push({
        label: classification,
        text: text
    });

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var token = _step.value;

            this.features[token] = (this.features[token] || 0) + 1;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function removeDocument(text, classification) {
    var docs = this.docs;
    var doc = void 0;
    var pos = void 0;

    if (typeof text === 'string') {
        text = this.stemmer.tokenizeAndStem(text, this.keepStops);
    }

    for (var i = 0, ii = docs.length; i < ii; i++) {
        doc = docs[i];
        if (doc.text.join(' ') == text.join(' ') && doc.label == classification) {
            pos = i;
        }
    }

    // Remove if there's a match
    if (!isNaN(pos)) {
        this.docs.splice(pos, 1);

        for (var i = 0, ii = text.length; i < ii; i++) {
            delete this.features[text[i]];
        }
    }
}

function textToFeatures(observation) {
    var features = [];

    if (typeof observation === 'string') observation = this.stemmer.tokenizeAndStem(observation, this.keepStops);

    for (var feature in this.features) {
        if (observation.includes(feature)) features.push(1);else features.push(0);
    }

    return features;
}

function docsToFeatures(docs) {
    var parsedDocs = [];

    for (var i = 0; i < docs.length; i++) {
        var features = [];

        for (var feature in FEATURES) {
            if (docs[i].observation.includes(feature)) features.push(1);else features.push(0);
        }

        parsedDocs.push({
            index: docs[i].index,
            features: features
        });
    }

    return JSON.stringify(parsedDocs);
}

function train() {
    var totalDocs = this.docs.length;
    for (var i = this.lastAdded; i < totalDocs; i++) {
        var features = this.textToFeatures(this.docs[i].text);
        this.classifier.addExample(features, this.docs[i].label);
        this.events.emit('trainedWithDocument', { index: i, total: totalDocs, doc: this.docs[i] });
        this.lastAdded++;
    }
    this.events.emit('doneTraining', true);
    this.classifier.train();
}

function trainParallel(numThreads, callback) {
    checkThreadSupport();

    if (!callback) {
        callback = numThreads;
        numThreads = undefined;
    }

    if (isNaN(numThreads)) {
        numThreads = _os2.default.cpus().length;
    }

    var totalDocs = this.docs.length;
    var threadPool = Threads.createPool(numThreads);
    var docFeatures = {};
    var finished = 0;
    var self = this;

    // Init pool; send the features array and the parsing function
    threadPool.all.eval('var FEATURES = ' + JSON.stringify(this.features));
    threadPool.all.eval(docsToFeatures);

    // Convert docs to observation objects
    var obsDocs = [];
    for (var i = this.lastAdded; i < totalDocs; i++) {
        var observation = this.docs[i].text;
        if (typeof observation === 'string') observation = this.stemmer.tokenizeAndStem(observation, this.keepStops);
        obsDocs.push({
            index: i,
            observation: observation
        });
    }

    // Called when a batch completes processing
    var onFeaturesResult = function onFeaturesResult(docs) {
        setTimeout(function () {
            self.events.emit('processedBatch', {
                size: docs.length,
                docs: totalDocs,
                batches: numThreads,
                index: finished
            });
        });

        for (var j = 0; j < docs.length; j++) {
            docFeatures[docs[j].index] = docs[j].features;
        }
    };

    // Called when all batches finish processing
    var onFinished = function onFinished(err) {
        if (err) {
            threadPool.destroy();
            return callback(err);
        }

        for (var j = self.lastAdded; j < totalDocs; j++) {
            self.classifier.addExample(docFeatures[j], self.docs[j].label);
            self.events.emit('trainedWithDocument', {
                index: j,
                total: totalDocs,
                doc: self.docs[j]
            });
            self.lastAdded++;
        }

        self.events.emit('doneTraining', true);
        self.classifier.train();

        threadPool.destroy();
        callback(null);
    };

    // Split the docs and start processing
    var batchSize = Math.ceil(obsDocs.length / numThreads);
    var lastError = void 0;

    for (var i = 0; i < numThreads; i++) {
        var batchDocs = obsDocs.slice(i * batchSize, (i + 1) * batchSize);
        var batchJson = JSON.stringify(batchDocs);

        threadPool.any.eval('docsToFeatures(' + batchJson + ')', function (err, docs) {
            lastError = err || lastError;
            finished++;

            if (docs) {
                docs = JSON.parse(docs);
                onFeaturesResult(docs);
            }

            if (finished >= numThreads) {
                onFinished(lastError);
            }
        });
    }
}

function trainParallelBatches(options) {
    checkThreadSupport();

    var numThreads = options && options.numThreads;
    var batchSize = options && options.batchSize;

    if (isNaN(numThreads)) {
        numThreads = _os2.default.cpus().length;
    }

    if (isNaN(batchSize)) {
        batchSize = 2500;
    }

    var totalDocs = this.docs.length;
    var threadPool = Threads.createPool(numThreads);
    var docFeatures = {};
    var finished = 0;
    var self = this;

    var abort = false;
    var onError = function onError(err) {
        if (!err || abort) return;
        abort = true;
        threadPool.destroy(true);
        self.events.emit('doneTrainingError', err);
    };

    // Init pool; send the features array and the parsing function
    var str = JSON.stringify(this.features);
    threadPool.all.eval('var FEATURES = ' + str + ';', onError);
    threadPool.all.eval(docsToFeatures, onError);

    // Convert docs to observation objects
    var obsDocs = [];
    for (var i = this.lastAdded; i < totalDocs; i++) {
        var observation = this.docs[i].text;
        if (typeof observation === 'string') observation = this.stemmer.tokenizeAndStem(observation, this.keepStops);
        obsDocs.push({
            index: i,
            observation: observation
        });
    }

    // Split the docs in batches
    var obsBatches = [];
    var i = 0;
    while (true) {
        var batch = obsDocs.slice(i * batchSize, (i + 1) * batchSize);
        if (!batch || !batch.length) break;
        obsBatches.push(batch);
        i++;
    }
    obsDocs = null;
    self.events.emit('startedTraining', {
        docs: totalDocs,
        batches: obsBatches.length
    });

    // Called when a batch completes processing
    var onFeaturesResult = function onFeaturesResult(docs) {
        self.events.emit('processedBatch', {
            size: docs.length,
            docs: totalDocs,
            batches: obsBatches.length,
            index: finished
        });

        for (var j = 0; j < docs.length; j++) {
            docFeatures[docs[j].index] = docs[j].features;
        }
    };

    // Called when all batches finish processing
    var onFinished = function onFinished() {
        threadPool.destroy(true);
        abort = true;

        for (var j = self.lastAdded; j < totalDocs; j++) {
            self.classifier.addExample(docFeatures[j], self.docs[j].label);
            self.events.emit('trainedWithDocument', {
                index: j,
                total: totalDocs,
                doc: self.docs[j]
            });
            self.lastAdded++;
        }

        self.events.emit('doneTraining', true);
        self.classifier.train();
    };

    // Called to send the next batch to be processed
    var batchIndex = 0;
    var sendNext = function sendNext() {
        if (abort) return;
        if (batchIndex >= obsBatches.length) {
            return;
        }

        sendBatch(JSON.stringify(obsBatches[batchIndex]));
        batchIndex++;
    };

    // Called to send a batch of docs to the threads
    var sendBatch = function sendBatch(batchJson) {
        if (abort) return;
        threadPool.any.eval('docsToFeatures(' + batchJson + ');', function (err, docs) {
            if (err) {
                return onError(err);
            }

            finished++;

            if (docs) {
                docs = JSON.parse(docs);
                setTimeout(onFeaturesResult.bind(null, docs));
            }

            if (finished >= obsBatches.length) {
                setTimeout(onFinished);
            }

            setTimeout(sendNext);
        });
    };

    // Start processing
    for (var i = 0; i < numThreads; i++) {
        sendNext();
    }
}

function retrain() {
    this.classifier = new this.classifier.constructor();
    this.lastAdded = 0;
    this.train();
}

function retrainParallel(numThreads, callback) {
    this.classifier = new this.classifier.constructor();
    this.lastAdded = 0;
    this.trainParallel(numThreads, callback);
}

function getClassifications(observation) {
    return this.classifier.getClassifications(this.textToFeatures(observation));
}

function classify(observation) {
    return this.classifier.classify(this.textToFeatures(observation));
}

function restore(classifier, stemmer) {
    classifier.stemmer = stemmer || _porter_stemmer2.default;
    classifier.events = new _events2.default.EventEmitter();
    return classifier;
}

function save(filename, callback) {
    var data = JSON.stringify(this);
    var fs = require('fs');
    var classifier = this;
    fs.writeFile(filename, data, 'utf8', function (err) {
        if (callback) {
            callback(err, err ? null : classifier);
        }
    });
}

function load(filename, callback) {
    var fs = require('fs');

    fs.readFile(filename, 'utf8', function (err, data) {
        var classifier = void 0;

        if (!err) {
            classifier = JSON.parse(data);
        }

        if (callback) callback(err, classifier);
    });
}

function setOptions(options) {
    this.keepStops = options.keepStops ? true : false;
}

Classifier.prototype.addDocument = addDocument;
Classifier.prototype.removeDocument = removeDocument;
Classifier.prototype.train = train;
if (Threads) {
    Classifier.prototype.trainParallel = trainParallel;
    Classifier.prototype.trainParallelBatches = trainParallelBatches;
    Classifier.prototype.retrainParallel = retrainParallel;
}
Classifier.prototype.retrain = retrain;
Classifier.prototype.classify = classify;
Classifier.prototype.textToFeatures = textToFeatures;
Classifier.prototype.save = save;
Classifier.prototype.getClassifications = getClassifications;
Classifier.prototype.setOptions = setOptions;
Classifier.restore = restore;
Classifier.load = load;

exports.default = Classifier;