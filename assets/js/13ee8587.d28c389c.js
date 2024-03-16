/*! For license information please see 13ee8587.d28c389c.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[36713],{80493:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(24246),i=a(71670),r=a(48375),o=a(86386),l=a(11674);const s={id:"integration-with-android-fragment",title:"Integration with an Android Fragment"},c=void 0,d={id:"integration-with-android-fragment",title:"Integration with an Android Fragment",description:"The guide for Integration with Existing Apps details how to integrate a full-screen React Native app into an existing Android app as an Activity. To use React Native components within Fragments in an existing app requires some additional setup. The benefit of this is that it allows for a native app to integrate React Native components alongside native fragments in an Activity.",source:"@site/versioned_docs/version-0.70/integration-with-android-fragment.md",sourceDirName:".",slug:"/integration-with-android-fragment",permalink:"/docs/0.70/integration-with-android-fragment",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/integration-with-android-fragment.md",tags:[],version:"0.70",lastUpdatedAt:1698945380,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{id:"integration-with-android-fragment",title:"Integration with an Android Fragment"},sidebar:"docs",previous:{title:"Integration with Existing Apps",permalink:"/docs/0.70/integration-with-existing-apps"},next:{title:"Building For TV Devices",permalink:"/docs/0.70/building-for-tv"}},u={},p=[{value:"1. Add React Native to your app",id:"1-add-react-native-to-your-app",level:3},{value:"2. Integrating your App with a React Native Fragment",id:"2-integrating-your-app-with-a-react-native-fragment",level:3},{value:"Step 3. Add a FrameLayout for the React Native Fragment",id:"step-3-add-a-framelayout-for-the-react-native-fragment",level:3},{value:"Step 4. Add a React Native Fragment to the FrameLayout",id:"step-4-add-a-react-native-fragment-to-the-framelayout",level:3},{value:"Step 5. Test your integration",id:"step-5-test-your-integration",level:3},{value:"Step 6. Additional setup - Native modules",id:"step-6-additional-setup---native-modules",level:3}];function g(e){const t=Object.assign({p:"p",a:"a",h3:"h3",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The guide for ",(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/integration-with-existing-apps",children:"Integration with Existing Apps"})," details how to integrate a full-screen React Native app into an existing Android app as an Activity. To use React Native components within Fragments in an existing app requires some additional setup. The benefit of this is that it allows for a native app to integrate React Native components alongside native fragments in an Activity."]}),"\n",(0,n.jsx)(t.h3,{id:"1-add-react-native-to-your-app",children:"1. Add React Native to your app"}),"\n",(0,n.jsxs)(t.p,{children:["Follow the guide for ",(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/integration-with-existing-apps",children:"Integration with Existing Apps"})," until the Code integration section. Continue to follow Step 1. Create an ",(0,n.jsx)(t.code,{children:"index.android.js"})," file and Step 2. Add your React Native code from this section."]}),"\n",(0,n.jsx)(t.h3,{id:"2-integrating-your-app-with-a-react-native-fragment",children:"2. Integrating your App with a React Native Fragment"}),"\n",(0,n.jsxs)(t.p,{children:['You can render your React Native component into a Fragment instead of a full screen React Native Activity. The component may be termed a "screen" or "fragment" and it will function in the same manner as an Android fragment, likely containing child components. These components can be placed in a ',(0,n.jsx)(t.code,{children:"/fragments"})," folder and the child components used to compose the fragment can be placed in a ",(0,n.jsx)(t.code,{children:"/components"})," folder."]}),"\n",(0,n.jsxs)(t.p,{children:["You will need to implement the ",(0,n.jsx)(t.code,{children:"ReactApplication"})," interface in your main Application Java/Kotlin class. If you have created a new project from Android Studio with a default activity, you will need to create a new class (e.g. ",(0,n.jsx)(t.code,{children:"MyReactApplication.java"})," or ",(0,n.jsx)(t.code,{children:"MyReactApplication.kt"}),"). If it is an existing class you can find this main class in your ",(0,n.jsx)(t.code,{children:"AndroidManifest.xml"})," file. Under the ",(0,n.jsx)(t.code,{children:"<application />"})," tag you should see a property ",(0,n.jsx)(t.code,{children:"android:name"})," e.g. ",(0,n.jsx)(t.code,{children:'android:name=".MyReactApplication"'}),". This value is the class you want to implement and provide the required methods to."]}),"\n",(0,n.jsx)(t.p,{children:"Ensure your main Application class implements ReactApplication:"}),"\n",(0,n.jsxs)(r.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"class MyReactApplication: Application(), ReactApplication {...}\n"})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"public class MyReactApplication extends Application implements ReactApplication {...}\n"})})})]}),"\n",(0,n.jsxs)(t.p,{children:["Override the required methods ",(0,n.jsx)(t.code,{children:"getUseDeveloperSupport"}),", ",(0,n.jsx)(t.code,{children:"getPackages"})," and ",(0,n.jsx)(t.code,{children:"getReactNativeHost"}),":"]}),"\n",(0,n.jsxs)(r.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"class MyReactApplication : Application(), ReactApplication {\n    override fun onCreate() {\n        super.onCreate()\n        SoLoader.init(this, false)\n    }\n    private val reactNativeHost =\n        object : ReactNativeHost(this) {\n            override fun getUseDeveloperSupport() = BuildConfig.DEBUG\n            override fun getPackages(): List<ReactPackage> {\n                val packages = PackageList(this).getPackages().toMutableList()\n                // Packages that cannot be autolinked yet can be added manually here\n                return packages\n            }\n        }\n    override fun getReactNativeHost(): ReactNativeHost = reactNativeHost\n}\n"})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"public class MyReactApplication extends Application implements ReactApplication {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        SoLoader.init(this, false);\n    }\n\n    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n        @Override\n        public boolean getUseDeveloperSupport() {\n            return BuildConfig.DEBUG;\n        }\n\n        protected List<ReactPackage> getPackages() {\n            List<ReactPackage> packages = new PackageList(this).getPackages();\n            // Packages that cannot be autolinked yet can be added manually here\n            return packages;\n        }\n    };\n\n    @Override\n    public ReactNativeHost getReactNativeHost() {\n        return mReactNativeHost;\n    }\n}\n"})})})]}),"\n",(0,n.jsx)(t.p,{children:"If you are using Android Studio, use Alt + Enter to add all missing imports in your class. Alternatively these are the required imports to include manually:"}),"\n",(0,n.jsxs)(r.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"import android.app.Application\n\nimport com.facebook.react.PackageList\nimport com.facebook.react.ReactApplication\nimport com.facebook.react.ReactNativeHost\nimport com.facebook.react.ReactPackage\nimport com.facebook.soloader.SoLoader\n"})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import android.app.Application;\n\nimport com.facebook.react.PackageList;\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.soloader.SoLoader;\n\nimport java.util.List;\n"})})})]}),"\n",(0,n.jsx)(t.p,{children:'Perform a "Sync Project files with Gradle" operation.'}),"\n",(0,n.jsx)(t.h3,{id:"step-3-add-a-framelayout-for-the-react-native-fragment",children:"Step 3. Add a FrameLayout for the React Native Fragment"}),"\n",(0,n.jsxs)(t.p,{children:["You will now add your React Native Fragment to an Activity. For a new project this Activity will be ",(0,n.jsx)(t.code,{children:"MainActivity"})," but it could be any Activity and more fragments can be added to additional Activities as you integrate more React Native components into your app."]}),"\n",(0,n.jsxs)(t.p,{children:["First add the React Native Fragment to your Activity's layout. For example ",(0,n.jsx)(t.code,{children:"main_activity.xml"})," in the ",(0,n.jsx)(t.code,{children:"res/layouts"})," folder."]}),"\n",(0,n.jsxs)(t.p,{children:["Add a ",(0,n.jsx)(t.code,{children:"<FrameLayout>"})," with an id, width and height. This is the layout you will find and render your React Native Fragment into."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<FrameLayout\n    xmlns:android="http://schemas.android.com/apk/res/android"\n    android:id="@+id/reactNativeFragment"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent" />\n'})}),"\n",(0,n.jsx)(t.h3,{id:"step-4-add-a-react-native-fragment-to-the-framelayout",children:"Step 4. Add a React Native Fragment to the FrameLayout"}),"\n",(0,n.jsxs)(t.p,{children:["To add your React Native Fragment to your layout you need to have an Activity. As mentioned in a new project this will be ",(0,n.jsx)(t.code,{children:"MainActivity"}),". In this Activity add a button and an event listener. On button click you will render your React Native Fragment."]}),"\n",(0,n.jsx)(t.p,{children:"Modify your Activity layout to add the button:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<Button\n    android:layout_margin="10dp"\n    android:id="@+id/button"\n    android:layout_width="match_parent"\n    android:layout_height="wrap_content"\n    android:text="Show react fragment" />\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Now in your Activity class (e.g. ",(0,n.jsx)(t.code,{children:"MainActivity.java"})," or ",(0,n.jsx)(t.code,{children:"MainActivity.kt"}),") you need to add an ",(0,n.jsx)(t.code,{children:"OnClickListener"})," for the button, instantiate your ",(0,n.jsx)(t.code,{children:"ReactFragment"})," and add it to the frame layout."]}),"\n",(0,n.jsx)(t.p,{children:"Add the button field to the top of your Activity:"}),"\n",(0,n.jsxs)(r.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"private lateinit var button: Button\n"})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"private Button mButton;\n"})})})]}),"\n",(0,n.jsxs)(t.p,{children:["Update your Activity's ",(0,n.jsx)(t.code,{children:"onCreate"})," method as follows:"]}),"\n",(0,n.jsxs)(r.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'override fun onCreate(savedInstanceState: Bundle) {\n    super.onCreate(savedInstanceState)\n    setContentView(R.layout.main_activity)\n    button = findViewById<Button>(R.id.button)\n    button.setOnClickListener {\n        val reactNativeFragment = ReactFragment.Builder()\n                .setComponentName("HelloWorld")\n                .setLaunchOptions(getLaunchOptions("test message"))\n                .build()\n        getSupportFragmentManager()\n                .beginTransaction()\n                .add(R.id.reactNativeFragment, reactNativeFragment)\n                .commit()\n    }\n}\n'})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    setContentView(R.layout.main_activity);\n\n    mButton = findViewById(R.id.button);\n    mButton.setOnClickListener(new View.OnClickListener() {\n        public void onClick(View v) {\n            Fragment reactNativeFragment = new ReactFragment.Builder()\n                    .setComponentName("HelloWorld")\n                    .setLaunchOptions(getLaunchOptions("test message"))\n                    .build();\n\n            getSupportFragmentManager()\n                    .beginTransaction()\n                    .add(R.id.reactNativeFragment, reactNativeFragment)\n                    .commit();\n\n        }\n    });\n}\n'})})})]}),"\n",(0,n.jsxs)(t.p,{children:["In the code above ",(0,n.jsx)(t.code,{children:"Fragment reactNativeFragment = new ReactFragment.Builder()"})," creates the ReactFragment and ",(0,n.jsx)(t.code,{children:"getSupportFragmentManager().beginTransaction().add()"})," adds the Fragment to the Frame Layout."]}),"\n",(0,n.jsxs)(t.p,{children:['If you are using a starter kit for React Native, replace the "HelloWorld" string with the one in your ',(0,n.jsx)(t.code,{children:"index.js"})," or ",(0,n.jsx)(t.code,{children:"index.android.js"})," file (it\u2019s the first argument to the AppRegistry.registerComponent() method)."]}),"\n",(0,n.jsxs)(t.p,{children:["Add the ",(0,n.jsx)(t.code,{children:"getLaunchOptions"})," method which will allow you to pass props through to your component. This is optional and you can remove ",(0,n.jsx)(t.code,{children:"setLaunchOptions"})," if you don't need to pass any props."]}),"\n",(0,n.jsxs)(r.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'private fun getLaunchOptions(message: String) = Bundle().apply {\n    putString("message", message)\n}\n\n'})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'private Bundle getLaunchOptions(String message) {\n    Bundle initialProperties = new Bundle();\n    initialProperties.putString("message", message);\n    return initialProperties;\n}\n'})})})]}),"\n",(0,n.jsx)(t.p,{children:"Add all missing imports in your Activity class. Be careful to use your package\u2019s BuildConfig and not the one from the facebook package! Alternatively these are the required imports to include manually:"}),"\n",(0,n.jsxs)(r.Z,{groupId:"android-language",queryString:!0,defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"import android.app.Application\n\nimport com.facebook.react.ReactApplication\nimport com.facebook.react.ReactNativeHost\nimport com.facebook.react.ReactPackage\nimport com.facebook.react.shell.MainReactPackage\nimport com.facebook.soloader.SoLoader\n\n"})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import android.app.Application;\n\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.shell.MainReactPackage;\nimport com.facebook.soloader.SoLoader;\n"})})})]}),"\n",(0,n.jsx)(t.p,{children:'Perform a "Sync Project files with Gradle" operation.'}),"\n",(0,n.jsx)(t.h3,{id:"step-5-test-your-integration",children:"Step 5. Test your integration"}),"\n",(0,n.jsxs)(t.p,{children:["Make sure you run ",(0,n.jsx)(t.code,{children:"yarn"})," to install your react-native dependencies and run ",(0,n.jsx)(t.code,{children:"yarn native"})," to start the metro bundler. Run your android app in Android Studio and it should load the JavaScript code from the development server and display it in your React Native Fragment in the Activity."]}),"\n",(0,n.jsx)(t.h3,{id:"step-6-additional-setup---native-modules",children:"Step 6. Additional setup - Native modules"}),"\n",(0,n.jsxs)(t.p,{children:["You may need to call out to existing Java/Kotlin code from your react component. Native modules allow you to call out to native code and run methods in your native app. Follow the setup here ",(0,n.jsx)(t.a,{href:"/docs/native-modules-android",children:"native-modules-android"})]})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(g,e)})):g(e)}},86386:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(27378),i=a(38944);const r={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))c.call(t,a)&&d(e,a,t[a]);return e};function p({children:e,hidden:t,className:a}){return n.createElement("div",u({role:"tabpanel",className:(0,i.Z)(r.tabItem,a)},{hidden:t}),e)}},48375:(e,t,a)=>{a.d(t,{Z:()=>B});var n=a(27378),i=a(38944),r=a(12112),o=a(3620),l=a(69490),s=a(14953),c=a(27886),d=a(7106),u=Object.defineProperty,p=Object.defineProperties,g=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&f(e,a,t[a]);if(m)for(var a of m(t))v.call(t,a)&&f(e,a,t[a]);return e},b=(e,t)=>p(e,g(t));function j(e){var t,a;return null!=(a=null==(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?a:[]}function x(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return j(e).map((({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n})))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function w({value:e,tabValues:t}){return t.some((t=>t.value===e))}function k({queryString:e=!1,groupId:t}){const a=(0,o.k6)(),i=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,s._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace(b(y({},a.location),{search:t.toString()}))}),[i,a])]}function A(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,r=x(e),[o,s]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(a=t.find((e=>e.default)))?a:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,u]=k({queryString:a,groupId:i}),[p,g]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,i]=(0,d.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:i}),m=(()=>{const e=null!=c?c:p;return w({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{m&&s(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!w({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var N=a(14185);const R={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var S=Object.defineProperty,L=Object.defineProperties,O=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,Z=(e,t,a)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,C=(e,t)=>{for(var a in t||(t={}))I.call(t,a)&&Z(e,a,t[a]);if(F)for(var a of F(t))P.call(t,a)&&Z(e,a,t[a]);return e},E=(e,t)=>L(e,O(t));function _({className:e,block:t,selectedValue:a,selectValue:o,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),i=l[n].value;i!==a&&(c(t),o(i))},u=e=>{var t,a;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=null!=(t=s[a])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=null!=(a=s[t])?a:s[s.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:r})=>n.createElement("li",E(C({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>s.push(e),onKeyDown:u,onClick:d},r),{className:(0,i.Z)("tabs__item",R.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===e})}),null!=t?t:e))))}function T({lazy:e,children:t,selectedValue:a}){const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function V(e){const t=A(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",R.tabList)},n.createElement(_,C(C({},e),t)),n.createElement(T,C(C({},e),t)))}function B(e){const t=(0,N.Z)();return n.createElement(V,C({key:String(t)},e),j(e.children))}},11674:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(63445);const i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"quickstart",defaultJsDebugger:"flipper",defaultOs:i?"macos":r?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:i?"ios":"android",defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],jsDebuggers:[{label:"Hermes Debugger / Expo",value:"hermes"},{label:"Flipper",value:"flipper"},{label:"New Debugger (Experimental)",value:"new-debugger"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},71426:(e,t,a)=>{var n=a(27378),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,r={},c=null,d=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!s.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},24246:(e,t,a)=>{e.exports=a(71426)},71670:(e,t,a)=>{a.d(t,{Zo:()=>l,ah:()=>r});var n=a(27378);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function l({components:e,children:t,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||o:r(e),n.createElement(i.Provider,{value:l},t)}}}]);