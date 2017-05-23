$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.dropdown-menu').slideDown(400,stop());
        },
        function(){
            $(this).children('.dropdown-menu').slideUp(400,stop());
        },
        function(){
            $('.dropdown-menu').stop(true,true);
        }
    );
});


$(document).ready(function(){
    if($('body').hasClass('my-body')){
        var targetPos = $('#home-navigation').offset().top;

        $(window).resize(function () {
            targetPos = $('#home-navigation').offset().top;
        });

        $(window).scroll(function () {
            var scrollPos = $(this).scrollTop();
            console.log('scrollPos');
            if(scrollPos > targetPos){
                $('#home-navigation').addClass('fixed-nav');

            } else{
                $('#home-navigation').removeClass('fixed-nav');
            }
        });
    }
});

$(document).ready(function(){
    $('#logo-image').animate({top:'+=30px'},800);
});

$(document).ready(function () {
    $('.login').mouseenter(function () {
        $('.drop').toggle();
    })
});


