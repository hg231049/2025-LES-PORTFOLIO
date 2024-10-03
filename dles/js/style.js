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

    /* html 파일 로드 */  
    $('#header').load('./dles/layout/header.html');
    $('#contents').load('./dles/pages/main.html');
    
});