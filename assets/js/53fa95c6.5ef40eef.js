/*! For license information please see 53fa95c6.5ef40eef.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[42819],{21865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>C,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(24246),i=t(71670);const a={id:"vibration",title:"Vibration"},s=void 0,o={id:"vibration",title:"Vibration",description:"Vibrates the device.",source:"@site/versioned_docs/version-0.73/vibration.md",sourceDirName:".",slug:"/vibration",permalink:"/docs/vibration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/vibration.md",tags:[],version:"0.73",lastUpdatedAt:1702040446,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{id:"vibration",title:"Vibration"},sidebar:"api",previous:{title:"Transforms",permalink:"/docs/transforms"},next:{title:"useColorScheme",permalink:"/docs/usecolorscheme"}},d={},c=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>cancel()</code>",id:"cancel",level:3},{value:"<code>vibrate()</code>",id:"vibrate",level:3}];function l(e){const n=Object.assign({p:"p",h2:"h2",div:"div",blockquote:"blockquote",code:"code",hr:"hr",h1:"h1",h3:"h3",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Vibrates the device."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.div,{class:"snack-player","data-snack-name":"Vibration","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Button%2C%5Cn%20%20Platform%2C%5Cn%20%20Text%2C%5Cn%20%20Vibration%2C%5Cn%20%20View%2C%5Cn%20%20SafeAreaView%2C%5Cn%20%20StyleSheet%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20Separator%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20%3CView%20style%3D%7BPlatform.OS%20%3D%3D%3D%20'android'%20%3F%20styles.separator%20%3A%20null%7D%20%2F%3E%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20ONE_SECOND_IN_MS%20%3D%201000%3B%5Cn%5Cn%20%20const%20PATTERN%20%3D%20%5B%5Cn%20%20%20%201%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%202%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%203%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%5D%3B%5Cn%5Cn%20%20const%20PATTERN_DESC%20%3D%5Cn%20%20%20%20Platform.OS%20%3D%3D%3D%20'android'%5Cn%20%20%20%20%20%20%3F%20'wait%201s%2C%20vibrate%202s%2C%20wait%203s'%5Cn%20%20%20%20%20%20%3A%20'wait%201s%2C%20vibrate%2C%20wait%202s%2C%20vibrate%2C%20wait%203s'%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EVibration%20API%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Vibrate%20once%5C%22%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate()%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20'android'%5Cn%20%20%20%20%20%20%20%20%3F%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20for%2010%20seconds%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(10%20*%20ONE_SECOND_IN_MS)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%2C%5Cn%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%3A%20null%7D%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EPattern%3A%20%7BPATTERN_DESC%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN)%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%20until%20cancelled%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN%2C%20true)%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Stop%20vibration%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.cancel()%7D%5Cn%20%20%20%20%20%20%20%20color%3D%5C%22%23FF0000%5C%22%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingTop%3A%2044%2C%5Cn%20%20%20%20padding%3A%208%2C%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20'bold'%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20separator%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%208%2C%5Cn%20%20%20%20borderBottomColor%3A%20'%23737373'%2C%5Cn%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Android apps should request the ",(0,r.jsx)(n.code,{children:"android.permission.VIBRATE"})," permission by adding ",(0,r.jsx)(n.code,{children:'<uses-permission android:name="android.permission.VIBRATE"/>'})," to ",(0,r.jsx)(n.code,{children:"AndroidManifest.xml"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The Vibration API is implemented as a ",(0,r.jsx)(n.code,{children:"AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)"})," call on iOS."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"cancel",children:(0,r.jsx)(n.code,{children:"cancel()"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"static cancel();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Call this to stop vibrating after having invoked ",(0,r.jsx)(n.code,{children:"vibrate()"})," with repetition enabled."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"vibrate",children:(0,r.jsx)(n.code,{children:"vibrate()"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"static vibrate(\n  pattern?: number | number[],\n  repeat?: boolean\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Triggers a vibration with a fixed duration."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"On Android,"})," the vibration duration defaults to 400 milliseconds, and an arbitrary vibration duration can be specified by passing a number as the value for the ",(0,r.jsx)(n.code,{children:"pattern"})," argument. ",(0,r.jsx)(n.strong,{children:"On iOS,"})," the vibration duration is fixed at roughly 400 milliseconds."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"vibrate()"})," method can take a ",(0,r.jsx)(n.code,{children:"pattern"})," argument with an array of numbers that represent time in milliseconds. You may set ",(0,r.jsx)(n.code,{children:"repeat"})," to true to run through the vibration pattern in a loop until ",(0,r.jsx)(n.code,{children:"cancel()"})," is called."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"On Android,"})," the odd indices of the ",(0,r.jsx)(n.code,{children:"pattern"})," array represent the vibration duration, while the even ones represent the separation time. ",(0,r.jsx)(n.strong,{children:"On iOS,"})," the numbers in the ",(0,r.jsx)(n.code,{children:"pattern"})," array represent the separation time, as the vibration duration is fixed."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pattern"}),(0,r.jsxs)(n.td,{children:["number ",(0,r.jsx)("div",{className:"label android",children:"Android"}),(0,r.jsx)("hr",{}),"array of numbers"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"400"})}),(0,r.jsxs)(n.td,{children:["Vibration duration in milliseconds.",(0,r.jsx)("hr",{}),"Vibration pattern as an array of numbers in milliseconds."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"repeat"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsxs)(n.td,{children:["Repeat vibration pattern until ",(0,r.jsx)(n.code,{children:"cancel()"}),"."]})]})]})]})]})}const C=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},71426:(e,n,t)=>{var r=t(27378),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,a={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!d.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:l,props:a,_owner:o.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>a});var r=t(27378);const i=r.createContext({});function a(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||s:a(e),r.createElement(i.Provider,{value:o},n)}}}]);