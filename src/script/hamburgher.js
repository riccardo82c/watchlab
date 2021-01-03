/* click hamburgher icon event */
$(".hamburgher__icon").on("click", function () {
	$(this).toggleClass('change');
	$('.menu_hide').slideToggle(600);
});

/* mouseleave dropdown event */
$('.menu_hide').mouseleave(function () {
	$(".hamburgher__icon").removeClass('change');
	$(this).slideUp(600);
});