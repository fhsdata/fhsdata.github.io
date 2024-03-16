/*! For license information please see dae67a8a.3459c918.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[83817],{13533:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>C});var t=i(24246),a=i(71670),s=i(48375),r=i(86386),l=i(11674);const c={id:"easing",title:"Easing"},o=void 0,d={id:"easing",title:"Easing",description:"The Easing module implements common easing functions. This module is used by Animated.timing() to convey physically believable motion in animations.",source:"@site/versioned_docs/version-0.72/easing.md",sourceDirName:".",slug:"/easing",permalink:"/docs/0.72/easing",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/easing.md",tags:[],version:"0.72",lastUpdatedAt:1687362382,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{id:"easing",title:"Easing"},sidebar:"api",previous:{title:"Dimensions",permalink:"/docs/0.72/dimensions"},next:{title:"InteractionManager",permalink:"/docs/0.72/interactionmanager"}},u={},C=[{value:"Predefined animations",id:"predefined-animations",level:3},{value:"Standard functions",id:"standard-functions",level:3},{value:"Additional functions",id:"additional-functions",level:3},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>step0()</code>",id:"step0",level:3},{value:"<code>step1()</code>",id:"step1",level:3},{value:"<code>linear()</code>",id:"linear",level:3},{value:"<code>ease()</code>",id:"ease",level:3},{value:"<code>quad()</code>",id:"quad",level:3},{value:"<code>cubic()</code>",id:"cubic",level:3},{value:"<code>poly()</code>",id:"poly",level:3},{value:"<code>sin()</code>",id:"sin",level:3},{value:"<code>circle()</code>",id:"circle",level:3},{value:"<code>exp()</code>",id:"exp",level:3},{value:"<code>elastic()</code>",id:"elastic",level:3},{value:"<code>back()</code>",id:"back",level:3},{value:"<code>bounce()</code>",id:"bounce",level:3},{value:"<code>bezier()</code>",id:"bezier",level:3},{value:"<code>in()</code>",id:"in",level:3},{value:"<code>out()</code>",id:"out",level:3},{value:"<code>inOut()</code>",id:"inout",level:3}];function h(e){const n=Object.assign({p:"p",code:"code",a:"a",h3:"h3",ul:"ul",li:"li",h2:"h2",div:"div",hr:"hr",h1:"h1",pre:"pre"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Easing"})," module implements common easing functions. This module is used by ",(0,t.jsx)(n.a,{href:"/docs/0.72/animated#timing",children:(0,t.jsx)(n.code,{children:"Animated.timing()"})})," to convey physically believable motion in animations."]}),"\n",(0,t.jsxs)(n.p,{children:["You can find a visualization of some common easing functions at ",(0,t.jsx)(n.a,{href:"http://easings.net/",children:"http://easings.net/"})]}),"\n",(0,t.jsx)(n.h3,{id:"predefined-animations",children:"Predefined animations"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Easing"})," module provides several predefined animations through the following methods:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/0.72/easing#back",children:(0,t.jsx)(n.code,{children:"back"})})," provides a basic animation where the object goes slightly back before moving forward"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/0.72/easing#bounce",children:(0,t.jsx)(n.code,{children:"bounce"})})," provides a bouncing animation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/0.72/easing#ease",children:(0,t.jsx)(n.code,{children:"ease"})})," provides a basic inertial animation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/0.72/easing#elastic",children:(0,t.jsx)(n.code,{children:"elastic"})})," provides a basic spring interaction"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"standard-functions",children:"Standard functions"}),"\n",(0,t.jsx)(n.p,{children:"Three standard easing functions are provided:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/0.72/easing#linear",children:(0,t.jsx)(n.code,{children:"linear"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/0.72/easing#quad",children:(0,t.jsx)(n.code,{children:"quad"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/0.72/easing#cubic",children:(0,t.jsx)(n.code,{children:"cubic"})})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/0.72/easing#poly",children:(0,t.jsx)(n.code,{children:"poly"})})," function can be used to implement quartic, quintic, and other higher power functions."]}),"\n",(0,t.jsx)(n.h3,{id:"additional-functions",children:"Additional functions"}),"\n",(0,t.jsx)(n.p,{children:"Additional mathematical functions are provided by the following methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/0.72/easing#bezier",children:(0,t.jsx)(n.code,{children:"bezier"})})," provides a cubic bezier curve"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/0.72/easing#circle",children:(0,t.jsx)(n.code,{children:"circle"})})," provides a circular function"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/0.72/easing#sin",children:(0,t.jsx)(n.code,{children:"sin"})})," provides a sinusoidal function"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/0.72/easing#exp",children:(0,t.jsx)(n.code,{children:"exp"})})," provides an exponential function"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following helpers are used to modify other easing functions."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/0.72/easing#in",children:(0,t.jsx)(n.code,{children:"in"})})," runs an easing function forwards"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/0.72/easing#inout",children:(0,t.jsx)(n.code,{children:"inOut"})})," makes any easing function symmetrical"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/0.72/easing#out",children:(0,t.jsx)(n.code,{children:"out"})})," runs an easing function backwards"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(s.Z,{groupId:"language",queryString:!0,defaultValue:l.Z.defaultSnackLanguage,values:l.Z.snackLanguages,children:[(0,t.jsx)(r.Z,{value:"javascript",children:(0,t.jsx)(n.div,{class:"snack-player","data-snack-name":"Easing Demo","data-snack-description":"Example usage","data-snack-files":"%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Animated%2C%5Cn%20%20Easing%2C%5Cn%20%20SectionList%2C%5Cn%20%20StatusBar%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20TouchableOpacity%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20let%20opacity%20%3D%20new%20Animated.Value(0)%3B%5Cn%5Cn%20%20const%20animate%20%3D%20easing%20%3D%3E%20%7B%5Cn%20%20%20%20opacity.setValue(0)%3B%5Cn%20%20%20%20Animated.timing(opacity%2C%20%7B%5Cn%20%20%20%20%20%20toValue%3A%201%2C%5Cn%20%20%20%20%20%20duration%3A%201200%2C%5Cn%20%20%20%20%20%20easing%2C%5Cn%20%20%20%20%20%20useNativeDriver%3A%20true%2C%5Cn%20%20%20%20%7D).start()%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20size%20%3D%20opacity.interpolate(%7B%5Cn%20%20%20%20inputRange%3A%20%5B0%2C%201%5D%2C%5Cn%20%20%20%20outputRange%3A%20%5B0%2C%2080%5D%2C%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20const%20animatedStyles%20%3D%20%5B%5Cn%20%20%20%20styles.box%2C%5Cn%20%20%20%20%7B%5Cn%20%20%20%20%20%20opacity%2C%5Cn%20%20%20%20%20%20width%3A%20size%2C%5Cn%20%20%20%20%20%20height%3A%20size%2C%5Cn%20%20%20%20%7D%2C%5Cn%20%20%5D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CStatusBar%20hidden%3D%7Btrue%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3EPress%20rows%20below%20to%20preview%20the%20Easing!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.boxContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CAnimated.View%20style%3D%7BanimatedStyles%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CSectionList%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyles.list%7D%5Cn%20%20%20%20%20%20%20%20sections%3D%7BSECTIONS%7D%5Cn%20%20%20%20%20%20%20%20keyExtractor%3D%7Bitem%20%3D%3E%20item.title%7D%5Cn%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20animate(item.easing)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.listRow%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bitem.title%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%20%20renderSectionHeader%3D%7B(%7Bsection%3A%20%7Btitle%7D%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.listHeader%7D%3E%7Btitle%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20SECTIONS%20%3D%20%5B%5Cn%20%20%7B%5Cn%20%20%20%20title%3A%20'Predefined%20animations'%2C%5Cn%20%20%20%20data%3A%20%5B%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Bounce'%2C%20easing%3A%20Easing.bounce%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Ease'%2C%20easing%3A%20Easing.ease%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Elastic'%2C%20easing%3A%20Easing.elastic(4)%7D%2C%5Cn%20%20%20%20%5D%2C%5Cn%20%20%7D%2C%5Cn%20%20%7B%5Cn%20%20%20%20title%3A%20'Standard%20functions'%2C%5Cn%20%20%20%20data%3A%20%5B%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Linear'%2C%20easing%3A%20Easing.linear%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Quad'%2C%20easing%3A%20Easing.quad%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Cubic'%2C%20easing%3A%20Easing.cubic%7D%2C%5Cn%20%20%20%20%5D%2C%5Cn%20%20%7D%2C%5Cn%20%20%7B%5Cn%20%20%20%20title%3A%20'Additional%20functions'%2C%5Cn%20%20%20%20data%3A%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20'Bezier'%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.bezier(0%2C%202%2C%201%2C%20-1)%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Circle'%2C%20easing%3A%20Easing.circle%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Sin'%2C%20easing%3A%20Easing.sin%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Exp'%2C%20easing%3A%20Easing.exp%7D%2C%5Cn%20%20%20%20%5D%2C%5Cn%20%20%7D%2C%5Cn%20%20%7B%5Cn%20%20%20%20title%3A%20'Combinations'%2C%5Cn%20%20%20%20data%3A%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20'In%20%2B%20Bounce'%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.in(Easing.bounce)%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20'Out%20%2B%20Exp'%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.out(Easing.exp)%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20'InOut%20%2B%20Elastic'%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.inOut(Easing.elastic(1))%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%5D%2C%5Cn%20%20%7D%2C%5Cn%5D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20backgroundColor%3A%20'%2320232a'%2C%5Cn%20%20%7D%2C%5Cn%20%20title%3A%20%7B%5Cn%20%20%20%20marginTop%3A%2010%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%20%20color%3A%20'%2361dafb'%2C%5Cn%20%20%7D%2C%5Cn%20%20boxContainer%3A%20%7B%5Cn%20%20%20%20height%3A%20160%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20marginTop%3A%2032%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20'%2361dafb'%2C%5Cn%20%20%7D%2C%5Cn%20%20list%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'%23fff'%2C%5Cn%20%20%7D%2C%5Cn%20%20listHeader%3A%20%7B%5Cn%20%20%20%20paddingHorizontal%3A%208%2C%5Cn%20%20%20%20paddingVertical%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23f4f4f4'%2C%5Cn%20%20%20%20color%3A%20'%23999'%2C%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20textTransform%3A%20'uppercase'%2C%5Cn%20%20%7D%2C%5Cn%20%20listRow%3A%20%7B%5Cn%20%20%20%20padding%3A%208%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,t.jsx)(r.Z,{value:"typescript",children:(0,t.jsx)(n.div,{class:"snack-player","data-snack-name":"Easing Demo","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Animated%2C%5Cn%20%20Easing%2C%5Cn%20%20SectionList%2C%5Cn%20%20StatusBar%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20TouchableOpacity%2C%5Cn%20%20View%2C%5Cn%7D%20from%20'react-native'%3B%5Cnimport%20type%20%7BEasingFunction%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20let%20opacity%20%3D%20new%20Animated.Value(0)%3B%5Cn%5Cn%20%20const%20animate%20%3D%20(easing%3A%20EasingFunction)%20%3D%3E%20%7B%5Cn%20%20%20%20opacity.setValue(0)%3B%5Cn%20%20%20%20Animated.timing(opacity%2C%20%7B%5Cn%20%20%20%20%20%20toValue%3A%201%2C%5Cn%20%20%20%20%20%20duration%3A%201200%2C%5Cn%20%20%20%20%20%20easing%2C%5Cn%20%20%20%20%20%20useNativeDriver%3A%20true%2C%5Cn%20%20%20%20%7D).start()%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20size%20%3D%20opacity.interpolate(%7B%5Cn%20%20%20%20inputRange%3A%20%5B0%2C%201%5D%2C%5Cn%20%20%20%20outputRange%3A%20%5B0%2C%2080%5D%2C%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20const%20animatedStyles%20%3D%20%5B%5Cn%20%20%20%20styles.box%2C%5Cn%20%20%20%20%7B%5Cn%20%20%20%20%20%20opacity%2C%5Cn%20%20%20%20%20%20width%3A%20size%2C%5Cn%20%20%20%20%20%20height%3A%20size%2C%5Cn%20%20%20%20%7D%2C%5Cn%20%20%5D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CStatusBar%20hidden%3D%7Btrue%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3EPress%20rows%20below%20to%20preview%20the%20Easing!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.boxContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CAnimated.View%20style%3D%7BanimatedStyles%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CSectionList%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyles.list%7D%5Cn%20%20%20%20%20%20%20%20sections%3D%7BSECTIONS%7D%5Cn%20%20%20%20%20%20%20%20keyExtractor%3D%7Bitem%20%3D%3E%20item.title%7D%5Cn%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20animate(item.easing)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.listRow%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bitem.title%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%20%20renderSectionHeader%3D%7B(%7Bsection%3A%20%7Btitle%7D%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.listHeader%7D%3E%7Btitle%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20SECTIONS%20%3D%20%5B%5Cn%20%20%7B%5Cn%20%20%20%20title%3A%20'Predefined%20animations'%2C%5Cn%20%20%20%20data%3A%20%5B%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Bounce'%2C%20easing%3A%20Easing.bounce%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Ease'%2C%20easing%3A%20Easing.ease%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Elastic'%2C%20easing%3A%20Easing.elastic(4)%7D%2C%5Cn%20%20%20%20%5D%2C%5Cn%20%20%7D%2C%5Cn%20%20%7B%5Cn%20%20%20%20title%3A%20'Standard%20functions'%2C%5Cn%20%20%20%20data%3A%20%5B%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Linear'%2C%20easing%3A%20Easing.linear%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Quad'%2C%20easing%3A%20Easing.quad%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Cubic'%2C%20easing%3A%20Easing.cubic%7D%2C%5Cn%20%20%20%20%5D%2C%5Cn%20%20%7D%2C%5Cn%20%20%7B%5Cn%20%20%20%20title%3A%20'Additional%20functions'%2C%5Cn%20%20%20%20data%3A%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20'Bezier'%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.bezier(0%2C%202%2C%201%2C%20-1)%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Circle'%2C%20easing%3A%20Easing.circle%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Sin'%2C%20easing%3A%20Easing.sin%7D%2C%5Cn%20%20%20%20%20%20%7Btitle%3A%20'Exp'%2C%20easing%3A%20Easing.exp%7D%2C%5Cn%20%20%20%20%5D%2C%5Cn%20%20%7D%2C%5Cn%20%20%7B%5Cn%20%20%20%20title%3A%20'Combinations'%2C%5Cn%20%20%20%20data%3A%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20'In%20%2B%20Bounce'%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.in(Easing.bounce)%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20'Out%20%2B%20Exp'%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.out(Easing.exp)%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20title%3A%20'InOut%20%2B%20Elastic'%2C%5Cn%20%20%20%20%20%20%20%20easing%3A%20Easing.inOut(Easing.elastic(1))%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%5D%2C%5Cn%20%20%7D%2C%5Cn%5D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20backgroundColor%3A%20'%2320232a'%2C%5Cn%20%20%7D%2C%5Cn%20%20title%3A%20%7B%5Cn%20%20%20%20marginTop%3A%2010%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%20%20color%3A%20'%2361dafb'%2C%5Cn%20%20%7D%2C%5Cn%20%20boxContainer%3A%20%7B%5Cn%20%20%20%20height%3A%20160%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20marginTop%3A%2032%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20'%2361dafb'%2C%5Cn%20%20%7D%2C%5Cn%20%20list%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20'%23fff'%2C%5Cn%20%20%7D%2C%5Cn%20%20listHeader%3A%20%7B%5Cn%20%20%20%20paddingHorizontal%3A%208%2C%5Cn%20%20%20%20paddingVertical%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23f4f4f4'%2C%5Cn%20%20%20%20color%3A%20'%23999'%2C%5Cn%20%20%20%20fontSize%3A%2012%2C%5Cn%20%20%20%20textTransform%3A%20'uppercase'%2C%5Cn%20%20%7D%2C%5Cn%20%20listRow%3A%20%7B%5Cn%20%20%20%20padding%3A%208%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"step0",children:(0,t.jsx)(n.code,{children:"step0()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static step0(n: number);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A stepping function, returns 1 for any positive value of ",(0,t.jsx)(n.code,{children:"n"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"step1",children:(0,t.jsx)(n.code,{children:"step1()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static step1(n: number);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A stepping function, returns 1 if ",(0,t.jsx)(n.code,{children:"n"})," is greater than or equal to 1."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"linear",children:(0,t.jsx)(n.code,{children:"linear()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static linear(t: number);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A linear function, ",(0,t.jsx)(n.code,{children:"f(t) = t"}),". Position correlates to elapsed time one to one."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://cubic-bezier.com/#0,0,1,1",children:"http://cubic-bezier.com/#0,0,1,1"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"ease",children:(0,t.jsx)(n.code,{children:"ease()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static ease(t: number);\n"})}),"\n",(0,t.jsx)(n.p,{children:"A basic inertial interaction, similar to an object slowly accelerating to speed."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://cubic-bezier.com/#.42,0,1,1",children:"http://cubic-bezier.com/#.42,0,1,1"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"quad",children:(0,t.jsx)(n.code,{children:"quad()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static quad(t: number);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A quadratic function, ",(0,t.jsx)(n.code,{children:"f(t) = t * t"}),". Position equals the square of elapsed time."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://easings.net/#easeInQuad",children:"http://easings.net/#easeInQuad"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"cubic",children:(0,t.jsx)(n.code,{children:"cubic()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static cubic(t: number);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A cubic function, ",(0,t.jsx)(n.code,{children:"f(t) = t * t * t"}),". Position equals the cube of elapsed time."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://easings.net/#easeInCubic",children:"http://easings.net/#easeInCubic"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"poly",children:(0,t.jsx)(n.code,{children:"poly()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static poly(n: number);\n"})}),"\n",(0,t.jsx)(n.p,{children:"A power function. Position is equal to the Nth power of elapsed time."}),"\n",(0,t.jsxs)(n.p,{children:["n = 4: ",(0,t.jsx)(n.a,{href:"http://easings.net/#easeInQuart",children:"http://easings.net/#easeInQuart"})," n = 5: ",(0,t.jsx)(n.a,{href:"http://easings.net/#easeInQuint",children:"http://easings.net/#easeInQuint"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"sin",children:(0,t.jsx)(n.code,{children:"sin()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static sin(t: number);\n"})}),"\n",(0,t.jsx)(n.p,{children:"A sinusoidal function."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://easings.net/#easeInSine",children:"http://easings.net/#easeInSine"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"circle",children:(0,t.jsx)(n.code,{children:"circle()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static circle(t: number);\n"})}),"\n",(0,t.jsx)(n.p,{children:"A circular function."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://easings.net/#easeInCirc",children:"http://easings.net/#easeInCirc"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"exp",children:(0,t.jsx)(n.code,{children:"exp()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static exp(t: number);\n"})}),"\n",(0,t.jsx)(n.p,{children:"An exponential function."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://easings.net/#easeInExpo",children:"http://easings.net/#easeInExpo"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"elastic",children:(0,t.jsx)(n.code,{children:"elastic()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static elastic(bounciness: number);\n"})}),"\n",(0,t.jsx)(n.p,{children:"A basic elastic interaction, similar to a spring oscillating back and forth."}),"\n",(0,t.jsx)(n.p,{children:"Default bounciness is 1, which overshoots a little bit once. 0 bounciness doesn't overshoot at all, and bounciness of N > 1 will overshoot about N times."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://easings.net/#easeInElastic",children:"http://easings.net/#easeInElastic"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"back",children:(0,t.jsx)(n.code,{children:"back()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static back(s)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Use with ",(0,t.jsx)(n.code,{children:"Animated.parallel()"})," to create a basic effect where the object animates back slightly as the animation starts."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"bounce",children:(0,t.jsx)(n.code,{children:"bounce()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static bounce(t: number);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Provides a basic bouncing effect."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://easings.net/#easeInBounce",children:"http://easings.net/#easeInBounce"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"bezier",children:(0,t.jsx)(n.code,{children:"bezier()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static bezier(x1: number, y1: number, x2: number, y2: number);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Provides a cubic bezier curve, equivalent to CSS Transitions' ",(0,t.jsx)(n.code,{children:"transition-timing-function"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A useful tool to visualize cubic bezier curves can be found at ",(0,t.jsx)(n.a,{href:"http://cubic-bezier.com/",children:"http://cubic-bezier.com/"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"in",children:(0,t.jsx)(n.code,{children:"in()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static in(easing: number);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Runs an easing function forwards."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"out",children:(0,t.jsx)(n.code,{children:"out()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static out(easing: number);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Runs an easing function backwards."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"inout",children:(0,t.jsx)(n.code,{children:"inOut()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"static inOut(easing: number);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Makes any easing function symmetrical. The easing function will run forwards for half of the duration, then backwards for the rest of the duration."})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},86386:(e,n,i)=>{i.d(n,{Z:()=>C});var t=i(27378),a=i(38944);const s={tabItem:"tabItem_wHwb"};var r=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(e,n,i)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,u=(e,n)=>{for(var i in n||(n={}))c.call(n,i)&&d(e,i,n[i]);if(l)for(var i of l(n))o.call(n,i)&&d(e,i,n[i]);return e};function C({children:e,hidden:n,className:i}){return t.createElement("div",u({role:"tabpanel",className:(0,a.Z)(s.tabItem,i)},{hidden:n}),e)}},48375:(e,n,i)=>{i.d(n,{Z:()=>F});var t=i(27378),a=i(38944),s=i(12112),r=i(3620),l=i(69490),c=i(14953),o=i(27886),d=i(7106),u=Object.defineProperty,C=Object.defineProperties,h=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,b=(e,n,i)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,f=(e,n)=>{for(var i in n||(n={}))g.call(n,i)&&b(e,i,n[i]);if(p)for(var i of p(n))x.call(n,i)&&b(e,i,n[i]);return e},m=(e,n)=>C(e,h(n));function j(e){var n,i;return null!=(i=null==(n=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?i:[]}function v(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return j(e).map((({props:{value:e,label:n,attributes:i,default:t}})=>({value:e,label:n,attributes:i,default:t})))}(i);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function D({value:e,tabValues:n}){return n.some((n=>n.value===e))}function A({queryString:e=!1,groupId:n}){const i=(0,r.k6)(),a=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,c._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace(m(f({},i.location),{search:n.toString()}))}),[a,i])]}function B(e){const{defaultValue:n,queryString:i=!1,groupId:a}=e,s=v(e),[r,c]=(0,t.useState)((()=>function({defaultValue:e,tabValues:n}){var i;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!D({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=null!=(i=n.find((e=>e.default)))?i:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,u]=A({queryString:i,groupId:a}),[C,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[i,a]=(0,d.Nk)(n);return[i,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:a}),p=(()=>{const e=null!=o?o:C;return D({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{p&&c(p)}),[p]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!D({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var y=i(14185);const E={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var w=Object.defineProperty,k=Object.defineProperties,S=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,N=(e,n,i)=>n in e?w(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,V=(e,n)=>{for(var i in n||(n={}))T.call(n,i)&&N(e,i,n[i]);if(O)for(var i of O(n))I.call(n,i)&&N(e,i,n[i]);return e},P=(e,n)=>k(e,S(n));function z({className:e,block:n,selectedValue:i,selectValue:r,tabValues:l}){const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==i&&(o(n),r(a))},u=e=>{var n,i;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=c.indexOf(e.currentTarget)+1;t=null!=(n=c[i])?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=null!=(i=c[n])?i:c[c.length-1];break}}null==t||t.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e)},l.map((({value:e,label:n,attributes:s})=>t.createElement("li",P(V({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:e=>c.push(e),onKeyDown:u,onClick:d},s),{className:(0,a.Z)("tabs__item",E.tabItem,null==s?void 0:s.className,{"tabs__item--active":i===e})}),null!=n?n:e))))}function q({lazy:e,children:n,selectedValue:i}){const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i}))))}function _(e){const n=B(e);return t.createElement("div",{className:(0,a.Z)("tabs-container",E.tabList)},t.createElement(z,V(V({},e),n)),t.createElement(q,V(V({},e),n)))}function F(e){const n=(0,y.Z)();return t.createElement(_,V({key:String(n)},e),j(e.children))}},11674:(e,n,i)=>{i.d(n,{Z:()=>r});var t=i(63445);const a=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),r={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:a?"macos":s?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,i)=>{var t=i(27378),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,i){var t,s={},o=null,d=null;for(t in void 0!==i&&(o=""+i),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,t)&&!c.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:a,type:e,key:o,ref:d,props:s,_owner:l.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},24246:(e,n,i)=>{e.exports=i(71426)},71670:(e,n,i)=>{i.d(n,{Zo:()=>l,ah:()=>s});var t=i(27378);const a=t.createContext({});function s(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:i}){let l;return l=i?"function"==typeof e?e({}):e||r:s(e),t.createElement(a.Provider,{value:l},n)}}}]);