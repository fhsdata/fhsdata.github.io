/*! For license information please see 0a45b3b8.2de4e4a2.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[51932],{25364:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var i=n(24246),r=n(71670);const t={id:"accessibilityinfo",title:"AccessibilityInfo"},c=void 0,d={id:"accessibilityinfo",title:"AccessibilityInfo",description:"Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The AccessibilityInfo API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes.",source:"@site/../docs/accessibilityinfo.md",sourceDirName:".",slug:"/accessibilityinfo",permalink:"/docs/next/accessibilityinfo",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/accessibilityinfo.md",tags:[],version:"current",lastUpdatedAt:1679758949,formattedLastUpdatedAt:"Mar 25, 2023",frontMatter:{id:"accessibilityinfo",title:"AccessibilityInfo"},sidebar:"api",next:{title:"Alert",permalink:"/docs/next/alert"}},a={},l=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>announceForAccessibility()</code>",id:"announceforaccessibility",level:3},{value:"<code>announceForAccessibilityWithOptions()</code>",id:"announceforaccessibilitywithoptions",level:3},{value:'<code>getRecommendedTimeoutMillis()</code> <div class="label android">Android</div>',id:"getrecommendedtimeoutmillis-android",level:3},{value:'<code>isAccessibilityServiceEnabled()</code> <div class="label android">Android</div>',id:"isaccessibilityserviceenabled-android",level:3},{value:'<code>isBoldTextEnabled()</code> <div class="label ios">iOS</div>',id:"isboldtextenabled-ios",level:3},{value:'<code>isGrayscaleEnabled()</code> <div class="label ios">iOS</div>',id:"isgrayscaleenabled-ios",level:3},{value:'<code>isInvertColorsEnabled()</code> <div class="label ios">iOS</div>',id:"isinvertcolorsenabled-ios",level:3},{value:"<code>isReduceMotionEnabled()</code>",id:"isreducemotionenabled",level:3},{value:'<code>isReduceTransparencyEnabled()</code> <div class="label ios">iOS</div>',id:"isreducetransparencyenabled-ios",level:3},{value:"<code>isScreenReaderEnabled()</code>",id:"isscreenreaderenabled",level:3},{value:'<code>prefersCrossFadeTransitions()</code> <div class="label ios">iOS</div>',id:"preferscrossfadetransitions-ios",level:3},{value:"<code>setAccessibilityFocus()</code>",id:"setaccessibilityfocus",level:3}];function o(e){const s=Object.assign({p:"p",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",a:"a",blockquote:"blockquote"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The ",(0,i.jsx)(s.code,{children:"AccessibilityInfo"})," API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes."]}),"\n",(0,i.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(s.div,{class:"snack-player","data-snack-name":"AccessibilityInfo Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%2C%20useEffect%7D%20from%20'react'%3B%5Cnimport%20%7BAccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BreduceMotionEnabled%2C%20setReduceMotionEnabled%5D%20%3D%20useState(false)%3B%5Cn%20%20const%20%5BscreenReaderEnabled%2C%20setScreenReaderEnabled%5D%20%3D%20useState(false)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20reduceMotionChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%5Cn%20%20%20%20%20%20'reduceMotionChanged'%2C%5Cn%20%20%20%20%20%20isReduceMotionEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20setReduceMotionEnabled(isReduceMotionEnabled)%3B%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20const%20screenReaderChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%5Cn%20%20%20%20%20%20'screenReaderChanged'%2C%5Cn%20%20%20%20%20%20isScreenReaderEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20setScreenReaderEnabled(isScreenReaderEnabled)%3B%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(isReduceMotionEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20setReduceMotionEnabled(isReduceMotionEnabled)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(isScreenReaderEnabled%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20setScreenReaderEnabled(isScreenReaderEnabled)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20reduceMotionChangedSubscription.remove()%3B%5Cn%20%20%20%20%20%20screenReaderChangedSubscription.remove()%3B%5Cn%20%20%20%20%7D%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%5Cn%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%20%7BreduceMotionEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%5Cn%20%20%20%20%20%20%20%20The%20screen%20reader%20is%20%7BscreenReaderEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20status%3A%20%7B%5Cn%20%20%20%20margin%3A%2030%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h1,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"addeventlistener",children:(0,i.jsx)(s.code,{children:"addEventListener()"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static addEventListener(\n  eventName: AccessibilityChangeEventName | AccessibilityAnnouncementEventName,\n  handler: (\n    event: AccessibilityChangeEvent | AccessibilityAnnouncementFinishedEvent,\n  ) => void,\n): EmitterSubscription;\n"})}),"\n",(0,i.jsx)(s.p,{children:"Add an event handler. Supported events:"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Event name"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"accessibilityServiceChanged"}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{class:"label two-lines android",children:"Android"})]}),(0,i.jsxs)(s.td,{children:["Fires when some services such as TalkBack, other Android assistive technologies, and third-party accessibility services are enabled. The argument to the event handler is a boolean. The boolean is ",(0,i.jsx)(s.code,{children:"true"})," when a some accessibility services is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"announcementFinished"}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{class:"label two-lines ios",children:"iOS"})]}),(0,i.jsxs)(s.td,{children:["Fires when the screen reader has finished making an announcement. The argument to the event handler is a dictionary with these keys:",(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(s.code,{children:"announcement"}),": The string announced by the screen reader."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(s.code,{children:"success"}),": A boolean indicating whether the announcement was successfully made."]})]})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"boldTextChanged"}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{class:"label two-lines ios",children:"iOS"})]}),(0,i.jsxs)(s.td,{children:["Fires when the state of the bold text toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,i.jsx)(s.code,{children:"true"})," when bold text is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"grayscaleChanged"}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{class:"label two-lines ios",children:"iOS"})]}),(0,i.jsxs)(s.td,{children:["Fires when the state of the gray scale toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,i.jsx)(s.code,{children:"true"})," when a gray scale is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"invertColorsChanged"}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{class:"label two-lines ios",children:"iOS"})]}),(0,i.jsxs)(s.td,{children:["Fires when the state of the invert colors toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,i.jsx)(s.code,{children:"true"})," when invert colors is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"reduceMotionChanged"})}),(0,i.jsxs)(s.td,{children:["Fires when the state of the reduce motion toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,i.jsx)(s.code,{children:"true"}),' when a reduce motion is enabled (or when "Transition Animation Scale" in "Developer options" is "Animation off") and ',(0,i.jsx)(s.code,{children:"false"})," otherwise."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"reduceTransparencyChanged"}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{class:"label two-lines ios",children:"iOS"})]}),(0,i.jsxs)(s.td,{children:["Fires when the state of the reduce transparency toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,i.jsx)(s.code,{children:"true"})," when reduce transparency is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"screenReaderChanged"})}),(0,i.jsxs)(s.td,{children:["Fires when the state of the screen reader changes. The argument to the event handler is a boolean. The boolean is ",(0,i.jsx)(s.code,{children:"true"})," when a screen reader is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]})]})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"announceforaccessibility",children:(0,i.jsx)(s.code,{children:"announceForAccessibility()"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static announceForAccessibility(announcement: string);\n"})}),"\n",(0,i.jsx)(s.p,{children:"Post a string to be announced by the screen reader."}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"announceforaccessibilitywithoptions",children:(0,i.jsx)(s.code,{children:"announceForAccessibilityWithOptions()"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static announceForAccessibilityWithOptions(\n  announcement: string,\n  options: options: {queue?: boolean},\n);\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Post a string to be announced by the screen reader with modification options. By default announcements will interrupt any existing speech, but on iOS they can be queued behind existing speech by setting ",(0,i.jsx)(s.code,{children:"queue"})," to ",(0,i.jsx)(s.code,{children:"true"})," in the options object."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["announcement ",(0,i.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,i.jsx)(s.td,{children:"string"}),(0,i.jsx)(s.td,{children:"The string to be announced"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["options ",(0,i.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,i.jsx)(s.td,{children:"object"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"queue"})," - queue the announcement behind existing speech ",(0,i.jsx)("div",{class:"label ios",children:"iOS"})]})]})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h3,{id:"getrecommendedtimeoutmillis-android",children:[(0,i.jsx)(s.code,{children:"getRecommendedTimeoutMillis()"})," ",(0,i.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static getRecommendedTimeoutMillis(originalTimeout: number): Promise<number>;\n"})}),"\n",(0,i.jsx)(s.p,{children:'Gets the timeout in millisecond that the user needs.\nThis value is set in "Time to take action (Accessibility timeout)" of "Accessibility" settings.'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["originalTimeout ",(0,i.jsx)("div",{class:"label basic required",children:"Required"})]}),(0,i.jsx)(s.td,{children:"number"}),(0,i.jsx)(s.td,{children:'The timeout to return if "Accessibility timeout" is not set. Specify in milliseconds.'})]})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h3,{id:"isaccessibilityserviceenabled-android",children:[(0,i.jsx)(s.code,{children:"isAccessibilityServiceEnabled()"})," ",(0,i.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static isAccessibilityServiceEnabled(): Promise<boolean>;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Check whether any accessibility service is enabled. This includes TalkBack but also any third-party accessibility app that may be installed. To only check whether TalkBack is enabled, use ",(0,i.jsx)(s.a,{href:"#isscreenreaderenabled",children:"isScreenReaderEnabled"}),". Returns a promise which resolves to a boolean. The result is ",(0,i.jsx)(s.code,{children:"true"})," when some accessibility services is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"}),": Please use ",(0,i.jsx)(s.a,{href:"#isscreenreaderenabled",children:"isScreenReaderEnabled"})," if you only want to check the status of TalkBack."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h3,{id:"isboldtextenabled-ios",children:[(0,i.jsx)(s.code,{children:"isBoldTextEnabled()"})," ",(0,i.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static isBoldTextEnabled(): Promise<boolean>:\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Query whether a bold text is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,i.jsx)(s.code,{children:"true"})," when bold text is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h3,{id:"isgrayscaleenabled-ios",children:[(0,i.jsx)(s.code,{children:"isGrayscaleEnabled()"})," ",(0,i.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static isGrayscaleEnabled(): Promise<boolean>;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Query whether grayscale is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,i.jsx)(s.code,{children:"true"})," when grayscale is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h3,{id:"isinvertcolorsenabled-ios",children:[(0,i.jsx)(s.code,{children:"isInvertColorsEnabled()"})," ",(0,i.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static isInvertColorsEnabled(): Promise<boolean>;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Query whether invert colors is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,i.jsx)(s.code,{children:"true"})," when invert colors is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"isreducemotionenabled",children:(0,i.jsx)(s.code,{children:"isReduceMotionEnabled()"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static isReduceMotionEnabled(): Promise<boolean>;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Query whether reduce motion is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,i.jsx)(s.code,{children:"true"})," when reduce motion is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h3,{id:"isreducetransparencyenabled-ios",children:[(0,i.jsx)(s.code,{children:"isReduceTransparencyEnabled()"})," ",(0,i.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static isReduceTransparencyEnabled(): Promise<boolean>;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Query whether reduce transparency is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,i.jsx)(s.code,{children:"true"})," when a reduce transparency is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"isscreenreaderenabled",children:(0,i.jsx)(s.code,{children:"isScreenReaderEnabled()"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static isScreenReaderEnabled(): Promise<boolean>;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Query whether a screen reader is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,i.jsx)(s.code,{children:"true"})," when a screen reader is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.h3,{id:"preferscrossfadetransitions-ios",children:[(0,i.jsx)(s.code,{children:"prefersCrossFadeTransitions()"})," ",(0,i.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static prefersCrossFadeTransitions(): Promise<boolean>;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Query whether reduce motion and prefer cross-fade transitions settings are currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,i.jsx)(s.code,{children:"true"})," when prefer cross-fade transitions is enabled and ",(0,i.jsx)(s.code,{children:"false"})," otherwise."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"setaccessibilityfocus",children:(0,i.jsx)(s.code,{children:"setAccessibilityFocus()"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:"static setAccessibilityFocus(reactTag: number);\n"})}),"\n",(0,i.jsx)(s.p,{children:"Set accessibility focus to a React component."}),"\n",(0,i.jsxs)(s.p,{children:["On Android, this calls ",(0,i.jsx)(s.code,{children:"UIManager.sendAccessibilityEvent"})," method with passed ",(0,i.jsx)(s.code,{children:"reactTag"})," and ",(0,i.jsx)(s.code,{children:"UIManager.AccessibilityEventTypes.typeViewFocused"})," arguments."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"}),": Make sure that any ",(0,i.jsx)(s.code,{children:"View"})," you want to receive the accessibility focus has ",(0,i.jsx)(s.code,{children:"accessible={true}"}),"."]}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},71426:(e,s,n)=>{var i=n(27378),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var i,t={},l=null,o=null;for(i in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(o=s.ref),s)c.call(s,i)&&!a.hasOwnProperty(i)&&(t[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===t[i]&&(t[i]=s[i]);return{$$typeof:r,type:e,key:l,ref:o,props:t,_owner:d.current}}s.Fragment=t,s.jsx=l,s.jsxs=l},24246:(e,s,n)=>{e.exports=n(71426)},71670:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>t});var i=n(27378);const r=i.createContext({});function t(e){const s=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||c:t(e),i.createElement(r.Provider,{value:d},s)}}}]);