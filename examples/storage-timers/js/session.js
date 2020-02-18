{
  const btnSetSession = document.getElementById('btnSetSession');
  const btnRemoveSession = document.getElementById('btnRemoveSession');
  const btnClearSession = document.getElementById('btnClearSession');

  const key = 'IDM231SessionName';

  const handleSetSession = () => {
    const inputName = document.getElementById('name');
    sessionStorage.setItem(key, inputName.value); // Set a session storage item
    console.log(`sessionStorage.${key}:`, sessionStorage.getItem(key));
  };

  const handleRemoveSession = () => {
    console.log(`Remove sessionStorage: ${key}`);
    sessionStorage.removeItem(key); // Remove a session storage item
  };

  const handleClearSession = () => {
    console.log('Clear all sessionStorage');
    sessionStorage.clear(); // ⚠️ Remove all session storage items
  };

  btnSetSession.addEventListener('click', handleSetSession, false);
  btnRemoveSession.addEventListener('click', handleRemoveSession, false);
  btnClearSession.addEventListener('click', handleClearSession, false);
}
