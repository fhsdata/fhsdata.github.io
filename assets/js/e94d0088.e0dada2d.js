/*! For license information please see e94d0088.e0dada2d.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[76458],{64130:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=t(24246),r=t(71670),s=t(48375),o=t(86386),l=t(11674);const i={id:"props",title:"Props"},c=void 0,u={id:"props",title:"Props",description:"Most components can be customized when they are created, with different parameters. These created parameters are called props, short for properties.",source:"@site/versioned_docs/version-0.72/props.md",sourceDirName:".",slug:"/props",permalink:"/docs/0.72/props",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/props.md",tags:[],version:"0.72",lastUpdatedAt:1687362382,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{id:"props",title:"Props"}},d={},p=[];function f(e){const a=Object.assign({p:"p",code:"code",div:"div",a:"a"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Most components can be customized when they are created, with different parameters. These created parameters are called ",(0,n.jsx)(a.code,{children:"props"}),", short for properties."]}),"\n",(0,n.jsxs)(a.p,{children:["For example, one basic React Native component is the ",(0,n.jsx)(a.code,{children:"Image"}),". When you create an image, you can use a prop named ",(0,n.jsx)(a.code,{children:"source"})," to control what image it shows."]}),"\n",(0,n.jsx)(a.div,{class:"snack-player","data-snack-name":"Props","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BImage%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20Bananas%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20let%20pic%20%3D%20%7B%5Cn%20%20%20%20uri%3A%20'https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fde%2FBananavarieties.jpg'%2C%5Cn%20%20%7D%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CImage%20source%3D%7Bpic%7D%20style%3D%7B%7Bwidth%3A%20193%2C%20height%3A%20110%2C%20marginTop%3A%2050%7D%7D%20%2F%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20Bananas%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,n.jsxs)(a.p,{children:["Notice the braces surrounding ",(0,n.jsx)(a.code,{children:"{pic}"})," - these embed the variable ",(0,n.jsx)(a.code,{children:"pic"})," into JSX. You can put any JavaScript expression inside braces in JSX."]}),"\n",(0,n.jsxs)(a.p,{children:["Your own components can also use ",(0,n.jsx)(a.code,{children:"props"}),". This lets you make a single component that is used in many different places in your app, with slightly different properties in each place by referring to ",(0,n.jsx)(a.code,{children:"props"})," in your ",(0,n.jsx)(a.code,{children:"render"})," function. Here's an example:"]}),"\n",(0,n.jsxs)(s.Z,{groupId:"language",queryString:!0,defaultValue:l.Z.defaultSnackLanguage,values:l.Z.snackLanguages,children:[(0,n.jsx)(o.Z,{value:"javascript",children:(0,n.jsx)(a.div,{class:"snack-player","data-snack-name":"Props","data-snack-description":"Example usage","data-snack-files":"%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BText%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20Greeting%20%3D%20props%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7BalignItems%3A%20'center'%7D%7D%3E%5Cn%20%20%20%20%20%20%3CText%3EHello%20%7Bprops.name%7D!%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20LotsOfGreetings%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7BalignItems%3A%20'center'%2C%20top%3A%2050%7D%7D%3E%5Cn%20%20%20%20%20%20%3CGreeting%20name%3D%5C%22Rexxar%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CGreeting%20name%3D%5C%22Jaina%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CGreeting%20name%3D%5C%22Valeera%5C%22%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20LotsOfGreetings%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,n.jsx)(o.Z,{value:"typescript",children:(0,n.jsx)(a.div,{class:"snack-player","data-snack-name":"Props","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BText%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cntype%20GreetingProps%20%3D%20%7B%5Cn%20%20name%3A%20string%3B%5Cn%7D%3B%5Cn%5Cnconst%20Greeting%20%3D%20(props%3A%20GreetingProps)%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7BalignItems%3A%20'center'%7D%7D%3E%5Cn%20%20%20%20%20%20%3CText%3EHello%20%7Bprops.name%7D!%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20LotsOfGreetings%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7BalignItems%3A%20'center'%2C%20top%3A%2050%7D%7D%3E%5Cn%20%20%20%20%20%20%3CGreeting%20name%3D%5C%22Rexxar%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CGreeting%20name%3D%5C%22Jaina%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CGreeting%20name%3D%5C%22Valeera%5C%22%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20LotsOfGreetings%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,n.jsxs)(a.p,{children:["Using ",(0,n.jsx)(a.code,{children:"name"})," as a prop lets us customize the ",(0,n.jsx)(a.code,{children:"Greeting"})," component, so we can reuse that component for each of our greetings. This example also uses the ",(0,n.jsx)(a.code,{children:"Greeting"})," component in JSX, similar to the ",(0,n.jsx)(a.a,{href:"intro-react-native-components",children:"Core Components"}),". The power to do this is what makes React so cool - if you find yourself wishing that you had a different set of UI primitives to work with, you can invent new ones."]}),"\n",(0,n.jsxs)(a.p,{children:["The other new thing going on here is the ",(0,n.jsx)(a.a,{href:"/docs/0.72/view",children:(0,n.jsx)(a.code,{children:"View"})})," component. A ",(0,n.jsx)(a.a,{href:"/docs/0.72/view",children:(0,n.jsx)(a.code,{children:"View"})})," is useful as a container for other components, to help control style and layout."]}),"\n",(0,n.jsxs)(a.p,{children:["With ",(0,n.jsx)(a.code,{children:"props"})," and the basic ",(0,n.jsx)(a.a,{href:"/docs/0.72/text",children:(0,n.jsx)(a.code,{children:"Text"})}),", ",(0,n.jsx)(a.a,{href:"/docs/0.72/image",children:(0,n.jsx)(a.code,{children:"Image"})}),", and ",(0,n.jsx)(a.a,{href:"/docs/0.72/view",children:(0,n.jsx)(a.code,{children:"View"})})," components, you can build a wide variety of static screens. To learn how to make your app change over time, you need to ",(0,n.jsx)(a.a,{href:"/docs/0.72/state",children:"learn about State"}),"."]})]})}const m=function(e={}){const{wrapper:a}=Object.assign({},(0,r.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},86386:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(27378),r=t(38944);const s={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,a,t)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&u(e,t,a[t]);if(l)for(var t of l(a))c.call(a,t)&&u(e,t,a[t]);return e};function p({children:e,hidden:a,className:t}){return n.createElement("div",d({role:"tabpanel",className:(0,r.Z)(s.tabItem,t)},{hidden:a}),e)}},48375:(e,a,t)=>{t.d(a,{Z:()=>G});var n=t(27378),r=t(38944),s=t(12112),o=t(3620),l=t(69490),i=t(14953),c=t(27886),u=t(7106),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,a,t)=>a in e?d(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))h.call(a,t)&&v(e,t,a[t]);if(m)for(var t of m(a))b.call(a,t)&&v(e,t,a[t]);return e},C=(e,a)=>p(e,f(a));function w(e){var a,t;return null!=(t=null==(a=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:a.filter(Boolean))?t:[]}function y(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=a?a:function(e){return w(e).map((({props:{value:e,label:a,attributes:t,default:n}})=>({value:e,label:a,attributes:t,default:n})))}(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function x({value:e,tabValues:a}){return a.some((a=>a.value===e))}function k({queryString:e=!1,groupId:a}){const t=(0,o.k6)(),r=function({queryString:e=!1,groupId:a}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:e,groupId:a});return[(0,i._X)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace(C(g({},t.location),{search:a.toString()}))}),[r,t])]}function D(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,s=y(e),[o,i]=(0,n.useState)((()=>function({defaultValue:e,tabValues:a}){var t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(t=a.find((e=>e.default)))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[c,d]=k({queryString:t,groupId:r}),[p,f]=function({groupId:e}){const a=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,u.Nk)(a);return[t,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:r}),m=(()=>{const e=null!=c?c:p;return x({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var j=t(14185);const E={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var B=Object.defineProperty,O=Object.defineProperties,A=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,T=(e,a,t)=>a in e?B(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,P=(e,a)=>{for(var t in a||(a={}))V.call(a,t)&&T(e,t,a[t]);if(S)for(var t of S(a))I.call(a,t)&&T(e,t,a[t]);return e},_=(e,a)=>O(e,A(a));function F({className:e,block:a,selectedValue:t,selectValue:o,tabValues:l}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const a=e.currentTarget,n=i.indexOf(a),r=l[n].value;r!==t&&(c(a),o(r))},d=e=>{var a,t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=null!=(a=i[t])?a:i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=null!=(t=i[a])?t:i[i.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},e)},l.map((({value:e,label:a,attributes:s})=>n.createElement("li",_(P({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>i.push(e),onKeyDown:d,onClick:u},s),{className:(0,r.Z)("tabs__item",E.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===e})}),null!=a?a:e))))}function L({lazy:e,children:a,selectedValue:t}){const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function N(e){const a=D(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",E.tabList)},n.createElement(F,P(P({},e),a)),n.createElement(L,P(P({},e),a)))}function G(e){const a=(0,j.Z)();return n.createElement(N,P({key:String(a)},e),w(e.children))}},11674:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":s?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,a,t)=>{var n=t(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var n,s={},c=null,u=null;for(n in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(u=a.ref),a)o.call(a,n)&&!i.hasOwnProperty(n)&&(s[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===s[n]&&(s[n]=a[n]);return{$$typeof:r,type:e,key:c,ref:u,props:s,_owner:l.current}}a.Fragment=s,a.jsx=c,a.jsxs=c},24246:(e,a,t)=>{e.exports=t(71426)},71670:(e,a,t)=>{t.d(a,{Zo:()=>l,ah:()=>s});var n=t(27378);const r=n.createContext({});function s(e){const a=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const o={};function l({components:e,children:a,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||o:s(e),n.createElement(r.Provider,{value:l},a)}}}]);