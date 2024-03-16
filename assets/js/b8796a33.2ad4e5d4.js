/*! For license information please see b8796a33.2ad4e5d4.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[42265],{15797:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var r=s(24246),i=s(71670);const d={id:"platform",title:"Platform"},t=void 0,l={id:"platform",title:"Platform",description:"Example",source:"@site/versioned_docs/version-0.72/platform.md",sourceDirName:".",slug:"/platform",permalink:"/docs/0.72/platform",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/platform.md",tags:[],version:"0.72",lastUpdatedAt:1687362382,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{id:"platform",title:"Platform"},sidebar:"api",previous:{title:"PixelRatio",permalink:"/docs/0.72/pixelratio"},next:{title:"PlatformColor",permalink:"/docs/0.72/platformcolor"}},c={},a=[{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>constants</code>",id:"constants",level:3},{value:'<code>isPad</code> <div class="label ios">iOS</div>',id:"ispad-ios",level:3},{value:"<code>isTV</code>",id:"istv",level:3},{value:"<code>isTesting</code>",id:"istesting",level:3},{value:"<code>OS</code>",id:"os",level:3},{value:"<code>Version</code>",id:"version",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>select()</code>",id:"select",level:3},{value:"Parameters:",id:"parameters",level:4}];function o(e){const n=Object.assign({h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",code:"code",pre:"pre",p:"p",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",h4:"h4",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.div,{class:"snack-player","data-snack-name":"Platform API Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BPlatform%2C%20StyleSheet%2C%20Text%2C%20ScrollView%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CScrollView%20contentContainerStyle%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3EOS%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.OS%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%3EOS%20Version%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.Version%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%3EisTV%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.isTV.toString()%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20'ios'%20%26%26%20(%5Cn%20%20%20%20%20%20%20%20%3C%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EisPad%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.isPad.toString()%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2F%3E%5Cn%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%3CText%3EConstants%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%5Cn%20%20%20%20%20%20%20%20%7BJSON.stringify(Platform.constants%2C%20null%2C%202)%7D%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20value%3A%20%7B%5Cn%20%20%20%20fontWeight%3A%20'600'%2C%5Cn%20%20%20%20padding%3A%204%2C%5Cn%20%20%20%20marginBottom%3A%208%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"constants",children:(0,r.jsx)(n.code,{children:"constants"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"static constants: PlatformConstants;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns an object which contains all available common and specific constants related to the platform."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Properties:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)("div",{className:"widerColumn",children:"Name"})}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isTesting"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"reactNativeVersion"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsxs)(n.td,{children:["Information about React Native version. Keys are ",(0,r.jsx)(n.code,{children:"major"}),", ",(0,r.jsx)(n.code,{children:"minor"}),", ",(0,r.jsx)(n.code,{children:"patch"})," with optional ",(0,r.jsx)(n.code,{children:"prerelease"})," and values are ",(0,r.jsx)(n.code,{children:"number"}),"s."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Version ",(0,r.jsx)("div",{className:"label android",children:"Android"})]}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"OS version constant specific to Android."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Release ",(0,r.jsx)("div",{className:"label android",children:"Android"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Serial ",(0,r.jsx)("div",{className:"label android",children:"Android"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Hardware serial number of an Android device."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Fingerprint ",(0,r.jsx)("div",{className:"label android",children:"Android"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"A string that uniquely identifies the build."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Model ",(0,r.jsx)("div",{className:"label android",children:"Android"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"The end-user-visible name for the Android device."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Brand ",(0,r.jsx)("div",{className:"label android",children:"Android"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"The consumer-visible brand with which the product/hardware will be associated."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Manufacturer ",(0,r.jsx)("div",{className:"label android",children:"Android"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"The manufacturer of the Android device."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["ServerHost ",(0,r.jsx)("div",{className:"label android",children:"Android"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["uiMode ",(0,r.jsx)("div",{className:"label android",children:"Android"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsxs)(n.td,{children:["Possible values are: ",(0,r.jsx)(n.code,{children:"'car'"}),", ",(0,r.jsx)(n.code,{children:"'desk'"}),", ",(0,r.jsx)(n.code,{children:"'normal'"}),",",(0,r.jsx)(n.code,{children:"'tv'"}),", ",(0,r.jsx)(n.code,{children:"'watch'"})," and ",(0,r.jsx)(n.code,{children:"'unknown'"}),". Read more about ",(0,r.jsx)(n.a,{href:"https://developer.android.com/reference/android/app/UiModeManager.html",children:"Android ModeType"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["forceTouchAvailable ",(0,r.jsx)("div",{className:"label ios",children:"iOS"})]}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Indicate the availability of 3D Touch on a device."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["interfaceIdiom ",(0,r.jsx)("div",{className:"label ios",children:"iOS"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsxs)(n.td,{children:["The interface type for the device. Read more about ",(0,r.jsx)(n.a,{href:"https://developer.apple.com/documentation/uikit/uiuserinterfaceidiom",children:"UIUserInterfaceIdiom"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["osVersion ",(0,r.jsx)("div",{className:"label ios",children:"iOS"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"OS version constant specific to iOS."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["systemName ",(0,r.jsx)("div",{className:"label ios",children:"iOS"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"OS name constant specific to iOS."})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"ispad-ios",children:[(0,r.jsx)(n.code,{children:"isPad"})," ",(0,r.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"static isPad: boolean;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns a boolean which defines if device is an iPad."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Type"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"boolean"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"istv",children:(0,r.jsx)(n.code,{children:"isTV"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"static isTV: boolean;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns a boolean which defines if device is a TV."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Type"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"boolean"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"istesting",children:(0,r.jsx)(n.code,{children:"isTesting"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"static isTesting: boolean;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns a boolean which defines if application is running in Developer Mode with testing flag set."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Type"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"boolean"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"os",children:(0,r.jsx)(n.code,{children:"OS"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"static OS: 'android' | 'ios';\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns string value representing the current OS."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Type"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:["enum(",(0,r.jsx)(n.code,{children:"'android'"}),", ",(0,r.jsx)(n.code,{children:"'ios'"}),")"]})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"version",children:(0,r.jsx)(n.code,{children:"Version"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"static Version: 'number' | 'string';\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the version of the OS."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Type"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:["number ",(0,r.jsx)("div",{className:"label android",children:"Android"}),(0,r.jsx)("hr",{}),"string ",(0,r.jsx)("div",{className:"label ios",children:"iOS"})]})})})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"select",children:(0,r.jsx)(n.code,{children:"select()"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"static select(config: Record<string, T>): T;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the most fitting value for the platform you are currently running on."}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"config"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"See config description below."})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["Select method returns the most fitting value for the platform you are currently running on. That is, if you're running on a phone, ",(0,r.jsx)(n.code,{children:"android"})," and ",(0,r.jsx)(n.code,{children:"ios"})," keys will take preference. If those are not specified, ",(0,r.jsx)(n.code,{children:"native"})," key will be used and then the ",(0,r.jsx)(n.code,{children:"default"})," key."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"config"})," parameter is an object with the following keys:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"android"})," (any)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ios"})," (any)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"native"})," (any)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"default"})," (any)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import {Platform, StyleSheet} from 'react-native';\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    ...Platform.select({\n      android: {\n        backgroundColor: 'green',\n      },\n      ios: {\n        backgroundColor: 'red',\n      },\n      default: {\n        // other platforms, web for example\n        backgroundColor: 'blue',\n      },\n    }),\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will result in a container having ",(0,r.jsx)(n.code,{children:"flex: 1"})," on all platforms, a green background color on Android, a red background color on iOS, and a blue background color on other platforms."]}),"\n",(0,r.jsxs)(n.p,{children:["Since the value of the corresponding platform key can be of type ",(0,r.jsx)(n.code,{children:"any"}),", ",(0,r.jsx)(n.a,{href:"/docs/0.72/platform#select",children:(0,r.jsx)(n.code,{children:"select"})})," method can also be used to return platform-specific components, like below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const Component = Platform.select({\n  ios: () => require('ComponentIOS'),\n  android: () => require('ComponentAndroid'),\n})();\n\n<Component />;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const Component = Platform.select({\n  native: () => require('ComponentForNative'),\n  default: () => require('ComponentForWeb'),\n})();\n\n<Component />;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},71426:(e,n,s)=>{var r=s(27378),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,d={},a=null,o=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(o=n.ref),n)t.call(n,r)&&!c.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:i,type:e,key:a,ref:o,props:d,_owner:l.current}}n.Fragment=d,n.jsx=a,n.jsxs=a},24246:(e,n,s)=>{e.exports=s(71426)},71670:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>d});var r=s(27378);const i=r.createContext({});function d(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||t:d(e),r.createElement(i.Provider,{value:l},n)}}}]);