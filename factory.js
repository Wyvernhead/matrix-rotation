"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
const not_implemented_error_1 = require("./errors/not-implemented-error");
const csv_formatter_1 = require("./formatter/csv-formatter");
const csv_reader_1 = require("./reader/csv-reader");
const processor_1 = require("./processor/processor");
class Factory {
    static createReader(inputFilename, readerOptions) {
        if (inputFilename.endsWith('.csv')) {
            return new csv_reader_1.CsvReader(readerOptions);
        }
        else {
            throw new not_implemented_error_1.NotImplementedError(`We don't know how to parse file ${inputFilename}`);
        }
    }
    static createFormatter(inputFilename, formatterOptions) {
        if (inputFilename.endsWith('.csv')) {
            return new csv_formatter_1.CsvFormatter(formatterOptions);
        }
        else {
            throw new not_implemented_error_1.NotImplementedError(`We don't know how to write ${inputFilename}`);
        }
    }
    static createProcessor() {
        return new processor_1.Processor();
    }
}
exports.Factory = Factory;
