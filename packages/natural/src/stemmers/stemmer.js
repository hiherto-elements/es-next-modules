import { stopwords } from '../util/stopwords.js';

import { AggressiveTokenizer as Tokenizer } from '../tokenizers/aggressive-tokenizer.js';

export const stemmer = function() {
    const stemmer = this;

    stemmer.stem = token => token;

    stemmer.addStopWord = stopWord => {
        stopwords.words.push(stopWord);
    };

    stemmer.addStopWords = moreStopWords => {
        stopwords.words = stopwords.words.concat(moreStopWords);
    };

    stemmer.removeStopWord = function(stopWord) {
        this.removeStopWords([stopWord])
    };

    stemmer.removeStopWords = moreStopWords => {
        moreStopWords.forEach(stopWord => {
            const idx = stopwords.words.indexOf(stopWord);
            if (idx >= 0) {
                stopwords.words.splice(idx, 1);
            }
        });

    };


    stemmer.tokenizeAndStem = (text, keepStops) => {
        const stemmedTokens = [];
        const lowercaseText = text.toLowerCase();
        const tokens = new Tokenizer().tokenize(lowercaseText);

        if (keepStops) {
            tokens.forEach(token => {
                stemmedTokens.push(stemmer.stem(token));
            });
        }

        else {
            tokens.forEach(token => {
                if (!stopwords.words.includes(token))
                    stemmedTokens.push(stemmer.stem(token));
            });
        }

        return stemmedTokens;
    };

    stemmer.attach = () => {
        String.prototype.stem = function() {
            return stemmer.stem(this);
        };

        String.prototype.tokenizeAndStem = function(keepStops) {
            return stemmer.tokenizeAndStem(this, keepStops);
        };
    };
};