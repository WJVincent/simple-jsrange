const util = require('util');

const newRangeError = (...args) =>
  new RangeError(`Invalid args for range: ${util.inspect(...args)}`)

const throwInvalidRange = (...args) => {
  throw newRangeError(...args);
}
const checkValue = (value) => {
  const isNumber = typeof value === "number";
  const isValidString = typeof value === "string" && value !== " " && value.length === 1;
  return isNumber || isValidString;
};

const forwardNumRange = (start, end, step) => {
  let nums = [];
  for(let i = start; i < end; i += step){
    nums.push(i);
  }
  return nums;
}

const reverseNumRange = (start, end, step) => {
  let nums = [];
  for(let i = start; i > end; i -= step){
    nums.push(i);
  }
  return nums
}

const numRange = (start, end, step) => {
  if (start < end){
    return forwardNumRange(start, end, step)
  }
  console.log('we got here')
  return reverseNumRange(start, end, step)
}

const range = (start, end, step = 1) => {
  if (checkValue(start) && !end) return [start];

  if(!checkValue(start) || !checkValue(end)) return throwInvalidRange(start, end);
  if(typeof start !== typeof end) return throwInvalidRange(start, end)

  if(start === end) return [start];

  if(!Number.isInteger(step)) return throwInvalidRange(step);

  if(step < 0) return throwInvalidRange(step);

  if(Number.isInteger(start) && Number.isInteger(end)){
    return numRange(start, end, step)
  }
};
