interface RangeFunction {
  (length: number, initial: number, increment: number): number[]
}

const rangeArray: RangeFunction = (length, initial, increment) => {
  return Array.from({ length }, (_, index) => initial + index * increment);
}

export default rangeArray;
