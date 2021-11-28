var Df=Object.defineProperty;var yu=Object.getOwnPropertySymbols;var Of=Object.prototype.hasOwnProperty,Lf=Object.prototype.propertyIsEnumerable;var vu=(n,e,t)=>e in n?Df(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Pe=(n,e)=>{for(var t in e||(e={}))Of.call(e,t)&&vu(n,t,e[t]);if(yu)for(var t of yu(e))Lf.call(e,t)&&vu(n,t,e[t]);return n};function Gt(){}function V(n,e){for(const t in e)n[t]=e[t];return n}function Iu(n){return n()}function Eu(){return Object.create(null)}function Ce(n){n.forEach(Iu)}function Fe(n){return typeof n=="function"}function ke(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Ms;function cT(n,e){return Ms||(Ms=document.createElement("a")),Ms.href=e,n===Ms.href}function Nf(n){return Object.keys(n).length===0}function kf(n,...e){if(n==null)return Gt;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Mf(n,e,t){n.$$.on_destroy.push(kf(e,t))}function Qe(n,e,t,i){if(n){const s=_u(n,e,t,i);return n[0](s)}}function _u(n,e,t,i){return n[1]&&i?V(t.ctx.slice(),n[1](i(e))):t.ctx}function Ye(n,e,t,i){if(n[2]&&i){const s=n[2](i(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],a=Math.max(e.dirty.length,s.length);for(let o=0;o<a;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function Je(n,e,t,i,s,r){if(s){const a=_u(e,t,i,r);n.p(a,s)}}function Ze(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function Me(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function oe(n,e){const t={};e=new Set(e);for(const i in n)!e.has(i)&&i[0]!=="$"&&(t[i]=n[i]);return t}function Pf(n,e,t){return n.set(t),e}function fe(n){return n&&Fe(n.destroy)?n.destroy:Gt}let Ps=!1;function Ff(){Ps=!0}function Uf(){Ps=!1}function Vf(n,e,t,i){for(;n<e;){const s=n+(e-n>>1);t(s)<=i?n=s+1:e=s}return n}function Bf(n){if(n.hydrate_init)return;n.hydrate_init=!0;let e=n.childNodes;if(n.nodeName==="HEAD"){const u=[];for(let c=0;c<e.length;c++){const l=e[c];l.claim_order!==void 0&&u.push(l)}e=u}const t=new Int32Array(e.length+1),i=new Int32Array(e.length);t[0]=-1;let s=0;for(let u=0;u<e.length;u++){const c=e[u].claim_order,l=(s>0&&e[t[s]].claim_order<=c?s+1:Vf(1,s,d=>e[t[d]].claim_order,c))-1;i[u]=t[l]+1;const h=l+1;t[h]=u,s=Math.max(h,s)}const r=[],a=[];let o=e.length-1;for(let u=t[s]+1;u!=0;u=i[u-1]){for(r.push(e[u-1]);o>=u;o--)a.push(e[o]);o--}for(;o>=0;o--)a.push(e[o]);r.reverse(),a.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<a.length;u++){for(;c<r.length&&a[u].claim_order>=r[c].claim_order;)c++;const l=c<r.length?r[c]:null;n.insertBefore(a[u],l)}}function me(n,e){if(Ps){for(Bf(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;e!==n.actual_end_child?(e.claim_order!==void 0||e.parentNode!==n)&&n.insertBefore(e,n.actual_end_child):n.actual_end_child=e.nextSibling}else(e.parentNode!==n||e.nextSibling!==null)&&n.appendChild(e)}function ue(n,e,t){Ps&&!t?me(n,e):(e.parentNode!==n||e.nextSibling!=t)&&n.insertBefore(e,t||null)}function D(n){n.parentNode.removeChild(n)}function Hf(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function X(n){return document.createElement(n)}function si(n){return document.createTextNode(n)}function Rt(){return si(" ")}function Vt(){return si("")}function $e(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function xf(n){return function(e){return e.preventDefault(),n.call(this,e)}}function jf(n){return function(e){return e.stopPropagation(),n.call(this,e)}}function Q(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function le(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const i in e)e[i]==null?n.removeAttribute(i):i==="style"?n.style.cssText=e[i]:i==="__value"?n.value=n[i]=e[i]:t[i]&&t[i].set?n[i]=e[i]:Q(n,i,e[i])}function so(n){return n===""?null:+n}function $(n){return Array.from(n.childNodes)}function zf(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function Tu(n,e,t,i,s=!1){zf(n);const r=(()=>{for(let a=n.claim_info.last_index;a<n.length;a++){const o=n[a];if(e(o)){const u=t(o);return u===void 0?n.splice(a,1):n[a]=u,s||(n.claim_info.last_index=a),o}}for(let a=n.claim_info.last_index-1;a>=0;a--){const o=n[a];if(e(o)){const u=t(o);return u===void 0?n.splice(a,1):n[a]=u,s?u===void 0&&n.claim_info.last_index--:n.claim_info.last_index=a,o}}return i()})();return r.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,r}function qf(n,e,t,i){return Tu(n,s=>s.nodeName===e,s=>{const r=[];for(let a=0;a<s.attributes.length;a++){const o=s.attributes[a];t[o.name]||r.push(o.name)}r.forEach(a=>s.removeAttribute(a))},()=>i(e))}function Y(n,e,t){return qf(n,e,t,X)}function Fs(n,e){return Tu(n,t=>t.nodeType===3,t=>{const i=""+e;if(t.data.startsWith(i)){if(t.data.length!==i.length)return t.splitText(i.length)}else t.data=i},()=>si(e),!0)}function Dt(n){return Fs(n," ")}function ro(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function ri(n,e){n.value=e==null?"":e}function hT(n,e,t,i){n.style.setProperty(e,t,i?"important":"")}let Us;function Vs(n){Us=n}function we(){if(!Us)throw new Error("Function called outside component initialization");return Us}function Vn(n){we().$$.on_mount.push(n)}function dT(n){we().$$.after_update.push(n)}function oi(n){we().$$.on_destroy.push(n)}function tt(n,e){we().$$.context.set(n,e)}function ft(n){return we().$$.context.get(n)}function Bn(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const Fi=[],ge=[],Bs=[],oo=[],Gf=Promise.resolve();let ao=!1;function Wf(){ao||(ao=!0,Gf.then(Au))}function uo(n){Bs.push(n)}function Kf(n){oo.push(n)}let lo=!1;const co=new Set;function Au(){if(!lo){lo=!0;do{for(let n=0;n<Fi.length;n+=1){const e=Fi[n];Vs(e),Xf(e.$$)}for(Vs(null),Fi.length=0;ge.length;)ge.pop()();for(let n=0;n<Bs.length;n+=1){const e=Bs[n];co.has(e)||(co.add(e),e())}Bs.length=0}while(Fi.length);for(;oo.length;)oo.pop()();ao=!1,lo=!1,co.clear()}}function Xf(n){if(n.fragment!==null){n.update(),Ce(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(uo)}}const Hs=new Set;let Hn;function xs(){Hn={r:0,c:[],p:Hn}}function js(){Hn.r||Ce(Hn.c),Hn=Hn.p}function Ee(n,e){n&&n.i&&(Hs.delete(n),n.i(e))}function _e(n,e,t,i){if(n&&n.o){if(Hs.has(n))return;Hs.add(n),Hn.c.push(()=>{Hs.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}const Qf=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function fT(n,e){_e(n,1,1,()=>{e.delete(n.key)})}function mT(n,e,t,i,s,r,a,o,u,c,l,h){let d=n.length,f=r.length,m=d;const y={};for(;m--;)y[n[m].key]=m;const g=[],v=new Map,I=new Map;for(m=f;m--;){const b=h(s,r,m),N=t(b);let T=a.get(N);T?i&&T.p(b,e):(T=c(N,b),T.c()),v.set(N,g[m]=T),N in y&&I.set(N,Math.abs(m-y[N]))}const _=new Set,M=new Set;function j(b){Ee(b,1),b.m(o,l),a.set(b.key,b),l=b.first,f--}for(;d&&f;){const b=g[f-1],N=n[d-1],T=b.key,A=N.key;b===N?(l=b.first,d--,f--):v.has(A)?!a.has(T)||_.has(T)?j(b):M.has(A)?d--:I.get(T)>I.get(A)?(M.add(T),j(b)):(_.add(A),d--):(u(N,a),d--)}for(;d--;){const b=n[d];v.has(b.key)||u(b,a)}for(;f;)j(g[f-1]);return g}function Re(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const a=n[r],o=e[r];if(o){for(const u in a)u in o||(i[u]=1);for(const u in o)s[u]||(t[u]=o[u],s[u]=1);n[r]=o}else for(const u in a)s[u]=1}for(const a in i)a in t||(t[a]=void 0);return t}function Et(n){return typeof n=="object"&&n!==null?n:{}}function Yf(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function on(n){n&&n.c()}function Ui(n,e){n&&n.l(e)}function Jt(n,e,t,i){const{fragment:s,on_mount:r,on_destroy:a,after_update:o}=n.$$;s&&s.m(e,t),i||uo(()=>{const u=r.map(Iu).filter(Fe);a?a.push(...u):Ce(u),n.$$.on_mount=[]}),o.forEach(uo)}function Zt(n,e){const t=n.$$;t.fragment!==null&&(Ce(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Jf(n,e){n.$$.dirty[0]===-1&&(Fi.push(n),Wf(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ue(n,e,t,i,s,r,a,o=[-1]){const u=Us;Vs(n);const c=n.$$={fragment:null,ctx:null,props:r,update:Gt,not_equal:s,bound:Eu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Eu(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};a&&a(c.root);let l=!1;if(c.ctx=t?t(n,e.props||{},(h,d,...f)=>{const m=f.length?f[0]:d;return c.ctx&&s(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),l&&Jf(n,h)),d}):[],c.update(),l=!0,Ce(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){Ff();const h=$(e.target);c.fragment&&c.fragment.l(h),h.forEach(D)}else c.fragment&&c.fragment.c();e.intro&&Ee(n.$$.fragment),Jt(n,e.target,e.anchor,e.customElement),Uf(),Au()}Vs(u)}class Ve{$destroy(){Zt(this,1),this.$destroy=Gt}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Nf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ai=[];function pT(n,e=Gt){let t;const i=new Set;function s(o){if(ke(n,o)&&(n=o,t)){const u=!ai.length;for(const c of i)c[1](),ai.push(c,n);if(u){for(let c=0;c<ai.length;c+=2)ai[c][0](ai[c+1]);ai.length=0}}}function r(o){s(o(n))}function a(o,u=Gt){const c=[o,u];return i.add(c),i.size===1&&(t=e(s)||Gt),o(n),()=>{i.delete(c),i.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:a}}/**
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
 *//**
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
 */const Zf=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)==55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)==56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},$f=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],a=n[t++],o=n[t++],u=((s&7)<<18|(r&63)<<12|(a&63)<<6|o&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const r=n[t++],a=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},em={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],a=s+1<n.length,o=a?n[s+1]:0,u=s+2<n.length,c=u?n[s+2]:0,l=r>>2,h=(r&3)<<4|o>>4;let d=(o&15)<<2|c>>6,f=c&63;u||(f=64,a||(d=64)),i.push(t[l],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Zf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$f(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],o=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||o==null||c==null||h==null)throw Error();const d=r<<2|o>>4;if(i.push(d),c!==64){const f=o<<4&240|c>>2;if(i.push(f),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},tm=function(n){try{return em.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class nm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function nt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Su(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function bu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function im(){return nt().indexOf("Electron/")>=0}function Cu(){const n=nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function sm(){return nt().indexOf("MSAppHost/")>=0}/**
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
 */const rm="FirebaseError";class ui extends Error{constructor(e,t,i){super(t);this.code=e,this.customData=i,this.name=rm,Object.setPrototypeOf(this,ui.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?om(r,i):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new ui(s,o,i)}}function om(n,e){return n.replace(am,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const am=/\{\$([^}]+)}/g;function um(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zs(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],a=e[s];if(Ru(r)&&Ru(a)){if(!zs(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ru(n){return n!==null&&typeof n=="object"}/**
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
 */function Bi(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function lm(n,e){const t=new cm(n,e);return t.subscribe.bind(t)}class cm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");hm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ho),s.error===void 0&&(s.error=ho),s.complete===void 0&&(s.complete=ho);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ho(){}/**
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
 */function $t(n){return n&&n._delegate?n._delegate:n}class li{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xn="[DEFAULT]";/**
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
 */class dm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new nm;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mm(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);i===o&&a.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:fm(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fm(n){return n===xn?void 0:n}function mm(n){return n.instantiationMode==="EAGER"}/**
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
 */class pm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ie||(Ie={}));const gm={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},ym=Ie.INFO,vm={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},Im=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=vm[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fo{constructor(e){this.name=e,this._logLevel=ym,this._logHandler=Im,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}/**
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
 */class Em{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_m(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function _m(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mo="@firebase/app",Du="0.7.9";/**
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
 */const po=new fo("@firebase/app"),Tm="@firebase/app-compat",Am="@firebase/analytics-compat",Sm="@firebase/analytics",bm="@firebase/app-check-compat",wm="@firebase/app-check",Cm="@firebase/auth",Rm="@firebase/auth-compat",Dm="@firebase/database",Om="@firebase/database-compat",Lm="@firebase/functions",Nm="@firebase/functions-compat",km="@firebase/installations",Mm="@firebase/installations-compat",Pm="@firebase/messaging",Fm="@firebase/messaging-compat",Um="@firebase/performance",Vm="@firebase/performance-compat",Bm="@firebase/remote-config",Hm="@firebase/remote-config-compat",xm="@firebase/storage",jm="@firebase/storage-compat",zm="@firebase/firestore",qm="@firebase/firestore-compat",Gm="firebase",Wm="9.5.0";/**
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
 */const Ou="[DEFAULT]",Km={[mo]:"fire-core",[Tm]:"fire-core-compat",[Sm]:"fire-analytics",[Am]:"fire-analytics-compat",[wm]:"fire-app-check",[bm]:"fire-app-check-compat",[Cm]:"fire-auth",[Rm]:"fire-auth-compat",[Dm]:"fire-rtdb",[Om]:"fire-rtdb-compat",[Lm]:"fire-fn",[Nm]:"fire-fn-compat",[km]:"fire-iid",[Mm]:"fire-iid-compat",[Pm]:"fire-fcm",[Fm]:"fire-fcm-compat",[Um]:"fire-perf",[Vm]:"fire-perf-compat",[Bm]:"fire-rc",[Hm]:"fire-rc-compat",[xm]:"fire-gcs",[jm]:"fire-gcs-compat",[zm]:"fire-fst",[qm]:"fire-fst-compat","fire-js":"fire-js",[Gm]:"fire-js-all"};/**
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
 */const qs=new Map,go=new Map;function Xm(n,e){try{n.container.addComponent(e)}catch(t){po.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Hi(n){const e=n.name;if(go.has(e))return po.debug(`There were multiple attempts to register component ${e}.`),!1;go.set(e,n);for(const t of qs.values())Xm(t,n);return!0}function yo(n,e){return n.container.getProvider(e)}/**
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
 */const Qm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Gs=new Vi("app","Firebase",Qm);/**
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
 */class Ym{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new li("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gs.create("app-deleted",{appName:this._name})}}/**
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
 */const xi=Wm;function gT(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Ou,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Gs.create("bad-app-name",{appName:String(i)});const s=qs.get(i);if(s){if(zs(n,s.options)&&zs(t,s.config))return s;throw Gs.create("duplicate-app",{appName:i})}const r=new pm(i);for(const o of go.values())r.addComponent(o);const a=new Ym(n,t,r);return qs.set(i,a),a}function Lu(n=Ou){const e=qs.get(n);if(!e)throw Gs.create("no-app",{appName:n});return e}function yn(n,e,t){var i;let s=(i=Km[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),po.warn(o.join(" "));return}Hi(new li(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function Jm(n){Hi(new li("platform-logger",e=>new Em(e),"PRIVATE")),yn(mo,Du,n),yn(mo,Du,"esm2017"),yn("fire-js","")}Jm("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var vo=function(n,e){return vo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])},vo(n,e)};function vn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");vo(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var at=function(){return at=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++){t=arguments[i];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},at.apply(this,arguments)};function Io(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function ci(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Nu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zm=Nu,ku=new Vi("auth","Firebase",Nu());/**
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
 */const Mu=new fo("@firebase/auth");function Ws(n,...e){Mu.logLevel<=Ie.ERROR&&Mu.error(`Auth (${xi}): ${n}`,...e)}/**
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
 */function en(n,...e){throw Eo(n,...e)}function tn(n,...e){return Eo(n,...e)}function Pu(n,e,t){const i=Object.assign(Object.assign({},Zm()),{[e]:t});return new Vi("auth","Firebase",i).create(e,{appName:n.name})}function $m(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&en(n,"argument-error"),Pu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Eo(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ku.create(n,...e)}function se(n,e,...t){if(!n)throw Eo(e,...t)}function an(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ws(e),new Error(e)}function un(n,e){n||an(e)}/**
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
 */const Fu=new Map;function ln(n){un(n instanceof Function,"Expected a class definition");let e=Fu.get(n);return e?(un(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fu.set(n,e),e)}/**
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
 */function ep(n,e){const t=yo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(zs(r,e!=null?e:{}))return s;en(s,"already-initialized")}return t.initialize({options:e})}function tp(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ln);(e==null?void 0:e.errorMap)&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function _o(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function np(){return Uu()==="http:"||Uu()==="https:"}function Uu(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ip(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(np()||bu()||"connection"in navigator)?navigator.onLine:!0}function sp(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ji{constructor(e,t){this.shortDelay=e,this.longDelay=t,un(t>e,"Short delay should be less than long delay!"),this.isMobile=Su()||wu()}get(){return ip()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function To(n,e){un(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ao{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const op=new ji(3e4,6e4);function ap(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ks(n,e,t,i,s={}){return Vu(n,s,()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const o=Bi(Object.assign({key:n.config.apiKey},a)).slice(1),u=new(Ao.headers());return u.set("Content-Type","application/json"),u.set("X-Client-Version",n._getSdkClientVersion()),n.languageCode&&u.set("X-Firebase-Locale",n.languageCode),Ao.fetch()(Bu(n,n.config.apiHost,t,o),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},r))})}async function Vu(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},rp),e);try{const s=new lp(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw So(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const o=r.ok?a.errorMessage:a.error.message,[u,c]=o.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw So(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw So(n,"email-already-in-use",a);const l=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Pu(n,l,c);en(n,l)}}catch(s){if(s instanceof ui)throw s;en(n,"network-request-failed")}}async function up(n,e,t,i,s={}){const r=await Ks(n,e,t,i,s);return"mfaPendingCredential"in r&&en(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Bu(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?To(n.config,s):`${n.config.apiScheme}://${s}`}class lp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(tn(this.auth,"timeout")),op.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function So(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=tn(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function cp(n,e){return Ks(n,"POST","/v1/accounts:delete",e)}async function hp(n,e){return Ks(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function zi(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dp(n,e=!1){const t=$t(n),i=await t.getIdToken(e),s=wo(i);se(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:zi(bo(s.auth_time)),issuedAtTime:zi(bo(s.iat)),expirationTime:zi(bo(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function bo(n){return Number(n)*1e3}function wo(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ws("JWT malformed, contained fewer than 3 sections"),null;try{const s=tm(t);return s?JSON.parse(s):(Ws("Failed to decode base64 JWT payload"),null)}catch(s){return Ws("Caught error parsing JWT payload as JSON",s),null}}function fp(n){const e=wo(n);return se(e,"internal-error"),se(typeof e.exp!="undefined","internal-error"),se(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ui&&mp(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function mp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class pp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xs(n){var e;const t=n.auth,i=await n.getIdToken(),s=await qi(n,hp(t,{idToken:i}));se(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const a=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?vp(r.providerUserInfo):[],o=yp(n.providerData,a),u=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(o==null?void 0:o.length),l=u?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Hu(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function gp(n){const e=$t(n);await Xs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yp(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function vp(n){return n.map(e=>{var{providerId:t}=e,i=Io(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Ip(n,e){const t=await Vu(n,{},()=>{const i=Bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,a=Bu(n,s,"/v1/token",`key=${r}`);return Ao.fetch()(a,{method:"POST",headers:{"X-Client-Version":n._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class Gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken!="undefined","internal-error"),se(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return se(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Ip(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,a=new Gi;return i&&(se(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(se(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(se(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gi,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
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
 */function In(n,e){se(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class jn{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Io(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new pp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new Hu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await qi(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dp(this,e)}reload(){return gp(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Xs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qi(this,cp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,a,o,u,c,l;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(a=t.photoURL)!==null&&a!==void 0?a:void 0,y=(o=t.tenantId)!==null&&o!==void 0?o:void 0,g=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,v=(c=t.createdAt)!==null&&c!==void 0?c:void 0,I=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:_,emailVerified:M,isAnonymous:j,providerData:b,stsTokenManager:N}=t;se(_&&N,e,"internal-error");const T=Gi.fromJSON(this.name,N);se(typeof _=="string",e,"internal-error"),In(h,e.name),In(d,e.name),se(typeof M=="boolean",e,"internal-error"),se(typeof j=="boolean",e,"internal-error"),In(f,e.name),In(m,e.name),In(y,e.name),In(g,e.name),In(v,e.name),In(I,e.name);const A=new jn({uid:_,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:j,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:T,createdAt:v,lastLoginAt:I});return b&&Array.isArray(b)&&(A.providerData=b.map(k=>Object.assign({},k))),g&&(A._redirectEventId=g),A}static async _fromIdTokenResponse(e,t,i=!1){const s=new Gi;s.updateFromServerResponse(t);const r=new jn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Xs(r),r}}/**
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
 */class xu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xu.type="NONE";const ju=xu;/**
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
 */function Qs(n,e,t){return`firebase:${n}:${e}:${t}`}class hi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Qs(this.userKey,s.apiKey,r),this.fullPersistenceKey=Qs("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new hi(ln(ju),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||ln(ju);const a=Qs(i,e.config.apiKey,e.name);let o=null;for(const c of t)try{const l=await c._get(a);if(l){const h=jn._fromJSON(e,l);c!==r&&(o=h),r=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new hi(r,e,i):(r=u[0],o&&await r._set(a,o.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(a)}catch{}})),new hi(r,e,i))}}/**
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
 */function zu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xu(e))return"Blackberry";if(Qu(e))return"Webos";if(Co(e))return"Safari";if((e.includes("chrome/")||Gu(e))&&!e.includes("edge/"))return"Chrome";if(Ku(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function qu(n=nt()){return/firefox\//i.test(n)}function Co(n=nt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gu(n=nt()){return/crios\//i.test(n)}function Wu(n=nt()){return/iemobile/i.test(n)}function Ku(n=nt()){return/android/i.test(n)}function Xu(n=nt()){return/blackberry/i.test(n)}function Qu(n=nt()){return/webos/i.test(n)}function Ys(n=nt()){return/iphone|ipad|ipod/i.test(n)}function Ep(n=nt()){var e;return Ys(n)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function _p(){return Cu()&&document.documentMode===10}function Yu(n=nt()){return Ys(n)||Ku(n)||Qu(n)||Xu(n)||/windows phone/i.test(n)||Wu(n)}function Tp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ju(n,e=[]){let t;switch(n){case"Browser":t=zu(nt());break;case"Worker":t=`${zu(nt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xi}/${i}`}/**
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
 */class Ap{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zu(this),this.idTokenSubscription=new Zu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ku,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ln(t)),this._initializationPromise=this.queue(async()=>{var i,s;this._deleted||(this.persistenceManager=await hi.create(this,e),!this._deleted&&(((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,r=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===r)&&(a==null?void 0:a.user)&&(i=a.user)}return i?i._redirectEventId?(se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xs(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?$t(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vi("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ln(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await hi.create(this,[ln(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return se(a,this,"internal-error"),a.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ju(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Ro(n){return $t(n)}class Zu{constructor(e){this.auth=e,this.observer=null,this.addObserver=lm(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class $u{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,t){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}/**
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
 */async function di(n,e){return up(n,"POST","/v1/accounts:signInWithIdp",ap(n,e))}/**
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
 */const Sp="http://localhost";class zn extends $u{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):en("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Io(t,["providerId","signInMethod"]);if(!i||!s)return null;const a=new zn(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return di(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,di(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,di(e,t)}buildRequest(){const e={requestUri:Sp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Bi(t)}return e}}/**
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
 */class Do{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wi extends Do{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class En extends Wi{constructor(){super("facebook.com")}static credential(e){return zn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
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
 */class _n extends Wi{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return zn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return _n.credential(t,i)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
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
 */class Tn extends Wi{constructor(){super("github.com")}static credential(e){return zn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
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
 */class An extends Wi{constructor(){super("twitter.com")}static credential(e,t){return zn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return An.credential(t,i)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
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
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await jn._fromIdTokenResponse(e,i,s),a=el(i);return new fi({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=el(i);return new fi({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function el(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Js extends ui{constructor(e,t,i,s){var r;super(t.code,t.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,Js.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Js(e,t,i,s)}}function tl(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Js._fromErrorAndOperation(n,r,e,i):r})}async function bp(n,e,t=!1){const i=await qi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return fi._forOperation(n,"link",i)}/**
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
 */async function wp(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await qi(n,tl(i,s,e,n),t);se(r.idToken,i,"internal-error");const a=wo(r.idToken);se(a,i,"internal-error");const{sub:o}=a;return se(n.uid===o,i,"user-mismatch"),fi._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&en(i,"user-mismatch"),r}}/**
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
 */async function Cp(n,e,t=!1){const i="signIn",s=await tl(n,i,e),r=await fi._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function yT(n,e,t,i){return $t(n).onAuthStateChanged(e,t,i)}const Zs="__sak";/**
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
 */class nl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zs,"1"),this.storage.removeItem(Zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Rp(){const n=nt();return Co(n)||Ys(n)}const Dp=1e3,Op=10;class il extends nl{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rp()&&Tp(),this.fallbackToPolling=Yu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,u)=>{this.notifyListeners(a,u)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);_p()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Op):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Dp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}il.type="LOCAL";const Lp=il;/**
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
 */class sl extends nl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sl.type="SESSION";const rl=sl;/**
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
 */function Np(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class $s{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new $s(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,a=this.handlersMap[s];if(!(a==null?void 0:a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const o=Array.from(a).map(async c=>c(t.origin,r)),u=await Np(o);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$s.receivers=[];/**
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
 */function Oo(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class kp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((o,u)=>{const c=Oo("",20);s.port1.start();const l=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(d.data.response);break;default:clearTimeout(l),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function nn(){return window}function Mp(n){nn().location.href=n}/**
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
 */function ol(){return typeof nn().WorkerGlobalScope!="undefined"&&typeof nn().importScripts=="function"}async function Pp(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Up(){return ol()?self:null}/**
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
 */const al="firebaseLocalStorageDb",Vp=1,er="firebaseLocalStorage",ul="fbase_key";class Ki{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tr(n,e){return n.transaction([er],e?"readwrite":"readonly").objectStore(er)}function Bp(){const n=indexedDB.deleteDatabase(al);return new Ki(n).toPromise()}function Lo(){const n=indexedDB.open(al,Vp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(er,{keyPath:ul})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(er)?e(i):(i.close(),await Bp(),e(await Lo()))})})}async function ll(n,e,t){const i=tr(n,!0).put({[ul]:e,value:t});return new Ki(i).toPromise()}async function Hp(n,e){const t=tr(n,!1).get(e),i=await new Ki(t).toPromise();return i===void 0?null:i.value}function cl(n,e){const t=tr(n,!0).delete(e);return new Ki(t).toPromise()}const xp=800,jp=3;class hl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>jp)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ol()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$s._getInstance(Up()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Pp(),!this.activeServiceWorker)return;this.sender=new kp(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lo();return await ll(e,Zs,"1"),await cl(e,Zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ll(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Hp(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>cl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=tr(s,!1).getAll();return new Ki(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hl.type="LOCAL";const zp=hl;/**
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
 */function qp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Gp(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=tn("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",qp().appendChild(i)})}function Wp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new ji(3e4,6e4);/**
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
 */function dl(n,e){return e?ln(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class No extends $u{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,t){return di(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Kp(n){return Cp(n.auth,new No(n),n.bypassAuthState)}function Xp(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),wp(t,new No(n),n.bypassAuthState)}async function Qp(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),bp(t,new No(n),n.bypassAuthState)}/**
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
 */class fl{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:a,type:o}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kp;case"linkViaPopup":case"linkViaRedirect":return Qp;case"reauthViaPopup":case"reauthViaRedirect":return Xp;default:en(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Yp=new ji(2e3,1e4);async function vT(n,e,t){const i=Ro(n);$m(n,e,Do);const s=dl(i,t);return new qn(i,"signInViaPopup",e,s).executeNotNull()}class qn extends fl{constructor(e,t,i,s,r){super(e,t,s,r);this.provider=i,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=Oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Yp.get())};e()}}qn.currentPopupAction=null;/**
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
 */const Jp="pendingRedirect",ko=new Map;class Zp extends fl{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i);this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const i=await $p(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $p(n,e){const t=tg(e),i=eg(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function eg(n){return ln(n._redirectPersistence)}function tg(n){return Qs(Jp,n.config.apiKey,n.name)}async function ng(n,e,t=!1){const i=Ro(n),s=dl(i,e),a=await new Zp(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
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
 */const ig=10*60*1e3;class sg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!pl(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(tn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ig&&this.cachedEventUids.clear(),this.cachedEventUids.has(ml(e))}saveEventToCache(e){this.cachedEventUids.add(ml(e)),this.lastProcessedEventTime=Date.now()}}function ml(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function pl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pl(n);default:return!1}}/**
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
 */async function og(n,e={}){return Ks(n,"GET","/v1/projects",e)}/**
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
 */const ag=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ug=/^https?/;async function lg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await og(n);for(const t of e)try{if(cg(t))return}catch{}en(n,"unauthorized-domain")}function cg(n){const e=_o(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!ug.test(t))return!1;if(ag.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const hg=new ji(3e4,6e4);function gl(){const n=nn().___jsl;if(n==null?void 0:n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function dg(n){return new Promise((e,t)=>{var i,s,r;function a(){gl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gl(),t(tn(n,"network-request-failed"))},timeout:hg.get()})}if((s=(i=nn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=nn().gapi)===null||r===void 0?void 0:r.load)a();else{const o=Wp("iframefcb");return nn()[o]=()=>{gapi.load?a():t(tn(n,"network-request-failed"))},Gp(`https://apis.google.com/js/api.js?onload=${o}`)}}).catch(e=>{throw nr=null,e})}let nr=null;function fg(n){return nr=nr||dg(n),nr}/**
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
 */const mg=new ji(5e3,15e3),pg="__/auth/iframe",gg="emulator/auth/iframe",yg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ig(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?To(e,gg):`https://${n.config.authDomain}/${pg}`,i={apiKey:e.apiKey,appName:n.name,v:xi},s=vg.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Bi(i).slice(1)}`}async function Eg(n){const e=await fg(n),t=nn().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:Ig(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yg,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=tn(n,"network-request-failed"),o=nn().setTimeout(()=>{r(a)},mg.get());function u(){nn().clearTimeout(o),s(i)}i.ping(u).then(u,()=>{r(a)})}))}/**
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
 */const _g={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tg=500,Ag=600,Sg="_blank",bg="http://localhost";class yl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wg(n,e,t,i=Tg,s=Ag){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const u=Object.assign(Object.assign({},_g),{width:i.toString(),height:s.toString(),top:r,left:a}),c=nt().toLowerCase();t&&(o=Gu(c)?Sg:t),qu(c)&&(e=e||bg,u.scrollbars="yes");const l=Object.entries(u).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(Ep(c)&&o!=="_self")return Cg(e||"",o),new yl(null);const h=window.open(e||"",o,l);se(h,n,"popup-blocked");try{h.focus()}catch{}return new yl(h)}function Cg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Rg="__/auth/handler",Dg="emulator/auth/handler";function vl(n,e,t,i,s,r){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:xi,eventId:s};if(e instanceof Do){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",um(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,c]of Object.entries(r||{}))a[u]=c}if(e instanceof Wi){const u=e.getScopes().filter(c=>c!=="");u.length>0&&(a.scopes=u.join(","))}n.tenantId&&(a.tid=n.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];return`${Og(n)}?${Bi(o).slice(1)}`}function Og({config:n}){return n.emulator?To(n,Dg):`https://${n.authDomain}/${Rg}`}/**
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
 */const Mo="webStorageSupport";class Lg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rl,this._completeRedirectFn=ng}async _openPopup(e,t,i,s){var r;un((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=vl(e,t,i,_o(),s);return wg(e,a,Oo())}async _openRedirect(e,t,i,s){return await this._originValidation(e),Mp(vl(e,t,i,_o(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(un(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i}async initAndGetManager(e){const t=await Eg(e),i=new sg(e);return t.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mo,{type:Mo},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Mo];a!==void 0&&t(!!a),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yu()||Co()||Ys()}}const Ng=Lg;var Il="@firebase/auth",El="0.19.3";/**
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
 */class kg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Mg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Pg(n){Hi(new li("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(a=>{se(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),se(!(r==null?void 0:r.includes(":")),"argument-error",{appName:a.name});const o={apiKey:s,authDomain:r,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ju(n)},u=new Ap(a,o);return tp(u,t),u})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Hi(new li("auth-internal",e=>{const t=Ro(e.getProvider("auth").getImmediate());return(i=>new kg(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Il,El,Mg(n)),yn(Il,El,"esm2017")}/**
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
 */function IT(n=Lu()){const e=yo(n,"auth");return e.isInitialized()?e.getImmediate():ep(n,{popupRedirectResolver:Ng,persistence:[zp,Lp,rl]})}Pg("Browser");function ye(n){return Object.entries(n).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function it(n,e,t,i={bubbles:!0},s=!1){if(typeof Event!="undefined"&&n){const r=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:t}));if(n==null||n.dispatchEvent(r),s&&e.startsWith("SMUI")){const a=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:t}));n==null||n.dispatchEvent(a),a.defaultPrevented&&r.preventDefault()}return r}}function _l(n,e){let t=Object.getOwnPropertyNames(n);const i={};for(let s=0;s<t.length;s++){const r=t[s],a=r.indexOf("$");a!==-1&&e.indexOf(r.substring(0,a+1))!==-1||e.indexOf(r)===-1&&(i[r]=n[r])}return i}const Tl=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,Fg=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Be(n){let e,t=[];n.$on=(s,r)=>{let a=s,o=()=>{};return e?o=e(a,r):t.push([a,r]),a.match(Tl)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',a),(...c)=>{o()}};function i(s){Bn(n,s)}return s=>{const r=[],a={};e=(o,u)=>{let c=o,l=u,h=!1;const d=c.match(Tl),f=c.match(Fg),m=d||f;if(c.match(/^SMUI:\w+:/)){const v=c.split(":");let I="";for(let _=0;_<v.length;_++)I+=_===v.length-1?":"+v[_]:v[_].split("-").map(M=>M.slice(0,1).toUpperCase()+M.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${I.split("$")[0]}.`),c=I}if(m){const v=c.split(d?":":"$");c=v[0];const I=Object.fromEntries(v.slice(1).map(_=>[_,!0]));I.passive&&(h=h||{},h.passive=!0),I.nonpassive&&(h=h||{},h.passive=!1),I.capture&&(h=h||{},h.capture=!0),I.once&&(h=h||{},h.once=!0),I.preventDefault&&(l=xf(l)),I.stopPropagation&&(l=jf(l))}const y=$e(s,c,l,h),g=()=>{y();const v=r.indexOf(g);v>-1&&r.splice(v,1)};return r.push(g),c in a||(a[c]=$e(s,c,i)),g};for(let o=0;o<t.length;o++)e(t[o][0],t[o][1]);return{destroy:()=>{for(let o=0;o<r.length;o++)r[o]();for(let o of Object.entries(a))o[1]()}}}}function mi(n,e){let t=Object.getOwnPropertyNames(n);const i={};for(let s=0;s<t.length;s++){const r=t[s];r.substring(0,e.length)===e&&(i[r.substring(e.length)]=n[r])}return i}function mt(n,e){let t=[];if(e)for(let i=0;i<e.length;i++){const s=e[i],r=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?t.push(r(n,s[1])):t.push(r(n))}return{update(i){if((i&&i.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(i)for(let s=0;s<i.length;s++){const r=t[s];if(r&&r.update){const a=i[s];Array.isArray(a)&&a.length>1?r.update(a[1]):r.update()}}},destroy(){for(let i=0;i<t.length;i++){const s=t[i];s&&s.destroy&&s.destroy()}}}}var ir;function Ug(n,e){e===void 0&&(e=!1);var t=n.CSS,i=ir;if(typeof ir=="boolean"&&!e)return ir;var s=t&&typeof t.supports=="function";if(!s)return!1;var r=t.supports("--css-vars","yes"),a=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return i=r||a,e||(ir=i),i}function Vg(n,e,t){if(!n)return{x:0,y:0};var i=e.x,s=e.y,r=i+t.left,a=s+t.top,o,u;if(n.type==="touchstart"){var c=n;o=c.changedTouches[0].pageX-r,u=c.changedTouches[0].pageY-a}else{var l=n;o=l.pageX-r,u=l.pageY-a}return{x:o,y:u}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Gn=function(){function n(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}();/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Bg(n){return n===void 0&&(n=window),Hg(n)?{passive:!0}:!1}function Hg(n){n===void 0&&(n=window);var e=!1;try{var t={get passive(){return e=!0,!1}},i=function(){};n.document.addEventListener("test",i,t),n.document.removeEventListener("test",i,t)}catch{e=!1}return e}var xg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",applyPassive:Bg});/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function jg(n,e){if(n.closest)return n.closest(e);for(var t=n;t;){if(Al(t,e))return t;t=t.parentElement}return null}function Al(n,e){var t=n.matches||n.webkitMatchesSelector||n.msMatchesSelector;return t.call(n,e)}function zg(n){var e=n;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var i=t.scrollWidth;return document.documentElement.removeChild(t),i}var Po=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",closest:jg,matches:Al,estimateScrollWidth:zg});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var qg={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Gg={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Sl={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var bl=["touchstart","pointerdown","mousedown","keydown"],wl=["touchend","pointerup","mouseup","contextmenu"],sr=[],Wg=function(n){vn(e,n);function e(t){var i=n.call(this,at(at({},e.defaultAdapter),t))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(s){i.activateImpl(s)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return qg},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Gg},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Sl},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var s=e.cssClasses,r=s.ROOT,a=s.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(a),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,s=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(s),t.adapter.removeClass(r),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var i,s;if(t){try{for(var r=ci(bl),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var i,s;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=ci(wl),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var t,i;try{for(var s=ci(bl),r=s.next();!r.done;r=s.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(o){t={error:o}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var s=ci(wl),r=s.next();!r.done;r=s.next()){var a=r.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(o){t={error:o}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,i=e.strings,s=Object.keys(i);s.forEach(function(r){r.indexOf("VAR_")===0&&t.adapter.updateCssVariable(i[r],null)})},e.prototype.activateImpl=function(t){var i=this;if(!this.adapter.isSurfaceDisabled()){var s=this.activationState;if(!s.isActivated){var r=this.previousActivationEvent,a=r&&t!==void 0&&r.type!==t.type;if(!a){s.isActivated=!0,s.isProgrammatic=t===void 0,s.activationEvent=t,s.wasActivatedByPointer=s.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var o=t!==void 0&&sr.length>0&&sr.some(function(u){return i.adapter.containsEventTarget(u)});if(o){this.resetActivationState();return}t!==void 0&&(sr.push(t.target),this.registerDeactivationHandlers(t)),s.wasElementMadeActive=this.checkElementMadeActive(t),s.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){sr=[],!s.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(s.wasElementMadeActive=i.checkElementMadeActive(t),s.wasElementMadeActive&&i.animateActivation()),s.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,i=e.strings,s=i.VAR_FG_TRANSLATE_START,r=i.VAR_FG_TRANSLATE_END,a=e.cssClasses,o=a.FG_DEACTIVATION,u=a.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var l="",h="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),f=d.startPoint,m=d.endPoint;l=f.x+"px, "+f.y+"px",h=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(s,l),this.adapter.updateCssVariable(r,h),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(u),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,i=t.activationEvent,s=t.wasActivatedByPointer,r;s?r=Vg(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var a={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:a}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,s=this.activationState,r=s.hasDeactivationUXRun,a=s.isActivated,o=r||!a;o&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(i)},Sl.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,i=this.activationState;if(!!i.isActivated){var s=at({},i);i.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(s)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(s),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var i=t.wasActivatedByPointer,s=t.wasElementMadeActive;(i||s)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),s=function(){var a=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return a+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:s();var r=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,i=t.VAR_FG_SIZE,s=t.VAR_LEFT,r=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(s,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(Gn);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Fo="mdc-dom-focus-sentinel",Kg=function(){function n(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return n.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},n.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+Fo)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},n.prototype.wrapTabFocus=function(e){var t=this,i=this.createSentinel(),s=this.createSentinel();i.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[r.length-1].focus()}),s.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[0].focus()}),e.insertBefore(i,e.children[0]),e.appendChild(s)},n.prototype.focusInitialElement=function(e,t){var i=0;t&&(i=Math.max(e.indexOf(t),0)),e[i].focus()},n.prototype.getFocusableElements=function(e){var t=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(i){var s=i.getAttribute("aria-disabled")==="true"||i.getAttribute("disabled")!=null||i.getAttribute("hidden")!=null||i.getAttribute("aria-hidden")==="true",r=i.tabIndex>=0&&i.getBoundingClientRect().width>0&&!i.classList.contains(Fo)&&!s,a=!1;if(r){var o=getComputedStyle(i);a=o.display==="none"||o.visibility==="hidden"}return r&&!a})},n.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(Fo),e},n}(),Xg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",FocusTrap:Kg});/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var he={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},_t=new Set;_t.add(he.BACKSPACE);_t.add(he.ENTER);_t.add(he.SPACEBAR);_t.add(he.PAGE_UP);_t.add(he.PAGE_DOWN);_t.add(he.END);_t.add(he.HOME);_t.add(he.ARROW_LEFT);_t.add(he.ARROW_UP);_t.add(he.ARROW_RIGHT);_t.add(he.ARROW_DOWN);_t.add(he.DELETE);_t.add(he.ESCAPE);_t.add(he.TAB);var Ot={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},Tt=new Map;Tt.set(Ot.BACKSPACE,he.BACKSPACE);Tt.set(Ot.ENTER,he.ENTER);Tt.set(Ot.SPACEBAR,he.SPACEBAR);Tt.set(Ot.PAGE_UP,he.PAGE_UP);Tt.set(Ot.PAGE_DOWN,he.PAGE_DOWN);Tt.set(Ot.END,he.END);Tt.set(Ot.HOME,he.HOME);Tt.set(Ot.ARROW_LEFT,he.ARROW_LEFT);Tt.set(Ot.ARROW_UP,he.ARROW_UP);Tt.set(Ot.ARROW_RIGHT,he.ARROW_RIGHT);Tt.set(Ot.ARROW_DOWN,he.ARROW_DOWN);Tt.set(Ot.DELETE,he.DELETE);Tt.set(Ot.ESCAPE,he.ESCAPE);Tt.set(Ot.TAB,he.TAB);var Sn=new Set;Sn.add(he.PAGE_UP);Sn.add(he.PAGE_DOWN);Sn.add(he.END);Sn.add(he.HOME);Sn.add(he.ARROW_LEFT);Sn.add(he.ARROW_UP);Sn.add(he.ARROW_RIGHT);Sn.add(he.ARROW_DOWN);function pt(n){var e=n.key;if(_t.has(e))return e;var t=Tt.get(n.keyCode);return t||he.UNKNOWN}const{applyPassive:rr}=xg,{matches:Qg}=Po;function Wn(n,{ripple:e=!0,surface:t=!1,unbounded:i=!1,disabled:s=!1,color:r,active:a,rippleElement:o,eventTarget:u,activeTarget:c,addClass:l=m=>n.classList.add(m),removeClass:h=m=>n.classList.remove(m),addStyle:d=(m,y)=>n.style.setProperty(m,y),initPromise:f=Promise.resolve()}={}){let m,y=ft("SMUI:addLayoutListener"),g,v=a,I=u,_=c;function M(){t&&(l("mdc-ripple-surface"),r==="primary"?(l("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")):r==="secondary"?(h("smui-ripple-surface--primary"),l("smui-ripple-surface--secondary")):(h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary"))),m&&v!==a&&(v=a,a?m.activate():a===!1&&m.deactivate()),e&&!m?(m=new Wg({addClass:l,browserSupportsCssVars:()=>Ug(window),computeBoundingRect:()=>(o||n).getBoundingClientRect(),containsEventTarget:b=>n.contains(b),deregisterDocumentInteractionHandler:(b,N)=>document.documentElement.removeEventListener(b,N,rr()),deregisterInteractionHandler:(b,N)=>(u||n).removeEventListener(b,N,rr()),deregisterResizeHandler:b=>window.removeEventListener("resize",b),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>a==null?Qg(c||n,":active"):a,isSurfaceDisabled:()=>!!s,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(b,N)=>document.documentElement.addEventListener(b,N,rr()),registerInteractionHandler:(b,N)=>(u||n).addEventListener(b,N,rr()),registerResizeHandler:b=>window.addEventListener("resize",b),removeClass:h,updateCssVariable:d}),f.then(()=>{m&&(m.init(),m.setUnbounded(i))})):m&&!e&&f.then(()=>{m&&(m.destroy(),m=void 0)}),m&&(I!==u||_!==c)&&(I=u,_=c,m.destroy(),requestAnimationFrame(()=>{m&&(m.init(),m.setUnbounded(i))})),!e&&i&&l("mdc-ripple-upgraded--unbounded")}M(),y&&(g=y(j));function j(){m&&m.layout()}return{update(b){({ripple:e,surface:t,unbounded:i,disabled:s,color:r,active:a,rippleElement:o,eventTarget:u,activeTarget:c,addClass:l,removeClass:h,addStyle:d,initPromise:f}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:N=>n.classList.add(N),removeClass:N=>n.classList.remove(N),addStyle:(N,T)=>n.style.setProperty(N,T),initPromise:Promise.resolve()},b)),M()},destroy(){m&&(m.destroy(),m=void 0,h("mdc-ripple-surface"),h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")),g&&g()}}}function Yg(n){let e,t,i,s,r;const a=n[7].default,o=Qe(a,n,n[6],null);let u=[{href:n[1]},n[4]],c={};for(let l=0;l<u.length;l+=1)c=V(c,u[l]);return{c(){e=X("a"),o&&o.c(),this.h()},l(l){e=Y(l,"A",{href:!0});var h=$(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){ue(l,e,h),o&&o.m(e,null),n[8](e),i=!0,s||(r=[fe(t=mt.call(null,e,n[0])),fe(n[3].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&64)&&Je(o,a,l,l[6],i?Ye(a,l[6],h,null):Ze(l[6]),null),le(e,c=Re(u,[(!i||h&2)&&{href:l[1]},h&16&&l[4]])),t&&Fe(t.update)&&h&1&&t.update.call(null,l[0])},i(l){i||(Ee(o,l),i=!0)},o(l){_e(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),n[8](null),s=!1,Ce(r)}}}function Jg(n,e,t){const i=["use","href","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e,{href:u="javascript:void(0);"}=e;const c=Be(we());let l;function h(){return l}function d(f){ge[f?"unshift":"push"](()=>{l=f,t(2,l)})}return n.$$set=f=>{e=V(V({},e),Me(f)),t(4,s=oe(e,i)),"use"in f&&t(0,o=f.use),"href"in f&&t(1,u=f.href),"$$scope"in f&&t(6,a=f.$$scope)},[o,u,l,c,s,h,a,r,d]}class Zg extends Ve{constructor(e){super();Ue(this,e,Jg,Yg,ke,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}}function $g(n){let e,t,i,s,r;const a=n[6].default,o=Qe(a,n,n[5],null);let u=[n[3]],c={};for(let l=0;l<u.length;l+=1)c=V(c,u[l]);return{c(){e=X("button"),o&&o.c(),this.h()},l(l){e=Y(l,"BUTTON",{});var h=$(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){ue(l,e,h),o&&o.m(e,null),e.autofocus&&e.focus(),n[7](e),i=!0,s||(r=[fe(t=mt.call(null,e,n[0])),fe(n[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Re(u,[h&8&&l[3]])),t&&Fe(t.update)&&h&1&&t.update.call(null,l[0])},i(l){i||(Ee(o,l),i=!0)},o(l){_e(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),n[7](null),s=!1,Ce(r)}}}function ey(n,e,t){const i=["use","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(we());let c;function l(){return c}function h(d){ge[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=V(V({},e),Me(d)),t(3,s=oe(e,i)),"use"in d&&t(0,o=d.use),"$$scope"in d&&t(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class ty extends Ve{constructor(e){super();Ue(this,e,ey,$g,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function ny(n){let e,t,i,s,r;const a=n[6].default,o=Qe(a,n,n[5],null);let u=[n[3]],c={};for(let l=0;l<u.length;l+=1)c=V(c,u[l]);return{c(){e=X("div"),o&&o.c(),this.h()},l(l){e=Y(l,"DIV",{});var h=$(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){ue(l,e,h),o&&o.m(e,null),n[7](e),i=!0,s||(r=[fe(t=mt.call(null,e,n[0])),fe(n[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Re(u,[h&8&&l[3]])),t&&Fe(t.update)&&h&1&&t.update.call(null,l[0])},i(l){i||(Ee(o,l),i=!0)},o(l){_e(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),n[7](null),s=!1,Ce(r)}}}function iy(n,e,t){const i=["use","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(we());let c;function l(){return c}function h(d){ge[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=V(V({},e),Me(d)),t(3,s=oe(e,i)),"use"in d&&t(0,o=d.use),"$$scope"in d&&t(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class Cl extends Ve{constructor(e){super();Ue(this,e,iy,ny,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function sy(n){let e,t,i,s,r;const a=n[6].default,o=Qe(a,n,n[5],null);let u=[n[3]],c={};for(let l=0;l<u.length;l+=1)c=V(c,u[l]);return{c(){e=X("h1"),o&&o.c(),this.h()},l(l){e=Y(l,"H1",{});var h=$(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){ue(l,e,h),o&&o.m(e,null),n[7](e),i=!0,s||(r=[fe(t=mt.call(null,e,n[0])),fe(n[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Re(u,[h&8&&l[3]])),t&&Fe(t.update)&&h&1&&t.update.call(null,l[0])},i(l){i||(Ee(o,l),i=!0)},o(l){_e(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),n[7](null),s=!1,Ce(r)}}}function ry(n,e,t){const i=["use","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(we());let c;function l(){return c}function h(d){ge[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=V(V({},e),Me(d)),t(3,s=oe(e,i)),"use"in d&&t(0,o=d.use),"$$scope"in d&&t(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class oy extends Ve{constructor(e){super();Ue(this,e,ry,sy,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function ay(n){let e,t,i,s,r;const a=n[6].default,o=Qe(a,n,n[5],null);let u=[n[3]],c={};for(let l=0;l<u.length;l+=1)c=V(c,u[l]);return{c(){e=X("h2"),o&&o.c(),this.h()},l(l){e=Y(l,"H2",{});var h=$(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){ue(l,e,h),o&&o.m(e,null),n[7](e),i=!0,s||(r=[fe(t=mt.call(null,e,n[0])),fe(n[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Re(u,[h&8&&l[3]])),t&&Fe(t.update)&&h&1&&t.update.call(null,l[0])},i(l){i||(Ee(o,l),i=!0)},o(l){_e(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),n[7](null),s=!1,Ce(r)}}}function uy(n,e,t){const i=["use","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(we());let c;function l(){return c}function h(d){ge[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=V(V({},e),Me(d)),t(3,s=oe(e,i)),"use"in d&&t(0,o=d.use),"$$scope"in d&&t(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class ly extends Ve{constructor(e){super();Ue(this,e,uy,ay,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function cy(n){let e,t,i,s,r;const a=n[6].default,o=Qe(a,n,n[5],null);let u=[n[3]],c={};for(let l=0;l<u.length;l+=1)c=V(c,u[l]);return{c(){e=X("h3"),o&&o.c(),this.h()},l(l){e=Y(l,"H3",{});var h=$(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){ue(l,e,h),o&&o.m(e,null),n[7](e),i=!0,s||(r=[fe(t=mt.call(null,e,n[0])),fe(n[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Re(u,[h&8&&l[3]])),t&&Fe(t.update)&&h&1&&t.update.call(null,l[0])},i(l){i||(Ee(o,l),i=!0)},o(l){_e(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),n[7](null),s=!1,Ce(r)}}}function hy(n,e,t){const i=["use","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(we());let c;function l(){return c}function h(d){ge[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=V(V({},e),Me(d)),t(3,s=oe(e,i)),"use"in d&&t(0,o=d.use),"$$scope"in d&&t(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class dy extends Ve{constructor(e){super();Ue(this,e,hy,cy,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function fy(n){let e,t,i,s,r;const a=n[6].default,o=Qe(a,n,n[5],null);let u=[n[3]],c={};for(let l=0;l<u.length;l+=1)c=V(c,u[l]);return{c(){e=X("li"),o&&o.c(),this.h()},l(l){e=Y(l,"LI",{});var h=$(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){ue(l,e,h),o&&o.m(e,null),n[7](e),i=!0,s||(r=[fe(t=mt.call(null,e,n[0])),fe(n[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Re(u,[h&8&&l[3]])),t&&Fe(t.update)&&h&1&&t.update.call(null,l[0])},i(l){i||(Ee(o,l),i=!0)},o(l){_e(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),n[7](null),s=!1,Ce(r)}}}function my(n,e,t){const i=["use","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(we());let c;function l(){return c}function h(d){ge[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=V(V({},e),Me(d)),t(3,s=oe(e,i)),"use"in d&&t(0,o=d.use),"$$scope"in d&&t(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class py extends Ve{constructor(e){super();Ue(this,e,my,fy,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function gy(n){let e,t,i,s,r;const a=n[6].default,o=Qe(a,n,n[5],null);let u=[n[3]],c={};for(let l=0;l<u.length;l+=1)c=V(c,u[l]);return{c(){e=X("nav"),o&&o.c(),this.h()},l(l){e=Y(l,"NAV",{});var h=$(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){ue(l,e,h),o&&o.m(e,null),n[7](e),i=!0,s||(r=[fe(t=mt.call(null,e,n[0])),fe(n[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Re(u,[h&8&&l[3]])),t&&Fe(t.update)&&h&1&&t.update.call(null,l[0])},i(l){i||(Ee(o,l),i=!0)},o(l){_e(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),n[7](null),s=!1,Ce(r)}}}function yy(n,e,t){const i=["use","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(we());let c;function l(){return c}function h(d){ge[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=V(V({},e),Me(d)),t(3,s=oe(e,i)),"use"in d&&t(0,o=d.use),"$$scope"in d&&t(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class vy extends Ve{constructor(e){super();Ue(this,e,yy,gy,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Iy(n){let e,t,i,s,r;const a=n[6].default,o=Qe(a,n,n[5],null);let u=[n[3]],c={};for(let l=0;l<u.length;l+=1)c=V(c,u[l]);return{c(){e=X("span"),o&&o.c(),this.h()},l(l){e=Y(l,"SPAN",{});var h=$(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){ue(l,e,h),o&&o.m(e,null),n[7](e),i=!0,s||(r=[fe(t=mt.call(null,e,n[0])),fe(n[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Re(u,[h&8&&l[3]])),t&&Fe(t.update)&&h&1&&t.update.call(null,l[0])},i(l){i||(Ee(o,l),i=!0)},o(l){_e(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),n[7](null),s=!1,Ce(r)}}}function Ey(n,e,t){const i=["use","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(we());let c;function l(){return c}function h(d){ge[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=V(V({},e),Me(d)),t(3,s=oe(e,i)),"use"in d&&t(0,o=d.use),"$$scope"in d&&t(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class _y extends Ve{constructor(e){super();Ue(this,e,Ey,Iy,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Ty(n){let e,t,i,s,r;const a=n[6].default,o=Qe(a,n,n[5],null);let u=[n[3]],c={};for(let l=0;l<u.length;l+=1)c=V(c,u[l]);return{c(){e=X("ul"),o&&o.c(),this.h()},l(l){e=Y(l,"UL",{});var h=$(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){ue(l,e,h),o&&o.m(e,null),n[7](e),i=!0,s||(r=[fe(t=mt.call(null,e,n[0])),fe(n[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Re(u,[h&8&&l[3]])),t&&Fe(t.update)&&h&1&&t.update.call(null,l[0])},i(l){i||(Ee(o,l),i=!0)},o(l){_e(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),n[7](null),s=!1,Ce(r)}}}function Ay(n,e,t){const i=["use","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(we());let c;function l(){return c}function h(d){ge[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=V(V({},e),Me(d)),t(3,s=oe(e,i)),"use"in d&&t(0,o=d.use),"$$scope"in d&&t(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class Sy extends Ve{constructor(e){super();Ue(this,e,Ay,Ty,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const Rl=Zg,by=ty,bn=Cl,wy=oy,Cy=ly,Ry=dy,Dy=py,Oy=vy,Xi=_y,Ly=Sy;function Dl(n){let e;return{c(){e=X("div"),this.h()},l(t){e=Y(t,"DIV",{class:!0}),$(e).forEach(D),this.h()},h(){Q(e,"class","mdc-button__touch")},m(t,i){ue(t,e,i)},d(t){t&&D(e)}}}function Ny(n){let e,t,i,s;const r=n[26].default,a=Qe(r,n,n[28],null);let o=n[6]&&Dl();return{c(){e=X("div"),t=Rt(),a&&a.c(),o&&o.c(),i=Vt(),this.h()},l(u){e=Y(u,"DIV",{class:!0}),$(e).forEach(D),t=Dt(u),a&&a.l(u),o&&o.l(u),i=Vt(),this.h()},h(){Q(e,"class","mdc-button__ripple")},m(u,c){ue(u,e,c),ue(u,t,c),a&&a.m(u,c),o&&o.m(u,c),ue(u,i,c),s=!0},p(u,c){a&&a.p&&(!s||c&268435456)&&Je(a,r,u,u[28],s?Ye(r,u[28],c,null):Ze(u[28]),null),u[6]?o||(o=Dl(),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},i(u){s||(Ee(a,u),s=!0)},o(u){_e(a,u),s=!1},d(u){u&&D(e),u&&D(t),a&&a.d(u),o&&o.d(u),u&&D(i)}}}function ky(n){let e,t,i;const s=[{use:[[Wn,{ripple:n[3],unbounded:!1,color:n[4],disabled:!!n[22].disabled,addClass:n[18],removeClass:n[19],addStyle:n[20]}],n[16],...n[0]]},{class:ye(Pe({[n[1]]:!0,"mdc-button":!0,"mdc-button--raised":n[5]==="raised","mdc-button--unelevated":n[5]==="unelevated","mdc-button--outlined":n[5]==="outlined","smui-button--color-secondary":n[4]==="secondary","mdc-button--touch":n[6],"mdc-card__action":n[17]==="card:action","mdc-card__action--button":n[17]==="card:action","mdc-dialog__button":n[17]==="dialog:action","mdc-top-app-bar__navigation-icon":n[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":n[17]==="top-app-bar:action","mdc-snackbar__action":n[17]==="snackbar:actions","mdc-banner__secondary-action":n[17]==="banner"&&n[8],"mdc-banner__primary-action":n[17]==="banner"&&!n[8],"mdc-tooltip__action":n[17]==="tooltip:rich-actions"},n[11]))},{style:Object.entries(n[12]).map(Ol).concat([n[2]]).join(" ")},n[15],n[14],n[13],{href:n[7]},n[22]];var r=n[9];function a(o){let u={$$slots:{default:[Ny]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)u=V(u,s[c]);return{props:u}}return r&&(e=new r(a(n)),n[27](e),e.$on("click",n[21])),{c(){e&&on(e.$$.fragment),t=Vt()},l(o){e&&Ui(e.$$.fragment,o),t=Vt()},m(o,u){e&&Jt(e,o,u),ue(o,t,u),i=!0},p(o,[u]){const c=u&6289919?Re(s,[u&6094873&&{use:[[Wn,{ripple:o[3],unbounded:!1,color:o[4],disabled:!!o[22].disabled,addClass:o[18],removeClass:o[19],addStyle:o[20]}],o[16],...o[0]]},u&133490&&{class:ye(Pe({[o[1]]:!0,"mdc-button":!0,"mdc-button--raised":o[5]==="raised","mdc-button--unelevated":o[5]==="unelevated","mdc-button--outlined":o[5]==="outlined","smui-button--color-secondary":o[4]==="secondary","mdc-button--touch":o[6],"mdc-card__action":o[17]==="card:action","mdc-card__action--button":o[17]==="card:action","mdc-dialog__button":o[17]==="dialog:action","mdc-top-app-bar__navigation-icon":o[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":o[17]==="top-app-bar:action","mdc-snackbar__action":o[17]==="snackbar:actions","mdc-banner__secondary-action":o[17]==="banner"&&o[8],"mdc-banner__primary-action":o[17]==="banner"&&!o[8],"mdc-tooltip__action":o[17]==="tooltip:rich-actions"},o[11]))},u&4100&&{style:Object.entries(o[12]).map(Ol).concat([o[2]]).join(" ")},u&32768&&Et(o[15]),u&16384&&Et(o[14]),u&8192&&Et(o[13]),u&128&&{href:o[7]},u&4194304&&Et(o[22])]):{};if(u&268435520&&(c.$$scope={dirty:u,ctx:o}),r!==(r=o[9])){if(e){xs();const l=e;_e(l.$$.fragment,1,0,()=>{Zt(l,1)}),js()}r?(e=new r(a(o)),o[27](e),e.$on("click",o[21]),on(e.$$.fragment),Ee(e.$$.fragment,1),Jt(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(o){i||(e&&Ee(e.$$.fragment,o),i=!0)},o(o){e&&_e(e.$$.fragment,o),i=!1},d(o){n[27](null),o&&D(t),e&&Zt(e,o)}}}const Ol=([n,e])=>`${n}: ${e};`;function My(n,e,t){let i,s,r;const a=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let o=oe(e,a),{$$slots:u={},$$scope:c}=e;const l=Be(we());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{ripple:m=!0}=e,{color:y="primary"}=e,{variant:g="text"}=e,{touch:v=!1}=e,{href:I=void 0}=e,{action:_="close"}=e,{defaultAction:M=!1}=e,{secondary:j=!1}=e,b,N={},T={},A=ft("SMUI:button:context"),{component:k=I==null?by:Rl}=e;tt("SMUI:label:context","button"),tt("SMUI:icon:context","button");function Z(P){N[P]||t(11,N[P]=!0,N)}function ie(P){(!(P in N)||N[P])&&t(11,N[P]=!1,N)}function R(P,L){T[P]!=L&&(L===""||L==null?(delete T[P],t(12,T)):t(12,T[P]=L,T))}function z(){A==="banner"&&it(q(),j?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function q(){return b.getElement()}function U(P){ge[P?"unshift":"push"](()=>{b=P,t(10,b)})}return n.$$set=P=>{t(29,e=V(V({},e),Me(P))),t(22,o=oe(e,a)),"use"in P&&t(0,h=P.use),"class"in P&&t(1,d=P.class),"style"in P&&t(2,f=P.style),"ripple"in P&&t(3,m=P.ripple),"color"in P&&t(4,y=P.color),"variant"in P&&t(5,g=P.variant),"touch"in P&&t(6,v=P.touch),"href"in P&&t(7,I=P.href),"action"in P&&t(23,_=P.action),"defaultAction"in P&&t(24,M=P.defaultAction),"secondary"in P&&t(8,j=P.secondary),"component"in P&&t(9,k=P.component),"$$scope"in P&&t(28,c=P.$$scope)},n.$$.update=()=>{t(15,i=A==="dialog:action"&&_!=null?{"data-mdc-dialog-action":_}:{action:e.action}),t(14,s=A==="dialog:action"&&M?{"data-mdc-dialog-button-default":""}:{default:e.default}),t(13,r=A==="banner"?{}:{secondary:e.secondary})},e=Me(e),[h,d,f,m,y,g,v,I,j,k,b,N,T,r,s,i,l,A,Z,ie,R,z,o,_,M,q,u,U,c]}class ET extends Ve{constructor(e){super();Ue(this,e,My,ky,ke,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}var Py=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},H,Uo=Uo||{},ne=Py||self;function or(){}function Vo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Qi(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Fy(n){return Object.prototype.hasOwnProperty.call(n,Bo)&&n[Bo]||(n[Bo]=++Uy)}var Bo="closure_uid_"+(1e9*Math.random()>>>0),Uy=0;function Vy(n,e,t){return n.call.apply(n.bind,arguments)}function By(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function ut(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=Vy:ut=By,ut.apply(null,arguments)}function ar(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function lt(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(i,s,r){for(var a=Array(arguments.length-2),o=2;o<arguments.length;o++)a[o-2]=arguments[o];return e.prototype[s].apply(i,a)}}function wn(){this.s=this.s,this.o=this.o}var Hy=0,xy={};wn.prototype.s=!1;wn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Hy!=0)){var n=Fy(this);delete xy[n]}};wn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ll=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},Nl=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const i=n.length,s=typeof n=="string"?n.split(""):n;for(let r=0;r<i;r++)r in s&&e.call(t,s[r],r,n)};function jy(n){e:{var e=kv;const t=n.length,i=typeof n=="string"?n.split(""):n;for(let s=0;s<t;s++)if(s in i&&e.call(void 0,i[s],s,n)){e=s;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function kl(n){return Array.prototype.concat.apply([],arguments)}function Ho(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function ur(n){return/^[\s\xa0]*$/.test(n)}var Ml=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function At(n,e){return n.indexOf(e)!=-1}function xo(n,e){return n<e?-1:n>e?1:0}var St;e:{var Pl=ne.navigator;if(Pl){var Fl=Pl.userAgent;if(Fl){St=Fl;break e}}St=""}function jo(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function Ul(n){const e={};for(const t in n)e[t]=n[t];return e}var Vl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bl(n,e){let t,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(t in i)n[t]=i[t];for(let r=0;r<Vl.length;r++)t=Vl[r],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function zo(n){return zo[" "](n),n}zo[" "]=or;function zy(n){var e=Wy;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var qy=At(St,"Opera"),pi=At(St,"Trident")||At(St,"MSIE"),Hl=At(St,"Edge"),qo=Hl||pi,xl=At(St,"Gecko")&&!(At(St.toLowerCase(),"webkit")&&!At(St,"Edge"))&&!(At(St,"Trident")||At(St,"MSIE"))&&!At(St,"Edge"),Gy=At(St.toLowerCase(),"webkit")&&!At(St,"Edge");function jl(){var n=ne.document;return n?n.documentMode:void 0}var lr;e:{var Go="",Wo=function(){var n=St;if(xl)return/rv:([^\);]+)(\)|;)/.exec(n);if(Hl)return/Edge\/([\d\.]+)/.exec(n);if(pi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Gy)return/WebKit\/(\S+)/.exec(n);if(qy)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Wo&&(Go=Wo?Wo[1]:""),pi){var Ko=jl();if(Ko!=null&&Ko>parseFloat(Go)){lr=String(Ko);break e}}lr=Go}var Wy={};function Ky(){return zy(function(){let n=0;const e=Ml(String(lr)).split("."),t=Ml("9").split("."),i=Math.max(e.length,t.length);for(let a=0;n==0&&a<i;a++){var s=e[a]||"",r=t[a]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;n=xo(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||xo(s[2].length==0,r[2].length==0)||xo(s[2],r[2]),s=s[3],r=r[3]}while(n==0)}return 0<=n})}var Xo;if(ne.document&&pi){var zl=jl();Xo=zl||parseInt(lr,10)||void 0}else Xo=void 0;var Xy=Xo,Qy=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{ne.addEventListener("test",or,e),ne.removeEventListener("test",or,e)}catch{}return n}();function gt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};function Yi(n,e){if(gt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(xl){e:{try{zo(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Yy[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Yi.Z.h.call(this)}}lt(Yi,gt);var Yy={2:"touch",3:"pen",4:"mouse"};Yi.prototype.h=function(){Yi.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ji="closure_listenable_"+(1e6*Math.random()|0),Jy=0;function Zy(n,e,t,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.ia=s,this.key=++Jy,this.ca=this.fa=!1}function cr(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function hr(n){this.src=n,this.g={},this.h=0}hr.prototype.add=function(n,e,t,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var a=Yo(n,e,i,s);return-1<a?(e=n[a],t||(e.fa=!1)):(e=new Zy(e,this.src,r,!!i,s),e.fa=t,n.push(e)),e};function Qo(n,e){var t=e.type;if(t in n.g){var i=n.g[t],s=Ll(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(cr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Yo(n,e,t,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.ca&&r.listener==e&&r.capture==!!t&&r.ia==i)return s}return-1}var Jo="closure_lm_"+(1e6*Math.random()|0),Zo={};function ql(n,e,t,i,s){if(i&&i.once)return Wl(n,e,t,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ql(n,e[r],t,i,s);return null}return t=na(t),n&&n[Ji]?n.N(e,t,Qi(i)?!!i.capture:!!i,s):Gl(n,e,t,!1,i,s)}function Gl(n,e,t,i,s,r){if(!e)throw Error("Invalid event type");var a=Qi(s)?!!s.capture:!!s,o=ea(n);if(o||(n[Jo]=o=new hr(n)),t=o.add(e,t,i,a,r),t.proxy)return t;if(i=$y(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)Qy||(s=a),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(Xl(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function $y(){function n(t){return e.call(n.src,n.listener,t)}var e=ev;return n}function Wl(n,e,t,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Wl(n,e[r],t,i,s);return null}return t=na(t),n&&n[Ji]?n.O(e,t,Qi(i)?!!i.capture:!!i,s):Gl(n,e,t,!0,i,s)}function Kl(n,e,t,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Kl(n,e[r],t,i,s);else i=Qi(i)?!!i.capture:!!i,t=na(t),n&&n[Ji]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Yo(r,t,i,s),-1<t&&(cr(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=ea(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Yo(e,t,i,s)),(t=-1<n?e[n]:null)&&$o(t))}function $o(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[Ji])Qo(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(Xl(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=ea(e))?(Qo(t,n),t.h==0&&(t.src=null,e[Jo]=null)):cr(n)}}}function Xl(n){return n in Zo?Zo[n]:Zo[n]="on"+n}function ev(n,e){if(n.ca)n=!0;else{e=new Yi(e,this);var t=n.listener,i=n.ia||n.src;n.fa&&$o(n),n=t.call(i,e)}return n}function ea(n){return n=n[Jo],n instanceof hr?n:null}var ta="__closure_events_fn_"+(1e9*Math.random()>>>0);function na(n){return typeof n=="function"?n:(n[ta]||(n[ta]=function(e){return n.handleEvent(e)}),n[ta])}function st(){wn.call(this),this.i=new hr(this),this.P=this,this.I=null}lt(st,wn);st.prototype[Ji]=!0;st.prototype.removeEventListener=function(n,e,t,i){Kl(this,n,e,t,i)};function ct(n,e){var t,i=n.I;if(i)for(t=[];i;i=i.I)t.push(i);if(n=n.P,i=e.type||e,typeof e=="string")e=new gt(e,n);else if(e instanceof gt)e.target=e.target||n;else{var s=e;e=new gt(i,n),Bl(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var a=e.g=t[r];s=dr(a,i,!0,e)&&s}if(a=e.g=n,s=dr(a,i,!0,e)&&s,s=dr(a,i,!1,e)&&s,t)for(r=0;r<t.length;r++)a=e.g=t[r],s=dr(a,i,!1,e)&&s}st.prototype.M=function(){if(st.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)cr(t[i]);delete n.g[e],n.h--}}this.I=null};st.prototype.N=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};st.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function dr(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var a=e[r];if(a&&!a.ca&&a.capture==t){var o=a.listener,u=a.ia||a.src;a.fa&&Qo(n.i,a),s=o.call(u,i)!==!1&&s}}return s&&!i.defaultPrevented}var ia=ne.JSON.stringify;function tv(){var n=Yl;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class nv{constructor(){this.h=this.g=null}add(e,t){const i=Ql.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var Ql=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new iv,n=>n.reset());class iv{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function sv(n){ne.setTimeout(()=>{throw n},0)}function sa(n,e){ra||rv(),oa||(ra(),oa=!0),Yl.add(n,e)}var ra;function rv(){var n=ne.Promise.resolve(void 0);ra=function(){n.then(ov)}}var oa=!1,Yl=new nv;function ov(){for(var n;n=tv();){try{n.h.call(n.g)}catch(t){sv(t)}var e=Ql;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}oa=!1}function fr(n,e){st.call(this),this.h=n||1,this.g=e||ne,this.j=ut(this.kb,this),this.l=Date.now()}lt(fr,st);H=fr.prototype;H.da=!1;H.S=null;H.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ct(this,"tick"),this.da&&(aa(this),this.start()))}};H.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function aa(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}H.M=function(){fr.Z.M.call(this),aa(this),delete this.g};function ua(n,e,t){if(typeof n=="function")t&&(n=ut(n,t));else if(n&&typeof n.handleEvent=="function")n=ut(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(n,e||0)}function Jl(n){n.g=ua(()=>{n.g=null,n.i&&(n.i=!1,Jl(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class av extends wn{constructor(e,t){super();this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jl(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(n){wn.call(this),this.h=n,this.g={}}lt(Zi,wn);var Zl=[];function $l(n,e,t,i){Array.isArray(t)||(t&&(Zl[0]=t.toString()),t=Zl);for(var s=0;s<t.length;s++){var r=ql(e,t[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function ec(n){jo(n.g,function(e,t){this.g.hasOwnProperty(t)&&$o(e)},n),n.g={}}Zi.prototype.M=function(){Zi.Z.M.call(this),ec(this)};Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mr(){this.g=!0}mr.prototype.Aa=function(){this.g=!1};function uv(n,e,t,i,s,r){n.info(function(){if(n.g)if(r)for(var a="",o=r.split("&"),u=0;u<o.length;u++){var c=o[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");a=2<=h.length&&h[1]=="type"?a+(l+"="+c+"&"):a+(l+"=redacted&")}}else a=null;else a=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+t+`
`+a})}function lv(n,e,t,i,s,r,a){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+a})}function gi(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+hv(n,t)+(i?" "+i:"")})}function cv(n,e){n.info(function(){return"TIMEOUT: "+e})}mr.prototype.info=function(){};function hv(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var a=1;a<s.length;a++)s[a]=""}}}}return ia(t)}catch{return e}}var Kn={},tc=null;function pr(){return tc=tc||new st}Kn.Ma="serverreachability";function nc(n){gt.call(this,Kn.Ma,n)}lt(nc,gt);function $i(n){const e=pr();ct(e,new nc(e,n))}Kn.STAT_EVENT="statevent";function ic(n,e){gt.call(this,Kn.STAT_EVENT,n),this.stat=e}lt(ic,gt);function bt(n){const e=pr();ct(e,new ic(e,n))}Kn.Na="timingevent";function sc(n,e){gt.call(this,Kn.Na,n),this.size=e}lt(sc,gt);function es(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){n()},e)}var gr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},rc={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function la(){}la.prototype.h=null;function oc(n){return n.h||(n.h=n.i())}function ac(){}var ts={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ca(){gt.call(this,"d")}lt(ca,gt);function ha(){gt.call(this,"c")}lt(ha,gt);var da;function yr(){}lt(yr,la);yr.prototype.g=function(){return new XMLHttpRequest};yr.prototype.i=function(){return{}};da=new yr;function ns(n,e,t,i){this.l=n,this.j=e,this.m=t,this.X=i||1,this.V=new Zi(this),this.P=dv,n=qo?125:void 0,this.W=new fr(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new uc}function uc(){this.i=null,this.g="",this.h=!1}var dv=45e3,fa={},vr={};H=ns.prototype;H.setTimeout=function(n){this.P=n};function ma(n,e,t){n.K=1,n.v=Ar(cn(e)),n.s=t,n.U=!0,lc(n,null)}function lc(n,e){n.F=Date.now(),is(n),n.A=cn(n.v);var t=n.A,i=n.X;Array.isArray(i)||(i=[String(i)]),vc(t.h,"t",i),n.C=0,t=n.l.H,n.h=new uc,n.g=xc(n.l,t?e:null,!n.s),0<n.O&&(n.L=new av(ut(n.Ia,n,n.g),n.O)),$l(n.V,n.g,"readystatechange",n.gb),e=n.H?Ul(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),$i(1),uv(n.j,n.u,n.A,n.m,n.X,n.s)}H.gb=function(n){n=n.target;const e=this.L;e&&hn(n)==3?e.l():this.Ia(n)};H.Ia=function(n){try{if(n==this.g)e:{const l=hn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||qo||this.g&&(this.h.h||this.g.ga()||Oc(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?$i(3):$i(2)),Ir(this);var t=this.g.ba();this.N=t;t:if(cc(this)){var i=Oc(this.g);n="";var s=i.length,r=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Xn(this),ss(this);var a="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=n,this.C=0,a=this.h.g}else a=this.g.ga();if(this.i=t==200,lv(this.j,this.u,this.A,this.m,this.X,l,t),this.i){if(this.$&&!this.J){t:{if(this.g){var o,u=this.g;if((o=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ur(o)){var c=o;break t}}c=null}if(t=c)gi(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,pa(this,t);else{this.i=!1,this.o=3,bt(12),Xn(this),ss(this);break e}}this.U?(hc(this,l,a),qo&&this.i&&l==3&&($l(this.V,this.W,"tick",this.fb),this.W.start())):(gi(this.j,this.m,a,null),pa(this,a)),l==4&&Xn(this),this.i&&!this.I&&(l==4?Uc(this.l,this):(this.i=!1,is(this)))}else t==400&&0<a.indexOf("Unknown SID")?(this.o=3,bt(12)):(this.o=0,bt(13)),Xn(this),ss(this)}}}catch{}finally{}};function cc(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function hc(n,e,t){let i=!0,s;for(;!n.I&&n.C<t.length;)if(s=fv(n,t),s==vr){e==4&&(n.o=4,bt(14),i=!1),gi(n.j,n.m,null,"[Incomplete Response]");break}else if(s==fa){n.o=4,bt(15),gi(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else gi(n.j,n.m,s,null),pa(n,s);cc(n)&&s!=vr&&s!=fa&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,bt(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),wa(e),e.L=!0,bt(11))):(gi(n.j,n.m,t,"[Invalid Chunked Response]"),Xn(n),ss(n))}H.fb=function(){if(this.g){var n=hn(this.g),e=this.g.ga();this.C<e.length&&(Ir(this),hc(this,n,e),this.i&&n!=4&&is(this))}};function fv(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?vr:(t=Number(e.substring(t,i)),isNaN(t)?fa:(i+=1,i+t>e.length?vr:(e=e.substr(i,t),n.C=i+t,e)))}H.cancel=function(){this.I=!0,Xn(this)};function is(n){n.Y=Date.now()+n.P,dc(n,n.P)}function dc(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=es(ut(n.eb,n),e)}function Ir(n){n.B&&(ne.clearTimeout(n.B),n.B=null)}H.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(cv(this.j,this.A),this.K!=2&&($i(3),bt(17)),Xn(this),this.o=2,ss(this)):dc(this,this.Y-n)};function ss(n){n.l.G==0||n.I||Uc(n.l,n)}function Xn(n){Ir(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,aa(n.W),ec(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function pa(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||va(t.i,n))){if(t.I=n.N,!n.J&&va(t.i,n)&&t.G==3){try{var i=t.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Dr(t),Cr(t);else break e;ba(t),bt(18)}else t.ta=s[1],0<t.ta-t.U&&37500>s[2]&&t.N&&t.A==0&&!t.v&&(t.v=es(ut(t.ab,t),6e3));if(1>=_c(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else Jn(t,11)}else if((n.J||t.g==n)&&Dr(t),!ur(e))for(s=t.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(t.U=c[0],c=c[1],t.G==2)if(c[0]=="c"){t.J=c[1],t.la=c[2];const l=c[3];l!=null&&(t.ma=l,t.h.info("VER="+t.ma));const h=c[4];h!=null&&(t.za=h,t.h.info("SVER="+t.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.K=i,t.h.info("backChannelRequestTimeoutMs_="+i)),i=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;!r.g&&(At(m,"spdy")||At(m,"quic")||At(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ia(r,r.h),r.h=null))}if(i.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.sa=y,De(i.F,i.D,y))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),i=t;var a=n;if(i.oa=Hc(i,i.H?i.la:null,i.W),a.J){Tc(i.i,a);var o=a,u=i.K;u&&o.setTimeout(u),o.B&&(Ir(o),is(o)),i.g=a}else Pc(i);0<t.l.length&&Rr(t)}else c[0]!="stop"&&c[0]!="close"||Jn(t,7);else t.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Jn(t,7):Aa(t):c[0]!="noop"&&t.j&&t.j.wa(c),t.A=0)}}$i(4)}catch{}}function mv(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(Vo(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function ga(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Vo(n)||typeof n=="string")Nl(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(Vo(n)||typeof n=="string"){t=[];for(var i=n.length,s=0;s<i;s++)t.push(s)}else for(s in t=[],i=0,n)t[i++]=s;i=mv(n),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],t&&t[r],n)}}function yi(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var i=0;i<t;i+=2)this.set(arguments[i],arguments[i+1])}else if(n)if(n instanceof yi)for(t=n.T(),i=0;i<t.length;i++)this.set(t[i],n.get(t[i]));else for(i in n)this.set(i,n[i])}H=yi.prototype;H.R=function(){ya(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};H.T=function(){return ya(this),this.g.concat()};function ya(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var i=n.g[e];Qn(n.h,i)&&(n.g[t++]=i),e++}n.g.length=t}if(n.i!=n.g.length){var s={};for(t=e=0;e<n.g.length;)i=n.g[e],Qn(s,i)||(n.g[t++]=i,s[i]=1),e++;n.g.length=t}}H.get=function(n,e){return Qn(this.h,n)?this.h[n]:e};H.set=function(n,e){Qn(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};H.forEach=function(n,e){for(var t=this.T(),i=0;i<t.length;i++){var s=t[i],r=this.get(s);n.call(e,r,s,this)}};function Qn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var fc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function pv(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),s=null;if(0<=i){var r=n[t].substring(0,i);s=n[t].substring(i+1)}else r=n[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Yn(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof Yn){this.g=e!==void 0?e:n.g,Er(this,n.j),this.s=n.s,_r(this,n.i),Tr(this,n.m),this.l=n.l,e=n.h;var t=new as;t.i=e.i,e.g&&(t.g=new yi(e.g),t.h=e.h),mc(this,t),this.o=n.o}else n&&(t=String(n).match(fc))?(this.g=!!e,Er(this,t[1]||"",!0),this.s=rs(t[2]||""),_r(this,t[3]||"",!0),Tr(this,t[4]),this.l=rs(t[5]||"",!0),mc(this,t[6]||"",!0),this.o=rs(t[7]||"")):(this.g=!!e,this.h=new as(null,this.g))}Yn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(os(e,pc,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(os(e,pc,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(os(t,t.charAt(0)=="/"?Ev:Iv,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",os(t,Tv)),n.join("")};function cn(n){return new Yn(n)}function Er(n,e,t){n.j=t?rs(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function _r(n,e,t){n.i=t?rs(e,!0):e}function Tr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function mc(n,e,t){e instanceof as?(n.h=e,Av(n.h,n.g)):(t||(e=os(e,_v)),n.h=new as(e,n.g))}function De(n,e,t){n.h.set(e,t)}function Ar(n){return De(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function gv(n){return n instanceof Yn?cn(n):new Yn(n,void 0)}function yv(n,e,t,i){var s=new Yn(null,void 0);return n&&Er(s,n),e&&_r(s,e),t&&Tr(s,t),i&&(s.l=i),s}function rs(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function os(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,vv),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function vv(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var pc=/[#\/\?@]/g,Iv=/[#\?:]/g,Ev=/[#\?]/g,_v=/[#\?@]/g,Tv=/#/g;function as(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Cn(n){n.g||(n.g=new yi,n.h=0,n.i&&pv(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}H=as.prototype;H.add=function(n,e){Cn(this),this.i=null,n=vi(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function gc(n,e){Cn(n),e=vi(n,e),Qn(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,Qn(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&ya(n)))}function yc(n,e){return Cn(n),e=vi(n,e),Qn(n.g.h,e)}H.forEach=function(n,e){Cn(this),this.g.forEach(function(t,i){Nl(t,function(s){n.call(e,s,i,this)},this)},this)};H.T=function(){Cn(this);for(var n=this.g.R(),e=this.g.T(),t=[],i=0;i<e.length;i++)for(var s=n[i],r=0;r<s.length;r++)t.push(e[i]);return t};H.R=function(n){Cn(this);var e=[];if(typeof n=="string")yc(this,n)&&(e=kl(e,this.g.get(vi(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=kl(e,n[t])}return e};H.set=function(n,e){return Cn(this),this.i=null,n=vi(this,n),yc(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};H.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function vc(n,e,t){gc(n,e),0<t.length&&(n.i=null,n.g.set(vi(n,e),Ho(t)),n.h+=t.length)}H.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var i=e[t],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var a=s;i[r]!==""&&(a+="="+encodeURIComponent(String(i[r]))),n.push(a)}}return this.i=n.join("&")};function vi(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Av(n,e){e&&!n.j&&(Cn(n),n.i=null,n.g.forEach(function(t,i){var s=i.toLowerCase();i!=s&&(gc(this,i),vc(this,s,t))},n)),n.j=e}var Sv=class{constructor(n,e){this.h=n,this.g=e}};function Ic(n){this.l=n||bv,ne.PerformanceNavigationTiming?(n=ne.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(ne.g&&ne.g.Ea&&ne.g.Ea()&&ne.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bv=10;function Ec(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function _c(n){return n.h?1:n.g?n.g.size:0}function va(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Ia(n,e){n.g?n.g.add(e):n.h=e}function Tc(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Ic.prototype.cancel=function(){if(this.i=Ac(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Ac(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Ho(n.i)}function Ea(){}Ea.prototype.stringify=function(n){return ne.JSON.stringify(n,void 0)};Ea.prototype.parse=function(n){return ne.JSON.parse(n,void 0)};function wv(){this.g=new Ea}function Cv(n,e,t){const i=t||"";try{ga(n,function(s,r){let a=s;Qi(s)&&(a=ia(s)),e.push(i+r+"="+encodeURIComponent(a))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Rv(n,e){const t=new mr;if(ne.Image){const i=new Image;i.onload=ar(Sr,t,i,"TestLoadImage: loaded",!0,e),i.onerror=ar(Sr,t,i,"TestLoadImage: error",!1,e),i.onabort=ar(Sr,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=ar(Sr,t,i,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function Sr(n,e,t,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function us(n){this.l=n.$b||null,this.j=n.ib||!1}lt(us,la);us.prototype.g=function(){return new br(this.l,this.j)};us.prototype.i=function(n){return function(){return n}}({});function br(n,e){st.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=_a,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(br,st);var _a=0;H=br.prototype;H.open=function(n,e){if(this.readyState!=_a)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,cs(this)};H.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||ne).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};H.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=_a};H.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,cs(this)),this.g&&(this.readyState=3,cs(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof ne.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sc(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function Sc(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}H.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ls(this):cs(this),this.readyState==3&&Sc(this)}};H.Ua=function(n){this.g&&(this.response=this.responseText=n,ls(this))};H.Ta=function(n){this.g&&(this.response=n,ls(this))};H.ha=function(){this.g&&ls(this)};function ls(n){n.readyState=4,n.l=null,n.j=null,n.A=null,cs(n)}H.setRequestHeader=function(n,e){this.v.append(n,e)};H.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};H.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function cs(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Dv=ne.JSON.parse;function je(n){st.call(this),this.headers=new yi,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=bc,this.K=this.L=!1}lt(je,st);var bc="",Ov=/^https?$/i,Lv=["POST","PUT"];H=je.prototype;H.ea=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():da.g(),this.C=this.u?oc(this.u):oc(da),this.g.onreadystatechange=ut(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){wc(this,r);return}n=t||"";const s=new yi(this.headers);i&&ga(i,function(r,a){s.set(a,r)}),i=jy(s.T()),t=ne.FormData&&n instanceof ne.FormData,!(0<=Ll(Lv,e))||i||t||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,a){this.g.setRequestHeader(a,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Dc(this),0<this.B&&((this.K=Nv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.pa,this)):this.A=ua(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){wc(this,r)}};function Nv(n){return pi&&Ky()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function kv(n){return n.toLowerCase()=="content-type"}H.pa=function(){typeof Uo!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function wc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Cc(n),wr(n)}function Cc(n){n.D||(n.D=!0,ct(n,"complete"),ct(n,"error"))}H.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ct(this,"complete"),ct(this,"abort"),wr(this))};H.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wr(this,!0)),je.Z.M.call(this)};H.Fa=function(){this.s||(this.F||this.v||this.l?Rc(this):this.cb())};H.cb=function(){Rc(this)};function Rc(n){if(n.h&&typeof Uo!="undefined"&&(!n.C[1]||hn(n)!=4||n.ba()!=2)){if(n.v&&hn(n)==4)ua(n.Fa,0,n);else if(ct(n,"readystatechange"),hn(n)==4){n.h=!1;try{const o=n.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=o===0){var s=String(n.H).match(fc)[1]||null;if(!s&&ne.self&&ne.self.location){var r=ne.self.location.protocol;s=r.substr(0,r.length-1)}i=!Ov.test(s?s.toLowerCase():"")}t=i}if(t)ct(n,"complete"),ct(n,"success");else{n.m=6;try{var a=2<hn(n)?n.g.statusText:""}catch{a=""}n.j=a+" ["+n.ba()+"]",Cc(n)}}finally{wr(n)}}}}function wr(n,e){if(n.g){Dc(n);const t=n.g,i=n.C[0]?or:null;n.g=null,n.C=null,e||ct(n,"ready");try{t.onreadystatechange=i}catch{}}}function Dc(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(ne.clearTimeout(n.A),n.A=null)}function hn(n){return n.g?n.g.readyState:0}H.ba=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}};H.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};H.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Dv(e)}};function Oc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case bc:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}H.Da=function(){return this.m};H.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Mv(n){let e="";return jo(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function Ta(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=Mv(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):De(n,e,t))}function hs(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Lc(n){this.za=0,this.l=[],this.h=new mr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=hs("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=hs("baseRetryDelayMs",5e3,n),this.$a=hs("retryDelaySeedMs",1e4,n),this.Ya=hs("forwardChannelMaxRetries",2,n),this.ra=hs("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new Ic(n&&n.concurrentRequestLimit),this.Ca=new wv,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}H=Lc.prototype;H.ma=8;H.G=1;function Aa(n){if(Nc(n),n.G==3){var e=n.V++,t=cn(n.F);De(t,"SID",n.J),De(t,"RID",e),De(t,"TYPE","terminate"),ds(n,t),e=new ns(n,n.h,e,void 0),e.K=2,e.v=Ar(cn(t)),t=!1,ne.navigator&&ne.navigator.sendBeacon&&(t=ne.navigator.sendBeacon(e.v.toString(),"")),!t&&ne.Image&&(new Image().src=e.v,t=!0),t||(e.g=xc(e.l,null),e.g.ea(e.v)),e.F=Date.now(),is(e)}Bc(n)}H.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function Cr(n){n.g&&(wa(n),n.g.cancel(),n.g=null)}function Nc(n){Cr(n),n.u&&(ne.clearTimeout(n.u),n.u=null),Dr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&ne.clearTimeout(n.m),n.m=null)}function Sa(n,e){n.l.push(new Sv(n.Za++,e)),n.G==3&&Rr(n)}function Rr(n){Ec(n.i)||n.m||(n.m=!0,sa(n.Ha,n),n.C=0)}function Pv(n,e){return _c(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=es(ut(n.Ha,n,e),Vc(n,n.C)),n.C++,!0)}H.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const s=new ns(this,this.h,n,void 0);let r=this.s;if(this.P&&(r?(r=Ul(r),Bl(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var i=this.l[t];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Mc(this,s,e),t=cn(this.F),De(t,"RID",n),De(t,"CVER",22),this.D&&De(t,"X-HTTP-Session-Id",this.D),ds(this,t),this.o&&r&&Ta(t,this.o,r),Ia(this.i,s),this.Ra&&De(t,"TYPE","init"),this.ja?(De(t,"$req",e),De(t,"SID","null"),s.$=!0,ma(s,t,null)):ma(s,t,e),this.G=2}}else this.G==3&&(n?kc(this,n):this.l.length==0||Ec(this.i)||kc(this))};function kc(n,e){var t;e?t=e.m:t=n.V++;const i=cn(n.F);De(i,"SID",n.J),De(i,"RID",t),De(i,"AID",n.U),ds(n,i),n.o&&n.s&&Ta(i,n.o,n.s),t=new ns(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=Mc(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),Ia(n.i,t),ma(t,i,e)}function ds(n,e){n.j&&ga({},function(t,i){De(e,i,t)})}function Mc(n,e,t){t=Math.min(n.l.length,t);var i=n.j?ut(n.j.Oa,n.j,n):null;e:{var s=n.l;let r=-1;for(;;){const a=["count="+t];r==-1?0<t?(r=s[0].h,a.push("ofs="+r)):r=0:a.push("ofs="+r);let o=!0;for(let u=0;u<t;u++){let c=s[u].h;const l=s[u].g;if(c-=r,0>c)r=Math.max(0,s[u].h-100),o=!1;else try{Cv(l,a,"req"+c+"_")}catch{i&&i(l)}}if(o){i=a.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,i}function Pc(n){n.g||n.u||(n.Y=1,sa(n.Ga,n),n.A=0)}function ba(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=es(ut(n.Ga,n),Vc(n,n.A)),n.A++,!0)}H.Ga=function(){if(this.u=null,Fc(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=es(ut(this.bb,this),n)}};H.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,bt(10),Cr(this),Fc(this))};function wa(n){n.B!=null&&(ne.clearTimeout(n.B),n.B=null)}function Fc(n){n.g=new ns(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=cn(n.oa);De(e,"RID","rpc"),De(e,"SID",n.J),De(e,"CI",n.N?"0":"1"),De(e,"AID",n.U),ds(n,e),De(e,"TYPE","xmlhttp"),n.o&&n.s&&Ta(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=Ar(cn(e)),t.s=null,t.U=!0,lc(t,n)}H.ab=function(){this.v!=null&&(this.v=null,Cr(this),ba(this),bt(19))};function Dr(n){n.v!=null&&(ne.clearTimeout(n.v),n.v=null)}function Uc(n,e){var t=null;if(n.g==e){Dr(n),wa(n),n.g=null;var i=2}else if(va(n.i,e))t=e.D,Tc(n.i,e),i=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;i=pr(),ct(i,new sc(i,t,e,s)),Rr(n)}else Pc(n);else if(s=e.o,s==3||s==0&&0<n.I||!(i==1&&Pv(n,e)||i==2&&ba(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:Jn(n,5);break;case 4:Jn(n,10);break;case 3:Jn(n,6);break;default:Jn(n,2)}}}function Vc(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function Jn(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var i=ut(n.jb,n);t||(t=new Yn("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||Er(t,"https"),Ar(t)),Rv(t.toString(),i)}else bt(2);n.G=0,n.j&&n.j.va(e),Bc(n),Nc(n)}H.jb=function(n){n?(this.h.info("Successfully pinged google.com"),bt(2)):(this.h.info("Failed to ping google.com"),bt(1))};function Bc(n){n.G=0,n.I=-1,n.j&&((Ac(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,Ho(n.l),n.l.length=0),n.j.ua())}function Hc(n,e,t){let i=gv(t);if(i.i!="")e&&_r(i,e+"."+i.i),Tr(i,i.m);else{const s=ne.location;i=yv(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,t)}return n.aa&&jo(n.aa,function(s,r){De(i,r,s)}),e=n.D,t=n.sa,e&&t&&De(i,e,t),De(i,"VER",n.ma),ds(n,i),i}function xc(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new je(new us({ib:!0})):new je(n.qa),e.L=n.H,e}function jc(){}H=jc.prototype;H.xa=function(){};H.wa=function(){};H.va=function(){};H.ua=function(){};H.Oa=function(){};function Or(){if(pi&&!(10<=Number(Xy)))throw Error("Environmental error: no available transport.")}Or.prototype.g=function(n,e){return new Mt(n,e)};function Mt(n,e){st.call(this),this.g=new Lc(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!ur(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ur(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Ii(this)}lt(Mt,st);Mt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),sa(ut(n.hb,n,e))),bt(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=Hc(n,null,n.W),Rr(n)};Mt.prototype.close=function(){Aa(this.g)};Mt.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,Sa(this.g,e)}else this.v?(e={},e.__data__=ia(n),Sa(this.g,e)):Sa(this.g,n)};Mt.prototype.M=function(){this.g.j=null,delete this.j,Aa(this.g),delete this.g,Mt.Z.M.call(this)};function zc(n){ca.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}lt(zc,ca);function qc(){ha.call(this),this.status=1}lt(qc,ha);function Ii(n){this.g=n}lt(Ii,jc);Ii.prototype.xa=function(){ct(this.g,"a")};Ii.prototype.wa=function(n){ct(this.g,new zc(n))};Ii.prototype.va=function(n){ct(this.g,new qc(n))};Ii.prototype.ua=function(){ct(this.g,"b")};Or.prototype.createWebChannel=Or.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;gr.NO_ERROR=0;gr.TIMEOUT=8;gr.HTTP_ERROR=6;rc.COMPLETE="complete";ac.EventType=ts;ts.OPEN="a";ts.CLOSE="b";ts.ERROR="c";ts.MESSAGE="d";st.prototype.listen=st.prototype.N;je.prototype.listenOnce=je.prototype.O;je.prototype.getLastError=je.prototype.La;je.prototype.getLastErrorCode=je.prototype.Da;je.prototype.getStatus=je.prototype.ba;je.prototype.getResponseJson=je.prototype.Qa;je.prototype.getResponseText=je.prototype.ga;je.prototype.send=je.prototype.ea;var Fv=function(){return new Or},Uv=function(){return pr()},Ca=gr,Vv=rc,Bv=Kn,Gc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Hv=us,Lr=ac,xv=je;const Wc="@firebase/firestore";/**
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
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let Ei="9.5.0";/**
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
 */const Zn=new fo("@firebase/firestore");function Kc(){return Zn.logLevel}function J(n,...e){if(Zn.logLevel<=Ie.DEBUG){const t=e.map(Ra);Zn.debug(`Firestore (${Ei}): ${n}`,...t)}}function Rn(n,...e){if(Zn.logLevel<=Ie.ERROR){const t=e.map(Ra);Zn.error(`Firestore (${Ei}): ${n}`,...t)}}function Xc(n,...e){if(Zn.logLevel<=Ie.WARN){const t=e.map(Ra);Zn.warn(`Firestore (${Ei}): ${n}`,...t)}}function Ra(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function ce(n="Unexpected state"){const e=`FIRESTORE (${Ei}) INTERNAL ASSERTION FAILED: `+n;throw Rn(e),new Error(e)}function ze(n,e){n||ce()}function ve(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class jv{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class zv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Lt.UNAUTHENTICATED))}shutdown(){}}class qv{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=u=>this.i!==i?(i=this.i,t(u)):Promise.resolve();let r=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},o=u=>{J("FirebaseCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>o(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?o(u):(J("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Dn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(J("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ze(typeof i.accessToken=="string"),new jv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string"),new Lt(e)}}class Gv{constructor(e,t,i){this.h=e,this.l=t,this.m=i,this.type="FirstParty",this.user=Lt.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class Wv{constructor(e,t,i){this.h=e,this.l=t,this.m=i}getToken(){return Promise.resolve(new Gv(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class Da{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.g(i),this.p=i=>t.writeSequenceNumber(i))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
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
 */function Kv(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */Da.T=-1;class Qc{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Kv(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function Ae(n,e){return n<e?-1:n>e?1:0}function fs(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
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
 */class Bt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new G(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Bt.fromMillis(Date.now())}static fromDate(e){return Bt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new Bt(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Bt(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Yc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ms(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Jc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ps{constructor(e,t,i){t===void 0?t=0:t>e.length&&ce(),i===void 0?i=e.length-t:i>e.length-t&&ce(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ps.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ps?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),a=t.get(s);if(r<a)return-1;if(r>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Oe extends ps{construct(e,t,i){return new Oe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new G(O.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new Oe(t)}static emptyPath(){return new Oe([])}}const Xv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends ps{construct(e,t,i){return new Ht(e,t,i)}static isValidIdentifier(e){return Xv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ht(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new G(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new G(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(i+=o,s++):(r(),s++)}if(r(),a)throw new G(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(t)}static emptyPath(){return new Ht([])}}/**
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
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new yt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new yt(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const Qv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(n){if(ze(!!n),typeof n=="string"){let e=0;const t=Qv.exec(n);if(ze(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:qe(n.seconds),nanos:qe(n.nanos)}}function qe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _i(n){return typeof n=="string"?yt.fromBase64String(n):yt.fromUint8Array(n)}/**
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
 */function Zc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function $c(n){const e=n.mapValue.fields.__previous_value__;return Zc(e)?$c(e):e}function gs(n){const e=On(n.mapValue.fields.__local_write_time__.timestampValue);return new Bt(e.seconds,e.nanos)}/**
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
 */function Ti(n){return n==null}function Nr(n){return n===0&&1/n==-1/0}function Yv(n){return typeof n=="number"&&Number.isInteger(n)&&!Nr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Oe.fromString(e))}static fromName(e){return new ee(Oe.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Oe(e.slice()))}}/**
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
 */function $n(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zc(n)?4:10:ce()}function sn(n,e){const t=$n(n);if(t!==$n(e))return!1;switch(t){case 0:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gs(n).isEqual(gs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=On(i.timestampValue),a=On(s.timestampValue);return r.seconds===a.seconds&&r.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return _i(i.bytesValue).isEqual(_i(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=qe(i.doubleValue),a=qe(s.doubleValue);return r===a?Nr(r)===Nr(a):isNaN(r)&&isNaN(a)}return!1}(n,e);case 9:return fs(n.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(i,s){const r=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Yc(r)!==Yc(a))return!1;for(const o in r)if(r.hasOwnProperty(o)&&(a[o]===void 0||!sn(r[o],a[o])))return!1;return!0}(n,e);default:return ce()}}function ys(n,e){return(n.values||[]).find(t=>sn(t,e))!==void 0}function Ai(n,e){const t=$n(n),i=$n(e);if(t!==i)return Ae(t,i);switch(t){case 0:return 0;case 1:return Ae(n.booleanValue,e.booleanValue);case 2:return function(s,r){const a=qe(s.integerValue||s.doubleValue),o=qe(r.integerValue||r.doubleValue);return a<o?-1:a>o?1:a===o?0:isNaN(a)?isNaN(o)?0:-1:1}(n,e);case 3:return eh(n.timestampValue,e.timestampValue);case 4:return eh(gs(n),gs(e));case 5:return Ae(n.stringValue,e.stringValue);case 6:return function(s,r){const a=_i(s),o=_i(r);return a.compareTo(o)}(n.bytesValue,e.bytesValue);case 7:return function(s,r){const a=s.split("/"),o=r.split("/");for(let u=0;u<a.length&&u<o.length;u++){const c=Ae(a[u],o[u]);if(c!==0)return c}return Ae(a.length,o.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,r){const a=Ae(qe(s.latitude),qe(r.latitude));return a!==0?a:Ae(qe(s.longitude),qe(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,r){const a=s.values||[],o=r.values||[];for(let u=0;u<a.length&&u<o.length;++u){const c=Ai(a[u],o[u]);if(c)return c}return Ae(a.length,o.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,r){const a=s.fields||{},o=Object.keys(a),u=r.fields||{},c=Object.keys(u);o.sort(),c.sort();for(let l=0;l<o.length&&l<c.length;++l){const h=Ae(o[l],c[l]);if(h!==0)return h;const d=Ai(a[o[l]],u[c[l]]);if(d!==0)return d}return Ae(o.length,c.length)}(n.mapValue,e.mapValue);default:throw ce()}}function eh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ae(n,e);const t=On(n),i=On(e),s=Ae(t.seconds,i.seconds);return s!==0?s:Ae(t.nanos,i.nanos)}function Oa(n){return La(n)}function La(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){const s=On(i);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?_i(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,ee.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(i){let s="[",r=!0;for(const a of i.values||[])r?r=!1:s+=",",s+=La(a);return s+"]"}(n.arrayValue):"mapValue"in n?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",a=!0;for(const o of s)a?a=!1:r+=",",r+=`${o}:${La(i.fields[o])}`;return r+"}"}(n.mapValue):ce();var e,t}function th(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Na(n){return!!n&&"integerValue"in n}function ka(n){return!!n&&"arrayValue"in n}function nh(n){return!!n&&"nullValue"in n}function ih(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ma(n){return!!n&&"mapValue"in n}function vs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ms(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=vs(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=vs(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
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
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Ma(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vs(t)}setAll(e){let t=Ht.emptyPath(),i={},s=[];e.forEach((a,o)=>{if(!t.isImmediateParentOf(o)){const u=this.getFieldsMap(t);this.applyChanges(u,i,s),i={},s=[],t=o.popLast()}a?i[o.lastSegment()]=vs(a):s.push(o.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());Ma(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Ma(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){ms(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new dn(vs(this.value))}}/**
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
 */class vt{constructor(e,t,i,s,r){this.key=e,this.documentType=t,this.version=i,this.data=s,this.documentState=r}static newInvalidDocument(e){return new vt(e,0,Te.min(),dn.empty(),0)}static newFoundDocument(e,t,i){return new vt(e,1,t,i,0)}static newNoDocument(e,t){return new vt(e,2,t,dn.empty(),0)}static newUnknownDocument(e,t){return new vt(e,3,t,dn.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new vt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jv{constructor(e,t=null,i=[],s=[],r=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=o,this.A=null}}function sh(n,e=null,t=[],i=[],s=null,r=null,a=null){return new Jv(n,e,t,i,s,r,a)}function Pa(n){const e=ve(n);if(e.A===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>$v(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Ti(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=kr(e.startAt)),e.endAt&&(t+="|ub:",t+=kr(e.endAt)),e.A=t}return e.A}function Zv(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(i=t).field.canonicalString()} ${i.op} ${Oa(i.value)}`;var i}).join(", ")}]`),Ti(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: "+kr(n.startAt)),n.endAt&&(e+=", endAt: "+kr(n.endAt)),`Target(${e})`}function Fa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<n.orderBy.length;s++)if(!aI(n.orderBy[s],e.orderBy[s]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let s=0;s<n.filters.length;s++)if(t=n.filters[s],i=e.filters[s],t.op!==i.op||!t.field.isEqual(i.field)||!sn(t.value,i.value))return!1;var t,i;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ah(n.startAt,e.startAt)&&ah(n.endAt,e.endAt)}function Ua(n){return ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}class wt extends class{}{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.R(e,t,i):new eI(e,t,i):t==="array-contains"?new iI(e,i):t==="in"?new sI(e,i):t==="not-in"?new rI(e,i):t==="array-contains-any"?new oI(e,i):new wt(e,t,i)}static R(e,t,i){return t==="in"?new tI(e,i):new nI(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.P(Ai(t,this.value)):t!==null&&$n(this.value)===$n(t)&&this.P(Ai(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function $v(n){return n.field.canonicalString()+n.op.toString()+Oa(n.value)}class eI extends wt{constructor(e,t,i){super(e,t,i),this.key=ee.fromName(i.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.P(t)}}class tI extends wt{constructor(e,t){super(e,"in",t),this.keys=rh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class nI extends wt{constructor(e,t){super(e,"not-in",t),this.keys=rh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ee.fromName(i.referenceValue))}class iI extends wt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ka(t)&&ys(t.arrayValue,this.value)}}class sI extends wt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ys(this.value.arrayValue,t)}}class rI extends wt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ys(this.value.arrayValue,t)}}class oI extends wt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ka(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>ys(this.value.arrayValue,i))}}class Va{constructor(e,t){this.position=e,this.before=t}}function kr(n){return`${n.before?"b":"a"}:${n.position.map(e=>Oa(e)).join(",")}`}class Is{constructor(e,t="asc"){this.field=e,this.dir=t}}function aI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function oh(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],a=n.position[s];if(r.field.isKeyField()?i=ee.comparator(ee.fromName(a.referenceValue),t.key):i=Ai(a,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return n.before?i<=0:i<0}function ah(n,e){if(n===null)return e===null;if(e===null||n.before!==e.before||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!sn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Es{constructor(e,t=null,i=[],s=[],r=null,a="F",o=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=o,this.endAt=u,this.V=null,this.S=null,this.startAt,this.endAt}}function uI(n,e,t,i,s,r,a,o){return new Es(n,e,t,i,s,r,a,o)}function Ba(n){return new Es(n)}function Mr(n){return!Ti(n.limit)&&n.limitType==="F"}function Pr(n){return!Ti(n.limit)&&n.limitType==="L"}function uh(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function lh(n){for(const e of n.filters)if(e.v())return e.field;return null}function ch(n){return n.collectionGroup!==null}function _s(n){const e=ve(n);if(e.V===null){e.V=[];const t=lh(e),i=uh(e);if(t!==null&&i===null)t.isKeyField()||e.V.push(new Is(t)),e.V.push(new Is(Ht.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.V.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Is(Ht.keyField(),r))}}}return e.V}function ei(n){const e=ve(n);if(!e.S)if(e.limitType==="F")e.S=sh(e.path,e.collectionGroup,_s(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of _s(e)){const a=r.dir==="desc"?"asc":"desc";t.push(new Is(r.field,a))}const i=e.endAt?new Va(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Va(e.startAt.position,!e.startAt.before):null;e.S=sh(e.path,e.collectionGroup,t,e.filters,e.limit,i,s)}return e.S}function lI(n,e,t){return new Es(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fr(n,e){return Fa(ei(n),ei(e))&&n.limitType===e.limitType}function hh(n){return`${Pa(ei(n))}|lt:${n.limitType}`}function Ha(n){return`Query(target=${Zv(ei(n))}; limitType=${n.limitType})`}function Ur(n,e){return e.isFoundDocument()&&function(t,i){const s=i.key.path;return t.collectionGroup!==null?i.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):ee.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,i){for(const s of t.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,i){for(const s of t.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(t,i){return!(t.startAt&&!oh(t.startAt,_s(t),i)||t.endAt&&oh(t.endAt,_s(t),i))}(n,e)}function dh(n){return(e,t)=>{let i=!1;for(const s of _s(n)){const r=cI(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function cI(n,e,t){const i=n.field.isKeyField()?ee.comparator(e.key,t.key):function(s,r,a){const o=r.data.field(s),u=a.data.field(s);return o!==null&&u!==null?Ai(o,u):ce()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ce()}}/**
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
 */function fh(n,e){if(n.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nr(e)?"-0":e}}function mh(n){return{integerValue:""+n}}function hI(n,e){return Yv(e)?mh(e):fh(n,e)}/**
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
 */class Vr{constructor(){this._=void 0}}function dI(n,e,t){return n instanceof xa?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(t,e):n instanceof Br?ph(n,e):n instanceof Hr?gh(n,e):function(i,s){const r=mI(i,s),a=yh(r)+yh(i.C);return Na(r)&&Na(i.C)?mh(a):fh(i.N,a)}(n,e)}function fI(n,e,t){return n instanceof Br?ph(n,e):n instanceof Hr?gh(n,e):t}function mI(n,e){return n instanceof ja?Na(t=e)||function(i){return!!i&&"doubleValue"in i}(t)?e:{integerValue:0}:null;var t}class xa extends Vr{}class Br extends Vr{constructor(e){super(),this.elements=e}}function ph(n,e){const t=vh(e);for(const i of n.elements)t.some(s=>sn(s,i))||t.push(i);return{arrayValue:{values:t}}}class Hr extends Vr{constructor(e){super(),this.elements=e}}function gh(n,e){let t=vh(e);for(const i of n.elements)t=t.filter(s=>!sn(s,i));return{arrayValue:{values:t}}}class ja extends Vr{constructor(e,t){super(),this.N=e,this.C=t}}function yh(n){return qe(n.integerValue||n.doubleValue)}function vh(n){return ka(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function pI(n,e){return n.field.isEqual(e.field)&&function(t,i){return t instanceof Br&&i instanceof Br||t instanceof Hr&&i instanceof Hr?fs(t.elements,i.elements,sn):t instanceof ja&&i instanceof ja?sn(t.C,i.C):t instanceof xa&&i instanceof xa}(n.transform,e.transform)}function xr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ih{}function gI(n,e,t){n instanceof Th?function(i,s,r){const a=i.value.clone(),o=Sh(i.fieldTransforms,s,r.transformResults);a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):n instanceof qa?function(i,s,r){if(!xr(i.precondition,s))return void s.convertToUnknownDocument(r.version);const a=Sh(i.fieldTransforms,s,r.transformResults),o=s.data;o.setAll(Ah(i)),o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function za(n,e,t){n instanceof Th?function(i,s,r){if(!xr(i.precondition,s))return;const a=i.value.clone(),o=bh(i.fieldTransforms,r,s);a.setAll(o),s.convertToFoundDocument(_h(s),a).setHasLocalMutations()}(n,e,t):n instanceof qa?function(i,s,r){if(!xr(i.precondition,s))return;const a=bh(i.fieldTransforms,r,s),o=s.data;o.setAll(Ah(i)),o.setAll(a),s.convertToFoundDocument(_h(s),o).setHasLocalMutations()}(n,e,t):function(i,s){xr(i.precondition,s)&&s.convertToNoDocument(Te.min())}(n,e)}function Eh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,i){return t===void 0&&i===void 0||!(!t||!i)&&fs(t,i,(s,r)=>pI(s,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}function _h(n){return n.isFoundDocument()?n.version:Te.min()}class Th extends Ih{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}}class qa extends Ih{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function Ah(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Sh(n,e,t){const i=new Map;ze(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],a=r.transform,o=e.data.field(r.field);i.set(r.field,fI(a,o,t[s]))}return i}function bh(n,e,t){const i=new Map;for(const s of n){const r=s.transform,a=t.data.field(s.field);i.set(s.field,dI(r,a,e))}return i}/**
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
 */class yI{constructor(e){this.count=e}}/**
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
 */var Ge,pe;function wh(n){if(n===void 0)return Rn("GRPC error has no .code"),O.UNKNOWN;switch(n){case Ge.OK:return O.OK;case Ge.CANCELLED:return O.CANCELLED;case Ge.UNKNOWN:return O.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return O.INTERNAL;case Ge.UNAVAILABLE:return O.UNAVAILABLE;case Ge.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ge.NOT_FOUND:return O.NOT_FOUND;case Ge.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ge.ABORTED:return O.ABORTED;case Ge.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ge.DATA_LOSS:return O.DATA_LOSS;default:return ce()}}(pe=Ge||(Ge={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ct{constructor(e,t){this.comparator=e,this.root=t||ht.EMPTY}insert(e,t){return new Ct(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jr(this.root,e,this.comparator,!1)}getReverseIterator(){return new jr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jr(this.root,e,this.comparator,!0)}}class jr{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:ht.RED,this.left=s!=null?s:ht.EMPTY,this.right=r!=null?r:ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new ht(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(n,e,t,i,s){return this}insert(n,e,t){return new ht(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(e){this.comparator=e,this.data=new Ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ch(this.data.getIterator())}getIteratorFrom(e){return new Ch(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new dt(this.comparator);return t.data=e,t}}class Ch{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const vI=new Ct(ee.comparator);function ti(){return vI}const II=new Ct(ee.comparator);function Ga(){return II}new Ct(ee.comparator);const EI=new dt(ee.comparator);function Le(...n){let e=EI;for(const t of n)e=e.add(t);return e}const _I=new dt(Ae);function Rh(){return _I}/**
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
 */class zr{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t){const i=new Map;return i.set(e,Ts.createSynthesizedTargetChangeForCurrentChange(e,t)),new zr(Te.min(),i,Rh(),ti(),Le())}}class Ts{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Ts(yt.EMPTY_BYTE_STRING,t,Le(),Le(),Le())}}/**
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
 */class qr{constructor(e,t,i,s){this.k=e,this.removedTargetIds=t,this.key=i,this.$=s}}class Dh{constructor(e,t){this.targetId=e,this.O=t}}class Oh{constructor(e,t,i=yt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Lh{constructor(){this.F=0,this.M=kh(),this.L=yt.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Le(),t=Le(),i=Le();return this.M.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:ce()}}),new Ts(this.L,this.B,e,t,i)}G(){this.U=!1,this.M=kh()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class TI{constructor(e){this.tt=e,this.et=new Map,this.nt=ti(),this.st=Nh(),this.it=new dt(Ae)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.ct(t,e.key,e.$);for(const t of e.removedTargetIds)this.ct(t,e.key,e.$)}at(e){this.forEachTarget(e,t=>{const i=this.ut(t);switch(e.state){case 0:this.ht(t)&&i.j(e.resumeToken);break;case 1:i.X(),i.q||i.G(),i.j(e.resumeToken);break;case 2:i.X(),i.q||this.removeTarget(t);break;case 3:this.ht(t)&&(i.Z(),i.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),i.j(e.resumeToken));break;default:ce()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach((i,s)=>{this.ht(s)&&t(s)})}ft(e){const t=e.targetId,i=e.O.count,s=this.dt(t);if(s){const r=s.target;if(Ua(r))if(i===0){const a=new ee(r.path);this.ct(t,a,vt.newNoDocument(a,Te.min()))}else ze(i===1);else this.wt(t)!==i&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach((r,a)=>{const o=this.dt(a);if(o){if(r.current&&Ua(o.target)){const u=new ee(o.target.path);this.nt.get(u)!==null||this.gt(a,u)||this.ct(a,u,vt.newNoDocument(u,e))}r.K&&(t.set(a,r.W()),r.G())}});let i=Le();this.st.forEach((r,a)=>{let o=!0;a.forEachWhile(u=>{const c=this.dt(u);return!c||c.purpose===2||(o=!1,!1)}),o&&(i=i.add(r))});const s=new zr(e,t,this.it,this.nt,i);return this.nt=ti(),this.st=Nh(),this.it=new dt(Ae),s}ot(e,t){if(!this.ht(e))return;const i=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,i),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}ct(e,t,i){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,t)?s.H(t,1):s.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),i&&(this.nt=this.nt.insert(t,i))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new Lh,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new dt(Ae),this.st=this.st.insert(e,t)),t}ht(e){const t=this.dt(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new Lh),this.tt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function Nh(){return new Ct(ee.comparator)}function kh(){return new Ct(ee.comparator)}/**
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
 */const AI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),SI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class bI{constructor(e,t){this.databaseId=e,this.D=t}}function Wa(n,e){return n.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mh(n,e){return n.D?e.toBase64():e.toUint8Array()}function As(n){return ze(!!n),Te.fromTimestamp(function(e){const t=On(e);return new Bt(t.seconds,t.nanos)}(n))}function Ph(n,e){return function(t){return new Oe(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Fh(n){const e=Oe.fromString(n);return ze(jh(e)),e}function Ka(n,e){const t=Fh(e);if(t.get(1)!==n.databaseId.projectId)throw new G(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ee(Vh(t))}function Xa(n,e){return Ph(n.databaseId,e)}function wI(n){const e=Fh(n);return e.length===4?Oe.emptyPath():Vh(e)}function Uh(n){return new Oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vh(n){return ze(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function CI(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(u,c){return u.D?(ze(c===void 0||typeof c=="string"),yt.fromBase64String(c||"")):(ze(c===void 0||c instanceof Uint8Array),yt.fromUint8Array(c||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&function(u){const c=u.code===void 0?O.UNKNOWN:wh(u.code);return new G(c,u.message||"")}(a);t=new Oh(i,s,r,o||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Ka(n,i.document.name),r=As(i.document.updateTime),a=new dn({mapValue:{fields:i.document.fields}}),o=vt.newFoundDocument(s,r,a),u=i.targetIds||[],c=i.removedTargetIds||[];t=new qr(u,c,o.key,o)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Ka(n,i.document),r=i.readTime?As(i.readTime):Te.min(),a=vt.newNoDocument(s,r),o=i.removedTargetIds||[];t=new qr([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Ka(n,i.document),r=i.removedTargetIds||[];t=new qr([],r,s,null)}else{if(!("filter"in e))return ce();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new yI(s),a=i.targetId;t=new Dh(a,r)}}return t}function RI(n,e){return{documents:[Xa(n,e.path)]}}function DI(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=Xa(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Xa(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(o){if(o.length===0)return;const u=o.map(c=>function(l){if(l.op==="=="){if(ih(l.value))return{unaryFilter:{field:Si(l.field),op:"IS_NAN"}};if(nh(l.value))return{unaryFilter:{field:Si(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(ih(l.value))return{unaryFilter:{field:Si(l.field),op:"IS_NOT_NAN"}};if(nh(l.value))return{unaryFilter:{field:Si(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Si(l.field),op:kI(l.op),value:l.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(t.structuredQuery.where=s);const r=function(o){if(o.length!==0)return o.map(u=>function(c){return{field:Si(c.field),direction:NI(c.dir)}}(u))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const a=function(o,u){return o.D||Ti(u)?u:{value:u}}(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=Hh(e.startAt)),e.endAt&&(t.structuredQuery.endAt=Hh(e.endAt)),t}function OI(n){let e=wI(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){ze(i===1);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let r=[];t.where&&(r=Bh(t.where));let a=[];t.orderBy&&(a=t.orderBy.map(l=>function(h){return new Is(bi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let o=null;t.limit&&(o=function(l){let h;return h=typeof l=="object"?l.value:l,Ti(h)?null:h}(t.limit));let u=null;t.startAt&&(u=xh(t.startAt));let c=null;return t.endAt&&(c=xh(t.endAt)),uI(e,s,a,r,o,"F",u,c)}function LI(n,e){const t=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ce()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bh(n){return n?n.unaryFilter!==void 0?[PI(n)]:n.fieldFilter!==void 0?[MI(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>Bh(e)).reduce((e,t)=>e.concat(t)):ce():[]}function Hh(n){return{before:n.before,values:n.position}}function xh(n){const e=!!n.before,t=n.values||[];return new Va(t,e)}function NI(n){return AI[n]}function kI(n){return SI[n]}function Si(n){return{fieldPath:n.canonicalString()}}function bi(n){return Ht.fromServerFormat(n.fieldPath)}function MI(n){return wt.create(bi(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(n.fieldFilter.op),n.fieldFilter.value)}function PI(n){switch(n.unaryFilter.op){case"IS_NAN":const e=bi(n.unaryFilter.field);return wt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=bi(n.unaryFilter.field);return wt.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bi(n.unaryFilter.field);return wt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=bi(n.unaryFilter.field);return wt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}function jh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}const FI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,i)=>{t(e)})}static reject(e){return new B((t,i)=>{i(e)})}static waitFor(e){return new B((t,i)=>{let s=0,r=0,a=!1;e.forEach(o=>{++s,o.next(()=>{++r,a&&r===s&&t()},u=>i(u))}),a=!0,r===s&&t()})}static or(e){let t=B.resolve(!1);for(const i of e)t=t.next(s=>s?B.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}}function Ss(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class VI{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&gI(r,e,i[s])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&za(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&za(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const i=e.get(t.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(Te.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,(t,i)=>Eh(t,i))&&fs(this.baseMutations,e.baseMutations,(t,i)=>Eh(t,i))}}/**
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
 */class ni{constructor(e,t,i,s,r=Te.min(),a=Te.min(),o=yt.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o}withSequenceNumber(e){return new ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class BI{constructor(e){this.Wt=e}}function HI(n){const e=OI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lI(e,e.limit,"L"):e}/**
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
 */class xI{constructor(){this.Gt=new jI}addToCollectionParentIndex(e,t){return this.Gt.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Gt.getEntries(t))}}class jI{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new dt(Oe.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new dt(Oe.comparator)).toArray()}}/**
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
 */class wi{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new wi(0)}static ie(){return new wi(-1)}}/**
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
 */async function Qa(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==FI)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class bs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t])}else this.inner[i]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),!0;return!1}forEach(e){ms(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Jc(this.inner)}}/**
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
 */class zI{constructor(){this.changes=new bs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:Te.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:vt.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?B.resolve(i.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zh{constructor(e,t,i){this.He=e,this.In=t,this.Ht=i}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next(i=>this.Rn(e,t,i))}Rn(e,t,i){return this.He.getEntry(e,t).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}bn(e,t){e.forEach((i,s)=>{for(const r of t)r.applyToLocalView(s)})}Pn(e,t){return this.He.getEntries(e,t).next(i=>this.vn(e,i).next(()=>i))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next(i=>this.bn(t,i))}getDocumentsMatchingQuery(e,t,i){return function(s){return ee.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.Vn(e,t.path):ch(t)?this.Sn(e,t,i):this.Dn(e,t,i)}Vn(e,t){return this.An(e,new ee(t)).next(i=>{let s=Ga();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Sn(e,t,i){const s=t.collectionGroup;let r=Ga();return this.Ht.getCollectionParents(e,s).next(a=>B.forEach(a,o=>{const u=function(c,l){return new Es(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(t,o.child(s));return this.Dn(e,u,i).next(c=>{c.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}Dn(e,t,i){let s,r;return this.He.getDocumentsMatchingQuery(e,t,i).next(a=>(s=a,this.In.getAllMutationBatchesAffectingQuery(e,t))).next(a=>(r=a,this.Cn(e,r,s).next(o=>{s=o;for(const u of r)for(const c of u.mutations){const l=c.key;let h=s.get(l);h==null&&(h=vt.newInvalidDocument(l),s=s.insert(l,h)),za(c,h,u.localWriteTime),h.isFoundDocument()||(s=s.remove(l))}}))).next(()=>(s.forEach((a,o)=>{Ur(t,o)||(s=s.remove(a))}),s))}Cn(e,t,i){let s=Le();for(const a of t)for(const o of a.mutations)o instanceof qa&&i.get(o.key)===null&&(s=s.add(o.key));let r=i;return this.He.getEntries(e,s).next(a=>(a.forEach((o,u)=>{u.isFoundDocument()&&(r=r.insert(o,u))}),r))}}/**
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
 */class Ya{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Nn=i,this.xn=s}static kn(e,t){let i=Le(),s=Le();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ya(e,t.fromCache,i,s)}}/**
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
 */class qI{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(t)||i.isEqual(Te.min())?this.Fn(e,t):this.On.Pn(e,s).next(r=>{const a=this.Mn(t,r);return(Mr(t)||Pr(t))&&this.Ln(t.limitType,a,s,i)?this.Fn(e,t):(Kc()<=Ie.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ha(t)),this.On.getDocumentsMatchingQuery(e,t,i).next(o=>(a.forEach(u=>{o=o.insert(u.key,u)}),o)))})}Mn(e,t){let i=new dt(dh(e));return t.forEach((s,r)=>{Ur(e,r)&&(i=i.add(r))}),i}Ln(e,t,i,s){if(i.size!==t.size)return!0;const r=e==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Fn(e,t){return Kc()<=Ie.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Ha(t)),this.On.getDocumentsMatchingQuery(e,t,Te.min())}}/**
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
 */class GI{constructor(e,t,i,s){this.persistence=e,this.Bn=t,this.N=s,this.Un=new Ct(Ae),this.qn=new bs(r=>Pa(r),Fa),this.Kn=Te.min(),this.In=e.getMutationQueue(i),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new zh(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Un))}}function WI(n,e,t,i){return new GI(n,e,t,i)}async function qh(n,e){const t=ve(n);let i=t.In,s=t.Qn;const r=await t.persistence.runTransaction("Handle user change","readonly",a=>{let o;return t.In.getAllMutationBatches(a).next(u=>(o=u,i=t.persistence.getMutationQueue(e),s=new zh(t.jn,i,t.persistence.getIndexManager()),i.getAllMutationBatches(a))).next(u=>{const c=[],l=[];let h=Le();for(const d of o){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of u){l.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return s.Pn(a,h).next(d=>({Wn:d,removedBatchIds:c,addedBatchIds:l}))})});return t.In=i,t.Qn=s,t.Bn.$n(t.Qn),r}function Gh(n){const e=ve(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function KI(n,e){const t=ve(n),i=e.snapshotVersion;let s=t.Un;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=t.jn.newChangeBuffer({trackRemovals:!0});s=t.Un;const o=[];e.targetChanges.forEach((c,l)=>{const h=s.get(l);if(!h)return;o.push(t.ze.removeMatchingKeys(r,c.removedDocuments,l).next(()=>t.ze.addMatchingKeys(r,c.addedDocuments,l)));const d=c.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,i).withSequenceNumber(r.currentSequenceNumber);s=s.insert(l,f),function(m,y,g){return ze(y.resumeToken.approximateByteSize()>0),m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(h,f,c)&&o.push(t.ze.updateTargetData(r,f))}});let u=ti();if(e.documentUpdates.forEach((c,l)=>{e.resolvedLimboDocuments.has(c)&&o.push(t.persistence.referenceDelegate.updateLimboDocument(r,c))}),o.push(XI(r,a,e.documentUpdates,i,void 0).next(c=>{u=c})),!i.isEqual(Te.min())){const c=t.ze.getLastRemoteSnapshotVersion(r).next(l=>t.ze.setTargetsMetadata(r,r.currentSequenceNumber,i));o.push(c)}return B.waitFor(o).next(()=>a.apply(r)).next(()=>t.Qn.vn(r,u)).next(()=>u)}).then(r=>(t.Un=s,r))}function XI(n,e,t,i,s){let r=Le();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let o=ti();return t.forEach((u,c)=>{const l=a.get(u),h=(s==null?void 0:s.get(u))||i;c.isNoDocument()&&c.version.isEqual(Te.min())?(e.removeEntry(u,h),o=o.insert(u,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c,h),o=o.insert(u,c)):J("LocalStore","Ignoring outdated watch update for ",u,". Current version:",l.version," Watch version:",c.version)}),o})}function QI(n,e){const t=ve(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.ze.getTargetData(i,e).next(r=>r?(s=r,B.resolve(s)):t.ze.allocateTargetId(i).next(a=>(s=new ni(e,a,0,i.currentSequenceNumber),t.ze.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.Un.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Un=t.Un.insert(i.targetId,i),t.qn.set(e,i.targetId)),i})}async function Ja(n,e,t){const i=ve(n),s=i.Un.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ss(a))throw a;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}i.Un=i.Un.remove(e),i.qn.delete(s.target)}function Wh(n,e,t){const i=ve(n);let s=Te.min(),r=Le();return i.persistence.runTransaction("Execute query","readonly",a=>function(o,u,c){const l=ve(o),h=l.qn.get(c);return h!==void 0?B.resolve(l.Un.get(h)):l.ze.getTargetData(u,c)}(i,a,ei(e)).next(o=>{if(o)return s=o.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(a,o.targetId).next(u=>{r=u})}).next(()=>i.Bn.getDocumentsMatchingQuery(a,e,t?s:Te.min(),t?r:Le())).next(o=>({documents:o,Gn:r})))}/**
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
 */class YI{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return B.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var i;return this.Yn.set(t.id,{id:(i=t).id,version:i.version,createTime:As(i.createTime)}),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(i){return{name:i.name,query:HI(i.bundledQuery),readTime:As(i.readTime)}}(t)),B.resolve()}}/**
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
 */class Za{constructor(){this.Zn=new dt(rt.ts),this.es=new dt(rt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const i=new rt(e,t);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.rs(new rt(e,t))}os(e,t){e.forEach(i=>this.removeReference(i,t))}cs(e){const t=new ee(new Oe([])),i=new rt(t,e),s=new rt(t,e+1),r=[];return this.es.forEachInRange([i,s],a=>{this.rs(a),r.push(a.key)}),r}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new ee(new Oe([])),i=new rt(t,e),s=new rt(t,e+1);let r=Le();return this.es.forEachInRange([i,s],a=>{r=r.add(a.key)}),r}containsKey(e){const t=new rt(e,0),i=this.Zn.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class rt{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return ee.comparator(e.key,t.key)||Ae(e.ls,t.ls)}static ns(e,t){return Ae(e.ls,t.ls)||ee.comparator(e.key,t.key)}}/**
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
 */class JI{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new dt(rt.ts)}checkEmpty(e){return B.resolve(this.In.length===0)}addMutationBatch(e,t,i,s){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const a=new VI(r,t,i,s);this.In.push(a);for(const o of s)this.ds=this.ds.add(new rt(o.key,r)),this.Ht.addToCollectionParentIndex(e,o.key.path.popLast());return B.resolve(a)}lookupMutationBatch(e,t){return B.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this._s(i),r=s<0?0:s;return B.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return B.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new rt(t,0),s=new rt(t,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([i,s],a=>{const o=this.ws(a.ls);r.push(o)}),B.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new dt(Ae);return t.forEach(s=>{const r=new rt(s,0),a=new rt(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,a],o=>{i=i.add(o.ls)})}),B.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;ee.isDocumentKey(r)||(r=r.child(""));const a=new rt(new ee(r),0);let o=new dt(Ae);return this.ds.forEachWhile(u=>{const c=u.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(o=o.add(u.ls)),!0)},a),B.resolve(this.gs(o))}gs(e){const t=[];return e.forEach(i=>{const s=this.ws(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ze(this.ys(t.batchId,"removed")===0),this.In.shift();let i=this.ds;return B.forEach(t.mutations,s=>{const r=new rt(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=i})}te(e){}containsKey(e,t){const i=new rt(t,0),s=this.ds.firstAfterOrEqual(i);return B.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,B.resolve()}ys(e,t){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}/**
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
 */class ZI{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new Ct(ee.comparator),this.size=0}addEntry(e,t,i){const s=t.key,r=this.docs.get(s),a=r?r.size:0,o=this.ps(t);return this.docs=this.docs.insert(s,{document:t.clone(),size:o,readTime:i}),this.size+=o-a,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return B.resolve(i?i.document.clone():vt.newInvalidDocument(t))}getEntries(e,t){let i=ti();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.clone():vt.newInvalidDocument(s))}),B.resolve(i)}getDocumentsMatchingQuery(e,t,i){let s=ti();const r=new ee(t.path.child("")),a=this.docs.getIteratorFrom(r);for(;a.hasNext();){const{key:o,value:{document:u,readTime:c}}=a.getNext();if(!t.path.isPrefixOf(o.path))break;c.compareTo(i)<=0||Ur(t,u)&&(s=s.insert(u.key,u.clone()))}return B.resolve(s)}Ts(e,t){return B.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new $I(this)}getSize(e){return B.resolve(this.size)}}class $I extends zI{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.document.isValidDocument()?t.push(this.Se.addEntry(e,s.document,this.getReadTime(i))):this.Se.removeEntry(i)}),B.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}/**
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
 */class eE{constructor(e){this.persistence=e,this.Es=new bs(t=>Pa(t),Fa),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.Is=0,this.As=new Za,this.targetCount=0,this.Rs=wi.se()}forEachTarget(e,t){return this.Es.forEach((i,s)=>t(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Is&&(this.Is=t),B.resolve()}ce(e){this.Es.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new wi(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.ce(t),B.resolve()}removeTargetData(e,t){return this.Es.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Es.forEach((a,o)=>{o.sequenceNumber<=t&&i.get(o.targetId)===null&&(this.Es.delete(a),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)}),B.waitFor(r).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const i=this.Es.get(t)||null;return B.resolve(i)}addMatchingKeys(e,t,i){return this.As.ss(t,i),B.resolve()}removeMatchingKeys(e,t,i){this.As.os(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(a=>{r.push(s.markPotentiallyOrphaned(e,a))}),B.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),B.resolve()}getMatchingKeysForTargetId(e,t){const i=this.As.hs(t);return B.resolve(i)}containsKey(e,t){return B.resolve(this.As.containsKey(t))}}/**
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
 */class tE{constructor(e,t){this.bs={},this.Le=new Da(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new eE(this),this.Ht=new xI,this.He=function(i,s){return new ZI(i,s)}(this.Ht,i=>this.referenceDelegate.Ps(i)),this.N=new BI(t),this.Je=new YI(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new JI(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,i){J("MemoryPersistence","Starting transaction:",e);const s=new nE(this.Le.next());return this.referenceDelegate.vs(),i(s).next(r=>this.referenceDelegate.Vs(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ss(e,t){return B.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,t)))}}class nE extends UI{constructor(e){super(),this.currentSequenceNumber=e}}class $a{constructor(e){this.persistence=e,this.Ds=new Za,this.Cs=null}static Ns(e){return new $a(e)}get xs(){if(this.Cs)return this.Cs;throw ce()}addReference(e,t,i){return this.Ds.addReference(i,t),this.xs.delete(i.toString()),B.resolve()}removeReference(e,t,i){return this.Ds.removeReference(i,t),this.xs.add(i.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),B.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach(s=>this.xs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.xs.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.xs,i=>{const s=ee.fromPath(i);return this.ks(e,s).next(r=>{r||t.removeEntry(s)})}).next(()=>(this.Cs=null,t.apply(e)))}updateLimboDocument(e,t){return this.ks(e,t).next(i=>{i?this.xs.delete(t.toString()):this.xs.add(t.toString())})}Ps(e){return 0}ks(e,t){return B.or([()=>B.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}class Kh{constructor(){this.activeTargetIds=Rh()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iE{constructor(){this.yi=new Kh,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,i){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Kh,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class sE{Ti(e){}shutdown(){}}/**
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
 */class Xh{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const rE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class oE{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class aE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,i,s){const r=this.Bi(e,t);J("RestConnection","Sending: ",r,i);const a={};return this.Ui(a,s),this.qi(e,r,a,i).then(o=>(J("RestConnection","Received: ",o),o),o=>{throw Xc("RestConnection",`${e} failed with error: `,o,"url: ",r,"request:",i),o})}Ki(e,t,i,s){return this.Li(e,t,i,s)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Ei,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const i in t.authHeaders)t.authHeaders.hasOwnProperty(i)&&(e[i]=t.authHeaders[i])}Bi(e,t){const i=rE[e];return`${this.Fi}/v1/${t}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,i,s){return new Promise((r,a)=>{const o=new xv;o.listenOnce(Vv.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case Ca.NO_ERROR:const c=o.getResponseJson();J("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Ca.TIMEOUT:J("Connection",'RPC "'+e+'" timed out'),a(new G(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ca.HTTP_ERROR:const l=o.getStatus();if(J("Connection",'RPC "'+e+'" failed with status:',l,"response text:",o.getResponseText()),l>0){const h=o.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const m=f.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(m)>=0?m:O.UNKNOWN}(h.status);a(new G(d,h.message))}else a(new G(O.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new G(O.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{J("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(s);o.send(t,"POST",u,i,15)})}ji(e,t){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Fv(),r=Uv(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Hv({})),this.Ui(a.initMessageHeaders,t),Su()||wu()||im()||Cu()||sm()||bu()||(a.httpHeadersOverwriteParam="$httpHeaders");const o=i.join("");J("Connection","Creating WebChannel: "+o,a);const u=s.createWebChannel(o,a);let c=!1,l=!1;const h=new oE({vi:f=>{l?J("Connection","Not sending because WebChannel is closed:",f):(c||(J("Connection","Opening WebChannel transport."),u.open(),c=!0),J("Connection","WebChannel sending:",f),u.send(f))},Vi:()=>u.close()}),d=(f,m,y)=>{f.listen(m,g=>{try{y(g)}catch(v){setTimeout(()=>{throw v},0)}})};return d(u,Lr.EventType.OPEN,()=>{l||J("Connection","WebChannel transport opened.")}),d(u,Lr.EventType.CLOSE,()=>{l||(l=!0,J("Connection","WebChannel transport closed"),h.$i())}),d(u,Lr.EventType.ERROR,f=>{l||(l=!0,Xc("Connection","WebChannel transport errored:",f),h.$i(new G(O.UNAVAILABLE,"The operation could not be completed")))}),d(u,Lr.EventType.MESSAGE,f=>{var m;if(!l){const y=f.data[0];ze(!!y);const g=y,v=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(v){J("Connection","WebChannel received error:",v);const I=v.status;let _=function(j){const b=Ge[j];if(b!==void 0)return wh(b)}(I),M=v.message;_===void 0&&(_=O.INTERNAL,M="Unknown error status: "+I+" with message "+v.message),l=!0,h.$i(new G(_,M)),u.close()}else J("Connection","WebChannel received:",y),h.Oi(y)}}),d(r,Bv.STAT_EVENT,f=>{f.stat===Gc.PROXY?J("Connection","Detected buffering proxy"):f.stat===Gc.NOPROXY&&J("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function eu(){return typeof document!="undefined"?document:null}/**
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
 */function Gr(n){return new bI(n,!0)}class Qh{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Oe=e,this.timerId=t,this.Qi=i,this.Wi=s,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),s=Math.max(0,t-i);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class uE{constructor(e,t,i,s,r,a,o){this.Oe=e,this.er=i,this.nr=s,this.sr=r,this.credentialsProvider=a,this.listener=o,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new Qh(e,t)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Rn(t.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),t=this.ir;this.credentialsProvider.getToken().then(i=>{this.ir===t&&this.Er(i)},i=>{e(()=>{const s=new G(O.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ir(s)})})}Er(e){const t=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{t(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(i=>{t(()=>this.Ir(i))}),this.stream.onMessage(i=>{t(()=>this.onMessage(i))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return t=>{this.Oe.enqueueAndForget(()=>this.ir===e?t():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lE extends uE{constructor(e,t,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r),this.N=s}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const t=CI(this.N,e),i=function(s){if(!("targetChange"in s))return Te.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?Te.min():r.readTime?As(r.readTime):Te.min()}(e);return this.listener.Rr(t,i)}br(e){const t={};t.database=Uh(this.N),t.addTarget=function(s,r){let a;const o=r.target;return a=Ua(o)?{documents:RI(s,o)}:{query:DI(s,o)},a.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?a.resumeToken=Mh(s,r.resumeToken):r.snapshotVersion.compareTo(Te.min())>0&&(a.readTime=Wa(s,r.snapshotVersion.toTimestamp())),a}(this.N,e);const i=LI(this.N,e);i&&(t.labels=i),this.mr(t)}Pr(e){const t={};t.database=Uh(this.N),t.removeTarget=e,this.mr(t)}}/**
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
 */class cE extends class{}{constructor(e,t,i){super(),this.credentials=e,this.sr=t,this.N=i,this.kr=!1}$r(){if(this.kr)throw new G(O.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(e,t,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new G(O.UNKNOWN,s.toString())})}Ki(e,t,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(e,t,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new G(O.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class hE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(Rn(t),this.Mr=!1):J("OnlineStateTracker",t)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
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
 */class dE{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=r,this.zr.Ti(a=>{i.enqueueAndForget(async()=>{Cs(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(o){const u=ve(o);u.Wr.add(4),await ws(u),u.Hr.set("Unknown"),u.Wr.delete(4),await Wr(u)}(this))})}),this.Hr=new hE(i,s)}}async function Wr(n){if(Cs(n))for(const e of n.Gr)await e(!0)}async function ws(n){for(const e of n.Gr)await e(!1)}function Yh(n,e){const t=ve(n);t.Qr.has(e.targetId)||(t.Qr.set(e.targetId,e),iu(t)?nu(t):Ci(t).hr()&&tu(t,e))}function Jh(n,e){const t=ve(n),i=Ci(t);t.Qr.delete(e),i.hr()&&Zh(t,e),t.Qr.size===0&&(i.hr()?i.wr():Cs(t)&&t.Hr.set("Unknown"))}function tu(n,e){n.Jr.Y(e.targetId),Ci(n).br(e)}function Zh(n,e){n.Jr.Y(e),Ci(n).Pr(e)}function nu(n){n.Jr=new TI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>n.Qr.get(e)||null}),Ci(n).start(),n.Hr.Lr()}function iu(n){return Cs(n)&&!Ci(n).ur()&&n.Qr.size>0}function Cs(n){return ve(n).Wr.size===0}function $h(n){n.Jr=void 0}async function fE(n){n.Qr.forEach((e,t)=>{tu(n,e)})}async function mE(n,e){$h(n),iu(n)?(n.Hr.qr(e),nu(n)):n.Hr.set("Unknown")}async function pE(n,e,t){if(n.Hr.set("Online"),e instanceof Oh&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const a of s.targetIds)i.Qr.has(a)&&(await i.remoteSyncer.rejectListen(a,r),i.Qr.delete(a),i.Jr.removeTarget(a))}(n,e)}catch(i){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ed(n,i)}else if(e instanceof qr?n.Jr.rt(e):e instanceof Dh?n.Jr.ft(e):n.Jr.at(e),!t.isEqual(Te.min()))try{const i=await Gh(n.localStore);t.compareTo(i)>=0&&await function(s,r){const a=s.Jr._t(r);return a.targetChanges.forEach((o,u)=>{if(o.resumeToken.approximateByteSize()>0){const c=s.Qr.get(u);c&&s.Qr.set(u,c.withResumeToken(o.resumeToken,r))}}),a.targetMismatches.forEach(o=>{const u=s.Qr.get(o);if(!u)return;s.Qr.set(o,u.withResumeToken(yt.EMPTY_BYTE_STRING,u.snapshotVersion)),Zh(s,o);const c=new ni(u.target,o,1,u.sequenceNumber);tu(s,c)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(i){J("RemoteStore","Failed to raise snapshot:",i),await ed(n,i)}}async function ed(n,e,t){if(!Ss(e))throw e;n.Wr.add(1),await ws(n),n.Hr.set("Offline"),t||(t=()=>Gh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await t(),n.Wr.delete(1),await Wr(n)})}async function gE(n,e){const t=ve(n);e?(t.Wr.delete(2),await Wr(t)):e||(t.Wr.add(2),await ws(t),t.Hr.set("Unknown"))}function Ci(n){return n.Yr||(n.Yr=function(e,t,i){const s=ve(e);return s.$r(),new lE(t,s.sr,s.credentials,s.N,i)}(n.datastore,n.asyncQueue,{Si:fE.bind(null,n),Ci:mE.bind(null,n),Rr:pE.bind(null,n)}),n.Gr.push(async e=>{e?(n.Yr.dr(),iu(n)?nu(n):n.Hr.set("Unknown")):(await n.Yr.stop(),$h(n))})),n.Yr}/**
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
 */class su{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(e,t,i,s,r){const a=Date.now()+i,o=new su(e,t,a,s,r);return o.start(i),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function td(n,e){if(Rn("AsyncQueue",`${e}: ${n}`),Ss(n))return new G(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ri{constructor(e){this.comparator=e?(t,i)=>e(t,i)||ee.comparator(t.key,i.key):(t,i)=>ee.comparator(t.key,i.key),this.keyedMap=Ga(),this.sortedSet=new Ct(this.comparator)}static emptySet(e){return new Ri(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ri)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ri;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class nd{constructor(){this.Zr=new Ct(ee.comparator)}track(e){const t=e.doc.key,i=this.Zr.get(t);i?e.type!==0&&i.type===3?this.Zr=this.Zr.insert(t,e):e.type===3&&i.type!==1?this.Zr=this.Zr.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Zr=this.Zr.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Zr=this.Zr.remove(t):e.type===1&&i.type===2?this.Zr=this.Zr.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):ce():this.Zr=this.Zr.insert(t,e)}eo(){const e=[];return this.Zr.inorderTraversal((t,i)=>{e.push(i)}),e}}class Di{constructor(e,t,i,s,r,a,o,u){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=u}static fromInitialDocuments(e,t,i,s){const r=[];return t.forEach(a=>{r.push({type:0,doc:a})}),new Di(e,t,Ri.emptySet(t),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class yE{constructor(){this.no=void 0,this.listeners=[]}}class vE{constructor(){this.queries=new bs(e=>hh(e),Fr),this.onlineState="Unknown",this.so=new Set}}async function id(n,e){const t=ve(n),i=e.query;let s=!1,r=t.queries.get(i);if(r||(s=!0,r=new yE),s)try{r.no=await t.onListen(i)}catch(a){const o=td(a,`Initialization of query '${Ha(e.query)}' failed`);return void e.onError(o)}t.queries.set(i,r),r.listeners.push(e),e.io(t.onlineState),r.no&&e.ro(r.no)&&ru(t)}async function sd(n,e){const t=ve(n),i=e.query;let s=!1;const r=t.queries.get(i);if(r){const a=r.listeners.indexOf(e);a>=0&&(r.listeners.splice(a,1),s=r.listeners.length===0)}if(s)return t.queries.delete(i),t.onUnlisten(i)}function IE(n,e){const t=ve(n);let i=!1;for(const s of e){const r=s.query,a=t.queries.get(r);if(a){for(const o of a.listeners)o.ro(s)&&(i=!0);a.no=s}}i&&ru(t)}function EE(n,e,t){const i=ve(n),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(t);i.queries.delete(e)}function ru(n){n.so.forEach(e=>{e.next()})}class rd{constructor(e,t,i){this.query=e,this.oo=t,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=i||{}}ro(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Di(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.uo(e)&&(this.oo.next(e),t=!0):this.ho(e,this.onlineState)&&(this.lo(e),t=!0),this.ao=e,t}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let t=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),t=!0),t}ho(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.fo||!i)&&(!e.docs.isEmpty()||t==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const t=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}lo(e){e=Di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
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
 */class od{constructor(e){this.key=e}}class ad{constructor(e){this.key=e}}class _E{constructor(e,t){this.query=e,this.po=t,this.To=null,this.current=!1,this.Eo=Le(),this.mutatedKeys=Le(),this.Io=dh(e),this.Ao=new Ri(this.Io)}get Ro(){return this.po}bo(e,t){const i=t?t.Po:new nd,s=t?t.Ao:this.Ao;let r=t?t.mutatedKeys:this.mutatedKeys,a=s,o=!1;const u=Mr(this.query)&&s.size===this.query.limit?s.last():null,c=Pr(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),f=Ur(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(i.track({type:3,doc:f}),g=!0):this.vo(d,f)||(i.track({type:2,doc:f}),g=!0,(u&&this.Io(f,u)>0||c&&this.Io(f,c)<0)&&(o=!0)):!d&&f?(i.track({type:0,doc:f}),g=!0):d&&!f&&(i.track({type:1,doc:d}),g=!0,(u||c)&&(o=!0)),g&&(f?(a=a.add(f),r=y?r.add(l):r.delete(l)):(a=a.delete(l),r=r.delete(l)))}),Mr(this.query)||Pr(this.query))for(;a.size>this.query.limit;){const l=Mr(this.query)?a.last():a.first();a=a.delete(l.key),r=r.delete(l.key),i.track({type:1,doc:l})}return{Ao:a,Po:i,Ln:o,mutatedKeys:r}}vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const s=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const r=e.Po.eo();r.sort((c,l)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return f(h)-f(d)}(c.type,l.type)||this.Io(c.doc,l.doc)),this.Vo(i);const a=t?this.So():[],o=this.Eo.size===0&&this.current?1:0,u=o!==this.To;return this.To=o,r.length!==0||u?{snapshot:new Di(this.query,e.Ao,s,r,e.mutatedKeys,o===0,u,!1),Do:a}:{Do:a}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new nd,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(t=>this.po=this.po.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.po=this.po.delete(t)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=Le(),this.Ao.forEach(i=>{this.Co(i.key)&&(this.Eo=this.Eo.add(i.key))});const t=[];return e.forEach(i=>{this.Eo.has(i)||t.push(new ad(i))}),this.Eo.forEach(i=>{e.has(i)||t.push(new od(i))}),t}No(e){this.po=e.Gn,this.Eo=Le();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return Di.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class TE{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class AE{constructor(e){this.key=e,this.ko=!1}}class SE{constructor(e,t,i,s,r,a){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.$o={},this.Oo=new bs(o=>hh(o),Fr),this.Fo=new Map,this.Mo=new Set,this.Lo=new Ct(ee.comparator),this.Bo=new Map,this.Uo=new Za,this.qo={},this.Ko=new Map,this.jo=wi.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function bE(n,e){const t=NE(n);let i,s;const r=t.Oo.get(e);if(r)i=r.targetId,t.sharedClientState.addLocalQueryTarget(i),s=r.view.xo();else{const a=await QI(t.localStore,ei(e)),o=t.sharedClientState.addLocalQueryTarget(a.targetId);i=a.targetId,s=await wE(t,e,i,o==="current"),t.isPrimaryClient&&Yh(t.remoteStore,a)}return s}async function wE(n,e,t,i){n.Wo=(l,h,d)=>async function(f,m,y,g){let v=m.view.bo(y);v.Ln&&(v=await Wh(f.localStore,m.query,!1).then(({documents:M})=>m.view.bo(M,v)));const I=g&&g.targetChanges.get(m.targetId),_=m.view.applyChanges(v,f.isPrimaryClient,I);return hd(f,m.targetId,_.Do),_.snapshot}(n,l,h,d);const s=await Wh(n.localStore,e,!0),r=new _E(e,s.Gn),a=r.bo(s.documents),o=Ts.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline"),u=r.applyChanges(a,n.isPrimaryClient,o);hd(n,t,u.Do);const c=new TE(e,t,r);return n.Oo.set(e,c),n.Fo.has(t)?n.Fo.get(t).push(e):n.Fo.set(t,[e]),u.snapshot}async function CE(n,e){const t=ve(n),i=t.Oo.get(e),s=t.Fo.get(i.targetId);if(s.length>1)return t.Fo.set(i.targetId,s.filter(r=>!Fr(r,e))),void t.Oo.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await Ja(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),Jh(t.remoteStore,i.targetId),ou(t,i.targetId)}).catch(Qa)):(ou(t,i.targetId),await Ja(t.localStore,i.targetId,!0))}async function ud(n,e){const t=ve(n);try{const i=await KI(t.localStore,e);e.targetChanges.forEach((s,r)=>{const a=t.Bo.get(r);a&&(ze(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.ko=!0:s.modifiedDocuments.size>0?ze(a.ko):s.removedDocuments.size>0&&(ze(a.ko),a.ko=!1))}),await dd(t,i,e)}catch(i){await Qa(i)}}function ld(n,e,t){const i=ve(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Oo.forEach((r,a)=>{const o=a.view.io(e);o.snapshot&&s.push(o.snapshot)}),function(r,a){const o=ve(r);o.onlineState=a;let u=!1;o.queries.forEach((c,l)=>{for(const h of l.listeners)h.io(a)&&(u=!0)}),u&&ru(o)}(i.eventManager,e),s.length&&i.$o.Rr(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function RE(n,e,t){const i=ve(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Bo.get(e),r=s&&s.key;if(r){let a=new Ct(ee.comparator);a=a.insert(r,vt.newNoDocument(r,Te.min()));const o=Le().add(r),u=new zr(Te.min(),new Map,new dt(Ae),a,o);await ud(i,u),i.Lo=i.Lo.remove(r),i.Bo.delete(e),au(i)}else await Ja(i.localStore,e,!1).then(()=>ou(i,e,t)).catch(Qa)}function ou(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Fo.get(e))n.Oo.delete(i),t&&n.$o.Go(i,t);n.Fo.delete(e),n.isPrimaryClient&&n.Uo.cs(e).forEach(i=>{n.Uo.containsKey(i)||cd(n,i)})}function cd(n,e){n.Mo.delete(e.path.canonicalString());const t=n.Lo.get(e);t!==null&&(Jh(n.remoteStore,t),n.Lo=n.Lo.remove(e),n.Bo.delete(t),au(n))}function hd(n,e,t){for(const i of t)i instanceof od?(n.Uo.addReference(i.key,e),DE(n,i)):i instanceof ad?(J("SyncEngine","Document no longer in limbo: "+i.key),n.Uo.removeReference(i.key,e),n.Uo.containsKey(i.key)||cd(n,i.key)):ce()}function DE(n,e){const t=e.key,i=t.path.canonicalString();n.Lo.get(t)||n.Mo.has(i)||(J("SyncEngine","New document in limbo: "+t),n.Mo.add(i),au(n))}function au(n){for(;n.Mo.size>0&&n.Lo.size<n.maxConcurrentLimboResolutions;){const e=n.Mo.values().next().value;n.Mo.delete(e);const t=new ee(Oe.fromString(e)),i=n.jo.next();n.Bo.set(i,new AE(t)),n.Lo=n.Lo.insert(t,i),Yh(n.remoteStore,new ni(ei(Ba(t.path)),i,2,Da.T))}}async function dd(n,e,t){const i=ve(n),s=[],r=[],a=[];i.Oo.isEmpty()||(i.Oo.forEach((o,u)=>{a.push(i.Wo(u,e,t).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(u.targetId,c.fromCache?"not-current":"current"),s.push(c);const l=Ya.kn(u.targetId,c);r.push(l)}}))}),await Promise.all(a),i.$o.Rr(s),await async function(o,u){const c=ve(o);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>B.forEach(u,h=>B.forEach(h.Nn,d=>c.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>B.forEach(h.xn,d=>c.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Ss(l))throw l;J("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const d=c.Un.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);c.Un=c.Un.insert(h,m)}}}(i.localStore,r))}async function OE(n,e){const t=ve(n);if(!t.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const i=await qh(t.localStore,e);t.currentUser=e,function(s,r){s.Ko.forEach(a=>{a.forEach(o=>{o.reject(new G(O.CANCELLED,r))})}),s.Ko.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await dd(t,i.Wn)}}function LE(n,e){const t=ve(n),i=t.Bo.get(e);if(i&&i.ko)return Le().add(i.key);{let s=Le();const r=t.Fo.get(e);if(!r)return s;for(const a of r){const o=t.Oo.get(a);s=s.unionWith(o.view.Ro)}return s}}function NE(n){const e=ve(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ud.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RE.bind(null,e),e.$o.Rr=IE.bind(null,e.eventManager),e.$o.Go=EE.bind(null,e.eventManager),e}class kE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Gr(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return WI(this.persistence,new qI,e.initialUser,this.N)}Jo(e){return new tE($a.Ns,this.N)}Ho(e){return new iE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ME{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>ld(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=OE.bind(null,this.syncEngine),await gE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new vE}createDatastore(e){const t=Gr(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new aE(s));var s;return function(r,a,o){return new cE(r,a,o)}(e.credentials,i,t)}createRemoteStore(e){return t=this.localStore,i=this.datastore,s=e.asyncQueue,r=o=>ld(this.syncEngine,o,0),a=Xh.bt()?new Xh:new sE,new dE(t,i,s,r,a);var t,i,s,r,a}createSyncEngine(e,t){return function(i,s,r,a,o,u,c){const l=new SE(i,s,r,a,o,u);return c&&(l.Qo=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ve(e);J("RemoteStore","RemoteStore shutting down."),t.Wr.add(5),await ws(t),t.zr.shutdown(),t.Hr.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class fd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class PE{constructor(e,t,i){this.credentials=e,this.asyncQueue=t,this.databaseInfo=i,this.user=Lt.UNAUTHENTICATED,this.clientId=Qc.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,async s=>{J("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const i=td(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function FE(n,e){n.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await qh(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function UE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await VE(n);J("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(s=>async function(r,a){const o=ve(r);o.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const u=Cs(o);o.Wr.add(3),await ws(o),u&&o.Hr.set("Unknown"),await o.remoteSyncer.handleCredentialChange(a),o.Wr.delete(3),await Wr(o)}(e.remoteStore,s)),n.onlineComponents=e}async function VE(n){return n.offlineComponents||(J("FirestoreClient","Using default OfflineComponentProvider"),await FE(n,new kE)),n.offlineComponents}async function BE(n){return n.onlineComponents||(J("FirestoreClient","Using default OnlineComponentProvider"),await UE(n,new ME)),n.onlineComponents}async function md(n){const e=await BE(n),t=e.eventManager;return t.onListen=bE.bind(null,e.syncEngine),t.onUnlisten=CE.bind(null,e.syncEngine),t}function HE(n,e,t={}){const i=new Dn;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,a,o,u){const c=new fd({next:h=>{r.enqueueAndForget(()=>sd(s,l));const d=h.docs.has(a);!d&&h.fromCache?u.reject(new G(O.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&o&&o.source==="server"?u.reject(new G(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new rd(Ba(a.path),c,{includeMetadataChanges:!0,fo:!0});return id(s,l)}(await md(n),n.asyncQueue,e,t,i)),i.promise}function xE(n,e,t={}){const i=new Dn;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,a,o,u){const c=new fd({next:h=>{r.enqueueAndForget(()=>sd(s,l)),h.fromCache&&o.source==="server"?u.reject(new G(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new rd(a,c,{includeMetadataChanges:!0,fo:!0});return id(s,l)}(await md(n),n.asyncQueue,e,t,i)),i.promise}class jE{constructor(e,t,i,s,r,a,o,u){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.useFetchStreams=u}}class Rs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pd=new Map;/**
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
 */function gd(n,e,t){if(!t)throw new G(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function zE(n,e,t,i){if(e===!0&&i===!0)throw new G(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function yd(n){if(!ee.isDocumentKey(n))throw new G(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function vd(n){if(ee.isDocumentKey(n))throw new G(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Kr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce()}function Xr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Kr(n);throw new G(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Id{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new G(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class uu{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Id({}),this._settingsFrozen=!1,e instanceof Rs?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new G(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rs(i.options.projectId)}(e))}get app(){if(!this._app)throw new G(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Id(e),e.credentials!==void 0&&(this._credentials=function(t){if(!t)return new zv;switch(t.type){case"gapi":const i=t.client;return ze(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Wv(i,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new G(O.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=pd.get(e);t&&(J("ComponentProvider","Removing Datastore"),pd.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class Pt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Ds{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ds(this.firestore,e,this._query)}}class Ln extends Ds{constructor(e,t,i){super(e,t,Ba(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new ee(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function _T(n,e,...t){if(n=$t(n),gd("collection","path",e),n instanceof uu){const i=Oe.fromString(e,...t);return vd(i),new Ln(n,null,i)}{if(!(n instanceof Pt||n instanceof Ln))throw new G(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Oe.fromString(e,...t));return vd(i),new Ln(n.firestore,null,i)}}function TT(n,e,...t){if(n=$t(n),arguments.length===1&&(e=Qc.I()),gd("doc","path",e),n instanceof uu){const i=Oe.fromString(e,...t);return yd(i),new Pt(n,null,new ee(i))}{if(!(n instanceof Pt||n instanceof Ln))throw new G(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Oe.fromString(e,...t));return yd(i),new Pt(n.firestore,n instanceof Ln?n.converter:null,new ee(i))}}/**
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
 */class qE{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new Qh(this,"async_queue_retry"),this.Rc=()=>{const t=eu();t&&J("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ar.tr()};const e=eu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const t=eu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const t=new Dn;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Ss(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const t=this._c.then(()=>(this.Ec=!0,e().catch(i=>{this.Tc=i,this.Ec=!1;const s=function(r){let a=r.message||"";return r.stack&&(a=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),a}(i);throw Rn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ec=!1,i))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.bc(),this.Ac.indexOf(e)>-1&&(t=0);const s=su.createAndSchedule(this,e,t,i,r=>this.Vc(r));return this.yc.push(s),s}bc(){this.Tc&&ce()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const t of this.yc)if(t.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.yc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const t=this.yc.indexOf(e);this.yc.splice(t,1)}}class lu extends uu{constructor(e,t){super(e,t),this.type="firestore",this._queue=new qE,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||_d(this),this._firestoreClient.terminate()}}function AT(n=Lu()){return yo(n,"firestore").getImmediate()}function Ed(n){return n._firestoreClient||_d(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function _d(n){var e;const t=n._freezeSettings(),i=function(s,r,a,o){return new jE(s,r,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new PE(n._credentials,n._queue,i)}/**
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
 *//**
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
 */class Td{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oi(yt.fromBase64String(e))}catch(t){throw new G(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Oi(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ad{constructor(e){this._methodName=e}}/**
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
 */class cu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
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
 */const GE=/^__.*__$/;function Sd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class hu{constructor(e,t,i,s,r,a){this.settings=e,this.databaseId=t,this.N=i,this.ignoreUndefinedProperties=s,r===void 0&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new hu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.$c({path:i,Fc:!1});return s.Mc(e),s}Lc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.$c({path:i,Fc:!1});return s.xc(),s}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return fu(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(Sd(this.kc)&&GE.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class WE{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=i||Gr(e)}jc(e,t,i,s=!1){return new hu({kc:e,methodName:t,Kc:i,path:Ht.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function KE(n){const e=n._freezeSettings(),t=Gr(n._databaseId);return new WE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function XE(n,e,t,i=!1){return du(t,n.jc(i?4:3,e))}function du(n,e){if(bd(n=$t(n)))return YE("Unsupported field value:",e,n),QE(n,e);if(n instanceof Ad)return function(t,i){if(!Sd(i.kc))throw i.Uc(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Uc(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(t,i){const s=[];let r=0;for(const a of t){let o=du(a,i.Bc(r));o==null&&(o={nullValue:"NULL_VALUE"}),s.push(o),r++}return{arrayValue:{values:s}}}(n,e)}return function(t,i){if((t=$t(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return hI(i.N,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=Bt.fromDate(t);return{timestampValue:Wa(i.N,s)}}if(t instanceof Bt){const s=new Bt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Wa(i.N,s)}}if(t instanceof cu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Oi)return{bytesValue:Mh(i.N,t._byteString)};if(t instanceof Pt){const s=i.databaseId,r=t.firestore._databaseId;if(!r.isEqual(s))throw i.Uc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ph(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i.Uc(`Unsupported field value: ${Kr(t)}`)}(n,e)}function QE(n,e){const t={};return Jc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(n,(i,s)=>{const r=du(s,e.Oc(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function bd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Bt||n instanceof cu||n instanceof Oi||n instanceof Pt||n instanceof Ad)}function YE(n,e,t){if(!bd(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=Kr(t);throw i==="an object"?e.Uc(n+" a custom object"):e.Uc(n+" "+i)}}const JE=new RegExp("[~\\*/\\[\\]]");function ZE(n,e,t){if(e.search(JE)>=0)throw fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Td(...e.split("."))._internalPath}catch{throw fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fu(n,e,t,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(r||a)&&(u+=" (found",r&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new G(O.INVALID_ARGUMENT,o+n+u)}/**
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
 */class wd{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $E(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $E extends wd{data(){return super.data()}}function mu(n,e){return typeof e=="string"?ZE(n,e):e instanceof Td?e._internalPath:e._delegate._internalPath}/**
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
 */class Os{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cd extends wd{constructor(e,t,i,s,r,a){super(e,t,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(mu("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Qr extends Cd{data(e={}){return super.data(e)}}class e_{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Os(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Qr(this._firestore,this._userDataWriter,i.key,i,new Os(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(a=>({type:"added",doc:new Qr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Os(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const o=new Qr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Os(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=r.indexOf(a.doc.key),r=r.delete(a.doc.key)),a.type!==1&&(r=r.add(a.doc),c=r.indexOf(a.doc.key)),{type:t_(a.type),doc:o,oldIndex:u,newIndex:c}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function t_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
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
 */function n_(n){if(Pr(n)&&n.explicitOrderBy.length===0)throw new G(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class i_{}function ST(n,...e){for(const t of e)n=t._apply(n);return n}class s_ extends i_{constructor(e,t,i){super(),this.Gc=e,this.zc=t,this.Hc=i,this.type="where"}_apply(e){const t=KE(e.firestore),i=function(s,r,a,o,u,c,l){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new G(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on FieldPath.documentId().`);if(c==="in"||c==="not-in"){Dd(l,c);const f=[];for(const m of l)f.push(Rd(o,s,m));h={arrayValue:{values:f}}}else h=Rd(o,s,l)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Dd(l,c),h=XE(a,r,l,c==="in"||c==="not-in");const d=wt.create(u,c,h);return function(f,m){if(m.v()){const g=lh(f);if(g!==null&&!g.isEqual(m.field))throw new G(O.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${g.toString()}' and '${m.field.toString()}'`);const v=uh(f);v!==null&&r_(f,m.field,v)}const y=function(g,v){for(const I of g.filters)if(v.indexOf(I.op)>=0)return I.op;return null}(f,function(g){switch(g){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(y!==null)throw y===m.op?new G(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new G(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${y.toString()}' filters.`)}(s,d),d}(e._query,"where",t,e.firestore._databaseId,this.Gc,this.zc,this.Hc);return new Ds(e.firestore,e.converter,function(s,r){const a=s.filters.concat([r]);return new Es(s.path,s.collectionGroup,s.explicitOrderBy.slice(),a,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,i))}}function bT(n,e,t){const i=e,s=mu("where",n);return new s_(s,i,t)}function Rd(n,e,t){if(typeof(t=$t(t))=="string"){if(t==="")throw new G(O.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!ch(e)&&t.indexOf("/")!==-1)throw new G(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Oe.fromString(t));if(!ee.isDocumentKey(i))throw new G(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return th(n,new ee(i))}if(t instanceof Pt)return th(n,t._key);throw new G(O.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kr(t)}.`)}function Dd(n,e){if(!Array.isArray(n)||n.length===0)throw new G(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new G(O.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function r_(n,e,t){if(!t.isEqual(e))throw new G(O.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */class o_{convertValue(e,t="none"){switch($n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ce()}}convertObject(e,t){const i={};return ms(e.fields,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new cu(qe(e.latitude),qe(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=$c(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(gs(e));default:return null}}convertTimestamp(e){const t=On(e);return new Bt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Oe.fromString(e);ze(jh(i));const s=new Rs(i.get(1),i.get(3)),r=new ee(i.popFirst(5));return s.isEqual(t)||Rn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 *//**
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
 */function wT(n){n=Xr(n,Pt);const e=Xr(n.firestore,lu);return HE(Ed(e),n._key).then(t=>a_(e,n,t))}class Od extends o_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,t)}}function CT(n){n=Xr(n,Ds);const e=Xr(n.firestore,lu),t=Ed(e),i=new Od(e);return n_(n._query),xE(t,n._query).then(s=>new e_(e,i,n,s))}function a_(n,e,t){const i=t.docs.get(e._key),s=new Od(n);return new Cd(n,s,e._key,i,new Os(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){Ei=t})(xi),Hi(new li("firestore",(t,{options:i})=>{const s=t.getProvider("app").getImmediate(),r=new lu(s,new qv(t.getProvider("auth-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),yn(Wc,"3.3.1",n),yn(Wc,"3.3.1","esm2017")})();var u_="firebase",l_="9.5.0";/**
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
 */yn(u_,l_,"app");/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ld={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function c_(n){return Boolean(n.document)&&typeof n.document.createElement=="function"}function Yr(n,e){if(c_(n)&&e in Ld){var t=n.document.createElement("div"),i=Ld[e],s=i.standard,r=i.prefixed,a=s in t.style;return a?s:r}return e}/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ft={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},Wt={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},Ls={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var h_=function(n){vn(e,n);function e(t){var i=n.call(this,at(at({},e.defaultAdapter),t))||this;return i.observer=null,i}return Object.defineProperty(e,"cssClasses",{get:function(){return Ft},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Wt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass(Ft.INDETERMINATE_CLASS),this.adapter.addClass(Ft.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(i){var s,r;if(!t.determinate)try{for(var a=ci(i),o=a.next();!o.done;o=a.next()){var u=o.value;u.contentRect&&t.calculateAndSetDimensions(u.contentRect.width)}}catch(c){s={error:c}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(s)throw s.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate){this.adapter.removeClass(Ft.INDETERMINATE_CLASS),this.adapter.setAttribute(Wt.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(Wt.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(Wt.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(Ft.INDETERMINATE_CLASS),this.adapter.removeAttribute(Wt.ARIA_VALUENOW),this.adapter.removeAttribute(Wt.ARIA_VALUEMAX),this.adapter.removeAttribute(Wt.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(Wt.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(Ft.CLOSED_CLASS),this.adapter.removeClass(Ft.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(Wt.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(Ft.CLOSED_CLASS),this.adapter.setAttribute(Wt.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(Ft.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(Ft.CLOSED_CLASS)&&this.adapter.addClass(Ft.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){n.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(Ft.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(Ft.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var i="scaleX("+t+")",s=typeof window!="undefined"?Yr(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(s,i)},e.prototype.setBufferBarProgress=function(t){var i=t*100+"%";this.adapter.setBufferBarStyle(Wt.FLEX_BASIS,i)},e.prototype.calculateAndSetDimensions=function(t){var i=t*Ls.PRIMARY_HALF,s=t*Ls.PRIMARY_FULL,r=t*Ls.SECONDARY_QUARTER,a=t*Ls.SECONDARY_HALF,o=t*Ls.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",i+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",s+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-o+"px"),this.restartAnimation()},e}(Gn);function d_(n){let e,t,i,s,r,a,o,u,c,l,h,d,f,m,y,g,v,I,_,M,j,b=[{class:m=ye(Pe({[n[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":n[3],"mdc-linear-progress--closed":n[4],"mdc-data-table__linear-progress":n[14]==="data-table"},n[8]))},{style:y=Object.entries(n[10]).map(Md).concat([n[2]]).join(" ")},{role:"progressbar"},{"aria-valuemin":g=0},{"aria-valuemax":v=1},{"aria-valuenow":I=n[3]?void 0:n[5]},n[9],n[16]],N={};for(let T=0;T<b.length;T+=1)N=V(N,b[T]);return{c(){e=X("div"),t=X("div"),i=X("div"),r=Rt(),a=X("div"),o=Rt(),u=X("div"),c=X("span"),h=Rt(),d=X("div"),f=X("span"),this.h()},l(T){e=Y(T,"DIV",{class:!0,style:!0,role:!0,"aria-valuemin":!0,"aria-valuemax":!0,"aria-valuenow":!0});var A=$(e);t=Y(A,"DIV",{class:!0});var k=$(t);i=Y(k,"DIV",{class:!0,style:!0}),$(i).forEach(D),r=Dt(k),a=Y(k,"DIV",{class:!0}),$(a).forEach(D),k.forEach(D),o=Dt(A),u=Y(A,"DIV",{class:!0,style:!0});var Z=$(u);c=Y(Z,"SPAN",{class:!0}),$(c).forEach(D),Z.forEach(D),h=Dt(A),d=Y(A,"DIV",{class:!0});var ie=$(d);f=Y(ie,"SPAN",{class:!0}),$(f).forEach(D),ie.forEach(D),A.forEach(D),this.h()},h(){Q(i,"class","mdc-linear-progress__buffer-bar"),Q(i,"style",s=Object.entries(n[11]).map(Nd).join(" ")),Q(a,"class","mdc-linear-progress__buffer-dots"),Q(t,"class","mdc-linear-progress__buffer"),Q(c,"class","mdc-linear-progress__bar-inner"),Q(u,"class","mdc-linear-progress__bar mdc-linear-progress__primary-bar"),Q(u,"style",l=Object.entries(n[12]).map(kd).join(" ")),Q(f,"class","mdc-linear-progress__bar-inner"),Q(d,"class","mdc-linear-progress__bar mdc-linear-progress__secondary-bar"),le(e,N)},m(T,A){ue(T,e,A),me(e,t),me(t,i),me(t,r),me(t,a),me(e,o),me(e,u),me(u,c),me(e,h),me(e,d),me(d,f),n[19](e),M||(j=[fe(_=mt.call(null,e,n[0])),fe(n[13].call(null,e)),$e(e,"transitionend",n[20])],M=!0)},p(T,[A]){A&2048&&s!==(s=Object.entries(T[11]).map(Nd).join(" "))&&Q(i,"style",s),A&4096&&l!==(l=Object.entries(T[12]).map(kd).join(" "))&&Q(u,"style",l),le(e,N=Re(b,[A&282&&m!==(m=ye(Pe({[T[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":T[3],"mdc-linear-progress--closed":T[4],"mdc-data-table__linear-progress":T[14]==="data-table"},T[8])))&&{class:m},A&1028&&y!==(y=Object.entries(T[10]).map(Md).concat([T[2]]).join(" "))&&{style:y},{role:"progressbar"},{"aria-valuemin":g},{"aria-valuemax":v},A&40&&I!==(I=T[3]?void 0:T[5])&&{"aria-valuenow":I},A&512&&T[9],A&65536&&T[16]])),_&&Fe(_.update)&&A&1&&_.update.call(null,T[0])},i:Gt,o:Gt,d(T){T&&D(e),n[19](null),M=!1,Ce(j)}}}const Nd=([n,e])=>`${n}: ${e};`,kd=([n,e])=>`${n}: ${e};`,Md=([n,e])=>`${n}: ${e};`;function f_(n,e,t){const i=["use","class","style","indeterminate","closed","progress","buffer","getElement"];let s=oe(e,i),r;const a=Be(we());let{use:o=[]}=e,{class:u=""}=e,{style:c=""}=e,{indeterminate:l=!1}=e,{closed:h=!1}=e,{progress:d=0}=e,{buffer:f=void 0}=e,m,y,g={},v={},I={},_={},M={},j=ft("SMUI:linear-progress:context"),b=ft("SMUI:linear-progress:closed");Mf(n,b,L=>t(21,r=L)),Vn(()=>(t(6,y=new h_({addClass:T,forceLayout:()=>{q().getBoundingClientRect()},setBufferBarStyle:R,setPrimaryBarStyle:z,hasClass:N,removeAttribute:Z,removeClass:A,setAttribute:k,setStyle:ie,attachResizeObserver:L=>{const te=window.ResizeObserver;if(te){const Ne=new te(L);return Ne.observe(q()),Ne}return null},getWidth:()=>q().offsetWidth})),y.init(),()=>{y.destroy()}));function N(L){return L in g?g[L]:q().classList.contains(L)}function T(L){g[L]||t(8,g[L]=!0,g)}function A(L){(!(L in g)||g[L])&&t(8,g[L]=!1,g)}function k(L,te){v[L]!==te&&t(9,v[L]=te,v)}function Z(L){(!(L in v)||v[L]!=null)&&t(9,v[L]=void 0,v)}function ie(L,te){I[L]!=te&&(te===""||te==null?(delete I[L],t(10,I)):t(10,I[L]=te,I))}function R(L,te){_[L]!=te&&(te===""||te==null?(delete _[L],t(11,_)):t(11,_[L]=te,_))}function z(L,te){M[L]!=te&&(te===""||te==null?(delete M[L],t(12,M)):t(12,M[L]=te,M))}function q(){return m}function U(L){ge[L?"unshift":"push"](()=>{m=L,t(7,m)})}const P=()=>y&&y.handleTransitionEnd();return n.$$set=L=>{e=V(V({},e),Me(L)),t(16,s=oe(e,i)),"use"in L&&t(0,o=L.use),"class"in L&&t(1,u=L.class),"style"in L&&t(2,c=L.style),"indeterminate"in L&&t(3,l=L.indeterminate),"closed"in L&&t(4,h=L.closed),"progress"in L&&t(5,d=L.progress),"buffer"in L&&t(17,f=L.buffer)},n.$$.update=()=>{n.$$.dirty&16&&b&&Pf(b,r=h,r),n.$$.dirty&72&&y&&y.isDeterminate()!==!l&&y.setDeterminate(!l),n.$$.dirty&96&&y&&y.getProgress()!==d&&y.setProgress(d),n.$$.dirty&131136&&y&&(f==null?y.setBuffer(1):y.setBuffer(f)),n.$$.dirty&80&&y&&(h?y.close():y.open())},[o,u,c,l,h,d,y,m,g,v,I,_,M,a,j,b,s,f,q,U,P]}class RT extends Ve{constructor(e){super();Ue(this,e,f_,d_,ke,{use:0,class:1,style:2,indeterminate:3,closed:4,progress:5,buffer:17,getElement:18})}get getElement(){return this.$$.ctx[18]}}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var We={DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",INPUT:"mdc-slider__input",RANGE:"mdc-slider--range",THUMB:"mdc-slider__thumb",THUMB_FOCUSED:"mdc-slider__thumb--focused",THUMB_KNOB:"mdc-slider__thumb-knob",THUMB_TOP:"mdc-slider__thumb--top",THUMB_WITH_INDICATOR:"mdc-slider__thumb--with-indicator",TICK_MARKS:"mdc-slider--tick-marks",TICK_MARKS_CONTAINER:"mdc-slider__tick-marks",TICK_MARK_ACTIVE:"mdc-slider__tick-mark--active",TICK_MARK_INACTIVE:"mdc-slider__tick-mark--inactive",TRACK:"mdc-slider__track",TRACK_ACTIVE:"mdc-slider__track--active_fill",VALUE_INDICATOR_TEXT:"mdc-slider__value-indicator-text"},Pd={STEP_SIZE:1,THUMB_UPDATE_MIN_PX:5},ot={ARIA_VALUETEXT:"aria-valuetext",INPUT_DISABLED:"disabled",INPUT_MIN:"min",INPUT_MAX:"max",INPUT_VALUE:"value",INPUT_STEP:"step"};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var m_=function(){function n(){this.rafIDs=new Map}return n.prototype.request=function(e,t){var i=this;this.cancel(e);var s=requestAnimationFrame(function(r){i.rafIDs.delete(e),t(r)});this.rafIDs.set(e,s)},n.prototype.cancel=function(e){var t=this.rafIDs.get(e);t&&(cancelAnimationFrame(t),this.rafIDs.delete(e))},n.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(t,i){e.cancel(i)})},n.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(t,i){e.push(i)}),e},n}();/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xt;(function(n){n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE"})(xt||(xt={}));var E;(function(n){n[n.START=1]="START",n[n.END=2]="END"})(E||(E={}));/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Jr;(function(n){n.SLIDER_UPDATE="slider_update"})(Jr||(Jr={}));var pu=typeof window!="undefined",p_=function(n){vn(e,n);function e(t){var i=n.call(this,at(at({},e.defaultAdapter),t))||this;return i.initialStylesRemoved=!1,i.isDisabled=!1,i.isDiscrete=!1,i.step=Pd.STEP_SIZE,i.hasTickMarks=!1,i.isRange=!1,i.thumb=null,i.downEventClientX=null,i.startThumbKnobWidth=0,i.endThumbKnobWidth=0,i.animFrame=new m_,i}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},addThumbClass:function(){},removeThumbClass:function(){},getAttribute:function(){return null},getInputValue:function(){return""},setInputValue:function(){},getInputAttribute:function(){return null},setInputAttribute:function(){return null},removeInputAttribute:function(){return null},focusInput:function(){},isInputFocused:function(){return!1},getThumbKnobWidth:function(){return 0},getThumbBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},isRTL:function(){return!1},setThumbStyleProperty:function(){},removeThumbStyleProperty:function(){},setTrackActiveStyleProperty:function(){},removeTrackActiveStyleProperty:function(){},setValueIndicatorText:function(){},getValueToAriaValueTextFn:function(){return null},updateTickMarks:function(){},setPointerCapture:function(){},emitChangeEvent:function(){},emitInputEvent:function(){},emitDragStartEvent:function(){},emitDragEndEvent:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerThumbEventHandler:function(){},deregisterThumbEventHandler:function(){},registerInputEventHandler:function(){},deregisterInputEventHandler:function(){},registerBodyEventHandler:function(){},deregisterBodyEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.isDisabled=this.adapter.hasClass(We.DISABLED),this.isDiscrete=this.adapter.hasClass(We.DISCRETE),this.hasTickMarks=this.adapter.hasClass(We.TICK_MARKS),this.isRange=this.adapter.hasClass(We.RANGE);var i=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(ot.INPUT_MIN,this.isRange?E.START:E.END),ot.INPUT_MIN),s=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(ot.INPUT_MAX,E.END),ot.INPUT_MAX),r=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(ot.INPUT_VALUE,E.END),ot.INPUT_VALUE),a=this.isRange?this.convertAttributeValueToNumber(this.adapter.getInputAttribute(ot.INPUT_VALUE,E.START),ot.INPUT_VALUE):i,o=this.adapter.getInputAttribute(ot.INPUT_STEP,E.END),u=o?this.convertAttributeValueToNumber(o,ot.INPUT_STEP):this.step;this.validateProperties({min:i,max:s,value:r,valueStart:a,step:u}),this.min=i,this.max=s,this.value=r,this.valueStart=a,this.step=u,this.numDecimalPlaces=Fd(this.step),this.valueBeforeDownEvent=r,this.valueStartBeforeDownEvent=a,this.mousedownOrTouchstartListener=this.handleMousedownOrTouchstart.bind(this),this.moveListener=this.handleMove.bind(this),this.pointerdownListener=this.handlePointerdown.bind(this),this.pointerupListener=this.handlePointerup.bind(this),this.thumbMouseenterListener=this.handleThumbMouseenter.bind(this),this.thumbMouseleaveListener=this.handleThumbMouseleave.bind(this),this.inputStartChangeListener=function(){t.handleInputChange(E.START)},this.inputEndChangeListener=function(){t.handleInputChange(E.END)},this.inputStartFocusListener=function(){t.handleInputFocus(E.START)},this.inputEndFocusListener=function(){t.handleInputFocus(E.END)},this.inputStartBlurListener=function(){t.handleInputBlur(E.START)},this.inputEndBlurListener=function(){t.handleInputBlur(E.END)},this.resizeListener=this.handleResize.bind(this),this.registerEventHandlers()},e.prototype.destroy=function(){this.deregisterEventHandlers()},e.prototype.setMin=function(t){this.min=t,this.isRange||(this.valueStart=t),this.updateUI()},e.prototype.setMax=function(t){this.max=t,this.updateUI()},e.prototype.getMin=function(){return this.min},e.prototype.getMax=function(){return this.max},e.prototype.getValue=function(){return this.value},e.prototype.setValue=function(t){if(this.isRange&&t<this.valueStart)throw new Error("end thumb value ("+t+") must be >= start thumb "+("value ("+this.valueStart+")"));this.updateValue(t,E.END)},e.prototype.getValueStart=function(){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");return this.valueStart},e.prototype.setValueStart=function(t){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");if(this.isRange&&t>this.value)throw new Error("start thumb value ("+t+") must be <= end thumb "+("value ("+this.value+")"));this.updateValue(t,E.START)},e.prototype.setStep=function(t){this.step=t,this.numDecimalPlaces=Fd(t),this.updateUI()},e.prototype.setIsDiscrete=function(t){this.isDiscrete=t,this.updateValueIndicatorUI(),this.updateTickMarksUI()},e.prototype.getStep=function(){return this.step},e.prototype.setHasTickMarks=function(t){this.hasTickMarks=t,this.updateTickMarksUI()},e.prototype.getDisabled=function(){return this.isDisabled},e.prototype.setDisabled=function(t){this.isDisabled=t,t?(this.adapter.addClass(We.DISABLED),this.isRange&&this.adapter.setInputAttribute(ot.INPUT_DISABLED,"",E.START),this.adapter.setInputAttribute(ot.INPUT_DISABLED,"",E.END)):(this.adapter.removeClass(We.DISABLED),this.isRange&&this.adapter.removeInputAttribute(ot.INPUT_DISABLED,E.START),this.adapter.removeInputAttribute(ot.INPUT_DISABLED,E.END))},e.prototype.getIsRange=function(){return this.isRange},e.prototype.layout=function(t){var i=t===void 0?{}:t,s=i.skipUpdateUI;this.rect=this.adapter.getBoundingClientRect(),this.isRange&&(this.startThumbKnobWidth=this.adapter.getThumbKnobWidth(E.START),this.endThumbKnobWidth=this.adapter.getThumbKnobWidth(E.END)),s||this.updateUI()},e.prototype.handleResize=function(){this.layout()},e.prototype.handleDown=function(t){if(!this.isDisabled){this.valueStartBeforeDownEvent=this.valueStart,this.valueBeforeDownEvent=this.value;var i=t.clientX!=null?t.clientX:t.targetTouches[0].clientX;this.downEventClientX=i;var s=this.mapClientXOnSliderScale(i);this.thumb=this.getThumbFromDownEvent(i,s),this.thumb!==null&&(this.handleDragStart(t,s,this.thumb),this.updateValue(s,this.thumb,{emitInputEvent:!0}))}},e.prototype.handleMove=function(t){if(!this.isDisabled){t.preventDefault();var i=t.clientX!=null?t.clientX:t.targetTouches[0].clientX,s=this.thumb!=null;if(this.thumb=this.getThumbFromMoveEvent(i),this.thumb!==null){var r=this.mapClientXOnSliderScale(i);s||(this.handleDragStart(t,r,this.thumb),this.adapter.emitDragStartEvent(r,this.thumb)),this.updateValue(r,this.thumb,{emitInputEvent:!0})}}},e.prototype.handleUp=function(){if(!(this.isDisabled||this.thumb===null)){var t=this.thumb===E.START?this.valueStartBeforeDownEvent:this.valueBeforeDownEvent,i=this.thumb===E.START?this.valueStart:this.value;t!==i&&this.adapter.emitChangeEvent(i,this.thumb),this.adapter.emitDragEndEvent(i,this.thumb),this.thumb=null}},e.prototype.handleThumbMouseenter=function(){!this.isDiscrete||!this.isRange||(this.adapter.addThumbClass(We.THUMB_WITH_INDICATOR,E.START),this.adapter.addThumbClass(We.THUMB_WITH_INDICATOR,E.END))},e.prototype.handleThumbMouseleave=function(){!this.isDiscrete||!this.isRange||this.adapter.isInputFocused(E.START)||this.adapter.isInputFocused(E.END)||(this.adapter.removeThumbClass(We.THUMB_WITH_INDICATOR,E.START),this.adapter.removeThumbClass(We.THUMB_WITH_INDICATOR,E.END))},e.prototype.handleMousedownOrTouchstart=function(t){var i=this,s=t.type==="mousedown"?"mousemove":"touchmove";this.adapter.registerBodyEventHandler(s,this.moveListener);var r=function(){i.handleUp(),i.adapter.deregisterBodyEventHandler(s,i.moveListener),i.adapter.deregisterEventHandler("mouseup",r),i.adapter.deregisterEventHandler("touchend",r)};this.adapter.registerBodyEventHandler("mouseup",r),this.adapter.registerBodyEventHandler("touchend",r),this.handleDown(t)},e.prototype.handlePointerdown=function(t){this.adapter.setPointerCapture(t.pointerId),this.adapter.registerEventHandler("pointermove",this.moveListener),this.handleDown(t)},e.prototype.handleInputChange=function(t){var i=Number(this.adapter.getInputValue(t));t===E.START?this.setValueStart(i):this.setValue(i),this.adapter.emitChangeEvent(t===E.START?this.valueStart:this.value,t),this.adapter.emitInputEvent(t===E.START?this.valueStart:this.value,t)},e.prototype.handleInputFocus=function(t){if(this.adapter.addThumbClass(We.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.addThumbClass(We.THUMB_WITH_INDICATOR,t),this.isRange)){var i=t===E.START?E.END:E.START;this.adapter.addThumbClass(We.THUMB_WITH_INDICATOR,i)}},e.prototype.handleInputBlur=function(t){if(this.adapter.removeThumbClass(We.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.removeThumbClass(We.THUMB_WITH_INDICATOR,t),this.isRange)){var i=t===E.START?E.END:E.START;this.adapter.removeThumbClass(We.THUMB_WITH_INDICATOR,i)}},e.prototype.handleDragStart=function(t,i,s){this.adapter.emitDragStartEvent(i,s),this.adapter.focusInput(s),t.preventDefault()},e.prototype.getThumbFromDownEvent=function(t,i){if(!this.isRange)return E.END;var s=this.adapter.getThumbBoundingClientRect(E.START),r=this.adapter.getThumbBoundingClientRect(E.END),a=t>=s.left&&t<=s.right,o=t>=r.left&&t<=r.right;return a&&o?null:a?E.START:o?E.END:i<this.valueStart?E.START:i>this.value?E.END:i-this.valueStart<=this.value-i?E.START:E.END},e.prototype.getThumbFromMoveEvent=function(t){if(this.thumb!==null)return this.thumb;if(this.downEventClientX===null)throw new Error("`downEventClientX` is null after move event.");var i=Math.abs(this.downEventClientX-t)<Pd.THUMB_UPDATE_MIN_PX;if(i)return this.thumb;var s=t<this.downEventClientX;return s?this.adapter.isRTL()?E.END:E.START:this.adapter.isRTL()?E.START:E.END},e.prototype.updateUI=function(t){this.updateThumbAndInputAttributes(t),this.updateThumbAndTrackUI(t),this.updateValueIndicatorUI(t),this.updateTickMarksUI()},e.prototype.updateThumbAndInputAttributes=function(t){if(!!t){var i=this.isRange&&t===E.START?this.valueStart:this.value,s=String(i);this.adapter.setInputAttribute(ot.INPUT_VALUE,s,t),this.isRange&&t===E.START?this.adapter.setInputAttribute(ot.INPUT_MIN,s,E.END):this.isRange&&t===E.END&&this.adapter.setInputAttribute(ot.INPUT_MAX,s,E.START),this.adapter.getInputValue(t)!==s&&this.adapter.setInputValue(s,t);var r=this.adapter.getValueToAriaValueTextFn();r&&this.adapter.setInputAttribute(ot.ARIA_VALUETEXT,r(i),t)}},e.prototype.updateValueIndicatorUI=function(t){if(!!this.isDiscrete){var i=this.isRange&&t===E.START?this.valueStart:this.value;this.adapter.setValueIndicatorText(i,t===E.START?E.START:E.END),!t&&this.isRange&&this.adapter.setValueIndicatorText(this.valueStart,E.START)}},e.prototype.updateTickMarksUI=function(){if(!(!this.isDiscrete||!this.hasTickMarks)){var t=(this.valueStart-this.min)/this.step,i=(this.value-this.valueStart)/this.step+1,s=(this.max-this.value)/this.step,r=Array.from({length:t}).fill(xt.INACTIVE),a=Array.from({length:i}).fill(xt.ACTIVE),o=Array.from({length:s}).fill(xt.INACTIVE);this.adapter.updateTickMarks(r.concat(a).concat(o))}},e.prototype.mapClientXOnSliderScale=function(t){var i=t-this.rect.left,s=i/this.rect.width;this.adapter.isRTL()&&(s=1-s);var r=this.min+s*(this.max-this.min);return r===this.max||r===this.min?r:Number(this.quantize(r).toFixed(this.numDecimalPlaces))},e.prototype.quantize=function(t){var i=Math.round((t-this.min)/this.step);return this.min+i*this.step},e.prototype.updateValue=function(t,i,s){var r=s===void 0?{}:s,a=r.emitInputEvent;if(t=this.clampValue(t,i),this.isRange&&i===E.START){if(this.valueStart===t)return;this.valueStart=t}else{if(this.value===t)return;this.value=t}this.updateUI(i),a&&this.adapter.emitInputEvent(i===E.START?this.valueStart:this.value,i)},e.prototype.clampValue=function(t,i){t=Math.min(Math.max(t,this.min),this.max);var s=this.isRange&&i===E.START&&t>this.value;if(s)return this.value;var r=this.isRange&&i===E.END&&t<this.valueStart;return r?this.valueStart:t},e.prototype.updateThumbAndTrackUI=function(t){var i=this,s=this,r=s.max,a=s.min,o=(this.value-this.valueStart)/(r-a),u=o*this.rect.width,c=this.adapter.isRTL(),l=pu?Yr(window,"transform"):"transform";if(this.isRange){var h=this.adapter.isRTL()?(r-this.value)/(r-a)*this.rect.width:(this.valueStart-a)/(r-a)*this.rect.width,d=h+u;this.animFrame.request(Jr.SLIDER_UPDATE,function(){var f=!c&&t===E.START||c&&t!==E.START;f?(i.adapter.setTrackActiveStyleProperty("transform-origin","right"),i.adapter.setTrackActiveStyleProperty("left","unset"),i.adapter.setTrackActiveStyleProperty("right",i.rect.width-d+"px")):(i.adapter.setTrackActiveStyleProperty("transform-origin","left"),i.adapter.setTrackActiveStyleProperty("right","unset"),i.adapter.setTrackActiveStyleProperty("left",h+"px")),i.adapter.setTrackActiveStyleProperty(l,"scaleX("+o+")");var m=c?d:h,y=i.adapter.isRTL()?h:d;(t===E.START||!t||!i.initialStylesRemoved)&&i.adapter.setThumbStyleProperty(l,"translateX("+m+"px)",E.START),(t===E.END||!t||!i.initialStylesRemoved)&&i.adapter.setThumbStyleProperty(l,"translateX("+y+"px)",E.END),i.removeInitialStyles(c),i.updateOverlappingThumbsUI(m,y,t)})}else this.animFrame.request(Jr.SLIDER_UPDATE,function(){var f=c?i.rect.width-u:u;i.adapter.setThumbStyleProperty(l,"translateX("+f+"px)",E.END),i.adapter.setTrackActiveStyleProperty(l,"scaleX("+o+")"),i.removeInitialStyles(c)})},e.prototype.removeInitialStyles=function(t){if(!this.initialStylesRemoved){var i=t?"right":"left";this.adapter.removeThumbStyleProperty(i,E.END),this.isRange&&this.adapter.removeThumbStyleProperty(i,E.START),this.initialStylesRemoved=!0,this.resetTrackAndThumbAnimation()}},e.prototype.resetTrackAndThumbAnimation=function(){var t=this;if(!!this.isDiscrete){var i=pu?Yr(window,"transition"):"transition",s="all 0s ease 0s";this.adapter.setThumbStyleProperty(i,s,E.END),this.isRange&&this.adapter.setThumbStyleProperty(i,s,E.START),this.adapter.setTrackActiveStyleProperty(i,s),requestAnimationFrame(function(){t.adapter.removeThumbStyleProperty(i,E.END),t.adapter.removeTrackActiveStyleProperty(i),t.isRange&&t.adapter.removeThumbStyleProperty(i,E.START)})}},e.prototype.updateOverlappingThumbsUI=function(t,i,s){var r=!1;if(this.adapter.isRTL()){var a=t-this.startThumbKnobWidth/2,o=i+this.endThumbKnobWidth/2;r=o>=a}else{var u=t+this.startThumbKnobWidth/2,c=i-this.endThumbKnobWidth/2;r=u>=c}r?(this.adapter.addThumbClass(We.THUMB_TOP,s||E.END),this.adapter.removeThumbClass(We.THUMB_TOP,s===E.START?E.END:E.START)):(this.adapter.removeThumbClass(We.THUMB_TOP,E.START),this.adapter.removeThumbClass(We.THUMB_TOP,E.END))},e.prototype.convertAttributeValueToNumber=function(t,i){if(t===null)throw new Error("MDCSliderFoundation: `"+i+"` must be non-null.");var s=Number(t);if(isNaN(s))throw new Error("MDCSliderFoundation: `"+i+"` value is "+("`"+t+"`, but must be a number."));return s},e.prototype.validateProperties=function(t){var i=t.min,s=t.max,r=t.value,a=t.valueStart,o=t.step;if(i>=s)throw new Error("MDCSliderFoundation: min must be strictly less than max. "+("Current: [min: "+i+", max: "+s+"]"));if(o<=0)throw new Error("MDCSliderFoundation: step must be a positive number. "+("Current step: "+this.step));if(this.isRange){if(r<i||r>s||a<i||a>s)throw new Error("MDCSliderFoundation: values must be in [min, max] range. "+("Current values: [start value: "+a+", end value: "+r+"]"));if(a>r)throw new Error("MDCSliderFoundation: start value must be <= end value. "+("Current values: [start value: "+a+", end value: "+r+"]"));var u=(a-i)/o,c=(r-i)/o;if(u%1!=0||c%1!=0)throw new Error("MDCSliderFoundation: Slider values must be valid based on the "+("step value. Current values: [start value: "+a+", ")+("end value: "+r+"]"))}else{if(r<i||r>s)throw new Error("MDCSliderFoundation: value must be in [min, max] range. "+("Current value: "+r));var c=(r-i)/o;if(c%1!=0)throw new Error("MDCSliderFoundation: Slider value must be valid based on the "+("step value. Current value: "+r))}},e.prototype.registerEventHandlers=function(){this.adapter.registerWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.registerEventHandler("pointerdown",this.pointerdownListener),this.adapter.registerEventHandler("pointerup",this.pointerupListener)):(this.adapter.registerEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.registerEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.registerThumbEventHandler(E.START,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(E.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(E.START,"change",this.inputStartChangeListener),this.adapter.registerInputEventHandler(E.START,"focus",this.inputStartFocusListener),this.adapter.registerInputEventHandler(E.START,"blur",this.inputStartBlurListener)),this.adapter.registerThumbEventHandler(E.END,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(E.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(E.END,"change",this.inputEndChangeListener),this.adapter.registerInputEventHandler(E.END,"focus",this.inputEndFocusListener),this.adapter.registerInputEventHandler(E.END,"blur",this.inputEndBlurListener)},e.prototype.deregisterEventHandlers=function(){this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.deregisterEventHandler("pointerdown",this.pointerdownListener),this.adapter.deregisterEventHandler("pointerup",this.pointerupListener)):(this.adapter.deregisterEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.deregisterEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.deregisterThumbEventHandler(E.START,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(E.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(E.START,"change",this.inputStartChangeListener),this.adapter.deregisterInputEventHandler(E.START,"focus",this.inputStartFocusListener),this.adapter.deregisterInputEventHandler(E.START,"blur",this.inputStartBlurListener)),this.adapter.deregisterThumbEventHandler(E.END,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(E.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(E.END,"change",this.inputEndChangeListener),this.adapter.deregisterInputEventHandler(E.END,"focus",this.inputEndFocusListener),this.adapter.deregisterInputEventHandler(E.END,"blur",this.inputEndBlurListener)},e.prototype.handlePointerup=function(){this.handleUp(),this.adapter.deregisterEventHandler("pointermove",this.moveListener)},e.SUPPORTS_POINTER_EVENTS=pu&&Boolean(window.PointerEvent)&&!g_(),e}(Gn);function g_(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}function Fd(n){var e=/(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(n));if(!e)return 0;var t=e[1]||"",i=e[2]||0;return Math.max(0,(t==="0"?0:t.length)-Number(i))}function Ud(n,e,t){const i=n.slice();return i[90]=e[t],i}function y_(n){let e,t,i,s,r=[{class:t=ye({[n[12]]:!0,"mdc-slider__input":!0})},{type:"range"},{disabled:n[5]},{step:n[9]},{min:n[10]},{max:n[11]},n[32],n[23],mi(n[36],"input$")],a={};for(let o=0;o<r.length;o+=1)a=V(a,r[o]);return{c(){e=X("input"),this.h()},l(o){e=Y(o,"INPUT",{class:!0,type:!0,step:!0,min:!0,max:!0}),this.h()},h(){le(e,a)},m(o,u){ue(o,e,u),e.autofocus&&e.focus(),n[60](e),ri(e,n[0]),i||(s=[$e(e,"change",n[61]),$e(e,"input",n[61]),$e(e,"blur",n[54]),$e(e,"focus",n[55])],i=!0)},p(o,u){le(e,a=Re(r,[u[0]&4096&&t!==(t=ye({[o[12]]:!0,"mdc-slider__input":!0}))&&{class:t},{type:"range"},u[0]&32&&{disabled:o[5]},u[0]&512&&{step:o[9]},u[0]&1024&&{min:o[10]},u[0]&2048&&{max:o[11]},o[32],u[0]&8388608&&o[23],u[1]&32&&mi(o[36],"input$")])),u[0]&1&&ri(e,o[0])},d(o){o&&D(e),n[60](null),i=!1,Ce(s)}}}function v_(n){let e,t,i,s,r,a,o,u=[{class:t=ye({[n[12]]:!0,"mdc-slider__input":!0})},{type:"range"},{disabled:n[5]},{step:n[9]},{min:n[10]},{max:n[2]},n[24],mi(n[36],"input$")],c={};for(let d=0;d<u.length;d+=1)c=V(c,u[d]);let l=[{class:r=ye({[n[12]]:!0,"mdc-slider__input":!0})},{type:"range"},{disabled:n[5]},{step:n[9]},{min:n[1]},{max:n[11]},n[32],n[23],mi(n[36],"input$")],h={};for(let d=0;d<l.length;d+=1)h=V(h,l[d]);return{c(){e=X("input"),i=Rt(),s=X("input"),this.h()},l(d){e=Y(d,"INPUT",{class:!0,type:!0,step:!0,min:!0,max:!0}),i=Dt(d),s=Y(d,"INPUT",{class:!0,type:!0,step:!0,min:!0,max:!0}),this.h()},h(){le(e,c),le(s,h)},m(d,f){ue(d,e,f),e.autofocus&&e.focus(),n[56](e),ri(e,n[1]),ue(d,i,f),ue(d,s,f),s.autofocus&&s.focus(),n[58](s),ri(s,n[2]),a||(o=[$e(e,"change",n[57]),$e(e,"input",n[57]),$e(e,"blur",n[52]),$e(e,"focus",n[53]),$e(s,"change",n[59]),$e(s,"input",n[59]),$e(s,"blur",n[50]),$e(s,"focus",n[51])],a=!0)},p(d,f){le(e,c=Re(u,[f[0]&4096&&t!==(t=ye({[d[12]]:!0,"mdc-slider__input":!0}))&&{class:t},{type:"range"},f[0]&32&&{disabled:d[5]},f[0]&512&&{step:d[9]},f[0]&1024&&{min:d[10]},f[0]&4&&{max:d[2]},f[0]&16777216&&d[24],f[1]&32&&mi(d[36],"input$")])),f[0]&2&&ri(e,d[1]),le(s,h=Re(l,[f[0]&4096&&r!==(r=ye({[d[12]]:!0,"mdc-slider__input":!0}))&&{class:r},{type:"range"},f[0]&32&&{disabled:d[5]},f[0]&512&&{step:d[9]},f[0]&2&&{min:d[1]},f[0]&2048&&{max:d[11]},d[32],f[0]&8388608&&d[23],f[1]&32&&mi(d[36],"input$")])),f[0]&4&&ri(s,d[2])},d(d){d&&D(e),n[56](null),d&&D(i),d&&D(s),n[58](null),a=!1,Ce(o)}}}function Vd(n){let e,t=n[30],i=[];for(let s=0;s<t.length;s+=1)i[s]=Bd(Ud(n,t,s));return{c(){e=X("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=Y(s,"DIV",{class:!0});var r=$(e);for(let a=0;a<i.length;a+=1)i[a].l(r);r.forEach(D),this.h()},h(){Q(e,"class","mdc-slider__tick-marks")},m(s,r){ue(s,e,r);for(let a=0;a<i.length;a+=1)i[a].m(e,null)},p(s,r){if(r[0]&1073741824){t=s[30];let a;for(a=0;a<t.length;a+=1){const o=Ud(s,t,a);i[a]?i[a].p(o,r):(i[a]=Bd(o),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=t.length}},d(s){s&&D(e),Hf(i,s)}}}function Bd(n){let e,t;return{c(){e=X("div"),this.h()},l(i){e=Y(i,"DIV",{class:!0}),$(e).forEach(D),this.h()},h(){Q(e,"class",t=n[90]===xt.ACTIVE?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive")},m(i,s){ue(i,e,s)},p(i,s){s[0]&1073741824&&t!==(t=i[90]===xt.ACTIVE?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive")&&Q(e,"class",t)},d(i){i&&D(e)}}}function I_(n){let e,t,i,s,r,a,o,u,c=n[7]&&Hd(n);return{c(){e=X("div"),c&&c.c(),t=Rt(),i=X("div"),this.h()},l(l){e=Y(l,"DIV",{class:!0,style:!0});var h=$(e);c&&c.l(h),t=Dt(h),i=Y(h,"DIV",{class:!0}),$(i).forEach(D),h.forEach(D),this.h()},h(){Q(i,"class","mdc-slider__thumb-knob"),Q(e,"class",s=ye(Pe({"mdc-slider__thumb":!0},n[22]))),Q(e,"style",r=Object.entries(n[26]).map(Wd).join(" "))},m(l,h){ue(l,e,h),c&&c.m(e,null),me(e,t),me(e,i),n[72](i),n[73](e),o||(u=fe(a=Wn.call(null,e,{unbounded:!0,disabled:n[5],active:n[28],eventTarget:n[14],activeTarget:n[14],addClass:n[74],removeClass:n[75],addStyle:n[76]})),o=!0)},p(l,h){l[7]?c?c.p(l,h):(c=Hd(l),c.c(),c.m(e,t)):c&&(c.d(1),c=null),h[0]&4194304&&s!==(s=ye(Pe({"mdc-slider__thumb":!0},l[22])))&&Q(e,"class",s),h[0]&67108864&&r!==(r=Object.entries(l[26]).map(Wd).join(" "))&&Q(e,"style",r),a&&Fe(a.update)&&h[0]&268451872&&a.update.call(null,{unbounded:!0,disabled:l[5],active:l[28],eventTarget:l[14],activeTarget:l[14],addClass:l[74],removeClass:l[75],addStyle:l[76]})},d(l){l&&D(e),c&&c.d(),n[72](null),n[73](null),o=!1,u()}}}function E_(n){let e,t,i,s,r,a,o,u,c,l,h,d,f,m,y,g=n[7]&&xd(n),v=n[7]&&jd(n);return{c(){e=X("div"),g&&g.c(),t=Rt(),i=X("div"),o=Rt(),u=X("div"),v&&v.c(),c=Rt(),l=X("div"),this.h()},l(I){e=Y(I,"DIV",{class:!0,style:!0});var _=$(e);g&&g.l(_),t=Dt(_),i=Y(_,"DIV",{class:!0}),$(i).forEach(D),_.forEach(D),o=Dt(I),u=Y(I,"DIV",{class:!0,style:!0});var M=$(u);v&&v.l(M),c=Dt(M),l=Y(M,"DIV",{class:!0}),$(l).forEach(D),M.forEach(D),this.h()},h(){Q(i,"class","mdc-slider__thumb-knob"),Q(e,"class",s=ye(Pe({"mdc-slider__thumb":!0},n[21]))),Q(e,"style",r=Object.entries(n[27]).map(qd).join(" ")),Q(l,"class","mdc-slider__thumb-knob"),Q(u,"class",h=ye(Pe({"mdc-slider__thumb":!0},n[22]))),Q(u,"style",d=Object.entries(n[26]).map(Gd).join(" "))},m(I,_){ue(I,e,_),g&&g.m(e,null),me(e,t),me(e,i),n[62](i),n[63](e),ue(I,o,_),ue(I,u,_),v&&v.m(u,null),me(u,c),me(u,l),n[67](l),n[68](u),m||(y=[fe(a=Wn.call(null,e,{unbounded:!0,disabled:n[5],active:n[29],eventTarget:n[15],activeTarget:n[15],addClass:n[64],removeClass:n[65],addStyle:n[66]})),fe(f=Wn.call(null,u,{unbounded:!0,disabled:n[5],active:n[28],eventTarget:n[14],activeTarget:n[14],addClass:n[69],removeClass:n[70],addStyle:n[71]}))],m=!0)},p(I,_){I[7]?g?g.p(I,_):(g=xd(I),g.c(),g.m(e,t)):g&&(g.d(1),g=null),_[0]&2097152&&s!==(s=ye(Pe({"mdc-slider__thumb":!0},I[21])))&&Q(e,"class",s),_[0]&134217728&&r!==(r=Object.entries(I[27]).map(qd).join(" "))&&Q(e,"style",r),a&&Fe(a.update)&&_[0]&536903712&&a.update.call(null,{unbounded:!0,disabled:I[5],active:I[29],eventTarget:I[15],activeTarget:I[15],addClass:I[64],removeClass:I[65],addStyle:I[66]}),I[7]?v?v.p(I,_):(v=jd(I),v.c(),v.m(u,c)):v&&(v.d(1),v=null),_[0]&4194304&&h!==(h=ye(Pe({"mdc-slider__thumb":!0},I[22])))&&Q(u,"class",h),_[0]&67108864&&d!==(d=Object.entries(I[26]).map(Gd).join(" "))&&Q(u,"style",d),f&&Fe(f.update)&&_[0]&268451872&&f.update.call(null,{unbounded:!0,disabled:I[5],active:I[28],eventTarget:I[14],activeTarget:I[14],addClass:I[69],removeClass:I[70],addStyle:I[71]})},d(I){I&&D(e),g&&g.d(),n[62](null),n[63](null),I&&D(o),I&&D(u),v&&v.d(),n[67](null),n[68](null),m=!1,Ce(y)}}}function Hd(n){let e,t,i,s;return{c(){e=X("div"),t=X("div"),i=X("span"),s=si(n[0]),this.h()},l(r){e=Y(r,"DIV",{class:!0,"aria-hidden":!0});var a=$(e);t=Y(a,"DIV",{class:!0});var o=$(t);i=Y(o,"SPAN",{class:!0});var u=$(i);s=Fs(u,n[0]),u.forEach(D),o.forEach(D),a.forEach(D),this.h()},h(){Q(i,"class","mdc-slider__value-indicator-text"),Q(t,"class","mdc-slider__value-indicator"),Q(e,"class","mdc-slider__value-indicator-container"),Q(e,"aria-hidden","true")},m(r,a){ue(r,e,a),me(e,t),me(t,i),me(i,s)},p(r,a){a[0]&1&&ro(s,r[0])},d(r){r&&D(e)}}}function xd(n){let e,t,i,s;return{c(){e=X("div"),t=X("div"),i=X("span"),s=si(n[1]),this.h()},l(r){e=Y(r,"DIV",{class:!0,"aria-hidden":!0});var a=$(e);t=Y(a,"DIV",{class:!0});var o=$(t);i=Y(o,"SPAN",{class:!0});var u=$(i);s=Fs(u,n[1]),u.forEach(D),o.forEach(D),a.forEach(D),this.h()},h(){Q(i,"class","mdc-slider__value-indicator-text"),Q(t,"class","mdc-slider__value-indicator"),Q(e,"class","mdc-slider__value-indicator-container"),Q(e,"aria-hidden","true")},m(r,a){ue(r,e,a),me(e,t),me(t,i),me(i,s)},p(r,a){a[0]&2&&ro(s,r[1])},d(r){r&&D(e)}}}function jd(n){let e,t,i,s;return{c(){e=X("div"),t=X("div"),i=X("span"),s=si(n[2]),this.h()},l(r){e=Y(r,"DIV",{class:!0,"aria-hidden":!0});var a=$(e);t=Y(a,"DIV",{class:!0});var o=$(t);i=Y(o,"SPAN",{class:!0});var u=$(i);s=Fs(u,n[2]),u.forEach(D),o.forEach(D),a.forEach(D),this.h()},h(){Q(i,"class","mdc-slider__value-indicator-text"),Q(t,"class","mdc-slider__value-indicator"),Q(e,"class","mdc-slider__value-indicator-container"),Q(e,"aria-hidden","true")},m(r,a){ue(r,e,a),me(e,t),me(t,i),me(i,s)},p(r,a){a[0]&4&&ro(s,r[2])},d(r){r&&D(e)}}}function __(n){let e,t,i,s,r,a,o,u,c,l,h,d,f,m;function y(T,A){return T[6]?v_:y_}let g=y(n),v=g(n),I=n[7]&&n[8]&&n[9]>0&&Vd(n);function _(T,A){return T[6]?E_:I_}let M=_(n),j=M(n),b=[{class:h=Object.entries(Pe({[n[4]]:!0,"mdc-slider":!0,"mdc-slider--range":n[6],"mdc-slider--discrete":n[7],"mdc-slider--tick-marks":n[7]&&n[8],"mdc-slider--disabled":n[5]},n[20])).filter(Kd).map(Xd).join(" ")},_l(n[36],["input$"])],N={};for(let T=0;T<b.length;T+=1)N=V(N,b[T]);return{c(){e=X("div"),v.c(),t=Rt(),i=X("div"),s=X("div"),r=Rt(),a=X("div"),o=X("div"),c=Rt(),I&&I.c(),l=Rt(),j.c(),this.h()},l(T){e=Y(T,"DIV",{class:!0});var A=$(e);v.l(A),t=Dt(A),i=Y(A,"DIV",{class:!0});var k=$(i);s=Y(k,"DIV",{class:!0}),$(s).forEach(D),r=Dt(k),a=Y(k,"DIV",{class:!0});var Z=$(a);o=Y(Z,"DIV",{class:!0,style:!0}),$(o).forEach(D),Z.forEach(D),c=Dt(k),I&&I.l(k),k.forEach(D),l=Dt(A),j.l(A),A.forEach(D),this.h()},h(){Q(s,"class","mdc-slider__track--inactive"),Q(o,"class","mdc-slider__track--active_fill"),Q(o,"style",u=Object.entries(n[25]).map(zd).join(" ")),Q(a,"class","mdc-slider__track--active"),Q(i,"class","mdc-slider__track"),le(e,N)},m(T,A){ue(T,e,A),v.m(e,null),me(e,t),me(e,i),me(i,s),me(i,r),me(i,a),me(a,o),me(i,c),I&&I.m(i,null),me(e,l),j.m(e,null),n[77](e),f||(m=[fe(d=mt.call(null,e,n[3])),fe(n[31].call(null,e))],f=!0)},p(T,A){g===(g=y(T))&&v?v.p(T,A):(v.d(1),v=g(T),v&&(v.c(),v.m(e,t))),A[0]&33554432&&u!==(u=Object.entries(T[25]).map(zd).join(" "))&&Q(o,"style",u),T[7]&&T[8]&&T[9]>0?I?I.p(T,A):(I=Vd(T),I.c(),I.m(i,null)):I&&(I.d(1),I=null),M===(M=_(T))&&j?j.p(T,A):(j.d(1),j=M(T),j&&(j.c(),j.m(e,null))),le(e,N=Re(b,[A[0]&1049072&&h!==(h=Object.entries(Pe({[T[4]]:!0,"mdc-slider":!0,"mdc-slider--range":T[6],"mdc-slider--discrete":T[7],"mdc-slider--tick-marks":T[7]&&T[8],"mdc-slider--disabled":T[5]},T[20])).filter(Kd).map(Xd).join(" "))&&{class:h},A[1]&32&&_l(T[36],["input$"])])),d&&Fe(d.update)&&A[0]&8&&d.update.call(null,T[3])},i:Gt,o:Gt,d(T){T&&D(e),v.d(),I&&I.d(),j.d(),n[77](null),f=!1,Ce(m)}}}const zd=([n,e])=>`${n}: ${e};`,qd=([n,e])=>`${n}: ${e};`,Gd=([n,e])=>`${n}: ${e};`,Wd=([n,e])=>`${n}: ${e};`,Kd=([n,e])=>n!==""&&e,Xd=([n])=>n;function T_(n,e,t){const i=["use","class","disabled","range","discrete","tickMarks","step","min","max","value","start","end","valueToAriaValueTextFn","input$class","layout","getId","getElement"];let s=oe(e,i);var r;const a=Be(we());let{use:o=[]}=e,{class:u=""}=e,{disabled:c=!1}=e,{range:l=!1}=e,{discrete:h=!1}=e,{tickMarks:d=!1}=e,{step:f=1}=e,{min:m=0}=e,{max:y=100}=e,{value:g=void 0}=e,{start:v=void 0}=e,{end:I=void 0}=e,{valueToAriaValueTextFn:_=p=>`${p}`}=e,{input$class:M=""}=e,j,b,N,T,A,k,Z,ie,R={},z={},q={},U={},P={},L={},te={},Ne={},Ut=!1,jt=!1,zt,Kt=(r=ft("SMUI:generic:input:props"))!==null&&r!==void 0?r:{},mn=ft("SMUI:addLayoutListener"),Xt,Se=m,F=y,de=f,Ke=h,pn=d;if(d&&f>0){const p=y+Math.abs(m);if(l&&typeof v=="number"&&typeof I=="number"){const C=v+Math.abs(m),K=I+Math.abs(m);zt=[...Array(C/f).map(()=>xt.INACTIVE),...Array(p/f-C/f-(p-K)/f+1).map(()=>xt.ACTIVE),...Array((p-K)/f).map(()=>xt.INACTIVE)]}else if(typeof g=="number"){const C=g+Math.abs(m);zt=[...Array(C/f+1).map(()=>xt.ACTIVE),...Array((p-C)/f).map(()=>xt.INACTIVE)]}}if(l&&typeof v=="number"&&typeof I=="number"){const p=(I-v)/(y-m),C=v/(y-m),K=I/(y-m);L.transform=`scaleX(${p})`,te.left=`calc(${K*100}% -24px)`,Ne.left=`calc(${C*100}% -24px)`}else if(typeof g=="number"){const p=g/(y-m);L.transform=`scaleX(${p})`,te.left=`calc(${p*100}% -24px)`}mn&&(Xt=mn(ks));let rn=g,w=v,re=I;Vn(()=>{t(41,b=new p_({hasClass:xe,addClass:kt,removeClass:Pn,addThumbClass:Qt,removeThumbClass:Fn,getAttribute:C=>x().getAttribute(C),getInputValue:C=>{var K;return`${(K=l?C===E.START?v:I:g)!==null&&K!==void 0?K:0}`},setInputValue:(C,K)=>{l?K===E.START?(t(1,v=Number(C)),t(48,w=v)):(t(2,I=Number(C)),t(49,re=I)):(t(0,g=Number(C)),t(47,rn=g))},getInputAttribute:Yt,setInputAttribute:$r,removeInputAttribute:eo,focusInput:C=>{l&&C===E.START&&T?T.focus():N.focus()},isInputFocused:C=>(l&&C===E.START?T:N)===document.activeElement,getThumbKnobWidth:C=>{var K;return((K=l&&C===E.START?ie:Z)!==null&&K!==void 0?K:Z).getBoundingClientRect().width},getThumbBoundingClientRect:C=>{var K;return((K=l&&C===E.START?k:A)!==null&&K!==void 0?K:A).getBoundingClientRect()},getBoundingClientRect:()=>x().getBoundingClientRect(),isRTL:()=>getComputedStyle(x()).direction==="rtl",setThumbStyleProperty:gn,removeThumbStyleProperty:Zr,setTrackActiveStyleProperty:to,removeTrackActiveStyleProperty:no,setValueIndicatorText:(C,K)=>{},getValueToAriaValueTextFn:()=>_,updateTickMarks:C=>{t(30,zt=C)},setPointerCapture:C=>{x().setPointerCapture(C)},emitChangeEvent:(C,K)=>{it(x(),"SMUISlider:change",{value:C,thumb:K},void 0,!0)},emitInputEvent:(C,K)=>{it(x(),"SMUISlider:input",{value:C,thumb:K},void 0,!0)},emitDragStartEvent:(C,K)=>{l&&K===E.START?t(29,jt=!0):t(28,Ut=!0)},emitDragEndEvent:(C,K)=>{l&&K===E.START?t(29,jt=!1):t(28,Ut=!1)},registerEventHandler:(C,K)=>{x().addEventListener(C,K)},deregisterEventHandler:(C,K)=>{x().removeEventListener(C,K)},registerThumbEventHandler:(C,K,qt)=>{var Xe;(Xe=l&&C===E.START?k:A)===null||Xe===void 0||Xe.addEventListener(K,qt)},deregisterThumbEventHandler:(C,K,qt)=>{var Xe;(Xe=l&&C===E.START?k:A)===null||Xe===void 0||Xe.removeEventListener(K,qt)},registerInputEventHandler:(C,K,qt)=>{var Xe;(Xe=l&&C===E.START?T:N)===null||Xe===void 0||Xe.addEventListener(K,qt)},deregisterInputEventHandler:(C,K,qt)=>{var Xe;(Xe=l&&C===E.START?T:N)===null||Xe===void 0||Xe.removeEventListener(K,qt)},registerBodyEventHandler:(C,K)=>{document.body.addEventListener(C,K)},deregisterBodyEventHandler:(C,K)=>{document.body.removeEventListener(C,K)},registerWindowEventHandler:(C,K)=>{window.addEventListener(C,K)},deregisterWindowEventHandler:(C,K)=>{window.removeEventListener(C,K)}}));const p={get element(){return x()},activateRipple(){c||t(28,Ut=!0)},deactivateRipple(){t(28,Ut=!1)}};return it(j,"SMUIGenericInput:mount",p),b.init(),b.layout({skipUpdateUI:!0}),()=>{it(j,"SMUIGenericInput:unmount",p),b.destroy()}}),oi(()=>{Xt&&Xt()});function xe(p){return p in R?R[p]:x().classList.contains(p)}function kt(p){R[p]||t(20,R[p]=!0,R)}function Pn(p){(!(p in R)||R[p])&&t(20,R[p]=!1,R)}function Qt(p,C){l&&C===E.START?z[p]||t(21,z[p]=!0,z):q[p]||t(22,q[p]=!0,q)}function Fn(p,C){l&&C===E.START?(!(p in z)||z[p])&&t(21,z[p]=!1,z):(!(p in q)||q[p])&&t(22,q[p]=!1,q)}function gn(p,C,K){l&&K===E.START?Ne[p]!=C&&(C===""||C==null?(delete Ne[p],t(27,Ne)):t(27,Ne[p]=C,Ne)):te[p]!=C&&(C===""||C==null?(delete te[p],t(26,te)):t(26,te[p]=C,te))}function Zr(p,C){l&&C===E.START?p in Ne&&(delete Ne[p],t(27,Ne)):p in te&&(delete te[p],t(26,te))}function Yt(p,C){var K,qt,Xe;return l&&C===E.START?p==="value"?`${v}`:p in P?(K=P[p])!==null&&K!==void 0?K:null:(qt=T==null?void 0:T.getAttribute(p))!==null&&qt!==void 0?qt:null:p==="value"?`${l?I:g}`:p in U?(Xe=U[p])!==null&&Xe!==void 0?Xe:null:N.getAttribute(p)}function $r(p,C,K){l&&K===E.START?P[p]!==C&&t(24,P[p]=C,P):U[p]!==C&&t(23,U[p]=C,U)}function eo(p,C){l&&C===E.START?(!(p in P)||P[p]!=null)&&t(24,P[p]=void 0,P):(!(p in U)||U[p]!=null)&&t(23,U[p]=void 0,U)}function to(p,C){L[p]!=C&&(C===""||C==null?(delete L[p],t(25,L)):t(25,L[p]=C,L))}function no(p){p in L&&(delete L[p],t(25,L))}function ks(){return b.layout()}function S(){return Kt&&Kt.id}function x(){return j}function W(p){Bn.call(this,n,p)}function be(p){Bn.call(this,n,p)}function Un(p){Bn.call(this,n,p)}function io(p){Bn.call(this,n,p)}function rf(p){Bn.call(this,n,p)}function of(p){Bn.call(this,n,p)}function af(p){ge[p?"unshift":"push"](()=>{T=p,t(15,T)})}function uf(){v=so(this.value),t(1,v)}function lf(p){ge[p?"unshift":"push"](()=>{N=p,t(14,N)})}function cf(){I=so(this.value),t(2,I)}function hf(p){ge[p?"unshift":"push"](()=>{N=p,t(14,N)})}function df(){g=so(this.value),t(0,g)}function ff(p){ge[p?"unshift":"push"](()=>{ie=p,t(19,ie)})}function mf(p){ge[p?"unshift":"push"](()=>{k=p,t(17,k)})}const pf=p=>Qt(p,E.START),gf=p=>Fn(p,E.START),yf=(p,C)=>gn(p,C,E.START);function vf(p){ge[p?"unshift":"push"](()=>{Z=p,t(18,Z)})}function If(p){ge[p?"unshift":"push"](()=>{A=p,t(16,A)})}const Ef=p=>Qt(p,E.END),_f=p=>Fn(p,E.END),Tf=(p,C)=>gn(p,C,E.END);function Af(p){ge[p?"unshift":"push"](()=>{Z=p,t(18,Z)})}function Sf(p){ge[p?"unshift":"push"](()=>{A=p,t(16,A)})}const bf=p=>Qt(p,E.END),wf=p=>Fn(p,E.END),Cf=(p,C)=>gn(p,C,E.END);function Rf(p){ge[p?"unshift":"push"](()=>{j=p,t(13,j)})}return n.$$set=p=>{e=V(V({},e),Me(p)),t(36,s=oe(e,i)),"use"in p&&t(3,o=p.use),"class"in p&&t(4,u=p.class),"disabled"in p&&t(5,c=p.disabled),"range"in p&&t(6,l=p.range),"discrete"in p&&t(7,h=p.discrete),"tickMarks"in p&&t(8,d=p.tickMarks),"step"in p&&t(9,f=p.step),"min"in p&&t(10,m=p.min),"max"in p&&t(11,y=p.max),"value"in p&&t(0,g=p.value),"start"in p&&t(1,v=p.start),"end"in p&&t(2,I=p.end),"valueToAriaValueTextFn"in p&&t(37,_=p.valueToAriaValueTextFn),"input$class"in p&&t(12,M=p.input$class)},n.$$.update=()=>{n.$$.dirty[0]&1024|n.$$.dirty[1]&3072&&m!==Se&&(b&&b.setMin(m),t(42,Se=m)),n.$$.dirty[0]&2048|n.$$.dirty[1]&5120&&y!==F&&(b&&b.setMax(y),t(43,F=y)),n.$$.dirty[0]&512|n.$$.dirty[1]&9216&&f!==de&&(b&&b.setStep(f),t(44,de=f)),n.$$.dirty[0]&128|n.$$.dirty[1]&17408&&h!==Ke&&(b&&b.setIsDiscrete(h),t(45,Ke=h)),n.$$.dirty[0]&256|n.$$.dirty[1]&33792&&d!==pn&&(b&&b.setHasTickMarks(d),t(46,pn=d)),n.$$.dirty[0]&7|n.$$.dirty[1]&459776&&b&&(rn!==g&&typeof g=="number"&&b.setValue(g),w!==v&&typeof v=="number"&&b.setValueStart(v),re!==I&&typeof I=="number"&&b.setValue(I),t(47,rn=g),t(48,w=v),t(49,re=I),b.layout())},[g,v,I,o,u,c,l,h,d,f,m,y,M,j,N,T,A,k,Z,ie,R,z,q,U,P,L,te,Ne,Ut,jt,zt,a,Kt,Qt,Fn,gn,s,_,ks,S,x,b,Se,F,de,Ke,pn,rn,w,re,W,be,Un,io,rf,of,af,uf,lf,cf,hf,df,ff,mf,pf,gf,yf,vf,If,Ef,_f,Tf,Af,Sf,bf,wf,Cf,Rf]}class DT extends Ve{constructor(e){super();Ue(this,e,T_,__,ke,{use:3,class:4,disabled:5,range:6,discrete:7,tickMarks:8,step:9,min:10,max:11,value:0,start:1,end:2,valueToAriaValueTextFn:37,input$class:12,layout:38,getId:39,getElement:40},null,[-1,-1,-1])}get layout(){return this.$$.ctx[38]}get getId(){return this.$$.ctx[39]}get getElement(){return this.$$.ctx[40]}}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var A_={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},S_={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Ns={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},He;(function(n){n[n.BOTTOM=1]="BOTTOM",n[n.CENTER=2]="CENTER",n[n.RIGHT=4]="RIGHT",n[n.FLIP_RTL=8]="FLIP_RTL"})(He||(He={}));var Li;(function(n){n[n.TOP_LEFT=0]="TOP_LEFT",n[n.TOP_RIGHT=4]="TOP_RIGHT",n[n.BOTTOM_LEFT=1]="BOTTOM_LEFT",n[n.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",n[n.TOP_START=8]="TOP_START",n[n.TOP_END=12]="TOP_END",n[n.BOTTOM_START=9]="BOTTOM_START",n[n.BOTTOM_END=13]="BOTTOM_END"})(Li||(Li={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Nn,fn,ae={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};Nn={},Nn[""+ae.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Nn[""+ae.LIST_ITEM_CLASS]="mdc-list-item",Nn[""+ae.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Nn[""+ae.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Nn[""+ae.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Nn[""+ae.ROOT]="mdc-list";var Ni=(fn={},fn[""+ae.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",fn[""+ae.LIST_ITEM_CLASS]="mdc-deprecated-list-item",fn[""+ae.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",fn[""+ae.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",fn[""+ae.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",fn[""+ae.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",fn[""+ae.ROOT]="mdc-deprecated-list",fn),kn={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+ae.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+ae.LIST_ITEM_CLASS+` a,
    .`+Ni[ae.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Ni[ae.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+ae.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+ae.LIST_ITEM_CLASS+` a,
    .`+ae.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+ae.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Ni[ae.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Ni[ae.LIST_ITEM_CLASS]+` a,
    .`+Ni[ae.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Ni[ae.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},et={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var b_=["input","button","textarea","select"],ii=function(n){var e=n.target;if(!!e){var t=(""+e.tagName).toLowerCase();b_.indexOf(t)===-1&&n.preventDefault()}};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function w_(){var n={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return n}function C_(n,e){for(var t=new Map,i=0;i<n;i++){var s=e(i).trim();if(!!s){var r=s[0].toLowerCase();t.has(r)||t.set(r,[]),t.get(r).push({text:s.toLowerCase(),index:i})}}return t.forEach(function(a){a.sort(function(o,u){return o.index-u.index})}),t}function gu(n,e){var t=n.nextChar,i=n.focusItemAtIndex,s=n.sortedIndexByFirstChar,r=n.focusedItemIndex,a=n.skipFocus,o=n.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){Yd(e)},et.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+t;var u;return e.typeaheadBuffer.length===1?u=R_(s,r,o,e):u=D_(s,o,e),u!==-1&&!a&&i(u),u}function R_(n,e,t,i){var s=i.typeaheadBuffer[0],r=n.get(s);if(!r)return-1;if(s===i.currentFirstChar&&r[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%r.length;var a=r[i.sortedIndexCursor].index;if(!t(a))return a}i.currentFirstChar=s;var o=-1,u;for(u=0;u<r.length;u++)if(!t(r[u].index)){o=u;break}for(;u<r.length;u++)if(r[u].index>e&&!t(r[u].index)){o=u;break}return o!==-1?(i.sortedIndexCursor=o,r[i.sortedIndexCursor].index):-1}function D_(n,e,t){var i=t.typeaheadBuffer[0],s=n.get(i);if(!s)return-1;var r=s[t.sortedIndexCursor];if(r.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!e(r.index))return r.index;for(var a=(t.sortedIndexCursor+1)%s.length,o=-1;a!==t.sortedIndexCursor;){var u=s[a],c=u.text.lastIndexOf(t.typeaheadBuffer,0)===0,l=!e(u.index);if(c&&l){o=a;break}a=(a+1)%s.length}return o!==-1?(t.sortedIndexCursor=o,s[t.sortedIndexCursor].index):-1}function Qd(n){return n.typeaheadBuffer.length>0}function Yd(n){n.typeaheadBuffer=""}function Jd(n,e){var t=n.event,i=n.isTargetListItem,s=n.focusedItemIndex,r=n.focusItemAtIndex,a=n.sortedIndexByFirstChar,o=n.isItemAtIndexDisabled,u=pt(t)==="ArrowLeft",c=pt(t)==="ArrowUp",l=pt(t)==="ArrowRight",h=pt(t)==="ArrowDown",d=pt(t)==="Home",f=pt(t)==="End",m=pt(t)==="Enter",y=pt(t)==="Spacebar";if(t.ctrlKey||t.metaKey||u||c||l||h||d||f||m)return-1;var g=!y&&t.key.length===1;if(g){ii(t);var v={focusItemAtIndex:r,focusedItemIndex:s,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return gu(v,e)}if(!y)return-1;i&&ii(t);var I=i&&Qd(e);if(I){var v={focusItemAtIndex:r,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return gu(v,e)}return-1}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function O_(n){return n instanceof Array}var L_=function(n){vn(e,n);function e(t){var i=n.call(this,at(at({},e.defaultAdapter),t))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=et.UNSET_INDEX,i.focusedItemIndex=et.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState=w_(),i.sortedIndexByFirstChar=new Map,i}return Object.defineProperty(e,"strings",{get:function(){return kn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return ae},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return et},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();if(t!==et.UNSET_INDEX){var i=this.adapter.listItemAtIndexHasClass(t,ae.LIST_ITEM_ACTIVATED_CLASS);i&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t}},e.prototype.getSelectedIndexFromDOM=function(){for(var t=et.UNSET_INDEX,i=this.adapter.getListItemCount(),s=0;s<i;s++){var r=this.adapter.listItemAtIndexHasClass(s,ae.LIST_ITEM_SELECTED_CLASS),a=this.adapter.listItemAtIndexHasClass(s,ae.LIST_ITEM_ACTIVATED_CLASS);if(!!(r||a)){t=s;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&Qd(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,i){var s=i===void 0?{}:i,r=s.forceUpdate;!this.isIndexValid(t)||(this.isCheckboxList?this.setCheckboxAtIndex(t):this.isRadioList?this.setRadioAtIndex(t):this.setSingleSelectionAtIndex(t,{forceUpdate:r}))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var i=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout(function(){i.adapter.isFocusInsideList()||i.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(t,i,s){var r=this,a=pt(t)==="ArrowLeft",o=pt(t)==="ArrowUp",u=pt(t)==="ArrowRight",c=pt(t)==="ArrowDown",l=pt(t)==="Home",h=pt(t)==="End",d=pt(t)==="Enter",f=pt(t)==="Spacebar",m=t.key==="A"||t.key==="a";if(this.adapter.isRootFocused()){if(o||h?(t.preventDefault(),this.focusLastElement()):(c||l)&&(t.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var y={event:t,focusItemAtIndex:function(I){r.focusItemAtIndex(I)},focusedItemIndex:-1,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(I){return r.adapter.listItemAtIndexHasClass(I,ae.LIST_ITEM_DISABLED_CLASS)}};Jd(y,this.typeaheadState)}return}var g=this.adapter.getFocusedElementIndex();if(!(g===-1&&(g=s,g<0))){if(this.isVertical&&c||!this.isVertical&&u)ii(t),this.focusNextElement(g);else if(this.isVertical&&o||!this.isVertical&&a)ii(t),this.focusPrevElement(g);else if(l)ii(t),this.focusFirstElement();else if(h)ii(t),this.focusLastElement();else if(m&&t.ctrlKey&&this.isCheckboxList)t.preventDefault(),this.toggleAll(this.selectedIndex===et.UNSET_INDEX?[]:this.selectedIndex);else if((d||f)&&i){var v=t.target;if(v&&v.tagName==="A"&&d||(ii(t),this.adapter.listItemAtIndexHasClass(g,ae.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(g),this.adapter.notifyAction(g))}if(this.hasTypeahead){var y={event:t,focusItemAtIndex:function(_){r.focusItemAtIndex(_)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(_){return r.adapter.listItemAtIndexHasClass(_,ae.LIST_ITEM_DISABLED_CLASS)}};Jd(y,this.typeaheadState)}}},e.prototype.handleClick=function(t,i){t!==et.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(t,ae.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(t,i),this.adapter.notifyAction(t)))},e.prototype.focusNextElement=function(t){var i=this.adapter.getListItemCount(),s=t+1;if(s>=i)if(this.wrapFocus)s=0;else return t;return this.focusItemAtIndex(s),s},e.prototype.focusPrevElement=function(t){var i=t-1;if(i<0)if(this.wrapFocus)i=this.adapter.getListItemCount()-1;else return t;return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var t=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(t),t},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,i){!this.isIndexValid(t)||(i?(this.adapter.removeClassForElementIndex(t,ae.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,kn.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,ae.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,kn.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,i){var s=i===void 0?{}:i,r=s.forceUpdate;if(!(this.selectedIndex===t&&!r)){var a=ae.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(a=ae.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==et.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,a),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==et.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,a),this.selectedIndex=t}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===et.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,kn.ARIA_CURRENT));var i=this.ariaCurrentAttrValue!==null,s=i?kn.ARIA_CURRENT:kn.ARIA_SELECTED;if(this.selectedIndex!==et.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,s,"false"),t!==et.UNSET_INDEX){var r=i?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,s,r)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?kn.ARIA_SELECTED:kn.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t){var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),this.selectedIndex!==et.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(t,i,"true"),this.selectedIndex=t},e.prototype.setCheckboxAtIndex=function(t){for(var i=this.getSelectionAttribute(),s=0;s<this.adapter.getListItemCount();s++){var r=!1;t.indexOf(s)>=0&&(r=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(s,r),this.adapter.setAttributeForElementIndex(s,i,r?"true":"false")}this.selectedIndex=t},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===et.UNSET_INDEX&&t!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==t&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==et.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==et.UNSET_INDEX?this.selectedIndex:O_(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(t,i){return Math.min(t,i)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(t){var i=this;if(t instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return t.length===0?!0:t.some(function(s){return i.isIndexInRange(s)})}else if(typeof t=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===et.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(t){var i=this.adapter.getListItemCount();return t>=0&&t<i},e.prototype.setSelectedIndexOnAction=function(t,i){i===void 0&&(i=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(t,i):this.setSelectedIndex(t)},e.prototype.toggleCheckboxAtIndex=function(t,i){var s=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(t);i&&(r=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,r)),this.adapter.setAttributeForElementIndex(t,s,r?"true":"false");var a=this.selectedIndex===et.UNSET_INDEX?[]:this.selectedIndex.slice();r?a.push(t):a=a.filter(function(o){return o!==t}),this.selectedIndex=a},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.toggleAll=function(t){var i=this.adapter.getListItemCount();if(t.length===i)this.setCheckboxAtIndex([]);else{for(var s=[],r=0;r<i;r++)(!this.adapter.listItemAtIndexHasClass(r,ae.LIST_ITEM_DISABLED_CLASS)||t.indexOf(r)>-1)&&s.push(r);this.setCheckboxAtIndex(s)}},e.prototype.typeaheadMatchItem=function(t,i,s){var r=this;s===void 0&&(s=!1);var a={focusItemAtIndex:function(o){r.focusItemAtIndex(o)},focusedItemIndex:i||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:s,isItemAtIndexDisabled:function(o){return r.adapter.listItemAtIndexHasClass(o,ae.LIST_ITEM_DISABLED_CLASS)}};return gu(a,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return C_(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){Yd(this.typeaheadState)},e}(Gn);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Zd=function(n){vn(e,n);function e(t){var i=n.call(this,at(at({},e.defaultAdapter),t))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=Li.TOP_START,i.originCorner=Li.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return Object.defineProperty(e,"cssClasses",{get:function(){return A_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return S_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ns},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return Li},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,i=t.ROOT,s=t.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(s)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^He.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,i){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(i)?i:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout(function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()},Ns.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var i=this;if(t===void 0&&(t=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout(function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()},Ns.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var i=t.target;this.adapter.isElementInContainer(i)||this.close()},e.prototype.handleKeydown=function(t){var i=t.keyCode,s=t.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),s=this.getMenuSurfaceMaxHeight(i),r=this.hasBit(i,He.BOTTOM)?"bottom":"top",a=this.hasBit(i,He.RIGHT)?"right":"left",o=this.getHorizontalOriginOffset(i),u=this.getVerticalOriginOffset(i),c=this.measurements,l=c.anchorSize,h=c.surfaceSize,d=(t={},t[a]=o,t[r]=u,t);l.width/h.width>Ns.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(a="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(d),this.adapter.setTransformOrigin(a+" "+r),this.adapter.setPosition(d),this.adapter.setMaxHeight(s?s+"px":""),this.hasBit(i,He.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),i=this.adapter.getBodyDimensions(),s=this.adapter.getWindowDimensions(),r=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:s.width-t.right,bottom:s.height-t.bottom,left:t.left},viewportSize:s,windowScroll:r}},e.prototype.getoriginCorner=function(){var t=this.originCorner,i=this.measurements,s=i.viewportDistance,r=i.anchorSize,a=i.surfaceSize,o=e.numbers.MARGIN_TO_EDGE,u=this.hasBit(this.anchorCorner,He.BOTTOM),c,l;u?(c=s.top-o+this.anchorMargin.bottom,l=s.bottom-o-this.anchorMargin.bottom):(c=s.top-o+this.anchorMargin.top,l=s.bottom-o+r.height-this.anchorMargin.top);var h=l-a.height>0;!h&&c>l&&(t=this.setBit(t,He.BOTTOM));var d=this.adapter.isRtl(),f=this.hasBit(this.anchorCorner,He.FLIP_RTL),m=this.hasBit(this.anchorCorner,He.RIGHT)||this.hasBit(t,He.RIGHT),y=!1;d&&f?y=!m:y=m;var g,v;y?(g=s.left+r.width+this.anchorMargin.right,v=s.right-this.anchorMargin.right):(g=s.left+this.anchorMargin.left,v=s.right+r.width-this.anchorMargin.left);var I=g-a.width>0,_=v-a.width>0,M=this.hasBit(t,He.FLIP_RTL)&&this.hasBit(t,He.RIGHT);return _&&M&&d||!I&&M?t=this.unsetBit(t,He.RIGHT):(I&&y&&d||I&&!y&&m||!_&&g>=v)&&(t=this.setBit(t,He.RIGHT)),t},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,s=0,r=this.hasBit(t,He.BOTTOM),a=this.hasBit(this.anchorCorner,He.BOTTOM),o=e.numbers.MARGIN_TO_EDGE;return r?(s=i.top+this.anchorMargin.top-o,a||(s+=this.measurements.anchorSize.height)):(s=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-o,a&&(s-=this.measurements.anchorSize.height)),s},e.prototype.getHorizontalOriginOffset=function(t){var i=this.measurements.anchorSize,s=this.hasBit(t,He.RIGHT),r=this.hasBit(this.anchorCorner,He.RIGHT);if(s){var a=r?i.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?a-(this.measurements.viewportSize.width-this.measurements.bodySize.width):a}return r?i.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var i=this.measurements.anchorSize,s=this.hasBit(t,He.BOTTOM),r=this.hasBit(this.anchorCorner,He.BOTTOM),a=0;return s?a=r?i.height-this.anchorMargin.top:-this.anchorMargin.bottom:a=r?i.height+this.anchorMargin.bottom:this.anchorMargin.top,a},e.prototype.adjustPositionForHoistedElement=function(t){var i,s,r=this.measurements,a=r.windowScroll,o=r.viewportDistance,u=r.surfaceSize,c=r.viewportSize,l=Object.keys(t);try{for(var h=ci(l),d=h.next();!d.done;d=h.next()){var f=d.value,m=t[f]||0;if(this.isHorizontallyCenteredOnViewport&&(f==="left"||f==="right")){t[f]=(c.width-u.width)/2;continue}m+=o[f],this.isFixedPosition||(f==="top"?m+=a.y:f==="bottom"?m-=a.y:f==="left"?m+=a.x:m-=a.x),t[f]=m}}catch(y){i={error:y}}finally{try{d&&!d.done&&(s=h.return)&&s.call(h)}finally{if(i)throw i.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,i=this.adapter.isFocused(),s=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(i||s)&&setTimeout(function(){t.adapter.restoreFocus()},Ns.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,i){return Boolean(t&i)},e.prototype.setBit=function(t,i){return t|i},e.prototype.unsetBit=function(t,i){return t^i},e.prototype.isFinite=function(t){return typeof t=="number"&&isFinite(t)},e}(Gn);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ki={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Mi={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},N_={FOCUS_ROOT_INDEX:-1},Pi;(function(n){n[n.NONE=0]="NONE",n[n.LIST_ROOT=1]="LIST_ROOT",n[n.FIRST_ITEM=2]="FIRST_ITEM",n[n.LAST_ITEM=3]="LAST_ITEM"})(Pi||(Pi={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var k_=function(n){vn(e,n);function e(t){var i=n.call(this,at(at({},e.defaultAdapter),t))||this;return i.closeAnimationEndTimerId=0,i.defaultFocusState=Pi.LIST_ROOT,i.selectedIndex=-1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return ki},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Mi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return N_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var i=t.key,s=t.keyCode,r=i==="Tab"||s===9;r&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var i=this,s=this.adapter.getElementIndex(t);if(!(s<0)){this.adapter.notifySelected({index:s});var r=this.adapter.getAttributeFromElementAtIndex(s,Mi.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(r),this.closeAnimationEndTimerId=setTimeout(function(){var a=i.adapter.getElementIndex(t);a>=0&&i.adapter.isSelectableItemAtIndex(a)&&i.setSelectedIndex(a)},Zd.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Pi.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Pi.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Pi.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var i=this.adapter.getSelectedSiblingOfItemAtIndex(t);i>=0&&(this.adapter.removeAttributeFromElementAtIndex(i,Mi.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(i,ki.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,ki.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,Mi.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},e.prototype.setEnabled=function(t,i){this.validatedIndex(t),i?(this.adapter.removeClassFromElementAtIndex(t,ae.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,Mi.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,ae.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,Mi.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(t){var i=this.adapter.getMenuItemCount(),s=t>=0&&t<i;if(!s)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(Gn);const{document:M_}=Qf;function P_(n){let e,t,i,s,r,a,o,u;const c=n[30].default,l=Qe(c,n,n[29],null);let h=[{class:i=ye(Pe({[n[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":n[5],"mdc-menu-surface--open":n[4],"smui-menu-surface--static":n[4],"mdc-menu-surface--fullwidth":n[6]},n[9]))},{style:s=Object.entries(n[10]).map($d).concat([n[3]]).join(" ")},n[12]],d={};for(let f=0;f<h.length;f+=1)d=V(d,h[f]);return{c(){e=Rt(),t=X("div"),l&&l.c(),this.h()},l(f){e=Dt(f),t=Y(f,"DIV",{class:!0,style:!0});var m=$(t);l&&l.l(m),m.forEach(D),this.h()},h(){le(t,d)},m(f,m){ue(f,e,m),ue(f,t,m),l&&l.m(t,null),n[32](t),a=!0,o||(u=[$e(M_.body,"click",n[31],!0),fe(r=mt.call(null,t,n[1])),fe(n[11].call(null,t)),$e(t,"keydown",n[33])],o=!0)},p(f,m){l&&l.p&&(!a||m[0]&536870912)&&Je(l,c,f,f[29],a?Ye(c,f[29],m,null):Ze(f[29]),null),le(t,d=Re(h,[(!a||m[0]&628&&i!==(i=ye(Pe({[f[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":f[5],"mdc-menu-surface--open":f[4],"smui-menu-surface--static":f[4],"mdc-menu-surface--fullwidth":f[6]},f[9]))))&&{class:i},(!a||m[0]&1032&&s!==(s=Object.entries(f[10]).map($d).concat([f[3]]).join(" ")))&&{style:s},m[0]&4096&&f[12]])),r&&Fe(r.update)&&m[0]&2&&r.update.call(null,f[1])},i(f){a||(Ee(l,f),a=!0)},o(f){_e(l,f),a=!1},d(f){f&&D(e),f&&D(t),l&&l.d(f),n[32](null),o=!1,Ce(u)}}}const $d=([n,e])=>`${n}: ${e};`;function F_(n,e,t){const i=["use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","isFixed","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e;var o,u,c;const l=Be(we());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{static:m=!1}=e,{anchor:y=!0}=e,{fixed:g=!1}=e,{open:v=m}=e,{fullWidth:I=!1}=e,{quickOpen:_=!1}=e,{anchorElement:M=void 0}=e,{anchorCorner:j=void 0}=e,{anchorMargin:b={top:0,right:0,bottom:0,left:0}}=e,{maxHeight:N=0}=e,{horizontallyCenteredOnViewport:T=!1}=e,A,k,Z={},ie={},R;tt("SMUI:list:role","menu"),tt("SMUI:list:item:role","menuitem");const z=Li;Vn(()=>(t(8,k=new Zd({addClass:U,removeClass:P,hasClass:q,hasAnchor:()=>!!M,notifyClose:()=>{t(0,v=m),v||it(A,"SMUIMenuSurface:closed",void 0,void 0,!0)},notifyClosing:()=>{t(0,v=m),v||it(A,"SMUIMenuSurface:closing",void 0,void 0,!0)},notifyOpen:()=>{t(0,v=!0),it(A,"SMUIMenuSurface:opened",void 0,void 0,!0)},isElementInContainer:de=>A.contains(de),isRtl:()=>getComputedStyle(A).getPropertyValue("direction")==="rtl",setTransformOrigin:de=>{const Ke=`${Yr(window,"transform")}-origin`;t(10,ie[Ke]=de,ie)},isFocused:()=>document.activeElement===A,saveFocus:()=>{var de;R=(de=document.activeElement)!==null&&de!==void 0?de:void 0},restoreFocus:()=>{A.contains(document.activeElement)&&R&&"focus"in R&&R.focus()},getInnerDimensions:()=>({width:A.offsetWidth,height:A.offsetHeight}),getAnchorDimensions:()=>M?M.getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:de=>{t(10,ie.left="left"in de?`${de.left}px`:"",ie),t(10,ie.right="right"in de?`${de.right}px`:"",ie),t(10,ie.top="top"in de?`${de.top}px`:"",ie),t(10,ie.bottom="bottom"in de?`${de.bottom}px`:"",ie)},setMaxHeight:de=>{t(10,ie.maxHeight=de,ie)}})),it(A,"SMUIMenuSurface:mount",{get open(){return v},set open(de){t(0,v=de)},closeProgrammatic:L}),k.init(),()=>{var de;const Ke=k.isHoistedElement;k.destroy(),Ke&&((de=A.parentNode)===null||de===void 0||de.removeChild(A))})),oi(()=>{var F;y&&A&&((F=A.parentElement)===null||F===void 0||F.classList.remove("mdc-menu-surface--anchor"))});function q(F){return F in Z?Z[F]:Kt().classList.contains(F)}function U(F){Z[F]||t(9,Z[F]=!0,Z)}function P(F){(!(F in Z)||Z[F])&&t(9,Z[F]=!1,Z)}function L(F){k.close(F),t(0,v=!1)}function te(){return v}function Ne(F){t(0,v=F)}function Ut(F,de){return k.setAbsolutePosition(F,de)}function jt(F){return k.setIsHoisted(F)}function zt(){return k.isFixed()}function Kt(){return A}const mn=F=>k&&v&&k.handleBodyClick(F);function Xt(F){ge[F?"unshift":"push"](()=>{A=F,t(7,A)})}const Se=F=>k&&k.handleKeydown(F);return n.$$set=F=>{e=V(V({},e),Me(F)),t(12,s=oe(e,i)),"use"in F&&t(1,h=F.use),"class"in F&&t(2,d=F.class),"style"in F&&t(3,f=F.style),"static"in F&&t(4,m=F.static),"anchor"in F&&t(14,y=F.anchor),"fixed"in F&&t(5,g=F.fixed),"open"in F&&t(0,v=F.open),"fullWidth"in F&&t(6,I=F.fullWidth),"quickOpen"in F&&t(15,_=F.quickOpen),"anchorElement"in F&&t(13,M=F.anchorElement),"anchorCorner"in F&&t(16,j=F.anchorCorner),"anchorMargin"in F&&t(17,b=F.anchorMargin),"maxHeight"in F&&t(18,N=F.maxHeight),"horizontallyCenteredOnViewport"in F&&t(19,T=F.horizontallyCenteredOnViewport),"$$scope"in F&&t(29,a=F.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&469778560&&A&&y&&!(t(26,o=A.parentElement)===null||o===void 0?void 0:o.classList.contains("mdc-menu-surface--anchor"))&&(t(27,u=A.parentElement)===null||u===void 0||u.classList.add("mdc-menu-surface--anchor"),t(13,M=t(28,c=A.parentElement)!==null&&c!==void 0?c:void 0)),n.$$.dirty[0]&257&&k&&k.isOpen()!==v&&(v?k.open():k.close()),n.$$.dirty[0]&33024&&k&&k.setQuickOpen(_),n.$$.dirty[0]&288&&k&&k.setFixedPosition(g),n.$$.dirty[0]&262400&&k&&N>0&&k.setMaxHeight(N),n.$$.dirty[0]&524544&&k&&k.setIsHorizontallyCenteredOnViewport(T),n.$$.dirty[0]&65792&&k&&j!=null&&(typeof j=="string"?k.setAnchorCorner(z[j]):k.setAnchorCorner(j)),n.$$.dirty[0]&131328&&k&&k.setAnchorMargin(b)},[v,h,d,f,m,g,I,A,k,Z,ie,l,s,M,y,_,j,b,N,T,te,Ne,Ut,jt,zt,Kt,o,u,c,a,r,mn,Xt,Se]}class U_ extends Ve{constructor(e){super();Ue(this,e,F_,P_,ke,{use:1,class:2,style:3,static:4,anchor:14,fixed:5,open:0,fullWidth:6,quickOpen:15,anchorElement:13,anchorCorner:16,anchorMargin:17,maxHeight:18,horizontallyCenteredOnViewport:19,isOpen:20,setOpen:21,setAbsolutePosition:22,setIsHoisted:23,isFixed:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get setAbsolutePosition(){return this.$$.ctx[22]}get setIsHoisted(){return this.$$.ctx[23]}get isFixed(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}function V_(n){let e;const t=n[16].default,i=Qe(t,n,n[21],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2097152)&&Je(i,t,s,s[21],e?Ye(t,s[21],r,null):Ze(s[21]),null)},i(s){e||(Ee(i,s),e=!0)},o(s){_e(i,s),e=!1},d(s){i&&i.d(s)}}}function B_(n){let e,t,i;const s=[{use:n[5]},{class:ye({[n[1]]:!0,"mdc-menu":!0})},n[9]];function r(o){n[18](o)}let a={$$slots:{default:[V_]},$$scope:{ctx:n}};for(let o=0;o<s.length;o+=1)a=V(a,s[o]);return n[0]!==void 0&&(a.open=n[0]),e=new U_({props:a}),n[17](e),ge.push(()=>Yf(e,"open",r)),e.$on("SMUIMenuSurface:mount",n[7]),e.$on("SMUIList:mount",n[8]),e.$on("SMUIMenuSurface:opened",n[19]),e.$on("keydown",n[6]),e.$on("SMUIList:action",n[20]),{c(){on(e.$$.fragment)},l(o){Ui(e.$$.fragment,o)},m(o,u){Jt(e,o,u),i=!0},p(o,[u]){const c=u&546?Re(s,[u&32&&{use:o[5]},u&2&&{class:ye({[o[1]]:!0,"mdc-menu":!0})},u&512&&Et(o[9])]):{};u&2097152&&(c.$$scope={dirty:u,ctx:o}),!t&&u&1&&(t=!0,c.open=o[0],Kf(()=>t=!1)),e.$set(c)},i(o){i||(Ee(e.$$.fragment,o),i=!0)},o(o){_e(e.$$.fragment,o),i=!1},d(o){n[17](null),Zt(e,o)}}}function H_(n,e,t){let i;const s=["use","class","open","isOpen","setOpen","setDefaultFocusState","getSelectedIndex","getElement"];let r=oe(e,s),{$$slots:a={},$$scope:o}=e;const{closest:u}=Po,c=Be(we());let{use:l=[]}=e,{class:h=""}=e,{open:d=!1}=e,f,m,y,g;Vn(()=>(t(3,m=new k_({addClassToElementAtIndex:(R,z)=>{g.addClassForElementIndex(R,z)},removeClassFromElementAtIndex:(R,z)=>{g.removeClassForElementIndex(R,z)},addAttributeToElementAtIndex:(R,z,q)=>{g.setAttributeForElementIndex(R,z,q)},removeAttributeFromElementAtIndex:(R,z)=>{g.removeAttributeForElementIndex(R,z)},getAttributeFromElementAtIndex:(R,z)=>g.getAttributeFromElementIndex(R,z),elementContainsClass:(R,z)=>R.classList.contains(z),closeSurface:R=>y.closeProgrammatic(R),getElementIndex:R=>g.getOrderedList().map(z=>z.element).indexOf(R),notifySelected:R=>it(T(),"SMUIMenu:selected",{index:R.index,item:g.getOrderedList()[R.index].element},void 0,!0),getMenuItemCount:()=>g.items.length,focusItemAtIndex:R=>g.focusItemAtIndex(R),focusListRoot:()=>"focus"in g.element&&g.element.focus(),isSelectableItemAtIndex:R=>!!u(g.getOrderedList()[R].element,`.${ki.MENU_SELECTION_GROUP}`),getSelectedSiblingOfItemAtIndex:R=>{const z=g.getOrderedList(),q=u(z[R].element,`.${ki.MENU_SELECTION_GROUP}`),U=q==null?void 0:q.querySelector(`.${ki.MENU_SELECTED_LIST_ITEM}`);return U?z.map(P=>P.element).indexOf(U):-1}})),it(T(),"SMUIMenu:mount",m),m.init(),()=>{m.destroy()}));function v(R){m&&m.handleKeydown(R)}function I(R){y||(y=R.detail)}function _(R){g||t(4,g=R.detail)}function M(){return d}function j(R){t(0,d=R)}function b(R){m.setDefaultFocusState(R)}function N(){return m.getSelectedIndex()}function T(){return f.getElement()}function A(R){ge[R?"unshift":"push"](()=>{f=R,t(2,f)})}function k(R){d=R,t(0,d)}const Z=()=>m&&m.handleMenuSurfaceOpened(),ie=R=>m&&m.handleItemAction(g.getOrderedList()[R.detail.index].element);return n.$$set=R=>{e=V(V({},e),Me(R)),t(9,r=oe(e,s)),"use"in R&&t(10,l=R.use),"class"in R&&t(1,h=R.class),"open"in R&&t(0,d=R.open),"$$scope"in R&&t(21,o=R.$$scope)},n.$$.update=()=>{n.$$.dirty&1024&&t(5,i=[c,...l])},[d,h,f,m,g,i,v,I,_,r,l,M,j,b,N,T,a,A,k,Z,ie,o]}class OT extends Ve{constructor(e){super();Ue(this,e,H_,B_,ke,{use:10,class:1,open:0,isOpen:11,setOpen:12,setDefaultFocusState:13,getSelectedIndex:14,getElement:15})}get isOpen(){return this.$$.ctx[11]}get setOpen(){return this.$$.ctx[12]}get setDefaultFocusState(){return this.$$.ctx[13]}get getSelectedIndex(){return this.$$.ctx[14]}get getElement(){return this.$$.ctx[15]}}function x_(n){let e;const t=n[10].default,i=Qe(t,n,n[12],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&Je(i,t,s,s[12],e?Ye(t,s[12],r,null):Ze(s[12]),null)},i(s){e||(Ee(i,s),e=!0)},o(s){_e(i,s),e=!1},d(s){i&&i.d(s)}}}function j_(n){let e,t,i;const s=[{use:[n[7],...n[0]]},{class:ye(Pe({[n[1]]:!0,[n[5]]:!0},n[4]))},n[6],n[8]];var r=n[2];function a(o){let u={$$slots:{default:[x_]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)u=V(u,s[c]);return{props:u}}return r&&(e=new r(a(n)),n[11](e)),{c(){e&&on(e.$$.fragment),t=Vt()},l(o){e&&Ui(e.$$.fragment,o),t=Vt()},m(o,u){e&&Jt(e,o,u),ue(o,t,u),i=!0},p(o,[u]){const c=u&499?Re(s,[u&129&&{use:[o[7],...o[0]]},u&50&&{class:ye(Pe({[o[1]]:!0,[o[5]]:!0},o[4]))},u&64&&Et(o[6]),u&256&&Et(o[8])]):{};if(u&4096&&(c.$$scope={dirty:u,ctx:o}),r!==(r=o[2])){if(e){xs();const l=e;_e(l.$$.fragment,1,0,()=>{Zt(l,1)}),js()}r?(e=new r(a(o)),o[11](e),on(e.$$.fragment),Ee(e.$$.fragment,1),Jt(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(o){i||(e&&Ee(e.$$.fragment,o),i=!0)},o(o){e&&_e(e.$$.fragment,o),i=!1},d(o){n[11](null),o&&D(t),e&&Zt(e,o)}}}const Mn={component:Cl,class:"",classMap:{},contexts:{},props:{}};function z_(n,e,t){const i=["use","class","component","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e,{class:u=""}=e,c;const l=Mn.class,h={},d=[],f=Mn.contexts,m=Mn.props;let{component:y=Mn.component}=e;Object.entries(Mn.classMap).forEach(([_,M])=>{const j=ft(M);j&&"subscribe"in j&&d.push(j.subscribe(b=>{t(4,h[_]=b,h)}))});const g=Be(we());for(let _ in f)f.hasOwnProperty(_)&&tt(_,f[_]);oi(()=>{for(const _ of d)_()});function v(){return c.getElement()}function I(_){ge[_?"unshift":"push"](()=>{c=_,t(3,c)})}return n.$$set=_=>{e=V(V({},e),Me(_)),t(8,s=oe(e,i)),"use"in _&&t(0,o=_.use),"class"in _&&t(1,u=_.class),"component"in _&&t(2,y=_.component),"$$scope"in _&&t(12,a=_.$$scope)},[o,u,y,c,h,l,m,g,s,v,r,I,a]}class q_ extends Ve{constructor(e){super();Ue(this,e,z_,j_,ke,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const ef=Object.assign({},Mn);function It(n){return new Proxy(q_,{construct:function(e,t){return Object.assign(Mn,ef,n),new e(...t)},get:function(e,t){return Object.assign(Mn,ef,n),e[t]}})}function G_(n){let e;const t=n[37].default,i=Qe(t,n,n[43],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[1]&4096)&&Je(i,t,s,s[43],e?Ye(t,s[43],r,null):Ze(s[43]),null)},i(s){e||(Ee(i,s),e=!0)},o(s){_e(i,s),e=!1},d(s){i&&i.d(s)}}}function W_(n){let e,t,i;const s=[{use:[n[17],...n[0]]},{class:ye({[n[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":n[2],"mdc-deprecated-list--dense":n[3],"mdc-deprecated-list--textual-list":n[4],"mdc-deprecated-list--avatar-list":n[5]||n[18],"mdc-deprecated-list--icon-list":n[6],"mdc-deprecated-list--image-list":n[7],"mdc-deprecated-list--thumbnail-list":n[8],"mdc-deprecated-list--video-list":n[9],"mdc-deprecated-list--two-line":n[10],"smui-list--three-line":n[11]&&!n[10]})},{role:n[15]},n[23]];var r=n[12];function a(o){let u={$$slots:{default:[G_]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)u=V(u,s[c]);return{props:u}}return r&&(e=new r(a(n)),n[38](e),e.$on("keydown",n[39]),e.$on("focusin",n[40]),e.$on("focusout",n[41]),e.$on("click",n[42]),e.$on("SMUIListItem:mount",n[19]),e.$on("SMUIListItem:unmount",n[20]),e.$on("SMUI:action",n[21])),{c(){e&&on(e.$$.fragment),t=Vt()},l(o){e&&Ui(e.$$.fragment,o),t=Vt()},m(o,u){e&&Jt(e,o,u),ue(o,t,u),i=!0},p(o,u){const c=u[0]&8818687?Re(s,[u[0]&131073&&{use:[o[17],...o[0]]},u[0]&266238&&{class:ye({[o[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":o[2],"mdc-deprecated-list--dense":o[3],"mdc-deprecated-list--textual-list":o[4],"mdc-deprecated-list--avatar-list":o[5]||o[18],"mdc-deprecated-list--icon-list":o[6],"mdc-deprecated-list--image-list":o[7],"mdc-deprecated-list--thumbnail-list":o[8],"mdc-deprecated-list--video-list":o[9],"mdc-deprecated-list--two-line":o[10],"smui-list--three-line":o[11]&&!o[10]})},u[0]&32768&&{role:o[15]},u[0]&8388608&&Et(o[23])]):{};if(u[1]&4096&&(c.$$scope={dirty:u,ctx:o}),r!==(r=o[12])){if(e){xs();const l=e;_e(l.$$.fragment,1,0,()=>{Zt(l,1)}),js()}r?(e=new r(a(o)),o[38](e),e.$on("keydown",o[39]),e.$on("focusin",o[40]),e.$on("focusout",o[41]),e.$on("click",o[42]),e.$on("SMUIListItem:mount",o[19]),e.$on("SMUIListItem:unmount",o[20]),e.$on("SMUI:action",o[21]),on(e.$$.fragment),Ee(e.$$.fragment,1),Jt(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(o){i||(e&&Ee(e.$$.fragment,o),i=!0)},o(o){e&&_e(e.$$.fragment,o),i=!1},d(o){n[38](null),o&&D(t),e&&Zt(e,o)}}}function K_(n,e,t){const i=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e;var o;const{closest:u,matches:c}=Po,l=Be(we());let{use:h=[]}=e,{class:d=""}=e,{nonInteractive:f=!1}=e,{dense:m=!1}=e,{textualList:y=!1}=e,{avatarList:g=!1}=e,{iconList:v=!1}=e,{imageList:I=!1}=e,{thumbnailList:_=!1}=e,{videoList:M=!1}=e,{twoLine:j=!1}=e,{threeLine:b=!1}=e,{vertical:N=!0}=e,{wrapFocus:T=(o=ft("SMUI:list:wrapFocus"))!==null&&o!==void 0?o:!1}=e,{singleSelection:A=!1}=e,{selectedIndex:k=-1}=e,{radioList:Z=!1}=e,{checkList:ie=!1}=e,{hasTypeahead:R=!1}=e,z,q,U=[],P=ft("SMUI:list:role"),L=ft("SMUI:list:nav");const te=new WeakMap;let Ne=ft("SMUI:dialog:selection"),Ut=ft("SMUI:addLayoutListener"),jt,{component:zt=L?Oy:Ly}=e;tt("SMUI:list:nonInteractive",f),tt("SMUI:separator:context","list"),P||(A?(P="listbox",tt("SMUI:list:item:role","option")):Z?(P="radiogroup",tt("SMUI:list:item:role","radio")):ie?(P="group",tt("SMUI:list:item:role","checkbox")):(P="list",tt("SMUI:list:item:role",void 0))),Ut&&(jt=Ut(Pn)),Vn(()=>{t(13,q=new L_({addClassForElementIndex:Ke,focusItemAtIndex:F,getAttributeForElementIndex:(x,W)=>{var be,Un;return(Un=(be=Se()[x])===null||be===void 0?void 0:be.getAttr(W))!==null&&Un!==void 0?Un:null},getFocusedElementIndex:()=>document.activeElement?Se().map(x=>x.element).indexOf(document.activeElement):-1,getListItemCount:()=>U.length,getPrimaryTextAtIndex:xe,hasCheckboxAtIndex:x=>{var W,be;return(be=(W=Se()[x])===null||W===void 0?void 0:W.hasCheckbox)!==null&&be!==void 0?be:!1},hasRadioAtIndex:x=>{var W,be;return(be=(W=Se()[x])===null||W===void 0?void 0:W.hasRadio)!==null&&be!==void 0?be:!1},isCheckboxCheckedAtIndex:x=>{var W;const be=Se()[x];return(W=(be==null?void 0:be.hasCheckbox)&&be.checked)!==null&&W!==void 0?W:!1},isFocusInsideList:()=>z!=null&&Yt()!==document.activeElement&&Yt().contains(document.activeElement),isRootFocused:()=>z!=null&&document.activeElement===Yt(),listItemAtIndexHasClass:de,notifyAction:x=>{t(24,k=x),z!=null&&it(Yt(),"SMUIList:action",{index:x},void 0,!0)},removeClassForElementIndex:pn,setAttributeForElementIndex:rn,setCheckedCheckboxOrRadioAtIndex:(x,W)=>{Se()[x].checked=W},setTabIndexForListItemChildren:(x,W)=>{const be=Se()[x],Un="button:not(:disabled), a";Array.prototype.forEach.call(be.element.querySelectorAll(Un),io=>{io.setAttribute("tabindex",W)})}}));const S={get element(){return Yt()},get items(){return U},get typeaheadInProgress(){return q.isTypeaheadInProgress()},typeaheadMatchItem(x,W){return q.typeaheadMatchItem(x,W,!0)},getOrderedList:Se,focusItemAtIndex:F,addClassForElementIndex:Ke,removeClassForElementIndex:pn,setAttributeForElementIndex:rn,removeAttributeForElementIndex:w,getAttributeFromElementIndex:re,getPrimaryTextAtIndex:xe};return it(Yt(),"SMUIList:mount",S),q.init(),()=>{q.destroy()}}),oi(()=>{jt&&jt()});function Kt(S){U.push(S.detail),te.set(S.detail.element,S.detail),A&&S.detail.selected&&t(24,k=kt(S.detail.element)),S.stopPropagation()}function mn(S){var x;const W=(x=S.detail&&U.indexOf(S.detail))!==null&&x!==void 0?x:-1;W!==-1&&(U.splice(W,1),U=U,te.delete(S.detail.element)),S.stopPropagation()}function Xt(S){if(Z||ie){const x=kt(S.target);if(x!==-1){const W=Se()[x];W&&(Z&&!W.checked||ie)&&(W.checked=!W.checked,W.activateRipple(),window.requestAnimationFrame(()=>{W.deactivateRipple()}))}}}function Se(){return z==null?[]:[...Yt().children].map(S=>te.get(S)).filter(S=>S&&S._smui_list_item_accessor)}function F(S){const x=Se()[S];x&&"focus"in x.element&&x.element.focus()}function de(S,x){var W;const be=Se()[S];return(W=be&&be.hasClass(x))!==null&&W!==void 0?W:!1}function Ke(S,x){const W=Se()[S];W&&W.addClass(x)}function pn(S,x){const W=Se()[S];W&&W.removeClass(x)}function rn(S,x,W){const be=Se()[S];be&&be.addAttr(x,W)}function w(S,x){const W=Se()[S];W&&W.removeAttr(x)}function re(S,x){const W=Se()[S];return W?W.getAttr(x):null}function xe(S){var x;const W=Se()[S];return(x=W&&W.getPrimaryText())!==null&&x!==void 0?x:""}function kt(S){const x=u(S,".mdc-deprecated-list-item, .mdc-deprecated-list");return x&&c(x,".mdc-deprecated-list-item")?Se().map(W=>W==null?void 0:W.element).indexOf(x):-1}function Pn(){return q.layout()}function Qt(S,x){return q.setEnabled(S,x)}function Fn(){return q.isTypeaheadInProgress()}function gn(){return q.getSelectedIndex()}function Zr(){return q.getFocusedItemIndex()}function Yt(){return z.getElement()}function $r(S){ge[S?"unshift":"push"](()=>{z=S,t(14,z)})}const eo=S=>q&&q.handleKeydown(S,S.target.classList.contains("mdc-deprecated-list-item"),kt(S.target)),to=S=>q&&q.handleFocusIn(kt(S.target)),no=S=>q&&q.handleFocusOut(kt(S.target)),ks=S=>q&&q.handleClick(kt(S.target),!c(S.target,'input[type="checkbox"], input[type="radio"]'));return n.$$set=S=>{e=V(V({},e),Me(S)),t(23,s=oe(e,i)),"use"in S&&t(0,h=S.use),"class"in S&&t(1,d=S.class),"nonInteractive"in S&&t(2,f=S.nonInteractive),"dense"in S&&t(3,m=S.dense),"textualList"in S&&t(4,y=S.textualList),"avatarList"in S&&t(5,g=S.avatarList),"iconList"in S&&t(6,v=S.iconList),"imageList"in S&&t(7,I=S.imageList),"thumbnailList"in S&&t(8,_=S.thumbnailList),"videoList"in S&&t(9,M=S.videoList),"twoLine"in S&&t(10,j=S.twoLine),"threeLine"in S&&t(11,b=S.threeLine),"vertical"in S&&t(25,N=S.vertical),"wrapFocus"in S&&t(26,T=S.wrapFocus),"singleSelection"in S&&t(27,A=S.singleSelection),"selectedIndex"in S&&t(24,k=S.selectedIndex),"radioList"in S&&t(28,Z=S.radioList),"checkList"in S&&t(29,ie=S.checkList),"hasTypeahead"in S&&t(30,R=S.hasTypeahead),"component"in S&&t(12,zt=S.component),"$$scope"in S&&t(43,a=S.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&33562624&&q&&q.setVerticalOrientation(N),n.$$.dirty[0]&67117056&&q&&q.setWrapFocus(T),n.$$.dirty[0]&1073750016&&q&&q.setHasTypeahead(R),n.$$.dirty[0]&134225920&&q&&q.setSingleSelection(A),n.$$.dirty[0]&151003136&&q&&A&&gn()!==k&&q.setSelectedIndex(k)},[h,d,f,m,y,g,v,I,_,M,j,b,zt,q,z,P,c,l,Ne,Kt,mn,Xt,kt,s,k,N,T,A,Z,ie,R,Pn,Qt,Fn,gn,Zr,Yt,r,$r,eo,to,no,ks,a]}class LT extends Ve{constructor(e){super();Ue(this,e,K_,W_,ke,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}function tf(n){let e;return{c(){e=X("span"),this.h()},l(t){e=Y(t,"SPAN",{class:!0}),$(e).forEach(D),this.h()},h(){Q(e,"class","mdc-deprecated-list-item__ripple")},m(t,i){ue(t,e,i)},d(t){t&&D(e)}}}function X_(n){let e,t,i=n[6]&&tf();const s=n[32].default,r=Qe(s,n,n[35],null);return{c(){i&&i.c(),e=Vt(),r&&r.c()},l(a){i&&i.l(a),e=Vt(),r&&r.l(a)},m(a,o){i&&i.m(a,o),ue(a,e,o),r&&r.m(a,o),t=!0},p(a,o){a[6]?i||(i=tf(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),r&&r.p&&(!t||o[1]&16)&&Je(r,s,a,a[35],t?Ye(s,a[35],o,null):Ze(a[35]),null)},i(a){t||(Ee(r,a),t=!0)},o(a){_e(r,a),t=!1},d(a){i&&i.d(a),a&&D(e),r&&r.d(a)}}}function Q_(n){let e,t,i;const s=[{use:[...n[5]?[]:[[Wn,{ripple:!n[13],unbounded:!1,color:(n[7]||n[0])&&n[4]==null?"primary":n[4],disabled:n[9],addClass:n[21],removeClass:n[22],addStyle:n[23]}]],n[19],...n[1]]},{class:ye(Pe({[n[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":n[7],"mdc-deprecated-list-item--selected":n[0],"mdc-deprecated-list-item--disabled":n[9],"mdc-menu-item--selected":!n[20]&&n[8]==="menuitem"&&n[0],"smui-menu-item--non-interactive":n[5]},n[15]))},{style:Object.entries(n[16]).map(nf).concat([n[3]]).join(" ")},n[20]&&n[7]?{"aria-current":"page"}:{},n[20]?{}:{role:n[8]},!n[20]&&n[8]==="option"?{"aria-selected":n[0]?"true":"false"}:{},!n[20]&&(n[8]==="radio"||n[8]==="checkbox")?{"aria-checked":n[13]&&n[13].checked?"true":"false"}:{},n[20]?{}:{"aria-disabled":n[9]?"true":"false"},{"data-menu-item-skip-restore-focus":n[10]||void 0},{tabindex:n[18]},{href:n[11]},n[17],n[27]];var r=n[12];function a(o){let u={$$slots:{default:[X_]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)u=V(u,s[c]);return{props:u}}return r&&(e=new r(a(n)),n[33](e),e.$on("click",n[24]),e.$on("keydown",n[25]),e.$on("SMUIGenericInput:mount",n[26]),e.$on("SMUIGenericInput:unmount",n[34])),{c(){e&&on(e.$$.fragment),t=Vt()},l(o){e&&Ui(e.$$.fragment,o),t=Vt()},m(o,u){e&&Jt(e,o,u),ue(o,t,u),i=!0},p(o,u){const c=u[0]&150974399?Re(s,[u[0]&15213235&&{use:[...o[5]?[]:[[Wn,{ripple:!o[13],unbounded:!1,color:(o[7]||o[0])&&o[4]==null?"primary":o[4],disabled:o[9],addClass:o[21],removeClass:o[22],addStyle:o[23]}]],o[19],...o[1]]},u[0]&1082277&&{class:ye(Pe({[o[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":o[7],"mdc-deprecated-list-item--selected":o[0],"mdc-deprecated-list-item--disabled":o[9],"mdc-menu-item--selected":!o[20]&&o[8]==="menuitem"&&o[0],"smui-menu-item--non-interactive":o[5]},o[15]))},u[0]&65544&&{style:Object.entries(o[16]).map(nf).concat([o[3]]).join(" ")},u[0]&1048704&&Et(o[20]&&o[7]?{"aria-current":"page"}:{}),u[0]&1048832&&Et(o[20]?{}:{role:o[8]}),u[0]&1048833&&Et(!o[20]&&o[8]==="option"?{"aria-selected":o[0]?"true":"false"}:{}),u[0]&1057024&&Et(!o[20]&&(o[8]==="radio"||o[8]==="checkbox")?{"aria-checked":o[13]&&o[13].checked?"true":"false"}:{}),u[0]&1049088&&Et(o[20]?{}:{"aria-disabled":o[9]?"true":"false"}),u[0]&1024&&{"data-menu-item-skip-restore-focus":o[10]||void 0},u[0]&262144&&{tabindex:o[18]},u[0]&2048&&{href:o[11]},u[0]&131072&&Et(o[17]),u[0]&134217728&&Et(o[27])]):{};if(u[0]&64|u[1]&16&&(c.$$scope={dirty:u,ctx:o}),r!==(r=o[12])){if(e){xs();const l=e;_e(l.$$.fragment,1,0,()=>{Zt(l,1)}),js()}r?(e=new r(a(o)),o[33](e),e.$on("click",o[24]),e.$on("keydown",o[25]),e.$on("SMUIGenericInput:mount",o[26]),e.$on("SMUIGenericInput:unmount",o[34]),on(e.$$.fragment),Ee(e.$$.fragment,1),Jt(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(o){i||(e&&Ee(e.$$.fragment,o),i=!0)},o(o){e&&_e(e.$$.fragment,o),i=!1},d(o){n[33](null),o&&D(t),e&&Zt(e,o)}}}let Y_=0;const nf=([n,e])=>`${n}: ${e};`;function J_(n,e,t){let i;const s=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","getPrimaryText","getElement"];let r=oe(e,s),{$$slots:a={},$$scope:o}=e;var u;const c=Be(we());let l=()=>{};function h(w){return w===l}let{use:d=[]}=e,{class:f=""}=e,{style:m=""}=e,{color:y=void 0}=e,{nonInteractive:g=(u=ft("SMUI:list:nonInteractive"))!==null&&u!==void 0?u:!1}=e;tt("SMUI:list:nonInteractive",void 0);let{ripple:v=!g}=e,{activated:I=!1}=e,{role:_=ft("SMUI:list:item:role")}=e;tt("SMUI:list:item:role",void 0);let{selected:M=!1}=e,{disabled:j=!1}=e,{skipRestoreFocus:b=!1}=e,{tabindex:N=l}=e,{inputId:T="SMUI-form-field-list-"+Y_++}=e,{href:A=void 0}=e,k,Z={},ie={},R={},z,q,U=ft("SMUI:list:item:nav"),{component:P=U?A?Rl:Xi:Dy}=e;tt("SMUI:generic:input:props",{id:T}),tt("SMUI:separator:context",void 0),Vn(()=>{if(!M&&!g){let re=!0,xe=k;for(;xe.previousSibling;)if(xe=xe.previousSibling,xe.nodeType===1&&xe.classList.contains("mdc-deprecated-list-item")&&!xe.classList.contains("mdc-deprecated-list-item--disabled")){re=!1;break}re&&(q=window.requestAnimationFrame(mn))}const w={_smui_list_item_accessor:!0,get element(){return Ke()},get selected(){return M},set selected(re){t(0,M=re)},hasClass:L,addClass:te,removeClass:Ne,getAttr:jt,addAttr:zt,removeAttr:Kt,getPrimaryText:de,get checked(){var re;return(re=z&&z.checked)!==null&&re!==void 0?re:!1},set checked(re){z&&t(13,z.checked=!!re,z)},get hasCheckbox(){return!!(z&&"_smui_checkbox_accessor"in z)},get hasRadio(){return!!(z&&"_smui_radio_accessor"in z)},activateRipple(){z&&z.activateRipple()},deactivateRipple(){z&&z.deactivateRipple()},getValue(){return r.value}};return it(Ke(),"SMUIListItem:mount",w),()=>{it(Ke(),"SMUIListItem:unmount",w)}}),oi(()=>{q&&window.cancelAnimationFrame(q)});function L(w){return w in Z?Z[w]:Ke().classList.contains(w)}function te(w){Z[w]||t(15,Z[w]=!0,Z)}function Ne(w){(!(w in Z)||Z[w])&&t(15,Z[w]=!1,Z)}function Ut(w,re){ie[w]!=re&&(re===""||re==null?(delete ie[w],t(16,ie)):t(16,ie[w]=re,ie))}function jt(w){var re;return w in R?(re=R[w])!==null&&re!==void 0?re:null:Ke().getAttribute(w)}function zt(w,re){R[w]!==re&&t(17,R[w]=re,R)}function Kt(w){(!(w in R)||R[w]!=null)&&t(17,R[w]=void 0,R)}function mn(){let w=!0,re=k.getElement();for(;re.nextElementSibling;)if(re=re.nextElementSibling,re.nodeType===1&&re.classList.contains("mdc-deprecated-list-item")){const xe=re.attributes.getNamedItem("tabindex");if(xe&&xe.value==="0"){w=!1;break}}w&&t(18,i=0)}function Xt(w){j||it(Ke(),"SMUI:action",w)}function Se(w){const re=w.key==="Enter",xe=w.key==="Space";(re||xe)&&Xt(w)}function F(w){("_smui_checkbox_accessor"in w.detail||"_smui_radio_accessor"in w.detail)&&t(13,z=w.detail)}function de(){var w,re,xe;const kt=Ke(),Pn=kt.querySelector(".mdc-deprecated-list-item__primary-text");if(Pn)return(w=Pn.textContent)!==null&&w!==void 0?w:"";const Qt=kt.querySelector(".mdc-deprecated-list-item__text");return Qt?(re=Qt.textContent)!==null&&re!==void 0?re:"":(xe=kt.textContent)!==null&&xe!==void 0?xe:""}function Ke(){return k.getElement()}function pn(w){ge[w?"unshift":"push"](()=>{k=w,t(14,k)})}const rn=()=>t(13,z=void 0);return n.$$set=w=>{e=V(V({},e),Me(w)),t(27,r=oe(e,s)),"use"in w&&t(1,d=w.use),"class"in w&&t(2,f=w.class),"style"in w&&t(3,m=w.style),"color"in w&&t(4,y=w.color),"nonInteractive"in w&&t(5,g=w.nonInteractive),"ripple"in w&&t(6,v=w.ripple),"activated"in w&&t(7,I=w.activated),"role"in w&&t(8,_=w.role),"selected"in w&&t(0,M=w.selected),"disabled"in w&&t(9,j=w.disabled),"skipRestoreFocus"in w&&t(10,b=w.skipRestoreFocus),"tabindex"in w&&t(28,N=w.tabindex),"inputId"in w&&t(29,T=w.inputId),"href"in w&&t(11,A=w.href),"component"in w&&t(12,P=w.component),"$$scope"in w&&t(35,o=w.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&268444193&&t(18,i=h(N)?!g&&!j&&(M||z&&z.checked)?0:-1:N)},[M,d,f,m,y,g,v,I,_,j,b,A,P,z,k,Z,ie,R,i,c,U,te,Ne,Ut,Xt,Se,F,r,N,T,de,Ke,a,pn,rn,o]}class Z_ extends Ve{constructor(e){super();Ue(this,e,J_,Q_,ke,{use:1,class:2,style:3,color:4,nonInteractive:5,ripple:6,activated:7,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,getPrimaryText:30,getElement:31},null,[-1,-1])}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}}var NT=It({class:"mdc-deprecated-list-item__text",component:Xi});It({class:"mdc-deprecated-list-item__primary-text",component:Xi});It({class:"mdc-deprecated-list-item__secondary-text",component:Xi});function $_(n){let e,t,i,s,r,a;const o=n[8].default,u=Qe(o,n,n[7],null);let c=[{class:t=ye({[n[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":n[4]})},n[5]],l={};for(let h=0;h<c.length;h+=1)l=V(l,c[h]);return{c(){e=X("span"),u&&u.c(),this.h()},l(h){e=Y(h,"SPAN",{class:!0});var d=$(e);u&&u.l(d),d.forEach(D),this.h()},h(){le(e,l)},m(h,d){ue(h,e,d),u&&u.m(e,null),n[9](e),s=!0,r||(a=[fe(i=mt.call(null,e,n[0])),fe(n[3].call(null,e))],r=!0)},p(h,[d]){u&&u.p&&(!s||d&128)&&Je(u,o,h,h[7],s?Ye(o,h[7],d,null):Ze(h[7]),null),le(e,l=Re(c,[(!s||d&2&&t!==(t=ye({[h[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":h[4]})))&&{class:t},d&32&&h[5]])),i&&Fe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(Ee(u,h),s=!0)},o(h){_e(u,h),s=!1},d(h){h&&D(e),u&&u.d(h),n[9](null),r=!1,Ce(a)}}}function eT(n,e,t){const i=["use","class","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e;const o=Be(we());let{use:u=[]}=e,{class:c=""}=e,l,h=ft("SMUI:list:graphic:menu-selection-group");function d(){return l}function f(m){ge[m?"unshift":"push"](()=>{l=m,t(2,l)})}return n.$$set=m=>{e=V(V({},e),Me(m)),t(5,s=oe(e,i)),"use"in m&&t(0,u=m.use),"class"in m&&t(1,c=m.class),"$$scope"in m&&t(7,a=m.$$scope)},[u,c,l,o,h,s,d,a,r,f]}class tT extends Ve{constructor(e){super();Ue(this,e,eT,$_,ke,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}It({class:"mdc-deprecated-list-item__meta",component:Xi});It({class:"mdc-deprecated-list-group",component:bn});It({class:"mdc-deprecated-list-group__subheader",component:Ry});const kT=Z_,nT=tT;It({class:"mdc-menu__selection-group-icon",component:nT});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Nt={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},iT={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var sf=function(n){vn(e,n);function e(t){var i=n.call(this,at(at({},e.defaultAdapter),t))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return iT},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Nt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(Nt.OPEN),this.adapter.addClass(Nt.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(Nt.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(Nt.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(Nt.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(Nt.OPENING)||this.adapter.hasClass(Nt.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(Nt.CLOSING)},e.prototype.handleKeydown=function(t){var i=t.keyCode,s=t.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.handleTransitionEnd=function(t){var i=Nt.OPENING,s=Nt.CLOSING,r=Nt.OPEN,a=Nt.ANIMATE,o=Nt.ROOT,u=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,o);!u||(this.isClosing()?(this.adapter.removeClass(r),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(a),this.adapter.removeClass(i),this.adapter.removeClass(s))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return Boolean(t.classList)},e}(Gn);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var sT=function(n){vn(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(sf);function rT(n){let e,t,i,s,r,a;const o=n[15].default,u=Qe(o,n,n[14],null);let c=[{class:t=ye(Pe({[n[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":n[2]==="dismissible","mdc-drawer--modal":n[2]==="modal","smui-drawer__absolute":n[2]==="modal"&&!n[3]},n[6]))},n[8]],l={};for(let h=0;h<c.length;h+=1)l=V(l,c[h]);return{c(){e=X("aside"),u&&u.c(),this.h()},l(h){e=Y(h,"ASIDE",{class:!0});var d=$(e);u&&u.l(d),d.forEach(D),this.h()},h(){le(e,l)},m(h,d){ue(h,e,d),u&&u.m(e,null),n[16](e),s=!0,r||(a=[fe(i=mt.call(null,e,n[0])),fe(n[7].call(null,e)),$e(e,"keydown",n[17]),$e(e,"transitionend",n[18])],r=!0)},p(h,[d]){u&&u.p&&(!s||d&16384)&&Je(u,o,h,h[14],s?Ye(o,h[14],d,null):Ze(h[14]),null),le(e,l=Re(c,[(!s||d&78&&t!==(t=ye(Pe({[h[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":h[2]==="dismissible","mdc-drawer--modal":h[2]==="modal","smui-drawer__absolute":h[2]==="modal"&&!h[3]},h[6]))))&&{class:t},d&256&&h[8]])),i&&Fe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(Ee(u,h),s=!0)},o(h){_e(u,h),s=!1},d(h){h&&D(e),u&&u.d(h),n[16](null),r=!1,Ce(a)}}}function oT(n,e,t){const i=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e;const{FocusTrap:o}=Xg,u=Be(we());let{use:c=[]}=e,{class:l=""}=e,{variant:h=void 0}=e,{open:d=!1}=e,{fixed:f=!0}=e,m,y,g={},v=null,I,_=!1;tt("SMUI:list:nav",!0),tt("SMUI:list:item:nav",!0),tt("SMUI:list:wrapFocus",!0);let M=h;Vn(()=>{I=new o(m,{skipInitialFocus:!0}),t(4,y=j()),y&&y.init()}),oi(()=>{y&&y.destroy(),_&&_.removeEventListener("SMUIDrawerScrim:click",A)});function j(){var U,P;_&&_.removeEventListener("SMUIDrawerScrim:click",A),h==="modal"&&(_=(P=(U=m.parentNode)===null||U===void 0?void 0:U.querySelector(".mdc-drawer-scrim"))!==null&&P!==void 0?P:!1,_&&_.addEventListener("SMUIDrawerScrim:click",A));const L=h==="dismissible"?sf:h==="modal"?sT:void 0;return L?new L({addClass:N,removeClass:T,hasClass:b,elementHasClass:(te,Ne)=>te.classList.contains(Ne),saveFocus:()=>v=document.activeElement,restoreFocus:()=>{v&&"focus"in v&&m.contains(document.activeElement)&&v.focus()},focusActiveNavigationItem:()=>{const te=m.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");te&&te.focus()},notifyClose:()=>{t(9,d=!1),it(m,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{t(9,d=!0),it(m,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>I.trapFocus(),releaseFocus:()=>I.releaseFocus()}):void 0}function b(U){return U in g?g[U]:ie().classList.contains(U)}function N(U){g[U]||t(6,g[U]=!0,g)}function T(U){(!(U in g)||g[U])&&t(6,g[U]=!1,g)}function A(){y&&"handleScrimClick"in y&&y.handleScrimClick()}function k(U){t(9,d=U)}function Z(){return d}function ie(){return m}function R(U){ge[U?"unshift":"push"](()=>{m=U,t(5,m)})}const z=U=>y&&y.handleKeydown(U),q=U=>y&&y.handleTransitionEnd(U);return n.$$set=U=>{e=V(V({},e),Me(U)),t(8,s=oe(e,i)),"use"in U&&t(0,c=U.use),"class"in U&&t(1,l=U.class),"variant"in U&&t(2,h=U.variant),"open"in U&&t(9,d=U.open),"fixed"in U&&t(3,f=U.fixed),"$$scope"in U&&t(14,a=U.$$scope)},n.$$.update=()=>{n.$$.dirty&8212&&M!==h&&(t(13,M=h),y&&y.destroy(),t(6,g={}),t(4,y=j()),y&&y.init()),n.$$.dirty&528&&y&&y.isOpen()!==d&&(d?y.open():y.close())},[c,l,h,f,y,m,g,u,s,d,k,Z,ie,M,a,r,R,z,q]}class MT extends Ve{constructor(e){super();Ue(this,e,oT,rT,ke,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var PT=It({class:"mdc-drawer-app-content",component:bn}),FT=It({class:"mdc-drawer__content",component:bn});It({class:"mdc-drawer__header",component:bn});It({class:"mdc-drawer__title",component:wy});It({class:"mdc-drawer__subtitle",component:Cy});function aT(n){let e,t,i,s,r,a;const o=n[9].default,u=Qe(o,n,n[8],null);let c=[{class:t=ye({[n[1]]:!0,"mdc-card":!0,"mdc-card--outlined":n[2]==="outlined","smui-card--padded":n[3]})},n[6]],l={};for(let h=0;h<c.length;h+=1)l=V(l,c[h]);return{c(){e=X("div"),u&&u.c(),this.h()},l(h){e=Y(h,"DIV",{class:!0});var d=$(e);u&&u.l(d),d.forEach(D),this.h()},h(){le(e,l)},m(h,d){ue(h,e,d),u&&u.m(e,null),n[10](e),s=!0,r||(a=[fe(i=mt.call(null,e,n[0])),fe(n[5].call(null,e))],r=!0)},p(h,[d]){u&&u.p&&(!s||d&256)&&Je(u,o,h,h[8],s?Ye(o,h[8],d,null):Ze(h[8]),null),le(e,l=Re(c,[(!s||d&14&&t!==(t=ye({[h[1]]:!0,"mdc-card":!0,"mdc-card--outlined":h[2]==="outlined","smui-card--padded":h[3]})))&&{class:t},d&64&&h[6]])),i&&Fe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(Ee(u,h),s=!0)},o(h){_e(u,h),s=!1},d(h){h&&D(e),u&&u.d(h),n[10](null),r=!1,Ce(a)}}}function uT(n,e,t){const i=["use","class","variant","padded","getElement"];let s=oe(e,i),{$$slots:r={},$$scope:a}=e;const o=Be(we());let{use:u=[]}=e,{class:c=""}=e,{variant:l="raised"}=e,{padded:h=!1}=e,d;function f(){return d}function m(y){ge[y?"unshift":"push"](()=>{d=y,t(4,d)})}return n.$$set=y=>{e=V(V({},e),Me(y)),t(6,s=oe(e,i)),"use"in y&&t(0,u=y.use),"class"in y&&t(1,c=y.class),"variant"in y&&t(2,l=y.variant),"padded"in y&&t(3,h=y.padded),"$$scope"in y&&t(8,a=y.$$scope)},[u,c,l,h,d,o,s,f,a,r,m]}class UT extends Ve{constructor(e){super();Ue(this,e,uT,aT,ke,{use:0,class:1,variant:2,padded:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}It({class:"smui-card__content",component:bn});It({class:"mdc-card__media-content",component:bn});It({class:"mdc-card__action-buttons",component:bn});It({class:"mdc-card__action-icons",component:bn});export{LT as $,Vn as A,V as B,pT as C,fe as D,Qe as E,Je as F,Ze as G,Ye as H,ET as I,_n as J,IT as K,vT as L,yT as M,CT as N,_T as O,ST as P,bT as Q,gT as R,Ve as S,AT as T,wT as U,TT as V,me as W,Gt as X,Hf as Y,kT as Z,NT as _,$ as a,Fe as a0,OT as a1,ge as a2,MT as a3,PT as a4,FT as a5,hT as a6,UT as a7,cT as a8,$e as a9,Ce as aa,oi as ab,DT as ac,Yf as ad,Kf as ae,mT as af,fT as ag,RT as ah,Q as b,Y as c,D as d,X as e,ue as f,Fs as g,ro as h,Ue as i,on as j,Rt as k,Vt as l,Ui as m,Dt as n,Jt as o,Re as p,Et as q,xs as r,ke as s,si as t,_e as u,Zt as v,js as w,Ee as x,tt as y,dT as z};
