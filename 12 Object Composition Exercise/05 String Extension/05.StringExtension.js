let extensions = (function () {
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return str + this.toString();
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return this.toString() + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.toString() === '';
    };

    String.prototype.truncate = function (n) {
        let str = this.toString();
        let space = str.lastIndexOf(' ');

        if (str.length <= n) {
            return str;
        }

        if (n < 4) {
            return '.'.repeat(n);

        }

        if (space === -1) {
            return str.slice(0, n - 3) + '...';
        }

        let tokens = this.split(' ');
        let result = tokens[0];
        for (let i = 1; i < tokens.length; i++) {
            if (result.length + tokens[i].length + 4 > n) // space + '...'
                return result + '...';
            result += ` ${tokens[i]}`;
        }
    };

    String.format = function (string, ...params) {
        for (let i = 1; i < arguments.length; i++) {
            string = string.replace('{' + (i - 1) + '}', arguments[i]);
        }

        return string;
    };
})();