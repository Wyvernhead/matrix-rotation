import {InputRow, Matrix, OutputRow} from "../models/matrix"

class Processor {
    public processMatrix(inputRow: InputRow): OutputRow {
        return this.formatToOutput(
            this.rotateMatrixClockwise(
                this.formatFromInput(inputRow)
            )
        )
    }

    private rotateMatrixClockwise(matrix: Matrix): Matrix {
        if (!matrix.is_valid) return matrix

        let topEdge = 0, leftEdge = 0, previousValue = null, currentValue = null
        let rightEdge = matrix.matrix.length, bottomEdge = matrix.matrix.length

        while (topEdge < bottomEdge && leftEdge < rightEdge) {
            if (topEdge + 1 == bottomEdge || leftEdge + 1 == rightEdge) {
                break
            }

            previousValue = matrix.matrix[topEdge + 1][leftEdge]

            for (let i = leftEdge; i < rightEdge; i++) {
                currentValue = matrix.matrix[topEdge][i]
                matrix.matrix[topEdge][i] = previousValue
                previousValue = currentValue
            }
            topEdge++

            for (let i = topEdge; i < bottomEdge; i++) {
                currentValue = matrix.matrix[i][rightEdge - 1]
                matrix.matrix[i][rightEdge - 1] = previousValue
                previousValue = currentValue
            }
            rightEdge--

            if (topEdge < bottomEdge) {
                for (let i = rightEdge - 1; i >= leftEdge; i--) {
                    currentValue = matrix.matrix[bottomEdge - 1][i]
                    matrix.matrix[bottomEdge - 1][i] = previousValue
                    previousValue = currentValue
                }
            }
            bottomEdge--

            if (leftEdge < rightEdge) {
                for (let i = bottomEdge - 1; i >= topEdge; i--) {
                    currentValue = matrix.matrix[i][leftEdge]
                    matrix.matrix[i][leftEdge] = previousValue
                    previousValue = currentValue
                }
            }
            leftEdge++
        }

        return matrix
    }

    private rotateMatrixAntiClockwise(matrix: Matrix): Matrix {
        if (!matrix.is_valid) return matrix

        let topEdge = 0, leftEdge = -1, previousValue = null, currentValue = null
        let rightEdge = matrix.matrix.length - 1, bottomEdge = matrix.matrix.length

        while (topEdge < bottomEdge && leftEdge < rightEdge) {
            if (topEdge + 1 == bottomEdge || leftEdge + 1 == rightEdge) {
                break
            }

            previousValue = matrix.matrix[topEdge + 1][rightEdge]

            for (let i = rightEdge; i > leftEdge; i--) {
                currentValue = matrix.matrix[topEdge][i]
                matrix.matrix[topEdge][i] = previousValue
                previousValue = currentValue
            }
            topEdge++

            for (let i = topEdge; i < bottomEdge; i++) {
                currentValue = matrix.matrix[i][leftEdge + 1]
                matrix.matrix[i][leftEdge + 1] = previousValue
                previousValue = currentValue
            }
            leftEdge++

            if (topEdge < bottomEdge) {
                for (let i = leftEdge + 1; i <= rightEdge; i++) {
                    currentValue = matrix.matrix[bottomEdge - 1][i]
                    matrix.matrix[bottomEdge - 1][i] = previousValue
                    previousValue = currentValue
                }
            }
            bottomEdge--

            if (leftEdge < rightEdge) {
                for (let i = bottomEdge - 1; i >= topEdge; i--) {
                    currentValue = matrix.matrix[i][rightEdge]
                    matrix.matrix[i][rightEdge] = previousValue
                    previousValue = currentValue
                }
            }
            rightEdge--
        }

        return matrix
    }

    formatFromInput(input: InputRow): Matrix {
        return new Matrix(input)
    }

    formatToOutput(matrix: Matrix): OutputRow {
        return {
            id: matrix.id,
            json: JSON.stringify(matrix.flat()),
            is_valid: matrix.is_valid
        }
    }
}

export {Processor}
