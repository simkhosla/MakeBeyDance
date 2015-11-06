
$(document).ready(function(){


console.log('Everything has loaded.');

  var bey = $('.box1');

  $('li').fadeIn(2000);

  $('#btnRight').click(function(){
    console.log('mybuttonisworking');
    bey.css("background-image", "url(beyRight.png)");
    bey.animate({'left':'+=50px'}, 'slow');
  });

  $('#btnLeft').click(function(){
    console.log('mybuttonisworking');
    bey.css("background-image", "url(beyLeft.png)");
    bey.animate({'left':'-=50px'}, 'slow');
  });


  $('#btnShake').click(function(){
    console.log('mybuttonisworking');
    bey.css("background-image", "url(beybutt.gif)");
  });

  $( "html" ).keyup(function( event ) {
  if ( event.keyCode == 37 ) {
    bey.css("background-image", "url(beyLeft.png)");
    bey.animate({'left':'-=50px'}, 'slow');
  };
    console.log(event.keyCode);
  });

  $( "html" ).keyup(function( event ) {
  if ( event.keyCode == 39 ) {
    bey.css("background-image", "url(beyRight.png)");
    bey.animate({'left':'+=50px'}, 'slow');
  };
    console.log(event.keyCode);
  });




}) // end of document.ready
