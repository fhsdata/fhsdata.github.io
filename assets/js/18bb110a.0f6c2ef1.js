/*! For license information please see 18bb110a.0f6c2ef1.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[92926],{52186:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var d=t(24246),r=t(71670);const s={id:"touchablehighlight",title:"TouchableHighlight"},o=void 0,i={id:"touchablehighlight",title:"TouchableHighlight",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/versioned_docs/version-0.72/touchablehighlight.md",sourceDirName:".",slug:"/touchablehighlight",permalink:"/docs/0.72/touchablehighlight",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/touchablehighlight.md",tags:[],version:"0.72",lastUpdatedAt:1687362382,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{id:"touchablehighlight",title:"TouchableHighlight"},sidebar:"components",previous:{title:"TextInput",permalink:"/docs/0.72/textinput"},next:{title:"TouchableOpacity",permalink:"/docs/0.72/touchableopacity"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Props",id:"props",level:2},{value:"TouchableWithoutFeedback Props",id:"touchablewithoutfeedback-props",level:3},{value:"<code>activeOpacity</code>",id:"activeopacity",level:3},{value:"<code>onHideUnderlay</code>",id:"onhideunderlay",level:3},{value:"<code>onShowUnderlay</code>",id:"onshowunderlay",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"<code>underlayColor</code>",id:"underlaycolor",level:3},{value:'<code>hasTVPreferredFocus</code> <div class="label ios">iOS</div>',id:"hastvpreferredfocus-ios",level:3},{value:'<code>nextFocusDown</code> <div class="label android">Android</div>',id:"nextfocusdown-android",level:3},{value:'<code>nextFocusForward</code> <div class="label android">Android</div>',id:"nextfocusforward-android",level:3},{value:'<code>nextFocusLeft</code> <div class="label android">Android</div>',id:"nextfocusleft-android",level:3},{value:'<code>nextFocusRight</code> <div class="label android">Android</div>',id:"nextfocusright-android",level:3},{value:'<code>nextFocusUp</code> <div class="label android">Android</div>',id:"nextfocusup-android",level:3},{value:"<code>testOnly_pressed</code>",id:"testonly_pressed",level:3}];function h(e){const n=Object.assign({blockquote:"blockquote",p:"p",a:"a",pre:"pre",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,r.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",(0,d.jsx)(n.a,{href:"/docs/0.72/pressable",children:"Pressable"})," API."]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view."}),"\n",(0,d.jsx)(n.p,{children:"The underlay comes from wrapping the child in a new View, which can affect layout, and sometimes cause unwanted visual artifacts if not used correctly, for example if the backgroundColor of the wrapped view isn't explicitly set to an opaque color."}),"\n",(0,d.jsx)(n.p,{children:"TouchableHighlight must have one child (not zero or more than one). If you wish to have several child components, wrap them in a View."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"function MyComponent(props: MyComponentProps) {\n  return (\n    <View {...props} style={{flex: 1, backgroundColor: '#fff'}}>\n      <Text>My Component</Text>\n    </View>\n  );\n}\n\n<TouchableHighlight\n  activeOpacity={0.6}\n  underlayColor=\"#DDDDDD\"\n  onPress={() => alert('Pressed!')}>\n  <MyComponent />\n</TouchableHighlight>;\n"})}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.div,{class:"snack-player","data-snack-name":"TouchableHighlight Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%5Cnimport%20%7BStyleSheet%2C%20Text%2C%20TouchableHighlight%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20TouchableHighlightExample%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bcount%2C%20setCount%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20onPress%20%3D%20()%20%3D%3E%20setCount(count%20%2B%201)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7BonPress%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3ETouch%20Here%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.countText%7D%3E%7Bcount%20%7C%7C%20null%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23DDDDDD'%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20countContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20countText%3A%20%7B%5Cn%20%20%20%20color%3A%20'%23FF00FF'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20TouchableHighlightExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,d.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,d.jsx)(n.h3,{id:"touchablewithoutfeedback-props",children:(0,d.jsx)(n.a,{href:"/docs/0.72/touchablewithoutfeedback#props",children:"TouchableWithoutFeedback Props"})}),"\n",(0,d.jsxs)(n.p,{children:["Inherits ",(0,d.jsx)(n.a,{href:"/docs/0.72/touchablewithoutfeedback#props",children:"TouchableWithoutFeedback Props"}),"."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"activeopacity",children:(0,d.jsx)(n.code,{children:"activeOpacity"})}),"\n",(0,d.jsxs)(n.p,{children:["Determines what the opacity of the wrapped view should be when touch is active. The value should be between 0 and 1. Defaults to 0.85. Requires ",(0,d.jsx)(n.code,{children:"underlayColor"})," to be set."]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"number"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"onhideunderlay",children:(0,d.jsx)(n.code,{children:"onHideUnderlay"})}),"\n",(0,d.jsx)(n.p,{children:"Called immediately after the underlay is hidden."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"function"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"onshowunderlay",children:(0,d.jsx)(n.code,{children:"onShowUnderlay"})}),"\n",(0,d.jsx)(n.p,{children:"Called immediately after the underlay is shown."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"function"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"style",children:(0,d.jsx)(n.code,{children:"style"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"View.style"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"underlaycolor",children:(0,d.jsx)(n.code,{children:"underlayColor"})}),"\n",(0,d.jsx)(n.p,{children:"The color of the underlay that will show through when the touch is active."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/0.72/colors",children:"color"})})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h3,{id:"hastvpreferredfocus-ios",children:[(0,d.jsx)(n.code,{children:"hasTVPreferredFocus"})," ",(0,d.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"(Apple TV only)"})," TV preferred focus (see documentation for the View component)."]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"bool"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h3,{id:"nextfocusdown-android",children:[(0,d.jsx)(n.code,{children:"nextFocusDown"})," ",(0,d.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,d.jsx)(n.p,{children:"TV next focus down (see documentation for the View component)."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"number"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h3,{id:"nextfocusforward-android",children:[(0,d.jsx)(n.code,{children:"nextFocusForward"})," ",(0,d.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,d.jsx)(n.p,{children:"TV next focus forward (see documentation for the View component)."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"number"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h3,{id:"nextfocusleft-android",children:[(0,d.jsx)(n.code,{children:"nextFocusLeft"})," ",(0,d.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,d.jsx)(n.p,{children:"TV next focus left (see documentation for the View component)."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"number"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h3,{id:"nextfocusright-android",children:[(0,d.jsx)(n.code,{children:"nextFocusRight"})," ",(0,d.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,d.jsx)(n.p,{children:"TV next focus right (see documentation for the View component)."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"number"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h3,{id:"nextfocusup-android",children:[(0,d.jsx)(n.code,{children:"nextFocusUp"})," ",(0,d.jsx)("div",{class:"label android",children:"Android"})]}),"\n",(0,d.jsx)(n.p,{children:"TV next focus up (see documentation for the View component)."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"number"})})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"testonly_pressed",children:(0,d.jsx)(n.code,{children:"testOnly_pressed"})}),"\n",(0,d.jsx)(n.p,{children:"Handy for snapshot tests."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Type"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"bool"})})})]})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(h,e)})):h(e)}},71426:(e,n,t)=>{var d=t(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var d,s={},c=null,h=null;for(d in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)o.call(n,d)&&!l.hasOwnProperty(d)&&(s[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===s[d]&&(s[d]=n[d]);return{$$typeof:r,type:e,key:c,ref:h,props:s,_owner:i.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>s});var d=t(27378);const r=d.createContext({});function s(e){const n=d.useContext(r);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:s(e),d.createElement(r.Provider,{value:i},n)}}}]);