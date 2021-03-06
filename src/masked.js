$(function() {
$('.mask').css({
  'position':'relative',
  'display':'-ms-flexbox',
  'display':'flex',
  'display': 'inline-block',
  'vertical-align':'middle',
  'flex-grow':'1',
  '-ms-flex-positive':'1',
  'flex-shrink': '0',
  'flex-basis':'0',
  'overflow':'hidden'
});

$('.mask').children().css({
  '-webkit-transform':'translate(150%, 150%)',
  '-moz-transform':'translate(150%, 150%)',
  '-o-transform':'translate(150%, 150%)',
  '-ms-transform':'translate(150%, 150%)',
  'transform':'translate(150%, 150%)'
});
});

function maskIt() {
  var $mask = $('.mask'),
      $masked = $mask.children();
  
  $mask.each(function() {
  var maskTransition = $(this).data('mask-transition');
  switch(maskTransition) {
    case 'fromLeft':
      $(this).children().css({
        '-webkit-transform': 'translate(-150%, 0)',
        '-moz-transform': 'translate(-150%, 0)',
        '-o-transform': 'translate(-150%, 0)',
        '-ms-transform': 'translate(-150%, 0)',
        'transform': 'translate(-150%, 0)'
      });
      break;
    case 'fromRight':
      $(this).children().css({
        '-webkit-transform': 'translate(150%, 0)',
        '-moz-transform': 'translate(150%, 0)',
        '-o-transform': 'translate(150%, 0)',
        '-ms-transform': 'translate(150%, 0)',
        'transform': 'translate(150%, 0)'
      });
      break;
    case 'fromTop':
      $(this).children().css({
        '-webkit-transform': 'translate(0, -150%)',
        '-moz-transform': 'translate(0, -150%)',
        '-o-transform': 'translate(0, -150%)',
        '-ms-transform': 'translate(0, -150%)',
        'transform': 'translate(0, -150%)'
      });
      break;
    case 'fromBottom':
      $(this).children().css({
        '-webkit-transform': 'translate(0, 150%)',
        '-moz-transform': 'translate(0, 150%)',
        '-o-transform': 'translate(0, 150%)',
        '-ms-transform': 'translate(0, 150%)',
        'transform': 'translate(0, 150%)'
      });
      break;
  }
    });
  
  $.each($mask, function(h) {
    $(this).children().delay(h * 150).queue(function() {
      $(this).css({
        '-webkit-transition': '.5s ease',
        '-moz-transition': '.5s ease',
        '-o-transition': '.5s ease',
        'transition': '.5s ease',
        '-webkit-transform': 'translate(0,0)',
        '-moz-transform': 'translate(0,0)',
        '-o-transform': 'translate(0,0)',
        '-ms-transform': 'translate(0,0)',
        'transform': 'translate(0,0)'
      });
    });
  });

}

$(window).load(function() {
    maskIt();
});
