(window.webpackJsonp=window.webpackJsonp||[]).push([[32,8,23],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(0),r=a.n(n),c=a(22),l=a(111),o=a(115),s=a(125),u=a(23);function i(){var e=Object(c.default)().siteConfig,t=void 0===e?{}:e;return r.a.createElement("header",{className:"masthead"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,t.title),r.a.createElement(o.a,{to:Object(l.a)("docs/introduction/about"),className:"button button--primary button--outline button--lg"},"Get Started")),r.a.createElement("div",{className:"col"},r.a.createElement("h1",null),r.a.createElement("object",{type:"image/svg+xml",data:Object(l.a)("img/lumos.svg")},r.a.createElement("img",{src:Object(l.a)("img/lumos.svg")})))))}function m(e){var t=e.title,a=e.children,n=e.color,c=void 0===n?"primary":n;return r.a.createElement("div",{className:"col"},r.a.createElement("h2",{className:"text--center text--"+c,style:{color:c}},t),r.a.createElement("p",{className:"text--center"},a))}function b(){return r.a.createElement("main",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(m,{title:"Powerful"},"The ",r.a.createElement("b",null,"Lumos")," framework with powerful modules saves you the hassle of creating code for CKB queries and transactions."),r.a.createElement(m,{title:"Easy Integration",color:"#BA00AC"},"The functions, or more complicated sets and combinations of components make smart contracts integration on CKB much simpler."),r.a.createElement(m,{title:"Easy to Use",color:"#00B100"},"The ",r.a.createElement("b",null,"Lumos")," framework is open source, and can be used on Mac, Linux and windows machines.")))}function d(){return r.a.createElement(s.a,null,r.a.createElement(u.a,null),r.a.createElement(i,null),r.a.createElement(b,null))}},127:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),l=a.n(c),o=a(24),s=a(22),u=a(116),i=a(111),m=a(115),b=a(23),d=a(123),f=a(191),h=a(192),E=a(132),O=["contextualSearch"],j=null;function v(e){var t=e.hit,a=e.children;return l.a.createElement(m.a,{to:t.url},a)}function g(e){var t=e.state,a=e.onClose,n=Object(d.a)().generateSearchPageLink;return l.a.createElement(m.a,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function p(e){var t,m,d=e.contextualSearch,p=Object(r.a)(e,O),C=Object(s.default)().siteMetadata,w=Object(E.a)(),k=null!==(t=null===(m=p.searchParameters)||void 0===m?void 0:m.facetFilters)&&void 0!==t?t:[],y=d?[].concat(w,k):k,S=Object.assign({},p.searchParameters,{facetFilters:y}),N=Object(i.b)().withBaseUrl,P=Object(u.useHistory)(),x=Object(c.useRef)(null),B=Object(c.useState)(!1),F=B[0],M=B[1],A=Object(c.useState)(null),I=A[0],L=A[1],R=Object(c.useCallback)((function(){return j?Promise.resolve():Promise.all([a.e(42).then(a.bind(null,131)),Promise.all([a.e(0),a.e(43)]).then(a.bind(null,130)),a.e(0).then(a.t.bind(null,56,7))]).then((function(e){var t=e[0].DocSearchModal;j=t}))}),[]),T=Object(c.useCallback)((function(){R().then((function(){M(!0)}))}),[R,M]),U=Object(c.useCallback)((function(){M(!1)}),[M]),q=Object(c.useCallback)((function(e){R().then((function(){M(!0),L(e.key)}))}),[R,M,L]),H=Object(c.useRef)({navigate:function(e){var t=e.itemUrl;P.push(t)}}).current,J=Object(c.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:N(""+t.pathname+t.hash)})}))})).current,K=Object(c.useMemo)((function(){return function(e){return l.a.createElement(g,Object(n.a)({},e,{onClose:U}))}}),[U]),V=Object(c.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",C.docusaurusVersion),e}),[C.docusaurusVersion]);return Object(f.a)({isOpen:F,onOpen:T,onClose:U,onInput:q,searchButtonRef:x}),l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,null,l.a.createElement("link",{rel:"preconnect",href:"https://"+p.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.a.createElement(h.a,{onTouchStart:R,onFocus:R,onMouseOver:R,onClick:T,ref:x}),F&&Object(o.createPortal)(l.a.createElement(j,Object(n.a)({onClose:U,initialScrollY:window.scrollY,initialQuery:I,navigator:H,transformItems:J,hitComponent:v,resultsFooterComponent:K,transformSearchClient:V},p,{searchParameters:S})),document.body))}t.a=function(){var e=Object(s.default)().siteConfig;return l.a.createElement(p,e.themeConfig.algolia)}}}]);