{
  const btnSetLocal = document.getElementById('btnSetLocal');
  const btnRemoveLocal = document.getElementById('btnRemoveLocal');
  const btnClearLocal = document.getElementById('btnClearLocal');

  const key = 'IDM231LocalName';

  const handleSetLocal = () => {
    const inputName = document.getElementById('name');
    localStorage.setItem(key, inputName.value); // Set a local storage item
    console.log(`localStorage.${key}:`, localStorage.getItem(key));
  };

  const handleRemoveLocal = () => {
    console.log(`Remove localStorage: ${key}`);
    localStorage.removeItem(key); // Remove a local storage item
  };

  const handleClearLocal = () => {
    console.log('Clear all localStorage');
    localStorage.clear(); // ⚠️ Remove all local storage items
  };

  btnSetLocal.addEventListener('click', handleSetLocal, false);
  btnRemoveLocal.addEventListener('click', handleRemoveLocal, false);
  btnClearLocal.addEventListener('click', handleClearLocal, false);
}
