jQuery(function($) { //Safety pants!
  // Sticky navbar on scroll!
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var hdr = $(".header").height(); // hdr is a variable for the height of the header
    var pad = $(".navigation").height() + (16 * 1.618);
    if (scroll >= hdr) { // If user scrolls past the header
      $(".navigation").addClass("is-sticky"); // Add sticky class to navigation
      $(".js-page-content").css("padding-top", pad).addClass("is-padded"); // Adds padding to avoid the scroll jump
    } else { // If user scrolls back up to the header
      $(".navigation").removeClass("is-sticky"); // remove sticky class
      $(".js-page-content").css("padding-top", "").removeClass("is-padded");
    }
  });
  // Padding for mobile nav
  // media query event handler
  if (matchMedia) {
    var mq = window.matchMedia("(max-width: 767px)");
    var nav = $(".navigation").height(); // get height of nav
    mq.addListener(WidthChange);
    WidthChange(mq);
  }
  // media query change
  function WidthChange(mq) {
    if (mq.matches) { // if width < 768px
      $("body").css("padding-bottom", nav) // add padding to body to make up for fixed nav
    } else {
      $("body").css("padding-bottom", ""); // otherwise, no padding, baby!
    }
  }
  // Smooth scroll, baby!
  $('a[href*="#"]') // Select all links with hashes
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
    // Collapsible sections on info page
    // Schedule
    $(".js-schedule").click(function(){
      $(this).toggleClass("is-expanded");
      $(".js-schedule-target").slideToggle();
    });
    $(".js-rules").click(function(){
      $(this).toggleClass("is-expanded");
      $(".js-rules-target").slideToggle();
    });
    $(".js-adaptiva").click(function(){
      $(this).toggleClass("is-expanded");
      $(".js-adaptiva-target").slideToggle();
    });
    $(".js-resources").click(function(){
      $(this).toggleClass("is-expanded");
      $(".js-resources-target").slideToggle();
    });
});
