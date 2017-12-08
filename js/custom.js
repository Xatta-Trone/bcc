$(document).ready(function(){
	//scroll to top
/*	 $(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {        
	        $('#return-to-top').fadeIn(200); 
	        $("#sticker").addClass("lightheader fixed-top");
	    } else {
	        $('#return-to-top').fadeOut(200);  
	        $("#sticker").removeClass("lightheader fixed-top");
	    }
	});
	$('#return-to-top').click(function() {    
	    $('body,html').animate({
	        scrollTop : 0          
	    }, 500);
	});*/


	$(".hero-slides").owlCarousel({
		items:1,
		autoplay:false,
		loop:true,	
	});
	$(".recent-news-slide").owlCarousel({
		items:3,
		margin:15,
		autoplay:false,
		loop:true,	
	});


	
});

