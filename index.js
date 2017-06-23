/**
 * Created by wangry on 2017/6/23.
 */
$(function(){
    $(".show-btn").click(function(){
        $(".slide-shell-wrap").addClass("animate-show");
        $(".close-btn-wrap").addClass("animate-show");
        $(".mask").show();
        $("html").css({"width":"100%","height":"100%","overflow":"hidden"});
    });
    $(".close-btn").click(function () {
        $(".slide-shell-wrap").removeClass("animate-show");
        $(".close-btn-wrap").removeClass("animate-show");
        $(".mask").hide();
        $("html").css({"width":"100%","height":"auto","overflow":"auto"});
    });
    $(".mask").click(function () {
        $(".close-btn").click();
    });
});