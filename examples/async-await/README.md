# Async/Await Example

The goal is to create a simple card style interface that loads data from a GitHub user account API.

## Setup Initial HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Async/Await Example</title>
    <link rel="stylesheet" href="screen.css" />
  </head>
  <body>
    <main>
      <div class="card">
        <div class="card-avatar">
          <img src="" alt="avatar" class="card-avatar-img" />
        </div>
        <div class="card-bio">
          <ul>
            <li class="name"></li>
            <li class="company"></li>
            <li class="url"></li>
          </ul>
        </div>
      </div>
    </main>
    <script src="main.js"></script>
  </body>
</html>
```

## Setup Initial CSS

_This can be dropped in rather than coded line by line._

```css
html {
  box-sizing: border-box;
  font-size: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
}

[hidden] {
  display: none !important;
}

img {
  width: 100%;
}

main {
  align-items: center;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}

.card {
  background-color: white;
  box-shadow: 0 4px 36px rgba(0, 0, 0, 0.6);
  /* 400px */
  max-width: 25rem;
  opacity: 0;
}

.card-bio {
  padding: 1.5rem;
}

.card-bio ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.name {
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: .75rem;
  text-transform: uppercase;
}

.company {
  color: darkslategray;
  /* 14px */
  font-size: 0.875rem;
}

.url a {
  font-size: 0.875rem;
  color: slateblue;
  transition: color 225ms ease-in-out;
}

.url a:hover {
  color: orangered;
}
```

## Investigate GitHub User API

- [https://api.github.com/users/jervo](https://api.github.com/users/jervo)

## Setup Script

```javascript
const init = () => {
  console.log('init');
};

window.addEventListener('load', init);
```

Add a function to load user data:

```javascript
const getUserData = async name => {
  const response = await fetch(`https://api.github.com/users/${name}`);
  const data = await response.json();
  return data;
};
```

Call that function on load:

```diff
const init = () => {
+ getUserData('jervo')
+   .then(data => {
+     console.log(data);
+   })
};
```

Inspect the console log data. After the data is loaded, build the UI:

```diff
getUserData('jervo')
  .then(data => {
    console.log(data);
+   buildUI(data);
  })
```

Add the build function above the init function:

```javascript
const buildUI = async data => {
  const avatarImg = document.querySelector('.card-avatar-img');
  avatarImg.setAttribute('src', data.avatar_url);

  const name = document.querySelector('.name');
  name.innerHTML = data.name;

  const company = document.querySelector('.company');
  company.innerHTML = data.company;

  const url = document.querySelector('.url');
  const anchor = document.createElement('a');
  anchor.href = data.html_url;
  anchor.target = '_blank';
  anchor.innerHTML = 'GitHub Homepage';
  url.appendChild(anchor);
};

const init = () => {
  getUserData('jervo')
  // ...
```

Hide the card by default and add a spinner animation to the HTML:

```diff
<main>
+ <div class="lds-ring">
+   <div></div>
+   <div></div>
+   <div></div>
+   <div></div>
+ </div>
- <div class="card">
+ <div class="card" hidden>
  <div class="card-avatar">
    <img src="" alt="avatar" class="card-avatar-img" />
  </div>
```

Import CSS for loader into CSS file:

```diff
+ @import 'loader.css';

html {
  box-sizing: border-box;
  font-size: 100%;
}
```

Add CSS Keyframes for a fade in animation to CSS:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  animation: fadeIn 500ms ease-in-out forwards;
}
```

Add script code to hide the loading animation and fade in the card.

**Note**: the timeout is being added to simulate a delay in fetching the data in case the API returns the data during the demo immediately.

```diff
const init = () => {
  getUserData('jervo')
    .then(data => {
      console.log(data);
      buildUI(data);
    })
+   .then(() => {
+     const card = document.querySelector('.card');
+     const loader = document.querySelector('.lds-ring');
+
+     setTimeout(() => {
+       loader.hidden = true;
+       card.hidden = false;
+       card.classList.add('fadeIn');
+     }, 2000);
+   });
};
```

## References

- [https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp](https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp)
- [https://loading.io/css/](https://loading.io/css/)
