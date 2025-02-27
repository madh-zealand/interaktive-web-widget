const clickMeButton = document.querySelector('#click-me-button');

clickMeButton.addEventListener('click', function () {
  const emojiElement = document.createElement('div');
  emojiElement.classList.add('emoji');
  emojiElement.textContent = '😶‍🌫️';

  clickMeButton.parentElement.appendChild(emojiElement);
  clickMeButton.remove();
});
