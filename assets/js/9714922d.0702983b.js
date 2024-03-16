/*! For license information please see 9714922d.0702983b.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[68819],{59239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=t(24246),s=t(71670),r=t(48375),o=t(86386),i=t(11674);const l={id:"network",title:"Networking"},c=void 0,d={id:"network",title:"Networking",description:"Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server.",source:"@site/versioned_docs/version-0.71/network.md",sourceDirName:".",slug:"/network",permalink:"/docs/0.71/network",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/network.md",tags:[],version:"0.71",lastUpdatedAt:1679052568,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"network",title:"Networking"},sidebar:"docs",previous:{title:"Gesture Responder System",permalink:"/docs/0.71/gesture-responder-system"},next:{title:"Security",permalink:"/docs/0.71/security"}},u={},p=[{value:"Using Fetch",id:"using-fetch",level:2},{value:"Making requests",id:"making-requests",level:3},{value:"Handling the response",id:"handling-the-response",level:3},{value:"Using Other Networking Libraries",id:"using-other-networking-libraries",level:2},{value:"WebSocket Support",id:"websocket-support",level:2},{value:"Known Issues with <code>fetch</code> and cookie based authentication",id:"known-issues-with-fetch-and-cookie-based-authentication",level:2},{value:"Configuring NSURLSession on iOS",id:"configuring-nsurlsession-on-ios",level:2}];function h(e){const n=Object.assign({p:"p",h2:"h2",a:"a",code:"code",h3:"h3",pre:"pre",div:"div",blockquote:"blockquote",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server."}),"\n",(0,a.jsx)(n.h2,{id:"using-fetch",children:"Using Fetch"}),"\n",(0,a.jsxs)(n.p,{children:["React Native provides the ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"Fetch API"})," for your networking needs. Fetch will seem familiar if you have used ",(0,a.jsx)(n.code,{children:"XMLHttpRequest"})," or other networking APIs before. You may refer to MDN's guide on ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",children:"Using Fetch"})," for additional information."]}),"\n",(0,a.jsx)(n.h3,{id:"making-requests",children:"Making requests"}),"\n",(0,a.jsx)(n.p,{children:"In order to fetch content from an arbitrary URL, you can pass the URL to fetch:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"fetch('https://mywebsite.com/mydata.json');\n"})}),"\n",(0,a.jsx)(n.p,{children:"Fetch also takes an optional second argument that allows you to customize the HTTP request. You may want to specify additional headers, or make a POST request:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"fetch('https://mywebsite.com/endpoint/', {\n  method: 'POST',\n  headers: {\n    Accept: 'application/json',\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({\n    firstParam: 'yourValue',\n    secondParam: 'yourOtherValue',\n  }),\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Take a look at the ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request",children:"Fetch Request docs"})," for a full list of properties."]}),"\n",(0,a.jsx)(n.h3,{id:"handling-the-response",children:"Handling the response"}),"\n",(0,a.jsx)(n.p,{children:"The above examples show how you can make a request. In many cases, you will want to do something with the response."}),"\n",(0,a.jsxs)(n.p,{children:["Networking is an inherently asynchronous operation. Fetch method will return a ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:"Promise"})," that makes it straightforward to write code that works in an asynchronous manner:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const getMoviesFromApi = () => {\n  return fetch('https://reactnative.dev/movies.json')\n    .then(response => response.json())\n    .then(json => {\n      return json.movies;\n    })\n    .catch(error => {\n      console.error(error);\n    });\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can also use the ",(0,a.jsx)(n.code,{children:"async"})," / ",(0,a.jsx)(n.code,{children:"await"})," syntax in a React Native app:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const getMoviesFromApiAsync = async () => {\n  try {\n    const response = await fetch(\n      'https://reactnative.dev/movies.json',\n    );\n    const json = await response.json();\n    return json.movies;\n  } catch (error) {\n    console.error(error);\n  }\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Don't forget to catch any errors that may be thrown by ",(0,a.jsx)(n.code,{children:"fetch"}),", otherwise they will be dropped silently."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"syntax",queryString:!0,defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,children:[(0,a.jsx)(o.Z,{value:"functional",children:(0,a.jsxs)(r.Z,{groupId:"language",queryString:!0,defaultValue:i.Z.defaultSnackLanguage,values:i.Z.snackLanguages,children:[(0,a.jsx)(o.Z,{value:"javascript",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"Fetch Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseEffect%2C%20useState%7D%20from%20'react'%3B%5Cnimport%20%7BActivityIndicator%2C%20FlatList%2C%20Text%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BisLoading%2C%20setLoading%5D%20%3D%20useState(true)%3B%5Cn%20%20const%20%5Bdata%2C%20setData%5D%20%3D%20useState(%5B%5D)%3B%5Cn%5Cn%20%20const%20getMovies%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20%20%20try%20%7B%5Cn%20%20%20%20%20%20const%20response%20%3D%20await%20fetch('https%3A%2F%2Freactnative.dev%2Fmovies.json')%3B%5Cn%20%20%20%20%20%20const%20json%20%3D%20await%20response.json()%3B%5Cn%20%20%20%20%20%20setData(json.movies)%3B%5Cn%20%20%20%20%7D%20catch%20(error)%20%7B%5Cn%20%20%20%20%20%20console.error(error)%3B%5Cn%20%20%20%20%7D%20finally%20%7B%5Cn%20%20%20%20%20%20setLoading(false)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20getMovies()%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20padding%3A%2024%7D%7D%3E%5Cn%20%20%20%20%20%20%7BisLoading%20%3F%20(%5Cn%20%20%20%20%20%20%20%20%3CActivityIndicator%20%2F%3E%5Cn%20%20%20%20%20%20)%20%3A%20(%5Cn%20%20%20%20%20%20%20%20%3CFlatList%5Cn%20%20%20%20%20%20%20%20%20%20data%3D%7Bdata%7D%5Cn%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(%7Bid%7D)%20%3D%3E%20id%7D%5Cn%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bitem.title%7D%2C%20%7Bitem.releaseYear%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(o.Z,{value:"typescript",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"Fetch Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BuseEffect%2C%20useState%7D%20from%20'react'%3B%5Cnimport%20%7BActivityIndicator%2C%20FlatList%2C%20Text%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cntype%20Movie%20%3D%20%7B%5Cn%20%20id%3A%20string%3B%5Cn%20%20title%3A%20string%3B%5Cn%20%20releaseYear%3A%20string%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BisLoading%2C%20setLoading%5D%20%3D%20useState(true)%3B%5Cn%20%20const%20%5Bdata%2C%20setData%5D%20%3D%20useState%3CMovie%5B%5D%3E(%5B%5D)%3B%5Cn%5Cn%20%20const%20getMovies%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20%20%20try%20%7B%5Cn%20%20%20%20%20%20const%20response%20%3D%20await%20fetch('https%3A%2F%2Freactnative.dev%2Fmovies.json')%3B%5Cn%20%20%20%20%20%20const%20json%20%3D%20await%20response.json()%3B%5Cn%20%20%20%20%20%20setData(json.movies)%3B%5Cn%20%20%20%20%7D%20catch%20(error)%20%7B%5Cn%20%20%20%20%20%20console.error(error)%3B%5Cn%20%20%20%20%7D%20finally%20%7B%5Cn%20%20%20%20%20%20setLoading(false)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20getMovies()%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20padding%3A%2024%7D%7D%3E%5Cn%20%20%20%20%20%20%7BisLoading%20%3F%20(%5Cn%20%20%20%20%20%20%20%20%3CActivityIndicator%20%2F%3E%5Cn%20%20%20%20%20%20)%20%3A%20(%5Cn%20%20%20%20%20%20%20%20%3CFlatList%5Cn%20%20%20%20%20%20%20%20%20%20data%3D%7Bdata%7D%5Cn%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(%7Bid%7D)%20%3D%3E%20id%7D%5Cn%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bitem.title%7D%2C%20%7Bitem.releaseYear%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]})}),(0,a.jsx)(o.Z,{value:"classical",children:(0,a.jsxs)(r.Z,{groupId:"language",queryString:!0,defaultValue:i.Z.defaultSnackLanguage,values:i.Z.snackLanguages,children:[(0,a.jsx)(o.Z,{value:"javascript",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"Fetch Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.js%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%5Cnimport%20%7BActivityIndicator%2C%20FlatList%2C%20Text%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cnexport%20default%20class%20App%20extends%20Component%20%7B%5Cn%20%20constructor(props)%20%7B%5Cn%20%20%20%20super(props)%3B%5Cn%5Cn%20%20%20%20this.state%20%3D%20%7B%5Cn%20%20%20%20%20%20data%3A%20%5B%5D%2C%5Cn%20%20%20%20%20%20isLoading%3A%20true%2C%5Cn%20%20%20%20%7D%3B%5Cn%20%20%7D%5Cn%5Cn%20%20async%20getMovies()%20%7B%5Cn%20%20%20%20try%20%7B%5Cn%20%20%20%20%20%20const%20response%20%3D%20await%20fetch('https%3A%2F%2Freactnative.dev%2Fmovies.json')%3B%5Cn%20%20%20%20%20%20const%20json%20%3D%20await%20response.json()%3B%5Cn%20%20%20%20%20%20this.setState(%7Bdata%3A%20json.movies%7D)%3B%5Cn%20%20%20%20%7D%20catch%20(error)%20%7B%5Cn%20%20%20%20%20%20console.log(error)%3B%5Cn%20%20%20%20%7D%20finally%20%7B%5Cn%20%20%20%20%20%20this.setState(%7BisLoading%3A%20false%7D)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20this.getMovies()%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20%7Bdata%2C%20isLoading%7D%20%3D%20this.state%3B%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20padding%3A%2024%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%7BisLoading%20%3F%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CActivityIndicator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20)%20%3A%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CFlatList%5Cn%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7Bdata%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(%7Bid%7D)%20%3D%3E%20id%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bitem.title%7D%2C%20%7Bitem.releaseYear%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(o.Z,{value:"typescript",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"Fetch Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%5Cnimport%20%7BActivityIndicator%2C%20FlatList%2C%20Text%2C%20View%7D%20from%20'react-native'%3B%5Cn%5Cntype%20Movie%20%3D%20%7B%5Cn%20%20id%3A%20string%3B%5Cn%20%20title%3A%20string%3B%5Cn%20%20releaseYear%3A%20string%3B%5Cn%7D%3B%5Cn%5Cntype%20AppState%20%3D%20%7B%5Cn%20%20data%3A%20Movie%5B%5D%3B%5Cn%20%20isLoading%3A%20boolean%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20class%20App%20extends%20Component%20%7B%5Cn%20%20state%3A%20AppState%20%3D%20%7B%5Cn%20%20%20%20data%3A%20%5B%5D%2C%5Cn%20%20%20%20isLoading%3A%20true%2C%5Cn%20%20%7D%3B%5Cn%5Cn%20%20async%20getMovies()%20%7B%5Cn%20%20%20%20try%20%7B%5Cn%20%20%20%20%20%20const%20response%20%3D%20await%20fetch('https%3A%2F%2Freactnative.dev%2Fmovies.json')%3B%5Cn%20%20%20%20%20%20const%20json%20%3D%20await%20response.json()%3B%5Cn%20%20%20%20%20%20this.setState(%7Bdata%3A%20json.movies%7D)%3B%5Cn%20%20%20%20%7D%20catch%20(error)%20%7B%5Cn%20%20%20%20%20%20console.log(error)%3B%5Cn%20%20%20%20%7D%20finally%20%7B%5Cn%20%20%20%20%20%20this.setState(%7BisLoading%3A%20false%7D)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20this.getMovies()%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20%7Bdata%2C%20isLoading%7D%20%3D%20this.state%3B%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20padding%3A%2024%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%7BisLoading%20%3F%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CActivityIndicator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20)%20%3A%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CFlatList%5Cn%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7Bdata%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(%7Bid%7D)%20%3D%3E%20id%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bitem.title%7D%2C%20%7Bitem.releaseYear%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]})})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["By default, iOS will block any request that's not encrypted using ",(0,a.jsx)(n.a,{href:"https://hosting.review/web-hosting-glossary/#12",children:"SSL"}),". If you need to fetch from a cleartext URL (one that begins with ",(0,a.jsx)(n.code,{children:"http"}),") you will first need to ",(0,a.jsx)(n.a,{href:"/docs/0.71/integration-with-existing-apps#test-your-integration",children:"add an App Transport Security exception"}),". If you know ahead of time what domains you will need access to, it is more secure to add exceptions only for those domains; if the domains are not known until runtime you can ",(0,a.jsx)(n.a,{href:"/docs/0.71/publishing-to-app-store#1-enable-app-transport-security",children:"disable ATS completely"}),". Note however that from January 2017, ",(0,a.jsx)(n.a,{href:"https://forums.developer.apple.com/thread/48979",children:"Apple's App Store review will require reasonable justification for disabling ATS"}),". See ",(0,a.jsx)(n.a,{href:"https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33",children:"Apple's documentation"})," for more information."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["On Android, as of API Level 28, clear text traffic is also blocked by default. This behaviour can be overridden by setting ",(0,a.jsx)(n.a,{href:"https://developer.android.com/guide/topics/manifest/application-element#usesCleartextTraffic",children:(0,a.jsx)(n.code,{children:"android:usesCleartextTraffic"})})," in the app manifest file."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"using-other-networking-libraries",children:"Using Other Networking Libraries"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",children:"XMLHttpRequest API"})," is built into React Native. This means that you can use third party libraries such as ",(0,a.jsx)(n.a,{href:"https://github.com/niftylettuce/frisbee",children:"frisbee"})," or ",(0,a.jsx)(n.a,{href:"https://github.com/mzabriskie/axios",children:"axios"})," that depend on it, or you can use the XMLHttpRequest API directly if you prefer."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"var request = new XMLHttpRequest();\nrequest.onreadystatechange = e => {\n  if (request.readyState !== 4) {\n    return;\n  }\n\n  if (request.status === 200) {\n    console.log('success', request.responseText);\n  } else {\n    console.warn('error');\n  }\n};\n\nrequest.open('GET', 'https://mywebsite.com/endpoint/');\nrequest.send();\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["The security model for XMLHttpRequest is different than on web as there is no concept of ",(0,a.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Cross-origin_resource_sharing",children:"CORS"})," in native apps."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"websocket-support",children:"WebSocket Support"}),"\n",(0,a.jsxs)(n.p,{children:["React Native also supports ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",children:"WebSockets"}),", a protocol which provides full-duplex communication channels over a single TCP connection."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"var ws = new WebSocket('ws://host.com/path');\n\nws.onopen = () => {\n  // connection opened\n  ws.send('something'); // send a message\n};\n\nws.onmessage = e => {\n  // a message was received\n  console.log(e.data);\n};\n\nws.onerror = e => {\n  // an error occurred\n  console.log(e.message);\n};\n\nws.onclose = e => {\n  // connection closed\n  console.log(e.code, e.reason);\n};\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"known-issues-with-fetch-and-cookie-based-authentication",children:["Known Issues with ",(0,a.jsx)(n.code,{children:"fetch"})," and cookie based authentication"]}),"\n",(0,a.jsxs)(n.p,{children:["The following options are currently not working with ",(0,a.jsx)(n.code,{children:"fetch"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"redirect:manual"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"credentials:omit"})}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Having same name headers on Android will result in only the latest one being present. A temporary solution can be found here: ",(0,a.jsx)(n.a,{href:"https://github.com/facebook/react-native/issues/18837#issuecomment-398779994",children:"https://github.com/facebook/react-native/issues/18837#issuecomment-398779994"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Cookie based authentication is currently unstable. You can view some of the issues raised here: ",(0,a.jsx)(n.a,{href:"https://github.com/facebook/react-native/issues/23185",children:"https://github.com/facebook/react-native/issues/23185"})]}),"\n",(0,a.jsxs)(n.li,{children:["As a minimum on iOS, when redirected through a ",(0,a.jsx)(n.code,{children:"302"}),", if a ",(0,a.jsx)(n.code,{children:"Set-Cookie"})," header is present, the cookie is not set properly. Since the redirect cannot be handled manually this might cause a scenario where infinite requests occur if the redirect is the result of an expired session."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"configuring-nsurlsession-on-ios",children:"Configuring NSURLSession on iOS"}),"\n",(0,a.jsxs)(n.p,{children:["For some applications it may be appropriate to provide a custom ",(0,a.jsx)(n.code,{children:"NSURLSessionConfiguration"})," for the underlying ",(0,a.jsx)(n.code,{children:"NSURLSession"})," that is used for network requests in a React Native application running on iOS. For instance, one may need to set a custom user agent string for all network requests coming from the app or supply ",(0,a.jsx)(n.code,{children:"NSURLSession"})," with an emphemeral ",(0,a.jsx)(n.code,{children:"NSURLSessionConfiguration"}),". The function ",(0,a.jsx)(n.code,{children:"RCTSetCustomNSURLSessionConfigurationProvider"})," allows for such customization. Remember to add the following import to the file in which ",(0,a.jsx)(n.code,{children:"RCTSetCustomNSURLSessionConfigurationProvider"})," will be called:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-objectivec",children:"#import <React/RCTHTTPRequestHandler.h>\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"RCTSetCustomNSURLSessionConfigurationProvider"})," should be called early in the application life cycle such that it is readily available when needed by React, for instance:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-objectivec",children:"-(void)application:(__unused UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n\n  // set RCTSetCustomNSURLSessionConfigurationProvider\n  RCTSetCustomNSURLSessionConfigurationProvider(^NSURLSessionConfiguration *{\n     NSURLSessionConfiguration *configuration = [NSURLSessionConfiguration defaultSessionConfiguration];\n     // configure the session\n     return configuration;\n  });\n\n  // set up React\n  _bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];\n}\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},86386:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(27378),s=t(38944);const r={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&d(e,t,n[t]);if(i)for(var t of i(n))c.call(n,t)&&d(e,t,n[t]);return e};function p({children:e,hidden:n,className:t}){return a.createElement("div",u({role:"tabpanel",className:(0,s.Z)(r.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>U});var a=t(27378),s=t(38944),r=t(12112),o=t(3620),i=t(69490),l=t(14953),c=t(27886),d=t(7106),u=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||(n={}))C.call(n,t)&&g(e,t,n[t]);if(f)for(var t of f(n))m.call(n,t)&&g(e,t,n[t]);return e},b=(e,n)=>p(e,h(n));function y(e){var n,t;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function D(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return y(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function w({value:e,tabValues:n}){return n.some((n=>n.value===e))}function x({queryString:e=!1,groupId:n}){const t=(0,o.k6)(),s=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace(b(v({},t.location),{search:n.toString()}))}),[s,t])]}function B(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=D(e),[o,l]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=x({queryString:t,groupId:s}),[p,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,s]=(0,d.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:s}),f=(()=>{const e=null!=c?c:p;return w({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!w({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var j=t(14185);const k={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var S=Object.defineProperty,A=Object.defineProperties,E=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,F=(e,n,t)=>n in e?S(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,R=(e,n)=>{for(var t in n||(n={}))O.call(n,t)&&F(e,t,n[t]);if(L)for(var t of L(n))T.call(n,t)&&F(e,t,n[t]);return e},I=(e,n)=>A(e,E(n));function N({className:e,block:n,selectedValue:t,selectValue:o,tabValues:i}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),s=i[a].value;s!==t&&(c(n),o(s))},u=e=>{var n,t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=null!=(n=l[t])?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;a=null!=(t=l[n])?t:l[l.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},e)},i.map((({value:e,label:n,attributes:r})=>a.createElement("li",I(R({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>l.push(e),onKeyDown:u,onClick:d},r),{className:(0,s.Z)("tabs__item",k.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function P({lazy:e,children:n,selectedValue:t}){const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function q(e){const n=B(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",k.tabList)},a.createElement(N,R(R({},e),n)),a.createElement(P,R(R({},e),n)))}function U(e){const n=(0,j.Z)();return a.createElement(q,R({key:String(n)},e),y(e.children))}},11674:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(63445);const s=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:s?"macos":r?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:s?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,n,t)=>{var a=t(27378),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var a,r={},c=null,d=null;for(a in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,a)&&!l.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===r[a]&&(r[a]=n[a]);return{$$typeof:s,type:e,key:c,ref:d,props:r,_owner:i.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>r});var a=t(27378);const s=a.createContext({});function r(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:r(e),a.createElement(s.Provider,{value:i},n)}}}]);