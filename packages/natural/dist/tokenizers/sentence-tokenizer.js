'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SentenceTokenizer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tokenizer = require('./tokenizer');

var _tokenizer2 = _interopRequireDefault(_tokenizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SentenceTokenizer = exports.SentenceTokenizer = function (_Tokenizer) {
    _inherits(SentenceTokenizer, _Tokenizer);

    function SentenceTokenizer() {
        _classCallCheck(this, SentenceTokenizer);

        return _possibleConstructorReturn(this, (SentenceTokenizer.__proto__ || Object.getPrototypeOf(SentenceTokenizer)).apply(this, arguments));
    }

    _createClass(SentenceTokenizer, [{
        key: 'tokenize',
        value: function tokenize(text) {
            // break string up in to sentences based on punctation and quotation marks
            var tokens = text.match(/([\"\'\‘\“\'\"\[\(\{\⟨][^\.\?\!]+[\.\?\!][\"\'\’\”\'\"\]\)\}\⟩]|[^\.\?\!]+[\.\?\!\s]+)\s?/g);

            // remove unecessary white space
            tokens = tokens.map(Function.prototype.call, String.prototype.trim);

            return this.trim(tokens);
        }
    }]);

    return SentenceTokenizer;
}(_tokenizer2.default);

exports.default = SentenceTokenizer;