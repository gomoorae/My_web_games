(()=>{var wm=Object.defineProperty;var xt=(n,e)=>()=>(n&&(e=n(n=0)),e);var Am=(n,e)=>{for(var t in e)wm(n,t,{get:e[t],enumerable:!0})};function Ie(n,e,t,i="\uAC00\uC18D \uC218\uBB38"){return{kind:"gate",start:n,offset:e,width:t,name:i}}function je(n,e,t,i,s,r="\uB098\uB8E8 \uBC1C\uD310",o){let a=o>0;return{kind:"ramp",start:n,end:e,offset:t,width:i,rise:s,name:r,boosted:a,kick:a?o:2.2}}function _t(n,e,t,i,s,r="\uBC14\uC704 \uC5EC\uC6B8"){return{kind:"ledge",start:n,end:e,offset:t,width:i,rise:s,name:r}}var Tl=xt(()=>{});var fe,xn,en,q,Hs,Wt,tt,ot,pt,rt,vt,Rm,Cm,Im,Pm,Ko,Lm,Dm,ku,zu=xt(()=>{Tl();fe=(n,e)=>je(n,n+12,e,6.4,1.3,"\uB098\uBB34 \uB3C4\uC57D\uB300"),xn=(n,e)=>je(n,n+14,e,6.6,1.78,"\uAC00\uC18D \uB3C4\uC57D\uB300",3.5),en=(n,e)=>_t(n,n+14,e,7.2,1.36,"\uB3CC\uC5EC\uC6B8"),q=(n,e)=>Ie(n,e,7.3),Hs=n=>({...n,markerStep:59,docks:[],bars:{...n.bars,shared:[[n.fork-26,n.fork-14,-4.3,1.45],[n.fork-12,n.fork-.2,4.9,1.55],...n.bars.shared||[]]},bridges:{shared:[],gorge:[],canal:[],marsh:[],...n.bridges}}),Wt=(n,e,t=2.2,i=0)=>({kind:"log",s:n,offset:e,reach:t,phase:i}),tt=(n,e,t=85)=>({kind:"wind",s:n,end:n+t,dir:e}),ot=(n,e=1,t=0,i=68)=>({kind:"outlet",s:n,end:n+i,side:e,phase:t}),pt=(n,e,t=7,i=82)=>({kind:"ice",s:n,end:n+i,offset:e,width:t}),rt=(n,e)=>({kind:"charge",s:n,offset:e,width:5.4}),vt=(n,e=0,t=0)=>({kind:"lock",s:n,offset:e,phase:t}),Rm=Hs({id:"timber",name:"\uC0BC\uB098\uBB34 \uC81C\uC7AC\uC18C",length:2500,fork:94,merge:2210,seed:12873,description:"\uBB3C\uC5D0 \uB72C \uD1B5\uB098\uBB34\uC758 \uC6C0\uC9C1\uC784\uC744 \uC77D\uACE0 \uBE48\uD2C8\uC73C\uB85C \uBE60\uC838\uB098\uAC00\uC138\uC694.",cellStations:{gorge:264,canal:761,marsh:1325},lanes:{gorge:[-64,12,369,.35,18],canal:[0,5,268,.65,14.7],marsh:[68,14,411,1.9,21.5]},valley:[12,452,6,294],opening:[106,163],outlet:17,flow:{width:3,speed:5.3,saving:.42,draw:.75,assist:.78},elevation:{grade:.035,drop:128,head:.051,tail:.037,shared:[[2246,2330,14],[2372,2455,13]],gorge:[[160,351,23],[505,706,24],[881,1081,25],[1269,1441,20],[1581,1769,18],[1919,2144,18]],canal:[[235,365,18],[580,778,24],[923,1110,27],[1342,1514,21],[1630,1791,18],[1964,2137,20]],marsh:[[159,539,24],[645,982,31],[1118,1489,29],[1591,1896,23],[1955,2161,21]]},features:{shared:[q(54,1.4),q(2262,4.2),fe(2362,-5),q(2461,2)],gorge:[en(164,-3),q(382,4.4),fe(568,-4.8),q(804,3.5),en(1002,-4.3),q(1214,-3.8),fe(1436,4.7),q(1656,-4.1),en(1850,4.4),q(2081,-3.4)],canal:[q(149,2.2),q(336,-4.6),xn(522,4),q(697,-3.8),fe(910,4.5),q(1093,-4.7),xn(1350,-4.3),q(1575,3.7),q(1788,-4.7),fe(1973,4),q(2116,-3)],marsh:[fe(184,-3.9),q(430,3.4),fe(657,4.5),q(884,-4.8),fe(1103,3.1),q(1280,-4.7),fe(1508,4.8),q(1746,-4),fe(1961,-4.2),q(2138,2.6)]},bars:{gorge:[[430,483,-4,3.1],[853,906,4.7,2.9],[1290,1345,4.3,3.2],[1736,1798,-4.2,3.4]],canal:[[391,447,4.4,2.5],[960,1006,-4,3],[1433,1488,4.3,2.8],[1852,1906,4.1,2.9]],marsh:[[271,357,-2.5,4.8],[504,589,2.3,4.6],[758,837,-2.7,4.5],[1002,1066,3,4.7],[1397,1465,-2,4.9],[1640,1706,2.8,4.8],[1842,1903,-2.2,4.2]]},bridges:{canal:[{s:571,wood:!0,side:"right",tip:4.7,deck:3.9,marked:!0,approach:522,name:"\uC81C\uC7AC\uC18C \uC6B4\uBC18\uAD50"}]},reaches:{shared:[Wt(39,-2.6,1.8),Wt(2307,-1.4,2.8,.6),Wt(2426,3.8,2.6,2)],gorge:[Wt(221,1.5),Wt(549,3.7,2,1),Wt(729,-2.8,3.6),Wt(1162,1.2,3,2),Wt(1528,-3.8,2.7),Wt(2013,2,4,1.6)],canal:[Wt(207,-2),Wt(465,-3.2,2,1),Wt(839,2.4,2.4),Wt(1171,-3,3,2.1),Wt(1204,3.5,2.3,.8),Wt(1531,4,2.7),Wt(2036,-2.3,3.7,2.2)],marsh:[Wt(240,4.7),Wt(613,-2.1,3.6),Wt(942,1.4,3.9,1.4),Wt(1235,3.8),Wt(1589,-2.5,3.3),Wt(2019,2.8,3.9,1.8)]}}),Cm=Hs({id:"windreach",name:"\uD48D\uCC28 \uD574\uD611",length:2840,fork:112,merge:2500,seed:15791,description:"\uD48D\uD5A5\uAE30\uC640 \uBE44\uC2A4\uB4EC\uD55C \uD3EC\uB9D0\uC744 \uBCF4\uACE0 \uD6A1\uB958\uC5D0 \uBC00\uB9B4 \uBC29\uD5A5\uC744 \uBBF8\uB9AC \uC7A1\uC73C\uC138\uC694.",cellStations:{gorge:904,canal:283,marsh:1490},lanes:{gorge:[-72,15,435,.1,20],canal:[0,8,323,1.4,17],marsh:[71,13,516,2.1,23]},valley:[16,580,5,219],opening:[116,190],outlet:21,flow:{width:3.25,speed:6.4,saving:.48,draw:.68,assist:1},elevation:{grade:.023,drop:89,head:.04,tail:.032,shared:[[2545,2641,12],[2708,2810,12]],gorge:[[183,494,15],[684,932,18],[1049,1328,13],[1463,1726,17],[1856,2123,14],[2190,2411,12]],canal:[[268,411,12],[549,728,13],[905,1090,17],[1350,1515,16],[1812,2004,16],[2163,2358,15]],marsh:[[190,608,21],[787,1150,23],[1304,1671,22],[1875,2381,23]]},features:{shared:[q(79,-1),fe(2541,-4.7),q(2689,4.6),q(2795,-3)],gorge:[q(183,-3),en(412,4.3),q(680,-4.5),fe(822,4.5),q(1109,-3.6),en(1358,4.9),q(1607,-4.7),fe(1860,-3.9),q(2091,4.4),q(2393,-2.8)],canal:[q(171,2.4),q(383,-4.1),xn(638,4.3),q(899,-4.5),fe(1191,4.2),q(1426,-4.8),xn(1650,4.7),q(1957,-4.1),q(2192,3.8),fe(2403,-3.3)],marsh:[fe(204,-3.8),q(435,4.5),fe(698,-4.2),q(958,4.8),fe(1238,3.9),q(1452,-4),q(1733,4.4),fe(1971,-3.7),q(2211,4.5),fe(2409,-3.3)]},bars:{gorge:[[500,559,3,3.3],[1024,1076,-2.7,3.8],[1720,1795,3.8,4],[2221,2282,-4,3.1]],canal:[[464,513,-3.1,2.7],[993,1040,3.7,3],[1518,1572,4,3.1],[2032,2090,-4.2,2.8]],marsh:[[273,359,2.1,5],[547,625,-2.3,4.6],[803,879,2.4,5.3],[1076,1162,-2.5,5],[1551,1640,2.4,5.2],[1805,1890,-2.2,4.7],[2292,2355,2.7,4.8]]},bridges:{gorge:[{s:1920,wood:!0,side:"left",tip:-4.1,deck:4.2,marked:!0,approach:1860,name:"\uD48D\uCC28 \uC120\uCC29\uAD50"}]},reaches:{shared:[tt(36,1,44),tt(2580,-1,82),tt(2730,1,61)],gorge:[tt(230,-1),tt(581,1),tt(745,-1,56),tt(935,1,78),tt(1224,-1,96),tt(1487,1),tt(1768,-1,70),tt(2010,1,72),tt(2304,-1,67)],canal:[tt(201,1,60),tt(426,-1,105),tt(733,1),tt(1028,-1),tt(1280,1,96),tt(1525,-1,57),tt(1734,1,117),tt(2064,-1,97),tt(2302,1,77)],marsh:[tt(233,-1,80),tt(632,1,94),tt(881,-1,57),tt(1160,1,82),tt(1351,-1,78),tt(1662,1,68),tt(1890,-1,85),tt(2130,1,77),tt(2320,-1,63)]}}),Im=Hs({id:"turbine",name:"\uC218\uCC28 \uBC1C\uC804\uC18C",length:3100,fork:106,merge:2768,seed:18919,description:"\uBB3C\uB808\uBC14\uD034 \uC55E \uBC29\uB958\uAD6C\uAC00 \uAC70\uD488\uC744 \uBFDC\uC744 \uB54C \uADF8\uCABD \uBB3C\uC0B4\uC5D0 \uBD99\uC73C\uBA74 \uAC00\uC18D\uD574\uC694.",cellStations:{gorge:1494,canal:784,marsh:255},lanes:{gorge:[-69,10,394,.85,17],canal:[0,6,325,.5,18],marsh:[65,9,461,2,20]},valley:[9,405,4,260],opening:[117,177],outlet:18,flow:{width:3,speed:5.3,saving:.42,draw:.64,assist:.78},elevation:{grade:.037,drop:168,head:.054,tail:.044,shared:[[2808,2910,22],[2990,3080,17]],gorge:[[182,396,27],[540,735,23],[909,1135,27],[1320,1546,26],[1740,1920,22],[2144,2373,24],[2500,2670,19]],canal:[[212,466,23],[601,849,27],[1040,1242,22],[1447,1616,19],[1730,1948,24],[2090,2327,29],[2464,2672,24]],marsh:[[145,543,33],[698,1046,31],[1184,1530,31],[1670,1962,25],[2076,2378,26],[2460,2663,22]]},features:{shared:[q(76,2),q(2815,-4),xn(2940,4.3),q(3055,-3.5)],gorge:[en(190,-2.7),q(425,4.5),fe(654,-4.7),q(888,4.3),en(1111,-4.9),q(1322,4.6),fe(1566,-4),q(1846,3.7),en(2110,-4.2),q(2340,4.3),fe(2596,-4.3)],canal:[q(158,-2),q(363,4.6),xn(609,-4.7),q(866,4.3),fe(1090,-3.7),q(1324,4.7),xn(1573,-4.5),q(1819,4.5),fe(2059,-3.8),q(2329,4.3),q(2560,-3.5)],marsh:[fe(170,3.5),q(395,-4.3),fe(627,4.7),q(904,-4.7),fe(1160,4.3),q(1431,-4.6),fe(1678,4.8),q(1921,-4.2),fe(2161,4.5),q(2411,-4.7),fe(2633,4)]},bars:{gorge:[[452,519,-3,3.1],[987,1048,3.8,3.4],[1609,1672,-4,3.1],[2212,2278,4.4,3.5]],canal:[[461,517,-3.7,3],[953,1015,3.7,2.8],[1624,1685,3.6,2.9],[2173,2230,-3.7,3]],marsh:[[286,348,1.4,4.5],[509,576,-2.4,4.3],[741,824,2.4,4.9],[1011,1087,-2.8,4.5],[1308,1379,2,4.8],[1744,1833,-2.5,4.7],[2270,2354,2.7,4.6],[2492,2578,-2,4.5]]},bridges:{canal:[{s:669,side:"left",tip:-4.2,deck:4.8,approach:609,marked:!0,name:"\uCDE8\uC218 \uC810\uAC80\uAD50"}]},reaches:{shared:[ot(24,-1,.7,48),ot(2847,1,1.7),ot(2984,-1,3.1)],gorge:[ot(291,-1),ot(740,1,2),ot(1028,-1,3.3),ot(1387,1,1),ot(1727,-1,2.1),ot(2022,1,3.8),ot(2470,-1,.4)],canal:[ot(213,1,.9),ot(457,-1,2.4),ot(718,1,.3),ot(982,-1,3.1),ot(1206,1,1.3),ot(1457,-1,2.5),ot(1702,1,1),ot(1938,-1,.3),ot(2205,1,3),ot(2482,-1,1.8)],marsh:[ot(314,-1,1.7),ot(555,1),ot(826,-1,2.1),ot(1046,1,.5),ot(1300,-1,3),ot(1589,1),ot(1840,-1,2.3),ot(2081,1,.8),ot(2533,-1,3.5)]}}),Pm=Hs({id:"glacier",name:"\uBE59\uD558 \uD611\uACE1",length:3460,fork:124,merge:3090,seed:20857,description:"\uC605\uC740 \uCCAD\uC0C9 \uBE59\uD310\uC740 \uBE60\uB974\uC9C0\uB9CC \uBBF8\uB044\uB7EC\uC6CC\uC694. \uB2E4\uC74C \uAD7D\uC774 \uC804\uC5D0 \uBC29\uD5A5\uC744 \uC7A1\uC73C\uC138\uC694.",cellStations:{gorge:292,canal:937,marsh:1817},lanes:{gorge:[-62,12,335,.5,15.5],canal:[0,8,417,1.6,17.4],marsh:[70,17,518,2.6,23]},valley:[12,343,7,533],opening:[121,195],outlet:18.5,flow:{width:3,speed:5,saving:.4,draw:.59,assist:.77},elevation:{grade:.036,drop:212,head:.05,tail:.038,shared:[[3134,3250,24],[3317,3426,21]],gorge:[[200,384,28],[527,720,29],[879,1109,28],[1251,1486,31],[1669,1873,25],[2055,2259,26],[2416,2638,25],[2792,3010,20]],canal:[[235,468,29],[644,902,29],[1080,1306,30],[1477,1750,33],[1910,2178,35],[2325,2576,30],[2720,2996,26]],marsh:[[174,578,35],[740,1074,33],[1221,1563,35],[1725,2066,34],[2247,2575,37],[2694,3026,38]]},features:{shared:[fe(77,-2),q(3140,-4.4),fe(3276,4.4),q(3391,-3.8)],gorge:[en(177,-3.1),q(413,4),fe(642,-4),q(862,4.4),en(1091,-4.5),q(1345,4.9),fe(1595,-4.4),q(1823,4.2),en(2062,-4.8),q(2305,4.6),fe(2543,-4.2),q(2775,4.4),en(2976,-2.4)],canal:[q(185,2.7),fe(404,-4.1),q(633,4.1),xn(837,-4.4),q(1129,4.6),fe(1388,-4.1),q(1645,4.8),fe(1890,-4.4),q(2117,4.1),xn(2361,-4.3),q(2608,4.4),fe(2843,-3.9),q(3001,3)],marsh:[fe(201,3.8),q(420,-4.8),fe(671,3.6),q(933,-4.5),fe(1210,4.6),q(1455,-4.7),fe(1711,-3.8),q(1947,4.2),fe(2202,-4.2),q(2441,4.8),fe(2703,-4.5),q(2942,3.6)]},bars:{gorge:[[463,506,4,2.8],[949,1006,-3.8,3.1],[1485,1534,4.1,3],[2184,2231,4.4,2.9],[2658,2706,-4.1,3.1]],canal:[[302,352,-3.5,3.3],[738,782,3.7,2.8],[1249,1323,-3.5,3.2],[1762,1820,4.1,3.1],[2252,2318,-4,3.3],[2700,2766,3.8,2.9]],marsh:[[259,338,-1.9,4.7],[489,577,2,5],[761,849,-2.3,4.8],[1012,1114,2.4,5.3],[1315,1407,-2,4.7],[1530,1616,2.1,5.1],[2023,2110,-2.3,5],[2291,2367,2.3,4.7],[2510,2619,-2.2,4.8],[2815,2888,1.9,4.5]]},bridges:{gorge:[{s:2370,wood:!0,deck:8.6}],canal:[{s:2420,wood:!0,side:"left",tip:-3.8,deck:4.8,marked:!0,approach:2361,name:"\uBE59\uD558 \uAD00\uCE21\uAD50"}]},reaches:{shared:[pt(24,2.4,6,43),pt(3181,4.6,7.6,77),pt(3320,-4.2,7,94)],gorge:[pt(226,3.9,7,54),pt(507,-4.4,7,92),pt(750,4.2,6.4,76),pt(1162,3.8,7.5,104),pt(1450,-5.7,7,105),pt(1711,-3.6,7,89),pt(1941,3.9,7.2,86),pt(2432,4.5,8,81),pt(2823,-5.5,7,99)],canal:[pt(265,4.5,7,95),pt(493,-5.1,8,89),pt(719,-4.3,7.2,85),pt(1005,4.8,8.1,95),pt(1242,4.6,7.1,96),pt(1530,-4.8,8,83),pt(1745,-4.4,6.8,104),pt(1991,4.8,8,100),pt(2201,4.2,7.6,79),pt(2496,-5.4,8,78),pt(2803,4.3,7.3,85)],marsh:[pt(360,-3.7,7,48),pt(566,-5.2,8.5,83),pt(839,5.8,9,66),pt(1107,-4.4,7.4,82),pt(1440,5.7,8,85),pt(1617,-4.6,7.2,77),pt(1900,5.8,7.8,68),pt(2160,-4.6,8.3,73),pt(2422,-4.5,8.2,94),pt(2652,5.4,7.6,69),pt(2887,-5,7.5,66)]}}),Ko=n=>n.flatMap(e=>[{s:e,vault:!0},{s:e+21,vault:!0}]),Lm=Hs({id:"cavern",name:"\uBC18\uB527\uBD88 \uB3D9\uAD74\uAC15",length:3920,fork:108,merge:3530,seed:25349,description:"\uCCAD\uB85D\uBE5B \uACB0\uC815 \uACE0\uB9AC \uC0AC\uC774\uB97C \uD1B5\uACFC\uD574 \uC8FC \uBC30\uD130\uB9AC\uB97C \uCDA9\uC804\uD558\uB294 \uC9C0\uD558 \uAC15.",cellStations:{gorge:1056,canal:306,marsh:2118},lanes:{gorge:[-70,13,426,.4,17],canal:[0,8,373,1.3,17.8],marsh:[71,13,526,2.1,22]},valley:[13,473,5.5,318],opening:[135,190],outlet:20,flow:{width:3.2,speed:6,saving:.4,draw:.59,assist:.74},elevation:{grade:.03,drop:142,head:.041,tail:.036,shared:[[3605,3722,19],[3796,3890,16]],gorge:[[182,436,18],[607,856,21],[1020,1256,19],[1460,1701,19],[1913,2141,16],[2342,2586,19],[2794,3051,19],[3200,3444,11]],canal:[[267,508,20],[701,950,21],[1120,1356,20],[1544,1830,23],[2049,2301,18],[2487,2734,20],[3002,3358,20]],marsh:[[170,629,26],[802,1222,25],[1390,1800,21],[2020,2408,24],[2587,2975,22],[3096,3449,24]]},features:{shared:[q(81,1.5),q(3623,4.6),fe(3780,-4.1),q(3865,3.5)],gorge:[fe(181,-3.8),q(414,4.6),en(688,-4.3),q(942,4.3),fe(1225,-4.5),q(1467,4.6),en(1723,-4.6),q(1996,4.2),fe(2252,-4.1),q(2513,4.6),en(2780,-4.1),q(3088,4.4),fe(3312,-4.4)],canal:[q(169,2.8),q(436,-4.1),fe(691,4.2),q(966,-4.7),xn(1210,4.5),q(1481,-4.8),fe(1735,4),q(2002,-4.6),fe(2299,4.6),q(2536,-4.4),xn(2829,4.7),q(3102,-4.2),fe(3355,4.4)],marsh:[fe(190,-3.8),q(451,4.7),fe(724,-4.6),q(986,4.9),fe(1250,-4.2),q(1524,4.7),fe(1778,-4.5),q(2050,4.1),fe(2330,-4.6),q(2597,4.3),fe(2856,-4.4),q(3142,4.7),fe(3401,-3.9)]},bars:{gorge:[[528,597,-3.9,3.2],[1116,1184,4,3.1],[1640,1689,-4,3.3],[2162,2221,4.4,3.2],[2642,2704,-4.1,3.4],[3185,3244,4,3]],canal:[[489,542,-4.1,3],[1030,1090,3.6,2.8],[1584,1647,-3.9,2.9],[2155,2212,4,3],[2682,2750,-4.3,3.1],[3251,3307,4.1,3]],marsh:[[258,337,2,4.9],[514,611,-2.4,5.4],[817,891,2.7,5.1],[1090,1177,-2.4,4.8],[1387,1477,2.8,5.3],[1632,1712,-2.5,4.8],[1878,1960,2.5,5],[2421,2518,-2.6,5.2],[2670,2775,2.2,4.7],[2994,3057,-2.3,4.9],[3272,3342,2.5,4.7]]},bridges:{shared:Ko([38,3563,3683,3810]),gorge:Ko([242,620,889,1418,1856,2118,2664,3155]),canal:[...Ko([215,550,838,1410,1682,2124,2676,3209]),{s:1276,wood:!0,deck:4.5,side:"right",tip:4.2,approach:1210,marked:!0,name:"\uAD11\uC0B0 \uC6B4\uBC18\uAD50"}],marsh:Ko([278,613,916,1190,1506,1942,2498,2802,3085,3375])},reaches:{shared:[rt(43,-1.6),rt(3592,-4.8),rt(3822,4.5)],gorge:[rt(310,4.7),rt(623,-4.6),rt(875,3.9),rt(1146,-5.8),rt(1430,4.8),rt(1850,4.6),rt(2126,-4.9),rt(2470,4.8),rt(2879,-5.1),rt(3181,-4.7),rt(3425,3.8)],canal:[rt(225,-3.1),rt(571,4.6),rt(837,-4.9),rt(1126,4.5),rt(1402,-4.9),rt(1659,4.7),rt(1870,-4.5),rt(2129,4.4),rt(2446,-4.8),rt(2678,4.9),rt(2981,-4.9),rt(3225,4.8),rt(3445,-3.7)],marsh:[rt(382,-4.4),rt(647,-4.7),rt(920,-4.4),rt(1204,4.8),rt(1489,-4.7),rt(1741,4.8),rt(1982,-4.4),rt(2212,4.4),rt(2546,-4.6),rt(2798,4.9),rt(3091,-4.6),rt(3371,-4.4)]}}),Dm=Hs({id:"tideworks",name:"\uB300\uC870\uCC28 \uBC29\uC870\uC81C",length:4800,fork:136,merge:4240,seed:32003,description:"\uC6C0\uC9C1\uC774\uB294 \uAC11\uBB38 \uD2C8\uACFC \uBC14\uAE65 \uC6B0\uD68C\uB85C\uB97C \uACE0\uB974\uACE0, \uD6A1\uB958\uC640 \uBC29\uB958\uB97C \uC9C0\uB098 \uC678\uD574\uB85C \uB098\uAC00\uC138\uC694.",cellStations:{gorge:1128,canal:2194,marsh:355},lanes:{gorge:[-78,16,505,.9,21],canal:[0,7,362,.4,19],marsh:[78,14,591,2.4,24]},valley:[16,544,7,363],opening:[148,224],outlet:22,flow:{width:3.4,speed:6.8,saving:.47,draw:.46,assist:.93},elevation:{grade:.028,drop:171,head:.044,tail:.038,shared:[[4348,4486,21],[4572,4711,22]],gorge:[[190,478,19],[630,901,21],[1104,1380,22],[1570,1811,21],[2015,2293,18],[2518,2786,21],[3020,3333,24],[3583,3991,25]],canal:[[275,557,21],[769,1060,20],[1301,1581,22],[1815,2089,24],[2361,2665,23],[2885,3216,22],[3430,3706,22],[3892,4148,17]],marsh:[[175,684,29],[912,1387,27],[1586,2071,30],[2291,2756,27],[2939,3395,25],[3630,4100,33]]},features:{shared:[q(100,-1.4),q(4286,4),fe(4427,-5),xn(4574,4.7),q(4742,-3.2)],gorge:[en(221,-3.8),q(542,4.8),fe(853,-4.3),q(1192,4.5),en(1483,-4.6),q(1809,4.3),fe(2117,-4.8),q(2411,4.8),en(2776,-4.4),q(3088,4.7),fe(3410,-4.4),q(3774,4.6),en(4011,-3.5)],canal:[q(205,3.8),xn(516,-4.5),q(815,4.6),fe(1110,-4.6),q(1400,4.5),xn(1728,-4.4),q(2035,4.3),fe(2337,-4.9),q(2641,4.7),xn(2961,-4.3),q(3278,4.5),fe(3597,-4.9),q(3910,4.7),q(4135,-3.8)],marsh:[fe(214,-3.4),q(524,4.7),fe(850,-4.3),q(1173,4.6),fe(1493,-4.7),q(1816,4.4),fe(2142,-4.4),q(2475,4.8),fe(2808,-4.5),q(3151,4.3),fe(3475,-4.4),q(3808,4.6),fe(4105,-3.9)]},bars:{gorge:[[400,474,-3.8,3.3],[956,1039,4,3.4],[1660,1730,3.9,3.5],[2266,2341,-4.1,3.7],[2899,2971,4.6,3.2],[3527,3609,-4.4,3.4]],canal:[[341,403,-3.9,3.1],[928,992,4.2,3.1],[1550,1617,-4.2,3],[2219,2282,4.4,3.4],[2821,2878,-3.8,2.9],[3452,3519,4.7,3.3],[3998,4062,-4.1,3.1]],marsh:[[419,478,2.7,5.3],[643,737,-2.9,5.1],[1007,1090,2.6,5.4],[1325,1419,-2.6,5.2],[1612,1717,2.1,4.9],[1943,2050,-2.5,5.4],[2294,2386,2.7,5.6],[2600,2716,-2.5,5.3],[2938,3033,2.4,5.5],[3297,3384,-2.6,5.1],[3600,3705,2.7,5.2],[3936,4019,-2.4,5.1]]},bridges:{canal:[{s:580,side:"left",tip:-4.7,deck:5.1,approach:516,marked:!0,name:"\uBC29\uC870\uC81C \uC810\uAC80\uAD50"},{s:3030,side:"left",tip:-4.3,deck:5.2,approach:2961,marked:!0,name:"\uC678\uD574 \uC810\uAC80\uAD50"}]},reaches:{shared:[vt(55,0,.9),tt(4305,-1,75),vt(4494,0,2.1),ot(4620,1,1.5),vt(4707,-1,.8)],gorge:[vt(324,1),tt(564,-1,74),vt(764,0,1.5),ot(990,1,1.8),vt(1317,-1,2.5),tt(1550,1,85),vt(1920,0,.6),ot(2170,-1,.6),vt(2543,1.2,2.3),tt(2968,-1,80),vt(3205,-1.3,1.4),ot(3466,1,2.8),vt(3883,0,2.7),vt(4120,0,.3)],canal:[vt(291,0,.4),ot(627,1,1.5),vt(750,-1,2.1),vt(1040,0,.8),tt(1190,-1,87),vt(1480,1.2,3.4),vt(1659,-1,1.2),ot(1861,-1,2.3),vt(2126,0,.9),tt(2420,1,98),vt(2746,-1.4,2.6),vt(2899,1,.3),ot(3111,1,2.8),vt(3381,-1,.8),tt(3653,-1,100),vt(3857,1,2.8),vt(4087,0,1.7)],marsh:[tt(259,1,64),vt(568,-1,2),ot(748,-1,1.4),vt(961,0,.7),tt(1199,-1,89),vt(1440,1.2,2.8),vt(1738,-1,1.1),ot(1896,1,2.7),vt(2239,.8,.4),tt(2516,1,72),vt(2739,-1,2.5),ot(2891,-1,.8),vt(3202,1,1.8),tt(3402,-1,63),vt(3742,-1,.6),vt(4049,0,2.2)]}}),ku=[Rm,Cm,Im,Pm,Lm,Dm]});function kr(n){return Array.isArray(n)?Ct.filter(e=>n.includes(e)):[]}function Vu(n){te=un(n)||rn[0]}var Ct,Hu,Um,Fm,Nm,rn,un,te,Vs,tn=xt(()=>{Tl();zu();Ct=["gorge","canal","marsh"];Hu={id:"basin",name:"\uBC84\uB4DC\uB098\uBB34 \uAC1C\uC6B8",length:1440,fork:72,merge:1320,cellStations:{gorge:198,canal:421,marsh:822},description:"\uC790\uAC08\uD1B1 \uB108\uBA38\uB85C \uC138 \uBB3C\uAE38\uC774 \uAC08\uB77C\uC9C0\uB294 \uAC1C\uC6B8.",seed:0},Um={id:"harbor",name:"\uB178\uC744\uBE5B \uD56D\uAD6C",length:840,fork:68,merge:626,seed:2311,cellStations:{gorge:443,canal:189,marsh:251},description:"\uB4F1\uB300\uB97C \uB3CC\uC544 \uC591\uCABD\uC73C\uB85C \uC5C7\uAC08\uB9B0 \uC218\uBB38\uC744 \uC787\uB294 \uB2E8\uAC70\uB9AC.",lanes:{gorge:[-44,6,180,.3,10],canal:[0,3,225,0,9],marsh:[44,7,270,1.1,13]},valley:[4,223,2,107],opening:[78,92],outlet:15,flow:{width:2.1,speed:2.9,saving:.15,draw:1.95,assist:0},elevation:{grade:.016,drop:19,head:.038,tail:.019,shared:[[648,691,3]],gorge:[[120,171,7],[328,370,5],[470,525,7]],canal:[[157,203,6],[283,327,7],[487,536,6]],marsh:[[204,290,9],[402,540,10]]},features:{shared:[Ie(32,0,7.4,"\uB4F1\uB300 \uC218\uBB38"),Ie(649,4.6,6.2,"\uC678\uD56D \uC218\uBB38"),je(694,706,-4.7,5.8,1.18,"\uBD80\uB450 \uB098\uBB34 \uBC1C\uD310")],gorge:[Ie(109,-2.6,6.1),Ie(160,4.2,5.7),je(222,232,-3.6,5.2,1.36,"\uD558\uC5ED \uBC1C\uD310",3.6),Ie(316,3.8,5.9),Ie(388,-3.5,5.9),je(465,476,3.9,5.5,1.42,"\uBC29\uD30C\uC81C \uBC1C\uD310",3.4),Ie(565,-2.5,6.3)],canal:[Ie(100,-3.1,6.3),Ie(150,3.8,5.8),Ie(204,-4,6),je(259,271,3.5,5.6,1.64,"\uC870\uC120\uC18C \uB3C4\uC57D\uB300",3.7),Ie(345,-3.7,5.7),je(410,419,4.8,5.5,.92,"\uC811\uC548 \uBC1C\uD310"),Ie(466,3.8,6.1),Ie(512,-4.2,5.8)],marsh:[je(117,127,3.5,5.4,.85,"\uB098\uB8FB\uBC30 \uBC1C\uD310"),Ie(191,-3,6.6),Ie(274,4.3,6.3),je(359,370,-4,6,1.18,"\uBD80\uC794\uAD50 \uBC1C\uD310"),Ie(443,3.2,6.2),Ie(537,-3.2,6.5)]},bars:{shared:[[49,59,-4.3,1.3],[60,67.7,4.9,1.4],[675,703,3.8,2.4]],gorge:[[186,204,2.7,1.7],[417,439,-3.9,1.8]],canal:[[318,335,3.4,1.8],[492,516,3.5,2]],marsh:[[154,178,-1.5,2.6],[301,334,1.4,2.9],[469,504,-2.5,2.3]]},bridges:{gorge:[{s:381,deck:5.6}],canal:[{s:302,deck:6.8,panel:{side:"right",tip:1.9,clearance:3.1},approach:259,marked:!0,name:"\uD558\uC5ED\uAD50"}],marsh:[{s:403,wood:!0,deck:3.6,side:"left",tip:-3.6,approach:359,marked:!0,name:"\uB3CC\uCD9C \uBD80\uC794\uAD50"}],shared:[]},docks:[183,392,547],markerStep:32},Fm={id:"basalt",name:"\uD604\uBB34\uC554 \uAE09\uB958",length:1760,fork:126,merge:1404,seed:5783,cellStations:{gorge:556,canal:943,marsh:227},description:"\uC8FC\uC0C1\uC808\uB9AC \uC0AC\uC774\uC758 \uBC14\uC704\uD131\uC744 \uB118\uC5B4 \uACC4\uB2E8\uC2DD \uAE09\uB958\uB97C \uB0B4\uB824\uAC00\uB294 \uCF54\uC2A4.",lanes:{gorge:[-61,11,246,.1,11.8],canal:[0,8,337,.7,14.4],marsh:[58,9,382,2.4,16]},valley:[12,305,6,192],opening:[99,150],outlet:14.4,flow:{width:2.6,speed:4.5,saving:.24,draw:1.14,assist:.28},elevation:{grade:.043,drop:288,head:.09,tail:.043,shared:[[44,115,14],[1418,1500,31],[1550,1634,29],[1672,1745,23]],gorge:[[156,228,38],[295,372,39],[469,547,40],[658,740,45],[860,951,46],[1078,1167,40],[1280,1366,40]],canal:[[192,281,36],[367,460,41],[550,657,49],[777,878,46],[979,1080,52],[1216,1330,64]],marsh:[[161,318,50],[394,547,54],[601,811,64],[903,1072,55],[1134,1328,65]]},features:{shared:[_t(47,58,1.7,6.3,1.18,"\uCCAB \uB3CC\uACC4\uB2E8"),_t(1431,1444,-5.5,7.5,1.6),Ie(1520,-5.6,7.4,"\uD569\uC218\uBAA9 \uC218\uBB38"),_t(1571,1584,5.7,7.6,1.7),_t(1685,1698,-5.1,7.5,1.5)],gorge:[_t(168,180,-3,6.7,1.53),_t(305,319,3.2,6.5,1.72),_t(479,492,-3.8,6.4,1.76),_t(672,685,3.5,6.8,1.8),_t(877,889,-3.2,7,1.89),_t(1096,1109,3.6,7.2,1.84),_t(1295,1309,-3.3,7.2,1.85)],canal:[_t(201,214,4.9,7,1.6),Ie(316,-3,7,"\uC18C\uC6A9\uB3CC\uC774 \uC218\uBB38"),_t(381,393,-5.2,6.7,1.64),je(548,562,3.7,6.1,1.85,"\uCC44\uC11D\uC7A5 \uBC1C\uD310",3.5),_t(657,669,-4.8,7,1.21),_t(788,801,5.1,7,1.75),Ie(916,-3,7,"\uD558\uB958 \uC218\uBB38"),_t(990,1004,-5.1,7.4,1.86),_t(1239,1252,5.3,7.5,2.04)],marsh:[Ie(172,2.4,7.4),_t(246,261,-3.2,7.2,1.14),je(412,424,3.8,6.2,1.1),Ie(575,-2.7,6.9),_t(701,718,3.3,7.2,1.18),Ie(862,2.6,7.2),_t(998,1012,-3.2,7.2,1.28),je(1161,1175,3,6.3,1.2),Ie(1314,-2.9,7.2)]},bars:{shared:[[96,112,-4.3,1.6],[113,125.8,4.9,1.5],[1490,1510,-4.2,2.6],[1615,1652,4.9,2.8]],gorge:[[237,270,4.8,2.6],[405,448,-4.4,2.6],[581,615,4,2.4],[765,807,-3.8,3],[987,1039,4.1,2.7],[1180,1220,-4.3,2.7]],canal:[[271,303,-4.1,2.3],[457,503,4.4,2.8],[710,745,-4.5,2.7],[854,899,4.2,2.9],[1100,1155,-3.7,3]],marsh:[[335,385,-1,3.3],[484,544,1.6,3.4],[616,673,-2.4,3.8],[775,816,1.2,3],[931,970,-1.6,3.4],[1076,1124,2.5,3.2],[1233,1280,-1.7,3.6]]},bridges:{gorge:[],canal:[{s:605,wood:!0,deck:7.9,side:"right",tip:3,approach:548,marked:!0,name:"\uCC44\uC11D\uC7A5 \uC794\uAD50"}],marsh:[{s:899,wood:!0,deck:7.5}],shared:[]},docks:[418,871,1193],markerStep:49},Nm={id:"delta",name:"\uAC08\uB300 \uC0BC\uAC01\uC8FC",length:2240,fork:96,merge:1984,seed:8921,cellStations:{gorge:296,canal:681,marsh:1206},description:"\uAC08\uB300\uC12C\uC744 \uB3CC\uC544 \uD770 \uBB3C\uC0B4\uC744 \uC624\uB798 \uD0C8\uC218\uB85D \uC720\uB9AC\uD55C \uC7A5\uAC70\uB9AC.",lanes:{gorge:[-69,12,412,1.3,20],canal:[0,10,356,.4,17],marsh:[77,14,470,2.3,23]},valley:[15,510,6,274],opening:[120,178],outlet:20,flow:{width:3.15,speed:6.2,saving:.52,draw:.87,assist:.96},elevation:{grade:.027,drop:68,head:.038,tail:.035,shared:[[2010,2084,13],[2153,2227,13]],gorge:[[136,348,14],[492,731,14],[855,1082,14],[1272,1530,12],[1667,1900,14]],canal:[[260,340,12],[627,731,13],[930,1039,14],[1310,1398,16],[1702,1792,13]],marsh:[[160,462,17],[602,935,16],[1060,1421,17],[1560,1887,18]]},features:{shared:[je(54,63,-1.7,5.2,.63,"\uC0AC\uACF5\uC758 \uBC1C\uD310"),Ie(2020,4.4,7.4,"\uD569\uC218\uBAA9 \uC218\uBB38"),je(2102,2115,-4.1,6.1,1.08),Ie(2177,3.3,7.1,"\uD558\uAD6C \uC218\uBB38")],gorge:[Ie(154,3.6,7.2),je(316,329,-4.5,6.2,1.05),Ie(510,-4,7.3),je(695,709,4.5,6,1.23),Ie(891,4.4,7.1),je(1072,1084,-4.2,5.7,1.13),Ie(1260,-3.7,7.3),je(1496,1509,4.6,6,1.16),Ie(1724,-4.6,7.2),Ie(1880,3.1,7.4)],canal:[Ie(161,-3.8,6.9),Ie(344,4,6.8),je(524,537,4.3,6.2,1.3,"\uC591\uC218\uC7A5 \uBC1C\uD310",3.4),Ie(702,-4,6.8),Ie(906,4.4,7),je(1082,1095,-4.5,6,1.29),Ie(1275,3.1,6.9),Ie(1487,-4.5,7.1),je(1650,1665,4.8,6.4,1.34,"\uBC30\uC218\uB85C \uBC1C\uD310",3.6),Ie(1875,-4.2,7.1)],marsh:[je(186,197,4.4,6.3,.86),Ie(412,-4.4,7.6),je(623,636,4,6,.93),Ie(820,-4,7.5),je(1038,1051,-4.6,5.9,1.03),Ie(1236,4.4,7.5),je(1458,1471,4.1,6.3,.98),Ie(1637,-4.4,7.5),je(1846,1859,4.8,6,1.08)]},bars:{shared:[[72,84,-4.3,1.7],[85,95.8,4.9,1.6],[2058,2097,-1.8,4],[2128,2166,2.7,3.4]],gorge:[[180,278,1.2,5.3],[356,466,-2,5.5],[560,654,2.6,5.1],[735,843,-1.5,5.3],[936,1034,2.4,5.3],[1126,1213,-1.2,5.5],[1322,1441,1.8,5.6],[1557,1674,-2.6,5.3],[1763,1852,2.6,5.4]],canal:[[211,305,-1.6,4.5],[382,472,2,4.3],[576,668,-2.4,4.6],[752,849,2.5,4.2],[947,1039,-2.3,4.4],[1143,1229,2.1,4.4],[1340,1435,-1.6,4.8],[1528,1614,1.9,4.6],[1724,1824,-1.9,4.4]],marsh:[[230,360,2,5.6],[457,573,-2.4,6.1],[674,778,2,6],[872,981,-1.8,6.1],[1103,1191,2.4,5.7],[1282,1401,-2.4,6.2],[1516,1594,2.6,5.6],[1680,1786,-2.1,6.2],[1890,1945,2,4.3]]},bridges:{gorge:[{s:1120,wood:!0,deck:4.6,side:"left",tip:-3.7,approach:1072,marked:!0,name:"\uAC08\uB300 \uB098\uB8E8"}],canal:[{s:565,wood:!0,deck:5.8,side:"right",tip:3.3,approach:524,marked:!0,name:"\uC591\uC218\uC7A5 \uC794\uAD50"}],marsh:[],shared:[]},docks:[162,479,812,1099,1518,1879],markerStep:47},rn=[Hu,Um,Fm,Nm,...ku],un=n=>rn.find(e=>e.id===n),te=un(new URLSearchParams(globalThis.location?.search).get("course"))||Hu,Vs=n=>(n/1e3).toLocaleString("ko-KR",{maximumFractionDigits:2})+" km"});function qn(n=1){let e=Number.isFinite(n)?Math.min(Gs,Math.max(1,Math.floor(n)))-1:0;return Gu[e]}var Om,Gu,Gs,$o=xt(()=>{Om=[["\uB098\uBB34\uD310 \uBCF4\uD2B8",11.8,11,1,15,1.5],["\uD569\uD310 \uBCF4\uD2B8",13.1,13,1.06,34,1.39],["\uAC15\uD654 \uC120\uC218 \uBCF4\uD2B8",14.3,15.4,1.13,43,1.27],["\uD22C\uC5B4\uB9C1 \uBCF4\uD2B8",15.7,17.8,1.21,54,1.15],["\uC708\uB4DC\uC2E4\uB4DC \uBCF4\uD2B8",17.1,20.7,1.27,66,1.04],["\uC2A4\uD3EC\uCE20 \uBCF4\uD2B8",18.6,24.5,1.34,78,.92],["\uC2A4\uD3EC\uCE20 \uD130\uBCF4",19.8,29,1.42,90,.76],["\uB808\uC774\uC2F1 \uBCF4\uD2B8",21.2,46,1.52,104,.34],["\uD2B8\uC708 \uB808\uC774\uC11C",23.1,52,1.62,120,.14],["\uD2B8\uC708 \uBAA8\uD130\uBCF4\uD2B8",26.3,72,1.8,0,0]],Gu=Om.map(([n,e,t,i,s,r],o)=>({level:o+1,name:n,cruise:e,endurance:t,boostScale:i,cost:s,hullDrag:r})),Gs=Gu.length});function wl(n,e=te){if(!Number.isFinite(n))return 0;let t=Math.max(0,Math.min(n,e.length)),i=Math.floor(t*10);return Math.floor(i*10/e.length)}function Bm(n={}){let e=Array.isArray(n?.recent)?n.recent:[];return{revision:0,activeCourse:rn[0].id,visit:1,completedCourses:[],boostCells:[],level:1,parts:0,best:0,legacyBest:Math.max(0,Math.min(100,Number(n?.best)||0)),recent:e.filter(t=>t&&Number.isFinite(t.distance)&&Number.isFinite(t.time)&&Number.isFinite(t.power)&&typeof t.route=="string").slice(0,3).map(t=>({...t,trial:!0}))}}function Ws(n,e){return e==="basin"?{best:n.basinBest||0,branches:n.basinBests||{}}:n.courseRecords?.[e]||{best:0,branches:{}}}function os(n){return rn.find(e=>!n.completedCourses.includes(e.id))||rn.at(-1)}function as(n,e){return n.completedCourses.includes(e)||os(n).id===e}function Wu(n){if(n.visit>=1&&un(n.activeCourse)&&Array.isArray(n.completedCourses)){let a=kr(n.boostCells);return Array.isArray(n.boostCells)&&n.boostCells.length===a.length&&a.every((c,l)=>c===n.boostCells[l])?n:{...n,boostCells:a}}let e=Array.isArray(n.recent)?n.recent:[],t=rn.filter(a=>{let{best:c,branches:l}=Ws(n,a.id);return Math.max(c,...Object.values(l||{}))>=a.length||e.some(h=>h.course===a.id&&h.cleared)}).map(a=>a.id),i=e.find(a=>un(a.course)),s=un(i?.course)||rn[0],r={...n,recent:e,completedCourses:t,activeCourse:s.id,visit:1,boostCells:[]},o=rn[rn.indexOf(s)+1];return as(r,s.id)?i?.cleared&&o&&(r.activeCourse=as(r,o.id)?o.id:os(r).id):r.activeCourse=os(r).id,r.activeCourse!==s.id&&(r.visit++,r.level=1,r.parts=0),r}function Xu(n,e){return{...n,activeCourse:e,visit:n.visit+1,level:1,parts:0,boostCells:[]}}function km(n,e,t){return t!==n.visit||e===n.activeCourse||!un(e)||!as(n,e)?n:Xu({...n,revision:n.revision+1},e)}function qu(n,e){return!Ct.includes(e)||n.includes(e)?n:kr([...n,e])}function zm(n,e,t,i){if(e!==n.activeCourse||t!==n.visit)return n;let s=qu(n.boostCells,i);return s===n.boostCells?n:{...n,boostCells:s,revision:n.revision+1}}function Hm(n,e){let t=un(e.course),i=(e.visit??1)===n.visit&&(t?t.id===n.activeCourse:!e.course),s=t&&e.cleared===!0&&e.distance>=t.length,r={...n,revision:n.revision+1,best:Math.max(n.best,e.distance),parts:n.parts+(i?e.earned:0),recent:[e,...n.recent].slice(0,3)};if(!t)return r;i&&e.pickedCell===e.branch&&(r.boostCells=qu(n.boostCells,e.pickedCell));let o=Ws(n,t.id),a=Math.max(o.best,e.distance),c={...o.branches};if(e.branch&&(c[e.branch]=Math.max(c[e.branch]||0,e.distance)),t.id==="basin"?(r.basinBest=a,r.basinBests=c):r.courseRecords={...n.courseRecords,[t.id]:{best:a,branches:c}},!s)return r;n.completedCourses.includes(t.id)||(r.completedCourses=[...n.completedCourses,t.id]);let l=rn[rn.indexOf(t)+1];if(!i||!l)return r;let h=as(r,l.id)?l:os(r),u=Xu(r,h.id);return u.recent[0]={...e,arrivalVisit:u.visit},u}function Vm(n,e,t=n.visit){let i=qn(n.level);return t!==n.visit||n.level!==e||n.level>=Gs||n.parts<i.cost?n:{...n,revision:n.revision+1,level:n.level+1,parts:n.parts-i.cost}}function Rl(n){for(let e of Al)try{globalThis[e].setItem(jo+n.id,JSON.stringify(n));return}catch{}}function Xs(n){for(let e of Al)try{globalThis[e].removeItem(jo+n)}catch{}}function Yu(){let n=new Map;for(let e of Al)try{let t=globalThis[e];for(let i=0;i<t.length;i++){let s=t.key(i);if(!s?.startsWith(jo))continue;let r;try{r=JSON.parse(t.getItem(s))}catch{continue}if(!r?.id||jo+r.id!==s)continue;(r.kind==="cell"?un(r.course)&&Number.isSafeInteger(r.visit)&&Ct.includes(r.branch):Number.isFinite(r.earned)&&Number.isFinite(r.distance))&&n.set(r.id,r)}}catch{}return[...n.values()]}function Zu(n){let e="willow-creek.garage.backup",t={profile:Bm(n),paid:[]};function i(){let a=t;function c(l){l?.profile&&Array.isArray(l.paid)&&l.profile.revision>=a.profile.revision&&(a=l)}try{c(history.state?.creekGarage)}catch{}try{c(JSON.parse(sessionStorage.getItem(e)))}catch{}try{c(JSON.parse(localStorage.getItem(e)))}catch{}return a}function s(a){t=a;try{localStorage.setItem(e,JSON.stringify(a));return}catch{}try{sessionStorage.setItem(e,JSON.stringify(a));return}catch{}try{history.replaceState({...history.state,creekGarage:a},"")}catch{}}let r=new Promise(a=>{try{let c=indexedDB.open("willow-creek-garage",1);c.onupgradeneeded=()=>c.result.createObjectStore("garage"),c.onsuccess=()=>a(c.result),c.onerror=()=>a(null)}catch{a(null)}});async function o(a,c){let l=await r;if(!l){let h=()=>{let u=i(),d=Wu(u.profile),p=c&&!u.paid.includes(c),m=a&&(!c||p)?a(d):d;return(m!==u.profile||p)&&s({profile:m,paid:p?[...u.paid,c]:u.paid}),m};return navigator.locks?navigator.locks.request(e,h):h()}return new Promise((h,u)=>{let d=l.transaction("garage","readwrite"),p=d.objectStore("garage"),m;d.oncomplete=()=>h(m),d.onabort=()=>u(d.error||new Error("garage transaction failed"));let _=p.get("profile");_.onsuccess=()=>{let g=_.result?null:i(),f=_.result||g.profile;if(m=Wu(f),(g||m!==f)&&p.put(m,"profile"),g)for(let S of g.paid)p.put(!0,"paid/"+S);function v(){let S=a(m);S!==m&&(m=S,p.put(m,"profile")),c&&p.put(!0,"paid/"+c)}if(a)if(c){let S=p.get("paid/"+c);S.onsuccess=()=>{S.result||v()}}else v()}})}return{read:()=>o(null),credit:a=>o(c=>Hm(c,a),a.id),collect:a=>o(c=>zm(c,a.course,a.visit,a.branch)),enter:(a,c)=>o(l=>km(l,a,c)),upgrade:(a,c)=>o(l=>Vm(l,a,c))}}var jo,Al,Cl=xt(()=>{tn();$o();jo="willow-creek.pending.",Al=["localStorage","sessionStorage"]});function qs(n,e,t,i,s,r){return{sky:n,fog:e,sun:t,ground:i,island:s,density:.007,water:Object.fromEntries(["shared","gorge","canal","marsh"].map((o,a)=>[o,[r[a],r[4],r[5]]]))}}var Gm,Ht,Qo=xt(()=>{tn();Gm={timber:qs(["#dce9d9","#7faab7"],"#c9dbcb","#fff0c3",[["#bea881","#d3c39a"],["#867b57","#a28c61"],["#60764d","#788852","#687c4d"]],["#aa9975","#b3a17a"],["#3e776e","#386e67","#417f78","#4a796a","#adb798","#86c1a9"]),windreach:qs(["#f1dbbc","#719ec3"],"#dfd9be","#ffe2b9",[["#dfc891","#d8bf88"],["#aba36e","#bbab75"],["#9aa66e","#b2b77a"]],["#b4a477","#c1b381"],["#408697","#33788b","#498c99","#498b90","#c4c7a6","#8acbd0"]),turbine:qs(["#e2d1ac","#819baa"],"#c5c9b4","#ffdfb0",[["#baad8b","#b3a789"],["#89978d","#97a199"],["#9c9c77","#a5a684"]],["#b6b399","#969f94"],["#3b7d80","#387273","#3e8384","#447d79","#a8b7a1","#83c9bd"]),glacier:qs(["#eaf4f4","#719cc2"],"#c9dde6","#e1f2ff",[["#b8d3dc","#d7e7e9"],["#92adbd","#b0c4ce"],["#dbe9e8","#e6efed","#c9dbdd"]],["#c9e1e4","#d9e9e9"],["#478eab","#377f9c","#478aa7","#549cae","#bedbdb","#8dd4da"]),cavern:qs(["#535274","#222943"],"#646884","#eee0ff",[["#746883","#8a8291"],["#60596f","#72637b"],["#4e4c60","#62566a"]],["#786b88","#948699"],["#346d7a","#315f73","#387786","#3b7183","#88889a","#80c8c3"]),tideworks:qs(["#e0bfa6","#667f9c"],"#bfb8ad","#ffe2bd",[["#b5b1a2","#cac5b2"],["#8b928f","#9ca19a"],["#979a83","#aaa98d"]],["#9d9d90","#b4b09a"],["#426d80","#3c6478","#487587","#4e7680","#a6ada0","#83b7be"]),harbor:{sky:["#f3c1a0","#849ec2"],fog:"#e7bba5",sun:"#ffd7a6",density:.007,ground:[["#d4c5a7","#c2b99f"],["#8a9291","#9ea5a0","#abb0a6"],["#c6ac88","#b8a790"]],island:["#b3a092","#aa9e87","#bfac91"],water:{shared:["#386a83","#a4b3a3","#71b6bc"],gorge:["#365e79","#989f96","#72a8ab"],canal:["#376b81","#93a4a0","#6babb4"],marsh:["#437880","#b7be9e","#84b4a9"]}},basalt:{sky:["#c6d8e1","#7597b8"],fog:"#b9ceda",sun:"#e1f1ff",density:.008,ground:[["#838d93","#959b9c"],["#4f5661","#5e6770","#657076"],["#626f69","#788175","#65746f"]],island:["#697379","#798389","#58666c"],water:{shared:["#287e9b","#acc5bc","#87d2d0"],gorge:["#237390","#a1bebc","#8ed8db"],canal:["#317e92","#9cbdb5","#82cad0"],marsh:["#468b92","#aec6b3","#90d0c3"]}},delta:{sky:["#f1e3bc","#8dc0c8"],fog:"#e3dcb8",sun:"#ffedbf",density:.0065,ground:[["#d6be8a","#e2cb98"],["#b7ad72","#b1a773","#c1b782"],["#9ca66d","#b2af76","#a3ac73"]],island:["#d5bf8b","#c1b37b","#b8a774"],water:{shared:["#46837e","#bbbc88","#8ac1aa"],gorge:["#3e797c","#acab79","#85b9a5"],canal:["#46888a","#b3b985","#8fc8b0"],marsh:["#538a78","#c0bd85","#a0c59d"]}}},Ht=Gm[te.id]});function Io(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function Wm(n,e){return(n%e+e)%e}function Pl(n,e,t){return(1-t)*n+t*e}function zr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function wh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hf(){let n=$r("canvas");return n.style.display="block",n}function cr(n){n in Ku||(Ku[n]=!0,console.warn(n))}function uf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Xm(){let n={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===wt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(s.r=or(s.r),s.g=or(s.g),s.b=or(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ms]:{primaries:e,whitePoint:i,transfer:Jr,toXYZ:$u,fromXYZ:ju,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:$u,fromXYZ:ju,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),n}function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Ul(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ia.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Nl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ls.fromArray(n,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),c=e.dot(ls),l=t.dot(ls),h=i.dot(ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function Jl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function sg(n,e,t,i,s,r,o,a){let c;if(e.side===ln?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ei,a),c===null)return null;pa.copy(a),pa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(pa);return l<t.near||l>t.far?null:{distance:l,point:pa.clone(),object:n}}function ma(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ha),n.getVertexPosition(c,ua),n.getVertexPosition(l,da);let h=sg(n,e,t,i,ha,ua,da,ld);if(h){let u=new U;Vi.getBarycoord(ld,ha,ua,da,u),s&&(h.uv=Vi.getInterpolatedAttribute(s,a,c,l,u,new at)),r&&(h.uv1=Vi.getInterpolatedAttribute(r,a,c,l,u,new at)),o&&(h.normal=Vi.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};Vi.getNormal(ha,ua,da,d.normal),h.face=d,h.barycoord=u}return h}function ys(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let i=ys(n[t]);for(let s in i)e[s]=i[s]}return e}function rg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ah(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}function va(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Na.fromBufferAttribute(a,s),Oa.fromBufferAttribute(a,r),t.distanceSqToSegment(Na,Oa,Ql,md)>i)return;Ql.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ql);if(!(l<e.near||l>e.far))return{distance:l,point:md.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}function vd(n,e,t,i,s,r,o){let a=oh.distanceSqToPoint(n);if(a<t){let c=new U;oh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function Sa(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function fg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ih(n,e,t,i){let s=Sg(i);switch(t){case yh:return n*e;case uc:return n*e/s.components*s.byteLength;case dc:return n*e/s.components*s.byteLength;case Sh:return n*e*2/s.components*s.byteLength;case fc:return n*e*2/s.components*s.byteLength;case Mh:return n*e*3/s.components*s.byteLength;case kn:return n*e*4/s.components*s.byteLength;case pc:return n*e*4/s.components*s.byteLength;case wo:case Ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gc:case xc:return Math.max(n,16)*Math.max(e,8)/4;case mc:case _c:return Math.max(n,8)*Math.max(e,8)/2;case vc:case yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Nc:case Oc:case Bc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case kc:case zc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hc:case Vc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sg(n){switch(n){case jn:case gh:return{byteLength:1,components:1};case _r:case _h:case xr:return{byteLength:2,components:1};case lc:case hc:return{byteLength:2,components:4};case Zi:case cc:case Qn:return{byteLength:4,components:1};case xh:case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}var Sd,hh,bd,uh,Ed,hi,Ei,ln,Ut,Ri,fs,dh,fh,ph,Td,Wi,wd,Ad,Rd,Cd,Id,Pd,Ld,Dd,Ea,Ta,Ud,Fd,Nd,Od,Bd,kd,zd,Hd,Vd,$a,ja,Qa,ps,ec,tc,nc,ic,sc,Gd,Wd,Ci,Xd,qd,Yd,Zd,Jd,Kd,$d,mh,xs,vs,rc,oc,Eo,wa,Gi,Aa,En,jd,To,$n,ac,Yi,jn,gh,_h,_r,cc,Zi,Qn,xr,lc,hc,vr,xh,vh,yh,Mh,kn,ar,yr,uc,dc,Sh,fc,pc,wo,Ao,Ro,Co,mc,gc,_c,xc,vc,yc,Mc,Sc,bc,Ec,Tc,wc,Ac,Rc,Cc,Ic,Pc,Lc,Dc,Uc,Fc,Nc,Oc,Bc,kc,zc,Hc,Vc,Zr,Ra,ba,th,nh,ih,Qd,ef,bh,tf,Ii,vn,ms,Jr,wt,ds,sh,nf,sf,rf,Eh,of,af,cf,lf,rh,Ji,Th,Kn,Kr,Ti,dn,Il,Ca,at,Tn,U,Ll,Ju,Qe,Dl,Ku,$u,ju,mt,Ys,Ia,qm,lr,Ym,Fl,wn,Vt,Pa,si,jr,La,ri,xi,Yn,ea,Zs,Js,Ks,Ni,Oi,cs,Hr,ta,na,ls,Zm,Vr,Ol,oi,vi,Bl,ia,Bi,kl,sa,zl,hr,yt,$s,Zn,Jm,Km,ki,ra,Cn,Qu,ed,mn,Qr,$m,td,js,yi,oa,Gr,jm,Qm,nd,id,sd,rd,eg,Qs,Hl,Xt,Jn,Mi,Vl,Si,er,tr,od,Gl,Wl,Xl,ql,Yl,Zl,Vi,df,zi,aa,Pe,fn,tg,ai,Zt,Kt,ca,ng,an,eo,to,Ze,ig,Bn,Kl,nr,In,Wr,on,Mt,ad,hs,la,cd,ha,ua,da,$l,fa,ld,pa,bt,ci,ff,og,ag,Pn,no,Hi,hd,ud,pn,ir,sr,Da,io,Ua,cn,cg,ur,so,ro,Fa,oo,rr,dd,ga,fd,lg,Xr,qr,gs,jl,hg,ug,ii,us,dg,_a,dr,fr,Na,Oa,pd,Yr,xa,Ql,md,Ba,gd,_d,ao,pr,xd,oh,ya,Ma,co,lo,ho,uo,li,fo,mr,gr,po,mo,wi,go,_o,xo,Ai,ka,za,_s,Ha,Va,Ga,Ln,Xi,Wa,Xa,qa,vo,qi,Ya,Za,pf,Ja,yo,Mo,eh,yd,Md,ah,So,ch,bo,Ka,Rh,pg,Ch,mg,gg,_g,xg,vg,yg,Mg,lh,Nt,Vy,Ph=xt(()=>{Sd=0,hh=1,bd=2,uh=1,Ed=2,hi=3,Ei=0,ln=1,Ut=2,Ri=0,fs=1,dh=2,fh=3,ph=4,Td=5,Wi=100,wd=101,Ad=102,Rd=103,Cd=104,Id=200,Pd=201,Ld=202,Dd=203,Ea=204,Ta=205,Ud=206,Fd=207,Nd=208,Od=209,Bd=210,kd=211,zd=212,Hd=213,Vd=214,$a=0,ja=1,Qa=2,ps=3,ec=4,tc=5,nc=6,ic=7,sc=0,Gd=1,Wd=2,Ci=0,Xd=1,qd=2,Yd=3,Zd=4,Jd=5,Kd=6,$d=7,mh=300,xs=301,vs=302,rc=303,oc=304,Eo=306,wa=1e3,Gi=1001,Aa=1002,En=1003,jd=1004,To=1005,$n=1006,ac=1007,Yi=1008,jn=1009,gh=1010,_h=1011,_r=1012,cc=1013,Zi=1014,Qn=1015,xr=1016,lc=1017,hc=1018,vr=1020,xh=35902,vh=35899,yh=1021,Mh=1022,kn=1023,ar=1026,yr=1027,uc=1028,dc=1029,Sh=1030,fc=1031,pc=1033,wo=33776,Ao=33777,Ro=33778,Co=33779,mc=35840,gc=35841,_c=35842,xc=35843,vc=36196,yc=37492,Mc=37496,Sc=37808,bc=37809,Ec=37810,Tc=37811,wc=37812,Ac=37813,Rc=37814,Cc=37815,Ic=37816,Pc=37817,Lc=37818,Dc=37819,Uc=37820,Fc=37821,Nc=36492,Oc=36494,Bc=36495,kc=36283,zc=36284,Hc=36285,Vc=36286,Zr=2300,Ra=2301,ba=2302,th=2400,nh=2401,ih=2402,Qd=3200,ef=3201,bh=0,tf=1,Ii="",vn="srgb",ms="srgb-linear",Jr="linear",wt="srgb",ds=7680,sh=519,nf=512,sf=513,rf=514,Eh=515,of=516,af=517,cf=518,lf=519,rh=35044,Ji=35048,Th="300 es",Kn=2e3,Kr=2001,Ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Il=Math.PI/180,Ca=180/Math.PI;at=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==m){let g=1-a,f=c*d+l*p+h*m+u*_,v=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let T=Math.sqrt(S),b=Math.atan2(T,f*v);g=Math.sin(g*b)/T,a=Math.sin(a*b)/T}let x=a*v;if(c=c*g+d*x,l=l*g+p*x,h=h*g+m*x,u=u*g+_*x,g===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*p-l*d,e[t+1]=c*m+h*d+l*u-a*p,e[t+2]=l*m+h*p+a*d-c*u,e[t+3]=h*m-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ll=new U,Ju=new Tn,Qe=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],m=i[8],_=s[0],g=s[3],f=s[6],v=s[1],S=s[4],x=s[7],T=s[2],b=s[5],A=s[8];return r[0]=o*_+a*v+c*T,r[3]=o*g+a*S+c*b,r[6]=o*f+a*x+c*A,r[1]=l*_+h*v+u*T,r[4]=l*g+h*S+u*b,r[7]=l*f+h*x+u*A,r[2]=d*_+p*v+m*T,r[5]=d*g+p*S+m*b,r[8]=d*f+p*x+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,m=t*u+i*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dl.makeScale(e,t)),this}rotate(e){return this.premultiply(Dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dl=new Qe;Ku={};$u=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ju=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt=Xm();Ia=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ys===void 0&&(Ys=$r("canvas")),Ys.width=e.width,Ys.height=e.height;let s=Ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ys}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$r("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bi(t[i]/255)*255):t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qm=0,lr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ul(s[o].image)):r.push(Ul(s[o]))}else r=Ul(s);i.url=r}return t||(e.images[this.uuid]=i),i}};Ym=0,Fl=new U,wn=class n extends Ti{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Gi,s=Gi,r=$n,o=Yi,a=kn,c=jn,l=n.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Io(),this.name="",this.source=new lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fl).x}get height(){return this.source.getSize(Fl).y}get depth(){return this.source.getSize(Fl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=mh;wn.DEFAULT_ANISOTROPY=1;Vt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],_=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,x=(p+1)/2,T=(f+1)/2,b=(h+d)/4,A=(u+_)/4,R=(m+g)/4;return S>x&&S>T?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=b/i,r=A/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=b/s,r=R/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=A/r,s=R/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pa=class extends Ti{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new wn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new lr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends Pa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},jr=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},La=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ri=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),ta.subVectors(this.max,Hr),Zs.subVectors(e.a,Hr),Js.subVectors(e.b,Hr),Ks.subVectors(e.c,Hr),Ni.subVectors(Js,Zs),Oi.subVectors(Ks,Js),cs.subVectors(Zs,Ks);let t=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-cs.z,cs.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,cs.z,0,-cs.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-cs.y,cs.x,0];return!Nl(t,Zs,Js,Ks,ta)||(t=[1,0,0,0,1,0,0,0,1],!Nl(t,Zs,Js,Ks,ta))?!1:(na.crossVectors(Ni,Oi),t=[na.x,na.y,na.z],Nl(t,Zs,Js,Ks,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xi=[new U,new U,new U,new U,new U,new U,new U,new U],Yn=new U,ea=new ri,Zs=new U,Js=new U,Ks=new U,Ni=new U,Oi=new U,cs=new U,Hr=new U,ta=new U,na=new U,ls=new U;Zm=new ri,Vr=new U,Ol=new U,oi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Zm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Ol)),this.expandByPoint(Vr.copy(e.center).sub(Ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vi=new U,Bl=new U,ia=new U,Bi=new U,kl=new U,sa=new U,zl=new U,hr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Bl.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Bl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ia),a=Bi.dot(this.direction),c=-Bi.dot(ia),l=Bi.lengthSq(),h=Math.abs(1-o*o),u,d,p,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Bl).addScaledVector(ia,d),p}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let i=vi.dot(this.direction),s=vi.dot(vi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,s,r){kl.subVectors(t,e),sa.subVectors(i,e),zl.crossVectors(kl,sa);let o=this.direction.dot(zl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);let c=a*this.direction.dot(sa.crossVectors(Bi,sa));if(c<0)return null;let l=a*this.direction.dot(kl.cross(Bi));if(l<0||c+l>o)return null;let h=-a*Bi.dot(zl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yt=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,d,p,m,_,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,p,m,_,g)}set(e,t,i,s,r,o,a,c,l,h,u,d,p,m,_,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,m=l*h,_=l*u;t[0]=d+_*a,t[4]=m*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,m=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=m*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=m*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+m,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,p=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jm,e,Km)}lookAt(e,t,i){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),ki.crossVectors(i,Cn),ki.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),ki.crossVectors(i,Cn)),ki.normalize(),ra.crossVectors(Cn,ki),s[0]=ki.x,s[4]=ra.x,s[8]=Cn.x,s[1]=ki.y,s[5]=ra.y,s[9]=Cn.y,s[2]=ki.z,s[6]=ra.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],m=i[2],_=i[6],g=i[10],f=i[14],v=i[3],S=i[7],x=i[11],T=i[15],b=s[0],A=s[4],R=s[8],y=s[12],M=s[1],C=s[5],D=s[9],L=s[13],N=s[2],B=s[6],O=s[10],H=s[14],V=s[3],j=s[7],ie=s[11],ae=s[15];return r[0]=o*b+a*M+c*N+l*V,r[4]=o*A+a*C+c*B+l*j,r[8]=o*R+a*D+c*O+l*ie,r[12]=o*y+a*L+c*H+l*ae,r[1]=h*b+u*M+d*N+p*V,r[5]=h*A+u*C+d*B+p*j,r[9]=h*R+u*D+d*O+p*ie,r[13]=h*y+u*L+d*H+p*ae,r[2]=m*b+_*M+g*N+f*V,r[6]=m*A+_*C+g*B+f*j,r[10]=m*R+_*D+g*O+f*ie,r[14]=m*y+_*L+g*H+f*ae,r[3]=v*b+S*M+x*N+T*V,r[7]=v*A+S*C+x*B+T*j,r[11]=v*R+S*D+x*O+T*ie,r[15]=v*y+S*L+x*H+T*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],m=e[3],_=e[7],g=e[11],f=e[15];return m*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+_*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+g*(+t*l*u-t*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],_=e[13],g=e[14],f=e[15],v=u*g*l-_*d*l+_*c*p-a*g*p-u*c*f+a*d*f,S=m*d*l-h*g*l-m*c*p+o*g*p+h*c*f-o*d*f,x=h*_*l-m*u*l+m*a*p-o*_*p-h*a*f+o*u*f,T=m*u*c-h*_*c-m*a*d+o*_*d+h*a*g-o*u*g,b=t*v+i*S+s*x+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/b;return e[0]=v*A,e[1]=(_*d*r-u*g*r-_*s*p+i*g*p+u*s*f-i*d*f)*A,e[2]=(a*g*r-_*c*r+_*s*l-i*g*l-a*s*f+i*c*f)*A,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*A,e[4]=S*A,e[5]=(h*g*r-m*d*r+m*s*p-t*g*p-h*s*f+t*d*f)*A,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*f-t*c*f)*A,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*A,e[8]=x*A,e[9]=(m*u*r-h*_*r-m*i*p+t*_*p+h*i*f-t*u*f)*A,e[10]=(o*_*r-m*a*r+m*i*l-t*_*l-o*i*f+t*a*f)*A,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*p-t*a*p)*A,e[12]=T*A,e[13]=(h*_*s-m*u*s+m*i*d-t*_*d-h*i*g+t*u*g)*A,e[14]=(m*a*s-o*_*s-m*i*c+t*_*c+o*i*g-t*a*g)*A,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,m=r*u,_=o*h,g=o*u,f=a*u,v=c*l,S=c*h,x=c*u,T=i.x,b=i.y,A=i.z;return s[0]=(1-(_+f))*T,s[1]=(p+x)*T,s[2]=(m-S)*T,s[3]=0,s[4]=(p-x)*b,s[5]=(1-(d+f))*b,s[6]=(g+v)*b,s[7]=0,s[8]=(m+S)*A,s[9]=(g-v)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);let l=1/r,h=1/o,u=1/a;return Zn.elements[0]*=l,Zn.elements[1]*=l,Zn.elements[2]*=l,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Kn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===Kn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Kr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Kn,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===Kn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Kr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},$s=new U,Zn=new yt,Jm=new U(0,0,0),Km=new U(1,1,1),ki=new U,ra=new U,Cn=new U,Qu=new yt,ed=new Tn,mn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ed.setFromEuler(this),this.setFromQuaternion(ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$m=0,td=new U,js=new Tn,yi=new yt,oa=new U,Gr=new U,jm=new U,Qm=new Tn,nd=new U(1,0,0),id=new U(0,1,0),sd=new U(0,0,1),rd={type:"added"},eg={type:"removed"},Qs={type:"childadded",child:null},Hl={type:"childremoved",child:null},Xt=class n extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new mn,i=new Tn,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new Qe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(nd,e)}rotateY(e){return this.rotateOnAxis(id,e)}rotateZ(e){return this.rotateOnAxis(sd,e)}translateOnAxis(e,t){return td.copy(e).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nd,e)}translateY(e){return this.translateOnAxis(id,e)}translateZ(e){return this.translateOnAxis(sd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oa.copy(e):oa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Gr,oa,this.up):yi.lookAt(oa,Gr,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(yi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eg),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,jm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Xt.DEFAULT_UP=new U(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Jn=new U,Mi=new U,Vl=new U,Si=new U,er=new U,tr=new U,od=new U,Gl=new U,Wl=new U,Xl=new U,ql=new Vt,Yl=new Vt,Zl=new Vt,Vi=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jn.subVectors(s,t),Mi.subVectors(i,t),Vl.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(Mi),c=Jn.dot(Vl),l=Mi.dot(Mi),h=Mi.dot(Vl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Si.x),c.addScaledVector(o,Si.y),c.addScaledVector(a,Si.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return ql.setScalar(0),Yl.setScalar(0),Zl.setScalar(0),ql.fromBufferAttribute(e,t),Yl.fromBufferAttribute(e,i),Zl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ql,r.x),o.addScaledVector(Yl,r.y),o.addScaledVector(Zl,r.z),o}static isFrontFacing(e,t,i,s){return Jn.subVectors(i,t),Mi.subVectors(e,t),Jn.cross(Mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Jn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;er.subVectors(s,i),tr.subVectors(r,i),Gl.subVectors(e,i);let c=er.dot(Gl),l=tr.dot(Gl);if(c<=0&&l<=0)return t.copy(i);Wl.subVectors(e,s);let h=er.dot(Wl),u=tr.dot(Wl);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(er,o);Xl.subVectors(e,r);let p=er.dot(Xl),m=tr.dot(Xl);if(m>=0&&p<=m)return t.copy(r);let _=p*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(tr,a);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return od.subVectors(r,s),a=(u-h)/(u-h+(p-m)),t.copy(s).addScaledVector(od,a);let f=1/(g+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},aa={h:0,s:0,l:0};Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=Wm(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Jl(o,r,e+1/3),this.g=Jl(o,r,e),this.b=Jl(o,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=vn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){let i=df[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return mt.workingToColorSpace(fn.copy(this),e),Math.round(ft(fn.r*255,0,255))*65536+Math.round(ft(fn.g*255,0,255))*256+Math.round(ft(fn.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(fn.copy(this),t);let i=fn.r,s=fn.g,r=fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=vn){mt.workingToColorSpace(fn.copy(this),e);let t=fn.r,i=fn.g,s=fn.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(aa);let i=Pl(zi.h,aa.h,t),s=Pl(zi.s,aa.s,t),r=Pl(zi.l,aa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new Pe;Pe.NAMES=df;tg=0,ai=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=fs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=Ta,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ea&&(i.blendSrc=this.blendSrc),this.blendDst!==Ta&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zt=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kt=new U,ca=new at,ng=0,an=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ng++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rh,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array),s=bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array),s=bn(s,this.array),r=bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rh&&(e.usage=this.usage),e}},eo=class extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}},to=class extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ze=class extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}},ig=0,Bn=new yt,Kl=new Xt,nr=new U,In=new ri,Wr=new ri,on=new U,Mt=class n extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wh(e)?to:eo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(In.min,Wr.min),In.expandByPoint(on),on.addVectors(In.max,Wr.max),In.expandByPoint(on)):(In.expandByPoint(Wr.min),In.expandByPoint(Wr.max))}In.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(nr.fromBufferAttribute(e,l),on.add(nr)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new U,c[R]=new U;let l=new U,h=new U,u=new U,d=new at,p=new at,m=new at,_=new U,g=new U;function f(R,y,M){l.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(d),m.sub(d);let C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(C),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(C),a[R].add(_),a[y].add(_),a[M].add(_),c[R].add(g),c[y].add(g),c[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,y=v.length;R<y;++R){let M=v[R],C=M.start,D=M.count;for(let L=C,N=C+D;L<N;L+=3)f(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let S=new U,x=new U,T=new U,b=new U;function A(R){T.fromBufferAttribute(s,R),b.copy(T);let y=a[R];S.copy(y),S.sub(T.multiplyScalar(T.dot(y))).normalize(),x.crossVectors(b,y);let C=x.dot(c[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,C)}for(let R=0,y=v.length;R<y;++R){let M=v[R],C=M.start,D=M.count;for(let L=C,N=C+D;L<N;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(h),c.add(h),l.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[m++]=l[p++]}return new an(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ad=new yt,hs=new hr,la=new oi,cd=new U,ha=new U,ua=new U,da=new U,$l=new U,fa=new U,ld=new U,pa=new U,bt=class extends Xt{constructor(e=new Mt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&($l.fromBufferAttribute(u,e),o?fa.addScaledVector($l,h):fa.addScaledVector($l.sub(t),h))}t.add(fa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(la.containsPoint(hs.origin)===!1&&(hs.intersectSphere(la,cd)===null||hs.origin.distanceToSquared(cd)>(e.far-e.near)**2))&&(ad.copy(r).invert(),hs.copy(e.ray).applyMatrix4(ad),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],f=o[g.materialIndex],v=Math.max(g.start,p.start),S=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,T=S;x<T;x+=3){let b=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);s=ma(this,f,e,i,l,h,u,b,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){let v=a.getX(g),S=a.getX(g+1),x=a.getX(g+2);s=ma(this,o,e,i,l,h,u,v,S,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],f=o[g.materialIndex],v=Math.max(g.start,p.start),S=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,T=S;x<T;x+=3){let b=x,A=x+1,R=x+2;s=ma(this,f,e,i,l,h,u,b,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){let v=g,S=g+1,x=g+2;s=ma(this,o,e,i,l,h,u,v,S,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};ci=class n extends Mt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2));function m(_,g,f,v,S,x,T,b,A,R,y){let M=x/A,C=T/R,D=x/2,L=T/2,N=b/2,B=A+1,O=R+1,H=0,V=0,j=new U;for(let ie=0;ie<O;ie++){let ae=ie*C-L;for(let xe=0;xe<B;xe++){let Ne=xe*M-D;j[_]=Ne*v,j[g]=ae*S,j[f]=N,l.push(j.x,j.y,j.z),j[_]=0,j[g]=0,j[f]=b>0?1:-1,h.push(j.x,j.y,j.z),u.push(xe/A),u.push(1-ie/R),H+=1}}for(let ie=0;ie<R;ie++)for(let ae=0;ae<A;ae++){let xe=d+ae+B*ie,Ne=d+ae+B*(ie+1),qe=d+(ae+1)+B*(ie+1),Ye=d+(ae+1)+B*ie;c.push(xe,Ne,Ye),c.push(Ne,qe,Ye),V+=6}a.addGroup(p,V,y),p+=V,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};ff={clone:ys,merge:gn},og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ag=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=og,this.fragmentShader=ag,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=rg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},no=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hi=new U,hd=new at,ud=new at,pn=class extends no{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(Il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,hd,ud),t.subVectors(ud,hd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Il*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ir=-90,sr=1,Da=class extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(ir,sr,e,t);s.layers=this.layers,this.add(s);let r=new pn(ir,sr,e,t);r.layers=this.layers,this.add(r);let o=new pn(ir,sr,e,t);o.layers=this.layers,this.add(o);let a=new pn(ir,sr,e,t);a.layers=this.layers,this.add(a);let c=new pn(ir,sr,e,t);c.layers=this.layers,this.add(c);let l=new pn(ir,sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},io=class extends wn{constructor(e=[],t=xs,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ua=class extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new io(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ci(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Ri});r.uniforms.tEquirect.value=t;let o=new bt(s,r),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=$n),new Da(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},cn=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},cg={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,i),f=this._getHandJoint(l,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new cn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},so=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},ro=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fa=class extends wn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=En,h=En,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},oo=class extends an{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new yt,dd=new yt,ga=[],fd=new ri,lg=new yt,Xr=new bt,qr=new oi,gs=class extends bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,lg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),fd.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(fd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),qr.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(i),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),dd.multiplyMatrices(i,rr),Xr.matrixWorld=dd,Xr.raycast(e,ga);for(let o=0,a=ga.length;o<a;o++){let c=ga[o];c.instanceId=r,c.object=this,t.push(c)}ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fa(new Float32Array(s*this.count),s,this.count,uc,Qn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},jl=new U,hg=new U,ug=new Qe,ii=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=jl.subVectors(i,t).cross(hg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(jl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ug.getNormalMatrix(e),s=this.coplanarPoint(jl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new oi,dg=new at(.5,.5),_a=new U,dr=class{constructor(e=new ii,t=new ii,i=new ii,s=new ii,r=new ii,o=new ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],m=r[8],_=r[9],g=r[10],f=r[11],v=r[12],S=r[13],x=r[14],T=r[15];if(s[0].setComponents(l-o,p-h,f-m,T-v).normalize(),s[1].setComponents(l+o,p+h,f+m,T+v).normalize(),s[2].setComponents(l+a,p+u,f+_,T+S).normalize(),s[3].setComponents(l-a,p-u,f-_,T-S).normalize(),i)s[4].setComponents(c,d,g,x).normalize(),s[5].setComponents(l-c,p-d,f-g,T-x).normalize();else if(s[4].setComponents(l-c,p-d,f-g,T-x).normalize(),t===Kn)s[5].setComponents(l+c,p+d,f+g,T+x).normalize();else if(t===Kr)s[5].setComponents(c,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=dg.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(_a.x=s.normal.x>0?e.max.x:e.min.x,_a.y=s.normal.y>0?e.max.y:e.min.y,_a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fr=class extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Na=new U,Oa=new U,pd=new yt,Yr=new hr,xa=new oi,Ql=new U,md=new U,Ba=class extends Xt{constructor(e=new Mt,t=new fr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Na.fromBufferAttribute(t,s-1),Oa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Na.distanceTo(Oa);e.setAttribute("lineDistance",new Ze(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(s),xa.radius+=r,e.ray.intersectsSphere(xa)===!1)return;pd.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(pd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=l){let f=h.getX(_),v=h.getX(_+1),S=va(this,e,Yr,c,f,v,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(p),f=va(this,e,Yr,c,_,g,m-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=l){let f=va(this,e,Yr,c,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){let _=va(this,e,Yr,c,m-1,p,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};gd=new U,_d=new U,ao=class extends Ba{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)gd.fromBufferAttribute(t,s),_d.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+gd.distanceTo(_d);e.setAttribute("lineDistance",new Ze(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},pr=class extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xd=new yt,oh=new hr,ya=new oi,Ma=new U,co=class extends Xt{constructor(e=new Mt,t=new pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;xd.copy(s).invert(),oh.copy(e.ray).applyMatrix4(xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let m=d,_=p;m<_;m++){let g=l.getX(m);Ma.fromBufferAttribute(u,g),vd(Ma,g,c,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=d,_=p;m<_;m++)Ma.fromBufferAttribute(u,m),vd(Ma,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};lo=class extends wn{constructor(e,t,i=Zi,s,r,o,a=En,c=En,l,h=ar,u=1){if(h!==ar&&h!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ho=class extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},uo=class n extends Mt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new U,h=new at;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},li=class n extends Mt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,_=[],g=i/2,f=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(p,2));function v(){let x=new U,T=new U,b=0,A=(t-e)/i;for(let R=0;R<=r;R++){let y=[],M=R/r,C=M*(t-e)+e;for(let D=0;D<=s;D++){let L=D/s,N=L*c+a,B=Math.sin(N),O=Math.cos(N);T.x=C*B,T.y=-M*i+g,T.z=C*O,u.push(T.x,T.y,T.z),x.set(B,A,O).normalize(),d.push(x.x,x.y,x.z),p.push(L,1-M),y.push(m++)}_.push(y)}for(let R=0;R<s;R++)for(let y=0;y<r;y++){let M=_[y][R],C=_[y+1][R],D=_[y+1][R+1],L=_[y][R+1];(e>0||y!==0)&&(h.push(M,C,L),b+=3),(t>0||y!==r-1)&&(h.push(C,D,L),b+=3)}l.addGroup(f,b,0),f+=b}function S(x){let T=m,b=new at,A=new U,R=0,y=x===!0?e:t,M=x===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,g*M,0),d.push(0,M,0),p.push(.5,.5),m++;let C=m;for(let D=0;D<=s;D++){let N=D/s*c+a,B=Math.cos(N),O=Math.sin(N);A.x=y*O,A.y=g*M,A.z=y*B,u.push(A.x,A.y,A.z),d.push(0,M,0),b.x=B*.5+.5,b.y=O*.5*M+.5,p.push(b.x,b.y),m++}for(let D=0;D<s;D++){let L=T+D,N=C+D;x===!0?h.push(N,N+1,L):h.push(N+1,N,L),R+=3}l.addGroup(f,R,x===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fo=class n extends li{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mr=class n extends Mt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let S=new U,x=new U,T=new U;for(let b=0;b<t.length;b+=3)p(t[b+0],S),p(t[b+1],x),p(t[b+2],T),c(S,x,T,v)}function c(v,S,x,T){let b=T+1,A=[];for(let R=0;R<=b;R++){A[R]=[];let y=v.clone().lerp(x,R/b),M=S.clone().lerp(x,R/b),C=b-R;for(let D=0;D<=C;D++)D===0&&R===b?A[R][D]=y:A[R][D]=y.clone().lerp(M,D/C)}for(let R=0;R<b;R++)for(let y=0;y<2*(b-R)-1;y++){let M=Math.floor(y/2);y%2===0?(d(A[R][M+1]),d(A[R+1][M]),d(A[R][M])):(d(A[R][M+1]),d(A[R+1][M+1]),d(A[R+1][M]))}}function l(v){let S=new U;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(v),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){let v=new U;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let x=g(v)/2/Math.PI+.5,T=f(v)/Math.PI+.5;o.push(x,1-T)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let S=o[v+0],x=o[v+2],T=o[v+4],b=Math.max(S,x,T),A=Math.min(S,x,T);b>.9&&A<.1&&(S<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,S){let x=v*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function m(){let v=new U,S=new U,x=new U,T=new U,b=new at,A=new at,R=new at;for(let y=0,M=0;y<r.length;y+=9,M+=6){v.set(r[y+0],r[y+1],r[y+2]),S.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),b.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),T.copy(v).add(S).add(x).divideScalar(3);let C=g(T);_(b,M+0,v,C),_(A,M+2,S,C),_(R,M+4,x,C)}}function _(v,S,x,T){T<0&&v.x===1&&(o[S]=v.x-1),x.x===0&&x.z===0&&(o[S]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},gr=class n extends mr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},po=class n extends mr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},mo=class n extends Mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],m=[],_=[],g=[];for(let f=0;f<h;f++){let v=f*d-o;for(let S=0;S<l;S++){let x=S*u-r;m.push(x,-v,0),_.push(0,0,1),g.push(S/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){let S=v+l*f,x=v+l*(f+1),T=v+1+l*(f+1),b=v+1+l*f;p.push(S,x,b),p.push(x,T,b)}this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},wi=class n extends Mt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,p=new U,m=new at;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){let f=r+g/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){let g=_*(i+1);for(let f=0;f<i;f++){let v=f+g,S=v,x=v+i+1,T=v+i+2,b=v+1;a.push(S,x,b),a.push(x,T,b)}}this.setIndex(a),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},go=class n extends Mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,d=new U,p=[],m=[],_=[],g=[];for(let f=0;f<=i;f++){let v=[],S=f/i,x=0;f===0&&o===0?x=.5/t:f===i&&c===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){let b=T/t;u.x=-e*Math.cos(s+b*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(s+b*r)*Math.sin(o+S*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(b+x,1-S),v.push(l++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){let S=h[f][v+1],x=h[f][v],T=h[f+1][v],b=h[f+1][v+1];(f!==0||o>0)&&p.push(S,x,b),(f!==i-1||c<Math.PI)&&p.push(x,T,b)}this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},_o=class n extends mr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},xo=class n extends Mt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new U,u=new U,d=new U;for(let p=0;p<=i;p++)for(let m=0;m<=s;m++){let _=m/s*r,g=p/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=s;m++){let _=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,v=(s+1)*p+m;o.push(_,g,v),o.push(g,f,v)}this.setIndex(o),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ai=class extends ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ka=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},za=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};_s=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ha=class extends _s{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nh:r=e,a=2*t-i;break;case ih:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case nh:o=e,c=2*i-t;break;case ih:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(s-t),_=m*m,g=_*m,f=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,S=(-1-p)*g+(1.5+p)*_+.5*m,x=p*g-p*_;for(let T=0;T!==a;++T)r[T]=f*o[h+T]+v*o[l+T]+S*o[c+T]+x*o[u+T];return r}},Va=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Ga=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ha(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Ra:t=this.InterpolantFactoryMethodLinear;break;case ba:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return ba}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&fg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ba,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,d=u-i,p=u+i;for(let m=0;m!==i;++m){let _=t[u+m];if(_!==t[d+m]||_!==t[p+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Ra;Xi=class extends Ln{constructor(e,t,i){super(e,t,i)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Zr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;Wa=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}};Wa.prototype.ValueTypeName="color";Xa=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}};Xa.prototype.ValueTypeName="number";qa=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},vo=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new qa(this.times,this.values,this.getValueSize(),e)}};vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;qi=class extends Ln{constructor(e,t,i){super(e,t,i)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Zr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;Ya=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}};Ya.prototype.ValueTypeName="vector";Za=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},pf=new Za,Ja=class{constructor(e){this.manager=e!==void 0?e:pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";yo=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Mo=class extends yo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},eh=new yt,yd=new U,Md=new U,ah=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(yd),Md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Md),t.updateMatrixWorld(),eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},So=class extends no{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ch=class extends ah{constructor(){super(new So(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bo=class extends yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new ch}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ka=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Rh="\\[\\]\\.:\\/",pg=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",mg="[^"+Rh.replace("\\.","")+"]",gg=/((?:WC+[\/:])*)/.source.replace("WC",Ch),_g=/(WCOD+)?/.source.replace("WCOD",mg),xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),vg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),yg=new RegExp("^"+gg+_g+xg+vg+"$"),Mg=["material","materials","bones","map"],lh=class{constructor(e,t,i){let s=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pg,"")}static parseTrackName(e){let t=yg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Mg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=lh;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Vy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180")});function Bf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Eg(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],_=u[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let _=u[p];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}function r_(n,e,t,i,s,r,o){let a=new Pe(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function m(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1,T=m(S);T===null?f(a,c):T&&T.isColor&&(f(T,1),x=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(S,x){let T=m(x);T&&(T.isCubeTexture||T.mapping===Eo)?(h===void 0&&(h=new bt(new ci(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:ys(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ms.copy(x.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(s_.makeRotationFromEuler(Ms)),h.material.toneMapped=mt.getTransfer(T.colorSpace)!==wt,(u!==T||d!==T.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,p=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new bt(new mo(2,2),new Pn({name:"BackgroundMaterial",uniforms:ys(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=mt.getTransfer(T.colorSpace)!==wt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,p=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,x){S.getRGB(Gc,Ah(n)),i.buffers.color.setClear(Gc.r,Gc.g,Gc.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:_,addToRenderList:g,dispose:v}}function o_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,C,D,L,N){let B=!1,O=u(L,D,C);r!==O&&(r=O,l(r.object)),B=p(M,L,D,N),B&&m(M,L,D,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(M,C,D,L),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,C,D){let L=D.wireframe===!0,N=i[M.id];N===void 0&&(N={},i[M.id]=N);let B=N[C.id];B===void 0&&(B={},N[C.id]=B);let O=B[L];return O===void 0&&(O=d(c()),B[L]=O),O}function d(M){let C=[],D=[],L=[];for(let N=0;N<t;N++)C[N]=0,D[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:L,object:M,attributes:{},index:null}}function p(M,C,D,L){let N=r.attributes,B=C.attributes,O=0,H=D.getAttributes();for(let V in H)if(H[V].location>=0){let ie=N[V],ae=B[V];if(ae===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ie===void 0||ie.attribute!==ae||ae&&ie.data!==ae.data)return!0;O++}return r.attributesNum!==O||r.index!==L}function m(M,C,D,L){let N={},B=C.attributes,O=0,H=D.getAttributes();for(let V in H)if(H[V].location>=0){let ie=B[V];ie===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));let ae={};ae.attribute=ie,ie&&ie.data&&(ae.data=ie.data),N[V]=ae,O++}r.attributes=N,r.attributesNum=O,r.index=L}function _(){let M=r.newAttributes;for(let C=0,D=M.length;C<D;C++)M[C]=0}function g(M){f(M,0)}function f(M,C){let D=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;D[M]=1,L[M]===0&&(n.enableVertexAttribArray(M),L[M]=1),N[M]!==C&&(n.vertexAttribDivisor(M,C),N[M]=C)}function v(){let M=r.newAttributes,C=r.enabledAttributes;for(let D=0,L=C.length;D<L;D++)C[D]!==M[D]&&(n.disableVertexAttribArray(D),C[D]=0)}function S(M,C,D,L,N,B,O){O===!0?n.vertexAttribIPointer(M,C,D,N,B):n.vertexAttribPointer(M,C,D,L,N,B)}function x(M,C,D,L){_();let N=L.attributes,B=D.getAttributes(),O=C.defaultAttributeValues;for(let H in B){let V=B[H];if(V.location>=0){let j=N[H];if(j===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){let ie=j.normalized,ae=j.itemSize,xe=e.get(j);if(xe===void 0)continue;let Ne=xe.buffer,qe=xe.type,Ye=xe.bytesPerElement,J=qe===n.INT||qe===n.UNSIGNED_INT||j.gpuType===cc;if(j.isInterleavedBufferAttribute){let Q=j.data,_e=Q.stride,Le=j.offset;if(Q.isInstancedInterleavedBuffer){for(let Te=0;Te<V.locationSize;Te++)f(V.location+Te,Q.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Te=0;Te<V.locationSize;Te++)g(V.location+Te);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Te=0;Te<V.locationSize;Te++)S(V.location+Te,ae/V.locationSize,qe,ie,_e*Ye,(Le+ae/V.locationSize*Te)*Ye,J)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)f(V.location+Q,j.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<V.locationSize;Q++)g(V.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Q=0;Q<V.locationSize;Q++)S(V.location+Q,ae/V.locationSize,qe,ie,ae*Ye,ae/V.locationSize*Q*Ye,J)}}else if(O!==void 0){let ie=O[H];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(V.location,ie);break;case 3:n.vertexAttrib3fv(V.location,ie);break;case 4:n.vertexAttrib4fv(V.location,ie);break;default:n.vertexAttrib1fv(V.location,ie)}}}}v()}function T(){R();for(let M in i){let C=i[M];for(let D in C){let L=C[D];for(let N in L)h(L[N].object),delete L[N];delete C[D]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;let C=i[M.id];for(let D in C){let L=C[D];for(let N in L)h(L[N].object),delete L[N];delete C[D]}delete i[M.id]}function A(M){for(let C in i){let D=i[C];if(D[M.id]===void 0)continue;let L=D[M.id];for(let N in L)h(L[N].object),delete L[N];delete D[M.id]}}function R(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function a_(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];t.update(p,i,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function c_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==kn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let R=A===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==jn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Qn&&!R)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:T,maxSamples:b}}function l_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ii,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,f=n.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:i,S=v*4,x=f.clippingState||null;c.value=x,x=h(m,d,S,p);for(let T=0;T!==S;++T)x[T]=t[T];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let S=0,x=p;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function h_(n){let e=new WeakMap;function t(o,a){return a===rc?o.mapping=xs:a===oc&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===rc||a===oc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ua(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function d_(n){let e=[],t=[],i=[],s=n,r=n-Sr+1+mf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Sr?c=mf[o-n+Sr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,_=3,g=2,f=1,v=new Float32Array(_*m*p),S=new Float32Array(g*m*p),x=new Float32Array(f*m*p);for(let b=0;b<p;b++){let A=b%3*2/3-1,R=b>2?0:-1,y=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];v.set(y,_*m*b),S.set(d,g*m*b);let M=[b,b,b,b,b,b];x.set(M,f*m*b)}let T=new Mt;T.setAttribute("position",new an(v,_)),T.setAttribute("uv",new an(S,g)),T.setAttribute("faceIndex",new an(x,f)),e.push(T),s>Sr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xf(n,e,t){let i=new si(n,e,t);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function f_(n,e,t){let i=new Float32Array(Es),s=new U(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function vf(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function yf(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function qh(){return`

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
	`}function p_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===rc||c===oc,h=c===xs||c===vs;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new qc(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new qc(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function m_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&cr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function g_(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,m=u.attributes.position,_=0;if(p!==null){let v=p.array;_=p.version;for(let S=0,x=v.length;S<x;S+=3){let T=v[S+0],b=v[S+1],A=v[S+2];d.push(T,b,b,A,A,T)}}else if(m!==void 0){let v=m.array;_=m.version;for(let S=0,x=v.length/3-1;S<x;S+=3){let T=S+0,b=S+1,A=S+2;d.push(T,b,b,A,A,T)}}else return;let g=new(wh(d)?to:eo)(d,1);g.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function __(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function l(d,p,m){m!==0&&(n.drawElementsInstanced(i,p,r,d*o,m),t.update(p,i,m))}function h(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];t.update(g,i,1)}function u(d,p,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,m);let f=0;for(let v=0;v<m;v++)f+=p[v]*_[v];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function x_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function v_(n,e,t){let i=new WeakMap,s=new Vt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let y=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],S=0;p===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*T*4*u),A=new jr(b,x,T,u);A.type=Qn,A.needsUpdate=!0;let R=S*4;for(let M=0;M<u;M++){let C=g[M],D=f[M],L=v[M],N=x*T*4*M;for(let B=0;B<C.count;B++){let O=B*R;p===!0&&(s.fromBufferAttribute(C,B),b[N+O+0]=s.x,b[N+O+1]=s.y,b[N+O+2]=s.z,b[N+O+3]=0),m===!0&&(s.fromBufferAttribute(D,B),b[N+O+4]=s.x,b[N+O+5]=s.y,b[N+O+6]=s.z,b[N+O+7]=0),_===!0&&(s.fromBufferAttribute(L,B),b[N+O+8]=s.x,b[N+O+9]=s.y,b[N+O+10]=s.z,b[N+O+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new at(x,T)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function y_(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}function Er(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Sf[s];if(r===void 0&&(r=new Float32Array(s),Sf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zc(n,e){let t=bf[e];t===void 0&&(t=new Int32Array(e),bf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function M_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function S_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function b_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function E_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function T_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;wf.set(i),n.uniformMatrix2fv(this.addr,!1,wf),sn(t,i)}}function w_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;Tf.set(i),n.uniformMatrix3fv(this.addr,!1,Tf),sn(t,i)}}function A_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,i))return;Ef.set(i),n.uniformMatrix4fv(this.addr,!1,Ef),sn(t,i)}}function R_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function C_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function I_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function P_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function L_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function D_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function U_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function F_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function N_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Mf.compareFunction=Eh,r=Mf):r=kf,t.setTexture2D(e||r,s)}function O_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Hf,s)}function B_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Vf,s)}function k_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||zf,s)}function z_(n){switch(n){case 5126:return M_;case 35664:return S_;case 35665:return b_;case 35666:return E_;case 35674:return T_;case 35675:return w_;case 35676:return A_;case 5124:case 35670:return R_;case 35667:case 35671:return C_;case 35668:case 35672:return I_;case 35669:case 35673:return P_;case 5125:return L_;case 36294:return D_;case 36295:return U_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return k_}}function H_(n,e){n.uniform1fv(this.addr,e)}function V_(n,e){let t=Er(e,this.size,2);n.uniform2fv(this.addr,t)}function G_(n,e){let t=Er(e,this.size,3);n.uniform3fv(this.addr,t)}function W_(n,e){let t=Er(e,this.size,4);n.uniform4fv(this.addr,t)}function X_(n,e){let t=Er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function q_(n,e){let t=Er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Y_(n,e){let t=Er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Z_(n,e){n.uniform1iv(this.addr,e)}function J_(n,e){n.uniform2iv(this.addr,e)}function K_(n,e){n.uniform3iv(this.addr,e)}function $_(n,e){n.uniform4iv(this.addr,e)}function j_(n,e){n.uniform1uiv(this.addr,e)}function Q_(n,e){n.uniform2uiv(this.addr,e)}function ex(n,e){n.uniform3uiv(this.addr,e)}function tx(n,e){n.uniform4uiv(this.addr,e)}function nx(n,e,t){let i=this.cache,s=e.length,r=Zc(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||kf,r[o])}function ix(n,e,t){let i=this.cache,s=e.length,r=Zc(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hf,r[o])}function sx(n,e,t){let i=this.cache,s=e.length,r=Zc(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vf,r[o])}function rx(n,e,t){let i=this.cache,s=e.length,r=Zc(t,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zf,r[o])}function ox(n){switch(n){case 5126:return H_;case 35664:return V_;case 35665:return G_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return Z_;case 35667:case 35671:return J_;case 35668:case 35672:return K_;case 35669:case 35673:return $_;case 5125:return j_;case 36294:return Q_;case 36295:return ex;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}function Af(n,e){n.seq.push(e),n.map[e.id]=e}function ax(n,e,t){let i=n.name,s=i.length;for(Oh.lastIndex=0;;){let r=Oh.exec(i),o=Oh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Af(t,l===void 0?new Bh(a,n,e):new kh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new zh(a),Af(t,u)),t=u}}}function Rf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function hx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ux(n){mt._getMatrix(Cf,mt.workingColorSpace,n);let e=`mat3( ${Cf.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case Jr:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function If(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+hx(n.getShaderSource(e),a)}else return r}function dx(n,e){let t=ux(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fx(n,e){let t;switch(e){case Xd:t="Linear";break;case qd:t="Reinhard";break;case Yd:t="Cineon";break;case Zd:t="ACESFilmic";break;case Kd:t="AgX";break;case $d:t="Neutral";break;case Jd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function px(){mt.getLuminanceCoefficients(Xc);let n=Xc.x.toFixed(4),e=Xc.y.toFixed(4),t=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function gx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _x(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Po(n){return n!==""}function Pf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Hh(n){return n.replace(xx,yx)}function yx(n,e){let t=nt[e];if(t===void 0){let i=vx.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hh(t)}function Df(n){return n.replace(Mx,Sx)}function Sx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function bx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ex(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xs:case vs:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function wx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sc:e="ENVMAP_BLENDING_MULTIPLY";break;case Gd:e="ENVMAP_BLENDING_MIX";break;case Wd:e="ENVMAP_BLENDING_ADD";break}return e}function Ax(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Rx(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=bx(t),l=Ex(t),h=Tx(t),u=wx(t),d=Ax(t),p=mx(t),m=gx(r),_=s.createProgram(),g,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Po).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Po).join(`
`),f.length>0&&(f+=`
`)):(g=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),f=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ci?fx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,dx("linearToOutputTexel",t.outputColorSpace),px(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),o=Hh(o),o=Pf(o,t),o=Lf(o,t),a=Hh(a),a=Pf(a,t),a=Lf(a,t),o=Df(o),a=Df(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=v+g+o,x=v+f+a,T=Rf(s,s.VERTEX_SHADER,S),b=Rf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",L=s.getShaderInfoLog(T)||"",N=s.getShaderInfoLog(b)||"",B=D.trim(),O=L.trim(),H=N.trim(),V=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,b);else{let ie=If(s,T,"vertex"),ae=If(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+ie+`
`+ae)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||H==="")&&(j=!1);j&&(C.diagnostics={runnable:V,programLog:B,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:f}})}s.deleteShader(T),s.deleteShader(b),R=new br(s,_),y=_x(s,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,cx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}function Ix(n,e,t,i,s,r,o){let a=new Qr,c=new Vh,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,M,C,D,L){let N=D.fog,B=L.geometry,O=y.isMeshStandardMaterial?D.environment:null,H=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),V=H&&H.mapping===Eo?H.image.height:null,j=m[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=ie!==void 0?ie.length:0,xe=0;B.morphAttributes.position!==void 0&&(xe=1),B.morphAttributes.normal!==void 0&&(xe=2),B.morphAttributes.color!==void 0&&(xe=3);let Ne,qe,Ye,J;if(j){let St=ui[j];Ne=St.vertexShader,qe=St.fragmentShader}else Ne=y.vertexShader,qe=y.fragmentShader,c.update(y),Ye=c.getVertexShaderID(y),J=c.getFragmentShaderID(y);let Q=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Le=L.isInstancedMesh===!0,Te=L.isBatchedMesh===!0,st=!!y.map,Tt=!!y.matcap,P=!!H,dt=!!y.aoMap,Oe=!!y.lightMap,Fe=!!y.bumpMap,Me=!!y.normalMap,Lt=!!y.displacementMap,ve=!!y.emissiveMap,Je=!!y.metalnessMap,Yt=!!y.roughnessMap,Bt=y.anisotropy>0,I=y.clearcoat>0,E=y.dispersion>0,G=y.iridescence>0,Z=y.sheen>0,ee=y.transmission>0,Y=Bt&&!!y.anisotropyMap,Re=I&&!!y.clearcoatMap,le=I&&!!y.clearcoatNormalMap,be=I&&!!y.clearcoatRoughnessMap,we=G&&!!y.iridescenceMap,se=G&&!!y.iridescenceThicknessMap,de=Z&&!!y.sheenColorMap,Be=Z&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,me=!!y.specularColorMap,et=!!y.specularIntensityMap,F=ee&&!!y.transmissionMap,ce=ee&&!!y.thicknessMap,ue=!!y.gradientMap,Se=!!y.alphaMap,re=y.alphaTest>0,$=!!y.alphaHash,Ae=!!y.extensions,Ke=Ci;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ke=n.toneMapping);let Dt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:Ne,fragmentShader:qe,defines:y.defines,customVertexShaderID:Ye,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Te,batchingColor:Te&&L._colorsTexture!==null,instancing:Le,instancingColor:Le&&L.instanceColor!==null,instancingMorph:Le&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ms,alphaToCoverage:!!y.alphaToCoverage,map:st,matcap:Tt,envMap:P,envMapMode:P&&H.mapping,envMapCubeUVHeight:V,aoMap:dt,lightMap:Oe,bumpMap:Fe,normalMap:Me,displacementMap:d&&Lt,emissiveMap:ve,normalMapObjectSpace:Me&&y.normalMapType===tf,normalMapTangentSpace:Me&&y.normalMapType===bh,metalnessMap:Je,roughnessMap:Yt,anisotropy:Bt,anisotropyMap:Y,clearcoat:I,clearcoatMap:Re,clearcoatNormalMap:le,clearcoatRoughnessMap:be,dispersion:E,iridescence:G,iridescenceMap:we,iridescenceThicknessMap:se,sheen:Z,sheenColorMap:de,sheenRoughnessMap:Be,specularMap:Ce,specularColorMap:me,specularIntensityMap:et,transmission:ee,transmissionMap:F,thicknessMap:ce,gradientMap:ue,opaque:y.transparent===!1&&y.blending===fs&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:re,alphaHash:$,combine:y.combine,mapUv:st&&_(y.map.channel),aoMapUv:dt&&_(y.aoMap.channel),lightMapUv:Oe&&_(y.lightMap.channel),bumpMapUv:Fe&&_(y.bumpMap.channel),normalMapUv:Me&&_(y.normalMap.channel),displacementMapUv:Lt&&_(y.displacementMap.channel),emissiveMapUv:ve&&_(y.emissiveMap.channel),metalnessMapUv:Je&&_(y.metalnessMap.channel),roughnessMapUv:Yt&&_(y.roughnessMap.channel),anisotropyMapUv:Y&&_(y.anisotropyMap.channel),clearcoatMapUv:Re&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(y.sheenRoughnessMap.channel),specularMapUv:Ce&&_(y.specularMap.channel),specularColorMapUv:me&&_(y.specularColorMap.channel),specularIntensityMapUv:et&&_(y.specularIntensityMap.channel),transmissionMapUv:F&&_(y.transmissionMap.channel),thicknessMapUv:ce&&_(y.thicknessMap.channel),alphaMapUv:Se&&_(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Me||Bt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(st||Se),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:st&&y.map.isVideoTexture===!0&&mt.getTransfer(y.map.colorSpace)===wt,decodeVideoTextureEmissive:ve&&y.emissiveMap.isVideoTexture===!0&&mt.getTransfer(y.emissiveMap.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ut,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ae&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&y.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function f(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)M.push(C),M.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(v(M,y),S(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let M=m[y.type],C;if(M){let D=ui[M];C=ff.clone(D.uniforms)}else C=y.uniforms;return C}function T(y,M){let C;for(let D=0,L=h.length;D<L;D++){let N=h[D];if(N.cacheKey===M){C=N,++C.usedTimes;break}}return C===void 0&&(C=new Rx(n,M,y,r),h.push(C)),C}function b(y){if(--y.usedTimes===0){let M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function A(y){c.remove(y)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:x,acquireProgram:T,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:R}}function Px(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Lx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ff(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,m,_,g){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=_,f.group=g),e++,f}function a(u,d,p,m,_,g){let f=o(u,d,p,m,_,g);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,m,_,g){let f=o(u,d,p,m,_,g);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||Lx),i.length>1&&i.sort(d||Ff),s.length>1&&s.sort(d||Ff)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Dx(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Nf,n.set(i,[o])):s>=r.length?(o=new Nf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ux(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Pe};break;case"SpotLight":t={position:new U,direction:new U,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Fx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Ox(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bx(n){let e=new Ux,t=Fx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let s=new U,r=new yt,o=new yt;function a(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,m=0,_=0,g=0,f=0,v=0,S=0,x=0,T=0,b=0,A=0;l.sort(Ox);for(let y=0,M=l.length;y<M;y++){let C=l[y],D=C.color,L=C.intensity,N=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=D.r*L,u+=D.g*L,d+=D.b*L;else if(C.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(C.sh.coefficients[O],L);A++}else if(C.isDirectionalLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,V=t.get(C);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=C.shadow.matrix,v++}i.directional[p]=O,p++}else if(C.isSpotLight){let O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(D).multiplyScalar(L),O.distance=N,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,i.spot[_]=O;let H=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,H.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[_]=H.matrix,C.castShadow){let V=t.get(C);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=B,x++}_++}else if(C.isRectAreaLight){let O=e.get(C);O.color.copy(D).multiplyScalar(L),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=O,g++}else if(C.isPointLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let H=C.shadow,V=t.get(C);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,V.shadowCameraNear=H.camera.near,V.shadowCameraFar=H.camera.far,i.pointShadow[m]=V,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=C.shadow.matrix,S++}i.point[m]=O,m++}else if(C.isHemisphereLight){let O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(L),O.groundColor.copy(C.groundColor).multiplyScalar(L),i.hemi[f]=O,f++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==f||R.numDirectionalShadows!==v||R.numPointShadows!==S||R.numSpotShadows!==x||R.numSpotMaps!==T||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,R.directionalLength=p,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=f,R.numDirectionalShadows=v,R.numPointShadows=S,R.numSpotShadows=x,R.numSpotMaps=T,R.numLightProbes=A,i.version=Nx++)}function c(l,h){let u=0,d=0,p=0,m=0,_=0,g=h.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){let S=l[f];if(S.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(S.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),p++}else if(S.isRectAreaLight){let x=i.rectArea[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:i}}function Of(n){let e=new Bx(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function kx(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Of(n),e.set(s,[a])):r>=o.length?(a=new Of(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function Vx(n,e,t){let i=new dr,s=new at,r=new at,o=new Vt,a=new ka({depthPacking:ef}),c=new za,l={},h=t.maxTextureSize,u={[Ei]:ln,[ln]:Ei,[Ut]:Ut},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:zx,fragmentShader:Hx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Mt;m.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new bt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let f=this.type;this.render=function(b,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let y=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Ri),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let L=f!==hi&&this.type===hi,N=f===hi&&this.type!==hi;for(let B=0,O=b.length;B<O;B++){let H=b[B],V=H.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let j=V.getFrameExtents();if(s.multiply(j),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,V.mapSize.y=r.y)),V.map===null||L===!0||N===!0){let ae=this.type!==hi?{minFilter:En,magFilter:En}:{};V.map!==null&&V.map.dispose(),V.map=new si(s.x,s.y,ae),V.map.texture.name=H.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let ie=V.getViewportCount();for(let ae=0;ae<ie;ae++){let xe=V.getViewport(ae);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),D.viewport(o),V.updateMatrices(H,ae),i=V.getFrustum(),x(A,R,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===hi&&v(V,R),V.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(y,M,C)};function v(b,A){let R=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new si(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,R,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,R,p,_,null)}function S(b,A,R,y){let M=null,C=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=R.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=M.uuid,L=A.uuid,N=l[D];N===void 0&&(N={},l[D]=N);let B=N[L];B===void 0&&(B=M.clone(),N[L]=B,A.addEventListener("dispose",T)),M=B}if(M.visible=A.visible,M.wireframe=A.wireframe,y===hi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=n.properties.get(M);D.light=R}return M}function x(b,A,R,y,M){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===hi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);let L=e.update(b),N=b.material;if(Array.isArray(N)){let B=L.groups;for(let O=0,H=B.length;O<H;O++){let V=B[O],j=N[V.materialIndex];if(j&&j.visible){let ie=S(b,j,y,M);b.onBeforeShadow(n,b,A,R,L,ie,V),n.renderBufferDirect(R,null,L,ie,b,V),b.onAfterShadow(n,b,A,R,L,ie,V)}}}else if(N.visible){let B=S(b,N,y,M);b.onBeforeShadow(n,b,A,R,L,B,null),n.renderBufferDirect(R,null,L,B,b,null),b.onAfterShadow(n,b,A,R,L,B,null)}}let D=b.children;for(let L=0,N=D.length;L<N;L++)x(D[L],A,R,y,M)}function T(b){b.target.removeEventListener("dispose",T);for(let R in l){let y=l[R],M=b.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}function Wx(n,e){function t(){let F=!1,ce=new Vt,ue=null,Se=new Vt(0,0,0,0);return{setMask:function(re){ue!==re&&!F&&(n.colorMask(re,re,re,re),ue=re)},setLocked:function(re){F=re},setClear:function(re,$,Ae,Ke,Dt){Dt===!0&&(re*=Ke,$*=Ke,Ae*=Ke),ce.set(re,$,Ae,Ke),Se.equals(ce)===!1&&(n.clearColor(re,$,Ae,Ke),Se.copy(ce))},reset:function(){F=!1,ue=null,Se.set(-1,0,0,0)}}}function i(){let F=!1,ce=!1,ue=null,Se=null,re=null;return{setReversed:function($){if(ce!==$){let Ae=e.get("EXT_clip_control");$?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ce=$;let Ke=re;re=null,this.setClear(Ke)}},getReversed:function(){return ce},setTest:function($){$?Q(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function($){ue!==$&&!F&&(n.depthMask($),ue=$)},setFunc:function($){if(ce&&($=Gx[$]),Se!==$){switch($){case $a:n.depthFunc(n.NEVER);break;case ja:n.depthFunc(n.ALWAYS);break;case Qa:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case ec:n.depthFunc(n.EQUAL);break;case tc:n.depthFunc(n.GEQUAL);break;case nc:n.depthFunc(n.GREATER);break;case ic:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=$}},setLocked:function($){F=$},setClear:function($){re!==$&&(ce&&($=1-$),n.clearDepth($),re=$)},reset:function(){F=!1,ue=null,Se=null,re=null,ce=!1}}}function s(){let F=!1,ce=null,ue=null,Se=null,re=null,$=null,Ae=null,Ke=null,Dt=null;return{setTest:function(St){F||(St?Q(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(St){ce!==St&&!F&&(n.stencilMask(St),ce=St)},setFunc:function(St,_i,ni){(ue!==St||Se!==_i||re!==ni)&&(n.stencilFunc(St,_i,ni),ue=St,Se=_i,re=ni)},setOp:function(St,_i,ni){($!==St||Ae!==_i||Ke!==ni)&&(n.stencilOp(St,_i,ni),$=St,Ae=_i,Ke=ni)},setLocked:function(St){F=St},setClear:function(St){Dt!==St&&(n.clearStencil(St),Dt=St)},reset:function(){F=!1,ce=null,ue=null,Se=null,re=null,$=null,Ae=null,Ke=null,Dt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,_=!1,g=null,f=null,v=null,S=null,x=null,T=null,b=null,A=new Pe(0,0,0),R=0,y=!1,M=null,C=null,D=null,L=null,N=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,H=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=H>=2);let j=null,ie={},ae=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Ne=new Vt().fromArray(ae),qe=new Vt().fromArray(xe);function Ye(F,ce,ue,Se){let re=new Uint8Array(4),$=n.createTexture();n.bindTexture(F,$),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<ue;Ae++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ce+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return $}let J={};J[n.TEXTURE_2D]=Ye(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),o.setFunc(ps),Fe(!1),Me(hh),Q(n.CULL_FACE),dt(Ri);function Q(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function _e(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Le(F,ce){return u[F]!==ce?(n.bindFramebuffer(F,ce),u[F]=ce,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Te(F,ce){let ue=p,Se=!1;if(F){ue=d.get(ce),ue===void 0&&(ue=[],d.set(ce,ue));let re=F.textures;if(ue.length!==re.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let $=0,Ae=re.length;$<Ae;$++)ue[$]=n.COLOR_ATTACHMENT0+$;ue.length=re.length,Se=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,Se=!0);Se&&n.drawBuffers(ue)}function st(F){return m!==F?(n.useProgram(F),m=F,!0):!1}let Tt={[Wi]:n.FUNC_ADD,[wd]:n.FUNC_SUBTRACT,[Ad]:n.FUNC_REVERSE_SUBTRACT};Tt[Rd]=n.MIN,Tt[Cd]=n.MAX;let P={[Id]:n.ZERO,[Pd]:n.ONE,[Ld]:n.SRC_COLOR,[Ea]:n.SRC_ALPHA,[Bd]:n.SRC_ALPHA_SATURATE,[Nd]:n.DST_COLOR,[Ud]:n.DST_ALPHA,[Dd]:n.ONE_MINUS_SRC_COLOR,[Ta]:n.ONE_MINUS_SRC_ALPHA,[Od]:n.ONE_MINUS_DST_COLOR,[Fd]:n.ONE_MINUS_DST_ALPHA,[kd]:n.CONSTANT_COLOR,[zd]:n.ONE_MINUS_CONSTANT_COLOR,[Hd]:n.CONSTANT_ALPHA,[Vd]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(F,ce,ue,Se,re,$,Ae,Ke,Dt,St){if(F===Ri){_===!0&&(_e(n.BLEND),_=!1);return}if(_===!1&&(Q(n.BLEND),_=!0),F!==Td){if(F!==g||St!==y){if((f!==Wi||x!==Wi)&&(n.blendEquation(n.FUNC_ADD),f=Wi,x=Wi),St)switch(F){case fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dh:n.blendFunc(n.ONE,n.ONE);break;case fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ph:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ph:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,S=null,T=null,b=null,A.set(0,0,0),R=0,g=F,y=St}return}re=re||ce,$=$||ue,Ae=Ae||Se,(ce!==f||re!==x)&&(n.blendEquationSeparate(Tt[ce],Tt[re]),f=ce,x=re),(ue!==v||Se!==S||$!==T||Ae!==b)&&(n.blendFuncSeparate(P[ue],P[Se],P[$],P[Ae]),v=ue,S=Se,T=$,b=Ae),(Ke.equals(A)===!1||Dt!==R)&&(n.blendColor(Ke.r,Ke.g,Ke.b,Dt),A.copy(Ke),R=Dt),g=F,y=!1}function Oe(F,ce){F.side===Ut?_e(n.CULL_FACE):Q(n.CULL_FACE);let ue=F.side===ln;ce&&(ue=!ue),Fe(ue),F.blending===fs&&F.transparent===!1?dt(Ri):dt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Se=F.stencilWrite;a.setTest(Se),Se&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ve(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function Me(F){F!==Sd?(Q(n.CULL_FACE),F!==C&&(F===hh?n.cullFace(n.BACK):F===bd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),C=F}function Lt(F){F!==D&&(O&&n.lineWidth(F),D=F)}function ve(F,ce,ue){F?(Q(n.POLYGON_OFFSET_FILL),(L!==ce||N!==ue)&&(n.polygonOffset(ce,ue),L=ce,N=ue)):_e(n.POLYGON_OFFSET_FILL)}function Je(F){F?Q(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function Yt(F){F===void 0&&(F=n.TEXTURE0+B-1),j!==F&&(n.activeTexture(F),j=F)}function Bt(F,ce,ue){ue===void 0&&(j===null?ue=n.TEXTURE0+B-1:ue=j);let Se=ie[ue];Se===void 0&&(Se={type:void 0,texture:void 0},ie[ue]=Se),(Se.type!==F||Se.texture!==ce)&&(j!==ue&&(n.activeTexture(ue),j=ue),n.bindTexture(F,ce||J[F]),Se.type=F,Se.texture=ce)}function I(){let F=ie[j];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(F){Ne.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ne.copy(F))}function Be(F){qe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),qe.copy(F))}function Ce(F,ce){let ue=l.get(ce);ue===void 0&&(ue=new WeakMap,l.set(ce,ue));let Se=ue.get(F);Se===void 0&&(Se=n.getUniformBlockIndex(ce,F.name),ue.set(F,Se))}function me(F,ce){let Se=l.get(ce).get(F);c.get(ce)!==Se&&(n.uniformBlockBinding(ce,Se,F.__bindingPointIndex),c.set(ce,Se))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},j=null,ie={},u={},d=new WeakMap,p=[],m=null,_=!1,g=null,f=null,v=null,S=null,x=null,T=null,b=null,A=new Pe(0,0,0),R=0,y=!1,M=null,C=null,D=null,L=null,N=null,Ne.set(0,0,n.canvas.width,n.canvas.height),qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:_e,bindFramebuffer:Le,drawBuffers:Te,useProgram:st,setBlending:dt,setMaterial:Oe,setFlipSided:Fe,setCullFace:Me,setLineWidth:Lt,setPolygonOffset:ve,setScissorTest:Je,activeTexture:Yt,bindTexture:Bt,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:we,texImage3D:se,updateUBOMapping:Ce,uniformBlockBinding:me,texStorage2D:le,texStorage3D:be,texSubImage2D:Z,texSubImage3D:ee,compressedTexSubImage2D:Y,compressedTexSubImage3D:Re,scissor:de,viewport:Be,reset:et}}function Xx(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,E){return p?new OffscreenCanvas(I,E):$r("canvas")}function _(I,E,G){let Z=1,ee=Bt(I);if((ee.width>G||ee.height>G)&&(Z=G/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Y=Math.floor(Z*ee.width),Re=Math.floor(Z*ee.height);u===void 0&&(u=m(Y,Re));let le=E?m(Y,Re):u;return le.width=Y,le.height=Re,le.getContext("2d").drawImage(I,0,0,Y,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Re+")."),le}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function g(I){return I.generateMipmaps}function f(I){n.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(I,E,G,Z,ee=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Y=E;if(E===n.RED&&(G===n.FLOAT&&(Y=n.R32F),G===n.HALF_FLOAT&&(Y=n.R16F),G===n.UNSIGNED_BYTE&&(Y=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.R8UI),G===n.UNSIGNED_SHORT&&(Y=n.R16UI),G===n.UNSIGNED_INT&&(Y=n.R32UI),G===n.BYTE&&(Y=n.R8I),G===n.SHORT&&(Y=n.R16I),G===n.INT&&(Y=n.R32I)),E===n.RG&&(G===n.FLOAT&&(Y=n.RG32F),G===n.HALF_FLOAT&&(Y=n.RG16F),G===n.UNSIGNED_BYTE&&(Y=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.RG8UI),G===n.UNSIGNED_SHORT&&(Y=n.RG16UI),G===n.UNSIGNED_INT&&(Y=n.RG32UI),G===n.BYTE&&(Y=n.RG8I),G===n.SHORT&&(Y=n.RG16I),G===n.INT&&(Y=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),G===n.UNSIGNED_INT&&(Y=n.RGB32UI),G===n.BYTE&&(Y=n.RGB8I),G===n.SHORT&&(Y=n.RGB16I),G===n.INT&&(Y=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),G===n.UNSIGNED_INT&&(Y=n.RGBA32UI),G===n.BYTE&&(Y=n.RGBA8I),G===n.SHORT&&(Y=n.RGBA16I),G===n.INT&&(Y=n.RGBA32I)),E===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),E===n.RGBA){let Re=ee?Jr:mt.getTransfer(Z);G===n.FLOAT&&(Y=n.RGBA32F),G===n.HALF_FLOAT&&(Y=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Y=Re===wt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(I,E){let G;return I?E===null||E===Zi||E===vr?G=n.DEPTH24_STENCIL8:E===Qn?G=n.DEPTH32F_STENCIL8:E===_r&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===vr?G=n.DEPTH_COMPONENT24:E===Qn?G=n.DEPTH_COMPONENT32F:E===_r&&(G=n.DEPTH_COMPONENT16),G}function T(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==En&&I.minFilter!==$n?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function b(I){let E=I.target;E.removeEventListener("dispose",b),R(E),E.isVideoTexture&&h.delete(E)}function A(I){let E=I.target;E.removeEventListener("dispose",A),M(E)}function R(I){let E=i.get(I);if(E.__webglInit===void 0)return;let G=I.source,Z=d.get(G);if(Z){let ee=Z[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(I),Object.keys(Z).length===0&&d.delete(G)}i.remove(I)}function y(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let G=I.source,Z=d.get(G);delete Z[E.__cacheKey],o.memory.textures--}function M(I){let E=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let ee=0;ee<E.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(E.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)n.deleteFramebuffer(E.__webglFramebuffer[Z]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=I.textures;for(let Z=0,ee=G.length;Z<ee;Z++){let Y=i.get(G[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(G[Z])}i.remove(I)}let C=0;function D(){C=0}function L(){let I=C;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),C+=1,I}function N(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function B(I,E){let G=i.get(I);if(I.isVideoTexture&&Je(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let Z=I.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,I,E);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function O(I,E){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){J(G,I,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function H(I,E){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){J(G,I,E);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function V(I,E){let G=i.get(I);if(I.version>0&&G.__version!==I.version){Q(G,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}let j={[wa]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[Aa]:n.MIRRORED_REPEAT},ie={[En]:n.NEAREST,[jd]:n.NEAREST_MIPMAP_NEAREST,[To]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[ac]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},ae={[nf]:n.NEVER,[lf]:n.ALWAYS,[sf]:n.LESS,[Eh]:n.LEQUAL,[rf]:n.EQUAL,[cf]:n.GEQUAL,[of]:n.GREATER,[af]:n.NOTEQUAL};function xe(I,E){if(E.type===Qn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===$n||E.magFilter===ac||E.magFilter===To||E.magFilter===Yi||E.minFilter===$n||E.minFilter===ac||E.minFilter===To||E.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,j[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,j[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,j[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ie[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ie[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===En||E.minFilter!==To&&E.minFilter!==Yi||E.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ne(I,E){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",b));let Z=E.source,ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));let Y=N(E);if(Y!==I.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[Y].usedTimes++;let Re=ee[I.__cacheKey];Re!==void 0&&(ee[I.__cacheKey].usedTimes--,Re.usedTimes===0&&y(E)),I.__cacheKey=Y,I.__webglTexture=ee[Y].texture}return G}function qe(I,E,G){return Math.floor(Math.floor(I/G)/E)}function Ye(I,E,G,Z){let Y=I.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,G,Z,E.data);else{Y.sort((se,de)=>se.start-de.start);let Re=0;for(let se=1;se<Y.length;se++){let de=Y[Re],Be=Y[se],Ce=de.start+de.count,me=qe(Be.start,E.width,4),et=qe(de.start,E.width,4);Be.start<=Ce+1&&me===et&&qe(Be.start+Be.count-1,E.width,4)===me?de.count=Math.max(de.count,Be.start+Be.count-de.start):(++Re,Y[Re]=Be)}Y.length=Re+1;let le=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let se=0,de=Y.length;se<de;se++){let Be=Y[se],Ce=Math.floor(Be.start/4),me=Math.ceil(Be.count/4),et=Ce%E.width,F=Math.floor(Ce/E.width),ce=me,ue=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,et),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,et,F,ce,ue,G,Z,E.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function J(I,E,G){let Z=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=n.TEXTURE_3D);let ee=Ne(I,E),Y=E.source;t.bindTexture(Z,I.__webglTexture,n.TEXTURE0+G);let Re=i.get(Y);if(Y.version!==Re.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);let le=mt.getPrimaries(mt.workingColorSpace),be=E.colorSpace===Ii?null:mt.getPrimaries(E.colorSpace),we=E.colorSpace===Ii||le===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let se=_(E.image,!1,s.maxTextureSize);se=Yt(E,se);let de=r.convert(E.format,E.colorSpace),Be=r.convert(E.type),Ce=S(E.internalFormat,de,Be,E.colorSpace,E.isVideoTexture);xe(Z,E);let me,et=E.mipmaps,F=E.isVideoTexture!==!0,ce=Re.__version===void 0||ee===!0,ue=Y.dataReady,Se=T(E,se);if(E.isDepthTexture)Ce=x(E.format===yr,E.type),ce&&(F?t.texStorage2D(n.TEXTURE_2D,1,Ce,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ce,se.width,se.height,0,de,Be,null));else if(E.isDataTexture)if(et.length>0){F&&ce&&t.texStorage2D(n.TEXTURE_2D,Se,Ce,et[0].width,et[0].height);for(let re=0,$=et.length;re<$;re++)me=et[re],F?ue&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,me.width,me.height,de,Be,me.data):t.texImage2D(n.TEXTURE_2D,re,Ce,me.width,me.height,0,de,Be,me.data);E.generateMipmaps=!1}else F?(ce&&t.texStorage2D(n.TEXTURE_2D,Se,Ce,se.width,se.height),ue&&Ye(E,se,de,Be)):t.texImage2D(n.TEXTURE_2D,0,Ce,se.width,se.height,0,de,Be,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){F&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ce,et[0].width,et[0].height,se.depth);for(let re=0,$=et.length;re<$;re++)if(me=et[re],E.format!==kn)if(de!==null)if(F){if(ue)if(E.layerUpdates.size>0){let Ae=Ih(me.width,me.height,E.format,E.type);for(let Ke of E.layerUpdates){let Dt=me.data.subarray(Ke*Ae/me.data.BYTES_PER_ELEMENT,(Ke+1)*Ae/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ke,me.width,me.height,1,de,Dt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,se.depth,de,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Ce,me.width,me.height,se.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,se.depth,de,Be,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Ce,me.width,me.height,se.depth,0,de,Be,me.data)}else{F&&ce&&t.texStorage2D(n.TEXTURE_2D,Se,Ce,et[0].width,et[0].height);for(let re=0,$=et.length;re<$;re++)me=et[re],E.format!==kn?de!==null?F?ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,me.width,me.height,de,me.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Ce,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ue&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,me.width,me.height,de,Be,me.data):t.texImage2D(n.TEXTURE_2D,re,Ce,me.width,me.height,0,de,Be,me.data)}else if(E.isDataArrayTexture)if(F){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ce,se.width,se.height,se.depth),ue)if(E.layerUpdates.size>0){let re=Ih(se.width,se.height,E.format,E.type);for(let $ of E.layerUpdates){let Ae=se.data.subarray($*re/se.data.BYTES_PER_ELEMENT,($+1)*re/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,se.width,se.height,1,de,Be,Ae)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,de,Be,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,se.width,se.height,se.depth,0,de,Be,se.data);else if(E.isData3DTexture)F?(ce&&t.texStorage3D(n.TEXTURE_3D,Se,Ce,se.width,se.height,se.depth),ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,de,Be,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,se.width,se.height,se.depth,0,de,Be,se.data);else if(E.isFramebufferTexture){if(ce)if(F)t.texStorage2D(n.TEXTURE_2D,Se,Ce,se.width,se.height);else{let re=se.width,$=se.height;for(let Ae=0;Ae<Se;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Ce,re,$,0,de,Be,null),re>>=1,$>>=1}}else if(et.length>0){if(F&&ce){let re=Bt(et[0]);t.texStorage2D(n.TEXTURE_2D,Se,Ce,re.width,re.height)}for(let re=0,$=et.length;re<$;re++)me=et[re],F?ue&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,de,Be,me):t.texImage2D(n.TEXTURE_2D,re,Ce,de,Be,me);E.generateMipmaps=!1}else if(F){if(ce){let re=Bt(se);t.texStorage2D(n.TEXTURE_2D,Se,Ce,re.width,re.height)}ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Be,se)}else t.texImage2D(n.TEXTURE_2D,0,Ce,de,Be,se);g(E)&&f(Z),Re.__version=Y.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Q(I,E,G){if(E.image.length!==6)return;let Z=Ne(I,E),ee=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+G);let Y=i.get(ee);if(ee.version!==Y.__version||Z===!0){t.activeTexture(n.TEXTURE0+G);let Re=mt.getPrimaries(mt.workingColorSpace),le=E.colorSpace===Ii?null:mt.getPrimaries(E.colorSpace),be=E.colorSpace===Ii||Re===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let we=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,de=[];for(let $=0;$<6;$++)!we&&!se?de[$]=_(E.image[$],!0,s.maxCubemapSize):de[$]=se?E.image[$].image:E.image[$],de[$]=Yt(E,de[$]);let Be=de[0],Ce=r.convert(E.format,E.colorSpace),me=r.convert(E.type),et=S(E.internalFormat,Ce,me,E.colorSpace),F=E.isVideoTexture!==!0,ce=Y.__version===void 0||Z===!0,ue=ee.dataReady,Se=T(E,Be);xe(n.TEXTURE_CUBE_MAP,E);let re;if(we){F&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,et,Be.width,Be.height);for(let $=0;$<6;$++){re=de[$].mipmaps;for(let Ae=0;Ae<re.length;Ae++){let Ke=re[Ae];E.format!==kn?Ce!==null?F?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae,0,0,Ke.width,Ke.height,Ce,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae,et,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae,0,0,Ke.width,Ke.height,Ce,me,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae,et,Ke.width,Ke.height,0,Ce,me,Ke.data)}}}else{if(re=E.mipmaps,F&&ce){re.length>0&&Se++;let $=Bt(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,et,$.width,$.height)}for(let $=0;$<6;$++)if(se){F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,de[$].width,de[$].height,Ce,me,de[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,et,de[$].width,de[$].height,0,Ce,me,de[$].data);for(let Ae=0;Ae<re.length;Ae++){let Dt=re[Ae].image[$].image;F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae+1,0,0,Dt.width,Dt.height,Ce,me,Dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae+1,et,Dt.width,Dt.height,0,Ce,me,Dt.data)}}else{F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,me,de[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,et,Ce,me,de[$]);for(let Ae=0;Ae<re.length;Ae++){let Ke=re[Ae];F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae+1,0,0,Ce,me,Ke.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae+1,et,Ce,me,Ke.image[$])}}}g(E)&&f(n.TEXTURE_CUBE_MAP),Y.__version=ee.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function _e(I,E,G,Z,ee,Y){let Re=r.convert(G.format,G.colorSpace),le=r.convert(G.type),be=S(G.internalFormat,Re,le,G.colorSpace),we=i.get(E),se=i.get(G);if(se.__renderTarget=E,!we.__hasExternalTextures){let de=Math.max(1,E.width>>Y),Be=Math.max(1,E.height>>Y);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,be,de,Be,E.depth,0,Re,le,null):t.texImage2D(ee,Y,be,de,Be,0,Re,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ee,se.__webglTexture,0,Lt(E)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ee,se.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(I,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){let Z=E.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,Y=x(E.stencilBuffer,ee),Re=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Lt(E);ve(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,Y,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,Y,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Y,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,I)}else{let Z=E.textures;for(let ee=0;ee<Z.length;ee++){let Y=Z[ee],Re=r.convert(Y.format,Y.colorSpace),le=r.convert(Y.type),be=S(Y.internalFormat,Re,le,Y.colorSpace),we=Lt(E);G&&ve(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,be,E.width,E.height):ve(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,be,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,be,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);let ee=Z.__webglTexture,Y=Lt(E);if(E.depthTexture.format===ar)ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(E.depthTexture.format===yr)ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function st(I){let E=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let Z=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){let ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=Z}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let Z=I.texture.mipmaps;Z&&Z.length>0?Te(E.__webglFramebuffer[0],I):Te(E.__webglFramebuffer,I)}else if(G){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=n.createRenderbuffer(),Le(E.__webglDepthbuffer[Z],I,!1);else{let ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}else{let Z=I.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Le(E.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(I,E,G){let Z=i.get(I);E!==void 0&&_e(Z.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&st(I)}function P(I){let E=I.texture,G=i.get(I),Z=i.get(E);I.addEventListener("dispose",A);let ee=I.textures,Y=I.isWebGLCubeRenderTarget===!0,Re=ee.length>1;if(Re||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=E.version,o.memory.textures++),Y){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let be=0;be<E.mipmaps.length;be++)G.__webglFramebuffer[le][be]=n.createFramebuffer()}else G.__webglFramebuffer[le]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)G.__webglFramebuffer[le]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Re)for(let le=0,be=ee.length;le<be;le++){let we=i.get(ee[le]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&ve(I)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){let be=ee[le];G.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[le]);let we=r.convert(be.format,be.colorSpace),se=r.convert(be.type),de=S(be.internalFormat,we,se,be.colorSpace,I.isXRRenderTarget===!0),Be=Lt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,de,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,G.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),xe(n.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)_e(G.__webglFramebuffer[le][be],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,be);else _e(G.__webglFramebuffer[le],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(E)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let le=0,be=ee.length;le<be;le++){let we=ee[le],se=i.get(we),de=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(de=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,se.__webglTexture),xe(de,we),_e(G.__webglFramebuffer,I,we,n.COLOR_ATTACHMENT0+le,de,0),g(we)&&f(de)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(le=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),xe(le,E),E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)_e(G.__webglFramebuffer[be],I,E,n.COLOR_ATTACHMENT0,le,be);else _e(G.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,le,0);g(E)&&f(le),t.unbindTexture()}I.depthBuffer&&st(I)}function dt(I){let E=I.textures;for(let G=0,Z=E.length;G<Z;G++){let ee=E[G];if(g(ee)){let Y=v(I),Re=i.get(ee).__webglTexture;t.bindTexture(Y,Re),f(Y),t.unbindTexture()}}}let Oe=[],Fe=[];function Me(I){if(I.samples>0){if(ve(I)===!1){let E=I.textures,G=I.width,Z=I.height,ee=n.COLOR_BUFFER_BIT,Y=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(I),le=E.length>1;if(le)for(let we=0;we<E.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let be=I.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let we=0;we<E.length;we++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);let se=i.get(E[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,G,Z,0,0,G,Z,ee,n.NEAREST),c===!0&&(Oe.length=0,Fe.length=0,Oe.push(n.COLOR_ATTACHMENT0+we),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Oe.push(Y),Fe.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let we=0;we<E.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);let se=i.get(E[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Lt(I){return Math.min(s.maxSamples,I.samples)}function ve(I){let E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Je(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function Yt(I,E){let G=I.colorSpace,Z=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==ms&&G!==Ii&&(mt.getTransfer(G)===wt?(Z!==kn||ee!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Bt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=V,this.rebindTextures=Tt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ve}function qx(n,e){function t(i,s=Ii){let r,o=mt.getTransfer(s);if(i===jn)return n.UNSIGNED_BYTE;if(i===lc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gh)return n.BYTE;if(i===_h)return n.SHORT;if(i===_r)return n.UNSIGNED_SHORT;if(i===cc)return n.INT;if(i===Zi)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===xr)return n.HALF_FLOAT;if(i===yh)return n.ALPHA;if(i===Mh)return n.RGB;if(i===kn)return n.RGBA;if(i===ar)return n.DEPTH_COMPONENT;if(i===yr)return n.DEPTH_STENCIL;if(i===uc)return n.RED;if(i===dc)return n.RED_INTEGER;if(i===Sh)return n.RG;if(i===fc)return n.RG_INTEGER;if(i===pc)return n.RGBA_INTEGER;if(i===wo||i===Ao||i===Ro||i===Co)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mc||i===gc||i===_c||i===xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vc||i===yc||i===Mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vc||i===yc)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sc||i===bc||i===Ec||i===Tc||i===wc||i===Ac||i===Rc||i===Cc||i===Ic||i===Pc||i===Lc||i===Dc||i===Uc||i===Fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ec)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ac)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ic)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nc||i===Oc||i===Bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Nc)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kc||i===zc||i===Hc||i===Vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===kc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function Kx(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Ah(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,v,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,x)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),_(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,v,S):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===ln&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===ln&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let v=e.get(f),S=v.envMap,x=v.envMapRotation;S&&(g.envMap.value=S,Ss.copy(x),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),g.envMapRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(Ss)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,v,S){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=S*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){let v=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $x(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){let x=S.program;i.uniformBlockBinding(v,x)}function l(v,S){let x=s[v.id];x===void 0&&(m(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",g));let T=S.program;i.updateUBOMapping(v,T);let b=e.render.frame;r[v.id]!==b&&(d(v),r[v.id]=b)}function h(v){let S=u();v.__bindingPointIndex=S;let x=n.createBuffer(),T=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let S=s[v.id],x=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let b=0,A=x.length;b<A;b++){let R=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,M=R.length;y<M;y++){let C=R[y];if(p(C,b,y,T)===!0){let D=C.__offset,L=Array.isArray(C.value)?C.value:[C.value],N=0;for(let B=0;B<L.length;B++){let O=L[B],H=_(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,D+N,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,N),N+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,S,x,T){let b=v.value,A=S+"_"+x;if(T[A]===void 0)return typeof b=="number"||typeof b=="boolean"?T[A]=b:T[A]=b.clone(),!0;{let R=T[A];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return T[A]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function m(v){let S=v.uniforms,x=0,T=16;for(let A=0,R=S.length;A<R;A++){let y=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,C=y.length;M<C;M++){let D=y[M],L=Array.isArray(D.value)?D.value:[D.value];for(let N=0,B=L.length;N<B;N++){let O=L[N],H=_(O),V=x%T,j=V%H.boundary,ie=V+j;x+=j,ie!==0&&T-ie<H.storage&&(x+=T-ie),D.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=H.storage}}}let b=x%T;return b>0&&(x+=T-b),v.__size=x,v.__cache={},this}function _(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function g(v){let S=v.target;S.removeEventListener("dispose",g);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Tg,wg,Ag,Rg,Cg,Ig,Pg,Lg,Dg,Ug,Fg,Ng,Og,Bg,kg,zg,Hg,Vg,Gg,Wg,Xg,qg,Yg,Zg,Jg,Kg,$g,jg,Qg,e0,t0,n0,i0,s0,r0,o0,a0,c0,l0,h0,u0,d0,f0,p0,m0,g0,_0,x0,v0,y0,M0,S0,b0,E0,T0,w0,A0,R0,C0,I0,P0,L0,D0,U0,F0,N0,O0,B0,k0,z0,H0,V0,G0,W0,X0,q0,Y0,Z0,J0,K0,$0,j0,Q0,e1,t1,n1,i1,s1,r1,o1,a1,c1,l1,h1,u1,d1,f1,p1,m1,g1,_1,x1,v1,y1,M1,S1,b1,E1,T1,w1,A1,R1,C1,I1,P1,L1,D1,U1,F1,N1,O1,B1,k1,z1,H1,V1,G1,W1,X1,q1,Y1,Z1,J1,K1,$1,j1,Q1,e_,t_,n_,i_,nt,pe,ui,Gc,Ms,s_,Sr,mf,Es,Lh,gf,Dh,Uh,Fh,Nh,bs,Mr,_f,u_,qc,kf,Mf,zf,Hf,Vf,Sf,bf,Ef,Tf,wf,Bh,kh,zh,Oh,br,cx,lx,Cf,Xc,xx,vx,Mx,Cx,Vh,Gh,Nx,zx,Hx,Gx,Yx,Zx,Wh,Xh,Ss,Jx,Yc,di=xt(()=>{Ph();Ph();Tg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wg=`#ifdef USE_ALPHAHASH
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
#endif`,Ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pg=`#ifdef USE_AOMAP
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
#endif`,Lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dg=`#ifdef USE_BATCHING
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
#endif`,Ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Og=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bg=`#ifdef USE_IRIDESCENCE
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
#endif`,kg=`#ifdef USE_BUMPMAP
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
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zg=`#define PI 3.141592653589793
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
} // validated`,Jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kg=`vec3 transformedNormal = objectNormal;
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
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
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
}`,f0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g0=`uniform bool receiveShadow;
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
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S0=`PhysicalMaterial material;
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
#endif`,b0=`struct PhysicalMaterial {
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
}`,E0=`
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U0=`#if defined( USE_POINTS_UV )
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
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
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
#endif`,H0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y0=`#ifdef USE_NORMALMAP
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
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l1=`float getShadowMask() {
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
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,p1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x1=`#ifdef USE_TRANSMISSION
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
#endif`,v1=`#ifdef USE_TRANSMISSION
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`#include <common>
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
}`,P1=`#if DEPTH_PACKING == 3200
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
}`,L1=`#define DISTANCE
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
}`,D1=`#define DISTANCE
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
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
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
}`,O1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,k1=`uniform vec3 diffuse;
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
}`,z1=`#define LAMBERT
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
}`,H1=`#define LAMBERT
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
}`,V1=`#define MATCAP
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
}`,G1=`#define MATCAP
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
}`,W1=`#define NORMAL
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
}`,X1=`#define NORMAL
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
}`,q1=`#define PHONG
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
}`,Y1=`#define PHONG
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
}`,Z1=`#define STANDARD
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
}`,J1=`#define STANDARD
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
}`,K1=`#define TOON
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
}`,$1=`#define TOON
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
}`,j1=`uniform float size;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,e_=`#include <common>
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
}`,t_=`uniform vec3 color;
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
}`,n_=`uniform float rotation;
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
}`,i_=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Tg,alphahash_pars_fragment:wg,alphamap_fragment:Ag,alphamap_pars_fragment:Rg,alphatest_fragment:Cg,alphatest_pars_fragment:Ig,aomap_fragment:Pg,aomap_pars_fragment:Lg,batching_pars_vertex:Dg,batching_vertex:Ug,begin_vertex:Fg,beginnormal_vertex:Ng,bsdfs:Og,iridescence_fragment:Bg,bumpmap_pars_fragment:kg,clipping_planes_fragment:zg,clipping_planes_pars_fragment:Hg,clipping_planes_pars_vertex:Vg,clipping_planes_vertex:Gg,color_fragment:Wg,color_pars_fragment:Xg,color_pars_vertex:qg,color_vertex:Yg,common:Zg,cube_uv_reflection_fragment:Jg,defaultnormal_vertex:Kg,displacementmap_pars_vertex:$g,displacementmap_vertex:jg,emissivemap_fragment:Qg,emissivemap_pars_fragment:e0,colorspace_fragment:t0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:s0,envmap_pars_fragment:r0,envmap_pars_vertex:o0,envmap_physical_pars_fragment:_0,envmap_vertex:a0,fog_vertex:c0,fog_pars_vertex:l0,fog_fragment:h0,fog_pars_fragment:u0,gradientmap_pars_fragment:d0,lightmap_pars_fragment:f0,lights_lambert_fragment:p0,lights_lambert_pars_fragment:m0,lights_pars_begin:g0,lights_toon_fragment:x0,lights_toon_pars_fragment:v0,lights_phong_fragment:y0,lights_phong_pars_fragment:M0,lights_physical_fragment:S0,lights_physical_pars_fragment:b0,lights_fragment_begin:E0,lights_fragment_maps:T0,lights_fragment_end:w0,logdepthbuf_fragment:A0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:C0,logdepthbuf_vertex:I0,map_fragment:P0,map_pars_fragment:L0,map_particle_fragment:D0,map_particle_pars_fragment:U0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:N0,morphinstance_vertex:O0,morphcolor_vertex:B0,morphnormal_vertex:k0,morphtarget_pars_vertex:z0,morphtarget_vertex:H0,normal_fragment_begin:V0,normal_fragment_maps:G0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:q0,normalmap_pars_fragment:Y0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:K0,iridescence_pars_fragment:$0,opaque_fragment:j0,packing:Q0,premultiplied_alpha_fragment:e1,project_vertex:t1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:s1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:o1,shadowmap_pars_vertex:a1,shadowmap_vertex:c1,shadowmask_pars_fragment:l1,skinbase_vertex:h1,skinning_pars_vertex:u1,skinning_vertex:d1,skinnormal_vertex:f1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:g1,tonemapping_pars_fragment:_1,transmission_fragment:x1,transmission_pars_fragment:v1,uv_pars_fragment:y1,uv_pars_vertex:M1,uv_vertex:S1,worldpos_vertex:b1,background_vert:E1,background_frag:T1,backgroundCube_vert:w1,backgroundCube_frag:A1,cube_vert:R1,cube_frag:C1,depth_vert:I1,depth_frag:P1,distanceRGBA_vert:L1,distanceRGBA_frag:D1,equirect_vert:U1,equirect_frag:F1,linedashed_vert:N1,linedashed_frag:O1,meshbasic_vert:B1,meshbasic_frag:k1,meshlambert_vert:z1,meshlambert_frag:H1,meshmatcap_vert:V1,meshmatcap_frag:G1,meshnormal_vert:W1,meshnormal_frag:X1,meshphong_vert:q1,meshphong_frag:Y1,meshphysical_vert:Z1,meshphysical_frag:J1,meshtoon_vert:K1,meshtoon_frag:$1,points_vert:j1,points_frag:Q1,shadow_vert:e_,shadow_frag:t_,sprite_vert:n_,sprite_frag:i_},pe={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ui={basic:{uniforms:gn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:gn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:gn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:gn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:gn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:gn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:gn([pe.points,pe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:gn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:gn([pe.common,pe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:gn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:gn([pe.sprite,pe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:gn([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:gn([pe.lights,pe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ui.physical={uniforms:gn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};Gc={r:0,b:0,g:0},Ms=new mn,s_=new yt;Sr=4,mf=[.125,.215,.35,.446,.526,.582],Es=20,Lh=new So,gf=new Pe,Dh=null,Uh=0,Fh=0,Nh=!1,bs=(1+Math.sqrt(5))/2,Mr=1/bs,_f=[new U(-bs,Mr,0),new U(bs,Mr,0),new U(-Mr,0,bs),new U(Mr,0,bs),new U(0,bs,-Mr),new U(0,bs,Mr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],u_=new U,qc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=u_}=r;Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dh,Uh,Fh),this._renderer.xr.enabled=Nh,e.scissorTest=!1,Wc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:xr,format:kn,colorSpace:ms,depthBuffer:!1},s=xf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d_(r)),this._blurMaterial=f_(r,e,t)}return s}_compileMaterial(e){let t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,Lh)}_sceneToCubeUV(e,t,i,s,r){let c=new pn(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(gf),u.toneMapping=Ci,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Zt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new bt(new ci,_),f=!1,v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,f=!0):(_.color.copy(gf),f=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):x===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));let T=this._cubeSize;Wc(s,x*T,S>2?T:0,T,T),u.setRenderTarget(s),f&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===xs||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Wc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Lh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_f[(s-r-1)%_f.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new bt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Es-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Es;g>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Es}`);let f=[],v=0;for(let A=0;A<Es;++A){let R=A/_,y=Math.exp(-R*R/2);f.push(y),A===0?v+=y:A<g&&(v+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-i;let x=this._sizeLods[s],T=3*x*(s>S-Sr?s-S+Sr:0),b=4*(this._cubeSize-x);Wc(t,T,b,3*x,2*x),c.setRenderTarget(t),c.render(u,Lh)}};kf=new wn,Mf=new lo(1,1),zf=new jr,Hf=new La,Vf=new io,Sf=[],bf=[],Ef=new Float32Array(16),Tf=new Float32Array(9),wf=new Float32Array(4);Bh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=z_(t.type)}},kh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ox(t.type)}},zh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Oh=/(\w+)(\])?(\[|\.)?/g;br=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ax(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};cx=37297,lx=0;Cf=new Qe;Xc=new U;xx=/^[ \t]*#include +<([\w\d./]+)>/gm;vx=new Map;Mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Cx=0,Vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Gh(e),t.set(e,i)),i}},Gh=class{constructor(e){this.id=Cx++,this.code=e,this.usedTimes=0}};Nx=0;zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
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
}`;Gx={[$a]:ja,[Qa]:nc,[ec]:ic,[ps]:tc,[ja]:$a,[nc]:Qa,[ic]:ec,[tc]:ps};Yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zx=`
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

}`,Wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ho(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Pn({vertexShader:Yx,fragmentShader:Zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new mo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xh=class extends Ti{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null,_=typeof XRWebGLBinding<"u",g=new Wh,f={},v=t.getContextAttributes(),S=null,x=null,T=[],b=[],A=new at,R=null,y=new pn;y.viewport=new Vt;let M=new pn;M.viewport=new Vt;let C=[y,M],D=new Ka,L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Q=T[J];return Q===void 0&&(Q=new ur,T[J]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(J){let Q=T[J];return Q===void 0&&(Q=new ur,T[J]=Q),Q.getGripSpace()},this.getHand=function(J){let Q=T[J];return Q===void 0&&(Q=new ur,T[J]=Q),Q.getHandSpace()};function B(J){let Q=b.indexOf(J.inputSource);if(Q===-1)return;let _e=T[Q];_e!==void 0&&(_e.update(J.inputSource,J.frame,l||o),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let J=0;J<T.length;J++){let Q=b[J];Q!==null&&(b[J]=null,T[J].disconnect(Q))}L=null,N=null,g.reset();for(let J in f)delete f[J];e.setRenderTarget(S),p=null,d=null,u=null,s=null,x=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Le=null,Te=null;v.depth&&(Te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=v.stencil?yr:ar,Le=v.stencil?vr:Zi);let st={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(st),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new si(d.textureWidth,d.textureHeight,{format:kn,type:jn,depthTexture:new lo(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let _e={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new si(p.framebufferWidth,p.framebufferHeight,{format:kn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(J){for(let Q=0;Q<J.removed.length;Q++){let _e=J.removed[Q],Le=b.indexOf(_e);Le>=0&&(b[Le]=null,T[Le].disconnect(_e))}for(let Q=0;Q<J.added.length;Q++){let _e=J.added[Q],Le=b.indexOf(_e);if(Le===-1){for(let st=0;st<T.length;st++)if(st>=b.length){b.push(_e),Le=st;break}else if(b[st]===null){b[st]=_e,Le=st;break}if(Le===-1)break}let Te=T[Le];Te&&Te.connect(_e)}}let V=new U,j=new U;function ie(J,Q,_e){V.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(_e.matrixWorld);let Le=V.distanceTo(j),Te=Q.projectionMatrix.elements,st=_e.projectionMatrix.elements,Tt=Te[14]/(Te[10]-1),P=Te[14]/(Te[10]+1),dt=(Te[9]+1)/Te[5],Oe=(Te[9]-1)/Te[5],Fe=(Te[8]-1)/Te[0],Me=(st[8]+1)/st[0],Lt=Tt*Fe,ve=Tt*Me,Je=Le/(-Fe+Me),Yt=Je*-Fe;if(Q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Yt),J.translateZ(Je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Te[10]===-1)J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Bt=Tt+Je,I=P+Je,E=Lt-Yt,G=ve+(Le-Yt),Z=dt*P/I*Bt,ee=Oe*P/I*Bt;J.projectionMatrix.makePerspective(E,G,Z,ee,Bt,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ae(J,Q){Q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Q=J.near,_e=J.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),D.near=M.near=y.near=Q,D.far=M.far=y.far=_e,(L!==D.near||N!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,N=D.far),D.layers.mask=J.layers.mask|6,y.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;let Le=J.parent,Te=D.cameras;ae(D,Le);for(let st=0;st<Te.length;st++)ae(Te[st],Le);Te.length===2?ie(D,y,M):D.projectionMatrix.copy(y.projectionMatrix),xe(J,D,Le)};function xe(J,Q,_e){_e===null?J.matrix.copy(Q.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(Q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ca*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(J){return f[J]};let Ne=null;function qe(J,Q){if(h=Q.getViewerPose(l||o),m=Q,h!==null){let _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Le=!1;_e.length!==D.cameras.length&&(D.cameras.length=0,Le=!0);for(let P=0;P<_e.length;P++){let dt=_e[P],Oe=null;if(p!==null)Oe=p.getViewport(dt);else{let Me=u.getViewSubImage(d,dt);Oe=Me.viewport,P===0&&(e.setRenderTargetTextures(x,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(x))}let Fe=C[P];Fe===void 0&&(Fe=new pn,Fe.layers.enable(P),Fe.viewport=new Vt,C[P]=Fe),Fe.matrix.fromArray(dt.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(dt.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),P===0&&(D.matrix.copy(Fe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Le===!0&&D.cameras.push(Fe)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let P=u.getDepthInformation(_e[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let P=0;P<_e.length;P++){let dt=_e[P].camera;if(dt){let Oe=f[dt];Oe||(Oe=new ho,f[dt]=Oe);let Fe=u.getCameraImage(dt);Oe.sourceTexture=Fe}}}}for(let _e=0;_e<T.length;_e++){let Le=b[_e],Te=T[_e];Le!==null&&Te!==void 0&&Te.update(Le,Q,l||o)}Ne&&Ne(J,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),m=null}let Ye=new Bf;Ye.setAnimationLoop(qe),this.setAnimationLoop=function(J){Ne=J},this.dispose=function(){}}},Ss=new mn,Jx=new yt;Yc=class{constructor(e={}){let{canvas:t=hf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,f=null,v=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=vn;let b=0,A=0,R=null,y=-1,M=null,C=new Vt,D=new Vt,L=null,N=new Pe(0),B=0,O=t.width,H=t.height,V=1,j=null,ie=null,ae=new Vt(0,0,O,H),xe=new Vt(0,0,O,H),Ne=!1,qe=new dr,Ye=!1,J=!1,Q=new yt,_e=new U,Le=new Vt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function Tt(){return R===null?V:1}let P=i;function dt(w,k){return t.getContext(w,k)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",re,!1),P===null){let k="webgl2";if(P=dt(k,w),P===null)throw dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Oe,Fe,Me,Lt,ve,Je,Yt,Bt,I,E,G,Z,ee,Y,Re,le,be,we,se,de,Be,Ce,me,et;function F(){Oe=new m_(P),Oe.init(),Ce=new qx(P,Oe),Fe=new c_(P,Oe,e,Ce),Me=new Wx(P,Oe),Fe.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),Lt=new x_(P),ve=new Px,Je=new Xx(P,Oe,Me,ve,Fe,Ce,Lt),Yt=new h_(x),Bt=new p_(x),I=new Eg(P),me=new o_(P,I),E=new g_(P,I,Lt,me),G=new y_(P,E,I,Lt),se=new v_(P,Fe,Je),le=new l_(ve),Z=new Ix(x,Yt,Bt,Oe,Fe,me,le),ee=new Kx(x,ve),Y=new Dx,Re=new kx(Oe),we=new r_(x,Yt,Bt,Me,G,p,c),be=new Vx(x,G,Fe),et=new $x(P,Lt,Fe,Me),de=new a_(P,Oe,Lt),Be=new __(P,Oe,Lt),Lt.programs=Z.programs,x.capabilities=Fe,x.extensions=Oe,x.properties=ve,x.renderLists=Y,x.shadowMap=be,x.state=Me,x.info=Lt}F();let ce=new Xh(x,P);this.xr=ce,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=Oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(O,H,!1))},this.getSize=function(w){return w.set(O,H)},this.setSize=function(w,k,W=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,H=k,t.width=Math.floor(w*V),t.height=Math.floor(k*V),W===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(O*V,H*V).floor()},this.setDrawingBufferSize=function(w,k,W){O=w,H=k,V=W,t.width=Math.floor(w*W),t.height=Math.floor(k*W),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,k,W,X){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,k,W,X),Me.viewport(C.copy(ae).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(xe)},this.setScissor=function(w,k,W,X){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,k,W,X),Me.scissor(D.copy(xe).multiplyScalar(V).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(w){Me.setScissorTest(Ne=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,W=!0){let X=0;if(w){let z=!1;if(R!==null){let oe=R.texture.format;z=oe===pc||oe===fc||oe===dc}if(z){let oe=R.texture.type,ge=oe===jn||oe===Zi||oe===_r||oe===vr||oe===lc||oe===hc,Ee=we.getClearColor(),ye=we.getClearAlpha(),Ve=Ee.r,We=Ee.g,De=Ee.b;ge?(m[0]=Ve,m[1]=We,m[2]=De,m[3]=ye,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=Ve,_[1]=We,_[2]=De,_[3]=ye,P.clearBufferiv(P.COLOR,0,_))}else X|=P.COLOR_BUFFER_BIT}k&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",re,!1),we.dispose(),Y.dispose(),Re.dispose(),ve.dispose(),Yt.dispose(),Bt.dispose(),G.dispose(),me.dispose(),et.dispose(),Z.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ni),ce.removeEventListener("sessionend",Du),ss.stop()};function ue(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let w=Lt.autoReset,k=be.enabled,W=be.autoUpdate,X=be.needsUpdate,z=be.type;F(),Lt.autoReset=w,be.enabled=k,be.autoUpdate=W,be.needsUpdate=X,be.type=z}function re(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $(w){let k=w.target;k.removeEventListener("dispose",$),Ae(k)}function Ae(w){Ke(w),ve.remove(w)}function Ke(w){let k=ve.get(w).programs;k!==void 0&&(k.forEach(function(W){Z.releaseProgram(W)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,W,X,z,oe){k===null&&(k=Te);let ge=z.isMesh&&z.matrixWorld.determinant()<0,Ee=ym(w,k,W,X,z);Me.setMaterial(X,ge);let ye=W.index,Ve=1;if(X.wireframe===!0){if(ye=E.getWireframeAttribute(W),ye===void 0)return;Ve=2}let We=W.drawRange,De=W.attributes.position,ut=We.start*Ve,At=(We.start+We.count)*Ve;oe!==null&&(ut=Math.max(ut,oe.start*Ve),At=Math.min(At,(oe.start+oe.count)*Ve)),ye!==null?(ut=Math.max(ut,0),At=Math.min(At,ye.count)):De!=null&&(ut=Math.max(ut,0),At=Math.min(At,De.count));let Gt=At-ut;if(Gt<0||Gt===1/0)return;me.setup(z,X,Ee,W,ye);let Ft,Rt=de;if(ye!==null&&(Ft=I.get(ye),Rt=Be,Rt.setIndex(Ft)),z.isMesh)X.wireframe===!0?(Me.setLineWidth(X.wireframeLinewidth*Tt()),Rt.setMode(P.LINES)):Rt.setMode(P.TRIANGLES);else if(z.isLine){let ke=X.linewidth;ke===void 0&&(ke=1),Me.setLineWidth(ke*Tt()),z.isLineSegments?Rt.setMode(P.LINES):z.isLineLoop?Rt.setMode(P.LINE_LOOP):Rt.setMode(P.LINE_STRIP)}else z.isPoints?Rt.setMode(P.POINTS):z.isSprite&&Rt.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let ke=z._multiDrawStarts,kt=z._multiDrawCounts,gt=z._multiDrawCount,An=ye?I.get(ye).bytesPerElement:1,zs=ve.get(X).currentProgram.getUniforms();for(let Rn=0;Rn<gt;Rn++)zs.setValue(P,"_gl_DrawID",Rn),Rt.render(ke[Rn]/An,kt[Rn])}else if(z.isInstancedMesh)Rt.renderInstances(ut,Gt,z.count);else if(W.isInstancedBufferGeometry){let ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,kt=Math.min(W.instanceCount,ke);Rt.renderInstances(ut,Gt,kt)}else Rt.render(ut,Gt)};function Dt(w,k,W){w.transparent===!0&&w.side===Ut&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,Jo(w,k,W),w.side=Ei,w.needsUpdate=!0,Jo(w,k,W),w.side=Ut):Jo(w,k,W)}this.compile=function(w,k,W=null){W===null&&(W=w),f=Re.get(W),f.init(k),S.push(f),W.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),w!==W&&w.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();let X=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let oe=z.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){let Ee=oe[ge];Dt(Ee,W,z),X.add(Ee)}else Dt(oe,W,z),X.add(oe)}),f=S.pop(),X},this.compileAsync=function(w,k,W=null){let X=this.compile(w,k,W);return new Promise(z=>{function oe(){if(X.forEach(function(ge){ve.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){z(w);return}setTimeout(oe,10)}Oe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let St=null;function _i(w){St&&St(w)}function ni(){ss.stop()}function Du(){ss.start()}let ss=new Bf;ss.setAnimationLoop(_i),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(w){St=w,ce.setAnimationLoop(w),w===null?ss.stop():ss.start()},ce.addEventListener("sessionstart",ni),ce.addEventListener("sessionend",Du),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,k,R),f=Re.get(w,S.length),f.init(k),S.push(f),Q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),qe.setFromProjectionMatrix(Q,Kn,k.reversedDepth),J=this.localClippingEnabled,Ye=le.init(this.clippingPlanes,J),g=Y.get(w,v.length),g.init(),v.push(g),ce.enabled===!0&&ce.isPresenting===!0){let oe=x.xr.getDepthSensingMesh();oe!==null&&bl(oe,k,-1/0,x.sortObjects)}bl(w,k,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(j,ie),st=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,st&&we.addToRenderList(g,w),this.info.render.frame++,Ye===!0&&le.beginShadows();let W=f.state.shadowsArray;be.render(W,w,k),Ye===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,z=g.transmissive;if(f.setupLights(),k.isArrayCamera){let oe=k.cameras;if(z.length>0)for(let ge=0,Ee=oe.length;ge<Ee;ge++){let ye=oe[ge];Fu(X,z,w,ye)}st&&we.render(w);for(let ge=0,Ee=oe.length;ge<Ee;ge++){let ye=oe[ge];Uu(g,w,ye,ye.viewport)}}else z.length>0&&Fu(X,z,w,k),st&&we.render(w),Uu(g,w,k);R!==null&&A===0&&(Je.updateMultisampleRenderTarget(R),Je.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,k),me.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],Ye===!0&&le.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function bl(w,k,W,X){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||qe.intersectsSprite(w)){X&&Le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);let ge=G.update(w),Ee=w.material;Ee.visible&&g.push(w,ge,Ee,W,Le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||qe.intersectsObject(w))){let ge=G.update(w),Ee=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Le.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Le.copy(ge.boundingSphere.center)),Le.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(Ee)){let ye=ge.groups;for(let Ve=0,We=ye.length;Ve<We;Ve++){let De=ye[Ve],ut=Ee[De.materialIndex];ut&&ut.visible&&g.push(w,ge,ut,W,Le.z,De)}}else Ee.visible&&g.push(w,ge,Ee,W,Le.z,null)}}let oe=w.children;for(let ge=0,Ee=oe.length;ge<Ee;ge++)bl(oe[ge],k,W,X)}function Uu(w,k,W,X){let z=w.opaque,oe=w.transmissive,ge=w.transparent;f.setupLightsView(W),Ye===!0&&le.setGlobalState(x.clippingPlanes,W),X&&Me.viewport(C.copy(X)),z.length>0&&Zo(z,k,W),oe.length>0&&Zo(oe,k,W),ge.length>0&&Zo(ge,k,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Fu(w,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new si(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?xr:jn,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let oe=f.state.transmissionRenderTarget[X.id],ge=X.viewport||C;oe.setSize(ge.z*x.transmissionResolutionScale,ge.w*x.transmissionResolutionScale);let Ee=x.getRenderTarget(),ye=x.getActiveCubeFace(),Ve=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(N),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),st&&we.render(W);let We=x.toneMapping;x.toneMapping=Ci;let De=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),Ye===!0&&le.setGlobalState(x.clippingPlanes,X),Zo(w,W,X),Je.updateMultisampleRenderTarget(oe),Je.updateRenderTargetMipmap(oe),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let At=0,Gt=k.length;At<Gt;At++){let Ft=k[At],Rt=Ft.object,ke=Ft.geometry,kt=Ft.material,gt=Ft.group;if(kt.side===Ut&&Rt.layers.test(X.layers)){let An=kt.side;kt.side=ln,kt.needsUpdate=!0,Nu(Rt,W,X,ke,kt,gt),kt.side=An,kt.needsUpdate=!0,ut=!0}}ut===!0&&(Je.updateMultisampleRenderTarget(oe),Je.updateRenderTargetMipmap(oe))}x.setRenderTarget(Ee,ye,Ve),x.setClearColor(N,B),De!==void 0&&(X.viewport=De),x.toneMapping=We}function Zo(w,k,W){let X=k.isScene===!0?k.overrideMaterial:null;for(let z=0,oe=w.length;z<oe;z++){let ge=w[z],Ee=ge.object,ye=ge.geometry,Ve=ge.group,We=ge.material;We.allowOverride===!0&&X!==null&&(We=X),Ee.layers.test(W.layers)&&Nu(Ee,k,W,ye,We,Ve)}}function Nu(w,k,W,X,z,oe){w.onBeforeRender(x,k,W,X,z,oe),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(x,k,W,X,w,oe),z.transparent===!0&&z.side===Ut&&z.forceSinglePass===!1?(z.side=ln,z.needsUpdate=!0,x.renderBufferDirect(W,k,X,z,w,oe),z.side=Ei,z.needsUpdate=!0,x.renderBufferDirect(W,k,X,z,w,oe),z.side=Ut):x.renderBufferDirect(W,k,X,z,w,oe),w.onAfterRender(x,k,W,X,z,oe)}function Jo(w,k,W){k.isScene!==!0&&(k=Te);let X=ve.get(w),z=f.state.lights,oe=f.state.shadowsArray,ge=z.state.version,Ee=Z.getParameters(w,z.state,oe,k,W),ye=Z.getProgramCacheKey(Ee),Ve=X.programs;X.environment=w.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(w.isMeshStandardMaterial?Bt:Yt).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",$),Ve=new Map,X.programs=Ve);let We=Ve.get(ye);if(We!==void 0){if(X.currentProgram===We&&X.lightsStateVersion===ge)return Bu(w,Ee),We}else Ee.uniforms=Z.getUniforms(w),w.onBeforeCompile(Ee,x),We=Z.acquireProgram(Ee,ye),Ve.set(ye,We),X.uniforms=Ee.uniforms;let De=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=le.uniform),Bu(w,Ee),X.needsLights=Sm(w),X.lightsStateVersion=ge,X.needsLights&&(De.ambientLightColor.value=z.state.ambient,De.lightProbe.value=z.state.probe,De.directionalLights.value=z.state.directional,De.directionalLightShadows.value=z.state.directionalShadow,De.spotLights.value=z.state.spot,De.spotLightShadows.value=z.state.spotShadow,De.rectAreaLights.value=z.state.rectArea,De.ltc_1.value=z.state.rectAreaLTC1,De.ltc_2.value=z.state.rectAreaLTC2,De.pointLights.value=z.state.point,De.pointLightShadows.value=z.state.pointShadow,De.hemisphereLights.value=z.state.hemi,De.directionalShadowMap.value=z.state.directionalShadowMap,De.directionalShadowMatrix.value=z.state.directionalShadowMatrix,De.spotShadowMap.value=z.state.spotShadowMap,De.spotLightMatrix.value=z.state.spotLightMatrix,De.spotLightMap.value=z.state.spotLightMap,De.pointShadowMap.value=z.state.pointShadowMap,De.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=We,X.uniformsList=null,We}function Ou(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=br.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Bu(w,k){let W=ve.get(w);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function ym(w,k,W,X,z){k.isScene!==!0&&(k=Te),Je.resetTextureUnits();let oe=k.fog,ge=X.isMeshStandardMaterial?k.environment:null,Ee=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ms,ye=(X.isMeshStandardMaterial?Bt:Yt).get(X.envMap||ge),Ve=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!W.morphAttributes.position,ut=!!W.morphAttributes.normal,At=!!W.morphAttributes.color,Gt=Ci;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Gt=x.toneMapping);let Ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Rt=Ft!==void 0?Ft.length:0,ke=ve.get(X),kt=f.state.lights;if(Ye===!0&&(J===!0||w!==M)){let _n=w===M&&X.id===y;le.setState(X,w,_n)}let gt=!1;X.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==kt.state.version||ke.outputColorSpace!==Ee||z.isBatchedMesh&&ke.batching===!1||!z.isBatchedMesh&&ke.batching===!0||z.isBatchedMesh&&ke.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ke.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ke.instancing===!1||!z.isInstancedMesh&&ke.instancing===!0||z.isSkinnedMesh&&ke.skinning===!1||!z.isSkinnedMesh&&ke.skinning===!0||z.isInstancedMesh&&ke.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ke.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ke.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ke.instancingMorph===!1&&z.morphTexture!==null||ke.envMap!==ye||X.fog===!0&&ke.fog!==oe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==We||ke.morphTargets!==De||ke.morphNormals!==ut||ke.morphColors!==At||ke.toneMapping!==Gt||ke.morphTargetsCount!==Rt)&&(gt=!0):(gt=!0,ke.__version=X.version);let An=ke.currentProgram;gt===!0&&(An=Jo(X,k,z));let zs=!1,Rn=!1,Br=!1,zt=An.getUniforms(),Nn=ke.uniforms;if(Me.useProgram(An.program)&&(zs=!0,Rn=!0,Br=!0),X.id!==y&&(y=X.id,Rn=!0),zs||M!==w){Me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),zt.setValue(P,"projectionMatrix",w.projectionMatrix),zt.setValue(P,"viewMatrix",w.matrixWorldInverse);let Sn=zt.map.cameraPosition;Sn!==void 0&&Sn.setValue(P,_e.setFromMatrixPosition(w.matrixWorld)),Fe.logarithmicDepthBuffer&&zt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&zt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Rn=!0,Br=!0)}if(z.isSkinnedMesh){zt.setOptional(P,z,"bindMatrix"),zt.setOptional(P,z,"bindMatrixInverse");let _n=z.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),zt.setValue(P,"boneTexture",_n.boneTexture,Je))}z.isBatchedMesh&&(zt.setOptional(P,z,"batchingTexture"),zt.setValue(P,"batchingTexture",z._matricesTexture,Je),zt.setOptional(P,z,"batchingIdTexture"),zt.setValue(P,"batchingIdTexture",z._indirectTexture,Je),zt.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&zt.setValue(P,"batchingColorTexture",z._colorsTexture,Je));let On=W.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&se.update(z,W,An),(Rn||ke.receiveShadow!==z.receiveShadow)&&(ke.receiveShadow=z.receiveShadow,zt.setValue(P,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Nn.envMap.value=ye,Nn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Nn.envMapIntensity.value=k.environmentIntensity),Rn&&(zt.setValue(P,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&Mm(Nn,Br),oe&&X.fog===!0&&ee.refreshFogUniforms(Nn,oe),ee.refreshMaterialUniforms(Nn,X,V,H,f.state.transmissionRenderTarget[w.id]),br.upload(P,Ou(ke),Nn,Je)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(br.upload(P,Ou(ke),Nn,Je),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&zt.setValue(P,"center",z.center),zt.setValue(P,"modelViewMatrix",z.modelViewMatrix),zt.setValue(P,"normalMatrix",z.normalMatrix),zt.setValue(P,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let _n=X.uniformsGroups;for(let Sn=0,El=_n.length;Sn<El;Sn++){let rs=_n[Sn];et.update(rs,An),et.bind(rs,An)}}return An}function Mm(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Sm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,k,W){let X=ve.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ve.get(w.texture).__webglTexture=k,ve.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let W=ve.get(w);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};let bm=P.createFramebuffer();this.setRenderTarget=function(w,k=0,W=0){R=w,b=k,A=W;let X=!0,z=null,oe=!1,ge=!1;if(w){let ye=ve.get(w);if(ye.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(ye.__webglFramebuffer===void 0)Je.setupRenderTarget(w);else if(ye.__hasExternalTextures)Je.rebindTextures(w,ve.get(w.texture).__webglTexture,ve.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let De=w.depthTexture;if(ye.__boundDepthTexture!==De){if(De!==null&&ve.has(De)&&(w.width!==De.image.width||w.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(w)}}let Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ge=!0);let We=ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[k])?z=We[k][W]:z=We[k],oe=!0):w.samples>0&&Je.useMultisampledRTT(w)===!1?z=ve.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?z=We[W]:z=We,C.copy(w.viewport),D.copy(w.scissor),L=w.scissorTest}else C.copy(ae).multiplyScalar(V).floor(),D.copy(xe).multiplyScalar(V).floor(),L=Ne;if(W!==0&&(z=bm),Me.bindFramebuffer(P.FRAMEBUFFER,z)&&X&&Me.drawBuffers(w,z),Me.viewport(C),Me.scissor(D),Me.setScissorTest(L),oe){let ye=ve.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,ye.__webglTexture,W)}else if(ge){let ye=k;for(let Ve=0;Ve<w.textures.length;Ve++){let We=ve.get(w.textures[Ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ve,We.__webglTexture,W,ye)}}else if(w!==null&&W!==0){let ye=ve.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ye.__webglTexture,W)}y=-1},this.readRenderTargetPixels=function(w,k,W,X,z,oe,ge,Ee=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){Me.bindFramebuffer(P.FRAMEBUFFER,ye);try{let Ve=w.textures[Ee],We=Ve.format,De=Ve.type;if(!Fe.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-X&&W>=0&&W<=w.height-z&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee),P.readPixels(k,W,X,z,Ce.convert(We),Ce.convert(De),oe))}finally{let Ve=R!==null?ve.get(R).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(w,k,W,X,z,oe,ge,Ee=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye)if(k>=0&&k<=w.width-X&&W>=0&&W<=w.height-z){Me.bindFramebuffer(P.FRAMEBUFFER,ye);let Ve=w.textures[Ee],We=Ve.format,De=Ve.type;if(!Fe.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ut),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee),P.readPixels(k,W,X,z,Ce.convert(We),Ce.convert(De),0);let At=R!==null?ve.get(R).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,At);let Gt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await uf(P,Gt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ut),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(ut),P.deleteSync(Gt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,W=0){let X=Math.pow(2,-W),z=Math.floor(w.image.width*X),oe=Math.floor(w.image.height*X),ge=k!==null?k.x:0,Ee=k!==null?k.y:0;Je.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,ge,Ee,z,oe),Me.unbindTexture()};let Em=P.createFramebuffer(),Tm=P.createFramebuffer();this.copyTextureToTexture=function(w,k,W=null,X=null,z=0,oe=null){oe===null&&(z!==0?(cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=z,z=0):oe=0);let ge,Ee,ye,Ve,We,De,ut,At,Gt,Ft=w.isCompressedTexture?w.mipmaps[oe]:w.image;if(W!==null)ge=W.max.x-W.min.x,Ee=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,Ve=W.min.x,We=W.min.y,De=W.isBox3?W.min.z:0;else{let On=Math.pow(2,-z);ge=Math.floor(Ft.width*On),Ee=Math.floor(Ft.height*On),w.isDataArrayTexture?ye=Ft.depth:w.isData3DTexture?ye=Math.floor(Ft.depth*On):ye=1,Ve=0,We=0,De=0}X!==null?(ut=X.x,At=X.y,Gt=X.z):(ut=0,At=0,Gt=0);let Rt=Ce.convert(k.format),ke=Ce.convert(k.type),kt;k.isData3DTexture?(Je.setTexture3D(k,0),kt=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Je.setTexture2DArray(k,0),kt=P.TEXTURE_2D_ARRAY):(Je.setTexture2D(k,0),kt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);let gt=P.getParameter(P.UNPACK_ROW_LENGTH),An=P.getParameter(P.UNPACK_IMAGE_HEIGHT),zs=P.getParameter(P.UNPACK_SKIP_PIXELS),Rn=P.getParameter(P.UNPACK_SKIP_ROWS),Br=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,We),P.pixelStorei(P.UNPACK_SKIP_IMAGES,De);let zt=w.isDataArrayTexture||w.isData3DTexture,Nn=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let On=ve.get(w),_n=ve.get(k),Sn=ve.get(On.__renderTarget),El=ve.get(_n.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,El.__webglFramebuffer);for(let rs=0;rs<ye;rs++)zt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(w).__webglTexture,z,De+rs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(k).__webglTexture,oe,Gt+rs)),P.blitFramebuffer(Ve,We,ge,Ee,ut,At,ge,Ee,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||ve.has(w)){let On=ve.get(w),_n=ve.get(k);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Em),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Tm);for(let Sn=0;Sn<ye;Sn++)zt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,On.__webglTexture,z,De+Sn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,On.__webglTexture,z),Nn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_n.__webglTexture,oe,Gt+Sn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_n.__webglTexture,oe),z!==0?P.blitFramebuffer(Ve,We,ge,Ee,ut,At,ge,Ee,P.COLOR_BUFFER_BIT,P.NEAREST):Nn?P.copyTexSubImage3D(kt,oe,ut,At,Gt+Sn,Ve,We,ge,Ee):P.copyTexSubImage2D(kt,oe,ut,At,Ve,We,ge,Ee);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Nn?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(kt,oe,ut,At,Gt,ge,Ee,ye,Rt,ke,Ft.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(kt,oe,ut,At,Gt,ge,Ee,ye,Rt,Ft.data):P.texSubImage3D(kt,oe,ut,At,Gt,ge,Ee,ye,Rt,ke,Ft):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,oe,ut,At,ge,Ee,Rt,ke,Ft.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,oe,ut,At,Ft.width,Ft.height,Rt,Ft.data):P.texSubImage2D(P.TEXTURE_2D,oe,ut,At,ge,Ee,Rt,ke,Ft);P.pixelStorei(P.UNPACK_ROW_LENGTH,gt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,An),P.pixelStorei(P.UNPACK_SKIP_PIXELS,zs),P.pixelStorei(P.UNPACK_SKIP_ROWS,Rn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Br),oe===0&&k.generateMipmaps&&P.generateMipmap(kt),Me.unbindTexture()},this.initRenderTarget=function(w){ve.get(w).__webglFramebuffer===void 0&&Je.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Je.setTextureCube(w,0):w.isData3DTexture?Je.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Je.setTexture2DArray(w,0):Je.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){b=0,A=0,R=null,Me.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}});function Ue(n,e,t){let i=$e((t-n)/(e-n),0,1);return i*i*(3-2*i)}function Wf(n,e,t,i){if(n>=he+80)return t;let[s,r,o,a]=Lo[e],c=Math.max(0,n-he),l=c<8?c*c/16:c-4,h=i?$t((r-s)/2,(a-o)/2,Ue(0,38,c)):$t((s+r)/2,(o+a)/2,l/26);return $t(h,t,Ue(he+24,he+80,n))}function jx(n){return n>=he&&n<Xe}function Ot(n,e){return jx(n)&&Ct.includes(e)?e:"shared"}function Xf(n){return n<$c?"gorge":n>jc?"marsh":"canal"}function hn(n){if(!te.valley)return 5*Math.sin(n*.01)+3*Math.sin(n*.024);let[e,t,i,s]=te.valley;return e*Tr(n,t)+i*Tr(n,s)}function ct(n,e=0){return{x:hn(n)+e,z:-n}}function qf(n,e,t){let[i,s,r,o,a]=te.lanes[e],[c,l]=Lo[e],h=$e((n-he)/(Xe-he),0,1),u=Ue(he,he+te.opening[0],n)*(1-Ue(Xe-te.opening[1],Xe,n)),d=t?$t((l-c)/2,7.2,h):$t((c+l)/2,e==="gorge"?-14.4:e==="marsh"?14.4:0,h),p=t?a*(1+.09*Tr(n,r*.76,o)):i+s*Tr(n,r,o)+s*.24*Tr(n,r*.57,-o);return $t(d,p,u)}function Yf(n){return Ue(he,he+95,n)*(1-Ue(Xe-117,Xe,n))}function it(n,e){if(te.lanes)return te.lanes[e]?qf(n,e,!1):0;let t=Yf(n),i;if(e==="gorge")i=$t(-14.4,-65+11*Math.sin(n*.025)+5*Math.sin(n*.048),t);else if(e==="canal")i=t*(4.2*Math.sin(n*.01)+1.8*Math.sin(n*.028));else if(e==="marsh")i=$t(14.4,69+12*Math.sin(n*.023+.6)+4*Math.sin(n*.051),t);else return 0;return Wf(n,e,i,!1)}function ze(n,e="shared"){if(te.lanes){let r=it(n,e),o=te.lanes[e]?qf(n,e,!0):n<=he?$t(11.2,Kc,Ue(-2,he*.71,n)):$t(21.6,te.outlet,Ue(Xe,Xe+70,n));return{left:r-o,right:r+o,center:r,half:o}}let t=it(n,e),i=Yf(n),s;return e==="gorge"?s=$t(7.2,13.9+2.4*Math.sin(n*.035),i):e==="canal"?s=$t(7.2,16.4+1.9*Math.sin(n*.012),i):e==="marsh"?s=$t(7.2,21+4*Math.sin(n*.029),i):s=n<=he?$t(11.2,Kc,Ue(-2,49,n)):$t(21.6,14.8,Ue(Xe,Xe+70,n)),Lo[e]&&(s=Wf(n,e,s,!0)),{left:t-s,right:t+s,center:t,half:s}}function jt(n,e="shared"){return Math.atan((hn(n+.25)+it(n+.25,e)-hn(n-.25)-it(n-.25,e))*2)}function Jc(n,e){let t=0;for(let[i,s,r]of e)t+=r*Ue(i,s,n);return t}function He(n,e="shared"){if(fi){let r=$e(n-he,0,Xe-he),o=fi.drop*r/(Xe-he);return n>he&&n<Xe&&Gf[e]&&(o=fi.drop*Jc(n,fi[e])/Gf[e]),-fi.head*Math.min(n,he)-fi.grade*r-o-Jc(n,fi.shared)-fi.tail*Math.max(0,n-Xe)}let t=-.042*Math.min(n,he);if(n<=he){let r=Math.min(he+25,he-n);return t+.001*r*r}let i=$e((n-he)/(Xe-he),0,1),s=160;return n<Xe&&(e==="gorge"?s=Jc(n,Qx):e==="marsh"?s=112*i*Ue(he+6,he+49,n)+Jc(n,ev):s=122*i+13*Ue(278,332,n)+9*Ue(602,646,n)+9*Ue(899,947,n)+7*Ue(1187,1237,n)),t-.023*i*(Xe-he)-s-11*Ue(Xe+10,Xe+82,n)-.018*Math.max(0,n-Xe)}function wr(n,e){return(He(n-.25,e)-He(n+.25,e))*2}function Qc(n,e){return zn[Ot(n,e)]}function ei(n,e){let t=$e((e-n.start)/(n.end-n.start),0,1);return n.rise*t*(.62+.38*t)}function Ar(n,e,t="shared"){for(let i of tv[t]||[]){if(n<i.start||n>i.end+3)continue;let s=e-it(n,t)-i.offset;return ei(i,n)*(1-Ue(i.width*.43,i.width*.64,Math.abs(s)))*(1-Ue(i.end,i.end+3,n))}return 0}function Hn(n,e){for(let[t,i,s,r]of el[e]||[]){if(n<t||n>i)continue;let o=(n-t)/(i-t),a=Math.sqrt(Math.max(0,1-(o*2-1)**2)),c=r*a*(e==="shared"?.68+.69*o:1+.085*Math.sin(o*8)),l=e==="shared"?Math.sign(s)*(.95*o-.24)+.16*Math.sin(o*5):.42*Math.sin(o*5),h=it(n,e)+s+l;return{left:h-c,right:h+c,mid:h,radius:c}}return null}function Ts(n,e){let t=e==="gorge",i=e==="marsh",s=Ue(t?-5:i?2:0,he,n),[r,o]=Lo[e],a=t?-1.45:i?1.15:0,c=t?-.45:i?.6:0,l=t?-1:i?.66:.44;return $t(a,(r+o)/2+c,s)+l*Math.sin(Math.PI*s)}function As(n,e){if(e==="shared"&&n<=he)return Ts(n,"canal");let t;if(te.lanes){let i=te.lanes[e];t=(i?.[4]??te.outlet)*(te.id==="delta"?.36:.24)*Tr(n,i?.[2]??280,i?.[3]??0);for(let[r,o,a,c]of el[e]){if(n<r-35||n>o+35)continue;let l=Ue(r-35,r,n)*(1-Ue(o,o+35,n));t=$t(t,a-Math.sign(a)*(c+3.7),l)}}else if(e==="marsh"){let i=nv,s=i[0][1];for(let r=1;r<i.length;r++){if(n<=i[r][0]){s=$t(s,i[r][1],Ue(i[r-1][0],i[r][0],n));break}s=i[r][1]}t=s}else t=e==="gorge"?4*Math.sin(n*.025-1.2):e==="canal"?3*Math.sin(n*.017+.3):2.8*Math.sin(n*.027);return Lo[e]&&n<he+41&&(t=$t(e==="gorge"?-.45:e==="marsh"?.6:0,t,Ue(he,he+41,n))),it(n,e)+t}function ws(n,e){let t=Ts(n,e<0?"gorge":"marsh"),i=Ts(n,"canal"),s=e<0?$c:jc;return $t((t+i)/2,s,Ue(43,he,n))}function tl(n,e,t="shared"){let i=ze(n,t),s=Hn(n,t),r=Math.min(e-i.left,i.right-e,s?Math.max(s.left-e,e-s.right):1/0),o=t==="shared"&&n>=0&&n<=he,a=Math.abs(e-As(n,t));o&&(a=Math.min(a,Math.abs(e-Ts(n,"gorge")),Math.abs(e-Ts(n,"marsh"))));let c=te.flow?.width,l=(1-Ue(c??(t==="marsh"?1.8:1.5),c?c+2.8:t==="marsh"?4.5:4.1,a))*Ue(4,17,n),h=1-Ue(.7,t==="marsh"?3.9:2.1,r);if(o){let u=Math.min(Math.abs(e-ws(n,-1)),Math.abs(e-ws(n,1)));h=Math.max(h,.66*Ue(24,65,n)*(1-Ue(.3,1.55,u)))}return t==="marsh"&&(h=Math.max(h,(1-l)*(.17+.19*Math.sin(n*.033)**2))),{current:l,shallow:h}}var It,he,Xe,$e,$t,Kc,$c,jc,Lo,Tr,Qx,ev,fi,Gf,zn,tv,el,nv,qt=xt(()=>{tn();({length:It,fork:he,merge:Xe}=te),$e=(n,e,t)=>Math.max(e,Math.min(t,n));$t=(n,e,t)=>n+(e-n)*t,Kc=19.8,$c=-4.8,jc=5.1,Lo={gorge:[-Kc,$c,-30.5,-12.3],canal:[$c,jc,-5.8,6.1],marsh:[jc,Kc,12.65,31.75]};Tr=(n,e,t=0)=>Math.sin(n*2*Math.PI/e+t);Qx=[[88,152,18],[159,225,20],[311,371,17],[479,545,19],[642,713,19],[832,894,21],[1001,1073,27],[1196,1261,19]],ev=[[147,220,12],[450,510,9],[680,740,7],[918,981,11],[1138,1223,9]];fi=te.elevation,Gf=fi&&Object.fromEntries(Ct.map(n=>[n,fi[n].reduce((e,t)=>e+t[2],0)]));zn=te.features||{shared:[je(1345,1354,-4.4,5.3,1.12,"\uACB0\uC2B9 \uBC1C\uD310"),Ie(1365,1.7,6.5,"\uD569\uB958 \uAC00\uC18D\uBB38")],gorge:[_t(106,115,-3.1,6.1,1.05,"\uCCAB \uBC14\uC704\uD131"),_t(219,228,3.8,5.7,1.28,"\uC30D\uBC14\uC704 \uC5EC\uC6B8"),_t(325,335,-4,6.3,1.5,"\uCE35\uACC4 \uD3ED\uD3EC"),_t(500,510,3.1,6.2,1.36,"\uC801\uBCBD \uB099\uCC28"),_t(661,672,-3.6,6.5,1.68,"\uC774\uB07C \uD3ED\uD3EC"),_t(849,860,4.1,6.4,1.6,"\uB3CC\uAE30\uB465 \uC5EC\uC6B8"),_t(1017,1029,-4.8,6.3,1.86,"\uBD89\uC740 \uC808\uBCBD"),_t(1214,1225,2.4,6.7,1.7,"\uB9C8\uC9C0\uB9C9 \uD3ED\uD3EC")],canal:[Ie(109,0,5.8,"\uCCAB \uC218\uBB38"),Ie(174,-4.3,5.5,"\uC11C\uCABD \uAC11\uBB38"),je(216,228,4.4,5.8,1.68,"\uC801\uC0C9 \uB3C4\uC57D\uB300",3.5),Ie(313,4.9,5.7,"\uCCA0\uAD50 \uC218\uBB38"),Ie(393,-5,5.6,"\uC774\uC911 \uC218\uBB38"),je(446,459,-4.3,6,1.92,"\uBB3C\uB118\uC774 \uC810\uD504\uB300",3.6),Ie(543,4.5,5.7,"\uD38C\uD504\uC7A5 \uC218\uBB38"),je(631,645,3.5,6.2,2.12,"\uC7A5\uAC70\uB9AC \uC810\uD504\uB300",3.8),Ie(733,-3.8,6,"\uD558\uB958 \uAC11\uBB38"),je(825,836,5,5.7,1.1,"\uCDE8\uC218\uD0D1 \uB098\uBB34 \uBC1C\uD310"),je(911,925,-4.7,6.3,2.12,"\uAC11\uBB38 \uB3C4\uC57D\uB300",3.4),Ie(1013,4,5.4,"\uB3D9\uCABD \uC218\uBB38"),Ie(1104,-4.1,6,"\uCCA0\uC81C \uAC11\uBB38"),je(1180,1195,-2.4,6.1,2.2,"\uC0C1\uAC11\uD310 \uB3C4\uC57D\uB300",3.7),Ie(1270,3.3,6,"\uC6B4\uD558 \uCD9C\uAD6C")],marsh:[je(157,166,5.2,4.8,.82,"\uBC84\uB4DC\uB098\uBB34 \uBC1C\uD310"),je(358,367,-6.8,4.8,.98,"\uD1B5\uB098\uBB34 \uBC1C\uD310"),je(563,572,5.4,5.1,1.05,"\uB098\uB8E8 \uBC1C\uD310"),je(746,755,-5.8,5.2,1.08,"\uC595\uC740 \uB098\uB8E8"),je(958,968,5.7,5.2,1.15,"\uC218\uB828\uC12C \uBC1C\uD310"),je(1200,1212,-6.2,5.4,1.2,"\uAC08\uB300 \uB05D \uBC1C\uD310")]};tv=Object.fromEntries(Object.entries(zn).map(([n,e])=>[n,e.filter(t=>t.kind==="ledge")]));el=te.bars||{shared:[[53,63.5,-4.25,1.55],[64,71.8,4.9,1.65]],gorge:[[148,176,7.2,3.5],[266,299,-7.1,4],[392,429,6.9,4],[548,583,-7.5,4.3],[720,757,6.4,4.1],[899,936,6.1,4.8],[1081,1121,-6.6,4.8],[1239,1284,7.3,4.7]],canal:[[231,252,5.3,2.4],[462,482,-5.5,2.8],[649,670,4.8,3],[929,949,-4.9,2.8],[1198,1220,-2.7,3.1]],marsh:[[100,147,-.4,2.7],[210,271,2.7,5.4],[298,348,-3,4.8],[401,470,1.8,6],[500,556,-2.9,5.8],[608,677,3.8,6.3],[698,741,-.5,4.7],[776,815,1.3,3.9],[851,922,1.4,6],[991,1058,-2.6,6.7],[1093,1163,2.3,5.4],[1231,1281,1.9,4.8]]};nv=[[72,3.2],[120,5.3],[160,5.2],[201,-4.7],[260,-5.2],[310,4.1],[347,4.9],[365,-6.8],[406,-7.4],[470,-6.4],[514,5.9],[571,5.4],[618,-5.4],[669,-5.8],[708,6.3],[736,5.6],[756,-5.8],[804,-5.3],[889,-7.8],[954,5.7],[1037,7.3],[1084,-5.8],[1151,-6.3],[1209,-6.2],[1261,-5.7],[1320,2]]});function nl(n,e){return{offset:n.offset+n.reach*Math.sin(e*.58+n.phase),angle:.2*Math.sin(e*.83+n.phase+.4)}}function Zh(n,e,t){let i=n.end-n.s,s=$e((e-n.s)/i,0,1);return n.side*Math.min(6.8,ze(e,t).half*.5)*(1-.7*s)}function Jf(n,e,t,i){if(!$i)return null;for(let s of $i[t]){if(s.s>n)break;if(s.end===void 0||n<s.s||n>s.end)continue;let r=rv(s,n);if(s.kind==="wind")return{kind:s.kind,drift:s.dir*sv*r,strength:r};let o=s.kind==="outlet"?Zh(s,n,t):s.offset,a=Math.abs(e-it(n,t)-o),c=s.kind==="outlet"?3.5:s.width/2,l=1-Ue(c-.65,c+.45,a),h=r*l*(s.kind==="outlet"?Yh(s,i):1);if(h>.001)return{kind:s.kind,drift:0,strength:h}}return null}function Kf(n,e,t){return $i?.[e].find(i=>i.s>=n&&i.s-n<=t)}function ov(n,e,t,i,s,r,o,a,c,l,h,u,d,p){let m=0,_=1,g=[[n-o+d,i-c+d],[a+d-n,l+d-i],[e+h+p,s+h+p],[h+p-e,h+p-s],[u-t,u-r]];for(let[f,v]of g)if(f<0&&v<0||(f<0?m=Math.max(m,f/(f-v)):v<0&&(_=Math.min(_,f/(f-v))),m>_))return null;return _<=1e-6?null:m}function av(n,e,t,i,s,r,o,a){let c=e.kind==="log",l=ct(e.s,it(e.s,t)),h=He(e.s,t),u=n.elapsed-a,d=n.elapsed,p=c?nl(e,u):null,m=c?nl(e,d):null,_=c?(p.angle+m.angle)*.5:0,g=Math.cos(_),f=Math.sin(_),v=(N,B,O)=>{let H=ct(N,B).x-l.x-O,V=N-e.s;return[H*g+V*f,-H*f+V*g]},[S,x]=v(i,s,c?p.offset:0),[T,b]=v(n.s,n.u,c?m.offset:0),A=n.level>=8?.6:.49,R=n.level<=3?.91:1.48,y=c?ji:Is,M=c?.8:Zf,C=c?0:Do(e,u),D=c?0:Do(e,d),L=c?[[-Pi,Pi,-Pi,Pi]]:[[e.offset-Rs,C-Cs/2,e.offset-Rs,D-Cs/2],[C+Cs/2,e.offset+Rs,D+Cs/2,e.offset+Rs]];for(let[N,B,O,H]of L){let V=ov(S,x,r-h,T,b,o-h,N,B,O,H,y,M,A,R);if(V===null)continue;let j=S+(T-S)*V;n.contactReach!==e&&(n.reachSide=Math.abs(n.steering)>.22?Math.sign(n.steering):j<(O+H)*.5?-1:1,n.speed*=c?.62:.58,n.hitKind=e.kind,n.hitTime=.72,n.hits++);let ae=(Math.abs(n.steering)>.36?Math.sign(n.steering):n.reachSide)*Math.max(Math.abs(T-S),.6*Math.abs(b-x))*(1-V),xe=j+ae,Ne;S<N-A-.001?(xe=Math.min(xe,O-A-.002),Ne=b):S>B+A+.001?(xe=Math.max(xe,H+A+.002),Ne=b):Ne=x>0?Math.max(b,y+R+.002):Math.min(b,-y-R-.002);let qe=l.x+(c?m.offset:0)+xe*g-Ne*f;return n.s=e.s+xe*f+Ne*g,n.u=qe-ct(n.s).x,n.contactReach=e,n.lastReach=e,!0}return!1}function $f(n,e,t,i,s,r,o){if(!$i)return null;let a=Math.min(e,n.s)-4,c=Math.max(e,n.s)+4;for(let l of $i[i]){if(l.s>c)break;if(l.end!==void 0||l.s<a)continue;if(l.kind!=="charge"&&av(n,l,i,e,t,s,r,o))return l.kind;if(l.kind==="log"||e>=l.s||n.s<l.s||n.lastReach===l)continue;let h=(l.s-e)/(n.s-e),u=ct(e,t).x*(1-h)+ct(n.s,n.u).x*h-ct(l.s,it(l.s,i)).x,d=s+(r-s)*h-He(l.s,i);if(l.kind==="charge"){if(Math.abs(u-l.offset)>l.width/2+.48||d>2.8)continue;n.battery=Math.min(1,n.battery+iv),n.chargeTime=1.15,n.stoppedFor=0}else{let p=n.level>=8?.6:.49;if(d>Zf||Math.abs(u-Do(l,n.elapsed-o*(1-h)))>Cs/2-p)continue;n.jetEntry={kind:"gate",speed:n.speed},n.speed+=2.8,n.jetTime=1.25,n.pads++}return n.lastReach=l,l.kind}return null}var Pi,ji,Rs,Cs,Is,Zf,iv,$i,il,Do,sv,rv,Yh,sl=xt(()=>{tn();qt();Pi=2.85,ji=.46,Rs=9.4,Cs=3.7,Is=.62,Zf=1.45,iv=.045,$i=te.reaches,il={log:"\uBD80\uC720\uBAA9",wind:"\uD6A1\uB958",outlet:"\uD130\uBE48 \uBC29\uB958",ice:"\uBE59\uD310",charge:"\uCDA9\uC804 \uACE0\uB9AC",lock:"\uC774\uB3D9 \uAC11\uBB38"};Do=(n,e)=>n.offset+4*Math.sin(e*.69+n.phase),sv=3.15,rv=(n,e)=>Ue(n.s,n.s+7,e)*(1-Ue(n.end-7,n.end,e)),Yh=(n,e)=>Ue(.08,.84,(1+Math.sin(e*1.04+n.phase))*.5)});function Kh(n,e){return!Ct.includes(e)||n.boostCells.includes(e)?!1:(n.boostCells.push(e),n.boostLeft++,!0)}function jf(n,e,t,i){let s=Li[n.route];if(!s||n.pickedCell||n.boostCells.includes(s.branch)||Math.min(e,n.s)>s.s+Jh||Math.max(e,n.s)<s.s-Jh)return null;let r=He(n.s,s.branch)+n.altitude,o=s.y-.6,a=s.y+cv,c=r-i;if(Math.min(i,r)>a||Math.max(i,r)<o)return null;let l=0,h=1;if(Math.abs(c)>1e-8){let v=(o-i)/c,S=(a-i)/c;l=Math.max(0,Math.min(v,S)),h=Math.min(1,Math.max(v,S))}let u=ct(e,t).x,d=u-s.x,p=e-s.s,m=ct(n.s,n.u).x-u,_=n.s-e,g=m*m+_*_,f=g>1e-8?$e(-(d*m+p*_)/g,l,h):l;return Math.hypot(d+f*m,p+f*_)>Jh?null:(Kh(n,s.branch),n.pickedCell=s.branch,n.pickupTime=1.8,s.branch)}var Jh,cv,Li,Uo=xt(()=>{tn();qt();Jh=1.65,cv=2.1,Li=Object.fromEntries(Ct.map(n=>{let e=te.cellStations[n],t=As(e,n);return[n,{branch:n,s:e,u:t,...ct(e,t),y:He(e,n)}]}))});function rl(n){return Math.min(n*.7,6.4+n*.255)}function lv(n,e,t){if(!e)return n.keyHold=0,0;let i=.56,s=e*n.keyHold>0?Math.abs(n.keyHold):0,r=Math.abs(e)*t,o=$e((s+r*.5)/i,0,1);return n.keyHold=Math.sign(e)*Math.min(i,s+r),e*(.32+.54*o*o*(3-2*o))}function ep(n,e,t,i="analog",s=0){let r=rl(n.speed),o=i==="keyboard",a=o||i==="mouse",c=i==="touch";n.smoothSteering=a||c;let l=$e(e,-1,1);o?l=lv(n,l,t):n.keyHold=0;let h=l*r*(n.flying?.43:1)*(1-.36*s),u=h*n.side<0||Math.abs(h)<Math.abs(n.side),d=h===0?28:u?24:18;a&&(d=h===0?25:u?17:15),c&&(d=h===0?23:u?16:12),n.flying&&(d=8),d*=1-.73*s;let p=n.side-h,m=n.sideAcceleration+d*p,_=Math.exp(-d*t);n.side=h+(p+m*t)*_,n.sideAcceleration=(n.sideAcceleration-d*m*t)*_,n.side=$e(n.side,-n.speed*.72,n.speed*.72),n.steering=$e(n.side/Math.max(.1,r),-1,1),n.turnAngle=Math.asin($e(n.side/Math.max(.1,n.speed),-.72,.72))}function $h(n,e,t="touch"){let i=Ot(n.s,n.route);return{route:i,offset:n.u-it(n.s,i),x:e,moved:!1,stroke:0,source:t}}function ol(n,e){let t=Ot(e.s,e.route);if(t!==n.route){let a=t==="shared"?Xe:he;n.offset+=it(a,n.route)-it(a,t),n.route=t}let i=ze(e.s,t),s=i.left+pi,r=i.right-pi,o=Hn(e.s,t);return o&&e.altitude<.7&&(e.u<o.mid?r=Math.min(r,o.left-pi):s=Math.max(s,o.right+pi)),e.wallSide<0&&(r=Math.min(r,e.u)),e.wallSide>0&&(s=Math.max(s,e.u)),n.offset=$e(n.offset,s-i.center,r-i.center),i}function Qf(n,e){let t=Math.max(0,n-e),i=t<e?t*t/(2*e):t-e*.5;return n+i*.72}function jh(n,e,t,i){let s=t-n.x;if(!n.moved){let a=n.source==="mouse"?2:4;if(Math.abs(s)<=a)return;s-=Math.sign(s)*a,n.moved=!0}let r=ol(n,e);if(n.source==="touch"&&s){let a=n.stroke*s>0?Math.abs(n.stroke):0,c=a+Math.abs(s),l=$e(i*.075,24,56);n.stroke=Math.sign(s)*c,s=Math.sign(s)*(Qf(c,l)-Qf(a,l))}let o=n.source==="mouse"?$e(i*.7,250,710):$e(i*.95,300,920);n.offset+=s*$e(r.half*2,34,48)/o,n.x=t,ol(n,e)}function tp(n,e){let i=(ol(n,e).center+n.offset-e.u)*Math.cos(jt(e.s,n.route)),s=Math.max(.1,rl(e.speed)*(e.flying?.43:1));if(n.source==="touch"){let r=i*5.2-e.side*.55;return .85*Math.tanh(r/(.85*s))}return $e((i*8.6-e.side*.46)/s,-1,1)}function np(n,e){if(!n.moved)return null;let t=ol(n,e),i=e.u-t.center,s=n.source==="touch"?Math.min(.6,rl(e.speed)*.047):Math.min(1,rl(e.speed)*.075),r=$e(n.offset-i,-s,s);return Math.abs(r)<.05?null:{route:n.route,offset:i+r,until:e.elapsed+.28,source:n.source}}var pi,al=xt(()=>{qt();pi=.48});function uv(n,e){let{s:t,wood:i=!1,tip:s,panel:r}=e,o=e.deck??(i?4.8:6.1),a=ze(t,n),c=ct(t,it(t,n)),l=new U(c.x,He(t,n),c.z),h=[],u=[],d=-a.half-1.65,p=a.half+1.65,m=e.side==="right"?s:d,_=e.side==="left"?s:p,g=(m+_)/2,f=_-m;function v(L,N,B,O,H,V,j,ie=0,ae=!0){let xe=Math.cos(ie),Ne=Math.sin(ie),qe={center:new U(L+l.x,N+l.y,B+l.z),size:[O,H,V],color:j,angle:ie};ae&&(qe.axes=ie?[new U(xe,Ne,0),new U(-Ne,xe,0),tu]:[ip,sp,tu],qe.half=[O/2,H/2,V/2],u.push(qe)),h.push(qe)}function S(L,N,B,O,H,V,j,ie){v((L+B)/2,(N+O)/2,H,Math.hypot(B-L,O-N),V,j,ie,Math.atan2(O-N,B-L))}function x(L,N,B,O){v((L+N)/2,B,O,N-L,.38,.08,"#edb94e",0,!1);let H=Math.max(1,Math.floor((N-L)/1.25));for(let V=0;V<H;V++){let j=L+(V+.5)*(N-L)/H;v(j,B,O+.045,.25,.34,.035,"#383d36",-.44,!1)}}if(e.vault){let L=[[-a.half-4,.6],[-a.half-1.4,10.4],[-a.half*.58,16.8],[-1.1,19],[a.half*.53,17.4],[a.half+1.6,10.6],[a.half+4.2,.5]],N=["#625770","#756981","#6f637c","#827188","#6c637a","#675c71"],B=23;for(let O=0;O<L.length-1;O++){let[H,V]=L[O],[j,ie]=L[O+1];S(H,V,j,ie,0,2.8,B,N[O]);let ae=B*.5+.05;(O===1||O===4)&&S(H*.35+j*.65,V*.35+ie*.65-.38,j,ie-.34,ae,.17,.13,"#a7b6b6")}return{s:t,route:n,start:t-B/2-2,end:t+B/2+2,parts:h,solids:u,name:"\uB3D9\uAD74 \uCC9C\uC7A5",cue:"\uB3D9\uAD74 \uCC9C\uC7A5"}}let T=i?"#8b6e48":"#a95e48",b=o+(e.side?.78:i?1.03:2.7),A=e.side==="right"?[p-.5]:e.side==="left"?[d+.5]:[d+.57,p-.57];for(let L of A)for(let N of[-1.32,1.32])v(L,(o-.38)/2,N,.42,o+.58,.46,i?"#775e46":"#829288");if(v(g,o,0,f,.32,3.18,i?"#af8c5d":"#b4a68e"),i)for(let L=m+.24;L<_;L+=.92)v(L,o+.164,0,.045,.014,3.12,"#846e50",0,!1);for(let L of[-1.52,1.52]){v(g,o-.12,L,f,.38,.34,T),v(g,b,L,f,.17,.19,T);let N=Math.max(3,Math.round(f/(i?2.8:4.8)));for(let B=0;B<=N;B++){let O=m+B*f/N;v(O,(o+b)/2,L,.14,b-o,.16,T),!i&&B<N&&S(O,B%2?o:b,O+f/N,B%2?b:o,L,.18,.18,T)}}if(r){let L=r.side==="right"?r.tip:m,N=r.side==="right"?_:r.tip,B=r.clearance,O=o-.14,H=(L+N)/2;v(H,(B+O)/2,0,N-L,O-B,.88,"#496668");for(let V=L+.45;V<N;V+=2.1)v(V,(B+O)/2,.46,.13,O-B,.12,"#71908b");v(H,B+.24,0,N-L,.48,1.24,"#686746"),x(L,N,B+.24,.66)}else e.marked&&x(m,_,o-.12,1.72);let R=Math.min(...u.map(L=>-L.center.z-L.half[2]))-2,y=Math.max(...u.map(L=>-L.center.z+L.half[2]))+2,M=r?.side??e.side,C=e.name??(i?"\uB098\uBB34\uB2E4\uB9AC":"\uCCA0\uAD50"),D=M?(M==="right"?"\uC624\uB978\uCABD ":"\uC67C\uCABD ")+(r?"\uB0AE\uC740 \uC218\uBB38\uD310":"\uB3CC\uCD9C \uC794\uAD50"):C;return{s:t,route:n,start:R,end:y,parts:h,solids:u,marked:!!e.marked,name:C,cue:D,side:M,approach:e.approach}}function vv(n,e,t){let i=0,s=t;function r(o){if(o.lengthSq()<1e-10)return!0;let a=0;for(let d=0;d<3;d++)a+=n[d+3]*Math.abs(o.dot(Rr[d]))+e.half[d]*Math.abs(o.dot(e.axes[d]));let c=o.dot(rp),l=o.dot(nu);if(Math.abs(l)<1e-9)return Math.abs(c)<=a;let h=(-a-c)/l,u=(a-c)/l;return i=Math.max(i,Math.min(h,u)),s=Math.min(s,Math.max(h,u)),i<=s}for(let o of e.axes)if(!r(o))return null;for(let o of Rr)if(!r(o))return null;for(let o of Rr)for(let a of e.axes)if(!r(xv.crossVectors(o,a)))return null;return i}function op(n,e,t,i,s){if(n.altitude<=0&&i<=0)return null;let r=Ot(n.s,n.route),o=Cr[r],a=null;for(let c of o){if(n.s<c.start||e>c.end)continue;let l=ct(e,t),h=ct(n.s,n.u);Qh.set(l.x,He(e,Ot(e,n.route))+i+.072,l.z),nu.set(h.x,He(n.s,r)+n.altitude+.072,h.z).sub(Qh);let u=(n.s+e)/2,d=(n.pitch+s)/2+n.speed*.0023,p=jt(u,r)+n.turnAngle*(n.smoothSteering?.82:1);Fo.setFromEuler(_v.set(d,-p,n.steering*(n.smoothSteering?.73:1)*.15,"YXZ")),Rr[0].copy(ip).applyQuaternion(Fo),Rr[1].copy(sp).applyQuaternion(Fo),Rr[2].copy(tu).applyQuaternion(Fo);for(let m of gv[n.level-1]){eu.set(m[0],m[1],m[2]).applyQuaternion(Fo).add(Qh);for(let _ of c.solids){if(Math.abs(eu.z-_.center.z)>Math.abs(nu.z)+_.half[2]+2)continue;rp.copy(eu).sub(_.center);let g=vv(m,_,a?a.t:1);g!==null&&(!a||g<a.t)&&(a={bridge:c,t:g})}}}return a}function ap(n){let e=Ot(n.s,n.route),t=Math.max(64,Math.min(115,n.speed*3.6));return Cr[e].find(i=>(i.marked||n.flying)&&i.s>n.s&&i.s-n.s<=t)}var hv,ip,sp,tu,Cr,dv,fv,pv,mv,gv,Fo,_v,xv,Rr,Qh,nu,eu,rp,cl=xt(()=>{tn();di();qt();hv=te.bridges?{...te.bridges,shared:[...te.bridges.shared,{s:It+5,wood:te.id!=="harbor"}]}:{gorge:[],canal:[{s:156},{s:259,deck:10.85,panel:{side:"right",tip:3.95,clearance:6.85},approach:216,marked:!0,name:"\uC815\uBE44\uAD50"},{s:386},{s:596},{s:845},{s:1084},{s:1255,deck:8.65,marked:!0}],marsh:[{s:187,wood:!0,deck:3.86,side:"right",tip:4.15,approach:157,marked:!0,name:"\uB098\uBB34 \uC794\uAD50"}],shared:[{s:It+5,wood:!0}]},ip=new U(1,0,0),sp=new U(0,1,0),tu=new U(0,0,1);Cr=Object.fromEntries(Object.entries(hv).map(([n,e])=>[n,e.map(t=>uv(n,t)).sort((t,i)=>t.s-i.s)])),dv=[[0,.19,-.56,.41,.13,.41],[0,.16,.36,.44,.14,.49],[0,.355,.02,.23,.15,.26]],fv=[[0,.3,-1.11,.25,.12,.27],[0,.26,-.4,.52,.15,.55],[0,.22,.61,.54,.14,.59]],pv=[0,.535,.08,.3,.145,.37],mv=[[-.43,.39,1.25,.14,.18,.21],[.43,.39,1.25,.14,.18,.21]],gv=Array.from({length:10},(n,e)=>{let t=e+1,i=t<=3?dv:[...fv,...t>=5?[pv]:[],...t>=9?mv:[]],s=t===10?[1.09,1.06,1.14]:[1,1,1];return i.map(r=>r.map((o,a)=>o*s[a%3]))}),Fo=new Tn,_v=new mn,xv=new U,Rr=[new U,new U,new U],Qh=new U,nu=new U,eu=new U,rp=new U});function yv(n){let e=[];function t(o,a,c,l,h,u){e.push({kind:o,s:a,u:c,x:hn(a)+c,base:He(a,n),radius:l,height:h,...u})}for(let o of zn[n]){if(o.kind==="ledge")continue;let a=o.kind==="gate",c=a?o.start:o.end;for(let l of[-1,1]){let h=it(c,n)+o.offset+l*(o.width/2+(a?Di.offset:.12));a?t("gate",c,h,Di.radius,2.635,{side:l,feature:o}):t("flag",c,h,.041,o.rise+1.6,{side:l,feature:o})}}let i=te.markerStep??(n==="canal"?29:36),s=n==="shared"?Xe:he+18,r=n==="shared"?It+192:Xe;for(let o=Math.ceil(s/i)*i;o<r;o+=i){let a=o/i%2?1:-1,c=n==="marsh",l=c?As(o,n)+a*3.2:it(o,n)+a*(n==="gorge"?5.8:6.8),h=Hn(o,n),u=te.lanes?2.6:.48;h&&l>h.left-u&&l<h.right+u||(c?t("stake",o,l,.064,1.58):t("buoy",o,l,.32*.83,.72*.83))}for(let o of hl[n]||[])for(let a of[o.s+.3,o.s+o.length-1])for(let c of[-1,1])t("pile",a,o.u+c*(o.width*.5-.13),.115,1.25);if(n==="shared")for(let o of[-1.23,1.23])t("launch",.3,o,.12,.84);if(n==="canal"&&(!te.lanes||te.id==="harbor"))for(let o=Math.ceil((he+23)/12)*12;o<Xe;o+=12){let a=ze(o,n);t("quay",o,a.left-.22,.12,1.5),t("quay",o,a.right+.22,.12,1.5)}return e.sort((o,a)=>o.s-a.s)}var Di,ll,hl,ul,dl=xt(()=>{tn();qt();Di={offset:.33,radius:.47,top:.625},ll=.34,hl={shared:[{s:-5.5,u:7,length:10.5,width:3.5}],marsh:(te.docks??[172,380,584,768,980,1220]).map(n=>({s:n,u:ze(n,"marsh").right-1.05,length:7.5,width:1.94}))};ul=Object.fromEntries(Object.keys(zn).map(n=>[n,yv(n)]))});function ti(n){return()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296)}var iu=xt(()=>{});function Tv(n){let e=[];for(let t of zn[n]){if(t.kind!=="ledge")continue;let i=ti(te.seed+t.start*9319);for(let s of[-1,1])for(let r=-su;r<=6;r++){let o=t.start+(r<0?r*Mv:(t.end-t.start)*r/6),a=r<0?-r/su:0,c=jt(o,n),l=Math.cos(c),h=Math.sin(c),u=.76+.23*i()+a*.12,d=1.3+.19*i(),p=ze(o,n),m=p.center+t.offset+s*(t.width/2+u+.2+i()*.16+a*.95),_=$e(m,p.left+u*.45,p.right-u*.45),g=hn(o)+_,f=He(o,n),v=.85+i()*.31+ei(t,o)*.48+(r===-su?.43:0),S=[[-.75,.87],[.1,1],[v*.66,.87],[v,.5+i()*.1]],x=S.map(([b,A])=>Sv.map(([R,y])=>{let M=R*u*A,C=y*d*A;return[g+M*l+C*h,f+b,-o+M*h-C*l]})),T=bv.map(([b,A])=>{let R=b/u*l+A/d*h,y=-b/u*h+A/d*l,M=1/Math.hypot(R,y);return{nx:R*M,ns:y*M,d:Ev*M}});e.push({kind:"rock",s:o,u:_,x:g,base:f,rx:u,rs:d,cos:l,sin:h,height:v,count:Ir,rings:S,vertices:x,planes:T,feature:t,side:s,color:cp[Math.floor(i()*cp.length)]})}}return e.sort((t,i)=>t.s-i.s)}var su,Mv,ru,cp,lp,Ir,hp,Sv,bv,Ev,fl,ou=xt(()=>{tn();qt();iu();su=5,Mv=2.4,ru=te.id==="basalt",cp=ru?["#52616c","#677580","#5e6b74"]:["#998a77","#ae9b81","#9f9180"],lp=ru?"#acb8b9":"#c7b89d",Ir=ru?6:7,hp=Array.from({length:Ir},(n,e)=>2*Math.PI*e/Ir-Math.PI/2),Sv=hp.map(n=>[Math.cos(n),Math.sin(n)]),bv=hp.map(n=>[Math.cos(n+Math.PI/Ir),Math.sin(n+Math.PI/Ir)]),Ev=Math.cos(Math.PI/Ir);fl=Object.fromEntries(Object.keys(zn).map(n=>[n,Tv(n)]))});function up(n,e,t,i,s,r){let{x:o,s:a,dx:c,ds:l,cos:h,sin:u,y0:d,y1:p}=i,m=s+e,_=r+e,g=o-n.x,f=a-n.s,v=(g*h-f*u)/m,S=(g*u+f*h)/_,x=(c*h-l*u)/m,T=(c*u+l*h)/_,b=x*x+T*T;if(b<1e-12||Math.min(d,p)>t)return null;let A=v*x+S*T,R=v*v+S*S-1,y=A*A-b*R;if(y<0)return null;let M=Math.sqrt(y),C=Math.max(0,(-A-M)/b),D=Math.min(1,(-A+M)/b);if(d>t&&(C=Math.max(C,(t-d)/(p-d))),p>t&&(D=Math.min(D,(t-d)/(p-d))),C>D||R>=-1e-6&&C===0&&A>=0)return null;let L=v+x*C,N=S+T*C,B=Math.hypot(L,N);B<1e-8?(L=0,N=-1):(L/=B,N/=B);let O=L/m*h+N/_*u,H=-L/m*u+N/_*h,V=Math.hypot(O,H);return{obstacle:n,t:C,nx:O/V,ns:H/V,x:n.x+L*m*h+N*_*u,s:n.s-L*m*u+N*_*h}}function fp(n,e,t,i,s){return Math.hypot(n.halfWidth*(i*e-s*t),n.halfLength*(i*t+s*e))}function Cv(n,e,t){let{x:i,s,dx:r,ds:o,y0:a,y1:c,cos:l,sin:h}=e;if(Math.min(a,c)>n.base+n.height)return null;let u=c-a,d=i-n.x,p=s-n.s,m=a-n.base,_=n.rings,g=null;for(let f=0;f<_.length-1;f++){let[v,S]=_[f],[x,T]=_[f+1];if(Math.max(m,m+u)<v||Math.min(m,m+u)>x)continue;let b=0,A=1;if(Math.abs(u)>1e-9){let N=(v-m)/u,B=(x-m)/u;b=Math.max(0,Math.min(N,B)),A=Math.min(1,Math.max(N,B))}let R=(T-S)/(x-v),y=-1/0,M=0,C=0,D=null;for(let N of n.planes){let{nx:B,ns:O,d:H}=N,V=fp(t,l,h,B,O),j=B*d+O*p-H*(S+R*(m-v))-V,ie=B*r+O*o-H*R*u,ae=j+ie*b;if(ae>y&&(y=ae,M=B,C=O),Math.abs(ie)<1e-9){if(j>0){A=-1;break}}else if(ie<0){let xe=-j/ie;xe>b&&(b=xe,D=N)}else A=Math.min(A,-j/ie);if(b>A)break}if(b>A||g&&g.t<=b||(D&&(M=D.nx,C=D.ns,y=0),b===0&&y>=-2e-5&&r*M+o*C>=0))continue;let L=Math.max(0,-y);g={t:b,nx:M,ns:C,x:i+r*b+M*L,s:s+o*b+C*L}}return g}function au(n,e){let t=0,i=n.length;for(;t<i;){let s=t+i>>>1;n[s].s<e?t=s+1:i=s}return t}function pp(n,e,t,i,s){let{x:r,s:o,dx:a,ds:c}=n,l=o+c,h=Math.min(r,r+a),u=Math.max(r,r+a),d=null;for(let p=au(t,Math.min(o,l)-pl);p<t.length&&t[p].s<=Math.max(o,l)+pl;p++){let m=t[p];if(m.x<h-pl||m.x>u+pl)continue;let _=m.kind==="gate",g=up(m,_?.25:m.radius,m.base+m.height,n,e.halfWidth,e.halfLength);if(_){let f=up(m,m.radius,m.base+Di.top,n,e.halfWidth,e.halfLength);f&&(!g||f.t<=g.t)&&(g=f)}g&&(!d||g.t<d.t)&&(d=g)}for(let p=au(i,Math.min(o,l)-Pr);p<i.length&&i[p].s<=Math.max(o,l)+Pr;p++){let m=i[p];if(s&&m.feature===s.feature&&m.side===s.side||m.x<h-Pr||m.x>u+Pr)continue;let _=Cv(m,n,e);_&&(!d||_.t<d.t)&&(d={..._,obstacle:m})}return d}function Iv(n,e,t,i,s,r){let o=t-n.base,a=n.rings;if(o<a[0][0]||o>n.height)return null;let c=1;for(;o>a[c][0];)c++;let[l,h]=a[c-1],[u,d]=a[c],p=h+(d-h)*(o-l)/(u-l),m=-1/0,_=1/0;for(let{nx:g,ns:f,d:v}of n.planes){let S=fp(i,s.cos,s.sin,g,f),x=v*p+S-f*(e-n.s);if(Math.abs(g)<1e-9){if(x<0)return null}else g>0?_=Math.min(_,x/g):m=Math.max(m,x/g);if(m>_)return null}return n.x+(r<0?m:_)}function Pv(n,e,t,i,s,r){let o=n.obstacle,a=1-n.t,c=e.ds*a*.8,l=e.dx*a,h=e.y0+(e.y1-e.y0)*n.t,u=Math.max(1,Math.ceil(Math.hypot(c,l)/.3)),d=n.x+n.nx*1e-4,p=n.s+n.ns*1e-4,m=h;for(let _=1;_<=u;_++){let g=n.s+c*_/u,f=h+(e.y1-h)*_/u,v=d+l/u;for(let T=au(s,g-Pr);T<s.length&&s[T].s<=g+Pr;T++){let b=s[T];if(b.feature!==o.feature||b.side!==o.side)continue;let A=Iv(b,g,f,t,e,r);A!==null&&(v=r>0?Math.max(v,A+2e-4):Math.min(v,A-2e-4))}let S={x:d,s:p,dx:v-d,ds:g-p,y0:m,y1:f,cos:e.cos,sin:e.sin},x=pp(S,t,i,s,o);if(x)return{x:x.x+x.nx*1e-4,s:x.s+x.ns*1e-4};d=v,p=g,m=f}return{x:d,s:p}}function mp(n,e,t,i,s,r,o){let a=hn(e)+t,c=Math.cos(o),l=Math.sin(o),h={x:a,s:e,dx:hn(n.s)+n.u-a,ds:n.s-e,cos:c,sin:l,y0:s,y1:r},u=dp(n.level),d=ul[i],p=fl[i],m=null;for(let _=0;_<4;_++){let g=pp(h,u,d,p);if(!g)break;let{nx:f,ns:v,t:S,obstacle:x}=g,T=h.dx*f+h.ds*v,b=-h.dx*v+h.ds*f;if(x.kind==="rock"&&v<-.65&&T<0){let A=(h.x-x.x)*x.cos-(h.s-x.s)*x.sin;b=(Math.abs(n.steering)>.06?Math.sign(n.steering):Math.abs(A)>.02?Math.sign(A):-x.side)*Math.max(Math.abs(b),-T*.45)}else T<0&&Math.abs(b)<-T*.24&&(b=(Math.abs(b)>1e-5?Math.sign(b):Math.sign(n.side)||-Math.sign(x.u-it(x.s,i))||1)*-T*.24);if(!m){let A=$e(-T/Math.max(1e-5,Math.hypot(h.dx,h.ds)),0,1);m={obstacle:x,normal:f*c-v*l,retain:.83-A*.23}}if(x.kind==="rock"&&h.ds>0){let A=(g.x-x.x)*x.cos-(g.s-x.s)*x.sin,R=f*x.cos-v*x.sin;if(Math.abs(A)>.65*(x.rx+u.halfWidth)&&Math.sign(A)*R>.24){let y=Pv(g,h,u,d,p,Math.sign(A));h.x=y.x,h.s=y.s,h.dx=0,h.ds=0;break}}if(h.x=g.x+f*1e-4,h.s=g.s+v*1e-4,h.y0+=(h.y1-h.y0)*S,h.dx=-v*b*(1-S),h.ds=f*b*(1-S),x.kind==="rock"){let A=Math.max(0,-T)*.18*(1-S);h.dx+=f*A,h.ds+=v*A}_===3&&(h.dx=0,h.ds=0)}return m&&(n.s=h.s+h.ds,n.u=h.x+h.dx-hn(n.s)),m}function gp(n,e,t,i,s,r){if(n.ramp||n.s<=e)return 0;for(let o of zn[i]){if(o.kind!=="ramp"||n.s<o.start||e>=o.end)continue;let a=n.s-e,c=Math.max(e,o.start),l=Math.min(n.s,o.end),h=hn(e)+t,u=hn(n.s)+n.u,d=y=>hn(y)+it(y,i)+o.offset,p=y=>(y-e)/a,m=y=>h+(u-h)*p(y)-d(y),_=Math.sign(m(c))||Math.sign(m(l))||1,g=dp(n.level),f=jt(l,i),v=jt(e,i)+n.turnAngle-f,S=Math.hypot(g.halfWidth*Math.cos(v),g.halfLength*Math.sin(v)),x=o.width/2+S/Math.cos(f),T=_*m(c)-x,b=_*m(l)-x;if(b>=0)continue;let A=T>0?c+(l-c)*T/(T-b):c,R=y=>ei(o,y)>ll&&He(y,i)+ei(o,y)+.044>s+(r-s)*p(y);if(!(!R(A)&&!R(l))&&!(n.flying&&T<0&&!R(c)))return n.u-=_*b,_}return 0}var wv,Av,Rv,dp,pl,Pr,_p=xt(()=>{qt();dl();ou();al();wv={halfWidth:pi,halfLength:.92},Av={halfWidth:.54,halfLength:1.42},Rv={halfWidth:.59,halfLength:1.6},dp=n=>n<=3?wv:n===10?Rv:Av;pl=2.3,Pr=3.5});function Ps(n){return n.flying?Math.hypot(n.speed,n.vy):n.speed}function Dr(n=1,e=1,t=[]){let i=qn(e),s=$e(n,0,1),r=kr(t);return{course:te.id,s:0,u:0,route:"",level:i.level,power:s,speed:i.cruise*(.78+.81*s),steering:0,side:0,sideAcceleration:0,turnAngle:0,keyHold:0,smoothSteering:!1,elapsed:0,battery:1,boostCells:r,boostLeft:r.length,pickedCell:null,pickupTime:0,boostTime:0,stoppedFor:0,chargeTime:0,waterEffect:null,lastReach:null,contactReach:null,reachSide:0,jetTime:0,jetEntry:null,lastFeature:null,current:0,shallow:0,downhill:0,coastAccelerating:!1,coastFrom:null,bestCoast:null,peak:0,ramp:null,flying:!1,altitude:0,vy:0,pitch:0,flightStart:0,landTime:0,jumps:0,longestJump:0,pads:0,hits:0,hitKind:"bank",hitTime:0,touchTime:0,wallSide:0,split:null,crash:null,ended:!1,cleared:!1}}function hu(n){return!n.ended&&n.boostCells.length>0&&n.boostLeft>0&&n.boostTime<=0&&!n.flying}function vp(n){if(!hu(n))return!1;let e=qn(n.level);return n.boostLeft--,n.boostTime=1.3+.37*e.boostScale,n.stoppedFor=0,n.speed+=4.7*e.boostScale,!0}function yp(n,e,t,i){return n.kind==="ledge"?Ar(Math.min(e,n.end),t,i):ei(n,e)}function xp(n,e,t){let i=He(n.s,e);return n.flying?Math.max(i,t):i+(n.ramp?yp(n.ramp,n.s,n.u,e):0)}function Lv(n,e,t,i,s){if(n.flying){let l=n.vy,h=n.altitude,u=He(n.s,e);if(n.vy-=Lr*t,n.altitude=i-u,n.pitch=$e(Math.atan2(n.vy,Math.max(2,n.speed))*.68,-.31,.4),n.altitude<=0){let d=l-(u-s+h)/t,p=(d+Math.sqrt(d*d+2*Lr*h))/Lr,m=l-Lr*$e(p,0,t),_=Math.hypot(n.speed,m);return n.altitude=0,n.vy=0,n.pitch=0,n.flying=!1,n.landTime=.48,n.longestJump=Math.max(n.longestJump,n.s-n.flightStart),n.shallow>.6&&(n.speed*=.87),_}return null}if(!n.ramp)return null;let r=n.ramp,o=Mp(r,n.s,n.u,e),a=1.38*r.rise/(r.end-r.start);if(n.altitude=yp(r,n.s,n.u,e),n.pitch=Math.atan(a),n.s<r.end&&o)return null;let c=o?a+(r.kind==="ledge"?.095:.068)-n.downhill*.84:0;return n.speed/=Math.hypot(1,c),n.vy=n.speed*c,n.flying=!0,n.flightStart=n.s,n.jumps++,n.ramp=null,null}function Mp(n,e,t,i){return Math.abs(t-it(e,i)-n.offset)<=n.width/2+pi}function Dv(n,e,t,i,s){if(n.start<e||n.start>i.s||i.s<=e)return!1;let r=(n.start-e)/(i.s-e),o=t+(i.u-t)*r-it(n.start,s)-n.offset,a=n.kind==="gate"?n.width/2+Di.offset-Di.radius:n.width/2+pi;return Math.abs(o)<=a}function Uv(n,e,t,i){if(!(n.flying||n.ramp))for(let s of Qc(n.s,i)){if(s===n.lastFeature)continue;let r=Dv(s,e,t,n,i);if(!r&&s.kind==="ramp"&&n.s>=s.start&&n.s<s.end&&ei(s,n.s)<=ll&&(r=Mp(s,n.s,n.u,i)),!!r){if(n.lastFeature=s,s.kind!=="gate"&&(n.ramp=s),s.kind==="gate"||s.kind==="ramp"){let o=s.kind==="gate"?1.62:s.boosted?1.5:.8;n.jetEntry={kind:s.kind,speed:n.speed,duration:o},n.speed+=s.kind==="gate"?3.65:s.kick,n.jetTime=o,n.pads++}return}}}function cu(n,e,t,i,s){n.side*t<0&&(n.side*=Math.exp(-16*s),n.sideAcceleration*t<0&&(n.sideAcceleration=0)),n.touchTime||(n.speed*=i,n.hitKind=e,n.hitTime=.72,n.hits++),n.touchTime=.35}function Sp(n,e,t=Ls,i="analog"){if(n.ended)return;let s=n.s,r=n.u,o=Ot(s,n.route),a=qn(n.level),c=n.altitude,l=n.pitch,h=n.flying,u=n.vy;n.elapsed+=t;for(let ae of["hitTime","touchTime","boostTime","jetTime","landTime","pickupTime","chargeTime"])n[ae]=Math.max(0,n[ae]-t);let d=tl(s,n.u,o);n.current=d.current,n.shallow=d.shallow;let p=n.flying||n.ramp?null:Jf(s,n.u,o,n.elapsed);n.waterEffect=p?.kind??null;let m=p?.kind==="ice"?p.strength:0,_=p?.kind==="outlet"?p.strength:0;ep(n,e,t,i,m);let g=jt(s,o),f=$e(g+n.turnAngle,-1.35,1.35),v=wr(s,o)*Math.cos(f),S=Math.hypot(1,v),x=9.81*v/S;n.downhill=v;let T=n.speed,b=n.battery<=0;if(n.coastAccelerating=!1,n.flying)n.battery=Math.max(0,n.battery-.47*t/a.endurance);else{let ae=n.ramp?0:d.shallow,xe=d.current,Ne=n.boostTime>0,qe=n.jetTime>0,Ye=n.ramp?.kind==="ramp",J=qe?Ye&&!n.ramp.boosted?n.ramp.kick:6.4:0,Q=te.flow,_e=a.cruise+(Q?.speed??(o==="marsh"?4.75:o==="gorge"?3.1:1.65))*xe-4*ae-.42*Math.abs(n.steering)+J+4.2*m+6.2*_,Le=(o==="canal"?2.75:1.8)+.006*n.speed**2+1.4*ae+.23*Math.abs(n.steering)-(.24+(Q?.assist??0))*xe,Te=Math.max(0,n.speed-6),st=a.hullDrag*(.24+.0175*Te*Te),Tt;if(b){let P=(Le+st)*(1-.66*m);Tt=-P*t,n.coastAccelerating=!Ne&&!qe&&!Ye&&x-P>.12}else{Tt=(_e-n.speed)*(1-Math.exp(-(qe?1.7:.82)*t));let P=Q?.saving??(o==="marsh"?.3:o==="gorge"?.18:.09),dt=(Q?.draw??1)*(1+.12*Math.abs(n.steering)+.45*ae-P*xe)*(qe?.9:1);n.battery=Math.max(0,n.battery-dt*t/a.endurance)}if(Ne){let P=(_e+6.35*a.boostScale-n.speed)*(1-Math.exp(-1.7*t))-st*t;Tt=Math.max(Tt,P)}if(qe){let P=n.jetEntry.kind==="ramp"?n.jetEntry.duration:1.5,dt=Math.min(1,n.jetTime/P),Oe=$e(10.5-.16*n.speed,3,8.6)*dt*dt;Tt=Math.max(Tt,(Oe-Le)*t)}Ye&&(Tt=Math.max(Tt,-x*t)),n.speed=Math.max(0,n.speed+Tt+(x+4.4*_)*t)}n.coastAccelerating?(n.coastFrom??(n.coastFrom=T),(!n.bestCoast||n.speed-n.coastFrom>n.bestCoast.to-n.bestCoast.from)&&(n.bestCoast={from:n.coastFrom,to:n.speed})):n.coastFrom=null;let A=n.speed*t/(n.flying?1:S);n.s+=A*Math.cos(f),n.u+=A*Math.sin(f)-(hn(n.s)-hn(s))+(p?.drift??0)*t,!n.route&&s<he&&n.s>=he&&(n.route=Xf(n.u));let R=Ot(n.s,n.route),y=He(s,o)+c,M=y+n.vy*t-.5*Lr*t*t,C=xp(n,R,M),D=.1,L=mp(n,s,r,R,y+D,C+D,f);if(L){L.obstacle.kind==="gate"&&(n.lastFeature=L.obstacle.feature);let ae=L.obstacle.kind;cu(n,ae==="rock"||ae==="buoy"?ae:"post",L.normal,L.retain,t),C=xp(n,R,M)}Uv(n,s,r,R),n.wallSide=gp(n,s,r,R,y+D,C+D),n.wallSide&&cu(n,"ramp",n.wallSide,.69,t);let N=Lv(n,R,t,M,y),B=op(n,s,r,c,l);if(B&&s+(n.s-s)*B.t<It){let ae=He(n.s,R)+n.altitude,xe=n.speed,Ne=h?Math.hypot(xe,u-Lr*t*B.t):Ps(n);n.s=s+(n.s-s)*B.t,n.u=r+(n.u-r)*B.t,n.altitude=Math.max(0,y+(ae-y)*B.t-He(n.s,Ot(n.s,n.route))),n.pitch=l+(n.pitch-l)*B.t,n.elapsed-=t*(1-B.t),n.peak=Math.max(n.peak,Ne),n.crash={name:B.bridge.name,station:B.bridge.s,speed:Ne,forwardSpeed:xe},n.ended=!0,n.speed=0,n.vy=0,n.flying=!1,n.ramp=null,n.boostTime=0,n.jetTime=0;return}$f(n,s,r,R,y,He(n.s,R)+n.altitude,t);let O=ze(n.s,R),H=Hn(n.s,R),V=pi,j=$e(n.u,O.left+V,O.right-V);H&&n.altitude<.7&&j>H.left-V&&j<H.right+V&&(j=n.u<H.mid?H.left-V:H.right+V),Math.abs(j-n.u)>1e-4&&(cu(n,"bank",Math.sign(j-n.u),.69,t),n.u=j);let ie=jf(n,s,r,y);return n.peak=Math.max(n.peak,N??0,Ps(n)),s<Xe&&n.s>=Xe&&(n.split={speed:Ps(n),battery:n.battery,time:n.elapsed}),n.s>=It?(n.s=It,n.cleared=!0,n.ended=!0):b&&n.speed<.08&&n.speed<=T&&!n.flying&&!n.jetTime&&!n.boostTime?(n.speed=0,n.stoppedFor+=t,(!n.boostLeft||n.stoppedFor>=lu-1e-9)&&(n.ended=!0)):n.stoppedFor=0,ie}var Ls,lu,Lr,uu=xt(()=>{tn();sl();Uo();$o();al();cl();dl();_p();qt();qt();Ls=1/60,lu=2,Lr=9.8});function bp(n){if(te.id!=="cavern")return()=>{};let e=94,t=new Float32Array(e*3),i=new Mt,s=new an(t,3).setUsage(Ji);i.setAttribute("position",s);let r=new pr({color:"#d7eca6",size:.19,transparent:!0,opacity:.9,depthWrite:!1,fog:!0}),o=new co(i,r);return o.frustumCulled=!1,n.add(o),(a,c,l)=>{for(let h=0;h<e;h++){let d=Math.floor((c.s-10)/1.55)+h,p=d*1.55,m=Ot(p,c.route),_=ze(p,m),g=l?0:a,f=d%2===0?1:-1;if(m==="shared"&&p>=te.fork&&p<te.merge){t[h*3+1]=-1e4;continue}let v=_.center+f*_.half*(.77+.18*Math.sin(d*7.3))+.51*Math.sin(g*.68+d),S=ct(p,v);t[h*3]=S.x,t[h*3+1]=He(p,m)+.9+1.8*(1+Math.sin(d*2.5))+.4*Math.sin(g*.82+d),t[h*3+2]=S.z+.4*Math.cos(d+g*.7)}s.needsUpdate=!0}}var Ep=xt(()=>{di();tn();qt()});function Tp(n){if(!$i)return()=>{};let e=new ci(1,1,1),t=new li(1,1,1,10),i=new xo(1,.105,7,28),s=new po(1),r=new Map,o=(l,h=!0)=>{let u=l+h;return r.has(u)||r.set(u,h?new Ai({color:l,flatShading:!0}):new Zt({color:l,side:Ut})),r.get(u)},a=(l,h,u,d,p,m,_,g,f)=>{let v=new bt(h,u);return v.position.set(d,p,m),v.scale.set(_,g,f),l.add(v),v},c=[];for(let[l,h]of Object.entries($i))for(let u of h){let d=ct(u.s,it(u.s,l)),p=He(u.s,l),m=new cn;m.position.set(d.x,p,d.z),n.add(m),m.visible=!1;let _=(x,T,b)=>new U(ct(x,it(x,l)+T).x-d.x,He(x,l)+b-p,u.s-x),g=new Map,f=(x,T,b,A,R)=>{g.has(R)||g.set(R,[]),g.get(R).push(x,T,A,T,b,A)},v=(x,T,b,A,R,y=.12)=>{let M=Math.ceil((T-x)/5);for(let C=0;C<M;C++){let D=x+(T-x)*C/M,L=x+(T-x)*(C+1)/M;f(_(D,b(D),y),_(D,A(D),y),_(L,A(L),y),_(L,b(L),y),R)}},S;if(u.kind==="log"){let x=new cn;m.add(x),x.position.y=.32;let T=a(x,t,o("#82503a"),0,0,0,ji,2*Pi,ji);T.rotation.z=Math.PI/2;for(let A of[-1,1]){let R=a(x,t,o("#e9ba79"),A*(Pi+.015),0,0,ji*.99,.045,ji*.99);R.rotation.z=Math.PI/2;let y=a(x,t,o("#aa7851"),A*(Pi+.047),0,0,.21,.025,.21);y.rotation.z=Math.PI/2;let M=a(x,t,o("#e0a15d"),A*(Pi-.56),0,0,ji+.012,.18,ji+.012);M.rotation.z=Math.PI/2}let b=a(x,t,o("#916643"),-.7,.32,0,.15,.6,.16);b.rotation.z=-.54,S=A=>{let R=nl(u,A);x.position.x=R.offset,x.rotation.y=R.angle}}else if(u.kind==="lock"){let x=o("#517b82"),T=o("#9eb9ae"),b=o("#f3bd5d",!1),A=[-1,1].map(()=>{let y=new cn;m.add(y),a(y,e,x,0,.61,0,1,1.52,Is*2),a(y,e,T,0,1.36,.02,1,.18,Is*2+.1);for(let M of[-.34,0,.34])a(y,e,T,M,.67,Is+.028,.034,1.08,.08);return y}),R=[-1,1].map(()=>a(m,e,b,0,.72,.04,.25,1.42,Is*2+.15));for(let y of[-1,1]){let M=u.offset+y*(Rs-.35);for(let C of[.28,.76,1.18])a(m,e,o("#e3c995"),M,C,Is+.11,.55,.16,.06)}S=y=>{let M=Do(u,y);for(let[C,D]of[-1,1].entries()){let L=u.offset+D*Rs,N=M+D*Cs/2;A[C].position.x=(L+N)/2,A[C].scale.x=Math.abs(L-N),R[C].position.x=N}}}else if(u.kind==="charge"){let x=a(m,i,o("#9cfce6",!1),u.offset,1.12,0,u.width*.5,1.98,1),T=a(m,i,o("#8b67af"),u.offset,1.12,-.16,u.width*.54,2.11,1.3);for(let b of[-1,1]){let A=a(m,s,o("#c6a0ef",!1),u.offset+b*u.width*.46,1.33,.06,.31,.57,.23);A.rotation.z=b*.29}S=b=>{x.scale.y=1.98+.05*Math.sin(b*2.8+u.s),T.rotation.z=.025*Math.sin(b*1.7)}}else if(u.kind==="ice"){let x=o("#b3e5eb",!1),T=o("#effaf3",!1),b=u.width/2,A=(R,y)=>u.offset+y*(b-.37+.28*Math.sin(R*.3+y));v(u.s,u.end,R=>A(R,-1),R=>A(R,1),x,.105);for(let R of[-1,1])v(u.s,u.end,y=>A(y,R)-.12,y=>A(y,R)+.12,T,.14);for(let R=u.s+6,y=0;R<u.end-5;R+=11,y++){let M=u.offset+(y%2?1:-1)*b*.4;f(_(R,M-1.25,.17),_(R,M-1.05,.17),_(R+2.8,M+.91,.17),_(R+2.6,M+.83,.17),T)}}else if(u.kind==="wind"){let x=o("#e2f0d6",!1);for(let b=u.s+3,A=0;b<u.end-4;b+=7,A++)for(let R of[-7,-1.5,4.4]){let y=R+1.1*Math.sin(A*2.1+R),M=u.dir*2.1;f(_(b,y,.16),_(b-.25,y+.19,.16),_(b+2.9,y+M+.23,.16),_(b+3.2,y+M,.16),x)}let T=-u.dir*(ze(u.s,l).half+1.1);a(m,t,o("#e0c3a1"),T,2.6,0,.1,5.2,.1);for(let b=0;b<4;b++){let A=a(m,t,o(b%2?"#efe6c1":"#db6c54"),T+u.dir*(.3+b*.53),4.96-b*.09,0,.35-b*.058,.58,.35-b*.058);A.rotation.z=Math.PI/2-u.dir*.14}}else if(u.kind==="outlet"){let x=o("#e2f7ed",!1).clone(),T=o("#69b9b7",!1),b=C=>Zh(u,C,l);v(u.s,u.end,C=>b(C)-2.9,C=>b(C)+2.9,T);for(let C=u.s+3;C<u.end-4;C+=5.6){let D=b(C);for(let L of[-1,1])f(_(C,D+L*2.35,.17),_(C-.32,D+L*2.31,.17),_(C+1.8,D,.17),_(C+2.12,D,.17),x)}let A=u.side*(ze(u.s,l).half-.12),R=a(m,t,o("#536c6d"),A,.98,0,.88,2.36,.88);R.rotation.z=Math.PI/2;let y=a(m,i,o("#b0c4ba"),A-u.side*1.2,.98,0,.89,.89,.89);y.rotation.y=Math.PI/2;let M=a(m,e,x,A-u.side*2.3,.57,0,2.5,.2,1.15);M.rotation.z=u.side*.25,S=C=>{let D=Yh(u,C);x.color.setRGB(.16+.64*D,.46+.48*D,.5+.39*D),M.visible=D>.12}}for(let[x,T]of g)m.add(new bt(new Mt().setFromPoints(T),x));c.push({r:u,key:l,group:m,animate:S})}return(l,h)=>{let u=l.s,d=h==="ready"?0:l.elapsed;for(let{r:p,key:m,group:_,animate:g}of c)_.visible=(p.end??p.s)>=u-16&&p.s<u+165&&(m==="shared"||!l.route||m===l.route),_.visible&&g&&g(d)}}var wp=xt(()=>{di();qt();sl()});function yn(n,e,t=0,i="shared"){let s=ct(n,e);return[s.x,t+He(n,i),s.z]}function Rp(n){return du.has(n)||du.set(n,new Pe(n)),du.get(n)}function Oo(n,e,t,i,s){let[r,o,a]=t,c=s===0?["#658f56","#7ca65c","#91b869","#a4c77a"]:["#537f5b","#6c9a63","#85ae6f","#a0bd78"];if(n.form("trunk",[r,o+i*.3,a],[i*.045,i*.65,i*.047],"#776850",[.05,e()*5,.055]),n.form("trunk",[r+i*.1,o+i*.47,a],[i*.023,i*.34,i*.023],"#827456",[.18,.4,-.69]),s===2){for(let h=0;h<3;h++)n.form("cone",[r,o+i*(.49+h*.17),a],[i*(.26-h*.045),i*(.64-h*.06),i*(.24-h*.04)],c[h],[0,h*.7,0]);return}let l=i*(s===0?.32:.245);for(let h=0;h<5;h++){let u=h*Math.PI*.5+e()*.38,d=h===4?0:l*.56,p=h===4;n.form("crown",[r+Math.cos(u)*d,o+i*(p?.77:.59+e()*.1),a+Math.sin(u)*d],[l*(p?.85:1),i*(s===0?.27:.205),l*(.85+e()*.17)],c[(h+(p?2:0))%4],[.07,u,.06])}}function fu(n,e,t,i){let[s,r,o]=t;n.form("trunk",[s,r+i*.29,o],[i*.07,i*.66,i*.062],"#867153",[.06,0,-.12]);for(let a=0;a<5;a++){let c=a*2.4+.4,l=s+Math.cos(c)*i*.2,h=o+Math.sin(c)*i*.2;n.form("trunk",[(l+s)/2,r+i*.49,(h+o)/2],[i*.026,i*.43,i*.026],"#917955",[.44*Math.sin(c),0,-.44*Math.cos(c)]),n.form("crown",[l,r+i*(.69+.07*Math.sin(c)),h],[i*.29,i*.24,i*.27],a%2?"#89b762":"#9cc574",[0,c,0]);for(let u=0;u<4;u++){let d=c+u*1.5,p=l+Math.cos(d)*i*.21,m=h+Math.sin(d)*i*.19,_=r+i*(.22+e()*.15);n.tri([p-.17,r+i*.66,m],[p+.25,r+i*.68,m+.13],[p+.09,_,m+.16],u%2?"#96b963":"#aecb70")}}}function Qt(n,e,t,i,s,r){let o=new U(t[0]-e[0],t[1]-e[1],t[2]-e[2]),a=o.length();if(a<.001)return;let c=new Tn().setFromUnitVectors(new U(0,1,0),o.normalize()),l=new mn().setFromQuaternion(c);n.form("box",e.map((h,u)=>(h+t[u])*.5),[i,a,s],r,[l.x,l.y,l.z])}function Ds(n,e,t,i=1){let[s,r,o]=t;for(let a=0;a<8;a++){let c=s+(e()-.5)*i*1.3,l=o+(e()-.5)*i*1.8,h=(.63+e()*1.14)*i,u=(e()-.4)*i*.4;n.tri([c-.085*i,r-.12,l],[c+.08*i,r-.12,l],[c+u,r+h,l-.24*i],a%2?"#8f9c55":"#81904e"),n.tri([c,r-.12,l-.08*i],[c,r-.12,l+.07*i],[c+u*.4,r+h*.86,l+.12*i],"#a8b264"),a===0&&n.form("trunk",[c+u*.68,r+h*.85,l-.11],[.045*i,.27*i,.045*i],"#6e5238",[.05,0,-u*.21])}}var No,ml,Fv,Nv,Ap,Ov,Bv,du,Vn,Qi=xt(()=>{di();qt();iu();No={box:new ci(1,1,1),stone:new gr(1,0),crown:new gr(1,1),trunk:new li(.7,1,1,7),cone:new fo(1,1,5),hex:new li(1,1,1,6),barrel:new li(1,1,1,10)};for(let n of Object.keys(No))No[n].index&&(No[n]=No[n].toNonIndexed());ml=new U,Fv=new Tn,Nv=new mn,Ap=new yt,Ov=new U,Bv=new U,du=new Map;Vn=class{constructor(){this.positions=[],this.colors=[]}tri(e,t,i,s){this.positions.push(...e,...t,...i);let{r,g:o,b:a}=Rp(s);this.colors.push(r,o,a,r,o,a,r,o,a)}quad(e,t,i,s,r){this.tri(e,t,s,r),this.tri(t,i,s,r)}form(e,t,i,s,r=[0,0,0]){let o=No[e].attributes.position;Ap.compose(Ov.fromArray(t),Fv.setFromEuler(Nv.set(...r)),Bv.fromArray(i));let a=Rp(s);for(let c=0;c<o.count;c++)ml.fromBufferAttribute(o,c).applyMatrix4(Ap),this.positions.push(ml.x,ml.y,ml.z),this.colors.push(a.r,a.g,a.b)}mesh(e=!1){let t=new Mt;t.setAttribute("position",new Ze(this.positions,3)),t.setAttribute("color",new Ze(this.colors,3)),t.computeVertexNormals();let i=e?new Zt({vertexColors:!0,side:Ut}):new Ai({vertexColors:!0,side:Ut,flatShading:!0});return new bt(t,i)}}});function kv(){let n=new Vn,e=[[-.53,-.7],[.53,-.7],[.67,-.55],[.67,.49],[.51,.67],[-.51,.67],[-.67,.49],[-.67,-.55]];for(let s=0;s<e.length;s++){let[r,o]=e[s],[a,c]=e[(s+1)%e.length];n.quad([r,o,-.32],[a,c,-.32],[a,c,.32],[r,o,.32],"#bc852c");for(let l of[-.32,.32])n.tri([0,0,l],[r,o,l],[a,c,l],"#ffcf4c")}n.form("box",[0,.73,0],[.49,.19,.42],"#f7eac0"),n.form("box",[0,-.56,0],[1.29,.16,.7],"#244840");for(let s of[-1,1])n.form("box",[s*.658,-.04,0],[.07,.6,.43],"#335e55");let t=new Vn;for(let s of[-1,1]){let r=(o,a)=>[s*o,a,s*.333];t.quad(r(.08,.48),r(-.36,-.06),r(-.06,-.06),r(.26,.48),"#263f37"),t.tri(r(-.06,.12),r(.34,.12),r(-.2,-.45),"#263f37")}let i=new cn;return i.add(n.mesh(),t.mesh(!0)),i}function Cp(n){let e=kv(),t=new wi(1.18,1.36,32),i=new Zt({color:"#ffe189",transparent:!0,opacity:.88,side:Ut,depthWrite:!1}),s=Object.values(Li).map(r=>{let o=e.clone(),a=new bt(t,i);return a.rotation.x=-Math.PI/2-Math.atan(wr(r.s,r.branch)),a.position.set(r.x,r.y+.09,r.z),o.position.set(r.x,r.y+1.07,r.z),n.add(o,a),{cell:r,pack:o,ring:a,yaw:-jt(r.s,r.branch)}});return(r,o,a)=>{for(let{cell:c,pack:l,ring:h,yaw:u}of s){let d=!o.boostCells.includes(c.branch)&&(!o.route||o.route===c.branch)&&c.s>o.s-6&&c.s<o.s+172;if(l.visible=h.visible=d,!d)continue;let p=a?0:r*2.5+c.s*.07;l.position.y=c.y+1.07+.12*Math.sin(p),l.rotation.set(0,u+.32*Math.sin(p*.69),.055*Math.sin(p)),h.scale.setScalar(1+.09*Math.sin(p))}}}var Ip=xt(()=>{di();Qi();Uo();qt()});function gl(n,e,t){let i=Math.max(e-22,0)*(.22+.12*Math.sin(n*.013+e*.048));if(Ht){if(te.id==="timber")return .18*Math.min(e,14)+.09*Math.min(e,54)+i*.75;if(te.id==="windreach")return .14*Math.min(e,12)+.08*Math.min(e,35)+i*.42;if(te.id==="turbine"||te.id==="tideworks")return .13*Math.min(e,10)+1.7*Ue(.8,3.8,e)+i*.36;if(te.id==="harbor")return .16*Math.min(e,18)+1.1*Ue(.25,1.6,e)+i*.34;if(te.id==="delta")return .08*Math.min(e,14)+.055*Math.min(e,32)+i*.45;let s=4.8*Ue(1.8,6.2,e)+7.2*Ue(7,18,e)+5*Ue(22,40,e);return .15*Math.min(e,24)+s*(.8+.2*Math.sin(n*.042))+i}if(t==="gorge"){let s=(4.7+1.8*Math.sin(n*.057))*Ue(1.4,5.8,e)+(5.8+2.8*Math.sin(n*.031+.6))*Ue(6.3,17,e);return .18*Math.min(e,10)+(.28+.72*Ue(he+13,he+49,n))*s+i}return t==="canal"?.18*Math.min(e,12)+1.32*Ue(.8,2.15,e)+.09*Math.max(0,e-12)+i:t==="marsh"?.12*Math.min(e,7)+.06*Math.min(e,32)+i:.2*Math.min(e,12)+.1*Math.min(e,35)+i}function mu(n,e,t){let i=t[0],s=t[t.length-1],r=ze(n,i),o=ze(n,s);if(e<=r.left){let a=r.left-e;return{h:He(n,i)+gl(n,a,i),d:a,route:i}}if(e>=o.right){let a=e-o.right;return{h:He(n,s)+gl(n,a,s),d:a,route:s}}for(let a=0;a<t.length-1;a++){let c=t[a],l=t[a+1],h=ze(n,c).right,u=ze(n,l).left;if(e<h-1e-4||e>u+1e-4)continue;let d=$e((e-h)/Math.max(.001,u-h),0,1),p=Ue(0,1,d),m=Math.max(0,Math.min(e-h,u-e)),_=He(n,c)+gl(n,m,c),g=He(n,l)+gl(n,m,l),f=n<he+48?(a===0?1.72:1.25)*Math.sin(Math.PI*d)*Ue(.3,3.8,u-h)*(1-Ue(he+16,he+48,n)):0;return{h:_+(g-_)*p+f,d:m,route:d<.5?c:l}}return null}function Dn(n,e){let t=mu(n,e,zv(n));if(!t)return null;let i=ct(n,e);return[i.x,t.h,i.z]}function Lp(n,e,t){let i=ct(n,e),s=mu(n,e,t);return[i.x,s?s.h:He(n,t[0])-.035,i.z]}function Dp(n,e,t,i,s){function r(l){let h=i.map(m=>ze(l,m)),u=h[0].left,d=h.at(-1).right,p=[Pp.map(m=>u-m)];for(let m=0;m<h.length-1;m++){let _=h[m].right,g=h[m+1].left;p.push(Hv.map(f=>_+(g-_)*f))}return p.push(Pp.map(m=>d+m)),p}let o=Math.ceil((t-e)/(e===he?1.25:3)),a=r(e),c=a.map(l=>l.map(h=>Lp(e,h,i)));for(let l=1;l<=o;l++){let h=e+(t-e)*l/o,u=r(h),d=u.map(p=>p.map(m=>Lp(h,m,i)));for(let p=0;p<u.length;p++)for(let m=0;m<u[p].length-1;m++){let _=mu(h,(u[p][m]+u[p][m+1])/2,i);if(!_)continue;let g=(Ht?.ground??Vv[_.route])[_.d<1.6?0:_.d<(_.route==="gorge"?12:4.2)?1:2],f=g[Math.floor(s()*g.length)];n.quad(c[p][m],d[p][m],d[p][m+1],c[p][m+1],f)}c=d}}function Up(){let n={value:0},e=new Zt({vertexColors:!0,side:Ut});return e.onBeforeCompile=t=>{t.uniforms.creekClock=n,t.vertexShader=`attribute vec3 creekCoord; varying vec3 vCreek;
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
      diffuseColor.rgb+=vec3(.045,.055,.026)*caustic*vCreek.z*nearField;`)},{material:e,clock:n}}function Fp(n,e,t,i){let s=[],r=[],o=[],a=[],c=n>=0&&e<=he,l=c?60:24,h=Math.ceil((e-n)/1.6),u=new Pe;for(let p of t){let[m,_,g]=pu[p],f=new Pe,v=s.length/3;for(let S=0;S<=h;S++){let x=n+(e-n)*S/h,T=ze(x,p),b=c?Ue(11,he,x):0,A=b?ws(x,-1):0,R=b?ws(x,1):0;for(let y=0;y<=l;y++){let M=T.left+(T.right-T.left)*y/l,C=tl(x,M,p),D=ct(x,M),L=Ar(x,M,p);if(s.push(D.x,He(x,p)+L,D.z),a.push(M,x,C.shallow),f.copy(m).lerp(_,.82*C.shallow).lerp(g,.52*C.current),b){let N=M<(A+R)/2?"gorge":"marsh",B=N==="gorge"?1-Ue(A-2,A+2,M):Ue(R-2,R+2,M),O=pu.canal,H=pu[N];u.copy(O[0]).lerp(O[1],.82*C.shallow).lerp(O[2],.52*C.current),f.lerp(u,b),u.copy(H[0]).lerp(H[1],.82*C.shallow).lerp(H[2],.52*C.current),f.lerp(u,B*b)}if(L>0&&f.lerp(_,Math.min(.48,.55*L)),f.multiplyScalar(1+.036*Math.sin(x*.25+M*.74)),r.push(f.r,f.g,f.b),S&&y<l){let N=v+(S-1)*(l+1)+y,B=N+1,O=N+l+1;o.push(N,B,O,B,O+1,O)}}}}let d=new Mt;return d.setAttribute("position",new Ze(s,3)),d.setAttribute("color",new Ze(r,3)),d.setAttribute("creekCoord",new Ze(a,3)),d.setIndex(o),new bt(d,i)}function Gn(n,e,t){let i=Hn(n,t),s=i.mid+i.radius*e,r=ct(n,s),o=(Ht?te.id==="basalt"?.54:te.id==="harbor"?.39:.16:t==="gorge"?.92:t==="shared"?.4:t==="canal"?.24:.16)*i.radius*(1-Math.abs(e)**1.55);return[r.x,He(n,t)+.025+o,r.z]}var zv,Pp,Hv,Vv,Gv,pu,Bo=xt(()=>{tn();Qo();di();qt();zv=n=>n>=he&&n<Xe?Ct:["shared"],Pp=[0,.6,1.4,2.5,4.4,7,10.5,15.5,24,37,61,100,160],Hv=[0,.028,.06,.12,.2,.32,.5,.68,.8,.88,.94,.972,1];Vv={shared:[["#cfbd91","#dfcda1"],["#adb080","#a7ad7c"],["#afc384","#a7bc80"]],gorge:[["#d9b48a","#caaa82"],["#b58368","#bc8d6e","#a97d67"],["#a9916d","#ac9a76","#a18f6a"]],canal:[["#c0bba1","#bcbba8"],["#929e91","#9da69a"],["#aab78c","#a4b388"]],marsh:[["#bfbd86","#c4c48e"],["#99aa72","#a2ae76"],["#a4b77b","#abbc7c"]]};Gv={shared:["#358c94","#acc8a9","#68b8b1"],gorge:["#277d8b","#b6bf9b","#75c6c0"],canal:["#347f90","#8aafa3","#62b3bd"],marsh:["#518c78","#afbf86","#78b29a"]},pu=Object.fromEntries(Object.entries(Ht?.water??Gv).map(([n,e])=>[n,e.map(t=>new Pe(t))]))});function Np(n,[e,t,i],s,r,o,a,c){n.form("box",[e,t+r/2,i],[s,r,o],a);for(let l of[-1,1])n.quad([e+l*(s/2+.45),t+r,i-o/2-.4],[e,t+r+s*.31,i-o/2-.4],[e,t+r+s*.31,i+o/2+.4],[e+l*(s/2+.45),t+r,i+o/2+.4],c),n.tri([e-s/2,t+r,i+l*o/2],[e+s/2,t+r,i+l*o/2],[e,t+r+s*.31,i+l*o/2],a);n.form("box",[e,t+r*.39,i+o/2+.035],[s*.42,r*.77,.07],"#45524e")}function Xv(n,e,t){let[i,s,r]=e;Np(n,e,4.8,2.65,6.2,"#ba9461","#945b44");for(let[o,a]of[[-.68,.43],[.26,.43],[-.18,1.16]]){let c=i+t*4+o;n.form("barrel",[c,s+a,r],[.53,5,.53],"#8c6343",[Math.PI/2,0,.02]),n.form("barrel",[c,s+a,r+2.52],[.51,.05,.51],"#dfbd83",[Math.PI/2,0,0])}for(let o of[-1.8,1.8])n.form("box",[i+o,s+2.2,r+3.2],[.25,4.2,.32],"#815f40")}function gu(n,[e,t,i],s,r,o){let a=[[1,0],[.45,.87],[-.64,.73],[-.93,-.22],[-.12,-.94],[.76,-.67]],c=["#73a4b9","#9cc7d1","#b9dfe2","#85b6c7","#d7edef","#a5ced9"];for(let l=0;l<a.length;l++){let[h,u]=a[l],[d,p]=a[(l+1)%a.length];n.tri([e+h*r,t-.32,i+u*r],[e+d*r,t-.32,i+p*r],[e+o*r,t+s,i-.18*r],c[l])}}function _u(n,[e,t,i],s,r){for(let o=0;o<4;o++){let a=r+o*1.67,c=.31+o*.11,l=e+Math.cos(a)*c,h=i+Math.sin(a)*c,u=s*(1-o*.15);n.form("hex",[l,t+u*.39,h],[u*.16,u*.82,u*.16],o%2?"#7ab8c2":"#ab83c2",[.06*o,a,.075*o]),n.form("cone",[l-u*.04*o,t+u*.86,h],[u*.19,u*.32,u*.19],o%2?"#b0e7db":"#e7c1ef",[.03*o,a,.06*o])}}function qv(n,[e,t,i],s){n.form("box",[e,t+1,i],[5.2,2.1,5.2],"#939b91");for(let r of[-1.4,1.4])for(let o of[-1.5,1.5])n.form("box",[e+r,t+5.6,i+o],[.55,8,.6],"#737e7b");for(let r of[-1.5,1.5])Qt(n,[e-1.4,t+2,i+r],[e+1.4,t+8.3,i+r],.25,.28,"#b3a18a"),Qt(n,[e+1.4,t+2,i+r],[e-1.4,t+8.3,i+r],.25,.28,"#b3a18a");n.form("box",[e,t+9.6,i],[4.8,1.7,5.3],"#d3c7aa"),n.form("box",[e,t+9.9,i+2.68],[3.8,.67,.11],"#3f646c"),n.form("box",[e,t+10.6,i],[5.1,.25,5.6],"#975d49"),n.form("box",[e-s*1.5,t+12.1,i],[.12,3.1,.12],"#6b7a73"),n.form("stone",[e-s*1.5,t+13.6,i],[.37,.36,.37],"#f1b25d")}function Op(n,e,t,i,s){for(let r=0;r<Math.ceil((t-e)/5.4);r++){let o=Gn(e+(t-e)*s(),(s()-.5)*1.5,i);te.id==="glacier"?gu(n,o,.65+s()*.75,.48,.24):te.id==="cavern"?_u(n,o,.7+s()*.65,r):n.form("stone",o,[.53,.3,.86],te.id==="timber"?"#827d5b":"#b0aa8a",[.09,s()*3,.08])}}function xu(n,e,t){let i=te.id==="windreach"?141:176,s=t>0?32:58,r=Math.ceil((n-s)/i)*i+s;return r>=0&&r<e?r:null}function Bp(n,e,t,i,s){let r=te.id;function o(a,c,l){let h=ze(a,i);return Dn(a,(c<0?h.left:h.right)+c*l)}for(let a of[-1,1]){let c=i==="shared"||i==="gorge"&&a<0||i==="marsh"&&a>0,l=r==="timber"?5:r==="glacier"||r==="cavern"?9:15;for(let _=0;_<Math.ceil((t-e)/l);_++){let g=e+(t-e)*s();if(!c&&(g<he+52||g>Xe-42))continue;let f=o(g,a,2.6+s()*16);if(f)if(r==="timber")Oo(n,s,f,5.2+s()*7,2);else if(r==="glacier")gu(n,f,4.3+s()*8,1.7+s()*2.5,(s()-.5)*.9);else if(r==="cavern"){let v=4+s()*5.6;n.form("cone",[f[0],f[1]+v*.44,f[2]],[1.8,v,2.1],Wv(s,["#635b76","#7e7087","#716578"]),[0,s(),.04]),_u(n,[f[0]-a*1.4,f[1],f[2]+1.3],1.6+s()*2.7,s()*5)}else if(r==="windreach"){n.form("stone",f,[1.5,.44,1.9],"#bdad80",[0,s()*4,0]);for(let v=0;v<5;v++)n.tri([f[0]+v*.19,f[1],f[2]],[f[0]+v*.19+.13,f[1],f[2]],[f[0]+v*.19+.6,f[1]+1.2,f[2]-.15],"#a8a464")}else n.form("box",[f[0],f[1]+.38,f[2]],[1.5,.83,3.1],r==="turbine"?"#96a69b":"#a1a79d",[0,.28,0])}if(!c)continue;let h=r==="windreach"||r==="turbine",u=r==="cavern"?78:r==="glacier"?125:r==="timber"?147:176,d=a>0?32:58,p=h?xu(e,t,a):null,m=h?p:Math.ceil((e-d)/u)*u+d;if(m!==null)for(let _=m;_<t;_+=u){if(_<0)continue;let g=o(_,a,r==="cavern"?3.7:7.3);if(g)if(r==="timber")Xv(n,g,a);else if(r==="windreach")n.form("trunk",[g[0],g[1]+5.6,g[2]],[.73,11.2,.73],"#eee4cb");else if(r==="turbine")n.form("trunk",[g[0],g[1]+2.2,g[2]],[1.15,4.4,1.15],"#707a70"),Np(n,[g[0]+a*3.5,g[1],g[2]-1],4.3,4.6,5.1,"#a19075","#637c79");else if(r==="glacier")for(let f=0;f<3;f++)gu(n,[g[0]+f*1.7*a,g[1],g[2]+f*.8],9+f*2.7,2.3+f*.5,a*.34);else r==="cavern"?(_u(n,g,3.5+s()*2.4,_*.17),n.form("hex",[g[0]+a*2.1,g[1]+2.6,g[2]],[2,6.1,2.7],"#70627b",[.09,.5,.17*a])):qv(n,g,a)}}}var Wv,vu=xt(()=>{tn();qt();Bo();Qi();Wv=(n,e)=>e[Math.floor(n()*e.length)]});function kp(n,e,t,i,s){let r=te.id==="turbine";for(let o of[-1,1]){if(s!=="shared"&&!(s==="gorge"&&o<0)&&!(s==="marsh"&&o>0))continue;let a=xu(t,i,o);if(a===null)continue;let c=ze(a,s),l=Dn(a,(o<0?c.left:c.right)+o*7.3);if(!l)continue;let h=new Vn,u=r?3.6:5;if(r){let m=(_,g,f)=>[Math.cos(_)*g,Math.sin(_)*g,f];for(let _=0;_<12;_++){let g=_*Math.PI/6,f=(_+1)*Math.PI/6;Qt(h,m(g,u,0),m(f,u,0),.26,.96,"#78583b"),Qt(h,m(g,.29,.58),m(g,u,.58),.17,.17,"#b1925d"),h.form("box",m(g,u,0),[.35,.67,1.4],"#a67c4d",[0,0,g])}h.form("barrel",[0,0,.65],[.46,1.4,.46],"#536c69",[Math.PI/2,0,0])}else{h.form("stone",[0,0,.54],[.52,.53,.85],"#d7d6c1");for(let m=0;m<3;m++){let _=m*Math.PI*2/3,g=(f,v)=>[Math.sin(_)*f+Math.cos(_)*v,Math.cos(_)*f-Math.sin(_)*v,.79];h.quad(g(.28,-.14),g(1.5,.55),g(u,.17),g(u+.35,-.08),"#f8eed6"),h.tri(g(u-.8,-.03),g(u,.17),g(u+.35,-.08),"#bf795d")}}let d=h.mesh(),p=Math.sin(a*.04)*1.7;d.position.set(l[0],l[1]+(r?4.4:11.2),l[2]),e.add(d),n.push({mesh:d,phase:p,rate:r?.57:.82})}}var zp=xt(()=>{tn();qt();Bo();Qi();vu()});function Us(n,e,t,i,s=0){let r=ze(n,e),o=(t<0?r.left:r.right)+t*i,a=Dn(n,o);if(!a)return null;if(s){for(let c of[-s,s])for(let l of[-s,s])if(!Dn(n+c,o+l))return null}return a}function Yv(n,[e,t,i]){n.form("barrel",[e,t+.44,i],[3.5,.9,3.5],"#a8a39a");for(let r=0;r<5;r++){let o=2.1-r*.18;n.form("barrel",[e,t+1.9+r*2.14,i],[o,2.18,o],r%2?"#bf5a4a":"#ede0b9")}let s=t+11.7;n.form("barrel",[e,s-.15,i],[1.98,.35,1.98],"#404e54"),n.form("barrel",[e,s+.75,i],[1.13,1.55,1.13],"#ffdf94");for(let r of[0,1.57,3.14,4.71])n.form("box",[e+1.06*Math.cos(r),s+.76,i+1.06*Math.sin(r)],[.16,1.67,.16],"#48565b");n.form("cone",[e,s+2.01,i],[1.79,1.17,1.79],"#ae5141")}function Zv(n,[e,t,i],s){let r="#b87540",o="#e4a851",a="#586467";for(let d of[-1,1])for(let p of[-1,1])n.form("box",[e+d*2,t+3.8,i+p*2.9],[.48,7.6,.55],r),Qt(n,[e+d*2,t+.3,i+p*2.9],[e+d*2,t+7.4,i-p*2.9],.17,.19,o);n.form("box",[e,t+7.7,i],[5,.75,6.7],a),n.form("box",[e+s*1.1,t+9,i+1.55],[2.7,2.1,2.85],o),n.form("box",[e+s*1.1,t+9.3,i+3.01],[2.06,.82,.07],a);let c=[e,t+8.2,i],l=[e,t+13.5,i+.6],h=[e-s*1.6,t+12.5,i-9.2];Qt(n,c,l,.52,.52,r),Qt(n,c,h,.48,.53,o),Qt(n,l,h,.22,.24,o);for(let d=1;d<6;d++){let p=d/6,m=(d-1)/6;Qt(n,c.map((_,g)=>_+(h[g]-_)*m),l.map((_,g)=>_+(h[g]-_)*p),.15,.15,r)}let u=[h[0],t+6,h[2]];Qt(n,h,u,.09,.09,a),n.form("box",u,[1.35,.36,.4],a)}function Jv(n,[e,t,i],s){let r=["#b9644c","#577b83","#d5ac63","#708b78"];for(let o=0;o<3;o++){let a=e+(o===1?3.35:0),c=t+1.16+(o===2?2.34:0);n.form("box",[a,c,i],[3.14,2.27,6.05],r[(s+o)%r.length]);for(let l of[-1,1])for(let h=-2;h<=2;h++)n.form("box",[a+l*1.59,c,i+h*1.1],[.08,2.1,.095],r[(s+o+1)%r.length]);n.form("box",[a,c,i+3.045],[.06,2.05,.04],"#646d69")}}function Kv(n,e,t,i,s){for(let o=Math.ceil(e/16)*16;o<t;o+=16){let a=Us(o,i,s,.68),c=Us(o+13,i,s,.68);!a||!c||(Qt(n,[a[0],a[1]+.13,a[2]],[c[0],c[1]+.13,c[2]],.45,.5,"#bcc0ae"),n.form("barrel",[a[0],a[1]+.4,a[2]],[.22,.78,.22],"#5d7371"))}let r=i==="shared"?72:112;for(let o=Math.ceil((e-31)/r)*r+31;o<t;o+=r){if(o<0)continue;let a=Math.round((o-31)/r),c=Us(o,i,s,s>0?9:12,4.5);c&&(i==="shared"&&s>0&&(a%4===0||o>te.length-75)?Yv(n,c):(a+(s>0?1:0))%3===0?Zv(n,c,s):Jv(n,c,a%4))}}function $v(n,e,t,i,s){let r=4+Math.floor(e()*4),o=4.3+e()*9,a=4+e()*7;for(let c=0;c<r;c++){let l=t+(e()-.5)*8,h=Us(l,i,s,a+(e()-.5)*5,1.1);if(!h)continue;let u=o*(.43+e()*.68),d=.8+e()*.83;n.form("hex",[h[0],h[1]+u*.47,h[2]],[d,u,d],Hp[c%5],[0,.51,0]),n.form("hex",[h[0],h[1]+u*.97,h[2]],[d*.97,.13,d*.97],c%3?"#808c88":"#a1ae8a",[0,.51,0])}}function jv(n,e,t,i){let s=[11.5,7.4,4.1,1.8,.05],r=s.length-1;for(let o=0;o<r;o++){let a=[[e-2.6,s[o]],[e+2.6,s[o]],[e+2.6,s[o+1]],[e-2.6,s[o+1]]].map(([d,p])=>Us(d,t,i,p));if(a.some(d=>!d))return;for(let d of a)d[1]+=.23;n.quad(...a,o===r-1?"#dcebdc":"#82bfc5");let[c,l,h,u]=a;for(let d of[.18,.51,.8]){let p=(m,_,g)=>m.map((f,v)=>f+(_[v]-f)*g+(v===1?.035:0));n.quad(p(c,l,d),p(c,l,d+.035),p(u,h,d+.037),p(u,h,d),"#d6ebe4")}}}function Qv(n,[e,t,i],s){n.form("trunk",[e,t+2.9,i],[1.8,5.8,1.8],"#ad9368"),n.form("cone",[e,t+6.15,i],[1.88,1.31,1.88],"#6e6653"),n.form("box",[e,t+1.13,i+1.54],[.82,2.05,.16],"#695e49");let r=[e,t+5.64,i+1.72],o=(a,c,l)=>[e+Math.sin(l)*a+Math.cos(l)*c,r[1]+Math.cos(l)*a-Math.sin(l)*c,r[2]+.24];for(let a=0;a<4;a++){let c=s+a*Math.PI/2;Qt(n,r,o(4.7,0,c),.15,.15,"#735c43"),n.quad(o(1.7,0,c),o(4.62,0,c),o(4.5,1,c),o(1.92,.59,c),"#f0dfb0");for(let l of[2.35,3.3,4.15])Qt(n,o(l,0,c),o(l,.77,c),.058,.09,"#a78a5d")}n.form("stone",[e,r[1],r[2]+.4],[.36,.36,.23],"#ad7850")}function ey(n,[e,t,i]){for(let s of[-1,1])for(let r of[-1,1])n.form("trunk",[e+s*1.7,t+.72,i+r*2],[.16,1.48,.16],"#866d4c");n.form("box",[e,t+1.46,i],[4.35,.22,5.1],"#92784d"),n.form("box",[e,t+2.35,i],[3.48,1.65,4.12],"#bca16e"),n.form("box",[e,t+2.45,i+2.07],[1.35,.78,.055],"#5b685b");for(let s of[-1,1])n.quad([e+s*2.34,t+3,i-2.68],[e,t+4.55,i-2.68],[e,t+4.55,i+2.68],[e+s*2.34,t+3,i+2.68],"#807957"),n.tri([e-1.77,t+3,i+s*2.07],[e+1.77,t+3,i+s*2.07],[e,t+4.24,i+s*2.07],"#c1ae82")}function Vp(n,e,[t,i,s],r){for(let o=0;o<7;o++){let a=t+(e()-.5)*2*r,c=s+(e()-.5)*2*r,l=(.7+e()*.95)*r,h=.25*r;n.tri([a-.07,i-.05,c],[a+.07,i-.05,c],[a+h,i+l,c+.12],o%2?"#b3a15d":"#919650"),o%2===0&&n.form("cone",[a+h,i+l,c+.12],[.11*r,.52*r,.11*r],"#ccb078",[.09,0,-.25])}}function Gp(n,e,t,i,s){if(te.reaches){Op(n,e,t,i,s);return}for(let r=0;r<Math.ceil((t-e)/3.1);r++){let o=e+(t-e)*s(),a=Gn(o,(s()-.5)*1.7,i);if(te.id==="delta")Vp(n,s,a,.8+s()*.47);else if(te.id==="basalt"){let c=.4+s()*.86;n.form("hex",[a[0],a[1]+.26*c,a[2]],[.58,c,.58],Hp[r%5],[0,.51,0])}else n.form("stone",a,[.74,.45,.84],r%2?"#aca498":"#9c9e91",[.12,s()*4,.17])}}function Wp(n,e,t,i,s){if(te.reaches){Bp(n,e,t,i,s);return}for(let r of[-1,1]){if(te.id==="harbor"){Kv(n,e,t,i,r);continue}let o=i==="shared"||i==="gorge"&&r<0||i==="marsh"&&r>0,a=Math.ceil((t-e)/(te.id==="delta"?3.6:10));for(let c=0;c<a;c++){let l=e+(t-e)*s();if(!(!o&&(l<he+35||l>Xe-30)))if(te.id==="basalt")$v(n,s,l,i,r);else{let h=Us(l,i,r,.7+s()*4.8);h&&Vp(n,s,h,1.05+s()*.71)}}if(o)if(te.id==="basalt")for(let c=Math.ceil((e-37)/154)*154+37;c<t;c+=154)c>=0&&r<0&&jv(n,c,i,r);else{let c=r>0?167:139,l=r>0?34:22;for(let h=Math.ceil((e-l)/c)*c+l;h<t;h+=c){let u=Us(h,i,r,7.3,3.3);h<0||!u||(r>0?Qv(n,u,.4+.47*Math.sin(h*.02)):ey(n,u))}}}}var Hp,Xp=xt(()=>{vu();tn();qt();Qi();Bo();Hp=["#454c58","#596372","#68737b","#515e66","#78837e"]});function Yp(n,e,t,i,s,r){let[o,a,c]=t,l=7,h=e()*.8,u=Array.from({length:l},()=>.8+e()*.28),d=[[0,1.08],[.28,1],[.32,1.02],[.63,.89],[.72,.91],[.95,.72],[1,.58]].map(([m,_])=>u.map((g,f)=>{let v=h+f*2*Math.PI/l;return[o+Math.cos(v)*i*_*g+s*.052*m,a+s*m,c+Math.sin(v)*r*_*g]})),p=["#a2735c","#c69a77","#b58568","#ca9c77","#b78969","#c59b75"];for(let m=0;m<d.length-1;m++)for(let _=0;_<l;_++){let g=(_+1)%l;n.quad(d[m][_],d[m][g],d[m+1][g],d[m+1][_],p[m])}for(let m=0;m<l;m++)n.tri([o+s*.052,a+s,c],d.at(-1)[m],d.at(-1)[(m+1)%l],"#b7a377")}function ty(n,e,t,i,s,r,o=.1){n.form("trunk",yn(e,t,s*.47,i),[o,s,o],r)}function Ur(n,e,t,i,s,r,o,a,c){n.form("box",yn(e,t,s,i),[r,o,a],c,[0,-jt(e,i),0])}function ny(n,e,t,i,s,r){let o=Math.ceil(s/.68);for(let a=0;a<o;a++)Ur(n,e+a*s/o,t,i,.76,r,.17,s/o-.035,a%3?"#bd9764":"#ae8959")}function qp(n,e,t,i,s){let r=Dn(e,t);if(!r)return;let[o,a,c]=r,l=s?6.3:4.4,h=s?3.6:2.4,u=s?8:5.6,d=a+.22;n.form("box",[o,d+h/2,c],[l,h,u],s?"#b9b69d":"#a88d62");let p=d+h,m=p+(s?1.7:1.5),_=l/2+.4,g=u/2+.45;for(let f of[-1,1])n.quad([o+f*_,p,c-g],[o,m,c-g],[o,m,c+g],[o+f*_,p,c+g],s?"#50716f":"#827b58"),n.tri([o-_,p,c+f*g],[o+_,p,c+f*g],[o,m,c+f*g],"#a99c79");for(let f of[-1,1])for(let v of[-.25,.25])n.form("box",[o+f*(l*.5+.015),d+h*.56,c+v*u],[.045,h*.4,u*.23],s?"#4e6b69":"#665c45");s&&(n.form("trunk",[o+l*.32,p+2,c-u*.3],[.36,5,.36],"#956f58"),n.form("barrel",[o+l*.32,p+4.2,c-u*.3],[.4,.34,.4],"#c9bc9b"))}function iy(n,e){for(let t of e.parts)n.form("box",t.center.toArray(),t.size,t.color,[0,0,t.angle])}function sy(n,e,t){let{s:i,u:s,radius:r,height:o,side:a,kind:c,feature:l}=e,h=(u,d,p=i)=>yn(p,s+u+it(p,t)-it(i,t),d,t);if(c==="gate"){let u=t==="canal"?"#397e80":"#388985";n.form("barrel",h(0,.3),[r,2*(Di.top-.3),r],"#f4dfaa"),n.form("box",h(0,1.3),[.37,2.45,.47],u);for(let d of[1.45,1.83])n.form("box",h(0,d),[.4,.15,.5],"#f3cf8d");n.form("box",h(0,o-.115),[.49,.23,.56],"#cdf3c9"),t==="canal"&&(Qt(n,h(0,2.28),h(-a*.8,3.06),.19,.24,u),n.form("box",h(-a*.8,3.06),[.37,.36,.35],"#3a5d59"),n.form("stone",h(-a*.8,3.07,i-.2),[.14,.15,.065],"#a7db9f"))}else if(c==="flag"){let u=Cr[t].find(p=>p.approach===l.start),d=u&&a===(u.side==="right"?1:-1);Qt(n,h(0,0),h(0,o),r*2,r*2,"#695f4b"),n.tri(h(0,o+.04),h(a*.79,o-.22),h(0,o-.47),d?"#eab34e":"#e8773b")}else if(c==="buoy"){let u=r/.32;n.form("barrel",yn(i,s,.15*u,t),[r,.34*u,r],"#ede4bc"),n.form("cone",yn(i,s,.48*u,t),[.3*u,.48*u,.3*u],t==="gorge"?"#d27e43":"#d77143")}else{let u=c==="quay"?uy(i):c==="stake"?"#92764d":c==="launch"?"#7a634a":"#795e47";ty(n,i,s,t,o,u,r),c==="stake"&&Ur(n,i,s,t,1.21,.19,.28,.12,"#e5dfac"),c==="launch"&&Ur(n,i,s,t,.74,.25,.16,.25,"#e3783d")}}function ry(n,e){let t=e.vertices,i=t.at(-1);for(let s=0;s<e.count;s++){let r=(s+1)%e.count;for(let o=0;o<t.length-1;o++)n.quad(t[o][s],t[o][r],t[o+1][r],t[o+1][s],e.color);n.tri([e.x,e.base+e.height,-e.s],i[s],i[r],lp)}}function oy(n,e,t){let i=(l,h,u)=>yn(l,it(l,t)+h,u,t),s=e.width/2,r=(l,h,u=.044)=>i(l,e.offset+h,ei(e,l)+u);if(e.kind==="gate"){for(let l=0;l<3;l++)for(let h of[-1,1]){let u=e.start-4+l*1.45;n.quad(i(u,e.offset,.078),i(u-.8,e.offset+h*s*.7,.078),i(u-1.1,e.offset+h*s*.7,.078),i(u-.32,e.offset,.078),"#f9e5aa")}return}if(e.kind==="ledge"){for(let l=-3;l<=3;l++){let h=l*s*.24;n.quad(r(e.end-.9,h-.085,.07),r(e.end,h-.12,.07),i(e.end+2.32,e.offset+h,.13),i(e.end+1.1,e.offset+h+.16,.32),"#dfefe1")}return}let o=Math.ceil((e.end-e.start)/.86),a=(e.end-e.start)/o;for(let l=0;l<o;l++){let h=e.start+l*a;n.quad(r(h,-s),r(h,s),r(h+a-.023,s),r(h+a-.023,-s),e.boosted?l%3?"#dc8042":"#e9954a":l%2?"#bf995f":"#cbab72");for(let u of[-1,1])n.quad(r(h,u*s),r(h+a,u*s),i(h+a,e.offset+u*s,.02),i(h,e.offset+u*s,.02),"#967449");if(l%3===1)for(let u of[-1,1])n.quad(r(h+.7,0,.084),r(h,u*s*.74,.084),r(h-.25,u*s*.74,.084),r(h+.4,0,.084),"#f5e4b2")}if(!e.boosted){let l=e.start+.22;n.quad(r(l,-s,.06),r(l,s,.06),r(l+.54,s,.06),r(l+.54,-s,.06),"#e78942")}let c=Cr[t].find(l=>l.approach===e.start);if(c){let l=c.side==="right"?1:-1,h=l*(s-.82),u=l*(s-.14),d=e.start+.62;n.quad(r(d,h,.095),r(d,u,.095),r(d+3.4,u,.095),r(d+3.4,h,.095),"#353e35");for(let p=0;p<3;p++){let m=d+.13+p*1.02;n.quad(r(m,h,.108),r(m+.32,u,.108),r(m+.81,u,.108),r(m+.49,h,.108),"#efbb58")}}}function ay(n){let e=ti(87314);for(let[t,i,s,r]of[[-1,49,4,11],[-1,62.5,4.5,17],[-1,69,4,10],[1,59,5,12],[1,69,3,17]])for(let o=0;o<r;o++){let a=i+he-72+(e()+e()-1)*s,c=ws(a,t)+(e()-.5)*2.3,l=.1+e()*.18;n.form("stone",yn(a,c,.009),[l,.02,l*(.95+e()*.58)],es(e,["#8baea0","#91b4a6","#9ab9a8"]),[0,e()*6,0])}}function cy(n){let e=ti(3926);function t(r,o,a){let c=ze(r,Ct[o]).right,l=ze(r,Ct[o+1]).left,h=c+(l-c)*a;return{p:Dn(r,h),width:l-c}}for(let[r,o,a,c,l]of[[79,.47,.5,.4,.76],[82,.53,.83,.71,1.32],[85.5,.43,1.25,1.32,1.8],[88,.7,.83,.84,1.4],[92,.27,1.26,.82,2.1],[97,.6,1.32,.72,1.7]]){let{p:h,width:u}=t(r,0,o);h[1]-=c*.2,n.form("stone",h,[Math.min(a,u*.38),c,l],es(e,["#aa8e73","#9a8978","#b89a79"]),[.12,e()*.8,.08])}let i=t(93.5,0,.49).p;i[1]-=.17,Oo(n,e,i,3.7,2);for(let r=0;r<28;r++){let o=79+e()*21,{p:a,width:c}=t(o,1,.23+e()*.54);Ds(n,e,a,Math.min(.6+e()*.45,c*.36))}let s=t(92,1,.54).p;s[1]-=.17,fu(n,e,s,3.7)}function ly(n,e,t,i,s){let r=t-e,o=()=>e+s()*r;for(let a of[-1,1]){let c=Math.ceil(r/(i==="marsh"?4.5:8));for(let l=0;l<c;l++){let h=o(),u=ze(h,i),d=a<0?u.left:u.right,p=2.1+s()*(i==="marsh"?17:26),m=d+a*p,_=Dn(h,m);if(_&&!(h>=he&&h<he+40&&(p<10||m>ze(h,"gorge").right&&m<ze(h,"marsh").left)))if(_[1]-=.27,i==="gorge"&&l%3!==2){let g=3.6+s()*8.7;Yp(n,s,_,2+s()*2.2,g,3+s()*3.6)}else i==="marsh"&&l%5===0?fu(n,s,_,3.7+s()*2.8):Oo(n,s,_,3.2+s()*5.6,i==="gorge"||l%5===2?2:1)}for(let l=0;l<Math.ceil(r/(i==="marsh"?1.8:3.6));l++){let h=o(),u=ze(h,i),d=a<0?u.left:u.right,p=d-a*s()*1.05;if(i==="marsh"||i==="shared"&&s()<.4)Ds(n,s,yn(h,p,.04,i),.7+s()*.47);else{let m=.28+s()*(i==="gorge"?1.06:.46);n.form("stone",yn(h,p,.03,i),[m*1.35,m*.55,m*.86],es(s,i==="gorge"?["#af947a","#ad886f","#b9a38a"]:["#9ea58f","#acaf96"]),[.12,s()*5,.14])}}if(i==="canal")for(let l=Math.ceil(e/12)*12;l<t;l+=12){if(l<he+23)continue;let h=p=>{let m=ze(p,i);return a<0?m.left:m.right},u=h(l),d=h(l+8);Qt(n,yn(l,u,.37,i),yn(l+8,d,.37,i),.45,.59,"#9ca496")}}}function hy(n,e,t,i,s){let r=c=>c>=e&&c<t,o=t-e,a=()=>e+s()*o;Ht?Wp(n,e,t,i,s):ly(n,e,t,i,s);for(let c of el[i]){let l=Math.max(e,c[0]),h=Math.min(t,c[1]);if(l>=h)continue;let u=Math.ceil((h-l)/1.6);for(let d=0;d<u;d++){let p=l+(h-l)*d/u,m=l+(h-l)*(d+1)/u;for(let _ of[-1,-.5,0,.5])n.quad(Gn(p,_,i),Gn(m,_,i),Gn(m,_+.5,i),Gn(p,_+.5,i),Ht?es(s,Ht.island):i==="gorge"?es(s,["#b59072","#ba9778"]):i==="marsh"?es(s,["#bab67e","#acb37c"]):i==="shared"?es(s,Math.abs(_+.25)>.5?["#dbcca1","#d0bc94"]:["#c1b78a","#bfb486"]):"#afa68a")}if(Ht){Gp(n,l,h,i,s);continue}for(let d=0;d<Math.max(1,Math.ceil((h-l)/2));d++){let p=l+(h-l)*s(),m=Gn(p,s()*1.6-.8,i);i==="shared"?c[2]>0&&p>c[0]+2?Ds(n,s,m,.63+s()*.23):n.form("stone",m,[.45+s()*.37,.3+s()*.23,.59+s()*.33],"#9f9e87",[.09,s()*4,.12]):i==="marsh"?Ds(n,s,m,.7+s()*.45):n.form("stone",m,[.75,.57,.9],i==="gorge"?"#a18069":"#9caa96",[.12,s()*4,.19])}if(i==="shared"&&c[2]>0){let d=c[0]+(c[1]-c[0])*.66;r(d)&&Ds(n,s,Gn(d,.12,i),.94)}if(i==="marsh")for(let d=l+.4;d<h;d+=2.4)for(let p of[-1,1]){let m=Gn(d,p*(.63+s()*.21),i);Ds(n,s,m,1.05+s()*.46)}}for(let c of zn[i])r(c.start)&&oy(n,c,i);for(let c of fl[i])r(c.s)&&ry(n,c);for(let c of Cr[i])r(c.s)&&iy(n,c);for(let c of ul[i])r(c.s)&&sy(n,c,i);for(let c of hl[i]||[])r(c.s)&&ny(n,c.s,c.u,i,c.length,c.width);if(!Ht&&i==="gorge"){for(let c of[137,355,573,859,1061,1213])if(r(c)){let l=it(c,i);for(let h of[-1,1]){let u=Dn(c,l+h*(ze(c,i).half+3.4));u&&Yp(n,s,u,3.8,13+6*s(),5.5)}}}else if(!Ht&&i==="canal"){for(let c of[132,368,581,831,1062,1223])if(r(c)){let l=ze(c,i);qp(n,c,l.right+5.5,i,!0);let h=Dn(c+9,l.right+7.7);if(h){let[u,d,p]=h;for(let m of[-1.3,1.3])for(let _ of[-1.3,1.3])n.form("box",[u+m,d+2.7,p+_],[.2,5.7,.2],"#607a75");n.form("barrel",[u,d+6.3,p],[2.35,2.5,2.35],"#729a9b"),n.form("cone",[u,d+8,p],[2.55,1.1,2.55],"#ab7759")}}}else if(!Ht&&i==="marsh"){for(let{s:c}of hl.marsh)if(r(c)){let l=ze(c,i);qp(n,c+3,l.right+4.9,i,!1);let h=l.right-2.8;n.form("stone",yn(c+3,h,.18,i),[.58,.25,2.12],"#ad8153",[0,-jt(c,i),0]);for(let u of[2.35,3.65])Ur(n,c+u,h,i,.34,.79,.09,.27,"#d8b47b")}for(let c=0;c<Math.ceil(o/2.4);c++){let l=a(),h=it(l,i),u=s()>.5?1:-1,d=h+u*(ze(l,i).half*(.51+s()*.43)),p=Hn(l,i);if(p&&d>p.left&&d<p.right)continue;let m=.2+s()*.39;n.form("barrel",yn(l,d,.023,i),[m,.035,m*.83],es(s,["#8d9d5b","#91a56a","#869e64"]),[0,s()*6,0]),c%7===0&&n.form("stone",yn(l,d,.086,i),[.13,.075,.13],"#ead5b4")}}if(i==="shared"&&r(0))for(let c=0;c<9;c++)Ur(n,-4+c*.4,0,i,.105,2.65,.18,.37,c%2?"#ae865a":"#bc9568");if(i==="shared"&&r(It))for(let c=0;c<30;c++)for(let l=0;l<2;l++)Ur(n,It,(c-14.5)*.88,i,3.9-l*.37,.89,.37,.12,(c+l)%2?"#264a45":"#f5e9c8")}function uy(n){return Math.round(n/12)%2?"#e0ac6c":"#6f8d89"}function yu(n,e){return n>=0&&n<he&&e!=="shared"?Ts(n,e):As(n,e)}function dy(n){let e=new Mt;e.setAttribute("position",new Ze([-.5,0,.6,-.1,0,-.64,.5,0,-.43,-.5,0,.6,.5,0,-.43,.05,0,.45],3));let t=new gs(e,new Zt({color:"#ccede0",transparent:!0,opacity:.72,depthWrite:!1,side:Ut}),600);t.frustumCulled=!1,t.instanceMatrix.setUsage(Ji),n.add(t);let i=new Xt,s=Array.from({length:31},(r,o)=>{let a=ti(2971+o*571);return Array.from({length:12},()=>[a(),a(),a(),a()])});return(r,o,a)=>{let c=0;for(let l=Math.floor((o-11)/7);l<=Math.ceil((o+126)/7);l++){let h=s[(l%31+31)%31];for(let u=0;u<h.length;u++){let[d,p,m,_]=h[u],g=(r*(.48+m*.23)+p)%1,f=l*7+d*6.4+g*1.9,v=f>=he&&f<Xe?a?[a]:Ct:["shared"];for(let S of v){if(c>=600)break;let x=S==="shared"&&f>=0&&f<he,T=ze(f,S),b=u<(x?10:8),A=x?u<4?"gorge":u<6?"canal":"marsh":S,R=b?yu(f,A)+(p-.5)*(x?2.35:S==="marsh"?5:3.7):T.center+(p-.5)*T.half*1.75,y=Hn(f,S);if(y&&R>y.left&&R<y.right)continue;let M=ct(f,R),C=Math.max(.03,Math.sin(g*Math.PI));i.position.set(M.x,He(f,S)+Ar(f,R,S)+.05,M.z);let D=b&&f>=0&&f<he+40?Math.atan((ct(f+.4,yu(f+.4,A)).x-ct(f-.4,yu(f-.4,A)).x)/.8):jt(f,S);i.rotation.y=-D+(b?.04:1.15),i.scale.set((b?x?.18:.14:.09)*C,1,(b?1.1+_*1.65:.46+_*.65)*(.5+.5*C)),i.updateMatrix(),t.setMatrixAt(c++,i.matrix)}}}t.count=c,t.instanceMatrix.needsUpdate=!0}}function Zp(n){let e=Up(),t=dy(n),i=[],s=[-60,0,he];for(let a=he+64;a<Xe;a+=64)s.push(a);for(let a=Xe;a<It;a+=64)s.push(a);for(let a=It;a<=It+192;a+=64)s.push(a);for(let a=0;a<s.length-1;a++)i.push({lo:s[a],hi:s[a+1],group:null,index:a});function r(a){let{lo:c,hi:l,index:h}=a,u=c>=he&&c<Xe?Ct:["shared"];a.rotors=[];let d=new cn,p=new Vn;Dp(p,c,l,u,ti(1931+te.seed+h*1957)),c===0&&ay(p),c===he&&!Ht&&cy(p);for(let m of u){let _=new Vn;hy(_,c,l,m,ti(7401+te.seed+h*1049+(Ct.indexOf(m)+1)*317)),d.add(_.mesh()),(te.id==="turbine"||te.id==="windreach")&&kp(a.rotors,d,c,l,m)}d.add(Fp(c,l,u,e.material),p.mesh()),a.group=d,n.add(d)}function o(a){n.remove(a.group),a.group.traverse(c=>{c.isMesh&&(c.geometry.dispose(),c.material!==e.material&&c.material.dispose())}),a.group=null,a.rotors=null}return(a,c=0,l="")=>{e.clock.value=a;for(let h of i){let u=h.hi>=c-39&&h.lo<=c+220;if(u&&!h.group&&r(h),u)for(let d of h.rotors)d.mesh.rotation.z=d.phase+a*d.rate;h.group&&(h.group.visible=u,!u&&(h.hi<c-165||h.lo>c+340)&&o(h))}t(a,c,l)}}var es,Jp=xt(()=>{tn();Qo();zp();Xp();di();Qi();ou();cl();dl();Bo();qt();es=(n,e)=>e[Math.floor(n()*e.length)]});function fy(n,e,t,i){if(!n.length)return n;let s=[],r=n.at(-1),o=(r[e]-t)*i;for(let a of n){let c=(a[e]-t)*i;o<0!=c<0&&s.push(r.clone().lerp(a,o/(o-c))),c>=0&&s.push(a),r=a,o=c}return s}function py(n,e){let t=e==="z"?["x","y"]:["y","z"],[i,s]=t,r=new Map;for(let l of n)r.set(Math.round(l[i]*1e5)+","+Math.round(l[s]*1e5),l);let o=[...r.values()].sort((l,h)=>l[i]-h[i]||l[s]-h[s]);if(o.length<3)return[];let a=(l,h,u)=>(h[i]-l[i])*(u[s]-l[s])-(h[s]-l[s])*(u[i]-l[i]);function c(l){let h=[];for(let u of l){for(;h.length>=2&&a(h.at(-2),h.at(-1),u)<=1e-9;)h.pop();h.push(u)}return h.pop(),h}return[...c(o),...c([...o].reverse())]}function my(n,e){let t=new yt().copy(n.matrixWorld).invert(),i=[],s=new Pe(e<=3?"#be9563":"#b5ab91");for(let[o,a]of[[null,-.56],[-.56,.58],[.58,null]])for(let c of[-1,1]){let l=[["x",.025,c]];o!==null&&l.push(["z",o,1]),a!==null&&l.push(["z",a,-1]),i.push({planes:l,edges:l.map(()=>[]),vertices:[],colors:[]})}function r(o,a,c){for(let l=1;l+1<a.length;l++)for(let h of[a[0],a[l],a[l+1]])o.vertices.push(h),o.colors.push(c.r,c.g,c.b)}return n.traverse(o=>{if(!o.isMesh)return;let a=o.geometry,c=a.attributes.position,l=a.attributes.color,h=a.index,u=new yt().multiplyMatrices(t,o.matrixWorld),d=m=>new U().fromBufferAttribute(c,h?h.getX(m):m).applyMatrix4(u),p=new Pe;for(let m=0;m<(h?h.count:c.count);m+=3){let _=[d(m),d(m+1),d(m+2)],g=h?h.getX(m):m;l&&p.setRGB(l.getX(g),l.getY(g),l.getZ(g));for(let f of i){let v=_;for(let[S,x,T]of f.planes)if(v=fy(v,S,x,T),!v.length)break;v.length<3||(r(f,v,p),f.planes.forEach(([S,x],T)=>{for(let b of v)Math.abs(b[S]-x)<1e-6&&f.edges[T].push(b)}))}}}),i.filter(o=>o.vertices.length).map(o=>{o.planes.forEach(([h],u)=>r(o,py(o.edges[u],h),s));let a=new U;for(let h of o.vertices)a.add(h);a.multiplyScalar(1/o.vertices.length);let c=[];for(let h of o.vertices)c.push(h.x-a.x,h.y-a.y,h.z-a.z);let l=new Mt;return l.setAttribute("position",new Ze(c,3)),l.setAttribute("color",new Ze(o.colors,3)),l.computeVertexNormals(),{geometry:l,center:a}})}function $p(n){let e=new Ai({vertexColors:!0,side:Ut,flatShading:!0}),t=new bt(new wi(.8,1,23),new Zt({color:"#e2f2df",transparent:!0,depthWrite:!1,side:Ut}));t.rotation.x=-Math.PI/2,t.visible=!1,n.add(t);let i=null,s=[],r=0,o=null;function a(){for(let h of s)n.remove(h.mesh),h.mesh.geometry.dispose();s=[],i=null,o=null,t.visible=!1}function c(h,u){a(),i=u.crash,r=0,h.updateMatrixWorld(!0);let d=ti(Math.round(u.s*10)+u.level*197),p=new U(1,0,0).applyQuaternion(h.quaternion).setY(0).normalize(),m=new U(0,0,1).applyQuaternion(h.quaternion).setY(0).normalize(),_=Math.min(1.72,.65+u.crash.speed/34),g=my(h,u.level);for(let f=0;f<7;f++){let v=new _o(1);v.scale(.05+d()*.045,.06+d()*.07,.12+d()*.17);let S=new Pe(u.level<=3?"#c5a579":f%2?"#e98646":"#ead3a0"),x=[];for(let T=0;T<v.attributes.position.count;T++)x.push(S.r,S.g,S.b);v.setAttribute("color",new Ze(x,3)),g.push({geometry:v,center:new U((d()-.5)*.85,.34,d()-.51),chip:!0})}for(let f of g){let v=new bt(f.geometry,e),S=h.localToWorld(f.center.clone());v.position.copy(S),v.quaternion.copy(h.quaternion),v.scale.copy(h.scale);let x=p.clone().multiplyScalar((f.center.x>=0?1:-1)*(1+1.45*d())*_*(f.chip?1.65:1));x.addScaledVector(m,(.2+.77*d())*_),x.y=(f.chip?-.45:-1.35)+d()*2.5,s.push({mesh:v,origin:S,velocity:x,initial:v.quaternion.clone(),spin:new U(d()-.5,d()-.5,d()-.5).normalize(),rate:(1.2+2.1*d())*_}),n.add(v)}}function l(h,u,d,p){if(!d.crash){i&&a();return}if(i!==d.crash&&c(u,d),!(r>=1.85)){r=p?Math.max(r,.34):Math.min(1.85,r+h);for(let m of s){let{mesh:_,origin:g,velocity:f}=m,v=r,S=He(-g.z,Ot(-g.z,d.route))+.055,x=(f.y+Math.sqrt(f.y**2+26*Math.max(0,g.y-S)))/13,T=Math.min(v,x)+.22*(1-Math.exp(-3*Math.max(0,v-x)));_.position.set(g.x+f.x*T,g.y+f.y*v-6.5*v*v,g.z+f.z*T);let b=He(-_.position.z,Ot(-_.position.z,d.route))+.055;_.position.y<=b&&(_.position.y=b,o||(o={point:_.position.clone(),time:r})),_.quaternion.copy(m.initial),_.rotateOnWorldAxis(m.spin,m.rate*T)}if(o&&!p){let m=r-o.time;t.visible=m<.68,t.position.copy(o.point),t.position.y+=.025,t.scale.setScalar(.38+m*3.8),t.material.opacity=.65*Math.max(0,1-m/.68)}p&&(r=1.85)}}return l}var Kp,Mu=xt(()=>{di();qt();Qi();Kp=.86});function jp(n){let e=new cn,t=new Vn;if(n<=3){let c=.98+.07*n,l=1.93+n*.13,h=["#a88558","#bc9968","#a78152","#c4a273"];for(let u=0;u<4;u++){let d=(u-1.5)*c/4;t.form("box",[d,.1,.06+(u%2?.025:-.025)],[c/4-.015,.22,l-Math.abs(u-1.5)*.065],h[u])}for(let u of[-1,1])t.form("box",[u*(c/2-.045),.25,.03],[.085,n===1?.17:.26,l-.06],n===1?"#987448":"#b48b51"),n>=2&&t.tri([u*c*.49,.28,-l*.46],[0,.33,-l*.67],[0,.29,-l*.44],"#c9a672"),n===3&&t.form("box",[u*c*.53,.11,-.04],[.12,.15,l*.85],"#6b8783");for(let u of[-.55,.57])t.form("box",[0,.231,u],[c*.95,.035,.13],n===1?"#7b8075":"#68877b");t.form("box",[0,.285,.02],[.63,.12,.6],"#5d6559");for(let u of[-.135,.135])t.form("barrel",[u,.415,-.03],[.118,.48,.118],n===1?"#6c7e69":"#b57641",[Math.PI/2,0,0]);return t.form("box",[0,.531,-.01],[.51,.03,.095],"#574e40"),t.form("box",[0,.25,l*.5],[.25,.31,.23],"#465553"),t.form("barrel",[0,.45,l*.47],[.14,.3,.14],n>=3?"#c07943":"#8b9180",[Math.PI/2,0,0]),t.form("box",[.34,.48,.43],[.028,.52,.027],"#545b50",[.14,0,-.05]),e.add(t.mesh()),e}let i=[[-1.62,.055,.45],[-1.22,.38,.47],[-.69,.65,.45],[.15,.73,.41],[1.05,.65,.36],[1.3,.5,.35]],s=n<6?"#d79356":n>=9?"#f16c33":"#f58a44";function r(c,l){let[h,u,d]=c;return[[l*u*.23,-.07,h],[l*u*.82,.062,h],[l*u*.99,.14,h],[l*u,.235,h],[l*u*.95,d,h]]}for(let c=0;c<i.length-1;c++){for(let _ of[-1,1]){let g=r(i[c],_),f=r(i[c+1],_);for(let v=0;v<4;v++)t.quad(g[v],f[v],f[v+1],g[v+1],["#234852","#da6435","#f4ead4","#ef7337"][v])}let[l,h,u]=i[c],[d,p,m]=i[c+1];t.quad([-h*.95,u,l],[h*.95,u,l],[p*.95,m,d],[-p*.95,m,d],s);for(let _ of[-1,1])t.quad([_*h*.68,u+.008,l],[_*h*.82,u+.008,l],[_*p*.82,m+.008,d],[_*p*.68,m+.008,d],"#fff0ce")}for(let c of[0,i.length-1]){let l=r(i[c],-1),h=r(i[c],1);for(let u=0;u<4;u++)t.quad(l[u],h[u],h[u+1],l[u+1],u===2?"#fae6c6":"#ce6436")}let o=[[-.46,.45,-.73],[.46,.45,-.73],[.48,.4,.63],[-.48,.4,.63]],a=[[-.29,.68,-.31],[.29,.68,-.31],[.32,.7,.34],[-.32,.7,.34]];if(n>=6){for(let c=0;c<4;c++)t.quad(o[c],o[(c+1)%4],a[(c+1)%4],a[c],["#548380","#254c54","#365955","#346b71"][c]);t.quad(...a,"#28535b"),t.form("box",[0,.708,.04],[.6,.025,.12],"#f6d696")}else t.quad(...o,"#665d4e"),t.form("box",[0,.48,.13],[.64,.15,.41],"#d3b889"),n===5&&t.quad(o[0],o[1],a[1],a[0],"#789d99");t.form("box",[0,.381,.92],[.65,.055,.34],"#325254");for(let c=-2;c<=2;c++)t.form("box",[c*.115,.416,.92],[.045,.018,.24],"#90a49a");t.form("box",[0,.25,1.34],[.28,.35,.24],"#2e4847"),t.form("box",[.4,.74,.55],[.03,.61,.03],"#475d55",[.16,0,-.09]),t.form("stone",[.427,1.042,.59],[.047,.075,.047],"#ec6435");for(let c of[-.53,.53])t.form("box",[c,.44,.56],[.07,.14,.38],"#ef9a50",[.1,0,0]);if(n>=7){for(let c of[-1,1])t.form("box",[c*.48,.53,.94],[.06,.36,.14],"#355652",[-.23,0,0]);t.form("box",[0,.72,.96],[1.32,.095,.29],"#ef783c",[-.1,0,0])}if(n>=8)for(let c of[-1,1])t.form("stone",[c*.67,.16,.18],[.2,.18,1.15],"#e97b41",[0,c*.05,0]),t.form("box",[c*.64,.3,.46],[.14,.06,.94],"#fff1ca");if(n>=9)for(let c of[-1,1]){let l=c*(n===10?.48:.4),h=n===10?1.15:.91;t.form("box",[l,.2,1.38],[.15*h,.35,.23*h],"#28494c"),t.form("box",[l,.15,1.44],[.33*h,.035,.3*h],"#66847d");let u=[[-.64,-1],[.64,-1],[1,-.63],[1,.64],[.65,1],[-.65,1],[-1,.64],[-1,-.63]],d=(m,_,g,f)=>u.map(([v,S])=>[l+v*_*h,m,f+S*g*h]),p=[d(.25,.14,.19,1.37),d(.34,.18,.23,1.38),d(.54,.175,.226,1.37),d(.61,.128,.164,1.34)];for(let m=0;m<3;m++)for(let _=0;_<8;_++){let g=(_+1)%8;t.quad(p[m][_],p[m][g],p[m+1][g],p[m+1][_],["#304b4c","#33545a","#da713d"][m])}for(let m=0;m<8;m++)t.tri([l,.619,1.34],p[3][m],p[3][(m+1)%8],"#e58a4c");for(let m of[.38,.43,.48])t.form("box",[l,m,1.375+.228*h],[.18*h,.018,.016],"#a2b2a2");t.form("box",[l,.621,1.34],[.075,.015,.27*h],"#ffdf9a"),t.form("barrel",[l,.085,1.49],[.048,.19,.048],"#586a6a",[Math.PI/2,0,0])}return n===10&&(t.form("box",[0,.73,-.1],[.11,.022,.53],"#ffefc9"),t.form("box",[0,.72,.92],[1.52,.05,.1],"#f9dfab"),e.scale.set(1.09,1.06,1.14)),e.add(t.mesh()),e}function gy(n){let t=new Array(190),i=new Xt,s=new Mt;s.setAttribute("position",new Ze([-.5,0,.6,-.15,0,-.6,.5,0,-.43,-.5,0,.6,.5,0,-.43,.15,0,.43],3));let r=new Zt({color:"#e1f8e9",side:Ut,transparent:!0,opacity:.85,depthWrite:!1}),o=new gs(s,r,190);o.frustumCulled=!1,o.instanceMatrix.setUsage(Ji),n.add(o);let a=0,c=0;function l(){t.fill(null),a=0,c=0,o.count=0}l();function h(u,d,p,m){c+=u;let _=!p.ramp||p.ramp.kind==="ramp"&&p.altitude<.25;if(m&&!p.flying&&_&&p.speed>.6&&c>Math.max(.022,.73/p.speed)){c=0;let f=-d.rotation.y,v=Math.cos(f),S=Math.sin(f),x=Math.sin(f),T=-Math.cos(f);for(let b of[-1,1]){let A=.4+.07*Math.sin(a*3.9),R=(.65+p.speed*.095)*b,y=p.s-.83*Math.cos(f),M=He(y,Ot(y,p.route));if(t[a]={x:d.position.x-x*.83+v*A*b,z:d.position.z-T*.83+S*A*b,dx:v*R-x*.2,dz:S*R-T*.2,angle:-f+b*.31,age:0,long:p.speed*.082,life:.61+p.speed*.025,boost:p.boostTime>0||p.jetTime>0||p.level>=9,base:M},a=(a+1)%190,p.speed>8){let C=p.landTime>0||p.hitTime>.48?1.8:p.jetTime>0?1.35:1,D=.5+.46*Math.sin(a*7.14);t[a]={x:d.position.x+v*A*b,z:d.position.z+S*A*b,dx:v*R*C*1.25-x*.65,dz:S*R*C*1.25-T*.65,angle:-f+b*.5,age:0,long:.21+D*.28,life:.27+D*.24,splash:(1.7+D*1.4)*C,base:M},a=(a+1)%190}}}let g=0;for(let f of t){if(!f||f.age>=f.life)continue;f.age+=u;let v=Math.max(.001,1-f.age/f.life),S=f.splash?Math.max(0,f.splash*f.age-4.9*f.age*f.age):.015*v;i.position.set(f.x+f.dx*f.age,f.base+.055+S,f.z+f.dz*f.age),i.rotation.set(f.splash?.57:0,f.angle,0),i.scale.set((f.splash?.115:f.boost?.35:.24)*v+.02,1,(.2+f.long)*(.35+.65*v)),i.updateMatrix(),o.setMatrixAt(g++,i.matrix)}o.count=g,o.instanceMatrix.needsUpdate=!0}return{clear:l,update:h}}function _y(n){let t=new Float32Array(72),i=new Mt,s=new an(t,3).setUsage(Ji);i.setAttribute("position",s);let r=new fr({color:"#ddf5e8",transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,fog:!1}),o=new ao(i,r);o.frustumCulled=!1,o.renderOrder=8,n.add(o);let a=0;return(c,l,h)=>{let u=h?$e((l-18)/20,0,1):0;if(o.visible=u>.02,!o.visible)return;a+=c*(.75+l*.037),r.opacity=.11*u;let d=Math.tan(n.fov*Math.PI/360)*2,p=d*n.aspect;for(let m=0;m<12;m++){let _=(m*.61803399+a*(.75+m%3*.13))%1,g=m%2?1:-1,f=g*(.68+_*.52),v=(.11+m%6*.121)*(1+_*.43),S=.025+.074*_*u,x=m*6;t[x]=f*p,t[x+1]=-v*d,t[x+2]=-2,t[x+3]=(f+g*S)*p,t[x+4]=-(v+S*.45)*d,t[x+5]=-2}s.needsUpdate=!0}}function Qp(n){let e=new Yc({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setClearColor("#bfdad5"),e.outputColorSpace=vn;let t=new ro;t.background=new Pe(Ht?.fog??"#c8e0d9"),t.fog=new so(Ht?.fog??"#c8dfd4",Ht?.density??.0089);let i=new bt(new go(210,24,14),new Pn({side:ln,depthWrite:!1,uniforms:{horizon:{value:Ht?new Pe(Ht.sky[0]):new Pe(.67,.8,.74)},zenith:{value:Ht?new Pe(Ht.sky[1]):new Pe(.27,.58,.72)}},vertexShader:"varying vec3 skyDir; void main(){skyDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 horizon,zenith; varying vec3 skyDir; void main(){vec3 d=normalize(skyDir);float h=smoothstep(-.055,.72,d.y);
      vec3 c=mix(horizon,zenith,h);
      float sun=max(0.,dot(d,normalize(vec3(-.52,.34,-.79))));c+=vec3(.18,.105,.035)*pow(sun,13.);
      gl_FragColor=vec4(c,1.);
      #include <colorspace_fragment>
    }`}));i.renderOrder=-5,t.add(i);let s=new Mo("#fffae3","#a3b9a4",1.58),r=new bo(Ht?.sun??"#ffe8bd",1.54);r.position.set(-45,67,-19),t.add(s,r);let o=Zp(t),a=Cp(t),c=Tp(t),l=bp(t),h=1,u=jp(h);t.add(u);let d=new bt(new uo(1,20),new Zt({color:"#174c50",transparent:!0,opacity:.31,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.scale.set(.8,1.58,1),t.add(d);let p=new bt(new wi(.65,1,22),new Zt({color:"#e0f4e0",transparent:!0,depthWrite:!1,opacity:0}));p.rotation.x=-Math.PI/2,t.add(p);let m=new pn(63,1,.16,255);t.add(m);let _=_y(m),g=new U,f=new U,v=new U,S=gy(t),x=$p(t),T=window.matchMedia("(prefers-reduced-motion: reduce)"),b=0,A=0,R=1,y=-100,M=0,C=58,D=0,L=0;function N(){let O=n.clientWidth,H=n.clientHeight;!O||!H||b===O&&A===H||(b=O,A=H,R=b/A,e.setPixelRatio(Math.min(window.devicePixelRatio||1,R<.85?1.65:1.6)),e.setSize(b,A,!1),m.aspect=R,C=R<.9?66+$e((.9-R)*13,0,7):64,m.fov=C,m.updateProjectionMatrix())}function B(O,H,V,j=!1){N(),h!==H.level&&(t.remove(u),u.traverse(de=>{de.isMesh&&(de.geometry.dispose(),de.material.dispose())}),h=H.level,u=jp(h),t.add(u)),M+=O;let ie=V==="ready",ae=V==="running",xe=!!H.crash,Ne=ie?-.28:H.s,qe=Ot(Ne,H.route),Ye=ct(Ne,H.u),J=jt(Ne,qe),Q=ae||xe?H.steering:0,_e=ae&&H.hitTime>.48?Math.sin(H.hitTime*52)*(H.hitTime-.48)*.22:0,Le=(ae||xe)&&H.smoothSteering,Te=ae||xe?H.turnAngle*(Le?.82:1):0,st=Q*(Le?.73:1),Tt=Le&&!j?1-Math.exp(-12*O):1;D+=(Te-D)*Tt,L+=(st-L)*Tt;let P=J+D,dt=He(Ne,qe);if(u.position.set(Ye.x,dt+.072+H.altitude+Math.sin(M*3.2+Ne*.6)*(ae?.025:.016),Ye.z),u.rotation.order="YXZ",u.rotation.y=-P,u.rotation.x=H.pitch-(H.flying||xe?0:Math.atan(H.downhill)*.81)+.012*Math.sin(M*2.7)+(xe?H.crash.forwardSpeed*.0023:ae?H.speed*.0023:0),u.rotation.z=L*.15+_e,d.position.set(Ye.x+.12,dt+.025,Ye.z+.07),d.rotation.x=-Math.PI/2-Math.atan(wr(Ne,qe)),d.material.opacity=.31/(1+H.altitude*.55),d.rotation.z=-P,u.visible=!xe,d.visible=!xe,x(O,u,H,T.matches),p.visible=ae&&H.landTime>0,p.visible){let de=1-H.landTime/.48,Be=.65+de*2;p.position.set(Ye.x,dt+.057,Ye.z),p.scale.set(Be,Be,1),p.material.opacity=.65*(1-de)}let Oe=$e((.95-R)/.5,0,1),Fe=ie?0:Ne,Me=1-Ue(he-17,he+46,Fe),Lt=(ie?5.8:4.85)+1.62*Oe+Me*(.65+1*Oe),ve=Fe-Lt*Math.cos(J),Je=Ot(ve,H.route),Yt=ze(ve,Je),Bt=Je===qe?it(ve,qe)-it(Ne,qe):0,I=$e(H.u+Bt,Yt.left+.43,Yt.right-.43),E=ct(ve,I),G=(ie?1.99:1.46)+.32*Oe+Me*(.68+.5*Oe);f.set(E.x,He(ve,Je)+G+H.altitude*.86,E.z);let Z=Math.atan2(Ye.x-E.x,E.z-Ye.z),ee=Z+.34*$e(jt(Fe+10,qe)-Z,-.17,.17),Y=ie?.31-.98*Oe:.22,Re=Fe+13.5*Math.cos(ee),le=He(Re,Ot(Re,H.route));g.set(Ye.x+Math.sin(ee)*13.5,dt+.78*(le-dt)+Y+H.altitude*.78,Ye.z-Math.cos(ee)*13.5);let be=j?1:1-Math.exp(-13*O);m.position.lerp(f,be),v.lerp(g,be),m.lookAt(v),ae&&!Le&&!T.matches&&m.rotateZ(-Q*Math.min(.012,H.speed*5e-4));let we=C+Me*(1+4.5*Oe)+(ae&&!T.matches?Math.min(6.1,Ps(H)*.2)+(H.boostTime>0||H.jetTime>0?4.2:0):0),se=j?we:m.fov+(we-m.fov)*(1-Math.exp(-4*O));Math.abs(se-m.fov)>.009&&(m.fov=se,m.updateProjectionMatrix()),_(O,H.speed,ae&&!T.matches&&!H.flying),i.position.copy(m.position),j&&S.clear(),S.update(O,u,H,ae),(M-y>1/30||j)&&(o(M,Ne,H.route),y=M),a(M,H,T.matches),c(H,V),l(M,H,T.matches),e.render(t,m)}return{frame:B,resize:N}}var em=xt(()=>{Qo();di();uu();Ep();wp();Ip();Jp();Mu();Qi();qt()});function vy(n,e,t,i){n.save(),n.translate(e,t),n.lineWidth=1.6,n.lineJoin="round",n.fillStyle=i?"#365e50":"#ffd15a",n.strokeStyle=i?"#ededdc":"#594b2e",n.fillRect(-6,-6.5,12,13),n.strokeRect(-6,-6.5,12,13),n.fillStyle=i?"#365e50":"#594b2e",n.fillRect(-2.6,-8.7,5.2,2.4),i?(n.strokeStyle="#f0f5da",n.lineWidth=1.8,n.beginPath(),n.moveTo(-3.5,0),n.lineTo(-.9,2.5),n.lineTo(3.7,-2.7),n.stroke()):(n.fillStyle="#354637",n.beginPath(),n.moveTo(.6,-4.7),n.lineTo(-3.6,.8),n.lineTo(-.4,.8),n.lineTo(-1.1,4.8),n.lineTo(3.6,-1),n.lineTo(.4,-1),n.closePath(),n.fill()),n.restore()}function tm(n,e,t={}){let i=n.clientWidth||300,s=142,r=Math.min(devicePixelRatio||1,2);n.width=Math.round(i*r),n.height=s*r;let o=n.getContext("2d");o.setTransform(r,0,0,r,0,0);let a=1/0,c=-1/0;for(let _=0;_<=It;_+=12)for(let g of _>=he&&_<Xe?Ct:["shared"]){let f=ze(_,g);a=Math.min(a,ct(_,f.left).x),c=Math.max(c,ct(_,f.right).x)}let l=_=>10+_/It*(i-20),h=(_,g)=>10+103*(ct(_,g).x-a)/(c-a);o.fillStyle="#e9ebd7",o.fillRect(0,0,i,s);function u(_,g,f,v){let S=Math.ceil((g-_)/5);o.beginPath();for(let x=0;x<=S;x++){let T=_+(g-_)*x/S,b=ze(T,f).left,A=[l(T),h(T,b)];x?o.lineTo(...A):o.moveTo(...A)}for(let x=S;x>=0;x--){let T=_+(g-_)*x/S;o.lineTo(l(T),h(T,ze(T,f).right))}o.closePath(),o.fillStyle=v,o.fill()}u(0,he,"shared","#83aba0"),u(Xe,It,"shared","#83aba0");for(let _ of Ct)u(he,Xe,_,xy[_]);for(let _ of[he,Xe])o.strokeStyle="#54695a",o.setLineDash([2,3]),o.beginPath(),o.moveTo(l(_),10),o.lineTo(l(_),115),o.stroke();o.setLineDash([]),o.font="12px system-ui, sans-serif",o.fillStyle="#344e43",o.textAlign="left",o.fillText("\uCD9C\uBC1C",7,134),o.textAlign="right",o.fillText(Vs(It)+" \uACB0\uC2B9",i-7,134);let d=[.61,.32,.8].map(_=>he+(Xe-he)*_),p=[];o.textAlign="center",o.lineJoin="round",o.lineWidth=4;for(let[_,g]of Ct.entries()){if(!t[g])continue;let f=Math.floor(t[g]).toLocaleString("ko-KR")+" m",v=o.measureText(f).width/2+10,S=d.find(T=>Math.abs(l(T)-l(Li[g].s))>v&&Math.abs(l(T)-l(e.s))>v)||d[0],x=h(S,it(S,g))+4;o.strokeStyle="#f6f4e4",o.strokeText(f,l(S),x),o.fillText(f,l(S),x),p.push(["\uC704","\uAC00\uC6B4\uB370","\uC544\uB798"][_]+" "+f)}let m=[];for(let[_,g]of Ct.entries()){let f=Li[g],v=e.boostCells.includes(g);vy(o,l(f.s),h(f.s,f.u),v),m.push(["\uC67C\uCABD","\uAC00\uC6B4\uB370","\uC624\uB978\uCABD"][_]+" "+f.s+" m "+(v?"\uC218\uC9D1":"\uBBF8\uC218\uC9D1"))}n.setAttribute("aria-label","\uC138 \uBB3C\uAE38\uACFC \uD604\uC7AC \uC704\uCE58"+(p.length?". \uCD5C\uACE0 \uAC70\uB9AC "+p.join(", "):"")+". \uBD80\uC2A4\uD130 \uC804\uC9C0 "+m.join(", ")),o.beginPath(),o.arc(l(e.s),h(e.s,e.u),4.5,0,Math.PI*2),o.fillStyle="#fdf6db",o.fill(),o.strokeStyle="#203e36",o.lineWidth=2,o.stroke()}var xy,nm=xt(()=>{Uo();tn();qt();xy={gorge:"#d98b55",canal:"#4b9eaf",marsh:"#8a9a50"}});var xm={};Am(xm,{startGame:()=>Ay});function Ge(n,e){let t=ne(n);t.textContent!==e&&(t.textContent=e)}function rm(){let n=Un?"\uC18C\uB9AC \uB044\uAE30":"\uC18C\uB9AC \uCF1C\uAE30";ne("sound").setAttribute("aria-pressed",String(Un)),ne("sound").setAttribute("aria-label",n),ne("sound").title=n}function yl(){if(Un)try{let n=window.AudioContext||window.webkitAudioContext;if(!n)return;if(!Et){Et=new n,ko=Et.createOscillator(),ko.type="triangle",Ho=Et.createGain(),Ho.gain.value=0;let e=Et.createBiquadFilter();e.type="lowpass",e.frequency.value=360,ko.connect(e).connect(Ho).connect(Et.destination),ko.start();let t=Et.createBuffer(1,Et.sampleRate,Et.sampleRate),i=t.getChannelData(0);bu=t;for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;let s=Et.createBufferSource();s.buffer=t,s.loop=!0,zo=Et.createBiquadFilter(),zo.type="bandpass",zo.Q.value=.72,Vo=Et.createGain(),Vo.gain.value=0,s.connect(zo).connect(Vo).connect(Et.destination),s.start()}Et.state==="suspended"&&Et.resume().catch(()=>{})}catch{}}function Os(n,e=0){if(!Et||!Ho)return;let t=Et.currentTime;if(ko.frequency.setTargetAtTime(39+e*(4.3+K.level*.1),t,.085),Ho.gain.setTargetAtTime(n&&Un?.014+Math.min(.031,e*8e-4):0,t,.055),Vo){let i=Math.min(1,K.jetTime*1.6);zo.frequency.setTargetAtTime(400+e*30+i*420,t,.1),Vo.gain.setTargetAtTime(Un&&e>0&&!Jt&&lt==="running"?(Math.min(.044,e*95e-5)+i*.015)*(K.flying?.5:1):0,t,.09)}}function Wo(n,e=.17){if(!Et||!Un||Et.state!=="running")return;let t=Et.currentTime,i=Et.createOscillator(),s=Et.createGain();i.type="sine",i.frequency.setValueAtTime(n,t),i.frequency.exponentialRampToValueAtTime(n*1.18,t+e),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.063,t+.013),s.gain.exponentialRampToValueAtTime(1e-4,t+e),i.connect(s).connect(Et.destination),i.start(t),i.stop(t+e+.02)}function yy(n){if(!Et||!bu||!Un||Et.state!=="running")return;let e=Et.currentTime,t=Et.createBufferSource(),i=Et.createGain(),s=Et.createBiquadFilter();t.buffer=bu,s.type="lowpass",s.Q.value=.72,s.frequency.setValueAtTime(2400,e),s.frequency.exponentialRampToValueAtTime(240,e+.23),i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(Math.min(.25,.12+n*.002),e+.007),i.gain.exponentialRampToValueAtTime(.034,e+.05),i.gain.exponentialRampToValueAtTime(.075,e+.073),i.gain.exponentialRampToValueAtTime(1e-4,e+.25),t.connect(s).connect(i).connect(Et.destination),t.start(e),t.stop(e+.26)}function am(){for(let n of om)wu[n]=K[n]}function cm(){Fs=0,_l=0,Go=performance.now(),vl=Go,am()}function is(n){if(Jt||lt!=="running"||K.ended||n<=Go)return;let e=Math.min(.12,(n-Go)/1e3);Go=n;let t=mi.has("KeyD")||mi.has("ArrowRight"),i=mi.has("KeyA")||mi.has("ArrowLeft");for(;e>1e-9&&!K.ended;){ts&&K.elapsed>=ts.until&&(ts=null);let s=Pt?.drag||ts,r=s&&!mi.size?tp(s,K):Number(t)-Number(i),o=Math.min(e,Ls-Fs);if(_l+=r*o,Fs+=o,e-=o,Fs>=Ls-1e-9){am();let a=Sp(K,_l/Ls,Ls,Xo);Fs=0,_l=0,a&&Ey(a)}}K.ended&&(Yo(),fm())}function lm(n){return"\uC218\uB85C \uAC00\uC18D "+n.pads+"\uD68C \xB7 \uBCF4\uC870 \uBD80\uC2A4\uD130 "+n.boostsUsed+"\uD68C \xB7 \uC810\uD504 "+n.jumps+"\uD68C"+(n.longestJump>0?" \xB7 \uCD5C\uC7A5 \uC810\uD504 "+n.longestJump.toFixed(1)+" m":"")+(n.pickedCell?" \xB7 \uC804\uC9C0 \uD68D\uB4DD "+n.cellCount+"/3":"")}function Fi(){let n=qn(ht.level),e=n.level===Gs,t=!Or||Fr||gi||Ns||Xn;for(let c of ne("course-panel").querySelectorAll("button")){let l=c.dataset.stage,h=un(l),u=as(ht,l);c.disabled=t||!u;let d=rn[rn.indexOf(h)-1],p=u?ht.completedCourses.includes(l)?"\uC644\uC8FC \xB7 "+h.description:h.description:d.name+" \uC644\uC8FC \uD6C4 \uC5F4\uB9BC",m=c.querySelector(".choice-note");m.textContent!==p&&(m.textContent=p)}let i=ht.recent[0];if(ne("arrival").hidden=i?.arrivalVisit!==ns,!ne("arrival").hidden){Ge("arrival-title",un(i.course).name+" \uC644\uC8FC!");let c=[Math.floor(i.distance).toLocaleString("ko-KR")+" m"];Number.isFinite(i.time)&&c.push(i.time.toFixed(1)+"\uCD08"),Number.isFinite(i.peak)&&c.push("\uCD5C\uACE0 "+Math.round(i.peak*3.6)+" km/h"),Number.isFinite(i.boostsUsed)?c.push(lm(i)):Number.isFinite(i.jumps)&&c.push("\uC810\uD504 "+i.jumps+"\uD68C"),Ge("arrival-info",c.join(" \xB7 "))}Ge("dock-cells",ht.boostCells.length+" / "+Ct.length),Ge("boat-name",n.name),Ge("boat-level",n.level+" / "+Gs+"\uB2E8\uACC4");let s=n.endurance/(te.flow?.draw??1);Ge("specs","\uC21C\uD56D "+Math.round(n.cruise*3.6)+" km/h \xB7 \uB3D9\uB825 \uC57D "+Math.round(s)+"\uCD08"),Ge("dock-parts","\uBD80\uD488 "+ht.parts+"\uAC1C"),Ge("result-parts","\uBCF4\uC720 "+ht.parts+"\uAC1C");let r=os(ht);ne("continue-course").hidden=!(ht.completedCourses.includes(te.id)&&!ht.completedCourses.includes(r.id)),ne("continue-course").disabled=t,Ge("continue-course","\uB2E4\uC74C \uCF54\uC2A4 \xB7 "+r.name+" \u203A");let o=Ws(ht,te.id).best,a=te.id==="basin"&&!ht.courseRecords;Ge("best",o?"\uCD5C\uACE0 "+Math.floor(o).toLocaleString("ko-KR")+" m":a&&ht.best?"\uC774\uC804 \uCF54\uC2A4 "+ht.best.toFixed(0)+" m":a&&ht.legacyBest?"\uC2DC\uD5D8 \uAE30\uB85D "+ht.legacyBest.toFixed(0)+" m":"\uCD5C\uACE0 \uAE30\uB85D \u2014");for(let c of["dock-upgrade","result-upgrade"]){let l=ne(c);l.textContent=e?"\uCD5C\uC885 \uAC1C\uC870 \uC644\uB8CC":n.level+1+"\uB2E8\uACC4 \uAC1C\uC870 \xB7 "+n.cost+"\uAC1C",l.disabled=e||ht.parts<n.cost||t||Mn>0,l.setAttribute("aria-label",e?"10\uB2E8\uACC4 \uCD5C\uC885 \uAC1C\uC870 \uC644\uB8CC":qn(n.level+1).name+"\uB85C \uAC1C\uC870, \uBD80\uD488 "+n.cost+"\uAC1C \uD544\uC694")}ne("launch").disabled=t,ne("retry").disabled=t||!!Wn?.cleared||Mn>0,ne("course-picker").disabled=t,ne("cell-map").disabled=t,ne("next-course").disabled=t||!!Wn||Mn>0,ne("dock").disabled=t||!!Wn?.cleared||Mn>0,Wn&&!gi&&Mn<=0&&(ne("result-upgrade").disabled=!1,Ge("result-upgrade","\uBD80\uD488 \uC815\uC0B0 \uB2E4\uC2DC \uC2DC\uB3C4"),ne("result-upgrade").setAttribute("aria-label","\uBD80\uD488 \uC815\uC0B0 \uB2E4\uC2DC \uC2DC\uB3C4"))}function My(){Xn||(Xn=!0,Jt=!0,Bs(),Os(!1),location.reload())}function qo(n){if(Xn||n.revision<ht.revision)return!1;if(n.visit!==ns||n.activeCourse!==te.id)return My(),!1;if(ht=n,lt==="ready"&&K.level!==ht.level)K=Dr(1,ht.level,ht.boostCells);else for(let e of ht.boostCells)Kh(K,e);return Jt&&!ne("map-panel").hidden&&Pu(),Fi(),!0}function Sy(){ne("history-list").replaceChildren();for(let n of ht.recent){let e=document.createElement("li"),t=un(n.course),i=n.trial?"100 m \uC2DC\uD5D8":t?t.name+" \xB7 "+n.level+"\uB2E8\uACC4":"300 m \uCF54\uC2A4";e.textContent=i+" \xB7 "+n.distance.toFixed(1)+" m \xB7 "+n.time.toFixed(1)+"\uCD08"+(n.crash?" \xB7 \uCDA9\uB3CC":""),ne("history-list").append(e)}}async function hm(n){gi=!0,Fi();try{let e=await Nr.credit(n);if(Xs(n.id),n.pickedCell&&Xs(dm(n.visit,n.course,n.pickedCell)),Wn?.id===n.id&&(Wn=null),!qo(e))return;Sy();let t=wl(n.distance,un(n.course));Ge("earned","\uCF54\uC2A4 "+t+"% \xB7 \uBD80\uD488 +"+n.earned+"\uAC1C")}catch{Wn=n,Ge("earned","\uC815\uC0B0\uC744 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}finally{gi=!1,Xn||Fi(),!Xn&&lt==="result"&&!ne("result-layer").hidden&&!ne("result").contains(document.activeElement)&&(Wn?ne("result-upgrade"):K.cleared?ne("next-course"):ne("retry")).focus({preventScroll:!0})}}async function um(){if(Wn&&!gi){await hm(Wn);return}if(!Or||gi||Fr||Ns||Xn||lt==="running")return;let n=ht.level;Fr=!0,Fi();try{let e=await Nr.upgrade(n,ns);if(!qo(e))return;e.level>n&&(Au(),Ge("announce",e.level+"\uB2E8\uACC4 \uAC1C\uC870 \uC644\uB8CC \xB7 "+qn(e.level).name),Wo(780))}catch{Ge("announce","\uAC1C\uC870\uB97C \uC800\uC7A5\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uB2E4\uC2DC \uB20C\uB7EC \uC8FC\uC138\uC694.")}finally{Fr=!1,Xn||Fi()}}function Bs(){mi.clear(),K.keyHold=0,ts=null,Pt!==null&&Fn.hasPointerCapture(Pt.id)&&Fn.releasePointerCapture(Pt.id),Pt=null}function Ml(n){lt=n,im.dataset.mode=lt,lt!=="result"&&(Mn=0),ne("launch-card").hidden=lt!=="ready",ne("instruments").hidden=lt!=="running",ne("boost").hidden=lt!=="running",ne("result-layer").hidden=lt!=="result"||Mn>0,ne("impact-note").hidden=Mn<=0,Fi()}function by(n){if(n.hitTime>.18){if(n.hitKind==="log"||n.hitKind==="lock")return il[n.hitKind]+" \uC811\uCD09";if(n.hitKind==="rock")return"\uBC14\uC704 \uC811\uCD09";if(n.hitKind==="ramp")return"\uC606\uBA74 \uC811\uCD09";if(n.hitKind==="post")return"\uAE30\uB465 \uC811\uCD09";if(n.hitKind==="buoy")return"\uBD80\uD45C \uC811\uCD09"}return n.flying?n.vy<-.5?"\uB099\uD558 \uC911":n.jetTime>0&&n.jetEntry.kind==="ramp"?"\uB3C4\uC57D \uAC00\uC18D":"\uACF5\uC911":n.stoppedFor>0?"\uBCF4\uC870 \uB300\uAE30 "+Math.max(0,Math.ceil(lu-n.stoppedFor))+"\uCD08":n.boostTime>0?"\uBCF4\uC870 \uAC00\uC18D":n.ramp?n.ramp.kind==="ramp"?"\uB3C4\uC57D \uAC00\uC18D":"\uB3C4\uC57D \uC900\uBE44":n.landTime>0?"\uCC29\uC218":n.hitTime>.45?"\uC811\uCD09 \uAC10\uC18D":n.jetTime>0?n.jetEntry.kind==="ramp"?"\uB3C4\uC57D \uAC00\uC18D":"\uC218\uBB38 \uAC00\uC18D":n.chargeTime>0?"\uBC30\uD130\uB9AC \uCDA9\uC804":n.waterEffect?il[n.waterEffect]:n.coastAccelerating?"\uBB34\uB3D9\uB825 \uAC00\uC18D":n.battery<=0?"\uAD00\uC131 \uC8FC\uD589":n.downhill>.21?"\uB0B4\uB9AC\uB9C9 "+Math.round(n.downhill*100)+"%":n.shallow>.59?"\uC595\uC740 \uBB3C":n.current>.6?"\uBE60\uB978 \uBB3C\uC0B4":"\uC8FC\uD589 \uC911"}function Yo(){Ge("distance",Math.floor(K.s).toLocaleString("ko-KR"));let n=Ps(K);Ge("speed",String(Math.round(n*3.6))),Ge("battery",Math.ceil(K.battery*100)+"%"),ne("progress-fill").style.transform="scaleX("+K.s/It+")",ne("battery-fill").style.transform="scaleX("+K.battery+")",Ge("zone",by(K));let e=ne("boost"),t=hu(K);e.disabled=!t,e.classList.toggle("reserve-ready",K.battery===0&&t),e.classList.toggle("firing",K.boostTime>0);let i=K.boostCells.length;Ge("boost-label",i?K.boostTime>0?"\uAC00\uC18D \uC911":K.boostLeft?"\uBCF4\uC870 \uBD80\uC2A4\uD130":"\uC0AC\uC6A9 \uC644\uB8CC":"\uC804\uC9C0 \uD544\uC694"),Ge("boost-remaining",i?K.boostLeft+"/"+i+"\uD68C":"0\uD68C"),e.setAttribute("aria-label",i?"\uBCF4\uC870 \uBD80\uC2A4\uD130 "+i+"\uD68C \uC911 "+K.boostLeft+"\uD68C \uB0A8\uC74C":"\uBCF4\uC870 \uBD80\uC2A4\uD130 \uC7A0\uAE40. \uBB3C\uAE38\uC5D0\uC11C \uC804\uC9C0\uB97C \uD68D\uB4DD\uD558\uC138\uC694.");let s=ap(K);ne("overhead-cue").hidden=!s,s&&Ge("overhead-cue",s.cue+" \xB7 "+Math.ceil(s.s-K.s)+" m");let r=Li[K.route],o=r?Math.ceil(r.s-K.s):0,a=r&&!K.boostCells.includes(r.branch)&&o>0&&o<Math.max(35,Math.min(78,K.speed*3)),c=K.pickupTime>0||a;if(ne("instruments").classList.toggle("jet-active",K.jetTime>0),ne("course-cue").classList.toggle("cell-cue",!!c),c){ne("course-cue").hidden=!1,Ge("course-cue",K.pickupTime>0?"\uC804\uC9C0 \uD68D\uB4DD \xB7 \uB9E4 \uC8FC\uD589 "+i+"\uD68C":"\uBD80\uC2A4\uD130 \uC804\uC9C0 \xB7 "+o+" m");return}if(K.jetTime>0){ne("course-cue").hidden=!1;let d=K.jetEntry.kind==="ramp"?"\uB3C4\uC57D\uB300":"\uC218\uBB38";Ge("course-cue",d+" \uD1B5\uACFC\u3000"+Math.round(K.jetEntry.speed*3.6)+" \u2192 "+Math.round(n*3.6)+" km/h");return}let l=Ot(K.s,K.route),h=Qc(K.s,l).find(d=>d.start>K.s&&d.start-K.s<Math.max(40,K.speed*3.1)),u=Kf(K.s,l,Math.max(46,K.speed*3));u&&(!h||u.s<h.start)?(ne("course-cue").hidden=!1,Ge("course-cue",il[u.kind]+" \xB7 "+Math.ceil(u.s-K.s)+" m")):(ne("course-cue").hidden=!h,h&&Ge("course-cue",h.name+" \xB7 "+Math.ceil(h.start-K.s)+" m"))}function Au(){Bs(),Jt=!1,ne("help-layer").hidden=!0,K=Dr(1,ht.level,ht.boostCells),Fs=0,Ml("ready"),Os(!1),Ui?.frame(0,K,lt,!0),ne("launch").focus({preventScroll:!0})}function Ru(){Jt||!Ui||lt==="running"||Mn>0||!Or||gi||Wn?.cleared||Fr||Ns||Xn||(yl(),Bs(),K=Dr(1,ht.level,ht.boostCells),Xo="analog",sm=crypto.randomUUID?.()||Date.now().toString(36)+"-"+Math.random().toString(36).slice(2),cm(),Ml("running"),Yo(),Tu=0,Ui.frame(0,K,lt,!0),Wo(340,.115),Ge("announce","\uCD9C\uBC1C. \uC88C\uC6B0\uB85C \uC870\uD5A5\uD558\uC138\uC694."))}function dm(n,e,t){return"cell."+n+"."+e+"."+t}function Ey(n){let e={id:dm(ns,K.course,n),kind:"cell",course:K.course,visit:ns,branch:n};Rl(e),Nr.collect(e).then(t=>{Xs(e.id),qo(t)}).catch(()=>{}),Wo(880,.16),Yo(),Ge("announce","\uBD80\uC2A4\uD130 \uC804\uC9C0\uB97C \uBAA8\uC558\uC5B4\uC694. \uB9E4 \uC8FC\uD589 "+K.boostCells.length+"\uD68C \uCDA9\uC804\uB429\uB2C8\uB2E4.")}function Cu(){is(performance.now()),!(lt!=="running"||Jt)&&(yl(),vp(K)&&(Wo(540,.18),Yo(),Ge("announce","\uBCF4\uC870 \uBD80\uC2A4\uD130\uB97C \uC0AC\uC6A9\uD588\uC2B5\uB2C8\uB2E4. \uB0A8\uC740 \uD69F\uC218 "+K.boostLeft+"\uD68C.")))}function fm(){if(lt!=="running")return;K.crash&&(Mn=window.matchMedia("(prefers-reduced-motion: reduce)").matches?.22:Kp,Ge("impact-note",K.crash.name+" \uCDA9\uB3CC \xB7 \uC120\uCCB4 \uD30C\uC190")),Bs(),Os(!1),Ml("result");let n=Math.floor(K.s*10)/10,e={id:sm,visit:ns,course:K.course,branch:K.route,distance:n,time:K.elapsed,route:Vs(It),power:K.power,peak:K.peak,jumps:K.jumps,longestJump:K.longestJump,pads:K.pads,boostsUsed:K.boostCells.length-K.boostLeft,split:K.split,cleared:K.cleared,level:K.level,earned:wl(n,te)};K.crash&&(e.crash=K.crash.name),K.pickedCell&&(e.pickedCell=K.pickedCell,e.cellCount=K.boostCells.length),Rl(e),Ge("result-title",K.crash?K.crash.name+" \uCDA9\uB3CC":K.cleared?It.toLocaleString("ko-KR")+" m \uC644\uC8FC!":e.distance>Ws(ht,K.course).best?"\uCD5C\uACE0 \uAE30\uB85D \uAC31\uC2E0":"\uC8FC\uD589 \uC885\uB8CC"),ne("next-course").hidden=!K.cleared,Ge("next-course",xl?"\uB2E4\uC74C \uCF54\uC2A4 \xB7 "+xl.name:"\uB2E4\uB978 \uCF54\uC2A4 \uC120\uD0DD"),ne("retry").className=K.cleared?"secondary":"primary",Ge("result-distance",e.distance.toFixed(1)),Ge("result-meta",qn(K.level).name+" \xB7 "+e.time.toFixed(1)+"\uCD08"+(K.crash?" \xB7 \uC218\uBA74 \uC704 "+K.altitude.toFixed(1)+" m\uC5D0\uC11C \uD30C\uC190":"")),Ge("result-features",lm(e));let t=e.split?" \xB7 \uD569\uB958 \uC2DC \uBC30\uD130\uB9AC "+Math.round(e.split.battery*100)+"%":"",i=K.bestCoast,s=i&&i.to-i.from>.3?" \xB7 \uBB34\uB3D9\uB825 \uB0B4\uB9AC\uB9C9 "+Math.round(i.from*3.6)+" \u2192 "+Math.round(i.to*3.6)+" km/h":"";Ge("split","\uCD5C\uACE0 \uC18D\uB3C4 "+Math.round(K.peak*3.6)+" km/h"+s+t),ne("history").open=!1,Ge("earned","\uC8FC\uD589 \uBD80\uD488 \uC815\uC0B0 \uC911"),hm(e),Ge("announce",ne("result-title").textContent+" "+e.distance+"\uBBF8\uD130"),K.crash?yy(K.crash.speed):((K.cleared?ne("next-course"):ne("retry")).focus({preventScroll:!0}),Wo(K.cleared?710:280,.26))}async function Iu(n){if(!(lt==="running"||!Or||gi||Fr||Ns||Xn||Wn||!as(ht,n))){if(n===te.id){Sl();return}Ns=!0,Fi();try{let e=await Nr.enter(n,ns);qo(e)}catch{Ge("course-rule","\uCF54\uC2A4 \uBCC0\uACBD\uC744 \uC800\uC7A5\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uB2E4\uC2DC \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.")}finally{Ns=!1,Xn||Fi()}}}function Ty(){Ge("stage-name",te.name),ne("stage-tip").hidden=!te.reaches,te.reaches&&Ge("stage-tip",te.description),Ge("dock-length",Vs(It)),Ge("result-course",te.name),Ge("result-length",Vs(It)),Ge("finish-distance"," / "+It.toLocaleString("ko-KR")+" m"),document.title=te.name+" \xB7 RC \uBCF4\uD2B8 \uB7A0\uB9AC",Fn.setAttribute("aria-label",te.name+" \uC8FC\uD589 \uD654\uBA74. \uC2A4\uD398\uC774\uC2A4\uBC14\uB098 \uCD9C\uBC1C \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uCD5C\uB300 \uCD9C\uB825\uC73C\uB85C \uCD9C\uBC1C\uD569\uB2C8\uB2E4. \uC88C\uC6B0 \uBC29\uD5A5\uD0A4\uB098 \uB4DC\uB798\uADF8\uB85C \uC870\uD5A5\uD569\uB2C8\uB2E4.");for(let n of rn){let e=document.createElement("button");e.type="button",e.className="course-choice",e.dataset.stage=n.id,n===te&&e.setAttribute("aria-current","true");let t=document.createElement("span");t.className="course-photo",t.setAttribute("aria-hidden","true"),t.style.backgroundImage="url(./courses/"+n.id+".webp)";let i=document.createElement("span");i.className="choice-body";let s=document.createElement("strong");s.textContent=n.name;let r=document.createElement("span");r.className="choice-distance",r.textContent=n.length.toLocaleString("ko-KR")+" m";let o=document.createElement("span");o.className="choice-note",o.textContent=n.description,i.append(s,r,o),e.append(t,i),e.addEventListener("click",()=>Iu(n.id)),ne("course-panel").append(e)}}function Pu(){let n=Ws(ht,te.id).branches;ne("map-caption").hidden=!Object.values(n).some(t=>t>0),Ge("map-cells-count",K.boostCells.length+" / "+Ct.length);let e=["\uC67C\uCABD","\uAC00\uC6B4\uB370","\uC624\uB978\uCABD"];ne("cell-locations").replaceChildren(...Ct.map((t,i)=>{let s=document.createElement("li"),r=document.createElement("b"),o=document.createElement("span"),a=K.boostCells.includes(t);return s.classList.toggle("taken",a),r.textContent=e[i]+" \xB7 "+Li[t].s+" m",o.textContent=a?"\u2713 \uC218\uC9D1":"\u03DF \uBBF8\uC218\uC9D1",s.append(r,o),s})),tm(ne("route-map"),K,n)}function ks(n="guide"){if(is(performance.now()),Jt||!Ui||lt==="result")return;Jt=!0,Bs(),Os(!1),ne("help-layer").hidden=!1,Eu=document.activeElement;let e=n==="map",t=n==="courses";ne("course-panel").hidden=!t,ne("course-rule").hidden=!t,ne("guide").hidden=e||t,ne("map-panel").hidden=!e,ne("help-layer").classList.toggle("choosing",t),Ge("help-title",t?"\uCF54\uC2A4 \uC120\uD0DD":e?te.name+" \uC9C0\uB3C4":lt==="running"?"\uC77C\uC2DC\uC815\uC9C0":"\uC870\uC791\uBC95"),e&&Pu(),Ge("resume",lt==="running"?"\uACC4\uC18D \uC8FC\uD589":"\uB3CC\uC544\uAC00\uAE30"),ne("abort").hidden=lt!=="running";let i=t?ne("course-panel").querySelector("[aria-current]"):ne("resume");i.focus({preventScroll:!0}),t&&i.scrollIntoView({block:"nearest"})}function Sl(){Jt&&(Jt=!1,ne("help-layer").hidden=!0,cm(),lt==="ready"&&Eu?.getClientRects().length&&Eu.focus({preventScroll:!0}))}function Lu(n,e){is(performance.now()),!(!Pt||Pt.id!==n.pointerId)&&(!e&&lt==="running"&&Pt.drag&&(jh(Pt.drag,K,n.clientX,Fn.clientWidth),ts=np(Pt.drag,K)),Pt=null)}function wy(n,e){let t=[...e.querySelectorAll("button:not(:disabled),summary")].filter(i=>i.getClientRects().length);t.length&&(n.shiftKey&&document.activeElement===t[0]&&(n.preventDefault(),t.at(-1).focus()),!n.shiftKey&&document.activeElement===t.at(-1)&&(n.preventDefault(),t[0].focus()))}function pm(){lt==="running"&&!Jt?ks():Bs()}function mm(){Or&&!Xn&&!Ns&&!gi&&Nr.read().then(qo).catch(()=>{})}function gm(n){Bs(),Jt=!0,Os(!1),ne("error-layer").hidden=!1,Ge("error-message",n)}function _m(n){let e=Math.max(0,Math.min((n-vl)/1e3,.12));if(vl=n,!Jt){if(lt==="running"&&(is(n),lt==="running"&&n-Tu>=60&&(Yo(),Os(K.battery>0||K.boostTime>0,K.speed),Tu=n)),lt==="running"){let t=$e(Fs/Ls,0,1);Object.assign(Su,K);for(let i of om)Su[i]=wu[i]+(K[i]-wu[i])*t;Ui.frame(e,Su,lt)}else Ui.frame(e,K,lt);Mn>0&&(Mn=Math.max(0,Mn-e),Mn===0&&(ne("impact-note").hidden=!0,ne("result-layer").hidden=!1,Fi(),gi||ne("retry").focus({preventScroll:!0})))}requestAnimationFrame(_m)}function Ay(n,e,t){Nr=n,ht=e,ns=ht.visit,K=Dr(1,ht.level,ht.boostCells),Un=t.sound!==!1;try{let i=localStorage.getItem("willow-creek.sound");i!==null&&(Un=i==="on")}catch{}Ty(),rm();try{Ui=Qp(Fn),Ui.frame(0,K,lt,!0),Or=!0,Ml("ready"),vl=performance.now(),requestAnimationFrame(_m)}catch(i){console.error(i),gm("3D \uADF8\uB798\uD53D(WebGL 2)\uC744 \uC9C0\uC6D0\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694.")}finally{im.setAttribute("aria-busy","false")}}var ne,im,Fn,ht,Nr,ns,Or,gi,Fr,Ns,Xn,Wn,sm,Un,Et,ko,Ho,Vo,zo,bu,lt,Jt,K,Ui,Pt,ts,Mn,Eu,xl,Xo,Fs,_l,Go,vl,Tu,mi,om,wu,Su,vm=xt(()=>{tn();em();uu();al();sl();Uo();nm();cl();Mu();$o();Cl();ne=n=>document.getElementById(n),im=ne("game"),Fn=ne("creek"),Or=!1,gi=!1,Fr=!1,Ns=!1,Xn=!1,Wn=null,sm="",Un=!0;lt="ready",Jt=!1,K=Dr(),Pt=null,ts=null,Mn=0,Eu=null,xl=rn[rn.indexOf(te)+1],Xo="analog",Fs=0,_l=0,Go=0,vl=0,Tu=0,mi=new Set,om=["s","u","steering","turnAngle","altitude","pitch"],wu={},Su={};Fn.addEventListener("pointerdown",n=>{if(is(performance.now()),Jt||lt!=="running"||Pt!==null||n.pointerType==="mouse"&&n.button!==0)return;n.preventDefault(),yl(),ts=null;let e=n.pointerType==="mouse"?"mouse":"touch";Pt={id:n.pointerId,x:n.clientX,source:e,drag:null},mi.size||(Xo=e,Pt.drag=$h(K,n.clientX,e)),Fn.setPointerCapture(n.pointerId)});Fn.addEventListener("pointermove",n=>{!Pt||Pt.id!==n.pointerId||Jt||(is(performance.now()),Pt&&(Pt.drag&&jh(Pt.drag,K,n.clientX,Fn.clientWidth),Pt.x=n.clientX))});Fn.addEventListener("pointerup",n=>Lu(n,!1));Fn.addEventListener("pointercancel",n=>Lu(n,!0));Fn.addEventListener("lostpointercapture",n=>Lu(n,!0));ne("launch").addEventListener("click",Ru);ne("retry").addEventListener("click",Ru);ne("dock").addEventListener("click",Au);ne("course-picker").addEventListener("click",()=>ks("courses"));ne("continue-course").addEventListener("click",()=>Iu(os(ht).id));ne("next-course").addEventListener("click",()=>{xl?Iu(xl.id):(Au(),ks("courses"))});ne("abort").addEventListener("click",()=>{lt==="running"&&(Sl(),K.ended=!0,fm())});ne("dock-upgrade").addEventListener("click",um);ne("result-upgrade").addEventListener("click",um);ne("boost").addEventListener("click",Cu);ne("boost").addEventListener("pointerdown",n=>{(n.pointerType==="touch"||n.pointerType==="pen")&&(n.preventDefault(),Cu())});ne("sound").addEventListener("click",()=>{Un=!Un,Un?yl():Os(!1),rm();try{localStorage.setItem("willow-creek.sound",Un?"on":"off")}catch{}});ne("help").addEventListener("click",()=>ks());ne("map-button").addEventListener("click",()=>ks("map"));ne("cell-map").addEventListener("click",()=>ks("map"));ne("resume").addEventListener("click",Sl);window.addEventListener("resize",()=>{Jt&&!ne("map-panel").hidden&&Pu()});window.addEventListener("keydown",n=>{if(!(!Ui||n.altKey||n.ctrlKey||n.metaKey)){if(n.code==="Escape"){n.preventDefault(),n.repeat||(Jt?Sl():ks());return}if(n.code==="Space"&&!Jt){let e=n.target.closest?.("button,summary");if(e?.getClientRects().length&&e!==ne("launch")&&e!==ne("retry")&&e!==ne("boost")||(n.preventDefault(),n.repeat))return;lt==="running"?Cu():(lt==="ready"||!ne("result-layer").hidden&&!ne("retry").disabled)&&Ru();return}if(Jt||lt==="result"){if(Mn>0){n.code==="Tab"&&n.preventDefault();return}n.code==="Tab"&&wy(n,ne(Jt?"help-layer":"result-layer"));return}if(["KeyA","KeyD","ArrowLeft","ArrowRight"].includes(n.code)){if(is(performance.now()),lt==="result")return;n.preventDefault(),mi.add(n.code),Xo="keyboard",ts=null,Pt&&(Pt.drag=null);return}}});window.addEventListener("keyup",n=>{is(performance.now()),mi.delete(n.code)&&!mi.size&&(K.keyHold=0,Pt&&lt==="running"&&(Xo=Pt.source,Pt.drag=$h(K,Pt.x,Pt.source)))});document.addEventListener("visibilitychange",()=>{document.hidden&&pm()});window.addEventListener("blur",pm);window.addEventListener("focus",mm);window.addEventListener("pageshow",n=>{n.persisted&&mm()});Fn.addEventListener("webglcontextlost",n=>{n.preventDefault(),gm("\uADF8\uB798\uD53D \uC5F0\uACB0\uC774 \uC77C\uC2DC \uC911\uB2E8\uB410\uC5B4\uC694. \uB2E4\uC2DC \uC5F4\uBA74 \uC120\uCC29\uC7A5\uC5D0\uC11C \uC2DC\uC791\uD569\uB2C8\uB2E4.")})});Cl();tn();document.getElementById("reload").addEventListener("click",()=>location.reload());async function Ry(){let n={};try{n=JSON.parse(localStorage.getItem("willow-creek.rally.1"))||{}}catch{}let e=Zu(n),t=await e.read(),i=new URL(location.href),s=un(i.searchParams.get("course")),r=t.visit,o=!1;for(let c of Yu())t=c.kind==="cell"?await e.collect(c):await e.credit(c),s?.id===c.course&&t.recent.some(l=>l.id===c.id&&l.arrivalVisit===t.visit)&&(o=!0),Xs(c.id);s&&!o&&r===t.visit&&s.id!==t.activeCourse&&(t=await e.enter(s.id,t.visit)),i.searchParams.has("course")&&(i.searchParams.delete("course"),history.replaceState(history.state,"",i.href)),Vu(t.activeCourse);let{startGame:a}=await Promise.resolve().then(()=>(vm(),xm));a(e,t,n)}Ry().catch(n=>{console.error(n),document.getElementById("game").setAttribute("aria-busy","false"),document.getElementById("error-layer").hidden=!1,document.getElementById("error-message").textContent="\uC8FC\uD589 \uAE30\uB85D\uC744 \uC5F4 \uC218 \uC5C6\uC5B4\uC694. \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694."});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
