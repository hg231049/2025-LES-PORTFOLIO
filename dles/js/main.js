
/* 메인비주얼 애니메이션 */
setTimeout(function(){
	$('.visual-dimmed').addClass('show');
  }, 100);
setTimeout(function(){
	$('.main-visual .main-visual-title .visual-txt-ani').addClass('active');
  }, 2800);
  setTimeout(function(){
	$('.main-visual .main-visual-title .visual-txt-motion > img').addClass('rotate');
  }, 3200);
  
  setTimeout(function(){
	$('.main-visual .scroll-down').addClass('on');
  }, 4400);

/* 메인 애니메이션 */
function animateM($item){
	var scrollTop = $(window).scrollTop() + ($(window).height()/5*4);
	if (scrollTop > $item.offset().top) {
		$item.addClass("motion");
	} 
	else {
		$item.removeClass("motion");
	   }
}
function showDiv(){
	var mainDivEl = $(".main-wrap > div");
	for (var i = 0; i < mainDivEl.length; i++) {
		animateM( mainDivEl.eq(i) );
	}
}

/* about 배너 */  
var about = document.getElementById('aboutThumb');
function mouseover (){
	about.setAttribute("src","./dles/img/about-image-on.png");
}
function mouseleave (){
	about.setAttribute("src","./dles/img/about-image.png");
}        

/* etc */
let prdSwiper;
function initSwiper(bool, between, view) {
	if (typeof(prdSwiper) == 'object') prdSwiper.destroy();
	
	return prdSwiper = new Swiper('.etc-box .swiper-container', {
		spaceBetween: between,		
		slidesPerView: view,
		loop: bool,
		centeredSlides: bool,					
		grabCursor: true,
		autoHeight : true,
		scrollbar: {
			el: '.etc-box .swiper-scrollbar',
			hide: false,
			draggable: true,
		},
		navigation: {	
			nextEl: '.etc-box .swiper-button-next',
			prevEl: '.etc-box .swiper-button-prev',
		},
	});
}

function mainSizeListener() {
	setTimeout(function(){

	var prdSlideH = $('.etc-project-wrap').height();
		document.documentElement.style.setProperty('--etc-project-height', prdSlideH + 'px');
	}, 1000);

	if ( $(window).outerWidth() <= 1024) {
		initSwiper(true, 10, 1.3);
	} else {
		initSwiper(true, 0, 'auto');
	}
}

$(window).resize(function(){
	mainSizeListener();
});
$(document).ready(function(){
	
	$(window).scroll(showDiv);
	mainSizeListener();

   /* 메인 슬라이드 배너 */
	$(".main-visual").css('opacity','1');
	
	/* 흐르는 텍스트 */
    $('.flow-line-box').each(function() {
        for (var i = 0; i < 10; i++ ) {
            $(this).find('.flow-txt em').clone().appendTo($(this).find('.flow-inner'));
        }
    });

	$('.skill-box .skill').each(function() {
		skillOption = {
			animate:{
				duration: 3000, // 애니메이션 시간
				enabled: true
			},
			barColor:'#b53720',  // 바 색상
			scaleColor: false,
			lineWidth: 8,  // 선두께
			lineCap:'round',  //  선끝 모양
			size: 90  // 크기
		};
		$('.skill1').easyPieChart(skillOption); 
		$('.skill2').easyPieChart(skillOption); 
		$('.skill3').easyPieChart(skillOption);  
	});

	/* 메인프로젝트 모션 */ 
	$('.project-box').each(function() {
		$(this).children('.bn').each(function() {
			$(this).addClass('_transXR');
			$(this).addClass('ani10');
		});
		$(this).children('.project-desc-box').each(function() {
			$(this).addClass('_transXL');
			$(this).addClass('ani10');
		});
	});

	/* etc 팝업 */
	/*main-prd3 동영상 열기1 */
	$(".etc-project-wrap .etc-box .prdList > li .etc-slide .thumbnail").each(function(){
		var thumbSrc = $(this).children('.thumb-detail').find("img");
		$(this).click(function(e) {
			$('.dimmed, .thumb-wrap').show();
			$('body').css("overflow","hidden");
			$('.thumb-wrap').html(thumbSrc);
		});
		$('.dimmed').click(function(e) {
			e.preventDefault();
			$('.thumb-wrap').html('').hide();
			$(this).hide();
			$('body').css("overflow","");
		});
	});
	 /* 동영상 닫기 */
   
});

