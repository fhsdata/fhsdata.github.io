/*! For license information please see 28a6fbe0.08b590e3.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[23701],{14724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=n(24246),r=n(71670);const s={id:"activityindicator",title:"ActivityIndicator"},d=void 0,c={id:"activityindicator",title:"ActivityIndicator",description:"Displays a circular loading indicator.",source:"@site/../docs/activityindicator.md",sourceDirName:".",slug:"/activityindicator",permalink:"/docs/next/activityindicator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/activityindicator.md",tags:[],version:"current",lastUpdatedAt:1679758949,formattedLastUpdatedAt:"Mar 25, 2023",frontMatter:{id:"activityindicator",title:"ActivityIndicator"},sidebar:"components",previous:{title:"Core Components and APIs",permalink:"/docs/next/components-and-apis"},next:{title:"Button",permalink:"/docs/next/button"}},a={},o=[{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2},{value:"View Props",id:"view-props",level:3},{value:"<code>animating</code>",id:"animating",level:3},{value:"<code>color</code>",id:"color",level:3},{value:'<code>hidesWhenStopped</code> <div class="label ios">iOS</div>',id:"hideswhenstopped-ios",level:3},{value:"<code>size</code>",id:"size",level:3}];function l(e){const t=Object.assign({p:"p",h2:"h2",div:"div",h1:"h1",h3:"h3",a:"a",hr:"hr",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Displays a circular loading indicator."}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.div,{class:"snack-player","data-snack-name":"ActivityIndicator Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BActivityIndicator%2C%20StyleSheet%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%5Cn%20%20%20%20%3CActivityIndicator%20%2F%3E%5Cn%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20%2F%3E%5Cn%20%20%20%20%3CActivityIndicator%20size%3D%5C%22small%5C%22%20color%3D%5C%22%230000ff%5C%22%20%2F%3E%5Cn%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20color%3D%5C%22%2300ff00%5C%22%20%2F%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20horizontal%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20'row'%2C%5Cn%20%20%20%20justifyContent%3A%20'space-around'%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,i.jsx)(t.h3,{id:"view-props",children:(0,i.jsx)(t.a,{href:"view#props",children:"View Props"})}),"\n",(0,i.jsxs)(t.p,{children:["Inherits ",(0,i.jsx)(t.a,{href:"view#props",children:"View Props"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"animating",children:(0,i.jsx)(t.code,{children:"animating"})}),"\n",(0,i.jsxs)(t.p,{children:["Whether to show the indicator (",(0,i.jsx)(t.code,{children:"true"}),") or hide it (",(0,i.jsx)(t.code,{children:"false"}),")."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})})]})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"color",children:(0,i.jsx)(t.code,{children:"color"})}),"\n",(0,i.jsx)(t.p,{children:"The foreground color of the spinner."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"colors",children:"color"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"null"})," (system accent default color)",(0,i.jsx)("div",{class:"label android",children:"Android"}),(0,i.jsx)("hr",{}),(0,i.jsx)("ins",{style:{background:"#999"},className:"color-box"}),(0,i.jsx)(t.code,{children:"'#999999'"})," ",(0,i.jsx)("div",{className:"label ios",children:"iOS"})]})]})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.h3,{id:"hideswhenstopped-ios",children:[(0,i.jsx)(t.code,{children:"hidesWhenStopped"})," ",(0,i.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,i.jsx)(t.p,{children:"Whether the indicator should hide when not animating."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})})]})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"size",children:(0,i.jsx)(t.code,{children:"size"})}),"\n",(0,i.jsx)(t.p,{children:"Size of the indicator."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["enum(",(0,i.jsx)(t.code,{children:"'small'"}),", ",(0,i.jsx)(t.code,{children:"'large'"}),")",(0,i.jsx)("hr",{}),"number ",(0,i.jsx)("div",{class:"label android",children:"Android"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"'small'"})})]})})]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},71426:(e,t,n)=>{var i=n(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var i,s={},o=null,l=null;for(i in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(l=t.ref),t)d.call(t,i)&&!a.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:o,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>s});var i=n(27378);const r=i.createContext({});function s(e){const t=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||d:s(e),i.createElement(r.Provider,{value:c},t)}}}]);