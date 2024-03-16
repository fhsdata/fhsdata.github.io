/*! For license information please see c2a87ab1.9dc3e96e.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[59805],{11778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(24246),o=t(71670);const r={id:"ram-bundles-inline-requires",title:"RAM Bundles and Inline Requires"},a=void 0,s={id:"ram-bundles-inline-requires",title:"RAM Bundles and Inline Requires",description:"If you have a large app you may want to consider the Random Access Modules (RAM) bundle format, and using inline requires. This is useful for apps that have a large number of screens which may not ever be opened during a typical usage of the app. Generally it is useful to apps that have large amounts of code that are not needed for a while after startup. For instance the app includes complicated profile screens or lesser used features, but most sessions only involve visiting the main screen of the app for updates. We can optimize the loading of the bundle by using the RAM format and requiring those features and screens inline (when they are actually used).",source:"@site/versioned_docs/version-0.70/ram-bundles-inline-requires.md",sourceDirName:".",slug:"/ram-bundles-inline-requires",permalink:"/docs/0.70/ram-bundles-inline-requires",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/ram-bundles-inline-requires.md",tags:[],version:"0.70",lastUpdatedAt:1671131105,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{id:"ram-bundles-inline-requires",title:"RAM Bundles and Inline Requires"},sidebar:"docs",previous:{title:"Optimizing Flatlist Configuration",permalink:"/docs/0.70/optimizing-flatlist-configuration"},next:{title:"Profiling",permalink:"/docs/0.70/profiling"}},d={},l=[{value:"Loading JavaScript",id:"loading-javascript",level:2},{value:"Inline Requires",id:"inline-requires",level:2},{value:"Enable the RAM format",id:"enable-the-ram-format",level:2},{value:"Configure Preloading and Inline Requires",id:"configure-preloading-and-inline-requires",level:2},{value:"Investigating the Loaded Modules",id:"investigating-the-loaded-modules",level:2},{value:"Updating the metro.config.js",id:"updating-the-metroconfigjs",level:2},{value:"Test and Measure Improvements",id:"test-and-measure-improvements",level:2}];function u(e){const n=Object.assign({p:"p",h2:"h2",pre:"pre",code:"code",admonition:"admonition",a:"a",strong:"strong"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"If you have a large app you may want to consider the Random Access Modules (RAM) bundle format, and using inline requires. This is useful for apps that have a large number of screens which may not ever be opened during a typical usage of the app. Generally it is useful to apps that have large amounts of code that are not needed for a while after startup. For instance the app includes complicated profile screens or lesser used features, but most sessions only involve visiting the main screen of the app for updates. We can optimize the loading of the bundle by using the RAM format and requiring those features and screens inline (when they are actually used)."}),"\n",(0,i.jsx)(n.h2,{id:"loading-javascript",children:"Loading JavaScript"}),"\n",(0,i.jsx)(n.p,{children:"Before react-native can execute JS code, that code must be loaded into memory and parsed. With a standard bundle if you load a 50mb bundle, all 50mb must be loaded and parsed before any of it can be executed. The optimization behind RAM bundles is that you can load only the portion of the 50mb that you actually need at startup, and progressively load more of the bundle as those sections are needed."}),"\n",(0,i.jsx)(n.h2,{id:"inline-requires",children:"Inline Requires"}),"\n",(0,i.jsx)(n.p,{children:"Inline requires delay the requiring of a module or file until that file is actually needed. A basic example would look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"title='VeryExpensive.js'",children:"import React, {Component} from 'react';\nimport {Text} from 'react-native';\n// ... import some very expensive modules\n\n// You may want to log at the file level to verify when this is happening\nconsole.log('VeryExpensive component loaded');\n\nexport default class VeryExpensive extends Component {\n  // lots and lots of code\n  render() {\n    return <Text>Very Expensive Component</Text>;\n  }\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"title='Optimized.js'",children:"import React, {Component} from 'react';\nimport {TouchableOpacity, View, Text} from 'react-native';\n\nlet VeryExpensive = null;\n\nexport default class Optimized extends Component {\n  state = {needsExpensive: false};\n\n  didPress = () => {\n    if (VeryExpensive == null) {\n      VeryExpensive = require('./VeryExpensive').default;\n    }\n\n    this.setState(() => ({\n      needsExpensive: true,\n    }));\n  };\n\n  render() {\n    return (\n      <View style={{marginTop: 20}}>\n        <TouchableOpacity onPress={this.didPress}>\n          <Text>Load</Text>\n        </TouchableOpacity>\n        {this.state.needsExpensive ? <VeryExpensive /> : null}\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Even without the RAM format, inline requires can lead to startup time improvements, because the code within VeryExpensive.js will only execute once it is required for the first time."}),"\n",(0,i.jsx)(n.h2,{id:"enable-the-ram-format",children:"Enable the RAM format"}),"\n",(0,i.jsx)(n.p,{children:"On iOS using the RAM format will create a single indexed file that react native will load one module at a time. On Android, by default it will create a set of files for each module. You can force Android to create a single file, like iOS, but using multiple files can be more performant and requires less memory."}),"\n",(0,i.jsxs)(n.p,{children:['Enable the RAM format in Xcode by editing the build phase "Bundle React Native code and images". Before ',(0,i.jsx)(n.code,{children:"../node_modules/react-native/scripts/react-native-xcode.sh"})," add ",(0,i.jsx)(n.code,{children:'export BUNDLE_COMMAND="ram-bundle"'}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'export BUNDLE_COMMAND="ram-bundle"\nexport NODE_BINARY=node\n../node_modules/react-native/scripts/react-native-xcode.sh\n'})}),"\n",(0,i.jsxs)(n.p,{children:["On Android enable the RAM format by editing your ",(0,i.jsx)(n.code,{children:"android/app/build.gradle"})," file. Before the line ",(0,i.jsx)(n.code,{children:'apply from: "../../node_modules/react-native/react.gradle"'})," add or amend the ",(0,i.jsx)(n.code,{children:"project.ext.react"})," block:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'project.ext.react = [\n  bundleCommand: "ram-bundle",\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Use the following lines on Android if you want to use a single indexed file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'project.ext.react = [\n  bundleCommand: "ram-bundle",\n  extraPackagerArgs: ["--indexed-ram-bundle"]\n]\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you are using ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/hermes",children:"Hermes JS Engine"}),", you ",(0,i.jsx)(n.strong,{children:"should not"})," have RAM bundles feature enabled. In Hermes, when loading the bytecode, ",(0,i.jsx)(n.code,{children:"mmap"})," ensures that the entire file is not loaded. Using Hermes with RAM bundles might lead to issues, because those mechanisms are not compatible with each other."]})}),"\n",(0,i.jsx)(n.h2,{id:"configure-preloading-and-inline-requires",children:"Configure Preloading and Inline Requires"}),"\n",(0,i.jsxs)(n.p,{children:["Now that we have a RAM bundle, there is overhead for calling ",(0,i.jsx)(n.code,{children:"require"}),". ",(0,i.jsx)(n.code,{children:"require"})," now needs to send a message over the bridge when it encounters a module it has not loaded yet. This will impact startup the most, because that is where the largest number of require calls are likely to take place while the app loads the initial module. Luckily we can configure a portion of the modules to be preloaded. In order to do this, you will need to implement some form of inline require."]}),"\n",(0,i.jsx)(n.h2,{id:"investigating-the-loaded-modules",children:"Investigating the Loaded Modules"}),"\n",(0,i.jsx)(n.p,{children:"In your root file (index.(ios|android).js) you can add the following after the initial imports:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const modules = require.getModules();\nconst moduleIds = Object.keys(modules);\nconst loadedModuleNames = moduleIds\n  .filter(moduleId => modules[moduleId].isInitialized)\n  .map(moduleId => modules[moduleId].verboseName);\nconst waitingModuleNames = moduleIds\n  .filter(moduleId => !modules[moduleId].isInitialized)\n  .map(moduleId => modules[moduleId].verboseName);\n\n// make sure that the modules you expect to be waiting are actually waiting\nconsole.log(\n  'loaded:',\n  loadedModuleNames.length,\n  'waiting:',\n  waitingModuleNames.length,\n);\n\n// grab this text blob, and put it in a file named packager/modulePaths.js\nconsole.log(\n  `module.exports = ${JSON.stringify(\n    loadedModuleNames.sort(),\n    null,\n    2,\n  )};`,\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"When you run your app, you can look in the console and see how many modules have been loaded, and how many are waiting. You may want to read the moduleNames and see if there are any surprises. Note that inline requires are invoked the first time the imports are referenced. You may need to investigate and refactor to ensure only the modules you want are loaded on startup. Note that you can change the Systrace object on require to help debug problematic requires."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"require.Systrace.beginEvent = message => {\n  if (message.includes(problematicModule)) {\n    throw new Error();\n  }\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Every app is different, but it may make sense to only load the modules you need for the very first screen. When you are satisfied, put the output of the loadedModuleNames into a file named ",(0,i.jsx)(n.code,{children:"packager/modulePaths.js"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"updating-the-metroconfigjs",children:"Updating the metro.config.js"}),"\n",(0,i.jsxs)(n.p,{children:["We now need to update ",(0,i.jsx)(n.code,{children:"metro.config.js"})," in the root of the project to use our newly generated ",(0,i.jsx)(n.code,{children:"modulePaths.js"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const modulePaths = require('./packager/modulePaths');\nconst resolve = require('path').resolve;\nconst fs = require('fs');\n\n// Update the following line if the root folder of your app is somewhere else.\nconst ROOT_FOLDER = resolve(__dirname, '..');\n\nconst config = {\n  transformer: {\n    getTransformOptions: () => {\n      const moduleMap = {};\n      modulePaths.forEach(path => {\n        if (fs.existsSync(path)) {\n          moduleMap[resolve(path)] = true;\n        }\n      });\n      return {\n        preloadedModules: moduleMap,\n        transform: {inlineRequires: {blockList: moduleMap}},\n      };\n    },\n  },\n  projectRoot: ROOT_FOLDER,\n};\n\nmodule.exports = config;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"preloadedModules"})," entry in the config indicates which modules should be marked as preloaded when building a RAM bundle. When the bundle is loaded, those modules are immediately loaded, before any requires have even executed. The ",(0,i.jsx)(n.code,{children:"blockList"})," entry indicates that those modules should not be required inline. Because they are preloaded, there is no performance benefit from using an inline require. In fact the generated JavaScript spends extra time resolving the inline require every time the imports are referenced."]}),"\n",(0,i.jsx)(n.h2,{id:"test-and-measure-improvements",children:"Test and Measure Improvements"}),"\n",(0,i.jsx)(n.p,{children:"You should now be ready to build your app using the RAM format and inline requires. Make sure you measure the before and after startup times."})]})}const c=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(u,e)})):u(e)}},71426:(e,n,t)=>{var i=t(27378),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,r={},l=null,u=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,i)&&!d.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:o,type:e,key:l,ref:u,props:r,_owner:s.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>r});var i=t(27378);const o=i.createContext({});function r(e){const n=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||a:r(e),i.createElement(o.Provider,{value:s},n)}}}]);