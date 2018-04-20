

// 手风琴
	

	$('#feng>li>img').mouseenter(function(){
		// console.log($('#feng>li>img'))
		$('#feng>li').removeClass('aeli')
		$(this).css('z-index','1')

		$('#feng>li').removeClass('active');
		$('#feng>li>span').removeClass('active');
		

		$(this).parent('li').addClass('active');
		$(this).parent('li').children('span').addClass('active');
		$(this).parent('li').children('span').css('width','224px');

	});

// 选项卡

	$('#lie>span').mouseenter(function(){
		$('#lie>span').removeClass('biao_active');
		$(this).addClass('biao_active');
	})


	$('#kaxuan>span>p>span>i').click(function(){
		$('#kaxuan>span>p>span>i').removeClass('dian');
		// console.log($('#kaxuan>span>p'));
		$(this).addClass('dian');
	})

	$('#lie>span:eq(0)').mouseenter(function(){
		// console.log($('#kt'))
		// $('#ting>span').removeClass('active_li');
		$('#ting>span').css('z-index','-1');
		// console.log(1111)
		// $('#kt').addClass('active_li');
		$('#kt').css('z-index','999');

	});


	$('#lie>span:eq(1)').mouseenter(function(){
		// console.log($('#kt1'))
		$('#ting>span').css('z-index','-1');
		// console.log(1111)
		// $('#kt').addClass('active_li');
		$('#kt1').css('z-index','999');
		// $('#kt1').css('background','red');

	});

	$('#lie>span:eq(2)').mouseenter(function(){
		// console.log($('#kt2'))
		$('#ting>span').css('z-index','-1');
		// console.log(1111)
		// $('#kt').addClass('active_li');
		$('#kt2').css('z-index','999');
		// $('#kt2').css('background','blue');
	});







