$(document).ready(function () {
// =============== start scroll top button ================
    var scroll_btn = $('#scroll-top') ,
        root       = $('html,body');

    $(window).scroll(function () {
        if($(this).scrollTop() > 100 ){
            scroll_btn.fadeIn();
        }else{
            scroll_btn.fadeOut();
        }
    });
    scroll_btn.on('click' , function () {
        root.animate ({
            scrollTop:0
        });
    });
    // ==================== End scroll top button =================
    // ==================== start home  =================
    // @@@@@@@@ slider @@@@@@@@@@
    $(document).ready(function(){
        
        $('.testmonial-slider').slick({
          autoplay:true,
          adaptiveHeight:true,
          autoplaySpeed:4000,
       
        });
      });
    // ==================== End home =================
    // ==================== sponser home  =================
    $(document).on("load",function(){
    });
    $(window).on('load', function(){
        $(".slider-main-content").animate({
            right:'10%',
            opcity:'1'
        },"slow");

    });
    

    // ==================== End sponser =================
    // ==================== start home  =================
    var mixer = mixitup('.gallary-content');
    // ==================== End home =================

}); // dont write out of it 