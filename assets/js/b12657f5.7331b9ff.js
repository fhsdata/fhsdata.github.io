/*! For license information please see b12657f5.7331b9ff.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[25684],{71450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(24246),a=r(71670);const o={id:"out-of-tree-platforms",title:"Out-of-Tree Platforms"},i=void 0,s={id:"out-of-tree-platforms",title:"Out-of-Tree Platforms",description:"React Native is not only for Android and iOS devices - our partners and the community maintain projects that bring React Native to other platforms, such as:",source:"@site/versioned_docs/version-0.71/out-of-tree-platforms.md",sourceDirName:".",slug:"/out-of-tree-platforms",permalink:"/docs/0.71/out-of-tree-platforms",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/out-of-tree-platforms.md",tags:[],version:"0.71",lastUpdatedAt:1700850201,formattedLastUpdatedAt:"Nov 24, 2023",frontMatter:{id:"out-of-tree-platforms",title:"Out-of-Tree Platforms"},sidebar:"docs",previous:{title:"Building For TV Devices",permalink:"/docs/0.71/building-for-tv"},next:{title:"Running On Device",permalink:"/docs/0.71/running-on-device"}},c={},l=[{value:"Creating your own React Native platform",id:"creating-your-own-react-native-platform",level:2},{value:"Bundling",id:"bundling",level:3}];function d(e){const t=Object.assign({p:"p",strong:"strong",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3",code:"code",pre:"pre"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"React Native is not only for Android and iOS devices - our partners and the community maintain projects that bring React Native to other platforms, such as:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"From Partners"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/microsoft/react-native-macos",children:"React Native macOS"})," - React Native for macOS and Cocoa."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/microsoft/react-native-windows",children:"React Native Windows"})," - React Native for Microsoft's Universal Windows Platform (UWP)."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"From Community"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/react-native-tvos/react-native-tvos",children:"React Native tvOS"})," - React Native for Apple TV and Android TV devices."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/necolas/react-native-web",children:"React Native Web"})," - React Native on the web using React DOM."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"creating-your-own-react-native-platform",children:"Creating your own React Native platform"}),"\n",(0,n.jsxs)(t.p,{children:["Right now the process of creating a React Native platform from scratch is not very well documented - one of the goals of the upcoming re-architecture (",(0,n.jsx)(t.a,{href:"/blog/2018/06/14/state-of-react-native-2018",children:"Fabric"}),") is to make maintaining a platform easier."]}),"\n",(0,n.jsx)(t.h3,{id:"bundling",children:"Bundling"}),"\n",(0,n.jsxs)(t.p,{children:["As of React Native 0.57 you can now register your React Native platform with React Native's JavaScript bundler, ",(0,n.jsx)(t.a,{href:"https://metrobundler.dev/",children:"Metro"}),". This means you can pass ",(0,n.jsx)(t.code,{children:"--platform example"})," to ",(0,n.jsx)(t.code,{children:"npx react-native bundle"}),", and it will look for JavaScript files with the ",(0,n.jsx)(t.code,{children:".example.js"})," suffix."]}),"\n",(0,n.jsx)(t.p,{children:"To register your platform with RNPM, your module's name must match one of these patterns:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"react-native-example"})," - It will search all top-level modules that start with ",(0,n.jsx)(t.code,{children:"react-native-"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"@org/react-native-example"})," - It will search for modules that start with ",(0,n.jsx)(t.code,{children:"react-native-"})," under any scope"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"@react-native-example/module"})," - It will search in all modules under scopes with names starting with ",(0,n.jsx)(t.code,{children:"@react-native-"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You must also have an entry in your ",(0,n.jsx)(t.code,{children:"package.json"})," like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "rnpm": {\n    "haste": {\n      "providesModuleNodeModules": ["react-native-example"],\n      "platforms": ["example"]\n    }\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:'"providesModuleNodeModules"'})," is an array of modules that will get added to the Haste module search path, and ",(0,n.jsx)(t.code,{children:'"platforms"'})," is an array of platform suffixes that will be added as valid platforms."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},71426:(e,t,r)=>{var n=r(27378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},24246:(e,t,r)=>{e.exports=r(71426)},71670:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>o});var n=r(27378);const a=n.createContext({});function o(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||i:o(e),n.createElement(a.Provider,{value:s},t)}}}]);