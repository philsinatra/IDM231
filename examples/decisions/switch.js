var my_variable = 'hello';
var my_response = '';

switch (my_variable) {
  case 'hello':
    my_response = 'hi';
    break;
  default:
    my_response = 'I\'m confused';
    break;
}

console.log('my_response: ' + my_response);
