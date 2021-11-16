function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},s=t.parcelRequirea2cd;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequirea2cd=s),s.register("5BxsO",(function(t,n){e(t.exports,"signUpUser",(()=>f)),e(t.exports,"signInUser",(()=>p)),e(t.exports,"signOutUser",(()=>g)),e(t.exports,"getCurrentUserProfile",(()=>m)),e(t.exports,"resetPassword",(()=>y)),e(t.exports,"resetEmail",(()=>v)),e(t.exports,"addNewItem",(()=>w)),e(t.exports,"queryFeatured",(()=>I)),e(t.exports,"getUserItems",(()=>E)),e(t.exports,"deleteItem",(()=>_)),s("lrOYs");var r=s("ef5iw");s("l2bJD");var i=s("las03");s("2DfF0");var o=s("5jIUI");s("jl25v");var a=s("6G1OQ"),c=s("i240J");const u=r.initializeApp({apiKey:"AIzaSyDCIgPynr-QZ7nHqZaVXMRYl-7EHAwarGE",authDomain:"fir-demo-5c6da.firebaseapp.com",databaseURL:"https://fir-demo-5c6da-default-rtdb.firebaseio.com",projectId:"fir-demo-5c6da",storageBucket:"fir-demo-5c6da.appspot.com",messagingSenderId:"44640068654",appId:"1:44640068654:web:469b73ac5023acfc6aebbf",measurementId:"G-0CTTSJ540Y"}),l=i.getFirestore(),h=a.getStorage(),d=o.n(u);function f(e,t,n,r,s){o.a4(d,n,r).then((n=>{const r=n.user;o.ae(r,{displayName:`${e} ${t}`}).then((()=>async function(e,t,n,r){const s=i.collection(l,"users");await i.setDoc(i.doc(s,r),{displayName:`${e} ${t}`,address:n,uid:r})}(e,t,s,String(r.uid)))).then((()=>{o.aa(r)})).then((()=>{alert("New user created")}))})).catch((e=>{console.log(`Error Code: ${e.code}Error Message: ${e.message}`),"auth/email-already-in-use"===e.code?alert("Error: User already exists"):alert("Error creating user")}))}function p(e,t){o.a5(d,e,t).then((e=>{e.user})).catch((e=>{console.log(`Error Code: ${e.code}Error Message: ${e.message}`),alert("Sign in unsuccessful")}))}function g(){o.x(d).then((()=>{})).catch((()=>{alert("Error signing out")}))}async function m(){const e=d.currentUser;if(!e)return;const t=i.doc(l,"users",e.uid),n=await i.getDoc(t);return{displayName:e.displayName,email:e.email,address:n.data().address}}function y(){const e=d.currentUser;o.$(d,e.email).then((()=>{alert("Password reset email has been sent")})).catch((e=>{alert("Error sending password reset email")}))}async function v(e){const t=prompt("Please enter password"),n=o.L.credential(d.currentUser.email,t);await o.Z(d.currentUser,n).catch((e=>{alert("Error reauthenticating"),console.log(e)})),o.af(d.currentUser,e).then((()=>{alert("Email updated")})).catch((e=>{alert("Error updating email"),console.log(e)}))}async function w(e,t,n,r){const s=(await m()).address;let o=await async function(e,t){let n="";const r=a.ref(h,t);return await a.uploadBytes(r,e),await a.getDownloadURL(a.ref(h,t)).then((e=>n=e)),n}(r,e),u=await async function(e,t,n,r,s){return(await i.addDoc(i.collection(l,"items",n,"items"),{itemName:e,itemDescription:t,itemCategory:n,address:r,userID:String(d.currentUser.uid),imageURL:s})).id}(e,t,n,s,o);await async function(e,t,n,r,s,o){const a=i.collection(l,"users",d.currentUser.uid,"items");await i.setDoc(i.doc(a,o),{itemName:e,itemDescription:t,itemCategory:n,address:r,imageURL:s})}(e,t,n,s,o,u),c.fillUserItems(d.currentUser.uid)}async function I(e){const t=i.collection(l,"items",e,"items"),n=i.query(t,i.limit(4));return await i.getDocs(n)}async function E(e){const t=i.collection(l,"users",e,"items"),n=i.query(t);return await i.getDocs(n)}async function _(e,t,n,r){await i.deleteDoc(i.doc(l,"items",e,"items",t)),await i.deleteDoc(i.doc(l,"users",n,"items",t));const s=a.ref(h,r);a.deleteObject(s)}o.t(d,(e=>{if(e){e.uid;c.successfulSignIn(),c.fillUserItems(d.currentUser.uid)}else c.successfulSignOut()}))})),s.register("lrOYs",(function(t,n){e(t.exports,"initializeApp",(()=>s("ef5iw").initializeApp)),e(t.exports,"registerVersion",(()=>s("ef5iw").registerVersion));s("ef5iw");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
s("ef5iw").registerVersion("firebase","9.4.1","app")})),s.register("ef5iw",(function(t,n){e(t.exports,"_registerComponent",(()=>m)),e(t.exports,"_getProvider",(()=>y)),e(t.exports,"_removeServiceInstance",(()=>v)),e(t.exports,"SDK_VERSION",(()=>_)),e(t.exports,"initializeApp",(()=>T)),e(t.exports,"getApp",(()=>b)),e(t.exports,"registerVersion",(()=>S));var r=s("8rC8i"),i=s("jGfah"),o=s("hI6C7");o=s("hI6C7");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const c="@firebase/app",u="0.7.8",l=new i.Logger("@firebase/app"),h="[DEFAULT]",d={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,p=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function m(e){const t=e.name;if(p.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;p.set(t,e);for(const t of f.values())g(t,e);return!0}function y(e,t){return e.container.getProvider(t)}function v(e,t,n="[DEFAULT]"){y(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},I=new o.ErrorFactory("app","Firebase",w);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.Component("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw I.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _="9.4.1";function T(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),s=n.name;if("string"!=typeof s||!s)throw I.create("bad-app-name",{appName:String(s)});const i=f.get(s);if(i){if(o.deepEqual(e,i.options)&&o.deepEqual(n,i.config))return i;throw I.create("duplicate-app",{appName:s})}const a=new r.ComponentContainer(s);for(const e of p.values())a.addComponent(e);const c=new E(e,n,a);return f.set(s,c),c}function b(e="[DEFAULT]"){const t=f.get(e);if(!t)throw I.create("no-app",{appName:e});return t}function S(e,t,n){var s;let i=null!==(s=d[e])&&void 0!==s?s:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}m(new r.Component(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var k;k="",m(new r.Component("platform-logger",(e=>new a(e)),"PRIVATE")),S(c,u,k),S(c,u,"esm2017"),S("fire-js","")})),s.register("8rC8i",(function(t,n){e(t.exports,"Component",(()=>i)),e(t.exports,"ComponentContainer",(()=>c));var r=s("hI6C7");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===o?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}})),s.register("hI6C7",(function(n,r){e(n.exports,"base64Decode",(()=>a)),e(n.exports,"Deferred",(()=>c)),e(n.exports,"createMockUserToken",(()=>u)),e(n.exports,"getUA",(()=>l)),e(n.exports,"isMobileCordova",(()=>h)),e(n.exports,"isBrowserExtension",(()=>d)),e(n.exports,"isReactNative",(()=>f)),e(n.exports,"isElectron",(()=>p)),e(n.exports,"isIE",(()=>g)),e(n.exports,"isUWP",(()=>m)),e(n.exports,"isSafari",(()=>y)),e(n.exports,"isIndexedDBAvailable",(()=>v)),e(n.exports,"FirebaseError",(()=>w)),e(n.exports,"ErrorFactory",(()=>I)),e(n.exports,"isEmpty",(()=>_)),e(n.exports,"deepEqual",(()=>T)),e(n.exports,"querystring",(()=>S)),e(n.exports,"querystringDecode",(()=>k)),e(n.exports,"extractQuerystring",(()=>A)),e(n.exports,"createSubscribe",(()=>C)),e(n.exports,"getModularInstance",(()=>D));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const s=e[t],i=t+1<e.length,o=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=s>>2,l=(3&s)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==i||null==o||null==a)throw Error();const c=s<<2|i>>4;if(r.push(c),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){return function(e){const t=s(e);return i.encodeByteArray(t,!0)}(e).replace(/\./g,"")},a=function(e){try{return i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(i)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function d(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){return l().indexOf("Electron/")>=0}function g(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){return l().indexOf("MSAppHost/")>=0}function y(){return!function(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v(){return"object"==typeof indexedDB}class w extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(E,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new w(r,o,n)}}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function T(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(b(n)&&b(i)){if(!T(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function b(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function k(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function A(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){const n=new N(e,t);return n.subscribe.bind(n)}class N{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=R),void 0===r.error&&(r.error=R),void 0===r.complete&&(r.complete=R);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function R(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e){return e&&e._delegate?e._delegate:e}})),s.register("jGfah",(function(t,n){e(t.exports,"LogLevel",(()=>s)),e(t.exports,"Logger",(()=>l)),e(t.exports,"setLogLevel",(()=>h)),e(t.exports,"setUserLogHandler",(()=>d));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var s,i;(i=s||(s={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";const o={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},a=s.INFO,c={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=c[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}function h(e){r.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const o=i.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:s[n].toLowerCase(),message:o,args:i,type:t.name})}}}})),s.register("l2bJD",(function(t,n){e(t.exports,"getFirestore",(()=>s("las03").getFirestore)),e(t.exports,"collection",(()=>s("las03").collection)),e(t.exports,"setDoc",(()=>s("las03").setDoc)),e(t.exports,"doc",(()=>s("las03").doc)),e(t.exports,"getDoc",(()=>s("las03").getDoc)),e(t.exports,"addDoc",(()=>s("las03").addDoc)),e(t.exports,"query",(()=>s("las03").query)),e(t.exports,"limit",(()=>s("las03").limit)),e(t.exports,"getDocs",(()=>s("las03").getDocs)),e(t.exports,"deleteDoc",(()=>s("las03").deleteDoc)),s("las03")})),s.register("las03",(function(t,n){e(t.exports,"collection",(()=>Mi)),e(t.exports,"doc",(()=>Fi)),e(t.exports,"getFirestore",(()=>qi)),e(t.exports,"query",(()=>Eo)),e(t.exports,"limit",(()=>To)),e(t.exports,"getDoc",(()=>ko)),e(t.exports,"getDocs",(()=>Co)),e(t.exports,"setDoc",(()=>No)),e(t.exports,"deleteDoc",(()=>Ro)),e(t.exports,"addDoc",(()=>Do));var r=s("ef5iw"),i=s("8rC8i"),o=s("jGfah"),a=s("hI6C7"),c=s("5Igt1");s("d6KlF");const u="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.4.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=new o.Logger("@firebase/firestore");function f(){return d.logLevel}function p(e,...t){if(d.logLevel<=o.LogLevel.DEBUG){const n=t.map(y);d.debug(`Firestore (${h}): ${e}`,...n)}}function g(e,...t){if(d.logLevel<=o.LogLevel.ERROR){const n=t.map(y);d.error(`Firestore (${h}): ${e}`,...n)}}function m(e,...t){if(d.logLevel<=o.LogLevel.WARN){const n=t.map(y);d.warn(`Firestore (${h}): ${e}`,...n)}}function y(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+e;throw g(t),new Error(t)}function w(e,t){e||v()}function I(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(l.UNAUTHENTICATED)))}shutdown(){}}class k{constructor(e){this.t=e,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new T;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new T,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{p("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new T)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(p("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(w("string"==typeof t.accessToken),new b(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return w(null===e||"string"==typeof e),new l(e)}}class A{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=l.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class C{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new A(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(l.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */N.T=-1;class D{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=R(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function O(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return x.fromMillis(Date.now())}static fromDate(e){return x.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new x(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new x(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function M(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===V.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof V?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class j extends V{construct(e,t,n){return new j(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new _(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new j(t)}static emptyPath(){return new j([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class B extends V{construct(e,t,n){return new B(e,t,n)}static isValidIdentifier(e){return q.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),B.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new B(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new _(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new _(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new _(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new _(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new B(t)}static emptyPath(){return new B([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.fields=e,e.sort(B.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new z(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new z(t)}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}z.EMPTY_BYTE_STRING=new z("");const $=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function K(e){if(w(!!e),"string"==typeof e){let t=0;const n=$.exec(e);if(w(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:G(e.seconds),nanos:G(e.nanos)}}function G(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function W(e){return"string"==typeof e?z.fromBase64String(e):z.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function X(e){const t=e.mapValue.fields.__previous_value__;return Q(t)?X(t):t}function J(e){const t=K(e.mapValue.fields.__local_write_time__.timestampValue);return new x(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){return null==e}function Z(e){return 0===e&&1/e==-1/0}function ee(e){return"number"==typeof e&&Number.isInteger(e)&&!Z(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(j.fromString(e))}static fromName(e){return new te(j.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===j.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return j.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new j(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Q(e)?4:10:v()}function re(e,t){const n=ne(e);if(n!==ne(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return J(e).isEqual(J(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=K(e.timestampValue),r=K(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,W(e.bytesValue).isEqual(W(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return G(e.geoPointValue.latitude)===G(t.geoPointValue.latitude)&&G(e.geoPointValue.longitude)===G(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return G(e.integerValue)===G(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=G(e.doubleValue),r=G(t.doubleValue);return n===r?Z(n)===Z(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],re);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(U(n)!==U(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!re(n[e],r[e])))return!1;return!0}(e,t);default:return v()}var r}function se(e,t){return void 0!==(e.values||[]).find((e=>re(e,t)))}function ie(e,t){const n=ne(e),r=ne(t);if(n!==r)return O(n,r);switch(n){case 0:return 0;case 1:return O(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=G(e.integerValue||e.doubleValue),r=G(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return oe(e.timestampValue,t.timestampValue);case 4:return oe(J(e),J(t));case 5:return O(e.stringValue,t.stringValue);case 6:return function(e,t){const n=W(e),r=W(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=O(n[e],r[e]);if(0!==t)return t}return O(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=O(G(e.latitude),G(t.latitude));return 0!==n?n:O(G(e.longitude),G(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=ie(n[e],r[e]);if(t)return t}return O(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let e=0;e<r.length&&e<i.length;++e){const t=O(r[e],i[e]);if(0!==t)return t;const o=ie(n[r[e]],s[i[e]]);if(0!==o)return o}return O(r.length,i.length)}(e.mapValue,t.mapValue);default:throw v()}}function oe(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return O(e,t);const n=K(e),r=K(t),s=O(n.seconds,r.seconds);return 0!==s?s:O(n.nanos,r.nanos)}function ae(e){return ce(e)}function ce(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=K(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?W(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,te.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ce(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${ce(e.fields[s])}`;return n+"}"}(e.mapValue):v()}function ue(e){return!!e&&"integerValue"in e}function le(e){return!!e&&"arrayValue"in e}function he(e){return!!e&&"nullValue"in e}function de(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function fe(e){return!!e&&"mapValue"in e}function pe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return M(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=pe(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=pe(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.value=e}static empty(){return new ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!fe(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pe(t)}setAll(e){let t=B.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=pe(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());fe(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return re(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];fe(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){M(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new ge(pe(this.value))}}function me(e){const t=[];return M(e.fields,((e,n)=>{const r=new B([e]);if(fe(n)){const e=me(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new H(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ye{constructor(e,t,n,r,s){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=s}static newInvalidDocument(e){return new ye(e,0,P.min(),ge.empty(),0)}static newFoundDocument(e,t,n){return new ye(e,1,t,n,0)}static newNoDocument(e,t){return new ye(e,2,t,ge.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,ge.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new ye(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.A=null}}function we(e,t=null,n=[],r=[],s=null,i=null,o=null){return new ve(e,t,n,r,s,i,o)}function Ie(e){const t=I(e);if(null===t.A){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+ae(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Y(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Le(t.startAt)),t.endAt&&(e+="|ub:",e+=Le(t.endAt)),t.A=e}return t.A}function Ee(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Pe(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!re(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Me(e.startAt,t.startAt)&&Me(e.endAt,t.endAt)}function _e(e){return te.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Te extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,n):new be(e,t,n):"array-contains"===t?new Ce(e,n):"in"===t?new Ne(e,n):"not-in"===t?new Re(e,n):"array-contains-any"===t?new De(e,n):new Te(e,t,n)}static R(e,t,n){return"in"===t?new Se(e,n):new ke(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(ie(t,this.value)):null!==t&&ne(this.value)===ne(t)&&this.P(ie(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class be extends Te{constructor(e,t,n){super(e,t,n),this.key=te.fromName(n.referenceValue)}matches(e){const t=te.comparator(e.key,this.key);return this.P(t)}}class Se extends Te{constructor(e,t){super(e,"in",t),this.keys=Ae("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ke extends Te{constructor(e,t){super(e,"not-in",t),this.keys=Ae("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ae(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>te.fromName(e.referenceValue)))}class Ce extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return le(t)&&se(t.arrayValue,this.value)}}class Ne extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&se(this.value.arrayValue,t)}}class Re extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(se(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!se(this.value.arrayValue,t)}}class De extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!le(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>se(this.value.arrayValue,e)))}}class Oe{constructor(e,t){this.position=e,this.before=t}}function Le(e){return`${e.before?"b":"a"}:${e.position.map((e=>ae(e))).join(",")}`}class xe{constructor(e,t="asc"){this.field=e,this.dir=t}}function Pe(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ue(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?te.comparator(te.fromName(o.referenceValue),n.key):ie(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function Me(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!re(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Ve(e,t,n,r,s,i,o,a){return new Fe(e,t,n,r,s,i,o,a)}function je(e){return new Fe(e)}function qe(e){return!Y(e.limit)&&"F"===e.limitType}function Be(e){return!Y(e.limit)&&"L"===e.limitType}function He(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ze(e){for(const t of e.filters)if(t.v())return t.field;return null}function $e(e){return null!==e.collectionGroup}function Ke(e){const t=I(e);if(null===t.V){t.V=[];const e=ze(t),n=He(t);if(null!==e&&null===n)e.isKeyField()||t.V.push(new xe(e)),t.V.push(new xe(B.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.V.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new xe(B.keyField(),e))}}}return t.V}function Ge(e){const t=I(e);if(!t.S)if("F"===t.limitType)t.S=we(t.path,t.collectionGroup,Ke(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Ke(t)){const t="desc"===n.dir?"asc":"desc";e.push(new xe(n.field,t))}const n=t.endAt?new Oe(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Oe(t.startAt.position,!t.startAt.before):null;t.S=we(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.S}function We(e,t,n){return new Fe(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Qe(e,t){return Ee(Ge(e),Ge(t))&&e.limitType===t.limitType}function Xe(e){return`${Ie(Ge(e))}|lt:${e.limitType}`}function Je(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{var t;return`${(t=e).field.canonicalString()} ${t.op} ${ae(t.value)}`})).join(", ")}]`),Y(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: "+Le(e.startAt)),e.endAt&&(t+=", endAt: "+Le(e.endAt)),`Target(${t})`}(Ge(e))}; limitType=${e.limitType})`}function Ye(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):te.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!Ue(n.startAt,Ke(n),r)||n.endAt&&Ue(n.endAt,Ke(n),r)));var n,r}function Ze(e){return(t,n)=>{let r=!1;for(const s of Ke(e)){const e=et(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function et(e,t,n){const r=e.field.isKeyField()?te.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?ie(r,s):v()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Z(t)?"-0":t}}function nt(e){return{integerValue:""+e}}function rt(e,t){return ee(t)?nt(t):tt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this._=void 0}}function it(e,t,n){return e instanceof ct?ut(e,t):e instanceof lt?ht(e,t):n}function ot(e,t){var n,r;return e instanceof dt?ue(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}class at extends st{}class ct extends st{constructor(e){super(),this.elements=e}}function ut(e,t){const n=pt(t);for(const t of e.elements)n.some((e=>re(e,t)))||n.push(t);return{arrayValue:{values:n}}}class lt extends st{constructor(e){super(),this.elements=e}}function ht(e,t){let n=pt(t);for(const t of e.elements)n=n.filter((e=>!re(e,t)));return{arrayValue:{values:n}}}class dt extends st{constructor(e,t){super(),this.N=e,this.C=t}}function ft(e){return G(e.integerValue||e.doubleValue)}function pt(e){return le(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yt(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class vt{}function wt(e,t,n){var r;e instanceof bt?function(e,t,n){const r=e.value.clone(),s=At(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof St?function(e,t,n){if(!yt(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=At(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(kt(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function It(e,t,n){var r;e instanceof bt?function(e,t,n){if(!yt(e.precondition,t))return;const r=e.value.clone(),s=Ct(e.fieldTransforms,n,t);r.setAll(s),t.convertToFoundDocument(Tt(t),r).setHasLocalMutations()}(e,t,n):e instanceof St?function(e,t,n){if(!yt(e.precondition,t))return;const r=Ct(e.fieldTransforms,n,t),s=t.data;s.setAll(kt(e)),s.setAll(r),t.convertToFoundDocument(Tt(t),s).setHasLocalMutations()}(e,t,n):(r=t,yt(e.precondition,r)&&r.convertToNoDocument(P.min()))}function Et(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=ot(r.transform,e||null);null!=s&&(null==n&&(n=ge.empty()),n.set(r.field,s))}return n||null}function _t(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&L(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof ct&&r instanceof ct||n instanceof lt&&r instanceof lt?L(n.elements,r.elements,re):n instanceof dt&&r instanceof dt?re(n.C,r.C):n instanceof at&&r instanceof at);var n,r}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}function Tt(e){return e.isFoundDocument()?e.version:P.min()}class bt extends vt{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class St extends vt{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}}function kt(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function At(e,t,n){const r=new Map;w(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,it(o,a,n[s]))}return r}function Ct(e,t,n){const r=new Map;for(const a of e){const e=a.transform,c=n.data.field(a.field);r.set(a.field,(i=c,o=t,(s=e)instanceof at?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,i):s instanceof ct?ut(s,i):s instanceof lt?ht(s,i):function(e,t){const n=ot(e,t),r=ft(n)+ft(e.C);return ue(n)&&ue(e.C)?nt(r):tt(e.N,r)}(s,i)))}var s,i,o;return r}class Nt extends vt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Rt extends vt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot,Lt;function xt(e){switch(e){default:return v();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Pt(e){if(void 0===e)return g("GRPC error has no .code"),E.UNKNOWN;switch(e){case Ot.OK:return E.OK;case Ot.CANCELLED:return E.CANCELLED;case Ot.UNKNOWN:return E.UNKNOWN;case Ot.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ot.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ot.INTERNAL:return E.INTERNAL;case Ot.UNAVAILABLE:return E.UNAVAILABLE;case Ot.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ot.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ot.NOT_FOUND:return E.NOT_FOUND;case Ot.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ot.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ot.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ot.ABORTED:return E.ABORTED;case Ot.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ot.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ot.DATA_LOSS:return E.DATA_LOSS;default:return v()}}(Lt=Ot||(Ot={}))[Lt.OK=0]="OK",Lt[Lt.CANCELLED=1]="CANCELLED",Lt[Lt.UNKNOWN=2]="UNKNOWN",Lt[Lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lt[Lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lt[Lt.NOT_FOUND=5]="NOT_FOUND",Lt[Lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lt[Lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lt[Lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lt[Lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lt[Lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lt[Lt.ABORTED=10]="ABORTED",Lt[Lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lt[Lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lt[Lt.INTERNAL=13]="INTERNAL",Lt[Lt.UNAVAILABLE=14]="UNAVAILABLE",Lt[Lt.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(e,t){this.comparator=e,this.root=t||Ft.EMPTY}insert(e,t){return new Ut(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new Ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mt(this.root,e,this.comparator,!0)}}class Mt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:Ft.RED,this.left=null!=r?r:Ft.EMPTY,this.right=null!=s?s:Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new Ft(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ft.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1,Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,r,s){return this}insert(e,t,n){return new Ft(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vt{constructor(e){this.comparator=e,this.data=new Ut(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jt(this.data.getIterator())}getIteratorFrom(e){return new jt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Vt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Vt(this.comparator);return t.data=e,t}}class jt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Ut(te.comparator);function Bt(){return qt}const Ht=new Ut(te.comparator);function zt(){return Ht}const $t=new Ut(te.comparator);function Kt(){return $t}const Gt=new Vt(te.comparator);function Wt(...e){let t=Gt;for(const n of e)t=t.add(n);return t}const Qt=new Vt(O);function Xt(){return Qt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Yt.createSynthesizedTargetChangeForCurrentChange(e,t)),new Jt(P.min(),n,Xt(),Bt(),Wt())}}class Yt{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Yt(z.EMPTY_BYTE_STRING,t,Wt(),Wt(),Wt())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t,n,r){this.k=e,this.removedTargetIds=t,this.key=n,this.$=r}}class en{constructor(e,t){this.targetId=e,this.O=t}}class tn{constructor(e,t,n=z.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class nn{constructor(){this.F=0,this.M=on(),this.L=z.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Wt(),t=Wt(),n=Wt();return this.M.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}})),new Yt(this.L,this.B,e,t,n)}G(){this.U=!1,this.M=on()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class rn{constructor(e){this.tt=e,this.et=new Map,this.nt=Bt(),this.st=sn(),this.it=new Vt(O)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.ct(t,e.key,e.$);for(const t of e.removedTargetIds)this.ct(t,e.key,e.$)}at(e){this.forEachTarget(e,(t=>{const n=this.ut(t);switch(e.state){case 0:this.ht(t)&&n.j(e.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(e.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(t);break;case 3:this.ht(t)&&(n.Z(),n.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),n.j(e.resumeToken));break;default:v()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach(((e,n)=>{this.ht(n)&&t(n)}))}ft(e){const t=e.targetId,n=e.O.count,r=this.dt(t);if(r){const e=r.target;if(_e(e))if(0===n){const n=new te(e.path);this.ct(t,n,ye.newNoDocument(n,P.min()))}else w(1===n);else this.wt(t)!==n&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach(((n,r)=>{const s=this.dt(r);if(s){if(n.current&&_e(s.target)){const t=new te(s.target.path);null!==this.nt.get(t)||this.gt(r,t)||this.ct(r,t,ye.newNoDocument(t,e))}n.K&&(t.set(r,n.W()),n.G())}}));let n=Wt();this.st.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.dt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new Jt(e,t,this.it,this.nt,n);return this.nt=Bt(),this.st=sn(),this.it=new Vt(O),r}ot(e,t){if(!this.ht(e))return;const n=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,n),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}ct(e,t,n){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,t)?r.H(t,1):r.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),n&&(this.nt=this.nt.insert(t,n))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new nn,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new Vt(O),this.st=this.st.insert(e,t)),t}ht(e){const t=null!==this.dt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new nn),this.tt.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function sn(){return new Ut(te.comparator)}function on(){return new Ut(te.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an={asc:"ASCENDING",desc:"DESCENDING"},cn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class un{constructor(e,t){this.databaseId=e,this.D=t}}function ln(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function hn(e,t){return e.D?t.toBase64():t.toUint8Array()}function dn(e,t){return ln(e,t.toTimestamp())}function fn(e){return w(!!e),P.fromTimestamp(function(e){const t=K(e);return new x(t.seconds,t.nanos)}(e))}function pn(e,t){return(n=e,new j(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function gn(e){const t=j.fromString(e);return w(Un(t)),t}function mn(e,t){return pn(e.databaseId,t.path)}function yn(e,t){const n=gn(t);if(n.get(1)!==e.databaseId.projectId)throw new _(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new te(En(n))}function vn(e,t){return pn(e.databaseId,t)}function wn(e){const t=gn(e);return 4===t.length?j.emptyPath():En(t)}function In(e){return new j(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function En(e){return w(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function _n(e,t,n){return{name:mn(e,t),fields:n.value.mapValue.fields}}function Tn(e,t){let n;if(t instanceof bt)n={update:_n(e,t.key,t.value)};else if(t instanceof Nt)n={delete:mn(e,t.key)};else if(t instanceof St)n={update:_n(e,t.key,t.data),updateMask:Pn(t.fieldMask)};else{if(!(t instanceof Rt))return v();n={verify:mn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof at)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ct)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof lt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof dt)return{fieldPath:t.field.canonicalString(),increment:n.C};throw v()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(s=t.precondition).updateTime?{updateTime:dn(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:v())),n;var r,s}function bn(e,t){return{documents:[vn(e,t.path)]}}function Sn(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=vn(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=vn(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(de(e.value))return{unaryFilter:{field:On(e.field),op:"IS_NAN"}};if(he(e.value))return{unaryFilter:{field:On(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(de(e.value))return{unaryFilter:{field:On(e.field),op:"IS_NOT_NAN"}};if(he(e.value))return{unaryFilter:{field:On(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:On(e.field),op:Dn(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>{return{field:On((t=e).field),direction:Rn(t.dir)};var t}))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=(a=e,c=t.limit,a.D||Y(c)?c:{value:c});var a,c;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=Cn(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Cn(t.endAt)),n}function kn(e){let t=wn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){w(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=An(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new xe(Ln((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Y(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Nn(n.startAt));let u=null;return n.endAt&&(u=Nn(n.endAt)),Ve(t,s,o,i,a,"F",c,u)}function An(e){return e?void 0!==e.unaryFilter?[xn(e)]:void 0!==e.fieldFilter?[(t=e,Te.create(Ln(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value))]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>An(e))).reduce(((e,t)=>e.concat(t))):v():[];var t}function Cn(e){return{before:e.before,values:e.position}}function Nn(e){const t=!!e.before,n=e.values||[];return new Oe(n,t)}function Rn(e){return an[e]}function Dn(e){return cn[e]}function On(e){return{fieldPath:e.canonicalString()}}function Ln(e){return B.fromServerFormat(e.fieldPath)}function xn(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ln(e.unaryFilter.field);return Te.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ln(e.unaryFilter.field);return Te.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ln(e.unaryFilter.field);return Te.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ln(e.unaryFilter.field);return Te.create(s,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function Pn(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Un(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Vn(t)),t=Fn(e.get(n),t);return Vn(t)}function Fn(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Vn(e){return e+""}class jn{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}jn.store="owner",jn.key="owner";class qn{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}qn.store="mutationQueues",qn.keyPath="userId";class Bn{constructor(e,t,n,r,s){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=s}}Bn.store="mutations",Bn.keyPath="batchId",Bn.userMutationsIndex="userMutationsIndex",Bn.userMutationsKeyPath=["userId","batchId"];class Hn{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,Mn(t)]}static key(e,t,n){return[e,Mn(t),n]}}Hn.store="documentMutations",Hn.PLACEHOLDER=new Hn;class zn{constructor(e,t,n,r,s,i){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=s,this.parentPath=i}}zn.store="remoteDocuments",zn.readTimeIndex="readTimeIndex",zn.readTimeIndexPath="readTime",zn.collectionReadTimeIndex="collectionReadTimeIndex",zn.collectionReadTimeIndexPath=["parentPath","readTime"];class $n{constructor(e){this.byteSize=e}}$n.store="remoteDocumentGlobal",$n.key="remoteDocumentGlobalKey";class Kn{constructor(e,t,n,r,s,i,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=i,this.query=o}}Kn.store="targets",Kn.keyPath="targetId",Kn.queryTargetsIndexName="queryTargetsIndex",Kn.queryTargetsKeyPath=["canonicalId","targetId"];class Gn{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}Gn.store="targetDocuments",Gn.keyPath=["targetId","path"],Gn.documentTargetsIndex="documentTargetsIndex",Gn.documentTargetsKeyPath=["path","targetId"];class Wn{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}Wn.key="targetGlobalKey",Wn.store="targetGlobal";class Qn{constructor(e,t){this.collectionId=e,this.parent=t}}Qn.store="collectionParents",Qn.keyPath=["collectionId","parent"];class Xn{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}Xn.store="clientMetadata",Xn.keyPath="clientId";class Jn{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}Jn.store="bundles",Jn.keyPath="bundleId";class Yn{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}Yn.store="namedQueries",Yn.keyPath="name";qn.store,Bn.store,Hn.store,zn.store,Kn.store,jn.store,Wn.store,Gn.store,Xn.store,$n.store,Qn.store,Jn.store,Yn.store;const Zn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class er{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new tr(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof tr?t:tr.resolve(t)}catch(e){return tr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):tr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):tr.reject(t)}static resolve(e){return new tr(((t,n)=>{t(e)}))}static reject(e){return new tr(((t,n)=>{n(e)}))}static waitFor(e){return new tr(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=tr.resolve(!1);for(const n of e)t=t.next((e=>e?tr.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&wt(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&It(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&It(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(P.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Wt())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,((e,t)=>_t(e,t)))&&L(this.baseMutations,e.baseMutations,((e,t)=>_t(e,t)))}}class sr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){w(e.mutations.length===n.length);let r=Kt();const s=e.mutations;for(let e=0;e<s.length;e++)r=r.insert(s[e].key,n[e].version);return new sr(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,n,r,s=P.min(),i=P.min(),o=z.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.Wt=e}}function ar(e){const t=kn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?We(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cr{constructor(){this.Gt=new ur}addToCollectionParentIndex(e,t){return this.Gt.add(t),tr.resolve()}getCollectionParents(e,t){return tr.resolve(this.Gt.getEntries(t))}}class ur{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Vt(j.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Vt(j.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new lr(e,lr.DEFAULT_COLLECTION_PERCENTILE,lr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr.DEFAULT_COLLECTION_PERCENTILE=10,lr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lr.DEFAULT=new lr(41943040,lr.DEFAULT_COLLECTION_PERCENTILE,lr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lr.DISABLED=new lr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new hr(0)}static ie(){return new hr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dr(e){if(e.code!==E.FAILED_PRECONDITION||e.message!==Zn)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){M(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return F(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.changes=new fr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:P.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:ye.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?tr.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr{constructor(e,t,n){this.He=e,this.In=t,this.Ht=n}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Rn(e,t,n)))}Rn(e,t,n){return this.He.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}Pn(e,t){return this.He.getEntries(e,t).next((t=>this.vn(e,t).next((()=>t))))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return r=t,te.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Vn(e,t.path):$e(t)?this.Sn(e,t,n):this.Dn(e,t,n);var r}Vn(e,t){return this.An(e,new te(t)).next((e=>{let t=zt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Sn(e,t,n){const r=t.collectionGroup;let s=zt();return this.Ht.getCollectionParents(e,r).next((i=>tr.forEach(i,(i=>{const o=(a=t,c=i.child(r),new Fe(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.Dn(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}Dn(e,t,n){let r,s;return this.He.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(s=t,this.Cn(e,s,r).next((e=>{r=e;for(const e of s)for(const t of e.mutations){const n=t.key;let s=r.get(n);null==s&&(s=ye.newInvalidDocument(n),r=r.insert(n,s)),It(t,s,e.localWriteTime),s.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{Ye(t,n)||(r=r.remove(e))})),r)))}Cn(e,t,n){let r=Wt();for(const e of t)for(const t of e.mutations)t instanceof St&&null===n.get(t.key)&&(r=r.add(t.key));let s=n;return this.He.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(s=s.insert(e,t))})),s)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Nn=n,this.xn=r}static kn(e,t){let n=Wt(),r=Wt();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new mr(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return 0===(s=t).filters.length&&null===s.limit&&null==s.startAt&&null==s.endAt&&(0===s.explicitOrderBy.length||1===s.explicitOrderBy.length&&s.explicitOrderBy[0].field.isKeyField())||n.isEqual(P.min())?this.Fn(e,t):this.On.Pn(e,r).next((s=>{const i=this.Mn(t,s);return(qe(t)||Be(t))&&this.Ln(t.limitType,i,r,n)?this.Fn(e,t):(f()<=o.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Je(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(i.forEach((t=>{e=e.insert(t.key,t)})),e))))}));var s}Mn(e,t){let n=new Vt(Ze(e));return t.forEach(((t,r)=>{Ye(e,r)&&(n=n.add(r))})),n}Ln(e,t,n,r){if(n.size!==t.size)return!0;const s="F"===e?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Fn(e,t){return f()<=o.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Je(t)),this.On.getDocumentsMatchingQuery(e,t,P.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t,n,r){this.persistence=e,this.Bn=t,this.N=r,this.Un=new Ut(O),this.qn=new fr((e=>Ie(e)),Ee),this.Kn=P.min(),this.In=e.getMutationQueue(n),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new gr(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Un)))}}function wr(e,t,n,r){return new vr(e,t,n,r)}async function Ir(e,t){const n=I(e);let r=n.In,s=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.In.getAllMutationBatches(e).next((o=>(i=o,r=n.persistence.getMutationQueue(t),s=new gr(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=Wt();for(const e of i){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return s.Pn(e,o).next((e=>({Wn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.In=r,n.Qn=s,n.Bn.$n(n.Qn),i}function Er(e){const t=I(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.ze.getLastRemoteSnapshotVersion(e)))}function _r(e,t,n,r,s){let i=Wt();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Bt();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==s?void 0:s.get(n))||r;o.isNoDocument()&&o.version.isEqual(P.min())?(t.removeEntry(n,c),i=i.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),i=i.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),i}))}function Tr(e,t){const n=I(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.In.getNextMutationBatchAfterBatchId(e,t))))}function br(e,t){const n=I(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.ze.getTargetData(e,t).next((s=>s?(r=s,tr.resolve(r)):n.ze.allocateTargetId(e).next((s=>(r=new ir(t,s,0,e.currentSequenceNumber),n.ze.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Un.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(e.targetId,e),n.qn.set(t,e.targetId)),e}))}async function Sr(e,t,n){const r=I(e),s=r.Un.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!nr(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Un=r.Un.remove(t),r.qn.delete(s.target)}function kr(e,t,n){const r=I(e);let s=P.min(),i=Wt();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=I(e),s=r.qn.get(n);return void 0!==s?tr.resolve(r.Un.get(s)):r.ze.getTargetData(t,n)}(r,e,Ge(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Bn.getDocumentsMatchingQuery(e,t,n?s:P.min(),n?i:Wt()))).next((e=>({documents:e,Gn:i})))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return tr.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var n;return this.Yn.set(t.id,{id:(n=t).id,version:n.version,createTime:fn(n.createTime)}),tr.resolve()}getNamedQuery(e,t){return tr.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:(n=t).name,query:ar(n.bundledQuery),readTime:fn(n.readTime)}),tr.resolve();var n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.Zn=new Vt(Nr.ts),this.es=new Vt(Nr.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new Nr(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new Nr(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}cs(e){const t=new te(new j([])),n=new Nr(t,e),r=new Nr(t,e+1),s=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),s.push(e.key)})),s}us(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new te(new j([])),n=new Nr(t,e),r=new Nr(t,e+1);let s=Wt();return this.es.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Nr(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Nr{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return te.comparator(e.key,t.key)||O(e.ls,t.ls)}static ns(e,t){return O(e.ls,t.ls)||te.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new Vt(Nr.ts)}checkEmpty(e){return tr.resolve(0===this.In.length)}addMutationBatch(e,t,n,r){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const i=new rr(s,t,n,r);this.In.push(i);for(const t of r)this.ds=this.ds.add(new Nr(t.key,s)),this.Ht.addToCollectionParentIndex(e,t.key.path.popLast());return tr.resolve(i)}lookupMutationBatch(e,t){return tr.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this._s(n),s=r<0?0:r;return tr.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return tr.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return tr.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Nr(t,0),r=new Nr(t,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(e=>{const t=this.ws(e.ls);s.push(t)})),tr.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Vt(O);return t.forEach((e=>{const t=new Nr(e,0),r=new Nr(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),tr.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;te.isDocumentKey(s)||(s=s.child(""));const i=new Nr(new te(s),0);let o=new Vt(O);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),i),tr.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this.ws(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){w(0===this.ys(t.batchId,"removed")),this.In.shift();let n=this.ds;return tr.forEach(t.mutations,(r=>{const s=new Nr(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}te(e){}containsKey(e,t){const n=new Nr(t,0),r=this.ds.firstAfterOrEqual(n);return tr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,tr.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new Ut(te.comparator),this.size=0}addEntry(e,t,n){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-i,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return tr.resolve(n?n.document.clone():ye.newInvalidDocument(t))}getEntries(e,t){let n=Bt();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():ye.newInvalidDocument(e))})),tr.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=Bt();const s=new te(t.path.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s,readTime:o}}=i.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||Ye(t,s)&&(r=r.insert(s.key,s.clone()))}return tr.resolve(r)}Ts(e,t){return tr.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Or(this)}getSize(e){return tr.resolve(this.size)}}class Or extends pr{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.Se.addEntry(e,r.document,this.getReadTime(n))):this.Se.removeEntry(n)})),tr.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.persistence=e,this.Es=new fr((e=>Ie(e)),Ee),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Is=0,this.As=new Cr,this.targetCount=0,this.Rs=hr.se()}forEachTarget(e,t){return this.Es.forEach(((e,n)=>t(n))),tr.resolve()}getLastRemoteSnapshotVersion(e){return tr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return tr.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),tr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Is&&(this.Is=t),tr.resolve()}ce(e){this.Es.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new hr(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,tr.resolve()}updateTargetData(e,t){return this.ce(t),tr.resolve()}removeTargetData(e,t){return this.Es.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,tr.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Es.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Es.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),tr.waitFor(s).next((()=>r))}getTargetCount(e){return tr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Es.get(t)||null;return tr.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),tr.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),tr.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),tr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return tr.resolve(n)}containsKey(e,t){return tr.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){var n,r;this.bs={},this.Le=new N(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new Lr(this),this.Ht=new cr,this.He=(n=this.Ht,r=e=>this.referenceDelegate.Ps(e),new Dr(n,r)),this.N=new or(t),this.Je=new Ar(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new Rr(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const r=new Pr(this.Le.next());return this.referenceDelegate.vs(),n(r).next((e=>this.referenceDelegate.Vs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ss(e,t){return tr.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class Pr extends er{constructor(e){super(),this.currentSequenceNumber=e}}class Ur{constructor(e){this.persistence=e,this.Ds=new Cr,this.Cs=null}static Ns(e){return new Ur(e)}get xs(){if(this.Cs)return this.Cs;throw v()}addReference(e,t,n){return this.Ds.addReference(n,t),this.xs.delete(n.toString()),tr.resolve()}removeReference(e,t,n){return this.Ds.removeReference(n,t),this.xs.add(n.toString()),tr.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),tr.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return tr.forEach(this.xs,(n=>{const r=te.fromPath(n);return this.ks(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Cs=null,t.apply(e))))}updateLimboDocument(e,t){return this.ks(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}Ps(e){return 0}ks(e,t){return tr.or([()=>tr.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.activeTargetIds=Xt()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fr{constructor(){this.yi=new Mr,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,n){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Mr,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{Ti(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,n,r){const s=this.Bi(e,t);p("RestConnection","Sending: ",s,n);const i={};return this.Ui(i,r),this.qi(e,s,i,n).then((e=>(p("RestConnection","Received: ",e),e)),(t=>{throw m("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}Ki(e,t,n,r){return this.Li(e,t,n,r)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+h,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}Bi(e,t){const n=qr[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,n,r){return new Promise(((s,i)=>{const o=new c.XhrIo;o.listenOnce(c.EventType.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case c.ErrorCode.NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),s(t);break;case c.ErrorCode.TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),i(new _(E.DEADLINE_EXCEEDED,"Request time out"));break;case c.ErrorCode.HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(e.status);i(new _(t,e.message))}else i(new _(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new _(E.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ji(e,t){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=c.createWebChannelTransport(),s=c.getStatEventTarget(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new c.FetchXmlHttpFactory({})),this.Ui(i.initMessageHeaders,t),a.isMobileCordova()||a.isReactNative()||a.isElectron()||a.isIE()||a.isUWP()||a.isBrowserExtension()||(i.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");p("Connection","Creating WebChannel: "+o,i);const u=r.createWebChannel(o,i);let l=!1,h=!1;const d=new Br({vi:e=>{h?p("Connection","Not sending because WebChannel is closed:",e):(l||(p("Connection","Opening WebChannel transport."),u.open(),l=!0),p("Connection","WebChannel sending:",e),u.send(e))},Vi:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,c.WebChannel.EventType.OPEN,(()=>{h||p("Connection","WebChannel transport opened.")})),f(u,c.WebChannel.EventType.CLOSE,(()=>{h||(h=!0,p("Connection","WebChannel transport closed"),d.$i())})),f(u,c.WebChannel.EventType.ERROR,(e=>{h||(h=!0,m("Connection","WebChannel transport errored:",e),d.$i(new _(E.UNAVAILABLE,"The operation could not be completed")))})),f(u,c.WebChannel.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];w(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){p("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=Ot[e];if(void 0!==t)return Pt(t)}(e),n=s.message;void 0===t&&(t=E.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),h=!0,d.$i(new _(t,n)),u.close()}else p("Connection","WebChannel received:",n),d.Oi(n)}})),f(s,c.Event.STAT_EVENT,(e=>{e.stat===c.Stat.PROXY?p("Connection","Detected buffering proxy"):e.stat===c.Stat.NOPROXY&&p("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.ki()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(e){return new un(e,!0)}class Kr{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Oe=e,this.timerId=t,this.Qi=n,this.Wi=r,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),e()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t,n,r,s,i,o){this.Oe=e,this.er=n,this.nr=r,this.sr=s,this.credentialsProvider=i,this.listener=o,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new Kr(e,t)}ur(){return 1===this.state||5===this.state||this.hr()}hr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&null===this.rr&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this._r())))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.gr(),this.yr(),this.ar.cancel(),this.ir++,4!==e?this.ar.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(g(t.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),t=this.ir;this.credentialsProvider.getToken().then((e=>{this.ir===t&&this.Er(e)}),(t=>{e((()=>{const e=new _(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ir(e)}))}))}Er(e){const t=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si((()=>{t((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,(()=>(this.hr()&&(this.state=3),Promise.resolve()))),this.listener.Si())))})),this.stream.Ci((e=>{t((()=>this.Ir(e)))})),this.stream.onMessage((e=>{t((()=>this.onMessage(e)))}))}lr(){this.state=5,this.ar.Xi((async()=>{this.state=0,this.start()}))}Ir(e){return p("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return t=>{this.Oe.enqueueAndForget((()=>this.ir===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Wr extends Gr{constructor(e,t,n,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s),this.N=r}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:v(),i=t.targetChange.targetIds||[],o=function(e,t){return e.D?(w(void 0===t||"string"==typeof t),z.fromBase64String(t||"")):(w(void 0===t||t instanceof Uint8Array),z.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?E.UNKNOWN:Pt(e.code);return new _(t,e.message||"")}(a);n=new tn(s,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=yn(e,r.document.name),i=fn(r.document.updateTime),o=new ge({mapValue:{fields:r.document.fields}}),a=ye.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Zt(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=yn(e,r.document),i=r.readTime?fn(r.readTime):P.min(),o=ye.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Zt([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=yn(e,r.document),i=r.removedTargetIds||[];n=new Zt([],i,s,null)}else{if(!("filter"in t))return v();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new Dt(r),i=e.targetId;n=new en(i,s)}}var r;return n}(this.N,e),n=function(e){if(!("targetChange"in e))return P.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?P.min():t.readTime?fn(t.readTime):P.min()}(e);return this.listener.Rr(t,n)}br(e){const t={};t.database=In(this.N),t.addTarget=function(e,t){let n;const r=t.target;return n=_e(r)?{documents:bn(e,r)}:{query:Sn(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=hn(e,t.resumeToken):t.snapshotVersion.compareTo(P.min())>0&&(n.readTime=ln(e,t.snapshotVersion.toTimestamp())),n}(this.N,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,e);n&&(t.labels=n),this.mr(t)}Pr(e){const t={};t.database=In(this.N),t.removeTarget=e,this.mr(t)}}class Qr extends Gr{constructor(e,t,n,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s),this.N=r,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(w(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(w(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?fn(e.updateTime):fn(t);return n.isEqual(P.min())&&(n=fn(t)),new gt(n,e.transformResults||[])}(e,n)))):[]),s=fn(e.commitTime);return this.listener.Dr(s,r)}var t,n;return w(!e.writeResults||0===e.writeResults.length),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=In(this.N),this.mr(e)}Sr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Tn(this.N,e)))};this.mr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends class{}{constructor(e,t,n){super(),this.credentials=e,this.sr=t,this.N=n,this.kr=!1}$r(){if(this.kr)throw new _(E.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,n){return this.$r(),this.credentials.getToken().then((r=>this.sr.Li(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new _(E.UNKNOWN,e.toString())}))}Ki(e,t,n){return this.$r(),this.credentials.getToken().then((r=>this.sr.Ki(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new _(E.UNKNOWN,e.toString())}))}terminate(){this.kr=!0}}class Jr{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){0===this.Or&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve()))))}qr(e){"Online"===this.state?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,"Online"===e&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(g(t),this.Mr=!1):p("OnlineStateTracker",t)}Kr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=s,this.zr.Ti((e=>{n.enqueueAndForget((async()=>{as(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=I(e);t.Wr.add(4),await es(t),t.Hr.set("Unknown"),t.Wr.delete(4),await Zr(t)}(this))}))})),this.Hr=new Jr(n,r)}}async function Zr(e){if(as(e))for(const t of e.Gr)await t(!0)}async function es(e){for(const t of e.Gr)await t(!1)}function ts(e,t){const n=I(e);n.Qr.has(t.targetId)||(n.Qr.set(t.targetId,t),os(n)?is(n):bs(n).hr()&&rs(n,t))}function ns(e,t){const n=I(e),r=bs(n);n.Qr.delete(t),r.hr()&&ss(n,t),0===n.Qr.size&&(r.hr()?r.wr():as(n)&&n.Hr.set("Unknown"))}function rs(e,t){e.Jr.Y(t.targetId),bs(e).br(t)}function ss(e,t){e.Jr.Y(t),bs(e).Pr(t)}function is(e){e.Jr=new rn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Tt:t=>e.Qr.get(t)||null}),bs(e).start(),e.Hr.Lr()}function os(e){return as(e)&&!bs(e).ur()&&e.Qr.size>0}function as(e){return 0===I(e).Wr.size}function cs(e){e.Jr=void 0}async function us(e){e.Qr.forEach(((t,n)=>{rs(e,t)}))}async function ls(e,t){cs(e),os(e)?(e.Hr.qr(t),is(e)):e.Hr.set("Unknown")}async function hs(e,t,n){if(e.Hr.set("Online"),t instanceof tn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Qr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Qr.delete(r),e.Jr.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ds(e,n)}else if(t instanceof Zt?e.Jr.rt(t):t instanceof en?e.Jr.ft(t):e.Jr.at(t),!n.isEqual(P.min()))try{const t=await Er(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Jr._t(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Qr.get(r);s&&e.Qr.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.Qr.get(t);if(!n)return;e.Qr.set(t,n.withResumeToken(z.EMPTY_BYTE_STRING,n.snapshotVersion)),ss(e,t);const r=new ir(n.target,t,1,n.sequenceNumber);rs(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await ds(e,t)}}async function ds(e,t,n){if(!nr(t))throw t;e.Wr.add(1),await es(e),e.Hr.set("Offline"),n||(n=()=>Er(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.Wr.delete(1),await Zr(e)}))}function fs(e,t){return t().catch((n=>ds(e,n,t)))}async function ps(e){const t=I(e),n=Ss(t);let r=t.jr.length>0?t.jr[t.jr.length-1].batchId:-1;for(;gs(t);)try{const e=await Tr(t.localStore,r);if(null===e){0===t.jr.length&&n.wr();break}r=e.batchId,ms(t,e)}catch(e){await ds(t,e)}ys(t)&&vs(t)}function gs(e){return as(e)&&e.jr.length<10}function ms(e,t){e.jr.push(t);const n=Ss(e);n.hr()&&n.Vr&&n.Sr(t.mutations)}function ys(e){return as(e)&&!Ss(e).ur()&&e.jr.length>0}function vs(e){Ss(e).start()}async function ws(e){Ss(e).Nr()}async function Is(e){const t=Ss(e);for(const n of e.jr)t.Sr(n.mutations)}async function Es(e,t,n){const r=e.jr.shift(),s=sr.from(r,t,n);await fs(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await ps(e)}async function _s(e,t){t&&Ss(e).Vr&&await async function(e,t){if(xt(n=t.code)&&n!==E.ABORTED){const n=e.jr.shift();Ss(e).dr(),await fs(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await ps(e)}var n}(e,t),ys(e)&&vs(e)}async function Ts(e,t){const n=I(e);t?(n.Wr.delete(2),await Zr(n)):t||(n.Wr.add(2),await es(n),n.Hr.set("Unknown"))}function bs(e){return e.Yr||(e.Yr=function(e,t,n){const r=I(e);return r.$r(),new Wr(t,r.sr,r.credentials,r.N,n)}(e.datastore,e.asyncQueue,{Si:us.bind(null,e),Ci:ls.bind(null,e),Rr:hs.bind(null,e)}),e.Gr.push((async t=>{t?(e.Yr.dr(),os(e)?is(e):e.Hr.set("Unknown")):(await e.Yr.stop(),cs(e))}))),e.Yr}function Ss(e){return e.Xr||(e.Xr=function(e,t,n){const r=I(e);return r.$r(),new Qr(t,r.sr,r.credentials,r.N,n)}(e.datastore,e.asyncQueue,{Si:ws.bind(null,e),Ci:_s.bind(null,e),Cr:Is.bind(null,e),Dr:Es.bind(null,e)}),e.Gr.push((async t=>{t?(e.Xr.dr(),await ps(e)):(await e.Xr.stop(),e.jr.length>0&&(p("RemoteStore",`Stopping write stream with ${e.jr.length} pending writes`),e.jr=[]))}))),e.Xr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ks{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new ks(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function As(e,t){if(g("AsyncQueue",`${t}: ${e}`),nr(e))return new _(E.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.comparator=e?(t,n)=>e(t,n)||te.comparator(t.key,n.key):(e,t)=>te.comparator(e.key,t.key),this.keyedMap=zt(),this.sortedSet=new Ut(this.comparator)}static emptySet(e){return new Cs(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cs))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Cs;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.Zr=new Ut(te.comparator)}track(e){const t=e.doc.key,n=this.Zr.get(t);n?0!==e.type&&3===n.type?this.Zr=this.Zr.insert(t,e):3===e.type&&1!==n.type?this.Zr=this.Zr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Zr=this.Zr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Zr=this.Zr.remove(t):1===e.type&&2===n.type?this.Zr=this.Zr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):v():this.Zr=this.Zr.insert(t,e)}eo(){const e=[];return this.Zr.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Rs{constructor(e,t,n,r,s,i,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Rs(e,t,Cs.emptySet(t),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qe(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.no=void 0,this.listeners=[]}}class Os{constructor(){this.queries=new fr((e=>Xe(e)),Qe),this.onlineState="Unknown",this.so=new Set}}async function Ls(e,t){const n=I(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Ds),s)try{i.no=await n.onListen(r)}catch(e){const n=As(e,`Initialization of query '${Je(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.io(n.onlineState),i.no&&t.ro(i.no)&&Ms(n)}async function xs(e,t){const n=I(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Ps(e,t){const n=I(e);let r=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.ro(e)&&(r=!0);s.no=e}}r&&Ms(n)}function Us(e,t,n){const r=I(e),s=r.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);r.queries.delete(t)}function Ms(e){e.so.forEach((e=>{e.next()}))}class Fs{constructor(e,t,n){this.query=e,this.oo=t,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=n||{}}ro(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Rs(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.uo(e)&&(this.oo.next(e),t=!0):this.ho(e,this.onlineState)&&(this.lo(e),t=!0),this.ao=e,t}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let t=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),t=!0),t}ho(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.fo&&n||e.docs.isEmpty()&&"Offline"!==t)}uo(e){if(e.docChanges.length>0)return!0;const t=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}lo(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vs{constructor(e){this.key=e}}class js{constructor(e){this.key=e}}class qs{constructor(e,t){this.query=e,this.po=t,this.To=null,this.current=!1,this.Eo=Wt(),this.mutatedKeys=Wt(),this.Io=Ze(e),this.Ao=new Cs(this.Io)}get Ro(){return this.po}bo(e,t){const n=t?t.Po:new Ns,r=t?t.Ao:this.Ao;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a=qe(this.query)&&r.size===this.query.limit?r.last():null,c=Be(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Ye(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.vo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Io(l,a)>0||c&&this.Io(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),qe(this.query)||Be(this.query))for(;i.size>this.query.limit;){const e=qe(this.query)?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Ao:i,Po:n,Ln:o,mutatedKeys:s}}vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const s=e.Po.eo();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)}(e.type,t.type)||this.Io(e.doc,t.doc))),this.Vo(n);const i=t?this.So():[],o=0===this.Eo.size&&this.current?1:0,a=o!==this.To;return this.To=o,0!==s.length||a?{snapshot:new Rs(this.query,e.Ao,r,s,e.mutatedKeys,0===o,a,!1),Do:i}:{Do:i}}io(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Ns,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach((e=>this.po=this.po.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.po=this.po.delete(e))),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=Wt(),this.Ao.forEach((e=>{this.Co(e.key)&&(this.Eo=this.Eo.add(e.key))}));const t=[];return e.forEach((e=>{this.Eo.has(e)||t.push(new js(e))})),this.Eo.forEach((n=>{e.has(n)||t.push(new Vs(n))})),t}No(e){this.po=e.Gn,this.Eo=Wt();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return Rs.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,0===this.To)}}class Bs{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Hs{constructor(e){this.key=e,this.ko=!1}}class zs{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.$o={},this.Oo=new fr((e=>Xe(e)),Qe),this.Fo=new Map,this.Mo=new Set,this.Lo=new Ut(te.comparator),this.Bo=new Map,this.Uo=new Cr,this.qo={},this.Ko=new Map,this.jo=hr.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return!0===this.Qo}}async function $s(e,t){const n=ui(e);let r,s;const i=n.Oo.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const e=await br(n.localStore,Ge(t)),i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await Ks(n,t,r,"current"===i),n.isPrimaryClient&&ts(n.remoteStore,e)}return s}async function Ks(e,t,n,r){e.Wo=(t,n,r)=>async function(e,t,n,r){let s=t.view.bo(n);s.Ln&&(s=await kr(e.localStore,t.query,!1).then((({documents:e})=>t.view.bo(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return ri(e,t.targetId,o.Do),o.snapshot}(e,t,n,r);const s=await kr(e.localStore,t,!0),i=new qs(t,s.Gn),o=i.bo(s.documents),a=Yt.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=i.applyChanges(o,e.isPrimaryClient,a);ri(e,n,c.Do);const u=new Bs(t,n,i);return e.Oo.set(t,u),e.Fo.has(n)?e.Fo.get(n).push(t):e.Fo.set(n,[t]),c.snapshot}async function Gs(e,t){const n=I(e),r=n.Oo.get(t),s=n.Fo.get(r.targetId);if(s.length>1)return n.Fo.set(r.targetId,s.filter((e=>!Qe(e,t)))),void n.Oo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Sr(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ns(n.remoteStore,r.targetId),ti(n,r.targetId)})).catch(dr)):(ti(n,r.targetId),await Sr(n.localStore,r.targetId,!0))}async function Ws(e,t){const n=I(e);try{const e=await function(e,t){const n=I(e),r=t.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const o=[];t.targetChanges.forEach(((t,i)=>{const a=s.get(i);if(!a)return;o.push(n.ze.removeMatchingKeys(e,t.removedDocuments,i).next((()=>n.ze.addMatchingKeys(e,t.addedDocuments,i))));const c=t.resumeToken;if(c.approximateByteSize()>0){const d=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);s=s.insert(i,d),u=a,h=t,w((l=d).resumeToken.approximateByteSize()>0),(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.ze.updateTargetData(e,d))}var u,l,h}));let a=Bt();if(t.documentUpdates.forEach(((r,s)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(_r(e,i,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(P.min())){const t=n.ze.getLastRemoteSnapshotVersion(e).next((t=>n.ze.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return tr.waitFor(o).next((()=>i.apply(e))).next((()=>n.Qn.vn(e,a))).next((()=>a))})).then((e=>(n.Un=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Bo.get(t);r&&(w(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ko=!0:e.modifiedDocuments.size>0?w(r.ko):e.removedDocuments.size>0&&(w(r.ko),r.ko=!1))})),await oi(n,e,t)}catch(e){await dr(e)}}function Qs(e,t,n){const r=I(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Oo.forEach(((n,r)=>{const s=r.view.io(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=I(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.io(t)&&(r=!0)})),r&&Ms(n)}(r.eventManager,t),e.length&&r.$o.Rr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Xs(e,t,n){const r=I(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Bo.get(t),i=s&&s.key;if(i){let e=new Ut(te.comparator);e=e.insert(i,ye.newNoDocument(i,P.min()));const n=Wt().add(i),s=new Jt(P.min(),new Map,new Vt(O),e,n);await Ws(r,s),r.Lo=r.Lo.remove(i),r.Bo.delete(t),ii(r)}else await Sr(r.localStore,t,!1).then((()=>ti(r,t,n))).catch(dr)}async function Js(e,t){const n=I(e),r=t.batch.batchId;try{const e=await function(e,t){const n=I(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=tr.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);w(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.In.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.Pn(e,r)))}))}(n.localStore,t);ei(n,r,null),Zs(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oi(n,e)}catch(e){await dr(e)}}async function Ys(e,t,n){const r=I(e);try{const e=await function(e,t){const n=I(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.In.lookupMutationBatch(e,t).next((t=>(w(null!==t),r=t.keys(),n.In.removeMutationBatch(e,t)))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.Pn(e,r)))}))}(r.localStore,t);ei(r,t,n),Zs(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await oi(r,e)}catch(e){await dr(e)}}function Zs(e,t){(e.Ko.get(t)||[]).forEach((e=>{e.resolve()})),e.Ko.delete(t)}function ei(e,t,n){const r=I(e);let s=r.qo[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.qo[r.currentUser.toKey()]=s}}function ti(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Fo.get(t))e.Oo.delete(r),n&&e.$o.Go(r,n);e.Fo.delete(t),e.isPrimaryClient&&e.Uo.cs(t).forEach((t=>{e.Uo.containsKey(t)||ni(e,t)}))}function ni(e,t){e.Mo.delete(t.path.canonicalString());const n=e.Lo.get(t);null!==n&&(ns(e.remoteStore,n),e.Lo=e.Lo.remove(t),e.Bo.delete(n),ii(e))}function ri(e,t,n){for(const r of n)r instanceof Vs?(e.Uo.addReference(r.key,t),si(e,r)):r instanceof js?(p("SyncEngine","Document no longer in limbo: "+r.key),e.Uo.removeReference(r.key,t),e.Uo.containsKey(r.key)||ni(e,r.key)):v()}function si(e,t){const n=t.key,r=n.path.canonicalString();e.Lo.get(n)||e.Mo.has(r)||(p("SyncEngine","New document in limbo: "+n),e.Mo.add(r),ii(e))}function ii(e){for(;e.Mo.size>0&&e.Lo.size<e.maxConcurrentLimboResolutions;){const t=e.Mo.values().next().value;e.Mo.delete(t);const n=new te(j.fromString(t)),r=e.jo.next();e.Bo.set(r,new Hs(n)),e.Lo=e.Lo.insert(n,r),ts(e.remoteStore,new ir(Ge(je(n.path)),r,2,N.T))}}async function oi(e,t,n){const r=I(e),s=[],i=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach(((e,a)=>{o.push(r.Wo(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=mr.kn(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.$o.Rr(s),await async function(e,t){const n=I(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>tr.forEach(t,(t=>tr.forEach(t.Nn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>tr.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!nr(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,s)}}}(r.localStore,i))}async function ai(e,t){const n=I(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await Ir(n.localStore,t);n.currentUser=t,(r=n).Ko.forEach((e=>{e.forEach((e=>{e.reject(new _(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.Ko.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await oi(n,e.Wn)}var r}function ci(e,t){const n=I(e),r=n.Bo.get(t);if(r&&r.ko)return Wt().add(r.key);{let e=Wt();const r=n.Fo.get(t);if(!r)return e;for(const t of r){const r=n.Oo.get(t);e=e.unionWith(r.view.Ro)}return e}}function ui(e){const t=I(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ws.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ci.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Xs.bind(null,t),t.$o.Rr=Ps.bind(null,t.eventManager),t.$o.Go=Us.bind(null,t.eventManager),t}function li(e){const t=I(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Js.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ys.bind(null,t),t}class hi{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=$r(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return wr(this.persistence,new yr,e.initialUser,this.N)}Jo(e){return new xr(Ur.Ns,this.N)}Ho(e){return new Fr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class di{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Qs(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ai.bind(null,this.syncEngine),await Ts(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Os}createDatastore(e){const t=$r(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Hr(r));var r,s;return s=e.credentials,new Xr(s,n,t)}createRemoteStore(e){var t,n,r,s,i;return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Qs(this.syncEngine,e,0),i=jr.bt()?new jr:new Vr,new Yr(t,n,r,s,i)}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new zs(e,t,n,r,s,i);return o&&(a.Qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=I(e);p("RemoteStore","RemoteStore shutting down."),t.Wr.add(5),await es(t),t.zr.shutdown(),t.Hr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pi{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=l.UNAUTHENTICATED,this.clientId=D.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,(async e=>{p("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const n=As(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function gi(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Ir(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function mi(e,t){e.asyncQueue.verifyOperationInProgress();const n=await yi(e);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=I(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=as(n);n.Wr.add(3),await es(n),r&&n.Hr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Wr.delete(3),await Zr(n)}(t.remoteStore,e))),e.onlineComponents=t}async function yi(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await gi(e,new hi)),e.offlineComponents}async function vi(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await mi(e,new di)),e.onlineComponents}function wi(e){return vi(e).then((e=>e.syncEngine))}async function Ii(e){const t=await vi(e),n=t.eventManager;return n.onListen=$s.bind(null,t.syncEngine),n.onUnlisten=Gs.bind(null,t.syncEngine),n}function Ei(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new fi({next:i=>{t.enqueueAndForget((()=>xs(e,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new _(E.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new _(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new Fs(je(n.path),i,{includeMetadataChanges:!0,fo:!0});return Ls(e,o)}(await Ii(e),e.asyncQueue,t,n,r))),r.promise}function _i(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new fi({next:n=>{t.enqueueAndForget((()=>xs(e,o))),n.fromCache&&"server"===r.source?s.reject(new _(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Fs(n,i,{includeMetadataChanges:!0,fo:!0});return Ls(e,o)}(await Ii(e),e.asyncQueue,t,n,r))),r.promise}class Ti{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class bi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof bi&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(e,t,n){if(!n)throw new _(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ai(e){if(!te.isDocumentKey(e))throw new _(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ci(e){if(te.isDocumentKey(e))throw new _(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ni(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":v()}function Ri(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ni(e);throw new _(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Di(e,t){if(t<=0)throw new _(E.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new _(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new _(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new _(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oi({}),this._settingsFrozen=!1,e instanceof bi?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new _(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(e.options.projectId)}(e))}get app(){if(!this._app)throw new _(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new _(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oi(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new S;switch(e.type){case"gapi":const t=e.client;return w(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new C(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new _(E.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Si.get(e);t&&(p("ComponentProvider","Removing Datastore"),Si.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xi(this.firestore,e,this._key)}}class Pi{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Pi(this.firestore,e,this._query)}}class Ui extends Pi{constructor(e,t,n){super(e,t,je(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xi(this.firestore,null,new te(e))}withConverter(e){return new Ui(this.firestore,e,this._path)}}function Mi(e,t,...n){if(e=a.getModularInstance(e),ki("collection","path",t),e instanceof Li){const r=j.fromString(t,...n);return Ci(r),new Ui(e,null,r)}{if(!(e instanceof xi||e instanceof Ui))throw new _(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return Ci(r),new Ui(e.firestore,null,r)}}function Fi(e,t,...n){if(e=a.getModularInstance(e),1===arguments.length&&(t=D.I()),ki("doc","path",t),e instanceof Li){const r=j.fromString(t,...n);return Ai(r),new xi(e,null,new te(r))}{if(!(e instanceof xi||e instanceof Ui))throw new _(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return Ai(r),new xi(e.firestore,e instanceof Ui?e.converter:null,new te(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vi{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new Kr(this,"async_queue_retry"),this.Rc=()=>{const e=zr();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ar.tr()};const e=zr();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const t=zr();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise((()=>{}));const t=new T;return this.Pc((()=>this.gc&&this.Ic?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.mc.push(e),this.vc())))}async vc(){if(0!==this.mc.length){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!nr(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi((()=>this.vc()))}}Pc(e){const t=this._c.then((()=>(this.Ec=!0,e().catch((e=>{this.Tc=e,this.Ec=!1;throw g("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Ec=!1,e))))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.bc(),this.Ac.indexOf(e)>-1&&(t=0);const r=ks.createAndSchedule(this,e,t,n,(e=>this.Vc(e)));return this.yc.push(r),r}bc(){this.Tc&&v()}verifyOperationInProgress(){}async Sc(){let e;do{e=this._c,await e}while(e!==this._c)}Dc(e){for(const t of this.yc)if(t.timerId===e)return!0;return!1}Cc(e){return this.Sc().then((()=>{this.yc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.yc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sc()}))}Nc(e){this.Ac.push(e)}Vc(e){const t=this.yc.indexOf(e);this.yc.splice(t,1)}}class ji extends Li{constructor(e,t){super(e,t),this.type="firestore",this._queue=new Vi,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Hi(this),this._firestoreClient.terminate()}}function qi(e=r.getApp()){return r._getProvider(e,"firestore").getImmediate()}function Bi(e){return e._firestoreClient||Hi(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Hi(e){var t;const n=e._freezeSettings(),r=(s=e._databaseId,i=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new Ti(s,i,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var s,i,o,a;e._firestoreClient=new pi(e._credentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new _(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new B(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $i(z.fromBase64String(e))}catch(e){throw new _(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new $i(z.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=/^__.*__$/;class Qi{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new St(e,this.data,this.fieldMask,t,this.fieldTransforms):new bt(e,this.data,t,this.fieldTransforms)}}function Xi(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Ji{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.N=n,this.ignoreUndefinedProperties=r,void 0===s&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new Ji(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$c({path:n,Fc:!1});return r.Mc(e),r}Lc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$c({path:n,Fc:!1});return r.xc(),r}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return co(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(0===e.length)throw this.Uc("Document fields must not be empty");if(Xi(this.kc)&&Wi.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class Yi{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=n||$r(e)}jc(e,t,n,r=!1){return new Ji({kc:e,methodName:t,Kc:n,path:B.emptyPath(),Fc:!1,qc:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Zi(e){const t=e._freezeSettings(),n=$r(e._databaseId);return new Yi(e._databaseId,!!t.ignoreUndefinedProperties,n)}function eo(e,t,n,r,s,i={}){const o=e.jc(i.merge||i.mergeFields?2:0,t,n,s);so("Data must be an object, but it was:",o,r);const a=no(r,o);let c,u;if(i.merge)c=new H(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=io(t,r,n);if(!o.contains(s))throw new _(E.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);uo(e,s)||e.push(s)}c=new H(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Qi(new ge(a),c,u)}function to(e,t){if(ro(e=a.getModularInstance(e)))return so("Unsupported field value:",t,e),no(e,t);if(e instanceof Ki)return function(e,t){if(!Xi(t.kc))throw t.Uc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Uc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&4!==t.kc)throw t.Uc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=to(s,t.Bc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=a.getModularInstance(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return rt(t.N,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=x.fromDate(e);return{timestampValue:ln(t.N,n)}}if(e instanceof x){const n=new x(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ln(t.N,n)}}if(e instanceof Gi)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof $i)return{bytesValue:hn(t.N,e._byteString)};if(e instanceof xi){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Uc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:pn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Uc(`Unsupported field value: ${Ni(e)}`)}(e,t)}function no(e,t){const n={};return F(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):M(e,((e,r)=>{const s=to(r,t.Oc(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function ro(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof x||e instanceof Gi||e instanceof $i||e instanceof xi||e instanceof Ki)}function so(e,t,n){if(!ro(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Ni(n);throw"an object"===r?t.Uc(e+" a custom object"):t.Uc(e+" "+r)}var r}function io(e,t,n){if((t=a.getModularInstance(t))instanceof zi)return t._internalPath;if("string"==typeof t)return ao(e,t);throw co("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const oo=new RegExp("[~\\*/\\[\\]]");function ao(e,t,n){if(t.search(oo)>=0)throw co(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new zi(...t.split("."))._internalPath}catch(r){throw co(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function co(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new _(E.INVALID_ARGUMENT,a+e+c)}function uo(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xi(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ho(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fo("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ho extends lo{data(){return super.data()}}function fo(e,t){return"string"==typeof t?ao(e,t):t instanceof zi?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class go extends lo{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(fo("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class mo extends go{data(e={}){return super.data(e)}}class yo{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new po(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new mo(this._firestore,this._userDataWriter,n.key,n,new po(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new mo(e._firestore,e._userDataWriter,n.doc.key,n.doc,new po(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new mo(e._firestore,e._userDataWriter,t.doc.key,t.doc,new po(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:vo(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function vo(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wo(e){if(Be(e)&&0===e.explicitOrderBy.length)throw new _(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Io{}function Eo(e,...t){for(const n of t)e=n._apply(e);return e}class _o extends Io{constructor(e,t,n){super(),this.type=e,this.Yc=t,this.Xc=n}_apply(e){return new Pi(e.firestore,e.converter,We(e._query,this.Yc,this.Xc))}}function To(e){return Di("limit",e),new _o("limit",e,"F")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{convertValue(e,t="none"){switch(ne(e)){case 0:return null;case 1:return e.booleanValue;case 2:return G(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(W(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){const n={};return M(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Gi(G(e.latitude),G(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=X(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(J(e));default:return null}}convertTimestamp(e){const t=K(e);return new x(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=j.fromString(e);w(Un(n));const r=new bi(n.get(1),n.get(3)),s=new te(n.popFirst(5));return r.isEqual(t)||g(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ko(e){e=Ri(e,xi);const t=Ri(e.firestore,ji);return Ei(Bi(t),e._key).then((n=>Lo(t,e,n)))}class Ao extends bo{constructor(e){super(),this.firestore=e}convertBytes(e){return new $i(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xi(this.firestore,null,t)}}function Co(e){e=Ri(e,Pi);const t=Ri(e.firestore,ji),n=Bi(t),r=new Ao(t);return wo(e._query),_i(n,e._query).then((n=>new yo(t,r,e,n)))}function No(e,t,n){e=Ri(e,xi);const r=Ri(e.firestore,ji),s=So(e.converter,t,n);return Oo(r,[eo(Zi(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,mt.none())])}function Ro(e){return Oo(Ri(e.firestore,ji),[new Nt(e._key,mt.none())])}function Do(e,t){const n=Ri(e.firestore,ji),r=Fi(e),s=So(e.converter,t);return Oo(n,[eo(Zi(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,mt.exists(!1))]).then((()=>r))}function Oo(e,t){return function(e,t){const n=new T;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=li(e);try{const e=await function(e,t){const n=I(e),r=x.now(),s=t.reduce(((e,t)=>e.add(t.key)),Wt());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Qn.Pn(e,s).next((s=>{i=s;const o=[];for(const e of t){const t=Et(e,i.get(e.key));null!=t&&o.push(new St(e.key,t,me(t.value.mapValue),mt.exists(!0)))}return n.In.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(i),{batchId:e.batchId,changes:i})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.qo[e.currentUser.toKey()];r||(r=new Ut(O)),r=r.insert(t,n),e.qo[e.currentUser.toKey()]=r}(r,e.batchId,n),await oi(r,e.changes),await ps(r.remoteStore)}catch(e){const t=As(e,"Failed to persist write");n.reject(t)}}(await wi(e),t,n))),n.promise}(Bi(e),t)}function Lo(e,t,n){const r=n.docs.get(t._key),s=new Ao(e);return new go(e,s,t._key,r,new po(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){var n;n=r.SDK_VERSION,h=n,r._registerComponent(new i.Component("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=new ji(r,new k(e.getProvider("auth-internal")));return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC")),r.registerVersion(u,"3.3.0",e),r.registerVersion(u,"3.3.0","esm2017")}()})),s.register("5Igt1",(function(n,r){e(n.exports,"createWebChannelTransport",(()=>ar)),e(n.exports,"getStatEventTarget",(()=>cr)),e(n.exports,"ErrorCode",(()=>ur)),e(n.exports,"EventType",(()=>lr)),e(n.exports,"Event",(()=>hr)),e(n.exports,"Stat",(()=>dr)),e(n.exports,"FetchXmlHttpFactory",(()=>fr)),e(n.exports,"WebChannel",(()=>pr)),e(n.exports,"XhrIo",(()=>gr));var s,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},o={},a=a||{},c=i||self;function u(){}function l(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function h(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function g(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g).apply(null,arguments)}function y(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function w(){this.s=this.s,this.o=this.o}var I={};w.prototype.s=!1,w.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}(this);delete I[e]}},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},_=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,s="string"==typeof e?e.split(""):e;for(let i=0;i<r;i++)i in s&&t.call(n,s[i],i,e)};function T(e){return Array.prototype.concat.apply([],arguments)}function b(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function S(e){return/^[\s\xa0]*$/.test(e)}var k,A=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function C(e,t){return-1!=e.indexOf(t)}function N(e,t){return e<t?-1:e>t?1:0}e:{var R=c.navigator;if(R){var D=R.userAgent;if(D){k=D;break e}}k=""}function O(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function L(e){const t={};for(const n in e)t[n]=e[n];return t}var x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<x.length;t++)n=x[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function U(e){return U[" "](e),e}U[" "]=u;var M,F,V=C(k,"Opera"),j=C(k,"Trident")||C(k,"MSIE"),q=C(k,"Edge"),B=q||j,H=C(k,"Gecko")&&!(C(k.toLowerCase(),"webkit")&&!C(k,"Edge"))&&!(C(k,"Trident")||C(k,"MSIE"))&&!C(k,"Edge"),z=C(k.toLowerCase(),"webkit")&&!C(k,"Edge");function $(){var e=c.document;return e?e.documentMode:void 0}e:{var K="",G=(F=k,H?/rv:([^\);]+)(\)|;)/.exec(F):q?/Edge\/([\d\.]+)/.exec(F):j?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(F):z?/WebKit\/(\S+)/.exec(F):V?/(?:Version)[ \/]?(\S+)/.exec(F):void 0);if(G&&(K=G?G[1]:""),j){var W=$();if(null!=W&&W>parseFloat(K)){M=String(W);break e}}M=K}var Q,X={};function J(){return function(e){var t=X;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=A(String(M)).split("."),n=A("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=N(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||N(0==s[2].length,0==i[2].length)||N(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(c.document&&j){var Y=$();Q=Y||(parseInt(M,10)||void 0)}else Q=void 0;var Z=Q,ee=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{c.addEventListener("test",u,t),c.removeEventListener("test",u,t)}catch(e){}return e}();function te(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ne(e,t){if(te.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(H){e:{try{U(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:re[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ne.Z.h.call(this)}}te.prototype.h=function(){this.defaultPrevented=!0},v(ne,te);var re={2:"touch",3:"pen",4:"mouse"};ne.prototype.h=function(){ne.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var se="closure_listenable_"+(1e6*Math.random()|0),ie=0;function oe(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=s,this.key=++ie,this.ca=this.fa=!1}function ae(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function ce(e){this.src=e,this.g={},this.h=0}function ue(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=E(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ae(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function le(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==r)return s}return-1}ce.prototype.add=function(e,t,n,r,s){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=le(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new oe(t,this.src,i,!!r,s)).fa=n,e.push(t)),t};var he="closure_lm_"+(1e6*Math.random()|0),de={};function fe(e,t,n,r,s){if(r&&r.once)return ge(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)fe(e,t[i],n,r,s);return null}return n=_e(n),e&&e[se]?e.N(t,n,h(r)?!!r.capture:!!r,s):pe(e,t,n,!1,r,s)}function pe(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=h(s)?!!s.capture:!!s,a=Ie(e);if(a||(e[he]=a=new ce(e)),(n=a.add(t,n,r,o,i)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=we;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ee||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ve(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ge(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ge(e,t[i],n,r,s);return null}return n=_e(n),e&&e[se]?e.O(t,n,h(r)?!!r.capture:!!r,s):pe(e,t,n,!0,r,s)}function me(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)me(e,t[i],n,r,s);else r=h(r)?!!r.capture:!!r,n=_e(n),e&&e[se]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=le(i=e.g[t],n,r,s))&&(ae(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Ie(e))&&(t=e.g[t.toString()],e=-1,t&&(e=le(t,n,r,s)),(n=-1<e?t[e]:null)&&ye(n))}function ye(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[se])ue(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ve(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ie(t))?(ue(n,e),0==n.h&&(n.src=null,t[he]=null)):ae(e)}}}function ve(e){return e in de?de[e]:de[e]="on"+e}function we(e,t){if(e.ca)e=!0;else{t=new ne(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&ye(e),e=n.call(r,t)}return e}function Ie(e){return(e=e[he])instanceof ce?e:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(e){return"function"==typeof e?e:(e[Ee]||(e[Ee]=function(t){return e.handleEvent(t)}),e[Ee])}function Te(){w.call(this),this.i=new ce(this),this.P=this,this.I=null}function be(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new te(t,e);else if(t instanceof te)t.target=t.target||e;else{var s=t;P(t=new te(r,e),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Se(o,r,!0,t)&&s}if(s=Se(o=t.g=e,r,!0,t)&&s,s=Se(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)s=Se(o=t.g=n[i],r,!1,t)&&s}function Se(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ue(e.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}v(Te,w),Te.prototype[se]=!0,Te.prototype.removeEventListener=function(e,t,n,r){me(this,e,t,n,r)},Te.prototype.M=function(){if(Te.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ae(n[r]);delete t.g[e],t.h--}}this.I=null},Te.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Te.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ke=c.JSON.stringify;function Ae(){var e=xe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ce,Ne=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Re),(e=>e.reset()));class Re{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function De(e){c.setTimeout((()=>{throw e}),0)}function Oe(e,t){Ce||function(){var e=c.Promise.resolve(void 0);Ce=function(){e.then(Pe)}}(),Le||(Ce(),Le=!0),xe.add(e,t)}var Le=!1,xe=new class{constructor(){this.h=this.g=null}add(e,t){const n=Ne.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Pe(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(e){De(e)}var t=Ne;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Le=!1}function Ue(e,t){Te.call(this),this.h=e||1,this.g=t||c,this.j=m(this.kb,this),this.l=Date.now()}function Me(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Fe(e,t,n){if("function"==typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:c.setTimeout(e,t||0)}function Ve(e){e.g=Fe((()=>{e.g=null,e.i&&(e.i=!1,Ve(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}v(Ue,Te),(s=Ue.prototype).da=!1,s.S=null,s.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),be(this,"tick"),this.da&&(Me(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){Ue.Z.M.call(this),Me(this),delete this.g};class je extends w{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ve(this)}M(){super.M(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qe(e){w.call(this),this.h=e,this.g={}}v(qe,w);var Be=[];function He(e,t,n,r){Array.isArray(n)||(n&&(Be[0]=n.toString()),n=Be);for(var s=0;s<n.length;s++){var i=fe(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function ze(e){O(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ye(e)}),e),e.g={}}function $e(){this.g=!0}function Ke(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return ke(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}qe.prototype.M=function(){qe.Z.M.call(this),ze(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$e.prototype.Aa=function(){this.g=!1},$e.prototype.info=function(){};var Ge={},We=null;function Qe(){return We=We||new Te}function Xe(e){te.call(this,Ge.Ma,e)}function Je(e){const t=Qe();be(t,new Xe(t,e))}function Ye(e,t){te.call(this,Ge.STAT_EVENT,e),this.stat=t}function Ze(e){const t=Qe();be(t,new Ye(t,e))}function et(e,t){te.call(this,Ge.Na,e),this.size=t}function tt(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){e()}),t)}Ge.Ma="serverreachability",v(Xe,te),Ge.STAT_EVENT="statevent",v(Ye,te),Ge.Na="timingevent",v(et,te);var nt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},rt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function st(){}function it(e){return e.h||(e.h=e.i())}function ot(){}st.prototype.h=null;var at,ct={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ut(){te.call(this,"d")}function lt(){te.call(this,"c")}function ht(){}function dt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new qe(this),this.P=pt,e=B?125:void 0,this.W=new Ue(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ft}function ft(){this.i=null,this.g="",this.h=!1}v(ut,te),v(lt,te),v(ht,st),ht.prototype.g=function(){return new XMLHttpRequest},ht.prototype.i=function(){return{}},at=new ht;var pt=45e3,gt={},mt={};function yt(e,t,n){e.K=1,e.v=jt(xt(t)),e.s=n,e.U=!0,vt(e,null)}function vt(e,t){e.F=Date.now(),_t(e),e.A=xt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Zt(n.h,"t",r),e.C=0,n=e.l.H,e.h=new ft,e.g=er(e.l,n?t:null,!e.s),0<e.O&&(e.L=new je(m(e.Ia,e,e.g),e.O)),He(e.V,e.g,"readystatechange",e.gb),t=e.H?L(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Je(1),function(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function wt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function It(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=Et(e,n),r==mt){4==t&&(e.o=4,Ze(14),s=!1),Ke(e.j,e.m,null,"[Incomplete Response]");break}if(r==gt){e.o=4,Ze(15),Ke(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Ke(e.j,e.m,r,null),At(e,r)}wt(e)&&r!=mt&&r!=gt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ze(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kn(t),t.L=!0,Ze(11))):(Ke(e.j,e.m,n,"[Invalid Chunked Response]"),kt(e),St(e))}function Et(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?mt:(n=Number(t.substring(n,r)),isNaN(n)?gt:(r+=1)+n>t.length?mt:(t=t.substr(r,n),e.C=r+n,t))}function _t(e){e.Y=Date.now()+e.P,Tt(e,e.P)}function Tt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=tt(m(e.eb,e),t)}function bt(e){e.B&&(c.clearTimeout(e.B),e.B=null)}function St(e){0==e.l.G||e.I||Qn(e.l,e)}function kt(e){bt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Me(e.W),ze(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function At(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||on(n.i,e)))if(n.I=e.N,!e.J&&on(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Wn(n),Mn(n)}$n(n),Ze(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=tt(m(n.ab,n),6e3));if(1>=sn(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else Jn(n,11)}else if((e.J||n.g==e)&&Wn(n),!S(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.i;!i.g&&(C(e,"spdy")||C(e,"quic")||C(e,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(an(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Vt(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=Zn(r,r.H?r.la:null,r.W),o.J){cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(bt(a),_t(a)),r.g=o}else zn(r);0<n.l.length&&jn(n)}else"stop"!=u[0]&&"close"!=u[0]||Jn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Jn(n,7):Un(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}Je(4)}catch(e){}}function Ct(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(l(e)||"string"==typeof e)_(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(l(e)||"string"==typeof e){n=[];for(var r=e.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,e)n[r++]=s;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(l(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),s=r.length;for(var i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}}function Nt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Nt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Rt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Dt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)Dt(s,r=e.g[t])||(e.g[n++]=r,s[r]=1),t++;e.g.length=n}}function Dt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(s=dt.prototype).setTimeout=function(e){this.P=e},s.gb=function(e){e=e.target;const t=this.L;t&&3==Dn(e)?t.l():this.Ia(e)},s.Ia=function(e){try{if(e==this.g)e:{const h=Dn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||B||this.g&&(this.h.h||this.g.ga()||On(this.g)))){this.I||4!=h||7==t||Je(8==t||0>=d?3:2),bt(this);var n=this.g.ba();this.N=n;t:if(wt(this)){var r=On(this.g);e="";var s=r.length,i=4==Dn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){kt(this),St(this);var o="";break t}this.h.i=new c.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Ze(12),kt(this),St(this);break e}Ke(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,At(this,n)}this.U?(It(this,h,o),B&&this.i&&3==h&&(He(this.V,this.W,"tick",this.fb),this.W.start())):(Ke(this.j,this.m,o,null),At(this,o)),4==h&&kt(this),this.i&&!this.I&&(4==h?Qn(this.l,this):(this.i=!1,_t(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),kt(this),St(this)}}}catch(e){}},s.fb=function(){if(this.g){var e=Dn(this.g),t=this.g.ga();this.C<t.length&&(bt(this),It(this,e,t),this.i&&4!=e&&_t(this))}},s.cancel=function(){this.I=!0,kt(this)},s.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Je(3),Ze(17)),kt(this),this.o=2,St(this)):Tt(this,this.Y-e)},(s=Nt.prototype).R=function(){Rt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},s.T=function(){return Rt(this),this.g.concat()},s.get=function(e,t){return Dt(this.h,e)?this.h[e]:t},s.set=function(e,t){Dt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},s.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);e.call(t,i,s,this)}};var Ot=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Lt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Lt){this.g=void 0!==t?t:e.g,Pt(this,e.j),this.s=e.s,Ut(this,e.i),Mt(this,e.m),this.l=e.l,t=e.h;var n=new Qt;n.i=t.i,t.g&&(n.g=new Nt(t.g),n.h=t.h),Ft(this,n),this.o=e.o}else e&&(n=String(e).match(Ot))?(this.g=!!t,Pt(this,n[1]||"",!0),this.s=qt(n[2]||""),Ut(this,n[3]||"",!0),Mt(this,n[4]),this.l=qt(n[5]||"",!0),Ft(this,n[6]||"",!0),this.o=qt(n[7]||"")):(this.g=!!t,this.h=new Qt(null,this.g))}function xt(e){return new Lt(e)}function Pt(e,t,n){e.j=n?qt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ut(e,t,n){e.i=n?qt(t,!0):t}function Mt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ft(e,t,n){t instanceof Qt?(e.h=t,function(e,t){t&&!e.j&&(Xt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Jt(this,t),Zt(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Bt(t,Gt)),e.h=new Qt(t,e.g))}function Vt(e,t,n){e.h.set(t,n)}function jt(e){return Vt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function qt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Bt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ht),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ht(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Lt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Bt(t,zt,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Bt(t,zt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Bt(n,"/"==n.charAt(0)?Kt:$t,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Bt(n,Wt)),e.join("")};var zt=/[#\/\?@]/g,$t=/[#\?:]/g,Kt=/[#\?]/g,Gt=/[#\?@]/g,Wt=/#/g;function Qt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Xt(e){e.g||(e.g=new Nt,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Jt(e,t){Xt(e),t=en(e,t),Dt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Dt((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Rt(e)))}function Yt(e,t){return Xt(e),t=en(e,t),Dt(e.g.h,t)}function Zt(e,t,n){Jt(e,t),0<n.length&&(e.i=null,e.g.set(en(e,t),b(n)),e.h+=n.length)}function en(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(s=Qt.prototype).add=function(e,t){Xt(this),this.i=null,e=en(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},s.forEach=function(e,t){Xt(this),this.g.forEach((function(n,r){_(n,(function(n){e.call(t,n,r,this)}),this)}),this)},s.T=function(){Xt(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var s=e[r],i=0;i<s.length;i++)n.push(t[r]);return n},s.R=function(e){Xt(this);var t=[];if("string"==typeof e)Yt(this,e)&&(t=T(t,this.g.get(en(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=T(t,e[n])}return t},s.set=function(e,t){return Xt(this),this.i=null,Yt(this,e=en(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},s.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),e.push(o)}}return this.i=e.join("&")};function tn(e){this.l=e||nn,c.PerformanceNavigationTiming?e=0<(e=c.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(c.g&&c.g.Ea&&c.g.Ea()&&c.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nn=10;function rn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function sn(e){return e.h?1:e.g?e.g.size:0}function on(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function an(e,t){e.g?e.g.add(t):e.h=t}function cn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function un(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return b(e.i)}function ln(){}function hn(){this.g=new ln}function dn(e,t,n){const r=n||"";try{Ct(e,(function(e,n){let s=e;h(e)&&(s=ke(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function fn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(e){}}function pn(e){this.l=e.$b||null,this.j=e.ib||!1}function gn(e,t){Te.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tn.prototype.cancel=function(){if(this.i=un(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},ln.prototype.stringify=function(e){return c.JSON.stringify(e,void 0)},ln.prototype.parse=function(e){return c.JSON.parse(e,void 0)},v(pn,st),pn.prototype.g=function(){return new gn(this.l,this.j)},pn.prototype.i=function(e){return function(){return e}}({}),v(gn,Te);var mn=0;function yn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function vn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,wn(e)}function wn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(s=gn.prototype).open=function(e,t){if(this.readyState!=mn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,wn(this)},s.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||c).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,vn(this)),this.readyState=mn},s.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==c.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?vn(this):wn(this),3==this.readyState&&yn(this)}},s.Ua=function(e){this.g&&(this.response=this.responseText=e,vn(this))},s.Ta=function(e){this.g&&(this.response=e,vn(this))},s.ha=function(){this.g&&vn(this)},s.setRequestHeader=function(e,t){this.v.append(e,t)},s.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var In=c.JSON.parse;function En(e){Te.call(this),this.headers=new Nt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_n,this.K=this.L=!1}v(En,Te);var _n="",Tn=/^https?$/i,bn=["POST","PUT"];function Sn(e){return"content-type"==e.toLowerCase()}function kn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,An(e),Nn(e)}function An(e){e.D||(e.D=!0,be(e,"complete"),be(e,"error"))}function Cn(e){if(e.h&&void 0!==a&&(!e.C[1]||4!=Dn(e)||2!=e.ba()))if(e.v&&4==Dn(e))Fe(e.Fa,0,e);else if(be(e,"readystatechange"),4==Dn(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var s=String(e.H).match(Ot)[1]||null;if(!s&&c.self&&c.self.location){var i=c.self.location.protocol;s=i.substr(0,i.length-1)}r=!Tn.test(s?s.toLowerCase():"")}n=r}if(n)be(e,"complete"),be(e,"success");else{e.m=6;try{var o=2<Dn(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",An(e)}}finally{Nn(e)}}}function Nn(e,t){if(e.g){Rn(e);const n=e.g,r=e.C[0]?u:null;e.g=null,e.C=null,t||be(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Rn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(c.clearTimeout(e.A),e.A=null)}function Dn(e){return e.g?e.g.readyState:0}function On(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case _n:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ln(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return O(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Vt(e,t,n))}function xn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Pn(e){this.za=0,this.l=[],this.h=new $e,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=xn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=xn("baseRetryDelayMs",5e3,e),this.$a=xn("retryDelaySeedMs",1e4,e),this.Ya=xn("forwardChannelMaxRetries",2,e),this.ra=xn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new tn(e&&e.concurrentRequestLimit),this.Ca=new hn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Un(e){if(Fn(e),3==e.G){var t=e.V++,n=xt(e.F);Vt(n,"SID",e.J),Vt(n,"RID",t),Vt(n,"TYPE","terminate"),Bn(e,n),(t=new dt(e,e.h,t,void 0)).K=2,t.v=jt(xt(n)),n=!1,c.navigator&&c.navigator.sendBeacon&&(n=c.navigator.sendBeacon(t.v.toString(),"")),!n&&c.Image&&((new Image).src=t.v,n=!0),n||(t.g=er(t.l,null),t.g.ea(t.v)),t.F=Date.now(),_t(t)}Yn(e)}function Mn(e){e.g&&(Kn(e),e.g.cancel(),e.g=null)}function Fn(e){Mn(e),e.u&&(c.clearTimeout(e.u),e.u=null),Wn(e),e.i.cancel(),e.m&&("number"==typeof e.m&&c.clearTimeout(e.m),e.m=null)}function Vn(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&jn(e)}function jn(e){rn(e.i)||e.m||(e.m=!0,Oe(e.Ha,e),e.C=0)}function qn(e,t){var n;n=t?t.m:e.V++;const r=xt(e.F);Vt(r,"SID",e.J),Vt(r,"RID",n),Vt(r,"AID",e.U),Bn(e,r),e.o&&e.s&&Ln(r,e.o,e.s),n=new dt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Hn(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),an(e.i,n),yt(n,r,t)}function Bn(e,t){e.j&&Ct({},(function(e,n){Vt(t,n,e)}))}function Hn(e,t,n){n=Math.min(e.l.length,n);var r=e.j?m(e.j.Oa,e.j,e):null;e:{var s=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),i=!1;else try{dn(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(i){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function zn(e){e.g||e.u||(e.Y=1,Oe(e.Ga,e),e.A=0)}function $n(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=tt(m(e.Ga,e),Xn(e,e.A)),e.A++,!0)}function Kn(e){null!=e.B&&(c.clearTimeout(e.B),e.B=null)}function Gn(e){e.g=new dt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=xt(e.oa);Vt(t,"RID","rpc"),Vt(t,"SID",e.J),Vt(t,"CI",e.N?"0":"1"),Vt(t,"AID",e.U),Bn(e,t),Vt(t,"TYPE","xmlhttp"),e.o&&e.s&&Ln(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=jt(xt(t)),n.s=null,n.U=!0,vt(n,e)}function Wn(e){null!=e.v&&(c.clearTimeout(e.v),e.v=null)}function Qn(e,t){var n=null;if(e.g==t){Wn(e),Kn(e),e.g=null;var r=2}else{if(!on(e.i,t))return;n=t.D,cn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;be(r=Qe(),new et(r,n,t,s)),jn(e)}else zn(e);else if(3==(s=t.o)||0==s&&0<e.I||!(1==r&&function(e,t){return!(sn(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=tt(m(e.Ha,e,t),Xn(e,e.C)),e.C++,0)))}(e,t)||2==r&&$n(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Jn(e,5);break;case 4:Jn(e,10);break;case 3:Jn(e,6);break;default:Jn(e,2)}}function Xn(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Jn(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=m(e.jb,e);n||(n=new Lt("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||Pt(n,"https"),jt(n)),function(e,t){const n=new $e;if(c.Image){const r=new Image;r.onload=y(fn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=y(fn,n,r,"TestLoadImage: error",!1,t),r.onabort=y(fn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=y(fn,n,r,"TestLoadImage: timeout",!1,t),c.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Ze(2);e.G=0,e.j&&e.j.va(t),Yn(e),Fn(e)}function Yn(e){e.G=0,e.I=-1,e.j&&(0==un(e.i).length&&0==e.l.length||(e.i.i.length=0,b(e.l),e.l.length=0),e.j.ua())}function Zn(e,t,n){let r=function(e){return e instanceof Lt?xt(e):new Lt(e,void 0)}(n);if(""!=r.i)t&&Ut(r,t+"."+r.i),Mt(r,r.m);else{const e=c.location;r=function(e,t,n,r){var s=new Lt(null,void 0);return e&&Pt(s,e),t&&Ut(s,t),n&&Mt(s,n),r&&(s.l=r),s}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&O(e.aa,(function(e,t){Vt(r,t,e)})),t=e.D,n=e.sa,t&&n&&Vt(r,t,n),Vt(r,"VER",e.ma),Bn(e,r),r}function er(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new En(new pn({ib:!0})):new En(e.qa)).L=e.H,t}function tr(){}function nr(){if(j&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function rr(e,t){Te.call(this),this.g=new Pn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!S(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new or(this)}function sr(e){ut.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ir(){lt.call(this),this.status=1}function or(e){this.g=e}(s=En.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():at.g(),this.C=this.u?it(this.u):it(at),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void kn(this,e)}e=n||"";const s=new Nt(this.headers);r&&Ct(r,(function(e,t){s.set(t,e)})),r=function(e){e:{var t=Sn;const n=e.length,r="string"==typeof e?e.split(""):e;for(let s=0;s<n;s++)if(s in r&&t.call(void 0,r[s],s,e)){t=s;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(s.T()),n=c.FormData&&e instanceof c.FormData,!(0<=E(bn,t))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rn(this),0<this.B&&((this.K=function(e){return j&&J()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Fe(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){kn(this,e)}},s.pa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))},s.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,be(this,"complete"),be(this,"abort"),Nn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Nn(this,!0)),En.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?Cn(this):this.cb())},s.cb=function(){Cn(this)},s.ba=function(){try{return 2<Dn(this)?this.g.status:-1}catch(e){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},s.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),In(t)}},s.Da=function(){return this.m},s.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(s=Pn.prototype).ma=8,s.G=1,s.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},s.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new dt(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=L(i),P(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Hn(this,s,t),Vt(n=xt(this.F),"RID",e),Vt(n,"CVER",22),this.D&&Vt(n,"X-HTTP-Session-Id",this.D),Bn(this,n),this.o&&i&&Ln(n,this.o,i),an(this.i,s),this.Ra&&Vt(n,"TYPE","init"),this.ja?(Vt(n,"$req",t),Vt(n,"SID","null"),s.$=!0,yt(s,n,null)):yt(s,n,t),this.G=2}}else 3==this.G&&(e?qn(this,e):0==this.l.length||rn(this.i)||qn(this))},s.Ga=function(){if(this.u=null,Gn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=tt(m(this.bb,this),e)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ze(10),Mn(this),Gn(this))},s.ab=function(){null!=this.v&&(this.v=null,Mn(this),$n(this),Ze(19))},s.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Ze(2)):(this.h.info("Failed to ping google.com"),Ze(1))},(s=tr.prototype).xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},nr.prototype.g=function(e,t){return new rr(e,t)},v(rr,Te),rr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Oe(m(e.hb,e,t))),Ze(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Zn(e,null,e.W),jn(e)},rr.prototype.close=function(){Un(this.g)},rr.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Vn(this.g,t)}else this.v?((t={}).__data__=ke(e),Vn(this.g,t)):Vn(this.g,e)},rr.prototype.M=function(){this.g.j=null,delete this.j,Un(this.g),delete this.g,rr.Z.M.call(this)},v(sr,ut),v(ir,lt),v(or,tr),or.prototype.xa=function(){be(this.g,"a")},or.prototype.wa=function(e){be(this.g,new sr(e))},or.prototype.va=function(e){be(this.g,new ir(e))},or.prototype.ua=function(){be(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,rr.prototype.send=rr.prototype.u,rr.prototype.open=rr.prototype.m,rr.prototype.close=rr.prototype.close,nt.NO_ERROR=0,nt.TIMEOUT=8,nt.HTTP_ERROR=6,rt.COMPLETE="complete",ot.EventType=ct,ct.OPEN="a",ct.CLOSE="b",ct.ERROR="c",ct.MESSAGE="d",Te.prototype.listen=Te.prototype.N,En.prototype.listenOnce=En.prototype.O,En.prototype.getLastError=En.prototype.La,En.prototype.getLastErrorCode=En.prototype.Da,En.prototype.getStatus=En.prototype.ba,En.prototype.getResponseJson=En.prototype.Qa,En.prototype.getResponseText=En.prototype.ga,En.prototype.send=En.prototype.ea;var ar=o.createWebChannelTransport=function(){return new nr},cr=o.getStatEventTarget=function(){return Qe()},ur=o.ErrorCode=nt,lr=o.EventType=rt,hr=o.Event=Ge,dr=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},fr=o.FetchXmlHttpFactory=pn,pr=o.WebChannel=ot,gr=o.XhrIo=En})),s.register("d6KlF",(function(e,t){var n,r,s=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f())}function f(){if(!l){var e=a(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++h<t;)c&&c[h].run();h=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=g,s.addListener=g,s.once=g,s.off=g,s.removeListener=g,s.removeAllListeners=g,s.emit=g,s.prependListener=g,s.prependOnceListener=g,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}})),s.register("2DfF0",(function(t,n){e(t.exports,"getAuth",(()=>s("5jIUI").n)),e(t.exports,"onAuthStateChanged",(()=>s("5jIUI").t)),e(t.exports,"createUserWithEmailAndPassword",(()=>s("5jIUI").a4)),e(t.exports,"updateProfile",(()=>s("5jIUI").ae)),e(t.exports,"sendEmailVerification",(()=>s("5jIUI").aa)),e(t.exports,"signInWithEmailAndPassword",(()=>s("5jIUI").a5)),e(t.exports,"signOut",(()=>s("5jIUI").x)),e(t.exports,"sendPasswordResetEmail",(()=>s("5jIUI").$)),e(t.exports,"EmailAuthProvider",(()=>s("5jIUI").L)),e(t.exports,"reauthenticateWithCredential",(()=>s("5jIUI").Z)),e(t.exports,"updateEmail",(()=>s("5jIUI").af)),s("iyFG5")})),s.register("iyFG5",(function(t,n){e(t.exports,"EmailAuthProvider",(()=>s("5jIUI").L)),e(t.exports,"createUserWithEmailAndPassword",(()=>s("5jIUI").a4)),e(t.exports,"getAuth",(()=>s("5jIUI").n)),e(t.exports,"onAuthStateChanged",(()=>s("5jIUI").t)),e(t.exports,"reauthenticateWithCredential",(()=>s("5jIUI").Z)),e(t.exports,"sendEmailVerification",(()=>s("5jIUI").aa)),e(t.exports,"sendPasswordResetEmail",(()=>s("5jIUI").$)),e(t.exports,"signInWithEmailAndPassword",(()=>s("5jIUI").a5)),e(t.exports,"signOut",(()=>s("5jIUI").x)),e(t.exports,"updateEmail",(()=>s("5jIUI").af)),e(t.exports,"updateProfile",(()=>s("5jIUI").ae));s("5jIUI");s("hI6C7"),s("ef5iw"),s("jGfah"),s("8rC8i")})),s.register("5jIUI",(function(t,n){e(t.exports,"L",(()=>Ee)),e(t.exports,"Z",(()=>Me)),e(t.exports,"$",(()=>Ve)),e(t.exports,"a4",(()=>je)),e(t.exports,"a5",(()=>qe)),e(t.exports,"aa",(()=>Be)),e(t.exports,"ae",(()=>He)),e(t.exports,"af",(()=>ze)),e(t.exports,"t",(()=>Ke)),e(t.exports,"x",(()=>Ge)),e(t.exports,"n",(()=>on));var r=s("hI6C7"),i=s("ef5iw"),o=s("i7y5K"),a=s("jGfah"),c=s("8rC8i");function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=u,h=new r.ErrorFactory("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new a.Logger("@firebase/auth");function f(e,...t){d.logLevel<=a.LogLevel.ERROR&&d.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw y(e,...t)}function g(e,...t){return y(e,...t)}function m(e,t,n){const s=Object.assign(Object.assign({},l()),{[t]:n});return new r.ErrorFactory("auth","Firebase",s).create(t,{appName:e.name})}function y(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return h.create(e,...t)}function v(e,t,...n){if(!e)throw y(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function I(e,t){e||w(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=new Map;function _(e){I(e instanceof Function,"Expected a class definition");let t=E.get(e);return t?(I(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,E.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function b(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(e,t){this.shortDelay=e,this.longDelay=t,I(t>e,"Short delay should be less than long delay!"),this.isMobile=r.isMobileCordova()||r.isReactNative()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(b()||r.isBrowserExtension()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){I(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},R=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function O(e,t,n,s,i={}){return L(e,i,(()=>{let i={},o={};s&&("GET"===t?o=s:i={body:JSON.stringify(s)});const a=r.querystring(Object.assign({key:e.config.apiKey},o)).slice(1),c=new(C.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),C.fetch()(P(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))}))}async function L(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},N),t);try{const t=new U(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw M(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw M(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw M(e,"email-already-in-use",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(t){if(t instanceof r.FirebaseError)throw t;p(e,"network-request-failed")}}async function x(e,t,n,r,s={}){const i=await O(e,t,n,r,s);return"mfaPendingCredential"in i&&p(e,"multi-factor-auth-required",{_serverResponse:i}),i}function P(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?A(e.config,s):`${e.config.apiScheme}://${s}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"timeout"))),R.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function M(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=g(e,t,r);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return 1e3*Number(e)}function j(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=r.base64Decode(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(e){return f("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function q(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class B{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=F(this.lastLoginAt),this.creationTime=F(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e){var t;const n=e.auth,r=await e.getIdToken(),s=await q(e,async function(e,t){return O(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));v(null==s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const a=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=o.__rest(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const c=(u=e.providerData,l=a,[...u.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var u,l;const h=e.isAnonymous,d=!(e.email&&i.passwordHash||(null==c?void 0:c.length)),f=!!h&&d,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new H(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(void 0!==e.idToken,"internal-error"),v(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=j(e);return v(t,"internal-error"),v(void 0!==t.exp,"internal-error"),v(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await L(e,{},(()=>{const n=r.querystring({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=P(e,s,"/v1/token",`key=${i}`);return C.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new $;return n&&(v("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(v("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(v("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t){v("string"==typeof e||void 0===e,"internal-error",{appName:t})}class G{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=o.__rest(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new B(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new H(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await q(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=r.getModularInstance(e),s=await n.getIdToken(t),i=j(s);v(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:i,token:s,authTime:F(V(i.auth_time)),issuedAtTime:F(V(i.iat)),expirationTime:F(V(i.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=r.getModularInstance(e);await z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new G(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await q(this,async function(e,t){return O(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:I,isAnonymous:E,providerData:_,stsTokenManager:T}=t;v(w&&T,e,"internal-error");const b=$.fromJSON(this.name,T);v("string"==typeof w,e,"internal-error"),K(l,e.name),K(h,e.name),v("boolean"==typeof I,e,"internal-error"),v("boolean"==typeof E,e,"internal-error"),K(d,e.name),K(f,e.name),K(p,e.name),K(g,e.name),K(m,e.name),K(y,e.name);const S=new G({uid:w,auth:e,email:h,emailVerified:I,displayName:l,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:b,createdAt:m,lastLoginAt:y});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new $;r.updateFromServerResponse(t);const s=new G({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await z(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}W.type="NONE";const Q=W;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t,n){return`firebase:${e}:${t}:${n}`}class J{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=X(this.userKey,r.apiKey,s),this.fullPersistenceKey=X("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?G._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new J(_(Q),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||_(Q);const i=X(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(i);if(t){const r=G._fromJSON(e,t);n!==s&&(o=r),s=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(e){}}))),new J(s,e,n)):new J(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ne(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Z(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(se(t))return"Blackberry";if(ie(t))return"Webos";if(ee(t))return"Safari";if((t.includes("chrome/")||te(t))&&!t.includes("edge/"))return"Chrome";if(re(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Z(e=r.getUA()){return/firefox\//i.test(e)}function ee(e=r.getUA()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function te(e=r.getUA()){return/crios\//i.test(e)}function ne(e=r.getUA()){return/iemobile/i.test(e)}function re(e=r.getUA()){return/android/i.test(e)}function se(e=r.getUA()){return/blackberry/i.test(e)}function ie(e=r.getUA()){return/webos/i.test(e)}function oe(e=r.getUA()){return/iphone|ipad|ipod/i.test(e)}function ae(e=r.getUA()){return oe(e)||re(e)||ie(e)||se(e)||/windows phone/i.test(e)||ne(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(e,t=[]){let n;switch(e){case"Browser":n=Y(r.getUA());break;case"Worker":n=`${Y(r.getUA())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new he(this),this.idTokenSubscription=new he(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,r;this._deleted||(this.persistenceManager=await J.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,i=await this.tryRedirectSignIn(e);r&&r!==s||!(null==i?void 0:i.user)||(n=i.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await z(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?r.getModularInstance(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.ErrorFactory("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await J.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return v(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function le(e){return r.getModularInstance(e)}class he{constructor(e){this.auth=e,this.observer=null,this.addObserver=r.createSubscribe((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(e,t){return O(e,"POST","/v1/accounts:update",t)}async function pe(e,t){return O(e,"POST","/v1/accounts:sendOobCode",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge extends de{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ge(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ge(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return x(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return x(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return fe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return x(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(e,t){return x(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends de{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ye(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=o.__rest(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new ye(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return me(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,me(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,me(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=r.querystring(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we extends de{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new we({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new we({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return x(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await x(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw M(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return x(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ve)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}=e;return n||t||r||s?new we({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){var t,n,s,i,o,a;const c=r.querystringDecode(r.extractQuerystring(e)),u=null!==(t=c.apiKey)&&void 0!==t?t:null,l=null!==(n=c.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=c.mode)&&void 0!==s?s:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(i=c.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=r.querystringDecode(r.extractQuerystring(e)).link,n=t?r.querystringDecode(r.extractQuerystring(t)).deep_link_id:null,s=r.querystringDecode(r.extractQuerystring(e)).deep_link_id;return(s?r.querystringDecode(r.extractQuerystring(s)).link:null)||s||n||t||e}(e);try{return new Ie(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{constructor(){this.providerId=Ee.PROVIDER_ID}static credential(e,t){return ge._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ie.parseLink(t);return v(n,"argument-error"),ge._fromEmailAndCode(e,n.code,n.tenantId)}}Ee.PROVIDER_ID="password",Ee.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ee.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends _e{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be extends Te{constructor(){super("facebook.com")}static credential(e){return ye._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch(e){return null}}}be.FACEBOOK_SIGN_IN_METHOD="facebook.com",be.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends Te{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ye._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Se.credential(t,n)}catch(e){return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com",Se.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke extends Te{constructor(){super("github.com")}static credential(e){return ye._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ke.credential(e.oauthAccessToken)}catch(e){return null}}}ke.GITHUB_SIGN_IN_METHOD="github.com",ke.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae extends Te{constructor(){super("twitter.com")}static credential(e,t){return ye._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ae.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ce(e,t){return x(e,"POST","/v1/accounts:signUp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ae.TWITTER_SIGN_IN_METHOD="twitter.com",Ae.PROVIDER_ID="twitter.com";class Ne{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await G._fromIdTokenResponse(e,n,r),i=Re(n);return new Ne({user:s,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Re(n);return new Ne({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Re(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De extends r.FirebaseError{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,De.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new De(e,t,n,r)}}function Oe(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw De._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t,n=!1){const r=await q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ne._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await q(e,Oe(r,s,t,e),n);v(i.idToken,r,"internal-error");const o=j(i.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),Ne._forOperation(e,s,i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&p(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t,n=!1){const r="signIn",s=await Oe(e,r,t),i=await Ne._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Ue(e,t){return Pe(le(e),t)}async function Me(e,t){return xe(r.getModularInstance(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fe(e,t,n){var r;v((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),v(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(v(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(v(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t,n){const s=r.getModularInstance(e),i={requestType:"PASSWORD_RESET",email:t};n&&Fe(s,i,n),await async function(e,t){return pe(e,t)}(s,i)}async function je(e,t,n){const r=le(e),s=await Ce(r,{returnSecureToken:!0,email:t,password:n}),i=await Ne._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function qe(e,t,n){return Ue(r.getModularInstance(e),Ee.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){const n=r.getModularInstance(e),s={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&Fe(n.auth,s,t);const{email:i}=await async function(e,t){return pe(e,t)}(n.auth,s);i!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function He(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const s=r.getModularInstance(e),i={idToken:await s.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await q(s,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return O(e,"POST","/v1/accounts:update",t)}(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function ze(e,t){return $e(r.getModularInstance(e),t,null)}async function $e(e,t,n){const{auth:r}=e,s={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const i=await q(e,fe(r,s));await e._updateTokensIfNecessary(i,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e,t,n,s){return r.getModularInstance(e).onAuthStateChanged(t,n,s)}function Ge(e){return r.getModularInstance(e).signOut()}new WeakMap;const We="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(We,"1"),this.storage.removeItem(We),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Qe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=r.getUA();return ee(e)||oe(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ae(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);r.isIE()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xe.type="LOCAL";const Je=Xe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Qe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ye.type="SESSION";const Ze=Ye;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new et(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tt(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et.receivers=[];class nt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=tt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function st(){return void 0!==rt().WorkerGlobalScope&&"function"==typeof rt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const it="firebaseLocalStorageDb",ot="firebaseLocalStorage",at="fbase_key";class ct{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ut(e,t){return e.transaction([ot],t?"readwrite":"readonly").objectStore(ot)}function lt(){const e=indexedDB.open(it,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(ot,{keyPath:at})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(ot)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(it);return new ct(e).toPromise()}(),t(await lt()))}))}))}async function ht(e,t,n){const r=ut(e,!0).put({[at]:t,value:n});return new ct(r).toPromise()}function dt(e,t){const n=ut(e,!0).delete(t);return new ct(n).toPromise()}class ft{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await lt()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return st()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=et._getInstance(st()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new nt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lt();return await ht(e,We,"1"),await dt(e,We),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ht(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ut(e,!1).get(t),r=await new ct(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>dt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ut(e,!1).getAll();return new ct(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ft.type="LOCAL";const pt=ft;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s,i;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(i=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==i?i:document).appendChild(r)}))}function mt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
mt("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt="recaptcha";async function vt(e,t,n){var r;const s=await n.verify();try{let i;if(v("string"==typeof s,e,"argument-error"),v(n.type===yt,e,"argument-error"),i="string"==typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){v("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await function(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return O(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}(e,{phoneNumber:i.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(e){this.providerId=wt.PROVIDER_ID,this.auth=le(e)}verifyPhoneNumber(e,t){return vt(this.auth,e,r.getModularInstance(t))}static credential(e,t){return we._fromVerification(e,t)}static credentialFromResult(e){const t=e;return wt.credentialFromTaggedObject(t)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?we._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function It(e,t){return t?_(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.PROVIDER_ID="phone",wt.PHONE_SIGN_IN_METHOD="phone";class Et extends de{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return me(e,this._buildIdpRequest())}_linkToIdToken(e,t){return me(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return me(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _t(e){return Pe(e.auth,new Et(e),e.bypassAuthState)}function Tt(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),xe(n,new Et(e),e.bypassAuthState)}async function bt(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),Le(n,new Et(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _t;case"linkViaPopup":case"linkViaRedirect":return bt;case"reauthViaPopup":case"reauthViaRedirect":return Tt;default:p(this.auth,"internal-error")}}resolve(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new k(2e3,1e4);class At extends St{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){I(1===this.filter.length,"Popup operations only handle one event");const e=tt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,kt.get())};e()}}At.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ct=new Map;class Nt extends St{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ct.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Dt(t),r=Rt(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ct.set(this.auth._key(),e)}return this.bypassAuthState||Ct.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Rt(e){return _(e._redirectPersistence)}function Dt(e){return X("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,n=!1){const r=le(e),s=It(r,t),i=new Nt(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Lt{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Pt(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(xt(e))}saveEventToCache(e){this.cachedEventUids.add(xt(e)),this.lastProcessedEventTime=Date.now()}}function xt(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Pt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ut=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mt=/^https?/;async function Ft(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return O(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Vt(e))return}catch(e){}p(e,"unauthorized-domain")}function Vt(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Mt.test(n))return!1;if(Ut.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new k(3e4,6e4);function qt(){const e=rt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Bt=null;function Ht(e){return Bt=Bt||function(e){return new Promise(((t,n)=>{var r,s,i;function o(){qt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{qt(),n(g(e,"network-request-failed"))},timeout:jt.get()})}if(null===(s=null===(r=rt().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=rt().gapi)||void 0===i?void 0:i.load)){const t=mt("iframefcb");return rt()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},gt(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw Bt=null,e}))}(e),Bt}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new k(5e3,15e3),$t={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gt(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?A(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},o=Kt.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${r.querystring(s).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Qt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Xt(e,t,n,s=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Wt),{width:s.toString(),height:i.toString(),top:o,left:a}),l=r.getUA().toLowerCase();n&&(c=te(l)?"_blank":n),Z(l)&&(t=t||"http://localhost",u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=r.getUA()){var t;return oe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",c),new Qt(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Qt(d)}const Jt="emulator/auth/handler";function Yt(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.SDK_VERSION,eventId:o};if(t instanceof _e){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",r.isEmpty(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Te){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const e of Object.keys(u))void 0===u[e]&&delete u[e];return`${function({config:e}){return e.emulator?A(e,Jt):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${r.querystring(u).slice(1)}`}const Zt="webStorageSupport";const en=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ze,this._completeRedirectFn=Ot}async _openPopup(e,t,n,r){var s;I(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Xt(e,Yt(e,t,n,T(),r),tt())}async _openRedirect(e,t,n,r){var s;return await this._originValidation(e),s=Yt(e,t,n,T(),r),rt().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(I(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await async function(e){const t=await Ht(e),n=rt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Gt(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$t,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=g(e,"network-request-failed"),i=rt().setTimeout((()=>{r(s)}),zt.get());function o(){rt().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}(e),n=new Lt(e);return t.register("authEvent",(t=>{v(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zt,{type:Zt},(n=>{var r;const s=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==s&&t(!!s),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ft(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ae()||ee()||oe()}};var tn,nn="@firebase/auth",rn="0.19.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function on(e=i.getApp()){const t=i._getProvider(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=i._getProvider(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),s=n.getOptions();if(r.deepEqual(s,null!=t?t:{}))return e;p(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:en,persistence:[pt,Je,Ze]})}tn="Browser",i._registerComponent(new c.Component("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=n.options;return(e=>{v(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:s,clientPlatform:tn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ce(tn)},i=new ue(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,t),i})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),i._registerComponent(new c.Component("auth-internal",(e=>{const t=le(e.getProvider("auth").getImmediate());return new sn(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),i.registerVersion(nn,rn,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(tn)),i.registerVersion(nn,rn,"esm2017")})),s.register("i7y5K",(function(t,n){e(t.exports,"__rest",(()=>r));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}Object.create;Object.create})),s.register("jl25v",(function(t,n){e(t.exports,"getStorage",(()=>s("6G1OQ").getStorage)),e(t.exports,"ref",(()=>s("6G1OQ").ref)),e(t.exports,"uploadBytes",(()=>s("6G1OQ").uploadBytes)),e(t.exports,"getDownloadURL",(()=>s("6G1OQ").getDownloadURL)),e(t.exports,"deleteObject",(()=>s("6G1OQ").deleteObject)),s("6G1OQ")})),s.register("6G1OQ",(function(t,n){e(t.exports,"uploadBytes",(()=>ve)),e(t.exports,"getDownloadURL",(()=>we)),e(t.exports,"deleteObject",(()=>Ie)),e(t.exports,"ref",(()=>Ee)),e(t.exports,"getStorage",(()=>_e));var r=s("ef5iw"),i=s("hI6C7"),o=s("8rC8i");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com";class c extends i.FirebaseError{constructor(e,t){super(u(e),`Firebase Storage: ${t} (${u(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}_codeEquals(e){return u(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function u(e){return"storage/"+e}function l(){return new c("unknown","An unknown error occurred, please check the error payload for server response.")}function h(){return new c("canceled","User canceled the upload/download.")}function d(){return new c("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function f(e){return new c("invalid-argument",e)}function p(){return new c("app-deleted","The Firebase app was deleted.")}function g(e,t){return new c("invalid-format","String does not match format '"+e+"': "+t)}function m(e){throw new c("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=y.makeFromUrl(e,t)}catch(t){return new y(e,"")}if(""===n.path)return n;throw new c("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+r+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),u=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let t=0;t<u.length;t++){const r=u[t],s=r.regex.exec(e);if(s){const e=s[r.indices.bucket];let t=s[r.indices.path];t||(t=""),n=new y(e,t),r.postModify(n);break}}if(null==n)throw new c("invalid-url","Invalid URL '"+e+"'.");return n}}class v{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){return"string"==typeof e||e instanceof String}function I(e){return E()&&e instanceof Blob}function E(){return"undefined"!=typeof Blob}function _(e,t,n,r){if(r<t)throw f(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw f(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function b(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S,k;(k=S||(S={}))[k.NO_ERROR=0]="NO_ERROR",k[k.NETWORK_ERROR=1]="NETWORK_ERROR",k[k.ABORT=2]="ABORT";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e,t,n,r,s,i,o,a,c,u,l){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const n=this.resolve_,r=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponseText());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==s){const e=l();e.serverResponse=s.getResponseText(),this.errorCallback_?r(this.errorCallback_(s,e)):r(e)}else if(t.canceled){r(this.appDelete_?p():h())}else{r(new c("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?e(0,new C(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){s=setTimeout((()=>{s=null,e(f,c())}),t)}function d(){i&&clearTimeout(i)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);if(c()||o)return d(),void l.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let p=!1;function g(e){p||(p=!0,d(),u||(null!==s?(e||(a=2),clearTimeout(s),h(0)):e||(a=1)))}return h(0),i=setTimeout((()=>{o=!0,g(!0)}),n),g}(((e,t)=>{if(t)return void e(!1,new C(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===S.NO_ERROR,s=n.getStatus();if(!t||this.isRetryStatusCode_(s)){const t=n.getErrorCode()===S.ABORT;return void e(!1,new C(!1,null,t))}const i=-1!==this.successCodes_.indexOf(s);e(!0,new C(i,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class C{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function R(...e){const t=N();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(E())return new Blob(e);throw new c("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D="raw",O="base64",L="base64url",x="data_url";class P{constructor(e,t){this.data=e,this.contentType=t||null}}function U(e,t){switch(e){case D:return new P(M(t));case O:case L:return new P(F(e,t));case x:return new P(function(e){const t=new V(e);return t.base64?F(O,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw g(x,"Malformed data URL.")}return M(t)}(t.rest)}(t),new V(t).contentType)}throw l()}function M(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function F(e,t){switch(e){case O:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw g(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case L:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw g(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw g(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class V{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw g(x,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;var r,s;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */null!=n&&(this.base64=(s=";base64",!!((r=n).length>=s.length)&&r.substring(r.length-s.length)===s),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class j{constructor(e,t){let n=0,r="";I(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(I(this.data_)){const i=this.data_,o=(r=e,s=t,(n=i).webkitSlice?n.webkitSlice(r,s):n.mozSlice?n.mozSlice(r,s):n.slice?n.slice(r,s):null);return null===o?null:new j(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new j(n,!0)}var n,r,s;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}static getBlob(...e){if(E()){const t=e.map((e=>e instanceof j?e.data_:e));return new j(R.apply(null,t))}{const t=e.map((e=>w(e)?U(D,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let s=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[s++]=e[t]})),new j(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){return t}class z{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||H}}let $=null;function K(){if($)return $;const e=[];e.push(new z("bucket")),e.push(new z("generation")),e.push(new z("metageneration")),e.push(new z("name","fullPath",!0));const t=new z("name");t.xform=function(e,t){return function(e){return!w(e)||e.length<2?e:B(e)}(t)},e.push(t);const n=new z("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new z("timeCreated")),e.push(new z("updated")),e.push(new z("md5Hash",null,!0)),e.push(new z("cacheControl",null,!0)),e.push(new z("contentDisposition",null,!0)),e.push(new z("contentEncoding",null,!0)),e.push(new z("contentLanguage",null,!0)),e.push(new z("contentType",null,!0)),e.push(new z("metadata","customMetadata",!0)),$=e,$}function G(e,t,n){const r={type:"file"},s=n.length;for(let e=0;e<s;e++){const s=n[e];r[s.local]=s.xform(r,t[s.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,s=new y(n,r);return t._makeStorageReference(s)}})}(r,e),r}function W(e,t,n){const r=q(t);if(null===r)return null;return G(e,r,n)}function Q(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const r=t[s];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){if(!e)throw l()}function Y(e,t){return function(n,r){const s=W(e,r,t);return J(null!==s),s}}function Z(e,t){return function(n,r){const s=W(e,r,t);return J(null!==s),function(e,t,n,r){const s=q(t);if(null===s)return null;if(!w(s.downloadTokens))return null;const i=s.downloadTokens;if(0===i.length)return null;const o=encodeURIComponent;return i.split(",").map((t=>{const s=e.bucket,i=e.fullPath;return T("/b/"+o(s)+"/o/"+o(i),n,r)+b({alt:"media",token:t})}))[0]}(s,r,e.host,e._protocol)}}function ee(e){return function(t,n){let r;var s,i;return 401===t.getStatus()?r=t.getResponseText().includes("Firebase App Check token is invalid")?new c("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new c("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,r=new c("quota-exceeded","Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,r=new c("unauthorized","User does not have permission to access '"+s+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function te(e){const t=ee(e);return function(n,r){let s=t(n,r);var i;return 404===n.getStatus()&&(i=e.path,s=new c("object-not-found","Object '"+i+"' does not exist.")),s.serverResponse=r.serverResponse,s}}function ne(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function re(e,t,n,r,s){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const c=ne(t,r,s),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Q(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",l="\r\n--"+a+"--",h=j.getBlob(u,r,l);if(null===h)throw d();const f={name:c.fullPath},p=T(i,e.host,e._protocol),g=e.maxUploadRetryTime,m=new X(p,"POST",Y(e,n),g);return m.urlParams=f,m.headers=o,m.body=h.uploadData(),m.errorHandler=ee(t),m}class se{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=S.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=S.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=S.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw m("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw m("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw m("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw m("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}function ie(){return new se}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oe{constructor(e,t){this._service=e,this._location=t instanceof y?t:y.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new oe(e,t)}get root(){const e=new y(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return B(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new y(this._location.bucket,e);return new oe(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new c("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function ae(e,t,n){e._throwIfRoot("uploadBytes");const r=re(e.storage,e._location,K(),new j(t,!0),n);return e.storage.makeRequestWithTokens(r,ie).then((t=>({metadata:t,ref:e})))}function ce(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=T(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,i=new X(r,"GET",Z(e,n),s);return i.errorHandler=te(t),i}(e.storage,e._location,K());return e.storage.makeRequestWithTokens(t,ie).then((e=>{if(null===e)throw new c("no-download-url","The given file does not have any download URLs.");return e}))}function ue(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=T(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,s=new X(n,"DELETE",(function(e,t){}),r);return s.successCodes=[200,204],s.errorHandler=te(t),s}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,ie)}function le(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new y(e._location.bucket,n);return new oe(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e,t){if(e instanceof pe){const n=e;if(null==n._bucket)throw new c("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new oe(n,n._bucket);return null!=t?he(r,t):r}return void 0!==t?le(e,t):e}function de(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof pe)return new oe(e,t);throw f("To use ref(service, url), the first argument must be a Storage instance.")}return he(e,t)}function fe(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:y.makeFromBucketSpec(n,e)}class pe{constructor(e,t,n,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?y.makeFromBucketSpec(r,this._host):fe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=y.makeFromBucketSpec(this._url,e):this._bucket=fe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new oe(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new v(p());{const s=function(e,t,n,r,s,i){const o=b(e.urlParams),a=e.url+o,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,i),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new A(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s)}(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const ge="@firebase/storage",me="0.8.7",ye="storage";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ve(e,t,n){return ae(e=i.getModularInstance(e),t,n)}function we(e){return ce(e=i.getModularInstance(e))}function Ie(e){return ue(e=i.getModularInstance(e))}function Ee(e,t){return de(e=i.getModularInstance(e),t)}function _e(e=r.getApp(),t){e=i.getModularInstance(e);return r._getProvider(e,ye).getImmediate({identifier:t})}function Te(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new pe(n,s,i,t,r.SDK_VERSION)}r._registerComponent(new o.Component(ye,Te,"PUBLIC").setMultipleInstances(!0)),r.registerVersion(ge,me,""),r.registerVersion(ge,me,"esm2017")})),s.register("i240J",(function(t,n){e(t.exports,"Items",(()=>i)),e(t.exports,"successfulSignIn",(()=>o)),e(t.exports,"successfulSignOut",(()=>a)),e(t.exports,"fillUserItems",(()=>c));var r=s("5BxsO");const i={mensClothing:[],womensClothing:[],kidsClothing:[],electronics:[],furniture:[]};function o(){document.querySelectorAll(".navAction").forEach((e=>{e.classList.toggle("d-none")})),async function(){const e=await r.getCurrentUserProfile();document.querySelector("#profileModalTitle").innerHTML=`Hello ${e.displayName}`,document.querySelector("#profileDisplayName").innerHTML=e.displayName,document.querySelector("#profileEmail").innerHTML=e.email,document.querySelector("#profileAddress").innerHTML=e.address}(),document.querySelector(".btn-close").click()}function a(){document.querySelector("#navLoginButton").classList.remove("d-none"),document.querySelector("#bagIconButton").classList.add("d-none"),document.querySelector("#navDonateButton").classList.add("d-none"),document.querySelector("#profileIconButton").classList.add("d-none"),document.querySelector("#closeModalButton").click()}function c(e){document.querySelector("#selfItemAccordionBody").innerHTML="",r.getUserItems(e).then((t=>{t.forEach((t=>{const{address:n,imageURL:s,itemCategory:i,itemDescription:o,itemName:a}=t.data(),c=t.id;let u=document.createElement("div");u.classList.add("card","selfCard","mb-3"),u.style.maxWidth="540px";let l=document.createElement("img");l.setAttribute("src",s),l.classList.add("img-fluid","rounded-start","selfItemImage"),u.appendChild(l);let h=document.createElement("div");h.classList.add("card-body","selfItemsCardBody"),u.appendChild(h);let d=document.createElement("h5");d.classList.add("card-title"),d.innerHTML=a,h.appendChild(d);let f=document.createElement("p");f.classList.add("card-text"),f.innerHTML=o,h.appendChild(f);let p=document.createElement("button");p.classList.add("btn","btn-danger","deleteButton"),p.innerHTML="Delete",p.addEventListener("click",(()=>{r.deleteItem(i,c,e,s).then((()=>{alert("Item removed"),document.querySelector("#selfItemAccordionBody").removeChild(u)})).catch((e=>{console.log(e),alert("Error removing item")}))})),h.appendChild(p),document.querySelector("#selfItemAccordionBody").appendChild(u)}))}))}document.querySelector("#signUpButton").addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector("#signupFirstName"),n=document.querySelector("#signupLastName"),s=document.querySelector("#signupEmail"),i=document.querySelector("#signupPassword"),o=document.querySelector("#signupAddress");r.signUpUser(t.value,n.value,s.value,i.value,o.value),[t,n,s,i,o].forEach((e=>e.value=""))})),document.querySelector("#loginButton").addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector("#emailLogin"),n=document.querySelector("#passwordLogin");r.signInUser(t.value,n.value),t.value="",n.value=""})),document.querySelector("#signOutButton").addEventListener("click",(()=>{r.signOutUser()})),document.querySelector("#resetPasswordButton").addEventListener("click",(()=>{r.resetPassword()})),document.querySelector(".bi-pencil").addEventListener("click",(()=>{document.querySelector(".newEmailContainer").classList.toggle("d-none")})),document.querySelector(".updateEmail").addEventListener("click",(()=>{const e=document.querySelector(".newEmail").value;r.resetEmail(e)})),document.querySelector("#donateButton").addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector("#itemName"),n=document.querySelector("#itemDescription");let s="";const i=document.querySelector("#imageInput");document.querySelectorAll(".form-check-input").forEach((e=>{e.checked&&(s=e.value)})),document.querySelector(".alert-warning").classList.toggle("d-none"),r.addNewItem(t.value,n.value,s,i.files[0]).then((()=>{alert("Item added successfully"),document.querySelector(".alert-warning").classList.toggle("d-none"),document.querySelector("#donateModalClose").click(),document.querySelectorAll(".donateInput").forEach((e=>{e.checked=!1})),[t,n,i].forEach((e=>{e.value=""}))})).catch((e=>{console.log(e),alert("Error adding item")}))}))})),s("5BxsO");
//# sourceMappingURL=index.4b429a1d.js.map
