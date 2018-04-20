$(function(){
	// 导航列表
	$('.xxk').mouseenter(function(){
		$('.xxk').css('height','27px');

		$('.xxk').find('.xqk').css('display','none');
		$(this).css('height','83px');
		$(this).find('.xqk').css('display','block');
		console.log($(this).children())})
	$('.xxk1').mouseenter(function(){
		$('.xxk1').css('height','27px');

		$('.xxk1').find('.xqk1').css('display','none');
		$(this).css('height','83px');
		$(this).find('.xqk1').css('display','block');
		console.log($(this).children())})
	$('.xxk2').mouseenter(function(){
		$('.xxk2').css('height','27px');

		$('.xxk2').find('.xqk2').css('display','none');
		$(this).css('height','83px');
		$(this).find('.xqk2').css('display','block');
		console.log($(this).children())})
})


// ------------------------------------------------------------
///////////////////////////////////////////////
// /---------------------------------------- //
//登陆界面的点击展示和隐藏                               //
///////////////////////////////////////////////
$('#cha').click(function(){
	$('#deng').hide();
})

// 微信
$('#btn').click(function(){
	$('#deng').css('display','block');
	// console.log(111)

})
$('#weixin').click(function(){
	$('#wxjiemian').show();
	// console.log(111);

})

$('#qq').click(function(){
	$('#qqjiemian').show();
})


$('#q').click(function(){
	$('#qqjiemian').hide();
})
$('#q1').click(function(){
	$('#qqjiemian1').hide();
})




$('#X').click(function(){
	$('#wxjiemian').hide();
	console.log(222);
})



// qq

$('#erweima').mouseenter(function(){
	$(this).css('left','173px').show(500,function(){
		$('#shouji').fadeIn(500,function(){
			$('#shouji').css('display','block');
		})
	});
	

})
$('#erweima').mouseleave(function(){
	$('#erweima').css('left','240px').show(1000,function(){
		$('#shouji').fadeOut();
	});
	
})



// ----------------------------------------------------
// 帐号密码登录
$('#zhang').click(function(){
	$('#qqjiemian').hide();
	$('#qqjiemian1').show();
})
$('#kuai').click(function(){
	$('#qqjiemian1').hide();
	$('#qqjiemian').show();
	
})
// ------------------------------------
// ------------------------------------
// ------------------------------------


// 用户名聚焦改变颜色
$('#username,#password').focus(function(){
	$(this).next().css({color:'#ddd'});
	// 失去焦点的时候value的样式
}).blur(function(){
	if($(this).val()){
		$(this).next().css({'display':'none'});
	}else if($(this).val() == ''){
		$(this).next().css({'display':'block'});
	}
	$(this).next().css({color:'#aaa'});
}).keydown(function() {
	$(this).css('color','#666');
	$(this).next().css({'display':'none'});
});
	






