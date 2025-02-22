function add(a, b) {
  // Type checking to ensure both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b; 
}

function subtract(a, b) {
  // Type checking to ensure both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a - b; 
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 7)); // Output: 3

//Improved handling of non-numeric input
try{
console.log(add(5, "3")); // Throws an error
} catch(e){
  console.error(e)
}

try{
console.log(subtract("10", 7)); //Throws an error
} catch(e){
  console.error(e)
}
