$(document).ready(function () {
	function gnbOn() {
		var $header = $('#header');
		var $gnb = $('#gnb > ul');

		//1) depth2 ul 숨기기
		$gnb.find('li ul').hide();

		//2) 현재페이지 활성화를 위해 li.on 넣기위해 변수 선언
		var dep1 = $('body').data('dep-one') - 1;
		var dep2 = $('body').data('dep-two') - 1;
		console.log("depth1? " + dep1 + " , depth2? " + dep2);

		//3) depth1 a - mouseenter focus
		$gnb.find('> li > a').on('mouseenter focus', function () {
			//초기화
			$gnb.find('> li.on').removeClass('on').children('ul').hide();
			$header.removeClass('active');

			//활성화
			$(this).parent().has('ul').closest($header).addClass('active');
			$(this).next().show().parent().addClass('on');
		});

		//4) $gnb에서 마우스가 벗어나면 mouseleave => 활성화 상태를 초기화면으로 되돌림
		$gnb.on('mouseleave', function () {
			//마우스가 떠나기전 마지막 활성화상태를 초기화
			$header.removeClass('active');
			$gnb.find('> li.on').removeClass('on').children('ul').hide();
			//body id="nav_3_1"을 통해 선언한 dep1과 dep2 변수에 맞는 li.on 추가
			if (dep1 >= 0) $gnb.children().eq(dep1).addClass('on').find('ul li').eq(dep2).addClass('on');
		});

		//5) $gnb에서 가장 첫번째와 마지막 a에서 blur 된 경우 - 초기화면으로 되돌리기(조건을 만족하는 경우만)
		$gnb.find('a:first, a:last').on('blur', function () {
			setTimeout(function () {
				//#gnb안에 있는 a태그가 포커스를 가지지 않는 경우만
				if (!$gnb.find('a').is(':focus')) $gnb.trigger('mouseleave');
			}, 10);
		});

		//6) 페이지 로딩후 보여질 화면 => li.on 넣어서 스타일이 적용된 화면
		if (dep1 >= 0) $gnb.trigger('mouseleave');
	}
	gnbOn();

	var $win = $(window);
	var winHei = $win.height();
	$win.on("scroll", function () {
		var scrollT = $(this).scrollTop();
		var footOffTop = $("#footer").offset().top; //footer와 버튼 사이의 최소 간격

		var gap = winHei + scrollT - footOffTop;
		console.log(gap);

		if (gap > 0) $(".btn_top").css("marginBottom", gap);
		else $(".btn_top").css("marginBottom", 0);
	});

	//top 이동 버튼
	$(".btn_top").on("click", function () {
		$("html, body").stop().animate({
			scrollTop: 0
		});
		return false;
	});

	// window resize
	$win.resize(function(){
		winHei=$win.height();
		$win.trigger("scroll");
	});
	
	/* //스크롤에 fadeIn 동작하는 컨텐츠 */
	var tgHei;		//outerHeight
	var tgTop;	//offset().top
	var start;
	var end;

	$win.on("scroll",function(){
		var $fade=$(".fade");
		var scrollT=$(this).scrollTop();

		$fade.each(function  () {
			tgHei=$(this).outerHeight();
			tgTop=$(this).offset().top;

			start = tgTop+tgHei*0.5-winHei;
			end = tgTop+tgHei*0.6;

			if (start < scrollT && end > scrollT) $(this).addClass("on");
			else $(this).removeClass("on");
		});
	});

	//mouseover
	var $idxLinkEle = $("#cnt5 .idx_list li");

	$idxLinkEle.on({
		focusin : function () {
			$(this).addClass("img_on");
		},
		focusout : function () {
			$(this).removeClass("img_on");
		}	
	});
});