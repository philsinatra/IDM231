var feedbackEl = document.getElementById('feedback');
var usernameEl = document.getElementById('username');

function checkUserName(min_length) {
  // Can't use 'this' anymore because 'this' is the anonymous function.
  console.group('checkUserName()');
  console.log('value: ' + usernameEl.value);
  console.log('length: ' + usernameEl.value.length);
  console.groupEnd();

  if (usernameEl.value.length < min_length) {
    feedbackEl.textContent = 'Username must be at least 5 characters.';
    feedbackEl.classList.add('danger');
  } else {
    feedbackEl.textContent = '';
    feedbackEl.classList.remove('danger');
  }
}

usernameEl.addEventListener('blur', function() {
  checkUserName(5);
}, false);