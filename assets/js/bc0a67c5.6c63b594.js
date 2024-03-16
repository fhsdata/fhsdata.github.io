/*! For license information please see bc0a67c5.6c63b594.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[38043],{87709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(24246),i=n(71670);const r={title:"Using Native Driver for Animated",author:"Janic Duplessis",authorTitle:"Software Engineer at App & Flow",authorURL:"https://twitter.com/janicduplessis",authorImageURL:"https://secure.gravatar.com/avatar/8d6b6c0f5b228b0a8566a69de448b9dd?s=128",authorTwitter:"janicduplessis",tags:["engineering"]},o=void 0,s={permalink:"/blog/2017/02/14/using-native-driver-for-animated",source:"@site/blog/2017-02-14-using-native-driver-for-animated.md",title:"Using Native Driver for Animated",description:"For the past year, we've been working on improving performance of animations that use the Animated library. Animations are very important to create a beautiful user experience but can also be hard to do right. We want to make it easy for developers to create performant animations without having to worry about some of their code causing it to lag.",date:"2017-02-14T00:00:00.000Z",formattedDate:"February 14, 2017",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],readingTime:6.09,hasTruncateMarker:!1,authors:[{name:"Janic Duplessis",title:"Software Engineer at App & Flow",url:"https://twitter.com/janicduplessis",imageURL:"https://secure.gravatar.com/avatar/8d6b6c0f5b228b0a8566a69de448b9dd?s=128"}],frontMatter:{title:"Using Native Driver for Animated",author:"Janic Duplessis",authorTitle:"Software Engineer at App & Flow",authorURL:"https://twitter.com/janicduplessis",authorImageURL:"https://secure.gravatar.com/avatar/8d6b6c0f5b228b0a8566a69de448b9dd?s=128",authorTwitter:"janicduplessis",tags:["engineering"]},unlisted:!1,prevItem:{title:"Introducing Create React Native App",permalink:"/blog/2017/03/13/introducing-create-react-native-app"},nextItem:{title:"A Monthly Release Cadence: Releasing December and January RC",permalink:"/blog/2017/01/07/monthly-release-cadence"}},d={authorsImageUrls:[void 0]},l=[{value:"What is this?",id:"what-is-this",level:2},{value:"A bit of history...",id:"a-bit-of-history",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"How do I use this in my app?",id:"how-do-i-use-this-in-my-app",level:2},{value:"Caveats",id:"caveats",level:2},{value:"Resources",id:"resources",level:2}];function h(e){const t=Object.assign({p:"p",h2:"h2",a:"a",code:"code",img:"img",ul:"ul",li:"li",pre:"pre"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"For the past year, we've been working on improving performance of animations that use the Animated library. Animations are very important to create a beautiful user experience but can also be hard to do right. We want to make it easy for developers to create performant animations without having to worry about some of their code causing it to lag."}),"\n",(0,a.jsx)(t.h2,{id:"what-is-this",children:"What is this?"}),"\n",(0,a.jsx)(t.p,{children:"The Animated API was designed with a very important constraint in mind, it is serializable. This means we can send everything about the animation to native before it has even started and allows native code to perform the animation on the UI thread without having to go through the bridge on every frame. It is very useful because once the animation has started, the JS thread can be blocked and the animation will still run smoothly. In practice this can happen a lot because user code runs on the JS thread and React renders can also lock JS for a long time."}),"\n",(0,a.jsx)(t.h2,{id:"a-bit-of-history",children:"A bit of history..."}),"\n",(0,a.jsxs)(t.p,{children:["This project started about a year ago, when Expo built the li.st app on Android. ",(0,a.jsx)(t.a,{href:"https://twitter.com/kzzzf",children:"Krzysztof Magiera"})," was contracted to build the initial implementation on Android. It ended up working well and li.st was the first app to ship with native driven animations using Animated. A few months later, ",(0,a.jsx)(t.a,{href:"https://github.com/buba447",children:"Brandon Withrow"})," built the initial implementation on iOS. After that, ",(0,a.jsx)(t.a,{href:"https://twitter.com/ryangomba",children:"Ryan Gomba"})," and myself worked on adding missing features like support for ",(0,a.jsx)(t.code,{children:"Animated.event"})," as well as squash bugs we found when using it in production apps. This was truly a community effort and I would like to thanks everyone that was involved as well as Expo for sponsoring a large part of the development. It is now used by ",(0,a.jsx)(t.code,{children:"Touchable"})," components in React Native as well as for navigation animations in the newly released ",(0,a.jsx)(t.a,{href:"https://github.com/react-community/react-navigation",children:"React Navigation"})," library."]}),"\n",(0,a.jsx)(t.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,a.jsxs)(t.p,{children:["First, let's check out how animations currently work using Animated with the JS driver. When using Animated, you declare a graph of nodes that represent the animations that you want to perform, and then use a driver to update an Animated value using a predefined curve. You may also update an Animated value by connecting it to an event of a ",(0,a.jsx)(t.code,{children:"View"})," using ",(0,a.jsx)(t.code,{children:"Animated.event"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(88267).Z+"",width:"782",height:"216"})}),"\n",(0,a.jsx)(t.p,{children:"Here's a breakdown of the steps for an animation and where it happens:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["JS: The animation driver uses ",(0,a.jsx)(t.code,{children:"requestAnimationFrame"})," to execute on every frame and update the value it drives using the new value it calculates based on the animation curve."]}),"\n",(0,a.jsxs)(t.li,{children:["JS: Intermediate values are calculated and passed to a props node that is attached to a ",(0,a.jsx)(t.code,{children:"View"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["JS: The ",(0,a.jsx)(t.code,{children:"View"})," is updated using ",(0,a.jsx)(t.code,{children:"setNativeProps"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"JS to Native bridge."}),"\n",(0,a.jsxs)(t.li,{children:["Native: The ",(0,a.jsx)(t.code,{children:"UIView"})," or ",(0,a.jsx)(t.code,{children:"android.View"})," is updated."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"As you can see, most of the work happens on the JS thread. If it is blocked the animation will skip frames. It also needs to go through the JS to Native bridge on every frame to update native views."}),"\n",(0,a.jsx)(t.p,{children:"What the native driver does is move all of these steps to native. Since Animated produces a graph of animated nodes, it can be serialized and sent to native only once when the animation starts, eliminating the need to callback into the JS thread; the native code can take care of updating the views directly on the UI thread on every frame."}),"\n",(0,a.jsx)(t.p,{children:"Here's an example of how we can serialize an animated value and an interpolation node (not the exact implementation, just an example)."}),"\n",(0,a.jsx)(t.p,{children:"Create the native value node, this is the value that will be animated:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"NativeAnimatedModule.createNode({\n  id: 1,\n  type: 'value',\n  initialValue: 0,\n});\n"})}),"\n",(0,a.jsx)(t.p,{children:"Create the native interpolation node, this tells the native driver how to interpolate a value:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"NativeAnimatedModule.createNode({\n  id: 2,\n  type: 'interpolation',\n  inputRange: [0, 10],\n  outputRange: [10, 0],\n  extrapolate: 'clamp',\n});\n"})}),"\n",(0,a.jsx)(t.p,{children:"Create the native props node, this tells the native driver which prop on the view it is attached to:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"NativeAnimatedModule.createNode({\n  id: 3,\n  type: 'props',\n  properties: ['style.opacity'],\n});\n"})}),"\n",(0,a.jsx)(t.p,{children:"Connect nodes together:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"NativeAnimatedModule.connectNodes(1, 2);\nNativeAnimatedModule.connectNodes(2, 3);\n"})}),"\n",(0,a.jsx)(t.p,{children:"Connect the props node to a view:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"NativeAnimatedModule.connectToView(3, ReactNative.findNodeHandle(viewRef));\n"})}),"\n",(0,a.jsx)(t.p,{children:"With that, the native animated module has all the info it needs to update the native views directly without having to go to JS to calculate any value."}),"\n",(0,a.jsx)(t.p,{children:"All there is left to do is actually start the animation by specifying what type of animation curve we want and what animated value to update. Timing animations can also be simplified by calculating every frame of the animation in advance in JS to make the native implementation smaller."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"NativeAnimatedModule.startAnimation({\n  type: 'timing',\n  frames: [0, 0.1, 0.2, 0.4, 0.65, ...],\n  animatedValueId: 1,\n});\n"})}),"\n",(0,a.jsx)(t.p,{children:"And now here's the breakdown of what happens when the animation runs:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Native: The native animation driver uses ",(0,a.jsx)(t.code,{children:"CADisplayLink"})," or ",(0,a.jsx)(t.code,{children:"android.view.Choreographer"})," to execute on every frame and update the value it drives using the new value it calculates based on the animation curve."]}),"\n",(0,a.jsx)(t.li,{children:"Native: Intermediate values are calculated and passed to a props node that is attached to a native view."}),"\n",(0,a.jsxs)(t.li,{children:["Native: The ",(0,a.jsx)(t.code,{children:"UIView"})," or ",(0,a.jsx)(t.code,{children:"android.View"})," is updated."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"As you can see, no more JS thread and no more bridge which means faster animations! \ud83c\udf89\ud83c\udf89"}),"\n",(0,a.jsx)(t.h2,{id:"how-do-i-use-this-in-my-app",children:"How do I use this in my app?"}),"\n",(0,a.jsxs)(t.p,{children:["For normal animations the answer is simple, just add ",(0,a.jsx)(t.code,{children:"useNativeDriver: true"})," to the animation config when starting it."]}),"\n",(0,a.jsx)(t.p,{children:"Before:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Animated.timing(this.state.animatedValue, {\n  toValue: 1,\n  duration: 500,\n}).start();\n"})}),"\n",(0,a.jsx)(t.p,{children:"After:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Animated.timing(this.state.animatedValue, {\n  toValue: 1,\n  duration: 500,\n  useNativeDriver: true, // <-- Add this\n}).start();\n"})}),"\n",(0,a.jsx)(t.p,{children:"Animated values are only compatible with one driver so if you use native driver when starting an animation on a value, make sure every animation on that value also uses the native driver."}),"\n",(0,a.jsxs)(t.p,{children:["It also works with ",(0,a.jsx)(t.code,{children:"Animated.event"}),", this is very useful if you have an animation that must follow the scroll position because without the native driver it will always run a frame behind of the gesture because of the async nature of React Native."]}),"\n",(0,a.jsx)(t.p,{children:"Before:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"<ScrollView\n  scrollEventThrottle={16}\n  onScroll={Animated.event(\n    [{ nativeEvent: { contentOffset: { y: this.state.animatedValue } } }]\n  )}\n>\n  {content}\n</ScrollView>\n"})}),"\n",(0,a.jsx)(t.p,{children:"After:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"<Animated.ScrollView // <-- Use the Animated ScrollView wrapper\n  scrollEventThrottle={1} // <-- Use 1 here to make sure no events are ever missed\n  onScroll={Animated.event(\n    [{ nativeEvent: { contentOffset: { y: this.state.animatedValue } } }],\n    { useNativeDriver: true } // <-- Add this\n  )}\n>\n  {content}\n</Animated.ScrollView>\n"})}),"\n",(0,a.jsx)(t.h2,{id:"caveats",children:"Caveats"}),"\n",(0,a.jsxs)(t.p,{children:["Not everything you can do with Animated is currently supported in Native Animated. The main limitation is that you can only animate non-layout properties, things like ",(0,a.jsx)(t.code,{children:"transform"})," and ",(0,a.jsx)(t.code,{children:"opacity"})," will work but Flexbox and position properties won't. Another one is with ",(0,a.jsx)(t.code,{children:"Animated.event"}),", it will only work with direct events and not bubbling events. This means it does not work with ",(0,a.jsx)(t.code,{children:"PanResponder"})," but does work with things like ",(0,a.jsx)(t.code,{children:"ScrollView#onScroll"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Native Animated has also been part of React Native for quite a while but has never been documented because it was considered experimental. Because of that make sure you are using a recent version (0.40+) of React Native if you want to use this feature."}),"\n",(0,a.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(t.p,{children:["For more information about animated I recommend watching ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=xtqUJVqpKNo",children:"this talk"})," by ",(0,a.jsx)(t.a,{href:"https://twitter.com/Vjeux",children:"Christopher Chedeau"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If you want a deep dive into animations and how offloading them to native can improve user experience there is also ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=qgSMjYWqBk4",children:"this talk"})," by ",(0,a.jsx)(t.a,{href:"https://twitter.com/kzzzf",children:"Krzysztof Magiera"}),"."]})]})}const c=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},71426:(e,t,n)=>{var a=n(27378),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,r={},l=null,h=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)o.call(t,a)&&!d.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:i,type:e,key:l,ref:h,props:r,_owner:s.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},24246:(e,t,n)=>{e.exports=n(71426)},88267:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/animated-diagram-127161e299f43a8c0e677715d6be7881.png"},71670:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>r});var a=n(27378);const i=a.createContext({});function r(e){const t=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(i.Provider,{value:s},t)}}}]);