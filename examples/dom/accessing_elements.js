const init = () => {
  console.log('Accessing Elements!');

  const example = document.querySelector('.example01');
  const exampleText = example.textContent;

  console.group('Example');
  console.log('example', example);
  console.log('exampleText', exampleText);
  console.groupEnd();

  const firstUl = document.querySelector('ul');
  const newListItem = document.createElement('li');
  const newTextInfo = document.createTextNode('Howdy!');

  newListItem.appendChild(newTextInfo);
  firstUl.appendChild(newListItem);
  firstUl.removeChild(example);

  // Wrap all of this into a function.
  // function updateFirstList() {
  //
  // const updateFirstList = () => {
  //   const firstUl = document.querySelector('ul');
  //   const newListItem = document.createElement('li');
  //   const newTextInfo = document.createTextNode('Howdy!');

  //   newListItem.appendChild(newTextInfo);
  //   firstUl.appendChild(newListItem);
  //   firstUl.removeChild(example);
  // };

  // updateFirstList();

  const wwa = document.getElementById('working_with_attributes');
  console.group('Working With Attributes');
  console.log(wwa.innerHTML);
  console.log(wwa.getAttribute('class'));
  console.log(wwa.classList);
  console.log(wwa.className);
  console.groupEnd();

  wwa.setAttribute('class', 'testing class2');
  console.log(wwa.className);
  wwa.removeAttribute('id');
  wwa.removeAttribute('class');

  const myID = document.getElementById('myID');
  console.group('Access by ID');
  console.log(myID.innerHTML);
  console.groupEnd();

  const listItems = document.querySelectorAll('li');
  console.group('List Items');
  console.log(listItems);
  console.groupEnd();

  const listItemsLength = listItems.length;
  console.log('listItemsLength', listItemsLength);

  // for (let i = 0; i < listItemsLength; i++) {
  //   console.log(listItems[i], listItems[i].innerHTML);
  // }

  listItems.forEach(item => {
    console.log(item, item.innerHTML);
  });

  let noteElements = document.getElementsByClassName('note');
  console.log('noteElements', noteElements);

  noteElements = document.getElementsByTagName('li');
  console.log('noteElements', noteElements);

  // Trim this list to only the note elements
  const noteList = document.querySelector('.notes');
  noteElements = noteList.getElementsByTagName('li');
  console.log('noteElements', noteElements);

  noteElements = document.querySelectorAll('li');
  console.log('noteElements', noteElements);

  // Same problem, different solution

  noteElements = document.querySelectorAll('.notes li');
  console.log('noteElements', noteElements);
};

window.onload = init();