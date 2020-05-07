$(document).ready(function(){
    $('a[href^="#callback-form"]').on('click', function(e){
        e.preventDefault();
        var t = 1500;
        var d = $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top-20 }, t);
    });
});
