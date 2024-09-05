
setTimeout(function(){
	$('.visual-dimmed').addClass('show');
  }, 100);
setTimeout(function(){
	$('.main-visual .main-visual-title .visual-txt-motion').addClass('active');
  }, 2800);
  setTimeout(function(){
	$('.main-visual .main-visual-title .visual-txt-motion > img').addClass('rotate');
  }, 3200);
  setTimeout(function(){
	$('#header').addClass('on');
  }, 3600);
  setTimeout(function(){
	$('.main-visual .scroll-down').addClass('on');
  }, 4400);

/* 메인모션 */
function animateE( target , duraV , delayV ){			
	target.each(function(i){	
		target.eq(i).delay(i*delayV).animate({ 'top':'0', opacity:1 } , { duration : duraV } );
	});
	
}
/* 메인 애니메이션 */
function animateM($item){
	var scrollTop = $(window).scrollTop() + $(window).height() / 11 * 10;
	if (scrollTop > $item.offset().top) {
		$item.addClass('motion');
		animateE( $item.find('.main-motion') , 600 , 200 );
		
	}
}
function showDiv(){
	var mainDivEl = $('.main-wrap > div');
	for (var i = 0; i < mainDivEl.length; i++) {
		animateM( mainDivEl.eq(i) );
	}
}

/* about 이미지 미우스오버 */  
var about = document.getElementById('about');
function mouseover (){
	about.setAttribute("src","./dles/img/about-image-on.png");
}
function mouseleave (){
	about.setAttribute("src","./dles/img/about-image.png");
}        

$(document).ready(function(){
	
   /* 메인 슬라이드 배너 */
	$(".main-visual").css('opacity','1');
	
	/* 흐르는 텍스트 */
    $('.flow-line-box').each(function() {
        for (var i = 0; i < 10; i++ ) {
            $(this).find('.flow-txt em').clone().appendTo($(this).find('.flow-inner'));
        }
    });

});