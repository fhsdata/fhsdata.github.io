/*! For license information please see c65bab12.c2c77368.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[44289],{482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=n(24246),i=n(71670);const a={title:"Introducing Hot Reloading",author:"Mart\xedn Bigio",authorTitle:"Software Engineer at Instagram",authorURL:"https://twitter.com/martinbigio",authorImageURL:"https://avatars3.githubusercontent.com/u/535661?v=3&s=128",authorTwitter:"martinbigio",tags:["engineering"]},s=void 0,r={permalink:"/blog/2016/03/24/introducing-hot-reloading",source:"@site/blog/2016-03-24-introducing-hot-reloading.md",title:"Introducing Hot Reloading",description:"React Native's goal is to give you the best possible developer experience. A big part of it is the time it takes between you save a file and be able to see the changes. Our goal is to get this feedback loop to be under 1 second, even as your app grows.",date:"2016-03-24T00:00:00.000Z",formattedDate:"March 24, 2016",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],readingTime:8.575,hasTruncateMarker:!1,authors:[{name:"Mart\xedn Bigio",title:"Software Engineer at Instagram",url:"https://twitter.com/martinbigio",imageURL:"https://avatars3.githubusercontent.com/u/535661?v=3&s=128"}],frontMatter:{title:"Introducing Hot Reloading",author:"Mart\xedn Bigio",authorTitle:"Software Engineer at Instagram",authorURL:"https://twitter.com/martinbigio",authorImageURL:"https://avatars3.githubusercontent.com/u/535661?v=3&s=128",authorTwitter:"martinbigio",tags:["engineering"]},unlisted:!1,prevItem:{title:"Dive into React Native Performance",permalink:"/blog/2016/03/28/dive-into-react-native-performance"},nextItem:{title:"Making React Native apps accessible",permalink:"/blog/2015/11/23/making-react-native-apps-accessible"}},c={authorsImageUrls:[void 0]},d=[{value:"Hot Reloading",id:"hot-reloading",level:2},{value:"Implementation in a nutshell",id:"implementation-in-a-nutshell",level:2},{value:"HMR API",id:"hmr-api",level:2},{value:"HMR Runtime",id:"hmr-runtime",level:2},{value:"React Components",id:"react-components",level:2},{value:"Redux Stores",id:"redux-stores",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t=Object.assign({p:"p",ul:"ul",li:"li",h2:"h2",strong:"strong",a:"a",img:"img",em:"em",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"React Native's goal is to give you the best possible developer experience. A big part of it is the time it takes between you save a file and be able to see the changes. Our goal is to get this feedback loop to be under 1 second, even as your app grows."}),"\n",(0,o.jsx)(t.p,{children:"We got close to this ideal via three main features:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Use JavaScript as the language doesn't have a long compilation cycle time."}),"\n",(0,o.jsx)(t.li,{children:"Implement a tool called Packager that transforms es6/flow/jsx files into normal JavaScript that the VM can understand. It was designed as a server that keeps intermediate state in memory to enable fast incremental changes and uses multiple cores."}),"\n",(0,o.jsx)(t.li,{children:"Build a feature called Live Reload that reloads the app on save."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"At this point, the bottleneck for developers is no longer the time it takes to reload the app but losing the state of your app. A common scenario is to work on a feature that is multiple screens away from the launch screen. Every time you reload, you've got to click on the same path again and again to get back to your feature, making the cycle multiple-seconds long."}),"\n",(0,o.jsx)(t.h2,{id:"hot-reloading",children:"Hot Reloading"}),"\n",(0,o.jsx)(t.p,{children:"The idea behind hot reloading is to keep the app running and to inject new versions of the files that you edited at runtime. This way, you don't lose any of your state which is especially useful if you are tweaking the UI."}),"\n",(0,o.jsx)(t.p,{children:"A video is worth a thousand words. Check out the difference between Live Reload (current) and Hot Reload (new)."}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/2uQzVi-KFuc",frameborder:"0",allowfullscreen:!0}),"\n",(0,o.jsx)(t.p,{children:"If you look closely, you can notice that it is possible to recover from a red box and you can also start importing modules that were not previously there without having to do a full reload."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Word of warning:"})," because JavaScript is a very stateful language, hot reloading cannot be perfectly implemented. In practice, we found out that the current setup is working well for a large amount of usual use cases and a full reload is always available in case something gets messed up."]}),"\n",(0,o.jsx)(t.p,{children:"Hot reloading is available as of 0.22, you can enable it:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Open the developer menu"}),"\n",(0,o.jsx)(t.li,{children:'Tap on "Enable Hot Reloading"'}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"implementation-in-a-nutshell",children:"Implementation in a nutshell"}),"\n",(0,o.jsx)(t.p,{children:"Now that we've seen why we want it and how to use it, the fun part begins: how it actually works."}),"\n",(0,o.jsxs)(t.p,{children:["Hot Reloading is built on top of a feature ",(0,o.jsx)(t.a,{href:"https://webpack.js.org/guides/hot-module-replacement/",children:"Hot Module Replacement"}),", or HMR. It was first introduced by webpack and we implemented it inside of React Native Packager. HMR makes the Packager watch for file changes and send HMR updates to a thin HMR runtime included on the app."]}),"\n",(0,o.jsx)(t.p,{children:"In a nutshell, the HMR update contains the new code of the JS modules that changed. When the runtime receives them, it replaces the old modules' code with the new one:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(28640).Z+"",width:"913",height:"395"})}),"\n",(0,o.jsxs)(t.p,{children:["The HMR update contains a bit more than just the module's code we want to change because replacing it, it's not enough for the runtime to pick up the changes. The problem is that the module system may have already cached the ",(0,o.jsx)(t.em,{children:"exports"})," of the module we want to update. For instance, say you have an app composed of these two modules:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"// log.js\nfunction log(message) {\n  const time = require('./time');\n  console.log(`[${time()}] ${message}`);\n}\n\nmodule.exports = log;\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"// time.js\nfunction time() {\n  return new Date().getTime();\n}\n\nmodule.exports = time;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The module ",(0,o.jsx)(t.code,{children:"log"}),", prints out the provided message including the current date provided by the module ",(0,o.jsx)(t.code,{children:"time"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["When the app is bundled, React Native registers each module on the module system using the ",(0,o.jsx)(t.code,{children:"__d"})," function. For this app, among many ",(0,o.jsx)(t.code,{children:"__d"})," definitions, there will one for ",(0,o.jsx)(t.code,{children:"log"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"__d('log', function() {\n  ... // module's code\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:"This invocation wraps each module's code into an anonymous function which we generally refer to as the factory function. The module system runtime keeps track of each module's factory function, whether it has already been executed, and the result of such execution (exports). When a module is required, the module system either provides the already cached exports or executes the module's factory function for the first time and saves the result."}),"\n",(0,o.jsxs)(t.p,{children:["So say you start your app and require ",(0,o.jsx)(t.code,{children:"log"}),". At this point, neither ",(0,o.jsx)(t.code,{children:"log"})," nor ",(0,o.jsx)(t.code,{children:"time"}),"'s factory functions have been executed so no exports have been cached. Then, the user modifies ",(0,o.jsx)(t.code,{children:"time"})," to return the date in ",(0,o.jsx)(t.code,{children:"MM/DD"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"// time.js\nfunction bar() {\n  const date = new Date();\n  return `${date.getMonth() + 1}/${date.getDate()}`;\n}\n\nmodule.exports = bar;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The Packager will send time's new code to the runtime (step 1), and when ",(0,o.jsx)(t.code,{children:"log"})," gets eventually required the exported function gets executed it will do so with ",(0,o.jsx)(t.code,{children:"time"}),"'s changes (step 2):"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(66007).Z+"",width:"914",height:"225"})}),"\n",(0,o.jsxs)(t.p,{children:["Now say the code of ",(0,o.jsx)(t.code,{children:"log"})," requires ",(0,o.jsx)(t.code,{children:"time"})," as a top level require:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"const time = require('./time'); // top level require\n\n// log.js\nfunction log(message) {\n  console.log(`[${time()}] ${message}`);\n}\n\nmodule.exports = log;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["When ",(0,o.jsx)(t.code,{children:"log"})," is required, the runtime will cache its exports and ",(0,o.jsx)(t.code,{children:"time"}),"'s one. (step 1). Then, when ",(0,o.jsx)(t.code,{children:"time"})," is modified, the HMR process cannot simply finish after replacing ",(0,o.jsx)(t.code,{children:"time"}),"'s code. If it did, when ",(0,o.jsx)(t.code,{children:"log"})," gets executed, it would do so with a cached copy of ",(0,o.jsx)(t.code,{children:"time"})," (old code)."]}),"\n",(0,o.jsxs)(t.p,{children:["For ",(0,o.jsx)(t.code,{children:"log"})," to pick up ",(0,o.jsx)(t.code,{children:"time"})," changes, we'll need to clear its cached exports because one of the modules it depends on was hot swapped (step 3). Finally, when ",(0,o.jsx)(t.code,{children:"log"})," gets required again, its factory function will get executed requiring ",(0,o.jsx)(t.code,{children:"time"})," and getting its new code."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(42751).Z+"",width:"907",height:"377"})}),"\n",(0,o.jsx)(t.h2,{id:"hmr-api",children:"HMR API"}),"\n",(0,o.jsxs)(t.p,{children:["HMR in React Native extends the module system by introducing the ",(0,o.jsx)(t.code,{children:"hot"})," object. This API is based on ",(0,o.jsx)(t.a,{href:"https://webpack.github.io/hot-module-replacement.md",children:"webpack"}),"'s one. The ",(0,o.jsx)(t.code,{children:"hot"})," object exposes a function called ",(0,o.jsx)(t.code,{children:"accept"})," which allows you to define a callback that will be executed when the module needs to be hot swapped. For instance, if we would change ",(0,o.jsx)(t.code,{children:"time"}),"'s code as follows, every time we save time, we'll see \u201ctime changed\u201d in the console:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"// time.js\nfunction time() {\n  ... // new code\n}\n\nmodule.hot.accept(() => {\n  console.log('time changed');\n});\n\nmodule.exports = time;\n"})}),"\n",(0,o.jsx)(t.p,{children:"Note that only in rare cases you would need to use this API manually. Hot Reloading should work out of the box for the most common use cases."}),"\n",(0,o.jsx)(t.h2,{id:"hmr-runtime",children:"HMR Runtime"}),"\n",(0,o.jsxs)(t.p,{children:["As we've seen before, sometimes it's not enough only accepting the HMR update because a module that uses the one being hot swapped may have been already executed and its imports cached. For instance, suppose the dependency tree for the movies app example had a top-level ",(0,o.jsx)(t.code,{children:"MovieRouter"})," that depended on the ",(0,o.jsx)(t.code,{children:"MovieSearch"})," and ",(0,o.jsx)(t.code,{children:"MovieScreen"})," views, which depended on the ",(0,o.jsx)(t.code,{children:"log"})," and ",(0,o.jsx)(t.code,{children:"time"})," modules from the previous examples:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(33529).Z+"",width:"733",height:"390"})}),"\n",(0,o.jsxs)(t.p,{children:["If the user accesses the movies' search view but not the other one, all the modules except for ",(0,o.jsx)(t.code,{children:"MovieScreen"})," would have cached exports. If a change is made to module ",(0,o.jsx)(t.code,{children:"time"}),", the runtime will have to clear the exports of ",(0,o.jsx)(t.code,{children:"log"})," for it to pick up ",(0,o.jsx)(t.code,{children:"time"}),"'s changes. The process wouldn't finish there: the runtime will repeat this process recursively up until all the parents have been accepted. So, it'll grab the modules that depend on ",(0,o.jsx)(t.code,{children:"log"})," and try to accept them. For ",(0,o.jsx)(t.code,{children:"MovieScreen"})," it can bail, as it hasn't been required yet. For ",(0,o.jsx)(t.code,{children:"MovieSearch"}),", it will have to clear its exports and process its parents recursively. Finally, it will do the same thing for ",(0,o.jsx)(t.code,{children:"MovieRouter"})," and finish there as no modules depends on it."]}),"\n",(0,o.jsx)(t.p,{children:"In order to walk the dependency tree, the runtime receives the inverse dependency tree from the Packager on the HMR update. For this example the runtime will receive a JSON object like this one:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"{\n  modules: [\n    {\n      name: 'time',\n      code: /* time's new code */\n    }\n  ],\n  inverseDependencies: {\n    MovieRouter: [],\n    MovieScreen: ['MovieRouter'],\n    MovieSearch: ['MovieRouter'],\n    log: ['MovieScreen', 'MovieSearch'],\n    time: ['log'],\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"react-components",children:"React Components"}),"\n",(0,o.jsxs)(t.p,{children:["React components are a bit harder to get to work with Hot Reloading. The problem is that we can't simply replace the old code with the new one as we'd loose the component's state. For React web applications, ",(0,o.jsx)(t.a,{href:"https://twitter.com/dan_abramov",children:"Dan Abramov"})," implemented a babel ",(0,o.jsx)(t.a,{href:"https://gaearon.github.io/react-hot-loader/",children:"transform"})," that uses webpack's HMR API to solve this issue. In a nutshell, his solution works by creating a proxy for every single React component on ",(0,o.jsx)(t.em,{children:"transform time"}),". The proxies hold the component's state and delegate the lifecycle methods to the actual components, which are the ones we hot reload:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(3699).Z+"",width:"560",height:"161"})}),"\n",(0,o.jsxs)(t.p,{children:["Besides creating the proxy component, the transform also defines the ",(0,o.jsx)(t.code,{children:"accept"})," function with a piece of code to force React to re-render the component. This way, we can hot reload rendering code without losing any of the app's state."]}),"\n",(0,o.jsxs)(t.p,{children:["The default ",(0,o.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/master/packager/transformer.js#L92-L95",children:"transformer"})," that comes with React Native uses the ",(0,o.jsx)(t.code,{children:"babel-preset-react-native"}),", which is ",(0,o.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/master/babel-preset/configs/hmr.js#L24-L31",children:"configured"})," to use ",(0,o.jsx)(t.code,{children:"react-transform"})," the same way you'd use it on a React web project that uses webpack."]}),"\n",(0,o.jsx)(t.h2,{id:"redux-stores",children:"Redux Stores"}),"\n",(0,o.jsxs)(t.p,{children:["To enable Hot Reloading on ",(0,o.jsx)(t.a,{href:"https://redux.js.org/",children:"Redux"})," stores you will just need to use the HMR API similarly to what you'd do on a web project that uses webpack:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"// configureStore.js\nimport { createStore, applyMiddleware, compose } from 'redux';\nimport thunk from 'redux-thunk';\nimport reducer from '../reducers';\n\nexport default function configureStore(initialState) {\n  const store = createStore(\n    reducer,\n    initialState,\n    applyMiddleware(thunk),\n  );\n\n  if (module.hot) {\n    module.hot.accept(() => {\n      const nextRootReducer = require('../reducers/index').default;\n      store.replaceReducer(nextRootReducer);\n    });\n  }\n\n  return store;\n};\n"})}),"\n",(0,o.jsxs)(t.p,{children:["When you change a reducer, the code to accept that reducer will be sent to the client. Then the client will realize that the reducer doesn't know how to accept itself, so it will look for all the modules that refer it and try to accept them. Eventually, the flow will get to the single store, the ",(0,o.jsx)(t.code,{children:"configureStore"})," module, which will accept the HMR update."]}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(t.p,{children:["If you are interested in helping making hot reloading better, I encourage you to read ",(0,o.jsx)(t.a,{href:"https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.jmivpvmz4",children:"Dan Abramov's post around the future of hot reloading"})," and to contribute. For example, Johny Days is going to ",(0,o.jsx)(t.a,{href:"https://github.com/facebook/react-native/pull/6179",children:"make it work with multiple connected clients"}),". We're relying on you all to maintain and improve this feature."]}),"\n",(0,o.jsx)(t.p,{children:"With React Native, we have the opportunity to rethink the way we build apps in order to make it a great developer experience. Hot reloading is only one piece of the puzzle, what other crazy hacks can we do to make it better?"})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(h,e)})):h(e)}},71426:(e,t,n)=>{var o=n(27378),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,a={},d=null,h=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(h=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:i,type:e,key:d,ref:h,props:a,_owner:r.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},24246:(e,t,n)=>{e.exports=n(71426)},28640:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hmr-architecture-fc0ad839836fbf08ce9b0557be33c5ad.png"},33529:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hmr-diamond-55c39ddebd4758c5434b39890281f69e.png"},42751:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hmr-log-884dbcc7b040993d7d402bba105c537e.png"},3699:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},66007:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hmr-step-9d2dd4297f792827ffabc55bb1154b8a.png"},71670:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>a});var o=n(27378);const i=o.createContext({});function a(e){const t=o.useContext(i);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||s:a(e),o.createElement(i.Provider,{value:r},t)}}}]);