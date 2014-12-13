(function($){ 
  $.fn.scrollUp = function(){
    this.click(function(event){
      $("html, body").animate({scrollTop: 0}, 500);
      event.preventDefault();     
    });

    this.css({"bottom":"20px","right":"20px","position":"fixed"});

    return this; // Let's not break the jQuery chain
  }
})(jQuery)