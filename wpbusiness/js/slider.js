// 2 pics slider 
// author: Elena Shevchuk
// version: 1.0

// How to use:
// Create .one and .two classes with styles, which you want (with position absolute).
// Don't forget  give to you slider container position: relative and overflow: hidden properties;
// Paginations consists of <li> in <ul> items.
// For pagination don't create li items and make .active class for active item of pagination.
// Simple code is: 
// $('#slider').slide(); 
//
// You can disable pagination.
// For example:
// #('slider').slider({
// 		pagination : 'false',
//		duration : '400',
//		pagId : '#myPagId'
// });

(function($) {

	$.fn.slide = function( options ) {

		// Defaults
		var settings = $.extend({
			pagination		: "true", 		// pagination active
			pagId			: "#pagination",// pagination ID
			durationFirst	: "500", 		// how long animation will run from left to right of .two -> .one
			durationSecond	: "1000",		// how long animation will run from right to left of .one -> .otherLast on background
			listSpeed		: "800" 		// speed of several sliders
		}, options);
		
		var pagination 		= settings.pagination;
		var pagId 			= settings.pagId;
		var durationFirst	= parseInt(settings.durationFirst);
		var durationSecond	= parseInt(settings.durationSecond);
		var listSpeed 		= parseInt(settings.listSpeed);

		var length 			= this.children().length;
		var $slider 		= this;
		var curActive 		= 0; // position of active item

		// parameters of 2 main slides
		var firstWidth, firstHeight, firstTop, firstRight, firstLeft, firstBottom;
		var secondWidth, secondHeight, secondTop, secondRight, secondLeft, secondBottom;

		// Initialisation 
		var init = function() {			
			if (pagination == "true") {				
				for (var i = 0; i < length; i++) {					
					$(pagId).append("<li></li>");
				}
				pagThis();
			}
			var i = 0;
			var zindex = length;
			var $first;
			var $second;
			$slider.children().each(function(){
				if (i==0) {	
					$first = $(this);
					$first.removeClass().addClass("one").css('z-index', zindex);
				}
				else if (i==1) {
					$second = $(this);						
					$second.removeClass().addClass("two").css('z-index', zindex);
					curActive = $slider.children().index($(".one"));
				}
				else {
					$(this).removeClass().addClass("other").css('z-index', zindex);
				}
				zindex--;
				i++;
			});	

			// take param 
			firstWidth = $first.css('width'); 		
			firstHeight = $first.css('height');		
			firstTop = $first.css('top');			
			firstLeft = $first.css('left');			
			firstBottom = $first.css('bottom');			
			firstRight = $first.css('right');		

			secondWidth = $second.css('width');		
			secondHeight = $second.css('height');
			secondTop = $second.css('top');			
			secondBottom = $second.css('bottom');	
			secondLeft = $second.css('left');		
			secondRight = $second.css('right');		

			//and set params (it is overwrite .class parameters)
			$first.css('width', firstWidth);
			$first.css('height', firstHeight);
			$first.css('top', firstTop);
			$first.css('left', firstLeft);
			$first.css('bottom', firstBottom);
			$first.css('right', firstRight);

			$second.css('width', secondWidth);
			$second.css('height', secondHeight);
			$second.css('top', secondTop);
			$second.css('right', secondRight);
			$second.css('bottom', secondBottom);
			$second.css('left', secondLeft);

			$slider.children(".other").css('width', secondWidth);
			$slider.children(".other").css('height', secondHeight);
			$slider.children(".other").css('top', secondTop);
			$slider.children(".other").css('right', secondRight);
			$slider.children(".other").css('bottom', secondBottom);
			$slider.children(".other").css('left', secondLeft);
		};

		// one-step of slide show
		var next = function() { // switch z-index and class on one slide iteration
			var n;
			$slider.children().each(function(){
				n = parseInt($(this).css('z-index'));
				switch(n) {
					case length : 	
						$(this).css('z-index', '1');
						$(this).removeClass().addClass('otherLast');
						break;
					case length-1: // Main slide
						$(this).css('z-index', length);
						$(this).removeClass().addClass('one');
						// if pagination 
						if (pagination == "true") {
							curActive = $slider.children().index($(".one"));
							pagThis();
						}
						break;
					case length-2: // Second slide
						$(this).css('z-index', n+1);
						$(this).removeClass().addClass('two');
						break;	
					default :
						$(this).css('z-index', n+1);
						if ($(this).hasClass("otherLast")) {
							$(this).removeClass().addClass("other");
						}
						break;
				}
			});
			anim();
		};

		// make current page active
		var pagThis = function() {
			$(pagId).children(".active").removeClass();
			$(pagId).children().eq(curActive).addClass("active");
		};

		// animate of one slide moving
		var anim = function() {
			$slider.children(".one").animate({ // two slide go to one position
				width 	: firstWidth,
				height 	: firstHeight,
				top 	: firstTop,
				right 	: firstRight,
				bottom 	: firstBottom,
				left 	: firstLeft
			}, durationFirst);
			$slider.children(".otherLast").animate({ // one slide go to second position
				width 	: secondWidth,
				height 	: secondHeight,
				top 	: secondTop,
				right 	: secondRight,
				bottom 	: secondBottom,
				left 	: secondLeft
			}, durationSecond);
		};

		init();
		
		// on slide click
		this.children().click(function(){
			next();
		});

		// on pagination click
		if (pagination=="true") {
			// on pagination click
			$(pagId).children().click(function() {

				var diff = $(pagId).children().index($(this)) - curActive;
				if (diff < 0 ){
					diff = length + diff;
				}

				var list = function(n) {
					var n = n;
					if (n != 0){
						next();
						setTimeout(function(){ 
							n--;
							list(n); }, listSpeed);
					}
				};
				list(diff);
			});
		}	
	};
}) (jQuery);