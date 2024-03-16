/*! For license information please see 76e173fc.aade66d6.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[7135],{51418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=t(24246),d=t(71670);const r={id:"segmentedcontrolios",title:"\ud83d\udea7 SegmentedControlIOS"},l=void 0,c={id:"segmentedcontrolios",title:"\ud83d\udea7 SegmentedControlIOS",description:"Removed from React Native. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.71/segmentedcontrolios.md",sourceDirName:".",slug:"/segmentedcontrolios",permalink:"/docs/0.71/segmentedcontrolios",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/segmentedcontrolios.md",tags:[],version:"0.71",lastUpdatedAt:1673540325,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{id:"segmentedcontrolios",title:"\ud83d\udea7 SegmentedControlIOS"}},i={},o=[{value:"Programmatically changing selected index",id:"programmatically-changing-selected-index",level:4},{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"<code>momentary</code>",id:"momentary",level:3},{value:"<code>onChange</code>",id:"onchange",level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",level:3},{value:"<code>selectedIndex</code>",id:"selectedindex",level:3},{value:"<code>tintColor</code>",id:"tintcolor",level:3},{value:"<code>values</code>",id:"values",level:3}];function a(e){const n=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",code:"code",h4:"h4",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Removed from React Native."})," Use one of the ",(0,s.jsx)(n.a,{href:"https://reactnative.directory/?search=segmentedcontrol",children:"community packages"})," instead."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Uses ",(0,s.jsx)(n.code,{children:"SegmentedControlIOS"})," to render a UISegmentedControl iOS."]}),"\n",(0,s.jsx)(n.h4,{id:"programmatically-changing-selected-index",children:"Programmatically changing selected index"}),"\n",(0,s.jsx)(n.p,{children:"The selected index can be changed on the fly by assigning the selectedIndex prop to a state variable, then changing that variable. Note that the state variable would need to be updated as the user selects a value and changes the index, as shown in the example below."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.div,{class:"snack-player","data-snack-name":"SegmentedControlIOS Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7BSegmentedControlIOS%2C%20StyleSheet%2C%20Text%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bindex%2C%20setIndex%5D%20%3D%20useState(0)%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CSegmentedControlIOS%5Cn%20%20%20%20%20%20%20%20values%3D%7B%5B'One'%2C%20'Two'%5D%7D%5Cn%20%20%20%20%20%20%20%20selectedIndex%3D%7Bindex%7D%5Cn%20%20%20%20%20%20%20%20onChange%3D%7Bevent%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20setIndex(event.nativeEvent.selectedSegmentIndex)%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESelected%20index%3A%20%7Bindex%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20padding%3A%2024%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20marginTop%3A%2024%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(n.p,{children:["Inherits ",(0,s.jsx)(n.a,{href:"/docs/0.71/view#props",children:"View Props"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"enabled",children:(0,s.jsx)(n.code,{children:"enabled"})}),"\n",(0,s.jsx)(n.p,{children:"If false the user won't be able to interact with the control. Default value is true."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"momentary",children:(0,s.jsx)(n.code,{children:"momentary"})}),"\n",(0,s.jsxs)(n.p,{children:["If true, then selecting a segment won't persist visually. The ",(0,s.jsx)(n.code,{children:"onValueChange"})," callback will still work as expected."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"onchange",children:(0,s.jsx)(n.code,{children:"onChange"})}),"\n",(0,s.jsx)(n.p,{children:"Callback that is called when the user taps a segment; passes the event as an argument"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"onvaluechange",children:(0,s.jsx)(n.code,{children:"onValueChange"})}),"\n",(0,s.jsx)(n.p,{children:"Callback that is called when the user taps a segment; passes the segment's value as an argument"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"selectedindex",children:(0,s.jsx)(n.code,{children:"selectedIndex"})}),"\n",(0,s.jsxs)(n.p,{children:["The index in ",(0,s.jsx)(n.code,{children:"props.values"})," of the segment to be (pre)selected."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"tintcolor",children:(0,s.jsx)(n.code,{children:"tintColor"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," ",(0,s.jsx)(n.code,{children:"tintColor"})," is not supported on the iOS 13+."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Accent color of the control."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"values",children:(0,s.jsx)(n.code,{children:"values"})}),"\n",(0,s.jsx)(n.p,{children:"The labels for the control's segment buttons, in order."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"array of string"}),(0,s.jsx)(n.td,{children:"No"})]})})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},71426:(e,n,t)=>{var s=t(27378),d=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var s,r={},o=null,a=null;for(s in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,s)&&!i.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:d,type:e,key:o,ref:a,props:r,_owner:c.current}}n.Fragment=r,n.jsx=o,n.jsxs=o},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>r});var s=t(27378);const d=s.createContext({});function r(e){const n=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||l:r(e),s.createElement(d.Provider,{value:c},n)}}}]);