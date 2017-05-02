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
});
