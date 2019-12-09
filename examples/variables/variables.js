// Introduction
const price = 5;
const quantity = 14;
const total = price * quantity;

console.log(total);

const title = 'Our Special Offers';
const message = 'Welcome to our page. Here is a message.';

console.log(title);
console.log(message);

console.group('Page Message Details');
console.log(title);
console.log(message);
console.groupEnd();

let mySwitch = true;
console.log(mySwitch);

mySwitch = false;
console.log(mySwitch);
