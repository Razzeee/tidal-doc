(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),c=n(7),r=(n(0),n(312)),l={title:"Cycles",id:"cycles"},i={unversionedId:"reference/cycles",id:"reference/cycles",isDocsHomePage:!1,title:"Cycles",description:"Tidal Cycles is not using BPM (beats per minute) but a specific measurement called CPS: cycles per second. For Tidal, time is cyclical and not linear. It means that when a cycle ends, a new one will follow. Time is counted in smaller and smaller decrements of cycles per second (e.g. 1/3 of a cycle).",source:"@site/docs/reference/cycles.md",slug:"/reference/cycles",permalink:"/docs/reference/cycles",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/cycles.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621864783,sidebar:"reference",next:{title:"Patterns",permalink:"/docs/reference/patterns"}},o=[{value:"Dividing the cycle",id:"dividing-the-cycle",children:[]},{value:"Visualizing cycles",id:"visualizing-cycles",children:[]},{value:"Convert between BPM and CPS",id:"convert-between-bpm-and-cps",children:[]}],s={toc:o};function b(e){var t=e.components,l=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tidal Cycles")," is not using ",Object(r.b)("strong",{parentName:"p"},"BPM")," (",Object(r.b)("em",{parentName:"p"},"beats per minute"),") but a specific measurement called ",Object(r.b)("strong",{parentName:"p"},"CPS"),": ",Object(r.b)("em",{parentName:"p"},"cycles per second"),". For Tidal, time is ",Object(r.b)("em",{parentName:"p"},"cyclical")," and not ",Object(r.b)("em",{parentName:"p"},"linear"),". It means that when a cycle ends, a new one will follow. Time is counted in smaller and smaller decrements of ",Object(r.b)("em",{parentName:"p"},"cycles per second")," (e.g. 1/3 of a cycle). "),Object(r.b)("p",null,Object(r.b)("img",{alt:"cycle",src:n(327).default})),Object(r.b)("p",null,"This rather original way of dealing with time can be quite surprising for a musician, because both traditional european notation and modern sequencers are generally linear and deal with the beginning of time and the ending of time. Tidal can ",Object(r.b)("strong",{parentName:"p"},"backtrack")," or ",Object(r.b)("strong",{parentName:"p"},"fastforward")," in time because you can actually predict what will happen in ",Object(r.b)("inlineCode",{parentName:"p"},"x")," cycles or what happened ",Object(r.b)("inlineCode",{parentName:"p"},"x")," cycles ago (well, kinda..)."),Object(r.b)("h2",{id:"dividing-the-cycle"},"Dividing the cycle"),Object(r.b)("p",null,"Don't focus on the syntax so far! Enter the following pattern in your text editor and evaluate it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bd hh bd hh"\n')),Object(r.b)("p",null,"You just divided a cycle in four equal parts, one for each of the sounds you just triggered. However:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bd hh hh"\n')),Object(r.b)("p",null,"Now, the cycle is being divided in three equal parts, you might have noticed that it slowed down a little. "),Object(r.b)("p",null,"You can superpose patterns that will divide the ",Object(r.b)("inlineCode",{parentName:"p"},"cycle")," in different subdivisions. It means that Tidal is a rather good tool to explore polyrhythmy and rhythmic intricacies: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bd hh hh"\n\nd2 $\xa0s "hh:2 ~ hh:3 cp"\n')),Object(r.b)("h2",{id:"visualizing-cycles"},"Visualizing cycles"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://camo.githubusercontent.com/f47944025244466fd0a024edfe4bd41da8a6ec4f1f9595185be879d780accd5c/68747470733a2f2f692e696d6775722e636f6d2f4d50627048306e2e6a7067",alt:"patternimage"})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tidal")," can help you to visualize the output of a given pattern textually or graphically. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tidalcycles/tidal-vis"},"tidal-vis")," can go even further by turning textual patterns into their visual counterpart. Enter the following pattern: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},'"1 2 3"\n')),Object(r.b)("p",null,"You should see this result in the logs (the ",Object(r.b)("inlineCode",{parentName:"p"},"ghci")," window): "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},'(0>\u2153)|"1"\n(\u2153>\u2154)|"2"\n(\u2154>1)|"3"\n')),Object(r.b)("p",null,"You can also use the ",Object(r.b)("inlineCode",{parentName:"p"},"drawLine")," function to visualize the output of a pattern in the log console. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},'drawLine "a b*2 d"\n')),Object(r.b)("p",null,"You might get something that looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"[11 cycles]\n|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-\n")),Object(r.b)("h2",{id:"convert-between-bpm-and-cps"},"Convert between BPM and CPS"),Object(r.b)("p",null,"Sometimes, you will need to convert between BPMs and CPS (e.g. synchronization with another musician or machine). The ",Object(r.b)("inlineCode",{parentName:"p"},"setcps")," function is used to change the number of ",Object(r.b)("em",{parentName:"p"},"cycles per second"),". The default number of cycles per second is 0.5625. "),Object(r.b)("p",null,"These two values are equivalent:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setcps 0.5625"),": Cycles per second, as a decimal."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setcps (135/60/4)"),": Cycles per second, as a fraction.")),Object(r.b)("p",null,"Representing cycles per second using fractions has the advantage of being more human-readable and more closely aligned with how tempo is commonly represented in music as beats per minute (or bpm). Techno has a range of 120-140 bpm. House has a range of 115-130 bpm. And so on. If we wanted to set the tempo of our Tidal song to fast house, we would do the following: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"-- Set cps to be a fast house beat\nsetcps (130/60/4)\n")),Object(r.b)("p",null,"Regarding the example above, the first part of the fraction ",Object(r.b)("inlineCode",{parentName:"p"},"130/60"),", says there will be 130 beats per minute. 130 is the number of beats and 60 is the length of the minute (60 seconds). The second part of the fraction ",Object(r.b)("inlineCode",{parentName:"p"},"/4")," says that for every cycle in tidal there will be 4 beats. You can adjust this value to change how quickly your cycles run. "))}b.isMDXComponent=!0},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),b=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?c.a.createElement(m,i(i({ref:t},s),{},{components:n})):c.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},327:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cycle_representation-24efe2cc73b0b5e0ca32a158eed95162.png"}}]);