function main() {
    data = [{
        'time': '2016-12-20 至 2016-12-20',
        '学习内容': 'XXXX',
        '其他': 'XXX',
        '承办法院': 'XXXXXXX法院',
        '案件状态': 'XX',
        'title': { 'name': '(XXXX)XXXXXX第XXXX号', 'link': "http://www.baidu.com" }
    }, {
        'time': '2016-12-20 至 2016-12-20',
        '学习内容': 'XXXX',
        '其他': 'XXX',
        '承办法院': 'XXXXXXX法院',
        '案件状态': 'XX',
        'title': { 'name': '(XXXX)XXXXXX第XXXX号', 'link': "http://www.baidu.com" }
    }, {
        'time': '2016-12-20 至 2016-12-20',
        '学习内容': 'XXXX',
        '其他': 'XXX',
        '承办法院': 'XXXXXXX法院',
        '案件状态': 'XX',
        'title': { 'name': '(XXXX)XXXXXX第XXXX号', 'link': "http://www.baidu.com" }
    }, {
        'time': '2016-12-20 至 2016-12-20',
        '学习内容': 'XXXX',
        '其他': 'XXX',
        '承办法院': 'XXXXXXX法院',
        '案件状态': 'XX',
        'title': { 'name': '(XXXX)XXXXXX第XXXX号', 'link': "http://www.baidu.com" }
    }, {
        'time': '2016-12-20 至 2016-12-20',
        '学习内容': 'XXXX',
        '其他': 'XXX',
        '承办法院': 'XXXXXXX法院',
        '案件状态': 'XX',
        'title': { 'name': '(XXXX)XXXXXX第XXXX号', 'link': "http://www.baidu.com" }
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
