/*! For license information please see dfff311d.03f2d2a9.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[34675],{78042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(24246),r=n(71670);const o={title:"Hermes as the Default",authors:["micleo"],tags:["announcement","release"]},s="Hermes As the Default Blogpost",i={permalink:"/blog/2022/07/08/hermes-as-the-default",source:"@site/blog/2022-07-08-hermes-as-the-default.md",title:"Hermes as the Default",description:"Last October, we announced that we had started work towards making Hermes the default engine for all React Native apps.",date:"2022-07-08T00:00:00.000Z",formattedDate:"July 8, 2022",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],readingTime:4.455,hasTruncateMarker:!0,authors:[{name:"Michael Leon",title:"Software Engineer at Meta",imageURL:"https://github.com/fbmal7.png",key:"micleo"}],frontMatter:{title:"Hermes as the Default",authors:["micleo"],tags:["announcement","release"]},unlisted:!1,prevItem:{title:"Announcing React Native 0.70",permalink:"/blog/2022/09/05/version-070"},nextItem:{title:"Announcing React Native 0.69",permalink:"/blog/2022/06/21/version-069"}},l={authorsImageUrls:[void 0]},c=[];function h(e){const t=Object.assign({p:"p",a:"a",strong:"strong"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Last October, we ",(0,a.jsx)(t.a,{href:"/blog/2021/10/26/toward-hermes-being-the-default",children:"announced"})," that we had started work towards ",(0,a.jsx)(t.strong,{children:"making"})," ",(0,a.jsx)(t.strong,{children:"Hermes the default engine for all React Native apps"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Hermes has provided a lot of value to React Native inside of Meta, and we believe the open-source community will benefit as well. Hermes is designed for resource constrained devices and optimizes for start up, app size, and memory consumption. One key difference between Hermes and other JS engines is its ability to compile JavaScript source code to bytecode ahead of time. This precompiled bytecode is bundled inside the binary, and saves the interpreter from having to perform this expensive step during app startup."}),"\n",(0,a.jsxs)(t.p,{children:["Since the announcement, a lot of work has gone into making Hermes better, and today, we are excited to share that ",(0,a.jsx)(t.strong,{children:"React Native 0.70 will ship with Hermes as the default engine."})," This means that all new projects starting on v0.70 will have Hermes enabled by default. With the rollout coming up in July, we want to work closely with the community and make sure the transition is smooth and brings value to all users. This blogpost will go over what you can expect from the change, performance benchmarks, new features, and more. Note that you don\u2019t need to wait for React Native 0.70 to start using Hermes - you can ",(0,a.jsxs)(t.strong,{children:["follow ",(0,a.jsx)(t.a,{href:"/docs/hermes#enabling-hermes",children:"these instructions"})," to enable Hermes on your existing React Native app"]}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Note that while Hermes will be enabled by default in new React Native projects, support for other engines will continue."})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},71426:(e,t,n)=>{var a=n(27378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,o={},c=null,h=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:h,props:o,_owner:i.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>o});var a=n(27378);const r=a.createContext({});function o(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:o(e),a.createElement(r.Provider,{value:i},t)}}}]);