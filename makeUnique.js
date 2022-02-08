/*
Write a function to remove all duplicate letters from a provided string. The string will only contain lowercase letters between a - z. The string will not contain spaces.

For example:

>>> makeUnique('helloworld')
// helowrd

>>> makeUnique('iwanttoclimbamountain')
// iwantoclmbu
*/

function makeUnique(str) {
    let newStr = ''
    for (i = 0; i < str.length; i++) {
        if (!newStr.includes(str[i])) {
            newStr += str[i]
        }
    }
    return newStr
}

// Set in JavaScript retains order
// A Set in swift does not, so I didn't consider this more-elegant option
function makeUnique2(str) {
    let newChars = new Set(str)
    return [...newChars].join('')
}

function testMakeUnique(str, exp) {
    const res = makeUnique2(str)
    console.log("str:", str, "  res:", res, "  exp:", exp, "  passed:", res === exp)
}

testMakeUnique('helloworld','helowrd')
testMakeUnique('iwanttoclimbamountain','iwantoclmbu')