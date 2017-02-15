//timing variables
var timing = {
  initialPause: 1000,
  typingSpeed: 125,
  waitAfterTyping: 2000,
  fade: 1500,
  scrollSpeed: 500,
  hideSpeed: 500
};

//editing timing variables
var timing = {
  initialPause: 0,
  typingSpeed: 0,
  waitAfterTyping: 0,
  fade: 0,
  scrollSpeed: 0,
  hideSpeed: 500
};


$(document).ready(function () {
  $('body').animate({scrollTop: 0}, 0);
  var debounce = 'startUp';

  //keep navbar at the top of the page
  $(window).on('scroll', function () {
    var scrollHeight = $(document).scrollTop();

    console.log(scrollHeight, debounce);

    if (scrollHeight <= 20 && debounce !== "top") {

      //if at the top
      debounce = 'top';
      $('.navbar').removeClass('shrunken');
      $('.button > img').css({
        display: 'none'
      });
      $('.to-top').css({
        width: 0
      });

      setTimeout(function () {
        $('.to-top').css({display: 'none'});
      }, timing.hideSpeed);

    } else if (
      scrollHeight > 20 && debounce !== 'notTop'
      || $('.to-top').css('display') === 'none' && debounce !== 'startUp') {

      //if scrolled away from the top
      debounce = 'notTop';
      $('.navbar').addClass('shrunken');
      $('.to-top').css({display: 'inline-block'}).animate({
        width: ['60px', 'linear']
      }, timing.hideSpeed);
      setTimeout(function () {
        if ($('.to-top').css('display') === 'none') {

        }
        if (debounce === 'notTop') {
          $('.button > img').css({
            display: 'inline-block'
          });
        };
      }, timing.hideSpeed * 2);

    };
  });


  //make the heading appear, then fade out, and then fade in .content and request click listeners
  var headingIntro = function () {
    var pause1 = $.Deferred();
    var pause2 = $.Deferred();

    var waitASec = function () {
      setTimeout(function () {
        pause1.resolve();
      }, timing.initialPause);
    };


    var typeTheHeading = function () {
      $('body').animate({scrollTop: 0},100);
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
          }, timing.waitAfterTyping);
        };
      }, timing.typingSpeed);
    };

    var removeTypedHeading = function () {
      $('.typed-heading').fadeOut(timing.fade, addContent);
    };

    var addContent = function () {
      $('.navbar').fadeIn(timing.fade).css('display', 'inline-block');
      $('.content').fadeIn(timing.fade);
      $('footer').show();
      clickListeners.addAll();
    };

    waitASec();
    pause1.done(typeTheHeading);
    pause2.done(removeTypedHeading);
  };

  //runs the intro
  headingIntro();

  var clickListeners = {
    addAll: function () {
      clickListeners.toTheTop();
      clickListeners.toContact();
      clickListeners.toSkills();
      clickListeners.toAbout();
      clickListeners.toProjects();
    },
    toTheTop: function () {
      $('.to-top').on('click', function () {
        $('body').animate({scrollTop : 0}, timing.scrollSpeed);
      })
    },
    toContact: function () {
      $('#contact').on('click', function () {
        var distToContact = $('.contact').offset().top;
        $('body').animate({scrollTop : distToContact - 100}, timing.scrollSpeed);
      });
    },
    toSkills: function () {
      $('#skills').on('click', function () {
        var distToSkills = $('.skills').offset().top;
        $('body').animate({scrollTop : distToSkills - 100}, timing.scrollSpeed);
      });
    },
    toAbout: function () {
      $('#about-me').on('click', function () {
        var distToAbout = $('.about').offset().top;
        $('body').animate({scrollTop : distToAbout - 100}, timing.scrollSpeed);
      });
    },
    toProjects: function () {
      $('#projects').on('click', function () {
        var distToProjects = $('.projects').offset().top;
        $('body').animate({scrollTop : distToProjects - 100}, timing.scrollSpeed);
      });
    }
  };
});
