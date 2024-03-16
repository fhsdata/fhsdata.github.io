/*! For license information please see 23636f9a.e890e14e.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[86255],{87794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=t(24246),i=t(71670);const r={id:"animatedvalue",title:"Animated.Value"},l=void 0,d={id:"animatedvalue",title:"Animated.Value",description:"Standard value for driving animations. One Animated.Value can drive multiple properties in a synchronized fashion, but can only be driven by one mechanism at a time. Using a new mechanism (e.g. starting a new animation, or calling setValue) will stop any previous ones.",source:"@site/versioned_docs/version-0.71/animatedvalue.md",sourceDirName:".",slug:"/animatedvalue",permalink:"/docs/0.71/animatedvalue",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/animatedvalue.md",tags:[],version:"0.71",lastUpdatedAt:1673540325,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{id:"animatedvalue",title:"Animated.Value"},sidebar:"api",previous:{title:"Animated",permalink:"/docs/0.71/animated"},next:{title:"Animated.ValueXY",permalink:"/docs/0.71/animatedvaluexy"}},a={},c=[{value:"Methods",id:"methods",level:2},{value:"<code>setValue()</code>",id:"setvalue",level:3},{value:"<code>setOffset()</code>",id:"setoffset",level:3},{value:"<code>flattenOffset()</code>",id:"flattenoffset",level:3},{value:"<code>extractOffset()</code>",id:"extractoffset",level:3},{value:"<code>addListener()</code>",id:"addlistener",level:3},{value:"<code>removeListener()</code>",id:"removelistener",level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",level:3},{value:"<code>stopAnimation()</code>",id:"stopanimation",level:3},{value:"<code>resetAnimation()</code>",id:"resetanimation",level:3},{value:"<code>interpolate()</code>",id:"interpolate",level:3},{value:"<code>animate()</code>",id:"animate",level:3}];function h(e){const n=Object.assign({p:"p",code:"code",hr:"hr",h1:"h1",h2:"h2",h3:"h3",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Standard value for driving animations. One ",(0,s.jsx)(n.code,{children:"Animated.Value"})," can drive multiple properties in a synchronized fashion, but can only be driven by one mechanism at a time. Using a new mechanism (e.g. starting a new animation, or calling ",(0,s.jsx)(n.code,{children:"setValue"}),") will stop any previous ones."]}),"\n",(0,s.jsxs)(n.p,{children:["Typically initialized with ",(0,s.jsx)(n.code,{children:"new Animated.Value(0);"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"setvalue",children:(0,s.jsx)(n.code,{children:"setValue()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"setValue(value: number);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Directly set the value. This will stop any animations running on the value and update all the bound properties."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Value"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"setoffset",children:(0,s.jsx)(n.code,{children:"setOffset()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"setOffset(offset: number);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Sets an offset that is applied on top of whatever value is set, whether via ",(0,s.jsx)(n.code,{children:"setValue"}),", an animation, or ",(0,s.jsx)(n.code,{children:"Animated.event"}),". Useful for compensating things like the start of a pan gesture."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"offset"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Offset value"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"flattenoffset",children:(0,s.jsx)(n.code,{children:"flattenOffset()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"flattenOffset();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"extractoffset",children:(0,s.jsx)(n.code,{children:"extractOffset()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"extractOffset();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"addlistener",children:(0,s.jsx)(n.code,{children:"addListener()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"addListener(callback: (state: {value: number}) => void): string;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."}),"\n",(0,s.jsx)(n.p,{children:"Returns a string that serves as an identifier for the listener."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"callback"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsxs)(n.td,{children:["The callback function which will receive an object with a ",(0,s.jsx)(n.code,{children:"value"})," key set to the new value."]})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"removelistener",children:(0,s.jsx)(n.code,{children:"removeListener()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"removeListener(id: string);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Unregister a listener. The ",(0,s.jsx)(n.code,{children:"id"})," param shall match the identifier previously returned by ",(0,s.jsx)(n.code,{children:"addListener()"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"id"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Id for the listener being removed."})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"removealllisteners",children:(0,s.jsx)(n.code,{children:"removeAllListeners()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"removeAllListeners();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Remove all registered listeners."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"stopanimation",children:(0,s.jsx)(n.code,{children:"stopAnimation()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"stopAnimation(callback?: (value: number) => void);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Stops any running animation or tracking. ",(0,s.jsx)(n.code,{children:"callback"})," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"callback"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"A function that will receive the final value."})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"resetanimation",children:(0,s.jsx)(n.code,{children:"resetAnimation()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"resetAnimation(callback?: (value: number) => void);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Stops any animation and resets the value to its original."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"callback"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"A function that will receive the original value."})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"interpolate",children:(0,s.jsx)(n.code,{children:"interpolate()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"interpolate(config: InterpolationConfigType);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Interpolates the value before updating the property, e.g. mapping 0-1 to 0-10."}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.code,{children:"AnimatedInterpolation.js"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"config"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"See below."})]})})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"config"})," object is composed of the following keys:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inputRange"}),": an array of numbers"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"outputRange"}),": an array of numbers or strings"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"easing"})," (optional): a function that returns a number, given an input number"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"extrapolate"})," (optional): a string such as 'extend', 'identity', or 'clamp'"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"extrapolateLeft"})," (optional): a string such as 'extend', 'identity', or 'clamp'"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"extrapolateRight"})," (optional): a string such as 'extend', 'identity', or 'clamp'"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"animate",children:(0,s.jsx)(n.code,{children:"animate()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"animate(animation, callback);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Typically only used internally, but could be used by a custom Animation class."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"animation"}),(0,s.jsx)(n.td,{children:"Animation"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsxs)(n.td,{children:["See ",(0,s.jsx)(n.code,{children:"Animation.js"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"callback"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Callback function."})]})]})]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},71426:(e,n,t)=>{var s=t(27378),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,r={},c=null,h=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)l.call(n,s)&&!a.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:i,type:e,key:c,ref:h,props:r,_owner:d.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>r});var s=t(27378);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||l:r(e),s.createElement(i.Provider,{value:d},n)}}}]);