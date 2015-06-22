$(window).scroll(function() {
	if ($(this).scrollTop() > 500) {
		$(".buying-option").addClass("sticky");
	}
	else{
		$(".buying-option").removeClass("sticky");
	}
});

//$(window).scroll(function(e){
//  $el = $('.buying-option');
//  if ($(this).scrollTop() > 200 && $el.css('position') != 'fixed'){
//    $('.buying-option').css({'position': 'fixed', 'top': '0px'});
//  }
//  if ($(this).scrollTop() < 200 && $el.css('position') == 'fixed')
//  {
//    $('.buying-option').css({'position': 'static', 'top': '0px'});
//  }
//});