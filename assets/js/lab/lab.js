---
---
jQuery(function($) { //Safety pants!

  // Smooth scroll, baby!
  {% include js/smooth-scroll.js %}
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

	$('.js-navTrigger').click(function() {

		$(this).toggleClass('is-clicked');
		$('.labNav').toggleClass('is-toggled');
		$('.labContent, .labTitle').toggleClass('is-toggled');
		$('html, body').toggleClass('is-locked');

	});

});
