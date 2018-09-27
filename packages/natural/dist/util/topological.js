"use strict";

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * a topo sort for a digraph
 * @param {Digraph}
 */
var Topological = exports.Topological = function () {
		function Topological(g) {
				_classCallCheck(this, Topological);

				this.isDag = true;
				this.sorted = topoSort(uniqueVertexs(g.edges()), g.edges());
		}

		_createClass(Topological, [{
				key: "isDAG",
				value: function isDAG() {
						return this.isDag;
				}

				/**
     * get ordered vertexs of digraph
     */

		}, {
				key: "order",
				value: function order() {
						return this.sorted.slice();
				}
		}]);

		return Topological;
}();

/**
* @param {Array} all vertex in digraph
* @param {Object} all edges in the digraph
*/


function topoSort(vertexs, edges) {
		var sorted = [];
		var cursor = vertexs.length;
		var visited = {};
		var i = cursor;
		while (i--) {
				if (!visited[i]) visit(vertexs[i], i, []);
		}

		return sorted.reverse();

		function visit(vertex, i, predecessors) {
				if (predecessors.includes(vertex)) {
						throw new Error("Cyclic dependency:" + JSON.stringify(vertex));
				}

				if (visited[i]) return;
				visited[i] = true;

				var outgoing = edges.filter(function (edge) {
						return edge.to() === vertex;
				});

				var preds = [];
				if (outgoing.length > 0) {
						preds = predecessors.concat(vertex);
				}
				var from = void 0;
				outgoing.forEach(function (edge) {
						from = edge.from();
						visit(from, vertexs.indexOf(from), preds);
				});

				sorted[--cursor] = vertex;
		}
}

function uniqueVertexs(edges) {
		var vertexs = [];
		var from = void 0;
		var to = void 0;
		edges.forEach(function (edge) {
				from = edge.from();
				to = edge.to();
				if (!vertexs.includes(from)) vertexs.push(from);
				if (!vertexs.includes(to)) vertexs.push(to);
		});
		return vertexs;
}
exports.default = Topological;