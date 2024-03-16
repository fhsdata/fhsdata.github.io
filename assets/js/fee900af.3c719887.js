/*! For license information please see fee900af.3c719887.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[66330],{69953:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=t(24246),n=t(71670),l=t(48375),o=t(86386),i=t(11674);const s={id:"local-library-setup",title:"Local libraries setup"},u=void 0,c={id:"local-library-setup",title:"Local libraries setup",description:"A local library is a library containing views or modules that's local to your app and not published to a registry. This is different from the traditional setup for view and modules in the sense that a local library is decoupled from your app's native code.",source:"@site/../docs/local-library-setup.md",sourceDirName:".",slug:"/local-library-setup",permalink:"/docs/next/local-library-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/local-library-setup.md",tags:[],version:"current",lastUpdatedAt:1707500086,formattedLastUpdatedAt:"Feb 9, 2024",frontMatter:{id:"local-library-setup",title:"Local libraries setup"},sidebar:"docs",previous:{title:"Native Modules NPM Package Setup",permalink:"/docs/next/native-modules-setup"},next:{title:"Android Native UI Components",permalink:"/docs/next/native-components-android"}},d={},p=[{value:"Getting Started",id:"getting-started",level:3},{value:"Linking",id:"linking",level:3},{value:"Installing dependencies",id:"installing-dependencies",level:3},{value:"Using module inside your app",id:"using-module-inside-your-app",level:3}];function b(e){const a=Object.assign({p:"p",code:"code",pre:"pre",a:"a",h3:"h3"},(0,n.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"A local library is a library containing views or modules that's local to your app and not published to a registry. This is different from the traditional setup for view and modules in the sense that a local library is decoupled from your app's native code."}),"\n",(0,r.jsxs)(a.p,{children:["The local library is created outside of the ",(0,r.jsx)(a.code,{children:"android/"})," and ",(0,r.jsx)(a.code,{children:"ios/"})," folders and makes use of autolinking to integrate with your app. The structure with a local library may look like this:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-plaintext",children:"MyApp\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 modules <-- folder for your local libraries\n\u2502 \u2514\u2500\u2500 awesome-module <-- your local library\n\u251c\u2500\u2500 android\n\u251c\u2500\u2500 ios\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 index.js\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Since a local library's code exists outside of ",(0,r.jsx)(a.code,{children:"android/"})," and ",(0,r.jsx)(a.code,{children:"ios/"})," folders, it makes it easier to upgrade React Native versions in the future, copy to other projects etc."]}),"\n",(0,r.jsxs)(a.p,{children:["To create local library we will use ",(0,r.jsx)(a.a,{href:"https://callstack.github.io/react-native-builder-bob/create",children:"create-react-native-library"}),". This tool contains all the necessary templates."]}),"\n",(0,r.jsx)(a.h3,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(a.p,{children:"Inside your React Native application's root folder, run the following command:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"npx create-react-native-library@latest awesome-module\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Where ",(0,r.jsx)(a.code,{children:"awesome-module"})," is the name you would like for the new module. After going through the prompts, you will have a new folder called ",(0,r.jsx)(a.code,{children:"modules"})," in your project's root directory which contains the new module."]}),"\n",(0,r.jsx)(a.h3,{id:"linking",children:"Linking"}),"\n",(0,r.jsxs)(a.p,{children:["By default, the generated library is automatically linked to the project using ",(0,r.jsx)(a.code,{children:"link:"})," protocol when using Yarn and ",(0,r.jsx)(a.code,{children:"file:"})," when using npm:"]}),"\n",(0,r.jsxs)(l.Z,{groupId:"package-manager",queryString:!0,defaultValue:i.Z.defaultPackageManager,values:i.Z.packageManagers,children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-json",children:'"dependencies": {\n  "awesome-module": "file:./modules/awesome-module"\n}\n'})})}),(0,r.jsx)(o.Z,{value:"yarn",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-json",children:'"dependencies": {\n  "awesome-module": "link:./modules/awesome-module"\n}\n'})})})]}),"\n",(0,r.jsxs)(a.p,{children:["This creates a symlink to the library under ",(0,r.jsx)(a.code,{children:"node_modules"})," which makes autolinking work."]}),"\n",(0,r.jsx)(a.h3,{id:"installing-dependencies",children:"Installing dependencies"}),"\n",(0,r.jsx)(a.p,{children:"To link the module you need to install dependencies:"}),"\n",(0,r.jsxs)(l.Z,{groupId:"package-manager",queryString:!0,defaultValue:i.Z.defaultPackageManager,values:i.Z.packageManagers,children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"npm install\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"yarn install\n"})})})]}),"\n",(0,r.jsx)(a.h3,{id:"using-module-inside-your-app",children:"Using module inside your app"}),"\n",(0,r.jsx)(a.p,{children:"To use the module inside your app, you can import it by its name:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"import {multiply} from 'awesome-module';\n"})})]})}const m=function(e={}){const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?(0,r.jsx)(a,Object.assign({},e,{children:(0,r.jsx)(b,e)})):b(e)}},86386:(e,a,t)=>{t.d(a,{Z:()=>p});var r=t(27378),n=t(38944);const l={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&c(e,t,a[t]);if(i)for(var t of i(a))u.call(a,t)&&c(e,t,a[t]);return e};function p({children:e,hidden:a,className:t}){return r.createElement("div",d({role:"tabpanel",className:(0,n.Z)(l.tabItem,t)},{hidden:a}),e)}},48375:(e,a,t)=>{t.d(a,{Z:()=>q});var r=t(27378),n=t(38944),l=t(12112),o=t(3620),i=t(69490),s=t(14953),u=t(27886),c=t(7106),d=Object.defineProperty,p=Object.defineProperties,b=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,a,t)=>a in e?d(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,v=(e,a)=>{for(var t in a||(a={}))h.call(a,t)&&g(e,t,a[t]);if(m)for(var t of m(a))f.call(a,t)&&g(e,t,a[t]);return e},y=(e,a)=>p(e,b(a));function w(e){var a,t;return null!=(t=null==(a=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:a.filter(Boolean))?t:[]}function j(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=a?a:function(e){return w(e).map((({props:{value:e,label:a,attributes:t,default:r}})=>({value:e,label:a,attributes:t,default:r})))}(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function x({value:e,tabValues:a}){return a.some((a=>a.value===e))}function k({queryString:e=!1,groupId:a}){const t=(0,o.k6)(),n=function({queryString:e=!1,groupId:a}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:e,groupId:a});return[(0,s._X)(n),(0,r.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(t.location.search);a.set(n,e),t.replace(y(v({},t.location),{search:a.toString()}))}),[n,t])]}function O(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=j(e),[o,s]=(0,r.useState)((()=>function({defaultValue:e,tabValues:a}){var t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:l}))),[u,d]=k({queryString:t,groupId:n}),[p,b]=function({groupId:e}){const a=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,n]=(0,c.Nk)(a);return[t,(0,r.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:n}),m=(()=>{const e=null!=u?u:p;return x({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{m&&s(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var S=t(14185);const E={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var I=Object.defineProperty,N=Object.defineProperties,T=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,L=(e,a,t)=>a in e?I(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,Z=(e,a)=>{for(var t in a||(a={}))P.call(a,t)&&L(e,t,a[t]);if(_)for(var t of _(a))V.call(a,t)&&L(e,t,a[t]);return e},D=(e,a)=>N(e,T(a));function A({className:e,block:a,selectedValue:t,selectValue:o,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const a=e.currentTarget,r=s.indexOf(a),n=i[r].value;n!==t&&(u(a),o(n))},d=e=>{var a,t;let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;r=null!=(a=s[t])?a:s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;r=null!=(t=s[a])?t:s[s.length-1];break}}null==r||r.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},e)},i.map((({value:e,label:a,attributes:l})=>r.createElement("li",D(Z({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:c},l),{className:(0,n.Z)("tabs__item",E.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===e})}),null!=a?a:e))))}function C({lazy:e,children:a,selectedValue:t}){const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const e=n.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function M(e){const a=O(e);return r.createElement("div",{className:(0,n.Z)("tabs-container",E.tabList)},r.createElement(A,Z(Z({},e),a)),r.createElement(C,Z(Z({},e),a)))}function q(e){const a=(0,S.Z)();return r.createElement(M,Z({key:String(a)},e),w(e.children))}},11674:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(63445);const n=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:n?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:n?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,a,t)=>{var r=t(27378),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,a,t){var r,l={},u=null,c=null;for(r in void 0!==t&&(u=""+t),void 0!==a.key&&(u=""+a.key),void 0!==a.ref&&(c=a.ref),a)o.call(a,r)&&!s.hasOwnProperty(r)&&(l[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===l[r]&&(l[r]=a[r]);return{$$typeof:n,type:e,key:u,ref:c,props:l,_owner:i.current}}a.Fragment=l,a.jsx=u,a.jsxs=u},24246:(e,a,t)=>{e.exports=t(71426)},71670:(e,a,t)=>{t.d(a,{Zo:()=>i,ah:()=>l});var r=t(27378);const n=r.createContext({});function l(e){const a=r.useContext(n);return r.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const o={};function i({components:e,children:a,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:l(e),r.createElement(n.Provider,{value:i},a)}}}]);