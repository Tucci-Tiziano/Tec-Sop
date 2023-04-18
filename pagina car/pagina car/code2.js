$(document).ready(function() {
  var carousel = $('.carousel__list');
  var carouselItem = $('.carousel__item');
  var carouselWidth = carousel
  .width() / 3; 
var currentSlide = 1; 


$('.carousel__next').click(function() {
if (currentSlide < 3) {
currentSlide++;
carousel.animate({left: "-=" + carouselWidth}, 600);
} else {
currentSlide = 1;
carousel.animate({left: 0}, 600);
}
});
$('.carousel__prev').click(function() {
if (currentSlide > 1) {
currentSlide--;
carousel.animate({left: "+=" + carouselWidth}, 600);
} else {
currentSlide = 3;
carousel.animate({left: "-=" + carouselWidth * 2}, 600);
}
});
});

