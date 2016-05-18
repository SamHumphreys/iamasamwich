$(document).ready(function () {

  //keep navbar at the top of the page
  $(window).on('scroll', function (e) {
    var heightToTop = $(document).scrollTop();
    $('.navbar').animate({top: heightToTop}, 10);
  });

  

});
