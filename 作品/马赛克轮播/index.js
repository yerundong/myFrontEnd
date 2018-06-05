/*轮播图书写顺序：
* 设置全局变量：当前index，上次$preIndex，timer，
* 小红点切换
* 封装切图函数，将小红点索引与图片索引连接
* 左右键切图键
* 自动播放
* */
$(function () {
    var $index = 0;
    var timer = null;
    var $preIndex = 0;
    var lock=true;
   $('ol.docSwi li').click(function () {
       if(lock){
           lock=false;
           $index = $(this).index();
           picSwitch();
       }
    });

    $('.container').hover(function () {
        clearInterval(timer);
    }, function () {
        autoPlay();
    });
    //右滑键
    $('.right').click(function () {
        if(lock){
            lock = false;
            $index++;
            if($index>3){
                $index=0;
            }
            picSwitch();
        }
    })
    //左滑键
    $('.left').click(function () {
        if(lock){
            lock = false;
            $index--;
            if($index<0){
                $index=3;
            }
            picSwitch();
        }
    })
    autoPlay();

    //自动播放函数
    function autoPlay(){
        timer = setInterval(function () {
            $index++;
            if($index>3){
                $index=0;
            }
            picSwitch();
        },2000);
    }
    //图片切换函数
    function picSwitch(){
        //$(' .lunbo li').find('div').stop(false,true);
        $('ol.docSwi li').eq($index).addClass('active').siblings().removeClass('active');//小红点切换
        $(' .lunbo li').eq($preIndex).removeClass('zIndex1');
        $(' .lunbo li').eq($preIndex).addClass('zIndex2');
        $(' .lunbo li').eq($index).addClass('zIndex1');
        $(' .lunbo li').eq($preIndex).find('div').eq(0).animate({
            width:0
        },500).end().eq(1).delay(50).animate({
            width:0
        },500).end().eq(2).delay(100).animate({
            width:0
        },500).end().eq(3).delay(150).animate({
            width:0
        },500).end().eq(4).delay(200).animate({
            width:0
        },500).end().eq(5).delay(250).animate({
            width:0
        },500).end().eq(6).delay(300).animate({
            width:0
        },500, function () {
            $(' .lunbo li').eq($preIndex).removeClass('zIndex2');
            $('.lunbo li').eq($preIndex).find('div').css('width',520);
            $preIndex = $index;//这里把赋值只能放在运动的回调函数里，如果放在外面，运动前已经赋值了
            lock = true;//把锁放在回调函数里，等运动完之后才能再点击
        });
    }
})

























