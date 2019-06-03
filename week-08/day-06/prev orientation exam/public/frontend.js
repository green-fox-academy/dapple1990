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

function submit() {
  let newRequest = new XMLHttpRequest();
  newRequest.open('POST', '/api/links', true);
  request.setRequestHeader('Content-Type', 'application/json');
  const getData = {
    url: document.querySelector('#url'),
    alias: document.querySelector('#alias')
  }

  const submitButton = document.querySelector('#submit');

  submitButton.onclick = (event) => {
    event.preventDefault();
    submit();
  }

  newRequest.onload = (data) => {
    if (data.target.status === 200) {
      const result = JSON.parse(data.target.status);
      succesMessage(result[0].alias, result[0].secretCode);
    } else if (data.target.status === 400) {
      errorMeassage();
    }
  }
  newRequest.send(JSON.stringify(getData));
}

