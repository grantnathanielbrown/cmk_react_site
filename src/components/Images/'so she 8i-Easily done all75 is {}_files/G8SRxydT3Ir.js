if (self.CavalryLogger) { CavalryLogger.start_js(["\/HKqJ"]); }

__d("JSLogger",["lowerFacebookDomain"],(function(a,b,c,d,e,f){__p&&__p();var g={MAX_HISTORY:500,counts:{},categories:{},seq:0,pageId:(Math.random()*2147483648|0).toString(36),forwarding:!1};function h(a){if(a=="/"||a.indexOf("/",1)<0)return!1;var b=/^\/(v\d+\.\d\d?|head)\//.test(a);return b?/^\/(dialog|plugins)\//.test(a.substring(a.indexOf("/",1))):/^\/(dialog|plugins)\//.test(a)}function i(b){b instanceof Error&&a.ErrorUtils&&(b=a.ErrorUtils.normalizeError(b));try{return JSON.stringify(b)}catch(a){return"{}"}}function j(a,b,c){g.counts[a]||(g.counts[a]={}),g.counts[a][b]||(g.counts[a][b]=0),c=c==null?1:Number(c),g.counts[a][b]+=isFinite(c)?c:0}g.logAction=function(a,b,c){__p&&__p();if(this.type=="bump")j(this.cat,a,b);else if(this.type=="rate")b&&j(this.cat,a+"_n",c),j(this.cat,a+"_d",c);else{c={cat:this.cat,type:this.type,event:a,data:b!=null?i(b):null,date:Date.now(),seq:g.seq++};g.head=g.head?g.head.next=c:g.tail=c;while(g.head.seq-g.tail.seq>g.MAX_HISTORY)g.tail=g.tail.next;return c}};function c(c){__p&&__p();if(!g.categories[c]){g.categories[c]={};var d=function(d){__p&&__p();var e={cat:c,type:d};g.categories[c][d]=function(){__p&&__p();g.forwarding=!1;var c=null;if(b("lowerFacebookDomain").isValidDocumentDomain())return;c=g.logAction;if(h(location.pathname))g.forwarding=!1;else try{c=a.top.require("JSLogger")._.logAction,g.forwarding=c!==g.logAction}catch(a){}c&&c.apply(e,arguments)}};d("debug");d("log");d("warn");d("error");d("bump");d("rate")}return g.categories[c]}function d(a,b){var c=[];for(var b=b||g.tail;b;b=b.next)if(!a||a(b)){var d={type:b.type,cat:b.cat,date:b.date,event:b.event,seq:b.seq};b.data&&(d.data=JSON.parse(b.data));c.push(d)}return c}e.exports={_:g,DUMP_EVENT:"jslogger/dump",create:c,getEntries:d}}),null);
__d("keyMirror",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){var b={};a instanceof Object&&!Array.isArray(a)||g(0,3387);for(var c in a){if(!Object.prototype.hasOwnProperty.call(a,c))continue;b[c]=c}return b}e.exports=a}),null);
__d("MessengerPage",["EventEmitter","EventEmitterWithHolding","EventHolder","keyMirror","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";a={Events:b("keyMirror")({APP_MOUNTED:null,DATA_INITIALIZED:null,JS_LOADED:null}),addRetroactiveListener:function(a,b){return g.addRetroactiveListener(a,b)},emit:function(a){g.emitAndHold(a,b("performanceAbsoluteNow")())},removeCurrentListener:function(){g.removeCurrentListener()}};var g=new(b("EventEmitterWithHolding"))(new(b("EventEmitter"))(),new(b("EventHolder"))());e.exports=a}),null);