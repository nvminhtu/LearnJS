$(function() {
  $('.items').each(function() {
    var maxHeight = 0;
    $('p.button', this).each(function(){
      if($(this).height()>maxHeight)
        maxHeight= $(this).height();
    });
    $('p.button', this).height(maxHeight);
  });
});