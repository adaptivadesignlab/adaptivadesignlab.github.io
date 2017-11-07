---
---
jQuery(function($) { //Safety pants!
  // Sticky navbar
  {% include js/nav.js %}

  // Sticky Side Nav

  {% include js/sticky-sidenav.js %}

  // Smooth scroll, baby!

  {% include js/smooth-scroll.js %}

  // Responsive Video Embeds
  $('#youtube_iframe').removeAttr('width'); // Remove 'width' attr
  $('#youtube_iframe').removeAttr('height'); // Remove 'height' attr

  // Collapsible Section

  (function(){ // collapsible pants

    var title = '.collapsible-title',
        section = '.collapsible-section',
        content = '.collapsible-section--content';

    $(title).click(function(){

      $(section).find(content)
        .toggleClass('is-expanded')
        .slideToggle();

      $(this).toggleClass('is-expanded');

    });

  })();

  // Drag Slider

  {% include js/dragslider.js %}

});
