
window.onload = () => {
  let toFill = document.querySelector('.fillable')
  let dogs = new XMLHttpRequest();
  dogs.open('GET', 'http://localhost:3000/getDogs', true);
  dogs.onload = (response) => {
    if (response.target.status === 200) {
      let doggo = JSON.parse(response.target.response);
      doggo.forEach(dog => {
        let row = document.createElement('tr');
        let name = document.createElement('td');
        name.textContent = dog.name;
        row.appendChild(name);
        let age = document.createElement('td');
        age.textContent = dog.age;
        row.appendChild(age);
        toFill.appendChild(row);
        let date = document.createElement('td');
        date.textContent = dog.date;
        row.appendChild(date);
        toFill.appendChild(row);
        let hasHome = document.createElement('td');
        hasHome.textContent = dog.hashome;
        if (hasHome === true) {
          hasHome.textContent = 'yes';
        } else {
          console.log('no')
        }
        row.appendChild(hasHome);
        let button = document.createElement('button');
        button.textContent = "Delete";
        button.addEventListener('click', (event) => {
          let deleteDog = new XMLHttpRequest();
          deleteDog.open('DELETE', `http://localhost:3000/delete/${dog.id}`, true)
          deleteDog.send();
        })
        row.appendChild(button);

        let adopt = document.createElement('button');
        adopt.textContent = "Adopt";
        adopt.addEventListener('click', (event) => {
          let adoptDog = new XMLHttpRequest();
          adoptDog.open('PATCH', `http://localhost:3000/adopt/${dog.id}`, true)
          adoptDog.send();
        })
        row.appendChild(adopt);
        toFill.appendChild(row);
      })
    }
  }
  dogs.send();

  let send = document.querySelector('.sendData');
  send.addEventListener('submit', (event) => {
    event.preventDefault();
    const { name, age } = event.target.elements;
    /* const data = {
      name : event.target.elements.name,
      age : event.target.elements.age
    } */
    console.log(name.value, age.value);
    let bodyToSend = { name: name.value, age: age.value, date: Date.now(), hashome: true };
    let sendDogs = new XMLHttpRequest();
    sendDogs.open('POST', 'http://localhost:3000/', true);
    sendDogs.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    sendDogs.send(JSON.stringify(bodyToSend));
  })
}