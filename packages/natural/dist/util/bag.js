"use strict";

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bag = exports.Bag = function () {
		function Bag() {
				_classCallCheck(this, Bag);

				this.dictionary = [];
				this.nElement = 0;
		}

		_createClass(Bag, [{
				key: "add",
				value: function add(element) {
						this.dictionary.push(element);
						this.nElement++;
						return this;
				}
		}, {
				key: "isEmpty",
				value: function isEmpty() {
						return this.nElement > 0;
				}
		}, {
				key: "contains",
				value: function contains(item) {
						return this.dictionary.includes(item);
				}

				/**
     * unpack the bag , and get all items
     */

		}, {
				key: "unpack",
				value: function unpack() {
						// return a copy is better than original
						return this.dictionary.slice();
				}
		}]);

		return Bag;
}();