(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-986727fe"],{"259a":function(e,t,c){"use strict";var a=c("b11b");c.n(a).a},"8ae9":function(e,t,c){"use strict";c.r(t);var a=c("cebc"),n=c("2f62"),o=c("ce96"),s={computed:Object(a.a)({},Object(n.b)({account:"account"})),methods:{copyToClipboard:function(){var e=this.$el.querySelector(".address");e.select(),document.execCommand("copy"),e.select(),o.d.responseHandler("Copied!",o.d.INFO)}}},r=(c("259a"),c("2877")),d=Object(r.a)(s,function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"receive-currency-container page-container"},[c("div",{staticClass:"contents"},[c("qrcode",{attrs:{value:e.account.address,options:{size:160}}}),c("textarea",{staticClass:"address",attrs:{readonly:""},domProps:{value:e.account.address}}),c("button",{staticClass:"copy-button",on:{click:e.copyToClipboard}},[e._v("Copy")])],1)])},[],!1,null,"00086d06",null).exports;c.d(t,"default",function(){return d})},b11b:function(e,t,c){}}]);