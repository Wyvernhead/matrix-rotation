import * as assert from "assert"
import {InputRow, OutputRow} from "../models/matrix"
import * as mocha from "mocha"
import {Processor} from "../processor/processor"

mocha.it('should rotate 2x2 matrix', () => {
    const processor: Processor = new Processor()
    const input: InputRow = {
        id: 1,
        json: JSON.stringify([1, 2, 3, 4])
    }
    const expected: OutputRow = {
        id: 1,
        json: JSON.stringify([3, 1, 4, 2]),
        is_valid: true
    }

    assert.deepStrictEqual(
        processor.processMatrix(input),
        expected
    )
})

mocha.it('should rotate 3x3 matrix', () => {
    const processor: Processor = new Processor()
    const input: InputRow = {
        id: 1,
        json: JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])
    }
    const expected: OutputRow = {
        id: 1,
        json: JSON.stringify([4, 1, 2, 7, 5, 3, 8, 9, 6]),
        is_valid: true
    }

    assert.deepStrictEqual(
        processor.processMatrix(input),
        expected
    )
})
