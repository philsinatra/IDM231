// New Quokka file

let saying = 'Home sweet home';

console.log(saying.length);
console.log('saying.length:', saying.length);
console.log(`saying.length: ${saying.length}`);

console.log(saying.toUpperCase());
console.log(saying.toLowerCase());

console.log(saying.charAt(3));
console.log(saying.indexOf('w'));
console.log(saying.lastIndexOf('m'));

console.log(saying.substring(4, 10));
console.log(saying.split(' '));

const splitSaying = saying.split(' ');
console.log(splitSaying[0]);

// Use OUTPUT panel to review the difference
saying = '      Hello World       ';
console.log(saying);
console.log(saying.trim());

const myName = 'The Man';
const myNewName = myName.replace('Man', 'Legend');
console.log('myNewName:', myNewName);
