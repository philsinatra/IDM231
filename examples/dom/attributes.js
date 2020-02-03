(function() {
  const firstItem = document.getElementById('one');

  if (firstItem) {
    if (firstItem.hasAttribute('class')) {
      const attr = firstItem.getAttribute('class');
      console.log('attr: ' + attr);

      // Add the value of the attribute after the list.
      const el = document.createElement('p');
      el.innerHTML = `The first item has a class name: <b>${attr}</b>`;
      document.body.appendChild(el);

      // Change the attribute value
      firstItem.className = 'complete';
    }
  }

  const fourthItem = document.getElementsByTagName('li')[3];
  if (fourthItem) fourthItem.setAttribute('class', 'cool');

  // Remove an attribute
  const thirdItem = document.getElementById('three');
  if (thirdItem) {
    if (thirdItem.hasAttribute('class')) {
      thirdItem.removeAttribute('class');
    }
  }
})();
