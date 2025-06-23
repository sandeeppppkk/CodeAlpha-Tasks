let currentIndex = 0;
let galleryImages = [];

function openLightbox(img) {
  const images = document.querySelectorAll('.gallery-item img');
  galleryImages = Array.from(images);
  currentIndex = galleryImages.indexOf(img);

  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = galleryImages.length - 1;
  if (currentIndex >= galleryImages.length) currentIndex = 0;

  document.getElementById('lightbox-img').src = galleryImages[currentIndex].src;
}

function filterImages(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
