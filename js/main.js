$(document).ready(function () {

  //keep navbar at the top of the page
  $(window).on('scroll', function () {
    var heightToTop = $(document).scrollTop();
    if (heightToTop >= 20) {
      $('.navbar').addClass('on-the-side');
      $('.to-top').show();
    } else {
      $('.navbar').removeClass('on-the-side');
      $('.to-top').hide();
    };
  });


  //make the heading appear, then fade out, and then fade in .content and request click listeners
  var headingIntro = function () {
    var pause1 = $.Deferred();
    var pause2 = $.Deferred();

    var waitASec = function () {
      setTimeout(function () {
        pause1.resolve();
      },10);                  //change to 1000
    };

    var typeTheHeading = function () {
      var phrase = "console.log('Hi, I'm Sam');".split('');
      var x = 0;
      var y = phrase.length;
      var typeItOut = setInterval(function () {
        var text = $('.typed-heading').text();
        text += phrase.shift();
        $('.typed-heading').text(text);
        x++;
        if (x >= y) {
          window.clearInterval(typeItOut);
          setTimeout(function () {
            pause2.resolve();
          }, 20);   //change to 2000
        };
      }, 1);   //change to 125
    };

    var removeTypedHeading = function () {
      $('.typed-heading').fadeOut(15, addContent);   //change to 1500
    };

    var addContent = function () {
      $('.content').fadeIn(15);    //change to 1500
      addClickListeners();
    };

    waitASec();
    pause1.done(typeTheHeading);
    pause2.done(removeTypedHeading);
  };
  headingIntro();

  var addClickListeners = function () {
    console.log('clickListeners');
  }

});
