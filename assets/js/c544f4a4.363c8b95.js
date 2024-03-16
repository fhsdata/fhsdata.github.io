/*! For license information please see c544f4a4.363c8b95.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[32145],{27315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(24246),s=n(71670),i=n(91761);const a={id:"intro-react-native-components",title:"Core Components and Native Components",description:"React Native lets you compose app interfaces using Native Components. Conveniently, it comes with a set of these components for you to get started with right now\u2014the Core Components!"},r=void 0,c={id:"intro-react-native-components",title:"Core Components and Native Components",description:"React Native lets you compose app interfaces using Native Components. Conveniently, it comes with a set of these components for you to get started with right now\u2014the Core Components!",source:"@site/versioned_docs/version-0.73/intro-react-native-components.md",sourceDirName:".",slug:"/intro-react-native-components",permalink:"/docs/intro-react-native-components",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/intro-react-native-components.md",tags:[],version:"0.73",lastUpdatedAt:1702040446,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{id:"intro-react-native-components",title:"Core Components and Native Components",description:"React Native lets you compose app interfaces using Native Components. Conveniently, it comes with a set of these components for you to get started with right now\u2014the Core Components!"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/getting-started"},next:{title:"React Fundamentals",permalink:"/docs/intro-react"}},d={},l=[{value:"Views and mobile development",id:"views-and-mobile-development",level:2},{value:"Native Components",id:"native-components",level:2},{value:"Core Components",id:"core-components",level:2}];function h(e){const t=Object.assign({p:"p",a:"a",h2:"h2",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",div:"div",hr:"hr"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["React Native is an open source framework for building Android and iOS applications using ",(0,o.jsx)(t.a,{href:"https://reactjs.org/",children:"React"})," and the app platform\u2019s native capabilities. With React Native, you use JavaScript to access your platform\u2019s APIs as well as to describe the appearance and behavior of your UI using React components: bundles of reusable, nestable code. You can learn more about React in the next section. But first, let\u2019s cover how components work in React Native."]}),"\n",(0,o.jsx)(t.h2,{id:"views-and-mobile-development",children:"Views and mobile development"}),"\n",(0,o.jsxs)(t.p,{children:["In Android and iOS development, a ",(0,o.jsx)(t.strong,{children:"view"})," is the basic building block of UI: a small rectangular element on the screen which can be used to display text, images, or respond to user input. Even the smallest visual elements of an app, like a line of text or a button, are kinds of views. Some kinds of views can contain other views. It\u2019s views all the way down!"]}),"\n",(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:"/docs/assets/diagram_ios-android-views.svg",width:"1000",alt:"Diagram of Android and iOS app showing them both built on top of atomic elements called views."}),(0,o.jsx)("figcaption",{children:"Just a sampling of the many views used in Android and iOS apps."})]}),"\n",(0,o.jsx)(t.h2,{id:"native-components",children:"Native Components"}),"\n",(0,o.jsxs)(t.p,{children:["In Android development, you write views in Kotlin or Java; in iOS development, you use Swift or Objective-C. With React Native, you can invoke these views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components. Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. We call these platform-backed components ",(0,o.jsx)(t.strong,{children:"Native Components."})]}),"\n",(0,o.jsxs)(t.p,{children:["React Native comes with a set of essential, ready-to-use Native Components you can use to start building your app today. These are React Native's ",(0,o.jsx)(t.strong,{children:"Core Components"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["React Native also lets you build your own Native Components for ",(0,o.jsx)(t.a,{href:"/docs/native-components-android",children:"Android"})," and ",(0,o.jsx)(t.a,{href:"/docs/native-components-ios",children:"iOS"})," to suit your app\u2019s unique needs. We also have a thriving ecosystem of these ",(0,o.jsx)(t.strong,{children:"community-contributed components."})," Check out ",(0,o.jsx)(t.a,{href:"https://reactnative.directory",children:"Native Directory"})," to find what the community has been creating."]}),"\n",(0,o.jsx)(t.h2,{id:"core-components",children:"Core Components"}),"\n",(0,o.jsxs)(t.p,{children:["React Native has many Core Components for everything from controls to activity indicators. You can find them all ",(0,o.jsx)(t.a,{href:"components-and-apis",children:"documented in the API section"}),". You will mostly work with the following Core Components:"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"React Native UI Component"}),(0,o.jsx)(t.th,{children:"Android View"}),(0,o.jsx)(t.th,{children:"iOS View"}),(0,o.jsx)(t.th,{children:"Web Analog"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<View>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<ViewGroup>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<UIView>"})}),(0,o.jsxs)(t.td,{children:["A non-scrolling ",(0,o.jsx)(t.code,{children:"<div>"})]}),(0,o.jsx)(t.td,{children:"A container that supports layout with flexbox, style, some touch handling, and accessibility controls"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<Text>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<TextView>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<UITextView>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<p>"})}),(0,o.jsx)(t.td,{children:"Displays, styles, and nests strings of text and even handles touch events"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<Image>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<ImageView>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<UIImageView>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<img>"})}),(0,o.jsx)(t.td,{children:"Displays different types of images"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<ScrollView>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<ScrollView>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<UIScrollView>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<div>"})}),(0,o.jsx)(t.td,{children:"A generic scrolling container that can contain multiple components and views"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<TextInput>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<EditText>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<UITextField>"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:'<input type="text">'})}),(0,o.jsx)(t.td,{children:"Allows the user to enter text"})]})]})]}),"\n",(0,o.jsx)(t.p,{children:"In the next section, you will start combining these Core Components to learn about how React works. Have a play with them here now!"}),"\n",(0,o.jsx)(t.div,{class:"snack-player","data-snack-name":"Hello World","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20Text%2C%20Image%2C%20ScrollView%2C%20TextInput%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CScrollView%3E%5Cn%20%20%20%20%20%20%3CText%3ESome%20text%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3ESome%20more%20text%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Freactnative.dev%2Fdocs%2Fassets%2Fp_cat2.png'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7Bwidth%3A%20200%2C%20height%3A%20200%7D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%5Cn%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'gray'%2C%5Cn%20%20%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20defaultValue%3D%5C%22You%20can%20type%20in%20me%5C%22%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["Because React Native uses the same API structure as React components, you\u2019ll need to understand React component APIs to get started. The ",(0,o.jsx)(t.a,{href:"intro-react",children:"next section"})," makes for a quick introduction or refresher on the topic. However, if you\u2019re already familiar with React, feel free to ",(0,o.jsx)(t.a,{href:"handling-text-input",children:"skip ahead"}),"."]}),"\n",(0,o.jsx)(i.Z,{alt:"A diagram showing React Native's Core Components are a subset of React Components that ship with React Native.",sources:{light:"/docs/assets/diagram_react-native-components.svg",dark:"/docs/assets/diagram_react-native-components_dark.svg"}})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(h,e)})):h(e)}},71426:(e,t,n)=>{var o=n(27378),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,i={},d=null,l=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,o)&&!c.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:s,type:e,key:d,ref:l,props:i,_owner:r.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>i});var o=n(27378);const s=o.createContext({});function i(e){const t=o.useContext(s);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||a:i(e),o.createElement(s.Provider,{value:r},t)}}}]);