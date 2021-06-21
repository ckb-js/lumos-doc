(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(110)),i=["components"],c={id:"about",title:"About This Guide",sidebar_label:"Home"},u={unversionedId:"introduction/about",id:"introduction/about",isDocsHomePage:!1,title:"About This Guide",description:"This documentation intends to give you an understanding of Lumos and how Lumos is applied when developing applications on CKB.",source:"@site/docs\\introduction\\about.md",slug:"/introduction/about",permalink:"/lumos-doc/docs/introduction/about",editUrl:"https://github.com/cryptape/lumos-doc/tree/master/docs/introduction/about.md",version:"current",lastUpdatedAt:1624240703,sidebar_label:"Home",sidebar:"sidebar2",next:{title:"What is Lumos?",permalink:"/lumos-doc/docs/introduction/intro"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This documentation intends to give you an understanding of Lumos and how Lumos is applied when developing applications on CKB. "),Object(a.b)("p",null,"For starters, it is recommended to read through the following sections linearly:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The ",Object(a.b)("strong",{parentName:"li"},"Introduction")," sections introduce the architecture, components, general scenarios, and prerequisites."),Object(a.b)("li",{parentName:"ol"},"The ",Object(a.b)("strong",{parentName:"li"},"Getting Started")," sections include the guides to prepare the development environment, install a CKB node, create accounts, and walk through a ",Object(a.b)("a",{parentName:"li",href:"../preparation/hellolumos"},"Hello Lumos")," example, a simple hello world project built using the Lumos framework."),Object(a.b)("li",{parentName:"ol"},"The ",Object(a.b)("strong",{parentName:"li"},"Guides")," sections have more details about the basic concepts, workflows, and examples about the usage of Lumos."),Object(a.b)("li",{parentName:"ol"},"The ",Object(a.b)("strong",{parentName:"li"},"Final Example")," introduces how Lumos helps with a contract integration on CKB.")))}p.isMDXComponent=!0}}]);