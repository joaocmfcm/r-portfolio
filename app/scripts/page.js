$(window).scroll(function(){
    if($(window).scrollTop() > 1){
        $(".navbar").addClass('navbar-scrolled');
    } else{
        $(".navbar").removeClass('navbar-scrolled');
    }
});