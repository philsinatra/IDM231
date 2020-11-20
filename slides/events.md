build-lists: true
footer: IDM 221: Web Authoring I
slidenumbers: true
autoscale: true
theme: Cobalt2, 1

# IDM 221

## Web Design I

### Events

---

# Objectives

- Introduce Events
- Discuss Binding Events

# Objective

## Introduce Events

---

## Events

- Interactions create events
- Events trigger code
- Code responds to users

^ When you browse the web, your browser registers different types of events. It's the browser's way of saying, "Hey, this just happened." Your script can then respond to these events. Scripts often respond to these events by updating the content of the web page (via the Document Object Model) which makes the page feel more interactive.

^ _click_ Events occur when users click or tap on a link, hover or swipe over an element, type on the keyboard, resize the window, or when the page they requested has loaded.

^ _click_ When an event occurs, or fires, it can be used to trigger a particular function. Different code can be triggered when users interact with different parts of the page.

^ _click_ Last week we saw how the DOM can be used to update a page. The events can trigger the kinds of changes the DOM is capable of. This is how a web page reacts to users.

---

## Types of UI Events

| UI Event | Description |
| -------- | ----------- |
| `load` | web page finished loading |
| `unload` | web page is unloaded |
| `error` | JS error OR asset doesn't exist |
| `resize` | window has been resized |
| `scroll` | user has scrolled up/down |

---

## Types of Keyboard Events

| Keyboard Event | Description |
| -------------- | ----------- |
| `keydown` | user presses a key |
| `keyup` | user releases a key |
| `keypress` | character is being inserted |

---

## Types of Mouse Events

| Mouse Event | Description |
| ----------- | ----------- |
| `click` | user presses/releases |
| `dblclick` | user presses/releases twice |
| `mousedown` | user presses |
| `mouseup` | user releases |
| `mousemove` | user moves the mouse |
| `mouseover` | user moves mouse over an element |
| `mouseout` | user moves mouse off an element |

---

## Terminology

- Events **fire**
- Events **trigger**

^ _click_ When an event has occurred, it is often described as having **fired** or been **raised**.

^ _click_ Events are said to **trigger** a function or script. When the `click` event fires, it could trigger a script.

---

## How Events Trigger JavaScript Code

1. Select the element node(s)
1. Indicate which event is the trigger
1. State the code you want to run

^ When the user interacts with the HTML on a page, there are three steps involved in getting it to trigger some JavaScript code. Together these steps are known as **event handling**.

^ _click_ Select the element node(s) you want the script to respond to.

^ _click_ Indicate which events on the selected node(s) will trigger the response. This is called _binding_ an event to a DOM node.

^ _click_ State the code you want to run when the event occurs. When the event occurs on a specific element, it will trigger a function.

---

# Objective

## Discuss Binding Events

---

## Three Ways to Bind Events to Elements

1. ~~HTML Event Handlers~~
1. DOM Event Handlers
1. DOM Event Listeners

^ Event handlers let you indicate which event you are waiting for on any particular element. There are three types of event handlers:

^ _click_ HTML event handlers are considered a bad practice. We're going to skip them completely.

^ _click_ Traditional DOM event handlers are supported in all major browsers and help us separate the JavaScript from the HTML.

^ _click_ Event listeners are the favored way of handling events.

---

## Traditional DOM Event Handlers

```javascript
// element.event = code
// element.onevent = functionName;

function checkUserName() {
  // code to check user name
}

const el = document.getElementById('username');
el.onblur = checkUserName;
```

^ Here is the syntax to bind an event to an element using an event handler, and to indicate which function should execute when that event fires.

^ Notice how the event handler is the last line. When a function is called, the parentheses that follow its name tell the JavaScript interpreter to "run this code now". We don't want the code to run until the event fires, so the parenthesis are omitted from the event handler on the last line.

^ Let's look at this example in the browser _(examples/events/handlers.html)_

---

## Event Listeners

```javascript
element.addEventListener('event', functionName [, Boolean]);

const myDiv = document.getElementById('myDiv');
myDiv.addEventListener('click', myFunction, false);
```

^ Event listeners can deal with more than one function at a time. Here is the syntax to bind an event to an element using an event listener, and to indicate which function should execute when that event fires.

^ _element_ is the DOM element node to target.

^ _event_ is the event to bind node(s) to in quote marks.

^ _functionName_ is the name of the function that should be called.

^ _Event Flow_ is the boolean at the end which indicates something called _capture_, which is usually set to false.

---

## Event Listeners (continued)

```javascript
function checkUserName() {
  // code to check user name
}

const el = document.getElementById('username');
el.addEventListener('blur', checkUserName, false);
```

^ Let's look at this example in the browser _(examples/events/listeners.html)_

---

### Using Parameters With Event Handlers/Listeners

```javascript
el.addEventListener('blur', function() {
  checkUserName(5);
}, false);
```

^ Because you cannot have parentheses after the function names in event handlers/listeners, passing arguments requires a workaround. We can use _anonymous_ functions.

^ Let's look at this example in the browser _(examples/events/anonymous\_listeners.html)_

---

## Changing Default Behavior

- `preventDefault()`

^ The event object has methods that change the default behavior of an element and how the element's ancestors respond to the event.

^ _click_ Some events, such as clicking links and submitting forms, take the user to another page. To prevent the default behavior of such elements, you can use the event object's `preventDefault()` method.

---

## Different Types of Events

- W3C DOM Events
- HTML5 Events
- BOM Events (browser object model)

^ Different types of events are grouped into the following categories. We will go through a bunch of examples of the different types over the next few example screens. Most are the result of the user interacting with the HTML.

^ _(examples/events/index.html)_
