// TODO : Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
// TODO : Add the number to the end of the array, then remove the first element of the array.
// TODO : The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
  arr.push(item); // Add item to the end of the array
  item = arr.shift(); // Remove the first element of the array
  return item;
}

let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

console.log("=====================================");

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 7));
console.log("After: " + JSON.stringify(testArr));
