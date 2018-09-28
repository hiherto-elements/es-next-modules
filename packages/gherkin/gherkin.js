/**
 * Copyright (c) 2015 Christopher M. Baker
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import parse from './parse';

export default world => new Suite(world);

class Suite {
  constructor(world) {
    this._world = world || { };
    this._given = [];
    this._when = [];
    this._then = [];
  }

  resolve(list, text) {
    for (let i = 0; i < list.length; i++) {
      const match = text.match(list[i].r);

      if (match) {
        match[0] = this._world;
        return Function.prototype.bind.apply(list[i].f, match);
      }
    }

    throw new ReferenceError(text);
  }

  given(r, f) {
    this._given.push({
      r,
      f
    });
  }

  resolveGiven(text) {
    return this.resolve(this._given, text);
  }

  when(r, f) {
    this._when.push({
      r,
      f
    });
  }

  resolveWhen(text) {
    return this.resolve(this._when, text);
  }

  then(r, f) {
    this._then.push({
      r,
      f
    });
  }

  resolveThen(text) {
    return this.resolve(this._then, text);
  }

  run(text) {
    const features = parse(text);
    const suite = this;

    features.forEach(feature => {
      describe(`Feature: ${feature.feature}`, () => {
        feature.scenarios.forEach(scenario => {
          describe(`Scenario: ${scenario.scenario}`, () => {
            scenario.given.forEach(g => {
              it(`Given ${g}`, suite.resolveGiven(g));
            });

            scenario.when.forEach(w => {
              it(`When ${w}`, suite.resolveWhen(w));
            });

            scenario.then.forEach(t => {
              it(`Then ${t}`, suite.resolveThen(t));
            });
          });
        });
      });
    });
  }
}
