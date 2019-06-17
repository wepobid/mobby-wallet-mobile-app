(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1d63bf32"],{"1ab3":function(e,t,a){"use strict";a.r(t);var n=(a("96cf"),a("3b8d")),s=a("795b"),i=a.n(s),r=(a("ac6a"),a("5df3"),a("6762"),a("2fdb"),a("28a5"),a("6b54"),a("cebc")),o=a("ce96"),c=a("2f62"),l=a("c8e5"),u=a("901e"),d=a.n(u),h=a("70c1"),m=a.n(h),v=a("dbd9"),f=a.n(v),b=a("1131"),p=a.n(b),g={components:{blockie:l.a},props:{getBalance:{type:Function,default:function(){}},getEthBalance:{type:Function,default:function(){}}},data:function(){return{advancedExpand:!1,isValidAddress:!1,hexAddress:"",address:"",value:0,data:"",gasLimit:"21000",selectedCurrency:"mobby"}},computed:Object(r.a)({},Object(c.b)({gasPrice:"gasPrice",account:"account",network:"network",web3:"web3",online:"online"}),{balanceDefault:function(){return new d.a(this.account.balance)},multiWatch:function(){return this.value,this.isValidAddress,this.data,(new Date).getTime()/1e3},txTo:function(){return this.isToken?this.network.type.mobbyToken.address.toLowerCase():this.hexAddress.toLowerCase()},isToken:function(){return"mobby"===this.selectedCurrency},txData:function(){return this.isToken?this.getTokenTransferABI(this.value,this.network.type.mobbyToken.decimals):o.c.sanitizeHex(this.data)},txValue:function(){return this.isToken?"0x00":o.c.sanitizeHex(m.a.toWei(this.value,"ether").toString(16))},validInputs:function(){return this.isValidAmount.valid&&this.isValidAddress&&(new d.a(this.gasLimit).gte(0)||-1==this.gasLimit)&&o.c.validateHexString(this.data)},isValidDecimals:function(){var e=(this.value+"").split(".")[1];return!e||(this.isToken?e.length<=this.network.type.mobbyToken.decimals:e.length<=18)},isValidData:function(){return o.c.validateHexString(this.data)},isValidGasLimit:function(){return new d.a(this.gasLimit).gte(0)},isValidAmount:function(){var e=new d.a(m.a.toWei(this.gasPrice,"gwei")).times(this.gasLimit||0),t=m.a.fromWei(e,"ether"),a=this.$t("errorsGlobal.notAValidAmountTotal")+" Gas "+this.$t("errorsGlobal.toSend"),n=this.$t("errorsGlobal.notAValidAmountTotal")+" "+this.network.type.mobbyToken.symbol+" "+this.$t("errorsGlobal.toSend"),s=this.$t("errorsGlobal.notAValidAmountTotal")+" "+this.network.type.currencyName+" "+this.$t("errorsGlobal.toSend"),i=this.$t("errorsGlobal.invalidValue"),r=new d.a(this.value).lte(this.account.mobbyTokenBalance),o=new d.a(this.value).plus(t).lte(this.balanceDefault),c=new d.a(t).lte(this.balanceDefault),l=this.isValidDecimals;if(new d.a(this.value).lt(0))return{msg:i,valid:!1};if(this.isToken){var u=r&&c&&l;return{valid:u,msg:u?"":r?c?i:a:n}}return{valid:o&&l,msg:o?"":o?i:s}}}),watch:{address:function(e){this.isValidAddress=e.includes("0x")&&p.a.isAddress(e),this.isValidAddress&&(this.hexAddress=this.address)},multiWatch:p.a._.debounce(function(){this.validInputs&&this.estimateGas()},500)},created:function(){var e=this;i.a.all([this.getBalance(),this.getEthBalance()]).catch(function(t){e.online?o.d.responseHandler(t,o.d.ERROR):o.d.responseHandler("No Internet Connection",o.d.WARN)})},methods:{sendEntireBalance:function(){switch(this.selectedCurrency){case"mobby":this.value=this.account.mobbyTokenBalance;break;case"eth":this.value=this.balanceDefault>0?this.balanceDefault.minus(m.a.fromWei(new d.a(m.a.toWei(this.gasPrice,"gwei")).times(this.gasLimit).toString(),"ether")):0}},getTokenTransferABI:function(e,t){return new this.web3.eth.Contract([{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]).methods.transfer(this.hexAddress.toLowerCase(),new d.a(e).times(new d.a(10).pow(t)).toFixed()).encodeABI()},estimateGas:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,a,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.web3.eth.getCoinbase();case 2:t=e.sent,a={from:t,value:this.txValue,to:this.txTo,gasPrice:o.c.sanitizeHex(m.a.toWei(this.gasPrice,"gwei").toString(16)),data:this.txData},this.web3.eth.estimateGas(a).then(function(e){n.gasLimit=e}).catch(function(e){n.gasLimit=-1,o.d.responseHandler(e,o.d.ERROR)});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),submitTransaction:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,a,n,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.web3.eth.getCoinbase();case 3:return t=e.sent,e.next=6,this.web3.eth.getTransactionCount(t);case 6:a=e.sent,n=new f.a({nonce:o.c.sanitizeHex(new d.a(a).toString(16)),gasPrice:o.c.sanitizeHex(m.a.toWei(this.gasPrice,"gwei").toString(16)),gasLimit:o.c.sanitizeHex(new d.a(this.gasLimit).toString(16)),to:this.txTo,value:this.txValue,data:this.txData,chainId:this.network.type.chainID}),(s=n.toJSON(!0)).from=t,this.web3.eth.sendTransaction(s).catch(function(e){o.d.responseHandler(e,o.d.ERROR)}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),o.d.responseHandler(e.t0,o.d.ERROR);case 16:case"end":return e.stop()}},e,this,[[0,13]])}));return function(){return e.apply(this,arguments)}}(),qrReaderOpen:function(){window.cordova&&window.cordova.plugins&&window.cordova.plugins.barcodeScanner&&window.cordova.plugins.barcodeScanner.scan(function(e){this.address=e.text}.bind(this),function(e){alert("Scanning failed: "+e)},{preferFrontCamera:!1,showFlipCameraButton:!1,showTorchButton:!1,torchOn:!1,saveHistory:!1,prompt:"",resultDisplayDuration:0,formats:"QR_CODE",orientation:"portrait",disableAnimations:!1,disableSuccessBeep:!0})},selectCurrencyHandler:function(){var e=document.getElementById("currency-select").options;switch(e.item(e.selectedIndex).value){case"mobby":this.selectedCurrency="mobby";break;case"eth":this.selectedCurrency="eth"}},clearAddress:function(){this.address="",this.$el.querySelector(".address-block input").focus()},clearAmount:function(){this.value="",this.$el.querySelector(".amount-number input").focus()}}},w=(a("5985"),a("2877")),y=Object(w.a)(g,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"send-currency-container page-container"},[a("div",{staticClass:"send-form"},[a("div",{staticClass:"to-address"},[a("div",{staticClass:"title"},[a("h4",[e._v(e._s(e.$t("interface.sendTxToAddr")))])]),a("div",{staticClass:"address-block"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],ref:"address",attrs:{type:"text",name:"name",autocomplete:"off"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),e.address?a("div",{directives:[{name:"touch",rawName:"v-touch",value:e.clearAddress,expression:"clearAddress"}],staticClass:"clear-btn-container"},[a("i",{staticClass:"fa fa-times-circle clear-button",attrs:{"aria-hidden":"true"}})]):e._e(),a("i",{class:[e.isValidAddress&&0!==e.hexAddress.length?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}}),a("button",{staticClass:"qr-btn",on:{click:function(t){return t.preventDefault(),e.qrReaderOpen(t)}}},[e._v("QR")])])]),a("div",{staticClass:"amount"},[a("div",{staticClass:"title"},[a("h4",[e._v(e._s(e.$t("interface.sendTxAmount")))]),a("p",{staticClass:"title-button prevent-user-select",on:{click:e.sendEntireBalance}},[e._v("\n          "+e._s(e.$t("common.entireBalance"))+"\n        ")])]),a("div",{staticClass:"amount-number"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"min_value:0",expression:"'min_value:0'"},{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"number",min:"0",name:"value",step:"any",autocomplete:"off"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),e.value?a("div",{directives:[{name:"touch",rawName:"v-touch",value:e.clearAmount,expression:"clearAmount"}],staticClass:"clear-btn-container"},[a("i",{staticClass:"fa fa-times-circle clear-button",attrs:{"aria-hidden":"true"}})]):e._e(),a("div",{staticClass:"currency-select-container"},[a("select",{attrs:{id:"currency-select"},on:{change:e.selectCurrencyHandler}},[a("option",{attrs:{selected:"",value:"mobby"}},[e._v("\n              "+e._s(e.network.type.mobbyToken.symbol)+"\n            ")]),a("option",{attrs:{value:"eth"}},[e._v(e._s(e.network.type.name))])])]),a("i",{class:[!e.isValidAmount.valid||e.errors.has("value")?"not-good":"","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})]),!e.isValidAmount.valid||e.errors.has("value")?a("div",{staticClass:"error-message-container"},[a("p",[e._v(e._s(e.isValidAmount.msg))])]):e._e()])]),a("div",{class:[e.validInputs?"":"disabled","submit-button mid-round-button-green-filled","text-center"],on:{click:e.submitTransaction}},[e._v("\n    "+e._s(e.$t("interface.sendTx"))+"\n  ")])])},[],!1,null,"48032db3",null).exports;a.d(t,"default",function(){return y})},5985:function(e,t,a){"use strict";var n=a("7fca");a.n(n).a},"5df3":function(e,t,a){"use strict";var n=a("02f4")(!0);a("01f9")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,a=this._i;return a>=t.length?{value:void 0,done:!0}:(e=n(t,a),this._i+=e.length,{value:e,done:!1})})},"7fca":function(e,t,a){}}]);