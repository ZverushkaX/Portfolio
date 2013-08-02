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

	$("#slider-container").slide();	

});