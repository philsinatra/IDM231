build-lists: true
footer: IDM 221: Web Authoring I
slidenumbers: true
autoscale: true
theme: Cobalt2, 1

# IDM 221

## Web Design I

### The Document Object Model

---

# Objectives

- Introduce the DOM
- Work With the DOM Tree

---

# Objective

## Introduce the DOM

---

## Document Object Model (DOM)

```html
<html>
  <body>
    <div id="page">
      <hl id="header">List</hl>
      <h2>Buy groceries</h2>
      <ul>
        <li id="one" class="hot"><em>fresh</em> figs</li>
        <li id="two" class="hot">pine nuts</li>
        <li id="three" class="hot">honey</li>
        <li id="four">balsamic vinegar</li>
      </ul>
    </div>
    <script src="js/list.js"></script>
  </body>
</html>
```

^ As a browser loads a web page, it creates a model of that page. The model is called a DOM tree, and it is stored in the browsers' memory. It consists of four main types of nodes.

---

## DOM Nodes

- The document node
- Element nodes
- Attribute nodes
- Text nodes

---

![DOM tree](http://digm.drexel.edu/crs/IDM231/cdn/instructor_materials/images/06-domtree.png)

^ This image shows the "DOM Tree" of the previous code. Every element, attribute, and piece of text in the HTML is represented by its own DOM node. At the top of the tree a document node is added; it represents the entire page.

^ When you access any element, attribute, or text node, you navigate to it via the document node. It is the starting point for all visits to the DOM tree.

---

![DOM tree](http://digm.drexel.edu/crs/IDM231/cdn/instructor_materials/images/06-domtree.png)

^ _Element Nodes_ are represented in green in this graphic. HTML elements describe the structure of an HTML page.

^ To access the DOM tree, you start by looking for elements. Once you find the element you want, then you can access its text and attribute nodes if you want to. This is why you start by learning methods that allow you to access element nodes, before learning to access and alter text or attributes.

---

![DOM tree](http://digm.drexel.edu/crs/IDM231/cdn/instructor_materials/images/06-domtree.png)

^ _Attribute Nodes_ are represented in orange in this graphic. The opening tags of HTML elements can carry attributes and these are represented by attribute nodes in the DOM tree.

^ Attribute nodes are not children of the element that carries them; they are part of that element. Once you access an element, there are specific JavaScript methods and properties to read or change that element's attributes. For example, it is common to change the values of class attributes to trigger new CSS rules that affect their presentation.

---

![DOM tree](http://digm.drexel.edu/crs/IDM231/cdn/instructor_materials/images/06-domtree.png)

^ _Text Nodes_ are represented in the purplish color in this graphic. Once you have accessed an element node, you can then reach the text within that element. This is stored in its own text node.

^ Text nodes cannot have children. If an element contains text and another child element, the child element is not a child of the text node but rather a child of the containing element. (See the `<em>` element on the first `<li>` item.) This illustrates how the text node is always a new branch of the DOM tree, and no further branches come off of it.

---

# Objective

## Work With the DOM Tree

---

## Working With the DOM Tree

1. Locate the node that represents the element you want to work with.
1. Use its text content, child elements, and attributes

^ Accessing and updating the DOM tree involves two steps: _(clicks)_

---

### Step 1: Access the Elements

#### Individual Node Element

- `getElementById()`
- `querySelector()`
- traverse DOM tree

^ Here are three common ways to select an individual element:

^ `getElementById()` Uses the value of an element's `id` attribute.

^ `querySelector()` Uses a CSS selector, and returns the first matching element.

^ You can also select individual elements by traversing from one element to another within the DOM tree (more in a minute on this).

---

### Step 1: Access the Elements: Multiple Node Elements

- `getElementsByClassName()`
- `getElementsByTagName()`
- `querySelectorAll()`

^ There are three common ways to select multiple elements:

^ `getElementsByClassName()` selects all elements that have a specific value for their cl ass attribute.

^ `getElementsByTagName()` selects all elements that have the specified tag name.

^ `querySelectorAll()` uses a CSS selector to select all matching elements.

---

### Step 1: Access the Elements: Traversing Between Element Nodes

- `parentNode`
- `previousSibling` / `nextSibling`
- `firstChild` / `lastChild`

^ You can move from one element node to a related element node.

^ `parentNode` selects the parent of the current element node (which will return just one element).

^ `previousSibling` / `nextSibling` selects the previous or next sibling from the DOM tree.

^ `firstChild` / `lastChild` selects the first or last child of the current element

---

### Step 2: Working With Those Elements

- Access/update text nodes
- Work with HTML content
- Access/updated attribute values

^ Once you select the element(s), there are all sorts of methods and properties that work with those elements. You can _(click)_:

^ Let's look at some examples: _(examples/dom/accessing\_elements.html_)

---

## Methods That Select Individual Elements

```javascript
// object.method('parameter')
document.getElementById('one');
```

^ `getElementById()` is the quickest and most efficient way to access an element because no two elements can share the same value for their `id` attribute.

^ Here, `document` refers to the _document_ object. You always have to access individual elements via the _document_ object.

^ The `getElementById()` method indicates that you want to find an element based upon the value of its `id` attribute. The method needs to know the value of the `id` attribute on the element you want. It is the _parameter_ of the method.

^ This code will return the element node for the element whose `id` attribute has a value of _one_. Often, these nodes are stored in variables so they can be reused later.

---

## Methods That Select Individual Elements: `querySelector`

```javascript
// object.method('parameter')
document.getElementById('one');

document.querySelector('#one');
```

^ `querySelector()` is more flexible because its parameter is a CSS selector, which means it can be used to accurately target many more elements.

---

## Methods That Select Multiple Elements

```javascript
// Select all 'h1' elements
document.getElementsByTagName('h1')

// Select all elements that include a class 'hot'
document.getElementsByClassName('hot')

// Select all 'li' elements
document.querySelectorAll('li')

// Select all 'li' elements that include a class 'hot'
document.querySelectorAll('li[class="hot"]')
```

^ When a DOM method can return more than one element, it returns a NodeList. A NodeList is a collection of element nodes. Each node is given an index number. The order in which the element nodes are stored in a NodeList is the same order that they appear in the HTML page. NodeLists look like arrays and are numbered like arrays.

---

## Selecting an Element From a NodeList

- The `item()` method
- Array syntax

^ There are two ways to select an element from a Nodelist: The _item() method_ and _array syntax_. Both require the index number of the element you want.

---

### The `item()` method

```javascript
const elements = document.getElementsByClassName('hot');

if (elements.length >= 1) {
  const firstItem = elements.item(0);
}
```

^ NodeLists have a method called `item()` which will return an individual node from the NodeList. You specify the index number of the element you want as a parameter of the method.

---

### Array Syntax

```javascript
const elements = document.getElementsByClassName('hot');

if (elements.length >= 1) {
  const firstItem = elements[0];
}
```

^ Array syntax is preferred over the `item()` method because it is faster.

---

## Repeating Actions For An Entire Node List

```javascript
const hotItems = document.querySelectorAll('li.hot');

for (let i = 0; i < hotItems.length; i++) {
  hotItems[i].className = 'cool';
}
```

^ When you have a NodeList, you can loop through each node in the collection and apply the same statements to each.

^ In this example, once a NodeList has been created, a _for_ loop is used to go through each element in the NodeList. All of the statements inside the _for_ loop's curly braces are applied to each element in the NodeList one by one. The counter _i_ is used to indicate which item of the NodeList is currently being worked with.

^ Let's look at an example _(examples/dom/looping.html)_

---

## Adding Elements Using DOM Manipulation

- `createElement()`
- `createTextNode()`
- `appendChild()`

^ DOM manipulation offers a technique for adding new content to a page, which involves three steps.

^ _click_ You start by creating a new element node. It's not initially part of the DOM tree until it is addeded (step 3)

^ _click_ You can create a new text node, which again is stored in a variable and not part of the DOM tree until it is added.

^ _click_ Now that you have an element and optionally some content, you can add it to the DOM tree using the `appendChild` method.

---

## Adding Elements Using DOM Manipulation: `appendChild`

```javascript
const newElement = document.createElement('li');
const newText = document.createTextNode('beer');
newElement.appendChild(newText);

const position = document.getElementsByTagName('ul')[0];
position.appendChild(newElement);
```

---

## Removing Elements Via DOM Manipulation

- Store element to be removed
- Store parent element
- `removeChild()`

^ DOM manipulation can be used to remove elements from the DOM tree also.

^ _click_ You start by selecting the element that is going to be removed and store the element in a variable.

^ _click_ Next, you find the parent element that contains the element being removed, and store that element in a variable.

^ _click_ Last you can use the `removeChild()` method on the parent element to remove the desired element.

---

## Removing Elements Via DOM Manipulation: `removeChild`

```javascript
const removeElement = document.getElementsByTagName('li')[3];
const parentElement = removeElement.parentNode;

parentElement.removeChild(removeElement);
```

---

## Attribute Nodes

```javascript
document.getElementById('one').getAttribute('class');
```

^ Once you have an element node, you can use other properties and methods on that element node to access and change its attributes. There are two steps to accessing and updating attributes:

^ First, select the element node that carries the attribute and follow it with a period symbol. Then use one of the methods or properties to work with that element's attributes.

---

### Methods

- `getAttribute()`
- `hasAttribute()`
- `setAttribute()`
- `removeAttribute()`

---

### Properties

- `className`
- `id`

^ The available methods/properties are:

^ Let's look at some examples _(examples/dom/attributes.html)_
