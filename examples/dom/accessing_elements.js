(function() {
  console.log('Accessing Elements!');

  var example01 = document.querySelector('.example01');
  var example01Text = example01.textContent;

  console.group('Example 01');
  console.log('example01: ' + example01);
  console.log('example01Text: ' + example01Text);

  // You don't HAVE to store each piece in a variable:
  console.log(document.querySelector('.example01').textContent);
  console.groupEnd();

  // Work with the HTML content:
  console.group('Example 01 HTML Manipulation');
  console.log(document.querySelector('ul').innerHTML);
  console.log(document.querySelector('ul').textContent);
  console.groupEnd();

  var firstUl = document.querySelector('ul');
  var newListItem = document.createElement('li');
  var newTextInfo = document.createTextNode('Howdy!');

  newListItem.appendChild(newTextInfo);
  firstUl.appendChild(newListItem);
  firstUl.removeChild(example01);

  // Should we move all of this into a function?
  // function updateFirstList() {
  //   var firstUl = document.querySelector('ul');
  //   var newListItem = document.createElement('li');
  //   var newTextInfo = document.createTextNode('Howdy!');

  //   newListItem.appendChild(newTextInfo);
  //   firstUl.appendChild(newListItem);
  //   firstUl.removeChild(example01);
  // }

  // updateFirstList()

  var hdWorkingWithAttributes = document.getElementById(
    'working_with_attributes'
  );
  console.group('Working With Attributes');
  console.log(hdWorkingWithAttributes.innerHTML);
  console.log(hdWorkingWithAttributes.getAttribute('class'));
  console.groupEnd();

  hdWorkingWithAttributes.setAttribute('class', 'testing class2');
  console.log(hdWorkingWithAttributes.getAttribute('class'));
  hdWorkingWithAttributes.removeAttribute('id');
  hdWorkingWithAttributes.removeAttribute('class');

  var myID = document.getElementById('myID');
  console.group('Access By ID');
  console.log(myID.innerHTML);
  console.groupEnd();

  var myList = document.getElementById('myList');
  var firstItem = myList.querySelector('li');
  console.log(firstItem.innerHTML);
  // Notice how this returned only the first list item's HTML. Why?

  var listItems = myList.querySelectorAll('li');
  console.group('myList Items');
  console.log(listItems);
  console.groupEnd();

  var listItemsLength = listItems.length;
  console.log('listItemsLength: ' + listItemsLength);

  for (var i = 0; i < listItemsLength; i++) {
    console.log('listItem[' + i + ']: ' + listItems[i].innerHTML);
  }

  var noteElements = document.getElementsByClassName('note');
  console.log(noteElements);

  noteElements = document.getElementsByTagName('li');
  console.log(noteElements);
  // That's a big list. How can we trim that down to only the 'note' elements?

  var noteList = document.querySelector('.notes');
  noteElements = noteList.getElementsByTagName('li');
  console.log(noteElements);

  noteElements = document.querySelectorAll('li');
  console.log(noteElements);
  // Same problem?

  // Different solution:
  noteElements = document.querySelectorAll('.notes li');
  console.log(noteElements);
})();
