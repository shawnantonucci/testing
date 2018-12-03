
/**
 * Accept a string, returns the string with the characters reversed.
 * @param {string} string
 * @returns {string} reversedString 
 */

function reverseString(string) {
    const arr = string.split('');
    const reversed = arr.reverse();
    let returnVal = '';
    for (let i = 0; i < reversed.length; i++) {
        returnVal = returnVal + reversed[i];
    }
    return returnVal;
}

module.exports = {
    reverseString,
};



// Pre-Test //

// 1. (pre-test) Summarize what your function does
// 2. (pre-test) Write function signature

// Tests //

// 1. Get red - write test, have it fail
// 2. Get green - fix thing that's getting tested, have it pass
// 3. Refactor - optional, make it better, keep it green