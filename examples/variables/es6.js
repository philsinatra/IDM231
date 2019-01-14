let firstName = 'Phil';
let lastName = 'Sinatra';
console.log(firstName + ' ' + lastName);

firstName = 'Jervis';
lastName = 'Thompson';
console.log(firstName + ' ' + lastName);

const one = 1;
console.log('one: ' + one);

// ⚠️ Can't reassign a new value to a 'const'
// one = 'two';

// ----------------------------------------

let fullName = `${firstName} ${lastName}`;
let greeting = `Hello ${fullName}!`;
console.log(greeting);