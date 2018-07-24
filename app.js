console.log('hello world!');

$(document).ready(function(){
  $('.page-header').css('color', 'red');

  $('img').on('keypress', function(){
    $('.page-header').css('color', 'rgb(104, 214, 154)');
  })


}) // close document.ready
