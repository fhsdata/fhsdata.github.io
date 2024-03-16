/*! For license information please see 8d2a3815.bfee7a1e.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[88251],{69259:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=a(24246),n=a(71670);const o={title:"San Francisco Meetup Recap",author:"H\xe9ctor Ramos",authorTitle:"Developer Advocate at Facebook",authorURL:"https://twitter.com/hectorramos",authorImageURL:"https://s.gravatar.com/avatar/f2223874e66e884c99087e452501f2da?s=128",authorTwitter:"hectorramos",hero:"/blog/img/rnmsf-august-2016-hero.jpg",tags:["events"]},r=void 0,s={permalink:"/blog/2016/08/12/react-native-meetup-san-francisco",source:"@site/blog/2016-08-12-react-native-meetup-san-francisco.md",title:"San Francisco Meetup Recap",description:"Last week I had the opportunity to attend the React Native Meetup at Zynga\u2019s San Francisco office. With around 200 people in attendance, it served as a great place to meet other developers near me that are also interested in React Native.",date:"2016-08-12T00:00:00.000Z",formattedDate:"August 12, 2016",tags:[{label:"events",permalink:"/blog/tags/events"}],readingTime:8.3,hasTruncateMarker:!1,authors:[{name:"H\xe9ctor Ramos",title:"Developer Advocate at Facebook",url:"https://twitter.com/hectorramos",imageURL:"https://s.gravatar.com/avatar/f2223874e66e884c99087e452501f2da?s=128"}],frontMatter:{title:"San Francisco Meetup Recap",author:"H\xe9ctor Ramos",authorTitle:"Developer Advocate at Facebook",authorURL:"https://twitter.com/hectorramos",authorImageURL:"https://s.gravatar.com/avatar/f2223874e66e884c99087e452501f2da?s=128",authorTwitter:"hectorramos",hero:"/blog/img/rnmsf-august-2016-hero.jpg",tags:["events"]},unlisted:!1,prevItem:{title:"Right-to-Left Layout Support For React Native Apps",permalink:"/blog/2016/08/19/right-to-left-support-for-react-native-apps"},nextItem:{title:"Toward Better Documentation",permalink:"/blog/2016/07/06/toward-better-documentation"}},c={authorsImageUrls:[void 0]},d=[{value:"Rapid Prototyping in React at Zynga",id:"rapid-prototyping-in-react-at-zynga",level:2},{value:"Designing APIs for React Native at Netflix",id:"designing-apis-for-react-native-at-netflix",level:2},{value:"Bridging the Gap, Using React Native in Existing Codebases",id:"bridging-the-gap-using-react-native-in-existing-codebases",level:2},{value:"The Navigation Problem",id:"the-navigation-problem",level:3},{value:"Closing Remarks",id:"closing-remarks",level:2}];function h(e){const t=Object.assign({p:"p",a:"a",img:"img",ul:"ul",li:"li",code:"code",h2:"h2",strong:"strong",h3:"h3"},(0,n.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Last week I had the opportunity to attend the ",(0,i.jsx)(t.a,{href:"https://www.meetup.com/React-Native-San-Francisco/photos/27168649/#452793854",children:"React Native Meetup"})," at Zynga\u2019s San Francisco office. With around 200 people in attendance, it served as a great place to meet other developers near me that are also interested in React Native."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(10780).Z+"",width:"1200",height:"630"})}),"\n",(0,i.jsx)(t.p,{children:"I was particularly interested in learning more about how React and React Native are used at companies like Zynga, Netflix, and Airbnb. The agenda for the night would be as follows:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Rapid Prototyping in React"}),"\n",(0,i.jsx)(t.li,{children:"Designing APIs for React Native"}),"\n",(0,i.jsx)(t.li,{children:"Bridging the Gap: Using React Native in Existing Codebases"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"But first, the event started off with a quick introduction and a brief recap of recent news:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Did you know that React Native is now the ",(0,i.jsx)(t.a,{href:"https://twitter.com/jamespearce/status/759637111880359937",children:"top Java repository on GitHub"}),"?"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/rnpm/rnpm",children:"rnpm"})," is now part of React Native core! You can now use ",(0,i.jsx)(t.code,{children:"react-native link"})," in place of ",(0,i.jsx)(t.code,{children:"rnpm link"})," to ",(0,i.jsx)(t.a,{href:"/docs/linking-libraries-ios",children:"install libraries with native dependencies"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"The React Native Meetup community is growing fast! There are now over 4,800 developers across a variety of React Native meetup groups all over the globe."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.a,{href:"https://www.meetup.com/find/?allMeetups=false&keywords=react+native&radius=Infinity&userFreeform=San+Francisco%2C+CA&mcId=z94105&mcName=San+Francisco%2C+CA&sort=recommended&eventFilter=mysugg",children:"one of these meetups"})," is held near you, I highly recommend attending!"]}),"\n",(0,i.jsx)(t.h2,{id:"rapid-prototyping-in-react-at-zynga",children:"Rapid Prototyping in React at Zynga"}),"\n",(0,i.jsx)(t.p,{children:"The first round of news was followed by a quick introduction by Zynga, our hosts for the evening. Abhishek Chadha talked about how they use React to quickly prototype new experiences on mobile, demoing a quick prototype of a Draw Something-like app. They use a similar approach as React Native, providing access to native APIs via a bridge. This was demonstrated when Abhishek used the device's camera to snap a photo of the audience and then drew a hat on someone's head."}),"\n",(0,i.jsx)(t.h2,{id:"designing-apis-for-react-native-at-netflix",children:"Designing APIs for React Native at Netflix"}),"\n",(0,i.jsxs)(t.p,{children:["Up next, the first featured talk of the evening. ",(0,i.jsx)(t.a,{href:"https://twitter.com/clarler",children:"Clarence Leung"}),", Senior Software Engineer at Netflix, presented his talk on Designing APIs for React Native. First he noted the two main types of libraries one may work on: components such as tab bars and date pickers, and libraries that provide access to native services such as the camera roll or in-app payments. There are two ways one may approach when building a library for use in React Native:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Provide platform-specific components"}),"\n",(0,i.jsx)(t.li,{children:"A cross-platform library with a similar API for both Android and iOS"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Each approach has its own considerations, and it\u2019s up to you to determine what works best for your needs."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Approach #1"})}),"\n",(0,i.jsx)(t.p,{children:"As an example of platform-specific components, Clarence talked about the DatePickerIOS and DatePickerAndroid from core React Native. On iOS, date pickers are rendered as part of the UI and can be easily embedded in an existing view, while date pickers on Android are presented modally. It makes sense to provide separate components in this case."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Approach #2"})}),"\n",(0,i.jsxs)(t.p,{children:["Photo pickers, on the other hand, are treated similarly on Android and iOS. There are some slight differences \u2014 Android does not group photos into folders like iOS does with Selfies, for example \u2014 but those are easily handled using ",(0,i.jsx)(t.code,{children:"if"})," statements and the ",(0,i.jsx)(t.code,{children:"Platform"})," component."]}),"\n",(0,i.jsx)(t.p,{children:"Regardless of which approach you settle on, it\u2019s a good idea to minimize the API surface and build app-specific libraries. For example, iOS\u2019s In-App Purchase framework supports one-time, consumable purchases, as well as renewable subscriptions. If your app will only need to support consumable purchases, you may get away with dropping support for subscriptions in your cross-platform library."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(47919).Z+"",width:"650",height:"407"})}),"\n",(0,i.jsx)(t.p,{children:"There was a brief Q&A session at the end of Clarence\u2019s talk. One of the interesting tid bits that came out of it was that around 80% of the React Native code written for these libraries at Netflix is shared across both Android and iOS."}),"\n",(0,i.jsx)(t.h2,{id:"bridging-the-gap-using-react-native-in-existing-codebases",children:"Bridging the Gap, Using React Native in Existing Codebases"}),"\n",(0,i.jsxs)(t.p,{children:["The final talk of the night was by ",(0,i.jsx)(t.a,{href:"https://twitter.com/intelligibabble",children:"Leland Richardson"})," from Airbnb. The talk was focused on the use of React Native in existing codebases. I already know how easy it is to write a new app from scratch using React Native, so I was very interested to hear about Airbnb\u2019s experience adopting React Native in their existing native apps."]}),"\n",(0,i.jsx)(t.p,{children:"Leland started off by talking about greenfield apps versus brownfield apps. Greenfield means to start a project without the need to consider any prior work. This is in contrast to brownfield projects where you need to take into account the existing project\u2019s requirements, development processes, and all of the teams various needs."}),"\n",(0,i.jsx)(t.p,{children:"When you\u2019re working on a greenfield app, the React Native CLI sets up a single repository for both Android and iOS and everything just works. The first challenge against using React Native at Airbnb was the fact that the Android and iOS app each had their own repository. Multi-repo companies have some hurdles to get past before they can adopt React Native."}),"\n",(0,i.jsx)(t.p,{children:"To get around this, Airbnb first set up a new repo for the React Native codebase. They used their continuous integration servers to mirror the Android and iOS repos into this new repo. After tests are run and the bundle is built, the build artifacts are synced back to the Android and iOS repos. This allows the mobile engineers to work on native code without altering their development environment. Mobile engineers don't need to install npm, run the packager, or remember to build the JavaScript bundle. The engineers writing actual React Native code do not have to worry about syncing their code across Android and iOS, as they work on the React Native repository directly."}),"\n",(0,i.jsx)(t.p,{children:"This does come with some drawbacks, mainly they could not ship atomic updates. Changes that require a combination of native and JavaScript code would require three separate pull requests, all of which had to be carefully landed. In order to avoid conflicts, CI will fail to land changes back to the Android and iOS repos if master has changed since the build started. This would cause long delays during high commit frequency days (such as when new releases are cut)."}),"\n",(0,i.jsx)(t.p,{children:"Airbnb has since moved to a mono repo approach. Fortunately this was already under consideration, and once the Android and iOS teams became comfortable with using React Native they were happy to accelerate the move towards the mono repo."}),"\n",(0,i.jsx)(t.p,{children:"This has solved most of the issues they had with the split repo approach. Leland did note that this does cause a higher strain on the version control servers, which may be an issue for smaller companies."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(86121).Z+"",width:"650",height:"472"})}),"\n",(0,i.jsx)(t.h3,{id:"the-navigation-problem",children:"The Navigation Problem"}),"\n",(0,i.jsx)(t.p,{children:"The second half of Leland's talk focused on a topic that is dear to me: the Navigation problem in React Native. He talked about the abundance of navigation libraries in React Native, both first party and third party. NavigationExperimental was mentioned as something that seemed promising, but ended up not being well suited for their use case."}),"\n",(0,i.jsx)(t.p,{children:"In fact, none of the existing navigation libraries seem to work well for brownfield apps. A brownfield app requires that the navigation state be fully owned by the native app. For example, if a user\u2019s session expires while a React Native view is being presented, the native app should be able to take over and present a login screen as needed."}),"\n",(0,i.jsx)(t.p,{children:"Airbnb also wanted to avoid replacing native navigation bars with JavaScript versions as part of a transition, as the effect could be jarring. Initially they limited themselves to modally presented views, but this obviously presented a problem when it came to adopting React Native more widely within their apps."}),"\n",(0,i.jsxs)(t.p,{children:["They decided that they needed their own library. The library is called ",(0,i.jsx)(t.code,{children:"airbnb-navigation"}),". The library has not yet being open sourced as it is strongly tied to Airbnb\u2019s codebase, but it is something they\u2019d like to release by the end of the year."]}),"\n",(0,i.jsx)(t.p,{children:"I won\u2019t go into much detail into the library\u2019s API, but here are some of the key takeaways:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"One must preregister scenes ahead of time"}),"\n",(0,i.jsxs)(t.li,{children:["Each scene is displayed within its own ",(0,i.jsx)(t.code,{children:"RCTRootView"}),". They are presented natively on each platform (e.g. ",(0,i.jsx)(t.code,{children:"UINavigationController"}),"s are used on iOS)."]}),"\n",(0,i.jsxs)(t.li,{children:["The main ",(0,i.jsx)(t.code,{children:"ScrollView"})," in a scene should be wrapped in a ",(0,i.jsx)(t.code,{children:"ScrollScene"})," component. Doing so allows you to take advantage of native behaviors such as tapping on the status bar to scroll to the top on iOS."]}),"\n",(0,i.jsx)(t.li,{children:"Transitions between scenes are handled natively, no need to worry about performance."}),"\n",(0,i.jsx)(t.li,{children:"The Android back button is automatically supported."}),"\n",(0,i.jsx)(t.li,{children:"They can take advantage of View Controller based navigation bar styling via a Navigator.Config UI-less component."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"There\u2019s also some considerations to keep in mind:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The navigation bar is not easily customized in JavaScript, as it is a native component. This is intentional, as using native navigation bars is a hard requirement for this type of library."}),"\n",(0,i.jsx)(t.li,{children:"ScreenProps must be serialized/de-serialized whenever they're sent through the bridge, so care must be taken if sending too much data here."}),"\n",(0,i.jsx)(t.li,{children:"Navigation state is owned by the native app (also a hard requirement for the library), so things like Redux cannot manipulate navigation state."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Leland's talk was also followed by a Q&A session. Overall, Airbnb is satisfied with React Native. They\u2019re interested in using Code Push to fix any issues without going through the App Store, and their engineers love Live Reload, as they don't have to wait for the native app to be rebuilt after every minor change."}),"\n",(0,i.jsx)(t.h2,{id:"closing-remarks",children:"Closing Remarks"}),"\n",(0,i.jsx)(t.p,{children:"The event ended with some additional React Native news:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Deco announced their ",(0,i.jsx)(t.a,{href:"https://www.decosoftware.com/showcase",children:"React Native Showcase"}),", and invited everyone to add their app to the list."]}),"\n",(0,i.jsxs)(t.li,{children:["The recent ",(0,i.jsx)(t.a,{href:"/blog/2016/07/06/toward-better-documentation",children:"documentation overhaul"})," got a shoutout!"]}),"\n",(0,i.jsxs)(t.li,{children:["Devin Abbott, one of the creators of Deco IDE, will be teaching an introductory ",(0,i.jsx)(t.a,{href:"https://www.decosoftware.com/course",children:"React Native course"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(85196).Z+"",width:"650",height:"415"})}),"\n",(0,i.jsx)(t.p,{children:"Meetups provide a good opportunity to meet and learn from other developers in the community. I'm looking forward to attending more React Native meetups in the future. If you make it up to one of these, please look out for me and let me know how we can make React Native work better for you!"})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},71426:(e,t,a)=>{var i=a(27378),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,a){var i,o={},d=null,h=null;for(i in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(h=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:n,type:e,key:d,ref:h,props:o,_owner:s.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},24246:(e,t,a)=>{e.exports=a(71426)},86121:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/rnmsf-august-2016-airbnb-82bbdf39f62d23c89a97181202f24104.jpg"},85196:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/rnmsf-august-2016-docs-bb75ef99473c1d947a3c4020cd1101bc.jpg"},10780:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/rnmsf-august-2016-hero-141e9a4052f9d7629686335b3d519bb9.jpg"},47919:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/rnmsf-august-2016-netflix-c3a98ad2c4990dde5f32a78a953b6b02.jpg"},71670:(e,t,a)=>{a.d(t,{Zo:()=>s,ah:()=>o});var i=a(27378);const n=i.createContext({});function o(e){const t=i.useContext(n);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function s({components:e,children:t,disableParentContext:a}){let s;return s=a?"function"==typeof e?e({}):e||r:o(e),i.createElement(n.Provider,{value:s},t)}}}]);