/**
 * 
 * @authors TabTang (jiangtao213@163.com)
 * @date    2015-01-06 11:02:12
 * @version sls5.2
 */

$(function () {
    $(".orderlist").children('dl').each(function () {
        $(this).children('dt').css("height", $(this).children('dd').innerHeight() + "px");
    });

    $("#buyhall").bind('click', function () {
        if ($("#downmenu").css('display') == "none") {
            $("#downmenu").slideDown(200);
            $("#mask").fadeIn(200);
            $(this).children("span").addClass('curr')
        } else {
            $("#downmenu").slideUp(200);
            $("#mask").fadeOut(200);
            $(this).children("span").removeClass('curr')
        }
    })
    $(".competvelist").find("dt").bind("click", function () {
        if ($(this).next("dd").css('display') == 'none') {
            $(".competvelist").find("dd").slideUp(200);
            $(".competvelist").find("dt").removeClass('curr');
            $(this).next("dd").slideDown(200);
            $(this).addClass('curr');
        } else {
            $(this).next("dd").slideUp(200);
            $(this).removeClass('curr');
        }
    })
    /*
    $(".eventsbut,.racelist").children('input').bind('click', function () {
        if ($(this).nextAll(".betting_options").css('display') == "none") {
            $(this).nextAll(".betting_options").fadeIn(200);
            $(this).nextAll(".mask2").fadeIn(200);
            $(this).children("span").addClass('curr')
        }
    });
    $(".okbtn").bind('click', function () {
        if ($(".betting_options").css('display') == "block") {
            $(".betting_options").fadeOut(200);
            $(".mask2").fadeOut(200);
        }
    });*/

    $("#guogchobut").bind('click', function () {
        $("#guoguan").slideDown(200);
        $(".guoguanmask").fadeIn(200);
    })

    function tab(tabli, tabcon, tabwrap, tabev) {
        $("#" + tabli).children("li").bind(tabev, function () {
            $("#" + tabli).children("li").removeClass("curr");
            $(this).addClass("curr");
            $("." + tabcon).css('display', 'none');
            $("." + tabwrap).find("." + tabcon).eq($(this).index()).css('display', 'block');
        })
    }
    tab("zjqtab", "competvelist", "lottery_wrap_3d", "click");

})