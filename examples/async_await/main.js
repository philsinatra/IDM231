const getUserData = async name => {
  const response = await fetch(`https://api.github.com/users/${name}`);
  const data = await response.json();
  return data;
};

const buildUI = async data => {
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
};

const init = () => {
  getUserData('jervo')
    .then(data => {
      console.log(data);
      buildUI(data);
    })
    .then(() => {
      const card = document.querySelector('.card');
      const loader = document.querySelector('.lds-ring');

      setTimeout(() => {
        loader.hidden = true;
        card.hidden = false;
        card.classList.add('fadeIn');
      }, 2000);
    });
};

window.addEventListener('load', init);
