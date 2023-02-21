import {ReaderInterface} from "./reader-interface"
import {CsvParserStream, parse, ParserOptionsArgs} from "fast-csv"
import {InputRow, Matrix} from "../models/matrix"

export class CsvReader implements ReaderInterface{
    constructor(options: ParserOptionsArgs) {
        this.options = options
    }
    private readonly options: ParserOptionsArgs;
    createParser(): CsvParserStream<InputRow, Matrix> {
        return parse<InputRow, Matrix>(this.options)
    }
}
