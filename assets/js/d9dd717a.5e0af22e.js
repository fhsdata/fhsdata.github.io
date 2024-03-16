/*! For license information please see d9dd717a.5e0af22e.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[25795],{33536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(24246),i=r(71670);const o={title:"Announcing React Native 0.62 with Flipper",author:"Rick Hanlon",authorTitle:"React Native Core at Facebook",authorURL:"https://twitter.com/rickhanlonii",authorImageURL:"https://avatars3.githubusercontent.com/u/2440089?s=460&v=4",authorTwitter:"rickhanlonii",tags:["announcement","release"]},a=void 0,s={permalink:"/blog/2020/03/26/version-0.62",source:"@site/blog/2020-03-26-version-0.62.md",title:"Announcing React Native 0.62 with Flipper",description:"Today we\u2019re releasing React Native version 0.62 which includes support for Flipper by default.",date:"2020-03-26T00:00:00.000Z",formattedDate:"March 26, 2020",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],readingTime:4.26,hasTruncateMarker:!1,authors:[{name:"Rick Hanlon",title:"React Native Core at Facebook",url:"https://twitter.com/rickhanlonii",imageURL:"https://avatars3.githubusercontent.com/u/2440089?s=460&v=4"}],frontMatter:{title:"Announcing React Native 0.62 with Flipper",author:"Rick Hanlon",authorTitle:"React Native Core at Facebook",authorURL:"https://twitter.com/rickhanlonii",authorImageURL:"https://avatars3.githubusercontent.com/u/2440089?s=460&v=4",authorTwitter:"rickhanlonii",tags:["announcement","release"]},unlisted:!1,prevItem:{title:"Announcing React Native 0.63 with LogBox",permalink:"/blog/2020/07/06/version-0.63"},nextItem:{title:"Meet Doctor, a new React Native command",permalink:"/blog/2019/11/18/react-native-doctor"}},c={authorsImageUrls:[void 0]},l=[{value:"Flipper by default",id:"flipper-by-default",level:2},{value:"New dark mode features",id:"new-dark-mode-features",level:2},{value:"Moving Apple TV to react-native-tvos",id:"moving-apple-tv-to-react-native-tvos",level:2},{value:"More upgrade support",id:"more-upgrade-support",level:2},{value:"Other improvements",id:"other-improvements",level:2},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Deprecations",id:"deprecations",level:2},{value:"Thanks",id:"thanks",level:2}];function d(e){const t=Object.assign({p:"p",h2:"h2",a:"a",img:"img",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Today we\u2019re releasing React Native version 0.62 which includes support for Flipper by default."}),"\n",(0,n.jsx)(t.p,{children:"This release comes in the midst of a global pandemic. We\u2019re releasing this version today to respect the work of hundreds of contributors who made this release possible and to prevent the release from falling too far behind master. Please be mindful of the reduced capacity of contributors to help with issues and prepare to delay upgrading if necessary."}),"\n",(0,n.jsx)(t.h2,{id:"flipper-by-default",children:"Flipper by default"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://fbflipper.com/",children:"Flipper"})," is a developer tool for debugging mobile apps. It\u2019s popular in the Android and iOS communities, and in this release we\u2019ve enabled support by default for new and existing React Native apps."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Screenshot of Flipper for React Native",src:r(28172).Z+"",width:"1666",height:"967"})}),"\n",(0,n.jsx)(t.p,{children:"Flipper provides the following features out of the box:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Metro Actions"}),": Reload the app and trigger the Dev Menu right from the toolbar."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Crash Reporter"}),": View crash reports from Android and iOS devices."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"React DevTools"}),": Use the newest version of React DevTools right alongside all your other tools."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Network Inspector"}),": View all of the network requests made by device applications."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Metro and Device Logs"}),": View, search, and filter all logs from both Metro and the Device."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Native Layout Inspector"}),": View and edit the native layout output by the React Native renderer."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Database and Preference Inspectors"}),": View and edit the device databases and preferences."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, since Flipper is an extensible platform, it provides a marketplace that pulls plugins from NPM so you can publish and install custom plugins specific to your workflows. See the available plugins ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/search?q=flipper-plugin",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information, check out the ",(0,n.jsx)(t.a,{href:"https://fbflipper.com/docs/features/react-native",children:"Flipper documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"new-dark-mode-features",children:"New dark mode features"}),"\n",(0,n.jsxs)(t.p,{children:["We\u2019ve added a new ",(0,n.jsx)(t.code,{children:"Appearance"})," module to provide access to the user's appearance preferences, such as their preferred color scheme (light or dark)."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // Use dark color scheme\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"We\u2019ve also added a hook to subscribe to state updates to the users preferences:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import {Text, useColorScheme} from 'react-native';\n\nconst MyComponent = () => {\n  const colorScheme = useColorScheme();\n  return <Text>useColorScheme(): {colorScheme}</Text>;\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["See the docs for ",(0,n.jsx)(t.a,{href:"/docs/appearance",children:"Appearance"})," and ",(0,n.jsx)(t.a,{href:"/docs/usecolorscheme",children:"useColorScheme"})," for more information."]}),"\n",(0,n.jsx)(t.h2,{id:"moving-apple-tv-to-react-native-tvos",children:"Moving Apple TV to react-native-tvos"}),"\n",(0,n.jsxs)(t.p,{children:["As part of our ",(0,n.jsx)(t.a,{href:"/blog/#lean-core",children:"Lean Core effort"})," and to bring Apple TV in line with other platforms like React Native Windows and React Native macOS, we\u2019ve started to remove Apple TV specific code from core."]}),"\n",(0,n.jsxs)(t.p,{children:["Going forward, Apple TV support for React Native will be maintained in ",(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/react-native-tvos",children:"react-native-community/react-native-tvos"})," along with the corresponding ",(0,n.jsx)(t.code,{children:"react-native-tvos"})," NPM package. This is a full fork of the main repository, with only the changes needed to support Apple TV."]}),"\n",(0,n.jsxs)(t.p,{children:["Releases of ",(0,n.jsx)(t.code,{children:"react-native-tvos"})," will be based on the public release of React Native. For this 0.62 release of ",(0,n.jsx)(t.code,{children:"react-native"})," please upgrade Apple TV projects to use ",(0,n.jsx)(t.code,{children:"react-native-tvos"})," 0.62."]}),"\n",(0,n.jsx)(t.h2,{id:"more-upgrade-support",children:"More upgrade support"}),"\n",(0,n.jsxs)(t.p,{children:["When 0.61 was released, the community introduced a new ",(0,n.jsx)(t.a,{href:"https://react-native-community.github.io/upgrade-helper/",children:"upgrade helper"})," tool to support developers upgrading to new versions of React Native. The upgrade helper provides a diff of changes from the version you're on to the version you're targeting, allowing you to see the changes that need to be made for your specific upgrade."]}),"\n",(0,n.jsxs)(t.p,{children:["Even with this tool, issues come up when upgrading. Today we're introducing more dedicated upgrading support by announcing ",(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/upgrade-support",children:"Upgrade-Support"}),". Upgrade Support is a GitHub issue tracker where users can submit issues specific to upgrading their projects to receive help from the community."]}),"\n",(0,n.jsx)(t.p,{children:"We're always working to improve the upgrade experience, and we hope that these tools give users the support they need in the edge cases we haven't covered yet."}),"\n",(0,n.jsx)(t.h2,{id:"other-improvements",children:"Other improvements"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"LogBox"}),": We\u2019re adding the new LogBox error and warning experience as an opt-in; to enable it, add ",(0,n.jsx)(t.code,{children:"require('react-native').unstable_enableLogBox()"})," to your ",(0,n.jsx)(t.code,{children:"index.js"})," file."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"React DevTools v4"}),": This change includes an upgrade to the ",(0,n.jsx)(t.a,{href:"https://reactjs.org/blog/2019/08/15/new-react-devtools.html",children:"latest React DevTools"})," which offers significant performance gains, an improved navigation experience, and full support for React Hooks."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Accessibility improvements"}),": We\u2019ve made improvements to accessibility including adding ",(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/accessibility#accessibilityvalue-ios-android",children:"accessibilityValue"}),", missing props on ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/commit/8c0c860e38f57e18296f689e47dfb4a54088c260",children:"Touchables"}),", ",(0,n.jsx)(t.code,{children:"onSlidingComplete"})," ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/commit/c7aa6dc8270c0eabc913fe6c617c8131e3f4b3c5",children:"accessibility events"}),", and changing the default role of Switch component from ",(0,n.jsx)(t.code,{children:'"button"'})," to ",(0,n.jsx)(t.code,{children:'"switch"'}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Remove PropTypes"}),": We're removing ",(0,n.jsx)(t.code,{children:"propTypes"})," from core components in order to reduce the app size impact of React Native core and to favor static type systems which check at compile time instead of runtime."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Remove accessibilityStates"}),": We\u2019ve ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/commit/7b35f427fd66cb0f36921b992095fe5b3c14d8b9",children:"removed"})," the deprecated ",(0,n.jsx)(t.code,{children:"accessibilityStates"})," property in favor of the new ",(0,n.jsx)(t.code,{children:"accessibilityState"})," prop which is a more semantically rich way for components to describe information about their state to accessibility services."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"TextInput changes"}),": We removed ",(0,n.jsx)(t.code,{children:"onTextInput"})," ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/commit/3f7e0a2c9601fc186f25bfd794cd0008ac3983ab",children:"from TextInput"})," as it\u2019s uncommon, not W3C compliant, and difficult to implement in ",(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/discussions-and-proposals/issues/4",children:"Fabric"}),". We also removed the undocumented ",(0,n.jsx)(t.code,{children:"inputView"})," prop, and ",(0,n.jsx)(t.code,{children:"selectionState"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"deprecations",children:"Deprecations"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"AccessibilityInfo.fetch"})," was already deprecated, but in this release we ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/commit/523ab8333800afbfb169c6fd70ab6611fe07cc2a",children:"added a warning"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Setting ",(0,n.jsx)(t.code,{children:"useNativeDriver"})," is ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/commit/5876052615f4858ed5fc32fa3da9b64695974238",children:"now required"})," to support switching the default in the future."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"ref"})," of an ",(0,n.jsx)(t.code,{children:"Animated"})," component is now the internal component and ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/commit/66e72bb4e00aafbcb9f450ed5db261d98f99f82a",children:"deprecated"})," ",(0,n.jsx)(t.code,{children:"getNode"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"thanks",children:"Thanks"}),"\n",(0,n.jsx)(t.p,{children:"Thank you to the hundreds of contributors that helped make 0.62 possible!"}),"\n",(0,n.jsxs)(t.p,{children:["To see all the updates, take a look at the ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/main/CHANGELOG.md#v0620",children:"0.62 changelog"}),"."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},71426:(e,t,r)=>{var n=r(27378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},24246:(e,t,r)=>{e.exports=r(71426)},28172:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/0.62-flipper-dc5a5cb54cc6033750c56f3c147c6ce3.png"},71670:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>o});var n=r(27378);const i=n.createContext({});function o(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||a:o(e),n.createElement(i.Provider,{value:s},t)}}}]);