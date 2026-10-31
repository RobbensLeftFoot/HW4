//HW Comp584 Shant Mikhailian Problems 1-15

//exercise 1
var thisIsANewVariable = 10;
if (thisIsANewVariable == 10) {
//code block
}

//exercise 2

let message = `Hi`;
let itemPrice = 100;
let isLoggedIn = true;
console.log(message, itemPrice, isLoggedIn);

//exercise 3

let currentScore = 95; //stores the player's current score

//exercise 4

console.log('100' == 100);
console.log('100' === 100);

//exercise 5

let isWeekend = false;
let schedule;
schedule = isWeekend ? "Day off" : "Work day";
console.log(schedule);

//exercise 6

let userAge = 16;
if (userAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

//exercise 7

let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log("Ready to process");
}

//exercise 8

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//exercise 9

for (let i = 0; i <= 9; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

//exercise 10

let counter = 10;
do {
  console.log("Running once");
} while (counter < 10);

//exercise 11

function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);
console.log(resultArea);

//exercise 12

let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');
fruitList.shift();
console.log(fruitList.indexOf('Banana'));

//exercise 13

let originalData = [1, 2, 3];
let clonedData = originalData.slice();
console.log(clonedData);


//exercise 14

function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

//exercise 15

let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];
console.log(animalArray);