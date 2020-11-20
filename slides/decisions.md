build-lists: true
footer: IDM 221: Web Authoring I
slidenumbers: true
autoscale: true
theme: Cobalt2, 1

# IDM 221

## Web Design I

### Decisions

---

# Objectives

- Discuss Evaluating Conditions
- Introduce If Statements
- Introduce Switch Statements

---

# Objective

## Discuss Evaluating Conditions

---

![decision flowchart](http://digm.drexel.edu/crs/IDM231/cdn/instructor_materials/images/05-flowchart.png)

^ Looking at a flowchart (for all but the most basic scripts), the code can take more than one path, which means the browser runs different code in different situations. Our goal now is to learn how to create and control the flow of data in your scripts to handle different situations.

^ You can analyze values in your scripts to determine whether or not they match expected results.

^ Using the results of evaluations, you can decide which path your script should go down.

^ There are also many occasions where you will want to perform the same set of steps repeatedly.

^ There are often several places in a script where decisions are made that determine which lines of code should be run next. Flowcharts can help you plan for these occasions.

---

## Evaluation Conditions & Statements

```javascript
if (score > 50) {
  console.log('You passed!');
} else {
  console.log('Try again.');
}
```

^ There are two components to a decision:

^ 1. an expression is evaluated, which returns a value.

^ 2. A conditional statement says what to do in a given situation.

^ In order to make a decision, your code checks the current status of the script. This is commonly done by comparing two values using a comparison operator which returns a value of **true** or **false**.

---

## Conditions & Statements

```javascript, [.highlight: 1]
if (score > 50) {
  console.log('You passed!');
} else {
  console.log('Try again.');
}
```

^ A conditional statement is based on a concept of if/then/else; _if_ a condition is met, _then_ your code executes one or more statements, _else_ your code does something different.

---

### Comparison Operators

| Operator | Meaning |
| :------: | ------- |
| == | is equal to |
| != | is not equal to |
| === | strict equal to |
| !== | strict not equal to |

^ You can evaluate a situation by comparing one value in the script to what you expect it might be. The result will be a Boolean: **true** or **false**.

---

#### `==` Is Equal To

```javascript
'Hello' == 'Goodbye' // false

'Hello' == 'Hello'   // true
```

^ This operator compares two values to see if they are the same.

---

#### `!=` Is Not Equal To

```javascript
'Hello' != 'Goodbye' // true

'Hello' != 'Hello'   // false
```

^ This operator compares two values to see if they are not the same.

---

#### `===` Strict Equal To

```javascript
'3' === 3  // false

'3' === '3' // true
```

^ This operator compares two values to check both the data type and value are the same.

---

#### `===` Strict Not Equal To

```javascript
'3' !== 3  // true

'3' !== '3' // false
```

^ This operator compares two values to check both the data type and value are not the same.

---

### Other Comparison Operators

| Operator | Meaning |
| :------: | ------- |
| > | greater than |
| < | less than |
| >= | greater than or equal to |
| <= | less than or equal to |

^ Programmers refer to testing or checking a condition as **evaluating** the condition.

---

## Structuring Comparison Operators

```javascript
// (operand   comparison operator  operand)

(score >= pass)
```

^ In any condition, there is usually one operator and two operands. The operands are placed on each side of the operator. They can be values or variables. Expressions are enclosed in brackets.

---

## Using Expressions with Comparison Operators

```javascript
((score1 + score2) > (high_score1 + high_score2))
```

^ The operand does not have to be a single value or variable name.

---

## Logical Operators

```javascript
((2 < 5) && (3 >= 2)) // AND

((2 < 5) || (2 < 1))  // OR

!(2 < 1) // NOT
```

^ Comparison operators usually return single values of **true** or **false**. Logical operators allow you to compare the results of more than one comparison operator.

^ **AND**: if both expressions evaluate to _true_ then the expression returns **true**. If just one of these returns _false_ then the expression will return **false**.

^ **OR**: if either expression evaluates to _true_, then the expression returns **true**.

^ **NOT**: this reverses the state of an expression. If it was _false_ (without the ! before it) it would return **true**. If the statement was _true_, then it would return **false**.

---

# Objective

## Introduce If Statements

---

## If Statements

```javascript
if (score >= 50) {
  congratulate();
}
```

^ The `if` statement evaluates a condition. If the condition evaluates to _true_, any statements in the subsequent code block are executed.

^ The syntax is first the _keyword_ **if** followed by the **condition** and an opening curly brace. Then the code to execute if the value is true, and then finally a closing curly brace.

---

## If...Else Statements

```javascript
if (score >= 50) {
  congratulate();
}
else {
  encourage();
}
```

^ The _if else_ statement checks a condition. If it resolves to _true_ the first code block is executed. If the condition resolves to _false_, the second code block is run instead.

^ _examples/decisions/ifelse.html_

---

## If...Else Alternatives

```javascript
const level = 'one';
let title;

if (level === 'one') {
  title = 'Level 1';
} else if (level === 'two') {
  title = 'Level 2';
} else if ((level === 'three') || (level === 'four')) {
  title = 'Level 3 or 4';
}
```

^ Sometimes `if else` statements can get very large and hard to manage. This small example starts to illustrate that. If your code needs a larger amount of checks and an `if else` statement starts to become hard to manage, you may want to consider a `switch` statement instead.

---

## Checking Existence

```javascript
const myElement = document.getElementById('header');

if (myElement) {
  // Element exists, let's do something
}
```

^ A common need is to check if an element exists on a page. If it does, we do something, if not, we do something else, or nothing at all.

---

## Checking Existence - Else

```javascript
const myElement = document.getElementById('header');

if (myElement) {
  // Element exists, let's do something
} else {
  // Element does not exist, do something else specific.
}
```

---

# Objective

## Introduce Switch Statements

---

## Switch Statements

```javascript
switch (level) {
  case 'one':
    title = 'Level 1';
    break;
  case 'two':
    title = 'Level 2';
    break;
  default:
    title = 'Level not 1 or 2';
    break;
}
```

^ A `switch` statement starts with a variable called the `switch value`. Each `case` indicates a possible value for this variable and the code that should run if the variable matches that value.

^ _examples/decisions/switch.html_
