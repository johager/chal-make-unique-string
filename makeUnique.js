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

function testMakeUnique(str, exp) {
    const res = makeUnique(str)
    console.log("str:", str, "  res:", res, "  exp:", exp, "  passed:", res === exp)
}

testMakeUnique('helloworld','helowrd')
testMakeUnique('iwanttoclimbamountain','iwantoclmbu')