/*! For license information please see 78b274e1.881c72fe.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[34176],{54351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var a=n(24246),r=n(71670),l=n(48375),s=n(86386),o=n(11674);const i={id:"touchableopacity",title:"TouchableOpacity"},c=void 0,d={id:"touchableopacity",title:"TouchableOpacity",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/versioned_docs/version-0.71/touchableopacity.md",sourceDirName:".",slug:"/touchableopacity",permalink:"/docs/0.71/touchableopacity",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/touchableopacity.md",tags:[],version:"0.71",lastUpdatedAt:1679052568,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"touchableopacity",title:"TouchableOpacity"},sidebar:"components",previous:{title:"TouchableHighlight",permalink:"/docs/0.71/touchablehighlight"},next:{title:"TouchableWithoutFeedback",permalink:"/docs/0.71/touchablewithoutfeedback"}},u={},h=[{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2},{value:"TouchableWithoutFeedback Props",id:"touchablewithoutfeedback-props",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"<code>activeOpacity</code>",id:"activeopacity",level:3},{value:'<code>tvParallaxProperties</code> <div class="label ios">IOS</div>',id:"tvparallaxproperties-ios",level:3},{value:'<code>hasTVPreferredFocus</code> <div class="label ios">iOS</div>',id:"hastvpreferredfocus-ios",level:3},{value:'<code>nextFocusDown</code> <div class="label android">Android</div>',id:"nextfocusdown-android",level:3},{value:'<code>nextFocusForward</code> <div class="label android">Android</div>',id:"nextfocusforward-android",level:3},{value:'<code>nextFocusLeft</code> <div class="label android">Android</div>',id:"nextfocusleft-android",level:3},{value:'<code>nextFocusRight</code> <div class="label android">Android</div>',id:"nextfocusright-android",level:3},{value:'<code>nextFocusUp</code> <div class="label android">Android</div>',id:"nextfocusup-android",level:3}];function p(e){const t=Object.assign({blockquote:"blockquote",p:"p",a:"a",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",(0,a.jsx)(t.a,{href:"/docs/0.71/pressable",children:"Pressable"})," API."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it."}),"\n",(0,a.jsxs)(t.p,{children:["Opacity is controlled by wrapping the children in an ",(0,a.jsx)(t.code,{children:"Animated.View"}),", which is added to the view hierarchy. Be aware that this can affect layout."]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(l.Z,{groupId:"syntax",queryString:!0,defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,children:[(0,a.jsx)(s.Z,{value:"functional",children:(0,a.jsx)(t.div,{class:"snack-player","data-snack-name":"TouchableOpacity Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7BStyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bcount%2C%20setCount%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20onPress%20%3D%20()%20%3D%3E%20setCount(prevCount%20%3D%3E%20prevCount%20%2B%201)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3ECount%3A%20%7Bcount%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CTouchableOpacity%20style%3D%7Bstyles.button%7D%20onPress%3D%7BonPress%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EPress%20Here%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23DDDDDD'%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20countContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(s.Z,{value:"classical",children:(0,a.jsx)(t.div,{class:"snack-player","data-snack-name":"TouchableOpacity Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%5Cnimport%20%7BStyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20count%3A%200%2C%5Cn%20%20%7D%3B%5Cn%5Cn%20%20onPress%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20count%3A%20this.state.count%20%2B%201%2C%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20%7Bcount%7D%20%3D%20this.state%3B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3ECount%3A%20%7Bcount%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%20style%3D%7Bstyles.button%7D%20onPress%3D%7Bthis.onPress%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20Here%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23DDDDDD'%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20countContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,a.jsx)(t.h3,{id:"touchablewithoutfeedback-props",children:(0,a.jsx)(t.a,{href:"/docs/0.71/touchablewithoutfeedback#props",children:"TouchableWithoutFeedback Props"})}),"\n",(0,a.jsxs)(t.p,{children:["Inherits ",(0,a.jsx)(t.a,{href:"/docs/0.71/touchablewithoutfeedback#props",children:"TouchableWithoutFeedback Props"}),"."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"style",children:(0,a.jsx)(t.code,{children:"style"})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.th,{children:"Type"})})}),(0,a.jsx)(t.tbody,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"view-style-props",children:"View.style"})})})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"activeopacity",children:(0,a.jsx)(t.code,{children:"activeOpacity"})}),"\n",(0,a.jsxs)(t.p,{children:["Determines what the opacity of the wrapped view should be when touch is active. Defaults to ",(0,a.jsx)(t.code,{children:"0.2"}),"."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.th,{children:"Type"})})}),(0,a.jsx)(t.tbody,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.td,{children:"number"})})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.h3,{id:"tvparallaxproperties-ios",children:[(0,a.jsx)(t.code,{children:"tvParallaxProperties"})," ",(0,a.jsx)("div",{class:"label ios",children:"IOS"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"(Apple TV only)"})," Object with properties to control Apple TV parallax effects."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"enabled"}),": If ",(0,a.jsx)(t.code,{children:"true"}),", parallax effects are enabled. Defaults to ",(0,a.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"shiftDistanceX"}),": Defaults to ",(0,a.jsx)(t.code,{children:"2.0"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"shiftDistanceY"}),": Defaults to ",(0,a.jsx)(t.code,{children:"2.0"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"tiltAngle"}),": Defaults to ",(0,a.jsx)(t.code,{children:"0.05"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"magnification"}),": Defaults to ",(0,a.jsx)(t.code,{children:"1.0"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"pressMagnification"}),": Defaults to ",(0,a.jsx)(t.code,{children:"1.0"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"pressDuration"}),": Defaults to ",(0,a.jsx)(t.code,{children:"0.3"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"pressDelay"}),": Defaults to ",(0,a.jsx)(t.code,{children:"0.0"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.th,{children:"Type"})})}),(0,a.jsx)(t.tbody,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.td,{children:"object"})})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.h3,{id:"hastvpreferredfocus-ios",children:[(0,a.jsx)(t.code,{children:"hasTVPreferredFocus"})," ",(0,a.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"(Apple TV only)"})," TV preferred focus (see documentation for the View component)."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.th,{children:"Type"})})}),(0,a.jsx)(t.tbody,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.td,{children:"bool"})})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.h3,{id:"nextfocusdown-android",children:[(0,a.jsx)(t.code,{children:"nextFocusDown"})," ",(0,a.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,a.jsx)(t.p,{children:"TV next focus down (see documentation for the View component)."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.th,{children:"Type"})})}),(0,a.jsx)(t.tbody,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.td,{children:"number"})})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.h3,{id:"nextfocusforward-android",children:[(0,a.jsx)(t.code,{children:"nextFocusForward"})," ",(0,a.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,a.jsx)(t.p,{children:"TV next focus forward (see documentation for the View component)."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.th,{children:"Type"})})}),(0,a.jsx)(t.tbody,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.td,{children:"number"})})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.h3,{id:"nextfocusleft-android",children:[(0,a.jsx)(t.code,{children:"nextFocusLeft"})," ",(0,a.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,a.jsx)(t.p,{children:"TV next focus left (see documentation for the View component)."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.th,{children:"Type"})})}),(0,a.jsx)(t.tbody,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.td,{children:"number"})})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.h3,{id:"nextfocusright-android",children:[(0,a.jsx)(t.code,{children:"nextFocusRight"})," ",(0,a.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,a.jsx)(t.p,{children:"TV next focus right (see documentation for the View component)."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.th,{children:"Type"})})}),(0,a.jsx)(t.tbody,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.td,{children:"number"})})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.h3,{id:"nextfocusup-android",children:[(0,a.jsx)(t.code,{children:"nextFocusUp"})," ",(0,a.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,a.jsx)(t.p,{children:"TV next focus up (see documentation for the View component)."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.th,{children:"Type"})})}),(0,a.jsx)(t.tbody,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.td,{children:"number"})})})]})]})}const b=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(p,e)})):p(e)}},86386:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(27378),r=n(38944);const l={tabItem:"tabItem_wHwb"};var s=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&d(e,n,t[n]);return e};function h({children:e,hidden:t,className:n}){return a.createElement("div",u({role:"tabpanel",className:(0,r.Z)(l.tabItem,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>q});var a=n(27378),r=n(38944),l=n(12112),s=n(3620),o=n(69490),i=n(14953),c=n(27886),d=n(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&v(e,n,t[n]);if(b)for(var n of b(t))f.call(t,n)&&v(e,n,t[n]);return e},C=(e,t)=>h(e,p(t));function m(e){var t,n;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}function y(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return m(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function w({value:e,tabValues:t}){return t.some((t=>t.value===e))}function g({queryString:e=!1,groupId:t}){const n=(0,s.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(C(j({},n.location),{search:t.toString()}))}),[r,n])]}function D(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=y(e),[s,i]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,u]=g({queryString:n,groupId:r}),[h,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,d.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),b=(()=>{const e=null!=c?c:h;return w({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!w({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,l]),tabValues:l}}var k=n(14185);const A={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var O=Object.defineProperty,T=Object.defineProperties,E=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&P(e,n,t[n]);if(B)for(var n of B(t))S.call(t,n)&&P(e,n,t[n]);return e},F=(e,t)=>T(e,E(t));function _({className:e,block:t,selectedValue:n,selectValue:s,tabValues:o}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=i.indexOf(t),r=o[a].value;r!==n&&(c(t),s(r))},u=e=>{var t,n;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;a=null!=(t=i[n])?t:i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;a=null!=(n=i[t])?n:i[i.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:l})=>a.createElement("li",F(I({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>i.push(e),onKeyDown:u,onClick:d},l),{className:(0,r.Z)("tabs__item",A.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function L({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=D(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",A.tabList)},a.createElement(_,I(I({},e),t)),a.createElement(L,I(I({},e),t)))}function q(e){const t=(0,k.Z)();return a.createElement(N,I({key:String(t)},e),m(e.children))}},11674:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,n)=>{var a=n(27378),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,l={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,a)&&!i.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===l[a]&&(l[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:d,props:l,_owner:o.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>l});var a=n(27378);const r=a.createContext({});function l(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||s:l(e),a.createElement(r.Provider,{value:o},t)}}}]);