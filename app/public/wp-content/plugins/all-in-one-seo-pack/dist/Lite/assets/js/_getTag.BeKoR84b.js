import{t as o,r as i,u as P,h as A,c as d,w as T,d as k,x as s,m as O,y as c}from"./helpers.BYd0a-KO.js";var l=o(i,"WeakMap"),x=P(Object.keys,Object),M=Object.prototype,j=M.hasOwnProperty;function C(r){if(!A(r))return x(r);var e=[];for(var t in Object(r))j.call(r,t)&&t!="constructor"&&e.push(t);return e}function K(r){return d(r)?T(r):C(r)}function V(r,e){for(var t=-1,n=e.length,u=r.length;++t<n;)r[u+t]=e[t];return r}function L(r,e){for(var t=-1,n=r==null?0:r.length,u=0,y=[];++t<n;){var v=r[t];e(v,t,r)&&(y[u++]=v)}return y}function W(){return[]}var D=Object.prototype,G=D.propertyIsEnumerable,m=Object.getOwnPropertySymbols,I=m?function(r){return r==null?[]:(r=Object(r),L(m(r),function(e){return G.call(r,e)}))}:W;function $(r,e,t){var n=e(r);return k(r)?n:V(n,t(r))}function z(r){return $(r,K,I)}var p=o(i,"DataView"),f=o(i,"Promise"),g=o(i,"Set"),w="[object Map]",E="[object Object]",b="[object Promise]",S="[object Set]",h="[object WeakMap]",_="[object DataView]",B=s(p),F=s(c),N=s(f),R=s(g),U=s(l),a=O;(p&&a(new p(new ArrayBuffer(1)))!=_||c&&a(new c)!=w||f&&a(f.resolve())!=b||g&&a(new g)!=S||l&&a(new l)!=h)&&(a=function(r){var e=O(r),t=e==E?r.constructor:void 0,n=t?s(t):"";if(n)switch(n){case B:return _;case F:return w;case N:return b;case R:return S;case U:return h}return e});const H=a;export{g as S,l as W,V as a,C as b,z as c,I as d,$ as e,L as f,H as g,K as k,W as s};
