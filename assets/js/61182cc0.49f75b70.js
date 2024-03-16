/*! For license information please see 61182cc0.49f75b70.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[28752],{87114:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=s(24246),t=s(71670);const o={id:"usewindowdimensions",title:"useWindowDimensions"},a=void 0,r={id:"usewindowdimensions",title:"useWindowDimensions",description:"useWindowDimensions automatically updates all of its values when screen size or font scale changes. You can get your application window's width and height like so:",source:"@site/versioned_docs/version-0.70/usewindowdimensions.md",sourceDirName:".",slug:"/usewindowdimensions",permalink:"/docs/0.70/usewindowdimensions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/usewindowdimensions.md",tags:[],version:"0.70",lastUpdatedAt:1704829831,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{id:"usewindowdimensions",title:"useWindowDimensions"},sidebar:"api",previous:{title:"useColorScheme",permalink:"/docs/0.70/usecolorscheme"},next:{title:"BackHandler",permalink:"/docs/0.70/backhandler"}},c={},d=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>fontScale</code>",id:"fontscale",level:3},{value:"<code>height</code>",id:"height",level:3},{value:"<code>scale</code>",id:"scale",level:3},{value:"<code>width</code>",id:"width",level:3}];function l(e){const n=Object.assign({pre:"pre",code:"code",p:"p",h2:"h2",div:"div",h3:"h3",hr:"hr",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import {useWindowDimensions} from 'react-native';\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useWindowDimensions"})," automatically updates all of its values when screen size or font scale changes. You can get your application window's width and height like so:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const {height, width} = useWindowDimensions();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"useWindowDimensions","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20useWindowDimensions%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%7B%20height%2C%20width%2C%20scale%2C%20fontScale%20%7D%20%3D%20useWindowDimensions()%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.header%7D%3E%5Cn%20%20%20%20%20%20%20%20Window%20Dimension%20Data%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%3EHeight%3A%20%7Bheight%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%3EWidth%3A%20%7Bwidth%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%3EFont%20scale%3A%20%7BfontScale%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%3EPixel%20ratio%3A%20%7Bscale%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2020%2C%5Cn%20%20%20%20marginBottom%3A%2012%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"fontscale",children:(0,i.jsx)(n.code,{children:"fontScale"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"useWindowDimensions().fontScale;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The scale of the font currently used. Some operating systems allow users to scale their font sizes larger or smaller for reading comfort. This property will let you know what is in effect."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"height",children:(0,i.jsx)(n.code,{children:"height"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"useWindowDimensions().height;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The height in pixels of the window or screen your app occupies."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"scale",children:(0,i.jsx)(n.code,{children:"scale"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"useWindowDimensions().scale;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The pixel ratio of the device your app is running on. The values can be:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1"})," which indicates that one point equals one pixel (usually PPI/DPI of 96, 76 on some platforms)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"2"})," or ",(0,i.jsx)(n.code,{children:"3"})," which indicates a Retina or high DPI display."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"width",children:(0,i.jsx)(n.code,{children:"width"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"useWindowDimensions().width;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The width in pixels of the window or screen your app occupies."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},71426:(e,n,s)=>{var i=s(27378),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var i,o={},d=null,l=null;for(i in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,i)&&!c.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:t,type:e,key:d,ref:l,props:o,_owner:r.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},24246:(e,n,s)=>{e.exports=s(71426)},71670:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>o});var i=s(27378);const t=i.createContext({});function o(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||a:o(e),i.createElement(t.Provider,{value:r},n)}}}]);