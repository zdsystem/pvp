

// var run;

var index = 0;
run = setInterval(function(){

	time();
},3000)


time();
function time(){
	$('#lun>ul>li').eq(index).fadeOut(300);
	index++;
	if(index == 3){
		index=0;
	}
	// console.log($('#lun>ul>li:eq('+ index +')'))
	$('#lun>ul>li:eq('+ index +')').fadeIn(300);
}





//表单验证
var unameBloo = false;
var passBloo = false;
var numBloo=false;
var  yanzhengBloo = false;

//表单验证

$('.username').focus(function(){
	unameBloo = false;
	$(this).removeClass('activecol');
		$(this).next().hide();
		$(this).parent().next().hide();
	$('.username').blur(function(){
	var str = $(this).val().trim();
	if(str== ''){
		console.log(23545)
		$(this).parent().next().show();
		$(this).addClass('activecol');
		return;

	}else{
		$(this).next().show();
		unameBloo = true;


	}
	})


})



//密码验证  样式
$('.dingweib input').keydown(function(){
	$(this).next().show();

	$('.dingweib .tu').mousedown(function(){
		
		$('.dingweib .tu img').eq(0).removeClass('activeblock').next().addClass('activeblock')
		$(this).prev().attr('type','text');
	}).mouseup(function(){
		$('.dingweib .tu img').eq(1).removeClass('activeblock').prev().addClass('activeblock')
		
		$(this).prev().attr('type','password');

	})


})


//密码样式
var first = $('.pass  span').eq(0);
var two = $('.pass  span').eq(1);
var three = $('.pass  span').eq(2);
var string='';
var yi=true;
var er = false;
var san = false;

// console.log(first , two , three)
//密码验证
$('.dingweib input').focus(function(){
	//样式初始化
	first.attr('class' , '');
	two.attr('class' , '');
	three.attr('class' , '');
	$('.pass').css('display' , 'none');
	$('.pass-kong').css('display' , 'none');
	$('.pass-err').css('display' , 'none');




	passBool = false;

	$(this).parent().siblings('.pass').show();
	//输入时
	$(this).keyup(function(){
		var str = $(this).val();

		if(str.indexOf(' ')!= -1){
			first.addClass('j1');
			yi = false;
			
			
		
		}else{
			first.removeClass('j1')
			yi = true;

			
		

		}



		// 长度验证
		var reg = /^[\S\s]{8,16}$/
	
		if(reg.test(str)){
			two.addClass('dui');
			er= true;

			

		}else{
			two.removeClass('dui');
			er=false;


		}

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------


		//种类验证
		var regn = /[0-9]/;
		var regf = /[a-z]/i;
			// console.log(regn.test(str),regf.test(str))
		if(regn.test(str) &&　regf.test(str)){
			three.addClass('dui');
			san = true;
		}else{
			three.removeClass('dui');
			san = false;

		}

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

		//失焦事件
		$(this).blur(function(){
		$('.pass').css('display','none');
			
		
			if($(this).val() == ''){
				$('.pass-err').css('display' , 'block');
				return;
			}else if(!yi){

				$('.pass-kong').show().children('span').text(first.html());
				console.log(111111)
				return;
			}else if(!er){
				$('.pass-kong ').show().children('span').text(two.html());
				console.log(22222)
				return;
			}else if(!san){
			
				$('.pass-kong ').show().children('span').html(three.html());
				console.log(3333)
				return;
			}else{
				passBloo = true;
			}
				
			

			
		
		})

		
	})


})


// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------


//手机验证
$('.phone .b').focus(function(){
	$('.note').show()
}).blur(function(){
	numBloo=false;
	$('.find').hide()

	var str= $(this).val().trim();
	
	if(str == ''){
		$('.pass-haoma').show().children('span').html('手机号不可为空');
		$('.note .b').css('background','#ccc');
	}
	var reg= /[^\d]/;
	 if(reg.test(str)){
		$('.pass-haoma').show().children('span').html('手机号格式不正确');
		$('.note .b').css('background','#3580eb');

	}else{

		numBloo=true;
		$('.find').show();
		$('.pass-haoma').hide()
	}


})

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

//验证码
$('.note .a').blur(function(){
	$(this).parent().next().hide()
	yanzhengBloo=false;
	var str = $(this).val().trim();
	var stra = $('.phone .b').val().trim();
	$(this).val(str);
	if(stra==''){
		$(this).parent().next().show().children('span').html('手机号不可为空');
	}else if(str==''){
		$(this).parent().next().show().children('span').html('验证码不可为空');
	}else{
		yanzhengBloo=true;
		$(this).parent().next().hide();
	}
})

$('form').submit(function(){
	if(yanzhengBloo &&　numBloo && unameBloo && passBloo){
		
	}else{
	
		return false;
	}
})

