const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const forwardCharRange = (start, end, step) => {
    let res = [];
    let startIdx = chars.indexOf(start)
    let endIdx = chars.indexOf(end)

    for (let i = startIdx; i <= endIdx; i += step) {
        res.push(chars[i]);
    }
    return res;
}

const reverseCharRange = (start, end, step) => {
    let res = [];
    let startIdx = chars.indexOf(start)
    let endIdx = chars.indexOf(end)

    for (let i = startIdx; i >= endIdx; i -= step) {
        res.push(chars[i]);
    }
    return res;
}

const charRange = (start, end, step) => {
    if (start < end) {
        return forwardCharRange(start, end, step)
    }
    return reverseCharRange(start, end, step)
}

module.exports = { charRange }
