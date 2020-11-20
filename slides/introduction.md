build-lists: true
footer: IDM 221: Web Authoring I
slidenumbers: true
autoscale: true
theme: Cobalt2, 1

# IDM 221

## Web Design I

### Introduction

---

[.build-lists: false]

![left](images/avatar.jpg)

## About Me

- Name: Phil Sinatra
- Email: ps42@drexel.edu
- GitHub: [@philsinatra](https://github.com/philsinatra)

## About This Course

- [Drexel Learn](https://learn.dcollege.net/webapps/login/)
- [Course Repository](https://github.com/philsinatra/IDM231)

^ All course information including syllabus, overview and assignments will be managed through Drexel's Blackboard (BBLearn) system. Let's log in and review the syllabus and course information now.

---

# Objectives

- Define JavaScript
- Review the History of JavaScript
- Define a "Script"
- Review JavaScript Basics

---

# Objective

## Define JavaScript

---

> JavaScript

[^1]: Excerpt From: Flavio Copes. “The JavaScript Handbook.”

^ JavaScript is one of the most popular programming languages in the world.

^ Created 20 years ago, it's gone a very long way since its humble beginnings.

^ Being the first - and the only - scripting language that was supported natively by web browsers, it simply stuck.

^ In the beginnings, it was not nearly powerful as it is today, and it was mainly used for fancy animations and the marvel known at the time as DHTML.

^ With the growing needs that the web platform demands, JavaScript had the responsibility to grow as well, to accommodate the needs of one of the most widely used ecosystems of the world.

^ Many things were introduced in the platform, with browser APIs, but the language grew quite a lot as well.

^ JavaScript is now widely used also outside of the browser. The rise of Node.js in the last few years unlocked backend development, once the domain of Java, Ruby, Python and PHP and more traditional server-side languages.”

^ JavaScript is now also the language powering databases and many more applications, and it's even possible to develop embedded applications, mobile apps, TV sets apps and much more. What started as a tiny language inside the browser is now the most popular language in the world.

^ Excerpt From: Flavio Copes. “The JavaScript Handbook.”

---

![100%](http://digm.drexel.edu/crs/IDM231/cdn/instructor_materials/images/languages-used.png)

---

## JavaScript: A Basic Definition

- adds dynamic and interactive elements
- a client-side language
- can be inserted anywhere

^ JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to _(click)_ add dynamic and interactive elements to websites. While JavaScript is influenced by Java, the syntax is more similar to C and is based on ECMAScript, a scripting language developed by Sun Microsystems.

^ JavaScript is a _(click)_ client-side scripting language, which means the source code is processed by the client's web browser rather than on the web server. This means JavaScript functions can run after a webpage has loaded without communicating with the server. For example, a JavaScript function may check a web form before it is submitted to make sure all the required fields have been filled out. The JavaScript code can produce an error message before any information is actually transmitted to the server.

^ Like server-side scripting languages, such as PHP and ASP, JavaScript code can be _(click)_ inserted anywhere within the HTML of a webpage. However, only the output of server-side code is displayed in the HTML, while JavaScript code remains fully visible in the source of the webpage. It can also be referenced in a separate .JS file, which may also be viewed in a browser.

---

# Objective

## Review the History of JavaScript

---

## JavaScript Versions

[ECMAScript Editions](https://www.w3schools.com/js/js_versions.asp)

^ ECMAScript is a standard up which JavaScript is based. It's often abbreviated to ES.

---

# Objective

## Define a "Script"

---

## What is a Script

- recipes
- handbooks
- manuals

^ A script is a series of instructions that a computer can follow to achieve a goal. You could compare scripts to any of the following:

^ (_click_) By following the instructions in a recipe, one-by-one in the order set out, cooks can create a dish they have never made before.

^ (_click_) Large companies often provide handbooks for new employees that contain procedures to follow in certain situations.

^ (_click_) Mechanics often refer to car repair manuals when servicing models they are not familiar with. These manuals contain a series of tests to check the key functions of the car are working, along with details of how to fix any issues that arise.

^ Scripts are made up of instructions a computer can follow step by step. A browser may use different parts of the script depending on how the user interacts with the web page. Scripts can run different sections of the code in response to the situation around them.

---

## Writing a Script

1. define the goal
1. design the script
1. code each step

^ To write a script, you need to first state your goal and then list the tasks that need to be completed in order to achieve it. Start with the big picture of what you want to achieve, and break that down into smaller steps.

^ (_click_) First, you need to define the task you want to achieve. You can think of this as a puzzle for the computer to solve.

^ (_click_) To design a script you split the goal out into a series of tasks that are going to be involved in solving this puzzle. This can be represented using a flowchart. You can then write down individual steps that the computer needs to perform in order to complete each individual task (and any information it needs to perform the task), rather like writing a recipe that it can follow.

^ (_click_) Each of the steps needs to be written in a programming language that the computer understands. In our case, this is Javascript.

---

![script concept flowchart](http://digm.drexel.edu/crs/IDM231/cdn/instructor_materials/images/02-flowchart.png)

^ Once you know the **goal** of a script, you can work out the individual tasks needed to achieve it. This high level view of the tasks can be represented by a flowchart.

---

[.build-lists: false]

### Steps Within a Task

- Step 1: Remove used bedding
- Step 2: Wipe all surfaces
- Step 3: Vacuum floors
- Step 4: Fit new bedding
- Step 5: Remove used towels and soaps
- Step 6: Clean bathroom

^ Each individual task may be broken down into a sequence of steps. When you're ready to code the script, these steps can then be translated into individual lines of code.

---

[.hide-footer]
[.slidenumbers: false]

![fit](images/progressive-enhancement.png)

^ Before diving into the JavaScript language, you need to know how it will fit together with the HTML and CSS in your web pages.

^ These three layers form the basis of a popular approach to building web pages called progressive enhancement.

---

# Objective

## Review JavaScript Basics

---

## A Basic Script

```javascript
const today = new Date();
const current_hour = today.getHours();
let greeting = 'Welcome!';

if (current_hour > 18) {
  greeting = 'Good evening!';
} else if (current_hour > 12) {
  greeting = 'Good afternoon!';
} else if (current_hour > 0) {
  greeting = 'Good morning!';
}
```

^ Javascript is written in plain text, just like HTML and CSS, so you do not need any new tools to write a script. This example adds a greeting into an HTML page. The greeting changes depending on the time of day.

---

## Case Sensitive

```javascript
const something = '';

const Somthing = '';
```

^ JavaScript is case sensitive

---

## Comments

```javascript
/*
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vivamus et erat orci. Etiam in dolor at arcu scelerisque.
*/

// single line comment
```

^ There are two types of comments in JavaScript.

---

[.build-lists: false]

## Reserved Words

- [W3C Reserved Words List](https://www.w3schools.com/js/js_reserved.asp)

---

## Linking to a Javascript File

```html
<body>
  <h1>My Website</h1>
  <p>Welcome to my website.</p>
  <script src="scripts/myscript.js"></script>
</body>
```

^ When you want to use JavaScript with a web page, you use the HTML `<script>` element to tell the browser it is coming across a script. Its `src` attribute tells people where the Javascript file is stored.

^ When the browser comes across a `<script>` element, it stops to load the script and then checks to see if it needs to do anything. This has implications for where `<script>` elements should be placed, and can affect the loading time of pages.

^ Like any new language, there are new words to learn (the vocabulary) and rules for how these can be put together (the grammar and syntax of the language).

^ Web browsers (and computers in general) approach tasks in a very different way than a human might. Your instructions need to reflect how computers get things done.

---

## Inline Scripts ❌

```html
<body>
  <h1>My Website</h1>
  <p>Welcome to my website.</p>
  <script>document.write('<h2>Contents</h2>');</script>
</body>
```

^ You may see JavaScript in the HTML between opening `<script>` and closing `</script>` tags, but it is better to put scripts in their own files.

---

[.build-lists: false]

## Helpful VSCode Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
- [JavaScript Snippet Pack](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-javascript-snippet-pack)
- [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)
