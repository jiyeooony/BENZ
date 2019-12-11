$(document).ready(function(){
	var $win = $(window);
	var winHei=$win.height();	// window height

	// window resize
	$win.resize(function(){
		winHei=$win.height();
		$win.trigger("scroll");
	});
	
	//스크롤에 fadeIn 동작하는 컨텐츠
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

	//header 바로가기 메뉴
	$("#intro .eq_headline .eq_skiplist li a").on("click", function () {
		var $list = $("#intro .eq_headline .eq_skiplist");
		var idx = $(this).parent().index();

		$(this).closest(".eq_skiplist").toggleClass("active");

		if ($list.hasClass("active")) $list.stop().animate({height:360}, "fast").css({background: 'rgba(0,0,0,0.9)'});
		else $list.stop().animate({height:45}, "fast").css({color: '#fff', background: 'none'});

		if (idx) location.href = '#eq_article' + idx;

		return false;
	});
});