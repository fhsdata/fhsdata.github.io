/*! For license information please see 1e175987.0a4440b7.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[61774],{54706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(24246),o=n(71670);const r={id:"toastandroid",title:"ToastAndroid"},i=void 0,a={id:"toastandroid",title:"ToastAndroid",description:"React Native's ToastAndroid API exposes the Android platform's ToastAndroid module as a JS module. It provides the method show(message, duration) which takes the following parameters:",source:"@site/../docs/toastandroid.md",sourceDirName:".",slug:"/toastandroid",permalink:"/docs/next/toastandroid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/toastandroid.md",tags:[],version:"current",lastUpdatedAt:1671132556,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{id:"toastandroid",title:"ToastAndroid"},sidebar:"api",previous:{title:"PermissionsAndroid",permalink:"/docs/next/permissionsandroid"},next:{title:"ActionSheetIOS",permalink:"/docs/next/actionsheetios"}},d={},c=[{value:"Methods",id:"methods",level:2},{value:"<code>show()</code>",id:"show",level:3},{value:"<code>showWithGravity()</code>",id:"showwithgravity",level:3},{value:"<code>showWithGravityAndOffset()</code>",id:"showwithgravityandoffset",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>SHORT</code>",id:"short",level:3},{value:"<code>LONG</code>",id:"long",level:3},{value:"<code>TOP</code>",id:"top",level:3},{value:"<code>BOTTOM</code>",id:"bottom",level:3},{value:"<code>CENTER</code>",id:"center",level:3}];function h(e){const t=Object.assign({p:"p",code:"code",ul:"ul",li:"li",em:"em",div:"div",hr:"hr",h1:"h1",h2:"h2",h3:"h3",pre:"pre"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["React Native's ToastAndroid API exposes the Android platform's ToastAndroid module as a JS module. It provides the method ",(0,s.jsx)(t.code,{children:"show(message, duration)"})," which takes the following parameters:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"message"})," A string with the text to toast"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"duration"})," The duration of the toast\u2014either ",(0,s.jsx)(t.code,{children:"ToastAndroid.SHORT"})," or ",(0,s.jsx)(t.code,{children:"ToastAndroid.LONG"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can alternatively use ",(0,s.jsx)(t.code,{children:"showWithGravity(message, duration, gravity)"})," to specify where the toast appears in the screen's layout. May be ",(0,s.jsx)(t.code,{children:"ToastAndroid.TOP"}),", ",(0,s.jsx)(t.code,{children:"ToastAndroid.BOTTOM"})," or ",(0,s.jsx)(t.code,{children:"ToastAndroid.CENTER"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The 'showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)' method adds the ability to specify an offset with in pixels."}),"\n",(0,s.jsx)(t.div,{class:"snack-player","data-snack-name":"Toast Android API Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20StyleSheet%2C%20ToastAndroid%2C%20Button%2C%20StatusBar%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20showToast%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20ToastAndroid.show('A%20pikachu%20appeared%20nearby%20!'%2C%20ToastAndroid.SHORT)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20showToastWithGravity%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20ToastAndroid.showWithGravity(%5Cn%20%20%20%20%20%20'All%20Your%20Base%20Are%20Belong%20To%20Us'%2C%5Cn%20%20%20%20%20%20ToastAndroid.SHORT%2C%5Cn%20%20%20%20%20%20ToastAndroid.CENTER%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20showToastWithGravityAndOffset%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20ToastAndroid.showWithGravityAndOffset(%5Cn%20%20%20%20%20%20'A%20wild%20toast%20appeared!'%2C%5Cn%20%20%20%20%20%20ToastAndroid.LONG%2C%5Cn%20%20%20%20%20%20ToastAndroid.BOTTOM%2C%5Cn%20%20%20%20%20%2025%2C%5Cn%20%20%20%20%20%2050%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Toast%5C%22%20onPress%3D%7B()%20%3D%3E%20showToast()%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Toggle%20Toast%20With%20Gravity%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20showToastWithGravity()%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Toggle%20Toast%20With%20Gravity%20%26%20Offset%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20showToastWithGravityAndOffset()%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingTop%3A%20StatusBar.currentHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23888888'%2C%5Cn%20%20%20%20padding%3A%208%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"show",children:(0,s.jsx)(t.code,{children:"show()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static show(message: string, duration: number);\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"showwithgravity",children:(0,s.jsx)(t.code,{children:"showWithGravity()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static showWithGravity(message: string, duration: number, gravity: number);\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"showwithgravityandoffset",children:(0,s.jsx)(t.code,{children:"showWithGravityAndOffset()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static showWithGravityAndOffset(\n  message: string,\n  duration: number,\n  gravity: number,\n  xOffset: number,\n  yOffset: number,\n);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h3,{id:"short",children:(0,s.jsx)(t.code,{children:"SHORT"})}),"\n",(0,s.jsx)(t.p,{children:"Indicates the duration on the screen."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static SHORT: number;\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"long",children:(0,s.jsx)(t.code,{children:"LONG"})}),"\n",(0,s.jsx)(t.p,{children:"Indicates the duration on the screen."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static LONG: number;\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"top",children:(0,s.jsx)(t.code,{children:"TOP"})}),"\n",(0,s.jsx)(t.p,{children:"Indicates the position on the screen."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static TOP: number;\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"bottom",children:(0,s.jsx)(t.code,{children:"BOTTOM"})}),"\n",(0,s.jsx)(t.p,{children:"Indicates the position on the screen."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static BOTTOM: number;\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"center",children:(0,s.jsx)(t.code,{children:"CENTER"})}),"\n",(0,s.jsx)(t.p,{children:"Indicates the position on the screen."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static CENTER: number;\n"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},71426:(e,t,n)=>{var s=n(27378),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,r={},c=null,h=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,s)&&!d.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:o,type:e,key:c,ref:h,props:r,_owner:a.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>r});var s=n(27378);const o=s.createContext({});function r(e){const t=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||i:r(e),s.createElement(o.Provider,{value:a},t)}}}]);