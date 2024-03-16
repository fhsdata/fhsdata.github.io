/*! For license information please see 68ed074c.8236fbcc.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[48393],{74555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>C,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(24246),s=t(71670);const a={id:"layoutanimation",title:"LayoutAnimation"},o=void 0,r={id:"layoutanimation",title:"LayoutAnimation",description:"Automatically animates views to their new positions when the next layout happens.",source:"@site/versioned_docs/version-0.72/layoutanimation.md",sourceDirName:".",slug:"/layoutanimation",permalink:"/docs/0.72/layoutanimation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/layoutanimation.md",tags:[],version:"0.72",lastUpdatedAt:1687362382,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{id:"layoutanimation",title:"LayoutAnimation"},sidebar:"api",previous:{title:"Keyboard",permalink:"/docs/0.72/keyboard"},next:{title:"Linking",permalink:"/docs/0.72/linking"}},d={},l=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>configureNext()</code>",id:"configurenext",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"<code>create()</code>",id:"create",level:3},{value:"Properties",id:"properties",level:2},{value:"Types",id:"types",level:3},{value:"Properties",id:"properties-1",level:3},{value:"Presets",id:"presets",level:3},{value:"<code>easeInEaseOut</code>",id:"easeineaseout",level:3},{value:"<code>linear</code>",id:"linear",level:3},{value:"<code>spring</code>",id:"spring",level:3}];function c(e){const n=Object.assign({p:"p",code:"code",strong:"strong",pre:"pre",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Automatically animates views to their new positions when the next layout happens."}),"\n",(0,i.jsxs)(n.p,{children:["A common way to use this API is to call it before updating the state hook in functional components and calling ",(0,i.jsx)(n.code,{children:"setState"})," in class components."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that in order to get this to work on ",(0,i.jsx)(n.strong,{children:"Android"})," you need to set the following flags via ",(0,i.jsx)(n.code,{children:"UIManager"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"if (Platform.OS === 'android') {\n  if (UIManager.setLayoutAnimationEnabledExperimental) {\n    UIManager.setLayoutAnimationEnabledExperimental(true);\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20LayoutAnimation%2C%5Cn%20%20Platform%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20TouchableOpacity%2C%5Cn%20%20UIManager%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20'android'%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bexpanded%2C%20setExpanded%5D%20%3D%20useState(false)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%5Cn%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20%20%20%20%20%20%20setExpanded(!expanded)%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EPress%20me%20to%20%7Bexpanded%20%3F%20'collapse'%20%3A%20'expand'%7D!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%7Bexpanded%20%26%26%20(%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyle.tile%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EI%20disappear%20sometimes!%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20style%20%3D%20StyleSheet.create(%7B%5Cn%20%20tile%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'lightgrey'%2C%5Cn%20%20%20%20borderWidth%3A%200.5%2C%5Cn%20%20%20%20borderColor%3A%20'%23d6d7da'%2C%5Cn%20%20%7D%2C%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20overflow%3A%20'hidden'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"configurenext",children:(0,i.jsx)(n.code,{children:"configureNext()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"static configureNext(\n  config: LayoutAnimationConfig,\n  onAnimationDidEnd?: () => void,\n  onAnimationDidFail?: () => void,\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Schedules an animation to happen on the next layout."}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"config"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"See config description below."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onAnimationDidEnd"}),(0,i.jsx)(n.td,{children:"function"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Called when the animation finished."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onAnimationDidFail"}),(0,i.jsx)(n.td,{children:"function"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Called when the animation failed."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"config"})," parameter is an object with the keys below. ",(0,i.jsx)(n.a,{href:"/docs/0.72/layoutanimation#create",children:(0,i.jsx)(n.code,{children:"create"})})," returns a valid object for ",(0,i.jsx)(n.code,{children:"config"}),", and the ",(0,i.jsx)(n.a,{href:"/docs/0.72/layoutanimation#presets",children:(0,i.jsx)(n.code,{children:"Presets"})})," objects can also all be passed as the ",(0,i.jsx)(n.code,{children:"config"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"duration"})," in milliseconds"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"create"}),", optional config for animating in new views"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"update"}),", optional config for animating views that have been updated"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"delete"}),", optional config for animating views as they are removed"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The config that's passed to ",(0,i.jsx)(n.code,{children:"create"}),", ",(0,i.jsx)(n.code,{children:"update"}),", or ",(0,i.jsx)(n.code,{children:"delete"})," has the following keys:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"}),", the ",(0,i.jsx)(n.a,{href:"/docs/0.72/layoutanimation#types",children:"animation type"})," to use"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"property"}),", the ",(0,i.jsx)(n.a,{href:"/docs/0.72/layoutanimation#properties",children:"layout property"})," to animate (optional, but recommended for ",(0,i.jsx)(n.code,{children:"create"})," and ",(0,i.jsx)(n.code,{children:"delete"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"springDamping"})," (number, optional and only for use with ",(0,i.jsx)(n.code,{children:"type: Type.spring"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"initialVelocity"})," (number, optional)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"delay"})," (number, optional)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"duration"})," (number, optional)"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"create",children:(0,i.jsx)(n.code,{children:"create()"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"static create(duration, type, creationProp)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Helper that creates an object (with ",(0,i.jsx)(n.code,{children:"create"}),", ",(0,i.jsx)(n.code,{children:"update"}),", and ",(0,i.jsx)(n.code,{children:"delete"})," fields) to pass into ",(0,i.jsx)(n.a,{href:"/docs/0.72/layoutanimation#configurenext",children:(0,i.jsx)(n.code,{children:"configureNext"})}),". The ",(0,i.jsx)(n.code,{children:"type"})," parameter is an ",(0,i.jsx)(n.a,{href:"/docs/0.72/layoutanimation#types",children:"animation type"}),", and the ",(0,i.jsx)(n.code,{children:"creationProp"})," parameter is a ",(0,i.jsx)(n.a,{href:"/docs/0.72/layoutanimation#properties",children:"layout property"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20'android'%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BboxPosition%2C%20setBoxPosition%5D%20%3D%20useState('left')%3B%5Cn%5Cn%20%20const%20toggleBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(%7B%5Cn%20%20%20%20%20%20duration%3A%20500%2C%5Cn%20%20%20%20%20%20create%3A%20%7Btype%3A%20'linear'%2C%20property%3A%20'opacity'%7D%2C%5Cn%20%20%20%20%20%20update%3A%20%7Btype%3A%20'spring'%2C%20springDamping%3A%200.4%7D%2C%5Cn%20%20%20%20%20%20delete%3A%20%7Btype%3A%20'linear'%2C%20property%3A%20'opacity'%7D%2C%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%20%20setBoxPosition(boxPosition%20%3D%3D%3D%20'left'%20%3F%20'right'%20%3A%20'left')%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Layout%5C%22%20onPress%3D%7BtoggleBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20boxPosition%20%3D%3D%3D%20'left'%20%3F%20null%20%3A%20styles.moveRight%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'flex-start'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20'blue'%2C%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20'flex-end'%2C%5Cn%20%20%20%20height%3A%20200%2C%5Cn%20%20%20%20width%3A%20200%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,i.jsxs)(n.p,{children:["An enumeration of animation types to be used in the ",(0,i.jsx)(n.a,{href:"/docs/0.72/layoutanimation#create",children:(0,i.jsx)(n.code,{children:"create"})})," method, or in the ",(0,i.jsx)(n.code,{children:"create"}),"/",(0,i.jsx)(n.code,{children:"update"}),"/",(0,i.jsx)(n.code,{children:"delete"})," configs for ",(0,i.jsx)(n.a,{href:"/docs/0.72/layoutanimation#configurenext",children:(0,i.jsx)(n.code,{children:"configureNext"})}),". (example usage: ",(0,i.jsx)(n.code,{children:"LayoutAnimation.Types.easeIn"}),")"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Types"})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"spring"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"linear"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"easeInEaseOut"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"easeIn"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"easeOut"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"keyboard"})})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"properties-1",children:"Properties"}),"\n",(0,i.jsxs)(n.p,{children:["An enumeration of layout properties to be animated to be used in the ",(0,i.jsx)(n.a,{href:"/docs/0.72/layoutanimation#create",children:(0,i.jsx)(n.code,{children:"create"})})," method, or in the ",(0,i.jsx)(n.code,{children:"create"}),"/",(0,i.jsx)(n.code,{children:"update"}),"/",(0,i.jsx)(n.code,{children:"delete"})," configs for ",(0,i.jsx)(n.a,{href:"/docs/0.72/layoutanimation#configurenext",children:(0,i.jsx)(n.code,{children:"configureNext"})}),". (example usage: ",(0,i.jsx)(n.code,{children:"LayoutAnimation.Properties.opacity"}),")"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Properties"})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"opacity"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"scaleX"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"scaleY"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"scaleXY"})})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"presets",children:"Presets"}),"\n",(0,i.jsxs)(n.p,{children:["A set of predefined animation configs to pass into ",(0,i.jsx)(n.a,{href:"/docs/0.72/layoutanimation#configurenext",children:(0,i.jsx)(n.code,{children:"configureNext"})}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Presets"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"easeInEaseOut"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"create(300, 'easeInEaseOut', 'opacity')"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"linear"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"create(500, 'linear', 'opacity')"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"spring"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"{duration: 700, create: {type: 'linear', property: 'opacity'}, update: {type: 'spring', springDamping: 0.4}, delete: {type: 'linear', property: 'opacity'} }"})})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"easeineaseout",children:(0,i.jsx)(n.code,{children:"easeInEaseOut"})}),"\n",(0,i.jsxs)(n.p,{children:["Calls ",(0,i.jsx)(n.code,{children:"configureNext()"})," with ",(0,i.jsx)(n.code,{children:"Presets.easeInEaseOut"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"linear",children:(0,i.jsx)(n.code,{children:"linear"})}),"\n",(0,i.jsxs)(n.p,{children:["Calls ",(0,i.jsx)(n.code,{children:"configureNext()"})," with ",(0,i.jsx)(n.code,{children:"Presets.linear"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"spring",children:(0,i.jsx)(n.code,{children:"spring"})}),"\n",(0,i.jsxs)(n.p,{children:["Calls ",(0,i.jsx)(n.code,{children:"configureNext()"})," with ",(0,i.jsx)(n.code,{children:"Presets.spring"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20'android'%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BfirstBoxPosition%2C%20setFirstBoxPosition%5D%20%3D%20useState('left')%3B%5Cn%20%20const%20%5BsecondBoxPosition%2C%20setSecondBoxPosition%5D%20%3D%20useState('left')%3B%5Cn%20%20const%20%5BthirdBoxPosition%2C%20setThirdBoxPosition%5D%20%3D%20useState('left')%3B%5Cn%5Cn%20%20const%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%5Cn%20%20%20%20setFirstBoxPosition(firstBoxPosition%20%3D%3D%3D%20'left'%20%3F%20'right'%20%3A%20'left')%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%5Cn%20%20%20%20setSecondBoxPosition(secondBoxPosition%20%3D%3D%3D%20'left'%20%3F%20'right'%20%3A%20'left')%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20setThirdBoxPosition(thirdBoxPosition%20%3D%3D%3D%20'left'%20%3F%20'right'%20%3A%20'left')%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22EaseInEaseOut%5C%22%20onPress%3D%7BtoggleFirstBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20firstBoxPosition%20%3D%3D%3D%20'left'%20%3F%20null%20%3A%20styles.moveRight%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Linear%5C%22%20onPress%3D%7BtoggleSecondBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20secondBoxPosition%20%3D%3D%3D%20'left'%20%3F%20null%20%3A%20styles.moveRight%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Spring%5C%22%20onPress%3D%7BtoggleThirdBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20thirdBoxPosition%20%3D%3D%3D%20'left'%20%3F%20null%20%3A%20styles.moveRight%2C%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'flex-start'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20'blue'%2C%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20'flex-end'%2C%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})]})}const C=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},71426:(e,n,t)=>{var i=t(27378),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,a={},l=null,c=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,i)&&!d.hasOwnProperty(i)&&(a[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===a[i]&&(a[i]=n[i]);return{$$typeof:s,type:e,key:l,ref:c,props:a,_owner:r.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>a});var i=t(27378);const s=i.createContext({});function a(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||o:a(e),i.createElement(s.Provider,{value:r},n)}}}]);