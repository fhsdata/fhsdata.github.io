/*! For license information please see 34190e7c.763be0ab.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[97269],{40072:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var r=a(24246),n=a(71670);const o={title:"A Monthly Release Cadence: Releasing December and January RC",author:"Eric Vicenti",authorTitle:"Engineer at Facebook",authorURL:"https://twitter.com/EricVicenti",authorImageURL:"https://secure.gravatar.com/avatar/077ad5372b65567fe952a99f3b627048?s=128",authorTwitter:"EricVicenti",tags:["announcement"]},s=void 0,i={permalink:"/blog/2017/01/07/monthly-release-cadence",source:"@site/blog/2017-01-07-monthly-release-cadence.md",title:"A Monthly Release Cadence: Releasing December and January RC",description:"Shortly after React Native was introduced, we started releasing every two weeks to help the community adopt new features, while keeping versions stable for production use. At Facebook we had to stabilize the codebase every two weeks for the release of our production iOS apps, so we decided to release the open source versions at the same pace. Now, many of the Facebook apps ship once per week, especially on Android. Because we ship from master weekly, we need to keep it quite stable. So the bi-weekly release cadence doesn't even benefit internal contributors anymore.",date:"2017-01-07T00:00:00.000Z",formattedDate:"January 7, 2017",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:1.83,hasTruncateMarker:!1,authors:[{name:"Eric Vicenti",title:"Engineer at Facebook",url:"https://twitter.com/EricVicenti",imageURL:"https://secure.gravatar.com/avatar/077ad5372b65567fe952a99f3b627048?s=128"}],frontMatter:{title:"A Monthly Release Cadence: Releasing December and January RC",author:"Eric Vicenti",authorTitle:"Engineer at Facebook",authorURL:"https://twitter.com/EricVicenti",authorImageURL:"https://secure.gravatar.com/avatar/077ad5372b65567fe952a99f3b627048?s=128",authorTwitter:"EricVicenti",tags:["announcement"]},unlisted:!1,prevItem:{title:"Using Native Driver for Animated",permalink:"/blog/2017/02/14/using-native-driver-for-animated"},nextItem:{title:"Easier Upgrades Thanks to Git",permalink:"/blog/2016/12/05/easier-upgrades"}},c={authorsImageUrls:[void 0]},h=[{value:"Now releasing monthly",id:"now-releasing-monthly",level:3},{value:"Use the current month for the best support",id:"use-the-current-month-for-the-best-support",level:3}];function l(e){const t=Object.assign({p:"p",a:"a",h3:"h3",code:"code",pre:"pre"},(0,n.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Shortly after React Native was introduced, we started releasing every two weeks to help the community adopt new features, while keeping versions stable for production use. At Facebook we had to stabilize the codebase every two weeks for the release of our production iOS apps, so we decided to release the open source versions at the same pace. Now, many of the Facebook apps ship once per week, especially on Android. Because we ship from master weekly, we need to keep it quite stable. So the bi-weekly release cadence doesn't even benefit internal contributors anymore."}),"\n",(0,r.jsxs)(t.p,{children:["We frequently hear feedback from the community that the release rate is hard to keep up with. Tools like ",(0,r.jsx)(t.a,{href:"https://expo.io/",children:"Expo"})," had to skip every other release in order to manage the rapid change in version. So it seems clear that the bi-weekly releases did not serve the community well."]}),"\n",(0,r.jsx)(t.h3,{id:"now-releasing-monthly",children:"Now releasing monthly"}),"\n",(0,r.jsxs)(t.p,{children:["We're happy to announce the new monthly release cadence, and the December 2016 release, ",(0,r.jsx)(t.code,{children:"v0.40"}),", which has been stabilizing for all last month and is ready to adopt. (Just make sure to ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/react-native/releases/tag/v0.40.0",children:"update headers in your native modules on iOS"}),")."]}),"\n",(0,r.jsx)(t.p,{children:"Although it may vary a few days to avoid weekends or handle unforeseen issues, you can now expect a given release to be available on the first day of the month, and released on the last."}),"\n",(0,r.jsx)(t.h3,{id:"use-the-current-month-for-the-best-support",children:"Use the current month for the best support"}),"\n",(0,r.jsxs)(t.p,{children:["The January release candidate is ready to try, and you can ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/react-native/releases/tag/v0.41.0-rc.0",children:"see what's new here"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"To see what changes are coming and provide better feedback to React Native contributors, always use the current month's release candidate when possible. By the time each version is released at the end of the month, the changes it contains will have been shipped in production Facebook apps for over two weeks."}),"\n",(0,r.jsxs)(t.p,{children:["You can easily upgrade your app with the new ",(0,r.jsx)(t.a,{href:"/blog/2016/12/05/easier-upgrades",children:"react-native-git-upgrade"})," command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install -g react-native-git-upgrade\nreact-native-git-upgrade 0.41.0-rc.0\n"})}),"\n",(0,r.jsx)(t.p,{children:"We hope this simpler approach will make it easier for the community to keep track of changes in React Native, and to adopt new versions as quickly as possible!"}),"\n",(0,r.jsxs)(t.p,{children:["(Thanks go to ",(0,r.jsx)(t.a,{href:"https://github.com/mkonicek",children:"Martin Konicek"})," for coming up with this plan and ",(0,r.jsx)(t.a,{href:"https://github.com/grabbou",children:"Mike Grabowski"})," for making it happen)"]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},71426:(e,t,a)=>{var r=a(27378),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,a){var r,o={},h=null,l=null;for(r in void 0!==a&&(h=""+a),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:n,type:e,key:h,ref:l,props:o,_owner:i.current}}t.Fragment=o,t.jsx=h,t.jsxs=h},24246:(e,t,a)=>{e.exports=a(71426)},71670:(e,t,a)=>{a.d(t,{Zo:()=>i,ah:()=>o});var r=a(27378);const n=r.createContext({});function o(e){const t=r.useContext(n);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||s:o(e),r.createElement(n.Provider,{value:i},t)}}}]);