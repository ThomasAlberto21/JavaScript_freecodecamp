// TODO : The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.

function compareEquality(a, b) {
  if (a === b) {
    console.log('Equal');
  } else {
    console.log('Not Equal');
  }
}

compareEquality(10, '10');
