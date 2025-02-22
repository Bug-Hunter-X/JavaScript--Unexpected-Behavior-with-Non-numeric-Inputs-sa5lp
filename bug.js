function add(a, b) {
  return a + b; 
}

function subtract(a, b) {
  return a - b; 
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 7)); // Output: 3

// Uncommon bug:  Incorrect handling of non-numeric input
console.log(add(5, "3")); //Output: 53 (String concatenation instead of addition)
console.log(subtract("10", 7)); //Output: 107 (String concatenation instead of subtraction)