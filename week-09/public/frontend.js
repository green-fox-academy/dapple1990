'use strict';

const form = document.querySelector('.my-form')

function clearInput() {
  form.reset()
}

function errorMeassage() {
  let newParagraph = document.querySelector('.message');
  newParagraph.innerHTML = '';
  let error = document.createElement('p')
  error.innerText = 'Your alias is already in use!';
  error.className = 'error';
  newParagraph.appendChild(error);
}

function succesMessage(alias, secretCode) {
  let succesParagraph = document.querySelector('.message');
  succesParagraph.innerHTML = '';
  let succes = document.createElement('p');
  succes.innerHTML = `Your URL is aliased to <span class='bold'>${alias} </span> and your secret code is <span class = 'bold'>${secretCode}</span>`;
  succesParagraph.appendChild(succes);
}
