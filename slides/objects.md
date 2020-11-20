build-lists: true
footer: IDM 221: Web Authoring I
slidenumbers: true
autoscale: true
theme: Cobalt2, 1

# IDM 221

## Web Design I

### Objects

---

# Objectives

- Introduce Objects
- Review Built-In Objects

---

# Objective

## Introduce Objects

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
const hotel = {
  name: 'Hurley\'s Inn',
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};

// dot syntax
const hotelName = hotel.name;
const roomsFree = hotel.checkAvailability();

// bracket syntax
const hotelName = hotel['name'];
```

^ You access the properties and methods of an object using what's called _dot notation_. Use the name of the object, followed by a period, then the name of the property or method you want to access.

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

^ _examples/objects/objects.js_

---

# Objective

## Review Built-In Objects

---

## Built-In Objects

### Three Groups of Built-In Objects

1. `window` object
2. `document` object
3. global objects

^ Browsers come with a set of built-in objects that represent things like the browser window and the current web page shown in that window. These built-in objects act like a toolkit for creating interactive web pages.

^ As soon as a web page has loaded into the browser, these objects are available to use in your scripts. These built-in objects help you get a wide range of information such as the width of the browser window, the content of the main heading in the page, or the length of text a user entered into a form field. You access their properties or methods using dot notation, just like you would access the properties or methods of an object you had written yourself.

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
