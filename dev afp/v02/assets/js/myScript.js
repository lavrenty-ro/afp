$(document).ready(function() {

	$(window).scroll(function(event) {

		var y = $(this).scrollTop();

		if (y >= 80) {

			$('.largeA').addClass('animate')
			$('.largeB').addClass('animate')

		}

		if (y >= 90) {

			$('.mediumA').addClass('animate')
			$('.mediumB').addClass('animate')
		}

		if (y >= 100) {

			$('.smallA').addClass('animate')
			$('.smallB').addClass('animate')
		}

		if (y >= 1000) {

			$('.backCover').addClass('animate')
			$('.backCoverLogo').addClass('animate')

		}

	});

	$('.parallax-window').parallax({imageSrc: 'assets/img/paralax01plic.jpg'});

});