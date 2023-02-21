"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const factory_1 = require("./factory");
const argument_not_specified_1 = require("./errors/argument-not-specified");
const cliArguments = process.argv;
cliArguments.splice(0, 2);
const inputFile = cliArguments.pop();
const readerOptions = { headers: true, ignoreEmpty: true };
const formatterOptions = { headers: true };
if (inputFile === undefined) {
    throw new argument_not_specified_1.ArgumentNotSpecified('Please, specify input file');
}
const reader = factory_1.Factory.createReader(inputFile, readerOptions);
const formatter = factory_1.Factory.createFormatter(inputFile, formatterOptions);
const readStream = fs.createReadStream(path.resolve(__dirname, inputFile));
readStream
    .pipe(reader.createParser())
    .pipe(formatter.createFormatter())
    .transform((row) => {
    return factory_1.Factory.createProcessor().processMatrix(row);
})
    .pipe(process.stdout);
