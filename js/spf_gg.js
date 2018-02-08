var  LotteryId=72;
var LotteryType=7207;
var gameType = 1;
var infoGGCountent = "";
var infoDGCountent = "";
var infoGGNumber = 0;
var infoDGNumber = 0;
$(function () {
    liClick();
    getIsuseInfo();
    clearAll();
    btnOk();
    Return();
})

function Return() {
    $("#return").click(function () {
        delcookie();
    });
}

function gameTypeChange() {
    $("#zjqtab").find("li").slice(0, 1).click(function () {
        gameType = 1;
        if (infoGGNumber == 0) {
            $(".querenbtn").find("span").html("请至少选择2场比赛");
        }
        else {
            $(".querenbtn").find("span").html("已经选择了" + infoGGNumber + "场比赛");
        }
    });
    $("#zjqtab").find("li").slice(1, 2).click(function () {
        gameType = 2;
        if (infoDGNumber == 0) {
            $(".querenbtn").find("span").html("请至少选择1场比赛");
        }
        else {
            $(".querenbtn").find("span").html("已经选择了" + infoDGNumber + "场比赛");
        }
    });
}

function optSelect() {
    $(".lottery_wrap_3d").find(".events_teamlist").find(".eventjzsfp").find("div").click(function () {
        if ($(this).attr("class").indexOf("curr") >= 0) {
            $(this).removeClass("curr");
        }
        else {
            $(this).addClass("curr");
        }
        getOptInfo();
    });
}

function clearAll() {
    $("#clearall").click(function () {
        $(".competvelist").find("dl").find(".eventjzsfp").find("div").removeClass("curr");
        if (gameType == 1) {
            $(".querenbtn").find("span").html("请至少选择2场比赛");
        }
        else {
            $(".querenbtn").find("span").html("请至少选择1场比赛");
        }
        infoGGCountent = "";
        infoDGCountent = "";
        infoGGNumber = 0;
        infoDGNumber = 0;
    });
}

function getOptInfo() {
    if (gameType == 1) {
        infoGGCountent = "";
        infoGGNumber = 0;
        $("#dl_gg1").find(".jclq").find(".eventjzsfp").each(function (i, j) {
            if ($(j).find(".curr").length > 0) {
                infoGGNumber++;
                infoGGCountent += $(j).attr("id") + ",";
                var num = 0;
                $(j).find("div").each(function (i1, j1) {
                    if ($(j1).attr("class").indexOf("curr") >= 0) {
                        switch (i1) {
                            case 0:
                                num += 100;
                                break;
                            case 1:
                                num += 10;
                                break;
                            case 2:
                                num += 1;
                                break;
                            default:
                                break;
                        }
                    }
                });
                infoGGCountent += num + "-";
            }
        });
        $("#dl_gg2").find(".jclq").find(".eventjzsfp").each(function (i, j) {
            if ($(j).find(".curr").length > 0) {
                infoGGNumber++;
                infoGGCountent += $(j).attr("id") + ",";
                var num = 0;
                $(j).find("div").each(function (i1, j1) {
                    if ($(j1).attr("class").indexOf("curr") >= 0) {
                        switch (i1) {
                            case 0:
                                num += 100;
                                break;
                            case 1:
                                num += 10;
                                break;
                            case 2:
                                num += 1;
                                break;
                            default:
                                break;
                        }
                    }
                });
                infoGGCountent += num + "-";
            }
        });
        $("#dl_gg3").find(".jclq").find(".eventjzsfp").each(function (i, j) {
            if ($(j).find(".curr").length > 0) {
                infoGGNumber++;
                infoGGCountent += $(j).attr("id") + ",";
                var num = 0;
                $(j).find("div").each(function (i1, j1) {
                    if ($(j1).attr("class").indexOf("curr") >= 0) {
                        switch (i1) {
                            case 0:
                                num += 100;
                                break;
                            case 1:
                                num += 10;
                                break;
                            case 2:
                                num += 1;
                                break;
                            default:
                                break;
                        }
                    }
                });
                infoGGCountent += num + "-";
            }
        });
        $(".querenbtn").find("span").html("已经选择了" + infoGGNumber + "场比赛");
        infoGGCountent = infoGGCountent.substring(0, infoGGCountent.length - 1);
    }
    else {
        infoDGCountent = "";
        infoDGNumber = 0;
        $("#dl_dg1").find(".jclq").find(".eventjzsfp").each(function (i, j) {
            if ($(j).find(".curr").length > 0) {
                infoDGNumber++;
                infoDGCountent += $(j).attr("id") + ",";
                var num = 0;
                $(j).find("div").each(function (i1, j1) {
                    if ($(j1).attr("class").indexOf("curr") >= 0) {
                        switch (i1) {
                            case 0:
                                num += 100;
                                break;
                            case 1:
                                num += 10;
                                break;
                            case 2:
                                num += 1;
                                break;
                            default:
                                break;
                        }
                    }
                });
                infoDGCountent += num + "-";
            }
        });
        $("#dl_dg2").find(".jclq").find(".eventjzsfp").each(function (i, j) {
            if ($(j).find(".curr").length > 0) {
                infoDGNumber++;
                infoDGCountent += $(j).attr("id") + ",";
                var num = 0;
                $(j).find("div").each(function (i1, j1) {
                    if ($(j1).attr("class").indexOf("curr") >= 0) {
                        switch (i1) {
                            case 0:
                                num += 100;
                                break;
                            case 1:
                                num += 10;
                                break;
                            case 2:
                                num += 1;
                                break;
                            default:
                                break;
                        }
                    }
                });
                infoDGCountent += num + "-";
            }
        });
        $("#dl_dg3").find(".jclq").find(".eventjzsfp").each(function (i, j) {
            if ($(j).find(".curr").length > 0) {
                infoDGNumber++;
                infoDGCountent += $(j).attr("id") + ",";
                var num = 0;
                $(j).find("div").each(function (i1, j1) {
                    if ($(j1).attr("class").indexOf("curr") >= 0) {
                        switch (i1) {
                            case 0:
                                num += 100;
                                break;
                            case 1:
                                num += 10;
                                break;
                            case 2:
                                num += 1;
                                break;
                            default:
                                break;
                        }
                    }
                });
                infoDGCountent += num + "-";
            }
        });
        $(".querenbtn").find("span").html("已经选择了" + infoDGNumber + "场比赛");
        infoDGCountent = infoDGCountent.substring(0, infoDGCountent.length - 1);
    }
}

function getIsuseInfo() {
    $.ajax({
        type: "Post",
        url: "../Ajax/wapRequest.ashx",
        data: {
            opt: "10",
            info: "{\"lotteryId\":\"" + LotteryId + "\",\"playType\":\"" + LotteryType + "\"}"
        },
        cache: false,
        async: false,
        dataType: "json",
        success: function (data) {
        //    alert(JSON.stringify(data.dtMatch));
            setInfo(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            E.showToast("调用错误！", "50%", "error", "1000");
        }
    });
}

function loadInfo() {
    if (getUrlParam("tag") == null || getUrlParam("tag") == "") {
        return;
    }
    var GGinfo = getCookie("setInfoGG");
    var DGinfo = getCookie("setInfoDG");
    if (GGinfo != "" && GGinfo != null) {
        var infoList = GGinfo.split("-");
        $(".competvelist").slice(0, 1).find("dl").each(function (i, j) {
            $(j).find(".jclq").find("li").each(function (i1, j1) {
                for (var k = 0; k < infoList.length; k++) {
                    if ($(j1).find(".eventjzsfp").attr("id") == infoList[k].split(",")[0]) {
                        switch (parseInt(infoList[k].split(",")[1])) {
                            case 1:
                                $(j1).find(".eventjzsfp").find("div").slice(2, 3).click();
                                break;
                            case 10:
                                $(j1).find(".eventjzsfp").find("div").slice(1, 2).click();
                                break;
                            case 11:
                                $(j1).find(".eventjzsfp").find("div").slice(1, 3).click();
                                break;
                            case 100:
                                $(j1).find(".eventjzsfp").find("div").slice(0, 1).click();
                                break;
                            case 101:
                                $(j1).find(".eventjzsfp").find("div").slice(2, 3).click();
                                $(j1).find(".eventjzsfp").find("div").slice(0, 1).click();
                                break;
                            case 110:
                                $(j1).find(".eventjzsfp").find("div").slice(0, 2).click();
                                break;
                            case 111:
                                $(j1).find(".eventjzsfp").find("div").click();
                                break;
                            default:
                                break;
                        }
                    }
                }
            });
        });
    }
    if (DGinfo != "" && DGinfo != null) {
        gameType = 2;
        var infoList = DGinfo.split("-");
        $(".competvelist").slice(1, 2).find("dl").each(function (i, j) {
            $(j).find(".jclq").find("li").each(function (i1, j1) {
                for (var k = 0; k < infoList.length; k++) {
                    if ($(j1).find(".eventjzsfp").attr("id") == infoList[k].split(",")[0]) {
                        switch (parseInt(infoList[k].split(",")[1])) {
                            case 1:
                                $(j1).find(".eventjzsfp").find("div").slice(2, 3).click();
                                break;
                            case 10:
                                $(j1).find(".eventjzsfp").find("div").slice(1, 2).click();
                                break;
                            case 11:
                                $(j1).find(".eventjzsfp").find("div").slice(1, 3).click();
                                break;
                            case 100:
                                $(j1).find(".eventjzsfp").find("div").slice(0, 1).click();
                                break;
                            case 101:
                                $(j1).find(".eventjzsfp").find("div").slice(2, 3).click();
                                $(j1).find(".eventjzsfp").find("div").slice(0, 1).click();
                                break;
                            case 110:
                                $(j1).find(".eventjzsfp").find("div").slice(0, 2).click();
                                break;
                            case 111:
                                $(j1).find(".eventjzsfp").find("div").click();
                                break;
                            default:
                                break;
                        }
                    }
                }
            });
        });
    }
    if (getUrlParam("tag") == 1) {
        $("#zjqtab").find("li").slice(0, 1).click();
    }
    else {
        $("#zjqtab").find("li").slice(1, 2).click();
    }
}

function setInfo(data) {
    var htmlcountent = "";
    //过关
    if (data.dtMatch.length > 0) {
        if (data.dtMatch[0].table1.length > 0) {
            $("#dl_gg1").find("dt").html(data.dtMatch[0].table1[0].matchDate.replace(/\//g, "-").split(" ")[0] + "（" + data.dtMatch[0].table1[0].matchWeek + "）<em>" + data.dtMatch[0].table1.length + "</em>场比赛可投<span></span>");
            for (var i = 0; i < data.dtMatch[0].table1.length; i++) {
                htmlcountent += "<li>";
                htmlcountent += "<div class=\"events\"><span>" + data.dtMatch[0].table1[i].game + "</span><b>" + data.dtMatch[0].table1[i].matchId + "</b><i>" + data.dtMatch[0].table1[i].stopSellTime.split(" ")[1].substring(0, 5) + "</i></div>";
                htmlcountent += "<div class=\"events_teamlist\">";
                htmlcountent += "<div class=\"eventsvs\">";
                htmlcountent += "<div class=\"eteamone\">" + data.dtMatch[0].table1[i].mainTeam + "<s class=\"red_num\"></s></div>";
                htmlcountent += "<div class=\"vsbox\">VS</div>";
                htmlcountent += "<div class=\"eteamtwo\">" + data.dtMatch[0].table1[i].guestTeam + "</div>";
                htmlcountent += "</div>";
                htmlcountent += "<div class=\"eventjzsfp\" id=\"" + data.dtMatch[0].table1[i].matchId + "\">";
                htmlcountent += "<div class=\"zhuwin\">主胜<span>" + data.dtMatch[0].table1[i].win + "</span></div>";
                htmlcountent += "<div class=\"eventp\">平<span>" + data.dtMatch[0].table1[i].flat + "</span></div>";
                htmlcountent += "<div class=\"kewin\">客胜<span>" + data.dtMatch[0].table1[i].lose + "</span></div>";
                htmlcountent += "</div>";
                htmlcountent += "</div>";
                htmlcountent += "</li>";
            }
            $("#dl_gg1").find(".jclq").html(htmlcountent);
        }
        else {
            $("#dl_gg1").hide();
        }
        if (data.dtMatch[0].table2.length > 0) {
            htmlcountent = "";
            $("#dl_gg2").find("dt").html(data.dtMatch[0].table2[0].matchDate.replace(/\//g, "-").split(" ")[0] + "（" + data.dtMatch[0].table2[0].matchWeek + "）<em>" + data.dtMatch[0].table2.length + "</em>场比赛可投<span></span>");
            for (var i = 0; i < data.dtMatch[0].table2.length; i++) {
                htmlcountent += "<li>";
                htmlcountent += "<div class=\"events\"><span>" + data.dtMatch[0].table2[i].game + "</span><b>" + data.dtMatch[0].table2[i].matchId + "</b><i>" + data.dtMatch[0].table2[i].stopSellTime.split(" ")[1].substring(0, 5) + "</i></div>";
                htmlcountent += "<div class=\"events_teamlist\">";
                htmlcountent += "<div class=\"eventsvs\">";
                htmlcountent += "<div class=\"eteamone\">" + data.dtMatch[0].table2[i].mainTeam + "<s class=\"red_num\"></s></div>";
                htmlcountent += "<div class=\"vsbox\">VS</div>";
                htmlcountent += "<div class=\"eteamtwo\">" + data.dtMatch[0].table2[i].guestTeam + "</div>";
                htmlcountent += "</div>";
                htmlcountent += "<div class=\"eventjzsfp\" id=\"" + data.dtMatch[0].table2[i].matchId + "\">";
                htmlcountent += "<div class=\"zhuwin\">主胜<span>" + data.dtMatch[0].table2[i].win + "</span></div>";
                htmlcountent += "<div class=\"eventp\">平<span>" + data.dtMatch[0].table2[i].flat + "</span></div>";
                htmlcountent += "<div class=\"kewin\">客胜<span>" + data.dtMatch[0].table2[i].lose + "</span></div>";
                htmlcountent += "</div>";
                htmlcountent += "</div>";
                htmlcountent += "</li>";
            }
            $("#dl_gg2").find(".jclq").html(htmlcountent);
        }
        else {
            $("#dl_gg2").hide();
        }
        if (data.dtMatch[0].table3.length > 0) {
            htmlcountent = "";
            $("#dl_gg3").find("dt").html(data.dtMatch[0].table3[0].matchDate.replace(/\//g, "-").split(" ")[0] + "（" + data.dtMatch[0].table3[0].matchWeek + "）<em>" + data.dtMatch[0].table3.length + "</em>场比赛可投<span></span>");
            for (var i = 0; i < data.dtMatch[0].table3.length; i++) {
                htmlcountent += "<li>";
                htmlcountent += "<div class=\"events\"><span>" + data.dtMatch[0].table3[i].game + "</span><b>" + data.dtMatch[0].table3[i].matchId + "</b><i>" + data.dtMatch[0].table3[i].stopSellTime.split(" ")[1].substring(0, 5) + "</i></div>";
                htmlcountent += "<div class=\"events_teamlist\">";
                htmlcountent += "<div class=\"eventsvs\">";
                htmlcountent += "<div class=\"eteamone\">" + data.dtMatch[0].table3[i].mainTeam + "<s class=\"red_num\"></s></div>";
                htmlcountent += "<div class=\"vsbox\">VS</div>";
                htmlcountent += "<div class=\"eteamtwo\">" + data.dtMatch[0].table3[i].guestTeam + "</div>";
                htmlcountent += "</div>";
                htmlcountent += "<div class=\"eventjzsfp\" id=\"" + data.dtMatch[0].table3[i].matchId + "\">";
                htmlcountent += "<div class=\"zhuwin\">主胜<span>" + data.dtMatch[0].table3[i].win + "</span></div>";
                htmlcountent += "<div class=\"eventp\">平<span>" + data.dtMatch[0].table3[i].flat + "</span></div>";
                htmlcountent += "<div class=\"kewin\">客胜<span>" + data.dtMatch[0].table3[i].lose + "</span></div";
                htmlcountent += "</div>";
                htmlcountent += "</div>";
                htmlcountent += "</li>";
            }
            $("#dl_gg3").find(".jclq").html(htmlcountent);
        }
        else {
            $("#dl_gg3").hide();
        }
    }
    else {
        $("#dl_gg1").hide();
        $("#dl_gg2").hide();
        $("#dl_gg3").hide();
    }
    //单关
    if (data.Singlepass.length > 0) {
        if (data.Singlepass[0].table1.length > 0) {
            htmlcountent = "";
            $("#dl_dg1").find("dt").html(data.Singlepass[0].table1[0].matchDate.replace(/\//g, "-").split(" ")[0] + "（" + data.Singlepass[0].table1[0].matchWeek + "）<em>" + data.Singlepass[0].table1.length + "</em>场比赛可投<span></span>");
            for (var i = 0; i < data.Singlepass[0].table1.length; i++) {
                htmlcountent += "<li>";
                htmlcountent += "<div class=\"events\"><span>" + data.Singlepass[0].table1[i].game + "</span><b>" + data.Singlepass[0].table1[i].matchId + "</b><i>" + data.Singlepass[0].table1[i].stopSellTime.split(" ")[1].substring(0, 5) + "</i></div>";
                htmlcountent += "<div class=\"events_teamlist\">";
                htmlcountent += "<div class=\"eventsvs\">";
                htmlcountent += "<div class=\"eteamone\">" + data.Singlepass[0].table1[i].mainTeam + "<s class=\"red_num\"></s></div>";
                htmlcountent += "<div class=\"vsbox\">VS</div>";
                htmlcountent += "<div class=\"eteamtwo\">" + data.Singlepass[0].table1[i].guestTeam + "</div>";
                htmlcountent += "</div>";
                htmlcountent += "<div class=\"eventjzsfp\" id=\"" + data.Singlepass[0].table1[i].matchId + "\">";
                htmlcountent += "<div class=\"zhuwin\">主胜<span>" + data.Singlepass[0].table1[i].spfwin + "</span></div>";
                htmlcountent += "<div class=\"eventp\">平<span>" + data.Singlepass[0].table1[i].spfflat + "</span></div>";
                htmlcountent += "<div class=\"kewin\">客胜<span>" + data.Singlepass[0].table1[i].spflose + "</span></div";
                htmlcountent += "</div>";
                htmlcountent += "</div>";
                htmlcountent += "</li>";
            }
            $("#dl_dg1").find(".jclq").html(htmlcountent);
        }
        else {
            $("#dl_dg1").hide();
        }
        if (data.Singlepass[0].table2.length > 0) {
            htmlcountent = "";
            $("#dl_dg2").find("dt").html(data.Singlepass[0].table2[0].matchDate.replace(/\//g, "-").split(" ")[0] + "（" + data.Singlepass[0].table2[0].matchWeek + "）<em>" + data.Singlepass[0].table2.length + "</em>场比赛可投<span></span>");
            for (var i = 0; i < data.Singlepass[0].table2.length; i++) {
                htmlcountent += "<li>";
                htmlcountent += "<div class=\"events\"><span>" + data.Singlepass[0].table2[i].game + "</span><b>" + data.Singlepass[0].table2[i].matchId + "</b><i>" + data.Singlepass[0].table2[i].stopSellTime.split(" ")[1].substring(0, 5) + "</i></div>";
                htmlcountent += "<div class=\"events_teamlist\">";
                htmlcountent += "<div class=\"eventsvs\">";
                htmlcountent += "<div class=\"eteamone\">" + data.Singlepass[0].table2[i].mainTeam + "<s class=\"red_num\"></s></div>";
                htmlcountent += "<div class=\"vsbox\">VS</div>";
                htmlcountent += "<div class=\"eteamtwo\">" + data.Singlepass[0].table2[i].guestTeam + "</div>";
                htmlcountent += "</div>";
                htmlcountent += "<div class=\"eventjzsfp\" id=\"" + data.Singlepass[0].table2[i].matchId + "\">";
                htmlcountent += "<div class=\"zhuwin\">主胜<span>" + data.Singlepass[0].table2[i].spfwin + "</span></div>";
                htmlcountent += "<div class=\"eventp\">平<span>" + data.Singlepass[0].table2[i].spfflat + "</span></div>";
                htmlcountent += "<div class=\"kewin\">客胜<span>" + data.Singlepass[0].table2[i].spflose + "</span></div";
                htmlcountent += "</div>";
                htmlcountent += "</div>";
                htmlcountent += "</li>";
            }
            $("#dl_dg2").find(".jclq").html(htmlcountent);
        }
        else {
            $("#dl_dg2").hide();
        }
        if (data.Singlepass[0].table3.length > 0) {
            htmlcountent = "";
            $("#dl_dg3").find("dt").html(data.Singlepass[0].table3[0].matchDate.replace(/\//g, "-").split(" ")[0] + "（" + data.Singlepass[0].table3[0].matchWeek + "）<em>" + data.Singlepass[0].table3.length + "</em>场比赛可投<span></span>");
            for (var i = 0; i < data.Singlepass[0].table3.length; i++) {
                htmlcountent += "<li>";
                htmlcountent += "<div class=\"events\"><span>" + data.Singlepass[0].table3[i].game + "</span><b>" + data.Singlepass[0].table3[i].matchId + "</b><i>" + data.Singlepass[0].table3[i].stopSellTime.split(" ")[1].substring(0, 5) + "</i></div>";
                htmlcountent += "<div class=\"events_teamlist\">";
                htmlcountent += "<div class=\"eventsvs\">";
                htmlcountent += "<div class=\"eteamone\">" + data.Singlepass[0].table3[i].mainTeam + "<s class=\"red_num\"></s></div>";
                htmlcountent += "<div class=\"vsbox\">VS</div>";
                htmlcountent += "<div class=\"eteamtwo\">" + data.Singlepass[0].table3[i].guestTeam + "</div>";
                htmlcountent += "</div>";
                htmlcountent += "<div class=\"eventjzsfp\" id=\"" + data.Singlepass[0].table3[i].matchId + "\">";
                htmlcountent += "<div class=\"zhuwin\">主胜<span>" + data.Singlepass[0].table3[i].spfwin + "</span></div>";
                htmlcountent += "<div class=\"eventp\">平<span>" + data.Singlepass[0].table3[i].spfflat + "</span></div>";
                htmlcountent += "<div class=\"kewin\">客胜<span>" + data.Singlepass[0].table3[i].spflose + "</span></div";
                htmlcountent += "</div>";
                htmlcountent += "</div>";
                htmlcountent += "</li>";
            }
            $("#dl_dg3").find(".jclq").html(htmlcountent);
        }
        else {
            $("#dl_dg3").hide();
        }
    }
    else {
        $("#dl_dg1").hide();
        $("#dl_dg2").hide();
        $("#dl_dg3").hide();
    }
    optSelect();
    gameTypeChange();
    loadInfo();
}

//function recoverInfo() {
//    if (getCookie("setInfoGG") != "" && getCookie("setInfoGG") != null) { 
//        
//    }
//}

function liClick() {
    $("#downmenu").find("ul").find("li").slice(0, 1).click(function () { $("#buyhall").click(); });
    $("#downmenu").find("ul").find("li").slice(1, 2).click(function () { window.location.href = "JCZQ_RQSPF_GG.aspx"; delcookie(); });
    $("#downmenu").find("ul").find("li").slice(2, 3).click(function () { window.location.href = "JCZQ_BQC_GG.aspx"; delcookie(); });
    $("#downmenu").find("ul").find("li").slice(3, 4).click(function () { window.location.href = "JCZQ_BF_GG.aspx"; delcookie(); });
    $("#downmenu").find("ul").find("li").slice(4, 5).click(function () { window.location.href = "JCZQ_ZJQ_GG.aspx"; delcookie(); });
    $("#downmenu").find("ul").find("li").slice(5, 6).click(function () { window.location.href = "JCZQ_HHGG_GG.aspx"; delcookie(); });
}

function delcookie() {
    delCookie("setInfoGG");
    delCookie("setInfoGGDan");
    delCookie("setInfoDG");
    delCookie("setInfoDGDan");
}

function btnOk() {
    $("#btn").click(function () {
        if (gameType == 1) {
            if (infoGGNumber >= 2) {
                setCookie("setInfoGG", infoGGCountent, 1);
                window.location.href = "JCZQ_Cathectic.aspx?LotteryId=" + LotteryId + "&LotteryType=" + LotteryType + "&gameType=1";
            }
            else {
                E.showToast("请至少选择2场比赛！", "50%", "error", "1000");
            }
        }
        else {
            if (infoDGNumber >= 1) {
                setCookie("setInfoDG", infoDGCountent, 1);
                window.location.href = "JCZQ_Cathectic.aspx?LotteryId=" + LotteryId + "&LotteryType=" + LotteryType + "&gameType=2";
            }
            else {
                E.showToast("请至少选择1场比赛！", "50%", "error", "1000");
            }
        }
    });
}

//写cookies
function setCookie(name, value, days) {
    var exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//读取cookies 
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

//删除cookies 
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function getUrlParam(name) {                                    //根据地址栏的键获取值
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");     //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);        //匹配目标参数
    if (r != null) return unescape(r[2]); return null;          //返回参数值
}