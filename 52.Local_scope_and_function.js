function myLocalScope() {
  // Only change code below this line
  const myVar = "myLocalScope";
  console.log("inside", myVar);
}
myLocalScope();

console.log("outside myLocalScope", myVar); // ERROR: myVar is not defined outside of myLocalScope
