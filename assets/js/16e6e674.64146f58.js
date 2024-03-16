/*! For license information please see 16e6e674.64146f58.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[55885],{19714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(24246),i=n(71670);const r={title:"React Native in H2 2021",authors:["lunaleaps"],tags:["announcement"]},o=void 0,s={permalink:"/blog/2021/08/19/h2-2021",source:"@site/blog/2021-08-19-h2-2021.md",title:"React Native in H2 2021",description:"Over the past year so much has changed in our world, React Native being no exception. We've welcomed new members to our team (whom we are excited to eventually meet in person!), our projects have matured and new opportunities have arisen. We're excited to share all this with you in this post and others to come!",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:5.055,hasTruncateMarker:!0,authors:[{name:"Luna Wei",title:"Software Engineer at Meta",url:"https://twitter.com/lunaleaps",imageURL:"https://github.com/lunaleaps.png",key:"lunaleaps"}],frontMatter:{title:"React Native in H2 2021",authors:["lunaleaps"],tags:["announcement"]},unlisted:!1,prevItem:{title:"React Native's Many Platform Vision",permalink:"/blog/2021/08/26/many-platform-vision"},nextItem:{title:"Announcing React Native 0.65",permalink:"/blog/2021/08/17/version-065"}},l={authorsImageUrls:[void 0]},c=[{value:"Setting up the Community for Success",id:"setting-up-the-community-for-success",level:2},{value:"Community Engagement",id:"community-engagement",level:3},{value:"New Architecture Rollout and Releases",id:"new-architecture-rollout-and-releases",level:3},{value:"Repository Health",id:"repository-health",level:3},{value:"Pushing the Technology Forward",id:"pushing-the-technology-forward",level:2},{value:"New Architectural Capabilities",id:"new-architectural-capabilities",level:3},{value:"Mobile and Beyond",id:"mobile-and-beyond",level:3},{value:"Messenger Desktop",id:"messenger-desktop",level:4},{value:"React Native in Virtual Reality",id:"react-native-in-virtual-reality",level:4},{value:"Summary",id:"summary",level:3}];function h(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",a:"a",h4:"h4",em:"em"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Over the past year so much has changed in our world, React Native being no exception. We've welcomed new members to our team (whom we are excited to eventually meet in person!), our projects have matured and new opportunities have arisen. We're excited to share all this with you in this post and others to come!"}),"\n",(0,a.jsx)(t.p,{children:"At Facebook, our team works in half-year cycles. Each half we review our strategy, set plans, and share them internally. Today, we want to share our H2 plans with you, our community."}),"\n",(0,a.jsx)(t.p,{children:"H2 2021 is an exciting half for React Native. Our areas of focus include nurturing the community, beginning to roll out the new architecture to open source, and pushing the technology forward."}),"\n",(0,a.jsx)(t.h2,{id:"setting-up-the-community-for-success",children:"Setting up the Community for Success"}),"\n",(0,a.jsx)(t.p,{children:"React Native\u2019s open source ecosystem is one of its greatest strengths. We\u2019ve identified the following areas as the best ways to grow our partnership with the community."}),"\n",(0,a.jsx)(t.h3,{id:"community-engagement",children:"Community Engagement"}),"\n",(0,a.jsx)(t.p,{children:"In order for everyone to move in the same direction, we want to continually communicate our vision and status to the community. Sharing our incremental progress publicly isn\u2019t second-nature for us (yet). This half, we are committing to a more consistent content schedule that exercises the muscle and sets up processes to reduce friction. Beyond sharing our updates, we also want to use this opportunity to showcase the accomplishments of the community."}),"\n",(0,a.jsx)(t.h3,{id:"new-architecture-rollout-and-releases",children:"New Architecture Rollout and Releases"}),"\n",(0,a.jsxs)(t.p,{children:["In H1, ",(0,a.jsx)(t.a,{href:"https://twitter.com/reactnative/status/1415099806507167745",children:"we finished rolling out the new React Native architecture"})," to all React Native mobile products in the Facebook app. Facebook is made up of surfaces like Marketplace Tab and Dating Profile, and we have migrated over 1000 surfaces!"]}),"\n",(0,a.jsx)(t.p,{children:"In H2, we are beginning to bring this new architecture to the community. We have put together a playbook that shows how to migrate libraries and applications. We have already shared drafts with early partners that maintain popular React Native libraries. We expect to get their feedback, support them in upgrading their libraries, and learn how to improve our playbook and implementations. We plan on sharing the playbook more broadly as soon as the work stabilizes."}),"\n",(0,a.jsx)(t.p,{children:"We are also focused on improving React Native\u2019s release process. We will need frequent reliable releases to progressively ship the new React Native architecture. Our aim is to catch release-blockers earlier and to reduce the turn-around time. This will enable more predictable release timelines with less burden on contributors and developers."}),"\n",(0,a.jsx)(t.h3,{id:"repository-health",children:"Repository Health"}),"\n",(0,a.jsxs)(t.p,{children:["When developers evaluate a technology, an essential signal is the health of its repository. This impression is informed by signals such as pull request throughput, stars, age of last commit, and others. The React Native repository has historically lacked a process to ensure that issues and pull requests are reviewed in a timely manner. Our work this half is two-fold: we need to resolve a large backlog of contributions, and we need to build sustainable practices for handling incoming contributions. We hope this work will also set us up for success for more engagement from the community via issues and PRs as the community starts using the new architecture. You can follow our progress on the backlog using this ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/react-native/projects/17",children:"project board."})]}),"\n",(0,a.jsx)(t.h2,{id:"pushing-the-technology-forward",children:"Pushing the Technology Forward"}),"\n",(0,a.jsx)(t.h3,{id:"new-architectural-capabilities",children:"New Architectural Capabilities"}),"\n",(0,a.jsx)(t.p,{children:"As mentioned, our new architecture recently finished rolling out to the Facebook mobile apps! We are already building new capabilities that will change the performance curve for React Native. This includes supporting Concurrent Rendering in React Native. Concurrent Rendering enables React to pause and resume work and quickly respond to high priority events like a touch gesture. Something we are also really excited about is using Concurrent Rendering to make use of idle CPU cycles for rendering offscreen product features without slowing down onscreen user interactions."}),"\n",(0,a.jsx)(t.h3,{id:"mobile-and-beyond",children:"Mobile and Beyond"}),"\n",(0,a.jsx)(t.p,{children:"We have had overwhelming success with powering mobile experiences using React at Facebook, and we have seen amazing mobile products from our partners. Now we want to bring that success to more platforms! We believe that targeting many platforms lets us learn new lessons and further improve our offering on mobile platforms. (We will share more about this in a later post.) The exciting news is that we\u2019ve already started taking steps towards making this a reality!"}),"\n",(0,a.jsx)(t.h4,{id:"messenger-desktop",children:"Messenger Desktop"}),"\n",(0,a.jsxs)(t.p,{children:["Last summer, we ",(0,a.jsx)(t.a,{href:"https://twitter.com/reactnative/status/1286061933293010944",children:"expanded our focus beyond mobile"})," by partnering with Microsoft to accelerate React Native development on Windows and macOS. We partnered with the Messenger team at Facebook to enable user experiences that are only possible on desktop, and to deliver huge performance wins over their previous Electron implementation. Our vision is to combine high quality, delightful, ",(0,a.jsx)(t.em,{children:"native"})," desktop user experiences with the great developer experience of React Native."]}),"\n",(0,a.jsx)(t.p,{children:"The Messenger team has ambitious plans for the Messenger desktop apps, including finding new ways to further unleash the unique capabilities of desktop platforms and large screens. We are excited to continue enabling these experiences by investing more into React Native on desktop."}),"\n",(0,a.jsx)(t.h4,{id:"react-native-in-virtual-reality",children:"React Native in Virtual Reality"}),"\n",(0,a.jsx)(t.p,{children:"Oculus has long used React Native to power core experiences like Store, where people buy applications and games in VR. In H2, React Native and Oculus are partnering to bring new exciting experiences to VR. We are also bringing optimizations and improvements from VR to mobile, and from mobile to VR. This will include expanding React Native to support unique requirements of VR \u2014 from new input types like controllers to new memory usage optimizations. This is the start of an exciting journey to explore and influence how immersive experiences can built for VR using React Native."}),"\n",(0,a.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(t.p,{children:["We hope our H2 plans excite you as much as it does us, and we look forward to sharing more with you in the upcoming months! We will also be attending React Native EU on September 1, 2021 where teammate Joshua Gross (",(0,a.jsx)(t.a,{href:"https://twitter.com/joshuaisgross",children:"@joshuaisgross"}),") will share how we replaced the architecture for the world\u2019s largest React Native app. ",(0,a.jsx)(t.a,{href:"https://www.react-native.eu/",children:"Register for React Native EU"})," if you haven\u2019t already! In the meantime, connect with us on Twitter (",(0,a.jsx)(t.a,{href:"https://twitter.com/reactnative",children:"@reactnative"}),") for updates on events, our roadmap, and much more."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},71426:(e,t,n)=>{var a=n(27378),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,r={},c=null,h=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)o.call(t,a)&&!l.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:i,type:e,key:c,ref:h,props:r,_owner:s.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>r});var a=n(27378);const i=a.createContext({});function r(e){const t=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(i.Provider,{value:s},t)}}}]);