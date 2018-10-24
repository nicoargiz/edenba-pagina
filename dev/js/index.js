$(document).ready(function () {
  new WOW().init();

  
  // PARALAX EFFECTS
	$(".intro-parallax, #carouselExampleSlidesOnly, [data-paroller-factor]").paroller({
		factor: 0.6,
		type: 'background',
		direction: 'vertical'
	});

  //SCROLL FUNCTIONS
  var contactButtonNode = $('#contact-button');

  contactButtonNode.click(scrollingContact);

  function scrollingContact() {
    $('html, body').animate(
      {
        scrollTop: $('#contact-section').offset().top - 60
      },
      1000
    );
  }
});












