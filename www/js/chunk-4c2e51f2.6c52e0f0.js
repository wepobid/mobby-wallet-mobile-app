(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c2e51f2"],{"4dc8":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"interact-with-contract-container"},[a("interface-container-title",{attrs:{title:t.$t("common.interactWcontract")}}),t.interact?a("div",{staticClass:"contract-methods-container"},[a("h4",[t._v("Read/Write Contract")]),a("div",{staticClass:"contract-addr-container"},[a("div",{staticClass:"contract-addr"},[a("p",[t._v("Contract Address: "+t._s(t.address))])]),a("div",{staticClass:"picker-container"},[a("currency-picker",{attrs:{currency:t.contractMethods,token:!1,page:"interactWContract"},on:{selectedCurrency:t.selectedFunction}})],1)]),void 0!==t.selectedMethod.name?a("div",{staticClass:"method-arguments-container"},[a("h4",[t._v(t._s(t._f("capitalize")(t.selectedMethod.name)))]),t._l(t.selectedMethod.inputs,function(e,s){return a("div",{key:e.name+s,staticClass:"input-item-container"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h5",[t._v(t._s(t._f("capitalize")(e.name))+" ("+t._s(e.type)+"):")])])]),a("div",{staticClass:"input-container"},["checkbox"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:"checkbox"},domProps:{checked:Array.isArray(t.inputs[e.name])?t._i(t.inputs[e.name],null)>-1:t.inputs[e.name]},on:{change:function(s){var a=t.inputs[e.name],n=s.target,i=!!n.checked;if(Array.isArray(a)){var r=null,c=t._i(a,r);n.checked?c<0&&t.$set(t.inputs,e.name,a.concat([r])):c>-1&&t.$set(t.inputs,e.name,a.slice(0,c).concat(a.slice(c+1)))}else t.$set(t.inputs,e.name,i)}}}):"radio"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:"radio"},domProps:{checked:t._q(t.inputs[e.name],null)},on:{change:function(s){return t.$set(t.inputs,e.name,null)}}}):"radio"!==t.getType(e.type).type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:t.getType(e.type).type},domProps:{value:t.inputs[e.name]},on:{input:function(s){s.target.composing||t.$set(t.inputs,e.name,s.target.value)}}}):t._e(),"radio"===t.getType(e.type).type?a("div",{staticClass:"bool-input-container"},[a("div",{staticClass:"bool-items"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio"},domProps:{value:!0,checked:t._q(t.inputs[e.name],!0)},on:{change:function(s){return t.$set(t.inputs,e.name,!0)}}}),a("label",{attrs:{for:e.name}},[t._v("True")])]),a("div",{staticClass:"bool-items"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio",checked:""},domProps:{value:!1,checked:t._q(t.inputs[e.name],!1)},on:{change:function(s){return t.$set(t.inputs,e.name,!1)}}}),a("label",{attrs:{for:e.name}},[t._v("False")])])]):t._e(),t.noInput?t._e():a("i",{class:["radio"!==t.getType(e.type).type?"non-bool-i":"",t.isValidInput(t.inputs[e.name],t.getType(e.type).solidityType)?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.selectedMethod.payable,expression:"selectedMethod.payable"}]},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("common.value"))+" in ETH:")])])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"non-bool-input",attrs:{step:"any",type:"text",name:"",placeholder:"ETH"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),t.selectedMethod.constant?a("div",[t._m(0),a("div",{staticClass:"result-inputs"},["string"===t.resType||"boolean"===t.resType||"number"===t.resType?a("input",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],staticClass:"non-bool-input",attrs:{type:"text",name:"",placeholder:"0x00000000000000",disabled:""},domProps:{value:t.result},on:{input:function(e){e.target.composing||(t.result=e.target.value)}}}):t._e(),"object"===t.resType?a("div",t._l(t.selectedMethod.outputs,function(e,s){return a("div",{key:e.name+s,staticClass:"result-container"},[a("label",{attrs:{name:""!==e.name?e.name:e.type+s}},[t._v(t._s(t._f("capitalize")(""!==e.name?e.name:e.type)))]),a("input",{staticClass:"result-input",attrs:{name:""!==e.name?e.name:e.type+s,type:"text",placeholder:"0x00000000000000",disabled:""},domProps:{value:t.result[s]}})])}),0):t._e()])]):t._e()],2):t._e(),a("div",{staticClass:"submit-button-container"},[a("div",{staticClass:"interact-buttons"},[a("div",{staticClass:"submit-button large-round-button-green-border clickable",on:{click:function(e){return t.switchView("backwards")}}},[t._v("\n          "+t._s(t.$t("common.back"))+"\n        ")]),t.selectedMethod.hasOwnProperty("inputs")&&(t.selectedMethod.constant&&t.selectedMethod.inputs.length>0||!t.selectedMethod.constant)?a("div",{class:[t.allValid?"":"disabled",t.loading?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:t.write}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&!t.selectedMethod.constant,expression:"!loading && !selectedMethod.constant"}]},[t._v("\n            "+t._s(t.$t("interface.write"))+"\n          ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&t.selectedMethod.constant,expression:"!loading && selectedMethod.constant"}]},[t._v(t._s(t.$t("interface.read")))]),a("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin fa-lg"})]):t._e()]),a("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)]):a("div",{staticClass:"interact-div"},[a("div",{staticClass:"send-form contract-address-container"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h4",{staticClass:"contract-address-title"},[t._v("\n            "+t._s(t.$t("interface.contractAddr"))+"\n          ")]),a("div",{staticClass:"select-contract no-border"},[a("currency-picker",{attrs:{currency:t.mergedContracts,token:!1,page:"interactWContract"},on:{selectedCurrency:t.selectedContract}})],1)])]),a("div",{staticClass:"the-form domain-name"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",name:"nameAddr",placeholder:"Enter Contract Address"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),a("i",{staticClass:"address-validation-check",class:[t.isValidAddress&&""!==t.address?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("interface.abiJsonInt")))]),a("div",{staticClass:"copy-buttons"},[a("span",{on:{click:function(e){return t.deleteInput("abi")}}},[t._v(t._s(t.$t("common.clear")))]),a("span",{on:{click:function(e){return t.copyToClipboard("abi")}}},[t._v(t._s(t.$t("common.copy")))])])])]),a("div",{staticClass:"the-form domain-name"},[a("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.abi,expression:"abi"}],ref:"abi",staticClass:"custom-textarea-1",attrs:{name:"abiField"},domProps:{value:t.abi},on:{input:function(e){e.target.composing||(t.abi=e.target.value)}}}),a("i",{class:[t.isValidAbi&&""!==t.abi?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"submit-button-container"},[a("div",{class:[t.isValidAbi&&t.isValidAddress&&!t.errors.has("nameAddr")&&!t.errors.has("abiField")?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:function(e){return t.switchView("forward")}}},[t._v("\n        "+t._s(t.$t("common.continue"))+"\n        "),a("img",{attrs:{src:s("2ab9")}})]),a("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[t._v("Result:")])])])}],i=(s("c5f6"),s("75fc")),r=(s("96cf"),s("3b8d")),c=(s("a481"),s("f499")),o=s.n(c),d=(s("28a5"),s("6762"),s("2fdb"),s("7f7f"),s("ac6a"),s("7618")),l=s("cebc"),u=s("2f62"),p=s("d7a2"),h=s("55c1"),m=s("539d"),v=s("ce96"),f=s("b7d3"),b=s("aa13"),g=s("70c1"),y=s("8ded"),C=s.n(y),w={components:{"interface-container-title":h["a"],"interface-bottom-text":m["a"],"currency-picker":p["a"]},data:function(){return{abi:"",address:"",interact:!1,contractMethods:[],selectedMethod:{},result:"",loading:!1,value:0,inputs:{}}},computed:Object(l["a"])({},Object(u["b"])({network:"network",gasPrice:"gasPrice",account:"account",web3:"web3"}),{mergedContracts:function(){var t=C.a.get("customContracts")||[];return this.network.type.contracts.concat(t)},isValidAbi:function(){return v["c"].isJson(this.abi)},isValidAddress:function(){return Object(f["a"])(this.address)},noInput:function(){return this.selectedMethod.constant&&0===this.selectedMethod.inputs.length},resType:function(){return Object(d["a"])(this.result)},allValid:function(){var t=this,e=!0;return this.selectedMethod.inputs&&this.selectedMethod.inputs.forEach(function(s){t.isValidInput(t.inputs[s.name],t.getType(s.type).solidityType)||(e=!1)}),e&&this.isValidAbi&&this.isValidAddress},contractArgs:function(){var t=this,e=[];return this.selectedMethod&&this.selectedMethod.inputs.forEach(function(s){if("bytes32[]"===s.type){var a=t.formatInput(t.inputs[s.name]);e.push(a)}else"address"===s.type?e.push(t.inputs[s.name].toLowerCase()):e.push(t.inputs[s.name])}),e}}),watch:{network:function(){this.abi="",this.address="",this.interact=!1,this.contractMethods=[],this.selectedMethod={},this.result=""}},methods:{resetDefaults:function(){this.abi="",this.address="",this.interact=!1,this.contractMethods=[],this.selectedMethod={},this.result="",this.loading=!1,this.value=0,this.inputs={}},isValidInput:function(t,e){if(t||(t=""),e.includes("[")&&e.includes("]")){var s=[];if("["===t[0]){var a="["===t[0]?t.substr(0,t.length-1):t;a.split(",").forEach(function(a){e.includes(b["e"])?s.push(""!==t&&!isNaN(t)&&v["c"].isInt(t)):e.includes(b["a"])?s.push(Object(f["a"])(t)):e.includes(b["d"])?s.push(Object(f["a"])(!0)):e.includes(b["b"])?s.push(Object(d["a"])(t)===Object(d["a"])(!0)||""===t):e.includes(b["c"])&&s.push(v["c"].validateHexString(a))})}return!s.includes(!1)}return"uint"===e?""!==t&&!isNaN(t)&&v["c"].isInt(t):"address"===e?Object(f["a"])(t):"string"===e||("bytes"===e?"0x"===t.substr(0,2)&&v["c"].validateHexString(t):"bool"===e&&(Object(d["a"])(t)===Object(d["a"])(!0)||""===t))},getType:v["c"].solidityType,selectedContract:function(t){""===t.abi?this.abi="":this.abi=o()(t.abi),this.address=t.address},selectedFunction:function(t){var e=this;if(t.hasOwnProperty("constant")){var s=new this.web3.eth.Contract([t],this.address.toLowerCase());!0===t.constant&&0===t.inputs.length?s.methods[t.name]().call({from:this.account.address.toLowerCase()}).then(function(t){e.result=t}).catch(function(t){e.loading=!1,v["d"].responseHandler(t,v["d"].WARN)}):this.result="",this.loading=!1,this.selectedMethod=t,this.selectedMethod.inputs.forEach(function(t){"bool"===t.type&&(e.inputs[t.name]=!1)})}},formatInput:function(t){if("["===t[0])return t;var e=t.split(",");return e.map(function(t){return t.replace(" ","")})},copyToClipboard:function(t){this.$refs[t].select(),document.execCommand("copy")},deleteInput:function(t){this.$refs[t].value=""},switchView:function(t){var e=this;switch(t){case"forward":JSON.parse(this.abi).forEach(function(t){"constructor"!==t.type&&void 0!==t.constant&&e.contractMethods.push(t)}),this.interact=!0,this.loading=!1;break;default:this.resetDefaults()}},write:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s,a,n,r,c,o,d,l,u,p=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.web3,s=new e.eth.Contract([this.selectedMethod],this.address.toLowerCase()),this.loading=!0,!0!==this.selectedMethod.constant){t.next=7;break}(a=s.methods)[this.selectedMethod.name].apply(a,Object(i["a"])(this.contractArgs)).call({from:this.account.address.toLowerCase()}).then(function(t){p.result=t,p.loading=!1}).catch(function(t){p.loading=!1,v["d"].responseHandler(t,!1)}),t.next=15;break;case 7:return t.next=9,e.eth.getTransactionCount(this.account.address.toLowerCase());case 9:return r=t.sent,c=!1,t.next=13,(n=s.methods)[this.selectedMethod.name].apply(n,Object(i["a"])(this.contractArgs)).estimateGas({from:this.account.address.toLowerCase()}).then(function(t){return t}).catch(function(t){p.loading=!1,v["d"].responseHandler(t,v["d"].ERROR),c=!0});case 13:o=t.sent,c||(l=(d=s.methods)[this.selectedMethod.name].apply(d,Object(i["a"])(this.contractArgs)).encodeABI(),u={from:this.account.address.toLowerCase(),gas:o,nonce:r,gasPrice:Number(g["toWei"](this.gasPrice,"gwei")),value:0,to:this.address.toLowerCase(),data:l},this.loading=!1,e.eth.sendTransaction(u).catch(function(t){v["d"].responseHandler(t,v["d"].ERROR)}));case 15:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},_=w,k=(s("5b05"),s("2877")),x=Object(k["a"])(_,a,n,!1,null,"1282c8dc",null),M=x.exports;s.d(e,"default",function(){return M})},"5b05":function(t,e,s){"use strict";var a=s("ade7"),n=s.n(a);n.a},ade7:function(t,e,s){}}]);
//# sourceMappingURL=chunk-4c2e51f2.6c52e0f0.js.map