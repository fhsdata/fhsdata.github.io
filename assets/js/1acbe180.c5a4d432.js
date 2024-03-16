/*! For license information please see 1acbe180.c5a4d432.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[55270],{95291:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=t(24246),r=t(71670),s=t(48375),l=t(86386),i=t(11674);const o={id:"share",title:"Share"},c=void 0,d={id:"share",title:"Share",description:"Example",source:"@site/versioned_docs/version-0.70/share.md",sourceDirName:".",slug:"/share",permalink:"/docs/0.70/share",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/share.md",tags:[],version:"0.70",lastUpdatedAt:1679052568,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"share",title:"Share"},sidebar:"api",previous:{title:"RootTag",permalink:"/docs/0.70/roottag"},next:{title:"StyleSheet",permalink:"/docs/0.70/stylesheet"}},u={},h=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>share()</code>",id:"share",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>sharedAction</code>",id:"sharedaction",level:3},{value:'<code>dismissedAction</code> <div class="label ios">iOS</div>',id:"dismissedaction-ios",level:3}];function p(e){const a=Object.assign({h2:"h2",div:"div",h1:"h1",h3:"h3",code:"code",pre:"pre",p:"p",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",hr:"hr"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(s.Z,{groupId:"syntax",queryString:!0,defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,children:[(0,n.jsx)(l.Z,{value:"functional",children:(0,n.jsx)(a.div,{class:"snack-player","data-snack-name":"Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20ShareExample%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20%20%20try%20%7B%5Cn%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%5Cn%20%20%20%20%20%20%20%20message%3A%5Cn%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%5Cn%20%20%20%20%20%20%7D)%3B%5Cn%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%5Cn%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20dismissed%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%20catch%20(error)%20%7B%5Cn%20%20%20%20%20%20alert(error.message)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%5Cn%20%20%20%20%20%20%3CButton%20onPress%3D%7BonShare%7D%20title%3D%5C%22Share%5C%22%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20ShareExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,n.jsx)(l.Z,{value:"classical",children:(0,n.jsx)(a.div,{class:"snack-player","data-snack-name":"Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20ShareExample%20extends%20Component%20%7B%5Cn%20%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20%20%20try%20%7B%5Cn%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%5Cn%20%20%20%20%20%20%20%20message%3A%5Cn%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%5Cn%20%20%20%20%20%20%7D)%3B%5Cn%5Cn%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%5Cn%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20dismissed%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%20catch%20(error)%20%7B%5Cn%20%20%20%20%20%20alert(error.message)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7Bthis.onShare%7D%20title%3D%5C%22Share%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnexport%20default%20ShareExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,n.jsx)(a.h1,{id:"reference",children:"Reference"}),"\n",(0,n.jsx)(a.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(a.h3,{id:"share",children:(0,n.jsx)(a.code,{children:"share()"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:"static share(content, options)\n"})}),"\n",(0,n.jsx)(a.p,{children:"Open a dialog to share text content."}),"\n",(0,n.jsxs)(a.p,{children:["In iOS, returns a Promise which will be invoked with an object containing ",(0,n.jsx)(a.code,{children:"action"})," and ",(0,n.jsx)(a.code,{children:"activityType"}),". If the user dismissed the dialog, the Promise will still be resolved with action being ",(0,n.jsx)(a.code,{children:"Share.dismissedAction"})," and all the other keys being undefined. Note that some share options will not appear or work on the iOS simulator."]}),"\n",(0,n.jsxs)(a.p,{children:["In Android, returns a Promise which will always be resolved with action being ",(0,n.jsx)(a.code,{children:"Share.sharedAction"}),"."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Properties:"})}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Name"}),(0,n.jsx)(a.th,{children:"Type"}),(0,n.jsx)(a.th,{children:"Description"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsxs)(a.td,{children:["content ",(0,n.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,n.jsx)(a.td,{children:"object"}),(0,n.jsxs)(a.td,{children:[(0,n.jsx)(a.code,{children:"message"})," - a message to share",(0,n.jsx)("br",{}),(0,n.jsx)(a.code,{children:"url"})," - a URL to share ",(0,n.jsx)("div",{class:"label ios",children:"iOS"}),(0,n.jsx)("br",{}),(0,n.jsx)(a.code,{children:"title"})," - title of the message ",(0,n.jsx)("div",{class:"label android",children:"Android"}),(0,n.jsx)("hr",{}),"At least one of ",(0,n.jsx)(a.code,{children:"url"})," and ",(0,n.jsx)(a.code,{children:"message"})," is required."]})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"options"}),(0,n.jsx)(a.td,{children:"object"}),(0,n.jsxs)(a.td,{children:[(0,n.jsx)(a.code,{children:"dialogTitle"})," ",(0,n.jsx)("div",{class:"label android",children:"Android"}),(0,n.jsx)("br",{}),(0,n.jsx)(a.code,{children:"excludedActivityTypes"})," ",(0,n.jsx)("div",{class:"label ios",children:"iOS"}),(0,n.jsx)("br",{}),(0,n.jsx)(a.code,{children:"subject"})," - a subject to share via email ",(0,n.jsx)("div",{class:"label ios",children:"iOS"}),(0,n.jsx)("br",{}),(0,n.jsx)(a.code,{children:"tintColor"})," ",(0,n.jsx)("div",{class:"label ios",children:"iOS"})]})]})]})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(a.h3,{id:"sharedaction",children:(0,n.jsx)(a.code,{children:"sharedAction"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:"static sharedAction\n"})}),"\n",(0,n.jsx)(a.p,{children:"The content was successfully shared."}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsxs)(a.h3,{id:"dismissedaction-ios",children:[(0,n.jsx)(a.code,{children:"dismissedAction"})," ",(0,n.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:"static dismissedAction\n"})}),"\n",(0,n.jsx)(a.p,{children:"The dialog has been dismissed."})]})}const b=function(e={}){const{wrapper:a}=Object.assign({},(0,r.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(p,e)})):p(e)}},86386:(e,a,t)=>{t.d(a,{Z:()=>h});var n=t(27378),r=t(38944);const s={tabItem:"tabItem_wHwb"};var l=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,a,t)=>a in e?l(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&d(e,t,a[t]);if(i)for(var t of i(a))c.call(a,t)&&d(e,t,a[t]);return e};function h({children:e,hidden:a,className:t}){return n.createElement("div",u({role:"tabpanel",className:(0,r.Z)(s.tabItem,t)},{hidden:a}),e)}},48375:(e,a,t)=>{t.d(a,{Z:()=>L});var n=t(27378),r=t(38944),s=t(12112),l=t(3620),i=t(69490),o=t(14953),c=t(27886),d=t(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))m.call(a,t)&&v(e,t,a[t]);if(b)for(var t of b(a))f.call(a,t)&&v(e,t,a[t]);return e},g=(e,a)=>h(e,p(a));function j(e){var a,t;return null!=(t=null==(a=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:a.filter(Boolean))?t:[]}function y(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=a?a:function(e){return j(e).map((({props:{value:e,label:a,attributes:t,default:n}})=>({value:e,label:a,attributes:t,default:n})))}(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function C({value:e,tabValues:a}){return a.some((a=>a.value===e))}function w({queryString:e=!1,groupId:a}){const t=(0,l.k6)(),r=function({queryString:e=!1,groupId:a}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:e,groupId:a});return[(0,o._X)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace(g(x({},t.location),{search:a.toString()}))}),[r,t])]}function D(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,s=y(e),[l,o]=(0,n.useState)((()=>function({defaultValue:e,tabValues:a}){var t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!C({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(t=a.find((e=>e.default)))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[c,u]=w({queryString:t,groupId:r}),[h,p]=function({groupId:e}){const a=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(a);return[t,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:r}),b=(()=>{const e=null!=c?c:h;return C({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!C({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var S=t(14185);const k={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var B=Object.defineProperty,E=Object.defineProperties,O=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,I=(e,a,t)=>a in e?B(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,_=(e,a)=>{for(var t in a||(a={}))T.call(a,t)&&I(e,t,a[t]);if(A)for(var t of A(a))P.call(a,t)&&I(e,t,a[t]);return e},V=(e,a)=>E(e,O(a));function N({className:e,block:a,selectedValue:t,selectValue:l,tabValues:i}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const a=e.currentTarget,n=o.indexOf(a),r=i[n].value;r!==t&&(c(a),l(r))},u=e=>{var a,t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=null!=(a=o[t])?a:o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=null!=(t=o[a])?t:o[o.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},e)},i.map((({value:e,label:a,attributes:s})=>n.createElement("li",V(_({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>o.push(e),onKeyDown:u,onClick:d},s),{className:(0,r.Z)("tabs__item",k.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===e})}),null!=a?a:e))))}function F({lazy:e,children:a,selectedValue:t}){const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function R(e){const a=D(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},n.createElement(N,_(_({},e),a)),n.createElement(F,_(_({},e),a)))}function L(e){const a=(0,S.Z)();return n.createElement(R,_({key:String(a)},e),j(e.children))}},11674:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),l={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":s?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,a,t)=>{var n=t(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var n,s={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(d=a.ref),a)l.call(a,n)&&!o.hasOwnProperty(n)&&(s[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===s[n]&&(s[n]=a[n]);return{$$typeof:r,type:e,key:c,ref:d,props:s,_owner:i.current}}a.Fragment=s,a.jsx=c,a.jsxs=c},24246:(e,a,t)=>{e.exports=t(71426)},71670:(e,a,t)=>{t.d(a,{Zo:()=>i,ah:()=>s});var n=t(27378);const r=n.createContext({});function s(e){const a=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const l={};function i({components:e,children:a,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||l:s(e),n.createElement(r.Provider,{value:i},a)}}}]);