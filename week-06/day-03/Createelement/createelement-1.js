/* <!-- You can work in the html or in a separate js file. Like:
    <script>
      Add an item that says 'The Green Fox' to the asteroid list.
      Add an item that says 'The Lamplighter' to the asteroid list.
      Add a heading saying 'I can add elements to the DOM!' to the .container.
      Add an image, any image, to the container.
    </script>
    OR
    <script src="createelement-1.js"></script> --> */

    let addItem = document.querySelector('ul.asteroids');
    let newFox = document.createElement('li')
    newFox.innerHTML = 'The Green Fox';
    addItem.appendChild(newFox);

    let newLighter = document.createElement('li')
    newLighter.innerHTML = 'The Lamplighter';
    addItem.appendChild(newLighter);

    let newHeading = document.getElementsByClassName('container');
    let addHeading = document.createElement('h1')
    addHeading.innerHTML = 'I can add elements to the DOM!';
    newHeading[0].appendChild(addHeading);

    let newImg = document.createElement('img');
    newImg.setAttribute('src' , 'https://static.esea.net/global/images/teams/114807.1441820111.jpg');
    newHeading[0].appendChild(newImg);

