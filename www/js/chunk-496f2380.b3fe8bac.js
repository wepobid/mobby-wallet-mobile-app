(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-496f2380"],{"5b93":function(e,t,c){"use strict";var n=c("8a3e");c.n(n).a},"8a3e":function(e,t,c){},"8ae9":function(e,t,c){"use strict";c.r(t);var n=c("cebc"),a=c("2f62"),o={computed:Object(n.a)({},Object(a.b)({account:"account"})),methods:{copyToClipboard:function(){var e=document.querySelector(".address");e.select(),document.execCommand("copy"),e.select()}}},s=(c("5b93"),c("2877")),r=Object(s.a)(o,function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"receive-currency-container page-container"},[c("div",{staticClass:"contents"},[c("qrcode",{attrs:{value:e.account.address,options:{size:160}}}),c("textarea",{staticClass:"address",attrs:{readonly:""},domProps:{value:e.account.address}}),c("p",{staticClass:"copy-button prevent-user-select",on:{click:e.copyToClipboard}},[e._v("\n      "+e._s(e.$t("common.copy"))+"\n    ")])],1)])},[],!1,null,"1e1ff62b",null).exports;c.d(t,"default",function(){return r})}}]);