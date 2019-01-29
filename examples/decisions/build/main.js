const data = ['Eagles', 'Flyers', 'Sixers', 'Phillies'];
const app = document.getElementById('root');

const createButton = team => {
  const button = document.createElement('button');

  button.innerHTML = team;
  button.classList.add('btn');
  // button.id = team.toLowerCase();
  button.id = `btn-${team.toLowerCase()}`;

  return button;
};

// for (let i = 0; i < data.length; i++) {
//   const team = data[i];
//   const teamButton = createButton(team);
//   app.appendChild(teamButton);
// }

// data.forEach(team => {
//   const teamButton = createButton(team);
//   app.appendChild(teamButton);
// });

const buildButtons = () => {
  data.forEach(team => {
    const teamButton = createButton(team);
    app.appendChild(teamButton);
  });
};

window.onload = () => {
  console.log('window loaded!');

  buildButtons();
};