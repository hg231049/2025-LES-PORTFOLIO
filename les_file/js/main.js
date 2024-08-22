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
   $('#header').load('./les_file/layout/header.html');
   $('#main').load('./main.html');
   $('#footer').load('./les_file/layout/footer.html');


   /* 상단 고정 */
	$(window).scroll(showHeader);
	showHeader();

});