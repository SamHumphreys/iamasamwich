$(document).ready(function () {

  //keep navbar at the top of the page
  $(window).on('scroll', function () {
    var heightToTop = $(document).scrollTop();
    if (heightToTop >= 60) {
      navbarSide(heightToTop);
    } else {
      navbarTop(heightToTop);
    };
  });

  var navbarSide = function (heightToTop) {
    $('.navbar').animate({  width: '160px',
                            height: '100%',
                            top: heightToTop
    }, 25);
    $('.navButtons').animate({width: '145px'}, 25);
  };

  var navbarTop = function (heightToTop) {
    $('.navbar').animate({  width: '100%',
                            height: '110px',
                            top: '0'
    }, 25);
    $('.navButtons').animate({width: '960px'}, 25);
  };

  //make the heading appear
  var headingIntro = function () {
    var phrase = "console.log('Hi, I'm Sam');";
    var array = phrase.split('');
    var x = 0;
    var doTheHeading = setInterval(function () {
      var text = $('.heading').text();
      text += array.shift();
      $('.heading').text(text);
      x++;
      if (x >= phrase.length) {
        window.clearInterval(doTheHeading);
      };
    }, 125);
  };


  var makeHeading = function () {
    headingIntro();
  };

  makeHeading();

});
