import {InputRow, Matrix} from "../models/matrix"
import {CsvParserStream} from "fast-csv"

export interface ReaderInterface {
    createParser(): CsvParserStream<InputRow, Matrix>
}

