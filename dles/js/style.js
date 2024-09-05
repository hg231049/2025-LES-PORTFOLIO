<<<<<<< HEAD
$(document).ready(function(){

   $('#header').load('/dles/layout/header.html');
   $('#footer').load('/dles/layout/footer.html');
   
=======
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

$(document).ready(function(){
   /* intro */ 
   $(".intro-wrap").each(function(){
      $(this).addClass('on');
   });
   
   $('#header').load('/dles/layout/header.html');
   $('#main').load('/main.html');
   $('#footer').load('/dles/layout/footer.html');
   
>>>>>>> c05bf19c5e934ecfb98ecf8269182d1a8a99ee24
});