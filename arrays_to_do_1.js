//Push Front

let pushFront = [5,7,2,3]
i=pushFront.length
while (i-- > 0) {
    pushFront[i + 1] = pushFront[i]
}
pushFront[0] = 8
console.log(pushFront)

function popFront(arr) {
    let r = arr[0]
    let l = arr.length
    let i = 0
    while (i < l) {
        if (!arr[i+1]) {
            arr.length--;
            return `popFront() return value is ${r}, array is now ${arr}`
        }
        arr[i] = arr[i + 1]
        i++;
    }
}

console.log(popFront([1,5,10,15]))

function insertAt(arr, index, v) {
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i + 1] = arr[i]
    }
    arr[index] = v
    return `inserAt() return value is ${arr}`
}

console.log(insertAt([100,200,5], 2, 311))

function removeAt(arr,v) {
    let r = arr[v]
    let l = arr.length
    let i = v
    while (i < l) {
        if (!arr[i+1]) {
            arr.length--;
            return `removeAt() return value is ${r}, array is now ${arr}`
        }
        arr[i] = arr[i + 1]
        i++;
    }
}

console.log(removeAt([8,20,55,44,98], 3))

function swapPairs(arr) {
    let l = arr.length
    let i = 0
    while (i < l) {
        if (!arr[i+1]) {
            break;
        }
        let t = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = t
        i += 2
    }
    return `swapPairs() return value is ${arr}`;
}

console.log(swapPairs(["Brendan",true,42]))

function removeDuplicates(arr) {
    let l = arr.length
    let i = 0
    while (i < l) {
        if (arr[i+1] == arr[i]) {
            removeAt(arr, i)
            l = arr.length
        } else {
            i++
        }
    }
    return `removeDuplicates() return vlaue is ${arr}`
}

console.log(removeDuplicates([-2,-2,3.14,5,5,10]))