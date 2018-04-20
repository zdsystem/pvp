$(function () {
    //选项卡切换
    $('.data-content>ul li').click(function () {
        $('.data-content>ul .sty').removeClass('sty');
        $(this).addClass('sty');
        var index=$(this).index();
        $('.select').addClass('dis');
        $('.select').eq(index).removeClass('dis');
    })
    //选中按钮
    $('.type2 li').click(function () {
        $('.type2 .selected').removeClass('selected');
        $(this).find('i').addClass('selected');
    })
    //搜索优化
    //聚焦
    $('.hero-search input').focus(function () {
        if($(this).val()=='请输入你想要搜索的英雄名'){
            $(this).val('');
        }
    })
    //失焦
    $('.hero-search input').blur(function () {
        if($(this).val()==''){
            $(this).val('请输入你想要搜索的英雄名');
        }
    })

    //武器介绍特效
    $('#result li').mousemove(function (e) {
        // var x;
        // var left=$(window).width()-$('.result').width();
        // if(left>=$('.result').offset().left){
        //     x=e.pageX-70;
        // }else{
            x=e.pageX+70;
        // }
        $('.result').css({
            'display':'block',
            'left':x+'px',
            'top':e.pageY-50+'px'
        });
    })
    $('#result li').mouseleave(function (e) {
        $('.result').css({
            'display':'none'
        });
    })
})