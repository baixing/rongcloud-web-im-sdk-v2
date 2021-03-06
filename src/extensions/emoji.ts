module RongIMLib {
    export class RongIMEmoji {

        static emojis: any[] = [];

        private static emojiFactory: { [s: string]: any } = {
      	"u1F600":{"en":"grinning","zh":"\u72DE\u7B11","tag":"\uD83D\uDE00","bp":"0px 0px"},
      	"u1F601":{"en":"grin","zh":"\u9732\u9F7F\u800C\u7B11","tag":"\uD83D\uDE01","bp":"-22px 0px"},
      	"u1F602":{"en":"joy","zh":"\u6B22\u4E50","tag":"\uD83D\uDE02","bp":"-44px 0px"},
      	"u1F603":{"en":"smile","zh":"\u5FAE\u7B11","tag":"\uD83D\uDE03","bp":"-66px 0px"},
      	"u1F605":{"en":"sweat_smile","zh":"\u8D54\u7B11","tag":"\uD83D\uDE05","bp":"-88px 0px"},
      	"u1F606":{"en":"satisfied","zh":"\u6EE1\u610F","tag":"\uD83D\uDE06","bp":"-110px 0px"},
      	"u1F607":{"en":"innocent","zh":"\u65E0\u8F9C","tag":"\uD83D\uDE07","bp":"-132px 0px"},
      	"u1F608":{"en":"smiling_imp","zh":"\u574F\u7B11","tag":"\uD83D\uDE08","bp":"-154px 0px"},
      	"u1F609":{"en":"wink","zh":"\u7728\u773C","tag":"\uD83D\uDE09","bp":"-176px 0px"},
      	"u1F611":{"en":"expressionless","zh":"\u9762\u65E0\u8868\u60C5","tag":"\uD83D\uDE11","bp":"-198px 0px"},
      	"u1F612":{"en":"unamused","zh":"\u4E00\u8138\u4E0D\u5FEB","tag":"\uD83D\uDE12","bp":"-220px 0px"},
      	"u1F613":{"en":"sweat","zh":"\u6C57","tag":"\uD83D\uDE13","bp":"-242px 0px"},
      	"u1F614":{"en":"pensive","zh":"\u54C0\u601D","tag":"\uD83D\uDE14","bp":"-264px 0px"},
      	"u1F615":{"en":"confused","zh":"\u8FF7\u832B","tag":"\uD83D\uDE15","bp":"-286px 0px"},
      	"u1F616":{"en":"confounded","zh":"\u56F0\u60D1\u7684","tag":"\uD83D\uDE16","bp":"-308px 0px"},
      	"u1F618":{"en":"kissing_heart","zh":"\u4EB2\u4E00\u4E2A","tag":"\uD83D\uDE18","bp":"-330px 0px"},
      	"u1F621":{"en":"rage","zh":"\u6124\u6012","tag":"\uD83D\uDE21","bp":"-352px 0px"},
      	"u1F62D":{"en":"sob","zh":"\u54ED\u6CE3","tag":"\uD83D\uDE2D","bp":"-1826px 0px"},
      	"u1F623":{"en":"persevere","zh":"\u4F7F\u52B2","tag":"\uD83D\uDE23","bp":"-396px 0px"},
      	"u1F624":{"en":"triumph","zh":"\u751F\u6C14","tag":"\uD83D\uDE24","bp":"-418px 0px"},
      	"u1F628":{"en":"fearful","zh":"\u53EF\u6015","tag":"\uD83D\uDE28","bp":"-440px 0px"},
      	"u1F629":{"en":"weary","zh":"\u538C\u5026","tag":"\uD83D\uDE29","bp":"-462px 0px"},
      	"u1F630":{"en":"cold_sweat","zh":"\u51B7\u6C57","tag":"\uD83D\uDE30","bp":"-484px 0px"},
      	"u1F631":{"en":"scream","zh":"\u60CA\u53EB","tag":"\uD83D\uDE31","bp":"-506px 0px"},
      	"u1F632":{"en":"astonished","zh":"\u60CA\u8BB6","tag":"\uD83D\uDE32","bp":"-528px 0px"},
      	"u1F633":{"en":"flushed","zh":"\u5446\u4F4F","tag":"\uD83D\uDE33","bp":"-550px 0px"},
      	"u1F634":{"en":"sleeping","zh":"\u7761\u7720","tag":"\uD83D\uDE34","bp":"-572px 0px"},
      	"u1F635":{"en":"dizzy_face","zh":"\u65AD\u7535\u4E86","tag":"\uD83D\uDE35","bp":"-594px 0px"},
      	"u1F636":{"en":"no_mouth","zh":"\u65E0\u53E3","tag":"\uD83D\uDE36","bp":"-616px 0px"},
      	"u1F637":{"en":"mask","zh":"\u75C5\u4E86","tag":"\uD83D\uDE37","bp":"-638px 0px"},
      	"u1F3A4":{"en":"microphone","zh":"KTV","tag":"\uD83C\uDFA4","bp":"-660px 0px"},
      	"u1F3B2":{"en":"game_die","zh":"\u8272\u5B50","tag":"\uD83C\uDFB2","bp":"-682px 0px"},
      	"u1F3B5":{"en":"musical_note","zh":"\u97F3\u4E50","tag":"\uD83C\uDFB5","bp":"-704px 0px"},
      	"u1F3C0":{"en":"basketball","zh":"\u7BEE\u7403","tag":"\uD83C\uDFC0","bp":"-726px 0px"},
      	"u1F3C2":{"en":"snowboarder","zh":"\u5355\u677F\u6ED1\u96EA","tag":"\uD83C\uDFC2","bp":"-748px 0px"},
      	"u1F3E1":{"en":"house_with_garden","zh":"\u623F\u5B50","tag":"\uD83C\uDFE1","bp":"-770px 0px"},
      	"u1F004":{"en":"mahjong","zh":"\u9EBB\u5C06","tag":"\uD83C\uDC04","bp":"-792px 0px"},
      	"u1F4A1":{"en":"bulb","zh":"\u706F\u6CE1","tag":"\uD83D\uDCA1","bp":"-814px 0px"},
      	"u1F4A2":{"en":"anger","zh":"\u7206\u7B4B","tag":"\uD83D\uDCA2","bp":"-836px 0px"},
      	"u1F4A3":{"en":"bomb","zh":"\u70B8\u5F39","tag":"\uD83D\uDCA3","bp":"-858px 0px"},
      	"u1F4A4":{"en":"zzz","zh":"ZZZ","tag":"\uD83D\uDCA4","bp":"-880px 0px"},
      	"u1F4A9":{"en":"shit","zh":"\u72D7\u5C41","tag":"\uD83D\uDCA9","bp":"-902px 0px"},
      	"u1F4AA":{"en":"muscle","zh":"\u808C\u8089","tag":"\uD83D\uDCAA","bp":"-924px 0px"},
      	"u1F4B0":{"en":"moneybag","zh":"\u94B1\u888B","tag":"\uD83D\uDCB0","bp":"-946px 0px"},
      	"u1F4DA":{"en":"books","zh":"\u4E66\u7C4D","tag":"\uD83D\uDCDA","bp":"-968px 0px"},
      	"u1F4DE":{"en":"telephone_receiver","zh":"\u7535\u8BDD","tag":"\uD83D\uDCDE","bp":"-990px 0px"},
      	"u1F4E2":{"en":"loudspeaker","zh":"\u6269\u97F3\u5668","tag":"\uD83D\uDCE2","bp":"-1012px 0px"},
      	"u1F6AB":{"en":"stop","zh":"\u505C\u6B62","tag":"\uD83D\uDEAB","bp":"-1034px 0px"},
      	"u1F6BF":{"en":"shower","zh":"\u6DCB\u6D74","tag":"\uD83D\uDEBF","bp":"-1056px 0px"},
      	"u1F30F":{"en":"earth_asia","zh":"\u571F","tag":"\uD83C\uDF0F","bp":"-1078px 0px"},
      	"u1F33B":{"en":"sunflower","zh":"\u5411\u65E5\u8475","tag":"\uD83C\uDF3B","bp":"-1100px 0px"},
      	"u1F35A":{"en":"rice","zh":"\u996D","tag":"\uD83C\uDF5A","bp":"-1122px 0px"},
      	"u1F36B":{"en":"chocolate_bar","zh":"\u5DE7\u514B\u529B","tag":"\uD83C\uDF6B","bp":"-1144px 0px"},
      	"u1F37B":{"en":"beers","zh":"\u5564\u9152","tag":"\uD83C\uDF7B","bp":"-1166px 0px"},
        "u270A":{"en":"fist","zh":"\u62F3\u5934","tag":"\u270A","bp":"-2618px 0px"},
      	"u1F44C":{"en":"ok_hand","zh":"\u6CA1\u95EE\u9898","tag":"\uD83D\uDC4C","bp":"-1210px 0px"},
      	"u1F44D":{"en":"1","zh":"1","tag":"\uD83D\uDC4D","bp":"-1232px 0px"},
      	"u1F44E":{"en":"-1","zh":"-1","tag":"\uD83D\uDC4E","bp":"-1254px 0px"},
      	"u1F44F":{"en":"clap","zh":"\u62CD","tag":"\uD83D\uDC4F","bp":"-1276px 0px"},
      	"u1F46A":{"en":"family","zh":"\u5BB6\u5EAD","tag":"\uD83D\uDC6A","bp":"-1298px 0px"},
      	"u1F46B":{"en":"couple","zh":"\u60C5\u4FA3","tag":"\uD83D\uDC6B","bp":"-1320px 0px"},
        "u1F62C":{"en":"grimacing","zh":"\u9B3C\u8138","tag":"\uD83D\uDE2C","bp":"-1804px 0px"},
      	"u1F47C":{"en":"angel","zh":"\u5929\u4F7F","tag":"\uD83D\uDC7C","bp":"-1364px 0px"},
      	"u1F47D":{"en":"alien","zh":"\u5916\u661F\u4EBA","tag":"\uD83D\uDC7D","bp":"-1386px 0px"},
      	"u1F47F":{"en":"imp","zh":"\u6076\u9B54","tag":"\uD83D\uDC7F","bp":"-1408px 0px"},
      	"u1F48A":{"en":"pill","zh":"\u836F","tag":"\uD83D\uDC8A","bp":"-1430px 0px"},
      	"u1F48B":{"en":"kiss","zh":"\u543B","tag":"\uD83D\uDC8B","bp":"-1452px 0px"},
      	"u1F48D":{"en":"ring","zh":"\u6212\u6307","tag":"\uD83D\uDC8D","bp":"-1474px 0px"},
      	"u1F52B":{"en":"gun","zh":"\u67AA","tag":"\uD83D\uDD2B","bp":"-1496px 0px"},
      	"u1F60A":{"en":"blush","zh":"\u8138\u7EA2","tag":"\uD83D\uDE0A","bp":"-1518px 0px"},
      	"u1F60B":{"en":"yum","zh":"\u998B","tag":"\uD83D\uDE0B","bp":"-1540px 0px"},
      	"u1F60C":{"en":"relieved","zh":"\u5B89\u5FC3","tag":"\uD83D\uDE0C","bp":"-1562px 0px"},
      	"u1F60D":{"en":"heart_eyes","zh":"\u8272\u8272","tag":"\uD83D\uDE0D","bp":"-1584px 0px"},
      	"u1F60E":{"en":"sunglasses","zh":"\u58A8\u955C","tag":"\uD83D\uDE0E","bp":"-1606px 0px"},
      	"u1F60F":{"en":"smirk","zh":"\u50BB\u7B11","tag":"\uD83D\uDE0F","bp":"-1628px 0px"},
      	"u1F61A":{"en":"kissing_closed_eyes","zh":"\u63A5\u543B","tag":"\uD83D\uDE1A","bp":"-1650px 0px"},
      	"u1F61C":{"en":"stuck_out_tongue_winking_eye","zh":"\u641E\u602A","tag":"\uD83D\uDE1C","bp":"-1672px 0px"},
      	"u1F61D":{"en":"stuck_out_tongue_closed_eyes","zh":"\u6076\u4F5C\u5267","tag":"\uD83D\uDE1D","bp":"-1694px 0px"},
      	"u1F61E":{"en":"disappointed","zh":"\u5931\u671B\u7684","tag":"\uD83D\uDE1E","bp":"-1716px 0px"},
      	"u1F61F":{"en":"anguished","zh":"\u82E6\u6DA9","tag":"\uD83D\uDE1F","bp":"-1738px 0px"},
      	"u1F62A":{"en":"sleepy","zh":"\u56F0","tag":"\uD83D\uDE2A","bp":"-1760px 0px"},
      	"u1F62B":{"en":"tired_face","zh":"\u6293\u72C2","tag":"\uD83D\uDE2B","bp":"-1782px 0px"},
        "u1F47B":{"en":"ghost","zh":"\u9B3C","tag":"\uD83D\uDC7B","bp":"-1342px 0px"},
        "u1F622":{"en":"cry","zh":"\u54ED","tag":"\uD83D\uDE22","bp":"-374px 0px"},
      	"u1F62F":{"en":"hushed","zh":"\u5BC2\u9759","tag":"\uD83D\uDE2F","bp":"-1848px 0px"},
      	"u1F64A":{"en":"speak_no_evil","zh":"\u4E0D\u8BF4\u8BDD","tag":"\uD83D\uDE4A","bp":"-1870px 0px"},
      	"u1F64F":{"en":"pray","zh":"\u7948\u7977","tag":"\uD83D\uDE4F","bp":"-1892px 0px"},
      	"u1F319":{"en":"moon","zh":"\u6708\u4EAE","tag":"\uD83C\uDF19","bp":"-1914px 0px"},
      	"u1F332":{"en":"evergreen_tree","zh":"\u6811","tag":"\uD83C\uDF32","bp":"-1936px 0px"},
      	"u1F339":{"en":"rose","zh":"\u73AB\u7470","tag":"\uD83C\uDF39","bp":"-1958px 0px"},
      	"u1F349":{"en":"watermelon","zh":"\u897F\u74DC","tag":"\uD83C\uDF49","bp":"-1980px 0px"},
      	"u1F356":{"en":"meat_on_bone","zh":"\u8089","tag":"\uD83C\uDF56","bp":"-2002px 0px"},
      	"u1F366":{"en":"icecream","zh":"\u51B0\u6DC7\u6DCB","tag":"\uD83C\uDF66","bp":"-2024px 0px"},
      	"u1F377":{"en":"wine_glass","zh":"\u9152","tag":"\uD83C\uDF77","bp":"-2046px 0px"},
      	"u1F381":{"en":"gift","zh":"\u793C\u7269","tag":"\uD83C\uDF81","bp":"-2068px 0px"},
      	"u1F382":{"en":"birthday","zh":"\u751F\u65E5","tag":"\uD83C\uDF82","bp":"-2090px 0px"},
      	"u1F384":{"en":"christmas_tree","zh":"\u5723\u8BDE","tag":"\uD83C\uDF84","bp":"-2112px 0px"},
      	"u1F389":{"en":"tada","zh":"\u793C\u82B1","tag":"\uD83C\uDF89","bp":"-2134px 0px"},
      	"u1F393":{"en":"mortar_board","zh":"\u6BD5\u4E1A","tag":"\uD83C\uDF93","bp":"-2156px 0px"},
      	"u1F434":{"en":"horse","zh":"\u9A6C","tag":"\uD83D\uDC34","bp":"-2178px 0px"},
      	"u1F436":{"en":"dog","zh":"\u72D7","tag":"\uD83D\uDC36","bp":"-2200px 0px"},
      	"u1F437":{"en":"pig","zh":"\u732A","tag":"\uD83D\uDC37","bp":"-2222px 0px"},
      	"u1F451":{"en":"crown","zh":"\u738B\u51A0","tag":"\uD83D\uDC51","bp":"-2244px 0px"},
      	"u1F484":{"en":"lipstick","zh":"\u53E3\u7EA2","tag":"\uD83D\uDC84","bp":"-2266px 0px"},
      	"u1F494":{"en":"broken_heart","zh":"\u4F24\u5FC3","tag":"\uD83D\uDC94","bp":"-2288px 0px"},
      	"u1F525":{"en":"fire","zh":"\u706B\u4E86","tag":"\uD83D\uDD25","bp":"-2310px 0px"},
      	"u1F556":{"en":"time","zh":"\u65F6\u95F4","tag":"\uD83D\uDD56","bp":"-2332px 0px"},
      	"u1F648":{"en":"see_no_evil","zh":"\u4E0D\u770B","tag":"\uD83D\uDE48","bp":"-2354px 0px"},
      	"u1F649":{"en":"hear_no_evil","zh":"\u4E0D\u542C","tag":"\uD83D\uDE49","bp":"-2376px 0px"},
      	"u1F680":{"en":"rocket","zh":"\u706B\u7BAD","tag":"\uD83D\uDE80","bp":"-2398px 0px"},
      	"u2B50":{"en":"star","zh":"\u661F\u661F","tag":"\u2B50","bp":"-2420px 0px"},
      	"u23F0":{"en":"alarm_clock","zh":"\u949F\u8868","tag":"\u23F0","bp":"-2442px 0px"},
      	"u23F3":{"en":"hourglass_flowing_sand","zh":"\u6C99\u6F0F","tag":"\u23F3","bp":"-2464px 0px"},
      	"u26A1":{"en":"zap","zh":"\u95EA\u7535","tag":"\u26A1","bp":"-2486px 0px"},
      	"u26BD":{"en":"soccer","zh":"\u8DB3\u7403","tag":"\u26BD","bp":"-2508px 0px"},
      	"u26C4":{"en":"snowman","zh":"\u96EA\u4EBA","tag":"\u26C4","bp":"-2530px 0px"},
      	"u26C5":{"en":"partly_sunny","zh":"\u591A\u4E91","tag":"\u26C5","bp":"-2552px 0px"},
      	"u261D":{"en":"point_up","zh":"\u7B2C\u4E00","tag":"\u261D","bp":"-2574px 0px"},
      	"u263A":{"en":"relaxed","zh":"\u8F7B\u677E","tag":"\u263A","bp":"-2596px 0px"},
      	"u1F44A":{"en":"punch","zh":"\u62F3","tag":"\uD83D\uDC4A","bp":"-1188px 0px"},
      	"u270B":{"en":"hand","zh":"\u624B","tag":"\u270B","bp":"-2640px 0px"},
      	"u270C":{"en":"v","zh":"v","tag":"\u270C","bp":"-2662px 0px"},
      	"u270F":{"en":"pencil2","zh":"\u7B14","tag":"\u270F","bp":"-2684px 0px"},
      	"u2600":{"en":"sunny","zh":"\u6674\u6717","tag":"\u2600","bp":"-2706px 0px"},
      	"u2601":{"en":"cloud","zh":"\u4E91","tag":"\u2601","bp":"-2728px 0px"},
      	"u2614":{"en":"umbrella","zh":"\u4F1E","tag":"\u2614","bp":"-2750px 0px"},
      	"u2615":{"en":"coffee","zh":"\u5496\u5561","tag":"\u2615","bp":"-2772px 0px"},
      	"u2744":{"en":"snowflake","zh":"\u96EA\u82B1","tag":"\u2744","bp":"-2794px 0px"}};

        private static regExpTag: any;

        private static regExpName: any;

        private static size: number = 22;

        private static url: string = "http://cdn.ronghub.com/css-sprite_bg.png";
        /**
         * 是否支持高清屏幕
         */
        private static pixelRatio: number = parseFloat(window.devicePixelRatio + "") || 1;
        /**
         * 判断是否支持emoji
         */
        private static supportEmoji: boolean = false;

        /**
         * 初始化CSS
         */
        private static initCSS() {
            if (!document.createStyleSheet) {
                var head = document.getElementsByTagName("head")[0] || document.createElement("head");
                var style = document.createElement("style");
                style.type = "text/css";
                style.innerHTML = ".RC_Expression {width:" + this.size + "px;height:" + this.size + "px;background-image:url(" + this.url + ");display:inline-block}";
                head.appendChild(style);
            }
        }
        private static createBTag(position: string): any {
            var e = document.createElement("b");
            if (document.createStyleSheet) {
                e.style.width = this.size + "px";
                e.style.height = this.size + "px";
                e.style.backgroundImage = "url(" + this.url + ")";
                e.style.display = "inline";
                e.style.display = "inline-block";
                e.style.zoom = "1";
                e.style.backgroundPosition = position;
            } else {
                e.className = "RC_Expression";
                e.style.backgroundPosition = position;
            }
            return e;
        }
        private static createSpan(emojiObj: any): any {
            var str = "", span = document.createElement("span"), p = document.createElement("span");
            if (this.supportEmoji) {
                span.textContent = emojiObj.tag;
            } else {
                var img = this.createBTag(emojiObj.bp);
                span.appendChild(img);
            }
            str = '<span name = "' + emojiObj.en + '" class="RongIMExpression_' + emojiObj.en.substring(1, emojiObj.en.length) + '">' + span.innerHTML + '</span>';
            span.setAttribute("class", "RongIMExpression_" + emojiObj.en.substring(1, emojiObj.en.length));
            span.setAttribute("name", "[" + emojiObj.zh + "]");
            p.appendChild(span);
            return p;
        }
        private static calculateUTF(d: any) {
            var me = this;
            if (61440 < d.charCodeAt(0)) {
                var b = me.emojiFactory[escape(d).replace("%u", "u1")];
                if (b) return b.tag;
            }
            return d;
        }
        static init(emoji?:any) {
            var me = this;
            if (emoji) {
			         me.emojiFactory = emoji.dataSource;
			         me.url = emoji.url;
            }
            if (me.pixelRatio > 1) {
                me.size = 48;
                //TODO 这是高清URL
            }
            if (!emoji && navigator.userAgent.match(/Mac\s+OS/i)) {
                me.supportEmoji = true;
            }
            me.initCSS();
            var regExp = new RegExp("%", "g"), tagStr = "", nameStr = "";
            for (var key in me.emojiFactory) {
                tagStr += escape(me.emojiFactory[key].tag) + "|";
                nameStr += escape(me.emojiFactory[key].zh) + "|";
                RongIMEmoji.emojis.push(me.createSpan(me.emojiFactory[key]));
            }
            tagStr = tagStr.substring(0, tagStr.length - 1);
            tagStr = tagStr.replace(regExp, function(x) { return "\\"; });
            me.regExpTag = new RegExp("(" + tagStr + ")", "g");
            nameStr = nameStr.substring(0, nameStr.length - 1);
            nameStr = nameStr.replace(regExp, function(x) { return "\\"; });
            me.regExpName = new RegExp("(" + nameStr + ")", "g");
        }
        static emojiToSymbol(str: string) {
            var me = this;
            str = str.replace(/[\uf000-\uf700]/g, function(em) {
                return me.calculateUTF(em) || em;
            });
            return str.replace(me.regExpTag, function(em) {
                for (var key in me.emojiFactory) {
                    if (me.emojiFactory[key].tag == em) {
                        return "[" + me.emojiFactory[key].zh + "]";
                    }
                }
            });
        }
        /**
         * 获取Emoji对象 发送消息使用
         * @param  {string}     name  emoji名称
         */
        static symbolToEmoji(str: string): string {
            var me = this;
            return str.replace(/\[.+?\]/g, function(s) {
                var temp = s.slice(1, s.length - 1);
                if (me.regExpName.test(temp)) {
                    return temp.replace(me.regExpName, function(zh) {
                        for (var key in me.emojiFactory) {
                            if (me.emojiFactory[key].zh == zh) {
                                return me.emojiFactory[key].tag;
                            }
                        }
                    });
                } else {
                    return "[" + temp + "]";
                }
            });
        }
        /**
         * @param  {string} str 字符串
         */
        static symbolToHTML(str: string): string {
            var em = this.symbolToEmoji(str);
            return this.emojiToHTML(em);
        }
        /**
         * 转换字符串中的emoji 接收消息使用
         * @param  {string} str      包含emoji的字符串
         */
        static emojiToHTML(str: string) {
            var me = this;
            str = str.replace(/[\uf000-\uf700]/g, function(em) {
                return me.calculateUTF(em) || em;
            });
            return str.replace(me.regExpTag, function(em) {
                var span: any;
                for (var key in me.emojiFactory) {
                    if (me.emojiFactory[key].tag == em) {
                        span = me.createSpan(me.emojiFactory[key]);
                        break;
                    }
                }
                return span.innerHTML;
            });
        }
    }
    //兼容AMD CMD
    if ("function" === typeof require && "object" === typeof module && module && module.id && "object" === typeof exports && exports) {
        module.exports = RongIMEmoji;
    } else if ("function" === typeof define && define.amd) {
        define("RongIMEmoji", [], function() {
            return RongIMEmoji;
        });
    }
}
