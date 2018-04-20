// 克隆第一张图片放在最后一张
// var firstImg = $('.img li').first().clone();

// $('.img').append(firstImg).width($('.img li').length*$('.lxtu').width());


// 自动播放时间
var autoPlayTime = 2000;
// 设置默认显示  第一张
var i = 0;

var timer;

// 自动播放
autoPlay();




function autoPlay() {
    timer = setInterval(function() {
        i++;
        // 跳转到指定图片
        moveImg();
        // console.log($('.img').offset().left);
    }, autoPlayTime);

}

// 跳转到指定图片
function moveImg() {
    // 最后一张到第一张

    if (i == $('.img li').length) {
        i++;
        $('.ka li').eq(i).addClass('bg');
        // console.log($('.ka li').eq(i))
        $('.img').css({ left: 0 });
        i = 1;
        // $('.ka li:eq(0)').addClass('bg');
        // console.log($('.ka li:eq(0)'))


    }


    // 选卡切换
    if (i == $('.img li').length - 1) {
        console.log(i)
        // 清除上一个
        $('.ka li').eq(i - 1).removeClass('bg');
        // 给下一个添加属性
        $('.ka li').eq(i- $('.img li').length +1).addClass('bg');
    }else {
        $('.ka li').removeClass('bg');
        // 给当前添加颜色
        $('.ka li').eq(i%5).addClass('bg');
    }

    // 动画
    $('.img').stop().animate({ left: -$('.lxtu').width() * i }, 1000);
}

// 鼠标移入让当前的图片显示

$('.ka li').mouseenter(function() {
    clearInterval(timer)
    i = $(this).index();
    // console.log(indexLI);

    $('.img').css('left', -$('.img li').width() * i);
    // console.log($('.ka > li').eq(indexLI))


    // console.log(indexLI);
    $('.ka > li').removeClass('bg');
    $('.ka > li').eq(i).addClass('bg');
})


$('.ka li').mouseleave(function() {
    autoPlay();
})


