(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4019:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(2648).Z,o=n(7273).Z,c=a(n(7294)),i=n(4957),l=n(7995),s=n(647),u=n(1992),f=n(639),d=n(4019),p=n(227),h="undefined"!==typeof c.default.useTransition,v={};function m(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(a?"%"+a:"")]=!0}}var x=c.default.forwardRef((function(e,t){var n,a=e.href,x=e.as,j=e.children,y=e.prefetch,_=e.passHref,g=e.replace,b=e.soft,k=e.shallow,C=e.scroll,O=e.locale,w=e.onClick,M=e.onMouseEnter,E=e.onTouchStart,N=e.legacyBehavior,W=void 0===N?!0!==Boolean(!1):N,P=o(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=j,!W||"string"!==typeof n&&"number"!==typeof n||(n=c.default.createElement("a",null,n));var L=!1!==y,S=h?c.default.useTransition():[],I=r(S,2)[1],R=c.default.useContext(s.RouterContext),A=c.default.useContext(u.AppRouterContext);A&&(R=A);var z,U=c.default.useMemo((function(){var e=i.resolveHref(R,a,!0),t=r(e,2),n=t[0],o=t[1];return{href:n,as:x?i.resolveHref(R,x):o||n}}),[R,a,x]),H=U.href,T=U.as,Z=c.default.useRef(H),B=c.default.useRef(T);W&&(z=c.default.Children.only(n));var D=W?z&&"object"===typeof z&&z.ref:t,F=f.useIntersection({rootMargin:"200px"}),G=r(F,3),K=G[0],V=G[1],q=G[2],X=c.default.useCallback((function(e){B.current===T&&Z.current===H||(q(),B.current=T,Z.current=H),K(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[T,D,H,q,K]);c.default.useEffect((function(){var e=V&&L&&i.isLocalURL(H),t="undefined"!==typeof O?O:R&&R.locale,n=v[H+"%"+T+(t?"%"+t:"")];e&&!n&&m(R,H,T,{locale:t})}),[T,H,V,O,L,R]);var Q={ref:X,onClick:function(e){W||"function"!==typeof w||w(e),W&&z.props&&"function"===typeof z.props.onClick&&z.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,l,s,u){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n)){e.preventDefault();var f=function(){"softPush"in t&&"softReplace"in t?t[o?a?"softReplace":"softPush":a?"replace":"push"](n):t[a?"replace":"push"](n,r,{shallow:c,locale:s,scroll:l})};u?u(f):f()}}(e,R,H,T,g,b,k,C,O,A?I:void 0)},onMouseEnter:function(e){W||"function"!==typeof M||M(e),W&&z.props&&"function"===typeof z.props.onMouseEnter&&z.props.onMouseEnter(e),i.isLocalURL(H)&&m(R,H,T,{priority:!0})},onTouchStart:function(e){W||"function"!==typeof E||E(e),W&&z.props&&"function"===typeof z.props.onTouchStart&&z.props.onTouchStart(e),i.isLocalURL(H)&&m(R,H,T,{priority:!0})}};if(!W||_||"a"===z.type&&!("href"in z.props)){var $="undefined"!==typeof O?O:R&&R.locale,J=R&&R.isLocaleDomain&&d.getDomainLocale(T,$,R.locales,R.domainLocales);Q.href=J||p.addBasePath(l.addLocale(T,$,R&&R.defaultLocale))}return W?c.default.cloneElement(z,Q):c.default.createElement("a",Object.assign({},P,Q),n)}));t.default=x,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!c,u=a.useRef(),f=a.useState(!1),d=r(f,2),p=d[0],h=d[1],v=a.useState(null),m=r(v,2),x=m[0],j=m[1];a.useEffect((function(){if(c){if(u.current&&(u.current(),u.current=void 0),s||p)return;return x&&x.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=i.get(r)))return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:a},l.push(n),i.set(n,t),t}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){if(c.delete(e),o.unobserve(e),0===c.size){o.disconnect(),i.delete(a);var t=l.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&l.splice(t,1)}}}(x,(function(e){return e&&h(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!p){var e=o.requestIdleCallback((function(){return h(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[x,s,n,t,p]);var y=a.useCallback((function(){h(!1)}),[]);return[j,p,y]};var a=n(7294),o=n(6286),c="function"===typeof IntersectionObserver;var i=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},1992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),a=r.default.createContext(null);t.AppRouterContext=a;var o=r.default.createContext(null);t.LayoutRouterContext=o;var c=r.default.createContext(null);t.GlobalLayoutRouterContext=c},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var r=n(6495).Z,a=n(2648).Z,o=(0,n(1598).Z)(n(7294)),c=a(n(1585)),i=n(8e3),l=n(5850),s=n(9470);n(9475);function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce(f,[]).reverse().concat(u(t.inAmpMode).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var l=0,s=d.length;l<s;l++){var u=d[l];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var f=a.props[u],p=r[u]||new Set;"name"===u&&c||!p.has(f)?(p.add(f),r[u]=p):o=!1}}}return o}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=r({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,o.default.cloneElement(e,c)}return o.default.cloneElement(e,{key:a})}))}var h=function(e){var t=e.children,n=o.useContext(i.AmpStateContext),r=o.useContext(l.HeadManagerContext);return o.default.createElement(c.default,{reduceComponentsToState:p,headManager:r,inAmpMode:s.isInAmpMode(n)},t)};t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function i(){if(t&&t.mountedInstances){var a=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(a,e))}}if(a){var l;null==t||null==(l=t.mountedInstances)||l.add(e.children),i()}return o((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),o((function(){return t&&(t._pendingUpdate=i),function(){t&&(t._pendingUpdate=i)}})),c((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=(0,n(1598).Z)(n(7294));var a=!1,o=a?function(){}:r.useLayoutEffect,c=a?function(){}:r.useEffect},9807:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(9499),a=(n(3782),n(7294)),o=n(1163),c=n(1664),i=n.n(c),l=n(6445),s=n.n(l),u=n(5154),f=n(5893),d=function(e){var t=(0,a.useState)(!1),n=t[0],r=t[1],c=(0,o.useRouter)(),l=function(){r(!n)};return(0,f.jsxs)("header",{className:s().header,children:[(0,f.jsx)("div",{className:"".concat(s().box," ").concat(s().logoWrapper),children:(0,f.jsx)(i(),{href:"/",as:"//",children:(0,f.jsx)("a",{children:(0,f.jsx)("img",{src:"./images/logo.png",alt:"logo"})})})}),(0,f.jsx)("div",{className:"".concat(s().box," ").concat(s().linksWrapper),children:(0,f.jsxs)("ul",{className:s().linksList,children:[(0,f.jsx)("li",{className:"".concat(s().linkItem," ").concat("/"===c.pathname?s().active:""),children:(0,f.jsx)(i(),{href:"/",as:"//",children:(0,f.jsx)("a",{children:"\u041d\u0430\u0447\u0430\u043b\u043e"})})}),(0,f.jsx)("li",{className:"".concat(s().linkItem," ").concat("/products"===c.pathname?s().active:""),children:(0,f.jsx)(i(),{href:"/products",as:"//products",children:(0,f.jsx)("a",{children:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u0438"})})}),(0,f.jsx)("li",{className:"".concat(s().linkItem," ").concat("/projects"===c.pathname?s().active:""),children:(0,f.jsx)(i(),{href:"/projects",as:"//projects",children:(0,f.jsx)("a",{children:"\u041f\u0440\u043e\u0435\u043a\u0442\u0438"})})}),(0,f.jsx)("li",{className:"".concat(s().linkItem," ").concat("/contacts"===c.pathname?s().active:""),children:(0,f.jsx)(i(),{href:"/contacts",as:"//contacts",children:(0,f.jsx)("a",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"})})})]})}),(0,f.jsx)("div",{className:"".concat(s().box," ").concat(s().mmbWrapper),children:(0,f.jsx)("div",{className:s().hbWrapper,children:(0,f.jsx)(u.jw0,{onClick:l,size:30})})}),n&&(0,f.jsxs)("div",{className:s().mobileMenuWrapper,children:[(0,f.jsx)("div",{className:s().inMenuCbWrapper,children:(0,f.jsx)(u.ZyS,{onClick:l,size:30})}),(0,f.jsxs)("ul",{className:s().linksList,children:[(0,f.jsx)("li",{className:"".concat(s().linkItem," ").concat("/"===c.pathname?s().active:""),children:(0,f.jsx)(i(),{href:"/",as:"//",children:(0,f.jsx)("a",{onClick:l,children:"\u041d\u0430\u0447\u0430\u043b\u043e"})})}),(0,f.jsx)("li",{className:"".concat(s().linkItem," ").concat("/products"===c.pathname?s().active:""),children:(0,f.jsx)(i(),{href:"/products",as:"//products",children:(0,f.jsx)("a",{onClick:l,children:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u0438"})})}),(0,f.jsx)("li",{className:"".concat(s().linkItem," ").concat("/projects"===c.pathname?s().active:""),children:(0,f.jsx)(i(),{href:"/projects",as:"//projects",children:(0,f.jsx)("a",{onClick:l,children:"\u041f\u0440\u043e\u0435\u043a\u0442\u0438"})})}),(0,f.jsx)("li",{className:"".concat(s().linkItem," ").concat("/contacts"===c.pathname?s().active:""),children:(0,f.jsx)(i(),{href:"/contacts",as:"//contacts",children:(0,f.jsx)("a",{onClick:l,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"})})})]}),(0,f.jsx)("div",{className:s().inMenuLogoWrapper,children:(0,f.jsx)("img",{src:"./images/logo.png",alt:"logo"})})]})]})},p=n(4971),h=n.n(p),v=function(e){var t=(0,a.useState)(!1);t[0],t[1];return(0,f.jsxs)("footer",{className:h().footer,children:[(0,f.jsx)("div",{className:"".concat(h().box," ").concat(h().logoWrapper),children:(0,f.jsx)(i(),{href:"/",as:"//",children:(0,f.jsx)("a",{children:(0,f.jsx)("img",{src:"./images/logo-silver.png",alt:"logo"})})})}),(0,f.jsx)("div",{className:"".concat(h().box," ").concat(h().linksWrapper),children:(0,f.jsx)("h2",{className:h().textEntry,children:"ALUREX \u24b8 2022"})}),(0,f.jsxs)("div",{className:"".concat(h().box," ").concat(h().mmbWrapper),children:[(0,f.jsxs)("div",{className:h().contactsWrapper,children:[(0,f.jsx)(u.DNl,{}),(0,f.jsx)("a",{href:"tel:+359897053616",children:" +359897053616 "})]}),(0,f.jsxs)("div",{className:h().contactsWrapper,children:[(0,f.jsx)(u.uWG,{}),(0,f.jsx)("span",{children:" alurex@abv.bg "})]})]})]})},m=n(5834),x=n.n(m),j=function(e){return(0,f.jsx)("main",{className:x().content,children:e.children})},y=n(9008),_=n.n(y),g=function(e){var t=e.title,n=e.keywords,r=e.description,a=e.og;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(_(),{children:[(0,f.jsx)("title",{children:t}),(0,f.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,f.jsx)("meta",{charSet:"utf-8"}),(0,f.jsx)("meta",{name:"keywords",content:n}),(0,f.jsx)("meta",{name:"description",content:r}),(0,f.jsx)("meta",{property:"og:title",content:a.title}),(0,f.jsx)("meta",{property:"og:description",content:a.description}),(0,f.jsx)("meta",{name:"robots",content:"all"})]})})};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t=e.Component,n=e.pageProps;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(g,{title:"ALUREX - \u0410\u043b\u0443\u043c\u0438\u043d\u0438\u0435\u0432\u0438 \u0438 \u0441\u0442\u044a\u043a\u043b\u0435\u043d\u0438 \u043f\u0430\u0440\u0430\u043f\u0435\u0442\u0438",description:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u0438 \u043c\u043e\u043d\u0442\u0430\u0436 \u043d\u0430 \u0430\u043b\u0443\u043c\u0438\u043d\u0438\u0435\u0432\u0438 \u0438 \u0441\u0442\u044a\u043a\u043b\u0435\u043d\u0438 \u043f\u0430\u0440\u0430\u043f\u0435\u0442\u0438",keywords:"\u0430\u043b\u0443\u043c\u0438\u043d\u0438\u0435\u0432\u0438, \u043f\u0430\u0440\u0430\u043f\u0435\u0442\u0438, \u0441\u0442\u044a\u043a\u043b\u0435\u043d\u0438, \u043c\u043e\u043d\u0442\u0430\u0436, aluminievi, parapeti, stakleni, \u0430\u043b\u0443\u0440\u0435\u043a\u0441, alurex",og:{title:"ALUREX - \u0410\u043b\u0443\u043c\u0438\u043d\u0438\u0435\u0432\u0438 \u0438 \u0441\u0442\u044a\u043a\u043b\u0435\u043d\u0438 \u043f\u0430\u0440\u0430\u043f\u0435\u0442\u0438",description:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u0438 \u043c\u043e\u043d\u0442\u0430\u0436 \u043d\u0430 \u0430\u043b\u0443\u043c\u0438\u043d\u0438\u0435\u0432\u0438 \u0438 \u0441\u0442\u044a\u043a\u043b\u0435\u043d\u0438 \u043f\u0430\u0440\u0430\u043f\u0435\u0442\u0438"}}),(0,f.jsx)(d,{}),(0,f.jsx)(j,{children:(0,f.jsx)(t,k({},n))}),(0,f.jsx)(v,{})]})}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9807)}])},4971:function(e){e.exports={footer:"footer_footer__SH230",box:"footer_box__YBsTG",logoWrapper:"footer_logoWrapper__6dzyB",linksWrapper:"footer_linksWrapper__4UREO",mmbWrapper:"footer_mmbWrapper__tT5lC",contactsWrapper:"footer_contactsWrapper__SIcdw",textEntry:"footer_textEntry__BPh4A"}},6445:function(e){e.exports={header:"header_header____5Dq",linksList:"header_linksList__R3nAZ",linkItem:"header_linkItem__Qwqig",active:"header_active__I1Fxw",box:"header_box__oC_ht",logoWrapper:"header_logoWrapper__UPnK8",linksWrapper:"header_linksWrapper__TyclJ",mmbWrapper:"header_mmbWrapper__iK6M3",hbWrapper:"header_hbWrapper__n5HiK",mobileMenuWrapper:"header_mobileMenuWrapper__qG36l",inMenuCbWrapper:"header_inMenuCbWrapper__bqFNM",inMenuLogoWrapper:"header_inMenuLogoWrapper__fEDjF"}},5834:function(e){e.exports={content:"content_content__djG8c"}},3782:function(){},9008:function(e,t,n){e.exports=n(2717)},1664:function(e,t,n){e.exports=n(7942)},1163:function(e,t,n){e.exports=n(9898)},5154:function(e,t,n){"use strict";n.d(t,{jw0:function(){return f},DNl:function(){return d},uWG:function(){return p},ZyS:function(){return h}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return r.createElement(u,c({attr:c({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var n,a=e.attr,o=e.size,l=e.title,s=i(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}function f(e){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"}}]})(e)}function d(e){return s({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"}}]})(e)}function p(e){return s({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"}}]})(e)}function h(e){return s({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"}}]})(e)}},9499:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(9898)}));var n=e.O();_N_E=n}]);