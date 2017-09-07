var feedback_el = document.getElementById('feedback');
var username_el = document.getElementById('username');

function checkUserName() {
  // 'this' refers to the owner of a function.
  // In this case, 'this' refers to the element that the event is on.
  console.group('checkUserName()');
  console.log('value: ' + this.value);
  console.log('length: ' + this.value.length);
  console.groupEnd();

  if (this.value.length < 5) {
    feedback_el.textContent = 'Username must be at least 5 characters.';
    feedback_el.classList.add('danger');
  } else {
    feedback_el.textContent = '';
    feedback_el.classList.remove('danger');
  }
}

username_el.onblur = checkUserName;