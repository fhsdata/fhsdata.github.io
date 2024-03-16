/*! For license information please see d88eb93c.17f0e394.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[60410],{60123:(e,t,n)=>{n.d(t,{ZP:()=>a});var r=n(24246),s=n(71670);function i(e){const t=Object.assign({admonition:"admonition",p:"p",a:"a"},(0,s.ah)(),e.components);return(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["This document refers to the ",(0,r.jsx)(t.a,{href:"fabric-renderer",children:"New Architecture"}),", that is in active roll-out."]})})}const a=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},90691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>c});var r=n(24246),s=n(71670),i=n(60123);const a={id:"render-pipeline",title:"Render, Commit, and Mount"},o=void 0,h={id:"render-pipeline",title:"Render, Commit, and Mount",description:"The React Native renderer goes through a sequence of work to render React logic to a host platform. This sequence of work is called the render pipeline and occurs for initial renders and updates to the UI state. This document goes over the render pipeline and how it differs in those scenarios.",source:"@site/architecture/render-pipeline.md",sourceDirName:".",slug:"/render-pipeline",permalink:"/architecture/render-pipeline",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/architecture/render-pipeline.md",tags:[],version:"current",lastUpdatedAt:1693611323,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"render-pipeline",title:"Render, Commit, and Mount"},sidebar:"architecture",previous:{title:"Fabric",permalink:"/architecture/fabric-renderer"},next:{title:"Cross Platform Implementation",permalink:"/architecture/xplat-implementation"}},d={},c=[{value:"Initial Render",id:"initial-render",level:2},{value:"Phase 1. Render",id:"phase-1-render",level:3},{value:"Phase 2. Commit",id:"phase-2-commit",level:3},{value:"Phase 3. Mount",id:"phase-3-mount",level:3},{value:"React State Updates",id:"react-state-updates",level:2},{value:"Phase 1. Render",id:"phase-1-render-1",level:3},{value:"Phase 2. Commit",id:"phase-2-commit-1",level:3},{value:"Phase 3. Mount",id:"phase-3-mount-1",level:3},{value:"React Native Renderer State Updates",id:"react-native-renderer-state-updates",level:2},{value:"Phase 2. Commit",id:"phase-2-commit-2",level:3},{value:"Phase 3. Mount",id:"phase-3-mount-2",level:3}];function l(e){const t=Object.assign({p:"p",a:"a",ol:"ol",li:"li",strong:"strong",blockquote:"blockquote",img:"img",hr:"hr",h2:"h2",pre:"pre",code:"code",em:"em",h3:"h3",ul:"ul"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.ZP,{}),"\n",(0,r.jsxs)(t.p,{children:["The React Native renderer goes through a sequence of work to render React logic to a ",(0,r.jsx)(t.a,{href:"/architecture/glossary#host-platform",children:"host platform"}),". This sequence of work is called the render pipeline and occurs for initial renders and updates to the UI state. This document goes over the render pipeline and how it differs in those scenarios."]}),"\n",(0,r.jsx)(t.p,{children:"The render pipeline can be broken into three general phases:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Render:"})," React executes product logic which creates a ",(0,r.jsx)(t.a,{href:"/architecture/glossary#react-element-tree-and-react-element",children:"React Element Trees"})," in JavaScript. From this tree, the renderer creates a ",(0,r.jsx)(t.a,{href:"/architecture/glossary#react-shadow-tree-and-react-shadow-node",children:"React Shadow Tree"})," in C++."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Commit"}),": After a React Shadow Tree is fully created, the renderer triggers a commit. This ",(0,r.jsx)(t.strong,{children:"promotes"})," both the React Element Tree and the newly created React Shadow Tree as the \u201cnext tree\u201d to be mounted. This also schedules calculation of its layout information."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Mount:"})," The React Shadow Tree, now with the results of layout calculation, is transformed into a ",(0,r.jsx)(t.a,{href:"/architecture/glossary#host-view-tree-and-host-view",children:"Host View Tree"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["The phases of the render pipeline may occur on different threads. Refer to the ",(0,r.jsx)(t.a,{href:"threading-model",children:"Threading Model"})," doc for more detail."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"React Native renderer Data flow",src:n(50288).Z+"",width:"1316",height:"1286"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"initial-render",children:"Initial Render"}),"\n",(0,r.jsx)(t.p,{children:"Imagine you want to render the following:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"function MyComponent() {\n  return (\n    <View>\n      <Text>Hello, World</Text>\n    </View>\n  );\n}\n\n// <MyComponent />\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In the example above, ",(0,r.jsx)(t.code,{children:"<MyComponent />"})," is a ",(0,r.jsx)(t.a,{href:"/architecture/glossary#react-element-tree-and-react-element",children:"React Element"}),". React recursively reduces this ",(0,r.jsx)(t.em,{children:"React Element"})," to a terminal ",(0,r.jsx)(t.a,{href:"/architecture/glossary#react-host-components-or-host-components",children:"React Host Component"})," by invoking it (or its ",(0,r.jsx)(t.code,{children:"render"})," method if implemented with a JavaScript class) until every ",(0,r.jsx)(t.em,{children:"React Element"})," cannot be reduced any further. Now you have a ",(0,r.jsx)(t.em,{children:"React Element Tree"})," of ",(0,r.jsx)(t.a,{href:"/architecture/glossary#react-host-components-or-host-components",children:"React Host Components"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"phase-1-render",children:"Phase 1. Render"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Phase one: render",src:n(55795).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsxs)(t.p,{children:["During this process of element reduction, as each ",(0,r.jsx)(t.em,{children:"React Element"})," is invoked, the renderer also synchronously creates a ",(0,r.jsx)(t.a,{href:"/architecture/glossary#react-shadow-tree-and-react-shadow-node",children:"React Shadow Node"}),". This happens only for ",(0,r.jsx)(t.em,{children:"React Host Components"}),", not for ",(0,r.jsx)(t.a,{href:"/architecture/glossary#react-composite-components",children:"React Composite Components"}),". In the example above, the ",(0,r.jsx)(t.code,{children:"<View>"})," leads to the creation of a ",(0,r.jsx)(t.code,{children:"ViewShadowNode"})," object, and the\n",(0,r.jsx)(t.code,{children:"<Text>"})," leads to the creation of a ",(0,r.jsx)(t.code,{children:"TextShadowNode"})," object. Notably, there is never a ",(0,r.jsx)(t.em,{children:"React Shadow Node"})," that directly represents ",(0,r.jsx)(t.code,{children:"<MyComponent>"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Whenever React creates a parent-child relationship between two ",(0,r.jsx)(t.em,{children:"React Element Nodes"}),", the renderer creates the same relationship between the corresponding ",(0,r.jsx)(t.em,{children:"React Shadow Nodes"}),". This is how the ",(0,r.jsx)(t.em,{children:"React Shadow Tree"})," is assembled."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Additional Details"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The operations (creation of ",(0,r.jsx)(t.em,{children:"React Shadow Node"}),", creation of parent-child relationship between two ",(0,r.jsx)(t.em,{children:"React Shadow Nodes"}),") are synchronous and thread-safe operations that are executed from React (JavaScript) into the renderer (C++), usually on the JavaScript thread."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.em,{children:"React Element Tree"})," (and its constituent ",(0,r.jsx)(t.em,{children:"React Element Nodes"}),") do not exist indefinitely. It is a temporal representation materialized by \u201cfibers\u201d in React. Each \u201cfiber\u201d that represents a host component stores a C++ pointer to the ",(0,r.jsx)(t.em,{children:"React Shadow Node"}),", made possible by JSI. ",(0,r.jsx)(t.a,{href:"https://github.com/acdlite/react-fiber-architecture#what-is-a-fiber",children:"Learn more about \u201cfibers\u201d in this document."})]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.em,{children:"React Shadow Tree"})," is immutable. In order to update any ",(0,r.jsx)(t.em,{children:"React Shadow Node"}),", the renderer creates a new ",(0,r.jsx)(t.em,{children:"React Shadow Tree"}),". However, the renderer provides cloning operations to make state updates more performant (see ",(0,r.jsx)(t.a,{href:"render-pipeline#react-state-updates",children:"React State Updates"})," for more details)."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In the example above, the result of the render phase looks like this:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Step one",src:n(97311).Z+"",width:"2121",height:"1023"})}),"\n",(0,r.jsxs)(t.p,{children:["After the ",(0,r.jsx)(t.em,{children:"React Shadow Tree"})," is complete, the renderer triggers a commit of the ",(0,r.jsx)(t.em,{children:"React Element Tree"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"phase-2-commit",children:"Phase 2. Commit"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Phase two: commit",src:n(96678).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsxs)(t.p,{children:["The commit phase consists of two operations: ",(0,r.jsx)(t.em,{children:"Layout Calculation"})," and ",(0,r.jsx)(t.em,{children:"Tree Promotion"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Layout Calculation:"})," This operation calculates the position and size of each ",(0,r.jsx)(t.em,{children:"React Shadow Node"}),". In React Native, this involves invoking Yoga to calculate the layout of each ",(0,r.jsx)(t.em,{children:"React Shadow Node"}),". The actual calculation requires each ",(0,r.jsx)(t.em,{children:"React Shadow Node"}),"\u2019s styles which originate from a ",(0,r.jsx)(t.em,{children:"React Element"})," in JavaScript. It also requires the layout constraints of the root of the ",(0,r.jsx)(t.em,{children:"React Shadow Tree"}),", which determines the amount of available space that the resulting nodes can occupy."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Step two",src:n(42056).Z+"",width:"2117",height:"1026"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Tree Promotion (New Tree \u2192 Next Tree):"})," This operation promotes the new ",(0,r.jsx)(t.em,{children:"React Shadow Tree"})," as the \u201cnext tree\u201d to be mounted. This promotion indicates that the new ",(0,r.jsx)(t.em,{children:"React Shadow Tree"})," has all the information to be mounted and represents the latest state of the ",(0,r.jsx)(t.em,{children:"React Element Tree"}),". The \u201cnext tree\u201d mounts on the next \u201ctick\u201d of the UI Thread."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Additional Details"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"These operations are asynchronously executed on a background thread."}),"\n",(0,r.jsxs)(t.li,{children:["Majority of layout calculation executes entirely within C++. However, the layout calculation of some components depend on the ",(0,r.jsx)(t.em,{children:"host platform"})," (e.g. ",(0,r.jsx)(t.code,{children:"Text"}),", ",(0,r.jsx)(t.code,{children:"TextInput"}),", etc.). Size and position of text is specific to each ",(0,r.jsx)(t.em,{children:"host platform"})," and needs to be calculated on the ",(0,r.jsx)(t.em,{children:"host platform"})," layer. For this purpose, Yoga invokes a function defined in the ",(0,r.jsx)(t.em,{children:"host platform"})," to calculate the component\u2019s layout."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"phase-3-mount",children:"Phase 3. Mount"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Phase three: mount",src:n(35723).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsxs)(t.p,{children:["The mount phase transforms the ",(0,r.jsx)(t.em,{children:"React Shadow Tree"})," (which now contains data from layout calculation) into a ",(0,r.jsx)(t.em,{children:"Host"})," ",(0,r.jsx)(t.em,{children:"View Tree"})," with rendered pixels on the screen. As a reminder, the ",(0,r.jsx)(t.em,{children:"React Element Tree"})," looks like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"<View>\n  <Text>Hello, World</Text>\n</View>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["At a high level, React Native renderer creates a corresponding ",(0,r.jsx)(t.a,{href:"/architecture/glossary#host-view-tree-and-host-view",children:"Host View"})," for each ",(0,r.jsx)(t.em,{children:"React Shadow Node"})," and mounts it on screen. In the example above, the renderer creates an instance of ",(0,r.jsx)(t.code,{children:"android.view.ViewGroup"})," for the ",(0,r.jsx)(t.code,{children:"<View>"})," and ",(0,r.jsx)(t.code,{children:"android.widget.TextView"})," for ",(0,r.jsx)(t.code,{children:"<Text>"})," and populates it with \u201cHello World\u201d. Similarly for iOS a ",(0,r.jsx)(t.code,{children:"UIView"})," is created with and text is populated with a call to ",(0,r.jsx)(t.code,{children:"NSLayoutManager"}),". Each host view is then configured to use props from its React Shadow Node, and its size and position is configured using the calculated layout information."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Step two",src:n(298).Z+"",width:"2206",height:"1066"})}),"\n",(0,r.jsx)(t.p,{children:"In more detail, the mounting phase consists of these three steps:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Tree Diffing:"})," This step computes the diff between the \u201cpreviously rendered tree\u201d and the \u201cnext tree\u201d entirely in C++. The result is a list of atomic mutation operations to be performed on host views (e.g. ",(0,r.jsx)(t.code,{children:"createView"}),", ",(0,r.jsx)(t.code,{children:"updateView"}),", ",(0,r.jsx)(t.code,{children:"removeView"}),", ",(0,r.jsx)(t.code,{children:"deleteView"}),", etc). This step is also where the React Shadow Tree is flattened to avoid creating unnecessary host views. See ",(0,r.jsx)(t.a,{href:"view-flattening",children:"View Flattening"})," for details about this algorithm."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Tree Promotion (Next Tree \u2192 Rendered Tree)"}),": This step atomically promotes the \u201cnext tree\u201d to \u201cpreviously rendered tree\u201d so that the next mount phase computes a diff against the proper tree."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"View Mounting"}),": This step applies the atomic mutation operations onto corresponding host views. This step executes in the ",(0,r.jsx)(t.em,{children:"host platform"})," on UI thread."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Additional Details"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The operations are synchronously executed on UI thread. If the commit phase executes on background thread, the mounting phase is scheduled for the next \u201ctick\u201d of UI thread. On the other hand, if the commit phase executes on UI thread, mounting phase executes synchronously on the same thread."}),"\n",(0,r.jsxs)(t.li,{children:["Scheduling, implementation, and execution of the mounting phase heavily depends on the ",(0,r.jsx)(t.em,{children:"host platform"}),". For example, the renderer architecture of the mounting layer currently differs between Android and iOS."]}),"\n",(0,r.jsxs)(t.li,{children:["During the initial render, the \u201cpreviously rendered tree\u201d is empty. As such, the tree diffing step will result in a list of mutation operations that consists only of creating views, setting props, and adding views to each other. Tree diffing becomes more important for performance when processing ",(0,r.jsx)(t.a,{href:"#react-state-updates",children:"React State Updates"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["In current production tests, a ",(0,r.jsx)(t.em,{children:"React Shadow Tree"})," typically consists of about 600-1000 ",(0,r.jsx)(t.em,{children:"React Shadow Nodes"})," (before view flattening), the trees get reduced to ~200 nodes after view flattening. On iPad or desktop apps, this quantity may increase 10-fold."]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"react-state-updates",children:"React State Updates"}),"\n",(0,r.jsxs)(t.p,{children:["Let\u2019s explore each phase of the render pipeline when the state of a ",(0,r.jsx)(t.em,{children:"React Element Tree"})," is updated. Let\u2019s say, you\u2019ve rendered the following component in an initial render:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"function MyComponent() {\n  return (\n    <View>\n      <View\n        style={{backgroundColor: 'red', height: 20, width: 20}}\n      />\n      <View\n        style={{backgroundColor: 'blue', height: 20, width: 20}}\n      />\n    </View>\n  );\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Applying what was described in the ",(0,r.jsx)(t.a,{href:"#initial-render",children:"Initial Render"})," section, you would expect the following trees to be created:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Render pipeline 4",src:n(19675).Z+"",width:"2005",height:"838"})}),"\n",(0,r.jsxs)(t.p,{children:["Notice that ",(0,r.jsx)(t.strong,{children:"Node 3"})," maps to a host view with a ",(0,r.jsx)(t.strong,{children:"red background"}),", and ",(0,r.jsx)(t.strong,{children:"Node 4"})," maps to a host view with a ",(0,r.jsx)(t.strong,{children:"blue background"}),". Assume that as the result of a state update in JavaScript product logic, the background of the first nested ",(0,r.jsx)(t.code,{children:"<View>"})," changes from ",(0,r.jsx)(t.code,{children:"'red'"})," to ",(0,r.jsx)(t.code,{children:"'yellow'"}),". This is what the new ",(0,r.jsx)(t.em,{children:"React Element Tree"})," might look:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"<View>\n  <View\n    style={{backgroundColor: 'yellow', height: 20, width: 20}}\n  />\n  <View\n    style={{backgroundColor: 'blue', height: 20, width: 20}}\n  />\n</View>\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"How is this update processed by React Native?"})}),"\n",(0,r.jsxs)(t.p,{children:["When a state update occurs, the renderer needs to conceptually update the ",(0,r.jsx)(t.em,{children:"React Element Tree"})," in order to update the host views that are already mounted. But in order to preserve thread safety, both the ",(0,r.jsx)(t.em,{children:"React Element Tree"})," as well as the ",(0,r.jsx)(t.em,{children:"React Shadow Tree"})," must be immutable. This means that instead of mutating the current ",(0,r.jsx)(t.em,{children:"React Element Tree"})," and ",(0,r.jsx)(t.em,{children:"React Shadow Tree"}),", React must create a new copy of each tree which incorporates the new props, styles, and children."]}),"\n",(0,r.jsx)(t.p,{children:"Let\u2019s explore each phase of the render pipeline during a state update."}),"\n",(0,r.jsx)(t.h3,{id:"phase-1-render-1",children:"Phase 1. Render"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Phase one: render",src:n(55795).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsxs)(t.p,{children:["When React creates a new ",(0,r.jsx)(t.em,{children:"React Element Tree"})," that incorporates the new state, it must clone every ",(0,r.jsx)(t.em,{children:"React Element"})," and ",(0,r.jsx)(t.em,{children:"React Shadow Node"})," that is impacted by the change. After cloning, the new ",(0,r.jsx)(t.em,{children:"React Shadow Tree"})," is committed."]}),"\n",(0,r.jsxs)(t.p,{children:["React Native renderer leverages structural sharing to minimize the overhead of immutability. When a ",(0,r.jsx)(t.em,{children:"React Element"})," is cloned to include the new state, every ",(0,r.jsx)(t.em,{children:"React Element"})," that is on the path up to the root is cloned. ",(0,r.jsx)(t.strong,{children:"React will only clone a React Element if it requires an update to its props, style, or children."})," Any ",(0,r.jsx)(t.em,{children:"React Elements"})," that are unchanged by the state update are shared by the old and new trees."]}),"\n",(0,r.jsx)(t.p,{children:"In the above example, React creates the new tree using these operations:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["CloneNode(",(0,r.jsx)(t.strong,{children:"Node 3"}),", ",(0,r.jsx)(t.code,{children:"{backgroundColor: 'yellow'}"}),") \u2192 ",(0,r.jsx)(t.strong,{children:"Node 3'"})]}),"\n",(0,r.jsxs)(t.li,{children:["CloneNode(",(0,r.jsx)(t.strong,{children:"Node 2"}),") \u2192 ",(0,r.jsx)(t.strong,{children:"Node 2'"})]}),"\n",(0,r.jsxs)(t.li,{children:["AppendChild(",(0,r.jsx)(t.strong,{children:"Node 2'"}),", ",(0,r.jsx)(t.strong,{children:"Node 3'"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["AppendChild(",(0,r.jsx)(t.strong,{children:"Node 2'"}),", ",(0,r.jsx)(t.strong,{children:"Node 4"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["CloneNode(",(0,r.jsx)(t.strong,{children:"Node 1"}),") \u2192 ",(0,r.jsx)(t.strong,{children:"Node 1'"})]}),"\n",(0,r.jsxs)(t.li,{children:["AppendChild(",(0,r.jsx)(t.strong,{children:"Node 1'"}),", ",(0,r.jsx)(t.strong,{children:"Node 2'"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["After these operations, ",(0,r.jsx)(t.strong,{children:"Node 1'"})," represents the root of the new ",(0,r.jsx)(t.em,{children:"React Element Tree"}),". Let's assign ",(0,r.jsx)(t.strong,{children:"T"})," to the \u201cpreviously rendered tree\u201d and ",(0,r.jsx)(t.strong,{children:"T'"})," to the \u201cnew tree\u201d:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Render pipeline 5",src:n(81256).Z+"",width:"2040",height:"797"})}),"\n",(0,r.jsxs)(t.p,{children:["Notice how ",(0,r.jsx)(t.strong,{children:"T"})," and ",(0,r.jsx)(t.strong,{children:"T'"})," both share ",(0,r.jsx)(t.strong,{children:"Node 4"}),". Structural sharing improves performance and reduces memory usage."]}),"\n",(0,r.jsx)(t.h3,{id:"phase-2-commit-1",children:"Phase 2. Commit"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Phase two: commit",src:n(96678).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsxs)(t.p,{children:["After React creates the new ",(0,r.jsx)(t.em,{children:"React Element Tree"})," and ",(0,r.jsx)(t.em,{children:"React Shadow Tree"}),", it must commit them."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Layout Calculation:"})," Similar to Layout Calculation during ",(0,r.jsx)(t.a,{href:"#initial-render",children:"Initial Render"}),". One important difference is that layout calculation may cause shared ",(0,r.jsx)(t.em,{children:"React Shadow Nodes"})," to be cloned. This can happen because if the parent of a shared ",(0,r.jsx)(t.em,{children:"React Shadow Node"})," incurs a layout change, the layout of the shared ",(0,r.jsx)(t.em,{children:"React Shadow Node"})," may also change."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Tree Promotion (New Tree \u2192 Next Tree):"})," Similar to Tree Promotion during ",(0,r.jsx)(t.a,{href:"#initial-render",children:"Initial Render"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"phase-3-mount-1",children:"Phase 3. Mount"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Phase three: mount",src:n(35723).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Tree Promotion (Next Tree \u2192 Rendered Tree)"}),": This step atomically promotes the \u201cnext tree\u201d to \u201cpreviously rendered tree\u201d so that the next mount phase computes a diff against the proper tree."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Tree Diffing:"})," This step computes the diff between the \u201cpreviously rendered tree\u201d (",(0,r.jsx)(t.strong,{children:"T"}),") and the \u201cnext tree\u201d (",(0,r.jsx)(t.strong,{children:"T'"}),"). The result is a list of atomic mutation operations to be performed on ",(0,r.jsx)(t.em,{children:"host views"}),".","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["In the above example, the operations consist of: ",(0,r.jsx)(t.code,{children:"UpdateView(**Node 3'**, {backgroundColor: '\u201cyellow\u201c})"}),"\nDiff can be calculated for any currently mounted tree with any new tree. The renderer can skip some intermediate versions of the tree."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"View Mounting"}),": This step applies the atomic mutation operations onto corresponding ",(0,r.jsx)(t.em,{children:"host views"}),". In the above example, only the ",(0,r.jsx)(t.code,{children:"backgroundColor"})," of ",(0,r.jsx)(t.strong,{children:"View 3"})," will be updated (to yellow)."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Render pipeline 6",src:n(71080).Z+"",width:"2038",height:"798"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"react-native-renderer-state-updates",children:"React Native Renderer State Updates"}),"\n",(0,r.jsxs)(t.p,{children:["For most information in the ",(0,r.jsx)(t.em,{children:"Shadow Tree"}),", React is the single owner and single source of truth. All data originates from React and there is a single-direction flow of data."]}),"\n",(0,r.jsxs)(t.p,{children:["However, there is one exception and important mechanism: components in C++ can contain state that is not directly exposed to JavaScript, and JavaScript is not the source of truth. C++ and ",(0,r.jsx)(t.em,{children:"Host Platform"})," control this ",(0,r.jsx)(t.em,{children:"C++ State"}),". Generally, this is only relevant if you are developing a complicated ",(0,r.jsx)(t.em,{children:"Host Component"})," that needs ",(0,r.jsx)(t.em,{children:"C++ State"}),". The vast majority of ",(0,r.jsx)(t.em,{children:"Host Components"})," do not need this functionality."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, ",(0,r.jsx)(t.code,{children:"ScrollView"})," uses this mechanism to let the renderer know what\u2019s the current offset. The update is triggered from the ",(0,r.jsx)(t.em,{children:"host platform"}),", specifically from the host view that represents the ",(0,r.jsx)(t.code,{children:"ScrollView"})," component. The information about offset is used in an API like ",(0,r.jsx)(t.a,{href:"https://reactnative.dev/docs/direct-manipulation#measurecallback",children:"measure"}),". Since this update stems from the host platform, and does not affect the React Element Tree, this state data is held by ",(0,r.jsx)(t.em,{children:"C++ State"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Conceptually, ",(0,r.jsx)(t.em,{children:"C++ State"})," updates are similar to the ",(0,r.jsx)(t.a,{href:"render-pipeline#react-state-updates",children:"React State Updates"})," described above.\nWith two important differences:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"They skip the \u201crender phase\u201d since React is not involved."}),"\n",(0,r.jsx)(t.li,{children:"The updates can originate and happen on any thread, including the main thread."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"phase-2-commit-2",children:"Phase 2. Commit"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Phase two: commit",src:n(96678).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsxs)(t.p,{children:["When performing a ",(0,r.jsx)(t.em,{children:"C++ State"})," update, a block of code requests an update of a ",(0,r.jsx)(t.code,{children:"ShadowNode"})," (",(0,r.jsx)(t.strong,{children:"N"}),") to set ",(0,r.jsx)(t.em,{children:"C++ State"})," to value ",(0,r.jsx)(t.strong,{children:"S"}),". React Native renderer will repeatedly attempt to get the latest committed version of ",(0,r.jsx)(t.strong,{children:"N"}),", clone it with a new state ",(0,r.jsx)(t.strong,{children:"S"}),", and commit ",(0,r.jsx)(t.strong,{children:"N\u2019"})," to the tree. If React, or another ",(0,r.jsx)(t.em,{children:"C++ State"})," update, has performed another commit during this time, the ",(0,r.jsx)(t.em,{children:"C++ State"})," commit will fail and the renderer will retry the ",(0,r.jsx)(t.em,{children:"C++ State"})," update many times until a commit succeeds. This prevents source-of-truth collisions and races."]}),"\n",(0,r.jsx)(t.h3,{id:"phase-3-mount-2",children:"Phase 3. Mount"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Phase three: mount",src:n(35723).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"Mount Phase"})," is practically identical to the ",(0,r.jsx)(t.a,{href:"#react-state-updates",children:"Mount Phase of React State Updates"}),". The renderer still needs to recompute layout perform a tree diff, etc. See above sections for details."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},71426:(e,t,n)=>{var r=n(27378),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!h.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},24246:(e,t,n)=>{e.exports=n(71426)},50288:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/data-flow-17cc787288df187badd01e1ff17d2833.jpg"},55795:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/phase-one-render-cdd8336227468340a4c6b37d485e5bf8.png"},35723:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/phase-three-mount-3544340fff87101e0f7815560061fec7.png"},96678:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/phase-two-commit-bc6267e2319ae0ccfaa52663d36ad48f.png"},97311:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/render-pipeline-1-e5243e792e2cd1a55617acb26adbcf2b.png"},42056:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/render-pipeline-2-75ee0201996c04a64f009f1a67bf470a.png"},298:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/render-pipeline-3-1dc3249f58a1ecef0392b7faabaca37c.png"},19675:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/render-pipeline-4-0f4611cfae668670f72f2b4c89813714.png"},81256:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/render-pipeline-5-5c32c125c1752ce394bdb54da364addb.png"},71080:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/render-pipeline-6-dabe7cbda658efec9aeb1ad3be75b72c.png"},71670:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>i});var r=n(27378);const s=r.createContext({});function i(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(s.Provider,{value:o},t)}}}]);