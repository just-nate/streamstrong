(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var rd={exports:{}},zo={};var wg;function bS(){if(wg)return zo;wg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return zo.Fragment=e,zo.jsx=i,zo.jsxs=i,zo}var Dg;function TS(){return Dg||(Dg=1,rd.exports=bS()),rd.exports}var Tt=TS(),sd={exports:{}},ae={};var Ug;function AS(){if(Ug)return ae;Ug=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function v(U,nt,gt){this.props=U,this.context=nt,this.refs=y,this.updater=gt||R}v.prototype.isReactComponent={},v.prototype.setState=function(U,nt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,nt,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function P(){}P.prototype=v.prototype;function N(U,nt,gt){this.props=U,this.context=nt,this.refs=y,this.updater=gt||R}var L=N.prototype=new P;L.constructor=N,C(L,v.prototype),L.isPureReactComponent=!0;var B=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function A(U,nt,gt){var At=gt.ref;return{$$typeof:o,type:U,key:nt,ref:At!==void 0?At:null,props:gt}}function w(U,nt){return A(U.type,nt,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function rt(U){var nt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(gt){return nt[gt]})}var at=/\/+/g;function dt(U,nt){return typeof U=="object"&&U!==null&&U.key!=null?rt(""+U.key):nt.toString(36)}function ut(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(I,I):(U.status="pending",U.then(function(nt){U.status==="pending"&&(U.status="fulfilled",U.value=nt)},function(nt){U.status==="pending"&&(U.status="rejected",U.reason=nt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function O(U,nt,gt,At,It){var et=typeof U;(et==="undefined"||et==="boolean")&&(U=null);var ct=!1;if(U===null)ct=!0;else switch(et){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(U.$$typeof){case o:case e:ct=!0;break;case x:return ct=U._init,O(ct(U._payload),nt,gt,At,It)}}if(ct)return It=It(U),ct=At===""?"."+dt(U,0):At,B(It)?(gt="",ct!=null&&(gt=ct.replace(at,"$&/")+"/"),O(It,nt,gt,"",function(Ht){return Ht})):It!=null&&(X(It)&&(It=w(It,gt+(It.key==null||U&&U.key===It.key?"":(""+It.key).replace(at,"$&/")+"/")+ct)),nt.push(It)),1;ct=0;var Dt=At===""?".":At+":";if(B(U))for(var Xt=0;Xt<U.length;Xt++)At=U[Xt],et=Dt+dt(At,Xt),ct+=O(At,nt,gt,et,It);else if(Xt=E(U),typeof Xt=="function")for(U=Xt.call(U),Xt=0;!(At=U.next()).done;)At=At.value,et=Dt+dt(At,Xt++),ct+=O(At,nt,gt,et,It);else if(et==="object"){if(typeof U.then=="function")return O(ut(U),nt,gt,At,It);throw nt=String(U),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ct}function H(U,nt,gt){if(U==null)return U;var At=[],It=0;return O(U,At,"","",function(et){return nt.call(gt,et,It++)}),At}function it(U){if(U._status===-1){var nt=U._result;nt=nt(),nt.then(function(gt){(U._status===0||U._status===-1)&&(U._status=1,U._result=gt)},function(gt){(U._status===0||U._status===-1)&&(U._status=2,U._result=gt)}),U._status===-1&&(U._status=0,U._result=nt)}if(U._status===1)return U._result.default;throw U._result}var yt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},xt={map:H,forEach:function(U,nt,gt){H(U,function(){nt.apply(this,arguments)},gt)},count:function(U){var nt=0;return H(U,function(){nt++}),nt},toArray:function(U){return H(U,function(nt){return nt})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ae.Activity=_,ae.Children=xt,ae.Component=v,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=N,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ae.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},ae.cache=function(U){return function(){return U.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(U,nt,gt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var At=C({},U.props),It=U.key;if(nt!=null)for(et in nt.key!==void 0&&(It=""+nt.key),nt)!Z.call(nt,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&nt.ref===void 0||(At[et]=nt[et]);var et=arguments.length-2;if(et===1)At.children=gt;else if(1<et){for(var ct=Array(et),Dt=0;Dt<et;Dt++)ct[Dt]=arguments[Dt+2];At.children=ct}return A(U.type,It,At)},ae.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ae.createElement=function(U,nt,gt){var At,It={},et=null;if(nt!=null)for(At in nt.key!==void 0&&(et=""+nt.key),nt)Z.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(It[At]=nt[At]);var ct=arguments.length-2;if(ct===1)It.children=gt;else if(1<ct){for(var Dt=Array(ct),Xt=0;Xt<ct;Xt++)Dt[Xt]=arguments[Xt+2];It.children=Dt}if(U&&U.defaultProps)for(At in ct=U.defaultProps,ct)It[At]===void 0&&(It[At]=ct[At]);return A(U,et,It)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(U){return{$$typeof:h,render:U}},ae.isValidElement=X,ae.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:it}},ae.memo=function(U,nt){return{$$typeof:p,type:U,compare:nt===void 0?null:nt}},ae.startTransition=function(U){var nt=z.T,gt={};z.T=gt;try{var At=U(),It=z.S;It!==null&&It(gt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(I,yt)}catch(et){yt(et)}finally{nt!==null&&gt.types!==null&&(nt.types=gt.types),z.T=nt}},ae.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ae.use=function(U){return z.H.use(U)},ae.useActionState=function(U,nt,gt){return z.H.useActionState(U,nt,gt)},ae.useCallback=function(U,nt){return z.H.useCallback(U,nt)},ae.useContext=function(U){return z.H.useContext(U)},ae.useDebugValue=function(){},ae.useDeferredValue=function(U,nt){return z.H.useDeferredValue(U,nt)},ae.useEffect=function(U,nt){return z.H.useEffect(U,nt)},ae.useEffectEvent=function(U){return z.H.useEffectEvent(U)},ae.useId=function(){return z.H.useId()},ae.useImperativeHandle=function(U,nt,gt){return z.H.useImperativeHandle(U,nt,gt)},ae.useInsertionEffect=function(U,nt){return z.H.useInsertionEffect(U,nt)},ae.useLayoutEffect=function(U,nt){return z.H.useLayoutEffect(U,nt)},ae.useMemo=function(U,nt){return z.H.useMemo(U,nt)},ae.useOptimistic=function(U,nt){return z.H.useOptimistic(U,nt)},ae.useReducer=function(U,nt,gt){return z.H.useReducer(U,nt,gt)},ae.useRef=function(U){return z.H.useRef(U)},ae.useState=function(U){return z.H.useState(U)},ae.useSyncExternalStore=function(U,nt,gt){return z.H.useSyncExternalStore(U,nt,gt)},ae.useTransition=function(){return z.H.useTransition()},ae.version="19.2.4",ae}var Lg;function Ih(){return Lg||(Lg=1,sd.exports=AS()),sd.exports}var kn=Ih(),od={exports:{}},Bo={},ld={exports:{}},ud={};var Ng;function RS(){return Ng||(Ng=1,(function(o){function e(O,H){var it=O.length;O.push(H);t:for(;0<it;){var yt=it-1>>>1,xt=O[yt];if(0<l(xt,H))O[yt]=H,O[it]=xt,it=yt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var H=O[0],it=O.pop();if(it!==H){O[0]=it;t:for(var yt=0,xt=O.length,U=xt>>>1;yt<U;){var nt=2*(yt+1)-1,gt=O[nt],At=nt+1,It=O[At];if(0>l(gt,it))At<xt&&0>l(It,gt)?(O[yt]=It,O[At]=it,yt=At):(O[yt]=gt,O[nt]=it,yt=nt);else if(At<xt&&0>l(It,it))O[yt]=It,O[At]=it,yt=At;else break t}}return H}function l(O,H){var it=O.sortIndex-H.sortIndex;return it!==0?it:O.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,_=null,S=3,E=!1,R=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=O)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function B(O){if(C=!1,L(O),!R)if(i(m)!==null)R=!0,I||(I=!0,rt());else{var H=i(p);H!==null&&ut(B,H.startTime-O)}}var I=!1,z=-1,Z=5,A=-1;function w(){return y?!0:!(o.unstable_now()-A<Z)}function X(){if(y=!1,I){var O=o.unstable_now();A=O;var H=!0;try{t:{R=!1,C&&(C=!1,P(z),z=-1),E=!0;var it=S;try{e:{for(L(O),_=i(m);_!==null&&!(_.expirationTime>O&&w());){var yt=_.callback;if(typeof yt=="function"){_.callback=null,S=_.priorityLevel;var xt=yt(_.expirationTime<=O);if(O=o.unstable_now(),typeof xt=="function"){_.callback=xt,L(O),H=!0;break e}_===i(m)&&r(m),L(O)}else r(m);_=i(m)}if(_!==null)H=!0;else{var U=i(p);U!==null&&ut(B,U.startTime-O),H=!1}}break t}finally{_=null,S=it,E=!1}H=void 0}}finally{H?rt():I=!1}}}var rt;if(typeof N=="function")rt=function(){N(X)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,dt=at.port2;at.port1.onmessage=X,rt=function(){dt.postMessage(null)}}else rt=function(){v(X,0)};function ut(O,H){z=v(function(){O(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var it=S;S=H;try{return O()}finally{S=it}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var it=S;S=O;try{return H()}finally{S=it}},o.unstable_scheduleCallback=function(O,H,it){var yt=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?yt+it:yt):it=yt,O){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=it+xt,O={id:x++,callback:H,priorityLevel:O,startTime:it,expirationTime:xt,sortIndex:-1},it>yt?(O.sortIndex=it,e(p,O),i(m)===null&&O===i(p)&&(C?(P(z),z=-1):C=!0,ut(B,it-yt))):(O.sortIndex=xt,e(m,O),R||E||(R=!0,I||(I=!0,rt()))),O},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(O){var H=S;return function(){var it=S;S=H;try{return O.apply(this,arguments)}finally{S=it}}}})(ud)),ud}var Og;function CS(){return Og||(Og=1,ld.exports=RS()),ld.exports}var cd={exports:{}},Dn={};var Pg;function wS(){if(Pg)return Dn;Pg=1;var o=Ih();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Dn.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:E}):x==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.4",Dn}var zg;function DS(){if(zg)return cd.exports;zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),cd.exports=wS(),cd.exports}var Bg;function US(){if(Bg)return Bo;Bg=1;var o=CS(),e=Ih(),i=DS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,b=u.child;b;){if(b===a){g=!0,a=u,s=f;break}if(b===s){g=!0,s=u,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,s=u;break}if(b===s){g=!0,s=f,a=u;break}b=b.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function rt(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case I:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case N:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:dt(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return dt(t(n))}catch{}}return null}var ut=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function U(t){return{current:t}}function nt(t){0>xt||(t.current=yt[xt],yt[xt]=null,xt--)}function gt(t,n){xt++,yt[xt]=t.current,t.current=n}var At=U(null),It=U(null),et=U(null),ct=U(null);function Dt(t,n){switch(gt(et,n),gt(It,t),gt(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?J0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=J0(n),t=$0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(At),gt(At,t)}function Xt(){nt(At),nt(It),nt(et)}function Ht(t){t.memoizedState!==null&&gt(ct,t);var n=At.current,a=$0(n,t.type);n!==a&&(gt(It,t),gt(At,a))}function de(t){It.current===t&&(nt(At),nt(It)),ct.current===t&&(nt(ct),Lo._currentValue=it)}var Qe,ge;function he(t){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+t+ge}var Ce=!1;function se(t,n){if(!t||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var $=ot}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(ot){$=ot}t.call(mt.prototype)}}else{try{throw Error()}catch(ot){$=ot}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&$&&typeof ot.stack=="string")return[ot.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var F=g.split(`
`),Q=b.split(`
`);for(u=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(s===F.length||u===Q.length)for(s=F.length-1,u=Q.length-1;1<=s&&0<=u&&F[s]!==Q[u];)u--;for(;1<=s&&0<=u;s--,u--)if(F[s]!==Q[u]){if(s!==1||u!==1)do if(s--,u--,0>u||F[s]!==Q[u]){var ft=`
`+F[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=u);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?he(a):""}function Je(t,n){switch(t.tag){case 26:case 27:case 5:return he(t.type);case 16:return he("Lazy");case 13:return t.child!==n&&n!==null?he("Suspense Fallback"):he("Suspense");case 19:return he("SuspenseList");case 0:case 15:return se(t.type,!1);case 11:return se(t.type.render,!1);case 1:return se(t.type,!0);case 31:return he("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=Je(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var je=Object.prototype.hasOwnProperty,Me=o.unstable_scheduleCallback,Ne=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,kt=o.log,ee=o.unstable_setDisableYieldValue,Mt=null,Et=null;function Bt(t){if(typeof kt=="function"&&ee(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,t)}catch{}}var Pt=Math.clz32?Math.clz32:k,wt=Math.log,le=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(wt(t)/le|0)|0}var Lt=256,bt=262144,zt=4194304;function St(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _t(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?u=St(s):(g&=b,g!==0?u=St(g):a||(a=b&~t,a!==0&&(u=St(a))))):(b=s&~f,b!==0?u=St(b):g!==0?u=St(g):a||(a=s&~t,a!==0&&(u=St(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Rt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xi(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,F=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Pt(a),mt=1<<ft;b[ft]=0,F[ft]=-1;var $=Q[ft];if($!==null)for(Q[ft]=null,ft=0;ft<$.length;ft++){var ot=$[ft];ot!==null&&(ot.lane&=-536870913)}a&=~mt}s!==0&&al(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function al(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Xs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Or(t,n){var a=n&-n;return a=(a&42)!==0?1:ks(a),(a&(t.suspendedLanes|n))!==0?0:a}function ks(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ws(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Mg(t.type))}function Li(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ni=Math.random().toString(36).slice(2),sn="__reactFiber$"+ni,vn="__reactProps$"+ni,Si="__reactContainer$"+ni,zr="__reactEvents$"+ni,Br="__reactListeners$"+ni,rl="__reactHandles$"+ni,qs="__reactResources$"+ni,ar="__reactMarker$"+ni;function Ys(t){delete t[sn],delete t[vn],delete t[zr],delete t[Br],delete t[rl]}function Ma(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Si]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=sg(t);t!==null;){if(a=t[sn])return a;t=sg(t)}return n}t=a,a=t.parentNode}return null}function Ea(t){if(t=t[sn]||t[Si]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function rr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ba(t){var n=t[qs];return n||(n=t[qs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(t){t[ar]=!0}var q=new Set,st={};function J(t,n){j(t,n),j(t+"Capture",n)}function j(t,n){for(st[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ft={},Nt={};function Gt(t){return je.call(Nt,t)?!0:je.call(Ft,t)?!1:Ut.test(t)?Nt[t]=!0:(Ft[t]=!0,!1)}function Wt(t,n,a){if(Gt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Jt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function we(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function We(t){if(!t._valueTracker){var n=we(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function Oe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=we(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var De=/[\n"\\]/g;function ie(t){return t.replace(De,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xn(t,n,a,s,u,f,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$t(n)):t.value!==""+$t(n)&&(t.value=""+$t(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,g,$t(n)):a!=null?Sn(t,g,$t(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+$t(b):t.removeAttribute("name")}function Wi(t,n,a,s,u,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){We(t);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),We(t)}function Sn(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ii(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ze(t,n,a){if(n!=null&&(n=""+$t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$t(a):""}function yn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ut(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=$t(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),We(t)}function dn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Fr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&En(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&En(t,f,n[f])}function yi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(t){return yv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var ec=null;function nc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ir=null,Hr=null;function Qh(t){var n=Ea(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(xn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[vn]||null;if(!u)throw Error(r(90));xn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Oe(s)}break t;case"textarea":ze(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ii(t,!!a.multiple,n,!1)}}}var ic=!1;function Jh(t,n,a){if(ic)return t(n,a);ic=!0;try{var s=t(n);return s}finally{if(ic=!1,(Ir!==null||Hr!==null)&&(Yl(),Ir&&(n=Ir,t=Hr,Hr=Ir=null,Qh(n),t)))for(n=0;n<t.length;n++)Qh(t[n])}}function js(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=!1;if(Yi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){ac=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{ac=!1}var Ta=null,rc=null,ol=null;function $h(){if(ol)return ol;var t,n=rc,a=n.length,s,u="value"in Ta?Ta.value:Ta.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return ol=u.slice(t,1<s?1-s:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function tp(){return!1}function Fn(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ul:tp,this.isPropagationStopped=tp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=Fn(sr),Ks=_({},sr,{view:0,detail:0}),Mv=Fn(Ks),sc,oc,Qs,fl=_({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(sc=t.screenX-Qs.screenX,oc=t.screenY-Qs.screenY):oc=sc=0,Qs=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),ep=Fn(fl),Ev=_({},fl,{dataTransfer:0}),bv=Fn(Ev),Tv=_({},Ks,{relatedTarget:0}),lc=Fn(Tv),Av=_({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=Fn(Av),Cv=_({},sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wv=Fn(Cv),Dv=_({},sr,{data:0}),np=Fn(Dv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Nv[t])?!!n[t]:!1}function uc(){return Ov}var Pv=_({},Ks,{key:function(t){if(t.key){var n=Uv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zv=Fn(Pv),Bv=_({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=Fn(Bv),Fv=_({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),Iv=Fn(Fv),Hv=_({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=Fn(Hv),Vv=_({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=Fn(Vv),kv=_({},sr,{newState:0,oldState:0}),Wv=Fn(kv),qv=[9,13,27,32],cc=Yi&&"CompositionEvent"in window,Js=null;Yi&&"documentMode"in document&&(Js=document.documentMode);var Yv=Yi&&"TextEvent"in window&&!Js,ap=Yi&&(!cc||Js&&8<Js&&11>=Js),rp=" ",sp=!1;function op(t,n){switch(t){case"keyup":return qv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function jv(t,n){switch(t){case"compositionend":return lp(n);case"keypress":return n.which!==32?null:(sp=!0,rp);case"textInput":return t=n.data,t===rp&&sp?null:t;default:return null}}function Zv(t,n){if(Gr)return t==="compositionend"||!cc&&op(t,n)?(t=$h(),ol=rc=Ta=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Kv[t.type]:n==="textarea"}function cp(t,n,a,s){Ir?Hr?Hr.push(s):Hr=[s]:Ir=s,n=tu(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var $s=null,to=null;function Qv(t){q0(t,0)}function dl(t){var n=rr(t);if(Oe(n))return t}function fp(t,n){if(t==="change")return n}var dp=!1;if(Yi){var fc;if(Yi){var dc="oninput"in document;if(!dc){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),dc=typeof hp.oninput=="function"}fc=dc}else fc=!1;dp=fc&&(!document.documentMode||9<document.documentMode)}function pp(){$s&&($s.detachEvent("onpropertychange",mp),to=$s=null)}function mp(t){if(t.propertyName==="value"&&dl(to)){var n=[];cp(n,to,t,nc(t)),Jh(Qv,n)}}function Jv(t,n,a){t==="focusin"?(pp(),$s=n,to=a,$s.attachEvent("onpropertychange",mp)):t==="focusout"&&pp()}function $v(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(to)}function tx(t,n){if(t==="click")return dl(n)}function ex(t,n){if(t==="input"||t==="change")return dl(n)}function nx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:nx;function eo(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!je.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _p(t,n){var a=gp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=gp(a)}}function vp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?vp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function xp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function hc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ix=Yi&&"documentMode"in document&&11>=document.documentMode,Vr=null,pc=null,no=null,mc=!1;function Sp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mc||Vr==null||Vr!==Kt(s)||(s=Vr,"selectionStart"in s&&hc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),no&&eo(no,s)||(no=s,s=tu(pc,"onSelect"),0<s.length&&(n=new cl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Vr)))}function or(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Xr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},gc={},yp={};Yi&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function lr(t){if(gc[t])return gc[t];if(!Xr[t])return t;var n=Xr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in yp)return gc[t]=n[a];return t}var Mp=lr("animationend"),Ep=lr("animationiteration"),bp=lr("animationstart"),ax=lr("transitionrun"),rx=lr("transitionstart"),sx=lr("transitioncancel"),Tp=lr("transitionend"),Ap=new Map,_c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_c.push("scrollEnd");function Mi(t,n){Ap.set(t,n),J(n,[t])}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],kr=0,vc=0;function pl(){for(var t=kr,n=vc=kr=0;n<t;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&Rp(a,u,f)}}function ml(t,n,a,s){ai[kr++]=t,ai[kr++]=n,ai[kr++]=a,ai[kr++]=s,vc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function xc(t,n,a,s){return ml(t,n,a,s),gl(t)}function ur(t,n){return ml(t,null,null,n),gl(t)}function Rp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function gl(t){if(50<To)throw To=0,wf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Wr={};function ox(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,s){return new ox(t,n,a,s)}function Sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Cp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _l(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")Sc(t)&&(g=1);else if(typeof t=="string")g=dS(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case A:return t=jn(31,a,n,u),t.elementType=A,t.lanes=f,t;case C:return cr(a.children,u,f,n);case y:g=8,u|=24;break;case v:return t=jn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case B:return t=jn(13,a,n,u),t.elementType=B,t.lanes=f,t;case I:return t=jn(19,a,n,u),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:g=10;break t;case P:g=9;break t;case L:g=11;break t;case z:g=14;break t;case Z:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=jn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function cr(t,n,a,s){return t=jn(7,t,s,n),t.lanes=a,t}function yc(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function wp(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function Mc(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Dp=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=Dp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},Dp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var qr=[],Yr=0,vl=null,io=0,si=[],oi=0,Aa=null,Ni=1,Oi="";function Zi(t,n){qr[Yr++]=io,qr[Yr++]=vl,vl=t,io=n}function Up(t,n,a){si[oi++]=Ni,si[oi++]=Oi,si[oi++]=Aa,Aa=t;var s=Ni;t=Oi;var u=32-Pt(s)-1;s&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Ni=1<<32-Pt(n)+u|a<<u|s,Oi=f+t}else Ni=1<<f|a<<u|s,Oi=t}function Ec(t){t.return!==null&&(Zi(t,1),Up(t,1,0))}function bc(t){for(;t===vl;)vl=qr[--Yr],qr[Yr]=null,io=qr[--Yr],qr[Yr]=null;for(;t===Aa;)Aa=si[--oi],si[oi]=null,Oi=si[--oi],si[oi]=null,Ni=si[--oi],si[oi]=null}function Lp(t,n){si[oi++]=Ni,si[oi++]=Oi,si[oi++]=Aa,Ni=n.id,Oi=n.overflow,Aa=t}var bn=null,qe=null,xe=!1,Ra=null,li=!1,Tc=Error(r(519));function Ca(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(ri(n,t)),Tc}function Np(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[sn]=t,n[vn]=s,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)me(Ro[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Wi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),yn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||K0(n.textContent,a)?(s.popover!=null&&(me("beforetoggle",n),me("toggle",n)),s.onScroll!=null&&me("scroll",n),s.onScrollEnd!=null&&me("scrollend",n),s.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Ca(t,!0)}function Op(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:bn=bn.return}}function jr(t){if(t!==bn)return!1;if(!xe)return Op(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||kf(t.type,t.memoizedProps)),a=!a),a&&qe&&Ca(t),Op(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qe=rg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qe=rg(t)}else n===27?(n=qe,Va(t.type)?(t=Zf,Zf=null,qe=t):qe=n):qe=bn?ci(t.stateNode.nextSibling):null;return!0}function fr(){qe=bn=null,xe=!1}function Ac(){var t=Ra;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),Ra=null),t}function ao(t){Ra===null?Ra=[t]:Ra.push(t)}var Rc=U(null),dr=null,Ki=null;function wa(t,n,a){gt(Rc,n._currentValue),n._currentValue=a}function Qi(t){t._currentValue=Rc.current,nt(Rc)}function Cc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function wc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var F=0;F<n.length;F++)if(b.context===n[F]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Cc(f.return,a,t),s||(g=null);break t}f=b.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Cc(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Zr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var b=u.type;Yn(u.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(u===ct.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Lo):t=[Lo])}u=u.return}t!==null&&wc(n,t,a,s),n.flags|=262144}function xl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hr(t){dr=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Pp(dr,t)}function Sl(t,n){return dr===null&&hr(t),Pp(t,n)}function Pp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(t===null)throw Error(r(308));Ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ki=Ki.next=n;return a}var lx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ux=o.unstable_scheduleCallback,cx=o.unstable_NormalPriority,on={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dc(){return{controller:new lx,data:new Map,refCount:0}}function ro(t){t.refCount--,t.refCount===0&&ux(cx,function(){t.controller.abort()})}var so=null,Uc=0,Kr=0,Qr=null;function fx(t,n){if(so===null){var a=so=[];Uc=0,Kr=Pf(),Qr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Uc++,n.then(zp,zp),n}function zp(){if(--Uc===0&&so!==null){Qr!==null&&(Qr.status="fulfilled");var t=so;so=null,Kr=0,Qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function dx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Bp=O.S;O.S=function(t,n){S0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fx(t,n),Bp!==null&&Bp(t,n)};var pr=U(null);function Lc(){var t=pr.current;return t!==null?t:ke.pooledCache}function yl(t,n){n===null?gt(pr,pr.current):gt(pr,n.pool)}function Fp(){var t=Lc();return t===null?null:{parent:on._currentValue,pool:t}}var Jr=Error(r(460)),Nc=Error(r(474)),Ml=Error(r(542)),El={then:function(){}};function Ip(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vp(t),t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vp(t),t}throw gr=n,Jr}}function mr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gr=a,Jr):a}}var gr=null;function Gp(){if(gr===null)throw Error(r(459));var t=gr;return gr=null,t}function Vp(t){if(t===Jr||t===Ml)throw Error(r(483))}var $r=null,oo=0;function bl(t){var n=oo;return oo+=1,$r===null&&($r=[]),Hp($r,t,n)}function lo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Xp(t){function n(Y,V){if(t){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function s(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=ji(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=67108866,V):K):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,V,K,pt){return V===null||V.tag!==6?(V=yc(K,Y.mode,pt),V.return=Y,V):(V=u(V,K),V.return=Y,V)}function F(Y,V,K,pt){var Qt=K.type;return Qt===C?ft(Y,V,K.props.children,pt,K.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===Z&&mr(Qt)===V.type)?(V=u(V,K.props),lo(V,K),V.return=Y,V):(V=_l(K.type,K.key,K.props,null,Y.mode,pt),lo(V,K),V.return=Y,V)}function Q(Y,V,K,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Mc(K,Y.mode,pt),V.return=Y,V):(V=u(V,K.children||[]),V.return=Y,V)}function ft(Y,V,K,pt,Qt){return V===null||V.tag!==7?(V=cr(K,Y.mode,pt,Qt),V.return=Y,V):(V=u(V,K),V.return=Y,V)}function mt(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=yc(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return K=_l(V.type,V.key,V.props,null,Y.mode,K),lo(K,V),K.return=Y,K;case R:return V=Mc(V,Y.mode,K),V.return=Y,V;case Z:return V=mr(V),mt(Y,V,K)}if(ut(V)||rt(V))return V=cr(V,Y.mode,K,null),V.return=Y,V;if(typeof V.then=="function")return mt(Y,bl(V),K);if(V.$$typeof===N)return mt(Y,Sl(Y,V),K);Tl(Y,V)}return null}function $(Y,V,K,pt){var Qt=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qt!==null?null:b(Y,V,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Qt?F(Y,V,K,pt):null;case R:return K.key===Qt?Q(Y,V,K,pt):null;case Z:return K=mr(K),$(Y,V,K,pt)}if(ut(K)||rt(K))return Qt!==null?null:ft(Y,V,K,pt,null);if(typeof K.then=="function")return $(Y,V,bl(K),pt);if(K.$$typeof===N)return $(Y,V,Sl(Y,K),pt);Tl(Y,K)}return null}function ot(Y,V,K,pt,Qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(K)||null,b(V,Y,""+pt,Qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case E:return Y=Y.get(pt.key===null?K:pt.key)||null,F(V,Y,pt,Qt);case R:return Y=Y.get(pt.key===null?K:pt.key)||null,Q(V,Y,pt,Qt);case Z:return pt=mr(pt),ot(Y,V,K,pt,Qt)}if(ut(pt)||rt(pt))return Y=Y.get(K)||null,ft(V,Y,pt,Qt,null);if(typeof pt.then=="function")return ot(Y,V,K,bl(pt),Qt);if(pt.$$typeof===N)return ot(Y,V,K,Sl(V,pt),Qt);Tl(V,pt)}return null}function Vt(Y,V,K,pt){for(var Qt=null,Ae=null,jt=V,ue=V=0,ve=null;jt!==null&&ue<K.length;ue++){jt.index>ue?(ve=jt,jt=null):ve=jt.sibling;var Re=$(Y,jt,K[ue],pt);if(Re===null){jt===null&&(jt=ve);break}t&&jt&&Re.alternate===null&&n(Y,jt),V=f(Re,V,ue),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re,jt=ve}if(ue===K.length)return a(Y,jt),xe&&Zi(Y,ue),Qt;if(jt===null){for(;ue<K.length;ue++)jt=mt(Y,K[ue],pt),jt!==null&&(V=f(jt,V,ue),Ae===null?Qt=jt:Ae.sibling=jt,Ae=jt);return xe&&Zi(Y,ue),Qt}for(jt=s(jt);ue<K.length;ue++)ve=ot(jt,Y,ue,K[ue],pt),ve!==null&&(t&&ve.alternate!==null&&jt.delete(ve.key===null?ue:ve.key),V=f(ve,V,ue),Ae===null?Qt=ve:Ae.sibling=ve,Ae=ve);return t&&jt.forEach(function(Ya){return n(Y,Ya)}),xe&&Zi(Y,ue),Qt}function te(Y,V,K,pt){if(K==null)throw Error(r(151));for(var Qt=null,Ae=null,jt=V,ue=V=0,ve=null,Re=K.next();jt!==null&&!Re.done;ue++,Re=K.next()){jt.index>ue?(ve=jt,jt=null):ve=jt.sibling;var Ya=$(Y,jt,Re.value,pt);if(Ya===null){jt===null&&(jt=ve);break}t&&jt&&Ya.alternate===null&&n(Y,jt),V=f(Ya,V,ue),Ae===null?Qt=Ya:Ae.sibling=Ya,Ae=Ya,jt=ve}if(Re.done)return a(Y,jt),xe&&Zi(Y,ue),Qt;if(jt===null){for(;!Re.done;ue++,Re=K.next())Re=mt(Y,Re.value,pt),Re!==null&&(V=f(Re,V,ue),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return xe&&Zi(Y,ue),Qt}for(jt=s(jt);!Re.done;ue++,Re=K.next())Re=ot(jt,Y,ue,Re.value,pt),Re!==null&&(t&&Re.alternate!==null&&jt.delete(Re.key===null?ue:Re.key),V=f(Re,V,ue),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return t&&jt.forEach(function(ES){return n(Y,ES)}),xe&&Zi(Y,ue),Qt}function Ve(Y,V,K,pt){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:t:{for(var Qt=K.key;V!==null;){if(V.key===Qt){if(Qt=K.type,Qt===C){if(V.tag===7){a(Y,V.sibling),pt=u(V,K.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===Z&&mr(Qt)===V.type){a(Y,V.sibling),pt=u(V,K.props),lo(pt,K),pt.return=Y,Y=pt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}K.type===C?(pt=cr(K.props.children,Y.mode,pt,K.key),pt.return=Y,Y=pt):(pt=_l(K.type,K.key,K.props,null,Y.mode,pt),lo(pt,K),pt.return=Y,Y=pt)}return g(Y);case R:t:{for(Qt=K.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(Y,V.sibling),pt=u(V,K.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}pt=Mc(K,Y.mode,pt),pt.return=Y,Y=pt}return g(Y);case Z:return K=mr(K),Ve(Y,V,K,pt)}if(ut(K))return Vt(Y,V,K,pt);if(rt(K)){if(Qt=rt(K),typeof Qt!="function")throw Error(r(150));return K=Qt.call(K),te(Y,V,K,pt)}if(typeof K.then=="function")return Ve(Y,V,bl(K),pt);if(K.$$typeof===N)return Ve(Y,V,Sl(Y,K),pt);Tl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(Y,V.sibling),pt=u(V,K),pt.return=Y,Y=pt):(a(Y,V),pt=yc(K,Y.mode,pt),pt.return=Y,Y=pt),g(Y)):a(Y,V)}return function(Y,V,K,pt){try{oo=0;var Qt=Ve(Y,V,K,pt);return $r=null,Qt}catch(jt){if(jt===Jr||jt===Ml)throw jt;var Ae=jn(29,jt,null,Y.mode);return Ae.lanes=pt,Ae.return=Y,Ae}}}var _r=Xp(!0),kp=Xp(!1),Da=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ue&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=gl(t),Rp(t,null,a),n}return ml(t,s,n,a),gl(t)}function uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Xs(t,a)}}function zc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Bc=!1;function co(){if(Bc){var t=Qr;if(t!==null)throw t}}function fo(t,n,a,s){Bc=!1;var u=t.updateQueue;Da=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var F=b,Q=F.next;F.next=null,g===null?f=Q:g.next=Q,g=F;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==g&&(b===null?ft.firstBaseUpdate=Q:b.next=Q,ft.lastBaseUpdate=F))}if(f!==null){var mt=u.baseState;g=0,ft=Q=F=null,b=f;do{var $=b.lane&-536870913,ot=$!==b.lane;if(ot?(_e&$)===$:(s&$)===$){$!==0&&$===Kr&&(Bc=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Vt=t,te=b;$=n;var Ve=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){mt=Vt.call(Ve,mt,$);break t}mt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,$=typeof Vt=="function"?Vt.call(Ve,mt,$):Vt,$==null)break t;mt=_({},mt,$);break t;case 2:Da=!0}}$=b.callback,$!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[$]:ot.push($))}else ot={lane:$,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?(Q=ft=ot,F=mt):ft=ft.next=ot,g|=$;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ft===null&&(F=mt),u.baseState=F,u.firstBaseUpdate=Q,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ba|=g,t.lanes=g,t.memoizedState=mt}}function Wp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function qp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Wp(a[t],n)}var ts=U(null),Al=U(0);function Yp(t,n){t=sa,gt(Al,t),gt(ts,n),sa=t|n.baseLanes}function Fc(){gt(Al,sa),gt(ts,ts.current)}function Ic(){sa=Al.current,nt(ts),nt(Al)}var Zn=U(null),ui=null;function Na(t){var n=t.alternate;gt(en,en.current&1),gt(Zn,t),ui===null&&(n===null||ts.current!==null||n.memoizedState!==null)&&(ui=t)}function Hc(t){gt(en,en.current),gt(Zn,t),ui===null&&(ui=t)}function jp(t){t.tag===22?(gt(en,en.current),gt(Zn,t),ui===null&&(ui=t)):Oa()}function Oa(){gt(en,en.current),gt(Zn,Zn.current)}function Kn(t){nt(Zn),ui===t&&(ui=null),nt(en)}var en=U(0);function Rl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yf(a)||jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=0,oe=null,He=null,ln=null,Cl=!1,es=!1,vr=!1,wl=0,ho=0,ns=null,hx=0;function $e(){throw Error(r(321))}function Gc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Vc(t,n,a,s,u,f){return Ji=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Um:af,vr=!1,f=a(s,u),vr=!1,es&&(f=Kp(n,a,s,u)),Zp(t),f}function Zp(t){O.H=go;var n=He!==null&&He.next!==null;if(Ji=0,ln=He=oe=null,Cl=!1,ho=0,ns=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&xl(t)&&(un=!0))}function Kp(t,n,a,s){oe=t;var u=0;do{if(es&&(ns=null),ho=0,es=!1,25<=u)throw Error(r(301));if(u+=1,ln=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Lm,f=n(a,s)}while(es);return f}function px(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?po(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(oe.flags|=1024),n}function Xc(){var t=wl!==0;return wl=0,t}function kc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Wc(t){if(Cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cl=!1}Ji=0,ln=He=oe=null,es=!1,ho=wl=0,ns=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?oe.memoizedState=ln=t:ln=ln.next=t,ln}function nn(){if(He===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=ln===null?oe.memoizedState:ln.next;if(n!==null)ln=n,He=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},ln===null?oe.memoizedState=ln=t:ln=ln.next=t}return ln}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(t){var n=ho;return ho+=1,ns===null&&(ns=[]),t=Hp(ns,t,n),n=oe,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Um:af),t}function Ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return po(t);if(t.$$typeof===N)return Tn(t)}throw Error(r(438,String(t)))}function qc(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function $i(t,n){return typeof n=="function"?n(t):n}function Ll(t){var n=nn();return Yc(n,He,t)}function Yc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var b=g=null,F=null,Q=n,ft=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(_e&mt)===mt:(Ji&mt)===mt){var $=Q.revertLane;if($===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Kr&&(ft=!0);else if((Ji&$)===$){Q=Q.next,$===Kr&&(ft=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},F===null?(b=F=mt,g=f):F=F.next=mt,oe.lanes|=$,Ba|=$;mt=Q.action,vr&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else $={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},F===null?(b=F=$,g=f):F=F.next=$,oe.lanes|=mt,Ba|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(F===null?g=f:F.next=b,!Yn(f,t.memoizedState)&&(un=!0,ft&&(a=Qr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=F,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function jc(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Yn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Qp(t,n,a){var s=oe,u=nn(),f=xe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Yn((He||u).memoizedState,a);if(g&&(u.memoizedState=a,un=!0),u=u.queue,Qc(tm.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,is(9,{destroy:void 0},$p.bind(null,s,u,a,n),null),ke===null)throw Error(r(349));f||(Ji&127)!==0||Jp(s,n,a)}return a}function Jp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Dl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function $p(t,n,a,s){n.value=a,n.getSnapshot=s,em(n)&&nm(t)}function tm(t,n,a){return a(function(){em(n)&&nm(t)})}function em(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function nm(t){var n=ur(t,2);n!==null&&Xn(n,t,2)}function Zc(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),vr){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},n}function im(t,n,a,s){return t.baseState=a,Yc(t,He,typeof s=="function"?s:$i)}function mx(t,n,a,s,u){if(Pl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,am(n,f)):(f.next=a.next,n.pending=a.next=f)}}function am(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var b=a(u,s),F=O.S;F!==null&&F(g,b),rm(t,n,b)}catch(Q){Kc(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(u,s),rm(t,n,f)}catch(Q){Kc(t,n,Q)}}function rm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){sm(t,n,s)},function(s){return Kc(t,n,s)}):sm(t,n,a)}function sm(t,n,a){n.status="fulfilled",n.value=a,om(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,am(t,a)))}function Kc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,om(n),n=n.next;while(n!==s)}t.action=null}function om(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function lm(t,n){return n}function um(t,n){if(xe){var a=ke.formState;if(a!==null){t:{var s=oe;if(xe){if(qe){e:{for(var u=qe,f=li;u.nodeType!==8;){if(!f){u=null;break e}if(u=ci(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qe=ci(u.nextSibling),s=u.data==="F!";break t}}Ca(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lm,lastRenderedState:n},a.queue=s,a=Cm.bind(null,oe,s),s.dispatch=a,s=Zc(!1),f=nf.bind(null,oe,!1,s.queue),s=On(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=mx.bind(null,oe,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function cm(t){var n=nn();return fm(n,He,t)}function fm(t,n,a){if(n=Yc(t,n,lm)[0],t=Ll($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=po(n)}catch(g){throw g===Jr?Ml:g}else s=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,is(9,{destroy:void 0},gx.bind(null,u,a),null)),[s,f,t]}function gx(t,n){t.action=n}function dm(t){var n=nn(),a=He;if(a!==null)return fm(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function is(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Dl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function hm(){return nn().memoizedState}function Nl(t,n,a,s){var u=On();oe.flags|=t,u.memoizedState=is(1|n,{destroy:void 0},a,s===void 0?null:s)}function Ol(t,n,a,s){var u=nn();s=s===void 0?null:s;var f=u.memoizedState.inst;He!==null&&s!==null&&Gc(s,He.memoizedState.deps)?u.memoizedState=is(n,f,a,s):(oe.flags|=t,u.memoizedState=is(1|n,f,a,s))}function pm(t,n){Nl(8390656,8,t,n)}function Qc(t,n){Ol(2048,8,t,n)}function _x(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Dl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function mm(t){var n=nn().memoizedState;return _x({ref:n,nextImpl:t}),function(){if((Ue&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function gm(t,n){return Ol(4,2,t,n)}function _m(t,n){return Ol(4,4,t,n)}function vm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function xm(t,n,a){a=a!=null?a.concat([t]):null,Ol(4,4,vm.bind(null,n,t),a)}function Jc(){}function Sm(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Gc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function ym(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Gc(n,s[1]))return s[0];if(s=t(),vr){Bt(!0);try{t()}finally{Bt(!1)}}return a.memoizedState=[s,n],s}function $c(t,n,a){return a===void 0||(Ji&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=M0(),oe.lanes|=t,Ba|=t,a)}function Mm(t,n,a,s){return Yn(a,n)?a:ts.current!==null?(t=$c(t,a,s),Yn(t,n)||(un=!0),t):(Ji&42)===0||(Ji&1073741824)!==0&&(_e&261930)===0?(un=!0,t.memoizedState=a):(t=M0(),oe.lanes|=t,Ba|=t,n)}function Em(t,n,a,s,u){var f=H.p;H.p=f!==0&&8>f?f:8;var g=O.T,b={};O.T=b,nf(t,!1,n,a);try{var F=u(),Q=O.S;if(Q!==null&&Q(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ft=dx(F,s);mo(t,n,ft,$n(t))}else mo(t,n,s,$n(t))}catch(mt){mo(t,n,{then:function(){},status:"rejected",reason:mt},$n())}finally{H.p=f,g!==null&&b.types!==null&&(g.types=b.types),O.T=g}}function vx(){}function tf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=bm(t).queue;Em(t,u,n,it,a===null?vx:function(){return Tm(t),a(s)})}function bm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:it},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Tm(t){var n=bm(t);n.next===null&&(n=t.alternate.memoizedState),mo(t,n.next.queue,{},$n())}function ef(){return Tn(Lo)}function Am(){return nn().memoizedState}function Rm(){return nn().memoizedState}function xx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Ua(a);var s=La(n,t,a);s!==null&&(Xn(s,n,a),uo(s,n,a)),n={cache:Dc()},t.payload=n;return}n=n.return}}function Sx(t,n,a){var s=$n();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)?wm(n,a):(a=xc(t,n,a,s),a!==null&&(Xn(a,t,s),Dm(a,n,s)))}function Cm(t,n,a){var s=$n();mo(t,n,a,s)}function mo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))wm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(u.hasEagerState=!0,u.eagerState=b,Yn(b,g))return ml(t,n,u,0),ke===null&&pl(),!1}catch{}if(a=xc(t,n,u,s),a!==null)return Xn(a,t,s),Dm(a,n,s),!0}return!1}function nf(t,n,a,s){if(s={lane:2,revertLane:Pf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(n)throw Error(r(479))}else n=xc(t,a,s,2),n!==null&&Xn(n,t,2)}function Pl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function wm(t,n){es=Cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Dm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Xs(t,a)}}var go={readContext:Tn,use:Ul,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};go.useEffectEvent=$e;var Um={readContext:Tn,use:Ul,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:pm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Nl(4194308,4,vm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Nl(4194308,4,t,n)},useInsertionEffect:function(t,n){Nl(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(vr){Bt(!0);try{t()}finally{Bt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var u=a(n);if(vr){Bt(!0);try{a(n)}finally{Bt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Sx.bind(null,oe,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=Zc(t);var n=t.queue,a=Cm.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Jc,useDeferredValue:function(t,n){var a=On();return $c(a,t,n)},useTransition:function(){var t=Zc(!1);return t=Em.bind(null,oe,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=oe,u=On();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(_e&127)!==0||Jp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,pm(tm.bind(null,s,f,t),[t]),s.flags|=2048,is(9,{destroy:void 0},$p.bind(null,s,f,a,n),null),a},useId:function(){var t=On(),n=ke.identifierPrefix;if(xe){var a=Oi,s=Ni;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ef,useFormState:um,useActionState:um,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=nf.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:qc,useCacheRefresh:function(){return On().memoizedState=xx.bind(null,oe)},useEffectEvent:function(t){var n=On(),a={impl:t};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},af={readContext:Tn,use:Ul,useCallback:Sm,useContext:Tn,useEffect:Qc,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:ym,useReducer:Ll,useRef:hm,useState:function(){return Ll($i)},useDebugValue:Jc,useDeferredValue:function(t,n){var a=nn();return Mm(a,He.memoizedState,t,n)},useTransition:function(){var t=Ll($i)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:ef,useFormState:cm,useActionState:cm,useOptimistic:function(t,n){var a=nn();return im(a,He,t,n)},useMemoCache:qc,useCacheRefresh:Rm};af.useEffectEvent=mm;var Lm={readContext:Tn,use:Ul,useCallback:Sm,useContext:Tn,useEffect:Qc,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:ym,useReducer:jc,useRef:hm,useState:function(){return jc($i)},useDebugValue:Jc,useDeferredValue:function(t,n){var a=nn();return He===null?$c(a,t,n):Mm(a,He.memoizedState,t,n)},useTransition:function(){var t=jc($i)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:ef,useFormState:dm,useActionState:dm,useOptimistic:function(t,n){var a=nn();return He!==null?im(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:qc,useCacheRefresh:Rm};Lm.useEffectEvent=mm;function rf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var sf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=$n(),u=Ua(s);u.payload=n,a!=null&&(u.callback=a),n=La(t,u,s),n!==null&&(Xn(n,t,s),uo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=$n(),u=Ua(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(t,u,s),n!==null&&(Xn(n,t,s),uo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),s=Ua(a);s.tag=2,n!=null&&(s.callback=n),n=La(t,s,a),n!==null&&(Xn(n,t,a),uo(n,t,a))}};function Nm(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!eo(a,s)||!eo(u,f):!0}function Om(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&sf.enqueueReplaceState(n,n.state,null)}function xr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Pm(t){hl(t)}function zm(t){console.error(t)}function Bm(t){hl(t)}function zl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Fm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function of(t,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(t,n)},a}function Im(t){return t=Ua(t),t.tag=3,t}function Hm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Fm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Fm(n,a,s),typeof u!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function yx(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Zr(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?jl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===El?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Lf(t,s,u)),!1;case 22:return a.flags|=65536,s===El?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Lf(t,s,u)),!1}throw Error(r(435,a.tag))}return Lf(t,s,u),jl(),!1}if(xe)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Tc&&(t=Error(r(422),{cause:s}),ao(ri(t,a)))):(s!==Tc&&(n=Error(r(423),{cause:s}),ao(ri(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=ri(s,a),u=of(t.stateNode,s,u),zc(t,u),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),bo===null?bo=[f]:bo.push(f),tn!==4&&(tn=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=of(a.stateNode,s,t),zc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fa===null||!Fa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Im(u),Hm(u,t,a,s),zc(a,u),!1}a=a.return}while(a!==null);return!1}var lf=Error(r(461)),un=!1;function An(t,n,a,s){n.child=t===null?kp(n,null,a,s):_r(n,t.child,a,s)}function Gm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var b in s)b!=="ref"&&(g[b]=s[b])}else g=s;return hr(n),s=Vc(t,n,a,g,f,u),b=Xc(),t!==null&&!un?(kc(t,n,u),ta(t,n,u)):(xe&&b&&Ec(n),n.flags|=1,An(t,n,s,u),n.child)}function Vm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Sc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Xm(t,n,f,s,u)):(t=_l(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!gf(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(g,s)&&t.ref===n.ref)return ta(t,n,u)}return n.flags|=1,t=ji(f,s),t.ref=n.ref,t.return=n,n.child=t}function Xm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(eo(f,s)&&t.ref===n.ref)if(un=!1,n.pendingProps=s=f,gf(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ta(t,n,u)}return uf(t,n,a,s,u)}function km(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Wm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&yl(n,f!==null?f.cachePool:null),f!==null?Yp(n,f):Fc(),jp(n);else return s=n.lanes=536870912,Wm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(yl(n,f.cachePool),Yp(n,f),Oa(),n.memoizedState=null):(t!==null&&yl(n,null),Fc(),Oa());return An(t,n,u,a),n.child}function _o(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wm(t,n,a,s,u){var f=Lc();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&yl(n,null),Fc(),jp(n),t!==null&&Zr(t,n,s,!0),n.childLanes=u,null}function Bl(t,n){return n=Il({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function qm(t,n,a){return _r(n,t.child,null,a),t=Bl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function Mx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(s.mode==="hidden")return t=Bl(n,s),n.lanes=536870912,_o(null,t);if(Hc(n),(t=qe)?(t=ag(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=wp(t),a.return=n,n.child=a,bn=n,qe=null)):t=null,t===null)throw Ca(n);return n.lanes=536870912,null}return Bl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Hc(n),u)if(n.flags&256)n.flags&=-257,n=qm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||Zr(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(s=ke,s!==null&&(g=Or(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ur(t,g),Xn(s,t,g),lf;jl(),n=qm(t,n,a)}else t=f.treeContext,qe=ci(g.nextSibling),bn=n,xe=!0,Ra=null,li=!1,t!==null&&Lp(n,t),n=Bl(n,s),n.flags|=4096;return n}return t=ji(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Fl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function uf(t,n,a,s,u){return hr(n),a=Vc(t,n,a,s,void 0,u),s=Xc(),t!==null&&!un?(kc(t,n,u),ta(t,n,u)):(xe&&s&&Ec(n),n.flags|=1,An(t,n,a,u),n.child)}function Ym(t,n,a,s,u,f){return hr(n),n.updateQueue=null,a=Kp(n,s,a,u),Zp(t),s=Xc(),t!==null&&!un?(kc(t,n,f),ta(t,n,f)):(xe&&s&&Ec(n),n.flags|=1,An(t,n,a,f),n.child)}function jm(t,n,a,s,u){if(hr(n),n.stateNode===null){var f=Wr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Tn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Oc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Tn(g):Wr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(rf(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&sf.enqueueReplaceState(f,f.state,null),fo(n,s,f,u),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,F=xr(a,b);f.props=F;var Q=f.context,ft=a.contextType;g=Wr,typeof ft=="object"&&ft!==null&&(g=Tn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||Q!==g)&&Om(n,f,s,g),Da=!1;var $=n.memoizedState;f.state=$,fo(n,s,f,u),co(),Q=n.memoizedState,b||$!==Q||Da?(typeof mt=="function"&&(rf(n,a,mt,s),Q=n.memoizedState),(F=Da||Nm(n,a,F,s,$,Q,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=g,s=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Pc(t,n),g=n.memoizedProps,ft=xr(a,g),f.props=ft,mt=n.pendingProps,$=f.context,Q=a.contextType,F=Wr,typeof Q=="object"&&Q!==null&&(F=Tn(Q)),b=a.getDerivedStateFromProps,(Q=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==mt||$!==F)&&Om(n,f,s,F),Da=!1,$=n.memoizedState,f.state=$,fo(n,s,f,u),co();var ot=n.memoizedState;g!==mt||$!==ot||Da||t!==null&&t.dependencies!==null&&xl(t.dependencies)?(typeof b=="function"&&(rf(n,a,b,s),ot=n.memoizedState),(ft=Da||Nm(n,a,ft,s,$,ot,F)||t!==null&&t.dependencies!==null&&xl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=F,s=ft):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Fl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=_r(n,t.child,null,u),n.child=_r(n,null,a,u)):An(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ta(t,n,u),t}function Zm(t,n,a,s){return fr(),n.flags|=256,An(t,n,a,s),n.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(t){return{baseLanes:t,cachePool:Fp()}}function df(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function Km(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(u?Na(n):Oa(),(t=qe)?(t=ag(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=wp(t),a.return=n,n.child=a,bn=n,qe=null)):t=null,t===null)throw Ca(n);return jf(t)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,u?(Oa(),u=n.mode,b=Il({mode:"hidden",children:b},u),s=cr(s,u,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=ff(a),s.childLanes=df(t,g,a),n.memoizedState=cf,_o(null,s)):(Na(n),hf(n,b))}var F=t.memoizedState;if(F!==null&&(b=F.dehydrated,b!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=pf(t,n,a)):n.memoizedState!==null?(Oa(),n.child=t.child,n.flags|=128,n=null):(Oa(),b=s.fallback,u=n.mode,s=Il({mode:"visible",children:s.children},u),b=cr(b,u,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,_r(n,t.child,null,a),s=n.child,s.memoizedState=ff(a),s.childLanes=df(t,g,a),n.memoizedState=cf,n=_o(null,s));else if(Na(n),jf(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var Q=g.dgst;g=Q,s=Error(r(419)),s.stack="",s.digest=g,ao({value:s,source:null,stack:null}),n=pf(t,n,a)}else if(un||Zr(t,n,a,!1),g=(a&t.childLanes)!==0,un||g){if(g=ke,g!==null&&(s=Or(g,a),s!==0&&s!==F.retryLane))throw F.retryLane=s,ur(t,s),Xn(g,t,s),lf;Yf(b)||jl(),n=pf(t,n,a)}else Yf(b)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,qe=ci(b.nextSibling),bn=n,xe=!0,Ra=null,li=!1,t!==null&&Lp(n,t),n=hf(n,s.children),n.flags|=4096);return n}return u?(Oa(),b=s.fallback,u=n.mode,F=t.child,Q=F.sibling,s=ji(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&65011712,Q!==null?b=ji(Q,b):(b=cr(b,u,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,_o(null,s),s=n.child,b=t.child.memoizedState,b===null?b=ff(a):(u=b.cachePool,u!==null?(F=on._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Fp(),b={baseLanes:b.baseLanes|a,cachePool:u}),s.memoizedState=b,s.childLanes=df(t,g,a),n.memoizedState=cf,_o(t.child,s)):(Na(n),a=t.child,t=a.sibling,a=ji(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function hf(t,n){return n=Il({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Il(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function pf(t,n,a){return _r(n,t.child,null,a),t=hf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Qm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Cc(t.return,n,a)}function mf(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Jm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=en.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,gt(en,g),An(t,n,s,a),s=xe?io:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qm(t,a,n);else if(t.tag===19)Qm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Rl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),mf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Rl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}mf(n,!0,a,null,f,s);break;case"together":mf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Zr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function gf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&xl(t)))}function Ex(t,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),wa(n,on,t.memoizedState.cache),fr();break;case 27:case 5:Ht(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Km(t,n,a):(Na(n),t=ta(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Zr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Jm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(en,en.current),s)break;return null;case 22:return n.lanes=0,km(t,n,a,n.pendingProps);case 24:wa(n,on,t.memoizedState.cache)}return ta(t,n,a)}function $m(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!gf(t,a)&&(n.flags&128)===0)return un=!1,Ex(t,n,a);un=(t.flags&131072)!==0}else un=!1,xe&&(n.flags&1048576)!==0&&Up(n,io,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=mr(n.elementType),n.type=t,typeof t=="function")Sc(t)?(s=xr(t,s),n.tag=1,n=jm(null,n,t,s,a)):(n.tag=0,n=uf(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=Gm(null,n,t,s,a);break t}else if(u===z){n.tag=14,n=Vm(null,n,t,s,a);break t}}throw n=dt(t)||t,Error(r(306,n,""))}}return n;case 0:return uf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=xr(s,n.pendingProps),jm(t,n,s,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Pc(t,n),fo(n,s,null,a);var g=n.memoizedState;if(s=g.cache,wa(n,on,s),s!==f.cache&&wc(n,[on],a,!0),co(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Zm(t,n,s,a);break t}else if(s!==u){u=ri(Error(r(424)),n),ao(u),n=Zm(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qe=ci(t.firstChild),bn=n,xe=!0,Ra=null,li=!0,a=kp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fr(),s===u){n=ta(t,n,a);break t}An(t,n,s,a)}n=n.child}return n;case 26:return Fl(t,n),t===null?(a=cg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,s=eu(et.current).createElement(a),s[sn]=n,s[vn]=t,Rn(s,a,t),T(s),n.stateNode=s):n.memoizedState=cg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ht(n),t===null&&xe&&(s=n.stateNode=og(n.type,n.pendingProps,et.current),bn=n,li=!0,u=qe,Va(n.type)?(Zf=u,qe=ci(s.firstChild)):qe=u),An(t,n,n.pendingProps.children,a),Fl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((u=s=qe)&&(s=$x(s,n.type,n.pendingProps,li),s!==null?(n.stateNode=s,bn=n,qe=ci(s.firstChild),li=!1,u=!0):u=!1),u||Ca(n)),Ht(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,kf(u,f)?s=null:g!==null&&kf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Vc(t,n,px,null,null,a),Lo._currentValue=u),Fl(t,n),An(t,n,s,a),n.child;case 6:return t===null&&xe&&((t=a=qe)&&(a=tS(a,n.pendingProps,li),a!==null?(n.stateNode=a,bn=n,qe=null,t=!0):t=!1),t||Ca(n)),null;case 13:return Km(t,n,a);case 4:return Dt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=_r(n,null,s,a):An(t,n,s,a),n.child;case 11:return Gm(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,wa(n,n.type,s.value),An(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,hr(n),u=Tn(u),s=s(u),n.flags|=1,An(t,n,s,a),n.child;case 14:return Vm(t,n,n.type,n.pendingProps,a);case 15:return Xm(t,n,n.type,n.pendingProps,a);case 19:return Jm(t,n,a);case 31:return Mx(t,n,a);case 22:return km(t,n,a,n.pendingProps);case 24:return hr(n),s=Tn(on),t===null?(u=Lc(),u===null&&(u=ke,f=Dc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Oc(n),wa(n,on,u)):((t.lanes&a)!==0&&(Pc(t,n),fo(n,null,null,a),co()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),wa(n,on,s)):(s=f.cache,wa(n,on,s),s!==u.cache&&wc(n,[on],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ea(t){t.flags|=4}function _f(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(A0())t.flags|=8192;else throw gr=El,Nc}else t.flags&=-16777217}function t0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mg(n))if(A0())t.flags|=8192;else throw gr=El,Nc}function Hl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pe():536870912,t.lanes|=n,os|=n)}function vo(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ye(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function bx(t,n,a){var s=n.pendingProps;switch(bc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Qi(on),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(jr(n)?ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ac())),Ye(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ea(n),f!==null?(Ye(n),t0(n,f)):(Ye(n),_f(n,u,null,s,a))):f?f!==t.memoizedState?(ea(n),Ye(n),t0(n,f)):(Ye(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ea(n),Ye(n),_f(n,u,t,s,a)),null;case 27:if(de(n),a=et.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ea(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}t=At.current,jr(n)?Np(n):(t=og(u,s,a),n.stateNode=t,ea(n))}return Ye(n),null;case 5:if(de(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ea(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(f=At.current,jr(n))Np(n);else{var g=eu(et.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[sn]=n,f[vn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Rn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ea(n)}}return Ye(n),_f(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ea(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=et.current,jr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=bn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||K0(t.nodeValue,a)),t||Ca(n,!0)}else t=eu(t).createTextNode(s),t[sn]=n,n.stateNode=t}return Ye(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=jr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[sn]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),t=!1}else a=Ac(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ye(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=jr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=Ac(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),Ye(n),null);case 4:return Xt(),t===null&&If(n.stateNode.containerInfo),Ye(n),null;case 10:return Qi(n.type),Ye(n),null;case 19:if(nt(en),s=n.memoizedState,s===null)return Ye(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)vo(s,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Rl(t),f!==null){for(n.flags|=128,vo(s,!1),t=f.updateQueue,n.updateQueue=t,Hl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Cp(a,t),a=a.sibling;return gt(en,en.current&1|2),xe&&Zi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&M()>Wl&&(n.flags|=128,u=!0,vo(s,!1),n.lanes=4194304)}else{if(!u)if(t=Rl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Hl(n,t),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!xe)return Ye(n),null}else 2*M()-s.renderingStartTime>Wl&&a!==536870912&&(n.flags|=128,u=!0,vo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=M(),t.sibling=null,a=en.current,gt(en,u?a&1|2:a&1),xe&&Zi(n,s.treeForkCount),t):(Ye(n),null);case 22:case 23:return Kn(n),Ic(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&nt(pr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(on),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Tx(t,n){switch(bc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Qi(on),Xt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(en),null;case 4:return Xt(),null;case 10:return Qi(n.type),null;case 22:case 23:return Kn(n),Ic(),t!==null&&nt(pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Qi(on),null;case 25:return null;default:return null}}function e0(t,n){switch(bc(n),n.tag){case 3:Qi(on),Xt();break;case 26:case 27:case 5:de(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:nt(en);break;case 10:Qi(n.type);break;case 22:case 23:Kn(n),Ic(),t!==null&&nt(pr);break;case 24:Qi(on)}}function xo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(b){Fe(n,n.return,b)}}function Pa(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,u=n;var F=a,Q=b;try{Q()}catch(ft){Fe(u,F,ft)}}}s=s.next}while(s!==f)}}catch(ft){Fe(n,n.return,ft)}}function n0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{qp(n,a)}catch(s){Fe(t,t.return,s)}}}function i0(t,n,a){a.props=xr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Fe(t,n,s)}}function So(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Fe(t,n,u)}}function Pi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Fe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(t,n,u)}else a.current=null}function a0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Fe(t,t.return,u)}}function vf(t,n,a){try{var s=t.stateNode;Yx(s,t.type,a,n),s[vn]=n}catch(u){Fe(t,t.return,u)}}function r0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function xf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||r0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(s!==4&&(s===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Sf(t,n,a),t=t.sibling;t!==null;)Sf(t,n,a),t=t.sibling}function Gl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gl(t,n,a),t=t.sibling;t!==null;)Gl(t,n,a),t=t.sibling}function s0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,s,a),n[sn]=t,n[vn]=a}catch(f){Fe(t,t.return,f)}}var na=!1,cn=!1,yf=!1,o0=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Ax(t,n){if(t=t.containerInfo,Vf=lu,t=xp(t),hc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,b=-1,F=-1,Q=0,ft=0,mt=t,$=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(b=g+u),mt!==f||s!==0&&mt.nodeType!==3||(F=g+s),mt.nodeType===3&&(g+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)$=mt,mt=ot;for(;;){if(mt===t)break e;if($===a&&++Q===u&&(b=g),$===f&&++ft===s&&(F=g),(ot=mt.nextSibling)!==null)break;mt=$,$=mt.parentNode}mt=ot}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xf={focusedElem:t,selectionRange:a},lu=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Vt=xr(a.type,u);t=s.getSnapshotBeforeUpdate(Vt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(te){Fe(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)qf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function l0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:aa(t,a),s&4&&xo(5,a);break;case 1:if(aa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Fe(a,a.return,g)}else{var u=xr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Fe(a,a.return,g)}}s&64&&n0(a),s&512&&So(a,a.return);break;case 3:if(aa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qp(t,n)}catch(g){Fe(a,a.return,g)}}break;case 27:n===null&&s&4&&s0(a);case 26:case 5:aa(t,a),n===null&&s&4&&a0(a),s&512&&So(a,a.return);break;case 12:aa(t,a);break;case 31:aa(t,a),s&4&&f0(t,a);break;case 13:aa(t,a),s&4&&d0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Px.bind(null,a),eS(t,a))));break;case 22:if(s=a.memoizedState!==null||na,!s){n=n!==null&&n.memoizedState!==null||cn,u=na;var f=cn;na=s,(cn=n)&&!f?ra(t,a,(a.subtreeFlags&8772)!==0):aa(t,a),na=u,cn=f}break;case 30:break;default:aa(t,a)}}function u0(t){var n=t.alternate;n!==null&&(t.alternate=null,u0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ys(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ke=null,In=!1;function ia(t,n,a){for(a=a.child;a!==null;)c0(t,n,a),a=a.sibling}function c0(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:cn||Pi(a,n),ia(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Pi(a,n);var s=Ke,u=In;Va(a.type)&&(Ke=a.stateNode,In=!1),ia(t,n,a),wo(a.stateNode),Ke=s,In=u;break;case 5:cn||Pi(a,n);case 6:if(s=Ke,u=In,Ke=null,ia(t,n,a),Ke=s,In=u,Ke!==null)if(In)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Ke!==null&&(In?(t=Ke,ng(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ms(t)):ng(Ke,a.stateNode));break;case 4:s=Ke,u=In,Ke=a.stateNode.containerInfo,In=!0,ia(t,n,a),Ke=s,In=u;break;case 0:case 11:case 14:case 15:Pa(2,a,n),cn||Pa(4,a,n),ia(t,n,a);break;case 1:cn||(Pi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&i0(a,n,s)),ia(t,n,a);break;case 21:ia(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,ia(t,n,a),cn=s;break;default:ia(t,n,a)}}function f0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ms(t)}catch(a){Fe(n,n.return,a)}}}function d0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ms(t)}catch(a){Fe(n,n.return,a)}}function Rx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new o0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new o0),n;default:throw Error(r(435,t.tag))}}function Vl(t,n){var a=Rx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=zx.bind(null,t,s);s.then(u,u)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,b=g;t:for(;b!==null;){switch(b.tag){case 27:if(Va(b.type)){Ke=b.stateNode,In=!1;break t}break;case 5:Ke=b.stateNode,In=!1;break t;case 3:case 4:Ke=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(Ke===null)throw Error(r(160));c0(f,g,u),Ke=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)h0(n,t),n=n.sibling}var Ei=null;function h0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),s&4&&(Pa(3,t,t.return),xo(3,t),Pa(5,t,t.return));break;case 1:Hn(n,t),Gn(t),s&512&&(cn||a===null||Pi(a,a.return)),s&64&&na&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=Ei;if(Hn(n,t),Gn(t),s&512&&(cn||a===null||Pi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ar]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,s,a),f[sn]=t,T(f),s=f;break t;case"link":var g=hg("link","href",u).get(s+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break e}}f=u.createElement(s),Rn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=hg("meta","content",u).get(s+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break e}}f=u.createElement(s),Rn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=t,T(f),s=f}t.stateNode=s}else pg(u,t.type,t.stateNode);else t.stateNode=dg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?pg(u,t.type,t.stateNode):dg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&vf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),s&512&&(cn||a===null||Pi(a,a.return)),a!==null&&s&4&&vf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),s&512&&(cn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{dn(u,"")}catch(Vt){Fe(t,t.return,Vt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,vf(t,u,a!==null?a.memoizedProps:u)),s&1024&&(yf=!0);break;case 6:if(Hn(n,t),Gn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Vt){Fe(t,t.return,Vt)}}break;case 3:if(au=null,u=Ei,Ei=nu(n.containerInfo),Hn(n,t),Ei=u,Gn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ms(n.containerInfo)}catch(Vt){Fe(t,t.return,Vt)}yf&&(yf=!1,p0(t));break;case 4:s=Ei,Ei=nu(t.stateNode.containerInfo),Hn(n,t),Gn(t),Ei=s;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vl(t,s)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=M()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vl(t,s)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,Q=na,ft=cn;if(na=Q||u,cn=ft||F,Hn(n,t),cn=ft,na=Q,Gn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||na||cn||Sr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=F.stateNode;var mt=F.memoizedProps.style,$=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Vt){Fe(F,F.return,Vt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Vt){Fe(F,F.return,Vt)}}}else if(n.tag===18){if(a===null){F=n;try{var ot=F.stateNode;u?ig(ot,!0):ig(F.stateNode,!1)}catch(Vt){Fe(F,F.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Vl(t,a))));break;case 19:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vl(t,s)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(r0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=xf(t);Gl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(dn(g,""),a.flags&=-33);var b=xf(t);Gl(t,b,g);break;case 3:case 4:var F=a.stateNode.containerInfo,Q=xf(t);Sf(t,Q,F);break;default:throw Error(r(161))}}catch(ft){Fe(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function p0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;p0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function aa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)l0(t,n.alternate,n),n=n.sibling}function Sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),Sr(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&i0(n,n.return,a),Sr(n);break;case 27:wo(n.stateNode);case 26:case 5:Pi(n,n.return),Sr(n);break;case 22:n.memoizedState===null&&Sr(n);break;case 30:Sr(n);break;default:Sr(n)}t=t.sibling}}function ra(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ra(u,f,a),xo(4,f);break;case 1:if(ra(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Fe(s,s.return,Q)}if(s=f,u=s.updateQueue,u!==null){var b=s.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Wp(F[u],b)}catch(Q){Fe(s,s.return,Q)}}a&&g&64&&n0(f),So(f,f.return);break;case 27:s0(f);case 26:case 5:ra(u,f,a),a&&s===null&&g&4&&a0(f),So(f,f.return);break;case 12:ra(u,f,a);break;case 31:ra(u,f,a),a&&g&4&&f0(u,f);break;case 13:ra(u,f,a),a&&g&4&&d0(u,f);break;case 22:f.memoizedState===null&&ra(u,f,a),So(f,f.return);break;case 30:break;default:ra(u,f,a)}n=n.sibling}}function Mf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ro(a))}function Ef(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t))}function bi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)m0(t,n,a,s),n=n.sibling}function m0(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,s),u&2048&&xo(9,n);break;case 1:bi(t,n,a,s);break;case 3:bi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t)));break;case 12:if(u&2048){bi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Fe(n,n.return,F)}}else bi(t,n,a,s);break;case 31:bi(t,n,a,s);break;case 13:bi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?bi(t,n,a,s):yo(t,n):f._visibility&2?bi(t,n,a,s):(f._visibility|=2,as(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Mf(g,n);break;case 24:bi(t,n,a,s),u&2048&&Ef(n.alternate,n);break;default:bi(t,n,a,s)}}function as(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,b=a,F=s,Q=g.flags;switch(g.tag){case 0:case 11:case 15:as(f,g,b,F,u),xo(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?as(f,g,b,F,u):yo(f,g):(ft._visibility|=2,as(f,g,b,F,u)),u&&Q&2048&&Mf(g.alternate,g);break;case 24:as(f,g,b,F,u),u&&Q&2048&&Ef(g.alternate,g);break;default:as(f,g,b,F,u)}n=n.sibling}}function yo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:yo(a,s),u&2048&&Mf(s.alternate,s);break;case 24:yo(a,s),u&2048&&Ef(s.alternate,s);break;default:yo(a,s)}n=n.sibling}}var Mo=8192;function rs(t,n,a){if(t.subtreeFlags&Mo)for(t=t.child;t!==null;)g0(t,n,a),t=t.sibling}function g0(t,n,a){switch(t.tag){case 26:rs(t,n,a),t.flags&Mo&&t.memoizedState!==null&&hS(a,Ei,t.memoizedState,t.memoizedProps);break;case 5:rs(t,n,a);break;case 3:case 4:var s=Ei;Ei=nu(t.stateNode.containerInfo),rs(t,n,a),Ei=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Mo,Mo=16777216,rs(t,n,a),Mo=s):rs(t,n,a));break;default:rs(t,n,a)}}function _0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,x0(s,t)}_0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)v0(t),t=t.sibling}function v0(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&Pa(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Xl(t)):Eo(t);break;default:Eo(t)}}function Xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,x0(s,t)}_0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}t=t.sibling}}function x0(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ro(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else t:for(a=t;gn!==null;){s=gn;var u=s.sibling,f=s.return;if(u0(s),s===a){gn=null;break t}if(u!==null){u.return=f,gn=u;break t}gn=f}}}var Cx={getCacheForType:function(t){var n=Tn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(on).controller.signal}},wx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,ke=null,pe=null,_e=0,Be=0,Qn=null,za=!1,ss=!1,bf=!1,sa=0,tn=0,Ba=0,yr=0,Tf=0,Jn=0,os=0,bo=null,Vn=null,Af=!1,kl=0,S0=0,Wl=1/0,ql=null,Fa=null,hn=0,Ia=null,ls=null,oa=0,Rf=0,Cf=null,y0=null,To=0,wf=null;function $n(){return(Ue&2)!==0&&_e!==0?_e&-_e:O.T!==null?Pf():Ws()}function M0(){if(Jn===0)if((_e&536870912)===0||xe){var t=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Xn(t,n,a){(t===ke&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(us(t,0),Ha(t,_e,Jn,!1)),wn(t,a),((Ue&2)===0||t!==ke)&&(t===ke&&((Ue&2)===0&&(yr|=a),tn===4&&Ha(t,_e,Jn,!1)),zi(t))}function E0(t,n,a){if((Ue&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Rt(t,n),u=s?Lx(t,n):Uf(t,n,!0),f=s;do{if(u===0){ss&&!s&&Ha(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Dx(a)){u=Uf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var b=t;u=bo;var F=b.current.memoizedState.isDehydrated;if(F&&(us(b,g).flags|=256),g=Uf(b,g,!1),g!==2){if(bf&&!F){b.errorRecoveryDisabledLanes|=f,yr|=f,u=4;break t}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){us(t,0),Ha(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ha(s,n,Jn,!za);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=kl+300-M(),10<u)){if(Ha(s,n,Jn,!za),_t(s,0,!0)!==0)break t;oa=n,s.timeoutHandle=tg(b0.bind(null,s,a,Vn,ql,Af,n,Jn,yr,os,za,f,"Throttled",-0,0),u);break t}b0(s,a,Vn,ql,Af,n,Jn,yr,os,za,f,null,-0,0)}}break}while(!0);zi(t)}function b0(t,n,a,s,u,f,g,b,F,Q,ft,mt,$,ot){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},g0(n,f,mt);var Vt=(f&62914560)===f?kl-M():(f&4194048)===f?S0-M():0;if(Vt=pS(mt,Vt),Vt!==null){oa=f,t.cancelPendingCommit=Vt(L0.bind(null,t,n,f,a,s,u,g,b,F,ft,mt,null,$,ot)),Ha(t,f,g,!Q);return}}L0(t,n,f,a,s,u,g,b,F)}function Dx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Yn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(t,n,a,s){n&=~Tf,n&=~yr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&al(t,a,n)}function Yl(){return(Ue&6)===0?(Ao(0),!1):!0}function Df(){if(pe!==null){if(Be===0)var t=pe.return;else t=pe,Ki=dr=null,Wc(t),$r=null,oo=0,t=pe;for(;t!==null;)e0(t.alternate,t),t=t.return;pe=null}}function us(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Kx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),oa=0,Df(),ke=t,pe=a=ji(t.current,null),_e=n,Be=0,Qn=null,za=!1,ss=Rt(t,n),bf=!1,os=Jn=Tf=yr=Ba=tn=0,Vn=bo=null,Af=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Pt(s),f=1<<u;n|=t[u],s&=~f}return sa=n,pl(),a}function T0(t,n){oe=null,O.H=go,n===Jr||n===Ml?(n=Gp(),Be=3):n===Nc?(n=Gp(),Be=4):Be=n===lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,pe===null&&(tn=1,zl(t,ri(n,t.current)))}function A0(){var t=Zn.current;return t===null?!0:(_e&4194048)===_e?ui===null:(_e&62914560)===_e||(_e&536870912)!==0?t===ui:!1}function R0(){var t=O.H;return O.H=go,t===null?go:t}function C0(){var t=O.A;return O.A=Cx,t}function jl(){tn=4,za||(_e&4194048)!==_e&&Zn.current!==null||(ss=!0),(Ba&134217727)===0&&(yr&134217727)===0||ke===null||Ha(ke,_e,Jn,!1)}function Uf(t,n,a){var s=Ue;Ue|=2;var u=R0(),f=C0();(ke!==t||_e!==n)&&(ql=null,us(t,n)),n=!1;var g=tn;t:do try{if(Be!==0&&pe!==null){var b=pe,F=Qn;switch(Be){case 8:Df(),g=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var Q=Be;if(Be=0,Qn=null,cs(t,b,F,Q),a&&ss){g=0;break t}break;default:Q=Be,Be=0,Qn=null,cs(t,b,F,Q)}}Ux(),g=tn;break}catch(ft){T0(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Ki=dr=null,Ue=s,O.H=u,O.A=f,pe===null&&(ke=null,_e=0,pl()),g}function Ux(){for(;pe!==null;)w0(pe)}function Lx(t,n){var a=Ue;Ue|=2;var s=R0(),u=C0();ke!==t||_e!==n?(ql=null,Wl=M()+500,us(t,n)):ss=Rt(t,n);t:do try{if(Be!==0&&pe!==null){n=pe;var f=Qn;e:switch(Be){case 1:Be=0,Qn=null,cs(t,n,f,1);break;case 2:case 9:if(Ip(f)){Be=0,Qn=null,D0(n);break}n=function(){Be!==2&&Be!==9||ke!==t||(Be=7),zi(t)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Ip(f)?(Be=0,Qn=null,D0(n)):(Be=0,Qn=null,cs(t,n,f,7));break;case 5:var g=null;switch(pe.tag){case 26:g=pe.memoizedState;case 5:case 27:var b=pe;if(g?mg(g):b.stateNode.complete){Be=0,Qn=null;var F=b.sibling;if(F!==null)pe=F;else{var Q=b.return;Q!==null?(pe=Q,Zl(Q)):pe=null}break e}}Be=0,Qn=null,cs(t,n,f,5);break;case 6:Be=0,Qn=null,cs(t,n,f,6);break;case 8:Df(),tn=6;break t;default:throw Error(r(462))}}Nx();break}catch(ft){T0(t,ft)}while(!0);return Ki=dr=null,O.H=s,O.A=u,Ue=a,pe!==null?0:(ke=null,_e=0,pl(),tn)}function Nx(){for(;pe!==null&&!Yt();)w0(pe)}function w0(t){var n=$m(t.alternate,t,sa);t.memoizedProps=t.pendingProps,n===null?Zl(t):pe=n}function D0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Ym(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Ym(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Wc(n);default:e0(a,n),n=pe=Cp(n,sa),n=$m(a,n,sa)}t.memoizedProps=t.pendingProps,n===null?Zl(t):pe=n}function cs(t,n,a,s){Ki=dr=null,Wc(n),$r=null,oo=0;var u=n.return;try{if(yx(t,u,n,a,_e)){tn=1,zl(t,ri(a,t.current)),pe=null;return}}catch(f){if(u!==null)throw pe=u,f;tn=1,zl(t,ri(a,t.current)),pe=null;return}n.flags&32768?(xe||s===1?t=!0:ss||(_e&536870912)!==0?t=!1:(za=t=!0,(s===2||s===9||s===3||s===6)&&(s=Zn.current,s!==null&&s.tag===13&&(s.flags|=16384))),U0(n,t)):Zl(n)}function Zl(t){var n=t;do{if((n.flags&32768)!==0){U0(n,za);return}t=n.return;var a=bx(n.alternate,n,sa);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);tn===0&&(tn=5)}function U0(t,n){do{var a=Tx(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);tn=6,pe=null}function L0(t,n,a,s,u,f,g,b,F){t.cancelPendingCommit=null;do Kl();while(hn!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=vc,xi(t,a,f,g,b,F),t===ke&&(pe=ke=null,_e=0),ls=n,Ia=t,oa=a,Rf=f,Cf=u,y0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Bx(lt,function(){return B0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,u=H.p,H.p=2,g=Ue,Ue|=4;try{Ax(t,n,a)}finally{Ue=g,H.p=u,O.T=s}}hn=1,N0(),O0(),P0()}}function N0(){if(hn===1){hn=0;var t=Ia,n=ls,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=H.p;H.p=2;var u=Ue;Ue|=4;try{h0(n,t);var f=Xf,g=xp(t.containerInfo),b=f.focusedElem,F=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&vp(b.ownerDocument.documentElement,b)){if(F!==null&&hc(b)){var Q=F.start,ft=F.end;if(ft===void 0&&(ft=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(ft,b.value.length);else{var mt=b.ownerDocument||document,$=mt&&mt.defaultView||window;if($.getSelection){var ot=$.getSelection(),Vt=b.textContent.length,te=Math.min(F.start,Vt),Ve=F.end===void 0?te:Math.min(F.end,Vt);!ot.extend&&te>Ve&&(g=Ve,Ve=te,te=g);var Y=_p(b,te),V=_p(b,Ve);if(Y&&V&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var K=mt.createRange();K.setStart(Y.node,Y.offset),ot.removeAllRanges(),te>Ve?(ot.addRange(K),ot.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),ot.addRange(K))}}}}for(mt=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var pt=mt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}lu=!!Vf,Xf=Vf=null}finally{Ue=u,H.p=s,O.T=a}}t.current=n,hn=2}}function O0(){if(hn===2){hn=0;var t=Ia,n=ls,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=H.p;H.p=2;var u=Ue;Ue|=4;try{l0(t,n.alternate,n)}finally{Ue=u,H.p=s,O.T=a}}hn=3}}function P0(){if(hn===4||hn===3){hn=0,D();var t=Ia,n=ls,a=oa,s=y0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,ls=Ia=null,z0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Fa=null),Pr(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,u=H.p,H.p=2,O.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var b=s[g];f(b.value,{componentStack:b.stack})}}finally{O.T=n,H.p=u}}(oa&3)!==0&&Kl(),zi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===wf?To++:(To=0,wf=t):To=0,Ao(0)}}function z0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ro(n)))}function Kl(){return N0(),O0(),P0(),B0()}function B0(){if(hn!==5)return!1;var t=Ia,n=Rf;Rf=0;var a=Pr(oa),s=O.T,u=H.p;try{H.p=32>a?32:a,O.T=null,a=Cf,Cf=null;var f=Ia,g=oa;if(hn=0,ls=Ia=null,oa=0,(Ue&6)!==0)throw Error(r(331));var b=Ue;if(Ue|=4,v0(f.current),m0(f,f.current,g,a),Ue=b,Ao(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{H.p=u,O.T=s,z0(t,n)}}function F0(t,n,a){n=ri(a,n),n=of(t.stateNode,n,2),t=La(t,n,2),t!==null&&(wn(t,2),zi(t))}function Fe(t,n,a){if(t.tag===3)F0(t,t,a);else for(;n!==null;){if(n.tag===3){F0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Fa===null||!Fa.has(s))){t=ri(a,t),a=Im(2),s=La(n,a,2),s!==null&&(Hm(a,s,n,t),wn(s,2),zi(s));break}}n=n.return}}function Lf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new wx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(bf=!0,u.add(a),t=Ox.bind(null,t,n,a),n.then(t,t))}function Ox(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(_e&a)===a&&(tn===4||tn===3&&(_e&62914560)===_e&&300>M()-kl?(Ue&2)===0&&us(t,0):Tf|=a,os===_e&&(os=0)),zi(t)}function I0(t,n){n===0&&(n=Pe()),t=ur(t,n),t!==null&&(wn(t,n),zi(t))}function Px(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),I0(t,a)}function zx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),I0(t,a)}function Bx(t,n){return Me(t,n)}var Ql=null,fs=null,Nf=!1,Jl=!1,Of=!1,Ga=0;function zi(t){t!==fs&&t.next===null&&(fs===null?Ql=fs=t:fs=fs.next=t),Jl=!0,Nf||(Nf=!0,Ix())}function Ao(t,n){if(!Of&&Jl){Of=!0;do for(var a=!1,s=Ql;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=u&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,X0(s,f))}else f=_e,f=_t(s,s===ke?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Rt(s,f)||(a=!0,X0(s,f));s=s.next}while(a);Of=!1}}function Fx(){H0()}function H0(){Jl=Nf=!1;var t=0;Ga!==0&&Zx()&&(t=Ga);for(var n=M(),a=null,s=Ql;s!==null;){var u=s.next,f=G0(s,n);f===0?(s.next=null,a===null?Ql=u:a.next=u,u===null&&(fs=a)):(a=s,(t!==0||(f&3)!==0)&&(Jl=!0)),s=u}hn!==0&&hn!==5||Ao(t),Ga!==0&&(Ga=0)}function G0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Pt(f),b=1<<g,F=u[g];F===-1?((b&a)===0||(b&s)!==0)&&(u[g]=ne(b,n)):F<=n&&(t.expiredLanes|=b),f&=~b}if(n=ke,a=_e,a=_t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ne(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Rt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ne(s),Pr(a)){case 2:case 8:a=vt;break;case 32:a=lt;break;case 268435456:a=Ct;break;default:a=lt}return s=V0.bind(null,t),a=Me(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ne(s),t.callbackPriority=2,t.callbackNode=null,2}function V0(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kl()&&t.callbackNode!==a)return null;var s=_e;return s=_t(t,t===ke?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(E0(t,s,n),G0(t,M()),t.callbackNode!=null&&t.callbackNode===a?V0.bind(null,t):null)}function X0(t,n){if(Kl())return null;E0(t,n,!0)}function Ix(){Qx(function(){(Ue&6)!==0?Me(ht,Fx):H0()})}function Pf(){if(Ga===0){var t=Kr;t===0&&(t=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Ga=t}return Ga}function k0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:sl(""+t)}function W0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Hx(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=k0((u[vn]||null).action),g=s.submitter;g&&(n=(n=g[vn]||null)?k0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new cl("action","action",null,s,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ga!==0){var F=g?W0(u,g):new FormData(u);tf(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(b.preventDefault(),F=g?W0(u,g):new FormData(u),tf(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var zf=0;zf<_c.length;zf++){var Bf=_c[zf],Gx=Bf.toLowerCase(),Vx=Bf[0].toUpperCase()+Bf.slice(1);Mi(Gx,"on"+Vx)}Mi(Mp,"onAnimationEnd"),Mi(Ep,"onAnimationIteration"),Mi(bp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(ax,"onTransitionRun"),Mi(rx,"onTransitionStart"),Mi(sx,"onTransitionCancel"),Mi(Tp,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function q0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var b=s[g],F=b.instance,Q=b.currentTarget;if(b=b.listener,F!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=Q;try{f(u)}catch(ft){hl(ft)}u.currentTarget=null,f=F}else for(g=0;g<s.length;g++){if(b=s[g],F=b.instance,Q=b.currentTarget,b=b.listener,F!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=Q;try{f(u)}catch(ft){hl(ft)}u.currentTarget=null,f=F}}}}function me(t,n){var a=n[zr];a===void 0&&(a=n[zr]=new Set);var s=t+"__bubble";a.has(s)||(Y0(n,t,2,!1),a.add(s))}function Ff(t,n,a){var s=0;n&&(s|=4),Y0(a,t,s,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function If(t){if(!t[$l]){t[$l]=!0,q.forEach(function(a){a!=="selectionchange"&&(Xx.has(a)||Ff(a,!1,t),Ff(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[$l]||(n[$l]=!0,Ff("selectionchange",!1,n))}}function Y0(t,n,a,s){switch(Mg(n)){case 2:var u=_S;break;case 8:u=vS;break;default:u=td}a=u.bind(null,n,a,t),u=void 0,!ac||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Hf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var b=s.stateNode.containerInfo;if(b===u)break;if(g===4)for(g=s.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;b!==null;){if(g=Ma(b),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){s=f=g;continue t}b=b.parentNode}}s=s.return}Jh(function(){var Q=f,ft=nc(a),mt=[];t:{var $=Ap.get(t);if($!==void 0){var ot=cl,Vt=t;switch(t){case"keypress":if(ll(a)===0)break t;case"keydown":case"keyup":ot=zv;break;case"focusin":Vt="focus",ot=lc;break;case"focusout":Vt="blur",ot=lc;break;case"beforeblur":case"afterblur":ot=lc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Iv;break;case Mp:case Ep:case bp:ot=Rv;break;case Tp:ot=Gv;break;case"scroll":case"scrollend":ot=Mv;break;case"wheel":ot=Xv;break;case"copy":case"cut":case"paste":ot=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=ip;break;case"toggle":case"beforetoggle":ot=Wv}var te=(n&4)!==0,Ve=!te&&(t==="scroll"||t==="scrollend"),Y=te?$!==null?$+"Capture":null:$;te=[];for(var V=Q,K;V!==null;){var pt=V;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||Y===null||(pt=js(V,Y),pt!=null&&te.push(Co(V,pt,K))),Ve)break;V=V.return}0<te.length&&($=new ot($,Vt,null,a,ft),mt.push({event:$,listeners:te}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",$&&a!==ec&&(Vt=a.relatedTarget||a.fromElement)&&(Ma(Vt)||Vt[Si]))break t;if((ot||$)&&($=ft.window===ft?ft:($=ft.ownerDocument)?$.defaultView||$.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=Q,Vt=Vt?Ma(Vt):null,Vt!==null&&(Ve=c(Vt),te=Vt.tag,Vt!==Ve||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ot=null,Vt=Q),ot!==Vt)){if(te=ep,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(te=ip,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),Ve=ot==null?$:rr(ot),K=Vt==null?$:rr(Vt),$=new te(pt,V+"leave",ot,a,ft),$.target=Ve,$.relatedTarget=K,pt=null,Ma(ft)===Q&&(te=new te(Y,V+"enter",Vt,a,ft),te.target=K,te.relatedTarget=Ve,pt=te),Ve=pt,ot&&Vt)e:{for(te=kx,Y=ot,V=Vt,K=0,pt=Y;pt;pt=te(pt))K++;pt=0;for(var Qt=V;Qt;Qt=te(Qt))pt++;for(;0<K-pt;)Y=te(Y),K--;for(;0<pt-K;)V=te(V),pt--;for(;K--;){if(Y===V||V!==null&&Y===V.alternate){te=Y;break e}Y=te(Y),V=te(V)}te=null}else te=null;ot!==null&&j0(mt,$,ot,te,!1),Vt!==null&&Ve!==null&&j0(mt,Ve,Vt,te,!0)}}t:{if($=Q?rr(Q):window,ot=$.nodeName&&$.nodeName.toLowerCase(),ot==="select"||ot==="input"&&$.type==="file")var Ae=fp;else if(up($))if(dp)Ae=ex;else{Ae=$v;var jt=Jv}else ot=$.nodeName,!ot||ot.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&yi(Q.elementType)&&(Ae=fp):Ae=tx;if(Ae&&(Ae=Ae(t,Q))){cp(mt,Ae,a,ft);break t}jt&&jt(t,$,Q),t==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&Sn($,"number",$.value)}switch(jt=Q?rr(Q):window,t){case"focusin":(up(jt)||jt.contentEditable==="true")&&(Vr=jt,pc=Q,no=null);break;case"focusout":no=pc=Vr=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,Sp(mt,a,ft);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":Sp(mt,a,ft)}var ue;if(cc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Gr?op(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(ap&&a.locale!=="ko"&&(Gr||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Gr&&(ue=$h()):(Ta=ft,rc="value"in Ta?Ta.value:Ta.textContent,Gr=!0)),jt=tu(Q,ve),0<jt.length&&(ve=new np(ve,t,null,a,ft),mt.push({event:ve,listeners:jt}),ue?ve.data=ue:(ue=lp(a),ue!==null&&(ve.data=ue)))),(ue=Yv?jv(t,a):Zv(t,a))&&(ve=tu(Q,"onBeforeInput"),0<ve.length&&(jt=new np("onBeforeInput","beforeinput",null,a,ft),mt.push({event:jt,listeners:ve}),jt.data=ue)),Hx(mt,t,Q,a,ft)}q0(mt,n)})}function Co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tu(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=js(t,a),u!=null&&s.unshift(Co(t,u,f)),u=js(t,n),u!=null&&s.push(Co(t,u,f))),t.tag===3)return s;t=t.return}return[]}function kx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function j0(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var b=a,F=b.alternate,Q=b.stateNode;if(b=b.tag,F!==null&&F===s)break;b!==5&&b!==26&&b!==27||Q===null||(F=Q,u?(Q=js(a,f),Q!=null&&g.unshift(Co(a,Q,F))):u||(Q=js(a,f),Q!=null&&g.push(Co(a,Q,F)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Wx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function Z0(t){return(typeof t=="string"?t:""+t).replace(Wx,`
`).replace(qx,"")}function K0(t,n){return n=Z0(n),Z0(t)===n}function Ge(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||dn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&dn(t,""+s);break;case"className":Jt(t,"class",s);break;case"tabIndex":Jt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(t,a,s);break;case"style":Fr(t,s,f);break;case"data":if(n!=="object"){Jt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=sl(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",u.name,u,null),Ge(t,n,"formEncType",u.formEncType,u,null),Ge(t,n,"formMethod",u.formMethod,u,null),Ge(t,n,"formTarget",u.formTarget,u,null)):(Ge(t,n,"encType",u.encType,u,null),Ge(t,n,"method",u.method,u,null),Ge(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=sl(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=qi);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=sl(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":me("beforetoggle",t),me("toggle",t),Wt(t,"popover",s);break;case"xlinkActuate":qt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":qt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":qt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":qt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":qt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":qt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":qt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":qt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":qt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Wt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sv.get(a)||a,Wt(t,a,s))}}function Gf(t,n,a,s,u,f){switch(a){case"style":Fr(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?dn(t,s):(typeof s=="number"||typeof s=="bigint")&&dn(t,""+s);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Wt(t,a,s)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,f,g,a,null)}}u&&Ge(t,n,"srcSet",a.srcSet,a,null),s&&Ge(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var b=f=g=u=null,F=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":u=ft;break;case"type":g=ft;break;case"checked":F=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ge(t,n,s,ft,a,null)}}Wi(t,f,b,F,Q,g,u,!1);return;case"select":me("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":s=b;default:Ge(t,n,u,b,a,null)}n=f,a=g,t.multiple=!!s,n!=null?ii(t,!!s,n,!1):a!=null&&ii(t,!!s,a,!0);return;case"textarea":me("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":s=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ge(t,n,g,b,a,null)}yn(t,s,u,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(s=a[F],s!=null)&&(F==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ge(t,n,F,s,a,null));return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(s=0;s<Ro.length;s++)me(Ro[s],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,Q,s,a,null)}return;default:if(yi(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&Gf(t,n,ft,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Ge(t,n,b,s,a,null))}function Yx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,b=null,F=null,Q=null,ft=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":F=mt;default:s.hasOwnProperty(ot)||Ge(t,n,ot,null,s,mt)}}for(var $ in s){var ot=s[$];if(mt=a[$],s.hasOwnProperty($)&&(ot!=null||mt!=null))switch($){case"type":f=ot;break;case"name":u=ot;break;case"checked":Q=ot;break;case"defaultChecked":ft=ot;break;case"value":g=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==mt&&Ge(t,n,$,ot,s,mt)}}xn(t,g,b,F,Q,ft,f,u);return;case"select":ot=g=b=$=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ot=F;default:s.hasOwnProperty(f)||Ge(t,n,f,null,s,F)}for(u in s)if(f=s[u],F=a[u],s.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":$=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==F&&Ge(t,n,u,f,s,F)}n=b,a=g,s=ot,$!=null?ii(t,!!a,$,!1):!!s!=!!a&&(n!=null?ii(t,!!a,n,!0):ii(t,!!a,a?[]:"",!1));return;case"textarea":ot=$=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ge(t,n,b,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":$=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ge(t,n,g,u,s,f)}ze(t,$,ot);return;case"option":for(var Vt in a)$=a[Vt],a.hasOwnProperty(Vt)&&$!=null&&!s.hasOwnProperty(Vt)&&(Vt==="selected"?t.selected=!1:Ge(t,n,Vt,null,s,$));for(F in s)$=s[F],ot=a[F],s.hasOwnProperty(F)&&$!==ot&&($!=null||ot!=null)&&(F==="selected"?t.selected=$&&typeof $!="function"&&typeof $!="symbol":Ge(t,n,F,$,s,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)$=a[te],a.hasOwnProperty(te)&&$!=null&&!s.hasOwnProperty(te)&&Ge(t,n,te,null,s,$);for(Q in s)if($=s[Q],ot=a[Q],s.hasOwnProperty(Q)&&$!==ot&&($!=null||ot!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Ge(t,n,Q,$,s,ot)}return;default:if(yi(n)){for(var Ve in a)$=a[Ve],a.hasOwnProperty(Ve)&&$!==void 0&&!s.hasOwnProperty(Ve)&&Gf(t,n,Ve,void 0,s,$);for(ft in s)$=s[ft],ot=a[ft],!s.hasOwnProperty(ft)||$===ot||$===void 0&&ot===void 0||Gf(t,n,ft,$,s,ot);return}}for(var Y in a)$=a[Y],a.hasOwnProperty(Y)&&$!=null&&!s.hasOwnProperty(Y)&&Ge(t,n,Y,null,s,$);for(mt in s)$=s[mt],ot=a[mt],!s.hasOwnProperty(mt)||$===ot||$==null&&ot==null||Ge(t,n,mt,$,s,ot)}function Q0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,b=u.duration;if(f&&b&&Q0(g)){for(g=0,b=u.responseEnd,s+=1;s<a.length;s++){var F=a[s],Q=F.startTime;if(Q>b)break;var ft=F.transferSize,mt=F.initiatorType;ft&&Q0(mt)&&(F=F.responseEnd,g+=ft*(F<b?1:(b-Q)/(F-Q)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vf=null,Xf=null;function eu(t){return t.nodeType===9?t:t.ownerDocument}function J0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function kf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function Zx(){var t=window.event;return t&&t.type==="popstate"?t===Wf?!1:(Wf=t,!0):(Wf=null,!1)}var tg=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,eg=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof eg<"u"?function(t){return eg.resolve(null).then(t).catch(Jx)}:tg;function Jx(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function ng(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ms(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,wo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[ar]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&wo(t.ownerDocument.body);a=u}while(a);ms(n)}function ig(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function qf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qf(a),Ys(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function $x(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ar])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function tS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function ag(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function Yf(t){return t.data==="$?"||t.data==="$~"}function jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function eS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Zf=null;function rg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function sg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function og(t,n,a){switch(n=eu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ys(t)}var fi=new Map,lg=new Set;function nu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=H.d;H.d={f:nS,r:iS,D:aS,C:rS,L:sS,m:oS,X:uS,S:lS,M:cS};function nS(){var t=la.f(),n=Yl();return t||n}function iS(t){var n=Ea(t);n!==null&&n.tag===5&&n.type==="form"?Tm(n):la.r(t)}var ds=typeof document>"u"?null:document;function ug(t,n,a){var s=ds;if(s&&typeof n=="string"&&n){var u=ie(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),lg.has(u)||(lg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Rn(n,"link",t),T(n),s.head.appendChild(n)))}}function aS(t){la.D(t),ug("dns-prefetch",t,null)}function rS(t,n){la.C(t,n),ug("preconnect",t,n)}function sS(t,n,a){la.L(t,n,a);var s=ds;if(s&&t&&n){var u='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ie(a.imageSizes)+'"]')):u+='[href="'+ie(t)+'"]';var f=u;switch(n){case"style":f=hs(t);break;case"script":f=ps(t)}fi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Do(f))||n==="script"&&s.querySelector(Uo(f))||(n=s.createElement("link"),Rn(n,"link",t),T(n),s.head.appendChild(n)))}}function oS(t,n){la.m(t,n);var a=ds;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ie(s)+'"][href="'+ie(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ps(t)}if(!fi.has(f)&&(t=_({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}s=a.createElement("link"),Rn(s,"link",t),T(s),a.head.appendChild(s)}}}function lS(t,n,a){la.S(t,n,a);var s=ds;if(s&&t){var u=ba(s).hoistableStyles,f=hs(t);n=n||"default";var g=u.get(f);if(!g){var b={loading:0,preload:null};if(g=s.querySelector(Do(f)))b.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Kf(t,a);var F=g=s.createElement("link");T(F),Rn(F,"link",t),F._p=new Promise(function(Q,ft){F.onload=Q,F.onerror=ft}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,iu(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:b},u.set(f,g)}}}function uS(t,n){la.X(t,n);var a=ds;if(a&&t){var s=ba(a).hoistableScripts,u=ps(t),f=s.get(u);f||(f=a.querySelector(Uo(u)),f||(t=_({src:t,async:!0},n),(n=fi.get(u))&&Qf(t,n),f=a.createElement("script"),T(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function cS(t,n){la.M(t,n);var a=ds;if(a&&t){var s=ba(a).hoistableScripts,u=ps(t),f=s.get(u);f||(f=a.querySelector(Uo(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=fi.get(u))&&Qf(t,n),f=a.createElement("script"),T(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function cg(t,n,a,s){var u=(u=et.current)?nu(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=ba(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hs(a.href);var f=ba(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(Do(t)))&&!f._p&&(g.instance=f,g.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||fS(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ps(a),a=ba(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function hs(t){return'href="'+ie(t)+'"'}function Do(t){return'link[rel="stylesheet"]['+t+"]"}function fg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function fS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),T(n),t.head.appendChild(n))}function ps(t){return'[src="'+ie(t)+'"]'}function Uo(t){return"script[async]"+t}function dg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ie(a.href)+'"]');if(s)return n.instance=s,T(s),s;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),T(s),Rn(s,"style",u),iu(s,a.precedence,t),n.instance=s;case"stylesheet":u=hs(a.href);var f=t.querySelector(Do(u));if(f)return n.state.loading|=4,n.instance=f,T(f),f;s=fg(a),(u=fi.get(u))&&Kf(s,u),f=(t.ownerDocument||t).createElement("link"),T(f);var g=f;return g._p=new Promise(function(b,F){g.onload=b,g.onerror=F}),Rn(f,"link",s),n.state.loading|=4,iu(f,a.precedence,t),n.instance=f;case"script":return f=ps(a.src),(u=t.querySelector(Uo(f)))?(n.instance=u,T(u),u):(s=a,(u=fi.get(f))&&(s=_({},a),Qf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),T(u),Rn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,iu(s,a.precedence,t));return n.instance}function iu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var b=s[g];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var au=null;function hg(t,n,a){if(au===null){var s=new Map,u=au=new Map;u.set(a,s)}else u=au,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ar]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var b=s.get(g);b?b.push(f):s.set(g,[f])}}return s}function pg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function dS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function hS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=hs(s.href),f=n.querySelector(Do(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ru.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,s=fg(s),(u=fi.get(u))&&Kf(s,u),f=f.createElement("link"),T(f);var g=f;g._p=new Promise(function(b,F){g.onload=b,g.onerror=F}),Rn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ru.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Jf=0;function pS(t,n){return t.stylesheets&&t.count===0&&ou(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Jf===0&&(Jf=62500*jx());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Jf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var su=null;function ou(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,su=new Map,n.forEach(mS,t),su=null,ru.call(t))}function mS(t,n){if(!(n.state.loading&4)){var a=su.get(t);if(a)var s=a.get(null);else{a=new Map,su.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=ru.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Lo={$$typeof:N,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function gS(t,n,a,s,u,f,g,b,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function gg(t,n,a,s,u,f,g,b,F,Q,ft,mt){return t=new gS(t,n,a,g,F,Q,ft,mt,b),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=Dc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Oc(f),t}function _g(t){return t?(t=Wr,t):Wr}function vg(t,n,a,s,u,f){u=_g(u),s.context===null?s.context=u:s.pendingContext=u,s=Ua(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=La(t,s,n),a!==null&&(Xn(a,t,n),uo(a,t,n))}function xg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function $f(t,n){xg(t,n),(t=t.alternate)&&xg(t,n)}function Sg(t){if(t.tag===13||t.tag===31){var n=ur(t,67108864);n!==null&&Xn(n,t,67108864),$f(t,67108864)}}function yg(t){if(t.tag===13||t.tag===31){var n=$n();n=ks(n);var a=ur(t,n);a!==null&&Xn(a,t,n),$f(t,n)}}var lu=!0;function _S(t,n,a,s){var u=O.T;O.T=null;var f=H.p;try{H.p=2,td(t,n,a,s)}finally{H.p=f,O.T=u}}function vS(t,n,a,s){var u=O.T;O.T=null;var f=H.p;try{H.p=8,td(t,n,a,s)}finally{H.p=f,O.T=u}}function td(t,n,a,s){if(lu){var u=ed(s);if(u===null)Hf(t,n,s,uu,a),Eg(t,s);else if(SS(u,t,n,a,s))s.stopPropagation();else if(Eg(t,s),n&4&&-1<xS.indexOf(t)){for(;u!==null;){var f=Ea(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=St(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var F=1<<31-Pt(g);b.entanglements[1]|=F,g&=~F}zi(f),(Ue&6)===0&&(Wl=M()+500,Ao(0))}}break;case 31:case 13:b=ur(f,2),b!==null&&Xn(b,f,2),Yl(),$f(f,2)}if(f=ed(s),f===null&&Hf(t,n,s,uu,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Hf(t,n,s,null,a)}}function ed(t){return t=nc(t),nd(t)}var uu=null;function nd(t){if(uu=null,t=Ma(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uu=t,null}function Mg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ht:return 2;case vt:return 8;case lt:case Zt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var id=!1,Xa=null,ka=null,Wa=null,No=new Map,Oo=new Map,qa=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Eg(t,n){switch(t){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ea(n),n!==null&&Sg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function SS(t,n,a,s,u){switch(n){case"focusin":return Xa=Po(Xa,t,n,a,s,u),!0;case"dragenter":return ka=Po(ka,t,n,a,s,u),!0;case"mouseover":return Wa=Po(Wa,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return No.set(f,Po(No.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Oo.set(f,Po(Oo.get(f)||null,t,n,a,s,u)),!0}return!1}function bg(t){var n=Ma(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Li(t.priority,function(){yg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Li(t.priority,function(){yg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ed(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);ec=s,a.target.dispatchEvent(s),ec=null}else return n=Ea(a),n!==null&&Sg(n),t.blockedOn=a,!1;n.shift()}return!0}function Tg(t,n,a){cu(t)&&a.delete(n)}function yS(){id=!1,Xa!==null&&cu(Xa)&&(Xa=null),ka!==null&&cu(ka)&&(ka=null),Wa!==null&&cu(Wa)&&(Wa=null),No.forEach(Tg),Oo.forEach(Tg)}function fu(t,n){t.blockedOn===n&&(t.blockedOn=null,id||(id=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yS)))}var du=null;function Ag(t){du!==t&&(du=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){du===t&&(du=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(nd(s||a)===null)continue;break}var f=Ea(a);f!==null&&(t.splice(n,3),n-=3,tf(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ms(t){function n(F){return fu(F,t)}Xa!==null&&fu(Xa,t),ka!==null&&fu(ka,t),Wa!==null&&fu(Wa,t),No.forEach(n),Oo.forEach(n);for(var a=0;a<qa.length;a++){var s=qa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)bg(a),a.blockedOn===null&&qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[vn]||null;if(typeof f=="function")g||Ag(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[vn]||null)b=g.formAction;else if(nd(u)!==null)continue}else b=g.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),Ag(a)}}}function Rg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ad(t){this._internalRoot=t}hu.prototype.render=ad.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();vg(a,s,t,n,null,null)},hu.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;vg(t.current,2,null,t,null,null),Yl(),n[Si]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ws();t={blockedOn:null,target:t,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,t),a===0&&bg(t)}};var Cg=e.version;if(Cg!=="19.2.4")throw Error(r(527,Cg,"19.2.4"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var MS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Mt=pu.inject(MS),Et=pu}catch{}}return Bo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Pm,f=zm,g=Bm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=gg(t,1,!1,null,null,a,s,null,u,f,g,Rg),t[Si]=n.current,If(t),new ad(n)},Bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Pm,g=zm,b=Bm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=gg(t,1,!0,n,a??null,s,u,F,f,g,b,Rg),n.context=_g(null),a=n.current,s=$n(),s=ks(s),u=Ua(s),u.callback=null,La(a,u,s),a=s,n.current.lanes=a,wn(n,a),zi(n),t[Si]=n.current,If(t),new hu(n)},Bo.version="19.2.4",Bo}var Fg;function LS(){if(Fg)return od.exports;Fg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),od.exports=US(),od.exports}var NS=LS();const Hh="182",OS=0,Ig=1,PS=2,Iu=1,zS=2,Yo=3,ir=0,Wn=1,pa=2,ga=0,Os=1,Hg=2,Gg=3,Vg=4,BS=5,wr=100,FS=101,IS=102,HS=103,GS=104,VS=200,XS=201,kS=202,WS=203,Xd=204,kd=205,qS=206,YS=207,jS=208,ZS=209,KS=210,QS=211,JS=212,$S=213,ty=214,Wd=0,qd=1,Yd=2,zs=3,jd=4,Zd=5,Kd=6,Qd=7,z_=0,ey=1,ny=2,Vi=0,B_=1,F_=2,I_=3,H_=4,G_=5,V_=6,X_=7,k_=300,Nr=301,Bs=302,Jd=303,$d=304,Qu=306,th=1e3,ma=1001,eh=1002,Cn=1003,iy=1004,mu=1005,Nn=1006,fd=1007,Ur=1008,mi=1009,W_=1010,q_=1011,Ko=1012,Gh=1013,ki=1014,Hi=1015,va=1016,Vh=1017,Xh=1018,Qo=1020,Y_=35902,j_=35899,Z_=1021,K_=1022,Ci=1023,xa=1026,Lr=1027,Q_=1028,kh=1029,Fs=1030,Wh=1031,qh=1033,Hu=33776,Gu=33777,Vu=33778,Xu=33779,nh=35840,ih=35841,ah=35842,rh=35843,sh=36196,oh=37492,lh=37496,uh=37488,ch=37489,fh=37490,dh=37491,hh=37808,ph=37809,mh=37810,gh=37811,_h=37812,vh=37813,xh=37814,Sh=37815,yh=37816,Mh=37817,Eh=37818,bh=37819,Th=37820,Ah=37821,Rh=36492,Ch=36494,wh=36495,Dh=36283,Uh=36284,Lh=36285,Nh=36286,ay=3200,ry=0,sy=1,tr="",hi="srgb",Is="srgb-linear",Wu="linear",Ie="srgb",gs=7680,Xg=519,oy=512,ly=513,uy=514,Yh=515,cy=516,fy=517,jh=518,dy=519,Oh=35044,kg="300 es",Gi=2e3,qu=2001;function J_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Yu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hy(){const o=Yu("canvas");return o.style.display="block",o}const Wg={};function ju(...o){const e="THREE."+o.shift();console.log(e,...o)}function re(...o){const e="THREE."+o.shift();console.warn(e,...o)}function be(...o){const e="THREE."+o.shift();console.error(e,...o)}function Jo(...o){const e=o.join(" ");e in Wg||(Wg[e]=!0,re(...o))}function py(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Gs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Ph=180/Math.PI;function nr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function my(o,e){return(o%e+e)%e}function hd(o,e,i){return(1-i)*o+i*e}function Ii(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xe(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ye{constructor(e=0,i=0){ye.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],_=r[l+3],S=c[d+0],E=c[d+1],R=c[d+2],C=c[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=_;return}if(h>=1){e[i+0]=S,e[i+1]=E,e[i+2]=R,e[i+3]=C;return}if(_!==C||m!==S||p!==E||x!==R){let y=m*S+p*E+x*R+_*C;y<0&&(S=-S,E=-E,R=-R,C=-C,y=-y);let v=1-h;if(y<.9995){const P=Math.acos(y),N=Math.sin(P);v=Math.sin(v*P)/N,h=Math.sin(h*P)/N,m=m*v+S*h,p=p*v+E*h,x=x*v+R*h,_=_*v+C*h}else{m=m*v+S*h,p=p*v+E*h,x=x*v+R*h,_=_*v+C*h;const P=1/Math.sqrt(m*m+p*p+x*x+_*_);m*=P,p*=P,x*=P,_*=P}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],_=c[d],S=c[d+1],E=c[d+2],R=c[d+3];return e[i]=h*R+x*_+m*E-p*S,e[i+1]=m*R+x*S+p*_-h*E,e[i+2]=p*R+x*E+h*S-m*_,e[i+3]=x*R-h*_-m*S-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),_=h(c/2),S=m(r/2),E=m(l/2),R=m(c/2);switch(d){case"XYZ":this._x=S*x*_+p*E*R,this._y=p*E*_-S*x*R,this._z=p*x*R+S*E*_,this._w=p*x*_-S*E*R;break;case"YXZ":this._x=S*x*_+p*E*R,this._y=p*E*_-S*x*R,this._z=p*x*R-S*E*_,this._w=p*x*_+S*E*R;break;case"ZXY":this._x=S*x*_-p*E*R,this._y=p*E*_+S*x*R,this._z=p*x*R+S*E*_,this._w=p*x*_-S*E*R;break;case"ZYX":this._x=S*x*_-p*E*R,this._y=p*E*_+S*x*R,this._z=p*x*R-S*E*_,this._w=p*x*_+S*E*R;break;case"YZX":this._x=S*x*_+p*E*R,this._y=p*E*_+S*x*R,this._z=p*x*R-S*E*_,this._w=p*x*_-S*E*R;break;case"XZY":this._x=S*x*_-p*E*R,this._y=p*E*_-S*x*R,this._z=p*x*R+S*E*_,this._w=p*x*_+S*E*R;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],_=i[10],S=r+h+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(x-m)*E,this._y=(c-p)*E,this._z=(d-l)*E}else if(r>h&&r>_){const E=2*Math.sqrt(1+r-h-_);this._w=(x-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+p)/E}else if(h>_){const E=2*Math.sqrt(1+h-r-_);this._w=(c-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+_-r-h);this._w=(d-l)/E,this._x=(c+p)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-c*m,this._y=l*x+d*m+c*h-r*p,this._z=c*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(e=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(qg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(qg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),x=2*(h*i-c*l),_=2*(c*r-d*i);return this.x=i+m*p+d*_-h*x,this.y=r+m*x+h*p-c*_,this.z=l+m*_+c*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pd=new tt,qg=new tl;class ce{constructor(e,i,r,l,c,d,h,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,m,p)}set(e,i,r,l,c,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],_=r[7],S=r[2],E=r[5],R=r[8],C=l[0],y=l[3],v=l[6],P=l[1],N=l[4],L=l[7],B=l[2],I=l[5],z=l[8];return c[0]=d*C+h*P+m*B,c[3]=d*y+h*N+m*I,c[6]=d*v+h*L+m*z,c[1]=p*C+x*P+_*B,c[4]=p*y+x*N+_*I,c[7]=p*v+x*L+_*z,c[2]=S*C+E*P+R*B,c[5]=S*y+E*N+R*I,c[8]=S*v+E*L+R*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*d*x-i*h*p-r*c*x+r*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],_=x*d-h*p,S=h*m-x*c,E=p*c-d*m,R=i*_+r*S+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=_*C,e[1]=(l*p-x*r)*C,e[2]=(h*r-l*d)*C,e[3]=S*C,e[4]=(x*i-l*m)*C,e[5]=(l*c-h*i)*C,e[6]=E*C,e[7]=(r*m-p*i)*C,e[8]=(d*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(md.makeScale(e,i)),this}rotate(e){return this.premultiply(md.makeRotation(-e)),this}translate(e,i){return this.premultiply(md.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const md=new ce,Yg=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jg=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gy(){const o={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ie&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ie&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===tr?Wu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Is]:{primaries:e,whitePoint:r,transfer:Wu,toXYZ:Yg,fromXYZ:jg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Ie,toXYZ:Yg,fromXYZ:jg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Te=gy();function _a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let _s;class _y{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{_s===void 0&&(_s=Yu("canvas")),_s.width=e.width,_s.height=e.height;const l=_s.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=_s}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=_a(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(_a(i[r]/255)*255):i[r]=_a(i[r]);return{data:i,width:e.width,height:e.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vy=0;class Zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=nr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(gd(l[d].image)):c.push(gd(l[d]))}else c=gd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function gd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_y.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let xy=0;const _d=new tt;class Bn extends Gs{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=ma,l=ma,c=Nn,d=Ur,h=Ci,m=mi,p=Bn.DEFAULT_ANISOTROPY,x=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=nr(),this.name="",this.source=new Zh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case th:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case th:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=k_;Bn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],x=m[4],_=m[8],S=m[1],E=m[5],R=m[9],C=m[2],y=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(_-C)<.01&&Math.abs(R-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(_+C)<.1&&Math.abs(R+y)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,L=(E+1)/2,B=(v+1)/2,I=(x+S)/4,z=(_+C)/4,Z=(R+y)/4;return N>L&&N>B?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=I/r,c=z/r):L>B?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=I/l,c=Z/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=z/c,l=Z/c),this.set(r,l,c,i),this}let P=Math.sqrt((y-R)*(y-R)+(_-C)*(_-C)+(S-x)*(S-x));return Math.abs(P)<.001&&(P=1),this.x=(y-R)/P,this.y=(_-C)/P,this.z=(S-x)/P,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sy extends Gs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Bn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Zh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Sy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class $_ extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yy extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ti):Ti.fromBufferAttribute(c,d),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gu.copy(r.boundingBox)),gu.applyMatrix4(e.matrixWorld),this.union(gu)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),_u.subVectors(this.max,Fo),vs.subVectors(e.a,Fo),xs.subVectors(e.b,Fo),Ss.subVectors(e.c,Fo),ja.subVectors(xs,vs),Za.subVectors(Ss,xs),Mr.subVectors(vs,Ss);let i=[0,-ja.z,ja.y,0,-Za.z,Za.y,0,-Mr.z,Mr.y,ja.z,0,-ja.x,Za.z,0,-Za.x,Mr.z,0,-Mr.x,-ja.y,ja.x,0,-Za.y,Za.x,0,-Mr.y,Mr.x,0];return!vd(i,vs,xs,Ss,_u)||(i=[1,0,0,0,1,0,0,0,1],!vd(i,vs,xs,Ss,_u))?!1:(vu.crossVectors(ja,Za),i=[vu.x,vu.y,vu.z],vd(i,vs,xs,Ss,_u))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Ti=new tt,gu=new el,vs=new tt,xs=new tt,Ss=new tt,ja=new tt,Za=new tt,Mr=new tt,Fo=new tt,_u=new tt,vu=new tt,Er=new tt;function vd(o,e,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){Er.fromArray(o,c);const h=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),m=e.dot(Er),p=i.dot(Er),x=r.dot(Er);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const My=new el,Io=new tt,xd=new tt;class Kh{constructor(e=new tt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):My.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Io,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(xd)),this.expandByPoint(Io.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ca=new tt,Sd=new tt,xu=new tt,Ka=new tt,yd=new tt,Su=new tt,Md=new tt;class Ey{constructor(e=new tt,i=new tt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Sd.copy(e).add(i).multiplyScalar(.5),xu.copy(i).sub(e).normalize(),Ka.copy(this.origin).sub(Sd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(xu),h=Ka.dot(this.direction),m=-Ka.dot(xu),p=Ka.lengthSq(),x=Math.abs(1-d*d);let _,S,E,R;if(x>0)if(_=d*m-h,S=d*h-m,R=c*x,_>=0)if(S>=-R)if(S<=R){const C=1/x;_*=C,S*=C,E=_*(_+d*S+2*h)+S*(d*_+S+2*m)+p}else S=c,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;else S<=-R?(_=Math.max(0,-(-d*c+h)),S=_>0?-c:Math.min(Math.max(-c,-m),c),E=-_*_+S*(S+2*m)+p):S<=R?(_=0,S=Math.min(Math.max(-c,-m),c),E=S*(S+2*m)+p):(_=Math.max(0,-(d*c+h)),S=_>0?c:Math.min(Math.max(-c,-m),c),E=-_*_+S*(S+2*m)+p);else S=d>0?-c:c,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Sd).addScaledVector(xu,S),E}intersectSphere(e,i){ca.subVectors(e.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(c=(e.min.y-S.y)*x,d=(e.max.y-S.y)*x):(c=(e.max.y-S.y)*x,d=(e.min.y-S.y)*x),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(h=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ca)!==null}intersectTriangle(e,i,r,l,c){yd.subVectors(i,e),Su.subVectors(r,e),Md.crossVectors(yd,Su);let d=this.direction.dot(Md),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ka.subVectors(this.origin,e);const m=h*this.direction.dot(Su.crossVectors(Ka,Su));if(m<0)return null;const p=h*this.direction.dot(yd.cross(Ka));if(p<0||m+p>d)return null;const x=-h*Ka.dot(Md);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,i,r,l,c,d,h,m,p,x,_,S,E,R,C,y){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,m,p,x,_,S,E,R,C,y)}set(e,i,r,l,c,d,h,m,p,x,_,S,E,R,C,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=_,v[14]=S,v[3]=E,v[7]=R,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/ys.setFromMatrixColumn(e,0).length(),c=1/ys.setFromMatrixColumn(e,1).length(),d=1/ys.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const S=d*x,E=d*_,R=h*x,C=h*_;i[0]=m*x,i[4]=-m*_,i[8]=p,i[1]=E+R*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=R+E*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*x,E=m*_,R=p*x,C=p*_;i[0]=S+C*h,i[4]=R*h-E,i[8]=d*p,i[1]=d*_,i[5]=d*x,i[9]=-h,i[2]=E*h-R,i[6]=C+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*x,E=m*_,R=p*x,C=p*_;i[0]=S-C*h,i[4]=-d*_,i[8]=R+E*h,i[1]=E+R*h,i[5]=d*x,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*x,E=d*_,R=h*x,C=h*_;i[0]=m*x,i[4]=R*p-E,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=E*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,E=d*p,R=h*m,C=h*p;i[0]=m*x,i[4]=C-S*_,i[8]=R*_+E,i[1]=_,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=E*_+R,i[10]=S-C*_}else if(e.order==="XZY"){const S=d*m,E=d*p,R=h*m,C=h*p;i[0]=m*x,i[4]=-_,i[8]=p*x,i[1]=S*_+C,i[5]=d*x,i[9]=E*_-R,i[2]=R*_-E,i[6]=h*x,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(by,e,Ty)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Qa.crossVectors(r,ti),Qa.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Qa.crossVectors(r,ti)),Qa.normalize(),yu.crossVectors(ti,Qa),l[0]=Qa.x,l[4]=yu.x,l[8]=ti.x,l[1]=Qa.y,l[5]=yu.y,l[9]=ti.y,l[2]=Qa.z,l[6]=yu.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],_=r[5],S=r[9],E=r[13],R=r[2],C=r[6],y=r[10],v=r[14],P=r[3],N=r[7],L=r[11],B=r[15],I=l[0],z=l[4],Z=l[8],A=l[12],w=l[1],X=l[5],rt=l[9],at=l[13],dt=l[2],ut=l[6],O=l[10],H=l[14],it=l[3],yt=l[7],xt=l[11],U=l[15];return c[0]=d*I+h*w+m*dt+p*it,c[4]=d*z+h*X+m*ut+p*yt,c[8]=d*Z+h*rt+m*O+p*xt,c[12]=d*A+h*at+m*H+p*U,c[1]=x*I+_*w+S*dt+E*it,c[5]=x*z+_*X+S*ut+E*yt,c[9]=x*Z+_*rt+S*O+E*xt,c[13]=x*A+_*at+S*H+E*U,c[2]=R*I+C*w+y*dt+v*it,c[6]=R*z+C*X+y*ut+v*yt,c[10]=R*Z+C*rt+y*O+v*xt,c[14]=R*A+C*at+y*H+v*U,c[3]=P*I+N*w+L*dt+B*it,c[7]=P*z+N*X+L*ut+B*yt,c[11]=P*Z+N*rt+L*O+B*xt,c[15]=P*A+N*at+L*H+B*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],_=e[6],S=e[10],E=e[14],R=e[3],C=e[7],y=e[11],v=e[15],P=m*E-p*S,N=h*E-p*_,L=h*S-m*_,B=d*E-p*x,I=d*S-m*x,z=d*_-h*x;return i*(C*P-y*N+v*L)-r*(R*P-y*B+v*I)+l*(R*N-C*B+v*z)-c*(R*L-C*I+y*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],_=e[9],S=e[10],E=e[11],R=e[12],C=e[13],y=e[14],v=e[15],P=_*y*p-C*S*p+C*m*E-h*y*E-_*m*v+h*S*v,N=R*S*p-x*y*p-R*m*E+d*y*E+x*m*v-d*S*v,L=x*C*p-R*_*p+R*h*E-d*C*E-x*h*v+d*_*v,B=R*_*m-x*C*m-R*h*S+d*C*S+x*h*y-d*_*y,I=i*P+r*N+l*L+c*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=P*z,e[1]=(C*S*c-_*y*c-C*l*E+r*y*E+_*l*v-r*S*v)*z,e[2]=(h*y*c-C*m*c+C*l*p-r*y*p-h*l*v+r*m*v)*z,e[3]=(_*m*c-h*S*c-_*l*p+r*S*p+h*l*E-r*m*E)*z,e[4]=N*z,e[5]=(x*y*c-R*S*c+R*l*E-i*y*E-x*l*v+i*S*v)*z,e[6]=(R*m*c-d*y*c-R*l*p+i*y*p+d*l*v-i*m*v)*z,e[7]=(d*S*c-x*m*c+x*l*p-i*S*p-d*l*E+i*m*E)*z,e[8]=L*z,e[9]=(R*_*c-x*C*c-R*r*E+i*C*E+x*r*v-i*_*v)*z,e[10]=(d*C*c-R*h*c+R*r*p-i*C*p-d*r*v+i*h*v)*z,e[11]=(x*h*c-d*_*c-x*r*p+i*_*p+d*r*E-i*h*E)*z,e[12]=B*z,e[13]=(x*C*l-R*_*l+R*r*S-i*C*S-x*r*y+i*_*y)*z,e[14]=(R*h*l-d*C*l-R*r*m+i*C*m+d*r*y-i*h*y)*z,e[15]=(d*_*l-x*h*l+x*r*m-i*_*m-d*r*S+i*h*S)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,h=e.y,m=e.z,p=c*d,x=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,x=d+d,_=h+h,S=c*p,E=c*x,R=c*_,C=d*x,y=d*_,v=h*_,P=m*p,N=m*x,L=m*_,B=r.x,I=r.y,z=r.z;return l[0]=(1-(C+v))*B,l[1]=(E+L)*B,l[2]=(R-N)*B,l[3]=0,l[4]=(E-L)*I,l[5]=(1-(S+v))*I,l[6]=(y+P)*I,l[7]=0,l[8]=(R+N)*z,l[9]=(y-P)*z,l[10]=(1-(S+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=ys.set(l[0],l[1],l[2]).length();const d=ys.set(l[4],l[5],l[6]).length(),h=ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ai.copy(this);const p=1/c,x=1/d,_=1/h;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=x,Ai.elements[5]*=x,Ai.elements[6]*=x,Ai.elements[8]*=_,Ai.elements[9]*=_,Ai.elements[10]*=_,i.setFromRotationMatrix(Ai),r.x=c,r.y=d,r.z=h,this}makePerspective(e,i,r,l,c,d,h=Gi,m=!1){const p=this.elements,x=2*c/(i-e),_=2*c/(r-l),S=(i+e)/(i-e),E=(r+l)/(r-l);let R,C;if(m)R=c/(d-c),C=d*c/(d-c);else if(h===Gi)R=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(h===qu)R=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,d,h=Gi,m=!1){const p=this.elements,x=2/(i-e),_=2/(r-l),S=-(i+e)/(i-e),E=-(r+l)/(r-l);let R,C;if(m)R=1/(d-c),C=d/(d-c);else if(h===Gi)R=-2/(d-c),C=-(d+c)/(d-c);else if(h===qu)R=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ys=new tt,Ai=new rn,by=new tt(0,0,0),Ty=new tt(1,1,1),Qa=new tt,yu=new tt,ti=new tt,Zg=new rn,Kg=new tl;class Sa{constructor(e=0,i=0,r=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],_=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Zg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Kg.setFromEuler(this),this.setFromQuaternion(Kg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class tv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ay=0;const Qg=new tt,Ms=new tl,fa=new rn,Mu=new tt,Ho=new tt,Ry=new tt,Cy=new tl,Jg=new tt(1,0,0),$g=new tt(0,1,0),t_=new tt(0,0,1),e_={type:"added"},wy={type:"removed"},Es={type:"childadded",child:null},Ed={type:"childremoved",child:null};class qn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new tt,i=new Sa,r=new tl,l=new tt(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ce}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ms.setFromAxisAngle(e,i),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,i){return Ms.setFromAxisAngle(e,i),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Jg,e)}rotateY(e){return this.rotateOnAxis($g,e)}rotateZ(e){return this.rotateOnAxis(t_,e)}translateOnAxis(e,i){return Qg.copy(e).applyQuaternion(this.quaternion),this.position.add(Qg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Jg,e)}translateY(e){return this.translateOnAxis($g,e)}translateZ(e){return this.translateOnAxis(t_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Mu.copy(e):Mu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Ho,Mu,this.up):fa.lookAt(Mu,Ho,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Ms.setFromRotationMatrix(fa),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e_),Es.child=e,this.dispatchEvent(Es),Es.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(wy),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e_),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,Ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,Cy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),_=d(e.shapes),S=d(e.skeletons),E=d(e.animations),R=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),R.length>0&&(r.nodes=R)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}qn.DEFAULT_UP=new tt(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new tt,da=new tt,bd=new tt,ha=new tt,bs=new tt,Ts=new tt,n_=new tt,Td=new tt,Ad=new tt,Rd=new tt,Cd=new an,wd=new an,Dd=new an;class gi{constructor(e=new tt,i=new tt,r=new tt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),da.subVectors(r,i),bd.subVectors(e,i);const d=Ri.dot(Ri),h=Ri.dot(da),m=Ri.dot(bd),p=da.dot(da),x=da.dot(bd),_=d*p-h*h;if(_===0)return c.set(0,0,0),null;const S=1/_,E=(p*m-h*x)*S,R=(d*x-h*m)*S;return c.set(1-E-R,R,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,r,l,c,d,h,m){return this.getBarycoord(e,i,r,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(d,ha.y),m.addScaledVector(h,ha.z),m)}static getInterpolatedAttribute(e,i,r,l,c,d){return Cd.setScalar(0),wd.setScalar(0),Dd.setScalar(0),Cd.fromBufferAttribute(e,i),wd.fromBufferAttribute(e,r),Dd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Cd,c.x),d.addScaledVector(wd,c.y),d.addScaledVector(Dd,c.z),d}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),da.subVectors(e,i),Ri.cross(da).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ri.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,h;bs.subVectors(l,r),Ts.subVectors(c,r),Td.subVectors(e,r);const m=bs.dot(Td),p=Ts.dot(Td);if(m<=0&&p<=0)return i.copy(r);Ad.subVectors(e,l);const x=bs.dot(Ad),_=Ts.dot(Ad);if(x>=0&&_<=x)return i.copy(l);const S=m*_-x*p;if(S<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(bs,d);Rd.subVectors(e,c);const E=bs.dot(Rd),R=Ts.dot(Rd);if(R>=0&&E<=R)return i.copy(c);const C=E*p-m*R;if(C<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(r).addScaledVector(Ts,h);const y=x*R-E*_;if(y<=0&&_-x>=0&&E-R>=0)return n_.subVectors(c,l),h=(_-x)/(_-x+(E-R)),i.copy(l).addScaledVector(n_,h);const v=1/(y+C+S);return d=C*v,h=S*v,i.copy(r).addScaledVector(bs,d).addScaledVector(Ts,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function Ud(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Le{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=my(e,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Ud(d,c,e+1/3),this.g=Ud(d,c,e),this.b=Ud(d,c,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(c){c!==void 0&&parseFloat(c)<1&&re("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:re("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=ev[e.toLowerCase()];return r!==void 0?this.setHex(r,i):re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Te.workingToColorSpace(Ln.copy(this),e),Math.round(Se(Ln.r*255,0,255))*65536+Math.round(Se(Ln.g*255,0,255))*256+Math.round(Se(Ln.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=x<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=hi){Te.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(Eu);const r=hd(Ja.h,Eu.h,i),l=hd(Ja.s,Eu.s,i),c=hd(Ja.l,Eu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Le;Le.NAMES=ev;let Dy=0;class nl extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Os,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=kd,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==ir&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xd&&(r.blendSrc=this.blendSrc),this.blendDst!==kd&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zu extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new tt,bu=new ye;let Uy=0;class wi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Oh,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)bu.fromBufferAttribute(this,i),bu.applyMatrix3(e),this.setXY(i,bu.x,bu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xe(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ii(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ii(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ii(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ii(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oh&&(e.usage=this.usage),e}}class nv extends wi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class iv extends wi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class _i extends wi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Ly=0;const di=new rn,Ld=new qn,As=new tt,ei=new el,Go=new el,_n=new tt;class Ui extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J_(e)?iv:nv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ce().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new _i(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Go.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(ei.min,Go.min),ei.expandByPoint(_n),_n.addVectors(ei.max,Go.max),ei.expandByPoint(_n)):(ei.expandByPoint(Go.min),ei.expandByPoint(Go.max))}ei.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)_n.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)_n.fromBufferAttribute(h,p),m&&(As.fromBufferAttribute(e,p),_n.add(As)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<r.count;Z++)h[Z]=new tt,m[Z]=new tt;const p=new tt,x=new tt,_=new tt,S=new ye,E=new ye,R=new ye,C=new tt,y=new tt;function v(Z,A,w){p.fromBufferAttribute(r,Z),x.fromBufferAttribute(r,A),_.fromBufferAttribute(r,w),S.fromBufferAttribute(c,Z),E.fromBufferAttribute(c,A),R.fromBufferAttribute(c,w),x.sub(p),_.sub(p),E.sub(S),R.sub(S);const X=1/(E.x*R.y-R.x*E.y);isFinite(X)&&(C.copy(x).multiplyScalar(R.y).addScaledVector(_,-E.y).multiplyScalar(X),y.copy(_).multiplyScalar(E.x).addScaledVector(x,-R.x).multiplyScalar(X),h[Z].add(C),h[A].add(C),h[w].add(C),m[Z].add(y),m[A].add(y),m[w].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let Z=0,A=P.length;Z<A;++Z){const w=P[Z],X=w.start,rt=w.count;for(let at=X,dt=X+rt;at<dt;at+=3)v(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const N=new tt,L=new tt,B=new tt,I=new tt;function z(Z){B.fromBufferAttribute(l,Z),I.copy(B);const A=h[Z];N.copy(A),N.sub(B.multiplyScalar(B.dot(A))).normalize(),L.crossVectors(I,A);const X=L.dot(m[Z])<0?-1:1;d.setXYZW(Z,N.x,N.y,N.z,X)}for(let Z=0,A=P.length;Z<A;++Z){const w=P[Z],X=w.start,rt=w.count;for(let at=X,dt=X+rt;at<dt;at+=3)z(e.getX(at+0)),z(e.getX(at+1)),z(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const l=new tt,c=new tt,d=new tt,h=new tt,m=new tt,p=new tt,x=new tt,_=new tt;if(e)for(let S=0,E=e.count;S<E;S+=3){const R=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),h.add(x),m.add(x),p.add(x),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,_=h.normalized,S=new p.constructor(m.length*x);let E=0,R=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?E=m[C]*h.data.stride+h.offset:E=m[C]*x;for(let v=0;v<x;v++)S[R++]=p[E++]}return new wi(S,x,_)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ui,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,_=p.length;x<_;x++){const S=p[x],E=e(S,r);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let _=0,S=p.length;_<S;_++){const E=p[_];x.push(E.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],_=c[p];for(let S=0,E=_.length;S<E;S++)x.push(_[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i_=new rn,br=new Ey,Tu=new Kh,a_=new tt,Au=new tt,Ru=new tt,Cu=new tt,Nd=new tt,wu=new tt,r_=new tt,Du=new tt;class vi extends qn{constructor(e=new Ui,i=new Zu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){wu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],_=c[m];x!==0&&(Nd.fromBufferAttribute(_,e),d?wu.addScaledVector(Nd,x):wu.addScaledVector(Nd.sub(i),x))}i.add(wu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tu.copy(r.boundingSphere),Tu.applyMatrix4(c),br.copy(e.ray).recast(e.near),!(Tu.containsPoint(br.origin)===!1&&(br.intersectSphere(Tu,a_)===null||br.origin.distanceToSquared(a_)>(e.far-e.near)**2))&&(i_.copy(c).invert(),br.copy(e.ray).applyMatrix4(i_),!(r.boundingBox!==null&&br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,br)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,S=c.groups,E=c.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,C=S.length;R<C;R++){const y=S[R],v=d[y.materialIndex],P=Math.max(y.start,E.start),N=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let L=P,B=N;L<B;L+=3){const I=h.getX(L),z=h.getX(L+1),Z=h.getX(L+2);l=Uu(this,v,e,r,p,x,_,I,z,Z),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let y=R,v=C;y<v;y+=3){const P=h.getX(y),N=h.getX(y+1),L=h.getX(y+2);l=Uu(this,d,e,r,p,x,_,P,N,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,C=S.length;R<C;R++){const y=S[R],v=d[y.materialIndex],P=Math.max(y.start,E.start),N=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let L=P,B=N;L<B;L+=3){const I=L,z=L+1,Z=L+2;l=Uu(this,v,e,r,p,x,_,I,z,Z),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let y=R,v=C;y<v;y+=3){const P=y,N=y+1,L=y+2;l=Uu(this,d,e,r,p,x,_,P,N,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Ny(o,e,i,r,l,c,d,h){let m;if(e.side===Wn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,e.side===ir,h),m===null)return null;Du.copy(h),Du.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Du);return p<i.near||p>i.far?null:{distance:p,point:Du.clone(),object:o}}function Uu(o,e,i,r,l,c,d,h,m,p){o.getVertexPosition(h,Au),o.getVertexPosition(m,Ru),o.getVertexPosition(p,Cu);const x=Ny(o,e,i,r,Au,Ru,Cu,r_);if(x){const _=new tt;gi.getBarycoord(r_,Au,Ru,Cu,_),l&&(x.uv=gi.getInterpolatedAttribute(l,h,m,p,_,new ye)),c&&(x.uv1=gi.getInterpolatedAttribute(c,h,m,p,_,new ye)),d&&(x.normal=gi.getInterpolatedAttribute(d,h,m,p,_,new tt),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new tt,materialIndex:0};gi.getNormal(Au,Ru,Cu,S.normal),x.face=S,x.barycoord=_}return x}class il extends Ui{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],x=[],_=[];let S=0,E=0;R("z","y","x",-1,-1,r,i,e,d,c,0),R("z","y","x",1,-1,r,i,-e,d,c,1),R("x","z","y",1,1,e,r,i,l,d,2),R("x","z","y",1,-1,e,r,-i,l,d,3),R("x","y","z",1,-1,e,i,r,l,c,4),R("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new _i(p,3)),this.setAttribute("normal",new _i(x,3)),this.setAttribute("uv",new _i(_,2));function R(C,y,v,P,N,L,B,I,z,Z,A){const w=L/z,X=B/Z,rt=L/2,at=B/2,dt=I/2,ut=z+1,O=Z+1;let H=0,it=0;const yt=new tt;for(let xt=0;xt<O;xt++){const U=xt*X-at;for(let nt=0;nt<ut;nt++){const gt=nt*w-rt;yt[C]=gt*P,yt[y]=U*N,yt[v]=dt,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[y]=0,yt[v]=I>0?1:-1,x.push(yt.x,yt.y,yt.z),_.push(nt/z),_.push(1-xt/Z),H+=1}}for(let xt=0;xt<Z;xt++)for(let U=0;U<z;U++){const nt=S+U+ut*xt,gt=S+U+ut*(xt+1),At=S+(U+1)+ut*(xt+1),It=S+(U+1)+ut*xt;m.push(nt,gt,It),m.push(gt,At,It),it+=6}h.addGroup(E,it,A),E+=it,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function zn(o){const e={};for(let i=0;i<o.length;i++){const r=Hs(o[i]);for(const l in r)e[l]=r[l]}return e}function Oy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function av(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const Py={clone:Hs,merge:zn};var zy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,By=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zy,this.fragmentShader=By,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Oy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class rv extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new tt,s_=new ye,o_=new ye;class pi extends rv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,i){return this.getViewBounds(e,s_,o_),i.subVectors(o_,s_)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Rs=-90,Cs=1;class Fy extends qn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Rs,Cs,e,i);l.layers=this.layers,this.add(l);const c=new pi(Rs,Cs,e,i);c.layers=this.layers,this.add(c);const d=new pi(Rs,Cs,e,i);d.layers=this.layers,this.add(d);const h=new pi(Rs,Cs,e,i);h.layers=this.layers,this.add(h);const m=new pi(Rs,Cs,e,i);m.layers=this.layers,this.add(m);const p=new pi(Rs,Cs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===qu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,x]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(_,S,E),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class sv extends Bn{constructor(e=[],i=Nr,r,l,c,d,h,m,p,x){super(e,i,r,l,c,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ov extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new sv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new il(5,5,5),c=new Di({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:ga});c.uniforms.tEquirect.value=i;const d=new vi(l,c),h=i.minFilter;return i.minFilter===Ur&&(i.minFilter=Nn),new Fy(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}class Lu extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iy={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=x.position.distanceTo(_.position),E=.02,R=.005;p.inputState.pinching&&S>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Iy)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Lu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Hy extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Gy{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=Oh,this.updateRanges=[],this.version=0,this.uuid=nr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new tt;class Ku{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyMatrix4(e),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyNormalMatrix(e),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.transformDirection(e),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xe(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Ii(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Ii(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Ii(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Ii(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){ju("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new wi(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ku(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ju("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class lv extends nl{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ws;const Vo=new tt,Ds=new tt,Us=new tt,Ls=new ye,Xo=new ye,uv=new rn,Nu=new tt,ko=new tt,Ou=new tt,l_=new ye,Pd=new ye,u_=new ye;class Vy extends qn{constructor(e=new lv){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Ui;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Gy(i,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Ku(r,3,0,!1)),ws.setAttribute("uv",new Ku(r,2,3,!1))}this.geometry=ws,this.material=e,this.center=new ye(.5,.5),this.count=1}raycast(e,i){e.camera===null&&be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),uv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Us.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const d=this.center;Pu(Nu.set(-.5,-.5,0),Us,d,Ds,l,c),Pu(ko.set(.5,-.5,0),Us,d,Ds,l,c),Pu(Ou.set(.5,.5,0),Us,d,Ds,l,c),l_.set(0,0),Pd.set(1,0),u_.set(1,1);let h=e.ray.intersectTriangle(Nu,ko,Ou,!1,Vo);if(h===null&&(Pu(ko.set(-.5,.5,0),Us,d,Ds,l,c),Pd.set(0,1),h=e.ray.intersectTriangle(Nu,Ou,ko,!1,Vo),h===null))return;const m=e.ray.origin.distanceTo(Vo);m<e.near||m>e.far||i.push({distance:m,point:Vo.clone(),uv:gi.getInterpolation(Vo,Nu,ko,Ou,l_,Pd,u_,new ye),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Pu(o,e,i,r,l,c){Ls.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Xo.x=c*Ls.x-l*Ls.y,Xo.y=l*Ls.x+c*Ls.y):Xo.copy(Ls),o.copy(e),o.x+=Xo.x,o.y+=Xo.y,o.applyMatrix4(uv)}class Xy extends Bn{constructor(e=null,i=1,r=1,l,c,d,h,m,p=Cn,x=Cn,_,S){super(null,d,h,m,p,x,l,c,_,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=new tt,ky=new tt,Wy=new ce;class Cr{constructor(e=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=zd.subVectors(r,i).cross(ky.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(zd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Wy.getNormalMatrix(e),l=this.coplanarPoint(zd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Kh,qy=new ye(.5,.5),zu=new tt;class cv{constructor(e=new Cr,i=new Cr,r=new Cr,l=new Cr,c=new Cr,d=new Cr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Gi,r=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],x=c[4],_=c[5],S=c[6],E=c[7],R=c[8],C=c[9],y=c[10],v=c[11],P=c[12],N=c[13],L=c[14],B=c[15];if(l[0].setComponents(p-d,E-x,v-R,B-P).normalize(),l[1].setComponents(p+d,E+x,v+R,B+P).normalize(),l[2].setComponents(p+h,E+_,v+C,B+N).normalize(),l[3].setComponents(p-h,E-_,v-C,B-N).normalize(),r)l[4].setComponents(m,S,y,L).normalize(),l[5].setComponents(p-m,E-S,v-y,B-L).normalize();else if(l[4].setComponents(p-m,E-S,v-y,B-L).normalize(),i===Gi)l[5].setComponents(p+m,E+S,v+y,B+L).normalize();else if(i===qu)l[5].setComponents(m,S,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const i=qy.distanceTo(e.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(zu.x=l.normal.x>0?e.max.x:e.min.x,zu.y=l.normal.y>0?e.max.y:e.min.y,zu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(zu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $o extends Bn{constructor(e,i,r=ki,l,c,d,h=Cn,m=Cn,p,x=xa,_=1){if(x!==xa&&x!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,c,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Yy extends $o{constructor(e,i=ki,r=Nr,l,c,d=Cn,h=Cn,m,p=xa){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,i,r,l,c,d,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ju extends Ui{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,_=e/h,S=i/m,E=[],R=[],C=[],y=[];for(let v=0;v<x;v++){const P=v*S-d;for(let N=0;N<p;N++){const L=N*_-c;R.push(L,-P,0),C.push(0,0,1),y.push(N/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let P=0;P<h;P++){const N=P+p*v,L=P+p*(v+1),B=P+1+p*(v+1),I=P+1+p*v;E.push(N,L,I),E.push(L,B,I)}this.setIndex(E),this.setAttribute("position",new _i(R,3)),this.setAttribute("normal",new _i(C,3)),this.setAttribute("uv",new _i(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zo extends Ui{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const x=[],_=new tt,S=new tt,E=[],R=[],C=[],y=[];for(let v=0;v<=r;v++){const P=[],N=v/r;let L=0;v===0&&d===0?L=.5/i:v===r&&m===Math.PI&&(L=-.5/i);for(let B=0;B<=i;B++){const I=B/i;_.x=-e*Math.cos(l+I*c)*Math.sin(d+N*h),_.y=e*Math.cos(d+N*h),_.z=e*Math.sin(l+I*c)*Math.sin(d+N*h),R.push(_.x,_.y,_.z),S.copy(_).normalize(),C.push(S.x,S.y,S.z),y.push(I+L,1-N),P.push(p++)}x.push(P)}for(let v=0;v<r;v++)for(let P=0;P<i;P++){const N=x[v][P+1],L=x[v][P],B=x[v+1][P],I=x[v+1][P+1];(v!==0||d>0)&&E.push(N,L,I),(v!==r-1||m<Math.PI)&&E.push(L,B,I)}this.setIndex(E),this.setAttribute("position",new _i(R,3)),this.setAttribute("normal",new _i(C,3)),this.setAttribute("uv",new _i(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jy extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zy extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ky extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dv extends rv{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Qy extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function c_(o,e,i,r){const l=Jy(r);switch(i){case Z_:return o*e;case Q_:return o*e/l.components*l.byteLength;case kh:return o*e/l.components*l.byteLength;case Fs:return o*e*2/l.components*l.byteLength;case Wh:return o*e*2/l.components*l.byteLength;case K_:return o*e*3/l.components*l.byteLength;case Ci:return o*e*4/l.components*l.byteLength;case qh:return o*e*4/l.components*l.byteLength;case Hu:case Gu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vu:case Xu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ih:case rh:return Math.max(o,16)*Math.max(e,8)/4;case nh:case ah:return Math.max(o,8)*Math.max(e,8)/2;case sh:case oh:case uh:case ch:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case lh:case fh:case dh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case mh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case gh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case xh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case yh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case bh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Th:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Rh:case Ch:case wh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Dh:case Uh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Lh:case Nh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Jy(o){switch(o){case mi:case W_:return{byteLength:1,components:1};case Ko:case q_:case va:return{byteLength:2,components:1};case Vh:case Xh:return{byteLength:2,components:4};case ki:case Gh:case Hi:return{byteLength:4,components:1};case Y_:case j_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hh}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hh);function hv(){let o=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function $y(o){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const x=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,x);else{_.sort((E,R)=>E.start-R.start);let S=0;for(let E=1;E<_.length;E++){const R=_[S],C=_[E];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++S,_[S]=C)}_.length=S+1;for(let E=0,R=_.length;E<R;E++){const C=_[E];o.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var tM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,EM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DM="gl_FragColor = linearToOutputTexel( gl_FragColor );",UM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$M=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ME=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ob=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ab=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ub=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:tM,alphahash_pars_fragment:eM,alphamap_fragment:nM,alphamap_pars_fragment:iM,alphatest_fragment:aM,alphatest_pars_fragment:rM,aomap_fragment:sM,aomap_pars_fragment:oM,batching_pars_vertex:lM,batching_vertex:uM,begin_vertex:cM,beginnormal_vertex:fM,bsdfs:dM,iridescence_fragment:hM,bumpmap_pars_fragment:pM,clipping_planes_fragment:mM,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:_M,clipping_planes_vertex:vM,color_fragment:xM,color_pars_fragment:SM,color_pars_vertex:yM,color_vertex:MM,common:EM,cube_uv_reflection_fragment:bM,defaultnormal_vertex:TM,displacementmap_pars_vertex:AM,displacementmap_vertex:RM,emissivemap_fragment:CM,emissivemap_pars_fragment:wM,colorspace_fragment:DM,colorspace_pars_fragment:UM,envmap_fragment:LM,envmap_common_pars_fragment:NM,envmap_pars_fragment:OM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:qM,envmap_vertex:zM,fog_vertex:BM,fog_pars_vertex:FM,fog_fragment:IM,fog_pars_fragment:HM,gradientmap_pars_fragment:GM,lightmap_pars_fragment:VM,lights_lambert_fragment:XM,lights_lambert_pars_fragment:kM,lights_pars_begin:WM,lights_toon_fragment:YM,lights_toon_pars_fragment:jM,lights_phong_fragment:ZM,lights_phong_pars_fragment:KM,lights_physical_fragment:QM,lights_physical_pars_fragment:JM,lights_fragment_begin:$M,lights_fragment_maps:tE,lights_fragment_end:eE,logdepthbuf_fragment:nE,logdepthbuf_pars_fragment:iE,logdepthbuf_pars_vertex:aE,logdepthbuf_vertex:rE,map_fragment:sE,map_pars_fragment:oE,map_particle_fragment:lE,map_particle_pars_fragment:uE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:fE,morphinstance_vertex:dE,morphcolor_vertex:hE,morphnormal_vertex:pE,morphtarget_pars_vertex:mE,morphtarget_vertex:gE,normal_fragment_begin:_E,normal_fragment_maps:vE,normal_pars_fragment:xE,normal_pars_vertex:SE,normal_vertex:yE,normalmap_pars_fragment:ME,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:TE,iridescence_pars_fragment:AE,opaque_fragment:RE,packing:CE,premultiplied_alpha_fragment:wE,project_vertex:DE,dithering_fragment:UE,dithering_pars_fragment:LE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:OE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:zE,shadowmap_vertex:BE,shadowmask_pars_fragment:FE,skinbase_vertex:IE,skinning_pars_vertex:HE,skinning_vertex:GE,skinnormal_vertex:VE,specularmap_fragment:XE,specularmap_pars_fragment:kE,tonemapping_fragment:WE,tonemapping_pars_fragment:qE,transmission_fragment:YE,transmission_pars_fragment:jE,uv_pars_fragment:ZE,uv_pars_vertex:KE,uv_vertex:QE,worldpos_vertex:JE,background_vert:$E,background_frag:tb,backgroundCube_vert:eb,backgroundCube_frag:nb,cube_vert:ib,cube_frag:ab,depth_vert:rb,depth_frag:sb,distance_vert:ob,distance_frag:lb,equirect_vert:ub,equirect_frag:cb,linedashed_vert:fb,linedashed_frag:db,meshbasic_vert:hb,meshbasic_frag:pb,meshlambert_vert:mb,meshlambert_frag:gb,meshmatcap_vert:_b,meshmatcap_frag:vb,meshnormal_vert:xb,meshnormal_frag:Sb,meshphong_vert:yb,meshphong_frag:Mb,meshphysical_vert:Eb,meshphysical_frag:bb,meshtoon_vert:Tb,meshtoon_frag:Ab,points_vert:Rb,points_frag:Cb,shadow_vert:wb,shadow_frag:Db,sprite_vert:Ub,sprite_frag:Lb},Ot={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Fi={basic:{uniforms:zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Le(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:zn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:zn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Le(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:zn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:zn([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:zn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:zn([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:zn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:zn([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:zn([Ot.common,Ot.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:zn([Ot.lights,Ot.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Fi.physical={uniforms:zn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Bu={r:0,b:0,g:0},Ar=new Sa,Nb=new rn;function Ob(o,e,i,r,l,c,d){const h=new Le(0);let m=c===!0?0:1,p,x,_=null,S=0,E=null;function R(N){let L=N.isScene===!0?N.background:null;return L&&L.isTexture&&(L=(N.backgroundBlurriness>0?i:e).get(L)),L}function C(N){let L=!1;const B=R(N);B===null?v(h,m):B&&B.isColor&&(v(B,1),L=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,d):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,L){const B=R(L);B&&(B.isCubeTexture||B.mapping===Qu)?(x===void 0&&(x=new vi(new il(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Hs(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(I,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Ar.copy(L.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),x.material.uniforms.envMap.value=B,x.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(Ar)),x.material.toneMapped=Te.getTransfer(B.colorSpace)!==Ie,(_!==B||S!==B.version||E!==o.toneMapping)&&(x.material.needsUpdate=!0,_=B,S=B.version,E=o.toneMapping),x.layers.enableAll(),N.unshift(x,x.geometry,x.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new vi(new Ju(2,2),new Di({name:"BackgroundMaterial",uniforms:Hs(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Te.getTransfer(B.colorSpace)!==Ie,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||S!==B.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,_=B,S=B.version,E=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,L){N.getRGB(Bu,av(o)),r.buffers.color.setClear(Bu.r,Bu.g,Bu.b,L,d)}function P(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,L=1){h.set(N),m=L,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(h,m)},render:C,addToRenderList:y,dispose:P}}function Pb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,d=!1;function h(w,X,rt,at,dt){let ut=!1;const O=_(at,rt,X);c!==O&&(c=O,p(c.object)),ut=E(w,at,rt,dt),ut&&R(w,at,rt,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(ut||d)&&(d=!1,L(w,X,rt,at),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function x(w){return o.deleteVertexArray(w)}function _(w,X,rt){const at=rt.wireframe===!0;let dt=r[w.id];dt===void 0&&(dt={},r[w.id]=dt);let ut=dt[X.id];ut===void 0&&(ut={},dt[X.id]=ut);let O=ut[at];return O===void 0&&(O=S(m()),ut[at]=O),O}function S(w){const X=[],rt=[],at=[];for(let dt=0;dt<i;dt++)X[dt]=0,rt[dt]=0,at[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:rt,attributeDivisors:at,object:w,attributes:{},index:null}}function E(w,X,rt,at){const dt=c.attributes,ut=X.attributes;let O=0;const H=rt.getAttributes();for(const it in H)if(H[it].location>=0){const xt=dt[it];let U=ut[it];if(U===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),xt===void 0||xt.attribute!==U||U&&xt.data!==U.data)return!0;O++}return c.attributesNum!==O||c.index!==at}function R(w,X,rt,at){const dt={},ut=X.attributes;let O=0;const H=rt.getAttributes();for(const it in H)if(H[it].location>=0){let xt=ut[it];xt===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const U={};U.attribute=xt,xt&&xt.data&&(U.data=xt.data),dt[it]=U,O++}c.attributes=dt,c.attributesNum=O,c.index=at}function C(){const w=c.newAttributes;for(let X=0,rt=w.length;X<rt;X++)w[X]=0}function y(w){v(w,0)}function v(w,X){const rt=c.newAttributes,at=c.enabledAttributes,dt=c.attributeDivisors;rt[w]=1,at[w]===0&&(o.enableVertexAttribArray(w),at[w]=1),dt[w]!==X&&(o.vertexAttribDivisor(w,X),dt[w]=X)}function P(){const w=c.newAttributes,X=c.enabledAttributes;for(let rt=0,at=X.length;rt<at;rt++)X[rt]!==w[rt]&&(o.disableVertexAttribArray(rt),X[rt]=0)}function N(w,X,rt,at,dt,ut,O){O===!0?o.vertexAttribIPointer(w,X,rt,dt,ut):o.vertexAttribPointer(w,X,rt,at,dt,ut)}function L(w,X,rt,at){C();const dt=at.attributes,ut=rt.getAttributes(),O=X.defaultAttributeValues;for(const H in ut){const it=ut[H];if(it.location>=0){let yt=dt[H];if(yt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const xt=yt.normalized,U=yt.itemSize,nt=e.get(yt);if(nt===void 0)continue;const gt=nt.buffer,At=nt.type,It=nt.bytesPerElement,et=At===o.INT||At===o.UNSIGNED_INT||yt.gpuType===Gh;if(yt.isInterleavedBufferAttribute){const ct=yt.data,Dt=ct.stride,Xt=yt.offset;if(ct.isInstancedInterleavedBuffer){for(let Ht=0;Ht<it.locationSize;Ht++)v(it.location+Ht,ct.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ht=0;Ht<it.locationSize;Ht++)y(it.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Ht=0;Ht<it.locationSize;Ht++)N(it.location+Ht,U/it.locationSize,At,xt,Dt*It,(Xt+U/it.locationSize*Ht)*It,et)}else{if(yt.isInstancedBufferAttribute){for(let ct=0;ct<it.locationSize;ct++)v(it.location+ct,yt.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ct=0;ct<it.locationSize;ct++)y(it.location+ct);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let ct=0;ct<it.locationSize;ct++)N(it.location+ct,U/it.locationSize,At,xt,U*It,U/it.locationSize*ct*It,et)}}else if(O!==void 0){const xt=O[H];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(it.location,xt);break;case 3:o.vertexAttrib3fv(it.location,xt);break;case 4:o.vertexAttrib4fv(it.location,xt);break;default:o.vertexAttrib1fv(it.location,xt)}}}}P()}function B(){Z();for(const w in r){const X=r[w];for(const rt in X){const at=X[rt];for(const dt in at)x(at[dt].object),delete at[dt];delete X[rt]}delete r[w]}}function I(w){if(r[w.id]===void 0)return;const X=r[w.id];for(const rt in X){const at=X[rt];for(const dt in at)x(at[dt].object),delete at[dt];delete X[rt]}delete r[w.id]}function z(w){for(const X in r){const rt=r[X];if(rt[w.id]===void 0)continue;const at=rt[w.id];for(const dt in at)x(at[dt].object),delete at[dt];delete rt[w.id]}}function Z(){A(),d=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:A,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:y,disableUnusedAttributes:P}}function zb(o,e,i){let r;function l(p){r=p}function c(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,_){_!==0&&(o.drawArraysInstanced(r,p,x,_),i.update(x,r,_))}function h(p,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,_);let E=0;for(let R=0;R<_;R++)E+=x[R];i.update(E,r,1)}function m(p,x,_,S){if(_===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<p.length;R++)d(p[R],x[R],S[R]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,_);let R=0;for(let C=0;C<_;C++)R+=x[C]*S[C];i.update(R,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Bb(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ci&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const Z=z===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==mi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Hi&&!Z)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(re("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:L,maxSamples:B,samples:I}}function Fb(o){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Cr,h=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||r!==0||l;return l=S,r=_.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=x(_,S,0)},this.setState=function(_,S,E){const R=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,v=o.get(_);if(!l||R===null||R.length===0||c&&!y)c?x(null):p();else{const P=c?0:r,N=P*4;let L=v.clippingState||null;m.value=L,L=x(R,S,N,E);for(let B=0;B!==N;++B)L[B]=i[B];v.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,S,E,R){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,R!==!0||y===null){const v=E+C*4,P=S.matrixWorldInverse;h.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let N=0,L=E;N!==C;++N,L+=4)d.copy(_[N]).applyMatrix4(P,h),d.normal.toArray(y,L),y[L+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function Ib(o){let e=new WeakMap;function i(d,h){return h===Jd?d.mapping=Nr:h===$d&&(d.mapping=Bs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Jd||h===$d)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new ov(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const er=4,f_=[.125,.215,.35,.446,.526,.582],Dr=20,Hb=256,Wo=new dv,d_=new Le;let Bd=null,Fd=0,Id=0,Hd=!1;const Gb=new tt;class h_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=Gb}=c;Bd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,Fd,Id),this._renderer.xr.enabled=Hd,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Nr||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:va,format:Ci,colorSpace:Is,depthBuffer:!1},l=p_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Vb(c)),this._blurMaterial=kb(c,e,i),this._ggxMaterial=Xb(c,e,i)}return l}_compileMaterial(e){const i=new vi(new Ui,e);this._renderer.compile(i,Wo)}_sceneToCubeUV(e,i,r,l,c){const m=new pi(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,E=_.toneMapping;_.getClearColor(d_),_.toneMapping=Vi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vi(new il,new Zu({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const P=e.background;P?P.isColor&&(y.color.copy(P),e.background=null,v=!0):(y.color.copy(d_),v=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[N],c.y,c.z)):L===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[N]));const B=this._cubeSize;Ns(l,L*B,N>2?B:0,B,B),_.setRenderTarget(l),v&&_.render(C,m),_.render(e,m)}_.toneMapping=E,_.autoClear=S,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Nr||e.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ns(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Wo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),S=0+p*1.25,E=_*S,{_lodMax:R}=this,C=this._sizeLods[r],y=3*C*(r>R-er?r-R+er:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=R-i,Ns(c,y,v,3*C,2*C),l.setRenderTarget(c),l.render(h,Wo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=R-r,Ns(e,y,v,3*C,2*C),l.setRenderTarget(e),l.render(h,Wo)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,E=this._sizeLods[r]-1,R=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Dr-1),C=c/R,y=isFinite(c)?1+Math.floor(x*C):Dr;y>Dr&&re(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Dr}`);const v=[];let P=0;for(let z=0;z<Dr;++z){const Z=z/C,A=Math.exp(-Z*Z/2);v.push(A),z===0?P+=A:z<y&&(P+=2*A)}for(let z=0;z<v.length;z++)v[z]=v[z]/P;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:N}=this;S.dTheta.value=R,S.mipInt.value=N-r;const L=this._sizeLods[l],B=3*L*(l>N-er?l-N+er:0),I=4*(this._cubeSize-L);Ns(i,B,I,3*L,2*L),m.setRenderTarget(i),m.render(_,Wo)}}function Vb(o){const e=[],i=[],r=[];let l=o;const c=o-er+1+f_.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-er?m=f_[d-o+er-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,_=1+p,S=[x,x,_,x,_,_,x,x,_,_,x,_],E=6,R=6,C=3,y=2,v=1,P=new Float32Array(C*R*E),N=new Float32Array(y*R*E),L=new Float32Array(v*R*E);for(let I=0;I<E;I++){const z=I%3*2/3-1,Z=I>2?0:-1,A=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];P.set(A,C*R*I),N.set(S,y*R*I);const w=[I,I,I,I,I,I];L.set(w,v*R*I)}const B=new Ui;B.setAttribute("position",new wi(P,C)),B.setAttribute("uv",new wi(N,y)),B.setAttribute("faceIndex",new wi(L,v)),r.push(new vi(B,null)),l>er&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function p_(o,e,i){const r=new Xi(o,e,i);return r.texture.mapping=Qu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ns(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function Xb(o,e,i){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$u(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function kb(o,e,i){const r=new Float32Array(Dr),l=new tt(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function m_(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function g_(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function $u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wb(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Jd||m===$d,x=m===Nr||m===Bs;if(p||x){let _=e.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new h_(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const E=h.image;return p&&E&&E.height>0||x&&E&&l(E)?(i===null&&(i=new h_(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function qb(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Jo("WebGLRenderer: "+r+" extension not supported."),l}}}function Yb(o,e,i,r){const l={},c=new WeakMap;function d(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const R in S.attributes)e.remove(S.attributes[R]);S.removeEventListener("dispose",d),delete l[S.id];const E=c.get(S);E&&(e.remove(E),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const E in S)e.update(S[E],o.ARRAY_BUFFER)}function p(_){const S=[],E=_.index,R=_.attributes.position;let C=0;if(E!==null){const P=E.array;C=E.version;for(let N=0,L=P.length;N<L;N+=3){const B=P[N+0],I=P[N+1],z=P[N+2];S.push(B,I,I,z,z,B)}}else if(R!==void 0){const P=R.array;C=R.version;for(let N=0,L=P.length/3-1;N<L;N+=3){const B=N+0,I=N+1,z=N+2;S.push(B,I,I,z,z,B)}}else return;const y=new(J_(S)?iv:nv)(S,1);y.version=C;const v=c.get(_);v&&e.remove(v),c.set(_,y)}function x(_){const S=c.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:x}}function jb(o,e,i){let r;function l(S){r=S}let c,d;function h(S){c=S.type,d=S.bytesPerElement}function m(S,E){o.drawElements(r,E,c,S*d),i.update(E,r,1)}function p(S,E,R){R!==0&&(o.drawElementsInstanced(r,E,c,S*d,R),i.update(E,r,R))}function x(S,E,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,c,S,0,R);let y=0;for(let v=0;v<R;v++)y+=E[v];i.update(y,r,1)}function _(S,E,R,C){if(R===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/d,E[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(r,E,0,c,S,0,C,0,R);let v=0;for(let P=0;P<R;P++)v+=E[P]*C[P];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function Zb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:be("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Kb(o,e,i){const r=new WeakMap,l=new an;function c(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let S=r.get(h);if(S===void 0||S.count!==_){let w=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var E=w;S!==void 0&&S.texture.dispose();const R=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let L=0;R===!0&&(L=1),C===!0&&(L=2),y===!0&&(L=3);let B=h.attributes.position.count*L,I=1;B>e.maxTextureSize&&(I=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const z=new Float32Array(B*I*4*_),Z=new $_(z,B,I,_);Z.type=Hi,Z.needsUpdate=!0;const A=L*4;for(let X=0;X<_;X++){const rt=v[X],at=P[X],dt=N[X],ut=B*I*4*X;for(let O=0;O<rt.count;O++){const H=O*A;R===!0&&(l.fromBufferAttribute(rt,O),z[ut+H+0]=l.x,z[ut+H+1]=l.y,z[ut+H+2]=l.z,z[ut+H+3]=0),C===!0&&(l.fromBufferAttribute(at,O),z[ut+H+4]=l.x,z[ut+H+5]=l.y,z[ut+H+6]=l.z,z[ut+H+7]=0),y===!0&&(l.fromBufferAttribute(dt,O),z[ut+H+8]=l.x,z[ut+H+9]=l.y,z[ut+H+10]=l.z,z[ut+H+11]=dt.itemSize===4?l.w:1)}}S={count:_,texture:Z,size:new ye(B,I)},r.set(h,S),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const C=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function Qb(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,_=e.get(m,x);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const Jb={[B_]:"LINEAR_TONE_MAPPING",[F_]:"REINHARD_TONE_MAPPING",[I_]:"CINEON_TONE_MAPPING",[H_]:"ACES_FILMIC_TONE_MAPPING",[V_]:"AGX_TONE_MAPPING",[X_]:"NEUTRAL_TONE_MAPPING",[G_]:"CUSTOM_TONE_MAPPING"};function $b(o,e,i,r,l){const c=new Xi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Xi(e,i,{type:va,depthBuffer:!1,stencilBuffer:!1}),h=new Ui;h.setAttribute("position",new _i([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _i([0,2,0,0,2,0],2));const m=new jy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new vi(h,m),x=new dv(-1,1,1,-1,0,1);let _=null,S=null,E=!1,R,C=null,y=[],v=!1;this.setSize=function(P,N){c.setSize(P,N),d.setSize(P,N);for(let L=0;L<y.length;L++){const B=y[L];B.setSize&&B.setSize(P,N)}},this.setEffects=function(P){y=P,v=y.length>0&&y[0].isRenderPass===!0;const N=c.width,L=c.height;for(let B=0;B<y.length;B++){const I=y[B];I.setSize&&I.setSize(N,L)}},this.begin=function(P,N){if(E||P.toneMapping===Vi&&y.length===0)return!1;if(C=N,N!==null){const L=N.width,B=N.height;(c.width!==L||c.height!==B)&&this.setSize(L,B)}return v===!1&&P.setRenderTarget(c),R=P.toneMapping,P.toneMapping=Vi,!0},this.hasRenderPass=function(){return v},this.end=function(P,N){P.toneMapping=R,E=!0;let L=c,B=d;for(let I=0;I<y.length;I++){const z=y[I];if(z.enabled!==!1&&(z.render(P,B,L,N),z.needsSwap!==!1)){const Z=L;L=B,B=Z}}if(_!==P.outputColorSpace||S!==P.toneMapping){_=P.outputColorSpace,S=P.toneMapping,m.defines={},Te.getTransfer(_)===Ie&&(m.defines.SRGB_TRANSFER="");const I=Jb[S];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,P.setRenderTarget(C),P.render(p,x),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const pv=new Bn,zh=new $o(1,1),mv=new $_,gv=new yy,_v=new sv,__=[],v_=[],x_=new Float32Array(16),S_=new Float32Array(9),y_=new Float32Array(4);function Vs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=__[l];if(c===void 0&&(c=new Float32Array(l),__[l]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function tc(o,e){let i=v_[e];i===void 0&&(i=new Int32Array(e),v_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function tT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function eT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function nT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function iT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function aT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;y_.set(r),o.uniformMatrix2fv(this.addr,!1,y_),mn(i,r)}}function rT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;S_.set(r),o.uniformMatrix3fv(this.addr,!1,S_),mn(i,r)}}function sT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;x_.set(r),o.uniformMatrix4fv(this.addr,!1,x_),mn(i,r)}}function oT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function cT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function fT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function dT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function hT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function mT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(zh.compareFunction=i.isReversedDepthBuffer()?jh:Yh,c=zh):c=pv,i.setTexture2D(e||c,l)}function gT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||gv,l)}function _T(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||_v,l)}function vT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||mv,l)}function xT(o){switch(o){case 5126:return tT;case 35664:return eT;case 35665:return nT;case 35666:return iT;case 35674:return aT;case 35675:return rT;case 35676:return sT;case 5124:case 35670:return oT;case 35667:case 35671:return lT;case 35668:case 35672:return uT;case 35669:case 35673:return cT;case 5125:return fT;case 36294:return dT;case 36295:return hT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return vT}}function ST(o,e){o.uniform1fv(this.addr,e)}function yT(o,e){const i=Vs(e,this.size,2);o.uniform2fv(this.addr,i)}function MT(o,e){const i=Vs(e,this.size,3);o.uniform3fv(this.addr,i)}function ET(o,e){const i=Vs(e,this.size,4);o.uniform4fv(this.addr,i)}function bT(o,e){const i=Vs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function TT(o,e){const i=Vs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function AT(o,e){const i=Vs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function RT(o,e){o.uniform1iv(this.addr,e)}function CT(o,e){o.uniform2iv(this.addr,e)}function wT(o,e){o.uniform3iv(this.addr,e)}function DT(o,e){o.uniform4iv(this.addr,e)}function UT(o,e){o.uniform1uiv(this.addr,e)}function LT(o,e){o.uniform2uiv(this.addr,e)}function NT(o,e){o.uniform3uiv(this.addr,e)}function OT(o,e){o.uniform4uiv(this.addr,e)}function PT(o,e,i){const r=this.cache,l=e.length,c=tc(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=zh:d=pv;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function zT(o,e,i){const r=this.cache,l=e.length,c=tc(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||gv,c[d])}function BT(o,e,i){const r=this.cache,l=e.length,c=tc(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||_v,c[d])}function FT(o,e,i){const r=this.cache,l=e.length,c=tc(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||mv,c[d])}function IT(o){switch(o){case 5126:return ST;case 35664:return yT;case 35665:return MT;case 35666:return ET;case 35674:return bT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return wT;case 35669:case 35673:return DT;case 5125:return UT;case 36294:return LT;case 36295:return NT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return FT}}class HT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=xT(i.type)}}class GT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=IT(i.type)}}class VT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const Gd=/(\w+)(\])?(\[|\.)?/g;function M_(o,e){o.seq.push(e),o.map[e.id]=e}function XT(o,e,i){const r=o.name,l=r.length;for(Gd.lastIndex=0;;){const c=Gd.exec(r),d=Gd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){M_(i,p===void 0?new HT(h,o,e):new GT(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new VT(h),M_(i,_)),i=_}}}class ku{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);XT(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function E_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const kT=37297;let WT=0;function qT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const b_=new ce;function YT(o){Te._getMatrix(b_,Te.workingColorSpace,o);const e=`mat3( ${b_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Wu:return[e,"LinearTransferOETF"];case Ie:return[e,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function T_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+qT(o.getShaderSource(e),h)}else return c}function jT(o,e){const i=YT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const ZT={[B_]:"Linear",[F_]:"Reinhard",[I_]:"Cineon",[H_]:"ACESFilmic",[V_]:"AgX",[X_]:"Neutral",[G_]:"Custom"};function KT(o,e){const i=ZT[e];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fu=new tt;function QT(){Te.getLuminanceCoefficients(Fu);const o=Fu.x.toFixed(4),e=Fu.y.toFixed(4),i=Fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function $T(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function t1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function jo(o){return o!==""}function A_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(o){return o.replace(e1,i1)}const n1=new Map;function i1(o,e){let i=fe[e];if(i===void 0){const r=n1.get(e);if(r!==void 0)i=fe[r],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bh(i)}const a1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C_(o){return o.replace(a1,r1)}function r1(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function w_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const s1={[Iu]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function o1(o){return s1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const l1={[Nr]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[Qu]:"ENVMAP_TYPE_CUBE_UV"};function u1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":l1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const c1={[Bs]:"ENVMAP_MODE_REFRACTION"};function f1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":c1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const d1={[z_]:"ENVMAP_BLENDING_MULTIPLY",[ey]:"ENVMAP_BLENDING_MIX",[ny]:"ENVMAP_BLENDING_ADD"};function h1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":d1[o.combine]||"ENVMAP_BLENDING_NONE"}function p1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function m1(o,e,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=o1(i),p=u1(i),x=f1(i),_=h1(i),S=p1(i),E=JT(i),R=$T(c),C=l.createProgram();let y,v,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(jo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(jo).join(`
`),v.length>0&&(v+=`
`)):(y=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),v=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?fe.tonemapping_pars_fragment:"",i.toneMapping!==Vi?KT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,jT("linearToOutputTexel",i.outputColorSpace),QT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),d=Bh(d),d=A_(d,i),d=R_(d,i),h=Bh(h),h=A_(h,i),h=R_(h,i),d=C_(d),h=C_(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=P+y+d,L=P+v+h,B=E_(l,l.VERTEX_SHADER,N),I=E_(l,l.FRAGMENT_SHADER,L);l.attachShader(C,B),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(X){if(o.debug.checkShaderErrors){const rt=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(B)||"",dt=l.getShaderInfoLog(I)||"",ut=rt.trim(),O=at.trim(),H=dt.trim();let it=!0,yt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,B,I);else{const xt=T_(l,B,"vertex"),U=T_(l,I,"fragment");be("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ut+`
`+xt+`
`+U)}else ut!==""?re("WebGLProgram: Program Info Log:",ut):(O===""||H==="")&&(yt=!1);yt&&(X.diagnostics={runnable:it,programLog:ut,vertexShader:{log:O,prefix:y},fragmentShader:{log:H,prefix:v}})}l.deleteShader(B),l.deleteShader(I),Z=new ku(l,C),A=t1(l,C)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let A;this.getAttributes=function(){return A===void 0&&z(this),A};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,kT)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=WT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=I,this}let g1=0;class _1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new v1(e),i.set(e,r)),r}}class v1{constructor(e){this.id=g1++,this.code=e,this.usedTimes=0}}function x1(o,e,i,r,l,c,d){const h=new tv,m=new _1,p=new Set,x=[],_=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(A){return p.add(A),A===0?"uv":`uv${A}`}function y(A,w,X,rt,at){const dt=rt.fog,ut=at.geometry,O=A.isMeshStandardMaterial?rt.environment:null,H=(A.isMeshStandardMaterial?i:e).get(A.envMap||O),it=H&&H.mapping===Qu?H.image.height:null,yt=R[A.type];A.precision!==null&&(E=l.getMaxPrecision(A.precision),E!==A.precision&&re("WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const xt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,U=xt!==void 0?xt.length:0;let nt=0;ut.morphAttributes.position!==void 0&&(nt=1),ut.morphAttributes.normal!==void 0&&(nt=2),ut.morphAttributes.color!==void 0&&(nt=3);let gt,At,It,et;if(yt){const Ee=Fi[yt];gt=Ee.vertexShader,At=Ee.fragmentShader}else gt=A.vertexShader,At=A.fragmentShader,m.update(A),It=m.getVertexShaderID(A),et=m.getFragmentShaderID(A);const ct=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),Xt=at.isInstancedMesh===!0,Ht=at.isBatchedMesh===!0,de=!!A.map,Qe=!!A.matcap,ge=!!H,he=!!A.aoMap,Ce=!!A.lightMap,se=!!A.bumpMap,Je=!!A.normalMap,G=!!A.displacementMap,je=!!A.emissiveMap,Me=!!A.metalnessMap,Ne=!!A.roughnessMap,Yt=A.anisotropy>0,D=A.clearcoat>0,M=A.dispersion>0,W=A.iridescence>0,ht=A.sheen>0,vt=A.transmission>0,lt=Yt&&!!A.anisotropyMap,Zt=D&&!!A.clearcoatMap,Ct=D&&!!A.clearcoatNormalMap,kt=D&&!!A.clearcoatRoughnessMap,ee=W&&!!A.iridescenceMap,Mt=W&&!!A.iridescenceThicknessMap,Et=ht&&!!A.sheenColorMap,Bt=ht&&!!A.sheenRoughnessMap,Pt=!!A.specularMap,wt=!!A.specularColorMap,le=!!A.specularIntensityMap,k=vt&&!!A.transmissionMap,Lt=vt&&!!A.thicknessMap,bt=!!A.gradientMap,zt=!!A.alphaMap,St=A.alphaTest>0,_t=!!A.alphaHash,Rt=!!A.extensions;let ne=Vi;A.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Pe={shaderID:yt,shaderType:A.type,shaderName:A.name,vertexShader:gt,fragmentShader:At,defines:A.defines,customVertexShaderID:It,customFragmentShaderID:et,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:Ht,batchingColor:Ht&&at._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&at.instanceColor!==null,instancingMorph:Xt&&at.morphTexture!==null,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Is,alphaToCoverage:!!A.alphaToCoverage,map:de,matcap:Qe,envMap:ge,envMapMode:ge&&H.mapping,envMapCubeUVHeight:it,aoMap:he,lightMap:Ce,bumpMap:se,normalMap:Je,displacementMap:G,emissiveMap:je,normalMapObjectSpace:Je&&A.normalMapType===sy,normalMapTangentSpace:Je&&A.normalMapType===ry,metalnessMap:Me,roughnessMap:Ne,anisotropy:Yt,anisotropyMap:lt,clearcoat:D,clearcoatMap:Zt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:kt,dispersion:M,iridescence:W,iridescenceMap:ee,iridescenceThicknessMap:Mt,sheen:ht,sheenColorMap:Et,sheenRoughnessMap:Bt,specularMap:Pt,specularColorMap:wt,specularIntensityMap:le,transmission:vt,transmissionMap:k,thicknessMap:Lt,gradientMap:bt,opaque:A.transparent===!1&&A.blending===Os&&A.alphaToCoverage===!1,alphaMap:zt,alphaTest:St,alphaHash:_t,combine:A.combine,mapUv:de&&C(A.map.channel),aoMapUv:he&&C(A.aoMap.channel),lightMapUv:Ce&&C(A.lightMap.channel),bumpMapUv:se&&C(A.bumpMap.channel),normalMapUv:Je&&C(A.normalMap.channel),displacementMapUv:G&&C(A.displacementMap.channel),emissiveMapUv:je&&C(A.emissiveMap.channel),metalnessMapUv:Me&&C(A.metalnessMap.channel),roughnessMapUv:Ne&&C(A.roughnessMap.channel),anisotropyMapUv:lt&&C(A.anisotropyMap.channel),clearcoatMapUv:Zt&&C(A.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&C(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&C(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&C(A.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&C(A.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(A.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&C(A.sheenRoughnessMap.channel),specularMapUv:Pt&&C(A.specularMap.channel),specularColorMapUv:wt&&C(A.specularColorMap.channel),specularIntensityMapUv:le&&C(A.specularIntensityMap.channel),transmissionMapUv:k&&C(A.transmissionMap.channel),thicknessMapUv:Lt&&C(A.thicknessMap.channel),alphaMapUv:zt&&C(A.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Je||Yt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ut.attributes.uv&&(de||zt),fog:!!dt,useFog:A.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Dt,skinning:at.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:de&&A.map.isVideoTexture===!0&&Te.getTransfer(A.map.colorSpace)===Ie,decodeVideoTextureEmissive:je&&A.emissiveMap.isVideoTexture===!0&&Te.getTransfer(A.emissiveMap.colorSpace)===Ie,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===pa,flipSided:A.side===Wn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Rt&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&A.extensions.multiDraw===!0||Ht)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function v(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const X in A.defines)w.push(X),w.push(A.defines[X]);return A.isRawShaderMaterial===!1&&(P(w,A),N(w,A),w.push(o.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function P(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function N(A,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),A.push(h.mask)}function L(A){const w=R[A.type];let X;if(w){const rt=Fi[w];X=Py.clone(rt.uniforms)}else X=A.uniforms;return X}function B(A,w){let X=_.get(w);return X!==void 0?++X.usedTimes:(X=new m1(o,w,A,c),x.push(X),_.set(w,X)),X}function I(A){if(--A.usedTimes===0){const w=x.indexOf(A);x[w]=x[x.length-1],x.pop(),_.delete(A.cacheKey),A.destroy()}}function z(A){m.remove(A)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:L,acquireProgram:B,releaseProgram:I,releaseShaderCache:z,programs:x,dispose:Z}}function S1(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function y1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function D_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function U_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(_,S,E,R,C,y){let v=o[e];return v===void 0?(v={id:_.id,object:_,geometry:S,material:E,groupOrder:R,renderOrder:_.renderOrder,z:C,group:y},o[e]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=E,v.groupOrder=R,v.renderOrder=_.renderOrder,v.z=C,v.group=y),e++,v}function h(_,S,E,R,C,y){const v=d(_,S,E,R,C,y);E.transmission>0?r.push(v):E.transparent===!0?l.push(v):i.push(v)}function m(_,S,E,R,C,y){const v=d(_,S,E,R,C,y);E.transmission>0?r.unshift(v):E.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||y1),r.length>1&&r.sort(S||D_),l.length>1&&l.sort(S||D_)}function x(){for(let _=e,S=o.length;_<S;_++){const E=o[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:x,sort:p}}function M1(){let o=new WeakMap;function e(r,l){const c=o.get(r);let d;return c===void 0?(d=new U_,o.set(r,[d])):l>=c.length?(d=new U_,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function E1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new tt,color:new Le};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[e.id]=i,i}}}function b1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let T1=0;function A1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function R1(o){const e=new E1,i=b1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new tt);const l=new tt,c=new rn,d=new rn;function h(p){let x=0,_=0,S=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let E=0,R=0,C=0,y=0,v=0,P=0,N=0,L=0,B=0,I=0,z=0;p.sort(A1);for(let A=0,w=p.length;A<w;A++){const X=p[A],rt=X.color,at=X.intensity,dt=X.distance;let ut=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Fs?ut=X.shadow.map.texture:ut=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)x+=rt.r*at,_+=rt.g*at,S+=rt.b*at;else if(X.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(X.sh.coefficients[O],at);z++}else if(X.isDirectionalLight){const O=e.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const H=X.shadow,it=i.get(X);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,r.directionalShadow[E]=it,r.directionalShadowMap[E]=ut,r.directionalShadowMatrix[E]=X.shadow.matrix,P++}r.directional[E]=O,E++}else if(X.isSpotLight){const O=e.get(X);O.position.setFromMatrixPosition(X.matrixWorld),O.color.copy(rt).multiplyScalar(at),O.distance=dt,O.coneCos=Math.cos(X.angle),O.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),O.decay=X.decay,r.spot[C]=O;const H=X.shadow;if(X.map&&(r.spotLightMap[B]=X.map,B++,H.updateMatrices(X),X.castShadow&&I++),r.spotLightMatrix[C]=H.matrix,X.castShadow){const it=i.get(X);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,r.spotShadow[C]=it,r.spotShadowMap[C]=ut,L++}C++}else if(X.isRectAreaLight){const O=e.get(X);O.color.copy(rt).multiplyScalar(at),O.halfWidth.set(X.width*.5,0,0),O.halfHeight.set(0,X.height*.5,0),r.rectArea[y]=O,y++}else if(X.isPointLight){const O=e.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),O.distance=X.distance,O.decay=X.decay,X.castShadow){const H=X.shadow,it=i.get(X);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,it.shadowCameraNear=H.camera.near,it.shadowCameraFar=H.camera.far,r.pointShadow[R]=it,r.pointShadowMap[R]=ut,r.pointShadowMatrix[R]=X.shadow.matrix,N++}r.point[R]=O,R++}else if(X.isHemisphereLight){const O=e.get(X);O.skyColor.copy(X.color).multiplyScalar(at),O.groundColor.copy(X.groundColor).multiplyScalar(at),r.hemi[v]=O,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=S;const Z=r.hash;(Z.directionalLength!==E||Z.pointLength!==R||Z.spotLength!==C||Z.rectAreaLength!==y||Z.hemiLength!==v||Z.numDirectionalShadows!==P||Z.numPointShadows!==N||Z.numSpotShadows!==L||Z.numSpotMaps!==B||Z.numLightProbes!==z)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=y,r.point.length=R,r.hemi.length=v,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=L+B-I,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,Z.directionalLength=E,Z.pointLength=R,Z.spotLength=C,Z.rectAreaLength=y,Z.hemiLength=v,Z.numDirectionalShadows=P,Z.numPointShadows=N,Z.numSpotShadows=L,Z.numSpotMaps=B,Z.numLightProbes=z,r.version=T1++)}function m(p,x){let _=0,S=0,E=0,R=0,C=0;const y=x.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const N=p[v];if(N.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),_++}else if(N.isSpotLight){const L=r.spot[E];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),E++}else if(N.isRectAreaLight){const L=r.rectArea[R];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),d.identity(),c.copy(N.matrixWorld),c.premultiply(y),d.extractRotation(c),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),R++}else if(N.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const L=r.hemi[C];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:r}}function L_(o){const e=new R1(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function d(x){r.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function C1(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new L_(o),e.set(l,[h])):c>=d.length?(h=new L_(o),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const w1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,U1=[new tt(1,0,0),new tt(-1,0,0),new tt(0,1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1)],L1=[new tt(0,-1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,-1,0),new tt(0,-1,0)],N_=new rn,qo=new tt,Vd=new tt;function N1(o,e,i){let r=new cv;const l=new ye,c=new ye,d=new an,h=new Zy,m=new Ky,p={},x=i.maxTextureSize,_={[ir]:Wn,[Wn]:ir,[pa]:pa},S=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:w1,fragmentShader:D1}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const R=new Ui;R.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new vi(R,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu;let v=this.type;this.render=function(I,z,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;I.type===zS&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Iu);const A=o.getRenderTarget(),w=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(ga),rt.buffers.depth.getReversed()===!0?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const at=v!==this.type;at&&z.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(ut=>ut.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,ut=I.length;dt<ut;dt++){const O=I[dt],H=O.shadow;if(H===void 0){re("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const it=H.getFrameExtents();if(l.multiply(it),c.copy(H.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/it.x),l.x=c.x*it.x,H.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/it.y),l.y=c.y*it.y,H.mapSize.y=c.y)),H.map===null||at===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Yo){if(O.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Xi(l.x,l.y,{format:Fs,type:va,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new $o(l.x,l.y,Hi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=xa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn}else{O.isPointLight?(H.map=new ov(l.x),H.map.depthTexture=new Yy(l.x,ki)):(H.map=new Xi(l.x,l.y),H.map.depthTexture=new $o(l.x,l.y,ki)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=xa;const xt=o.state.buffers.depth.getReversed();this.type===Iu?(H.map.depthTexture.compareFunction=xt?jh:Yh,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn)}H.camera.updateProjectionMatrix()}const yt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<yt;xt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(H.map),o.clear());const U=H.getViewport(xt);d.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),rt.viewport(d)}if(O.isPointLight){const U=H.camera,nt=H.matrix,gt=O.distance||U.far;gt!==U.far&&(U.far=gt,U.updateProjectionMatrix()),qo.setFromMatrixPosition(O.matrixWorld),U.position.copy(qo),Vd.copy(U.position),Vd.add(U1[xt]),U.up.copy(L1[xt]),U.lookAt(Vd),U.updateMatrixWorld(),nt.makeTranslation(-qo.x,-qo.y,-qo.z),N_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(N_,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(O);r=H.getFrustum(),L(z,Z,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===Yo&&P(H,Z),H.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(A,w,X)};function P(I,z){const Z=e.update(C);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Xi(l.x,l.y,{format:Fs,type:va})),S.uniforms.shadow_pass.value=I.map.depthTexture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(z,null,Z,S,C,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(z,null,Z,E,C,null)}function N(I,z,Z,A){let w=null;const X=Z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(X!==void 0)w=X;else if(w=Z.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const rt=w.uuid,at=z.uuid;let dt=p[rt];dt===void 0&&(dt={},p[rt]=dt);let ut=dt[at];ut===void 0&&(ut=w.clone(),dt[at]=ut,z.addEventListener("dispose",B)),w=ut}if(w.visible=z.visible,w.wireframe=z.wireframe,A===Yo?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:_[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,Z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const rt=o.properties.get(w);rt.light=Z}return w}function L(I,z,Z,A,w){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Yo)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld);const at=e.update(I),dt=I.material;if(Array.isArray(dt)){const ut=at.groups;for(let O=0,H=ut.length;O<H;O++){const it=ut[O],yt=dt[it.materialIndex];if(yt&&yt.visible){const xt=N(I,yt,A,w);I.onBeforeShadow(o,I,z,Z,at,xt,it),o.renderBufferDirect(Z,null,at,xt,I,it),I.onAfterShadow(o,I,z,Z,at,xt,it)}}}else if(dt.visible){const ut=N(I,dt,A,w);I.onBeforeShadow(o,I,z,Z,at,ut,null),o.renderBufferDirect(Z,null,at,ut,I,null),I.onAfterShadow(o,I,z,Z,at,ut,null)}}const rt=I.children;for(let at=0,dt=rt.length;at<dt;at++)L(rt[at],z,Z,A,w)}function B(I){I.target.removeEventListener("dispose",B);for(const Z in p){const A=p[Z],w=I.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const O1={[Wd]:qd,[Yd]:Kd,[jd]:Qd,[zs]:Zd,[qd]:Wd,[Kd]:Yd,[Qd]:jd,[Zd]:zs};function P1(o,e){function i(){let k=!1;const Lt=new an;let bt=null;const zt=new an(0,0,0,0);return{setMask:function(St){bt!==St&&!k&&(o.colorMask(St,St,St,St),bt=St)},setLocked:function(St){k=St},setClear:function(St,_t,Rt,ne,Pe){Pe===!0&&(St*=ne,_t*=ne,Rt*=ne),Lt.set(St,_t,Rt,ne),zt.equals(Lt)===!1&&(o.clearColor(St,_t,Rt,ne),zt.copy(Lt))},reset:function(){k=!1,bt=null,zt.set(-1,0,0,0)}}}function r(){let k=!1,Lt=!1,bt=null,zt=null,St=null;return{setReversed:function(_t){if(Lt!==_t){const Rt=e.get("EXT_clip_control");_t?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Lt=_t;const ne=St;St=null,this.setClear(ne)}},getReversed:function(){return Lt},setTest:function(_t){_t?ct(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!k&&(o.depthMask(_t),bt=_t)},setFunc:function(_t){if(Lt&&(_t=O1[_t]),zt!==_t){switch(_t){case Wd:o.depthFunc(o.NEVER);break;case qd:o.depthFunc(o.ALWAYS);break;case Yd:o.depthFunc(o.LESS);break;case zs:o.depthFunc(o.LEQUAL);break;case jd:o.depthFunc(o.EQUAL);break;case Zd:o.depthFunc(o.GEQUAL);break;case Kd:o.depthFunc(o.GREATER);break;case Qd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){St!==_t&&(Lt&&(_t=1-_t),o.clearDepth(_t),St=_t)},reset:function(){k=!1,bt=null,zt=null,St=null,Lt=!1}}}function l(){let k=!1,Lt=null,bt=null,zt=null,St=null,_t=null,Rt=null,ne=null,Pe=null;return{setTest:function(Ee){k||(Ee?ct(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(Ee){Lt!==Ee&&!k&&(o.stencilMask(Ee),Lt=Ee)},setFunc:function(Ee,wn,xi){(bt!==Ee||zt!==wn||St!==xi)&&(o.stencilFunc(Ee,wn,xi),bt=Ee,zt=wn,St=xi)},setOp:function(Ee,wn,xi){(_t!==Ee||Rt!==wn||ne!==xi)&&(o.stencilOp(Ee,wn,xi),_t=Ee,Rt=wn,ne=xi)},setLocked:function(Ee){k=Ee},setClear:function(Ee){Pe!==Ee&&(o.clearStencil(Ee),Pe=Ee)},reset:function(){k=!1,Lt=null,bt=null,zt=null,St=null,_t=null,Rt=null,ne=null,Pe=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},_={},S=new WeakMap,E=[],R=null,C=!1,y=null,v=null,P=null,N=null,L=null,B=null,I=null,z=new Le(0,0,0),Z=0,A=!1,w=null,X=null,rt=null,at=null,dt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(it)[1]),O=H>=1):it.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),O=H>=2);let yt=null,xt={};const U=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),gt=new an().fromArray(U),At=new an().fromArray(nt);function It(k,Lt,bt,zt){const St=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Rt=0;Rt<bt;Rt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,St):o.texImage2D(Lt+Rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,St);return _t}const et={};et[o.TEXTURE_2D]=It(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=It(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=It(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=It(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ct(o.DEPTH_TEST),d.setFunc(zs),se(!1),Je(Ig),ct(o.CULL_FACE),he(ga);function ct(k){x[k]!==!0&&(o.enable(k),x[k]=!0)}function Dt(k){x[k]!==!1&&(o.disable(k),x[k]=!1)}function Xt(k,Lt){return _[k]!==Lt?(o.bindFramebuffer(k,Lt),_[k]=Lt,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Lt),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Ht(k,Lt){let bt=E,zt=!1;if(k){bt=S.get(Lt),bt===void 0&&(bt=[],S.set(Lt,bt));const St=k.textures;if(bt.length!==St.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Rt=St.length;_t<Rt;_t++)bt[_t]=o.COLOR_ATTACHMENT0+_t;bt.length=St.length,zt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(bt)}function de(k){return R!==k?(o.useProgram(k),R=k,!0):!1}const Qe={[wr]:o.FUNC_ADD,[FS]:o.FUNC_SUBTRACT,[IS]:o.FUNC_REVERSE_SUBTRACT};Qe[HS]=o.MIN,Qe[GS]=o.MAX;const ge={[VS]:o.ZERO,[XS]:o.ONE,[kS]:o.SRC_COLOR,[Xd]:o.SRC_ALPHA,[KS]:o.SRC_ALPHA_SATURATE,[jS]:o.DST_COLOR,[qS]:o.DST_ALPHA,[WS]:o.ONE_MINUS_SRC_COLOR,[kd]:o.ONE_MINUS_SRC_ALPHA,[ZS]:o.ONE_MINUS_DST_COLOR,[YS]:o.ONE_MINUS_DST_ALPHA,[QS]:o.CONSTANT_COLOR,[JS]:o.ONE_MINUS_CONSTANT_COLOR,[$S]:o.CONSTANT_ALPHA,[ty]:o.ONE_MINUS_CONSTANT_ALPHA};function he(k,Lt,bt,zt,St,_t,Rt,ne,Pe,Ee){if(k===ga){C===!0&&(Dt(o.BLEND),C=!1);return}if(C===!1&&(ct(o.BLEND),C=!0),k!==BS){if(k!==y||Ee!==A){if((v!==wr||L!==wr)&&(o.blendEquation(o.FUNC_ADD),v=wr,L=wr),Ee)switch(k){case Os:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hg:o.blendFunc(o.ONE,o.ONE);break;case Gg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Vg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:be("WebGLState: Invalid blending: ",k);break}else switch(k){case Os:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Gg:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vg:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",k);break}P=null,N=null,B=null,I=null,z.set(0,0,0),Z=0,y=k,A=Ee}return}St=St||Lt,_t=_t||bt,Rt=Rt||zt,(Lt!==v||St!==L)&&(o.blendEquationSeparate(Qe[Lt],Qe[St]),v=Lt,L=St),(bt!==P||zt!==N||_t!==B||Rt!==I)&&(o.blendFuncSeparate(ge[bt],ge[zt],ge[_t],ge[Rt]),P=bt,N=zt,B=_t,I=Rt),(ne.equals(z)===!1||Pe!==Z)&&(o.blendColor(ne.r,ne.g,ne.b,Pe),z.copy(ne),Z=Pe),y=k,A=!1}function Ce(k,Lt){k.side===pa?Dt(o.CULL_FACE):ct(o.CULL_FACE);let bt=k.side===Wn;Lt&&(bt=!bt),se(bt),k.blending===Os&&k.transparent===!1?he(ga):he(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),c.setMask(k.colorWrite);const zt=k.stencilWrite;h.setTest(zt),zt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),je(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function Je(k){k!==OS?(ct(o.CULL_FACE),k!==X&&(k===Ig?o.cullFace(o.BACK):k===PS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),X=k}function G(k){k!==rt&&(O&&o.lineWidth(k),rt=k)}function je(k,Lt,bt){k?(ct(o.POLYGON_OFFSET_FILL),(at!==Lt||dt!==bt)&&(o.polygonOffset(Lt,bt),at=Lt,dt=bt)):Dt(o.POLYGON_OFFSET_FILL)}function Me(k){k?ct(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Ne(k){k===void 0&&(k=o.TEXTURE0+ut-1),yt!==k&&(o.activeTexture(k),yt=k)}function Yt(k,Lt,bt){bt===void 0&&(yt===null?bt=o.TEXTURE0+ut-1:bt=yt);let zt=xt[bt];zt===void 0&&(zt={type:void 0,texture:void 0},xt[bt]=zt),(zt.type!==k||zt.texture!==Lt)&&(yt!==bt&&(o.activeTexture(bt),yt=bt),o.bindTexture(k,Lt||et[k]),zt.type=k,zt.texture=Lt)}function D(){const k=xt[yt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(k){be("WebGLState:",k)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(k){be("WebGLState:",k)}}function ht(){try{o.texSubImage2D(...arguments)}catch(k){be("WebGLState:",k)}}function vt(){try{o.texSubImage3D(...arguments)}catch(k){be("WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){be("WebGLState:",k)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){be("WebGLState:",k)}}function Ct(){try{o.texStorage2D(...arguments)}catch(k){be("WebGLState:",k)}}function kt(){try{o.texStorage3D(...arguments)}catch(k){be("WebGLState:",k)}}function ee(){try{o.texImage2D(...arguments)}catch(k){be("WebGLState:",k)}}function Mt(){try{o.texImage3D(...arguments)}catch(k){be("WebGLState:",k)}}function Et(k){gt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),gt.copy(k))}function Bt(k){At.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),At.copy(k))}function Pt(k,Lt){let bt=p.get(Lt);bt===void 0&&(bt=new WeakMap,p.set(Lt,bt));let zt=bt.get(k);zt===void 0&&(zt=o.getUniformBlockIndex(Lt,k.name),bt.set(k,zt))}function wt(k,Lt){const zt=p.get(Lt).get(k);m.get(Lt)!==zt&&(o.uniformBlockBinding(Lt,zt,k.__bindingPointIndex),m.set(Lt,zt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},yt=null,xt={},_={},S=new WeakMap,E=[],R=null,C=!1,y=null,v=null,P=null,N=null,L=null,B=null,I=null,z=new Le(0,0,0),Z=0,A=!1,w=null,X=null,rt=null,at=null,dt=null,gt.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ct,disable:Dt,bindFramebuffer:Xt,drawBuffers:Ht,useProgram:de,setBlending:he,setMaterial:Ce,setFlipSided:se,setCullFace:Je,setLineWidth:G,setPolygonOffset:je,setScissorTest:Me,activeTexture:Ne,bindTexture:Yt,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:ee,texImage3D:Mt,updateUBOMapping:Pt,uniformBlockBinding:wt,texStorage2D:Ct,texStorage3D:kt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Zt,scissor:Et,viewport:Bt,reset:le}}function z1(o,e,i,r,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ye,x=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,M){return E?new OffscreenCanvas(D,M):Yu("canvas")}function C(D,M,W){let ht=1;const vt=Yt(D);if((vt.width>W||vt.height>W)&&(ht=W/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const lt=Math.floor(ht*vt.width),Zt=Math.floor(ht*vt.height);_===void 0&&(_=R(lt,Zt));const Ct=M?R(lt,Zt):_;return Ct.width=lt,Ct.height=Zt,Ct.getContext("2d").drawImage(D,0,0,lt,Zt),re("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+Zt+")."),Ct}else return"data"in D&&re("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),D;return D}function y(D){return D.generateMipmaps}function v(D){o.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(D,M,W,ht,vt=!1){if(D!==null){if(o[D]!==void 0)return o[D];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let lt=M;if(M===o.RED&&(W===o.FLOAT&&(lt=o.R32F),W===o.HALF_FLOAT&&(lt=o.R16F),W===o.UNSIGNED_BYTE&&(lt=o.R8)),M===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.R8UI),W===o.UNSIGNED_SHORT&&(lt=o.R16UI),W===o.UNSIGNED_INT&&(lt=o.R32UI),W===o.BYTE&&(lt=o.R8I),W===o.SHORT&&(lt=o.R16I),W===o.INT&&(lt=o.R32I)),M===o.RG&&(W===o.FLOAT&&(lt=o.RG32F),W===o.HALF_FLOAT&&(lt=o.RG16F),W===o.UNSIGNED_BYTE&&(lt=o.RG8)),M===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RG8UI),W===o.UNSIGNED_SHORT&&(lt=o.RG16UI),W===o.UNSIGNED_INT&&(lt=o.RG32UI),W===o.BYTE&&(lt=o.RG8I),W===o.SHORT&&(lt=o.RG16I),W===o.INT&&(lt=o.RG32I)),M===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),W===o.UNSIGNED_INT&&(lt=o.RGB32UI),W===o.BYTE&&(lt=o.RGB8I),W===o.SHORT&&(lt=o.RGB16I),W===o.INT&&(lt=o.RGB32I)),M===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),W===o.UNSIGNED_INT&&(lt=o.RGBA32UI),W===o.BYTE&&(lt=o.RGBA8I),W===o.SHORT&&(lt=o.RGBA16I),W===o.INT&&(lt=o.RGBA32I)),M===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),M===o.RGBA){const Zt=vt?Wu:Te.getTransfer(ht);W===o.FLOAT&&(lt=o.RGBA32F),W===o.HALF_FLOAT&&(lt=o.RGBA16F),W===o.UNSIGNED_BYTE&&(lt=Zt===Ie?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function L(D,M){let W;return D?M===null||M===ki||M===Qo?W=o.DEPTH24_STENCIL8:M===Hi?W=o.DEPTH32F_STENCIL8:M===Ko&&(W=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ki||M===Qo?W=o.DEPTH_COMPONENT24:M===Hi?W=o.DEPTH_COMPONENT32F:M===Ko&&(W=o.DEPTH_COMPONENT16),W}function B(D,M){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Cn&&D.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function I(D){const M=D.target;M.removeEventListener("dispose",I),Z(M),M.isVideoTexture&&x.delete(M)}function z(D){const M=D.target;M.removeEventListener("dispose",z),w(M)}function Z(D){const M=r.get(D);if(M.__webglInit===void 0)return;const W=D.source,ht=S.get(W);if(ht){const vt=ht[M.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&A(D),Object.keys(ht).length===0&&S.delete(W)}r.remove(D)}function A(D){const M=r.get(D);o.deleteTexture(M.__webglTexture);const W=D.source,ht=S.get(W);delete ht[M.__cacheKey],d.memory.textures--}function w(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(M.__webglFramebuffer[ht]))for(let vt=0;vt<M.__webglFramebuffer[ht].length;vt++)o.deleteFramebuffer(M.__webglFramebuffer[ht][vt]);else o.deleteFramebuffer(M.__webglFramebuffer[ht]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[ht])}else{if(Array.isArray(M.__webglFramebuffer))for(let ht=0;ht<M.__webglFramebuffer.length;ht++)o.deleteFramebuffer(M.__webglFramebuffer[ht]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ht=0;ht<M.__webglColorRenderbuffer.length;ht++)M.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[ht]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=D.textures;for(let ht=0,vt=W.length;ht<vt;ht++){const lt=r.get(W[ht]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),d.memory.textures--),r.remove(W[ht])}r.remove(D)}let X=0;function rt(){X=0}function at(){const D=X;return D>=l.maxTextures&&re("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),X+=1,D}function dt(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function ut(D,M){const W=r.get(D);if(D.isVideoTexture&&Me(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const ht=D.image;if(ht===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{et(W,D,M);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+M)}function O(D,M){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){et(W,D,M);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+M)}function H(D,M){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){et(W,D,M);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+M)}function it(D,M){const W=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ct(W,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+M)}const yt={[th]:o.REPEAT,[ma]:o.CLAMP_TO_EDGE,[eh]:o.MIRRORED_REPEAT},xt={[Cn]:o.NEAREST,[iy]:o.NEAREST_MIPMAP_NEAREST,[mu]:o.NEAREST_MIPMAP_LINEAR,[Nn]:o.LINEAR,[fd]:o.LINEAR_MIPMAP_NEAREST,[Ur]:o.LINEAR_MIPMAP_LINEAR},U={[oy]:o.NEVER,[dy]:o.ALWAYS,[ly]:o.LESS,[Yh]:o.LEQUAL,[uy]:o.EQUAL,[jh]:o.GEQUAL,[cy]:o.GREATER,[fy]:o.NOTEQUAL};function nt(D,M){if(M.type===Hi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===fd||M.magFilter===mu||M.magFilter===Ur||M.minFilter===Nn||M.minFilter===fd||M.minFilter===mu||M.minFilter===Ur)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,yt[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,yt[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,yt[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,xt[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==mu&&M.minFilter!==Ur||M.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function gt(D,M){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",I));const ht=M.source;let vt=S.get(ht);vt===void 0&&(vt={},S.set(ht,vt));const lt=dt(M);if(lt!==D.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,W=!0),vt[lt].usedTimes++;const Zt=vt[D.__cacheKey];Zt!==void 0&&(vt[D.__cacheKey].usedTimes--,Zt.usedTimes===0&&A(M)),D.__cacheKey=lt,D.__webglTexture=vt[lt].texture}return W}function At(D,M,W){return Math.floor(Math.floor(D/W)/M)}function It(D,M,W,ht){const lt=D.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,W,ht,M.data);else{lt.sort((Mt,Et)=>Mt.start-Et.start);let Zt=0;for(let Mt=1;Mt<lt.length;Mt++){const Et=lt[Zt],Bt=lt[Mt],Pt=Et.start+Et.count,wt=At(Bt.start,M.width,4),le=At(Et.start,M.width,4);Bt.start<=Pt+1&&wt===le&&At(Bt.start+Bt.count-1,M.width,4)===wt?Et.count=Math.max(Et.count,Bt.start+Bt.count-Et.start):(++Zt,lt[Zt]=Bt)}lt.length=Zt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Mt=0,Et=lt.length;Mt<Et;Mt++){const Bt=lt[Mt],Pt=Math.floor(Bt.start/4),wt=Math.ceil(Bt.count/4),le=Pt%M.width,k=Math.floor(Pt/M.width),Lt=wt,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,le,k,Lt,bt,W,ht,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function et(D,M,W){let ht=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ht=o.TEXTURE_3D);const vt=gt(D,M),lt=M.source;i.bindTexture(ht,D.__webglTexture,o.TEXTURE0+W);const Zt=r.get(lt);if(lt.version!==Zt.__version||vt===!0){i.activeTexture(o.TEXTURE0+W);const Ct=Te.getPrimaries(Te.workingColorSpace),kt=M.colorSpace===tr?null:Te.getPrimaries(M.colorSpace),ee=M.colorSpace===tr||Ct===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Mt=C(M.image,!1,l.maxTextureSize);Mt=Ne(M,Mt);const Et=c.convert(M.format,M.colorSpace),Bt=c.convert(M.type);let Pt=N(M.internalFormat,Et,Bt,M.colorSpace,M.isVideoTexture);nt(ht,M);let wt;const le=M.mipmaps,k=M.isVideoTexture!==!0,Lt=Zt.__version===void 0||vt===!0,bt=lt.dataReady,zt=B(M,Mt);if(M.isDepthTexture)Pt=L(M.format===Lr,M.type),Lt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Pt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Pt,Mt.width,Mt.height,0,Et,Bt,null));else if(M.isDataTexture)if(le.length>0){k&&Lt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)wt=le[St],k?bt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,wt.width,wt.height,Et,Bt,wt.data):i.texImage2D(o.TEXTURE_2D,St,Pt,wt.width,wt.height,0,Et,Bt,wt.data);M.generateMipmaps=!1}else k?(Lt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,Mt.width,Mt.height),bt&&It(M,Mt,Et,Bt)):i.texImage2D(o.TEXTURE_2D,0,Pt,Mt.width,Mt.height,0,Et,Bt,Mt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){k&&Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,le[0].width,le[0].height,Mt.depth);for(let St=0,_t=le.length;St<_t;St++)if(wt=le[St],M.format!==Ci)if(Et!==null)if(k){if(bt)if(M.layerUpdates.size>0){const Rt=c_(wt.width,wt.height,M.format,M.type);for(const ne of M.layerUpdates){const Pe=wt.data.subarray(ne*Rt/wt.data.BYTES_PER_ELEMENT,(ne+1)*Rt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,ne,wt.width,wt.height,1,Et,Pe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,wt.width,wt.height,Mt.depth,Et,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,St,Pt,wt.width,wt.height,Mt.depth,0,wt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,wt.width,wt.height,Mt.depth,Et,Bt,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,St,Pt,wt.width,wt.height,Mt.depth,0,Et,Bt,wt.data)}else{k&&Lt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)wt=le[St],M.format!==Ci?Et!==null?k?bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,St,0,0,wt.width,wt.height,Et,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,St,Pt,wt.width,wt.height,0,wt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?bt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,wt.width,wt.height,Et,Bt,wt.data):i.texImage2D(o.TEXTURE_2D,St,Pt,wt.width,wt.height,0,Et,Bt,wt.data)}else if(M.isDataArrayTexture)if(k){if(Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,Mt.width,Mt.height,Mt.depth),bt)if(M.layerUpdates.size>0){const St=c_(Mt.width,Mt.height,M.format,M.type);for(const _t of M.layerUpdates){const Rt=Mt.data.subarray(_t*St/Mt.data.BYTES_PER_ELEMENT,(_t+1)*St/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Et,Bt,Rt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Bt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,Mt.width,Mt.height,Mt.depth,0,Et,Bt,Mt.data);else if(M.isData3DTexture)k?(Lt&&i.texStorage3D(o.TEXTURE_3D,zt,Pt,Mt.width,Mt.height,Mt.depth),bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Bt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,Mt.width,Mt.height,Mt.depth,0,Et,Bt,Mt.data);else if(M.isFramebufferTexture){if(Lt)if(k)i.texStorage2D(o.TEXTURE_2D,zt,Pt,Mt.width,Mt.height);else{let St=Mt.width,_t=Mt.height;for(let Rt=0;Rt<zt;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,Pt,St,_t,0,Et,Bt,null),St>>=1,_t>>=1}}else if(le.length>0){if(k&&Lt){const St=Yt(le[0]);i.texStorage2D(o.TEXTURE_2D,zt,Pt,St.width,St.height)}for(let St=0,_t=le.length;St<_t;St++)wt=le[St],k?bt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Et,Bt,wt):i.texImage2D(o.TEXTURE_2D,St,Pt,Et,Bt,wt);M.generateMipmaps=!1}else if(k){if(Lt){const St=Yt(Mt);i.texStorage2D(o.TEXTURE_2D,zt,Pt,St.width,St.height)}bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,Bt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Pt,Et,Bt,Mt);y(M)&&v(ht),Zt.__version=lt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ct(D,M,W){if(M.image.length!==6)return;const ht=gt(D,M),vt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+W);const lt=r.get(vt);if(vt.version!==lt.__version||ht===!0){i.activeTexture(o.TEXTURE0+W);const Zt=Te.getPrimaries(Te.workingColorSpace),Ct=M.colorSpace===tr?null:Te.getPrimaries(M.colorSpace),kt=M.colorSpace===tr||Zt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const ee=M.isCompressedTexture||M.image[0].isCompressedTexture,Mt=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!ee&&!Mt?Et[_t]=C(M.image[_t],!0,l.maxCubemapSize):Et[_t]=Mt?M.image[_t].image:M.image[_t],Et[_t]=Ne(M,Et[_t]);const Bt=Et[0],Pt=c.convert(M.format,M.colorSpace),wt=c.convert(M.type),le=N(M.internalFormat,Pt,wt,M.colorSpace),k=M.isVideoTexture!==!0,Lt=lt.__version===void 0||ht===!0,bt=vt.dataReady;let zt=B(M,Bt);nt(o.TEXTURE_CUBE_MAP,M);let St;if(ee){k&&Lt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,le,Bt.width,Bt.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let Rt=0;Rt<St.length;Rt++){const ne=St[Rt];M.format!==Ci?Pt!==null?k?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,0,0,ne.width,ne.height,Pt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,le,ne.width,ne.height,0,ne.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,0,0,ne.width,ne.height,Pt,wt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,le,ne.width,ne.height,0,Pt,wt,ne.data)}}}else{if(St=M.mipmaps,k&&Lt){St.length>0&&zt++;const _t=Yt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Pt,wt,Et[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Et[_t].width,Et[_t].height,0,Pt,wt,Et[_t].data);for(let Rt=0;Rt<St.length;Rt++){const Pe=St[Rt].image[_t].image;k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,0,0,Pe.width,Pe.height,Pt,wt,Pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,le,Pe.width,Pe.height,0,Pt,wt,Pe.data)}}else{k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt,wt,Et[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Pt,wt,Et[_t]);for(let Rt=0;Rt<St.length;Rt++){const ne=St[Rt];k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,0,0,Pt,wt,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,le,Pt,wt,ne.image[_t])}}}y(M)&&v(o.TEXTURE_CUBE_MAP),lt.__version=vt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Dt(D,M,W,ht,vt,lt){const Zt=c.convert(W.format,W.colorSpace),Ct=c.convert(W.type),kt=N(W.internalFormat,Zt,Ct,W.colorSpace),ee=r.get(M),Mt=r.get(W);if(Mt.__renderTarget=M,!ee.__hasExternalTextures){const Et=Math.max(1,M.width>>lt),Bt=Math.max(1,M.height>>lt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,lt,kt,Et,Bt,M.depth,0,Zt,Ct,null):i.texImage2D(vt,lt,kt,Et,Bt,0,Zt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),je(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,vt,Mt.__webglTexture,0,G(M)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,vt,Mt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(D,M,W){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const ht=M.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,lt=L(M.stencilBuffer,vt),Zt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;je(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),lt,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),lt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,lt,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,D)}else{const ht=M.textures;for(let vt=0;vt<ht.length;vt++){const lt=ht[vt],Zt=c.convert(lt.format,lt.colorSpace),Ct=c.convert(lt.type),kt=N(lt.internalFormat,Zt,Ct,lt.colorSpace);je(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),kt,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),kt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,kt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(D,M,W){const ht=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(M.depthTexture);if(vt.__renderTarget=M,(!vt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ht){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,M.depthTexture.addEventListener("dispose",I)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),nt(o.TEXTURE_CUBE_MAP,M.depthTexture);const ee=c.convert(M.depthTexture.format),Mt=c.convert(M.depthTexture.type);let Et;M.depthTexture.format===xa?Et=o.DEPTH_COMPONENT24:M.depthTexture.format===Lr&&(Et=o.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Et,M.width,M.height,0,ee,Mt,null)}}else ut(M.depthTexture,0);const lt=vt.__webglTexture,Zt=G(M),Ct=ht?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,kt=M.depthTexture.format===Lr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===xa)je(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,kt,Ct,lt,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,kt,Ct,lt,0);else if(M.depthTexture.format===Lr)je(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,kt,Ct,lt,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,kt,Ct,lt,0);else throw new Error("Unknown depthTexture format")}function de(D){const M=r.get(D),W=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const ht=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ht){const vt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),M.__depthDisposeCallback=vt}M.__boundDepthTexture=ht}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let ht=0;ht<6;ht++)Ht(M.__webglFramebuffer[ht],D,ht);else{const ht=D.texture.mipmaps;ht&&ht.length>0?Ht(M.__webglFramebuffer[0],D,0):Ht(M.__webglFramebuffer,D,0)}else if(W){M.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[ht]),M.__webglDepthbuffer[ht]===void 0)M.__webglDepthbuffer[ht]=o.createRenderbuffer(),Xt(M.__webglDepthbuffer[ht],D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}else{const ht=D.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Xt(M.__webglDepthbuffer,D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qe(D,M,W){const ht=r.get(D);M!==void 0&&Dt(ht.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&de(D)}function ge(D){const M=D.texture,W=r.get(D),ht=r.get(M);D.addEventListener("dispose",z);const vt=D.textures,lt=D.isWebGLCubeRenderTarget===!0,Zt=vt.length>1;if(Zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=M.version,d.memory.textures++),lt){W.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Ct]=[];for(let kt=0;kt<M.mipmaps.length;kt++)W.__webglFramebuffer[Ct][kt]=o.createFramebuffer()}else W.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ct=0;Ct<M.mipmaps.length;Ct++)W.__webglFramebuffer[Ct]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Ct=0,kt=vt.length;Ct<kt;Ct++){const ee=r.get(vt[Ct]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&je(D)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ct=0;Ct<vt.length;Ct++){const kt=vt[Ct];W.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Ct]);const ee=c.convert(kt.format,kt.colorSpace),Mt=c.convert(kt.type),Et=N(kt.internalFormat,ee,Mt,kt.colorSpace,D.isXRRenderTarget===!0),Bt=G(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,Et,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,W.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Xt(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),nt(o.TEXTURE_CUBE_MAP,M);for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let kt=0;kt<M.mipmaps.length;kt++)Dt(W.__webglFramebuffer[Ct][kt],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,kt);else Dt(W.__webglFramebuffer[Ct],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(M)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Ct=0,kt=vt.length;Ct<kt;Ct++){const ee=vt[Ct],Mt=r.get(ee);let Et=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Et=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,Mt.__webglTexture),nt(Et,ee),Dt(W.__webglFramebuffer,D,ee,o.COLOR_ATTACHMENT0+Ct,Et,0),y(ee)&&v(Et)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ct=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,ht.__webglTexture),nt(Ct,M),M.mipmaps&&M.mipmaps.length>0)for(let kt=0;kt<M.mipmaps.length;kt++)Dt(W.__webglFramebuffer[kt],D,M,o.COLOR_ATTACHMENT0,Ct,kt);else Dt(W.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,Ct,0);y(M)&&v(Ct),i.unbindTexture()}D.depthBuffer&&de(D)}function he(D){const M=D.textures;for(let W=0,ht=M.length;W<ht;W++){const vt=M[W];if(y(vt)){const lt=P(D),Zt=r.get(vt).__webglTexture;i.bindTexture(lt,Zt),v(lt),i.unbindTexture()}}}const Ce=[],se=[];function Je(D){if(D.samples>0){if(je(D)===!1){const M=D.textures,W=D.width,ht=D.height;let vt=o.COLOR_BUFFER_BIT;const lt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=r.get(D),Ct=M.length>1;if(Ct)for(let ee=0;ee<M.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const kt=D.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<M.length;ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Mt=r.get(M[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,W,ht,0,0,W,ht,vt,o.NEAREST),m===!0&&(Ce.length=0,se.length=0,Ce.push(o.COLOR_ATTACHMENT0+ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ce.push(lt),se.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ce))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let ee=0;ee<M.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Mt=r.get(M[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function G(D){return Math.min(l.maxSamples,D.samples)}function je(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Me(D){const M=d.render.frame;x.get(D)!==M&&(x.set(D,M),D.update())}function Ne(D,M){const W=D.colorSpace,ht=D.format,vt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Is&&W!==tr&&(Te.getTransfer(W)===Ie?(ht!==Ci||vt!==mi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",W)),M}function Yt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=rt,this.setTexture2D=ut,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=it,this.rebindTextures=Qe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function B1(o,e){function i(r,l=tr){let c;const d=Te.getTransfer(l);if(r===mi)return o.UNSIGNED_BYTE;if(r===Vh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Xh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Y_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===j_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===W_)return o.BYTE;if(r===q_)return o.SHORT;if(r===Ko)return o.UNSIGNED_SHORT;if(r===Gh)return o.INT;if(r===ki)return o.UNSIGNED_INT;if(r===Hi)return o.FLOAT;if(r===va)return o.HALF_FLOAT;if(r===Z_)return o.ALPHA;if(r===K_)return o.RGB;if(r===Ci)return o.RGBA;if(r===xa)return o.DEPTH_COMPONENT;if(r===Lr)return o.DEPTH_STENCIL;if(r===Q_)return o.RED;if(r===kh)return o.RED_INTEGER;if(r===Fs)return o.RG;if(r===Wh)return o.RG_INTEGER;if(r===qh)return o.RGBA_INTEGER;if(r===Hu||r===Gu||r===Vu||r===Xu)if(d===Ie)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Hu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Hu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nh||r===ih||r===ah||r===rh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===nh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ih)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ah)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sh||r===oh||r===lh||r===uh||r===ch||r===fh||r===dh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===sh||r===oh)return d===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===lh)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===uh)return c.COMPRESSED_R11_EAC;if(r===ch)return c.COMPRESSED_SIGNED_R11_EAC;if(r===fh)return c.COMPRESSED_RG11_EAC;if(r===dh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===hh||r===ph||r===mh||r===gh||r===_h||r===vh||r===xh||r===Sh||r===yh||r===Mh||r===Eh||r===bh||r===Th||r===Ah)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===hh)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ph)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mh)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gh)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_h)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vh)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xh)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sh)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yh)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mh)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bh)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Th)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ah)return d===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rh||r===Ch||r===wh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Rh)return d===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ch)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dh||r===Uh||r===Lh||r===Nh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Dh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Uh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const F1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new fv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Di({vertexShader:F1,fragmentShader:I1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vi(new Ju(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G1 extends Gs{constructor(e,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,x=null,_=null,S=null,E=null,R=null;const C=typeof XRWebGLBinding<"u",y=new H1,v={},P=i.getContextAttributes();let N=null,L=null;const B=[],I=[],z=new ye;let Z=null;const A=new pi;A.viewport=new an;const w=new pi;w.viewport=new an;const X=[A,w],rt=new Qy;let at=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ct=B[et];return ct===void 0&&(ct=new Od,B[et]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(et){let ct=B[et];return ct===void 0&&(ct=new Od,B[et]=ct),ct.getGripSpace()},this.getHand=function(et){let ct=B[et];return ct===void 0&&(ct=new Od,B[et]=ct),ct.getHandSpace()};function ut(et){const ct=I.indexOf(et.inputSource);if(ct===-1)return;const Dt=B[ct];Dt!==void 0&&(Dt.update(et.inputSource,et.frame,p||d),Dt.dispatchEvent({type:et.type,data:et.inputSource}))}function O(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let et=0;et<B.length;et++){const ct=I[et];ct!==null&&(I[et]=null,B[et].disconnect(ct))}at=null,dt=null,y.reset();for(const et in v)delete v[et];e.setRenderTarget(N),E=null,S=null,_=null,l=null,L=null,It.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,r.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,r.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),P.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Xt=null,Ht=null;P.depth&&(Ht=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=P.stencil?Lr:xa,Xt=P.stencil?Qo:ki);const de={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(de),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new Xi(S.textureWidth,S.textureHeight,{format:Ci,type:mi,depthTexture:new $o(S.textureWidth,S.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Dt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new Xi(E.framebufferWidth,E.framebufferHeight,{format:Ci,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),It.setContext(l),It.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(et){for(let ct=0;ct<et.removed.length;ct++){const Dt=et.removed[ct],Xt=I.indexOf(Dt);Xt>=0&&(I[Xt]=null,B[Xt].disconnect(Dt))}for(let ct=0;ct<et.added.length;ct++){const Dt=et.added[ct];let Xt=I.indexOf(Dt);if(Xt===-1){for(let de=0;de<B.length;de++)if(de>=I.length){I.push(Dt),Xt=de;break}else if(I[de]===null){I[de]=Dt,Xt=de;break}if(Xt===-1)break}const Ht=B[Xt];Ht&&Ht.connect(Dt)}}const it=new tt,yt=new tt;function xt(et,ct,Dt){it.setFromMatrixPosition(ct.matrixWorld),yt.setFromMatrixPosition(Dt.matrixWorld);const Xt=it.distanceTo(yt),Ht=ct.projectionMatrix.elements,de=Dt.projectionMatrix.elements,Qe=Ht[14]/(Ht[10]-1),ge=Ht[14]/(Ht[10]+1),he=(Ht[9]+1)/Ht[5],Ce=(Ht[9]-1)/Ht[5],se=(Ht[8]-1)/Ht[0],Je=(de[8]+1)/de[0],G=Qe*se,je=Qe*Je,Me=Xt/(-se+Je),Ne=Me*-se;if(ct.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ne),et.translateZ(Me),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ht[10]===-1)et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Yt=Qe+Me,D=ge+Me,M=G-Ne,W=je+(Xt-Ne),ht=he*ge/D*Yt,vt=Ce*ge/D*Yt;et.projectionMatrix.makePerspective(M,W,ht,vt,Yt,D),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function U(et,ct){ct===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ct.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let ct=et.near,Dt=et.far;y.texture!==null&&(y.depthNear>0&&(ct=y.depthNear),y.depthFar>0&&(Dt=y.depthFar)),rt.near=w.near=A.near=ct,rt.far=w.far=A.far=Dt,(at!==rt.near||dt!==rt.far)&&(l.updateRenderState({depthNear:rt.near,depthFar:rt.far}),at=rt.near,dt=rt.far),rt.layers.mask=et.layers.mask|6,A.layers.mask=rt.layers.mask&3,w.layers.mask=rt.layers.mask&5;const Xt=et.parent,Ht=rt.cameras;U(rt,Xt);for(let de=0;de<Ht.length;de++)U(Ht[de],Xt);Ht.length===2?xt(rt,A,w):rt.projectionMatrix.copy(A.projectionMatrix),nt(et,rt,Xt)};function nt(et,ct,Dt){Dt===null?et.matrix.copy(ct.matrixWorld):(et.matrix.copy(Dt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ct.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ph*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(et){m=et,S!==null&&(S.fixedFoveation=et),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(rt)},this.getCameraTexture=function(et){return v[et]};let gt=null;function At(et,ct){if(x=ct.getViewerPose(p||d),R=ct,x!==null){const Dt=x.views;E!==null&&(e.setRenderTargetFramebuffer(L,E.framebuffer),e.setRenderTarget(L));let Xt=!1;Dt.length!==rt.cameras.length&&(rt.cameras.length=0,Xt=!0);for(let ge=0;ge<Dt.length;ge++){const he=Dt[ge];let Ce=null;if(E!==null)Ce=E.getViewport(he);else{const Je=_.getViewSubImage(S,he);Ce=Je.viewport,ge===0&&(e.setRenderTargetTextures(L,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(L))}let se=X[ge];se===void 0&&(se=new pi,se.layers.enable(ge),se.viewport=new an,X[ge]=se),se.matrix.fromArray(he.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(he.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ge===0&&(rt.matrix.copy(se.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),Xt===!0&&rt.cameras.push(se)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ge=_.getDepthInformation(Dt[0]);ge&&ge.isValid&&ge.texture&&y.init(ge,l.renderState)}if(Ht&&Ht.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ge=0;ge<Dt.length;ge++){const he=Dt[ge].camera;if(he){let Ce=v[he];Ce||(Ce=new fv,v[he]=Ce);const se=_.getCameraImage(he);Ce.sourceTexture=se}}}}for(let Dt=0;Dt<B.length;Dt++){const Xt=I[Dt],Ht=B[Dt];Xt!==null&&Ht!==void 0&&Ht.update(Xt,ct,p||d)}gt&&gt(et,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),R=null}const It=new hv;It.setAnimationLoop(At),this.setAnimationLoop=function(et){gt=et},this.dispose=function(){}}}const Rr=new Sa,V1=new rn;function X1(o,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,av(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,P,N,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),x(y,v)):v.isMeshStandardMaterial?(c(y,v),S(y,v),v.isMeshPhysicalMaterial&&E(y,v,L)):v.isMeshMatcapMaterial?(c(y,v),R(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),C(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,P,N):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Wn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Wn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const P=e.get(v),N=P.envMap,L=P.envMapRotation;N&&(y.envMap.value=N,Rr.copy(L),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),y.envMapRotation.value.setFromMatrix4(V1.makeRotationFromEuler(Rr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,P,N){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=N*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function E(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Wn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const P=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function k1(o,e,i,r){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,N){const L=N.program;r.uniformBlockBinding(P,L)}function p(P,N){let L=l[P.id];L===void 0&&(R(P),L=x(P),l[P.id]=L,P.addEventListener("dispose",y));const B=N.program;r.updateUBOMapping(P,B);const I=e.render.frame;c[P.id]!==I&&(S(P),c[P.id]=I)}function x(P){const N=_();P.__bindingPointIndex=N;const L=o.createBuffer(),B=P.__size,I=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,B,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,L),L}function _(){for(let P=0;P<h;P++)if(d.indexOf(P)===-1)return d.push(P),P;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const N=l[P.id],L=P.uniforms,B=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let I=0,z=L.length;I<z;I++){const Z=Array.isArray(L[I])?L[I]:[L[I]];for(let A=0,w=Z.length;A<w;A++){const X=Z[A];if(E(X,I,A,B)===!0){const rt=X.__offset,at=Array.isArray(X.value)?X.value:[X.value];let dt=0;for(let ut=0;ut<at.length;ut++){const O=at[ut],H=C(O);typeof O=="number"||typeof O=="boolean"?(X.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,rt+dt,X.__data)):O.isMatrix3?(X.__data[0]=O.elements[0],X.__data[1]=O.elements[1],X.__data[2]=O.elements[2],X.__data[3]=0,X.__data[4]=O.elements[3],X.__data[5]=O.elements[4],X.__data[6]=O.elements[5],X.__data[7]=0,X.__data[8]=O.elements[6],X.__data[9]=O.elements[7],X.__data[10]=O.elements[8],X.__data[11]=0):(O.toArray(X.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(P,N,L,B){const I=P.value,z=N+"_"+L;if(B[z]===void 0)return typeof I=="number"||typeof I=="boolean"?B[z]=I:B[z]=I.clone(),!0;{const Z=B[z];if(typeof I=="number"||typeof I=="boolean"){if(Z!==I)return B[z]=I,!0}else if(Z.equals(I)===!1)return Z.copy(I),!0}return!1}function R(P){const N=P.uniforms;let L=0;const B=16;for(let z=0,Z=N.length;z<Z;z++){const A=Array.isArray(N[z])?N[z]:[N[z]];for(let w=0,X=A.length;w<X;w++){const rt=A[w],at=Array.isArray(rt.value)?rt.value:[rt.value];for(let dt=0,ut=at.length;dt<ut;dt++){const O=at[dt],H=C(O),it=L%B,yt=it%H.boundary,xt=it+yt;L+=yt,xt!==0&&B-xt<H.storage&&(L+=B-xt),rt.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=L,L+=H.storage}}}const I=L%B;return I>0&&(L+=B-I),P.__size=L,P.__cache={},this}function C(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",P),N}function y(P){const N=P.target;N.removeEventListener("dispose",y);const L=d.indexOf(N.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},c={}}return{bind:m,update:p,dispose:v}}const W1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function q1(){return Bi===null&&(Bi=new Xy(W1,16,16,Fs,va),Bi.name="DFG_LUT",Bi.minFilter=Nn,Bi.magFilter=Nn,Bi.wrapS=ma,Bi.wrapT=ma,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class Y1{constructor(e={}){const{canvas:i=hy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:E=mi}=e;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=d;const C=E,y=new Set([qh,Wh,kh]),v=new Set([mi,ki,Ko,Qo,Vh,Xh]),P=new Uint32Array(4),N=new Int32Array(4);let L=null,B=null;const I=[],z=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=hi;let X=0,rt=0,at=null,dt=-1,ut=null;const O=new an,H=new an;let it=null;const yt=new Le(0);let xt=0,U=i.width,nt=i.height,gt=1,At=null,It=null;const et=new an(0,0,U,nt),ct=new an(0,0,U,nt);let Dt=!1;const Xt=new cv;let Ht=!1,de=!1;const Qe=new rn,ge=new tt,he=new an,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Je(){return at===null?gt:1}let G=r;function je(T,q){return i.getContext(T,q)}try{const T={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hh}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",Pe,!1),i.addEventListener("webglcontextcreationerror",Ee,!1),G===null){const q="webgl2";if(G=je(q,T),G===null)throw je(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw be("WebGLRenderer: "+T.message),T}let Me,Ne,Yt,D,M,W,ht,vt,lt,Zt,Ct,kt,ee,Mt,Et,Bt,Pt,wt,le,k,Lt,bt,zt,St;function _t(){Me=new qb(G),Me.init(),bt=new B1(G,Me),Ne=new Bb(G,Me,e,bt),Yt=new P1(G,Me),Ne.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),D=new Zb(G),M=new S1,W=new z1(G,Me,Yt,M,Ne,bt,D),ht=new Ib(A),vt=new Wb(A),lt=new $y(G),zt=new Pb(G,lt),Zt=new Yb(G,lt,D,zt),Ct=new Qb(G,Zt,lt,D),le=new Kb(G,Ne,W),Bt=new Fb(M),kt=new x1(A,ht,vt,Me,Ne,zt,Bt),ee=new X1(A,M),Mt=new M1,Et=new C1(Me),wt=new Ob(A,ht,vt,Yt,Ct,R,m),Pt=new N1(A,Ct,Ne),St=new k1(G,D,Ne,Yt),k=new zb(G,Me,D),Lt=new jb(G,Me,D),D.programs=kt.programs,A.capabilities=Ne,A.extensions=Me,A.properties=M,A.renderLists=Mt,A.shadowMap=Pt,A.state=Yt,A.info=D}_t(),C!==mi&&(Z=new $b(C,i.width,i.height,l,c));const Rt=new G1(A,G);this.xr=Rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(T){T!==void 0&&(gt=T,this.setSize(U,nt,!1))},this.getSize=function(T){return T.set(U,nt)},this.setSize=function(T,q,st=!0){if(Rt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,nt=q,i.width=Math.floor(T*gt),i.height=Math.floor(q*gt),st===!0&&(i.style.width=T+"px",i.style.height=q+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(U*gt,nt*gt).floor()},this.setDrawingBufferSize=function(T,q,st){U=T,nt=q,gt=st,i.width=Math.floor(T*st),i.height=Math.floor(q*st),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(C===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(O)},this.getViewport=function(T){return T.copy(et)},this.setViewport=function(T,q,st,J){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,q,st,J),Yt.viewport(O.copy(et).multiplyScalar(gt).round())},this.getScissor=function(T){return T.copy(ct)},this.setScissor=function(T,q,st,J){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,q,st,J),Yt.scissor(H.copy(ct).multiplyScalar(gt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(T){Yt.setScissorTest(Dt=T)},this.setOpaqueSort=function(T){At=T},this.setTransparentSort=function(T){It=T},this.getClearColor=function(T){return T.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,st=!0){let J=0;if(T){let j=!1;if(at!==null){const Ut=at.texture.format;j=y.has(Ut)}if(j){const Ut=at.texture.type,Ft=v.has(Ut),Nt=wt.getClearColor(),Gt=wt.getClearAlpha(),Wt=Nt.r,Jt=Nt.g,qt=Nt.b;Ft?(P[0]=Wt,P[1]=Jt,P[2]=qt,P[3]=Gt,G.clearBufferuiv(G.COLOR,0,P)):(N[0]=Wt,N[1]=Jt,N[2]=qt,N[3]=Gt,G.clearBufferiv(G.COLOR,0,N))}else J|=G.COLOR_BUFFER_BIT}q&&(J|=G.DEPTH_BUFFER_BIT),st&&(J|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",Pe,!1),i.removeEventListener("webglcontextcreationerror",Ee,!1),wt.dispose(),Mt.dispose(),Et.dispose(),M.dispose(),ht.dispose(),vt.dispose(),Ct.dispose(),zt.dispose(),St.dispose(),kt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Pr),Rt.removeEventListener("sessionend",Ws),Li.stop()};function ne(T){T.preventDefault(),ju("WebGLRenderer: Context Lost."),w=!0}function Pe(){ju("WebGLRenderer: Context Restored."),w=!1;const T=D.autoReset,q=Pt.enabled,st=Pt.autoUpdate,J=Pt.needsUpdate,j=Pt.type;_t(),D.autoReset=T,Pt.enabled=q,Pt.autoUpdate=st,Pt.needsUpdate=J,Pt.type=j}function Ee(T){be("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function wn(T){const q=T.target;q.removeEventListener("dispose",wn),xi(q)}function xi(T){al(T),M.remove(T)}function al(T){const q=M.get(T).programs;q!==void 0&&(q.forEach(function(st){kt.releaseProgram(st)}),T.isShaderMaterial&&kt.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,st,J,j,Ut){q===null&&(q=Ce);const Ft=j.isMesh&&j.matrixWorld.determinant()<0,Nt=ar(T,q,st,J,j);Yt.setMaterial(J,Ft);let Gt=st.index,Wt=1;if(J.wireframe===!0){if(Gt=Zt.getWireframeAttribute(st),Gt===void 0)return;Wt=2}const Jt=st.drawRange,qt=st.attributes.position;let $t=Jt.start*Wt,we=(Jt.start+Jt.count)*Wt;Ut!==null&&($t=Math.max($t,Ut.start*Wt),we=Math.min(we,(Ut.start+Ut.count)*Wt)),Gt!==null?($t=Math.max($t,0),we=Math.min(we,Gt.count)):qt!=null&&($t=Math.max($t,0),we=Math.min(we,qt.count));const Ze=we-$t;if(Ze<0||Ze===1/0)return;zt.setup(j,J,Nt,st,Gt);let We,Oe=k;if(Gt!==null&&(We=lt.get(Gt),Oe=Lt,Oe.setIndex(We)),j.isMesh)J.wireframe===!0?(Yt.setLineWidth(J.wireframeLinewidth*Je()),Oe.setMode(G.LINES)):Oe.setMode(G.TRIANGLES);else if(j.isLine){let Kt=J.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*Je()),j.isLineSegments?Oe.setMode(G.LINES):j.isLineLoop?Oe.setMode(G.LINE_LOOP):Oe.setMode(G.LINE_STRIP)}else j.isPoints?Oe.setMode(G.POINTS):j.isSprite&&Oe.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,De=j._multiDrawCounts,ie=j._multiDrawCount,xn=Gt?lt.get(Gt).bytesPerElement:1,Wi=M.get(J).currentProgram.getUniforms();for(let Sn=0;Sn<ie;Sn++)Wi.setValue(G,"_gl_DrawID",Sn),Oe.render(Kt[Sn]/xn,De[Sn])}else if(j.isInstancedMesh)Oe.renderInstances($t,Ze,j.count);else if(st.isInstancedBufferGeometry){const Kt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,De=Math.min(st.instanceCount,Kt);Oe.renderInstances($t,Ze,De)}else Oe.render($t,Ze)};function Xs(T,q,st){T.transparent===!0&&T.side===pa&&T.forceSinglePass===!1?(T.side=Wn,T.needsUpdate=!0,Br(T,q,st),T.side=ir,T.needsUpdate=!0,Br(T,q,st),T.side=pa):Br(T,q,st)}this.compile=function(T,q,st=null){st===null&&(st=T),B=Et.get(st),B.init(q),z.push(B),st.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(B.pushLight(j),j.castShadow&&B.pushShadow(j))}),T!==st&&T.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(B.pushLight(j),j.castShadow&&B.pushShadow(j))}),B.setupLights();const J=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ut=j.material;if(Ut)if(Array.isArray(Ut))for(let Ft=0;Ft<Ut.length;Ft++){const Nt=Ut[Ft];Xs(Nt,st,j),J.add(Nt)}else Xs(Ut,st,j),J.add(Ut)}),B=z.pop(),J},this.compileAsync=function(T,q,st=null){const J=this.compile(T,q,st);return new Promise(j=>{function Ut(){if(J.forEach(function(Ft){M.get(Ft).currentProgram.isReady()&&J.delete(Ft)}),J.size===0){j(T);return}setTimeout(Ut,10)}Me.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Or=null;function ks(T){Or&&Or(T)}function Pr(){Li.stop()}function Ws(){Li.start()}const Li=new hv;Li.setAnimationLoop(ks),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(T){Or=T,Rt.setAnimationLoop(T),T===null?Li.stop():Li.start()},Rt.addEventListener("sessionstart",Pr),Rt.addEventListener("sessionend",Ws),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const st=Rt.enabled===!0&&Rt.isPresenting===!0,J=Z!==null&&(at===null||st)&&Z.begin(A,at);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(q),q=Rt.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,q,at),B=Et.get(T,z.length),B.init(q),z.push(B),Qe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Xt.setFromProjectionMatrix(Qe,Gi,q.reversedDepth),de=this.localClippingEnabled,Ht=Bt.init(this.clippingPlanes,de),L=Mt.get(T,I.length),L.init(),I.push(L),Rt.enabled===!0&&Rt.isPresenting===!0){const Ft=A.xr.getDepthSensingMesh();Ft!==null&&ni(Ft,q,-1/0,A.sortObjects)}ni(T,q,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(At,It),se=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,se&&wt.addToRenderList(L,T),this.info.render.frame++,Ht===!0&&Bt.beginShadows();const j=B.state.shadowsArray;if(Pt.render(j,T,q),Ht===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&Z.hasRenderPass())===!1){const Ft=L.opaque,Nt=L.transmissive;if(B.setupLights(),q.isArrayCamera){const Gt=q.cameras;if(Nt.length>0)for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];vn(Ft,Nt,T,qt)}se&&wt.render(T);for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];sn(L,T,qt,qt.viewport)}}else Nt.length>0&&vn(Ft,Nt,T,q),se&&wt.render(T),sn(L,T,q)}at!==null&&rt===0&&(W.updateMultisampleRenderTarget(at),W.updateRenderTargetMipmap(at)),J&&Z.end(A),T.isScene===!0&&T.onAfterRender(A,T,q),zt.resetDefaultState(),dt=-1,ut=null,z.pop(),z.length>0?(B=z[z.length-1],Ht===!0&&Bt.setGlobalState(A.clippingPlanes,B.state.camera)):B=null,I.pop(),I.length>0?L=I[I.length-1]:L=null};function ni(T,q,st,J){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)st=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)B.pushLight(T),T.castShadow&&B.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Xt.intersectsSprite(T)){J&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Qe);const Ft=Ct.update(T),Nt=T.material;Nt.visible&&L.push(T,Ft,Nt,st,he.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Xt.intersectsObject(T))){const Ft=Ct.update(T),Nt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),he.copy(T.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),he.copy(Ft.boundingSphere.center)),he.applyMatrix4(T.matrixWorld).applyMatrix4(Qe)),Array.isArray(Nt)){const Gt=Ft.groups;for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt],$t=Nt[qt.materialIndex];$t&&$t.visible&&L.push(T,Ft,$t,st,he.z,qt)}}else Nt.visible&&L.push(T,Ft,Nt,st,he.z,null)}}const Ut=T.children;for(let Ft=0,Nt=Ut.length;Ft<Nt;Ft++)ni(Ut[Ft],q,st,J)}function sn(T,q,st,J){const{opaque:j,transmissive:Ut,transparent:Ft}=T;B.setupLightsView(st),Ht===!0&&Bt.setGlobalState(A.clippingPlanes,st),J&&Yt.viewport(O.copy(J)),j.length>0&&Si(j,q,st),Ut.length>0&&Si(Ut,q,st),Ft.length>0&&Si(Ft,q,st),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function vn(T,q,st,J){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[J.id]===void 0){const $t=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[J.id]=new Xi(1,1,{generateMipmaps:!0,type:$t?va:mi,minFilter:Ur,samples:Ne.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Ut=B.state.transmissionRenderTarget[J.id],Ft=J.viewport||O;Ut.setSize(Ft.z*A.transmissionResolutionScale,Ft.w*A.transmissionResolutionScale);const Nt=A.getRenderTarget(),Gt=A.getActiveCubeFace(),Wt=A.getActiveMipmapLevel();A.setRenderTarget(Ut),A.getClearColor(yt),xt=A.getClearAlpha(),xt<1&&A.setClearColor(16777215,.5),A.clear(),se&&wt.render(st);const Jt=A.toneMapping;A.toneMapping=Vi;const qt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),B.setupLightsView(J),Ht===!0&&Bt.setGlobalState(A.clippingPlanes,J),Si(T,st,J),W.updateMultisampleRenderTarget(Ut),W.updateRenderTargetMipmap(Ut),Me.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let we=0,Ze=q.length;we<Ze;we++){const We=q[we],{object:Oe,geometry:Kt,material:De,group:ie}=We;if(De.side===pa&&Oe.layers.test(J.layers)){const xn=De.side;De.side=Wn,De.needsUpdate=!0,zr(Oe,st,J,Kt,De,ie),De.side=xn,De.needsUpdate=!0,$t=!0}}$t===!0&&(W.updateMultisampleRenderTarget(Ut),W.updateRenderTargetMipmap(Ut))}A.setRenderTarget(Nt,Gt,Wt),A.setClearColor(yt,xt),qt!==void 0&&(J.viewport=qt),A.toneMapping=Jt}function Si(T,q,st){const J=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Ut=T.length;j<Ut;j++){const Ft=T[j],{object:Nt,geometry:Gt,group:Wt}=Ft;let Jt=Ft.material;Jt.allowOverride===!0&&J!==null&&(Jt=J),Nt.layers.test(st.layers)&&zr(Nt,q,st,Gt,Jt,Wt)}}function zr(T,q,st,J,j,Ut){T.onBeforeRender(A,q,st,J,j,Ut),T.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(A,q,st,J,T,Ut),j.transparent===!0&&j.side===pa&&j.forceSinglePass===!1?(j.side=Wn,j.needsUpdate=!0,A.renderBufferDirect(st,q,J,j,T,Ut),j.side=ir,j.needsUpdate=!0,A.renderBufferDirect(st,q,J,j,T,Ut),j.side=pa):A.renderBufferDirect(st,q,J,j,T,Ut),T.onAfterRender(A,q,st,J,j,Ut)}function Br(T,q,st){q.isScene!==!0&&(q=Ce);const J=M.get(T),j=B.state.lights,Ut=B.state.shadowsArray,Ft=j.state.version,Nt=kt.getParameters(T,j.state,Ut,q,st),Gt=kt.getProgramCacheKey(Nt);let Wt=J.programs;J.environment=T.isMeshStandardMaterial?q.environment:null,J.fog=q.fog,J.envMap=(T.isMeshStandardMaterial?vt:ht).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,Wt===void 0&&(T.addEventListener("dispose",wn),Wt=new Map,J.programs=Wt);let Jt=Wt.get(Gt);if(Jt!==void 0){if(J.currentProgram===Jt&&J.lightsStateVersion===Ft)return qs(T,Nt),Jt}else Nt.uniforms=kt.getUniforms(T),T.onBeforeCompile(Nt,A),Jt=kt.acquireProgram(Nt,Gt),Wt.set(Gt,Jt),J.uniforms=Nt.uniforms;const qt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qt.clippingPlanes=Bt.uniform),qs(T,Nt),J.needsLights=Ma(T),J.lightsStateVersion=Ft,J.needsLights&&(qt.ambientLightColor.value=j.state.ambient,qt.lightProbe.value=j.state.probe,qt.directionalLights.value=j.state.directional,qt.directionalLightShadows.value=j.state.directionalShadow,qt.spotLights.value=j.state.spot,qt.spotLightShadows.value=j.state.spotShadow,qt.rectAreaLights.value=j.state.rectArea,qt.ltc_1.value=j.state.rectAreaLTC1,qt.ltc_2.value=j.state.rectAreaLTC2,qt.pointLights.value=j.state.point,qt.pointLightShadows.value=j.state.pointShadow,qt.hemisphereLights.value=j.state.hemi,qt.directionalShadowMap.value=j.state.directionalShadowMap,qt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qt.spotShadowMap.value=j.state.spotShadowMap,qt.spotLightMatrix.value=j.state.spotLightMatrix,qt.spotLightMap.value=j.state.spotLightMap,qt.pointShadowMap.value=j.state.pointShadowMap,qt.pointShadowMatrix.value=j.state.pointShadowMatrix),J.currentProgram=Jt,J.uniformsList=null,Jt}function rl(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=ku.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function qs(T,q){const st=M.get(T);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function ar(T,q,st,J,j){q.isScene!==!0&&(q=Ce),W.resetTextureUnits();const Ut=q.fog,Ft=J.isMeshStandardMaterial?q.environment:null,Nt=at===null?A.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Is,Gt=(J.isMeshStandardMaterial?vt:ht).get(J.envMap||Ft),Wt=J.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Jt=!!st.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),qt=!!st.morphAttributes.position,$t=!!st.morphAttributes.normal,we=!!st.morphAttributes.color;let Ze=Vi;J.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ze=A.toneMapping);const We=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Oe=We!==void 0?We.length:0,Kt=M.get(J),De=B.state.lights;if(Ht===!0&&(de===!0||T!==ut)){const Mn=T===ut&&J.id===dt;Bt.setState(J,T,Mn)}let ie=!1;J.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==De.state.version||Kt.outputColorSpace!==Nt||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Gt||J.fog===!0&&Kt.fog!==Ut||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Bt.numPlanes||Kt.numIntersection!==Bt.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Jt||Kt.morphTargets!==qt||Kt.morphNormals!==$t||Kt.morphColors!==we||Kt.toneMapping!==Ze||Kt.morphTargetsCount!==Oe)&&(ie=!0):(ie=!0,Kt.__version=J.version);let xn=Kt.currentProgram;ie===!0&&(xn=Br(J,q,j));let Wi=!1,Sn=!1,ii=!1;const ze=xn.getUniforms(),yn=Kt.uniforms;if(Yt.useProgram(xn.program)&&(Wi=!0,Sn=!0,ii=!0),J.id!==dt&&(dt=J.id,Sn=!0),Wi||ut!==T){Yt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ze.setValue(G,"projectionMatrix",T.projectionMatrix),ze.setValue(G,"viewMatrix",T.matrixWorldInverse);const En=ze.map.cameraPosition;En!==void 0&&En.setValue(G,ge.setFromMatrixPosition(T.matrixWorld)),Ne.logarithmicDepthBuffer&&ze.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ze.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),ut!==T&&(ut=T,Sn=!0,ii=!0)}if(Kt.needsLights&&(De.state.directionalShadowMap.length>0&&ze.setValue(G,"directionalShadowMap",De.state.directionalShadowMap,W),De.state.spotShadowMap.length>0&&ze.setValue(G,"spotShadowMap",De.state.spotShadowMap,W),De.state.pointShadowMap.length>0&&ze.setValue(G,"pointShadowMap",De.state.pointShadowMap,W)),j.isSkinnedMesh){ze.setOptional(G,j,"bindMatrix"),ze.setOptional(G,j,"bindMatrixInverse");const Mn=j.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),ze.setValue(G,"boneTexture",Mn.boneTexture,W))}j.isBatchedMesh&&(ze.setOptional(G,j,"batchingTexture"),ze.setValue(G,"batchingTexture",j._matricesTexture,W),ze.setOptional(G,j,"batchingIdTexture"),ze.setValue(G,"batchingIdTexture",j._indirectTexture,W),ze.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&ze.setValue(G,"batchingColorTexture",j._colorsTexture,W));const dn=st.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&le.update(j,st,xn),(Sn||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,ze.setValue(G,"receiveShadow",j.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(yn.envMap.value=Gt,yn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&q.environment!==null&&(yn.envMapIntensity.value=q.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=q1()),Sn&&(ze.setValue(G,"toneMappingExposure",A.toneMappingExposure),Kt.needsLights&&Ys(yn,ii),Ut&&J.fog===!0&&ee.refreshFogUniforms(yn,Ut),ee.refreshMaterialUniforms(yn,J,gt,nt,B.state.transmissionRenderTarget[T.id]),ku.upload(G,rl(Kt),yn,W)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ku.upload(G,rl(Kt),yn,W),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ze.setValue(G,"center",j.center),ze.setValue(G,"modelViewMatrix",j.modelViewMatrix),ze.setValue(G,"normalMatrix",j.normalMatrix),ze.setValue(G,"modelMatrix",j.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Mn=J.uniformsGroups;for(let En=0,Fr=Mn.length;En<Fr;En++){const yi=Mn[En];St.update(yi,xn),St.bind(yi,xn)}}return xn}function Ys(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Ma(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(T,q,st){const J=M.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=q,M.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:st,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const st=M.get(T);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const Ea=G.createFramebuffer();this.setRenderTarget=function(T,q=0,st=0){at=T,X=q,rt=st;let J=null,j=!1,Ut=!1;if(T){const Nt=M.get(T);if(Nt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(G.FRAMEBUFFER,Nt.__webglFramebuffer),O.copy(T.viewport),H.copy(T.scissor),it=T.scissorTest,Yt.viewport(O),Yt.scissor(H),Yt.setScissorTest(it),dt=-1;return}else if(Nt.__webglFramebuffer===void 0)W.setupRenderTarget(T);else if(Nt.__hasExternalTextures)W.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Jt=T.depthTexture;if(Nt.__boundDepthTexture!==Jt){if(Jt!==null&&M.has(Jt)&&(T.width!==Jt.image.width||T.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(T)}}const Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ut=!0);const Wt=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[q])?J=Wt[q][st]:J=Wt[q],j=!0):T.samples>0&&W.useMultisampledRTT(T)===!1?J=M.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?J=Wt[st]:J=Wt,O.copy(T.viewport),H.copy(T.scissor),it=T.scissorTest}else O.copy(et).multiplyScalar(gt).floor(),H.copy(ct).multiplyScalar(gt).floor(),it=Dt;if(st!==0&&(J=Ea),Yt.bindFramebuffer(G.FRAMEBUFFER,J)&&Yt.drawBuffers(T,J),Yt.viewport(O),Yt.scissor(H),Yt.setScissorTest(it),j){const Nt=M.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Nt.__webglTexture,st)}else if(Ut){const Nt=q;for(let Gt=0;Gt<T.textures.length;Gt++){const Wt=M.get(T.textures[Gt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,st,Nt)}}else if(T!==null&&st!==0){const Nt=M.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Nt.__webglTexture,st)}dt=-1},this.readRenderTargetPixels=function(T,q,st,J,j,Ut,Ft,Nt=0){if(!(T&&T.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Gt=Gt[Ft]),Gt){Yt.bindFramebuffer(G.FRAMEBUFFER,Gt);try{const Wt=T.textures[Nt],Jt=Wt.format,qt=Wt.type;if(!Ne.textureFormatReadable(Jt)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(qt)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-J&&st>=0&&st<=T.height-j&&(T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Nt),G.readPixels(q,st,J,j,bt.convert(Jt),bt.convert(qt),Ut))}finally{const Wt=at!==null?M.get(at).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(T,q,st,J,j,Ut,Ft,Nt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Gt=Gt[Ft]),Gt)if(q>=0&&q<=T.width-J&&st>=0&&st<=T.height-j){Yt.bindFramebuffer(G.FRAMEBUFFER,Gt);const Wt=T.textures[Nt],Jt=Wt.format,qt=Wt.type;if(!Ne.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Ut.byteLength,G.STREAM_READ),T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Nt),G.readPixels(q,st,J,j,bt.convert(Jt),bt.convert(qt),0);const we=at!==null?M.get(at).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,we);const Ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await py(G,Ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ut),G.deleteBuffer($t),G.deleteSync(Ze),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,st=0){const J=Math.pow(2,-st),j=Math.floor(T.image.width*J),Ut=Math.floor(T.image.height*J),Ft=q!==null?q.x:0,Nt=q!==null?q.y:0;W.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Ft,Nt,j,Ut),Yt.unbindTexture()};const rr=G.createFramebuffer(),ba=G.createFramebuffer();this.copyTextureToTexture=function(T,q,st=null,J=null,j=0,Ut=null){Ut===null&&(j!==0?(Jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=j,j=0):Ut=0);let Ft,Nt,Gt,Wt,Jt,qt,$t,we,Ze;const We=T.isCompressedTexture?T.mipmaps[Ut]:T.image;if(st!==null)Ft=st.max.x-st.min.x,Nt=st.max.y-st.min.y,Gt=st.isBox3?st.max.z-st.min.z:1,Wt=st.min.x,Jt=st.min.y,qt=st.isBox3?st.min.z:0;else{const dn=Math.pow(2,-j);Ft=Math.floor(We.width*dn),Nt=Math.floor(We.height*dn),T.isDataArrayTexture?Gt=We.depth:T.isData3DTexture?Gt=Math.floor(We.depth*dn):Gt=1,Wt=0,Jt=0,qt=0}J!==null?($t=J.x,we=J.y,Ze=J.z):($t=0,we=0,Ze=0);const Oe=bt.convert(q.format),Kt=bt.convert(q.type);let De;q.isData3DTexture?(W.setTexture3D(q,0),De=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),De=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),De=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const ie=G.getParameter(G.UNPACK_ROW_LENGTH),xn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Wi=G.getParameter(G.UNPACK_SKIP_PIXELS),Sn=G.getParameter(G.UNPACK_SKIP_ROWS),ii=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,We.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,We.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qt);const ze=T.isDataArrayTexture||T.isData3DTexture,yn=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const dn=M.get(T),Mn=M.get(q),En=M.get(dn.__renderTarget),Fr=M.get(Mn.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,En.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let yi=0;yi<Gt;yi++)ze&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(T).__webglTexture,j,qt+yi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(q).__webglTexture,Ut,Ze+yi)),G.blitFramebuffer(Wt,Jt,Ft,Nt,$t,we,Ft,Nt,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||M.has(T)){const dn=M.get(T),Mn=M.get(q);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,rr),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,ba);for(let En=0;En<Gt;En++)ze?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,j,qt+En):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,j),yn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,Ut,Ze+En):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,Ut),j!==0?G.blitFramebuffer(Wt,Jt,Ft,Nt,$t,we,Ft,Nt,G.COLOR_BUFFER_BIT,G.NEAREST):yn?G.copyTexSubImage3D(De,Ut,$t,we,Ze+En,Wt,Jt,Ft,Nt):G.copyTexSubImage2D(De,Ut,$t,we,Wt,Jt,Ft,Nt);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else yn?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(De,Ut,$t,we,Ze,Ft,Nt,Gt,Oe,Kt,We.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(De,Ut,$t,we,Ze,Ft,Nt,Gt,Oe,We.data):G.texSubImage3D(De,Ut,$t,we,Ze,Ft,Nt,Gt,Oe,Kt,We):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ut,$t,we,Ft,Nt,Oe,Kt,We.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ut,$t,we,We.width,We.height,Oe,We.data):G.texSubImage2D(G.TEXTURE_2D,Ut,$t,we,Ft,Nt,Oe,Kt,We);G.pixelStorei(G.UNPACK_ROW_LENGTH,ie),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Sn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ii),Ut===0&&q.generateMipmaps&&G.generateMipmap(De),Yt.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&W.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?W.setTextureCube(T,0):T.isData3DTexture?W.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?W.setTexture2DArray(T,0):W.setTexture2D(T,0),Yt.unbindTexture()},this.resetState=function(){X=0,rt=0,at=null,Yt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}function j1({size:o="medium"}){const e=kn.useRef(null),i=kn.useRef(null),r=kn.useRef(null),l=kn.useRef(null),c=kn.useRef(null),d=kn.useRef([]);return kn.useEffect(()=>{if(!e.current)return;const h=new Hy;h.background=new Le(0),r.current=h;const m=new pi(50,1,.1,1e3);m.position.z=3.5,l.current=m;const p=new Y1({antialias:!0,alpha:!0});p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setClearColor(0,0),i.current=p;const _={small:200,medium:280,large:350}[o];p.setSize(_,_),e.current&&e.current.appendChild(p.domElement);const S=new Zo(1,32,32),E=new Di({uniforms:{time:{value:0},color:{value:new Le(16777215)}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        uniform vec3 color;
        varying vec2 vUv;
        varying vec3 vNormal;
        
        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }
        
        void main() {
          // ASCII-style grid
          float gridX = step(0.95, fract(vUv.x * 40.0));
          float gridY = step(0.95, fract(vUv.y * 20.0));
          float grid = max(gridX, gridY);
          
          // Scanline effect
          float scanline = sin(vUv.y * 100.0 + time * 2.0) * 0.1 + 0.9;
          
          // Edge glow (Fresnel)
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
          
          // Combine
          float alpha = (0.15 + grid * 0.3 + fresnel * 0.4) * scanline;
          
          // Flicker effect
          alpha *= 0.9 + random(vec2(time * 0.1, 0.0)) * 0.1;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,wireframe:!1}),R=new vi(S,E);c.current=R,h.add(R);const C=new Zo(1.01,24,12),y=new Zu({color:16777215,wireframe:!0,transparent:!0,opacity:.1}),v=new vi(C,y);h.add(v);const P=[{lat:40,lng:-74},{lat:51,lng:0},{lat:35,lng:139},{lat:-23,lng:-46},{lat:1,lng:36}],N=new Zo(.04,8,8),L=new Zu({color:65416,transparent:!0,opacity:.9});P.forEach(Z=>{const A=(90-Z.lat)*(Math.PI/180),w=(Z.lng+180)*(Math.PI/180),X=-1*Math.sin(A)*Math.cos(w),rt=Math.cos(A),at=Math.sin(A)*Math.sin(w),dt=new vi(N,L.clone());dt.position.set(X,rt,at);const ut=new lv({color:65416,transparent:!0,opacity:.4}),O=new Vy(ut);O.scale.set(.2,.2,1),dt.add(O),h.add(dt),d.current.push(dt)});let B,I=Date.now();const z=()=>{const Z=(Date.now()-I)/1e3;R.rotation.y+=.003,v.rotation.y+=.003,E.uniforms.time.value=Z,d.current.forEach((A,w)=>{const X=1+Math.sin(Z*2+w)*.2;A.scale.setScalar(X)}),p.render(h,m),B=requestAnimationFrame(z)};return z(),()=>{cancelAnimationFrame(B),p.dispose(),e.current?.contains(p.domElement)&&e.current.removeChild(p.domElement)}},[o]),Tt.jsx("div",{ref:e,style:{width:"100%",maxWidth:o==="small"?"200px":o==="medium"?"280px":"350px",aspectRatio:"1/1",display:"flex",justifyContent:"center",alignItems:"center"}})}const vv=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();const Z1=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const K1=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase());const O_=o=>{const e=K1(o);return e.charAt(0).toUpperCase()+e.slice(1)};var Q1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const J1=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const $1=kn.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...h},m)=>kn.createElement("svg",{ref:m,...Q1,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:vv("lucide",l),...!c&&!J1(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,x])=>kn.createElement(p,x)),...Array.isArray(c)?c:[c]]));const ya=(o,e)=>{const i=kn.forwardRef(({className:r,...l},c)=>kn.createElement($1,{ref:c,iconNode:e,className:vv(`lucide-${Z1(O_(o))}`,`lucide-${o}`,r),...l}));return i.displayName=O_(o),i};const tA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],eA=ya("arrow-right",tA);const nA=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],iA=ya("circle-check-big",nA);const aA=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],rA=ya("clock",aA);const sA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Fh=ya("globe",sA);const oA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],lA=ya("menu",oA);const uA=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],cA=ya("play",uA);const fA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],dA=ya("shield",fA);const hA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],pA=ya("x",hA);const mA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],xv=ya("zap",mA),gA=[{icon:xv,title:"Ultra-Low Latency",description:"Sub-100ms latency worldwide with our global edge network."},{icon:Fh,title:"Global Distribution",description:"300+ edge locations ensuring your stream reaches everyone."},{icon:dA,title:"Enterprise Security",description:"End-to-end encryption with SOC2 compliance and GDPR ready."},{icon:rA,title:"99.999% Uptime",description:"Redundant infrastructure guarantees uninterrupted streaming."}],_A=[{name:"Starter",price:"$29",period:"/mo",features:["1,000 viewers","10GB storage","Basic analytics","Email support"],cta:"Start Free",popular:!1},{name:"Professional",price:"$99",period:"/mo",features:["10,000 viewers","100GB storage","Advanced analytics","Priority support","Custom branding"],cta:"Start Trial",popular:!0},{name:"Enterprise",price:"Custom",period:"",features:["Unlimited viewers","Unlimited storage","Custom analytics","24/7 dedicated support","SLA guarantee"],cta:"Contact Sales",popular:!1}],P_=[{value:"300+",label:"Edge Locations"},{value:"50M+",label:"Streams"},{value:"99.999%",label:"Uptime"},{value:"<100ms",label:"Latency"}];function vA(){const[o,e]=kn.useState(!1);return Tt.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#000",color:"#fff",overflowX:"hidden"},children:[Tt.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,height:"64px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 5%",backgroundColor:"rgba(0,0,0,0.9)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.1)",zIndex:1e3},children:[Tt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[Tt.jsx(Fh,{size:22}),Tt.jsx("span",{style:{fontSize:"18px",fontWeight:600},children:"StreamStrong"})]}),Tt.jsxs("div",{className:"nav-desktop",style:{display:"flex",alignItems:"center",gap:"24px"},children:[Tt.jsx("a",{href:"#features",style:{color:"#888",textDecoration:"none",fontSize:"14px"},children:"Features"}),Tt.jsx("a",{href:"#pricing",style:{color:"#888",textDecoration:"none",fontSize:"14px"},children:"Pricing"}),Tt.jsx("a",{href:"#contact",style:{color:"#888",textDecoration:"none",fontSize:"14px"},children:"Contact"}),Tt.jsx("button",{style:{backgroundColor:"#fff",color:"#000",border:"none",padding:"8px 16px",borderRadius:"6px",fontSize:"13px",fontWeight:500,cursor:"pointer"},children:"Get Started"})]}),Tt.jsx("button",{className:"nav-mobile-btn",onClick:()=>e(!o),style:{background:"transparent",border:"none",color:"#fff",cursor:"pointer",padding:"8px",display:"none"},children:o?Tt.jsx(pA,{size:24}):Tt.jsx(lA,{size:24})})]}),o&&Tt.jsxs("div",{style:{position:"fixed",top:"64px",left:0,right:0,backgroundColor:"rgba(0,0,0,0.98)",padding:"20px",borderBottom:"1px solid rgba(255,255,255,0.1)",zIndex:999},children:[Tt.jsx("a",{onClick:()=>e(!1),href:"#features",style:{display:"block",color:"#888",textDecoration:"none",padding:"12px 0",fontSize:"16px"},children:"Features"}),Tt.jsx("a",{onClick:()=>e(!1),href:"#pricing",style:{display:"block",color:"#888",textDecoration:"none",padding:"12px 0",fontSize:"16px"},children:"Pricing"}),Tt.jsx("a",{onClick:()=>e(!1),href:"#contact",style:{display:"block",color:"#888",textDecoration:"none",padding:"12px 0",fontSize:"16px"},children:"Contact"})]}),Tt.jsxs("section",{style:{minHeight:"100vh",padding:"100px 5% 60px",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"},children:[Tt.jsx("div",{style:{position:"absolute",top:"30%",left:"50%",transform:"translate(-50%, -50%)",width:"80vw",height:"80vw",maxWidth:"600px",maxHeight:"600px",background:"radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",pointerEvents:"none"}}),Tt.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",maxWidth:"1200px",margin:"0 auto",width:"100%",gap:"40px"},children:[Tt.jsxs("div",{style:{flex:"1",minWidth:0},children:[Tt.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",backgroundColor:"rgba(255,255,255,0.05)",padding:"6px 12px",borderRadius:"20px",marginBottom:"20px",border:"1px solid rgba(255,255,255,0.1)"},children:[Tt.jsx(xv,{size:14}),Tt.jsx("span",{style:{fontSize:"12px",color:"#888"},children:"WebRTC Ready"})]}),Tt.jsxs("h1",{style:{fontSize:"clamp(32px, 6vw, 52px)",fontWeight:600,lineHeight:"1.1",marginBottom:"16px",letterSpacing:"-1.5px"},children:["Streaming at the"," ",Tt.jsx("span",{style:{background:"linear-gradient(135deg, #fff 0%, #888 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"speed of thought"})]}),Tt.jsx("p",{style:{fontSize:"clamp(14px, 2vw, 17px)",color:"#888",lineHeight:"1.6",marginBottom:"28px",maxWidth:"480px"},children:"Ultra-low latency streaming with global edge network. Built for developers who demand performance."}),Tt.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",marginBottom:"40px"},children:[Tt.jsxs("button",{style:{backgroundColor:"#fff",color:"#000",border:"none",padding:"12px 24px",borderRadius:"8px",fontSize:"14px",fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"},children:["Start Building ",Tt.jsx(eA,{size:16})]}),Tt.jsxs("button",{style:{backgroundColor:"transparent",color:"#fff",border:"1px solid rgba(255,255,255,0.2)",padding:"12px 24px",borderRadius:"8px",fontSize:"14px",fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",gap:"8px"},children:[Tt.jsx(cA,{size:16})," Demo"]})]}),Tt.jsx("div",{style:{display:"flex",gap:"32px",flexWrap:"wrap"},children:P_.slice(0,2).map((i,r)=>Tt.jsxs("div",{children:[Tt.jsx("div",{style:{fontSize:"24px",fontWeight:600},children:i.value}),Tt.jsx("div",{style:{fontSize:"12px",color:"#666"},children:i.label})]},r))})]}),Tt.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center",alignItems:"center",minWidth:"200px"},children:Tt.jsx(j1,{size:"medium"})})]})]}),Tt.jsxs("section",{id:"features",style:{padding:"60px 5%",maxWidth:"1200px",margin:"0 auto"},children:[Tt.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[Tt.jsxs("h2",{style:{fontSize:"clamp(24px, 4vw, 36px)",fontWeight:600,marginBottom:"12px"},children:["Built for ",Tt.jsx("span",{style:{background:"linear-gradient(135deg, #fff 0%, #888 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"performance"})]}),Tt.jsx("p",{style:{fontSize:"15px",color:"#888"},children:"Engineered for minimal latency and maximum reliability."})]}),Tt.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px"},children:gA.map((i,r)=>Tt.jsxs("div",{style:{backgroundColor:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"12px",padding:"24px"},children:[Tt.jsx("div",{style:{width:"40px",height:"40px",backgroundColor:"rgba(255,255,255,0.05)",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:Tt.jsx(i.icon,{size:20})}),Tt.jsx("h3",{style:{fontSize:"17px",fontWeight:600,marginBottom:"8px"},children:i.title}),Tt.jsx("p",{style:{fontSize:"14px",color:"#888",lineHeight:"1.5"},children:i.description})]},r))})]}),Tt.jsx("section",{style:{padding:"50px 5%",backgroundColor:"rgba(255,255,255,0.01)",borderTop:"1px solid rgba(255,255,255,0.05)",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:Tt.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"20px"},children:P_.map((i,r)=>Tt.jsxs("div",{style:{textAlign:"center"},children:[Tt.jsx("div",{style:{fontSize:"clamp(24px, 4vw, 36px)",fontWeight:600},children:i.value}),Tt.jsx("div",{style:{fontSize:"12px",color:"#666"},children:i.label})]},r))})}),Tt.jsxs("section",{id:"pricing",style:{padding:"60px 5%",maxWidth:"1000px",margin:"0 auto"},children:[Tt.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[Tt.jsxs("h2",{style:{fontSize:"clamp(24px, 4vw, 36px)",fontWeight:600,marginBottom:"12px"},children:["Simple ",Tt.jsx("span",{style:{background:"linear-gradient(135deg, #fff 0%, #888 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"pricing"})]}),Tt.jsx("p",{style:{fontSize:"15px",color:"#888"},children:"No hidden fees. Cancel anytime."})]}),Tt.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"20px"},children:_A.map((i,r)=>Tt.jsxs("div",{style:{backgroundColor:i.popular?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.01)",border:i.popular?"1px solid rgba(255,255,255,0.2)":"1px solid rgba(255,255,255,0.05)",borderRadius:"12px",padding:"24px",position:"relative"},children:[i.popular&&Tt.jsx("div",{style:{position:"absolute",top:"-10px",left:"50%",transform:"translateX(-50%)",backgroundColor:"#fff",color:"#000",padding:"4px 12px",borderRadius:"10px",fontSize:"11px",fontWeight:500},children:"Popular"}),Tt.jsx("h3",{style:{fontSize:"18px",fontWeight:600,marginBottom:"8px"},children:i.name}),Tt.jsxs("div",{style:{display:"flex",alignItems:"baseline",marginBottom:"20px"},children:[Tt.jsx("span",{style:{fontSize:"32px",fontWeight:600},children:i.price}),Tt.jsx("span",{style:{fontSize:"14px",color:"#666",marginLeft:"4px"},children:i.period})]}),Tt.jsx("ul",{style:{listStyle:"none",padding:0,margin:"0 0 20px 0"},children:i.features.map((l,c)=>Tt.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px",fontSize:"13px",color:"#888"},children:[Tt.jsx(iA,{size:14,style:{color:"#22c55e"}})," ",l]},c))}),Tt.jsx("button",{style:{width:"100%",backgroundColor:i.popular?"#fff":"transparent",color:i.popular?"#000":"#fff",border:i.popular?"none":"1px solid rgba(255,255,255,0.2)",padding:"12px",borderRadius:"6px",fontSize:"13px",fontWeight:500,cursor:"pointer"},children:i.cta})]},r))})]}),Tt.jsxs("section",{id:"contact",style:{padding:"60px 5%",maxWidth:"600px",margin:"0 auto",textAlign:"center"},children:[Tt.jsxs("h2",{style:{fontSize:"clamp(24px, 4vw, 32px)",fontWeight:600,marginBottom:"16px"},children:["Ready to ",Tt.jsx("span",{style:{background:"linear-gradient(135deg, #fff 0%, #888 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"stream stronger"}),"?"]}),Tt.jsx("p",{style:{fontSize:"15px",color:"#888",marginBottom:"28px"},children:"Join thousands of developers building the future of live streaming."}),Tt.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[Tt.jsx("button",{style:{backgroundColor:"#fff",color:"#000",border:"none",padding:"14px 28px",borderRadius:"8px",fontSize:"14px",fontWeight:500,cursor:"pointer"},children:"Start Free Trial"}),Tt.jsx("button",{style:{backgroundColor:"transparent",color:"#fff",border:"1px solid rgba(255,255,255,0.2)",padding:"14px 28px",borderRadius:"8px",fontSize:"14px",fontWeight:500,cursor:"pointer"},children:"Schedule Demo"})]})]}),Tt.jsx("footer",{style:{padding:"30px 5%",borderTop:"1px solid rgba(255,255,255,0.05)"},children:Tt.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[Tt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[Tt.jsx(Fh,{size:16}),Tt.jsx("span",{style:{fontSize:"14px",fontWeight:500},children:"StreamStrong"})]}),Tt.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:["Docs","API","Status","Privacy","Terms"].map(i=>Tt.jsx("a",{href:"#",style:{color:"#666",textDecoration:"none",fontSize:"12px"},children:i},i))}),Tt.jsx("div",{style:{fontSize:"12px",color:"#444"},children:"© 2026 StreamStrong"})]})}),Tt.jsx("style",{children:`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
          section > div {
            flex-direction: column !important;
            text-align: center !important;
          }
          section > div > div:first-child {
            order: 1 !important;
          }
          section > div > div:last-child {
            order: 0 !important;
          }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
        }
      `})]})}NS.createRoot(document.getElementById("root")).render(Tt.jsx(kn.StrictMode,{children:Tt.jsx(vA,{})}));
