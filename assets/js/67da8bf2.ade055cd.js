/*! For license information please see 67da8bf2.ade055cd.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[41806],{10019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(24246),r=n(71670),o=n(48375),s=n(86386),i=n(11674);const l={id:"getting-started",title:"Introduction",description:"This helpful guide lays out the prerequisites for learning React Native, using these docs, and setting up your environment."},c=void 0,u={id:"getting-started",title:"Introduction",description:"This helpful guide lays out the prerequisites for learning React Native, using these docs, and setting up your environment.",source:"@site/versioned_docs/version-0.70/introduction.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/0.70/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/introduction.md",tags:[],version:"0.70",lastUpdatedAt:1694701339,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{id:"getting-started",title:"Introduction",description:"This helpful guide lays out the prerequisites for learning React Native, using these docs, and setting up your environment."},sidebar:"docs",next:{title:"Core Components and Native Components",permalink:"/docs/0.70/intro-react-native-components"}},d={},p=[{value:"How to use these docs",id:"how-to-use-these-docs",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Interactive examples",id:"interactive-examples",level:2},{value:"Function Components and Class Components",id:"function-components-and-class-components",level:2},{value:"Developer Notes",id:"developer-notes",level:2},{value:"Formatting",id:"formatting",level:2}];function f(e){const t=Object.assign({p:"p",h2:"h2",a:"a",blockquote:"blockquote",div:"div",code:"code",strong:"strong",hr:"hr"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"content-banner",children:[(0,a.jsxs)(t.p,{children:["Welcome to the very start of your React Native journey! If you're looking for environment setup instructions, they've moved to ",(0,a.jsx)("a",{href:"environment-setup",children:"their own section"}),". Continue reading for an introduction to the documentation, Native Components, React, and more!"]}),(0,a.jsx)("img",{className:"content-banner-img",src:"/docs/assets/p_android-ios-devices.svg",alt:" "})]}),"\n",(0,a.jsx)(t.p,{children:"Many different kinds of people use React Native: from advanced iOS developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background."}),"\n",(0,a.jsx)(t.h2,{id:"how-to-use-these-docs",children:"How to use these docs"}),"\n",(0,a.jsxs)(t.p,{children:["You can start here and read through these docs linearly like a book; or you can read the specific sections you need. Already familiar with React? You can skip ",(0,a.jsx)(t.a,{href:"intro-react",children:"that section"}),"\u2014or read it for a light refresher."]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.p,{children:["To work with React Native, you will need to have an understanding of JavaScript fundamentals. If you\u2019re new to JavaScript or need a refresher, you can ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",children:"dive in"})," or ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript",children:"brush up"})," at Mozilla Developer Network."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"While we do our best to assume no prior knowledge of React, Android, or iOS development, these are valuable topics of study for the aspiring React Native developer. Where sensible, we have linked to resources and articles that go more in depth."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"interactive-examples",children:"Interactive examples"}),"\n",(0,a.jsx)(t.p,{children:"This introduction lets you get started immediately in your browser with interactive examples like this one:"}),"\n",(0,a.jsx)(t.div,{class:"snack-player","data-snack-name":"Hello World","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20YourApp%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20justifyContent%3A%20%5C%22center%5C%22%2C%20alignItems%3A%20%5C%22center%5C%22%20%7D%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%5Cn%20%20%20%20%20%20%20%20Try%20editing%20me!%20%F0%9F%8E%89%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnexport%20default%20YourApp%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,a.jsx)(t.p,{children:'The above is a Snack Player. It\u2019s a handy tool created by Expo to embed and run React Native projects and share how they render in platforms like Android and iOS. The code is live and editable, so you can play directly with it in your browser. Go ahead and try changing the "Try editing me!" text above to "Hello, world!"'}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Optionally, if you want to setup a local development environment, ",(0,a.jsx)(t.a,{href:"environment-setup",children:"you can follow our guide to setting up your environment on your local machine"})," and paste the code examples into your ",(0,a.jsx)(t.code,{children:"App.js"})," file there. (If you are a web developer, you may already have a local environment set up for mobile browser testing!)"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"function-components-and-class-components",children:"Function Components and Class Components"}),"\n",(0,a.jsx)(t.p,{children:"With React, you can make components using either classes or functions. Originally, class components were the only components that could have state. But since the introduction of React's Hooks API, you can add state and more to function components."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/blog/2019/03/12/releasing-react-native-059",children:"Hooks were introduced in React Native 0.59."}),", and because Hooks are the future-facing way to write your React components, we wrote this introduction using function component examples. Where useful, we also cover class components under a toggle like so:"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"syntax",queryString:!0,defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,children:[(0,a.jsx)(s.Z,{value:"functional",children:(0,a.jsx)(t.div,{class:"snack-player","data-snack-name":"Hello World Function Component","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20HelloWorldApp%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7B%5Cn%20%20%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20%20%20alignItems%3A%20'center'%5Cn%20%20%20%20%7D%7D%3E%5Cn%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnexport%20default%20HelloWorldApp%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(s.Z,{value:"classical",children:(0,a.jsx)(t.div,{class:"snack-player","data-snack-name":"Hello World Class Component","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20HelloWorldApp%20extends%20Component%20%7B%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnexport%20default%20HelloWorldApp%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsxs)(t.p,{children:["You can find more examples of class components in ",(0,a.jsx)(t.a,{href:"/versions",children:"previous versions of this documentation"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"developer-notes",children:"Developer Notes"}),"\n",(0,a.jsx)(t.p,{children:"People from many different development backgrounds are learning React Native. You may have experience with a range of technologies, from web to Android to iOS and more. We try to write for developers from all backgrounds. Sometimes we provide explanations specific to one platform or another like so:"}),"\n",(0,a.jsxs)(o.Z,{groupId:"guide",queryString:!0,defaultValue:"web",values:i.Z.getDevNotesTabs(["android","ios","web"]),children:[(0,a.jsx)(s.Z,{value:"android",children:(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Android developers may be familiar with this concept."}),"\n"]})}),(0,a.jsx)(s.Z,{value:"ios",children:(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"iOS developers may be familiar with this concept."}),"\n"]})}),(0,a.jsx)(s.Z,{value:"web",children:(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Web developers may be familiar with this concept."}),"\n"]})})]}),"\n",(0,a.jsx)(t.h2,{id:"formatting",children:"Formatting"}),"\n",(0,a.jsxs)(t.p,{children:["Menu paths are written in bold and use carets to navigate submenus. Example: ",(0,a.jsx)(t.strong,{children:"Android Studio > Preferences"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.p,{children:["Now that you know how this guide works, it's time to get to know the foundation of React Native: ",(0,a.jsx)(t.a,{href:"/docs/0.70/intro-react-native-components",children:"Native Components"}),"."]})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(f,e)})):f(e)}},86386:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(27378),r=n(38944);const o={tabItem:"tabItem_wHwb"};var s=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&u(e,n,t[n]);return e};function p({children:e,hidden:t,className:n}){return a.createElement("div",d({role:"tabpanel",className:(0,r.Z)(o.tabItem,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>W});var a=n(27378),r=n(38944),o=n(12112),s=n(3620),i=n(69490),l=n(14953),c=n(27886),u=n(7106),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))v.call(t,n)&&b(e,n,t[n]);return e},y=(e,t)=>p(e,f(t));function w(e){var t,n;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}function C(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return w(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x({value:e,tabValues:t}){return t.some((t=>t.value===e))}function k({queryString:e=!1,groupId:t}){const n=(0,s.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(y(g({},n.location),{search:t.toString()}))}),[r,n])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=C(e),[s,l]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,d]=k({queryString:n,groupId:r}),[p,f]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,u.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),m=(()=>{const e=null!=c?c:p;return x({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!x({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var E=n(14185);const O={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var D=Object.defineProperty,S=Object.defineProperties,A=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,B=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&B(e,n,t[n]);if(I)for(var n of I(t))N.call(t,n)&&B(e,n,t[n]);return e},V=(e,t)=>S(e,A(t));function R({className:e,block:t,selectedValue:n,selectValue:s,tabValues:i}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),r=i[a].value;r!==n&&(c(t),s(r))},d=e=>{var t,n;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;a=null!=(t=l[n])?t:l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;a=null!=(n=l[t])?n:l[l.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:o})=>a.createElement("li",V(_({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>l.push(e),onKeyDown:d,onClick:u},o),{className:(0,r.Z)("tabs__item",O.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function q({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function P(e){const t=j(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",O.tabList)},a.createElement(R,_(_({},e),t)),a.createElement(q,_(_({},e),t)))}function W(e){const t=(0,E.Z)();return a.createElement(P,_({key:String(t)},e),w(e.children))}},11674:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,n)=>{var a=n(27378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,o={},c=null,u=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:u,props:o,_owner:i.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>o});var a=n(27378);const r=a.createContext({});function o(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:o(e),a.createElement(r.Provider,{value:i},t)}}}]);