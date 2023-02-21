import {InputRow, Matrix, OutputRow} from "../models/matrix"

class Processor {
    public processMatrix(inputRow: InputRow): OutputRow {
        return this.formatToOutput(
            this.rotateMatrix(
                this.formatFromInput(inputRow)
            )
        )
    }

    private rotateMatrix(matrix: Matrix) {
        if (!matrix.is_valid) return matrix

        let currentRow = 0, currentColumn = 0, previousValue = null, currentValue = null
        let currentProcessingWidth = matrix.matrix.length, currentProcessingHeight = matrix.matrix.length

        while (currentRow < currentProcessingHeight && currentColumn < currentProcessingWidth) {
            if (currentRow + 1 == currentProcessingHeight || currentColumn + 1 == currentProcessingWidth) {
                break
            }

            previousValue = matrix.matrix[currentRow + 1][currentColumn]

            for (let i = currentColumn; i < currentProcessingWidth; i++) {
                currentValue = matrix.matrix[currentRow][i]
                matrix.matrix[currentRow][i] = previousValue
                previousValue = currentValue
            }
            currentRow++

            for (let i = currentRow; i < currentProcessingHeight; i++) {
                currentValue = matrix.matrix[i][currentProcessingWidth - 1]
                matrix.matrix[i][currentProcessingWidth - 1] = previousValue
                previousValue = currentValue
            }
            currentProcessingWidth--

            if (currentRow < currentProcessingHeight) {
                for (let i = currentProcessingWidth - 1; i >= currentColumn; i--) {
                    currentValue = matrix.matrix[currentProcessingHeight - 1][i]
                    matrix.matrix[currentProcessingHeight - 1][i] = previousValue
                    previousValue = currentValue
                }
            }
            currentProcessingHeight--

            if (currentColumn < currentProcessingWidth) {
                for (let i = currentProcessingHeight - 1; i >= currentRow; i--) {
                    currentValue = matrix.matrix[i][currentColumn]
                    matrix.matrix[i][currentColumn] = previousValue
                    previousValue = currentValue
                }
            }
            currentColumn++
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
