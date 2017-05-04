jQuery(function($) { //Safety pants!
    // Sticky navbar on scroll!
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var hdr = $(".header").height(); // hdr is a variable for the height of the header
        var pad = $(".navigation").height() + (16 * 1.618);
        if (scroll >= hdr) { // If user scrolls past the header
            $(".navigation").addClass("is-sticky"); // Add sticky class to navigation
            $(".prizes").css("padding-top", pad); // Adds padding to avoid the scroll jump
        } else { // If user scrolls back up to the header
            $(".navigation").removeClass("is-sticky"); // remove sticky class
            $(".prizes").css("padding-top", "");
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
});
