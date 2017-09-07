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
var input_el = document.createElement('input');
input_el.type = 'text';
input_el.id = 'myInput';

document.body.appendChild(input_el);

input_el.addEventListener('focus', function() {
  console.log('focused on input');
}, false);

input_el.addEventListener('blur', function() {
  console.log('blurred input');
}, false);

document.body.removeChild(input_el);

/**
 * Click Mouse Event
 */

var button_el = document.createElement('button');
button_el.innerHTML = 'Hello Button';
document.body.appendChild(button_el);

function showAlert(message) {
  window.alert(message);
}

button_el.addEventListener('click', function() {
  showAlert('You clicked a button');
}, false);

document.body.removeChild(button_el);

// -----------------------------------------------

var anchor_el = document.createElement('a');
anchor_el.innerHTML = 'This is my new anchor';
anchor_el.href = 'http://google.com';
anchor_el.target = '_blank';
anchor_el.id = 'myAnchor';
document.body.appendChild(anchor_el);

anchor_el.addEventListener('click', function(event) {
  event.preventDefault();
  showAlert('You clicked a link.');
});

function myMouseOverHandler() {
  console.log('mouse over ' + this.id);
}

anchor_el.addEventListener('mouseover', myMouseOverHandler, false);

document.body.removeChild(anchor_el);

var div_el = document.createElement('div');
var size = 500 + 'px';
div_el.id = 'myDiv';
div_el.style.width = size;
div_el.style.height = size;
div_el.style.backgroundColor = 'yellow';
document.body.appendChild(div_el);

function mouseMoving() {
  console.log('mouse is moving over ' + this);
}

function elementDanger() {
  this.classList.add('danger');
  this.style.backgroundColor = 'red';
  this.style.border = '15px solid black';
}

div_el.addEventListener('mousemove', mouseMoving, false);
div_el.addEventListener('click', elementDanger, false);

// Removing Event listeners
div_el.removeEventListener('mousemove', mouseMoving, false);
div_el.removeEventListener('click', elementDanger, false);

/**
 * Keyboard events
 */

document.body.removeChild(div_el);

var textarea_el = document.createElement('textarea');
textarea_el.setAttribute('rows', 20);
textarea_el.style.width = '400px';
document.body.appendChild(textarea_el);

function charCount() {
  var text_entered = this.value;
  var counter = text_entered.length;
  console.log('counter: ' + counter);
}

function getKeyCode(e) {
  console.log(String.fromCharCode(e.which));
}

textarea_el.addEventListener('keypress', charCount, false);
textarea_el.addEventListener('keypress', getKeyCode, false);

button_el = document.createElement('button');
button_el.innerHTML = 'Count Textarea Characters';

document.body.appendChild(button_el);

button_el.addEventListener('click', function() {
  var output_message = 'The text area currently has ' + textarea_el.value.length + ' characters in it.';
  window.alert(output_message);
}, false);

/**
 * Scroll Event
 */

document.body.removeChild(textarea_el);
document.body.removeChild(button_el);

var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et erat orci. Etiam in dolor at arcu scelerisque aliquet. Quisque lorem diam, volutpat in elementum non, facilisis vel ipsum. Fusce ut posuere neque. Vestibulum egestas, odio a gravida rhoncus, dolor mi ullamcorper velit, id lobortis nisl elit imperdiet neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras ac nunc nisi, egestas tincidunt urna. Nullam vel tortor nec lectus porta tincidunt ac eget diam. Praesent vulputate, nunc eget sodales imperdiet, nunc orci ullamcorper justo, in elementum ante felis sit amet dolor. Vivamus mattis blandit blandit. Etiam vitae sapien nulla, interdum feugiat ligula. Cras eu tortor orci. Maecenas sed est tellus. Vestibulum est libero, venenatis a feugiat id, condimentum et erat. Nulla id volutpat nunc. Nam sodales nunc quis metus sagittis vestibulum.';

for (var i = 0; i < 20; i++) {
  var p_el = document.createElement('p');
  var text_node = document.createTextNode(lorem);
  p_el.appendChild(text_node);
  document.body.appendChild(p_el);
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
  var break_small = 600;
  if (window.innerWidth >= break_small) {
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
