
export class Topological {

	constructor(g) {
			this.isDag = true;
			this.sorted = topoSort(uniqueVertexs(g.edges()), g.edges());
	}

	isDAG() {
			return this.isDag;
	}

	/**
	 * get ordered vertexs of digraph
	 */
	order() {
			return this.sorted.slice();
	}
}

function topoSort(vertexs, edges) {
	const sorted = [];
	let cursor = vertexs.length;
	const visited = {};
	let i = cursor;
	while (i--) {
			if (!visited[i]) visit(vertexs[i], i, []);
	}

	return sorted.reverse();

	function visit(vertex, i, predecessors) {
			if(predecessors.includes(vertex)) {
					throw new Error(`Cyclic dependency:${JSON.stringify(vertex)}`);
			}

			if(visited[i]) return;
			visited[i] = true;

			const outgoing = edges.filter(edge => edge.to() === vertex);

			let preds = [];
			if(outgoing.length > 0) {
					preds = predecessors.concat(vertex);
			}
			let from;
			outgoing.forEach(edge => {
					from = edge.from();
					visit(from, vertexs.indexOf(from), preds);
			});

			sorted[--cursor] = vertex;
	}
}


function uniqueVertexs(edges) {
	const vertexs = [];
	let from;
	let to;
	edges.forEach(edge => {
			from = edge.from();
			to = edge.to();
			if (!vertexs.includes(from)) vertexs.push(from);
			if (!vertexs.includes(to)) vertexs.push(to);
	});
	return vertexs;
}
export default Topological;