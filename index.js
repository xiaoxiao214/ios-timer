// js动态生成数字并旋转开
// 将li通过循环生成字符串的形式，然后以文本的形式添加到ul中
var oUl =document.getElementsByTagName('ul')[0];
function init(){
    var str = '';
    for(i =1 ;i <=12; i++){
        str += '<li class="num" style="transform:rotate('+ i * 30 +'deg)"><span style="transform: rotate('+ i * -30 +'deg)">'+ i +'</span></li>' ;
    }
    
    // console.log(str)
    oUl.innerHTML = str;
}
init();
var hour=document.getElementsByClassName('hour')[0];
var min = document.getElementsByClassName('min')[0];
var sec = document.getElementsByClassName('sec')[0];
function time(){
    var newTime = new Date();
    // console.log(newTime)
    var Ohour = newTime.getHours();
    // console.log(Ohour)
    var Omin = newTime.getMinutes();
    var Osec = newTime.getSeconds();
    var Omisec = newTime.getMilliseconds();
//秒针转动
    var Os=Osec +Omisec/1000;
    var ds =Os*6;
    sec.style.transform =' rotate('+ds+'deg)';
//分针转动
    var Om=Omin +Osec/60;
    var dm =Om*6;
    min.style.transform =' rotate('+dm+'deg)';
//时针转动
    var Oh=Ohour +Omin/1000;
    var dh =Oh*30;
    hour.style.transform =' rotate('+dh+'deg)';
    // setTimeout(time,16.7);
    requestAnimationFrame(time);
}
time();