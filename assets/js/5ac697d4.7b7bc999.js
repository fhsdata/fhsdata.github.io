/*! For license information please see 5ac697d4.7b7bc999.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[68098],{64732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var s=r(24246),o=r(71670);const n={id:"usecolorscheme",title:"useColorScheme"},a=void 0,c={id:"usecolorscheme",title:"useColorScheme",description:"The useColorScheme React hook provides and subscribes to color scheme updates from the Appearance module. The return value indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle).",source:"@site/versioned_docs/version-0.71/usecolorscheme.md",sourceDirName:".",slug:"/usecolorscheme",permalink:"/docs/0.71/usecolorscheme",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/usecolorscheme.md",tags:[],version:"0.71",lastUpdatedAt:1680275241,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{id:"usecolorscheme",title:"useColorScheme"},sidebar:"api",previous:{title:"Vibration",permalink:"/docs/0.71/vibration"},next:{title:"useWindowDimensions",permalink:"/docs/0.71/usewindowdimensions"}},l={},i=[{value:"Supported color schemes",id:"supported-color-schemes",level:3},{value:"Example",id:"example",level:2}];function d(e){const t=Object.assign({pre:"pre",code:"code",p:"p",a:"a",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",em:"em",hr:"hr",h2:"h2",div:"div"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import {useColorScheme} from 'react-native';\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"useColorScheme"})," React hook provides and subscribes to color scheme updates from the ",(0,s.jsx)(t.a,{href:"appearance",children:(0,s.jsx)(t.code,{children:"Appearance"})})," module. The return value indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."]}),"\n",(0,s.jsx)(t.h3,{id:"supported-color-schemes",children:"Supported color schemes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"light"'}),": The user prefers a light color theme."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"dark"'}),": The user prefers a dark color theme."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"null"}),": The user has not indicated a preferred color theme."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Currently due to technical constraints, when the Chrome debugger is enabled, this hook will ",(0,s.jsx)(t.em,{children:"always"})," return ",(0,s.jsx)(t.code,{children:'"light"'}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.div,{class:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BText%2C%20StyleSheet%2C%20useColorScheme%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20colorScheme%20%3D%20useColorScheme()%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3EuseColorScheme()%3A%20%7BcolorScheme%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsxs)(t.p,{children:["You can find a complete example that demonstrates the use of this hook alongside a React context to add support for light and dark themes to your application in ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/0.71-stable/packages/rn-tester/js/examples/Appearance/AppearanceExample.js",children:(0,s.jsx)(t.code,{children:"AppearanceExample.js"})}),"."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},71426:(e,t,r)=>{var s=r(27378),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var s,n={},i=null,d=null;for(s in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!l.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:o,type:e,key:i,ref:d,props:n,_owner:c.current}}t.Fragment=n,t.jsx=i,t.jsxs=i},24246:(e,t,r)=>{e.exports=r(71426)},71670:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>n});var s=r(27378);const o=s.createContext({});function n(e){const t=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||a:n(e),s.createElement(o.Provider,{value:c},t)}}}]);