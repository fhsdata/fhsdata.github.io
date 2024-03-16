/*! For license information please see ddd9a697.d54a7e24.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[67469],{39660:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(24246),a=t(71670);t(48375),t(86386),t(11674);const s={id:"panresponder",title:"PanResponder"},o=void 0,l={id:"panresponder",title:"PanResponder",description:"PanResponder reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize basic multi-touch gestures.",source:"@site/versioned_docs/version-0.72/panresponder.md",sourceDirName:".",slug:"/panresponder",permalink:"/docs/0.72/panresponder",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/panresponder.md",tags:[],version:"0.72",lastUpdatedAt:1687362382,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{id:"panresponder",title:"PanResponder"},sidebar:"api",previous:{title:"Linking",permalink:"/docs/0.72/linking"},next:{title:"PixelRatio",permalink:"/docs/0.72/pixelratio"}},i={},c=[{value:"Usage Pattern",id:"usage-pattern",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>create()</code>",id:"create",level:3}];function d(e){const n=Object.assign({p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PanResponder"})," reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize basic multi-touch gestures."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"PanResponder"})," holds an ",(0,r.jsx)(n.code,{children:"InteractionManager"})," handle to block long-running JS events from interrupting active gestures."]}),"\n",(0,r.jsxs)(n.p,{children:["It provides a predictable wrapper of the responder handlers provided by the ",(0,r.jsx)(n.a,{href:"/docs/0.72/gesture-responder-system",children:"gesture responder system"}),". For each handler, it provides a new ",(0,r.jsx)(n.code,{children:"gestureState"})," object alongside the native event object:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"onPanResponderMove: (event, gestureState) => {}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A native event is a synthetic touch event with form of ",(0,r.jsx)(n.a,{href:"pressevent",children:"PressEvent"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"gestureState"})," object has the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stateID"})," - ID of the gestureState- persisted as long as there's at least one touch on screen"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"moveX"})," - the latest screen coordinates of the recently-moved touch"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"moveY"})," - the latest screen coordinates of the recently-moved touch"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"x0"})," - the screen coordinates of the responder grant"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"y0"})," - the screen coordinates of the responder grant"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dx"})," - accumulated distance of the gesture since the touch started"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dy"})," - accumulated distance of the gesture since the touch started"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"vx"})," - current velocity of the gesture"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"vy"})," - current velocity of the gesture"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"numberActiveTouches"})," - Number of touches currently on screen"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage-pattern",children:"Usage Pattern"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const ExampleComponent = () => {\n  const panResponder = React.useRef(\n    PanResponder.create({\n      // Ask to be the responder:\n      onStartShouldSetPanResponder: (evt, gestureState) => true,\n      onStartShouldSetPanResponderCapture: (evt, gestureState) =>\n        true,\n      onMoveShouldSetPanResponder: (evt, gestureState) => true,\n      onMoveShouldSetPanResponderCapture: (evt, gestureState) =>\n        true,\n\n      onPanResponderGrant: (evt, gestureState) => {\n        // The gesture has started. Show visual feedback so the user knows\n        // what is happening!\n        // gestureState.d{x,y} will be set to zero now\n      },\n      onPanResponderMove: (evt, gestureState) => {\n        // The most recent move distance is gestureState.move{X,Y}\n        // The accumulated gesture distance since becoming responder is\n        // gestureState.d{x,y}\n      },\n      onPanResponderTerminationRequest: (evt, gestureState) =>\n        true,\n      onPanResponderRelease: (evt, gestureState) => {\n        // The user has released all touches while this view is the\n        // responder. This typically means a gesture has succeeded\n      },\n      onPanResponderTerminate: (evt, gestureState) => {\n        // Another component has become the responder, so this gesture\n        // should be cancelled\n      },\n      onShouldBlockNativeResponder: (evt, gestureState) => {\n        // Returns whether this component should block native components from becoming the JS\n        // responder. Returns true by default. Is currently only supported on android.\n        return true;\n      },\n    }),\n  ).current;\n\n  return <View {...panResponder.panHandlers} />;\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PanResponder"})," works with ",(0,r.jsx)(n.code,{children:"Animated"})," API to help build complex gestures in the UI. The following example contains an animated ",(0,r.jsx)(n.code,{children:"View"})," component which can be dragged freely across the screen"]}),"\n",(0,r.jsx)(n.div,{class:"snack-player","data-snack-name":"PanResponder","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseRef%7D%20from%20'react'%3B%5Cnimport%20%7BAnimated%2C%20View%2C%20StyleSheet%2C%20PanResponder%2C%20Text%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20pan%20%3D%20useRef(new%20Animated.ValueXY()).current%3B%5Cn%5Cn%20%20const%20panResponder%20%3D%20useRef(%5Cn%20%20%20%20PanResponder.create(%7B%5Cn%20%20%20%20%20%20onMoveShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%5Cn%20%20%20%20%20%20onPanResponderMove%3A%20Animated.event(%5Bnull%2C%20%7Bdx%3A%20pan.x%2C%20dy%3A%20pan.y%7D%5D)%2C%5Cn%20%20%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20pan.extractOffset()%3B%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%7D)%2C%5Cn%20%20).current%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.titleText%7D%3EDrag%20this%20box!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CAnimated.View%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7BtranslateX%3A%20pan.x%7D%2C%20%7BtranslateY%3A%20pan.y%7D%5D%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%7B...panResponder.panHandlers%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FAnimated.View%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20titleText%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20lineHeight%3A%2024%2C%5Cn%20%20%20%20fontWeight%3A%20'bold'%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20150%2C%5Cn%20%20%20%20width%3A%20150%2C%5Cn%20%20%20%20backgroundColor%3A%20'blue'%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,r.jsxs)(n.p,{children:["Try the ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/main/packages/rn-tester/js/examples/PanResponder/PanResponderExample.js",children:"PanResponder example in RNTester"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"create",children:(0,r.jsx)(n.code,{children:"create()"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"static create(config: PanResponderCallbacks): PanResponderInstance;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["config ",(0,r.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Refer below"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"config"})," object provides enhanced versions of all of the responder callbacks that provide not only the ",(0,r.jsx)(n.a,{href:"pressevent",children:(0,r.jsx)(n.code,{children:"PressEvent"})}),", but also the ",(0,r.jsx)(n.code,{children:"PanResponder"})," gesture state, by replacing the word ",(0,r.jsx)(n.code,{children:"Responder"})," with ",(0,r.jsx)(n.code,{children:"PanResponder"})," in each of the typical ",(0,r.jsx)(n.code,{children:"onResponder*"})," callbacks. For example, the ",(0,r.jsx)(n.code,{children:"config"})," object would look like:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"onMoveShouldSetPanResponder: (e, gestureState) => {...}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"onStartShouldSetPanResponder: (e, gestureState) => {...}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"onStartShouldSetPanResponderCapture: (e, gestureState) => {...}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"onPanResponderReject: (e, gestureState) => {...}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"onPanResponderGrant: (e, gestureState) => {...}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"onPanResponderStart: (e, gestureState) => {...}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"onPanResponderEnd: (e, gestureState) => {...}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"onPanResponderRelease: (e, gestureState) => {...}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"onPanResponderMove: (e, gestureState) => {...}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"onPanResponderTerminate: (e, gestureState) => {...}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"onPanResponderTerminationRequest: (e, gestureState) => {...}"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"onShouldBlockNativeResponder: (e, gestureState) => {...}"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In general, for events that have capture equivalents, we update the gestureState once in the capture phase and can use it in the bubble phase as well."}),"\n",(0,r.jsxs)(n.p,{children:["Be careful with ",(0,r.jsx)(n.code,{children:"onStartShould*"})," callbacks. They only reflect updated ",(0,r.jsx)(n.code,{children:"gestureState"})," for start/end events that bubble/capture to the Node. Once the node is the responder, you can rely on every start/end event being processed by the gesture and ",(0,r.jsx)(n.code,{children:"gestureState"})," being updated accordingly. (numberActiveTouches) may not be totally accurate unless you are the responder."]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},86386:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(27378),a=t(38944);const s={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&d(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&d(e,t,n[t]);return e};function h({children:e,hidden:n,className:t}){return r.createElement("div",u({role:"tabpanel",className:(0,a.Z)(s.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>q});var r=t(27378),a=t(38944),s=t(12112),o=t(3620),l=t(69490),i=t(14953),c=t(27886),d=t(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))v.call(n,t)&&g(e,t,n[t]);if(b)for(var t of b(n))f.call(n,t)&&g(e,t,n[t]);return e},x=(e,n)=>h(e,p(n));function j(e){var n,t;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function y(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return j(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function C({value:e,tabValues:n}){return n.some((n=>n.value===e))}function S({queryString:e=!1,groupId:n}){const t=(0,o.k6)(),a=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace(x(m({},t.location),{search:n.toString()}))}),[a,t])]}function w(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=y(e),[o,i]=(0,r.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!C({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=S({queryString:t,groupId:a}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,a]=(0,d.Nk)(n);return[t,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:a}),b=(()=>{const e=null!=c?c:h;return C({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!C({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var R=t(14185);const P={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var k=Object.defineProperty,D=Object.defineProperties,A=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,B=(e,n,t)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,I=(e,n)=>{for(var t in n||(n={}))O.call(n,t)&&B(e,t,n[t]);if(E)for(var t of E(n))T.call(n,t)&&B(e,t,n[t]);return e},V=(e,n)=>D(e,A(n));function _({className:e,block:n,selectedValue:t,selectValue:o,tabValues:l}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),a=l[r].value;a!==t&&(c(n),o(a))},u=e=>{var n,t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=null!=(n=i[t])?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=null!=(t=i[n])?t:i[i.length-1];break}}null==r||r.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e)},l.map((({value:e,label:n,attributes:s})=>r.createElement("li",V(I({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>i.push(e),onKeyDown:u,onClick:d},s),{className:(0,a.Z)("tabs__item",P.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function N({lazy:e,children:n,selectedValue:t}){const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function M(e){const n=w(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",P.tabList)},r.createElement(_,I(I({},e),n)),r.createElement(N,I(I({},e),n)))}function q(e){const n=(0,R.Z)();return r.createElement(M,I({key:String(n)},e),j(e.children))}},11674:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(63445);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:a?"macos":s?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,t)=>{var r=t(27378),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!i.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:d,props:s,_owner:l.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>s});var r=t(27378);const a=r.createContext({});function s(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||o:s(e),r.createElement(a.Provider,{value:l},n)}}}]);