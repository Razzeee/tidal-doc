(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{304:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(312)),l={title:"Concatenation",id:"concatenation"},s={unversionedId:"reference/concatenation",id:"reference/concatenation",isDocsHomePage:!1,title:"Concatenation",description:"This page will present you all the functions that can be used to concatenate (e.g. add) things together in various ways. Each function will be presented following the same model:",source:"@site/docs/reference/concatenation.md",slug:"/reference/concatenation",permalink:"/docs/reference/concatenation",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/concatenation.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621864783,sidebar:"reference",previous:{title:"State Values",permalink:"/docs/reference/state_values"},next:{title:"Accumulation",permalink:"/docs/reference/accumulation"}},i=[{value:"Many cats",id:"many-cats",children:[{value:"cat",id:"cat",children:[]},{value:"fastcat",id:"fastcat",children:[]},{value:"timeCat",id:"timecat",children:[]},{value:"randcat",id:"randcat",children:[]}]},{value:"Append family",id:"append-family",children:[{value:"append",id:"append",children:[]},{value:"fastAppend",id:"fastappend",children:[]}]},{value:"wedge",id:"wedge",children:[]},{value:"brak",id:"brak",children:[]},{value:"flatpat",id:"flatpat",children:[]}],o={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This page will present you all the functions that can be used to concatenate (e.g. add) things together in various ways. Each function will be presented following the same model:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",Object(c.b)("strong",{parentName:"li"},"Haskell")," side."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Description"),": verbal description of the function."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),Object(c.b)("h2",{id:"many-cats"},"Many cats"),Object(c.b)("h3",{id:"cat"},"cat"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"Type: cat :: [Pattern a] -> Pattern a \n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"cat"),", (also known as ",Object(c.b)("inlineCode",{parentName:"p"},"slowcat"),", to match with ",Object(c.b)("inlineCode",{parentName:"p"},"fastcat")," defined below) concatenates a list of patterns into a new pattern; each pattern in the list will maintain its original duration. For example: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2"]\n\nd1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]\n\nd1 $ cat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]\n')),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"There is also a ",Object(c.b)("inlineCode",{parentName:"p"},"slowcat")," function, perfectly similar to ",Object(c.b)("inlineCode",{parentName:"p"},"cat"),". This function exists as a mirror of ",Object(c.b)("inlineCode",{parentName:"p"},"fastcat"),"."))),Object(c.b)("h3",{id:"fastcat"},"fastcat"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"Type: fastcat :: [Pattern a] -> Pattern a \n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"fastcat")," works like cat above, but squashes all the patterns to fit a single cycle. "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fastcat [sound "bd*2 sn", sound "arpy jvbass*2"]\n\nd1 $ fastcat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]\n\nd1 $ fastcat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]\n')),Object(c.b)("h3",{id:"timecat"},"timeCat"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"Type: timeCat :: [(Time, Pattern a)] -> Pattern a \n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"timeCat")," is like ",Object(c.b)("inlineCode",{parentName:"p"},"fastcat")," except that you provide proportionate sizes of the patterns to each other for when they're concatenated into one cycle. The larger the value in the list, the larger relative size the pattern takes in the final loop. If all values are equal then this is equivalent to ",Object(c.b)("inlineCode",{parentName:"p"},"fastcat")," (e.g. the following two code fragments are equivalent)."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fastcat [s "bd*4", s "hh27*8", s "superpiano" # n 0]\n\nd1 $ timeCat [(1, s "bd*4"),\n              (1, s "hh27*8"),\n              (1, s "superpiano" # n 0)]\n')),Object(c.b)("h3",{id:"randcat"},"randcat"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"Type: randcat :: [Pattern a] -> Pattern a \n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"randcat")," is similar to ",Object(c.b)("inlineCode",{parentName:"p"},"cat"),", but rather than playing the given patterns in order, it picks them at random. For example: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ randcat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]\n')),Object(c.b)("h2",{id:"append-family"},"Append family"),Object(c.b)("h3",{id:"append"},"append"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"Type: append :: Pattern a -> Pattern a -> Pattern a\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"append")," combines two patterns into a new pattern, where cycles alternate between the first and second pattern:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ append (sound "bd*2 sn") (sound "arpy jvbass*2")\n')),Object(c.b)("p",null,"It has the alias ",Object(c.b)("inlineCode",{parentName:"p"},"slowAppend"),", in sympathy with ",Object(c.b)("inlineCode",{parentName:"p"},"fastAppend"),", described below."),Object(c.b)("h3",{id:"fastappend"},"fastAppend"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"Type: fastAppend :: Pattern a -> Pattern a -> Pattern a\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"fastAppend")," works like append described above, but each pair of cycles from the two patterns are squashed to fit a single cycle."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fastAppend (sound "bd*2 sn") (sound "arpy jvbass*2")\n')),Object(c.b)("h2",{id:"wedge"},"wedge"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"Type: wedge :: Time -> Pattern a -> Pattern a -> Pattern a \n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"wedge")," combines two patterns by squashing them into a single cycle. It takes a ratio as the first argument. The ratio determines what percentage of the pattern cycle is taken up by the first pattern. The second pattern fills in the remainder of the pattern cycle. For example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ wedge (1/4) (sound "bd*2 arpy*3 cp sn*2") (sound "odx [feel future]*2 hh hh")\n')),Object(c.b)("h2",{id:"brak"},"brak"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"Type: brak :: Pattern a -> Pattern a\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"brak")," makes a pattern sound a bit like a breakbeat. It does this by every other cycle, squashing the pattern to fit half a cycle, and offsetting it by a quarter of a cycle."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ brak $ sound "[feel feel:3, hc:3 hc:2 hc:4 ho:1]"\n')),Object(c.b)("h2",{id:"flatpat"},"flatpat"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"Type: flatpat :: Pattern [a] -> Pattern a\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"flatpat")," takes a pattern of lists and flattens it into a pattern where all the events in each list happen simultaneously. For example, the following code uses flatpat in combination with listToPat to create an alternating pattern of chords."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (flatpat $ listToPat [[0,4,7],[(-12),(-8),(-5)]]) # s "superpiano" # sustain 2\n')),Object(c.b)("p",null,"This code is equivalent to:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n ("[0,4,7] [-12,-8,-5]") # s "superpiano" # sustain 2\n')))}p.isMDXComponent=!0},312:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||c;return a?r.a.createElement(m,s(s({ref:t},o),{},{components:a})):r.a.createElement(m,s({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var o=2;o<c;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);