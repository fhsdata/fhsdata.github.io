/*! For license information please see c6a0cc74.97619c3c.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[12100],{72121:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var s=t(24246),i=t(71670);const d={id:"keyboard",title:"Keyboard"},r=void 0,a={id:"keyboard",title:"Keyboard",description:"Keyboard module to control keyboard events.",source:"@site/versioned_docs/version-0.73/keyboard.md",sourceDirName:".",slug:"/keyboard",permalink:"/docs/keyboard",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/keyboard.md",tags:[],version:"0.73",lastUpdatedAt:1702040446,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{id:"keyboard",title:"Keyboard"},sidebar:"api",previous:{title:"InteractionManager",permalink:"/docs/interactionmanager"},next:{title:"LayoutAnimation",permalink:"/docs/layoutanimation"}},o={},c=[{value:"Usage",id:"usage",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>addListener()</code>",id:"addlistener",level:3},{value:"<code>dismiss()</code>",id:"dismiss",level:3},{value:"<code>scheduleLayoutAnimation</code>",id:"schedulelayoutanimation",level:3},{value:"<code>isVisible()</code>",id:"isvisible",level:3},{value:"<code>metrics()</code>",id:"metrics",level:3}];function l(e){const n=Object.assign({p:"p",code:"code",h3:"h3",div:"div",hr:"hr",h1:"h1",h2:"h2",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Keyboard"})," module to control keyboard events."]}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"The Keyboard module allows you to listen for native events and react to them, as well as make changes to the keyboard, like dismissing it."}),"\n",(0,s.jsx)(n.div,{class:"snack-player","data-snack-name":"Keyboard Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%2C%20useEffect%7D%20from%20'react'%3B%5Cnimport%20%7BKeyboard%2C%20Text%2C%20TextInput%2C%20StyleSheet%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20Example%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BkeyboardStatus%2C%20setKeyboardStatus%5D%20%3D%20useState('')%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20showSubscription%20%3D%20Keyboard.addListener('keyboardDidShow'%2C%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20setKeyboardStatus('Keyboard%20Shown')%3B%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%20%20const%20hideSubscription%20%3D%20Keyboard.addListener('keyboardDidHide'%2C%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20setKeyboardStatus('Keyboard%20Hidden')%3B%5Cn%20%20%20%20%7D)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20showSubscription.remove()%3B%5Cn%20%20%20%20%20%20hideSubscription.remove()%3B%5Cn%20%20%20%20%7D%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%5Cn%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyle.input%7D%5Cn%20%20%20%20%20%20%20%20placeholder%3D%5C%22Click%20here%E2%80%A6%5C%22%5Cn%20%20%20%20%20%20%20%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyle.status%7D%3E%7BkeyboardStatus%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20style%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20padding%3A%2036%2C%5Cn%20%20%7D%2C%5Cn%20%20input%3A%20%7B%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20borderWidth%3A%200.5%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%7D%2C%5Cn%20%20status%3A%20%7B%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20Example%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"addlistener",children:(0,s.jsx)(n.code,{children:"addListener()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"static addListener: (\n  eventType: KeyboardEventName,\n  listener: KeyboardEventListener,\n) => EmitterSubscription;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"addListener"})," function connects a JavaScript function to an identified native keyboard notification event."]}),"\n",(0,s.jsx)(n.p,{children:"This function then returns the reference to the listener."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["eventName ",(0,s.jsx)("div",{className:"label basic two-lines required",children:"Required"})]}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The string that identifies the event you're listening for. See the list below."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["callback ",(0,s.jsx)("div",{className:"label basic two-lines required",children:"Required"})]}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"The function to be called when the event fires"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"eventName"})})}),"\n",(0,s.jsx)(n.p,{children:"This can be any of the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"keyboardWillShow"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"keyboardDidShow"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"keyboardWillHide"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"keyboardDidHide"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"keyboardWillChangeFrame"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"keyboardDidChangeFrame"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Note that only ",(0,s.jsx)(n.code,{children:"keyboardDidShow"})," and ",(0,s.jsx)(n.code,{children:"keyboardDidHide"})," events are available on Android. The events will not be fired when using Android 10 and under if your activity has ",(0,s.jsx)(n.code,{children:"android:windowSoftInputMode"})," set to ",(0,s.jsx)(n.code,{children:"adjustNothing"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"dismiss",children:(0,s.jsx)(n.code,{children:"dismiss()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"static dismiss();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Dismisses the active keyboard and removes focus."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"schedulelayoutanimation",children:(0,s.jsx)(n.code,{children:"scheduleLayoutAnimation"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"static scheduleLayoutAnimation(event: KeyboardEvent);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Useful for syncing TextInput (or other keyboard accessory view) size of position changes with keyboard movements."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"isvisible",children:(0,s.jsx)(n.code,{children:"isVisible()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"static isVisible(): boolean;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Whether the keyboard is last known to be visible."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"metrics",children:(0,s.jsx)(n.code,{children:"metrics()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"static metrics(): KeyboardMetrics | undefined;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Return the metrics of the soft-keyboard if visible."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},71426:(e,n,t)=>{var s=t(27378),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,d={},c=null,l=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)r.call(n,s)&&!o.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:i,type:e,key:c,ref:l,props:d,_owner:a.current}}n.Fragment=d,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>d});var s=t(27378);const i=s.createContext({});function d(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||r:d(e),s.createElement(i.Provider,{value:a},n)}}}]);