/**
 * @author: qc-z
 * @description:
 * @Date: 2016/10/9 16:30
 */

window.onload = function (){
    search();
    secondKill();
    scrollPic();
};


//1获取页面滚动的高度
//2获取搜索框的高度
//比较  1>2 就 头部逐渐变色
var search = function (){
    var search = document.getElementsByClassName("jd_header_box")[0];
//console.log(scrollTop);
    var banner = document.getElementsByClassName("jd_banner")[0];
    //得到scroll板块的高度
    var height = banner.offsetHeight;
//判断
    window.onscroll = function (){
       var top = document.body.scrollTop; //得到滚走的长度
        if(height < top){
            search.style.background = "rgba(201,21,35,0.85)";
        }else {
            search.style.background = "rgba(201,21,35,"+top/height * 0.85+")";
        }

    }

};



/*秒杀倒计时*/
var secondKill = function(){
    /*父盒子*/
    var parentTime = document.getElementsByClassName('kill_time')[0];
    /*span时间*/
    var timeList = parentTime.getElementsByClassName('num');

    //console.log(timeList.length);

    var times = 7   * 60 * 60;
    var timer;
    timer = setInterval(function(){
        times  -- ;

        var h = Math.floor(times/(60*60));
        var m = Math.floor(times/60%60);
        var s = times%60;

        //console.log(h+'-'+m+"-"+s);

        timeList[0].innerHTML = h>10?Math.floor(h/10):0;
        timeList[1].innerHTML = h%10;

        timeList[2].innerHTML = m>10?Math.floor(m/10):0;
        timeList[3].innerHTML = m%10;

        timeList[4].innerHTML = s>10?Math.floor(s/10):0;
        timeList[5].innerHTML = s%10;
        if(times <= 0){
            clearInterval(timer);
        }
    },1000);

};



//轮播图开始

var scrollPic = function (){

    var banner = document.getElementsByClassName("jd_banner")[0];
    //得到一张图片的宽度
    var width = banner.offsetWidth;
    //得到图片盒子
    var imgBox = banner.getElementsByTagName("ul")[0];
    //得到小圈圈盒子
    var pointBox = banner.getElementsByTagName("ul")[1];
    //所有的小圈圈下的li
    var pointlists = pointBox.getElementsByTagName("li");

    var timer;
    var index = 1;


    //开始
    //加过渡函数
    var addTransition = function (){
        imgBox.style.transition = "all 0.3s ease";
        //console.log(wo);
        imgBox.style.webkitTransition = "all 0.3s ease";
    };
    //减过渡函数  在图片轮播完时用的
    var removeTransition = function (){
        imgBox.style.transition = "nono";
        imgBox.style.webkitTransition = "none";
    };

    //改变位置
    var setTransform = function (t){
      imgBox.style.transform = "translateX("+t+"px)";
      imgBox.style.webkitTransform = "translateX("+t+"px)";
    };



    //定时器
    timer = setInterval(function (){
        index++;
        console.log(index);
        //console.log(121212);
        addTransition();
        setTransform(-index*width);
    },1000);


    //过渡完了执行的函数

    imgBox.addEventListener("transitionEnd",function (){
        if(index >=9 ){
            index =1;
            //console.log(111);
        }else if(index < 0){
            index = 8;
        }
        removeTransition();
        setTransform(-index*width);

    });
    imgBox.addEventListener("webkitTransitionEnd",function (){
        if(index >=9 ){
            index =1;

        }else if(index < 0){
            index = 8;
        }
        removeTransition();
        setTransform(-index*width);
    });


};








