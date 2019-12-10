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

// var node = document.querySelector('.Title_P');
// var text = new T(node);

// function random(min, max) {
//     return (Math.random() * (max - min)) + min;
// }

// text.chars.map(function(v, i){
//     TweenMax.from(v, 2.5, {
//         opacity: 0,
//         x: random(-500, 500),
//         y: random(-500, 500),
//         z: random(-500, 500),
//         scale: .1,
//         delay: i * .02,
//         yoyo: true
//     });
// });


$(document).ready(function() {
	var inputs = $(".Title_P").find($("label") );
	
	for(var i =0 ; i< inputs.length; i ++)
	{ 
	     var index = i +1;
		 var time = ((inputs.length)-i ) * 100;
		$(".Title_P label:nth-child("+index+")").css( "-animation", "anim 3s "+time+"ms " );
	}
})

var $win = $(window);
var $slide = $("#wrap .slide");
var liSize = parseInt($slide.children().css("width"));
/* 스크롤에 따라 애니메이션 효과 */
$win.on("scroll", function(){
    var scrollT = $wind.scrollTop();
    var topPos = $slide.offset().top;

    if (scrollT > topPos -500) $slide.addClass("on");
})