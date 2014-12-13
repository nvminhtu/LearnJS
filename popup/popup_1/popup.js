/* popup plugin 
http://www.paulund.co.uk/how-to-create-a-simple-modal-box-with-jquery
*/
(function($){
  //declare name of a plugin
  $.fn.sand_modal_popup = function(settings){
    //set default parameters
    var options = $.extend({
        height: "250",
        width: "500",
        title:"jQuery Modal box demo",
        description: 'Example content of modal box',
        top: '20%',
        left: '30%',
    },settings);

    return this.click(function(e){
      //do event click here
      add_block_page();
      add_pop_up();
      add_styles();
      $('.sand_popup_box').fadeIn();
    });

    function add_block_page(){
      var block_page = $('<div class="sand_block_page"></div>');
      $(block_page).appendTo('body');
    }
    function add_styles(){
      $('.sand_modal_box').css({ 
        'position':'absolute', 
        'left':options.left,
        'top':options.top,
        'display':'none',
        'height': options.height + 'px',
        'width': options.width + 'px',
        'border':'1px solid #fff',
        'box-shadow': '0px 2px 7px #292929',
        '-moz-box-shadow': '0px 2px 7px #292929',
        '-webkit-box-shadow': '0px 2px 7px #292929',
        'border-radius':'10px',
        '-moz-border-radius':'10px',
        '-webkit-border-radius':'10px',
        'background': '#f2f2f2', 
        'z-index':'50',
      });
      $('.sand_modal_close').css({
        'position':'relative',
        'top':'-25px',
        'left':'20px',
        'float':'right',
        'display':'block',
        'height':'50px',
        'width':'50px',
        'background': 'url(images/close.png) no-repeat',
      });
       /*Block page overlay*/
      var pageHeight = $(document).height();
      var pageWidth = $(window).width();

      $('.sand_block_page').css({
        'position':'absolute',
        'top':'0',
        'left':'0',
        'background-color':'rgba(0,0,0,0.6)',
        'height':pageHeight,
        'width':pageWidth,
        'z-index':'10'
      });
      $('.sand_inner_modal_box').css({
        'background-color':'#fff',
        'height':(options.height - 50) + 'px',
        'width':(options.width - 50) + 'px',
        'padding':'10px',
        'margin':'15px',
        'border-radius':'10px',
        '-moz-border-radius':'10px',
        '-webkit-border-radius':'10px'
      });
    }
    function add_pop_up(){
      var pop_up = $('<div class="sand_modal_box"><a href="#" class="sand_modal_close"></a><div class="sand_inner_modal_box"><h2>' + options.title + '</h2><p>' + options.description + '</p></div></div>');
      $(pop_up).appendTo('.sand_block_page');
      $('.sand_modal_close').click(function() {
        $(this).parent().fadeOut().remove();
      });
    }
  }
})(jQuery);