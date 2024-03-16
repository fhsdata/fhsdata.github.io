/*! For license information please see 238efb50.3de4a08d.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[91510],{49510:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(24246),r=t(71670),l=t(48375),o=t(86386),s=t(11674);const i={id:"debugging-release-builds",title:"Debugging Release Builds"},u=void 0,c={id:"debugging-release-builds",title:"Debugging Release Builds",description:"Symbolicating a stack trace",source:"@site/versioned_docs/version-0.73/debugging-release-builds.md",sourceDirName:".",slug:"/debugging-release-builds",permalink:"/docs/debugging-release-builds",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/debugging-release-builds.md",tags:[],version:"0.73",lastUpdatedAt:1702040446,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{id:"debugging-release-builds",title:"Debugging Release Builds"},sidebar:"docs",previous:{title:"Native Debugging",permalink:"/docs/native-debugging"},next:{title:"Other Debugging Methods",permalink:"/docs/other-debugging-methods"}},d={},p=[{value:"Symbolicating a stack trace",id:"symbolicating-a-stack-trace",level:2},{value:"Enabling source maps",id:"enabling-source-maps",level:3},{value:"Using <code>metro-symbolicate</code>",id:"using-metro-symbolicate",level:3},{value:"Notes on source maps",id:"notes-on-source-maps",level:3}];function b(e){const a=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",strong:"strong",a:"a",h3:"h3",admonition:"admonition",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"symbolicating-a-stack-trace",children:"Symbolicating a stack trace"}),"\n",(0,n.jsx)(a.p,{children:"If a React Native app throws an unhandled exception in a release build, the output may be obfuscated and hard to read."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"07-15 10:58:25.820 18979 18998 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: Process: com.awesomeproject, PID: 18979 07-15 10:58:25.820 18979 18998 E AndroidRuntime: com.facebook.react.common.JavascriptException: Failed, js engine: hermes, stack:\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132161\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132084\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: f@1:131854\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: anonymous@1:131119\n"})}),"\n",(0,n.jsxs)(a.p,{children:["In the above stack trace, entries like ",(0,n.jsx)(a.code,{children:"p@1:132161"})," are minified function names and bytecode offsets. To debug these calls, we want to translate these into file, line, and function name, e.g. ",(0,n.jsx)(a.code,{children:"AwesomeProject/App.js:54:initializeMap"}),". This is known as ",(0,n.jsx)(a.strong,{children:"symbolication."})]}),"\n",(0,n.jsxs)(a.p,{children:["You can symbolicate minified function names and bytecode like the above by passing the stack trace and a generated source map to ",(0,n.jsx)(a.a,{href:"http://npmjs.com/package/metro-symbolicate",children:(0,n.jsx)(a.code,{children:"metro-symbolicate"})}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"enabling-source-maps",children:"Enabling source maps"}),"\n",(0,n.jsx)(a.p,{children:"Source maps are required to symbolicate stack traces. Make sure that source maps are enabled within the build config for the target platform."}),"\n",(0,n.jsxs)(l.Z,{groupId:"platform",queryString:!0,defaultValue:s.Z.defaultPlatform,values:s.Z.platforms,className:"pill-tabs",children:[(0,n.jsxs)(o.Z,{value:"android",children:[(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["On Android, source maps are ",(0,n.jsx)(a.strong,{children:"enabled"})," by default."]})}),(0,n.jsxs)(a.p,{children:["To enable source map generation, ensure the following ",(0,n.jsx)(a.code,{children:"hermesFlags"})," are present in ",(0,n.jsx)(a.code,{children:"android/app/build.gradle"}),"."]}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-groovy",children:'react {\n    hermesFlags = ["-O", "-output-source-map"]\n}\n'})}),(0,n.jsx)(a.p,{children:"If done correctly you should see the output location of the source map during Metro build output."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",children:"Writing bundle output to:, android/app/build/generated/assets/react/release/index.android.bundle\nWriting sourcemap output to:, android/app/build/intermediates/sourcemaps/react/release/index.android.bundle.packager.map\n"})})]}),(0,n.jsxs)(o.Z,{value:"ios",children:[(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["On iOS, source maps are ",(0,n.jsx)(a.strong,{children:"disabled"})," by default. Use the following instructions to enable them."]})}),(0,n.jsx)(a.p,{children:"To enable source map generation:"}),(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:'Open Xcode and edit the build phase "Bundle React Native code and images".'}),"\n",(0,n.jsxs)(a.li,{children:["Above the other exports, add a ",(0,n.jsx)(a.code,{children:"SOURCEMAP_FILE"})," entry with the desired output path."]}),"\n"]}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-diff",children:'+ SOURCEMAP_FILE="$(pwd)/../main.jsbundle.map";\n  WITH_ENVIRONMENT="../node_modules/react-native/scripts/xcode/with-environment.sh"\n'})}),(0,n.jsx)(a.p,{children:"If done correctly you should see the output location of the source map during Metro build output."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",children:"Writing bundle output to:, Build/Intermediates.noindex/ArchiveIntermediates/application/BuildProductsPath/Release-iphoneos/main.jsbundle\nWriting sourcemap output to:, Build/Intermediates.noindex/ArchiveIntermediates/application/BuildProductsPath/Release-iphoneos/main.jsbundle.map\n"})})]})]}),"\n",(0,n.jsxs)(a.h3,{id:"using-metro-symbolicate",children:["Using ",(0,n.jsx)(a.code,{children:"metro-symbolicate"})]}),"\n",(0,n.jsx)(a.p,{children:"With source maps being generated, we can now translate our stack traces."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"# Print usage instructions\nnpx metro-symbolicate\n\n# From a file containing the stack trace\nnpx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map < stacktrace.txt\n\n# From adb logcat (Android)\nadb logcat -d | npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map\n"})}),"\n",(0,n.jsx)(a.h3,{id:"notes-on-source-maps",children:"Notes on source maps"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Multiple source maps may be generated by the build process. Make sure to use the one in the location shown in the examples."}),"\n",(0,n.jsx)(a.li,{children:"Make sure that the source map you use corresponds to the exact commit of the crashing app. Small changes in source code can cause large differences in offsets."}),"\n",(0,n.jsxs)(a.li,{children:["If ",(0,n.jsx)(a.code,{children:"metro-symbolicate"})," exits immediately with success, make sure the input comes from a pipe or redirection and not from a terminal."]}),"\n"]})]})}const m=function(e={}){const{wrapper:a}=Object.assign({},(0,r.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(b,e)})):b(e)}},86386:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(27378),r=t(38944);const l={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&c(e,t,a[t]);if(s)for(var t of s(a))u.call(a,t)&&c(e,t,a[t]);return e};function p({children:e,hidden:a,className:t}){return n.createElement("div",d({role:"tabpanel",className:(0,r.Z)(l.tabItem,t)},{hidden:a}),e)}},48375:(e,a,t)=>{t.d(a,{Z:()=>Z});var n=t(27378),r=t(38944),l=t(12112),o=t(3620),s=t(69490),i=t(14953),u=t(27886),c=t(7106),d=Object.defineProperty,p=Object.defineProperties,b=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,a,t)=>a in e?d(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,v=(e,a)=>{for(var t in a||(a={}))g.call(a,t)&&f(e,t,a[t]);if(m)for(var t of m(a))h.call(a,t)&&f(e,t,a[t]);return e},y=(e,a)=>p(e,b(a));function x(e){var a,t;return null!=(t=null==(a=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:a.filter(Boolean))?t:[]}function j(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=a?a:function(e){return x(e).map((({props:{value:e,label:a,attributes:t,default:n}})=>({value:e,label:a,attributes:t,default:n})))}(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function w({value:e,tabValues:a}){return a.some((a=>a.value===e))}function k({queryString:e=!1,groupId:a}){const t=(0,o.k6)(),r=function({queryString:e=!1,groupId:a}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:e,groupId:a});return[(0,i._X)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace(y(v({},t.location),{search:a.toString()}))}),[r,t])]}function O(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,l=j(e),[o,i]=(0,n.useState)((()=>function({defaultValue:e,tabValues:a}){var t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(t=a.find((e=>e.default)))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[u,d]=k({queryString:t,groupId:r}),[p,b]=function({groupId:e}){const a=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,c.Nk)(a);return[t,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:r}),m=(()=>{const e=null!=u?u:p;return w({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!w({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var E=t(14185);const I={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var S=Object.defineProperty,P=Object.defineProperties,_=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,D=(e,a,t)=>a in e?S(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,R=(e,a)=>{for(var t in a||(a={}))A.call(a,t)&&D(e,t,a[t]);if(N)for(var t of N(a))T.call(a,t)&&D(e,t,a[t]);return e},V=(e,a)=>P(e,_(a));function M({className:e,block:a,selectedValue:t,selectValue:o,tabValues:s}){const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const a=e.currentTarget,n=i.indexOf(a),r=s[n].value;r!==t&&(u(a),o(r))},d=e=>{var a,t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=null!=(a=i[t])?a:i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=null!=(t=i[a])?t:i[i.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},e)},s.map((({value:e,label:a,attributes:l})=>n.createElement("li",V(R({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>i.push(e),onKeyDown:d,onClick:c},l),{className:(0,r.Z)("tabs__item",I.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===e})}),null!=a?a:e))))}function C({lazy:e,children:a,selectedValue:t}){const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function L(e){const a=O(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",I.tabList)},n.createElement(M,R(R({},e),a)),n.createElement(C,R(R({},e),a)))}function Z(e){const a=(0,E.Z)();return n.createElement(L,R({key:String(a)},e),x(e.children))}},11674:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,a,t)=>{var n=t(27378),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,a,t){var n,l={},u=null,c=null;for(n in void 0!==t&&(u=""+t),void 0!==a.key&&(u=""+a.key),void 0!==a.ref&&(c=a.ref),a)o.call(a,n)&&!i.hasOwnProperty(n)&&(l[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===l[n]&&(l[n]=a[n]);return{$$typeof:r,type:e,key:u,ref:c,props:l,_owner:s.current}}a.Fragment=l,a.jsx=u,a.jsxs=u},24246:(e,a,t)=>{e.exports=t(71426)},71670:(e,a,t)=>{t.d(a,{Zo:()=>s,ah:()=>l});var n=t(27378);const r=n.createContext({});function l(e){const a=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const o={};function s({components:e,children:a,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||o:l(e),n.createElement(r.Provider,{value:s},a)}}}]);