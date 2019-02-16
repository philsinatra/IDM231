# JavaScript Extras Example

- Setup initial HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Local / Session Storage</title>
  <link rel="stylesheet" href="../reset.css">
  <link rel="stylesheet" href="screen.css">
</head>

<body>

  <section id="intro">
    <div></div>
  </section>

  <main>
    <h1>Main Content</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nesciunt alias magnam officia numquam quidem eaque iure ea exercitationem adipisci dicta, nostrum illo, quod, tenetur tempore ratione eos harum porro.</p>
    <p>Totam dignissimos blanditiis quidem doloremque voluptas, odio officiis labore illum nulla in, ullam quis, laboriosam dolore laborum fuga aspernatur eius pariatur ea architecto deleniti aperiam nostrum iure ipsa. Tempore, adipisci?</p>
    <p>Aut ipsa ad minima nobis dolore provident reprehenderit temporibus, impedit magnam harum placeat exercitationem vero voluptatum quis culpa corrupti libero nisi ut praesentium nemo similique cumque illum. Quisquam, accusamus debitis?</p>
  </main>

  <script src="index.js"></script>
</body>

</html>
```

- Setup initial CSS

```css
html {
  box-sizing: border-box;
  font-size: 100%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: sans-serif;
}

@media screen and (min-width: 900px) {
  body {
    font-size: 150%;
  }
}

[hidden] {
  display: none;
}

main {
  margin: 0 auto;
  max-width: 900px;
  padding: 3rem;
}

main h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

main p {
  margin-bottom: 1.5rem;
}

#intro {
  background-color: lightblue;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
}

#intro div {
  background-color: lightpink;
  border-radius: 50%;
  height: 200px;
  left: 3rem;
  position: relative;
  top: 3rem;
  width: 200px;
}
```

- Setup initial JavaScript

```javascript
const init = () => {
  console.log('window loaded');
};

window.addEventListener('load', init);
```

- Add bounce animation

```css
@keyframes introBounce {
  0% {
    left: 3rem;
    top: 3rem;
  }

  33% {
    left: 33%;
    top: 33%;
  }

  66% {
    left: 66%;
    top: 3rem;
  }

  100% {
    left: 90%;
    top: 33%;
  }
}
```

```diff
#intro div {
+ animation: introBounce 2s linear forwards;
  background-color: lightpink;
```

- Detect end of bounce animation

```diff
const init = () => {
+ const introElement = document.getElementById('intro');
+ const pinkBall = introElement.querySelector('div');

+ const closeIntro = () => {
+   console.log('bounce animation complete');
+ };

+ pinkBall.addEventListener('animationend', closeIntro);
};

window.addEventListener('load', init);
```

- Add fadeOut CSS keyframes

```css
@keyframes fadeOut {
  to {
    opacity: 0;
  }
}
.fadeOut {
  animation: fadeOut 330ms ease-out forwards;
}
```

- Fade out intro after animation

```diff
const init = () => {
  const introElement = document.getElementById('intro');
  const pinkBall = introElement.querySelector('div');

  const closeIntro = () => {
+   introElement.classList.add('fadeOut');
  };

  pinkBall.addEventListener('animationend', closeIntro);
};
```

- Promise fadeOut is applied, then hide intro officially

```diff
const init = () => {
  const introElement = document.getElementById('intro');
  const pinkBall = introElement.querySelector('div');

  const closeIntro = () => {
    introElement.classList.add('fadeOut');

+   const promiseFadeOut = new Promise((resolve, reject) => {
+     if (introElement.classList.contains('fadeOut'))
+       window.setTimeout(() => {
+         resolve();
+       }, 2000);
+     else
+       reject(Error('fade out not applied'));
+   });

+   promiseFadeOut.then(() => {
+     introElement.setAttribute('aria-hidden', true);
+     introElement.hidden = true;
+   });
  };

  pinkBall.addEventListener('animationend', closeIntro);
};
```

- Add localstorage to declare the intro has been watched

```diff
promiseFadeOut.then(() => {
  introElement.setAttribute('aria-hidden', true);
  introElement.hidden = true;

+ localStorage.setItem('idm222-watchedIntro', 'true');
});
```

- Check if the user has already watched the into

```diff
  const closeIntro = () => {
    introElement.classList.add('fadeOut');

    // Promise the fade out is done, then hide the intro.
    const promiseFadeOut = new Promise((resolve, reject) => {
      if (introElement.classList.contains('fadeOut'))
        window.setTimeout(() => {
          resolve();
        }, 2000);
      else
        reject(Error('fade out not applied'));
    });

    promiseFadeOut.then(() => {
      introElement.setAttribute('aria-hidden', true);
      introElement.hidden = true;

      localStorage.setItem('idm222-watchedIntro', 'true');
    });
  };

+ const hasWatchedIntro = localStorage.getItem('idm222-watchedIntro');

+ if (hasWatchedIntro === 'true') {
+   introElement.setAttribute('aria-hidden', true);
+   introElement.hidden = true;
+ }

  pinkBall.addEventListener('animationend', closeIntro);
};

```

- Refactor the localstorage key

```diff
const init = () => {
+ const intoAnimationKey = 'idm222-watchedIntro';
  const introElement = document.getElementById('intro');
  const pinkBall = introElement.querySelector('div');

  const closeIntro = () => {
    introElement.classList.add('fadeOut');

    // Promise the fade out is done, then hide the intro.
    const promiseFadeOut = new Promise((resolve, reject) => {
      if (introElement.classList.contains('fadeOut'))
        window.setTimeout(() => {
          resolve();
        }, 2000);
      else
        reject(Error('fade out not applied'));
    });

    promiseFadeOut.then(() => {
      introElement.setAttribute('aria-hidden', true);
      introElement.hidden = true;

-     localStorage.setItem('idm222-watchedIntro', 'true');
+     localStorage.setItem(intoAnimationKey, 'true');
    });
  };

- const hasWatchedIntro = localStorage.getItem('idm222-watchedIntro');
+ const hasWatchedIntro = localStorage.getItem(intoAnimationKey);

  if (hasWatchedIntro === 'true') {
    introElement.setAttribute('aria-hidden', true);
    introElement.hidden = true;
  }

  pinkBall.addEventListener('animationend', closeIntro);
};

window.addEventListener('load', init);
```

- Refactor hide element function

```diff
const init = () => {
  const intoAnimationKey = 'idm222-watchedIntro';
  const introElement = document.getElementById('intro');
  const pinkBall = introElement.querySelector('div');

+ const hideElement = (el) => {
+   el.setAttribute('aria-hidden', true);
+   el.hidden = true;
+ };

  const closeIntro = () => {
    introElement.classList.add('fadeOut');

    // Promise the fade out is done, then hide the intro.
    const promiseFadeOut = new Promise((resolve, reject) => {
      if (introElement.classList.contains('fadeOut'))
        window.setTimeout(() => {
          resolve();
        }, 2000);
      else
        reject(Error('fade out not applied'));
    });

    promiseFadeOut.then(() => {
-     introElement.setAttribute('aria-hidden', true);
-     introElement.hidden = true;
+     hideElement(introElement);

      localStorage.setItem(intoAnimationKey, 'true');
    });
  };

  const hasWatchedIntro = localStorage.getItem(intoAnimationKey);

  if (hasWatchedIntro === 'true') {
-   introElement.setAttribute('aria-hidden', true);
-   introElement.hidden = true;
+   hideElement(introElement);
  }

  pinkBall.addEventListener('animationend', closeIntro);
};

window.addEventListener('load', init);
```

- Add form element and content

```diff
<main>
<h1>Main Content</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nesciunt alias magnam officia numquam quidem eaque iure ea exercitationem adipisci dicta, nostrum illo, quod, tenetur tempore ratione eos harum porro.</p>

+ <form id="birthday_form">
+   <div class="controlgroup">
+     <label for="birthday">Birthday</label>
+     <input type="date" name="birthday" id="birthday" placeholder="mm/dd/yyyy" required>
+   </div>
+   <div class="controlgroup">
+     <input type="submit" value="Submit">
+   </div>
+ </form>
```

- Add form CSS

```css
form {
	margin: 3rem 0;
}

.controlgroup {
	display: flex;
	flex-direction: column;
	margin-bottom: 1.5rem;
}

label {
	color: gray;
	font-size: 60%;
	margin-bottom: .5rem;
	text-transform: uppercase;
}

input[type="date"] {
	padding: .5rem;
}

input[type="submit"] {
	background-color: lightblue;
	border: 0;
	cursor: pointer;
	padding: .5rem;
	transition: background-color 300ms ease-in-out;
	width: 100px;
}

input[type="submit"]:hover,
input[type="submit"]:focus {
	background-color: lightpink;
}
```

- Handle form submission

```diff
const init = () => {
  const intoAnimationKey = 'idm222-watchedIntro';
  const introElement = document.getElementById('intro');
  const pinkBall = introElement.querySelector('div');
+ const birthdayForm = document.getElementById('birthday_form');

  const hideElement = (el) => {
    ...
  };

  const closeIntro = () => {
    ...
  };

  const hasWatchedIntro = localStorage.getItem(intoAnimationKey);

  if (hasWatchedIntro === 'true') {
    hideElement(introElement);
  }

+ const handleBirthdayForm = (event) => {
+   event.preventDefault();
+ };

  pinkBall.addEventListener('animationend', closeIntro);
+ birthdayForm.addEventListener('submit', handleBirthdayForm);
};

window.addEventListener('load', init);
```

- Extract date input values

```diff
const handleBirthdayForm = (event) => {
  event.preventDefault();

+ const birthdayInput = document.getElementById('birthday');
+ const birthdayValue = birthdayInput.value;
+ const birthday = new Date(`${birthdayValue}T00:00`);
+ const month = birthday.getMonth();
+ const day = birthday.getDate();

+ console.log('bday: ', birthday);
+ console.log('month: ', month);
+ console.log('day: ', day);
};
```

- Months are zero indexed, fix that

```diff
const handleBirthdayForm = (event) => {
  event.preventDefault();

  const birthdayInput = document.getElementById('birthday');
  const birthdayValue = birthdayInput.value;
  const birthday = new Date(`${birthdayValue}T00:00`);
- const month = birthday.getMonth();
+ const month = birthday.getMonth() + 1;
  const day = birthday.getDate();

  console.log('bday: ', birthday);
  console.log('month: ', month);
  console.log('day: ', day);
};
```

- Add sounds library

```diff
const init = () => {
const intoAnimationKey = 'idm222-watchedIntro';
const introElement = document.getElementById('intro');
const pinkBall = introElement.querySelector('div');
const birthdayForm = document.getElementById('birthday_form');

+ const sounds = {
+   soundAlert: new Audio('media/alert74.mp3'),
+   soundPositive: new Audio('media/positive8.mp3')
+ };

const hideElement = (el) => {
  el.setAttribute('aria-hidden', true);
  el.hidden = true;
};
```

- Play a sound

```diff
const handleBirthdayForm = (event) => {
  event.preventDefault();

  const birthdayInput = document.getElementById('birthday');
  const birthdayValue = birthdayInput.value;
  const birthday = new Date(`${birthdayValue}T00:00`);
  const month = birthday.getMonth() + 1;
  const day = birthday.getDate();

  console.log('bday: ', birthday);
  console.log('month: ', month);
  console.log('day: ', day);

+ sounds.soundAlert.play();
};
```

- Refactor play sound function

```diff
const sounds = {
  soundAlert: new Audio('media/alert74.mp3'),
  soundPositive: new Audio('media/positive8.mp3')
};

+ const playSound = (whichSound) => {
+   whichSound.play();
+ };

const hideElement = (el) => {
  el.setAttribute('aria-hidden', true);
  el.hidden = true;
};
```

```diff
const handleBirthdayForm = (event) => {
  event.preventDefault();

  const birthdayInput = document.getElementById('birthday');
  const birthdayValue = birthdayInput.value;
  const birthday = new Date(`${birthdayValue}T00:00`);
  const month = birthday.getMonth() + 1;
  const day = birthday.getDate();

  console.log('bday: ', birthday);
  console.log('month: ', month);
  console.log('day: ', day);

- sounds.soundAlert.play();
+ playSound(sounds.soundAlert);
};
```

## Questions

You have to handle selecting the right zodiac sign based on the birthday, and then play the right sound and show the correct information.

What about another browser (Safari)?

- Add pattern to date input

```diff
<form id="birthday_form">
  <div class="controlgroup">
    <label for="birthday">Birthday</label>
-   <input type="date" name="birthday" id="birthday" placeholder="mm/dd/yyyy" required>
+   <input type="date" name="birthday" id="birthday" placeholder="mm/dd/yyyy" pattern="\d{1,2}/\d{1,2}/\d{4}" required>
  </div>
  <div class="controlgroup">
    <input type="submit" value="Submit">
  </div>
</form>
```

- Collect date values in an array

```diff
const handleBirthdayForm = (event) => {
  event.preventDefault();

  const birthdayInput = document.getElementById('birthday');
  const birthdayValue = birthdayInput.value;

+ console.log('birthdayValue: ', birthdayValue);
+ const dateArray = birthdayValue.split('/');
+ console.log(dateArray);

- const birthday = new Date(`${birthdayValue}T00:00`);
- const month = birthday.getMonth() + 1;
- const day = birthday.getDate();
+ const month = dateArray[0];
+ const day = dateArray[1];

  console.log('bday: ', birthday);
  console.log('month: ', month);
  console.log('day: ', day);

  playSound(sounds.soundAlert);
};
```

Now it works in Safari, but not in Firefox... how can we fix that?

```javascript
const handleBirthdayForm = (event) => {
  event.preventDefault();

  const birthdayInput = document.getElementById('birthday');
  const birthdayValue = birthdayInput.value;

  let month, day;

  if (birthdayValue.includes('/')) {
    const dateArray = birthdayValue.split('/');
    month = dateArray[0];
    day = dateArray[1];
  } else {
    const birthday = new Date(`${birthdayValue}T00:00`);
    month = birthday.getMonth() + 1;
    day = birthday.getDate();
  }

  console.log('month: ', month);
  console.log('day: ', day);

  playSound(sounds.soundAlert);
};
```

