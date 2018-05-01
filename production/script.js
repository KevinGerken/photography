const imageLinks = document.querySelectorAll(`article a`),
      images = document.querySelectorAll(`article a img`),
      galleryName = document.querySelector(`article h3`),
      weddingsButton = document.querySelector(`.weddings`),
      seniorsButton = document.querySelector(`.seniors`),
      babiesButton = document.querySelector(`.babies`),
      familiesButton = document.querySelector(`.families`),
      popupImage = document.querySelector(`.popup-image`),
      popup = document.querySelector(`.popup`),
      stopButton = document.querySelector(`.stop-button`),
      leftArrow = document.querySelector(`.arrow-left`),
      rightArrow = document.querySelector(`.arrow-right`),
      x = document.querySelector(`.close`);
let slideshowIntervalID;

function fadeOut() {
  for(let i = 0; i < images.length; i++) {
    setTimeout(function() {
      images[i].style.opacity = 0;
    }, i * 200);
    setTimeout(function() {
      galleryName.style.opacity = 0;
    }, 3000)
  }
}

function fadeIn() {
  galleryName.style.opacity = 1;
  for(let i = 0; i < images.length; i++) {
    setTimeout(function() {
      images[i].style.opacity = 1;
    }, i * 200);
  }
}

function loadGallery(startingPic) {
  for(let i = 0; i < images.length; i++) {
    if(i+startingPic > 9) {
      imageLinks[i].href = `images/${i + startingPic}.jpg`;
      images[i].src = `images/${i + startingPic}.jpg`; 
    } else {
      imageLinks[i].href = `images/0${i + startingPic}.jpg`;
      images[i].src = `images/0${i + startingPic}.jpg`;
    }
  }
}

function changeGallery(startingPic, name) {
  fadeOut();
  setTimeout(function(){
    loadGallery(startingPic);
    galleryName.innerHTML = name;
  }, 3500);
  setTimeout(fadeIn, 4500);
} 

weddingsButton.addEventListener(`click`, ()=> {
  changeGallery(1, `Weddings`)
});

seniorsButton.addEventListener(`click`, ()=> {
  changeGallery(15, `Senoirs`);
});

babiesButton.addEventListener(`click`, ()=> {
  changeGallery(29, `Babies`);
});

familiesButton.addEventListener(`click`, ()=> {
  changeGallery(43, `Families`);
});

for(image of imageLinks) {
  image.addEventListener(`click`, function(event) {
    event.preventDefault();
    console.log(this.childNodes);
    popupImage.src = `images/${this.childNodes[1].src.slice(-6)}`;
    popup.classList.remove(`hidden`);
    x.focus();
  });
}

x.addEventListener(`click`, ()=> {
  popup.classList.add(`hidden`);
  stopSlideshow();
  stopButton.classList.add(`play-button`);
});

leftArrow.addEventListener(`click`, slideBackward);
rightArrow.addEventListener(`click`, slideForward);
stopButton.addEventListener(`click`, function() {
  stopButton.classList.toggle(`play-button`);
  if(stopButton.classList.contains(`play-button`)) {
    stopSlideshow();
  } else {
    slideshow();
  }
});

function slideForward() {
  let currentImgNum = Number(popupImage.src.slice(-6, -4));
  if(currentImgNum < 9){
    popupImage.src = `images/0${currentImgNum + 1}.jpg`;
  } else if (currentImgNum < 56) {
    popupImage.src = `images/${currentImgNum + 1}.jpg`;
  } else {
    popupImage.src = `images/01.jpg`;
  }
}

function slideBackward() {
  let currentImgNum = Number(popupImage.src.slice(-6, -4));
  if (currentImgNum === 1) {
    popupImage.src = `images/56.jpg`;
  } else if(currentImgNum < 10){
    popupImage.src = `images/0${currentImgNum - 1}.jpg`;
  } else {
    popupImage.src = `images/${currentImgNum - 1}.jpg`;    
  }
}

function slideshow() {
  slideForward();
  slideshowIntervalID = setInterval(slideForward, 2000);
}

function stopSlideshow() {
  clearInterval(slideshowIntervalID); 
}