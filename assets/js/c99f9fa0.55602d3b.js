/*! For license information please see c99f9fa0.55602d3b.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[63563],{14430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var n=a(24246),r=a(71670);const s={title:"Releasing React Native 0.59",author:"Ryan Turner",authorTitle:"Core Maintainer & React Native Developer",authorURL:"https://twitter.com/turnrye",authorImageURL:"https://avatars0.githubusercontent.com/u/701035?s=460&v=4",authorTwitter:"turnrye",tags:["announcement","release"]},i=void 0,o={permalink:"/blog/2019/03/12/releasing-react-native-059",source:"@site/blog/2019-03-12-releasing-react-native-059.md",title:"Releasing React Native 0.59",description:"Welcome to the 0.59 release of React Native! This is another big release with 644 commits by 88 contributors. Contributions also come in other forms, so thank you for maintaining issues, fostering communities, and teaching people about React Native. This month brings a number of highly anticipated changes, and we hope you enjoy them.",date:"2019-03-12T00:00:00.000Z",formattedDate:"March 12, 2019",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],readingTime:5.115,hasTruncateMarker:!1,authors:[{name:"Ryan Turner",title:"Core Maintainer & React Native Developer",url:"https://twitter.com/turnrye",imageURL:"https://avatars0.githubusercontent.com/u/701035?s=460&v=4"}],frontMatter:{title:"Releasing React Native 0.59",author:"Ryan Turner",authorTitle:"Core Maintainer & React Native Developer",authorURL:"https://twitter.com/turnrye",authorImageURL:"https://avatars0.githubusercontent.com/u/701035?s=460&v=4",authorTwitter:"turnrye",tags:["announcement","release"]},unlisted:!1,prevItem:{title:"React Native at F8 and Open Source Podcast",permalink:"/blog/2019/05/01/react-native-at-f8-and-podcast"},nextItem:{title:"React Native Open Source Update March 2019",permalink:"/blog/2019/03/01/react-native-open-source-update"}},c={authorsImageUrls:[void 0]},h=[{value:"\ud83c\udfa3 Hooks are here",id:"-hooks-are-here",level:2},{value:"\ud83d\udcf1 Updated JSC means performance gains and 64-bit support on Android",id:"-updated-jsc-means-performance-gains-and-64-bit-support-on-android",level:2},{value:"\ud83d\udca8 Faster app launches with inline requires",id:"-faster-app-launches-with-inline-requires",level:2},{value:"\ud83d\ude85 Lean core is underway",id:"-lean-core-is-underway",level:2},{value:"\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbb CLI improvements",id:"-cli-improvements",level:2},{value:"\ud83d\ude80 Upgrading to 0.59",id:"-upgrading-to-059",level:2},{value:"\ud83d\udd28 Breaking Changes",id:"-breaking-changes",level:2},{value:"\ud83e\udd17 Thanks",id:"-thanks",level:2}];function d(e){const t=Object.assign({p:"p",em:"em",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",a:"a",img:"img",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Welcome to the 0.59 release of React Native! This is another big release with 644 commits by 88 contributors. Contributions also come in other forms, so ",(0,n.jsx)(t.em,{children:"thank you"})," for maintaining issues, fostering communities, and teaching people about React Native. This month brings a number of highly anticipated changes, and we hope you enjoy them."]}),"\n",(0,n.jsx)(t.h2,{id:"-hooks-are-here",children:"\ud83c\udfa3 Hooks are here"}),"\n",(0,n.jsx)(t.p,{children:"React Hooks are part of this release, which let you reuse stateful logic across components. There is a lot of buzz about hooks, but if you haven't heard, take a look at some of the wonderful resources below:"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/hooks-intro.html",children:"Introducing Hooks"})," explains why we\u2019re adding Hooks to React."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/hooks-overview.html",children:"Hooks at a Glance"})," is a fast-paced overview of the built-in Hooks."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/hooks-custom.html",children:"Building Your Own Hooks"})," demonstrates code reuse with custom Hooks."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889",children:"Making Sense of React Hooks"})," explores the new possibilities unlocked by Hooks."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://usehooks.com/",children:"useHooks.com"})," showcases community-maintained Hooks recipes and demos."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Be sure to give this a try in your apps. We hope that you find the reuse as exciting as we do."}),"\n",(0,n.jsx)(t.h2,{id:"-updated-jsc-means-performance-gains-and-64-bit-support-on-android",children:"\ud83d\udcf1 Updated JSC means performance gains and 64-bit support on Android"}),"\n",(0,n.jsxs)(t.p,{children:["React Native uses JSC (",(0,n.jsx)(t.a,{href:"https://webkit.org/",children:"JavaScriptCore"}),") to power your application. JSC on Android was a few years old, which meant that a lot of modern JavaScript features weren't supported. Even worse, it performed poorly compared iOS's modern JSC. With this release, that all changes."]}),"\n",(0,n.jsxs)(t.p,{children:["Thanks to some awesome work by ",(0,n.jsx)(t.a,{href:"https://github.com/danielzlotin",children:"@DanielZlotin"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/dulmandakh",children:"@dulmandakh"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/gengjiawen",children:"@gengjiawen"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/kmagiera",children:"@kmagiera"}),", and ",(0,n.jsx)(t.a,{href:"https://github.com/kudo",children:"@kudo"})," JSC has caught up with the past few years. This brings with it 64-bit support, modern JavaScript support, and ",(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/jsc-android-buildscripts/tree/master/measure",children:"big performance improvements"}),". Kudos for also making this a maintainable process now so that we can take advantage of future WebKit improvements without so much legwork, and thank you Software Mansion and Expo for making this work possible."]}),"\n",(0,n.jsx)(t.h2,{id:"-faster-app-launches-with-inline-requires",children:"\ud83d\udca8 Faster app launches with inline requires"}),"\n",(0,n.jsx)(t.p,{children:'We want to help people have performant React Native apps by default and are working to bring Facebook\'s optimizations to the community. Applications load resources as needed rather than slowing down launch. This feature is called "inline requires", as it lets Metro identify components to be lazy loaded. Apps with a deep and varied component architecture will see the most improvement.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"source of the metro.config.js file in the 0.59 template, demonstrating where to enable inlineRequires",src:a(35595).Z+"",width:"724",height:"485"})}),"\n",(0,n.jsxs)(t.p,{children:["We need the community to let us know how it works before we turn it on by default. When you upgrade to 0.59, there will be a new ",(0,n.jsx)(t.code,{children:"metro.config.js"})," file; flip the options to true and give us ",(0,n.jsx)(t.a,{href:"https://twitter.com/hashtag/inline-requires",children:"your feedback"}),"! Read more about inline requires ",(0,n.jsx)(t.a,{href:"/docs/performance#inline-requires",children:"in the performance docs"})," to benchmark your app."]}),"\n",(0,n.jsx)(t.h2,{id:"-lean-core-is-underway",children:"\ud83d\ude85 Lean core is underway"}),"\n",(0,n.jsxs)(t.p,{children:["React Native is a large and complex project with a complicated repository. This makes the codebase less approachable to contributors, difficult to test, and bloated as a dev dependency. ",(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/discussions-and-proposals/issues/6",children:"Lean Core"})," is our effort to address these issues by migrating code to separate libraries for better management. The past few releases have seen the first steps of this, but ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=FMLKb4or8yg",children:"let's get serious"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"You may notice that additional components are now officially deprecated. This is great news, as there are now owners for these features actively maintaining them. Heed the warning messages and migrate to the new libraries for these features, because they will be removed in a future release. Below is a table indicating the component, its status, and where you may migrate your use to."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Component"}),(0,n.jsx)(t.th,{children:"Deprecated?"}),(0,n.jsx)(t.th,{children:"New home"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"AsyncStorage"})}),(0,n.jsx)(t.td,{children:"0.59"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/react-native-async-storage",children:"@react-native-community/react-native-async-storage"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ImageStore"})}),(0,n.jsx)(t.td,{children:"0.59"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://github.com/expo/expo/tree/master/packages/expo-file-system",children:"expo-file-system"})," or ",(0,n.jsx)(t.a,{href:"https://github.com/itinance/react-native-fs",children:"react-native-fs"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"MaskedViewIOS"})}),(0,n.jsx)(t.td,{children:"0.59"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/react-native-masked-view",children:"@react-native-community/react-native-masked-view"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"NetInfo"})}),(0,n.jsx)(t.td,{children:"0.59"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/react-native-netinfo",children:"@react-native-community/react-native-netinfo"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Slider"})}),(0,n.jsx)(t.td,{children:"0.59"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/react-native-slider",children:"@react-native-community/react-native-slider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ViewPagerAndroid"})}),(0,n.jsx)(t.td,{children:"0.59"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/react-native-viewpager",children:"@react-native-community/react-native-viewpager"})})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Over the coming months, there will be many more components following this path to a leaner core. We're looking for help with this \u2014 head over to the ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/issues/23313",children:"lean core umbrella"})," to pitch in."]}),"\n",(0,n.jsx)(t.h2,{id:"-cli-improvements",children:"\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbb CLI improvements"}),"\n",(0,n.jsxs)(t.p,{children:["React Native's command line tools are developer's entry point to the ecosystem, but they had long-standing issues and lacked official support. The CLI tools have been moved to a ",(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/react-native-cli",children:"new repository"}),", and a ",(0,n.jsx)(t.a,{href:"https://blog.callstack.io/the-react-native-cli-has-a-new-home-79b63838f0e6",children:"dedicated group of maintainers"})," have already made some exciting improvements."]}),"\n",(0,n.jsx)(t.p,{children:"Logs are formatted much better now. Commands now run nearly instantly \u2014 you'll immediately notice a difference:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"0.58&#39;s CLI is slow to start",src:a(49617).Z+"",width:"724",height:"399"}),(0,n.jsx)(t.img,{alt:"0.58&#39;s CLI is nearly instantaneous",src:a(10778).Z+"",width:"724",height:"399"})]}),"\n",(0,n.jsx)(t.h2,{id:"-upgrading-to-059",children:"\ud83d\ude80 Upgrading to 0.59"}),"\n",(0,n.jsxs)(t.p,{children:["We heard your feedback regarding the ",(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/discussions-and-proposals/issues/68",children:"React Native upgrade process"})," and we are taking steps to improve the experience in ",(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/discussions-and-proposals/issues/64#issuecomment-444775432",children:"future releases"}),". To upgrade to 0.59, we recommend using ",(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/rn-diff-purge",children:(0,n.jsx)(t.code,{children:"rn-diff-purge"})})," to determine what has changed between your current React Native version and 0.59, then applying those changes manually. Once you've upgraded your project to 0.59, you will be able to use the newly improved ",(0,n.jsx)(t.code,{children:"react-native upgrade"})," command (based on ",(0,n.jsx)(t.code,{children:"rn-diff-purge"}),"!) to upgrade to 0.60 and beyond as newer releases become available."]}),"\n",(0,n.jsx)(t.h2,{id:"-breaking-changes",children:"\ud83d\udd28 Breaking Changes"}),"\n",(0,n.jsxs)(t.p,{children:["Android support in 0.59 has been cleaned up following Google's latest recommendations, which may result in potential breakage of existing apps. This issue might present as a runtime crash and a message, \"You need to use a Theme.AppCompat theme (or descendant) with this activity\". We recommend updating your project's ",(0,n.jsx)(t.code,{children:"AndroidManifest.xml"})," file, making sure that the ",(0,n.jsx)(t.code,{children:"android:theme"})," value is an ",(0,n.jsx)(t.code,{children:"AppCompat"})," theme (such as ",(0,n.jsx)(t.code,{children:"@style/Theme.AppCompat.Light.NoActionBar"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"react-native-git-upgrade"})," command has been removed in 0.59, in favor of the newly improved ",(0,n.jsx)(t.code,{children:"react-native upgrade"})," command."]}),"\n",(0,n.jsx)(t.h2,{id:"-thanks",children:"\ud83e\udd17 Thanks"}),"\n",(0,n.jsxs)(t.p,{children:["Lots of new contributors helped with ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/issues/22990",children:"enabling generation of native code from flow types"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/issues/22609",children:"resolving Xcode warnings"})," - these are a great way to learn how React Native works and contributing to the greater good. Thank you! Look out for similar issues in the future."]}),"\n",(0,n.jsxs)(t.p,{children:["While these are the highlights that we noted, there are many others to be excited about. To see all of the updates, take a look at the ",(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/react-native-releases/blob/master/CHANGELOG.md",children:"changelog"}),". 0.59 is a huge release \u2013 we can't wait for you to try it out."]}),"\n",(0,n.jsx)(t.p,{children:"We have even more improvements coming throughout the rest of the year. Stay tuned!"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/turnrye",children:"Ryan"})," and the whole ",(0,n.jsx)(t.a,{href:"https://twitter.com/reactnative",children:"React Native core team"})]})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},71426:(e,t,a)=>{var n=a(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,a){var n,s={},h=null,d=null;for(n in void 0!==a&&(h=""+a),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:r,type:e,key:h,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=h,t.jsxs=h},24246:(e,t,a)=>{e.exports=a(71426)},49617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/0.58-cli-speed-99311dbeb7f554d4beadd5960d82be74.png"},10778:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/0.59-cli-speed-792273d28963a86e24e22ccfb69f1a99.png"},35595:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/inline-requires-3cb1be96938288642a666bdf3dca62b5.png"},71670:(e,t,a)=>{a.d(t,{Zo:()=>o,ah:()=>s});var n=a(27378);const r=n.createContext({});function s(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||i:s(e),n.createElement(r.Provider,{value:o},t)}}}]);