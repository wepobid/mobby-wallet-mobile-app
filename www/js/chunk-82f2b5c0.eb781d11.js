(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-82f2b5c0"],{"45cc":function(n,e,t){"use strict";var i=t("cc6c");t.n(i).a},"6c7b":function(n,e,t){var i=t("5ca1");i(i.P,"Array",{fill:t("36bd")}),t("9c6c")("fill")},"7f39":function(n,e,t){"use strict";t.r(e);var i=(t("ac6a"),t("cebc")),c=(t("6c7b"),t("05ab")),a=t("5471"),s=t("2f62"),o=t("fb2e"),r={components:{"passcode-container":a.a},mixins:[o.a],data:function(){return{mnemonicPhrase:new Array(this.mnemonicSize).fill(""),mnemonic24:!1,mnemonicSize:12,creatingWallet:!1,validMnemonic:!1,mnemonic:"",showCreatePasscodeForm:!1}},computed:Object(i.a)({},Object(s.b)({web3:"web3"})),mounted:function(){var n=this;this.$nextTick(function(){n.$el.querySelectorAll(".phrases .inputWord").forEach(function(n){n.addEventListener("input",this.inputHandler)}.bind(n)),n.$el.querySelectorAll(".phrases .inputWord")[0].focus()})},beforeDestroy:function(){this.creatingWallet=!1},methods:{getMnemonic:function(){var n=[];return this.$el.querySelectorAll(".phrases .inputWord").forEach(function(e){n.push(e.value)}),n},unlockWallet:function(){this.validMnemonic&&(this.creatingWallet=!0,this.showCreatePasscodeForm=!0)},mnemonicValueBitSizeChange:function(){this.mnemonic24=!this.mnemonic24,this.mnemonic24?this.mnemonicSize=24:this.mnemonicSize=12,this.mnemonicPhrase=new Array(this.mnemonicSize).fill(""),this.validMnemonic=!1},inputHandler:function(){var n=this.getMnemonic().map(function(n){return n.toLowerCase()}).join(" ");c.k(n)?(this.validMnemonic=!0,this.mnemonic=n):(this.mnemonic="",this.validMnemonic=!1)},passcodeHandler:function(n){this.recoveryWallet(n,this.mnemonic)}}},l=(t("45cc"),t("2877")),m={name:"AccessWalletLayout",components:{"access-by-mnemonic-container":Object(l.a)(r,function(){var n=this,e=n.$createElement,t=n._self._c||e;return n.showCreatePasscodeForm?t("passcode-container",{staticClass:"page-container",on:{passcode:n.passcodeHandler}}):t("div",{staticClass:"access-by-mnemonic-container page-container"},[t("div",{staticClass:"title"},[t("h2",[n._v(n._s(n.$t("common.accessMyWallet")))]),t("h5",[n._v("\n      "+n._s(n.$t("accessWallet.pleaseTypeInMnemonicPhrase"))+"\n      "+n._s(n.$t("common.noWallet"))+"\n      "),t("router-link",{staticClass:"nounderline",attrs:{to:"/create-wallet"}},[n._v(n._s(n.$t("common.createANewWallet")))])],1)]),t("div",{staticClass:"contents"},[t("div",{staticClass:"tools"}),t("div",{staticClass:"phrases"},[t("ul",n._l(n.mnemonicSize,function(e){return t("li",{key:e},[t("span",[n._v(n._s(e)+".")]),t("input",{staticClass:"inputWord",staticStyle:{"text-transform":"lowercase"},attrs:{tabindex:e,type:"text",name:""}})])}),0)]),t("div",{staticClass:"button-container"},[t("button",{directives:[{name:"touch",rawName:"v-touch.prevent",value:n.unlockWallet,expression:"unlockWallet",modifiers:{prevent:!0}}],staticClass:"mid-round-button-green-filled close-button",class:{"invalid-button":!n.validMnemonic},attrs:{disabled:!n.validMnemonic}},[n.creatingWallet?t("i",{staticClass:"fa fa-spin fa-spinner fa-lg"}):n._e(),n.creatingWallet?n._e():t("span",[n._v("\n          "+n._s(n.validMnemonic?n.$t("common.confirm"):n.$t("common.wordsAreIncorrect"))+"\n        ")])])])])])},[],!1,null,"8c4ebe64",null).exports},mounted:function(){},methods:{}},u=(t("b9df"),Object(l.a)(m,function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("access-by-mnemonic-container")],1)},[],!1,null,"90c0d9c4",null)).exports;t.d(e,"default",function(){return u})},a44b:function(n,e,t){},b9df:function(n,e,t){"use strict";var i=t("a44b");t.n(i).a},cc6c:function(n,e,t){}}]);