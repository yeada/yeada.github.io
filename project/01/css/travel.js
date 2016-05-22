var aImg = ['../img/mainHeader,jpg','../img/mainHeader,jpg2','../img/mainHeader3,jpg']
var timer = '';
var oPic = document.getElementById('mainPic');
var i=0;

timer = setInterval(function () {
		i++
		oPic.src=aImg[i];
},2000);