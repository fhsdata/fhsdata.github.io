/*! For license information please see b4a9e2bf.1b87e6f1.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[67083],{73250:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var t=s(24246),i=s(71670),a=s(48375),r=s(86386),l=s(11674);const c={id:"accessibilityinfo",title:"AccessibilityInfo"},d=void 0,o={id:"accessibilityinfo",title:"AccessibilityInfo",description:"Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The AccessibilityInfo API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes.",source:"@site/versioned_docs/version-0.71/accessibilityinfo.md",sourceDirName:".",slug:"/accessibilityinfo",permalink:"/docs/0.71/accessibilityinfo",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/accessibilityinfo.md",tags:[],version:"0.71",lastUpdatedAt:1679052568,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"accessibilityinfo",title:"AccessibilityInfo"},sidebar:"api",next:{title:"Alert",permalink:"/docs/0.71/alert"}},h={},u=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>announceForAccessibility()</code>",id:"announceforaccessibility",level:3},{value:"<code>announceForAccessibilityWithOptions()</code>",id:"announceforaccessibilitywithoptions",level:3},{value:'<code>getRecommendedTimeoutMillis()</code> <div class="label android">Android</div>',id:"getrecommendedtimeoutmillis-android",level:3},{value:'<code>isAccessibilityServiceEnabled()</code> <div class="label android">Android</div>',id:"isaccessibilityserviceenabled-android",level:3},{value:'<code>isBoldTextEnabled()</code> <div class="label ios">iOS</div>',id:"isboldtextenabled-ios",level:3},{value:'<code>isGrayscaleEnabled()</code> <div class="label ios">iOS</div>',id:"isgrayscaleenabled-ios",level:3},{value:'<code>isInvertColorsEnabled()</code> <div class="label ios">iOS</div>',id:"isinvertcolorsenabled-ios",level:3},{value:"<code>isReduceMotionEnabled()</code>",id:"isreducemotionenabled",level:3},{value:'<code>isReduceTransparencyEnabled()</code> <div class="label ios">iOS</div>',id:"isreducetransparencyenabled-ios",level:3},{value:"<code>isScreenReaderEnabled()</code>",id:"isscreenreaderenabled",level:3},{value:'<code>prefersCrossFadeTransitions()</code> <div class="label ios">iOS</div>',id:"preferscrossfadetransitions-ios",level:3},{value:"<code>setAccessibilityFocus()</code>",id:"setaccessibilityfocus",level:3}];function b(e){const n=Object.assign({p:"p",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",a:"a",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The ",(0,t.jsx)(n.code,{children:"AccessibilityInfo"})," API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(a.Z,{groupId:"syntax",queryString:!0,defaultValue:l.Z.defaultSyntax,values:l.Z.syntax,children:[(0,t.jsx)(r.Z,{value:"functional",children:(0,t.jsx)(n.div,{class:"snack-player","data-snack-name":"AccessibilityInfo Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%2C%20useEffect%7D%20from%20'react'%3B%5Cnimport%20%7BAccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BreduceMotionEnabled%2C%20setReduceMotionEnabled%5D%20%3D%20useState(false)%3B%5Cn%20%20const%20%5BscreenReaderEnabled%2C%20setScreenReaderEnabled%5D%20%3D%20useState(false)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20reduceMotionChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%5Cn%20%20%20%20%20%20'reduceMotionChanged'%2C%5Cn%20%20%20%20%20%20isReduceMotionEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20setReduceMotionEnabled(isReduceMotionEnabled)%3B%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20const%20screenReaderChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%5Cn%20%20%20%20%20%20'screenReaderChanged'%2C%5Cn%20%20%20%20%20%20isScreenReaderEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20setScreenReaderEnabled(isScreenReaderEnabled)%3B%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(isReduceMotionEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20setReduceMotionEnabled(isReduceMotionEnabled)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(isScreenReaderEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20setScreenReaderEnabled(isScreenReaderEnabled)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20reduceMotionChangedSubscription.remove()%3B%5Cn%20%20%20%20%20%20screenReaderChangedSubscription.remove()%3B%5Cn%20%20%20%20%7D%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%5Cn%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%20%7BreduceMotionEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%5Cn%20%20%20%20%20%20%20%20The%20screen%20reader%20is%20%7BscreenReaderEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20status%3A%20%7B%5Cn%20%20%20%20margin%3A%2030%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,t.jsx)(r.Z,{value:"classical",children:(0,t.jsxs)(a.Z,{groupId:"language",queryString:!0,defaultValue:l.Z.defaultSnackLanguage,values:l.Z.snackLanguages,children:[(0,t.jsx)(r.Z,{value:"javascript",children:(0,t.jsx)(n.div,{class:"snack-player","data-snack-name":"AccessibilityInfo Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%5Cnimport%20%7BAccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20AccessibilityStatusExample%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20reduceMotionEnabled%3A%20false%2C%5Cn%20%20%20%20screenReaderEnabled%3A%20false%2C%5Cn%20%20%7D%3B%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20this.reduceMotionChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%5Cn%20%20%20%20%20%20'reduceMotionChanged'%2C%5Cn%20%20%20%20%20%20reduceMotionEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20this.setState(%7BreduceMotionEnabled%7D)%3B%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20this.screenReaderChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%5Cn%20%20%20%20%20%20'screenReaderChanged'%2C%5Cn%20%20%20%20%20%20screenReaderEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20this.setState(%7BscreenReaderEnabled%7D)%3B%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(reduceMotionEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20this.setState(%7BreduceMotionEnabled%7D)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20this.setState(%7BscreenReaderEnabled%7D)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentWillUnmount()%20%7B%5Cn%20%20%20%20this.reduceMotionChangedSubscription.remove()%3B%5Cn%20%20%20%20this.screenReaderChangedSubscription.remove()%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%7B'%20'%7D%5Cn%20%20%20%20%20%20%20%20%20%20%7Bthis.state.reduceMotionEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20The%20screen%20reader%20is%7B'%20'%7D%5Cn%20%20%20%20%20%20%20%20%20%20%7Bthis.state.screenReaderEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20status%3A%20%7B%5Cn%20%20%20%20margin%3A%2030%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20AccessibilityStatusExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,t.jsx)(r.Z,{value:"typescript",children:(0,t.jsx)(n.div,{class:"snack-player","data-snack-name":"AccessibilityInfo Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%5Cnimport%20%7BAccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%7D%20from%20'react-native'%3B%5Cnimport%20type%20%7BEmitterSubscription%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20AccessibilityStatusExample%20extends%20Component%20%7B%5Cn%20%20reduceMotionChangedSubscription%3F%3A%20EmitterSubscription%3B%5Cn%20%20screenReaderChangedSubscription%3F%3A%20EmitterSubscription%3B%5Cn%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20reduceMotionEnabled%3A%20false%2C%5Cn%20%20%20%20screenReaderEnabled%3A%20false%2C%5Cn%20%20%7D%3B%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20this.reduceMotionChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%5Cn%20%20%20%20%20%20'reduceMotionChanged'%2C%5Cn%20%20%20%20%20%20reduceMotionEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20this.setState(%7BreduceMotionEnabled%7D)%3B%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20this.screenReaderChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%5Cn%20%20%20%20%20%20'screenReaderChanged'%2C%5Cn%20%20%20%20%20%20screenReaderEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20this.setState(%7BscreenReaderEnabled%7D)%3B%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(reduceMotionEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20this.setState(%7BreduceMotionEnabled%7D)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20this.setState(%7BscreenReaderEnabled%7D)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentWillUnmount()%20%7B%5Cn%20%20%20%20this.reduceMotionChangedSubscription%3F.remove()%3B%5Cn%20%20%20%20this.screenReaderChangedSubscription%3F.remove()%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%7B'%20'%7D%5Cn%20%20%20%20%20%20%20%20%20%20%7Bthis.state.reduceMotionEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20The%20screen%20reader%20is%7B'%20'%7D%5Cn%20%20%20%20%20%20%20%20%20%20%7Bthis.state.screenReaderEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20status%3A%20%7B%5Cn%20%20%20%20margin%3A%2030%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20AccessibilityStatusExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"addeventlistener",children:(0,t.jsx)(n.code,{children:"addEventListener()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static addEventListener(\n  eventName: AccessibilityChangeEventName | AccessibilityAnnouncementEventName,\n  handler: (\n    event: AccessibilityChangeEvent | AccessibilityAnnouncementFinishedEvent,\n  ) => void,\n): EmitterSubscription;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add an event handler. Supported events:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Event name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"accessibilityServiceChanged"}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{class:"label two-lines android",children:"Android"})]}),(0,t.jsxs)(n.td,{children:["Fires when some services such as TalkBack, other Android assistive technologies, and third-party accessibility services are enabled. The argument to the event handler is a boolean. The boolean is ",(0,t.jsx)(n.code,{children:"true"})," when a some accessibility services is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"announcementFinished"}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{class:"label two-lines ios",children:"iOS"})]}),(0,t.jsxs)(n.td,{children:["Fires when the screen reader has finished making an announcement. The argument to the event handler is a dictionary with these keys:",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"announcement"}),": The string announced by the screen reader."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"success"}),": A boolean indicating whether the announcement was successfully made."]})]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boldTextChanged"}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{class:"label two-lines ios",children:"iOS"})]}),(0,t.jsxs)(n.td,{children:["Fires when the state of the bold text toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,t.jsx)(n.code,{children:"true"})," when bold text is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"grayscaleChanged"}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{class:"label two-lines ios",children:"iOS"})]}),(0,t.jsxs)(n.td,{children:["Fires when the state of the gray scale toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,t.jsx)(n.code,{children:"true"})," when a gray scale is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"invertColorsChanged"}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{class:"label two-lines ios",children:"iOS"})]}),(0,t.jsxs)(n.td,{children:["Fires when the state of the invert colors toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,t.jsx)(n.code,{children:"true"})," when invert colors is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"reduceMotionChanged"})}),(0,t.jsxs)(n.td,{children:["Fires when the state of the reduce motion toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,t.jsx)(n.code,{children:"true"}),' when a reduce motion is enabled (or when "Transition Animation Scale" in "Developer options" is "Animation off") and ',(0,t.jsx)(n.code,{children:"false"})," otherwise."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"reduceTransparencyChanged"}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{class:"label two-lines ios",children:"iOS"})]}),(0,t.jsxs)(n.td,{children:["Fires when the state of the reduce transparency toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,t.jsx)(n.code,{children:"true"})," when reduce transparency is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"screenReaderChanged"})}),(0,t.jsxs)(n.td,{children:["Fires when the state of the screen reader changes. The argument to the event handler is a boolean. The boolean is ",(0,t.jsx)(n.code,{children:"true"})," when a screen reader is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"announceforaccessibility",children:(0,t.jsx)(n.code,{children:"announceForAccessibility()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static announceForAccessibility(announcement: string);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Post a string to be announced by the screen reader."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"announceforaccessibilitywithoptions",children:(0,t.jsx)(n.code,{children:"announceForAccessibilityWithOptions()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static announceForAccessibilityWithOptions(\n  announcement: string,\n  options: options: {queue?: boolean},\n);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Post a string to be announced by the screen reader with modification options. By default announcements will interrupt any existing speech, but on iOS they can be queued behind existing speech by setting ",(0,t.jsx)(n.code,{children:"queue"})," to ",(0,t.jsx)(n.code,{children:"true"})," in the options object."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["announcement ",(0,t.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"The string to be announced"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["options ",(0,t.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"queue"})," - queue the announcement behind existing speech ",(0,t.jsx)("div",{class:"label ios",children:"iOS"})]})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"getrecommendedtimeoutmillis-android",children:[(0,t.jsx)(n.code,{children:"getRecommendedTimeoutMillis()"})," ",(0,t.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static getRecommendedTimeoutMillis(originalTimeout: number): Promise<number>;\n"})}),"\n",(0,t.jsx)(n.p,{children:'Gets the timeout in millisecond that the user needs.\nThis value is set in "Time to take action (Accessibility timeout)" of "Accessibility" settings.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["originalTimeout ",(0,t.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:'The timeout to return if "Accessibility timeout" is not set. Specify in milliseconds.'})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"isaccessibilityserviceenabled-android",children:[(0,t.jsx)(n.code,{children:"isAccessibilityServiceEnabled()"})," ",(0,t.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static isAccessibilityServiceEnabled(): Promise<boolean>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check whether any accessibility service is enabled. This includes TalkBack but also any third-party accessibility app that may be installed. To only check whether TalkBack is enabled, use ",(0,t.jsx)(n.a,{href:"#isscreenreaderenabled",children:"isScreenReaderEnabled"}),". Returns a promise which resolves to a boolean. The result is ",(0,t.jsx)(n.code,{children:"true"})," when some accessibility services is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": Please use ",(0,t.jsx)(n.a,{href:"#isscreenreaderenabled",children:"isScreenReaderEnabled"})," if you only want to check the status of TalkBack."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"isboldtextenabled-ios",children:[(0,t.jsx)(n.code,{children:"isBoldTextEnabled()"})," ",(0,t.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static isBoldTextEnabled(): Promise<boolean>:\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Query whether a bold text is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,t.jsx)(n.code,{children:"true"})," when bold text is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"isgrayscaleenabled-ios",children:[(0,t.jsx)(n.code,{children:"isGrayscaleEnabled()"})," ",(0,t.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static isGrayscaleEnabled(): Promise<boolean>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Query whether grayscale is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,t.jsx)(n.code,{children:"true"})," when grayscale is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"isinvertcolorsenabled-ios",children:[(0,t.jsx)(n.code,{children:"isInvertColorsEnabled()"})," ",(0,t.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static isInvertColorsEnabled(): Promise<boolean>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Query whether invert colors is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,t.jsx)(n.code,{children:"true"})," when invert colors is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"isreducemotionenabled",children:(0,t.jsx)(n.code,{children:"isReduceMotionEnabled()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static isReduceMotionEnabled(): Promise<boolean>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Query whether reduce motion is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,t.jsx)(n.code,{children:"true"})," when reduce motion is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"isreducetransparencyenabled-ios",children:[(0,t.jsx)(n.code,{children:"isReduceTransparencyEnabled()"})," ",(0,t.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static isReduceTransparencyEnabled(): Promise<boolean>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Query whether reduce transparency is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,t.jsx)(n.code,{children:"true"})," when a reduce transparency is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"isscreenreaderenabled",children:(0,t.jsx)(n.code,{children:"isScreenReaderEnabled()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static isScreenReaderEnabled(): Promise<boolean>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Query whether a screen reader is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,t.jsx)(n.code,{children:"true"})," when a screen reader is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"preferscrossfadetransitions-ios",children:[(0,t.jsx)(n.code,{children:"prefersCrossFadeTransitions()"})," ",(0,t.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static prefersCrossFadeTransitions(): Promise<boolean>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Query whether reduce motion and prefer cross-fade transitions settings are currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,t.jsx)(n.code,{children:"true"})," when prefer cross-fade transitions is enabled and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"setaccessibilityfocus",children:(0,t.jsx)(n.code,{children:"setAccessibilityFocus()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static setAccessibilityFocus(reactTag: number);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Set accessibility focus to a React component."}),"\n",(0,t.jsxs)(n.p,{children:["On Android, this calls ",(0,t.jsx)(n.code,{children:"UIManager.sendAccessibilityEvent"})," method with passed ",(0,t.jsx)(n.code,{children:"reactTag"})," and ",(0,t.jsx)(n.code,{children:"UIManager.AccessibilityEventTypes.typeViewFocused"})," arguments."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": Make sure that any ",(0,t.jsx)(n.code,{children:"View"})," you want to receive the accessibility focus has ",(0,t.jsx)(n.code,{children:"accessible={true}"}),"."]}),"\n"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(b,e)})):b(e)}},86386:(e,n,s)=>{s.d(n,{Z:()=>u});var t=s(27378),i=s(38944);const a={tabItem:"tabItem_wHwb"};var r=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,o=(e,n,s)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,h=(e,n)=>{for(var s in n||(n={}))c.call(n,s)&&o(e,s,n[s]);if(l)for(var s of l(n))d.call(n,s)&&o(e,s,n[s]);return e};function u({children:e,hidden:n,className:s}){return t.createElement("div",h({role:"tabpanel",className:(0,i.Z)(a.tabItem,s)},{hidden:n}),e)}},48375:(e,n,s)=>{s.d(n,{Z:()=>q});var t=s(27378),i=s(38944),a=s(12112),r=s(3620),l=s(69490),c=s(14953),d=s(27886),o=s(7106),h=Object.defineProperty,u=Object.defineProperties,b=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,m=(e,n,s)=>n in e?h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,j=(e,n)=>{for(var s in n||(n={}))x.call(n,s)&&m(e,s,n[s]);if(p)for(var s of p(n))C.call(n,s)&&m(e,s,n[s]);return e},v=(e,n)=>u(e,b(n));function f(e){var n,s;return null!=(s=null==(n=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?s:[]}function y(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return f(e).map((({props:{value:e,label:n,attributes:s,default:t}})=>({value:e,label:n,attributes:s,default:t})))}(s);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function E({queryString:e=!1,groupId:n}){const s=(0,r.k6)(),i=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,c._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(v(j({},s.location),{search:n.toString()}))}),[i,s])]}function w(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,a=y(e),[r,c]=(0,t.useState)((()=>function({defaultValue:e,tabValues:n}){var s;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=null!=(s=n.find((e=>e.default)))?s:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[d,h]=E({queryString:s,groupId:i}),[u,b]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[s,i]=(0,o.Nk)(n);return[s,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:i}),p=(()=>{const e=null!=d?d:u;return g({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{p&&c(p)}),[p]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),b(e)}),[h,b,a]),tabValues:a}}var B=s(14185);const D={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var S=Object.defineProperty,A=Object.defineProperties,T=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,I=(e,n,s)=>n in e?S(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,M=(e,n)=>{for(var s in n||(n={}))R.call(n,s)&&I(e,s,n[s]);if(k)for(var s of k(n))O.call(n,s)&&I(e,s,n[s]);return e},F=(e,n)=>A(e,T(n));function P({className:e,block:n,selectedValue:s,selectValue:r,tabValues:l}){const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),o=e=>{const n=e.currentTarget,t=c.indexOf(n),i=l[t].value;i!==s&&(d(n),r(i))},h=e=>{var n,s;let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;t=null!=(n=c[s])?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=null!=(s=c[n])?s:c[c.length-1];break}}null==t||t.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e)},l.map((({value:e,label:n,attributes:a})=>t.createElement("li",F(M({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:e=>c.push(e),onKeyDown:h,onClick:o},a),{className:(0,i.Z)("tabs__item",D.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===e})}),null!=n?n:e))))}function N({lazy:e,children:n,selectedValue:s}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s}))))}function V(e){const n=w(e);return t.createElement("div",{className:(0,i.Z)("tabs-container",D.tabList)},t.createElement(P,M(M({},e),n)),t.createElement(N,M(M({},e),n)))}function q(e){const n=(0,B.Z)();return t.createElement(V,M({key:String(n)},e),f(e.children))}},11674:(e,n,s)=>{s.d(n,{Z:()=>r});var t=s(63445);const i=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),a=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),r={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:i?"macos":a?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:i?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,s)=>{var t=s(27378),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,a={},d=null,o=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(o=n.ref),n)r.call(n,t)&&!c.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:i,type:e,key:d,ref:o,props:a,_owner:l.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},24246:(e,n,s)=>{e.exports=s(71426)},71670:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>a});var t=s(27378);const i=t.createContext({});function a(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:a(e),t.createElement(i.Provider,{value:l},n)}}}]);