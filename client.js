/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */


const hobbies =
     ['Spanish language',
          'Chess',
          'Skyrim',
          'Cycling',
          'Cooking'];

console.log('Group hobbies:');

for (let hobby of hobbies) {
     console.log(hobby);
}

console.log('Total number of hobbies: ', hobbies.length);

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

const colors =
     ['Burgundy',
          'Teal',
          'Goldenrod',
          'Periwinkle',
          'Winedark'];

console.log('Array of colors as strings: ', colors);

let tealCount = 0

for (let color of colors) {
     if (color === 'Teal') {
          tealCount++;
     }
}

console.log('Number of times Teal occurs in the array:', tealCount);

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

const numbers =
     [1, 2, 3, 5, 8, 13, 21, 34]

let oddNumbers = [];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 === 0) {
          evenNumbers.push(numbers[i]);
     } else {
          oddNumbers.push(numbers[i])
     };
}

console.log('Original array : ', numbers);
console.log('Odd number array : ', oddNumbers);
console.log('Even number array : ', evenNumbers);

// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

const booleanValues = [true, false, true, false, true];

let toggled = [];

for (let i = 0 ; i < booleanValues.length ; i++) {
     toggled.push(!booleanValues[i]);
}

console.log('Original Boolean Values: ', booleanValues);
console.log('Toggled Boolean values: ', toggled);


// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */

const numArray = [1, 7, 3, 5, 12, 2, 16, 0, 13, 0, 0, 0];

console.log(numArray);

while (numArray[numArray.length - 1] === 0){
     numArray.pop();
}

console.log(numArray);
// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */


// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
