var feedback_el = document.getElementById('feedback');
var username_el = document.getElementById('username');

function checkUserName(min_length) {
  // Can't use 'this' anymore because 'this' is the anonymous function.
  console.group('checkUserName()');
  console.log('value: ' + username_el.value);
  console.log('length: ' + username_el.value.length);
  console.groupEnd();

  if (username_el.value.length < min_length) {
    feedback_el.textContent = 'Username must be at least 5 characters.';
    feedback_el.classList.add('danger');
  } else {
    feedback_el.textContent = '';
    feedback_el.classList.remove('danger');
  }
}

username_el.addEventListener('blur', function() {
  checkUserName(5);
}, false);