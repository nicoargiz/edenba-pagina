$(document).ready(function () {

  var slideUp1 = {
    distance: '50%',
    origin: 'bottom',
    duration: 2000,
    opacity: 0,
    delay: 800,
  };
  var slideUp2 = {
    distance: '50%',
    origin: 'bottom',
    duration: 1000,
    opacity: 0,
    delay: 500,
  };
  var slideDown1 = {
    distance: '50%',
    origin: 'top',
    duration: 2000,
    opacity: 0,
    delay: 800,
  };
  var slideDown2 = {
    distance: '50%',
    origin: 'top',
    duration: 1000,
    opacity: 0,
    delay: 500,
  };
  var slideRight1 = {
    distance: '50%',
    origin: 'left',
    duration: 2000,
    opacity: 0,
    delay: 800,
  };
  var slideRight2 = {
    distance: '50%',
    origin: 'left',
    duration: 1000,
    opacity: 0,
    delay: 500,
  };
  var slideLeft1 = {
    distance: '50%',
    origin: 'right',
    duration: 2000,
    opacity: 0,
    delay: 800,
  };
  var slideLeft2 = {
    distance: '50%',
    origin: 'right',
    duration: 1000,
    opacity: 0,
    delay: 500,
  };


  // INDEX
  ScrollReveal({ reset: false }).reveal('.about-us-title', slideRight2);
  ScrollReveal({ reset: false }).reveal('#about-us-image', slideUp2);
  ScrollReveal({ reset: false }).reveal('#about-us-text', { delay: 300 });

  // BOOKING
  ScrollReveal({ reset: false }).reveal('.parallax-booking', slideRight2);  
  ScrollReveal({ reset: false }).reveal('.artists-title', slideLeft1);
  ScrollReveal({ reset: false }).reveal('.artists-text', slideRight2);

  ScrollReveal({ reset: false }).reveal('#dj-image-1', slideUp1);
  ScrollReveal({ reset: false }).reveal('#dj-image-2', slideDown1);
  ScrollReveal({ reset: false }).reveal('#dj-image-3', slideLeft1);
  ScrollReveal({ reset: false }).reveal('#dj-image-4', slideRight1);
  ScrollReveal({ reset: false }).reveal('#dj-image-5', slideRight1);
  ScrollReveal({ reset: false }).reveal('#dj-image-6', slideLeft1);
  ScrollReveal({ reset: false }).reveal('#dj-image-7', slideDown1);
  ScrollReveal({ reset: false }).reveal('#dj-image-8', slideUp1);


  // ARTIST
  ScrollReveal({ reset: false }).reveal('.parallax-artists', slideRight2);

  ScrollReveal({ reset: false }).reveal('.artist-image', slideUp1);
  ScrollReveal({ reset: false }).reveal('#artist-text', { delay: 700 });

  //Contact form
  ScrollReveal({ reset: true }).reveal('.contact-title', slideRight1);
  ScrollReveal({ reset: true }).reveal('.artist-input', slideRight2);
  ScrollReveal({ reset: true }).reveal('.name-input', slideLeft1);
  ScrollReveal({ reset: true }).reveal('.last-name-input', slideDown2);
  ScrollReveal({ reset: true }).reveal('.phone-input', slideUp2);
  ScrollReveal({ reset: true }).reveal('.mail-input', slideRight1);
  ScrollReveal({ reset: true }).reveal('.company-input', slideLeft2);
  ScrollReveal({ reset: true }).reveal('.message-input', slideDown1);
  ScrollReveal({ reset: true }).reveal('.contact-button', slideUp2);



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












