// Загружена ли библиотека
window.jQuery || document.write('<script type="text/javascript" src="js/jquery-1.9.1.min.js"><\/script>');

$(function() {
	$("#slider").carouFredSel({
		circular: false,
		infinite: false,
		auto 	: false,
		width	: '100%',
		prev	: {	
			button	: "#slider-left",
			key		: "left"
		},
		next	: { 
			button	: "#slider-right",
			key		: "right"
		}

});
	
	var isOverlay = false;
	$("#slider img").click(function() {
		if (!isOverlay) {
			isOverlay = true;		
			var tempImage = new Image();
			tempImage.src = $(this).attr("src");
			var width = tempImage.width;
			var height = tempImage.height;

			var top = $(window).height()/2 - height/2;
			var left = $(window).width()/2 - width/2;
			
			$('body').append('<img id="img-overlay" src="' + tempImage.src + '">');
			var $overlay = $('#img-overlay');
			$overlay.css({'top' : top, 
				'left' : left});
			$overlay.fadeIn(300);

			$overlay.click(function() {
				$("#img-overlay").remove();
				isOverlay = false;
			});
		
			tempImage = delete Image();
		}
			else {
				$("#img-overlay").remove();
				isOverlay = false;
			}
	});

});