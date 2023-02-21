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
const assert = __importStar(require("assert"));
const mocha = __importStar(require("mocha"));
const processor_1 = require("../processor/processor");
mocha.it('should rotate 2x2 matrix', () => {
    const processor = new processor_1.Processor();
    const input = {
        id: 1,
        json: JSON.stringify([1, 2, 3, 4])
    };
    const expected = {
        id: 1,
        json: JSON.stringify([3, 1, 4, 2]),
        is_valid: true
    };
    assert.deepStrictEqual(processor.processMatrix(input), expected);
});
mocha.it('should rotate 3x3 matrix', () => {
    const processor = new processor_1.Processor();
    const input = {
        id: 1,
        json: JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])
    };
    const expected = {
        id: 1,
        json: JSON.stringify([4, 1, 2, 7, 5, 3, 8, 9, 6]),
        is_valid: true
    };
    assert.deepStrictEqual(processor.processMatrix(input), expected);
});
