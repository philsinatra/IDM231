const setTemps = () => {
  const hotItems = document.querySelectorAll('li.hot');
  if (hotItems) {
    // hotItems.forEach(item => {
    //   item.className = 'cool';
    // });

    // for (let i = 0; i < hotItems.length; i++) {
    //   if (hotItems[i].innerHTML !== 'balsamic vinegar') {
    //     hotItems[i].className = 'cool';
    //   }
    // }

    // Let's use a forEach loop to do the same thing.
    hotItems.forEach(item => {
      if (item.innerHTML !== 'balsamic vinegar') {
        item.className = 'cool';
      }
    });
  }
};

const showIngredientKeys = () => {
  const ingredients = document.querySelectorAll('#ingredients li');
  const ingredientsLength = ingredients.length;

  for (let i = 0; i < ingredientsLength; i++) {
    const item = ingredients[i];
    item.innerHTML = `${item.innerHTML} <b>[${i}]</b>`;
  }
};

const addIngredient = (ingredient) => {
  const ingredients = document.getElementById('ingredients');
  const listItem = document.createElement('li');
  listItem.innerHTML = ingredient;
  ingredients.appendChild(listItem);

  // Add function call to init()
  // How do we update the key numbers to include our new item?
  showIngredientKeys();
  // Comment out the call in the init.
};

const init = () => {
  setTemps();
  // showIngredientKeys();
  addIngredient('chocolate');
};

window.onload = init();