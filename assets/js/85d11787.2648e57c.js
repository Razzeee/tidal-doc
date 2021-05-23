(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{192:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),c=(t(0),t(291)),a={title:"resonance",permalink:"wiki/resonance/",layout:"wiki",tags:["Control Functions"]},i={unversionedId:"reference/control-functions/resonance",id:"reference/control-functions/resonance",isDocsHomePage:!1,title:"resonance",description:"Type:",source:"@site/docs/reference/control-functions/resonance.md",slug:"/reference/control-functions/resonance",permalink:"/docs/reference/control-functions/resonance",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/control-functions/resonance.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610},l=[],p={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/wiki/Type_signature",title:"wikilink"},"Type"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"resonance :: Pattern Double -> ControlPattern\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"resonance")," turns a number pattern into a control pattern that sets\nthe resonance of a low pass filter. Values range from 0 to 1."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"lpq",title:"wikilink"},"lpq")," is a shortcut for ",Object(c.b)("strong",{parentName:"p"},"resonance"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'d1 $ s "drum*8" # cutoff "1000" # resonance "0 0.2 0.4 0.6"\n')))}u.isMDXComponent=!0},291:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,m=s["".concat(a,".").concat(b)]||s[b]||f[b]||c;return t?o.a.createElement(m,i(i({ref:n},p),{},{components:t})):o.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);