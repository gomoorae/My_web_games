(()=>{var jm=Object.defineProperty;var pt=(n,e)=>()=>(n&&(e=n(n=0)),e);var Qm=(n,e)=>{for(var t in e)jm(n,t,{get:e[t],enumerable:!0})};function Ie(n,e,t,i="\uAC00\uC18D \uC218\uBB38"){return{kind:"gate",start:n,offset:e,width:t,name:i}}function $e(n,e,t,i,s,r="\uB098\uB8E8 \uBC1C\uD310",o){let a=o>0;return{kind:"ramp",start:n,end:e,offset:t,width:i,rise:s,name:r,boosted:a,kick:a?o:2.2}}function vt(n,e,t,i,s,r="\uBC14\uC704 \uC5EC\uC6B8"){return{kind:"ledge",start:n,end:e,offset:t,width:i,rise:s,name:r}}var Nl=pt(()=>{});var $,Ut,ut,k,Xn,Qt,nt,ft,yt,Dt,Zt,e0,t0,n0,i0,oa,s0,r0,td,Ol=pt(()=>{Nl();$=(n,e)=>$e(n,n+12,e,6.4,1.3,"\uB098\uBB34 \uB3C4\uC57D\uB300"),Ut=(n,e)=>$e(n,n+14,e,6.6,1.78,"\uAC00\uC18D \uB3C4\uC57D\uB300",3.5),ut=(n,e)=>vt(n,n+14,e,7.2,1.36,"\uB3CC\uC5EC\uC6B8"),k=(n,e)=>Ie(n,e,7.3),Xn=n=>({...n,markerStep:59,docks:[],bars:{...n.bars,shared:[[n.fork-26,n.fork-14,-4.3,1.45],[n.fork-12,n.fork-.2,4.9,1.55],...n.bars.shared||[]]},bridges:{shared:[],gorge:[],canal:[],marsh:[],...n.bridges}}),Qt=(n,e,t=2.2,i=0)=>({kind:"log",s:n,offset:e,reach:t,phase:i}),nt=(n,e,t=85)=>({kind:"wind",s:n,end:n+t,dir:e}),ft=(n,e=1,t=0,i=68)=>({kind:"outlet",s:n,end:n+i,side:e,phase:t}),yt=(n,e,t=7,i=82)=>({kind:"ice",s:n,end:n+i,offset:e,width:t}),Dt=(n,e)=>({kind:"charge",s:n,offset:e,width:5.4}),Zt=(n,e=0,t=0)=>({kind:"lock",s:n,offset:e,phase:t}),e0=Xn({id:"timber",name:"\uC0BC\uB098\uBB34 \uC81C\uC7AC\uC18C",length:2500,fork:94,merge:2210,seed:12873,description:"\uBB3C\uC5D0 \uB72C \uD1B5\uB098\uBB34\uC758 \uC6C0\uC9C1\uC784\uC744 \uC77D\uACE0 \uBE48\uD2C8\uC73C\uB85C \uBE60\uC838\uB098\uAC00\uC138\uC694.",cellStations:{gorge:264,canal:761,marsh:1325},lanes:{gorge:[-64,12,369,.35,18],canal:[0,5,268,.65,14.7],marsh:[68,14,411,1.9,21.5]},valley:[12,452,6,294],opening:[106,163],outlet:17,flow:{width:3,speed:5.3,saving:.42,draw:.75,assist:.78},elevation:{grade:.035,drop:128,head:.051,tail:.037,shared:[[2246,2330,14],[2372,2455,13]],gorge:[[160,351,23],[505,706,24],[881,1081,25],[1269,1441,20],[1581,1769,18],[1919,2144,18]],canal:[[235,365,18],[580,778,24],[923,1110,27],[1342,1514,21],[1630,1791,18],[1964,2137,20]],marsh:[[159,539,24],[645,982,31],[1118,1489,29],[1591,1896,23],[1955,2161,21]]},features:{shared:[k(54,1.4),k(2262,4.2),$(2362,-5),k(2461,2)],gorge:[ut(164,-3),k(382,4.4),$(568,-4.8),k(804,3.5),ut(1002,-4.3),k(1214,-3.8),$(1436,4.7),k(1656,-4.1),ut(1850,4.4),k(2081,-3.4)],canal:[k(149,2.2),k(336,-4.6),Ut(522,4),k(697,-3.8),$(910,4.5),k(1093,-4.7),Ut(1350,-4.3),k(1575,3.7),k(1788,-4.7),$(1973,4),k(2116,-3)],marsh:[$(184,-3.9),k(430,3.4),$(657,4.5),k(884,-4.8),$(1103,3.1),k(1280,-4.7),$(1508,4.8),k(1746,-4),$(1961,-4.2),k(2138,2.6)]},bars:{gorge:[[430,483,-4,3.1],[853,906,4.7,2.9],[1290,1345,4.3,3.2],[1736,1798,-4.2,3.4]],canal:[[391,447,4.4,2.5],[960,1006,-4,3],[1433,1488,4.3,2.8],[1852,1906,4.1,2.9]],marsh:[[271,357,-2.5,4.8],[504,589,2.3,4.6],[758,837,-2.7,4.5],[1002,1066,3,4.7],[1397,1465,-2,4.9],[1640,1706,2.8,4.8],[1842,1903,-2.2,4.2]]},bridges:{canal:[{s:571,wood:!0,side:"right",tip:4.7,deck:3.9,marked:!0,approach:522,name:"\uC81C\uC7AC\uC18C \uC6B4\uBC18\uAD50"}]},reaches:{shared:[Qt(39,-2.6,1.8),Qt(2307,-1.4,2.8,.6),Qt(2426,3.8,2.6,2)],gorge:[Qt(221,1.5),Qt(549,3.7,2,1),Qt(729,-2.8,3.6),Qt(1162,1.2,3,2),Qt(1528,-3.8,2.7),Qt(2013,2,4,1.6)],canal:[Qt(207,-2),Qt(465,-3.2,2,1),Qt(839,2.4,2.4),Qt(1171,-3,3,2.1),Qt(1204,3.5,2.3,.8),Qt(1531,4,2.7),Qt(2036,-2.3,3.7,2.2)],marsh:[Qt(240,4.7),Qt(613,-2.1,3.6),Qt(942,1.4,3.9,1.4),Qt(1235,3.8),Qt(1589,-2.5,3.3),Qt(2019,2.8,3.9,1.8)]}}),t0=Xn({id:"windreach",name:"\uD48D\uCC28 \uD574\uD611",length:2840,fork:112,merge:2500,seed:15791,description:"\uD48D\uD5A5\uAE30\uC640 \uBE44\uC2A4\uB4EC\uD55C \uD3EC\uB9D0\uC744 \uBCF4\uACE0 \uD6A1\uB958\uC5D0 \uBC00\uB9B4 \uBC29\uD5A5\uC744 \uBBF8\uB9AC \uC7A1\uC73C\uC138\uC694.",cellStations:{gorge:904,canal:283,marsh:1490},lanes:{gorge:[-72,15,435,.1,20],canal:[0,8,323,1.4,17],marsh:[71,13,516,2.1,23]},valley:[16,580,5,219],opening:[116,190],outlet:21,flow:{width:3.25,speed:6.4,saving:.48,draw:.68,assist:1},elevation:{grade:.023,drop:89,head:.04,tail:.032,shared:[[2545,2641,12],[2708,2810,12]],gorge:[[183,494,15],[684,932,18],[1049,1328,13],[1463,1726,17],[1856,2123,14],[2190,2411,12]],canal:[[268,411,12],[549,728,13],[905,1090,17],[1350,1515,16],[1812,2004,16],[2163,2358,15]],marsh:[[190,608,21],[787,1150,23],[1304,1671,22],[1875,2381,23]]},features:{shared:[k(79,-1),$(2541,-4.7),k(2689,4.6),k(2795,-3)],gorge:[k(183,-3),ut(412,4.3),k(680,-4.5),$(822,4.5),k(1109,-3.6),ut(1358,4.9),k(1607,-4.7),$(1860,-3.9),k(2091,4.4),k(2393,-2.8)],canal:[k(171,2.4),k(383,-4.1),Ut(638,4.3),k(899,-4.5),$(1191,4.2),k(1426,-4.8),Ut(1650,4.7),k(1957,-4.1),k(2192,3.8),$(2403,-3.3)],marsh:[$(204,-3.8),k(435,4.5),$(698,-4.2),k(958,4.8),$(1238,3.9),k(1452,-4),k(1733,4.4),$(1971,-3.7),k(2211,4.5),$(2409,-3.3)]},bars:{gorge:[[500,559,3,3.3],[1024,1076,-2.7,3.8],[1720,1795,3.8,4],[2221,2282,-4,3.1]],canal:[[464,513,-3.1,2.7],[993,1040,3.7,3],[1518,1572,4,3.1],[2032,2090,-4.2,2.8]],marsh:[[273,359,2.1,5],[547,625,-2.3,4.6],[803,879,2.4,5.3],[1076,1162,-2.5,5],[1551,1640,2.4,5.2],[1805,1890,-2.2,4.7],[2292,2355,2.7,4.8]]},bridges:{gorge:[{s:1920,wood:!0,side:"left",tip:-4.1,deck:4.2,marked:!0,approach:1860,name:"\uD48D\uCC28 \uC120\uCC29\uAD50"}]},reaches:{shared:[nt(36,1,44),nt(2580,-1,82),nt(2730,1,61)],gorge:[nt(230,-1),nt(581,1),nt(745,-1,56),nt(935,1,78),nt(1224,-1,96),nt(1487,1),nt(1768,-1,70),nt(2010,1,72),nt(2304,-1,67)],canal:[nt(201,1,60),nt(426,-1,105),nt(733,1),nt(1028,-1),nt(1280,1,96),nt(1525,-1,57),nt(1734,1,117),nt(2064,-1,97),nt(2302,1,77)],marsh:[nt(233,-1,80),nt(632,1,94),nt(881,-1,57),nt(1160,1,82),nt(1351,-1,78),nt(1662,1,68),nt(1890,-1,85),nt(2130,1,77),nt(2320,-1,63)]}}),n0=Xn({id:"turbine",name:"\uC218\uCC28 \uBC1C\uC804\uC18C",length:2320,originalLength:3100,fork:106,merge:2040,seed:18919,description:"\uBB3C\uB808\uBC14\uD034 \uC55E \uBC29\uB958\uAD6C\uAC00 \uAC70\uD488\uC744 \uBFDC\uC744 \uB54C \uADF8\uCABD \uBB3C\uC0B4\uC5D0 \uBD99\uC73C\uBA74 \uAC00\uC18D\uD574\uC694.",cellStations:{gorge:1120,canal:762,marsh:247},lanes:{gorge:[-69,10,394,.85,17],canal:[0,6,325,.5,18],marsh:[65,9,461,2,20]},valley:[9,405,4,260],opening:[117,177],outlet:18,flow:{width:3,speed:5.3,saving:.42,draw:.84,assist:.78},elevation:{grade:.037,drop:124,head:.054,tail:.044,shared:[[2072,2160,18],[2211,2290,14]],gorge:[[182,396,27],[540,735,23],[909,1115,24],[1320,1520,25],[1710,1930,25]],canal:[[212,466,23],[601,849,27],[1e3,1200,23],[1360,1570,24],[1695,1930,27]],marsh:[[145,543,33],[698,1046,31],[1160,1480,32],[1570,1930,28]]},features:{shared:[k(76,2),k(2088,-4),Ut(2168,4.3),k(2275,-3.5)],gorge:[ut(190,-2.7),k(425,4.5),$(654,-4.7),k(888,4.3),ut(1038,-4.9),k(1275,4.6),$(1502,-4),k(1736,3.7),ut(1910,-4.2)],canal:[k(158,-2),k(363,4.6),Ut(609,-4.7),k(865,4.3),$(1082,-3.7),k(1288,4.7),Ut(1511,-4.5),k(1725,4.5),$(1925,-3.8)],marsh:[$(170,3.5),k(395,-4.3),$(627,4.7),k(885,-4.7),$(1134,4.3),k(1356,-4.6),$(1560,4.8),k(1760,-4.2),$(1940,4.5)]},bars:{gorge:[[452,519,-3,3.1],[950,999,3.8,3.4],[1404,1461,-4,3.1],[1815,1870,4.4,3.5]],canal:[[461,517,-3.7,3],[950,1015,3.7,2.8],[1395,1460,3.6,2.9],[1810,1870,-3.7,3]],marsh:[[286,348,1.4,4.5],[509,576,-2.4,4.3],[741,824,2.4,4.9],[1005,1070,-2.8,4.5],[1240,1310,2,4.8],[1622,1692,-2.5,4.7],[1833,1895,2.7,4.6]]},bridges:{canal:[{s:669,side:"left",tip:-4.2,deck:4.8,approach:609,marked:!0,name:"\uCDE8\uC218 \uC810\uAC80\uAD50"}]},reaches:{shared:[ft(24,-1,.7,48),ft(2103,1,1.7,53),ft(2202,-1,3.1,59)],gorge:[ft(291,-1),ft(740,1,2),ft(958,-1,3.3),ft(1182,1,1),ft(1412,-1,2.1),ft(1632,1,3.8),ft(1830,-1,.4)],canal:[ft(213,1,.9),ft(457,-1,2.4),ft(718,1,.3),ft(976,-1,3.1),ft(1181,1,1.3),ft(1390,-1,2.5),ft(1620,1,1),ft(1824,-1,.3)],marsh:[ft(314,-1,1.7),ft(555,1),ft(793,-1,2.1),ft(999,1,.5),ft(1240,-1,3),ft(1462,1),ft(1670,-1,2.3),ft(1840,1,.8)]}}),i0=Xn({id:"glacier",name:"\uBE59\uD558 \uD611\uACE1",length:2820,originalLength:3460,fork:124,merge:2510,seed:20857,description:"\uC605\uC740 \uCCAD\uC0C9 \uBE59\uD310\uC740 \uBE60\uB974\uC9C0\uB9CC \uBBF8\uB044\uB7EC\uC6CC\uC694. \uB2E4\uC74C \uAD7D\uC774 \uC804\uC5D0 \uBC29\uD5A5\uC744 \uC7A1\uC73C\uC138\uC694.",cellStations:{gorge:275,canal:937,marsh:1385},lanes:{gorge:[-62,12,335,.5,15.5],canal:[0,8,417,1.6,17.4],marsh:[70,17,518,2.6,23]},valley:[12,343,7,533],opening:[121,195],outlet:18.5,flow:{width:3,speed:5,saving:.4,draw:.72,assist:.77},elevation:{grade:.036,drop:168,head:.05,tail:.038,shared:[[2550,2650,20],[2695,2790,18]],gorge:[[200,384,28],[527,720,29],[879,1109,28],[1300,1515,26],[1744,1950,28],[2155,2420,29]],canal:[[235,468,29],[644,902,29],[1080,1306,30],[1477,1720,29],[1840,2095,27],[2190,2430,24]],marsh:[[174,578,35],[740,1074,33],[1221,1563,35],[1692,2010,32],[2100,2450,33]]},features:{shared:[$(77,-2),k(2560,-4.4),$(2660,4.4),k(2765,-3.8)],gorge:[ut(177,-3.1),k(413,4),$(642,-4),k(862,4.4),ut(1091,-4.5),k(1308,4.9),$(1515,-4.4),k(1725,4.2),ut(1956,-4.8),k(2180,4.6),ut(2390,-2.4)],canal:[k(185,2.7),$(404,-4.1),k(633,4.1),Ut(837,-4.4),k(1095,4.6),$(1337,-4.1),k(1545,4.8),Ut(1791,-4.3),k(2025,4.4),$(2244,-3.9),k(2410,3)],marsh:[$(201,3.8),k(420,-4.8),$(671,3.6),k(933,-4.5),$(1192,4.6),k(1420,-4.7),$(1630,-3.8),k(1850,4.2),$(2060,-4.2),k(2250,4.8),$(2405,-3.8)]},bars:{gorge:[[463,506,4,2.8],[949,1006,-3.8,3.1],[1410,1464,4.1,3],[1830,1881,4.4,2.9],[2270,2326,-4.1,3.1]],canal:[[302,352,-3.5,3.3],[738,782,3.7,2.8],[1199,1262,-3.5,3.2],[1650,1710,4.1,3.1],[2110,2167,-4,3.3]],marsh:[[259,338,-1.9,4.7],[489,577,2,5],[761,849,-2.3,4.8],[1012,1114,2.4,5.3],[1265,1340,-2,4.7],[1493,1556,2.1,5.1],[1740,1808,-2.3,5],[1940,2010,2.3,4.7],[2146,2200,-2.2,4.8]]},bridges:{gorge:[{s:1839,wood:!0,deck:8.6}],canal:[{s:1850,wood:!0,side:"left",tip:-3.8,deck:4.8,marked:!0,approach:1791,name:"\uBE59\uD558 \uAD00\uCE21\uAD50"}]},reaches:{shared:[yt(24,2.4,6,43),yt(2578,4.6,7.6,66),yt(2684,-4.2,7,75)],gorge:[yt(226,3.9,7,54),yt(507,-4.4,7,92),yt(750,4.2,6.4,76),yt(1152,3.8,7.5,96),yt(1400,-5.7,7,83),yt(1583,-3.6,7,94),yt(1815,3.9,7.2,86),yt(2060,4.5,8,81),yt(2260,-5.5,7,95)],canal:[yt(265,4.5,7,95),yt(493,-5.1,8,89),yt(719,-4.3,7.2,85),yt(978,4.8,8.1,90),yt(1205,4.6,7.1,96),yt(1440,-4.8,8,82),yt(1636,-4.4,6.8,94),yt(1910,4.8,8,98),yt(2122,4.2,7.6,79),yt(2320,-5.4,8,74)],marsh:[yt(360,-3.7,7,48),yt(566,-5.2,8.5,83),yt(839,5.8,9,66),yt(1072,-4.4,7.4,82),yt(1276,5.7,8,85),yt(1495,-4.6,7.2,77),yt(1720,5.8,7.8,68),yt(1930,-4.6,8.3,73),yt(2140,-4.5,8.2,89),yt(2310,5.4,7.6,69)]}}),oa=n=>n.flatMap(e=>[{s:e,vault:!0},{s:e+21,vault:!0}]),s0=Xn({id:"cavern",name:"\uBC18\uB527\uBD88 \uB3D9\uAD74\uAC15",length:2460,originalLength:3920,fork:108,merge:2190,seed:25349,description:"\uCCAD\uB85D\uBE5B \uACB0\uC815 \uACE0\uB9AC \uC0AC\uC774\uB97C \uD1B5\uACFC\uD574 \uC8FC \uBC30\uD130\uB9AC\uB97C \uCDA9\uC804\uD558\uB294 \uC9C0\uD558 \uAC15.",cellStations:{gorge:732,canal:251,marsh:1330},lanes:{gorge:[-70,13,426,.4,17],canal:[0,8,373,1.3,17.8],marsh:[71,13,526,2.1,22]},valley:[13,473,5.5,318],opening:[135,190],outlet:20,flow:{width:3.2,speed:6,saving:.4,draw:.89,assist:.74},elevation:{grade:.03,drop:85,head:.041,tail:.036,shared:[[2225,2315,14],[2350,2433,12]],gorge:[[182,394,17],[515,725,19],[965,1170,16],[1400,1595,18],[1820,2086,15]],canal:[[257,455,16],[622,879,17],[1030,1265,17],[1444,1690,19],[1840,2098,16]],marsh:[[170,561,23],[675,957,21],[1125,1490,20],[1630,2092,21]]},features:{shared:[k(81,1.5),k(2241,4.6),$(2320,-4.1),k(2410,3.5)],gorge:[$(181,-3.8),k(414,4.6),ut(626,-4.3),k(846,4.3),$(1055,-4.5),k(1290,4.6),ut(1532,-4.6),k(1770,4.2),$(2040,-4.1)],canal:[k(169,2.8),k(400,-4.1),$(613,4.2),k(835,-4.7),Ut(1070,4.5),k(1320,-4.8),$(1550,4),k(1800,-4.6),Ut(2020,4.7)],marsh:[$(190,-3.8),k(427,4.7),$(650,-4.6),k(874,4.9),$(1100,-4.2),k(1368,4.7),$(1610,-4.5),k(1832,4.1),$(2050,-4.6)]},bars:{gorge:[[500,551,-3.9,3.2],[910,965,4,3.1],[1400,1456,-4,3.3],[1855,1920,4.4,3.2]],canal:[[480,531,-4.1,3],[927,982,3.6,2.8],[1420,1472,-3.9,2.9],[1882,1939,4,3]],marsh:[[258,337,2,4.9],[513,578,-2.4,5.4],[742,815,2.7,5.1],[961,1029,-2.4,4.8],[1195,1265,2.8,5.3],[1450,1522,-2.5,4.8],[1690,1763,2.5,5],[1920,1990,-2.6,5.2]]},bridges:{shared:oa([38,2223,2373]),gorge:oa([242,511,810,1155,1480,1720,2003]),canal:[...oa([215,487,740,986,1303,1655,1940]),{s:1136,wood:!0,deck:4.5,side:"right",tip:4.2,approach:1070,marked:!0,name:"\uAD11\uC0B0 \uC6B4\uBC18\uAD50"}],marsh:oa([278,510,757,1007,1242,1545,1786,2020])},reaches:{shared:[Dt(43,-1.6),Dt(2229,-4.8),Dt(2384,4.5)],gorge:[Dt(310,4.7),Dt(552,-4.6),Dt(790,3.9),Dt(1005,-5.8),Dt(1240,4.8),Dt(1485,4.6),Dt(1745,-4.9),Dt(1980,4.8)],canal:[Dt(222,-3.1),Dt(502,4.6),Dt(746,-4.9),Dt(988,4.5),Dt(1286,-4.9),Dt(1513,4.7),Dt(1720,-4.5),Dt(1950,4.4)],marsh:[Dt(354,-4.4),Dt(540,-4.7),Dt(811,-4.4),Dt(1022,4.8),Dt(1246,-4.7),Dt(1510,4.8),Dt(1743,-4.4),Dt(1975,4.4)]}}),r0=Xn({id:"tideworks",name:"\uB300\uC870\uCC28 \uBC29\uC870\uC81C",length:3200,originalLength:4800,fork:136,merge:2820,seed:32003,description:"\uC6C0\uC9C1\uC774\uB294 \uAC11\uBB38 \uD2C8\uACFC \uBC14\uAE65 \uC6B0\uD68C\uB85C\uB97C \uACE0\uB974\uACE0, \uD6A1\uB958\uC640 \uBC29\uB958\uB97C \uC9C0\uB098 \uC678\uD574\uB85C \uB098\uAC00\uC138\uC694.",cellStations:{gorge:852,canal:1482,marsh:338},lanes:{gorge:[-78,16,505,.9,21],canal:[0,7,362,.4,19],marsh:[78,14,591,2.4,24]},valley:[16,544,7,363],opening:[148,224],outlet:22,flow:{width:3.4,speed:6.8,saving:.47,draw:.67,assist:.93},elevation:{grade:.028,drop:111,head:.044,tail:.038,shared:[[2872,2975,16],[3035,3142,16]],gorge:[[190,454,19],[610,865,19],[1064,1310,18],[1510,1760,17],[1938,2182,18],[2360,2705,20]],canal:[[275,542,19],[752,1004,16],[1190,1460,20],[1635,1895,19],[2050,2325,18],[2470,2740,19]],marsh:[[175,620,24],[810,1200,21],[1370,1795,22],[1910,2286,20],[2430,2750,24]]},features:{shared:[k(100,-1.4),k(2860,4),Ut(3025,4.7),k(3155,-3.2)],gorge:[ut(221,-3.8),k(506,4.8),$(790,-4.3),k(1055,4.5),ut(1332,-4.6),k(1619,4.3),$(1870,-4.8),k(2139,4.8),ut(2420,-4.4),k(2660,4.7)],canal:[k(205,3.8),Ut(516,-4.5),k(788,4.6),$(1030,-4.6),k(1315,4.5),$(1584,-4.9),k(1840,4.7),Ut(2090,-4.3),k(2348,4.5),$(2592,-4.9),k(2720,3.2)],marsh:[$(214,-3.4),k(495,4.7),$(780,-4.3),k(1050,4.6),$(1330,-4.7),k(1605,4.4),$(1870,-4.4),k(2135,4.8),$(2410,-4.5),k(2685,4.3)]},bars:{gorge:[[372,438,-3.8,3.3],[914,986,4,3.4],[1460,1522,3.9,3.5],[1995,2065,-4.1,3.7],[2525,2580,4.6,3.2]],canal:[[341,403,-3.9,3.1],[893,949,4.2,3.1],[1390,1440,-4.2,3],[1690,1755,4.4,3.4],[1940,2010,-3.8,2.9],[2460,2533,4.7,3.3]],marsh:[[390,443,2.7,5.3],[614,687,-2.9,5.1],[911,984,2.6,5.4],[1165,1246,-2.6,5.2],[1438,1513,2.1,4.9],[1714,1790,-2.5,5.4],[1975,2050,2.7,5.6],[2255,2336,-2.5,5.3],[2512,2584,2.4,5.5]]},bridges:{canal:[{s:580,side:"left",tip:-4.7,deck:5.1,approach:516,marked:!0,name:"\uBC29\uC870\uC81C \uC810\uAC80\uAD50"},{s:2159,side:"left",tip:-4.3,deck:5.2,approach:2090,marked:!0,name:"\uC678\uD574 \uC810\uAC80\uAD50"}]},reaches:{shared:[Zt(55,0,.9),nt(2874,-1,66),Zt(2980,0,2.1),ft(3072,1,1.5,59),Zt(3168,-1,.8)],gorge:[Zt(324,1),nt(538,-1,73),Zt(711,0,1.5),ft(957,1,1.8),Zt(1180,-1,2.5),nt(1410,1,76),Zt(1735,0,.6),ft(1940,-1,.6),Zt(2261,1.2,2.3),nt(2491,-1,76),Zt(2701,-1.3,1.4)],canal:[Zt(291,0,.4),ft(627,1,1.5),Zt(740,-1,2.1),nt(900,-1,79),Zt(1134,0,.8),ft(1390,-1,2.3),Zt(1517,-1,1.2),nt(1660,1,78),Zt(1965,0,.9),ft(2214,1,2.8),Zt(2435,-1.4,2.6),nt(2535,-1,70),Zt(2668,0,1.7)],marsh:[nt(259,1,64),Zt(550,-1,2),ft(685,-1,1.4),Zt(916,0,.7),nt(1140,-1,77),Zt(1415,1.2,2.8),ft(1653,1,2.7),Zt(1780,-1,1.1),nt(1948,1,70),Zt(2241,.8,.4),ft(2460,-1,.8),Zt(2598,1,1.8),Zt(2710,-1,.6)]}}),td=[e0,t0,n0,i0,s0,r0]});var kt,Rt,Ct,mt,It,o0,a0,c0,l0,h0,nd,id=pt(()=>{Ol();kt=(n,e,t=47)=>({kind:"lilies",s:n,end:n+t,offset:e,width:7.2}),Rt=(n,e,t=0,i=30)=>({kind:"spring",s:n,end:n+i,offset:e,width:6.3,phase:t}),Ct=(n,e=0)=>({kind:"lantern",s:n,phase:e}),mt=(n,e,t=1,i=31)=>({kind:"eddy",s:n,end:n+i,offset:e,width:8.4,spin:t}),It=(n,e,t,i=67)=>({kind:"squall",s:n,end:n+i,dir:e,offset:t,width:6.4}),o0=Xn({id:"lotus",name:"\uC5F0\uAF43 \uC218\uC0C1\uC815\uC6D0",length:2260,fork:94,merge:2e3,seed:37237,description:"\uC5F0\uC78E\uC774 \uBE7D\uBE7D\uD55C \uACF3\uC740 \uC120\uCCB4\uB97C \uBD99\uC7A1\uC544\uC694. \uAF43\uBB34\uB354\uAE30 \uC0AC\uC774\uB85C \uC5F4\uB9B0 \uBB3C\uC744 \uACE8\uB77C \uB2EC\uB9AC\uC138\uC694.",cellStations:{gorge:270,canal:706,marsh:1180},bankSlope:[.1,.055,.38],lanes:{gorge:[-61,10,363,.4,17.3],canal:[0,6,278,.8,15.2],marsh:[67,13,424,1.8,21]},valley:[9,470,4.5,235],opening:[108,168],outlet:17,flow:{width:3.05,speed:4.4,saving:.34,draw:.75,assist:.52},elevation:{grade:.026,drop:85,head:.036,tail:.03,shared:[[2032,2117,9],[2170,2240,8]],gorge:[[165,389,15],[487,690,20],[840,1060,19],[1220,1440,18],[1635,1920,13]],canal:[[216,445,18],[566,795,17],[911,1155,18],[1310,1530,19],[1670,1930,13]],marsh:[[163,543,26],[650,966,22],[1111,1440,19],[1550,1930,18]]},features:{shared:[k(67,1.4),$(2055,-3.6),k(2198,3.5)],gorge:[ut(171,-3),k(369,4),$(579,-4.5),ut(836,3.3),k(1060,-4.3),$(1310,4.1),ut(1541,-4.4),k(1808,3.5)],canal:[k(151,2),$(350,-4),k(545,4.5),Ut(817,-4.2),k(1052,4.2),$(1262,-3.6),k(1506,-4.1),Ut(1760,4.3),k(1896,-2.9)],marsh:[$(174,-3.1),k(418,4.6),$(636,-4.3),k(867,4.8),$(1100,-4.5),k(1360,4.6),$(1615,-4.5),k(1851,3.3)]},bars:{gorge:[[450,497,-3.8,3],[920,981,3.8,3],[1420,1485,-3.8,3.2]],canal:[[270,317,3.8,2.6],[623,680,-3.7,3.1],[1150,1200,3.7,2.9],[1600,1654,-3.9,3]],marsh:[[267,344,2.4,4.5],[496,554,-2.3,4.4],[725,789,2.5,4.5],[945,1014,-2.5,4.8],[1205,1278,2.6,4.6],[1460,1524,-2.3,4.7],[1710,1780,2.2,4.3]]},bridges:{canal:[{s:872,approach:817,side:"left",tip:-4,deck:4.7,wood:!0,marked:!0,name:"\uC5F0\uBABB \uC0B0\uCC45\uAD50"}]},reaches:{shared:[kt(24,-4,32),kt(2090,3.4),kt(2170,-4,42)],gorge:[kt(218,3.2),kt(473,-4.2),kt(733,3.4),kt(948,-3.9),kt(1185,4.6),kt(1410,4.2),kt(1688,-3.6)],canal:[kt(207,-3),kt(440,3.9),kt(611,-3.4),kt(741,3.2),kt(950,-4.4),kt(1165,4.1),kt(1383,-3.7),kt(1604,4),kt(1840,-3.6)],marsh:[kt(227,-3),kt(488,4.2),kt(705,-4.5),kt(968,4),kt(1214,-4),kt(1454,3.8),kt(1701,-4.4)]}}),a0=Xn({id:"hotsprings",name:"\uC720\uD669 \uC628\uCC9C \uACC4\uACE1",length:2580,fork:118,merge:2270,seed:39119,description:"\uD558\uC580 \uAE30\uD3EC\uAC00 \uC19F\uC744 \uB54C \uADF8 \uC704\uB97C \uC9C0\uB098\uBA74 \uBD84\uCD9C\uC218\uAC00 \uC120\uC218\uB97C \uACF5\uC911\uC73C\uB85C \uBC00\uC5B4 \uC62C\uB824\uC694.",cellStations:{gorge:930,canal:276,marsh:1330},bankSlope:[.3,.16,.82],lanes:{gorge:[-70,13,390,.55,18.4],canal:[0,6.8,298,1.4,16.7],marsh:[68,12,435,2.2,22]},valley:[12,449,5,276],opening:[113,188],outlet:18,flow:{width:3,speed:5.2,saving:.38,draw:.79,assist:.65},elevation:{grade:.036,drop:147,head:.05,tail:.041,shared:[[2310,2405,19],[2448,2550,17]],gorge:[[176,371,28],[527,728,26],[885,1115,28],[1320,1509,24],[1690,1890,22],[2022,2207,19]],canal:[[210,458,25],[603,840,27],[1010,1220,21],[1390,1615,23],[1740,1935,25],[1999,2210,26]],marsh:[[164,532,31],[660,968,28],[1111,1440,30],[1550,1848,30],[1950,2220,28]]},features:{shared:[k(87,1.4),$(2342,-4.3),k(2514,4.4)],gorge:[ut(177,-3.2),k(412,4.3),ut(682,-4.7),$(846,3.9),k(1065,-4.2),ut(1291,4.6),k(1538,-3.9),$(1772,4.5),ut(2025,-4.1),k(2166,3.1)],canal:[k(167,2.1),$(403,-3.8),k(625,4.2),Ut(868,-4.8),k(1111,4.3),$(1357,-4),k(1582,4.6),Ut(1835,4.3),k(2092,-3.8)],marsh:[$(197,3.7),k(432,-4.1),$(702,4.4),k(920,-4.7),$(1166,4.1),k(1440,-4.6),$(1692,4.3),k(1944,-4.4),$(2160,3.9)]},bars:{gorge:[[464,520,-3.9,3],[1154,1210,4.2,3.3],[1654,1704,-3.6,3],[2098,2140,4.1,2.8]],canal:[[310,358,-3.5,2.8],[716,780,4.1,3],[1203,1264,-3.8,2.9],[1686,1742,4.1,3]],marsh:[[280,350,2.1,4.8],[536,604,-2.4,4.8],[784,855,2.3,4.6],[1006,1080,-2.2,4.4],[1240,1300,2.5,4.6],[1541,1610,-2.3,4.6],[1810,1880,2.3,4.7],[2028,2103,-2.5,4.5]]},bridges:{canal:[{s:924,approach:868,side:"left",tip:-4.3,deck:4.9,wood:!0,marked:!0,name:"\uC628\uCC9C \uBC30\uAD00\uAD50"}]},reaches:{shared:[Rt(36,-2,.8),Rt(2296,4,2),Rt(2434,-4.5,.3)],gorge:[Rt(262,3.8,1.3),Rt(543,-4,.2),Rt(789,4.1,2.6),Rt(998,-4.5,1.1),Rt(1181,4.1,3),Rt(1420,-3.9,.9),Rt(1655,4.2,3.2),Rt(1895,-4,1.7),Rt(2109,3.6,.2)],canal:[Rt(214,-3.6,2.4),Rt(489,4.3,.5),Rt(731,-4,1.9),Rt(1007,4.3,3),Rt(1225,-3.6,.8),Rt(1470,4.3,2.1),Rt(1702,-4,1.3),Rt(1988,4.3,.4)],marsh:[Rt(248,-3.9,1),Rt(535,4.1,2.9),Rt(807,-4.2,.7),Rt(1018,4,1.7),Rt(1220,-4,2.5),Rt(1512,3.9,.4),Rt(1790,-4,1.8),Rt(2063,4.1,2.8)]}}),c0=Xn({id:"nightmarket",name:"\uB4F1\uBD88 \uC57C\uC2DC\uC7A5",length:2140,fork:86,merge:1880,seed:43451,description:"\uB450 \uB4F1 \uC911 \uAE08\uBE5B\uC73C\uB85C \uCF1C\uC9C4 \uCABD \uC544\uB798\uB97C \uC9C0\uB098\uC138\uC694. \uBD88\uC774 \uBC14\uB00C\uAE30 \uC804\uC5D0 \uD1B5\uACFC\uD558\uBA74 \uAC00\uC18D\uD574\uC694.",cellStations:{gorge:720,canal:1100,marsh:239},bankSlope:[.17,.072,.35],lanes:{gorge:[-59,8.5,335,.8,16.2],canal:[0,4.3,251,.5,14.2],marsh:[62,12,369,1.7,19.7]},valley:[8,392,4,213],opening:[101,155],outlet:16.8,flow:{width:2.8,speed:4.2,saving:.32,draw:.85,assist:.55},elevation:{grade:.023,drop:67,head:.031,tail:.029,shared:[[1918,2001,9],[2040,2112,8]],gorge:[[151,355,13],[451,619,14],[802,1035,14],[1150,1360,13],[1530,1795,13]],canal:[[190,394,14],[530,716,13],[847,1070,15],[1219,1428,12],[1570,1818,13]],marsh:[[131,448,17],[561,886,17],[1005,1350,18],[1455,1812,15]]},features:{shared:[$(61,-2.3),k(1935,3.7),$(2056,-4.1)],gorge:[k(150,-2.8),ut(340,4.3),$(541,-4.1),k(805,4.4),ut(1049,-4),k(1252,4.5),$(1490,-4.5),k(1720,3.5)],canal:[k(143,2.1),$(333,-4.1),Ut(570,4.4),k(801,-4.4),$(996,4.2),k(1241,-4.1),Ut(1468,-4.4),k(1735,3.2)],marsh:[$(157,-3.3),k(361,4.5),$(587,-4.1),k(819,4.6),$(1049,-4.5),k(1270,4.5),$(1509,-4.3),k(1750,3.1)]},bars:{gorge:[[399,458,3.5,2.8],[912,968,-4.3,3],[1351,1408,4,3]],canal:[[220,263,-3.6,2.7],[685,744,3.9,2.6],[1148,1198,-4,2.8],[1595,1654,3.8,3]],marsh:[[274,330,2.5,4.6],[444,521,-2.4,4.4],[687,751,2.3,4.7],[914,974,-2.5,4.5],[1150,1214,2.6,4.7],[1368,1430,-2.4,4.7],[1611,1672,2.3,4.6]]},bridges:{canal:[{s:624,approach:570,side:"right",tip:4.1,deck:4.7,marked:!0,wood:!0,name:"\uC2DC\uC7A5 \uB3CC\uCD9C \uC794\uAD50"}]},reaches:{shared:[Ct(34,.6),Ct(1909,2.4),Ct(2010,4.8),Ct(2108,1)],gorge:[Ct(215,1.2),Ct(436,3),Ct(648,.2),Ct(923,4.1),Ct(1156,2.4),Ct(1371,.7),Ct(1595,4),Ct(1793,1.1)],canal:[Ct(187,2.4),Ct(412,.7),Ct(717,4.2),Ct(905,1.4),Ct(1170,3.1),Ct(1364,1),Ct(1584,4.6),Ct(1794,2)],marsh:[Ct(207,3.2),Ct(410,.4),Ct(693,1.6),Ct(924,3.5),Ct(1148,1.2),Ct(1395,4.4),Ct(1636,.6),Ct(1804,2.9)]}}),l0=Xn({id:"redrock",name:"\uBD89\uC740 \uC0AC\uC554 \uD611\uACE1",length:2920,fork:124,merge:2600,seed:47777,description:"\uC18C\uC6A9\uB3CC\uC774\uC758 \uC9D9\uC740 \uC911\uC2EC\uC740 \uBCF4\uD2B8\uB97C \uB290\uB9AC\uAC8C \uD574\uC694. \uAC70\uD488\uC774 \uAC10\uAE30\uB294 \uBC29\uD5A5\uC744 \uBCF4\uACE0 \uBC14\uAE65 \uBB3C\uC0B4\uC744 \uD0C0\uC138\uC694.",cellStations:{gorge:265,canal:895,marsh:1430},bankSlope:[.52,.23,1.05],lanes:{gorge:[-68,12,337,.3,16.5],canal:[0,8,407,1.4,17.5],marsh:[76,14,492,2.2,22]},valley:[14,423,6,334],opening:[117,196],outlet:18,flow:{width:3.1,speed:5.6,saving:.42,draw:.67,assist:.73},elevation:{grade:.044,drop:194,head:.057,tail:.045,shared:[[2640,2760,25],[2810,2897,19]],gorge:[[185,386,33],[511,715,30],[862,1123,35],[1290,1517,29],[1680,1918,27],[2040,2245,23],[2340,2510,17]],canal:[[215,452,30],[622,857,28],[1001,1260,32],[1375,1600,29],[1760,1979,26],[2068,2270,28],[2340,2540,21]],marsh:[[174,552,36],[705,1035,33],[1160,1500,34],[1643,1930,30],[2010,2230,30],[2290,2540,31]]},features:{shared:[ut(76,-2),k(2650,-4),Ut(2765,4.2),k(2870,-3.8)],gorge:[ut(183,-3.4),k(413,4.4),ut(659,-4.6),$(862,4.3),ut(1110,-4.5),k(1351,4.3),ut(1550,-4),k(1786,4.4),ut(1980,-4.6),$(2201,4.1),k(2460,-3.3)],canal:[k(178,2.4),$(413,-4),k(645,4.2),Ut(824,-4.4),k(1080,4.4),$(1318,-4.2),k(1552,4.4),Ut(1782,-4.1),k(2020,4.3),$(2260,-4.2),k(2472,3.4)],marsh:[$(199,3.5),k(453,-4.4),$(704,4.5),k(938,-4.3),$(1180,4.4),k(1407,-4.6),$(1632,4.5),k(1869,-4.7),$(2108,4.4),k(2350,-4.4),$(2502,3.1)]},bars:{gorge:[[487,546,4.3,3.2],[960,1024,-4.3,3],[1450,1505,4,3.2],[1868,1920,-4.1,3],[2300,2356,4,3.2]],canal:[[295,347,-4,3],[716,766,4,2.8],[1170,1233,-3.8,2.9],[1635,1696,4.1,3],[2110,2166,-3.8,2.9]],marsh:[[270,334,2.2,4.9],[554,628,-2.3,4.7],[793,854,2.5,4.9],[1022,1110,-2.4,4.6],[1276,1343,2.4,4.9],[1490,1560,-2.4,4.7],[1720,1794,2.2,4.8],[1955,2012,-2.5,4.7],[2203,2269,2.4,4.6]]},bridges:{canal:[{s:880,approach:824,side:"left",tip:-4.5,deck:4.9,marked:!0,name:"\uD611\uACE1 \uCE21\uB7C9\uAD50"}]},reaches:{shared:[mt(28,3.6,-1),mt(2614,-4.5,1),mt(2708,4.1,-1),mt(2820,-4.4,1)],gorge:[mt(220,-3.4,1),mt(493,4.1,-1),mt(747,-4.3,1),mt(949,4.1,-1),mt(1194,-4.5,-1),mt(1442,4.5,1),mt(1647,-4.5,-1),mt(1880,4,1),mt(2100,-4.5,1),mt(2376,4,-1)],canal:[mt(243,4.1,-1),mt(499,-4.1,1),mt(718,4.4,1),mt(966,-4.4,-1),mt(1175,4.2,1),mt(1402,-4.5,-1),mt(1652,4.3,-1),mt(1890,-4.2,1),mt(2112,4.6,-1),mt(2364,-4,1)],marsh:[mt(302,-4.1,1),mt(552,4.5,-1),mt(803,-4.3,1),mt(1020,4.6,-1),mt(1263,-4.3,1),mt(1500,4.6,-1),mt(1736,-4.2,1),mt(1972,4.6,-1),mt(2230,-4.4,1),mt(2430,4.6,-1)]}}),h0=Xn({id:"observatory",name:"\uD3ED\uD48D \uAD00\uCE21 \uD574\uC548",length:2480,fork:108,merge:2200,seed:51827,description:"\uBE57\uC904\uAE30\uAC00 \uAE30\uC6B8\uBA74 \uD6A1\uD48D\uC774 \uBD88\uC5B4\uC694. \uCD08\uB85D \uBD80\uD45C \uC0AC\uC774\uC758 \uC794\uC794\uD55C \uBB3C\uC744 \uB530\uB77C \uBC30\uD130\uB9AC\uB97C \uC544\uB07C\uC138\uC694.",cellStations:{gorge:832,canal:1230,marsh:251},bankSlope:[.19,.105,.62],lanes:{gorge:[-66,11,385,.7,18.2],canal:[0,6.5,315,1,16],marsh:[70,13,453,2.1,21.6]},valley:[11,488,5,282],opening:[116,175],outlet:18,flow:{width:3,speed:5.4,saving:.36,draw:.88,assist:.69},elevation:{grade:.031,drop:112,head:.045,tail:.037,shared:[[2234,2326,13],[2370,2455,16]],gorge:[[180,381,23],[524,723,24],[907,1110,21],[1300,1505,23],[1670,1860,12],[1945,2130,9]],canal:[[215,454,21],[604,804,22],[978,1202,22],[1390,1586,19],[1680,1870,15],[1940,2139,13]],marsh:[[161,525,26],[660,975,21],[1101,1404,26],[1509,1805,21],[1860,2138,18]]},features:{shared:[k(78,-1.5),Ut(2288,4.2),k(2420,-3.7)],gorge:[ut(178,-3.1),k(403,4.2),$(618,-4.5),k(871,4.2),ut(1109,-4.1),k(1335,4.4),$(1552,-4.3),k(1779,4.6),ut(1990,-4),k(2104,3.1)],canal:[k(162,2.2),$(385,-3.8),Ut(608,4.2),k(852,-4.5),$(1079,4.2),k(1331,-4.1),Ut(1543,-4.4),k(1789,4.2),$(1998,-4),k(2110,2.8)],marsh:[$(182,-3.8),k(407,4.5),$(646,-4.3),k(881,4.6),$(1119,-4.2),k(1360,4.6),$(1574,-4.1),k(1811,4.7),$(2060,-4.1)]},bars:{gorge:[[476,533,-3.8,3],[965,1030,4.1,3.1],[1440,1502,-4.2,3],[1865,1928,4.4,3.2]],canal:[[261,321,4,2.8],[702,766,-4,3],[1154,1208,4.1,3],[1641,1700,-4.1,3],[1880,1945,4.1,3]],marsh:[[292,350,2.3,4.6],[510,581,-2.4,4.7],[746,813,2.5,4.6],[1004,1060,-2.3,4.8],[1230,1302,2.4,4.6],[1458,1520,-2.3,4.7],[1674,1740,2.4,4.6],[1910,1981,-2.4,4.7]]},bridges:{canal:[{s:666,approach:608,side:"right",tip:4.1,deck:4.7,marked:!0,name:"\uAD00\uCE21\uC18C \uAD00\uC81C\uAD50"}]},reaches:{shared:[It(23,1,-3.4,44),It(2212,-1,4.2,58),It(2340,1,-4,60)],gorge:[It(231,-1,4),It(480,1,-4.2),It(708,-1,4.3),It(957,1,-4.6),It(1198,-1,4.5),It(1420,1,-4.1),It(1651,-1,4.5),It(1886,1,-4.1),It(2042,-1,4.1,47)],canal:[It(221,1,-3.8),It(454,-1,4.1),It(730,1,-4.1),It(952,-1,4.2),It(1164,1,-4.3),It(1414,-1,4.2),It(1655,1,-4.2),It(1898,-1,4.2)],marsh:[It(271,-1,-4.1),It(493,1,4.3),It(742,-1,-4.3),It(983,1,4.2),It(1233,-1,-4.2),It(1455,1,4.4),It(1689,-1,-4.1),It(1939,1,4.2)]}}),nd=[o0,a0,c0,l0,h0]});function Zr(n){return Array.isArray(n)?Ft.filter(e=>n.includes(e)):[]}function rd(n){j=dn(n)||un[0]}var Ft,sd,u0,d0,f0,un,dn,j,Ti,rn=pt(()=>{Nl();Ol();id();Ft=["gorge","canal","marsh"];sd={id:"basin",name:"\uBC84\uB4DC\uB098\uBB34 \uAC1C\uC6B8",length:1440,fork:72,merge:1320,cellStations:{gorge:198,canal:421,marsh:822},description:"\uC790\uAC08\uD1B1 \uB108\uBA38\uB85C \uC138 \uBB3C\uAE38\uC774 \uAC08\uB77C\uC9C0\uB294 \uAC1C\uC6B8.",seed:0},u0={id:"harbor",name:"\uB178\uC744\uBE5B \uD56D\uAD6C",length:840,fork:68,merge:626,seed:2311,cellStations:{gorge:443,canal:189,marsh:251},description:"\uB4F1\uB300\uB97C \uB3CC\uC544 \uC591\uCABD\uC73C\uB85C \uC5C7\uAC08\uB9B0 \uC218\uBB38\uC744 \uC787\uB294 \uB2E8\uAC70\uB9AC.",lanes:{gorge:[-44,6,180,.3,10],canal:[0,3,225,0,9],marsh:[44,7,270,1.1,13]},valley:[4,223,2,107],opening:[78,92],outlet:15,flow:{width:2.1,speed:2.9,saving:.15,draw:1.95,assist:0},elevation:{grade:.016,drop:19,head:.038,tail:.019,shared:[[648,691,3]],gorge:[[120,171,7],[328,370,5],[470,525,7]],canal:[[157,203,6],[283,327,7],[487,536,6]],marsh:[[204,290,9],[402,540,10]]},features:{shared:[Ie(32,0,7.4,"\uB4F1\uB300 \uC218\uBB38"),Ie(649,4.6,6.2,"\uC678\uD56D \uC218\uBB38"),$e(694,706,-4.7,5.8,1.18,"\uBD80\uB450 \uB098\uBB34 \uBC1C\uD310")],gorge:[Ie(109,-2.6,6.1),Ie(160,4.2,5.7),$e(222,232,-3.6,5.2,1.36,"\uD558\uC5ED \uBC1C\uD310",3.6),Ie(316,3.8,5.9),Ie(388,-3.5,5.9),$e(465,476,3.9,5.5,1.42,"\uBC29\uD30C\uC81C \uBC1C\uD310",3.4),Ie(565,-2.5,6.3)],canal:[Ie(100,-3.1,6.3),Ie(150,3.8,5.8),Ie(204,-4,6),$e(259,271,3.5,5.6,1.64,"\uC870\uC120\uC18C \uB3C4\uC57D\uB300",3.7),Ie(345,-3.7,5.7),$e(410,419,4.8,5.5,.92,"\uC811\uC548 \uBC1C\uD310"),Ie(466,3.8,6.1),Ie(512,-4.2,5.8)],marsh:[$e(117,127,3.5,5.4,.85,"\uB098\uB8FB\uBC30 \uBC1C\uD310"),Ie(191,-3,6.6),Ie(274,4.3,6.3),$e(359,370,-4,6,1.18,"\uBD80\uC794\uAD50 \uBC1C\uD310"),Ie(443,3.2,6.2),Ie(537,-3.2,6.5)]},bars:{shared:[[49,59,-4.3,1.3],[60,67.7,4.9,1.4],[675,703,3.8,2.4]],gorge:[[186,204,2.7,1.7],[417,439,-3.9,1.8]],canal:[[318,335,3.4,1.8],[492,516,3.5,2]],marsh:[[154,178,-1.5,2.6],[301,334,1.4,2.9],[469,504,-2.5,2.3]]},bridges:{gorge:[{s:381,deck:5.6}],canal:[{s:302,deck:6.8,panel:{side:"right",tip:1.9,clearance:3.1},approach:259,marked:!0,name:"\uD558\uC5ED\uAD50"}],marsh:[{s:403,wood:!0,deck:3.6,side:"left",tip:-3.6,approach:359,marked:!0,name:"\uB3CC\uCD9C \uBD80\uC794\uAD50"}],shared:[]},docks:[183,392,547],markerStep:32},d0={id:"basalt",name:"\uD604\uBB34\uC554 \uAE09\uB958",length:1760,fork:126,merge:1404,seed:5783,cellStations:{gorge:556,canal:943,marsh:227},description:"\uC8FC\uC0C1\uC808\uB9AC \uC0AC\uC774\uC758 \uBC14\uC704\uD131\uC744 \uB118\uC5B4 \uACC4\uB2E8\uC2DD \uAE09\uB958\uB97C \uB0B4\uB824\uAC00\uB294 \uCF54\uC2A4.",lanes:{gorge:[-61,11,246,.1,11.8],canal:[0,8,337,.7,14.4],marsh:[58,9,382,2.4,16]},valley:[12,305,6,192],opening:[99,150],outlet:14.4,flow:{width:2.6,speed:4.5,saving:.24,draw:1.14,assist:.28},elevation:{grade:.043,drop:288,head:.09,tail:.043,shared:[[44,115,14],[1418,1500,31],[1550,1634,29],[1672,1745,23]],gorge:[[156,228,38],[295,372,39],[469,547,40],[658,740,45],[860,951,46],[1078,1167,40],[1280,1366,40]],canal:[[192,281,36],[367,460,41],[550,657,49],[777,878,46],[979,1080,52],[1216,1330,64]],marsh:[[161,318,50],[394,547,54],[601,811,64],[903,1072,55],[1134,1328,65]]},features:{shared:[vt(47,58,1.7,6.3,1.18,"\uCCAB \uB3CC\uACC4\uB2E8"),vt(1431,1444,-5.5,7.5,1.6),Ie(1520,-5.6,7.4,"\uD569\uC218\uBAA9 \uC218\uBB38"),vt(1571,1584,5.7,7.6,1.7),vt(1685,1698,-5.1,7.5,1.5)],gorge:[vt(168,180,-3,6.7,1.53),vt(305,319,3.2,6.5,1.72),vt(479,492,-3.8,6.4,1.76),vt(672,685,3.5,6.8,1.8),vt(877,889,-3.2,7,1.89),vt(1096,1109,3.6,7.2,1.84),vt(1295,1309,-3.3,7.2,1.85)],canal:[vt(201,214,4.9,7,1.6),Ie(316,-3,7,"\uC18C\uC6A9\uB3CC\uC774 \uC218\uBB38"),vt(381,393,-5.2,6.7,1.64),$e(548,562,3.7,6.1,1.85,"\uCC44\uC11D\uC7A5 \uBC1C\uD310",3.5),vt(657,669,-4.8,7,1.21),vt(788,801,5.1,7,1.75),Ie(916,-3,7,"\uD558\uB958 \uC218\uBB38"),vt(990,1004,-5.1,7.4,1.86),vt(1239,1252,5.3,7.5,2.04)],marsh:[Ie(172,2.4,7.4),vt(246,261,-3.2,7.2,1.14),$e(412,424,3.8,6.2,1.1),Ie(575,-2.7,6.9),vt(701,718,3.3,7.2,1.18),Ie(862,2.6,7.2),vt(998,1012,-3.2,7.2,1.28),$e(1161,1175,3,6.3,1.2),Ie(1314,-2.9,7.2)]},bars:{shared:[[96,112,-4.3,1.6],[113,125.8,4.9,1.5],[1490,1510,-4.2,2.6],[1615,1652,4.9,2.8]],gorge:[[237,270,4.8,2.6],[405,448,-4.4,2.6],[581,615,4,2.4],[765,807,-3.8,3],[987,1039,4.1,2.7],[1180,1220,-4.3,2.7]],canal:[[271,303,-4.1,2.3],[457,503,4.4,2.8],[710,745,-4.5,2.7],[854,899,4.2,2.9],[1100,1155,-3.7,3]],marsh:[[335,385,-1,3.3],[484,544,1.6,3.4],[616,673,-2.4,3.8],[775,816,1.2,3],[931,970,-1.6,3.4],[1076,1124,2.5,3.2],[1233,1280,-1.7,3.6]]},bridges:{gorge:[],canal:[{s:605,wood:!0,deck:7.9,side:"right",tip:3,approach:548,marked:!0,name:"\uCC44\uC11D\uC7A5 \uC794\uAD50"}],marsh:[{s:899,wood:!0,deck:7.5}],shared:[]},docks:[418,871,1193],markerStep:49},f0={id:"delta",name:"\uAC08\uB300 \uC0BC\uAC01\uC8FC",length:2240,fork:96,merge:1984,seed:8921,cellStations:{gorge:296,canal:681,marsh:1206},description:"\uAC08\uB300\uC12C\uC744 \uB3CC\uC544 \uD770 \uBB3C\uC0B4\uC744 \uC624\uB798 \uD0C8\uC218\uB85D \uC720\uB9AC\uD55C \uC7A5\uAC70\uB9AC.",lanes:{gorge:[-69,12,412,1.3,20],canal:[0,10,356,.4,17],marsh:[77,14,470,2.3,23]},valley:[15,510,6,274],opening:[120,178],outlet:20,flow:{width:3.15,speed:6.2,saving:.52,draw:.87,assist:.96},elevation:{grade:.027,drop:68,head:.038,tail:.035,shared:[[2010,2084,13],[2153,2227,13]],gorge:[[136,348,14],[492,731,14],[855,1082,14],[1272,1530,12],[1667,1900,14]],canal:[[260,340,12],[627,731,13],[930,1039,14],[1310,1398,16],[1702,1792,13]],marsh:[[160,462,17],[602,935,16],[1060,1421,17],[1560,1887,18]]},features:{shared:[$e(54,63,-1.7,5.2,.63,"\uC0AC\uACF5\uC758 \uBC1C\uD310"),Ie(2020,4.4,7.4,"\uD569\uC218\uBAA9 \uC218\uBB38"),$e(2102,2115,-4.1,6.1,1.08),Ie(2177,3.3,7.1,"\uD558\uAD6C \uC218\uBB38")],gorge:[Ie(154,3.6,7.2),$e(316,329,-4.5,6.2,1.05),Ie(510,-4,7.3),$e(695,709,4.5,6,1.23),Ie(891,4.4,7.1),$e(1072,1084,-4.2,5.7,1.13),Ie(1260,-3.7,7.3),$e(1496,1509,4.6,6,1.16),Ie(1724,-4.6,7.2),Ie(1880,3.1,7.4)],canal:[Ie(161,-3.8,6.9),Ie(344,4,6.8),$e(524,537,4.3,6.2,1.3,"\uC591\uC218\uC7A5 \uBC1C\uD310",3.4),Ie(702,-4,6.8),Ie(906,4.4,7),$e(1082,1095,-4.5,6,1.29),Ie(1275,3.1,6.9),Ie(1487,-4.5,7.1),$e(1650,1665,4.8,6.4,1.34,"\uBC30\uC218\uB85C \uBC1C\uD310",3.6),Ie(1875,-4.2,7.1)],marsh:[$e(186,197,4.4,6.3,.86),Ie(412,-4.4,7.6),$e(623,636,4,6,.93),Ie(820,-4,7.5),$e(1038,1051,-4.6,5.9,1.03),Ie(1236,4.4,7.5),$e(1458,1471,4.1,6.3,.98),Ie(1637,-4.4,7.5),$e(1846,1859,4.8,6,1.08)]},bars:{shared:[[72,84,-4.3,1.7],[85,95.8,4.9,1.6],[2058,2097,-1.8,4],[2128,2166,2.7,3.4]],gorge:[[180,278,1.2,5.3],[356,466,-2,5.5],[560,654,2.6,5.1],[735,843,-1.5,5.3],[936,1034,2.4,5.3],[1126,1213,-1.2,5.5],[1322,1441,1.8,5.6],[1557,1674,-2.6,5.3],[1763,1852,2.6,5.4]],canal:[[211,305,-1.6,4.5],[382,472,2,4.3],[576,668,-2.4,4.6],[752,849,2.5,4.2],[947,1039,-2.3,4.4],[1143,1229,2.1,4.4],[1340,1435,-1.6,4.8],[1528,1614,1.9,4.6],[1724,1824,-1.9,4.4]],marsh:[[230,360,2,5.6],[457,573,-2.4,6.1],[674,778,2,6],[872,981,-1.8,6.1],[1103,1191,2.4,5.7],[1282,1401,-2.4,6.2],[1516,1594,2.6,5.6],[1680,1786,-2.1,6.2],[1890,1945,2,4.3]]},bridges:{gorge:[{s:1120,wood:!0,deck:4.6,side:"left",tip:-3.7,approach:1072,marked:!0,name:"\uAC08\uB300 \uB098\uB8E8"}],canal:[{s:565,wood:!0,deck:5.8,side:"right",tip:3.3,approach:524,marked:!0,name:"\uC591\uC218\uC7A5 \uC794\uAD50"}],marsh:[],shared:[]},docks:[162,479,812,1099,1518,1879],markerStep:47},un=[sd,u0,d0,f0,...td,...nd],dn=n=>un.find(e=>e.id===n),j=dn(new URLSearchParams(globalThis.location?.search).get("course"))||sd,Ti=n=>(n/1e3).toLocaleString("ko-KR",{maximumFractionDigits:2})+" km"});function Qn(n=1){let e=Number.isFinite(n)?Math.min(Js,Math.max(1,Math.floor(n)))-1:0;return od[e]}var p0,od,Js,aa=pt(()=>{p0=[["\uB098\uBB34\uD310 \uBCF4\uD2B8",11.8,11,1,15,1.5],["\uD569\uD310 \uBCF4\uD2B8",13.1,13,1.06,34,1.39],["\uAC15\uD654 \uC120\uC218 \uBCF4\uD2B8",14.3,15.4,1.13,43,1.27],["\uD22C\uC5B4\uB9C1 \uBCF4\uD2B8",15.7,17.8,1.21,54,1.15],["\uC708\uB4DC\uC2E4\uB4DC \uBCF4\uD2B8",17.1,20.7,1.27,66,1.04],["\uC2A4\uD3EC\uCE20 \uBCF4\uD2B8",18.6,24.5,1.34,78,.92],["\uC2A4\uD3EC\uCE20 \uD130\uBCF4",19.8,29,1.42,90,.76],["\uB808\uC774\uC2F1 \uBCF4\uD2B8",21.2,46,1.52,104,.34],["\uD2B8\uC708 \uB808\uC774\uC11C",23.1,52,1.62,120,.14],["\uD2B8\uC708 \uBAA8\uD130\uBCF4\uD2B8",26.3,72,1.8,0,0]],od=p0.map(([n,e,t,i,s,r],o)=>({level:o+1,name:n,cruise:e,endurance:t,boostScale:i,cost:s,hullDrag:r})),Js=od.length});function kl(n,e=j){if(!Number.isFinite(n))return 0;let t=Math.max(0,Math.min(n,e.length)),i=Math.floor(t*10);return Math.floor(i*10/e.length)}function m0(n={}){let e=Array.isArray(n?.recent)?n.recent:[];return{revision:0,activeCourse:un[0].id,visit:1,completedCourses:[],boostCells:[],level:1,parts:0,best:0,legacyBest:Math.max(0,Math.min(100,Number(n?.best)||0)),recent:e.filter(t=>t&&Number.isFinite(t.distance)&&Number.isFinite(t.time)&&Number.isFinite(t.power)&&typeof t.route=="string").slice(0,3).map(t=>({...t,trial:!0}))}}function Bl(n,e,t){return e===t?n:Math.min(t,Math.floor(n*t/e*10)/10)}function Ks(n,e){if(e==="basin")return{best:n.basinBest||0,branches:n.basinBests||{}};let t=n.courseRecords?.[e],i=dn(e);if(!t)return{best:0,branches:{}};let s=t.courseLength??i?.originalLength;if(!i||!s||s===i.length)return t;let r=Object.fromEntries(Object.entries(t.branches||{}).map(([o,a])=>[o,Bl(a,s,i.length)]));return{best:Bl(t.best,s,i.length),branches:r,courseLength:i.length}}function zl(n,e){return e?.originalLength?n.courseLength??(n.route===Ti(e.length)?e.length:e.originalLength):e?.length}function ps(n){return un.find(e=>!n.completedCourses.includes(e.id))||un.at(-1)}function ms(n,e){return n.completedCourses.includes(e)||ps(n).id===e}function ad(n){if(n.visit>=1&&dn(n.activeCourse)&&Array.isArray(n.completedCourses)){let a=Zr(n.boostCells);return Array.isArray(n.boostCells)&&n.boostCells.length===a.length&&a.every((c,l)=>c===n.boostCells[l])?n:{...n,boostCells:a}}let e=Array.isArray(n.recent)?n.recent:[],t=un.filter(a=>{let{best:c,branches:l}=Ks(n,a.id);return Math.max(c,...Object.values(l||{}))>=a.length||e.some(u=>u.course===a.id&&u.cleared)}).map(a=>a.id),i=e.find(a=>dn(a.course)),s=dn(i?.course)||un[0],r={...n,recent:e,completedCourses:t,activeCourse:s.id,visit:1,boostCells:[]},o=un[un.indexOf(s)+1];return ms(r,s.id)?i?.cleared&&o&&(r.activeCourse=ms(r,o.id)?o.id:ps(r).id):r.activeCourse=ps(r).id,r.activeCourse!==s.id&&(r.visit++,r.level=1,r.parts=0),r}function cd(n,e){return{...n,activeCourse:e,visit:n.visit+1,level:1,parts:0,boostCells:[]}}function g0(n,e,t){return t!==n.visit||e===n.activeCourse||!dn(e)||!ms(n,e)?n:cd({...n,revision:n.revision+1},e)}function ld(n,e){return!Ft.includes(e)||n.includes(e)?n:Zr([...n,e])}function _0(n,e,t,i){if(e!==n.activeCourse||t!==n.visit)return n;let s=ld(n.boostCells,i);return s===n.boostCells?n:{...n,boostCells:s,revision:n.revision+1}}function x0(n,e){let t=dn(e.course),i=(e.visit??1)===n.visit&&(t?t.id===n.activeCourse:!e.course),s=zl(e,t),r=t&&e.cleared===!0&&e.distance>=s,o={...n,revision:n.revision+1,best:Math.max(n.best,e.distance),parts:n.parts+(i?e.earned:0),recent:[e,...n.recent].slice(0,3)};if(!t)return o;i&&e.pickedCell===e.branch&&(o.boostCells=ld(n.boostCells,e.pickedCell));let a=Bl(e.distance,s,t.length),c=Ks(n,t.id),l=Math.max(c.best,a),u={...c.branches};if(e.branch&&(u[e.branch]=Math.max(u[e.branch]||0,a)),t.id==="basin")o.basinBest=l,o.basinBests=u;else{let m={best:l,branches:u};t.originalLength&&(m.courseLength=t.length),o.courseRecords={...n.courseRecords,[t.id]:m}}if(!r)return o;n.completedCourses.includes(t.id)||(o.completedCourses=[...n.completedCourses,t.id]);let h=un[un.indexOf(t)+1];if(!i||!h)return o;let d=ms(o,h.id)?h:ps(o),p=cd(o,d.id);return p.recent[0]={...e,arrivalVisit:p.visit},p}function v0(n,e,t=n.visit){let i=Qn(n.level);return t!==n.visit||n.level!==e||n.level>=Js||n.parts<i.cost?n:{...n,revision:n.revision+1,level:n.level+1,parts:n.parts-i.cost}}function Vl(n){for(let e of Hl)try{globalThis[e].setItem(ca+n.id,JSON.stringify(n));return}catch{}}function $s(n){for(let e of Hl)try{globalThis[e].removeItem(ca+n)}catch{}}function hd(){let n=new Map;for(let e of Hl)try{let t=globalThis[e];for(let i=0;i<t.length;i++){let s=t.key(i);if(!s?.startsWith(ca))continue;let r;try{r=JSON.parse(t.getItem(s))}catch{continue}if(!r?.id||ca+r.id!==s)continue;(r.kind==="cell"?dn(r.course)&&Number.isSafeInteger(r.visit)&&Ft.includes(r.branch):Number.isFinite(r.earned)&&Number.isFinite(r.distance))&&n.set(r.id,r)}}catch{}return[...n.values()]}function ud(n){let e="willow-creek.garage.backup",t={profile:m0(n),paid:[]};function i(){let a=t;function c(l){l?.profile&&Array.isArray(l.paid)&&l.profile.revision>=a.profile.revision&&(a=l)}try{c(history.state?.creekGarage)}catch{}try{c(JSON.parse(sessionStorage.getItem(e)))}catch{}try{c(JSON.parse(localStorage.getItem(e)))}catch{}return a}function s(a){t=a;try{localStorage.setItem(e,JSON.stringify(a));return}catch{}try{sessionStorage.setItem(e,JSON.stringify(a));return}catch{}try{history.replaceState({...history.state,creekGarage:a},"")}catch{}}let r=new Promise(a=>{try{let c=indexedDB.open("willow-creek-garage",1);c.onupgradeneeded=()=>c.result.createObjectStore("garage"),c.onsuccess=()=>a(c.result),c.onerror=()=>a(null)}catch{a(null)}});async function o(a,c){let l=await r;if(!l){let u=()=>{let h=i(),d=ad(h.profile),p=c&&!h.paid.includes(c),m=a&&(!c||p)?a(d):d;return(m!==h.profile||p)&&s({profile:m,paid:p?[...h.paid,c]:h.paid}),m};return navigator.locks?navigator.locks.request(e,u):u()}return new Promise((u,h)=>{let d=l.transaction("garage","readwrite"),p=d.objectStore("garage"),m;d.oncomplete=()=>u(m),d.onabort=()=>h(d.error||new Error("garage transaction failed"));let _=p.get("profile");_.onsuccess=()=>{let g=_.result?null:i(),f=_.result||g.profile;if(m=ad(f),(g||m!==f)&&p.put(m,"profile"),g)for(let b of g.paid)p.put(!0,"paid/"+b);function v(){let b=a(m);b!==m&&(m=b,p.put(m,"profile")),c&&p.put(!0,"paid/"+c)}if(a)if(c){let b=p.get("paid/"+c);b.onsuccess=()=>{b.result||v()}}else v()}})}return{read:()=>o(null),credit:a=>o(c=>x0(c,a),a.id),collect:a=>o(c=>_0(c,a.course,a.visit,a.branch)),enter:(a,c)=>o(l=>g0(l,a,c)),upgrade:(a,c)=>o(l=>v0(l,a,c))}}var ca,Hl,Gl=pt(()=>{rn();aa();ca="willow-creek.pending.",Hl=["localStorage","sessionStorage"]});function ei(n,e,t,i,s,r){return{sky:n,fog:e,sun:t,ground:i,island:s,density:.007,water:Object.fromEntries(["shared","gorge","canal","marsh"].map((o,a)=>[o,[r[a],r[4],r[5]]]))}}var y0,Jt,la=pt(()=>{rn();y0={lotus:ei(["#ffe8d4","#91bfba"],"#e1ddbd","#fff0cc",[["#c9b88e","#d9cd9f"],["#aac081","#99ac70"],["#769d6b","#89ae73"]],["#93a66f","#acb781"],["#548e7a","#3f8173","#5a9585","#689981","#b9c798","#97d3b8"]),hotsprings:ei(["#f2dfbf","#89b8c4"],"#dad7b9","#ffedad",[["#e0c986","#eee2aa"],["#c8a269","#bcb77e"],["#8b9473","#a4a080"]],["#d5bc77","#eee1a2"],["#51a79a","#38988f","#58b2a6","#74b69c","#d8d39e","#bcf1d7"]),nightmarket:ei(["#82728c","#2a385e"],"#82778b","#ffe0a5",[["#bc9b85","#b08f78"],["#8e817c","#8a7978"],["#696979","#716c79"]],["#938379","#b29b88"],["#42667c","#3b5f75","#486d80","#4e7080","#a29e96","#90bfc6"]),redrock:ei(["#ffe3b5","#7ab7d4"],"#dbb99b","#ffdfaa",[["#d59562","#e2ac79"],["#c16d49","#d18050"],["#ac684f","#cc895c"]],["#c58358","#dba071"],["#398b8b","#2f7e83","#459498","#518d82","#b9b192","#8ccdc8"]),observatory:ei(["#bdcacf","#506780"],"#a9babb","#e8e7cd",[["#a2b5a6","#b4c0ae"],["#81918b","#89958c"],["#788975","#8f9c87"]],["#84978b","#a3aa8e"],["#486f80","#3c6479","#527b88","#587e81","#a8b9ae","#90bcc4"]),timber:ei(["#dce9d9","#7faab7"],"#c9dbcb","#fff0c3",[["#bea881","#d3c39a"],["#867b57","#a28c61"],["#60764d","#788852","#687c4d"]],["#aa9975","#b3a17a"],["#3e776e","#386e67","#417f78","#4a796a","#adb798","#86c1a9"]),windreach:ei(["#f1dbbc","#719ec3"],"#dfd9be","#ffe2b9",[["#dfc891","#d8bf88"],["#aba36e","#bbab75"],["#9aa66e","#b2b77a"]],["#b4a477","#c1b381"],["#408697","#33788b","#498c99","#498b90","#c4c7a6","#8acbd0"]),turbine:ei(["#e2d1ac","#819baa"],"#c5c9b4","#ffdfb0",[["#baad8b","#b3a789"],["#89978d","#97a199"],["#9c9c77","#a5a684"]],["#b6b399","#969f94"],["#3b7d80","#387273","#3e8384","#447d79","#a8b7a1","#83c9bd"]),glacier:ei(["#eaf4f4","#719cc2"],"#c9dde6","#e1f2ff",[["#b8d3dc","#d7e7e9"],["#92adbd","#b0c4ce"],["#dbe9e8","#e6efed","#c9dbdd"]],["#c9e1e4","#d9e9e9"],["#478eab","#377f9c","#478aa7","#549cae","#bedbdb","#8dd4da"]),cavern:ei(["#535274","#222943"],"#646884","#eee0ff",[["#746883","#8a8291"],["#60596f","#72637b"],["#4e4c60","#62566a"]],["#786b88","#948699"],["#346d7a","#315f73","#387786","#3b7183","#88889a","#80c8c3"]),tideworks:ei(["#e0bfa6","#667f9c"],"#bfb8ad","#ffe2bd",[["#b5b1a2","#cac5b2"],["#8b928f","#9ca19a"],["#979a83","#aaa98d"]],["#9d9d90","#b4b09a"],["#426d80","#3c6478","#487587","#4e7680","#a6ada0","#83b7be"]),harbor:{sky:["#f3c1a0","#849ec2"],fog:"#e7bba5",sun:"#ffd7a6",density:.007,ground:[["#d4c5a7","#c2b99f"],["#8a9291","#9ea5a0","#abb0a6"],["#c6ac88","#b8a790"]],island:["#b3a092","#aa9e87","#bfac91"],water:{shared:["#386a83","#a4b3a3","#71b6bc"],gorge:["#365e79","#989f96","#72a8ab"],canal:["#376b81","#93a4a0","#6babb4"],marsh:["#437880","#b7be9e","#84b4a9"]}},basalt:{sky:["#c6d8e1","#7597b8"],fog:"#b9ceda",sun:"#e1f1ff",density:.008,ground:[["#838d93","#959b9c"],["#4f5661","#5e6770","#657076"],["#626f69","#788175","#65746f"]],island:["#697379","#798389","#58666c"],water:{shared:["#287e9b","#acc5bc","#87d2d0"],gorge:["#237390","#a1bebc","#8ed8db"],canal:["#317e92","#9cbdb5","#82cad0"],marsh:["#468b92","#aec6b3","#90d0c3"]}},delta:{sky:["#f1e3bc","#8dc0c8"],fog:"#e3dcb8",sun:"#ffedbf",density:.0065,ground:[["#d6be8a","#e2cb98"],["#b7ad72","#b1a773","#c1b782"],["#9ca66d","#b2af76","#a3ac73"]],island:["#d5bf8b","#c1b37b","#b8a774"],water:{shared:["#46837e","#bbbc88","#8ac1aa"],gorge:["#3e797c","#acab79","#85b9a5"],canal:["#46888a","#b3b985","#8fc8b0"],marsh:["#538a78","#c0bd85","#a0c59d"]}}},Jt=y0[j.id]});function Rr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function Bh(n,e){return(n%e+e)%e}function M0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function S0(n,e,t){return n!==e?(t-n)/(e-n):0}function io(n,e,t){return(1-t)*n+t*e}function b0(n,e,t,i){return io(n,e,1-Math.exp(-t*i))}function E0(n,e=1){return e-Math.abs(Bh(n,e*2)-e)}function w0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function T0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function A0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function R0(n,e){return n+Math.random()*(e-n)}function C0(n){return n*(.5-Math.random())}function I0(n){n!==void 0&&(dd=n);let e=dd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P0(n){return n*no}function L0(n){return n*pr}function D0(n){return(n&n-1)===0&&n!==0}function U0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function F0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function N0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*m,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*m,a*l);break;case"ZYZ":n.set(c*m,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ur(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function kh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rf(){let n=ao("canvas");return n.style.display="block",n}function mr(n){n in pd||(pd[n]=!0,console.warn(n))}function Cf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function O0(){let n={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Tt&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?ro:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bs]:{primaries:e,whitePoint:i,transfer:ro,toXYZ:md,fromXYZ:gd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:md,fromXYZ:gd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),n}function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ka.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Zl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){_s.fromArray(n,r);let a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),c=e.dot(_s),l=t.dot(_s),u=i.dot(_s);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}function ah(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function K0(n,e,t,i,s,r,o,a){let c;if(e.side===mn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Di,a),c===null)return null;Ea.copy(a),Ea.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ea);return l<t.near||l>t.far?null:{distance:l,point:Ea.clone(),object:n}}function wa(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ya),n.getVertexPosition(c,Ma),n.getVertexPosition(l,Sa);let u=K0(n,e,t,i,ya,Ma,Sa,Ad);if(u){let h=new N;Qi.getBarycoord(Ad,ya,Ma,Sa,h),s&&(u.uv=Qi.getInterpolatedAttribute(s,a,c,l,h,new it)),r&&(u.uv1=Qi.getInterpolatedAttribute(r,a,c,l,h,new it)),o&&(u.normal=Qi.getInterpolatedAttribute(o,a,c,l,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new N,materialIndex:0};Qi.getNormal(ya,Ma,Sa,d.normal),u.face=d,u.barycoord=h}return u}function Cs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Sn(n){let e={};for(let t=0;t<n.length;t++){let i=Cs(n[t]);for(let s in i)e[s]=i[s]}return e}function $0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}function Ca(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Xa.fromBufferAttribute(a,s),qa.fromBufferAttribute(a,r),t.distanceSqToSegment(Xa,qa,uh,Dd)>i)return;uh.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(uh);if(!(l<e.near||l>e.far))return{distance:l,point:Dd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}function Od(n,e,t,i,s,r,o){let a=xh.distanceSqToPoint(n);if(a<t){let c=new N;xh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function La(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function rg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Gh(n,e,t,i){let s=pg(i);switch(t){case Lh:return n*e;case yc:return n*e/s.components*s.byteLength;case Mc:return n*e/s.components*s.byteLength;case Uh:return n*e*2/s.components*s.byteLength;case Sc:return n*e*2/s.components*s.byteLength;case Dh:return n*e*3/s.components*s.byteLength;case Yn:return n*e*4/s.components*s.byteLength;case bc:return n*e*4/s.components*s.byteLength;case No:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bo:case ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wc:case Ac:return Math.max(n,16)*Math.max(e,8)/4;case Ec:case Tc:return Math.max(n,8)*Math.max(e,8)/2;case Rc:case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xc:case qc:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zc:case Jc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kc:case $c:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pg(n){switch(n){case oi:case Rh:return{byteLength:1,components:1};case Er:case Ch:case wr:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case rs:case _c:case ai:return{byteLength:4,components:1};case Ih:case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}var zd,Sh,Hd,bh,Vd,xi,Di,mn,zt,Oi,Ms,Eh,wh,Th,Gd,ts,Wd,Xd,qd,Yd,Zd,Jd,Kd,$d,Ua,Fa,jd,Qd,ef,tf,nf,sf,rf,of,af,oc,ac,cc,Ss,lc,hc,uc,dc,fc,cf,lf,Bi,hf,uf,df,ff,pf,mf,gf,Ah,Ts,As,pc,mc,Uo,Na,es,Oa,Ln,_f,Fo,ri,gc,ss,oi,Rh,Ch,Er,_c,rs,ai,wr,xc,vc,Tr,Ih,Ph,Lh,Dh,Yn,fr,Ar,yc,Mc,Uh,Sc,bc,No,Oo,Bo,ko,Ec,wc,Tc,Ac,Rc,Cc,Ic,Pc,Lc,Dc,Uc,Fc,Nc,Oc,Bc,kc,zc,Hc,Vc,Gc,Wc,Xc,qc,Yc,Zc,Jc,Kc,$c,so,Ba,Da,fh,ph,mh,xf,vf,Fh,yf,ki,Tn,bs,ro,Tt,ys,gh,Mf,Sf,bf,Nh,Ef,wf,Tf,Af,_h,Rs,Oh,si,oo,Ui,_n,dd,no,pr,jc,it,Dn,N,Wl,fd,je,Xl,pd,md,gd,gt,js,ka,B0,gr,k0,Yl,Un,Kt,za,di,co,Ha,fi,Ai,ti,ha,Qs,er,tr,Yi,Zi,gs,Jr,ua,da,_s,z0,Kr,Jl,pi,Ri,Kl,fa,Ji,$l,pa,jl,_r,St,nr,ni,H0,V0,Ki,ma,Bn,_d,xd,Mn,lo,G0,vd,ir,Ci,ga,$r,W0,X0,yd,Md,Sd,bd,q0,sr,Ql,en,ii,Ii,eh,Pi,rr,or,Ed,th,nh,ih,sh,rh,oh,Qi,If,$i,_a,Pe,xn,Y0,mi,nn,on,xa,Z0,yn,ho,uo,Ge,J0,qn,ch,ar,kn,jr,fn,_t,wd,xs,va,Td,ya,Ma,Sa,lh,ba,Ad,Ea,Mt,gi,Pf,j0,Q0,An,fo,ji,Rd,Cd,vn,cr,lr,Va,po,Ga,pn,eg,xr,mo,go,Wa,_o,hr,Id,Ta,Pd,tg,Qr,eo,Es,hh,ng,ig,ui,vs,sg,Aa,vr,yr,Xa,qa,Ld,to,Ra,uh,Dd,Ya,Ud,Fd,xo,Mr,Nd,xh,Ia,Pa,vo,yo,Mo,So,_i,bo,Sr,br,Eo,wo,Fi,To,Ao,Ro,Ni,Za,Ja,ws,Ka,$a,ja,zn,ns,Qa,ec,tc,Co,is,nc,ic,Lf,sc,Io,Po,dh,Bd,kd,vh,Lo,yh,Do,rc,Hh,og,Vh,ag,cg,lg,hg,ug,dg,fg,Mh,Gt,G2,Wh=pt(()=>{zd=0,Sh=1,Hd=2,bh=1,Vd=2,xi=3,Di=0,mn=1,zt=2,Oi=0,Ms=1,Eh=2,wh=3,Th=4,Gd=5,ts=100,Wd=101,Xd=102,qd=103,Yd=104,Zd=200,Jd=201,Kd=202,$d=203,Ua=204,Fa=205,jd=206,Qd=207,ef=208,tf=209,nf=210,sf=211,rf=212,of=213,af=214,oc=0,ac=1,cc=2,Ss=3,lc=4,hc=5,uc=6,dc=7,fc=0,cf=1,lf=2,Bi=0,hf=1,uf=2,df=3,ff=4,pf=5,mf=6,gf=7,Ah=300,Ts=301,As=302,pc=303,mc=304,Uo=306,Na=1e3,es=1001,Oa=1002,Ln=1003,_f=1004,Fo=1005,ri=1006,gc=1007,ss=1008,oi=1009,Rh=1010,Ch=1011,Er=1012,_c=1013,rs=1014,ai=1015,wr=1016,xc=1017,vc=1018,Tr=1020,Ih=35902,Ph=35899,Lh=1021,Dh=1022,Yn=1023,fr=1026,Ar=1027,yc=1028,Mc=1029,Uh=1030,Sc=1031,bc=1033,No=33776,Oo=33777,Bo=33778,ko=33779,Ec=35840,wc=35841,Tc=35842,Ac=35843,Rc=36196,Cc=37492,Ic=37496,Pc=37808,Lc=37809,Dc=37810,Uc=37811,Fc=37812,Nc=37813,Oc=37814,Bc=37815,kc=37816,zc=37817,Hc=37818,Vc=37819,Gc=37820,Wc=37821,Xc=36492,qc=36494,Yc=36495,Zc=36283,Jc=36284,Kc=36285,$c=36286,so=2300,Ba=2301,Da=2302,fh=2400,ph=2401,mh=2402,xf=3200,vf=3201,Fh=0,yf=1,ki="",Tn="srgb",bs="srgb-linear",ro="linear",Tt="srgb",ys=7680,gh=519,Mf=512,Sf=513,bf=514,Nh=515,Ef=516,wf=517,Tf=518,Af=519,_h=35044,Rs=35048,Oh="300 es",si=2e3,oo=2001,Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=1234567,no=Math.PI/180,pr=180/Math.PI;jc={DEG2RAD:no,RAD2DEG:pr,generateUUID:Rr,clamp:dt,euclideanModulo:Bh,mapLinear:M0,inverseLerp:S0,lerp:io,damp:b0,pingpong:E0,smoothstep:w0,smootherstep:T0,randInt:A0,randFloat:R0,randFloatSpread:C0,seededRandom:I0,degToRad:P0,radToDeg:L0,isPowerOfTwo:D0,ceilPowerOfTwo:U0,floorPowerOfTwo:F0,setQuaternionFromProperEuler:N0,normalize:wn,denormalize:ur},it=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],p=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(h!==_||c!==d||l!==p||u!==m){let g=1-a,f=c*d+l*p+u*m+h*_,v=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let A=Math.sqrt(b),S=Math.atan2(A,f*v);g=Math.sin(g*S)/A,a=Math.sin(a*S)/A}let M=a*v;if(c=c*g+d*M,l=l*g+p*M,u=u*g+m*M,h=h*g+_*M,g===1-a){let A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*p-l*d,e[t+1]=c*m+u*d+l*h-a*p,e[t+2]=l*m+u*p+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),p=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h+d*p*m;break;case"YZX":this._x=d*u*h+l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h-d*p*m;break;case"XZY":this._x=d*u*h-l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>h){let p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-i-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wl.copy(this).projectOnVector(e),this.sub(Wl)}reflect(e){return this.sub(Wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wl=new N,fd=new Dn,je=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],_=s[0],g=s[3],f=s[6],v=s[1],b=s[4],M=s[7],A=s[2],S=s[5],T=s[8];return r[0]=o*_+a*v+c*A,r[3]=o*g+a*b+c*S,r[6]=o*f+a*M+c*T,r[1]=l*_+u*v+h*A,r[4]=l*g+u*b+h*S,r[7]=l*f+u*M+h*T,r[2]=d*_+p*v+m*A,r[5]=d*g+p*b+m*S,r[8]=d*f+p*M+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,m=t*h+i*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=h*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xl.makeScale(e,t)),this}rotate(e){return this.premultiply(Xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xl=new je;pd={};md=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gd=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);gt=O0();ka=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{js===void 0&&(js=ao("canvas")),js.width=e.width,js.height=e.height;let s=js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=js}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ao("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},B0=0,gr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ql(s[o].image)):r.push(ql(s[o]))}else r=ql(s);i.url=r}return t||(e.images[this.uuid]=i),i}};k0=0,Yl=new N,Un=class n extends Ui{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=es,s=es,r=ri,o=ss,a=Yn,c=oi,l=n.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Rr(),this.name="",this.source=new gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Na:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Na:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Ah;Un.DEFAULT_ANISOTROPY=1;Kt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],m=c[9],_=c[2],g=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,M=(p+1)/2,A=(f+1)/2,S=(u+d)/4,T=(h+_)/4,C=(m+g)/4;return b>M&&b>A?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=S/i,r=T/i):M>A?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=C/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=T/r,s=C/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},za=class extends Ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Un(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new gr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends za{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},co=class extends Un{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ha=class extends Un{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),ua.subVectors(this.max,Jr),Qs.subVectors(e.a,Jr),er.subVectors(e.b,Jr),tr.subVectors(e.c,Jr),Yi.subVectors(er,Qs),Zi.subVectors(tr,er),gs.subVectors(Qs,tr);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-gs.z,gs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,gs.z,0,-gs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-gs.y,gs.x,0];return!Zl(t,Qs,er,tr,ua)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,Qs,er,tr,ua))?!1:(da.crossVectors(Yi,Zi),t=[da.x,da.y,da.z],Zl(t,Qs,er,tr,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new N,new N,new N,new N,new N,new N,new N,new N],ti=new N,ha=new fi,Qs=new N,er=new N,tr=new N,Yi=new N,Zi=new N,gs=new N,Jr=new N,ua=new N,da=new N,_s=new N;z0=new fi,Kr=new N,Jl=new N,pi=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):z0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);let t=Kr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Kr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Jl)),this.expandByPoint(Kr.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ri=new N,Kl=new N,fa=new N,Ji=new N,$l=new N,pa=new N,jl=new N,_r=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Kl.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(Kl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(fa),a=Ji.dot(this.direction),c=-Ji.dot(fa),l=Ji.lengthSq(),u=Math.abs(1-o*o),h,d,p,m;if(u>0)if(h=o*c-a,d=o*a-c,m=r*u,h>=0)if(d>=-m)if(d<=m){let _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Kl).addScaledVector(fa,d),p}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);let i=Ri.dot(this.direction),s=Ri.dot(Ri)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,i,s,r){$l.subVectors(t,e),pa.subVectors(i,e),jl.crossVectors($l,pa);let o=this.direction.dot(jl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);let c=a*this.direction.dot(pa.crossVectors(Ji,pa));if(c<0)return null;let l=a*this.direction.dot($l.cross(Ji));if(l<0||c+l>o)return null;let u=-a*Ji.dot(jl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class n{constructor(e,t,i,s,r,o,a,c,l,u,h,d,p,m,_,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,d,p,m,_,g)}set(e,t,i,s,r,o,a,c,l,u,h,d,p,m,_,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=m,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/nr.setFromMatrixColumn(e,0).length(),r=1/nr.setFromMatrixColumn(e,1).length(),o=1/nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,p=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,p=c*h,m=l*u,_=l*h;t[0]=d+_*a,t[4]=m*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,p=c*h,m=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,p=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=m*l-p,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=p*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=m*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+m,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*c,p=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=p*h-m,t[2]=m*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H0,e,V0)}lookAt(e,t,i){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Ki.crossVectors(i,Bn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Ki.crossVectors(i,Bn)),Ki.normalize(),ma.crossVectors(Bn,Ki),s[0]=Ki.x,s[4]=ma.x,s[8]=Bn.x,s[1]=Ki.y,s[5]=ma.y,s[9]=Bn.y,s[2]=Ki.z,s[6]=ma.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],_=i[6],g=i[10],f=i[14],v=i[3],b=i[7],M=i[11],A=i[15],S=s[0],T=s[4],C=s[8],y=s[12],x=s[1],R=s[5],D=s[9],I=s[13],L=s[2],F=s[6],O=s[10],z=s[14],G=s[3],ee=s[7],se=s[11],ce=s[15];return r[0]=o*S+a*x+c*L+l*G,r[4]=o*T+a*R+c*F+l*ee,r[8]=o*C+a*D+c*O+l*se,r[12]=o*y+a*I+c*z+l*ce,r[1]=u*S+h*x+d*L+p*G,r[5]=u*T+h*R+d*F+p*ee,r[9]=u*C+h*D+d*O+p*se,r[13]=u*y+h*I+d*z+p*ce,r[2]=m*S+_*x+g*L+f*G,r[6]=m*T+_*R+g*F+f*ee,r[10]=m*C+_*D+g*O+f*se,r[14]=m*y+_*I+g*z+f*ce,r[3]=v*S+b*x+M*L+A*G,r[7]=v*T+b*R+M*F+A*ee,r[11]=v*C+b*D+M*O+A*se,r[15]=v*y+b*I+M*z+A*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],m=e[3],_=e[7],g=e[11],f=e[15];return m*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*p-i*c*p)+_*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*u-r*c*u)+g*(+t*l*h-t*a*p-r*o*h+i*o*p+r*a*u-i*l*u)+f*(-s*a*u-t*c*h+t*a*d+s*o*h-i*o*d+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],m=e[12],_=e[13],g=e[14],f=e[15],v=h*g*l-_*d*l+_*c*p-a*g*p-h*c*f+a*d*f,b=m*d*l-u*g*l-m*c*p+o*g*p+u*c*f-o*d*f,M=u*_*l-m*h*l+m*a*p-o*_*p-u*a*f+o*h*f,A=m*h*c-u*_*c-m*a*d+o*_*d+u*a*g-o*h*g,S=t*v+i*b+s*M+r*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return e[0]=v*T,e[1]=(_*d*r-h*g*r-_*s*p+i*g*p+h*s*f-i*d*f)*T,e[2]=(a*g*r-_*c*r+_*s*l-i*g*l-a*s*f+i*c*f)*T,e[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*p-i*c*p)*T,e[4]=b*T,e[5]=(u*g*r-m*d*r+m*s*p-t*g*p-u*s*f+t*d*f)*T,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*f-t*c*f)*T,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*p+t*c*p)*T,e[8]=M*T,e[9]=(m*h*r-u*_*r-m*i*p+t*_*p+u*i*f-t*h*f)*T,e[10]=(o*_*r-m*a*r+m*i*l-t*_*l-o*i*f+t*a*f)*T,e[11]=(u*a*r-o*h*r-u*i*l+t*h*l+o*i*p-t*a*p)*T,e[12]=A*T,e[13]=(u*_*s-m*h*s+m*i*d-t*_*d-u*i*g+t*h*g)*T,e[14]=(m*a*s-o*_*s-m*i*c+t*_*c+o*i*g-t*a*g)*T,e[15]=(o*h*s-u*a*s+u*i*c-t*h*c-o*i*d+t*a*d)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,m=r*h,_=o*u,g=o*h,f=a*h,v=c*l,b=c*u,M=c*h,A=i.x,S=i.y,T=i.z;return s[0]=(1-(_+f))*A,s[1]=(p+M)*A,s[2]=(m-b)*A,s[3]=0,s[4]=(p-M)*S,s[5]=(1-(d+f))*S,s[6]=(g+v)*S,s[7]=0,s[8]=(m+b)*T,s[9]=(g-v)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=nr.set(s[0],s[1],s[2]).length(),o=nr.set(s[4],s[5],s[6]).length(),a=nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ni.copy(this);let l=1/r,u=1/o,h=1/a;return ni.elements[0]*=l,ni.elements[1]*=l,ni.elements[2]*=l,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,t.setFromRotationMatrix(ni),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=si,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===si)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===oo)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=si,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===si)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===oo)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},nr=new N,ni=new St,H0=new N(0,0,0),V0=new N(1,1,1),Ki=new N,ma=new N,Bn=new N,_d=new St,xd=new Dn,Mn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _d.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_d,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xd.setFromEuler(this),this.setFromQuaternion(xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";lo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},G0=0,vd=new N,ir=new Dn,Ci=new St,ga=new N,$r=new N,W0=new N,X0=new Dn,yd=new N(1,0,0),Md=new N(0,1,0),Sd=new N(0,0,1),bd={type:"added"},q0={type:"removed"},sr={type:"childadded",child:null},Ql={type:"childremoved",child:null},en=class n extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new Mn,i=new Dn,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new je}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(yd,e)}rotateY(e){return this.rotateOnAxis(Md,e)}rotateZ(e){return this.rotateOnAxis(Sd,e)}translateOnAxis(e,t){return vd.copy(e).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yd,e)}translateY(e){return this.translateOnAxis(Md,e)}translateZ(e){return this.translateOnAxis(Sd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ga.copy(e):ga.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt($r,ga,this.up):Ci.lookAt(ga,$r,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Ci),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bd),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q0),Ql.child=e,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bd),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,W0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,X0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};en.DEFAULT_UP=new N(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ii=new N,Ii=new N,eh=new N,Pi=new N,rr=new N,or=new N,Ed=new N,th=new N,nh=new N,ih=new N,sh=new Kt,rh=new Kt,oh=new Kt,Qi=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ii.subVectors(s,t),Ii.subVectors(i,t),eh.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(Ii),c=ii.dot(eh),l=Ii.dot(Ii),u=Ii.dot(eh),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(l*c-a*u)*d,m=(o*u-a*c)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pi.x),c.addScaledVector(o,Pi.y),c.addScaledVector(a,Pi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return sh.setScalar(0),rh.setScalar(0),oh.setScalar(0),sh.fromBufferAttribute(e,t),rh.fromBufferAttribute(e,i),oh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sh,r.x),o.addScaledVector(rh,r.y),o.addScaledVector(oh,r.z),o}static isFrontFacing(e,t,i,s){return ii.subVectors(i,t),Ii.subVectors(e,t),ii.cross(Ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ii.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;rr.subVectors(s,i),or.subVectors(r,i),th.subVectors(e,i);let c=rr.dot(th),l=or.dot(th);if(c<=0&&l<=0)return t.copy(i);nh.subVectors(e,s);let u=rr.dot(nh),h=or.dot(nh);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(rr,o);ih.subVectors(e,r);let p=rr.dot(ih),m=or.dot(ih);if(m>=0&&p<=m)return t.copy(r);let _=p*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(or,a);let g=u*m-p*h;if(g<=0&&h-u>=0&&p-m>=0)return Ed.subVectors(r,s),a=(h-u)/(h-u+(p-m)),t.copy(s).addScaledVector(Ed,a);let f=1/(g+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(rr,o).addScaledVector(or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},If={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},_a={h:0,s:0,l:0};Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=Bh(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ah(o,r,e+1/3),this.g=ah(o,r,e),this.b=ah(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=Tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){let i=If[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return gt.workingToColorSpace(xn.copy(this),e),Math.round(dt(xn.r*255,0,255))*65536+Math.round(dt(xn.g*255,0,255))*256+Math.round(dt(xn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(xn.copy(this),t);let i=xn.r,s=xn.g,r=xn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Tn){gt.workingToColorSpace(xn.copy(this),e);let t=xn.r,i=xn.g,s=xn.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(_a);let i=io($i.h,_a.h,t),s=io($i.s,_a.s,t),r=io($i.l,_a.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Pe;Pe.NAMES=If;Y0=0,mi=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=Ms,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Fa,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ua&&(i.blendSrc=this.blendSrc),this.blendDst!==Fa&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},on=new N,xa=new it,Z0=0,yn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_h,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),s=wn(s,this.array),r=wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}},ho=class extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},uo=class extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ge=class extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}},J0=0,qn=new St,ch=new en,ar=new N,kn=new fi,jr=new fi,fn=new N,_t=class n extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kh(e)?uo:ho)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,i){return qn.makeTranslation(e,t,i),this.applyMatrix4(qn),this}scale(e,t,i){return qn.makeScale(e,t,i),this.applyMatrix4(qn),this}lookAt(e){return ch.lookAt(e),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ge(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(kn.min,jr.min),kn.expandByPoint(fn),fn.addVectors(kn.max,jr.max),kn.expandByPoint(fn)):(kn.expandByPoint(jr.min),kn.expandByPoint(jr.max))}kn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)fn.fromBufferAttribute(a,l),c&&(ar.fromBufferAttribute(e,l),fn.add(ar)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<i.count;C++)a[C]=new N,c[C]=new N;let l=new N,u=new N,h=new N,d=new it,p=new it,m=new it,_=new N,g=new N;function f(C,y,x){l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,x),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),m.fromBufferAttribute(r,x),u.sub(l),h.sub(l),p.sub(d),m.sub(d);let R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(R),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(R),a[C].add(_),a[y].add(_),a[x].add(_),c[C].add(g),c[y].add(g),c[x].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,y=v.length;C<y;++C){let x=v[C],R=x.start,D=x.count;for(let I=R,L=R+D;I<L;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let b=new N,M=new N,A=new N,S=new N;function T(C){A.fromBufferAttribute(s,C),S.copy(A);let y=a[C];b.copy(y),b.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(S,y);let R=M.dot(c[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,R)}for(let C=0,y=v.length;C<y;++C){let x=v[C],R=x.start,D=x.count;for(let I=R,L=R+D;I<L;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),p=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let f=0;f<u;f++)d[m++]=l[p++]}return new yn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wd=new St,xs=new _r,va=new pi,Td=new N,ya=new N,Ma=new N,Sa=new N,lh=new N,ba=new N,Ad=new N,Ea=new N,Mt=class extends en{constructor(e=new _t,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ba.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(lh.fromBufferAttribute(h,e),o?ba.addScaledVector(lh,u):ba.addScaledVector(lh.sub(t),u))}t.add(ba)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(va.containsPoint(xs.origin)===!1&&(xs.intersectSphere(va,Td)===null||xs.origin.distanceToSquared(Td)>(e.far-e.near)**2))&&(wd.copy(r).invert(),xs.copy(e.ray).applyMatrix4(wd),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],f=o[g.materialIndex],v=Math.max(g.start,p.start),b=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=v,A=b;M<A;M+=3){let S=a.getX(M),T=a.getX(M+1),C=a.getX(M+2);s=wa(this,f,e,i,l,u,h,S,T,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){let v=a.getX(g),b=a.getX(g+1),M=a.getX(g+2);s=wa(this,o,e,i,l,u,h,v,b,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],f=o[g.materialIndex],v=Math.max(g.start,p.start),b=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let M=v,A=b;M<A;M+=3){let S=M,T=M+1,C=M+2;s=wa(this,f,e,i,l,u,h,S,T,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){let v=g,b=g+1,M=g+2;s=wa(this,o,e,i,l,u,h,v,b,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};gi=class n extends _t{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,p=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(h,2));function m(_,g,f,v,b,M,A,S,T,C,y){let x=M/T,R=A/C,D=M/2,I=A/2,L=S/2,F=T+1,O=C+1,z=0,G=0,ee=new N;for(let se=0;se<O;se++){let ce=se*R-I;for(let xe=0;xe<F;xe++){let ke=xe*x-D;ee[_]=ke*v,ee[g]=ce*b,ee[f]=L,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[g]=0,ee[f]=S>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(xe/T),h.push(1-se/C),z+=1}}for(let se=0;se<C;se++)for(let ce=0;ce<T;ce++){let xe=d+ce+F*se,ke=d+ce+F*(se+1),Ye=d+(ce+1)+F*(se+1),Ze=d+(ce+1)+F*se;c.push(xe,ke,Ze),c.push(ke,Ye,Ze),G+=6}a.addGroup(p,G,y),p+=G,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Pf={clone:Cs,merge:Sn},j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=Q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=$0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},fo=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new N,Rd=new it,Cd=new it,vn=class extends fo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Rd,Cd),t.subVectors(Cd,Rd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(no*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cr=-90,lr=1,Va=class extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(cr,lr,e,t);s.layers=this.layers,this.add(s);let r=new vn(cr,lr,e,t);r.layers=this.layers,this.add(r);let o=new vn(cr,lr,e,t);o.layers=this.layers,this.add(o);let a=new vn(cr,lr,e,t);a.layers=this.layers,this.add(a);let c=new vn(cr,lr,e,t);c.layers=this.layers,this.add(c);let l=new vn(cr,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},po=class extends Un{constructor(e=[],t=Ts,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ga=class extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new po(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Oi});r.uniforms.tEquirect.value=t;let o=new Mt(s,r),a=t.minFilter;return t.minFilter===ss&&(t.minFilter=ri),new Va(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},pn=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},eg={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,i),f=this._getHandJoint(l,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},mo=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},go=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wa=class extends Un{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Ln,u=Ln,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_o=class extends yn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new St,Id=new St,Ta=[],Pd=new fi,tg=new St,Qr=new Mt,eo=new pi,Es=class extends Mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _o(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,tg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hr),Pd.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(Pd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hr),eo.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eo.copy(this.boundingSphere),eo.applyMatrix4(i),e.ray.intersectsSphere(eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),Id.multiplyMatrices(i,hr),Qr.matrixWorld=Id,Qr.raycast(e,Ta);for(let o=0,a=Ta.length;o<a;o++){let c=Ta[o];c.instanceId=r,c.object=this,t.push(c)}Ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wa(new Float32Array(s*this.count),s,this.count,yc,ai));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hh=new N,ng=new N,ig=new je,ui=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=hh.subVectors(i,t).cross(ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(hh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ig.getNormalMatrix(e),s=this.coplanarPoint(hh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vs=new pi,sg=new it(.5,.5),Aa=new N,vr=class{constructor(e=new ui,t=new ui,i=new ui,s=new ui,r=new ui,o=new ui){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],p=r[7],m=r[8],_=r[9],g=r[10],f=r[11],v=r[12],b=r[13],M=r[14],A=r[15];if(s[0].setComponents(l-o,p-u,f-m,A-v).normalize(),s[1].setComponents(l+o,p+u,f+m,A+v).normalize(),s[2].setComponents(l+a,p+h,f+_,A+b).normalize(),s[3].setComponents(l-a,p-h,f-_,A-b).normalize(),i)s[4].setComponents(c,d,g,M).normalize(),s[5].setComponents(l-c,p-d,f-g,A-M).normalize();else if(s[4].setComponents(l-c,p-d,f-g,A-M).normalize(),t===si)s[5].setComponents(l+c,p+d,f+g,A+M).normalize();else if(t===oo)s[5].setComponents(c,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);let t=sg.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Aa.x=s.normal.x>0?e.max.x:e.min.x,Aa.y=s.normal.y>0?e.max.y:e.min.y,Aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yr=class extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xa=new N,qa=new N,Ld=new St,to=new _r,Ra=new pi,uh=new N,Dd=new N,Ya=class extends en{constructor(e=new _t,t=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Xa.fromBufferAttribute(t,s-1),qa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Xa.distanceTo(qa);e.setAttribute("lineDistance",new Ge(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;Ld.copy(s).invert(),to.copy(e.ray).applyMatrix4(Ld);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=l){let f=u.getX(_),v=u.getX(_+1),b=Ca(this,e,to,c,f,v,_);b&&t.push(b)}if(this.isLineLoop){let _=u.getX(m-1),g=u.getX(p),f=Ca(this,e,to,c,_,g,m-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=l){let f=Ca(this,e,to,c,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){let _=Ca(this,e,to,c,m-1,p,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Ud=new N,Fd=new N,xo=class extends Ya{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Ud.fromBufferAttribute(t,s),Fd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ud.distanceTo(Fd);e.setAttribute("lineDistance",new Ge(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Mr=class extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nd=new St,xh=new _r,Ia=new pi,Pa=new N,vo=class extends en{constructor(e=new _t,t=new Mr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,e.ray.intersectsSphere(Ia)===!1)return;Nd.copy(s).invert(),xh.copy(e.ray).applyMatrix4(Nd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let m=d,_=p;m<_;m++){let g=l.getX(m);Pa.fromBufferAttribute(h,g),Od(Pa,g,c,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=d,_=p;m<_;m++)Pa.fromBufferAttribute(h,m),Od(Pa,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};yo=class extends Un{constructor(e,t,i=rs,s,r,o,a=Ln,c=Ln,l,u=fr,h=1){if(u!==fr&&u!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mo=class extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},So=class n extends _t{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new N,u=new it;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let p=i+h/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(a,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},_i=class n extends _t{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],p=[],m=0,_=[],g=i/2,f=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ge(h,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(p,2));function v(){let M=new N,A=new N,S=0,T=(t-e)/i;for(let C=0;C<=r;C++){let y=[],x=C/r,R=x*(t-e)+e;for(let D=0;D<=s;D++){let I=D/s,L=I*c+a,F=Math.sin(L),O=Math.cos(L);A.x=R*F,A.y=-x*i+g,A.z=R*O,h.push(A.x,A.y,A.z),M.set(F,T,O).normalize(),d.push(M.x,M.y,M.z),p.push(I,1-x),y.push(m++)}_.push(y)}for(let C=0;C<s;C++)for(let y=0;y<r;y++){let x=_[y][C],R=_[y+1][C],D=_[y+1][C+1],I=_[y][C+1];(e>0||y!==0)&&(u.push(x,R,I),S+=3),(t>0||y!==r-1)&&(u.push(R,D,I),S+=3)}l.addGroup(f,S,0),f+=S}function b(M){let A=m,S=new it,T=new N,C=0,y=M===!0?e:t,x=M===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,g*x,0),d.push(0,x,0),p.push(.5,.5),m++;let R=m;for(let D=0;D<=s;D++){let L=D/s*c+a,F=Math.cos(L),O=Math.sin(L);T.x=y*O,T.y=g*x,T.z=y*F,h.push(T.x,T.y,T.z),d.push(0,x,0),S.x=F*.5+.5,S.y=O*.5*x+.5,p.push(S.x,S.y),m++}for(let D=0;D<s;D++){let I=A+D,L=R+D;M===!0?u.push(L,L+1,I):u.push(L+1,L,I),C+=3}l.addGroup(f,C,M===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bo=class n extends _i{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sr=class n extends _t{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(r.slice(),3)),this.setAttribute("uv",new Ge(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new N,M=new N,A=new N;for(let S=0;S<t.length;S+=3)p(t[S+0],b),p(t[S+1],M),p(t[S+2],A),c(b,M,A,v)}function c(v,b,M,A){let S=A+1,T=[];for(let C=0;C<=S;C++){T[C]=[];let y=v.clone().lerp(M,C/S),x=b.clone().lerp(M,C/S),R=S-C;for(let D=0;D<=R;D++)D===0&&C===S?T[C][D]=y:T[C][D]=y.clone().lerp(x,D/R)}for(let C=0;C<S;C++)for(let y=0;y<2*(S-C)-1;y++){let x=Math.floor(y/2);y%2===0?(d(T[C][x+1]),d(T[C+1][x]),d(T[C][x])):(d(T[C][x+1]),d(T[C+1][x+1]),d(T[C+1][x]))}}function l(v){let b=new N;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(v),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function u(){let v=new N;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let M=g(v)/2/Math.PI+.5,A=f(v)/Math.PI+.5;o.push(M,1-A)}m(),h()}function h(){for(let v=0;v<o.length;v+=6){let b=o[v+0],M=o[v+2],A=o[v+4],S=Math.max(b,M,A),T=Math.min(b,M,A);S>.9&&T<.1&&(b<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,b){let M=v*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function m(){let v=new N,b=new N,M=new N,A=new N,S=new it,T=new it,C=new it;for(let y=0,x=0;y<r.length;y+=9,x+=6){v.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),S.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),C.set(o[x+4],o[x+5]),A.copy(v).add(b).add(M).divideScalar(3);let R=g(A);_(S,x+0,v,R),_(T,x+2,b,R),_(C,x+4,M,R)}}function _(v,b,M,A){A<0&&v.x===1&&(o[b]=v.x-1),M.x===0&&M.z===0&&(o[b]=A/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},br=class n extends Sr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Eo=class n extends Sr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},wo=class n extends _t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,p=[],m=[],_=[],g=[];for(let f=0;f<u;f++){let v=f*d-o;for(let b=0;b<l;b++){let M=b*h-r;m.push(M,-v,0),_.push(0,0,1),g.push(b/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){let b=v+l*f,M=v+l*(f+1),A=v+1+l*(f+1),S=v+1+l*f;p.push(b,M,S),p.push(M,A,S)}this.setIndex(p),this.setAttribute("position",new Ge(m,3)),this.setAttribute("normal",new Ge(_,3)),this.setAttribute("uv",new Ge(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Fi=class n extends _t{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=e,d=(t-e)/s,p=new N,m=new it;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){let f=r+g/i*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<s;_++){let g=_*(i+1);for(let f=0;f<i;f++){let v=f+g,b=v,M=v+i+1,A=v+i+2,S=v+1;a.push(b,M,S),a.push(M,A,S)}}this.setIndex(a),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},To=class n extends _t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new N,d=new N,p=[],m=[],_=[],g=[];for(let f=0;f<=i;f++){let v=[],b=f/i,M=0;f===0&&o===0?M=.5/t:f===i&&c===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){let S=A/t;h.x=-e*Math.cos(s+S*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+S*r)*Math.sin(o+b*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(S+M,1-b),v.push(l++)}u.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){let b=u[f][v+1],M=u[f][v],A=u[f+1][v],S=u[f+1][v+1];(f!==0||o>0)&&p.push(b,M,S),(f!==i-1||c<Math.PI)&&p.push(M,A,S)}this.setIndex(p),this.setAttribute("position",new Ge(m,3)),this.setAttribute("normal",new Ge(_,3)),this.setAttribute("uv",new Ge(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ao=class n extends Sr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ro=class n extends _t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],u=new N,h=new N,d=new N;for(let p=0;p<=i;p++)for(let m=0;m<=s;m++){let _=m/s*r,g=p/i*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=s;m++){let _=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,v=(s+1)*p+m;o.push(_,g,v),o.push(g,f,v)}this.setIndex(o),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ni=class extends mi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fh,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Za=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ja=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ws=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ka=class extends ws{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ph:r=e,a=2*t-i;break;case mh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ph:o=e,c=2*i-t;break;case mh:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(s-t),_=m*m,g=_*m,f=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,b=(-1-p)*g+(1.5+p)*_+.5*m,M=p*g-p*_;for(let A=0;A!==a;++A)r[A]=f*o[u+A]+v*o[l+A]+b*o[c+A]+M*o[h+A];return r}},$a=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},ja=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=La(t,this.TimeBufferType),this.values=La(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:La(e.times,Array),values:La(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ka(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case so:t=this.InterpolantFactoryMethodDiscrete;break;case Ba:t=this.InterpolantFactoryMethodLinear;break;case Da:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return Ba;case this.InterpolantFactoryMethodSmooth:return Da}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&rg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Da,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*i,d=h-i,p=h+i;for(let m=0;m!==i;++m){let _=t[h+m];if(_!==t[d+m]||_!==t[p+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Ba;ns=class extends zn{constructor(e,t,i){super(e,t,i)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=so;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;Qa=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};Qa.prototype.ValueTypeName="color";ec=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};ec.prototype.ValueTypeName="number";tc=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)Dn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Co=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new tc(this.times,this.values,this.getValueSize(),e)}};Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;is=class extends zn{constructor(e,t,i){super(e,t,i)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=so;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;nc=class extends zn{constructor(e,t,i,s){super(e,t,i,s)}};nc.prototype.ValueTypeName="vector";ic=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let p=l[h],m=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Lf=new ic,sc=class{constructor(e){this.manager=e!==void 0?e:Lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sc.DEFAULT_MATERIAL_NAME="__DEFAULT";Io=class extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Po=class extends Io{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},dh=new St,Bd=new N,kd=new N,vh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bd),kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kd),t.updateMatrixWorld(),dh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lo=class extends fo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yh=class extends vh{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Do=class extends Io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},rc=class extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Hh="\\[\\]\\.:\\/",og=new RegExp("["+Hh+"]","g"),Vh="[^"+Hh+"]",ag="[^"+Hh.replace("\\.","")+"]",cg=/((?:WC+[\/:])*)/.source.replace("WC",Vh),lg=/(WCOD+)?/.source.replace("WCOD",ag),hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),dg=new RegExp("^"+cg+lg+hg+ug+"$"),fg=["material","materials","bones","map"],Mh=class{constructor(e,t,i){let s=i||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Gt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(og,"")}static parseTrackName(e){let t=dg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);fg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=Mh;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];G2=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180")});function np(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function gg(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){let m=h[d],_=h[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){let _=h[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}function $_(n,e,t,i,s,r,o){let a=new Pe(0),c=r===!0?0:1,l,u,h=null,d=0,p=null;function m(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function _(b){let M=!1,A=m(b);A===null?f(a,c):A&&A.isColor&&(f(A,1),M=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,M){let A=m(M);A&&(A.isCubeTexture||A.mapping===Uo)?(u===void 0&&(u=new Mt(new gi(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Cs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Is.copy(M.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(K_.makeRotationFromEuler(Is)),u.material.toneMapped=gt.getTransfer(A.colorSpace)!==Tt,(h!==A||d!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Mt(new wo(2,2),new An({name:"BackgroundMaterial",uniforms:Cs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=gt.getTransfer(A.colorSpace)!==Tt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,M){b.getRGB(Qc,zh(n)),i.buffers.color.setClear(Qc.r,Qc.g,Qc.b,M,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:_,addToRenderList:g,dispose:v}}function j_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(x,R,D,I,L){let F=!1,O=h(I,D,R);r!==O&&(r=O,l(r.object)),F=p(x,I,D,L),F&&m(x,I,D,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(x,R,D,I),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,R,D){let I=D.wireframe===!0,L=i[x.id];L===void 0&&(L={},i[x.id]=L);let F=L[R.id];F===void 0&&(F={},L[R.id]=F);let O=F[I];return O===void 0&&(O=d(c()),F[I]=O),O}function d(x){let R=[],D=[],I=[];for(let L=0;L<t;L++)R[L]=0,D[L]=0,I[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:I,object:x,attributes:{},index:null}}function p(x,R,D,I){let L=r.attributes,F=R.attributes,O=0,z=D.getAttributes();for(let G in z)if(z[G].location>=0){let se=L[G],ce=F[G];if(ce===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),se===void 0||se.attribute!==ce||ce&&se.data!==ce.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function m(x,R,D,I){let L={},F=R.attributes,O=0,z=D.getAttributes();for(let G in z)if(z[G].location>=0){let se=F[G];se===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(se=x.instanceColor));let ce={};ce.attribute=se,se&&se.data&&(ce.data=se.data),L[G]=ce,O++}r.attributes=L,r.attributesNum=O,r.index=I}function _(){let x=r.newAttributes;for(let R=0,D=x.length;R<D;R++)x[R]=0}function g(x){f(x,0)}function f(x,R){let D=r.newAttributes,I=r.enabledAttributes,L=r.attributeDivisors;D[x]=1,I[x]===0&&(n.enableVertexAttribArray(x),I[x]=1),L[x]!==R&&(n.vertexAttribDivisor(x,R),L[x]=R)}function v(){let x=r.newAttributes,R=r.enabledAttributes;for(let D=0,I=R.length;D<I;D++)R[D]!==x[D]&&(n.disableVertexAttribArray(D),R[D]=0)}function b(x,R,D,I,L,F,O){O===!0?n.vertexAttribIPointer(x,R,D,L,F):n.vertexAttribPointer(x,R,D,I,L,F)}function M(x,R,D,I){_();let L=I.attributes,F=D.getAttributes(),O=R.defaultAttributeValues;for(let z in F){let G=F[z];if(G.location>=0){let ee=L[z];if(ee===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),ee!==void 0){let se=ee.normalized,ce=ee.itemSize,xe=e.get(ee);if(xe===void 0)continue;let ke=xe.buffer,Ye=xe.type,Ze=xe.bytesPerElement,J=Ye===n.INT||Ye===n.UNSIGNED_INT||ee.gpuType===_c;if(ee.isInterleavedBufferAttribute){let te=ee.data,_e=te.stride,Oe=ee.offset;if(te.isInstancedInterleavedBuffer){for(let we=0;we<G.locationSize;we++)f(G.location+we,te.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let we=0;we<G.locationSize;we++)g(G.location+we);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let we=0;we<G.locationSize;we++)b(G.location+we,ce/G.locationSize,Ye,se,_e*Ze,(Oe+ce/G.locationSize*we)*Ze,J)}else{if(ee.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)f(G.location+te,ee.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<G.locationSize;te++)g(G.location+te);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let te=0;te<G.locationSize;te++)b(G.location+te,ce/G.locationSize,Ye,se,ce*Ze,ce/G.locationSize*te*Ze,J)}}else if(O!==void 0){let se=O[z];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(G.location,se);break;case 3:n.vertexAttrib3fv(G.location,se);break;case 4:n.vertexAttrib4fv(G.location,se);break;default:n.vertexAttrib1fv(G.location,se)}}}}v()}function A(){C();for(let x in i){let R=i[x];for(let D in R){let I=R[D];for(let L in I)u(I[L].object),delete I[L];delete R[D]}delete i[x]}}function S(x){if(i[x.id]===void 0)return;let R=i[x.id];for(let D in R){let I=R[D];for(let L in I)u(I[L].object),delete I[L];delete R[D]}delete i[x.id]}function T(x){for(let R in i){let D=i[R];if(D[x.id]===void 0)continue;let I=D[x.id];for(let L in I)u(I[L].object),delete I[L];delete D[x.id]}}function C(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Q_(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];t.update(p,i,1)}function c(l,u,h,d){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],u[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ex(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Yn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let C=T===wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==oi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ai&&!C)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:A,maxSamples:S}}function tx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ui,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,f=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{let v=r?0:i,b=v*4,M=f.clippingState||null;c.value=M,M=u(m,d,b,p);for(let A=0;A!==b;++A)M[A]=t[A];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,m){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let b=0,M=p;b!==_;++b,M+=4)o.copy(h[b]).applyMatrix4(v,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function nx(n){let e=new WeakMap;function t(o,a){return a===pc?o.mapping=Ts:a===mc&&(o.mapping=As),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===pc||a===mc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ga(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function sx(n){let e=[],t=[],i=[],s=n,r=n-Ir+1+Df.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Ir?c=Df[o-n+Ir-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,_=3,g=2,f=1,v=new Float32Array(_*m*p),b=new Float32Array(g*m*p),M=new Float32Array(f*m*p);for(let S=0;S<p;S++){let T=S%3*2/3-1,C=S>2?0:-1,y=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(y,_*m*S),b.set(d,g*m*S);let x=[S,S,S,S,S,S];M.set(x,f*m*S)}let A=new _t;A.setAttribute("position",new yn(v,_)),A.setAttribute("uv",new yn(b,g)),A.setAttribute("faceIndex",new yn(M,f)),e.push(A),s>Ir&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nf(n,e,t){let i=new di(n,e,t);return i.texture.mapping=Uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function el(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function rx(n,e,t){let i=new Float32Array(Ds),s=new N(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ru(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Of(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Bf(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function ru(){return`

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
	`}function ox(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===pc||c===mc,u=c===Ts||c===As;if(l||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new nl(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new nl(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ax(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&mr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function cx(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(h){let d=[],p=h.index,m=h.attributes.position,_=0;if(p!==null){let v=p.array;_=p.version;for(let b=0,M=v.length;b<M;b+=3){let A=v[b+0],S=v[b+1],T=v[b+2];d.push(A,S,S,T,T,A)}}else if(m!==void 0){let v=m.array;_=m.version;for(let b=0,M=v.length/3-1;b<M;b+=3){let A=b+0,S=b+1,T=b+2;d.push(A,S,S,T,T,A)}}else return;let g=new(kh(d)?uo:ho)(d,1);g.version=_;let f=r.get(h);f&&e.remove(f),r.set(h,g)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function lx(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function l(d,p,m){m!==0&&(n.drawElementsInstanced(i,p,r,d*o,m),t.update(p,i,m))}function u(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];t.update(g,i,1)}function h(d,p,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,m);let f=0;for(let v=0;v<m;v++)f+=p[v]*_[v];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ux(n,e,t){let i=new WeakMap,s=new Kt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let y=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;p===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let M=a.attributes.position.count*b,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*A*4*h),T=new co(S,M,A,h);T.type=ai,T.needsUpdate=!0;let C=b*4;for(let x=0;x<h;x++){let R=g[x],D=f[x],I=v[x],L=M*A*4*x;for(let F=0;F<R.count;F++){let O=F*C;p===!0&&(s.fromBufferAttribute(R,F),S[L+O+0]=s.x,S[L+O+1]=s.y,S[L+O+2]=s.z,S[L+O+3]=0),m===!0&&(s.fromBufferAttribute(D,F),S[L+O+4]=s.x,S[L+O+5]=s.y,S[L+O+6]=s.z,S[L+O+7]=0),_===!0&&(s.fromBufferAttribute(I,F),S[L+O+8]=s.x,S[L+O+9]=s.y,S[L+O+10]=s.z,S[L+O+11]=I.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new it(M,A)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function dx(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}function Lr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=zf[s];if(r===void 0&&(r=new Float32Array(s),zf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sl(n,e){let t=Hf[e];t===void 0&&(t=new Int32Array(e),Hf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function _x(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(ln(t,i))return;Wf.set(i),n.uniformMatrix2fv(this.addr,!1,Wf),hn(t,i)}}function xx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(ln(t,i))return;Gf.set(i),n.uniformMatrix3fv(this.addr,!1,Gf),hn(t,i)}}function vx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(ln(t,i))return;Vf.set(i),n.uniformMatrix4fv(this.addr,!1,Vf),hn(t,i)}}function yx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function Sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function Ex(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function Tx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function Ax(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function Rx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(kf.compareFunction=Nh,r=kf):r=ip,t.setTexture2D(e||r,s)}function Cx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||rp,s)}function Ix(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||op,s)}function Px(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sp,s)}function Lx(n){switch(n){case 5126:return fx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return _x;case 35675:return xx;case 35676:return vx;case 5124:case 35670:return yx;case 35667:case 35671:return Mx;case 35668:case 35672:return Sx;case 35669:case 35673:return bx;case 5125:return Ex;case 36294:return wx;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Px}}function Dx(n,e){n.uniform1fv(this.addr,e)}function Ux(n,e){let t=Lr(e,this.size,2);n.uniform2fv(this.addr,t)}function Fx(n,e){let t=Lr(e,this.size,3);n.uniform3fv(this.addr,t)}function Nx(n,e){let t=Lr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ox(n,e){let t=Lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bx(n,e){let t=Lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kx(n,e){let t=Lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zx(n,e){n.uniform1iv(this.addr,e)}function Hx(n,e){n.uniform2iv(this.addr,e)}function Vx(n,e){n.uniform3iv(this.addr,e)}function Gx(n,e){n.uniform4iv(this.addr,e)}function Wx(n,e){n.uniform1uiv(this.addr,e)}function Xx(n,e){n.uniform2uiv(this.addr,e)}function qx(n,e){n.uniform3uiv(this.addr,e)}function Yx(n,e){n.uniform4uiv(this.addr,e)}function Zx(n,e,t){let i=this.cache,s=e.length,r=sl(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ip,r[o])}function Jx(n,e,t){let i=this.cache,s=e.length,r=sl(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rp,r[o])}function Kx(n,e,t){let i=this.cache,s=e.length,r=sl(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||op,r[o])}function $x(n,e,t){let i=this.cache,s=e.length,r=sl(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sp,r[o])}function jx(n){switch(n){case 5126:return Dx;case 35664:return Ux;case 35665:return Fx;case 35666:return Nx;case 35674:return Ox;case 35675:return Bx;case 35676:return kx;case 5124:case 35670:return zx;case 35667:case 35671:return Hx;case 35668:case 35672:return Vx;case 35669:case 35673:return Gx;case 5125:return Wx;case 36294:return Xx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return $x}}function Xf(n,e){n.seq.push(e),n.map[e.id]=e}function Qx(n,e,t){let i=n.name,s=i.length;for(Kh.lastIndex=0;;){let r=Kh.exec(i),o=Kh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Xf(t,l===void 0?new $h(a,n,e):new jh(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Qh(a),Xf(t,h)),t=h}}}function qf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function nv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function iv(n){gt._getMatrix(Yf,gt.workingColorSpace,n);let e=`mat3( ${Yf.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case ro:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Zf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+nv(n.getShaderSource(e),a)}else return r}function sv(n,e){let t=iv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rv(n,e){let t;switch(e){case hf:t="Linear";break;case uf:t="Reinhard";break;case df:t="Cineon";break;case ff:t="ACESFilmic";break;case mf:t="AgX";break;case gf:t="Neutral";break;case pf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ov(){gt.getLuminanceCoefficients(tl);let n=tl.x.toFixed(4),e=tl.y.toFixed(4),t=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function cv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zo(n){return n!==""}function Jf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function eu(n){return n.replace(hv,dv)}function dv(n,e){let t=st[e];if(t===void 0){let i=uv.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return eu(t)}function $f(n){return n.replace(fv,pv)}function pv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function mv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function gv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _v(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function xv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fc:e="ENVMAP_BLENDING_MULTIPLY";break;case cf:e="ENVMAP_BLENDING_MIX";break;case lf:e="ENVMAP_BLENDING_ADD";break}return e}function vv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=mv(t),l=gv(t),u=_v(t),h=xv(t),d=vv(t),p=av(t),m=cv(r),_=s.createProgram(),g,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zo).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zo).join(`
`),f.length>0&&(f+=`
`)):(g=[jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),f=[jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?st.tonemapping_pars_fragment:"",t.toneMapping!==Bi?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,sv("linearToOutputTexel",t.outputColorSpace),ov(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),o=eu(o),o=Jf(o,t),o=Kf(o,t),a=eu(a),a=Jf(a,t),a=Kf(a,t),o=$f(o),a=$f(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=v+g+o,M=v+f+a,A=qf(s,s.VERTEX_SHADER,b),S=qf(s,s.FRAGMENT_SHADER,M);s.attachShader(_,A),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(R){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",I=s.getShaderInfoLog(A)||"",L=s.getShaderInfoLog(S)||"",F=D.trim(),O=I.trim(),z=L.trim(),G=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,S);else{let se=Zf(s,A,"vertex"),ce=Zf(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+se+`
`+ce)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||z==="")&&(ee=!1);ee&&(R.diagnostics={runnable:G,programLog:F,vertexShader:{log:O,prefix:g},fragmentShader:{log:z,prefix:f}})}s.deleteShader(A),s.deleteShader(S),C=new Pr(s,_),y=lv(s,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,ev)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=S,this}function Sv(n,e,t,i,s,r,o){let a=new lo,c=new tu,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,x,R,D,I){let L=D.fog,F=I.geometry,O=y.isMeshStandardMaterial?D.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),G=z&&z.mapping===Uo?z.image.height:null,ee=m[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ce=se!==void 0?se.length:0,xe=0;F.morphAttributes.position!==void 0&&(xe=1),F.morphAttributes.normal!==void 0&&(xe=2),F.morphAttributes.color!==void 0&&(xe=3);let ke,Ye,Ze,J;if(ee){let bt=vi[ee];ke=bt.vertexShader,Ye=bt.fragmentShader}else ke=y.vertexShader,Ye=y.fragmentShader,c.update(y),Ze=c.getVertexShaderID(y),J=c.getFragmentShaderID(y);let te=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Oe=I.isInstancedMesh===!0,we=I.isBatchedMesh===!0,rt=!!y.map,wt=!!y.matcap,U=!!z,ot=!!y.aoMap,Fe=!!y.lightMap,Ne=!!y.bumpMap,Me=!!y.normalMap,Ot=!!y.displacementMap,ve=!!y.emissiveMap,Je=!!y.metalnessMap,tn=!!y.roughnessMap,Xt=y.anisotropy>0,P=y.clearcoat>0,E=y.dispersion>0,W=y.iridescence>0,Z=y.sheen>0,ne=y.transmission>0,Y=Xt&&!!y.anisotropyMap,Ce=P&&!!y.clearcoatMap,he=P&&!!y.clearcoatNormalMap,be=P&&!!y.clearcoatRoughnessMap,Te=W&&!!y.iridescenceMap,re=W&&!!y.iridescenceThicknessMap,pe=Z&&!!y.sheenColorMap,De=Z&&!!y.sheenRoughnessMap,Ae=!!y.specularMap,me=!!y.specularColorMap,et=!!y.specularIntensityMap,B=ne&&!!y.transmissionMap,le=ne&&!!y.thicknessMap,de=!!y.gradientMap,Se=!!y.alphaMap,oe=y.alphaTest>0,Q=!!y.alphaHash,Re=!!y.extensions,Ke=Bi;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ke=n.toneMapping);let Bt={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:ke,fragmentShader:Ye,defines:y.defines,customVertexShaderID:Ze,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:we,batchingColor:we&&I._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&I.instanceColor!==null,instancingMorph:Oe&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:bs,alphaToCoverage:!!y.alphaToCoverage,map:rt,matcap:wt,envMap:U,envMapMode:U&&z.mapping,envMapCubeUVHeight:G,aoMap:ot,lightMap:Fe,bumpMap:Ne,normalMap:Me,displacementMap:d&&Ot,emissiveMap:ve,normalMapObjectSpace:Me&&y.normalMapType===yf,normalMapTangentSpace:Me&&y.normalMapType===Fh,metalnessMap:Je,roughnessMap:tn,anisotropy:Xt,anisotropyMap:Y,clearcoat:P,clearcoatMap:Ce,clearcoatNormalMap:he,clearcoatRoughnessMap:be,dispersion:E,iridescence:W,iridescenceMap:Te,iridescenceThicknessMap:re,sheen:Z,sheenColorMap:pe,sheenRoughnessMap:De,specularMap:Ae,specularColorMap:me,specularIntensityMap:et,transmission:ne,transmissionMap:B,thicknessMap:le,gradientMap:de,opaque:y.transparent===!1&&y.blending===Ms&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:oe,alphaHash:Q,combine:y.combine,mapUv:rt&&_(y.map.channel),aoMapUv:ot&&_(y.aoMap.channel),lightMapUv:Fe&&_(y.lightMap.channel),bumpMapUv:Ne&&_(y.bumpMap.channel),normalMapUv:Me&&_(y.normalMap.channel),displacementMapUv:Ot&&_(y.displacementMap.channel),emissiveMapUv:ve&&_(y.emissiveMap.channel),metalnessMapUv:Je&&_(y.metalnessMap.channel),roughnessMapUv:tn&&_(y.roughnessMap.channel),anisotropyMapUv:Y&&_(y.anisotropyMap.channel),clearcoatMapUv:Ce&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(y.sheenRoughnessMap.channel),specularMapUv:Ae&&_(y.specularMap.channel),specularColorMapUv:me&&_(y.specularColorMap.channel),specularIntensityMapUv:et&&_(y.specularIntensityMap.channel),transmissionMapUv:B&&_(y.transmissionMap.channel),thicknessMapUv:le&&_(y.thicknessMap.channel),alphaMapUv:Se&&_(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Me||Xt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(rt||Se),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:xe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:rt&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===Tt,decodeVideoTextureEmissive:ve&&y.emissiveMap.isVideoTexture===!0&&gt.getTransfer(y.emissiveMap.colorSpace)===Tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zt,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&y.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function f(y){let x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)x.push(R),x.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(v(x,y),b(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function v(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){let x=m[y.type],R;if(x){let D=vi[x];R=Pf.clone(D.uniforms)}else R=y.uniforms;return R}function A(y,x){let R;for(let D=0,I=u.length;D<I;D++){let L=u[D];if(L.cacheKey===x){R=L,++R.usedTimes;break}}return R===void 0&&(R=new yv(n,x,y,r),u.push(R)),R}function S(y){if(--y.usedTimes===0){let x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function T(y){c.remove(y)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:M,acquireProgram:A,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:C}}function bv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ev(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ep(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,p,m,_,g){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=h.renderOrder,f.z=_,f.group=g),e++,f}function a(h,d,p,m,_,g){let f=o(h,d,p,m,_,g);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(h,d,p,m,_,g){let f=o(h,d,p,m,_,g);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||Ev),i.length>1&&i.sort(d||Qf),s.length>1&&s.sort(d||Qf)}function u(){for(let h=e,d=n.length;h<d;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function wv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new ep,n.set(i,[o])):s>=r.length?(o=new ep,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Tv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Pe};break;case"SpotLight":t={position:new N,direction:new N,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Av(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Cv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Iv(n){let e=new Tv,t=Av(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);let s=new N,r=new St,o=new St;function a(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,m=0,_=0,g=0,f=0,v=0,b=0,M=0,A=0,S=0,T=0;l.sort(Cv);for(let y=0,x=l.length;y<x;y++){let R=l[y],D=R.color,I=R.intensity,L=R.distance,F=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=D.r*I,h+=D.g*I,d+=D.b*I;else if(R.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(R.sh.coefficients[O],I);T++}else if(R.isDirectionalLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let z=R.shadow,G=t.get(R);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=R.shadow.matrix,v++}i.directional[p]=O,p++}else if(R.isSpotLight){let O=e.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(D).multiplyScalar(I),O.distance=L,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,i.spot[_]=O;let z=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,z.updateMatrices(R),R.castShadow&&S++),i.spotLightMatrix[_]=z.matrix,R.castShadow){let G=t.get(R);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=F,M++}_++}else if(R.isRectAreaLight){let O=e.get(R);O.color.copy(D).multiplyScalar(I),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=O,g++}else if(R.isPointLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){let z=R.shadow,G=t.get(R);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,G.shadowCameraNear=z.camera.near,G.shadowCameraFar=z.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=F,i.pointShadowMatrix[m]=R.shadow.matrix,b++}i.point[m]=O,m++}else if(R.isHemisphereLight){let O=e.get(R);O.skyColor.copy(R.color).multiplyScalar(I),O.groundColor.copy(R.groundColor).multiplyScalar(I),i.hemi[f]=O,f++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==p||C.pointLength!==m||C.spotLength!==_||C.rectAreaLength!==g||C.hemiLength!==f||C.numDirectionalShadows!==v||C.numPointShadows!==b||C.numSpotShadows!==M||C.numSpotMaps!==A||C.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+A-S,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=T,C.directionalLength=p,C.pointLength=m,C.spotLength=_,C.rectAreaLength=g,C.hemiLength=f,C.numDirectionalShadows=v,C.numPointShadows=b,C.numSpotShadows=M,C.numSpotMaps=A,C.numLightProbes=T,i.version=Rv++)}function c(l,u){let h=0,d=0,p=0,m=0,_=0,g=u.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){let b=l[f];if(b.isDirectionalLight){let M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(b.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let M=i.rectArea[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let M=i.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:i}}function tp(n){let e=new Iv(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Pv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new tp(n),e.set(s,[a])):r>=o.length?(a=new tp(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function Uv(n,e,t){let i=new vr,s=new it,r=new it,o=new Kt,a=new Za({depthPacking:vf}),c=new Ja,l={},u=t.maxTextureSize,h={[Di]:mn,[mn]:Di,[zt]:zt},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Lv,fragmentShader:Dv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new _t;m.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Mt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh;let f=this.type;this.render=function(S,T,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let y=n.getRenderTarget(),x=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Oi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let I=f!==xi&&this.type===xi,L=f===xi&&this.type!==xi;for(let F=0,O=S.length;F<O;F++){let z=S[F],G=z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ee=G.getFrameExtents();if(s.multiply(ee),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,G.mapSize.y=r.y)),G.map===null||I===!0||L===!0){let ce=this.type!==xi?{minFilter:Ln,magFilter:Ln}:{};G.map!==null&&G.map.dispose(),G.map=new di(s.x,s.y,ce),G.map.texture.name=z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let se=G.getViewportCount();for(let ce=0;ce<se;ce++){let xe=G.getViewport(ce);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),D.viewport(o),G.updateMatrices(z,ce),i=G.getFrustum(),M(T,C,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===xi&&v(G,C),G.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(y,x,R)};function v(S,T){let C=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new di(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,C,d,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,C,p,_,null)}function b(S,T,C,y){let x=null,R=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)x=R;else if(x=C.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let D=x.uuid,I=T.uuid,L=l[D];L===void 0&&(L={},l[D]=L);let F=L[I];F===void 0&&(F=x.clone(),L[I]=F,T.addEventListener("dispose",A)),x=F}if(x.visible=T.visible,x.wireframe=T.wireframe,y===xi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let D=n.properties.get(x);D.light=C}return x}function M(S,T,C,y,x){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===xi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let I=e.update(S),L=S.material;if(Array.isArray(L)){let F=I.groups;for(let O=0,z=F.length;O<z;O++){let G=F[O],ee=L[G.materialIndex];if(ee&&ee.visible){let se=b(S,ee,y,x);S.onBeforeShadow(n,S,T,C,I,se,G),n.renderBufferDirect(C,null,I,se,S,G),S.onAfterShadow(n,S,T,C,I,se,G)}}}else if(L.visible){let F=b(S,L,y,x);S.onBeforeShadow(n,S,T,C,I,F,null),n.renderBufferDirect(C,null,I,F,S,null),S.onAfterShadow(n,S,T,C,I,F,null)}}let D=S.children;for(let I=0,L=D.length;I<L;I++)M(D[I],T,C,y,x)}function A(S){S.target.removeEventListener("dispose",A);for(let C in l){let y=l[C],x=S.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}function Nv(n,e){function t(){let B=!1,le=new Kt,de=null,Se=new Kt(0,0,0,0);return{setMask:function(oe){de!==oe&&!B&&(n.colorMask(oe,oe,oe,oe),de=oe)},setLocked:function(oe){B=oe},setClear:function(oe,Q,Re,Ke,Bt){Bt===!0&&(oe*=Ke,Q*=Ke,Re*=Ke),le.set(oe,Q,Re,Ke),Se.equals(le)===!1&&(n.clearColor(oe,Q,Re,Ke),Se.copy(le))},reset:function(){B=!1,de=null,Se.set(-1,0,0,0)}}}function i(){let B=!1,le=!1,de=null,Se=null,oe=null;return{setReversed:function(Q){if(le!==Q){let Re=e.get("EXT_clip_control");Q?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),le=Q;let Ke=oe;oe=null,this.setClear(Ke)}},getReversed:function(){return le},setTest:function(Q){Q?te(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(Q){de!==Q&&!B&&(n.depthMask(Q),de=Q)},setFunc:function(Q){if(le&&(Q=Fv[Q]),Se!==Q){switch(Q){case oc:n.depthFunc(n.NEVER);break;case ac:n.depthFunc(n.ALWAYS);break;case cc:n.depthFunc(n.LESS);break;case Ss:n.depthFunc(n.LEQUAL);break;case lc:n.depthFunc(n.EQUAL);break;case hc:n.depthFunc(n.GEQUAL);break;case uc:n.depthFunc(n.GREATER);break;case dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=Q}},setLocked:function(Q){B=Q},setClear:function(Q){oe!==Q&&(le&&(Q=1-Q),n.clearDepth(Q),oe=Q)},reset:function(){B=!1,de=null,Se=null,oe=null,le=!1}}}function s(){let B=!1,le=null,de=null,Se=null,oe=null,Q=null,Re=null,Ke=null,Bt=null;return{setTest:function(bt){B||(bt?te(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(bt){le!==bt&&!B&&(n.stencilMask(bt),le=bt)},setFunc:function(bt,wi,hi){(de!==bt||Se!==wi||oe!==hi)&&(n.stencilFunc(bt,wi,hi),de=bt,Se=wi,oe=hi)},setOp:function(bt,wi,hi){(Q!==bt||Re!==wi||Ke!==hi)&&(n.stencilOp(bt,wi,hi),Q=bt,Re=wi,Ke=hi)},setLocked:function(bt){B=bt},setClear:function(bt){Bt!==bt&&(n.clearStencil(bt),Bt=bt)},reset:function(){B=!1,le=null,de=null,Se=null,oe=null,Q=null,Re=null,Ke=null,Bt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,p=[],m=null,_=!1,g=null,f=null,v=null,b=null,M=null,A=null,S=null,T=new Pe(0,0,0),C=0,y=!1,x=null,R=null,D=null,I=null,L=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,z=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=z>=1):G.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=z>=2);let ee=null,se={},ce=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),ke=new Kt().fromArray(ce),Ye=new Kt().fromArray(xe);function Ze(B,le,de,Se){let oe=new Uint8Array(4),Q=n.createTexture();n.bindTexture(B,Q),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<de;Re++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(le+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return Q}let J={};J[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(Ss),Ne(!1),Me(Sh),te(n.CULL_FACE),ot(Oi);function te(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function _e(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Oe(B,le){return h[B]!==le?(n.bindFramebuffer(B,le),h[B]=le,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=le),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=le),!0):!1}function we(B,le){let de=p,Se=!1;if(B){de=d.get(le),de===void 0&&(de=[],d.set(le,de));let oe=B.textures;if(de.length!==oe.length||de[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Re=oe.length;Q<Re;Q++)de[Q]=n.COLOR_ATTACHMENT0+Q;de.length=oe.length,Se=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Se=!0);Se&&n.drawBuffers(de)}function rt(B){return m!==B?(n.useProgram(B),m=B,!0):!1}let wt={[ts]:n.FUNC_ADD,[Wd]:n.FUNC_SUBTRACT,[Xd]:n.FUNC_REVERSE_SUBTRACT};wt[qd]=n.MIN,wt[Yd]=n.MAX;let U={[Zd]:n.ZERO,[Jd]:n.ONE,[Kd]:n.SRC_COLOR,[Ua]:n.SRC_ALPHA,[nf]:n.SRC_ALPHA_SATURATE,[ef]:n.DST_COLOR,[jd]:n.DST_ALPHA,[$d]:n.ONE_MINUS_SRC_COLOR,[Fa]:n.ONE_MINUS_SRC_ALPHA,[tf]:n.ONE_MINUS_DST_COLOR,[Qd]:n.ONE_MINUS_DST_ALPHA,[sf]:n.CONSTANT_COLOR,[rf]:n.ONE_MINUS_CONSTANT_COLOR,[of]:n.CONSTANT_ALPHA,[af]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(B,le,de,Se,oe,Q,Re,Ke,Bt,bt){if(B===Oi){_===!0&&(_e(n.BLEND),_=!1);return}if(_===!1&&(te(n.BLEND),_=!0),B!==Gd){if(B!==g||bt!==y){if((f!==ts||M!==ts)&&(n.blendEquation(n.FUNC_ADD),f=ts,M=ts),bt)switch(B){case Ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eh:n.blendFunc(n.ONE,n.ONE);break;case wh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Th:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Th:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}v=null,b=null,A=null,S=null,T.set(0,0,0),C=0,g=B,y=bt}return}oe=oe||le,Q=Q||de,Re=Re||Se,(le!==f||oe!==M)&&(n.blendEquationSeparate(wt[le],wt[oe]),f=le,M=oe),(de!==v||Se!==b||Q!==A||Re!==S)&&(n.blendFuncSeparate(U[de],U[Se],U[Q],U[Re]),v=de,b=Se,A=Q,S=Re),(Ke.equals(T)===!1||Bt!==C)&&(n.blendColor(Ke.r,Ke.g,Ke.b,Bt),T.copy(Ke),C=Bt),g=B,y=!1}function Fe(B,le){B.side===zt?_e(n.CULL_FACE):te(n.CULL_FACE);let de=B.side===mn;le&&(de=!de),Ne(de),B.blending===Ms&&B.transparent===!1?ot(Oi):ot(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let Se=B.stencilWrite;a.setTest(Se),Se&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ve(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(B){x!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),x=B)}function Me(B){B!==zd?(te(n.CULL_FACE),B!==R&&(B===Sh?n.cullFace(n.BACK):B===Hd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),R=B}function Ot(B){B!==D&&(O&&n.lineWidth(B),D=B)}function ve(B,le,de){B?(te(n.POLYGON_OFFSET_FILL),(I!==le||L!==de)&&(n.polygonOffset(le,de),I=le,L=de)):_e(n.POLYGON_OFFSET_FILL)}function Je(B){B?te(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function tn(B){B===void 0&&(B=n.TEXTURE0+F-1),ee!==B&&(n.activeTexture(B),ee=B)}function Xt(B,le,de){de===void 0&&(ee===null?de=n.TEXTURE0+F-1:de=ee);let Se=se[de];Se===void 0&&(Se={type:void 0,texture:void 0},se[de]=Se),(Se.type!==B||Se.texture!==le)&&(ee!==de&&(n.activeTexture(de),ee=de),n.bindTexture(B,le||J[B]),Se.type=B,Se.texture=le)}function P(){let B=se[ee];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(B){ke.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ke.copy(B))}function De(B){Ye.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Ye.copy(B))}function Ae(B,le){let de=l.get(le);de===void 0&&(de=new WeakMap,l.set(le,de));let Se=de.get(B);Se===void 0&&(Se=n.getUniformBlockIndex(le,B.name),de.set(B,Se))}function me(B,le){let Se=l.get(le).get(B);c.get(le)!==Se&&(n.uniformBlockBinding(le,Se,B.__bindingPointIndex),c.set(le,Se))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ee=null,se={},h={},d=new WeakMap,p=[],m=null,_=!1,g=null,f=null,v=null,b=null,M=null,A=null,S=null,T=new Pe(0,0,0),C=0,y=!1,x=null,R=null,D=null,I=null,L=null,ke.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:_e,bindFramebuffer:Oe,drawBuffers:we,useProgram:rt,setBlending:ot,setMaterial:Fe,setFlipSided:Ne,setCullFace:Me,setLineWidth:Ot,setPolygonOffset:ve,setScissorTest:Je,activeTexture:tn,bindTexture:Xt,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:Te,texImage3D:re,updateUBOMapping:Ae,uniformBlockBinding:me,texStorage2D:he,texStorage3D:be,texSubImage2D:Z,texSubImage3D:ne,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ce,scissor:pe,viewport:De,reset:et}}function Ov(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return p?new OffscreenCanvas(P,E):ao("canvas")}function _(P,E,W){let Z=1,ne=Xt(P);if((ne.width>W||ne.height>W)&&(Z=W/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Y=Math.floor(Z*ne.width),Ce=Math.floor(Z*ne.height);h===void 0&&(h=m(Y,Ce));let he=E?m(Y,Ce):h;return he.width=Y,he.height=Ce,he.getContext("2d").drawImage(P,0,0,Y,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Y+"x"+Ce+")."),he}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function g(P){return P.generateMipmaps}function f(P){n.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(P,E,W,Z,ne=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=E;if(E===n.RED&&(W===n.FLOAT&&(Y=n.R32F),W===n.HALF_FLOAT&&(Y=n.R16F),W===n.UNSIGNED_BYTE&&(Y=n.R8)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Y=n.R8UI),W===n.UNSIGNED_SHORT&&(Y=n.R16UI),W===n.UNSIGNED_INT&&(Y=n.R32UI),W===n.BYTE&&(Y=n.R8I),W===n.SHORT&&(Y=n.R16I),W===n.INT&&(Y=n.R32I)),E===n.RG&&(W===n.FLOAT&&(Y=n.RG32F),W===n.HALF_FLOAT&&(Y=n.RG16F),W===n.UNSIGNED_BYTE&&(Y=n.RG8)),E===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Y=n.RG8UI),W===n.UNSIGNED_SHORT&&(Y=n.RG16UI),W===n.UNSIGNED_INT&&(Y=n.RG32UI),W===n.BYTE&&(Y=n.RG8I),W===n.SHORT&&(Y=n.RG16I),W===n.INT&&(Y=n.RG32I)),E===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),W===n.UNSIGNED_INT&&(Y=n.RGB32UI),W===n.BYTE&&(Y=n.RGB8I),W===n.SHORT&&(Y=n.RGB16I),W===n.INT&&(Y=n.RGB32I)),E===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),W===n.UNSIGNED_INT&&(Y=n.RGBA32UI),W===n.BYTE&&(Y=n.RGBA8I),W===n.SHORT&&(Y=n.RGBA16I),W===n.INT&&(Y=n.RGBA32I)),E===n.RGB&&(W===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),E===n.RGBA){let Ce=ne?ro:gt.getTransfer(Z);W===n.FLOAT&&(Y=n.RGBA32F),W===n.HALF_FLOAT&&(Y=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Y=Ce===Tt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(P,E){let W;return P?E===null||E===rs||E===Tr?W=n.DEPTH24_STENCIL8:E===ai?W=n.DEPTH32F_STENCIL8:E===Er&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===rs||E===Tr?W=n.DEPTH_COMPONENT24:E===ai?W=n.DEPTH_COMPONENT32F:E===Er&&(W=n.DEPTH_COMPONENT16),W}function A(P,E){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ln&&P.minFilter!==ri?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function S(P){let E=P.target;E.removeEventListener("dispose",S),C(E),E.isVideoTexture&&u.delete(E)}function T(P){let E=P.target;E.removeEventListener("dispose",T),x(E)}function C(P){let E=i.get(P);if(E.__webglInit===void 0)return;let W=P.source,Z=d.get(W);if(Z){let ne=Z[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&y(P),Object.keys(Z).length===0&&d.delete(W)}i.remove(P)}function y(P){let E=i.get(P);n.deleteTexture(E.__webglTexture);let W=P.source,Z=d.get(W);delete Z[E.__cacheKey],o.memory.textures--}function x(P){let E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let ne=0;ne<E.__webglFramebuffer[Z].length;ne++)n.deleteFramebuffer(E.__webglFramebuffer[Z][ne]);else n.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)n.deleteFramebuffer(E.__webglFramebuffer[Z]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=P.textures;for(let Z=0,ne=W.length;Z<ne;Z++){let Y=i.get(W[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(W[Z])}i.remove(P)}let R=0;function D(){R=0}function I(){let P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function L(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function F(P,E){let W=i.get(P);if(P.isVideoTexture&&Je(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,P,E);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function O(P,E){let W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){J(W,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function z(P,E){let W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){J(W,P,E);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function G(P,E){let W=i.get(P);if(P.version>0&&W.__version!==P.version){te(W,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}let ee={[Na]:n.REPEAT,[es]:n.CLAMP_TO_EDGE,[Oa]:n.MIRRORED_REPEAT},se={[Ln]:n.NEAREST,[_f]:n.NEAREST_MIPMAP_NEAREST,[Fo]:n.NEAREST_MIPMAP_LINEAR,[ri]:n.LINEAR,[gc]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},ce={[Mf]:n.NEVER,[Af]:n.ALWAYS,[Sf]:n.LESS,[Nh]:n.LEQUAL,[bf]:n.EQUAL,[Tf]:n.GEQUAL,[Ef]:n.GREATER,[wf]:n.NOTEQUAL};function xe(P,E){if(E.type===ai&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ri||E.magFilter===gc||E.magFilter===Fo||E.magFilter===ss||E.minFilter===ri||E.minFilter===gc||E.minFilter===Fo||E.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ee[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ee[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ee[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,se[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==Fo&&E.minFilter!==ss||E.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ke(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",S));let Z=E.source,ne=d.get(Z);ne===void 0&&(ne={},d.set(Z,ne));let Y=L(E);if(Y!==P.__cacheKey){ne[Y]===void 0&&(ne[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ne[Y].usedTimes++;let Ce=ne[P.__cacheKey];Ce!==void 0&&(ne[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&y(E)),P.__cacheKey=Y,P.__webglTexture=ne[Y].texture}return W}function Ye(P,E,W){return Math.floor(Math.floor(P/W)/E)}function Ze(P,E,W,Z){let Y=P.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,W,Z,E.data);else{Y.sort((re,pe)=>re.start-pe.start);let Ce=0;for(let re=1;re<Y.length;re++){let pe=Y[Ce],De=Y[re],Ae=pe.start+pe.count,me=Ye(De.start,E.width,4),et=Ye(pe.start,E.width,4);De.start<=Ae+1&&me===et&&Ye(De.start+De.count-1,E.width,4)===me?pe.count=Math.max(pe.count,De.start+De.count-pe.start):(++Ce,Y[Ce]=De)}Y.length=Ce+1;let he=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let re=0,pe=Y.length;re<pe;re++){let De=Y[re],Ae=Math.floor(De.start/4),me=Math.ceil(De.count/4),et=Ae%E.width,B=Math.floor(Ae/E.width),le=me,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,et),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,et,B,le,de,W,Z,E.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function J(P,E,W){let Z=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=n.TEXTURE_3D);let ne=ke(P,E),Y=E.source;t.bindTexture(Z,P.__webglTexture,n.TEXTURE0+W);let Ce=i.get(Y);if(Y.version!==Ce.__version||ne===!0){t.activeTexture(n.TEXTURE0+W);let he=gt.getPrimaries(gt.workingColorSpace),be=E.colorSpace===ki?null:gt.getPrimaries(E.colorSpace),Te=E.colorSpace===ki||he===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let re=_(E.image,!1,s.maxTextureSize);re=tn(E,re);let pe=r.convert(E.format,E.colorSpace),De=r.convert(E.type),Ae=b(E.internalFormat,pe,De,E.colorSpace,E.isVideoTexture);xe(Z,E);let me,et=E.mipmaps,B=E.isVideoTexture!==!0,le=Ce.__version===void 0||ne===!0,de=Y.dataReady,Se=A(E,re);if(E.isDepthTexture)Ae=M(E.format===Ar,E.type),le&&(B?t.texStorage2D(n.TEXTURE_2D,1,Ae,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ae,re.width,re.height,0,pe,De,null));else if(E.isDataTexture)if(et.length>0){B&&le&&t.texStorage2D(n.TEXTURE_2D,Se,Ae,et[0].width,et[0].height);for(let oe=0,Q=et.length;oe<Q;oe++)me=et[oe],B?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,me.width,me.height,pe,De,me.data):t.texImage2D(n.TEXTURE_2D,oe,Ae,me.width,me.height,0,pe,De,me.data);E.generateMipmaps=!1}else B?(le&&t.texStorage2D(n.TEXTURE_2D,Se,Ae,re.width,re.height),de&&Ze(E,re,pe,De)):t.texImage2D(n.TEXTURE_2D,0,Ae,re.width,re.height,0,pe,De,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){B&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ae,et[0].width,et[0].height,re.depth);for(let oe=0,Q=et.length;oe<Q;oe++)if(me=et[oe],E.format!==Yn)if(pe!==null)if(B){if(de)if(E.layerUpdates.size>0){let Re=Gh(me.width,me.height,E.format,E.type);for(let Ke of E.layerUpdates){let Bt=me.data.subarray(Ke*Re/me.data.BYTES_PER_ELEMENT,(Ke+1)*Re/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Ke,me.width,me.height,1,pe,Bt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,re.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ae,me.width,me.height,re.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,re.depth,pe,De,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ae,me.width,me.height,re.depth,0,pe,De,me.data)}else{B&&le&&t.texStorage2D(n.TEXTURE_2D,Se,Ae,et[0].width,et[0].height);for(let oe=0,Q=et.length;oe<Q;oe++)me=et[oe],E.format!==Yn?pe!==null?B?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ae,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,me.width,me.height,pe,De,me.data):t.texImage2D(n.TEXTURE_2D,oe,Ae,me.width,me.height,0,pe,De,me.data)}else if(E.isDataArrayTexture)if(B){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ae,re.width,re.height,re.depth),de)if(E.layerUpdates.size>0){let oe=Gh(re.width,re.height,E.format,E.type);for(let Q of E.layerUpdates){let Re=re.data.subarray(Q*oe/re.data.BYTES_PER_ELEMENT,(Q+1)*oe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,pe,De,Re)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,pe,De,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,re.width,re.height,re.depth,0,pe,De,re.data);else if(E.isData3DTexture)B?(le&&t.texStorage3D(n.TEXTURE_3D,Se,Ae,re.width,re.height,re.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,pe,De,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,re.width,re.height,re.depth,0,pe,De,re.data);else if(E.isFramebufferTexture){if(le)if(B)t.texStorage2D(n.TEXTURE_2D,Se,Ae,re.width,re.height);else{let oe=re.width,Q=re.height;for(let Re=0;Re<Se;Re++)t.texImage2D(n.TEXTURE_2D,Re,Ae,oe,Q,0,pe,De,null),oe>>=1,Q>>=1}}else if(et.length>0){if(B&&le){let oe=Xt(et[0]);t.texStorage2D(n.TEXTURE_2D,Se,Ae,oe.width,oe.height)}for(let oe=0,Q=et.length;oe<Q;oe++)me=et[oe],B?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,pe,De,me):t.texImage2D(n.TEXTURE_2D,oe,Ae,pe,De,me);E.generateMipmaps=!1}else if(B){if(le){let oe=Xt(re);t.texStorage2D(n.TEXTURE_2D,Se,Ae,oe.width,oe.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,De,re)}else t.texImage2D(n.TEXTURE_2D,0,Ae,pe,De,re);g(E)&&f(Z),Ce.__version=Y.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function te(P,E,W){if(E.image.length!==6)return;let Z=ke(P,E),ne=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+W);let Y=i.get(ne);if(ne.version!==Y.__version||Z===!0){t.activeTexture(n.TEXTURE0+W);let Ce=gt.getPrimaries(gt.workingColorSpace),he=E.colorSpace===ki?null:gt.getPrimaries(E.colorSpace),be=E.colorSpace===ki||Ce===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Te=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let Q=0;Q<6;Q++)!Te&&!re?pe[Q]=_(E.image[Q],!0,s.maxCubemapSize):pe[Q]=re?E.image[Q].image:E.image[Q],pe[Q]=tn(E,pe[Q]);let De=pe[0],Ae=r.convert(E.format,E.colorSpace),me=r.convert(E.type),et=b(E.internalFormat,Ae,me,E.colorSpace),B=E.isVideoTexture!==!0,le=Y.__version===void 0||Z===!0,de=ne.dataReady,Se=A(E,De);xe(n.TEXTURE_CUBE_MAP,E);let oe;if(Te){B&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,et,De.width,De.height);for(let Q=0;Q<6;Q++){oe=pe[Q].mipmaps;for(let Re=0;Re<oe.length;Re++){let Ke=oe[Re];E.format!==Yn?Ae!==null?B?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,0,0,Ke.width,Ke.height,Ae,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,et,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,0,0,Ke.width,Ke.height,Ae,me,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,et,Ke.width,Ke.height,0,Ae,me,Ke.data)}}}else{if(oe=E.mipmaps,B&&le){oe.length>0&&Se++;let Q=Xt(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,et,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,pe[Q].width,pe[Q].height,Ae,me,pe[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,et,pe[Q].width,pe[Q].height,0,Ae,me,pe[Q].data);for(let Re=0;Re<oe.length;Re++){let Bt=oe[Re].image[Q].image;B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,0,0,Bt.width,Bt.height,Ae,me,Bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,et,Bt.width,Bt.height,0,Ae,me,Bt.data)}}else{B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae,me,pe[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,et,Ae,me,pe[Q]);for(let Re=0;Re<oe.length;Re++){let Ke=oe[Re];B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,0,0,Ae,me,Ke.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,et,Ae,me,Ke.image[Q])}}}g(E)&&f(n.TEXTURE_CUBE_MAP),Y.__version=ne.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function _e(P,E,W,Z,ne,Y){let Ce=r.convert(W.format,W.colorSpace),he=r.convert(W.type),be=b(W.internalFormat,Ce,he,W.colorSpace),Te=i.get(E),re=i.get(W);if(re.__renderTarget=E,!Te.__hasExternalTextures){let pe=Math.max(1,E.width>>Y),De=Math.max(1,E.height>>Y);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,Y,be,pe,De,E.depth,0,Ce,he,null):t.texImage2D(ne,Y,be,pe,De,0,Ce,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ne,re.__webglTexture,0,Ot(E)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ne,re.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(P,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){let Z=E.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,Y=M(E.stencilBuffer,ne),Ce=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=Ot(E);ve(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,Y,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,Y,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Y,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,P)}else{let Z=E.textures;for(let ne=0;ne<Z.length;ne++){let Y=Z[ne],Ce=r.convert(Y.format,Y.colorSpace),he=r.convert(Y.type),be=b(Y.internalFormat,Ce,he,Y.colorSpace),Te=Ot(E);W&&ve(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,be,E.width,E.height):ve(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,be,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,be,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);let ne=Z.__webglTexture,Y=Ot(E);if(E.depthTexture.format===fr)ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(E.depthTexture.format===Ar)ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function rt(P){let E=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let Z=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){let ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=Z}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");let Z=P.texture.mipmaps;Z&&Z.length>0?we(E.__webglFramebuffer[0],P):we(E.__webglFramebuffer,P)}else if(W){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=n.createRenderbuffer(),Oe(E.__webglDepthbuffer[Z],P,!1);else{let ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Y)}}else{let Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Oe(E.__webglDepthbuffer,P,!1);else{let ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(P,E,W){let Z=i.get(P);E!==void 0&&_e(Z.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&rt(P)}function U(P){let E=P.texture,W=i.get(P),Z=i.get(E);P.addEventListener("dispose",T);let ne=P.textures,Y=P.isWebGLCubeRenderTarget===!0,Ce=ne.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=E.version,o.memory.textures++),Y){W.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[he]=[];for(let be=0;be<E.mipmaps.length;be++)W.__webglFramebuffer[he][be]=n.createFramebuffer()}else W.__webglFramebuffer[he]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)W.__webglFramebuffer[he]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let he=0,be=ne.length;he<be;he++){let Te=i.get(ne[he]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&ve(P)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){let be=ne[he];W.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[he]);let Te=r.convert(be.format,be.colorSpace),re=r.convert(be.type),pe=b(be.internalFormat,Te,re,be.colorSpace,P.isXRRenderTarget===!0),De=Ot(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,pe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,W.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),xe(n.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)_e(W.__webglFramebuffer[he][be],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,be);else _e(W.__webglFramebuffer[he],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(E)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let he=0,be=ne.length;he<be;he++){let Te=ne[he],re=i.get(Te),pe=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,re.__webglTexture),xe(pe,Te),_e(W.__webglFramebuffer,P,Te,n.COLOR_ATTACHMENT0+he,pe,0),g(Te)&&f(pe)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Z.__webglTexture),xe(he,E),E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)_e(W.__webglFramebuffer[be],P,E,n.COLOR_ATTACHMENT0,he,be);else _e(W.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,he,0);g(E)&&f(he),t.unbindTexture()}P.depthBuffer&&rt(P)}function ot(P){let E=P.textures;for(let W=0,Z=E.length;W<Z;W++){let ne=E[W];if(g(ne)){let Y=v(P),Ce=i.get(ne).__webglTexture;t.bindTexture(Y,Ce),f(Y),t.unbindTexture()}}}let Fe=[],Ne=[];function Me(P){if(P.samples>0){if(ve(P)===!1){let E=P.textures,W=P.width,Z=P.height,ne=n.COLOR_BUFFER_BIT,Y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(P),he=E.length>1;if(he)for(let Te=0;Te<E.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);let be=P.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);let re=i.get(E[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,W,Z,0,0,W,Z,ne,n.NEAREST),c===!0&&(Fe.length=0,Ne.length=0,Fe.push(n.COLOR_ATTACHMENT0+Te),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Fe.push(Y),Ne.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Te=0;Te<E.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);let re=i.get(E[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ot(P){return Math.min(s.maxSamples,P.samples)}function ve(P){let E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Je(P){let E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function tn(P,E){let W=P.colorSpace,Z=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==bs&&W!==ki&&(gt.getTransfer(W)===Tt?(Z!==Yn||ne!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Xt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=z,this.setTextureCube=G,this.rebindTextures=wt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ve}function Bv(n,e){function t(i,s=ki){let r,o=gt.getTransfer(s);if(i===oi)return n.UNSIGNED_BYTE;if(i===xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ih)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ph)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rh)return n.BYTE;if(i===Ch)return n.SHORT;if(i===Er)return n.UNSIGNED_SHORT;if(i===_c)return n.INT;if(i===rs)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===wr)return n.HALF_FLOAT;if(i===Lh)return n.ALPHA;if(i===Dh)return n.RGB;if(i===Yn)return n.RGBA;if(i===fr)return n.DEPTH_COMPONENT;if(i===Ar)return n.DEPTH_STENCIL;if(i===yc)return n.RED;if(i===Mc)return n.RED_INTEGER;if(i===Uh)return n.RG;if(i===Sc)return n.RG_INTEGER;if(i===bc)return n.RGBA_INTEGER;if(i===No||i===Oo||i===Bo||i===ko)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ec||i===wc||i===Tc||i===Ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===Cc||i===Ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rc||i===Cc)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ic)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pc||i===Lc||i===Dc||i===Uc||i===Fc||i===Nc||i===Oc||i===Bc||i===kc||i===zc||i===Hc||i===Vc||i===Gc||i===Wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xc||i===qc||i===Yc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Xc)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zc||i===Jc||i===Kc||i===$c)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function Vv(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,zh(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,v,b,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),h(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,M)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),_(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,v,b):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===mn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===mn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let v=e.get(f),b=v.envMap,M=v.envMapRotation;b&&(g.envMap.value=b,Ps.copy(M),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),g.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(Ps)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,v,b){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=b*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){let v=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Gv(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){let M=b.program;i.uniformBlockBinding(v,M)}function l(v,b){let M=s[v.id];M===void 0&&(m(v),M=u(v),s[v.id]=M,v.addEventListener("dispose",g));let A=b.program;i.updateUBOMapping(v,A);let S=e.render.frame;r[v.id]!==S&&(d(v),r[v.id]=S)}function u(v){let b=h();v.__bindingPointIndex=b;let M=n.createBuffer(),A=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let b=s[v.id],M=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let S=0,T=M.length;S<T;S++){let C=Array.isArray(M[S])?M[S]:[M[S]];for(let y=0,x=C.length;y<x;y++){let R=C[y];if(p(R,S,y,A)===!0){let D=R.__offset,I=Array.isArray(R.value)?R.value:[R.value],L=0;for(let F=0;F<I.length;F++){let O=I[F],z=_(O);typeof O=="number"||typeof O=="boolean"?(R.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,D+L,R.__data)):O.isMatrix3?(R.__data[0]=O.elements[0],R.__data[1]=O.elements[1],R.__data[2]=O.elements[2],R.__data[3]=0,R.__data[4]=O.elements[3],R.__data[5]=O.elements[4],R.__data[6]=O.elements[5],R.__data[7]=0,R.__data[8]=O.elements[6],R.__data[9]=O.elements[7],R.__data[10]=O.elements[8],R.__data[11]=0):(O.toArray(R.__data,L),L+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,b,M,A){let S=v.value,T=b+"_"+M;if(A[T]===void 0)return typeof S=="number"||typeof S=="boolean"?A[T]=S:A[T]=S.clone(),!0;{let C=A[T];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return A[T]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function m(v){let b=v.uniforms,M=0,A=16;for(let T=0,C=b.length;T<C;T++){let y=Array.isArray(b[T])?b[T]:[b[T]];for(let x=0,R=y.length;x<R;x++){let D=y[x],I=Array.isArray(D.value)?D.value:[D.value];for(let L=0,F=I.length;L<F;L++){let O=I[L],z=_(O),G=M%A,ee=G%z.boundary,se=G+ee;M+=ee,se!==0&&A-se<z.storage&&(M+=A-se),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=z.storage}}}let S=M%A;return S>0&&(M+=A-S),v.__size=M,v.__cache={},this}function _(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function g(v){let b=v.target;b.removeEventListener("dispose",g);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var _g,xg,vg,yg,Mg,Sg,bg,Eg,wg,Tg,Ag,Rg,Cg,Ig,Pg,Lg,Dg,Ug,Fg,Ng,Og,Bg,kg,zg,Hg,Vg,Gg,Wg,Xg,qg,Yg,Zg,Jg,Kg,$g,jg,Qg,e1,t1,n1,i1,s1,r1,o1,a1,c1,l1,h1,u1,d1,f1,p1,m1,g1,_1,x1,v1,y1,M1,S1,b1,E1,w1,T1,A1,R1,C1,I1,P1,L1,D1,U1,F1,N1,O1,B1,k1,z1,H1,V1,G1,W1,X1,q1,Y1,Z1,J1,K1,$1,j1,Q1,e_,t_,n_,i_,s_,r_,o_,a_,c_,l_,h_,u_,d_,f_,p_,m_,g_,__,x_,v_,y_,M_,S_,b_,E_,w_,T_,A_,R_,C_,I_,P_,L_,D_,U_,F_,N_,O_,B_,k_,z_,H_,V_,G_,W_,X_,q_,Y_,Z_,J_,st,fe,vi,Qc,Is,K_,Ir,Df,Ds,Xh,Uf,qh,Yh,Zh,Jh,Ls,Cr,Ff,ix,nl,ip,kf,sp,rp,op,zf,Hf,Vf,Gf,Wf,$h,jh,Qh,Kh,Pr,ev,tv,Yf,tl,hv,uv,fv,Mv,tu,nu,Rv,Lv,Dv,Fv,kv,zv,iu,su,Ps,Hv,il,ci=pt(()=>{Wh();Wh();_g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xg=`#ifdef USE_ALPHAHASH
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
#endif`,vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bg=`#ifdef USE_AOMAP
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
#endif`,Eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wg=`#ifdef USE_BATCHING
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
#endif`,Tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ig=`#ifdef USE_IRIDESCENCE
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
#endif`,Pg=`#ifdef USE_BUMPMAP
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zg=`#define PI 3.141592653589793
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
} // validated`,Hg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vg=`vec3 transformedNormal = objectNormal;
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
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,e1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s1=`#ifdef USE_GRADIENTMAP
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
}`,r1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c1=`uniform bool receiveShadow;
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
#endif`,l1=`#ifdef USE_ENVMAP
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
#endif`,h1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p1=`PhysicalMaterial material;
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
#endif`,m1=`struct PhysicalMaterial {
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
}`,g1=`
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
#endif`,_1=`#if defined( RE_IndirectDiffuse )
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
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T1=`#if defined( USE_POINTS_UV )
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
#endif`,A1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L1=`#ifdef USE_MORPHTARGETS
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
#endif`,D1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k1=`#ifdef USE_NORMALMAP
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
#endif`,z1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t_=`float getShadowMask() {
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
}`,n_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,s_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,o_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h_=`#ifdef USE_TRANSMISSION
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
#endif`,u_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,g_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,__=`uniform sampler2D t2D;
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`#include <common>
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
}`,b_=`#if DEPTH_PACKING == 3200
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
}`,E_=`#define DISTANCE
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
}`,w_=`#define DISTANCE
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
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
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
}`,C_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#define LAMBERT
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
}`,D_=`#define LAMBERT
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
}`,U_=`#define MATCAP
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
}`,F_=`#define MATCAP
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
}`,N_=`#define NORMAL
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
}`,O_=`#define NORMAL
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
}`,B_=`#define PHONG
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
}`,k_=`#define PHONG
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
}`,z_=`#define STANDARD
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
}`,H_=`#define STANDARD
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
}`,V_=`#define TOON
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
}`,G_=`#define TOON
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
}`,W_=`uniform float size;
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
}`,X_=`uniform vec3 diffuse;
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
}`,q_=`#include <common>
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
}`,Y_=`uniform vec3 color;
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
}`,Z_=`uniform float rotation;
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
}`,J_=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:_g,alphahash_pars_fragment:xg,alphamap_fragment:vg,alphamap_pars_fragment:yg,alphatest_fragment:Mg,alphatest_pars_fragment:Sg,aomap_fragment:bg,aomap_pars_fragment:Eg,batching_pars_vertex:wg,batching_vertex:Tg,begin_vertex:Ag,beginnormal_vertex:Rg,bsdfs:Cg,iridescence_fragment:Ig,bumpmap_pars_fragment:Pg,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Dg,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Fg,color_fragment:Ng,color_pars_fragment:Og,color_pars_vertex:Bg,color_vertex:kg,common:zg,cube_uv_reflection_fragment:Hg,defaultnormal_vertex:Vg,displacementmap_pars_vertex:Gg,displacementmap_vertex:Wg,emissivemap_fragment:Xg,emissivemap_pars_fragment:qg,colorspace_fragment:Yg,colorspace_pars_fragment:Zg,envmap_fragment:Jg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:$g,envmap_pars_vertex:jg,envmap_physical_pars_fragment:l1,envmap_vertex:Qg,fog_vertex:e1,fog_pars_vertex:t1,fog_fragment:n1,fog_pars_fragment:i1,gradientmap_pars_fragment:s1,lightmap_pars_fragment:r1,lights_lambert_fragment:o1,lights_lambert_pars_fragment:a1,lights_pars_begin:c1,lights_toon_fragment:h1,lights_toon_pars_fragment:u1,lights_phong_fragment:d1,lights_phong_pars_fragment:f1,lights_physical_fragment:p1,lights_physical_pars_fragment:m1,lights_fragment_begin:g1,lights_fragment_maps:_1,lights_fragment_end:x1,logdepthbuf_fragment:v1,logdepthbuf_pars_fragment:y1,logdepthbuf_pars_vertex:M1,logdepthbuf_vertex:S1,map_fragment:b1,map_pars_fragment:E1,map_particle_fragment:w1,map_particle_pars_fragment:T1,metalnessmap_fragment:A1,metalnessmap_pars_fragment:R1,morphinstance_vertex:C1,morphcolor_vertex:I1,morphnormal_vertex:P1,morphtarget_pars_vertex:L1,morphtarget_vertex:D1,normal_fragment_begin:U1,normal_fragment_maps:F1,normal_pars_fragment:N1,normal_pars_vertex:O1,normal_vertex:B1,normalmap_pars_fragment:k1,clearcoat_normal_fragment_begin:z1,clearcoat_normal_fragment_maps:H1,clearcoat_pars_fragment:V1,iridescence_pars_fragment:G1,opaque_fragment:W1,packing:X1,premultiplied_alpha_fragment:q1,project_vertex:Y1,dithering_fragment:Z1,dithering_pars_fragment:J1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:$1,shadowmap_pars_fragment:j1,shadowmap_pars_vertex:Q1,shadowmap_vertex:e_,shadowmask_pars_fragment:t_,skinbase_vertex:n_,skinning_pars_vertex:i_,skinning_vertex:s_,skinnormal_vertex:r_,specularmap_fragment:o_,specularmap_pars_fragment:a_,tonemapping_fragment:c_,tonemapping_pars_fragment:l_,transmission_fragment:h_,transmission_pars_fragment:u_,uv_pars_fragment:d_,uv_pars_vertex:f_,uv_vertex:p_,worldpos_vertex:m_,background_vert:g_,background_frag:__,backgroundCube_vert:x_,backgroundCube_frag:v_,cube_vert:y_,cube_frag:M_,depth_vert:S_,depth_frag:b_,distanceRGBA_vert:E_,distanceRGBA_frag:w_,equirect_vert:T_,equirect_frag:A_,linedashed_vert:R_,linedashed_frag:C_,meshbasic_vert:I_,meshbasic_frag:P_,meshlambert_vert:L_,meshlambert_frag:D_,meshmatcap_vert:U_,meshmatcap_frag:F_,meshnormal_vert:N_,meshnormal_frag:O_,meshphong_vert:B_,meshphong_frag:k_,meshphysical_vert:z_,meshphysical_frag:H_,meshtoon_vert:V_,meshtoon_frag:G_,points_vert:W_,points_frag:X_,shadow_vert:q_,shadow_frag:Y_,sprite_vert:Z_,sprite_frag:J_},fe={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},vi={basic:{uniforms:Sn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Sn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Sn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Sn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Sn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Sn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Sn([fe.points,fe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Sn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Sn([fe.common,fe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Sn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Sn([fe.sprite,fe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:Sn([fe.common,fe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:Sn([fe.lights,fe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};vi.physical={uniforms:Sn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};Qc={r:0,b:0,g:0},Is=new Mn,K_=new St;Ir=4,Df=[.125,.215,.35,.446,.526,.582],Ds=20,Xh=new Lo,Uf=new Pe,qh=null,Yh=0,Zh=0,Jh=!1,Ls=(1+Math.sqrt(5))/2,Cr=1/Ls,Ff=[new N(-Ls,Cr,0),new N(Ls,Cr,0),new N(-Cr,0,Ls),new N(Cr,0,Ls),new N(0,Ls,-Cr),new N(0,Ls,Cr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],ix=new N,nl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=ix}=r;qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qh,Yh,Zh),this._renderer.xr.enabled=Jh,e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:wr,format:Yn,colorSpace:bs,depthBuffer:!1},s=Nf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sx(r)),this._blurMaterial=rx(r,e,t)}return s}_compileMaterial(e){let t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,Xh)}_sceneToCubeUV(e,t,i,s,r){let c=new vn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Uf),h.toneMapping=Bi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let _=new nn({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new Mt(new gi,_),f=!1,v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,f=!0):(_.color.copy(Uf),f=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));let A=this._cubeSize;el(s,M*A,b>2?A:0,A,A),h.setRenderTarget(s),f&&h.render(g,c),h.render(e,c)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ts||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;el(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Xh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ff[(s-r-1)%Ff.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Mt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ds-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Ds;g>Ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ds}`);let f=[],v=0;for(let T=0;T<Ds;++T){let C=T/_,y=Math.exp(-C*C/2);f.push(y),T===0?v+=y:T<g&&(v+=2*y)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-i;let M=this._sizeLods[s],A=3*M*(s>b-Ir?s-b+Ir:0),S=4*(this._cubeSize-M);el(t,A,S,3*M,2*M),c.setRenderTarget(t),c.render(h,Xh)}};ip=new Un,kf=new yo(1,1),sp=new co,rp=new Ha,op=new po,zf=[],Hf=[],Vf=new Float32Array(16),Gf=new Float32Array(9),Wf=new Float32Array(4);$h=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lx(t.type)}},jh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jx(t.type)}},Qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Kh=/(\w+)(\])?(\[|\.)?/g;Pr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Qx(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};ev=37297,tv=0;Yf=new je;tl=new N;hv=/^[ \t]*#include +<([\w\d./]+)>/gm;uv=new Map;fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Mv=0,tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new nu(e),t.set(e,i)),i}},nu=class{constructor(e){this.id=Mv++,this.code=e,this.usedTimes=0}};Rv=0;Lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
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
}`;Fv={[oc]:ac,[cc]:uc,[lc]:dc,[Ss]:hc,[ac]:oc,[uc]:cc,[dc]:lc,[hc]:Ss};kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zv=`
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

}`,iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Mo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new An({vertexShader:kv,fragmentShader:zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new wo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends Ui{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,m=null,_=typeof XRWebGLBinding<"u",g=new iu,f={},v=t.getContextAttributes(),b=null,M=null,A=[],S=[],T=new it,C=null,y=new vn;y.viewport=new Kt;let x=new vn;x.viewport=new Kt;let R=[y,x],D=new rc,I=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=A[J];return te===void 0&&(te=new xr,A[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=A[J];return te===void 0&&(te=new xr,A[J]=te),te.getGripSpace()},this.getHand=function(J){let te=A[J];return te===void 0&&(te=new xr,A[J]=te),te.getHandSpace()};function F(J){let te=S.indexOf(J.inputSource);if(te===-1)return;let _e=A[te];_e!==void 0&&(_e.update(J.inputSource,J.frame,l||o),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",z);for(let J=0;J<A.length;J++){let te=S[J];te!==null&&(S[J]=null,A[J].disconnect(te))}I=null,L=null,g.reset();for(let J in f)delete f[J];e.setRenderTarget(b),p=null,d=null,h=null,s=null,M=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,we=null;v.depth&&(we=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=v.stencil?Ar:fr,Oe=v.stencil?Tr:rs);let rt={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(rt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new di(d.textureWidth,d.textureHeight,{format:Yn,type:oi,depthTexture:new yo(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let _e={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new di(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(J){for(let te=0;te<J.removed.length;te++){let _e=J.removed[te],Oe=S.indexOf(_e);Oe>=0&&(S[Oe]=null,A[Oe].disconnect(_e))}for(let te=0;te<J.added.length;te++){let _e=J.added[te],Oe=S.indexOf(_e);if(Oe===-1){for(let rt=0;rt<A.length;rt++)if(rt>=S.length){S.push(_e),Oe=rt;break}else if(S[rt]===null){S[rt]=_e,Oe=rt;break}if(Oe===-1)break}let we=A[Oe];we&&we.connect(_e)}}let G=new N,ee=new N;function se(J,te,_e){G.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);let Oe=G.distanceTo(ee),we=te.projectionMatrix.elements,rt=_e.projectionMatrix.elements,wt=we[14]/(we[10]-1),U=we[14]/(we[10]+1),ot=(we[9]+1)/we[5],Fe=(we[9]-1)/we[5],Ne=(we[8]-1)/we[0],Me=(rt[8]+1)/rt[0],Ot=wt*Ne,ve=wt*Me,Je=Oe/(-Ne+Me),tn=Je*-Ne;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(tn),J.translateZ(Je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Xt=wt+Je,P=U+Je,E=Ot-tn,W=ve+(Oe-tn),Z=ot*U/P*Xt,ne=Fe*U/P*Xt;J.projectionMatrix.makePerspective(E,W,Z,ne,Xt,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ce(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let te=J.near,_e=J.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),D.near=x.near=y.near=te,D.far=x.far=y.far=_e,(I!==D.near||L!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,L=D.far),D.layers.mask=J.layers.mask|6,y.layers.mask=D.layers.mask&3,x.layers.mask=D.layers.mask&5;let Oe=J.parent,we=D.cameras;ce(D,Oe);for(let rt=0;rt<we.length;rt++)ce(we[rt],Oe);we.length===2?se(D,y,x):D.projectionMatrix.copy(y.projectionMatrix),xe(J,D,Oe)};function xe(J,te,_e){_e===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=pr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(J){return f[J]};let ke=null;function Ye(J,te){if(u=te.getViewerPose(l||o),m=te,u!==null){let _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Oe=!1;_e.length!==D.cameras.length&&(D.cameras.length=0,Oe=!0);for(let U=0;U<_e.length;U++){let ot=_e[U],Fe=null;if(p!==null)Fe=p.getViewport(ot);else{let Me=h.getViewSubImage(d,ot);Fe=Me.viewport,U===0&&(e.setRenderTargetTextures(M,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(M))}let Ne=R[U];Ne===void 0&&(Ne=new vn,Ne.layers.enable(U),Ne.viewport=new Kt,R[U]=Ne),Ne.matrix.fromArray(ot.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ot.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),U===0&&(D.matrix.copy(Ne.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Oe===!0&&D.cameras.push(Ne)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();let U=h.getDepthInformation(_e[0]);U&&U.isValid&&U.texture&&g.init(U,s.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let U=0;U<_e.length;U++){let ot=_e[U].camera;if(ot){let Fe=f[ot];Fe||(Fe=new Mo,f[ot]=Fe);let Ne=h.getCameraImage(ot);Fe.sourceTexture=Ne}}}}for(let _e=0;_e<A.length;_e++){let Oe=S[_e],we=A[_e];Oe!==null&&we!==void 0&&we.update(Oe,te,l||o)}ke&&ke(J,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),m=null}let Ze=new np;Ze.setAnimationLoop(Ye),this.setAnimationLoop=function(J){ke=J},this.dispose=function(){}}},Ps=new Mn,Hv=new St;il=class{constructor(e={}){let{canvas:t=Rf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,f=null,v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,A=!1;this._outputColorSpace=Tn;let S=0,T=0,C=null,y=-1,x=null,R=new Kt,D=new Kt,I=null,L=new Pe(0),F=0,O=t.width,z=t.height,G=1,ee=null,se=null,ce=new Kt(0,0,O,z),xe=new Kt(0,0,O,z),ke=!1,Ye=new vr,Ze=!1,J=!1,te=new St,_e=new N,Oe=new Kt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function wt(){return C===null?G:1}let U=i;function ot(w,H){return t.getContext(w,H)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",oe,!1),U===null){let H="webgl2";if(U=ot(H,w),U===null)throw ot(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Fe,Ne,Me,Ot,ve,Je,tn,Xt,P,E,W,Z,ne,Y,Ce,he,be,Te,re,pe,De,Ae,me,et;function B(){Fe=new ax(U),Fe.init(),Ae=new Bv(U,Fe),Ne=new ex(U,Fe,e,Ae),Me=new Nv(U,Fe),Ne.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),Ot=new hx(U),ve=new bv,Je=new Ov(U,Fe,Me,ve,Ne,Ae,Ot),tn=new nx(M),Xt=new ox(M),P=new gg(U),me=new j_(U,P),E=new cx(U,P,Ot,me),W=new dx(U,E,P,Ot),re=new ux(U,Ne,Je),he=new tx(ve),Z=new Sv(M,tn,Xt,Fe,Ne,me,he),ne=new Vv(M,ve),Y=new wv,Ce=new Pv(Fe),Te=new $_(M,tn,Xt,Me,W,p,c),be=new Uv(M,W,Ne),et=new Gv(U,Ot,Ne,Me),pe=new Q_(U,Fe,Ot),De=new lx(U,Fe,Ot),Ot.programs=Z.programs,M.capabilities=Ne,M.extensions=Fe,M.properties=ve,M.renderLists=Y,M.shadowMap=be,M.state=Me,M.info=Ot}B();let le=new su(M,U);this.xr=le,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=Fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(O,z,!1))},this.getSize=function(w){return w.set(O,z)},this.setSize=function(w,H,X=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,z=H,t.width=Math.floor(w*G),t.height=Math.floor(H*G),X===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(O*G,z*G).floor()},this.setDrawingBufferSize=function(w,H,X){O=w,z=H,G=X,t.width=Math.floor(w*X),t.height=Math.floor(H*X),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,H,X,q){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,H,X,q),Me.viewport(R.copy(ce).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(xe)},this.setScissor=function(w,H,X,q){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,H,X,q),Me.scissor(D.copy(xe).multiplyScalar(G).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(w){Me.setScissorTest(ke=w)},this.setOpaqueSort=function(w){ee=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,X=!0){let q=0;if(w){let V=!1;if(C!==null){let ae=C.texture.format;V=ae===bc||ae===Sc||ae===Mc}if(V){let ae=C.texture.type,ge=ae===oi||ae===rs||ae===Er||ae===Tr||ae===xc||ae===vc,Ee=Te.getClearColor(),ye=Te.getClearAlpha(),Ve=Ee.r,qe=Ee.g,Be=Ee.b;ge?(m[0]=Ve,m[1]=qe,m[2]=Be,m[3]=ye,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=Ve,_[1]=qe,_[2]=Be,_[3]=ye,U.clearBufferiv(U.COLOR,0,_))}else q|=U.COLOR_BUFFER_BIT}H&&(q|=U.DEPTH_BUFFER_BIT),X&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Te.dispose(),Y.dispose(),Ce.dispose(),ve.dispose(),tn.dispose(),Xt.dispose(),W.dispose(),me.dispose(),et.dispose(),Z.dispose(),le.dispose(),le.removeEventListener("sessionstart",hi),le.removeEventListener("sessionend",Ju),ds.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=Ot.autoReset,H=be.enabled,X=be.autoUpdate,q=be.needsUpdate,V=be.type;B(),Ot.autoReset=w,be.enabled=H,be.autoUpdate=X,be.needsUpdate=q,be.type=V}function oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Q(w){let H=w.target;H.removeEventListener("dispose",Q),Re(H)}function Re(w){Ke(w),ve.remove(w)}function Ke(w){let H=ve.get(w).programs;H!==void 0&&(H.forEach(function(X){Z.releaseProgram(X)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,X,q,V,ae){H===null&&(H=we);let ge=V.isMesh&&V.matrixWorld.determinant()<0,Ee=qm(w,H,X,q,V);Me.setMaterial(q,ge);let ye=X.index,Ve=1;if(q.wireframe===!0){if(ye=E.getWireframeAttribute(X),ye===void 0)return;Ve=2}let qe=X.drawRange,Be=X.attributes.position,ht=qe.start*Ve,At=(qe.start+qe.count)*Ve;ae!==null&&(ht=Math.max(ht,ae.start*Ve),At=Math.min(At,(ae.start+ae.count)*Ve)),ye!==null?(ht=Math.max(ht,0),At=Math.min(At,ye.count)):Be!=null&&(ht=Math.max(ht,0),At=Math.min(At,Be.count));let jt=At-ht;if(jt<0||jt===1/0)return;me.setup(V,q,Ee,X,ye);let Vt,Lt=pe;if(ye!==null&&(Vt=P.get(ye),Lt=De,Lt.setIndex(Vt)),V.isMesh)q.wireframe===!0?(Me.setLineWidth(q.wireframeLinewidth*wt()),Lt.setMode(U.LINES)):Lt.setMode(U.TRIANGLES);else if(V.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),Me.setLineWidth(ze*wt()),V.isLineSegments?Lt.setMode(U.LINES):V.isLineLoop?Lt.setMode(U.LINE_LOOP):Lt.setMode(U.LINE_STRIP)}else V.isPoints?Lt.setMode(U.POINTS):V.isSprite&&Lt.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Lt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let ze=V._multiDrawStarts,qt=V._multiDrawCounts,xt=V._multiDrawCount,Nn=ye?P.get(ye).bytesPerElement:1,Zs=ve.get(q).currentProgram.getUniforms();for(let On=0;On<xt;On++)Zs.setValue(U,"_gl_DrawID",On),Lt.render(ze[On]/Nn,qt[On])}else if(V.isInstancedMesh)Lt.renderInstances(ht,jt,V.count);else if(X.isInstancedBufferGeometry){let ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,qt=Math.min(X.instanceCount,ze);Lt.renderInstances(ht,jt,qt)}else Lt.render(ht,jt)};function Bt(w,H,X){w.transparent===!0&&w.side===zt&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,ra(w,H,X),w.side=Di,w.needsUpdate=!0,ra(w,H,X),w.side=zt):ra(w,H,X)}this.compile=function(w,H,X=null){X===null&&(X=w),f=Ce.get(X),f.init(H),b.push(f),X.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),w!==X&&w.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();let q=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ae=V.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){let Ee=ae[ge];Bt(Ee,X,V),q.add(Ee)}else Bt(ae,X,V),q.add(ae)}),f=b.pop(),q},this.compileAsync=function(w,H,X=null){let q=this.compile(w,H,X);return new Promise(V=>{function ae(){if(q.forEach(function(ge){ve.get(ge).currentProgram.isReady()&&q.delete(ge)}),q.size===0){V(w);return}setTimeout(ae,10)}Fe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let bt=null;function wi(w){bt&&bt(w)}function hi(){ds.stop()}function Ju(){ds.start()}let ds=new np;ds.setAnimationLoop(wi),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(w){bt=w,le.setAnimationLoop(w),w===null?ds.stop():ds.start()},le.addEventListener("sessionstart",hi),le.addEventListener("sessionend",Ju),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(H),H=le.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,H,C),f=Ce.get(w,b.length),f.init(H),b.push(f),te.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ye.setFromProjectionMatrix(te,si,H.reversedDepth),J=this.localClippingEnabled,Ze=he.init(this.clippingPlanes,J),g=Y.get(w,v.length),g.init(),v.push(g),le.enabled===!0&&le.isPresenting===!0){let ae=M.xr.getDepthSensingMesh();ae!==null&&Ul(ae,H,-1/0,M.sortObjects)}Ul(w,H,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(ee,se),rt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,rt&&Te.addToRenderList(g,w),this.info.render.frame++,Ze===!0&&he.beginShadows();let X=f.state.shadowsArray;be.render(X,w,H),Ze===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,V=g.transmissive;if(f.setupLights(),H.isArrayCamera){let ae=H.cameras;if(V.length>0)for(let ge=0,Ee=ae.length;ge<Ee;ge++){let ye=ae[ge];$u(q,V,w,ye)}rt&&Te.render(w);for(let ge=0,Ee=ae.length;ge<Ee;ge++){let ye=ae[ge];Ku(g,w,ye,ye.viewport)}}else V.length>0&&$u(q,V,w,H),rt&&Te.render(w),Ku(g,w,H);C!==null&&T===0&&(Je.updateMultisampleRenderTarget(C),Je.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(M,w,H),me.resetDefaultState(),y=-1,x=null,b.pop(),b.length>0?(f=b[b.length-1],Ze===!0&&he.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Ul(w,H,X,q){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ye.intersectsSprite(w)){q&&Oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(te);let ge=W.update(w),Ee=w.material;Ee.visible&&g.push(w,ge,Ee,X,Oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ye.intersectsObject(w))){let ge=W.update(w),Ee=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Oe.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Oe.copy(ge.boundingSphere.center)),Oe.applyMatrix4(w.matrixWorld).applyMatrix4(te)),Array.isArray(Ee)){let ye=ge.groups;for(let Ve=0,qe=ye.length;Ve<qe;Ve++){let Be=ye[Ve],ht=Ee[Be.materialIndex];ht&&ht.visible&&g.push(w,ge,ht,X,Oe.z,Be)}}else Ee.visible&&g.push(w,ge,Ee,X,Oe.z,null)}}let ae=w.children;for(let ge=0,Ee=ae.length;ge<Ee;ge++)Ul(ae[ge],H,X,q)}function Ku(w,H,X,q){let V=w.opaque,ae=w.transmissive,ge=w.transparent;f.setupLightsView(X),Ze===!0&&he.setGlobalState(M.clippingPlanes,X),q&&Me.viewport(R.copy(q)),V.length>0&&sa(V,H,X),ae.length>0&&sa(ae,H,X),ge.length>0&&sa(ge,H,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function $u(w,H,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new di(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?wr:oi,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));let ae=f.state.transmissionRenderTarget[q.id],ge=q.viewport||R;ae.setSize(ge.z*M.transmissionResolutionScale,ge.w*M.transmissionResolutionScale);let Ee=M.getRenderTarget(),ye=M.getActiveCubeFace(),Ve=M.getActiveMipmapLevel();M.setRenderTarget(ae),M.getClearColor(L),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear(),rt&&Te.render(X);let qe=M.toneMapping;M.toneMapping=Bi;let Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),Ze===!0&&he.setGlobalState(M.clippingPlanes,q),sa(w,X,q),Je.updateMultisampleRenderTarget(ae),Je.updateRenderTargetMipmap(ae),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let At=0,jt=H.length;At<jt;At++){let Vt=H[At],Lt=Vt.object,ze=Vt.geometry,qt=Vt.material,xt=Vt.group;if(qt.side===zt&&Lt.layers.test(q.layers)){let Nn=qt.side;qt.side=mn,qt.needsUpdate=!0,ju(Lt,X,q,ze,qt,xt),qt.side=Nn,qt.needsUpdate=!0,ht=!0}}ht===!0&&(Je.updateMultisampleRenderTarget(ae),Je.updateRenderTargetMipmap(ae))}M.setRenderTarget(Ee,ye,Ve),M.setClearColor(L,F),Be!==void 0&&(q.viewport=Be),M.toneMapping=qe}function sa(w,H,X){let q=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ae=w.length;V<ae;V++){let ge=w[V],Ee=ge.object,ye=ge.geometry,Ve=ge.group,qe=ge.material;qe.allowOverride===!0&&q!==null&&(qe=q),Ee.layers.test(X.layers)&&ju(Ee,H,X,ye,qe,Ve)}}function ju(w,H,X,q,V,ae){w.onBeforeRender(M,H,X,q,V,ae),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(M,H,X,q,w,ae),V.transparent===!0&&V.side===zt&&V.forceSinglePass===!1?(V.side=mn,V.needsUpdate=!0,M.renderBufferDirect(X,H,q,V,w,ae),V.side=Di,V.needsUpdate=!0,M.renderBufferDirect(X,H,q,V,w,ae),V.side=zt):M.renderBufferDirect(X,H,q,V,w,ae),w.onAfterRender(M,H,X,q,V,ae)}function ra(w,H,X){H.isScene!==!0&&(H=we);let q=ve.get(w),V=f.state.lights,ae=f.state.shadowsArray,ge=V.state.version,Ee=Z.getParameters(w,V.state,ae,H,X),ye=Z.getProgramCacheKey(Ee),Ve=q.programs;q.environment=w.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(w.isMeshStandardMaterial?Xt:tn).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",Q),Ve=new Map,q.programs=Ve);let qe=Ve.get(ye);if(qe!==void 0){if(q.currentProgram===qe&&q.lightsStateVersion===ge)return ed(w,Ee),qe}else Ee.uniforms=Z.getUniforms(w),w.onBeforeCompile(Ee,M),qe=Z.acquireProgram(Ee,ye),Ve.set(ye,qe),q.uniforms=Ee.uniforms;let Be=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=he.uniform),ed(w,Ee),q.needsLights=Zm(w),q.lightsStateVersion=ge,q.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=qe,q.uniformsList=null,qe}function Qu(w){if(w.uniformsList===null){let H=w.currentProgram.getUniforms();w.uniformsList=Pr.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function ed(w,H){let X=ve.get(w);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.batchingColor=H.batchingColor,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function qm(w,H,X,q,V){H.isScene!==!0&&(H=we),Je.resetTextureUnits();let ae=H.fog,ge=q.isMeshStandardMaterial?H.environment:null,Ee=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:bs,ye=(q.isMeshStandardMaterial?Xt:tn).get(q.envMap||ge),Ve=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Be=!!X.morphAttributes.position,ht=!!X.morphAttributes.normal,At=!!X.morphAttributes.color,jt=Bi;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(jt=M.toneMapping);let Vt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Lt=Vt!==void 0?Vt.length:0,ze=ve.get(q),qt=f.state.lights;if(Ze===!0&&(J===!0||w!==x)){let En=w===x&&q.id===y;he.setState(q,w,En)}let xt=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==qt.state.version||ze.outputColorSpace!==Ee||V.isBatchedMesh&&ze.batching===!1||!V.isBatchedMesh&&ze.batching===!0||V.isBatchedMesh&&ze.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ze.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ze.instancing===!1||!V.isInstancedMesh&&ze.instancing===!0||V.isSkinnedMesh&&ze.skinning===!1||!V.isSkinnedMesh&&ze.skinning===!0||V.isInstancedMesh&&ze.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ze.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ze.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ze.instancingMorph===!1&&V.morphTexture!==null||ze.envMap!==ye||q.fog===!0&&ze.fog!==ae||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==he.numPlanes||ze.numIntersection!==he.numIntersection)||ze.vertexAlphas!==Ve||ze.vertexTangents!==qe||ze.morphTargets!==Be||ze.morphNormals!==ht||ze.morphColors!==At||ze.toneMapping!==jt||ze.morphTargetsCount!==Lt)&&(xt=!0):(xt=!0,ze.__version=q.version);let Nn=ze.currentProgram;xt===!0&&(Nn=ra(q,H,V));let Zs=!1,On=!1,Yr=!1,Yt=Nn.getUniforms(),Gn=ze.uniforms;if(Me.useProgram(Nn.program)&&(Zs=!0,On=!0,Yr=!0),q.id!==y&&(y=q.id,On=!0),Zs||x!==w){Me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Yt.setValue(U,"projectionMatrix",w.projectionMatrix),Yt.setValue(U,"viewMatrix",w.matrixWorldInverse);let Pn=Yt.map.cameraPosition;Pn!==void 0&&Pn.setValue(U,_e.setFromMatrixPosition(w.matrixWorld)),Ne.logarithmicDepthBuffer&&Yt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Yt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,On=!0,Yr=!0)}if(V.isSkinnedMesh){Yt.setOptional(U,V,"bindMatrix"),Yt.setOptional(U,V,"bindMatrixInverse");let En=V.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Yt.setValue(U,"boneTexture",En.boneTexture,Je))}V.isBatchedMesh&&(Yt.setOptional(U,V,"batchingTexture"),Yt.setValue(U,"batchingTexture",V._matricesTexture,Je),Yt.setOptional(U,V,"batchingIdTexture"),Yt.setValue(U,"batchingIdTexture",V._indirectTexture,Je),Yt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Yt.setValue(U,"batchingColorTexture",V._colorsTexture,Je));let Wn=X.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&re.update(V,X,Nn),(On||ze.receiveShadow!==V.receiveShadow)&&(ze.receiveShadow=V.receiveShadow,Yt.setValue(U,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Gn.envMap.value=ye,Gn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(Gn.envMapIntensity.value=H.environmentIntensity),On&&(Yt.setValue(U,"toneMappingExposure",M.toneMappingExposure),ze.needsLights&&Ym(Gn,Yr),ae&&q.fog===!0&&ne.refreshFogUniforms(Gn,ae),ne.refreshMaterialUniforms(Gn,q,G,z,f.state.transmissionRenderTarget[w.id]),Pr.upload(U,Qu(ze),Gn,Je)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Pr.upload(U,Qu(ze),Gn,Je),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Yt.setValue(U,"center",V.center),Yt.setValue(U,"modelViewMatrix",V.modelViewMatrix),Yt.setValue(U,"normalMatrix",V.normalMatrix),Yt.setValue(U,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let En=q.uniformsGroups;for(let Pn=0,Fl=En.length;Pn<Fl;Pn++){let fs=En[Pn];et.update(fs,Nn),et.bind(fs,Nn)}}return Nn}function Ym(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Zm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,H,X){let q=ve.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ve.get(w.texture).__webglTexture=H,ve.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){let X=ve.get(w);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0};let Jm=U.createFramebuffer();this.setRenderTarget=function(w,H=0,X=0){C=w,S=H,T=X;let q=!0,V=null,ae=!1,ge=!1;if(w){let ye=ve.get(w);if(ye.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(ye.__webglFramebuffer===void 0)Je.setupRenderTarget(w);else if(ye.__hasExternalTextures)Je.rebindTextures(w,ve.get(w.texture).__webglTexture,ve.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Be=w.depthTexture;if(ye.__boundDepthTexture!==Be){if(Be!==null&&ve.has(Be)&&(w.width!==Be.image.width||w.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(w)}}let Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ge=!0);let qe=ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[H])?V=qe[H][X]:V=qe[H],ae=!0):w.samples>0&&Je.useMultisampledRTT(w)===!1?V=ve.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?V=qe[X]:V=qe,R.copy(w.viewport),D.copy(w.scissor),I=w.scissorTest}else R.copy(ce).multiplyScalar(G).floor(),D.copy(xe).multiplyScalar(G).floor(),I=ke;if(X!==0&&(V=Jm),Me.bindFramebuffer(U.FRAMEBUFFER,V)&&q&&Me.drawBuffers(w,V),Me.viewport(R),Me.scissor(D),Me.setScissorTest(I),ae){let ye=ve.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,ye.__webglTexture,X)}else if(ge){let ye=H;for(let Ve=0;Ve<w.textures.length;Ve++){let qe=ve.get(w.textures[Ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,X,ye)}}else if(w!==null&&X!==0){let ye=ve.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ye.__webglTexture,X)}y=-1},this.readRenderTargetPixels=function(w,H,X,q,V,ae,ge,Ee=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){Me.bindFramebuffer(U.FRAMEBUFFER,ye);try{let Ve=w.textures[Ee],qe=Ve.format,Be=Ve.type;if(!Ne.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-q&&X>=0&&X<=w.height-V&&(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee),U.readPixels(H,X,q,V,Ae.convert(qe),Ae.convert(Be),ae))}finally{let Ve=C!==null?ve.get(C).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(w,H,X,q,V,ae,ge,Ee=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye)if(H>=0&&H<=w.width-q&&X>=0&&X<=w.height-V){Me.bindFramebuffer(U.FRAMEBUFFER,ye);let Ve=w.textures[Ee],qe=Ve.format,Be=Ve.type;if(!Ne.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ht),U.bufferData(U.PIXEL_PACK_BUFFER,ae.byteLength,U.STREAM_READ),w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee),U.readPixels(H,X,q,V,Ae.convert(qe),Ae.convert(Be),0);let At=C!==null?ve.get(C).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,At);let jt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Cf(U,jt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ht),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ae),U.deleteBuffer(ht),U.deleteSync(jt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,X=0){let q=Math.pow(2,-X),V=Math.floor(w.image.width*q),ae=Math.floor(w.image.height*q),ge=H!==null?H.x:0,Ee=H!==null?H.y:0;Je.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,ge,Ee,V,ae),Me.unbindTexture()};let Km=U.createFramebuffer(),$m=U.createFramebuffer();this.copyTextureToTexture=function(w,H,X=null,q=null,V=0,ae=null){ae===null&&(V!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=V,V=0):ae=0);let ge,Ee,ye,Ve,qe,Be,ht,At,jt,Vt=w.isCompressedTexture?w.mipmaps[ae]:w.image;if(X!==null)ge=X.max.x-X.min.x,Ee=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,Ve=X.min.x,qe=X.min.y,Be=X.isBox3?X.min.z:0;else{let Wn=Math.pow(2,-V);ge=Math.floor(Vt.width*Wn),Ee=Math.floor(Vt.height*Wn),w.isDataArrayTexture?ye=Vt.depth:w.isData3DTexture?ye=Math.floor(Vt.depth*Wn):ye=1,Ve=0,qe=0,Be=0}q!==null?(ht=q.x,At=q.y,jt=q.z):(ht=0,At=0,jt=0);let Lt=Ae.convert(H.format),ze=Ae.convert(H.type),qt;H.isData3DTexture?(Je.setTexture3D(H,0),qt=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Je.setTexture2DArray(H,0),qt=U.TEXTURE_2D_ARRAY):(Je.setTexture2D(H,0),qt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);let xt=U.getParameter(U.UNPACK_ROW_LENGTH),Nn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Zs=U.getParameter(U.UNPACK_SKIP_PIXELS),On=U.getParameter(U.UNPACK_SKIP_ROWS),Yr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Vt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Vt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ve),U.pixelStorei(U.UNPACK_SKIP_ROWS,qe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Be);let Yt=w.isDataArrayTexture||w.isData3DTexture,Gn=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){let Wn=ve.get(w),En=ve.get(H),Pn=ve.get(Wn.__renderTarget),Fl=ve.get(En.__renderTarget);Me.bindFramebuffer(U.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Fl.__webglFramebuffer);for(let fs=0;fs<ye;fs++)Yt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ve.get(w).__webglTexture,V,Be+fs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ve.get(H).__webglTexture,ae,jt+fs)),U.blitFramebuffer(Ve,qe,ge,Ee,ht,At,ge,Ee,U.DEPTH_BUFFER_BIT,U.NEAREST);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||ve.has(w)){let Wn=ve.get(w),En=ve.get(H);Me.bindFramebuffer(U.READ_FRAMEBUFFER,Km),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,$m);for(let Pn=0;Pn<ye;Pn++)Yt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wn.__webglTexture,V,Be+Pn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Wn.__webglTexture,V),Gn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,En.__webglTexture,ae,jt+Pn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,En.__webglTexture,ae),V!==0?U.blitFramebuffer(Ve,qe,ge,Ee,ht,At,ge,Ee,U.COLOR_BUFFER_BIT,U.NEAREST):Gn?U.copyTexSubImage3D(qt,ae,ht,At,jt+Pn,Ve,qe,ge,Ee):U.copyTexSubImage2D(qt,ae,ht,At,Ve,qe,ge,Ee);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Gn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(qt,ae,ht,At,jt,ge,Ee,ye,Lt,ze,Vt.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(qt,ae,ht,At,jt,ge,Ee,ye,Lt,Vt.data):U.texSubImage3D(qt,ae,ht,At,jt,ge,Ee,ye,Lt,ze,Vt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ae,ht,At,ge,Ee,Lt,ze,Vt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ae,ht,At,Vt.width,Vt.height,Lt,Vt.data):U.texSubImage2D(U.TEXTURE_2D,ae,ht,At,ge,Ee,Lt,ze,Vt);U.pixelStorei(U.UNPACK_ROW_LENGTH,xt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Zs),U.pixelStorei(U.UNPACK_SKIP_ROWS,On),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Yr),ae===0&&H.generateMipmaps&&U.generateMipmap(qt),Me.unbindTexture()},this.initRenderTarget=function(w){ve.get(w).__webglFramebuffer===void 0&&Je.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Je.setTextureCube(w,0):w.isData3DTexture?Je.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Je.setTexture2DArray(w,0):Je.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){S=0,T=0,C=null,Me.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}});function Le(n,e,t){let i=Qe((t-n)/(e-n),0,1);return i*i*(3-2*i)}function cp(n,e,t,i){if(n>=ue+80)return t;let[s,r,o,a]=Ho[e],c=Math.max(0,n-ue),l=c<8?c*c/16:c-4,u=i?an((r-s)/2,(a-o)/2,Le(0,38,c)):an((s+r)/2,(o+a)/2,l/26);return an(u,t,Le(ue+24,ue+80,n))}function Wv(n){return n>=ue&&n<Xe}function Wt(n,e){return Wv(n)&&Ft.includes(e)?e:"shared"}function lp(n){return n<al?"gorge":n>cl?"marsh":"canal"}function gn(n){if(!j.valley)return 5*Math.sin(n*.01)+3*Math.sin(n*.024);let[e,t,i,s]=j.valley;return e*Dr(n,t)+i*Dr(n,s)}function at(n,e=0){return{x:gn(n)+e,z:-n}}function hp(n,e,t){let[i,s,r,o,a]=j.lanes[e],[c,l]=Ho[e],u=Qe((n-ue)/(Xe-ue),0,1),h=Le(ue,ue+j.opening[0],n)*(1-Le(Xe-j.opening[1],Xe,n)),d=t?an((l-c)/2,7.2,u):an((c+l)/2,e==="gorge"?-14.4:e==="marsh"?14.4:0,u),p=t?a*(1+.09*Dr(n,r*.76,o)):i+s*Dr(n,r,o)+s*.24*Dr(n,r*.57,-o);return an(d,p,h)}function up(n){return Le(ue,ue+95,n)*(1-Le(Xe-117,Xe,n))}function tt(n,e){if(j.lanes)return j.lanes[e]?hp(n,e,!1):0;let t=up(n),i;if(e==="gorge")i=an(-14.4,-65+11*Math.sin(n*.025)+5*Math.sin(n*.048),t);else if(e==="canal")i=t*(4.2*Math.sin(n*.01)+1.8*Math.sin(n*.028));else if(e==="marsh")i=an(14.4,69+12*Math.sin(n*.023+.6)+4*Math.sin(n*.051),t);else return 0;return cp(n,e,i,!1)}function Ue(n,e="shared"){if(j.lanes){let r=tt(n,e),o=j.lanes[e]?hp(n,e,!0):n<=ue?an(11.2,ol,Le(-2,ue*.71,n)):an(21.6,j.outlet,Le(Xe,Xe+70,n));return{left:r-o,right:r+o,center:r,half:o}}let t=tt(n,e),i=up(n),s;return e==="gorge"?s=an(7.2,13.9+2.4*Math.sin(n*.035),i):e==="canal"?s=an(7.2,16.4+1.9*Math.sin(n*.012),i):e==="marsh"?s=an(7.2,21+4*Math.sin(n*.029),i):s=n<=ue?an(11.2,ol,Le(-2,49,n)):an(21.6,14.8,Le(Xe,Xe+70,n)),Ho[e]&&(s=cp(n,e,s,!0)),{left:t-s,right:t+s,center:t,half:s}}function cn(n,e="shared"){return Math.atan((gn(n+.25)+tt(n+.25,e)-gn(n-.25)-tt(n-.25,e))*2)}function rl(n,e){let t=0;for(let[i,s,r]of e)t+=r*Le(i,s,n);return t}function He(n,e="shared"){if(yi){let r=Qe(n-ue,0,Xe-ue),o=yi.drop*r/(Xe-ue);return n>ue&&n<Xe&&ap[e]&&(o=yi.drop*rl(n,yi[e])/ap[e]),-yi.head*Math.min(n,ue)-yi.grade*r-o-rl(n,yi.shared)-yi.tail*Math.max(0,n-Xe)}let t=-.042*Math.min(n,ue);if(n<=ue){let r=Math.min(ue+25,ue-n);return t+.001*r*r}let i=Qe((n-ue)/(Xe-ue),0,1),s=160;return n<Xe&&(e==="gorge"?s=rl(n,Xv):e==="marsh"?s=112*i*Le(ue+6,ue+49,n)+rl(n,qv):s=122*i+13*Le(278,332,n)+9*Le(602,646,n)+9*Le(899,947,n)+7*Le(1187,1237,n)),t-.023*i*(Xe-ue)-s-11*Le(Xe+10,Xe+82,n)-.018*Math.max(0,n-Xe)}function Ur(n,e){return(He(n-.25,e)-He(n+.25,e))*2}function ll(n,e){return Zn[Wt(n,e)]}function li(n,e){let t=Qe((e-n.start)/(n.end-n.start),0,1);return n.rise*t*(.62+.38*t)}function Fr(n,e,t="shared"){for(let i of Yv[t]||[]){if(n<i.start||n>i.end+3)continue;let s=e-tt(n,t)-i.offset;return li(i,n)*(1-Le(i.width*.43,i.width*.64,Math.abs(s)))*(1-Le(i.end,i.end+3,n))}return 0}function Jn(n,e){for(let[t,i,s,r]of hl[e]||[]){if(n<t||n>i)continue;let o=(n-t)/(i-t),a=Math.sqrt(Math.max(0,1-(o*2-1)**2)),c=r*a*(e==="shared"?.68+.69*o:1+.085*Math.sin(o*8)),l=e==="shared"?Math.sign(s)*(.95*o-.24)+.16*Math.sin(o*5):.42*Math.sin(o*5),u=tt(n,e)+s+l;return{left:u-c,right:u+c,mid:u,radius:c}}return null}function Us(n,e){let t=e==="gorge",i=e==="marsh",s=Le(t?-5:i?2:0,ue,n),[r,o]=Ho[e],a=t?-1.45:i?1.15:0,c=t?-.45:i?.6:0,l=t?-1:i?.66:.44;return an(a,(r+o)/2+c,s)+l*Math.sin(Math.PI*s)}function Ns(n,e){if(e==="shared"&&n<=ue)return Us(n,"canal");let t;if(j.lanes){let i=j.lanes[e];t=(i?.[4]??j.outlet)*(j.id==="delta"?.36:.24)*Dr(n,i?.[2]??280,i?.[3]??0);for(let[r,o,a,c]of hl[e]){if(n<r-35||n>o+35)continue;let l=Le(r-35,r,n)*(1-Le(o,o+35,n));t=an(t,a-Math.sign(a)*(c+3.7),l)}}else if(e==="marsh"){let i=Zv,s=i[0][1];for(let r=1;r<i.length;r++){if(n<=i[r][0]){s=an(s,i[r][1],Le(i[r-1][0],i[r][0],n));break}s=i[r][1]}t=s}else t=e==="gorge"?4*Math.sin(n*.025-1.2):e==="canal"?3*Math.sin(n*.017+.3):2.8*Math.sin(n*.027);return Ho[e]&&n<ue+41&&(t=an(e==="gorge"?-.45:e==="marsh"?.6:0,t,Le(ue,ue+41,n))),tt(n,e)+t}function Fs(n,e){let t=Us(n,e<0?"gorge":"marsh"),i=Us(n,"canal"),s=e<0?al:cl;return an((t+i)/2,s,Le(43,ue,n))}function ul(n,e,t="shared"){let i=Ue(n,t),s=Jn(n,t),r=Math.min(e-i.left,i.right-e,s?Math.max(s.left-e,e-s.right):1/0),o=t==="shared"&&n>=0&&n<=ue,a=Math.abs(e-Ns(n,t));o&&(a=Math.min(a,Math.abs(e-Us(n,"gorge")),Math.abs(e-Us(n,"marsh"))));let c=j.flow?.width,l=(1-Le(c??(t==="marsh"?1.8:1.5),c?c+2.8:t==="marsh"?4.5:4.1,a))*Le(4,17,n),u=1-Le(.7,t==="marsh"?3.9:2.1,r);if(o){let h=Math.min(Math.abs(e-Fs(n,-1)),Math.abs(e-Fs(n,1)));u=Math.max(u,.66*Le(24,65,n)*(1-Le(.3,1.55,h)))}return t==="marsh"&&(u=Math.max(u,(1-l)*(.17+.19*Math.sin(n*.033)**2))),{current:l,shallow:u}}var Pt,ue,Xe,Qe,an,ol,al,cl,Ho,Dr,Xv,qv,yi,ap,Zn,Yv,hl,Zv,$t=pt(()=>{rn();({length:Pt,fork:ue,merge:Xe}=j),Qe=(n,e,t)=>Math.max(e,Math.min(t,n));an=(n,e,t)=>n+(e-n)*t,ol=19.8,al=-4.8,cl=5.1,Ho={gorge:[-ol,al,-30.5,-12.3],canal:[al,cl,-5.8,6.1],marsh:[cl,ol,12.65,31.75]};Dr=(n,e,t=0)=>Math.sin(n*2*Math.PI/e+t);Xv=[[88,152,18],[159,225,20],[311,371,17],[479,545,19],[642,713,19],[832,894,21],[1001,1073,27],[1196,1261,19]],qv=[[147,220,12],[450,510,9],[680,740,7],[918,981,11],[1138,1223,9]];yi=j.elevation,ap=yi&&Object.fromEntries(Ft.map(n=>[n,yi[n].reduce((e,t)=>e+t[2],0)]));Zn=j.features||{shared:[$e(1345,1354,-4.4,5.3,1.12,"\uACB0\uC2B9 \uBC1C\uD310"),Ie(1365,1.7,6.5,"\uD569\uB958 \uAC00\uC18D\uBB38")],gorge:[vt(106,115,-3.1,6.1,1.05,"\uCCAB \uBC14\uC704\uD131"),vt(219,228,3.8,5.7,1.28,"\uC30D\uBC14\uC704 \uC5EC\uC6B8"),vt(325,335,-4,6.3,1.5,"\uCE35\uACC4 \uD3ED\uD3EC"),vt(500,510,3.1,6.2,1.36,"\uC801\uBCBD \uB099\uCC28"),vt(661,672,-3.6,6.5,1.68,"\uC774\uB07C \uD3ED\uD3EC"),vt(849,860,4.1,6.4,1.6,"\uB3CC\uAE30\uB465 \uC5EC\uC6B8"),vt(1017,1029,-4.8,6.3,1.86,"\uBD89\uC740 \uC808\uBCBD"),vt(1214,1225,2.4,6.7,1.7,"\uB9C8\uC9C0\uB9C9 \uD3ED\uD3EC")],canal:[Ie(109,0,5.8,"\uCCAB \uC218\uBB38"),Ie(174,-4.3,5.5,"\uC11C\uCABD \uAC11\uBB38"),$e(216,228,4.4,5.8,1.68,"\uC801\uC0C9 \uB3C4\uC57D\uB300",3.5),Ie(313,4.9,5.7,"\uCCA0\uAD50 \uC218\uBB38"),Ie(393,-5,5.6,"\uC774\uC911 \uC218\uBB38"),$e(446,459,-4.3,6,1.92,"\uBB3C\uB118\uC774 \uC810\uD504\uB300",3.6),Ie(543,4.5,5.7,"\uD38C\uD504\uC7A5 \uC218\uBB38"),$e(631,645,3.5,6.2,2.12,"\uC7A5\uAC70\uB9AC \uC810\uD504\uB300",3.8),Ie(733,-3.8,6,"\uD558\uB958 \uAC11\uBB38"),$e(825,836,5,5.7,1.1,"\uCDE8\uC218\uD0D1 \uB098\uBB34 \uBC1C\uD310"),$e(911,925,-4.7,6.3,2.12,"\uAC11\uBB38 \uB3C4\uC57D\uB300",3.4),Ie(1013,4,5.4,"\uB3D9\uCABD \uC218\uBB38"),Ie(1104,-4.1,6,"\uCCA0\uC81C \uAC11\uBB38"),$e(1180,1195,-2.4,6.1,2.2,"\uC0C1\uAC11\uD310 \uB3C4\uC57D\uB300",3.7),Ie(1270,3.3,6,"\uC6B4\uD558 \uCD9C\uAD6C")],marsh:[$e(157,166,5.2,4.8,.82,"\uBC84\uB4DC\uB098\uBB34 \uBC1C\uD310"),$e(358,367,-6.8,4.8,.98,"\uD1B5\uB098\uBB34 \uBC1C\uD310"),$e(563,572,5.4,5.1,1.05,"\uB098\uB8E8 \uBC1C\uD310"),$e(746,755,-5.8,5.2,1.08,"\uC595\uC740 \uB098\uB8E8"),$e(958,968,5.7,5.2,1.15,"\uC218\uB828\uC12C \uBC1C\uD310"),$e(1200,1212,-6.2,5.4,1.2,"\uAC08\uB300 \uB05D \uBC1C\uD310")]};Yv=Object.fromEntries(Object.entries(Zn).map(([n,e])=>[n,e.filter(t=>t.kind==="ledge")]));hl=j.bars||{shared:[[53,63.5,-4.25,1.55],[64,71.8,4.9,1.65]],gorge:[[148,176,7.2,3.5],[266,299,-7.1,4],[392,429,6.9,4],[548,583,-7.5,4.3],[720,757,6.4,4.1],[899,936,6.1,4.8],[1081,1121,-6.6,4.8],[1239,1284,7.3,4.7]],canal:[[231,252,5.3,2.4],[462,482,-5.5,2.8],[649,670,4.8,3],[929,949,-4.9,2.8],[1198,1220,-2.7,3.1]],marsh:[[100,147,-.4,2.7],[210,271,2.7,5.4],[298,348,-3,4.8],[401,470,1.8,6],[500,556,-2.9,5.8],[608,677,3.8,6.3],[698,741,-.5,4.7],[776,815,1.3,3.9],[851,922,1.4,6],[991,1058,-2.6,6.7],[1093,1163,2.3,5.4],[1231,1281,1.9,4.8]]};Zv=[[72,3.2],[120,5.3],[160,5.2],[201,-4.7],[260,-5.2],[310,4.1],[347,4.9],[365,-6.8],[406,-7.4],[470,-6.4],[514,5.9],[571,5.4],[618,-5.4],[669,-5.8],[708,6.3],[736,5.6],[756,-5.8],[804,-5.3],[889,-7.8],[954,5.7],[1037,7.3],[1084,-5.8],[1151,-6.3],[1209,-6.2],[1261,-5.7],[1320,2]]});function dl(n,e){return{offset:n.offset+n.reach*Math.sin(e*.58+n.phase),angle:.2*Math.sin(e*.83+n.phase+.4)}}function hu(n,e,t){let i=n.end-n.s,s=Qe((e-n.s)/i,0,1);return n.side*Math.min(6.8,Ue(e,t).half*.5)*(1-.7*s)}function fp(n,e,t,i){if(!os)return null;for(let s of os[t]){if(s.s>n)break;if(s.end===void 0||n<s.s||n>s.end)continue;let r=$v(s,n);if(s.kind==="wind")return{kind:s.kind,drift:s.dir*Kv*r,strength:r};if(s.kind==="spring"||s.kind==="eddy"){let h=2*(n-s.s)/(s.end-s.s)-1,d=(e-tt(n,t)-s.offset)/(s.width/2),p=Math.hypot(h,d);if(p>=1)continue;if(s.kind==="spring"){let m=(1-Le(.3,1,p))*cu(s,i);if(m>.001)return{kind:s.kind,strength:m,reach:s}}else return{kind:s.kind,strength:1-Le(.28,.94,p),drift:s.spin*h*(1-p)*10};continue}let o=s.kind==="outlet"?hu(s,n,t):s.offset,a=Math.abs(e-tt(n,t)-o),c=s.kind==="outlet"?3.5:s.width/2,l=1-Le(c-.65,c+.45,a);if(s.kind==="squall")return{kind:l>.5?"shelter":"squall",drift:s.dir*4.5*(1-l)*r,shelter:l*r,strength:r};let u=r*l*(s.kind==="outlet"?lu(s,i):1);if(u>.001)return{kind:s.kind,drift:0,strength:u}}return null}function pp(n,e,t){return os?.[e].find(i=>i.s>=n&&i.s-n<=t)}function jv(n,e,t,i,s,r,o,a,c,l,u,h,d,p){let m=0,_=1,g=[[n-o+d,i-c+d],[a+d-n,l+d-i],[e+u+p,s+u+p],[u+p-e,u+p-s],[h-t,h-r]];for(let[f,v]of g)if(f<0&&v<0||(f<0?m=Math.max(m,f/(f-v)):v<0&&(_=Math.min(_,f/(f-v))),m>_))return null;return _<=1e-6?null:m}function Qv(n,e,t,i,s,r,o,a){let c=e.kind==="log",l=at(e.s,tt(e.s,t)),u=He(e.s,t),h=n.elapsed-a,d=n.elapsed,p=c?dl(e,h):null,m=c?dl(e,d):null,_=c?(p.angle+m.angle)*.5:0,g=Math.cos(_),f=Math.sin(_),v=(L,F,O)=>{let z=at(L,F).x-l.x-O,G=L-e.s;return[z*g+G*f,-z*f+G*g]},[b,M]=v(i,s,c?p.offset:0),[A,S]=v(n.s,n.u,c?m.offset:0),T=n.level>=8?.6:.49,C=n.level<=3?.91:1.48,y=c?as:ks,x=c?.8:dp,R=c?0:Vo(e,h),D=c?0:Vo(e,d),I=c?[[-Hi,Hi,-Hi,Hi]]:[[e.offset-Os,R-Bs/2,e.offset-Os,D-Bs/2],[R+Bs/2,e.offset+Os,D+Bs/2,e.offset+Os]];for(let[L,F,O,z]of I){let G=jv(b,M,r-u,A,S,o-u,L,F,O,z,y,x,T,C);if(G===null)continue;let ee=b+(A-b)*G;n.contactReach!==e&&(n.reachSide=Math.abs(n.steering)>.22?Math.sign(n.steering):ee<(O+z)*.5?-1:1,n.speed*=c?.62:.58,n.hitKind=e.kind,n.hitTime=.72,n.hits++);let ce=(Math.abs(n.steering)>.36?Math.sign(n.steering):n.reachSide)*Math.max(Math.abs(A-b),.6*Math.abs(S-M))*(1-G),xe=ee+ce,ke;b<L-T-.001?(xe=Math.min(xe,O-T-.002),ke=S):b>F+T+.001?(xe=Math.max(xe,z+T+.002),ke=S):ke=M>0?Math.max(S,y+C+.002):Math.min(S,-y-C-.002);let Ye=l.x+(c?m.offset:0)+xe*g-ke*f;return n.s=e.s+xe*f+ke*g,n.u=Ye-at(n.s).x,n.contactReach=e,n.lastReach=e,!0}return!1}function mp(n,e,t,i,s,r,o){if(!os)return null;let a=Math.min(e,n.s)-4,c=Math.max(e,n.s)+4;for(let l of os[i]){if(l.s>c)break;if(l.end!==void 0||l.s<a)continue;if((l.kind==="log"||l.kind==="lock")&&Qv(n,l,i,e,t,s,r,o))return l.kind;if(l.kind==="log"||e>=l.s||n.s<l.s||n.lastReach===l)continue;let u=(l.s-e)/(n.s-e),h=at(e,t).x*(1-u)+at(n.s,n.u).x*u-at(l.s,tt(l.s,i)).x,d=s+(r-s)*u-He(l.s,i);if(l.kind==="charge"){if(Math.abs(h-l.offset)>l.width/2+.48||d>2.8)continue;n.battery=Math.min(1,n.battery+Jv),n.chargeTime=1.15,n.stoppedFor=0}else if(l.kind==="lantern"){let p=au(l,n.elapsed-o*(1-u))*ou;if(Math.abs(h-p)>fl||d>2.8)continue;n.jetEntry={kind:"lantern",speed:n.speed},n.speed+=3.7,n.jetTime=1.05,n.pads++}else{let p=n.level>=8?.6:.49;if(d>dp||Math.abs(h-Vo(l,n.elapsed-o*(1-u)))>Bs/2-p)continue;n.jetEntry={kind:"gate",speed:n.speed},n.speed+=2.8,n.jetTime=1.25,n.pads++}return n.lastReach=l,l.kind}return null}var Hi,as,Os,Bs,ks,dp,Jv,os,Go,ou,fl,au,cu,Vo,Kv,$v,lu,pl=pt(()=>{rn();$t();Hi=2.85,as=.46,Os=9.4,Bs=3.7,ks=.62,dp=1.45,Jv=.045,os=j.reaches,Go={log:"\uBD80\uC720\uBAA9",wind:"\uD6A1\uB958",outlet:"\uD130\uBE48 \uBC29\uB958",ice:"\uBE59\uD310",charge:"\uCDA9\uC804 \uACE0\uB9AC",lock:"\uC774\uB3D9 \uAC11\uBB38",lilies:"\uC5F0\uC78E \uAD70\uB77D",spring:"\uC628\uCC9C \uBD84\uCD9C",lantern:"\uB4F1\uBD88 \uAC00\uC18D",eddy:"\uD68C\uC804 \uBB3C\uC0B4",squall:"\uD574\uC548 \uD6A1\uD48D",shelter:"\uBC14\uB78C \uADF8\uB298"},ou=4.2,fl=2.65,au=(n,e)=>Math.sin(e*1.3+n.phase)>=0?1:-1,cu=(n,e)=>Le(.08,.83,(1+Math.sin(e*1.83+n.phase))*.5);Vo=(n,e)=>n.offset+4*Math.sin(e*.69+n.phase),Kv=3.15,$v=(n,e)=>Le(n.s,n.s+7,e)*(1-Le(n.end-7,n.end,e)),lu=(n,e)=>Le(.08,.84,(1+Math.sin(e*1.04+n.phase))*.5)});function du(n,e){return!Ft.includes(e)||n.boostCells.includes(e)?!1:(n.boostCells.push(e),n.boostLeft++,!0)}function gp(n,e,t,i){let s=Vi[n.route];if(!s||n.pickedCell||n.boostCells.includes(s.branch)||Math.min(e,n.s)>s.s+uu||Math.max(e,n.s)<s.s-uu)return null;let r=He(n.s,s.branch)+n.altitude,o=s.y-.6,a=s.y+ey,c=r-i;if(Math.min(i,r)>a||Math.max(i,r)<o)return null;let l=0,u=1;if(Math.abs(c)>1e-8){let v=(o-i)/c,b=(a-i)/c;l=Math.max(0,Math.min(v,b)),u=Math.min(1,Math.max(v,b))}let h=at(e,t).x,d=h-s.x,p=e-s.s,m=at(n.s,n.u).x-h,_=n.s-e,g=m*m+_*_,f=g>1e-8?Qe(-(d*m+p*_)/g,l,u):l;return Math.hypot(d+f*m,p+f*_)>uu?null:(du(n,s.branch),n.pickedCell=s.branch,n.pickupTime=1.8,s.branch)}var uu,ey,Vi,Wo=pt(()=>{rn();$t();uu=1.65,ey=2.1,Vi=Object.fromEntries(Ft.map(n=>{let e=j.cellStations[n],t=Ns(e,n);return[n,{branch:n,s:e,u:t,...at(e,t),y:He(e,n)}]}))});function ml(n){return Math.min(n*.7,6.4+n*.255)}function ty(n,e,t){if(!e)return n.keyHold=0,0;let i=.56,s=e*n.keyHold>0?Math.abs(n.keyHold):0,r=Math.abs(e)*t,o=Qe((s+r*.5)/i,0,1);return n.keyHold=Math.sign(e)*Math.min(i,s+r),e*(.32+.54*o*o*(3-2*o))}function xp(n,e,t,i="analog",s=0){let r=ml(n.speed),o=i==="keyboard",a=o||i==="mouse",c=i==="touch";n.smoothSteering=a||c;let l=Qe(e,-1,1);o?l=ty(n,l,t):n.keyHold=0;let u=l*r*(n.flying?.43:1)*(1-.36*s),h=u*n.side<0||Math.abs(u)<Math.abs(n.side),d=u===0?28:h?24:18;a&&(d=u===0?25:h?17:15),c&&(d=u===0?23:h?16:12),n.flying&&(d=8),d*=1-.73*s;let p=n.side-u,m=n.sideAcceleration+d*p,_=Math.exp(-d*t);n.side=u+(p+m*t)*_,n.sideAcceleration=(n.sideAcceleration-d*m*t)*_,n.side=Qe(n.side,-n.speed*.72,n.speed*.72),n.steering=Qe(n.side/Math.max(.1,r),-1,1),n.turnAngle=Math.asin(Qe(n.side/Math.max(.1,n.speed),-.72,.72))}function fu(n,e,t="touch"){let i=Wt(n.s,n.route);return{route:i,offset:n.u-tt(n.s,i),x:e,moved:!1,stroke:0,source:t}}function gl(n,e){let t=Wt(e.s,e.route);if(t!==n.route){let a=t==="shared"?Xe:ue;n.offset+=tt(a,n.route)-tt(a,t),n.route=t}let i=Ue(e.s,t),s=i.left+Mi,r=i.right-Mi,o=Jn(e.s,t);return o&&e.altitude<.7&&(e.u<o.mid?r=Math.min(r,o.left-Mi):s=Math.max(s,o.right+Mi)),e.wallSide<0&&(r=Math.min(r,e.u)),e.wallSide>0&&(s=Math.max(s,e.u)),n.offset=Qe(n.offset,s-i.center,r-i.center),i}function _p(n,e){let t=Math.max(0,n-e),i=t<e?t*t/(2*e):t-e*.5;return n+i*.72}function pu(n,e,t,i){let s=t-n.x;if(!n.moved){let a=n.source==="mouse"?2:4;if(Math.abs(s)<=a)return;s-=Math.sign(s)*a,n.moved=!0}let r=gl(n,e);if(n.source==="touch"&&s){let a=n.stroke*s>0?Math.abs(n.stroke):0,c=a+Math.abs(s),l=Qe(i*.075,24,56);n.stroke=Math.sign(s)*c,s=Math.sign(s)*(_p(c,l)-_p(a,l))}let o=n.source==="mouse"?Qe(i*.7,250,710):Qe(i*.95,300,920);n.offset+=s*Qe(r.half*2,34,48)/o,n.x=t,gl(n,e)}function vp(n,e){let i=(gl(n,e).center+n.offset-e.u)*Math.cos(cn(e.s,n.route)),s=Math.max(.1,ml(e.speed)*(e.flying?.43:1));if(n.source==="touch"){let r=i*5.2-e.side*.55;return .85*Math.tanh(r/(.85*s))}return Qe((i*8.6-e.side*.46)/s,-1,1)}function yp(n,e){if(!n.moved)return null;let t=gl(n,e),i=e.u-t.center,s=n.source==="touch"?Math.min(.6,ml(e.speed)*.047):Math.min(1,ml(e.speed)*.075),r=Qe(n.offset-i,-s,s);return Math.abs(r)<.05?null:{route:n.route,offset:i+r,until:e.elapsed+.28,source:n.source}}var Mi,_l=pt(()=>{$t();Mi=.48});function iy(n,e){let{s:t,wood:i=!1,tip:s,panel:r}=e,o=e.deck??(i?4.8:6.1),a=Ue(t,n),c=at(t,tt(t,n)),l=new N(c.x,He(t,n),c.z),u=[],h=[],d=-a.half-1.65,p=a.half+1.65,m=e.side==="right"?s:d,_=e.side==="left"?s:p,g=(m+_)/2,f=_-m;function v(I,L,F,O,z,G,ee,se=0,ce=!0){let xe=Math.cos(se),ke=Math.sin(se),Ye={center:new N(I+l.x,L+l.y,F+l.z),size:[O,z,G],color:ee,angle:se};ce&&(Ye.axes=se?[new N(xe,ke,0),new N(-ke,xe,0),_u]:[Mp,Sp,_u],Ye.half=[O/2,z/2,G/2],h.push(Ye)),u.push(Ye)}function b(I,L,F,O,z,G,ee,se){v((I+F)/2,(L+O)/2,z,Math.hypot(F-I,O-L),G,ee,se,Math.atan2(O-L,F-I))}function M(I,L,F,O){v((I+L)/2,F,O,L-I,.38,.08,"#edb94e",0,!1);let z=Math.max(1,Math.floor((L-I)/1.25));for(let G=0;G<z;G++){let ee=I+(G+.5)*(L-I)/z;v(ee,F,O+.045,.25,.34,.035,"#383d36",-.44,!1)}}if(e.vault){let I=[[-a.half-4,.6],[-a.half-1.4,10.4],[-a.half*.58,16.8],[-1.1,19],[a.half*.53,17.4],[a.half+1.6,10.6],[a.half+4.2,.5]],L=["#625770","#756981","#6f637c","#827188","#6c637a","#675c71"],F=23;for(let O=0;O<I.length-1;O++){let[z,G]=I[O],[ee,se]=I[O+1];b(z,G,ee,se,0,2.8,F,L[O]);let ce=F*.5+.05;(O===1||O===4)&&b(z*.35+ee*.65,G*.35+se*.65-.38,ee,se-.34,ce,.17,.13,"#a7b6b6")}return{s:t,route:n,start:t-F/2-2,end:t+F/2+2,parts:u,solids:h,name:"\uB3D9\uAD74 \uCC9C\uC7A5",cue:"\uB3D9\uAD74 \uCC9C\uC7A5"}}let A=i?"#8b6e48":"#a95e48",S=o+(e.side?.78:i?1.03:2.7),T=e.side==="right"?[p-.5]:e.side==="left"?[d+.5]:[d+.57,p-.57];for(let I of T)for(let L of[-1.32,1.32])v(I,(o-.38)/2,L,.42,o+.58,.46,i?"#775e46":"#829288");if(v(g,o,0,f,.32,3.18,i?"#af8c5d":"#b4a68e"),i)for(let I=m+.24;I<_;I+=.92)v(I,o+.164,0,.045,.014,3.12,"#846e50",0,!1);for(let I of[-1.52,1.52]){v(g,o-.12,I,f,.38,.34,A),v(g,S,I,f,.17,.19,A);let L=Math.max(3,Math.round(f/(i?2.8:4.8)));for(let F=0;F<=L;F++){let O=m+F*f/L;v(O,(o+S)/2,I,.14,S-o,.16,A),!i&&F<L&&b(O,F%2?o:S,O+f/L,F%2?S:o,I,.18,.18,A)}}if(r){let I=r.side==="right"?r.tip:m,L=r.side==="right"?_:r.tip,F=r.clearance,O=o-.14,z=(I+L)/2;v(z,(F+O)/2,0,L-I,O-F,.88,"#496668");for(let G=I+.45;G<L;G+=2.1)v(G,(F+O)/2,.46,.13,O-F,.12,"#71908b");v(z,F+.24,0,L-I,.48,1.24,"#686746"),M(I,L,F+.24,.66)}else e.marked&&M(m,_,o-.12,1.72);let C=Math.min(...h.map(I=>-I.center.z-I.half[2]))-2,y=Math.max(...h.map(I=>-I.center.z+I.half[2]))+2,x=r?.side??e.side,R=e.name??(i?"\uB098\uBB34\uB2E4\uB9AC":"\uCCA0\uAD50"),D=x?(x==="right"?"\uC624\uB978\uCABD ":"\uC67C\uCABD ")+(r?"\uB0AE\uC740 \uC218\uBB38\uD310":"\uB3CC\uCD9C \uC794\uAD50"):R;return{s:t,route:n,start:C,end:y,parts:u,solids:h,marked:!!e.marked,name:R,cue:D,side:x,approach:e.approach}}function uy(n,e,t){let i=0,s=t;function r(o){if(o.lengthSq()<1e-10)return!0;let a=0;for(let d=0;d<3;d++)a+=n[d+3]*Math.abs(o.dot(Nr[d]))+e.half[d]*Math.abs(o.dot(e.axes[d]));let c=o.dot(bp),l=o.dot(xu);if(Math.abs(l)<1e-9)return Math.abs(c)<=a;let u=(-a-c)/l,h=(a-c)/l;return i=Math.max(i,Math.min(u,h)),s=Math.min(s,Math.max(u,h)),i<=s}for(let o of e.axes)if(!r(o))return null;for(let o of Nr)if(!r(o))return null;for(let o of Nr)for(let a of e.axes)if(!r(hy.crossVectors(o,a)))return null;return i}function Ep(n,e,t,i,s){if(n.altitude<=0&&i<=0)return null;let r=Wt(n.s,n.route),o=Or[r],a=null;for(let c of o){if(n.s<c.start||e>c.end)continue;let l=at(e,t),u=at(n.s,n.u);mu.set(l.x,He(e,Wt(e,n.route))+i+.072,l.z),xu.set(u.x,He(n.s,r)+n.altitude+.072,u.z).sub(mu);let h=(n.s+e)/2,d=(n.pitch+s)/2+n.speed*.0023,p=cn(h,r)+n.turnAngle*(n.smoothSteering?.82:1);Xo.setFromEuler(ly.set(d,-p,n.steering*(n.smoothSteering?.73:1)*.15,"YXZ")),Nr[0].copy(Mp).applyQuaternion(Xo),Nr[1].copy(Sp).applyQuaternion(Xo),Nr[2].copy(_u).applyQuaternion(Xo);for(let m of cy[n.level-1]){gu.set(m[0],m[1],m[2]).applyQuaternion(Xo).add(mu);for(let _ of c.solids){if(Math.abs(gu.z-_.center.z)>Math.abs(xu.z)+_.half[2]+2)continue;bp.copy(gu).sub(_.center);let g=uy(m,_,a?a.t:1);g!==null&&(!a||g<a.t)&&(a={bridge:c,t:g})}}}return a}function wp(n){let e=Wt(n.s,n.route),t=Math.max(64,Math.min(115,n.speed*3.6));return Or[e].find(i=>(i.marked||n.flying)&&i.s>n.s&&i.s-n.s<=t)}var ny,Mp,Sp,_u,Or,sy,ry,oy,ay,cy,Xo,ly,hy,Nr,mu,xu,gu,bp,xl=pt(()=>{rn();ci();$t();ny=j.bridges?{...j.bridges,shared:[...j.bridges.shared,{s:Pt+5,wood:j.id!=="harbor"}]}:{gorge:[],canal:[{s:156},{s:259,deck:10.85,panel:{side:"right",tip:3.95,clearance:6.85},approach:216,marked:!0,name:"\uC815\uBE44\uAD50"},{s:386},{s:596},{s:845},{s:1084},{s:1255,deck:8.65,marked:!0}],marsh:[{s:187,wood:!0,deck:3.86,side:"right",tip:4.15,approach:157,marked:!0,name:"\uB098\uBB34 \uC794\uAD50"}],shared:[{s:Pt+5,wood:!0}]},Mp=new N(1,0,0),Sp=new N(0,1,0),_u=new N(0,0,1);Or=Object.fromEntries(Object.entries(ny).map(([n,e])=>[n,e.map(t=>iy(n,t)).sort((t,i)=>t.s-i.s)])),sy=[[0,.19,-.56,.41,.13,.41],[0,.16,.36,.44,.14,.49],[0,.355,.02,.23,.15,.26]],ry=[[0,.3,-1.11,.25,.12,.27],[0,.26,-.4,.52,.15,.55],[0,.22,.61,.54,.14,.59]],oy=[0,.535,.08,.3,.145,.37],ay=[[-.43,.39,1.25,.14,.18,.21],[.43,.39,1.25,.14,.18,.21]],cy=Array.from({length:10},(n,e)=>{let t=e+1,i=t<=3?sy:[...ry,...t>=5?[oy]:[],...t>=9?ay:[]],s=t===10?[1.09,1.06,1.14]:[1,1,1];return i.map(r=>r.map((o,a)=>o*s[a%3]))}),Xo=new Dn,ly=new Mn,hy=new N,Nr=[new N,new N,new N],mu=new N,xu=new N,gu=new N,bp=new N});function dy(n){let e=[];function t(o,a,c,l,u,h){e.push({kind:o,s:a,u:c,x:gn(a)+c,base:He(a,n),radius:l,height:u,...h})}for(let o of Zn[n]){if(o.kind==="ledge")continue;let a=o.kind==="gate",c=a?o.start:o.end;for(let l of[-1,1]){let u=tt(c,n)+o.offset+l*(o.width/2+(a?Gi.offset:.12));a?t("gate",c,u,Gi.radius,2.635,{side:l,feature:o}):t("flag",c,u,.041,o.rise+1.6,{side:l,feature:o})}}let i=j.markerStep??(n==="canal"?29:36),s=n==="shared"?Xe:ue+18,r=n==="shared"?Pt+192:Xe;for(let o=Math.ceil(s/i)*i;o<r;o+=i){let a=o/i%2?1:-1,c=n==="marsh",l=c?Ns(o,n)+a*3.2:tt(o,n)+a*(n==="gorge"?5.8:6.8),u=Jn(o,n),h=j.lanes?2.6:.48;u&&l>u.left-h&&l<u.right+h||(c?t("stake",o,l,.064,1.58):t("buoy",o,l,.32*.83,.72*.83))}for(let o of yl[n]||[])for(let a of[o.s+.3,o.s+o.length-1])for(let c of[-1,1])t("pile",a,o.u+c*(o.width*.5-.13),.115,1.25);if(n==="shared")for(let o of[-1.23,1.23])t("launch",.3,o,.12,.84);if(n==="canal"&&(!j.lanes||j.id==="harbor"))for(let o=Math.ceil((ue+23)/12)*12;o<Xe;o+=12){let a=Ue(o,n);t("quay",o,a.left-.22,.12,1.5),t("quay",o,a.right+.22,.12,1.5)}return e.sort((o,a)=>o.s-a.s)}var Gi,vl,yl,Ml,Sl=pt(()=>{rn();$t();Gi={offset:.33,radius:.47,top:.625},vl=.34,yl={shared:[{s:-5.5,u:7,length:10.5,width:3.5}],marsh:(j.docks??[172,380,584,768,980,1220]).map(n=>({s:n,u:Ue(n,"marsh").right-1.05,length:7.5,width:1.94}))};Ml=Object.fromEntries(Object.keys(Zn).map(n=>[n,dy(n)]))});function bn(n){return()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296)}var qo=pt(()=>{});function _y(n){let e=[];for(let t of Zn[n]){if(t.kind!=="ledge")continue;let i=bn(j.seed+t.start*9319);for(let s of[-1,1])for(let r=-vu;r<=6;r++){let o=t.start+(r<0?r*fy:(t.end-t.start)*r/6),a=r<0?-r/vu:0,c=cn(o,n),l=Math.cos(c),u=Math.sin(c),h=.76+.23*i()+a*.12,d=1.3+.19*i(),p=Ue(o,n),m=p.center+t.offset+s*(t.width/2+h+.2+i()*.16+a*.95),_=Qe(m,p.left+h*.45,p.right-h*.45),g=gn(o)+_,f=He(o,n),v=.85+i()*.31+li(t,o)*.48+(r===-vu?.43:0),b=[[-.75,.87],[.1,1],[v*.66,.87],[v,.5+i()*.1]],M=b.map(([S,T])=>py.map(([C,y])=>{let x=C*h*T,R=y*d*T;return[g+x*l+R*u,f+S,-o+x*u-R*l]})),A=my.map(([S,T])=>{let C=S/h*l+T/d*u,y=-S/h*u+T/d*l,x=1/Math.hypot(C,y);return{nx:C*x,ns:y*x,d:gy*x}});e.push({kind:"rock",s:o,u:_,x:g,base:f,rx:h,rs:d,cos:l,sin:u,height:v,count:Br,rings:b,vertices:M,planes:A,feature:t,side:s,color:Tp[Math.floor(i()*Tp.length)]})}}return e.sort((t,i)=>t.s-i.s)}var vu,fy,yu,Tp,Ap,Br,Rp,py,my,gy,bl,Mu=pt(()=>{rn();$t();qo();vu=5,fy=2.4,yu=j.id==="basalt",Tp=yu?["#52616c","#677580","#5e6b74"]:["#998a77","#ae9b81","#9f9180"],Ap=yu?"#acb8b9":"#c7b89d",Br=yu?6:7,Rp=Array.from({length:Br},(n,e)=>2*Math.PI*e/Br-Math.PI/2),py=Rp.map(n=>[Math.cos(n),Math.sin(n)]),my=Rp.map(n=>[Math.cos(n+Math.PI/Br),Math.sin(n+Math.PI/Br)]),gy=Math.cos(Math.PI/Br);bl=Object.fromEntries(Object.keys(Zn).map(n=>[n,_y(n)]))});function Cp(n,e,t,i,s,r){let{x:o,s:a,dx:c,ds:l,cos:u,sin:h,y0:d,y1:p}=i,m=s+e,_=r+e,g=o-n.x,f=a-n.s,v=(g*u-f*h)/m,b=(g*h+f*u)/_,M=(c*u-l*h)/m,A=(c*h+l*u)/_,S=M*M+A*A;if(S<1e-12||Math.min(d,p)>t)return null;let T=v*M+b*A,C=v*v+b*b-1,y=T*T-S*C;if(y<0)return null;let x=Math.sqrt(y),R=Math.max(0,(-T-x)/S),D=Math.min(1,(-T+x)/S);if(d>t&&(R=Math.max(R,(t-d)/(p-d))),p>t&&(D=Math.min(D,(t-d)/(p-d))),R>D||C>=-1e-6&&R===0&&T>=0)return null;let I=v+M*R,L=b+A*R,F=Math.hypot(I,L);F<1e-8?(I=0,L=-1):(I/=F,L/=F);let O=I/m*u+L/_*h,z=-I/m*h+L/_*u,G=Math.hypot(O,z);return{obstacle:n,t:R,nx:O/G,ns:z/G,x:n.x+I*m*u+L*_*h,s:n.s-I*m*h+L*_*u}}function Pp(n,e,t,i,s){return Math.hypot(n.halfWidth*(i*e-s*t),n.halfLength*(i*t+s*e))}function My(n,e,t){let{x:i,s,dx:r,ds:o,y0:a,y1:c,cos:l,sin:u}=e;if(Math.min(a,c)>n.base+n.height)return null;let h=c-a,d=i-n.x,p=s-n.s,m=a-n.base,_=n.rings,g=null;for(let f=0;f<_.length-1;f++){let[v,b]=_[f],[M,A]=_[f+1];if(Math.max(m,m+h)<v||Math.min(m,m+h)>M)continue;let S=0,T=1;if(Math.abs(h)>1e-9){let L=(v-m)/h,F=(M-m)/h;S=Math.max(0,Math.min(L,F)),T=Math.min(1,Math.max(L,F))}let C=(A-b)/(M-v),y=-1/0,x=0,R=0,D=null;for(let L of n.planes){let{nx:F,ns:O,d:z}=L,G=Pp(t,l,u,F,O),ee=F*d+O*p-z*(b+C*(m-v))-G,se=F*r+O*o-z*C*h,ce=ee+se*S;if(ce>y&&(y=ce,x=F,R=O),Math.abs(se)<1e-9){if(ee>0){T=-1;break}}else if(se<0){let xe=-ee/se;xe>S&&(S=xe,D=L)}else T=Math.min(T,-ee/se);if(S>T)break}if(S>T||g&&g.t<=S||(D&&(x=D.nx,R=D.ns,y=0),S===0&&y>=-2e-5&&r*x+o*R>=0))continue;let I=Math.max(0,-y);g={t:S,nx:x,ns:R,x:i+r*S+x*I,s:s+o*S+R*I}}return g}function Su(n,e){let t=0,i=n.length;for(;t<i;){let s=t+i>>>1;n[s].s<e?t=s+1:i=s}return t}function Lp(n,e,t,i,s){let{x:r,s:o,dx:a,ds:c}=n,l=o+c,u=Math.min(r,r+a),h=Math.max(r,r+a),d=null;for(let p=Su(t,Math.min(o,l)-El);p<t.length&&t[p].s<=Math.max(o,l)+El;p++){let m=t[p];if(m.x<u-El||m.x>h+El)continue;let _=m.kind==="gate",g=Cp(m,_?.25:m.radius,m.base+m.height,n,e.halfWidth,e.halfLength);if(_){let f=Cp(m,m.radius,m.base+Gi.top,n,e.halfWidth,e.halfLength);f&&(!g||f.t<=g.t)&&(g=f)}g&&(!d||g.t<d.t)&&(d=g)}for(let p=Su(i,Math.min(o,l)-kr);p<i.length&&i[p].s<=Math.max(o,l)+kr;p++){let m=i[p];if(s&&m.feature===s.feature&&m.side===s.side||m.x<u-kr||m.x>h+kr)continue;let _=My(m,n,e);_&&(!d||_.t<d.t)&&(d={..._,obstacle:m})}return d}function Sy(n,e,t,i,s,r){let o=t-n.base,a=n.rings;if(o<a[0][0]||o>n.height)return null;let c=1;for(;o>a[c][0];)c++;let[l,u]=a[c-1],[h,d]=a[c],p=u+(d-u)*(o-l)/(h-l),m=-1/0,_=1/0;for(let{nx:g,ns:f,d:v}of n.planes){let b=Pp(i,s.cos,s.sin,g,f),M=v*p+b-f*(e-n.s);if(Math.abs(g)<1e-9){if(M<0)return null}else g>0?_=Math.min(_,M/g):m=Math.max(m,M/g);if(m>_)return null}return n.x+(r<0?m:_)}function by(n,e,t,i,s,r){let o=n.obstacle,a=1-n.t,c=e.ds*a*.8,l=e.dx*a,u=e.y0+(e.y1-e.y0)*n.t,h=Math.max(1,Math.ceil(Math.hypot(c,l)/.3)),d=n.x+n.nx*1e-4,p=n.s+n.ns*1e-4,m=u;for(let _=1;_<=h;_++){let g=n.s+c*_/h,f=u+(e.y1-u)*_/h,v=d+l/h;for(let A=Su(s,g-kr);A<s.length&&s[A].s<=g+kr;A++){let S=s[A];if(S.feature!==o.feature||S.side!==o.side)continue;let T=Sy(S,g,f,t,e,r);T!==null&&(v=r>0?Math.max(v,T+2e-4):Math.min(v,T-2e-4))}let b={x:d,s:p,dx:v-d,ds:g-p,y0:m,y1:f,cos:e.cos,sin:e.sin},M=Lp(b,t,i,s,o);if(M)return{x:M.x+M.nx*1e-4,s:M.s+M.ns*1e-4};d=v,p=g,m=f}return{x:d,s:p}}function Dp(n,e,t,i,s,r,o){let a=gn(e)+t,c=Math.cos(o),l=Math.sin(o),u={x:a,s:e,dx:gn(n.s)+n.u-a,ds:n.s-e,cos:c,sin:l,y0:s,y1:r},h=Ip(n.level),d=Ml[i],p=bl[i],m=null;for(let _=0;_<4;_++){let g=Lp(u,h,d,p);if(!g)break;let{nx:f,ns:v,t:b,obstacle:M}=g,A=u.dx*f+u.ds*v,S=-u.dx*v+u.ds*f;if(M.kind==="rock"&&v<-.65&&A<0){let T=(u.x-M.x)*M.cos-(u.s-M.s)*M.sin;S=(Math.abs(n.steering)>.06?Math.sign(n.steering):Math.abs(T)>.02?Math.sign(T):-M.side)*Math.max(Math.abs(S),-A*.45)}else A<0&&Math.abs(S)<-A*.24&&(S=(Math.abs(S)>1e-5?Math.sign(S):Math.sign(n.side)||-Math.sign(M.u-tt(M.s,i))||1)*-A*.24);if(!m){let T=Qe(-A/Math.max(1e-5,Math.hypot(u.dx,u.ds)),0,1);m={obstacle:M,normal:f*c-v*l,retain:.83-T*.23}}if(M.kind==="rock"&&u.ds>0){let T=(g.x-M.x)*M.cos-(g.s-M.s)*M.sin,C=f*M.cos-v*M.sin;if(Math.abs(T)>.65*(M.rx+h.halfWidth)&&Math.sign(T)*C>.24){let y=by(g,u,h,d,p,Math.sign(T));u.x=y.x,u.s=y.s,u.dx=0,u.ds=0;break}}if(u.x=g.x+f*1e-4,u.s=g.s+v*1e-4,u.y0+=(u.y1-u.y0)*b,u.dx=-v*S*(1-b),u.ds=f*S*(1-b),M.kind==="rock"){let T=Math.max(0,-A)*.18*(1-b);u.dx+=f*T,u.ds+=v*T}_===3&&(u.dx=0,u.ds=0)}return m&&(n.s=u.s+u.ds,n.u=u.x+u.dx-gn(n.s)),m}function Up(n,e,t,i,s,r){if(n.ramp||n.s<=e)return 0;for(let o of Zn[i]){if(o.kind!=="ramp"||n.s<o.start||e>=o.end)continue;let a=n.s-e,c=Math.max(e,o.start),l=Math.min(n.s,o.end),u=gn(e)+t,h=gn(n.s)+n.u,d=y=>gn(y)+tt(y,i)+o.offset,p=y=>(y-e)/a,m=y=>u+(h-u)*p(y)-d(y),_=Math.sign(m(c))||Math.sign(m(l))||1,g=Ip(n.level),f=cn(l,i),v=cn(e,i)+n.turnAngle-f,b=Math.hypot(g.halfWidth*Math.cos(v),g.halfLength*Math.sin(v)),M=o.width/2+b/Math.cos(f),A=_*m(c)-M,S=_*m(l)-M;if(S>=0)continue;let T=A>0?c+(l-c)*A/(A-S):c,C=y=>li(o,y)>vl&&He(y,i)+li(o,y)+.044>s+(r-s)*p(y);if(!(!C(T)&&!C(l))&&!(n.flying&&A<0&&!C(c)))return n.u-=_*S,_}return 0}var xy,vy,yy,Ip,El,kr,Fp=pt(()=>{$t();Sl();Mu();_l();xy={halfWidth:Mi,halfLength:.92},vy={halfWidth:.54,halfLength:1.42},yy={halfWidth:.59,halfLength:1.6},Ip=n=>n<=3?xy:n===10?yy:vy;El=2.3,kr=3.5});function zs(n){return n.flying?Math.hypot(n.speed,n.vy):n.speed}function Hr(n=1,e=1,t=[]){let i=Qn(e),s=Qe(n,0,1),r=Zr(t);return{course:j.id,s:0,u:0,route:"",level:i.level,power:s,speed:i.cruise*(.78+.81*s),steering:0,side:0,sideAcceleration:0,turnAngle:0,keyHold:0,smoothSteering:!1,elapsed:0,battery:1,boostCells:r,boostLeft:r.length,pickedCell:null,pickupTime:0,boostTime:0,stoppedFor:0,chargeTime:0,waterEffect:null,lastReach:null,contactReach:null,reachSide:0,jetTime:0,jetEntry:null,lastFeature:null,current:0,shallow:0,downhill:0,coastAccelerating:!1,coastFrom:null,bestCoast:null,peak:0,ramp:null,flying:!1,altitude:0,vy:0,pitch:0,flightStart:0,landTime:0,jumps:0,longestJump:0,pads:0,hits:0,hitKind:"bank",hitTime:0,touchTime:0,wallSide:0,split:null,crash:null,ended:!1,cleared:!1}}function wu(n){return!n.ended&&n.boostCells.length>0&&n.boostLeft>0&&n.boostTime<=0&&!n.flying}function Op(n){if(!wu(n))return!1;let e=Qn(n.level);return n.boostLeft--,n.boostTime=1.3+.37*e.boostScale,n.stoppedFor=0,n.speed+=4.7*e.boostScale,!0}function Bp(n,e,t,i){return n.kind==="ledge"?Fr(Math.min(e,n.end),t,i):li(n,e)}function Np(n,e,t){let i=He(n.s,e);return n.flying?Math.max(i,t):i+(n.ramp?Bp(n.ramp,n.s,n.u,e):0)}function Ey(n,e,t,i,s){if(n.flying){let l=n.vy,u=n.altitude,h=He(n.s,e);if(n.vy-=zr*t,n.altitude=i-h,n.pitch=Qe(Math.atan2(n.vy,Math.max(2,n.speed))*.68,-.31,.4),n.altitude<=0){let d=l-(h-s+u)/t,p=(d+Math.sqrt(d*d+2*zr*u))/zr,m=l-zr*Qe(p,0,t),_=Math.hypot(n.speed,m);return n.altitude=0,n.vy=0,n.pitch=0,n.flying=!1,n.landTime=.48,n.longestJump=Math.max(n.longestJump,n.s-n.flightStart),n.shallow>.6&&(n.speed*=.87),_}return null}if(!n.ramp)return null;let r=n.ramp,o=kp(r,n.s,n.u,e),a=1.38*r.rise/(r.end-r.start);if(n.altitude=Bp(r,n.s,n.u,e),n.pitch=Math.atan(a),n.s<r.end&&o)return null;let c=o?a+(r.kind==="ledge"?.095:.068)-n.downhill*.84:0;return n.speed/=Math.hypot(1,c),n.vy=n.speed*c,n.flying=!0,n.flightStart=n.s,n.jumps++,n.ramp=null,null}function kp(n,e,t,i){return Math.abs(t-tt(e,i)-n.offset)<=n.width/2+Mi}function wy(n,e,t,i,s){if(n.start<e||n.start>i.s||i.s<=e)return!1;let r=(n.start-e)/(i.s-e),o=t+(i.u-t)*r-tt(n.start,s)-n.offset,a=n.kind==="gate"?n.width/2+Gi.offset-Gi.radius:n.width/2+Mi;return Math.abs(o)<=a}function Ty(n,e,t,i){if(!(n.flying||n.ramp))for(let s of ll(n.s,i)){if(s===n.lastFeature)continue;let r=wy(s,e,t,n,i);if(!r&&s.kind==="ramp"&&n.s>=s.start&&n.s<s.end&&li(s,n.s)<=vl&&(r=kp(s,n.s,n.u,i)),!!r){if(n.lastFeature=s,s.kind!=="gate"&&(n.ramp=s),s.kind==="gate"||s.kind==="ramp"){let o=s.kind==="gate"?1.62:s.boosted?1.5:.8;n.jetEntry={kind:s.kind,speed:n.speed,duration:o},n.speed+=s.kind==="gate"?3.65:s.kick,n.jetTime=o,n.pads++}return}}}function bu(n,e,t,i,s){n.side*t<0&&(n.side*=Math.exp(-16*s),n.sideAcceleration*t<0&&(n.sideAcceleration=0)),n.touchTime||(n.speed*=i,n.hitKind=e,n.hitTime=.72,n.hits++),n.touchTime=.35}function zp(n,e,t=Hs,i="analog"){if(n.ended)return;let s=n.s,r=n.u,o=Wt(s,n.route),a=Qn(n.level),c=n.altitude,l=n.pitch;n.elapsed+=t;for(let ce of["hitTime","touchTime","boostTime","jetTime","landTime","pickupTime","chargeTime"])n[ce]=Math.max(0,n[ce]-t);let u=ul(s,n.u,o);n.current=u.current,n.shallow=u.shallow;let h=n.flying||n.ramp?null:fp(s,n.u,o,n.elapsed);n.waterEffect=h?.kind??null,h?.kind==="spring"&&h.strength>.6&&n.lastReach!==h.reach&&n.speed>2&&(n.lastReach=h.reach,n.flying=!0,n.flightStart=s,n.jumps++,n.vy=4.9+2.5*h.strength,n.speed+=1.7*h.strength);let d=n.flying,p=n.vy,m=h?.kind==="ice"?h.strength:0,_=h?.kind==="outlet"?h.strength:0;xp(n,e,t,i,m);let g=cn(s,o),f=Qe(g+n.turnAngle,-1.35,1.35),v=Ur(s,o)*Math.cos(f),b=Math.hypot(1,v),M=9.81*v/b;n.downhill=v;let A=n.speed,S=n.battery<=0;if(n.coastAccelerating=!1,n.flying)n.battery=Math.max(0,n.battery-.47*t/a.endurance);else{let ce=n.ramp?0:u.shallow,xe=u.current,ke=n.boostTime>0,Ye=n.jetTime>0,Ze=n.ramp?.kind==="ramp",J=Ye?Ze&&!n.ramp.boosted?n.ramp.kick:6.4:0,te=j.flow,_e=a.cruise+(te?.speed??(o==="marsh"?4.75:o==="gorge"?3.1:1.65))*xe-4*ce-.42*Math.abs(n.steering)+J+4.2*m+6.2*_,Oe=(o==="canal"?2.75:1.8)+.006*n.speed**2+1.4*ce+.23*Math.abs(n.steering)-(.24+(te?.assist??0))*xe,we=Math.max(0,n.speed-6),rt=a.hullDrag*(.24+.0175*we*we),wt;if(S){let ot=(Oe+rt)*(1-.66*m);wt=-ot*t,n.coastAccelerating=!ke&&!Ye&&!Ze&&M-ot>.12}else{wt=(_e-n.speed)*(1-Math.exp(-(Ye?1.7:.82)*t));let ot=te?.saving??(o==="marsh"?.3:o==="gorge"?.18:.09),Fe=(te?.draw??1)*(1+.12*Math.abs(n.steering)+.45*ce-ot*xe)*(Ye?.9:1);n.battery=Math.max(0,n.battery-Fe*(1-.42*(h?.shelter??0))*t/a.endurance)}if(ke){let ot=(_e+6.35*a.boostScale-n.speed)*(1-Math.exp(-1.7*t))-rt*t;wt=Math.max(wt,ot)}if(Ye){let ot=n.jetEntry.kind==="ramp"?n.jetEntry.duration:1.5,Fe=Math.min(1,n.jetTime/ot),Ne=Qe(10.5-.16*n.speed,3,8.6)*Fe*Fe;wt=Math.max(wt,(Ne-Oe)*t)}Ze&&(wt=Math.max(wt,-M*t));let U=h?.kind==="lilies"?.22*h.strength:h?.kind==="eddy"?.3*h.strength:0;n.speed=Math.max(0,n.speed+wt+(M+4.4*_-U*n.speed)*t)}n.coastAccelerating?(n.coastFrom??(n.coastFrom=A),(!n.bestCoast||n.speed-n.coastFrom>n.bestCoast.to-n.bestCoast.from)&&(n.bestCoast={from:n.coastFrom,to:n.speed})):n.coastFrom=null;let T=n.speed*t/(n.flying?1:b);n.s+=T*Math.cos(f),n.u+=T*Math.sin(f)-(gn(n.s)-gn(s))+(h?.drift??0)*t,!n.route&&s<ue&&n.s>=ue&&(n.route=lp(n.u));let C=Wt(n.s,n.route),y=He(s,o)+c,x=y+n.vy*t-.5*zr*t*t,R=Np(n,C,x),D=.1,I=Dp(n,s,r,C,y+D,R+D,f);if(I){I.obstacle.kind==="gate"&&(n.lastFeature=I.obstacle.feature);let ce=I.obstacle.kind;bu(n,ce==="rock"||ce==="buoy"?ce:"post",I.normal,I.retain,t),R=Np(n,C,x)}Ty(n,s,r,C),n.wallSide=Up(n,s,r,C,y+D,R+D),n.wallSide&&bu(n,"ramp",n.wallSide,.69,t);let L=Ey(n,C,t,x,y),F=Ep(n,s,r,c,l);if(F&&s+(n.s-s)*F.t<Pt){let ce=He(n.s,C)+n.altitude,xe=n.speed,ke=d?Math.hypot(xe,p-zr*t*F.t):zs(n);n.s=s+(n.s-s)*F.t,n.u=r+(n.u-r)*F.t,n.altitude=Math.max(0,y+(ce-y)*F.t-He(n.s,Wt(n.s,n.route))),n.pitch=l+(n.pitch-l)*F.t,n.elapsed-=t*(1-F.t),n.peak=Math.max(n.peak,ke),n.crash={name:F.bridge.name,station:F.bridge.s,speed:ke,forwardSpeed:xe},n.ended=!0,n.speed=0,n.vy=0,n.flying=!1,n.ramp=null,n.boostTime=0,n.jetTime=0;return}mp(n,s,r,C,y,He(n.s,C)+n.altitude,t);let O=Ue(n.s,C),z=Jn(n.s,C),G=Mi,ee=Qe(n.u,O.left+G,O.right-G);z&&n.altitude<.7&&ee>z.left-G&&ee<z.right+G&&(ee=n.u<z.mid?z.left-G:z.right+G),Math.abs(ee-n.u)>1e-4&&(bu(n,"bank",Math.sign(ee-n.u),.69,t),n.u=ee);let se=gp(n,s,r,y);return n.peak=Math.max(n.peak,L??0,zs(n)),s<Xe&&n.s>=Xe&&(n.split={speed:zs(n),battery:n.battery,time:n.elapsed}),n.s>=Pt?(n.s=Pt,n.cleared=!0,n.ended=!0):S&&n.speed<.08&&n.speed<=A&&!n.flying&&!n.jetTime&&!n.boostTime?(n.speed=0,n.stoppedFor+=t,(!n.boostLeft||n.stoppedFor>=Eu-1e-9)&&(n.ended=!0)):n.stoppedFor=0,se}var Hs,Eu,zr,Tu=pt(()=>{rn();pl();Wo();aa();_l();xl();Sl();Fp();$t();$t();Hs=1/60,Eu=2,zr=9.8});function Hp(n){if(j.id!=="cavern")return()=>{};let e=94,t=new Float32Array(e*3),i=new _t,s=new yn(t,3).setUsage(Rs);i.setAttribute("position",s);let r=new Mr({color:"#d7eca6",size:.19,transparent:!0,opacity:.9,depthWrite:!1,fog:!0}),o=new vo(i,r);return o.frustumCulled=!1,n.add(o),(a,c,l)=>{for(let u=0;u<e;u++){let d=Math.floor((c.s-10)/1.55)+u,p=d*1.55,m=Wt(p,c.route),_=Ue(p,m),g=l?0:a,f=d%2===0?1:-1;if(m==="shared"&&p>=j.fork&&p<j.merge){t[u*3+1]=-1e4;continue}let v=_.center+f*_.half*(.77+.18*Math.sin(d*7.3))+.51*Math.sin(g*.68+d),b=at(p,v);t[u*3]=b.x,t[u*3+1]=He(p,m)+.9+1.8*(1+Math.sin(d*2.5))+.4*Math.sin(g*.82+d),t[u*3+2]=b.z+.4*Math.cos(d+g*.7)}s.needsUpdate=!0}}var Vp=pt(()=>{ci();rn();$t()});function Gp(n){if(!os)return()=>{};let e=new gi(1,1,1),t=new _i(1,1,1,10),i=new Ro(1,.105,7,28),s=new Eo(1),r=new Map,o=(l,u=!0)=>{let h=l+u;return r.has(h)||r.set(h,u?new Ni({color:l,flatShading:!0}):new nn({color:l,side:zt})),r.get(h)},a=(l,u,h,d,p,m,_,g,f)=>{let v=new Mt(u,h);return v.position.set(d,p,m),v.scale.set(_,g,f),l.add(v),v},c=[];for(let[l,u]of Object.entries(os))for(let h of u){let b=function(S,T,C,y,x,R,D=0,I=2*Math.PI){let L=_(S,T,R);for(let F=0;F<14;F++){let O=D+(I-D)*F/14,z=D+(I-D)*(F+1)/14;g.has(x)||g.set(x,[]),g.get(x).push(L,_(S+C*Math.sin(O),T+y*Math.cos(O),R),_(S+C*Math.sin(z),T+y*Math.cos(z),R))}},M=function(S,T,C,y,x,R,D,I){let L=_(C,y,x);return a(m,S,T,L.x,L.y,L.z,R,D,I)},d=at(h.s,tt(h.s,l)),p=He(h.s,l),m=new pn;m.position.set(d.x,p,d.z),n.add(m),m.visible=!1;let _=(S,T,C)=>new N(at(S,tt(S,l)+T).x-d.x,He(S,l)+C-p,h.s-S),g=new Map,f=(S,T,C,y,x)=>{g.has(x)||g.set(x,[]),g.get(x).push(S,T,y,T,C,y)},v=(S,T,C,y,x,R=.12)=>{let D=Math.ceil((T-S)/5);for(let I=0;I<D;I++){let L=S+(T-S)*I/D,F=S+(T-S)*(I+1)/D;f(_(L,C(L),R),_(L,y(L),R),_(F,y(F),R),_(F,C(F),R),x)}},A;if(h.kind==="log"){let S=new pn;m.add(S),S.position.y=.32;let T=a(S,t,o("#82503a"),0,0,0,as,2*Hi,as);T.rotation.z=Math.PI/2;for(let y of[-1,1]){let x=a(S,t,o("#e9ba79"),y*(Hi+.015),0,0,as*.99,.045,as*.99);x.rotation.z=Math.PI/2;let R=a(S,t,o("#aa7851"),y*(Hi+.047),0,0,.21,.025,.21);R.rotation.z=Math.PI/2;let D=a(S,t,o("#e0a15d"),y*(Hi-.56),0,0,as+.012,.18,as+.012);D.rotation.z=Math.PI/2}let C=a(S,t,o("#916643"),-.7,.32,0,.15,.6,.16);C.rotation.z=-.54,A=y=>{let x=dl(h,y);S.position.x=x.offset,S.rotation.y=x.angle}}else if(h.kind==="lock"){let S=o("#517b82"),T=o("#9eb9ae"),C=o("#f3bd5d",!1),y=[-1,1].map(()=>{let R=new pn;m.add(R),a(R,e,S,0,.61,0,1,1.52,ks*2),a(R,e,T,0,1.36,.02,1,.18,ks*2+.1);for(let D of[-.34,0,.34])a(R,e,T,D,.67,ks+.028,.034,1.08,.08);return R}),x=[-1,1].map(()=>a(m,e,C,0,.72,.04,.25,1.42,ks*2+.15));for(let R of[-1,1]){let D=h.offset+R*(Os-.35);for(let I of[.28,.76,1.18])a(m,e,o("#e3c995"),D,I,ks+.11,.55,.16,.06)}A=R=>{let D=Vo(h,R);for(let[I,L]of[-1,1].entries()){let F=h.offset+L*Os,O=D+L*Bs/2;y[I].position.x=(F+O)/2,y[I].scale.x=Math.abs(F-O),x[I].position.x=O}}}else if(h.kind==="charge"){let S=a(m,i,o("#9cfce6",!1),h.offset,1.12,0,h.width*.5,1.98,1),T=a(m,i,o("#8b67af"),h.offset,1.12,-.16,h.width*.54,2.11,1.3);for(let C of[-1,1]){let y=a(m,s,o("#c6a0ef",!1),h.offset+C*h.width*.46,1.33,.06,.31,.57,.23);y.rotation.z=C*.29}A=C=>{S.scale.y=1.98+.05*Math.sin(C*2.8+h.s),T.rotation.z=.025*Math.sin(C*1.7)}}else if(h.kind==="lilies"){let S=bn(h.s*193),T=["#618e59","#84a95e","#a4bb72"].map(C=>o(C,!1));for(let C=h.s+1.5;C<h.end-1.4;C+=1.65)for(let y=0;y<3;y++){let x=h.offset+(y-1)*h.width*.32+(S()-.5)*1.1,R=C+S()*.9,D=.48+S()*.51,I=S()*6.28;b(R,x,D*.88,D,T[Math.floor(S()*3)],.11,I,I+5.86),y===1&&S()>.74&&M(s,o("#ef9aae"),R,x,.32,.33,.37,.33)}}else if(h.kind==="spring"){let S=(h.s+h.end)/2,T=h.width/2,C=(h.end-h.s)/2;b(S,h.offset,C,T,o("#7ccfc0",!1),.105);for(let x=0;x<3;x++){let R=.42+x*.22;for(let D=0;D<26;D++){let I=D*Math.PI/13,L=(D+.76)*Math.PI/13,F=(O,z)=>_(S+C*z*Math.sin(O),h.offset+T*z*Math.cos(O),.145);f(F(I,R),F(L,R),F(L,R+.037),F(I,R+.037),o("#dbf6d9",!1))}}let y=[];for(let x=0;x<7;x++){let R=x*2.4,D=x/9,I=_(S+C*D*.48*Math.sin(R),h.offset+T*D*.65*Math.cos(R),.1),L=a(m,s,o(x%2?"#e6fff0":"#b4ede0",!1),I.x,I.y,I.z,.3,.2,.3);y.push({drop:L,floor:I.y})}A=x=>{let R=cu(h,x);for(let[D,{drop:I,floor:L}]of y.entries()){let F=.12+R*(1.35+.65*Math.sin(x*4.7+D*2.4));I.scale.y=F,I.position.y=L+F*.76}}}else if(h.kind==="lantern"){let S=o("#ffe589",!1),T=o("#5c5368"),C=[];for(let y of[-1,1]){let x=y*ou,R=y*(Ue(h.s,l).half+1.4);a(m,t,o("#6b5047"),R,2.45,0,.11,4.9,.11),a(m,e,o("#8f7963"),(R+x)/2,4.87,0,Math.abs(R-x)+.18,.11,.11),a(m,e,o("#a88d77"),x,4.51,0,.05,.65,.05);let D=a(m,t,T,x,3.72,0,.59,.88,.59);for(let L of[3.22,4.2])a(m,t,o("#764c40"),x,L,0,.51,.13,.51);let I=o("#f8cc78",!1).clone();v(h.s-3.4,h.s+1,L=>x-fl,L=>x+fl,I,.12),C.push({side:y,lamp:D,wake:I})}A=y=>{let x=au(h,y);for(let R of C)R.lamp.material=R.side===x?S:T,R.wake.visible=R.side===x}}else if(h.kind==="eddy"){let S=(h.s+h.end)/2,T=h.width/2,C=(h.end-h.s)/2;b(S,h.offset,C,T,o("#487e79",!1),.108),b(S,h.offset,C*.39,T*.39,o("#386b6e",!1),.13);let y=o("#b8dfc7",!1),x=o("#def0d7",!1),R=(I,L)=>_(S+C*Math.sin(I)*L,h.offset+T*Math.cos(I)*L,.17);for(let I=0;I<3;I++)for(let L=0;L<22;L++){let F=h.spin*L*.19+I*2*Math.PI/3,O=F+h.spin*.19,z=.24+.69*L/22,G=z+.69/22;f(R(F,z),R(O,G),R(O,G+.037),R(F,z+.037),y)}let D=Array.from({length:5},()=>a(m,s,x,0,0,0,.2,.07,.24));A=I=>{for(let[L,F]of D.entries()){let O=L*2.4-h.spin*I*.95,z=R(O,.38+L%3*.23);F.position.set(z.x,z.y+.035,z.z)}}}else if(h.kind==="squall"){let S=o("#77a998",!1),T=o("#d2e2d8",!1),C=o("#b3e9a0",!1),y=h.width/2;for(let I of[-1,1]){let L=h.offset+I*y;v(h.s,h.end,()=>L-.12,()=>L+.12,S,.14);for(let F of[h.s+2,h.end-2])M(t,C,F,L,.27,.29,.48,.29)}for(let I=h.s+4;I<h.end-5;I+=7)for(let L of[-8,-5,-2,1,4,7])Math.abs(L+h.dir*.55-h.offset)<y+1||f(_(I,L,.17),_(I-.35,L+.12,.17),_(I+2.4,L+h.dir*1.4+.14,.17),_(I+2.7,L+h.dir*1.4,.17),T);let x=[],R=bn(h.s*337);for(let I=0;I<42;I++){let L=h.s+2+R()*(h.end-h.s-4),F=Math.min(10,Ue(L,l).half-1),O=(2*R()-1)*F;if(Math.abs(O-h.offset)<y+.8)continue;let z=1+R()*2.7;x.push(_(L,O,z),_(L+.35,O+h.dir*.4,z-1))}let D=new xo(new _t().setFromPoints(x),new yr({color:"#c6d8d4",transparent:!0,opacity:.53,depthWrite:!1}));m.add(D),A=I=>{let L=(I*1.9+h.s*.37)%1;D.position.set(h.dir*.4*L,-L,-.35*L)}}else if(h.kind==="ice"){let S=o("#b3e5eb",!1),T=o("#effaf3",!1),C=h.width/2,y=(x,R)=>h.offset+R*(C-.37+.28*Math.sin(x*.3+R));v(h.s,h.end,x=>y(x,-1),x=>y(x,1),S,.105);for(let x of[-1,1])v(h.s,h.end,R=>y(R,x)-.12,R=>y(R,x)+.12,T,.14);for(let x=h.s+6,R=0;x<h.end-5;x+=11,R++){let D=h.offset+(R%2?1:-1)*C*.4;f(_(x,D-1.25,.17),_(x,D-1.05,.17),_(x+2.8,D+.91,.17),_(x+2.6,D+.83,.17),T)}}else if(h.kind==="wind"){let S=o("#e2f0d6",!1);for(let C=h.s+3,y=0;C<h.end-4;C+=7,y++)for(let x of[-7,-1.5,4.4]){let R=x+1.1*Math.sin(y*2.1+x),D=h.dir*2.1;f(_(C,R,.16),_(C-.25,R+.19,.16),_(C+2.9,R+D+.23,.16),_(C+3.2,R+D,.16),S)}let T=-h.dir*(Ue(h.s,l).half+1.1);a(m,t,o("#e0c3a1"),T,2.6,0,.1,5.2,.1);for(let C=0;C<4;C++){let y=a(m,t,o(C%2?"#efe6c1":"#db6c54"),T+h.dir*(.3+C*.53),4.96-C*.09,0,.35-C*.058,.58,.35-C*.058);y.rotation.z=Math.PI/2-h.dir*.14}}else if(h.kind==="outlet"){let S=o("#e2f7ed",!1).clone(),T=o("#69b9b7",!1),C=I=>hu(h,I,l);v(h.s,h.end,I=>C(I)-2.9,I=>C(I)+2.9,T);for(let I=h.s+3;I<h.end-4;I+=5.6){let L=C(I);for(let F of[-1,1])f(_(I,L+F*2.35,.17),_(I-.32,L+F*2.31,.17),_(I+1.8,L,.17),_(I+2.12,L,.17),S)}let y=h.side*(Ue(h.s,l).half-.12),x=a(m,t,o("#536c6d"),y,.98,0,.88,2.36,.88);x.rotation.z=Math.PI/2;let R=a(m,i,o("#b0c4ba"),y-h.side*1.2,.98,0,.89,.89,.89);R.rotation.y=Math.PI/2;let D=a(m,e,S,y-h.side*2.3,.57,0,2.5,.2,1.15);D.rotation.z=h.side*.25,A=I=>{let L=lu(h,I);S.color.setRGB(.16+.64*L,.46+.48*L,.5+.39*L),D.visible=L>.12}}for(let[S,T]of g)m.add(new Mt(new _t().setFromPoints(T),S));c.push({r:h,key:l,group:m,animate:A})}return(l,u)=>{let h=l.s,d=u==="ready"?0:l.elapsed;for(let{r:p,key:m,group:_,animate:g}of c)_.visible=(p.end??p.s)>=h-16&&p.s<h+165&&(m==="shared"||!l.route||m===l.route),_.visible&&g&&g(d)}}var Wp=pt(()=>{ci();$t();pl();qo()});function Rn(n,e,t=0,i="shared"){let s=at(n,e);return[s.x,t+He(n,i),s.z]}function qp(n){return Au.has(n)||Au.set(n,new Pe(n)),Au.get(n)}function Zo(n,e,t,i,s){let[r,o,a]=t,c=s===0?["#658f56","#7ca65c","#91b869","#a4c77a"]:["#537f5b","#6c9a63","#85ae6f","#a0bd78"];if(n.form("trunk",[r,o+i*.3,a],[i*.045,i*.65,i*.047],"#776850",[.05,e()*5,.055]),n.form("trunk",[r+i*.1,o+i*.47,a],[i*.023,i*.34,i*.023],"#827456",[.18,.4,-.69]),s===2){for(let u=0;u<3;u++)n.form("cone",[r,o+i*(.49+u*.17),a],[i*(.26-u*.045),i*(.64-u*.06),i*(.24-u*.04)],c[u],[0,u*.7,0]);return}let l=i*(s===0?.32:.245);for(let u=0;u<5;u++){let h=u*Math.PI*.5+e()*.38,d=u===4?0:l*.56,p=u===4;n.form("crown",[r+Math.cos(h)*d,o+i*(p?.77:.59+e()*.1),a+Math.sin(h)*d],[l*(p?.85:1),i*(s===0?.27:.205),l*(.85+e()*.17)],c[(u+(p?2:0))%4],[.07,h,.06])}}function Ru(n,e,t,i){let[s,r,o]=t;n.form("trunk",[s,r+i*.29,o],[i*.07,i*.66,i*.062],"#867153",[.06,0,-.12]);for(let a=0;a<5;a++){let c=a*2.4+.4,l=s+Math.cos(c)*i*.2,u=o+Math.sin(c)*i*.2;n.form("trunk",[(l+s)/2,r+i*.49,(u+o)/2],[i*.026,i*.43,i*.026],"#917955",[.44*Math.sin(c),0,-.44*Math.cos(c)]),n.form("crown",[l,r+i*(.69+.07*Math.sin(c)),u],[i*.29,i*.24,i*.27],a%2?"#89b762":"#9cc574",[0,c,0]);for(let h=0;h<4;h++){let d=c+h*1.5,p=l+Math.cos(d)*i*.21,m=u+Math.sin(d)*i*.19,_=r+i*(.22+e()*.15);n.tri([p-.17,r+i*.66,m],[p+.25,r+i*.68,m+.13],[p+.09,_,m+.16],h%2?"#96b963":"#aecb70")}}}function Ht(n,e,t,i,s,r){let o=new N(t[0]-e[0],t[1]-e[1],t[2]-e[2]),a=o.length();if(a<.001)return;let c=new Dn().setFromUnitVectors(new N(0,1,0),o.normalize()),l=new Mn().setFromQuaternion(c);n.form("box",e.map((u,h)=>(u+t[h])*.5),[i,a,s],r,[l.x,l.y,l.z])}function Si(n,e,t,i=1){let[s,r,o]=t;for(let a=0;a<8;a++){let c=s+(e()-.5)*i*1.3,l=o+(e()-.5)*i*1.8,u=(.63+e()*1.14)*i,h=(e()-.4)*i*.4;n.tri([c-.085*i,r-.12,l],[c+.08*i,r-.12,l],[c+h,r+u,l-.24*i],a%2?"#8f9c55":"#81904e"),n.tri([c,r-.12,l-.08*i],[c,r-.12,l+.07*i],[c+h*.4,r+u*.86,l+.12*i],"#a8b264"),a===0&&n.form("trunk",[c+h*.68,r+u*.85,l-.11],[.045*i,.27*i,.045*i],"#6e5238",[.05,0,-h*.21])}}var Yo,wl,Ay,Ry,Xp,Cy,Iy,Au,Kn,Wi=pt(()=>{ci();$t();qo();Yo={box:new gi(1,1,1),stone:new br(1,0),crown:new br(1,1),trunk:new _i(.7,1,1,7),cone:new bo(1,1,5),hex:new _i(1,1,1,6),barrel:new _i(1,1,1,10)};for(let n of Object.keys(Yo))Yo[n].index&&(Yo[n]=Yo[n].toNonIndexed());wl=new N,Ay=new Dn,Ry=new Mn,Xp=new St,Cy=new N,Iy=new N,Au=new Map;Kn=class{constructor(){this.positions=[],this.colors=[]}tri(e,t,i,s){this.positions.push(...e,...t,...i);let{r,g:o,b:a}=qp(s);this.colors.push(r,o,a,r,o,a,r,o,a)}quad(e,t,i,s,r){this.tri(e,t,s,r),this.tri(t,i,s,r)}form(e,t,i,s,r=[0,0,0]){let o=Yo[e].attributes.position;Xp.compose(Cy.fromArray(t),Ay.setFromEuler(Ry.set(...r)),Iy.fromArray(i));let a=qp(s);for(let c=0;c<o.count;c++)wl.fromBufferAttribute(o,c).applyMatrix4(Xp),this.positions.push(wl.x,wl.y,wl.z),this.colors.push(a.r,a.g,a.b)}mesh(e=!1){let t=new _t;t.setAttribute("position",new Ge(this.positions,3)),t.setAttribute("color",new Ge(this.colors,3)),t.computeVertexNormals();let i=e?new nn({vertexColors:!0,side:zt}):new Ni({vertexColors:!0,side:zt,flatShading:!0});return new Mt(t,i)}}});function Py(){let n=new Kn,e=[[-.53,-.7],[.53,-.7],[.67,-.55],[.67,.49],[.51,.67],[-.51,.67],[-.67,.49],[-.67,-.55]];for(let s=0;s<e.length;s++){let[r,o]=e[s],[a,c]=e[(s+1)%e.length];n.quad([r,o,-.32],[a,c,-.32],[a,c,.32],[r,o,.32],"#bc852c");for(let l of[-.32,.32])n.tri([0,0,l],[r,o,l],[a,c,l],"#ffcf4c")}n.form("box",[0,.73,0],[.49,.19,.42],"#f7eac0"),n.form("box",[0,-.56,0],[1.29,.16,.7],"#244840");for(let s of[-1,1])n.form("box",[s*.658,-.04,0],[.07,.6,.43],"#335e55");let t=new Kn;for(let s of[-1,1]){let r=(o,a)=>[s*o,a,s*.333];t.quad(r(.08,.48),r(-.36,-.06),r(-.06,-.06),r(.26,.48),"#263f37"),t.tri(r(-.06,.12),r(.34,.12),r(-.2,-.45),"#263f37")}let i=new pn;return i.add(n.mesh(),t.mesh(!0)),i}function Yp(n){let e=Py(),t=new Fi(1.18,1.36,32),i=new nn({color:"#ffe189",transparent:!0,opacity:.88,side:zt,depthWrite:!1}),s=Object.values(Vi).map(r=>{let o=e.clone(),a=new Mt(t,i);return a.rotation.x=-Math.PI/2-Math.atan(Ur(r.s,r.branch)),a.position.set(r.x,r.y+.09,r.z),o.position.set(r.x,r.y+1.07,r.z),n.add(o,a),{cell:r,pack:o,ring:a,yaw:-cn(r.s,r.branch)}});return(r,o,a)=>{for(let{cell:c,pack:l,ring:u,yaw:h}of s){let d=!o.boostCells.includes(c.branch)&&(!o.route||o.route===c.branch)&&c.s>o.s-6&&c.s<o.s+172;if(l.visible=u.visible=d,!d)continue;let p=a?0:r*2.5+c.s*.07;l.position.y=c.y+1.07+.12*Math.sin(p),l.rotation.set(0,h+.32*Math.sin(p*.69),.055*Math.sin(p)),u.scale.setScalar(1+.09*Math.sin(p))}}}var Zp=pt(()=>{ci();Wi();Wo();$t()});function Tl(n,e,t){let i=Math.max(e-22,0)*(.22+.12*Math.sin(n*.013+e*.048));if(Jt){if(j.bankSlope){let[r,o,a]=j.bankSlope;return r*Math.min(e,12)+o*Math.min(e,38)+i*a}if(j.id==="timber")return .18*Math.min(e,14)+.09*Math.min(e,54)+i*.75;if(j.id==="windreach")return .14*Math.min(e,12)+.08*Math.min(e,35)+i*.42;if(j.id==="turbine"||j.id==="tideworks")return .13*Math.min(e,10)+1.7*Le(.8,3.8,e)+i*.36;if(j.id==="harbor")return .16*Math.min(e,18)+1.1*Le(.25,1.6,e)+i*.34;if(j.id==="delta")return .08*Math.min(e,14)+.055*Math.min(e,32)+i*.45;let s=4.8*Le(1.8,6.2,e)+7.2*Le(7,18,e)+5*Le(22,40,e);return .15*Math.min(e,24)+s*(.8+.2*Math.sin(n*.042))+i}if(t==="gorge"){let s=(4.7+1.8*Math.sin(n*.057))*Le(1.4,5.8,e)+(5.8+2.8*Math.sin(n*.031+.6))*Le(6.3,17,e);return .18*Math.min(e,10)+(.28+.72*Le(ue+13,ue+49,n))*s+i}return t==="canal"?.18*Math.min(e,12)+1.32*Le(.8,2.15,e)+.09*Math.max(0,e-12)+i:t==="marsh"?.12*Math.min(e,7)+.06*Math.min(e,32)+i:.2*Math.min(e,12)+.1*Math.min(e,35)+i}function Iu(n,e,t){let i=t[0],s=t[t.length-1],r=Ue(n,i),o=Ue(n,s);if(e<=r.left){let a=r.left-e;return{h:He(n,i)+Tl(n,a,i),d:a,route:i}}if(e>=o.right){let a=e-o.right;return{h:He(n,s)+Tl(n,a,s),d:a,route:s}}for(let a=0;a<t.length-1;a++){let c=t[a],l=t[a+1],u=Ue(n,c).right,h=Ue(n,l).left;if(e<u-1e-4||e>h+1e-4)continue;let d=Qe((e-u)/Math.max(.001,h-u),0,1),p=Le(0,1,d),m=Math.max(0,Math.min(e-u,h-e)),_=He(n,c)+Tl(n,m,c),g=He(n,l)+Tl(n,m,l),f=n<ue+48?(a===0?1.72:1.25)*Math.sin(Math.PI*d)*Le(.3,3.8,h-u)*(1-Le(ue+16,ue+48,n)):0;return{h:_+(g-_)*p+f,d:m,route:d<.5?c:l}}return null}function Cn(n,e){let t=Iu(n,e,Ly(n));if(!t)return null;let i=at(n,e);return[i.x,t.h,i.z]}function Kp(n,e,t){let i=at(n,e),s=Iu(n,e,t);return[i.x,s?s.h:He(n,t[0])-.035,i.z]}function $p(n,e,t,i,s){function r(l){let u=i.map(m=>Ue(l,m)),h=u[0].left,d=u.at(-1).right,p=[Jp.map(m=>h-m)];for(let m=0;m<u.length-1;m++){let _=u[m].right,g=u[m+1].left;p.push(Dy.map(f=>_+(g-_)*f))}return p.push(Jp.map(m=>d+m)),p}let o=Math.ceil((t-e)/(e===ue?1.25:3)),a=r(e),c=a.map(l=>l.map(u=>Kp(e,u,i)));for(let l=1;l<=o;l++){let u=e+(t-e)*l/o,h=r(u),d=h.map(p=>p.map(m=>Kp(u,m,i)));for(let p=0;p<h.length;p++)for(let m=0;m<h[p].length-1;m++){let _=Iu(u,(h[p][m]+h[p][m+1])/2,i);if(!_)continue;let g=(Jt?.ground??Uy[_.route])[_.d<1.6?0:_.d<(_.route==="gorge"?12:4.2)?1:2],f=g[Math.floor(s()*g.length)];n.quad(c[p][m],d[p][m],d[p][m+1],c[p][m+1],f)}c=d}}function jp(){let n={value:0},e=new nn({vertexColors:!0,side:zt});return e.onBeforeCompile=t=>{t.uniforms.creekClock=n,t.vertexShader=`attribute vec3 creekCoord; varying vec3 vCreek;
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
      diffuseColor.rgb+=vec3(.045,.055,.026)*caustic*vCreek.z*nearField;`)},{material:e,clock:n}}function Qp(n,e,t,i){let s=[],r=[],o=[],a=[],c=n>=0&&e<=ue,l=c?60:24,u=Math.ceil((e-n)/1.6),h=new Pe;for(let p of t){let[m,_,g]=Cu[p],f=new Pe,v=s.length/3;for(let b=0;b<=u;b++){let M=n+(e-n)*b/u,A=Ue(M,p),S=c?Le(11,ue,M):0,T=S?Fs(M,-1):0,C=S?Fs(M,1):0;for(let y=0;y<=l;y++){let x=A.left+(A.right-A.left)*y/l,R=ul(M,x,p),D=at(M,x),I=Fr(M,x,p);if(s.push(D.x,He(M,p)+I,D.z),a.push(x,M,R.shallow),f.copy(m).lerp(_,.82*R.shallow).lerp(g,.52*R.current),S){let L=x<(T+C)/2?"gorge":"marsh",F=L==="gorge"?1-Le(T-2,T+2,x):Le(C-2,C+2,x),O=Cu.canal,z=Cu[L];h.copy(O[0]).lerp(O[1],.82*R.shallow).lerp(O[2],.52*R.current),f.lerp(h,S),h.copy(z[0]).lerp(z[1],.82*R.shallow).lerp(z[2],.52*R.current),f.lerp(h,F*S)}if(I>0&&f.lerp(_,Math.min(.48,.55*I)),f.multiplyScalar(1+.036*Math.sin(M*.25+x*.74)),r.push(f.r,f.g,f.b),b&&y<l){let L=v+(b-1)*(l+1)+y,F=L+1,O=L+l+1;o.push(L,F,O,F,O+1,O)}}}}let d=new _t;return d.setAttribute("position",new Ge(s,3)),d.setAttribute("color",new Ge(r,3)),d.setAttribute("creekCoord",new Ge(a,3)),d.setIndex(o),new Mt(d,i)}function Fn(n,e,t){let i=Jn(n,t),s=i.mid+i.radius*e,r=at(n,s),o=(Jt?j.id==="basalt"?.54:j.id==="harbor"?.39:.16:t==="gorge"?.92:t==="shared"?.4:t==="canal"?.24:.16)*i.radius*(1-Math.abs(e)**1.55);return[r.x,He(n,t)+.025+o,r.z]}var Ly,Jp,Dy,Uy,Fy,Cu,Vr=pt(()=>{rn();la();ci();$t();Ly=n=>n>=ue&&n<Xe?Ft:["shared"],Jp=[0,.6,1.4,2.5,4.4,7,10.5,15.5,24,37,61,100,160],Dy=[0,.028,.06,.12,.2,.32,.5,.68,.8,.88,.94,.972,1];Uy={shared:[["#cfbd91","#dfcda1"],["#adb080","#a7ad7c"],["#afc384","#a7bc80"]],gorge:[["#d9b48a","#caaa82"],["#b58368","#bc8d6e","#a97d67"],["#a9916d","#ac9a76","#a18f6a"]],canal:[["#c0bba1","#bcbba8"],["#929e91","#9da69a"],["#aab78c","#a4b388"]],marsh:[["#bfbd86","#c4c48e"],["#99aa72","#a2ae76"],["#a4b77b","#abbc7c"]]};Fy={shared:["#358c94","#acc8a9","#68b8b1"],gorge:["#277d8b","#b6bf9b","#75c6c0"],canal:["#347f90","#8aafa3","#62b3bd"],marsh:["#518c78","#afbf86","#78b29a"]},Cu=Object.fromEntries(Object.entries(Jt?.water??Fy).map(([n,e])=>[n,e.map(t=>new Pe(t))]))});function em(n,[e,t,i],s,r,o,a,c){n.form("box",[e,t+r/2,i],[s,r,o],a);for(let l of[-1,1])n.quad([e+l*(s/2+.45),t+r,i-o/2-.4],[e,t+r+s*.31,i-o/2-.4],[e,t+r+s*.31,i+o/2+.4],[e+l*(s/2+.45),t+r,i+o/2+.4],c),n.tri([e-s/2,t+r,i+l*o/2],[e+s/2,t+r,i+l*o/2],[e,t+r+s*.31,i+l*o/2],a);n.form("box",[e,t+r*.39,i+o/2+.035],[s*.42,r*.77,.07],"#45524e")}function Oy(n,e,t){let[i,s,r]=e;em(n,e,4.8,2.65,6.2,"#ba9461","#945b44");for(let[o,a]of[[-.68,.43],[.26,.43],[-.18,1.16]]){let c=i+t*4+o;n.form("barrel",[c,s+a,r],[.53,5,.53],"#8c6343",[Math.PI/2,0,.02]),n.form("barrel",[c,s+a,r+2.52],[.51,.05,.51],"#dfbd83",[Math.PI/2,0,0])}for(let o of[-1.8,1.8])n.form("box",[i+o,s+2.2,r+3.2],[.25,4.2,.32],"#815f40")}function Pu(n,[e,t,i],s,r,o){let a=[[1,0],[.45,.87],[-.64,.73],[-.93,-.22],[-.12,-.94],[.76,-.67]],c=["#73a4b9","#9cc7d1","#b9dfe2","#85b6c7","#d7edef","#a5ced9"];for(let l=0;l<a.length;l++){let[u,h]=a[l],[d,p]=a[(l+1)%a.length];n.tri([e+u*r,t-.32,i+h*r],[e+d*r,t-.32,i+p*r],[e+o*r,t+s,i-.18*r],c[l])}}function Lu(n,[e,t,i],s,r){for(let o=0;o<4;o++){let a=r+o*1.67,c=.31+o*.11,l=e+Math.cos(a)*c,u=i+Math.sin(a)*c,h=s*(1-o*.15);n.form("hex",[l,t+h*.39,u],[h*.16,h*.82,h*.16],o%2?"#7ab8c2":"#ab83c2",[.06*o,a,.075*o]),n.form("cone",[l-h*.04*o,t+h*.86,u],[h*.19,h*.32,h*.19],o%2?"#b0e7db":"#e7c1ef",[.03*o,a,.06*o])}}function By(n,[e,t,i],s){n.form("box",[e,t+1,i],[5.2,2.1,5.2],"#939b91");for(let r of[-1.4,1.4])for(let o of[-1.5,1.5])n.form("box",[e+r,t+5.6,i+o],[.55,8,.6],"#737e7b");for(let r of[-1.5,1.5])Ht(n,[e-1.4,t+2,i+r],[e+1.4,t+8.3,i+r],.25,.28,"#b3a18a"),Ht(n,[e+1.4,t+2,i+r],[e-1.4,t+8.3,i+r],.25,.28,"#b3a18a");n.form("box",[e,t+9.6,i],[4.8,1.7,5.3],"#d3c7aa"),n.form("box",[e,t+9.9,i+2.68],[3.8,.67,.11],"#3f646c"),n.form("box",[e,t+10.6,i],[5.1,.25,5.6],"#975d49"),n.form("box",[e-s*1.5,t+12.1,i],[.12,3.1,.12],"#6b7a73"),n.form("stone",[e-s*1.5,t+13.6,i],[.37,.36,.37],"#f1b25d")}function tm(n,e,t,i,s){for(let r=0;r<Math.ceil((t-e)/5.4);r++){let o=Fn(e+(t-e)*s(),(s()-.5)*1.5,i);j.id==="glacier"?Pu(n,o,.65+s()*.75,.48,.24):j.id==="cavern"?Lu(n,o,.7+s()*.65,r):n.form("stone",o,[.53,.3,.86],j.id==="timber"?"#827d5b":"#b0aa8a",[.09,s()*3,.08])}}function Du(n,e,t){let i=j.id==="windreach"?141:176,s=t>0?32:58,r=Math.ceil((n-s)/i)*i+s;return r>=0&&r<e?r:null}function nm(n,e,t,i,s){let r=j.id;function o(a,c,l){let u=Ue(a,i);return Cn(a,(c<0?u.left:u.right)+c*l)}for(let a of[-1,1]){let c=i==="shared"||i==="gorge"&&a<0||i==="marsh"&&a>0,l=r==="timber"?5:r==="glacier"||r==="cavern"?9:15;for(let _=0;_<Math.ceil((t-e)/l);_++){let g=e+(t-e)*s();if(!c&&(g<ue+52||g>Xe-42))continue;let f=o(g,a,2.6+s()*16);if(f)if(r==="timber")Zo(n,s,f,5.2+s()*7,2);else if(r==="glacier")Pu(n,f,4.3+s()*8,1.7+s()*2.5,(s()-.5)*.9);else if(r==="cavern"){let v=4+s()*5.6;n.form("cone",[f[0],f[1]+v*.44,f[2]],[1.8,v,2.1],Ny(s,["#635b76","#7e7087","#716578"]),[0,s(),.04]),Lu(n,[f[0]-a*1.4,f[1],f[2]+1.3],1.6+s()*2.7,s()*5)}else if(r==="windreach"){n.form("stone",f,[1.5,.44,1.9],"#bdad80",[0,s()*4,0]);for(let v=0;v<5;v++)n.tri([f[0]+v*.19,f[1],f[2]],[f[0]+v*.19+.13,f[1],f[2]],[f[0]+v*.19+.6,f[1]+1.2,f[2]-.15],"#a8a464")}else n.form("box",[f[0],f[1]+.38,f[2]],[1.5,.83,3.1],r==="turbine"?"#96a69b":"#a1a79d",[0,.28,0])}if(!c)continue;let u=r==="windreach"||r==="turbine",h=r==="cavern"?78:r==="glacier"?125:r==="timber"?147:176,d=a>0?32:58,p=u?Du(e,t,a):null,m=u?p:Math.ceil((e-d)/h)*h+d;if(m!==null)for(let _=m;_<t;_+=h){if(_<0)continue;let g=o(_,a,r==="cavern"?3.7:7.3);if(g)if(r==="timber")Oy(n,g,a);else if(r==="windreach")n.form("trunk",[g[0],g[1]+5.6,g[2]],[.73,11.2,.73],"#eee4cb");else if(r==="turbine")n.form("trunk",[g[0],g[1]+2.2,g[2]],[1.15,4.4,1.15],"#707a70"),em(n,[g[0]+a*3.5,g[1],g[2]-1],4.3,4.6,5.1,"#a19075","#637c79");else if(r==="glacier")for(let f=0;f<3;f++)Pu(n,[g[0]+f*1.7*a,g[1],g[2]+f*.8],9+f*2.7,2.3+f*.5,a*.34);else r==="cavern"?(Lu(n,g,3.5+s()*2.4,_*.17),n.form("hex",[g[0]+a*2.1,g[1]+2.6,g[2]],[2,6.1,2.7],"#70627b",[.09,.5,.17*a])):By(n,g,a)}}}var Ny,Uu=pt(()=>{rn();$t();Vr();Wi();Ny=(n,e)=>e[Math.floor(n()*e.length)]});function im(n,e,t,i,s){let r=j.id==="turbine";for(let o of[-1,1]){if(s!=="shared"&&!(s==="gorge"&&o<0)&&!(s==="marsh"&&o>0))continue;let a=Du(t,i,o);if(a===null)continue;let c=Ue(a,s),l=Cn(a,(o<0?c.left:c.right)+o*7.3);if(!l)continue;let u=new Kn,h=r?3.6:5;if(r){let m=(_,g,f)=>[Math.cos(_)*g,Math.sin(_)*g,f];for(let _=0;_<12;_++){let g=_*Math.PI/6,f=(_+1)*Math.PI/6;Ht(u,m(g,h,0),m(f,h,0),.26,.96,"#78583b"),Ht(u,m(g,.29,.58),m(g,h,.58),.17,.17,"#b1925d"),u.form("box",m(g,h,0),[.35,.67,1.4],"#a67c4d",[0,0,g])}u.form("barrel",[0,0,.65],[.46,1.4,.46],"#536c69",[Math.PI/2,0,0])}else{u.form("stone",[0,0,.54],[.52,.53,.85],"#d7d6c1");for(let m=0;m<3;m++){let _=m*Math.PI*2/3,g=(f,v)=>[Math.sin(_)*f+Math.cos(_)*v,Math.cos(_)*f-Math.sin(_)*v,.79];u.quad(g(.28,-.14),g(1.5,.55),g(h,.17),g(h+.35,-.08),"#f8eed6"),u.tri(g(h-.8,-.03),g(h,.17),g(h+.35,-.08),"#bf795d")}}let d=u.mesh(),p=Math.sin(a*.04)*1.7;d.position.set(l[0],l[1]+(r?4.4:11.2),l[2]),e.add(d),n.push({mesh:d,phase:p,rate:r?.57:.82})}}var sm=pt(()=>{rn();$t();Vr();Wi();Uu()});function zy(n,[e,t,i]){n.form("box",[e,t+.28,i],[7,.56,6],"#aa8664");for(let r of[-2.7,2.7])for(let o of[-2.2,2.2])n.form("box",[e+r,t+1.94,i+o],[.27,3.4,.27],"#a25848");let s=[[e-4.3,t+4.06,i-3.7],[e+4.3,t+4.06,i-3.7],[e+4.3,t+4.06,i+3.7],[e-4.3,t+4.06,i+3.7]];for(let r=0;r<4;r++)n.tri(s[r],s[(r+1)%4],[e,t+6.4,i],r%2?"#446e65":"#578577");n.form("box",[e,t+1.05,i+2.22],[5.7,.13,.13],"#b97258")}function Hy(n,[e,t,i],s){let r=2.7+s()*2.8;n.form("trunk",[e,t+r*.47,i],[.27,r,.32],"#88755a",[0,0,.09]);for(let[o,a,c]of[[-1.1,.87,.26],[.95,1.03,-.45],[.1,1.3,.48]])n.form("crown",[e+o,t+r*a,i+c],[1.8,.88,1.55],a>1.2?"#eeb5bd":a>.95?"#e4a9af":"#a7b77c",[.1,s(),.1])}function Vy(n,[e,t,i]){n.form("box",[e,t+1.47,i],[5.6,2.94,5.2],"#b38968");for(let s of[-1,1])n.form("box",[e+s*1.62,t+3.61,i],[3.6,.22,6.3],"#516a65",[0,0,-s*.39]),n.form("box",[e+s*1.81,t+1.66,i+2.62],[1.1,1,.08],"#95c9bb");n.form("box",[e,t+1.02,i+2.65],[.97,2.04,.1],"#705849"),n.form("trunk",[e+2.3,t+3.7,i-1.5],[.35,3.5,.35],"#967e69")}function om(n,[e,t,i],s){let r=.7+s()*1.8,o=1.5+s()*1.15;n.form("hex",[e,t+r*.28,i],[o,r*.58,o*.85],"#b39161",[0,.3,0]),n.form("hex",[e,t+r*.65,i],[o*.82,r*.44,o*.7],"#dbc987",[0,.3,0]),n.form("hex",[e,t+r*.91,i],[o*.58,r*.18,o*.5],"#eee1a0",[0,.3,0]),n.form("barrel",[e,t+r*1.015,i],[o*.31,.08,o*.27],"#67c4af")}function rm(n,[e,t,i],s,r){let o=["#c75e56","#d59a60","#587e85"],a=o[r%3];n.form("box",[e,t+.23,i],[5,.46,4.8],"#997a64");for(let c of[-1.9,1.9])for(let l of[-1.8,1.8])n.form("box",[e+c,t+1.68,i+l],[.15,3.1,.15],"#6d5550");for(let c=0;c<5;c++)n.form("box",[e,t+3.24,i+(c-2)*1.02],[5.3,.28,1.02],c%2?"#e8c8a0":a,[0,0,.09*s]);n.form("box",[e-s*1.65,t+1.1,i],[.84,.7,3.9],"#ae6e51");for(let c of[-1.7,-.57,.57,1.7])n.form("barrel",[e-s*2.12,t+2.53,i+c],[.33,.65,.33],r%2?"#ffd290":"#f7a369"),n.form("box",[e-s*2.12,t+2.1,i+c],[.06,.22,.06],"#d69755")}function Al(n,[e,t,i],s,r,o){for(let[a,c,l,u]of[[0,.33,1,"#b96e50"],[.33,.46,.91,"#e2a16d"],[.46,.72,.8,"#b76b4c"],[.72,.87,.67,"#e2a272"],[.87,1,.59,"#cd875c"]])n.form("hex",[e,t+s*(c+a)/2,i],[r*l,s*(c-a),r*l*.73],u,[0,o,0])}function Gy(n,[e,t,i],s){n.form("box",[e,t+1.12,i],[4.9,2.24,4.4],"#c6c7b8"),n.form("box",[e,t+2.34,i],[5.2,.3,4.7],"#596f70");for(let a of[-1.3,1.3])for(let c of[-1.2,1.2])Ht(n,[e+a,t+2.47,i+c],[e+a*.55,t+7.2,i+c*.55],.2,.2,"#526e73");for(let a of[-1.15,1.15])Ht(n,[e-1.23,t+2.5,i+a],[e+.78,t+6.9,i+a*.6],.15,.16,"#a9b5aa");let r=[e,t+7.42,i],o=Array.from({length:12},(a,c)=>{let l=c*Math.PI/6;return[e+s*(1.04+.92*Math.cos(l)),t+8.45+2.6*Math.cos(l),i+2.95*Math.sin(l)]});for(let a=0;a<o.length;a++)n.tri(r,o[a],o[(a+1)%o.length],a%2?"#e0dfca":"#c1cdc6");Ht(n,r,[e+s*2.05,t+9.25,i],.13,.13,"#53696e"),n.form("stone",[e+s*2.05,t+9.25,i],[.21,.22,.21],"#e4a35c")}function Wy(n,[e,t,i],s){n.form("trunk",[e,t+2.2,i],[.1,4.4,.1],"#727d79"),Ht(n,[e-1.15,t+4.11,i],[e+1.15,t+4.11,i],.09,.09,"#a3afa7"),n.tri([e+s*.75,t+4.15,i],[e+s*1.65,t+4.57,i],[e+s*1.65,t+3.77,i],"#e39d61")}function am(n,e,t,i,s){let r=j.id;for(let o of[-1,1]){let a=(h,d)=>{let p=Ue(h,i);return Cn(h,(o<0?p.left:p.right)+o*d)},c=i==="shared"||i===(o<0?"gorge":"marsh");for(let h=Math.ceil(e/13)*13;h<t;h+=13){if(!c&&(h<ue+48||h>Xe-48))continue;let d=a(h,4+s()*10);if(!d)continue;let p=Math.floor(h/13);r==="lotus"?p%3?Hy(n,d,s):Si(n,s,d,1.6):r==="hotsprings"?om(n,d,s):r==="redrock"?Al(n,d,3+s()*7,2.2+s()*2.5,s()):r==="observatory"?p%5===0?Wy(n,d,o):n.form("stone",d,[1.8+s(),.8,1.9],"#788a86",[.2,s(),0]):p%3===0&&rm(n,d,o,Math.abs(p))}if(!c)continue;let l=r==="nightmarket"?80:r==="redrock"?98:132,u=o>0?39:66;for(let h=Math.ceil((e-u)/l)*l+u;h<t;h+=l){if(h<0)continue;let d=a(h,r==="redrock"?12:8);if(d)if(r==="lotus")zy(n,d);else if(r==="hotsprings")Vy(n,d);else if(r==="nightmarket"){rm(n,d,o,Math.round(h));let[p,m,_]=d;for(let g of[-4,4])n.form("box",[p+o*3,m+2.65,_+g],[.16,5.3,.16],"#735c58");for(let g=-2;g<=2;g++){let f=4.36+g*g*.11;n.form("barrel",[p+o*3,m+f,_+g*1.35],[.33,.56,.33],g%2?"#faad77":"#f8d692"),g<2&&Ht(n,[p+o*3,m+f+.35,_+g*1.35],[p+o*3,m+4.71+(g+1)**2*.11,_+(g+1)*1.35],.04,.04,"#665757")}}else r==="redrock"?(Al(n,d,12+s()*6,5+s()*2,s()),Al(n,[d[0]+o*6,d[1],d[2]+5],7+s()*4,3.8,s())):Gy(n,d,o)}}}function cm(n,e,t,i,s){for(let r=0;r<Math.ceil((t-e)/5.8);r++){let o=Fn(e+(t-e)*s(),(s()-.5)*1.5,i);j.id==="lotus"?Si(n,s,o,.8+s()*.6):j.id==="hotsprings"?om(n,o,s):j.id==="redrock"?Al(n,o,.8+s(),.7+s()*.5,s()):n.form("stone",o,[.74,.43,1.1],j.id==="observatory"?"#809690":"#b49c85",[.18,s()*3,0])}}var ky,Fu,lm=pt(()=>{rn();$t();Vr();Wi();ky=new Set(["lotus","hotsprings","nightmarket","redrock","observatory"]),Fu=ky.has(j.id)});function Vs(n,e,t,i,s=0){let r=Ue(n,e),o=(t<0?r.left:r.right)+t*i,a=Cn(n,o);if(!a)return null;if(s){for(let c of[-s,s])for(let l of[-s,s])if(!Cn(n+c,o+l))return null}return a}function Xy(n,[e,t,i]){n.form("barrel",[e,t+.44,i],[3.5,.9,3.5],"#a8a39a");for(let r=0;r<5;r++){let o=2.1-r*.18;n.form("barrel",[e,t+1.9+r*2.14,i],[o,2.18,o],r%2?"#bf5a4a":"#ede0b9")}let s=t+11.7;n.form("barrel",[e,s-.15,i],[1.98,.35,1.98],"#404e54"),n.form("barrel",[e,s+.75,i],[1.13,1.55,1.13],"#ffdf94");for(let r of[0,1.57,3.14,4.71])n.form("box",[e+1.06*Math.cos(r),s+.76,i+1.06*Math.sin(r)],[.16,1.67,.16],"#48565b");n.form("cone",[e,s+2.01,i],[1.79,1.17,1.79],"#ae5141")}function qy(n,[e,t,i],s){let r="#b87540",o="#e4a851",a="#586467";for(let d of[-1,1])for(let p of[-1,1])n.form("box",[e+d*2,t+3.8,i+p*2.9],[.48,7.6,.55],r),Ht(n,[e+d*2,t+.3,i+p*2.9],[e+d*2,t+7.4,i-p*2.9],.17,.19,o);n.form("box",[e,t+7.7,i],[5,.75,6.7],a),n.form("box",[e+s*1.1,t+9,i+1.55],[2.7,2.1,2.85],o),n.form("box",[e+s*1.1,t+9.3,i+3.01],[2.06,.82,.07],a);let c=[e,t+8.2,i],l=[e,t+13.5,i+.6],u=[e-s*1.6,t+12.5,i-9.2];Ht(n,c,l,.52,.52,r),Ht(n,c,u,.48,.53,o),Ht(n,l,u,.22,.24,o);for(let d=1;d<6;d++){let p=d/6,m=(d-1)/6;Ht(n,c.map((_,g)=>_+(u[g]-_)*m),l.map((_,g)=>_+(u[g]-_)*p),.15,.15,r)}let h=[u[0],t+6,u[2]];Ht(n,u,h,.09,.09,a),n.form("box",h,[1.35,.36,.4],a)}function Yy(n,[e,t,i],s){let r=["#b9644c","#577b83","#d5ac63","#708b78"];for(let o=0;o<3;o++){let a=e+(o===1?3.35:0),c=t+1.16+(o===2?2.34:0);n.form("box",[a,c,i],[3.14,2.27,6.05],r[(s+o)%r.length]);for(let l of[-1,1])for(let u=-2;u<=2;u++)n.form("box",[a+l*1.59,c,i+u*1.1],[.08,2.1,.095],r[(s+o+1)%r.length]);n.form("box",[a,c,i+3.045],[.06,2.05,.04],"#646d69")}}function Zy(n,e,t,i,s){for(let o=Math.ceil(e/16)*16;o<t;o+=16){let a=Vs(o,i,s,.68),c=Vs(o+13,i,s,.68);!a||!c||(Ht(n,[a[0],a[1]+.13,a[2]],[c[0],c[1]+.13,c[2]],.45,.5,"#bcc0ae"),n.form("barrel",[a[0],a[1]+.4,a[2]],[.22,.78,.22],"#5d7371"))}let r=i==="shared"?72:112;for(let o=Math.ceil((e-31)/r)*r+31;o<t;o+=r){if(o<0)continue;let a=Math.round((o-31)/r),c=Vs(o,i,s,s>0?9:12,4.5);c&&(i==="shared"&&s>0&&(a%4===0||o>j.length-75)?Xy(n,c):(a+(s>0?1:0))%3===0?qy(n,c,s):Yy(n,c,a%4))}}function Jy(n,e,t,i,s){let r=4+Math.floor(e()*4),o=4.3+e()*9,a=4+e()*7;for(let c=0;c<r;c++){let l=t+(e()-.5)*8,u=Vs(l,i,s,a+(e()-.5)*5,1.1);if(!u)continue;let h=o*(.43+e()*.68),d=.8+e()*.83;n.form("hex",[u[0],u[1]+h*.47,u[2]],[d,h,d],hm[c%5],[0,.51,0]),n.form("hex",[u[0],u[1]+h*.97,u[2]],[d*.97,.13,d*.97],c%3?"#808c88":"#a1ae8a",[0,.51,0])}}function Ky(n,e,t,i){let s=[11.5,7.4,4.1,1.8,.05],r=s.length-1;for(let o=0;o<r;o++){let a=[[e-2.6,s[o]],[e+2.6,s[o]],[e+2.6,s[o+1]],[e-2.6,s[o+1]]].map(([d,p])=>Vs(d,t,i,p));if(a.some(d=>!d))return;for(let d of a)d[1]+=.23;n.quad(...a,o===r-1?"#dcebdc":"#82bfc5");let[c,l,u,h]=a;for(let d of[.18,.51,.8]){let p=(m,_,g)=>m.map((f,v)=>f+(_[v]-f)*g+(v===1?.035:0));n.quad(p(c,l,d),p(c,l,d+.035),p(h,u,d+.037),p(h,u,d),"#d6ebe4")}}}function $y(n,[e,t,i],s){n.form("trunk",[e,t+2.9,i],[1.8,5.8,1.8],"#ad9368"),n.form("cone",[e,t+6.15,i],[1.88,1.31,1.88],"#6e6653"),n.form("box",[e,t+1.13,i+1.54],[.82,2.05,.16],"#695e49");let r=[e,t+5.64,i+1.72],o=(a,c,l)=>[e+Math.sin(l)*a+Math.cos(l)*c,r[1]+Math.cos(l)*a-Math.sin(l)*c,r[2]+.24];for(let a=0;a<4;a++){let c=s+a*Math.PI/2;Ht(n,r,o(4.7,0,c),.15,.15,"#735c43"),n.quad(o(1.7,0,c),o(4.62,0,c),o(4.5,1,c),o(1.92,.59,c),"#f0dfb0");for(let l of[2.35,3.3,4.15])Ht(n,o(l,0,c),o(l,.77,c),.058,.09,"#a78a5d")}n.form("stone",[e,r[1],r[2]+.4],[.36,.36,.23],"#ad7850")}function jy(n,[e,t,i]){for(let s of[-1,1])for(let r of[-1,1])n.form("trunk",[e+s*1.7,t+.72,i+r*2],[.16,1.48,.16],"#866d4c");n.form("box",[e,t+1.46,i],[4.35,.22,5.1],"#92784d"),n.form("box",[e,t+2.35,i],[3.48,1.65,4.12],"#bca16e"),n.form("box",[e,t+2.45,i+2.07],[1.35,.78,.055],"#5b685b");for(let s of[-1,1])n.quad([e+s*2.34,t+3,i-2.68],[e,t+4.55,i-2.68],[e,t+4.55,i+2.68],[e+s*2.34,t+3,i+2.68],"#807957"),n.tri([e-1.77,t+3,i+s*2.07],[e+1.77,t+3,i+s*2.07],[e,t+4.24,i+s*2.07],"#c1ae82")}function um(n,e,[t,i,s],r){for(let o=0;o<7;o++){let a=t+(e()-.5)*2*r,c=s+(e()-.5)*2*r,l=(.7+e()*.95)*r,u=.25*r;n.tri([a-.07,i-.05,c],[a+.07,i-.05,c],[a+u,i+l,c+.12],o%2?"#b3a15d":"#919650"),o%2===0&&n.form("cone",[a+u,i+l,c+.12],[.11*r,.52*r,.11*r],"#ccb078",[.09,0,-.25])}}function dm(n,e,t,i,s){if(Fu){cm(n,e,t,i,s);return}if(j.reaches){tm(n,e,t,i,s);return}for(let r=0;r<Math.ceil((t-e)/3.1);r++){let o=e+(t-e)*s(),a=Fn(o,(s()-.5)*1.7,i);if(j.id==="delta")um(n,s,a,.8+s()*.47);else if(j.id==="basalt"){let c=.4+s()*.86;n.form("hex",[a[0],a[1]+.26*c,a[2]],[.58,c,.58],hm[r%5],[0,.51,0])}else n.form("stone",a,[.74,.45,.84],r%2?"#aca498":"#9c9e91",[.12,s()*4,.17])}}function fm(n,e,t,i,s){if(Fu){am(n,e,t,i,s);return}if(j.reaches){nm(n,e,t,i,s);return}for(let r of[-1,1]){if(j.id==="harbor"){Zy(n,e,t,i,r);continue}let o=i==="shared"||i==="gorge"&&r<0||i==="marsh"&&r>0,a=Math.ceil((t-e)/(j.id==="delta"?3.6:10));for(let c=0;c<a;c++){let l=e+(t-e)*s();if(!(!o&&(l<ue+35||l>Xe-30)))if(j.id==="basalt")Jy(n,s,l,i,r);else{let u=Vs(l,i,r,.7+s()*4.8);u&&um(n,s,u,1.05+s()*.71)}}if(o)if(j.id==="basalt")for(let c=Math.ceil((e-37)/154)*154+37;c<t;c+=154)c>=0&&r<0&&Ky(n,c,i,r);else{let c=r>0?167:139,l=r>0?34:22;for(let u=Math.ceil((e-l)/c)*c+l;u<t;u+=c){let h=Vs(u,i,r,7.3,3.3);u<0||!h||(r>0?$y(n,h,.4+.47*Math.sin(u*.02)):jy(n,h))}}}}var hm,pm=pt(()=>{Uu();lm();rn();$t();Wi();Vr();hm=["#454c58","#596372","#68737b","#515e66","#78837e"]});function gm(n,e,t,i,s,r){let[o,a,c]=t,l=7,u=e()*.8,h=Array.from({length:l},()=>.8+e()*.28),d=[[0,1.08],[.28,1],[.32,1.02],[.63,.89],[.72,.91],[.95,.72],[1,.58]].map(([m,_])=>h.map((g,f)=>{let v=u+f*2*Math.PI/l;return[o+Math.cos(v)*i*_*g+s*.052*m,a+s*m,c+Math.sin(v)*r*_*g]})),p=["#a2735c","#c69a77","#b58568","#ca9c77","#b78969","#c59b75"];for(let m=0;m<d.length-1;m++)for(let _=0;_<l;_++){let g=(_+1)%l;n.quad(d[m][_],d[m][g],d[m+1][g],d[m+1][_],p[m])}for(let m=0;m<l;m++)n.tri([o+s*.052,a+s,c],d.at(-1)[m],d.at(-1)[(m+1)%l],"#b7a377")}function Qy(n,e,t,i,s,r,o=.1){n.form("trunk",Rn(e,t,s*.47,i),[o,s,o],r)}function Gr(n,e,t,i,s,r,o,a,c){n.form("box",Rn(e,t,s,i),[r,o,a],c,[0,-cn(e,i),0])}function e2(n,e,t,i,s,r){let o=Math.ceil(s/.68);for(let a=0;a<o;a++)Gr(n,e+a*s/o,t,i,.76,r,.17,s/o-.035,a%3?"#bd9764":"#ae8959")}function mm(n,e,t,i,s){let r=Cn(e,t);if(!r)return;let[o,a,c]=r,l=s?6.3:4.4,u=s?3.6:2.4,h=s?8:5.6,d=a+.22;n.form("box",[o,d+u/2,c],[l,u,h],s?"#b9b69d":"#a88d62");let p=d+u,m=p+(s?1.7:1.5),_=l/2+.4,g=h/2+.45;for(let f of[-1,1])n.quad([o+f*_,p,c-g],[o,m,c-g],[o,m,c+g],[o+f*_,p,c+g],s?"#50716f":"#827b58"),n.tri([o-_,p,c+f*g],[o+_,p,c+f*g],[o,m,c+f*g],"#a99c79");for(let f of[-1,1])for(let v of[-.25,.25])n.form("box",[o+f*(l*.5+.015),d+u*.56,c+v*h],[.045,u*.4,h*.23],s?"#4e6b69":"#665c45");s&&(n.form("trunk",[o+l*.32,p+2,c-h*.3],[.36,5,.36],"#956f58"),n.form("barrel",[o+l*.32,p+4.2,c-h*.3],[.4,.34,.4],"#c9bc9b"))}function t2(n,e){for(let t of e.parts)n.form("box",t.center.toArray(),t.size,t.color,[0,0,t.angle])}function n2(n,e,t){let{s:i,u:s,radius:r,height:o,side:a,kind:c,feature:l}=e,u=(h,d,p=i)=>Rn(p,s+h+tt(p,t)-tt(i,t),d,t);if(c==="gate"){let h=t==="canal"?"#397e80":"#388985";n.form("barrel",u(0,.3),[r,2*(Gi.top-.3),r],"#f4dfaa"),n.form("box",u(0,1.3),[.37,2.45,.47],h);for(let d of[1.45,1.83])n.form("box",u(0,d),[.4,.15,.5],"#f3cf8d");n.form("box",u(0,o-.115),[.49,.23,.56],"#cdf3c9"),t==="canal"&&(Ht(n,u(0,2.28),u(-a*.8,3.06),.19,.24,h),n.form("box",u(-a*.8,3.06),[.37,.36,.35],"#3a5d59"),n.form("stone",u(-a*.8,3.07,i-.2),[.14,.15,.065],"#a7db9f"))}else if(c==="flag"){let h=Or[t].find(p=>p.approach===l.start),d=h&&a===(h.side==="right"?1:-1);Ht(n,u(0,0),u(0,o),r*2,r*2,"#695f4b"),n.tri(u(0,o+.04),u(a*.79,o-.22),u(0,o-.47),d?"#eab34e":"#e8773b")}else if(c==="buoy"){let h=r/.32;n.form("barrel",Rn(i,s,.15*h,t),[r,.34*h,r],"#ede4bc"),n.form("cone",Rn(i,s,.48*h,t),[.3*h,.48*h,.3*h],t==="gorge"?"#d27e43":"#d77143")}else{let h=c==="quay"?l2(i):c==="stake"?"#92764d":c==="launch"?"#7a634a":"#795e47";Qy(n,i,s,t,o,h,r),c==="stake"&&Gr(n,i,s,t,1.21,.19,.28,.12,"#e5dfac"),c==="launch"&&Gr(n,i,s,t,.74,.25,.16,.25,"#e3783d")}}function i2(n,e){let t=e.vertices,i=t.at(-1);for(let s=0;s<e.count;s++){let r=(s+1)%e.count;for(let o=0;o<t.length-1;o++)n.quad(t[o][s],t[o][r],t[o+1][r],t[o+1][s],e.color);n.tri([e.x,e.base+e.height,-e.s],i[s],i[r],Ap)}}function s2(n,e,t){let i=(l,u,h)=>Rn(l,tt(l,t)+u,h,t),s=e.width/2,r=(l,u,h=.044)=>i(l,e.offset+u,li(e,l)+h);if(e.kind==="gate"){for(let l=0;l<3;l++)for(let u of[-1,1]){let h=e.start-4+l*1.45;n.quad(i(h,e.offset,.078),i(h-.8,e.offset+u*s*.7,.078),i(h-1.1,e.offset+u*s*.7,.078),i(h-.32,e.offset,.078),"#f9e5aa")}return}if(e.kind==="ledge"){for(let l=-3;l<=3;l++){let u=l*s*.24;n.quad(r(e.end-.9,u-.085,.07),r(e.end,u-.12,.07),i(e.end+2.32,e.offset+u,.13),i(e.end+1.1,e.offset+u+.16,.32),"#dfefe1")}return}let o=Math.ceil((e.end-e.start)/.86),a=(e.end-e.start)/o;for(let l=0;l<o;l++){let u=e.start+l*a;n.quad(r(u,-s),r(u,s),r(u+a-.023,s),r(u+a-.023,-s),e.boosted?l%3?"#dc8042":"#e9954a":l%2?"#bf995f":"#cbab72");for(let h of[-1,1])n.quad(r(u,h*s),r(u+a,h*s),i(u+a,e.offset+h*s,.02),i(u,e.offset+h*s,.02),"#967449");if(l%3===1)for(let h of[-1,1])n.quad(r(u+.7,0,.084),r(u,h*s*.74,.084),r(u-.25,h*s*.74,.084),r(u+.4,0,.084),"#f5e4b2")}if(!e.boosted){let l=e.start+.22;n.quad(r(l,-s,.06),r(l,s,.06),r(l+.54,s,.06),r(l+.54,-s,.06),"#e78942")}let c=Or[t].find(l=>l.approach===e.start);if(c){let l=c.side==="right"?1:-1,u=l*(s-.82),h=l*(s-.14),d=e.start+.62;n.quad(r(d,u,.095),r(d,h,.095),r(d+3.4,h,.095),r(d+3.4,u,.095),"#353e35");for(let p=0;p<3;p++){let m=d+.13+p*1.02;n.quad(r(m,u,.108),r(m+.32,h,.108),r(m+.81,h,.108),r(m+.49,u,.108),"#efbb58")}}}function r2(n){let e=bn(87314);for(let[t,i,s,r]of[[-1,49,4,11],[-1,62.5,4.5,17],[-1,69,4,10],[1,59,5,12],[1,69,3,17]])for(let o=0;o<r;o++){let a=i+ue-72+(e()+e()-1)*s,c=Fs(a,t)+(e()-.5)*2.3,l=.1+e()*.18;n.form("stone",Rn(a,c,.009),[l,.02,l*(.95+e()*.58)],cs(e,["#8baea0","#91b4a6","#9ab9a8"]),[0,e()*6,0])}}function o2(n){let e=bn(3926);function t(r,o,a){let c=Ue(r,Ft[o]).right,l=Ue(r,Ft[o+1]).left,u=c+(l-c)*a;return{p:Cn(r,u),width:l-c}}for(let[r,o,a,c,l]of[[79,.47,.5,.4,.76],[82,.53,.83,.71,1.32],[85.5,.43,1.25,1.32,1.8],[88,.7,.83,.84,1.4],[92,.27,1.26,.82,2.1],[97,.6,1.32,.72,1.7]]){let{p:u,width:h}=t(r,0,o);u[1]-=c*.2,n.form("stone",u,[Math.min(a,h*.38),c,l],cs(e,["#aa8e73","#9a8978","#b89a79"]),[.12,e()*.8,.08])}let i=t(93.5,0,.49).p;i[1]-=.17,Zo(n,e,i,3.7,2);for(let r=0;r<28;r++){let o=79+e()*21,{p:a,width:c}=t(o,1,.23+e()*.54);Si(n,e,a,Math.min(.6+e()*.45,c*.36))}let s=t(92,1,.54).p;s[1]-=.17,Ru(n,e,s,3.7)}function a2(n,e,t,i,s){let r=t-e,o=()=>e+s()*r;for(let a of[-1,1]){let c=Math.ceil(r/(i==="marsh"?4.5:8));for(let l=0;l<c;l++){let u=o(),h=Ue(u,i),d=a<0?h.left:h.right,p=2.1+s()*(i==="marsh"?17:26),m=d+a*p,_=Cn(u,m);if(_&&!(u>=ue&&u<ue+40&&(p<10||m>Ue(u,"gorge").right&&m<Ue(u,"marsh").left)))if(_[1]-=.27,i==="gorge"&&l%3!==2){let g=3.6+s()*8.7;gm(n,s,_,2+s()*2.2,g,3+s()*3.6)}else i==="marsh"&&l%5===0?Ru(n,s,_,3.7+s()*2.8):Zo(n,s,_,3.2+s()*5.6,i==="gorge"||l%5===2?2:1)}for(let l=0;l<Math.ceil(r/(i==="marsh"?1.8:3.6));l++){let u=o(),h=Ue(u,i),d=a<0?h.left:h.right,p=d-a*s()*1.05;if(i==="marsh"||i==="shared"&&s()<.4)Si(n,s,Rn(u,p,.04,i),.7+s()*.47);else{let m=.28+s()*(i==="gorge"?1.06:.46);n.form("stone",Rn(u,p,.03,i),[m*1.35,m*.55,m*.86],cs(s,i==="gorge"?["#af947a","#ad886f","#b9a38a"]:["#9ea58f","#acaf96"]),[.12,s()*5,.14])}}if(i==="canal")for(let l=Math.ceil(e/12)*12;l<t;l+=12){if(l<ue+23)continue;let u=p=>{let m=Ue(p,i);return a<0?m.left:m.right},h=u(l),d=u(l+8);Ht(n,Rn(l,h,.37,i),Rn(l+8,d,.37,i),.45,.59,"#9ca496")}}}function c2(n,e,t,i,s){let r=c=>c>=e&&c<t,o=t-e,a=()=>e+s()*o;Jt?fm(n,e,t,i,s):a2(n,e,t,i,s);for(let c of hl[i]){let l=Math.max(e,c[0]),u=Math.min(t,c[1]);if(l>=u)continue;let h=Math.ceil((u-l)/1.6);for(let d=0;d<h;d++){let p=l+(u-l)*d/h,m=l+(u-l)*(d+1)/h;for(let _ of[-1,-.5,0,.5])n.quad(Fn(p,_,i),Fn(m,_,i),Fn(m,_+.5,i),Fn(p,_+.5,i),Jt?cs(s,Jt.island):i==="gorge"?cs(s,["#b59072","#ba9778"]):i==="marsh"?cs(s,["#bab67e","#acb37c"]):i==="shared"?cs(s,Math.abs(_+.25)>.5?["#dbcca1","#d0bc94"]:["#c1b78a","#bfb486"]):"#afa68a")}if(Jt){dm(n,l,u,i,s);continue}for(let d=0;d<Math.max(1,Math.ceil((u-l)/2));d++){let p=l+(u-l)*s(),m=Fn(p,s()*1.6-.8,i);i==="shared"?c[2]>0&&p>c[0]+2?Si(n,s,m,.63+s()*.23):n.form("stone",m,[.45+s()*.37,.3+s()*.23,.59+s()*.33],"#9f9e87",[.09,s()*4,.12]):i==="marsh"?Si(n,s,m,.7+s()*.45):n.form("stone",m,[.75,.57,.9],i==="gorge"?"#a18069":"#9caa96",[.12,s()*4,.19])}if(i==="shared"&&c[2]>0){let d=c[0]+(c[1]-c[0])*.66;r(d)&&Si(n,s,Fn(d,.12,i),.94)}if(i==="marsh")for(let d=l+.4;d<u;d+=2.4)for(let p of[-1,1]){let m=Fn(d,p*(.63+s()*.21),i);Si(n,s,m,1.05+s()*.46)}}for(let c of Zn[i])r(c.start)&&s2(n,c,i);for(let c of bl[i])r(c.s)&&i2(n,c);for(let c of Or[i])r(c.s)&&t2(n,c);for(let c of Ml[i])r(c.s)&&n2(n,c,i);for(let c of yl[i]||[])r(c.s)&&e2(n,c.s,c.u,i,c.length,c.width);if(!Jt&&i==="gorge"){for(let c of[137,355,573,859,1061,1213])if(r(c)){let l=tt(c,i);for(let u of[-1,1]){let h=Cn(c,l+u*(Ue(c,i).half+3.4));h&&gm(n,s,h,3.8,13+6*s(),5.5)}}}else if(!Jt&&i==="canal"){for(let c of[132,368,581,831,1062,1223])if(r(c)){let l=Ue(c,i);mm(n,c,l.right+5.5,i,!0);let u=Cn(c+9,l.right+7.7);if(u){let[h,d,p]=u;for(let m of[-1.3,1.3])for(let _ of[-1.3,1.3])n.form("box",[h+m,d+2.7,p+_],[.2,5.7,.2],"#607a75");n.form("barrel",[h,d+6.3,p],[2.35,2.5,2.35],"#729a9b"),n.form("cone",[h,d+8,p],[2.55,1.1,2.55],"#ab7759")}}}else if(!Jt&&i==="marsh"){for(let{s:c}of yl.marsh)if(r(c)){let l=Ue(c,i);mm(n,c+3,l.right+4.9,i,!1);let u=l.right-2.8;n.form("stone",Rn(c+3,u,.18,i),[.58,.25,2.12],"#ad8153",[0,-cn(c,i),0]);for(let h of[2.35,3.65])Gr(n,c+h,u,i,.34,.79,.09,.27,"#d8b47b")}for(let c=0;c<Math.ceil(o/2.4);c++){let l=a(),u=tt(l,i),h=s()>.5?1:-1,d=u+h*(Ue(l,i).half*(.51+s()*.43)),p=Jn(l,i);if(p&&d>p.left&&d<p.right)continue;let m=.2+s()*.39;n.form("barrel",Rn(l,d,.023,i),[m,.035,m*.83],cs(s,["#8d9d5b","#91a56a","#869e64"]),[0,s()*6,0]),c%7===0&&n.form("stone",Rn(l,d,.086,i),[.13,.075,.13],"#ead5b4")}}if(i==="shared"&&r(0))for(let c=0;c<9;c++)Gr(n,-4+c*.4,0,i,.105,2.65,.18,.37,c%2?"#ae865a":"#bc9568");if(i==="shared"&&r(Pt))for(let c=0;c<30;c++)for(let l=0;l<2;l++)Gr(n,Pt,(c-14.5)*.88,i,3.9-l*.37,.89,.37,.12,(c+l)%2?"#264a45":"#f5e9c8")}function l2(n){return Math.round(n/12)%2?"#e0ac6c":"#6f8d89"}function Nu(n,e){return n>=0&&n<ue&&e!=="shared"?Us(n,e):Ns(n,e)}function h2(n){let e=new _t;e.setAttribute("position",new Ge([-.5,0,.6,-.1,0,-.64,.5,0,-.43,-.5,0,.6,.5,0,-.43,.05,0,.45],3));let t=new Es(e,new nn({color:"#ccede0",transparent:!0,opacity:.72,depthWrite:!1,side:zt}),600);t.frustumCulled=!1,t.instanceMatrix.setUsage(Rs),n.add(t);let i=new en,s=Array.from({length:31},(r,o)=>{let a=bn(2971+o*571);return Array.from({length:12},()=>[a(),a(),a(),a()])});return(r,o,a)=>{let c=0;for(let l=Math.floor((o-11)/7);l<=Math.ceil((o+126)/7);l++){let u=s[(l%31+31)%31];for(let h=0;h<u.length;h++){let[d,p,m,_]=u[h],g=(r*(.48+m*.23)+p)%1,f=l*7+d*6.4+g*1.9,v=f>=ue&&f<Xe?a?[a]:Ft:["shared"];for(let b of v){if(c>=600)break;let M=b==="shared"&&f>=0&&f<ue,A=Ue(f,b),S=h<(M?10:8),T=M?h<4?"gorge":h<6?"canal":"marsh":b,C=S?Nu(f,T)+(p-.5)*(M?2.35:b==="marsh"?5:3.7):A.center+(p-.5)*A.half*1.75,y=Jn(f,b);if(y&&C>y.left&&C<y.right)continue;let x=at(f,C),R=Math.max(.03,Math.sin(g*Math.PI));i.position.set(x.x,He(f,b)+Fr(f,C,b)+.05,x.z);let D=S&&f>=0&&f<ue+40?Math.atan((at(f+.4,Nu(f+.4,T)).x-at(f-.4,Nu(f-.4,T)).x)/.8):cn(f,b);i.rotation.y=-D+(S?.04:1.15),i.scale.set((S?M?.18:.14:.09)*R,1,(S?1.1+_*1.65:.46+_*.65)*(.5+.5*R)),i.updateMatrix(),t.setMatrixAt(c++,i.matrix)}}}t.count=c,t.instanceMatrix.needsUpdate=!0}}function _m(n){let e=jp(),t=h2(n),i=[],s=[-60,0,ue];for(let a=ue+64;a<Xe;a+=64)s.push(a);for(let a=Xe;a<Pt;a+=64)s.push(a);for(let a=Pt;a<=Pt+192;a+=64)s.push(a);for(let a=0;a<s.length-1;a++)i.push({lo:s[a],hi:s[a+1],group:null,index:a});function r(a){let{lo:c,hi:l,index:u}=a,h=c>=ue&&c<Xe?Ft:["shared"];a.rotors=[];let d=new pn,p=new Kn;$p(p,c,l,h,bn(1931+j.seed+u*1957)),c===0&&r2(p),c===ue&&!Jt&&o2(p);for(let m of h){let _=new Kn;c2(_,c,l,m,bn(7401+j.seed+u*1049+(Ft.indexOf(m)+1)*317)),d.add(_.mesh()),(j.id==="turbine"||j.id==="windreach")&&im(a.rotors,d,c,l,m)}d.add(Qp(c,l,h,e.material),p.mesh()),a.group=d,n.add(d)}function o(a){n.remove(a.group),a.group.traverse(c=>{c.isMesh&&(c.geometry.dispose(),c.material!==e.material&&c.material.dispose())}),a.group=null,a.rotors=null}return(a,c=0,l="")=>{e.clock.value=a;for(let u of i){let h=u.hi>=c-39&&u.lo<=c+220;if(h&&!u.group&&r(u),h)for(let d of u.rotors)d.mesh.rotation.z=d.phase+a*d.rate;u.group&&(u.group.visible=h,!h&&(u.hi<c-165||u.lo>c+340)&&o(u))}t(a,c,l)}}var cs,xm=pt(()=>{rn();la();sm();pm();ci();Wi();Mu();xl();Sl();Vr();$t();cs=(n,e)=>e[Math.floor(n()*e.length)]});function u2(n,e,t,i){if(!n.length)return n;let s=[],r=n.at(-1),o=(r[e]-t)*i;for(let a of n){let c=(a[e]-t)*i;o<0!=c<0&&s.push(r.clone().lerp(a,o/(o-c))),c>=0&&s.push(a),r=a,o=c}return s}function d2(n,e){let t=e==="z"?["x","y"]:["y","z"],[i,s]=t,r=new Map;for(let l of n)r.set(Math.round(l[i]*1e5)+","+Math.round(l[s]*1e5),l);let o=[...r.values()].sort((l,u)=>l[i]-u[i]||l[s]-u[s]);if(o.length<3)return[];let a=(l,u,h)=>(u[i]-l[i])*(h[s]-l[s])-(u[s]-l[s])*(h[i]-l[i]);function c(l){let u=[];for(let h of l){for(;u.length>=2&&a(u.at(-2),u.at(-1),h)<=1e-9;)u.pop();u.push(h)}return u.pop(),u}return[...c(o),...c([...o].reverse())]}function f2(n,e){let t=new St().copy(n.matrixWorld).invert(),i=[],s=new Pe(e<=3?"#be9563":"#b5ab91");for(let[o,a]of[[null,-.56],[-.56,.58],[.58,null]])for(let c of[-1,1]){let l=[["x",.025,c]];o!==null&&l.push(["z",o,1]),a!==null&&l.push(["z",a,-1]),i.push({planes:l,edges:l.map(()=>[]),vertices:[],colors:[]})}function r(o,a,c){for(let l=1;l+1<a.length;l++)for(let u of[a[0],a[l],a[l+1]])o.vertices.push(u),o.colors.push(c.r,c.g,c.b)}return n.traverse(o=>{if(!o.isMesh)return;let a=o.geometry,c=a.attributes.position,l=a.attributes.color,u=a.index,h=new St().multiplyMatrices(t,o.matrixWorld),d=m=>new N().fromBufferAttribute(c,u?u.getX(m):m).applyMatrix4(h),p=new Pe;for(let m=0;m<(u?u.count:c.count);m+=3){let _=[d(m),d(m+1),d(m+2)],g=u?u.getX(m):m;l&&p.setRGB(l.getX(g),l.getY(g),l.getZ(g));for(let f of i){let v=_;for(let[b,M,A]of f.planes)if(v=u2(v,b,M,A),!v.length)break;v.length<3||(r(f,v,p),f.planes.forEach(([b,M],A)=>{for(let S of v)Math.abs(S[b]-M)<1e-6&&f.edges[A].push(S)}))}}}),i.filter(o=>o.vertices.length).map(o=>{o.planes.forEach(([u],h)=>r(o,d2(o.edges[h],u),s));let a=new N;for(let u of o.vertices)a.add(u);a.multiplyScalar(1/o.vertices.length);let c=[];for(let u of o.vertices)c.push(u.x-a.x,u.y-a.y,u.z-a.z);let l=new _t;return l.setAttribute("position",new Ge(c,3)),l.setAttribute("color",new Ge(o.colors,3)),l.computeVertexNormals(),{geometry:l,center:a}})}function ym(n){let e=new Ni({vertexColors:!0,side:zt,flatShading:!0}),t=new Mt(new Fi(.8,1,23),new nn({color:"#e2f2df",transparent:!0,depthWrite:!1,side:zt}));t.rotation.x=-Math.PI/2,t.visible=!1,n.add(t);let i=null,s=[],r=0,o=null;function a(){for(let u of s)n.remove(u.mesh),u.mesh.geometry.dispose();s=[],i=null,o=null,t.visible=!1}function c(u,h){a(),i=h.crash,r=0,u.updateMatrixWorld(!0);let d=bn(Math.round(h.s*10)+h.level*197),p=new N(1,0,0).applyQuaternion(u.quaternion).setY(0).normalize(),m=new N(0,0,1).applyQuaternion(u.quaternion).setY(0).normalize(),_=Math.min(1.72,.65+h.crash.speed/34),g=f2(u,h.level);for(let f=0;f<7;f++){let v=new Ao(1);v.scale(.05+d()*.045,.06+d()*.07,.12+d()*.17);let b=new Pe(h.level<=3?"#c5a579":f%2?"#e98646":"#ead3a0"),M=[];for(let A=0;A<v.attributes.position.count;A++)M.push(b.r,b.g,b.b);v.setAttribute("color",new Ge(M,3)),g.push({geometry:v,center:new N((d()-.5)*.85,.34,d()-.51),chip:!0})}for(let f of g){let v=new Mt(f.geometry,e),b=u.localToWorld(f.center.clone());v.position.copy(b),v.quaternion.copy(u.quaternion),v.scale.copy(u.scale);let M=p.clone().multiplyScalar((f.center.x>=0?1:-1)*(1+1.45*d())*_*(f.chip?1.65:1));M.addScaledVector(m,(.2+.77*d())*_),M.y=(f.chip?-.45:-1.35)+d()*2.5,s.push({mesh:v,origin:b,velocity:M,initial:v.quaternion.clone(),spin:new N(d()-.5,d()-.5,d()-.5).normalize(),rate:(1.2+2.1*d())*_}),n.add(v)}}function l(u,h,d,p){if(!d.crash){i&&a();return}if(i!==d.crash&&c(h,d),!(r>=1.85)){r=p?Math.max(r,.34):Math.min(1.85,r+u);for(let m of s){let{mesh:_,origin:g,velocity:f}=m,v=r,b=He(-g.z,Wt(-g.z,d.route))+.055,M=(f.y+Math.sqrt(f.y**2+26*Math.max(0,g.y-b)))/13,A=Math.min(v,M)+.22*(1-Math.exp(-3*Math.max(0,v-M)));_.position.set(g.x+f.x*A,g.y+f.y*v-6.5*v*v,g.z+f.z*A);let S=He(-_.position.z,Wt(-_.position.z,d.route))+.055;_.position.y<=S&&(_.position.y=S,o||(o={point:_.position.clone(),time:r})),_.quaternion.copy(m.initial),_.rotateOnWorldAxis(m.spin,m.rate*A)}if(o&&!p){let m=r-o.time;t.visible=m<.68,t.position.copy(o.point),t.position.y+=.025,t.scale.setScalar(.38+m*3.8),t.material.opacity=.65*Math.max(0,1-m/.68)}p&&(r=1.85)}}return l}var vm,Ou=pt(()=>{ci();$t();Wi();vm=.86});function Mm(n){let e=[],t=[],i=[],s=bn(51473),r=["#fff5d9","#e8fff5","#26464a"].map(u=>new Pe(u));for(let u=0;u<4;u++){let h=u<2,d=h?17:11,p=u%2===0?-1:1;for(let m=0;m<d;m++){let _=2*(m+.12+.76*s())/d-1,g=s(),f=s(),v=s(),b=(m+u)%4===0?-.08:.08+.71*s(),M=s(),A=r[M<.2?2:M<.58?1:0];for(let S of[0,-1,1])e.push(h?p:_,h?_:p,S),t.push(g,f,b,v),i.push(A.r,A.g,A.b)}}let o=new _t;o.setAttribute("position",new Ge(e,3)),o.setAttribute("stroke",new Ge(t,4)),o.setAttribute("ink",new Ge(i,3));let a={viewport:{value:new it(1,1)},strength:{value:0},time:{value:0}},c=new An({uniforms:a,vertexShader:p2,transparent:!0,depthTest:!1,depthWrite:!1,fragmentShader:`
      varying vec3 vInk;
      varying float vOpacity;
      void main() {
        gl_FragColor = vec4(vInk, vOpacity);
        #include <colorspace_fragment>
      }`}),l=new Mt(o,c);return l.frustumCulled=!1,l.visible=!1,l.renderOrder=20,n.add(l),(u,h,d,p,m)=>{if(!d||!p||!m){l.visible=!1,a.strength.value=0,a.time.value=0;return}let _=jc.clamp((h*3.6-60)/50,0,1),g=a.strength.value,f=jc.damp(g,_,_>g?9:6,u);a.strength.value=f,l.visible=f>.008,l.visible&&(a.time.value+=u*(.8+1.2*f),a.viewport.value.set(p,m))}}var p2,Sm=pt(()=>{ci();qo();p2=`
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
  }`});function bm(n){let e=new pn,t=new Kn;if(n<=3){let c=.98+.07*n,l=1.93+n*.13,u=["#a88558","#bc9968","#a78152","#c4a273"];for(let h=0;h<4;h++){let d=(h-1.5)*c/4;t.form("box",[d,.1,.06+(h%2?.025:-.025)],[c/4-.015,.22,l-Math.abs(h-1.5)*.065],u[h])}for(let h of[-1,1])t.form("box",[h*(c/2-.045),.25,.03],[.085,n===1?.17:.26,l-.06],n===1?"#987448":"#b48b51"),n>=2&&t.tri([h*c*.49,.28,-l*.46],[0,.33,-l*.67],[0,.29,-l*.44],"#c9a672"),n===3&&t.form("box",[h*c*.53,.11,-.04],[.12,.15,l*.85],"#6b8783");for(let h of[-.55,.57])t.form("box",[0,.231,h],[c*.95,.035,.13],n===1?"#7b8075":"#68877b");t.form("box",[0,.285,.02],[.63,.12,.6],"#5d6559");for(let h of[-.135,.135])t.form("barrel",[h,.415,-.03],[.118,.48,.118],n===1?"#6c7e69":"#b57641",[Math.PI/2,0,0]);return t.form("box",[0,.531,-.01],[.51,.03,.095],"#574e40"),t.form("box",[0,.25,l*.5],[.25,.31,.23],"#465553"),t.form("barrel",[0,.45,l*.47],[.14,.3,.14],n>=3?"#c07943":"#8b9180",[Math.PI/2,0,0]),t.form("box",[.34,.48,.43],[.028,.52,.027],"#545b50",[.14,0,-.05]),e.add(t.mesh()),e}let i=[[-1.62,.055,.45],[-1.22,.38,.47],[-.69,.65,.45],[.15,.73,.41],[1.05,.65,.36],[1.3,.5,.35]],s=n<6?"#d79356":n>=9?"#f16c33":"#f58a44";function r(c,l){let[u,h,d]=c;return[[l*h*.23,-.07,u],[l*h*.82,.062,u],[l*h*.99,.14,u],[l*h,.235,u],[l*h*.95,d,u]]}for(let c=0;c<i.length-1;c++){for(let _ of[-1,1]){let g=r(i[c],_),f=r(i[c+1],_);for(let v=0;v<4;v++)t.quad(g[v],f[v],f[v+1],g[v+1],["#234852","#da6435","#f4ead4","#ef7337"][v])}let[l,u,h]=i[c],[d,p,m]=i[c+1];t.quad([-u*.95,h,l],[u*.95,h,l],[p*.95,m,d],[-p*.95,m,d],s);for(let _ of[-1,1])t.quad([_*u*.68,h+.008,l],[_*u*.82,h+.008,l],[_*p*.82,m+.008,d],[_*p*.68,m+.008,d],"#fff0ce")}for(let c of[0,i.length-1]){let l=r(i[c],-1),u=r(i[c],1);for(let h=0;h<4;h++)t.quad(l[h],u[h],u[h+1],l[h+1],h===2?"#fae6c6":"#ce6436")}let o=[[-.46,.45,-.73],[.46,.45,-.73],[.48,.4,.63],[-.48,.4,.63]],a=[[-.29,.68,-.31],[.29,.68,-.31],[.32,.7,.34],[-.32,.7,.34]];if(n>=6){for(let c=0;c<4;c++)t.quad(o[c],o[(c+1)%4],a[(c+1)%4],a[c],["#548380","#254c54","#365955","#346b71"][c]);t.quad(...a,"#28535b"),t.form("box",[0,.708,.04],[.6,.025,.12],"#f6d696")}else t.quad(...o,"#665d4e"),t.form("box",[0,.48,.13],[.64,.15,.41],"#d3b889"),n===5&&t.quad(o[0],o[1],a[1],a[0],"#789d99");t.form("box",[0,.381,.92],[.65,.055,.34],"#325254");for(let c=-2;c<=2;c++)t.form("box",[c*.115,.416,.92],[.045,.018,.24],"#90a49a");t.form("box",[0,.25,1.34],[.28,.35,.24],"#2e4847"),t.form("box",[.4,.74,.55],[.03,.61,.03],"#475d55",[.16,0,-.09]),t.form("stone",[.427,1.042,.59],[.047,.075,.047],"#ec6435");for(let c of[-.53,.53])t.form("box",[c,.44,.56],[.07,.14,.38],"#ef9a50",[.1,0,0]);if(n>=7){for(let c of[-1,1])t.form("box",[c*.48,.53,.94],[.06,.36,.14],"#355652",[-.23,0,0]);t.form("box",[0,.72,.96],[1.32,.095,.29],"#ef783c",[-.1,0,0])}if(n>=8)for(let c of[-1,1])t.form("stone",[c*.67,.16,.18],[.2,.18,1.15],"#e97b41",[0,c*.05,0]),t.form("box",[c*.64,.3,.46],[.14,.06,.94],"#fff1ca");if(n>=9)for(let c of[-1,1]){let l=c*(n===10?.48:.4),u=n===10?1.15:.91;t.form("box",[l,.2,1.38],[.15*u,.35,.23*u],"#28494c"),t.form("box",[l,.15,1.44],[.33*u,.035,.3*u],"#66847d");let h=[[-.64,-1],[.64,-1],[1,-.63],[1,.64],[.65,1],[-.65,1],[-1,.64],[-1,-.63]],d=(m,_,g,f)=>h.map(([v,b])=>[l+v*_*u,m,f+b*g*u]),p=[d(.25,.14,.19,1.37),d(.34,.18,.23,1.38),d(.54,.175,.226,1.37),d(.61,.128,.164,1.34)];for(let m=0;m<3;m++)for(let _=0;_<8;_++){let g=(_+1)%8;t.quad(p[m][_],p[m][g],p[m+1][g],p[m+1][_],["#304b4c","#33545a","#da713d"][m])}for(let m=0;m<8;m++)t.tri([l,.619,1.34],p[3][m],p[3][(m+1)%8],"#e58a4c");for(let m of[.38,.43,.48])t.form("box",[l,m,1.375+.228*u],[.18*u,.018,.016],"#a2b2a2");t.form("box",[l,.621,1.34],[.075,.015,.27*u],"#ffdf9a"),t.form("barrel",[l,.085,1.49],[.048,.19,.048],"#586a6a",[Math.PI/2,0,0])}return n===10&&(t.form("box",[0,.73,-.1],[.11,.022,.53],"#ffefc9"),t.form("box",[0,.72,.92],[1.52,.05,.1],"#f9dfab"),e.scale.set(1.09,1.06,1.14)),e.add(t.mesh()),e}function m2(n){let t=new Array(190),i=new en,s=new _t;s.setAttribute("position",new Ge([-.5,0,.6,-.15,0,-.6,.5,0,-.43,-.5,0,.6,.5,0,-.43,.15,0,.43],3));let r=new nn({color:"#e1f8e9",side:zt,transparent:!0,opacity:.85,depthWrite:!1}),o=new Es(s,r,190);o.frustumCulled=!1,o.instanceMatrix.setUsage(Rs),n.add(o);let a=0,c=0;function l(){t.fill(null),a=0,c=0,o.count=0}l();function u(h,d,p,m){c+=h;let _=!p.ramp||p.ramp.kind==="ramp"&&p.altitude<.25;if(m&&!p.flying&&_&&p.speed>.6&&c>Math.max(.022,.73/p.speed)){c=0;let f=-d.rotation.y,v=Math.cos(f),b=Math.sin(f),M=Math.sin(f),A=-Math.cos(f);for(let S of[-1,1]){let T=.4+.07*Math.sin(a*3.9),C=(.65+p.speed*.095)*S,y=p.s-.83*Math.cos(f),x=He(y,Wt(y,p.route));if(t[a]={x:d.position.x-M*.83+v*T*S,z:d.position.z-A*.83+b*T*S,dx:v*C-M*.2,dz:b*C-A*.2,angle:-f+S*.31,age:0,long:p.speed*.082,life:.61+p.speed*.025,boost:p.boostTime>0||p.jetTime>0||p.level>=9,base:x},a=(a+1)%190,p.speed>8){let R=p.landTime>0||p.hitTime>.48?1.8:p.jetTime>0?1.35:1,D=.5+.46*Math.sin(a*7.14);t[a]={x:d.position.x+v*T*S,z:d.position.z+b*T*S,dx:v*C*R*1.25-M*.65,dz:b*C*R*1.25-A*.65,angle:-f+S*.5,age:0,long:.21+D*.28,life:.27+D*.24,splash:(1.7+D*1.4)*R,base:x},a=(a+1)%190}}}let g=0;for(let f of t){if(!f||f.age>=f.life)continue;f.age+=h;let v=Math.max(.001,1-f.age/f.life),b=f.splash?Math.max(0,f.splash*f.age-4.9*f.age*f.age):.015*v;i.position.set(f.x+f.dx*f.age,f.base+.055+b,f.z+f.dz*f.age),i.rotation.set(f.splash?.57:0,f.angle,0),i.scale.set((f.splash?.115:f.boost?.35:.24)*v+.02,1,(.2+f.long)*(.35+.65*v)),i.updateMatrix(),o.setMatrixAt(g++,i.matrix)}o.count=g,o.instanceMatrix.needsUpdate=!0}return{clear:l,update:u}}function Em(n){let e=new il({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setClearColor("#bfdad5"),e.outputColorSpace=Tn;let t=new go;t.background=new Pe(Jt?.fog??"#c8e0d9"),t.fog=new mo(Jt?.fog??"#c8dfd4",Jt?.density??.0089);let i=new Mt(new To(210,24,14),new An({side:mn,depthWrite:!1,uniforms:{horizon:{value:Jt?new Pe(Jt.sky[0]):new Pe(.67,.8,.74)},zenith:{value:Jt?new Pe(Jt.sky[1]):new Pe(.27,.58,.72)}},vertexShader:"varying vec3 skyDir; void main(){skyDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 horizon,zenith; varying vec3 skyDir; void main(){vec3 d=normalize(skyDir);float h=smoothstep(-.055,.72,d.y);
      vec3 c=mix(horizon,zenith,h);
      float sun=max(0.,dot(d,normalize(vec3(-.52,.34,-.79))));c+=vec3(.18,.105,.035)*pow(sun,13.);
      gl_FragColor=vec4(c,1.);
      #include <colorspace_fragment>
    }`}));i.renderOrder=-5,t.add(i);let s=new Po("#fffae3","#a3b9a4",1.58),r=new Do(Jt?.sun??"#ffe8bd",1.54);r.position.set(-45,67,-19),t.add(s,r);let o=_m(t),a=Yp(t),c=Gp(t),l=Hp(t),u=1,h=bm(u);t.add(h);let d=new Mt(new So(1,20),new nn({color:"#174c50",transparent:!0,opacity:.31,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.scale.set(.8,1.58,1),t.add(d);let p=new Mt(new Fi(.65,1,22),new nn({color:"#e0f4e0",transparent:!0,depthWrite:!1,opacity:0}));p.rotation.x=-Math.PI/2,t.add(p);let m=new vn(63,1,.16,255);t.add(m);let _=Mm(m),g=new N,f=new N,v=new N,b=m2(t),M=ym(t),A=window.matchMedia("(prefers-reduced-motion: reduce)"),S=0,T=0,C=1,y=-100,x=0,R=58,D=0,I=0;function L(){let O=n.clientWidth,z=n.clientHeight;!O||!z||S===O&&T===z||(S=O,T=z,C=S/T,e.setPixelRatio(Math.min(window.devicePixelRatio||1,C<.85?1.65:1.6)),e.setSize(S,T,!1),m.aspect=C,R=C<.9?66+Qe((.9-C)*13,0,7):64,m.fov=R,m.updateProjectionMatrix())}function F(O,z,G,ee=!1){L(),u!==z.level&&(t.remove(h),h.traverse(De=>{De.isMesh&&(De.geometry.dispose(),De.material.dispose())}),u=z.level,h=bm(u),t.add(h)),x+=O;let se=G==="ready",ce=G==="running",xe=!!z.crash,ke=se?-.28:z.s,Ye=Wt(ke,z.route),Ze=at(ke,z.u),J=cn(ke,Ye),te=ce||xe?z.steering:0,_e=ce&&z.hitTime>.48?Math.sin(z.hitTime*52)*(z.hitTime-.48)*.22:0,Oe=(ce||xe)&&z.smoothSteering,we=ce||xe?z.turnAngle*(Oe?.82:1):0,rt=te*(Oe?.73:1),wt=Oe&&!ee?1-Math.exp(-12*O):1;D+=(we-D)*wt,I+=(rt-I)*wt;let U=J+D,ot=He(ke,Ye);if(h.position.set(Ze.x,ot+.072+z.altitude+Math.sin(x*3.2+ke*.6)*(ce?.025:.016),Ze.z),h.rotation.order="YXZ",h.rotation.y=-U,h.rotation.x=z.pitch-(z.flying||xe?0:Math.atan(z.downhill)*.81)+.012*Math.sin(x*2.7)+(xe?z.crash.forwardSpeed*.0023:ce?z.speed*.0023:0),h.rotation.z=I*.15+_e,d.position.set(Ze.x+.12,ot+.025,Ze.z+.07),d.rotation.x=-Math.PI/2-Math.atan(Ur(ke,Ye)),d.material.opacity=.31/(1+z.altitude*.55),d.rotation.z=-U,h.visible=!xe,d.visible=!xe,M(O,h,z,A.matches),p.visible=ce&&z.landTime>0,p.visible){let De=1-z.landTime/.48,Ae=.65+De*2;p.position.set(Ze.x,ot+.057,Ze.z),p.scale.set(Ae,Ae,1),p.material.opacity=.65*(1-De)}let Fe=Qe((.95-C)/.5,0,1),Ne=se?0:ke,Me=1-Le(ue-17,ue+46,Ne),Ot=(se?5.8:4.85)+1.62*Fe+Me*(.65+1*Fe),ve=Ne-Ot*Math.cos(J),Je=Wt(ve,z.route),tn=Ue(ve,Je),Xt=Je===Ye?tt(ve,Ye)-tt(ke,Ye):0,P=Qe(z.u+Xt,tn.left+.43,tn.right-.43),E=at(ve,P),W=(se?1.99:1.46)+.32*Fe+Me*(.68+.5*Fe);f.set(E.x,He(ve,Je)+W+z.altitude*.86,E.z);let Z=Math.atan2(Ze.x-E.x,E.z-Ze.z),ne=Z+.34*Qe(cn(Ne+10,Ye)-Z,-.17,.17),Y=se?.31-.98*Fe:.22,Ce=Ne+13.5*Math.cos(ne),he=He(Ce,Wt(Ce,z.route));g.set(Ze.x+Math.sin(ne)*13.5,ot+.78*(he-ot)+Y+z.altitude*.78,Ze.z-Math.cos(ne)*13.5);let be=ee?1:1-Math.exp(-13*O);m.position.lerp(f,be),v.lerp(g,be),m.lookAt(v),ce&&!Oe&&!A.matches&&m.rotateZ(-te*Math.min(.012,z.speed*5e-4));let Te=zs(z),re=R+Me*(1+4.5*Fe)+(ce&&!A.matches?Math.min(6.1,Te*.2)+(z.boostTime>0||z.jetTime>0?4.2:0):0),pe=ee?re:m.fov+(re-m.fov)*(1-Math.exp(-4*O));Math.abs(pe-m.fov)>.009&&(m.fov=pe,m.updateProjectionMatrix()),_(O,Te,ce&&!A.matches,S,T),i.position.copy(m.position),ee&&b.clear(),b.update(O,h,z,ce),(x-y>1/30||ee)&&(o(x,ke,z.route),y=x),a(x,z,A.matches),c(z,G),l(x,z,A.matches),e.render(t,m)}return{frame:F,resize:L}}var wm=pt(()=>{la();ci();Tu();Vp();Wp();Zp();xm();Ou();Sm();Wi();$t()});function _2(n,e,t,i){n.save(),n.translate(e,t),n.lineWidth=1.6,n.lineJoin="round",n.fillStyle=i?"#365e50":"#ffd15a",n.strokeStyle=i?"#ededdc":"#594b2e",n.fillRect(-6,-6.5,12,13),n.strokeRect(-6,-6.5,12,13),n.fillStyle=i?"#365e50":"#594b2e",n.fillRect(-2.6,-8.7,5.2,2.4),i?(n.strokeStyle="#f0f5da",n.lineWidth=1.8,n.beginPath(),n.moveTo(-3.5,0),n.lineTo(-.9,2.5),n.lineTo(3.7,-2.7),n.stroke()):(n.fillStyle="#354637",n.beginPath(),n.moveTo(.6,-4.7),n.lineTo(-3.6,.8),n.lineTo(-.4,.8),n.lineTo(-1.1,4.8),n.lineTo(3.6,-1),n.lineTo(.4,-1),n.closePath(),n.fill()),n.restore()}function Tm(n,e,t={}){let i=n.clientWidth||300,s=142,r=Math.min(devicePixelRatio||1,2);n.width=Math.round(i*r),n.height=s*r;let o=n.getContext("2d");o.setTransform(r,0,0,r,0,0);let a=1/0,c=-1/0;for(let _=0;_<=Pt;_+=12)for(let g of _>=ue&&_<Xe?Ft:["shared"]){let f=Ue(_,g);a=Math.min(a,at(_,f.left).x),c=Math.max(c,at(_,f.right).x)}let l=_=>10+_/Pt*(i-20),u=(_,g)=>10+103*(at(_,g).x-a)/(c-a);o.fillStyle="#e9ebd7",o.fillRect(0,0,i,s);function h(_,g,f,v){let b=Math.ceil((g-_)/5);o.beginPath();for(let M=0;M<=b;M++){let A=_+(g-_)*M/b,S=Ue(A,f).left,T=[l(A),u(A,S)];M?o.lineTo(...T):o.moveTo(...T)}for(let M=b;M>=0;M--){let A=_+(g-_)*M/b;o.lineTo(l(A),u(A,Ue(A,f).right))}o.closePath(),o.fillStyle=v,o.fill()}h(0,ue,"shared","#83aba0"),h(Xe,Pt,"shared","#83aba0");for(let _ of Ft)h(ue,Xe,_,g2[_]);for(let _ of[ue,Xe])o.strokeStyle="#54695a",o.setLineDash([2,3]),o.beginPath(),o.moveTo(l(_),10),o.lineTo(l(_),115),o.stroke();o.setLineDash([]),o.font="12px system-ui, sans-serif",o.fillStyle="#344e43",o.textAlign="left",o.fillText("\uCD9C\uBC1C",7,134),o.textAlign="right",o.fillText(Ti(Pt)+" \uACB0\uC2B9",i-7,134);let d=[.61,.32,.8].map(_=>ue+(Xe-ue)*_),p=[];o.textAlign="center",o.lineJoin="round",o.lineWidth=4;for(let[_,g]of Ft.entries()){if(!t[g])continue;let f=Math.floor(t[g]).toLocaleString("ko-KR")+" m",v=o.measureText(f).width/2+10,b=d.find(A=>Math.abs(l(A)-l(Vi[g].s))>v&&Math.abs(l(A)-l(e.s))>v)||d[0],M=u(b,tt(b,g))+4;o.strokeStyle="#f6f4e4",o.strokeText(f,l(b),M),o.fillText(f,l(b),M),p.push(["\uC704","\uAC00\uC6B4\uB370","\uC544\uB798"][_]+" "+f)}let m=[];for(let[_,g]of Ft.entries()){let f=Vi[g],v=e.boostCells.includes(g);_2(o,l(f.s),u(f.s,f.u),v),m.push(["\uC67C\uCABD","\uAC00\uC6B4\uB370","\uC624\uB978\uCABD"][_]+" "+f.s+" m "+(v?"\uC218\uC9D1":"\uBBF8\uC218\uC9D1"))}n.setAttribute("aria-label","\uC138 \uBB3C\uAE38\uACFC \uD604\uC7AC \uC704\uCE58"+(p.length?". \uCD5C\uACE0 \uAC70\uB9AC "+p.join(", "):"")+". \uBD80\uC2A4\uD130 \uC804\uC9C0 "+m.join(", ")),o.beginPath(),o.arc(l(e.s),u(e.s,e.u),4.5,0,Math.PI*2),o.fillStyle="#fdf6db",o.fill(),o.strokeStyle="#203e36",o.lineWidth=2,o.stroke()}var g2,Am=pt(()=>{Wo();rn();$t();g2={gorge:"#d98b55",canal:"#4b9eaf",marsh:"#8a9a50"}});var Wm={};Qm(Wm,{startGame:()=>w2});function We(n,e){let t=ie(n);t.textContent!==e&&(t.textContent=e)}function Im(){let n=Hn?"\uC18C\uB9AC \uB044\uAE30":"\uC18C\uB9AC \uCF1C\uAE30";ie("sound").setAttribute("aria-pressed",String(Hn)),ie("sound").setAttribute("aria-label",n),ie("sound").title=n}function Pl(){if(Hn)try{let n=window.AudioContext||window.webkitAudioContext;if(!n)return;if(!Et){Et=new n,Jo=Et.createOscillator(),Jo.type="triangle",$o=Et.createGain(),$o.gain.value=0;let e=Et.createBiquadFilter();e.type="lowpass",e.frequency.value=360,Jo.connect(e).connect($o).connect(Et.destination),Jo.start();let t=Et.createBuffer(1,Et.sampleRate,Et.sampleRate),i=t.getChannelData(0);ku=t;for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;let s=Et.createBufferSource();s.buffer=t,s.loop=!0,Ko=Et.createBiquadFilter(),Ko.type="bandpass",Ko.Q.value=.72,jo=Et.createGain(),jo.gain.value=0,s.connect(Ko).connect(jo).connect(Et.destination),s.start()}Et.state==="suspended"&&Et.resume().catch(()=>{})}catch{}}function Xs(n,e=0){if(!Et||!$o)return;let t=Et.currentTime;if(Jo.frequency.setTargetAtTime(39+e*(4.3+K.level*.1),t,.085),$o.gain.setTargetAtTime(n&&Hn?.014+Math.min(.031,e*8e-4):0,t,.055),jo){let i=Math.min(1,K.jetTime*1.6);Ko.frequency.setTargetAtTime(400+e*30+i*420,t,.1),jo.gain.setTargetAtTime(Hn&&e>0&&!sn&&ct==="running"?(Math.min(.044,e*95e-5)+i*.015)*(K.flying?.5:1):0,t,.09)}}function ea(n,e=.17){if(!Et||!Hn||Et.state!=="running")return;let t=Et.currentTime,i=Et.createOscillator(),s=Et.createGain();i.type="sine",i.frequency.setValueAtTime(n,t),i.frequency.exponentialRampToValueAtTime(n*1.18,t+e),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.063,t+.013),s.gain.exponentialRampToValueAtTime(1e-4,t+e),i.connect(s).connect(Et.destination),i.start(t),i.stop(t+e+.02)}function x2(n){if(!Et||!ku||!Hn||Et.state!=="running")return;let e=Et.currentTime,t=Et.createBufferSource(),i=Et.createGain(),s=Et.createBiquadFilter();t.buffer=ku,s.type="lowpass",s.Q.value=.72,s.frequency.setValueAtTime(2400,e),s.frequency.exponentialRampToValueAtTime(240,e+.23),i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(Math.min(.25,.12+n*.002),e+.007),i.gain.exponentialRampToValueAtTime(.034,e+.05),i.gain.exponentialRampToValueAtTime(.075,e+.073),i.gain.exponentialRampToValueAtTime(1e-4,e+.25),t.connect(s).connect(i).connect(Et.destination),t.start(e),t.stop(e+.26)}function Lm(){for(let n of Pm)Vu[n]=K[n]}function Dm(){Gs=0,Rl=0,Qo=performance.now(),Il=Qo,Lm()}function us(n){if(sn||ct!=="running"||K.ended||n<=Qo)return;let e=Math.min(.12,(n-Qo)/1e3);Qo=n;let t=bi.has("KeyD")||bi.has("ArrowRight"),i=bi.has("KeyA")||bi.has("ArrowLeft");for(;e>1e-9&&!K.ended;){ls&&K.elapsed>=ls.until&&(ls=null);let s=Nt?.drag||ls,r=s&&!bi.size?vp(s,K):Number(t)-Number(i),o=Math.min(e,Hs-Gs);if(Rl+=r*o,Gs+=o,e-=o,Gs>=Hs-1e-9){Lm();let a=zp(K,Rl/Hs,Hs,ta);Gs=0,Rl=0,a&&S2(a)}}K.ended&&(ia(),km())}function Um(n){return"\uC218\uB85C \uAC00\uC18D "+n.pads+"\uD68C \xB7 \uBCF4\uC870 \uBD80\uC2A4\uD130 "+n.boostsUsed+"\uD68C \xB7 \uC810\uD504 "+n.jumps+"\uD68C"+(n.longestJump>0?" \xB7 \uCD5C\uC7A5 \uC810\uD504 "+n.longestJump.toFixed(1)+" m":"")+(n.pickedCell?" \xB7 \uC804\uC9C0 \uD68D\uB4DD "+n.cellCount+"/3":"")}function Fm(n,e){let t=zl(n,e);return e&&t!==e.length?"\uC774\uC804 "+Ti(t)+" \uCF54\uC2A4":""}function qi(){let n=Qn(lt.level),e=n.level===Js,t=!qr||Wr||Ei||Ws||jn;for(let c of ie("course-panel").querySelectorAll("button")){let l=c.dataset.stage,u=dn(l),h=ms(lt,l);c.disabled=t||!h;let d=un[un.indexOf(u)-1],p=h?lt.completedCourses.includes(l)?"\uC644\uC8FC \xB7 "+u.description:u.description:d.name+" \uC644\uC8FC \uD6C4 \uC5F4\uB9BC",m=c.querySelector(".choice-note");m.textContent!==p&&(m.textContent=p)}let i=lt.recent[0];if(ie("arrival").hidden=i?.arrivalVisit!==hs,!ie("arrival").hidden){We("arrival-title",dn(i.course).name+" \uC644\uC8FC!");let c=[Math.floor(i.distance).toLocaleString("ko-KR")+" m"],l=Fm(i,dn(i.course));l&&c.push(l),Number.isFinite(i.time)&&c.push(i.time.toFixed(1)+"\uCD08"),Number.isFinite(i.peak)&&c.push("\uCD5C\uACE0 "+Math.round(i.peak*3.6)+" km/h"),Number.isFinite(i.boostsUsed)?c.push(Um(i)):Number.isFinite(i.jumps)&&c.push("\uC810\uD504 "+i.jumps+"\uD68C"),We("arrival-info",c.join(" \xB7 "))}We("dock-cells",lt.boostCells.length+" / "+Ft.length),We("boat-name",n.name),We("boat-level",n.level+" / "+Js+"\uB2E8\uACC4");let s=n.endurance/(j.flow?.draw??1);We("specs","\uC21C\uD56D "+Math.round(n.cruise*3.6)+" km/h \xB7 \uB3D9\uB825 \uC57D "+Math.round(s)+"\uCD08"),We("dock-parts","\uBD80\uD488 "+lt.parts+"\uAC1C"),We("result-parts","\uBCF4\uC720 "+lt.parts+"\uAC1C");let r=ps(lt);ie("continue-course").hidden=!(lt.completedCourses.includes(j.id)&&!lt.completedCourses.includes(r.id)),ie("continue-course").disabled=t,We("continue-course","\uB2E4\uC74C \uCF54\uC2A4 \xB7 "+r.name+" \u203A");let o=Ks(lt,j.id).best,a=j.id==="basin"&&!lt.courseRecords;We("best",o?"\uCD5C\uACE0 "+Math.floor(o).toLocaleString("ko-KR")+" m":a&&lt.best?"\uC774\uC804 \uCF54\uC2A4 "+lt.best.toFixed(0)+" m":a&&lt.legacyBest?"\uC2DC\uD5D8 \uAE30\uB85D "+lt.legacyBest.toFixed(0)+" m":"\uCD5C\uACE0 \uAE30\uB85D \u2014");for(let c of["dock-upgrade","result-upgrade"]){let l=ie(c);l.textContent=e?"\uCD5C\uC885 \uAC1C\uC870 \uC644\uB8CC":n.level+1+"\uB2E8\uACC4 \uAC1C\uC870 \xB7 "+n.cost+"\uAC1C",l.disabled=e||lt.parts<n.cost||t||In>0,l.setAttribute("aria-label",e?"10\uB2E8\uACC4 \uCD5C\uC885 \uAC1C\uC870 \uC644\uB8CC":Qn(n.level+1).name+"\uB85C \uAC1C\uC870, \uBD80\uD488 "+n.cost+"\uAC1C \uD544\uC694")}ie("launch").disabled=t,ie("retry").disabled=t||!!$n?.cleared||In>0,ie("course-picker").disabled=t,ie("cell-map").disabled=t,ie("next-course").disabled=t||!!$n||In>0,ie("dock").disabled=t||!!$n?.cleared||In>0,$n&&!Ei&&In<=0&&(ie("result-upgrade").disabled=!1,We("result-upgrade","\uBD80\uD488 \uC815\uC0B0 \uB2E4\uC2DC \uC2DC\uB3C4"),ie("result-upgrade").setAttribute("aria-label","\uBD80\uD488 \uC815\uC0B0 \uB2E4\uC2DC \uC2DC\uB3C4"))}function v2(){jn||(jn=!0,sn=!0,qs(),Xs(!1),location.reload())}function na(n){if(jn||n.revision<lt.revision)return!1;if(n.visit!==hs||n.activeCourse!==j.id)return v2(),!1;if(lt=n,ct==="ready"&&K.level!==lt.level)K=Hr(1,lt.level,lt.boostCells);else for(let e of lt.boostCells)du(K,e);return sn&&!ie("map-panel").hidden&&Yu(),qi(),!0}function y2(){ie("history-list").replaceChildren();for(let n of lt.recent){let e=document.createElement("li"),t=dn(n.course),i=n.trial?"100 m \uC2DC\uD5D8":t?t.name+" \xB7 "+n.level+"\uB2E8\uACC4":"300 m \uCF54\uC2A4",s=Fm(n,t);e.textContent=i+(s?" \xB7 "+s:"")+" \xB7 "+n.distance.toFixed(1)+" m \xB7 "+n.time.toFixed(1)+"\uCD08"+(n.crash?" \xB7 \uCDA9\uB3CC":""),ie("history-list").append(e)}}async function Nm(n){Ei=!0,qi();try{let e=await Xr.credit(n);if($s(n.id),n.pickedCell&&$s(Bm(n.visit,n.course,n.pickedCell)),$n?.id===n.id&&($n=null),!na(e))return;y2();let t=kl(n.distance,dn(n.course));We("earned","\uCF54\uC2A4 "+t+"% \xB7 \uBD80\uD488 +"+n.earned+"\uAC1C")}catch{$n=n,We("earned","\uC815\uC0B0\uC744 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.")}finally{Ei=!1,jn||qi(),!jn&&ct==="result"&&!ie("result-layer").hidden&&!ie("result").contains(document.activeElement)&&($n?ie("result-upgrade"):K.cleared?ie("next-course"):ie("retry")).focus({preventScroll:!0})}}async function Om(){if($n&&!Ei){await Nm($n);return}if(!qr||Ei||Wr||Ws||jn||ct==="running")return;let n=lt.level;Wr=!0,qi();try{let e=await Xr.upgrade(n,hs);if(!na(e))return;e.level>n&&(Gu(),We("announce",e.level+"\uB2E8\uACC4 \uAC1C\uC870 \uC644\uB8CC \xB7 "+Qn(e.level).name),ea(780))}catch{We("announce","\uAC1C\uC870\uB97C \uC800\uC7A5\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uB2E4\uC2DC \uB20C\uB7EC \uC8FC\uC138\uC694.")}finally{Wr=!1,jn||qi()}}function qs(){bi.clear(),K.keyHold=0,ls=null,Nt!==null&&Vn.hasPointerCapture(Nt.id)&&Vn.releasePointerCapture(Nt.id),Nt=null}function Ll(n){ct=n,Rm.dataset.mode=ct,ct!=="result"&&(In=0),ie("launch-card").hidden=ct!=="ready",ie("instruments").hidden=ct!=="running",ie("boost").hidden=ct!=="running",ie("result-layer").hidden=ct!=="result"||In>0,ie("impact-note").hidden=In<=0,qi()}function M2(n){if(n.hitTime>.18){if(n.hitKind==="log"||n.hitKind==="lock")return Go[n.hitKind]+" \uC811\uCD09";if(n.hitKind==="rock")return"\uBC14\uC704 \uC811\uCD09";if(n.hitKind==="ramp")return"\uC606\uBA74 \uC811\uCD09";if(n.hitKind==="post")return"\uAE30\uB465 \uC811\uCD09";if(n.hitKind==="buoy")return"\uBD80\uD45C \uC811\uCD09"}return n.flying?n.vy<-.5?"\uB099\uD558 \uC911":n.jetTime>0&&n.jetEntry.kind==="ramp"?"\uB3C4\uC57D \uAC00\uC18D":"\uACF5\uC911":n.stoppedFor>0?"\uBCF4\uC870 \uB300\uAE30 "+Math.max(0,Math.ceil(Eu-n.stoppedFor))+"\uCD08":n.boostTime>0?"\uBCF4\uC870 \uAC00\uC18D":n.ramp?n.ramp.kind==="ramp"?"\uB3C4\uC57D \uAC00\uC18D":"\uB3C4\uC57D \uC900\uBE44":n.landTime>0?"\uCC29\uC218":n.hitTime>.45?"\uC811\uCD09 \uAC10\uC18D":n.jetTime>0?n.jetEntry.kind==="ramp"?"\uB3C4\uC57D \uAC00\uC18D":n.jetEntry.kind==="lantern"?Go.lantern:"\uC218\uBB38 \uAC00\uC18D":n.chargeTime>0?"\uBC30\uD130\uB9AC \uCDA9\uC804":n.waterEffect?Go[n.waterEffect]:n.coastAccelerating?"\uBB34\uB3D9\uB825 \uAC00\uC18D":n.battery<=0?"\uAD00\uC131 \uC8FC\uD589":n.downhill>.21?"\uB0B4\uB9AC\uB9C9 "+Math.round(n.downhill*100)+"%":n.shallow>.59?"\uC595\uC740 \uBB3C":n.current>.6?"\uBE60\uB978 \uBB3C\uC0B4":"\uC8FC\uD589 \uC911"}function ia(){We("distance",Math.floor(K.s).toLocaleString("ko-KR"));let n=zs(K);We("speed",String(Math.round(n*3.6))),We("battery",Math.ceil(K.battery*100)+"%"),ie("progress-fill").style.transform="scaleX("+K.s/Pt+")",ie("battery-fill").style.transform="scaleX("+K.battery+")",We("zone",M2(K));let e=ie("boost"),t=wu(K);e.disabled=!t,e.classList.toggle("reserve-ready",K.battery===0&&t),e.classList.toggle("firing",K.boostTime>0);let i=K.boostCells.length;We("boost-label",i?K.boostTime>0?"\uAC00\uC18D \uC911":K.boostLeft?"\uBCF4\uC870 \uBD80\uC2A4\uD130":"\uC0AC\uC6A9 \uC644\uB8CC":"\uC804\uC9C0 \uD544\uC694"),We("boost-remaining",i?K.boostLeft+"/"+i+"\uD68C":"0\uD68C"),e.setAttribute("aria-label",i?"\uBCF4\uC870 \uBD80\uC2A4\uD130 "+i+"\uD68C \uC911 "+K.boostLeft+"\uD68C \uB0A8\uC74C":"\uBCF4\uC870 \uBD80\uC2A4\uD130 \uC7A0\uAE40. \uBB3C\uAE38\uC5D0\uC11C \uC804\uC9C0\uB97C \uD68D\uB4DD\uD558\uC138\uC694.");let s=wp(K);ie("overhead-cue").hidden=!s,s&&We("overhead-cue",s.cue+" \xB7 "+Math.ceil(s.s-K.s)+" m");let r=Vi[K.route],o=r?Math.ceil(r.s-K.s):0,a=r&&!K.boostCells.includes(r.branch)&&o>0&&o<Math.max(35,Math.min(78,K.speed*3)),c=K.pickupTime>0||a;if(ie("instruments").classList.toggle("jet-active",K.jetTime>0),ie("course-cue").classList.toggle("cell-cue",!!c),c){ie("course-cue").hidden=!1,We("course-cue",K.pickupTime>0?"\uC804\uC9C0 \uD68D\uB4DD \xB7 \uB9E4 \uC8FC\uD589 "+i+"\uD68C":"\uBD80\uC2A4\uD130 \uC804\uC9C0 \xB7 "+o+" m");return}if(K.jetTime>0){ie("course-cue").hidden=!1;let d=K.jetEntry.kind==="ramp"?"\uB3C4\uC57D\uB300":K.jetEntry.kind==="lantern"?"\uAE08\uBE5B \uB4F1\uBD88":"\uC218\uBB38";We("course-cue",d+" \uD1B5\uACFC\u3000"+Math.round(K.jetEntry.speed*3.6)+" \u2192 "+Math.round(n*3.6)+" km/h");return}let l=Wt(K.s,K.route),u=ll(K.s,l).find(d=>d.start>K.s&&d.start-K.s<Math.max(40,K.speed*3.1)),h=pp(K.s,l,Math.max(46,K.speed*3));h&&(!u||h.s<u.start)?(ie("course-cue").hidden=!1,We("course-cue",Go[h.kind]+" \xB7 "+Math.ceil(h.s-K.s)+" m")):(ie("course-cue").hidden=!u,u&&We("course-cue",u.name+" \xB7 "+Math.ceil(u.start-K.s)+" m"))}function Gu(){qs(),sn=!1,ie("help-layer").hidden=!0,K=Hr(1,lt.level,lt.boostCells),Gs=0,Ll("ready"),Xs(!1),Xi?.frame(0,K,ct,!0),ie("launch").focus({preventScroll:!0})}function Wu(){sn||!Xi||ct==="running"||In>0||!qr||Ei||$n?.cleared||Wr||Ws||jn||(Pl(),qs(),K=Hr(1,lt.level,lt.boostCells),ta="analog",Cm=crypto.randomUUID?.()||Date.now().toString(36)+"-"+Math.random().toString(36).slice(2),Dm(),Ll("running"),ia(),Hu=0,Xi.frame(0,K,ct,!0),ea(340,.115),We("announce","\uCD9C\uBC1C. \uC88C\uC6B0\uB85C \uC870\uD5A5\uD558\uC138\uC694."))}function Bm(n,e,t){return"cell."+n+"."+e+"."+t}function S2(n){let e={id:Bm(hs,K.course,n),kind:"cell",course:K.course,visit:hs,branch:n};Vl(e),Xr.collect(e).then(t=>{$s(e.id),na(t)}).catch(()=>{}),ea(880,.16),ia(),We("announce","\uBD80\uC2A4\uD130 \uC804\uC9C0\uB97C \uBAA8\uC558\uC5B4\uC694. \uB9E4 \uC8FC\uD589 "+K.boostCells.length+"\uD68C \uCDA9\uC804\uB429\uB2C8\uB2E4.")}function Xu(){us(performance.now()),!(ct!=="running"||sn)&&(Pl(),Op(K)&&(ea(540,.18),ia(),We("announce","\uBCF4\uC870 \uBD80\uC2A4\uD130\uB97C \uC0AC\uC6A9\uD588\uC2B5\uB2C8\uB2E4. \uB0A8\uC740 \uD69F\uC218 "+K.boostLeft+"\uD68C.")))}function km(){if(ct!=="running")return;K.crash&&(In=window.matchMedia("(prefers-reduced-motion: reduce)").matches?.22:vm,We("impact-note",K.crash.name+" \uCDA9\uB3CC \xB7 \uC120\uCCB4 \uD30C\uC190")),qs(),Xs(!1),Ll("result");let n=Math.floor(K.s*10)/10,e={id:Cm,visit:hs,course:K.course,branch:K.route,distance:n,time:K.elapsed,courseLength:Pt,route:Ti(Pt),power:K.power,peak:K.peak,jumps:K.jumps,longestJump:K.longestJump,pads:K.pads,boostsUsed:K.boostCells.length-K.boostLeft,split:K.split,cleared:K.cleared,level:K.level,earned:kl(n,j)};K.crash&&(e.crash=K.crash.name),K.pickedCell&&(e.pickedCell=K.pickedCell,e.cellCount=K.boostCells.length),Vl(e),We("result-title",K.crash?K.crash.name+" \uCDA9\uB3CC":K.cleared?Pt.toLocaleString("ko-KR")+" m \uC644\uC8FC!":e.distance>Ks(lt,K.course).best?"\uCD5C\uACE0 \uAE30\uB85D \uAC31\uC2E0":"\uC8FC\uD589 \uC885\uB8CC"),ie("next-course").hidden=!K.cleared,We("next-course",Cl?"\uB2E4\uC74C \uCF54\uC2A4 \xB7 "+Cl.name:"\uB2E4\uB978 \uCF54\uC2A4 \uC120\uD0DD"),ie("retry").className=K.cleared?"secondary":"primary",We("result-distance",e.distance.toFixed(1)),We("result-meta",Qn(K.level).name+" \xB7 "+e.time.toFixed(1)+"\uCD08"+(K.crash?" \xB7 \uC218\uBA74 \uC704 "+K.altitude.toFixed(1)+" m\uC5D0\uC11C \uD30C\uC190":"")),We("result-features",Um(e));let t=e.split?" \xB7 \uD569\uB958 \uC2DC \uBC30\uD130\uB9AC "+Math.round(e.split.battery*100)+"%":"",i=K.bestCoast,s=i&&i.to-i.from>.3?" \xB7 \uBB34\uB3D9\uB825 \uB0B4\uB9AC\uB9C9 "+Math.round(i.from*3.6)+" \u2192 "+Math.round(i.to*3.6)+" km/h":"";We("split","\uCD5C\uACE0 \uC18D\uB3C4 "+Math.round(K.peak*3.6)+" km/h"+s+t),ie("history").open=!1,We("earned","\uC8FC\uD589 \uBD80\uD488 \uC815\uC0B0 \uC911"),Nm(e),We("announce",ie("result-title").textContent+" "+e.distance+"\uBBF8\uD130"),K.crash?x2(K.crash.speed):((K.cleared?ie("next-course"):ie("retry")).focus({preventScroll:!0}),ea(K.cleared?710:280,.26))}async function qu(n){if(!(ct==="running"||!qr||Ei||Wr||Ws||jn||$n||!ms(lt,n))){if(n===j.id){Dl();return}Ws=!0,qi();try{let e=await Xr.enter(n,hs);na(e)}catch{We("course-rule","\uCF54\uC2A4 \uBCC0\uACBD\uC744 \uC800\uC7A5\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uB2E4\uC2DC \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.")}finally{Ws=!1,jn||qi()}}}function b2(){We("stage-name",j.name),ie("stage-tip").hidden=!j.reaches,j.reaches&&We("stage-tip",j.description),We("dock-length",Ti(Pt)),We("result-course",j.name),We("result-length",Ti(Pt)),We("finish-distance"," / "+Pt.toLocaleString("ko-KR")+" m"),document.title=j.name+" \xB7 RC \uBCF4\uD2B8 \uB7A0\uB9AC",Vn.setAttribute("aria-label",j.name+" \uC8FC\uD589 \uD654\uBA74. \uC2A4\uD398\uC774\uC2A4\uBC14\uB098 \uCD9C\uBC1C \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uCD5C\uB300 \uCD9C\uB825\uC73C\uB85C \uCD9C\uBC1C\uD569\uB2C8\uB2E4. \uC88C\uC6B0 \uBC29\uD5A5\uD0A4\uB098 \uB4DC\uB798\uADF8\uB85C \uC870\uD5A5\uD569\uB2C8\uB2E4.");for(let n of un){let e=document.createElement("button");e.type="button",e.className="course-choice",e.dataset.stage=n.id,n===j&&e.setAttribute("aria-current","true");let t=document.createElement("span");t.className="course-photo",t.setAttribute("aria-hidden","true"),t.style.backgroundImage="url(./courses/"+n.id+".webp)";let i=document.createElement("span");i.className="choice-body";let s=document.createElement("strong");s.textContent=n.name;let r=document.createElement("span");r.className="choice-distance",r.textContent=n.length.toLocaleString("ko-KR")+" m";let o=document.createElement("span");o.className="choice-note",o.textContent=n.description,i.append(s,r,o),e.append(t,i),e.addEventListener("click",()=>qu(n.id)),ie("course-panel").append(e)}}function Yu(){let n=Ks(lt,j.id).branches;ie("map-caption").hidden=!Object.values(n).some(t=>t>0),We("map-cells-count",K.boostCells.length+" / "+Ft.length);let e=["\uC67C\uCABD","\uAC00\uC6B4\uB370","\uC624\uB978\uCABD"];ie("cell-locations").replaceChildren(...Ft.map((t,i)=>{let s=document.createElement("li"),r=document.createElement("b"),o=document.createElement("span"),a=K.boostCells.includes(t);return s.classList.toggle("taken",a),r.textContent=e[i]+" \xB7 "+Vi[t].s+" m",o.textContent=a?"\u2713 \uC218\uC9D1":"\u03DF \uBBF8\uC218\uC9D1",s.append(r,o),s})),Tm(ie("route-map"),K,n)}function Ys(n="guide"){if(us(performance.now()),sn||!Xi||ct==="result")return;sn=!0,qs(),Xs(!1),ie("help-layer").hidden=!1,zu=document.activeElement;let e=n==="map",t=n==="courses";ie("course-panel").hidden=!t,ie("course-rule").hidden=!t,ie("guide").hidden=e||t,ie("map-panel").hidden=!e,ie("help-layer").classList.toggle("choosing",t),We("help-title",t?"\uCF54\uC2A4 \uC120\uD0DD":e?j.name+" \uC9C0\uB3C4":ct==="running"?"\uC77C\uC2DC\uC815\uC9C0":"\uC870\uC791\uBC95"),e&&Yu(),We("resume",ct==="running"?"\uACC4\uC18D \uC8FC\uD589":"\uB3CC\uC544\uAC00\uAE30"),ie("abort").hidden=ct!=="running";let i=t?ie("course-panel").querySelector("[aria-current]"):ie("resume");i.focus({preventScroll:!0}),t&&i.scrollIntoView({block:"nearest"})}function Dl(){sn&&(sn=!1,ie("help-layer").hidden=!0,Dm(),ct==="ready"&&zu?.getClientRects().length&&zu.focus({preventScroll:!0}))}function Zu(n,e){us(performance.now()),!(!Nt||Nt.id!==n.pointerId)&&(!e&&ct==="running"&&Nt.drag&&(pu(Nt.drag,K,n.clientX,Vn.clientWidth),ls=yp(Nt.drag,K)),Nt=null)}function E2(n,e){let t=[...e.querySelectorAll("button:not(:disabled),summary")].filter(i=>i.getClientRects().length);t.length&&(n.shiftKey&&document.activeElement===t[0]&&(n.preventDefault(),t.at(-1).focus()),!n.shiftKey&&document.activeElement===t.at(-1)&&(n.preventDefault(),t[0].focus()))}function zm(){ct==="running"&&!sn?Ys():qs()}function Hm(){qr&&!jn&&!Ws&&!Ei&&Xr.read().then(na).catch(()=>{})}function Vm(n){qs(),sn=!0,Xs(!1),ie("error-layer").hidden=!1,We("error-message",n)}function Gm(n){let e=Math.max(0,Math.min((n-Il)/1e3,.12));if(Il=n,!sn){if(ct==="running"&&(us(n),ct==="running"&&n-Hu>=60&&(ia(),Xs(K.battery>0||K.boostTime>0,K.speed),Hu=n)),ct==="running"){let t=Qe(Gs/Hs,0,1);Object.assign(Bu,K);for(let i of Pm)Bu[i]=Vu[i]+(K[i]-Vu[i])*t;Xi.frame(e,Bu,ct)}else Xi.frame(e,K,ct);In>0&&(In=Math.max(0,In-e),In===0&&(ie("impact-note").hidden=!0,ie("result-layer").hidden=!1,qi(),Ei||ie("retry").focus({preventScroll:!0})))}requestAnimationFrame(Gm)}function w2(n,e,t){Xr=n,lt=e,hs=lt.visit,K=Hr(1,lt.level,lt.boostCells),Hn=t.sound!==!1;try{let i=localStorage.getItem("willow-creek.sound");i!==null&&(Hn=i==="on")}catch{}b2(),Im();try{Xi=Em(Vn),Xi.frame(0,K,ct,!0),qr=!0,Ll("ready"),Il=performance.now(),requestAnimationFrame(Gm)}catch(i){console.error(i),Vm("3D \uADF8\uB798\uD53D(WebGL 2)\uC744 \uC9C0\uC6D0\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694.")}finally{Rm.setAttribute("aria-busy","false")}}var ie,Rm,Vn,lt,Xr,hs,qr,Ei,Wr,Ws,jn,$n,Cm,Hn,Et,Jo,$o,jo,Ko,ku,ct,sn,K,Xi,Nt,ls,In,zu,Cl,ta,Gs,Rl,Qo,Il,Hu,bi,Pm,Vu,Bu,Xm=pt(()=>{rn();wm();Tu();_l();pl();Wo();Am();xl();Ou();aa();Gl();ie=n=>document.getElementById(n),Rm=ie("game"),Vn=ie("creek"),qr=!1,Ei=!1,Wr=!1,Ws=!1,jn=!1,$n=null,Cm="",Hn=!0;ct="ready",sn=!1,K=Hr(),Nt=null,ls=null,In=0,zu=null,Cl=un[un.indexOf(j)+1],ta="analog",Gs=0,Rl=0,Qo=0,Il=0,Hu=0,bi=new Set,Pm=["s","u","steering","turnAngle","altitude","pitch"],Vu={},Bu={};Vn.addEventListener("pointerdown",n=>{if(us(performance.now()),sn||ct!=="running"||Nt!==null||n.pointerType==="mouse"&&n.button!==0)return;n.preventDefault(),Pl(),ls=null;let e=n.pointerType==="mouse"?"mouse":"touch";Nt={id:n.pointerId,x:n.clientX,source:e,drag:null},bi.size||(ta=e,Nt.drag=fu(K,n.clientX,e)),Vn.setPointerCapture(n.pointerId)});Vn.addEventListener("pointermove",n=>{!Nt||Nt.id!==n.pointerId||sn||(us(performance.now()),Nt&&(Nt.drag&&pu(Nt.drag,K,n.clientX,Vn.clientWidth),Nt.x=n.clientX))});Vn.addEventListener("pointerup",n=>Zu(n,!1));Vn.addEventListener("pointercancel",n=>Zu(n,!0));Vn.addEventListener("lostpointercapture",n=>Zu(n,!0));ie("launch").addEventListener("click",Wu);ie("retry").addEventListener("click",Wu);ie("dock").addEventListener("click",Gu);ie("course-picker").addEventListener("click",()=>Ys("courses"));ie("continue-course").addEventListener("click",()=>qu(ps(lt).id));ie("next-course").addEventListener("click",()=>{Cl?qu(Cl.id):(Gu(),Ys("courses"))});ie("abort").addEventListener("click",()=>{ct==="running"&&(Dl(),K.ended=!0,km())});ie("dock-upgrade").addEventListener("click",Om);ie("result-upgrade").addEventListener("click",Om);ie("boost").addEventListener("click",Xu);ie("boost").addEventListener("pointerdown",n=>{(n.pointerType==="touch"||n.pointerType==="pen")&&(n.preventDefault(),Xu())});ie("sound").addEventListener("click",()=>{Hn=!Hn,Hn?Pl():Xs(!1),Im();try{localStorage.setItem("willow-creek.sound",Hn?"on":"off")}catch{}});ie("help").addEventListener("click",()=>Ys());ie("map-button").addEventListener("click",()=>Ys("map"));ie("cell-map").addEventListener("click",()=>Ys("map"));ie("resume").addEventListener("click",Dl);window.addEventListener("resize",()=>{sn&&!ie("map-panel").hidden&&Yu()});window.addEventListener("keydown",n=>{if(!(!Xi||n.altKey||n.ctrlKey||n.metaKey)){if(n.code==="Escape"){n.preventDefault(),n.repeat||(sn?Dl():Ys());return}if(n.code==="Space"&&!sn){let e=n.target.closest?.("button,summary");if(e?.getClientRects().length&&e!==ie("launch")&&e!==ie("retry")&&e!==ie("boost")||(n.preventDefault(),n.repeat))return;ct==="running"?Xu():(ct==="ready"||!ie("result-layer").hidden&&!ie("retry").disabled)&&Wu();return}if(sn||ct==="result"){if(In>0){n.code==="Tab"&&n.preventDefault();return}n.code==="Tab"&&E2(n,ie(sn?"help-layer":"result-layer"));return}if(["KeyA","KeyD","ArrowLeft","ArrowRight"].includes(n.code)){if(us(performance.now()),ct==="result")return;n.preventDefault(),bi.add(n.code),ta="keyboard",ls=null,Nt&&(Nt.drag=null);return}}});window.addEventListener("keyup",n=>{us(performance.now()),bi.delete(n.code)&&!bi.size&&(K.keyHold=0,Nt&&ct==="running"&&(ta=Nt.source,Nt.drag=fu(K,Nt.x,Nt.source)))});document.addEventListener("visibilitychange",()=>{document.hidden&&zm()});window.addEventListener("blur",zm);window.addEventListener("focus",Hm);window.addEventListener("pageshow",n=>{n.persisted&&Hm()});Vn.addEventListener("webglcontextlost",n=>{n.preventDefault(),Vm("\uADF8\uB798\uD53D \uC5F0\uACB0\uC774 \uC77C\uC2DC \uC911\uB2E8\uB410\uC5B4\uC694. \uB2E4\uC2DC \uC5F4\uBA74 \uC120\uCC29\uC7A5\uC5D0\uC11C \uC2DC\uC791\uD569\uB2C8\uB2E4.")})});Gl();rn();document.getElementById("reload").addEventListener("click",()=>location.reload());async function T2(){let n={};try{n=JSON.parse(localStorage.getItem("willow-creek.rally.1"))||{}}catch{}let e=ud(n),t=await e.read(),i=new URL(location.href),s=dn(i.searchParams.get("course")),r=t.visit,o=!1;for(let c of hd())t=c.kind==="cell"?await e.collect(c):await e.credit(c),s?.id===c.course&&t.recent.some(l=>l.id===c.id&&l.arrivalVisit===t.visit)&&(o=!0),$s(c.id);s&&!o&&r===t.visit&&s.id!==t.activeCourse&&(t=await e.enter(s.id,t.visit)),i.searchParams.has("course")&&(i.searchParams.delete("course"),history.replaceState(history.state,"",i.href)),rd(t.activeCourse);let{startGame:a}=await Promise.resolve().then(()=>(Xm(),Wm));a(e,t,n)}T2().catch(n=>{console.error(n),document.getElementById("game").setAttribute("aria-busy","false"),document.getElementById("error-layer").hidden=!1,document.getElementById("error-message").textContent="\uC8FC\uD589 \uAE30\uB85D\uC744 \uC5F4 \uC218 \uC5C6\uC5B4\uC694. \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694."});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
