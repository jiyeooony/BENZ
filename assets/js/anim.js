$(document).ready(function (){
    //$('클래스명').delay(딜레이시간).animate({opacity:"투명도"}, 변화시간);
    $('.T').delay(1000).animate({opacity:"1"}, 2000);
    $('.H').delay(2000).animate({opacity:"1"}, 2500);
    $('.P').delay(3000).animate({opacity:"1"}, 1000);
    $('.E').delay(2000).animate({opacity:"1"}, 2500);
});

$(document).ready(function() {
    var current = 0;   //시작되는 이미지의 번호
    var maxNum = 8;

    var timer = setInterval(function () {
        $('.benzName').eq(current).animate({opacity: 1});
        current++;    //1, 2,3,4......8

        if (current == maxNum) clearInterval(timer);
        console.log(current);
      }, 5000);
});

$(document).ready(function() {
    var current = 0;   //시작되는 이미지의 번호
    var maxNum = 8;

    var timer = setInterval(function () {
        $('.OA').eq(current).animate({opacity: 1});
        current++;    //1, 2,3,4......8

        if (current == maxNum) clearInterval(timer);
        console.log(current);
      }, 5000);
});
$(document).ready(function() {
    var current = 0;   //시작되는 이미지의 번호
    var maxNum = 8;

    var timer = setInterval(function () {
        $('.YC').eq(current).animate({opacity: 1});
        current++;    //1, 2,3,4......8

        if (current == maxNum) clearInterval(timer);
        console.log(current);
      }, 5000);
});
$(document).ready(function() {
    var current = 0;   //시작되는 이미지의 번호
    var maxNum = 8;

    var timer = setInterval(function () {
        $('.container').eq(current).animate({opacity: 1});
        current++;    //1, 2,3,4......8

        if (current == maxNum) clearInterval(timer);
        console.log(current);
      }, 3000);
});


$(document).ready(function () {
    var $win = $(window);
	var winHei=$win.height();	// window height

	// window resize
	$win.resize(function(){
		winHei=$win.height();
		$win.trigger("scroll");
    });
    
    var tgHei;		//outerHeight
	var tgTop;	//offset().top
	var start;
    var end;
    
    //fadeInUp 효과
    //var scrollY = 0; //윈도우 상단좌표값
    //var timer = 0; //한번만 실행시키기 위한 변수

    $(window).on("scroll", function () {
        //clearTimeout(timer);

        //timer = setTimeout(function () {
            var scrollY=$(this).scrollTop();
            console.log(scrollY);

            $(".fade").each(function () {
                tgHei=$(this).outerHeight();
                tgTop=$(this).offset().top;
    
                start = tgTop+tgHei*0.5-winHei;
                end = tgTop+tgHei*0.6;
    
                if (start < scrollY && end > scrollY) 
                    $(this).addClass('on');

                else
                    $(this).removeClass('on');
            });
        //}, 100);
    });
});
$(document).ready(function(){
	//header 바로가기 메뉴
	$("#intro .amg_headline .amg_skiplist li a").on("click", function () {
		var $list = $("#intro .amg_headline .amg_skiplist");
		var idx = $(this).parent().index();

		$(this).closest(".amg_skiplist").toggleClass("active");

		if ($list.hasClass("active")) $list.stop().animate({height:360}, "fast").css({background: 'rgba(0,0,0,0.9)'});
		else $list.stop().animate({height:45}, "fast").css({color: '#fff', background: 'none'});

		if (idx) location.href = '#amg_article' + idx;

		return false;
	});

});
$(document).on('ready', function () {
    setTimeout(function () {
        $('.letter').addClass('loaded');
        $('.reg-text').addClass('loaded');
    }, 1000);
});

