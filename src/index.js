const { throwInvalidRange, checkValue } = require('./utils')
const { numRange } = require('./numRanges')



const range = (start, end, step = 1) => {
  if (checkValue(start) && end === undefined) return [start];

  if (!checkValue(start) || !checkValue(end)) return throwInvalidRange(start, end);
  if (typeof start !== typeof end) return throwInvalidRange(start, end)

  if (start === end) return [start];

  if (!Number.isInteger(step)) return throwInvalidRange(step);

  if (step < 0) return throwInvalidRange(step);

  if (Number.isInteger(start) && Number.isInteger(end)) {
    return numRange(start, end, step)
  }
};

module.exports = range;
