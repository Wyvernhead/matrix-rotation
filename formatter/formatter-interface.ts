import {CsvFormatterStream} from "fast-csv"
import {InputRow, OutputRow} from "../models/matrix"

export interface FormatterInterface {
    createFormatter(): CsvFormatterStream<InputRow, OutputRow>
}
