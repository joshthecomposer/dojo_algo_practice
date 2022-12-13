function removeBlanks(str) {
    let l = str.length - 1;
    result = ''
    for (let i = 0; i < l; i++) {
        if (str[i] === ' ') {
            continue;
        }
        result += str[i]
    }
    return `removeBlanks() return value is ${result}`
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))

function getDigits(str) {
    let check = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let l = str.length
    let i = 0
    let result = '';
    while (i < l) {
        for (let j = 0; j < check.length; j++) {
            if (str[i] === check[j]) { 
                result += check[j]
            }
        }
        i++;
    }
    return `getDigits() return value is ${result}`
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

function acronym(str) {
    str = str.split(' ')
    let result = ''
    let i = 0
    let l = str.length
    while (i < l) { 
        result += str[i][0].toUpperCase()
        i++
    }

    return `acronym() return value is ${result}`
}

console.log(acronym("Live from New York, it's Saturday Night!"))

function countNonSpaces(str) {
    let result = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result++
        }
    }
    return `count() return value is ${result}`
}
console.log(countNonSpaces("Hello world !"))

function removeShorterStrings(arr, v) {
    let result = []
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i].length >= v) {
            index = result.length
            result[index] = arr[i]

        }
    }
    return `removeShorterStrings() return value is ${result}`
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))