/**
 * Page initially loads
 */

function init() {
  console.log('The page has loaded.');
}
window.addEventListener('load', init, false);

/**
 * Focus/Blur
 */
const inputEl = document.createElement('input');
inputEl.type = 'text';
inputEl.id = 'myInput';

document.body.appendChild(inputEl);

inputEl.addEventListener(
  'focus',
  function() {
    console.log('focused on input');
  },
  false
);

inputEl.addEventListener(
  'blur',
  function() {
    console.log('blurred input');
  },
  false
);

document.body.removeChild(inputEl);

/**
 * Click Mouse Event
 */

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'Hello Button';
document.body.appendChild(buttonEl);

function showAlert(message) {
  window.alert(message);
}

buttonEl.addEventListener(
  'click',
  function() {
    showAlert('You clicked a button');
  },
  false
);

document.body.removeChild(buttonEl);

// -----------------------------------------------

const anchorEl = document.createElement('a');
anchorEl.innerHTML = 'This is my new anchor';
anchorEl.href = 'http://google.com';
anchorEl.target = '_blank';
anchorEl.id = 'myAnchor';
document.body.appendChild(anchorEl);

anchorEl.addEventListener(
  'click',
  function(event) {
    event.preventDefault();
    showAlert('You clicked a link.');
  },
  false
);

function myMouseOverHandler() {
  console.log('mouse over ' + this.id);
}

anchorEl.addEventListener('mouseover', myMouseOverHandler, false);

document.body.removeChild(anchorEl);

// -----------------------------------------------

const divEl = document.createElement('div');
const size = 500 + 'px';
divEl.id = 'myDiv';
divEl.style.width = size;
divEl.style.height = size;
divEl.style.backgroundColor = 'yellow';
document.body.appendChild(divEl);

function mouseMoving() {
  console.log('mouse is moving over ' + this);
}

function elementDanger() {
  this.classList.add('danger');
  this.style.backgroundColor = 'red';
  this.style.border = '15px solid black';
}

divEl.addEventListener('mousemove', mouseMoving, false);
divEl.addEventListener('click', elementDanger, false);

// Removing Event listeners
divEl.removeEventListener('mousemove', mouseMoving, false);
divEl.removeEventListener('click', elementDanger, false);

document.body.removeChild(divEl);

/**
 * Keyboard events
 */

const textareaEl = document.createElement('textarea');
textareaEl.setAttribute('rows', 20);
textareaEl.style.width = '400px';
document.body.appendChild(textareaEl);

function charCount(whichElement) {
  const textEntered = whichElement.value;
  const counter = textEntered.length;
  return counter;
}

function getKeyCode(e) {
  console.log(String.fromCharCode(e.which));
}

textareaEl.addEventListener('keypress', getKeyCode, false);

const myButton = document.createElement('button');
myButton.innerHTML = 'Count Textarea Characters';

document.body.appendChild(myButton);

myButton.addEventListener(
  'click',
  function() {
    var outputMessage =
			'The text area currently has ' +
			charCount(textareaEl) +
			' characters in it.';
    window.alert(outputMessage);
  },
  false
);

document.body.removeChild(textareaEl);
document.body.removeChild(myButton);

/**
 * Scroll Event
 */

const lorem =
	'When clicking an element that is nested in other elements, before your click reaches its destination (target element) it will trigger the click event of each ancestor element first. Starting at the top with the global window object, the click event trickles down parent by parent in what is called the capture phase. This continues until the event arrives at its intended target element. When the event can finally be handled by its intended target, we enter the target phase. The target phase is really just the very end of the capture phase and the very beginning of the bubble phase. Once the target phase is complete, and the target element handles the event however it wishes, we begin the third and final phase of the event flow, called the bubble phase. In this phase, the event “bubbles” up from the event target back through all of its parent elements up to the global window object where it stops. This is essentially the opposite of the capture phase.';

for (let i = 0; i < 20; i++) {
  const pEl = document.createElement('p');
  const textNode = document.createTextNode(lorem);
  pEl.appendChild(textNode);
  document.body.appendChild(pEl);
}

function scrollHandler() {
  console.log('Scrolling...');
}

window.addEventListener('scroll', scrollHandler, false);

/**
 * Resize Event
 */

function resizeHandler() {
  console.group('Window Resize Handler');
  console.log('window width: ' + window.innerWidth);
  console.log('window height: ' + window.innerHeight);
  console.groupEnd();

  // What is something we could do here?
  const breakSmall = 600;
  if (window.innerWidth >= breakSmall) {
    document.body.classList.add('medium');
  } else {
    document.body.classList.remove('medium');
  }
}

window.addEventListener('resize', resizeHandler, false);

/**
 * Clean up
 */
window.removeEventListener('resize', resizeHandler, false);
window.removeEventListener('scroll', scrollHandler, false);
document.body.innerHTML = '';