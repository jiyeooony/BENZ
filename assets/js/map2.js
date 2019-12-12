$(document).ready(function () {
	// map Btn1
	var $map = $("#map");
	var $addListLi = $map.find(".addList > li");
	var $mapBtn1Li = $map.find(".mapBtn1 li");
	var nowNum1 = 0; //현재보여지는 .mapBtn2 > li의 인덱스 번호, 문서로딩시 최초 한번은 0으로 지정
	var nextNum1; //클릭한 .mapBtn2 > li의 인덱스 번호

	$addListLi.eq(0).addClass("on");
	$mapBtn1Li.eq(1).addClass("on");

	//1).mapBtn2 li 를 클릭하는 경우
	$mapBtn1Li.children().on("click", function () {
		nextNum1 = $(this).parent().index();
		console.log(nextNum1);

		// 클릭 중인 버튼은 클릭해도 반응 없음.(중복해서 같은 인덱스 버튼을 클릭하면 return 해서 함수 빠져나감.)
		if (nowNum1 == nextNu1) return false;
		
		// 클릭한 버튼 on적용
		$(this).parent().addClass("on").siblings().removeClass("on");

		// .mapBtn2 li 제어
		$addListLi.eq(nowNum1).removeClass("on");
		$addListLi.eq(nextNum1).addClass("on");

		nowNum1 = nextNum1; //nowNum값을 0으로 고정시키지 말고 nextNum에 담긴 값으로 교체해 준다

		return false;
	});

	// map Btn2
	var $map = $("#map");
	var $addListLi = $map.find(".addList > li");
	var $mapBtn2Li = $map.find(".mapBtn2 li");
	var nowNum = 0; //현재보여지는 .mapBtn2 > li의 인덱스 번호, 문서로딩시 최초 한번은 0으로 지정
	var nextNum; //클릭한 .mapBtn2 > li의 인덱스 번호

	$addListLi.eq(0).addClass("on");
	$mapBtn2Li.eq(0).addClass("on");

	//1).mapBtn2 li 를 클릭하는 경우
	$mapBtn2Li.children().on("click", function () {
		nextNum = $(this).parent().index();
		console.log(nextNum);

		// 클릭 중인 버튼은 클릭해도 반응 없음.(중복해서 같은 인덱스 버튼을 클릭하면 return 해서 함수 빠져나감.)
		if (nowNum == nextNum) return false;
		
		// 클릭한 버튼 on적용
		$(this).parent().addClass("on").siblings().removeClass("on");

		// .mapBtn2 li 제어
		$addListLi.eq(nowNum).removeClass("on");
		$addListLi.eq(nextNum).addClass("on");

		nowNum = nextNum; //nowNum값을 0으로 고정시키지 말고 nextNum에 담긴 값으로 교체해 준다

		return false;
	});


	// map Btn3
	var $addList_detail = $map.find(".addList_detail > li");
	var $mapBtn3Li = $map.find(".mapBtn3 li");
	$addList_detail.eq(0).addClass("on");
	$mapBtn3Li.eq(0).addClass("on");
	var nowNum_detail = 0; //현재보여지는 .mapBtn3 > li의 인덱스 번호, 문서로딩시 최초 한번은 0으로 지정
	var nextNum_detail; //클릭한 .mapBtn3 > li의 인덱스 번호
		//1).mapBtn3 li 를 클릭하는 경우
		$mapBtn3Li.children().on("click", function () {
			nextNum_detail = $(this).parent().index();
			console.log(nextNum_detail);
	
			// 클릭 중인 버튼은 클릭해도 반응 없음
			if (nowNum_detail == nextNum_detail) return false;

			// 클릭한 버튼 on적용
			$(this).parent().addClass("on").siblings().removeClass("on");
			
			// .mapBtn3 li 제어
			$addList_detail.eq(nowNum_detail).removeClass("on");
			$addList_detail.eq(nextNum_detail).addClass("on");
	
			nowNum_detail = nextNum_detail; //nowNum값을 0으로 고정시키지 말고 nextNum에 담긴 값으로 교체해 준다
	
			return false;
		});
});