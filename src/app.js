/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(num, multi = num) {
        if (num === 1) { return (multi) }

        multi = multi * (num - 1)
        return findFactorial(num - 1, multi)

    }
    //console.log(findFactorial(5))
    //console.log(findFactorial(8))

//Exercise 2
const reverseString = function(str) {

        return str ? reverseString(str.substr(1)) + str[0] : str;

    }
    //console.log(reverseString("hello"))

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2) {
    if (arr1.length < 1) { return arr2 }

    arr2.push(arr1.shift())
    return swap(arr1, arr2)

}

console.log("arr1:", arr1)
console.log("arr2:", arr2)
swap(arr1, arr2)
console.log("arr1:", arr1)
console.log("arr2:", arr2)

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }