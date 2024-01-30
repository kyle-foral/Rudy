const img = document.querySelector('img');
const section = document.querySelector('section');

document.addEventListener('click', handleButtons);
let timer = setInterval(handleSetInterval, 3000);

function handleButtons(event) {
  clearInterval(timer);
  timer = setInterval(handleSetInterval, 3000);

  let currentClass = event.target.className;
  if (currentClass === 'fas fa-angle-left leftAngle') {
    displayPreviousSection();
  } else if (currentClass === 'fas fa-angle-right rightAngle') {
    displayNextSection();
  }
  handleDots();
}

function displayNextSection() {
  if (section.className === 'pikachu') {
    displayBulbasaur();
  } else if (section.className === 'bulbasaur') {
    displayCharmander();
  } else if (section.className === 'charmander') {
    displaySquirtle();
  } else if (section.className === 'squirtle') {
    displayJigglypuff();
  } else if (section.className === 'jigglypuff') {
    displayPikachu();
  }
}

function handleSetInterval() {
  displayNextSection();
}

function displayPikachu() {
  section.className = 'pikachu';
  img.src = 'images/1.png';

}
function displayBulbasaur() {
  section.className = 'bulbasaur';
  img.src = 'images/2.png';

}
function displayCharmander() {
  section.className = 'charmander';
  img.src = 'images/3.png';
}
function displaySquirtle() {
  section.className = 'squirtle';
  img.src = 'images/4.png';

}
function displayJigglypuff() {
  section.className = 'jigglypuff';
  img.src = 'images/5.png';

}
