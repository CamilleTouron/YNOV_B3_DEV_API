exports.callThrowException = function callThrowException() {
    throw new Error('You cannot execute this function');
}

exports.customSum = function customSum(a, b) {
    if (b < 0 || a < 0) {
        throw new Error('This sum works only with positives numbers');
    }
    return a + b;
}

exports.complexSum = function complexSum(a, b) {
    if (b > a) {
        throw new Error('This sum works only if 2nd arg < 1st arg');
    }
    return this.customSum(a, b);
}