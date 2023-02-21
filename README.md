# matrix-rotation

Cli tool to rotate matrix clockwise.

Supports only rectangular matrix.

## Installation

- Clone this repo
- Inside repo dir run `npm install --production=false`

## How to use

- Create input CSV file, e.g. `input.csv`. You can use existing `example-input.csv` as an example.
- Run command `node cli.js %path_to_input_file_here` with actual relative path to your input file
- Or run `node cli.js %path_to_input_file_here > %path_to_output_file` with actual relative paths to input and 
  output files

E.G. `node cli.js input.csv > output.csv`

Input file structure must follow format:
```csv
id,json
1,"[1,2,3,4]"
2,"[0]"
3,"[1,2,3]"
```

Expected output file format:
```csv
id,json,is_valid
1,"[3,1,4,2]",true
2,"[0]",true
3,"[]",false
```

## How to test

- Run `npm run test`
