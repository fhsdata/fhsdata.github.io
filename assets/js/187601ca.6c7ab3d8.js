/*! For license information please see 187601ca.6c7ab3d8.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[89623],{75504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>h,toc:()=>a});var s=n(24246),o=n(71670);const r={id:"gesture-responder-system",title:"Gesture Responder System"},i=void 0,h={id:"gesture-responder-system",title:"Gesture Responder System",description:"The gesture responder system manages the lifecycle of gestures in your app. A touch can go through several phases as the app determines what the user's intention is. For example, the app needs to determine if the touch is scrolling, sliding on a widget, or tapping. This can even change during the duration of a touch. There can also be multiple simultaneous touches.",source:"@site/../docs/gesture-responder-system.md",sourceDirName:".",slug:"/gesture-responder-system",permalink:"/docs/next/gesture-responder-system",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/gesture-responder-system.md",tags:[],version:"current",lastUpdatedAt:1671131105,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{id:"gesture-responder-system",title:"Gesture Responder System"},sidebar:"docs",previous:{title:"Animations",permalink:"/docs/next/animations"},next:{title:"Networking",permalink:"/docs/next/network"}},l={},a=[{value:"Best Practices",id:"best-practices",level:3},{value:"TouchableHighlight and Touchable*",id:"touchablehighlight-and-touchable",level:3},{value:"Responder Lifecycle",id:"responder-lifecycle",level:2},{value:"Capture ShouldSet Handlers",id:"capture-shouldset-handlers",level:3},{value:"PanResponder",id:"panresponder",level:3}];function d(e){const t=Object.assign({p:"p",h3:"h3",ul:"ul",li:"li",code:"code",h2:"h2",a:"a"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The gesture responder system manages the lifecycle of gestures in your app. A touch can go through several phases as the app determines what the user's intention is. For example, the app needs to determine if the touch is scrolling, sliding on a widget, or tapping. This can even change during the duration of a touch. There can also be multiple simultaneous touches."}),"\n",(0,s.jsx)(t.p,{children:"The touch responder system is needed to allow components to negotiate these touch interactions without any additional knowledge about their parent or child components."}),"\n",(0,s.jsx)(t.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(t.p,{children:"To make your app feel great, every action should have the following attributes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Feedback/highlighting- show the user what is handling their touch, and what will happen when they release the gesture"}),"\n",(0,s.jsx)(t.li,{children:"Cancel-ability- when making an action, the user should be able to abort it mid-touch by dragging their finger away"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"These features make users more comfortable while using an app, because it allows people to experiment and interact without fear of making mistakes."}),"\n",(0,s.jsx)(t.h3,{id:"touchablehighlight-and-touchable",children:"TouchableHighlight and Touchable*"}),"\n",(0,s.jsxs)(t.p,{children:["The responder system can be complicated to use. So we have provided an abstract ",(0,s.jsx)(t.code,{children:"Touchable"}),' implementation for things that should be "tappable". This uses the responder system and allows you to configure tap interactions declaratively. Use ',(0,s.jsx)(t.code,{children:"TouchableHighlight"})," anywhere where you would use a button or link on web."]}),"\n",(0,s.jsx)(t.h2,{id:"responder-lifecycle",children:"Responder Lifecycle"}),"\n",(0,s.jsx)(t.p,{children:"A view can become the touch responder by implementing the correct negotiation methods. There are two methods to ask the view if it wants to become responder:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"View.props.onStartShouldSetResponder: evt => true,"})," - Does this view want to become responder on the start of a touch?"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"View.props.onMoveShouldSetResponder: evt => true,"}),' - Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness?']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If the View returns true and attempts to become the responder, one of the following will happen:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"View.props.onResponderGrant: evt => {}"})," - The View is now responding for touch events. This is the time to highlight and show the user what is happening"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"View.props.onResponderReject: evt => {}"})," - Something else is the responder right now and will not release it"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If the view is responding, the following handlers can be called:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"View.props.onResponderMove: evt => {}"})," - The user is moving their finger"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"View.props.onResponderRelease: evt => {}"}),' - Fired at the end of the touch, ie "touchUp"']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"View.props.onResponderTerminationRequest: evt => true"})," - Something else wants to become responder. Should this view release the responder? Returning true allows release"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"View.props.onResponderTerminate: evt => {}"})," - The responder has been taken from the View. Might be taken by other views after a call to ",(0,s.jsx)(t.code,{children:"onResponderTerminationRequest"}),", or might be taken by the OS without asking (happens with control center/ notification center on iOS)"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"evt"})," is a synthetic touch event with the following form:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"nativeEvent"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"changedTouches"})," - Array of all touch events that have changed since the last event"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"identifier"})," - The ID of the touch"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"locationX"})," - The X position of the touch, relative to the element"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"locationY"})," - The Y position of the touch, relative to the element"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"pageX"})," - The X position of the touch, relative to the root element"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"pageY"})," - The Y position of the touch, relative to the root element"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"target"})," - The node id of the element receiving the touch event"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"timestamp"})," - A time identifier for the touch, useful for velocity calculation"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"touches"})," - Array of all current touches on the screen"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"capture-shouldset-handlers",children:"Capture ShouldSet Handlers"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"onStartShouldSetResponder"})," and ",(0,s.jsx)(t.code,{children:"onMoveShouldSetResponder"})," are called with a bubbling pattern, where the deepest node is called first. That means that the deepest component will become responder when multiple Views return true for ",(0,s.jsx)(t.code,{children:"*ShouldSetResponder"})," handlers. This is desirable in most cases, because it makes sure all controls and buttons are usable."]}),"\n",(0,s.jsxs)(t.p,{children:["However, sometimes a parent will want to make sure that it becomes responder. This can be handled by using the capture phase. Before the responder system bubbles up from the deepest component, it will do a capture phase, firing ",(0,s.jsx)(t.code,{children:"on*ShouldSetResponderCapture"}),". So if a parent View wants to prevent the child from becoming responder on a touch start, it should have a ",(0,s.jsx)(t.code,{children:"onStartShouldSetResponderCapture"})," handler which returns true."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"View.props.onStartShouldSetResponderCapture: evt => true,"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"View.props.onMoveShouldSetResponderCapture: evt => true,"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"panresponder",children:"PanResponder"}),"\n",(0,s.jsxs)(t.p,{children:["For higher-level gesture interpretation, check out ",(0,s.jsx)(t.a,{href:"/docs/next/panresponder",children:"PanResponder"}),"."]})]})}const c=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},71426:(e,t,n)=>{var s=n(27378),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,h=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var s,r={},a=null,d=null;for(s in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:o,type:e,key:a,ref:d,props:r,_owner:h.current}}t.Fragment=r,t.jsx=a,t.jsxs=a},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>h,ah:()=>r});var s=n(27378);const o=s.createContext({});function r(e){const t=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function h({components:e,children:t,disableParentContext:n}){let h;return h=n?"function"==typeof e?e({}):e||i:r(e),s.createElement(o.Provider,{value:h},t)}}}]);