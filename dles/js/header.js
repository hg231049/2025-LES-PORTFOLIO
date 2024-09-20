 
  var beforePosition = document.documentElement.scrollTop;
  
  /* 상단 고정 */
  function showHeader() {
     var headH = $("#header").height();
     if ($(window).scrollTop() > headH) {
        $("#header").addClass("fixed");
        $('#header').removeClass('on');
     } else {
        $("#header").removeClass("fixed");
        setTimeout(function(){
          $('#header').addClass('on');
          }, 3600);
     }
  };
  
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
    /* 상단 고정 */
    $(window).scroll(showHeader);
    showHeader();

    /* 상단 카테고리 */
    $('#header .gnb > li').each(function(){
        $(this).mouseenter(function(){
            $(this).addClass('on');
        }).mouseleave(function(){
            $(this).removeClass('on');
        });
    });
});