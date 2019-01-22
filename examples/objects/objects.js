// New Quokka file

/**
 * One option is to define all the information needed in individual variables.
 * Problem here is it's a ton of work, harder to maintain, and not very elegant.
 */
// const geminiName = 'gemini';
// const geminiSound = '../sounds/double_echo.mp3';
// const geminiImage = '../media/twins_smiling.png';

/**
 * We can create an object for each sign, which allows us to group the properties
 * of each sign together in a single variable. Not as much work, a little more
 * elegant, but still not extremely easy to maintain.
 */
/*
const gemini = {
  name: 'gemini',
  sound: 'running_bull.mp3',
  image: 'gemini_large.png',
  description: 'peaceful and methodical'
};

console.log(gemini);
console.log(gemini.sound);
*/

/**
 * This function accepts the properties we're going to use for each sign,
 * and assigns them to a new object.
 *
 * ⚠️ NOTE: building this without the two methods first.
 */
function astroSign(name, sound, image, description) {
  this.name = name;
  this.sound = `../sounds/${sound}.mp3`;
  this.image = `../media/${image}.jpg`;
  this.description = description;
  this.playSound = function() {
    // Do something that makes a sound play
    // Which sound?
    console.log(`playSound: ${this.sound}`);
  };
  this.updateDescription = function() {
    // Do something to update the description on the page
    console.log(`updateDescription: ${this.description}`);
  };
}

// Now we can create a new reference to our function, and pass in the properties for each sign.
const taurus = new astroSign(
  'taurus',
  'running_bull',
  'taurus_large',
  'peaceful and methodical'
);
const gemini = new astroSign(
  'gemini',
  'double_echo',
  'twins_smiling',
  'light, airy personality'
);

console.log(taurus.sound);
console.log(gemini.image);

/**
 * We can add methods to our object, which allow us to basically call functions
 * associated with our signs and their properties.
 *
 * ⚠️ Add astroSign methods before trying to call them.
 */
taurus.playSound();
taurus.updateDescription();

/**
 * Being some fancy stuff.
 * Let's say the user fills out a form and we've determined the correct sign is 'taurus'.
 * We save that information in a variable 'selectedSign'.
 */
const selectedSign = 'taurus';

// The 'eval' function allows us to execute a string, as an actual JavaScript expression.
console.log(eval(selectedSign).sound);

// So let's save the selected sign, evaluated as an expression to a new variable.
const selectedSignObject = eval(selectedSign);

// Now we can access all of the properties and methods of the selected sign object.
console.log(selectedSignObject.name);
console.log(selectedSignObject.sound);
console.log(selectedSignObject.image);

selectedSignObject.playSound();