(function($){
  $.fn.scrollUp = function(){
    console.log("scrollUp plugin has called by the first customer!");

    this.click(function(event){
      $("html, body").animate({scrollTop: 0}, 2000);
      event.preventDefault();     
    });
    

    return this; // Let's not break the jQuery chain
  }
})(jQuery)