build-lists: true
footer: IDM 231: Scripting for IDM I
slidenumbers: true
autoscale: true
theme: Work, 1

## Introduction

- [Drexel Learn](https://learn.dcollege.net/webapps/login/)
- [Course Repository](https://github.com/philsinatra/IDM231)
- [Final Project](https://github.com/philsinatra/IDM231/blob/master/docs/assignments/assignment-final.md)

^ All course information including syllabus, overview and assignments will be managed through Drexel's Blackboard (BBLearn) system. Let's log in and review the syllabus and course information now.

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

- high level
- dynamic
- dynamically typed
- weakly typed
- interpreted
- mylti-paradigm

^ **high level**: Javascript allows you to ignore the details of the machine where it's running. It manages memory automatically so you can focus on the code. It is highly flexible and extremely powerful.

^ JavaScript has nothing to do with Java. It's a poor name choice but we have to live with it.

---

## JavaScript Versions

### ECMAScript

- ES10
- ES2019
- ECMAScript 2019

^ ECMAScript is a standard up which JavaScript is based. It's often abbreviated to ES.

---

## Coding Styles

### Popular Style Guides

- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [AirBnb JavaScript Style Guide](https://github.com/airbnb/javascript)

^ A coding style is a set of conventions used. It's an agreement with yourself and your team to keep consistency on a project. Having fixed rules on your code writing format helps a lot in order to have more readable and managed code.

^ There are quite a few available, these are 2 of the more commonly used ones. It's up to you to follow one or create your own.

^ JavaScript does not consider white space meaningful. Use whitespace to your advantage to make your code more meaningful. As an example, I like to always use 2 spaces to indent code.

---

### Case Sensitive

```javascript
const something = '';

const Somthing = '';
```

^ JavaScript is case sensitive

---

### Comments

```javascript
/*
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vivamus et erat orci. Etiam in dolor at arcu scelerisque.
*/

// single line comment
```

^ There are two types of comments in JavaScript.

---

### Reserved Words

- [W3C Reserved Words List](https://www.w3schools.com/js/js_reserved.asp)

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

![fit](http://digm.drexel.edu/crs/IDM231/cdn/instructor_materials/images/progressive_enhancement.png)

^ Before diving into the JavaScript language, you need to know how it will fit together with the HTML and CSS in your web pages.

^ These three layers form the basis of a popular approach to building web pages called progressive enhancement.

---

## Creating a Basic Script

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

## Linking to a Javascript File

```html
<h1>My Website</h1>
<p>Welcome to my website.</p>
<script src="scripts/myscript.js"></script>
```

^ When you want to use JavaScript with a web page, you use the HTML `<script>` element to tell the browser it is coming across a script. Its `src` attribute tells people where the Javascript file is stored.

---

## Placing the Script in the Page

```html
<body>
  <h1>My Website</h1>
  <p>Welcome to my website.</p>
  <script>document.write('<h2>Contents</h2>');</script>
  <p>Here is a paragraph</p>
```

^ You may see JavaScript in the HTML between opening `<script>` and closing `</script>` tags, but it is better to put scripts in their own files.

---

## JS Runs where it's Found in the HTML

```html
<body>
  <h1>My Website</h1>
  <p>Welcome to my website.</p>
  <script src="js/main.js"></script>
</body>
</html>
```

^ When the browser comes across a `<script>` element, it stops to load the script and then checks to see if it needs to do anything. This has implications for where `<script>` elements should be placed, and can affect the loading time of pages.

^ Like any new language, there are new words to learn (the vocabulary) and rules for how these can be put together (the grammar and syntax of the language).

^ Web browsers (and computers in general) approach tasks in a very different way than a human might. Your instructions need to reflect how computers get things done.
