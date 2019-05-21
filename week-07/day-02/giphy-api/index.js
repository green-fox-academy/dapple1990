let httpRequest = new XMLHttpRequest();
httpRequest.onload = function () {
  let data = JSON.parse(httpRequest.responseText);
  let findElement = document.querySelector('.gifecske')
  for(let i = 0; i < data.data.length; i++) {
    let showGif = document.createElement('img');
    showGif.setAttribute('src', data.data[i].images.downsized_still.url)
    findElement.appendChild(showGif);
    showGif.onclick = () => {
      window.open(data.data[i].images.original.url)
    }
  }
  console.log(data);
}
httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=llama&api_key=Jrqc6HWnnMCYYae5gNterdP9CJQ74Er0&limit=16', true);
httpRequest.send();

/* Obtain an API key
Search/Find the images in the API
Display the list of the first 16 results's static thumbnail
If the user clicks on the thumbnail, display the animated GIF
 */