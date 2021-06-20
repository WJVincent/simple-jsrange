const flags = {
    step: 1,
    i: true,
};

const forwardNumRange = (start, end, step) => {
    let res = [];
    for (let i = start; i <= end; i += step) {
        res.push(i);
    }
    return res;
}

const reverseNumRange = (start, end, step) => {
    let res = [];
    for (let i = start; i >= end; i -= step) {
        res.push(i);
    }
    return res
}

const numRange = (start, end, step) => {
    if (start < end) {
        return forwardNumRange(start, end, step)
    }
    return reverseNumRange(start, end, step)
}

module.exports = { numRange }
