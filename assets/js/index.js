(function ($) {
  'use strict';

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/

  $(window).on('load', function () {
    
  });

  $(function () {
    hamburger();
  });

  $(window).on('scroll', function () {

  });

  /*--------------------------------------------------------------
    1. Test Plugin
  --------------------------------------------------------------*/
  function hamburger() {
    $(".hamburger").click(function(){
      $(".hamburger_icon").toggleClass("close");
    })
  }



})(jQuery); // End of use strict