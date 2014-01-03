
/* Menu Slide JS */
$(document).ready(function(){
$(".menu-btn").on('click',function(e){
e.preventDefault();
//Check this block is open or not..
if(!$(this).prev().hasClass("open")) {
$(".header").slideDown(400);
$(".header").addClass("open");
$(this).find("i").removeClass().addClass("fa fa-chevron-up");
}
else if($(this).prev().hasClass("open")) {
$(".header").removeClass("open");
$(".header").slideUp(400);
$(this).find("i").removeClass().addClass("fa fa-chevron-down");
}
});
});
/* PrettyPhoto for Recent Post */
/* ----------------------- */
$(".p-item-link").prettyPhoto({
overlay_gallery: false, social_tools: false
});
/* *************************************** */
/* Scroll to Top */
$(".totop").hide();
$(function(){
$(window).scroll(function(){
if ($(this).scrollTop()>300)
{
$('.totop').slideDown();
}
else
{
$('.totop').slideUp();
}
});
