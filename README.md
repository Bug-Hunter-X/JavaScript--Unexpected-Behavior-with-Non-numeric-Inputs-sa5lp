# JavaScript: Unexpected Behavior with Non-numeric Inputs

This repository demonstrates a common yet subtle bug in JavaScript related to type coercion and its impact on mathematical functions.

## Description

JavaScript's dynamic typing, while flexible, can cause unexpected results when functions aren't explicitly designed to handle different data types.  The `bug.js` file shows a simple example of addition and subtraction functions.  When these functions receive non-numeric inputs, JavaScript performs string concatenation instead of mathematical operations, leading to incorrect outputs.

## Solution

The `bugSolution.js` file provides a solution by explicitly type-checking inputs and throwing an error or performing appropriate conversions if the inputs are not numbers.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` to see the buggy code and its unexpected output.
3. Open `bugSolution.js` to see how to correctly handle non-numeric inputs.