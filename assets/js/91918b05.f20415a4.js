/*! For license information please see 91918b05.f20415a4.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[75216],{63433:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=i(24246),s=i(71670);const r={id:"timepickerandroid",title:"\ud83d\udea7 TimePickerAndroid"},o=void 0,d={id:"timepickerandroid",title:"\ud83d\udea7 TimePickerAndroid",description:"Removed. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.72/timepickerandroid.md",sourceDirName:".",slug:"/timepickerandroid",permalink:"/docs/0.72/timepickerandroid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/timepickerandroid.md",tags:[],version:"0.72",lastUpdatedAt:1687362382,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{id:"timepickerandroid",title:"\ud83d\udea7 TimePickerAndroid"}},c={},l=[{value:"Example",id:"example",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>open()</code>",id:"open",level:3},{value:"<code>timeSetAction()</code>",id:"timesetaction",level:3},{value:"<code>dismissedAction()</code>",id:"dismissedaction",level:3}];function a(e){const n=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",h3:"h3",pre:"pre",code:"code",hr:"hr",h1:"h1",h2:"h2",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Removed."})," Use one of the ",(0,t.jsx)(n.a,{href:"https://reactnative.directory/?search=timepicker",children:"community packages"})," instead."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Opens the standard Android time picker dialog."}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"try {\n  const {action, hour, minute} = await TimePickerAndroid.open({\n    hour: 14,\n    minute: 0,\n    is24Hour: false, // Will display '2 PM'\n  });\n  if (action !== TimePickerAndroid.dismissedAction) {\n    // Selected hour (0-23), minute (0-59)\n  }\n} catch ({code, message}) {\n  console.warn('Cannot open time picker', message);\n}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"open",children:(0,t.jsx)(n.code,{children:"open()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"static open(options)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Opens the standard Android time picker dialog."}),"\n",(0,t.jsxs)(n.p,{children:["The available keys for the ",(0,t.jsx)(n.code,{children:"options"})," object are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hour"})," (0-23) - the hour to show, defaults to the current time"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"minute"})," (0-59) - the minute to show, defaults to the current time"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"is24Hour"})," (boolean) - If ",(0,t.jsx)(n.code,{children:"true"}),", the picker uses the 24-hour format. If ",(0,t.jsx)(n.code,{children:"false"}),", the picker shows an AM/PM chooser. If undefined, the default for the current locale is used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mode"})," (",(0,t.jsx)(n.code,{children:"enum('clock', 'spinner', 'default')"}),") - set the time picker mode","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'clock': Show a time picker in clock mode."}),"\n",(0,t.jsx)(n.li,{children:"'spinner': Show a time picker in spinner mode."}),"\n",(0,t.jsx)(n.li,{children:"'default': Show a default time picker based on Android versions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Returns a Promise which will be invoked an object containing ",(0,t.jsx)(n.code,{children:"action"}),", ",(0,t.jsx)(n.code,{children:"hour"})," (0-23), ",(0,t.jsx)(n.code,{children:"minute"})," (0-59) if the user picked a time. If the user dismissed the dialog, the Promise will still be resolved with action being ",(0,t.jsx)(n.code,{children:"TimePickerAndroid.dismissedAction"})," and all the other keys being undefined. ",(0,t.jsx)(n.strong,{children:"Always"})," check whether the ",(0,t.jsx)(n.code,{children:"action"})," before reading the values."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"timesetaction",children:(0,t.jsx)(n.code,{children:"timeSetAction()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"static timeSetAction()\n"})}),"\n",(0,t.jsx)(n.p,{children:"A time has been selected."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"dismissedaction",children:(0,t.jsx)(n.code,{children:"dismissedAction()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"static dismissedAction()\n"})}),"\n",(0,t.jsx)(n.p,{children:"The dialog has been dismissed."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},71426:(e,n,i)=>{var t=i(27378),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,i){var t,r={},l=null,a=null;for(t in void 0!==i&&(l=""+i),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,t)&&!c.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:a,props:r,_owner:d.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},24246:(e,n,i)=>{e.exports=i(71426)},71670:(e,n,i)=>{i.d(n,{Zo:()=>d,ah:()=>r});var t=i(27378);const s=t.createContext({});function r(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function d({components:e,children:n,disableParentContext:i}){let d;return d=i?"function"==typeof e?e({}):e||o:r(e),t.createElement(s.Provider,{value:d},n)}}}]);