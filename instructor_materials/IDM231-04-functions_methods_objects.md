build-lists: true
footer: IDM 231: Scripting for IDM I
slidenumbers: true
autoscale: true
theme: Dark Mode

# IDM 231

## Functions, Objects and Methods

^ Browsers require very detailed instructions about what we want them to do. Therefore, complex scripts can run to hundreds (even thousands) of lines. Programmers use functions, methods, and objects to organize their code.

^ _Functions_ consist of a series of statements that have been grouped together because they perform a specific task. A _method_ is the same as a function, except methods are created inside an object.

^ _Objects_ are made of up properties and methods. We'll look at all of these in more detail.

---

## Functions

```javascript
function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = msg;
  return msg;
}

updateMessage();
```

^ Functions let you group a series of statements together to perform a specific task. If different parts of a script repeat the same task, you can reuse the function rather than repeating the same set of statements.

^ When you group tasks together into a function, you need to give your function a name, which should describe the task it is performing. When you ask it to perform the task it's known as **calling** the function.

---

[.code-highlight: 2-4]

## Function Structure

```javascript
function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = msg;
  return msg;
}

updateMessage();
```

^ The steps the function needs to perform in are packaged up in a code block. A code block consists of one ore more statements contained within curly braces.

---

## Function Parameters

```javascript
function updateMessage(name, message) {
  console.log('Hello ' + name + ', ' + message);
  // or with ES6
  console.log(`Hello ${name}, ${message}`);
}

updateMessage();
```

^ Some functions need to be provided with information in order to achieve a given task. Pieces of information passed to a function are known as **parameters**.

---

## Working With Parameters

```javascript
function getArea(width, height) {
  return width * height;
}

getArea(3, 5);

var wall_width = 3;
var wall_height = 5;

getArea(wall_width, wall_height);
```

^ Inside the function, the parameters act like variables.

---

## Function Return

```javascript
function updateMessage(name, message) {
  const newMessage = `Hello ${name}, ${message}`;
  return newMessage;
}

let myMessage = updateMessage('Phil', 'Welcome to my script!');

console.log(myMessage); // Hello Phil, Welcome to my script!
```

^ When you write a function and you expect it to provide you with an answer, the response is known as a **return value**. Using the `return` keyword, the specified value is returned from inside the function, back to the placeholder that originally called the function. When a return statement is encountered, the execution of the function immediately stops and the current value of the returned variable is extracted. If the function contains more lines of code, they are not executed.

---

## Anatomy of a Function

```javascript
function sayHello() {
  console.log('Hello!');
}
```

^ Let's review. You declare a function using the **function** keyword.

^ You give the function a **name** (sometimes called an **identifier**) followed by parentheses.

^ The **statements** that perform the task sit in a code block, inside the curly braces.

---

## Calling a Function

```javascript
function sayHello() {
  console.log('Hello!');
}

sayHello();
```

^ Once you declare a function, you can execute all the statements between the curly braces with a single line of code. This is know as **calling the function**. This is done by using the function name followed by parentheses. You can call the same function as many times as you want within the same Javascript file.

---

## Getting Values Out of a Function

```javascript
function getArea(width, height) {
  const area = width * height;
  return area;
}

let wall = getArea(3, 5); // 15
let wall = getArea(8, 5); // 40
```

^ Some functions return information to the code that called them. _wall1_ will be equal to 15, while _wall2_ will hold the value 40. This also demonstrates how the same function can be used to perform the same steps with different values.

---

## Getting Multiple Values Out of a Function

```javascript
function getSize(width, height, depth) {
  const area = width * height;
  const volume = width * height * depth;

  // Does this work?
  // Why or why not?
  return area;
  return volume;
}

let sizes = getSize(3,2,3);
```

^ Someone tell me, how could we get more than one value out of a function?

---

## Return Arrays

```javascript
function getSize(width, height, depth) {
  const area = width * height;
  const volume = width * height * depth;
  const sizes = [area, volume];
  return sizes;
}

let area_one = getSize(3,2,3)[0];
let volume_one = getSize(3,2,3)[1];
```

^ Functions can return more than one value using an array.

---

## Arrow Functions

```javascript
const myFunction = function() {
  // ...
}

const myFunction = () => {
  // ...
}
```

^ ES6 introduced a new syntax for the anatomy of a function, the _arrow function_. Visually, the arrow function simplifies the syntax, making it shorter, which is a welcome change.

---

### Arrow Functions - Single Statement

```javascript
const myFunction = function() {
  doSomething();
}

// Becomes

const myFunction = () => doSomething();
```

^ If the function of the body contains a single statement, you can omit the brackets and write it all on a single line.

---

### Arrow Function - Parameters

```javascript
const myFunction = function(param1, param2) {
  doSomething(param1, param2);
};

// Becomes

const myFunction = (param1, param2) => doSomthing(param1, param2);
```

^ Parameters are passing in the parentheses.

---

### Arrow Functions - Single Parameter

```javascript
const myFunction = param => doSomething(param);
```

^ If you have one (and only one) parameter, you can omit the parentheses completely.

^ Because of the short syntax, arrow functions encourage the use of small functions, which is one of our goals when writing clean, concise scripts.

---

## Variable Scope

### Local vs Global vs Block

^ The location where you declare a variable will affect where it can be used within your code. If you declare it within a function, it can only be used within that function This is known as the variable's **scope**.

---

### Local Scope

```javascript
function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log(area); // ⚠️ ERROR
```

^ When a variable is created inside a function using the var keyword, it can only be used in that function. It is called a local variable or function-level variable. It is said to have local scope or function-level scope. It cannot be accessed outside of the function in which it was declared.

^ In this example, `area` is a local variable, only available within the `getArea` function.

^ `area` is only available within the `getArea()` function. Trying to access it outside of that function will produce an error.

---

### Global Scope

```javascript
function getArea(width, height) {
  var area = width * height;
  return area;
}

var wallSize = getArea(3,2);
console.log(wallSize); // 6

wallSize = 'dog';
console.log(wallSize); // dog
```

^ If you create a variable outside of a function, then it can be used anywhere within the script. It is called a **global** variable and has **global scope**.

^ Global variables are stored in memory for as long as the web page is loaded in the browser, which means they take up more memory than local variables.

---

### `var` Does Not Have Block Scope

```javascript
var x = 1;

function myFunction() {
  x = 2;
}

console.log(x); // 2
```

^ Variables declared with the `var` keyword do not have block scope, which means if a variable is introduced within a code block, those variables are scoped to the containing function, and the effects of setting them persist beyond the block itself.

---

### `let` & `const` Do Have Block Scope

```javascript
let x = 1;

function myFunction() {
  let x = 2;
  console.log(x); // 2
}

console.log(x); // 1
```

^ By contrast, variables declared with `let` and `const` do have block scope. The `x = 2` is limited in scope to the block in which it was defined. (This example is using `let`, but the rules are the same for `const`)

---

### Variable Scope Examples

^ _examples/functions/scope.js_

---

## Objects

- object variable is called a **property**
- functions are called **methods**

^ Objects group together a set of variables and functions to create a model of something you would recognize from the real world. In an object, variables and functions take on new names.

^ _(click)_ If a variable is part of an object, it is called a **property**.

^ _(click)_ If a function is part of an object, it is called a **method**. Methods represent tasks that are associated with the object.

---

### Object Example

```javascript
const hotel = {
  name: 'Hurley\'s Inn',
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: ['twin', 'double', 'suite'],
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};
```

^ Like variables and named functions, properties and methods have a name and a value. In an object, that name is called a **key** (the keys in this example would be name, rooms etc). The value of a property can be a string, number, boolean, array, or even another object. The value of a method is always a function (`checkAvailability`).

^ The object is the curly braces and their contents. In this example, the object is stored in a variable called `hotel`, so you would refer to it as the **hotel** object. Separate each key from its value using a colon. Separate each property and method with a comma, except the last value.

---

## Accessing Properties & Methods

```javascript
const hotelName = hotel.name;
const roomsFree = hotel.checkAvailability();
```

^ You access the properties and methods of an object using what's called _dot notation_. Use the name of the object, followed by a period, then the name of the property or method you want to access.

---

## Accessing Properties & Methods (bracket syntax)

```javascript
const hotelName = hotel['name'];
```

^ You can also access the properties of an object (but not its methods) using square bracket syntax. This syntax should generally be avoided.

---

## Updating an Object

```javascript
hotel.name = 'Aztec';

delete hotel.name;
```

^ To update a property, use the same technique for assigning a variable value, first naming the object name, then the property, followed by the equals sign, and then the new value.

^ To delete a property, use the **delete** keyword followed by the object name and property name.

---

## Creating Many Objects

```javascript
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function()  {
    return this.rooms - this.booked;
  };
}
```

^ Sometimes you want several objects to represent similar things. Object constructors can use a function as a template for create objects. First you create the template with the object's properties and methods.

^ The `this` keyword is used instead of the object name to indicate that the property or method belongs to the object that _this_ function creates.

---

## Creating More Objects

```javascript
const hurleyHotel = new Hotel('Hurley\'s', 40, 25);
const aztecHotel = new Hotel('Aztec', 120, 77);
```

^ You create **instances** of the object using the construction function. The **new** keyword followed by a call to the function creates a new object. The properties of each object are given as arguments to the function.

---

## Objects Example

^ _examples/objects/objects.js_

---

## Built-In Objects

^ Browsers come with a set of built-in objects that represent things like the browser window and the current web page shown in that window. These built-in objects act like a toolkit for creating interactive web pages.

^ As soon as a web page has loaded into the browser, these objects are available to use in your scripts. These built-in objects help you get a wide range of information such as the width of the browser window, the content of the main heading in the page, or the length of text a user entered into a form field. You access their properties or methods using dot notation, just like you would access the properties or methods of an object you had written yourself.

---

### Three Groups of Built-In Objects

1. `window` object
1. `document` object
1. global objects

^ The three sets of built-in objects each offer different range of tools that help you write scripts for web pages.

---

#### `window` Object Properties

- `window.innerHeight`
- `window.innerWidth`
- `window.pageXOffset`
- `window.pageYOffset`
- `window.screenX`
- `window.screenY`
- `window.location`

^ The `window` object represents the current browser window or tab. It is the topmost object in the Browser Object Model, and it contains other objects that tell you about the browser. Here are a selection of _some_ the `window` object's properties.

^ Height/width of window (excluding browser chrome/UI) in pixels.

^ Distance document has been scrolled in pixels.

^ X/Y coordinate of pointer

^ Current URL of window object (local file path)

---

#### `window` Object Methods

- `window.alert();`
- `window.open();`
- `window.print();`

^ Here are a selection of _some_ the `window` object's properties and methods.

^ Alert creates a dialog box, open opens a new window, print tells the browser that the user wants to print the contents of the page.

^ _examples/objects/objects\_window.html_

---

#### `document` Object Properties

- `document.title`
- `document.lastModified`
- `document.URL`
- `document.domain`

^ The topmost object in the Document Object Model (or DOM) is the `document` object. It represents the web page loaded into the current browser window or tab. Here are some properties of the document object, which tell you about the current page.

^ Title of current document

^ Date on which document was last modified

^ Returns string containing URL of current document

^ Returns domain of current document

---

#### `document` Object Methods

- `document.write()`
- `document.getElementByld()`
- `document.querySelector()`
- `document.querySelectorAll()`
- `document.createElement()`
- `document.createTextNode()`

^ The DOM is vital to accessing and amending the contents of the current web page. The following are a few of the methods that select content or update the content of a page.

^ Writes text to document

^ Returns element, if there is an element with the value of the id attribute that matches

^ Returns the first instance of an element that match a CSS selector, which is specified as a parameter

^ Returns list of elements that match a CSS selector, which is specified as a parameter

^ Creates new element

^ Creates new text node

^ _examples/objects/objects\_document.html|js_

---

#### Global Objects: String Object Properties

- `length`

^ Whenever you have a value that is a string, you can use the properties and methods of the String object on that value.

^ The `length` property counts the number of "code units" in a string. In the majority of cases, one character uses one code unit, and most programmers use it like this. But some of the rarely used characters take up two code units.

---

#### Global Objects: String Object Methods

- `toUpperCase()`
- `toLowerCase()`
- `charAt()`
- `indexOf()`
- `lastlndexOf()`
- `substring()`
- `split()`
- `trim()`
- `replace()`

^ Changes string to uppercase characters

^ Changes string to lowercase characters

^ Takes an index number as a parameter, and returns the character found at that position

^ Returns index number of the first time a character or set of characters is found within the string

^ Returns index number of the last time a character or set of characters is found within the string

^ Returns characters found between two index numbers where the character for the first index number is included and the character for the last index number is not included

^ When a character is specified, it splits the string each time it is found, then stores each individual part in an array

^ Removes whitespace from start and end of string

^ Like find and replace, it takes one value that should be found, and another to replace it (by default, it only replaces the first match it finds)

^ _examples/objects/objects\_string.js_

---

## For next week
