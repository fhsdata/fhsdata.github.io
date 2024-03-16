/*! For license information please see 0ccd0cc4.03adfff0.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[43197],{4006:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(24246),o=a(71670);const n={title:"Package Exports Support in React Native",authors:["huntie"],tags:["announcement","metro"],date:new Date("2023-06-21T00:00:00.000Z")},s="Package Exports Support in React Native",i={permalink:"/blog/2023/06/21/package-exports-support",source:"@site/blog/2023-06-21-package-exports-support.md",title:"Package Exports Support in React Native",description:'With the release of React Native 0.72, Metro \u2014 our JavaScript build tool \u2014 now includes beta support for the package.json "exports" field. When enabled, it adds the following functionality:',date:"2023-06-21T00:00:00.000Z",formattedDate:"June 21, 2023",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"metro",permalink:"/blog/tags/metro"}],readingTime:8.305,hasTruncateMarker:!0,authors:[{name:"Alex Hunt",title:"Software Engineer at Meta",url:"https://twitter.com/alxhnt",imageURL:"https://github.com/huntie.png",key:"huntie"}],frontMatter:{title:"Package Exports Support in React Native",authors:["huntie"],tags:["announcement","metro"],date:"2023-06-21T00:00:00.000Z"},unlisted:!1,prevItem:{title:"React Native 0.72 - Symlink Support, Better Errors, and more",permalink:"/blog/2023/06/21/0.72-metro-package-exports-symlinks"},nextItem:{title:"React Native 0.71-RC0 Android outage postmortem",permalink:"/blog/2023/01/27/71rc1-android-outage-postmortem"}},c={authorsImageUrls:[void 0]},p=[];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["With the release of ",(0,r.jsx)(t.a,{href:"/blog/2023/06/21/0.72-metro-package-exports-symlinks",children:"React Native 0.72"}),", Metro \u2014 our JavaScript build tool \u2014 now includes beta support for the ",(0,r.jsx)(t.code,{children:"package.json"})," ",(0,r.jsx)(t.a,{href:"https://nodejs.org/docs/latest-v18.x/api/packages.html#exports",children:(0,r.jsx)(t.code,{children:'"exports"'})})," field. When ",(0,r.jsx)(t.a,{href:"/blog/2023/06/21/package-exports-support#enabling-package-exports-beta",children:"enabled"}),", it adds the following functionality:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/blog/2023/06/21/package-exports-support#for-app-developers",children:"React Native projects will work with more npm packages out-of-the-box"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/blog/2023/06/21/package-exports-support#for-package-maintainers-preview",children:"New capabilities for packages to define their API and target React Native"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/blog/2023/06/21/package-exports-support#breaking-changes",children:"Some breaking changes to package resolution (in edge cases)"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In this post we'll cover how Package Exports works, and what these changes mean for you as a React Native app developer or package maintainer."})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},71426:(e,t,a)=>{var r=a(27378),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,a){var r,n={},p=null,l=null;for(r in void 0!==a&&(p=""+a),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:o,type:e,key:p,ref:l,props:n,_owner:i.current}}t.Fragment=n,t.jsx=p,t.jsxs=p},24246:(e,t,a)=>{e.exports=a(71426)},71670:(e,t,a)=>{a.d(t,{Zo:()=>i,ah:()=>n});var r=a(27378);const o=r.createContext({});function n(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||s:n(e),r.createElement(o.Provider,{value:i},t)}}}]);