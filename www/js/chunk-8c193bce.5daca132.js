(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8c193bce"],{"325e":function(t,e,n){"use strict";var a=n("3daf1");n.n(a).a},"3daf1":function(t,e,n){},4201:function(t,e,n){"use strict";n.r(e);var a=(n("7f7f"),n("6b54"),n("cebc")),c=n("2f62"),s={props:{transactions:{type:Array,default:function(){return[]}},txLoaded:{type:Boolean,default:function(){return!1}}},computed:Object(a.a)({},Object(c.b)({account:"account"})),methods:{isReceived:function(t){return t.to.toUpperCase()===this.account.address.toUpperCase()},getDate:function(t){return new Date(1e3*t.timestamp).toLocaleString()},getValue:function(t){return t.value},getCurrSymbol:function(t){return t.symbol}}},o=(n("53d7"),n("2877")),i=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"history-tx-list"},[t.txLoaded?t._e():n("div",{staticClass:"spinner-container"},[n("i",{staticClass:"fa fa-spin fa-spinner fa-lg"})]),t.txLoaded&&0===t.transactions.length?n("p",{staticClass:"text-center"},[t._v("\n    Transaction history is empty\n  ")]):t.txLoaded?n("ul",{staticClass:"list"},t._l(t.transactions,function(e){return n("li",{key:e.hash},[n("div",{staticClass:"tx-time"},[n("p",[t._v(t._s(t.isReceived(e)?"Received":"Sent"))]),n("p",[t._v(t._s(t.getDate(e)))])]),n("div",[n("span",{staticClass:"tx-value"},[t._v(t._s(t.getValue(e)))]),n("span",{staticClass:"tx-curr"},[t._v(t._s(" "+t.getCurrSymbol(e)))])])])}),0):t._e()])},[],!1,null,"a69026d6",null).exports,r={props:{getBalance:{type:Function,default:function(){}},balance:{type:String,default:function(){return""}},currSymbol:{type:String,default:function(){return""}}}},l={components:{"history-tx-list":i,"balance-block":(n("325e"),Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-address-block"},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"top-block"},[n("div",{staticClass:"block-title"},[t._v(t._s(t.$t("common.balance")))])]),n("div",{staticClass:"bottom-block"},[n("p",{},[t._v("\n        "+t._s(t.balance)+"\n        "),n("span",[t._v(t._s(t.balance?t.currSymbol:""))])])])])])},[],!1,null,"1395b80c",null)).exports},props:{getBalance:{type:Function,default:function(){}},getTxs:{type:Function,default:function(){}},getEthBalance:{type:Function,default:function(){}},getEthTxs:{type:Function,default:function(){}}},data:function(){return{transactions:[],txLoaded:!1,balance:"",currSymbol:"",switchedEth:!1,colorTheme:""}},computed:Object(a.a)({},Object(c.b)({account:"account",network:"network"})),mounted:function(){var t=this;this._getTxs(),this._getBalance(),this.$nextTick(function(){var e=t.$el.querySelector(".balance-block").querySelector(".wrap");switch(t.account.type){case"cold":e.style["background-color"]="#5a78f0",t.colorTheme="#5a78f0";break;case"medium":e.style["background-color"]="#05c0a5",t.colorTheme="#05c0a5";break;case"hot":e.style["background-color"]="#f5a623",t.colorTheme="#f5a623"}})},methods:{_getTxs:function(){var t=this;this.txLoaded=!1,this.getTxs().then(function(e){t.txLoaded=!0,t.transactions=e}).catch(function(){t.txLoaded=!0})},_getBalance:function(){var t=this;this.getBalance().then(function(e){t.currSymbol=t.network.type.mobbyToken.symbol,t.balance=e.toString()})},_getEthBalance:function(){var t=this;this.getEthBalance().then(function(e){t.currSymbol=t.network.type.name,t.balance=e.toString()})},_getEthTxs:function(){var t=this;this.txLoaded=!1,this.getEthTxs().then(function(e){t.txLoaded=!0,t.transactions=e}).catch(function(){t.txLoaded=!0})},switchNetworkCurrency:function(){this.switchedEth=!this.switchedEth,this.switchedEth?(this._getEthBalance(),this._getEthTxs(),this.$el.querySelector(".slider").style["background-color"]=this.colorTheme):(this._getBalance(),this._getTxs(),this.$el.querySelector(".slider").style["background-color"]="#e0e0e0")}}},u=(n("5068"),Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"history-tx-container page-container"},[n("div",{staticClass:"switch-container"},[n("p",[t._v("\n      "+t._s("Switch "+t.network.type.mobbyToken.symbol+" - "+t.network.type.name)+"\n    ")]),n("div",{staticClass:"value-sliding noselect"},[n("div",{staticClass:"sliding-switch-white"},[n("label",{staticClass:"switch"},[n("input",{attrs:{type:"checkbox"}}),n("span",{staticClass:"slider round",on:{click:t.switchNetworkCurrency}})])])])]),n("balance-block",{staticClass:"balance-block",attrs:{"curr-symbol":t.currSymbol,balance:t.balance}}),n("history-tx-list",{attrs:{transactions:t.transactions,"tx-loaded":t.txLoaded}})],1)},[],!1,null,"300ab918",null)).exports;n.d(e,"default",function(){return u})},5068:function(t,e,n){"use strict";var a=n("dbbd");n.n(a).a},"53d7":function(t,e,n){"use strict";var a=n("f26e");n.n(a).a},dbbd:function(t,e,n){},f26e:function(t,e,n){}}]);