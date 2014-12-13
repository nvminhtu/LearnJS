/**
 * jQuery LinkColor Plugin 1.0
 *
 * http://www.sandthemes.com/
 *
 * Copyright (c) 2014 
 * Coder: Tu Nguyen
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * than khao code o:
 * http://www.9lessons.info/2011/10/how-to-create-jquery-plugin.html
 * options: http://blog.teamtreehouse.com/writing-your-own-jquery-plugins
 */

(function($){
  $.fn.LinkColors = function(options){
    //Link background colors 
    var colors = new Array('4AC7ED', 'FDC015', '9F78EC', 'F25C33','78D6D0','ACD114');
    //set options cho jquery plugin
    var settings = $.extend({
      background: '4AC7ED'
    },options);
    //return tra ve doi tuong this
    return this.each(function(i,obj){
      $this = $(this);
      $anchors = $(obj).find("a").get();
      $.each($anchors, function(j,ele){
        var randColor = Math.floor ( Math.random() * colors.length ); 
        $(ele).css({
          'background-color':'#'+ settings.background,
          'text-decoration':'none',
          'color':'#333333',
          'padding':'0px 5px 0px 5px'
        });
      });
    });
  };
})(jQuery);