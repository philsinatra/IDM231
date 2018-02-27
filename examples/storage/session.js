{
  const btnSetSession = document.getElementById('btnSetSession');
  const btnRemoveSession = document.getElementById('btnRemoveSession');
  const btnClearSession = document.getElementById('btnClearSession');

  function handleSetSession() {
    const inputName = document.getElementById('name');
    console.log(inputName.value);

    // Set a session storage item
    sessionStorage.setItem('IDM222SessionName', inputName.value);
  }
  function handleRemoveSession() {
    console.log('Remove sessionStorage: IDM222SessionName');

    // Remove a session storage item
    sessionStorage.removeItem('IDM222SessionName');
  }
  function handleClearSession() {
    console.log('Clear all sessionStorage');

    // ⚠️ Remove all session storage items
    sessionStorage.clear();
  }

  btnSetSession.addEventListener('click', handleSetSession, false);
  btnRemoveSession.addEventListener('click', handleRemoveSession, false);
  btnClearSession.addEventListener('click', handleClearSession, false);
}
