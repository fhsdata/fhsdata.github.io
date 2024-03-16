/*! For license information please see b6c98dba.689f25c0.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[29819],{97999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var i=n(24246),o=n(71670);const r={title:"React Native Monthly #5",author:"Tomislav Tenodi",authorTitle:"Founder at Speck",authorURL:"https://github.com/tenodi",authorImageURL:"https://pbs.twimg.com/profile_images/877237660225609729/bKFDwfAq.jpg",authorTwitter:"TomislavTenodi",tags:["engineering"]},a=void 0,s={permalink:"/blog/2017/11/06/react-native-monthly-5",source:"@site/blog/2017-11-06-react-native-monthly-5.md",title:"React Native Monthly #5",description:"The React Native monthly meeting continues! Let's see what our teams are up to.",date:"2017-11-06T00:00:00.000Z",formattedDate:"November 6, 2017",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],readingTime:3.015,hasTruncateMarker:!1,authors:[{name:"Tomislav Tenodi",title:"Founder at Speck",url:"https://github.com/tenodi",imageURL:"https://pbs.twimg.com/profile_images/877237660225609729/bKFDwfAq.jpg"}],frontMatter:{title:"React Native Monthly #5",author:"Tomislav Tenodi",authorTitle:"Founder at Speck",authorURL:"https://github.com/tenodi",authorImageURL:"https://pbs.twimg.com/profile_images/877237660225609729/bKFDwfAq.jpg",authorTwitter:"TomislavTenodi",tags:["engineering"]},unlisted:!1,prevItem:{title:"React Native Monthly #6",permalink:"/blog/2018/01/09/react-native-monthly-6"},nextItem:{title:"React Native Monthly #4",permalink:"/blog/2017/09/21/react-native-monthly-4"}},l={authorsImageUrls:[void 0]},h=[{value:"Callstack",id:"callstack",level:3},{value:"Expo",id:"expo",level:3},{value:"Facebook",id:"facebook",level:3},{value:"Infinite Red",id:"infinite-red",level:3},{value:"Shoutem",id:"shoutem",level:3},{value:"Next session",id:"next-session",level:2}];function c(e){const t=Object.assign({p:"p",h3:"h3",ul:"ul",li:"li",a:"a",code:"code",h2:"h2"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The React Native monthly meeting continues! Let's see what our teams are up to."}),"\n",(0,i.jsx)(t.h3,{id:"callstack",children:"Callstack"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We\u2019ve been working on React Native CI. Most importantly, we have migrated from Travis to Circle, leaving React Native with a single, unified CI pipeline."}),"\n",(0,i.jsxs)(t.li,{children:["We\u2019ve organised ",(0,i.jsx)(t.a,{href:"https://blog.callstack.io/announcing-hacktoberfest-7313ea5ccf4f",children:"Hacktoberfest - React Native edition"})," where, together with attendees, we tried to submit many pull requests to open source projects."]}),"\n",(0,i.jsxs)(t.li,{children:["We keep working on ",(0,i.jsx)(t.a,{href:"https://github.com/callstack/haul",children:"Haul"}),". Last month, we have submitted two new releases, including webpack 3 support. We plan to add ",(0,i.jsx)(t.a,{href:"https://github.com/react-community/create-react-native-app",children:"CRNA"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/expo/expo",children:"Expo"})," support as well as work on better HMR. Our roadmap is public on the issue tracker. If you would like to suggest improvements or give feedback, let us know!"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"expo",children:"Expo"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Released ",(0,i.jsx)(t.a,{href:"https://blog.expo.io/expo-sdk-v22-0-0-is-now-available-7745bfe97fc6",children:"Expo SDK 22"})," (using React Native 0.49) and updated ",(0,i.jsx)(t.a,{href:"https://github.com/react-community/create-react-native-app",children:"CRNA"})," for it.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Includes improved splash screen API, basic ARKit support, \u201cDeviceMotion\u201d API, SFAuthenticationSession support on iOS11, and ",(0,i.jsx)(t.a,{href:"https://blog.expo.io/expo-sdk-v22-0-0-is-now-available-7745bfe97fc6",children:"more"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Your ",(0,i.jsx)(t.a,{href:"https://snack.expo.io",children:"snacks"})," can now have multiple JavaScript files and you can upload images and other assets by just dragging them into the editor."]}),"\n",(0,i.jsxs)(t.li,{children:["Contribute to ",(0,i.jsx)(t.a,{href:"https://github.com/react-community/react-navigation",children:"react-navigation"})," to add support for iPhone X."]}),"\n",(0,i.jsxs)(t.li,{children:["Focus our attention on rough edges when building large applications with Expo. For example:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["First-class support for deploying to multiple environments: staging, production, and arbitrary channels. Channels will support rolling back and setting the active release for a given channel. Let us know if you want to be an early tester, ",(0,i.jsx)(t.a,{href:"https://twitter.com/expo_io",children:"@expo_io"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"We are also working on improving our standalone app building infrastructure and adding support for bundling images and other non-code assets in standalone app builds while keeping the ability to update assets over the air."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"facebook",children:"Facebook"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Better RTL support:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["We\u2019re introducing a number of direction-aware styles.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Position:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"(left|right) \u2192 (start|end)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Margin:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"margin(Left|Right) \u2192 margin(Start|End)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Padding:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"padding(Left|Right) \u2192 padding(Start|End)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Border:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"borderTop(Left|Right)Radius \u2192 borderTop(Start|End)Radius"}),"\n",(0,i.jsx)(t.li,{children:"borderBottom(Left|Right)Radius \u2192 borderBottom(Start|End)Radius"}),"\n",(0,i.jsx)(t.li,{children:"border(Left|Right)Width \u2192 border(Start|End)Width"}),"\n",(0,i.jsx)(t.li,{children:"border(Left|Right)Color \u2192 border(Start|End)Color"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["The meaning of \u201cleft\u201d and \u201cright\u201d were swapped in RTL for position, margin, padding, and border styles. Within a few months, we\u2019re going to remove this behaviour and make \u201cleft\u201d always mean \u201cleft,\u201d and \u201cright\u201d always mean \u201cright\u201d. The breaking changes are hidden under a flag. Use ",(0,i.jsx)(t.code,{children:"I18nManager.swapLeftAndRightInRTL(false)"})," in your React Native components to opt into them."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Working on ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/flow",children:"Flow"})," typing our internal native modules and using those to generate interfaces in Java and protocols in ObjC that the native implementations must implement. We hope this codegen becomes open source next year, at the earliest."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"infinite-red",children:"Infinite Red"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["New OSS tool for helping React Native and other projects. More ",(0,i.jsx)(t.a,{href:"https://shift.infinite.red/solidarity-the-cli-for-developer-sanity-672fa81b98e9",children:"here"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Revamping ",(0,i.jsx)(t.a,{href:"https://github.com/infinitered/ignite",children:"Ignite"})," for a new boilerplate release (Code name: Bowser)"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"shoutem",children:"Shoutem"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Improving the development flow on Shoutem. We want to streamline the process from creating an app to first custom screen and make it really easy, thus lowering the barrier for new React Native developers. Prepared a few workshops to test out new features. We also improved ",(0,i.jsx)(t.a,{href:"https://github.com/shoutem/cli",children:"Shoutem CLI"})," to support new flows."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/shoutem/ui",children:"Shoutem UI"})," received a few component improvements and bugfixes. We also checked compatibility with latest React Native versions."]}),"\n",(0,i.jsxs)(t.li,{children:["Shoutem platform received a few notable updates, new integrations are available as part of the ",(0,i.jsx)(t.a,{href:"https://github.com/shoutem/extensions",children:"open-source extensions project"}),". We are really excited to see active development on Shoutem extensions from other developers. We actively contact and offer advice and guidance about their extensions."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"next-session",children:"Next session"}),"\n",(0,i.jsxs)(t.p,{children:["The next session is scheduled for Wednesday 6, December 2017. Feel free to ping me ",(0,i.jsx)(t.a,{href:"https://twitter.com/TomislavTenodi",children:"on Twitter"})," if you have any suggestion on how we should improve the output of the meeting."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},71426:(e,t,n)=>{var i=n(27378),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var i,r={},h=null,c=null;for(i in void 0!==n&&(h=""+n),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,i)&&!l.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:o,type:e,key:h,ref:c,props:r,_owner:s.current}}t.Fragment=r,t.jsx=h,t.jsxs=h},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>r});var i=n(27378);const o=i.createContext({});function r(e){const t=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:r(e),i.createElement(o.Provider,{value:s},t)}}}]);