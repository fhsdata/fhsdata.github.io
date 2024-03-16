/*! For license information please see 69fd90d1.d9e077af.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[35490],{65836:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=s(24246),t=s(71670);const i={id:"asyncstorage",title:"\ud83d\udea7 AsyncStorage"},l=void 0,c={id:"asyncstorage",title:"\ud83d\udea7 AsyncStorage",description:"Removed. Use one of the community packages instead.",source:"@site/../docs/asyncstorage.md",sourceDirName:".",slug:"/asyncstorage",permalink:"/docs/next/asyncstorage",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/react-native-website/blob/main/website/../docs/asyncstorage.md",tags:[],version:"current",lastUpdatedAt:1688305452,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"asyncstorage",title:"\ud83d\udea7 AsyncStorage"}},d={},a=[{value:"Methods",id:"methods",level:2},{value:"<code>getItem()</code>",id:"getitem",level:3},{value:"<code>setItem()</code>",id:"setitem",level:3},{value:"<code>removeItem()</code>",id:"removeitem",level:3},{value:"<code>mergeItem()</code>",id:"mergeitem",level:3},{value:"<code>clear()</code>",id:"clear",level:3},{value:"<code>getAllKeys()</code>",id:"getallkeys",level:3},{value:"<code>flushGetRequests()</code>",id:"flushgetrequests",level:3},{value:"<code>multiGet()</code>",id:"multiget",level:3},{value:"<code>multiSet()</code>",id:"multiset",level:3},{value:"<code>multiRemove()</code>",id:"multiremove",level:3},{value:"<code>multiMerge()</code>",id:"multimerge",level:3}];function o(e){const r=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",code:"code",pre:"pre",hr:"hr",h1:"h1",h2:"h2",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Removed."})," Use one of the ",(0,n.jsx)(r.a,{href:"https://reactnative.directory/?search=storage",children:"community packages"})," instead."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"AsyncStorage"})," is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage."]}),"\n",(0,n.jsxs)(r.p,{children:["It is recommended that you use an abstraction on top of ",(0,n.jsx)(r.code,{children:"AsyncStorage"})," instead of ",(0,n.jsx)(r.code,{children:"AsyncStorage"})," directly for anything more than light usage since it operates globally."]}),"\n",(0,n.jsxs)(r.p,{children:["On iOS, ",(0,n.jsx)(r.code,{children:"AsyncStorage"})," is backed by native code that stores small values in a serialized dictionary and larger values in separate files. On Android, ",(0,n.jsx)(r.code,{children:"AsyncStorage"})," will use either ",(0,n.jsx)(r.a,{href:"https://rocksdb.org/",children:"RocksDB"})," or SQLite based on what is available."]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"AsyncStorage"})," JavaScript code is a facade that provides a clear JavaScript API, real ",(0,n.jsx)(r.code,{children:"Error"})," objects, and non-multi functions. Each method in the API returns a ",(0,n.jsx)(r.code,{children:"Promise"})," object."]}),"\n",(0,n.jsxs)(r.p,{children:["Importing the ",(0,n.jsx)(r.code,{children:"AsyncStorage"})," library:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"import {AsyncStorage} from 'react-native';\n"})}),"\n",(0,n.jsx)(r.p,{children:"Persisting data:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"_storeData = async () => {\n  try {\n    await AsyncStorage.setItem(\n      '@MySuperStore:key',\n      'I like to save it.',\n    );\n  } catch (error) {\n    // Error saving data\n  }\n};\n"})}),"\n",(0,n.jsx)(r.p,{children:"Fetching data:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"_retrieveData = async () => {\n  try {\n    const value = await AsyncStorage.getItem('TASKS');\n    if (value !== null) {\n      // We have data!!\n      console.log(value);\n    }\n  } catch (error) {\n    // Error retrieving data\n  }\n};\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h1,{id:"reference",children:"Reference"}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.h3,{id:"getitem",children:(0,n.jsx)(r.code,{children:"getItem()"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"static getItem(key: string, [callback]: ?(error: ?Error, result: ?string) => void)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Fetches an item for a ",(0,n.jsx)(r.code,{children:"key"})," and invokes a callback upon completion. Returns a ",(0,n.jsx)(r.code,{children:"Promise"})," object."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"key"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"Key of the item to fetch."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"callback"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"?(error: ?Error, result: ?string) => void"})}),(0,n.jsx)(r.td,{children:"No"}),(0,n.jsx)(r.td,{children:"Function that will be called with a result if found or any error."})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"setitem",children:(0,n.jsx)(r.code,{children:"setItem()"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"static setItem(key: string, value: string, [callback]: ?(error: ?Error) => void)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Sets the value for a ",(0,n.jsx)(r.code,{children:"key"})," and invokes a callback upon completion. Returns a ",(0,n.jsx)(r.code,{children:"Promise"})," object."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"key"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"Key of the item to set."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"value"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsxs)(r.td,{children:["Value to set for the ",(0,n.jsx)(r.code,{children:"key"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"callback"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"?(error: ?Error) => void"})}),(0,n.jsx)(r.td,{children:"No"}),(0,n.jsx)(r.td,{children:"Function that will be called with any error."})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"removeitem",children:(0,n.jsx)(r.code,{children:"removeItem()"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"static removeItem(key: string, [callback]: ?(error: ?Error) => void)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Removes an item for a ",(0,n.jsx)(r.code,{children:"key"})," and invokes a callback upon completion. Returns a ",(0,n.jsx)(r.code,{children:"Promise"})," object."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"key"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"Key of the item to remove."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"callback"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"?(error: ?Error) => void"})}),(0,n.jsx)(r.td,{children:"No"}),(0,n.jsx)(r.td,{children:"Function that will be called with any error."})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"mergeitem",children:(0,n.jsx)(r.code,{children:"mergeItem()"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"static mergeItem(key: string, value: string, [callback]: ?(error: ?Error) => void)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Merges an existing ",(0,n.jsx)(r.code,{children:"key"})," value with an input value, assuming both values are stringified JSON. Returns a ",(0,n.jsx)(r.code,{children:"Promise"})," object."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"NOTE:"})," This is not supported by all native implementations."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"key"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"Key of the item to modify."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"value"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsxs)(r.td,{children:["New value to merge for the ",(0,n.jsx)(r.code,{children:"key"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"callback"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"?(error: ?Error) => void"})}),(0,n.jsx)(r.td,{children:"No"}),(0,n.jsx)(r.td,{children:"Function that will be called with any error."})]})]})]}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"let UID123_object = {\n  name: 'Chris',\n  age: 30,\n  traits: {hair: 'brown', eyes: 'brown'},\n};\n// You only need to define what will be added or updated\nlet UID123_delta = {\n  age: 31,\n  traits: {eyes: 'blue', shoe_size: 10},\n};\n\nAsyncStorage.setItem(\n  'UID123',\n  JSON.stringify(UID123_object),\n  () => {\n    AsyncStorage.mergeItem(\n      'UID123',\n      JSON.stringify(UID123_delta),\n      () => {\n        AsyncStorage.getItem('UID123', (err, result) => {\n          console.log(result);\n        });\n      },\n    );\n  },\n);\n\n// Console log result:\n// => {'name':'Chris','age':31,'traits':\n//    {'shoe_size':10,'hair':'brown','eyes':'blue'}}\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"clear",children:(0,n.jsx)(r.code,{children:"clear()"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"static clear([callback]: ?(error: ?Error) => void)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Erases ",(0,n.jsx)(r.em,{children:"all"})," ",(0,n.jsx)(r.code,{children:"AsyncStorage"})," for all clients, libraries, etc. You probably don't want to call this; use ",(0,n.jsx)(r.code,{children:"removeItem"})," or ",(0,n.jsx)(r.code,{children:"multiRemove"})," to clear only your app's keys. Returns a ",(0,n.jsx)(r.code,{children:"Promise"})," object."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"callback"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"?(error: ?Error) => void"})}),(0,n.jsx)(r.td,{children:"No"}),(0,n.jsx)(r.td,{children:"Function that will be called with any error."})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"getallkeys",children:(0,n.jsx)(r.code,{children:"getAllKeys()"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"static getAllKeys([callback]: ?(error: ?Error, keys: ?Array<string>) => void)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Gets ",(0,n.jsx)(r.em,{children:"all"})," keys known to your app; for all callers, libraries, etc. Returns a ",(0,n.jsx)(r.code,{children:"Promise"})," object."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"callback"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"?(error: ?Error, keys: ?Array<string>) => void"})}),(0,n.jsx)(r.td,{children:"No"}),(0,n.jsx)(r.td,{children:"Function that will be called with all keys found and any error."})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"flushgetrequests",children:(0,n.jsx)(r.code,{children:"flushGetRequests()"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"static flushGetRequests(): [object Object]\n"})}),"\n",(0,n.jsx)(r.p,{children:"Flushes any pending requests using a single batch call to get the data."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"multiget",children:(0,n.jsx)(r.code,{children:"multiGet()"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"static multiGet(keys: Array<string>, [callback]: ?(errors: ?Array<Error>, result: ?Array<Array<string>>) => void)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["This allows you to batch the fetching of items given an array of ",(0,n.jsx)(r.code,{children:"key"})," inputs. Your callback will be invoked with an array of corresponding key-value pairs found:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"multiGet(['k1', 'k2'], cb) -> cb([['k1', 'val1'], ['k2', 'val2']])\n"})}),"\n",(0,n.jsxs)(r.p,{children:["The method returns a ",(0,n.jsx)(r.code,{children:"Promise"})," object."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"keys"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Array<string>"})}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"Array of key for the items to get."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"callback"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"?(errors: ?Array<Error>, result: ?Array<Array<string>>) => void"})}),(0,n.jsx)(r.td,{children:"No"}),(0,n.jsx)(r.td,{children:"Function that will be called with a key-value array of the results, plus an array of any key-specific errors found."})]})]})]}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"AsyncStorage.getAllKeys((err, keys) => {\n  AsyncStorage.multiGet(keys, (err, stores) => {\n    stores.map((result, i, store) => {\n      // get at each store's key/value so you can work with it\n      let key = store[i][0];\n      let value = store[i][1];\n    });\n  });\n});\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"multiset",children:(0,n.jsx)(r.code,{children:"multiSet()"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"static multiSet(keyValuePairs: Array<Array<string>>, [callback]: ?(errors: ?Array<Error>) => void)\n"})}),"\n",(0,n.jsx)(r.p,{children:"Use this as a batch operation for storing multiple key-value pairs. When the operation completes you'll get a single callback with any errors:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"multiSet([['k1', 'val1'], ['k2', 'val2']], cb);\n"})}),"\n",(0,n.jsxs)(r.p,{children:["The method returns a ",(0,n.jsx)(r.code,{children:"Promise"})," object."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"keyValuePairs"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Array<Array<string>>"})}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"Array of key-value array for the items to set."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"callback"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"?(errors: ?Array<Error>) => void"})}),(0,n.jsx)(r.td,{children:"No"}),(0,n.jsx)(r.td,{children:"Function that will be called with an array of any key-specific errors found."})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"multiremove",children:(0,n.jsx)(r.code,{children:"multiRemove()"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"static multiRemove(keys: Array<string>, [callback]: ?(errors: ?Array<Error>) => void)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Call this to batch the deletion of all keys in the ",(0,n.jsx)(r.code,{children:"keys"})," array. Returns a ",(0,n.jsx)(r.code,{children:"Promise"})," object."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"keys"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Array<string>"})}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"Array of key for the items to delete."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"callback"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"?(errors: ?Array<Error>) => void"})}),(0,n.jsx)(r.td,{children:"No"}),(0,n.jsx)(r.td,{children:"Function that will be called an array of any key-specific errors found."})]})]})]}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"let keys = ['k1', 'k2'];\nAsyncStorage.multiRemove(keys, err => {\n  // keys k1 & k2 removed, if they existed\n  // do most stuff after removal (if you want)\n});\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"multimerge",children:(0,n.jsx)(r.code,{children:"multiMerge()"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"static multiMerge(keyValuePairs: Array<Array<string>>, [callback]: ?(errors: ?Array<Error>) => void)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Batch operation to merge in existing and new values for a given set of keys. This assumes that the values are stringified JSON. Returns a ",(0,n.jsx)(r.code,{children:"Promise"})," object."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"NOTE"}),": This is not supported by all native implementations."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"keyValuePairs"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Array<Array<string>>"})}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"Array of key-value array for the items to merge."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"callback"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"?(errors: ?Array<Error>) => void"})}),(0,n.jsx)(r.td,{children:"No"}),(0,n.jsx)(r.td,{children:"Function that will be called with an array of any key-specific errors found."})]})]})]}),"\n",(0,n.jsx)(r.p,{children:"Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'// first user, initial values\nlet UID234_object = {\n  name: \'Chris\',\n  age: 30,\n  traits: {hair: \'brown\', eyes: \'brown\'},\n};\n\n// first user, delta values\nlet UID234_delta = {\n  age: 31,\n  traits: {eyes: \'blue\', shoe_size: 10},\n};\n\n// second user, initial values\nlet UID345_object = {\n  name: \'Marge\',\n  age: 25,\n  traits: {hair: \'blonde\', eyes: \'blue\'},\n};\n\n// second user, delta values\nlet UID345_delta = {\n  age: 26,\n  traits: {eyes: \'green\', shoe_size: 6},\n};\n\nlet multi_set_pairs = [\n  [\'UID234\', JSON.stringify(UID234_object)],\n  [\'UID345\', JSON.stringify(UID345_object)],\n];\nlet multi_merge_pairs = [\n  [\'UID234\', JSON.stringify(UID234_delta)],\n  [\'UID345\', JSON.stringify(UID345_delta)],\n];\n\nAsyncStorage.multiSet(multi_set_pairs, err => {\n  AsyncStorage.multiMerge(multi_merge_pairs, err => {\n    AsyncStorage.multiGet([\'UID234\', \'UID345\'], (err, stores) => {\n      stores.map((result, i, store) => {\n        let key = store[i][0];\n        let val = store[i][1];\n        console.log(key, val);\n      });\n    });\n  });\n});\n\n// Console log results:\n// => UID234 {"name":"Chris","age":31,"traits":{"shoe_size":10,"hair":"brown","eyes":"blue"}}\n// => UID345 {"name":"Marge","age":26,"traits":{"shoe_size":6,"hair":"blonde","eyes":"green"}}\n'})})]})}const h=function(e={}){const{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},71426:(e,r,s)=>{var n=s(27378),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,s){var n,i={},a=null,o=null;for(n in void 0!==s&&(a=""+s),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(o=r.ref),r)l.call(r,n)&&!d.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:t,type:e,key:a,ref:o,props:i,_owner:c.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},24246:(e,r,s)=>{e.exports=s(71426)},71670:(e,r,s)=>{s.d(r,{Zo:()=>c,ah:()=>i});var n=s(27378);const t=n.createContext({});function i(e){const r=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const l={};function c({components:e,children:r,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:i(e),n.createElement(t.Provider,{value:c},r)}}}]);