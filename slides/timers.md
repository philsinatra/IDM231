build-lists: true
footer: IDM 221: Web Authoring I
slidenumbers: true
autoscale: true
theme: Cobalt2, 1

# IDM 221

## Web Design I

### Timers

---

# Objective

## Discuss Timers

---

## `setTimeout()`

```javascript
setTimeout(() => {
  // run after 2 seconds
}, 2000);
```

^ When writing JavaScript code, you might want to delay the execution of a function. We'll explore how to schedule functions in the future.

^ With `setTimeout()`, you specify a callback function to execute later, and a value expressing how later you want it to run in milliseconds.

^ This syntax defines a new function. You can call whatever other functions you want in there, or you can pass an existing function name with parameters.

---

```javascript
const myFunction = (firstParam, secondParam) => {
  // do something
}

setTimeout(myFunction, 2000, firstParam, secondParam);
```

---

```javascript
const id = setTimeout(() => {
  // run after 2 seconds
}, 2000)

// I changed my mind
clearTimeout(id);
```

^ `setTimeout` returns the timer id. This is generally not used, but you can store this id and clear it if you want to delete the scheduled function execution.

---

### Zero Delay

```javascript
setTimeout(() => {
  console.log('after');
}, 0)

console.log('before');

// before after
```

^ If you specify a timeout delay to 0, the callback will execute as soon as possible, but after the current function execution.

^ This is useful to avoid blocking the CPU on intensive tasks and letting other functions execute while performing heavy calculations.

---

## `setInterval()`

```javascript
setInterval(() => {
  // runs every 2 seconds
}, 2000);
```

^ `setInterval` is a function similar to `setTimeout`, with a difference: instead of running the callback function once, it will run it forever, at the specific time interval you specify in milliseconds.

---

```javascript
const interval = setInterval(() => {
  // runs every 2 seconds
  if (App.somethingIWait === 'arrived') {
    clearInterval(interval);
    return;
  }
  // otherwise do nothing
}, 2000);
```
