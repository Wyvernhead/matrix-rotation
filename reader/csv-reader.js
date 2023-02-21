"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvReader = void 0;
const fast_csv_1 = require("fast-csv");
class CsvReader {
    constructor(options) {
        this.options = options;
    }
    createParser() {
        return (0, fast_csv_1.parse)(this.options);
    }
}
exports.CsvReader = CsvReader;
