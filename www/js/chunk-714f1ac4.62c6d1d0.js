(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-714f1ac4"],{"27a8":function(t,e,n){"use strict";var a=n("fa97"),r=n.n(a);r.a},"357f":function(t,e,n){"use strict";var a=n("6921"),r=n.n(a);r.a},3914:function(t,e,n){"use strict";var a=n("795b"),r=n.n(a),c=(n("6b54"),n("a4bb")),s=n.n(c),i=(n("96cf"),n("3b8d")),o=n("d225"),u=n("b0b4"),l=n("70c1"),f=n.n(l),d=function(){function t(){Object(o["a"])(this,t),this.apiRoute="https://api.ethplorer.io"}return Object(u["a"])(t,[{key:"_sendReq",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p(2e3);case 2:return t.next=4,fetch(e);case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"get",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,n){var a,r,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a="".concat(this.apiRoute).concat(e).concat(n?"?"+b(n):""),r=new Request(encodeURI(a),{method:"GET"}),t.next=4,this._sendReq(r);case 4:if(c=t.sent,c.ok){t.next=7;break}throw new Error(c.statusText);case 7:return t.next=9,c.json();case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"getTokenTx",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n,a,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{apiKey:"freekey",token:"0x8424EB7B1E2B8a0254FA7B16df358f11c4572c13",type:"transfer"},t.next=3,this.get("/getAddressHistory/".concat(e),n);case 3:return a=t.sent,t.abrupt("return",a.operations.map(function(t){return v(t)}));case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getEthTx",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n,a,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{apiKey:"freekey"},t.next=3,this.get("/getAddressTransactions/".concat(e),n);case 3:return a=t.sent,t.abrupt("return",a.map(function(t){return m(t)}));case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),t}();function p(t){return h.apply(this,arguments)}function h(){return h=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new r.a(function(t){return setTimeout(t,e)}));case 1:case"end":return t.stop()}},t)})),h.apply(this,arguments)}function b(t){return s()(t).map(function(e){return e+"="+t[e]}).join("&")}function v(t){return t.value=f.a.fromWei(t.value,"ether").toString(),t.symbol=t.tokenInfo.symbol,t.hash=t.transactionHash,t}function m(t){return t.symbol="ETH",t}e["a"]=new d},6921:function(t,e,n){},"8d55":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"interface-history-tx"},[n("div",{staticClass:"spinner-container"},[n("i",{directives:[{name:"show",rawName:"v-show",value:!t.txLoaded,expression:"!txLoaded"}],staticClass:"fa fa-spin fa-spinner fa-lg"})]),t.txLoaded&&0===t.transactions.length?n("p",{staticClass:"text-center"},[t._v("\n    Transaction history is empty\n  ")]):t.txLoaded?n("ul",{staticClass:"tx-history"},t._l(t.transactions,function(e){return n("li",{key:e.hash},[n("div",{staticClass:"tx-time"},[n("p",[t._v(t._s(t.isReceived(e)?"Received":"Sent"))]),n("p",[t._v(t._s(t.getDate(e)))])]),n("div",[n("span",{staticClass:"tx-value"},[t._v(t._s(t.getValue(e)))]),n("span",{staticClass:"tx-curr"},[t._v(t._s(" "+t.getCurrSymbol(e)))])])])}),0):t._e()])},r=[],c=n("cebc"),s=n("2f62"),i={props:{transactions:{type:Array,default:function(){return[]}},txLoaded:{type:Boolean,default:function(){return!1}}},computed:Object(c["a"])({},Object(s["b"])({account:"account"})),methods:{isReceived:function(t){return t.to.toUpperCase()===this.account.address.toUpperCase()},getDate:function(t){return new Date(1e3*t.timestamp).toLocaleString()},getValue:function(t){return t.value},getCurrSymbol:function(t){return t.symbol}}},o=i,u=(n("cf25"),n("2877")),l=Object(u["a"])(o,a,r,!1,null,"759acba6",null),f=l.exports;n.d(e,"a",function(){return f})},acc2:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-address-block"},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"top-block"},[n("div",{staticClass:"block-title"},[t._v(t._s(t.$t("common.balance")))])]),n("div",{staticClass:"bottom-block"},[n("p",{},[t._v("\n        "+t._s(t.balance)+"\n        "),n("span",[t._v(t._s(t.currSymbol))])])])])])},r=[],c={props:{getBalance:{type:Function,default:function(){}},balance:{type:String,default:function(){return""}},currSymbol:{type:String,default:function(){return""}}}},s=c,i=(n("27a8"),n("2877")),o=Object(i["a"])(s,a,r,!1,null,"cf98fd4a",null),u=o.exports;n.d(e,"a",function(){return u})},acf1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"eth-wallet-container"},[n("balance-block",{staticClass:"balance-block",attrs:{"curr-symbol":"ETH",balance:t.balance,"get-balance":t.getBalance}}),n("interface-history-tx",{attrs:{transactions:t.transactions,"tx-loaded":t.txLoaded}})],1)},r=[],c=n("cebc"),s=n("2f62"),i=n("3914"),o=n("8d55"),u=n("ce96"),l=n("acc2"),f=n("901e"),d=n.n(f),p={components:{"interface-history-tx":o["a"],"balance-block":l["a"]},props:{},data:function(){return{transactions:[],txLoaded:!1}},computed:Object(c["a"])({},Object(s["b"])({account:"account",web3:"web3"}),{balance:function(){return this.web3.utils.fromWei(new d.a(this.account.balance).toFixed(),"ether")}}),mounted:function(){this.getTxs(),this.getBalance()},methods:{getBalance:function(){var t=this;this.account.address&&this.web3.eth.getBalance(this.account.address.toLowerCase()).then(function(e){t.$store.dispatch("setAccountBalance",e)}).catch(function(t){u["d"].responseHandler(t,u["d"].ERROR)})},getTxs:function(){var t=this;i["a"].getEthTx(this.account.address).then(function(e){t.transactions=e,t.txLoaded=!0}).catch(function(e){t.txLoaded=!0,u["d"].responseHandler(e,u["d"].ERROR)})}}},h=p,b=(n("357f"),n("2877")),v=Object(b["a"])(h,a,r,!1,null,"b9c9ce3c",null),m=v.exports;n.d(e,"default",function(){return m})},cf25:function(t,e,n){"use strict";var a=n("fdb3"),r=n.n(a);r.a},fa97:function(t,e,n){},fdb3:function(t,e,n){}}]);
//# sourceMappingURL=chunk-714f1ac4.62c6d1d0.js.map