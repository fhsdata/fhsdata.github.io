/*! For license information please see 794de310.c54ed66e.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[34255],{40983:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(24246),r=n(71670);const s={title:"React Native 0.73 - Debugging Improvements, Stable Symlink Support, and more",authors:["fortmarek","titozzz","hurali","lunaleaps","huntie"],tags:["announcement","release","debugging"],date:new Date("2023-12-06T00:00:00.000Z")},a=void 0,o={permalink:"/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks",source:"@site/blog/2023-12-06-0.73-debugging-improvements-stable-symlinks.md",title:"React Native 0.73 - Debugging Improvements, Stable Symlink Support, and more",description:"Today we're releasing React Native 0.73! This release adds improvements to debugging with Hermes, stable symlink support, Android 14 support, and new experimental features. We are also deprecating legacy debugging features, and are releasing the next pillar of the New Architecture: Bridgeless Mode!",date:"2023-12-06T00:00:00.000Z",formattedDate:"December 6, 2023",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"},{label:"debugging",permalink:"/blog/tags/debugging"}],readingTime:9.565,hasTruncateMarker:!0,authors:[{name:"Marek Fo\u0159t",title:"Software Engineer at Shopify",url:"https://twitter.com/marekfort",imageURL:"https://github.com/fortmarek.png",key:"fortmarek"},{name:"Thibault Malbranche",title:"Lead Mobile Engineer at Brigad",url:"https://twitter.com/titozzz",imageURL:"https://github.com/titozzz.png",key:"titozzz"},{name:"Hur Ali",title:"Software Engineer at Callstack",url:"https://twitter.com/hurali97",imageURL:"https://github.com/hurali97.png",key:"hurali"},{name:"Luna Wei",title:"Software Engineer at Meta",url:"https://twitter.com/lunaleaps",imageURL:"https://github.com/lunaleaps.png",key:"lunaleaps"},{name:"Alex Hunt",title:"Software Engineer at Meta",url:"https://twitter.com/alxhnt",imageURL:"https://github.com/huntie.png",key:"huntie"}],frontMatter:{title:"React Native 0.73 - Debugging Improvements, Stable Symlink Support, and more",authors:["fortmarek","titozzz","hurali","lunaleaps","huntie"],tags:["announcement","release","debugging"],date:"2023-12-06T00:00:00.000Z"},unlisted:!1,nextItem:{title:"React Native 0.72 - Symlink Support, Better Errors, and more",permalink:"/blog/2023/06/21/0.72-metro-package-exports-symlinks"}},d={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},l=[{value:"Highlights",id:"highlights",level:3},{value:"Breaking Changes",id:"breaking-changes",level:3},{value:"Highlights",id:"highlights-1",level:2},{value:"Debugging Improvements",id:"debugging-improvements",level:3},{value:"Console Log History in Hermes",id:"console-log-history-in-hermes",level:4},{value:"Updated Debugging Docs",id:"updated-debugging-docs",level:4},{value:"Experimental New Debugger",id:"experimental-new-debugger",level:4},{value:"Stable Symlink Support in Metro",id:"stable-symlink-support-in-metro",level:3},{value:"Monorepo workarounds",id:"monorepo-workarounds",level:4},{value:"Kotlin Template on Android",id:"kotlin-template-on-android",level:3},{value:"Android 14 Support",id:"android-14-support",level:3},{value:"Java 17 and Android Gradle Plugin upgrade",id:"java-17-and-android-gradle-plugin-upgrade",level:4},{value:"Grant partial access to photos and videos",id:"grant-partial-access-to-photos-and-videos",level:4},{value:"Min SDK bump",id:"min-sdk-bump",level:4},{value:"New Architecture Updates",id:"new-architecture-updates",level:3},{value:"Deprecated Debugging Features",id:"deprecated-debugging-features",level:3},{value:"Flipper \u2194 React Native integration",id:"flipper--react-native-integration",level:4},{value:"Remote JavaScript Debugging",id:"remote-javascript-debugging",level:4},{value:"Breaking Changes",id:"breaking-changes-1",level:2},{value:"Babel Package Renames",id:"babel-package-renames",level:3},{value:"Other Breaking Changes",id:"other-breaking-changes",level:3},{value:"React Native CLI Changes",id:"react-native-cli-changes",level:3},{value:"Highlighted breaking changes",id:"highlighted-breaking-changes",level:4},{value:"Deprecated <code>@types/react-native</code>",id:"deprecated-typesreact-native",level:3},{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"Upgrade to 0.73",id:"upgrade-to-073",level:2}];function c(e){const i=Object.assign({p:"p",h3:"h3",ul:"ul",li:"li",a:"a",h2:"h2",h4:"h4",code:"code",img:"img",admonition:"admonition",strong:"strong",em:"em",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Today we're releasing React Native 0.73! This release adds improvements to debugging with Hermes, stable symlink support, Android 14 support, and new experimental features. We are also deprecating legacy debugging features, and are releasing the next pillar of the New Architecture: Bridgeless Mode!"}),"\n",(0,t.jsx)(i.h3,{id:"highlights",children:"Highlights"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks#debugging-improvements",children:"Debugging Improvements"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks#stable-symlink-support-in-metro",children:"Stable Symlink Support in Metro"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks#kotlin-template-on-android",children:"Kotlin Template on Android"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks#android-14-support",children:"Android 14 Support"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks#new-architecture-updates",children:"New Architecture Updates"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks#deprecated-debugging-features",children:"Deprecated Debugging Features"})}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks#babel-package-renames",children:"Babel Package Renames"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks#other-breaking-changes",children:"Other Breaking Changes"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks#react-native-cli-changes",children:"React Native CLI Changes"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks#deprecated-typesreact-native",children:"Deprecated @types/react-native"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"highlights-1",children:"Highlights"}),"\n",(0,t.jsx)(i.h3,{id:"debugging-improvements",children:"Debugging Improvements"}),"\n",(0,t.jsx)(i.p,{children:"The React Native and Hermes teams are committed to improving the debugging experience in React Native. In 0.73, we're happy to share some initial progress out of this ongoing investment."}),"\n",(0,t.jsx)(i.h4,{id:"console-log-history-in-hermes",children:"Console Log History in Hermes"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"console.log()"})," is an ever popular way for developers to quickly debug their JavaScript code. In previous releases, console logs in React Native apps would not be recorded until a debugger was connected. This made it hard to observe logs that occur early during app load."]}),"\n",(0,t.jsxs)(i.p,{children:["In React Native 0.73 we've addressed this issue. Hermes now captures all ",(0,t.jsx)(i.code,{children:"console.log()"})," calls in the background, which will be sent to the Console tab when a debugger is first connected \u2014 matching the debugging experience in web browsers. This new behaviour works across Flipper, Chrome DevTools connected to Hermes, and the experimental New Debugger."]}),"\n",(0,t.jsx)(i.h4,{id:"updated-debugging-docs",children:"Updated Debugging Docs"}),"\n",(0,t.jsxs)(i.p,{children:["We've refreshed the ",(0,t.jsx)(i.a,{href:"/docs/debugging",children:"Debugging"})," section of our docs, which now includes up-to-date information on how to connect all supported debuggers, more info on React DevTools, and refreshed visuals."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Overview of the Debugging docs as of 0.73",src:n(8889).Z+"",width:"1600",height:"700"})}),"\n",(0,t.jsx)(i.h4,{id:"experimental-new-debugger",children:"Experimental New Debugger"}),"\n",(0,t.jsx)(i.p,{children:"The React Native team is working on a new JavaScript debugger experience, intended to replace Flipper, with a Technical Preview available as of React Native 0.73. The new debugger opens immediately, and features a stripped-back Chrome DevTools UI customized for debugging React Native with Hermes."}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["The new debugger is ",(0,t.jsx)(i.strong,{children:"experimental"})," and has some ",(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/discussions-and-proposals/discussions/733",children:"known issues"})," we are actively working to solve in a future release of React Native. If you are trying it out, please use the ",(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/discussions-and-proposals/discussions/733",children:"same discussion thread"})," to report feedback."]})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"The new debugger frontend opened to the &quot;Welcome&quot; pane",src:n(28308).Z+"",width:"1600",height:"740"})}),"\n",(0,t.jsxs)(i.p,{children:["Learn more about enabling this experience ",(0,t.jsx)(i.a,{href:"/docs/next/debugging?js-debugger=new-debugger#opening-the-debugger",children:"in the docs"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"stable-symlink-support-in-metro",children:"Stable Symlink Support in Metro"}),"\n",(0,t.jsxs)(i.p,{children:["Support for resolving symlinks in Metro is now ",(0,t.jsx)(i.strong,{children:"enabled by default"}),". Symlink support enables React Native to work with monorepo setups when containing directories are configured with ",(0,t.jsx)(i.a,{href:"https://metrobundler.dev/docs/configuration/#watchfolders",children:(0,t.jsx)(i.code,{children:"watchFolders"})}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Symlinks are deeply represented in Metro's internals, meaning they work with features such as ",(0,t.jsx)(i.a,{href:"/docs/fast-refresh",children:"Fast Refresh"}),", and incur little performance overhead during bundling. Symlinks are supported on all desktop platforms, with and without Watchman."]}),"\n",(0,t.jsxs)(i.admonition,{type:"info",children:[(0,t.jsx)(i.h4,{id:"monorepo-workarounds",children:"Monorepo workarounds"}),(0,t.jsx)(i.p,{children:"We are aware there are still edge cases when using React Native in a monorepo layout. We have planned work to address some of these, which didn't quite make it into 0.73 \u2014\xa0but which we aim to ship as soon as possible."}),(0,t.jsxs)(i.p,{children:[(0,t.jsxs)(i.strong,{children:["For React Native template projects (",(0,t.jsx)(i.code,{children:"npx react-native init"}),")"]}),", you will need to configure any ",(0,t.jsx)(i.a,{href:"https://metrobundler.dev/docs/configuration/#watchfolders",children:(0,t.jsx)(i.code,{children:"watchFolders"})})," outside of the project root in order for Metro to discover them (",(0,t.jsx)(i.a,{href:"https://metrobundler.dev/docs/configuration/#unstable_enablesymlinks-experimental",children:"more info"}),"). You may also need to update file paths if your ",(0,t.jsx)(i.code,{children:"react-native"})," dependency is installed to a folder at a different level."]}),(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"For Expo apps"}),", support for Yarn (Classic) workspaces is configured out of the box. See also the ",(0,t.jsx)(i.a,{href:"https://docs.expo.dev/guides/monorepos/",children:"Work with monorepos"})," guide in the Expo docs."]})]}),"\n",(0,t.jsx)(i.h3,{id:"kotlin-template-on-android",children:"Kotlin Template on Android"}),"\n",(0,t.jsxs)(i.p,{children:["We're excited to announce that, starting from 0.73, Kotlin is now the ",(0,t.jsx)(i.strong,{children:"recommended language"})," for Android apps built with React Native. This follows the direction that the Android ecosystem has been moving in for several years and allows you to write your app using a modern language."]}),"\n",(0,t.jsxs)(i.p,{children:["We've updated React Native's template on Android to use Kotlin instead of Java. The new ",(0,t.jsx)(i.code,{children:"MainActivity.kt"})," and ",(0,t.jsx)(i.code,{children:"MainApplication.kt"})," files are 36% smaller in size."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.a,{href:"https://react-native-community.github.io/upgrade-helper/",children:"Upgrade Helper"})," has also been updated to make it easier to migrate your ",(0,t.jsx)(i.code,{children:".java"})," files to ",(0,t.jsx)(i.code,{children:".kt"})," files.\nIf you've previously modified the Java files in your project and you need support migrating them to Kotlin, you can use the ",(0,t.jsx)(i.code,{children:"Code > Convert Java file to Kotlin File"})," utility of Android Studio (also accessible with the shortcut ",(0,t.jsx)("kbd",{children:"Cmd \u2318"})," + ",(0,t.jsx)("kbd",{children:"Shift \u21e7"})," + ",(0,t.jsx)("kbd",{children:"Option \u2325"})," + ",(0,t.jsx)("kbd",{children:"K"}),")."]}),"\n",(0,t.jsx)(i.h3,{id:"android-14-support",children:"Android 14 Support"}),"\n",(0,t.jsxs)(i.p,{children:["We've updated React Native to fully support Android 14. Starting from 0.73, React Native developers can now target the latest Android SDK version, ",(0,t.jsx)(i.a,{href:"https://developer.android.com/guide/topics/manifest/uses-sdk-element?hl=en#ApiLevels",children:"API Level 34"})," (",(0,t.jsx)(i.em,{children:"Upside Down Cake"}),")."]}),"\n",(0,t.jsx)(i.h4,{id:"java-17-and-android-gradle-plugin-upgrade",children:"Java 17 and Android Gradle Plugin upgrade"}),"\n",(0,t.jsxs)(i.p,{children:["In order to support Android 14, we've updated the version of Android Gradle Plugin (AGP) used to build Android apps from ",(0,t.jsx)(i.code,{children:"7.4.x"})," to ",(0,t.jsx)(i.code,{children:"8.1.x"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["This major version bump of AGP comes with a series of breaking changes that are available in the release notes from Google (",(0,t.jsx)(i.a,{href:"https://developer.android.com/build/releases/past-releases/agp-8-0-0-release-notes",children:"8.0.0"})," and ",(0,t.jsx)(i.a,{href:"https://developer.android.com/build/releases/past-releases/agp-8-1-0-release-notes",children:"8.1.0"}),")."]}),"\n",(0,t.jsxs)(i.p,{children:["Most importantly, ",(0,t.jsx)(i.strong,{children:"Java 17"})," is now a requirement to build Android apps. You can update your Java version to 17 by running:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"brew tap homebrew/cask-versions\nbrew install --cask zulu17\n"})}),"\n",(0,t.jsxs)(i.p,{children:["and by updating your ",(0,t.jsx)(i.code,{children:"JAVA_HOME"})," as documented in the ",(0,t.jsx)(i.a,{href:"https://reactnative.dev/docs/environment-setup",children:"Getting Started guide"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["If you're a library developer, your libraries should work with React Native 0.73 without changes. Earlier this year, ",(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/discussions-and-proposals/issues/671",children:"we published a note"})," with a clarification on what the AGP bump means for you as a library author."]}),"\n",(0,t.jsx)(i.h4,{id:"grant-partial-access-to-photos-and-videos",children:"Grant partial access to photos and videos"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://developer.android.com/about/versions/14/changes/partial-photo-video-access",children:"Selected Photos Access"})," allows Android 14 users to grant apps access to specific items in their media library, rather than access to all media. In 0.73, React Native apps now support this capability, by using the ",(0,t.jsx)(i.code,{children:"READ_MEDIA_VISUAL_USER_SELECTED"})," permission in the ",(0,t.jsx)(i.a,{href:"/docs/permissionsandroid",children:(0,t.jsx)(i.code,{children:"PermissionsAndroid"})})," API."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Selected Photos Access in Android 14",src:n(93547).Z+"",width:"1600",height:"900"})}),"\n",(0,t.jsx)(i.h4,{id:"min-sdk-bump",children:"Min SDK bump"}),"\n",(0,t.jsxs)(i.p,{children:["React Native 0.73 will be the final version which supports Android 5.0 (API Level 21). The next version of React Native will have a minimum SDK version of 23 (Android 6.0). Read more about the upcoming changes to min SDK bump ",(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/discussions-and-proposals/discussions/740",children:"here"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"new-architecture-updates",children:"New Architecture Updates"}),"\n",(0,t.jsx)(i.p,{children:"We continue the rollout of React Native's New Architecture, to make it available to everyone in the Open Source community."}),"\n",(0,t.jsx)(i.p,{children:"Since React Native 0.68, both the New Renderer (Fabric) and the New Native Module System (TurboModules) were available to users to experiment and evaluate. We want to thank the community for the feedback we've received so far."}),"\n",(0,t.jsxs)(i.p,{children:["Today we're releasing another piece of the New Architecture: ",(0,t.jsx)(i.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/154",children:(0,t.jsx)(i.strong,{children:"Bridgeless Mode"})}),". Up until now, when you enable the New Architecture in your app, the Bridge would still be available to support backward compatibility with older components and modules. However, our vision is to fully sunset the bridge. Starting from React Native 0.73, you can enable Bridgeless Mode which will disable the creation of the bridge entirely."]}),"\n",(0,t.jsxs)(i.p,{children:["Together with Bridgeless Mode, we're shipping a Native Module Interop Layer, that will allow you to reuse your old modules when in Bridgeless Mode. The ",(0,t.jsx)(i.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/135",children:"Renderer Interop Layer"})," introduced in React Native 0.72 has also been adapted to work with Bridgeless Mode."]}),"\n",(0,t.jsxs)(i.p,{children:["As with the rest of the New Architecture, Bridgeless Mode is initially experimental. We invite interested users to enable it and report any problems and incompatibilities you face in the ",(0,t.jsx)(i.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions",children:"New Architecture working group"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"deprecated-debugging-features",children:"Deprecated Debugging Features"}),"\n",(0,t.jsx)(i.h4,{id:"flipper--react-native-integration",children:"Flipper \u2194 React Native integration"}),"\n",(0,t.jsx)(i.p,{children:"We are gradually moving away from Flipper as the default tool for debugging React Native apps. In 0.73, this begins by deprecating the native Flipper integration included with React Native (bootstrap code which wires up Flipper's core plugins). We will be removing this integration and dependency in the next release \u2014\xa0meaning parts of Flipper such as the Network plugin will cease to work."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Unchanged"}),": Flipper as a standalone product for native app debugging will continue to exist. Even after its removal from new React Native projects in the future, developers will be able to ",(0,t.jsx)(i.a,{href:"https://fbflipper.com/docs/getting-started/android-native/",children:"manually add Flipper to their app"})," if they wish."]}),"\n",(0,t.jsxs)(i.p,{children:["For more information on why we are moving away from Flipper, ",(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0641-decoupling-flipper-from-react-native-core.md",children:"view the RFC"}),"."]}),"\n",(0,t.jsx)(i.h4,{id:"remote-javascript-debugging",children:"Remote JavaScript Debugging"}),"\n",(0,t.jsxs)(i.p,{children:["Remote JavaScript Debugging is a legacy debugging mode that connects an external web browser (Chrome) to your app and runs your JavaScript code inside a web page, i.e. ",(0,t.jsx)(i.code,{children:"http://localhost:8081/debugger-ui"}),". This model could lead to inconsistent app behaviour while debugging, and is incompatible with native modules under the New Architecture."]}),"\n",(0,t.jsxs)(i.p,{children:["In 0.73, ",(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/discussions-and-proposals/discussions/734",children:"Remote JavaScript Debugging is deprecated"})," and has been removed from the Dev Menu. Enabling the remote debugger must now be done manually via the ",(0,t.jsx)(i.code,{children:"NativeDevSettings"})," API. Doing this is covered in the ",(0,t.jsx)(i.a,{href:"/docs/next/other-debugging-methods#remote-js-debugging",children:"Other Debugging Methods docs"}),"."]}),"\n",(0,t.jsxs)(i.admonition,{type:"info",children:[(0,t.jsxs)(i.p,{children:["Remote JavaScript Debugging was previously the default debugging experience for apps using JavaScriptCore (JSC). We recommend ",(0,t.jsx)(i.a,{href:"/docs/next/other-debugging-methods#safari-developer-tools-direct-jsc-debugging",children:"Safari Developer Tools (direct JSC debugging)"})," instead, for iOS apps."]}),(0,t.jsxs)(i.p,{children:["We recommend using ",(0,t.jsx)(i.a,{href:"/docs/hermes",children:"Hermes"})," for a consistent debugging experience on all platforms."]})]}),"\n",(0,t.jsx)(i.h2,{id:"breaking-changes-1",children:"Breaking Changes"}),"\n",(0,t.jsx)(i.h3,{id:"babel-package-renames",children:"Babel Package Renames"}),"\n",(0,t.jsx)(i.p,{children:"We've relocated two Babel-related packages out of Metro and into React Native's repository and versioning scheme, enabling us to simplify maintenance and upgrades. The new versions of these packages support New Architecture features in 0.73, meaning these dependencies must be updated."}),"\n",(0,t.jsxs)(i.p,{children:["Please follow the ",(0,t.jsx)(i.a,{href:"https://react-native-community.github.io/upgrade-helper/",children:"Upgrade Helper"})," when upgrading, to ensure you have updated these dependencies. Some packages have been renamed:"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Old Package Name"}),(0,t.jsx)(i.th,{children:"New Package Name"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"metro-react-native-babel-preset"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"@react-native/babel-preset"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"metro-react-native-babel-transformer"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"@react-native/metro-babel-transformer"})})]})]})]}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"@react-native/babel-preset"})," now includes ",(0,t.jsx)(i.code,{children:"@react-native/babel-plugin-codegen"}),", this no longer needs to be specified separately in your Babel config file."]})}),"\n",(0,t.jsx)(i.h3,{id:"other-breaking-changes",children:"Other Breaking Changes"}),"\n",(0,t.jsxs)(i.p,{children:["These are some of the key breaking changes in 0.73. Please consult the ",(0,t.jsx)(i.a,{href:"https://github.com/facebook/react-native/blob/main/CHANGELOG.md",children:"full changelog"})," for the complete list of breaking changes."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Raise minimum Node.js requirement to 18.x (",(0,t.jsx)(i.a,{href:"https://github.com/facebook/react-native/pull/37709",children:"#37709"}),") (see also ",(0,t.jsx)(i.a,{href:"https://nodejs.org/en/blog/announcements/nodejs16-eol",children:"Node.js 16 EOL"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:["The template now uses TypeScript 5.0 (",(0,t.jsx)(i.a,{href:"https://github.com/facebook/react-native/pull/36862",children:"#36862"}),").","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"React Native types continue working on TypeScript 4.8."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Android"}),": Java 17 is now a requirement to build Android apps (",(0,t.jsx)(i.a,{href:"#java-17-and-android-gradle-plugin-upgrade",children:"see above"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Android"}),": Major bump of Fresco to 3.0 (",(0,t.jsx)(i.a,{href:"https://github.com/facebook/react-native/pull/38275",children:"#38275"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"iOS"}),": Raise minimum iOS version to 13.4 (",(0,t.jsx)(i.a,{href:"https://github.com/facebook/react-native/pull/36795",children:"#36795"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"iOS"}),": Metro will no longer be automatically started when running builds via Xcode (",(0,t.jsx)(i.a,{href:"https://github.com/facebook/react-native/pull/38242",children:"#38242"}),")."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"For library authors:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Android"}),": Bump to AGP 8.1.1 (",(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/discussions-and-proposals/issues/671",children:"discussion"}),")"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"react-native-cli-changes",children:"React Native CLI Changes"}),"\n",(0,t.jsx)(i.h4,{id:"highlighted-breaking-changes",children:"Highlighted breaking changes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Change default task prefix in ",(0,t.jsx)(i.code,{children:"build-android"})," command. From now on, when you run ",(0,t.jsx)(i.code,{children:"build-android"}),", the ",(0,t.jsx)(i.code,{children:"bundle"})," task will be run instead of ",(0,t.jsx)(i.code,{children:"assemble"})," (",(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/cli/pull/1913",children:"#1913"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:["Remove fallback flow for Metro config defaults (",(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/cli/pull/1972",children:"#1972"}),").","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsxs)(i.a,{href:"/blog/2023/06/21/0.72-metro-package-exports-symlinks#new-metroconfigjs-setup",children:["updated ",(0,t.jsx)(i.code,{children:"metro.config.js"})," format"]})," from 0.72 is now required in 0.73, as we have removed the fallback copy of these defaults from CLI."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Remove ",(0,t.jsx)(i.code,{children:"--configuration"})," option from ",(0,t.jsx)(i.code,{children:"run-ios"})," (replaced with ",(0,t.jsx)(i.code,{children:"--mode"}),") (",(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/cli/pull/2028",children:"#2028"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:["Remove ",(0,t.jsx)(i.code,{children:"--variant"})," option from ",(0,t.jsx)(i.code,{children:"build-android"})," command (replaced with ",(0,t.jsx)(i.code,{children:"--mode"}),") (",(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/cli/pull/2026",children:"#2026"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/cli/releases/tag/v12.0.0",children:"See full changelog for v12.0.0"}),"."]}),"\n",(0,t.jsxs)(i.h3,{id:"deprecated-typesreact-native",children:["Deprecated ",(0,t.jsx)(i.code,{children:"@types/react-native"})]}),"\n",(0,t.jsxs)(i.p,{children:["As mentioned in ",(0,t.jsx)(i.a,{href:"/blog/2023/01/03/typescript-first#declarations-shipped-with-react-native",children:"First-class Support for TypeScript"}),", we have shipped TypeScript types with ",(0,t.jsx)(i.code,{children:"react-native"})," since 0.71 and we are now deprecating ",(0,t.jsx)(i.code,{children:"@types/react-native"})," for 0.73."]}),"\n",(0,t.jsxs)(i.p,{children:["We will not ship any future patches for existing versions. The guidance is to migrate away from ",(0,t.jsx)(i.code,{children:"@types/react-native"}),". See instructions on ",(0,t.jsx)(i.a,{href:"/blog/2023/01/03/typescript-first#how-to-migrate",children:"how to migrate"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,t.jsxs)(i.p,{children:["React Native 0.73 contains over ",(0,t.jsx)(i.a,{href:"https://github.com/facebook/react-native/compare/v0.72.7...v0.73.0",children:"2259 commits"})," from 68 contributors. Thanks for all your hard work!"]}),"\n",(0,t.jsx)(i.h2,{id:"upgrade-to-073",children:"Upgrade to 0.73"}),"\n",(0,t.jsxs)(i.p,{children:["Please use the ",(0,t.jsx)(i.a,{href:"https://react-native-community.github.io/upgrade-helper/",children:"React Native Upgrade Helper"})," to view code changes between React Native versions for existing projects, in addition to the ",(0,t.jsx)(i.a,{href:"/docs/upgrading",children:"Upgrading docs"}),". You can also create a new project with ",(0,t.jsx)(i.code,{children:"npx react-native@latest init MyProject"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"If you use Expo, React Native 0.73 will be supported in the Expo SDK 50 release."}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["0.73 is now the latest stable version of React Native and ",(0,t.jsx)(i.strong,{children:"0.70.x now moves to unsupported"}),". For more information see ",(0,t.jsx)(i.a,{href:"https://github.com/reactwg/react-native-releases#releases-support-policy",children:"React Native\u2019s support policy"}),"."]})})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,r.ah)(),e.components);return i?(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},71426:(e,i,n)=>{var t=n(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,n){var t,s={},l=null,c=null;for(t in void 0!==n&&(l=""+n),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(c=i.ref),i)a.call(i,t)&&!d.hasOwnProperty(t)&&(s[t]=i[t]);if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===s[t]&&(s[t]=i[t]);return{$$typeof:r,type:e,key:l,ref:c,props:s,_owner:o.current}}i.Fragment=s,i.jsx=l,i.jsxs=l},24246:(e,i,n)=>{e.exports=n(71426)},93547:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/0.73-android-media-picker-299ce04377976b6d937149c7d0c82d35.jpg"},8889:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/0.73-debugging-docs-884b7c2352b4ed16fd0465382bf60e96.jpg"},28308:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/debugging-debugger-welcome-28bc7e9bed8673f606577509e0a6a86c.jpg"},71670:(e,i,n)=>{n.d(i,{Zo:()=>o,ah:()=>s});var t=n(27378);const r=t.createContext({});function s(e){const i=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const a={};function o({components:e,children:i,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||a:s(e),t.createElement(r.Provider,{value:o},i)}}}]);