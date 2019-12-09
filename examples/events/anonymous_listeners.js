const feedbackEl = document.getElementById('feedback');
const usernameEl = document.getElementById('username');

function checkUserName(minLength) {
  // Can't use 'this' anymore because 'this' is the anonymous function.
  // console.log(this);

  console.group('checkUserName()');
  console.log('value: ' + usernameEl.value);
  console.log('length: ' + usernameEl.value.length);
  console.groupEnd();

  if (usernameEl.value.length < minLength) {
    feedbackEl.textContent = 'Username must be at least 5 characters.';
    feedbackEl.classList.add('danger');
  } else {
    feedbackEl.textContent = '';
    feedbackEl.classList.remove('danger');
  }
}

// usernameEl.addEventListener('blur', function() {
//   checkUserName(5);
// }, false);

usernameEl.addEventListener(
  'blur',
  () => {
    checkUserName(5);
  },
  false
);
