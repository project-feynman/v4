var d=Object.defineProperty;var o=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var i=(n,a,s)=>a in n?d(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s,e=(n,a)=>{for(var s in a||(a={}))m.call(a,s)&&i(n,s,a[s]);if(o)for(var s of o(a))r.call(a,s)&&i(n,s,a[s]);return n};import{C as f,R as h,T as u,N as y,O as b,U as w,V as v}from"./vendor-0c076a04.js";const D=f(null);h({apiKey:"AIzaSyB7XsbhYEd_4DQigc_hfnmdpcwlvzugPOw",authDomain:"feynman-mvp.firebaseapp.com",databaseURL:"https://feynman-mvp.firebaseio.com",projectId:"feynman-mvp",storageBucket:"feynman-mvp.appspot.com",messagingSenderId:"148720897081",appId:"1:148720897081:web:fdf5c605dcc74b56",measurementId:"G-DR4M7QGV7Z"});const p=u();async function I(n){return new Promise(async a=>{const t=(await y(b(p,n))).docs.map(c=>e({id:c.id},c.data()));a(t)})}async function z(n){return new Promise(async a=>{const s=await w(v(p,n)),t=e({id:s.id},s.data());a(t)})}export{I as a,p as d,z as f,D as s};