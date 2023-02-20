(function ($) {
  'use strict';

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/

  $(window).on('load', function () {
     isotopeInitilizer();

  });

  $(function () {
   hamburger();
   carouselFun();
  });

  $(window).on('scroll', function () {

  });

  /*--------------------------------------------------------------
    1. Test Plugin
  --------------------------------------------------------------*/
  // Mobile menu functionality
  function hamburger() {
    $(".navbar-toggler").click(function(){
      $(".hamburger_icon").toggleClass("close");
    })
  }

// Masonry isotope functionality
 function isotopeInitilizer() {
  $("#portfolio_items").isotope({
    // options
    itemSelector:".portfolio_item",
    percentPosition: true,
    masonry: {
      columnWidth: '.portfolio_item'
    }
  })
}
 //Owl carousel functionality
 function carouselFun() {
  $(".client_items").owlCarousel({
    loop: true,
    autoplay: true,
    responsiveClass: true,
    dots:true,
    margin:10,
    responsive: {
      390: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".logo_items").owlCarousel({
    loop: true,
    autoplay: true,
    responsiveClass: true,
    dots:true,
    margin:15,
    responsive: {
      390: {
        items: 2,
      },
     768: {
        items: 4,
      },
      1000: {
        items:6,
      },
    },
  });
}

})(jQuery); // End of use strict