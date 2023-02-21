import {FormatterOptionsArgs, ParserOptionsArgs} from "fast-csv"
import {NotImplementedError} from "./errors/not-implemented-error"
import {InputRow, OutputRow} from "./models/matrix"
import {FormatterInterface} from "./formatter/formatter-interface"
import {CsvFormatter} from "./formatter/csv-formatter"
import {CsvReader} from "./reader/csv-reader"
import {ReaderInterface} from "./reader/reader-interface"
import {Processor} from "./processor/processor"

export class Factory {
    static createReader(inputFilename: string, readerOptions: ParserOptionsArgs): ReaderInterface {
        if (inputFilename.endsWith('.csv')) {
            return new CsvReader(readerOptions)
        } else {
            throw new NotImplementedError(`We don't know how to parse file ${inputFilename}`)
        }
    }

    static createFormatter(inputFilename: string, formatterOptions: FormatterOptionsArgs<InputRow, OutputRow>): FormatterInterface {
        if (inputFilename.endsWith('.csv')) {
            return new CsvFormatter(formatterOptions)
        } else {
            throw new NotImplementedError(`We don't know how to write ${inputFilename}`)
        }
    }

    static createProcessor(): Processor {
        return new Processor()
    }
}
