$(document).ready(function () {

    $("#accordian li h3").click(function(){
        var $parent = $(this).parent();
        if($parent.hasClass('active')) return;
        $("#accordian ul .row").not().slideUp();
        $(this).next().slideDown(function(){
            $parent.addClass('active').siblings().removeClass('active');
        });
    });
});


$(document).ready(function() {
    var navbar = $(".desktop-nav");
    var sticky = navbar.offset().top;

    $(window).scroll(function() {
        if (window.pageYOffset >= sticky) {
            navbar.addClass("sticky");
        } else {
            navbar.removeClass("sticky");
        }
    });
});
