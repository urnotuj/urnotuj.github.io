window.onload = function fn1() {
    const highloghtBlocks = document.querySelectorAll('figure.highlight');

    highloghtBlocks.length && highloghtBlocks.forEach(i => hljs.highlightBlock(i));
}
$(function() {
    //返回顶部和目录
    var $articleToc = $("div.post-toc");
    var $articleTocBtn = $("div.post-toc-btn");
    var $navToc = $("ol.article-toc");
    var $gotoTop = $("div.gotoTop");
    $(window).scroll(function showtoTop() {
        if ($(this).scrollTop() > 100) {
            $gotoTop.show();
            $articleToc.show();
        } else {
            $gotoTop.hide();
            $articleToc.hide();
        }
    });
    $gotoTop.click(function goTop() {
        $("html, body").scrollTop(0);
    });
    $articleTocBtn.click(function(){
if($navToc.is(":visible")){
	$articleTocBtn.removeClass("active");
	$navToc.hide();

}else{
	$articleTocBtn.addClass("active");
	$navToc.show();
}
    });
    /*$articleTocBtn.toggle(function showToc() {
        $navToc.show();
    }, function hideToc() {
        $navToc.hide();
    });*/
    //给标签添加fontAwesome
    var $postTag = $("article.all-post>ul.article-tag-list>li.article-tag-list-item");
    $postTag.addClass("fa-tag fa");
})