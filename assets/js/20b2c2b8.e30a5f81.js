/*! For license information please see 20b2c2b8.e30a5f81.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[30423],{83846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>C,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=t(24246),i=t(71670),r=t(48375),o=t(86386),s=t(11674);const l={id:"layoutanimation",title:"LayoutAnimation"},C=void 0,c={id:"layoutanimation",title:"LayoutAnimation",description:"Automatically animates views to their new positions when the next layout happens.",source:"@site/versioned_docs/version-0.70/layoutanimation.md",sourceDirName:".",slug:"/layoutanimation",permalink:"/docs/0.70/layoutanimation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/layoutanimation.md",tags:[],version:"0.70",lastUpdatedAt:1679052568,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"layoutanimation",title:"LayoutAnimation"},sidebar:"api",previous:{title:"Keyboard",permalink:"/docs/0.70/keyboard"},next:{title:"Linking",permalink:"/docs/0.70/linking"}},d={},u=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>configureNext()</code>",id:"configurenext",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"<code>create()</code>",id:"create",level:3},{value:"Properties",id:"properties",level:2},{value:"Types",id:"types",level:3},{value:"Properties",id:"properties-1",level:3},{value:"Presets",id:"presets",level:3},{value:"<code>easeInEaseOut</code>",id:"easeineaseout",level:3},{value:"<code>linear</code>",id:"linear",level:3},{value:"<code>spring</code>",id:"spring",level:3}];function h(e){const n=Object.assign({p:"p",code:"code",strong:"strong",pre:"pre",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Automatically animates views to their new positions when the next layout happens."}),"\n",(0,a.jsxs)(n.p,{children:["A common way to use this API is to call it before updating the state hook in functional components and calling ",(0,a.jsx)(n.code,{children:"setState"})," in class components."]}),"\n",(0,a.jsxs)(n.p,{children:["Note that in order to get this to work on ",(0,a.jsx)(n.strong,{children:"Android"})," you need to set the following flags via ",(0,a.jsx)(n.code,{children:"UIManager"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"if (Platform.OS === 'android') {\n  if (UIManager.setLayoutAnimationEnabledExperimental) {\n    UIManager.setLayoutAnimationEnabledExperimental(true);\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20LayoutAnimation%2C%20Platform%2C%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20UIManager%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bexpanded%2C%20setExpanded%5D%20%3D%20useState(false)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%5Cn%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20%20%20%20%20%20%20setExpanded(!expanded)%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EPress%20me%20to%20%7Bexpanded%20%3F%20%5C%22collapse%5C%22%20%3A%20%5C%22expand%5C%22%7D!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%7Bexpanded%20%26%26%20(%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyle.tile%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EI%20disappear%20sometimes!%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20style%20%3D%20StyleSheet.create(%7B%5Cn%20%20tile%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22lightgrey%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%200.5%2C%5Cn%20%20%20%20borderColor%3A%20%5C%22%23d6d7da%5C%22%5Cn%20%20%7D%2C%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20overflow%3A%20%5C%22hidden%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(n.h3,{id:"configurenext",children:(0,a.jsx)(n.code,{children:"configureNext()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static configureNext(config, onAnimationDidEnd?, onAnimationDidFail?)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Schedules an animation to happen on the next layout."}),"\n",(0,a.jsx)(n.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"config"}),(0,a.jsx)(n.td,{children:"object"}),(0,a.jsx)(n.td,{children:"Yes"}),(0,a.jsx)(n.td,{children:"See config description below."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"onAnimationDidEnd"}),(0,a.jsx)(n.td,{children:"function"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"Called when the animation finished."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"onAnimationDidFail"}),(0,a.jsx)(n.td,{children:"function"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"Called when the animation failed."})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"config"})," parameter is an object with the keys below. ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#create",children:(0,a.jsx)(n.code,{children:"create"})})," returns a valid object for ",(0,a.jsx)(n.code,{children:"config"}),", and the ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#presets",children:(0,a.jsx)(n.code,{children:"Presets"})})," objects can also all be passed as the ",(0,a.jsx)(n.code,{children:"config"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"duration"})," in milliseconds"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"create"}),", optional config for animating in new views"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"update"}),", optional config for animating views that have been updated"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"delete"}),", optional config for animating views as they are removed"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The config that's passed to ",(0,a.jsx)(n.code,{children:"create"}),", ",(0,a.jsx)(n.code,{children:"update"}),", or ",(0,a.jsx)(n.code,{children:"delete"})," has the following keys:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"type"}),", the ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#types",children:"animation type"})," to use"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"property"}),", the ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#properties",children:"layout property"})," to animate (optional, but recommended for ",(0,a.jsx)(n.code,{children:"create"})," and ",(0,a.jsx)(n.code,{children:"delete"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"springDamping"})," (number, optional and only for use with ",(0,a.jsx)(n.code,{children:"type: Type.spring"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"initialVelocity"})," (number, optional)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"delay"})," (number, optional)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"duration"})," (number, optional)"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"create",children:(0,a.jsx)(n.code,{children:"create()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static create(duration, type, creationProp)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Helper that creates an object (with ",(0,a.jsx)(n.code,{children:"create"}),", ",(0,a.jsx)(n.code,{children:"update"}),", and ",(0,a.jsx)(n.code,{children:"delete"})," fields) to pass into ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#configurenext",children:(0,a.jsx)(n.code,{children:"configureNext"})}),". The ",(0,a.jsx)(n.code,{children:"type"})," parameter is an ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#types",children:"animation type"}),", and the ",(0,a.jsx)(n.code,{children:"creationProp"})," parameter is a ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#properties",children:"layout property"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example:"})}),"\n",(0,a.jsxs)(r.Z,{groupId:"syntax",queryString:!0,defaultValue:s.Z.defaultSyntax,values:s.Z.syntax,children:[(0,a.jsx)(o.Z,{value:"functional",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BboxPosition%2C%20setBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%5Cn%20%20const%20toggleBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(%7B%5Cn%20%20%20%20%20%20duration%3A%20500%2C%5Cn%20%20%20%20%20%20create%3A%20%7B%20type%3A%20%5C%22linear%5C%22%2C%20property%3A%20%5C%22opacity%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20update%3A%20%7B%20type%3A%20%5C%22spring%5C%22%2C%20springDamping%3A%200.4%20%7D%2C%5Cn%20%20%20%20%20%20delete%3A%20%7B%20type%3A%20%5C%22linear%5C%22%2C%20property%3A%20%5C%22opacity%5C%22%20%7D%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%20%20setBoxPosition(boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Layout%5C%22%20onPress%3D%7BtoggleBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%2C%5Cn%20%20%20%20height%3A%20200%2C%5Cn%20%20%20%20width%3A%20200%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(o.Z,{value:"classical",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20boxPosition%3A%20%5C%22left%5C%22%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(%7B%5Cn%20%20%20%20%20%20duration%3A%20500%2C%5Cn%20%20%20%20%20%20create%3A%20%7B%20type%3A%20%5C%22linear%5C%22%2C%20property%3A%20%5C%22opacity%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20update%3A%20%7B%20type%3A%20%5C%22spring%5C%22%2C%20springDamping%3A%200.4%20%7D%2C%5Cn%20%20%20%20%20%20delete%3A%20%7B%20type%3A%20%5C%22linear%5C%22%2C%20property%3A%20%5C%22opacity%5C%22%20%7D%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20boxPosition%3A%20this.state.boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Layout%5C%22%20onPress%3D%7Bthis.toggleBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%2C%5Cn%20%20%20%20height%3A%20200%2C%5Cn%20%20%20%20width%3A%20200%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,a.jsxs)(n.p,{children:["An enumeration of animation types to be used in the ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#create",children:(0,a.jsx)(n.code,{children:"create"})})," method, or in the ",(0,a.jsx)(n.code,{children:"create"}),"/",(0,a.jsx)(n.code,{children:"update"}),"/",(0,a.jsx)(n.code,{children:"delete"})," configs for ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#configurenext",children:(0,a.jsx)(n.code,{children:"configureNext"})}),". (example usage: ",(0,a.jsx)(n.code,{children:"LayoutAnimation.Types.easeIn"}),")"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.th,{children:"Types"})})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"spring"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"linear"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"easeInEaseOut"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"easeIn"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"easeOut"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"keyboard"})})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"properties-1",children:"Properties"}),"\n",(0,a.jsxs)(n.p,{children:["An enumeration of layout properties to be animated to be used in the ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#create",children:(0,a.jsx)(n.code,{children:"create"})})," method, or in the ",(0,a.jsx)(n.code,{children:"create"}),"/",(0,a.jsx)(n.code,{children:"update"}),"/",(0,a.jsx)(n.code,{children:"delete"})," configs for ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#configurenext",children:(0,a.jsx)(n.code,{children:"configureNext"})}),". (example usage: ",(0,a.jsx)(n.code,{children:"LayoutAnimation.Properties.opacity"}),")"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.th,{children:"Properties"})})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"opacity"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"scaleX"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"scaleY"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"scaleXY"})})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"presets",children:"Presets"}),"\n",(0,a.jsxs)(n.p,{children:["A set of predefined animation configs to pass into ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#configurenext",children:(0,a.jsx)(n.code,{children:"configureNext"})}),"."]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Presets"}),(0,a.jsx)(n.th,{children:"Value"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"easeInEaseOut"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"create(300, 'easeInEaseOut', 'opacity')"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"linear"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"create(500, 'linear', 'opacity')"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"spring"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"{ duration: 700, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }"})})]})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"easeineaseout",children:(0,a.jsx)(n.code,{children:"easeInEaseOut"})}),"\n",(0,a.jsxs)(n.p,{children:["Calls ",(0,a.jsx)(n.code,{children:"configureNext()"})," with ",(0,a.jsx)(n.code,{children:"Presets.easeInEaseOut"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"linear",children:(0,a.jsx)(n.code,{children:"linear"})}),"\n",(0,a.jsxs)(n.p,{children:["Calls ",(0,a.jsx)(n.code,{children:"configureNext()"})," with ",(0,a.jsx)(n.code,{children:"Presets.linear"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"spring",children:(0,a.jsx)(n.code,{children:"spring"})}),"\n",(0,a.jsxs)(n.p,{children:["Calls ",(0,a.jsx)(n.code,{children:"configureNext()"})," with ",(0,a.jsx)(n.code,{children:"Presets.spring"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example:"})}),"\n",(0,a.jsxs)(r.Z,{groupId:"syntax",queryString:!0,defaultValue:s.Z.defaultSyntax,values:s.Z.syntax,children:[(0,a.jsx)(o.Z,{value:"functional",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BfirstBoxPosition%2C%20setFirstBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%20%20const%20%5BsecondBoxPosition%2C%20setSecondBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%20%20const%20%5BthirdBoxPosition%2C%20setThirdBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%5Cn%20%20const%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%5Cn%20%20%20%20setFirstBoxPosition(firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%5Cn%20%20%20%20setSecondBoxPosition(secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20setThirdBoxPosition(thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22EaseInEaseOut%5C%22%20onPress%3D%7BtoggleFirstBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Linear%5C%22%20onPress%3D%7BtoggleSecondBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Spring%5C%22%20onPress%3D%7BtoggleThirdBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(o.Z,{value:"classical",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20firstBoxPosition%3A%20%5C%22left%5C%22%2C%5Cn%20%20%20%20secondBoxPosition%3A%20%5C%22left%5C%22%2C%5Cn%20%20%20%20thirdBoxPosition%3A%20%5C%22left%5C%22%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20firstBoxPosition%3A%5Cn%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20secondBoxPosition%3A%5Cn%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20thirdBoxPosition%3A%5Cn%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22EaseInEaseOut%5C%22%20onPress%3D%7Bthis.toggleFirstBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Linear%5C%22%20onPress%3D%7Bthis.toggleSecondBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Spring%5C%22%20onPress%3D%7Bthis.toggleThirdBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},86386:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(27378),i=t(38944);const r={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(s)for(var t of s(n))C.call(n,t)&&c(e,t,n[t]);return e};function u({children:e,hidden:n,className:t}){return a.createElement("div",d({role:"tabpanel",className:(0,i.Z)(r.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>M});var a=t(27378),i=t(38944),r=t(12112),o=t(3620),s=t(69490),l=t(14953),C=t(27886),c=t(7106),d=Object.defineProperty,u=Object.defineProperties,h=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,y=(e,n)=>{for(var t in n||(n={}))x.call(n,t)&&m(e,t,n[t]);if(p)for(var t of p(n))f.call(n,t)&&m(e,t,n[t]);return e},D=(e,n)=>u(e,h(n));function g(e){var n,t;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function B(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return g(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}(t);return function(e){const n=(0,C.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function j({value:e,tabValues:n}){return n.some((n=>n.value===e))}function b({queryString:e=!1,groupId:n}){const t=(0,o.k6)(),i=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace(D(y({},t.location),{search:n.toString()}))}),[i,t])]}function A(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=B(e),[o,l]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!j({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[C,d]=b({queryString:t,groupId:i}),[u,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,i]=(0,c.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:i}),p=(()=>{const e=null!=C?C:u;return j({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{p&&l(p)}),[p]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!j({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,r]),tabValues:r}}var v=t(14185);const E={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var w=Object.defineProperty,k=Object.defineProperties,P=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,I=(e,n,t)=>n in e?w(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,L=(e,n)=>{for(var t in n||(n={}))O.call(n,t)&&I(e,t,n[t]);if(S)for(var t of S(n))V.call(n,t)&&I(e,t,n[t]);return e},F=(e,n)=>k(e,P(n));function T({className:e,block:n,selectedValue:t,selectValue:o,tabValues:s}){const l=[],{blockElementScrollPositionUntilNextRender:C}=(0,r.o5)(),c=e=>{const n=e.currentTarget,a=l.indexOf(n),i=s[a].value;i!==t&&(C(n),o(i))},d=e=>{var n,t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=null!=(n=l[t])?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;a=null!=(t=l[n])?t:l[l.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e)},s.map((({value:e,label:n,attributes:r})=>a.createElement("li",F(L({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>l.push(e),onKeyDown:d,onClick:c},r),{className:(0,i.Z)("tabs__item",E.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function N({lazy:e,children:n,selectedValue:t}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function R(e){const n=A(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",E.tabList)},a.createElement(T,L(L({},e),n)),a.createElement(N,L(L({},e),n)))}function M(e){const n=(0,v.Z)();return a.createElement(R,L({key:String(n)},e),g(e.children))}},11674:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(63445);const i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:i?"macos":r?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:i?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,t)=>{var a=t(27378),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function C(e,n,t){var a,r={},C=null,c=null;for(a in void 0!==t&&(C=""+t),void 0!==n.key&&(C=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,a)&&!l.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===r[a]&&(r[a]=n[a]);return{$$typeof:i,type:e,key:C,ref:c,props:r,_owner:s.current}}n.Fragment=r,n.jsx=C,n.jsxs=C},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>r});var a=t(27378);const i=a.createContext({});function r(e){const n=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||o:r(e),a.createElement(i.Provider,{value:s},n)}}}]);