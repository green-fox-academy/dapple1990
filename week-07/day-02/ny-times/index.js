let httpRequest = new XMLHttpRequest();
httpRequest.onload = () => {
  let data = JSON.parse(httpRequest.responseText);
  let element = document.querySelector('.articles');
  let docs = data.response.docs;
  for (let i = 0; i < docs.length; i++) {
    let myarticles = document.createElement('div');
    element.appendChild(myarticles);
    let header = document.createElement('h3');
    let alement = document.createElement('a')
    myarticles.appendChild(header);
    header.appendChild(alement);
    let paragraph = document.createElement('p');
    myarticles.appendChild(paragraph);
    let spanelement = document.createElement('span')
    myarticles.appendChild(spanelement);
    alement.innerHTML = docs[i].headline.main;
    paragraph.innerHTML = docs[i].snippet;
    spanelement.innerHTML = docs[i].pub_date
    alement.setAttribute('href', docs[i].web_url);
  }
  console.log(data);
}

httpRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=lpkZA5E1CIrPBHT3gds0h5oXtkd0QnFt', true);
httpRequest.send();