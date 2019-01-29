/**
 * Basic for loop
 */

const scores = [24, 32, 17];
const scoresArrayLength = scores.length;

for (let i = 0; i < scoresArrayLength; i++) {
  console.log('Score #' + i + ': ' + scores[i]);
}

/**
 * Basic while loop
 */

let i = 1;

while (i < 10) {
  console.log('i: ' + i);
  i++;
}


const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
i = 0;

while (cars[i]) {
  console.log('cars[' + i + ']: ' + cars[i]);
  i++;
}

/**
 * forEach
 */
cars.forEach(car => {
  console.log(car);
});

/**
 * for...of
 */
for (let car of cars) {
  console.log(car);
}

/**
 * for...in
 */
const iterable = [8, 55, 9];

for (let x in iterable) {
  console.log(x);
}

for (let x of iterable) {
  console.log(x);
}

const myObject = {
  a: 1,
  b: 2,
  c: 3
};

for (const property in myObject) {
  console.log(property, myObject[property]);
  console.log(`myObject.${property}: ${myObject[property]}`);
}