/*! For license information please see 9baacde1.31f70709.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[64039],{12004:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=s(24246),n=s(71670);const i={id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS"},o=void 0,d={id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.71/progressviewios.md",sourceDirName:".",slug:"/progressviewios",permalink:"/docs/0.71/progressviewios",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/progressviewios.md",tags:[],version:"0.71",lastUpdatedAt:1673540325,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS"}},c={},l=[{value:"Example",id:"example",level:3},{value:"Props",id:"props",level:2},{value:"<code>progress</code>",id:"progress",level:3},{value:"<code>progressImage</code>",id:"progressimage",level:3},{value:"<code>progressTintColor</code>",id:"progresstintcolor",level:3},{value:"<code>progressViewStyle</code>",id:"progressviewstyle",level:3},{value:"<code>trackImage</code>",id:"trackimage",level:3},{value:"<code>trackTintColor</code>",id:"tracktintcolor",level:3}];function a(e){const r=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",code:"code",h3:"h3",div:"div",hr:"hr",h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,n.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Deprecated."})," Use one of the ",(0,t.jsx)(r.a,{href:"https://reactnative.directory/?search=progressview",children:"community packages"})," instead."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Uses ",(0,t.jsx)(r.code,{children:"ProgressViewIOS"})," to render a UIProgressView on iOS."]}),"\n",(0,t.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.div,{class:"snack-player","data-snack-name":"ProgressViewIOS","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20StyleSheet%2C%20ProgressViewIOS%2C%20Text%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%200%25%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressViewIOS%20style%3D%7Bstyles.progress%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EColored%20Progress%20Bar%20-%2050%25%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressViewIOS%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%5Cn%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%5C%22%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20progress%3D%7B0.5%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%20100%25%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressViewIOS%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%5Cn%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%5C%22black%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20progress%3D%7B1%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20example%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%2020%2C%5Cn%20%20%7D%2C%5Cn%20%20progress%3A%20%7B%5Cn%20%20%20%20width%3A%20200%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h1,{id:"reference",children:"Reference"}),"\n",(0,t.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,t.jsxs)(r.p,{children:["Inherits ",(0,t.jsx)(r.a,{href:"/docs/0.71/view#props",children:"View Props"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"progress",children:(0,t.jsx)(r.code,{children:"progress"})}),"\n",(0,t.jsx)(r.p,{children:"The progress value (between 0 and 1)."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"number"}),(0,t.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"progressimage",children:(0,t.jsx)(r.code,{children:"progressImage"})}),"\n",(0,t.jsx)(r.p,{children:"A stretchable image to display as the progress bar."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Image.propTypes.source"}),(0,t.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"progresstintcolor",children:(0,t.jsx)(r.code,{children:"progressTintColor"})}),"\n",(0,t.jsx)(r.p,{children:"The tint color of the progress bar itself."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"progressviewstyle",children:(0,t.jsx)(r.code,{children:"progressViewStyle"})}),"\n",(0,t.jsx)(r.p,{children:"The progress bar style."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"enum('default', 'bar')"}),(0,t.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"trackimage",children:(0,t.jsx)(r.code,{children:"trackImage"})}),"\n",(0,t.jsx)(r.p,{children:"A stretchable image to display behind the progress bar."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Image.propTypes.source"}),(0,t.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"tracktintcolor",children:(0,t.jsx)(r.code,{children:"trackTintColor"})}),"\n",(0,t.jsx)(r.p,{children:"The tint color of the progress bar track."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"No"})]})})]})]})}const h=function(e={}){const{wrapper:r}=Object.assign({},(0,n.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},71426:(e,r,s)=>{var t=s(27378),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var t,i={},l=null,a=null;for(t in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)o.call(r,t)&&!c.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:n,type:e,key:l,ref:a,props:i,_owner:d.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},24246:(e,r,s)=>{e.exports=s(71426)},71670:(e,r,s)=>{s.d(r,{Zo:()=>d,ah:()=>i});var t=s(27378);const n=t.createContext({});function i(e){const r=t.useContext(n);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const o={};function d({components:e,children:r,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||o:i(e),t.createElement(n.Provider,{value:d},r)}}}]);