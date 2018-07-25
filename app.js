console.log('hello world!');

$(document).ready(function(){



  // var $bgmusic = $('#bg-music')[0];
  // $bgmusic.play();
  // $('bg-music').get(0).play();

  $('#music-button').on('click', function(){
    $('#bg-music')[0].play();
  })

  $('.page-header').css('color', 'red');
  $('img').on('click', function(){
    $('.page-header').css('color', 'rgb(104, 214, 154)');
  })

}) // close document.ready
