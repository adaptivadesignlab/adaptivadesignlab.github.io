jQuery(function($) { //Safety pants!
  // Sticky navbar
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) { // If user scrolls more than 10px from top
      $(".navbar").addClass("onscroll"); // Add opaque background class to navbar
    } else { // If user scrolls back up to the top 10px of window
      $(".navbar").removeClass("onscroll"); // remove class
    }
  });

  // Hanbaaga!
  $(".hanbaaga").click(function() {
    $(this).toggleClass("active-baaga");
    $(".nav").toggleClass("expanded");
    $(".navbar").toggleClass("nav-activated");
  });

  // Collapsible Guidelines Nav

  $(".guideline-nav-header").click(function() {
    $(this).toggleClass("collapse");
    $(".guidelines-list").toggleClass("collapse");
  })

  // Sticky Side Nav

  var sideNav = $(".guidelines-nav");
  backLink = $(".back-link");
  sticky = "sticky";
  hdr = $("header").height();
  siteWidth = $(".guideline-entry .content").width();
  sideNavWidth = siteWidth / 3;

  $(".guidelines-nav").css(
    'max-width', sideNavWidth
  );

  $(window).resize(function() {
    $(".guidelines-nav").css(
      'max-width', sideNavWidth
    );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > hdr - 80) {
      sideNav.addClass(sticky);
      backLink.addClass(sticky);
    } else {
      sideNav.removeClass(sticky);
      backLink.removeClass(sticky);
    }
  });
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
  // Responsive Video Embeds
  $("#youtube_iframe").removeAttr("width"); // Remove 'width' attr
  $("#youtube_iframe").removeAttr("height"); // Remove 'height' attr
});

$(document).ready(function() {
  $('.slider').on({
    mousedown: function(clicke) {
      origX = clicke.pageX + $('.slider').scrollLeft();
      $('.slider').on({
        mousemove: function(e) {
          curX = e.pageX + $('.slider').scrollLeft();
          var diff = (origX - curX);
          var newpos = $('.slider').scrollLeft() + diff;
          if (newpos > ($('.slider-container').width() - $('.slider').width())) {
            newpos = ($('.slider-container').width() - $('.slider').width());
          }
          if (newpos < 0) {
            newpos = 0;
          }
          $('.slider').scrollLeft(newpos);
        }
      });
    },
    mouseleave: function() {
      $('.slider').off('mousemove');
    },
    mouseup: function() {
      $('.slider').off('mousemove');
    },
    click: function() {
      $('.slider').off('mousemove');
    }
  });
});