var myVariable = 'hello';
var myResponse = '';

switch (myVariable) {
case 'hello':
  myResponse = 'hi';
  break;
default:
  myResponse = 'I\'m confused';
  break;
}

console.log('myResponse: ' + myResponse);