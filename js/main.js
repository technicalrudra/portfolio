$(function() {
	var menuLink = $('.menu-link');
	var menu = $('menu');
	var close = $('.close-btn');
	var navLink = $('li a');

	menuLink.click(function() {
		menu.toggleClass('active-menu');
	});
	close.click(function() {
		menu.toggleClass('active-menu');
	});

	navLink.on('click', function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var top = $(target).offset().top;
		$('html,body').animate({scrollTop: top}, 500)
	});
});

var typeString = [' Web Designer ', ' UI/UX Designer ', ' Graphics Designer '];
      var  i = 0;
      var count = 0
      var selectedText = '';
      var text = '';
      (function type() {
        if (count == typeString.length) {
          count = 0;
        }
        selectedText = typeString[count];
        text = selectedText.slice(0, ++i);
        document.getElementById('typing').innerHTML = text;
        if (text.length === selectedText.length) {
          count++;
          i = 0;
        }
        setTimeout(type, 200);
      }());

      function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }

$(document).ready(function(){

   $(".toggle-menu").click(function(){
        $( "#menu-block" ).toggle();
    });
   $(".close-btn").click(function(){
        $( "#menu-block" ).toggle();
    });

   $(".popup-btn").click(function(){
        $( ".popup-card" ).toggle();
    });
   $(".close-popup").click(function(){
        $( ".popup-card" ).toggle();
    });
});