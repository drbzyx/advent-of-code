import {
  parseInputAsStrings,
  splitOnSeparator,
  deepConvertStringToInt,
} from '../inputs/helper.js'

const input = deepConvertStringToInt(
  splitOnSeparator(parseInputAsStrings('inputs/2022/1.txt'))
)

const sum = (partialSum, a) => partialSum + a

const output = input.map((value) => value.reduce(sum, 0)).sort((a, b) => b - a)

const d1p1 = output[0]

const d1p2 = output.slice(0, 3).reduce(sum, 0)

export { d1p1, d1p2 }
