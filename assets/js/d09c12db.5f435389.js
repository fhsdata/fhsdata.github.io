/*! For license information please see d09c12db.5f435389.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[37168],{206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=n(24246),a=n(71670);const s={id:"appstate",title:"AppState"},r=void 0,c={id:"appstate",title:"AppState",description:"AppState can tell you if the app is in the foreground or background, and notify you when the state changes.",source:"@site/versioned_docs/version-0.72/appstate.md",sourceDirName:".",slug:"/appstate",permalink:"/docs/0.72/appstate",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/appstate.md",tags:[],version:"0.72",lastUpdatedAt:1687362382,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{id:"appstate",title:"AppState"},sidebar:"api",previous:{title:"AppRegistry",permalink:"/docs/0.72/appregistry"},next:{title:"DevSettings",permalink:"/docs/0.72/devsettings"}},d={},o=[{value:"App States",id:"app-states",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Events",id:"events",level:2},{value:"<code>change</code>",id:"change",level:3},{value:"<code>memoryWarning</code>",id:"memorywarning",level:3},{value:'<code>focus</code> <div class="label android">Android</div>',id:"focus-android",level:3},{value:'<code>blur</code> <div class="label android">Android</div>',id:"blur-android",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>currentState</code>",id:"currentstate",level:3}];function l(e){const t=Object.assign({p:"p",code:"code",h3:"h3",ul:"ul",li:"li",a:"a",h2:"h2",div:"div",hr:"hr",h1:"h1",pre:"pre"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"AppState"})," can tell you if the app is in the foreground or background, and notify you when the state changes."]}),"\n",(0,i.jsx)(t.p,{children:"AppState is frequently used to determine the intent and proper behavior when handling push notifications."}),"\n",(0,i.jsx)(t.h3,{id:"app-states",children:"App States"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"active"})," - The app is running in the foreground"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"background"})," - The app is running in the background. The user is either:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"in another app"}),"\n",(0,i.jsx)(t.li,{children:"on the home screen"}),"\n",(0,i.jsxs)(t.li,{children:["[Android] on another ",(0,i.jsx)(t.code,{children:"Activity"})," (even if it was launched by your app)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["[iOS] ",(0,i.jsx)(t.code,{children:"inactive"})," - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the multitasking view, opening the Notification Center or in the event of an incoming call."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For more information, see ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/app_and_scenes/managing_your_app_s_life_cycle",children:"Apple's documentation"})]}),"\n",(0,i.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsxs)(t.p,{children:["To see the current state, you can check ",(0,i.jsx)(t.code,{children:"AppState.currentState"}),", which will be kept up-to-date. However, ",(0,i.jsx)(t.code,{children:"currentState"})," will be null at launch while ",(0,i.jsx)(t.code,{children:"AppState"})," retrieves it over the bridge."]}),"\n",(0,i.jsx)(t.div,{class:"snack-player","data-snack-name":"AppState Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseRef%2C%20useState%2C%20useEffect%7D%20from%20'react'%3B%5Cnimport%20%7BAppState%2C%20StyleSheet%2C%20Text%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20AppStateExample%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20appState%20%3D%20useRef(AppState.currentState)%3B%5Cn%20%20const%20%5BappStateVisible%2C%20setAppStateVisible%5D%20%3D%20useState(appState.current)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20subscription%20%3D%20AppState.addEventListener('change'%2C%20nextAppState%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20if%20(%5Cn%20%20%20%20%20%20%20%20appState.current.match(%2Finactive%7Cbackground%2F)%20%26%26%5Cn%20%20%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20'active'%5Cn%20%20%20%20%20%20)%20%7B%5Cn%20%20%20%20%20%20%20%20console.log('App%20has%20come%20to%20the%20foreground!')%3B%5Cn%20%20%20%20%20%20%7D%5Cn%5Cn%20%20%20%20%20%20appState.current%20%3D%20nextAppState%3B%5Cn%20%20%20%20%20%20setAppStateVisible(appState.current)%3B%5Cn%20%20%20%20%20%20console.log('AppState'%2C%20appState.current)%3B%5Cn%20%20%20%20%7D)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20subscription.remove()%3B%5Cn%20%20%20%20%7D%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7BappStateVisible%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20AppStateExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsxs)(t.p,{children:['This example will only ever appear to say "Current state is: active" because the app is only visible to the user when in the ',(0,i.jsx)(t.code,{children:"active"})," state, and the null state will happen only momentarily. If you want to experiment with the code we recommend to use your own device instead of embedded preview."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h1,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(t.h3,{id:"change",children:(0,i.jsx)(t.code,{children:"change"})}),"\n",(0,i.jsxs)(t.p,{children:["This event is received when the app state has changed. The listener is called with one of ",(0,i.jsx)(t.a,{href:"appstate#app-states",children:"the current app state values"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"memorywarning",children:(0,i.jsx)(t.code,{children:"memoryWarning"})}),"\n",(0,i.jsx)(t.p,{children:"This event is used in the need of throwing memory warning or releasing it."}),"\n",(0,i.jsxs)(t.h3,{id:"focus-android",children:[(0,i.jsx)(t.code,{children:"focus"})," ",(0,i.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,i.jsx)(t.p,{children:"Received when the app gains focus (the user is interacting with the app)."}),"\n",(0,i.jsxs)(t.h3,{id:"blur-android",children:[(0,i.jsx)(t.code,{children:"blur"})," ",(0,i.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,i.jsxs)(t.p,{children:["Received when the user is not actively interacting with the app. Useful in situations when the user pulls down the ",(0,i.jsx)(t.a,{href:"https://developer.android.com/guide/topics/ui/notifiers/notifications#bar-and-drawer",children:"notification drawer"}),". ",(0,i.jsx)(t.code,{children:"AppState"})," won't change but the ",(0,i.jsx)(t.code,{children:"blur"})," event will get fired."]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.h3,{id:"addeventlistener",children:(0,i.jsx)(t.code,{children:"addEventListener()"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"static addEventListener(\n  type: AppStateEvent,\n  listener: (state: AppStateStatus) => void,\n): NativeEventSubscription;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Sets up a function that will be called whenever the specified event type on AppState occurs. Valid values for ",(0,i.jsx)(t.code,{children:"eventType"})," are\n",(0,i.jsx)(t.a,{href:"#events",children:"listed above"}),". Returns the ",(0,i.jsx)(t.code,{children:"EventSubscription"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h3,{id:"currentstate",children:(0,i.jsx)(t.code,{children:"currentState"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"static currentState: AppStateStatus;\n"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},71426:(e,t,n)=>{var i=n(27378),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var i,s={},o=null,l=null;for(i in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,i)&&!d.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:a,type:e,key:o,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>s});var i=n(27378);const a=i.createContext({});function s(e){const t=i.useContext(a);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||r:s(e),i.createElement(a.Provider,{value:c},t)}}}]);