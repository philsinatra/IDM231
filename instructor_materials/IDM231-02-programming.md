build-lists: true
footer: IDM 231: Scripting for IDM I
slidenumbers: true
autoscale: true
theme: Plain Jane, 3

# IDM 231
## Scripting for<br>Interactive Digital Media I

---

# ABCs of Programming

---

## What is a Script?

- recipes
- handbooks
- manuals

^ A script is a series of instructions that a computer can follow to achieve a goal. You could compare scripts to any of the following:

^ (_click_) By following the instructions in a recipe, one-by-one in the order set out, cooks can create a dish they have never made before.

^ (_click_) Large companies often provide handbooks for new employees that contain procedures to follow in certain situations.

^ (_click_) Mechanics often refer to car repair manuals when servicing models they are not familiar with. These manuals contain a series of tests to check the key functions of the car are working, along with details of how to fix any issues that arise.

---

## What is a Script?

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

![](http://digm.drexel.edu/crs/IDM231/cdn/instructor_materials/images/02-flowchart.png)

^ Once you know the **goal** of a script, you can work out the individual tasks needed to achieve it. This high level view of the tasks can be represented by a flowchart.

---

[.build-lists: false]

### Steps Within a Task

- Step 1 Remove used bedding
- Step 2 Wipe all surfaces
- Step 3 Vacuum floors
- Step 4 Fit new bedding
- Step 5 Remove used towels and soaps
- Step 6 Clean bathroom

^ Each individual task may be broken down into a sequence of steps. When you're ready to code the script, these steps can then be translated into individual lines of code.

---

![fit](http://digm.drexel.edu/crs/IDM231/cdn/instructor_materials/images/progressive_enhancement.png)

^ Before diving into the JavaScript language, you need to know how it will fit together with the HTML and CSS in your web pages.

^ These three layers form the basis of a popular approach to building web pages called progressive enhancement

---

## Creating a Basic Script

```javascript
var today= new Date();
var current_hour = today.getHours();
var greeting = "Welcome!";

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

^ When the browser comes across a <script>element, it stops to load the script and then checks to see if it needs to do anything. This has implications for where `<script>` elements should be placed, and can affect the loading time of pages.

---

## Basic JavaScript Instructions

^ Like any new language, there are new words to learn (the vocabulary) and rules for how these can be put together (the grammar and syntax of the language).

^ Web browsers (and computers in general) approach tasks in a very different way than a human might. Your instructions need to reflect how computers get things done.

---

### Statements

```javascript
var today = new Date();
var hourNow = today.getHours();
var greeting;
```

^ A script is a series of instructions that a computer can follow one-by-one. Each individual instruction or step is known as a **statement**. Statements should end with a semicolon.

---

### Case Sensitivity

```javascript
var hourNow;
var HourNow;
var HOURNOW;
```

^ JavaScript is case sensitive so `hourNow` means something different to `HourNow` or `HOURNOW`.

---

### Statements

```javascript
var hourNow = today.getHour();

if (hourNow > 18) {
  greeting = 'Good evening';
} else {
  greeting = 'Welcome';
}
```

^ Statements are instructions and each one starts on a new line. A statement is an individual instruction that the computer should follow. Each one should start on a new line and end with a semicolon. This makes your code easier to read and follow. The semicolon also tells the JavaScript interpreter when a step is over, indicating that it should move to the next step.

^ Statements can be organized into code blocks Some statements are surrounded by curly braces; these are known as **code blocks**. The closing curly brace is not followed by a semicolon. Above, each code block contains one statement related to what the current time is. Code blocks will often be used to group together many more statements. This helps programmers organize their code and makes it more readable.

---

### Comments

```javascript
/*
  This script displays a greeting to the user based upon the current time.
   It is an example from JavaScript & jQuery book.
*/

var today = new Date();         // Create a new date object
var hourNow = today.getHour();  // Find the current hour
```

^ You should write comments to explain what your code does. They help make your code easier to read and understand. This can help you and others who read your code. JavaScript includes two types of comment styles: multi-line and single-line.

^ Good use of comments will help you if you come back to your code after several days or months. They also help those who are new to your code.

---

## For Next Week...
