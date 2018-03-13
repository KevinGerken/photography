const images = document.querySelectorAll(`article img`);
const galleryName = document.querySelector(`article h3`);

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
    images[i].src = `images/${i + startingPic}.jpg` 
  }
}

function changeGallery(startingPic, galleryName) {
  fadeOut();
  setTimeout(function(){
    changeGallery(startingPic);
    galleryName.innerHTML = `galleryName`;
  }, 3500);
  setTimeout(fadeIn, 4000);
} 

function weddingGallery() {
  changeGallery(1, Weddings);
}

function seniorGallery() {
  changeGallery(15, Senoirs);
} 