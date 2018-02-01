window.onload = function fn1() {
    const highloghtBlocks = document.querySelectorAll('figure.highlight');

    highloghtBlocks.length && highloghtBlocks.forEach(i => hljs.highlightBlock(i));
}
$(function() {
    //返回顶部和目录
    var $articleToc = $("div.post-toc");
    var $articleTocBtn = $("div.post-toc-btn");
    var $navToc = $("ul.article-toc");
    var $gotoTop = $("div.gotoTop");
    //关于导航栏高亮的变量
    var $allHeader = $(".post-content :header"),
        ceng = 0,
        offset = [];

    var getOffset = function() {
        for (var i = 0; i < $allHeader.length; i++) {
            offset[i] = parseInt($allHeader.eq(i).offset().top);
        }
        //offset[$header.length] = $('.comments').length ? parseInt($('.comments').offset().top) : parseInt($('.recommend').offset().top);
        // offset[$header.length+1] = 0;
    };

    for (let i = 0; i < $allHeader.length; i++) {
        var $this = $allHeader.eq(i),
            $prev = i > 0 ? $($allHeader[i - 1]) : $($allHeader[i]);
        var html0 = '';
        if ($this.prop("tagName") > $prev.prop("tagName")) {
            ceng++;
        } else if ($this.prop("tagName") < $prev.prop("tagName")) {
            ceng--;
        }

        if (ceng !== 0) {
            html0 = '<li class="ceng_' + ceng + '"><a name="toc_link" href="javascript:;">' + $this.text() + '</a></li>';
        } else {
            html0 = '<li class="ceng_' + ceng + '"><a name="toc_link" href="javascript:;">' + $this.text() + '</a></li>';
        }
        $navToc.append(html0);
    }

    getOffset();
    setTimeout(function() {
        getOffset();
    }, 2000);

    $(window).scroll(function showtoTop() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 100) {
            $gotoTop.show();
            $articleToc.show();

            for (let j = 0; j < offset.length - 1; j++) {

                if (scrollTop >= offset[j] && scrollTop < offset[j + 1]) {
                    var $activeLiA = $navToc.find('a');

                    $navToc.find('a').removeClass('headeractive');
                    $activeLiA.eq(j).addClass('headeractive');

                    break;
                }
            }
        } else {
            $gotoTop.hide();
            $articleToc.hide();
        }
    });

    $navToc.on('click', 'a', function(event) {
        // if(document.readyState!=="complete"){
        getOffset();
        // }
        var index = $(this).parent().index();
        $(window).scrollTop(offset[index]);

        event.preventDefault();
    });

    $gotoTop.click(function goTop() {
        $("html, body").scrollTop(0);
    });
    $articleTocBtn.click(function() {
        if ($navToc.is(":visible")) {
            $articleTocBtn.removeClass("active");
            $navToc.hide();

        } else {
            $articleTocBtn.addClass("active");
            $navToc.show();
        }
    });

    //给标签添加fontAwesome
    var $postTag = $("article.all-post>ul.article-tag-list>li.article-tag-list-item");
    $postTag.addClass("fa-tag fa");
    //手机端导航
    var $navMobile = $("div.nav-btn");
    $navMobile.click(function() {
        // console.log("ok");
        $("div.header-info>nav.navbar>ul.menu").slideToggle(100);

    });
})