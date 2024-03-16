/*! For license information please see 9dbcff21.058fb69e.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[37959],{66139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(24246),r=t(71670);const s={id:"systrace",title:"Systrace"},i=void 0,o={id:"systrace",title:"Systrace",description:"Systrace is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize.",source:"@site/versioned_docs/version-0.73/systrace.md",sourceDirName:".",slug:"/systrace",permalink:"/docs/systrace",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/systrace.md",tags:[],version:"0.73",lastUpdatedAt:1702040446,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{id:"systrace",title:"Systrace"},sidebar:"api",previous:{title:"StyleSheet",permalink:"/docs/stylesheet"},next:{title:"Transforms",permalink:"/docs/transforms"}},c={},d=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>isEnabled()</code>",id:"isenabled",level:3},{value:"<code>beginEvent()</code>",id:"beginevent",level:3},{value:"<code>endEvent()</code>",id:"endevent",level:3},{value:"<code>beginAsyncEvent()</code>",id:"beginasyncevent",level:3},{value:"<code>endAsyncEvent()</code>",id:"endasyncevent",level:3},{value:"<code>counterEvent()</code>",id:"counterevent",level:3}];function l(e){const n=Object.assign({p:"p",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",pre:"pre"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Systrace"})," is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Systrace"})," allows you to mark JavaScript (JS) events with a tag and an integer value. Capture the non-Timed JS events in EasyProfiler."]}),"\n",(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"Systrace Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Button%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%20%20SafeAreaView%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Systrace%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20enableProfiling%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Systrace.setEnabled(true)%3B%20%2F%2F%20Call%20setEnabled%20to%20turn%20on%20the%20profiling.%5Cn%20%20%20%20Systrace.beginEvent('event_label')%3B%5Cn%20%20%20%20Systrace.counterEvent('event_label'%2C%2010)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20stopProfiling%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Systrace.endEvent()%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20React%20Native%20Systrace%20API%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonRow%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Capture%20the%20non-Timed%20JS%20events%20in%20EasyProfiler%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20enableProfiling()%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Stop%20capturing%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20stopProfiling()%7D%5Cn%20%20%20%20%20%20%20%20%20%20color%3D%5C%22%23FF0000%5C%22%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23fff'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingTop%3A%2044%2C%5Cn%20%20%20%20padding%3A%208%2C%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20'bold'%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20fontSize%3A%2025%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonRow%3A%20%7B%5Cn%20%20%20%20flexBasis%3A%20150%2C%5Cn%20%20%20%20marginVertical%3A%2016%2C%5Cn%20%20%20%20justifyContent%3A%20'space-evenly'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(n.h3,{id:"isenabled",children:(0,a.jsx)(n.code,{children:"isEnabled()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"static isEnabled(): boolean;\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"beginevent",children:(0,a.jsx)(n.code,{children:"beginEvent()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"static beginEvent(eventName: string | (() => string), args?: EventArgs);\n"})}),"\n",(0,a.jsx)(n.p,{children:"beginEvent/endEvent for starting and then ending a profile within the same call stack frame."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"endevent",children:(0,a.jsx)(n.code,{children:"endEvent()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"static endEvent(args?: EventArgs);\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"beginasyncevent",children:(0,a.jsx)(n.code,{children:"beginAsyncEvent()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"static beginAsyncEvent(\n  eventName: string | (() => string),\n  args?: EventArgs,\n): number;\n"})}),"\n",(0,a.jsx)(n.p,{children:"beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either occur on another thread or out of the current stack frame, eg await the returned cookie variable should be used as input into the endAsyncEvent call to end the profile."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"endasyncevent",children:(0,a.jsx)(n.code,{children:"endAsyncEvent()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"static endAsyncEvent(\n  eventName: EventName,\n  cookie: number,\n  args?: EventArgs,\n);\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"counterevent",children:(0,a.jsx)(n.code,{children:"counterEvent()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"static counterEvent(eventName: string | (() => string), value: number);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Register the value to the profileName on the systrace timeline."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},71426:(e,n,t)=>{var a=t(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var a,s={},d=null,l=null;for(a in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,a)&&!c.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{$$typeof:r,type:e,key:d,ref:l,props:s,_owner:o.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>s});var a=t(27378);const r=a.createContext({});function s(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:s(e),a.createElement(r.Provider,{value:o},n)}}}]);