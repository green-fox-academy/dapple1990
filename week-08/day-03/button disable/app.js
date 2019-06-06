const selectedItems = document.querySelector('form');
const yesRadio = document.querySelector('#yes');
const noRadio = document.querySelector('#no');
const buttonSignUp = document.querySelector('.button-signup');
const catsLover = document.querySelector('.button-love');
const loveCat = document.querySelector('#cat');
const dogPerson = document.querySelector('#dog');
const theFish = document.querySelector('#Viktor');

selectedItems.addEventListener('click', () => {
  if (loveCat.checked || dogPerson.checked) {
    buttonSignUp.disabled = false
  } else if (theFish.checked && noRadio.checked) {
    buttonSignUp.disabled = false;
  } else {
    buttonSignUp.disabled = true;
  }
  if (yesRadio.checked) {
    catsLover.disabled = false;
  } else {
    catsLover.disabled = true;
  }
});

function sayThankYou() {
  window.alert(`Thank you, you've successfully signed up for cat fact`);
}

catsLover.addEventListener('click', () => {
  if (yesRadio.checked) {
    sayThankYou();
  }
});

buttonSignUp.addEventListener('click', () => {
  if (theFish.checked && noRadio.checked) {
    window.alert(`Sigh, we still added you to the cat facts list`)
  } else {
    sayThankYou();
  }
});