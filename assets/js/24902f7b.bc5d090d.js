/*! For license information please see 24902f7b.bc5d090d.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[40036],{75131:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=a(24246),n=a(71670),o=a(48375),l=a(86386),i=a(11674);const s={id:"dynamiccolorios",title:"DynamicColorIOS"},c=void 0,u={id:"dynamiccolorios",title:"DynamicColorIOS",description:"The DynamicColorIOS function is a platform color type specific to iOS.",source:"@site/../docs/dynamiccolorios.md",sourceDirName:".",slug:"/dynamiccolorios",permalink:"/docs/next/dynamiccolorios",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/dynamiccolorios.md",tags:[],version:"current",lastUpdatedAt:1679052568,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"dynamiccolorios",title:"DynamicColorIOS"},sidebar:"api",previous:{title:"ActionSheetIOS",permalink:"/docs/next/actionsheetios"},next:{title:"Settings",permalink:"/docs/next/settings"}},d={},p=[{value:"Developer notes",id:"developer-notes",level:4},{value:"Example",id:"example",level:2}];function b(e){const t=Object.assign({p:"p",code:"code",pre:"pre",h4:"h4",blockquote:"blockquote",a:"a",h2:"h2"},(0,n.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"DynamicColorIOS"})," function is a platform color type specific to iOS."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'DynamicColorIOS({\n  light: color,\n  dark: color,\n  highContrastLight: color, // (optional) will fallback to "light" if not provided\n  highContrastDark: color, // (optional) will fallback to "dark" if not provided\n});\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"DynamicColorIOS"})," takes a single argument as an object with two mandatory keys: ",(0,r.jsx)(t.code,{children:"dark"})," and ",(0,r.jsx)(t.code,{children:"light"}),", and two optional keys ",(0,r.jsx)(t.code,{children:"highContrastLight"})," and ",(0,r.jsx)(t.code,{children:"highContrastDark"}),'. These correspond to the colors you want to use for "light mode" and "dark mode" on iOS, and when high contrast accessibility mode is enabled, high contrast version of them.']}),"\n",(0,r.jsx)(t.p,{children:"At runtime, the system will choose which of the colors to display depending on the current system appearance and accessibility settings. Dynamic colors are useful for branding colors or other app specific colors that still respond automatically to system setting changes."}),"\n",(0,r.jsx)(t.h4,{id:"developer-notes",children:"Developer notes"}),"\n",(0,r.jsxs)(o.Z,{groupId:"guide",queryString:!0,defaultValue:"web",values:i.Z.getDevNotesTabs(["ios","web"]),children:[(0,r.jsx)(l.Z,{value:"web",children:(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["If you\u2019re familiar with ",(0,r.jsx)(t.code,{children:"@media (prefers-color-scheme: dark)"})," in CSS, this is similar! Only instead of defining all the colors in a media query, you define which color to use under what circumstances right there where you're using it. Neat!"]}),"\n"]})}),(0,r.jsx)(l.Z,{value:"ios",children:(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"DynamicColorIOS"})," function is similar to the iOS native methods ",(0,r.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/uicolor/3238040-colorwithdynamicprovider",children:(0,r.jsx)(t.code,{children:"UIColor colorWithDynamicProvider:"})})]}),"\n"]})})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import {DynamicColorIOS} from 'react-native';\n\nconst customDynamicTextColor = DynamicColorIOS({\n  dark: 'lightskyblue',\n  light: 'midnightblue',\n});\n\nconst customContrastDynamicTextColor = DynamicColorIOS({\n  dark: 'darkgray',\n  light: 'lightgray',\n  highContrastDark: 'black',\n  highContrastLight: 'white',\n});\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(b,e)})):b(e)}},86386:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(27378),n=a(38944);const o={tabItem:"tabItem_wHwb"};var l=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&u(e,a,t[a]);return e};function p({children:e,hidden:t,className:a}){return r.createElement("div",d({role:"tabpanel",className:(0,n.Z)(o.tabItem,a)},{hidden:t}),e)}},48375:(e,t,a)=>{a.d(t,{Z:()=>M});var r=a(27378),n=a(38944),o=a(12112),l=a(3620),i=a(69490),s=a(14953),c=a(27886),u=a(7106),d=Object.defineProperty,p=Object.defineProperties,b=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&v(e,a,t[a]);if(h)for(var a of h(t))f.call(t,a)&&v(e,a,t[a]);return e},y=(e,t)=>p(e,b(t));function w(e){var t,a;return null!=(a=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?a:[]}function x(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return w(e).map((({props:{value:e,label:t,attributes:a,default:r}})=>({value:e,label:t,attributes:a,default:r})))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function O({value:e,tabValues:t}){return t.some((t=>t.value===e))}function j({queryString:e=!1,groupId:t}){const a=(0,l.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,s._X)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace(y(g({},a.location),{search:t.toString()}))}),[n,a])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=x(e),[l,s]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){var a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!O({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=null!=(a=t.find((e=>e.default)))?a:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=j({queryString:a,groupId:n}),[p,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,n]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),h=(()=>{const e=null!=c?c:p;return O({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!O({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var S=a(14185);const I={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var D=Object.defineProperty,C=Object.defineProperties,E=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,N=(e,t,a)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,V=(e,t)=>{for(var a in t||(t={}))_.call(t,a)&&N(e,a,t[a]);if(T)for(var a of T(t))P.call(t,a)&&N(e,a,t[a]);return e},L=(e,t)=>C(e,E(t));function q({className:e,block:t,selectedValue:a,selectValue:l,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,r=s.indexOf(t),n=i[r].value;n!==a&&(c(t),l(n))},d=e=>{var t,a;let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;r=null!=(t=s[a])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;r=null!=(a=s[t])?a:s[s.length-1];break}}null==r||r.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:o})=>r.createElement("li",L(V({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:u},o),{className:(0,n.Z)("tabs__item",I.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===e})}),null!=t?t:e))))}function Z({lazy:e,children:t,selectedValue:a}){const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function A(e){const t=k(e);return r.createElement("div",{className:(0,n.Z)("tabs-container",I.tabList)},r.createElement(q,V(V({},e),t)),r.createElement(Z,V(V({},e),t)))}function M(e){const t=(0,S.Z)();return r.createElement(A,V({key:String(t)},e),w(e.children))}},11674:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(63445);const n=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),l={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:n?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:n?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,a)=>{var r=a(27378),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var r,o={},c=null,u=null;for(r in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:u,props:o,_owner:i.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},24246:(e,t,a)=>{e.exports=a(71426)},71670:(e,t,a)=>{a.d(t,{Zo:()=>i,ah:()=>o});var r=a(27378);const n=r.createContext({});function o(e){const t=r.useContext(n);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function i({components:e,children:t,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||l:o(e),r.createElement(n.Provider,{value:i},t)}}}]);