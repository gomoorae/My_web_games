(()=>{var Mm=Object.defineProperty;var mt=(n,e)=>()=>(n&&(e=n(n=0)),e);var Sm=(n,e)=>{for(var t in e)Mm(n,t,{get:e[t],enumerable:!0})};function Ie(n,e,t,i="\uAC00\uC18D \uC218\uBB38"){return{kind:"gate",start:n,offset:e,width:t,name:i}}function $e(n,e,t,i,s,r="\uB098\uB8E8 \uBC1C\uD310",o){let a=o>0;return{kind:"ramp",start:n,end:e,offset:t,width:i,rise:s,name:r,boosted:a,kick:a?o:2.2}}function gt(n,e,t,i,s,r="\uBC14\uC704 \uC5EC\uC6B8"){return{kind:"ledge",start:n,end:e,offset:t,width:i,rise:s,name:r}}var Ml=mt(()=>{});var Se,En,an,K,Vs,Wt,tt,dt,_t,Rt,zt,bm,Em,Tm,wm,Ko,Am,Rm,Uu,Fu=mt(()=>{Ml();Se=(n,e)=>$e(n,n+12,e,6.4,1.3,"\uB098\uBB34 \uB3C4\uC57D\uB300"),En=(n,e)=>$e(n,n+14,e,6.6,1.78,"\uAC00\uC18D \uB3C4\uC57D\uB300",3.5),an=(n,e)=>gt(n,n+14,e,7.2,1.36,"\uB3CC\uC5EC\uC6B8"),K=(n,e)=>Ie(n,e,7.3),Vs=n=>({...n,markerStep:59,docks:[],bars:{...n.bars,shared:[[n.fork-26,n.fork-14,-4.3,1.45],[n.fork-12,n.fork-.2,4.9,1.55],...n.bars.shared||[]]},bridges:{shared:[],gorge:[],canal:[],marsh:[],...n.bridges}}),Wt=(n,e,t=2.2,i=0)=>({kind:"log",s:n,offset:e,reach:t,phase:i}),tt=(n,e,t=85)=>({kind:"wind",s:n,end:n+t,dir:e}),dt=(n,e=1,t=0,i=68)=>({kind:"outlet",s:n,end:n+i,side:e,phase:t}),_t=(n,e,t=7,i=82)=>({kind:"ice",s:n,end:n+i,offset:e,width:t}),Rt=(n,e)=>({kind:"charge",s:n,offset:e,width:5.4}),zt=(n,e=0,t=0)=>({kind:"lock",s:n,offset:e,phase:t}),bm=Vs({id:"timber",name:"\uC0BC\uB098\uBB34 \uC81C\uC7AC\uC18C",length:2500,fork:94,merge:2210,seed:12873,description:"\uBB3C\uC5D0 \uB72C \uD1B5\uB098\uBB34\uC758 \uC6C0\uC9C1\uC784\uC744 \uC77D\uACE0 \uBE48\uD2C8\uC73C\uB85C \uBE60\uC838\uB098\uAC00\uC138\uC694.",cellStations:{gorge:264,canal:761,marsh:1325},lanes:{gorge:[-64,12,369,.35,18],canal:[0,5,268,.65,14.7],marsh:[68,14,411,1.9,21.5]},valley:[12,452,6,294],opening:[106,163],outlet:17,flow:{width:3,speed:5.3,saving:.42,draw:.75,assist:.78},elevation:{grade:.035,drop:128,head:.051,tail:.037,shared:[[2246,2330,14],[2372,2455,13]],gorge:[[160,351,23],[505,706,24],[881,1081,25],[1269,1441,20],[1581,1769,18],[1919,2144,18]],canal:[[235,365,18],[580,778,24],[923,1110,27],[1342,1514,21],[1630,1791,18],[1964,2137,20]],marsh:[[159,539,24],[645,982,31],[1118,1489,29],[1591,1896,23],[1955,2161,21]]},features:{shared:[K(54,1.4),K(2262,4.2),Se(2362,-5),K(2461,2)],gorge:[an(164,-3),K(382,4.4),Se(568,-4.8),K(804,3.5),an(1002,-4.3),K(1214,-3.8),Se(1436,4.7),K(1656,-4.1),an(1850,4.4),K(2081,-3.4)],canal:[K(149,2.2),K(336,-4.6),En(522,4),K(697,-3.8),Se(910,4.5),K(1093,-4.7),En(1350,-4.3),K(1575,3.7),K(1788,-4.7),Se(1973,4),K(2116,-3)],marsh:[Se(184,-3.9),K(430,3.4),Se(657,4.5),K(884,-4.8),Se(1103,3.1),K(1280,-4.7),Se(1508,4.8),K(1746,-4),Se(1961,-4.2),K(2138,2.6)]},bars:{gorge:[[430,483,-4,3.1],[853,906,4.7,2.9],[1290,1345,4.3,3.2],[1736,1798,-4.2,3.4]],canal:[[391,447,4.4,2.5],[960,1006,-4,3],[1433,1488,4.3,2.8],[1852,1906,4.1,2.9]],marsh:[[271,357,-2.5,4.8],[504,589,2.3,4.6],[758,837,-2.7,4.5],[1002,1066,3,4.7],[1397,1465,-2,4.9],[1640,1706,2.8,4.8],[1842,1903,-2.2,4.2]]},bridges:{canal:[{s:571,wood:!0,side:"right",tip:4.7,deck:3.9,marked:!0,approach:522,name:"\uC81C\uC7AC\uC18C \uC6B4\uBC18\uAD50"}]},reaches:{shared:[Wt(39,-2.6,1.8),Wt(2307,-1.4,2.8,.6),Wt(2426,3.8,2.6,2)],gorge:[Wt(221,1.5),Wt(549,3.7,2,1),Wt(729,-2.8,3.6),Wt(1162,1.2,3,2),Wt(1528,-3.8,2.7),Wt(2013,2,4,1.6)],canal:[Wt(207,-2),Wt(465,-3.2,2,1),Wt(839,2.4,2.4),Wt(1171,-3,3,2.1),Wt(1204,3.5,2.3,.8),Wt(1531,4,2.7),Wt(2036,-2.3,3.7,2.2)],marsh:[Wt(240,4.7),Wt(613,-2.1,3.6),Wt(942,1.4,3.9,1.4),Wt(1235,3.8),Wt(1589,-2.5,3.3),Wt(2019,2.8,3.9,1.8)]}}),Em=Vs({id:"windreach",name:"\uD48D\uCC28 \uD574\uD611",length:2840,fork:112,merge:2500,seed:15791,description:"\uD48D\uD5A5\uAE30\uC640 \uBE44\uC2A4\uB4EC\uD55C \uD3EC\uB9D0\uC744 \uBCF4\uACE0 \uD6A1\uB958\uC5D0 \uBC00\uB9B4 \uBC29\uD5A5\uC744 \uBBF8\uB9AC \uC7A1\uC73C\uC138\uC694.",cellStations:{gorge:904,canal:283,marsh:1490},lanes:{gorge:[-72,15,435,.1,20],canal:[0,8,323,1.4,17],marsh:[71,13,516,2.1,23]},valley:[16,580,5,219],opening:[116,190],outlet:21,flow:{width:3.25,speed:6.4,saving:.48,draw:.68,assist:1},elevation:{grade:.023,drop:89,head:.04,tail:.032,shared:[[2545,2641,12],[2708,2810,12]],gorge:[[183,494,15],[684,932,18],[1049,1328,13],[1463,1726,17],[1856,2123,14],[2190,2411,12]],canal:[[268,411,12],[549,728,13],[905,1090,17],[1350,1515,16],[1812,2004,16],[2163,2358,15]],marsh:[[190,608,21],[787,1150,23],[1304,1671,22],[1875,2381,23]]},features:{shared:[K(79,-1),Se(2541,-4.7),K(2689,4.6),K(2795,-3)],gorge:[K(183,-3),an(412,4.3),K(680,-4.5),Se(822,4.5),K(1109,-3.6),an(1358,4.9),K(1607,-4.7),Se(1860,-3.9),K(2091,4.4),K(2393,-2.8)],canal:[K(171,2.4),K(383,-4.1),En(638,4.3),K(899,-4.5),Se(1191,4.2),K(1426,-4.8),En(1650,4.7),K(1957,-4.1),K(2192,3.8),Se(2403,-3.3)],marsh:[Se(204,-3.8),K(435,4.5),Se(698,-4.2),K(958,4.8),Se(1238,3.9),K(1452,-4),K(1733,4.4),Se(1971,-3.7),K(2211,4.5),Se(2409,-3.3)]},bars:{gorge:[[500,559,3,3.3],[1024,1076,-2.7,3.8],[1720,1795,3.8,4],[2221,2282,-4,3.1]],canal:[[464,513,-3.1,2.7],[993,1040,3.7,3],[1518,1572,4,3.1],[2032,2090,-4.2,2.8]],marsh:[[273,359,2.1,5],[547,625,-2.3,4.6],[803,879,2.4,5.3],[1076,1162,-2.5,5],[1551,1640,2.4,5.2],[1805,1890,-2.2,4.7],[2292,2355,2.7,4.8]]},bridges:{gorge:[{s:1920,wood:!0,side:"left",tip:-4.1,deck:4.2,marked:!0,approach:1860,name:"\uD48D\uCC28 \uC120\uCC29\uAD50"}]},reaches:{shared:[tt(36,1,44),tt(2580,-1,82),tt(2730,1,61)],gorge:[tt(230,-1),tt(581,1),tt(745,-1,56),tt(935,1,78),tt(1224,-1,96),tt(1487,1),tt(1768,-1,70),tt(2010,1,72),tt(2304,-1,67)],canal:[tt(201,1,60),tt(426,-1,105),tt(733,1),tt(1028,-1),tt(1280,1,96),tt(1525,-1,57),tt(1734,1,117),tt(2064,-1,97),tt(2302,1,77)],marsh:[tt(233,-1,80),tt(632,1,94),tt(881,-1,57),tt(1160,1,82),tt(1351,-1,78),tt(1662,1,68),tt(1890,-1,85),tt(2130,1,77),tt(2320,-1,63)]}}),Tm=Vs({id:"turbine",name:"\uC218\uCC28 \uBC1C\uC804\uC18C",length:2320,originalLength:3100,fork:106,merge:2040,seed:18919,description:"\uBB3C\uB808\uBC14\uD034 \uC55E \uBC29\uB958\uAD6C\uAC00 \uAC70\uD488\uC744 \uBFDC\uC744 \uB54C \uADF8\uCABD \uBB3C\uC0B4\uC5D0 \uBD99\uC73C\uBA74 \uAC00\uC18D\uD574\uC694.",cellStations:{gorge:1120,canal:762,marsh:247},lanes:{gorge:[-69,10,394,.85,17],canal:[0,6,325,.5,18],marsh:[65,9,461,2,20]},valley:[9,405,4,260],opening:[117,177],outlet:18,flow:{width:3,speed:5.3,saving:.42,draw:.84,assist:.78},elevation:{grade:.037,drop:124,head:.054,tail:.044,shared:[[2072,2160,18],[2211,2290,14]],gorge:[[182,396,27],[540,735,23],[909,1115,24],[1320,1520,25],[1710,1930,25]],canal:[[212,466,23],[601,849,27],[1e3,1200,23],[1360,1570,24],[1695,1930,27]],marsh:[[145,543,33],[698,1046,31],[1160,1480,32],[1570,1930,28]]},features:{shared:[K(76,2),K(2088,-4),En(2168,4.3),K(2275,-3.5)],gorge:[an(190,-2.7),K(425,4.5),Se(654,-4.7),K(888,4.3),an(1038,-4.9),K(1275,4.6),Se(1502,-4),K(1736,3.7),an(1910,-4.2)],canal:[K(158,-2),K(363,4.6),En(609,-4.7),K(865,4.3),Se(1082,-3.7),K(1288,4.7),En(1511,-4.5),K(1725,4.5),Se(1925,-3.8)],marsh:[Se(170,3.5),K(395,-4.3),Se(627,4.7),K(885,-4.7),Se(1134,4.3),K(1356,-4.6),Se(1560,4.8),K(1760,-4.2),Se(1940,4.5)]},bars:{gorge:[[452,519,-3,3.1],[950,999,3.8,3.4],[1404,1461,-4,3.1],[1815,1870,4.4,3.5]],canal:[[461,517,-3.7,3],[950,1015,3.7,2.8],[1395,1460,3.6,2.9],[1810,1870,-3.7,3]],marsh:[[286,348,1.4,4.5],[509,576,-2.4,4.3],[741,824,2.4,4.9],[1005,1070,-2.8,4.5],[1240,1310,2,4.8],[1622,1692,-2.5,4.7],[1833,1895,2.7,4.6]]},bridges:{canal:[{s:669,side:"left",tip:-4.2,deck:4.8,approach:609,marked:!0,name:"\uCDE8\uC218 \uC810\uAC80\uAD50"}]},reaches:{shared:[dt(24,-1,.7,48),dt(2103,1,1.7,53),dt(2202,-1,3.1,59)],gorge:[dt(291,-1),dt(740,1,2),dt(958,-1,3.3),dt(1182,1,1),dt(1412,-1,2.1),dt(1632,1,3.8),dt(1830,-1,.4)],canal:[dt(213,1,.9),dt(457,-1,2.4),dt(718,1,.3),dt(976,-1,3.1),dt(1181,1,1.3),dt(1390,-1,2.5),dt(1620,1,1),dt(1824,-1,.3)],marsh:[dt(314,-1,1.7),dt(555,1),dt(793,-1,2.1),dt(999,1,.5),dt(1240,-1,3),dt(1462,1),dt(1670,-1,2.3),dt(1840,1,.8)]}}),wm=Vs({id:"glacier",name:"\uBE59\uD558 \uD611\uACE1",length:2820,originalLength:3460,fork:124,merge:2510,seed:20857,description:"\uC605\uC740 \uCCAD\uC0C9 \uBE59\uD310\uC740 \uBE60\uB974\uC9C0\uB9CC \uBBF8\uB044\uB7EC\uC6CC\uC694. \uB2E4\uC74C \uAD7D\uC774 \uC804\uC5D0 \uBC29\uD5A5\uC744 \uC7A1\uC73C\uC138\uC694.",cellStations:{gorge:275,canal:937,marsh:1385},lanes:{gorge:[-62,12,335,.5,15.5],canal:[0,8,417,1.6,17.4],marsh:[70,17,518,2.6,23]},valley:[12,343,7,533],opening:[121,195],outlet:18.5,flow:{width:3,speed:5,saving:.4,draw:.72,assist:.77},elevation:{grade:.036,drop:168,head:.05,tail:.038,shared:[[2550,2650,20],[2695,2790,18]],gorge:[[200,384,28],[527,720,29],[879,1109,28],[1300,1515,26],[1744,1950,28],[2155,2420,29]],canal:[[235,468,29],[644,902,29],[1080,1306,30],[1477,1720,29],[1840,2095,27],[2190,2430,24]],marsh:[[174,578,35],[740,1074,33],[1221,1563,35],[1692,2010,32],[2100,2450,33]]},features:{shared:[Se(77,-2),K(2560,-4.4),Se(2660,4.4),K(2765,-3.8)],gorge:[an(177,-3.1),K(413,4),Se(642,-4),K(862,4.4),an(1091,-4.5),K(1308,4.9),Se(1515,-4.4),K(1725,4.2),an(1956,-4.8),K(2180,4.6),an(2390,-2.4)],canal:[K(185,2.7),Se(404,-4.1),K(633,4.1),En(837,-4.4),K(1095,4.6),Se(1337,-4.1),K(1545,4.8),En(1791,-4.3),K(2025,4.4),Se(2244,-3.9),K(2410,3)],marsh:[Se(201,3.8),K(420,-4.8),Se(671,3.6),K(933,-4.5),Se(1192,4.6),K(1420,-4.7),Se(1630,-3.8),K(1850,4.2),Se(2060,-4.2),K(2250,4.8),Se(2405,-3.8)]},bars:{gorge:[[463,506,4,2.8],[949,1006,-3.8,3.1],[1410,1464,4.1,3],[1830,1881,4.4,2.9],[2270,2326,-4.1,3.1]],canal:[[302,352,-3.5,3.3],[738,782,3.7,2.8],[1199,1262,-3.5,3.2],[1650,1710,4.1,3.1],[2110,2167,-4,3.3]],marsh:[[259,338,-1.9,4.7],[489,577,2,5],[761,849,-2.3,4.8],[1012,1114,2.4,5.3],[1265,1340,-2,4.7],[1493,1556,2.1,5.1],[1740,1808,-2.3,5],[1940,2010,2.3,4.7],[2146,2200,-2.2,4.8]]},bridges:{gorge:[{s:1839,wood:!0,deck:8.6}],canal:[{s:1850,wood:!0,side:"left",tip:-3.8,deck:4.8,marked:!0,approach:1791,name:"\uBE59\uD558 \uAD00\uCE21\uAD50"}]},reaches:{shared:[_t(24,2.4,6,43),_t(2578,4.6,7.6,66),_t(2684,-4.2,7,75)],gorge:[_t(226,3.9,7,54),_t(507,-4.4,7,92),_t(750,4.2,6.4,76),_t(1152,3.8,7.5,96),_t(1400,-5.7,7,83),_t(1583,-3.6,7,94),_t(1815,3.9,7.2,86),_t(2060,4.5,8,81),_t(2260,-5.5,7,95)],canal:[_t(265,4.5,7,95),_t(493,-5.1,8,89),_t(719,-4.3,7.2,85),_t(978,4.8,8.1,90),_t(1205,4.6,7.1,96),_t(1440,-4.8,8,82),_t(1636,-4.4,6.8,94),_t(1910,4.8,8,98),_t(2122,4.2,7.6,79),_t(2320,-5.4,8,74)],marsh:[_t(360,-3.7,7,48),_t(566,-5.2,8.5,83),_t(839,5.8,9,66),_t(1072,-4.4,7.4,82),_t(1276,5.7,8,85),_t(1495,-4.6,7.2,77),_t(1720,5.8,7.8,68),_t(1930,-4.6,8.3,73),_t(2140,-4.5,8.2,89),_t(2310,5.4,7.6,69)]}}),Ko=n=>n.flatMap(e=>[{s:e,vault:!0},{s:e+21,vault:!0}]),Am=Vs({id:"cavern",name:"\uBC18\uB527\uBD88 \uB3D9\uAD74\uAC15",length:2460,originalLength:3920,fork:108,merge:2190,seed:25349,description:"\uCCAD\uB85D\uBE5B \uACB0\uC815 \uACE0\uB9AC \uC0AC\uC774\uB97C \uD1B5\uACFC\uD574 \uC8FC \uBC30\uD130\uB9AC\uB97C \uCDA9\uC804\uD558\uB294 \uC9C0\uD558 \uAC15.",cellStations:{gorge:732,canal:251,marsh:1330},lanes:{gorge:[-70,13,426,.4,17],canal:[0,8,373,1.3,17.8],marsh:[71,13,526,2.1,22]},valley:[13,473,5.5,318],opening:[135,190],outlet:20,flow:{width:3.2,speed:6,saving:.4,draw:.89,assist:.74},elevation:{grade:.03,drop:85,head:.041,tail:.036,shared:[[2225,2315,14],[2350,2433,12]],gorge:[[182,394,17],[515,725,19],[965,1170,16],[1400,1595,18],[1820,2086,15]],canal:[[257,455,16],[622,879,17],[1030,1265,17],[1444,1690,19],[1840,2098,16]],marsh:[[170,561,23],[675,957,21],[1125,1490,20],[1630,2092,21]]},features:{shared:[K(81,1.5),K(2241,4.6),Se(2320,-4.1),K(2410,3.5)],gorge:[Se(181,-3.8),K(414,4.6),an(626,-4.3),K(846,4.3),Se(1055,-4.5),K(1290,4.6),an(1532,-4.6),K(1770,4.2),Se(2040,-4.1)],canal:[K(169,2.8),K(400,-4.1),Se(613,4.2),K(835,-4.7),En(1070,4.5),K(1320,-4.8),Se(1550,4),K(1800,-4.6),En(2020,4.7)],marsh:[Se(190,-3.8),K(427,4.7),Se(650,-4.6),K(874,4.9),Se(1100,-4.2),K(1368,4.7),Se(1610,-4.5),K(1832,4.1),Se(2050,-4.6)]},bars:{gorge:[[500,551,-3.9,3.2],[910,965,4,3.1],[1400,1456,-4,3.3],[1855,1920,4.4,3.2]],canal:[[480,531,-4.1,3],[927,982,3.6,2.8],[1420,1472,-3.9,2.9],[1882,1939,4,3]],marsh:[[258,337,2,4.9],[513,578,-2.4,5.4],[742,815,2.7,5.1],[961,1029,-2.4,4.8],[1195,1265,2.8,5.3],[1450,1522,-2.5,4.8],[1690,1763,2.5,5],[1920,1990,-2.6,5.2]]},bridges:{shared:Ko([38,2223,2373]),gorge:Ko([242,511,810,1155,1480,1720,2003]),canal:[...Ko([215,487,740,986,1303,1655,1940]),{s:1136,wood:!0,deck:4.5,side:"right",tip:4.2,approach:1070,marked:!0,name:"\uAD11\uC0B0 \uC6B4\uBC18\uAD50"}],marsh:Ko([278,510,757,1007,1242,1545,1786,2020])},reaches:{shared:[Rt(43,-1.6),Rt(2229,-4.8),Rt(2384,4.5)],gorge:[Rt(310,4.7),Rt(552,-4.6),Rt(790,3.9),Rt(1005,-5.8),Rt(1240,4.8),Rt(1485,4.6),Rt(1745,-4.9),Rt(1980,4.8)],canal:[Rt(222,-3.1),Rt(502,4.6),Rt(746,-4.9),Rt(988,4.5),Rt(1286,-4.9),Rt(1513,4.7),Rt(1720,-4.5),Rt(1950,4.4)],marsh:[Rt(354,-4.4),Rt(540,-4.7),Rt(811,-4.4),Rt(1022,4.8),Rt(1246,-4.7),Rt(1510,4.8),Rt(1743,-4.4),Rt(1975,4.4)]}}),Rm=Vs({id:"tideworks",name:"\uB300\uC870\uCC28 \uBC29\uC870\uC81C",length:3200,originalLength:4800,fork:136,merge:2820,seed:32003,description:"\uC6C0\uC9C1\uC774\uB294 \uAC11\uBB38 \uD2C8\uACFC \uBC14\uAE65 \uC6B0\uD68C\uB85C\uB97C \uACE0\uB974\uACE0, \uD6A1\uB958\uC640 \uBC29\uB958\uB97C \uC9C0\uB098 \uC678\uD574\uB85C \uB098\uAC00\uC138\uC694.",cellStations:{gorge:852,canal:1482,marsh:338},lanes:{gorge:[-78,16,505,.9,21],canal:[0,7,362,.4,19],marsh:[78,14,591,2.4,24]},valley:[16,544,7,363],opening:[148,224],outlet:22,flow:{width:3.4,speed:6.8,saving:.47,draw:.67,assist:.93},elevation:{grade:.028,drop:111,head:.044,tail:.038,shared:[[2872,2975,16],[3035,3142,16]],gorge:[[190,454,19],[610,865,19],[1064,1310,18],[1510,1760,17],[1938,2182,18],[2360,2705,20]],canal:[[275,542,19],[752,1004,16],[1190,1460,20],[1635,1895,19],[2050,2325,18],[2470,2740,19]],marsh:[[175,620,24],[810,1200,21],[1370,1795,22],[1910,2286,20],[2430,2750,24]]},features:{shared:[K(100,-1.4),K(2860,4),En(3025,4.7),K(3155,-3.2)],gorge:[an(221,-3.8),K(506,4.8),Se(790,-4.3),K(1055,4.5),an(1332,-4.6),K(1619,4.3),Se(1870,-4.8),K(2139,4.8),an(2420,-4.4),K(2660,4.7)],canal:[K(205,3.8),En(516,-4.5),K(788,4.6),Se(1030,-4.6),K(1315,4.5),Se(1584,-4.9),K(1840,4.7),En(2090,-4.3),K(2348,4.5),Se(2592,-4.9),K(2720,3.2)],marsh:[Se(214,-3.4),K(495,4.7),Se(780,-4.3),K(1050,4.6),Se(1330,-4.7),K(1605,4.4),Se(1870,-4.4),K(2135,4.8),Se(2410,-4.5),K(2685,4.3)]},bars:{gorge:[[372,438,-3.8,3.3],[914,986,4,3.4],[1460,1522,3.9,3.5],[1995,2065,-4.1,3.7],[2525,2580,4.6,3.2]],canal:[[341,403,-3.9,3.1],[893,949,4.2,3.1],[1390,1440,-4.2,3],[1690,1755,4.4,3.4],[1940,2010,-3.8,2.9],[2460,2533,4.7,3.3]],marsh:[[390,443,2.7,5.3],[614,687,-2.9,5.1],[911,984,2.6,5.4],[1165,1246,-2.6,5.2],[1438,1513,2.1,4.9],[1714,1790,-2.5,5.4],[1975,2050,2.7,5.6],[2255,2336,-2.5,5.3],[2512,2584,2.4,5.5]]},bridges:{canal:[{s:580,side:"left",tip:-4.7,deck:5.1,approach:516,marked:!0,name:"\uBC29\uC870\uC81C \uC810\uAC80\uAD50"},{s:2159,side:"left",tip:-4.3,deck:5.2,approach:2090,marked:!0,name:"\uC678\uD574 \uC810\uAC80\uAD50"}]},reaches:{shared:[zt(55,0,.9),tt(2874,-1,66),zt(2980,0,2.1),dt(3072,1,1.5,59),zt(3168,-1,.8)],gorge:[zt(324,1),tt(538,-1,73),zt(711,0,1.5),dt(957,1,1.8),zt(1180,-1,2.5),tt(1410,1,76),zt(1735,0,.6),dt(1940,-1,.6),zt(2261,1.2,2.3),tt(2491,-1,76),zt(2701,-1.3,1.4)],canal:[zt(291,0,.4),dt(627,1,1.5),zt(740,-1,2.1),tt(900,-1,79),zt(1134,0,.8),dt(1390,-1,2.3),zt(1517,-1,1.2),tt(1660,1,78),zt(1965,0,.9),dt(2214,1,2.8),zt(2435,-1.4,2.6),tt(2535,-1,70),zt(2668,0,1.7)],marsh:[tt(259,1,64),zt(550,-1,2),dt(685,-1,1.4),zt(916,0,.7),tt(1140,-1,77),zt(1415,1.2,2.8),dt(1653,1,2.7),zt(1780,-1,1.1),tt(1948,1,70),zt(2241,.8,.4),dt(2460,-1,.8),zt(2598,1,1.8),zt(2710,-1,.6)]}}),Uu=[bm,Em,Tm,wm,Am,Rm]});function zr(n){return Array.isArray(n)?Ct.filter(e=>n.includes(e)):[]}function Ou(n){te=rn(n)||sn[0]}var Ct,Nu,Cm,Im,Pm,sn,rn,te,gi,en=mt(()=>{Ml();Fu();Ct=["gorge","canal","marsh"];Nu={id:"basin",name:"\uBC84\uB4DC\uB098\uBB34 \uAC1C\uC6B8",length:1440,fork:72,merge:1320,cellStations:{gorge:198,canal:421,marsh:822},description:"\uC790\uAC08\uD1B1 \uB108\uBA38\uB85C \uC138 \uBB3C\uAE38\uC774 \uAC08\uB77C\uC9C0\uB294 \uAC1C\uC6B8.",seed:0},Cm={id:"harbor",name:"\uB178\uC744\uBE5B \uD56D\uAD6C",length:840,fork:68,merge:626,seed:2311,cellStations:{gorge:443,canal:189,marsh:251},description:"\uB4F1\uB300\uB97C \uB3CC\uC544 \uC591\uCABD\uC73C\uB85C \uC5C7\uAC08\uB9B0 \uC218\uBB38\uC744 \uC787\uB294 \uB2E8\uAC70\uB9AC.",lanes:{gorge:[-44,6,180,.3,10],canal:[0,3,225,0,9],marsh:[44,7,270,1.1,13]},valley:[4,223,2,107],opening:[78,92],outlet:15,flow:{width:2.1,speed:2.9,saving:.15,draw:1.95,assist:0},elevation:{grade:.016,drop:19,head:.038,tail:.019,shared:[[648,691,3]],gorge:[[120,171,7],[328,370,5],[470,525,7]],canal:[[157,203,6],[283,327,7],[487,536,6]],marsh:[[204,290,9],[402,540,10]]},features:{shared:[Ie(32,0,7.4,"\uB4F1\uB300 \uC218\uBB38"),Ie(649,4.6,6.2,"\uC678\uD56D \uC218\uBB38"),$e(694,706,-4.7,5.8,1.18,"\uBD80\uB450 \uB098\uBB34 \uBC1C\uD310")],gorge:[Ie(109,-2.6,6.1),Ie(160,4.2,5.7),$e(222,232,-3.6,5.2,1.36,"\uD558\uC5ED \uBC1C\uD310",3.6),Ie(316,3.8,5.9),Ie(388,-3.5,5.9),$e(465,476,3.9,5.5,1.42,"\uBC29\uD30C\uC81C \uBC1C\uD310",3.4),Ie(565,-2.5,6.3)],canal:[Ie(100,-3.1,6.3),Ie(150,3.8,5.8),Ie(204,-4,6),$e(259,271,3.5,5.6,1.64,"\uC870\uC120\uC18C \uB3C4\uC57D\uB300",3.7),Ie(345,-3.7,5.7),$e(410,419,4.8,5.5,.92,"\uC811\uC548 \uBC1C\uD310"),Ie(466,3.8,6.1),Ie(512,-4.2,5.8)],marsh:[$e(117,127,3.5,5.4,.85,"\uB098\uB8FB\uBC30 \uBC1C\uD310"),Ie(191,-3,6.6),Ie(274,4.3,6.3),$e(359,370,-4,6,1.18,"\uBD80\uC794\uAD50 \uBC1C\uD310"),Ie(443,3.2,6.2),Ie(537,-3.2,6.5)]},bars:{shared:[[49,59,-4.3,1.3],[60,67.7,4.9,1.4],[675,703,3.8,2.4]],gorge:[[186,204,2.7,1.7],[417,439,-3.9,1.8]],canal:[[318,335,3.4,1.8],[492,516,3.5,2]],marsh:[[154,178,-1.5,2.6],[301,334,1.4,2.9],[469,504,-2.5,2.3]]},bridges:{gorge:[{s:381,deck:5.6}],canal:[{s:302,deck:6.8,panel:{side:"right",tip:1.9,clearance:3.1},approach:259,marked:!0,name:"\uD558\uC5ED\uAD50"}],marsh:[{s:403,wood:!0,deck:3.6,side:"left",tip:-3.6,approach:359,marked:!0,name:"\uB3CC\uCD9C \uBD80\uC794\uAD50"}],shared:[]},docks:[183,392,547],markerStep:32},Im={id:"basalt",name:"\uD604\uBB34\uC554 \uAE09\uB958",length:1760,fork:126,merge:1404,seed:5783,cellStations:{gorge:556,canal:943,marsh:227},description:"\uC8FC\uC0C1\uC808\uB9AC \uC0AC\uC774\uC758 \uBC14\uC704\uD131\uC744 \uB118\uC5B4 \uACC4\uB2E8\uC2DD \uAE09\uB958\uB97C \uB0B4\uB824\uAC00\uB294 \uCF54\uC2A4.",lanes:{gorge:[-61,11,246,.1,11.8],canal:[0,8,337,.7,14.4],marsh:[58,9,382,2.4,16]},valley:[12,305,6,192],opening:[99,150],outlet:14.4,flow:{width:2.6,speed:4.5,saving:.24,draw:1.14,assist:.28},elevation:{grade:.043,drop:288,head:.09,tail:.043,shared:[[44,115,14],[1418,1500,31],[1550,1634,29],[1672,1745,23]],gorge:[[156,228,38],[295,372,39],[469,547,40],[658,740,45],[860,951,46],[1078,1167,40],[1280,1366,40]],canal:[[192,281,36],[367,460,41],[550,657,49],[777,878,46],[979,1080,52],[1216,1330,64]],marsh:[[161,318,50],[394,547,54],[601,811,64],[903,1072,55],[1134,1328,65]]},features:{shared:[gt(47,58,1.7,6.3,1.18,"\uCCAB \uB3CC\uACC4\uB2E8"),gt(1431,1444,-5.5,7.5,1.6),Ie(1520,-5.6,7.4,"\uD569\uC218\uBAA9 \uC218\uBB38"),gt(1571,1584,5.7,7.6,1.7),gt(1685,1698,-5.1,7.5,1.5)],gorge:[gt(168,180,-3,6.7,1.53),gt(305,319,3.2,6.5,1.72),gt(479,492,-3.8,6.4,1.76),gt(672,685,3.5,6.8,1.8),gt(877,889,-3.2,7,1.89),gt(1096,1109,3.6,7.2,1.84),gt(1295,1309,-3.3,7.2,1.85)],canal:[gt(201,214,4.9,7,1.6),Ie(316,-3,7,"\uC18C\uC6A9\uB3CC\uC774 \uC218\uBB38"),gt(381,393,-5.2,6.7,1.64),$e(548,562,3.7,6.1,1.85,"\uCC44\uC11D\uC7A5 \uBC1C\uD310",3.5),gt(657,669,-4.8,7,1.21),gt(788,801,5.1,7,1.75),Ie(916,-3,7,"\uD558\uB958 \uC218\uBB38"),gt(990,1004,-5.1,7.4,1.86),gt(1239,1252,5.3,7.5,2.04)],marsh:[Ie(172,2.4,7.4),gt(246,261,-3.2,7.2,1.14),$e(412,424,3.8,6.2,1.1),Ie(575,-2.7,6.9),gt(701,718,3.3,7.2,1.18),Ie(862,2.6,7.2),gt(998,1012,-3.2,7.2,1.28),$e(1161,1175,3,6.3,1.2),Ie(1314,-2.9,7.2)]},bars:{shared:[[96,112,-4.3,1.6],[113,125.8,4.9,1.5],[1490,1510,-4.2,2.6],[1615,1652,4.9,2.8]],gorge:[[237,270,4.8,2.6],[405,448,-4.4,2.6],[581,615,4,2.4],[765,807,-3.8,3],[987,1039,4.1,2.7],[1180,1220,-4.3,2.7]],canal:[[271,303,-4.1,2.3],[457,503,4.4,2.8],[710,745,-4.5,2.7],[854,899,4.2,2.9],[1100,1155,-3.7,3]],marsh:[[335,385,-1,3.3],[484,544,1.6,3.4],[616,673,-2.4,3.8],[775,816,1.2,3],[931,970,-1.6,3.4],[1076,1124,2.5,3.2],[1233,1280,-1.7,3.6]]},bridges:{gorge:[],canal:[{s:605,wood:!0,deck:7.9,side:"right",tip:3,approach:548,marked:!0,name:"\uCC44\uC11D\uC7A5 \uC794\uAD50"}],marsh:[{s:899,wood:!0,deck:7.5}],shared:[]},docks:[418,871,1193],markerStep:49},Pm={id:"delta",name:"\uAC08\uB300 \uC0BC\uAC01\uC8FC",length:2240,fork:96,merge:1984,seed:8921,cellStations:{gorge:296,canal:681,marsh:1206},description:"\uAC08\uB300\uC12C\uC744 \uB3CC\uC544 \uD770 \uBB3C\uC0B4\uC744 \uC624\uB798 \uD0C8\uC218\uB85D \uC720\uB9AC\uD55C \uC7A5\uAC70\uB9AC.",lanes:{gorge:[-69,12,412,1.3,20],canal:[0,10,356,.4,17],marsh:[77,14,470,2.3,23]},valley:[15,510,6,274],opening:[120,178],outlet:20,flow:{width:3.15,speed:6.2,saving:.52,draw:.87,assist:.96},elevation:{grade:.027,drop:68,head:.038,tail:.035,shared:[[2010,2084,13],[2153,2227,13]],gorge:[[136,348,14],[492,731,14],[855,1082,14],[1272,1530,12],[1667,1900,14]],canal:[[260,340,12],[627,731,13],[930,1039,14],[1310,1398,16],[1702,1792,13]],marsh:[[160,462,17],[602,935,16],[1060,1421,17],[1560,1887,18]]},features:{shared:[$e(54,63,-1.7,5.2,.63,"\uC0AC\uACF5\uC758 \uBC1C\uD310"),Ie(2020,4.4,7.4,"\uD569\uC218\uBAA9 \uC218\uBB38"),$e(2102,2115,-4.1,6.1,1.08),Ie(2177,3.3,7.1,"\uD558\uAD6C \uC218\uBB38")],gorge:[Ie(154,3.6,7.2),$e(316,329,-4.5,6.2,1.05),Ie(510,-4,7.3),$e(695,709,4.5,6,1.23),Ie(891,4.4,7.1),$e(1072,1084,-4.2,5.7,1.13),Ie(1260,-3.7,7.3),$e(1496,1509,4.6,6,1.16),Ie(1724,-4.6,7.2),Ie(1880,3.1,7.4)],canal:[Ie(161,-3.8,6.9),Ie(344,4,6.8),$e(524,537,4.3,6.2,1.3,"\uC591\uC218\uC7A5 \uBC1C\uD310",3.4),Ie(702,-4,6.8),Ie(906,4.4,7),$e(1082,1095,-4.5,6,1.29),Ie(1275,3.1,6.9),Ie(1487,-4.5,7.1),$e(1650,1665,4.8,6.4,1.34,"\uBC30\uC218\uB85C \uBC1C\uD310",3.6),Ie(1875,-4.2,7.1)],marsh:[$e(186,197,4.4,6.3,.86),Ie(412,-4.4,7.6),$e(623,636,4,6,.93),Ie(820,-4,7.5),$e(1038,1051,-4.6,5.9,1.03),Ie(1236,4.4,7.5),$e(1458,1471,4.1,6.3,.98),Ie(1637,-4.4,7.5),$e(1846,1859,4.8,6,1.08)]},bars:{shared:[[72,84,-4.3,1.7],[85,95.8,4.9,1.6],[2058,2097,-1.8,4],[2128,2166,2.7,3.4]],gorge:[[180,278,1.2,5.3],[356,466,-2,5.5],[560,654,2.6,5.1],[735,843,-1.5,5.3],[936,1034,2.4,5.3],[1126,1213,-1.2,5.5],[1322,1441,1.8,5.6],[1557,1674,-2.6,5.3],[1763,1852,2.6,5.4]],canal:[[211,305,-1.6,4.5],[382,472,2,4.3],[576,668,-2.4,4.6],[752,849,2.5,4.2],[947,1039,-2.3,4.4],[1143,1229,2.1,4.4],[1340,1435,-1.6,4.8],[1528,1614,1.9,4.6],[1724,1824,-1.9,4.4]],marsh:[[230,360,2,5.6],[457,573,-2.4,6.1],[674,778,2,6],[872,981,-1.8,6.1],[1103,1191,2.4,5.7],[1282,1401,-2.4,6.2],[1516,1594,2.6,5.6],[1680,1786,-2.1,6.2],[1890,1945,2,4.3]]},bridges:{gorge:[{s:1120,wood:!0,deck:4.6,side:"left",tip:-3.7,approach:1072,marked:!0,name:"\uAC08\uB300 \uB098\uB8E8"}],canal:[{s:565,wood:!0,deck:5.8,side:"right",tip:3.3,approach:524,marked:!0,name:"\uC591\uC218\uC7A5 \uC794\uAD50"}],marsh:[],shared:[]},docks:[162,479,812,1099,1518,1879],markerStep:47},sn=[Nu,Cm,Im,Pm,...Uu],rn=n=>sn.find(e=>e.id===n),te=rn(new URLSearchParams(globalThis.location?.search).get("course"))||Nu,gi=n=>(n/1e3).toLocaleString("ko-KR",{maximumFractionDigits:2})+" km"});function Yn(n=1){let e=Number.isFinite(n)?Math.min(Gs,Math.max(1,Math.floor(n)))-1:0;return Bu[e]}var Lm,Bu,Gs,$o=mt(()=>{Lm=[["\uB098\uBB34\uD310 \uBCF4\uD2B8",11.8,11,1,15,1.5],["\uD569\uD310 \uBCF4\uD2B8",13.1,13,1.06,34,1.39],["\uAC15\uD654 \uC120\uC218 \uBCF4\uD2B8",14.3,15.4,1.13,43,1.27],["\uD22C\uC5B4\uB9C1 \uBCF4\uD2B8",15.7,17.8,1.21,54,1.15],["\uC708\uB4DC\uC2E4\uB4DC \uBCF4\uD2B8",17.1,20.7,1.27,66,1.04],["\uC2A4\uD3EC\uCE20 \uBCF4\uD2B8",18.6,24.5,1.34,78,.92],["\uC2A4\uD3EC\uCE20 \uD130\uBCF4",19.8,29,1.42,90,.76],["\uB808\uC774\uC2F1 \uBCF4\uD2B8",21.2,46,1.52,104,.34],["\uD2B8\uC708 \uB808\uC774\uC11C",23.1,52,1.62,120,.14],["\uD2B8\uC708 \uBAA8\uD130\uBCF4\uD2B8",26.3,72,1.8,0,0]],Bu=Lm.map(([n,e,t,i,s,r],o)=>({level:o+1,name:n,cruise:e,endurance:t,boostScale:i,cost:s,hullDrag:r})),Gs=Bu.length});function bl(n,e=te){if(!Number.isFinite(n))return 0;let t=Math.max(0,Math.min(n,e.length)),i=Math.floor(t*10);return Math.floor(i*10/e.length)}function Dm(n={}){let e=Array.isArray(n?.recent)?n.recent:[];return{revision:0,activeCourse:sn[0].id,visit:1,completedCourses:[],boostCells:[],level:1,parts:0,best:0,legacyBest:Math.max(0,Math.min(100,Number(n?.best)||0)),recent:e.filter(t=>t&&Number.isFinite(t.distance)&&Number.isFinite(t.time)&&Number.isFinite(t.power)&&typeof t.route=="string").slice(0,3).map(t=>({...t,trial:!0}))}}function Sl(n,e,t){return e===t?n:Math.min(t,Math.floor(n*t/e*10)/10)}function Ws(n,e){if(e==="basin")return{best:n.basinBest||0,branches:n.basinBests||{}};let t=n.courseRecords?.[e],i=rn(e);if(!t)return{best:0,branches:{}};let s=t.courseLength??i?.originalLength;if(!i||!s||s===i.length)return t;let r=Object.fromEntries(Object.entries(t.branches||{}).map(([o,a])=>[o,Sl(a,s,i.length)]));return{best:Sl(t.best,s,i.length),branches:r,courseLength:i.length}}function El(n,e){return e?.originalLength?n.courseLength??(n.route===gi(e.length)?e.length:e.originalLength):e?.length}function os(n){return sn.find(e=>!n.completedCourses.includes(e.id))||sn.at(-1)}function as(n,e){return n.completedCourses.includes(e)||os(n).id===e}function ku(n){if(n.visit>=1&&rn(n.activeCourse)&&Array.isArray(n.completedCourses)){let a=zr(n.boostCells);return Array.isArray(n.boostCells)&&n.boostCells.length===a.length&&a.every((c,l)=>c===n.boostCells[l])?n:{...n,boostCells:a}}let e=Array.isArray(n.recent)?n.recent:[],t=sn.filter(a=>{let{best:c,branches:l}=Ws(n,a.id);return Math.max(c,...Object.values(l||{}))>=a.length||e.some(h=>h.course===a.id&&h.cleared)}).map(a=>a.id),i=e.find(a=>rn(a.course)),s=rn(i?.course)||sn[0],r={...n,recent:e,completedCourses:t,activeCourse:s.id,visit:1,boostCells:[]},o=sn[sn.indexOf(s)+1];return as(r,s.id)?i?.cleared&&o&&(r.activeCourse=as(r,o.id)?o.id:os(r).id):r.activeCourse=os(r).id,r.activeCourse!==s.id&&(r.visit++,r.level=1,r.parts=0),r}function zu(n,e){return{...n,activeCourse:e,visit:n.visit+1,level:1,parts:0,boostCells:[]}}function Um(n,e,t){return t!==n.visit||e===n.activeCourse||!rn(e)||!as(n,e)?n:zu({...n,revision:n.revision+1},e)}function Hu(n,e){return!Ct.includes(e)||n.includes(e)?n:zr([...n,e])}function Fm(n,e,t,i){if(e!==n.activeCourse||t!==n.visit)return n;let s=Hu(n.boostCells,i);return s===n.boostCells?n:{...n,boostCells:s,revision:n.revision+1}}function Nm(n,e){let t=rn(e.course),i=(e.visit??1)===n.visit&&(t?t.id===n.activeCourse:!e.course),s=El(e,t),r=t&&e.cleared===!0&&e.distance>=s,o={...n,revision:n.revision+1,best:Math.max(n.best,e.distance),parts:n.parts+(i?e.earned:0),recent:[e,...n.recent].slice(0,3)};if(!t)return o;i&&e.pickedCell===e.branch&&(o.boostCells=Hu(n.boostCells,e.pickedCell));let a=Sl(e.distance,s,t.length),c=Ws(n,t.id),l=Math.max(c.best,a),h={...c.branches};if(e.branch&&(h[e.branch]=Math.max(h[e.branch]||0,a)),t.id==="basin")o.basinBest=l,o.basinBests=h;else{let m={best:l,branches:h};t.originalLength&&(m.courseLength=t.length),o.courseRecords={...n.courseRecords,[t.id]:m}}if(!r)return o;n.completedCourses.includes(t.id)||(o.completedCourses=[...n.completedCourses,t.id]);let u=sn[sn.indexOf(t)+1];if(!i||!u)return o;let d=as(o,u.id)?u:os(o),p=zu(o,d.id);return p.recent[0]={...e,arrivalVisit:p.visit},p}function Om(n,e,t=n.visit){let i=Yn(n.level);return t!==n.visit||n.level!==e||n.level>=Gs||n.parts<i.cost?n:{...n,revision:n.revision+1,level:n.level+1,parts:n.parts-i.cost}}function wl(n){for(let e of Tl)try{globalThis[e].setItem(jo+n.id,JSON.stringify(n));return}catch{}}function Xs(n){for(let e of Tl)try{globalThis[e].removeItem(jo+n)}catch{}}function Vu(){let n=new Map;for(let e of Tl)try{let t=globalThis[e];for(let i=0;i<t.length;i++){let s=t.key(i);if(!s?.startsWith(jo))continue;let r;try{r=JSON.parse(t.getItem(s))}catch{continue}if(!r?.id||jo+r.id!==s)continue;(r.kind==="cell"?rn(r.course)&&Number.isSafeInteger(r.visit)&&Ct.includes(r.branch):Number.isFinite(r.earned)&&Number.isFinite(r.distance))&&n.set(r.id,r)}}catch{}return[...n.values()]}function Gu(n){let e="willow-creek.garage.backup",t={profile:Dm(n),paid:[]};function i(){let a=t;function c(l){l?.profile&&Array.isArray(l.paid)&&l.profile.revision>=a.profile.revision&&(a=l)}try{c(history.state?.creekGarage)}catch{}try{c(JSON.parse(sessionStorage.getItem(e)))}catch{}try{c(JSON.parse(localStorage.getItem(e)))}catch{}return a}function s(a){t=a;try{localStorage.setItem(e,JSON.stringify(a));return}catch{}try{sessionStorage.setItem(e,JSON.stringify(a));return}catch{}try{history.replaceState({...history.state,creekGarage:a},"")}catch{}}let r=new Promise(a=>{try{let c=indexedDB.open("willow-creek-garage",1);c.onupgradeneeded=()=>c.result.createObjectStore("garage"),c.onsuccess=()=>a(c.result),c.onerror=()=>a(null)}catch{a(null)}});async function o(a,c){let l=await r;if(!l){let h=()=>{let u=i(),d=ku(u.profile),p=c&&!u.paid.includes(c),m=a&&(!c||p)?a(d):d;return(m!==u.profile||p)&&s({profile:m,paid:p?[...u.paid,c]:u.paid}),m};return navigator.locks?navigator.locks.request(e,h):h()}return new Promise((h,u)=>{let d=l.transaction("garage","readwrite"),p=d.objectStore("garage"),m;d.oncomplete=()=>h(m),d.onabort=()=>u(d.error||new Error("garage transaction failed"));let _=p.get("profile");_.onsuccess=()=>{let g=_.result?null:i(),f=_.result||g.profile;if(m=ku(f),(g||m!==f)&&p.put(m,"profile"),g)for(let S of g.paid)p.put(!0,"paid/"+S);function v(){let S=a(m);S!==m&&(m=S,p.put(m,"profile")),c&&p.put(!0,"paid/"+c)}if(a)if(c){let S=p.get("paid/"+c);S.onsuccess=()=>{S.result||v()}}else v()}})}return{read:()=>o(null),credit:a=>o(c=>Nm(c,a),a.id),collect:a=>o(c=>Fm(c,a.course,a.visit,a.branch)),enter:(a,c)=>o(l=>Um(l,a,c)),upgrade:(a,c)=>o(l=>Om(l,a,c))}}var jo,Tl,Al=mt(()=>{en();$o();jo="willow-creek.pending.",Tl=["localStorage","sessionStorage"]});function qs(n,e,t,i,s,r){return{sky:n,fog:e,sun:t,ground:i,island:s,density:.007,water:Object.fromEntries(["shared","gorge","canal","marsh"].map((o,a)=>[o,[r[a],r[4],r[5]]]))}}var Bm,Ht,Qo=mt(()=>{en();Bm={timber:qs(["#dce9d9","#7faab7"],"#c9dbcb","#fff0c3",[["#bea881","#d3c39a"],["#867b57","#a28c61"],["#60764d","#788852","#687c4d"]],["#aa9975","#b3a17a"],["#3e776e","#386e67","#417f78","#4a796a","#adb798","#86c1a9"]),windreach:qs(["#f1dbbc","#719ec3"],"#dfd9be","#ffe2b9",[["#dfc891","#d8bf88"],["#aba36e","#bbab75"],["#9aa66e","#b2b77a"]],["#b4a477","#c1b381"],["#408697","#33788b","#498c99","#498b90","#c4c7a6","#8acbd0"]),turbine:qs(["#e2d1ac","#819baa"],"#c5c9b4","#ffdfb0",[["#baad8b","#b3a789"],["#89978d","#97a199"],["#9c9c77","#a5a684"]],["#b6b399","#969f94"],["#3b7d80","#387273","#3e8384","#447d79","#a8b7a1","#83c9bd"]),glacier:qs(["#eaf4f4","#719cc2"],"#c9dde6","#e1f2ff",[["#b8d3dc","#d7e7e9"],["#92adbd","#b0c4ce"],["#dbe9e8","#e6efed","#c9dbdd"]],["#c9e1e4","#d9e9e9"],["#478eab","#377f9c","#478aa7","#549cae","#bedbdb","#8dd4da"]),cavern:qs(["#535274","#222943"],"#646884","#eee0ff",[["#746883","#8a8291"],["#60596f","#72637b"],["#4e4c60","#62566a"]],["#786b88","#948699"],["#346d7a","#315f73","#387786","#3b7183","#88889a","#80c8c3"]),tideworks:qs(["#e0bfa6","#667f9c"],"#bfb8ad","#ffe2bd",[["#b5b1a2","#cac5b2"],["#8b928f","#9ca19a"],["#979a83","#aaa98d"]],["#9d9d90","#b4b09a"],["#426d80","#3c6478","#487587","#4e7680","#a6ada0","#83b7be"]),harbor:{sky:["#f3c1a0","#849ec2"],fog:"#e7bba5",sun:"#ffd7a6",density:.007,ground:[["#d4c5a7","#c2b99f"],["#8a9291","#9ea5a0","#abb0a6"],["#c6ac88","#b8a790"]],island:["#b3a092","#aa9e87","#bfac91"],water:{shared:["#386a83","#a4b3a3","#71b6bc"],gorge:["#365e79","#989f96","#72a8ab"],canal:["#376b81","#93a4a0","#6babb4"],marsh:["#437880","#b7be9e","#84b4a9"]}},basalt:{sky:["#c6d8e1","#7597b8"],fog:"#b9ceda",sun:"#e1f1ff",density:.008,ground:[["#838d93","#959b9c"],["#4f5661","#5e6770","#657076"],["#626f69","#788175","#65746f"]],island:["#697379","#798389","#58666c"],water:{shared:["#287e9b","#acc5bc","#87d2d0"],gorge:["#237390","#a1bebc","#8ed8db"],canal:["#317e92","#9cbdb5","#82cad0"],marsh:["#468b92","#aec6b3","#90d0c3"]}},delta:{sky:["#f1e3bc","#8dc0c8"],fog:"#e3dcb8",sun:"#ffedbf",density:.0065,ground:[["#d6be8a","#e2cb98"],["#b7ad72","#b1a773","#c1b782"],["#9ca66d","#b2af76","#a3ac73"]],island:["#d5bf8b","#c1b37b","#b8a774"],water:{shared:["#46837e","#bbbc88","#8ac1aa"],gorge:["#3e797c","#acab79","#85b9a5"],canal:["#46888a","#b3b985","#8fc8b0"],marsh:["#538a78","#c0bd85","#a0c59d"]}}},Ht=Bm[te.id]});function Mr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function Mh(n,e){return(n%e+e)%e}function km(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function zm(n,e,t){return n!==e?(t-n)/(e-n):0}function Zr(n,e,t){return(1-t)*n+t*e}function Hm(n,e,t,i){return Zr(n,e,1-Math.exp(-t*i))}function Vm(n,e=1){return e-Math.abs(Mh(n,e*2)-e)}function Gm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Wm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qm(n,e){return n+Math.random()*(e-n)}function Ym(n){return n*(.5-Math.random())}function Zm(n){n!==void 0&&(Wu=n);let e=Wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jm(n){return n*Yr}function Km(n){return n*lr}function $m(n){return(n&n-1)===0&&n!==0}function jm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function eg(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*m,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*m,a*l);break;case"ZYZ":n.set(c*m,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function or(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function Sh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tf(){let n=jr("canvas");return n.style.display="block",n}function hr(n){n in qu||(qu[n]=!0,console.warn(n))}function nf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function tg(){let n={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?Kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ms]:{primaries:e,whitePoint:i,transfer:Kr,toXYZ:Yu,fromXYZ:Zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:Yu,fromXYZ:Zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),n}function Si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Il(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Aa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Ll(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ls.fromArray(n,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),c=e.dot(ls),l=t.dot(ls),h=i.dot(ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function Xl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function pg(n,e,t,i,s,r,o,a){let c;if(e.side===ln?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===bi,a),c===null)return null;pa.copy(a),pa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(pa);return l<t.near||l>t.far?null:{distance:l,point:pa.clone(),object:n}}function ma(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ha),n.getVertexPosition(c,ua),n.getVertexPosition(l,da);let h=pg(n,e,t,i,ha,ua,da,rd);if(h){let u=new U;Wi.getBarycoord(rd,ha,ua,da,u),s&&(h.uv=Wi.getInterpolatedAttribute(s,a,c,l,u,new nt)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,a,c,l,u,new nt)),o&&(h.normal=Wi.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};Wi.getNormal(ha,ua,da,d.normal),h.face=d,h.barycoord=u}return h}function Ms(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let i=Ms(n[t]);for(let s in i)e[s]=i[s]}return e}function mg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}function ud(n,e,t,i,s,r,o){let a=th.distanceSqToPoint(n);if(a<t){let c=new U;th.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function ya(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function bg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function wh(n,e,t,i){let s=Lg(i);switch(t){case mh:return n*e;case rc:return n*e/s.components*s.byteLength;case oc:return n*e/s.components*s.byteLength;case _h:return n*e*2/s.components*s.byteLength;case ac:return n*e*2/s.components*s.byteLength;case gh:return n*e*3/s.components*s.byteLength;case zn:return n*e*4/s.components*s.byteLength;case cc:return n*e*4/s.components*s.byteLength;case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Co:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hc:case dc:return Math.max(n,16)*Math.max(e,8)/4;case lc:case uc:return Math.max(n,8)*Math.max(e,8)/2;case fc:case pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ic:case Pc:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Dc:case Uc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fc:case Nc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lg(n){switch(n){case Qn:case uh:return{byteLength:1,components:1};case _r:case dh:case xr:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case Ki:case nc:case ei:return{byteLength:4,components:1};case fh:case ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}var pd,rh,md,oh,gd,li,bi,ln,Dt,Ci,fs,ah,ch,lh,_d,qi,xd,vd,yd,Md,Sd,bd,Ed,Td,Sa,ba,wd,Ad,Rd,Cd,Id,Pd,Ld,Dd,Ud,Xa,qa,Ya,ps,Za,Ja,Ka,$a,ja,Fd,Nd,Ii,Od,Bd,kd,zd,Hd,Vd,Gd,hh,xs,vs,Qa,ec,To,Ea,Xi,Ta,Tn,Wd,wo,jn,tc,Ji,Qn,uh,dh,_r,nc,Ki,ei,xr,ic,sc,vr,fh,ph,mh,gh,zn,cr,yr,rc,oc,_h,ac,cc,Ao,Ro,Co,Io,lc,hc,uc,dc,fc,pc,mc,gc,_c,xc,vc,yc,Mc,Sc,bc,Ec,Tc,wc,Ac,Rc,Cc,Ic,Pc,Lc,Dc,Uc,Fc,Nc,Jr,wa,Ma,Kl,$l,jl,Xd,qd,xh,Yd,Pi,vn,ms,Kr,Et,ds,Ql,Zd,Jd,Kd,vh,$d,jd,Qd,ef,eh,ys,yh,$n,$r,Ei,un,Wu,Yr,lr,Oc,nt,wn,U,Rl,Xu,je,Cl,qu,Yu,Zu,ft,Ys,Aa,ng,ur,ig,Pl,An,Vt,Ra,ri,Qr,Ca,oi,_i,Zn,ea,Zs,Js,Ks,Bi,ki,cs,Hr,ta,na,ls,sg,Vr,Dl,Ti,xi,Ul,ia,zi,Fl,sa,Nl,eo,Mt,$s,Jn,rg,og,Hi,ra,In,Ju,Ku,mn,to,ag,$u,js,vi,oa,Gr,cg,lg,ju,Qu,ed,td,hg,Qs,Ol,Yt,Kn,yi,Bl,Mi,er,tr,nd,kl,zl,Hl,Vl,Gl,Wl,Wi,sf,Vi,aa,Le,dn,ug,wi,Zt,Kt,ca,dg,pn,no,io,Xe,fg,kn,ql,nr,Pn,Wr,on,vt,id,hs,la,sd,ha,ua,da,Yl,fa,rd,pa,xt,ai,rf,gg,_g,yn,so,Gi,od,ad,fn,ir,sr,Ia,ro,Pa,cn,xg,dr,oo,ao,La,co,rr,cd,ga,ld,vg,Xr,qr,gs,Zl,yg,Mg,si,us,Sg,_a,fr,pr,hd,th,xa,va,lo,ho,uo,fo,ci,po,mr,gr,mo,go,Ai,_o,xo,vo,Ri,Da,Ua,_s,Fa,Na,Oa,Ln,Yi,Ba,ka,za,yo,Zi,Ha,Va,of,Ga,Mo,So,Jl,dd,fd,nh,bo,ih,Eo,Wa,Eh,Eg,Th,Tg,wg,Ag,Rg,Cg,Ig,Pg,sh,Ft,jy,Ah=mt(()=>{pd=0,rh=1,md=2,oh=1,gd=2,li=3,bi=0,ln=1,Dt=2,Ci=0,fs=1,ah=2,ch=3,lh=4,_d=5,qi=100,xd=101,vd=102,yd=103,Md=104,Sd=200,bd=201,Ed=202,Td=203,Sa=204,ba=205,wd=206,Ad=207,Rd=208,Cd=209,Id=210,Pd=211,Ld=212,Dd=213,Ud=214,Xa=0,qa=1,Ya=2,ps=3,Za=4,Ja=5,Ka=6,$a=7,ja=0,Fd=1,Nd=2,Ii=0,Od=1,Bd=2,kd=3,zd=4,Hd=5,Vd=6,Gd=7,hh=300,xs=301,vs=302,Qa=303,ec=304,To=306,Ea=1e3,Xi=1001,Ta=1002,Tn=1003,Wd=1004,wo=1005,jn=1006,tc=1007,Ji=1008,Qn=1009,uh=1010,dh=1011,_r=1012,nc=1013,Ki=1014,ei=1015,xr=1016,ic=1017,sc=1018,vr=1020,fh=35902,ph=35899,mh=1021,gh=1022,zn=1023,cr=1026,yr=1027,rc=1028,oc=1029,_h=1030,ac=1031,cc=1033,Ao=33776,Ro=33777,Co=33778,Io=33779,lc=35840,hc=35841,uc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37808,_c=37809,xc=37810,vc=37811,yc=37812,Mc=37813,Sc=37814,bc=37815,Ec=37816,Tc=37817,wc=37818,Ac=37819,Rc=37820,Cc=37821,Ic=36492,Pc=36494,Lc=36495,Dc=36283,Uc=36284,Fc=36285,Nc=36286,Jr=2300,wa=2301,Ma=2302,Kl=2400,$l=2401,jl=2402,Xd=3200,qd=3201,xh=0,Yd=1,Pi="",vn="srgb",ms="srgb-linear",Kr="linear",Et="srgb",ds=7680,Ql=519,Zd=512,Jd=513,Kd=514,vh=515,$d=516,jd=517,Qd=518,ef=519,eh=35044,ys=35048,yh="300 es",$n=2e3,$r=2001,Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=1234567,Yr=Math.PI/180,lr=180/Math.PI;Oc={DEG2RAD:Yr,RAD2DEG:lr,generateUUID:Mr,clamp:ht,euclideanModulo:Mh,mapLinear:km,inverseLerp:zm,lerp:Zr,damp:Hm,pingpong:Vm,smoothstep:Gm,smootherstep:Wm,randInt:Xm,randFloat:qm,randFloatSpread:Ym,seededRandom:Zm,degToRad:Jm,radToDeg:Km,isPowerOfTwo:$m,ceilPowerOfTwo:jm,floorPowerOfTwo:Qm,setQuaternionFromProperEuler:eg,normalize:xn,denormalize:or},nt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==m){let g=1-a,f=c*d+l*p+h*m+u*_,v=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let T=Math.sqrt(S),b=Math.atan2(T,f*v);g=Math.sin(g*b)/T,a=Math.sin(a*b)/T}let x=a*v;if(c=c*g+d*x,l=l*g+p*x,h=h*g+m*x,u=u*g+_*x,g===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*p-l*d,e[t+1]=c*m+h*d+l*u-a*p,e[t+2]=l*m+h*p+a*d-c*u,e[t+3]=h*m-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rl=new U,Xu=new wn,je=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],m=i[8],_=s[0],g=s[3],f=s[6],v=s[1],S=s[4],x=s[7],T=s[2],b=s[5],A=s[8];return r[0]=o*_+a*v+c*T,r[3]=o*g+a*S+c*b,r[6]=o*f+a*x+c*A,r[1]=l*_+h*v+u*T,r[4]=l*g+h*S+u*b,r[7]=l*f+h*x+u*A,r[2]=d*_+p*v+m*T,r[5]=d*g+p*S+m*b,r[8]=d*f+p*x+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,m=t*u+i*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cl=new je;qu={};Yu=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ft=tg();Aa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ys===void 0&&(Ys=jr("canvas")),Ys.width=e.width,Ys.height=e.height;let s=Ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ys}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=jr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Si(t[i]/255)*255):t[i]=Si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ng=0,ur=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Il(s[o].image)):r.push(Il(s[o]))}else r=Il(s);i.url=r}return t||(e.images[this.uuid]=i),i}};ig=0,Pl=new U,An=class n extends Ei{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Xi,s=Xi,r=jn,o=Ji,a=zn,c=Qn,l=n.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Mr(),this.name="",this.source=new ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pl).x}get height(){return this.source.getSize(Pl).y}get depth(){return this.source.getSize(Pl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ea:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ea:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=hh;An.DEFAULT_ANISOTROPY=1;Vt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],_=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,x=(p+1)/2,T=(f+1)/2,b=(h+d)/4,A=(u+_)/4,R=(m+g)/4;return S>x&&S>T?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=b/i,r=A/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=b/s,r=R/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=A/r,s=R/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ra=class extends Ei{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new An(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ur(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends Ra{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Qr=class extends An{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ca=class extends An{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},oi=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),ta.subVectors(this.max,Hr),Zs.subVectors(e.a,Hr),Js.subVectors(e.b,Hr),Ks.subVectors(e.c,Hr),Bi.subVectors(Js,Zs),ki.subVectors(Ks,Js),cs.subVectors(Zs,Ks);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-cs.z,cs.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,cs.z,0,-cs.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-cs.y,cs.x,0];return!Ll(t,Zs,Js,Ks,ta)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,Zs,Js,Ks,ta))?!1:(na.crossVectors(Bi,ki),t=[na.x,na.y,na.z],Ll(t,Zs,Js,Ks,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_i=[new U,new U,new U,new U,new U,new U,new U,new U],Zn=new U,ea=new oi,Zs=new U,Js=new U,Ks=new U,Bi=new U,ki=new U,cs=new U,Hr=new U,ta=new U,na=new U,ls=new U;sg=new oi,Vr=new U,Dl=new U,Ti=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):sg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Dl)),this.expandByPoint(Vr.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xi=new U,Ul=new U,ia=new U,zi=new U,Fl=new U,sa=new U,Nl=new U,eo=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ul.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Ul);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ia),a=zi.dot(this.direction),c=-zi.dot(ia),l=zi.lengthSq(),h=Math.abs(1-o*o),u,d,p,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ul).addScaledVector(ia,d),p}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,s,r){Fl.subVectors(t,e),sa.subVectors(i,e),Nl.crossVectors(Fl,sa);let o=this.direction.dot(Nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);let c=a*this.direction.dot(sa.crossVectors(zi,sa));if(c<0)return null;let l=a*this.direction.dot(Fl.cross(zi));if(l<0||c+l>o)return null;let h=-a*zi.dot(Nl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mt=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,d,p,m,_,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,p,m,_,g)}set(e,t,i,s,r,o,a,c,l,h,u,d,p,m,_,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,m=l*h,_=l*u;t[0]=d+_*a,t[4]=m*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,m=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=m*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=m*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+m,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,p=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rg,e,og)}lookAt(e,t,i){let s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Hi.crossVectors(i,In),Hi.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Hi.crossVectors(i,In)),Hi.normalize(),ra.crossVectors(In,Hi),s[0]=Hi.x,s[4]=ra.x,s[8]=In.x,s[1]=Hi.y,s[5]=ra.y,s[9]=In.y,s[2]=Hi.z,s[6]=ra.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],m=i[2],_=i[6],g=i[10],f=i[14],v=i[3],S=i[7],x=i[11],T=i[15],b=s[0],A=s[4],R=s[8],y=s[12],M=s[1],C=s[5],D=s[9],L=s[13],N=s[2],B=s[6],O=s[10],V=s[14],H=s[3],j=s[7],ie=s[11],ae=s[15];return r[0]=o*b+a*M+c*N+l*H,r[4]=o*A+a*C+c*B+l*j,r[8]=o*R+a*D+c*O+l*ie,r[12]=o*y+a*L+c*V+l*ae,r[1]=h*b+u*M+d*N+p*H,r[5]=h*A+u*C+d*B+p*j,r[9]=h*R+u*D+d*O+p*ie,r[13]=h*y+u*L+d*V+p*ae,r[2]=m*b+_*M+g*N+f*H,r[6]=m*A+_*C+g*B+f*j,r[10]=m*R+_*D+g*O+f*ie,r[14]=m*y+_*L+g*V+f*ae,r[3]=v*b+S*M+x*N+T*H,r[7]=v*A+S*C+x*B+T*j,r[11]=v*R+S*D+x*O+T*ie,r[15]=v*y+S*L+x*V+T*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],m=e[3],_=e[7],g=e[11],f=e[15];return m*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+_*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+g*(+t*l*u-t*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],_=e[13],g=e[14],f=e[15],v=u*g*l-_*d*l+_*c*p-a*g*p-u*c*f+a*d*f,S=m*d*l-h*g*l-m*c*p+o*g*p+h*c*f-o*d*f,x=h*_*l-m*u*l+m*a*p-o*_*p-h*a*f+o*u*f,T=m*u*c-h*_*c-m*a*d+o*_*d+h*a*g-o*u*g,b=t*v+i*S+s*x+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/b;return e[0]=v*A,e[1]=(_*d*r-u*g*r-_*s*p+i*g*p+u*s*f-i*d*f)*A,e[2]=(a*g*r-_*c*r+_*s*l-i*g*l-a*s*f+i*c*f)*A,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*A,e[4]=S*A,e[5]=(h*g*r-m*d*r+m*s*p-t*g*p-h*s*f+t*d*f)*A,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*f-t*c*f)*A,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*A,e[8]=x*A,e[9]=(m*u*r-h*_*r-m*i*p+t*_*p+h*i*f-t*u*f)*A,e[10]=(o*_*r-m*a*r+m*i*l-t*_*l-o*i*f+t*a*f)*A,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*p-t*a*p)*A,e[12]=T*A,e[13]=(h*_*s-m*u*s+m*i*d-t*_*d-h*i*g+t*u*g)*A,e[14]=(m*a*s-o*_*s-m*i*c+t*_*c+o*i*g-t*a*g)*A,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,m=r*u,_=o*h,g=o*u,f=a*u,v=c*l,S=c*h,x=c*u,T=i.x,b=i.y,A=i.z;return s[0]=(1-(_+f))*T,s[1]=(p+x)*T,s[2]=(m-S)*T,s[3]=0,s[4]=(p-x)*b,s[5]=(1-(d+f))*b,s[6]=(g+v)*b,s[7]=0,s[8]=(m+S)*A,s[9]=(g-v)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jn.copy(this);let l=1/r,h=1/o,u=1/a;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,t.setFromRotationMatrix(Jn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=$n,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===$n)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===$r)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=$n,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===$n)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===$r)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},$s=new U,Jn=new Mt,rg=new U(0,0,0),og=new U(1,1,1),Hi=new U,ra=new U,In=new U,Ju=new Mt,Ku=new wn,mn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";to=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ag=0,$u=new U,js=new wn,vi=new Mt,oa=new U,Gr=new U,cg=new U,lg=new wn,ju=new U(1,0,0),Qu=new U(0,1,0),ed=new U(0,0,1),td={type:"added"},hg={type:"removed"},Qs={type:"childadded",child:null},Ol={type:"childremoved",child:null},Yt=class n extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new mn,i=new wn,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis(Qu,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis(Qu,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oa.copy(e):oa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Gr,oa,this.up):vi.lookAt(oa,Gr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(vi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(td),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hg),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(td),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Yt.DEFAULT_UP=new U(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Kn=new U,yi=new U,Bl=new U,Mi=new U,er=new U,tr=new U,nd=new U,kl=new U,zl=new U,Hl=new U,Vl=new Vt,Gl=new Vt,Wl=new Vt,Wi=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Kn.subVectors(s,t),yi.subVectors(i,t),Bl.subVectors(e,t);let o=Kn.dot(Kn),a=Kn.dot(yi),c=Kn.dot(Bl),l=yi.dot(yi),h=yi.dot(Bl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Vl.setScalar(0),Gl.setScalar(0),Wl.setScalar(0),Vl.fromBufferAttribute(e,t),Gl.fromBufferAttribute(e,i),Wl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vl,r.x),o.addScaledVector(Gl,r.y),o.addScaledVector(Wl,r.z),o}static isFrontFacing(e,t,i,s){return Kn.subVectors(i,t),yi.subVectors(e,t),Kn.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Kn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;er.subVectors(s,i),tr.subVectors(r,i),kl.subVectors(e,i);let c=er.dot(kl),l=tr.dot(kl);if(c<=0&&l<=0)return t.copy(i);zl.subVectors(e,s);let h=er.dot(zl),u=tr.dot(zl);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(er,o);Hl.subVectors(e,r);let p=er.dot(Hl),m=tr.dot(Hl);if(m>=0&&p<=m)return t.copy(r);let _=p*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(tr,a);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return nd.subVectors(r,s),a=(u-h)/(u-h+(p-m)),t.copy(s).addScaledVector(nd,a);let f=1/(g+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},aa={h:0,s:0,l:0};Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=Mh(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Xl(o,r,e+1/3),this.g=Xl(o,r,e),this.b=Xl(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=vn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){let i=sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return ft.workingToColorSpace(dn.copy(this),e),Math.round(ht(dn.r*255,0,255))*65536+Math.round(ht(dn.g*255,0,255))*256+Math.round(ht(dn.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(dn.copy(this),t);let i=dn.r,s=dn.g,r=dn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=vn){ft.workingToColorSpace(dn.copy(this),e);let t=dn.r,i=dn.g,s=dn.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(aa);let i=Zr(Vi.h,aa.h,t),s=Zr(Vi.s,aa.s,t),r=Zr(Vi.l,aa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Le;Le.NAMES=sf;ug=0,wi=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=fs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=ba,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sa&&(i.blendSrc=this.blendSrc),this.blendDst!==ba&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zt=class extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kt=new U,ca=new nt,dg=0,pn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eh,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=or(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),s=xn(s,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}},no=class extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},io=class extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Xe=class extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}},fg=0,kn=new Mt,ql=new Yt,nr=new U,Pn=new oi,Wr=new oi,on=new U,vt=class n extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sh(e)?io:no)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Pn.min,Wr.min),Pn.expandByPoint(on),on.addVectors(Pn.max,Wr.max),Pn.expandByPoint(on)):(Pn.expandByPoint(Wr.min),Pn.expandByPoint(Wr.max))}Pn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(nr.fromBufferAttribute(e,l),on.add(nr)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new U,c[R]=new U;let l=new U,h=new U,u=new U,d=new nt,p=new nt,m=new nt,_=new U,g=new U;function f(R,y,M){l.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(d),m.sub(d);let C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(C),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(C),a[R].add(_),a[y].add(_),a[M].add(_),c[R].add(g),c[y].add(g),c[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,y=v.length;R<y;++R){let M=v[R],C=M.start,D=M.count;for(let L=C,N=C+D;L<N;L+=3)f(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let S=new U,x=new U,T=new U,b=new U;function A(R){T.fromBufferAttribute(s,R),b.copy(T);let y=a[R];S.copy(y),S.sub(T.multiplyScalar(T.dot(y))).normalize(),x.crossVectors(b,y);let C=x.dot(c[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,C)}for(let R=0,y=v.length;R<y;++R){let M=v[R],C=M.start,D=M.count;for(let L=C,N=C+D;L<N;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(h),c.add(h),l.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[m++]=l[p++]}return new pn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},id=new Mt,hs=new eo,la=new Ti,sd=new U,ha=new U,ua=new U,da=new U,Yl=new U,fa=new U,rd=new U,pa=new U,xt=class extends Yt{constructor(e=new vt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Yl.fromBufferAttribute(u,e),o?fa.addScaledVector(Yl,h):fa.addScaledVector(Yl.sub(t),h))}t.add(fa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(la.containsPoint(hs.origin)===!1&&(hs.intersectSphere(la,sd)===null||hs.origin.distanceToSquared(sd)>(e.far-e.near)**2))&&(id.copy(r).invert(),hs.copy(e.ray).applyMatrix4(id),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],f=o[g.materialIndex],v=Math.max(g.start,p.start),S=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,T=S;x<T;x+=3){let b=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);s=ma(this,f,e,i,l,h,u,b,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){let v=a.getX(g),S=a.getX(g+1),x=a.getX(g+2);s=ma(this,o,e,i,l,h,u,v,S,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],f=o[g.materialIndex],v=Math.max(g.start,p.start),S=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,T=S;x<T;x+=3){let b=x,A=x+1,R=x+2;s=ma(this,f,e,i,l,h,u,b,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){let v=g,S=g+1,x=g+2;s=ma(this,o,e,i,l,h,u,v,S,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};ai=class n extends vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function m(_,g,f,v,S,x,T,b,A,R,y){let M=x/A,C=T/R,D=x/2,L=T/2,N=b/2,B=A+1,O=R+1,V=0,H=0,j=new U;for(let ie=0;ie<O;ie++){let ae=ie*C-L;for(let _e=0;_e<B;_e++){let Oe=_e*M-D;j[_]=Oe*v,j[g]=ae*S,j[f]=N,l.push(j.x,j.y,j.z),j[_]=0,j[g]=0,j[f]=b>0?1:-1,h.push(j.x,j.y,j.z),u.push(_e/A),u.push(1-ie/R),V+=1}}for(let ie=0;ie<R;ie++)for(let ae=0;ae<A;ae++){let _e=d+ae+B*ie,Oe=d+ae+B*(ie+1),Ye=d+(ae+1)+B*(ie+1),Ze=d+(ae+1)+B*ie;c.push(_e,Oe,Ze),c.push(Oe,Ye,Ze),H+=6}a.addGroup(p,H,y),p+=H,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};rf={clone:Ms,merge:gn},gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=_g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},so=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new U,od=new nt,ad=new nt,fn=class extends so{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,od,ad),t.subVectors(ad,od)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ir=-90,sr=1,Ia=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(ir,sr,e,t);s.layers=this.layers,this.add(s);let r=new fn(ir,sr,e,t);r.layers=this.layers,this.add(r);let o=new fn(ir,sr,e,t);o.layers=this.layers,this.add(o);let a=new fn(ir,sr,e,t);a.layers=this.layers,this.add(a);let c=new fn(ir,sr,e,t);c.layers=this.layers,this.add(c);let l=new fn(ir,sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$r)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},ro=class extends An{constructor(e=[],t=xs,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pa=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ro(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ai(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Ci});r.uniforms.tEquirect.value=t;let o=new xt(s,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=jn),new Ia(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},cn=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xg={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,i),f=this._getHandJoint(l,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new cn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},oo=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},ao=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},La=class extends An{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Tn,h=Tn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},co=class extends pn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new Mt,cd=new Mt,ga=[],ld=new oi,vg=new Mt,Xr=new xt,qr=new Ti,gs=class extends xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new co(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,vg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),ld.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(ld)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),qr.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(i),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),cd.multiplyMatrices(i,rr),Xr.matrixWorld=cd,Xr.raycast(e,ga);for(let o=0,a=ga.length;o<a;o++){let c=ga[o];c.instanceId=r,c.object=this,t.push(c)}ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new co(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new La(new Float32Array(s*this.count),s,this.count,rc,ei));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zl=new U,yg=new U,Mg=new je,si=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Zl.subVectors(i,t).cross(yg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Zl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Mg.getNormalMatrix(e),s=this.coplanarPoint(Zl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new Ti,Sg=new nt(.5,.5),_a=new U,fr=class{constructor(e=new si,t=new si,i=new si,s=new si,r=new si,o=new si){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],m=r[8],_=r[9],g=r[10],f=r[11],v=r[12],S=r[13],x=r[14],T=r[15];if(s[0].setComponents(l-o,p-h,f-m,T-v).normalize(),s[1].setComponents(l+o,p+h,f+m,T+v).normalize(),s[2].setComponents(l+a,p+u,f+_,T+S).normalize(),s[3].setComponents(l-a,p-u,f-_,T-S).normalize(),i)s[4].setComponents(c,d,g,x).normalize(),s[5].setComponents(l-c,p-d,f-g,T-x).normalize();else if(s[4].setComponents(l-c,p-d,f-g,T-x).normalize(),t===$n)s[5].setComponents(l+c,p+d,f+g,T+x).normalize();else if(t===$r)s[5].setComponents(c,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=Sg.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(_a.x=s.normal.x>0?e.max.x:e.min.x,_a.y=s.normal.y>0?e.max.y:e.min.y,_a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},pr=class extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hd=new Mt,th=new eo,xa=new Ti,va=new U,lo=class extends Yt{constructor(e=new vt,t=new pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(s),xa.radius+=r,e.ray.intersectsSphere(xa)===!1)return;hd.copy(s).invert(),th.copy(e.ray).applyMatrix4(hd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let m=d,_=p;m<_;m++){let g=l.getX(m);va.fromBufferAttribute(u,g),ud(va,g,c,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=d,_=p;m<_;m++)va.fromBufferAttribute(u,m),ud(va,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};ho=class extends An{constructor(e,t,i=Ki,s,r,o,a=Tn,c=Tn,l,h=cr,u=1){if(h!==cr&&h!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ur(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},uo=class extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},fo=class n extends vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new U,h=new nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ci=class n extends vt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,_=[],g=i/2,f=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(p,2));function v(){let x=new U,T=new U,b=0,A=(t-e)/i;for(let R=0;R<=r;R++){let y=[],M=R/r,C=M*(t-e)+e;for(let D=0;D<=s;D++){let L=D/s,N=L*c+a,B=Math.sin(N),O=Math.cos(N);T.x=C*B,T.y=-M*i+g,T.z=C*O,u.push(T.x,T.y,T.z),x.set(B,A,O).normalize(),d.push(x.x,x.y,x.z),p.push(L,1-M),y.push(m++)}_.push(y)}for(let R=0;R<s;R++)for(let y=0;y<r;y++){let M=_[y][R],C=_[y+1][R],D=_[y+1][R+1],L=_[y][R+1];(e>0||y!==0)&&(h.push(M,C,L),b+=3),(t>0||y!==r-1)&&(h.push(C,D,L),b+=3)}l.addGroup(f,b,0),f+=b}function S(x){let T=m,b=new nt,A=new U,R=0,y=x===!0?e:t,M=x===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,g*M,0),d.push(0,M,0),p.push(.5,.5),m++;let C=m;for(let D=0;D<=s;D++){let N=D/s*c+a,B=Math.cos(N),O=Math.sin(N);A.x=y*O,A.y=g*M,A.z=y*B,u.push(A.x,A.y,A.z),d.push(0,M,0),b.x=B*.5+.5,b.y=O*.5*M+.5,p.push(b.x,b.y),m++}for(let D=0;D<s;D++){let L=T+D,N=C+D;x===!0?h.push(N,N+1,L):h.push(N+1,N,L),R+=3}l.addGroup(f,R,x===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},po=class n extends ci{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mr=class n extends vt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let S=new U,x=new U,T=new U;for(let b=0;b<t.length;b+=3)p(t[b+0],S),p(t[b+1],x),p(t[b+2],T),c(S,x,T,v)}function c(v,S,x,T){let b=T+1,A=[];for(let R=0;R<=b;R++){A[R]=[];let y=v.clone().lerp(x,R/b),M=S.clone().lerp(x,R/b),C=b-R;for(let D=0;D<=C;D++)D===0&&R===b?A[R][D]=y:A[R][D]=y.clone().lerp(M,D/C)}for(let R=0;R<b;R++)for(let y=0;y<2*(b-R)-1;y++){let M=Math.floor(y/2);y%2===0?(d(A[R][M+1]),d(A[R+1][M]),d(A[R][M])):(d(A[R][M+1]),d(A[R+1][M+1]),d(A[R+1][M]))}}function l(v){let S=new U;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(v),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){let v=new U;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let x=g(v)/2/Math.PI+.5,T=f(v)/Math.PI+.5;o.push(x,1-T)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let S=o[v+0],x=o[v+2],T=o[v+4],b=Math.max(S,x,T),A=Math.min(S,x,T);b>.9&&A<.1&&(S<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,S){let x=v*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function m(){let v=new U,S=new U,x=new U,T=new U,b=new nt,A=new nt,R=new nt;for(let y=0,M=0;y<r.length;y+=9,M+=6){v.set(r[y+0],r[y+1],r[y+2]),S.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),b.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),T.copy(v).add(S).add(x).divideScalar(3);let C=g(T);_(b,M+0,v,C),_(A,M+2,S,C),_(R,M+4,x,C)}}function _(v,S,x,T){T<0&&v.x===1&&(o[S]=v.x-1),x.x===0&&x.z===0&&(o[S]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},gr=class n extends mr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},mo=class n extends mr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},go=class n extends vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],m=[],_=[],g=[];for(let f=0;f<h;f++){let v=f*d-o;for(let S=0;S<l;S++){let x=S*u-r;m.push(x,-v,0),_.push(0,0,1),g.push(S/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){let S=v+l*f,x=v+l*(f+1),T=v+1+l*(f+1),b=v+1+l*f;p.push(S,x,b),p.push(x,T,b)}this.setIndex(p),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ai=class n extends vt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,p=new U,m=new nt;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){let f=r+g/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){let g=_*(i+1);for(let f=0;f<i;f++){let v=f+g,S=v,x=v+i+1,T=v+i+2,b=v+1;a.push(S,x,b),a.push(x,T,b)}}this.setIndex(a),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},_o=class n extends vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,d=new U,p=[],m=[],_=[],g=[];for(let f=0;f<=i;f++){let v=[],S=f/i,x=0;f===0&&o===0?x=.5/t:f===i&&c===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){let b=T/t;u.x=-e*Math.cos(s+b*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(s+b*r)*Math.sin(o+S*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(b+x,1-S),v.push(l++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){let S=h[f][v+1],x=h[f][v],T=h[f+1][v],b=h[f+1][v+1];(f!==0||o>0)&&p.push(S,x,b),(f!==i-1||c<Math.PI)&&p.push(x,T,b)}this.setIndex(p),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},xo=class n extends mr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},vo=class n extends vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new U,u=new U,d=new U;for(let p=0;p<=i;p++)for(let m=0;m<=s;m++){let _=m/s*r,g=p/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=s;m++){let _=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,v=(s+1)*p+m;o.push(_,g,v),o.push(g,f,v)}this.setIndex(o),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ri=class extends wi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Da=class extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ua=class extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};_s=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fa=class extends _s{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kl,endingEnd:Kl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $l:r=e,a=2*t-i;break;case jl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case $l:o=e,c=2*i-t;break;case jl:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(s-t),_=m*m,g=_*m,f=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,S=(-1-p)*g+(1.5+p)*_+.5*m,x=p*g-p*_;for(let T=0;T!==a;++T)r[T]=f*o[h+T]+v*o[l+T]+S*o[c+T]+x*o[u+T];return r}},Na=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Oa=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jr:t=this.InterpolantFactoryMethodDiscrete;break;case wa:t=this.InterpolantFactoryMethodLinear;break;case Ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&bg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ma,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,d=u-i,p=u+i;for(let m=0;m!==i;++m){let _=t[u+m];if(_!==t[d+m]||_!==t[p+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=wa;Yi=class extends Ln{constructor(e,t,i){super(e,t,i)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Jr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;Ba=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}};Ba.prototype.ValueTypeName="color";ka=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}};ka.prototype.ValueTypeName="number";za=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)wn.slerpFlat(r,0,o,l-a,o,l,c);return r}},yo=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}};yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;Zi=class extends Ln{constructor(e,t,i){super(e,t,i)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Jr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;Ha=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}};Ha.prototype.ValueTypeName="vector";Va=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},of=new Va,Ga=class{constructor(e){this.manager=e!==void 0?e:of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ga.DEFAULT_MATERIAL_NAME="__DEFAULT";Mo=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},So=class extends Mo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Jl=new Mt,dd=new U,fd=new U,nh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(dd),fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fd),t.updateMatrixWorld(),Jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bo=class extends so{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ih=class extends nh{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Eo=class extends Mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new ih}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Wa=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Eh="\\[\\]\\.:\\/",Eg=new RegExp("["+Eh+"]","g"),Th="[^"+Eh+"]",Tg="[^"+Eh.replace("\\.","")+"]",wg=/((?:WC+[\/:])*)/.source.replace("WC",Th),Ag=/(WCOD+)?/.source.replace("WCOD",Tg),Rg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),Cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),Ig=new RegExp("^"+wg+Ag+Rg+Cg+"$"),Pg=["material","materials","bones","map"],sh=class{constructor(e,t,i){let s=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Eg,"")}static parseTrackName(e){let t=Ig.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Pg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=sh;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];jy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180")});function If(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ug(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],_=u[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let _=u[p];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}function m_(n,e,t,i,s,r,o){let a=new Le(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function m(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1,T=m(S);T===null?f(a,c):T&&T.isColor&&(f(T,1),x=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(S,x){let T=m(x);T&&(T.isCubeTexture||T.mapping===To)?(h===void 0&&(h=new xt(new ai(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ms(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ss.copy(x.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(p_.makeRotationFromEuler(Ss)),h.material.toneMapped=ft.getTransfer(T.colorSpace)!==Et,(u!==T||d!==T.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,p=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new xt(new go(2,2),new yn({name:"BackgroundMaterial",uniforms:Ms(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ft.getTransfer(T.colorSpace)!==Et,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,p=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,x){S.getRGB(Bc,bh(n)),i.buffers.color.setClear(Bc.r,Bc.g,Bc.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:_,addToRenderList:g,dispose:v}}function g_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,C,D,L,N){let B=!1,O=u(L,D,C);r!==O&&(r=O,l(r.object)),B=p(M,L,D,N),B&&m(M,L,D,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(M,C,D,L),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,C,D){let L=D.wireframe===!0,N=i[M.id];N===void 0&&(N={},i[M.id]=N);let B=N[C.id];B===void 0&&(B={},N[C.id]=B);let O=B[L];return O===void 0&&(O=d(c()),B[L]=O),O}function d(M){let C=[],D=[],L=[];for(let N=0;N<t;N++)C[N]=0,D[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:L,object:M,attributes:{},index:null}}function p(M,C,D,L){let N=r.attributes,B=C.attributes,O=0,V=D.getAttributes();for(let H in V)if(V[H].location>=0){let ie=N[H],ae=B[H];if(ae===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ie===void 0||ie.attribute!==ae||ae&&ie.data!==ae.data)return!0;O++}return r.attributesNum!==O||r.index!==L}function m(M,C,D,L){let N={},B=C.attributes,O=0,V=D.getAttributes();for(let H in V)if(V[H].location>=0){let ie=B[H];ie===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));let ae={};ae.attribute=ie,ie&&ie.data&&(ae.data=ie.data),N[H]=ae,O++}r.attributes=N,r.attributesNum=O,r.index=L}function _(){let M=r.newAttributes;for(let C=0,D=M.length;C<D;C++)M[C]=0}function g(M){f(M,0)}function f(M,C){let D=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;D[M]=1,L[M]===0&&(n.enableVertexAttribArray(M),L[M]=1),N[M]!==C&&(n.vertexAttribDivisor(M,C),N[M]=C)}function v(){let M=r.newAttributes,C=r.enabledAttributes;for(let D=0,L=C.length;D<L;D++)C[D]!==M[D]&&(n.disableVertexAttribArray(D),C[D]=0)}function S(M,C,D,L,N,B,O){O===!0?n.vertexAttribIPointer(M,C,D,N,B):n.vertexAttribPointer(M,C,D,L,N,B)}function x(M,C,D,L){_();let N=L.attributes,B=D.getAttributes(),O=C.defaultAttributeValues;for(let V in B){let H=B[V];if(H.location>=0){let j=N[V];if(j===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){let ie=j.normalized,ae=j.itemSize,_e=e.get(j);if(_e===void 0)continue;let Oe=_e.buffer,Ye=_e.type,Ze=_e.bytesPerElement,Z=Ye===n.INT||Ye===n.UNSIGNED_INT||j.gpuType===nc;if(j.isInterleavedBufferAttribute){let Q=j.data,ge=Q.stride,De=j.offset;if(Q.isInstancedInterleavedBuffer){for(let Te=0;Te<H.locationSize;Te++)f(H.location+Te,Q.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Te=0;Te<H.locationSize;Te++)g(H.location+Te);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Te=0;Te<H.locationSize;Te++)S(H.location+Te,ae/H.locationSize,Ye,ie,ge*Ze,(De+ae/H.locationSize*Te)*Ze,Z)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)f(H.location+Q,j.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<H.locationSize;Q++)g(H.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Q=0;Q<H.locationSize;Q++)S(H.location+Q,ae/H.locationSize,Ye,ie,ae*Ze,ae/H.locationSize*Q*Ze,Z)}}else if(O!==void 0){let ie=O[V];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(H.location,ie);break;case 3:n.vertexAttrib3fv(H.location,ie);break;case 4:n.vertexAttrib4fv(H.location,ie);break;default:n.vertexAttrib1fv(H.location,ie)}}}}v()}function T(){R();for(let M in i){let C=i[M];for(let D in C){let L=C[D];for(let N in L)h(L[N].object),delete L[N];delete C[D]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;let C=i[M.id];for(let D in C){let L=C[D];for(let N in L)h(L[N].object),delete L[N];delete C[D]}delete i[M.id]}function A(M){for(let C in i){let D=i[C];if(D[M.id]===void 0)continue;let L=D[M.id];for(let N in L)h(L[N].object),delete L[N];delete D[M.id]}}function R(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function __(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];t.update(p,i,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function x_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==zn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let R=A===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Qn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ei&&!R)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:T,maxSamples:b}}function v_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new si,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,f=n.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:i,S=v*4,x=f.clippingState||null;c.value=x,x=h(m,d,S,p);for(let T=0;T!==S;++T)x[T]=t[T];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let S=0,x=p;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function y_(n){let e=new WeakMap;function t(o,a){return a===Qa?o.mapping=xs:a===ec&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Qa||a===ec)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Pa(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function S_(n){let e=[],t=[],i=[],s=n,r=n-br+1+af.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-br?c=af[o-n+br-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,_=3,g=2,f=1,v=new Float32Array(_*m*p),S=new Float32Array(g*m*p),x=new Float32Array(f*m*p);for(let b=0;b<p;b++){let A=b%3*2/3-1,R=b>2?0:-1,y=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];v.set(y,_*m*b),S.set(d,g*m*b);let M=[b,b,b,b,b,b];x.set(M,f*m*b)}let T=new vt;T.setAttribute("position",new pn(v,_)),T.setAttribute("uv",new pn(S,g)),T.setAttribute("faceIndex",new pn(x,f)),e.push(T),s>br&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hf(n,e,t){let i=new ri(n,e,t);return i.texture.mapping=To,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function b_(n,e,t){let i=new Float32Array(Ts),s=new U(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function uf(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function df(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function E_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Qa||c===ec,h=c===xs||c===vs;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Hc(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Hc(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function T_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&hr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function w_(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,m=u.attributes.position,_=0;if(p!==null){let v=p.array;_=p.version;for(let S=0,x=v.length;S<x;S+=3){let T=v[S+0],b=v[S+1],A=v[S+2];d.push(T,b,b,A,A,T)}}else if(m!==void 0){let v=m.array;_=m.version;for(let S=0,x=v.length/3-1;S<x;S+=3){let T=S+0,b=S+1,A=S+2;d.push(T,b,b,A,A,T)}}else return;let g=new(Sh(d)?io:no)(d,1);g.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function A_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function l(d,p,m){m!==0&&(n.drawElementsInstanced(i,p,r,d*o,m),t.update(p,i,m))}function h(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];t.update(g,i,1)}function u(d,p,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,m);let f=0;for(let v=0;v<m;v++)f+=p[v]*_[v];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function R_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function C_(n,e,t){let i=new WeakMap,s=new Vt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let y=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],S=0;p===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*T*4*u),A=new Qr(b,x,T,u);A.type=ei,A.needsUpdate=!0;let R=S*4;for(let M=0;M<u;M++){let C=g[M],D=f[M],L=v[M],N=x*T*4*M;for(let B=0;B<C.count;B++){let O=B*R;p===!0&&(s.fromBufferAttribute(C,B),b[N+O+0]=s.x,b[N+O+1]=s.y,b[N+O+2]=s.z,b[N+O+3]=0),m===!0&&(s.fromBufferAttribute(D,B),b[N+O+4]=s.x,b[N+O+5]=s.y,b[N+O+6]=s.z,b[N+O+7]=0),_===!0&&(s.fromBufferAttribute(L,B),b[N+O+8]=s.x,b[N+O+9]=s.y,b[N+O+10]=s.z,b[N+O+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new nt(x,T)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function I_(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}function Tr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=pf[s];if(r===void 0&&(r=new Float32Array(s),pf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gc(n,e){let t=mf[e];t===void 0&&(t=new Int32Array(e),mf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function P_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function L_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function D_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function U_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function F_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;xf.set(i),n.uniformMatrix2fv(this.addr,!1,xf),nn(t,i)}}function N_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;_f.set(i),n.uniformMatrix3fv(this.addr,!1,_f),nn(t,i)}}function O_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;gf.set(i),n.uniformMatrix4fv(this.addr,!1,gf),nn(t,i)}}function B_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function k_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function V_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function W_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function X_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function q_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ff.compareFunction=vh,r=ff):r=Pf,t.setTexture2D(e||r,s)}function Y_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Df,s)}function Z_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Uf,s)}function J_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Lf,s)}function K_(n){switch(n){case 5126:return P_;case 35664:return L_;case 35665:return D_;case 35666:return U_;case 35674:return F_;case 35675:return N_;case 35676:return O_;case 5124:case 35670:return B_;case 35667:case 35671:return k_;case 35668:case 35672:return z_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return G_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return J_}}function $_(n,e){n.uniform1fv(this.addr,e)}function j_(n,e){let t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function Q_(n,e){let t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function ex(n,e){let t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function tx(n,e){let t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nx(n,e){let t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ix(n,e){let t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sx(n,e){n.uniform1iv(this.addr,e)}function rx(n,e){n.uniform2iv(this.addr,e)}function ox(n,e){n.uniform3iv(this.addr,e)}function ax(n,e){n.uniform4iv(this.addr,e)}function cx(n,e){n.uniform1uiv(this.addr,e)}function lx(n,e){n.uniform2uiv(this.addr,e)}function hx(n,e){n.uniform3uiv(this.addr,e)}function ux(n,e){n.uniform4uiv(this.addr,e)}function dx(n,e,t){let i=this.cache,s=e.length,r=Gc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Pf,r[o])}function fx(n,e,t){let i=this.cache,s=e.length,r=Gc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Df,r[o])}function px(n,e,t){let i=this.cache,s=e.length,r=Gc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Uf,r[o])}function mx(n,e,t){let i=this.cache,s=e.length,r=Gc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lf,r[o])}function gx(n){switch(n){case 5126:return $_;case 35664:return j_;case 35665:return Q_;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ox;case 35669:case 35673:return ax;case 5125:return cx;case 36294:return lx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function vf(n,e){n.seq.push(e),n.map[e.id]=e}function _x(n,e,t){let i=n.name,s=i.length;for(Dh.lastIndex=0;;){let r=Dh.exec(i),o=Dh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){vf(t,l===void 0?new Uh(a,n,e):new Fh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Nh(a),vf(t,u)),t=u}}}function yf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function yx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Mx(n){ft._getMatrix(Mf,ft.workingColorSpace,n);let e=`mat3( ${Mf.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case Kr:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+yx(n.getShaderSource(e),a)}else return r}function Sx(n,e){let t=Mx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bx(n,e){let t;switch(e){case Od:t="Linear";break;case Bd:t="Reinhard";break;case kd:t="Cineon";break;case zd:t="ACESFilmic";break;case Vd:t="AgX";break;case Gd:t="Neutral";break;case Hd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ex(){ft.getLuminanceCoefficients(zc);let n=zc.x.toFixed(4),e=zc.y.toFixed(4),t=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function wx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ax(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Po(n){return n!==""}function bf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Oh(n){return n.replace(Rx,Ix)}function Ix(n,e){let t=it[e];if(t===void 0){let i=Cx.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oh(t)}function Tf(n){return n.replace(Px,Lx)}function Lx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function Ux(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xs:case vs:e="ENVMAP_TYPE_CUBE";break;case To:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function Nx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ja:e="ENVMAP_BLENDING_MULTIPLY";break;case Fd:e="ENVMAP_BLENDING_MIX";break;case Nd:e="ENVMAP_BLENDING_ADD";break}return e}function Ox(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Bx(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Dx(t),l=Ux(t),h=Fx(t),u=Nx(t),d=Ox(t),p=Tx(t),m=wx(r),_=s.createProgram(),g,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Po).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Po).join(`
`),f.length>0&&(f+=`
`)):(g=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),f=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?it.tonemapping_pars_fragment:"",t.toneMapping!==Ii?bx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Sx("linearToOutputTexel",t.outputColorSpace),Ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),o=Oh(o),o=bf(o,t),o=Ef(o,t),a=Oh(a),a=bf(a,t),a=Ef(a,t),o=Tf(o),a=Tf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=v+g+o,x=v+f+a,T=yf(s,s.VERTEX_SHADER,S),b=yf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",L=s.getShaderInfoLog(T)||"",N=s.getShaderInfoLog(b)||"",B=D.trim(),O=L.trim(),V=N.trim(),H=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,b);else{let ie=Sf(s,T,"vertex"),ae=Sf(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+ie+`
`+ae)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||V==="")&&(j=!1);j&&(C.diagnostics={runnable:H,programLog:B,vertexShader:{log:O,prefix:g},fragmentShader:{log:V,prefix:f}})}s.deleteShader(T),s.deleteShader(b),R=new Er(s,_),y=Ax(s,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,xx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}function zx(n,e,t,i,s,r,o){let a=new to,c=new Bh,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,M,C,D,L){let N=D.fog,B=L.geometry,O=y.isMeshStandardMaterial?D.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),H=V&&V.mapping===To?V.image.height:null,j=m[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=ie!==void 0?ie.length:0,_e=0;B.morphAttributes.position!==void 0&&(_e=1),B.morphAttributes.normal!==void 0&&(_e=2),B.morphAttributes.color!==void 0&&(_e=3);let Oe,Ye,Ze,Z;if(j){let yt=hi[j];Oe=yt.vertexShader,Ye=yt.fragmentShader}else Oe=y.vertexShader,Ye=y.fragmentShader,c.update(y),Ze=c.getVertexShaderID(y),Z=c.getFragmentShaderID(y);let Q=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),De=L.isInstancedMesh===!0,Te=L.isBatchedMesh===!0,rt=!!y.map,bt=!!y.matcap,P=!!V,ut=!!y.aoMap,Be=!!y.lightMap,Ne=!!y.bumpMap,ye=!!y.normalMap,Pt=!!y.displacementMap,xe=!!y.emissiveMap,Je=!!y.metalnessMap,qt=!!y.roughnessMap,Ot=y.anisotropy>0,I=y.clearcoat>0,E=y.dispersion>0,G=y.iridescence>0,Y=y.sheen>0,ee=y.transmission>0,q=Ot&&!!y.anisotropyMap,Ce=I&&!!y.clearcoatMap,le=I&&!!y.clearcoatNormalMap,be=I&&!!y.clearcoatRoughnessMap,we=G&&!!y.iridescenceMap,se=G&&!!y.iridescenceThicknessMap,fe=Y&&!!y.sheenColorMap,Pe=Y&&!!y.sheenRoughnessMap,Ae=!!y.specularMap,pe=!!y.specularColorMap,et=!!y.specularIntensityMap,F=ee&&!!y.transmissionMap,ce=ee&&!!y.thicknessMap,ue=!!y.gradientMap,Me=!!y.alphaMap,re=y.alphaTest>0,$=!!y.alphaHash,Re=!!y.extensions,Ke=Ii;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ke=n.toneMapping);let Lt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:Oe,fragmentShader:Ye,defines:y.defines,customVertexShaderID:Ze,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Te,batchingColor:Te&&L._colorsTexture!==null,instancing:De,instancingColor:De&&L.instanceColor!==null,instancingMorph:De&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ms,alphaToCoverage:!!y.alphaToCoverage,map:rt,matcap:bt,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:H,aoMap:ut,lightMap:Be,bumpMap:Ne,normalMap:ye,displacementMap:d&&Pt,emissiveMap:xe,normalMapObjectSpace:ye&&y.normalMapType===Yd,normalMapTangentSpace:ye&&y.normalMapType===xh,metalnessMap:Je,roughnessMap:qt,anisotropy:Ot,anisotropyMap:q,clearcoat:I,clearcoatMap:Ce,clearcoatNormalMap:le,clearcoatRoughnessMap:be,dispersion:E,iridescence:G,iridescenceMap:we,iridescenceThicknessMap:se,sheen:Y,sheenColorMap:fe,sheenRoughnessMap:Pe,specularMap:Ae,specularColorMap:pe,specularIntensityMap:et,transmission:ee,transmissionMap:F,thicknessMap:ce,gradientMap:ue,opaque:y.transparent===!1&&y.blending===fs&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:re,alphaHash:$,combine:y.combine,mapUv:rt&&_(y.map.channel),aoMapUv:ut&&_(y.aoMap.channel),lightMapUv:Be&&_(y.lightMap.channel),bumpMapUv:Ne&&_(y.bumpMap.channel),normalMapUv:ye&&_(y.normalMap.channel),displacementMapUv:Pt&&_(y.displacementMap.channel),emissiveMapUv:xe&&_(y.emissiveMap.channel),metalnessMapUv:Je&&_(y.metalnessMap.channel),roughnessMapUv:qt&&_(y.roughnessMap.channel),anisotropyMapUv:q&&_(y.anisotropyMap.channel),clearcoatMapUv:Ce&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(y.sheenRoughnessMap.channel),specularMapUv:Ae&&_(y.specularMap.channel),specularColorMapUv:pe&&_(y.specularColorMap.channel),specularIntensityMapUv:et&&_(y.specularIntensityMap.channel),transmissionMapUv:F&&_(y.transmissionMap.channel),thicknessMapUv:ce&&_(y.thicknessMap.channel),alphaMapUv:Me&&_(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ye||Ot),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(rt||Me),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:_e,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:rt&&y.map.isVideoTexture===!0&&ft.getTransfer(y.map.colorSpace)===Et,decodeVideoTextureEmissive:xe&&y.emissiveMap.isVideoTexture===!0&&ft.getTransfer(y.emissiveMap.colorSpace)===Et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dt,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&y.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function f(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)M.push(C),M.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(v(M,y),S(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let M=m[y.type],C;if(M){let D=hi[M];C=rf.clone(D.uniforms)}else C=y.uniforms;return C}function T(y,M){let C;for(let D=0,L=h.length;D<L;D++){let N=h[D];if(N.cacheKey===M){C=N,++C.usedTimes;break}}return C===void 0&&(C=new Bx(n,M,y,r),h.push(C)),C}function b(y){if(--y.usedTimes===0){let M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function A(y){c.remove(y)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:x,acquireProgram:T,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:R}}function Hx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Vx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Af(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,m,_,g){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=_,f.group=g),e++,f}function a(u,d,p,m,_,g){let f=o(u,d,p,m,_,g);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,m,_,g){let f=o(u,d,p,m,_,g);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||Vx),i.length>1&&i.sort(d||Af),s.length>1&&s.sort(d||Af)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Gx(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Rf,n.set(i,[o])):s>=r.length?(o=new Rf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Wx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Le};break;case"SpotLight":t={position:new U,direction:new U,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Xx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Yx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Zx(n){let e=new Wx,t=Xx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let s=new U,r=new Mt,o=new Mt;function a(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,m=0,_=0,g=0,f=0,v=0,S=0,x=0,T=0,b=0,A=0;l.sort(Yx);for(let y=0,M=l.length;y<M;y++){let C=l[y],D=C.color,L=C.intensity,N=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=D.r*L,u+=D.g*L,d+=D.b*L;else if(C.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(C.sh.coefficients[O],L);A++}else if(C.isDirectionalLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let V=C.shadow,H=t.get(C);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=C.shadow.matrix,v++}i.directional[p]=O,p++}else if(C.isSpotLight){let O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(D).multiplyScalar(L),O.distance=N,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,i.spot[_]=O;let V=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,V.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[_]=V.matrix,C.castShadow){let H=t.get(C);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=B,x++}_++}else if(C.isRectAreaLight){let O=e.get(C);O.color.copy(D).multiplyScalar(L),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=O,g++}else if(C.isPointLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let V=C.shadow,H=t.get(C);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=C.shadow.matrix,S++}i.point[m]=O,m++}else if(C.isHemisphereLight){let O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(L),O.groundColor.copy(C.groundColor).multiplyScalar(L),i.hemi[f]=O,f++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==f||R.numDirectionalShadows!==v||R.numPointShadows!==S||R.numSpotShadows!==x||R.numSpotMaps!==T||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,R.directionalLength=p,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=f,R.numDirectionalShadows=v,R.numPointShadows=S,R.numSpotShadows=x,R.numSpotMaps=T,R.numLightProbes=A,i.version=qx++)}function c(l,h){let u=0,d=0,p=0,m=0,_=0,g=h.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){let S=l[f];if(S.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(S.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),p++}else if(S.isRectAreaLight){let x=i.rectArea[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:i}}function Cf(n){let e=new Zx(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Jx(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Cf(n),e.set(s,[a])):r>=o.length?(a=new Cf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function jx(n,e,t){let i=new fr,s=new nt,r=new nt,o=new Vt,a=new Da({depthPacking:qd}),c=new Ua,l={},h=t.maxTextureSize,u={[bi]:ln,[ln]:bi,[Dt]:Dt},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Kx,fragmentShader:$x}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new vt;m.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh;let f=this.type;this.render=function(b,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let y=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Ci),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let L=f!==li&&this.type===li,N=f===li&&this.type!==li;for(let B=0,O=b.length;B<O;B++){let V=b[B],H=V.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let j=H.getFrameExtents();if(s.multiply(j),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,H.mapSize.y=r.y)),H.map===null||L===!0||N===!0){let ae=this.type!==li?{minFilter:Tn,magFilter:Tn}:{};H.map!==null&&H.map.dispose(),H.map=new ri(s.x,s.y,ae),H.map.texture.name=V.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let ie=H.getViewportCount();for(let ae=0;ae<ie;ae++){let _e=H.getViewport(ae);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),D.viewport(o),H.updateMatrices(V,ae),i=H.getFrustum(),x(A,R,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===li&&v(H,R),H.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(y,M,C)};function v(b,A){let R=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ri(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,R,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,R,p,_,null)}function S(b,A,R,y){let M=null,C=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=R.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=M.uuid,L=A.uuid,N=l[D];N===void 0&&(N={},l[D]=N);let B=N[L];B===void 0&&(B=M.clone(),N[L]=B,A.addEventListener("dispose",T)),M=B}if(M.visible=A.visible,M.wireframe=A.wireframe,y===li?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=n.properties.get(M);D.light=R}return M}function x(b,A,R,y,M){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===li)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);let L=e.update(b),N=b.material;if(Array.isArray(N)){let B=L.groups;for(let O=0,V=B.length;O<V;O++){let H=B[O],j=N[H.materialIndex];if(j&&j.visible){let ie=S(b,j,y,M);b.onBeforeShadow(n,b,A,R,L,ie,H),n.renderBufferDirect(R,null,L,ie,b,H),b.onAfterShadow(n,b,A,R,L,ie,H)}}}else if(N.visible){let B=S(b,N,y,M);b.onBeforeShadow(n,b,A,R,L,B,null),n.renderBufferDirect(R,null,L,B,b,null),b.onAfterShadow(n,b,A,R,L,B,null)}}let D=b.children;for(let L=0,N=D.length;L<N;L++)x(D[L],A,R,y,M)}function T(b){b.target.removeEventListener("dispose",T);for(let R in l){let y=l[R],M=b.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}function ev(n,e){function t(){let F=!1,ce=new Vt,ue=null,Me=new Vt(0,0,0,0);return{setMask:function(re){ue!==re&&!F&&(n.colorMask(re,re,re,re),ue=re)},setLocked:function(re){F=re},setClear:function(re,$,Re,Ke,Lt){Lt===!0&&(re*=Ke,$*=Ke,Re*=Ke),ce.set(re,$,Re,Ke),Me.equals(ce)===!1&&(n.clearColor(re,$,Re,Ke),Me.copy(ce))},reset:function(){F=!1,ue=null,Me.set(-1,0,0,0)}}}function i(){let F=!1,ce=!1,ue=null,Me=null,re=null;return{setReversed:function($){if(ce!==$){let Re=e.get("EXT_clip_control");$?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=$;let Ke=re;re=null,this.setClear(Ke)}},getReversed:function(){return ce},setTest:function($){$?Q(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function($){ue!==$&&!F&&(n.depthMask($),ue=$)},setFunc:function($){if(ce&&($=Qx[$]),Me!==$){switch($){case Xa:n.depthFunc(n.NEVER);break;case qa:n.depthFunc(n.ALWAYS);break;case Ya:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case Za:n.depthFunc(n.EQUAL);break;case Ja:n.depthFunc(n.GEQUAL);break;case Ka:n.depthFunc(n.GREATER);break;case $a:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=$}},setLocked:function($){F=$},setClear:function($){re!==$&&(ce&&($=1-$),n.clearDepth($),re=$)},reset:function(){F=!1,ue=null,Me=null,re=null,ce=!1}}}function s(){let F=!1,ce=null,ue=null,Me=null,re=null,$=null,Re=null,Ke=null,Lt=null;return{setTest:function(yt){F||(yt?Q(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(yt){ce!==yt&&!F&&(n.stencilMask(yt),ce=yt)},setFunc:function(yt,mi,ii){(ue!==yt||Me!==mi||re!==ii)&&(n.stencilFunc(yt,mi,ii),ue=yt,Me=mi,re=ii)},setOp:function(yt,mi,ii){($!==yt||Re!==mi||Ke!==ii)&&(n.stencilOp(yt,mi,ii),$=yt,Re=mi,Ke=ii)},setLocked:function(yt){F=yt},setClear:function(yt){Lt!==yt&&(n.clearStencil(yt),Lt=yt)},reset:function(){F=!1,ce=null,ue=null,Me=null,re=null,$=null,Re=null,Ke=null,Lt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,_=!1,g=null,f=null,v=null,S=null,x=null,T=null,b=null,A=new Le(0,0,0),R=0,y=!1,M=null,C=null,D=null,L=null,N=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,V=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=V>=2);let j=null,ie={},ae=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Oe=new Vt().fromArray(ae),Ye=new Vt().fromArray(_e);function Ze(F,ce,ue,Me){let re=new Uint8Array(4),$=n.createTexture();n.bindTexture(F,$),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<ue;Re++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ce+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return $}let Z={};Z[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),o.setFunc(ps),Ne(!1),ye(rh),Q(n.CULL_FACE),ut(Ci);function Q(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function ge(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function De(F,ce){return u[F]!==ce?(n.bindFramebuffer(F,ce),u[F]=ce,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Te(F,ce){let ue=p,Me=!1;if(F){ue=d.get(ce),ue===void 0&&(ue=[],d.set(ce,ue));let re=F.textures;if(ue.length!==re.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let $=0,Re=re.length;$<Re;$++)ue[$]=n.COLOR_ATTACHMENT0+$;ue.length=re.length,Me=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,Me=!0);Me&&n.drawBuffers(ue)}function rt(F){return m!==F?(n.useProgram(F),m=F,!0):!1}let bt={[qi]:n.FUNC_ADD,[xd]:n.FUNC_SUBTRACT,[vd]:n.FUNC_REVERSE_SUBTRACT};bt[yd]=n.MIN,bt[Md]=n.MAX;let P={[Sd]:n.ZERO,[bd]:n.ONE,[Ed]:n.SRC_COLOR,[Sa]:n.SRC_ALPHA,[Id]:n.SRC_ALPHA_SATURATE,[Rd]:n.DST_COLOR,[wd]:n.DST_ALPHA,[Td]:n.ONE_MINUS_SRC_COLOR,[ba]:n.ONE_MINUS_SRC_ALPHA,[Cd]:n.ONE_MINUS_DST_COLOR,[Ad]:n.ONE_MINUS_DST_ALPHA,[Pd]:n.CONSTANT_COLOR,[Ld]:n.ONE_MINUS_CONSTANT_COLOR,[Dd]:n.CONSTANT_ALPHA,[Ud]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(F,ce,ue,Me,re,$,Re,Ke,Lt,yt){if(F===Ci){_===!0&&(ge(n.BLEND),_=!1);return}if(_===!1&&(Q(n.BLEND),_=!0),F!==_d){if(F!==g||yt!==y){if((f!==qi||x!==qi)&&(n.blendEquation(n.FUNC_ADD),f=qi,x=qi),yt)switch(F){case fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ah:n.blendFunc(n.ONE,n.ONE);break;case ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ah:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ch:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,S=null,T=null,b=null,A.set(0,0,0),R=0,g=F,y=yt}return}re=re||ce,$=$||ue,Re=Re||Me,(ce!==f||re!==x)&&(n.blendEquationSeparate(bt[ce],bt[re]),f=ce,x=re),(ue!==v||Me!==S||$!==T||Re!==b)&&(n.blendFuncSeparate(P[ue],P[Me],P[$],P[Re]),v=ue,S=Me,T=$,b=Re),(Ke.equals(A)===!1||Lt!==R)&&(n.blendColor(Ke.r,Ke.g,Ke.b,Lt),A.copy(Ke),R=Lt),g=F,y=!1}function Be(F,ce){F.side===Dt?ge(n.CULL_FACE):Q(n.CULL_FACE);let ue=F.side===ln;ce&&(ue=!ue),Ne(ue),F.blending===fs&&F.transparent===!1?ut(Ci):ut(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Me=F.stencilWrite;a.setTest(Me),Me&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),xe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function ye(F){F!==pd?(Q(n.CULL_FACE),F!==C&&(F===rh?n.cullFace(n.BACK):F===md?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),C=F}function Pt(F){F!==D&&(O&&n.lineWidth(F),D=F)}function xe(F,ce,ue){F?(Q(n.POLYGON_OFFSET_FILL),(L!==ce||N!==ue)&&(n.polygonOffset(ce,ue),L=ce,N=ue)):ge(n.POLYGON_OFFSET_FILL)}function Je(F){F?Q(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function qt(F){F===void 0&&(F=n.TEXTURE0+B-1),j!==F&&(n.activeTexture(F),j=F)}function Ot(F,ce,ue){ue===void 0&&(j===null?ue=n.TEXTURE0+B-1:ue=j);let Me=ie[ue];Me===void 0&&(Me={type:void 0,texture:void 0},ie[ue]=Me),(Me.type!==F||Me.texture!==ce)&&(j!==ue&&(n.activeTexture(ue),j=ue),n.bindTexture(F,ce||Z[F]),Me.type=F,Me.texture=ce)}function I(){let F=ie[j];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(F){Oe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Oe.copy(F))}function Pe(F){Ye.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ye.copy(F))}function Ae(F,ce){let ue=l.get(ce);ue===void 0&&(ue=new WeakMap,l.set(ce,ue));let Me=ue.get(F);Me===void 0&&(Me=n.getUniformBlockIndex(ce,F.name),ue.set(F,Me))}function pe(F,ce){let Me=l.get(ce).get(F);c.get(ce)!==Me&&(n.uniformBlockBinding(ce,Me,F.__bindingPointIndex),c.set(ce,Me))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},j=null,ie={},u={},d=new WeakMap,p=[],m=null,_=!1,g=null,f=null,v=null,S=null,x=null,T=null,b=null,A=new Le(0,0,0),R=0,y=!1,M=null,C=null,D=null,L=null,N=null,Oe.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:ge,bindFramebuffer:De,drawBuffers:Te,useProgram:rt,setBlending:ut,setMaterial:Be,setFlipSided:Ne,setCullFace:ye,setLineWidth:Pt,setPolygonOffset:xe,setScissorTest:Je,activeTexture:qt,bindTexture:Ot,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:we,texImage3D:se,updateUBOMapping:Ae,uniformBlockBinding:pe,texStorage2D:le,texStorage3D:be,texSubImage2D:Y,texSubImage3D:ee,compressedTexSubImage2D:q,compressedTexSubImage3D:Ce,scissor:fe,viewport:Pe,reset:et}}function tv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,E){return p?new OffscreenCanvas(I,E):jr("canvas")}function _(I,E,G){let Y=1,ee=Ot(I);if((ee.width>G||ee.height>G)&&(Y=G/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let q=Math.floor(Y*ee.width),Ce=Math.floor(Y*ee.height);u===void 0&&(u=m(q,Ce));let le=E?m(q,Ce):u;return le.width=q,le.height=Ce,le.getContext("2d").drawImage(I,0,0,q,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Ce+")."),le}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function g(I){return I.generateMipmaps}function f(I){n.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(I,E,G,Y,ee=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let q=E;if(E===n.RED&&(G===n.FLOAT&&(q=n.R32F),G===n.HALF_FLOAT&&(q=n.R16F),G===n.UNSIGNED_BYTE&&(q=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.R8UI),G===n.UNSIGNED_SHORT&&(q=n.R16UI),G===n.UNSIGNED_INT&&(q=n.R32UI),G===n.BYTE&&(q=n.R8I),G===n.SHORT&&(q=n.R16I),G===n.INT&&(q=n.R32I)),E===n.RG&&(G===n.FLOAT&&(q=n.RG32F),G===n.HALF_FLOAT&&(q=n.RG16F),G===n.UNSIGNED_BYTE&&(q=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RG8UI),G===n.UNSIGNED_SHORT&&(q=n.RG16UI),G===n.UNSIGNED_INT&&(q=n.RG32UI),G===n.BYTE&&(q=n.RG8I),G===n.SHORT&&(q=n.RG16I),G===n.INT&&(q=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(q=n.RGB16UI),G===n.UNSIGNED_INT&&(q=n.RGB32UI),G===n.BYTE&&(q=n.RGB8I),G===n.SHORT&&(q=n.RGB16I),G===n.INT&&(q=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),G===n.UNSIGNED_INT&&(q=n.RGBA32UI),G===n.BYTE&&(q=n.RGBA8I),G===n.SHORT&&(q=n.RGBA16I),G===n.INT&&(q=n.RGBA32I)),E===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),E===n.RGBA){let Ce=ee?Kr:ft.getTransfer(Y);G===n.FLOAT&&(q=n.RGBA32F),G===n.HALF_FLOAT&&(q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(q=Ce===Et?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(I,E){let G;return I?E===null||E===Ki||E===vr?G=n.DEPTH24_STENCIL8:E===ei?G=n.DEPTH32F_STENCIL8:E===_r&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===vr?G=n.DEPTH_COMPONENT24:E===ei?G=n.DEPTH_COMPONENT32F:E===_r&&(G=n.DEPTH_COMPONENT16),G}function T(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Tn&&I.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function b(I){let E=I.target;E.removeEventListener("dispose",b),R(E),E.isVideoTexture&&h.delete(E)}function A(I){let E=I.target;E.removeEventListener("dispose",A),M(E)}function R(I){let E=i.get(I);if(E.__webglInit===void 0)return;let G=I.source,Y=d.get(G);if(Y){let ee=Y[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(I),Object.keys(Y).length===0&&d.delete(G)}i.remove(I)}function y(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let G=I.source,Y=d.get(G);delete Y[E.__cacheKey],o.memory.textures--}function M(I){let E=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let ee=0;ee<E.__webglFramebuffer[Y].length;ee++)n.deleteFramebuffer(E.__webglFramebuffer[Y][ee]);else n.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)n.deleteFramebuffer(E.__webglFramebuffer[Y]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=I.textures;for(let Y=0,ee=G.length;Y<ee;Y++){let q=i.get(G[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(G[Y])}i.remove(I)}let C=0;function D(){C=0}function L(){let I=C;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),C+=1,I}function N(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function B(I,E){let G=i.get(I);if(I.isVideoTexture&&Je(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,I,E);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function O(I,E){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Z(G,I,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function V(I,E){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Z(G,I,E);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function H(I,E){let G=i.get(I);if(I.version>0&&G.__version!==I.version){Q(G,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}let j={[Ea]:n.REPEAT,[Xi]:n.CLAMP_TO_EDGE,[Ta]:n.MIRRORED_REPEAT},ie={[Tn]:n.NEAREST,[Wd]:n.NEAREST_MIPMAP_NEAREST,[wo]:n.NEAREST_MIPMAP_LINEAR,[jn]:n.LINEAR,[tc]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},ae={[Zd]:n.NEVER,[ef]:n.ALWAYS,[Jd]:n.LESS,[vh]:n.LEQUAL,[Kd]:n.EQUAL,[Qd]:n.GEQUAL,[$d]:n.GREATER,[jd]:n.NOTEQUAL};function _e(I,E){if(E.type===ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===jn||E.magFilter===tc||E.magFilter===wo||E.magFilter===Ji||E.minFilter===jn||E.minFilter===tc||E.minFilter===wo||E.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,j[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,j[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,j[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ie[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ie[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==wo&&E.minFilter!==Ji||E.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Oe(I,E){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",b));let Y=E.source,ee=d.get(Y);ee===void 0&&(ee={},d.set(Y,ee));let q=N(E);if(q!==I.__cacheKey){ee[q]===void 0&&(ee[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[q].usedTimes++;let Ce=ee[I.__cacheKey];Ce!==void 0&&(ee[I.__cacheKey].usedTimes--,Ce.usedTimes===0&&y(E)),I.__cacheKey=q,I.__webglTexture=ee[q].texture}return G}function Ye(I,E,G){return Math.floor(Math.floor(I/G)/E)}function Ze(I,E,G,Y){let q=I.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,G,Y,E.data);else{q.sort((se,fe)=>se.start-fe.start);let Ce=0;for(let se=1;se<q.length;se++){let fe=q[Ce],Pe=q[se],Ae=fe.start+fe.count,pe=Ye(Pe.start,E.width,4),et=Ye(fe.start,E.width,4);Pe.start<=Ae+1&&pe===et&&Ye(Pe.start+Pe.count-1,E.width,4)===pe?fe.count=Math.max(fe.count,Pe.start+Pe.count-fe.start):(++Ce,q[Ce]=Pe)}q.length=Ce+1;let le=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let se=0,fe=q.length;se<fe;se++){let Pe=q[se],Ae=Math.floor(Pe.start/4),pe=Math.ceil(Pe.count/4),et=Ae%E.width,F=Math.floor(Ae/E.width),ce=pe,ue=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,et),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,et,F,ce,ue,G,Y,E.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function Z(I,E,G){let Y=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=n.TEXTURE_3D);let ee=Oe(I,E),q=E.source;t.bindTexture(Y,I.__webglTexture,n.TEXTURE0+G);let Ce=i.get(q);if(q.version!==Ce.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);let le=ft.getPrimaries(ft.workingColorSpace),be=E.colorSpace===Pi?null:ft.getPrimaries(E.colorSpace),we=E.colorSpace===Pi||le===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let se=_(E.image,!1,s.maxTextureSize);se=qt(E,se);let fe=r.convert(E.format,E.colorSpace),Pe=r.convert(E.type),Ae=S(E.internalFormat,fe,Pe,E.colorSpace,E.isVideoTexture);_e(Y,E);let pe,et=E.mipmaps,F=E.isVideoTexture!==!0,ce=Ce.__version===void 0||ee===!0,ue=q.dataReady,Me=T(E,se);if(E.isDepthTexture)Ae=x(E.format===yr,E.type),ce&&(F?t.texStorage2D(n.TEXTURE_2D,1,Ae,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ae,se.width,se.height,0,fe,Pe,null));else if(E.isDataTexture)if(et.length>0){F&&ce&&t.texStorage2D(n.TEXTURE_2D,Me,Ae,et[0].width,et[0].height);for(let re=0,$=et.length;re<$;re++)pe=et[re],F?ue&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,fe,Pe,pe.data):t.texImage2D(n.TEXTURE_2D,re,Ae,pe.width,pe.height,0,fe,Pe,pe.data);E.generateMipmaps=!1}else F?(ce&&t.texStorage2D(n.TEXTURE_2D,Me,Ae,se.width,se.height),ue&&Ze(E,se,fe,Pe)):t.texImage2D(n.TEXTURE_2D,0,Ae,se.width,se.height,0,fe,Pe,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){F&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ae,et[0].width,et[0].height,se.depth);for(let re=0,$=et.length;re<$;re++)if(pe=et[re],E.format!==zn)if(fe!==null)if(F){if(ue)if(E.layerUpdates.size>0){let Re=wh(pe.width,pe.height,E.format,E.type);for(let Ke of E.layerUpdates){let Lt=pe.data.subarray(Ke*Re/pe.data.BYTES_PER_ELEMENT,(Ke+1)*Re/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ke,pe.width,pe.height,1,fe,Lt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,se.depth,fe,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Ae,pe.width,pe.height,se.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,se.depth,fe,Pe,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Ae,pe.width,pe.height,se.depth,0,fe,Pe,pe.data)}else{F&&ce&&t.texStorage2D(n.TEXTURE_2D,Me,Ae,et[0].width,et[0].height);for(let re=0,$=et.length;re<$;re++)pe=et[re],E.format!==zn?fe!==null?F?ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Ae,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ue&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,fe,Pe,pe.data):t.texImage2D(n.TEXTURE_2D,re,Ae,pe.width,pe.height,0,fe,Pe,pe.data)}else if(E.isDataArrayTexture)if(F){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ae,se.width,se.height,se.depth),ue)if(E.layerUpdates.size>0){let re=wh(se.width,se.height,E.format,E.type);for(let $ of E.layerUpdates){let Re=se.data.subarray($*re/se.data.BYTES_PER_ELEMENT,($+1)*re/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,se.width,se.height,1,fe,Pe,Re)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,Pe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,se.width,se.height,se.depth,0,fe,Pe,se.data);else if(E.isData3DTexture)F?(ce&&t.texStorage3D(n.TEXTURE_3D,Me,Ae,se.width,se.height,se.depth),ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,Pe,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,se.width,se.height,se.depth,0,fe,Pe,se.data);else if(E.isFramebufferTexture){if(ce)if(F)t.texStorage2D(n.TEXTURE_2D,Me,Ae,se.width,se.height);else{let re=se.width,$=se.height;for(let Re=0;Re<Me;Re++)t.texImage2D(n.TEXTURE_2D,Re,Ae,re,$,0,fe,Pe,null),re>>=1,$>>=1}}else if(et.length>0){if(F&&ce){let re=Ot(et[0]);t.texStorage2D(n.TEXTURE_2D,Me,Ae,re.width,re.height)}for(let re=0,$=et.length;re<$;re++)pe=et[re],F?ue&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,fe,Pe,pe):t.texImage2D(n.TEXTURE_2D,re,Ae,fe,Pe,pe);E.generateMipmaps=!1}else if(F){if(ce){let re=Ot(se);t.texStorage2D(n.TEXTURE_2D,Me,Ae,re.width,re.height)}ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Pe,se)}else t.texImage2D(n.TEXTURE_2D,0,Ae,fe,Pe,se);g(E)&&f(Y),Ce.__version=q.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Q(I,E,G){if(E.image.length!==6)return;let Y=Oe(I,E),ee=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+G);let q=i.get(ee);if(ee.version!==q.__version||Y===!0){t.activeTexture(n.TEXTURE0+G);let Ce=ft.getPrimaries(ft.workingColorSpace),le=E.colorSpace===Pi?null:ft.getPrimaries(E.colorSpace),be=E.colorSpace===Pi||Ce===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let we=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let $=0;$<6;$++)!we&&!se?fe[$]=_(E.image[$],!0,s.maxCubemapSize):fe[$]=se?E.image[$].image:E.image[$],fe[$]=qt(E,fe[$]);let Pe=fe[0],Ae=r.convert(E.format,E.colorSpace),pe=r.convert(E.type),et=S(E.internalFormat,Ae,pe,E.colorSpace),F=E.isVideoTexture!==!0,ce=q.__version===void 0||Y===!0,ue=ee.dataReady,Me=T(E,Pe);_e(n.TEXTURE_CUBE_MAP,E);let re;if(we){F&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,et,Pe.width,Pe.height);for(let $=0;$<6;$++){re=fe[$].mipmaps;for(let Re=0;Re<re.length;Re++){let Ke=re[Re];E.format!==zn?Ae!==null?F?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re,0,0,Ke.width,Ke.height,Ae,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re,et,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re,0,0,Ke.width,Ke.height,Ae,pe,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re,et,Ke.width,Ke.height,0,Ae,pe,Ke.data)}}}else{if(re=E.mipmaps,F&&ce){re.length>0&&Me++;let $=Ot(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,et,$.width,$.height)}for(let $=0;$<6;$++)if(se){F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,fe[$].width,fe[$].height,Ae,pe,fe[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,et,fe[$].width,fe[$].height,0,Ae,pe,fe[$].data);for(let Re=0;Re<re.length;Re++){let Lt=re[Re].image[$].image;F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re+1,0,0,Lt.width,Lt.height,Ae,pe,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re+1,et,Lt.width,Lt.height,0,Ae,pe,Lt.data)}}else{F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,pe,fe[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,et,Ae,pe,fe[$]);for(let Re=0;Re<re.length;Re++){let Ke=re[Re];F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re+1,0,0,Ae,pe,Ke.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re+1,et,Ae,pe,Ke.image[$])}}}g(E)&&f(n.TEXTURE_CUBE_MAP),q.__version=ee.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ge(I,E,G,Y,ee,q){let Ce=r.convert(G.format,G.colorSpace),le=r.convert(G.type),be=S(G.internalFormat,Ce,le,G.colorSpace),we=i.get(E),se=i.get(G);if(se.__renderTarget=E,!we.__hasExternalTextures){let fe=Math.max(1,E.width>>q),Pe=Math.max(1,E.height>>q);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,be,fe,Pe,E.depth,0,Ce,le,null):t.texImage2D(ee,q,be,fe,Pe,0,Ce,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ee,se.__webglTexture,0,Pt(E)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ee,se.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(I,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){let Y=E.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,q=x(E.stencilBuffer,ee),Ce=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Pt(E);xe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,q,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,I)}else{let Y=E.textures;for(let ee=0;ee<Y.length;ee++){let q=Y[ee],Ce=r.convert(q.format,q.colorSpace),le=r.convert(q.type),be=S(q.internalFormat,Ce,le,q.colorSpace),we=Pt(E);G&&xe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,be,E.width,E.height):xe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,be,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,be,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(E.depthTexture);Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);let ee=Y.__webglTexture,q=Pt(E);if(E.depthTexture.format===cr)xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(E.depthTexture.format===yr)xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function rt(I){let E=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let Y=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){let ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=Y}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let Y=I.texture.mipmaps;Y&&Y.length>0?Te(E.__webglFramebuffer[0],I):Te(E.__webglFramebuffer,I)}else if(G){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=n.createRenderbuffer(),De(E.__webglDepthbuffer[Y],I,!1);else{let ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}else{let Y=I.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),De(E.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(I,E,G){let Y=i.get(I);E!==void 0&&ge(Y.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&rt(I)}function P(I){let E=I.texture,G=i.get(I),Y=i.get(E);I.addEventListener("dispose",A);let ee=I.textures,q=I.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=E.version,o.memory.textures++),q){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let be=0;be<E.mipmaps.length;be++)G.__webglFramebuffer[le][be]=n.createFramebuffer()}else G.__webglFramebuffer[le]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)G.__webglFramebuffer[le]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let le=0,be=ee.length;le<be;le++){let we=i.get(ee[le]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&xe(I)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){let be=ee[le];G.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[le]);let we=r.convert(be.format,be.colorSpace),se=r.convert(be.type),fe=S(be.internalFormat,we,se,be.colorSpace,I.isXRRenderTarget===!0),Pe=Pt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,fe,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,G.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),De(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),_e(n.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)ge(G.__webglFramebuffer[le][be],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be);else ge(G.__webglFramebuffer[le],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(E)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let le=0,be=ee.length;le<be;le++){let we=ee[le],se=i.get(we),fe=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),_e(fe,we),ge(G.__webglFramebuffer,I,we,n.COLOR_ATTACHMENT0+le,fe,0),g(we)&&f(fe)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(le=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),_e(le,E),E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)ge(G.__webglFramebuffer[be],I,E,n.COLOR_ATTACHMENT0,le,be);else ge(G.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,le,0);g(E)&&f(le),t.unbindTexture()}I.depthBuffer&&rt(I)}function ut(I){let E=I.textures;for(let G=0,Y=E.length;G<Y;G++){let ee=E[G];if(g(ee)){let q=v(I),Ce=i.get(ee).__webglTexture;t.bindTexture(q,Ce),f(q),t.unbindTexture()}}}let Be=[],Ne=[];function ye(I){if(I.samples>0){if(xe(I)===!1){let E=I.textures,G=I.width,Y=I.height,ee=n.COLOR_BUFFER_BIT,q=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(I),le=E.length>1;if(le)for(let we=0;we<E.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);let be=I.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let we=0;we<E.length;we++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);let se=i.get(E[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,ee,n.NEAREST),c===!0&&(Be.length=0,Ne.length=0,Be.push(n.COLOR_ATTACHMENT0+we),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Be.push(q),Ne.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let we=0;we<E.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);let se=i.get(E[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Pt(I){return Math.min(s.maxSamples,I.samples)}function xe(I){let E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Je(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function qt(I,E){let G=I.colorSpace,Y=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==ms&&G!==Pi&&(ft.getTransfer(G)===Et?(Y!==zn||ee!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=H,this.rebindTextures=bt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe}function nv(n,e){function t(i,s=Pi){let r,o=ft.getTransfer(s);if(i===Qn)return n.UNSIGNED_BYTE;if(i===ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ph)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uh)return n.BYTE;if(i===dh)return n.SHORT;if(i===_r)return n.UNSIGNED_SHORT;if(i===nc)return n.INT;if(i===Ki)return n.UNSIGNED_INT;if(i===ei)return n.FLOAT;if(i===xr)return n.HALF_FLOAT;if(i===mh)return n.ALPHA;if(i===gh)return n.RGB;if(i===zn)return n.RGBA;if(i===cr)return n.DEPTH_COMPONENT;if(i===yr)return n.DEPTH_STENCIL;if(i===rc)return n.RED;if(i===oc)return n.RED_INTEGER;if(i===_h)return n.RG;if(i===ac)return n.RG_INTEGER;if(i===cc)return n.RGBA_INTEGER;if(i===Ao||i===Ro||i===Co||i===Io)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lc||i===hc||i===uc||i===dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fc||i===pc||i===mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fc||i===pc)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gc||i===_c||i===xc||i===vc||i===yc||i===Mc||i===Sc||i===bc||i===Ec||i===Tc||i===wc||i===Ac||i===Rc||i===Cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ec)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ac)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ic||i===Pc||i===Lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ic)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dc||i===Uc||i===Fc||i===Nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function ov(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,bh(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,v,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,x)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),_(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,v,S):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===ln&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===ln&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let v=e.get(f),S=v.envMap,x=v.envMapRotation;S&&(g.envMap.value=S,bs.copy(x),bs.x*=-1,bs.y*=-1,bs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),g.envMapRotation.value.setFromMatrix4(rv.makeRotationFromEuler(bs)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,v,S){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=S*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){let v=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function av(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){let x=S.program;i.uniformBlockBinding(v,x)}function l(v,S){let x=s[v.id];x===void 0&&(m(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",g));let T=S.program;i.updateUBOMapping(v,T);let b=e.render.frame;r[v.id]!==b&&(d(v),r[v.id]=b)}function h(v){let S=u();v.__bindingPointIndex=S;let x=n.createBuffer(),T=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let S=s[v.id],x=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let b=0,A=x.length;b<A;b++){let R=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,M=R.length;y<M;y++){let C=R[y];if(p(C,b,y,T)===!0){let D=C.__offset,L=Array.isArray(C.value)?C.value:[C.value],N=0;for(let B=0;B<L.length;B++){let O=L[B],V=_(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,D+N,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,N),N+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,S,x,T){let b=v.value,A=S+"_"+x;if(T[A]===void 0)return typeof b=="number"||typeof b=="boolean"?T[A]=b:T[A]=b.clone(),!0;{let R=T[A];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return T[A]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function m(v){let S=v.uniforms,x=0,T=16;for(let A=0,R=S.length;A<R;A++){let y=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,C=y.length;M<C;M++){let D=y[M],L=Array.isArray(D.value)?D.value:[D.value];for(let N=0,B=L.length;N<B;N++){let O=L[N],V=_(O),H=x%T,j=H%V.boundary,ie=H+j;x+=j,ie!==0&&T-ie<V.storage&&(x+=T-ie),D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=V.storage}}}let b=x%T;return b>0&&(x+=T-b),v.__size=x,v.__cache={},this}function _(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function g(v){let S=v.target;S.removeEventListener("dispose",g);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Fg,Ng,Og,Bg,kg,zg,Hg,Vg,Gg,Wg,Xg,qg,Yg,Zg,Jg,Kg,$g,jg,Qg,e0,t0,n0,i0,s0,r0,o0,a0,c0,l0,h0,u0,d0,f0,p0,m0,g0,_0,x0,v0,y0,M0,S0,b0,E0,T0,w0,A0,R0,C0,I0,P0,L0,D0,U0,F0,N0,O0,B0,k0,z0,H0,V0,G0,W0,X0,q0,Y0,Z0,J0,K0,$0,j0,Q0,e1,t1,n1,i1,s1,r1,o1,a1,c1,l1,h1,u1,d1,f1,p1,m1,g1,_1,x1,v1,y1,M1,S1,b1,E1,T1,w1,A1,R1,C1,I1,P1,L1,D1,U1,F1,N1,O1,B1,k1,z1,H1,V1,G1,W1,X1,q1,Y1,Z1,J1,K1,$1,j1,Q1,e_,t_,n_,i_,s_,r_,o_,a_,c_,l_,h_,u_,d_,f_,it,de,hi,Bc,Ss,p_,br,af,Ts,Rh,cf,Ch,Ih,Ph,Lh,Es,Sr,lf,M_,Hc,Pf,ff,Lf,Df,Uf,pf,mf,gf,_f,xf,Uh,Fh,Nh,Dh,Er,xx,vx,Mf,zc,Rx,Cx,Px,kx,Bh,kh,qx,Kx,$x,Qx,iv,sv,zh,Hh,bs,rv,Vc,ti=mt(()=>{Ah();Ah();Fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ng=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,s0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,r0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u0="gl_FragColor = linearToOutputTexel( gl_FragColor );",d0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,m0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,b0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,A0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,D0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;

		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,D1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,G1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,d_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:Fg,alphahash_pars_fragment:Ng,alphamap_fragment:Og,alphamap_pars_fragment:Bg,alphatest_fragment:kg,alphatest_pars_fragment:zg,aomap_fragment:Hg,aomap_pars_fragment:Vg,batching_pars_vertex:Gg,batching_vertex:Wg,begin_vertex:Xg,beginnormal_vertex:qg,bsdfs:Yg,iridescence_fragment:Zg,bumpmap_pars_fragment:Jg,clipping_planes_fragment:Kg,clipping_planes_pars_fragment:$g,clipping_planes_pars_vertex:jg,clipping_planes_vertex:Qg,color_fragment:e0,color_pars_fragment:t0,color_pars_vertex:n0,color_vertex:i0,common:s0,cube_uv_reflection_fragment:r0,defaultnormal_vertex:o0,displacementmap_pars_vertex:a0,displacementmap_vertex:c0,emissivemap_fragment:l0,emissivemap_pars_fragment:h0,colorspace_fragment:u0,colorspace_pars_fragment:d0,envmap_fragment:f0,envmap_common_pars_fragment:p0,envmap_pars_fragment:m0,envmap_pars_vertex:g0,envmap_physical_pars_fragment:A0,envmap_vertex:_0,fog_vertex:x0,fog_pars_vertex:v0,fog_fragment:y0,fog_pars_fragment:M0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:b0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:T0,lights_pars_begin:w0,lights_toon_fragment:R0,lights_toon_pars_fragment:C0,lights_phong_fragment:I0,lights_phong_pars_fragment:P0,lights_physical_fragment:L0,lights_physical_pars_fragment:D0,lights_fragment_begin:U0,lights_fragment_maps:F0,lights_fragment_end:N0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:z0,map_fragment:H0,map_pars_fragment:V0,map_particle_fragment:G0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:q0,morphinstance_vertex:Y0,morphcolor_vertex:Z0,morphnormal_vertex:J0,morphtarget_pars_vertex:K0,morphtarget_vertex:$0,normal_fragment_begin:j0,normal_fragment_maps:Q0,normal_pars_fragment:e1,normal_pars_vertex:t1,normal_vertex:n1,normalmap_pars_fragment:i1,clearcoat_normal_fragment_begin:s1,clearcoat_normal_fragment_maps:r1,clearcoat_pars_fragment:o1,iridescence_pars_fragment:a1,opaque_fragment:c1,packing:l1,premultiplied_alpha_fragment:h1,project_vertex:u1,dithering_fragment:d1,dithering_pars_fragment:f1,roughnessmap_fragment:p1,roughnessmap_pars_fragment:m1,shadowmap_pars_fragment:g1,shadowmap_pars_vertex:_1,shadowmap_vertex:x1,shadowmask_pars_fragment:v1,skinbase_vertex:y1,skinning_pars_vertex:M1,skinning_vertex:S1,skinnormal_vertex:b1,specularmap_fragment:E1,specularmap_pars_fragment:T1,tonemapping_fragment:w1,tonemapping_pars_fragment:A1,transmission_fragment:R1,transmission_pars_fragment:C1,uv_pars_fragment:I1,uv_pars_vertex:P1,uv_vertex:L1,worldpos_vertex:D1,background_vert:U1,background_frag:F1,backgroundCube_vert:N1,backgroundCube_frag:O1,cube_vert:B1,cube_frag:k1,depth_vert:z1,depth_frag:H1,distanceRGBA_vert:V1,distanceRGBA_frag:G1,equirect_vert:W1,equirect_frag:X1,linedashed_vert:q1,linedashed_frag:Y1,meshbasic_vert:Z1,meshbasic_frag:J1,meshlambert_vert:K1,meshlambert_frag:$1,meshmatcap_vert:j1,meshmatcap_frag:Q1,meshnormal_vert:e_,meshnormal_frag:t_,meshphong_vert:n_,meshphong_frag:i_,meshphysical_vert:s_,meshphysical_frag:r_,meshtoon_vert:o_,meshtoon_frag:a_,points_vert:c_,points_frag:l_,shadow_vert:h_,shadow_frag:u_,sprite_vert:d_,sprite_frag:f_},de={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},hi={basic:{uniforms:gn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:gn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Le(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:gn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:gn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:gn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Le(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:gn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:gn([de.points,de.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:gn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:gn([de.common,de.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:gn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:gn([de.sprite,de.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:gn([de.common,de.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:gn([de.lights,de.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};hi.physical={uniforms:gn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};Bc={r:0,b:0,g:0},Ss=new mn,p_=new Mt;br=4,af=[.125,.215,.35,.446,.526,.582],Ts=20,Rh=new bo,cf=new Le,Ch=null,Ih=0,Ph=0,Lh=!1,Es=(1+Math.sqrt(5))/2,Sr=1/Es,lf=[new U(-Es,Sr,0),new U(Es,Sr,0),new U(-Sr,0,Es),new U(Sr,0,Es),new U(0,Es,-Sr),new U(0,Es,Sr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],M_=new U,Hc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=M_}=r;Ch=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ch,Ih,Ph),this._renderer.xr.enabled=Lh,e.scissorTest=!1,kc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ch=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:xr,format:zn,colorSpace:ms,depthBuffer:!1},s=hf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S_(r)),this._blurMaterial=b_(r,e,t)}return s}_compileMaterial(e){let t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,Rh)}_sceneToCubeUV(e,t,i,s,r){let c=new fn(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(cf),u.toneMapping=Ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Zt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new xt(new ai,_),f=!1,v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,f=!0):(_.color.copy(cf),f=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):x===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));let T=this._cubeSize;kc(s,x*T,S>2?T:0,T,T),u.setRenderTarget(s),f&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===xs||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;kc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Rh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lf[(s-r-1)%lf.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new xt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ts-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Ts;g>Ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ts}`);let f=[],v=0;for(let A=0;A<Ts;++A){let R=A/_,y=Math.exp(-R*R/2);f.push(y),A===0?v+=y:A<g&&(v+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-i;let x=this._sizeLods[s],T=3*x*(s>S-br?s-S+br:0),b=4*(this._cubeSize-x);kc(t,T,b,3*x,2*x),c.setRenderTarget(t),c.render(u,Rh)}};Pf=new An,ff=new ho(1,1),Lf=new Qr,Df=new Ca,Uf=new ro,pf=[],mf=[],gf=new Float32Array(16),_f=new Float32Array(9),xf=new Float32Array(4);Uh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=K_(t.type)}},Fh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gx(t.type)}},Nh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Dh=/(\w+)(\])?(\[|\.)?/g;Er=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);_x(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};xx=37297,vx=0;Mf=new je;zc=new U;Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;Cx=new Map;Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;kx=0,Bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new kh(e),t.set(e,i)),i}},kh=class{constructor(e){this.id=kx++,this.code=e,this.usedTimes=0}};qx=0;Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$x=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;Qx={[Xa]:qa,[Ya]:Ka,[Za]:$a,[ps]:Ja,[qa]:Xa,[Ka]:Ya,[$a]:Za,[Ja]:ps};iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new uo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new yn({vertexShader:iv,fragmentShader:sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new go(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hh=class extends Ei{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null,_=typeof XRWebGLBinding<"u",g=new zh,f={},v=t.getContextAttributes(),S=null,x=null,T=[],b=[],A=new nt,R=null,y=new fn;y.viewport=new Vt;let M=new fn;M.viewport=new Vt;let C=[y,M],D=new Wa,L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=T[Z];return Q===void 0&&(Q=new dr,T[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=T[Z];return Q===void 0&&(Q=new dr,T[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=T[Z];return Q===void 0&&(Q=new dr,T[Z]=Q),Q.getHandSpace()};function B(Z){let Q=b.indexOf(Z.inputSource);if(Q===-1)return;let ge=T[Q];ge!==void 0&&(ge.update(Z.inputSource,Z.frame,l||o),ge.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",V);for(let Z=0;Z<T.length;Z++){let Q=b[Z];Q!==null&&(b[Z]=null,T[Z].disconnect(Q))}L=null,N=null,g.reset();for(let Z in f)delete f[Z];e.setRenderTarget(S),p=null,d=null,u=null,s=null,x=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",O),s.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,De=null,Te=null;v.depth&&(Te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=v.stencil?yr:cr,De=v.stencil?vr:Ki);let rt={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(rt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new ri(d.textureWidth,d.textureHeight,{format:zn,type:Qn,depthTexture:new ho(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ge={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ri(p.framebufferWidth,p.framebufferHeight,{format:zn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(Z){for(let Q=0;Q<Z.removed.length;Q++){let ge=Z.removed[Q],De=b.indexOf(ge);De>=0&&(b[De]=null,T[De].disconnect(ge))}for(let Q=0;Q<Z.added.length;Q++){let ge=Z.added[Q],De=b.indexOf(ge);if(De===-1){for(let rt=0;rt<T.length;rt++)if(rt>=b.length){b.push(ge),De=rt;break}else if(b[rt]===null){b[rt]=ge,De=rt;break}if(De===-1)break}let Te=T[De];Te&&Te.connect(ge)}}let H=new U,j=new U;function ie(Z,Q,ge){H.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);let De=H.distanceTo(j),Te=Q.projectionMatrix.elements,rt=ge.projectionMatrix.elements,bt=Te[14]/(Te[10]-1),P=Te[14]/(Te[10]+1),ut=(Te[9]+1)/Te[5],Be=(Te[9]-1)/Te[5],Ne=(Te[8]-1)/Te[0],ye=(rt[8]+1)/rt[0],Pt=bt*Ne,xe=bt*ye,Je=De/(-Ne+ye),qt=Je*-Ne;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(qt),Z.translateZ(Je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Ot=bt+Je,I=P+Je,E=Pt-qt,G=xe+(De-qt),Y=ut*P/I*Ot,ee=Be*P/I*Ot;Z.projectionMatrix.makePerspective(E,G,Y,ee,Ot,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,ge=Z.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),D.near=M.near=y.near=Q,D.far=M.far=y.far=ge,(L!==D.near||N!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,N=D.far),D.layers.mask=Z.layers.mask|6,y.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;let De=Z.parent,Te=D.cameras;ae(D,De);for(let rt=0;rt<Te.length;rt++)ae(Te[rt],De);Te.length===2?ie(D,y,M):D.projectionMatrix.copy(y.projectionMatrix),_e(Z,D,De)};function _e(Z,Q,ge){ge===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(ge.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=lr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(Z){return f[Z]};let Oe=null;function Ye(Z,Q){if(h=Q.getViewerPose(l||o),m=Q,h!==null){let ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let De=!1;ge.length!==D.cameras.length&&(D.cameras.length=0,De=!0);for(let P=0;P<ge.length;P++){let ut=ge[P],Be=null;if(p!==null)Be=p.getViewport(ut);else{let ye=u.getViewSubImage(d,ut);Be=ye.viewport,P===0&&(e.setRenderTargetTextures(x,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(x))}let Ne=C[P];Ne===void 0&&(Ne=new fn,Ne.layers.enable(P),Ne.viewport=new Vt,C[P]=Ne),Ne.matrix.fromArray(ut.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ut.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Be.x,Be.y,Be.width,Be.height),P===0&&(D.matrix.copy(Ne.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),De===!0&&D.cameras.push(Ne)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let P=u.getDepthInformation(ge[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let P=0;P<ge.length;P++){let ut=ge[P].camera;if(ut){let Be=f[ut];Be||(Be=new uo,f[ut]=Be);let Ne=u.getCameraImage(ut);Be.sourceTexture=Ne}}}}for(let ge=0;ge<T.length;ge++){let De=b[ge],Te=T[ge];De!==null&&Te!==void 0&&Te.update(De,Q,l||o)}Oe&&Oe(Z,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),m=null}let Ze=new If;Ze.setAnimationLoop(Ye),this.setAnimationLoop=function(Z){Oe=Z},this.dispose=function(){}}},bs=new mn,rv=new Mt;Vc=class{constructor(e={}){let{canvas:t=tf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,f=null,v=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=vn;let b=0,A=0,R=null,y=-1,M=null,C=new Vt,D=new Vt,L=null,N=new Le(0),B=0,O=t.width,V=t.height,H=1,j=null,ie=null,ae=new Vt(0,0,O,V),_e=new Vt(0,0,O,V),Oe=!1,Ye=new fr,Ze=!1,Z=!1,Q=new Mt,ge=new U,De=new Vt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function bt(){return R===null?H:1}let P=i;function ut(w,k){return t.getContext(w,k)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",re,!1),P===null){let k="webgl2";if(P=ut(k,w),P===null)throw ut(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,Ne,ye,Pt,xe,Je,qt,Ot,I,E,G,Y,ee,q,Ce,le,be,we,se,fe,Pe,Ae,pe,et;function F(){Be=new T_(P),Be.init(),Ae=new nv(P,Be),Ne=new x_(P,Be,e,Ae),ye=new ev(P,Be),Ne.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),Pt=new R_(P),xe=new Hx,Je=new tv(P,Be,ye,xe,Ne,Ae,Pt),qt=new y_(x),Ot=new E_(x),I=new Ug(P),pe=new g_(P,I),E=new w_(P,I,Pt,pe),G=new I_(P,E,I,Pt),se=new C_(P,Ne,Je),le=new v_(xe),Y=new zx(x,qt,Ot,Be,Ne,pe,le),ee=new ov(x,xe),q=new Gx,Ce=new Jx(Be),we=new m_(x,qt,Ot,ye,G,p,c),be=new jx(x,G,Ne),et=new av(P,Pt,Ne,ye),fe=new __(P,Be,Pt),Pe=new A_(P,Be,Pt),Pt.programs=Y.programs,x.capabilities=Ne,x.extensions=Be,x.properties=xe,x.renderLists=q,x.shadowMap=be,x.state=ye,x.info=Pt}F();let ce=new Hh(x,P);this.xr=ce,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(O,V,!1))},this.getSize=function(w){return w.set(O,V)},this.setSize=function(w,k,W=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,V=k,t.width=Math.floor(w*H),t.height=Math.floor(k*H),W===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(O*H,V*H).floor()},this.setDrawingBufferSize=function(w,k,W){O=w,V=k,H=W,t.width=Math.floor(w*W),t.height=Math.floor(k*W),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,k,W,X){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,k,W,X),ye.viewport(C.copy(ae).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(_e)},this.setScissor=function(w,k,W,X){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,k,W,X),ye.scissor(D.copy(_e).multiplyScalar(H).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(w){ye.setScissorTest(Oe=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,W=!0){let X=0;if(w){let z=!1;if(R!==null){let oe=R.texture.format;z=oe===cc||oe===ac||oe===oc}if(z){let oe=R.texture.type,me=oe===Qn||oe===Ki||oe===_r||oe===vr||oe===ic||oe===sc,Ee=we.getClearColor(),ve=we.getClearAlpha(),Ve=Ee.r,We=Ee.g,Ue=Ee.b;me?(m[0]=Ve,m[1]=We,m[2]=Ue,m[3]=ve,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=Ve,_[1]=We,_[2]=Ue,_[3]=ve,P.clearBufferiv(P.COLOR,0,_))}else X|=P.COLOR_BUFFER_BIT}k&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",re,!1),we.dispose(),q.dispose(),Ce.dispose(),xe.dispose(),qt.dispose(),Ot.dispose(),G.dispose(),pe.dispose(),et.dispose(),Y.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ii),ce.removeEventListener("sessionend",Ru),ss.stop()};function ue(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let w=Pt.autoReset,k=be.enabled,W=be.autoUpdate,X=be.needsUpdate,z=be.type;F(),Pt.autoReset=w,be.enabled=k,be.autoUpdate=W,be.needsUpdate=X,be.type=z}function re(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $(w){let k=w.target;k.removeEventListener("dispose",$),Re(k)}function Re(w){Ke(w),xe.remove(w)}function Ke(w){let k=xe.get(w).programs;k!==void 0&&(k.forEach(function(W){Y.releaseProgram(W)}),w.isShaderMaterial&&Y.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,W,X,z,oe){k===null&&(k=Te);let me=z.isMesh&&z.matrixWorld.determinant()<0,Ee=mm(w,k,W,X,z);ye.setMaterial(X,me);let ve=W.index,Ve=1;if(X.wireframe===!0){if(ve=E.getWireframeAttribute(W),ve===void 0)return;Ve=2}let We=W.drawRange,Ue=W.attributes.position,lt=We.start*Ve,Tt=(We.start+We.count)*Ve;oe!==null&&(lt=Math.max(lt,oe.start*Ve),Tt=Math.min(Tt,(oe.start+oe.count)*Ve)),ve!==null?(lt=Math.max(lt,0),Tt=Math.min(Tt,ve.count)):Ue!=null&&(lt=Math.max(lt,0),Tt=Math.min(Tt,Ue.count));let Gt=Tt-lt;if(Gt<0||Gt===1/0)return;pe.setup(z,X,Ee,W,ve);let Ut,At=fe;if(ve!==null&&(Ut=I.get(ve),At=Pe,At.setIndex(Ut)),z.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*bt()),At.setMode(P.LINES)):At.setMode(P.TRIANGLES);else if(z.isLine){let ke=X.linewidth;ke===void 0&&(ke=1),ye.setLineWidth(ke*bt()),z.isLineSegments?At.setMode(P.LINES):z.isLineLoop?At.setMode(P.LINE_LOOP):At.setMode(P.LINE_STRIP)}else z.isPoints?At.setMode(P.POINTS):z.isSprite&&At.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))At.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let ke=z._multiDrawStarts,Bt=z._multiDrawCounts,pt=z._multiDrawCount,Rn=ve?I.get(ve).bytesPerElement:1,Hs=xe.get(X).currentProgram.getUniforms();for(let Cn=0;Cn<pt;Cn++)Hs.setValue(P,"_gl_DrawID",Cn),At.render(ke[Cn]/Rn,Bt[Cn])}else if(z.isInstancedMesh)At.renderInstances(lt,Gt,z.count);else if(W.isInstancedBufferGeometry){let ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Bt=Math.min(W.instanceCount,ke);At.renderInstances(lt,Gt,Bt)}else At.render(lt,Gt)};function Lt(w,k,W){w.transparent===!0&&w.side===Dt&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,Jo(w,k,W),w.side=bi,w.needsUpdate=!0,Jo(w,k,W),w.side=Dt):Jo(w,k,W)}this.compile=function(w,k,W=null){W===null&&(W=w),f=Ce.get(W),f.init(k),S.push(f),W.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),w!==W&&w.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();let X=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let oe=z.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){let Ee=oe[me];Lt(Ee,W,z),X.add(Ee)}else Lt(oe,W,z),X.add(oe)}),f=S.pop(),X},this.compileAsync=function(w,k,W=null){let X=this.compile(w,k,W);return new Promise(z=>{function oe(){if(X.forEach(function(me){xe.get(me).currentProgram.isReady()&&X.delete(me)}),X.size===0){z(w);return}setTimeout(oe,10)}Be.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let yt=null;function mi(w){yt&&yt(w)}function ii(){ss.stop()}function Ru(){ss.start()}let ss=new If;ss.setAnimationLoop(mi),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(w){yt=w,ce.setAnimationLoop(w),w===null?ss.stop():ss.start()},ce.addEventListener("sessionstart",ii),ce.addEventListener("sessionend",Ru),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,k,R),f=Ce.get(w,S.length),f.init(k),S.push(f),Q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ye.setFromProjectionMatrix(Q,$n,k.reversedDepth),Z=this.localClippingEnabled,Ze=le.init(this.clippingPlanes,Z),g=q.get(w,v.length),g.init(),v.push(g),ce.enabled===!0&&ce.isPresenting===!0){let oe=x.xr.getDepthSensingMesh();oe!==null&&vl(oe,k,-1/0,x.sortObjects)}vl(w,k,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(j,ie),rt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,rt&&we.addToRenderList(g,w),this.info.render.frame++,Ze===!0&&le.beginShadows();let W=f.state.shadowsArray;be.render(W,w,k),Ze===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,z=g.transmissive;if(f.setupLights(),k.isArrayCamera){let oe=k.cameras;if(z.length>0)for(let me=0,Ee=oe.length;me<Ee;me++){let ve=oe[me];Iu(X,z,w,ve)}rt&&we.render(w);for(let me=0,Ee=oe.length;me<Ee;me++){let ve=oe[me];Cu(g,w,ve,ve.viewport)}}else z.length>0&&Iu(X,z,w,k),rt&&we.render(w),Cu(g,w,k);R!==null&&A===0&&(Je.updateMultisampleRenderTarget(R),Je.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,k),pe.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],Ze===!0&&le.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function vl(w,k,W,X){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ye.intersectsSprite(w)){X&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);let me=G.update(w),Ee=w.material;Ee.visible&&g.push(w,me,Ee,W,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ye.intersectsObject(w))){let me=G.update(w),Ee=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),De.copy(me.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(Ee)){let ve=me.groups;for(let Ve=0,We=ve.length;Ve<We;Ve++){let Ue=ve[Ve],lt=Ee[Ue.materialIndex];lt&&lt.visible&&g.push(w,me,lt,W,De.z,Ue)}}else Ee.visible&&g.push(w,me,Ee,W,De.z,null)}}let oe=w.children;for(let me=0,Ee=oe.length;me<Ee;me++)vl(oe[me],k,W,X)}function Cu(w,k,W,X){let z=w.opaque,oe=w.transmissive,me=w.transparent;f.setupLightsView(W),Ze===!0&&le.setGlobalState(x.clippingPlanes,W),X&&ye.viewport(C.copy(X)),z.length>0&&Zo(z,k,W),oe.length>0&&Zo(oe,k,W),me.length>0&&Zo(me,k,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Iu(w,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new ri(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?xr:Qn,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let oe=f.state.transmissionRenderTarget[X.id],me=X.viewport||C;oe.setSize(me.z*x.transmissionResolutionScale,me.w*x.transmissionResolutionScale);let Ee=x.getRenderTarget(),ve=x.getActiveCubeFace(),Ve=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(N),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),rt&&we.render(W);let We=x.toneMapping;x.toneMapping=Ii;let Ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),Ze===!0&&le.setGlobalState(x.clippingPlanes,X),Zo(w,W,X),Je.updateMultisampleRenderTarget(oe),Je.updateRenderTargetMipmap(oe),Be.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Tt=0,Gt=k.length;Tt<Gt;Tt++){let Ut=k[Tt],At=Ut.object,ke=Ut.geometry,Bt=Ut.material,pt=Ut.group;if(Bt.side===Dt&&At.layers.test(X.layers)){let Rn=Bt.side;Bt.side=ln,Bt.needsUpdate=!0,Pu(At,W,X,ke,Bt,pt),Bt.side=Rn,Bt.needsUpdate=!0,lt=!0}}lt===!0&&(Je.updateMultisampleRenderTarget(oe),Je.updateRenderTargetMipmap(oe))}x.setRenderTarget(Ee,ve,Ve),x.setClearColor(N,B),Ue!==void 0&&(X.viewport=Ue),x.toneMapping=We}function Zo(w,k,W){let X=k.isScene===!0?k.overrideMaterial:null;for(let z=0,oe=w.length;z<oe;z++){let me=w[z],Ee=me.object,ve=me.geometry,Ve=me.group,We=me.material;We.allowOverride===!0&&X!==null&&(We=X),Ee.layers.test(W.layers)&&Pu(Ee,k,W,ve,We,Ve)}}function Pu(w,k,W,X,z,oe){w.onBeforeRender(x,k,W,X,z,oe),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(x,k,W,X,w,oe),z.transparent===!0&&z.side===Dt&&z.forceSinglePass===!1?(z.side=ln,z.needsUpdate=!0,x.renderBufferDirect(W,k,X,z,w,oe),z.side=bi,z.needsUpdate=!0,x.renderBufferDirect(W,k,X,z,w,oe),z.side=Dt):x.renderBufferDirect(W,k,X,z,w,oe),w.onAfterRender(x,k,W,X,z,oe)}function Jo(w,k,W){k.isScene!==!0&&(k=Te);let X=xe.get(w),z=f.state.lights,oe=f.state.shadowsArray,me=z.state.version,Ee=Y.getParameters(w,z.state,oe,k,W),ve=Y.getProgramCacheKey(Ee),Ve=X.programs;X.environment=w.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(w.isMeshStandardMaterial?Ot:qt).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",$),Ve=new Map,X.programs=Ve);let We=Ve.get(ve);if(We!==void 0){if(X.currentProgram===We&&X.lightsStateVersion===me)return Du(w,Ee),We}else Ee.uniforms=Y.getUniforms(w),w.onBeforeCompile(Ee,x),We=Y.acquireProgram(Ee,ve),Ve.set(ve,We),X.uniforms=Ee.uniforms;let Ue=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=le.uniform),Du(w,Ee),X.needsLights=_m(w),X.lightsStateVersion=me,X.needsLights&&(Ue.ambientLightColor.value=z.state.ambient,Ue.lightProbe.value=z.state.probe,Ue.directionalLights.value=z.state.directional,Ue.directionalLightShadows.value=z.state.directionalShadow,Ue.spotLights.value=z.state.spot,Ue.spotLightShadows.value=z.state.spotShadow,Ue.rectAreaLights.value=z.state.rectArea,Ue.ltc_1.value=z.state.rectAreaLTC1,Ue.ltc_2.value=z.state.rectAreaLTC2,Ue.pointLights.value=z.state.point,Ue.pointLightShadows.value=z.state.pointShadow,Ue.hemisphereLights.value=z.state.hemi,Ue.directionalShadowMap.value=z.state.directionalShadowMap,Ue.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ue.spotShadowMap.value=z.state.spotShadowMap,Ue.spotLightMatrix.value=z.state.spotLightMatrix,Ue.spotLightMap.value=z.state.spotLightMap,Ue.pointShadowMap.value=z.state.pointShadowMap,Ue.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=We,X.uniformsList=null,We}function Lu(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=Er.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Du(w,k){let W=xe.get(w);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function mm(w,k,W,X,z){k.isScene!==!0&&(k=Te),Je.resetTextureUnits();let oe=k.fog,me=X.isMeshStandardMaterial?k.environment:null,Ee=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ms,ve=(X.isMeshStandardMaterial?Ot:qt).get(X.envMap||me),Ve=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!W.morphAttributes.position,lt=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color,Gt=Ii;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Gt=x.toneMapping);let Ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,At=Ut!==void 0?Ut.length:0,ke=xe.get(X),Bt=f.state.lights;if(Ze===!0&&(Z===!0||w!==M)){let _n=w===M&&X.id===y;le.setState(X,w,_n)}let pt=!1;X.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Bt.state.version||ke.outputColorSpace!==Ee||z.isBatchedMesh&&ke.batching===!1||!z.isBatchedMesh&&ke.batching===!0||z.isBatchedMesh&&ke.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ke.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ke.instancing===!1||!z.isInstancedMesh&&ke.instancing===!0||z.isSkinnedMesh&&ke.skinning===!1||!z.isSkinnedMesh&&ke.skinning===!0||z.isInstancedMesh&&ke.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ke.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ke.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ke.instancingMorph===!1&&z.morphTexture!==null||ke.envMap!==ve||X.fog===!0&&ke.fog!==oe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==We||ke.morphTargets!==Ue||ke.morphNormals!==lt||ke.morphColors!==Tt||ke.toneMapping!==Gt||ke.morphTargetsCount!==At)&&(pt=!0):(pt=!0,ke.__version=X.version);let Rn=ke.currentProgram;pt===!0&&(Rn=Jo(X,k,z));let Hs=!1,Cn=!1,kr=!1,kt=Rn.getUniforms(),On=ke.uniforms;if(ye.useProgram(Rn.program)&&(Hs=!0,Cn=!0,kr=!0),X.id!==y&&(y=X.id,Cn=!0),Hs||M!==w){ye.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),kt.setValue(P,"projectionMatrix",w.projectionMatrix),kt.setValue(P,"viewMatrix",w.matrixWorldInverse);let bn=kt.map.cameraPosition;bn!==void 0&&bn.setValue(P,ge.setFromMatrixPosition(w.matrixWorld)),Ne.logarithmicDepthBuffer&&kt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&kt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Cn=!0,kr=!0)}if(z.isSkinnedMesh){kt.setOptional(P,z,"bindMatrix"),kt.setOptional(P,z,"bindMatrixInverse");let _n=z.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),kt.setValue(P,"boneTexture",_n.boneTexture,Je))}z.isBatchedMesh&&(kt.setOptional(P,z,"batchingTexture"),kt.setValue(P,"batchingTexture",z._matricesTexture,Je),kt.setOptional(P,z,"batchingIdTexture"),kt.setValue(P,"batchingIdTexture",z._indirectTexture,Je),kt.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&kt.setValue(P,"batchingColorTexture",z._colorsTexture,Je));let Bn=W.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&se.update(z,W,Rn),(Cn||ke.receiveShadow!==z.receiveShadow)&&(ke.receiveShadow=z.receiveShadow,kt.setValue(P,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(On.envMap.value=ve,On.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(On.envMapIntensity.value=k.environmentIntensity),Cn&&(kt.setValue(P,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&gm(On,kr),oe&&X.fog===!0&&ee.refreshFogUniforms(On,oe),ee.refreshMaterialUniforms(On,X,H,V,f.state.transmissionRenderTarget[w.id]),Er.upload(P,Lu(ke),On,Je)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Er.upload(P,Lu(ke),On,Je),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&kt.setValue(P,"center",z.center),kt.setValue(P,"modelViewMatrix",z.modelViewMatrix),kt.setValue(P,"normalMatrix",z.normalMatrix),kt.setValue(P,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let _n=X.uniformsGroups;for(let bn=0,yl=_n.length;bn<yl;bn++){let rs=_n[bn];et.update(rs,Rn),et.bind(rs,Rn)}}return Rn}function gm(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function _m(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,k,W){let X=xe.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),xe.get(w.texture).__webglTexture=k,xe.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let W=xe.get(w);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};let xm=P.createFramebuffer();this.setRenderTarget=function(w,k=0,W=0){R=w,b=k,A=W;let X=!0,z=null,oe=!1,me=!1;if(w){let ve=xe.get(w);if(ve.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(ve.__webglFramebuffer===void 0)Je.setupRenderTarget(w);else if(ve.__hasExternalTextures)Je.rebindTextures(w,xe.get(w.texture).__webglTexture,xe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ue=w.depthTexture;if(ve.__boundDepthTexture!==Ue){if(Ue!==null&&xe.has(Ue)&&(w.width!==Ue.image.width||w.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(w)}}let Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(me=!0);let We=xe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[k])?z=We[k][W]:z=We[k],oe=!0):w.samples>0&&Je.useMultisampledRTT(w)===!1?z=xe.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?z=We[W]:z=We,C.copy(w.viewport),D.copy(w.scissor),L=w.scissorTest}else C.copy(ae).multiplyScalar(H).floor(),D.copy(_e).multiplyScalar(H).floor(),L=Oe;if(W!==0&&(z=xm),ye.bindFramebuffer(P.FRAMEBUFFER,z)&&X&&ye.drawBuffers(w,z),ye.viewport(C),ye.scissor(D),ye.setScissorTest(L),oe){let ve=xe.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,ve.__webglTexture,W)}else if(me){let ve=k;for(let Ve=0;Ve<w.textures.length;Ve++){let We=xe.get(w.textures[Ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ve,We.__webglTexture,W,ve)}}else if(w!==null&&W!==0){let ve=xe.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ve.__webglTexture,W)}y=-1},this.readRenderTargetPixels=function(w,k,W,X,z,oe,me,Ee=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(ve=ve[me]),ve){ye.bindFramebuffer(P.FRAMEBUFFER,ve);try{let Ve=w.textures[Ee],We=Ve.format,Ue=Ve.type;if(!Ne.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-X&&W>=0&&W<=w.height-z&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee),P.readPixels(k,W,X,z,Ae.convert(We),Ae.convert(Ue),oe))}finally{let Ve=R!==null?xe.get(R).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(w,k,W,X,z,oe,me,Ee=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(ve=ve[me]),ve)if(k>=0&&k<=w.width-X&&W>=0&&W<=w.height-z){ye.bindFramebuffer(P.FRAMEBUFFER,ve);let Ve=w.textures[Ee],We=Ve.format,Ue=Ve.type;if(!Ne.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,lt),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee),P.readPixels(k,W,X,z,Ae.convert(We),Ae.convert(Ue),0);let Tt=R!==null?xe.get(R).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Tt);let Gt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await nf(P,Gt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,lt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(lt),P.deleteSync(Gt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,W=0){let X=Math.pow(2,-W),z=Math.floor(w.image.width*X),oe=Math.floor(w.image.height*X),me=k!==null?k.x:0,Ee=k!==null?k.y:0;Je.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,me,Ee,z,oe),ye.unbindTexture()};let vm=P.createFramebuffer(),ym=P.createFramebuffer();this.copyTextureToTexture=function(w,k,W=null,X=null,z=0,oe=null){oe===null&&(z!==0?(hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=z,z=0):oe=0);let me,Ee,ve,Ve,We,Ue,lt,Tt,Gt,Ut=w.isCompressedTexture?w.mipmaps[oe]:w.image;if(W!==null)me=W.max.x-W.min.x,Ee=W.max.y-W.min.y,ve=W.isBox3?W.max.z-W.min.z:1,Ve=W.min.x,We=W.min.y,Ue=W.isBox3?W.min.z:0;else{let Bn=Math.pow(2,-z);me=Math.floor(Ut.width*Bn),Ee=Math.floor(Ut.height*Bn),w.isDataArrayTexture?ve=Ut.depth:w.isData3DTexture?ve=Math.floor(Ut.depth*Bn):ve=1,Ve=0,We=0,Ue=0}X!==null?(lt=X.x,Tt=X.y,Gt=X.z):(lt=0,Tt=0,Gt=0);let At=Ae.convert(k.format),ke=Ae.convert(k.type),Bt;k.isData3DTexture?(Je.setTexture3D(k,0),Bt=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Je.setTexture2DArray(k,0),Bt=P.TEXTURE_2D_ARRAY):(Je.setTexture2D(k,0),Bt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);let pt=P.getParameter(P.UNPACK_ROW_LENGTH),Rn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Hs=P.getParameter(P.UNPACK_SKIP_PIXELS),Cn=P.getParameter(P.UNPACK_SKIP_ROWS),kr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ut.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ut.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,We),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ue);let kt=w.isDataArrayTexture||w.isData3DTexture,On=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let Bn=xe.get(w),_n=xe.get(k),bn=xe.get(Bn.__renderTarget),yl=xe.get(_n.__renderTarget);ye.bindFramebuffer(P.READ_FRAMEBUFFER,bn.__webglFramebuffer),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,yl.__webglFramebuffer);for(let rs=0;rs<ve;rs++)kt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(w).__webglTexture,z,Ue+rs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(k).__webglTexture,oe,Gt+rs)),P.blitFramebuffer(Ve,We,me,Ee,lt,Tt,me,Ee,P.DEPTH_BUFFER_BIT,P.NEAREST);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||xe.has(w)){let Bn=xe.get(w),_n=xe.get(k);ye.bindFramebuffer(P.READ_FRAMEBUFFER,vm),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,ym);for(let bn=0;bn<ve;bn++)kt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Bn.__webglTexture,z,Ue+bn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Bn.__webglTexture,z),On?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_n.__webglTexture,oe,Gt+bn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_n.__webglTexture,oe),z!==0?P.blitFramebuffer(Ve,We,me,Ee,lt,Tt,me,Ee,P.COLOR_BUFFER_BIT,P.NEAREST):On?P.copyTexSubImage3D(Bt,oe,lt,Tt,Gt+bn,Ve,We,me,Ee):P.copyTexSubImage2D(Bt,oe,lt,Tt,Ve,We,me,Ee);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else On?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Bt,oe,lt,Tt,Gt,me,Ee,ve,At,ke,Ut.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Bt,oe,lt,Tt,Gt,me,Ee,ve,At,Ut.data):P.texSubImage3D(Bt,oe,lt,Tt,Gt,me,Ee,ve,At,ke,Ut):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,oe,lt,Tt,me,Ee,At,ke,Ut.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,oe,lt,Tt,Ut.width,Ut.height,At,Ut.data):P.texSubImage2D(P.TEXTURE_2D,oe,lt,Tt,me,Ee,At,ke,Ut);P.pixelStorei(P.UNPACK_ROW_LENGTH,pt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Hs),P.pixelStorei(P.UNPACK_SKIP_ROWS,Cn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,kr),oe===0&&k.generateMipmaps&&P.generateMipmap(Bt),ye.unbindTexture()},this.initRenderTarget=function(w){xe.get(w).__webglFramebuffer===void 0&&Je.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Je.setTextureCube(w,0):w.isData3DTexture?Je.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Je.setTexture2DArray(w,0):Je.setTexture2D(w,0),ye.unbindTexture()},this.resetState=function(){b=0,A=0,R=null,ye.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}});function Fe(n,e,t){let i=Qe((t-n)/(e-n),0,1);return i*i*(3-2*i)}function Nf(n,e,t,i){if(n>=he+80)return t;let[s,r,o,a]=Lo[e],c=Math.max(0,n-he),l=c<8?c*c/16:c-4,h=i?$t((r-s)/2,(a-o)/2,Fe(0,38,c)):$t((s+r)/2,(o+a)/2,l/26);return $t(h,t,Fe(he+24,he+80,n))}function cv(n){return n>=he&&n<qe}function Nt(n,e){return cv(n)&&Ct.includes(e)?e:"shared"}function Of(n){return n<qc?"gorge":n>Yc?"marsh":"canal"}function hn(n){if(!te.valley)return 5*Math.sin(n*.01)+3*Math.sin(n*.024);let[e,t,i,s]=te.valley;return e*wr(n,t)+i*wr(n,s)}function ot(n,e=0){return{x:hn(n)+e,z:-n}}function Bf(n,e,t){let[i,s,r,o,a]=te.lanes[e],[c,l]=Lo[e],h=Qe((n-he)/(qe-he),0,1),u=Fe(he,he+te.opening[0],n)*(1-Fe(qe-te.opening[1],qe,n)),d=t?$t((l-c)/2,7.2,h):$t((c+l)/2,e==="gorge"?-14.4:e==="marsh"?14.4:0,h),p=t?a*(1+.09*wr(n,r*.76,o)):i+s*wr(n,r,o)+s*.24*wr(n,r*.57,-o);return $t(d,p,u)}function kf(n){return Fe(he,he+95,n)*(1-Fe(qe-117,qe,n))}function st(n,e){if(te.lanes)return te.lanes[e]?Bf(n,e,!1):0;let t=kf(n),i;if(e==="gorge")i=$t(-14.4,-65+11*Math.sin(n*.025)+5*Math.sin(n*.048),t);else if(e==="canal")i=t*(4.2*Math.sin(n*.01)+1.8*Math.sin(n*.028));else if(e==="marsh")i=$t(14.4,69+12*Math.sin(n*.023+.6)+4*Math.sin(n*.051),t);else return 0;return Nf(n,e,i,!1)}function ze(n,e="shared"){if(te.lanes){let r=st(n,e),o=te.lanes[e]?Bf(n,e,!0):n<=he?$t(11.2,Xc,Fe(-2,he*.71,n)):$t(21.6,te.outlet,Fe(qe,qe+70,n));return{left:r-o,right:r+o,center:r,half:o}}let t=st(n,e),i=kf(n),s;return e==="gorge"?s=$t(7.2,13.9+2.4*Math.sin(n*.035),i):e==="canal"?s=$t(7.2,16.4+1.9*Math.sin(n*.012),i):e==="marsh"?s=$t(7.2,21+4*Math.sin(n*.029),i):s=n<=he?$t(11.2,Xc,Fe(-2,49,n)):$t(21.6,14.8,Fe(qe,qe+70,n)),Lo[e]&&(s=Nf(n,e,s,!0)),{left:t-s,right:t+s,center:t,half:s}}function jt(n,e="shared"){return Math.atan((hn(n+.25)+st(n+.25,e)-hn(n-.25)-st(n-.25,e))*2)}function Wc(n,e){let t=0;for(let[i,s,r]of e)t+=r*Fe(i,s,n);return t}function He(n,e="shared"){if(ui){let r=Qe(n-he,0,qe-he),o=ui.drop*r/(qe-he);return n>he&&n<qe&&Ff[e]&&(o=ui.drop*Wc(n,ui[e])/Ff[e]),-ui.head*Math.min(n,he)-ui.grade*r-o-Wc(n,ui.shared)-ui.tail*Math.max(0,n-qe)}let t=-.042*Math.min(n,he);if(n<=he){let r=Math.min(he+25,he-n);return t+.001*r*r}let i=Qe((n-he)/(qe-he),0,1),s=160;return n<qe&&(e==="gorge"?s=Wc(n,lv):e==="marsh"?s=112*i*Fe(he+6,he+49,n)+Wc(n,hv):s=122*i+13*Fe(278,332,n)+9*Fe(602,646,n)+9*Fe(899,947,n)+7*Fe(1187,1237,n)),t-.023*i*(qe-he)-s-11*Fe(qe+10,qe+82,n)-.018*Math.max(0,n-qe)}function Ar(n,e){return(He(n-.25,e)-He(n+.25,e))*2}function Zc(n,e){return Hn[Nt(n,e)]}function ni(n,e){let t=Qe((e-n.start)/(n.end-n.start),0,1);return n.rise*t*(.62+.38*t)}function Rr(n,e,t="shared"){for(let i of uv[t]||[]){if(n<i.start||n>i.end+3)continue;let s=e-st(n,t)-i.offset;return ni(i,n)*(1-Fe(i.width*.43,i.width*.64,Math.abs(s)))*(1-Fe(i.end,i.end+3,n))}return 0}function Vn(n,e){for(let[t,i,s,r]of Jc[e]||[]){if(n<t||n>i)continue;let o=(n-t)/(i-t),a=Math.sqrt(Math.max(0,1-(o*2-1)**2)),c=r*a*(e==="shared"?.68+.69*o:1+.085*Math.sin(o*8)),l=e==="shared"?Math.sign(s)*(.95*o-.24)+.16*Math.sin(o*5):.42*Math.sin(o*5),h=st(n,e)+s+l;return{left:h-c,right:h+c,mid:h,radius:c}}return null}function ws(n,e){let t=e==="gorge",i=e==="marsh",s=Fe(t?-5:i?2:0,he,n),[r,o]=Lo[e],a=t?-1.45:i?1.15:0,c=t?-.45:i?.6:0,l=t?-1:i?.66:.44;return $t(a,(r+o)/2+c,s)+l*Math.sin(Math.PI*s)}function Rs(n,e){if(e==="shared"&&n<=he)return ws(n,"canal");let t;if(te.lanes){let i=te.lanes[e];t=(i?.[4]??te.outlet)*(te.id==="delta"?.36:.24)*wr(n,i?.[2]??280,i?.[3]??0);for(let[r,o,a,c]of Jc[e]){if(n<r-35||n>o+35)continue;let l=Fe(r-35,r,n)*(1-Fe(o,o+35,n));t=$t(t,a-Math.sign(a)*(c+3.7),l)}}else if(e==="marsh"){let i=dv,s=i[0][1];for(let r=1;r<i.length;r++){if(n<=i[r][0]){s=$t(s,i[r][1],Fe(i[r-1][0],i[r][0],n));break}s=i[r][1]}t=s}else t=e==="gorge"?4*Math.sin(n*.025-1.2):e==="canal"?3*Math.sin(n*.017+.3):2.8*Math.sin(n*.027);return Lo[e]&&n<he+41&&(t=$t(e==="gorge"?-.45:e==="marsh"?.6:0,t,Fe(he,he+41,n))),st(n,e)+t}function As(n,e){let t=ws(n,e<0?"gorge":"marsh"),i=ws(n,"canal"),s=e<0?qc:Yc;return $t((t+i)/2,s,Fe(43,he,n))}function Kc(n,e,t="shared"){let i=ze(n,t),s=Vn(n,t),r=Math.min(e-i.left,i.right-e,s?Math.max(s.left-e,e-s.right):1/0),o=t==="shared"&&n>=0&&n<=he,a=Math.abs(e-Rs(n,t));o&&(a=Math.min(a,Math.abs(e-ws(n,"gorge")),Math.abs(e-ws(n,"marsh"))));let c=te.flow?.width,l=(1-Fe(c??(t==="marsh"?1.8:1.5),c?c+2.8:t==="marsh"?4.5:4.1,a))*Fe(4,17,n),h=1-Fe(.7,t==="marsh"?3.9:2.1,r);if(o){let u=Math.min(Math.abs(e-As(n,-1)),Math.abs(e-As(n,1)));h=Math.max(h,.66*Fe(24,65,n)*(1-Fe(.3,1.55,u)))}return t==="marsh"&&(h=Math.max(h,(1-l)*(.17+.19*Math.sin(n*.033)**2))),{current:l,shallow:h}}var wt,he,qe,Qe,$t,Xc,qc,Yc,Lo,wr,lv,hv,ui,Ff,Hn,uv,Jc,dv,Xt=mt(()=>{en();({length:wt,fork:he,merge:qe}=te),Qe=(n,e,t)=>Math.max(e,Math.min(t,n));$t=(n,e,t)=>n+(e-n)*t,Xc=19.8,qc=-4.8,Yc=5.1,Lo={gorge:[-Xc,qc,-30.5,-12.3],canal:[qc,Yc,-5.8,6.1],marsh:[Yc,Xc,12.65,31.75]};wr=(n,e,t=0)=>Math.sin(n*2*Math.PI/e+t);lv=[[88,152,18],[159,225,20],[311,371,17],[479,545,19],[642,713,19],[832,894,21],[1001,1073,27],[1196,1261,19]],hv=[[147,220,12],[450,510,9],[680,740,7],[918,981,11],[1138,1223,9]];ui=te.elevation,Ff=ui&&Object.fromEntries(Ct.map(n=>[n,ui[n].reduce((e,t)=>e+t[2],0)]));Hn=te.features||{shared:[$e(1345,1354,-4.4,5.3,1.12,"\uACB0\uC2B9 \uBC1C\uD310"),Ie(1365,1.7,6.5,"\uD569\uB958 \uAC00\uC18D\uBB38")],gorge:[gt(106,115,-3.1,6.1,1.05,"\uCCAB \uBC14\uC704\uD131"),gt(219,228,3.8,5.7,1.28,"\uC30D\uBC14\uC704 \uC5EC\uC6B8"),gt(325,335,-4,6.3,1.5,"\uCE35\uACC4 \uD3ED\uD3EC"),gt(500,510,3.1,6.2,1.36,"\uC801\uBCBD \uB099\uCC28"),gt(661,672,-3.6,6.5,1.68,"\uC774\uB07C \uD3ED\uD3EC"),gt(849,860,4.1,6.4,1.6,"\uB3CC\uAE30\uB465 \uC5EC\uC6B8"),gt(1017,1029,-4.8,6.3,1.86,"\uBD89\uC740 \uC808\uBCBD"),gt(1214,1225,2.4,6.7,1.7,"\uB9C8\uC9C0\uB9C9 \uD3ED\uD3EC")],canal:[Ie(109,0,5.8,"\uCCAB \uC218\uBB38"),Ie(174,-4.3,5.5,"\uC11C\uCABD \uAC11\uBB38"),$e(216,228,4.4,5.8,1.68,"\uC801\uC0C9 \uB3C4\uC57D\uB300",3.5),Ie(313,4.9,5.7,"\uCCA0\uAD50 \uC218\uBB38"),Ie(393,-5,5.6,"\uC774\uC911 \uC218\uBB38"),$e(446,459,-4.3,6,1.92,"\uBB3C\uB118\uC774 \uC810\uD504\uB300",3.6),Ie(543,4.5,5.7,"\uD38C\uD504\uC7A5 \uC218\uBB38"),$e(631,645,3.5,6.2,2.12,"\uC7A5\uAC70\uB9AC \uC810\uD504\uB300",3.8),Ie(733,-3.8,6,"\uD558\uB958 \uAC11\uBB38"),$e(825,836,5,5.7,1.1,"\uCDE8\uC218\uD0D1 \uB098\uBB34 \uBC1C\uD310"),$e(911,925,-4.7,6.3,2.12,"\uAC11\uBB38 \uB3C4\uC57D\uB300",3.4),Ie(1013,4,5.4,"\uB3D9\uCABD \uC218\uBB38"),Ie(1104,-4.1,6,"\uCCA0\uC81C \uAC11\uBB38"),$e(1180,1195,-2.4,6.1,2.2,"\uC0C1\uAC11\uD310 \uB3C4\uC57D\uB300",3.7),Ie(1270,3.3,6,"\uC6B4\uD558 \uCD9C\uAD6C")],marsh:[$e(157,166,5.2,4.8,.82,"\uBC84\uB4DC\uB098\uBB34 \uBC1C\uD310"),$e(358,367,-6.8,4.8,.98,"\uD1B5\uB098\uBB34 \uBC1C\uD310"),$e(563,572,5.4,5.1,1.05,"\uB098\uB8E8 \uBC1C\uD310"),$e(746,755,-5.8,5.2,1.08,"\uC595\uC740 \uB098\uB8E8"),$e(958,968,5.7,5.2,1.15,"\uC218\uB828\uC12C \uBC1C\uD310"),$e(1200,1212,-6.2,5.4,1.2,"\uAC08\uB300 \uB05D \uBC1C\uD310")]};uv=Object.fromEntries(Object.entries(Hn).map(([n,e])=>[n,e.filter(t=>t.kind==="ledge")]));Jc=te.bars||{shared:[[53,63.5,-4.25,1.55],[64,71.8,4.9,1.65]],gorge:[[148,176,7.2,3.5],[266,299,-7.1,4],[392,429,6.9,4],[548,583,-7.5,4.3],[720,757,6.4,4.1],[899,936,6.1,4.8],[1081,1121,-6.6,4.8],[1239,1284,7.3,4.7]],canal:[[231,252,5.3,2.4],[462,482,-5.5,2.8],[649,670,4.8,3],[929,949,-4.9,2.8],[1198,1220,-2.7,3.1]],marsh:[[100,147,-.4,2.7],[210,271,2.7,5.4],[298,348,-3,4.8],[401,470,1.8,6],[500,556,-2.9,5.8],[608,677,3.8,6.3],[698,741,-.5,4.7],[776,815,1.3,3.9],[851,922,1.4,6],[991,1058,-2.6,6.7],[1093,1163,2.3,5.4],[1231,1281,1.9,4.8]]};dv=[[72,3.2],[120,5.3],[160,5.2],[201,-4.7],[260,-5.2],[310,4.1],[347,4.9],[365,-6.8],[406,-7.4],[470,-6.4],[514,5.9],[571,5.4],[618,-5.4],[669,-5.8],[708,6.3],[736,5.6],[756,-5.8],[804,-5.3],[889,-7.8],[954,5.7],[1037,7.3],[1084,-5.8],[1151,-6.3],[1209,-6.2],[1261,-5.7],[1320,2]]});function $c(n,e){return{offset:n.offset+n.reach*Math.sin(e*.58+n.phase),angle:.2*Math.sin(e*.83+n.phase+.4)}}function Wh(n,e,t){let i=n.end-n.s,s=Qe((e-n.s)/i,0,1);return n.side*Math.min(6.8,ze(e,t).half*.5)*(1-.7*s)}function Hf(n,e,t,i){if(!$i)return null;for(let s of $i[t]){if(s.s>n)break;if(s.end===void 0||n<s.s||n>s.end)continue;let r=mv(s,n);if(s.kind==="wind")return{kind:s.kind,drift:s.dir*pv*r,strength:r};let o=s.kind==="outlet"?Wh(s,n,t):s.offset,a=Math.abs(e-st(n,t)-o),c=s.kind==="outlet"?3.5:s.width/2,l=1-Fe(c-.65,c+.45,a),h=r*l*(s.kind==="outlet"?Gh(s,i):1);if(h>.001)return{kind:s.kind,drift:0,strength:h}}return null}function Vf(n,e,t){return $i?.[e].find(i=>i.s>=n&&i.s-n<=t)}function gv(n,e,t,i,s,r,o,a,c,l,h,u,d,p){let m=0,_=1,g=[[n-o+d,i-c+d],[a+d-n,l+d-i],[e+h+p,s+h+p],[h+p-e,h+p-s],[u-t,u-r]];for(let[f,v]of g)if(f<0&&v<0||(f<0?m=Math.max(m,f/(f-v)):v<0&&(_=Math.min(_,f/(f-v))),m>_))return null;return _<=1e-6?null:m}function _v(n,e,t,i,s,r,o,a){let c=e.kind==="log",l=ot(e.s,st(e.s,t)),h=He(e.s,t),u=n.elapsed-a,d=n.elapsed,p=c?$c(e,u):null,m=c?$c(e,d):null,_=c?(p.angle+m.angle)*.5:0,g=Math.cos(_),f=Math.sin(_),v=(N,B,O)=>{let V=ot(N,B).x-l.x-O,H=N-e.s;return[V*g+H*f,-V*f+H*g]},[S,x]=v(i,s,c?p.offset:0),[T,b]=v(n.s,n.u,c?m.offset:0),A=n.level>=8?.6:.49,R=n.level<=3?.91:1.48,y=c?ji:Ps,M=c?.8:zf,C=c?0:Do(e,u),D=c?0:Do(e,d),L=c?[[-Di,Di,-Di,Di]]:[[e.offset-Cs,C-Is/2,e.offset-Cs,D-Is/2],[C+Is/2,e.offset+Cs,D+Is/2,e.offset+Cs]];for(let[N,B,O,V]of L){let H=gv(S,x,r-h,T,b,o-h,N,B,O,V,y,M,A,R);if(H===null)continue;let j=S+(T-S)*H;n.contactReach!==e&&(n.reachSide=Math.abs(n.steering)>.22?Math.sign(n.steering):j<(O+V)*.5?-1:1,n.speed*=c?.62:.58,n.hitKind=e.kind,n.hitTime=.72,n.hits++);let ae=(Math.abs(n.steering)>.36?Math.sign(n.steering):n.reachSide)*Math.max(Math.abs(T-S),.6*Math.abs(b-x))*(1-H),_e=j+ae,Oe;S<N-A-.001?(_e=Math.min(_e,O-A-.002),Oe=b):S>B+A+.001?(_e=Math.max(_e,V+A+.002),Oe=b):Oe=x>0?Math.max(b,y+R+.002):Math.min(b,-y-R-.002);let Ye=l.x+(c?m.offset:0)+_e*g-Oe*f;return n.s=e.s+_e*f+Oe*g,n.u=Ye-ot(n.s).x,n.contactReach=e,n.lastReach=e,!0}return!1}function Gf(n,e,t,i,s,r,o){if(!$i)return null;let a=Math.min(e,n.s)-4,c=Math.max(e,n.s)+4;for(let l of $i[i]){if(l.s>c)break;if(l.end!==void 0||l.s<a)continue;if(l.kind!=="charge"&&_v(n,l,i,e,t,s,r,o))return l.kind;if(l.kind==="log"||e>=l.s||n.s<l.s||n.lastReach===l)continue;let h=(l.s-e)/(n.s-e),u=ot(e,t).x*(1-h)+ot(n.s,n.u).x*h-ot(l.s,st(l.s,i)).x,d=s+(r-s)*h-He(l.s,i);if(l.kind==="charge"){if(Math.abs(u-l.offset)>l.width/2+.48||d>2.8)continue;n.battery=Math.min(1,n.battery+fv),n.chargeTime=1.15,n.stoppedFor=0}else{let p=n.level>=8?.6:.49;if(d>zf||Math.abs(u-Do(l,n.elapsed-o*(1-h)))>Is/2-p)continue;n.jetEntry={kind:"gate",speed:n.speed},n.speed+=2.8,n.jetTime=1.25,n.pads++}return n.lastReach=l,l.kind}return null}var Di,ji,Cs,Is,Ps,zf,fv,$i,jc,Do,pv,mv,Gh,Qc=mt(()=>{en();Xt();Di=2.85,ji=.46,Cs=9.4,Is=3.7,Ps=.62,zf=1.45,fv=.045,$i=te.reaches,jc={log:"\uBD80\uC720\uBAA9",wind:"\uD6A1\uB958",outlet:"\uD130\uBE48 \uBC29\uB958",ice:"\uBE59\uD310",charge:"\uCDA9\uC804 \uACE0\uB9AC",lock:"\uC774\uB3D9 \uAC11\uBB38"};Do=(n,e)=>n.offset+4*Math.sin(e*.69+n.phase),pv=3.15,mv=(n,e)=>Fe(n.s,n.s+7,e)*(1-Fe(n.end-7,n.end,e)),Gh=(n,e)=>Fe(.08,.84,(1+Math.sin(e*1.04+n.phase))*.5)});function qh(n,e){return!Ct.includes(e)||n.boostCells.includes(e)?!1:(n.boostCells.push(e),n.boostLeft++,!0)}function Wf(n,e,t,i){let s=Ui[n.route];if(!s||n.pickedCell||n.boostCells.includes(s.branch)||Math.min(e,n.s)>s.s+Xh||Math.max(e,n.s)<s.s-Xh)return null;let r=He(n.s,s.branch)+n.altitude,o=s.y-.6,a=s.y+xv,c=r-i;if(Math.min(i,r)>a||Math.max(i,r)<o)return null;let l=0,h=1;if(Math.abs(c)>1e-8){let v=(o-i)/c,S=(a-i)/c;l=Math.max(0,Math.min(v,S)),h=Math.min(1,Math.max(v,S))}let u=ot(e,t).x,d=u-s.x,p=e-s.s,m=ot(n.s,n.u).x-u,_=n.s-e,g=m*m+_*_,f=g>1e-8?Qe(-(d*m+p*_)/g,l,h):l;return Math.hypot(d+f*m,p+f*_)>Xh?null:(qh(n,s.branch),n.pickedCell=s.branch,n.pickupTime=1.8,s.branch)}var Xh,xv,Ui,Uo=mt(()=>{en();Xt();Xh=1.65,xv=2.1,Ui=Object.fromEntries(Ct.map(n=>{let e=te.cellStations[n],t=Rs(e,n);return[n,{branch:n,s:e,u:t,...ot(e,t),y:He(e,n)}]}))});function el(n){return Math.min(n*.7,6.4+n*.255)}function vv(n,e,t){if(!e)return n.keyHold=0,0;let i=.56,s=e*n.keyHold>0?Math.abs(n.keyHold):0,r=Math.abs(e)*t,o=Qe((s+r*.5)/i,0,1);return n.keyHold=Math.sign(e)*Math.min(i,s+r),e*(.32+.54*o*o*(3-2*o))}function qf(n,e,t,i="analog",s=0){let r=el(n.speed),o=i==="keyboard",a=o||i==="mouse",c=i==="touch";n.smoothSteering=a||c;let l=Qe(e,-1,1);o?l=vv(n,l,t):n.keyHold=0;let h=l*r*(n.flying?.43:1)*(1-.36*s),u=h*n.side<0||Math.abs(h)<Math.abs(n.side),d=h===0?28:u?24:18;a&&(d=h===0?25:u?17:15),c&&(d=h===0?23:u?16:12),n.flying&&(d=8),d*=1-.73*s;let p=n.side-h,m=n.sideAcceleration+d*p,_=Math.exp(-d*t);n.side=h+(p+m*t)*_,n.sideAcceleration=(n.sideAcceleration-d*m*t)*_,n.side=Qe(n.side,-n.speed*.72,n.speed*.72),n.steering=Qe(n.side/Math.max(.1,r),-1,1),n.turnAngle=Math.asin(Qe(n.side/Math.max(.1,n.speed),-.72,.72))}function Yh(n,e,t="touch"){let i=Nt(n.s,n.route);return{route:i,offset:n.u-st(n.s,i),x:e,moved:!1,stroke:0,source:t}}function tl(n,e){let t=Nt(e.s,e.route);if(t!==n.route){let a=t==="shared"?qe:he;n.offset+=st(a,n.route)-st(a,t),n.route=t}let i=ze(e.s,t),s=i.left+di,r=i.right-di,o=Vn(e.s,t);return o&&e.altitude<.7&&(e.u<o.mid?r=Math.min(r,o.left-di):s=Math.max(s,o.right+di)),e.wallSide<0&&(r=Math.min(r,e.u)),e.wallSide>0&&(s=Math.max(s,e.u)),n.offset=Qe(n.offset,s-i.center,r-i.center),i}function Xf(n,e){let t=Math.max(0,n-e),i=t<e?t*t/(2*e):t-e*.5;return n+i*.72}function Zh(n,e,t,i){let s=t-n.x;if(!n.moved){let a=n.source==="mouse"?2:4;if(Math.abs(s)<=a)return;s-=Math.sign(s)*a,n.moved=!0}let r=tl(n,e);if(n.source==="touch"&&s){let a=n.stroke*s>0?Math.abs(n.stroke):0,c=a+Math.abs(s),l=Qe(i*.075,24,56);n.stroke=Math.sign(s)*c,s=Math.sign(s)*(Xf(c,l)-Xf(a,l))}let o=n.source==="mouse"?Qe(i*.7,250,710):Qe(i*.95,300,920);n.offset+=s*Qe(r.half*2,34,48)/o,n.x=t,tl(n,e)}function Yf(n,e){let i=(tl(n,e).center+n.offset-e.u)*Math.cos(jt(e.s,n.route)),s=Math.max(.1,el(e.speed)*(e.flying?.43:1));if(n.source==="touch"){let r=i*5.2-e.side*.55;return .85*Math.tanh(r/(.85*s))}return Qe((i*8.6-e.side*.46)/s,-1,1)}function Zf(n,e){if(!n.moved)return null;let t=tl(n,e),i=e.u-t.center,s=n.source==="touch"?Math.min(.6,el(e.speed)*.047):Math.min(1,el(e.speed)*.075),r=Qe(n.offset-i,-s,s);return Math.abs(r)<.05?null:{route:n.route,offset:i+r,until:e.elapsed+.28,source:n.source}}var di,nl=mt(()=>{Xt();di=.48});function Mv(n,e){let{s:t,wood:i=!1,tip:s,panel:r}=e,o=e.deck??(i?4.8:6.1),a=ze(t,n),c=ot(t,st(t,n)),l=new U(c.x,He(t,n),c.z),h=[],u=[],d=-a.half-1.65,p=a.half+1.65,m=e.side==="right"?s:d,_=e.side==="left"?s:p,g=(m+_)/2,f=_-m;function v(L,N,B,O,V,H,j,ie=0,ae=!0){let _e=Math.cos(ie),Oe=Math.sin(ie),Ye={center:new U(L+l.x,N+l.y,B+l.z),size:[O,V,H],color:j,angle:ie};ae&&(Ye.axes=ie?[new U(_e,Oe,0),new U(-Oe,_e,0),$h]:[Jf,Kf,$h],Ye.half=[O/2,V/2,H/2],u.push(Ye)),h.push(Ye)}function S(L,N,B,O,V,H,j,ie){v((L+B)/2,(N+O)/2,V,Math.hypot(B-L,O-N),H,j,ie,Math.atan2(O-N,B-L))}function x(L,N,B,O){v((L+N)/2,B,O,N-L,.38,.08,"#edb94e",0,!1);let V=Math.max(1,Math.floor((N-L)/1.25));for(let H=0;H<V;H++){let j=L+(H+.5)*(N-L)/V;v(j,B,O+.045,.25,.34,.035,"#383d36",-.44,!1)}}if(e.vault){let L=[[-a.half-4,.6],[-a.half-1.4,10.4],[-a.half*.58,16.8],[-1.1,19],[a.half*.53,17.4],[a.half+1.6,10.6],[a.half+4.2,.5]],N=["#625770","#756981","#6f637c","#827188","#6c637a","#675c71"],B=23;for(let O=0;O<L.length-1;O++){let[V,H]=L[O],[j,ie]=L[O+1];S(V,H,j,ie,0,2.8,B,N[O]);let ae=B*.5+.05;(O===1||O===4)&&S(V*.35+j*.65,H*.35+ie*.65-.38,j,ie-.34,ae,.17,.13,"#a7b6b6")}return{s:t,route:n,start:t-B/2-2,end:t+B/2+2,parts:h,solids:u,name:"\uB3D9\uAD74 \uCC9C\uC7A5",cue:"\uB3D9\uAD74 \uCC9C\uC7A5"}}let T=i?"#8b6e48":"#a95e48",b=o+(e.side?.78:i?1.03:2.7),A=e.side==="right"?[p-.5]:e.side==="left"?[d+.5]:[d+.57,p-.57];for(let L of A)for(let N of[-1.32,1.32])v(L,(o-.38)/2,N,.42,o+.58,.46,i?"#775e46":"#829288");if(v(g,o,0,f,.32,3.18,i?"#af8c5d":"#b4a68e"),i)for(let L=m+.24;L<_;L+=.92)v(L,o+.164,0,.045,.014,3.12,"#846e50",0,!1);for(let L of[-1.52,1.52]){v(g,o-.12,L,f,.38,.34,T),v(g,b,L,f,.17,.19,T);let N=Math.max(3,Math.round(f/(i?2.8:4.8)));for(let B=0;B<=N;B++){let O=m+B*f/N;v(O,(o+b)/2,L,.14,b-o,.16,T),!i&&B<N&&S(O,B%2?o:b,O+f/N,B%2?b:o,L,.18,.18,T)}}if(r){let L=r.side==="right"?r.tip:m,N=r.side==="right"?_:r.tip,B=r.clearance,O=o-.14,V=(L+N)/2;v(V,(B+O)/2,0,N-L,O-B,.88,"#496668");for(let H=L+.45;H<N;H+=2.1)v(H,(B+O)/2,.46,.13,O-B,.12,"#71908b");v(V,B+.24,0,N-L,.48,1.24,"#686746"),x(L,N,B+.24,.66)}else e.marked&&x(m,_,o-.12,1.72);let R=Math.min(...u.map(L=>-L.center.z-L.half[2]))-2,y=Math.max(...u.map(L=>-L.center.z+L.half[2]))+2,M=r?.side??e.side,C=e.name??(i?"\uB098\uBB34\uB2E4\uB9AC":"\uCCA0\uAD50"),D=M?(M==="right"?"\uC624\uB978\uCABD ":"\uC67C\uCABD ")+(r?"\uB0AE\uC740 \uC218\uBB38\uD310":"\uB3CC\uCD9C \uC794\uAD50"):C;return{s:t,route:n,start:R,end:y,parts:h,solids:u,marked:!!e.marked,name:C,cue:D,side:M,approach:e.approach}}function Cv(n,e,t){let i=0,s=t;function r(o){if(o.lengthSq()<1e-10)return!0;let a=0;for(let d=0;d<3;d++)a+=n[d+3]*Math.abs(o.dot(Cr[d]))+e.half[d]*Math.abs(o.dot(e.axes[d]));let c=o.dot($f),l=o.dot(jh);if(Math.abs(l)<1e-9)return Math.abs(c)<=a;let h=(-a-c)/l,u=(a-c)/l;return i=Math.max(i,Math.min(h,u)),s=Math.min(s,Math.max(h,u)),i<=s}for(let o of e.axes)if(!r(o))return null;for(let o of Cr)if(!r(o))return null;for(let o of Cr)for(let a of e.axes)if(!r(Rv.crossVectors(o,a)))return null;return i}function jf(n,e,t,i,s){if(n.altitude<=0&&i<=0)return null;let r=Nt(n.s,n.route),o=Ir[r],a=null;for(let c of o){if(n.s<c.start||e>c.end)continue;let l=ot(e,t),h=ot(n.s,n.u);Jh.set(l.x,He(e,Nt(e,n.route))+i+.072,l.z),jh.set(h.x,He(n.s,r)+n.altitude+.072,h.z).sub(Jh);let u=(n.s+e)/2,d=(n.pitch+s)/2+n.speed*.0023,p=jt(u,r)+n.turnAngle*(n.smoothSteering?.82:1);Fo.setFromEuler(Av.set(d,-p,n.steering*(n.smoothSteering?.73:1)*.15,"YXZ")),Cr[0].copy(Jf).applyQuaternion(Fo),Cr[1].copy(Kf).applyQuaternion(Fo),Cr[2].copy($h).applyQuaternion(Fo);for(let m of wv[n.level-1]){Kh.set(m[0],m[1],m[2]).applyQuaternion(Fo).add(Jh);for(let _ of c.solids){if(Math.abs(Kh.z-_.center.z)>Math.abs(jh.z)+_.half[2]+2)continue;$f.copy(Kh).sub(_.center);let g=Cv(m,_,a?a.t:1);g!==null&&(!a||g<a.t)&&(a={bridge:c,t:g})}}}return a}function Qf(n){let e=Nt(n.s,n.route),t=Math.max(64,Math.min(115,n.speed*3.6));return Ir[e].find(i=>(i.marked||n.flying)&&i.s>n.s&&i.s-n.s<=t)}var yv,Jf,Kf,$h,Ir,Sv,bv,Ev,Tv,wv,Fo,Av,Rv,Cr,Jh,jh,Kh,$f,il=mt(()=>{en();ti();Xt();yv=te.bridges?{...te.bridges,shared:[...te.bridges.shared,{s:wt+5,wood:te.id!=="harbor"}]}:{gorge:[],canal:[{s:156},{s:259,deck:10.85,panel:{side:"right",tip:3.95,clearance:6.85},approach:216,marked:!0,name:"\uC815\uBE44\uAD50"},{s:386},{s:596},{s:845},{s:1084},{s:1255,deck:8.65,marked:!0}],marsh:[{s:187,wood:!0,deck:3.86,side:"right",tip:4.15,approach:157,marked:!0,name:"\uB098\uBB34 \uC794\uAD50"}],shared:[{s:wt+5,wood:!0}]},Jf=new U(1,0,0),Kf=new U(0,1,0),$h=new U(0,0,1);Ir=Object.fromEntries(Object.entries(yv).map(([n,e])=>[n,e.map(t=>Mv(n,t)).sort((t,i)=>t.s-i.s)])),Sv=[[0,.19,-.56,.41,.13,.41],[0,.16,.36,.44,.14,.49],[0,.355,.02,.23,.15,.26]],bv=[[0,.3,-1.11,.25,.12,.27],[0,.26,-.4,.52,.15,.55],[0,.22,.61,.54,.14,.59]],Ev=[0,.535,.08,.3,.145,.37],Tv=[[-.43,.39,1.25,.14,.18,.21],[.43,.39,1.25,.14,.18,.21]],wv=Array.from({length:10},(n,e)=>{let t=e+1,i=t<=3?Sv:[...bv,...t>=5?[Ev]:[],...t>=9?Tv:[]],s=t===10?[1.09,1.06,1.14]:[1,1,1];return i.map(r=>r.map((o,a)=>o*s[a%3]))}),Fo=new wn,Av=new mn,Rv=new U,Cr=[new U,new U,new U],Jh=new U,jh=new U,Kh=new U,$f=new U});function Iv(n){let e=[];function t(o,a,c,l,h,u){e.push({kind:o,s:a,u:c,x:hn(a)+c,base:He(a,n),radius:l,height:h,...u})}for(let o of Hn[n]){if(o.kind==="ledge")continue;let a=o.kind==="gate",c=a?o.start:o.end;for(let l of[-1,1]){let h=st(c,n)+o.offset+l*(o.width/2+(a?Fi.offset:.12));a?t("gate",c,h,Fi.radius,2.635,{side:l,feature:o}):t("flag",c,h,.041,o.rise+1.6,{side:l,feature:o})}}let i=te.markerStep??(n==="canal"?29:36),s=n==="shared"?qe:he+18,r=n==="shared"?wt+192:qe;for(let o=Math.ceil(s/i)*i;o<r;o+=i){let a=o/i%2?1:-1,c=n==="marsh",l=c?Rs(o,n)+a*3.2:st(o,n)+a*(n==="gorge"?5.8:6.8),h=Vn(o,n),u=te.lanes?2.6:.48;h&&l>h.left-u&&l<h.right+u||(c?t("stake",o,l,.064,1.58):t("buoy",o,l,.32*.83,.72*.83))}for(let o of rl[n]||[])for(let a of[o.s+.3,o.s+o.length-1])for(let c of[-1,1])t("pile",a,o.u+c*(o.width*.5-.13),.115,1.25);if(n==="shared")for(let o of[-1.23,1.23])t("launch",.3,o,.12,.84);if(n==="canal"&&(!te.lanes||te.id==="harbor"))for(let o=Math.ceil((he+23)/12)*12;o<qe;o+=12){let a=ze(o,n);t("quay",o,a.left-.22,.12,1.5),t("quay",o,a.right+.22,.12,1.5)}return e.sort((o,a)=>o.s-a.s)}var Fi,sl,rl,ol,al=mt(()=>{en();Xt();Fi={offset:.33,radius:.47,top:.625},sl=.34,rl={shared:[{s:-5.5,u:7,length:10.5,width:3.5}],marsh:(te.docks??[172,380,584,768,980,1220]).map(n=>({s:n,u:ze(n,"marsh").right-1.05,length:7.5,width:1.94}))};ol=Object.fromEntries(Object.keys(Hn).map(n=>[n,Iv(n)]))});function Dn(n){return()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296)}var cl=mt(()=>{});function Fv(n){let e=[];for(let t of Hn[n]){if(t.kind!=="ledge")continue;let i=Dn(te.seed+t.start*9319);for(let s of[-1,1])for(let r=-Qh;r<=6;r++){let o=t.start+(r<0?r*Pv:(t.end-t.start)*r/6),a=r<0?-r/Qh:0,c=jt(o,n),l=Math.cos(c),h=Math.sin(c),u=.76+.23*i()+a*.12,d=1.3+.19*i(),p=ze(o,n),m=p.center+t.offset+s*(t.width/2+u+.2+i()*.16+a*.95),_=Qe(m,p.left+u*.45,p.right-u*.45),g=hn(o)+_,f=He(o,n),v=.85+i()*.31+ni(t,o)*.48+(r===-Qh?.43:0),S=[[-.75,.87],[.1,1],[v*.66,.87],[v,.5+i()*.1]],x=S.map(([b,A])=>Lv.map(([R,y])=>{let M=R*u*A,C=y*d*A;return[g+M*l+C*h,f+b,-o+M*h-C*l]})),T=Dv.map(([b,A])=>{let R=b/u*l+A/d*h,y=-b/u*h+A/d*l,M=1/Math.hypot(R,y);return{nx:R*M,ns:y*M,d:Uv*M}});e.push({kind:"rock",s:o,u:_,x:g,base:f,rx:u,rs:d,cos:l,sin:h,height:v,count:Pr,rings:S,vertices:x,planes:T,feature:t,side:s,color:ep[Math.floor(i()*ep.length)]})}}return e.sort((t,i)=>t.s-i.s)}var Qh,Pv,eu,ep,tp,Pr,np,Lv,Dv,Uv,ll,tu=mt(()=>{en();Xt();cl();Qh=5,Pv=2.4,eu=te.id==="basalt",ep=eu?["#52616c","#677580","#5e6b74"]:["#998a77","#ae9b81","#9f9180"],tp=eu?"#acb8b9":"#c7b89d",Pr=eu?6:7,np=Array.from({length:Pr},(n,e)=>2*Math.PI*e/Pr-Math.PI/2),Lv=np.map(n=>[Math.cos(n),Math.sin(n)]),Dv=np.map(n=>[Math.cos(n+Math.PI/Pr),Math.sin(n+Math.PI/Pr)]),Uv=Math.cos(Math.PI/Pr);ll=Object.fromEntries(Object.keys(Hn).map(n=>[n,Fv(n)]))});function ip(n,e,t,i,s,r){let{x:o,s:a,dx:c,ds:l,cos:h,sin:u,y0:d,y1:p}=i,m=s+e,_=r+e,g=o-n.x,f=a-n.s,v=(g*h-f*u)/m,S=(g*u+f*h)/_,x=(c*h-l*u)/m,T=(c*u+l*h)/_,b=x*x+T*T;if(b<1e-12||Math.min(d,p)>t)return null;let A=v*x+S*T,R=v*v+S*S-1,y=A*A-b*R;if(y<0)return null;let M=Math.sqrt(y),C=Math.max(0,(-A-M)/b),D=Math.min(1,(-A+M)/b);if(d>t&&(C=Math.max(C,(t-d)/(p-d))),p>t&&(D=Math.min(D,(t-d)/(p-d))),C>D||R>=-1e-6&&C===0&&A>=0)return null;let L=v+x*C,N=S+T*C,B=Math.hypot(L,N);B<1e-8?(L=0,N=-1):(L/=B,N/=B);let O=L/m*h+N/_*u,V=-L/m*u+N/_*h,H=Math.hypot(O,V);return{obstacle:n,t:C,nx:O/H,ns:V/H,x:n.x+L*m*h+N*_*u,s:n.s-L*m*u+N*_*h}}function rp(n,e,t,i,s){return Math.hypot(n.halfWidth*(i*e-s*t),n.halfLength*(i*t+s*e))}function kv(n,e,t){let{x:i,s,dx:r,ds:o,y0:a,y1:c,cos:l,sin:h}=e;if(Math.min(a,c)>n.base+n.height)return null;let u=c-a,d=i-n.x,p=s-n.s,m=a-n.base,_=n.rings,g=null;for(let f=0;f<_.length-1;f++){let[v,S]=_[f],[x,T]=_[f+1];if(Math.max(m,m+u)<v||Math.min(m,m+u)>x)continue;let b=0,A=1;if(Math.abs(u)>1e-9){let N=(v-m)/u,B=(x-m)/u;b=Math.max(0,Math.min(N,B)),A=Math.min(1,Math.max(N,B))}let R=(T-S)/(x-v),y=-1/0,M=0,C=0,D=null;for(let N of n.planes){let{nx:B,ns:O,d:V}=N,H=rp(t,l,h,B,O),j=B*d+O*p-V*(S+R*(m-v))-H,ie=B*r+O*o-V*R*u,ae=j+ie*b;if(ae>y&&(y=ae,M=B,C=O),Math.abs(ie)<1e-9){if(j>0){A=-1;break}}else if(ie<0){let _e=-j/ie;_e>b&&(b=_e,D=N)}else A=Math.min(A,-j/ie);if(b>A)break}if(b>A||g&&g.t<=b||(D&&(M=D.nx,C=D.ns,y=0),b===0&&y>=-2e-5&&r*M+o*C>=0))continue;let L=Math.max(0,-y);g={t:b,nx:M,ns:C,x:i+r*b+M*L,s:s+o*b+C*L}}return g}function nu(n,e){let t=0,i=n.length;for(;t<i;){let s=t+i>>>1;n[s].s<e?t=s+1:i=s}return t}function op(n,e,t,i,s){let{x:r,s:o,dx:a,ds:c}=n,l=o+c,h=Math.min(r,r+a),u=Math.max(r,r+a),d=null;for(let p=nu(t,Math.min(o,l)-hl);p<t.length&&t[p].s<=Math.max(o,l)+hl;p++){let m=t[p];if(m.x<h-hl||m.x>u+hl)continue;let _=m.kind==="gate",g=ip(m,_?.25:m.radius,m.base+m.height,n,e.halfWidth,e.halfLength);if(_){let f=ip(m,m.radius,m.base+Fi.top,n,e.halfWidth,e.halfLength);f&&(!g||f.t<=g.t)&&(g=f)}g&&(!d||g.t<d.t)&&(d=g)}for(let p=nu(i,Math.min(o,l)-Lr);p<i.length&&i[p].s<=Math.max(o,l)+Lr;p++){let m=i[p];if(s&&m.feature===s.feature&&m.side===s.side||m.x<h-Lr||m.x>u+Lr)continue;let _=kv(m,n,e);_&&(!d||_.t<d.t)&&(d={..._,obstacle:m})}return d}function zv(n,e,t,i,s,r){let o=t-n.base,a=n.rings;if(o<a[0][0]||o>n.height)return null;let c=1;for(;o>a[c][0];)c++;let[l,h]=a[c-1],[u,d]=a[c],p=h+(d-h)*(o-l)/(u-l),m=-1/0,_=1/0;for(let{nx:g,ns:f,d:v}of n.planes){let S=rp(i,s.cos,s.sin,g,f),x=v*p+S-f*(e-n.s);if(Math.abs(g)<1e-9){if(x<0)return null}else g>0?_=Math.min(_,x/g):m=Math.max(m,x/g);if(m>_)return null}return n.x+(r<0?m:_)}function Hv(n,e,t,i,s,r){let o=n.obstacle,a=1-n.t,c=e.ds*a*.8,l=e.dx*a,h=e.y0+(e.y1-e.y0)*n.t,u=Math.max(1,Math.ceil(Math.hypot(c,l)/.3)),d=n.x+n.nx*1e-4,p=n.s+n.ns*1e-4,m=h;for(let _=1;_<=u;_++){let g=n.s+c*_/u,f=h+(e.y1-h)*_/u,v=d+l/u;for(let T=nu(s,g-Lr);T<s.length&&s[T].s<=g+Lr;T++){let b=s[T];if(b.feature!==o.feature||b.side!==o.side)continue;let A=zv(b,g,f,t,e,r);A!==null&&(v=r>0?Math.max(v,A+2e-4):Math.min(v,A-2e-4))}let S={x:d,s:p,dx:v-d,ds:g-p,y0:m,y1:f,cos:e.cos,sin:e.sin},x=op(S,t,i,s,o);if(x)return{x:x.x+x.nx*1e-4,s:x.s+x.ns*1e-4};d=v,p=g,m=f}return{x:d,s:p}}function ap(n,e,t,i,s,r,o){let a=hn(e)+t,c=Math.cos(o),l=Math.sin(o),h={x:a,s:e,dx:hn(n.s)+n.u-a,ds:n.s-e,cos:c,sin:l,y0:s,y1:r},u=sp(n.level),d=ol[i],p=ll[i],m=null;for(let _=0;_<4;_++){let g=op(h,u,d,p);if(!g)break;let{nx:f,ns:v,t:S,obstacle:x}=g,T=h.dx*f+h.ds*v,b=-h.dx*v+h.ds*f;if(x.kind==="rock"&&v<-.65&&T<0){let A=(h.x-x.x)*x.cos-(h.s-x.s)*x.sin;b=(Math.abs(n.steering)>.06?Math.sign(n.steering):Math.abs(A)>.02?Math.sign(A):-x.side)*Math.max(Math.abs(b),-T*.45)}else T<0&&Math.abs(b)<-T*.24&&(b=(Math.abs(b)>1e-5?Math.sign(b):Math.sign(n.side)||-Math.sign(x.u-st(x.s,i))||1)*-T*.24);if(!m){let A=Qe(-T/Math.max(1e-5,Math.hypot(h.dx,h.ds)),0,1);m={obstacle:x,normal:f*c-v*l,retain:.83-A*.23}}if(x.kind==="rock"&&h.ds>0){let A=(g.x-x.x)*x.cos-(g.s-x.s)*x.sin,R=f*x.cos-v*x.sin;if(Math.abs(A)>.65*(x.rx+u.halfWidth)&&Math.sign(A)*R>.24){let y=Hv(g,h,u,d,p,Math.sign(A));h.x=y.x,h.s=y.s,h.dx=0,h.ds=0;break}}if(h.x=g.x+f*1e-4,h.s=g.s+v*1e-4,h.y0+=(h.y1-h.y0)*S,h.dx=-v*b*(1-S),h.ds=f*b*(1-S),x.kind==="rock"){let A=Math.max(0,-T)*.18*(1-S);h.dx+=f*A,h.ds+=v*A}_===3&&(h.dx=0,h.ds=0)}return m&&(n.s=h.s+h.ds,n.u=h.x+h.dx-hn(n.s)),m}function cp(n,e,t,i,s,r){if(n.ramp||n.s<=e)return 0;for(let o of Hn[i]){if(o.kind!=="ramp"||n.s<o.start||e>=o.end)continue;let a=n.s-e,c=Math.max(e,o.start),l=Math.min(n.s,o.end),h=hn(e)+t,u=hn(n.s)+n.u,d=y=>hn(y)+st(y,i)+o.offset,p=y=>(y-e)/a,m=y=>h+(u-h)*p(y)-d(y),_=Math.sign(m(c))||Math.sign(m(l))||1,g=sp(n.level),f=jt(l,i),v=jt(e,i)+n.turnAngle-f,S=Math.hypot(g.halfWidth*Math.cos(v),g.halfLength*Math.sin(v)),x=o.width/2+S/Math.cos(f),T=_*m(c)-x,b=_*m(l)-x;if(b>=0)continue;let A=T>0?c+(l-c)*T/(T-b):c,R=y=>ni(o,y)>sl&&He(y,i)+ni(o,y)+.044>s+(r-s)*p(y);if(!(!R(A)&&!R(l))&&!(n.flying&&T<0&&!R(c)))return n.u-=_*b,_}return 0}var Nv,Ov,Bv,sp,hl,Lr,lp=mt(()=>{Xt();al();tu();nl();Nv={halfWidth:di,halfLength:.92},Ov={halfWidth:.54,halfLength:1.42},Bv={halfWidth:.59,halfLength:1.6},sp=n=>n<=3?Nv:n===10?Bv:Ov;hl=2.3,Lr=3.5});function Ls(n){return n.flying?Math.hypot(n.speed,n.vy):n.speed}function Ur(n=1,e=1,t=[]){let i=Yn(e),s=Qe(n,0,1),r=zr(t);return{course:te.id,s:0,u:0,route:"",level:i.level,power:s,speed:i.cruise*(.78+.81*s),steering:0,side:0,sideAcceleration:0,turnAngle:0,keyHold:0,smoothSteering:!1,elapsed:0,battery:1,boostCells:r,boostLeft:r.length,pickedCell:null,pickupTime:0,boostTime:0,stoppedFor:0,chargeTime:0,waterEffect:null,lastReach:null,contactReach:null,reachSide:0,jetTime:0,jetEntry:null,lastFeature:null,current:0,shallow:0,downhill:0,coastAccelerating:!1,coastFrom:null,bestCoast:null,peak:0,ramp:null,flying:!1,altitude:0,vy:0,pitch:0,flightStart:0,landTime:0,jumps:0,longestJump:0,pads:0,hits:0,hitKind:"bank",hitTime:0,touchTime:0,wallSide:0,split:null,crash:null,ended:!1,cleared:!1}}function ru(n){return!n.ended&&n.boostCells.length>0&&n.boostLeft>0&&n.boostTime<=0&&!n.flying}function up(n){if(!ru(n))return!1;let e=Yn(n.level);return n.boostLeft--,n.boostTime=1.3+.37*e.boostScale,n.stoppedFor=0,n.speed+=4.7*e.boostScale,!0}function dp(n,e,t,i){return n.kind==="ledge"?Rr(Math.min(e,n.end),t,i):ni(n,e)}function hp(n,e,t){let i=He(n.s,e);return n.flying?Math.max(i,t):i+(n.ramp?dp(n.ramp,n.s,n.u,e):0)}function Vv(n,e,t,i,s){if(n.flying){let l=n.vy,h=n.altitude,u=He(n.s,e);if(n.vy-=Dr*t,n.altitude=i-u,n.pitch=Qe(Math.atan2(n.vy,Math.max(2,n.speed))*.68,-.31,.4),n.altitude<=0){let d=l-(u-s+h)/t,p=(d+Math.sqrt(d*d+2*Dr*h))/Dr,m=l-Dr*Qe(p,0,t),_=Math.hypot(n.speed,m);return n.altitude=0,n.vy=0,n.pitch=0,n.flying=!1,n.landTime=.48,n.longestJump=Math.max(n.longestJump,n.s-n.flightStart),n.shallow>.6&&(n.speed*=.87),_}return null}if(!n.ramp)return null;let r=n.ramp,o=fp(r,n.s,n.u,e),a=1.38*r.rise/(r.end-r.start);if(n.altitude=dp(r,n.s,n.u,e),n.pitch=Math.atan(a),n.s<r.end&&o)return null;let c=o?a+(r.kind==="ledge"?.095:.068)-n.downhill*.84:0;return n.speed/=Math.hypot(1,c),n.vy=n.speed*c,n.flying=!0,n.flightStart=n.s,n.jumps++,n.ramp=null,null}function fp(n,e,t,i){return Math.abs(t-st(e,i)-n.offset)<=n.width/2+di}function Gv(n,e,t,i,s){if(n.start<e||n.start>i.s||i.s<=e)return!1;let r=(n.start-e)/(i.s-e),o=t+(i.u-t)*r-st(n.start,s)-n.offset,a=n.kind==="gate"?n.width/2+Fi.offset-Fi.radius:n.width/2+di;return Math.abs(o)<=a}function Wv(n,e,t,i){if(!(n.flying||n.ramp))for(let s of Zc(n.s,i)){if(s===n.lastFeature)continue;let r=Gv(s,e,t,n,i);if(!r&&s.kind==="ramp"&&n.s>=s.start&&n.s<s.end&&ni(s,n.s)<=sl&&(r=fp(s,n.s,n.u,i)),!!r){if(n.lastFeature=s,s.kind!=="gate"&&(n.ramp=s),s.kind==="gate"||s.kind==="ramp"){let o=s.kind==="gate"?1.62:s.boosted?1.5:.8;n.jetEntry={kind:s.kind,speed:n.speed,duration:o},n.speed+=s.kind==="gate"?3.65:s.kick,n.jetTime=o,n.pads++}return}}}function iu(n,e,t,i,s){n.side*t<0&&(n.side*=Math.exp(-16*s),n.sideAcceleration*t<0&&(n.sideAcceleration=0)),n.touchTime||(n.speed*=i,n.hitKind=e,n.hitTime=.72,n.hits++),n.touchTime=.35}function pp(n,e,t=Ds,i="analog"){if(n.ended)return;let s=n.s,r=n.u,o=Nt(s,n.route),a=Yn(n.level),c=n.altitude,l=n.pitch,h=n.flying,u=n.vy;n.elapsed+=t;for(let ae of["hitTime","touchTime","boostTime","jetTime","landTime","pickupTime","chargeTime"])n[ae]=Math.max(0,n[ae]-t);let d=Kc(s,n.u,o);n.current=d.current,n.shallow=d.shallow;let p=n.flying||n.ramp?null:Hf(s,n.u,o,n.elapsed);n.waterEffect=p?.kind??null;let m=p?.kind==="ice"?p.strength:0,_=p?.kind==="outlet"?p.strength:0;qf(n,e,t,i,m);let g=jt(s,o),f=Qe(g+n.turnAngle,-1.35,1.35),v=Ar(s,o)*Math.cos(f),S=Math.hypot(1,v),x=9.81*v/S;n.downhill=v;let T=n.speed,b=n.battery<=0;if(n.coastAccelerating=!1,n.flying)n.battery=Math.max(0,n.battery-.47*t/a.endurance);else{let ae=n.ramp?0:d.shallow,_e=d.current,Oe=n.boostTime>0,Ye=n.jetTime>0,Ze=n.ramp?.kind==="ramp",Z=Ye?Ze&&!n.ramp.boosted?n.ramp.kick:6.4:0,Q=te.flow,ge=a.cruise+(Q?.speed??(o==="marsh"?4.75:o==="gorge"?3.1:1.65))*_e-4*ae-.42*Math.abs(n.steering)+Z+4.2*m+6.2*_,De=(o==="canal"?2.75:1.8)+.006*n.speed**2+1.4*ae+.23*Math.abs(n.steering)-(.24+(Q?.assist??0))*_e,Te=Math.max(0,n.speed-6),rt=a.hullDrag*(.24+.0175*Te*Te),bt;if(b){let P=(De+rt)*(1-.66*m);bt=-P*t,n.coastAccelerating=!Oe&&!Ye&&!Ze&&x-P>.12}else{bt=(ge-n.speed)*(1-Math.exp(-(Ye?1.7:.82)*t));let P=Q?.saving??(o==="marsh"?.3:o==="gorge"?.18:.09),ut=(Q?.draw??1)*(1+.12*Math.abs(n.steering)+.45*ae-P*_e)*(Ye?.9:1);n.battery=Math.max(0,n.battery-ut*t/a.endurance)}if(Oe){let P=(ge+6.35*a.boostScale-n.speed)*(1-Math.exp(-1.7*t))-rt*t;bt=Math.max(bt,P)}if(Ye){let P=n.jetEntry.kind==="ramp"?n.jetEntry.duration:1.5,ut=Math.min(1,n.jetTime/P),Be=Qe(10.5-.16*n.speed,3,8.6)*ut*ut;bt=Math.max(bt,(Be-De)*t)}Ze&&(bt=Math.max(bt,-x*t)),n.speed=Math.max(0,n.speed+bt+(x+4.4*_)*t)}n.coastAccelerating?(n.coastFrom??(n.coastFrom=T),(!n.bestCoast||n.speed-n.coastFrom>n.bestCoast.to-n.bestCoast.from)&&(n.bestCoast={from:n.coastFrom,to:n.speed})):n.coastFrom=null;let A=n.speed*t/(n.flying?1:S);n.s+=A*Math.cos(f),n.u+=A*Math.sin(f)-(hn(n.s)-hn(s))+(p?.drift??0)*t,!n.route&&s<he&&n.s>=he&&(n.route=Of(n.u));let R=Nt(n.s,n.route),y=He(s,o)+c,M=y+n.vy*t-.5*Dr*t*t,C=hp(n,R,M),D=.1,L=ap(n,s,r,R,y+D,C+D,f);if(L){L.obstacle.kind==="gate"&&(n.lastFeature=L.obstacle.feature);let ae=L.obstacle.kind;iu(n,ae==="rock"||ae==="buoy"?ae:"post",L.normal,L.retain,t),C=hp(n,R,M)}Wv(n,s,r,R),n.wallSide=cp(n,s,r,R,y+D,C+D),n.wallSide&&iu(n,"ramp",n.wallSide,.69,t);let N=Vv(n,R,t,M,y),B=jf(n,s,r,c,l);if(B&&s+(n.s-s)*B.t<wt){let ae=He(n.s,R)+n.altitude,_e=n.speed,Oe=h?Math.hypot(_e,u-Dr*t*B.t):Ls(n);n.s=s+(n.s-s)*B.t,n.u=r+(n.u-r)*B.t,n.altitude=Math.max(0,y+(ae-y)*B.t-He(n.s,Nt(n.s,n.route))),n.pitch=l+(n.pitch-l)*B.t,n.elapsed-=t*(1-B.t),n.peak=Math.max(n.peak,Oe),n.crash={name:B.bridge.name,station:B.bridge.s,speed:Oe,forwardSpeed:_e},n.ended=!0,n.speed=0,n.vy=0,n.flying=!1,n.ramp=null,n.boostTime=0,n.jetTime=0;return}Gf(n,s,r,R,y,He(n.s,R)+n.altitude,t);let O=ze(n.s,R),V=Vn(n.s,R),H=di,j=Qe(n.u,O.left+H,O.right-H);V&&n.altitude<.7&&j>V.left-H&&j<V.right+H&&(j=n.u<V.mid?V.left-H:V.right+H),Math.abs(j-n.u)>1e-4&&(iu(n,"bank",Math.sign(j-n.u),.69,t),n.u=j);let ie=Wf(n,s,r,y);return n.peak=Math.max(n.peak,N??0,Ls(n)),s<qe&&n.s>=qe&&(n.split={speed:Ls(n),battery:n.battery,time:n.elapsed}),n.s>=wt?(n.s=wt,n.cleared=!0,n.ended=!0):b&&n.speed<.08&&n.speed<=T&&!n.flying&&!n.jetTime&&!n.boostTime?(n.speed=0,n.stoppedFor+=t,(!n.boostLeft||n.stoppedFor>=su-1e-9)&&(n.ended=!0)):n.stoppedFor=0,ie}var Ds,su,Dr,ou=mt(()=>{en();Qc();Uo();$o();nl();il();al();lp();Xt();Xt();Ds=1/60,su=2,Dr=9.8});function mp(n){if(te.id!=="cavern")return()=>{};let e=94,t=new Float32Array(e*3),i=new vt,s=new pn(t,3).setUsage(ys);i.setAttribute("position",s);let r=new pr({color:"#d7eca6",size:.19,transparent:!0,opacity:.9,depthWrite:!1,fog:!0}),o=new lo(i,r);return o.frustumCulled=!1,n.add(o),(a,c,l)=>{for(let h=0;h<e;h++){let d=Math.floor((c.s-10)/1.55)+h,p=d*1.55,m=Nt(p,c.route),_=ze(p,m),g=l?0:a,f=d%2===0?1:-1;if(m==="shared"&&p>=te.fork&&p<te.merge){t[h*3+1]=-1e4;continue}let v=_.center+f*_.half*(.77+.18*Math.sin(d*7.3))+.51*Math.sin(g*.68+d),S=ot(p,v);t[h*3]=S.x,t[h*3+1]=He(p,m)+.9+1.8*(1+Math.sin(d*2.5))+.4*Math.sin(g*.82+d),t[h*3+2]=S.z+.4*Math.cos(d+g*.7)}s.needsUpdate=!0}}var gp=mt(()=>{ti();en();Xt()});function _p(n){if(!$i)return()=>{};let e=new ai(1,1,1),t=new ci(1,1,1,10),i=new vo(1,.105,7,28),s=new mo(1),r=new Map,o=(l,h=!0)=>{let u=l+h;return r.has(u)||r.set(u,h?new Ri({color:l,flatShading:!0}):new Zt({color:l,side:Dt})),r.get(u)},a=(l,h,u,d,p,m,_,g,f)=>{let v=new xt(h,u);return v.position.set(d,p,m),v.scale.set(_,g,f),l.add(v),v},c=[];for(let[l,h]of Object.entries($i))for(let u of h){let d=ot(u.s,st(u.s,l)),p=He(u.s,l),m=new cn;m.position.set(d.x,p,d.z),n.add(m),m.visible=!1;let _=(x,T,b)=>new U(ot(x,st(x,l)+T).x-d.x,He(x,l)+b-p,u.s-x),g=new Map,f=(x,T,b,A,R)=>{g.has(R)||g.set(R,[]),g.get(R).push(x,T,A,T,b,A)},v=(x,T,b,A,R,y=.12)=>{let M=Math.ceil((T-x)/5);for(let C=0;C<M;C++){let D=x+(T-x)*C/M,L=x+(T-x)*(C+1)/M;f(_(D,b(D),y),_(D,A(D),y),_(L,A(L),y),_(L,b(L),y),R)}},S;if(u.kind==="log"){let x=new cn;m.add(x),x.position.y=.32;let T=a(x,t,o("#82503a"),0,0,0,ji,2*Di,ji);T.rotation.z=Math.PI/2;for(let A of[-1,1]){let R=a(x,t,o("#e9ba79"),A*(Di+.015),0,0,ji*.99,.045,ji*.99);R.rotation.z=Math.PI/2;let y=a(x,t,o("#aa7851"),A*(Di+.047),0,0,.21,.025,.21);y.rotation.z=Math.PI/2;let M=a(x,t,o("#e0a15d"),A*(Di-.56),0,0,ji+.012,.18,ji+.012);M.rotation.z=Math.PI/2}let b=a(x,t,o("#916643"),-.7,.32,0,.15,.6,.16);b.rotation.z=-.54,S=A=>{let R=$c(u,A);x.position.x=R.offset,x.rotation.y=R.angle}}else if(u.kind==="lock"){let x=o("#517b82"),T=o("#9eb9ae"),b=o("#f3bd5d",!1),A=[-1,1].map(()=>{let y=new cn;m.add(y),a(y,e,x,0,.61,0,1,1.52,Ps*2),a(y,e,T,0,1.36,.02,1,.18,Ps*2+.1);for(let M of[-.34,0,.34])a(y,e,T,M,.67,Ps+.028,.034,1.08,.08);return y}),R=[-1,1].map(()=>a(m,e,b,0,.72,.04,.25,1.42,Ps*2+.15));for(let y of[-1,1]){let M=u.offset+y*(Cs-.35);for(let C of[.28,.76,1.18])a(m,e,o("#e3c995"),M,C,Ps+.11,.55,.16,.06)}S=y=>{let M=Do(u,y);for(let[C,D]of[-1,1].entries()){let L=u.offset+D*Cs,N=M+D*Is/2;A[C].position.x=(L+N)/2,A[C].scale.x=Math.abs(L-N),R[C].position.x=N}}}else if(u.kind==="charge"){let x=a(m,i,o("#9cfce6",!1),u.offset,1.12,0,u.width*.5,1.98,1),T=a(m,i,o("#8b67af"),u.offset,1.12,-.16,u.width*.54,2.11,1.3);for(let b of[-1,1]){let A=a(m,s,o("#c6a0ef",!1),u.offset+b*u.width*.46,1.33,.06,.31,.57,.23);A.rotation.z=b*.29}S=b=>{x.scale.y=1.98+.05*Math.sin(b*2.8+u.s),T.rotation.z=.025*Math.sin(b*1.7)}}else if(u.kind==="ice"){let x=o("#b3e5eb",!1),T=o("#effaf3",!1),b=u.width/2,A=(R,y)=>u.offset+y*(b-.37+.28*Math.sin(R*.3+y));v(u.s,u.end,R=>A(R,-1),R=>A(R,1),x,.105);for(let R of[-1,1])v(u.s,u.end,y=>A(y,R)-.12,y=>A(y,R)+.12,T,.14);for(let R=u.s+6,y=0;R<u.end-5;R+=11,y++){let M=u.offset+(y%2?1:-1)*b*.4;f(_(R,M-1.25,.17),_(R,M-1.05,.17),_(R+2.8,M+.91,.17),_(R+2.6,M+.83,.17),T)}}else if(u.kind==="wind"){let x=o("#e2f0d6",!1);for(let b=u.s+3,A=0;b<u.end-4;b+=7,A++)for(let R of[-7,-1.5,4.4]){let y=R+1.1*Math.sin(A*2.1+R),M=u.dir*2.1;f(_(b,y,.16),_(b-.25,y+.19,.16),_(b+2.9,y+M+.23,.16),_(b+3.2,y+M,.16),x)}let T=-u.dir*(ze(u.s,l).half+1.1);a(m,t,o("#e0c3a1"),T,2.6,0,.1,5.2,.1);for(let b=0;b<4;b++){let A=a(m,t,o(b%2?"#efe6c1":"#db6c54"),T+u.dir*(.3+b*.53),4.96-b*.09,0,.35-b*.058,.58,.35-b*.058);A.rotation.z=Math.PI/2-u.dir*.14}}else if(u.kind==="outlet"){let x=o("#e2f7ed",!1).clone(),T=o("#69b9b7",!1),b=C=>Wh(u,C,l);v(u.s,u.end,C=>b(C)-2.9,C=>b(C)+2.9,T);for(let C=u.s+3;C<u.end-4;C+=5.6){let D=b(C);for(let L of[-1,1])f(_(C,D+L*2.35,.17),_(C-.32,D+L*2.31,.17),_(C+1.8,D,.17),_(C+2.12,D,.17),x)}let A=u.side*(ze(u.s,l).half-.12),R=a(m,t,o("#536c6d"),A,.98,0,.88,2.36,.88);R.rotation.z=Math.PI/2;let y=a(m,i,o("#b0c4ba"),A-u.side*1.2,.98,0,.89,.89,.89);y.rotation.y=Math.PI/2;let M=a(m,e,x,A-u.side*2.3,.57,0,2.5,.2,1.15);M.rotation.z=u.side*.25,S=C=>{let D=Gh(u,C);x.color.setRGB(.16+.64*D,.46+.48*D,.5+.39*D),M.visible=D>.12}}for(let[x,T]of g)m.add(new xt(new vt().setFromPoints(T),x));c.push({r:u,key:l,group:m,animate:S})}return(l,h)=>{let u=l.s,d=h==="ready"?0:l.elapsed;for(let{r:p,key:m,group:_,animate:g}of c)_.visible=(p.end??p.s)>=u-16&&p.s<u+165&&(m==="shared"||!l.route||m===l.route),_.visible&&g&&g(d)}}var xp=mt(()=>{ti();Xt();Qc()});function Mn(n,e,t=0,i="shared"){let s=ot(n,e);return[s.x,t+He(n,i),s.z]}function yp(n){return au.has(n)||au.set(n,new Le(n)),au.get(n)}function Oo(n,e,t,i,s){let[r,o,a]=t,c=s===0?["#658f56","#7ca65c","#91b869","#a4c77a"]:["#537f5b","#6c9a63","#85ae6f","#a0bd78"];if(n.form("trunk",[r,o+i*.3,a],[i*.045,i*.65,i*.047],"#776850",[.05,e()*5,.055]),n.form("trunk",[r+i*.1,o+i*.47,a],[i*.023,i*.34,i*.023],"#827456",[.18,.4,-.69]),s===2){for(let h=0;h<3;h++)n.form("cone",[r,o+i*(.49+h*.17),a],[i*(.26-h*.045),i*(.64-h*.06),i*(.24-h*.04)],c[h],[0,h*.7,0]);return}let l=i*(s===0?.32:.245);for(let h=0;h<5;h++){let u=h*Math.PI*.5+e()*.38,d=h===4?0:l*.56,p=h===4;n.form("crown",[r+Math.cos(u)*d,o+i*(p?.77:.59+e()*.1),a+Math.sin(u)*d],[l*(p?.85:1),i*(s===0?.27:.205),l*(.85+e()*.17)],c[(h+(p?2:0))%4],[.07,u,.06])}}function cu(n,e,t,i){let[s,r,o]=t;n.form("trunk",[s,r+i*.29,o],[i*.07,i*.66,i*.062],"#867153",[.06,0,-.12]);for(let a=0;a<5;a++){let c=a*2.4+.4,l=s+Math.cos(c)*i*.2,h=o+Math.sin(c)*i*.2;n.form("trunk",[(l+s)/2,r+i*.49,(h+o)/2],[i*.026,i*.43,i*.026],"#917955",[.44*Math.sin(c),0,-.44*Math.cos(c)]),n.form("crown",[l,r+i*(.69+.07*Math.sin(c)),h],[i*.29,i*.24,i*.27],a%2?"#89b762":"#9cc574",[0,c,0]);for(let u=0;u<4;u++){let d=c+u*1.5,p=l+Math.cos(d)*i*.21,m=h+Math.sin(d)*i*.19,_=r+i*(.22+e()*.15);n.tri([p-.17,r+i*.66,m],[p+.25,r+i*.68,m+.13],[p+.09,_,m+.16],u%2?"#96b963":"#aecb70")}}}function Qt(n,e,t,i,s,r){let o=new U(t[0]-e[0],t[1]-e[1],t[2]-e[2]),a=o.length();if(a<.001)return;let c=new wn().setFromUnitVectors(new U(0,1,0),o.normalize()),l=new mn().setFromQuaternion(c);n.form("box",e.map((h,u)=>(h+t[u])*.5),[i,a,s],r,[l.x,l.y,l.z])}function Us(n,e,t,i=1){let[s,r,o]=t;for(let a=0;a<8;a++){let c=s+(e()-.5)*i*1.3,l=o+(e()-.5)*i*1.8,h=(.63+e()*1.14)*i,u=(e()-.4)*i*.4;n.tri([c-.085*i,r-.12,l],[c+.08*i,r-.12,l],[c+u,r+h,l-.24*i],a%2?"#8f9c55":"#81904e"),n.tri([c,r-.12,l-.08*i],[c,r-.12,l+.07*i],[c+u*.4,r+h*.86,l+.12*i],"#a8b264"),a===0&&n.form("trunk",[c+u*.68,r+h*.85,l-.11],[.045*i,.27*i,.045*i],"#6e5238",[.05,0,-u*.21])}}var No,ul,Xv,qv,vp,Yv,Zv,au,Gn,Qi=mt(()=>{ti();Xt();cl();No={box:new ai(1,1,1),stone:new gr(1,0),crown:new gr(1,1),trunk:new ci(.7,1,1,7),cone:new po(1,1,5),hex:new ci(1,1,1,6),barrel:new ci(1,1,1,10)};for(let n of Object.keys(No))No[n].index&&(No[n]=No[n].toNonIndexed());ul=new U,Xv=new wn,qv=new mn,vp=new Mt,Yv=new U,Zv=new U,au=new Map;Gn=class{constructor(){this.positions=[],this.colors=[]}tri(e,t,i,s){this.positions.push(...e,...t,...i);let{r,g:o,b:a}=yp(s);this.colors.push(r,o,a,r,o,a,r,o,a)}quad(e,t,i,s,r){this.tri(e,t,s,r),this.tri(t,i,s,r)}form(e,t,i,s,r=[0,0,0]){let o=No[e].attributes.position;vp.compose(Yv.fromArray(t),Xv.setFromEuler(qv.set(...r)),Zv.fromArray(i));let a=yp(s);for(let c=0;c<o.count;c++)ul.fromBufferAttribute(o,c).applyMatrix4(vp),this.positions.push(ul.x,ul.y,ul.z),this.colors.push(a.r,a.g,a.b)}mesh(e=!1){let t=new vt;t.setAttribute("position",new Xe(this.positions,3)),t.setAttribute("color",new Xe(this.colors,3)),t.computeVertexNormals();let i=e?new Zt({vertexColors:!0,side:Dt}):new Ri({vertexColors:!0,side:Dt,flatShading:!0});return new xt(t,i)}}});function Jv(){let n=new Gn,e=[[-.53,-.7],[.53,-.7],[.67,-.55],[.67,.49],[.51,.67],[-.51,.67],[-.67,.49],[-.67,-.55]];for(let s=0;s<e.length;s++){let[r,o]=e[s],[a,c]=e[(s+1)%e.length];n.quad([r,o,-.32],[a,c,-.32],[a,c,.32],[r,o,.32],"#bc852c");for(let l of[-.32,.32])n.tri([0,0,l],[r,o,l],[a,c,l],"#ffcf4c")}n.form("box",[0,.73,0],[.49,.19,.42],"#f7eac0"),n.form("box",[0,-.56,0],[1.29,.16,.7],"#244840");for(let s of[-1,1])n.form("box",[s*.658,-.04,0],[.07,.6,.43],"#335e55");let t=new Gn;for(let s of[-1,1]){let r=(o,a)=>[s*o,a,s*.333];t.quad(r(.08,.48),r(-.36,-.06),r(-.06,-.06),r(.26,.48),"#263f37"),t.tri(r(-.06,.12),r(.34,.12),r(-.2,-.45),"#263f37")}let i=new cn;return i.add(n.mesh(),t.mesh(!0)),i}function Mp(n){let e=Jv(),t=new Ai(1.18,1.36,32),i=new Zt({color:"#ffe189",transparent:!0,opacity:.88,side:Dt,depthWrite:!1}),s=Object.values(Ui).map(r=>{let o=e.clone(),a=new xt(t,i);return a.rotation.x=-Math.PI/2-Math.atan(Ar(r.s,r.branch)),a.position.set(r.x,r.y+.09,r.z),o.position.set(r.x,r.y+1.07,r.z),n.add(o,a),{cell:r,pack:o,ring:a,yaw:-jt(r.s,r.branch)}});return(r,o,a)=>{for(let{cell:c,pack:l,ring:h,yaw:u}of s){let d=!o.boostCells.includes(c.branch)&&(!o.route||o.route===c.branch)&&c.s>o.s-6&&c.s<o.s+172;if(l.visible=h.visible=d,!d)continue;let p=a?0:r*2.5+c.s*.07;l.position.y=c.y+1.07+.12*Math.sin(p),l.rotation.set(0,u+.32*Math.sin(p*.69),.055*Math.sin(p)),h.scale.setScalar(1+.09*Math.sin(p))}}}var Sp=mt(()=>{ti();Qi();Uo();Xt()});function dl(n,e,t){let i=Math.max(e-22,0)*(.22+.12*Math.sin(n*.013+e*.048));if(Ht){if(te.id==="timber")return .18*Math.min(e,14)+.09*Math.min(e,54)+i*.75;if(te.id==="windreach")return .14*Math.min(e,12)+.08*Math.min(e,35)+i*.42;if(te.id==="turbine"||te.id==="tideworks")return .13*Math.min(e,10)+1.7*Fe(.8,3.8,e)+i*.36;if(te.id==="harbor")return .16*Math.min(e,18)+1.1*Fe(.25,1.6,e)+i*.34;if(te.id==="delta")return .08*Math.min(e,14)+.055*Math.min(e,32)+i*.45;let s=4.8*Fe(1.8,6.2,e)+7.2*Fe(7,18,e)+5*Fe(22,40,e);return .15*Math.min(e,24)+s*(.8+.2*Math.sin(n*.042))+i}if(t==="gorge"){let s=(4.7+1.8*Math.sin(n*.057))*Fe(1.4,5.8,e)+(5.8+2.8*Math.sin(n*.031+.6))*Fe(6.3,17,e);return .18*Math.min(e,10)+(.28+.72*Fe(he+13,he+49,n))*s+i}return t==="canal"?.18*Math.min(e,12)+1.32*Fe(.8,2.15,e)+.09*Math.max(0,e-12)+i:t==="marsh"?.12*Math.min(e,7)+.06*Math.min(e,32)+i:.2*Math.min(e,12)+.1*Math.min(e,35)+i}function hu(n,e,t){let i=t[0],s=t[t.length-1],r=ze(n,i),o=ze(n,s);if(e<=r.left){let a=r.left-e;return{h:He(n,i)+dl(n,a,i),d:a,route:i}}if(e>=o.right){let a=e-o.right;return{h:He(n,s)+dl(n,a,s),d:a,route:s}}for(let a=0;a<t.length-1;a++){let c=t[a],l=t[a+1],h=ze(n,c).right,u=ze(n,l).left;if(e<h-1e-4||e>u+1e-4)continue;let d=Qe((e-h)/Math.max(.001,u-h),0,1),p=Fe(0,1,d),m=Math.max(0,Math.min(e-h,u-e)),_=He(n,c)+dl(n,m,c),g=He(n,l)+dl(n,m,l),f=n<he+48?(a===0?1.72:1.25)*Math.sin(Math.PI*d)*Fe(.3,3.8,u-h)*(1-Fe(he+16,he+48,n)):0;return{h:_+(g-_)*p+f,d:m,route:d<.5?c:l}}return null}function Un(n,e){let t=hu(n,e,Kv(n));if(!t)return null;let i=ot(n,e);return[i.x,t.h,i.z]}function Ep(n,e,t){let i=ot(n,e),s=hu(n,e,t);return[i.x,s?s.h:He(n,t[0])-.035,i.z]}function Tp(n,e,t,i,s){function r(l){let h=i.map(m=>ze(l,m)),u=h[0].left,d=h.at(-1).right,p=[bp.map(m=>u-m)];for(let m=0;m<h.length-1;m++){let _=h[m].right,g=h[m+1].left;p.push($v.map(f=>_+(g-_)*f))}return p.push(bp.map(m=>d+m)),p}let o=Math.ceil((t-e)/(e===he?1.25:3)),a=r(e),c=a.map(l=>l.map(h=>Ep(e,h,i)));for(let l=1;l<=o;l++){let h=e+(t-e)*l/o,u=r(h),d=u.map(p=>p.map(m=>Ep(h,m,i)));for(let p=0;p<u.length;p++)for(let m=0;m<u[p].length-1;m++){let _=hu(h,(u[p][m]+u[p][m+1])/2,i);if(!_)continue;let g=(Ht?.ground??jv[_.route])[_.d<1.6?0:_.d<(_.route==="gorge"?12:4.2)?1:2],f=g[Math.floor(s()*g.length)];n.quad(c[p][m],d[p][m],d[p][m+1],c[p][m+1],f)}c=d}}function wp(){let n={value:0},e=new Zt({vertexColors:!0,side:Dt});return e.onBeforeCompile=t=>{t.uniforms.creekClock=n,t.vertexShader=`attribute vec3 creekCoord; varying vec3 vCreek;
`+t.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
 vCreek=creekCoord;`),t.fragmentShader=`uniform float creekClock; varying vec3 vCreek;
`+t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      vec2 p=vCreek.xy; float t=creekClock;
      float swell=sin(p.x*.75+p.y*.41-t*.93)+.44*sin(p.x*.54-p.y*.64+t*.52);
      float ripple=sin(p.y*3.85+swell*2.36-t*2.6);
      float broken=smoothstep(.17,.91,sin(p.x*1.20+p.y*.69+swell+t*.29));
      float nearField=1.-smoothstep(.16,.92,fwidth(p.y));
      float glint=smoothstep(.78,.975,ripple)*broken*nearField;
      diffuseColor.rgb*=1.+.057*swell;
      diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.58,.86,.76),glint*(.17+vCreek.z*.08));
      float caustic=pow(max(0.,sin(p.x*5.0+swell*1.7)*sin(p.y*4.5-swell)),6.);
      diffuseColor.rgb+=vec3(.045,.055,.026)*caustic*vCreek.z*nearField;`)},{material:e,clock:n}}function Ap(n,e,t,i){let s=[],r=[],o=[],a=[],c=n>=0&&e<=he,l=c?60:24,h=Math.ceil((e-n)/1.6),u=new Le;for(let p of t){let[m,_,g]=lu[p],f=new Le,v=s.length/3;for(let S=0;S<=h;S++){let x=n+(e-n)*S/h,T=ze(x,p),b=c?Fe(11,he,x):0,A=b?As(x,-1):0,R=b?As(x,1):0;for(let y=0;y<=l;y++){let M=T.left+(T.right-T.left)*y/l,C=Kc(x,M,p),D=ot(x,M),L=Rr(x,M,p);if(s.push(D.x,He(x,p)+L,D.z),a.push(M,x,C.shallow),f.copy(m).lerp(_,.82*C.shallow).lerp(g,.52*C.current),b){let N=M<(A+R)/2?"gorge":"marsh",B=N==="gorge"?1-Fe(A-2,A+2,M):Fe(R-2,R+2,M),O=lu.canal,V=lu[N];u.copy(O[0]).lerp(O[1],.82*C.shallow).lerp(O[2],.52*C.current),f.lerp(u,b),u.copy(V[0]).lerp(V[1],.82*C.shallow).lerp(V[2],.52*C.current),f.lerp(u,B*b)}if(L>0&&f.lerp(_,Math.min(.48,.55*L)),f.multiplyScalar(1+.036*Math.sin(x*.25+M*.74)),r.push(f.r,f.g,f.b),S&&y<l){let N=v+(S-1)*(l+1)+y,B=N+1,O=N+l+1;o.push(N,B,O,B,O+1,O)}}}}let d=new vt;return d.setAttribute("position",new Xe(s,3)),d.setAttribute("color",new Xe(r,3)),d.setAttribute("creekCoord",new Xe(a,3)),d.setIndex(o),new xt(d,i)}function Wn(n,e,t){let i=Vn(n,t),s=i.mid+i.radius*e,r=ot(n,s),o=(Ht?te.id==="basalt"?.54:te.id==="harbor"?.39:.16:t==="gorge"?.92:t==="shared"?.4:t==="canal"?.24:.16)*i.radius*(1-Math.abs(e)**1.55);return[r.x,He(n,t)+.025+o,r.z]}var Kv,bp,$v,jv,Qv,lu,Bo=mt(()=>{en();Qo();ti();Xt();Kv=n=>n>=he&&n<qe?Ct:["shared"],bp=[0,.6,1.4,2.5,4.4,7,10.5,15.5,24,37,61,100,160],$v=[0,.028,.06,.12,.2,.32,.5,.68,.8,.88,.94,.972,1];jv={shared:[["#cfbd91","#dfcda1"],["#adb080","#a7ad7c"],["#afc384","#a7bc80"]],gorge:[["#d9b48a","#caaa82"],["#b58368","#bc8d6e","#a97d67"],["#a9916d","#ac9a76","#a18f6a"]],canal:[["#c0bba1","#bcbba8"],["#929e91","#9da69a"],["#aab78c","#a4b388"]],marsh:[["#bfbd86","#c4c48e"],["#99aa72","#a2ae76"],["#a4b77b","#abbc7c"]]};Qv={shared:["#358c94","#acc8a9","#68b8b1"],gorge:["#277d8b","#b6bf9b","#75c6c0"],canal:["#347f90","#8aafa3","#62b3bd"],marsh:["#518c78","#afbf86","#78b29a"]},lu=Object.fromEntries(Object.entries(Ht?.water??Qv).map(([n,e])=>[n,e.map(t=>new Le(t))]))});function Rp(n,[e,t,i],s,r,o,a,c){n.form("box",[e,t+r/2,i],[s,r,o],a);for(let l of[-1,1])n.quad([e+l*(s/2+.45),t+r,i-o/2-.4],[e,t+r+s*.31,i-o/2-.4],[e,t+r+s*.31,i+o/2+.4],[e+l*(s/2+.45),t+r,i+o/2+.4],c),n.tri([e-s/2,t+r,i+l*o/2],[e+s/2,t+r,i+l*o/2],[e,t+r+s*.31,i+l*o/2],a);n.form("box",[e,t+r*.39,i+o/2+.035],[s*.42,r*.77,.07],"#45524e")}function ty(n,e,t){let[i,s,r]=e;Rp(n,e,4.8,2.65,6.2,"#ba9461","#945b44");for(let[o,a]of[[-.68,.43],[.26,.43],[-.18,1.16]]){let c=i+t*4+o;n.form("barrel",[c,s+a,r],[.53,5,.53],"#8c6343",[Math.PI/2,0,.02]),n.form("barrel",[c,s+a,r+2.52],[.51,.05,.51],"#dfbd83",[Math.PI/2,0,0])}for(let o of[-1.8,1.8])n.form("box",[i+o,s+2.2,r+3.2],[.25,4.2,.32],"#815f40")}function uu(n,[e,t,i],s,r,o){let a=[[1,0],[.45,.87],[-.64,.73],[-.93,-.22],[-.12,-.94],[.76,-.67]],c=["#73a4b9","#9cc7d1","#b9dfe2","#85b6c7","#d7edef","#a5ced9"];for(let l=0;l<a.length;l++){let[h,u]=a[l],[d,p]=a[(l+1)%a.length];n.tri([e+h*r,t-.32,i+u*r],[e+d*r,t-.32,i+p*r],[e+o*r,t+s,i-.18*r],c[l])}}function du(n,[e,t,i],s,r){for(let o=0;o<4;o++){let a=r+o*1.67,c=.31+o*.11,l=e+Math.cos(a)*c,h=i+Math.sin(a)*c,u=s*(1-o*.15);n.form("hex",[l,t+u*.39,h],[u*.16,u*.82,u*.16],o%2?"#7ab8c2":"#ab83c2",[.06*o,a,.075*o]),n.form("cone",[l-u*.04*o,t+u*.86,h],[u*.19,u*.32,u*.19],o%2?"#b0e7db":"#e7c1ef",[.03*o,a,.06*o])}}function ny(n,[e,t,i],s){n.form("box",[e,t+1,i],[5.2,2.1,5.2],"#939b91");for(let r of[-1.4,1.4])for(let o of[-1.5,1.5])n.form("box",[e+r,t+5.6,i+o],[.55,8,.6],"#737e7b");for(let r of[-1.5,1.5])Qt(n,[e-1.4,t+2,i+r],[e+1.4,t+8.3,i+r],.25,.28,"#b3a18a"),Qt(n,[e+1.4,t+2,i+r],[e-1.4,t+8.3,i+r],.25,.28,"#b3a18a");n.form("box",[e,t+9.6,i],[4.8,1.7,5.3],"#d3c7aa"),n.form("box",[e,t+9.9,i+2.68],[3.8,.67,.11],"#3f646c"),n.form("box",[e,t+10.6,i],[5.1,.25,5.6],"#975d49"),n.form("box",[e-s*1.5,t+12.1,i],[.12,3.1,.12],"#6b7a73"),n.form("stone",[e-s*1.5,t+13.6,i],[.37,.36,.37],"#f1b25d")}function Cp(n,e,t,i,s){for(let r=0;r<Math.ceil((t-e)/5.4);r++){let o=Wn(e+(t-e)*s(),(s()-.5)*1.5,i);te.id==="glacier"?uu(n,o,.65+s()*.75,.48,.24):te.id==="cavern"?du(n,o,.7+s()*.65,r):n.form("stone",o,[.53,.3,.86],te.id==="timber"?"#827d5b":"#b0aa8a",[.09,s()*3,.08])}}function fu(n,e,t){let i=te.id==="windreach"?141:176,s=t>0?32:58,r=Math.ceil((n-s)/i)*i+s;return r>=0&&r<e?r:null}function Ip(n,e,t,i,s){let r=te.id;function o(a,c,l){let h=ze(a,i);return Un(a,(c<0?h.left:h.right)+c*l)}for(let a of[-1,1]){let c=i==="shared"||i==="gorge"&&a<0||i==="marsh"&&a>0,l=r==="timber"?5:r==="glacier"||r==="cavern"?9:15;for(let _=0;_<Math.ceil((t-e)/l);_++){let g=e+(t-e)*s();if(!c&&(g<he+52||g>qe-42))continue;let f=o(g,a,2.6+s()*16);if(f)if(r==="timber")Oo(n,s,f,5.2+s()*7,2);else if(r==="glacier")uu(n,f,4.3+s()*8,1.7+s()*2.5,(s()-.5)*.9);else if(r==="cavern"){let v=4+s()*5.6;n.form("cone",[f[0],f[1]+v*.44,f[2]],[1.8,v,2.1],ey(s,["#635b76","#7e7087","#716578"]),[0,s(),.04]),du(n,[f[0]-a*1.4,f[1],f[2]+1.3],1.6+s()*2.7,s()*5)}else if(r==="windreach"){n.form("stone",f,[1.5,.44,1.9],"#bdad80",[0,s()*4,0]);for(let v=0;v<5;v++)n.tri([f[0]+v*.19,f[1],f[2]],[f[0]+v*.19+.13,f[1],f[2]],[f[0]+v*.19+.6,f[1]+1.2,f[2]-.15],"#a8a464")}else n.form("box",[f[0],f[1]+.38,f[2]],[1.5,.83,3.1],r==="turbine"?"#96a69b":"#a1a79d",[0,.28,0])}if(!c)continue;let h=r==="windreach"||r==="turbine",u=r==="cavern"?78:r==="glacier"?125:r==="timber"?147:176,d=a>0?32:58,p=h?fu(e,t,a):null,m=h?p:Math.ceil((e-d)/u)*u+d;if(m!==null)for(let _=m;_<t;_+=u){if(_<0)continue;let g=o(_,a,r==="cavern"?3.7:7.3);if(g)if(r==="timber")ty(n,g,a);else if(r==="windreach")n.form("trunk",[g[0],g[1]+5.6,g[2]],[.73,11.2,.73],"#eee4cb");else if(r==="turbine")n.form("trunk",[g[0],g[1]+2.2,g[2]],[1.15,4.4,1.15],"#707a70"),Rp(n,[g[0]+a*3.5,g[1],g[2]-1],4.3,4.6,5.1,"#a19075","#637c79");else if(r==="glacier")for(let f=0;f<3;f++)uu(n,[g[0]+f*1.7*a,g[1],g[2]+f*.8],9+f*2.7,2.3+f*.5,a*.34);else r==="cavern"?(du(n,g,3.5+s()*2.4,_*.17),n.form("hex",[g[0]+a*2.1,g[1]+2.6,g[2]],[2,6.1,2.7],"#70627b",[.09,.5,.17*a])):ny(n,g,a)}}}var ey,pu=mt(()=>{en();Xt();Bo();Qi();ey=(n,e)=>e[Math.floor(n()*e.length)]});function Pp(n,e,t,i,s){let r=te.id==="turbine";for(let o of[-1,1]){if(s!=="shared"&&!(s==="gorge"&&o<0)&&!(s==="marsh"&&o>0))continue;let a=fu(t,i,o);if(a===null)continue;let c=ze(a,s),l=Un(a,(o<0?c.left:c.right)+o*7.3);if(!l)continue;let h=new Gn,u=r?3.6:5;if(r){let m=(_,g,f)=>[Math.cos(_)*g,Math.sin(_)*g,f];for(let _=0;_<12;_++){let g=_*Math.PI/6,f=(_+1)*Math.PI/6;Qt(h,m(g,u,0),m(f,u,0),.26,.96,"#78583b"),Qt(h,m(g,.29,.58),m(g,u,.58),.17,.17,"#b1925d"),h.form("box",m(g,u,0),[.35,.67,1.4],"#a67c4d",[0,0,g])}h.form("barrel",[0,0,.65],[.46,1.4,.46],"#536c69",[Math.PI/2,0,0])}else{h.form("stone",[0,0,.54],[.52,.53,.85],"#d7d6c1");for(let m=0;m<3;m++){let _=m*Math.PI*2/3,g=(f,v)=>[Math.sin(_)*f+Math.cos(_)*v,Math.cos(_)*f-Math.sin(_)*v,.79];h.quad(g(.28,-.14),g(1.5,.55),g(u,.17),g(u+.35,-.08),"#f8eed6"),h.tri(g(u-.8,-.03),g(u,.17),g(u+.35,-.08),"#bf795d")}}let d=h.mesh(),p=Math.sin(a*.04)*1.7;d.position.set(l[0],l[1]+(r?4.4:11.2),l[2]),e.add(d),n.push({mesh:d,phase:p,rate:r?.57:.82})}}var Lp=mt(()=>{en();Xt();Bo();Qi();pu()});function Fs(n,e,t,i,s=0){let r=ze(n,e),o=(t<0?r.left:r.right)+t*i,a=Un(n,o);if(!a)return null;if(s){for(let c of[-s,s])for(let l of[-s,s])if(!Un(n+c,o+l))return null}return a}function iy(n,[e,t,i]){n.form("barrel",[e,t+.44,i],[3.5,.9,3.5],"#a8a39a");for(let r=0;r<5;r++){let o=2.1-r*.18;n.form("barrel",[e,t+1.9+r*2.14,i],[o,2.18,o],r%2?"#bf5a4a":"#ede0b9")}let s=t+11.7;n.form("barrel",[e,s-.15,i],[1.98,.35,1.98],"#404e54"),n.form("barrel",[e,s+.75,i],[1.13,1.55,1.13],"#ffdf94");for(let r of[0,1.57,3.14,4.71])n.form("box",[e+1.06*Math.cos(r),s+.76,i+1.06*Math.sin(r)],[.16,1.67,.16],"#48565b");n.form("cone",[e,s+2.01,i],[1.79,1.17,1.79],"#ae5141")}function sy(n,[e,t,i],s){let r="#b87540",o="#e4a851",a="#586467";for(let d of[-1,1])for(let p of[-1,1])n.form("box",[e+d*2,t+3.8,i+p*2.9],[.48,7.6,.55],r),Qt(n,[e+d*2,t+.3,i+p*2.9],[e+d*2,t+7.4,i-p*2.9],.17,.19,o);n.form("box",[e,t+7.7,i],[5,.75,6.7],a),n.form("box",[e+s*1.1,t+9,i+1.55],[2.7,2.1,2.85],o),n.form("box",[e+s*1.1,t+9.3,i+3.01],[2.06,.82,.07],a);let c=[e,t+8.2,i],l=[e,t+13.5,i+.6],h=[e-s*1.6,t+12.5,i-9.2];Qt(n,c,l,.52,.52,r),Qt(n,c,h,.48,.53,o),Qt(n,l,h,.22,.24,o);for(let d=1;d<6;d++){let p=d/6,m=(d-1)/6;Qt(n,c.map((_,g)=>_+(h[g]-_)*m),l.map((_,g)=>_+(h[g]-_)*p),.15,.15,r)}let u=[h[0],t+6,h[2]];Qt(n,h,u,.09,.09,a),n.form("box",u,[1.35,.36,.4],a)}function ry(n,[e,t,i],s){let r=["#b9644c","#577b83","#d5ac63","#708b78"];for(let o=0;o<3;o++){let a=e+(o===1?3.35:0),c=t+1.16+(o===2?2.34:0);n.form("box",[a,c,i],[3.14,2.27,6.05],r[(s+o)%r.length]);for(let l of[-1,1])for(let h=-2;h<=2;h++)n.form("box",[a+l*1.59,c,i+h*1.1],[.08,2.1,.095],r[(s+o+1)%r.length]);n.form("box",[a,c,i+3.045],[.06,2.05,.04],"#646d69")}}function oy(n,e,t,i,s){for(let o=Math.ceil(e/16)*16;o<t;o+=16){let a=Fs(o,i,s,.68),c=Fs(o+13,i,s,.68);!a||!c||(Qt(n,[a[0],a[1]+.13,a[2]],[c[0],c[1]+.13,c[2]],.45,.5,"#bcc0ae"),n.form("barrel",[a[0],a[1]+.4,a[2]],[.22,.78,.22],"#5d7371"))}let r=i==="shared"?72:112;for(let o=Math.ceil((e-31)/r)*r+31;o<t;o+=r){if(o<0)continue;let a=Math.round((o-31)/r),c=Fs(o,i,s,s>0?9:12,4.5);c&&(i==="shared"&&s>0&&(a%4===0||o>te.length-75)?iy(n,c):(a+(s>0?1:0))%3===0?sy(n,c,s):ry(n,c,a%4))}}function ay(n,e,t,i,s){let r=4+Math.floor(e()*4),o=4.3+e()*9,a=4+e()*7;for(let c=0;c<r;c++){let l=t+(e()-.5)*8,h=Fs(l,i,s,a+(e()-.5)*5,1.1);if(!h)continue;let u=o*(.43+e()*.68),d=.8+e()*.83;n.form("hex",[h[0],h[1]+u*.47,h[2]],[d,u,d],Dp[c%5],[0,.51,0]),n.form("hex",[h[0],h[1]+u*.97,h[2]],[d*.97,.13,d*.97],c%3?"#808c88":"#a1ae8a",[0,.51,0])}}function cy(n,e,t,i){let s=[11.5,7.4,4.1,1.8,.05],r=s.length-1;for(let o=0;o<r;o++){let a=[[e-2.6,s[o]],[e+2.6,s[o]],[e+2.6,s[o+1]],[e-2.6,s[o+1]]].map(([d,p])=>Fs(d,t,i,p));if(a.some(d=>!d))return;for(let d of a)d[1]+=.23;n.quad(...a,o===r-1?"#dcebdc":"#82bfc5");let[c,l,h,u]=a;for(let d of[.18,.51,.8]){let p=(m,_,g)=>m.map((f,v)=>f+(_[v]-f)*g+(v===1?.035:0));n.quad(p(c,l,d),p(c,l,d+.035),p(u,h,d+.037),p(u,h,d),"#d6ebe4")}}}function ly(n,[e,t,i],s){n.form("trunk",[e,t+2.9,i],[1.8,5.8,1.8],"#ad9368"),n.form("cone",[e,t+6.15,i],[1.88,1.31,1.88],"#6e6653"),n.form("box",[e,t+1.13,i+1.54],[.82,2.05,.16],"#695e49");let r=[e,t+5.64,i+1.72],o=(a,c,l)=>[e+Math.sin(l)*a+Math.cos(l)*c,r[1]+Math.cos(l)*a-Math.sin(l)*c,r[2]+.24];for(let a=0;a<4;a++){let c=s+a*Math.PI/2;Qt(n,r,o(4.7,0,c),.15,.15,"#735c43"),n.quad(o(1.7,0,c),o(4.62,0,c),o(4.5,1,c),o(1.92,.59,c),"#f0dfb0");for(let l of[2.35,3.3,4.15])Qt(n,o(l,0,c),o(l,.77,c),.058,.09,"#a78a5d")}n.form("stone",[e,r[1],r[2]+.4],[.36,.36,.23],"#ad7850")}function hy(n,[e,t,i]){for(let s of[-1,1])for(let r of[-1,1])n.form("trunk",[e+s*1.7,t+.72,i+r*2],[.16,1.48,.16],"#866d4c");n.form("box",[e,t+1.46,i],[4.35,.22,5.1],"#92784d"),n.form("box",[e,t+2.35,i],[3.48,1.65,4.12],"#bca16e"),n.form("box",[e,t+2.45,i+2.07],[1.35,.78,.055],"#5b685b");for(let s of[-1,1])n.quad([e+s*2.34,t+3,i-2.68],[e,t+4.55,i-2.68],[e,t+4.55,i+2.68],[e+s*2.34,t+3,i+2.68],"#807957"),n.tri([e-1.77,t+3,i+s*2.07],[e+1.77,t+3,i+s*2.07],[e,t+4.24,i+s*2.07],"#c1ae82")}function Up(n,e,[t,i,s],r){for(let o=0;o<7;o++){let a=t+(e()-.5)*2*r,c=s+(e()-.5)*2*r,l=(.7+e()*.95)*r,h=.25*r;n.tri([a-.07,i-.05,c],[a+.07,i-.05,c],[a+h,i+l,c+.12],o%2?"#b3a15d":"#919650"),o%2===0&&n.form("cone",[a+h,i+l,c+.12],[.11*r,.52*r,.11*r],"#ccb078",[.09,0,-.25])}}function Fp(n,e,t,i,s){if(te.reaches){Cp(n,e,t,i,s);return}for(let r=0;r<Math.ceil((t-e)/3.1);r++){let o=e+(t-e)*s(),a=Wn(o,(s()-.5)*1.7,i);if(te.id==="delta")Up(n,s,a,.8+s()*.47);else if(te.id==="basalt"){let c=.4+s()*.86;n.form("hex",[a[0],a[1]+.26*c,a[2]],[.58,c,.58],Dp[r%5],[0,.51,0])}else n.form("stone",a,[.74,.45,.84],r%2?"#aca498":"#9c9e91",[.12,s()*4,.17])}}function Np(n,e,t,i,s){if(te.reaches){Ip(n,e,t,i,s);return}for(let r of[-1,1]){if(te.id==="harbor"){oy(n,e,t,i,r);continue}let o=i==="shared"||i==="gorge"&&r<0||i==="marsh"&&r>0,a=Math.ceil((t-e)/(te.id==="delta"?3.6:10));for(let c=0;c<a;c++){let l=e+(t-e)*s();if(!(!o&&(l<he+35||l>qe-30)))if(te.id==="basalt")ay(n,s,l,i,r);else{let h=Fs(l,i,r,.7+s()*4.8);h&&Up(n,s,h,1.05+s()*.71)}}if(o)if(te.id==="basalt")for(let c=Math.ceil((e-37)/154)*154+37;c<t;c+=154)c>=0&&r<0&&cy(n,c,i,r);else{let c=r>0?167:139,l=r>0?34:22;for(let h=Math.ceil((e-l)/c)*c+l;h<t;h+=c){let u=Fs(h,i,r,7.3,3.3);h<0||!u||(r>0?ly(n,u,.4+.47*Math.sin(h*.02)):hy(n,u))}}}}var Dp,Op=mt(()=>{pu();en();Xt();Qi();Bo();Dp=["#454c58","#596372","#68737b","#515e66","#78837e"]});function kp(n,e,t,i,s,r){let[o,a,c]=t,l=7,h=e()*.8,u=Array.from({length:l},()=>.8+e()*.28),d=[[0,1.08],[.28,1],[.32,1.02],[.63,.89],[.72,.91],[.95,.72],[1,.58]].map(([m,_])=>u.map((g,f)=>{let v=h+f*2*Math.PI/l;return[o+Math.cos(v)*i*_*g+s*.052*m,a+s*m,c+Math.sin(v)*r*_*g]})),p=["#a2735c","#c69a77","#b58568","#ca9c77","#b78969","#c59b75"];for(let m=0;m<d.length-1;m++)for(let _=0;_<l;_++){let g=(_+1)%l;n.quad(d[m][_],d[m][g],d[m+1][g],d[m+1][_],p[m])}for(let m=0;m<l;m++)n.tri([o+s*.052,a+s,c],d.at(-1)[m],d.at(-1)[(m+1)%l],"#b7a377")}function uy(n,e,t,i,s,r,o=.1){n.form("trunk",Mn(e,t,s*.47,i),[o,s,o],r)}function Fr(n,e,t,i,s,r,o,a,c){n.form("box",Mn(e,t,s,i),[r,o,a],c,[0,-jt(e,i),0])}function dy(n,e,t,i,s,r){let o=Math.ceil(s/.68);for(let a=0;a<o;a++)Fr(n,e+a*s/o,t,i,.76,r,.17,s/o-.035,a%3?"#bd9764":"#ae8959")}function Bp(n,e,t,i,s){let r=Un(e,t);if(!r)return;let[o,a,c]=r,l=s?6.3:4.4,h=s?3.6:2.4,u=s?8:5.6,d=a+.22;n.form("box",[o,d+h/2,c],[l,h,u],s?"#b9b69d":"#a88d62");let p=d+h,m=p+(s?1.7:1.5),_=l/2+.4,g=u/2+.45;for(let f of[-1,1])n.quad([o+f*_,p,c-g],[o,m,c-g],[o,m,c+g],[o+f*_,p,c+g],s?"#50716f":"#827b58"),n.tri([o-_,p,c+f*g],[o+_,p,c+f*g],[o,m,c+f*g],"#a99c79");for(let f of[-1,1])for(let v of[-.25,.25])n.form("box",[o+f*(l*.5+.015),d+h*.56,c+v*u],[.045,h*.4,u*.23],s?"#4e6b69":"#665c45");s&&(n.form("trunk",[o+l*.32,p+2,c-u*.3],[.36,5,.36],"#956f58"),n.form("barrel",[o+l*.32,p+4.2,c-u*.3],[.4,.34,.4],"#c9bc9b"))}function fy(n,e){for(let t of e.parts)n.form("box",t.center.toArray(),t.size,t.color,[0,0,t.angle])}function py(n,e,t){let{s:i,u:s,radius:r,height:o,side:a,kind:c,feature:l}=e,h=(u,d,p=i)=>Mn(p,s+u+st(p,t)-st(i,t),d,t);if(c==="gate"){let u=t==="canal"?"#397e80":"#388985";n.form("barrel",h(0,.3),[r,2*(Fi.top-.3),r],"#f4dfaa"),n.form("box",h(0,1.3),[.37,2.45,.47],u);for(let d of[1.45,1.83])n.form("box",h(0,d),[.4,.15,.5],"#f3cf8d");n.form("box",h(0,o-.115),[.49,.23,.56],"#cdf3c9"),t==="canal"&&(Qt(n,h(0,2.28),h(-a*.8,3.06),.19,.24,u),n.form("box",h(-a*.8,3.06),[.37,.36,.35],"#3a5d59"),n.form("stone",h(-a*.8,3.07,i-.2),[.14,.15,.065],"#a7db9f"))}else if(c==="flag"){let u=Ir[t].find(p=>p.approach===l.start),d=u&&a===(u.side==="right"?1:-1);Qt(n,h(0,0),h(0,o),r*2,r*2,"#695f4b"),n.tri(h(0,o+.04),h(a*.79,o-.22),h(0,o-.47),d?"#eab34e":"#e8773b")}else if(c==="buoy"){let u=r/.32;n.form("barrel",Mn(i,s,.15*u,t),[r,.34*u,r],"#ede4bc"),n.form("cone",Mn(i,s,.48*u,t),[.3*u,.48*u,.3*u],t==="gorge"?"#d27e43":"#d77143")}else{let u=c==="quay"?My(i):c==="stake"?"#92764d":c==="launch"?"#7a634a":"#795e47";uy(n,i,s,t,o,u,r),c==="stake"&&Fr(n,i,s,t,1.21,.19,.28,.12,"#e5dfac"),c==="launch"&&Fr(n,i,s,t,.74,.25,.16,.25,"#e3783d")}}function my(n,e){let t=e.vertices,i=t.at(-1);for(let s=0;s<e.count;s++){let r=(s+1)%e.count;for(let o=0;o<t.length-1;o++)n.quad(t[o][s],t[o][r],t[o+1][r],t[o+1][s],e.color);n.tri([e.x,e.base+e.height,-e.s],i[s],i[r],tp)}}function gy(n,e,t){let i=(l,h,u)=>Mn(l,st(l,t)+h,u,t),s=e.width/2,r=(l,h,u=.044)=>i(l,e.offset+h,ni(e,l)+u);if(e.kind==="gate"){for(let l=0;l<3;l++)for(let h of[-1,1]){let u=e.start-4+l*1.45;n.quad(i(u,e.offset,.078),i(u-.8,e.offset+h*s*.7,.078),i(u-1.1,e.offset+h*s*.7,.078),i(u-.32,e.offset,.078),"#f9e5aa")}return}if(e.kind==="ledge"){for(let l=-3;l<=3;l++){let h=l*s*.24;n.quad(r(e.end-.9,h-.085,.07),r(e.end,h-.12,.07),i(e.end+2.32,e.offset+h,.13),i(e.end+1.1,e.offset+h+.16,.32),"#dfefe1")}return}let o=Math.ceil((e.end-e.start)/.86),a=(e.end-e.start)/o;for(let l=0;l<o;l++){let h=e.start+l*a;n.quad(r(h,-s),r(h,s),r(h+a-.023,s),r(h+a-.023,-s),e.boosted?l%3?"#dc8042":"#e9954a":l%2?"#bf995f":"#cbab72");for(let u of[-1,1])n.quad(r(h,u*s),r(h+a,u*s),i(h+a,e.offset+u*s,.02),i(h,e.offset+u*s,.02),"#967449");if(l%3===1)for(let u of[-1,1])n.quad(r(h+.7,0,.084),r(h,u*s*.74,.084),r(h-.25,u*s*.74,.084),r(h+.4,0,.084),"#f5e4b2")}if(!e.boosted){let l=e.start+.22;n.quad(r(l,-s,.06),r(l,s,.06),r(l+.54,s,.06),r(l+.54,-s,.06),"#e78942")}let c=Ir[t].find(l=>l.approach===e.start);if(c){let l=c.side==="right"?1:-1,h=l*(s-.82),u=l*(s-.14),d=e.start+.62;n.quad(r(d,h,.095),r(d,u,.095),r(d+3.4,u,.095),r(d+3.4,h,.095),"#353e35");for(let p=0;p<3;p++){let m=d+.13+p*1.02;n.quad(r(m,h,.108),r(m+.32,u,.108),r(m+.81,u,.108),r(m+.49,h,.108),"#efbb58")}}}function _y(n){let e=Dn(87314);for(let[t,i,s,r]of[[-1,49,4,11],[-1,62.5,4.5,17],[-1,69,4,10],[1,59,5,12],[1,69,3,17]])for(let o=0;o<r;o++){let a=i+he-72+(e()+e()-1)*s,c=As(a,t)+(e()-.5)*2.3,l=.1+e()*.18;n.form("stone",Mn(a,c,.009),[l,.02,l*(.95+e()*.58)],es(e,["#8baea0","#91b4a6","#9ab9a8"]),[0,e()*6,0])}}function xy(n){let e=Dn(3926);function t(r,o,a){let c=ze(r,Ct[o]).right,l=ze(r,Ct[o+1]).left,h=c+(l-c)*a;return{p:Un(r,h),width:l-c}}for(let[r,o,a,c,l]of[[79,.47,.5,.4,.76],[82,.53,.83,.71,1.32],[85.5,.43,1.25,1.32,1.8],[88,.7,.83,.84,1.4],[92,.27,1.26,.82,2.1],[97,.6,1.32,.72,1.7]]){let{p:h,width:u}=t(r,0,o);h[1]-=c*.2,n.form("stone",h,[Math.min(a,u*.38),c,l],es(e,["#aa8e73","#9a8978","#b89a79"]),[.12,e()*.8,.08])}let i=t(93.5,0,.49).p;i[1]-=.17,Oo(n,e,i,3.7,2);for(let r=0;r<28;r++){let o=79+e()*21,{p:a,width:c}=t(o,1,.23+e()*.54);Us(n,e,a,Math.min(.6+e()*.45,c*.36))}let s=t(92,1,.54).p;s[1]-=.17,cu(n,e,s,3.7)}function vy(n,e,t,i,s){let r=t-e,o=()=>e+s()*r;for(let a of[-1,1]){let c=Math.ceil(r/(i==="marsh"?4.5:8));for(let l=0;l<c;l++){let h=o(),u=ze(h,i),d=a<0?u.left:u.right,p=2.1+s()*(i==="marsh"?17:26),m=d+a*p,_=Un(h,m);if(_&&!(h>=he&&h<he+40&&(p<10||m>ze(h,"gorge").right&&m<ze(h,"marsh").left)))if(_[1]-=.27,i==="gorge"&&l%3!==2){let g=3.6+s()*8.7;kp(n,s,_,2+s()*2.2,g,3+s()*3.6)}else i==="marsh"&&l%5===0?cu(n,s,_,3.7+s()*2.8):Oo(n,s,_,3.2+s()*5.6,i==="gorge"||l%5===2?2:1)}for(let l=0;l<Math.ceil(r/(i==="marsh"?1.8:3.6));l++){let h=o(),u=ze(h,i),d=a<0?u.left:u.right,p=d-a*s()*1.05;if(i==="marsh"||i==="shared"&&s()<.4)Us(n,s,Mn(h,p,.04,i),.7+s()*.47);else{let m=.28+s()*(i==="gorge"?1.06:.46);n.form("stone",Mn(h,p,.03,i),[m*1.35,m*.55,m*.86],es(s,i==="gorge"?["#af947a","#ad886f","#b9a38a"]:["#9ea58f","#acaf96"]),[.12,s()*5,.14])}}if(i==="canal")for(let l=Math.ceil(e/12)*12;l<t;l+=12){if(l<he+23)continue;let h=p=>{let m=ze(p,i);return a<0?m.left:m.right},u=h(l),d=h(l+8);Qt(n,Mn(l,u,.37,i),Mn(l+8,d,.37,i),.45,.59,"#9ca496")}}}function yy(n,e,t,i,s){let r=c=>c>=e&&c<t,o=t-e,a=()=>e+s()*o;Ht?Np(n,e,t,i,s):vy(n,e,t,i,s);for(let c of Jc[i]){let l=Math.max(e,c[0]),h=Math.min(t,c[1]);if(l>=h)continue;let u=Math.ceil((h-l)/1.6);for(let d=0;d<u;d++){let p=l+(h-l)*d/u,m=l+(h-l)*(d+1)/u;for(let _ of[-1,-.5,0,.5])n.quad(Wn(p,_,i),Wn(m,_,i),Wn(m,_+.5,i),Wn(p,_+.5,i),Ht?es(s,Ht.island):i==="gorge"?es(s,["#b59072","#ba9778"]):i==="marsh"?es(s,["#bab67e","#acb37c"]):i==="shared"?es(s,Math.abs(_+.25)>.5?["#dbcca1","#d0bc94"]:["#c1b78a","#bfb486"]):"#afa68a")}if(Ht){Fp(n,l,h,i,s);continue}for(let d=0;d<Math.max(1,Math.ceil((h-l)/2));d++){let p=l+(h-l)*s(),m=Wn(p,s()*1.6-.8,i);i==="shared"?c[2]>0&&p>c[0]+2?Us(n,s,m,.63+s()*.23):n.form("stone",m,[.45+s()*.37,.3+s()*.23,.59+s()*.33],"#9f9e87",[.09,s()*4,.12]):i==="marsh"?Us(n,s,m,.7+s()*.45):n.form("stone",m,[.75,.57,.9],i==="gorge"?"#a18069":"#9caa96",[.12,s()*4,.19])}if(i==="shared"&&c[2]>0){let d=c[0]+(c[1]-c[0])*.66;r(d)&&Us(n,s,Wn(d,.12,i),.94)}if(i==="marsh")for(let d=l+.4;d<h;d+=2.4)for(let p of[-1,1]){let m=Wn(d,p*(.63+s()*.21),i);Us(n,s,m,1.05+s()*.46)}}for(let c of Hn[i])r(c.start)&&gy(n,c,i);for(let c of ll[i])r(c.s)&&my(n,c);for(let c of Ir[i])r(c.s)&&fy(n,c);for(let c of ol[i])r(c.s)&&py(n,c,i);for(let c of rl[i]||[])r(c.s)&&dy(n,c.s,c.u,i,c.length,c.width);if(!Ht&&i==="gorge"){for(let c of[137,355,573,859,1061,1213])if(r(c)){let l=st(c,i);for(let h of[-1,1]){let u=Un(c,l+h*(ze(c,i).half+3.4));u&&kp(n,s,u,3.8,13+6*s(),5.5)}}}else if(!Ht&&i==="canal"){for(let c of[132,368,581,831,1062,1223])if(r(c)){let l=ze(c,i);Bp(n,c,l.right+5.5,i,!0);let h=Un(c+9,l.right+7.7);if(h){let[u,d,p]=h;for(let m of[-1.3,1.3])for(let _ of[-1.3,1.3])n.form("box",[u+m,d+2.7,p+_],[.2,5.7,.2],"#607a75");n.form("barrel",[u,d+6.3,p],[2.35,2.5,2.35],"#729a9b"),n.form("cone",[u,d+8,p],[2.55,1.1,2.55],"#ab7759")}}}else if(!Ht&&i==="marsh"){for(let{s:c}of rl.marsh)if(r(c)){let l=ze(c,i);Bp(n,c+3,l.right+4.9,i,!1);let h=l.right-2.8;n.form("stone",Mn(c+3,h,.18,i),[.58,.25,2.12],"#ad8153",[0,-jt(c,i),0]);for(let u of[2.35,3.65])Fr(n,c+u,h,i,.34,.79,.09,.27,"#d8b47b")}for(let c=0;c<Math.ceil(o/2.4);c++){let l=a(),h=st(l,i),u=s()>.5?1:-1,d=h+u*(ze(l,i).half*(.51+s()*.43)),p=Vn(l,i);if(p&&d>p.left&&d<p.right)continue;let m=.2+s()*.39;n.form("barrel",Mn(l,d,.023,i),[m,.035,m*.83],es(s,["#8d9d5b","#91a56a","#869e64"]),[0,s()*6,0]),c%7===0&&n.form("stone",Mn(l,d,.086,i),[.13,.075,.13],"#ead5b4")}}if(i==="shared"&&r(0))for(let c=0;c<9;c++)Fr(n,-4+c*.4,0,i,.105,2.65,.18,.37,c%2?"#ae865a":"#bc9568");if(i==="shared"&&r(wt))for(let c=0;c<30;c++)for(let l=0;l<2;l++)Fr(n,wt,(c-14.5)*.88,i,3.9-l*.37,.89,.37,.12,(c+l)%2?"#264a45":"#f5e9c8")}function My(n){return Math.round(n/12)%2?"#e0ac6c":"#6f8d89"}function mu(n,e){return n>=0&&n<he&&e!=="shared"?ws(n,e):Rs(n,e)}function Sy(n){let e=new vt;e.setAttribute("position",new Xe([-.5,0,.6,-.1,0,-.64,.5,0,-.43,-.5,0,.6,.5,0,-.43,.05,0,.45],3));let t=new gs(e,new Zt({color:"#ccede0",transparent:!0,opacity:.72,depthWrite:!1,side:Dt}),600);t.frustumCulled=!1,t.instanceMatrix.setUsage(ys),n.add(t);let i=new Yt,s=Array.from({length:31},(r,o)=>{let a=Dn(2971+o*571);return Array.from({length:12},()=>[a(),a(),a(),a()])});return(r,o,a)=>{let c=0;for(let l=Math.floor((o-11)/7);l<=Math.ceil((o+126)/7);l++){let h=s[(l%31+31)%31];for(let u=0;u<h.length;u++){let[d,p,m,_]=h[u],g=(r*(.48+m*.23)+p)%1,f=l*7+d*6.4+g*1.9,v=f>=he&&f<qe?a?[a]:Ct:["shared"];for(let S of v){if(c>=600)break;let x=S==="shared"&&f>=0&&f<he,T=ze(f,S),b=u<(x?10:8),A=x?u<4?"gorge":u<6?"canal":"marsh":S,R=b?mu(f,A)+(p-.5)*(x?2.35:S==="marsh"?5:3.7):T.center+(p-.5)*T.half*1.75,y=Vn(f,S);if(y&&R>y.left&&R<y.right)continue;let M=ot(f,R),C=Math.max(.03,Math.sin(g*Math.PI));i.position.set(M.x,He(f,S)+Rr(f,R,S)+.05,M.z);let D=b&&f>=0&&f<he+40?Math.atan((ot(f+.4,mu(f+.4,A)).x-ot(f-.4,mu(f-.4,A)).x)/.8):jt(f,S);i.rotation.y=-D+(b?.04:1.15),i.scale.set((b?x?.18:.14:.09)*C,1,(b?1.1+_*1.65:.46+_*.65)*(.5+.5*C)),i.updateMatrix(),t.setMatrixAt(c++,i.matrix)}}}t.count=c,t.instanceMatrix.needsUpdate=!0}}function zp(n){let e=wp(),t=Sy(n),i=[],s=[-60,0,he];for(let a=he+64;a<qe;a+=64)s.push(a);for(let a=qe;a<wt;a+=64)s.push(a);for(let a=wt;a<=wt+192;a+=64)s.push(a);for(let a=0;a<s.length-1;a++)i.push({lo:s[a],hi:s[a+1],group:null,index:a});function r(a){let{lo:c,hi:l,index:h}=a,u=c>=he&&c<qe?Ct:["shared"];a.rotors=[];let d=new cn,p=new Gn;Tp(p,c,l,u,Dn(1931+te.seed+h*1957)),c===0&&_y(p),c===he&&!Ht&&xy(p);for(let m of u){let _=new Gn;yy(_,c,l,m,Dn(7401+te.seed+h*1049+(Ct.indexOf(m)+1)*317)),d.add(_.mesh()),(te.id==="turbine"||te.id==="windreach")&&Pp(a.rotors,d,c,l,m)}d.add(Ap(c,l,u,e.material),p.mesh()),a.group=d,n.add(d)}function o(a){n.remove(a.group),a.group.traverse(c=>{c.isMesh&&(c.geometry.dispose(),c.material!==e.material&&c.material.dispose())}),a.group=null,a.rotors=null}return(a,c=0,l="")=>{e.clock.value=a;for(let h of i){let u=h.hi>=c-39&&h.lo<=c+220;if(u&&!h.group&&r(h),u)for(let d of h.rotors)d.mesh.rotation.z=d.phase+a*d.rate;h.group&&(h.group.visible=u,!u&&(h.hi<c-165||h.lo>c+340)&&o(h))}t(a,c,l)}}var es,Hp=mt(()=>{en();Qo();Lp();Op();ti();Qi();tu();il();al();Bo();Xt();es=(n,e)=>e[Math.floor(n()*e.length)]});function by(n,e,t,i){if(!n.length)return n;let s=[],r=n.at(-1),o=(r[e]-t)*i;for(let a of n){let c=(a[e]-t)*i;o<0!=c<0&&s.push(r.clone().lerp(a,o/(o-c))),c>=0&&s.push(a),r=a,o=c}return s}function Ey(n,e){let t=e==="z"?["x","y"]:["y","z"],[i,s]=t,r=new Map;for(let l of n)r.set(Math.round(l[i]*1e5)+","+Math.round(l[s]*1e5),l);let o=[...r.values()].sort((l,h)=>l[i]-h[i]||l[s]-h[s]);if(o.length<3)return[];let a=(l,h,u)=>(h[i]-l[i])*(u[s]-l[s])-(h[s]-l[s])*(u[i]-l[i]);function c(l){let h=[];for(let u of l){for(;h.length>=2&&a(h.at(-2),h.at(-1),u)<=1e-9;)h.pop();h.push(u)}return h.pop(),h}return[...c(o),...c([...o].reverse())]}function Ty(n,e){let t=new Mt().copy(n.matrixWorld).invert(),i=[],s=new Le(e<=3?"#be9563":"#b5ab91");for(let[o,a]of[[null,-.56],[-.56,.58],[.58,null]])for(let c of[-1,1]){let l=[["x",.025,c]];o!==null&&l.push(["z",o,1]),a!==null&&l.push(["z",a,-1]),i.push({planes:l,edges:l.map(()=>[]),vertices:[],colors:[]})}function r(o,a,c){for(let l=1;l+1<a.length;l++)for(let h of[a[0],a[l],a[l+1]])o.vertices.push(h),o.colors.push(c.r,c.g,c.b)}return n.traverse(o=>{if(!o.isMesh)return;let a=o.geometry,c=a.attributes.position,l=a.attributes.color,h=a.index,u=new Mt().multiplyMatrices(t,o.matrixWorld),d=m=>new U().fromBufferAttribute(c,h?h.getX(m):m).applyMatrix4(u),p=new Le;for(let m=0;m<(h?h.count:c.count);m+=3){let _=[d(m),d(m+1),d(m+2)],g=h?h.getX(m):m;l&&p.setRGB(l.getX(g),l.getY(g),l.getZ(g));for(let f of i){let v=_;for(let[S,x,T]of f.planes)if(v=by(v,S,x,T),!v.length)break;v.length<3||(r(f,v,p),f.planes.forEach(([S,x],T)=>{for(let b of v)Math.abs(b[S]-x)<1e-6&&f.edges[T].push(b)}))}}}),i.filter(o=>o.vertices.length).map(o=>{o.planes.forEach(([h],u)=>r(o,Ey(o.edges[u],h),s));let a=new U;for(let h of o.vertices)a.add(h);a.multiplyScalar(1/o.vertices.length);let c=[];for(let h of o.vertices)c.push(h.x-a.x,h.y-a.y,h.z-a.z);let l=new vt;return l.setAttribute("position",new Xe(c,3)),l.setAttribute("color",new Xe(o.colors,3)),l.computeVertexNormals(),{geometry:l,center:a}})}function Gp(n){let e=new Ri({vertexColors:!0,side:Dt,flatShading:!0}),t=new xt(new Ai(.8,1,23),new Zt({color:"#e2f2df",transparent:!0,depthWrite:!1,side:Dt}));t.rotation.x=-Math.PI/2,t.visible=!1,n.add(t);let i=null,s=[],r=0,o=null;function a(){for(let h of s)n.remove(h.mesh),h.mesh.geometry.dispose();s=[],i=null,o=null,t.visible=!1}function c(h,u){a(),i=u.crash,r=0,h.updateMatrixWorld(!0);let d=Dn(Math.round(u.s*10)+u.level*197),p=new U(1,0,0).applyQuaternion(h.quaternion).setY(0).normalize(),m=new U(0,0,1).applyQuaternion(h.quaternion).setY(0).normalize(),_=Math.min(1.72,.65+u.crash.speed/34),g=Ty(h,u.level);for(let f=0;f<7;f++){let v=new xo(1);v.scale(.05+d()*.045,.06+d()*.07,.12+d()*.17);let S=new Le(u.level<=3?"#c5a579":f%2?"#e98646":"#ead3a0"),x=[];for(let T=0;T<v.attributes.position.count;T++)x.push(S.r,S.g,S.b);v.setAttribute("color",new Xe(x,3)),g.push({geometry:v,center:new U((d()-.5)*.85,.34,d()-.51),chip:!0})}for(let f of g){let v=new xt(f.geometry,e),S=h.localToWorld(f.center.clone());v.position.copy(S),v.quaternion.copy(h.quaternion),v.scale.copy(h.scale);let x=p.clone().multiplyScalar((f.center.x>=0?1:-1)*(1+1.45*d())*_*(f.chip?1.65:1));x.addScaledVector(m,(.2+.77*d())*_),x.y=(f.chip?-.45:-1.35)+d()*2.5,s.push({mesh:v,origin:S,velocity:x,initial:v.quaternion.clone(),spin:new U(d()-.5,d()-.5,d()-.5).normalize(),rate:(1.2+2.1*d())*_}),n.add(v)}}function l(h,u,d,p){if(!d.crash){i&&a();return}if(i!==d.crash&&c(u,d),!(r>=1.85)){r=p?Math.max(r,.34):Math.min(1.85,r+h);for(let m of s){let{mesh:_,origin:g,velocity:f}=m,v=r,S=He(-g.z,Nt(-g.z,d.route))+.055,x=(f.y+Math.sqrt(f.y**2+26*Math.max(0,g.y-S)))/13,T=Math.min(v,x)+.22*(1-Math.exp(-3*Math.max(0,v-x)));_.position.set(g.x+f.x*T,g.y+f.y*v-6.5*v*v,g.z+f.z*T);let b=He(-_.position.z,Nt(-_.position.z,d.route))+.055;_.position.y<=b&&(_.position.y=b,o||(o={point:_.position.clone(),time:r})),_.quaternion.copy(m.initial),_.rotateOnWorldAxis(m.spin,m.rate*T)}if(o&&!p){let m=r-o.time;t.visible=m<.68,t.position.copy(o.point),t.position.y+=.025,t.scale.setScalar(.38+m*3.8),t.material.opacity=.65*Math.max(0,1-m/.68)}p&&(r=1.85)}}return l}var Vp,gu=mt(()=>{ti();Xt();Qi();Vp=.86});function Wp(n){let e=[],t=[],i=[],s=Dn(51473),r=["#fff5d9","#e8fff5","#26464a"].map(h=>new Le(h));for(let h=0;h<4;h++){let u=h<2,d=u?17:11,p=h%2===0?-1:1;for(let m=0;m<d;m++){let _=2*(m+.12+.76*s())/d-1,g=s(),f=s(),v=s(),S=(m+h)%4===0?-.08:.08+.71*s(),x=s(),T=r[x<.2?2:x<.58?1:0];for(let b of[0,-1,1])e.push(u?p:_,u?_:p,b),t.push(g,f,S,v),i.push(T.r,T.g,T.b)}}let o=new vt;o.setAttribute("position",new Xe(e,3)),o.setAttribute("stroke",new Xe(t,4)),o.setAttribute("ink",new Xe(i,3));let a={viewport:{value:new nt(1,1)},strength:{value:0},time:{value:0}},c=new yn({uniforms:a,vertexShader:wy,transparent:!0,depthTest:!1,depthWrite:!1,fragmentShader:`
      varying vec3 vInk;
      varying float vOpacity;
      void main() {
        gl_FragColor = vec4(vInk, vOpacity);
        #include <colorspace_fragment>
      }`}),l=new xt(o,c);return l.frustumCulled=!1,l.visible=!1,l.renderOrder=20,n.add(l),(h,u,d,p,m)=>{if(!d||!p||!m){l.visible=!1,a.strength.value=0,a.time.value=0;return}let _=Oc.clamp((u*3.6-60)/50,0,1),g=a.strength.value,f=Oc.damp(g,_,_>g?9:6,h);a.strength.value=f,l.visible=f>.008,l.visible&&(a.time.value+=h*(.8+1.2*f),a.viewport.value.set(p,m))}}var wy,Xp=mt(()=>{ti();cl();wy=`
  uniform vec2 viewport;
  uniform float strength;
  uniform float time;
  attribute vec4 stroke;
  attribute vec3 ink;
  varying vec3 vInk;
  varying float vOpacity;

  void main() {
    vec2 focus = vec2(0.0, 0.13);
    vec2 ray = position.xy - focus;
    vec2 pixelRay = ray * viewport;
    vec2 normal = normalize(vec2(-pixelRay.y, pixelRay.x));
    float compact = 1.0 - smoothstep(420.0, 720.0, min(viewport.x, viewport.y));
    float reach = strength * (1.0 - 0.24 * compact);
    float phase = fract(stroke.x + time * mix(0.80, 1.18, stroke.w));
    float tip = 0.85 - 0.22 * reach + 0.075 * (1.0 - stroke.y) + phase * (0.18 + 0.11 * reach);
    float span = 0.09 + (0.11 + 0.15 * stroke.y) * reach;
    float widthPx = (0.80 + 0.95 * stroke.y + 0.85 * reach) * (1.0 - 0.24 * compact);
    float outer = abs(position.z);
    vec2 point = focus + ray * (tip + outer * span);
    point += position.z * normal * widthPx * 2.0 / viewport;
    gl_Position = vec4(point, 0.0, 1.0);

    float density = smoothstep(stroke.z, stroke.z + 0.18, strength * (1.0 - 0.12 * compact));
    float life = smoothstep(0.0, 0.16, phase) * (1.0 - smoothstep(0.70, 1.0, phase));
    vInk = ink;
    vOpacity = density * life * smoothstep(0.0, 0.14, strength) * mix(0.23, 0.83, outer);
  }`});function qp(n){let e=new cn,t=new Gn;if(n<=3){let c=.98+.07*n,l=1.93+n*.13,h=["#a88558","#bc9968","#a78152","#c4a273"];for(let u=0;u<4;u++){let d=(u-1.5)*c/4;t.form("box",[d,.1,.06+(u%2?.025:-.025)],[c/4-.015,.22,l-Math.abs(u-1.5)*.065],h[u])}for(let u of[-1,1])t.form("box",[u*(c/2-.045),.25,.03],[.085,n===1?.17:.26,l-.06],n===1?"#987448":"#b48b51"),n>=2&&t.tri([u*c*.49,.28,-l*.46],[0,.33,-l*.67],[0,.29,-l*.44],"#c9a672"),n===3&&t.form("box",[u*c*.53,.11,-.04],[.12,.15,l*.85],"#6b8783");for(let u of[-.55,.57])t.form("box",[0,.231,u],[c*.95,.035,.13],n===1?"#7b8075":"#68877b");t.form("box",[0,.285,.02],[.63,.12,.6],"#5d6559");for(let u of[-.135,.135])t.form("barrel",[u,.415,-.03],[.118,.48,.118],n===1?"#6c7e69":"#b57641",[Math.PI/2,0,0]);return t.form("box",[0,.531,-.01],[.51,.03,.095],"#574e40"),t.form("box",[0,.25,l*.5],[.25,.31,.23],"#465553"),t.form("barrel",[0,.45,l*.47],[.14,.3,.14],n>=3?"#c07943":"#8b9180",[Math.PI/2,0,0]),t.form("box",[.34,.48,.43],[.028,.52,.027],"#545b50",[.14,0,-.05]),e.add(t.mesh()),e}let i=[[-1.62,.055,.45],[-1.22,.38,.47],[-.69,.65,.45],[.15,.73,.41],[1.05,.65,.36],[1.3,.5,.35]],s=n<6?"#d79356":n>=9?"#f16c33":"#f58a44";function r(c,l){let[h,u,d]=c;return[[l*u*.23,-.07,h],[l*u*.82,.062,h],[l*u*.99,.14,h],[l*u,.235,h],[l*u*.95,d,h]]}for(let c=0;c<i.length-1;c++){for(let _ of[-1,1]){let g=r(i[c],_),f=r(i[c+1],_);for(let v=0;v<4;v++)t.quad(g[v],f[v],f[v+1],g[v+1],["#234852","#da6435","#f4ead4","#ef7337"][v])}let[l,h,u]=i[c],[d,p,m]=i[c+1];t.quad([-h*.95,u,l],[h*.95,u,l],[p*.95,m,d],[-p*.95,m,d],s);for(let _ of[-1,1])t.quad([_*h*.68,u+.008,l],[_*h*.82,u+.008,l],[_*p*.82,m+.008,d],[_*p*.68,m+.008,d],"#fff0ce")}for(let c of[0,i.length-1]){let l=r(i[c],-1),h=r(i[c],1);for(let u=0;u<4;u++)t.quad(l[u],h[u],h[u+1],l[u+1],u===2?"#fae6c6":"#ce6436")}let o=[[-.46,.45,-.73],[.46,.45,-.73],[.48,.4,.63],[-.48,.4,.63]],a=[[-.29,.68,-.31],[.29,.68,-.31],[.32,.7,.34],[-.32,.7,.34]];if(n>=6){for(let c=0;c<4;c++)t.quad(o[c],o[(c+1)%4],a[(c+1)%4],a[c],["#548380","#254c54","#365955","#346b71"][c]);t.quad(...a,"#28535b"),t.form("box",[0,.708,.04],[.6,.025,.12],"#f6d696")}else t.quad(...o,"#665d4e"),t.form("box",[0,.48,.13],[.64,.15,.41],"#d3b889"),n===5&&t.quad(o[0],o[1],a[1],a[0],"#789d99");t.form("box",[0,.381,.92],[.65,.055,.34],"#325254");for(let c=-2;c<=2;c++)t.form("box",[c*.115,.416,.92],[.045,.018,.24],"#90a49a");t.form("box",[0,.25,1.34],[.28,.35,.24],"#2e4847"),t.form("box",[.4,.74,.55],[.03,.61,.03],"#475d55",[.16,0,-.09]),t.form("stone",[.427,1.042,.59],[.047,.075,.047],"#ec6435");for(let c of[-.53,.53])t.form("box",[c,.44,.56],[.07,.14,.38],"#ef9a50",[.1,0,0]);if(n>=7){for(let c of[-1,1])t.form("box",[c*.48,.53,.94],[.06,.36,.14],"#355652",[-.23,0,0]);t.form("box",[0,.72,.96],[1.32,.095,.29],"#ef783c",[-.1,0,0])}if(n>=8)for(let c of[-1,1])t.form("stone",[c*.67,.16,.18],[.2,.18,1.15],"#e97b41",[0,c*.05,0]),t.form("box",[c*.64,.3,.46],[.14,.06,.94],"#fff1ca");if(n>=9)for(let c of[-1,1]){let l=c*(n===10?.48:.4),h=n===10?1.15:.91;t.form("box",[l,.2,1.38],[.15*h,.35,.23*h],"#28494c"),t.form("box",[l,.15,1.44],[.33*h,.035,.3*h],"#66847d");let u=[[-.64,-1],[.64,-1],[1,-.63],[1,.64],[.65,1],[-.65,1],[-1,.64],[-1,-.63]],d=(m,_,g,f)=>u.map(([v,S])=>[l+v*_*h,m,f+S*g*h]),p=[d(.25,.14,.19,1.37),d(.34,.18,.23,1.38),d(.54,.175,.226,1.37),d(.61,.128,.164,1.34)];for(let m=0;m<3;m++)for(let _=0;_<8;_++){let g=(_+1)%8;t.quad(p[m][_],p[m][g],p[m+1][g],p[m+1][_],["#304b4c","#33545a","#da713d"][m])}for(let m=0;m<8;m++)t.tri([l,.619,1.34],p[3][m],p[3][(m+1)%8],"#e58a4c");for(let m of[.38,.43,.48])t.form("box",[l,m,1.375+.228*h],[.18*h,.018,.016],"#a2b2a2");t.form("box",[l,.621,1.34],[.075,.015,.27*h],"#ffdf9a"),t.form("barrel",[l,.085,1.49],[.048,.19,.048],"#586a6a",[Math.PI/2,0,0])}return n===10&&(t.form("box",[0,.73,-.1],[.11,.022,.53],"#ffefc9"),t.form("box",[0,.72,.92],[1.52,.05,.1],"#f9dfab"),e.scale.set(1.09,1.06,1.14)),e.add(t.mesh()),e}function Ay(n){let t=new Array(190),i=new Yt,s=new vt;s.setAttribute("position",new Xe([-.5,0,.6,-.15,0,-.6,.5,0,-.43,-.5,0,.6,.5,0,-.43,.15,0,.43],3));let r=new Zt({color:"#e1f8e9",side:Dt,transparent:!0,opacity:.85,depthWrite:!1}),o=new gs(s,r,190);o.frustumCulled=!1,o.instanceMatrix.setUsage(ys),n.add(o);let a=0,c=0;function l(){t.fill(null),a=0,c=0,o.count=0}l();function h(u,d,p,m){c+=u;let _=!p.ramp||p.ramp.kind==="ramp"&&p.altitude<.25;if(m&&!p.flying&&_&&p.speed>.6&&c>Math.max(.022,.73/p.speed)){c=0;let f=-d.rotation.y,v=Math.cos(f),S=Math.sin(f),x=Math.sin(f),T=-Math.cos(f);for(let b of[-1,1]){let A=.4+.07*Math.sin(a*3.9),R=(.65+p.speed*.095)*b,y=p.s-.83*Math.cos(f),M=He(y,Nt(y,p.route));if(t[a]={x:d.position.x-x*.83+v*A*b,z:d.position.z-T*.83+S*A*b,dx:v*R-x*.2,dz:S*R-T*.2,angle:-f+b*.31,age:0,long:p.speed*.082,life:.61+p.speed*.025,boost:p.boostTime>0||p.jetTime>0||p.level>=9,base:M},a=(a+1)%190,p.speed>8){let C=p.landTime>0||p.hitTime>.48?1.8:p.jetTime>0?1.35:1,D=.5+.46*Math.sin(a*7.14);t[a]={x:d.position.x+v*A*b,z:d.position.z+S*A*b,dx:v*R*C*1.25-x*.65,dz:S*R*C*1.25-T*.65,angle:-f+b*.5,age:0,long:.21+D*.28,life:.27+D*.24,splash:(1.7+D*1.4)*C,base:M},a=(a+1)%190}}}let g=0;for(let f of t){if(!f||f.age>=f.life)continue;f.age+=u;let v=Math.max(.001,1-f.age/f.life),S=f.splash?Math.max(0,f.splash*f.age-4.9*f.age*f.age):.015*v;i.position.set(f.x+f.dx*f.age,f.base+.055+S,f.z+f.dz*f.age),i.rotation.set(f.splash?.57:0,f.angle,0),i.scale.set((f.splash?.115:f.boost?.35:.24)*v+.02,1,(.2+f.long)*(.35+.65*v)),i.updateMatrix(),o.setMatrixAt(g++,i.matrix)}o.count=g,o.instanceMatrix.needsUpdate=!0}return{clear:l,update:h}}function Yp(n){let e=new Vc({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setClearColor("#bfdad5"),e.outputColorSpace=vn;let t=new ao;t.background=new Le(Ht?.fog??"#c8e0d9"),t.fog=new oo(Ht?.fog??"#c8dfd4",Ht?.density??.0089);let i=new xt(new _o(210,24,14),new yn({side:ln,depthWrite:!1,uniforms:{horizon:{value:Ht?new Le(Ht.sky[0]):new Le(.67,.8,.74)},zenith:{value:Ht?new Le(Ht.sky[1]):new Le(.27,.58,.72)}},vertexShader:"varying vec3 skyDir; void main(){skyDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 horizon,zenith; varying vec3 skyDir; void main(){vec3 d=normalize(skyDir);float h=smoothstep(-.055,.72,d.y);
      vec3 c=mix(horizon,zenith,h);
      float sun=max(0.,dot(d,normalize(vec3(-.52,.34,-.79))));c+=vec3(.18,.105,.035)*pow(sun,13.);
      gl_FragColor=vec4(c,1.);
      #include <colorspace_fragment>
    }`}));i.renderOrder=-5,t.add(i);let s=new So("#fffae3","#a3b9a4",1.58),r=new Eo(Ht?.sun??"#ffe8bd",1.54);r.position.set(-45,67,-19),t.add(s,r);let o=zp(t),a=Mp(t),c=_p(t),l=mp(t),h=1,u=qp(h);t.add(u);let d=new xt(new fo(1,20),new Zt({color:"#174c50",transparent:!0,opacity:.31,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.scale.set(.8,1.58,1),t.add(d);let p=new xt(new Ai(.65,1,22),new Zt({color:"#e0f4e0",transparent:!0,depthWrite:!1,opacity:0}));p.rotation.x=-Math.PI/2,t.add(p);let m=new fn(63,1,.16,255);t.add(m);let _=Wp(m),g=new U,f=new U,v=new U,S=Ay(t),x=Gp(t),T=window.matchMedia("(prefers-reduced-motion: reduce)"),b=0,A=0,R=1,y=-100,M=0,C=58,D=0,L=0;function N(){let O=n.clientWidth,V=n.clientHeight;!O||!V||b===O&&A===V||(b=O,A=V,R=b/A,e.setPixelRatio(Math.min(window.devicePixelRatio||1,R<.85?1.65:1.6)),e.setSize(b,A,!1),m.aspect=R,C=R<.9?66+Qe((.9-R)*13,0,7):64,m.fov=C,m.updateProjectionMatrix())}function B(O,V,H,j=!1){N(),h!==V.level&&(t.remove(u),u.traverse(Pe=>{Pe.isMesh&&(Pe.geometry.dispose(),Pe.material.dispose())}),h=V.level,u=qp(h),t.add(u)),M+=O;let ie=H==="ready",ae=H==="running",_e=!!V.crash,Oe=ie?-.28:V.s,Ye=Nt(Oe,V.route),Ze=ot(Oe,V.u),Z=jt(Oe,Ye),Q=ae||_e?V.steering:0,ge=ae&&V.hitTime>.48?Math.sin(V.hitTime*52)*(V.hitTime-.48)*.22:0,De=(ae||_e)&&V.smoothSteering,Te=ae||_e?V.turnAngle*(De?.82:1):0,rt=Q*(De?.73:1),bt=De&&!j?1-Math.exp(-12*O):1;D+=(Te-D)*bt,L+=(rt-L)*bt;let P=Z+D,ut=He(Oe,Ye);if(u.position.set(Ze.x,ut+.072+V.altitude+Math.sin(M*3.2+Oe*.6)*(ae?.025:.016),Ze.z),u.rotation.order="YXZ",u.rotation.y=-P,u.rotation.x=V.pitch-(V.flying||_e?0:Math.atan(V.downhill)*.81)+.012*Math.sin(M*2.7)+(_e?V.crash.forwardSpeed*.0023:ae?V.speed*.0023:0),u.rotation.z=L*.15+ge,d.position.set(Ze.x+.12,ut+.025,Ze.z+.07),d.rotation.x=-Math.PI/2-Math.atan(Ar(Oe,Ye)),d.material.opacity=.31/(1+V.altitude*.55),d.rotation.z=-P,u.visible=!_e,d.visible=!_e,x(O,u,V,T.matches),p.visible=ae&&V.landTime>0,p.visible){let Pe=1-V.landTime/.48,Ae=.65+Pe*2;p.position.set(Ze.x,ut+.057,Ze.z),p.scale.set(Ae,Ae,1),p.material.opacity=.65*(1-Pe)}let Be=Qe((.95-R)/.5,0,1),Ne=ie?0:Oe,ye=1-Fe(he-17,he+46,Ne),Pt=(ie?5.8:4.85)+1.62*Be+ye*(.65+1*Be),xe=Ne-Pt*Math.cos(Z),Je=Nt(xe,V.route),qt=ze(xe,Je),Ot=Je===Ye?st(xe,Ye)-st(Oe,Ye):0,I=Qe(V.u+Ot,qt.left+.43,qt.right-.43),E=ot(xe,I),G=(ie?1.99:1.46)+.32*Be+ye*(.68+.5*Be);f.set(E.x,He(xe,Je)+G+V.altitude*.86,E.z);let Y=Math.atan2(Ze.x-E.x,E.z-Ze.z),ee=Y+.34*Qe(jt(Ne+10,Ye)-Y,-.17,.17),q=ie?.31-.98*Be:.22,Ce=Ne+13.5*Math.cos(ee),le=He(Ce,Nt(Ce,V.route));g.set(Ze.x+Math.sin(ee)*13.5,ut+.78*(le-ut)+q+V.altitude*.78,Ze.z-Math.cos(ee)*13.5);let be=j?1:1-Math.exp(-13*O);m.position.lerp(f,be),v.lerp(g,be),m.lookAt(v),ae&&!De&&!T.matches&&m.rotateZ(-Q*Math.min(.012,V.speed*5e-4));let we=Ls(V),se=C+ye*(1+4.5*Be)+(ae&&!T.matches?Math.min(6.1,we*.2)+(V.boostTime>0||V.jetTime>0?4.2:0):0),fe=j?se:m.fov+(se-m.fov)*(1-Math.exp(-4*O));Math.abs(fe-m.fov)>.009&&(m.fov=fe,m.updateProjectionMatrix()),_(O,we,ae&&!T.matches,b,A),i.position.copy(m.position),j&&S.clear(),S.update(O,u,V,ae),(M-y>1/30||j)&&(o(M,Oe,V.route),y=M),a(M,V,T.matches),c(V,H),l(M,V,T.matches),e.render(t,m)}return{frame:B,resize:N}}var Zp=mt(()=>{Qo();ti();ou();gp();xp();Sp();Hp();gu();Xp();Qi();Xt()});function Cy(n,e,t,i){n.save(),n.translate(e,t),n.lineWidth=1.6,n.lineJoin="round",n.fillStyle=i?"#365e50":"#ffd15a",n.strokeStyle=i?"#ededdc":"#594b2e",n.fillRect(-6,-6.5,12,13),n.strokeRect(-6,-6.5,12,13),n.fillStyle=i?"#365e50":"#594b2e",n.fillRect(-2.6,-8.7,5.2,2.4),i?(n.strokeStyle="#f0f5da",n.lineWidth=1.8,n.beginPath(),n.moveTo(-3.5,0),n.lineTo(-.9,2.5),n.lineTo(3.7,-2.7),n.stroke()):(n.fillStyle="#354637",n.beginPath(),n.moveTo(.6,-4.7),n.lineTo(-3.6,.8),n.lineTo(-.4,.8),n.lineTo(-1.1,4.8),n.lineTo(3.6,-1),n.lineTo(.4,-1),n.closePath(),n.fill()),n.restore()}function Jp(n,e,t={}){let i=n.clientWidth||300,s=142,r=Math.min(devicePixelRatio||1,2);n.width=Math.round(i*r),n.height=s*r;let o=n.getContext("2d");o.setTransform(r,0,0,r,0,0);let a=1/0,c=-1/0;for(let _=0;_<=wt;_+=12)for(let g of _>=he&&_<qe?Ct:["shared"]){let f=ze(_,g);a=Math.min(a,ot(_,f.left).x),c=Math.max(c,ot(_,f.right).x)}let l=_=>10+_/wt*(i-20),h=(_,g)=>10+103*(ot(_,g).x-a)/(c-a);o.fillStyle="#e9ebd7",o.fillRect(0,0,i,s);function u(_,g,f,v){let S=Math.ceil((g-_)/5);o.beginPath();for(let x=0;x<=S;x++){let T=_+(g-_)*x/S,b=ze(T,f).left,A=[l(T),h(T,b)];x?o.lineTo(...A):o.moveTo(...A)}for(let x=S;x>=0;x--){let T=_+(g-_)*x/S;o.lineTo(l(T),h(T,ze(T,f).right))}o.closePath(),o.fillStyle=v,o.fill()}u(0,he,"shared","#83aba0"),u(qe,wt,"shared","#83aba0");for(let _ of Ct)u(he,qe,_,Ry[_]);for(let _ of[he,qe])o.strokeStyle="#54695a",o.setLineDash([2,3]),o.beginPath(),o.moveTo(l(_),10),o.lineTo(l(_),115),o.stroke();o.setLineDash([]),o.font="12px system-ui, sans-serif",o.fillStyle="#344e43",o.textAlign="left",o.fillText("\uCD9C\uBC1C",7,134),o.textAlign="right",o.fillText(gi(wt)+" \uACB0\uC2B9",i-7,134);let d=[.61,.32,.8].map(_=>he+(qe-he)*_),p=[];o.textAlign="center",o.lineJoin="round",o.lineWidth=4;for(let[_,g]of Ct.entries()){if(!t[g])continue;let f=Math.floor(t[g]).toLocaleString("ko-KR")+" m",v=o.measureText(f).width/2+10,S=d.find(T=>Math.abs(l(T)-l(Ui[g].s))>v&&Math.abs(l(T)-l(e.s))>v)||d[0],x=h(S,st(S,g))+4;o.strokeStyle="#f6f4e4",o.strokeText(f,l(S),x),o.fillText(f,l(S),x),p.push(["\uC704","\uAC00\uC6B4\uB370","\uC544\uB798"][_]+" "+f)}let m=[];for(let[_,g]of Ct.entries()){let f=Ui[g],v=e.boostCells.includes(g);Cy(o,l(f.s),h(f.s,f.u),v),m.push(["\uC67C\uCABD","\uAC00\uC6B4\uB370","\uC624\uB978\uCABD"][_]+" "+f.s+" m "+(v?"\uC218\uC9D1":"\uBBF8\uC218\uC9D1"))}n.setAttribute("aria-label","\uC138 \uBB3C\uAE38\uACFC \uD604\uC7AC \uC704\uCE58"+(p.length?". \uCD5C\uACE0 \uAC70\uB9AC "+p.join(", "):"")+". \uBD80\uC2A4\uD130 \uC804\uC9C0 "+m.join(", ")),o.beginPath(),o.arc(l(e.s),h(e.s,e.u),4.5,0,Math.PI*2),o.fillStyle="#fdf6db",o.fill(),o.strokeStyle="#203e36",o.lineWidth=2,o.stroke()}var Ry,Kp=mt(()=>{Uo();en();Xt();Ry={gorge:"#d98b55",canal:"#4b9eaf",marsh:"#8a9a50"}});var fm={};Sm(fm,{startGame:()=>Oy});function Ge(n,e){let t=ne(n);t.textContent!==e&&(t.textContent=e)}function Qp(){let n=Fn?"\uC18C\uB9AC \uB044\uAE30":"\uC18C\uB9AC \uCF1C\uAE30";ne("sound").setAttribute("aria-pressed",String(Fn)),ne("sound").setAttribute("aria-label",n),ne("sound").title=n}function gl(){if(Fn)try{let n=window.AudioContext||window.webkitAudioContext;if(!n)return;if(!St){St=new n,ko=St.createOscillator(),ko.type="triangle",Ho=St.createGain(),Ho.gain.value=0;let e=St.createBiquadFilter();e.type="lowpass",e.frequency.value=360,ko.connect(e).connect(Ho).connect(St.destination),ko.start();let t=St.createBuffer(1,St.sampleRate,St.sampleRate),i=t.getChannelData(0);xu=t;for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;let s=St.createBufferSource();s.buffer=t,s.loop=!0,zo=St.createBiquadFilter(),zo.type="bandpass",zo.Q.value=.72,Vo=St.createGain(),Vo.gain.value=0,s.connect(zo).connect(Vo).connect(St.destination),s.start()}St.state==="suspended"&&St.resume().catch(()=>{})}catch{}}function Bs(n,e=0){if(!St||!Ho)return;let t=St.currentTime;if(ko.frequency.setTargetAtTime(39+e*(4.3+J.level*.1),t,.085),Ho.gain.setTargetAtTime(n&&Fn?.014+Math.min(.031,e*8e-4):0,t,.055),Vo){let i=Math.min(1,J.jetTime*1.6);zo.frequency.setTargetAtTime(400+e*30+i*420,t,.1),Vo.gain.setTargetAtTime(Fn&&e>0&&!Jt&&at==="running"?(Math.min(.044,e*95e-5)+i*.015)*(J.flying?.5:1):0,t,.09)}}function Wo(n,e=.17){if(!St||!Fn||St.state!=="running")return;let t=St.currentTime,i=St.createOscillator(),s=St.createGain();i.type="sine",i.frequency.setValueAtTime(n,t),i.frequency.exponentialRampToValueAtTime(n*1.18,t+e),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.063,t+.013),s.gain.exponentialRampToValueAtTime(1e-4,t+e),i.connect(s).connect(St.destination),i.start(t),i.stop(t+e+.02)}function Iy(n){if(!St||!xu||!Fn||St.state!=="running")return;let e=St.currentTime,t=St.createBufferSource(),i=St.createGain(),s=St.createBiquadFilter();t.buffer=xu,s.type="lowpass",s.Q.value=.72,s.frequency.setValueAtTime(2400,e),s.frequency.exponentialRampToValueAtTime(240,e+.23),i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(Math.min(.25,.12+n*.002),e+.007),i.gain.exponentialRampToValueAtTime(.034,e+.05),i.gain.exponentialRampToValueAtTime(.075,e+.073),i.gain.exponentialRampToValueAtTime(1e-4,e+.25),t.connect(s).connect(i).connect(St.destination),t.start(e),t.stop(e+.26)}function tm(){for(let n of em)Mu[n]=J[n]}function nm(){Ns=0,fl=0,Go=performance.now(),ml=Go,tm()}function is(n){if(Jt||at!=="running"||J.ended||n<=Go)return;let e=Math.min(.12,(n-Go)/1e3);Go=n;let t=fi.has("KeyD")||fi.has("ArrowRight"),i=fi.has("KeyA")||fi.has("ArrowLeft");for(;e>1e-9&&!J.ended;){ts&&J.elapsed>=ts.until&&(ts=null);let s=It?.drag||ts,r=s&&!fi.size?Yf(s,J):Number(t)-Number(i),o=Math.min(e,Ds-Ns);if(fl+=r*o,Ns+=o,e-=o,Ns>=Ds-1e-9){tm();let a=pp(J,fl/Ds,Ds,Xo);Ns=0,fl=0,a&&Uy(a)}}J.ended&&(Yo(),cm())}function im(n){return"\uC218\uB85C \uAC00\uC18D "+n.pads+"\uD68C \xB7 \uBCF4\uC870 \uBD80\uC2A4\uD130 "+n.boostsUsed+"\uD68C \xB7 \uC810\uD504 "+n.jumps+"\uD68C"+(n.longestJump>0?" \xB7 \uCD5C\uC7A5 \uC810\uD504 "+n.longestJump.toFixed(1)+" m":"")+(n.pickedCell?" \xB7 \uC804\uC9C0 \uD68D\uB4DD "+n.cellCount+"/3":"")}function sm(n,e){let t=El(n,e);return e&&t!==e.length?"\uC774\uC804 "+gi(t)+" \uCF54\uC2A4":""}function Oi(){let n=Yn(ct.level),e=n.level===Gs,t=!Br||Nr||pi||Os||qn;for(let c of ne("course-panel").querySelectorAll("button")){let l=c.dataset.stage,h=rn(l),u=as(ct,l);c.disabled=t||!u;let d=sn[sn.indexOf(h)-1],p=u?ct.completedCourses.includes(l)?"\uC644\uC8FC \xB7 "+h.description:h.description:d.name+" \uC644\uC8FC \uD6C4 \uC5F4\uB9BC",m=c.querySelector(".choice-note");m.textContent!==p&&(m.textContent=p)}let i=ct.recent[0];if(ne("arrival").hidden=i?.arrivalVisit!==ns,!ne("arrival").hidden){Ge("arrival-title",rn(i.course).name+" \uC644\uC8FC!");let c=[Math.floor(i.distance).toLocaleString("ko-KR")+" m"],l=sm(i,rn(i.course));l&&c.push(l),Number.isFinite(i.time)&&c.push(i.time.toFixed(1)+"\uCD08"),Number.isFinite(i.peak)&&c.push("\uCD5C\uACE0 "+Math.round(i.peak*3.6)+" km/h"),Number.isFinite(i.boostsUsed)?c.push(im(i)):Number.isFinite(i.jumps)&&c.push("\uC810\uD504 "+i.jumps+"\uD68C"),Ge("arrival-info",c.join(" \xB7 "))}Ge("dock-cells",ct.boostCells.length+" / "+Ct.length),Ge("boat-name",n.name),Ge("boat-level",n.level+" / "+Gs+"\uB2E8\uACC4");let s=n.endurance/(te.flow?.draw??1);Ge("specs","\uC21C\uD56D "+Math.round(n.cruise*3.6)+" km/h \xB7 \uB3D9\uB825 \uC57D "+Math.round(s)+"\uCD08"),Ge("dock-parts","\uBD80\uD488 "+ct.parts+"\uAC1C"),Ge("result-parts","\uBCF4\uC720 "+ct.parts+"\uAC1C");let r=os(ct);ne("continue-course").hidden=!(ct.completedCourses.includes(te.id)&&!ct.completedCourses.includes(r.id)),ne("continue-course").disabled=t,Ge("continue-course","\uB2E4\uC74C \uCF54\uC2A4 \xB7 "+r.name+" \u203A");let o=Ws(ct,te.id).best,a=te.id==="basin"&&!ct.courseRecords;Ge("best",o?"\uCD5C\uACE0 "+Math.floor(o).toLocaleString("ko-KR")+" m":a&&ct.best?"\uC774\uC804 \uCF54\uC2A4 "+ct.best.toFixed(0)+" m":a&&ct.legacyBest?"\uC2DC\uD5D8 \uAE30\uB85D "+ct.legacyBest.toFixed(0)+" m":"\uCD5C\uACE0 \uAE30\uB85D \u2014");for(let c of["dock-upgrade","result-upgrade"]){let l=ne(c);l.textContent=e?"\uCD5C\uC885 \uAC1C\uC870 \uC644\uB8CC":n.level+1+"\uB2E8\uACC4 \uAC1C\uC870 \xB7 "+n.cost+"\uAC1C",l.disabled=e||ct.parts<n.cost||t||Sn>0,l.setAttribute("aria-label",e?"10\uB2E8\uACC4 \uCD5C\uC885 \uAC1C\uC870 \uC644\uB8CC":Yn(n.level+1).name+"\uB85C \uAC1C\uC870, \uBD80\uD488 "+n.cost+"\uAC1C \uD544\uC694")}ne("launch").disabled=t,ne("retry").disabled=t||!!Xn?.cleared||Sn>0,ne("course-picker").disabled=t,ne("cell-map").disabled=t,ne("next-course").disabled=t||!!Xn||Sn>0,ne("dock").disabled=t||!!Xn?.cleared||Sn>0,Xn&&!pi&&Sn<=0&&(ne("result-upgrade").disabled=!1,Ge("result-upgrade","\uBD80\uD488 \uC815\uC0B0 \uB2E4\uC2DC \uC2DC\uB3C4"),ne("result-upgrade").setAttribute("aria-label","\uBD80\uD488 \uC815\uC0B0 \uB2E4\uC2DC \uC2DC\uB3C4"))}function Py(){qn||(qn=!0,Jt=!0,ks(),Bs(!1),location.reload())}function qo(n){if(qn||n.revision<ct.revision)return!1;if(n.visit!==ns||n.activeCourse!==te.id)return Py(),!1;if(ct=n,at==="ready"&&J.level!==ct.level)J=Ur(1,ct.level,ct.boostCells);else for(let e of ct.boostCells)qh(J,e);return Jt&&!ne("map-panel").hidden&&wu(),Oi(),!0}function Ly(){ne("history-list").replaceChildren();for(let n of ct.recent){let e=document.createElement("li"),t=rn(n.course),i=n.trial?"100 m \uC2DC\uD5D8":t?t.name+" \xB7 "+n.level+"\uB2E8\uACC4":"300 m \uCF54\uC2A4",s=sm(n,t);e.textContent=i+(s?" \xB7 "+s:"")+" \xB7 "+n.distance.toFixed(1)+" m \xB7 "+n.time.toFixed(1)+"\uCD08"+(n.crash?" \xB7 \uCDA9\uB3CC":""),ne("history-list").append(e)}}async function rm(n){pi=!0,Oi();try{let e=await Or.credit(n);if(Xs(n.id),n.pickedCell&&Xs(am(n.visit,n.course,n.pickedCell)),Xn?.id===n.id&&(Xn=null),!qo(e))return;Ly();let t=bl(n.distance,rn(n.course));Ge("earned","\uCF54\uC2A4 "+t+"% \xB7 \uBD80\uD488 +"+n.earned+"\uAC1C")}catch{Xn=n,Ge("earned","\uC815\uC0B0\uC744 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}finally{pi=!1,qn||Oi(),!qn&&at==="result"&&!ne("result-layer").hidden&&!ne("result").contains(document.activeElement)&&(Xn?ne("result-upgrade"):J.cleared?ne("next-course"):ne("retry")).focus({preventScroll:!0})}}async function om(){if(Xn&&!pi){await rm(Xn);return}if(!Br||pi||Nr||Os||qn||at==="running")return;let n=ct.level;Nr=!0,Oi();try{let e=await Or.upgrade(n,ns);if(!qo(e))return;e.level>n&&(Su(),Ge("announce",e.level+"\uB2E8\uACC4 \uAC1C\uC870 \uC644\uB8CC \xB7 "+Yn(e.level).name),Wo(780))}catch{Ge("announce","\uAC1C\uC870\uB97C \uC800\uC7A5\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uB2E4\uC2DC \uB20C\uB7EC \uC8FC\uC138\uC694.")}finally{Nr=!1,qn||Oi()}}function ks(){fi.clear(),J.keyHold=0,ts=null,It!==null&&Nn.hasPointerCapture(It.id)&&Nn.releasePointerCapture(It.id),It=null}function _l(n){at=n,$p.dataset.mode=at,at!=="result"&&(Sn=0),ne("launch-card").hidden=at!=="ready",ne("instruments").hidden=at!=="running",ne("boost").hidden=at!=="running",ne("result-layer").hidden=at!=="result"||Sn>0,ne("impact-note").hidden=Sn<=0,Oi()}function Dy(n){if(n.hitTime>.18){if(n.hitKind==="log"||n.hitKind==="lock")return jc[n.hitKind]+" \uC811\uCD09";if(n.hitKind==="rock")return"\uBC14\uC704 \uC811\uCD09";if(n.hitKind==="ramp")return"\uC606\uBA74 \uC811\uCD09";if(n.hitKind==="post")return"\uAE30\uB465 \uC811\uCD09";if(n.hitKind==="buoy")return"\uBD80\uD45C \uC811\uCD09"}return n.flying?n.vy<-.5?"\uB099\uD558 \uC911":n.jetTime>0&&n.jetEntry.kind==="ramp"?"\uB3C4\uC57D \uAC00\uC18D":"\uACF5\uC911":n.stoppedFor>0?"\uBCF4\uC870 \uB300\uAE30 "+Math.max(0,Math.ceil(su-n.stoppedFor))+"\uCD08":n.boostTime>0?"\uBCF4\uC870 \uAC00\uC18D":n.ramp?n.ramp.kind==="ramp"?"\uB3C4\uC57D \uAC00\uC18D":"\uB3C4\uC57D \uC900\uBE44":n.landTime>0?"\uCC29\uC218":n.hitTime>.45?"\uC811\uCD09 \uAC10\uC18D":n.jetTime>0?n.jetEntry.kind==="ramp"?"\uB3C4\uC57D \uAC00\uC18D":"\uC218\uBB38 \uAC00\uC18D":n.chargeTime>0?"\uBC30\uD130\uB9AC \uCDA9\uC804":n.waterEffect?jc[n.waterEffect]:n.coastAccelerating?"\uBB34\uB3D9\uB825 \uAC00\uC18D":n.battery<=0?"\uAD00\uC131 \uC8FC\uD589":n.downhill>.21?"\uB0B4\uB9AC\uB9C9 "+Math.round(n.downhill*100)+"%":n.shallow>.59?"\uC595\uC740 \uBB3C":n.current>.6?"\uBE60\uB978 \uBB3C\uC0B4":"\uC8FC\uD589 \uC911"}function Yo(){Ge("distance",Math.floor(J.s).toLocaleString("ko-KR"));let n=Ls(J);Ge("speed",String(Math.round(n*3.6))),Ge("battery",Math.ceil(J.battery*100)+"%"),ne("progress-fill").style.transform="scaleX("+J.s/wt+")",ne("battery-fill").style.transform="scaleX("+J.battery+")",Ge("zone",Dy(J));let e=ne("boost"),t=ru(J);e.disabled=!t,e.classList.toggle("reserve-ready",J.battery===0&&t),e.classList.toggle("firing",J.boostTime>0);let i=J.boostCells.length;Ge("boost-label",i?J.boostTime>0?"\uAC00\uC18D \uC911":J.boostLeft?"\uBCF4\uC870 \uBD80\uC2A4\uD130":"\uC0AC\uC6A9 \uC644\uB8CC":"\uC804\uC9C0 \uD544\uC694"),Ge("boost-remaining",i?J.boostLeft+"/"+i+"\uD68C":"0\uD68C"),e.setAttribute("aria-label",i?"\uBCF4\uC870 \uBD80\uC2A4\uD130 "+i+"\uD68C \uC911 "+J.boostLeft+"\uD68C \uB0A8\uC74C":"\uBCF4\uC870 \uBD80\uC2A4\uD130 \uC7A0\uAE40. \uBB3C\uAE38\uC5D0\uC11C \uC804\uC9C0\uB97C \uD68D\uB4DD\uD558\uC138\uC694.");let s=Qf(J);ne("overhead-cue").hidden=!s,s&&Ge("overhead-cue",s.cue+" \xB7 "+Math.ceil(s.s-J.s)+" m");let r=Ui[J.route],o=r?Math.ceil(r.s-J.s):0,a=r&&!J.boostCells.includes(r.branch)&&o>0&&o<Math.max(35,Math.min(78,J.speed*3)),c=J.pickupTime>0||a;if(ne("instruments").classList.toggle("jet-active",J.jetTime>0),ne("course-cue").classList.toggle("cell-cue",!!c),c){ne("course-cue").hidden=!1,Ge("course-cue",J.pickupTime>0?"\uC804\uC9C0 \uD68D\uB4DD \xB7 \uB9E4 \uC8FC\uD589 "+i+"\uD68C":"\uBD80\uC2A4\uD130 \uC804\uC9C0 \xB7 "+o+" m");return}if(J.jetTime>0){ne("course-cue").hidden=!1;let d=J.jetEntry.kind==="ramp"?"\uB3C4\uC57D\uB300":"\uC218\uBB38";Ge("course-cue",d+" \uD1B5\uACFC\u3000"+Math.round(J.jetEntry.speed*3.6)+" \u2192 "+Math.round(n*3.6)+" km/h");return}let l=Nt(J.s,J.route),h=Zc(J.s,l).find(d=>d.start>J.s&&d.start-J.s<Math.max(40,J.speed*3.1)),u=Vf(J.s,l,Math.max(46,J.speed*3));u&&(!h||u.s<h.start)?(ne("course-cue").hidden=!1,Ge("course-cue",jc[u.kind]+" \xB7 "+Math.ceil(u.s-J.s)+" m")):(ne("course-cue").hidden=!h,h&&Ge("course-cue",h.name+" \xB7 "+Math.ceil(h.start-J.s)+" m"))}function Su(){ks(),Jt=!1,ne("help-layer").hidden=!0,J=Ur(1,ct.level,ct.boostCells),Ns=0,_l("ready"),Bs(!1),Ni?.frame(0,J,at,!0),ne("launch").focus({preventScroll:!0})}function bu(){Jt||!Ni||at==="running"||Sn>0||!Br||pi||Xn?.cleared||Nr||Os||qn||(gl(),ks(),J=Ur(1,ct.level,ct.boostCells),Xo="analog",jp=crypto.randomUUID?.()||Date.now().toString(36)+"-"+Math.random().toString(36).slice(2),nm(),_l("running"),Yo(),yu=0,Ni.frame(0,J,at,!0),Wo(340,.115),Ge("announce","\uCD9C\uBC1C. \uC88C\uC6B0\uB85C \uC870\uD5A5\uD558\uC138\uC694."))}function am(n,e,t){return"cell."+n+"."+e+"."+t}function Uy(n){let e={id:am(ns,J.course,n),kind:"cell",course:J.course,visit:ns,branch:n};wl(e),Or.collect(e).then(t=>{Xs(e.id),qo(t)}).catch(()=>{}),Wo(880,.16),Yo(),Ge("announce","\uBD80\uC2A4\uD130 \uC804\uC9C0\uB97C \uBAA8\uC558\uC5B4\uC694. \uB9E4 \uC8FC\uD589 "+J.boostCells.length+"\uD68C \uCDA9\uC804\uB429\uB2C8\uB2E4.")}function Eu(){is(performance.now()),!(at!=="running"||Jt)&&(gl(),up(J)&&(Wo(540,.18),Yo(),Ge("announce","\uBCF4\uC870 \uBD80\uC2A4\uD130\uB97C \uC0AC\uC6A9\uD588\uC2B5\uB2C8\uB2E4. \uB0A8\uC740 \uD69F\uC218 "+J.boostLeft+"\uD68C.")))}function cm(){if(at!=="running")return;J.crash&&(Sn=window.matchMedia("(prefers-reduced-motion: reduce)").matches?.22:Vp,Ge("impact-note",J.crash.name+" \uCDA9\uB3CC \xB7 \uC120\uCCB4 \uD30C\uC190")),ks(),Bs(!1),_l("result");let n=Math.floor(J.s*10)/10,e={id:jp,visit:ns,course:J.course,branch:J.route,distance:n,time:J.elapsed,courseLength:wt,route:gi(wt),power:J.power,peak:J.peak,jumps:J.jumps,longestJump:J.longestJump,pads:J.pads,boostsUsed:J.boostCells.length-J.boostLeft,split:J.split,cleared:J.cleared,level:J.level,earned:bl(n,te)};J.crash&&(e.crash=J.crash.name),J.pickedCell&&(e.pickedCell=J.pickedCell,e.cellCount=J.boostCells.length),wl(e),Ge("result-title",J.crash?J.crash.name+" \uCDA9\uB3CC":J.cleared?wt.toLocaleString("ko-KR")+" m \uC644\uC8FC!":e.distance>Ws(ct,J.course).best?"\uCD5C\uACE0 \uAE30\uB85D \uAC31\uC2E0":"\uC8FC\uD589 \uC885\uB8CC"),ne("next-course").hidden=!J.cleared,Ge("next-course",pl?"\uB2E4\uC74C \uCF54\uC2A4 \xB7 "+pl.name:"\uB2E4\uB978 \uCF54\uC2A4 \uC120\uD0DD"),ne("retry").className=J.cleared?"secondary":"primary",Ge("result-distance",e.distance.toFixed(1)),Ge("result-meta",Yn(J.level).name+" \xB7 "+e.time.toFixed(1)+"\uCD08"+(J.crash?" \xB7 \uC218\uBA74 \uC704 "+J.altitude.toFixed(1)+" m\uC5D0\uC11C \uD30C\uC190":"")),Ge("result-features",im(e));let t=e.split?" \xB7 \uD569\uB958 \uC2DC \uBC30\uD130\uB9AC "+Math.round(e.split.battery*100)+"%":"",i=J.bestCoast,s=i&&i.to-i.from>.3?" \xB7 \uBB34\uB3D9\uB825 \uB0B4\uB9AC\uB9C9 "+Math.round(i.from*3.6)+" \u2192 "+Math.round(i.to*3.6)+" km/h":"";Ge("split","\uCD5C\uACE0 \uC18D\uB3C4 "+Math.round(J.peak*3.6)+" km/h"+s+t),ne("history").open=!1,Ge("earned","\uC8FC\uD589 \uBD80\uD488 \uC815\uC0B0 \uC911"),rm(e),Ge("announce",ne("result-title").textContent+" "+e.distance+"\uBBF8\uD130"),J.crash?Iy(J.crash.speed):((J.cleared?ne("next-course"):ne("retry")).focus({preventScroll:!0}),Wo(J.cleared?710:280,.26))}async function Tu(n){if(!(at==="running"||!Br||pi||Nr||Os||qn||Xn||!as(ct,n))){if(n===te.id){xl();return}Os=!0,Oi();try{let e=await Or.enter(n,ns);qo(e)}catch{Ge("course-rule","\uCF54\uC2A4 \uBCC0\uACBD\uC744 \uC800\uC7A5\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uB2E4\uC2DC \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.")}finally{Os=!1,qn||Oi()}}}function Fy(){Ge("stage-name",te.name),ne("stage-tip").hidden=!te.reaches,te.reaches&&Ge("stage-tip",te.description),Ge("dock-length",gi(wt)),Ge("result-course",te.name),Ge("result-length",gi(wt)),Ge("finish-distance"," / "+wt.toLocaleString("ko-KR")+" m"),document.title=te.name+" \xB7 RC \uBCF4\uD2B8 \uB7A0\uB9AC",Nn.setAttribute("aria-label",te.name+" \uC8FC\uD589 \uD654\uBA74. \uC2A4\uD398\uC774\uC2A4\uBC14\uB098 \uCD9C\uBC1C \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uCD5C\uB300 \uCD9C\uB825\uC73C\uB85C \uCD9C\uBC1C\uD569\uB2C8\uB2E4. \uC88C\uC6B0 \uBC29\uD5A5\uD0A4\uB098 \uB4DC\uB798\uADF8\uB85C \uC870\uD5A5\uD569\uB2C8\uB2E4.");for(let n of sn){let e=document.createElement("button");e.type="button",e.className="course-choice",e.dataset.stage=n.id,n===te&&e.setAttribute("aria-current","true");let t=document.createElement("span");t.className="course-photo",t.setAttribute("aria-hidden","true"),t.style.backgroundImage="url(./courses/"+n.id+".webp)";let i=document.createElement("span");i.className="choice-body";let s=document.createElement("strong");s.textContent=n.name;let r=document.createElement("span");r.className="choice-distance",r.textContent=n.length.toLocaleString("ko-KR")+" m";let o=document.createElement("span");o.className="choice-note",o.textContent=n.description,i.append(s,r,o),e.append(t,i),e.addEventListener("click",()=>Tu(n.id)),ne("course-panel").append(e)}}function wu(){let n=Ws(ct,te.id).branches;ne("map-caption").hidden=!Object.values(n).some(t=>t>0),Ge("map-cells-count",J.boostCells.length+" / "+Ct.length);let e=["\uC67C\uCABD","\uAC00\uC6B4\uB370","\uC624\uB978\uCABD"];ne("cell-locations").replaceChildren(...Ct.map((t,i)=>{let s=document.createElement("li"),r=document.createElement("b"),o=document.createElement("span"),a=J.boostCells.includes(t);return s.classList.toggle("taken",a),r.textContent=e[i]+" \xB7 "+Ui[t].s+" m",o.textContent=a?"\u2713 \uC218\uC9D1":"\u03DF \uBBF8\uC218\uC9D1",s.append(r,o),s})),Jp(ne("route-map"),J,n)}function zs(n="guide"){if(is(performance.now()),Jt||!Ni||at==="result")return;Jt=!0,ks(),Bs(!1),ne("help-layer").hidden=!1,vu=document.activeElement;let e=n==="map",t=n==="courses";ne("course-panel").hidden=!t,ne("course-rule").hidden=!t,ne("guide").hidden=e||t,ne("map-panel").hidden=!e,ne("help-layer").classList.toggle("choosing",t),Ge("help-title",t?"\uCF54\uC2A4 \uC120\uD0DD":e?te.name+" \uC9C0\uB3C4":at==="running"?"\uC77C\uC2DC\uC815\uC9C0":"\uC870\uC791\uBC95"),e&&wu(),Ge("resume",at==="running"?"\uACC4\uC18D \uC8FC\uD589":"\uB3CC\uC544\uAC00\uAE30"),ne("abort").hidden=at!=="running";let i=t?ne("course-panel").querySelector("[aria-current]"):ne("resume");i.focus({preventScroll:!0}),t&&i.scrollIntoView({block:"nearest"})}function xl(){Jt&&(Jt=!1,ne("help-layer").hidden=!0,nm(),at==="ready"&&vu?.getClientRects().length&&vu.focus({preventScroll:!0}))}function Au(n,e){is(performance.now()),!(!It||It.id!==n.pointerId)&&(!e&&at==="running"&&It.drag&&(Zh(It.drag,J,n.clientX,Nn.clientWidth),ts=Zf(It.drag,J)),It=null)}function Ny(n,e){let t=[...e.querySelectorAll("button:not(:disabled),summary")].filter(i=>i.getClientRects().length);t.length&&(n.shiftKey&&document.activeElement===t[0]&&(n.preventDefault(),t.at(-1).focus()),!n.shiftKey&&document.activeElement===t.at(-1)&&(n.preventDefault(),t[0].focus()))}function lm(){at==="running"&&!Jt?zs():ks()}function hm(){Br&&!qn&&!Os&&!pi&&Or.read().then(qo).catch(()=>{})}function um(n){ks(),Jt=!0,Bs(!1),ne("error-layer").hidden=!1,Ge("error-message",n)}function dm(n){let e=Math.max(0,Math.min((n-ml)/1e3,.12));if(ml=n,!Jt){if(at==="running"&&(is(n),at==="running"&&n-yu>=60&&(Yo(),Bs(J.battery>0||J.boostTime>0,J.speed),yu=n)),at==="running"){let t=Qe(Ns/Ds,0,1);Object.assign(_u,J);for(let i of em)_u[i]=Mu[i]+(J[i]-Mu[i])*t;Ni.frame(e,_u,at)}else Ni.frame(e,J,at);Sn>0&&(Sn=Math.max(0,Sn-e),Sn===0&&(ne("impact-note").hidden=!0,ne("result-layer").hidden=!1,Oi(),pi||ne("retry").focus({preventScroll:!0})))}requestAnimationFrame(dm)}function Oy(n,e,t){Or=n,ct=e,ns=ct.visit,J=Ur(1,ct.level,ct.boostCells),Fn=t.sound!==!1;try{let i=localStorage.getItem("willow-creek.sound");i!==null&&(Fn=i==="on")}catch{}Fy(),Qp();try{Ni=Yp(Nn),Ni.frame(0,J,at,!0),Br=!0,_l("ready"),ml=performance.now(),requestAnimationFrame(dm)}catch(i){console.error(i),um("3D \uADF8\uB798\uD53D(WebGL 2)\uC744 \uC9C0\uC6D0\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694.")}finally{$p.setAttribute("aria-busy","false")}}var ne,$p,Nn,ct,Or,ns,Br,pi,Nr,Os,qn,Xn,jp,Fn,St,ko,Ho,Vo,zo,xu,at,Jt,J,Ni,It,ts,Sn,vu,pl,Xo,Ns,fl,Go,ml,yu,fi,em,Mu,_u,pm=mt(()=>{en();Zp();ou();nl();Qc();Uo();Kp();il();gu();$o();Al();ne=n=>document.getElementById(n),$p=ne("game"),Nn=ne("creek"),Br=!1,pi=!1,Nr=!1,Os=!1,qn=!1,Xn=null,jp="",Fn=!0;at="ready",Jt=!1,J=Ur(),It=null,ts=null,Sn=0,vu=null,pl=sn[sn.indexOf(te)+1],Xo="analog",Ns=0,fl=0,Go=0,ml=0,yu=0,fi=new Set,em=["s","u","steering","turnAngle","altitude","pitch"],Mu={},_u={};Nn.addEventListener("pointerdown",n=>{if(is(performance.now()),Jt||at!=="running"||It!==null||n.pointerType==="mouse"&&n.button!==0)return;n.preventDefault(),gl(),ts=null;let e=n.pointerType==="mouse"?"mouse":"touch";It={id:n.pointerId,x:n.clientX,source:e,drag:null},fi.size||(Xo=e,It.drag=Yh(J,n.clientX,e)),Nn.setPointerCapture(n.pointerId)});Nn.addEventListener("pointermove",n=>{!It||It.id!==n.pointerId||Jt||(is(performance.now()),It&&(It.drag&&Zh(It.drag,J,n.clientX,Nn.clientWidth),It.x=n.clientX))});Nn.addEventListener("pointerup",n=>Au(n,!1));Nn.addEventListener("pointercancel",n=>Au(n,!0));Nn.addEventListener("lostpointercapture",n=>Au(n,!0));ne("launch").addEventListener("click",bu);ne("retry").addEventListener("click",bu);ne("dock").addEventListener("click",Su);ne("course-picker").addEventListener("click",()=>zs("courses"));ne("continue-course").addEventListener("click",()=>Tu(os(ct).id));ne("next-course").addEventListener("click",()=>{pl?Tu(pl.id):(Su(),zs("courses"))});ne("abort").addEventListener("click",()=>{at==="running"&&(xl(),J.ended=!0,cm())});ne("dock-upgrade").addEventListener("click",om);ne("result-upgrade").addEventListener("click",om);ne("boost").addEventListener("click",Eu);ne("boost").addEventListener("pointerdown",n=>{(n.pointerType==="touch"||n.pointerType==="pen")&&(n.preventDefault(),Eu())});ne("sound").addEventListener("click",()=>{Fn=!Fn,Fn?gl():Bs(!1),Qp();try{localStorage.setItem("willow-creek.sound",Fn?"on":"off")}catch{}});ne("help").addEventListener("click",()=>zs());ne("map-button").addEventListener("click",()=>zs("map"));ne("cell-map").addEventListener("click",()=>zs("map"));ne("resume").addEventListener("click",xl);window.addEventListener("resize",()=>{Jt&&!ne("map-panel").hidden&&wu()});window.addEventListener("keydown",n=>{if(!(!Ni||n.altKey||n.ctrlKey||n.metaKey)){if(n.code==="Escape"){n.preventDefault(),n.repeat||(Jt?xl():zs());return}if(n.code==="Space"&&!Jt){let e=n.target.closest?.("button,summary");if(e?.getClientRects().length&&e!==ne("launch")&&e!==ne("retry")&&e!==ne("boost")||(n.preventDefault(),n.repeat))return;at==="running"?Eu():(at==="ready"||!ne("result-layer").hidden&&!ne("retry").disabled)&&bu();return}if(Jt||at==="result"){if(Sn>0){n.code==="Tab"&&n.preventDefault();return}n.code==="Tab"&&Ny(n,ne(Jt?"help-layer":"result-layer"));return}if(["KeyA","KeyD","ArrowLeft","ArrowRight"].includes(n.code)){if(is(performance.now()),at==="result")return;n.preventDefault(),fi.add(n.code),Xo="keyboard",ts=null,It&&(It.drag=null);return}}});window.addEventListener("keyup",n=>{is(performance.now()),fi.delete(n.code)&&!fi.size&&(J.keyHold=0,It&&at==="running"&&(Xo=It.source,It.drag=Yh(J,It.x,It.source)))});document.addEventListener("visibilitychange",()=>{document.hidden&&lm()});window.addEventListener("blur",lm);window.addEventListener("focus",hm);window.addEventListener("pageshow",n=>{n.persisted&&hm()});Nn.addEventListener("webglcontextlost",n=>{n.preventDefault(),um("\uADF8\uB798\uD53D \uC5F0\uACB0\uC774 \uC77C\uC2DC \uC911\uB2E8\uB410\uC5B4\uC694. \uB2E4\uC2DC \uC5F4\uBA74 \uC120\uCC29\uC7A5\uC5D0\uC11C \uC2DC\uC791\uD569\uB2C8\uB2E4.")})});Al();en();document.getElementById("reload").addEventListener("click",()=>location.reload());async function By(){let n={};try{n=JSON.parse(localStorage.getItem("willow-creek.rally.1"))||{}}catch{}let e=Gu(n),t=await e.read(),i=new URL(location.href),s=rn(i.searchParams.get("course")),r=t.visit,o=!1;for(let c of Vu())t=c.kind==="cell"?await e.collect(c):await e.credit(c),s?.id===c.course&&t.recent.some(l=>l.id===c.id&&l.arrivalVisit===t.visit)&&(o=!0),Xs(c.id);s&&!o&&r===t.visit&&s.id!==t.activeCourse&&(t=await e.enter(s.id,t.visit)),i.searchParams.has("course")&&(i.searchParams.delete("course"),history.replaceState(history.state,"",i.href)),Ou(t.activeCourse);let{startGame:a}=await Promise.resolve().then(()=>(pm(),fm));a(e,t,n)}By().catch(n=>{console.error(n),document.getElementById("game").setAttribute("aria-busy","false"),document.getElementById("error-layer").hidden=!1,document.getElementById("error-message").textContent="\uC8FC\uD589 \uAE30\uB85D\uC744 \uC5F4 \uC218 \uC5C6\uC5B4\uC694. \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694."});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
