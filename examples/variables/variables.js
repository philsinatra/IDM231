var price = 5;
var quantity = 14;
var total = price * quantity;

console.log(total);

var title = 'Our Special Offers';
var message = 'Welcome to our page. Here is a message.';

console.log(title);
console.log(message);
console.log('title: ' + title);
console.log('message: ' + message);

console.group();
console.log('title: ' + title);
console.log('message: ' + message);
console.groupEnd();

var my_switch = true;
console.log('my_switch: ' + my_switch);
my_switch = false;
console.log('my_switch: ' + my_switch);
