const { throwInvalidRange, checkValue } = require('./utils')
const { numRange } = require('./numRanges')



const range = (start, end, step = 1) => {
  if (checkValue(start) && end === undefined) return [start]; //tested

  if (!checkValue(start) || !checkValue(end)) return throwInvalidRange(start, end);
  if (typeof start !== typeof end) return throwInvalidRange(start, end)

  if (start === end) return [start]; //tested

  if (!Number.isInteger(step)) return throwInvalidRange(step); //tested

  if (step < 0) return throwInvalidRange(step); //tested

  if (Number.isInteger(start) && Number.isInteger(end)) {
    return numRange(start, end, step)
  }
};

module.exports = range;
