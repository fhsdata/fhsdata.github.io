/*! For license information please see 81d00bc5.c7e73ac8.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[90131],{81970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var s=n(24246),r=n(71670);const d={id:"devsettings",title:"DevSettings"},i=void 0,o={id:"devsettings",title:"DevSettings",description:"The DevSettings module exposes methods for customizing settings for developers in development.",source:"@site/versioned_docs/version-0.73/devsettings.md",sourceDirName:".",slug:"/devsettings",permalink:"/docs/devsettings",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/devsettings.md",tags:[],version:"0.73",lastUpdatedAt:1702040446,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{id:"devsettings",title:"DevSettings"},sidebar:"api",previous:{title:"AppState",permalink:"/docs/appstate"},next:{title:"Dimensions",permalink:"/docs/dimensions"}},c={},l=[{value:"Methods",id:"methods",level:2},{value:"<code>addMenuItem()</code>",id:"addmenuitem",level:3},{value:"<code>reload()</code>",id:"reload",level:3}];function a(e){const t=Object.assign({p:"p",code:"code",hr:"hr",h1:"h1",h2:"h2",h3:"h3",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"DevSettings"})," module exposes methods for customizing settings for developers in development."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"addmenuitem",children:(0,s.jsx)(t.code,{children:"addMenuItem()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static addMenuItem(title: string, handler: () => any);\n"})}),"\n",(0,s.jsx)(t.p,{children:"Add a custom menu item to the Dev Menu."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["title ",(0,s.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,s.jsx)(t.td,{children:"string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["handler ",(0,s.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,s.jsx)(t.td,{children:"function"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"DevSettings.addMenuItem('Show Secret Dev Screen', () => {\n  Alert.alert('Showing secret dev screen!');\n});\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"reload",children:(0,s.jsx)(t.code,{children:"reload()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"static reload(reason?: string): void;\n"})}),"\n",(0,s.jsx)(t.p,{children:"Reload the application. Can be invoked directly or on user interaction."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'<Button title="Reload" onPress={() => DevSettings.reload()} />\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},71426:(e,t,n)=>{var s=n(27378),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,d={},l=null,a=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,s)&&!c.hasOwnProperty(s)&&(d[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===d[s]&&(d[s]=t[s]);return{$$typeof:r,type:e,key:l,ref:a,props:d,_owner:o.current}}t.Fragment=d,t.jsx=l,t.jsxs=l},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>d});var s=n(27378);const r=s.createContext({});function d(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:d(e),s.createElement(r.Provider,{value:o},t)}}}]);