import * as assert from "assert"
import {InputRow, Matrix} from "../models/matrix"
import * as mocha from "mocha"

function getRandomNumber(limit: number): number{
    return Math.floor(Math.random() * limit)
}

mocha.it('should create proper matrix from array with one element', () => {
    const input: InputRow = {
        id: 1,
        json: JSON.stringify([0])
    }

    assert.strictEqual(
        (new Matrix(input)).is_valid,
        true
    )
})

mocha.it('should create proper matrix from array with n*n elements', () => {
    const amount = getRandomNumber(10) ** 2
    const matrixArray = []
    for (let i = 0; i < amount; i++) {
        matrixArray.push(getRandomNumber(100))
    }

    const input: InputRow = {
        id: 1,
        json: JSON.stringify(matrixArray)
    }

    assert.strictEqual(
        (new Matrix(input)).is_valid,
        true
    )
})

mocha.it('should create invalid matrix from array with n*n + 1 elements', () => {
    const amount = getRandomNumber(10) ** 2 + 1
    const matrixArray = []
    for (let i = 0; i < amount; i++) {
        matrixArray.push(getRandomNumber(100))
    }

    const input: InputRow = {
        id: 1,
        json: JSON.stringify(matrixArray)
    }

    assert.strictEqual(
        (new Matrix(input)).is_valid,
        false
    )

    assert.deepStrictEqual(
        (new Matrix(input)).flat(),
        []
    )
})

mocha.it('should create proper matrix from array with n*n elements and successfully flatten it', () => {
    const amount = getRandomNumber(10) ** 2
    const matrixArray = []
    for (let i = 0; i < amount; i++) {
        matrixArray.push(getRandomNumber(100))
    }
    const matrixJson: string = JSON.stringify(matrixArray)

    const input: InputRow = {
        id: 1,
        json: matrixJson
    }

    assert.strictEqual(
        JSON.stringify((new Matrix(input)).flat()),
        matrixJson
    )
})
