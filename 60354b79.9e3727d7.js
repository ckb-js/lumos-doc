(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{109:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));var a=n(22),o=n(110);function c(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,r=c.forcePrependBaseUrl,i=void 0!==r&&r,s=c.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(i)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+b:b}(c,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},110:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(r,".").concat(d)]||u[d]||p[d]||c;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<c;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},112:function(e,t,n){"use strict";var a=n(0),o=n.n(a),c=n(11),r=n(110),i=n(10),s=Object(a.createContext)({collectLink:function(){}}),l=n(109),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};t.a=function(e){var t,n,u,p=e.isNavLink,d=e.to,m=e.href,f=e.activeClassName,h=e.isActive,O=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,v=void 0===j||j,g=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(l.b)().withBaseUrl,N=Object(a.useContext)(s),w=d||m,x=Object(r.a)(w),T=null==w?void 0:w.replace("pathname://",""),k=void 0!==T?(n=T,v&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,A=Object(a.useRef)(!1),E=p?c.e:c.c,L=i.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!L&&x&&window.docusaurus.prefetch(k),function(){L&&u&&u.disconnect()}}),[k,L,x]);var C=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,B=!k||!x||C;return k&&x&&!C&&!O&&N.collectLink(k),B?o.a.createElement("a",Object.assign({href:k},w&&!x&&{target:"_blank",rel:"noopener noreferrer"},g)):o.a.createElement(E,Object.assign({},g,{onMouseEnter:function(){A.current||(window.docusaurus.preload(k),A.current=!0)},innerRef:function(e){var t,n;L&&e&&x&&(t=e,n=function(){window.docusaurus.prefetch(k)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:k||""},p&&{isActive:h,activeClassName:f}))}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),c=(n(0),n(111)),r=n(109),i=n(112),s=["components"],l={id:"hellolumos",title:"Hello Lumos"},b={unversionedId:"preparation/hellolumos",id:"preparation/hellolumos",isDocsHomePage:!1,title:"Hello Lumos",description:'The Hello Lumos example is designed as a simple "DApp" that implemented the most basic functions, such as the query functions, the common transfer function, the DAO operations, etc., based on Lumos functionalities.',source:"@site/docs\\preparation\\hellolumos.md",slug:"/preparation/hellolumos",permalink:"/lumos-doc/docs/preparation/hellolumos",editUrl:"https://github.com/cryptape/lumos-doc/tree/master/docs/preparation/hellolumos.md",version:"current",lastUpdatedAt:1624240703,sidebar:"sidebar2",previous:{title:"Create Accounts",permalink:"/lumos-doc/docs/preparation/createaccount"},next:{title:"Install Lumos Packages",permalink:"/lumos-doc/docs/guides/installlumos"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Steps",id:"steps",children:[{value:"Download the Hello Lumos example.",id:"download-the-hello-lumos-example",children:[]},{value:"Install dependencies.",id:"install-dependencies",children:[]},{value:"Update the account information in the account.ts file.",id:"update-the-account-information-in-the-accountts-file",children:[]},{value:"Build the project.",id:"build-the-project",children:[]},{value:"Enter the Node.js REPL mode.",id:"enter-the-nodejs-repl-mode",children:[]},{value:"Start the indexer and initialize the configurations.",id:"start-the-indexer-and-initialize-the-configurations",children:[]},{value:"Perform a common transfer transaction.",id:"perform-a-common-transfer-transaction",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,s);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,'The Hello Lumos example is designed as a simple "DApp" that implemented the most basic functions, such as the query functions, the common transfer function, the DAO operations, etc., based on Lumos functionalities.'),Object(c.b)("p",null,'You can follow the steps in this guide to perform a common transfer with the functions provided by the Hello Lumos "DApp".'),Object(c.b)("p",null,"The later sections of the guide, for example, ",Object(c.b)(i.a,{to:Object(r.a)("/docs/guides/querycells"),mdxType:"Link"},"Query on Cells"),", ",Object(c.b)(i.a,{to:Object(r.a)("/docs/guides/querytransactions"),mdxType:"Link"},"Query on Transactions"),", and ",Object(c.b)(i.a,{to:Object(r.a)("/docs/guides/buildtransactions"),mdxType:"Link"},"Assemble Transactions"),", explain the usage of Lumos by using the code examples of Hello Lumos. The full code of the example can be found ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xying21/hellolumos"},"here"),". "),Object(c.b)("p",null,"The  example has the following structure:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"hellolumos/\n\u251c\u2500\u2500 src/accounts.ts\n\u251c\u2500\u2500 src/buildTXs.ts\n\u251c\u2500\u2500 src/index.ts\n\u251c\u2500\u2500 src/manageaccounts.ts\n\u251c\u2500\u2500 src/querycells.ts\n\u251c\u2500\u2500 src/querytransactions.ts\n\u251c\u2500\u2500 config.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 yarn.lock\n")),Object(c.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(c.b)("p",null,"The following prerequisites apply for walking through the Hello Lumos example:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The development environment is set up. For more information, see ",Object(c.b)(i.a,{to:Object(r.a)("/docs/preparation/setupsystem"),mdxType:"Link"},"Set Up the Development Environment"),"."),Object(c.b)("li",{parentName:"ul"},"Two accounts, Alice and Bob, have been created. Alice is specified as the miner to receive mining rewards. For more information, see ",Object(c.b)(i.a,{to:Object(r.a)("/docs/preparation/createaccount"),mdxType:"Link"},"Create Accounts"),".")),Object(c.b)("h2",{id:"environment"},"Environment"),Object(c.b)("p",null,"The following examples are verified on Ubuntu 20.04.2. Steps on the other platforms are similar and can be adjusted accordingly."),Object(c.b)("h2",{id:"steps"},"Steps"),Object(c.b)("h3",{id:"download-the-hello-lumos-example"},"Download the Hello Lumos example."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"$ cd\n$ git clone https://github.com/nervosnetwork/hellolumos\n")),Object(c.b)("h3",{id:"install-dependencies"},"Install dependencies."),Object(c.b)("p",null,"All required dependencies for the Hello Lumos example are listed in package.json. The dependencies can be installed by running the ",Object(c.b)("inlineCode",{parentName:"p"},"yarn install")," command. "),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"The development environment must be set up correctly for successful installation of the dependencies. For more information, see ",Object(c.b)(i.a,{to:Object(r.a)("/docs/preparation/setupsystem"),mdxType:"Link"},"Set Up the Development Environment"),"."))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ cd hellolumos\n$ yarn install\n")),Object(c.b)("details",null,Object(c.b)("summary",null,"OUTPUT"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},'yarn install v1.22.10\n[1/4] Resolving packages...\n[2/4] Fetching packages...\ninfo fsevents@2.3.2: The platform "win32" is incompatible with this module.\ninfo "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.\n[3/4] Linking dependencies...\n[4/4] Building fresh packages...\nDone in 52.70s.\n')))),Object(c.b)("h3",{id:"update-the-account-information-in-the-accountts-file"},"Update the account information in the account.ts file."),Object(c.b)("p",null,"Replace the value of ",Object(c.b)("inlineCode",{parentName:"p"},"PRIVATE_KEY"),", ",Object(c.b)("inlineCode",{parentName:"p"},"ADDRESS")," and ",Object(c.b)("inlineCode",{parentName:"p"},"ARGS")," for ALICE and BOB in the ",Object(c.b)("inlineCode",{parentName:"p"},"accounts.ts")," file with the account information you have prepared when creating accounts."),Object(c.b)("p",null,"You can retrieve the ",Object(c.b)("inlineCode",{parentName:"p"},"ADDRESS")," and ",Object(c.b)("inlineCode",{parentName:"p"},"ARGS")," for ALICE and BOB by executing the ",Object(c.b)("inlineCode",{parentName:"p"},"ckb-cli account list")," command. The private keys are stored in the ",Object(c.b)("var",null,"alice")," file and the ",Object(c.b)("var",null,"bob")," file during the creation of the accounts. For more information about creating accounts, see ",Object(c.b)(i.a,{to:Object(r.a)("/docs/preparation/createaccount"),mdxType:"Link"},"Create Accounts"),"."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"The account information in this documentation is only used for demonstration. Do ",Object(c.b)("strong",{parentName:"p"},"not")," use these private keys,  addresses and args elsewhere. "))),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/accounts.ts"',title:'"hellolumos/src/accounts.ts"'},'export const ALICE = {\n  PRIVATE_KEY:\n    "0xf2a91b1410f7308631b89603262448ba515cddac1ffe250265551c82fff3eb3a",\n  ADDRESS: "ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf",\n  ARGS: "0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e",\n};\n\nexport const BOB = {\n  PRIVATE_KEY:\n    "0x670ac6ac1ce8004b4220f0fb024179461f11989ff4d446816f78813b80b9c696",\n  ADDRESS: "ckt1qyqwe03shn6udvhjmrkzm53f53sr5l3qdwvsytj4hs",\n  ARGS: "0xecbe30bcf5c6b2f2d8ec2dd229a4603a7e206b99",\n};\n')),Object(c.b)("h3",{id:"build-the-project"},"Build the project."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1}","{1}":!0},"$ tsc\n")),Object(c.b)("h3",{id:"enter-the-nodejs-repl-mode"},"Enter the Node.js REPL mode."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1}","{1}":!0},'$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType ".help" for more information.\n')),Object(c.b)("h3",{id:"start-the-indexer-and-initialize-the-configurations"},"Start the indexer and initialize the configurations."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1}","{1}":!0},'> const { accounts, querycells, buildTXs, querytransactions } = require(".");\nThe server is started.\n')),Object(c.b)("h3",{id:"perform-a-common-transfer-transaction"},"Perform a common transfer transaction."),Object(c.b)("p",null,"The Hello Lumos example implements the common transfer transaction function by using Lumos modules and functions. For more information about building a common transaction by using Lumos, see ",Object(c.b)(i.a,{to:Object(r.a)("/docs/guides/buildtransactions#transfer-ckb-in-a-common-transaction"),mdxType:"Link"},"Transfer CKB in a Common Transaction"),"."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Get the account information of Alice and Bob."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1-7}","{1-7}":!0},'> const alice = accounts.ALICE;\n> const bob = accounts.BOB;\n> const { parseAddress } = require("@ckb-lumos/helpers");\n> const script1 = parseAddress(alice.ADDRESS);\n> const script2 = parseAddress(bob.ADDRESS);\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Check the balance for the accounts of Alice and Bob."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1,3}","{1,3}":!0},"> const balance1 = querycells.getBalancebyLock(script1);\n> The balance of the account is 1386763373620166n\n> const balance2 = querycells.getBalancebyLock(script2);\n> The balance of the account is 0n\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Transfer 200 CKB from Alice to Bob. "),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1}","{1}":!0},"> await buildTXs.commonTransfer([alice.ADDRESS], bob.ADDRESS, 20000000000n, 10000000n, alice.PRIVATE_KEY);\n[warn] ANYONE_CAN_PAY script info not found in config!\nThe transaction hash is 0x22cc789bdaa8e021caa303cf20cfa4063b46a17abd62b31aa2cf712844f984cb\n'0x22cc789bdaa8e021caa303cf20cfa4063b46a17abd62b31aa2cf712844f984cb'\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Check the transaction status."),Object(c.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"The CKB miner must be started to commit the transaction on chain."))),Object(c.b)("p",{parentName:"li"},"For more information about getting transaction information by using Lumos, see ",Object(c.b)(i.a,{to:Object(r.a)("/docs/guides/querytransactions#get-transaction-status-and-block-hash"),mdxType:"Link"},"Get Transaction Status and Block Hash"),". "),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1}","{1}":!0},'> await querytransactions.getTXbyHash("0x22cc789bdaa8e021caa303cf20cfa4063b46a17abd62b31aa2cf712844f984cb");\nThe transaction status is committed\nThe block hash for the transaction is 0x6d60ae47167a78fbcf254c81b1d6356aceef2feeb4e039fed693c274a83faac1\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Check the new balance of Bob."),Object(c.b)("p",{parentName:"li"},"When the transaction is committed, the new balance appears in the result."),Object(c.b)("p",{parentName:"li"},"For more information about getting balance by a lock script, see ",Object(c.b)(i.a,{to:Object(r.a)("/docs/guides/querycapacity#get-the-balance-of-an-account"),mdxType:"Link"},"Get the Balance of an Account"),"."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1}","{1}":!0},"> await querycells.getBalancebyLock(script2);\n> The balance of the account is 20000000000n\n")))))}d.isMDXComponent=!0}}]);