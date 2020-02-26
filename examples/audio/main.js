const soundButtons = document.querySelectorAll('.soundtrack');
const soundStopButton = document.getElementById('btn-stop-sounds');
const speakers = document.getElementById('speakers');

soundButtons.forEach(button => {
  const sound = button.dataset.sound;
  button.addEventListener('click', () => {
    speakers.src = `sounds/${sound}.mp3`;
    speakers.play();
  });
});

soundStopButton.addEventListener('click', () => {
  speakers.pause();
});
