/*! For license information please see 36fc15ca.9ce98b68.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[17101],{15371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var a=n(24246),r=n(71670),s=n(48375),i=n(86386),l=n(11674);const c={id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS"},d=void 0,o={id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.70/datepickerios.md",sourceDirName:".",slug:"/datepickerios",permalink:"/docs/0.70/datepickerios",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/datepickerios.md",tags:[],version:"0.70",lastUpdatedAt:1679052568,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS"}},u={},h=[{value:"Example",id:"example",level:3},{value:"Props",id:"props",level:2},{value:"<code>date</code>",id:"date",level:3},{value:"<code>onChange</code>",id:"onchange",level:3},{value:"<code>onDateChange</code>",id:"ondatechange",level:3},{value:"<code>maximumDate</code>",id:"maximumdate",level:3},{value:"<code>minimumDate</code>",id:"minimumdate",level:3},{value:"<code>minuteInterval</code>",id:"minuteinterval",level:3},{value:"<code>mode</code>",id:"mode",level:3},{value:"<code>locale</code>",id:"locale",level:3},{value:"<code>timeZoneOffsetInMinutes</code>",id:"timezoneoffsetinminutes",level:3},{value:"<code>initialDate</code>",id:"initialdate",level:3}];function p(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",code:"code",h3:"h3",div:"div",hr:"hr",h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Deprecated."})," Use one of the ",(0,a.jsx)(t.a,{href:"https://reactnative.directory/?search=datepicker",children:"community packages"})," instead."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"DatePickerIOS"})," to render a date/time picker (selector) on iOS. This is a controlled component, so you must hook in to the ",(0,a.jsx)(t.code,{children:"onDateChange"})," callback and update the ",(0,a.jsx)(t.code,{children:"date"})," prop in order for the component to update, otherwise the user's change will be reverted immediately to reflect ",(0,a.jsx)(t.code,{children:"props.date"})," as the source of truth."]}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(s.Z,{groupId:"syntax",queryString:!0,defaultValue:l.Z.defaultSyntax,values:l.Z.syntax,children:[(0,a.jsx)(i.Z,{value:"functional",children:(0,a.jsx)(t.div,{class:"snack-player","data-snack-name":"DatePickerIOS","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7BDatePickerIOS%2C%20View%2C%20StyleSheet%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%5Cn%20%20const%20%5BchosenDate%2C%20setChosenDate%5D%20%3D%20useState(new%20Date())%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CDatePickerIOS%5Cn%20%20%20%20%20%20%20%20date%3D%7BchosenDate%7D%5Cn%20%20%20%20%20%20%20%20onDateChange%3D%7BsetChosenDate%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(i.Z,{value:"classical",children:(0,a.jsx)(t.div,{class:"snack-player","data-snack-name":"DatePickerIOS","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%5Cnimport%20%7BDatePickerIOS%2C%20View%2C%20StyleSheet%7D%20from%20'react-native'%3B%5Cn%5Cnexport%20default%20class%20App%20extends%20Component%20%7B%5Cn%20%20constructor(props)%20%7B%5Cn%20%20%20%20super(props)%3B%5Cn%20%20%20%20this.state%20%3D%20%7BchosenDate%3A%20new%20Date()%7D%3B%5Cn%5Cn%20%20%20%20this.setDate%20%3D%20this.setDate.bind(this)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20setDate(newDate)%20%7B%5Cn%20%20%20%20this.setState(%7BchosenDate%3A%20newDate%7D)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CDatePickerIOS%5Cn%20%20%20%20%20%20%20%20%20%20date%3D%7Bthis.state.chosenDate%7D%5Cn%20%20%20%20%20%20%20%20%20%20onDateChange%3D%7Bthis.setDate%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,a.jsxs)(t.p,{children:["Inherits ",(0,a.jsx)(t.a,{href:"/docs/0.70/view#props",children:"View Props"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"date",children:(0,a.jsx)(t.code,{children:"date"})}),"\n",(0,a.jsx)(t.p,{children:"The currently selected date."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Date"}),(0,a.jsx)(t.td,{children:"Yes"})]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"onchange",children:(0,a.jsx)(t.code,{children:"onChange"})}),"\n",(0,a.jsx)(t.p,{children:"Date change handler."}),"\n",(0,a.jsx)(t.p,{children:"This is called when the user changes the date or time in the UI. The first and only argument is an Event. For getting the date the picker was changed to, use onDateChange instead."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"function"}),(0,a.jsx)(t.td,{children:"No"})]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"ondatechange",children:(0,a.jsx)(t.code,{children:"onDateChange"})}),"\n",(0,a.jsx)(t.p,{children:"Date change handler."}),"\n",(0,a.jsx)(t.p,{children:"This is called when the user changes the date or time in the UI. The first and only argument is a Date object representing the new date and time."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"function"}),(0,a.jsx)(t.td,{children:"Yes"})]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"maximumdate",children:(0,a.jsx)(t.code,{children:"maximumDate"})}),"\n",(0,a.jsx)(t.p,{children:"Maximum date."}),"\n",(0,a.jsx)(t.p,{children:"Restricts the range of possible date/time values."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Date"}),(0,a.jsx)(t.td,{children:"No"})]})})]}),"\n",(0,a.jsxs)(t.p,{children:["Example with ",(0,a.jsx)(t.code,{children:"maximumDate"})," set to December 31, 2017:"]}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:"/docs/assets/DatePickerIOS/maximumDate.gif",width:"360"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"minimumdate",children:(0,a.jsx)(t.code,{children:"minimumDate"})}),"\n",(0,a.jsx)(t.p,{children:"Minimum date."}),"\n",(0,a.jsx)(t.p,{children:"Restricts the range of possible date/time values."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Date"}),(0,a.jsx)(t.td,{children:"No"})]})})]}),"\n",(0,a.jsxs)(t.p,{children:["See ",(0,a.jsx)(t.a,{href:"#maximumdate",children:(0,a.jsx)(t.code,{children:"maximumDate"})})," for an example image."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"minuteinterval",children:(0,a.jsx)(t.code,{children:"minuteInterval"})}),"\n",(0,a.jsx)(t.p,{children:"The interval at which minutes can be selected."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)"}),(0,a.jsx)(t.td,{children:"No"})]})})]}),"\n",(0,a.jsxs)(t.p,{children:["Example with ",(0,a.jsx)(t.code,{children:"minuteInterval"})," set to ",(0,a.jsx)(t.code,{children:"10"}),":"]}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:"/docs/assets/DatePickerIOS/minuteInterval.png",width:"360"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"mode",children:(0,a.jsx)(t.code,{children:"mode"})}),"\n",(0,a.jsx)(t.p,{children:"The date picker mode."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"enum('date', 'time', 'datetime', 'countdown')"}),(0,a.jsx)(t.td,{children:"No"})]})})]}),"\n",(0,a.jsxs)(t.p,{children:["Example with ",(0,a.jsx)(t.code,{children:"mode"})," set to ",(0,a.jsx)(t.code,{children:"date"}),", ",(0,a.jsx)(t.code,{children:"time"}),", and ",(0,a.jsx)(t.code,{children:"datetime"}),": ",(0,a.jsx)(t.img,{src:n(88779).Z+"",width:"2154",height:"382"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"locale",children:(0,a.jsx)(t.code,{children:"locale"})}),"\n",(0,a.jsxs)(t.p,{children:["The locale for the date picker. Value needs to be a ",(0,a.jsx)(t.a,{href:"https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html",children:"Locale ID"}),"."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"String"}),(0,a.jsx)(t.td,{children:"No"})]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"timezoneoffsetinminutes",children:(0,a.jsx)(t.code,{children:"timeZoneOffsetInMinutes"})}),"\n",(0,a.jsx)(t.p,{children:"Timezone offset in minutes."}),"\n",(0,a.jsx)(t.p,{children:"By default, the date picker will use the device's timezone. With this parameter, it is possible to force a certain timezone offset. For instance, to show times in Pacific Standard Time, pass -7 * 60."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"number"}),(0,a.jsx)(t.td,{children:"No"})]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"initialdate",children:(0,a.jsx)(t.code,{children:"initialDate"})}),"\n",(0,a.jsx)(t.p,{children:"Provides an initial value that will change when the user starts selecting a date. It is useful for use-cases where you do not want to deal with listening to events and updating the date prop to keep the controlled state in sync. The controlled state has known bugs which causes it to go out of sync with native. The initialDate prop is intended to allow you to have native be source of truth."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Date"}),(0,a.jsx)(t.td,{children:"No"})]})})]})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(p,e)})):p(e)}},86386:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(27378),r=n(38944);const s={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,o=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&o(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&o(e,n,t[n]);return e};function h({children:e,hidden:t,className:n}){return a.createElement("div",u({role:"tabpanel",className:(0,r.Z)(s.tabItem,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>L});var a=n(27378),r=n(38944),s=n(12112),i=n(3620),l=n(69490),c=n(14953),d=n(27886),o=n(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))j.call(t,n)&&b(e,n,t[n]);return e},v=(e,t)=>h(e,p(t));function g(e){var t,n;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}function y(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return g(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function D({value:e,tabValues:t}){return t.some((t=>t.value===e))}function C({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,c._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(v(f({},n.location),{search:t.toString()}))}),[r,n])]}function w(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=y(e),[i,c]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!D({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[d,u]=C({queryString:n,groupId:r}),[h,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,o.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),m=(()=>{const e=null!=d?d:h;return D({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!D({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var k=n(14185);const O={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var S=Object.defineProperty,I=Object.defineProperties,E=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,A=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&A(e,n,t[n]);if(B)for(var n of B(t))P.call(t,n)&&A(e,n,t[n]);return e},_=(e,t)=>I(e,E(t));function q({className:e,block:t,selectedValue:n,selectValue:i,tabValues:l}){const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),o=e=>{const t=e.currentTarget,a=c.indexOf(t),r=l[a].value;r!==n&&(d(t),i(r))},u=e=>{var t,n;let a=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=null!=(t=c[n])?t:c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=null!=(n=c[t])?n:c[c.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:s})=>a.createElement("li",_(V({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>c.push(e),onKeyDown:u,onClick:o},s),{className:(0,r.Z)("tabs__item",O.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function N({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function R(e){const t=w(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",O.tabList)},a.createElement(q,V(V({},e),t)),a.createElement(N,V(V({},e),t)))}function L(e){const t=(0,k.Z)();return a.createElement(R,V({key:String(t)},e),g(e.children))}},11674:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":s?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,n)=>{var a=n(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,s={},d=null,o=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(o=t.ref),t)i.call(t,a)&&!c.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:d,ref:o,props:s,_owner:l.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},24246:(e,t,n)=>{e.exports=n(71426)},88779:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mode-089618b034a4d64bad0b39c4be929f4a.png"},71670:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>s});var a=n(27378);const r=a.createContext({});function s(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:s(e),a.createElement(r.Provider,{value:l},t)}}}]);