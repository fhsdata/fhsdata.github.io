/*! For license information please see eb50cd7d.c16a92ff.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9718],{6235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(24246),r=n(71670),i=n(48375),o=n(86386),l=n(11674);const s={id:"vibration",title:"Vibration"},c=void 0,d={id:"vibration",title:"Vibration",description:"Vibrates the device.",source:"@site/versioned_docs/version-0.70/vibration.md",sourceDirName:".",slug:"/vibration",permalink:"/docs/0.70/vibration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/vibration.md",tags:[],version:"0.70",lastUpdatedAt:1679052568,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"vibration",title:"Vibration"},sidebar:"api",previous:{title:"Transforms",permalink:"/docs/0.70/transforms"},next:{title:"useColorScheme",permalink:"/docs/0.70/usecolorscheme"}},C={},u=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>cancel()</code>",id:"cancel",level:3},{value:"<code>vibrate()</code>",id:"vibrate",level:3}];function p(e){const t=Object.assign({p:"p",h2:"h2",div:"div",blockquote:"blockquote",code:"code",hr:"hr",h1:"h1",h3:"h3",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Vibrates the device."}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(i.Z,{groupId:"syntax",queryString:!0,defaultValue:l.Z.defaultSyntax,values:l.Z.syntax,children:[(0,a.jsx)(o.Z,{value:"functional",children:(0,a.jsx)(t.div,{class:"snack-player","data-snack-name":"Vibration","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20Platform%2C%20Text%2C%20Vibration%2C%20View%2C%20SafeAreaView%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20Separator%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20%3CView%20style%3D%7BPlatform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%3F%20styles.separator%20%3A%20null%7D%20%2F%3E%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%5Cn%20%20const%20ONE_SECOND_IN_MS%20%3D%201000%3B%5Cn%5Cn%20%20const%20PATTERN%20%3D%20%5B%5Cn%20%20%20%201%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%202%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%203%20*%20ONE_SECOND_IN_MS%5Cn%20%20%5D%3B%5Cn%5Cn%20%20const%20PATTERN_DESC%20%3D%5Cn%20%20%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%5Cn%20%20%20%20%20%20%3F%20%5C%22wait%201s%2C%20vibrate%202s%2C%20wait%203s%5C%22%5Cn%20%20%20%20%20%20%3A%20%5C%22wait%201s%2C%20vibrate%2C%20wait%202s%2C%20vibrate%2C%20wait%203s%5C%22%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EVibration%20API%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Vibrate%20once%5C%22%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate()%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%20%5C%22android%5C%22%5Cn%20%20%20%20%20%20%20%20%3F%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20for%2010%20seconds%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(10%20*%20ONE_SECOND_IN_MS)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%3A%20null%7D%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EPattern%3A%20%7BPATTERN_DESC%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN)%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%20until%20cancelled%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN%2C%20true)%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Stop%20vibration%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.cancel()%7D%5Cn%20%20%20%20%20%20%20%20color%3D%5C%22%23FF0000%5C%22%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%2044%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20separator%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%208%2C%5Cn%20%20%20%20borderBottomColor%3A%20%5C%22%23737373%5C%22%2C%5Cn%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(o.Z,{value:"classical",children:(0,a.jsx)(t.div,{class:"snack-player","data-snack-name":"Vibration","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20Platform%2C%20Text%2C%20Vibration%2C%20View%2C%20SafeAreaView%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20Separator%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20%3CView%20style%3D%7BPlatform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%3F%20styles.separator%20%3A%20null%7D%20%2F%3E%3B%5Cn%7D%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20ONE_SECOND_IN_MS%20%3D%201000%3B%5Cn%5Cn%20%20%20%20const%20PATTERN%20%3D%20%5B%5Cn%20%20%20%20%20%201%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%20%20%202%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%20%20%203%20*%20ONE_SECOND_IN_MS%5Cn%20%20%20%20%5D%3B%5Cn%5Cn%20%20%20%20const%20PATTERN_DESC%20%3D%5Cn%20%20%20%20%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%5Cn%20%20%20%20%20%20%20%20%3F%20%5C%22wait%201s%2C%20vibrate%202s%2C%20wait%203s%5C%22%5Cn%20%20%20%20%20%20%20%20%3A%20%5C%22wait%201s%2C%20vibrate%2C%20wait%202s%2C%20vibrate%2C%20wait%203s%5C%22%3B%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EVibration%20API%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Vibrate%20once%5C%22%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate()%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%20%5C%22android%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%3F%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20for%2010%20seconds%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(10%20*%20ONE_SECOND_IN_MS)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%20%20%3A%20null%7D%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EPattern%3A%20%7BPATTERN_DESC%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%20until%20cancelled%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN%2C%20true)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Stop%20vibration%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.cancel()%7D%5Cn%20%20%20%20%20%20%20%20%20%20color%3D%5C%22%23FF0000%5C%22%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%2044%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20separator%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%208%2C%5Cn%20%20%20%20borderBottomColor%3A%20%5C%22%23737373%5C%22%2C%5Cn%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Android apps should request the ",(0,a.jsx)(t.code,{children:"android.permission.VIBRATE"})," permission by adding ",(0,a.jsx)(t.code,{children:'<uses-permission android:name="android.permission.VIBRATE"/>'})," to ",(0,a.jsx)(t.code,{children:"AndroidManifest.xml"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["The Vibration API is implemented as a ",(0,a.jsx)(t.code,{children:"AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)"})," call on iOS."]}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(t.h3,{id:"cancel",children:(0,a.jsx)(t.code,{children:"cancel()"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"Vibration.cancel();\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Call this to stop vibrating after having invoked ",(0,a.jsx)(t.code,{children:"vibrate()"})," with repetition enabled."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"vibrate",children:(0,a.jsx)(t.code,{children:"vibrate()"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"Vibration.vibrate(pattern, repeat);\n"})}),"\n",(0,a.jsx)(t.p,{children:"Triggers a vibration with a fixed duration."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"On Android,"})," the vibration duration defaults to 400 milliseconds, and an arbitrary vibration duration can be specified by passing a number as the value for the ",(0,a.jsx)(t.code,{children:"pattern"})," argument. ",(0,a.jsx)(t.strong,{children:"On iOS,"})," the vibration duration is fixed at roughly 400 milliseconds."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"vibrate()"})," method can take a ",(0,a.jsx)(t.code,{children:"pattern"})," argument with an array of numbers that represent time in milliseconds. You may set ",(0,a.jsx)(t.code,{children:"repeat"})," to true to run through the vibration pattern in a loop until ",(0,a.jsx)(t.code,{children:"cancel()"})," is called."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"On Android,"})," the odd indices of the ",(0,a.jsx)(t.code,{children:"pattern"})," array represent the vibration duration, while the even ones represent the separation time. ",(0,a.jsx)(t.strong,{children:"On iOS,"})," the numbers in the ",(0,a.jsx)(t.code,{children:"pattern"})," array represent the separation time, as the vibration duration is fixed."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"pattern"}),(0,a.jsxs)(t.td,{children:["number ",(0,a.jsx)("div",{className:"label android",children:"Android"}),(0,a.jsx)("hr",{}),"array of numbers"]}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"400"})}),(0,a.jsxs)(t.td,{children:["Vibration duration in milliseconds.",(0,a.jsx)("hr",{}),"Vibration pattern as an array of numbers in milliseconds."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"repeat"}),(0,a.jsx)(t.td,{children:"boolean"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"false"})}),(0,a.jsxs)(t.td,{children:["Repeat vibration pattern until ",(0,a.jsx)(t.code,{children:"cancel()"}),"."]})]})]})]})]})}const b=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(p,e)})):p(e)}},86386:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(27378),r=n(38944);const i={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&d(e,n,t[n]);return e};function u({children:e,hidden:t,className:n}){return a.createElement("div",C({role:"tabpanel",className:(0,r.Z)(i.tabItem,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>M});var a=n(27378),r=n(38944),i=n(12112),o=n(3620),l=n(69490),s=n(14953),c=n(27886),d=n(7106),C=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&v(e,n,t[n]);if(b)for(var n of b(t))f.call(t,n)&&v(e,n,t[n]);return e},D=(e,t)=>u(e,p(t));function x(e){var t,n;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}function E(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return x(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y({value:e,tabValues:t}){return t.some((t=>t.value===e))}function g({queryString:e=!1,groupId:t}){const n=(0,o.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(D(m({},n.location),{search:t.toString()}))}),[r,n])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=E(e),[o,s]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!y({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,C]=g({queryString:n,groupId:r}),[u,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,d.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),b=(()=>{const e=null!=c?c:u;return y({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!y({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),C(e),p(e)}),[C,p,i]),tabValues:i}}var S=n(14185);const w={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var A=Object.defineProperty,B=Object.defineProperties,O=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&N(e,n,t[n]);if(V)for(var n of V(t))_.call(t,n)&&N(e,n,t[n]);return e},P=(e,t)=>B(e,O(t));function F({className:e,block:t,selectedValue:n,selectValue:o,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=s.indexOf(t),r=l[a].value;r!==n&&(c(t),o(r))},C=e=>{var t,n;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;a=null!=(t=s[n])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=null!=(n=s[t])?n:s[s.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:i})=>a.createElement("li",P(T({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>s.push(e),onKeyDown:C,onClick:d},i),{className:(0,r.Z)("tabs__item",w.tabItem,null==i?void 0:i.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function I({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function R(e){const t=j(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",w.tabList)},a.createElement(F,T(T({},e),t)),a.createElement(I,T(T({},e),t)))}function M(e){const t=(0,S.Z)();return a.createElement(R,T({key:String(t)},e),x(e.children))}},11674:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,n)=>{var a=n(27378),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,i={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,a)&&!s.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>i});var a=n(27378);const r=a.createContext({});function i(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||o:i(e),a.createElement(r.Provider,{value:l},t)}}}]);