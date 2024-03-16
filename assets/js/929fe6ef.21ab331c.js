/*! For license information please see 929fe6ef.21ab331c.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[71553],{12068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=n(24246),r=n(71670),a=n(48375),s=n(86386),o=n(11674);const l={id:"security",title:"Security"},c=void 0,d={id:"security",title:"Security",description:"Security is often overlooked when building apps. It is true that it is impossible to build software that is completely impenetrable\u2014we\u2019ve yet to invent a completely impenetrable lock (bank vaults do, after all, still get broken into). However, the probability of falling victim to a malicious attack or being exposed for a security vulnerability is inversely proportional to the effort you\u2019re willing to put in to protecting your application against any such eventuality. Although an ordinary padlock is pickable, it is still much harder to get past than a cabinet hook!",source:"@site/versioned_docs/version-0.70/security.md",sourceDirName:".",slug:"/security",permalink:"/docs/0.70/security",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/security.md",tags:[],version:"0.70",lastUpdatedAt:1679052568,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"security",title:"Security"},sidebar:"docs",previous:{title:"Networking",permalink:"/docs/0.70/network"},next:{title:"Accessibility",permalink:"/docs/0.70/accessibility"}},u={},h=[{value:"Storing Sensitive Info",id:"storing-sensitive-info",level:2},{value:"Async Storage",id:"async-storage",level:3},{value:"Developer Notes",id:"developer-notes",level:4},{value:"Secure Storage",id:"secure-storage",level:3},{value:"iOS - Keychain Services",id:"ios---keychain-services",level:4},{value:"Android - Secure Shared Preferences",id:"android---secure-shared-preferences",level:4},{value:"Android - Keystore",id:"android---keystore",level:4},{value:"Authentication and Deep Linking",id:"authentication-and-deep-linking",level:2},{value:"OAuth2 and Redirects",id:"oauth2-and-redirects",level:3},{value:"Network Security",id:"network-security",level:2},{value:"SSL Pinning",id:"ssl-pinning",level:3},{value:"Summary",id:"summary",level:2}];function p(e){const t=Object.assign({p:"p",h2:"h2",a:"a",strong:"strong",blockquote:"blockquote",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h4:"h4",ul:"ul",li:"li",code:"code",img:"img"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Security is often overlooked when building apps. It is true that it is impossible to build software that is completely impenetrable\u2014we\u2019ve yet to invent a completely impenetrable lock (bank vaults do, after all, still get broken into). However, the probability of falling victim to a malicious attack or being exposed for a security vulnerability is inversely proportional to the effort you\u2019re willing to put in to protecting your application against any such eventuality. Although an ordinary padlock is pickable, it is still much harder to get past than a cabinet hook!"}),"\n",(0,i.jsx)("img",{src:"/docs/assets/d_security_chart.svg",width:283,alt:" ",style:{float:"right"}}),"\n",(0,i.jsx)(t.p,{children:"In this guide, you will learn about best practices for storing sensitive information, authentication, network security, and tools that will help you secure your app. This is not a preflight checklist\u2014it is a catalogue of options, each of which will help further protect your app and users."}),"\n",(0,i.jsx)(t.h2,{id:"storing-sensitive-info",children:"Storing Sensitive Info"}),"\n",(0,i.jsxs)(t.p,{children:["Never store sensitive API keys in your app code. Anything included in your code could be accessed in plain text by anyone inspecting the app bundle. Tools like ",(0,i.jsx)(t.a,{href:"https://github.com/goatandsheep/react-native-dotenv",children:"react-native-dotenv"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/luggit/react-native-config/",children:"react-native-config"})," are great for adding environment-specific variables like API endpoints, but they should not be confused with server-side environment variables, which can often contain secrets and API keys."]}),"\n",(0,i.jsx)(t.p,{children:"If you must have an API key or a secret to access some resource from your app, the most secure way to handle this would be to build an orchestration layer between your app and the resource. This could be a serverless function (e.g. using AWS Lambda or Google Cloud Functions) which can forward the request with the required API key or secret. Secrets in server side code cannot be accessed by the API consumers the same way secrets in your app code can."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"For persisted user data, choose the right type of storage based on its sensitivity."})," As your app is used, you\u2019ll often find the need to save data on the device, whether to support your app being used offline, cut down on network requests or save your user\u2019s access token between sessions so they wouldn\u2019t have to re-authenticate each time they use the app."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Persisted vs unpersisted"})," \u2014 persisted data is written to the device\u2019s disk, which lets the data be read by your app across application launches without having to do another network request to fetch it or asking the user to re-enter it. But this also can make that data more vulnerable to being accessed by attackers. Unpersisted data is never written to disk\u2014so there's no data to access!"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"async-storage",children:"Async Storage"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/react-native-async-storage/async-storage",children:"Async Storage"})," is a community-maintained module for React Native that provides an asynchronous, unencrypted, key-value store. Async Storage is not shared between apps: every app has its own sandbox environment and has no access to data from other apps."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.th,{children:[(0,i.jsx)(t.strong,{children:"Do"})," use async storage when..."]}),(0,i.jsxs)(t.th,{children:[(0,i.jsx)(t.strong,{children:"Don't"})," use async storage for..."]})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Persisting non-sensitive data across app runs"}),(0,i.jsx)(t.td,{children:"Token storage"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Persisting Redux state"}),(0,i.jsx)(t.td,{children:"Secrets"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Persisting GraphQL state"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Storing global app-wide variables"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"developer-notes",children:"Developer Notes"}),"\n",(0,i.jsx)(a.Z,{groupId:"guide",queryString:!0,defaultValue:"web",values:o.Z.getDevNotesTabs(["web"]),children:(0,i.jsx)(s.Z,{value:"web",children:(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Async Storage is the React Native equivalent of Local Storage from the web"}),"\n"]})})}),"\n",(0,i.jsx)(t.h3,{id:"secure-storage",children:"Secure Storage"}),"\n",(0,i.jsx)(t.p,{children:"React Native does not come bundled with any way of storing sensitive data. However, there are pre-existing solutions for Android and iOS platforms."}),"\n",(0,i.jsx)(t.h4,{id:"ios---keychain-services",children:"iOS - Keychain Services"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/security/keychain_services",children:"Keychain Services"})," allows you to securely store small chunks of sensitive info for the user. This is an ideal place to store certificates, tokens, passwords, and any other sensitive information that doesn\u2019t belong in Async Storage."]}),"\n",(0,i.jsx)(t.h4,{id:"android---secure-shared-preferences",children:"Android - Secure Shared Preferences"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://developer.android.com/reference/android/content/SharedPreferences",children:"Shared Preferences"})," is the Android equivalent for a persistent key-value data store. ",(0,i.jsx)(t.strong,{children:"Data in Shared Preferences is not encrypted by default"}),", but ",(0,i.jsx)(t.a,{href:"https://developer.android.com/topic/security/data",children:"Encrypted Shared Preferences"})," wraps the Shared Preferences class for Android, and automatically encrypts keys and values."]}),"\n",(0,i.jsx)(t.h4,{id:"android---keystore",children:"Android - Keystore"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://developer.android.com/training/articles/keystore",children:"Android Keystore"})," system lets you store cryptographic keys in a container to make it more difficult to extract from the device."]}),"\n",(0,i.jsx)(t.p,{children:"In order to use iOS Keychain services or Android Secure Shared Preferences, you can either write a bridge yourself or use a library which wraps them for you and provides a unified API at your own risk. Some libraries to consider:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.expo.dev/versions/latest/sdk/securestore/",children:"expo-secure-store"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/emeraldsanto/react-native-encrypted-storage",children:"react-native-encrypted-storage"})," - uses Keychain on iOS and EncryptedSharedPreferences on Android."]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/oblador/react-native-keychain",children:"react-native-keychain"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/mCodex/react-native-sensitive-info",children:"react-native-sensitive-info"})," - secure for iOS, but uses Android Shared Preferences for Android (which is not secure by default). There is however a ",(0,i.jsx)(t.a,{href:"https://github.com/mCodex/react-native-sensitive-info/tree/keystore",children:"branch"})," that uses Android Keystore.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/CodingZeal/redux-persist-sensitive-storage",children:"redux-persist-sensitive-storage"})," - wraps react-native-sensitive-info for Redux."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Be mindful of unintentionally storing or exposing sensitive info."})," This could happen accidentally, for example saving sensitive form data in redux state and persisting the whole state tree in Async Storage. Or sending user tokens and personal info to an application monitoring service such as Sentry or Crashlytics."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"authentication-and-deep-linking",children:"Authentication and Deep Linking"}),"\n",(0,i.jsx)("img",{src:"/docs/assets/d_security_deep-linking.svg",width:225,alt:" ",style:{float:"right",margin:"0 0 1em 1em"}}),"\n",(0,i.jsxs)(t.p,{children:["Mobile apps have a unique vulnerability that is non-existent in the web: ",(0,i.jsx)(t.strong,{children:"deep linking"}),". Deep linking is a way of sending data directly to a native application from an outside source. A deep link looks like ",(0,i.jsx)(t.code,{children:"app://"})," where ",(0,i.jsx)(t.code,{children:"app"})," is your app scheme and anything following the // could be used internally to handle the request."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, if you were building an ecommerce app, you could use ",(0,i.jsx)(t.code,{children:"app://products/1"})," to deep link to your app and open the product detail page for a product with id 1. You can think of these kind of like URLs on the web, but with one crucial distinction:"]}),"\n",(0,i.jsx)(t.p,{children:"Deep links are not secure and you should never send any sensitive information in them."}),"\n",(0,i.jsxs)(t.p,{children:["The reason deep links are not secure is because there is no centralized method of registering URL schemes. As an application developer, you can use almost any url scheme you choose by ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app",children:"configuring it in Xcode"})," for iOS or ",(0,i.jsx)(t.a,{href:"https://developer.android.com/training/app-links/deep-linking",children:"adding an intent on Android"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["There is nothing stopping a malicious application from hijacking your deep link by also registering to the same scheme and then obtaining access to the data your link contains. Sending something like ",(0,i.jsx)(t.code,{children:"app://products/1"})," is not harmful, but sending tokens is a security concern."]}),"\n",(0,i.jsxs)(t.p,{children:["When the operating system has two or more applications to choose from when opening a link, Android will show the user a ",(0,i.jsx)(t.a,{href:"https://developer.android.com/training/basics/intents/sending#disambiguation-dialog",children:"Disambiguation dialog"})," and ask them to choose which application to use to open the link. On iOS however, the operating system will make the choice for you, so the user will be blissfully unaware. Apple has made steps to address this issue in later iOS versions (iOS 11) where they instituted a first-come-first-served principle, although this vulnerability could still be exploited in different ways which you can read more about ",(0,i.jsx)(t.a,{href:"https://thehackernews.com/2019/07/ios-custom-url-scheme.html",children:"here"}),". Using ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/ios/universal-links/",children:"universal links"})," will allow linking to content within your app securely in iOS."]}),"\n",(0,i.jsx)(t.h3,{id:"oauth2-and-redirects",children:"OAuth2 and Redirects"}),"\n",(0,i.jsxs)(t.p,{children:["The OAuth2 authentication protocol is incredibly popular nowadays, prided as the most complete and secure protocol around. The OpenID Connect protocol is also based on this. In OAuth2, the user is asked to authenticate via a third party. On successful completion, this third party redirects back to the requesting application with a verification code which can be exchanged for a JWT \u2014 a ",(0,i.jsx)(t.a,{href:"https://jwt.io/introduction/",children:"JSON Web Token"}),". JWT is an open standard for securely transmitting information between parties on the web."]}),"\n",(0,i.jsx)(t.p,{children:"On the web, this redirect step is secure, because URLs on the web are guaranteed to be unique. This is not true for apps because, as mentioned earlier, there is no centralized method of registering URL schemes! In order to address this security concern, an additional check must be added in the form of PKCE."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://oauth.net/2/pkce/",children:"PKCE"}),", pronounced \u201cPixy\u201d stands for Proof of Key Code Exchange, and is an extension to the OAuth 2 spec. This involves adding an additional layer of security which verifies that the authentication and token exchange requests come from the same client. PKCE uses the ",(0,i.jsx)(t.a,{href:"https://www.movable-type.co.uk/scripts/sha256.html",children:"SHA 256"})," Cryptographic Hash Algorithm. SHA 256 creates a unique \u201csignature\u201d for a text or file of any size, but it is:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Always the same length regardless of the input file"}),"\n",(0,i.jsx)(t.li,{children:"Guaranteed to always produce the same result for the same input"}),"\n",(0,i.jsx)(t.li,{children:"One way (that is, you can\u2019t reverse engineer it to reveal the original input)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Now you have two values:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"code_verifier"})," - a large random string generated by the client"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"code_challenge"})," - the SHA 256 of the code_verifier"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["During the initial ",(0,i.jsx)(t.code,{children:"/authorize"})," request, the client also sends the ",(0,i.jsx)(t.code,{children:"code_challenge"})," for the ",(0,i.jsx)(t.code,{children:"code_verifier"})," it keeps in memory. After the authorize request has returned correctly, the client also sends the ",(0,i.jsx)(t.code,{children:"code_verifier"})," that was used to generate the ",(0,i.jsx)(t.code,{children:"code_challenge"}),". The IDP will then calculate the ",(0,i.jsx)(t.code,{children:"code_challenge"}),", see if it matches what was set on the very first ",(0,i.jsx)(t.code,{children:"/authorize"})," request, and only send the access token if the values match."]}),"\n",(0,i.jsxs)(t.p,{children:["This guarantees that only the application that triggered the initial authorization flow would be able to successfully exchange the verification code for a JWT. So even if a malicious application gets access to the verification code, it will be useless on its own. To see this in action, check out ",(0,i.jsx)(t.a,{href:"https://aaronparecki.com/oauth-2-simplified/#mobile-apps",children:"this example"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["A library to consider for native OAuth is ",(0,i.jsx)(t.a,{href:"https://github.com/FormidableLabs/react-native-app-auth",children:"react-native-app-auth"}),". React-native-app-auth is an SDK for communicating with OAuth2 providers. It wraps the native ",(0,i.jsx)(t.a,{href:"https://github.com/openid/AppAuth-iOS",children:"AppAuth-iOS"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/openid/AppAuth-Android",children:"AppAuth-Android"})," libraries and can support PKCE."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"React-native-app-auth can support PKCE only if your Identity Provider supports it."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"OAuth2 with PKCE",src:n(20718).Z+"",width:"1638",height:"2617"})}),"\n",(0,i.jsx)(t.h2,{id:"network-security",children:"Network Security"}),"\n",(0,i.jsxs)(t.p,{children:["Your APIs should always use ",(0,i.jsx)(t.a,{href:"https://www.ssl.com/faqs/faq-what-is-ssl/",children:"SSL encryption"}),". SSL encryption protects against the requested data being read in plain text between when it leaves the server and before it reaches the client. You\u2019ll know the endpoint is secure, because it starts with ",(0,i.jsx)(t.code,{children:"https://"})," instead of ",(0,i.jsx)(t.code,{children:"http://"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"ssl-pinning",children:"SSL Pinning"}),"\n",(0,i.jsxs)(t.p,{children:["Using https endpoints could still leave your data vulnerable to interception. With https, the client will only trust the server if it can provide a valid certificate that is signed by a trusted Certificate Authority that is pre-installed on the client. An attacker could take advantage of this by installing a malicious root CA certificate to the user\u2019s device, so the client would trust all certificates that are signed by the attacker. Thus, relying on certificates alone could still leave you vulnerable to a ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack",children:"man-in-the-middle attack"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"SSL pinning"})," is a technique that can be used on the client side to avoid this attack. It works by embedding (or pinning) a list of trusted certificates to the client during development, so that only the requests signed with one of the trusted certificates will be accepted, and any self-signed certificates will not be."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"When using SSL pinning, you should be mindful of certificate expiry. Certificates expire every 1-2 years and when one does, it\u2019ll need to be updated in the app as well as on the server. As soon as the certificate on the server has been updated, any apps with the old certificate embedded in them will cease to work."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"There is no bulletproof way to handle security, but with conscious effort and diligence, it is possible to significantly reduce the likelihood of a security breach in your application. Invest in security proportional to the sensitivity of the data stored in your application, the number of users, and the damage a hacker could do when gaining access to their account. And remember: it\u2019s significantly harder to access information that was never requested in the first place."})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(p,e)})):p(e)}},86386:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(27378),r=n(38944);const a={tabItem:"tabItem_wHwb"};var s=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&d(e,n,t[n]);return e};function h({children:e,hidden:t,className:n}){return i.createElement("div",u({role:"tabpanel",className:(0,r.Z)(a.tabItem,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>K});var i=n(27378),r=n(38944),a=n(12112),s=n(3620),o=n(69490),l=n(14953),c=n(27886),d=n(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))b.call(t,n)&&v(e,n,t[n]);return e},m=(e,t)=>h(e,p(t));function w(e){var t,n;return null!=(n=null==(t=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}function x(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=null!=t?t:function(e){return w(e).map((({props:{value:e,label:t,attributes:n,default:i}})=>({value:e,label:t,attributes:n,default:i})))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j({value:e,tabValues:t}){return t.some((t=>t.value===e))}function k({queryString:e=!1,groupId:t}){const n=(0,s.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(m(g({},n.location),{search:t.toString()}))}),[r,n])]}function S(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=x(e),[s,l]=(0,i.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!j({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const i=null!=(n=t.find((e=>e.default)))?n:t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[c,u]=k({queryString:n,groupId:r}),[h,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,d.Nk)(t);return[n,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),f=(()=>{const e=null!=c?c:h;return j({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!j({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var A=n(14185);const O={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var _=Object.defineProperty,P=Object.defineProperties,I=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))E.call(t,n)&&C(e,n,t[n]);if(T)for(var n of T(t))q.call(t,n)&&C(e,n,t[n]);return e},L=(e,t)=>P(e,I(t));function N({className:e,block:t,selectedValue:n,selectValue:s,tabValues:o}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,i=l.indexOf(t),r=o[i].value;r!==n&&(c(t),s(r))},u=e=>{var t,n;let i=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;i=null!=(t=l[n])?t:l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;i=null!=(n=l[t])?n:l[l.length-1];break}}null==i||i.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:a})=>i.createElement("li",L(D({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>l.push(e),onKeyDown:u,onClick:d},a),{className:(0,r.Z)("tabs__item",O.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function R({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function V(e){const t=S(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",O.tabList)},i.createElement(N,D(D({},e),t)),i.createElement(R,D(D({},e),t)))}function K(e){const t=(0,A.Z)();return i.createElement(V,D({key:String(t)},e),w(e.children))}},11674:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(63445);const r=!!i.Z.canUseDOM&&navigator.platform.startsWith("Mac"),a=!!i.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:r?"macos":a?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,n)=>{var i=n(27378),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,a={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,i)&&!l.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},20718:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/diagram_pkce-e0b4a829176ac05d07b0bcec73994985.svg"},71670:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>a});var i=n(27378);const r=i.createContext({});function a(e){const t=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||s:a(e),i.createElement(r.Provider,{value:o},t)}}}]);