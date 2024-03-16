/*! For license information please see 56376c93.0d84476b.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[55809],{13051:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(24246),r=t(71670);const s={id:"image-style-props",title:"Image Style Props"},d=void 0,o={id:"image-style-props",title:"Image Style Props",description:"Examples",source:"@site/versioned_docs/version-0.73/image-style-props.md",sourceDirName:".",slug:"/image-style-props",permalink:"/docs/image-style-props",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/image-style-props.md",tags:[],version:"0.73",lastUpdatedAt:1702040446,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{id:"image-style-props",title:"Image Style Props"},sidebar:"components",previous:{title:"SafeAreaView",permalink:"/docs/safeareaview"},next:{title:"Layout Props",permalink:"/docs/layout-props"}},a={},l=[{value:"Examples",id:"examples",level:2},{value:"Image Resize Mode",id:"image-resize-mode",level:3},{value:"Image Border",id:"image-border",level:3},{value:"Image Border Radius",id:"image-border-radius",level:3},{value:"Image Tint",id:"image-tint",level:3},{value:"Props",id:"props",level:2},{value:"<code>backfaceVisibility</code>",id:"backfacevisibility",level:3},{value:"<code>backgroundColor</code>",id:"backgroundcolor",level:3},{value:"<code>borderBottomLeftRadius</code>",id:"borderbottomleftradius",level:3},{value:"<code>borderBottomRightRadius</code>",id:"borderbottomrightradius",level:3},{value:"<code>borderColor</code>",id:"bordercolor",level:3},{value:"<code>borderRadius</code>",id:"borderradius",level:3},{value:"<code>borderTopLeftRadius</code>",id:"bordertopleftradius",level:3},{value:"<code>borderTopRightRadius</code>",id:"bordertoprightradius",level:3},{value:"<code>borderWidth</code>",id:"borderwidth",level:3},{value:"<code>opacity</code>",id:"opacity",level:3},{value:"<code>overflow</code>",id:"overflow",level:3},{value:'<code>overlayColor</code> <div class="label android">Android</div>',id:"overlaycolor-android",level:3},{value:"<code>resizeMode</code>",id:"resizemode",level:3},{value:"<code>objectFit</code>",id:"objectfit",level:3},{value:"<code>tintColor</code>",id:"tintcolor",level:3}];function c(e){const n=Object.assign({h2:"h2",h3:"h3",div:"div",h1:"h1",code:"code",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",hr:"hr",a:"a",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"image-resize-mode",children:"Image Resize Mode"}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"Image Resize Modes Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20Image%2C%20Text%2C%20StyleSheet%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20DisplayAnImageWithStyle%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20resizeMode%3A%20'cover'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20source%3D%7Brequire('%40expo%2Fsnack-static%2Freact-native-logo.png')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EresizeMode%20%3A%20cover%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20resizeMode%3A%20'contain'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20source%3D%7Brequire('%40expo%2Fsnack-static%2Freact-native-logo.png')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EresizeMode%20%3A%20contain%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20resizeMode%3A%20'stretch'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20source%3D%7Brequire('%40expo%2Fsnack-static%2Freact-native-logo.png')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EresizeMode%20%3A%20stretch%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20resizeMode%3A%20'repeat'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20source%3D%7Brequire('%40expo%2Fsnack-static%2Freact-native-logo.png')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EresizeMode%20%3A%20repeat%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20resizeMode%3A%20'center'%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20source%3D%7Brequire('%40expo%2Fsnack-static%2Freact-native-logo.png')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EresizeMode%20%3A%20center%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20display%3A%20'flex'%2C%5Cn%20%20%20%20flexDirection%3A%20'column'%2C%5Cn%20%20%20%20justifyContent%3A%20'space-around'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20height%3A%20'100%25'%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20DisplayAnImageWithStyle%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(n.h3,{id:"image-border",children:"Image Border"}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"Style BorderWidth and BorderColor Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20Image%2C%20StyleSheet%2C%20Text%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20DisplayAnImageWithStyle%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'red'%2C%5Cn%20%20%20%20%20%20%20%20%20%20borderWidth%3A%205%2C%5Cn%20%20%20%20%20%20%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20source%3D%7Brequire('%40expo%2Fsnack-static%2Freact-native-logo.png')%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CText%3EborderColor%20%26%20borderWidth%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20display%3A%20'flex'%2C%5Cn%20%20%20%20flexDirection%3A%20'column'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20height%3A%20'100%25'%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20DisplayAnImageWithStyle%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(n.h3,{id:"image-border-radius",children:"Image Border Radius"}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"Style Border Radius Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20Image%2C%20StyleSheet%2C%20Text%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20DisplayAnImageWithStyle%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20borderTopRightRadius%3A%2020%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20source%3D%7Brequire('%40expo%2Fsnack-static%2Freact-native-logo.png')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EborderTopRightRadius%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20borderBottomRightRadius%3A%2020%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20source%3D%7Brequire('%40expo%2Fsnack-static%2Freact-native-logo.png')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EborderBottomRightRadius%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20borderBottomLeftRadius%3A%2020%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20source%3D%7Brequire('%40expo%2Fsnack-static%2Freact-native-logo.png')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EborderBottomLeftRadius%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20borderTopLeftRadius%3A%2020%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20source%3D%7Brequire('%40expo%2Fsnack-static%2Freact-native-logo.png')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EborderTopLeftRadius%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20display%3A%20'flex'%2C%5Cn%20%20%20%20flexDirection%3A%20'column'%2C%5Cn%20%20%20%20justifyContent%3A%20'space-around'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20height%3A%20'100%25'%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20DisplayAnImageWithStyle%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(n.h3,{id:"image-tint",children:"Image Tint"}),"\n",(0,i.jsx)(n.div,{class:"snack-player","data-snack-name":"Style tintColor Function Component","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20Image%2C%20StyleSheet%2C%20Text%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20DisplayAnImageWithStyle%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20tintColor%3A%20'%23000000'%2C%5Cn%20%20%20%20%20%20%20%20%20%20resizeMode%3A%20'contain'%2C%5Cn%20%20%20%20%20%20%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20source%3D%7Brequire('%40expo%2Fsnack-static%2Freact-native-logo.png')%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CText%3EtintColor%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20display%3A%20'flex'%2C%5Cn%20%20%20%20flexDirection%3A%20'column'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20height%3A%20'100%25'%2C%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20DisplayAnImageWithStyle%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,i.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,i.jsx)(n.h3,{id:"backfacevisibility",children:(0,i.jsx)(n.code,{children:"backfaceVisibility"})}),"\n",(0,i.jsx)(n.p,{children:"The property defines whether or not the back face of a rotated image should be visible."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["enum(",(0,i.jsx)(n.code,{children:"'visible'"}),", ",(0,i.jsx)(n.code,{children:"'hidden'"}),")"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'visible'"})})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"backgroundcolor",children:(0,i.jsx)(n.code,{children:"backgroundColor"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/colors",children:"color"})})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"borderbottomleftradius",children:(0,i.jsx)(n.code,{children:"borderBottomLeftRadius"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"number"})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"borderbottomrightradius",children:(0,i.jsx)(n.code,{children:"borderBottomRightRadius"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"number"})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"bordercolor",children:(0,i.jsx)(n.code,{children:"borderColor"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/colors",children:"color"})})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"borderradius",children:(0,i.jsx)(n.code,{children:"borderRadius"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"number"})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"bordertopleftradius",children:(0,i.jsx)(n.code,{children:"borderTopLeftRadius"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"number"})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"bordertoprightradius",children:(0,i.jsx)(n.code,{children:"borderTopRightRadius"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"number"})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"borderwidth",children:(0,i.jsx)(n.code,{children:"borderWidth"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"number"})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"opacity",children:(0,i.jsx)(n.code,{children:"opacity"})}),"\n",(0,i.jsxs)(n.p,{children:["Set an opacity value for the image. The number should be in the range from ",(0,i.jsx)(n.code,{children:"0.0"})," to ",(0,i.jsx)(n.code,{children:"1.0"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.0"})})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"overflow",children:(0,i.jsx)(n.code,{children:"overflow"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["enum(",(0,i.jsx)(n.code,{children:"'visible'"}),", ",(0,i.jsx)(n.code,{children:"'hidden'"}),")"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'visible'"})})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"overlaycolor-android",children:[(0,i.jsx)(n.code,{children:"overlayColor"})," ",(0,i.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,i.jsx)(n.p,{children:"When the image has rounded corners, specifying an overlayColor will cause the remaining space in the corners to be filled with a solid color. This is useful in cases which are not supported by the Android implementation of rounded corners:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Certain resize modes, such as ",(0,i.jsx)(n.code,{children:"'contain'"})]}),"\n",(0,i.jsx)(n.li,{children:"Animated GIFs"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["A typical way to use this prop is with images displayed on a solid background and setting the ",(0,i.jsx)(n.code,{children:"overlayColor"})," to the same color as the background."]}),"\n",(0,i.jsxs)(n.p,{children:["For details of how this works under the hood, see ",(0,i.jsx)(n.a,{href:"https://frescolib.org/docs/rounded-corners-and-circles.html",children:"Fresco documentation"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"string"})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"resizemode",children:(0,i.jsx)(n.code,{children:"resizeMode"})}),"\n",(0,i.jsxs)(n.p,{children:["Determines how to resize the image when the frame doesn't match the raw image dimensions. Defaults to ",(0,i.jsx)(n.code,{children:"cover"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cover"}),": Scale the image uniformly (maintain the image's aspect ratio) so that:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding)"}),"\n",(0,i.jsx)(n.li,{children:"At least one dimension of the scaled image will be equal to the corresponding dimension of the view (minus padding)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"contain"}),": Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"stretch"}),": Scale width and height independently, This may change the aspect ratio of the src."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"repeat"}),": Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"center"}),": Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["enum(",(0,i.jsx)(n.code,{children:"'cover'"}),", ",(0,i.jsx)(n.code,{children:"'contain'"}),", ",(0,i.jsx)(n.code,{children:"'stretch'"}),", ",(0,i.jsx)(n.code,{children:"'repeat'"}),", ",(0,i.jsx)(n.code,{children:"'center'"}),")"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'cover'"})})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"objectfit",children:(0,i.jsx)(n.code,{children:"objectFit"})}),"\n",(0,i.jsx)(n.p,{children:"Determines how to resize the image when the frame doesn't match the raw image dimensions."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["enum(",(0,i.jsx)(n.code,{children:"'cover'"}),", ",(0,i.jsx)(n.code,{children:"'contain'"}),", ",(0,i.jsx)(n.code,{children:"'fill'"}),", ",(0,i.jsx)(n.code,{children:"'scale-down'"}),")"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'cover'"})})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"tintcolor",children:(0,i.jsx)(n.code,{children:"tintColor"})}),"\n",(0,i.jsx)(n.p,{children:"Changes the color of all the non-transparent pixels to the tintColor."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Type"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/colors",children:"color"})})})})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},71426:(e,n,t)=>{var i=t(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,s={},l=null,c=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)d.call(n,i)&&!a.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:l,ref:c,props:s,_owner:o.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>s});var i=t(27378);const r=i.createContext({});function s(e){const n=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||d:s(e),i.createElement(r.Provider,{value:o},n)}}}]);