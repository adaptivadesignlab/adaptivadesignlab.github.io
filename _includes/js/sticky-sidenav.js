(function(){

  var sideNav = $('.guidelines-nav'),
  backLink = $('.back-link'),
  sticky = 'sticky',
  hdr = $('header').height(),
  siteWidth = $('.guideline-entry .content').width(),
  sideNavWidth = siteWidth / 3;

  $('.guidelines-nav').css(
    'max-width', sideNavWidth
  );

  $(window).resize(function() {
    $('.guidelines-nav').css(
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

})();
