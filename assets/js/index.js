/*console.log("alt: "+alt);
console.log("Index:"+Index);
console.log("IndexStart:"+IndexStart);
console.log("IndexEnd:"+IndexEnd);
console.log("IndexText:"+IndexText);*/
function showup(){
  var tagStart  = "!showup//",
      tagEnd    = "//!";
  console.log("--------");
  console.log("Showup Running.");
  $target = $("section.post-content");
  if($target.length > 0) {
    $images = $target.find("img");/*.attr("alt");*/
    if($images !== undefined || $images !== -1){
      $.each($images,function(index,value) {
        var alt     = $(this).attr("alt"),
            altReal = alt,
            Index   = alt.length,
            IndexStart  = alt.toLowerCase().indexOf(tagStart),
            IndexEnd    = alt.toLowerCase().indexOf(tagEnd);
        console.log(alt);
        if(Index > 0 && IndexStart !== -1){
          if(IndexEnd !== undefined || IndexEnd !== undefined){
            var IndexText  = alt.substr(IndexStart,IndexEnd);
                IndexText  = IndexText.substr(tagStart.length,IndexText.length),
                remove = alt.substr(IndexStart,IndexEnd+tagEnd.length);
            alt    = alt.replace(remove,'');
            /*compile IndexText to img*/
            $(this).wrap("<div class='showup'></div>");
            $(this).after("<p>"+IndexText+"</p>");
            console.log(" - Successfully Compiled showup code.");
            /*update alt data*/
            $(this).prop("alt", alt);
          }
          else{
            if(IndexStart !== undefined){
              console.log(" - Error: syntax fail, no start tag. Recovering what I can of the alt data.");
              remove = alt.substr(IndexStart,IndexEnd+tagEnd.length);
              alt    = alt.replace(remove,'');
              console.log("alt: "+alt);
            }
            else if(IndexEnd !== undefined){
              console.log(" - Error: syntax fail, no end tag. Recovering what I can of the alt data.");
            }
            else{
              // do nothing, no syntax to compile
            }
          }
        }
        });
      }
      console.log("--------");
    }
    else{
      console.log(" - no images detected, or no alt data to process.");
      console.log("--------");
    }
}
showup();
/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);
