// Operators

// var color = 'beige';

// Assign using a const since this value won't be changing.
const color = 'beige';
const area = 13 * 12;
const minArea = 135;
const meetsMinRequirement = area >= minArea;

console.group('Bedroom Details');
console.log(`Color: ${color}`);
console.log(`Total Area: ${area}`);
console.log(`Meets Min Requirement: ${meetsMinRequirement}`);
console.groupEnd();