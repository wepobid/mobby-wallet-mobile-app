(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0c8d6b"],{"571d":function(e,o,r){"use strict";r.r(o),r.d(o,"iosTransitionAnimation",function(){return i}),r.d(o,"shadow",function(){return d});var n="opacity",t="transform",a="translateX",l="0%",d=function(e){return e.shadowRoot||e},i=function(e,o,r){var i="rtl"===o.ownerDocument.dir,c=i?"-99.5%":"99.5%",m=i?"33%":"-33%",f=r.enteringEl,u=r.leavingEl,s=new e;if(s.addElement(f).duration(r.duration||500).easing(r.easing||"cubic-bezier(0.36,0.66,0.04,1)").beforeRemoveClass("ion-page-invisible"),u&&o){var b=new e;b.addElement(o),s.add(b)}var T="back"===r.direction,y=f.querySelector(":scope > ion-content"),S=f.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),w=f.querySelectorAll(":scope > ion-header > ion-toolbar"),p=new e;if(y||0!==w.length||0!==S.length?(p.addElement(y),p.addElement(S)):p.addElement(f.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),s.add(p),T?p.beforeClearStyles([n]).fromTo(a,m,l,!0).fromTo(n,.8,1,!0):p.beforeClearStyles([n]).fromTo(a,c,l,!0),w.forEach(function(o){var r=new e;r.addElement(o),s.add(r);var t=new e;t.addElement(o.querySelector("ion-title"));var f=new e;f.addElement(o.querySelectorAll("ion-buttons,[menuToggle]"));var u=new e;u.addElement(o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var b=new e;b.addElement(d(o).querySelector(".toolbar-background"));var y=new e,S=o.querySelector("ion-back-button");if(S&&y.addElement(S),r.add(t).add(f).add(u).add(b).add(y),t.fromTo(n,.01,1,!0),f.fromTo(n,.01,1,!0),u.fromTo(n,.01,1,!0),T)t.fromTo(a,m,l,!0),u.fromTo(a,m,l,!0),y.fromTo(n,.01,1,!0);else if(t.fromTo(a,c,l,!0),u.fromTo(a,c,l,!0),b.beforeClearStyles([n]).fromTo(n,.01,1,!0),y.fromTo(n,.01,1,!0),S){var w=new e;w.addElement(d(S).querySelector(".button-text")).fromTo(a,i?"-100px":"100px","0px"),r.add(w)}}),u){var E=new e;E.addElement(u.querySelector(":scope > ion-content")),E.addElement(u.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),s.add(E),T?E.beforeClearStyles([n]).fromTo(a,l,i?"-100%":"100%"):E.fromTo(a,l,m,!0).fromTo(n,1,.8,!0),u.querySelectorAll(":scope > ion-header > ion-toolbar").forEach(function(o){var r=new e;r.addElement(o);var c=new e;c.addElement(o.querySelector("ion-title"));var f=new e;f.addElement(o.querySelectorAll("ion-buttons,[menuToggle]"));var u=new e,b=o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&u.addElement(b);var y=new e;y.addElement(d(o).querySelector(".toolbar-background"));var S=new e,w=o.querySelector("ion-back-button");if(w&&S.addElement(w),r.add(c).add(f).add(u).add(S).add(y),s.add(r),S.fromTo(n,.99,0),c.fromTo(n,.99,0),f.fromTo(n,.99,0,0),u.fromTo(n,.99,0),T){if(c.fromTo(a,l,i?"-100%":"100%"),u.fromTo(a,l,i?"-100%":"100%"),y.beforeClearStyles([n]).fromTo(n,1,.01),w){var p=new e;p.addElement(d(w).querySelector(".button-text")),p.fromTo(a,l,(i?-124:124)+"px"),r.add(p)}}else c.fromTo(a,l,m).afterClearStyles([t]),u.fromTo(a,l,m).afterClearStyles([t,n]),S.afterClearStyles([n]),c.afterClearStyles([n]),f.afterClearStyles([n])})}return Promise.resolve(s)}}}]);