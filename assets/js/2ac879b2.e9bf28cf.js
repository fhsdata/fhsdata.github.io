/*! For license information please see 2ac879b2.e9bf28cf.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[2971],{4871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=n(24246),r=n(71670);const a={id:"landing-page",title:"About the New Architecture"},s=void 0,o={id:"the-new-architecture/landing-page",title:"About the New Architecture",description:"If you are looking for the New Architecture guides, they have moved to the working group.",source:"@site/../docs/the-new-architecture/landing-page.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/landing-page",permalink:"/docs/next/the-new-architecture/landing-page",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/the-new-architecture/landing-page.md",tags:[],version:"current",lastUpdatedAt:1710007699,formattedLastUpdatedAt:"Mar 9, 2024",frontMatter:{id:"landing-page",title:"About the New Architecture"},sidebar:"docs",previous:{title:"Publishing to Apple App Store",permalink:"/docs/next/publishing-to-app-store"}},c={},h=[{value:"Why a New Architecture?",id:"why-a-new-architecture",level:2},{value:"Synchronous Layout and Effects",id:"synchronous-layout-and-effects",level:3},{value:"Support for Concurrent Renderer and Features",id:"support-for-concurrent-renderer-and-features",level:3},{value:"Fast JavaScript/Native Interfacing",id:"fast-javascriptnative-interfacing",level:3},{value:"Learn more",id:"learn-more",level:3},{value:"What can I expect from enabling the New Architecture?",id:"what-can-i-expect-from-enabling-the-new-architecture",level:2},{value:"Should I use the New Architecture today?",id:"should-i-use-the-new-architecture-today",level:2},{value:"Enable the New Architecture",id:"enable-the-new-architecture",level:3}];function d(e){const t=Object.assign({admonition:"admonition",p:"p",a:"a",em:"em",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["If you are looking for the New Architecture guides, they have moved to the ",(0,i.jsx)(t.a,{href:"https://github.com/reactwg/react-native-new-architecture#guides",children:"working group"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"Since 2018, the React Native team has been redesigning the core internals of React Native to enable developers to create higher-quality experiences. As of 2024, this version of React Native has been proven at scale and powers production apps by Meta."}),"\n",(0,i.jsxs)(t.p,{children:["The term ",(0,i.jsx)(t.em,{children:"New Architecture"})," refers to both the new framework architecture and the work to bring it to open source."]}),"\n",(0,i.jsxs)(t.p,{children:["The New Architecture has been available for experimental opt-in as of ",(0,i.jsx)(t.a,{href:"/blog/2022/03/30/version-068#opting-in-to-the-new-architecture",children:"React Native 0.68"})," with continued improvements in every subsequent release. The team is now working to make this the default experience for the React Native open source ecosystem."]}),"\n",(0,i.jsx)(t.h2,{id:"why-a-new-architecture",children:"Why a New Architecture?"}),"\n",(0,i.jsx)(t.p,{children:"After many years of building with React Native, the team identified a set of limitations that prevented developers from crafting certain experiences with a high polish. These limitations were fundamental to the existing design of the framework, so the New Architecture started as an investment in the future of React Native."}),"\n",(0,i.jsx)(t.p,{children:"The New Architecture unlocks capabilities and improvements that were impossible in the legacy architecture."}),"\n",(0,i.jsx)(t.h3,{id:"synchronous-layout-and-effects",children:"Synchronous Layout and Effects"}),"\n",(0,i.jsx)(t.p,{children:"Building adaptive UI experiences often requires measuring the size and position of your views and adjusting layout."}),"\n",(0,i.jsxs)(t.p,{children:["Today, you would use the ",(0,i.jsx)(t.a,{href:"/docs/view#onlayout",children:(0,i.jsx)(t.code,{children:"onLayout"})})," event to get the layout information of a view and make any adjustments. However, state updates within the ",(0,i.jsx)(t.code,{children:"onLayout"})," callback may apply after painting the previous render. This means that users may see intermediate states or visual jumps between rendering the initial layout and responding to layout measurements."]}),"\n",(0,i.jsx)(t.p,{children:"With the New Architecture, we can avoid this issue entirely with synchronous access to layout information and properly scheduled updates such that no intermediate state is visible to users."}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Example: Rendering a Tooltip"}),(0,i.jsx)(t.p,{children:"Measuring and placing a tooltip above a view allows us to showcase what synchronous rendering unlocks. The tooltip needs to know the position of its target view to determine where it should render."}),(0,i.jsxs)(t.p,{children:["In the current architecture, we use ",(0,i.jsx)(t.code,{children:"onLayout"})," to get the measurements of the view and then update the positioning of the tooltip based on where the view is."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'function ViewWithTooltip() {\n  // ...\n\n  // We get the layout information and pass to ToolTip to position itself\n  const onLayout = React.useCallback(event => {\n    targetRef.current?.measureInWindow((x, y, width, height) => {\n      // This state update is not guaranteed to run in the same commit\n      // This results in a visual "jump" as the ToolTip repositions itself\n      setTargetRect({x, y, width, height});\n    });\n  }, []);\n\n  return (\n    <>\n      <View ref={targetRef} onLayout={onLayout}>\n        <Text>Some content that renders a tooltip above</Text>\n      </View>\n      <Tooltip targetRect={targetRect} />\n    </>\n  );\n}\n'})}),(0,i.jsxs)(t.p,{children:["With the New Architecture, we can use ",(0,i.jsx)(t.a,{href:"https://react.dev/reference/react/useLayoutEffect",children:(0,i.jsx)(t.code,{children:"useLayoutEffect"})}),' to synchronously measure and apply layout updates in a single commit, avoiding the visual "jump".']}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"function ViewWithTooltip() {\n  // ...\n\n  useLayoutEffect(() => {\n    // The measurement and state update for `targetRect` happens in a single commit\n    // allowing ToolTip to position itself without intermediate paints\n    targetRef.current?.measureInWindow((x, y, width, height) => {\n      setTargetRect({x, y, width, height});\n    });\n  }, [setTargetRect]);\n\n  return (\n    <>\n      <View ref={targetRef}>\n        <Text>Some content that renders a tooltip above</Text>\n      </View>\n      <Tooltip targetRect={targetRect} />\n    </>\n  );\n}\n"})}),(0,i.jsxs)("div",{className:"TwoColumns TwoFigures",children:[(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/img/new-architecture/async-on-layout.gif",alt:"A view that is moving to the corners of the viewport and center with a tooltip rendered either above or below it. The tooltip is rendered after a short delay after the view moves"}),(0,i.jsxs)("figcaption",{children:["Asynchronous measurement and render of the ToolTip. ",(0,i.jsx)(t.a,{href:"https://gist.github.com/lunaleaps/eabd653d9864082ac1d3772dac217ab9",children:"See code"}),"."]})]}),(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/img/new-architecture/sync-use-layout-effect.gif",alt:"A view that is moving to the corners of the viewport and center with a tooltip rendered either above or below it. The view and tooltip move in unison."}),(0,i.jsxs)("figcaption",{children:["Synchronous measurement and render of the ToolTip. ",(0,i.jsx)(t.a,{href:"https://gist.github.com/lunaleaps/148756563999c83220887757f2e549a3",children:"See code"}),"."]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"support-for-concurrent-renderer-and-features",children:"Support for Concurrent Renderer and Features"}),"\n",(0,i.jsxs)(t.p,{children:["The New Architecture supports concurrent rendering and features that have shipped in ",(0,i.jsx)(t.a,{href:"https://react.dev/blog/2022/03/29/react-v18",children:"React 18"})," and beyond. You can now use features like Suspense for data-fetching, Transitions, and other new React APIs in your React Native code, further conforming codebases and concepts between web and native React development."]}),"\n",(0,i.jsx)(t.p,{children:"The concurrent renderer also brings out-of-the-box improvements like automatic batching, which reduces re-renders in React."}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Example: Automatic Batching"}),(0,i.jsx)(t.p,{children:"With the New Architecture, you'll get automatic batching with the React 18 renderer."}),(0,i.jsx)(t.p,{children:"In this example, a slider specifies how many tiles to render. Dragging the slider from 0 to 1000 will fire off a quick succession of state updates and re-renders."}),(0,i.jsxs)(t.p,{children:["In comparing the renderers for the ",(0,i.jsx)(t.a,{href:"https://gist.github.com/lunaleaps/79bb6f263404b12ba57db78e5f6f28b2",children:"same code"}),", you can visually notice the renderer provides a smoother UI, with less intermediate UI updates. State updates from native event handlers, like this native Slider component, are now batched."]}),(0,i.jsxs)("div",{className:"TwoColumns TwoFigures",children:[(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/img/new-architecture/legacy-renderer.gif",alt:"A video demonstrating an app rendering many views according to a slider input. The slider value is adjusted from 0 to 1000 and the UI slowly catches up to rendering 1000 views."}),(0,i.jsx)("figcaption",{children:"Rendering frequent state updates with legacy renderer."})]}),(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/img/new-architecture/react18-renderer.gif",alt:"A video demonstrating an app rendering many views according to a slider input. The slider value is adjusted from 0 to 1000 and the UI resolves to 1000 views faster than the previous example, without as many intermediate states."}),(0,i.jsx)("figcaption",{children:"Rendering frequent state updates with React 18 renderer."})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["New concurrent features, like ",(0,i.jsx)(t.a,{href:"https://react.dev/reference/react/useTransition",children:"Transitions"}),', give you the power to express the priority of UI updates. Marking an update as lower priority tells React it can "interrupt" rendering the update to handle higher priority updates to ensure a responsive user experience where it matters.']}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsxs)("summary",{children:["Example: Using ",(0,i.jsx)(t.code,{children:"startTransition"})]}),(0,i.jsx)(t.p,{children:"We can build on the previous example to showcase how transitions can interrupt in-progress rendering to handle a newer state update."}),(0,i.jsxs)(t.p,{children:["We wrap the tile number state update with ",(0,i.jsx)(t.code,{children:"startTransition"})," to indicate that rendering the tiles can be interrupted. ",(0,i.jsx)(t.code,{children:"startTransition"})," also provides a ",(0,i.jsx)(t.code,{children:"isPending"})," flag to tell us when the transition is complete."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"function TileSlider({value, onValueChange}) {\n  const [isPending, startTransition] = useTransition();\n\n  return (\n    <>\n      <View>\n        <Text>\n          Render {value} Tiles\n        </Text>\n        <ActivityIndicator animating={isPending} />\n      </View>\n      <Slider\n        value={1}\n        minimumValue={1}\n        maximumValue={1000}\n        step={1}\n        onValueChange={newValue => {\n          startTransition(() => {\n            onValueChange(newValue);\n          });\n        }}\n      />\n    </>\n  );\n}\n\nfunction ManyTiles() {\n  const [value, setValue] = useState(1);\n  const tiles = generateTileViews(value);\n  return (\n      <TileSlider onValueChange={setValue} value={value} />\n      <View>\n        {tiles}\n      </View>\n  )\n}\n"})}),(0,i.jsx)(t.p,{children:"You'll notice that with the frequent updates in a transition, React renders fewer intermediate states because it bails out of rendering the state as soon as it becomes stale. In comparison, without transitions, more intermediate states are rendered. Both examples still use automatic batching. Still, transitions give even more power to developers to batch in-progress renders."}),(0,i.jsxs)("div",{className:"TwoColumns TwoFigures",children:[(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/img/new-architecture/with-transitions.gif",alt:"A video demonstrating an app rendering many views (tiles) according to a slider input. The views are rendered in batches as the slider is quickly adjusted from 0 to 1000. There are less batch renders in comparison to the next video."}),(0,i.jsxs)("figcaption",{children:["Rendering tiles with transitions to interrupt in-progress renders of stale state. ",(0,i.jsx)(t.a,{href:"https://gist.github.com/lunaleaps/eac391bf3fe4c85953cefeb74031bab0/revisions",children:"See code"}),"."]})]}),(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/img/new-architecture/without-transitions.gif",alt:"A video demonstrating an app rendering many views (tiles) according to a slider input. The views are rendered in batches as the slider is quickly adjusted from 0 to 1000."}),(0,i.jsxs)("figcaption",{children:["Rendering tiles without marking it as a transition. ",(0,i.jsx)(t.a,{href:"https://gist.github.com/lunaleaps/eac391bf3fe4c85953cefeb74031bab0/revisions",children:"See code"}),"."]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"fast-javascriptnative-interfacing",children:"Fast JavaScript/Native Interfacing"}),"\n",(0,i.jsxs)(t.p,{children:["The New Architecture removes the ",(0,i.jsx)(t.a,{href:"https://reactnative.dev/blog/2018/06/14/state-of-react-native-2018#architecture",children:"asynchronous bridge"})," between JavaScript and native and replaces it with JavaScript Interface (JSI). JSI is an interface that allows JavaScript to hold a reference to a C++ object and vice-versa. With a memory reference, you can directly invoke methods without serialization costs."]}),"\n",(0,i.jsxs)(t.p,{children:["JSI enables ",(0,i.jsx)(t.a,{href:"https://github.com/mrousavy/react-native-vision-camera",children:"VisionCamera"}),", a popular camera library for React Native, to process frames in real time. Typical frame buffers are 10 MB, which amounts to roughly 1 GB of data per second, depending on the frame rate. In comparison with the serialization costs of the bridge, JSI handles that amount of interfacing data with ease. JSI can expose other complex instance-based types such as databases, images, audio samples, etc."]}),"\n",(0,i.jsxs)(t.p,{children:["JSI adoption in the New Architecture removes this class of serialization work from all native-JavaScript interop. This includes initializing and re-rendering native core components like ",(0,i.jsx)(t.code,{children:"View"})," and ",(0,i.jsx)(t.code,{children:"Text"}),". You can read more about our ",(0,i.jsx)(t.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/123",children:"investigation in rendering performance"})," in the New Architecture and the improved benchmarks we measured."]}),"\n",(0,i.jsx)(t.h3,{id:"learn-more",children:"Learn more"}),"\n",(0,i.jsxs)(t.p,{children:["To achieve this, the New Architecture had to refactor multiple parts of the React Native infrastructure. To learn more about the refactor and other benefits it brings, check out the ",(0,i.jsx)(t.a,{href:"https://github.com/reactwg/react-native-new-architecture",children:"documentation"})," in the New Architecture working group."]}),"\n",(0,i.jsx)(t.h2,{id:"what-can-i-expect-from-enabling-the-new-architecture",children:"What can I expect from enabling the New Architecture?"}),"\n",(0,i.jsx)(t.p,{children:"While the New Architecture enables these features and improvements, enabling the New Architecture for your app or library may not immediately improve the performance or user experience."}),"\n",(0,i.jsx)(t.p,{children:"For example, your code may need refactoring to leverage new capabilities like synchronous layout effects or concurrent features. Although JSI will minimize the overhead between JavaScript and native memory, data serialization may not have been a bottleneck for your app's performance."}),"\n",(0,i.jsx)(t.p,{children:"Enabling the New Architecture in your app or library is opting into the future of React Native."}),"\n",(0,i.jsx)(t.p,{children:"The team is actively researching and developing new capabilities the New Architecture unlocks. For example, web alignment is an active area of exploration at Meta that will ship to the React Native open source ecosystem."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0744-well-defined-event-loop.md",children:"Updates to the event loop model"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0607-dom-traversal-and-layout-apis.md",children:"Node and layout APIs"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/facebook/yoga/releases/tag/v2.0.0",children:"Styling and layout conformance"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You can follow along and contribute in our dedicated ",(0,i.jsx)(t.a,{href:"https://github.com/react-native-community/discussions-and-proposals/discussions/651",children:"discussions & proposals"})," repository."]}),"\n",(0,i.jsx)(t.h2,{id:"should-i-use-the-new-architecture-today",children:"Should I use the New Architecture today?"}),"\n",(0,i.jsx)(t.p,{children:"Today, the New Architecture is considered experimental and we continue to refine backwards compatibility for a better adoption experience."}),"\n",(0,i.jsx)(t.p,{children:"The team plans to enable the New Architecture by default in an upcoming React Native release by the end of 2024."}),"\n",(0,i.jsx)(t.p,{children:"Our guidance is as follows"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["For most production apps, we do ",(0,i.jsx)(t.em,{children:"not"})," recommend enabling the New Architecture today. Waiting for the official release will offer the best experience."]}),"\n",(0,i.jsxs)(t.li,{children:["If you maintain a React Native library, we recommend enabling it and verifying your use cases are covered. You can find the ",(0,i.jsx)(t.a,{href:"https://github.com/reactwg/react-native-new-architecture#guides",children:"instructions here"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"enable-the-new-architecture",children:"Enable the New Architecture"}),"\n",(0,i.jsxs)(t.p,{children:["If you are interested in dogfooding the New Architecture experience, you can find ",(0,i.jsx)(t.a,{href:"https://github.com/reactwg/react-native-new-architecture/blob/main/docs/enable-apps.md",children:"instructions"})," in our dedicated working group. The ",(0,i.jsx)(t.a,{href:"https://github.com/reactwg/react-native-new-architecture",children:"New Architecture working group"})," is a dedicated space for support and coordination for New Architecture adoption and where the team posts regular updates."]})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},71426:(e,t,n)=>{var i=n(27378),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var i,a={},h=null,d=null;for(i in void 0!==n&&(h=""+n),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,i)&&!c.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:r,type:e,key:h,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=h,t.jsxs=h},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>a});var i=n(27378);const r=i.createContext({});function a(e){const t=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||s:a(e),i.createElement(r.Provider,{value:o},t)}}}]);