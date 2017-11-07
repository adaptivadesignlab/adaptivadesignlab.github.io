(function(){

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) { // If user scrolls more than 10px from top
      $('.navbar').addClass('onscroll'); // Add opaque background class to navbar
    } else { // If user scrolls back up to the top 10px of window
      $('.navbar').removeClass('onscroll'); // remove class
    }
  });

  // Hanbaaga!
  $('.hanbaaga').click(function() {
    $(this).toggleClass('active-baaga');
    $('.nav').toggleClass('expanded');
    $('.navbar').toggleClass('nav-activated');
  });

  // Collapsible Guidelines Nav

  $('.guideline-nav-header').click(function() {
    $(this).toggleClass('collapse');
    $('.guidelines-list').toggleClass('collapse');
  });

})();
