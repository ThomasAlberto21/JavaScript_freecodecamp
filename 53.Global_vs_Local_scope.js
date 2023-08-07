// TODO : Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

// Setup
const outerWear = "T-Shirt"; // Global variable

function myOutfit() {
  const outerWear = "sweater"; // Local variable
  return outerWear;
}

myOutfit();
