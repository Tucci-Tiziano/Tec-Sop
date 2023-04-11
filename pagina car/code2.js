$(document).ready(function() {
  var currentSlide = 0;
  var numSlides = $('.carousel-item').length;

  $('.carousel-prev').click(function(event) {
    event.preventDefault();
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = numSlides - 1;
    }
    updateSlidePosition();
  });

  $('.carousel-next').click(function(event) {
    event.preventDefault();
    currentSlide++;
    if (currentSlide >= numSlides) {
      currentSlide = 0;
    }
    updateSlidePosition();
  });

  function updateSlidePosition() {
    var slideWidth = $('.carousel-item').width();
    var newPosition = -(currentSlide * slideWidth);
    $('.carousel-container').css('transform', 'translateX(' + newPosition + 'px)');
  }
});


