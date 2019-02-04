const feedbackEl = document.getElementById('feedback');
const usernameEl = document.getElementById('username');

function checkUserName() {
  console.group('checkUserName()');
  console.log('value: ' + this.value);
  console.log('length: ' + this.value.length);
  console.groupEnd();

  if (this.value.length < 5) {
    feedbackEl.textContent = 'Username must be at least 5 characters.';
    feedbackEl.classList.add('danger');
  } else {
    feedbackEl.textContent = '';
    feedbackEl.classList.remove('danger');
  }
}

usernameEl.addEventListener('blur', checkUserName, false);