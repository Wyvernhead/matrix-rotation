import {FormatterInterface} from "./formatter-interface"
import {CsvFormatterStream, format, FormatterOptionsArgs} from "fast-csv"
import {InputRow, OutputRow} from "../models/matrix"

class CsvFormatter implements FormatterInterface{
    private readonly options: FormatterOptionsArgs<InputRow, OutputRow>
    constructor(formatterOptions: FormatterOptionsArgs<InputRow, OutputRow>) {
        this.options = formatterOptions
    }

    createFormatter(): CsvFormatterStream<InputRow, OutputRow> {
        return format<InputRow, OutputRow>(this.options)
    }
}

export {CsvFormatter}
