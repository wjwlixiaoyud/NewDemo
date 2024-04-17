(function(){"use strict";var t={8841:function(t,s,e){var a=e(6848),i=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"cs"},[s("router-link",{staticClass:"el-icon-s-home",staticStyle:{margin:"10px"},attrs:{to:"/Hello"}},[s("b",[t._v("首页")])]),s("router-link",{staticClass:"el-icon-s-promotion",staticStyle:{margin:"10px"},attrs:{to:"/farmtools"}},[s("b",[t._v("农具")])]),s("router-link",{staticClass:"el-icon-wind-power",staticStyle:{margin:"10px"},attrs:{to:"/chating"}},[s("b",[t._v("留言板")])]),s("router-link",{staticClass:"el-icon-wind-power",staticStyle:{margin:"10px"},attrs:{to:"/my"}},[s("b",[t._v("历史发展")])])],1),s("router-view")],1)},n=[],r=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"bod"},[s("h1",{attrs:{"data-text":"中国农业的时空之旅"}},[t._v("中国农业的时空之旅")])])}],c=e(1656),l={},u=(0,c.A)(l,r,o,!1,null,null,null),v=u.exports,_={name:"App",components:{hello:v}},p=_,m=(0,c.A)(p,i,n,!1,null,null,null),d=m.exports,h=e(6178),f=function(){var t=this,s=t._self._c;return s("div",{staticClass:"newBody"},[s("div",{staticClass:"messages"},[s("h1",[t._v("中国农业方面讨论区")]),s("div",{staticClass:"form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",id:"username",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{id:"message",placeholder:"请输入留言内容..."},domProps:{value:t.message},on:{input:function(s){s.target.composing||(t.message=s.target.value)}}}),s("button",{attrs:{id:"submitBtn"},on:{click:t.handleSubmit}},[t._v("提交")])]),s("div",{attrs:{id:"messageBoard"}},t._l(t.messageList,(function(a,i){return s("div",{key:i,staticClass:"message"},[s("div",{staticClass:"message-info"},[s("div",{staticClass:"info"},[s("img",{attrs:{src:e(6267)}}),s("strong",[t._v(t._s(a.username))])]),s("span",[t._v("发布于, "+t._s(a.timestamp))])]),s("div",{staticClass:"sontent"},[t._v(" "+t._s(a.message)+" "),s("button",{attrs:{id:"dlet"},on:{click:function(s){return t.handleDelete(i)}}},[t._v("删除")])])])})),0)])])},g=[],b={data(){return{username:"",message:"",messageList:[]}},methods:{handleSubmit(){if(""===this.message.trim())return void alert("内容为空，请输入内容！");const t={username:this.username||"匿名",message:this.message,timestamp:this.getCurrentTime()};this.messageList.unshift(t),this.saveToLocalStorage(),this.resetForm()},saveToLocalStorage(){localStorage.setItem("messageList",JSON.stringify(this.messageList))},loadFromLocalStorage(){const t=localStorage.getItem("messageList");if(t)try{this.messageList=JSON.parse(t)}catch(s){console.error("Error parsing messages from local storage:",s)}},handleDelete(t){this.messageList.splice(t,1),this.saveToLocalStorage()},getCurrentTime(){const t=new Date,s=t.getFullYear(),e=("0"+(t.getMonth()+1)).slice(-2),a=("0"+t.getDate()).slice(-2),i=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2),r=("0"+t.getSeconds()).slice(-2);return`${s}/${e}/${a} ${i}:${n}:${r}`},resetForm(){this.username="",this.message=""}},created(){this.loadFromLocalStorage()}},C=b,x=(0,c.A)(C,f,g,!1,null,null,null),y=x.exports,S=function(){var t=this,s=t._self._c;return s("div",{staticClass:"imgset"},[s("div",{staticClass:"card"},[t._m(0),s("div",{staticClass:"content"},[s("div",{staticClass:"detalis"},[t._m(1),t._m(2),s("div",{staticClass:"actionBtn"},[s("button",{on:{click:t.open}},[t._v("Message")])])])])]),s("div",{staticClass:"card"},[t._m(3),s("div",{staticClass:"content"},[s("div",{staticClass:"detalis"},[t._m(4),t._m(5),s("div",{staticClass:"actionBtn"},[s("button",{on:{click:t.open1}},[t._v("Message")])])])])]),s("div",{staticClass:"card"},[t._m(6),s("div",{staticClass:"content"},[s("div",{staticClass:"detalis"},[t._m(7),t._m(8),s("div",{staticClass:"actionBtn"},[s("button",{on:{click:t.open2}},[t._v("Message")])])])])]),s("div",{staticClass:"card"},[t._m(9),s("div",{staticClass:"content"},[s("div",{staticClass:"detalis"},[t._m(10),t._m(11),s("div",{staticClass:"actionBtn"},[s("button",{on:{click:t.open3}},[t._v("Message")])])])])]),s("div",{staticClass:"card"},[t._m(12),s("div",{staticClass:"content"},[s("div",{staticClass:"detalis"},[t._m(13),t._m(14),s("div",{staticClass:"actionBtn"},[s("button",{on:{click:t.open4}},[t._v("Message")])])])])]),s("div",{staticClass:"card"},[t._m(15),s("div",{staticClass:"content"},[s("div",{staticClass:"detalis"},[t._m(16),t._m(17),s("div",{staticClass:"actionBtn"},[s("button",{on:{click:t.open5}},[t._v("Message")])])])])])])},$=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"imgbx"},[s("img",{attrs:{src:e(6267),alt:""}})])},function(){var t=this,s=t._self._c;return s("h2",[t._v("原始农业时代为初始阶段"),s("br"),s("span",[t._v("大部分工具皆为石器")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"data"},[s("h3",[t._v("170万年前"),s("br"),s("span",[t._v("Year")])]),s("h3",[t._v("————"),s("br"),s("span",[t._v("Post")])]),s("h3",[t._v("公元前21世纪"),s("br"),s("span",[t._v("Year")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"imgbx"},[s("img",{attrs:{src:e(1612),alt:""}})])},function(){var t=this,s=t._self._c;return s("h2",[t._v("夏商西周时期初步发展"),s("br"),s("span",[t._v("拥有木质农具以及青铜器")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"data"},[s("h3",[t._v("公元前21世纪"),s("br"),s("span",[t._v("Year")])]),s("h3",[t._v("————"),s("br"),s("span",[t._v("Post")])]),s("h3",[t._v("公元前770"),s("br"),s("span",[t._v("Year")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"imgbx"},[s("img",{attrs:{src:e(8489),alt:""}})])},function(){var t=this,s=t._self._c;return s("h2",[t._v("春秋战国时期"),s("br"),s("span",[t._v("划时代的铁质农具出现")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"data"},[s("h3",[t._v("公元前770"),s("br"),s("span",[t._v("Year")])]),s("h3",[t._v("————"),s("br"),s("span",[t._v("Post")])]),s("h3",[t._v("公元前221"),s("br"),s("span",[t._v("Year")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"imgbx"},[s("img",{attrs:{src:e(1770),alt:""}})])},function(){var t=this,s=t._self._c;return s("h2",[t._v(" 秦汉至隋、唐、五代时期"),s("br"),s("span",[t._v("铁质农具进一步发展，铁犁牛耕广泛应用")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"data"},[s("h3",[t._v("公元277"),s("br"),s("span",[t._v("Year")])]),s("h3",[t._v("————"),s("br"),s("span",[t._v("Post")])]),s("h3",[t._v("公元299"),s("br"),s("span",[t._v("Year")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"imgbx"},[s("img",{attrs:{src:e(9511),alt:""}})])},function(){var t=this,s=t._self._c;return s("h2",[t._v(" 秦汉至隋、唐、五代时期"),s("br"),s("span",[t._v("铁质农具进一步发展，铁犁牛耕广泛应用")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"data"},[s("h3",[t._v("公元277"),s("br"),s("span",[t._v("Year")])]),s("h3",[t._v("————"),s("br"),s("span",[t._v("Post")])]),s("h3",[t._v("公元299"),s("br"),s("span",[t._v("Year")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"imgbx"},[s("img",{attrs:{src:e(3176),alt:""}})])},function(){var t=this,s=t._self._c;return s("h2",[t._v("现代21世纪时期"),s("br"),s("span",[t._v("科技蓬勃发展，智能农业形成")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"data"},[s("h3",[t._v("公元277"),s("br"),s("span",[t._v("Year")])]),s("h3",[t._v("————"),s("br"),s("span",[t._v("Post")])]),s("h3",[t._v("公元299"),s("br"),s("span",[t._v("Year")])])])}],k={methods:{open(){this.$alert("原始农业时代，正是农业发展的初始阶段，由于耕作方法、耕种工具仍未成熟，这个时候的农业并不发达，采集、狩猎仍占主要地位。后来，为获取更多的食物来源，满足生存需要，先民们除了采集、狩猎，也开始进行耕作种植。这个时期的耕作方法为刀耕火种，采用的工具是最开始采集狩猎的工具，后来渐渐用木棒、石块、兽骨等材质陆续创造出了一些最原始的农具：他们用石斧或砍斫器砍倒树木，放火烧掉；再用尖木棒松土，播种；收获时，用石刀来掐穗。慢慢地便发展为出现最早的农具:石斧、石刀、砍斫器、石镰等。","原始农业时代",{confirmButtonText:"确定",callback:t=>{this.$message({type:"info",message:`action: ${t}`})}})},open1(){this.$alert("到了夏代，农业工具相较最开始时，逐渐完善并有初步发展。商朝时期，青铜铸造技术发达，也出现有青铜农具，但其主要是用于铸造兵器、祭祀用的礼器。又因为青铜器是权力和身份的象征,仅供王公贵族使用,普通老百姓是不允许使用的。同时青铜器冶炼技术复杂，且生产成本较高，硬度较低，不适于制作农具，所以商周时期的青铜农具数量较少，仅在极少部分地区出现。这个时期，石斧、石刀、石铲被更广泛使用，同时还出现了耒耜。——————耒耜是神农氏发明的一种农具，木质制成，由“耒”和“耜”两部分组成，耒是耒耜的柄, 耒是一根尖头木棍加上一段短横梁，耜是耒耜下端的起土部分。使用时把尖头插入土壤, 然后用脚踩横梁使木棍深入, 便可轻松挖土铲土，提高了翻整土地、播种庄稼的效率。","夏商西周时期",{confirmButtonText:"确定",callback:t=>{this.$message({type:"info",message:`action: ${t}`})}})},open2(){this.$alert("春秋战国时期，冶铁业兴起，铁制农具开始出现并逐渐代替石制、木制农具，成为农业生产的主要工具，这个时期主要的农业生产方式为铁犁牛耕，铁农具和牛耕被投入到农业生产中。当时的铁农具种类有锸、锄、耙、镢、犁等。铁制农具极大地推动了农业生产力的发展，促进社会进步，在我国农业科技史和农业生产工具发展史上引起了巨大变革，同时加速了奴隶制社会的瓦解，是一种划时代的农业工具。——————该图为铁耙为整地农具，主要作用是除杂草、碎石块、平高低、掩肥料，以便播种，利于农作物的生长。耙主要用于起土破土之时，可横向安装手柄。根据齿的多少，耙可分为二齿、三齿以及五齿耙三种。耙的大量使用正是精耕细作技术发展的反映。","春秋战国时期",{confirmButtonText:"确定",callback:t=>{this.$message({type:"info",message:`action: ${t}`})}})},open3(){this.$alert("秦汉以来，冶铁业进一步发展，铁农具种类更加丰富完善。在当时，铁犁牛耕的生产方式被进一步广泛运用，西汉时期，政府曾在全国设立49处“铁官”管理冶铁生产。由于冶铁和炼钢技术的进步、生产率的提高，既提高了铁器的质量，也降低了铁器的成本，因而汉代的铁农具就非常普及。在当时，除西南部分地区，铁农具的使用已在全国大范围普及。铁农具的广泛使用是汉代农业生产力提高的重要标志之一。而在后来，汉代出现的耧车、唐代出现的曲辕犁，更是这一时期农具上的重要发明。——————耧车是汉代农具上的一新发明，耧车又称耧犁，由耧斗和耧足组成，由人或牲畜牵引，下端有3个耧脚，即3个开沟器，中间装有盛贮种子的漏斗。在播种时用牛拉车，即可边开沟边播种，其工作原理相当于播种机，只需一人一牲畜即可操作。耧车对提高播种质量与播种速度，有着重要作用。这一时期播种耧车的出现，是农业生产上的一个重大进步。","秦汉至隋、唐、五代时期",{confirmButtonText:"确定",callback:t=>{this.$message({type:"info",message:`action: ${t}`})}})},open4(){this.$alert("秦汉以来，冶铁业进一步发展，铁农具种类更加丰富完善。在当时，铁犁牛耕的生产方式被进一步广泛运用，西汉时期，政府曾在全国设立49处“铁官”管理冶铁生产。由于冶铁和炼钢技术的进步、生产率的提高，既提高了铁器的质量，也降低了铁器的成本，因而汉代的铁农具就非常普及。在当时，除西南部分地区，铁农具的使用已在全国大范围普及。铁农具的广泛使用是汉代农业生产力提高的重要标志之一。而在后来，汉代出现的耧车、唐代出现的曲辕犁，更是这一时期农具上的重要发明。——————该图为曲辕犁，早在汉代，耕犁便已基本定形，但汉代的犁是长直辕犁，耕地时回头转弯不够灵活，起土费力，效率也不高。唐代后期，劳动人民发明了曲辕犁，构造上，曲辕犁将以往耕犁由直辕形式变成了曲辕形式，同时增加了犁壁、犁评、犁盘。曲辕的形式改变了耕作者的用力方式，劳作时更加省力；犁壁位于犁铲上方，可用于翻土；犁评位于犁箭上方，通过调整犁箭高度来调整耕田的深度；犁盘位于犁最前端，用于拉接牛轭，便于牛转身，可省畜力。同时曲辕犁设计精巧，辕和犁梢的曲线使造型富有变化，给人以动态感，具有一定的美感。曲辕犁的发明提高了耕作效率，促进农业生产，也反映了中华民族独特的创造力。","秦汉至隋、唐、五代时期",{confirmButtonText:"确定",callback:t=>{this.$message({type:"info",message:`action: ${t}`})}})},open5(){this.$alert("现代农业是在现代工业和现代科学技术基础上发展起来的农业，是萌发于资本主义工业化时期，而在第二次世界大战以后才形成的发达农业。其主要特征是广泛地运用现代科学技术，由顺应自然变为自觉地利用自然和改造自然，由凭借传统经验变为依靠科学，成为科学化的农业，使其建立在植物学、动物学、化学、物理学等科学高度发展的基础上；把工业部门生产的大量物质和能量投入到农业生产中，以换取大量农产品，成为工业化的农业；农业生产走上了区域化、专业化的道路，由自然经济变为高度发达的商品经济，成为商品化、社会化的农业。农具大部分已经由科学产物替代","现代21世纪时期",{confirmButtonText:"确定",callback:t=>{this.$message({type:"info",message:`action: ${t}`})}})}}},w=k,O=(0,c.A)(w,S,$,!1,null,null,null),B=O.exports,T=function(){var t=this;t._self._c;return t._m(0)},j=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"scroller"},[s("ol",[s("li",{staticClass:"obs",staticStyle:{"--bg":"url(https://spaceholder.cc/i/600x800?1)"}},[s("h2",[t._v("新石器时代")]),s("p",[t._v(" 黍、稷、粟、稻(以黍稷为主)“稷为五谷之长。故陶唐之世，名农官为后稷。其祀五谷之神，与社相 配，亦以程为名。以五谷不可遍祭，祭其长以该之。”(《尔雅翼》)广种薄收，产量很低 ")])]),s("li",{staticStyle:{"--bg":"url(https://spaceholder.cc/i/600x800?2)"}},[s("h2",[t._v("夏商西周")]),s("p",[t._v(" 黍、稷、粟、麻、菽、麦、稻.(黍稷成为最主要粮食)甲骨文黍出现300多次。稷出现40多次。《诗经》 中提到的粮食作物也以黍(28次)稷(10次)为多：“黍稷重稷，禾麻菽麦。”(《诗经·脚风·七月》)“有稷有黍。有稻有柜。”(《诗经·鲁颂·圈宫》)耕作比较粗放，产量仍不高 ")])]),s("li",{staticStyle:{"--bg":"url(https://spaceholder.cc/i/600x800?3)"}},[s("h2",[t._v("春秋时期")]),s("p",[t._v(" 粟、菽：乘、稷、麦、稻、麻(粟、菽成为最主要粮食)《管子·重令》:“菽粟不足，末生不禁，民必有饥饿之色”《墨子：尚贤中》:“贤者之治色也，蚤出莫入，聚菽粟，是以菽粟多而民足乎食：”《而子·尽心章句上》:“圣人治天下，使菽粟如水火，”水稻种植在黄河流域有进一出发展，《周礼·夏官·职方氏》提到南方扬 州和荆州“其谷宜稻”,并指出豫州、青州、并州等地也可以种稻，说明河南、山东、河北等地当时都已种植水稻。 平均亩产每亩134多斤1s汉书·食货志》:“岁收亩一石半”),《苟子·富国》:“今是土之生五谷也，人善治之，则亩数盆”。西门豹治邺时 “亩收一锺”(《论衡·率性》),一锺约合120市斤，可见当时单产最高可 达400斤左右 ")])]),s("li",{staticStyle:{"--bg":"url(https://spaceholder.cc/i/600x800?4)"}},[s("h2",[t._v("秦，汉")]),s("p",[t._v(" 粟、麦、菽、稻、黍、稷、麻、高粱，(粟、麦、豆、稻、黍成为五谷，以粟麦为首)发明穗选法育种技术“侯熟可获，择穗大强者，斩，束，立场之高燥处，曝使极燥……藏以 瓦器竹器，顺时种之，则收常倍”(《汜胜之书》)。东汉时发明水稻育秧移栽新技术：《四民月令》:“五月……可别稻。”别 稻即移栽。平均每亩产量约140斤左右《淮南子·主术训》:“中田之获，卒岁之收，不过亩四石. ” 单产最高可达每亩三四百斤：《汜胜之书》:“得时之和，适地之宜，田虽薄恶，收可亩十石。” ")])]),s("li",{staticStyle:{"--bg":"url(https://spaceholder.cc/i/600x800?5)"}},[s("h2",[t._v("三国魏晋南北朝")]),s("p",[t._v(' 粟、麦、稻、豆、黍、稷、高梁(以粟、麦、稻为主要粮食)北方旱作物向南方扩大种植：“南徐、兖、豫及扬州、浙江西属郡，自 今悉督种麦，以助阙乏”(《宋书·文帝纪》)。水稻种植进一步发展。发 明烤田技术：“薛讫、决去水，曝根令坚……将熟又去水，霜降获之”(《齐民要术·水稻》) 形成了一套完整的选育良种的制度和措施建立种子田，实行单选、单晒、单播、单收， 单存，以防混杂，保持良种纯度：“常岁岁别收，选好穗 纯色者，劁刈高悬之，至春治取别种，以拟明年种子"(《齐民要术·收种》) 平均每亩产量估计约135斤左右，单产最高可达每亩390斤左右：“凡美田之法，绿豆为上……为春谷田，则亩收十石”(《齐民要术·耕田》)稻田最高 达每亩576斤：“良田极膏腴者， 一亩二十斛”(《太平御览》卷 821)。 ')])]),s("li",{staticStyle:{"--bg":"url(https://spaceholder.cc/i/600x800?6)"}},[s("h2",[t._v("隋唐")]),s("p",[t._v(" 粟、稻、麦、黍、稷、豆、高粱 (粟、稻、麦成为主要粮食)。杜甫《忆昔》诗：“忆昔开 元全盛日，小邑犹藏万家室稻米流脂粟米白 . 公私仓廪 俱丰实……“说明稻米的地位已超过小麦、与粟并驾齐驱 这是江南经济发展 . 水 稻产量提高的结果 平均产量每亩约140斤左右《唐会要》卷89《疏凿利》:“……亩产一锺。” ")])]),s("li",{staticStyle:{"--bg":"url(https://spaceholder.cc/i/600x800?7)"}},[s("h2",[t._v("宋元")]),s("p",[t._v(" 稻、麦、粟、黍、豆、高槃 (水稻已成为首位粮食作物 民谚：“苏湖熟，天下足”。“苏常熟，天下足”)宋朝政府向南方推广粟、麦、黍、豆等旱作物，向北方推广水稻种植 “诏江南两浙、荆、广、岭南、福建诸州长吏劝民益种诸谷，江北诸州 亦令就水广种粳稻，并免其租。”(《宋史·食货志》)推广早熟品种占城稻：“大中祥符五年遣使福建取占城禾分给江淮两渐 漕，并出种法令择民田之富者种之”(《宋史·食货志》) 江南水稻种植发达、平均产量约每亩220斤左右。“亩收三石或二石…… 以二石为中”(《古今考》)。 ")])]),s("li",{staticStyle:{"--bg":"url(https://spaceholder.cc/i/600x800?8)"}},[s("h2",[t._v("明清")]),s("p",[t._v(" 稻、麦、粟、稷、高梁、玉米、甘薯 稻已占绝对优势“今天下育民 人者，稻居什七，而来、牟、黍、稷居什三”(《天工开物>) 从明代万 历年间，由国外引进玉米，甘薯，清代引进马铃薯 至清代玉米，甘薯成为主粮之一 明代发明小麦移裁新技术：“若八月初先下麦种，候冬垦田移种，每科十五六根，照式浇两次又撒牛壅……干壮麦粗·倍获厚收”(《沈氏农书》) 明代平均产量估计为每亩250斤。清代平均产量估计为每亩280 斤。 明清时期最高单产达七八百斤“(浙江桐乡)田极熟，米每亩三石…… 下路湖田，有亩收四五石者”(《补农书》)折合成现在的亩可收674-818斤稻谷，若按五石米折算，则高达1123斤稻谷。 ")])])])])}],L={},Y=(0,c.A)(L,T,j,!1,null,null,null),P=Y.exports;a["default"].use(h.A);const M=new h.A({routes:[{path:"/",component:v},{path:"/chating",component:y},{path:"/Hello",component:v},{path:"/farmtools",component:B},{path:"/my",component:P}]});var A=M,F=e(9143),D=e.n(F);a["default"].use(D()),new a["default"]({el:"#app",render:t=>t(d),router:A}).$mount("#app")},6267:function(t,s,e){t.exports=e.p+"img/001.0b1c9bd0.jpg"},1612:function(t,s,e){t.exports=e.p+"img/002.09c3550f.jpg"},8489:function(t,s,e){t.exports=e.p+"img/003.0b310ad5.jpg"},1770:function(t,s,e){t.exports=e.p+"img/004.97ebb10b.jpg"},9511:function(t,s,e){t.exports=e.p+"img/005.6bc953f8.jpg"},3176:function(t,s,e){t.exports=e.p+"img/006.6289c836.jpg"}},s={};function e(a){var i=s[a];if(void 0!==i)return i.exports;var n=s[a]={id:a,loaded:!1,exports:{}};return t[a].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}e.m=t,function(){e.amdO={}}(),function(){var t=[];e.O=function(s,a,i,n){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],n=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&n||r>=n)&&Object.keys(e.O).every((function(t){return e.O[t](a[c])}))?a.splice(c--,1):(o=!1,n<r&&(r=n));if(o){t.splice(u--,1);var l=i();void 0!==l&&(s=l)}}return s}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,i,n]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){e.p=""}(),function(){var t={524:0};e.O.j=function(s){return 0===t[s]};var s=function(s,a){var i,n,r=a[0],o=a[1],c=a[2],l=0;if(r.some((function(s){return 0!==t[s]}))){for(i in o)e.o(o,i)&&(e.m[i]=o[i]);if(c)var u=c(e)}for(s&&s(a);l<r.length;l++)n=r[l],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(u)},a=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=e.O(void 0,[504],(function(){return e(8841)}));a=e.O(a)})();
//# sourceMappingURL=app.9aa92108.js.map