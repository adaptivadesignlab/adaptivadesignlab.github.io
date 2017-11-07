(function(){

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

})();
