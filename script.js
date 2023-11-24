document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.querySelector(".carousel-track");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".carousel-btn-prev");
    const nextBtn = document.querySelector(".carousel-btn-next");
    let currentItem = 0;
    let slideWidth = carouselItems[0].clientWidth;
  
    // Set initial position of carousel track
    carouselTrack.style.transform = `translateX(-${currentItem * slideWidth}px)`;
  
    // Add event listeners to prev/next buttons
    prevBtn.addEventListener("click", () => {
      if (currentItem === 0) {
        currentItem = carouselItems.length - 1;
      } else {
        currentItem--;
      }
      carouselTrack.style.transform = `translateX(-${
        currentItem * slideWidth
      }px)`;
    });
  
    nextBtn.addEventListener("click", () => {
      if (currentItem === carouselItems.length - 1) {
        currentItem = 0;
      } else {
        currentItem++;
      }
      carouselTrack.style.transform = `translateX(-${
        currentItem * slideWidth
      }px)`;
    });
  
    // Automatically move to the next slide every 5 seconds
    setInterval(() => {
      if (currentItem === carouselItems.length - 1) {
        currentItem = 0;
      } else {
        currentItem++;
      }
      carouselTrack.style.transform = `translateX(-${
        currentItem * slideWidth
      }px)`;
    }, 5000);
  });