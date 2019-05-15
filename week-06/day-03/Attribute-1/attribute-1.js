/*     Write the image's url to the console.
      Replace the image with a picture of your favorite animal.
      Make the link point to the Green Fox Academy website.
      Disable the second button.
      Replace its text with 'Don't click me!'.
    */


    var imgOnPage = document.querySelector('img');
    console.log(imgOnPage.getAttribute('src'));

    var chnageImg = document.querySelector('img')
    chnageImg.setAttribute('src' , 'http://wwf.hu/d_img/105346_panda_kis.jpg');

    var changeLink = document.querySelector('a')
    changeLink.setAttribute('href' , 'https://www.greenfoxacademy.com/');

    var button = document.querySelector('.this-one').disabled = true;

    var replaceText = document.querySelector('.this-one')
    replaceText.innerText = "Dont click me";
   