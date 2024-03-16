/*! For license information please see dd0cbcb2.9207887a.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[6162],{62759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var s=n(24246),r=n(71670),a=n(48375),i=n(86386),l=n(11674);const d={id:"statusbar",title:"StatusBar"},c=void 0,o={id:"statusbar",title:"StatusBar",description:"Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons.",source:"@site/../docs/statusbar.md",sourceDirName:".",slug:"/statusbar",permalink:"/docs/next/statusbar",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/statusbar.md",tags:[],version:"current",lastUpdatedAt:1704462830,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{id:"statusbar",title:"StatusBar"},sidebar:"components",previous:{title:"SectionList",permalink:"/docs/next/sectionlist"},next:{title:"Switch",permalink:"/docs/next/switch"}},h={},u=[{value:"Usage with Navigator",id:"usage-with-navigator",level:3},{value:"Imperative API",id:"imperative-api",level:3},{value:"Constants",id:"constants",level:2},{value:'<code>currentHeight</code> <div class="label android">Android</div>',id:"currentheight-android",level:3},{value:"Props",id:"props",level:2},{value:"<code>animated</code>",id:"animated",level:3},{value:'<code>backgroundColor</code> <div class="label android">Android</div>',id:"backgroundcolor-android",level:3},{value:"<code>barStyle</code>",id:"barstyle",level:3},{value:"<code>hidden</code>",id:"hidden",level:3},{value:'<code>networkActivityIndicatorVisible</code> <div class="label ios">iOS</div>',id:"networkactivityindicatorvisible-ios",level:3},{value:'<code>showHideTransition</code> <div class="label ios">iOS</div>',id:"showhidetransition-ios",level:3},{value:'<code>translucent</code> <div class="label android">Android</div>',id:"translucent-android",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>popStackEntry()</code>",id:"popstackentry",level:3},{value:"<code>pushStackEntry()</code>",id:"pushstackentry",level:3},{value:"<code>replaceStackEntry()</code>",id:"replacestackentry",level:3},{value:'<code>setBackgroundColor()</code> <div class="label android">Android</div>',id:"setbackgroundcolor-android",level:3},{value:"<code>setBarStyle()</code>",id:"setbarstyle",level:3},{value:"<code>setHidden()</code>",id:"sethidden",level:3},{value:'<code>setNetworkActivityIndicatorVisible()</code> <div class="label ios">iOS</div>',id:"setnetworkactivityindicatorvisible-ios",level:3},{value:'<code>setTranslucent()</code> <div class="label android">Android</div>',id:"settranslucent-android",level:3},{value:"Type Definitions",id:"type-definitions",level:2},{value:"StatusBarAnimation",id:"statusbaranimation",level:3},{value:"StatusBarStyle",id:"statusbarstyle",level:3}];function x(e){const t=Object.assign({p:"p",h3:"h3",code:"code",div:"div",hr:"hr",h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",pre:"pre",strong:"strong"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons."}),"\n",(0,s.jsx)(t.h3,{id:"usage-with-navigator",children:"Usage with Navigator"}),"\n",(0,s.jsxs)(t.p,{children:["It is possible to have multiple ",(0,s.jsx)(t.code,{children:"StatusBar"})," components mounted at the same time. The props will be merged in the order the ",(0,s.jsx)(t.code,{children:"StatusBar"})," components were mounted."]}),"\n",(0,s.jsxs)(a.Z,{groupId:"language",queryString:!0,defaultValue:l.Z.defaultSnackLanguage,values:l.Z.snackLanguages,children:[(0,s.jsx)(i.Z,{value:"javascript",children:(0,s.jsx)(t.div,{class:"snack-player","data-snack-name":"StatusBar Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Button%2C%5Cn%20%20Platform%2C%5Cn%20%20SafeAreaView%2C%5Cn%20%20StatusBar%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20STYLES%20%3D%20%5B'default'%2C%20'dark-content'%2C%20'light-content'%5D%3B%5Cnconst%20TRANSITIONS%20%3D%20%5B'fade'%2C%20'slide'%2C%20'none'%5D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bhidden%2C%20setHidden%5D%20%3D%20useState(false)%3B%5Cn%20%20const%20%5BstatusBarStyle%2C%20setStatusBarStyle%5D%20%3D%20useState(STYLES%5B0%5D)%3B%5Cn%20%20const%20%5BstatusBarTransition%2C%20setStatusBarTransition%5D%20%3D%20useState(%5Cn%20%20%20%20TRANSITIONS%5B0%5D%2C%5Cn%20%20)%3B%5Cn%5Cn%20%20const%20changeStatusBarVisibility%20%3D%20()%20%3D%3E%20setHidden(!hidden)%3B%5Cn%5Cn%20%20const%20changeStatusBarStyle%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20styleId%20%3D%20STYLES.indexOf(statusBarStyle)%20%2B%201%3B%5Cn%20%20%20%20if%20(styleId%20%3D%3D%3D%20STYLES.length)%20%7B%5Cn%20%20%20%20%20%20setStatusBarStyle(STYLES%5B0%5D)%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20setStatusBarStyle(STYLES%5BstyleId%5D)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20changeStatusBarTransition%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20transition%20%3D%20TRANSITIONS.indexOf(statusBarTransition)%20%2B%201%3B%5Cn%20%20%20%20if%20(transition%20%3D%3D%3D%20TRANSITIONS.length)%20%7B%5Cn%20%20%20%20%20%20setStatusBarTransition(TRANSITIONS%5B0%5D)%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20setStatusBarTransition(TRANSITIONS%5Btransition%5D)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CStatusBar%5Cn%20%20%20%20%20%20%20%20animated%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%20%20backgroundColor%3D%5C%22%2361dafb%5C%22%5Cn%20%20%20%20%20%20%20%20barStyle%3D%7BstatusBarStyle%7D%5Cn%20%20%20%20%20%20%20%20showHideTransition%3D%7BstatusBarTransition%7D%5Cn%20%20%20%20%20%20%20%20hidden%3D%7Bhidden%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3E%5Cn%20%20%20%20%20%20%20%20StatusBar%20Visibility%3A%7B'%5C%5Cn'%7D%5Cn%20%20%20%20%20%20%20%20%7Bhidden%20%3F%20'Hidden'%20%3A%20'Visible'%7D%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3E%5Cn%20%20%20%20%20%20%20%20StatusBar%20Style%3A%7B'%5C%5Cn'%7D%5Cn%20%20%20%20%20%20%20%20%7BstatusBarStyle%7D%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20'ios'%20%3F%20(%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20StatusBar%20Transition%3A%7B'%5C%5Cn'%7D%5Cn%20%20%20%20%20%20%20%20%20%20%7BstatusBarTransition%7D%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20)%20%3A%20null%7D%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonsContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20StatusBar%5C%22%20onPress%3D%7BchangeStatusBarVisibility%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Change%20StatusBar%20Style%5C%22%20onPress%3D%7BchangeStatusBarStyle%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20'ios'%20%3F%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Change%20StatusBar%20Transition%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7BchangeStatusBarTransition%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20)%20%3A%20null%7D%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23ECF0F1'%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonsContainer%3A%20%7B%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20textStyle%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%20%20marginBottom%3A%208%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,s.jsx)(i.Z,{value:"typescript",children:(0,s.jsx)(t.div,{class:"snack-player","data-snack-name":"StatusBar Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Button%2C%5Cn%20%20Platform%2C%5Cn%20%20SafeAreaView%2C%5Cn%20%20StatusBar%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cnimport%20type%20%7BStatusBarStyle%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20STYLES%20%3D%20%5B'default'%2C%20'dark-content'%2C%20'light-content'%5D%20as%20const%3B%5Cnconst%20TRANSITIONS%20%3D%20%5B'fade'%2C%20'slide'%2C%20'none'%5D%20as%20const%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bhidden%2C%20setHidden%5D%20%3D%20useState(false)%3B%5Cn%20%20const%20%5BstatusBarStyle%2C%20setStatusBarStyle%5D%20%3D%20useState%3CStatusBarStyle%3E(%5Cn%20%20%20%20STYLES%5B0%5D%2C%5Cn%20%20)%3B%5Cn%20%20const%20%5BstatusBarTransition%2C%20setStatusBarTransition%5D%20%3D%20useState%3C%5Cn%20%20%20%20'fade'%20%7C%20'slide'%20%7C%20'none'%5Cn%20%20%3E(TRANSITIONS%5B0%5D)%3B%5Cn%5Cn%20%20const%20changeStatusBarVisibility%20%3D%20()%20%3D%3E%20setHidden(!hidden)%3B%5Cn%5Cn%20%20const%20changeStatusBarStyle%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20styleId%20%3D%20STYLES.indexOf(statusBarStyle)%20%2B%201%3B%5Cn%20%20%20%20if%20(styleId%20%3D%3D%3D%20STYLES.length)%20%7B%5Cn%20%20%20%20%20%20setStatusBarStyle(STYLES%5B0%5D)%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20setStatusBarStyle(STYLES%5BstyleId%5D)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20changeStatusBarTransition%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20transition%20%3D%20TRANSITIONS.indexOf(statusBarTransition)%20%2B%201%3B%5Cn%20%20%20%20if%20(transition%20%3D%3D%3D%20TRANSITIONS.length)%20%7B%5Cn%20%20%20%20%20%20setStatusBarTransition(TRANSITIONS%5B0%5D)%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20setStatusBarTransition(TRANSITIONS%5Btransition%5D)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CStatusBar%5Cn%20%20%20%20%20%20%20%20animated%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%20%20backgroundColor%3D%5C%22%2361dafb%5C%22%5Cn%20%20%20%20%20%20%20%20barStyle%3D%7BstatusBarStyle%7D%5Cn%20%20%20%20%20%20%20%20showHideTransition%3D%7BstatusBarTransition%7D%5Cn%20%20%20%20%20%20%20%20hidden%3D%7Bhidden%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3E%5Cn%20%20%20%20%20%20%20%20StatusBar%20Visibility%3A%7B'%5C%5Cn'%7D%5Cn%20%20%20%20%20%20%20%20%7Bhidden%20%3F%20'Hidden'%20%3A%20'Visible'%7D%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3E%5Cn%20%20%20%20%20%20%20%20StatusBar%20Style%3A%7B'%5C%5Cn'%7D%5Cn%20%20%20%20%20%20%20%20%7BstatusBarStyle%7D%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20'ios'%20%3F%20(%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20StatusBar%20Transition%3A%7B'%5C%5Cn'%7D%5Cn%20%20%20%20%20%20%20%20%20%20%7BstatusBarTransition%7D%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20)%20%3A%20null%7D%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonsContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20StatusBar%5C%22%20onPress%3D%7BchangeStatusBarVisibility%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Change%20StatusBar%20Style%5C%22%20onPress%3D%7BchangeStatusBarStyle%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20'ios'%20%3F%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Change%20StatusBar%20Transition%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7BchangeStatusBarTransition%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20)%20%3A%20null%7D%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23ECF0F1'%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonsContainer%3A%20%7B%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20textStyle%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%20%20marginBottom%3A%208%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,s.jsx)(t.h3,{id:"imperative-api",children:"Imperative API"}),"\n",(0,s.jsx)(t.p,{children:"For cases where using a component is not ideal, there is also an imperative API exposed as static functions on the component. It is however not recommended to use the static API and the component for the same prop because any value set by the static API will get overridden by the one set by the component in the next render."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(t.h2,{id:"constants",children:"Constants"}),"\n",(0,s.jsxs)(t.h3,{id:"currentheight-android",children:[(0,s.jsx)(t.code,{children:"currentHeight"})," ",(0,s.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,s.jsx)(t.p,{children:"The height of the status bar, which includes the notch height, if present."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,s.jsx)(t.h3,{id:"animated",children:(0,s.jsx)(t.code,{children:"animated"})}),"\n",(0,s.jsxs)(t.p,{children:["If the transition between status bar property changes should be animated. Supported for ",(0,s.jsx)(t.code,{children:"backgroundColor"}),", ",(0,s.jsx)(t.code,{children:"barStyle"})," and ",(0,s.jsx)(t.code,{children:"hidden"})," properties."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.h3,{id:"backgroundcolor-android",children:[(0,s.jsx)(t.code,{children:"backgroundColor"})," ",(0,s.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,s.jsx)(t.p,{children:"The background color of the status bar."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"colors",children:"color"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsxs)(t.td,{children:["default system StatusBar background color, or ",(0,s.jsx)(t.code,{children:"'black'"})," if not defined"]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"barstyle",children:(0,s.jsx)(t.code,{children:"barStyle"})}),"\n",(0,s.jsx)(t.p,{children:"Sets the color of the status bar text."}),"\n",(0,s.jsx)(t.p,{children:"On Android, this will only have an impact on API versions 23 and above."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"statusbar#statusbarstyle",children:"StatusBarStyle"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'default'"})})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"hidden",children:(0,s.jsx)(t.code,{children:"hidden"})}),"\n",(0,s.jsx)(t.p,{children:"If the status bar is hidden."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.h3,{id:"networkactivityindicatorvisible-ios",children:[(0,s.jsx)(t.code,{children:"networkActivityIndicatorVisible"})," ",(0,s.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,s.jsx)(t.p,{children:"If the network activity indicator should be visible."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.h3,{id:"showhidetransition-ios",children:[(0,s.jsx)(t.code,{children:"showHideTransition"})," ",(0,s.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,s.jsxs)(t.p,{children:["The transition effect when showing and hiding the status bar using the ",(0,s.jsx)(t.code,{children:"hidden"})," prop."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"statusbar#statusbaranimation",children:"StatusBarAnimation"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'fade'"})})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.h3,{id:"translucent-android",children:[(0,s.jsx)(t.code,{children:"translucent"})," ",(0,s.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,s.jsxs)(t.p,{children:["If the status bar is translucent. When translucent is set to ",(0,s.jsx)(t.code,{children:"true"}),", the app will draw under the status bar. This is useful when using a semi transparent status bar color."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"popstackentry",children:(0,s.jsx)(t.code,{children:"popStackEntry()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static popStackEntry(entry: StatusBarProps);\n"})}),"\n",(0,s.jsx)(t.p,{children:"Get and remove the last StatusBar entry from the stack."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["entry ",(0,s.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsxs)(t.td,{children:["Entry returned from ",(0,s.jsx)(t.code,{children:"pushStackEntry"}),"."]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"pushstackentry",children:(0,s.jsx)(t.code,{children:"pushStackEntry()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static pushStackEntry(props: StatusBarProps): StatusBarProps;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Push a StatusBar entry onto the stack. The return value should be passed to ",(0,s.jsx)(t.code,{children:"popStackEntry"})," when complete."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["props ",(0,s.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsx)(t.td,{children:"Object containing the StatusBar props to use in the stack entry."})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"replacestackentry",children:(0,s.jsx)(t.code,{children:"replaceStackEntry()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static replaceStackEntry(\n  entry: StatusBarProps,\n  props: StatusBarProps\n): StatusBarProps;\n"})}),"\n",(0,s.jsx)(t.p,{children:"Replace an existing StatusBar stack entry with new props."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["entry ",(0,s.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsxs)(t.td,{children:["Entry returned from ",(0,s.jsx)(t.code,{children:"pushStackEntry"})," to replace."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["props ",(0,s.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsx)(t.td,{children:"Object containing the StatusBar props to use in the replacement stack entry."})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.h3,{id:"setbackgroundcolor-android",children:[(0,s.jsx)(t.code,{children:"setBackgroundColor()"})," ",(0,s.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static setBackgroundColor(color: ColorValue, animated?: boolean);\n"})}),"\n",(0,s.jsx)(t.p,{children:"Set the background color for the status bar."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["color ",(0,s.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Background color."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"animated"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Animate the style change."})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"setbarstyle",children:(0,s.jsx)(t.code,{children:"setBarStyle()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static setBarStyle(style: StatusBarStyle, animated?: boolean);\n"})}),"\n",(0,s.jsx)(t.p,{children:"Set the status bar style."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["style ",(0,s.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"statusbar#statusbarstyle",children:"StatusBarStyle"})}),(0,s.jsx)(t.td,{children:"Status bar style to set."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"animated"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Animate the style change."})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"sethidden",children:(0,s.jsx)(t.code,{children:"setHidden()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static setHidden(hidden: boolean, animation?: StatusBarAnimation);\n"})}),"\n",(0,s.jsx)(t.p,{children:"Show or hide the status bar."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["hidden ",(0,s.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Hide the status bar."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["animation ",(0,s.jsx)("div",{class:"label ios",children:"iOS"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"statusbar#statusbaranimation",children:"StatusBarAnimation"})}),(0,s.jsx)(t.td,{children:"Animation when changing the status bar hidden property."})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.h3,{id:"setnetworkactivityindicatorvisible-ios",children:[(0,s.jsx)(t.code,{children:"setNetworkActivityIndicatorVisible()"})," ",(0,s.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static setNetworkActivityIndicatorVisible(visible: boolean);\n"})}),"\n",(0,s.jsx)(t.p,{children:"Control the visibility of the network activity indicator."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["visible ",(0,s.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Show the indicator."})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.h3,{id:"settranslucent-android",children:[(0,s.jsx)(t.code,{children:"setTranslucent()"})," ",(0,s.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static setTranslucent(translucent: boolean);\n"})}),"\n",(0,s.jsx)(t.p,{children:"Control the translucency of the status bar."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["translucent ",(0,s.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"Set as translucent."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"type-definitions",children:"Type Definitions"}),"\n",(0,s.jsx)(t.h3,{id:"statusbaranimation",children:"StatusBarAnimation"}),"\n",(0,s.jsx)(t.p,{children:"Status bar animation type for transitions on the iOS."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"Type"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"enum"})})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Constants:"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'fade'"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Fade animation"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'slide'"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Slide animation"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'none'"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"No animation"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"statusbarstyle",children:"StatusBarStyle"}),"\n",(0,s.jsx)(t.p,{children:"Status bar style type."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"Type"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"enum"})})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Constants:"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'default'"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Default status bar style (dark for iOS, light for Android)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'light-content'"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"White texts and icons"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'dark-content'"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Dark texts and icons (requires API>=23 on Android)"})]})]})]})]})}const j=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(x,e)})):x(e)}},86386:(e,t,n)=>{n.d(t,{Z:()=>u});var s=n(27378),r=n(38944);const a={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,o=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&o(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&o(e,n,t[n]);return e};function u({children:e,hidden:t,className:n}){return s.createElement("div",h({role:"tabpanel",className:(0,r.Z)(a.tabItem,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>L});var s=n(27378),r=n(38944),a=n(12112),i=n(3620),l=n(69490),d=n(14953),c=n(27886),o=n(7106),h=Object.defineProperty,u=Object.defineProperties,x=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&b(e,n,t[n]);if(j)for(var n of j(t))C.call(t,n)&&b(e,n,t[n]);return e},S=(e,t)=>u(e,x(t));function v(e){var t,n;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}function B(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=t?t:function(e){return v(e).map((({props:{value:e,label:t,attributes:n,default:s}})=>({value:e,label:t,attributes:n,default:s})))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f({value:e,tabValues:t}){return t.some((t=>t.value===e))}function m({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,d._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(S(y({},n.location),{search:t.toString()}))}),[r,n])]}function D(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=B(e),[i,d]=(0,s.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const s=null!=(n=t.find((e=>e.default)))?n:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,h]=m({queryString:n,groupId:r}),[u,x]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,o.Nk)(t);return[n,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),j=(()=>{const e=null!=c?c:u;return f({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{j&&d(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),x(e)}),[h,x,a]),tabValues:a}}var g=n(14185);const T={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var w=Object.defineProperty,k=Object.defineProperties,A=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))O.call(t,n)&&N(e,n,t[n]);if(E)for(var n of E(t))I.call(t,n)&&N(e,n,t[n]);return e},V=(e,t)=>k(e,A(t));function F({className:e,block:t,selectedValue:n,selectValue:i,tabValues:l}){const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),o=e=>{const t=e.currentTarget,s=d.indexOf(t),r=l[s].value;r!==n&&(c(t),i(r))},h=e=>{var t,n;let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;s=null!=(t=d[n])?t:d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;s=null!=(n=d[t])?n:d[d.length-1];break}}null==s||s.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:a})=>s.createElement("li",V(P({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>d.push(e),onKeyDown:h,onClick:o},a),{className:(0,r.Z)("tabs__item",T.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function R({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function q(e){const t=D(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",T.tabList)},s.createElement(F,P(P({},e),t)),s.createElement(R,P(P({},e),t)))}function L(e){const t=(0,g.Z)();return s.createElement(q,P({key:String(t)},e),v(e.children))}},11674:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(63445);const r=!!s.Z.canUseDOM&&navigator.platform.startsWith("Mac"),a=!!s.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":a?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,n)=>{var s=n(27378),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,a={},c=null,o=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(o=t.ref),t)i.call(t,s)&&!d.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:o,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>a});var s=n(27378);const r=s.createContext({});function a(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:a(e),s.createElement(r.Provider,{value:l},t)}}}]);