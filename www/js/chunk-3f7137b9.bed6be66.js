(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f7137b9"],{"2fc8":function(t,n,e){"use strict";var a=e("94c6"),c=e.n(a);c.a},"325e":function(t,n,e){"use strict";var a=e("3daf1"),c=e.n(a);c.a},"3daf1":function(t,n,e){},4201:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"history-tx-container page-container"},[e("balance-block",{staticClass:"balance-block",attrs:{"curr-symbol":t.currSymbol,balance:t.balance}}),e("history-tx-list",{attrs:{transactions:t.transactions,"tx-loaded":t.txLoaded}})],1)},c=[],s=(e("6b54"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"interface-history-tx"},[t.txLoaded?t._e():e("div",{staticClass:"spinner-container"},[e("i",{staticClass:"fa fa-spin fa-spinner fa-lg"})]),t.txLoaded&&0===t.transactions.length?e("p",{staticClass:"text-center"},[t._v("\n    Transaction history is empty\n  ")]):t.txLoaded?e("ul",{staticClass:"tx-history"},t._l(t.transactions,function(n){return e("li",{key:n.hash},[e("div",{staticClass:"tx-time"},[e("p",[t._v(t._s(t.isReceived(n)?"Received":"Sent"))]),e("p",[t._v(t._s(t.getDate(n)))])]),e("div",[e("span",{staticClass:"tx-value"},[t._v(t._s(t.getValue(n)))]),e("span",{staticClass:"tx-curr"},[t._v(t._s(" "+t.getCurrSymbol(n)))])])])}),0):t._e()])}),i=[],o=e("cebc"),r=e("2f62"),l={props:{transactions:{type:Array,default:function(){return[]}},txLoaded:{type:Boolean,default:function(){return!1}}},computed:Object(o["a"])({},Object(r["b"])({account:"account"})),methods:{isReceived:function(t){return t.to.toUpperCase()===this.account.address.toUpperCase()},getDate:function(t){return new Date(1e3*t.timestamp).toLocaleString()},getValue:function(t){return t.value},getCurrSymbol:function(t){return t.symbol}}},u=l,d=(e("2fc8"),e("2877")),f=Object(d["a"])(u,s,i,!1,null,"3e196d17",null),p=f.exports,b=e("ce96"),v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mobile-address-block"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"top-block"},[e("div",{staticClass:"block-title"},[t._v(t._s(t.$t("common.balance")))])]),e("div",{staticClass:"bottom-block"},[e("p",{},[t._v("\n        "+t._s(t.balance)+"\n        "),e("span",[t._v(t._s(t.balance?t.currSymbol:""))])])])])])},_=[],h={props:{getBalance:{type:Function,default:function(){}},balance:{type:String,default:function(){return""}},currSymbol:{type:String,default:function(){return""}}}},x=h,y=(e("325e"),Object(d["a"])(x,v,_,!1,null,"1395b80c",null)),m=y.exports,g={components:{"history-tx-list":p,"balance-block":m},props:{getBalance:{type:Function,default:function(){}},getTxs:{type:Function,default:function(){}},currSymbol:{type:String,default:function(){return""}}},data:function(){return{transactions:[],txLoaded:!1,balance:""}},computed:{},created:function(){this._getTxs(),this._getBalance()},methods:{_getTxs:function(){var t=this;this.getTxs().then(function(n){t.txLoaded=!0,t.transactions=n}).catch(function(n){t.txLoaded=!0,b["d"].responseHandler(n,b["d"].ERROR)})},_getBalance:function(){var t=this;this.getBalance().then(function(n){t.balance=n.toString()}).catch(function(t){b["d"].responseHandler(t,b["d"].ERROR)})}}},C=g,S=(e("7e15"),Object(d["a"])(C,a,c,!1,null,"c82630a0",null)),k=S.exports;e.d(n,"default",function(){return k})},"7e15":function(t,n,e){"use strict";var a=e("bf91"),c=e.n(a);c.a},"94c6":function(t,n,e){},bf91:function(t,n,e){}}]);
//# sourceMappingURL=chunk-3f7137b9.bed6be66.js.map