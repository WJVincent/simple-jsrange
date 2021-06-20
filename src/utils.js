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

module.exports = {
    throwInvalidRange,
    checkValue
}
