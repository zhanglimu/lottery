var JCBP = {
    //500W 算注数调用方法。infoList和danList是非胆场数组，数组每项存储的是每场选择的赛果个数，BPName是串关字符串如“2串1”。
    BunchPassList: function (infoList, danList, BPName) {
        var BPNum = BPName.substring(0, 1);
        var infoNum = BPNum - danList.length;
        var BPcount = 0;
        switch (infoNum) {
            case 1:
                for (var i = 0; i < infoList.length; i++) {
                    var danInfo = "";
                    var maxdaninfo = "";
                    for (var k = 0; k < danList.length; k++) {
                        danInfo += danList[k] + ",";
                    }
                    if (danInfo != "") {
                        danInfo = danInfo.substring(0, danInfo.length - 1) + ",";
                    }
                    BPcount += this.BunchPassName(BPName, danInfo + infoList[i]);
                }
                break;
            case 2:
                for (var i = 0; i < infoList.length; i++) {
                    for (var j = i + 1; j < infoList.length; j++) {
                        var danInfo = "";
                        var maxdaninfo = "";
                        for (var k = 0; k < danList.length; k++) {
                            danInfo += danList[k] + ",";
                        }
                        if (danInfo != "") {
                            danInfo = danInfo.substring(0, danInfo.length - 1) + ",";
                        }
                        BPcount += this.BunchPassName(BPName, danInfo + infoList[i] + "," + infoList[j]);
                    }
                }
                break;
            case 3:
                for (var i = 0; i < infoList.length; i++) {
                    for (var j = i + 1; j < infoList.length; j++) {
                        for (var j1 = j + 1; j1 < infoList.length; j1++) {
                            var danInfo = "";
                            var maxdaninfo = "";
                            for (var k = 0; k < danList.length; k++) {
                                danInfo += danList[k] + ",";
                            }
                            if (danInfo != "") {
                                danInfo = danInfo.substring(0, danInfo.length - 1) + ",";
                            }
                            BPcount += this.BunchPassName(BPName, danInfo + infoList[i] + "," + infoList[j] + "," + infoList[j1]);
                        }
                    }
                }
                break;
            case 4:
                for (var i = 0; i < infoList.length; i++) {
                    for (var j = i + 1; j < infoList.length; j++) {
                        for (var j1 = j + 1; j1 < infoList.length; j1++) {
                            for (var j2 = j1 + 1; j2 < infoList.length; j2++) {
                                var danInfo = "";
                                for (var k = 0; k < danList.length; k++) {
                                    danInfo += danList[k] + ",";
                                }
                                if (danInfo != "") {
                                    danInfo = danInfo.substring(0, danInfo.length - 1) + ",";
                                }
                                BPcount += this.BunchPassName(BPName, danInfo + infoList[i] + "," + infoList[j] + "," + infoList[j1] + "," + infoList[j2]);
                            }
                        }
                    }
                }
                break;
            case 5:
                for (var i = 0; i < infoList.length; i++) {
                    for (var j = i + 1; j < infoList.length; j++) {
                        for (var j1 = j + 1; j1 < infoList.length; j1++) {
                            for (var j2 = j1 + 1; j2 < infoList.length; j2++) {
                                for (var j3 = j2 + 1; j3 < infoList.length; j3++) {
                                    var danInfo = "";
                                    for (var k = 0; k < danList.length; k++) {
                                        danInfo += danList[k] + ",";
                                    }
                                    if (danInfo != "") {
                                        danInfo = danInfo.substring(0, danInfo.length - 1) + ",";
                                    }
                                    BPcount += this.BunchPassName(BPName, danInfo + infoList[i] + "," + infoList[j] + "," + infoList[j1] + "," + infoList[j2] + "," + infoList[j3]);
                                }
                            }
                        }
                    }
                }
                break;
            case 6:
                for (var i = 0; i < infoList.length; i++) {
                    for (var j = i + 1; j < infoList.length; j++) {
                        for (var j1 = j + 1; j1 < infoList.length; j1++) {
                            for (var j2 = j1 + 1; j2 < infoList.length; j2++) {
                                for (var j3 = j2 + 1; j3 < infoList.length; j3++) {
                                    for (var j4 = j3 + 1; j4 < infoList.length; j4++) {
                                        var danInfo = "";
                                        for (var k = 0; k < danList.length; k++) {
                                            danInfo += danList[k] + ",";
                                        }
                                        if (danInfo != "") {
                                            danInfo = danInfo.substring(0, danInfo.length - 1) + ",";
                                        }
                                        BPcount += this.BunchPassName(BPName, danInfo + infoList[i] + "," + infoList[j] + "," + infoList[j1] + "," + infoList[j2] + "," + infoList[j3] + "," + infoList[j4]);
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 7:
                for (var i = 0; i < infoList.length; i++) {
                    for (var j = i + 1; j < infoList.length; j++) {
                        for (var j1 = j + 1; j1 < infoList.length; j1++) {
                            for (var j2 = j1 + 1; j2 < infoList.length; j2++) {
                                for (var j3 = j2 + 1; j3 < infoList.length; j3++) {
                                    for (var j4 = j3 + 1; j4 < infoList.length; j4++) {
                                        for (var j5 = j4 + 1; j5 < infoList.length; j5++) {
                                            var danInfo = "";
                                            for (var k = 0; k < danList.length; k++) {
                                                danInfo += danList[k] + ",";
                                            }
                                            if (danInfo != "") {
                                                danInfo = danInfo.substring(0, danInfo.length - 1) + ",";
                                            }
                                            BPcount += this.BunchPassName(BPName, danInfo + infoList[i] + "," + infoList[j] + "," + infoList[j1] + "," + infoList[j2] + "," + infoList[j3] + "," + infoList[j4] + "," + infoList[j5]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 8:
                for (var i = 0; i < infoList.length; i++) {
                    for (var j = i + 1; j < infoList.length; j++) {
                        for (var j1 = j + 1; j1 < infoList.length; j1++) {
                            for (var j2 = j1 + 1; j2 < infoList.length; j2++) {
                                for (var j3 = j2 + 1; j3 < infoList.length; j3++) {
                                    for (var j4 = j3 + 1; j4 < infoList.length; j4++) {
                                        for (var j5 = j4 + 1; j5 < infoList.length; j5++) {
                                            for (var j6 = j5 + 1; j6 < infoList.length; j6++) {
                                                var danInfo = "";
                                                for (var k = 0; k < danList.length; k++) {
                                                    danInfo += danList[k] + ",";
                                                }
                                                if (danInfo != "") {
                                                    danInfo = danInfo.substring(0, danInfo.length - 1) + ",";
                                                }
                                                BPcount += this.BunchPassName(BPName, danInfo + infoList[i] + "," + infoList[j] + "," + infoList[j1] + "," + infoList[j2] + "," + infoList[j3] + "," + infoList[j4] + "," + infoList[j5] + "," + infoList[j6]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            default:
                break;
        }
        return BPcount;
    },
    //500W 混合算注数
    BunchPassListHH: function (infoList, BPName) {
        var BPNum = parseInt(BPName.substring(0, 1));
        var BPcount = 0;
        switch (BPNum) {
            case 3:
                for (var i = 0; i < infoList.length - 2; i++) {
                    var s1 = infoList[i].split(",");
                    for (var v1 = 0; v1 < s1.length; v1++) {
                        for (var j = i + 1; j < infoList.length - 1; j++) {
                            var s2 = infoList[j].split(",");
                            for (var v2 = 0; v2 < s2.length; v2++) {
                                for (var j1 = j + 1; j1 < infoList.length; j1++) {
                                    var s3 = infoList[j1].split(",");
                                    for (var v3 = 0; v3 < s3.length; v3++) {
                                        BPcount += this.BunchPassName(BPName, s1[v1] + "," + s2[v2] + "," + s3[v3]);
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 4:
                for (var i = 0; i < infoList.length - 3; i++) {
                    var s1 = infoList[i].split(",");
                    for (var v1 = 0; v1 < s1.length; v1++) {
                        for (var j = i + 1; j < infoList.length - 2; j++) {
                            var s2 = infoList[j].split(",");
                            for (var v2 = 0; v2 < s2.length; v2++) {
                                for (var j1 = j + 1; j1 < infoList.length - 1; j1++) {
                                    var s3 = infoList[j1].split(",");
                                    for (var v3 = 0; v3 < s3.length; v3++) {
                                        for (var j2 = j1 + 1; j2 < infoList.length; j2++) {
                                            var s4 = infoList[j2].split(",");
                                            for (var v4 = 0; v4 < s4.length; v4++) {
                                                BPcount += this.BunchPassName(BPName, s1[v1] + "," + s2[v2] + "," + s3[v3] + "," + s4[v4]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 5:
                for (var i = 0; i < infoList.length - 4; i++) {
                    var s1 = infoList[i].split(",");
                    for (var v1 = 0; v1 < s1.length; v1++) {
                        for (var j = i + 1; j < infoList.length - 3; j++) {
                            var s2 = infoList[j].split(",");
                            for (var v2 = 0; v2 < s2.length; v2++) {
                                for (var j1 = j + 1; j1 < infoList.length - 2; j1++) {
                                    var s3 = infoList[j1].split(",");
                                    for (var v3 = 0; v3 < s3.length; v3++) {
                                        for (var j2 = j1 + 1; j2 < infoList.length - 1; j2++) {
                                            var s4 = infoList[j2].split(",");
                                            for (var v4 = 0; v4 < s4.length; v4++) {
                                                for (var j3 = j2 + 1; j3 < infoList.length; j3++) {
                                                    var s5 = infoList[j3].split(",");
                                                    for (var v5 = 0; v5 < s5.length; v5++) {
                                                        BPcount += this.BunchPassName(BPName, s1[v1] + "," + s2[v2] + "," + s3[v3] + "," + s4[v4] + "," + s5[v5]);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 6:
                for (var i = 0; i < infoList.length - 5; i++) {
                    var s1 = infoList[i].split(",");
                    for (var v1 = 0; v1 < s1.length; v1++) {
                        for (var j = i + 1; j < infoList.length - 4; j++) {
                            var s2 = infoList[j].split(",");
                            for (var v2 = 0; v2 < s2.length; v2++) {
                                for (var j1 = j + 1; j1 < infoList.length - 3; j1++) {
                                    var s3 = infoList[j1].split(",");
                                    for (var v3 = 0; v3 < s3.length; v3++) {
                                        for (var j2 = j1 + 1; j2 < infoList.length - 2; j2++) {
                                            var s4 = infoList[j2].split(",");
                                            for (var v4 = 0; v4 < s4.length; v4++) {
                                                for (var j3 = j2 + 1; j3 < infoList.length - 1; j3++) {
                                                    var s5 = infoList[j3].split(",");
                                                    for (var v5 = 0; v5 < s5.length; v5++) {
                                                        for (var j4 = j3 + 1; j4 < infoList.length; j4++) {
                                                            var s6 = infoList[j4].split(",");
                                                            for (var v6 = 0; v6 < s6.length; v6++) {
                                                                BPcount += this.BunchPassName(BPName, s1[v1] + "," + s2[v2] + "," + s3[v3] + "," + s4[v4] + "," + s5[v5] + "," + s6[v6]);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 7:
                for (var i = 0; i < infoList.length - 6; i++) {
                    var s1 = infoList[i].split(",");
                    for (var v1 = 0; v1 < s1.length; v1++) {
                        for (var j = i + 1; j < infoList.length - 5; j++) {
                            var s2 = infoList[j].split(",");
                            for (var v2 = 0; v2 < s2.length; v2++) {
                                for (var j1 = j + 1; j1 < infoList.length - 4; j1++) {
                                    var s3 = infoList[j1].split(",");
                                    for (var v3 = 0; v3 < s3.length; v3++) {
                                        for (var j2 = j1 + 1; j2 < infoList.length - 3; j2++) {
                                            var s4 = infoList[j2].split(",");
                                            for (var v4 = 0; v4 < s4.length; v4++) {
                                                for (var j3 = j2 + 1; j3 < infoList.length - 2; j3++) {
                                                    var s5 = infoList[j3].split(",");
                                                    for (var v5 = 0; v5 < s5.length; v5++) {
                                                        for (var j4 = j3 + 1; j4 < infoList.length - 1; j4++) {
                                                            var s6 = infoList[j4].split(",");
                                                            for (var v6 = 0; v6 < s6.length; v6++) {
                                                                for (var j5 = j4 + 1; j5 < infoList.length; j5++) {
                                                                    var s7 = infoList[j5].split(",");
                                                                    for (var v7 = 0; v7 < s7.length; v7++) {
                                                                        BPcount += this.BunchPassName(BPName, s1[v1] + "," + s2[v2] + "," + s3[v3] + "," + s4[v4] + "," + s5[v5] + "," + s6[v6] + "," + s7[v7]);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 8:
                for (var i = 0; i < infoList.length - 7; i++) {
                    var s1 = infoList[i].split(",");
                    for (var v1 = 0; v1 < s1.length; v1++) {
                        for (var j = i + 1; j < infoList.length - 6; j++) {
                            var s2 = infoList[j].split(",");
                            for (var v2 = 0; v2 < s2.length; v2++) {
                                for (var j1 = j + 1; j1 < infoList.length - 5; j1++) {
                                    var s3 = infoList[j1].split(",");
                                    for (var v3 = 0; v3 < s3.length; v3++) {
                                        for (var j2 = j1 + 1; j2 < infoList.length - 4; j2++) {
                                            var s4 = infoList[j2].split(",");
                                            for (var v4 = 0; v4 < s4.length; v4++) {
                                                for (var j3 = j2 + 1; j3 < infoList.length - 3; j3++) {
                                                    var s5 = infoList[j3].split(",");
                                                    for (var v5 = 0; v5 < s5.length; v5++) {
                                                        for (var j4 = j3 + 1; j4 < infoList.length - 2; j4++) {
                                                            var s6 = infoList[j4].split(",");
                                                            for (var v6 = 0; v6 < s6.length; v6++) {
                                                                for (var j5 = j4 + 1; j5 < infoList.length - 1; j5++) {
                                                                    var s7 = infoList[j5].split(",");
                                                                    for (var v7 = 0; v7 < s7.length; v7++) {
                                                                        for (var j6 = j5 + 1; j6 < infoList.length; j6++) {
                                                                            var s8 = infoList[j6].split(",");
                                                                            BPcount += this.BunchPassName(BPName, s1[v1] + "," + s2[v2] + "," + s3[v3] + "," + s4[v4] + "," + s5[v5] + "," + s6[v6] + "," + s7[v7] + "," + s8[v8]);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            default:
                break;
        }
        return BPcount;
    },
    //500W 算预计奖金调用方法。maxList和maxdanList是非胆场数组，数组每项存储的是每场选择的赛果赔率中最大赔率，BPName是串关字符串如“2串1”。
    BunchPassMaxMoney: function (maxList, maxdanList, BPName) {
        var maxNum = BPName.substring(0, 1);
        var infoNum = maxNum - maxdanList.length;
        var maxMoney = 0;
        switch (infoNum) {
            case 1:
                for (var i = 0; i < maxList.length; i++) {
                    var maxdaninfo = "";
                    for (var k = 0; k < maxdanList.length; k++) {
                        maxdaninfo += maxdanList[k] + ",";
                    }
                    if (maxdaninfo != "") {
                        maxdaninfo = maxdaninfo.substring(0, maxdaninfo.length - 1) + ",";
                    }
                    maxMoney += this.BunchPassName(BPName, maxdaninfo + maxList[i]);
                }
                break;
            case 2:
                for (var i = 0; i < maxList.length; i++) {
                    for (var j = i + 1; j < maxList.length; j++) {
                        var maxdaninfo = "";
                        for (var k = 0; k < maxdanList.length; k++) {
                            maxdaninfo += maxdanList[k] + ",";
                        }
                        if (maxdaninfo != "") {
                            maxdaninfo = maxdaninfo.substring(0, maxdaninfo.length - 1) + ",";
                        }
                        maxMoney += this.BunchPassName(BPName, maxdaninfo + maxList[i] + "," + maxList[j]);
                    }
                }
                break;
            case 3:
                for (var i = 0; i < maxList.length; i++) {
                    for (var j = i + 1; j < maxList.length; j++) {
                        for (var j1 = j + 1; j1 < maxList.length; j1++) {
                            var maxdaninfo = "";
                            for (var k = 0; k < maxdanList.length; k++) {
                                maxdaninfo += maxdanList[k] + ",";
                            }
                            if (maxdaninfo != "") {
                                maxdaninfo = maxdaninfo.substring(0, maxdaninfo.length - 1) + ",";
                            }
                            maxMoney += this.BunchPassName(BPName, maxdaninfo + maxList[i] + "," + maxList[j] + "," + maxList[j1]);
                        }
                    }
                }
                break;
            case 4:
                for (var i = 0; i < maxList.length; i++) {
                    for (var j = i + 1; j < maxList.length; j++) {
                        for (var j1 = j + 1; j1 < maxList.length; j1++) {
                            for (var j2 = j1 + 1; j2 < maxList.length; j2++) {
                                var maxdaninfo = "";
                                for (var k = 0; k < maxdanList.length; k++) {
                                    maxdaninfo += maxdanList[k] + ",";
                                }
                                if (maxdaninfo != "") {
                                    maxdaninfo = maxdaninfo.substring(0, maxdaninfo.length - 1) + ",";
                                }
                                maxMoney += this.BunchPassName(BPName, maxdaninfo + maxList[i] + "," + maxList[j] + "," + maxList[j1] + "," + maxList[j2]);
                            }
                        }
                    }
                }
                break;
            case 5:
                for (var i = 0; i < maxList.length; i++) {
                    for (var j = i + 1; j < maxList.length; j++) {
                        for (var j1 = j + 1; j1 < maxList.length; j1++) {
                            for (var j2 = j1 + 1; j2 < maxList.length; j2++) {
                                for (var j3 = j2 + 1; j3 < maxList.length; j3++) {
                                    var maxdaninfo = "";
                                    for (var k = 0; k < maxdanList.length; k++) {
                                        maxdaninfo += maxdanList[k] + ",";
                                    }
                                    if (maxdaninfo != "") {
                                        maxdaninfo = maxdaninfo.substring(0, maxdaninfo.length - 1) + ",";
                                    }
                                    maxMoney += this.BunchPassName(BPName, maxdaninfo + maxList[i] + "," + maxList[j] + "," + maxList[j1] + "," + maxList[j2] + "," + maxList[j3]);
                                }
                            }
                        }
                    }
                }
                break;
            case 6:
                for (var i = 0; i < maxList.length; i++) {
                    for (var j = i + 1; j < maxList.length; j++) {
                        for (var j1 = j + 1; j1 < maxList.length; j1++) {
                            for (var j2 = j1 + 1; j2 < maxList.length; j2++) {
                                for (var j3 = j2 + 1; j3 < maxList.length; j3++) {
                                    for (var j4 = j3 + 1; j4 < maxList.length; j4++) {
                                        var maxdaninfo = "";
                                        for (var k = 0; k < maxdanList.length; k++) {
                                            maxdaninfo += maxdanList[k] + ",";
                                        }
                                        if (maxdaninfo != "") {
                                            maxdaninfo = maxdaninfo.substring(0, maxdaninfo.length - 1) + ",";
                                        }
                                        maxMoney += this.BunchPassName(BPName, maxdaninfo + maxList[i] + "," + maxList[j] + "," + maxList[j1] + "," + maxList[j2] + "," + maxList[j3] + "," + maxList[j4]);
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 7:
                for (var i = 0; i < maxList.length; i++) {
                    for (var j = i + 1; j < maxList.length; j++) {
                        for (var j1 = j + 1; j1 < maxList.length; j1++) {
                            for (var j2 = j1 + 1; j2 < maxList.length; j2++) {
                                for (var j3 = j2 + 1; j3 < maxList.length; j3++) {
                                    for (var j4 = j3 + 1; j4 < maxList.length; j4++) {
                                        for (var j5 = j4 + 1; j5 < maxList.length; j5++) {
                                            var maxdaninfo = "";
                                            for (var k = 0; k < maxdanList.length; k++) {
                                                maxdaninfo += maxdanList[k] + ",";
                                            }
                                            if (maxdaninfo != "") {
                                                maxdaninfo = maxdaninfo.substring(0, maxdaninfo.length - 1) + ",";
                                            }
                                            maxMoney += this.BunchPassName(BPName, maxdaninfo + maxList[i] + "," + maxList[j] + "," + maxList[j1] + "," + maxList[j2] + "," + maxList[j3] + "," + maxList[j4] + "," + maxList[j5]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 8:
                for (var i = 0; i < maxList.length; i++) {
                    for (var j = i + 1; j < maxList.length; j++) {
                        for (var j1 = j + 1; j1 < maxList.length; j1++) {
                            for (var j2 = j1 + 1; j2 < maxList.length; j2++) {
                                for (var j3 = j2 + 1; j3 < maxList.length; j3++) {
                                    for (var j4 = j3 + 1; j4 < maxList.length; j4++) {
                                        for (var j5 = j4 + 1; j5 < maxList.length; j5++) {
                                            for (var j6 = j5 + 1; j6 < maxList.length; j6++) {
                                                var maxdaninfo = "";
                                                for (var k = 0; k < maxdanList.length; k++) {
                                                    maxdaninfo += maxdanList[k] + ",";
                                                }
                                                if (maxdaninfo != "") {
                                                    maxdaninfo = maxdaninfo.substring(0, maxdaninfo.length - 1) + ",";
                                                }
                                                maxMoney += this.BunchPassName(BPName, maxdaninfo + maxList[i] + "," + maxList[j] + "," + maxList[j1] + "," + maxList[j2] + "," + maxList[j3] + "," + maxList[j4] + "," + maxList[j5] + "," + maxList[j6]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            default:
                break;
        }
        return maxMoney;
    },

    BunchPassMaxMoneyHH: function (maxList, BPName) {
        var maxNum = parseInt(BPName.substring(0, 1));
        var maxMoney = 0;
        switch (maxNum) {
            case 2:
                for (var i = 0; i < maxList.length - 1; i++) {
                    var s1 = maxList[i].split(",");
                    for (var v1 = 0; v1 < s1.length; v1++) {
                        for (var j = i + 1; j < maxList.length; j++) {
                            var s2 = maxList[j].split(",");
                            for (var v2 = 0; v2 < s2.length; v2++) {
                                maxMoney += this.BunchPassName(BPName, s1[v1] + "," + s2[v2]);
                            }
                        }
                    }
                }
                break;
            case 3:
                for (var i = 0; i < maxList.length - 2; i++) {
                    var s1 = maxList[i].split(",");
                    for (var v1 = 0; v1 < s1.length; v1++) {
                        for (var j = i + 1; j < maxList.length - 1; j++) {
                            var s2 = maxList[j].split(",");
                            for (var v2 = 0; v2 < s2.length; v2++) {
                                for (var j1 = j + 1; j1 < maxList.length; j1++) {
                                    var s3 = maxList[j1].split(",");
                                    for (var v3 = 0; v3 < s3.length; v3++) {
                                        maxMoney += this.BunchPassName(BPName, s1[v1] + "," + s2[v2] + "," + s3[v3]);
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 4:
                for (var i = 0; i < maxList.length - 3; i++) {
                    var s1 = maxList[i].split(",");
                    for (var v1 = 0; v1 < s1.length; v1++) {
                        for (var j = i + 1; j < maxList.length - 2; j++) {
                            var s2 = maxList[j].split(",");
                            for (var v2 = 0; v2 < s2.length; v2++) {
                                for (var j1 = j + 1; j1 < maxList.length - 1; j1++) {
                                    var s3 = maxList[j1].split(",");
                                    for (var v3 = 0; v3 < s3.length; v3++) {
                                        for (var j2 = j1 + 1; j2 < maxList.length; j2++) {
                                            var s4 = maxList[j2].split(",");
                                            for (var v4 = 0; v4 < s4.length; v4++) {
                                                maxMoney += this.BunchPassName(BPName, s1[v1] + "," + s2[v2] + "," + s3[v3] + "," + s4[v4]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 5:
                for (var i = 0; i < maxList.length - 4; i++) {
                    var s1 = maxList[i].split(",");
                    for (var v1 = 0; v1 < s1.length; v1++) {
                        for (var j = i + 1; j < maxList.length - 3; j++) {
                            var s2 = maxList[j].split(",");
                            for (var v2 = 0; v2 < s2.length; v2++) {
                                for (var j1 = j + 1; j1 < maxList.length - 2; j1++) {
                                    var s3 = maxList[j1].split(",");
                                    for (var v3 = 0; v3 < s3.length; v3++) {
                                        for (var j2 = j1 + 1; j2 < maxList.length - 1; j2++) {
                                            var s4 = maxList[j2].split(",");
                                            for (var v4 = 0; v4 < s4.length; v4++) {
                                                for (var j3 = j2 + 1; j3 < maxList.length; j3++) {
                                                    var s5 = maxList[j3].split(",");
                                                    for (var v5 = 0; v5 < s5.length; v5++) {
                                                        maxMoney += this.BunchPassName(BPName, s1[v1] + "," + s2[v2] + "," + s3[v3] + "," + s4[v4] + "," + s5[v5]);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 6:
                for (var i = 0; i < maxList.length - 5; i++) {
                    var s1 = maxList[i].split(",");
                    for (var v1 = 0; v1 < s1.length; v1++) {
                        for (var j = i + 1; j < maxList.length - 4; j++) {
                            var s2 = maxList[j].split(",");
                            for (var v2 = 0; v2 < s2.length; v2++) {
                                for (var j1 = j + 1; j1 < maxList.length - 3; j1++) {
                                    var s3 = maxList[j1].split(",");
                                    for (var v3 = 0; v3 < s3.length; v3++) {
                                        for (var j2 = j1 + 1; j2 < maxList.length - 2; j2++) {
                                            var s4 = maxList[j2].split(",");
                                            for (var v4 = 0; v4 < s4.length; v4++) {
                                                for (var j3 = j2 + 1; j3 < maxList.length - 1; j3++) {
                                                    var s5 = maxList[j3].split(",");
                                                    for (var v5 = 0; v5 < s5.length; v5++) {
                                                        for (var j4 = j3 + 1; j4 < maxList.length; j4++) {
                                                            var s6 = maxList[j4].split(",");
                                                            for (var v6 = 0; v6 < s6.length; v6++) {
                                                                maxMoney += this.BunchPassName(BPName, s1[v1] + "," + s2[v2] + "," + s3[v3] + "," + s4[v4] + "," + s5[v5] + "," + s6[v6]);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 7:
                for (var i = 0; i < maxList.length - 6; i++) {
                    var s1 = maxList[i].split(",");
                    for (var v1 = 0; v1 < s1.length; v1++) {
                        for (var j = i + 1; j < maxList.length - 5; j++) {
                            var s2 = maxList[j].split(",");
                            for (var v2 = 0; v2 < s2.length; v2++) {
                                for (var j1 = j + 1; j1 < maxList.length - 4; j1++) {
                                    var s3 = maxList[j1].split(",");
                                    for (var v3 = 0; v3 < s3.length; v3++) {
                                        for (var j2 = j1 + 1; j2 < maxList.length - 3; j2++) {
                                            var s4 = maxList[j2].split(",");
                                            for (var v4 = 0; v4 < s4.length; v4++) {
                                                for (var j3 = j2 + 1; j3 < maxList.length - 2; j3++) {
                                                    var s5 = maxList[j3].split(",");
                                                    for (var v5 = 0; v5 < s5.length; v5++) {
                                                        for (var j4 = j3 + 1; j4 < maxList.length - 1; j4++) {
                                                            var s6 = maxList[j4].split(",");
                                                            for (var v6 = 0; v6 < s6.length; v6++) {
                                                                for (var j5 = j4 + 1; j5 < maxList.length; j5++) {
                                                                    var s7 = maxList[j5].split(",");
                                                                    for (var v7 = 0; v7 < s7.length; v7++) {
                                                                        maxMoney += this.BunchPassName(BPName, s1[v1] + "," + s2[v2] + "," + s3[v3] + "," + s4[v4] + "," + s5[v5] + "," + s6[v6] + "," + s7[v7]);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 8:
                for (var i = 0; i < maxList.length - 7; i++) {
                    var s1 = maxList[i].split(",");
                    for (var v1 = 0; v1 < s1.length; v1++) {
                        for (var j = i + 1; j < maxList.length - 6; j++) {
                            var s2 = maxList[j].split(",");
                            for (var v2 = 0; v2 < s2.length; v2++) {
                                for (var j1 = j + 1; j1 < maxList.length - 5; j1++) {
                                    var s3 = maxList[j1].split(",");
                                    for (var v3 = 0; v3 < s3.length; v3++) {
                                        for (var j2 = j1 + 1; j2 < maxList.length - 4; j2++) {
                                            var s4 = maxList[j2].split(",");
                                            for (var v4 = 0; v4 < s4.length; v4++) {
                                                for (var j3 = j2 + 1; j3 < maxList.length - 3; j3++) {
                                                    var s5 = maxList[j3].split(",");
                                                    for (var v5 = 0; v5 < s5.length; v5++) {
                                                        for (var j4 = j3 + 1; j4 < maxList.length - 2; j4++) {
                                                            var s6 = maxList[j4].split(",");
                                                            for (var v6 = 0; v6 < s6.length; v6++) {
                                                                for (var j5 = j4 + 1; j5 < maxList.length - 1; j5++) {
                                                                    var s7 = maxList[j5].split(",");
                                                                    for (var v7 = 0; v7 < s7.length; v7++) {
                                                                        for (var j6 = j5 + 1; j6 < maxList.length; j6++) {
                                                                            var s8 = maxList[j6].split(",");
                                                                            maxMoney += this.BunchPassName(BPName, s1[v1] + "," + s2[v2] + "," + s3[v3] + "," + s4[v4] + "," + s5[v5] + "," + s6[v6] + "," + s7[v7] + "," + s8[v8]);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            default:
                break;
        }
        return maxMoney;
    },

    BunchPassName: function (BPName, BPNumber) {            //串关方式
        var Acount = 0;
        switch (BPName) {
            case "2串1":
                Acount = this.BunchPass2C1(BPNumber);
                break;
            case "3串1":
                Acount = this.BunchPass3C1(BPNumber);
                break;
            case "3串3":
                Acount = this.BunchPass2C1(BPNumber);
                break;
            case "3串4":
                Acount = this.BunchPass2C1(BPNumber) + this.BunchPass3C1(BPNumber);
                break;
            case "4串1":
                Acount = this.BunchPass4C1(BPNumber);
                break;
            case "4串4":
                Acount = this.BunchPass3C1(BPNumber);
                break;
            case "4串5":
                Acount = this.BunchPass3C1(BPNumber) + this.BunchPass4C1(BPNumber);
                break;
            case "4串6":
                Acount = this.BunchPass2C1(BPNumber);
                break;
            case "4串11":
                Acount = this.BunchPass2C1(BPNumber) + this.BunchPass3C1(BPNumber) + this.BunchPass4C1(BPNumber);
                break;
            case "5串1":
                Acount = this.BunchPass5C1(BPNumber);
                break;
            case "5串5":
                Acount = this.BunchPass4C1(BPNumber);
                break;
            case "5串6":
                Acount = this.BunchPass4C1(BPNumber) + this.BunchPass5C1(BPNumber);
                break;
            case "5串10":
                Acount = this.BunchPass2C1(BPNumber);
                break;
            case "5串16":
                Acount = this.BunchPass3C1(BPNumber) + this.BunchPass4C1(BPNumber) + this.BunchPass5C1(BPNumber);
                break;
            case "5串20":
                Acount = this.BunchPass2C1(BPNumber) + this.BunchPass3C1(BPNumber);
                break;
            case "5串26":
                Acount = this.BunchPass2C1(BPNumber) + this.BunchPass3C1(BPNumber) + this.BunchPass4C1(BPNumber) + this.BunchPass5C1(BPNumber);
                break;
            case "6串1":
                Acount = this.BunchPass6C1(BPNumber);
                break;
            case "6串6":
                Acount = this.BunchPass5C1(BPNumber);
                break;
            case "6串7":
                Acount = this.BunchPass5C1(BPNumber) + this.BunchPass6C1(BPNumber);
                break;
            case "6串15":
                Acount = this.BunchPass2C1(BPNumber);
                break;
            case "6串20":
                Acount = this.BunchPass3C1(BPNumber);
                break;
            case "6串22":
                Acount = this.BunchPass4C1(BPNumber) + this.BunchPass5C1(BPNumber) + this.BunchPass6C1(BPNumber);
                break;
            case "6串35":
                Acount = this.BunchPass2C1(BPNumber) + this.BunchPass3C1(BPNumber);
                break;
            case "6串42":
                Acount = this.BunchPass3C1(BPNumber) + this.BunchPass4C1(BPNumber) + this.BunchPass5C1(BPNumber) + this.BunchPass6C1(BPNumber);
                break;
            case "6串50":
                Acount = this.BunchPass2C1(BPNumber) + this.BunchPass3C1(BPNumber) + this.BunchPass4C1(BPNumber);
                break;
            case "6串57":
                Acount = this.BunchPass2C1(BPNumber) + this.BunchPass3C1(BPNumber) + this.BunchPass4C1(BPNumber) + this.BunchPass5C1(BPNumber) + this.BunchPass6C1(BPNumber);
                break;
            case "7串1":
                Acount = this.BunchPass7C1(BPNumber);
                break;
            case "7串7":
                Acount = this.BunchPass6C1(BPNumber);
                break;
            case "7串8":
                Acount = this.BunchPass6C1(BPNumber) + this.BunchPass7C1(BPNumber);
                break;
            case "7串21":
                Acount = this.BunchPass5C1(BPNumber);
                break;
            case "7串35":
                Acount = this.BunchPass4C1(BPNumber);
                break;
            case "7串120":
                Acount = this.BunchPass2C1(BPNumber) + this.BunchPass3C1(BPNumber) + this.BunchPass4C1(BPNumber) + this.BunchPass5C1(BPNumber) + this.BunchPass6C1(BPNumber) + this.BunchPass7C1(BPNumber);
                break;
            case "8串1":
                Acount = this.BunchPass8C1(BPNumber);
                break;
            case "8串8":
                Acount = this.BunchPass7C1(BPNumber);
                break;
            case "8串9":
                Acount = this.BunchPass7C1(BPNumber) + this.BunchPass8C1(BPNumber);
                break;
            case "8串28":
                Acount = this.BunchPass6C1(BPNumber);
                break;
            case "8串56":
                Acount = this.BunchPass5C1(BPNumber);
                break;
            case "8串70":
                Acount = this.BunchPass4C1(BPNumber);
                break;
            case "8串247":
                Acount = this.BunchPass2C1(BPNumber) + this.BunchPass3C1(BPNumber) + this.BunchPass4C1(BPNumber) + this.BunchPass5C1(BPNumber) + this.BunchPass6C1(BPNumber) + this.BunchPass7C1(BPNumber) + this.BunchPass8C1(BPNumber);
                break;
            default:
                break;
        }
        return Acount;
    },

    BunchPass2C1: function (number) {
        var n = number.split(",");
        var m = number.split(",").length;
        var str = 0;
        for (var i = 0; i < m; i++) {
            for (var j = i + 1; j < m; j++) {
                str += parseFloat(n[i]) * parseFloat(n[j]);
            }
        }
        return str;
    },

    BunchPass3C1: function (number) {
        var n = number.split(",");
        var m = number.split(",").length;
        var str = 0;
        for (var i = 0; i < m; i++) {
            for (var j = i + 1; j < m; j++) {
                for (var j1 = j + 1; j1 < m; j1++) {
                    str += parseFloat(n[i]) * parseFloat(n[j]) * parseFloat(n[j1]);
                }
            }
        }
        return str;
    },

    BunchPass4C1: function (number) {
        var n = number.split(",");
        var m = number.split(",").length;
        var str = 0;
        for (var i = 0; i < m; i++) {
            for (var j = i + 1; j < m; j++) {
                for (var j1 = j + 1; j1 < m; j1++) {
                    for (var j2 = j1 + 1; j2 < m; j2++) {
                        str += parseFloat(n[i]) * parseFloat(n[j]) * parseFloat(n[j1]) * parseFloat(n[j2]);
                    }
                }
            }
        }
        return str;
    },

    BunchPass5C1: function (number) {
        var n = number.split(",");
        var m = number.split(",").length;
        var str = 0;
        for (var i = 0; i < m; i++) {
            for (var j = i + 1; j < m; j++) {
                for (var j1 = j + 1; j1 < m; j1++) {
                    for (var j2 = j1 + 1; j2 < m; j2++) {
                        for (var j3 = j2 + 1; j3 < m; j3++) {
                            str += parseFloat(n[i]) * parseFloat(n[j]) * parseFloat(n[j1]) * parseFloat(n[j2]) * parseFloat(n[j3]);
                        }
                    }
                }
            }
        }
        return str;
    },

    BunchPass6C1: function (number) {
        var n = number.split(",");
        var m = number.split(",").length;
        var str = 0;
        for (var i = 0; i < m; i++) {
            for (var j = i + 1; j < m; j++) {
                for (var j1 = j + 1; j1 < m; j1++) {
                    for (var j2 = j1 + 1; j2 < m; j2++) {
                        for (var j3 = j2 + 1; j3 < m; j3++) {
                            for (var j4 = j3 + 1; j4 < m; j4++) {
                                str += parseFloat(n[i]) * parseFloat(n[j]) * parseFloat(n[j1]) * parseFloat(n[j2]) * parseFloat(n[j3]) * parseFloat(n[j4]);
                            }
                        }
                    }
                }
            }
        }
        return str;
    },

    BunchPass7C1: function (number) {
        var n = number.split(",");
        var m = number.split(",").length;
        var str = 0;
        for (var i = 0; i < m; i++) {
            for (var j = i + 1; j < m; j++) {
                for (var j1 = j + 1; j1 < m; j1++) {
                    for (var j2 = j1 + 1; j2 < m; j2++) {
                        for (var j3 = j2 + 1; j3 < m; j3++) {
                            for (var j4 = j3 + 1; j4 < m; j4++) {
                                for (var j5 = j4 + 1; j5 < m; j5++) {
                                    str += parseFloat(n[i]) * parseFloat(n[j]) * parseFloat(n[j1]) * parseFloat(n[j2]) * parseFloat(n[j3]) * parseFloat(n[j4]) * parseFloat(n[j5]);
                                }
                            }
                        }
                    }
                }

            }
        }
        return str;
    },

    BunchPass8C1: function (number) {
        var n = number.split(",");
        var m = number.split(",").length;
        var str = 0;
        for (var i = 0; i < m; i++) {
            for (var j = i + 1; j < m; j++) {
                for (var j1 = j + 1; j1 < m; j1++) {
                    for (var j2 = j1 + 1; j2 < m; j2++) {
                        for (var j3 = j2 + 1; j3 < m; j3++) {
                            for (var j4 = j3 + 1; j4 < m; j4++) {
                                for (var j5 = j4 + 1; j5 < m; j5++) {
                                    for (var j6 = j5 + 1; j6 < m; j6++) {
                                        str += parseFloat(n[i]) * parseFloat(n[j]) * parseFloat(n[j1]) * parseFloat(n[j2]) * parseFloat(n[j3]) * parseFloat(n[j4]) * parseFloat(n[j5]) * parseFloat(n[j6]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return str;
    }
}