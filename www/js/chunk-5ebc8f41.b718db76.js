(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5ebc8f41"],{a5d5:function(t,n,i){"use strict";i.r(n),i.d(n,"ion_chip",function(){return e});var r=i("5c2d"),o=(i("f724"),i("d0de")),e=function(){function t(t){Object(r.m)(this,t),this.outline=!1}return t.prototype.hostData=function(){var t,n=Object(r.d)(this);return{class:Object.assign({},Object(o.a)(this.color),(t={},t[n]=!0,t["chip-outline"]=this.outline,t["ion-activatable"]=!0,t))}},t.prototype.__stencil_render=function(){var t=Object(r.d)(this);return[Object(r.i)("slot",null),"md"===t?Object(r.i)("ion-ripple-effect",null):null]},t.prototype.render=function(){return Object(r.i)(r.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return":host{--background:rgba(0,0,0,0.12);--color:rgba(0,0,0,0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:4px;margin-right:4px;margin-top:4px;margin-bottom:4px;padding-left:12px;padding-right:12px;padding-top:7px;padding-bottom:7px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:14px;line-height:1;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:4px;margin-inline-end:4px;padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color){background:rgba(var(--ion-color-base-rgb),.08);color:var(--ion-color-shade)}:host(.ion-color:focus){background:rgba(var(--ion-color-base-rgb),.12)}:host(.ion-color.activated){background:rgba(var(--ion-color-base-rgb),.16)}:host(.chip-outline){border-width:1px;border-style:solid;border-color:rgba(0,0,0,.32);background:transparent}:host(.chip-outline.ion-color){border-color:rgba(var(--ion-color-base-rgb),.32)}:host(.chip-outline:not(.ion-color):focus){background:rgba(0,0,0,.04)}:host(.chip-outline.activated:not(.ion-color)){background:rgba(0,0,0,.08)}::slotted(ion-icon){font-size:20px}:host(:not(.ion-color)) ::slotted(ion-icon){color:rgba(0,0,0,.54)}::slotted(ion-icon:first-child){margin-left:-4px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-4px;margin-inline-start:-4px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon:last-child){margin-left:8px;margin-right:-4px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-4px;margin-inline-end:-4px}}::slotted(ion-avatar){width:24px;height:24px}::slotted(ion-avatar:first-child){margin-left:-8px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-8px;margin-inline-start:-8px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-avatar:last-child){margin-left:8px;margin-right:-8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-8px;margin-inline-end:-8px}}:host(:focus){outline:none;--background:rgba(0,0,0,0.16)}:host(.activated){--background:rgba(0,0,0,0.2)}@media (any-hover:hover){:host(:hover){--background:rgba(0,0,0,0.16)}:host(.ion-color:hover){background:rgba(var(--ion-color-base-rgb),.12)}:host(.chip-outline:not(.ion-color):hover){background:rgba(0,0,0,.04)}}"},enumerable:!0,configurable:!0}),t}()},d0de:function(t,n,i){"use strict";i.d(n,"a",function(){return e}),i.d(n,"b",function(){return a}),i.d(n,"c",function(){return o}),i.d(n,"d",function(){return l});var r=i("f530"),o=function(t,n){return null!==n.closest(t)},e=function(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0},a=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n},s=/^[a-z][a-z0-9+\-.]*:/,l=function(t,n,i){return r.a(void 0,void 0,void 0,function(){var o;return r.c(this,function(r){switch(r.label){case 0:return null==t||"#"===t[0]||s.test(t)?[3,2]:(o=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return r.sent(),[2,o.push(t,i)];case 2:return[2,!1]}})})}}}]);