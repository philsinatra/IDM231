build-lists: true
footer: IDM 221: Web Authoring I
slidenumbers: true
autoscale: true
theme: Cobalt2, 1

# IDM 221

## Web Design I

### Loops

^ Loops check a condition. If it returns **true**, a code block will run. Then the condition will be checked again and if it still returns **true**, the code block will run again. It repeats until the condition returns **false**.

---

# Objectives

- Introduce the Loop Concept
- Review Types of Loops

---

# Objective

## Introduce the Loop Concept

---

![loop start](http://digm.drexel.edu/crs/IDM231/cdn/instructor_materials/images/05-loop_start.png)

^ The first time the loop is run, the variable `i` (the counter) is assigned a value of zero.

^ Every time the loop is run, the condition is checked. Is the variable `i` less than 10?

^ Then the code inside the loop (the statement between the curly braces) is run.

---

![loop end](http://digm.drexel.edu/crs/IDM231/cdn/instructor_materials/images/05-loop_end.png)

^ The variable `i` can be used inside the loop. Here it is used to write a number to the console.

^ When the statements have been finished, the variable `i` is incremented by 1.

^ When the condition is no longer **true**, the loop ends. The script moves on to the next line of code.

---

# Objective

## Review Types of Loops

---

## For Loop

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

^ There are different types of loops. If you need to run code a specific number of times, use a `for` loop. In a `for` loop, the condition is usually a counter which is used to tell how many times the loop should run.

---

### Loop Counters

```javascript, [.highlight: 1, 5-7]
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;
i < 10;
i++
```

^ A `for` loop uses a counter as a condition. This instructs the code to run a specific number of times. Here you can see the condition is made of up three statements.

^ **Initialization**: create a variable and set it to 0. This variable is commonly called `i`, and acts as a counter.

^ **Condition**: the loop should continue to run until the counter reaches a certain number.

^ **Update**: every time the loop has run the statements in the curly braces, it adds one to the counter.

---

### While Loop

```javascript
const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
let i = 0;

while (cars[i]) {
  console.log(cars[i]);
  i++;
}
```

^ If you do not know how many times the code should run, you can use a `while` loop. Here the condition can be something other than a counter and the code will continue to loop for as long as the condition is **true**.

---

### `forEach` Loop

```javascript
const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];

cars.forEach(function(car) {
  console.log('car: ', car);
});
```

^ Another style of loop that is common, especially when you don't necessarily know the total number of items being looped over is the `forEach` loop. Theh `forEach()` method executes a provided function once for each array element.

---

#### forEach Loop With Arrow Function Syntax

```javascript
const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];

cars.forEach(car => {
  console.log('car: ', car);
});
```

---

### `for...of` Statement

```javascript
let numbers = [10, 20, 30];

for (let value of numbers) {
  console.log(value)
}
```

^ The `for...of` statement creates a loop iterating over iterable objects (strings, arrays, node lists etc).

---

### `for...in` Statement

```javascript
const myObject = {a: 1, b: 2, c: 3 };

for (const property in myObject) {
  console.log(`myObject.${property}: ${myObject[property]}`);
}
```

^ The `for...in` statement loops over the properties of an object. This syntax is not recommended for use with arrays. Its most practical use is for debugging purposes, being an easy way to check the properties of an object.

---

### `map`

```javascript
const numbers = [4, 9, 16, 25];
const sqrt = numbers.map(number => number*number);
```

---

## So Many Options

- `while`
- `do-while`
- `for`
- `forEach()`
- `for...in`
- `for...of`
- `map()`

^ With so many options, it may seem overwhelming and difficult to choose which type of loop is best. The answer will differ based on the situation. Use whatever syntax best suits your needs, and keep things as simple as possible.

^ _examples/decisions/loops.html_
