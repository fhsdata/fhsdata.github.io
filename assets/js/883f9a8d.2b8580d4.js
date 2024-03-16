/*! For license information please see 883f9a8d.2b8580d4.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9242],{93524:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=o(24246),s=o(71670);const a={title:"Announcing React Native 0.63 with LogBox",author:"Mike Grabowski",authorTitle:"CTO and Co-Founder at Callstack",authorURL:"https://twitter.com/grabbou",authorImageURL:"https://avatars0.githubusercontent.com/u/2464966?s=460&v=4",authorTwitter:"grabbou",tags:["announcement","release"]},i=void 0,r={permalink:"/blog/2020/07/06/version-0.63",source:"@site/blog/2020-07-06-version-0.63.md",title:"Announcing React Native 0.63 with LogBox",description:"Today we\u2019re releasing React Native 0.63 that ships with LogBox turned on by default.",date:"2020-07-06T00:00:00.000Z",formattedDate:"July 6, 2020",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],readingTime:7.065,hasTruncateMarker:!1,authors:[{name:"Mike Grabowski",title:"CTO and Co-Founder at Callstack",url:"https://twitter.com/grabbou",imageURL:"https://avatars0.githubusercontent.com/u/2464966?s=460&v=4"}],frontMatter:{title:"Announcing React Native 0.63 with LogBox",author:"Mike Grabowski",authorTitle:"CTO and Co-Founder at Callstack",authorURL:"https://twitter.com/grabbou",authorImageURL:"https://avatars0.githubusercontent.com/u/2464966?s=460&v=4",authorTwitter:"grabbou",tags:["announcement","release"]},unlisted:!1,prevItem:{title:"React Native Team Principles",permalink:"/blog/2020/07/17/react-native-principles"},nextItem:{title:"Announcing React Native 0.62 with Flipper",permalink:"/blog/2020/03/26/version-0.62"}},l={authorsImageUrls:[void 0]},c=[{value:"LogBox",id:"logbox",level:2},{value:"Pressable",id:"pressable",level:2},{value:"Native Colors (PlatformColor, DynamicColorIOS)",id:"native-colors-platformcolor-dynamiccolorios",level:2},{value:"Dropping iOS 9 and Node.js 8 support",id:"dropping-ios-9-and-nodejs-8-support",level:2},{value:"Other notable improvements",id:"other-notable-improvements",level:2},{value:"Thanks",id:"thanks",level:2}];function h(e){const t=Object.assign({p:"p",h2:"h2",a:"a",img:"img",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",blockquote:"blockquote"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Today we\u2019re releasing React Native 0.63 that ships with LogBox turned on by default."}),"\n",(0,n.jsx)(t.h2,{id:"logbox",children:"LogBox"}),"\n",(0,n.jsxs)(t.p,{children:["We\u2019ve heard frequent feedback from the community that errors and warnings are difficult to debug in React Native. To address these issues we took a look at the entire error, warning, and log system in React Native and redesigned it ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=Y8brBH5O-bQ&feature=youtu.be",children:"from the ground up"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Screenshot of LogBox",src:o(47883).Z+"",width:"1600",height:"894"})}),"\n",(0,n.jsx)(t.p,{children:"LogBox is a completely redesigned redbox, yellowbox, and logging experience in React Native. In 0.62 we introduced LogBox as an opt-in. In this release, we\u2019re launching LogBox as the default experience in all of React Native."}),"\n",(0,n.jsx)(t.p,{children:"LogBox addresses complaints that errors and warnings were too verbose, poorly formatted, or unactionable by focusing on three primary goals:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Concise"}),": Logs should provide the minimum amount of information necessary to debug an issue."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Formatted"}),": Logs should be formatted so that you can quickly find the information you need."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Actionable"}),": Logs should be actionable, so you can fix the issue and move on."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"To achieve these goals, LogBox includes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Log notifications"}),": We\u2019ve redesigned the warning notifications and added support for errors so that all console.warn and console.log messages show up as notifications instead of covering your app."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Code Frames"}),": Every error and warning now includes a code frame that shows the source code of the log right inside the app, allowing you to quickly identify the source of your issue."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Component Stacks"}),": All component stacks are now stripped from error messages and put into their own section with the top three frames visible. This gives you a single, consistent space to expect stack frame information that doesn\u2019t clutter the log message."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Stack Frame Collapsing"}),": By default we now collapse call stack frames not related to your application\u2019s code so you can quickly see the issue in your app and not sift through React Native internals."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Syntax Error Formatting"}),": We\u2019ve improved the formatting for syntax errors and added codeframes with syntax highlighting so you can see the source of the error, fix it, and continue coding without React Native getting in your way."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We\u2019ve wrapped all of these features into an improved visual design that\u2019s consistent between errors and warnings and allows paginating through all logs in one enjoyable UI."}),"\n",(0,n.jsx)(t.p,{children:"With this change we\u2019re also deprecating YellowBox in favor of LogBox APIs:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"LogBox.ignoreLogs()"}),": This function replaces ",(0,n.jsx)(t.code,{children:"YellowBox.ignoreLogs([])"})," as a way to silence any logs that match the given strings or regexes."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"LogBox.ignoreAllLogs()"}),": This function replaces ",(0,n.jsx)(t.code,{children:"console.disableYellowBox"})," as a way to turn off error or warning notifications. Note: this only disables notifications, uncaught errors will still open a full screen LogBox."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In 0.63, we will warn when using these deprecated modules or methods. Please update your call sites off of these APIs before they are removed in 0.64."}),"\n",(0,n.jsxs)(t.p,{children:["For more information on LogBox and debugging react native, see the docs ",(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/debugging#in-app-errors-and-warnings",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"pressable",children:"Pressable"}),"\n",(0,n.jsxs)(t.p,{children:["React Native is built to enable applications to meet user\u2019s expectations of the platform. This includes avoiding \u201ctells\u201d\u2014little things that give away that the experience was built with React Native. One major source of these tells has been the Touchable components: ",(0,n.jsx)(t.code,{children:"Button"}),", ",(0,n.jsx)(t.code,{children:"TouchableWithoutFeedback"}),", ",(0,n.jsx)(t.code,{children:"TouchableHighlight"}),", ",(0,n.jsx)(t.code,{children:"TouchableOpacity"}),", ",(0,n.jsx)(t.code,{children:"TouchableNativeFeedback"}),", and ",(0,n.jsx)(t.code,{children:"TouchableBounce"}),". These components make your application interactive by allowing you to provide visual feedback to user interactions. However, because they include built-in styles and effects that don\u2019t match the platform interaction, users can tell when experiences are written with React Native."]}),"\n",(0,n.jsx)(t.p,{children:"Further, as React Native has grown and our bar for high-quality applications has gone up, these components haven't grown with it. React Native now supports platforms like Web, Desktop, and TV, but support for additional input modalities has been lacking. React Native needs to support high-quality interaction experiences on all platforms."}),"\n",(0,n.jsxs)(t.p,{children:["To address these problems, we are shipping a new core component called ",(0,n.jsx)(t.code,{children:"Pressable"}),". This component can be used to detect various types of interactions. The API was designed to provide direct access to the current state of interaction without having to maintain state manually in a parent component. It was also designed to enable platforms to extend it's capabilities to include hover, blur, focus, and more. We expect that most people will build and share components utilizing ",(0,n.jsx)(t.code,{children:"Pressable"})," under the hood instead of relying on the default experience of something like ",(0,n.jsx)(t.code,{children:"TouchableOpacity"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import {Pressable, Text} from 'react-native';\n\n<Pressable\n  onPress={() => {\n    console.log('pressed');\n  }}\n  style={({pressed}) => ({\n    backgroundColor: pressed ? 'lightskyblue' : 'white',\n  })}>\n  <Text style={styles.text}>Press Me!</Text>\n</Pressable>;\n"})}),"\n",(0,n.jsx)("p",{className:"snippet-caption",children:(0,n.jsx)(t.p,{children:"A simple example of a Pressable component in action"})}),"\n",(0,n.jsxs)(t.p,{children:["You can learn more about it from ",(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/pressable",children:"the documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"native-colors-platformcolor-dynamiccolorios",children:"Native Colors (PlatformColor, DynamicColorIOS)"}),"\n",(0,n.jsx)(t.p,{children:"Every native platform has the concept of system-defined colors. Colors that automatically respond to system theme settings such as Light or Dark mode, accessibility settings such as a High Contrast mode, and even its context within the app such as the traits of a containing view or window."}),"\n",(0,n.jsxs)(t.p,{children:["While it is possible to detect some of these settings via the ",(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/appearance#getcolorscheme",children:(0,n.jsx)(t.code,{children:"Appearance"})})," API and/or ",(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/accessibilityinfo#isgrayscaleenabled",children:(0,n.jsx)(t.code,{children:"AccessibilityInfo"})})," and set your styles accordingly, such abstractions are not only costly to develop but are approximating the appearance of native colors. These inconsistencies are particularly noticeable when working on a hybrid application, where React Native elements co-exist next to the native ones."]}),"\n",(0,n.jsxs)(t.p,{children:["React Native now provides an out-of-the-box solution to use these system colors. ",(0,n.jsx)(t.code,{children:"PlatformColor()"})," is a new API that can be used like any other color in React Native."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, on iOS, the ",(0,n.jsxs)(t.a,{href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors?language=objc",children:["system provides a color called ",(0,n.jsx)(t.code,{children:"labelColor"})]}),". That can be used in React Native with ",(0,n.jsx)(t.code,{children:"PlatformColor"})," like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import {Text, PlatformColor} from 'react-native';\n\n<Text style={{color: PlatformColor('labelColor')}}>\n  This is a label\n</Text>;\n"})}),"\n",(0,n.jsx)("p",{className:"snippet-caption",children:(0,n.jsx)(t.p,{children:"Sets the color of the Text component to labelColor as defined by\niOS."})}),"\n",(0,n.jsxs)(t.p,{children:["Android, on the other hand, ",(0,n.jsx)(t.a,{href:"https://developer.android.com/reference/android/R.attr#colorButtonNormal",children:"provides colors like colorButtonNormal"}),". You can use this color in React Native with:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import {View, Text, PlatformColor} from 'react-native';\n\n<View\n  style={{\n    backgroundColor: PlatformColor('?attr/colorButtonNormal'),\n  }}>\n  <Text>This is colored like a button!</Text>\n</View>;\n"})}),"\n",(0,n.jsx)("p",{className:"snippet-caption",children:(0,n.jsx)(t.p,{children:"Sets the background color of the View component to\ncolorButtonNormal as defined by Android."})}),"\n",(0,n.jsxs)(t.p,{children:["You can learn more about ",(0,n.jsx)(t.code,{children:"PlatformColor"})," from ",(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/platformcolor",children:"the documentation"}),". You can also check the actual ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PlatformColor/PlatformColorExample.js",children:"code examples present in the RNTester"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"DynamicColorIOS"})," is an iOS only API that lets you define which color to use in light and dark mode. Similar to ",(0,n.jsx)(t.code,{children:"PlatformColor"}),", this can be used anywhere you can use colors. ",(0,n.jsx)(t.code,{children:"DynamicColorIOS"})," uses iOS\u2019s ",(0,n.jsx)(t.code,{children:"colorWithDynamicProvider"})," under the hood."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import {Text, DynamicColorIOS} from 'react-native';\n\nconst customDynamicTextColor = DynamicColorIOS({\n  dark: 'lightskyblue',\n  light: 'midnightblue',\n});\n\n<Text style={{color: customDynamicTextColor}}>\n  This color changes automatically based on the system theme!\n</Text>;\n"})}),"\n",(0,n.jsx)("p",{className:"snippet-caption",children:(0,n.jsx)(t.p,{children:"Changes the text color based on the system theme"})}),"\n",(0,n.jsxs)(t.p,{children:["You can learn more about ",(0,n.jsx)(t.code,{children:"DynamicColorIOS"})," from ",(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/dynamiccolorios",children:"the documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"dropping-ios-9-and-nodejs-8-support",children:"Dropping iOS 9 and Node.js 8 support"}),"\n",(0,n.jsxs)(t.p,{children:["After over four years from its release, we are dropping support for iOS 9. This change will allow us to move faster by being able to reduce the number of compatibility checks that need to be placed in the native code to detect whether a given feature was supported on a certain iOS version. With its ",(0,n.jsx)(t.a,{href:"https://david-smith.org/iosversionstats/",children:"market share of 1%"}),", it shouldn\u2019t have much negative impact on your customers."]}),"\n",(0,n.jsxs)(t.p,{children:["At the same time, we are dropping support for Node 8. ",(0,n.jsx)(t.a,{href:"https://nodejs.org/fr/blog/release/v8.9.0/",children:"Its LTS maintenance cycle expired in December 2019"}),". The current LTS is Node 10 and it is now the version that we are targeting. If you are still using Node 8 for the development of React Native applications, we encourage you to upgrade in order to receive all the latest security fixes and updates."]}),"\n",(0,n.jsx)(t.h2,{id:"other-notable-improvements",children:"Other notable improvements"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:["Support rendering ",(0,n.jsx)(t.code,{children:"<View />"})," in ",(0,n.jsx)(t.code,{children:"<Text />"})," without explicit size"]}),": You can now render any ",(0,n.jsx)(t.code,{children:"<View />"})," inside any ",(0,n.jsx)(t.code,{children:"<Text />"})," component without setting its width and height explicitly, which wasn\u2019t always possible. On previous releases of React Native, this would result in a RedBox."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:["Changed iOS LaunchScreen from ",(0,n.jsx)(t.code,{children:"xib"})," to ",(0,n.jsx)(t.code,{children:"storyboard"})]}),": Starting April 30, 2020, all apps submitted to the App Store must use an Xcode storyboard to provide the app\u2019s launch screen and all iPhone apps must support all iPhone screens. This commit adjusts the default React Native template to be compatible with this requirement."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"thanks",children:"Thanks"}),"\n",(0,n.jsx)(t.p,{children:"Thank you to the hundreds of contributors that helped make 0.63 possible!"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Special thanks to ",(0,n.jsx)(t.a,{href:"https://twitter.com/rickhanlonii",children:"Rick Hanlon"})," for authoring the section on ",(0,n.jsx)(t.code,{children:"LogBox"})," and ",(0,n.jsx)(t.a,{href:"https://twitter.com/Eli_White",children:"Eli White"})," for authoring the ",(0,n.jsx)(t.code,{children:"Pressable"})," part of this article."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To see all the updates, take a look at the ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/main/CHANGELOG.md#v0630",children:"0.63 changelog"}),"."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},71426:(e,t,o)=>{var n=o(27378),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,a={},c=null,h=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:h,props:a,_owner:r.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},24246:(e,t,o)=>{e.exports=o(71426)},47883:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/0.63-logbox-a209851328e548bf0810bdee050fb960.png"},71670:(e,t,o)=>{o.d(t,{Zo:()=>r,ah:()=>a});var n=o(27378);const s=n.createContext({});function a(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function r({components:e,children:t,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||i:a(e),n.createElement(s.Provider,{value:r},t)}}}]);