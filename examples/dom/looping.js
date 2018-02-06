(function() {
  var hotItems = document.querySelectorAll('li.hot');
  if (hotItems) {
    var hotItemsLength = hotItems.length;
    // for (var i = 0; i < hotItemsLength; i++) {
    //   hotItems[i].className = 'cool';
    // }

    for (var i = 0; i < hotItemsLength; i++) {
      if (hotItems[i].innerHTML !== 'balsamic vinegar') {
        hotItems[i].className = 'cool';
      }
    }
  }

  function showIngredientCounters() {
    var ingredients = document.querySelectorAll('#ingredients li');
    var ingredientsLength = ingredients.length;
    for (var i = 0; i < ingredientsLength; i++) {
      ingredients[i].innerHTML =
        ingredients[i].innerHTML + ' <b>[' + i + ']</b>';
    }
    // That's sloppy... How can we fix?
  }

  function addIngredient(newIngredient) {
    var ingredientList = document.getElementById('ingredients');
    var newItem = document.createElement('li');
    newItem.innerHTML = newIngredient;
    // newItem.innerHTML = '<b>' + newIngredient + '</b>';
    ingredientList.appendChild(newItem);

    // How do we update the numbers?
    showIngredientCounters();
  }

  var ingredients = document.querySelectorAll('#ingredients li');
  if (ingredients) {
    showIngredientCounters();
    // Add a new item to the list.
    addIngredient('chocolate');
  }

  function showStepsCounters() {
    var steps = document.querySelectorAll('#steps li');
    // var steps = document.querySelectorAll('#steps li span');
    var stepsLength = steps.length;
    for (var i = 0; i < stepsLength; i++) {
      steps[i].innerHTML = steps[i].innerHTML + '<b>[' + i + ']</b>';
      // steps[i].innerHTML = '<b>[' + i + ']</b>';
    }
  }

  function addStep(setDetails) {
    var stepList = document.getElementById('steps');
    var newStep = document.createElement('li');
    newStep.innerHTML = setDetails;
    // newStep.innerHTML = setDetails + ' <span></span>';
    stepList.appendChild(newStep);
    showStepsCounters();
  }

  // Now add 'span' elements to HTML

  var steps = document.querySelectorAll('#steps li');
  if (steps) {
    showStepsCounters();
    addStep('sleep');
  }
})();
