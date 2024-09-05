/* Intro */
setTimeout(function(){
   $('.intro-txt-box').addClass('hide');
 }, 3300);
setTimeout(function(){
   $('.intro-logo').addClass('show');
 }, 4000);
 setTimeout(function(){
   $('.intro-wrap .box').addClass('on');
 }, 4800);
 setTimeout(function(){
   $('.intro-wrap .view-btn').show();
 }, 5500);

 var beforePosition = document.documentElement.scrollTop;

 /* 상단 고정 */
 function showHeader() {
    var headH = $("#header").height();
    if ($(window).scrollTop() > headH) {
       $("#header").addClass("fixed");
    } else {
       $("#header").removeClass("fixed");
    }
 }
 
 document.addEventListener('scroll', function() {
     var afterPosition = document.documentElement.scrollTop;
     if (afterPosition > 50) {
       if(beforePosition < afterPosition ){
         $("#header").addClass("change");
       } else {
        $("#header").removeClass("change");
       }
      } 
     beforePosition = afterPosition;
 });

 
$(document).ready(function(){
   /* intro */ 
   $(".intro-wrap").each(function(){
      $(this).addClass('on');
   });
   
    /* 상단 고정 */
	$(window).scroll(showHeader);
	showHeader();
   
});