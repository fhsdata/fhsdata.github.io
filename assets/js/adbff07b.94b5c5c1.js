/*! For license information please see adbff07b.94b5c5c1.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[13966],{92308:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(24246),r=a(71670);a(48375),a(86386),a(11674);const o={id:"native-debugging",title:"Native Debugging"},l=void 0,i={id:"native-debugging",title:"Native Debugging",description:"Projects with Native Code Only",source:"@site/../docs/native-debugging.md",sourceDirName:".",slug:"/native-debugging",permalink:"/docs/next/native-debugging",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/native-debugging.md",tags:[],version:"current",lastUpdatedAt:1698252113,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{id:"native-debugging",title:"Native Debugging"},sidebar:"docs",previous:{title:"React DevTools",permalink:"/docs/next/react-devtools"},next:{title:"Debugging Release Builds",permalink:"/docs/next/debugging-release-builds"}},s={},u=[{value:"Accessing native logs",id:"accessing-native-logs",level:2},{value:"Debugging native code",id:"debugging-native-code",level:2},{value:"Android Studio",id:"android-studio",level:3},{value:"Xcode",id:"xcode",level:3}];function c(e){const t=Object.assign({p:"p",h2:"h2",pre:"pre",code:"code",admonition:"admonition",h3:"h3"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"banner-native-code-required",children:[(0,n.jsx)("h3",{children:"Projects with Native Code Only"}),(0,n.jsx)("p",{children:(0,n.jsxs)(t.p,{children:["The following section only applies to projects with native code exposed. If you are using the managed Expo workflow, see the guide on ",(0,n.jsx)("a",{href:"https://docs.expo.dev/workflow/prebuild/",target:"_blank",children:"prebuild"})," to use this API."]})})]}),"\n",(0,n.jsx)(t.h2,{id:"accessing-native-logs",children:"Accessing native logs"}),"\n",(0,n.jsx)(t.p,{children:"You can display the console logs for an iOS or Android app by using the following commands in a terminal while the app is running:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"# For Android:\nnpx react-native log-android\n# Or, for iOS:\nnpx react-native log-ios\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You may also access these through Debug > Open System Log\u2026 in the iOS Simulator or by running ",(0,n.jsx)(t.code,{children:'adb logcat "*:S" ReactNative:V ReactNativeJS:V'})," in a terminal while an Android app is running on a device or emulator."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"If you're using Expo CLI, console logs already appear in the same terminal output as the bundler."})}),"\n",(0,n.jsx)(t.h2,{id:"debugging-native-code",children:"Debugging native code"}),"\n",(0,n.jsx)(t.p,{children:"When working with native code, such as when writing native modules, you can launch the app from Android Studio or Xcode and take advantage of the native debugging features (setting up breakpoints, etc.) as you would in case of building a standard native app."}),"\n",(0,n.jsx)(t.p,{children:"Another option is to run your application using the React Native CLI and attach the native debugger of the native IDE (Android Studio or Xcode) to the process."}),"\n",(0,n.jsx)(t.h3,{id:"android-studio",children:"Android Studio"}),"\n",(0,n.jsx)(t.p,{children:'On Android Studio you can do this by going on the "Run" option on the menu bar, clicking on "Attach to Process..." and selecting the running React Native app.'}),"\n",(0,n.jsx)(t.h3,{id:"xcode",children:"Xcode"}),"\n",(0,n.jsx)(t.p,{children:'On Xcode click on "Debug" on the top menu bar, select the "Attach to process" option, and select the application in the list of "Likely Targets".'})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},86386:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(27378),r=a(38944);const o={tabItem:"tabItem_wHwb"};var l=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(i)for(var a of i(t))u.call(t,a)&&c(e,a,t[a]);return e};function p({children:e,hidden:t,className:a}){return n.createElement("div",d({role:"tabpanel",className:(0,r.Z)(o.tabItem,a)},{hidden:t}),e)}},48375:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(27378),r=a(38944),o=a(12112),l=a(3620),i=a(69490),s=a(14953),u=a(27886),c=a(7106),d=Object.defineProperty,p=Object.defineProperties,b=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))v.call(t,a)&&h(e,a,t[a]);if(g)for(var a of g(t))f.call(t,a)&&h(e,a,t[a]);return e},y=(e,t)=>p(e,b(t));function w(e){var t,a;return null!=(a=null==(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?a:[]}function j(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return w(e).map((({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n})))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function x({value:e,tabValues:t}){return t.some((t=>t.value===e))}function O({queryString:e=!1,groupId:t}){const a=(0,l.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace(y(m({},a.location),{search:t.toString()}))}),[r,a])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=j(e),[l,s]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(a=t.find((e=>e.default)))?a:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=O({queryString:a,groupId:r}),[p,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,r]=(0,c.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),g=(()=>{const e=null!=u?u:p;return x({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var S=a(14185);const E={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var I=Object.defineProperty,D=Object.defineProperties,N=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,T=(e,t,a)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,V=(e,t)=>{for(var a in t||(t={}))A.call(t,a)&&T(e,a,t[a]);if(_)for(var a of _(t))P.call(t,a)&&T(e,a,t[a]);return e},C=(e,t)=>D(e,N(t));function L({className:e,block:t,selectedValue:a,selectValue:l,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),r=i[n].value;r!==a&&(u(t),l(r))},d=e=>{var t,a;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=null!=(t=s[a])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=null!=(a=s[t])?a:s[s.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:o})=>n.createElement("li",C(V({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:c},o),{className:(0,r.Z)("tabs__item",E.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===e})}),null!=t?t:e))))}function R({lazy:e,children:t,selectedValue:a}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function q(e){const t=k(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",E.tabList)},n.createElement(L,V(V({},e),t)),n.createElement(R,V(V({},e),t)))}function Z(e){const t=(0,S.Z)();return n.createElement(q,V({key:String(t)},e),w(e.children))}},11674:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),l={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,a)=>{var n=a(27378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,a){var n,o={},u=null,c=null;for(n in void 0!==a&&(u=""+a),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:u,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},24246:(e,t,a)=>{e.exports=a(71426)},71670:(e,t,a)=>{a.d(t,{Zo:()=>i,ah:()=>o});var n=a(27378);const r=n.createContext({});function o(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function i({components:e,children:t,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||l:o(e),n.createElement(r.Provider,{value:i},t)}}}]);