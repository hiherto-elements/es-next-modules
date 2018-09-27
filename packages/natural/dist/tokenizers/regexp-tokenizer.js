'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegexpTokenizer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tokenizer = require('./tokenizer');

var _tokenizer2 = _interopRequireDefault(_tokenizer);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Base Class for RegExp Matching
var RegexpTokenizer = exports.RegexpTokenizer = function (_Tokenizer) {
    _inherits(RegexpTokenizer, _Tokenizer);

    function RegexpTokenizer(options) {
        _classCallCheck(this, RegexpTokenizer);

        var _this = _possibleConstructorReturn(this, (RegexpTokenizer.__proto__ || Object.getPrototypeOf(RegexpTokenizer)).call(this));

        var options = options || {};
        _this._pattern = options.pattern || _this._pattern;
        _this.discardEmpty = options.discardEmpty || true;

        // Match and split on GAPS not the actual WORDS
        _this._gaps = options.gaps;

        if (_this._gaps === undefined) {
            _this._gaps = true;
        }
        return _this;
    }

    _createClass(RegexpTokenizer, [{
        key: 'tokenize',
        value: function tokenize(s) {
            var results = void 0;

            if (this._gaps) {
                results = s.split(this._pattern);
                return this.discardEmpty ? _underscore._.without(results, '', ' ') : results;
            } else {
                return s.match(this._pattern);
            }
        }
    }]);

    return RegexpTokenizer;
}(_tokenizer2.default);