/*! For license information please see 69f236bd.4781c358.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[73183],{99044:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var t=d(24246),i=d(71670);const s={id:"datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid"},a=void 0,r={id:"datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.70/datepickerandroid.md",sourceDirName:".",slug:"/datepickerandroid",permalink:"/docs/0.70/datepickerandroid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/datepickerandroid.md",tags:[],version:"0.70",lastUpdatedAt:1671131105,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{id:"datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid"}},c={},o=[{value:"Example",id:"example",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>open()</code>",id:"open",level:3},{value:"<code>dateSetAction()</code>",id:"datesetaction",level:3},{value:"<code>dismissedAction()</code>",id:"dismissedaction",level:3}];function l(e){const n=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",h3:"h3",pre:"pre",code:"code",hr:"hr",h1:"h1",h2:"h2",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Deprecated."})," Use one of the ",(0,t.jsx)(n.a,{href:"https://reactnative.directory/?search=datepicker",children:"community packages"})," instead."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Opens the standard Android date picker dialog."}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"try {\n  const {action, year, month, day} = await DatePickerAndroid.open(\n    {\n      // Use `new Date()` for current date.\n      // May 25 2020. Month 0 is January.\n      date: new Date(2020, 4, 25),\n    },\n  );\n  if (action !== DatePickerAndroid.dismissedAction) {\n    // Selected year, month (0-11), day\n  }\n} catch ({code, message}) {\n  console.warn('Cannot open date picker', message);\n}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"open",children:(0,t.jsx)(n.code,{children:"open()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"static open(options)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Opens the standard Android date picker dialog."}),"\n",(0,t.jsxs)(n.p,{children:["The available keys for the ",(0,t.jsx)(n.code,{children:"options"})," object are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"date"})," (",(0,t.jsx)(n.code,{children:"Date"})," object or timestamp in milliseconds) - date to show by default"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"minDate"})," (",(0,t.jsx)(n.code,{children:"Date"})," or timestamp in milliseconds) - minimum date that can be selected"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"maxDate"})," (",(0,t.jsx)(n.code,{children:"Date"})," object or timestamp in milliseconds) - maximum date that can be selected"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mode"})," (",(0,t.jsx)(n.code,{children:"enum('calendar', 'spinner', 'default')"}),") - To set the date-picker mode to calendar/spinner/default","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'calendar': Show a date picker in calendar mode."}),"\n",(0,t.jsx)(n.li,{children:"'spinner': Show a date picker in spinner mode."}),"\n",(0,t.jsx)(n.li,{children:"'default': Show a default native date picker(spinner/calendar) based on android versions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Returns a Promise which will be invoked an object containing ",(0,t.jsx)(n.code,{children:"action"}),", ",(0,t.jsx)(n.code,{children:"year"}),", ",(0,t.jsx)(n.code,{children:"month"})," (0-11), ",(0,t.jsx)(n.code,{children:"day"})," if the user picked a date. If the user dismissed the dialog, the Promise will still be resolved with action being ",(0,t.jsx)(n.code,{children:"DatePickerAndroid.dismissedAction"})," and all the other keys being undefined. ",(0,t.jsx)(n.strong,{children:"Always"})," check whether the ",(0,t.jsx)(n.code,{children:"action"})," is equal to ",(0,t.jsx)(n.code,{children:"DatePickerAndroid.dateSetAction"})," before reading the values."]}),"\n",(0,t.jsxs)(n.p,{children:["Note the native date picker dialog has some UI glitches on Android 4 and lower when using the ",(0,t.jsx)(n.code,{children:"minDate"})," and ",(0,t.jsx)(n.code,{children:"maxDate"})," options."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"datesetaction",children:(0,t.jsx)(n.code,{children:"dateSetAction()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"static dateSetAction()\n"})}),"\n",(0,t.jsx)(n.p,{children:"A date has been selected."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"dismissedaction",children:(0,t.jsx)(n.code,{children:"dismissedAction()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"static dismissedAction()\n"})}),"\n",(0,t.jsx)(n.p,{children:"The dialog has been dismissed."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},71426:(e,n,d)=>{var t=d(27378),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,d){var t,s={},o=null,l=null;for(t in void 0!==d&&(o=""+d),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!c.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:o,ref:l,props:s,_owner:r.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},24246:(e,n,d)=>{e.exports=d(71426)},71670:(e,n,d)=>{d.d(n,{Zo:()=>r,ah:()=>s});var t=d(27378);const i=t.createContext({});function s(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function r({components:e,children:n,disableParentContext:d}){let r;return r=d?"function"==typeof e?e({}):e||a:s(e),t.createElement(i.Provider,{value:r},n)}}}]);