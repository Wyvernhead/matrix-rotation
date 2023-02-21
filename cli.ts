import * as fs from "fs"
import * as path from "path"
import {Factory} from "./factory"
import {FormatterOptionsArgs, ParserOptionsArgs} from "fast-csv"
import {InputRow, OutputRow} from "./models/matrix"
import {ArgumentNotSpecified} from "./errors/argument-not-specified"

const cliArguments = process.argv
cliArguments.splice(0, 2)
const inputFile = cliArguments.pop()
const readerOptions: ParserOptionsArgs = {headers: true, ignoreEmpty: true}
const formatterOptions: FormatterOptionsArgs<InputRow, OutputRow> = {headers: true}

if (inputFile === undefined) {
    throw new ArgumentNotSpecified('Please, specify input file')
}

const reader = Factory.createReader(inputFile, readerOptions)
const formatter = Factory.createFormatter(inputFile, formatterOptions)

const readStream = fs.createReadStream(path.resolve(__dirname, inputFile))

readStream
    .pipe(reader.createParser())
    .pipe(formatter.createFormatter())
    .transform((row: InputRow): OutputRow => {
        return Factory.createProcessor().processMatrix(row)
    })
    .pipe(process.stdout)
