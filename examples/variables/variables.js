// Introduction
var price = 5;
var quantity = 14;
var total = price * quantity;

console.log(total);

var title = 'Our Special Offers';
var message = 'Welcome to our page. Here is a message.';

console.log(title);
console.log(message);

console.group('Page Message Details');
console.log(title);
console.log(message);
console.groupEnd();

var mySwitch = true;
console.log(mySwitch);

mySwitch = false;
console.log(mySwitch);

// Arrays
var myArray = [];

console.log(myArray.length);
myArray[0] = 'hello';
myArray[1] = 'world';
console.log(myArray.length);
console.log(myArray[0]);

var myOtherArray = ['red', 'white', 'blue'];
console.log(myOtherArray.length);
console.log(myOtherArray[0]);

// Operators
console.log('title: ' + title);
console.log('message: ' + message);

console.group('Page Message Details');
console.log('title: ' + title);
console.log('message: ' + message);
console.groupEnd();

mySwitch = true;
console.log('mySwitch: ' + mySwitch);

mySwitch = false;
console.log('mySwitch: ' + mySwitch);
