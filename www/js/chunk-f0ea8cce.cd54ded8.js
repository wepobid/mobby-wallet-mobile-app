(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f0ea8cce"],{1233:function(t,e,a){"use strict";var n=a("8766");a.n(n).a},"1ab3":function(t,e,a){"use strict";a.r(e);var n=(a("96cf"),a("3b8d")),s=a("795b"),i=a.n(s),r=(a("ac6a"),a("5df3"),a("6762"),a("2fdb"),a("28a5"),a("6b54"),a("cebc")),o=a("ce96"),c=a("2f62"),u=a("c8e5"),l=a("901e"),d=a.n(l),h=a("70c1"),m=a.n(h),f=a("dbd9"),v=a.n(f),b=a("1131"),p=a.n(b),g={components:{blockie:u.a},props:{getBalance:{type:Function,default:function(){}},getEthBalance:{type:Function,default:function(){}}},data:function(){return{advancedExpand:!1,isValidAddress:!1,hexAddress:"",address:"",value:"",data:"",gasLimit:"21000",selectedCurrency:"mobby"}},computed:Object(r.a)({},Object(c.b)({gasPrice:"gasPrice",account:"account",network:"network",web3:"web3"}),{balanceDefault:function(){return new d.a(this.account.balance)},multiWatch:function(){return this.value,this.isValidAddress,this.data,(new Date).getTime()/1e3},txTo:function(){return this.isToken?this.network.type.mobbyToken.address.toLowerCase():this.hexAddress.toLowerCase()},isToken:function(){return"mobby"===this.selectedCurrency},txData:function(){return this.isToken?this.getTokenTransferABI(this.value,this.network.type.mobbyToken.decimals):o.c.sanitizeHex(this.data)},txValue:function(){return this.isToken?"0x00":o.c.sanitizeHex(m.a.toWei(this.value,"ether").toString(16))},validInputs:function(){return this.isValidAmount.valid&&this.isValidAddress&&(new d.a(this.gasLimit).gte(0)||-1==this.gasLimit)&&o.c.validateHexString(this.data)},isValidDecimals:function(){var t=(this.value+"").split(".")[1];return!t||(this.isToken?t.length<=this.network.type.mobbyToken.decimals:t.length<=18)},isValidData:function(){return o.c.validateHexString(this.data)},isValidGasLimit:function(){return new d.a(this.gasLimit).gte(0)},isValidAmount:function(){var t=new d.a(m.a.toWei(this.gasPrice,"gwei")).times(this.gasLimit||0),e=m.a.fromWei(t,"ether"),a=this.$t("errorsGlobal.notAValidAmountTotal")+" Gas "+this.$t("errorsGlobal.toSend"),n=this.$t("errorsGlobal.notAValidAmountTotal")+" "+this.network.type.mobbyToken.symbol+" "+this.$t("errorsGlobal.toSend"),s=this.$t("errorsGlobal.notAValidAmountTotal")+" "+this.network.type.currencyName+" "+this.$t("errorsGlobal.toSend"),i=this.$t("errorsGlobal.invalidValue"),r=new d.a(this.value).lte(this.account.mobbyTokenBalance),o=new d.a(this.value).plus(e).lte(this.balanceDefault),c=new d.a(e).lte(this.balanceDefault),u=this.isValidDecimals;if(new d.a(this.value).lt(0))return{msg:i,valid:!1};if(this.isToken){var l=r&&c&&u;return{valid:l,msg:l?"":r?c?i:a:n}}return{valid:o&&u,msg:o?"":o?i:s}}}),watch:{address:function(t){this.isValidAddress=t.includes("0x")&&p.a.isAddress(t),this.isValidAddress&&(this.hexAddress=this.address)},multiWatch:p.a._.debounce(function(){this.validInputs&&this.estimateGas()},500)},created:function(){i.a.all([this.getBalance(),this.getEthBalance()])},methods:{sendEntireBalance:function(){switch(this.selectedCurrency){case"mobby":this.value=this.account.mobbyTokenBalance;break;case"eth":this.value=this.balanceDefault>0?this.balanceDefault.minus(m.a.fromWei(new d.a(m.a.toWei(this.gasPrice,"gwei")).times(this.gasLimit).toString(),"ether")):0}},getTokenTransferABI:function(t,e){return new this.web3.eth.Contract([{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]).methods.transfer(this.hexAddress.toLowerCase(),new d.a(t).times(new d.a(10).pow(e)).toFixed()).encodeABI()},estimateGas:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,a,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.web3.eth.getCoinbase();case 2:e=t.sent,a={from:e,value:this.txValue,to:this.txTo,gasPrice:o.c.sanitizeHex(m.a.toWei(this.gasPrice,"gwei").toString(16)),data:this.txData},this.web3.eth.estimateGas(a).then(function(t){n.gasLimit=t}).catch(function(t){n.gasLimit=-1,o.d.responseHandler(t,o.d.ERROR)});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),submitTransaction:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,a,n,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.web3.eth.getCoinbase();case 3:return e=t.sent,t.next=6,this.web3.eth.getTransactionCount(e);case 6:a=t.sent,n=new v.a({nonce:o.c.sanitizeHex(new d.a(a).toString(16)),gasPrice:o.c.sanitizeHex(m.a.toWei(this.gasPrice,"gwei").toString(16)),gasLimit:o.c.sanitizeHex(new d.a(this.gasLimit).toString(16)),to:this.txTo,value:this.txValue,data:this.txData,chainId:this.network.type.chainID}),(s=n.toJSON(!0)).from=e,this.web3.eth.sendTransaction(s).catch(function(t){o.d.responseHandler(t,o.d.ERROR)}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),o.d.responseHandler(t.t0,o.d.ERROR);case 16:case"end":return t.stop()}},t,this,[[0,13]])}));return function(){return t.apply(this,arguments)}}(),qrReaderOpen:function(){window.cordova&&window.cordova.plugins&&window.cordova.plugins.barcodeScanner&&window.cordova.plugins.barcodeScanner.scan(function(t){this.address=t.text}.bind(this),function(t){alert("Scanning failed: "+t)},{preferFrontCamera:!1,showFlipCameraButton:!1,showTorchButton:!1,torchOn:!1,saveHistory:!1,prompt:"",resultDisplayDuration:0,formats:"QR_CODE",orientation:"portrait",disableAnimations:!1,disableSuccessBeep:!0})},selectCurrencyHandler:function(){var t=document.getElementById("currency-select").options;switch(t.item(t.selectedIndex).value){case"mobby":this.selectedCurrency="mobby";break;case"eth":this.selectedCurrency="eth"}},clearAddress:function(){this.address="",this.$el.querySelector(".address-block input").focus()},clearAmount:function(){this.value="",this.$el.querySelector(".amount-number input").focus()}}},w=(a("1233"),a("2877")),y=Object(w.a)(g,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send-currency-container page-container"},[a("div",{staticClass:"send-form"},[a("div",{staticClass:"to-address"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("interface.sendTxToAddr")))])]),a("div",{staticClass:"address-block"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],ref:"address",attrs:{type:"text",name:"name",autocomplete:"off"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t.address?a("i",{staticClass:"fa fa-times-circle clear-button",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.preventDefault(),t.clearAddress(e)}}}):t._e(),a("i",{class:[t.isValidAddress&&0!==t.hexAddress.length?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}}),a("button",{staticClass:"qr-btn",on:{click:function(e){return e.preventDefault(),t.qrReaderOpen(e)}}},[t._v("QR")])])]),a("div",{staticClass:"amount"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("interface.sendTxAmount")))]),a("p",{staticClass:"title-button prevent-user-select",on:{click:t.sendEntireBalance}},[t._v("\n          Entire Balance\n        ")])]),a("div",{staticClass:"amount-number"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"min_value:0",expression:"'min_value:0'"},{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"number",min:"0",name:"value",step:"any",autocomplete:"off"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),t.value?a("i",{staticClass:"fa fa-times-circle clear-button",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.preventDefault(),t.clearAmount(e)}}}):t._e(),a("div",{staticClass:"currency-select-container"},[a("select",{attrs:{id:"currency-select"},on:{change:t.selectCurrencyHandler}},[a("option",{attrs:{selected:"",value:"mobby"}},[t._v(t._s(t.network.type.mobbyToken.symbol))]),a("option",{attrs:{value:"eth"}},[t._v(t._s(t.network.type.name))])])]),a("i",{class:[!t.isValidAmount.valid||t.errors.has("value")?"not-good":"","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})]),!t.isValidAmount.valid||t.errors.has("value")?a("div",{staticClass:"error-message-container"},[a("p",[t._v(t._s(t.isValidAmount.msg))])]):t._e()])]),a("div",{class:[t.validInputs?"":"disabled","submit-button mid-round-button-green-filled","text-center"],on:{click:t.submitTransaction}},[t._v("\n    "+t._s(t.$t("interface.sendTx"))+"\n  ")])])},[],!1,null,"56ad1287",null).exports;a.d(e,"default",function(){return y})},"5df3":function(t,e,a){"use strict";var n=a("02f4")(!0);a("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=n(e,a),this._i+=t.length,{value:t,done:!1})})},8766:function(t,e,a){}}]);