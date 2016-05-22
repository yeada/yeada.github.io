var aImg = ['img/mainHeader.jpg', 'img/mainHeader2.jpg', 'img/mainHeader3.jpg'];
var oPic = document.getElementById('mainPic');
var aLi = document.getElementsByClassName('dots');
var navLi = document.getElementsByClassName('nav_ul_li');
var navUl = document.getElementsByClassName('nav_list');
var timer = '';
var num = 0;

aLi[num].style.background = '#ea7c1c';
timer = setInterval('changeImg()', 2000);

function changeImg() {
    aLi[num].style.background = '#ea7c1c';
    num++;
    if (num >= aImg.length)
        num = 0;
    document.getElementById('mainPic').src = aImg[num];
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].style.background = '';
        aLi[num].style.background = '#ea7c1c';
    }
}

oPic.onmouseover = function() {
    clearInterval(timer);
}
oPic.onmouseout = function() {
    timer = setInterval('changeImg()', 2000);
}

for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onclick = function() {

        aLi[num].style.background = '';
        num = this.index;
        oPic.src = aImg[num];
        aLi[num].style.background = '#ea7c1c';
    }
}
for (var i = 0; i < navLi.length; i++) {
    navLi[i].index = i;
    navLi[i].onmouseover = function() {
        this.style.background = '#3e8e32';
        navUl[this.index].style.display = 'inline-block';
    }
    navLi[i].onmouseout = function() {
        this.style.background = '';
        navUl[this.index].style.display = 'none';
    }
}
for (var i = 0; i < navUl.length; i++) {

    var child = navUl[i].getElementsByTagName("li");
    for (var j = 0; j < child.length; j++) {
        child[j].onmouseover = function() {
            this.style.background = '#3e8e32';
        }
        child[j].onmouseout = function() {
            this.style.background = '#bad200';
        }
    }

}
var oUl = document.getElementById('quick_nav_content');
var contentLi = oUl.getElementsByTagName('li');
for (var i = 0; i < contentLi.length; i++) {
    contentLi[i].onmouseover = function() {
        this.style.background = '#bad200';
    }
    contentLi[i].onmouseout = function() {
        this.style.background = '';
    }
}
