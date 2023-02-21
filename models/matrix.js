"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
class Matrix {
    constructor(inputRow) {
        this.matrix = [];
        this.id = inputRow.id;
        const matrixArray = JSON.parse(inputRow.json);
        const matrixSideSize = Math.sqrt(matrixArray.length);
        if (!Number.isInteger(matrixSideSize)) {
            this.is_valid = false;
        }
        else {
            this.is_valid = true;
            for (let i = 0; i < matrixSideSize; i++) {
                this.matrix.push(matrixArray.splice(0, matrixSideSize));
            }
        }
        return this;
    }
    flat() {
        return this.matrix.reduce((accumulator, currentValue) => {
            accumulator.push(...currentValue);
            return accumulator;
        }, []);
    }
}
exports.Matrix = Matrix;
