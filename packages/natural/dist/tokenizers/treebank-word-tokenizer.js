'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TreebankWordTokenizer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tokenizer = require('./tokenizer');

var _tokenizer2 = _interopRequireDefault(_tokenizer);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*
Copyright (c) 2011, Rob Ellis, Chris Umbel
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var contractions2 = [/(.)('ll|'re|'ve|n't|'s|'m|'d)\b/ig, /\b(can)(not)\b/ig, /\b(D)('ye)\b/ig, /\b(Gim)(me)\b/ig, /\b(Gon)(na)\b/ig, /\b(Got)(ta)\b/ig, /\b(Lem)(me)\b/ig, /\b(Mor)('n)\b/ig, /\b(T)(is)\b/ig, /\b(T)(was)\b/ig, /\b(Wan)(na)\b/ig];

var contractions3 = [/\b(Whad)(dd)(ya)\b/ig, /\b(Wha)(t)(cha)\b/ig];

var TreebankWordTokenizer = exports.TreebankWordTokenizer = function (_Tokenizer) {
    _inherits(TreebankWordTokenizer, _Tokenizer);

    function TreebankWordTokenizer() {
        _classCallCheck(this, TreebankWordTokenizer);

        return _possibleConstructorReturn(this, (TreebankWordTokenizer.__proto__ || Object.getPrototypeOf(TreebankWordTokenizer)).apply(this, arguments));
    }

    _createClass(TreebankWordTokenizer, [{
        key: 'tokenize',
        value: function tokenize(text) {
            contractions2.forEach(function (regexp) {
                text = text.replace(regexp, "$1 $2");
            });

            contractions3.forEach(function (regexp) {
                text = text.replace(regexp, "$1 $2 $3");
            });

            // most punctuation
            text = text.replace(/([^\w\.\'\-\/\+\<\>,&])/g, " $1 ");

            // commas if followed by space
            text = text.replace(/(,\s)/g, " $1");

            // single quotes if followed by a space
            text = text.replace(/('\s)/g, " $1");

            // periods before newline or end of string
            text = text.replace(/\. *(\n|$)/g, " . ");

            return _underscore._.without(text.split(/\s+/), '');
        }
    }]);

    return TreebankWordTokenizer;
}(_tokenizer2.default);

exports.default = TreebankWordTokenizer;