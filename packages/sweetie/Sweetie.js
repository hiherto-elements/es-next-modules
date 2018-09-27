export class Sweetie {
	constructor() {
		this.env = {
			__tests : []
		};

		this.context = this.env;
	}

	static globalize(global = {}) {
		var sweetie = new Sweetie();
		
    [ "it", "describe", "ok" ].forEach(function(prop) {
        global[prop] = sweetie[prop].bind(sweetie);
    });

    return sweetie;
	};

	describe(name, fn) {
		let old;

		if(!this.context[name]) {
				this.context[name] = {
						__tests  : []
				};
		}

		old          = this.context;
		this.context = this.context[name];

		if(typeof fn === "function") {
				fn();
		}

		this.context = old;
	}

	it(name, fn) {
		this.context.__tests.push({
				name,
				fn    : fn || false,
				async : (fn && !!fn.length) || false
		});
	}

	ok(cond, msg) {
		this.reporter(!!cond ? "pass" : "fail", this.test, {
				condition : cond,
				message   : msg || "",
				stack     : (new Error()).stack
		});
	}

	_collectTests(chain, tests) {
		if(!tests.length) {
				return;
		}
		
		const self = this;
		
		// Rewrite bare test function into something a little nicer
		this._tests = this._tests.concat(tests.map(test => {
				let fn;

				if(test.__processed) {
						return test;
				}

				test.suite = chain;

				if(!test.fn) {
						return test;
				}

				fn = test.fn;

				test.fn = next => {
						self.reporter("test", test);
						self.test = test;
						
						// Doesn't handle async exceptions, but we're ok w/ that
						try {
								fn(next);
						} catch(e) {
								self.reporter("fail", test, e);
								
								if(typeof next === "function") {
										next();
								}
						}
				};

				test.__processed = true;

				return test;
		}));
}

_collectSuite(chain, suite) {
		const self = this;

		this._collectTests(chain, suite.__tests);

		Object.keys(suite).forEach(name => {
				if(name === "__tests") {
						return;
				}

				self._collectSuite(chain.concat(name), suite[name]);
		});
}

_next() {
		const self = this;
		const test = this._tests.shift();
		let path;

		if(!test) {
				if(this.suite) {
						this.reporter("suite-done", null, this.suite);
				}

				return this.reporter("finish");
		}

		if(this._filter) {
				path = `${test.suite.join(" ")} ${test.name}`;
				
				if(path.search(this._filter) === -1) {
						this.reporter("skipped", test);

						return this._next();
				}
		}

		if(test.suite !== this.suite) {
				if(this.suite) {
						this.reporter("suite-done", null, this.suite);
				}
				
				this.reporter("suite", null, test.suite);
				
				this.suite = test.suite;
		}

		if(!test.fn) {
				this.reporter("empty", test);
				return this._next();
		}

		if(test.async) {
				return test.fn(() => {
						self.reporter("test-done", test);
						self._next.call(self);
				});
		}

		test.fn();

		this.reporter("test-done", test);

		this._next();
}

run(reporter) {
		// Reset the world before starting
		this.suite  = undefined;
		this._tests = [];
		this.context = this.env;
		
		this.reporter = (typeof reporter === "function") ? reporter : () => {};
		
		this.reporter("prep", null, this.env);

		// Go build up the execution plan
		this._collectSuite([], this.env);
						
		this.reporter("start", null, this._tests);
		
		this._next();
}

filter(filter) {
		this._filter = filter ? new RegExp(filter, "i") : false;
}

	
}