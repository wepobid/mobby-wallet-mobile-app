(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2312645d"],{"2a56":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view",{attrs:{"curr-symbol":e.network.type.name,"get-balance":e.getBalance,"get-txs":e.getTxs}})},a=[],u=(n("96cf"),n("3b8d")),c=n("cebc"),s=n("2f62"),i=n("3914"),o=n("901e"),p=n.n(o),f={computed:Object(c["a"])({},Object(s["b"])({account:"account",web3:"web3",network:"network"})),mounted:function(){},methods:{getBalance:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.account.address){e.next=5;break}return e.next=3,this.web3.eth.getBalance(this.account.address.toLowerCase());case 3:return t=e.sent,e.abrupt("return",this.web3.utils.fromWei(new p.a(t).toFixed(),"ether"));case 5:return e.abrupt("return","");case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getTxs:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].getEthTx(this.account.address);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},h=f,b=(n("3340"),n("2877")),w=Object(b["a"])(h,r,a,!1,null,"6bb8b8ad",null),l=w.exports;n.d(t,"default",function(){return l})},3340:function(e,t,n){"use strict";var r=n("8ee4"),a=n.n(r);a.a},3914:function(e,t,n){"use strict";var r=n("795b"),a=n.n(r),u=(n("6b54"),n("a4bb")),c=n.n(u),s=(n("96cf"),n("3b8d")),i=n("d225"),o=n("b0b4"),p=n("70c1"),f=n.n(p),h=function(){function e(){Object(i["a"])(this,e),this.apiRoute="https://api.ethplorer.io"}return Object(o["a"])(e,[{key:"_sendReq",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b(2e3);case 2:return e.next=4,fetch(t);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r="".concat(this.apiRoute).concat(t).concat(n?"?"+l(n):""),a=new Request(encodeURI(r),{method:"GET"}),e.next=4,this._sendReq(a);case 4:if(u=e.sent,u.ok){e.next=7;break}throw new Error(u.statusText);case 7:return e.next=9,u.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"getTokenTx",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{apiKey:"freekey",token:"0x8424EB7B1E2B8a0254FA7B16df358f11c4572c13",type:"transfer"},e.next=3,this.get("/getAddressHistory/".concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.operations.map(function(e){return d(e)}));case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getEthTx",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{apiKey:"freekey"},e.next=3,this.get("/getAddressTransactions/".concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.map(function(e){return m(e)}));case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();function b(e){return w.apply(this,arguments)}function w(){return w=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new a.a(function(e){return setTimeout(e,t)}));case 1:case"end":return e.stop()}},e)})),w.apply(this,arguments)}function l(e){return c()(e).map(function(t){return t+"="+e[t]}).join("&")}function d(e){return e.value=f.a.fromWei(e.value,"ether").toString(),e.symbol=e.tokenInfo.symbol,e.hash=e.transactionHash,e}function m(e){return e.symbol="ETH",e}t["a"]=new h},"8ee4":function(e,t,n){}}]);
//# sourceMappingURL=chunk-2312645d.5d459290.js.map