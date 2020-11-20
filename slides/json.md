build-lists: true
footer: IDM 221: Web Authoring I
slidenumbers: true
autoscale: true
theme: Cobalt2, 1

# IDM 221

## Web Design I

### Working With JSON

---

# Objectives

- Introduce JSON Format
- Discuss Working With JSON

---

# Objective

## Introduce JSON Format

^ JavaScript Object Notation (pronounced jason), is one of several data formats for transferring and storing data.

---

### Object

```javascript
{
  first: 'Grace',
  last: 'Hopper'
}
```

---

### CSV

```
first,last
Grace,Hopper
```

---

## XML

```xml
<person>
  <first>Grace</first>
  <last>Hopper</last>
</person>
```

---

### JSON Data

```json
{
  "first": "Grace",
  "last": "Hopper"
}
```

---

## What JSON Is

- Read and understood well by humans & computers
- More flexible than CSV
- Less verbose than XML
- Easy to work with in JavaScript

^ Of those examples, JSON is preferred for JavaScript. It's easy to work with JSON in JavaScript because JSON is a subset of JavaScript. JSON is not a programming language.

---

## Rules of JSON

- six data types
- undefined & functions are not supported
- key/value pairs
- double quotes
- arrays use brackets [ ]
- objects us braces { }
- no single quotes

^ There are six data types: strings, numbers, booleans, arrays, objects & null

^ The undefined data type, and functions are not supported

^ All data types are represented as key/value pairs in double quotes

^ Arrays are represented by brackets and objects by braces

^ Single quotes are not supported

---

```json
{
  "employee": {
    "id": 1001,
    "startDate": "7/18/2016",
    "endDate": null,
    "isActive": true,
    "reviewScores": [88,95,96,89],
    "region": {
      "name": "Northwest",
      "joined": "8/20/2016"
    }
  }
}
```

---

# Objective

## Discuss Working With JSON

## JSON `stringify()` Method

```javascript
const task = 'Go to the store';
const json = JSON.stringify(task);

// "Go to the store"
```

^ The `stringify` method converts the JavaScript object that's passed to it into a JSON string.

---

```javascript
const task = {
  task: 'Go to the store'
};
const json = JSON.stringify(task);

// {"task": "Go to the store"}
```

---

```javascript
const tasks = [];
tasks.push('Go to the store');
tasks.push('Pick up the laundry');
const json = JSON.stringify(tasks);

// ["Go to the store", "Pick up the laundry"]
```

---

## JSON `parse()` Method

```javascript
const json = "{\"Go to the store\", \"Do the laundry\"}";
const tasks = JSON.parse(json);

// ["Go to the store", "Do the laundry"]
```

^ The `parse` method uses the information in the JSON string to deserialize the data structure.

^ _(examples/json)_
