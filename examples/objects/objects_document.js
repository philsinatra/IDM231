// document.write('hello world');

const myId = document.getElementById('myID');
console.log(myId);
myId.style.color = 'blue';

const myClass = document.querySelector('.myclass');
console.log(myClass);
myClass.style.color = 'red';

const myClass2 = document.querySelectorAll('.myclass');
console.log(myClass2);

const myHeader = document.createElement('h1');
const myText = document.createTextNode('Hello Heading');

myHeader.appendChild(myText);
document.body.appendChild(myHeader);