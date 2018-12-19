'use strict';

////////// .forEach(); is used to execute the same code on every element in an array but does not change the array and returns undefined.
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Iterate over fruits below
fruits.forEach(item => console.log(`I want to eat a ${item}.`))


/////////// .map(); executes the same code on every element in an array and returns a new array with the updated elements.
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);
console.log(smallNumbers)


////////// .filter(); checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})


////////// .findIndex(); returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(creature => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});


////////// .reduce(); iterates through an array and takes the values of the elements and returns a single value.
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);


///////// .some();
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below
console.log(words.some(word => {
  return word.length < 6;
}));
// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});
// Make sure to uncomment the code below and fix the incorrect code before running it
console.log(interestingWords.every((word) => {return word.length > 5}));
