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
const matrix_1 = require("../models/matrix");
const mocha = __importStar(require("mocha"));
function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}
mocha.it('should create proper matrix from array with one element', () => {
    const input = {
        id: 1,
        json: JSON.stringify([0])
    };
    assert.strictEqual((new matrix_1.Matrix(input)).is_valid, true);
});
mocha.it('should create proper matrix from array with n*n elements', () => {
    const amount = getRandomNumber(10) ** 2;
    const matrixArray = [];
    for (let i = 0; i < amount; i++) {
        matrixArray.push(getRandomNumber(100));
    }
    const input = {
        id: 1,
        json: JSON.stringify(matrixArray)
    };
    assert.strictEqual((new matrix_1.Matrix(input)).is_valid, true);
});
mocha.it('should create invalid matrix from array with n*n + 1 elements', () => {
    const amount = getRandomNumber(10) ** 2 + 1;
    const matrixArray = [];
    for (let i = 0; i < amount; i++) {
        matrixArray.push(getRandomNumber(100));
    }
    const input = {
        id: 1,
        json: JSON.stringify(matrixArray)
    };
    assert.strictEqual((new matrix_1.Matrix(input)).is_valid, false);
    assert.deepStrictEqual((new matrix_1.Matrix(input)).flat(), []);
});
mocha.it('should create proper matrix from array with n*n elements and successfully flatten it', () => {
    const amount = getRandomNumber(10) ** 2;
    const matrixArray = [];
    for (let i = 0; i < amount; i++) {
        matrixArray.push(getRandomNumber(100));
    }
    const matrixJson = JSON.stringify(matrixArray);
    const input = {
        id: 1,
        json: matrixJson
    };
    assert.strictEqual(JSON.stringify((new matrix_1.Matrix(input)).flat()), matrixJson);
});
