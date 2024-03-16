/*! For license information please see 3760029d.4d701a72.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[75157],{97817:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=t(24246),r=t(71670);const o={id:"switch",title:"Switch"},c=void 0,i={id:"switch",title:"Switch",description:"Renders a boolean input.",source:"@site/versioned_docs/version-0.72/switch.md",sourceDirName:".",slug:"/switch",permalink:"/docs/0.72/switch",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/switch.md",tags:[],version:"0.72",lastUpdatedAt:1692301784,formattedLastUpdatedAt:"Aug 17, 2023",frontMatter:{id:"switch",title:"Switch"},sidebar:"components",previous:{title:"StatusBar",permalink:"/docs/0.72/statusbar"},next:{title:"Text",permalink:"/docs/0.72/text"}},d={},l=[{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2},{value:"View Props",id:"view-props",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:'<code>ios_backgroundColor</code> <div class="label ios">iOS</div>',id:"ios_backgroundcolor-ios",level:3},{value:"<code>onChange</code>",id:"onchange",level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",level:3},{value:"<code>thumbColor</code>",id:"thumbcolor",level:3},{value:"<code>trackColor</code>",id:"trackcolor",level:3},{value:"<code>value</code>",id:"value",level:3}];function a(e){const n=Object.assign({p:"p",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Renders a boolean input."}),"\n",(0,s.jsxs)(n.p,{children:["This is a controlled component that requires an ",(0,s.jsx)(n.code,{children:"onValueChange"})," callback that updates the ",(0,s.jsx)(n.code,{children:"value"})," prop in order for the component to reflect user actions. If the ",(0,s.jsx)(n.code,{children:"value"})," prop is not updated, the component will continue to render the supplied ",(0,s.jsx)(n.code,{children:"value"})," prop instead of the expected result of any user actions."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.div,{class:"snack-player","data-snack-name":"Switch","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7BView%2C%20Switch%2C%20StyleSheet%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BisEnabled%2C%20setIsEnabled%5D%20%3D%20useState(false)%3B%5Cn%20%20const%20toggleSwitch%20%3D%20()%20%3D%3E%20setIsEnabled(previousState%20%3D%3E%20!previousState)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CSwitch%5Cn%20%20%20%20%20%20%20%20trackColor%3D%7B%7Bfalse%3A%20'%23767577'%2C%20true%3A%20'%2381b0ff'%7D%7D%5Cn%20%20%20%20%20%20%20%20thumbColor%3D%7BisEnabled%20%3F%20'%23f5dd4b'%20%3A%20'%23f4f3f4'%7D%5Cn%20%20%20%20%20%20%20%20ios_backgroundColor%3D%5C%22%233e3e3e%5C%22%5Cn%20%20%20%20%20%20%20%20onValueChange%3D%7BtoggleSwitch%7D%5Cn%20%20%20%20%20%20%20%20value%3D%7BisEnabled%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,s.jsx)(n.h3,{id:"view-props",children:(0,s.jsx)(n.a,{href:"/docs/0.72/view#props",children:"View Props"})}),"\n",(0,s.jsxs)(n.p,{children:["Inherits ",(0,s.jsx)(n.a,{href:"/docs/0.72/view#props",children:"View Props"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"disabled",children:(0,s.jsx)(n.code,{children:"disabled"})}),"\n",(0,s.jsx)(n.p,{children:"If true the user won't be able to toggle the switch."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"ios_backgroundcolor-ios",children:[(0,s.jsx)(n.code,{children:"ios_backgroundColor"})," ",(0,s.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,s.jsxs)(n.p,{children:["On iOS, custom color for the background. This background color can be seen either when the switch value is ",(0,s.jsx)(n.code,{children:"false"})," or when the switch is disabled (and the switch is translucent)."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/0.72/colors",children:"color"})})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"onchange",children:(0,s.jsx)(n.code,{children:"onChange"})}),"\n",(0,s.jsxs)(n.p,{children:["Invoked when the user tries to change the value of the switch. Receives the change event as an argument. If you want to only receive the new value, use ",(0,s.jsx)(n.code,{children:"onValueChange"})," instead."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"function"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"onvaluechange",children:(0,s.jsx)(n.code,{children:"onValueChange"})}),"\n",(0,s.jsxs)(n.p,{children:["Invoked when the user tries to change the value of the switch. Receives the new value as an argument. If you want to instead receive an event, use ",(0,s.jsx)(n.code,{children:"onChange"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"function"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"thumbcolor",children:(0,s.jsx)(n.code,{children:"thumbColor"})}),"\n",(0,s.jsx)(n.p,{children:"Color of the foreground switch grip. If this is set on iOS, the switch grip will lose its drop shadow."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/0.72/colors",children:"color"})})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"trackcolor",children:(0,s.jsx)(n.code,{children:"trackColor"})}),"\n",(0,s.jsx)(n.p,{children:"Custom colors for the switch track."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"iOS"}),": When the switch value is ",(0,s.jsx)(n.code,{children:"false"}),", the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use ",(0,s.jsx)(n.a,{href:"/docs/0.72/switch#ios_backgroundColor",children:(0,s.jsx)(n.code,{children:"ios_backgroundColor"})}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"md object: {false: [color](colors), true: [color](colors)}"})})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"value",children:(0,s.jsx)(n.code,{children:"value"})}),"\n",(0,s.jsx)(n.p,{children:"The value of the switch. If true the switch will be turned on. Default value is false."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"bool"})})})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},71426:(e,n,t)=>{var s=t(27378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,o={},l=null,a=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,s)&&!d.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:l,ref:a,props:o,_owner:i.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>o});var s=t(27378);const r=s.createContext({});function o(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:o(e),s.createElement(r.Provider,{value:i},n)}}}]);