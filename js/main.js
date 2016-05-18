$(document).ready(function () {

  var addDots = function () {
    var text = $('.dots').text();
    if (text !== '......') {
      text += '.';
      $('.dots').text(text);
    } else {
      $('.dots').text('');
    };
  };

  setInterval(function () {
    addDots();
  },500);
});
