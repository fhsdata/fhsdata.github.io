/*! For license information please see d7726b69.8cde76e8.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[24669],{15403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(24246),r=a(71670);const s={id:"safeareaview",title:"SafeAreaView"},i=void 0,o={id:"safeareaview",title:"SafeAreaView",description:"The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later.",source:"@site/../docs/safeareaview.md",sourceDirName:".",slug:"/safeareaview",permalink:"/docs/next/safeareaview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/safeareaview.md",tags:[],version:"current",lastUpdatedAt:1669927067,formattedLastUpdatedAt:"Dec 1, 2022",frontMatter:{id:"safeareaview",title:"SafeAreaView"},sidebar:"components",previous:{title:"InputAccessoryView",permalink:"/docs/next/inputaccessoryview"},next:{title:"Image Style Props",permalink:"/docs/next/image-style-props"}},c={},l=[{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2},{value:"View Props",id:"view-props",level:3}];function d(e){const t=Object.assign({p:"p",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",a:"a",blockquote:"blockquote"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The purpose of ",(0,n.jsx)(t.code,{children:"SafeAreaView"})," is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"SafeAreaView"})," renders nested content and automatically applies padding to reflect the portion of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views. Moreover, and most importantly, Safe Area's paddings reflect the physical limitation of the screen, such as rounded corners or camera notches (i.e. the sensor housing area on iPhone 13)."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["To use, wrap your top level view with a ",(0,n.jsx)(t.code,{children:"SafeAreaView"})," with a ",(0,n.jsx)(t.code,{children:"flex: 1"})," style applied to it. You may also want to use a background color that matches your application's design."]}),"\n",(0,n.jsx)(t.div,{class:"snack-player","data-snack-name":"SafeAreaView","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BStyleSheet%2C%20Text%2C%20SafeAreaView%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EPage%20content%3C%2FText%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2025%2C%5Cn%20%20%20%20fontWeight%3A%20'500'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,n.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,n.jsx)(t.h3,{id:"view-props",children:(0,n.jsx)(t.a,{href:"/docs/next/view#props",children:"View Props"})}),"\n",(0,n.jsxs)(t.p,{children:["Inherits ",(0,n.jsx)(t.a,{href:"/docs/next/view#props",children:"View Props"}),"."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["As padding is used to implement the behavior of the component, padding rules in styles applied to a ",(0,n.jsx)(t.code,{children:"SafeAreaView"})," will be ignored and can cause different results depending on the platform. See ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/issues/22211",children:"#22211"})," for details."]}),"\n"]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},71426:(e,t,a)=>{var n=a(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var n,s={},l=null,d=null;for(n in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},24246:(e,t,a)=>{e.exports=a(71426)},71670:(e,t,a)=>{a.d(t,{Zo:()=>o,ah:()=>s});var n=a(27378);const r=n.createContext({});function s(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||i:s(e),n.createElement(r.Provider,{value:o},t)}}}]);