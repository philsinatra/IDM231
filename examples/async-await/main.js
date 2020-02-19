const buildUI = data => {
  return new Promise((resolve, reject) => {
    const avatarImg = document.querySelector('.card-avatar-img');
    avatarImg.setAttribute('src', data.avatar_url);

    const name = document.querySelector('.name');
    name.innerHTML = data.name;

    const company = document.querySelector('.company');
    company.innerHTML = data.company;

    const url = document.querySelector('.url');
    const anchor = document.createElement('a');
    anchor.href = data.html_url;
    anchor.target = '_blank';
    anchor.innerHTML = 'GitHub Homepage';
    url.appendChild(anchor);

    // Simulate an error
    // reject('Error downloading account');

    // Simulate a delay for UI being built
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

const loadData = async () => {
  // Load data from Github API
  const name = 'jervo';
  const response = await fetch(`https://api.github.com/users/${name}`);
  const data = await response.json();
  await buildUI(data);
  return 'Show the UI please!';
};

const showUI = () => {
  const card = document.querySelector('.card');
  const loader = document.querySelector('.lds-ring');

  loader.hidden = true;
  card.hidden = false;
  card.classList.add('fadeIn');

  console.log('UI visible');
};

window.addEventListener('load', () => {
  loadData()
    .then(response => {
      console.log(response);
      showUI();
    })
    .catch(err => {
      console.log(err);
    });
});
