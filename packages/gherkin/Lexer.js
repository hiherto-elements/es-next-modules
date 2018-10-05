

Lexer.defunct = function (chr) {
    throw new Error(`Unexpected character at index ${this.index - 1}: ${chr}`);
};
try {
    Lexer.engineHasStickySupport = typeof /(?:)/.sticky == 'boolean';
} catch (ignored) {
    Lexer.engineHasStickySupport = false;
}
try {
    Lexer.engineHasUnicodeSupport = typeof /(?:)/.unicode == 'boolean';
} catch (ignored) {
    Lexer.engineHasUnicodeSupport = false;
}

export function Lexer(defunct) {
    if (typeof defunct !== "function") defunct = Lexer.defunct;

    let tokens = [];
    const rules = [];
    let remove = 0;
    this.state = 0;
    this.index = 0;
    this.input = "";

    this.addRule = function (pattern, action, start) {
        const global = pattern.global;

        if (!global || Lexer.engineHasStickySupport && !pattern.sticky) {
            let flags = Lexer.engineHasStickySupport ? "gy" : "g";
            if (pattern.multiline) flags += "m";
            if (pattern.ignoreCase) flags += "i";
            if (Lexer.engineHasUnicodeSupport && pattern.unicode) flags += "u";
            pattern = new RegExp(pattern.source, flags);
        }

        if (Object.prototype.toString.call(start) !== "[object Array]") start = [0];

        rules.push({
            pattern,
            global,
            action,
            start
        });

        return this;
    };

    this.setInput = function (input) {
        remove = 0;
        this.state = 0;
        this.index = 0;
        tokens.length = 0;
        this.input = input;
        return this;
    };

    this.lex = function () {
        if (tokens.length) return tokens.shift();

        this.reject = true;

        while (this.index <= this.input.length) {
            const matches = scan.call(this).splice(remove);
            const index = this.index;

            while (matches.length) {
                if (this.reject) {
                    const match = matches.shift();
                    const result = match.result;
                    const length = match.length;
                    this.index += length;
                    this.reject = false;
                    remove++;

                    var token = match.action.apply(this, result);
                    if (this.reject) this.index = result.index;
                    else if (typeof token !== "undefined") {
                        switch (Object.prototype.toString.call(token)) {
                        case "[object Array]":
                            tokens = token.slice(1);
                            token = token[0];
                        default:
                            if (length) remove = 0;
                            return token;
                        }
                    }
                } else break;
            }

            const input = this.input;

            if (index < input.length) {
                if (this.reject) {
                    remove = 0;
                    var token = defunct.call(this, input.charAt(this.index++));
                    if (typeof token !== "undefined") {
                        if (Object.prototype.toString.call(token) === "[object Array]") {
                            tokens = token.slice(1);
                            return token[0];
                        } else return token;
                    }
                } else {
                    if (this.index !== index) remove = 0;
                    this.reject = true;
                }
            } else if (matches.length)
                this.reject = true;
            else break;
        }
    };

    function scan() {
        const matches = [];
        let index = 0;

        const state = this.state;
        const lastIndex = this.index;
        const input = this.input;

        for (let i = 0, length = rules.length; i < length; i++) {
            const rule = rules[i];
            const start = rule.start;
            const states = start.length;

            if ((!states || start.includes(state)) ||
                (state % 2 && states === 1 && !start[0])) {
                const pattern = rule.pattern;
                pattern.lastIndex = lastIndex;
                const result = pattern.exec(input);

                if (result && result.index === lastIndex) {
                    let j = matches.push({
                        result,
                        action: rule.action,
                        length: result[0].length
                    });

                    if (rule.global) index = j;

                    while (--j > index) {
                        const k = j - 1;

                        if (matches[j].length > matches[k].length) {
                            const temple = matches[j];
                            matches[j] = matches[k];
                            matches[k] = temple;
                        }
                    }
                }
            }
        }

        return matches;
    }
}
