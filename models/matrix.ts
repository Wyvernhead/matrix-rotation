import {ParserRowMap} from "fast-csv"

type InputRow = ParserRowMap  & {
    id: number
    json: string
}

type OutputRow = {
    id: number
    json: string
    is_valid: boolean
}

class Matrix {
    id: number
    matrix: Array<Array<number>> = []
    is_valid: boolean

    constructor(inputRow: InputRow) {
        this.id = inputRow.id
        const matrixArray = JSON.parse(inputRow.json)
        const matrixSideSize = Math.sqrt(matrixArray.length)

        if (!Number.isInteger(matrixSideSize)) {
            this.is_valid = false
        } else {
            this.is_valid = true

            for (let i = 0; i < matrixSideSize; i++) {
                this.matrix.push(matrixArray.splice(0, matrixSideSize))
            }
        }

        return this
    }

    flat(): number[] {
        return this.matrix.reduce((accumulator: number[], currentValue:number[]) => {
            accumulator.push(...currentValue)
            return accumulator
        }, [])
    }
}

export {InputRow, OutputRow, Matrix}
