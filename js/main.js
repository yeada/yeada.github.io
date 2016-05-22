function main() {
    data = [{
        '': '',
        '时间': '2015-10 至 2016-01',
        '书籍一': 'head first html与css',
        '书籍二': 'head first html5',
        '其他  ': '计算机基础知识学习',
        '收获  ': '了解前端开发的基本概念以及相关术语'
    }, {
        '时间': '2016 01-03',
        '远程视频': '慕课网',
        '课程一': 'HTML+CSS基础课程 ',
        '课程二': 'JavaScript入门篇 ',
        '课程三': 'JavaScript进阶篇  ',
        'title': { 'name': '慕课网-前端开发', 'link': "http://www.imooc.com/course/list?c=fe" }
    }, {
        '时间': '2016 03-04',
        '远程视频': '妙味课堂',
        '课程一': '妙味HTML+CSS实战教程 ',
        '课程二': '妙味CSS3课程',
        '课程三': 'Javascript高级',
        'title': { 'name': '妙味课堂-前端开发', 'link': "http://v.miaov.com/special/css2015/" }
    }, {
        '时间': '2016 03-04',
        '项目': '某旅游网站首页',
        '职责': '根据psd进行首页设计',
        '技术': 'html5 css3  javascript',
        'title': { 'name': '某旅游网站首页', 'link': "project/01/index.html" },
        '': ''
    }, {
        '时间': '2016 04-05',
        '远程视频': '妙味课堂',
        '课程一': '妙味云课堂jQuery初级 ',
        '课程二': '妙味云课堂jQuery高级,ajax',
        '课程三': '妙味HTML5课程',
        'title': { 'name': '妙味课堂-前端开发', 'link': "http://v.miaov.com/special/css2015/" }
    }, {
        '时间': '2016 04-05',
        '项目': '某电商网站首页',
        '职责': '首页原型设计',
        '技术': 'html5 css3  jquery',
        'title': { 'name': '某电商网站首页', 'link': "project/02/index.html" },
        '': ''
    }, ];

    (function() {
        'use strict';

        // jQuery to collapse the navbar on scroll
        $(window).scroll(function() {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });
        $(window).load(function() {
            $(".fishBone").fishBone(data);

        });
    }());


}
main();
