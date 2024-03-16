/*! For license information please see 45efb036.7189c6a7.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[58331],{75911:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=d(24246),t=d(71670);const i={id:"view-style-props",title:"View Style Props"},s=void 0,l={id:"view-style-props",title:"View Style Props",description:"Example",source:"@site/versioned_docs/version-0.73/view-style-props.md",sourceDirName:".",slug:"/view-style-props",permalink:"/docs/view-style-props",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/view-style-props.md",tags:[],version:"0.73",lastUpdatedAt:1704470218,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{id:"view-style-props",title:"View Style Props"},sidebar:"components",previous:{title:"Text Style Props",permalink:"/docs/text-style-props"},next:{title:"LayoutEvent Object Type",permalink:"/docs/layoutevent"}},o={},c=[{value:"Example",id:"example",level:3},{value:"Props",id:"props",level:2},{value:"<code>backfaceVisibility</code>",id:"backfacevisibility",level:3},{value:"<code>backgroundColor</code>",id:"backgroundcolor",level:3},{value:"<code>borderBottomColor</code>",id:"borderbottomcolor",level:3},{value:"<code>borderBottomEndRadius</code>",id:"borderbottomendradius",level:3},{value:"<code>borderBottomLeftRadius</code>",id:"borderbottomleftradius",level:3},{value:"<code>borderBottomRightRadius</code>",id:"borderbottomrightradius",level:3},{value:"<code>borderBottomStartRadius</code>",id:"borderbottomstartradius",level:3},{value:"<code>borderStartEndRadius</code>",id:"borderstartendradius",level:3},{value:"<code>borderStartStartRadius</code>",id:"borderstartstartradius",level:3},{value:"<code>borderEndEndRadius</code>",id:"borderendendradius",level:3},{value:"<code>borderEndStartRadius</code>",id:"borderendstartradius",level:3},{value:"<code>borderBottomWidth</code>",id:"borderbottomwidth",level:3},{value:"<code>borderColor</code>",id:"bordercolor",level:3},{value:'<code>borderCurve</code> <div class="label ios">iOS</div>',id:"bordercurve-ios",level:3},{value:"<code>borderEndColor</code>",id:"borderendcolor",level:3},{value:"<code>borderLeftColor</code>",id:"borderleftcolor",level:3},{value:"<code>borderLeftWidth</code>",id:"borderleftwidth",level:3},{value:"<code>borderRadius</code>",id:"borderradius",level:3},{value:"<code>borderRightColor</code>",id:"borderrightcolor",level:3},{value:"<code>borderRightWidth</code>",id:"borderrightwidth",level:3},{value:"<code>borderStartColor</code>",id:"borderstartcolor",level:3},{value:"<code>borderStyle</code>",id:"borderstyle",level:3},{value:"<code>borderTopColor</code>",id:"bordertopcolor",level:3},{value:"<code>borderTopEndRadius</code>",id:"bordertopendradius",level:3},{value:"<code>borderTopLeftRadius</code>",id:"bordertopleftradius",level:3},{value:"<code>borderTopRightRadius</code>",id:"bordertoprightradius",level:3},{value:"<code>borderTopStartRadius</code>",id:"bordertopstartradius",level:3},{value:"<code>borderTopWidth</code>",id:"bordertopwidth",level:3},{value:"<code>borderWidth</code>",id:"borderwidth",level:3},{value:'<code>elevation</code> <div class="label android">Android</div>',id:"elevation-android",level:3},{value:"<code>opacity</code>",id:"opacity",level:3},{value:"<code>pointerEvents</code>",id:"pointerevents",level:3}];function h(e){const r=Object.assign({h3:"h3",div:"div",h1:"h1",h2:"h2",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",hr:"hr",a:"a",p:"p",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.div,{class:"snack-player","data-snack-name":"ViewStyleProps","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20StyleSheet%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20ViewStyleProps%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.top%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.middle%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.bottom%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'space-between'%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23fff'%2C%5Cn%20%20%20%20padding%3A%2020%2C%5Cn%20%20%20%20margin%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20top%3A%20%7B%5Cn%20%20%20%20flex%3A%200.3%2C%5Cn%20%20%20%20backgroundColor%3A%20'grey'%2C%5Cn%20%20%20%20borderWidth%3A%205%2C%5Cn%20%20%20%20borderTopLeftRadius%3A%2020%2C%5Cn%20%20%20%20borderTopRightRadius%3A%2020%2C%5Cn%20%20%7D%2C%5Cn%20%20middle%3A%20%7B%5Cn%20%20%20%20flex%3A%200.3%2C%5Cn%20%20%20%20backgroundColor%3A%20'beige'%2C%5Cn%20%20%20%20borderWidth%3A%205%2C%5Cn%20%20%7D%2C%5Cn%20%20bottom%3A%20%7B%5Cn%20%20%20%20flex%3A%200.3%2C%5Cn%20%20%20%20backgroundColor%3A%20'pink'%2C%5Cn%20%20%20%20borderWidth%3A%205%2C%5Cn%20%20%20%20borderBottomLeftRadius%3A%2020%2C%5Cn%20%20%20%20borderBottomRightRadius%3A%2020%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20ViewStyleProps%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,n.jsx)(r.h1,{id:"reference",children:"Reference"}),"\n",(0,n.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,n.jsx)(r.h3,{id:"backfacevisibility",children:(0,n.jsx)(r.code,{children:"backfaceVisibility"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:["enum(",(0,n.jsx)(r.code,{children:"'visible'"}),", ",(0,n.jsx)(r.code,{children:"'hidden'"}),")"]})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"backgroundcolor",children:(0,n.jsx)(r.code,{children:"backgroundColor"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/colors",children:"color"})})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderbottomcolor",children:(0,n.jsx)(r.code,{children:"borderBottomColor"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/colors",children:"color"})})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderbottomendradius",children:(0,n.jsx)(r.code,{children:"borderBottomEndRadius"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderbottomleftradius",children:(0,n.jsx)(r.code,{children:"borderBottomLeftRadius"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderbottomrightradius",children:(0,n.jsx)(r.code,{children:"borderBottomRightRadius"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderbottomstartradius",children:(0,n.jsx)(r.code,{children:"borderBottomStartRadius"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderstartendradius",children:(0,n.jsx)(r.code,{children:"borderStartEndRadius"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderstartstartradius",children:(0,n.jsx)(r.code,{children:"borderStartStartRadius"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderendendradius",children:(0,n.jsx)(r.code,{children:"borderEndEndRadius"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderendstartradius",children:(0,n.jsx)(r.code,{children:"borderEndStartRadius"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderbottomwidth",children:(0,n.jsx)(r.code,{children:"borderBottomWidth"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"bordercolor",children:(0,n.jsx)(r.code,{children:"borderColor"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/colors",children:"color"})})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.h3,{id:"bordercurve-ios",children:[(0,n.jsx)(r.code,{children:"borderCurve"})," ",(0,n.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,n.jsx)(r.p,{children:"On iOS 13+, it is possible to change the corner curve of borders."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:["enum(",(0,n.jsx)(r.code,{children:"'circular'"}),", ",(0,n.jsx)(r.code,{children:"'continuous'"}),")"]})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderendcolor",children:(0,n.jsx)(r.code,{children:"borderEndColor"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/colors",children:"color"})})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderleftcolor",children:(0,n.jsx)(r.code,{children:"borderLeftColor"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/colors",children:"color"})})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderleftwidth",children:(0,n.jsx)(r.code,{children:"borderLeftWidth"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderradius",children:(0,n.jsx)(r.code,{children:"borderRadius"})}),"\n",(0,n.jsxs)(r.p,{children:["If the rounded border is not visible, try applying ",(0,n.jsx)(r.code,{children:"overflow: 'hidden'"})," as well."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderrightcolor",children:(0,n.jsx)(r.code,{children:"borderRightColor"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/colors",children:"color"})})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderrightwidth",children:(0,n.jsx)(r.code,{children:"borderRightWidth"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderstartcolor",children:(0,n.jsx)(r.code,{children:"borderStartColor"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/colors",children:"color"})})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderstyle",children:(0,n.jsx)(r.code,{children:"borderStyle"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:["enum(",(0,n.jsx)(r.code,{children:"'solid'"}),", ",(0,n.jsx)(r.code,{children:"'dotted'"}),", ",(0,n.jsx)(r.code,{children:"'dashed'"}),")"]})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"bordertopcolor",children:(0,n.jsx)(r.code,{children:"borderTopColor"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/colors",children:"color"})})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"bordertopendradius",children:(0,n.jsx)(r.code,{children:"borderTopEndRadius"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"bordertopleftradius",children:(0,n.jsx)(r.code,{children:"borderTopLeftRadius"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"bordertoprightradius",children:(0,n.jsx)(r.code,{children:"borderTopRightRadius"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"bordertopstartradius",children:(0,n.jsx)(r.code,{children:"borderTopStartRadius"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"bordertopwidth",children:(0,n.jsx)(r.code,{children:"borderTopWidth"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"borderwidth",children:(0,n.jsx)(r.code,{children:"borderWidth"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.h3,{id:"elevation-android",children:[(0,n.jsx)(r.code,{children:"elevation"})," ",(0,n.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,n.jsxs)(r.p,{children:["Sets the elevation of a view, using Android's underlying ",(0,n.jsx)(r.a,{href:"https://developer.android.com/training/material/shadows-clipping.html#Elevation",children:"elevation API"}),". This adds a drop shadow to the item and affects z-order for overlapping views. Only supported on Android 5.0+, has no effect on earlier versions."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"opacity",children:(0,n.jsx)(r.code,{children:"opacity"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"number"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"pointerevents",children:(0,n.jsx)(r.code,{children:"pointerEvents"})}),"\n",(0,n.jsxs)(r.p,{children:["Controls whether the ",(0,n.jsx)(r.code,{children:"View"})," can be the target of touch events."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"'auto'"}),": The View can be the target of touch events."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"'none'"}),": The View is never the target of touch events."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"'box-none'"}),": The View is never the target of touch events but its subviews can be."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"'box-only'"}),": The view can be the target of touch events but its subviews cannot be."]}),"\n"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"Type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.td,{children:"enum('auto', 'box-none', 'box-only', 'none' )"})})})]})]})}const a=function(e={}){const{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},71426:(e,r,d)=>{var n=d(27378),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,d){var n,i={},c=null,h=null;for(n in void 0!==d&&(c=""+d),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)s.call(r,n)&&!o.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:t,type:e,key:c,ref:h,props:i,_owner:l.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},24246:(e,r,d)=>{e.exports=d(71426)},71670:(e,r,d)=>{d.d(r,{Zo:()=>l,ah:()=>i});var n=d(27378);const t=n.createContext({});function i(e){const r=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function l({components:e,children:r,disableParentContext:d}){let l;return l=d?"function"==typeof e?e({}):e||s:i(e),n.createElement(t.Provider,{value:l},r)}}}]);