const headerToggle = document.querySelector(".header-top__toggle");
const headerMenu = document.querySelector(".header-top__menu");
const isExpand = "is-expand";

headerToggle.addEventListener("click", function() {
  headerMenu.classList.add(isExpand);
})

window.addEventListener("click", function(e) {
  if(!headerMenu.contains(e.target) && !e.target.matches(".header-top__toggle")) {  
    headerMenu.classList.remove(isExpand);
  }
})

// Slick slider
$(document).ready(function(){
  $('.quote-container').on('init', function(event, slick){
    var $items = slick.$dots.find('li');
    $items.addClass('circle');
    $items.find('button').remove();
  });

  $('.quote-container').slick({
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        }
      }
    ]
  });
});
