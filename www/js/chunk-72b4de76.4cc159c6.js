(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-72b4de76"],{"2afe":function(t,e,n){},d6e8:function(t,e,n){"use strict";var a=n("2afe");n.n(a).a},f67c:function(t,e,n){"use strict";n.r(e);var a=n("ce96"),c={methods:{decryptWallet:function(t){var e=this;this.$store.dispatch("decryptWallet",[t]).then(function(){return e.$router.push("/wallets/".concat(t))}).catch(function(t){return a.d.responseHandler(t,a.d.ERROR)})}}},r=(n("d6e8"),n("2877")),o=Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"selection-wallet-container page-container"},[n("h3",{staticClass:"text-center"},[t._v("Wallets")]),n("div",{staticClass:"button-container"},[n("button",{directives:[{name:"touch",rawName:"v-touch",value:function(){return t.decryptWallet("cold")},expression:"() => decryptWallet('cold')"}],staticClass:"mid-round-button-blue-filled"},[t._v("\n      Cold\n    ")]),n("button",{directives:[{name:"touch",rawName:"v-touch",value:function(){return t.decryptWallet("medium")},expression:"() => decryptWallet('medium')"}],staticClass:"mid-round-button-green-filled"},[t._v("\n      Medium\n    ")]),n("button",{directives:[{name:"touch",rawName:"v-touch",value:function(){return t.decryptWallet("hot")},expression:"() => decryptWallet('hot')"}],staticClass:"mid-round-button-green-filled hot"},[t._v("\n      Hot\n    ")])])])},[],!1,null,"02a78caa",null).exports;n.d(e,"default",function(){return o})}}]);