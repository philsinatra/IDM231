const init = () => {
  const intoAnimationKey = 'idm222-watchedIntro';
  const introElement = document.getElementById('intro');
  const pinkBall = introElement.querySelector('div');
  const birthdayForm = document.getElementById('birthday_form');

  const sounds = {
    soundAlert: new Audio('media/alert74.mp3'),
    soundPositive: new Audio('media/positive8.mp3')
  };

  const playSound = (whichSound) => {
    whichSound.play();
  };

  const hideElement = (el) => {
    el.setAttribute('aria-hidden', true);
    el.hidden = true;
  };

  const closeIntro = () => {
    introElement.classList.add('fadeOut');

    // Promise the fade out is done, then hide the intro.
    const promiseFadeOut = new Promise((resolve, reject) => {
      if (introElement.classList.contains('fadeOut'))
        window.setTimeout(() => {
          resolve();
        }, 2000);
      else
        reject(Error('fade out not applied'));
    });

    promiseFadeOut.then(() => {
      hideElement(introElement);

      localStorage.setItem(intoAnimationKey, 'true');
    });
  };

  const hasWatchedIntro = localStorage.getItem(intoAnimationKey);

  if (hasWatchedIntro === 'true') {
    hideElement(introElement);
  }

  const handleBirthdayForm = (event) => {
    event.preventDefault();

    const birthdayInput = document.getElementById('birthday');
    const birthdayValue = birthdayInput.value;

    let month, day;

    if (birthdayValue.includes('/')) {
      const dateArray = birthdayValue.split('/');
      month = dateArray[0];
      day = dateArray[1];
    } else {
      const birthday = new Date(`${birthdayValue}T00:00`);
      month = birthday.getMonth() + 1;
      day = birthday.getDate();
    }

    console.log('month: ', month);
    console.log('day: ', day);

    playSound(sounds.soundAlert);
  };

  pinkBall.addEventListener('animationend', closeIntro);
  birthdayForm.addEventListener('submit', handleBirthdayForm);
};

window.addEventListener('load', init);