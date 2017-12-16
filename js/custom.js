$(document).ready(function(){
	//scroll to top
	 $(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {        
	        $('#return-to-top').fadeIn(200); 
	        $("#sticker").addClass("lightheader ");
	    } else {
	        $('#return-to-top').fadeOut(200);  
	        $("#sticker").removeClass("lightheader");
	    }
	});
	$('#return-to-top').click(function() {    
	    $('body,html').animate({
	        scrollTop : 0          
	    }, 500);
	});


	$(".hero-slides, .programe-slides").owlCarousel({
		items:1,
		autoplay:true,
		loop:true,	
	});
/*
	$(".programe-slides").owlCarousel({
		items:1,
		autoplay:false,
		loop:true,	
	});*/


	$(".recent-news-slide").owlCarousel({
		items:3,
		margin:5,
		autoplay:false,
		loop:true,	
	});

	$(".company-logo-wrapper").owlCarousel({
		items:5,
		margin:20,
		autoplay:false,
		loop:true,	
	});

	$('#clock').countdown('2018/01/01').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<span>%-w</span> week%!w '
    + '<span>%-d</span> day%!d '
    + '<span>%H</span> hr '
    + '<span>%M</span> min '
    + '<span>%S</span> sec'));
});


	
});

