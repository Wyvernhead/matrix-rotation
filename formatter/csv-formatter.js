"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFormatter = void 0;
const fast_csv_1 = require("fast-csv");
class CsvFormatter {
    constructor(formatterOptions) {
        this.options = formatterOptions;
    }
    createFormatter() {
        return (0, fast_csv_1.format)(this.options);
    }
}
exports.CsvFormatter = CsvFormatter;
