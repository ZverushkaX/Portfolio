// Загружена ли библиотека
window.jQuery || document.write('<script type="text/javascript" src="js/jquery-1.9.1.min.js"><\/script>');

$(document).ready(function(){
	// Проверка форм
	$("#email-name").focus(function(){
		if ($(this).val()=="Name") {				
			$(this).val('');
		}
	});
	$("#email-name").blur(function(){
		if ($(this).val()=="") {
			$(this).val("Name");
		}
	});
	$("#email-adress").focus(function(){
		if ($(this).val()=="Email Address") {
			$(this).val('');
		}
	});
	$("#email-adress").blur(function(){
		if ($(this).val()=="") {
			$(this).val("Email Address");
		}
	});
	// аЁаЛаАаЙаДаЕб
	var $sliderBox = $("#slider-container");
	var $sliders = $sliderBox.children();
	var iSum = $("#slider-container li").length;
	var iFirst = "#slider-container .one";
	var iSecond = "#slider-container .two";
	var $pagBox = $("#pagination");
	var i = 0;
	function initPag(){		
		$sliders.each(function(){
			$pagBox.append("<li></li>");
		});
		$pagBox.children().first().addClass("active");
	}
	// баОаЗаДаАаЕаМ аПаАаГаИаНаАбаИб
	initPag();

	$sliders.click(function(){		
		var $iFirst = $(iFirst);
		var $iSecond = $(iSecond);
		if (iSum==2) { // абаЛаИ аВбаЕаГаО 2 баЛаАаЙаДаА			
			$iFirst.addClass("two").removeClass("one");
        	$iSecond.addClass("one").removeClass("two")        
  		}
  		else {
  			//ааАаГаИаНаАбаИб
  			if (i == iSum){
  				i = 0;
  			}
  			i++;  			
  			$pagBox.find(".active").removeClass();
  			if (i==iSum) {
  				$pagBox.children().eq(0).addClass("active");
  			}
  			else
  				$pagBox.children().eq(i).addClass("active");
  			// end

  			// баЛаАаЙаДб
  			if ($iSecond.next().hasClass("nodisplay")) {  		
  				$iSecond.next().removeClass().addClass("two");  				
  			}
  			else {
  				$sliders.first().removeClass().addClass("two");
  			}
  			$iFirst.removeClass().addClass("nodisplay");  		
  			$iSecond.removeClass().addClass("one");

  			// end
  		}
	});
	// ааБбаАаБаОббаИаК аПаАаГаИаНаАбаИаИ
	$pagBox.children().click(function(){
		$pagBox.find(".active").removeClass();
		$(this).addClass("active");
		i = $(this).index();

		$sliderBox.find(".one").removeClass().addClass("nodisplay");
		$sliderBox.find(".two").removeClass().addClass("nodisplay");
		$sliders.eq(i).removeClass().addClass("one");
		if (i == iSum-1) {			
			i = -1;
		}
		$sliders.eq(i+1).removeClass().addClass("two");
	});
/*	
	// Слайдер
	var $sliderBox = $("#slider-container");
	var $sliders = $sliderBox.children();
	var iSum = $("#slider-container li").length;
	var iFirst = "#slider-container .one";
	var iSecond = "#slider-container .two";
	var $pagBox = $("#pagination");
	var i = 0;

	var firstHeight = $(iFirst).css('height');
	var firstWidth = $(iFirst).css('width');
	var firstTop = $(iFirst).css('top');
	var firstBottom = $(iFirst).css('bottom');
	var firstLeft = $(iFirst).css('left');
	var firstRight = $(iFirst).css('right');

	var secondHeight = $(iSecond).css('height');
	var secondWidth = $(iSecond).css('width');
	var secondTop = $(iSecond).css('top');
	var secondBottom = $(iSecond).css('bottom');
	var secondLeft = $(iSecond).css('left');
	var secondRight = $(iSecond).css('right');
	function initPag(){		
		$sliders.each(function(){
			$pagBox.append("<li></li>");
		});
		$pagBox.children().first().addClass("active");
	}
	// создаем пагинацию
	initPag();

	$sliders.click(function(){		
		var $iFirst = $(iFirst);
		var $iSecond = $(iSecond);
		if (iSum==2) { // Если всего 2 слайда			
			$iFirst.addClass("two").removeClass("one");
        	$iSecond.addClass("one").removeClass("two")        
  		}
  		else {
  			//Пагинация
  			if (i == iSum){
  				i = 0;
  			}
  			i++;  			
  			$pagBox.find(".active").removeClass();
  			if (i==iSum) {
  				$pagBox.children().eq(0).addClass("active");
  			}
  			else
  				$pagBox.children().eq(i).addClass("active");
  			// end

  			// слайды
  			if ($iSecond.next().hasClass("nodisplay")) {  				
  				$iSecond.next().removeClass().addClass("two");  				
  			}
  			else {
  				$sliders.first().removeClass().addClass("two");
  			}
  			$iFirst.animate({right: "+=400px"},300).delay().animate({
  				width: secondWidth,
  				height: secondHeight,
  				left: secondLeft,
  				top: secondTop,
  				right: secondRight,
  				bottom: secondBottom,
  				"z-index": "-=1"
  			}, 300);
  			$iSecond.animate({
  				width: firstWidth,
  				height: firstHeight,
  				left: firstLeft,
  				top: firstTop,
  				right: firstRight,
  				bottom: firstBottom
  			}, 300).removeClass().addClass("one");
  			// end
  		}
	});
	// Обработчик пагинации
	$pagBox.children().click(function(){
		$pagBox.find(".active").removeClass();
		$(this).addClass("active");
		i = $(this).index();

		$sliderBox.find(".one").removeClass().addClass("nodisplay");
		$sliderBox.find(".two").removeClass().addClass("nodisplay");
		$sliders.eq(i).removeClass().addClass("one");
		if (i == iSum-1) {			
			i = -1;
		}
		$sliders.eq(i+1).removeClass().addClass("two");
	});*/
});