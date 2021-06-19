const forwardNumRange = (start, end, step) => {
    let nums = [];
    for (let i = start; i < end; i += step) {
        nums.push(i);
    }
    return nums;
}

const reverseNumRange = (start, end, step) => {
    let nums = [];
    for (let i = start; i > end; i -= step) {
        nums.push(i);
    }
    return nums
}

const numRange = (start, end, step) => {
    if (start < end) {
        return forwardNumRange(start, end, step)
    }
    console.log('we got here')
    return reverseNumRange(start, end, step)
}

module.exports = { numRange }
