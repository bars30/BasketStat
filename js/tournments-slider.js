document.addEventListener('DOMContentLoaded', function () {
 const sliderTrack = document.querySelector('.tournments-slider-track');
 const slides = document.querySelectorAll('.tournments-slider-item');
 const prevButton = document.querySelector('.prev-slide');
 const nextButton = document.querySelector('.next-slide');
 
 let currentIndex = 0;

 function updateSlidePosition() {
   const slideWidth = slides[0].offsetWidth;
   sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
 }

 prevButton.addEventListener('click', function () {
   console.log(currentIndex);
   
   if (currentIndex < slides.length - 1) {
     currentIndex++;
   } else {
     currentIndex = 0; 
   }
   updateSlidePosition();
 });

 nextButton.addEventListener('click', function () {
   console.log(currentIndex);
   
   if (currentIndex > 0) {
     currentIndex--;
   } else {
     currentIndex = slides.length - 1; 
   }
   updateSlidePosition();
 });


 window.addEventListener('resize', updateSlidePosition);
});
