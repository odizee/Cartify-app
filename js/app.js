$(document).ready(function(){
    $(".nav-search").hide();
$('.search').on("click", function(){
            
        $(".nav-search").toggle(300);
             
    });
});        
  
$(function(){
    
    function RippleStyle(width, height, posX, posY){
        
        this.width = ( width <= height ) ? height : width;
        this.height = ( width <= height ) ? height : width;
        this.top = posY - (this.height * .5);
        this.left = posX - (this.weight * .5);
    }
    
   $('.head-btn').click(function(e){
      var rippleEl = $('<span class="head-ripple"></span>').append(this);
       
       var pos = $(this).offset();
       
       var width = $(this).outerWidth();
       var height = $(this).outerHeight();
       
       var posX = e.pageX - pos.left;
       var posY = e.pageY - pos.top;
       
       var rippleStyle = new RippleStyle(width, height, posX, posY);
       
       rippleEl.css(rippleStyle);
       
   });
    
    $('.head-btn').on('animationend webkitAnimation oanimationend MSAnimationEnd', '.head-ripple', function(){
        $(this).remove();
    });
    
});