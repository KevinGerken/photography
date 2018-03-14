const images = document.querySelectorAll(`article img`);
const galleryName = document.querySelector(`article h3`);
const weddingsButton = document.querySelector(`.weddings`);
const seniorsButton = document.querySelector(`.seniors`);
const babiesButton = document.querySelector(`.babies`);
const familiesButton = document.querySelector(`.families`);
const popupImage = document.querySelector(`.popup-image`);
const popup = document.querySelector(`.popup`);
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
      images[i].src = `images/${i + startingPic}.jpg`; 
    } else {
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

for(image of images) {
  image.addEventListener(`click`, function() {
    popupImage.src = `images/${this.src.slice(-6)}`;
    popup.classList.remove(`hidden`);
  });
}

popup.addEventListener(`click`, ()=> {
  popup.classList.add(`hidden`);
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