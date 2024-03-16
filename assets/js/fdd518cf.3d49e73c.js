/*! For license information please see fdd518cf.3d49e73c.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[68140],{80469:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var s=n(24246),r=n(71670);const t={id:"bundled-hermes",title:"Bundled Hermes"},o=void 0,a={id:"bundled-hermes",title:"Bundled Hermes",description:"This page gives an overview of how Hermes and React Native are built.",source:"@site/architecture/bundled-hermes.md",sourceDirName:".",slug:"/bundled-hermes",permalink:"/architecture/bundled-hermes",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/architecture/bundled-hermes.md",tags:[],version:"current",lastUpdatedAt:1708363960,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{id:"bundled-hermes",title:"Bundled Hermes"},sidebar:"architecture",previous:{title:"Threading Model",permalink:"/architecture/threading-model"},next:{title:"Glossary",permalink:"/architecture/glossary"}},d={},l=[{value:"What is &#39;Bundled Hermes&#39;",id:"what-is-bundled-hermes",level:2},{value:"Why we moved to &#39;Bundled Hermes&#39;",id:"why-we-moved-to-bundled-hermes",level:2},{value:"How this will impact app developers",id:"how-this-will-impact-app-developers",level:2},{value:"iOS Users",id:"ios-users",level:3},{value:"Android Users",id:"android-users",level:3},{value:"Android Users on New Architecture",id:"android-users-on-new-architecture",level:4},{value:"Android Users on New Architecture building on Windows",id:"android-users-on-new-architecture-building-on-windows",level:4},{value:"Can users still use another engine?",id:"can-users-still-use-another-engine",level:3},{value:"How this will impact contributor and extension developers",id:"how-this-will-impact-contributor-and-extension-developers",level:2},{value:"How is Bundled Hermes working under the hood?",id:"how-is-bundled-hermes-working-under-the-hood",level:3},{value:"Android implementation details",id:"android-implementation-details",level:4},{value:"iOS implementation details",id:"ios-implementation-details",level:4},{value:"Prebuilt Hermes",id:"prebuilt-hermes",level:5},{value:"Building Hermes from source",id:"building-hermes-from-source",level:5},{value:"Debug symbols",id:"debug-symbols",level:5},{value:"I&#39;m afraid this change is impacting me",id:"im-afraid-this-change-is-impacting-me",level:3}];function c(e){const i=Object.assign({p:"p",strong:"strong",a:"a",admonition:"admonition",h2:"h2",em:"em",h3:"h3",code:"code",pre:"pre",h4:"h4",ul:"ul",li:"li",h5:"h5"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["This page gives an overview of ",(0,s.jsx)(i.strong,{children:"how"})," Hermes and React Native ",(0,s.jsx)(i.strong,{children:"are built"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["If you're looking into instructions on how to use Hermes in your app, you can find instructions on this other page: ",(0,s.jsx)(i.a,{href:"/docs/hermes",children:"using Hermes"})]}),"\n",(0,s.jsx)(i.admonition,{type:"caution",children:(0,s.jsx)(i.p,{children:"Please note that this page serves as a technical deep dive and is targeted for users which are building extensions on top of Hermes or React Native. General users of React Native should not need to know in-depth information on how React Native and Hermes interact."})}),"\n",(0,s.jsx)(i.h2,{id:"what-is-bundled-hermes",children:"What is 'Bundled Hermes'"}),"\n",(0,s.jsxs)(i.p,{children:["Starting with React Native 0.69.0, every version of React Native will be ",(0,s.jsx)(i.strong,{children:"built alongside"})," to a Hermes version. We call this distribution model ",(0,s.jsx)(i.strong,{children:"Bundled Hermes"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"From 0.69 on, you will always have a JS engine that has been built and tested alongside each React Native version that you can use."}),"\n",(0,s.jsx)(i.h2,{id:"why-we-moved-to-bundled-hermes",children:"Why we moved to 'Bundled Hermes'"}),"\n",(0,s.jsxs)(i.p,{children:["Historically, React Native and Hermes followed two ",(0,s.jsx)(i.strong,{children:"distinct release processes"})," with distinct versioning. Having distinct releases with distinct numbers created confusion in the OSS ecosystem, where it was not clear if a specific version of Hermes was compatible with a specific version of React Native (i.e. you needed to know that Hermes 0.11.0 was compatible only with React Native 0.68.0, etc.)"]}),"\n",(0,s.jsxs)(i.p,{children:["Both Hermes and React Native, share the JSI code (",(0,s.jsx)(i.a,{href:"https://github.com/facebook/hermes/tree/main/API/jsi/jsi",children:"Hermes here"})," and ",(0,s.jsx)(i.a,{href:"https://github.com/facebook/react-native/tree/main/packages/react-native/ReactCommon/jsi/jsi",children:"React Native here"}),"). If the two JSI copies of JSI get out of sync, a build of Hermes won't be compatible with a build of React Native. You can read more about this ",(0,s.jsx)(i.a,{href:"https://github.com/react-native-community/discussions-and-proposals/issues/257",children:"ABI incompatibility problem here"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"To overcome this problem, we've extended the React Native release process to download and build Hermes and made sure only one copy of JSI is used when building Hermes."}),"\n",(0,s.jsxs)(i.p,{children:["Thanks to this, we can release a version of Hermes whenever we release a version of React Native, and be sure that the Hermes engine we built is ",(0,s.jsx)(i.strong,{children:"fully compatible"})," with the React Native version we're releasing. We're shipping this version of Hermes alongside the React Native version we're doing, hence the name ",(0,s.jsx)(i.em,{children:"Bundled Hermes"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"how-this-will-impact-app-developers",children:"How this will impact app developers"}),"\n",(0,s.jsxs)(i.p,{children:["As mentioned in the introduction, if you're an app developer, this change ",(0,s.jsx)(i.strong,{children:"should not affect"})," you directly."]}),"\n",(0,s.jsx)(i.p,{children:"The following paragraphs describe which changes we did under the hood and explains some of the rationales, for the sake of transparency."}),"\n",(0,s.jsx)(i.h3,{id:"ios-users",children:"iOS Users"}),"\n",(0,s.jsxs)(i.p,{children:["On iOS, we've moved the ",(0,s.jsx)(i.code,{children:"hermes-engine"})," you're using."]}),"\n",(0,s.jsxs)(i.p,{children:["Prior to React Native 0.69, users would download a pod (here you can find the ",(0,s.jsx)(i.a,{href:"https://github.com/CocoaPods/Specs/blob/master/Specs/5/d/0/hermes-engine/0.11.0/hermes-engine.podspec.json",children:"podspec"}),")."]}),"\n",(0,s.jsxs)(i.p,{children:["On React Native 0.69, users would instead use a podspec that is defined inside the ",(0,s.jsx)(i.code,{children:"sdks/hermes-engine/hermes-engine.podspec"})," file in the ",(0,s.jsx)(i.code,{children:"react-native"})," NPM package.\nThat podspec relies on a pre-built tarball of Hermes that we upload to Maven and to the React Native GitHub Release, as part of the React Native release process (i.e. ",(0,s.jsx)(i.a,{href:"https://github.com/facebook/react-native/releases/tag/v0.70.4",children:"see the assets of this release"}),")."]}),"\n",(0,s.jsx)(i.h3,{id:"android-users",children:"Android Users"}),"\n",(0,s.jsxs)(i.p,{children:["On Android, we're going to update the ",(0,s.jsx)(i.a,{href:"https://github.com/facebook/react-native/blob/main/template/android/app/build.gradle",children:(0,s.jsx)(i.code,{children:"android/app/build.gradle"})})," file in the default template the following way:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-diff",children:'dependencies {\n    // ...\n\n    if (enableHermes) {\n+       implementation("com.facebook.react:hermes-engine:+") {\n+           exclude group:\'com.facebook.fbjni\'\n+       }\n-       def hermesPath = "../../node_modules/hermes-engine/android/";\n-       debugImplementation files(hermesPath + "hermes-debug.aar")\n-       releaseImplementation files(hermesPath + "hermes-release.aar")\n    } else {\n        implementation jscFlavor\n    }\n}\n'})}),"\n",(0,s.jsxs)(i.p,{children:["Prior to React Native 0.69, users will be consuming ",(0,s.jsx)(i.code,{children:"hermes-debug.aar"})," and ",(0,s.jsx)(i.code,{children:"hermes-release.aar"})," from the ",(0,s.jsx)(i.code,{children:"hermes-engine"})," NPM package."]}),"\n",(0,s.jsxs)(i.p,{children:["On React Native 0.69, users will be consuming the Android multi-variant artifacts available inside the ",(0,s.jsx)(i.code,{children:"android/com/facebook/react/hermes-engine/"})," folder in the ",(0,s.jsx)(i.code,{children:"react-native"})," NPM package.\nPlease also note that we're going to ",(0,s.jsx)(i.a,{href:"https://github.com/facebook/react-native/blob/c418bf4c8fe8bf97273e3a64211eaa38d836e0a0/package.json#L105",children:"remove the dependency"})," on ",(0,s.jsx)(i.code,{children:"hermes-engine"})," entirely in one of the future version of React Native."]}),"\n",(0,s.jsx)(i.h4,{id:"android-users-on-new-architecture",children:"Android Users on New Architecture"}),"\n",(0,s.jsxs)(i.p,{children:["Due to the nature of our native code build setup (i.e. how we use the NDK), users on the New Architecture will be ",(0,s.jsx)(i.strong,{children:"building Hermes from source"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"This aligns the build mechanism of React Native and Hermes for users on the New Architecture (they will build both framework from source).\nThis means that such Android users might experience a performance hit at build time on their first build."}),"\n",(0,s.jsxs)(i.p,{children:["You can find instructions to optimize your build time and reduce the impact on your build on this page: ",(0,s.jsx)(i.a,{href:"/docs/next/build-speed",children:"Speeding up your Build phase"}),"."]}),"\n",(0,s.jsx)(i.h4,{id:"android-users-on-new-architecture-building-on-windows",children:"Android Users on New Architecture building on Windows"}),"\n",(0,s.jsx)(i.p,{children:"Users building React Native App, with the New Architecture, on Windows machines need to follow those extra steps to let the build work correctly:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Make sure the ",(0,s.jsx)(i.a,{href:"https://reactnative.dev/docs/environment-setup",children:"environment is configured properly"}),", with Android SDK & node."]}),"\n",(0,s.jsxs)(i.li,{children:["Install ",(0,s.jsx)(i.a,{href:"https://community.chocolatey.org/packages/cmake",children:"cmake"})," with Chocolatey"]}),"\n",(0,s.jsxs)(i.li,{children:["Install either:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022",children:"Build Tools for Visual Studio 2022"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://visualstudio.microsoft.com/vs/community/",children:"Visual Studio 22 Community Edition"})," - Picking only the C++ desktop development is sufficient."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Make sure the ",(0,s.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/visualstudio/ide/reference/command-prompt-powershell?view=vs-2022",children:"Visual Studio Command Prompt"})," is configured correctly. This is required as the proper C++ compiler environment variable is configured in those command prompt."]}),"\n",(0,s.jsxs)(i.li,{children:["Run the app with ",(0,s.jsx)(i.code,{children:"npx react-native run-android"})," inside a Visual Studio Command Prompt."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"can-users-still-use-another-engine",children:"Can users still use another engine?"}),"\n",(0,s.jsxs)(i.p,{children:["Yes, users are free to enable/disable Hermes (with the ",(0,s.jsx)(i.code,{children:"enableHermes"})," variable on Android, ",(0,s.jsx)(i.code,{children:"hermes_enabled"})," on iOS).\nThe 'Bundled Hermes' change will impact only ",(0,s.jsx)(i.strong,{children:"how Hermes is built and bundled"})," for you."]}),"\n",(0,s.jsxs)(i.p,{children:["Starting with React Native 0.70, the default for ",(0,s.jsx)(i.code,{children:"enableHermes"}),"/",(0,s.jsx)(i.code,{children:"hermes_enabled"})," is ",(0,s.jsx)(i.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"how-this-will-impact-contributor-and-extension-developers",children:"How this will impact contributor and extension developers"}),"\n",(0,s.jsx)(i.p,{children:"If you're a React Native contributor or you're building an extension on top of React Native or Hermes, please read further as we explain how Bundled Hermes works."}),"\n",(0,s.jsx)(i.h3,{id:"how-is-bundled-hermes-working-under-the-hood",children:"How is Bundled Hermes working under the hood?"}),"\n",(0,s.jsxs)(i.p,{children:["This mechanism relies on ",(0,s.jsx)(i.strong,{children:"downloading a tarball"})," with the Hermes source code from the ",(0,s.jsx)(i.code,{children:"facebook/hermes"})," repository inside the ",(0,s.jsx)(i.code,{children:"facebook/react-native"})," repository. We have a similar mechanism in place for other native dependencies (Folly, Glog, etc.) and we aligned Hermes to follow the same setup."]}),"\n",(0,s.jsxs)(i.p,{children:["When building React Native from ",(0,s.jsx)(i.code,{children:"main"}),", we will be fetching a tarball of ",(0,s.jsx)(i.code,{children:"main"})," of facebook/hermes and building it as part of the build process of React Native."]}),"\n",(0,s.jsxs)(i.p,{children:["When building React Native from a release branch (say ",(0,s.jsx)(i.code,{children:"0.69-stable"}),"), we will instead use a ",(0,s.jsx)(i.strong,{children:"tag"})," on the Hermes repo to ",(0,s.jsx)(i.strong,{children:"synchronize the code"})," between the two repos. The specific tag name used will then be stored inside the ",(0,s.jsx)(i.code,{children:"sdks/.hermesversion"})," file inside React Native in the release branch (e.g. ",(0,s.jsx)(i.a,{href:"https://github.com/facebook/react-native/blob/0.69-stable/sdks/.hermesversion",children:"this is the file"})," on the 0.69 release branch)."]}),"\n",(0,s.jsxs)(i.p,{children:["In a sense, you can think of this approach similarly to a ",(0,s.jsx)(i.strong,{children:"git submodule"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["If you're building on top of Hermes, you can rely on those tags to understand which version of Hermes was used when building React Native, as the version of React Native is specified in the tag name (e.g. ",(0,s.jsx)(i.code,{children:"hermes-2022-05-20-RNv0.69.0-ee8941b8874132b8f83e4486b63ed5c19fc3f111"}),")."]}),"\n",(0,s.jsx)(i.h4,{id:"android-implementation-details",children:"Android implementation details"}),"\n",(0,s.jsxs)(i.p,{children:["To implement this on Android, we've added a new build inside the ",(0,s.jsx)(i.code,{children:"/ReactAndroid/hermes-engine"})," of React Native that will take care of building Hermes and packaging for consumption (",(0,s.jsx)(i.a,{href:"https://github.com/facebook/react-native/pull/33396",children:"See here for more context"}),")."]}),"\n",(0,s.jsx)(i.p,{children:"You can now trigger a build of Hermes engine by invoking:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"// Build a debug version of Hermes\n./gradlew :ReactAndroid:hermes-engine:assembleDebug\n// Build a release version of Hermes\n./gradlew :ReactAndroid:hermes-engine:assembleRelease\n"})}),"\n",(0,s.jsxs)(i.p,{children:["from the React Native ",(0,s.jsx)(i.code,{children:"main"})," branch."]}),"\n",(0,s.jsxs)(i.p,{children:["You won't need to install extra tools (such as ",(0,s.jsx)(i.code,{children:"cmake"}),", ",(0,s.jsx)(i.code,{children:"ninja"})," or ",(0,s.jsx)(i.code,{children:"python3"}),") in your machine as we configured the build to use the NDK versions of those tools."]}),"\n",(0,s.jsxs)(i.p,{children:["On the Gradle consumer side, we also shipped a small improvement on the consumer side: we moved from ",(0,s.jsx)(i.code,{children:"releaseImplementation"})," & ",(0,s.jsx)(i.code,{children:"debugImplementation"})," to ",(0,s.jsx)(i.code,{children:"implementation"}),". This is possible because the newer ",(0,s.jsx)(i.code,{children:"hermes-engine"})," Android artifact is ",(0,s.jsx)(i.strong,{children:"variant aware"})," and will properly match a debug build of the engine with a debug build of your app. You don't need any custom configuration here (even if you use ",(0,s.jsx)(i.code,{children:"staging"})," or other build types/flavors)."]}),"\n",(0,s.jsx)(i.p,{children:"However, this made this line necessary in the template:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"exclude group:'com.facebook.fbjni'\n"})}),"\n",(0,s.jsxs)(i.p,{children:["This is needed as React Native is consuming ",(0,s.jsx)(i.code,{children:"fbjni"})," using the non-prefab approach (i.e. unzipping the ",(0,s.jsx)(i.code,{children:".aar"})," and extracting ",(0,s.jsx)(i.code,{children:".so"})," files). Hermes-engine, and other libraries, are using prefab instead to consume fbjni. We're looking into ",(0,s.jsx)(i.a,{href:"https://github.com/facebook/react-native/pull/33397",children:"addressing this issue"})," in the future so the Hermes import will be a oneliner."]}),"\n",(0,s.jsx)(i.h4,{id:"ios-implementation-details",children:"iOS implementation details"}),"\n",(0,s.jsx)(i.p,{children:"The iOS implementation relies on a series of scripts that lives in the following locations:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/facebook/react-native/tree/main/scripts/hermes",children:(0,s.jsx)(i.code,{children:"/scripts/hermes"})}),". Those scripts contain logic to download the Hermes tarball, unzip it, and configure the iOS build. They're invoked at ",(0,s.jsx)(i.code,{children:"pod install"})," time if you have the ",(0,s.jsx)(i.code,{children:"hermes_enabled"})," field set to ",(0,s.jsx)(i.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/facebook/react-native/tree/main/sdks/hermes-engine",children:(0,s.jsx)(i.code,{children:"/sdks/hermes-engine"})}),". Those scripts contain the build logic that is effectively building Hermes. They were copied and adapted from the ",(0,s.jsx)(i.code,{children:"facebook/hermes"})," repo to properly work within React Native. Specifically, the scripts inside the ",(0,s.jsx)(i.code,{children:"utils"})," folder are responsible of building Hermes for all the Mac platforms."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Hermes is built as part of the ",(0,s.jsx)(i.code,{children:"build_hermes_macos"})," Job on CircleCI. The job will produce as artifact a tarball which will be downloaded by the ",(0,s.jsx)(i.code,{children:"hermes-engine"})," podspec when using a published React Native release (",(0,s.jsxs)(i.a,{href:"https://app.circleci.com/pipelines/github/facebook/react-native/13679/workflows/5172f8e4-6b02-4ccb-ab97-7cb954911fae/jobs/258701/artifacts",children:["here is an example of the artifacts created for React Native 0.69 in ",(0,s.jsx)(i.code,{children:"build_hermes_macos"})]}),")."]}),"\n",(0,s.jsx)(i.h5,{id:"prebuilt-hermes",children:"Prebuilt Hermes"}),"\n",(0,s.jsxs)(i.p,{children:["If there are no prebuilt artifacts for the React Native version that is being used (i.e. you may be working with React Native from the ",(0,s.jsx)(i.code,{children:"main"})," branch), then Hermes will need to be built from source. First, the Hermes compiler, ",(0,s.jsx)(i.code,{children:"hermesc"}),", will be built for macOS during ",(0,s.jsx)(i.code,{children:"pod install"}),", then Hermes itself will be built as part of the Xcode build pipeline using the ",(0,s.jsx)(i.code,{children:"build-hermes-xcode.sh"})," script."]}),"\n",(0,s.jsx)(i.h5,{id:"building-hermes-from-source",children:"Building Hermes from source"}),"\n",(0,s.jsxs)(i.p,{children:["Hermes is always built from source when using React Native from the ",(0,s.jsx)(i.code,{children:"main"})," branch. If you are using a stable React Native version, you can force Hermes to be built from source by setting the ",(0,s.jsx)(i.code,{children:"CI"})," envvar to ",(0,s.jsx)(i.code,{children:"true"})," when using CocoaPods: ",(0,s.jsx)(i.code,{children:"CI=true pod install"}),"."]}),"\n",(0,s.jsx)(i.h5,{id:"debug-symbols",children:"Debug symbols"}),"\n",(0,s.jsxs)(i.p,{children:["The prebuilt artifacts for Hermes do not contain debug symbols (dSYMs) by default. We're planning on distributing these debug symbols for each release in the future. Until then, if you need the debug symbols for Hermes, you will need to build Hermes from source. A ",(0,s.jsx)(i.code,{children:"hermes.framework.dSYM"})," will be created in the build directory alongside each of the Hermes frameworks."]}),"\n",(0,s.jsx)(i.h3,{id:"im-afraid-this-change-is-impacting-me",children:"I'm afraid this change is impacting me"}),"\n",(0,s.jsxs)(i.p,{children:["We'd like to stress that this is essentially an organizational change on ",(0,s.jsx)(i.em,{children:"where"})," Hermes is built and ",(0,s.jsx)(i.em,{children:"how"})," the code is syncronized between the two repositories. The change should be fully transparent to our users."]}),"\n",(0,s.jsxs)(i.p,{children:["Historically, we used to cut a release of Hermes for a specific version of React Native (e.g. ",(0,s.jsx)(i.a,{href:"https://github.com/facebook/hermes/releases/tag/v0.11.0",children:(0,s.jsx)(i.code,{children:"v0.11.0 for RN0.68.x"})}),")."]}),"\n",(0,s.jsx)(i.p,{children:"With 'Bundled Hermes', you can instead rely on a tag that will represent the version used when a specific version of React Native was cut."})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,r.ah)(),e.components);return i?(0,s.jsx)(i,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},71426:(e,i,n)=>{var s=n(27378),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,n){var s,t={},l=null,c=null;for(s in void 0!==n&&(l=""+n),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(c=i.ref),i)o.call(i,s)&&!d.hasOwnProperty(s)&&(t[s]=i[s]);if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===t[s]&&(t[s]=i[s]);return{$$typeof:r,type:e,key:l,ref:c,props:t,_owner:a.current}}i.Fragment=t,i.jsx=l,i.jsxs=l},24246:(e,i,n)=>{e.exports=n(71426)},71670:(e,i,n)=>{n.d(i,{Zo:()=>a,ah:()=>t});var s=n(27378);const r=s.createContext({});function t(e){const i=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const o={};function a({components:e,children:i,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||o:t(e),s.createElement(r.Provider,{value:a},i)}}}]);