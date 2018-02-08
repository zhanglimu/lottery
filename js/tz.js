$(function () {
    setUrl();
    getIsuseInfo();
    still();
    Return();
    guoGuanChange();
    btnOk();
})

var SchemeInfo = {
    lotteryId: 0,            //彩种ID
    isuseId: "",             //奖期ID
    schemeSumMoney: 0,       //方案总金额
    schemeSumNum: 0,         //方案总注数
    chase: 0,                //是否是追号数据
    share: 1,                //方案份数
    buyShare: 1,             //购买份数
    assureShare: 0,          //保底份数
    assureMoney: 0,          //保底金额
    openUserList: "",        //招股对象
    title: "",               //方案标题
    description: "",         //方案描述
    autoStopAtWinMoney: 0,   //中奖自动停止追号条件
    secrecyLevel: 0,         //保密类型
    multiple: 0,             //投注倍数
    chaseBuyedMoney: 0,      //追号方案总金额
    schemeBonusScale: 0,     //合买佣金
    buyContent: [],          //购买内容
    chaseList: []            //追号内容列表
}

var BuyContent = {
    playType: 0,             //玩法ID
    sumMoney: 0,             //方案总金额
    sumNum: 0,               //方案总注数
    lotteryNumber: ""        //投注内容
}
var LotteryId = 0;
var LotteryType = 0;
var infoCountent = "";
var infoDan = "";
var infoNumber = 0;
var gameType = 0;
var ggcountent = "";
var cgtag = 1;
var infoCount = 0;
var danCount = 0;
var totalMoney = 0;
var theoryMinMoney = 0;
var theoryMaxMoney = 0;
var numberInfo = "";
var agreement = true;

function setUrl() {
    LotteryId = parseInt(getUrlParam("LotteryId"));
    LotteryType = parseInt(getUrlParam("LotteryType"));
    gameType = parseInt(getUrlParam("gameType"));
}

function Return() {
    $("#return").click(function () {
        delCookie("setInfoGG");
        delCookie("setInfoGGDan");
        delCookie("setInfoDG");
        delCookie("setInfoDGDan");
    });
    $("#agreement").click(function () {
        agreement = agreement ? false : true;
    });
}

function optSelect() {
    $(".zqtz").find("ul").find(".spf").find("span").click(function () {
        if ($(this).attr("class").indexOf("curr") >= 0) {
            $(this).removeClass("curr");
            if ($(this).parent().find(".curr").length == 0) {
                $(this).parent().parent().parent().find(".racedan").removeClass("curr");
            }
        }
        else {
            $(this).addClass("curr");
        }
        totalMoney = 0;
        theoryMaxMoney = 0;
        theoryMinMoney = 0;
        $("#btn").text("理论奖金 0~0 立即购买 0元");
        if (gameType == 1) {
            clickNumber();
            cgCountent(infoCount, danCount);
            $("#guogchobut").val("过关方式(必选)");
        }
        else {
            danGuanClick();
        }
    });
    if (gameType == 1) {
        $(".zqtz").find("ul").find(".racedan").click(function () {
            if ($(this).attr("class").indexOf("curr") >= 0) {
                $(this).removeClass("curr");
                clickNumber();
                cgCountent(infoCount, danCount);
            }
            else {
                if ($(this).parent().find(".spf").find(".curr").length > 0 && danCount + 1 < infoCount && danCount < 7) {
                    $(this).addClass("curr");
                    clickNumber();
                    cgCountent(infoCount, danCount);
                }
            }
            $("#btn").text("理论奖金 0~0 立即购买 0元");
            $("#guogchobut").val("过关方式(必选)");
        });
    }
}

function optBQCSelect() {
    $(".zqtz").find("ul").find(".racelist").find("ul").find("div").click(function () {
        if ($(this).attr("class").indexOf("curr") >= 0) {
            $(this).removeClass("curr");
        }
        else {
            $(this).addClass("curr");
        }
    });
    if (gameType == 1) {
        $(".zqtz").find("ul").find(".racedan").click(function () {
            if ($(this).attr("class").indexOf("curr") >= 0) {
                $(this).removeClass("curr");
                clickNumber();
                cgCountent(infoCount, danCount);
            }
            else {
                if ($(this).parent().find(".racelist").find(".selected").length > 0 && danCount + 1 < infoCount && danCount < 7) {
                    $(this).addClass("curr");
                    clickNumber();
                    cgCountent(infoCount, danCount);
                }
            }
            $("#btn").text("理论奖金 0~0 立即购买 0元");
            $("#guogchobut").val("过关方式(必选)");
        });
    }
}

function optBFSelect() {
    $(".zqtz").find("ul").find(".racelist").find(".optionslist2").find(".tabcon").find("ul").find("li").click(function () {
        if ($(this).attr("class") == "looqi" || $(this).attr("class") == "looqi curr") {
            if ($(this).attr("class").indexOf("curr") >= 0) {
                $(this).removeClass("curr");
            }
            else {
                $(this).addClass("curr");
            }
        }
        else {
            if ($(this).attr("class")) {
                $(this).removeAttr("class");
            }
            else {
                $(this).addClass("curr");
            }
        }
    });
    if (gameType == 1) {
        $(".zqtz").find("ul").find(".racedan").click(function () {
            if ($(this).attr("class").indexOf("curr") >= 0) {
                $(this).removeClass("curr");
                clickNumber();
                cgCountent(infoCount, danCount);
            }
            else {
                if ($(this).parent().find(".racelist").slice(0, 1).find(".selected").length > 0 && danCount + 1 < infoCount && danCount < 7) {
                    $(this).addClass("curr");
                    clickNumber();
                    cgCountent(infoCount, danCount);
                }
            }
            $("#btn").text("理论奖金 0~0 立即购买 0元");
            $("#guogchobut").val("过关方式(必选)");
        });
    }
}

function optZJQSelect() {
    $(".zqtz").find("ul").find(".racelist2").find("span").click(function () {
        if ($(this).attr("class")) {
            $(this).removeClass("curr");
            if ($(this).parent().find(".curr").length == 0) {
                $(this).parent().parent().parent().find(".racedan").removeClass("curr");
            }
        }
        else {
            $(this).addClass("curr");
        }
        totalMoney = 0;
        theoryMaxMoney = 0;
        theoryMinMoney = 0;
        $("#btn").text("理论奖金 0~0 立即购买 0元");
        if (gameType == 1) {
            clickNumber();
            cgCountent(infoCount, danCount);
            $("#guogchobut").val("过关方式(必选)");
        }
        else {
            danGuanClick();
        }
    });
    if (gameType == 1) {
        $(".zqtz").find("ul").find(".racedan").click(function () {
            if ($(this).attr("class").indexOf("curr") >= 0) {
                $(this).removeClass("curr");
                clickNumber();
                cgCountent(infoCount, danCount);
            }
            else {
                if ($(this).parent().find(".racelist2").find(".curr").length > 0 && danCount + 1 < infoCount && danCount < 7) {
                    $(this).addClass("curr");
                    clickNumber();
                    cgCountent(infoCount, danCount);
                }
            }
            $("#btn").text("理论奖金 0~0 立即购买 0元");
            $("#guogchobut").val("过关方式(必选)");
        });
    }
}

function optHHGGSelect() {
    $(".zqtz").find("ul").find(".racelist").find(".betting_options").find(".optionslist").find("table").find("td").click(function () {
        if ($(this).attr("class")) {
            if ($(this).attr("class").indexOf("curr") >= 0) {
                $(this).removeClass("curr");
            }
            else {
                $(this).addClass("curr");
            }
        }
        else {
            $(this).addClass("curr");
        }
    });
}

function optBQCAllOk() {
    $(".zqtz").find("ul").find("li").find(".okbtn").click(function () {
        var text = "";
        $(this).parent().parent().find("ul").find(".curr").each(function (i, j) {
            text += $(j).find("span").slice(0, 1).html() + ",";
        });
        if (text == "") {
            text = "点击展开投注选项";
            $(this).parent().parent().parent().find("input").slice(0, 1).removeClass("selected");
        }
        else {
            text = text.substring(0, text.length - 1);
            $(this).parent().parent().parent().find("input").slice(0, 1).addClass("selected");
        }
        $(this).parent().parent().parent().find("input").slice(0, 1).val(text);
        $(this).parent().parent().hide();
        $(this).parent().parent().parent().find(".mask2").hide();
        totalMoney = 0;
        theoryMaxMoney = 0;
        theoryMinMoney = 0;
        $("#btn").text("理论奖金 0~0 立即购买 0元");
        if (gameType == 1) {
            clickNumber();
            cgCountent(infoCount, danCount);
            $("#guogchobut").val("过关方式(必选)");
        }
        else {
            danGuanClick();
        }
    });
    $(".zqtz").find("ul").find("li").find(".cancel").click(function () {
        $(this).parent().parent().hide();
        $(this).parent().parent().parent().find(".mask2").hide();
    });
}

function optBFAllOk() {
    $(".zqtz").find("ul").find("li").find(".okbtn").click(function () {
        var text = "";
        $(this).parent().parent().find(".tabcon").each(function (i, j) {
            $(j).find("ul").find(".curr").each(function (i1, j1) {
                text += $(j1).find("span").slice(0, 1).html() + ",";
            });
        })
        if (text == "") {
            text = "点击展开投注选项";
            $(this).parent().parent().parent().find("input").slice(0, 1).removeClass("selected");
        }
        else {
            text = text.substring(0, text.length - 1);
            $(this).parent().parent().parent().find("input").slice(0, 1).addClass("selected");
        }
        $(this).parent().parent().parent().find("input").slice(0, 1).val(text);
        $(this).parent().parent().hide();
        $(this).parent().parent().parent().find(".mask2").hide();
        totalMoney = 0;
        theoryMaxMoney = 0;
        theoryMinMoney = 0;
        $("#btn").text("理论奖金 0~0 立即购买 0元");
        if (gameType == 1) {
            clickNumber();
            cgCountent(infoCount, danCount);
            $("#guogchobut").val("过关方式(必选)");
        }
        else {
            danGuanClick();
        }
    });
    $(".zqtz").find("ul").find("li").find(".cancel").click(function () {
        $(this).parent().parent().hide();
        $(this).parent().parent().parent().find(".mask2").hide();
    });
}

function optHHGGAllOk() {
    $(".zqtz").find("ul").find(".racelist").find(".betting_options").find(".okbtn").click(function () {
        var nums = $(this).parent().parent().find(".optionslist").find("table").find(".curr").length;
        var text = "";
        if (nums == 0) {
            text = "点击展开投注选项";
            $(this).parent().parent().parent().find("input").slice(0, 1).removeClass("selected");
        }
        else {
            text = "已选择" + nums + "项";
            $(this).parent().parent().parent().find("input").slice(0, 1).addClass("selected");
        }
        $(this).parent().parent().parent().find("input").slice(0, 1).val(text);
        $(this).parent().parent().hide();
        $(this).parent().parent().parent().find(".mask2").hide();
        totalMoney = 0;
        theoryMaxMoney = 0;
        theoryMinMoney = 0;
        $("#btn").text("理论奖金 0~0 立即购买 0元");
        if (gameType == 1) {
            clickNumber();
            cgCountent(infoCount, danCount);
            $("#guogchobut").val("过关方式(必选)");
        }
        else {
            danGuanClick();
        }
    });
        $(".zqtz").find("ul").find(".racelist").find(".betting_options").find(".cancel").click(function () {
        $(this).parent().parent().hide();
        $(this).parent().parent().parent().find(".mask2").hide();
    });
}

function liMenuClick() {
    $(".zqtz").find("ul").find("li").each(function (i, j) {
        $(j).find(".racelist").find(".betting_options").find(".optionslist2").find(".tabli").find("li").each(function (i1, j1) {
            $(j1).click(function () {
                $(this).parent().find("li").removeClass("curr");
                $(this).addClass("curr");
                switch (i1) {
                    case 0:
                        $(this).parent().parent().find(".tabcon").slice(0, 1).attr("style","display:block");
                        $(this).parent().parent().find(".tabcon").slice(1, 3).hide();
                        break;
                    case 1:
                        $(this).parent().parent().find(".tabcon").slice(1, 2).attr("style", "display:block");
                        $(this).parent().parent().find(".tabcon").slice(0, 1).hide();
                        $(this).parent().parent().find(".tabcon").slice(2, 3).hide();
                        break;
                    case 2:
                        $(this).parent().parent().find(".tabcon").slice(2, 3).attr("style", "display:block");
                        $(this).parent().parent().find(".tabcon").slice(0, 2).hide();
                        break;
                    default:
                        break;
                }
            });
        });
    });
}

function still() {
    $("#still").click(function () {
        getOptInfo();
        if (gameType == 1) {
            setCookie("setInfoGG", infoCountent, 1);
            setCookie("setInfoGGDan", infoDan, 1);
            switch (LotteryType) {
                case 7201:
                    window.location.href = "JCZQ_RQSPF_GG.aspx?tag=1";
                    break;
                case 7202:
                    window.location.href = "JCZQ_BF_GG.aspx?tag=1";
                    break;
                case 7203:
                    window.location.href = "JCZQ_ZJQ_GG.aspx?tag=1";
                    break;
                case 7204:
                    window.location.href = "JCZQ_BQC_GG.aspx?tag=1";
                    break;
                case 7206:
                    window.location.href = "JCZQ_HHGG_GG.aspx?tag=1";
                    break;
                case 7207:
                    window.location.href = "JCZQ_SPF_GG.aspx?tag=1";
                    break;
                default:
                    break;
            }
        }
        else {
            setCookie("setInfoDG", infoCountent, 1);
            switch (LotteryType) {
                case 7201:
                    window.location.href = "JCZQ_RQSPF_GG.aspx?tag=2";
                    break;
                case 7202:
                    window.location.href = "JCZQ_BF_GG.aspx?tag=2";
                    break;
                case 7203:
                    window.location.href = "JCZQ_ZJQ_GG.aspx?tag=2";
                    break;
                case 7204:
                    window.location.href = "JCZQ_BQC_GG.aspx?tag=2";
                    break;
                case 7206:
                    window.location.href = "JCZQ_HHGG_GG.aspx?tag=1";
                    break;
                case 7207:
                    window.location.href = "JCZQ_SPF_GG.aspx?tag=2";
                    break;
                default:
                    break;
            }
        }
    });
}

function getOptInfo() {
    infoCountent = "";
    infoDan = "";
    infoNumber = 0;
    switch (LotteryType) {
        case 7201:
        case 7207:
            $(".zqtz").find("ul").find(".spf").each(function (i, j) {
                if ($(j).find(".curr").length > 0) {
                    infoNumber++;
                    infoCountent += $(j).attr("id") + ",";
                    var num = 0;
                    $(j).find("span").each(function (i1, j1) {
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
                    infoCountent += num + "-";
                }
                if (gameType == 1) {
                    if ($(j).parent().parent().find(".racedan").attr("class").indexOf("curr") >= 0) {
                        infoDan += $(j).attr("id") + ",";
                    }
                }
            });
            break;
        case 7202:
            $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                if ($(j).find(".selected").length > 0) {
                    infoNumber++;
                    infoCountent += $(j).parent().attr("id") + "*";
                    infoCountent += $(j).find(".selected").val() + "-";
                }
                if (gameType == 1) {
                    if ($(j).parent().find(".racedan").attr("class").indexOf("curr") >= 0) {
                        infoDan += $(j).parent().attr("id") + ",";
                    }
                }
            });
            break;
        case 7203:
            $(".zqtz").find("ul").find(".eventjzzjq").each(function (i, j) {
                if ($(j).find(".curr").length > 0) {
                    infoNumber++;
                    infoCountent += $(j).attr("id") + "*";
                    var num = "";
                    $(j).find("span").each(function (i1, j1) {
                        if ($(j1).attr("class")) {
                            num += i1 + ",";
                        }
                    });
                    if (num != "") {
                        num = num.substring(0, num.length - 1);
                    }
                    infoCountent += num + "-";
                }
                if (gameType == 1) {
                    if ($(j).parent().parent().find(".racedan").attr("class").indexOf("curr") >= 0) {
                        infoDan += $(j).attr("id") + ",";
                    }
                }
            });
            break;
        case 7204:
            $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                if ($(j).find(".selected").length > 0) {
                    infoNumber++;
                    infoCountent += $(j).parent().attr("id") + "*";
                    infoCountent += $(j).find(".selected").val() + "-";
                }
                if (gameType == 1) {
                    if ($(j).parent().find(".racedan").attr("class").indexOf("curr") >= 0) {
                        infoDan += $(j).parent().attr("id") + ",";
                    }
                }
            });
            break;
        case 7206:
            var spf = 0;
            var rqspf = 0;
            var bf = "";
            var zjq = "";
            var bqc = "";
            $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                spf = 0;
                rqspf = 0;
                bf = "";
                zjq = "";
                bqc = "";
                $(j).find(".betting_options").find(".optionslist").slice(0, 1).find("table").find("td").each(function (i1, j1) {
                    if ($(j1).attr("class")) {
                        //                    alert($(j1).attr("class") + ".." + i1);
                        if ($(j1).attr("class").indexOf("curr") >= 0) {
                            switch (i1) {
                                case 0:
                                    spf += 100;
                                    break;
                                case 1:
                                    spf += 10;
                                    break;
                                case 2:
                                    spf += 1;
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                });
                $(j).find(".betting_options").find(".optionslist").slice(1, 2).find("table").find("td").each(function (i1, j1) {
                    if ($(j1).attr("class")) {
                        if ($(j1).attr("class").indexOf("curr") >= 0) {
                            switch (i1) {
                                case 0:
                                    rqspf += 100;
                                    break;
                                case 1:
                                    rqspf += 10;
                                    break;
                                case 2:
                                    rqspf += 1;
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                });
                $(j).find(".betting_options").find(".optionslist").slice(2, 3).find("table").find("td").each(function (i1, j1) {
                    if ($(j1).attr("class")) {
                        if ($(j1).attr("class").indexOf("curr") >= 0) {
                            bf += i1 + ",";
                        }
                    }
                });
                if (bf != "") {
                    bf = bf.substring(0, bf.length - 1);
                }
                $(j).find(".betting_options").find(".optionslist").slice(3, 4).find("table").find("td").each(function (i1, j1) {
                    if ($(j1).attr("class")) {
                        if ($(j1).attr("class").indexOf("curr") >= 0) {
                            zjq += i1 + ",";
                        }
                    }
                });
                if (zjq != "") {
                    zjq = zjq.substring(0, zjq.length - 1);
                }
                $(j).find(".betting_options").find(".optionslist").slice(4, 5).find("table").find("td").each(function (i1, j1) {
                    if ($(j1).attr("class")) {
                        if ($(j1).attr("class").indexOf("curr") >= 0) {
                            bqc += i1 + ",";
                        }
                    }
                });
                if (bqc != "") {
                    bqc = bqc.substring(0, bqc.length - 1);
                }
                if (bf + zjq + bqc != "" || spf + rqspf != 0) {
                    infoNumber++;
                    infoCountent += $(j).find(".betting_options").attr("id") + "+";
                    infoCountent += spf + "*" + rqspf + "*" + bf + "*" + zjq + "*" + bqc + "-";
                }
            });
            break;
        default:
            break;
    }
    infoCountent = infoCountent.substring(0, infoCountent.length - 1);
    infoDan = infoDan.substring(0, infoDan.length - 1);
}

function getIsuseInfo() {
    $.ajax({
        type: "Post",
        url: "../Ajax/wapRequest.ashx",
        data: {
            opt: "10",
            info: "{\"lotteryId\":\"" + LotteryId + "\",\"playType\":\"" + (LotteryType == 7206 ? -1 : LotteryType) + "\"}"
        },
        cache: false,
        async: false,
        dataType: "json",
        success: function (data) {
            loadInfo(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            E.showToast("调用错误！", "50%", "error", "1000");
        }
    });
}

function loadInfo(data) {
    var htmlcountent = "";
    if (gameType == 1) {
        infoCountent = getCookie("setInfoGG");
        switch (LotteryType) {
            case 7201:
                var listinfo = infoCountent.split("-");
                if (data.dtMatch[0].table1.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table1.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table1[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getRQSPFinfo(parseInt(listinfo[j].split(",")[1]), data.dtMatch[0].table1[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table2.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table2.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table2[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getRQSPFinfo(parseInt(listinfo[j].split(",")[1]), data.dtMatch[0].table2[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table3.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table3.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table3[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getRQSPFinfo(parseInt(listinfo[j].split(",")[1]), data.dtMatch[0].table3[i]);
                            }
                        }
                    }
                }
                $(".zqtz").find("ul").html(htmlcountent);
                optSelect();
                delRow();
                clickNumber();
                cgCountent(infoCount, danCount);
                break;
            case 7202:
                var listinfo = infoCountent.split("-");
                if (data.dtMatch[0].table1.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table1.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table1[i].matchId == listinfo[j].split("*")[0]) {
                                htmlcountent += getBFinfo(listinfo[j].split("*")[1], data.dtMatch[0].table1[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table2.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table2.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table2[i].matchId == listinfo[j].split("*")[0]) {
                                htmlcountent += getBFinfo(listinfo[j].split("*")[1], data.dtMatch[0].table2[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table3.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table3.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table3[i].matchId == listinfo[j].split("*")[0]) {
                                htmlcountent += getBFinfo(listinfo[j].split("*")[1], data.dtMatch[0].table3[i]);
                            }
                        }
                    }
                }
                $(".zqtz").find("ul").html(htmlcountent);
                developCountent();
                liMenuClick();
                optBFSelect();
                optBFAllOk();
                delRow();
                clickNumber();
                cgCountent(infoCount, danCount);
                break;
            case 7203:
                var listinfo = infoCountent.split("-");
                if (data.dtMatch[0].table1.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table1.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table1[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getZJQinfo(listinfo[j].split(",")[1], data.dtMatch[0].table1[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table2.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table2.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table2[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getZJQinfo(listinfo[j].split(",")[1], data.dtMatch[0].table2[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table3.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table3.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table3[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getZJQinfo(listinfo[j].split(",")[1], data.dtMatch[0].table3[i]);
                            }
                        }
                    }
                }
                $(".zqtz").find("ul").html(htmlcountent);
                optZJQSelect();
                delRow();
                clickNumber();
                cgCountent(infoCount, danCount);
                break;
            case 7204:
                var listinfo = infoCountent.split("-");
                if (data.dtMatch[0].table1.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table1.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table1[i].matchId == listinfo[j].split("*")[0]) {
                                htmlcountent += getBQCinfo(listinfo[j].split("*")[1], data.dtMatch[0].table1[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table2.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table2.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table2[i].matchId == listinfo[j].split("*")[0]) {
                                htmlcountent += getBQCinfo(listinfo[j].split("*")[1], data.dtMatch[0].table2[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table3.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table3.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table3[i].matchId == listinfo[j].split("*")[0]) {
                                htmlcountent += getBQCinfo(listinfo[j].split("*")[1], data.dtMatch[0].table3[i]);
                            }
                        }
                    }
                }
                $(".zqtz").find("ul").html(htmlcountent);
                developCountent();
                optBQCSelect();
                optBQCAllOk();
                delRow();
                clickNumber();
                cgCountent(infoCount, danCount);
                break;
            case 7206:
                var listinfo = infoCountent.split("-");
                if (data.dtMatch[0].table1.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table1.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table1[i].matchId == listinfo[j].split("+")[0]) {
                                htmlcountent += getHHGGinfo(listinfo[j].split("+")[1], data.dtMatch[0].table1[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table2.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table2.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table2[i].matchId == listinfo[j].split("+")[0]) {
                                htmlcountent += getHHGGinfo(listinfo[j].split("+")[1], data.dtMatch[0].table2[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table3.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table3.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table3[i].matchId == listinfo[j].split("+")[0]) {
                                htmlcountent += getHHGGinfo(listinfo[j].split("+")[1], data.dtMatch[0].table3[i]);
                            }
                        }
                    }
                }
                $(".zqtz").find("ul").html(htmlcountent);
                developCountent();
                optHHGGSelect();
                optHHGGAllOk();
                delRow();
                clickNumber();
                cgCountent(infoCount, danCount);
                break;
            case 7207:
                var listinfo = infoCountent.split("-");
                if (data.dtMatch[0].table1.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table1.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table1[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getSPFinfo(parseInt(listinfo[j].split(",")[1]), data.dtMatch[0].table1[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table2.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table2.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table2[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getSPFinfo(parseInt(listinfo[j].split(",")[1]), data.dtMatch[0].table2[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table3.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table3.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table3[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getSPFinfo(parseInt(listinfo[j].split(",")[1]), data.dtMatch[0].table3[i]);
                            }
                        }
                    }
                }
                $(".zqtz").find("ul").html(htmlcountent);
                optSelect();
                delRow();
                clickNumber();
                cgCountent(infoCount, danCount);
                break;
            default:
                break;
        }
    }
    else {
        infoCountent = getCookie("setInfoDG");
        switch (LotteryType) {
            case 7201:
                var listinfo = infoCountent.split("-");
                if (data.Singlepass[0].table1.length > 0) {
                    for (var i = 0; i < data.Singlepass[0].table1.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.Singlepass[0].table1[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getRQSPFinfo(parseInt(listinfo[j].split(",")[1]), data.Singlepass[0].table1[i]);
                            }
                        }
                    }
                }
                if (data.Singlepass[0].table2.length > 0) {
                    for (var i = 0; i < data.Singlepass[0].table2.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.Singlepass[0].table2[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getRQSPFinfo(parseInt(listinfo[j].split(",")[1]), data.Singlepass[0].table2[i]);
                            }
                        }
                    }
                }
                if (data.Singlepass[0].table3.length > 0) {
                    for (var i = 0; i < data.Singlepass[0].table3.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.Singlepass[0].table3[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getRQSPFinfo(parseInt(listinfo[j].split(",")[1]), data.Singlepass[0].table3[i]);
                            }
                        }
                    }
                }
                $(".zqtz").find("ul").html(htmlcountent);
                optSelect();
                delRow();
                danGuanClick();
                $("#guogchobut").val("单关");
                $("#guogchobut").unbind("click");
                break;
            case 7202:
                var listinfo = infoCountent.split("-");
                if (data.dtMatch[0].table1.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table1.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table1[i].matchId == listinfo[j].split("*")[0]) {
                                htmlcountent += getBFinfo(listinfo[j].split("*")[1], data.dtMatch[0].table1[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table2.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table2.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table2[i].matchId == listinfo[j].split("*")[0]) {
                                htmlcountent += getBFinfo(listinfo[j].split("*")[1], data.dtMatch[0].table2[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table3.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table3.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table3[i].matchId == listinfo[j].split("*")[0]) {
                                htmlcountent += getBFinfo(listinfo[j].split("*")[1], data.dtMatch[0].table3[i]);
                            }
                        }
                    }
                }
                $(".zqtz").find("ul").html(htmlcountent);
                developCountent();
                liMenuClick();
                optBFSelect();
                optBFAllOk();
                delRow();
                danGuanClick();
                $("#guogchobut").val("单关");
                $("#guogchobut").unbind("click");
                break;
            case 7203:
                var listinfo = infoCountent.split("-");
                if (data.Singlepass[0].table1.length > 0) {
                    for (var i = 0; i < data.Singlepass[0].table1.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.Singlepass[0].table1[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getZJQinfo(listinfo[j].split(",")[1], data.Singlepass[0].table1[i]);
                            }
                        }
                    }
                }
                if (data.Singlepass[0].table2.length > 0) {
                    for (var i = 0; i < data.Singlepass[0].table2.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.Singlepass[0].table2[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getZJQinfo(listinfo[j].split(",")[1], data.Singlepass[0].table2[i]);
                            }
                        }
                    }
                }
                if (data.Singlepass[0].table3.length > 0) {
                    for (var i = 0; i < data.Singlepass[0].table3.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.Singlepass[0].table3[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getZJQinfo(listinfo[j].split(",")[1], data.Singlepass[0].table3[i]);
                            }
                        }
                    }
                }
                $(".zqtz").find("ul").html(htmlcountent);
                optZJQSelect();
                delRow();
                danGuanClick();
                $("#guogchobut").val("单关");
                $("#guogchobut").unbind("click");
                break;
            case 7204:
                var listinfo = infoCountent.split("-");
                if (data.Singlepass[0].table1.length > 0) {
                    for (var i = 0; i < data.Singlepass[0].table1.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.Singlepass[0].table1[i].matchId == listinfo[j].split("*")[0]) {
                                htmlcountent += getBQCinfo(listinfo[j].split("*")[1], data.Singlepass[0].table1[i]);
                            }
                        }
                    }
                }
                if (data.Singlepass[0].table2.length > 0) {
                    for (var i = 0; i < data.Singlepass[0].table2.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.Singlepass[0].table2[i].matchId == listinfo[j].split("*")[0]) {
                                htmlcountent += getBQCinfo(listinfo[j].split("*")[1], data.Singlepass[0].table2[i]);
                            }
                        }
                    }
                }
                if (data.Singlepass[0].table3.length > 0) {
                    for (var i = 0; i < data.Singlepass[0].table3.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.Singlepass[0].table3[i].matchId == listinfo[j].split("*")[0]) {
                                htmlcountent += getBQCinfo(listinfo[j].split("*")[1], data.Singlepass[0].table3[i]);
                            }
                        }
                    }
                }
                $(".zqtz").find("ul").html(htmlcountent);
                developCountent();
                optBQCSelect();
                optBQCAllOk();
                delRow();
                danGuanClick();
                $("#guogchobut").val("单关");
                $("#guogchobut").unbind("click");
                break;
            case 7206:
                var listinfo = infoCountent.split("-");
                if (data.dtMatch[0].table1.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table1.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table1[i].matchId == listinfo[j].split("+")[0]) {
                                htmlcountent += getHHGGinfo(listinfo[j].split("+")[1], data.dtMatch[0].table1[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table2.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table2.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table2[i].matchId == listinfo[j].split("+")[0]) {
                                htmlcountent += getHHGGinfo(listinfo[j].split("+")[1], data.dtMatch[0].table2[i]);
                            }
                        }
                    }
                }
                if (data.dtMatch[0].table3.length > 0) {
                    for (var i = 0; i < data.dtMatch[0].table3.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.dtMatch[0].table3[i].matchId == listinfo[j].split("+")[0]) {
                                htmlcountent += getHHGGinfo(listinfo[j].split("+")[1], data.dtMatch[0].table3[i]);
                            }
                        }
                    }
                }
                $(".zqtz").find("ul").html(htmlcountent);
                developCountent();
                optHHGGSelect();
                optHHGGAllOk();
                delRow();
                danGuanClick();
                $("#guogchobut").val("单关");
                $("#guogchobut").unbind("click");
                break;
            case 7207:
                var listinfo = infoCountent.split("-");
                if (data.Singlepass[0].table1.length > 0) {
                    for (var i = 0; i < data.Singlepass[0].table1.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            //                                                                alert(data.Singlepass[0].table1[i].matchId);
                            if (data.Singlepass[0].table1[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getSPFinfo(parseInt(listinfo[j].split(",")[1]), data.Singlepass[0].table1[i]);
                            }
                        }
                    }
                }
                if (data.Singlepass[0].table2.length > 0) {
                    for (var i = 0; i < data.Singlepass[0].table2.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.Singlepass[0].table2[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getSPFinfo(parseInt(listinfo[j].split(",")[1]), data.Singlepass[0].table2[i]);
                            }
                        }
                    }
                }
                if (data.Singlepass[0].table3.length > 0) {
                    for (var i = 0; i < data.Singlepass[0].table3.length; i++) {
                        for (var j = 0; j < listinfo.length; j++) {
                            if (data.Singlepass[0].table3[i].matchId == listinfo[j].split(",")[0]) {
                                htmlcountent += getSPFinfo(parseInt(listinfo[j].split(",")[1]), data.Singlepass[0].table3[i]);
                            }
                        }
                    }
                }
                $(".zqtz").find("ul").html(htmlcountent);
                optSelect();
                delRow();
                danGuanClick();
                $("#guogchobut").val("单关");
                $("#guogchobut").unbind("click");
                break;
            default:
                break;
        }
    }
}

function getSPFinfo(num, info) {
    var str = "";
    var win = "";
    var flat = "";
    var lose = "";
    str += "<li>";
    str += "<div class=\"delbut\"><input type=\"button\" value=\"删除\"></div>";
    str += "<div class=\"raceteam\"><span>" + info.mainTeam + "<i></i></span><b>VS</b><span>" + info.guestTeam + "<i></i></span></div>";
    str += "<div class=\"racelist\">";
    str += "<div class=\"spf\" id=\"" + info.matchId + "\">";
    switch (num) {
        case 1:
            win = "";
            flat = "";
            lose = " curr";
            break;
        case 10:
            win = "";
            flat = " curr";
            lose = "";
            break;
        case 11:
            win = "";
            flat = " curr";
            lose = " curr";
            break;
        case 100:
            win = " curr";
            flat = "";
            lose = "";
            break;
        case 101:
            win = " curr";
            flat = "";
            lose = " curr";
            break;
        case 110:
            win = " curr";
            flat = " curr";
            lose = "";
            break;
        case 111:
            win = " curr";
            flat = " curr";
            lose = " curr";
            break;
        default:
            break;
    }
    str += "<span class=\"k_sheng" + win + "\">主胜<i>" + (gameType == 1 ? info.win : info.spfwin) + "</i></span>";
    str += "<span class=\"k_ping" + flat + "\">平<i>" + (gameType == 1 ? info.flat : info.spfflat) + "</i></span>";
    str += "<span class=\"k_fu" + lose + "\">客胜<i>" + (gameType == 1 ? info.lose : info.spflose) + "</i></span>";
    str += "</div>";
    str += "</div>";
    var infoDan = "";
    if (gameType == 1) {
        infoDan = getCookie("setInfoGGDan");
        var tag = false;
        if (infoDan != null && infoDan != "") {
            infoDan = infoDan.split(",");
            for (var i = 0; i < infoDan.length; i++) {
                if (infoDan[i] == info.matchId) {
                    tag = true;
                }
            }
        }
        if (tag) {
            str += "<div class=\"racedan curr\">胆</div>";
        }
        else {
            str += "<div class=\"racedan\">胆</div>";
        }
    }
    str += "</li>";
    return str;
}

function getRQSPFinfo(num, info) {
    var str = "";
    var win = "";
    var flat = "";
    var lose = "";
    str += "<li>";
    str += "<div class=\"delbut\"><input type=\"button\" value=\"删除\"></div>";
    str += "<div class=\"raceteam\"><span>" + info.mainTeam + "<i></i></span><b>" + info.mainLoseBall + "</b><span>" + info.guestTeam + "<i></i></span></div>";
    str += "<div class=\"racelist\">";
    str += "<div class=\"spf\" id=\"" + info.matchId + "\">";
    switch (num) {
        case 1:
            win = "";
            flat = "";
            lose = " curr";
            break;
        case 10:
            win = "";
            flat = " curr";
            lose = "";
            break;
        case 11:
            win = "";
            flat = " curr";
            lose = " curr";
            break;
        case 100:
            win = " curr";
            flat = "";
            lose = "";
            break;
        case 101:
            win = " curr";
            flat = "";
            lose = " curr";
            break;
        case 110:
            win = " curr";
            flat = " curr";
            lose = "";
            break;
        case 111:
            win = " curr";
            flat = " curr";
            lose = " curr";
            break;
        default:
            break;
    }
    str += "<span class=\"k_sheng" + win + "\">主胜<i>" + info.win + "</i></span>";
    str += "<span class=\"k_ping" + flat + "\">平<i>" + info.flat + "</i></span>";
    str += "<span class=\"k_fu" + lose + "\">客胜<i>" + info.lose + "</i></span>";
    str += "</div>";
    str += "</div>";
    var infoDan = "";
    if (gameType == 1) {
        infoDan = getCookie("setInfoGGDan");
        var tag = false;
        if (infoDan != null && infoDan != "") {
            infoDan = infoDan.split(",");
            for (var i = 0; i < infoDan.length; i++) {
                if (infoDan[i] == info.matchId) {
                    tag = true;
                }
            }
        }
        if (tag) {
            str += "<div class=\"racedan curr\">胆</div>";
        }
        else {
            str += "<div class=\"racedan\">胆</div>";
        }
    }
    str += "</li>";
    return str;
}

function getBQCinfo(num, info) {
    var str = "";
    var ss = "";
    var sp = "";
    var sf = "";
    var ps = "";
    var pp = "";
    var pf = "";
    var fs = "";
    var fp = "";
    var ff = "";
    str += "<li id=\"" + info.matchId + "\">";
    str += "<div class=\"delbut\"><input type=\"button\" value=\"删除\"></div>";
    str += "<div class=\"raceteam\"><span>" + info.mainTeam + "</span><b>VS</b><span>" + info.guestTeam + "</span></div>";
    str += "<div class=\"racelist\">";
    str += "<input class=\"selected\" type=\"button\" value=\"" + num + "\">";
    str += "<div class=\"betting_options\">";
    str += "<div class=\"optionshead\">";
    str += "<span>" + info.mainTeam + "</span>";
    str += "<span>vs</span>";
    str += "<span>" + info.guestTeam + "</span>";
    str += "</div>";
    str += "<div class=\"waninfo\">竞猜主队在上半场和全场比赛（不含加时和点球）的胜平负结果</div>";
    str += "<div class=\"optionslist\">";
    str += "<div class=\"optionsname whitebg\">半全场</div>";
    str += "<ul class=\"sfc\">";
    var list = num.split(",");
    for (var i = 0; i < list.length; i++) {
        switch (list[i]) {
            case "胜胜":
                ss = "curr";
                break;
            case "胜平":
                sp = "curr";
                break;
            case "胜负":
                sf = "curr";
                break;
            case "平胜":
                ps = "curr";
                break;
            case "平平":
                pp = "curr";
                break;
            case "平负":
                pf = "curr";
                break;
            case "负胜":
                fs = "curr";
                break;
            case "负平":
                fp = "curr";
                break;
            case "负负":
                ff = "curr";
                break;
            default:
                break;
        }
    }
    str += "<li class=\"bqc\"><div class=\"optname " + ss + "\"><span>胜胜</span><span>" + info.ss + "</span></div></li>";
    str += "<li class=\"bqc\"><div class=\"optname " + sp + "\"><span>胜平</span><span>" + info.ss + "</span></div></li>";
    str += "<li class=\"bqc\"><div class=\"optname " + sf + "\"><span>胜负</span><span>" + info.sf + "</span></div></li>";
    str += "<li class=\"bqc\"><div class=\"optname " + ps + "\"><span>平胜</span><span>" + info.ps + "</span></div></li>";
    str += "<li class=\"bqc\"><div class=\"optname " + pp + "\"><span>平平</span><span>" + info.pp + "</span></div></li>";
    str += "<li class=\"bqc\"><div class=\"optname " + pf + "\"><span>平负</span><span>" + info.pf + "</span></div></li>";
    str += "<li class=\"bqc\"><div class=\"optname " + fs + "\"><span>负胜</span><span>" + info.fs + "</span></div></li>";
    str += "<li class=\"bqc\"><div class=\"optname " + fp + "\"><span>负平</span><span>" + info.fp + "</span></div></li>";
    str += "<li class=\"bqc\"><div class=\"optname " + ff + "\"><span>负负</span><span>" + info.ff + "</span></div></li>";
    str += "</ul>";
    str += "</div>";
    str += "<div class=\"optionsbut\"><input type=\"button\" class=\"cancel\" value=\"取消\"><input class=\"okbtn\" type=\"button\" value=\"确定\"></div>";
    str += "</div>";
    str += "<div class=\"mask2\"></div>";
    str += "</div>";
    var infoDan = "";
    if (gameType == 1) {
        infoDan = getCookie("setInfoGGDan");
        var tag = false;
        if (infoDan != null && infoDan != "") {
            infoDan = infoDan.split(",");
            for (var i = 0; i < infoDan.length; i++) {
                if (infoDan[i] == info.matchId) {
                    tag = true;
                }
            }
        }
        if (tag) {
            str += "<div class=\"racedan curr\">胆</div>";
        }
        else {
            str += "<div class=\"racedan\">胆</div>";
        }
    }
    str += "</li>";
    return str;
}

function getBFinfo(num, info) {
    var str = "";
    var s10 = "";
    var s20 = "";
    var s21 = "";
    var s30 = "";
    var s31 = "";
    var s32 = "";
    var s40 = "";
    var s41 = "";
    var s42 = "";
    var s50 = "";
    var s51 = "";
    var s52 = "";
    var sqt = "";
    var p00 = "";
    var p11 = "";
    var p22 = "";
    var p33 = "";
    var pqt = "";
    var ftr = "";
    var f01 = "";
    var f02 = "";
    var f12 = "";
    var f03 = "";
    var f13 = "";
    var f23 = "";
    var f04 = "";
    var f14 = "";
    var f24 = "";
    var f05 = "";
    var f15 = "";
    var f25 = "";
    var fqt = "";
    var list = num.split(",");
    for (var i = 0; i < list.length; i++) {
        switch (list[i]) {
            case "1:0":
                s10 = "curr";
                break;
            case "2:0":
                s20 = "curr";
                break;
            case "2:1":
                s21 = "curr";
                break;
            case "3:0":
                s30 = "curr";
                break;
            case "3:1":
                s31 = "curr";
                break;
            case "3:2":
                s32 = "curr";
                break;
            case "4:0":
                s40 = "curr";
                break;
            case "4:1":
                s41 = "curr";
                break;
            case "4:2":
                s42 = "curr";
                break;
            case "5:0":
                s50 = "curr";
                break;
            case "5:1":
                s51 = "curr";
                break;
            case "5:2":
                s52 = "curr";
                break;
            case "胜其它":
                sqt = " curr";
                break;
            case "1:1":
                p11 = "curr";
                break;
            case "2:2":
                p22 = "curr";
                break;
            case "3:3":
                p33 = "curr";
                break;
            case "4:4":
                p44 = "curr";
                break;
            case "平其它":
                pqt = " curr";
                break;
            case "0:1":
                f01 = "curr";
                break;
            case "0:2":
                f02 = "curr";
                break;
            case "1:2":
                f12 = "curr";
                break;
            case "0:3":
                f03 = "curr";
                break;
            case "1:3":
                f13 = "curr";
                break;
            case "2:3":
                f23 = "curr";
                break;
            case "0:4":
                f04 = "curr";
                break;
            case "1:4":
                f14 = "curr";
                break;
            case "2:4":
                f24 = "curr";
                break;
            case "0:5":
                f05 = "curr";
                break;
            case "1:5":
                f15 = "curr";
                break;
            case "2:5":
                f25 = "curr";
                break;
            case "负其它":
                fqt = " curr";
                break;
            default:
                break;
        }
    }
    str += "<li id=\"" + info.matchId + "\">";
    str += "<div class=\"delbut\"><input type=\"button\" value=\"删除\"></div>";
    str += "<div class=\"raceteam\"><span>" + info.mainTeam + "</span><b>VS</b><span>" + info.guestTeam + "</span> </div>";
    str += "<div class=\"racelist\">";
    str += "<input class=\"selected\" type=\"button\" value=\"" + num + "\">";
    str += "<div class=\"betting_options\">";
    str += "<div class=\"optionshead\">";
    str += "<span>" + info.mainTeam + "</span>";
    str += "<span>vs</span>";
    str += "<span>" + info.guestTeam + "</span>";
    str += "</div>";
    str += "<div class=\"optionslist2\">";
    str += "<ul class=\"tabli\">";
    str += "<li class=\"curr\">主胜</li>";
    str += "<li>平</li>";
    str += "<li>客胜</li>";
    str += "</ul>";
    str += "<div class=\"tabcon\" style=\"display:block\">";
    str += "<ul>";
    str += "<li class=\"" + s10 + "\"><div><span>1:0</span><span>" + info.s10 + "</span></div></li>";
    str += "<li class=\"" + s20 + "\"><div><span>2:0</span><span>" + info.s20 + "</span></div></li>";
    str += "<li class=\"" + s21 + "\"><div><span>2:1</span><span>" + info.s21 + "</span></div></li>";
    str += "<li class=\"" + s30 + "\"><div><span>3:0</span><span>" + info.s30 + "</span></div></li>";
    str += "<li class=\"" + s31 + "\"><div><span>3:1</span><span>" + info.s31 + "</span></div></li>";
    str += "<li class=\"" + s32 + "\"><div><span>3:2</span><span>" + info.s32 + "</span></div></li>";
    str += "<li class=\"" + s40 + "\"><div><span>4:0</span><span>" + info.s40 + "</span></div></li>";
    str += "<li class=\"" + s41 + "\"><div><span>4:1</span><span>" + info.s41 + "</span></div></li>";
    str += "<li class=\"" + s42 + "\"><div><span>4:2</span><span>" + info.s42 + "</span></div></li>";
    str += "<li class=\"" + s50 + "\"><div><span>5:0</span><span>" + info.s50 + "</span></div></li>";
    str += "<li class=\"" + s51 + "\"><div><span>5:1</span><span>" + info.s51 + "</span></div></li>";
    str += "<li class=\"" + s52 + "\"><div><span>5:2</span><span>" + info.s52 + "</span></div></li>";
    str += "<li class=\"looqi" + sqt + "\"><div><span>胜其它</span><span>" + info.sother + "</span></div></li>";
    str += "</ul>";
    str += "</div>";
    str += "<div class=\"tabcon\">";
    str += "<ul>";
    str += "<li class=\"" + p00 + "\"><div><span>0:0</span><span>" + info.p00 + "</span></div></li>";
    str += "<li class=\"" + p11 + "\"><div><span>1:1</span><span>" + info.p11 + "</span></div></li>";
    str += "<li class=\"" + p22 + "\"><div><span>2:2</span><span>" + info.p22 + "</span></div></li>";
    str += "<li class=\"" + p33 + "\"><div><span>3:3</span><span>" + info.p33 + "</span></div></li>";
    str += "<li class=\"looqi" + pqt + "\"><div><span>平其他</span><span>" + info.pother + "</span></div></li>";
    str += "</ul>";
    str += "</div>";
    str += "<div class=\"tabcon\">";
    str += "<ul>";
    str += "<li class=\"" + f01 + "\"><div><span>0:1</span><span>" + info.f01 + "</span></div></li>";
    str += "<li class=\"" + f02 + "\"><div><span>0:2</span><span>" + info.f02 + "</span></div></li>";
    str += "<li class=\"" + f12 + "\"><div><span>1:2</span><span>" + info.f12 + "</span></div></li>";
    str += "<li class=\"" + f03 + "\"><div><span>0:3</span><span>" + info.f03 + "</span></div></li>";
    str += "<li class=\"" + f13 + "\"><div><span>1:3</span><span>" + info.f13 + "</span></div></li>";
    str += "<li class=\"" + f23 + "\"><div><span>2:3</span><span>" + info.f23 + "</span></div></li>";
    str += "<li class=\"" + f04 + "\"><div><span>0:4</span><span>" + info.f04 + "</span></div></li>";
    str += "<li class=\"" + f14 + "\"><div><span>1:4</span><span>" + info.f14 + "</span></div></li>";
    str += "<li class=\"" + f24 + "\"><div><span>2:4</span><span>" + info.f24 + "</span></div></li>";
    str += "<li class=\"" + f05 + "\"><div><span>0:5</span><span>" + info.f05 + "</span></div></li>";
    str += "<li class=\"" + f15 + "\"><div><span>1:5</span><span>" + info.f15 + "</span></div></li>";
    str += "<li class=\"" + f25 + "\"><div><span>2:5</span><span>" + info.f25 + "</span></div></li>";
    str += "<li class=\"looqi" + fqt + "\"><div><span>负其他</span><span>" + info.fother + "</span></div></li>";
    str += "</ul>";
    str += "</div>";
    str += "</div>";
    str += "<div class=\"optionsbut\"><input type=\"button\" class=\"cancel\" value=\"取消\"><input class=\"okbtn\" type=\"button\" value=\"确定\"></div>";
    str += "</div>";
    str += "<div class=\"mask2\"></div>";
    str += "</div>";
    //    str += "<div class=\"racedan\">胆</div>";
    var infoDan = "";
    if (gameType == 1) {
        infoDan = getCookie("setInfoGGDan");
        var tag = false;
        if (infoDan != null && infoDan != "") {
            infoDan = infoDan.split(",");
            for (var i = 0; i < infoDan.length; i++) {
                if (infoDan[i] == info.matchId) {
                    tag = true;
                }
            }
        }
        if (tag) {
            str += "<div class=\"racedan curr\">胆</div>";
        }
        else {
            str += "<div class=\"racedan\">胆</div>";
        }
    }
    str += "</li>";
    return str;
}

function getZJQinfo(num, info) {
    var str = "";
    var i0 = "";
    var i1 = "";
    var i2 = "";
    var i3 = "";
    var i4 = "";
    var i5 = "";
    var i6 = "";
    var i7 = "";
    str += "<li>";
    str += "<div class=\"delbut\"><input type=\"button\" value=\"删除\"></div>";
    str += "<div class=\"raceteam\"><span>" + info.mainTeam + "<i></i></span><b>VS</b><span>" + info.guestTeam + "<i></i></span></div>";
    str += "<div class=\"racelist2\">";
    str += "<div class=\"eventjzzjq\" id=\"" + info.matchId + "\">";
    var list = num.split("*");
    for (var i = 0; i < list.length; i++) {
        switch (list[i]) {
            case "0":
                i0 = " curr";
                break;
            case "1":
                i1 = " curr";
                break;
            case "2":
                i2 = " curr";
                break;
            case "3":
                i3 = " curr";
                break;
            case "4":
                i4 = " curr";
                break;
            case "5":
                i5 = " curr";
                break;
            case "6":
                i6 = " curr";
                break;
            case "7":
                i7 = " curr";
                break;
            default:
                break;
        }
    }
    str += "<div class=\"zjq\"><span class=\"" + i0 + "\">0 <i>" + info.in0 + "</i></span></div>";
    str += "<div class=\"zjq\"><span class=\"" + i1 + "\">1 <i>" + info.in1 + "</i></span></div>";
    str += "<div class=\"zjq\"><span class=\"" + i2 + "\">2 <i>" + info.in2 + "</i></span></div>";
    str += "<div class=\"zjq\"><span class=\"" + i3 + "\">3 <i>" + info.in3 + "</i></span></div>";
    str += "<div class=\"zjq\"><span class=\"" + i4 + "\">4 <i>" + info.in4 + "</i></span></div>";
    str += "<div class=\"zjq\"><span class=\"" + i5 + "\">5 <i>" + info.in5 + "</i></span></div>";
    str += "<div class=\"zjq\"><span class=\"" + i6 + "\">6 <i>" + info.in6 + "</i></span></div>";
    str += "<div class=\"zjq\"><span class=\"" + i7 + "\">7+ <i>" + info.in7 + "</i></span></div>";
    str += "</div>";
    str += "</div>";
    var infoDan = "";
    if (gameType == 1) {
        infoDan = getCookie("setInfoGGDan");
        var tag = false;
        if (infoDan != null && infoDan != "") {
            infoDan = infoDan.split(",");
            for (var i = 0; i < infoDan.length; i++) {
                if (infoDan[i] == info.matchId) {
                    tag = true;
                }
            }
        }
        if (tag) {
            str += "<div class=\"racedan curr\">胆</div>";
        }
        else {
            str += "<div class=\"racedan\">胆</div>";
        }
    }
    str += "</li>";
    return str;
}

function getHHGGinfo(num, info) {
    var co = 0;
    var list = num.split("*");
    var lists = [];
    var str = "";
    var win = "";
    var flat = "";
    var lose = "";
    if (list[0] != "") {
        switch (parseInt(list[0])) {
            case 1:
                win = "";
                flat = "";
                lose = " curr";
                co += 1;
                break;
            case 10:
                win = "";
                flat = " curr";
                lose = "";
                co += 1;
                break;
            case 11:
                win = "";
                flat = " curr";
                lose = " curr";
                co += 2;
                break;
            case 100:
                win = " curr";
                flat = "";
                lose = "";
                co += 1;
                break;
            case 101:
                win = " curr";
                flat = "";
                lose = " curr";
                co += 2;
                break;
            case 110:
                win = " curr";
                flat = " curr";
                lose = "";
                co += 2;
                break;
            case 111:
                win = " curr";
                flat = " curr";
                lose = " curr";
                co += 3;
                break;
            default:
                break;
        } 
    }
    var rqwin = "";
    var rqflat = "";
    var rqlose = "";
    if (list[1] != "") {
        switch (parseInt(list[1])) {
            case 1:
                rqwin = "";
                rqflat = "";
                rqlose = " curr";
                co += 1;
                break;
            case 10:
                rqwin = "";
                rqflat = " curr";
                rqlose = "";
                co += 1;
                break;
            case 11:
                rqwin = "";
                rqflat = " curr";
                rqlose = " curr";
                co += 2;
                break;
            case 100:
                rqwin = " curr";
                rqflat = "";
                rqlose = "";
                co += 1;
                break;
            case 101:
                rqwin = " curr";
                rqflat = "";
                rqlose = " curr";
                co += 2;
                break;
            case 110:
                rqwin = " curr";
                rqflat = " curr";
                rqlose = "";
                co += 2;
                break;
            case 111:
                rqwin = " curr";
                rqflat = " curr";
                rqlose = " curr";
                co += 3;
                break;
            default:
                break;
        } 
    }
    var s10 = "";
    var s20 = "";
    var s21 = "";
    var s30 = "";
    var s31 = "";
    var s32 = "";
    var s40 = "";
    var s41 = "";
    var s42 = "";
    var s50 = "";
    var s51 = "";
    var s52 = "";
    var sqt = "";
    var p00 = "";
    var p11 = "";
    var p22 = "";
    var p33 = "";
    var pqt = "";
    var ftr = "";
    var f01 = "";
    var f02 = "";
    var f12 = "";
    var f03 = "";
    var f13 = "";
    var f23 = "";
    var f04 = "";
    var f14 = "";
    var f24 = "";
    var f05 = "";
    var f15 = "";
    var f25 = "";
    var fqt = "";
    if (list[2] != "") {
        lists = list[2].split(",");
        co += lists.length;
    }
    else {
        lists = [];
    }
    for (var i = 0; i < lists.length; i++) {
        switch (lists[i]) {
            case "0":
                s10 = " curr";
                break;
            case "1":
                s20 = " curr";
                break;
            case "2":
                s21 = " curr";
                break;
            case "3":
                s30 = " curr";
                break;
            case "4":
                s31 = " curr";
                break;
            case "5":
                s32 = " curr";
                break;
            case "6":
                s40 = " curr";
                break;
            case "7":
                s41 = " curr";
                break;
            case "8":
                s42 = " curr";
                break;
            case "9":
                s50 = " curr";
                break;
            case "10":
                s51 = " curr";
                break;
            case "11":
                s52 = " curr";
                break;
            case "12":
                sqt = " curr";
                break;
            case "13":
                p00 = " curr";
                break;
            case "14":
                p11 = " curr";
                break;
            case "15":
                p22 = " curr";
                break;
            case "16":
                p33 = " curr";
                break;
            case "17":
                pqt = " curr";
                break;
            case "18":
                f01 = " curr";
                break;
            case "19":
                f02 = " curr";
                break;
            case "20":
                f12 = " curr";
                break;
            case "21":
                f03 = " curr";
                break;
            case "22":
                f13 = " curr";
                break;
            case "23":
                f23 = " curr";
                break;
            case "24":
                f04 = " curr";
                break;
            case "25":
                f14 = " curr";
                break;
            case "26":
                f24 = " curr";
                break;
            case "27":
                f05 = " curr";
                break;
            case "28":
                f15 = " curr";
                break;
            case "29":
                f25 = " curr";
                break;
            case "30":
                fqt = " curr";
                break;
            default:
                break;
        }
    }
    var i0 = "";
    var i1 = "";
    var i2 = "";
    var i3 = "";
    var i4 = "";
    var i5 = "";
    var i6 = "";
    var i7 = "";
    if (list[3] != "") {
        lists = list[3].split(",");
        co += lists.length;
    }
    else {
        lists = [];
    }
    for (var i = 0; i < lists.length; i++) {
        switch (lists[i]) {
            case "0":
                i0 = " curr";
                break;
            case "1":
                i1 = " curr";
                break;
            case "2":
                i2 = " curr";
                break;
            case "3":
                i3 = " curr";
                break;
            case "4":
                i4 = " curr";
                break;
            case "5":
                i5 = " curr";
                break;
            case "6":
                i6 = " curr";
                break;
            case "7":
                i7 = " curr";
                break;
            default:
                break;
        }
    }
    var ss = "";
    var sp = "";
    var sf = "";
    var ps = "";
    var pp = "";
    var pf = "";
    var fs = "";
    var fp = "";
    var ff = "";
    if (list[4] != "") {
        lists = list[4].split(",");
        co += lists.length;
    }
    else {
        lists = [];
    }
    for (var i = 0; i < lists.length; i++) {
        switch (lists[i]) {
            case "0":
                ss = " curr";
                break;
            case "1":
                sp = " curr";
                break;
            case "2":
                sf = " curr";
                break;
            case "3":
                ps = " curr";
                break;
            case "4":
                pp = " curr";
                break;
            case "5":
                pf = " curr";
                break;
            case "6":
                fs = " curr";
                break;
            case "7":
                fp = " curr";
                break;
            case "8":
                ff = " curr";
                break;
            default:
                break;
        }
    }
    str += "<li>";
    str += "<div class=\"delbut\"><input type=\"button\" value=\"删除\"></div>";
    str += "<div class=\"raceteam\"><span>" + info.mainTeam + "</span><b>VS</b><span>" + info.guestTeam + "<i></i></span> </div>";
    str += "<div class=\"racelist\">";
    str += "<input class=\"selected\" type=\"button\" value=\"已选择" + co + "项\">";
    str += "<div class=\"betting_options gdtcla\" id=\"" + info.matchId + "\">";
    str += "<div class=\"optionshead\">";
    str += "<span>" + info.mainTeam + "</span>";
    str += "<span> vs </span>";
    str += "<span>" + info.guestTeam + "<i class=\"green\"> " + info.mainLoseBall + "</i></span>";
    str += "</div>";
    str += "<div class=\"optionslist jclist\">";
    str += "<div class=\"optionsname\">非让球</div>";
    str += "<div class=\"zqwrap\">";
    str += "<table border=\"0\" cellpadding=\"0\" cellspacing=\"1\">";
    str += "<tr>";
    str += "<td class=\"pre33" + win + "\">主胜<span>" + info.spfwin + "</span></td>";
    str += "<td class=\"pre33" + flat + "\">平<span>" + info.spfflat + "</span></td>";
    str += "<td class=\"" + lose + "\">主负<span>" + info.spflose + "</span></td>";
    str += "</tr>";
    str += "</table>";
    str += "</div>";
    str += "</div>";
    str += "<div class=\"optionslist padd jclist\">";
    str += "<div class=\"optionsname greenbg\">让球</div>";
    str += "<div class=\"zqwrap\">";
    str += "<table border=\"0\" cellpadding=\"0\" cellspacing=\"1\">";
    str += "<tr>";
    str += "<td class=\"pre33" + rqwin + "\">主胜<span>" + info.win + "</span></td>";
    str += "<td class=\"pre33" + rqflat + "\">平<span>" + info.flat + "</span></td>";
    str += "<td class=\"" + rqlose + "\">主负<span>" + info.lose + "</span></td>";
    str += "</tr>";
    str += "</table>";
    str += "</div>";
    str += "</div>";
    str += "<div class=\"optionslist padd jclist\">";
    str += "<div class=\"optionsname bluebg\">比分</div>";
    str += "<div class=\"zqwrap\">";
    str += "<table border=\"0\" cellpadding=\"0\" cellspacing=\"1\">";
    str += "<tr>";
    str += "<td class=\"pre14" + s10 + "\">1:0<i>" + info.s10 + "</i></td>";
    str += "<td class=\"pre14" + s20 + "\">2:0<i>" + info.s20 + "</i></td>";
    str += "<td class=\"pre14" + s21 + "\">2:1<i>" + info.s21 + "</i></td>";
    str += "<td class=\"pre14" + s30 + "\">3:0<i>" + info.s30 + "</i></td>";
    str += "<td class=\"pre14" + s31 + "\">3:1<i>" + info.s31 + "</i></td>";
    str += "<td class=\"pre14" + s32 + "\">3:2<i>" + info.s32 + "</i></td>";
    str += "<td class=\"" + s40 + "\">4:0<i>" + info.s40 + "</i></td>";
    str += "</tr>";
    str += "<tr>";
    str += "<td class=\"" + s41 + "\">4:1<i>" + info.s41 + "</i></td>";
    str += "<td class=\"" + s42 + "\">4:2<i>" + info.s42 + "</i></td>";
    str += "<td class=\"" + s50 + "\">5:0<i>" + info.s50 + "</i></td>";
    str += "<td class=\"" + s51 + "\">5:1<i>" + info.s51 + "</i></td>";
    str += "<td class=\"" + s52 + "\">5:2<i>" + info.s52 + "</i></td>";
    str += "<td class=\"" + sqt + "\" colspan=\"2\">胜其他<i>" + info.sother + "</i></td>";
    str += "</tr>";
    str += "<tr>";
    str += "<td class=\"" + p00 + "\">0:0<i>" + info.p00 + "</i></td>";
    str += "<td class=\"" + p11 + "\">1:1<i>" + info.p11 + "</i></td>";
    str += "<td class=\"" + p22 + "\">2:2<i>" + info.p22 + "</i></td>";
    str += "<td class=\"" + p33 + "\">3:3<i>" + info.p33 + "</i></td>";
    str += "<td class=\"" + pqt + "\" colspan=\"3\">平其他<i>" + info.pother + "</i></td>";
    str += "</tr>";
    str += "<tr>";
    str += "<td class=\"pre14" + f01 + "\">0:1<i>" + info.f01 + "</i></td>";
    str += "<td class=\"pre14" + f02 + "\">0:2<i>" + info.f02 + "</i></td>";
    str += "<td class=\"pre14" + f12 + "\">1:2<i>" + info.f12 + "</i></td>";
    str += "<td class=\"pre14" + f03 + "\">0:3<i>" + info.f03 + "</i></td>";
    str += "<td class=\"pre14" + f13 + "\">1:3<i>" + info.f13 + "</i></td>";
    str += "<td class=\"pre14" + f23 + "\">2:3<i>" + info.f23 + "</i></td>";
    str += "<td class=\"" + f04 + "\">0:4<i>" + info.f04 + "</i></td>";
    str += "</tr>";
    str += "<tr>";
    str += "<td class=\"" + f14 + "\">1:4<i>" + info.f14 + "</i></td>";
    str += "<td class=\"" + f24 + "\">2:4<i>" + info.f24 + "</i></td>";
    str += "<td class=\"" + f05 + "\">0:5<i>" + info.f05 + "</i></td>";
    str += "<td class=\"" + f15 + "\">1:5<i>" + info.f15 + "</i></td>";
    str += "<td class=\"" + f25 + "\">2:5<i>" + info.f25 + "</i></td>";
    str += "<td class=\"" + fqt + "\" colspan=\"2\">负其他<i>" + info.fother + "</i></td>";
    str += "</tr>";
    str += "</table>";
    str += "</div>";
    str += "</div>";
    str += "<div class=\"optionslist padd jclist\">";
    str += "<div class=\"optionsname redbg\">总进球</div>";
    str += "<div class=\"zqwrap\">";
    str += "<table border=\"0\" cellpadding=\"0\" cellspacing=\"1\">";
    str += "<tr>";
    str += "<td class=\"pre25" + i0 + "\">0 <i>" + info.in0 + "</i></td>";
    str += "<td class=\"pre25" + i1 + "\">1 <i>" + info.in1 + "</i></td>";
    str += "<td class=\"pre25" + i2 + "\">2 <i>" + info.in2 + "</i></td>";
    str += "<td class=\"pre25" + i3 + "\">3 <i>" + info.in3 + "</i></td>";
    str += "</tr>";
    str += "<tr>";
    str += "<td class=\"" + i4 + "\">4 <i>" + info.in4 + "</i></td>";
    str += "<td class=\"" + i5 + "\">5 <i>" + info.in5 + "</i></td>";
    str += "<td class=\"" + i6 + "\">6 <i>" + info.in6 + "</i></td>";
    str += "<td class=\"" + i7 + "\">7+ <i>" + info.in7 + "</i></td>";
    str += "</tr>";
    str += "</table>";
    str += "</div>";
    str += "</div>";
    str += "<div class=\"optionslist padd jclist\">";
    str += "<div class=\"optionsname orangebg\">半全场</div>";
    str += "<div class=\"zqwrap\">";
    str += "<table border=\"0\" cellpadding=\"0\" cellspacing=\"1\">";
    str += "<tr>";
    str += "<td class=\"pre33" + ss + "\">胜胜<i>" + info.ss + "</i></td>";
    str += "<td class=\"pre33" + sp + "\">胜平<i>" + info.sp + "</i></td>";
    str += "<td class=\"pre33" + sf + "\">胜负<i>" + info.sf + "</i></td>";
    str += "</tr>";
    str += "<tr>";
    str += "<td class=\"" + ps + "\">平胜<i>" + info.ps + "</i></td>";
    str += "<td class=\"" + pp + "\">平平<i>" + info.pp + "</i></td>";
    str += "<td class=\"" + pf + "\">平负<i>" + info.pf + "</i></td>";
    str += "</tr>";
    str += "<tr>";
    str += "<td class=\"" + fs + "\">负胜<i>" + info.fs + "</i></td>";
    str += "<td class=\"" + fp + "\">负平<i>" + info.fp + "</i></td>";
    str += "<td class=\"" + ff + "\">负负<i>" + info.ff + "</i></td>";
    str += "</tr>";
    str += "</table>";
    str += "</div>";
    str += "</div>";
    str += "<div class=\"optionsbut\"><input type=\"button\" class=\"cancel\" value=\"取消\"><input class=\"okbtn\" type=\"button\" value=\"确定\"></div>";
    str += "</div>";
    str += "<div class=\"mask2\"></div>";
    str += "</div>";
//    str += "<div class=\"racedan\">胆</div>";
    str += "</li>";
    return str;
}

function developCountent() {
    $(".racelist").children('input').bind('click', function () {
        if ($(this).nextAll(".betting_options").css('display') == "none") {
            $(this).nextAll(".betting_options").fadeIn(200);
            $(this).nextAll(".mask2").fadeIn(200);
            $(this).children("span").addClass('curr')
        }
    });
}

function delRow() {
    $(".zqtz").find("ul").find(".delbut").click(function () {
        $(this).parent().remove();
        if ($(".zqtz").find("ul").find("li").length == 0) {
            theoryMaxMoney = 0;
            theoryMinMoney = 0;
            totalMoney = 0;
            $("#btn").text("理论奖金 0~0 立即购买 0元");
            return;
        }
        switch (LotteryType) {
            case 7201:
            case 7207:
                $(".zqtz").find("ul").find(".spf").find("span").slice(0, 1).click();
                $(".zqtz").find("ul").find(".spf").find("span").slice(0, 1).click();
                break;
            case 7202:
                $(".zqtz").find("ul").find(".racelist").slice(0, 1).find(".betting_options").find(".optionsbut").find(".okbtn").click();
                break;
            case 7203:
                $(".zqtz").find("ul").find(".racelist2").find("span").slice(0, 1).click();
                $(".zqtz").find("ul").find(".racelist2").find("span").slice(0, 1).click();
                break;
            case 7204:
                $(".zqtz").find("ul").find(".racelist").slice(0, 1).find(".betting_options").find(".optionsbut").find(".okbtn").click();
                break;
            case 7206:
                $(".zqtz").find("ul").find(".racelist").slice(0, 1).find(".betting_options").find(".optionsbut").find(".okbtn").click();
                break;
            default:
                break;
        }
    });
    switch (LotteryType) {
        case 7201:
        case 7207:
            $(".zqtz").find(".buyagreement").find(".delbut2").click(function () {
                $(".zqtz").find("ul").find(".spf").find("span").removeClass();
                $(".zqtz").find("ul").find(".spf").find("span").slice(0, 1).click();
                $(".zqtz").find("ul").find(".spf").find("span").slice(0, 1).click();
            });
            break;
        case 7202:
            $(".zqtz").find(".buyagreement").find(".delbut2").click(function () {
                $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                    $(j).find("input").slice(0, 1).val("点击展开投注选项");
                    $(j).find("input").slice(0, 1).removeClass("selected");
                    $(j).find(".betting_options").find(".optionslist2").find(".tabcon").find("li").removeClass("curr");
                });
                $(".zqtz").find("ul").find(".racedan").removeClass("curr");
                $(".zqtz").find("ul").find(".racelist").slice(0, 1).find(".betting_options").find(".optionsbut").find(".okbtn").click();
            });
            break;
        case 7203:
            $(".zqtz").find(".buyagreement").find(".delbut2").click(function () {
                $(".zqtz").find("ul").find(".racelist2").find("span").removeClass();
                $(".zqtz").find("ul").find(".racelist2").find("span").slice(0, 1).click();
                $(".zqtz").find("ul").find(".racelist2").find("span").slice(0, 1).click();
            });
            break;
        case 7204:
            $(".zqtz").find(".buyagreement").find(".delbut2").click(function () {
                $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                    $(j).find("input").slice(0, 1).val("点击展开投注选项");
                    $(j).find("input").slice(0, 1).removeClass("selected");
                    $(j).find(".betting_options").find(".optionslist").find("ul").find("div").removeClass("curr");
                });
                $(".zqtz").find("ul").find(".racedan").removeClass("curr");
                $(".zqtz").find("ul").find(".racelist").slice(0, 1).find(".betting_options").find(".optionsbut").find(".okbtn").click();
            });
            break;
        case 7206:
            $(".zqtz").find(".buyagreement").find(".delbut2").click(function () {
                $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                    $(j).find("input").slice(0, 1).val("点击展开投注选项");
                    $(j).find("input").slice(0, 1).removeClass("selected");
                    $(j).find(".betting_options").find(".optionslist").find("table").find("td").removeClass("curr");
                });
//                $(".zqtz").find("ul").find(".racedan").removeClass("curr");
                $(".zqtz").find("ul").find(".racelist").slice(0, 1).find(".betting_options").find(".optionsbut").find(".okbtn").click();
            });
            break;
        default:
            break;
    }
    
}

function danGuanClick() {
    var maxmoney = 0;
    var minmoney = 0;
    switch (LotteryType) {
        case 7201:
        case 7207:
            totalMoney = $(".zqtz").find("ul").find(".racelist").find(".curr").length;
            $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                var max = 0;
                var min = 0;
                $(j).find("span").each(function (i1, j1) {
                    if ($(j1).attr("class").indexOf("curr") >= 0) {
                        if (parseFloat($(j1).find("i").html()) > max) {
                            max = parseFloat($(j1).find("i").html());
                        }
                        if (min == 0) {
                            min = parseFloat($(j1).find("i").html());
                        }
                        else if (min > parseFloat($(j1).find("i").html())) {
                            min = parseFloat($(j1).find("i").html());
                        }
                    }
                });
                minmoney += min;
                maxmoney += max;
            });
            break;
        case 7202:
            totalMoney = $(".zqtz").find("ul").find(".racelist").find(".tabcon").find("ul").find(".curr").length;
            $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                var max = 0;
                var min = 0;
                $(j).find(".betting_options").find(".optionslist2").find(".tabcon").find("ul").find("li").each(function (i1, j1) {
                    if ($(j1).attr("class") == "curr" || $(j1).attr("class") == "looqi curr") {
                        if (parseFloat($(j1).find("span").slice(1, 2).html()) > max) {
                            max = parseFloat($(j1).find("span").slice(1, 2).html());
                        }
                        if (min == 0) {
                            min = parseFloat($(j1).find("span").slice(1, 2).html());
                        }
                        else if (min > parseFloat($(j1).find("span").slice(1, 2).html())) {
                            min = parseFloat($(j1).find("span").slice(1, 2).html());
                        }
                    }
                });
                minmoney += min;
                maxmoney += max;
            });
            break;
        case 7203:
            totalMoney = $(".zqtz").find("ul").find(".racelist2").find(".curr").length;
            $(".zqtz").find("ul").find(".racelist2").each(function (i, j) {
                var max = 0;
                var min = 0;
                $(j).find("span").each(function (i1, j1) {
                    if ($(j1).attr("class").indexOf("curr") >= 0) {
                        if (parseFloat($(j1).find("i").html()) > max) {
                            max = parseFloat($(j1).find("i").html());
                        }
                        if (min == 0) {
                            min = parseFloat($(j1).find("i").html());
                        }
                        else if (min > parseFloat($(j1).find("i").html())) {
                            min = parseFloat($(j1).find("i").html());
                        }
                    }
                });
                minmoney += min;
                maxmoney += max;
            });
            break;
        case 7204:
            totalMoney = $(".zqtz").find("ul").find(".racelist").find(".curr").length;
            $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                var max = 0;
                var min = 0;
                $(j).find(".betting_options").find(".optionslist").find("ul").find("div").each(function (i1, j1) {
                    if ($(j1).attr("class").indexOf("curr") >= 0) {
                        if (parseFloat($(j1).find("span").slice(1, 2).html()) > max) {
                            max = parseFloat($(j1).find("span").slice(1, 2).html());
                        }
                        if (min == 0) {
                            min = parseFloat($(j1).find("span").slice(1, 2).html());
                        }
                        else if (min > parseFloat($(j1).find("span").slice(1, 2).html())) {
                            min = parseFloat($(j1).find("span").slice(1, 2).html());
                        }
                    }
                });
                minmoney += min;
                maxmoney += max;
            });
            break;
        case 7206:
            totalMoney = $(".zqtz").find("ul").find(".racelist").find(".betting_options").find(".optionslist").find("table").find("curr").length;
            $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                var max = 0;
                var min = 0;
                $(j).find(".betting_options").find(".optionslist").find("table").find("td").each(function (i1, j1) {
                    if ($(j1).attr("class").indexOf("curr") >= 0) {
                        if (parseFloat($(j1).find("span").html()) > max) {
                            max = parseFloat($(j1).find("span").html());
                        }
                        if (min == 0) {
                            min = parseFloat($(j1).find("span").html());
                        }
                        else if (min > parseFloat($(j1).find("span").html())) {
                            min = parseFloat($(j1).find("span").html());
                        }
                    }
                });
                minmoney += min;
                maxmoney += max;
            });
            break;
        default:
            break;
    }
    theoryMaxMoney = maxmoney;
    theoryMinMoney = minmoney;
    $("#btn").text("1理论奖金 " + (theoryMinMoney * 2 * $("#num").val()).toFixed(2) + "~" + (theoryMaxMoney * 2 * $("#num").val()).toFixed(2) + " 立即购买 " + totalMoney * 2 * $("#num").val() + "元");
}

function guoGuanChange() {
    $("#guoguan").find("ul").find("li").slice(0, 1).click(function () {
        $(this).addClass("curr");
        $("#ZYGG").show();
        $("#DCGG").hide();
        $(this).parent().find("li").slice(1, 2).removeClass("curr");
        cgtag = 1;
    });
    $("#guoguan").find("ul").find("li").slice(1, 2).click(function () {
        $(this).addClass("curr");
        $("#ZYGG").hide();
        $("#DCGG").show();
        $(this).parent().find("li").slice(0, 1).removeClass("curr");
        cgtag = 2;
    });
    
    $("#guoguan").find(".cancel").click(function () {
        $("#guoguan").hide();
        $(".guoguanmask").hide();
    });
    $("#confirmzy").click(function () {
        var str = "";
        $("#ZYGG").find("span").each(function (i, j) {
            if ($(j).attr("class")) {
                str += $(j).html() + ",";
            }
        });
        ggcountent = str.substring(0, str.length - 1);
        $("#guogchobut").val(ggcountent == "" ? "过关方式(必选)" : ggcountent);
        $("#guoguan").hide();
        $(".guoguanmask").hide();
        JCCountInfo();
    });
    $("#confirmdc").click(function () {
        $("#guogchobut").val(ggcountent == "" ? "过关方式(必选)" : ggcountent);
        $("#guoguan").hide();
        $(".guoguanmask").hide();
        JCCountInfo();
    });
}

function clickNumber() {
    infoCount = 0;
    danCount = 0;
    switch (LotteryType) {
        case 7201:
        case 7207:
            $(".zqtz").find("ul").find("li").each(function (i, j) {
                if ($(j).find(".spf").find(".curr").length > 0) {
                    infoCount++;
                }
                if ($(j).find(".racedan").attr("class").indexOf("curr") >= 0) {
                    danCount++;
                }
            });
            break;
        case 7202:
            $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                if ($(j).find(".selected").length > 0) {
                    infoCount++;
                }
                if ($(j).parent().find(".racedan").attr("class").indexOf("curr") >= 0) {
                    danCount++;
                }
            });
            break;
        case 7203:
            $(".zqtz").find("ul").find("li").each(function (i, j) {
                if ($(j).find(".racelist2").find(".curr").length > 0) {
                    infoCount++;
                }
                if ($(j).find(".racedan").attr("class").indexOf("curr") >= 0) {
                    danCount++;
                }
            });
            break;
        case 7204:
            $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                if ($(j).find(".selected").length > 0) {
                    infoCount++;
                }
                if ($(j).parent().find(".racedan").attr("class").indexOf("curr") >= 0) {
                    danCount++;
                }
            });
            break;
        case 7206:
            $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                if ($(j).find(".selected").length > 0) {
                    infoCount++;
                }
//                if ($(j).parent().find(".racedan").attr("class").indexOf("curr") >= 0) {
//                    danCount++;
//                }
            });
            break;
        default:
            break;
    }
}

function cgCountent(dnum, xnum) {
    var str1 = "";
    var str2 = "";
    for (var i = xnum + 1; i <= dnum; i++) {
        if (i >= 2 && i < 9) {
            str1 += "<span>" + i + "串1</span>";
        }
        switch (i) {
            case 3:
                str2 += "<span>3串3</span><span>3串4</span>";
                break;
            case 4:
                str2 += "<span>4串4</span><span>4串5</span><span>4串6</span><span>4串11</span>";
                break;
            case 5:
                str2 += "<span>5串5</span><span>5串6</span><span>5串10</span><span>5串16</span><span>5串20</span><span>5串26</span>";
                break;
            case 6:
                str2 += "<span>6串6</span><span>6串7</span><span>6串15</span><span>6串20</span><span>6串22</span><span>6串35</span><span>6串42</span><span>6串50</span><span>6串57</span>";
                break;
            case 7:
                str2 += "<span>7串7</span><span>7串8</span><span>7串21</span><span>7串35</span><span>7串120</span>";
                break;
            case 8:
                str2 += "<span>8串8</span><span>8串9</span><span>8串28</span><span>8串56</span><span>8串70</span><span>8串247</span>";
                break;
            default:
                break;
        }
    }
    $("#guoguan").find(".zy").html(str1);
    $("#guoguan").find(".dc").html(str2);
    $("#ZYGG").find("span").click(function () {
        if ($(this).attr("class")) {
            $(this).removeClass("curr");
        }
        else {
            $(this).addClass("curr");
        }
        $("#DCGG").find("span").removeClass("curr");
    });
    $("#DCGG").find("span").click(function () {
        if ($(this).attr("class")) {
            $(this).removeClass("curr");
            ggcountent = "过关方式(必选)";
        }
        else {
            $(this).parent().find("span").removeClass("curr");
            $(this).addClass("curr");
            ggcountent = $(this).html();
        }
        $("#ZYGG").find("span").removeClass("curr");
    });
}

function JCCountInfo() {

    var maxList = [];
    var maxdanList = [];
    var minList = [];
    var mindanList = [];
    var danList = [];
    var infoList = [];
    var dan = 0;
    var info = 0;

    switch (LotteryType) {
        case 7201:
        case 7207:
            $(".zqtz").find("ul").find("li").each(function (i, j) {
                if ($(j).find(".racelist").find(".curr").length > 0) {
                    if ($(j).find(".racedan").attr("class").indexOf("curr") >= 0) {
                        danList[dan] = $(j).find(".racelist").find(".curr").length;
                        var max = 0;
                        var min = 0;
                        $(j).find(".curr").each(function (i1, j1) {
                            if (parseFloat($(j1).find("i").html()) > max) {
                                max = parseFloat($(j1).find("i").html());
                            }
                            if (min == 0) {
                                min = parseFloat($(j1).find("i").html());
                            }
                            else if (parseFloat($(j1).find("i").html()) < min) {
                                min = parseFloat($(j1).find("i").html());
                            }
                        });
                        maxdanList[dan] = max;
                        mindanList[dan] = min;
                        dan++;
                    }
                    else {
                        infoList[info] = $(j).find(".racelist").find(".curr").length;
                        var max = 0;
                        var min = 0;
                        $(j).find(".curr").each(function (i1, j1) {
                            if (parseFloat($(j1).find("i").html()) > max) {
                                max = parseFloat($(j1).find("i").html());
                            }
                            if (min == 0) {
                                min = parseFloat($(j1).find("i").html());
                            }
                            else if (parseFloat($(j1).find("i").html()) < min) {
                                min = parseFloat($(j1).find("i").html());
                            }
                        });
                        maxList[info] = max;
                        minList[info] = min;
                        info++;
                    }
                }
            });
            break;
        case 7202:
            $(".zqtz").find("ul").find("li").each(function (i, j) {
                if ($(j).find(".racelist").find("input").slice(0, 1).attr("class")) {
                    if ($(j).find(".racedan").attr("class").indexOf("curr") >= 0) {
                        danList[dan] = $(j).find(".racelist").find(".betting_options").find(".optionslist2").find(".tabcon").find("ul").find(".curr").length;
                        var max = 0;
                        var min = 0;
                        $(j).find(".racelist").find(".betting_options").find(".optionslist2").find(".tabcon").find("ul").find(".curr").each(function (i1, j1) {
                            if (parseFloat($(j1).find("span").slice(1, 2).html()) > max) {
                                max = parseFloat($(j1).find("span").slice(1, 2).html());
                            }
                            if (min == 0) {
                                min = parseFloat($(j1).find("span").slice(1, 2).html());
                            }
                            else if (parseFloat($(j1).find("span").slice(1, 2).html()) < min) {
                                min = parseFloat($(j1).find("span").slice(1, 2).html());
                            }
                        });
                        maxdanList[dan] = max;
                        mindanList[dan] = min;
                        dan++;
                    }
                    else {
                        infoList[info] = $(j).find(".racelist").find(".betting_options").find(".optionslist2").find(".tabcon").find("ul").find(".curr").length;
                        var max = 0;
                        var min = 0;
                        $(j).find(".racelist").find(".betting_options").find(".optionslist2").find(".tabcon").find("ul").find(".curr").each(function (i1, j1) {
                            if (parseFloat($(j1).find("span").slice(1, 2).html()) > max) {
                                max = parseFloat($(j1).find("span").slice(1, 2).html());
                            }
                            if (min == 0) {
                                min = parseFloat($(j1).find("span").slice(1, 2).html());
                            }
                            else if (parseFloat($(j1).find("span").slice(1, 2).html()) < min) {
                                min = parseFloat($(j1).find("span").slice(1, 2).html());
                            }
                        });
                        maxList[info] = max;
                        minList[info] = min;
                        info++;
                    }
                }
            });
            break;
        case 7203:
            $(".zqtz").find("ul").find("li").each(function (i, j) {
                if ($(j).find(".racelist2").find(".curr").length > 0) {
                    if ($(j).find(".racedan").attr("class").indexOf("curr") >= 0) {
                        danList[dan] = $(j).find(".racelist2").find(".curr").length;
                        var max = 0;
                        var min = 0;
                        $(j).find(".curr").each(function (i1, j1) {
                            if (parseFloat($(j1).find("i").html()) > max) {
                                max = parseFloat($(j1).find("i").html());
                            }
                            if (min == 0) {
                                min = parseFloat($(j1).find("i").html());
                            }
                            else if (parseFloat($(j1).find("i").html()) < min) {
                                min = parseFloat($(j1).find("i").html());
                            }
                        });
                        maxdanList[dan] = max;
                        mindanList[dan] = min;
                        dan++;
                    }
                    else {
                        infoList[info] = $(j).find(".racelist2").find(".curr").length;
                        var max = 0;
                        var min = 0;
                        $(j).find(".curr").each(function (i1, j1) {
                            if (parseFloat($(j1).find("i").html()) > max) {
                                max = parseFloat($(j1).find("i").html());
                            }
                            if (min == 0) {
                                min = parseFloat($(j1).find("i").html());
                            }
                            else if (parseFloat($(j1).find("i").html()) < min) {
                                min = parseFloat($(j1).find("i").html());
                            }
                        });
                        maxList[info] = max;
                        minList[info] = min;
                        info++;
                    }
                }
            });
            break;
        case 7204:
            $(".zqtz").find("ul").find("li").each(function (i, j) {
                if ($(j).find(".racelist").find("input").slice(0, 1).attr("class")) {
                    if ($(j).find(".racedan").attr("class").indexOf("curr") >= 0) {
                        danList[dan] = $(j).find(".racelist").find(".betting_options").find(".optionslist").find("ul").find(".curr").length;
                        var max = 0;
                        var min = 0;
                        $(j).find(".racelist").find(".betting_options").find(".optionslist").find("ul").find(".curr").each(function (i1, j1) {
                            if (parseFloat($(j1).find("span").slice(1, 2).html()) > max) {
                                max = parseFloat($(j1).find("span").slice(1, 2).html());
                            }
                            if (min == 0) {
                                min = parseFloat($(j1).find("span").slice(1, 2).html());
                            }
                            else if (parseFloat($(j1).find("span").slice(1, 2).html()) < min) {
                                min = parseFloat($(j1).find("span").slice(1, 2).html());
                            }
                        });
                        maxdanList[dan] = max;
                        mindanList[dan] = min;
                        dan++;
                    }
                    else {
                        infoList[info] = $(j).find(".racelist").find(".betting_options").find(".optionslist").find("ul").find(".curr").length;
                        var max = 0;
                        var min = 0;
                        $(j).find(".racelist").find(".betting_options").find(".optionslist").find("ul").find(".curr").each(function (i1, j1) {
                            if (parseFloat($(j1).find("span").slice(1, 2).html()) > max) {
                                max = parseFloat($(j1).find("span").slice(1, 2).html());
                            }
                            if (min == 0) {
                                min = parseFloat($(j1).find("span").slice(1, 2).html());
                            }
                            else if (parseFloat($(j1).find("span").slice(1, 2).html()) < min) {
                                min = parseFloat($(j1).find("span").slice(1, 2).html());
                            }
                        });
                        maxList[info] = max;
                        minList[info] = min;
                        info++;
                    }
                }
            });
            break;
        case 7206:
            $(".zqtz").find("ul").find("li").each(function (i, j) {
                if ($(j).find(".racelist").find("input").slice(0, 1).attr("class")) {
                    if (cgtag == 2) {
                        var list = "";
                        $(j).find(".racelist").find(".betting_options").find(".optionslist").each(function (i1, j1) {
                            if ($(j1).find("table").find(".curr").length > 0) {
                                list += $(j1).find("table").find(".curr").length + ",";
                            }
                        });
                        if (list != "") {
                            list = list.substring(0, list.length - 1);
                        }
                        infoList[info] = list;
                    }
                    else {
                        infoList[info] = $(j).find(".racelist").find(".betting_options").find(".optionslist").find("table").find(".curr").length;
                    }
                    var max = "";
                    var min = "";
                    $(j).find(".racelist").find(".betting_options").find(".optionslist").each(function (i1, j1) {
                        var listmax = 0;
                        var listmin = 0;
                        $(j1).find("table").find(".curr").each(function (i2, j2) {
                            //                            alert($(j2).html());
                            if ($(j2).find("span").length > 0) {
                                if (parseFloat($(j2).find("span").html()) > listmax) {
                                    listmax = parseFloat($(j2).find("span").html());
                                }
                                if (listmin == 0) {
                                    listmin = parseFloat($(j2).find("span").html());
                                }
                                else if (parseFloat($(j2).find("span").html()) < listmin) {
                                    listmin = parseFloat($(j2).find("span").html());
                                }
                            }
                            else {
                                //                                alert($(j2).find("i").html() + i2);
                                if (parseFloat($(j2).find("i").html()) > listmax) {
                                    listmax = parseFloat($(j2).find("i").html());
                                }
                                if (listmin == 0) {
                                    listmin = parseFloat($(j2).find("i").html());
                                }
                                else if (parseFloat($(j2).find("i").html()) < listmin) {
                                    listmin = parseFloat($(j2).find("i").html());
                                }
                            }
                        });
                        max += listmax + ",";
                        min += listmin + ",";
                    });
                    if (max != "") {
                        max = max.substring(0, max.length - 1);
                    }
                    if (min != "") {
                        min = min.substring(0, min.length - 1);
                    }
                    maxList[info] = max;
                    minList[info] = min;
                    info++;
                }
            });
            maxList = filterNum(maxList);
            minList = filterNum(minList);
            break;
        default:
            break;
    }
    totalMoney = 0;
    theoryMinMoney = 0;
    theoryMaxMoney = 0;
    if (LotteryType == 7206 && cgtag == 2) {
        totalMoney = parseInt(JCBP.BunchPassListHH(infoList, ggcountent));
        theoryMaxMoney = parseFloat(JCBP.BunchPassMaxMoneyHH(maxList, ggcountent));
        theoryMinMoney = parseFloat(JCBP.BunchPassMaxMoneyHH(minList, ggcountent));
    }
    else {
       
        if (LotteryType == 7206 && cgtag == 1) {
            if (ggcountent.indexOf(",") >= 0) {
                var cgList = ggcountent.split(",");
                for (var i = 0; i < cgList.length; i++) {
                    totalMoney += parseInt(JCBP.BunchPassList(infoList, danList, cgList[i]));
                    theoryMaxMoney += parseFloat(JCBP.BunchPassMaxMoneyHH(maxList, cgList[i]));
                    theoryMinMoney += parseFloat(JCBP.BunchPassMaxMoneyHH(minList, cgList[i]));
                }
            }
            else {
                totalMoney = parseInt(JCBP.BunchPassList(infoList, danList, ggcountent));
                theoryMaxMoney = parseFloat(JCBP.BunchPassMaxMoneyHH(maxList, ggcountent));
                theoryMinMoney = parseFloat(JCBP.BunchPassMaxMoneyHH(minList, ggcountent));
            }
        }
        else {
           
            if (ggcountent.indexOf(",") >= 0) {
                var cgList = ggcountent.split(",");
                for (var i = 0; i < cgList.length; i++) {
                    totalMoney += parseInt(JCBP.BunchPassList(infoList, danList, cgList[i]));
                    theoryMaxMoney += parseFloat(JCBP.BunchPassMaxMoney(maxList, maxdanList, cgList[i]));
                    theoryMinMoney += parseFloat(JCBP.BunchPassMaxMoney(minList, mindanList, cgList[i]));
                }
            }
            else {
                totalMoney = parseInt(JCBP.BunchPassList(infoList, danList, ggcountent));
                theoryMaxMoney = parseFloat(JCBP.BunchPassMaxMoney(maxList, maxdanList, ggcountent));
                theoryMinMoney = parseFloat(JCBP.BunchPassMaxMoney(minList, mindanList, ggcountent));
            } 
        }
    }
    $("#btn").text("理论奖金 " + (theoryMinMoney * 2 * parseFloat($("#num").val())).toFixed(2) + "~" + (theoryMaxMoney * 2 * parseFloat($("#num").val())).toFixed(2) + " 立即购买 " + totalMoney * 2 * parseFloat($("#num").val()) + "元");
}

function filterNum(list) {
    for (var i = 0; i < list.length; i++) {
        var arrys = list[i].split(",");
        var str = "";
        for (var j = 0; j < arrys.length; j++) {
            if (arrys[j] != "0") {
                str += arrys[j] + ",";
            }
        }
        str = str.substring(0, str.length - 1);
        list[i] = str;
    }
    return list;
}

function numChanges(obj) {
    if ($(obj).val() == "0") {
        $(obj).val("1");
    }
    else if ($(obj).val() >= 10001) {
        $(obj).val("10000");
    }
    if ($(obj).val() != "") {
        $("#btn").text("理论奖金 " + (theoryMinMoney * 2 * $(obj).val()).toFixed(2) + "~" + (theoryMaxMoney * 2 * $(obj).val()).toFixed(2) + " 立即购买 " + totalMoney * 2 * $(obj).val() + "元");
    }
}
function numChange(obj) {
    if ($(obj).val() == "") {
        $(obj).val("1");
    }
    $("#btn").text("理论奖金 " + (theoryMinMoney * 2 * $(obj).val()).toFixed(2) + "~" + (theoryMaxMoney * 2 * $(obj).val()).toFixed(2) + " 立即购买 " + totalMoney * 2 * $(obj).val() + "元");
}

function btnOk() {
    $("#btn").click(function () {
//        if ($("#ZYGG").find("div span.curr").length == 0) {
//           
//            return;
//        }
        if (totalMoney <= 0) {
            E.showToast("请选择过关方式！", "50%", "error", "1000");
            return;
        }
        if (!agreement) {
            E.showToast("未同意投注协议！", "50%", "error", "1000");
            return;
        }
        if ($("#userid").val() == "") {
            E.showToast("请先登录！", "50%", "error", "1000");
            getOptInfo();
            setTimeout(function () {
                if (gameType == 1) {
                    setCookie("setInfoGG", infoCountent, 1);
                    setCookie("setInfoGGDan", infoDan, 1);
                    window.location.href = "../Login.aspx?url=" + window.location.href.replace(/&/g, "*");
                }
                else {
                    setCookie("setInfoDG", infoCountent, 1);
                    window.location.href = "../Login.aspx?url=" + window.location.href.replace(/&/g, "*");
                }
            }, 1000);
            return;
        }
        JCLotteryNumber();
        SchemeInfo.isuseId = "1001";
        SchemeInfo.lotteryId = LotteryId;
        SchemeInfo.schemeSumMoney = totalMoney * 2 * parseInt($("#num").val());
        SchemeInfo.schemeSumNum = totalMoney;
        SchemeInfo.multiple = $("#num").val();
        SchemeInfo.buyContent[0] = { "PlayType": LotteryType, "SumMoney": totalMoney * 2 * parseInt($("#num").val()), "SumNum": totalMoney, "LotteryNumber": numberInfo };
        //        alert(JSON.stringify(SchemeInfo.buyContent[0]));
        $("#btn").attr("disabled", "disabled");
        $.ajax({
            type: "post",
            url: "../ajax/wapRequest.ashx",
            data: {
                opt: "11",
                info: JSON.stringify(SchemeInfo)
            },
            cache: false,
            async: false,
            dataType: "json",
            success: function (result) {
                if (parseInt(result.error, 10) == 0) {
                    E.showToast("投注成功", "50%", "error", "2000");
                    delCookie("setInfoGG");
                    delCookie("setInfoGGDan");
                    delCookie("setInfoDG");
                    delCookie("setInfoDGDan");
                    setTimeout(function () {
                        window.location.href = "../home/room/userbuysuccess.aspx?id=" + result.schemeids + "&balance=" + result.balance + "&money=" + totalMoney * 2 + "&url=" + lotteryUrl();
                    }, 2000);
                } else {
                    $("#btn").removeAttr("disabled");
                    E.showToast(result.msg, "50%", "error", "2000");
                }
            }, error: function (xmlHttpRequest, textStatus, errorThrown) {
                E.showToast("error", "50%", "error", "3000");
            }
        });
    });
}

function lotteryUrl() {
    var url = "";
    switch (LotteryType) {
        case 7201:
            url = "../../JCZC/JCZQ_RQSPF_GG.aspx";
            break;
        case 7202:
            url = "../../JCZC/JCZQ_BF_GG.aspx";
            break;
        case 7203:
            url = "../../JCZC/JCZQ_ZJQ_GG.aspx";
            break;
        case 7204:
            url = "../../JCZC/JCZQ_BQC_GG.aspx";
            break;
        case 7206:
            url = "../../JCZC/JCZQ_HHGG_GG.aspx";
            break;
        case 7207:
            url = "../../JCZC/JCZQ_SPF_GG.aspx";
            break;
        default:
            break;
    }
    return url;
}

function JCLotteryNumber() {
    numberInfo = "";
    var dancount = 0;
    var danstr = "";
    var str = "";
    var cgstr = "";
    if (gameType == 1) {
        switch (LotteryType) {
            case 7201:
            case 7207:
                $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                    if ($(j).parent().find(".racedan").attr("class").indexOf("curr") >= 0) {
                        dancount++;
                        danstr += $(j).find(".spf").attr("id") + "(";
                        $(j).find("span").each(function (i1, j1) {
                            if ($(j1).attr("class").indexOf("curr") >= 0) {
                                danstr += (i1 + 1) + ",";
                            }
                        });
                        danstr = danstr.substring(0, danstr.length - 1) + ")|";
                    }
                    else {
                        str += $(j).find(".spf").attr("id") + "(";
                        $(j).find("span").each(function (i1, j1) {
                            if ($(j1).attr("class").indexOf("curr") >= 0) {
                                str += (i1 + 1) + ",";
                            }
                        });
                        str = str.substring(0, str.length - 1) + ")|";
                    }
                });
                if (danstr != "") {
                    danstr = "[" + danstr.substring(0, danstr.length - 1) + "]";
                    dancount = ";[" + dancount + "]";
                }
                else {
                    dancount = "";
                }
                str = "[" + str.substring(0, str.length - 1) + "]";
                break;
            case 7202:
                $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                    if ($(j).parent().find(".racedan").attr("class").indexOf("curr") >= 0) {
                        dancount++;
                        danstr += $(j).parent().attr("id") + "(";
                        $(j).find(".betting_options").find(".optionslist2").find(".tabcon").find("ul").find("li").each(function (i1, j1) {
                            if ($(j1).attr("class").indexOf("curr") >= 0) {
                                danstr += (i1 + 1) + ",";
                            }
                        });
                        danstr = danstr.substring(0, danstr.length - 1) + ")|";
                    }
                    else {
                        str += $(j).parent().attr("id") + "(";
                        $(j).find(".betting_options").find(".optionslist2").find(".tabcon").find("ul").find("li").each(function (i1, j1) {
                            if ($(j1).attr("class").indexOf("curr") >= 0) {
                                str += (i1 + 1) + ",";
                            }
                        });
                        str = str.substring(0, str.length - 1) + ")|";
                    }
                });
                if (danstr != "") {
                    danstr = "[" + danstr.substring(0, danstr.length - 1) + "]";
                    dancount = ";[" + dancount + "]";
                }
                else {
                    dancount = "";
                }
                str = "[" + str.substring(0, str.length - 1) + "]";
                break;
            case 7203:
                $(".zqtz").find("ul").find(".racelist2").each(function (i, j) {
                    if ($(j).parent().find(".racedan").attr("class").indexOf("curr") >= 0) {

                        dancount++;
                        danstr += $(j).find(".eventjzzjq").attr("id") + "(";
                        $(j).find("span").each(function (i1, j1) {
                            if ($(j1).attr("class").indexOf("curr") >= 0) {
                                danstr += (i1 + 1) + ",";
                            }
                        });
                        danstr = danstr.substring(0, danstr.length - 1) + ")|";
                    }
                    else {
                        str += $(j).find(".eventjzzjq").attr("id") + "(";
                        $(j).find("span").each(function (i1, j1) {
                            if ($(j1).attr("class").indexOf("curr") >= 0) {
                                str += (i1 + 1) + ",";
                            }
                        });
                        str = str.substring(0, str.length - 1) + ")|";
                    }
                });
                if (danstr != "") {
                    danstr = "[" + danstr.substring(0, danstr.length - 1) + "]";
                    dancount = ";[" + dancount + "]";
                }
                else {
                    dancount = "";
                }
                str = "[" + str.substring(0, str.length - 1) + "]";
                break;
            case 7204:
                $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                    if ($(j).parent().find(".racedan").attr("class").indexOf("curr") >= 0) {
                        dancount++;
                        danstr += $(j).parent().attr("id") + "(";
                        $(j).find(".betting_options").find(".optionslist").find("ul").find("div").each(function (i1, j1) {
                            if ($(j1).attr("class").indexOf("curr") >= 0) {
                                danstr += (i1 + 1) + ",";
                            }
                        });
                        danstr = danstr.substring(0, danstr.length - 1) + ")|";
                    }
                    else {
                        str += $(j).parent().attr("id") + "(";
                        $(j).find(".betting_options").find(".optionslist").find("ul").find("div").each(function (i1, j1) {
                            if ($(j1).attr("class").indexOf("curr") >= 0) {
                                str += (i1 + 1) + ",";
                            }
                        });
                        str = str.substring(0, str.length - 1) + ")|";
                    }
                });
                if (danstr != "") {
                    danstr = "[" + danstr.substring(0, danstr.length - 1) + "]";
                    dancount = ";[" + dancount + "]";
                }
                else {
                    dancount = "";
                }
                str = "[" + str.substring(0, str.length - 1) + "]";
                break;
            case 7206:
                $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                    var idno = $(j).find(".betting_options").attr("id");
                    str += idno + "(";
                    $(j).find(".betting_options").find(".optionslist").each(function (i1, j1) {
                        var num = 0;
                        switch (i1) {
                            case 0:
                                num = 500;
                                break;
                            case 1:
                                num = 100;
                                break;
                            case 2:
                                num = 300;
                                break;
                            case 3:
                                num = 200;
                                break;
                            case 4:
                                num = 400;
                                break;
                            default:
                                break;
                        }
                        $(j1).find("table").find("td").each(function (i2, j2) {
                            if ($(j2).attr("class").indexOf("curr") >= 0) {
                                str += (num + i2) + ",";
                            }
                        });
                    });
                    str = str.substring(0, str.length - 1) + ")|";
                });
                if (danstr != "") {
                    danstr = "[" + danstr.substring(0, danstr.length - 1) + "]";
                    dancount = ";[" + dancount + "]";
                }
                else {
                    dancount = "";
                }
                str = "[" + str.substring(0, str.length - 1) + "]";
                break;
            default:
                break;
        }
        if ($("#guogchobut").val().indexOf(",") >= 0) {
            var cg = $("#guogchobut").val().split(",");
            for (var i = 0; i < cg.length; i++) {
                cgstr += JCPlayCode(cg[i]) + ",";
            }
            cgstr = "[" + cgstr.substring(0, cgstr.length - 1) + "]";
        }
        else {
            cgstr = "[" + JCPlayCode($("#guogchobut").val()) + "]";
        }

        numberInfo = LotteryType + ";" + danstr + str + ";" + cgstr + dancount;
    }
    else {
        switch (LotteryType) {
            case 7201:
            case 7207:
                $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                    str += $(j).find(".spf").attr("id") + "(";
                    $(j).find("span").each(function (i1, j1) {
                        if ($(j1).attr("class").indexOf("curr") >= 0) {
                            str += (i1 + 1) + ",";
                        }
                    });
                    str = str.substring(0, str.length - 1) + ")|";
                });
                str = "[" + str.substring(0, str.length - 1) + "]";
                break;
            case 7202:
                $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                    str += $(j).parent().attr("id") + "(";
                    $(j).find(".betting_options").find(".optionslist2").find(".tabcon").find("ul").find("li").each(function (i1, j1) {
                        if ($(j1).attr("class").indexOf("curr") >= 0) {
                            str += (i1 + 1) + ",";
                        }
                    });
                    str = str.substring(0, str.length - 1) + ")|";
                });
                str = "[" + str.substring(0, str.length - 1) + "]";
                break;
            case 7203:
                $(".zqtz").find("ul").find(".racelist2").each(function (i, j) {
                    str += $(j).find(".eventjzzjq").attr("id") + "(";
                    $(j).find("span").each(function (i1, j1) {
                        if ($(j1).attr("class").indexOf("curr") >= 0) {
                            str += (i1 + 1) + ",";
                        }
                    });
                    str = str.substring(0, str.length - 1) + ")|";
                });
                str = "[" + str.substring(0, str.length - 1) + "]";
                break;
            case 7204:
                $(".zqtz").find("ul").find(".racelist").each(function (i, j) {
                    str += $(j).parent().attr("id") + "(";
                    $(j).find(".betting_options").find(".optionslist").find(".tabcon").find("ul").find("div").each(function (i1, j1) {
                        if ($(j1).attr("class").indexOf("curr") >= 0) {
                            str += (i1 + 1) + ",";
                        }
                    });
                    str = str.substring(0, str.length - 1) + ")|";
                });
                str = "[" + str.substring(0, str.length - 1) + "]";
                break;
            case 7206:
                break;
            default:
                break;
        }
        numberInfo = LotteryType + ";" + str + ";" + "[A0" + $("#num").val() + "]";
    }
        //    alert(numberInfo);
}

function JCPlayCode(cc){
    var nameCode = "";
    switch (cc) {
        case "2串1":
            nameCode = "AA"         //2串1
            break;
        case "3串1":
            nameCode = "AB";        //3串1
            break;
        case "4串1":
            nameCode = "AE";        //4串1
            break;
        case "5串1":
            nameCode = "AJ";        //5串1
            break;
        case "6串1":
            nameCode = "AQ";        //6串1
            break;
        case "7串1":
            nameCode = "BA";        //7串1
            break;
        case "8串1":
            nameCode = "BG";        //8串1
            break;
        case "3串3":
            nameCode = "AC";        //3串3
            break;
        case "3串4":
            nameCode = "AD";        //3串4
            break;
        case "4串4":
            nameCode = "AF";        //4串4
            break;
        case "4串5":
            nameCode = "AG";        //4串5
            break;
        case "4串6":
            nameCode = "AH";        //4串6
            break;
        case "4串11":
            nameCode = "AI";        //4串11
            break;
        case "5串5":
            nameCode = "AK";        //5串5
            break;
        case "5串6":
            nameCode = "AL";        //5串6
            break;
        case "5串10":
            nameCode = "AM";        //5串10
            break;
        case "5串16":
            nameCode = "AN";        //5串16
            break;
        case "5串20":
            nameCode = "AO";        //5串20
            break;
        case "5串26":
            nameCode = "AP";        //5串26
            break;
        case "6串6":
            nameCode = "AR";        //6串6
            break;
        case "6串7":
            nameCode = "AS";        //6串7
            break;
        case "6串15":
            nameCode = "AT";        //6串15
            break;
        case "6串20":
            nameCode = "AU";        //6串20
            break;
        case "6串22":
            nameCode = "AV";        //6串22
            break;
        case "6串35":
            nameCode = "AW";        //6串35
            break;
        case "6串42":
            nameCode = "AX";        //6串42
            break;
        case "6串50":
            nameCode = "AY";        //6串50
            break;
        case "6串57":
            nameCode = "AZ";        //6串57
            break;
        case "7串7":
            nameCode = "BB";        //7串7
            break;
        case "7串8":
            nameCode = "BC";        //7串8
            break;
        case "7串21":
            nameCode = "BD";        //7串21
            break;
        case "7串35":
            nameCode = "BE";        //7串35
            break;
        case "7串120":
            nameCode = "BF";        //7串120
            break;
        case "8串8":
            nameCode = "BH";        //8串8
            break;
        case "8串9":
            nameCode = "BI";        //8串9
            break;
        case "8串28":
            nameCode = "BJ";        //8串28
            break;
        case "8串56":
            nameCode = "BK";        //8串56
            break;
        case "8串70":
            nameCode = "BL";        //8串70
            break;
        case "8串247":
            nameCode = "BM";        //8串247
            break;
        default:
            break;
    }
    nameCode += $("#num").val();
    return nameCode;
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