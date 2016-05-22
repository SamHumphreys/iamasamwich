$(document).ready(function () {

  //keep navbar at the top of the page
  $(window).on('scroll', function () {
    var heightToTop = $(document).scrollTop();
    if (heightToTop >= 20) {
      $('.navbar').addClass('shrunken');
      $('.to-top').show();
    } else {
      $('.navbar').removeClass('shrunken');
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
      },1000);
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
          }, 2000);
        };
      }, 125);
    };

    var removeTypedHeading = function () {
      $('.typed-heading').fadeOut(1500, addContent);
    };

    var addContent = function () {
      $('.navbar').fadeIn(1500);
      $('.content').fadeIn(1500);
      $('footer').show();
      clickListeners.addAll();
    };

    waitASec();
    pause1.done(typeTheHeading);
    pause2.done(removeTypedHeading);
  };
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
        $('body').animate({scrollTop : 0}, 500);
      })
    },
    toContact: function () {
      $('#contact').on('click', function () {
        var distToContact = $('.contact').offset().top;
        $('body').animate({scrollTop : distToContact - 100}, 500);
      });
    },
    toSkills: function () {
      $('#skills').on('click', function () {
        var distToSkills = $('.skills').offset().top;
        $('body').animate({scrollTop : distToSkills - 100}, 500);
      });
    },
    toAbout: function () {
      $('#about-me').on('click', function () {
        var distToAbout = $('.about').offset().top;
        $('body').animate({scrollTop : distToAbout - 100}, 500);
      });
    },
    toProjects: function () {
      $('#projects').on('click', function () {
        var distToProjects = $('.projects').offset().top;
        $('body').animate({scrollTop : distToProjects - 100}, 500);
      });
    }
  };
});
