$('.sub-menu').hide();

$('li').hover(function() {
    $(this).find('.sub-menu').show();
}, function() {
    $(this).find('.sub-menu').hide();
});