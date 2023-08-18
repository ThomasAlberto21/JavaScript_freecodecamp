/*

    You are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() to round the value down to the nearest whole number.

    Use this technique to generate and return a random whole number in the range from 0 to 9.

*/

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
