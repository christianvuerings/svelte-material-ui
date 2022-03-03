function Ct(){}const mi=r=>r;function Ge(r,e){for(const t in e)r[t]=e[t];return r}function Yn(r){return r()}function cn(){return Object.create(null)}function ie(r){r.forEach(Yn)}function jn(r){return typeof r=="function"}function Ai(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let se;function jr(r,e){return se||(se=document.createElement("a")),se.href=e,r===se.href}function Ti(r){return Object.keys(r).length===0}function Ci(r,...e){if(r==null)return Ct;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function zr(r,e,t){r.$$.on_destroy.push(Ci(e,t))}function $r(r,e,t,n){if(r){const i=zn(r,e,t,n);return r[0](i)}}function zn(r,e,t,n){return r[1]&&n?Ge(t.ctx.slice(),r[1](n(e))):t.ctx}function qr(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const a=[],s=Math.max(e.dirty.length,i.length);for(let o=0;o<s;o+=1)a[o]=e.dirty[o]|i[o];return a}return e.dirty|i}return e.dirty}function Zr(r,e,t,n,i,a){if(i){const s=zn(e,t,n,a);r.p(s,i)}}function Qr(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Jr(r){const e={};for(const t in r)t[0]!=="$"&&(e[t]=r[t]);return e}function ta(r,e){const t={};e=new Set(e);for(const n in r)!e.has(n)&&n[0]!=="$"&&(t[n]=r[n]);return t}function ea(r){const e={};for(const t in r)e[t]=!0;return e}function na(r,e,t){return r.set(t),e}function ia(r){return r&&jn(r.destroy)?r.destroy:Ct}const $n=typeof window!="undefined";let gi=$n?()=>window.performance.now():()=>Date.now(),qn=$n?r=>requestAnimationFrame(r):Ct;const Ut=new Set;function Zn(r){Ut.forEach(e=>{e.c(r)||(Ut.delete(e),e.f())}),Ut.size!==0&&qn(Zn)}function Ii(r){let e;return Ut.size===0&&qn(Zn),{promise:new Promise(t=>{Ut.add(e={c:r,f:t})}),abort(){Ut.delete(e)}}}let _e=!1;function vi(){_e=!0}function Si(){_e=!1}function yi(r,e,t,n){for(;r<e;){const i=r+(e-r>>1);t(i)<=n?r=i+1:e=i}return r}function _i(r){if(r.hydrate_init)return;r.hydrate_init=!0;let e=r.childNodes;if(r.nodeName==="HEAD"){const d=[];for(let u=0;u<e.length;u++){const l=e[u];l.claim_order!==void 0&&d.push(l)}e=d}const t=new Int32Array(e.length+1),n=new Int32Array(e.length);t[0]=-1;let i=0;for(let d=0;d<e.length;d++){const u=e[d].claim_order,l=(i>0&&e[t[i]].claim_order<=u?i+1:yi(1,i,E=>e[t[E]].claim_order,u))-1;n[d]=t[l]+1;const h=l+1;t[h]=d,i=Math.max(h,i)}const a=[],s=[];let o=e.length-1;for(let d=t[i]+1;d!=0;d=n[d-1]){for(a.push(e[d-1]);o>=d;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);a.reverse(),s.sort((d,u)=>d.claim_order-u.claim_order);for(let d=0,u=0;d<s.length;d++){for(;u<a.length&&s[d].claim_order>=a[u].claim_order;)u++;const l=u<a.length?a[u]:null;r.insertBefore(s[d],l)}}function Oi(r,e){if(_e){for(_i(r),(r.actual_end_child===void 0||r.actual_end_child!==null&&r.actual_end_child.parentElement!==r)&&(r.actual_end_child=r.firstChild);r.actual_end_child!==null&&r.actual_end_child.claim_order===void 0;)r.actual_end_child=r.actual_end_child.nextSibling;e!==r.actual_end_child?(e.claim_order!==void 0||e.parentNode!==r)&&r.insertBefore(e,r.actual_end_child):r.actual_end_child=e.nextSibling}else(e.parentNode!==r||e.nextSibling!==null)&&r.appendChild(e)}function ra(r,e,t){_e&&!t?Oi(r,e):(e.parentNode!==r||e.nextSibling!=t)&&r.insertBefore(e,t||null)}function Ri(r){r.parentNode.removeChild(r)}function aa(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function bi(r){return document.createElement(r)}function Li(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function tn(r){return document.createTextNode(r)}function sa(){return tn(" ")}function oa(){return tn("")}function ua(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function da(r){return function(e){return e.preventDefault(),r.call(this,e)}}function la(r){return function(e){return e.stopPropagation(),r.call(this,e)}}function Qn(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function ca(r,e){const t=Object.getOwnPropertyDescriptors(r.__proto__);for(const n in e)e[n]==null?r.removeAttribute(n):n==="style"?r.style.cssText=e[n]:n==="__value"?r.value=r[n]=e[n]:t[n]&&t[n].set?r[n]=e[n]:Qn(r,n,e[n])}function ha(r,e){for(const t in e)Qn(r,t,e[t])}function fa(r){return r===""?null:+r}function Di(r){return Array.from(r.childNodes)}function Ni(r){r.claim_info===void 0&&(r.claim_info={last_index:0,total_claimed:0})}function Jn(r,e,t,n,i=!1){Ni(r);const a=(()=>{for(let s=r.claim_info.last_index;s<r.length;s++){const o=r[s];if(e(o)){const d=t(o);return d===void 0?r.splice(s,1):r[s]=d,i||(r.claim_info.last_index=s),o}}for(let s=r.claim_info.last_index-1;s>=0;s--){const o=r[s];if(e(o)){const d=t(o);return d===void 0?r.splice(s,1):r[s]=d,i?d===void 0&&r.claim_info.last_index--:r.claim_info.last_index=s,o}}return n()})();return a.claim_order=r.claim_info.total_claimed,r.claim_info.total_claimed+=1,a}function ti(r,e,t,n){return Jn(r,i=>i.nodeName===e,i=>{const a=[];for(let s=0;s<i.attributes.length;s++){const o=i.attributes[s];t[o.name]||a.push(o.name)}a.forEach(s=>i.removeAttribute(s))},()=>n(e))}function pa(r,e,t){return ti(r,e,t,bi)}function Ea(r,e,t){return ti(r,e,t,Li)}function Mi(r,e){return Jn(r,t=>t.nodeType===3,t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n},()=>tn(e),!0)}function ma(r){return Mi(r," ")}function Aa(r,e){e=""+e,r.wholeText!==e&&(r.data=e)}function Ta(r,e){r.value=e==null?"":e}function Ca(r,e,t,n){t===null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function ga(r,e,t){r.classList[t?"add":"remove"](e)}function Ia(r,e=document.body){return Array.from(e.querySelectorAll(r))}let ee;function Qt(r){ee=r}function re(){if(!ee)throw new Error("Function called outside component initialization");return ee}function va(r){re().$$.on_mount.push(r)}function Sa(r){re().$$.after_update.push(r)}function ya(r){re().$$.on_destroy.push(r)}function _a(r,e){re().$$.context.set(r,e)}function Oa(r){return re().$$.context.get(r)}function Ra(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const $t=[],hn=[],Ae=[],Xe=[],ei=Promise.resolve();let Ye=!1;function ni(){Ye||(Ye=!0,ei.then(ii))}function ba(){return ni(),ei}function je(r){Ae.push(r)}function La(r){Xe.push(r)}const Le=new Set;let oe=0;function ii(){const r=ee;do{for(;oe<$t.length;){const e=$t[oe];oe++,Qt(e),Hi(e.$$)}for(Qt(null),$t.length=0,oe=0;hn.length;)hn.pop()();for(let e=0;e<Ae.length;e+=1){const t=Ae[e];Le.has(t)||(Le.add(t),t())}Ae.length=0}while($t.length);for(;Xe.length;)Xe.pop()();Ye=!1,Le.clear(),Qt(r)}function Hi(r){if(r.fragment!==null){r.update(),ie(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(je)}}const Te=new Set;let Nt;function Da(){Nt={r:0,c:[],p:Nt}}function Na(){Nt.r||ie(Nt.c),Nt=Nt.p}function ri(r,e){r&&r.i&&(Te.delete(r),r.i(e))}function xi(r,e,t,n){if(r&&r.o){if(Te.has(r))return;Te.add(r),Nt.c.push(()=>{Te.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}}const Ma=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Ha(r,e){xi(r,1,1,()=>{e.delete(r.key)})}function xa(r,e,t,n,i,a,s,o,d,u,l,h){let E=r.length,p=a.length,m=E;const T={};for(;m--;)T[r[m].key]=m;const C=[],v=new Map,D=new Map;for(m=p;m--;){const N=h(i,a,m),K=t(N);let W=s.get(K);W?n&&W.p(N,e):(W=u(K,N),W.c()),v.set(K,C[m]=W),K in T&&D.set(K,Math.abs(m-T[K]))}const G=new Set,tt=new Set;function It(N){ri(N,1),N.m(o,l),s.set(N.key,N),l=N.first,p--}for(;E&&p;){const N=C[p-1],K=r[E-1],W=N.key,ae=K.key;N===K?(l=N.first,E--,p--):v.has(ae)?!s.has(W)||G.has(W)?It(N):tt.has(ae)?E--:D.get(W)>D.get(ae)?(tt.add(W),It(N)):(G.add(ae),E--):(d(K,s),E--)}for(;E--;){const N=r[E];v.has(N.key)||d(N,s)}for(;p;)It(C[p-1]);return C}function wa(r,e){const t={},n={},i={$$scope:1};let a=r.length;for(;a--;){const s=r[a],o=e[a];if(o){for(const d in s)d in o||(n[d]=1);for(const d in o)i[d]||(t[d]=o[d],i[d]=1);r[a]=o}else for(const d in s)i[d]=1}for(const s in n)s in t||(t[s]=void 0);return t}function Pa(r){return typeof r=="object"&&r!==null?r:{}}function Fa(r,e,t){const n=r.$$.props[e];n!==void 0&&(r.$$.bound[n]=t,t(r.$$.ctx[n]))}function Ba(r){r&&r.c()}function Va(r,e){r&&r.l(e)}function wi(r,e,t,n){const{fragment:i,on_mount:a,on_destroy:s,after_update:o}=r.$$;i&&i.m(e,t),n||je(()=>{const d=a.map(Yn).filter(jn);s?s.push(...d):ie(d),r.$$.on_mount=[]}),o.forEach(je)}function Pi(r,e){const t=r.$$;t.fragment!==null&&(ie(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Fi(r,e){r.$$.dirty[0]===-1&&($t.push(r),ni(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function ka(r,e,t,n,i,a,s,o=[-1]){const d=ee;Qt(r);const u=r.$$={fragment:null,ctx:null,props:a,update:Ct,not_equal:i,bound:cn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:cn(),dirty:o,skip_bound:!1,root:e.target||d.$$.root};s&&s(u.root);let l=!1;if(u.ctx=t?t(r,e.props||{},(h,E,...p)=>{const m=p.length?p[0]:E;return u.ctx&&i(u.ctx[h],u.ctx[h]=m)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](m),l&&Fi(r,h)),E}):[],u.update(),l=!0,ie(u.before_update),u.fragment=n?n(u.ctx):!1,e.target){if(e.hydrate){vi();const h=Di(e.target);u.fragment&&u.fragment.l(h),h.forEach(Ri)}else u.fragment&&u.fragment.c();e.intro&&ri(r.$$.fragment),wi(r,e.target,e.anchor,e.customElement),Si(),ii()}Qt(d)}class Ua{$destroy(){Pi(this,1),this.$destroy=Ct}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Ti(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const wt=[];function Ka(r,e){return{subscribe:ai(r,e).subscribe}}function ai(r,e=Ct){let t;const n=new Set;function i(o){if(Ai(r,o)&&(r=o,t)){const d=!wt.length;for(const u of n)u[1](),wt.push(u,r);if(d){for(let u=0;u<wt.length;u+=2)wt[u][0](wt[u+1]);wt.length=0}}}function a(o){i(o(r))}function s(o,d=Ct){const u=[o,d];return n.add(u),n.size===1&&(t=e(i)||Ct),o(r),()=>{n.delete(u),n.size===0&&(t(),t=null)}}return{set:i,update:a,subscribe:s}}var Wa="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z",Ga="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z",Xa="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z",Ya="M6.59,3.41L2,8L6.59,12.6L8,11.18L4.82,8L8,4.82L6.59,3.41M12.41,3.41L11,4.82L14.18,8L11,11.18L12.41,12.6L17,8L12.41,3.41M21.59,11.59L13.5,19.68L9.83,16L8.42,17.41L13.5,22.5L23,13L21.59,11.59Z",ja="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H8V21C8 21.6 8.4 22 9 22H9.5C9.7 22 10 21.9 10.2 21.7L13.9 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M16 11H11.5L13.3 12.8L12 14L8 10L12 6L13.2 7.2L11.5 9H16V11Z",za="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z",$a="M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z",qa="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z",Za="M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z",Qa="M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z",Ja="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z",ts="M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z",es="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z",ns="M19,11.5C19,11.5 17,13.67 17,15A2,2 0 0,0 19,17A2,2 0 0,0 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z",is="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z",rs="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z",as="M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z",ss="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",os="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z",us="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",ds="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z",ls="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z",cs="M21,12C21,9.97 20.33,8.09 19,6.38V17.63C20.33,15.97 21,14.09 21,12M17.63,19H6.38C7.06,19.55 7.95,20 9.05,20.41C10.14,20.8 11.13,21 12,21C12.88,21 13.86,20.8 14.95,20.41C16.05,20 16.94,19.55 17.63,19M11,17L7,9V17H11M17,9L13,17H17V9M12,14.53L15.75,7H8.25L12,14.53M17.63,5C15.97,3.67 14.09,3 12,3C9.91,3 8.03,3.67 6.38,5H17.63M5,17.63V6.38C3.67,8.09 3,9.97 3,12C3,14.09 3.67,15.97 5,17.63M23,12C23,15.03 21.94,17.63 19.78,19.78C17.63,21.94 15.03,23 12,23C8.97,23 6.38,21.94 4.22,19.78C2.06,17.63 1,15.03 1,12C1,8.97 2.06,6.38 4.22,4.22C6.38,2.06 8.97,1 12,1C15.03,1 17.63,2.06 19.78,4.22C21.94,6.38 23,8.97 23,12Z",hs="M9,6H5V10H7V8H9M19,10H17V12H15V14H19M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2",fs="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z",ps="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",Es="M10,4V1L14,5L10,9V6A6,6 0 0,0 4,12L4.08,13H2.06L2,12A8,8 0 0,1 10,4M17,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H17A2,2 0 0,1 15,20V4A2,2 0 0,1 17,2M4,15H13V22H4A2,2 0 0,1 2,20V17A2,2 0 0,1 4,15Z",ms="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M10,15.33C10.16,15.87 10.14,16.37 10,16.83C10,16.88 9.96,16.93 9.94,17C9.92,17 9.9,17.07 9.87,17.12C9.76,17.36 9.6,17.59 9.41,17.79C8.83,18.43 8,18.67 7.67,18.47C7.29,18.25 7.5,17.35 8.16,16.64C8.88,15.88 9.92,15.38 9.92,15.38V15.38L10,15.33M18.27,6.28C17.82,4.5 14.87,3.92 12.09,4.91C10.43,5.5 8.63,6.42 7.34,7.63C5.81,9.07 5.56,10.32 5.66,10.84C6,12.68 8.54,13.89 9.58,14.78V14.79C9.28,14.94 7.04,16.07 6.5,17.23C5.96,18.45 6.6,19.33 7,19.45C8.34,19.81 9.69,19.16 10.41,18.07C11.11,17.03 11.06,15.68 10.75,15C11.17,14.9 11.66,14.85 12.28,14.92C14.04,15.13 14.38,16.22 14.31,16.68C14.25,17.14 13.88,17.39 13.76,17.47C13.64,17.54 13.6,17.57 13.61,17.63C13.62,17.71 13.68,17.71 13.78,17.69C13.93,17.66 14.71,17.32 14.74,16.47C14.78,15.39 13.75,14.19 11.93,14.22C11.18,14.24 10.71,14.31 10.37,14.44L10.29,14.35C9.16,13.15 7.08,12.3 7.17,10.68C7.2,10.09 7.4,8.55 11.17,6.67C14.25,5.13 16.72,5.55 17.15,6.5C17.76,7.83 15.83,10.32 12.63,10.68C11.41,10.82 10.76,10.34 10.6,10.17C10.43,10 10.41,9.97 10.35,10C10.24,10.07 10.31,10.23 10.35,10.33C10.44,10.58 10.84,11 11.5,11.24C12.09,11.43 13.53,11.54 15.26,10.87C17.2,10.12 18.72,8.03 18.27,6.28Z",As="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z",Ts="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",Cs="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z",gs="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z";class en{constructor(e,t){t=Object.assign({},en.defaults,t),this.element=e,this.opts=t,this.touchStartX=null,this.touchStartY=null,this.touchEndX=null,this.touchEndY=null,this.velocityX=null,this.velocityY=null,this.longPressTimer=null,this.doubleTapWaiting=!1,this.handlers={panstart:[],panmove:[],panend:[],swipeleft:[],swiperight:[],swipeup:[],swipedown:[],tap:[],doubletap:[],longpress:[]},this._onTouchStart=this.onTouchStart.bind(this),this._onTouchMove=this.onTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.element.addEventListener("touchstart",this._onTouchStart,bt),this.element.addEventListener("touchmove",this._onTouchMove,bt),this.element.addEventListener("touchend",this._onTouchEnd,bt),this.opts.mouseSupport&&!("ontouchstart"in window)&&(this.element.addEventListener("mousedown",this._onTouchStart,bt),document.addEventListener("mousemove",this._onTouchMove,bt),document.addEventListener("mouseup",this._onTouchEnd,bt))}destroy(){this.element.removeEventListener("touchstart",this._onTouchStart),this.element.removeEventListener("touchmove",this._onTouchMove),this.element.removeEventListener("touchend",this._onTouchEnd),this.element.removeEventListener("mousedown",this._onTouchStart),document.removeEventListener("mousemove",this._onTouchMove),document.removeEventListener("mouseup",this._onTouchEnd),clearTimeout(this.longPressTimer),clearTimeout(this.doubleTapTimer)}on(e,t){if(this.handlers[e])return this.handlers[e].push(t),{type:e,fn:t,cancel:()=>this.off(e,t)}}off(e,t){if(this.handlers[e]){const n=this.handlers[e].indexOf(t);n!==-1&&this.handlers[e].splice(n,1)}}fire(e,t){for(let n=0;n<this.handlers[e].length;n++)this.handlers[e][n](t)}onTouchStart(e){this.thresholdX=this.opts.threshold("x",this),this.thresholdY=this.opts.threshold("y",this),this.disregardVelocityThresholdX=this.opts.disregardVelocityThreshold("x",this),this.disregardVelocityThresholdY=this.opts.disregardVelocityThreshold("y",this),this.touchStartX=e.type==="mousedown"?e.screenX:e.changedTouches[0].screenX,this.touchStartY=e.type==="mousedown"?e.screenY:e.changedTouches[0].screenY,this.touchMoveX=null,this.touchMoveY=null,this.touchEndX=null,this.touchEndY=null,this.longPressTimer=setTimeout(()=>this.fire("longpress",e),this.opts.longPressTime),this.fire("panstart",e)}onTouchMove(e){if(e.type==="mousemove"&&(!this.touchStartX||this.touchEndX!==null))return;const t=(e.type==="mousemove"?e.screenX:e.changedTouches[0].screenX)-this.touchStartX;this.velocityX=t-this.touchMoveX,this.touchMoveX=t;const n=(e.type==="mousemove"?e.screenY:e.changedTouches[0].screenY)-this.touchStartY;this.velocityY=n-this.touchMoveY,this.touchMoveY=n;const i=Math.abs(this.touchMoveX),a=Math.abs(this.touchMoveY);this.swipingHorizontal=i>this.thresholdX,this.swipingVertical=a>this.thresholdY,this.swipingDirection=i>a?this.swipingHorizontal?"horizontal":"pre-horizontal":this.swipingVertical?"vertical":"pre-vertical",Math.max(i,a)>this.opts.pressThreshold&&clearTimeout(this.longPressTimer),this.fire("panmove",e)}onTouchEnd(e){if(e.type==="mouseup"&&(!this.touchStartX||this.touchEndX!==null))return;this.touchEndX=e.type==="mouseup"?e.screenX:e.changedTouches[0].screenX,this.touchEndY=e.type==="mouseup"?e.screenY:e.changedTouches[0].screenY,this.fire("panend",e),clearTimeout(this.longPressTimer);const t=this.touchEndX-this.touchStartX,n=Math.abs(t),i=this.touchEndY-this.touchStartY,a=Math.abs(i);n>this.thresholdX||a>this.thresholdY?(this.swipedHorizontal=this.opts.diagonalSwipes?Math.abs(t/i)<=this.opts.diagonalLimit:n>=a&&n>this.thresholdX,this.swipedVertical=this.opts.diagonalSwipes?Math.abs(i/t)<=this.opts.diagonalLimit:a>n&&a>this.thresholdY,this.swipedHorizontal&&(t<0?(this.velocityX<-this.opts.velocityThreshold||t<-this.disregardVelocityThresholdX)&&this.fire("swipeleft",e):(this.velocityX>this.opts.velocityThreshold||t>this.disregardVelocityThresholdX)&&this.fire("swiperight",e)),this.swipedVertical&&(i<0?(this.velocityY<-this.opts.velocityThreshold||i<-this.disregardVelocityThresholdY)&&this.fire("swipeup",e):(this.velocityY>this.opts.velocityThreshold||i>this.disregardVelocityThresholdY)&&this.fire("swipedown",e))):n<this.opts.pressThreshold&&a<this.opts.pressThreshold&&(this.doubleTapWaiting?(this.doubleTapWaiting=!1,clearTimeout(this.doubleTapTimer),this.fire("doubletap",e)):(this.doubleTapWaiting=!0,this.doubleTapTimer=setTimeout(()=>this.doubleTapWaiting=!1,this.opts.doubleTapTime),this.fire("tap",e)))}}en.defaults={threshold:(r,e)=>Math.max(25,Math.floor(.15*(r==="x"?window.innerWidth||document.body.clientWidth:window.innerHeight||document.body.clientHeight))),velocityThreshold:10,disregardVelocityThreshold:(r,e)=>Math.floor(.5*(r==="x"?e.element.clientWidth:e.element.clientHeight)),pressThreshold:8,diagonalSwipes:!1,diagonalLimit:Math.tan(45*1.5/180*Math.PI),longPressTime:500,doubleTapTime:300,mouseSupport:!0};let bt=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){bt={passive:!0}}}))}catch{}/*! *****************************************************************************
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
***************************************************************************** */var ze=function(r,e){return ze=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ze(r,e)};function g(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ze(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var f=function(){return f=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},f.apply(this,arguments)};function Bi(r,e,t,n){function i(a){return a instanceof t?a:new t(function(s){s(a)})}return new(t||(t=Promise))(function(a,s){function o(l){try{u(n.next(l))}catch(h){s(h)}}function d(l){try{u(n.throw(l))}catch(h){s(h)}}function u(l){l.done?a(l.value):i(l.value).then(o,d)}u((n=n.apply(r,e||[])).next())})}function Vi(r,e){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(u){return function(l){return d([u,l])}}function d(u){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,i&&(a=u[0]&2?i.return:u[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,u[1])).done)return a;switch(i=0,a&&(u=[u[0]&2,a.value]),u[0]){case 0:case 1:a=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,i=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(a=t.trys,!(a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){t.label=u[1];break}if(u[0]===6&&t.label<a[1]){t.label=a[1],a=u;break}if(a&&t.label<a[2]){t.label=a[2],t.ops.push(u);break}a[2]&&t.ops.pop(),t.trys.pop();continue}u=e.call(r,t)}catch(l){u=[6,l],i=0}finally{n=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function b(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],n=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function nn(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var n=t.call(r),i,a=[],s;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)a.push(i.value)}catch(o){s={error:o}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(s)throw s.error}}return a}function si(r,e,t){if(t||arguments.length===2)for(var n=0,i=e.length,a;n<i;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return r.concat(a||Array.prototype.slice.call(e))}/**
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
 */var O=function(){function r(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r}();/**
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
 */var Oe=function(){function r(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root=e,this.initialize.apply(this,si([],nn(n))),this.foundation=t===void 0?this.getDefaultFoundation():t,this.foundation.init(),this.initialSyncWithDOM()}return r.attachTo=function(e){return new r(e,new O({}))},r.prototype.initialize=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},r.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},r.prototype.initialSyncWithDOM=function(){},r.prototype.destroy=function(){this.foundation.destroy()},r.prototype.listen=function(e,t,n){this.root.addEventListener(e,t,n)},r.prototype.unlisten=function(e,t,n){this.root.removeEventListener(e,t,n)},r.prototype.emit=function(e,t,n){n===void 0&&(n=!1);var i;typeof CustomEvent=="function"?i=new CustomEvent(e,{bubbles:n,detail:t}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(e,n,!1,t)),this.root.dispatchEvent(i)},r}();/**
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
 */function qt(r){return r===void 0&&(r=window),ki(r)?{passive:!0}:!1}function ki(r){r===void 0&&(r=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};r.document.addEventListener("test",n,t),r.document.removeEventListener("test",n,t)}catch{e=!1}return e}var Is=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:qt},Symbol.toStringTag,{value:"Module"}));/**
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
 */function Ui(r,e){if(r.closest)return r.closest(e);for(var t=r;t;){if(rn(t,e))return t;t=t.parentElement}return null}function rn(r,e){var t=r.matches||r.webkitMatchesSelector||r.msMatchesSelector;return t.call(r,e)}function Ki(r){var e=r;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}var vs=Object.freeze(Object.defineProperty({__proto__:null,closest:Ui,matches:rn,estimateScrollWidth:Ki},Symbol.toStringTag,{value:"Module"}));/**
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
 */var Wi={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Gi={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},fn={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},ue;function Xi(r,e){e===void 0&&(e=!1);var t=r.CSS,n=ue;if(typeof ue=="boolean"&&!e)return ue;var i=t&&typeof t.supports=="function";if(!i)return!1;var a=t.supports("--css-vars","yes"),s=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=a||s,e||(ue=n),n}function Yi(r,e,t){if(!r)return{x:0,y:0};var n=e.x,i=e.y,a=n+t.left,s=i+t.top,o,d;if(r.type==="touchstart"){var u=r;o=u.changedTouches[0].pageX-a,d=u.changedTouches[0].pageY-s}else{var l=r;o=l.pageX-a,d=l.pageY-s}return{x:o,y:d}}/**
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
 */var pn=["touchstart","pointerdown","mousedown","keydown"],En=["touchend","pointerup","mouseup","contextmenu"],de=[],an=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(i){n.activateImpl(i)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return Wi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Gi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return fn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var i=e.cssClasses,a=i.ROOT,s=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(a),t.adapter.isUnbounded()&&(t.adapter.addClass(s),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,a=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(i),t.adapter.removeClass(a),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,i;if(t){try{for(var a=b(pn),s=a.next();!s.done;s=a.next()){var o=s.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(d){n={error:d}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,i;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var a=b(En),s=a.next();!s.done;s=a.next()){var o=s.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(d){n={error:d}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var i=b(pn),a=i.next();!a.done;a=i.next()){var s=a.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=b(En),a=i.next();!a.done;a=i.next()){var s=a.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,i=Object.keys(n);i.forEach(function(a){a.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[a],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var a=this.previousActivationEvent,s=a&&t!==void 0&&a.type!==t.type;if(!s){i.isActivated=!0,i.isProgrammatic=t===void 0,i.activationEvent=t,i.wasActivatedByPointer=i.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var o=t!==void 0&&de.length>0&&de.some(function(d){return n.adapter.containsEventTarget(d)});if(o){this.resetActivationState();return}t!==void 0&&(de.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){de=[],!i.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(i.wasElementMadeActive=n.checkElementMadeActive(t),i.wasElementMadeActive&&n.animateActivation()),i.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,a=n.VAR_FG_TRANSLATE_END,s=e.cssClasses,o=s.FG_DEACTIVATION,d=s.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var l="",h="";if(!this.adapter.isUnbounded()){var E=this.getFgTranslationCoordinates(),p=E.startPoint,m=E.endPoint;l=p.x+"px, "+p.y+"px",h=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(i,l),this.adapter.updateCssVariable(a,h),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(d),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},u)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,i=t.wasActivatedByPointer,a;i?a=Yi(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):a={x:this.frame.width/2,y:this.frame.height/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2};var s={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:a,endPoint:s}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState,a=i.hasDeactivationUXRun,s=i.isActivated,o=a||!s;o&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},fn.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(!!n.isActivated){var i=f({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,i=t.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),i=function(){var s=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return s+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:i();var a=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&a%2!==0?this.initialSize=a-1:this.initialSize=a,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,a=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},e}(O);/**
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
 */var Ie=function(r){g(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.disabled=!1,t}return e.attachTo=function(t,n){n===void 0&&(n={isUnbounded:void 0});var i=new e(t);return n.isUnbounded!==void 0&&(i.unbounded=n.isUnbounded),i},e.createAdapter=function(t){return{addClass:function(n){return t.root.classList.add(n)},browserSupportsCssVars:function(){return Xi(window)},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(n){return t.root.contains(n)},deregisterDocumentInteractionHandler:function(n,i){return document.documentElement.removeEventListener(n,i,qt())},deregisterInteractionHandler:function(n,i){return t.root.removeEventListener(n,i,qt())},deregisterResizeHandler:function(n){return window.removeEventListener("resize",n)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return rn(t.root,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(n,i){return document.documentElement.addEventListener(n,i,qt())},registerInteractionHandler:function(n,i){return t.root.addEventListener(n,i,qt())},registerResizeHandler:function(n){return window.addEventListener("resize",n)},removeClass:function(n){return t.root.classList.remove(n)},updateCssVariable:function(n,i){return t.root.style.setProperty(n,i)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return Boolean(this.isUnbounded)},set:function(t){this.isUnbounded=Boolean(t),this.setUnbounded()},enumerable:!1,configurable:!0}),e.prototype.activate=function(){this.foundation.activate()},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getDefaultFoundation=function(){return new an(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root;this.isUnbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded=function(){this.foundation.setUnbounded(Boolean(this.isUnbounded))},e}(Oe);/**
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
 */var Mt={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Ce={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},ji={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
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
 */var oi=function(r){g(e,r);function e(t){return r.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return ji},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Mt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(O);/**
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
 */var le=0,zi=function(r){g(e,r);function e(t){var n=r.call(this,t)||this;return n.wasDocked=!0,n.isDockedShowing=!0,n.currentAppBarOffsetTop=0,n.isCurrentlyBeingResized=!1,n.resizeThrottleId=le,n.resizeDebounceId=le,n.lastScrollPosition=n.adapter.getViewportScrollY(),n.topAppBarHeight=n.adapter.getTopAppBarHeight(),n}return e.prototype.destroy=function(){r.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),n=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=n,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=le,t.throttledResizeHandler()},Ce.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=le},Ce.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,n=this.currentAppBarOffsetTop<0,i=this.currentAppBarOffsetTop>t,a=n&&i;if(a)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==i)return this.isDockedShowing=i,!0}else return this.wasDocked=!0,!0;return a},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-Ce.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(oi);/**
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
 */var Ss=function(r){g(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.wasScrolled=!1,t}return e.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(Mt.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(Mt.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(zi);/**
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
 */var ys=function(r){g(e,r);function e(t){var n=r.call(this,t)||this;return n.collapsed=!1,n.isAlwaysCollapsed=!1,n}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){r.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(Mt.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(Mt.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var t=this.adapter.getViewportScrollY();t<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(Mt.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(Mt.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(oi);/**
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
 */var De="mdc-dom-focus-sentinel",$i=function(){function r(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return r.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},r.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+De)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},r.prototype.wrapTabFocus=function(e){var t=this,n=this.createSentinel(),i=this.createSentinel();n.addEventListener("focus",function(){var a=t.getFocusableElements(e);a.length>0&&a[a.length-1].focus()}),i.addEventListener("focus",function(){var a=t.getFocusableElements(e);a.length>0&&a[0].focus()}),e.insertBefore(n,e.children[0]),e.appendChild(i)},r.prototype.focusInitialElement=function(e,t){var n=0;t&&(n=Math.max(e.indexOf(t),0)),e[n].focus()},r.prototype.getFocusableElements=function(e){var t=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(n){var i=n.getAttribute("aria-disabled")==="true"||n.getAttribute("disabled")!=null||n.getAttribute("hidden")!=null||n.getAttribute("aria-hidden")==="true",a=n.tabIndex>=0&&n.getBoundingClientRect().width>0&&!n.classList.contains(De)&&!i,s=!1;if(a){var o=getComputedStyle(n);s=o.display==="none"||o.visibility==="hidden"}return a&&!s})},r.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(De),e},r}(),_s=Object.freeze(Object.defineProperty({__proto__:null,FocusTrap:$i},Symbol.toStringTag,{value:"Module"}));/**
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
 */var Et,ot,y={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};Et={},Et[""+y.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Et[""+y.LIST_ITEM_CLASS]="mdc-list-item",Et[""+y.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Et[""+y.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Et[""+y.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Et[""+y.ROOT]="mdc-list";var Pt=(ot={},ot[""+y.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",ot[""+y.LIST_ITEM_CLASS]="mdc-deprecated-list-item",ot[""+y.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",ot[""+y.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",ot[""+y.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",ot[""+y.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",ot[""+y.ROOT]="mdc-deprecated-list",ot),mt={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+y.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+y.LIST_ITEM_CLASS+` a,
    .`+Pt[y.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Pt[y.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+y.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+y.LIST_ITEM_CLASS+` a,
    .`+y.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+y.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Pt[y.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Pt[y.LIST_ITEM_CLASS]+` a,
    .`+Pt[y.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Pt[y.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},V={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
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
 */var S={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},Y=new Set;Y.add(S.BACKSPACE);Y.add(S.ENTER);Y.add(S.SPACEBAR);Y.add(S.PAGE_UP);Y.add(S.PAGE_DOWN);Y.add(S.END);Y.add(S.HOME);Y.add(S.ARROW_LEFT);Y.add(S.ARROW_UP);Y.add(S.ARROW_RIGHT);Y.add(S.ARROW_DOWN);Y.add(S.DELETE);Y.add(S.ESCAPE);Y.add(S.TAB);var $={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},j=new Map;j.set($.BACKSPACE,S.BACKSPACE);j.set($.ENTER,S.ENTER);j.set($.SPACEBAR,S.SPACEBAR);j.set($.PAGE_UP,S.PAGE_UP);j.set($.PAGE_DOWN,S.PAGE_DOWN);j.set($.END,S.END);j.set($.HOME,S.HOME);j.set($.ARROW_LEFT,S.ARROW_LEFT);j.set($.ARROW_UP,S.ARROW_UP);j.set($.ARROW_RIGHT,S.ARROW_RIGHT);j.set($.ARROW_DOWN,S.ARROW_DOWN);j.set($.DELETE,S.DELETE);j.set($.ESCAPE,S.ESCAPE);j.set($.TAB,S.TAB);var pt=new Set;pt.add(S.PAGE_UP);pt.add(S.PAGE_DOWN);pt.add(S.END);pt.add(S.HOME);pt.add(S.ARROW_LEFT);pt.add(S.ARROW_UP);pt.add(S.ARROW_RIGHT);pt.add(S.ARROW_DOWN);function H(r){var e=r.key;if(Y.has(e))return e;var t=j.get(r.keyCode);return t||S.UNKNOWN}function qi(r){return pt.has(H(r))}/**
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
 */var Zi=["input","button","textarea","select"],Lt=function(r){var e=r.target;if(!!e){var t=(""+e.tagName).toLowerCase();Zi.indexOf(t)===-1&&r.preventDefault()}};/**
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
 */function Qi(){var r={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return r}function Ji(r,e){for(var t=new Map,n=0;n<r;n++){var i=e(n).trim();if(!!i){var a=i[0].toLowerCase();t.has(a)||t.set(a,[]),t.get(a).push({text:i.toLowerCase(),index:n})}}return t.forEach(function(s){s.sort(function(o,d){return o.index-d.index})}),t}function $e(r,e){var t=r.nextChar,n=r.focusItemAtIndex,i=r.sortedIndexByFirstChar,a=r.focusedItemIndex,s=r.skipFocus,o=r.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){di(e)},V.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+t;var d;return e.typeaheadBuffer.length===1?d=tr(i,a,o,e):d=er(i,o,e),d!==-1&&!s&&n(d),d}function tr(r,e,t,n){var i=n.typeaheadBuffer[0],a=r.get(i);if(!a)return-1;if(i===n.currentFirstChar&&a[n.sortedIndexCursor].index===e){n.sortedIndexCursor=(n.sortedIndexCursor+1)%a.length;var s=a[n.sortedIndexCursor].index;if(!t(s))return s}n.currentFirstChar=i;var o=-1,d;for(d=0;d<a.length;d++)if(!t(a[d].index)){o=d;break}for(;d<a.length;d++)if(a[d].index>e&&!t(a[d].index)){o=d;break}return o!==-1?(n.sortedIndexCursor=o,a[n.sortedIndexCursor].index):-1}function er(r,e,t){var n=t.typeaheadBuffer[0],i=r.get(n);if(!i)return-1;var a=i[t.sortedIndexCursor];if(a.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!e(a.index))return a.index;for(var s=(t.sortedIndexCursor+1)%i.length,o=-1;s!==t.sortedIndexCursor;){var d=i[s],u=d.text.lastIndexOf(t.typeaheadBuffer,0)===0,l=!e(d.index);if(u&&l){o=s;break}s=(s+1)%i.length}return o!==-1?(t.sortedIndexCursor=o,i[t.sortedIndexCursor].index):-1}function ui(r){return r.typeaheadBuffer.length>0}function di(r){r.typeaheadBuffer=""}function mn(r,e){var t=r.event,n=r.isTargetListItem,i=r.focusedItemIndex,a=r.focusItemAtIndex,s=r.sortedIndexByFirstChar,o=r.isItemAtIndexDisabled,d=H(t)==="ArrowLeft",u=H(t)==="ArrowUp",l=H(t)==="ArrowRight",h=H(t)==="ArrowDown",E=H(t)==="Home",p=H(t)==="End",m=H(t)==="Enter",T=H(t)==="Spacebar";if(t.ctrlKey||t.metaKey||d||u||l||h||E||p||m)return-1;var C=!T&&t.key.length===1;if(C){Lt(t);var v={focusItemAtIndex:a,focusedItemIndex:i,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:o};return $e(v,e)}if(!T)return-1;n&&Lt(t);var D=n&&ui(e);if(D){var v={focusItemAtIndex:a,focusedItemIndex:i,nextChar:" ",sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:o};return $e(v,e)}return-1}/**
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
 */function nr(r){return r instanceof Array}var Os=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.wrapFocus=!1,n.isVertical=!0,n.isSingleSelectionList=!1,n.selectedIndex=V.UNSET_INDEX,n.focusedItemIndex=V.UNSET_INDEX,n.useActivatedClass=!1,n.useSelectedAttr=!1,n.ariaCurrentAttrValue=null,n.isCheckboxList=!1,n.isRadioList=!1,n.hasTypeahead=!1,n.typeaheadState=Qi(),n.sortedIndexByFirstChar=new Map,n}return Object.defineProperty(e,"strings",{get:function(){return mt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return y},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return V},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();if(t!==V.UNSET_INDEX){var n=this.adapter.listItemAtIndexHasClass(t,y.LIST_ITEM_ACTIVATED_CLASS);n&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t}},e.prototype.getSelectedIndexFromDOM=function(){for(var t=V.UNSET_INDEX,n=this.adapter.getListItemCount(),i=0;i<n;i++){var a=this.adapter.listItemAtIndexHasClass(i,y.LIST_ITEM_SELECTED_CLASS),s=this.adapter.listItemAtIndexHasClass(i,y.LIST_ITEM_ACTIVATED_CLASS);if(!!(a||s)){t=i;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&ui(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,n){var i=n===void 0?{}:n,a=i.forceUpdate;!this.isIndexValid(t)||(this.isCheckboxList?this.setCheckboxAtIndex(t):this.isRadioList?this.setRadioAtIndex(t):this.setSingleSelectionAtIndex(t,{forceUpdate:a}))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var n=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout(function(){n.adapter.isFocusInsideList()||n.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(t,n,i){var a=this,s=H(t)==="ArrowLeft",o=H(t)==="ArrowUp",d=H(t)==="ArrowRight",u=H(t)==="ArrowDown",l=H(t)==="Home",h=H(t)==="End",E=H(t)==="Enter",p=H(t)==="Spacebar",m=t.key==="A"||t.key==="a";if(this.adapter.isRootFocused()){if(o||h?(t.preventDefault(),this.focusLastElement()):(u||l)&&(t.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var T={event:t,focusItemAtIndex:function(D){a.focusItemAtIndex(D)},focusedItemIndex:-1,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(D){return a.adapter.listItemAtIndexHasClass(D,y.LIST_ITEM_DISABLED_CLASS)}};mn(T,this.typeaheadState)}return}var C=this.adapter.getFocusedElementIndex();if(!(C===-1&&(C=i,C<0))){if(this.isVertical&&u||!this.isVertical&&d)Lt(t),this.focusNextElement(C);else if(this.isVertical&&o||!this.isVertical&&s)Lt(t),this.focusPrevElement(C);else if(l)Lt(t),this.focusFirstElement();else if(h)Lt(t),this.focusLastElement();else if(m&&t.ctrlKey&&this.isCheckboxList)t.preventDefault(),this.toggleAll(this.selectedIndex===V.UNSET_INDEX?[]:this.selectedIndex);else if((E||p)&&n){var v=t.target;if(v&&v.tagName==="A"&&E||(Lt(t),this.adapter.listItemAtIndexHasClass(C,y.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(C),this.adapter.notifyAction(C))}if(this.hasTypeahead){var T={event:t,focusItemAtIndex:function(G){a.focusItemAtIndex(G)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(G){return a.adapter.listItemAtIndexHasClass(G,y.LIST_ITEM_DISABLED_CLASS)}};mn(T,this.typeaheadState)}}},e.prototype.handleClick=function(t,n){t!==V.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(t,y.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(t,n),this.adapter.notifyAction(t)))},e.prototype.focusNextElement=function(t){var n=this.adapter.getListItemCount(),i=t+1;if(i>=n)if(this.wrapFocus)i=0;else return t;return this.focusItemAtIndex(i),i},e.prototype.focusPrevElement=function(t){var n=t-1;if(n<0)if(this.wrapFocus)n=this.adapter.getListItemCount()-1;else return t;return this.focusItemAtIndex(n),n},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var t=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(t),t},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,n){!this.isIndexValid(t)||(n?(this.adapter.removeClassForElementIndex(t,y.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,mt.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,y.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,mt.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,n){var i=n===void 0?{}:n,a=i.forceUpdate;if(!(this.selectedIndex===t&&!a)){var s=y.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(s=y.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==V.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,s),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==V.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,s),this.selectedIndex=t}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===V.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,mt.ARIA_CURRENT));var n=this.ariaCurrentAttrValue!==null,i=n?mt.ARIA_CURRENT:mt.ARIA_SELECTED;if(this.selectedIndex!==V.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),t!==V.UNSET_INDEX){var a=n?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,i,a)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?mt.ARIA_SELECTED:mt.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t){var n=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),this.selectedIndex!==V.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,n,"false"),this.adapter.setAttributeForElementIndex(t,n,"true"),this.selectedIndex=t},e.prototype.setCheckboxAtIndex=function(t){for(var n=this.getSelectionAttribute(),i=0;i<this.adapter.getListItemCount();i++){var a=!1;t.indexOf(i)>=0&&(a=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(i,a),this.adapter.setAttributeForElementIndex(i,n,a?"true":"false")}this.selectedIndex=t},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===V.UNSET_INDEX&&t!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==t&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==V.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==V.UNSET_INDEX?this.selectedIndex:nr(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(t,n){return Math.min(t,n)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(t){var n=this;if(t instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return t.length===0?!0:t.some(function(i){return n.isIndexInRange(i)})}else if(typeof t=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===V.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(t){var n=this.adapter.getListItemCount();return t>=0&&t<n},e.prototype.setSelectedIndexOnAction=function(t,n){n===void 0&&(n=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(t,n):this.setSelectedIndex(t)},e.prototype.toggleCheckboxAtIndex=function(t,n){var i=this.getSelectionAttribute(),a=this.adapter.isCheckboxCheckedAtIndex(t);n&&(a=!a,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,a)),this.adapter.setAttributeForElementIndex(t,i,a?"true":"false");var s=this.selectedIndex===V.UNSET_INDEX?[]:this.selectedIndex.slice();a?s.push(t):s=s.filter(function(o){return o!==t}),this.selectedIndex=s},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.toggleAll=function(t){var n=this.adapter.getListItemCount();if(t.length===n)this.setCheckboxAtIndex([]);else{for(var i=[],a=0;a<n;a++)(!this.adapter.listItemAtIndexHasClass(a,y.LIST_ITEM_DISABLED_CLASS)||t.indexOf(a)>-1)&&i.push(a);this.setCheckboxAtIndex(i)}},e.prototype.typeaheadMatchItem=function(t,n,i){var a=this;i===void 0&&(i=!1);var s={focusItemAtIndex:function(o){a.focusItemAtIndex(o)},focusedItemIndex:n||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:i,isItemAtIndexDisabled:function(o){return a.adapter.listItemAtIndexHasClass(o,y.LIST_ITEM_DISABLED_CLASS)}};return $e(s,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return Ji(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){di(this.typeaheadState)},e}(O);/**
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
 */var z={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},ir={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var rr=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.animationFrame=0,n.animationTimer=0,n}return Object.defineProperty(e,"strings",{get:function(){return ir},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return z},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(z.OPEN),this.adapter.addClass(z.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(z.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(z.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(z.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(z.OPENING)||this.adapter.hasClass(z.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(z.CLOSING)},e.prototype.handleKeydown=function(t){var n=t.keyCode,i=t.key,a=i==="Escape"||n===27;a&&this.close()},e.prototype.handleTransitionEnd=function(t){var n=z.OPENING,i=z.CLOSING,a=z.OPEN,s=z.ANIMATE,o=z.ROOT,d=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,o);!d||(this.isClosing()?(this.adapter.removeClass(a),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(s),this.adapter.removeClass(n),this.adapter.removeClass(i))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return Boolean(t.classList)},e}(O);/**
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
 */var Rs=function(r){g(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(rr);/**
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
 */var ce={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},ut={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
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
 */var bs=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.hasToggledAriaLabel=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.getAttr(ut.DATA_ARIA_LABEL_ON),n=this.adapter.getAttr(ut.DATA_ARIA_LABEL_OFF);if(t&&n){if(this.adapter.getAttr(ut.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(ut.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(ce.ICON_BUTTON_ON)},e.prototype.toggle=function(t){if(t===void 0&&(t=!this.isOn()),t?this.adapter.addClass(ce.ICON_BUTTON_ON):this.adapter.removeClass(ce.ICON_BUTTON_ON),this.hasToggledAriaLabel){var n=t?this.adapter.getAttr(ut.DATA_ARIA_LABEL_ON):this.adapter.getAttr(ut.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(ut.ARIA_LABEL,n||"")}else this.adapter.setAttr(ut.ARIA_PRESSED,""+t)},e}(O);/**
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
 */var ft;(function(r){r.RICH="mdc-tooltip--rich",r.SHOWN="mdc-tooltip--shown",r.SHOWING="mdc-tooltip--showing",r.SHOWING_TRANSITION="mdc-tooltip--showing-transition",r.HIDE="mdc-tooltip--hide",r.HIDE_TRANSITION="mdc-tooltip--hide-transition",r.MULTILINE_TOOLTIP="mdc-tooltip--multiline",r.SURFACE="mdc-tooltip__surface",r.SURFACE_ANIMATION="mdc-tooltip__surface-animation",r.TOOLTIP_CARET_TOP="mdc-tooltip__caret-surface-top",r.TOOLTIP_CARET_BOTTOM="mdc-tooltip__caret-surface-bottom"})(ft||(ft={}));var X={BOUNDED_ANCHOR_GAP:4,UNBOUNDED_ANCHOR_GAP:8,MIN_VIEWPORT_TOOLTIP_THRESHOLD:8,HIDE_DELAY_MS:600,SHOW_DELAY_MS:500,MIN_HEIGHT:24,MAX_WIDTH:200,CARET_INDENTATION:24,ANIMATION_SCALE:.8},he={ARIA_EXPANDED:"aria-expanded",ARIA_HASPOPUP:"aria-haspopup",PERSISTENT:"data-mdc-tooltip-persistent",SCROLLABLE_ANCESTOR:"tooltip-scrollable-ancestor",HAS_CARET:"data-mdc-tooltip-has-caret"},Bt;(function(r){r[r.DETECTED=0]="DETECTED",r[r.START=1]="START",r[r.CENTER=2]="CENTER",r[r.END=3]="END"})(Bt||(Bt={}));var Jt;(function(r){r[r.DETECTED=0]="DETECTED",r[r.ABOVE=1]="ABOVE",r[r.BELOW=2]="BELOW"})(Jt||(Jt={}));var qe;(function(r){r[r.BOUNDED=0]="BOUNDED",r[r.UNBOUNDED=1]="UNBOUNDED"})(qe||(qe={}));var I={LEFT:"left",RIGHT:"right",CENTER:"center",TOP:"top",BOTTOM:"bottom"},_;(function(r){r[r.DETECTED=0]="DETECTED",r[r.ABOVE_START=1]="ABOVE_START",r[r.ABOVE_CENTER=2]="ABOVE_CENTER",r[r.ABOVE_END=3]="ABOVE_END",r[r.TOP_SIDE_START=4]="TOP_SIDE_START",r[r.CENTER_SIDE_START=5]="CENTER_SIDE_START",r[r.BOTTOM_SIDE_START=6]="BOTTOM_SIDE_START",r[r.TOP_SIDE_END=7]="TOP_SIDE_END",r[r.CENTER_SIDE_END=8]="CENTER_SIDE_END",r[r.BOTTOM_SIDE_END=9]="BOTTOM_SIDE_END",r[r.BELOW_START=10]="BELOW_START",r[r.BELOW_CENTER=11]="BELOW_CENTER",r[r.BELOW_END=12]="BELOW_END"})(_||(_={}));var k;(function(r){r[r.ABOVE=1]="ABOVE",r[r.BELOW=2]="BELOW",r[r.SIDE_TOP=3]="SIDE_TOP",r[r.SIDE_CENTER=4]="SIDE_CENTER",r[r.SIDE_BOTTOM=5]="SIDE_BOTTOM"})(k||(k={}));var R;(function(r){r[r.START=1]="START",r[r.CENTER=2]="CENTER",r[r.END=3]="END",r[r.SIDE_START=4]="SIDE_START",r[r.SIDE_END=5]="SIDE_END"})(R||(R={}));/**
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
 */var sn=function(){function r(){this.rafIDs=new Map}return r.prototype.request=function(e,t){var n=this;this.cancel(e);var i=requestAnimationFrame(function(a){n.rafIDs.delete(e),t(a)});this.rafIDs.set(e,i)},r.prototype.cancel=function(e){var t=this.rafIDs.get(e);t&&(cancelAnimationFrame(t),this.rafIDs.delete(e))},r.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(t,n){e.cancel(n)})},r.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(t,n){e.push(n)}),e},r}();/**
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
 */var An={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function ar(r){return Boolean(r.document)&&typeof r.document.createElement=="function"}function ne(r,e){if(ar(r)&&e in An){var t=r.document.createElement("div"),n=An[e],i=n.standard,a=n.prefixed,s=i in t.style;return s?i:a}return e}/**
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
 */var sr=ft.RICH,Ne=ft.SHOWN,Me=ft.SHOWING,fe=ft.SHOWING_TRANSITION,Wt=ft.HIDE,pe=ft.HIDE_TRANSITION,or=ft.MULTILINE_TOOLTIP,Ze;(function(r){r.POLL_ANCHOR="poll_anchor"})(Ze||(Ze={}));var Tn=typeof window!="undefined",Ls=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.tooltipShown=!1,n.anchorGap=X.BOUNDED_ANCHOR_GAP,n.xTooltipPos=Bt.DETECTED,n.yTooltipPos=Jt.DETECTED,n.tooltipPositionWithCaret=_.DETECTED,n.minViewportTooltipThreshold=X.MIN_VIEWPORT_TOOLTIP_THRESHOLD,n.hideDelayMs=X.HIDE_DELAY_MS,n.showDelayMs=X.SHOW_DELAY_MS,n.anchorRect=null,n.parentRect=null,n.frameId=null,n.hideTimeout=null,n.showTimeout=null,n.addAncestorScrollEventListeners=new Array,n.removeAncestorScrollEventListeners=new Array,n.animFrame=new sn,n.anchorBlurHandler=function(i){n.handleAnchorBlur(i)},n.documentClickHandler=function(i){n.handleDocumentClick(i)},n.documentKeydownHandler=function(i){n.handleKeydown(i)},n.tooltipMouseEnterHandler=function(){n.handleTooltipMouseEnter()},n.tooltipMouseLeaveHandler=function(){n.handleTooltipMouseLeave()},n.richTooltipFocusOutHandler=function(i){n.handleRichTooltipFocusOut(i)},n.windowScrollHandler=function(){n.handleWindowScrollEvent()},n.windowResizeHandler=function(){n.handleWindowChangeEvent()},n}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},addClass:function(){},hasClass:function(){return!1},removeClass:function(){},getComputedStyleProperty:function(){return""},setStyleProperty:function(){},setSurfaceAnimationStyleProperty:function(){},getViewportWidth:function(){return 0},getViewportHeight:function(){return 0},getTooltipSize:function(){return{width:0,height:0}},getAnchorBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getParentBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getAnchorAttribute:function(){return null},setAnchorAttribute:function(){return null},isRTL:function(){return!1},anchorContainsElement:function(){return!1},tooltipContainsElement:function(){return!1},focusAnchorElement:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerAnchorEventHandler:function(){},deregisterAnchorEventHandler:function(){},registerDocumentEventHandler:function(){},deregisterDocumentEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){},notifyHidden:function(){},getTooltipCaretBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setTooltipCaretStyle:function(){},clearTooltipCaretStyles:function(){},getActiveElement:function(){return null}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.richTooltip=this.adapter.hasClass(sr),this.persistentTooltip=this.adapter.getAttribute(he.PERSISTENT)==="true",this.interactiveTooltip=!!this.adapter.getAnchorAttribute(he.ARIA_EXPANDED)&&this.adapter.getAnchorAttribute(he.ARIA_HASPOPUP)==="dialog",this.hasCaret=this.richTooltip&&this.adapter.getAttribute(he.HAS_CARET)==="true"},e.prototype.isShown=function(){return this.tooltipShown},e.prototype.isRich=function(){return this.richTooltip},e.prototype.isPersistent=function(){return this.persistentTooltip},e.prototype.handleAnchorMouseEnter=function(){var t=this;this.tooltipShown?this.show():(this.clearHideTimeout(),this.showTimeout=setTimeout(function(){t.show()},this.showDelayMs))},e.prototype.handleAnchorTouchstart=function(){var t=this;this.showTimeout=setTimeout(function(){t.show()},this.showDelayMs),this.adapter.registerWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},e.prototype.preventContextMenuOnLongTouch=function(t){t.preventDefault()},e.prototype.handleAnchorTouchend=function(){this.clearShowTimeout(),this.isShown()||this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch)},e.prototype.handleAnchorFocus=function(t){var n=this,i=t.relatedTarget,a=i instanceof HTMLElement&&this.adapter.tooltipContainsElement(i);a||(this.showTimeout=setTimeout(function(){n.show()},this.showDelayMs))},e.prototype.handleAnchorMouseLeave=function(){var t=this;this.clearShowTimeout(),this.hideTimeout=setTimeout(function(){t.hide()},this.hideDelayMs)},e.prototype.handleAnchorClick=function(){this.tooltipShown?this.hide():this.show()},e.prototype.handleDocumentClick=function(t){var n=t.target instanceof HTMLElement&&(this.adapter.anchorContainsElement(t.target)||this.adapter.tooltipContainsElement(t.target));this.richTooltip&&this.persistentTooltip&&n||this.hide()},e.prototype.handleKeydown=function(t){var n=H(t);if(n===S.ESCAPE){var i=this.adapter.getActiveElement(),a=i instanceof HTMLElement&&this.adapter.tooltipContainsElement(i);a&&this.adapter.focusAnchorElement(),this.hide()}},e.prototype.handleAnchorBlur=function(t){if(this.richTooltip){var n=t.relatedTarget instanceof HTMLElement&&this.adapter.tooltipContainsElement(t.relatedTarget);if(n||t.relatedTarget===null&&this.interactiveTooltip)return}this.hide()},e.prototype.handleTooltipMouseEnter=function(){this.show()},e.prototype.handleTooltipMouseLeave=function(){var t=this;this.clearShowTimeout(),this.hideTimeout=setTimeout(function(){t.hide()},this.hideDelayMs)},e.prototype.handleRichTooltipFocusOut=function(t){var n=t.relatedTarget instanceof HTMLElement&&(this.adapter.anchorContainsElement(t.relatedTarget)||this.adapter.tooltipContainsElement(t.relatedTarget));n||t.relatedTarget===null&&this.interactiveTooltip||this.hide()},e.prototype.handleWindowScrollEvent=function(){if(this.persistentTooltip){this.handleWindowChangeEvent();return}this.hide()},e.prototype.handleWindowChangeEvent=function(){var t=this;this.animFrame.request(Ze.POLL_ANCHOR,function(){t.repositionTooltipOnAnchorMove()})},e.prototype.show=function(){var t,n,i=this;if(this.clearHideTimeout(),this.clearShowTimeout(),!this.tooltipShown){this.tooltipShown=!0,this.adapter.removeAttribute("aria-hidden"),this.richTooltip&&(this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","true"),this.adapter.registerEventHandler("focusout",this.richTooltipFocusOutHandler)),this.persistentTooltip||(this.adapter.registerEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.registerEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.adapter.removeClass(Wt),this.adapter.addClass(Me),this.isTooltipMultiline()&&!this.richTooltip&&this.adapter.addClass(or),this.anchorRect=this.adapter.getAnchorBoundingRect(),this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip(),this.adapter.registerAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.registerDocumentEventHandler("click",this.documentClickHandler),this.adapter.registerDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.registerWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler);try{for(var a=b(this.addAncestorScrollEventListeners),s=a.next();!s.done;s=a.next()){var o=s.value;o()}}catch(d){t={error:d}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}this.frameId=requestAnimationFrame(function(){i.clearAllAnimationClasses(),i.adapter.addClass(Ne),i.adapter.addClass(fe)})}},e.prototype.hide=function(){var t,n;if(this.clearHideTimeout(),this.clearShowTimeout(),!!this.tooltipShown){this.frameId&&cancelAnimationFrame(this.frameId),this.tooltipShown=!1,this.adapter.setAttribute("aria-hidden","true"),this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.richTooltip&&this.interactiveTooltip&&this.adapter.setAnchorAttribute("aria-expanded","false"),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.clearAllAnimationClasses(),this.adapter.addClass(Wt),this.adapter.addClass(pe),this.adapter.removeClass(Ne),this.adapter.deregisterAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("contextmenu",this.preventContextMenuOnLongTouch);try{for(var i=b(this.removeAncestorScrollEventListeners),a=i.next();!a.done;a=i.next()){var s=a.value;s()}}catch(o){t={error:o}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.handleTransitionEnd=function(){var t=this.adapter.hasClass(Wt);this.adapter.removeClass(Me),this.adapter.removeClass(fe),this.adapter.removeClass(Wt),this.adapter.removeClass(pe),t&&this.adapter.notifyHidden()},e.prototype.clearAllAnimationClasses=function(){this.adapter.removeClass(fe),this.adapter.removeClass(pe)},e.prototype.setTooltipPosition=function(t){var n=t.xPos,i=t.yPos,a=t.withCaretPos;if(this.hasCaret&&a){this.tooltipPositionWithCaret=a;return}n&&(this.xTooltipPos=n),i&&(this.yTooltipPos=i)},e.prototype.setAnchorBoundaryType=function(t){t===qe.UNBOUNDED?this.anchorGap=X.UNBOUNDED_ANCHOR_GAP:this.anchorGap=X.BOUNDED_ANCHOR_GAP},e.prototype.setShowDelay=function(t){this.showDelayMs=t},e.prototype.setHideDelay=function(t){this.hideDelayMs=t},e.prototype.isTooltipMultiline=function(){var t=this.adapter.getTooltipSize();return t.height>X.MIN_HEIGHT&&t.width>=X.MAX_WIDTH},e.prototype.positionPlainTooltip=function(){var t=this.calculateTooltipStyles(this.anchorRect),n=t.top,i=t.yTransformOrigin,a=t.left,s=t.xTransformOrigin,o=Tn?ne(window,"transform"):"transform";this.adapter.setSurfaceAnimationStyleProperty(o+"-origin",s+" "+i),this.adapter.setStyleProperty("top",n+"px"),this.adapter.setStyleProperty("left",a+"px")},e.prototype.positionRichTooltip=function(){var t,n,i,a,s=this.adapter.getComputedStyleProperty("width");this.adapter.setStyleProperty("width",s);var o=this.hasCaret?this.calculateTooltipWithCaretStyles(this.anchorRect):this.calculateTooltipStyles(this.anchorRect),d=o.top,u=o.yTransformOrigin,l=o.left,h=o.xTransformOrigin,E=Tn?ne(window,"transform"):"transform";this.adapter.setSurfaceAnimationStyleProperty(E+"-origin",h+" "+u);var p=l-((n=(t=this.parentRect)===null||t===void 0?void 0:t.left)!==null&&n!==void 0?n:0),m=d-((a=(i=this.parentRect)===null||i===void 0?void 0:i.top)!==null&&a!==void 0?a:0);this.adapter.setStyleProperty("top",m+"px"),this.adapter.setStyleProperty("left",p+"px")},e.prototype.calculateTooltipStyles=function(t){if(!t)return{top:0,left:0};var n=this.adapter.getTooltipSize(),i=this.calculateYTooltipDistance(t,n.height),a=this.calculateXTooltipDistance(t,n.width);return{top:i.distance,yTransformOrigin:i.yTransformOrigin,left:a.distance,xTransformOrigin:a.xTransformOrigin}},e.prototype.calculateXTooltipDistance=function(t,n){var i=!this.adapter.isRTL(),a,s,o,d,u;this.richTooltip?(a=i?t.left-n:t.right,s=i?t.right:t.left-n,d=i?I.RIGHT:I.LEFT,u=i?I.LEFT:I.RIGHT):(a=i?t.left:t.right-n,s=i?t.right-n:t.left,o=t.left+(t.width-n)/2,d=i?I.LEFT:I.RIGHT,u=i?I.RIGHT:I.LEFT);var l=this.richTooltip?this.determineValidPositionOptions(a,s):this.determineValidPositionOptions(o,a,s);if(this.xTooltipPos===Bt.START&&l.has(a))return{distance:a,xTransformOrigin:d};if(this.xTooltipPos===Bt.END&&l.has(s))return{distance:s,xTransformOrigin:u};if(this.xTooltipPos===Bt.CENTER&&l.has(o))return{distance:o,xTransformOrigin:I.CENTER};var h=this.richTooltip?[{distance:s,xTransformOrigin:u},{distance:a,xTransformOrigin:d}]:[{distance:o,xTransformOrigin:I.CENTER},{distance:a,xTransformOrigin:d},{distance:s,xTransformOrigin:u}],E=h.find(function(T){var C=T.distance;return l.has(C)});if(E)return E;if(t.left<0)return{distance:this.minViewportTooltipThreshold,xTransformOrigin:I.LEFT};var p=this.adapter.getViewportWidth(),m=p-(n+this.minViewportTooltipThreshold);return{distance:m,xTransformOrigin:I.RIGHT}},e.prototype.determineValidPositionOptions=function(){for(var t,n,i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];var s=new Set,o=new Set;try{for(var d=b(i),u=d.next();!u.done;u=d.next()){var l=u.value;this.positionHonorsViewportThreshold(l)?s.add(l):this.positionDoesntCollideWithViewport(l)&&o.add(l)}}catch(h){t={error:h}}finally{try{u&&!u.done&&(n=d.return)&&n.call(d)}finally{if(t)throw t.error}}return s.size?s:o},e.prototype.positionHonorsViewportThreshold=function(t){var n=this.adapter.getViewportWidth(),i=this.adapter.getTooltipSize().width;return t+i<=n-this.minViewportTooltipThreshold&&t>=this.minViewportTooltipThreshold},e.prototype.positionDoesntCollideWithViewport=function(t){var n=this.adapter.getViewportWidth(),i=this.adapter.getTooltipSize().width;return t+i<=n&&t>=0},e.prototype.calculateYTooltipDistance=function(t,n){var i=t.bottom+this.anchorGap,a=t.top-(this.anchorGap+n),s=this.determineValidYPositionOptions(a,i);return this.yTooltipPos===Jt.ABOVE&&s.has(a)?{distance:a,yTransformOrigin:I.BOTTOM}:this.yTooltipPos===Jt.BELOW&&s.has(i)?{distance:i,yTransformOrigin:I.TOP}:s.has(i)?{distance:i,yTransformOrigin:I.TOP}:s.has(a)?{distance:a,yTransformOrigin:I.BOTTOM}:{distance:i,yTransformOrigin:I.TOP}},e.prototype.determineValidYPositionOptions=function(t,n){var i=new Set,a=new Set;return this.yPositionHonorsViewportThreshold(t)?i.add(t):this.yPositionDoesntCollideWithViewport(t)&&a.add(t),this.yPositionHonorsViewportThreshold(n)?i.add(n):this.yPositionDoesntCollideWithViewport(n)&&a.add(n),i.size?i:a},e.prototype.yPositionHonorsViewportThreshold=function(t){var n=this.adapter.getViewportHeight(),i=this.adapter.getTooltipSize().height;return t+i+this.minViewportTooltipThreshold<=n&&t>=this.minViewportTooltipThreshold},e.prototype.yPositionDoesntCollideWithViewport=function(t){var n=this.adapter.getViewportHeight(),i=this.adapter.getTooltipSize().height;return t+i<=n&&t>=0},e.prototype.calculateTooltipWithCaretStyles=function(t){this.adapter.clearTooltipCaretStyles();var n=this.adapter.getTooltipCaretBoundingRect();if(!t||!n)return{position:_.DETECTED,top:0,left:0};var i=n.width/X.ANIMATION_SCALE,a=n.height/X.ANIMATION_SCALE/2,s=this.adapter.getTooltipSize(),o=this.calculateYWithCaretDistanceOptions(t,s.height,{caretWidth:i,caretHeight:a}),d=this.calculateXWithCaretDistanceOptions(t,s.width,{caretWidth:i,caretHeight:a}),u=this.validateTooltipWithCaretDistances(o,d);u.size<1&&(u=this.generateBackupPositionOption(t,s,{caretWidth:i,caretHeight:a}));var l=this.determineTooltipWithCaretDistance(u),h=l.position,E=l.xDistance,p=l.yDistance,m=this.setCaretPositionStyles(h,{caretWidth:i,caretHeight:a}),T=m.yTransformOrigin,C=m.xTransformOrigin;return{yTransformOrigin:T,xTransformOrigin:C,top:p,left:E}},e.prototype.calculateXWithCaretDistanceOptions=function(t,n,i){var a=i.caretWidth,s=i.caretHeight,o=!this.adapter.isRTL(),d=t.left+t.width/2,u=t.left-(n+this.anchorGap+s),l=t.right+this.anchorGap+s,h=o?u:l,E=o?l:u,p=d-(X.CARET_INDENTATION+a/2),m=d-(n-X.CARET_INDENTATION-a/2),T=o?p:m,C=o?m:p,v=d-n/2,D=new Map([[R.START,T],[R.CENTER,v],[R.END,C],[R.SIDE_END,E],[R.SIDE_START,h]]);return D},e.prototype.calculateYWithCaretDistanceOptions=function(t,n,i){var a=i.caretWidth,s=i.caretHeight,o=t.top+t.height/2,d=t.bottom+this.anchorGap+s,u=t.top-(this.anchorGap+n+s),l=o-(X.CARET_INDENTATION+a/2),h=o-n/2,E=o-(n-X.CARET_INDENTATION-a/2),p=new Map([[k.ABOVE,u],[k.BELOW,d],[k.SIDE_TOP,l],[k.SIDE_CENTER,h],[k.SIDE_BOTTOM,E]]);return p},e.prototype.repositionTooltipOnAnchorMove=function(){var t=this.adapter.getAnchorBoundingRect();!t||!this.anchorRect||(t.top!==this.anchorRect.top||t.left!==this.anchorRect.left||t.height!==this.anchorRect.height||t.width!==this.anchorRect.width)&&(this.anchorRect=t,this.parentRect=this.adapter.getParentBoundingRect(),this.richTooltip?this.positionRichTooltip():this.positionPlainTooltip())},e.prototype.validateTooltipWithCaretDistances=function(t,n){var i,a,s,o,d,u,l=new Map,h=new Map,E=new Map([[k.ABOVE,[R.START,R.CENTER,R.END]],[k.BELOW,[R.START,R.CENTER,R.END]],[k.SIDE_TOP,[R.SIDE_START,R.SIDE_END]],[k.SIDE_CENTER,[R.SIDE_START,R.SIDE_END]],[k.SIDE_BOTTOM,[R.SIDE_START,R.SIDE_END]]]);try{for(var p=b(E.keys()),m=p.next();!m.done;m=p.next()){var T=m.value,C=t.get(T);if(this.yPositionHonorsViewportThreshold(C))try{for(var v=(s=void 0,b(E.get(T))),D=v.next();!D.done;D=v.next()){var G=D.value,tt=n.get(G);if(this.positionHonorsViewportThreshold(tt)){var It=this.caretPositionOptionsMapping(G,T);l.set(It,{xDistance:tt,yDistance:C})}}}catch(W){s={error:W}}finally{try{D&&!D.done&&(o=v.return)&&o.call(v)}finally{if(s)throw s.error}}else if(this.yPositionDoesntCollideWithViewport(C))try{for(var N=(d=void 0,b(E.get(T))),K=N.next();!K.done;K=N.next()){var G=K.value,tt=n.get(G);if(this.positionDoesntCollideWithViewport(tt)){var It=this.caretPositionOptionsMapping(G,T);h.set(It,{xDistance:tt,yDistance:C})}}}catch(W){d={error:W}}finally{try{K&&!K.done&&(u=N.return)&&u.call(N)}finally{if(d)throw d.error}}}}catch(W){i={error:W}}finally{try{m&&!m.done&&(a=p.return)&&a.call(p)}finally{if(i)throw i.error}}return l.size?l:h},e.prototype.generateBackupPositionOption=function(t,n,i){var a=!this.adapter.isRTL(),s,o;if(t.left<0)s=this.minViewportTooltipThreshold+i.caretHeight,o=a?R.END:R.START;else{var d=this.adapter.getViewportWidth();s=d-(n.width+this.minViewportTooltipThreshold+i.caretHeight),o=a?R.START:R.END}var u,l;if(t.top<0)u=this.minViewportTooltipThreshold+i.caretHeight,l=k.BELOW;else{var h=this.adapter.getViewportHeight();u=h-(n.height+this.minViewportTooltipThreshold+i.caretHeight),l=k.ABOVE}var E=this.caretPositionOptionsMapping(o,l);return new Map([[E,{xDistance:s,yDistance:u}]])},e.prototype.determineTooltipWithCaretDistance=function(t){if(t.has(this.tooltipPositionWithCaret)){var n=t.get(this.tooltipPositionWithCaret);return{position:this.tooltipPositionWithCaret,xDistance:n.xDistance,yDistance:n.yDistance}}var i=[_.ABOVE_START,_.ABOVE_CENTER,_.ABOVE_END,_.TOP_SIDE_START,_.CENTER_SIDE_START,_.BOTTOM_SIDE_START,_.TOP_SIDE_END,_.CENTER_SIDE_END,_.BOTTOM_SIDE_END,_.BELOW_START,_.BELOW_CENTER,_.BELOW_END],a=i.find(function(o){return t.has(o)}),s=t.get(a);return{position:a,xDistance:s.xDistance,yDistance:s.yDistance}},e.prototype.caretPositionOptionsMapping=function(t,n){switch(n){case k.ABOVE:if(t===R.START)return _.ABOVE_START;if(t===R.CENTER)return _.ABOVE_CENTER;if(t===R.END)return _.ABOVE_END;break;case k.BELOW:if(t===R.START)return _.BELOW_START;if(t===R.CENTER)return _.BELOW_CENTER;if(t===R.END)return _.BELOW_END;break;case k.SIDE_TOP:if(t===R.SIDE_START)return _.TOP_SIDE_START;if(t===R.SIDE_END)return _.TOP_SIDE_END;break;case k.SIDE_CENTER:if(t===R.SIDE_START)return _.CENTER_SIDE_START;if(t===R.SIDE_END)return _.CENTER_SIDE_END;break;case k.SIDE_BOTTOM:if(t===R.SIDE_START)return _.BOTTOM_SIDE_START;if(t===R.SIDE_END)return _.BOTTOM_SIDE_END;break}throw new Error("MDCTooltipFoundation: Invalid caret position of "+t+", "+n)},e.prototype.setCaretPositionStyles=function(t,n){var i,a,s=this.calculateCaretPositionOnTooltip(t,n);if(!s)return{yTransformOrigin:0,xTransformOrigin:0};this.adapter.clearTooltipCaretStyles(),this.adapter.setTooltipCaretStyle(s.yAlignment,s.yAxisPx),this.adapter.setTooltipCaretStyle(s.xAlignment,s.xAxisPx);var o=s.skew*(Math.PI/180),d=Math.cos(o);this.adapter.setTooltipCaretStyle("transform","rotate("+s.rotation+"deg) skewY("+s.skew+"deg) scaleX("+d+")"),this.adapter.setTooltipCaretStyle("transform-origin",s.xAlignment+" "+s.yAlignment);try{for(var u=b(s.caretCorners),l=u.next();!l.done;l=u.next()){var h=l.value;this.adapter.setTooltipCaretStyle(h,"0")}}catch(E){i={error:E}}finally{try{l&&!l.done&&(a=u.return)&&a.call(u)}finally{if(i)throw i.error}}return{yTransformOrigin:s.yTransformOrigin,xTransformOrigin:s.xTransformOrigin}},e.prototype.calculateCaretPositionOnTooltip=function(t,n){var i=!this.adapter.isRTL(),a=this.adapter.getComputedStyleProperty("width"),s=this.adapter.getComputedStyleProperty("height");if(!(!a||!s||!n)){var o="calc(("+a+" - "+n.caretWidth+"px) / 2)",d="calc(("+s+" - "+n.caretWidth+"px) / 2)",u="0",l=X.CARET_INDENTATION+"px",h="calc("+a+" - "+l+")",E="calc("+s+" - "+l+")",p=35,m=Math.abs(90-p),T=["border-bottom-right-radius","border-top-left-radius"],C=["border-bottom-left-radius","border-top-right-radius"],v=20;switch(t){case _.BELOW_CENTER:return{yAlignment:I.TOP,xAlignment:I.LEFT,yAxisPx:u,xAxisPx:o,rotation:-1*p,skew:-1*v,xTransformOrigin:o,yTransformOrigin:u,caretCorners:T};case _.BELOW_END:return{yAlignment:I.TOP,xAlignment:i?I.RIGHT:I.LEFT,yAxisPx:u,xAxisPx:l,rotation:i?p:-1*p,skew:i?v:-1*v,xTransformOrigin:i?h:l,yTransformOrigin:u,caretCorners:i?C:T};case _.BELOW_START:return{yAlignment:I.TOP,xAlignment:i?I.LEFT:I.RIGHT,yAxisPx:u,xAxisPx:l,rotation:i?-1*p:p,skew:i?-1*v:v,xTransformOrigin:i?l:h,yTransformOrigin:u,caretCorners:i?T:C};case _.TOP_SIDE_END:return{yAlignment:I.TOP,xAlignment:i?I.LEFT:I.RIGHT,yAxisPx:l,xAxisPx:u,rotation:i?m:-1*m,skew:i?-1*v:v,xTransformOrigin:i?u:a,yTransformOrigin:l,caretCorners:i?T:C};case _.CENTER_SIDE_END:return{yAlignment:I.TOP,xAlignment:i?I.LEFT:I.RIGHT,yAxisPx:d,xAxisPx:u,rotation:i?m:-1*m,skew:i?-1*v:v,xTransformOrigin:i?u:a,yTransformOrigin:d,caretCorners:i?T:C};case _.BOTTOM_SIDE_END:return{yAlignment:I.BOTTOM,xAlignment:i?I.LEFT:I.RIGHT,yAxisPx:l,xAxisPx:u,rotation:i?-1*m:m,skew:i?v:-1*v,xTransformOrigin:i?u:a,yTransformOrigin:E,caretCorners:i?C:T};case _.TOP_SIDE_START:return{yAlignment:I.TOP,xAlignment:i?I.RIGHT:I.LEFT,yAxisPx:l,xAxisPx:u,rotation:i?-1*m:m,skew:i?v:-1*v,xTransformOrigin:i?a:u,yTransformOrigin:l,caretCorners:i?C:T};case _.CENTER_SIDE_START:return{yAlignment:I.TOP,xAlignment:i?I.RIGHT:I.LEFT,yAxisPx:d,xAxisPx:u,rotation:i?-1*m:m,skew:i?v:-1*v,xTransformOrigin:i?a:u,yTransformOrigin:d,caretCorners:i?C:T};case _.BOTTOM_SIDE_START:return{yAlignment:I.BOTTOM,xAlignment:i?I.RIGHT:I.LEFT,yAxisPx:l,xAxisPx:u,rotation:i?m:-1*m,skew:i?-1*v:v,xTransformOrigin:i?a:u,yTransformOrigin:E,caretCorners:i?T:C};case _.ABOVE_CENTER:return{yAlignment:I.BOTTOM,xAlignment:I.LEFT,yAxisPx:u,xAxisPx:o,rotation:p,skew:v,xTransformOrigin:o,yTransformOrigin:s,caretCorners:C};case _.ABOVE_END:return{yAlignment:I.BOTTOM,xAlignment:i?I.RIGHT:I.LEFT,yAxisPx:u,xAxisPx:l,rotation:i?-1*p:p,skew:i?-1*v:v,xTransformOrigin:i?h:l,yTransformOrigin:s,caretCorners:i?T:C};default:case _.ABOVE_START:return{yAlignment:I.BOTTOM,xAlignment:i?I.LEFT:I.RIGHT,yAxisPx:u,xAxisPx:l,rotation:i?p:-1*p,skew:i?v:-1*v,xTransformOrigin:i?l:h,yTransformOrigin:s,caretCorners:i?C:T}}}},e.prototype.clearShowTimeout=function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)},e.prototype.clearHideTimeout=function(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)},e.prototype.attachScrollHandler=function(t){var n=this;this.addAncestorScrollEventListeners.push(function(){t("scroll",n.windowScrollHandler)})},e.prototype.removeScrollHandler=function(t){var n=this;this.removeAncestorScrollEventListeners.push(function(){t("scroll",n.windowScrollHandler)})},e.prototype.destroy=function(){var t,n;this.frameId&&(cancelAnimationFrame(this.frameId),this.frameId=null),this.clearHideTimeout(),this.clearShowTimeout(),this.adapter.removeClass(Ne),this.adapter.removeClass(fe),this.adapter.removeClass(Me),this.adapter.removeClass(Wt),this.adapter.removeClass(pe),this.richTooltip&&this.adapter.deregisterEventHandler("focusout",this.richTooltipFocusOutHandler),this.persistentTooltip||(this.adapter.deregisterEventHandler("mouseenter",this.tooltipMouseEnterHandler),this.adapter.deregisterEventHandler("mouseleave",this.tooltipMouseLeaveHandler)),this.adapter.deregisterAnchorEventHandler("blur",this.anchorBlurHandler),this.adapter.deregisterDocumentEventHandler("click",this.documentClickHandler),this.adapter.deregisterDocumentEventHandler("keydown",this.documentKeydownHandler),this.adapter.deregisterWindowEventHandler("scroll",this.windowScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler);try{for(var i=b(this.removeAncestorScrollEventListeners),a=i.next();!a.done;a=i.next()){var s=a.value;s()}}catch(o){t={error:o}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.animFrame.cancelAll()},e}(O);/**
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
 */var vt={INDETERMINATE_CLASS:"mdc-circular-progress--indeterminate",CLOSED_CLASS:"mdc-circular-progress--closed"},At={ARIA_HIDDEN:"aria-hidden",ARIA_VALUENOW:"aria-valuenow",DETERMINATE_CIRCLE_SELECTOR:".mdc-circular-progress__determinate-circle",RADIUS:"r",STROKE_DASHOFFSET:"stroke-dashoffset"};/**
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
 */var Ds=function(r){g(e,r);function e(t){return r.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return vt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return At},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},getDeterminateCircleAttribute:function(){return null},hasClass:function(){return!1},removeClass:function(){},removeAttribute:function(){},setAttribute:function(){},setDeterminateCircleAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.closed=this.adapter.hasClass(vt.CLOSED_CLASS),this.determinate=!this.adapter.hasClass(vt.INDETERMINATE_CLASS),this.progress=0,this.determinate&&this.adapter.setAttribute(At.ARIA_VALUENOW,this.progress.toString()),this.radius=Number(this.adapter.getDeterminateCircleAttribute(At.RADIUS))},e.prototype.setDeterminate=function(t){this.determinate=t,this.determinate?(this.adapter.removeClass(vt.INDETERMINATE_CLASS),this.setProgress(this.progress)):(this.adapter.addClass(vt.INDETERMINATE_CLASS),this.adapter.removeAttribute(At.ARIA_VALUENOW))},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){if(this.progress=t,this.determinate){var n=(1-this.progress)*(2*Math.PI*this.radius);this.adapter.setDeterminateCircleAttribute(At.STROKE_DASHOFFSET,""+n),this.adapter.setAttribute(At.ARIA_VALUENOW,this.progress.toString())}},e.prototype.getProgress=function(){return this.progress},e.prototype.open=function(){this.closed=!1,this.adapter.removeClass(vt.CLOSED_CLASS),this.adapter.removeAttribute(At.ARIA_HIDDEN)},e.prototype.close=function(){this.closed=!0,this.adapter.addClass(vt.CLOSED_CLASS),this.adapter.setAttribute(At.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.closed},e}(O);/**
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
 */var Gt={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},Q={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},Cn={ANIM_END_LATCH_MS:250};/**
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
 */var Ns=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.currentCheckState=Q.TRANSITION_STATE_INIT,n.currentAnimationClass="",n.animEndLatchTimer=0,n.enableAnimationEndHandler=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Gt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Q},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Cn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.currentCheckState=this.determineCheckState(),this.updateAriaChecked(),this.adapter.addClass(Gt.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer)},e.prototype.setDisabled=function(t){this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(Gt.DISABLED):this.adapter.removeClass(Gt.DISABLED)},e.prototype.handleAnimationEnd=function(){var t=this;!this.enableAnimationEndHandler||(clearTimeout(this.animEndLatchTimer),this.animEndLatchTimer=setTimeout(function(){t.adapter.removeClass(t.currentAnimationClass),t.enableAnimationEndHandler=!1},Cn.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState()},e.prototype.transitionCheckState=function(){if(!!this.adapter.hasNativeControl()){var t=this.currentCheckState,n=this.determineCheckState();if(t!==n){this.updateAriaChecked();var i=Q.TRANSITION_STATE_UNCHECKED,a=Gt.SELECTED;n===i?this.adapter.removeClass(a):this.adapter.addClass(a),this.currentAnimationClass.length>0&&(clearTimeout(this.animEndLatchTimer),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass)),this.currentAnimationClass=this.getTransitionAnimationClass(t,n),this.currentCheckState=n,this.adapter.isAttachedToDOM()&&this.currentAnimationClass.length>0&&(this.adapter.addClass(this.currentAnimationClass),this.enableAnimationEndHandler=!0)}}},e.prototype.determineCheckState=function(){var t=Q.TRANSITION_STATE_INDETERMINATE,n=Q.TRANSITION_STATE_CHECKED,i=Q.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?t:this.adapter.isChecked()?n:i},e.prototype.getTransitionAnimationClass=function(t,n){var i=Q.TRANSITION_STATE_INIT,a=Q.TRANSITION_STATE_CHECKED,s=Q.TRANSITION_STATE_UNCHECKED,o=e.cssClasses,d=o.ANIM_UNCHECKED_CHECKED,u=o.ANIM_UNCHECKED_INDETERMINATE,l=o.ANIM_CHECKED_UNCHECKED,h=o.ANIM_CHECKED_INDETERMINATE,E=o.ANIM_INDETERMINATE_CHECKED,p=o.ANIM_INDETERMINATE_UNCHECKED;switch(t){case i:return n===s?"":n===a?E:p;case s:return n===a?d:u;case a:return n===s?l:h;default:return n===a?E:p}},e.prototype.updateAriaChecked=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(Q.ARIA_CHECKED_ATTR,Q.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(Q.ARIA_CHECKED_ATTR)},e}(O);/**
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
 */var ur={ROOT:"mdc-form-field"},dr={LABEL_SELECTOR:".mdc-form-field > label"};/**
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
 */var Ms=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.click=function(){n.handleClick()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return ur},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return dr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var t=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){t.adapter.deactivateInputRipple()})},e}(O);/**
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
 */var lr={SINGLE_SELECT:"mdc-segmented-button--single-select"};/**
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
 */var Hs=function(r){g(e,r);function e(t){return r.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},getSegments:function(){return[]},selectSegment:function(){},unselectSegment:function(){},notifySelectedChange:function(){}}},enumerable:!1,configurable:!0}),e.prototype.selectSegment=function(t){this.adapter.selectSegment(t)},e.prototype.unselectSegment=function(t){this.adapter.unselectSegment(t)},e.prototype.getSelectedSegments=function(){return this.adapter.getSegments().filter(function(t){return t.selected})},e.prototype.isSegmentSelected=function(t){return this.adapter.getSegments().some(function(n){return(n.index===t||n.segmentId===t)&&n.selected})},e.prototype.isSingleSelect=function(){return this.adapter.hasClass(lr.SINGLE_SELECT)},e.prototype.handleSelected=function(t){this.isSingleSelect()&&this.unselectPrevSelected(t.index),this.adapter.notifySelectedChange(t)},e.prototype.unselectPrevSelected=function(t){var n,i;try{for(var a=b(this.getSelectedSegments()),s=a.next();!s.done;s=a.next()){var o=s.value;o.index!==t&&this.unselectSegment(o.index)}}catch(d){n={error:d}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}},e}(O);/**
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
 */var gn={TRUE:"true",FALSE:"false"},He={ARIA_CHECKED:"aria-checked",ARIA_PRESSED:"aria-pressed",DATA_SEGMENT_ID:"data-segment-id"},xe={SELECTED:"mdc-segmented-button__segment--selected"};/**
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
 */var cr={bottom:0,height:0,left:0,right:0,top:0,width:0},xs=function(r){g(e,r);function e(t){return r.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{isSingleSelect:function(){return!1},getAttr:function(){return""},setAttr:function(){},addClass:function(){},removeClass:function(){},hasClass:function(){return!1},notifySelectedChange:function(){},getRootBoundingClientRect:function(){return cr}}},enumerable:!1,configurable:!0}),e.prototype.isSelected=function(){return this.adapter.hasClass(xe.SELECTED)},e.prototype.setSelected=function(){this.adapter.addClass(xe.SELECTED),this.setAriaAttr(gn.TRUE)},e.prototype.setUnselected=function(){this.adapter.removeClass(xe.SELECTED),this.setAriaAttr(gn.FALSE)},e.prototype.getSegmentId=function(){var t;return(t=this.adapter.getAttr(He.DATA_SEGMENT_ID))!==null&&t!==void 0?t:void 0},e.prototype.handleClick=function(){this.adapter.isSingleSelect()?this.setSelected():this.toggleSelection(),this.adapter.notifySelectedChange(this.isSelected())},e.prototype.getDimensions=function(){return this.adapter.getRootBoundingClientRect()},e.prototype.toggleSelection=function(){this.isSelected()?this.setUnselected():this.setSelected()},e.prototype.setAriaAttr=function(t){this.adapter.isSingleSelect()?this.adapter.setAttr(He.ARIA_CHECKED,t):this.adapter.setAttr(He.ARIA_PRESSED,t)},e}(O);/**
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
 */var q={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},et={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},Xt={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
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
 */var ws=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.observer=null,n}return Object.defineProperty(e,"cssClasses",{get:function(){return q},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return et},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass(q.INDETERMINATE_CLASS),this.adapter.addClass(q.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(n){var i,a;if(!t.determinate)try{for(var s=b(n),o=s.next();!o.done;o=s.next()){var d=o.value;d.contentRect&&t.calculateAndSetDimensions(d.contentRect.width)}}catch(u){i={error:u}}finally{try{o&&!o.done&&(a=s.return)&&a.call(s)}finally{if(i)throw i.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate){this.adapter.removeClass(q.INDETERMINATE_CLASS),this.adapter.setAttribute(et.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(et.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(et.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(q.INDETERMINATE_CLASS),this.adapter.removeAttribute(et.ARIA_VALUENOW),this.adapter.removeAttribute(et.ARIA_VALUEMAX),this.adapter.removeAttribute(et.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(et.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(q.CLOSED_CLASS),this.adapter.removeClass(q.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(et.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(q.CLOSED_CLASS),this.adapter.setAttribute(et.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(q.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(q.CLOSED_CLASS)&&this.adapter.addClass(q.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){r.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(q.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(q.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var n="scaleX("+t+")",i=typeof window!="undefined"?ne(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(i,n)},e.prototype.setBufferBarProgress=function(t){var n=t*100+"%";this.adapter.setBufferBarStyle(et.FLEX_BASIS,n)},e.prototype.calculateAndSetDimensions=function(t){var n=t*Xt.PRIMARY_HALF,i=t*Xt.PRIMARY_FULL,a=t*Xt.SECONDARY_QUARTER,s=t*Xt.SECONDARY_HALF,o=t*Xt.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",i+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-o+"px"),this.restartAnimation()},e}(O);/**
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
 */var hr={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var Ps=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.shakeAnimationEndHandler=function(){n.handleShakeAnimationEnd()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return hr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var n=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.float=function(t){var n=e.cssClasses,i=n.LABEL_FLOAT_ABOVE,a=n.LABEL_SHAKE;t?this.adapter.addClass(i):(this.adapter.removeClass(i),this.adapter.removeClass(a))},e.prototype.setRequired=function(t){var n=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleShakeAnimationEnd=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(O);/**
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
 */var St={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var Fs=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.transitionEndHandler=function(i){n.handleTransitionEnd(i)},n}return Object.defineProperty(e,"cssClasses",{get:function(){return St},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(St.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(St.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(St.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var n=this.adapter.hasClass(St.LINE_RIPPLE_DEACTIVATING);t.propertyName==="opacity"&&n&&(this.adapter.removeClass(St.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(St.LINE_RIPPLE_DEACTIVATING))},e}(O);/**
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
 */var fr={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},In={NOTCH_ELEMENT_PADDING:8},pr={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var Bs=function(r){g(e,r);function e(t){return r.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return fr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return pr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return In},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(t){var n=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=In.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(n)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(O);/**
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
 */var li={ROOT:"mdc-text-field-character-counter"},Er={ROOT_SELECTOR:"."+li.ROOT};/**
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
 */var Vs=function(r){g(e,r);function e(t){return r.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return li},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Er},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setCounterValue=function(t,n){t=Math.min(t,n),this.adapter.setContent(t+" / "+n)},e}(O);/**
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
 */var we={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},mr={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},vn={LABEL_SCALE:.75},Ar=["pattern","min","max","required","step","minlength","maxlength"],Tr=["color","date","datetime-local","month","range","time","week"];/**
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
 */var Sn=["mousedown","touchstart"],yn=["click","keydown"],ks=function(r){g(e,r);function e(t,n){n===void 0&&(n={});var i=r.call(this,f(f({},e.defaultAdapter),t))||this;return i.isFocused=!1,i.receivedUserInput=!1,i.valid=!0,i.useNativeValidation=!0,i.validateOnValueChange=!0,i.helperText=n.helperText,i.characterCounter=n.characterCounter,i.leadingIcon=n.leadingIcon,i.trailingIcon=n.trailingIcon,i.inputFocusHandler=function(){i.activateFocus()},i.inputBlurHandler=function(){i.deactivateFocus()},i.inputInputHandler=function(){i.handleInput()},i.setPointerXOffset=function(a){i.setTransformOrigin(a)},i.textFieldInteractionHandler=function(){i.handleTextFieldInteraction()},i.validationAttributeChangeHandler=function(a){i.handleValidationAttributeChange(a)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return mr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return we},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return vn},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return Tr.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n,i,a;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var s=b(Sn),o=s.next();!o.done;o=s.next()){var d=o.value;this.adapter.registerInputInteractionHandler(d,this.setPointerXOffset)}}catch(h){t={error:h}}finally{try{o&&!o.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}try{for(var u=b(yn),l=u.next();!l.done;l=u.next()){var d=l.value;this.adapter.registerTextFieldInteractionHandler(d,this.textFieldInteractionHandler)}}catch(h){i={error:h}}finally{try{l&&!l.done&&(a=u.return)&&a.call(u)}finally{if(i)throw i.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,n,i,a;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var s=b(Sn),o=s.next();!o.done;o=s.next()){var d=o.value;this.adapter.deregisterInputInteractionHandler(d,this.setPointerXOffset)}}catch(h){t={error:h}}finally{try{o&&!o.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}try{for(var u=b(yn),l=u.next();!l.done;l=u.next()){var d=l.value;this.adapter.deregisterTextFieldInteractionHandler(d,this.textFieldInteractionHandler)}}catch(h){i={error:h}}finally{try{l&&!l.done&&(a=u.return)&&a.call(u)}finally{if(i)throw i.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var n=this;t.some(function(i){return Ar.indexOf(i)>-1?(n.styleValidity(!0),n.adapter.setLabelRequired(n.getNativeInput().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var n=this.adapter.getLabelWidth()*vn.LABEL_SCALE;this.adapter.notchOutline(n)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var n=t.touches,i=n?n[0]:t,a=i.target.getBoundingClientRect(),s=i.clientX-a.left;this.adapter.setLineRippleTransformOrigin(s)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var n=this.isValid();this.styleValidity(n)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var n=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(n)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(!!this.characterCounter){var n=this.getNativeInput().maxLength;if(n===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,n)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var n=e.cssClasses.INVALID;if(t?this.adapter.removeClass(n):this.adapter.addClass(n),this.helperText){this.helperText.setValidity(t);var i=this.helperText.isValidation();if(!i)return;var a=this.helperText.isVisible(),s=this.helperText.getId();a&&s?this.adapter.setInputAttr(we.ARIA_DESCRIBEDBY,s):this.adapter.removeInputAttr(we.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.styleDisabled=function(t){var n=e.cssClasses,i=n.DISABLED,a=n.INVALID;t?(this.adapter.addClass(i),this.adapter.removeClass(a)):this.adapter.removeClass(i),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var n=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(O);/**
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
 */var rt={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},dt={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+rt.ROOT};/**
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
 */var Us=function(r){g(e,r);function e(t){return r.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return rt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return dt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(dt.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(rt.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(rt.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(rt.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(rt.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(rt.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(rt.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(dt.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var n=this.adapter.hasClass(rt.HELPER_TEXT_PERSISTENT),i=this.adapter.hasClass(rt.HELPER_TEXT_VALIDATION_MSG),a=i&&!t;a?(this.showToScreenReader(),this.adapter.getAttr(dt.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(dt.ROLE,"alert")):this.adapter.removeAttr(dt.ROLE),!n&&!a&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(dt.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(dt.ROLE),requestAnimationFrame(function(){t.adapter.setAttr(dt.ROLE,"alert")})},e}(O);/**
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
 */var _n={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},Cr={ROOT:"mdc-text-field__icon"};/**
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
 */var On=["click","keydown"],Ks=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.savedTabIndex=null,n.interactionHandler=function(i){n.handleInteraction(i)},n}return Object.defineProperty(e,"strings",{get:function(){return _n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Cr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var i=b(On),a=i.next();!a.done;a=i.next()){var s=a.value;this.adapter.registerInteractionHandler(s,this.interactionHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,n;try{for(var i=b(On),a=i.next();!a.done;a=i.next()){var s=a.value;this.adapter.deregisterInteractionHandler(s,this.interactionHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){!this.savedTabIndex||(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",_n.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var n=t.key==="Enter"||t.keyCode===13;(t.type==="click"||n)&&(t.preventDefault(),this.adapter.notifyIconAction())},e}(O);/**
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
 */var gr={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},Ir={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Yt={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},w;(function(r){r[r.BOTTOM=1]="BOTTOM",r[r.CENTER=2]="CENTER",r[r.RIGHT=4]="RIGHT",r[r.FLIP_RTL=8]="FLIP_RTL"})(w||(w={}));var Kt;(function(r){r[r.TOP_LEFT=0]="TOP_LEFT",r[r.TOP_RIGHT=4]="TOP_RIGHT",r[r.BOTTOM_LEFT=1]="BOTTOM_LEFT",r[r.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",r[r.TOP_START=8]="TOP_START",r[r.TOP_END=12]="TOP_END",r[r.BOTTOM_START=9]="BOTTOM_START",r[r.BOTTOM_END=13]="BOTTOM_END"})(Kt||(Kt={}));/**
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
 */var vr=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.isSurfaceOpen=!1,n.isQuickOpen=!1,n.isHoistedElement=!1,n.isFixedPosition=!1,n.isHorizontallyCenteredOnViewport=!1,n.maxHeight=0,n.openAnimationEndTimerId=0,n.closeAnimationEndTimerId=0,n.animationRequestId=0,n.anchorCorner=Kt.TOP_START,n.originCorner=Kt.TOP_START,n.anchorMargin={top:0,right:0,bottom:0,left:0},n.position={x:0,y:0},n}return Object.defineProperty(e,"cssClasses",{get:function(){return gr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ir},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Yt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return Kt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,n=t.ROOT,i=t.OPEN;if(!this.adapter.hasClass(n))throw new Error(n+" class required in root element.");this.adapter.hasClass(i)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^w.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,n){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(n)?n:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout(function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()},Yt.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var n=this;if(t===void 0&&(t=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){n.adapter.removeClass(e.cssClasses.OPEN),n.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),n.closeAnimationEndTimerId=setTimeout(function(){n.closeAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),n.adapter.notifyClose()},Yt.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var n=t.target;this.adapter.isElementInContainer(n)||this.close()},e.prototype.handleKeydown=function(t){var n=t.keyCode,i=t.key,a=i==="Escape"||n===27;a&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var n=this.getoriginCorner(),i=this.getMenuSurfaceMaxHeight(n),a=this.hasBit(n,w.BOTTOM)?"bottom":"top",s=this.hasBit(n,w.RIGHT)?"right":"left",o=this.getHorizontalOriginOffset(n),d=this.getVerticalOriginOffset(n),u=this.measurements,l=u.anchorSize,h=u.surfaceSize,E=(t={},t[s]=o,t[a]=d,t);l.width/h.width>Yt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(s="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(E),this.adapter.setTransformOrigin(s+" "+a),this.adapter.setPosition(E),this.adapter.setMaxHeight(i?i+"px":""),this.hasBit(n,w.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),n=this.adapter.getBodyDimensions(),i=this.adapter.getWindowDimensions(),a=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:n,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:a}},e.prototype.getoriginCorner=function(){var t=this.originCorner,n=this.measurements,i=n.viewportDistance,a=n.anchorSize,s=n.surfaceSize,o=e.numbers.MARGIN_TO_EDGE,d=this.hasBit(this.anchorCorner,w.BOTTOM),u,l;d?(u=i.top-o+this.anchorMargin.bottom,l=i.bottom-o-this.anchorMargin.bottom):(u=i.top-o+this.anchorMargin.top,l=i.bottom-o+a.height-this.anchorMargin.top);var h=l-s.height>0;!h&&u>l&&(t=this.setBit(t,w.BOTTOM));var E=this.adapter.isRtl(),p=this.hasBit(this.anchorCorner,w.FLIP_RTL),m=this.hasBit(this.anchorCorner,w.RIGHT)||this.hasBit(t,w.RIGHT),T=!1;E&&p?T=!m:T=m;var C,v;T?(C=i.left+a.width+this.anchorMargin.right,v=i.right-this.anchorMargin.right):(C=i.left+this.anchorMargin.left,v=i.right+a.width-this.anchorMargin.left);var D=C-s.width>0,G=v-s.width>0,tt=this.hasBit(t,w.FLIP_RTL)&&this.hasBit(t,w.RIGHT);return G&&tt&&E||!D&&tt?t=this.unsetBit(t,w.RIGHT):(D&&T&&E||D&&!T&&m||!G&&C>=v)&&(t=this.setBit(t,w.RIGHT)),t},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var n=this.measurements.viewportDistance,i=0,a=this.hasBit(t,w.BOTTOM),s=this.hasBit(this.anchorCorner,w.BOTTOM),o=e.numbers.MARGIN_TO_EDGE;return a?(i=n.top+this.anchorMargin.top-o,s||(i+=this.measurements.anchorSize.height)):(i=n.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-o,s&&(i-=this.measurements.anchorSize.height)),i},e.prototype.getHorizontalOriginOffset=function(t){var n=this.measurements.anchorSize,i=this.hasBit(t,w.RIGHT),a=this.hasBit(this.anchorCorner,w.RIGHT);if(i){var s=a?n.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?s-(this.measurements.viewportSize.width-this.measurements.bodySize.width):s}return a?n.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var n=this.measurements.anchorSize,i=this.hasBit(t,w.BOTTOM),a=this.hasBit(this.anchorCorner,w.BOTTOM),s=0;return i?s=a?n.height-this.anchorMargin.top:-this.anchorMargin.bottom:s=a?n.height+this.anchorMargin.bottom:this.anchorMargin.top,s},e.prototype.adjustPositionForHoistedElement=function(t){var n,i,a=this.measurements,s=a.windowScroll,o=a.viewportDistance,d=a.surfaceSize,u=a.viewportSize,l=Object.keys(t);try{for(var h=b(l),E=h.next();!E.done;E=h.next()){var p=E.value,m=t[p]||0;if(this.isHorizontallyCenteredOnViewport&&(p==="left"||p==="right")){t[p]=(u.width-d.width)/2;continue}m+=o[p],this.isFixedPosition||(p==="top"?m+=s.y:p==="bottom"?m-=s.y:p==="left"?m+=s.x:m-=s.x),t[p]=m}}catch(T){n={error:T}}finally{try{E&&!E.done&&(i=h.return)&&i.call(h)}finally{if(n)throw n.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,n=this.adapter.isFocused(),i=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(n||i)&&setTimeout(function(){t.adapter.restoreFocus()},Yt.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,n){return Boolean(t&n)},e.prototype.setBit=function(t,n){return t|n},e.prototype.unsetBit=function(t,n){return t^n},e.prototype.isFinite=function(t){return typeof t=="number"&&isFinite(t)},e}(O);/**
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
 */var Pe={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Ft={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},Sr={FOCUS_ROOT_INDEX:-1},Vt;(function(r){r[r.NONE=0]="NONE",r[r.LIST_ROOT=1]="LIST_ROOT",r[r.FIRST_ITEM=2]="FIRST_ITEM",r[r.LAST_ITEM=3]="LAST_ITEM"})(Vt||(Vt={}));/**
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
 */var Ws=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.closeAnimationEndTimerId=0,n.defaultFocusState=Vt.LIST_ROOT,n.selectedIndex=-1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Pe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ft},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Sr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var n=t.key,i=t.keyCode,a=n==="Tab"||i===9;a&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var n=this,i=this.adapter.getElementIndex(t);if(!(i<0)){this.adapter.notifySelected({index:i});var a=this.adapter.getAttributeFromElementAtIndex(i,Ft.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(a),this.closeAnimationEndTimerId=setTimeout(function(){var s=n.adapter.getElementIndex(t);s>=0&&n.adapter.isSelectableItemAtIndex(s)&&n.setSelectedIndex(s)},vr.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Vt.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Vt.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Vt.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var n=this.adapter.getSelectedSiblingOfItemAtIndex(t);n>=0&&(this.adapter.removeAttributeFromElementAtIndex(n,Ft.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(n,Pe.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,Pe.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,Ft.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},e.prototype.setEnabled=function(t,n){this.validatedIndex(t),n?(this.adapter.removeClassFromElementAtIndex(t,y.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,Ft.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,y.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,Ft.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(t){var n=this.adapter.getMenuItemCount(),i=t>=0&&t<n;if(!i)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(O);/**
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
 */function Gs(r){return r?r.scrollHeight>r.offsetHeight:!1}function Xs(r){return r?r.scrollTop===0:!1}function Ys(r){return r?Math.ceil(r.scrollHeight-r.scrollTop)===r.clientHeight:!1}function js(r){var e=new Set;return[].forEach.call(r,function(t){return e.add(t.offsetTop)}),e.size>1}/**
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
 */var L={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},jt={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},Fe={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
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
 */var ve;(function(r){r.POLL_SCROLL_POS="poll_scroll_position",r.POLL_LAYOUT_CHANGE="poll_layout_change"})(ve||(ve={}));var zs=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.dialogOpen=!1,n.isFullscreen=!1,n.animationFrame=0,n.animationTimer=0,n.escapeKeyAction=jt.CLOSE_ACTION,n.scrimClickAction=jt.CLOSE_ACTION,n.autoStackButtons=!0,n.areButtonsStacked=!1,n.suppressDefaultPressSelector=jt.SUPPRESS_DEFAULT_PRESS_SELECTOR,n.animFrame=new sn,n.contentScrollHandler=function(){n.handleScrollEvent()},n.windowResizeHandler=function(){n.layout()},n.windowOrientationChangeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return L},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return jt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Fe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.hasClass(L.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(L.FULLSCREEN)},e.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},e.prototype.open=function(t){var n=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(L.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),t&&t.isAboveFullscreenDialog&&this.adapter.addClass(L.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){n.adapter.addClass(L.OPEN),n.adapter.addBodyClass(L.SCROLL_LOCK),n.layout(),n.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.trapFocus(n.adapter.getInitialFocusEl()),n.adapter.notifyOpened()},Fe.DIALOG_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;t===void 0&&(t=""),!!this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(t),this.adapter.addClass(L.CLOSING),this.adapter.removeClass(L.OPEN),this.adapter.removeBodyClass(L.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.adapter.releaseFocus(),n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},Fe.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.showSurfaceScrim=function(){var t=this;this.adapter.addClass(L.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){t.adapter.addClass(L.SURFACE_SCRIM_SHOWN)})},e.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(L.SURFACE_SCRIM_SHOWN),this.adapter.addClass(L.SURFACE_SCRIM_HIDING)},e.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(L.SURFACE_SCRIM_HIDING),this.adapter.removeClass(L.SURFACE_SCRIM_SHOWING)},e.prototype.isOpen=function(){return this.dialogOpen},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction},e.prototype.setScrimClickAction=function(t){this.scrimClickAction=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t},e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},e.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},e.prototype.layout=function(){var t=this;this.animFrame.request(ve.POLL_LAYOUT_CHANGE,function(){t.layoutInternal()})},e.prototype.handleClick=function(t){var n=this.adapter.eventTargetMatches(t.target,jt.SCRIM_SELECTOR);if(n&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var i=this.adapter.getActionFromEvent(t);i&&this.close(i)}},e.prototype.handleKeydown=function(t){var n=t.key==="Enter"||t.keyCode===13;if(!!n){var i=this.adapter.getActionFromEvent(t);if(!i){var a=t.composedPath?t.composedPath()[0]:t.target,s=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(a,this.suppressDefaultPressSelector):!0;n&&s&&this.adapter.clickDefaultButton()}}},e.prototype.handleDocumentKeydown=function(t){var n=t.key==="Escape"||t.keyCode===27;n&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},e.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(ve.POLL_SCROLL_POS,function(){t.toggleScrollDividerHeader(),t.toggleScrollDividerFooter()})},e.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(L.OPENING),this.adapter.removeClass(L.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e.prototype.detectStackedButtons=function(){this.adapter.removeClass(L.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(L.STACKED),t!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=t)},e.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(L.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(L.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},e.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(L.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(L.SCROLL_DIVIDER_HEADER):this.adapter.addClass(L.SCROLL_DIVIDER_HEADER)},e.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(L.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(L.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(L.SCROLL_DIVIDER_FOOTER)},e}(O);/**
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
 */var Qe;(function(r){r.POLITE="polite",r.ASSERTIVE="assertive"})(Qe||(Qe={}));var yr="data-mdc-dom-announce";function _r(r,e){Or.getInstance().say(r,e)}var Or=function(){function r(){this.liveRegions=new Map}return r.getInstance=function(){return r.instance||(r.instance=new r),r.instance},r.prototype.say=function(e,t){var n,i,a=(n=t==null?void 0:t.priority)!==null&&n!==void 0?n:Qe.POLITE,s=(i=t==null?void 0:t.ownerDocument)!==null&&i!==void 0?i:document,o=this.getLiveRegion(a,s);o.textContent="",setTimeout(function(){o.textContent=e,s.addEventListener("click",d)},1);function d(){o.textContent="",s.removeEventListener("click",d)}},r.prototype.getLiveRegion=function(e,t){var n=this.liveRegions.get(t);n||(n=new Map,this.liveRegions.set(t,n));var i=n.get(e);if(i&&t.body.contains(i))return i;var a=this.createLiveRegion(e,t);return n.set(e,a),a},r.prototype.createLiveRegion=function(e,t){var n=t.createElement("div");return n.style.position="absolute",n.style.top="-9999px",n.style.left="-9999px",n.style.height="1px",n.style.overflow="hidden",n.setAttribute("aria-atomic","true"),n.setAttribute("aria-live",e),n.setAttribute(yr,"true"),t.body.appendChild(n),n},r}();/**
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
 */var Tt;(function(r){r[r.UNSPECIFIED=0]="UNSPECIFIED",r[r.CLICK=1]="CLICK",r[r.BACKSPACE_KEY=2]="BACKSPACE_KEY",r[r.DELETE_KEY=3]="DELETE_KEY",r[r.SPACEBAR_KEY=4]="SPACEBAR_KEY",r[r.ENTER_KEY=5]="ENTER_KEY"})(Tt||(Tt={}));var it={ARIA_HIDDEN:"aria-hidden",INTERACTION_EVENT:"MDCChipTrailingAction:interaction",NAVIGATION_EVENT:"MDCChipTrailingAction:navigation",TAB_INDEX:"tabindex"};/**
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
 */var ci=function(r){g(e,r);function e(t){return r.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return it},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{focus:function(){},getAttribute:function(){return null},setAttribute:function(){},notifyInteraction:function(){},notifyNavigation:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(t){t.stopPropagation(),this.adapter.notifyInteraction(Tt.CLICK)},e.prototype.handleKeydown=function(t){t.stopPropagation();var n=H(t);if(this.shouldNotifyInteractionFromKey(n)){var i=this.getTriggerFromKey(n);this.adapter.notifyInteraction(i);return}if(qi(t)){this.adapter.notifyNavigation(n);return}},e.prototype.removeFocus=function(){this.adapter.setAttribute(it.TAB_INDEX,"-1")},e.prototype.focus=function(){this.adapter.setAttribute(it.TAB_INDEX,"0"),this.adapter.focus()},e.prototype.isNavigable=function(){return this.adapter.getAttribute(it.ARIA_HIDDEN)!=="true"},e.prototype.shouldNotifyInteractionFromKey=function(t){var n=t===S.ENTER||t===S.SPACEBAR,i=t===S.BACKSPACE||t===S.DELETE;return n||i},e.prototype.getTriggerFromKey=function(t){return t===S.SPACEBAR?Tt.SPACEBAR_KEY:t===S.ENTER?Tt.ENTER_KEY:t===S.DELETE?Tt.DELETE_KEY:t===S.BACKSPACE?Tt.BACKSPACE_KEY:Tt.UNSPECIFIED},e}(O);/**
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
 */var hi=function(r){g(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(i,a){return new Ie(i,a)});var n=Ie.createAdapter(this);this.rippleSurface=t(this.root,new an(n))},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(n){t.foundation.handleClick(n)},this.handleKeydown=function(n){t.foundation.handleKeydown(n)},this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown)},e.prototype.destroy=function(){this.rippleSurface.destroy(),this.unlisten("click",this.handleClick),this.unlisten("keydown",this.handleKeydown),r.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={focus:function(){t.root.focus()},getAttribute:function(i){return t.root.getAttribute(i)},notifyInteraction:function(i){return t.emit(it.INTERACTION_EVENT,{trigger:i},!0)},notifyNavigation:function(i){t.emit(it.NAVIGATION_EVENT,{key:i},!0)},setAttribute:function(i,a){t.root.setAttribute(i,a)}};return new ci(n)},e.prototype.isNavigable=function(){return this.foundation.isNavigable()},e.prototype.focus=function(){this.foundation.focus()},e.prototype.removeFocus=function(){this.foundation.removeFocus()},e}(Oe);/**
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
 */var st;(function(r){r.LEFT="left",r.RIGHT="right"})(st||(st={}));var ht;(function(r){r.PRIMARY="primary",r.TRAILING="trailing",r.NONE="none"})(ht||(ht={}));var A={ADDED_ANNOUNCEMENT_ATTRIBUTE:"data-mdc-chip-added-announcement",ARIA_CHECKED:"aria-checked",ARROW_DOWN_KEY:"ArrowDown",ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",ARROW_UP_KEY:"ArrowUp",BACKSPACE_KEY:"Backspace",CHECKMARK_SELECTOR:".mdc-chip__checkmark",DELETE_KEY:"Delete",END_KEY:"End",ENTER_KEY:"Enter",ENTRY_ANIMATION_NAME:"mdc-chip-entry",HOME_KEY:"Home",IE_ARROW_DOWN_KEY:"Down",IE_ARROW_LEFT_KEY:"Left",IE_ARROW_RIGHT_KEY:"Right",IE_ARROW_UP_KEY:"Up",IE_DELETE_KEY:"Del",INTERACTION_EVENT:"MDCChip:interaction",LEADING_ICON_SELECTOR:".mdc-chip__icon--leading",NAVIGATION_EVENT:"MDCChip:navigation",PRIMARY_ACTION_SELECTOR:".mdc-chip__primary-action",REMOVED_ANNOUNCEMENT_ATTRIBUTE:"data-mdc-chip-removed-announcement",REMOVAL_EVENT:"MDCChip:removal",SELECTION_EVENT:"MDCChip:selection",SPACEBAR_KEY:" ",TAB_INDEX:"tabindex",TRAILING_ACTION_SELECTOR:".mdc-chip-trailing-action",TRAILING_ICON_INTERACTION_EVENT:"MDCChip:trailingIconInteraction",TRAILING_ICON_SELECTOR:".mdc-chip__icon--trailing"},x={CHECKMARK:"mdc-chip__checkmark",CHIP_EXIT:"mdc-chip--exit",DELETABLE:"mdc-chip--deletable",EDITABLE:"mdc-chip--editable",EDITING:"mdc-chip--editing",HIDDEN_LEADING_ICON:"mdc-chip__icon--leading-hidden",LEADING_ICON:"mdc-chip__icon--leading",PRIMARY_ACTION:"mdc-chip__primary-action",PRIMARY_ACTION_FOCUSED:"mdc-chip--primary-action-focused",SELECTED:"mdc-chip--selected",TEXT:"mdc-chip__text",TRAILING_ACTION:"mdc-chip__trailing-action",TRAILING_ICON:"mdc-chip__icon--trailing"},J=new Set;J.add(A.ARROW_LEFT_KEY);J.add(A.ARROW_RIGHT_KEY);J.add(A.ARROW_DOWN_KEY);J.add(A.ARROW_UP_KEY);J.add(A.END_KEY);J.add(A.HOME_KEY);J.add(A.IE_ARROW_LEFT_KEY);J.add(A.IE_ARROW_RIGHT_KEY);J.add(A.IE_ARROW_DOWN_KEY);J.add(A.IE_ARROW_UP_KEY);var gt=new Set;gt.add(A.ARROW_UP_KEY);gt.add(A.ARROW_DOWN_KEY);gt.add(A.HOME_KEY);gt.add(A.END_KEY);gt.add(A.IE_ARROW_UP_KEY);gt.add(A.IE_ARROW_DOWN_KEY);/**
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
 */var Rn={bottom:0,height:0,left:0,right:0,top:0,width:0},kt;(function(r){r[r.SHOULD_FOCUS=0]="SHOULD_FOCUS",r[r.SHOULD_NOT_FOCUS=1]="SHOULD_NOT_FOCUS"})(kt||(kt={}));var on=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.shouldRemoveOnTrailingIconClick=!0,n.shouldFocusPrimaryActionOnClick=!0,n}return Object.defineProperty(e,"strings",{get:function(){return A},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return x},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},addClassToLeadingIcon:function(){},eventTargetHasClass:function(){return!1},focusPrimaryAction:function(){},focusTrailingAction:function(){},getAttribute:function(){return null},getCheckmarkBoundingClientRect:function(){return Rn},getComputedStyleValue:function(){return""},getRootBoundingClientRect:function(){return Rn},hasClass:function(){return!1},hasLeadingIcon:function(){return!1},isRTL:function(){return!1},isTrailingActionNavigable:function(){return!1},notifyEditFinish:function(){},notifyEditStart:function(){},notifyInteraction:function(){},notifyNavigation:function(){},notifyRemoval:function(){},notifySelection:function(){},notifyTrailingIconInteraction:function(){},removeClass:function(){},removeClassFromLeadingIcon:function(){},removeTrailingActionFocus:function(){},setPrimaryActionAttr:function(){},setStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.isSelected=function(){return this.adapter.hasClass(x.SELECTED)},e.prototype.isEditable=function(){return this.adapter.hasClass(x.EDITABLE)},e.prototype.isEditing=function(){return this.adapter.hasClass(x.EDITING)},e.prototype.setSelected=function(t){this.setSelectedImpl(t),this.notifySelection(t)},e.prototype.setSelectedFromChipSet=function(t,n){this.setSelectedImpl(t),n&&this.notifyIgnoredSelection(t)},e.prototype.getShouldRemoveOnTrailingIconClick=function(){return this.shouldRemoveOnTrailingIconClick},e.prototype.setShouldRemoveOnTrailingIconClick=function(t){this.shouldRemoveOnTrailingIconClick=t},e.prototype.setShouldFocusPrimaryActionOnClick=function(t){this.shouldFocusPrimaryActionOnClick=t},e.prototype.getDimensions=function(){var t=this,n=function(){return t.adapter.getRootBoundingClientRect()},i=function(){return t.adapter.getCheckmarkBoundingClientRect()};if(!this.adapter.hasLeadingIcon()){var a=i();if(a){var s=n();return{bottom:s.bottom,height:s.height,left:s.left,right:s.right,top:s.top,width:s.width+a.height}}}return n()},e.prototype.beginExit=function(){this.adapter.addClass(x.CHIP_EXIT)},e.prototype.handleClick=function(){this.adapter.notifyInteraction(),this.setPrimaryActionFocusable(this.getFocusBehavior())},e.prototype.handleDoubleClick=function(){this.isEditable()&&this.startEditing()},e.prototype.handleTransitionEnd=function(t){var n=this,i=this.adapter.eventTargetHasClass(t.target,x.CHIP_EXIT),a=t.propertyName==="width",s=t.propertyName==="opacity";if(i&&s){var o=this.adapter.getComputedStyleValue("width");requestAnimationFrame(function(){n.adapter.setStyleProperty("width",o),n.adapter.setStyleProperty("padding","0"),n.adapter.setStyleProperty("margin","0"),requestAnimationFrame(function(){n.adapter.setStyleProperty("width","0")})});return}if(i&&a){this.removeFocus();var d=this.adapter.getAttribute(A.REMOVED_ANNOUNCEMENT_ATTRIBUTE);this.adapter.notifyRemoval(d)}if(!!s){var u=this.adapter.eventTargetHasClass(t.target,x.LEADING_ICON)&&this.adapter.hasClass(x.SELECTED),l=this.adapter.eventTargetHasClass(t.target,x.CHECKMARK)&&!this.adapter.hasClass(x.SELECTED);if(u){this.adapter.addClassToLeadingIcon(x.HIDDEN_LEADING_ICON);return}if(l){this.adapter.removeClassFromLeadingIcon(x.HIDDEN_LEADING_ICON);return}}},e.prototype.handleFocusIn=function(t){!this.eventFromPrimaryAction(t)||this.adapter.addClass(x.PRIMARY_ACTION_FOCUSED)},e.prototype.handleFocusOut=function(t){!this.eventFromPrimaryAction(t)||(this.isEditing()&&this.finishEditing(),this.adapter.removeClass(x.PRIMARY_ACTION_FOCUSED))},e.prototype.handleTrailingActionInteraction=function(){this.adapter.notifyTrailingIconInteraction(),this.removeChip()},e.prototype.handleKeydown=function(t){if(this.isEditing()){this.shouldFinishEditing(t)&&(t.preventDefault(),this.finishEditing());return}if(this.isEditable()&&this.shouldStartEditing(t)&&(t.preventDefault(),this.startEditing()),this.shouldNotifyInteraction(t)){this.adapter.notifyInteraction(),this.setPrimaryActionFocusable(this.getFocusBehavior());return}if(this.isDeleteAction(t)){t.preventDefault(),this.removeChip();return}!J.has(t.key)||(t.preventDefault(),this.focusNextAction(t.key,ht.PRIMARY))},e.prototype.handleTrailingActionNavigation=function(t){this.focusNextAction(t.detail.key,ht.TRAILING)},e.prototype.removeFocus=function(){this.adapter.setPrimaryActionAttr(A.TAB_INDEX,"-1"),this.adapter.removeTrailingActionFocus()},e.prototype.focusPrimaryAction=function(){this.setPrimaryActionFocusable(kt.SHOULD_FOCUS)},e.prototype.focusTrailingAction=function(){var t=this.adapter.isTrailingActionNavigable();if(t){this.adapter.setPrimaryActionAttr(A.TAB_INDEX,"-1"),this.adapter.focusTrailingAction();return}this.focusPrimaryAction()},e.prototype.setPrimaryActionFocusable=function(t){this.adapter.setPrimaryActionAttr(A.TAB_INDEX,"0"),t===kt.SHOULD_FOCUS&&this.adapter.focusPrimaryAction(),this.adapter.removeTrailingActionFocus()},e.prototype.getFocusBehavior=function(){return this.shouldFocusPrimaryActionOnClick?kt.SHOULD_FOCUS:kt.SHOULD_NOT_FOCUS},e.prototype.focusNextAction=function(t,n){var i=this.adapter.isTrailingActionNavigable(),a=this.getDirection(t);if(gt.has(t)||!i){this.adapter.notifyNavigation(t,n);return}if(n===ht.PRIMARY&&a===st.RIGHT){this.focusTrailingAction();return}if(n===ht.TRAILING&&a===st.LEFT){this.focusPrimaryAction();return}this.adapter.notifyNavigation(t,ht.NONE)},e.prototype.getDirection=function(t){var n=this.adapter.isRTL(),i=t===A.ARROW_LEFT_KEY||t===A.IE_ARROW_LEFT_KEY,a=t===A.ARROW_RIGHT_KEY||t===A.IE_ARROW_RIGHT_KEY;return!n&&i||n&&a?st.LEFT:st.RIGHT},e.prototype.removeChip=function(){this.shouldRemoveOnTrailingIconClick&&this.beginExit()},e.prototype.shouldStartEditing=function(t){return this.eventFromPrimaryAction(t)&&t.key===A.ENTER_KEY},e.prototype.shouldFinishEditing=function(t){return t.key===A.ENTER_KEY},e.prototype.shouldNotifyInteraction=function(t){return t.key===A.ENTER_KEY||t.key===A.SPACEBAR_KEY},e.prototype.isDeleteAction=function(t){var n=this.adapter.hasClass(x.DELETABLE);return n&&(t.key===A.BACKSPACE_KEY||t.key===A.DELETE_KEY||t.key===A.IE_DELETE_KEY)},e.prototype.setSelectedImpl=function(t){t?(this.adapter.addClass(x.SELECTED),this.adapter.setPrimaryActionAttr(A.ARIA_CHECKED,"true")):(this.adapter.removeClass(x.SELECTED),this.adapter.setPrimaryActionAttr(A.ARIA_CHECKED,"false"))},e.prototype.notifySelection=function(t){this.adapter.notifySelection(t,!1)},e.prototype.notifyIgnoredSelection=function(t){this.adapter.notifySelection(t,!0)},e.prototype.eventFromPrimaryAction=function(t){return this.adapter.eventTargetHasClass(t.target,x.PRIMARY_ACTION)},e.prototype.startEditing=function(){this.adapter.addClass(x.EDITING),this.adapter.notifyEditStart()},e.prototype.finishEditing=function(){this.adapter.removeClass(x.EDITING),this.adapter.notifyEditFinish()},e}(O);/**
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
 */var fi=function(r){g(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"selected",{get:function(){return this.foundation.isSelected()},set:function(t){this.foundation.setSelected(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldRemoveOnTrailingIconClick",{get:function(){return this.foundation.getShouldRemoveOnTrailingIconClick()},set:function(t){this.foundation.setShouldRemoveOnTrailingIconClick(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"setShouldFocusPrimaryActionOnClick",{set:function(t){this.foundation.setShouldFocusPrimaryActionOnClick(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this.root.id},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n){var i=this;t===void 0&&(t=function(o,d){return new Ie(o,d)}),n===void 0&&(n=function(o){return new hi(o)}),this.leadingIcon=this.root.querySelector(A.LEADING_ICON_SELECTOR),this.checkmark=this.root.querySelector(A.CHECKMARK_SELECTOR),this.primaryAction=this.root.querySelector(A.PRIMARY_ACTION_SELECTOR);var a=this.root.querySelector(A.TRAILING_ACTION_SELECTOR);a&&(this.trailingAction=n(a));var s=f(f({},Ie.createAdapter(this)),{computeBoundingRect:function(){return i.foundation.getDimensions()}});this.rippleSurface=t(this.root,new an(s))},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTrailingActionInteraction=function(){t.foundation.handleTrailingActionInteraction()},this.handleTrailingActionNavigation=function(n){t.foundation.handleTrailingActionNavigation(n)},this.handleClick=function(){t.foundation.handleClick()},this.handleKeydown=function(n){t.foundation.handleKeydown(n)},this.handleTransitionEnd=function(n){t.foundation.handleTransitionEnd(n)},this.handleFocusIn=function(n){t.foundation.handleFocusIn(n)},this.handleFocusOut=function(n){t.foundation.handleFocusOut(n)},this.listen("transitionend",this.handleTransitionEnd),this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown),this.listen("focusin",this.handleFocusIn),this.listen("focusout",this.handleFocusOut),this.trailingAction&&(this.listen(it.INTERACTION_EVENT,this.handleTrailingActionInteraction),this.listen(it.NAVIGATION_EVENT,this.handleTrailingActionNavigation))},e.prototype.destroy=function(){this.rippleSurface.destroy(),this.unlisten("transitionend",this.handleTransitionEnd),this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.handleFocusIn),this.unlisten("focusout",this.handleFocusOut),this.trailingAction&&(this.unlisten(it.INTERACTION_EVENT,this.handleTrailingActionInteraction),this.unlisten(it.NAVIGATION_EVENT,this.handleTrailingActionNavigation)),r.prototype.destroy.call(this)},e.prototype.beginExit=function(){this.foundation.beginExit()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){return t.root.classList.add(i)},addClassToLeadingIcon:function(i){t.leadingIcon&&t.leadingIcon.classList.add(i)},eventTargetHasClass:function(i,a){return i?i.classList.contains(a):!1},focusPrimaryAction:function(){t.primaryAction&&t.primaryAction.focus()},focusTrailingAction:function(){t.trailingAction&&t.trailingAction.focus()},getAttribute:function(i){return t.root.getAttribute(i)},getCheckmarkBoundingClientRect:function(){return t.checkmark?t.checkmark.getBoundingClientRect():null},getComputedStyleValue:function(i){return window.getComputedStyle(t.root).getPropertyValue(i)},getRootBoundingClientRect:function(){return t.root.getBoundingClientRect()},hasClass:function(i){return t.root.classList.contains(i)},hasLeadingIcon:function(){return!!t.leadingIcon},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},isTrailingActionNavigable:function(){return t.trailingAction?t.trailingAction.isNavigable():!1},notifyInteraction:function(){return t.emit(A.INTERACTION_EVENT,{chipId:t.id},!0)},notifyNavigation:function(i,a){return t.emit(A.NAVIGATION_EVENT,{chipId:t.id,key:i,source:a},!0)},notifyRemoval:function(i){t.emit(A.REMOVAL_EVENT,{chipId:t.id,removedAnnouncement:i},!0)},notifySelection:function(i,a){return t.emit(A.SELECTION_EVENT,{chipId:t.id,selected:i,shouldIgnore:a},!0)},notifyTrailingIconInteraction:function(){return t.emit(A.TRAILING_ICON_INTERACTION_EVENT,{chipId:t.id},!0)},notifyEditStart:function(){},notifyEditFinish:function(){},removeClass:function(i){return t.root.classList.remove(i)},removeClassFromLeadingIcon:function(i){t.leadingIcon&&t.leadingIcon.classList.remove(i)},removeTrailingActionFocus:function(){t.trailingAction&&t.trailingAction.removeFocus()},setPrimaryActionAttr:function(i,a){t.primaryAction&&t.primaryAction.setAttribute(i,a)},setStyleProperty:function(i,a){return t.root.style.setProperty(i,a)}};return new on(n)},e.prototype.setSelectedFromChipSet=function(t,n){this.foundation.setSelectedFromChipSet(t,n)},e.prototype.focusPrimaryAction=function(){this.foundation.focusPrimaryAction()},e.prototype.focusTrailingAction=function(){this.foundation.focusTrailingAction()},e.prototype.removeFocus=function(){this.foundation.removeFocus()},e.prototype.remove=function(){var t=this.root.parentNode;t!==null&&t.removeChild(this.root)},e}(Oe);/**
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
 */var pi={CHIP_SELECTOR:".mdc-chip"},Zt={CHOICE:"mdc-chip-set--choice",FILTER:"mdc-chip-set--filter"};/**
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
 */var un=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.selectedChipIds=[],n}return Object.defineProperty(e,"strings",{get:function(){return pi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Zt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{announceMessage:function(){},focusChipPrimaryActionAtIndex:function(){},focusChipTrailingActionAtIndex:function(){},getChipListCount:function(){return-1},getIndexOfChipById:function(){return-1},hasClass:function(){return!1},isRTL:function(){return!1},removeChipAtIndex:function(){},removeFocusFromChipAtIndex:function(){},selectChipAtIndex:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedChipIds=function(){return this.selectedChipIds.slice()},e.prototype.select=function(t){this.selectImpl(t,!1)},e.prototype.handleChipInteraction=function(t){var n=t.chipId,i=this.adapter.getIndexOfChipById(n);this.removeFocusFromChipsExcept(i),(this.adapter.hasClass(Zt.CHOICE)||this.adapter.hasClass(Zt.FILTER))&&this.toggleSelect(n)},e.prototype.handleChipSelection=function(t){var n=t.chipId,i=t.selected,a=t.shouldIgnore;if(!a){var s=this.selectedChipIds.indexOf(n)>=0;i&&!s?this.select(n):!i&&s&&this.deselectImpl(n)}},e.prototype.handleChipRemoval=function(t){var n=t.chipId,i=t.removedAnnouncement;i&&this.adapter.announceMessage(i);var a=this.adapter.getIndexOfChipById(n);this.deselectAndNotifyClients(n),this.adapter.removeChipAtIndex(a);var s=this.adapter.getChipListCount()-1;if(!(s<0)){var o=Math.min(a,s);this.removeFocusFromChipsExcept(o),this.adapter.focusChipTrailingActionAtIndex(o)}},e.prototype.handleChipNavigation=function(t){var n=t.chipId,i=t.key,a=t.source,s=this.adapter.getChipListCount()-1,o=this.adapter.getIndexOfChipById(n);if(!(o===-1||!J.has(i))){var d=this.adapter.isRTL(),u=i===A.ARROW_LEFT_KEY||i===A.IE_ARROW_LEFT_KEY,l=i===A.ARROW_RIGHT_KEY||i===A.IE_ARROW_RIGHT_KEY,h=i===A.ARROW_DOWN_KEY||i===A.IE_ARROW_DOWN_KEY,E=!d&&l||d&&u||h,p=i===A.HOME_KEY,m=i===A.END_KEY;E?o++:p?o=0:m?o=s:o--,!(o<0||o>s)&&(this.removeFocusFromChipsExcept(o),this.focusChipAction(o,i,a))}},e.prototype.focusChipAction=function(t,n,i){var a=gt.has(n);if(a&&i===ht.PRIMARY)return this.adapter.focusChipPrimaryActionAtIndex(t);if(a&&i===ht.TRAILING)return this.adapter.focusChipTrailingActionAtIndex(t);var s=this.getDirection(n);if(s===st.LEFT)return this.adapter.focusChipTrailingActionAtIndex(t);if(s===st.RIGHT)return this.adapter.focusChipPrimaryActionAtIndex(t)},e.prototype.getDirection=function(t){var n=this.adapter.isRTL(),i=t===A.ARROW_LEFT_KEY||t===A.IE_ARROW_LEFT_KEY,a=t===A.ARROW_RIGHT_KEY||t===A.IE_ARROW_RIGHT_KEY;return!n&&i||n&&a?st.LEFT:st.RIGHT},e.prototype.deselectImpl=function(t,n){n===void 0&&(n=!1);var i=this.selectedChipIds.indexOf(t);if(i>=0){this.selectedChipIds.splice(i,1);var a=this.adapter.getIndexOfChipById(t);this.adapter.selectChipAtIndex(a,!1,n)}},e.prototype.deselectAndNotifyClients=function(t){this.deselectImpl(t,!0)},e.prototype.toggleSelect=function(t){this.selectedChipIds.indexOf(t)>=0?this.deselectAndNotifyClients(t):this.selectAndNotifyClients(t)},e.prototype.removeFocusFromChipsExcept=function(t){for(var n=this.adapter.getChipListCount(),i=0;i<n;i++)i!==t&&this.adapter.removeFocusFromChipAtIndex(i)},e.prototype.selectAndNotifyClients=function(t){this.selectImpl(t,!0)},e.prototype.selectImpl=function(t,n){if(!(this.selectedChipIds.indexOf(t)>=0)){if(this.adapter.hasClass(Zt.CHOICE)&&this.selectedChipIds.length>0){var i=this.selectedChipIds[0],a=this.adapter.getIndexOfChipById(i);this.selectedChipIds=[],this.adapter.selectChipAtIndex(a,!1,n)}this.selectedChipIds.push(t);var s=this.adapter.getIndexOfChipById(t);this.adapter.selectChipAtIndex(s,!0,n)}},e}(O);/**
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
 */var Re=on.strings,bn=Re.INTERACTION_EVENT,Ln=Re.SELECTION_EVENT,Dn=Re.REMOVAL_EVENT,Nn=Re.NAVIGATION_EVENT,Rr=un.strings.CHIP_SELECTOR,Mn=0,br=function(r){g(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"chips",{get:function(){return this.chipsList.slice()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedChipIds",{get:function(){return this.foundation.getSelectedChipIds()},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t){t===void 0&&(t=function(n){return new fi(n)}),this.chipFactory=t,this.chipsList=this.instantiateChips(this.chipFactory)},e.prototype.initialSyncWithDOM=function(){var t,n,i=this;try{for(var a=b(this.chipsList),s=a.next();!s.done;s=a.next()){var o=s.value;o.id&&o.selected&&this.foundation.select(o.id)}}catch(d){t={error:d}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}this.handleChipInteraction=function(d){return i.foundation.handleChipInteraction(d.detail)},this.handleChipSelection=function(d){return i.foundation.handleChipSelection(d.detail)},this.handleChipRemoval=function(d){return i.foundation.handleChipRemoval(d.detail)},this.handleChipNavigation=function(d){return i.foundation.handleChipNavigation(d.detail)},this.listen(bn,this.handleChipInteraction),this.listen(Ln,this.handleChipSelection),this.listen(Dn,this.handleChipRemoval),this.listen(Nn,this.handleChipNavigation)},e.prototype.destroy=function(){var t,n;try{for(var i=b(this.chipsList),a=i.next();!a.done;a=i.next()){var s=a.value;s.destroy()}}catch(o){t={error:o}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.unlisten(bn,this.handleChipInteraction),this.unlisten(Ln,this.handleChipSelection),this.unlisten(Dn,this.handleChipRemoval),this.unlisten(Nn,this.handleChipNavigation),r.prototype.destroy.call(this)},e.prototype.addChip=function(t){t.id=t.id||"mdc-chip-"+ ++Mn,this.chipsList.push(this.chipFactory(t))},e.prototype.getDefaultFoundation=function(){var t=this,n={announceMessage:function(i){_r(i)},focusChipPrimaryActionAtIndex:function(i){t.chipsList[i].focusPrimaryAction()},focusChipTrailingActionAtIndex:function(i){t.chipsList[i].focusTrailingAction()},getChipListCount:function(){return t.chips.length},getIndexOfChipById:function(i){return t.findChipIndex(i)},hasClass:function(i){return t.root.classList.contains(i)},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},removeChipAtIndex:function(i){i>=0&&i<t.chips.length&&(t.chipsList[i].destroy(),t.chipsList[i].remove(),t.chipsList.splice(i,1))},removeFocusFromChipAtIndex:function(i){t.chipsList[i].removeFocus()},selectChipAtIndex:function(i,a,s){i>=0&&i<t.chips.length&&t.chipsList[i].setSelectedFromChipSet(a,s)}};return new un(n)},e.prototype.instantiateChips=function(t){var n=[].slice.call(this.root.querySelectorAll(Rr));return n.map(function(i){return i.id=i.id||"mdc-chip-"+ ++Mn,t(i)})},e.prototype.findChipIndex=function(t){for(var n=0;n<this.chips.length;n++)if(this.chipsList[n].id===t)return n;return-1},e}(Oe);/**
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
 */var $s=Object.freeze(Object.defineProperty({__proto__:null,trailingActionStrings:it,MDCChipTrailingAction:hi,MDCChipTrailingActionFoundation:ci,chipCssClasses:x,chipStrings:A,MDCChip:fi,MDCChipFoundation:on,chipSetCssClasses:Zt,chipSetStrings:pi,MDCChipSet:br,MDCChipSetFoundation:un},Symbol.toStringTag,{value:"Module"}));/**
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
 */var Lr={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},Dr={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
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
 */var qs=function(r){g(e,r);function e(t){return r.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Dr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Lr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setDisabled=function(t){var n=e.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(n):this.adapter.removeClass(n)},e}(O);/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var Dt;(function(r){r.PROCESSING="mdc-switch--processing",r.SELECTED="mdc-switch--selected",r.UNSELECTED="mdc-switch--unselected"})(Dt||(Dt={}));var Hn;(function(r){r.RIPPLE=".mdc-switch__ripple"})(Hn||(Hn={}));/**
 * @license
 * Copyright 2021 Google Inc.
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
 */function Nr(r,e,t){var n=Mr(r,e),i=n.getObservers(e);return i.push(t),function(){i.splice(i.indexOf(t),1)}}var ge=new WeakMap;function Mr(r,e){var t=new Map;ge.has(r)||ge.set(r,{isEnabled:!0,getObservers:function(u){var l=t.get(u)||[];return t.has(u)||t.set(u,l),l},installedProperties:new Set});var n=ge.get(r);if(n.installedProperties.has(e))return n;var i=Hr(r,e)||{configurable:!0,enumerable:!0,value:r[e],writable:!0},a=f({},i),s=i.get,o=i.set;if("value"in i){delete a.value,delete a.writable;var d=i.value;s=function(){return d},i.writable&&(o=function(u){d=u})}return s&&(a.get=function(){return s.call(this)}),o&&(a.set=function(u){var l,h,E=s?s.call(this):u;if(o.call(this,u),n.isEnabled&&(!s||u!==E))try{for(var p=b(n.getObservers(e)),m=p.next();!m.done;m=p.next()){var T=m.value;T(u,E)}}catch(C){l={error:C}}finally{try{m&&!m.done&&(h=p.return)&&h.call(p)}finally{if(l)throw l.error}}}),n.installedProperties.add(e),Object.defineProperty(r,e,a),n}function Hr(r,e){for(var t=r,n;t&&(n=Object.getOwnPropertyDescriptor(t,e),!n);)t=Object.getPrototypeOf(t);return n}function xr(r,e){var t=ge.get(r);t&&(t.isEnabled=e)}/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var wr=function(r){g(e,r);function e(t){var n=r.call(this,t)||this;return n.unobserves=new Set,n}return e.prototype.destroy=function(){r.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(t,n){var i,a,s=this,o=[];try{for(var d=b(Object.keys(n)),u=d.next();!u.done;u=d.next()){var l=u.value,h=n[l].bind(this);o.push(this.observeProperty(t,l,h))}}catch(p){i={error:p}}finally{try{u&&!u.done&&(a=d.return)&&a.call(d)}finally{if(i)throw i.error}}var E=function(){var p,m;try{for(var T=b(o),C=T.next();!C.done;C=T.next()){var v=C.value;v()}}catch(D){p={error:D}}finally{try{C&&!C.done&&(m=T.return)&&m.call(T)}finally{if(p)throw p.error}}s.unobserves.delete(E)};return this.unobserves.add(E),E},e.prototype.observeProperty=function(t,n,i){return Nr(t,n,i)},e.prototype.setObserversEnabled=function(t,n){xr(t,n)},e.prototype.unobserve=function(){var t,n;try{for(var i=b(si([],nn(this.unobserves))),a=i.next();!a.done;a=i.next()){var s=a.value;s()}}catch(o){t={error:o}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e}(O);/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var Pr=function(r){g(e,r);function e(t){var n=r.call(this,t)||this;return n.handleClick=n.handleClick.bind(n),n}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(wr),Zs=function(r){g(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.init=function(){r.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(Dt.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(Dt.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,Dt.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,Dt.SELECTED),this.toggleClass(!this.adapter.state.selected,Dt.UNSELECTED)},e.prototype.toggleClass=function(t,n){t?this.adapter.addClass(n):this.adapter.removeClass(n)},e}(Pr);/**
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
 */var F={CELL:"mdc-data-table__cell",CELL_NUMERIC:"mdc-data-table__cell--numeric",CONTENT:"mdc-data-table__content",HEADER_CELL:"mdc-data-table__header-cell",HEADER_CELL_LABEL:"mdc-data-table__header-cell-label",HEADER_CELL_SORTED:"mdc-data-table__header-cell--sorted",HEADER_CELL_SORTED_DESCENDING:"mdc-data-table__header-cell--sorted-descending",HEADER_CELL_WITH_SORT:"mdc-data-table__header-cell--with-sort",HEADER_CELL_WRAPPER:"mdc-data-table__header-cell-wrapper",HEADER_ROW:"mdc-data-table__header-row",HEADER_ROW_CHECKBOX:"mdc-data-table__header-row-checkbox",IN_PROGRESS:"mdc-data-table--in-progress",LINEAR_PROGRESS:"mdc-data-table__linear-progress",PAGINATION_ROWS_PER_PAGE_LABEL:"mdc-data-table__pagination-rows-per-page-label",PAGINATION_ROWS_PER_PAGE_SELECT:"mdc-data-table__pagination-rows-per-page-select",PROGRESS_INDICATOR:"mdc-data-table__progress-indicator",ROOT:"mdc-data-table",ROW:"mdc-data-table__row",ROW_CHECKBOX:"mdc-data-table__row-checkbox",ROW_SELECTED:"mdc-data-table__row--selected",SORT_ICON_BUTTON:"mdc-data-table__sort-icon-button",SORT_STATUS_LABEL:"mdc-data-table__sort-status-label",TABLE_CONTAINER:"mdc-data-table__table-container"},xn={ARIA_SELECTED:"aria-selected",ARIA_SORT:"aria-sort"},Fr={COLUMN_ID:"data-column-id",ROW_ID:"data-row-id"},Ee={CONTENT:"."+F.CONTENT,HEADER_CELL:"."+F.HEADER_CELL,HEADER_CELL_WITH_SORT:"."+F.HEADER_CELL_WITH_SORT,HEADER_ROW:"."+F.HEADER_ROW,HEADER_ROW_CHECKBOX:"."+F.HEADER_ROW_CHECKBOX,PROGRESS_INDICATOR:"."+F.PROGRESS_INDICATOR,ROW:"."+F.ROW,ROW_CHECKBOX:"."+F.ROW_CHECKBOX,ROW_SELECTED:"."+F.ROW_SELECTED,SORT_ICON_BUTTON:"."+F.SORT_ICON_BUTTON,SORT_STATUS_LABEL:"."+F.SORT_STATUS_LABEL},yt={ARIA_SELECTED:xn.ARIA_SELECTED,ARIA_SORT:xn.ARIA_SORT,DATA_ROW_ID_ATTR:Fr.ROW_ID,HEADER_ROW_CHECKBOX_SELECTOR:Ee.HEADER_ROW_CHECKBOX,ROW_CHECKBOX_SELECTOR:Ee.ROW_CHECKBOX,ROW_SELECTED_SELECTOR:Ee.ROW_SELECTED,ROW_SELECTOR:Ee.ROW},Z;(function(r){r.ASCENDING="ascending",r.DESCENDING="descending",r.NONE="none",r.OTHER="other"})(Z||(Z={}));/**
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
 */var Qs=function(r){g(e,r);function e(t){return r.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},addClassAtRowIndex:function(){},getAttributeByHeaderCellIndex:function(){return""},getHeaderCellCount:function(){return 0},getHeaderCellElements:function(){return[]},getRowCount:function(){return 0},getRowElements:function(){return[]},getRowIdAtIndex:function(){return""},getRowIndexByChildElement:function(){return 0},getSelectedRowCount:function(){return 0},getTableContainerHeight:function(){return 0},getTableHeaderHeight:function(){return 0},isCheckboxAtRowIndexChecked:function(){return!1},isHeaderRowCheckboxChecked:function(){return!1},isRowsSelectable:function(){return!1},notifyRowSelectionChanged:function(){},notifySelectedAll:function(){},notifySortAction:function(){},notifyUnselectedAll:function(){},notifyRowClick:function(){},registerHeaderRowCheckbox:function(){},registerRowCheckboxes:function(){},removeClass:function(){},removeClassAtRowIndex:function(){},removeClassNameByHeaderCellIndex:function(){},setAttributeAtRowIndex:function(){},setAttributeByHeaderCellIndex:function(){},setClassNameByHeaderCellIndex:function(){},setHeaderRowCheckboxChecked:function(){},setHeaderRowCheckboxIndeterminate:function(){},setProgressIndicatorStyles:function(){},setRowCheckboxCheckedAtIndex:function(){},setSortStatusLabelByHeaderCellIndex:function(){}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.isRowsSelectable()&&(this.adapter.registerHeaderRowCheckbox(),this.adapter.registerRowCheckboxes(),this.setHeaderRowCheckboxState())},e.prototype.layoutAsync=function(){return Bi(this,void 0,void 0,function(){return Vi(this,function(t){switch(t.label){case 0:return this.adapter.isRowsSelectable()?[4,this.adapter.registerHeaderRowCheckbox()]:[3,3];case 1:return t.sent(),[4,this.adapter.registerRowCheckboxes()];case 2:t.sent(),this.setHeaderRowCheckboxState(),t.label=3;case 3:return[2]}})})},e.prototype.getRows=function(){return this.adapter.getRowElements()},e.prototype.getHeaderCells=function(){return this.adapter.getHeaderCellElements()},e.prototype.setSelectedRowIds=function(t){for(var n=0;n<this.adapter.getRowCount();n++){var i=this.adapter.getRowIdAtIndex(n),a=!1;i&&t.indexOf(i)>=0&&(a=!0),this.adapter.setRowCheckboxCheckedAtIndex(n,a),this.selectRowAtIndex(n,a)}this.setHeaderRowCheckboxState()},e.prototype.getRowIds=function(){for(var t=[],n=0;n<this.adapter.getRowCount();n++)t.push(this.adapter.getRowIdAtIndex(n));return t},e.prototype.getSelectedRowIds=function(){for(var t=[],n=0;n<this.adapter.getRowCount();n++)this.adapter.isCheckboxAtRowIndexChecked(n)&&t.push(this.adapter.getRowIdAtIndex(n));return t},e.prototype.handleHeaderRowCheckboxChange=function(){for(var t=this.adapter.isHeaderRowCheckboxChecked(),n=0;n<this.adapter.getRowCount();n++)this.adapter.setRowCheckboxCheckedAtIndex(n,t),this.selectRowAtIndex(n,t);t?this.adapter.notifySelectedAll():this.adapter.notifyUnselectedAll()},e.prototype.handleRowCheckboxChange=function(t){var n=this.adapter.getRowIndexByChildElement(t.target);if(n!==-1){var i=this.adapter.isCheckboxAtRowIndexChecked(n);this.selectRowAtIndex(n,i),this.setHeaderRowCheckboxState();var a=this.adapter.getRowIdAtIndex(n);this.adapter.notifyRowSelectionChanged({rowId:a,rowIndex:n,selected:i})}},e.prototype.handleSortAction=function(t){for(var n=t.columnId,i=t.columnIndex,a=t.headerCell,s=0;s<this.adapter.getHeaderCellCount();s++)s!==i&&(this.adapter.removeClassNameByHeaderCellIndex(s,F.HEADER_CELL_SORTED),this.adapter.removeClassNameByHeaderCellIndex(s,F.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(s,yt.ARIA_SORT,Z.NONE),this.adapter.setSortStatusLabelByHeaderCellIndex(s,Z.NONE));this.adapter.setClassNameByHeaderCellIndex(i,F.HEADER_CELL_SORTED);var o=this.adapter.getAttributeByHeaderCellIndex(i,yt.ARIA_SORT),d=Z.NONE;o===Z.ASCENDING?(this.adapter.setClassNameByHeaderCellIndex(i,F.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(i,yt.ARIA_SORT,Z.DESCENDING),d=Z.DESCENDING):o===Z.DESCENDING?(this.adapter.removeClassNameByHeaderCellIndex(i,F.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(i,yt.ARIA_SORT,Z.ASCENDING),d=Z.ASCENDING):(this.adapter.setAttributeByHeaderCellIndex(i,yt.ARIA_SORT,Z.ASCENDING),d=Z.ASCENDING),this.adapter.setSortStatusLabelByHeaderCellIndex(i,d),this.adapter.notifySortAction({columnId:n,columnIndex:i,headerCell:a,sortValue:d})},e.prototype.handleRowClick=function(t){var n=t.rowId,i=t.row;this.adapter.notifyRowClick({rowId:n,row:i})},e.prototype.showProgress=function(){var t=this.adapter.getTableHeaderHeight(),n=this.adapter.getTableContainerHeight()-t,i=t;this.adapter.setProgressIndicatorStyles({height:n+"px",top:i+"px"}),this.adapter.addClass(F.IN_PROGRESS)},e.prototype.hideProgress=function(){this.adapter.removeClass(F.IN_PROGRESS)},e.prototype.setHeaderRowCheckboxState=function(){this.adapter.getSelectedRowCount()===0?(this.adapter.setHeaderRowCheckboxChecked(!1),this.adapter.setHeaderRowCheckboxIndeterminate(!1)):this.adapter.getSelectedRowCount()===this.adapter.getRowCount()?(this.adapter.setHeaderRowCheckboxChecked(!0),this.adapter.setHeaderRowCheckboxIndeterminate(!1)):(this.adapter.setHeaderRowCheckboxIndeterminate(!0),this.adapter.setHeaderRowCheckboxChecked(!1))},e.prototype.selectRowAtIndex=function(t,n){n?(this.adapter.addClassAtRowIndex(t,F.ROW_SELECTED),this.adapter.setAttributeAtRowIndex(t,yt.ARIA_SELECTED,"true")):(this.adapter.removeClassAtRowIndex(t,F.ROW_SELECTED),this.adapter.setAttributeAtRowIndex(t,yt.ARIA_SELECTED,"false"))},e}(O);/**
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
 */var M={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},Be={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},_t={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};/**
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
 */var Js=function(r){g(e,r);function e(t,n){n===void 0&&(n={});var i=r.call(this,f(f({},e.defaultAdapter),t))||this;return i.disabled=!1,i.isMenuOpen=!1,i.useDefaultValidation=!0,i.customValidity=!0,i.lastSelectedIndex=_t.UNSET_INDEX,i.clickDebounceTimeout=0,i.recentlyClicked=!1,i.leadingIcon=n.leadingIcon,i.helperText=n.helperText,i}return Object.defineProperty(e,"cssClasses",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return _t},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Be},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},e.prototype.setSelectedIndex=function(t,n,i){n===void 0&&(n=!1),i===void 0&&(i=!1),!(t>=this.adapter.getMenuItemCount())&&(t===_t.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()),this.adapter.setSelectedIndex(t),n&&this.adapter.closeMenu(),!i&&this.lastSelectedIndex!==t&&this.handleChange(),this.lastSelectedIndex=t)},e.prototype.setValue=function(t,n){n===void 0&&(n=!1);var i=this.adapter.getMenuItemValues().indexOf(t);this.setSelectedIndex(i,!1,n)},e.prototype.getValue=function(){var t=this.adapter.getSelectedIndex(),n=this.adapter.getMenuItemValues();return t!==_t.UNSET_INDEX?n[t]:""},e.prototype.getDisabled=function(){return this.disabled},e.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.adapter.addClass(M.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(M.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},e.prototype.openMenu=function(){this.adapter.addClass(M.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.layout=function(){if(this.adapter.hasLabel()){var t=this.getValue().length>0,n=this.adapter.hasClass(M.FOCUSED),i=t||n,a=this.adapter.hasClass(M.REQUIRED);this.notchOutline(i),this.adapter.floatLabel(i),this.adapter.setLabelRequired(a)}},e.prototype.layoutOptions=function(){var t=this.adapter.getMenuItemValues(),n=t.indexOf(this.getValue());this.setSelectedIndex(n,!1,!0)},e.prototype.handleMenuOpened=function(){if(this.adapter.getMenuItemValues().length!==0){var t=this.getSelectedIndex(),n=t>=0?t:0;this.adapter.focusMenuItemAtIndex(n)}},e.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},e.prototype.handleMenuClosed=function(){this.adapter.removeClass(M.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},e.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue());var t=this.adapter.hasClass(M.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.handleMenuItemAction=function(t){this.setSelectedIndex(t,!0)},e.prototype.handleFocus=function(){this.adapter.addClass(M.FOCUSED),this.layout(),this.adapter.activateBottomLine()},e.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},e.prototype.handleClick=function(t){if(!(this.disabled||this.recentlyClicked)){if(this.setClickDebounceTimeout(),this.isMenuOpen){this.adapter.closeMenu();return}this.adapter.setRippleCenter(t),this.openMenu()}},e.prototype.handleKeydown=function(t){if(!(this.isMenuOpen||!this.adapter.hasClass(M.FOCUSED))){var n=H(t)===S.ENTER,i=H(t)===S.SPACEBAR,a=H(t)===S.ARROW_UP,s=H(t)===S.ARROW_DOWN,o=t.ctrlKey||t.metaKey;if(!o&&(!i&&t.key&&t.key.length===1||i&&this.adapter.isTypeaheadInProgress())){var d=i?" ":t.key,u=this.adapter.typeaheadMatchItem(d,this.getSelectedIndex());u>=0&&this.setSelectedIndex(u),t.preventDefault();return}!n&&!i&&!a&&!s||(a&&this.getSelectedIndex()>0?this.setSelectedIndex(this.getSelectedIndex()-1):s&&this.getSelectedIndex()<this.adapter.getMenuItemCount()-1&&this.setSelectedIndex(this.getSelectedIndex()+1),this.openMenu(),t.preventDefault())}},e.prototype.notchOutline=function(t){if(!!this.adapter.hasOutline()){var n=this.adapter.hasClass(M.FOCUSED);if(t){var i=_t.LABEL_SCALE,a=this.adapter.getLabelWidth()*i;this.adapter.notchOutline(a)}else n||this.adapter.closeOutline()}},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},e.prototype.setUseDefaultValidation=function(t){this.useDefaultValidation=t},e.prototype.setValid=function(t){this.useDefaultValidation||(this.customValidity=t),this.adapter.setSelectAnchorAttr("aria-invalid",(!t).toString()),t?(this.adapter.removeClass(M.INVALID),this.adapter.removeMenuClass(M.MENU_INVALID)):(this.adapter.addClass(M.INVALID),this.adapter.addMenuClass(M.MENU_INVALID)),this.syncHelperTextValidity(t)},e.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(M.REQUIRED)&&!this.adapter.hasClass(M.DISABLED)?this.getSelectedIndex()!==_t.UNSET_INDEX&&(this.getSelectedIndex()!==0||Boolean(this.getValue())):this.customValidity},e.prototype.setRequired=function(t){t?this.adapter.addClass(M.REQUIRED):this.adapter.removeClass(M.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",t.toString()),this.adapter.setLabelRequired(t)},e.prototype.getRequired=function(){return this.adapter.getSelectAnchorAttr("aria-required")==="true"},e.prototype.init=function(){var t=this.adapter.getAnchorElement();t&&(this.adapter.setMenuAnchorElement(t),this.adapter.setMenuAnchorCorner(Kt.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(M.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(M.INVALID)),this.layout(),this.layoutOptions()},e.prototype.blur=function(){this.adapter.removeClass(M.FOCUSED),this.layout(),this.adapter.deactivateBottomLine();var t=this.adapter.hasClass(M.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.syncHelperTextValidity=function(t){if(!!this.helperText){this.helperText.setValidity(t);var n=this.helperText.isVisible(),i=this.helperText.getId();n&&i?this.adapter.setSelectAnchorAttr(Be.ARIA_DESCRIBEDBY,i):this.adapter.removeSelectAnchorAttr(Be.ARIA_DESCRIBEDBY)}},e.prototype.setClickDebounceTimeout=function(){var t=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout(function(){t.recentlyClicked=!1},_t.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},e}(O);/**
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
 */var Ot={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},Rt={HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg",HELPER_TEXT_VALIDATION_MSG_PERSISTENT:"mdc-select-helper-text--validation-msg-persistent"};/**
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
 */var to=function(r){g(e,r);function e(t){return r.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Rt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ot},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},getAttr:function(){return null},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(Ot.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.setValidation=function(t){t?this.adapter.addClass(Rt.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(Rt.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidationMsgPersistent=function(t){t?this.adapter.addClass(Rt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT):this.adapter.removeClass(Rt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.setValidity=function(t){var n=this.adapter.hasClass(Rt.HELPER_TEXT_VALIDATION_MSG);if(!!n){var i=this.adapter.hasClass(Rt.HELPER_TEXT_VALIDATION_MSG_PERSISTENT),a=!t||i;if(a){this.showToScreenReader(),t?this.adapter.removeAttr(Ot.ROLE):this.adapter.setAttr(Ot.ROLE,"alert");return}this.adapter.removeAttr(Ot.ROLE),this.hide()}},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(Ot.ARIA_HIDDEN)},e.prototype.hide=function(){this.adapter.setAttr(Ot.ARIA_HIDDEN,"true")},e}(O);/**
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
 */var wn={ICON_EVENT:"MDCSelect:icon",ICON_ROLE:"button"};/**
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
 */var Pn=["click","keydown"],eo=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.savedTabIndex=null,n.interactionHandler=function(i){n.handleInteraction(i)},n}return Object.defineProperty(e,"strings",{get:function(){return wn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var i=b(Pn),a=i.next();!a.done;a=i.next()){var s=a.value;this.adapter.registerInteractionHandler(s,this.interactionHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,n;try{for(var i=b(Pn),a=i.next();!a.done;a=i.next()){var s=a.value;this.adapter.deregisterInteractionHandler(s,this.interactionHandler)}}catch(o){t={error:o}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){!this.savedTabIndex||(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",wn.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var n=t.key==="Enter"||t.keyCode===13;(t.type==="click"||n)&&this.adapter.notifyIconAction()},e}(O);/**
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
 */var lt={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},be={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},at={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
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
 */var Br=at.ARIA_LIVE_DELAY_MS,Fn=be.ARIA_LIVE_LABEL_TEXT_ATTR;function no(r,e){e===void 0&&(e=r);var t=r.getAttribute("aria-live"),n=e.textContent.trim();!n||!t||(r.setAttribute("aria-live","off"),e.textContent="",e.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',e.setAttribute(Fn,n),setTimeout(function(){r.setAttribute("aria-live",t),e.removeAttribute(Fn),e.textContent=n},Br))}/**
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
 */var Bn=lt.OPENING,Vn=lt.OPEN,kn=lt.CLOSING,Vr=be.REASON_ACTION,Ve=be.REASON_DISMISS,io=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.opened=!1,n.animationFrame=0,n.animationTimer=0,n.autoDismissTimer=0,n.autoDismissTimeoutMs=at.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,n.closeOnEscape=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return lt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return be},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(Bn),this.adapter.removeClass(Vn),this.adapter.removeClass(kn)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(kn),this.adapter.addClass(Bn),this.adapter.announce(),this.runNextAnimationFrame(function(){t.adapter.addClass(Vn),t.animationTimer=setTimeout(function(){var n=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),n!==at.INDETERMINATE&&(t.autoDismissTimer=setTimeout(function(){t.close(Ve)},n))},at.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;t===void 0&&(t=""),!!this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(lt.CLOSING),this.adapter.removeClass(lt.OPEN),this.adapter.removeClass(lt.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},at.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(t){var n=at.MIN_AUTO_DISMISS_TIMEOUT_MS,i=at.MAX_AUTO_DISMISS_TIMEOUT_MS,a=at.INDETERMINATE;if(t===at.INDETERMINATE||t<=i&&t>=n)this.autoDismissTimeoutMs=t;else throw new Error(`
        timeoutMs must be an integer in the range `+n+"\u2013"+i+`
        (or `+a+" to disable), but got '"+t+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},e.prototype.handleKeyDown=function(t){var n=t.key==="Escape"||t.keyCode===27;n&&this.getCloseOnEscape()&&this.close(Ve)},e.prototype.handleActionButtonClick=function(t){this.close(Vr)},e.prototype.handleActionIconClick=function(t){this.close(Ve)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(lt.OPENING),this.adapter.removeClass(lt.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e}(O);/**
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
 */var dn={CLOSING:"mdc-banner--closing",OPEN:"mdc-banner--open",OPENING:"mdc-banner--opening"},Un={BANNER_ANIMATION_CLOSE_TIME_MS:250,BANNER_ANIMATION_OPEN_TIME_MS:300},Se;(function(r){r[r.PRIMARY=0]="PRIMARY",r[r.SECONDARY=1]="SECONDARY",r[r.UNSPECIFIED=2]="UNSPECIFIED"})(Se||(Se={}));/**
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
 */var ke=dn.OPENING,Kn=dn.OPEN,Ue=dn.CLOSING,ro=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.isOpened=!1,n.animationFrame=0,n.animationTimer=0,n}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},getContentHeight:function(){return 0},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeClass:function(){},setStyleProperty:function(){},trapFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0},e.prototype.open=function(){var t=this;this.isOpened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(Ue),this.adapter.addClass(ke);var n=this.adapter.getContentHeight();this.animationFrame=requestAnimationFrame(function(){t.adapter.addClass(Kn),t.adapter.setStyleProperty("height",n+"px"),t.animationTimer=setTimeout(function(){t.handleAnimationTimerEnd(),t.adapter.trapFocus(),t.adapter.notifyOpened()},Un.BANNER_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;!this.isOpened||(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.isOpened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(Ue),this.adapter.setStyleProperty("height","0"),this.adapter.removeClass(Kn),this.adapter.removeClass(ke),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.adapter.releaseFocus(),n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},Un.BANNER_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpened},e.prototype.handlePrimaryActionClick=function(){this.close(Se.PRIMARY)},e.prototype.handleSecondaryActionClick=function(){this.close(Se.SECONDARY)},e.prototype.layout=function(){var t=this.adapter.getContentHeight();this.adapter.setStyleProperty("height",t+"px")},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(ke),this.adapter.removeClass(Ue)},e}(O);function ao(r){return r<.5?4*r*r*r:.5*Math.pow(2*r-2,3)+1}function Wn(r){return Object.prototype.toString.call(r)==="[object Date]"}function Je(r,e){if(r===e||r!==r)return()=>r;const t=typeof r;if(t!==typeof e||Array.isArray(r)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(r)){const n=e.map((i,a)=>Je(r[a],i));return i=>n.map(a=>a(i))}if(t==="object"){if(!r||!e)throw new Error("Object cannot be null");if(Wn(r)&&Wn(e)){r=r.getTime(),e=e.getTime();const a=e-r;return s=>new Date(r+s*a)}const n=Object.keys(e),i={};return n.forEach(a=>{i[a]=Je(r[a],e[a])}),a=>{const s={};return n.forEach(o=>{s[o]=i[o](a)}),s}}if(t==="number"){const n=e-r;return i=>r+i*n}throw new Error(`Cannot interpolate ${t} values`)}function so(r,e={}){const t=ai(r);let n,i=r;function a(s,o){if(r==null)return t.set(r=s),Promise.resolve();i=s;let d=n,u=!1,{delay:l=0,duration:h=400,easing:E=mi,interpolate:p=Je}=Ge(Ge({},e),o);if(h===0)return d&&(d.abort(),d=null),t.set(r=i),Promise.resolve();const m=gi()+l;let T;return n=Ii(C=>{if(C<m)return!0;u||(T=p(r,s),typeof h=="function"&&(h=h(r,s)),u=!0),d&&(d.abort(),d=null);const v=C-m;return v>h?(t.set(r=s),!1):(t.set(r=T(E(v/h))),!0)}),n.promise}return{set:a,update:(s,o)=>a(s(i,r),o),subscribe:t.subscribe}}/**
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
 */var P={DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",INPUT:"mdc-slider__input",RANGE:"mdc-slider--range",THUMB:"mdc-slider__thumb",THUMB_FOCUSED:"mdc-slider__thumb--focused",THUMB_KNOB:"mdc-slider__thumb-knob",THUMB_TOP:"mdc-slider__thumb--top",THUMB_WITH_INDICATOR:"mdc-slider__thumb--with-indicator",TICK_MARKS:"mdc-slider--tick-marks",TICK_MARKS_CONTAINER:"mdc-slider__tick-marks",TICK_MARK_ACTIVE:"mdc-slider__tick-mark--active",TICK_MARK_INACTIVE:"mdc-slider__tick-mark--inactive",TRACK:"mdc-slider__track",TRACK_ACTIVE:"mdc-slider__track--active_fill",VALUE_INDICATOR_TEXT:"mdc-slider__value-indicator-text"},Gn={STEP_SIZE:1,THUMB_UPDATE_MIN_PX:5},U={ARIA_VALUETEXT:"aria-valuetext",INPUT_DISABLED:"disabled",INPUT_MIN:"min",INPUT_MAX:"max",INPUT_VALUE:"value",INPUT_STEP:"step"};/**
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
 */var te;(function(r){r[r.ACTIVE=0]="ACTIVE",r[r.INACTIVE=1]="INACTIVE"})(te||(te={}));var c;(function(r){r[r.START=1]="START",r[r.END=2]="END"})(c||(c={}));/**
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
 */var ye;(function(r){r.SLIDER_UPDATE="slider_update"})(ye||(ye={}));var Ke=typeof window!="undefined",oo=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.initialStylesRemoved=!1,n.isDisabled=!1,n.isDiscrete=!1,n.step=Gn.STEP_SIZE,n.hasTickMarks=!1,n.isRange=!1,n.thumb=null,n.downEventClientX=null,n.startThumbKnobWidth=0,n.endThumbKnobWidth=0,n.animFrame=new sn,n}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},addThumbClass:function(){},removeThumbClass:function(){},getAttribute:function(){return null},getInputValue:function(){return""},setInputValue:function(){},getInputAttribute:function(){return null},setInputAttribute:function(){return null},removeInputAttribute:function(){return null},focusInput:function(){},isInputFocused:function(){return!1},getThumbKnobWidth:function(){return 0},getThumbBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},isRTL:function(){return!1},setThumbStyleProperty:function(){},removeThumbStyleProperty:function(){},setTrackActiveStyleProperty:function(){},removeTrackActiveStyleProperty:function(){},setValueIndicatorText:function(){},getValueToAriaValueTextFn:function(){return null},updateTickMarks:function(){},setPointerCapture:function(){},emitChangeEvent:function(){},emitInputEvent:function(){},emitDragStartEvent:function(){},emitDragEndEvent:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerThumbEventHandler:function(){},deregisterThumbEventHandler:function(){},registerInputEventHandler:function(){},deregisterInputEventHandler:function(){},registerBodyEventHandler:function(){},deregisterBodyEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.isDisabled=this.adapter.hasClass(P.DISABLED),this.isDiscrete=this.adapter.hasClass(P.DISCRETE),this.hasTickMarks=this.adapter.hasClass(P.TICK_MARKS),this.isRange=this.adapter.hasClass(P.RANGE);var n=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(U.INPUT_MIN,this.isRange?c.START:c.END),U.INPUT_MIN),i=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(U.INPUT_MAX,c.END),U.INPUT_MAX),a=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(U.INPUT_VALUE,c.END),U.INPUT_VALUE),s=this.isRange?this.convertAttributeValueToNumber(this.adapter.getInputAttribute(U.INPUT_VALUE,c.START),U.INPUT_VALUE):n,o=this.adapter.getInputAttribute(U.INPUT_STEP,c.END),d=o?this.convertAttributeValueToNumber(o,U.INPUT_STEP):this.step;this.validateProperties({min:n,max:i,value:a,valueStart:s,step:d}),this.min=n,this.max=i,this.value=a,this.valueStart=s,this.step=d,this.numDecimalPlaces=Xn(this.step),this.valueBeforeDownEvent=a,this.valueStartBeforeDownEvent=s,this.mousedownOrTouchstartListener=this.handleMousedownOrTouchstart.bind(this),this.moveListener=this.handleMove.bind(this),this.pointerdownListener=this.handlePointerdown.bind(this),this.pointerupListener=this.handlePointerup.bind(this),this.thumbMouseenterListener=this.handleThumbMouseenter.bind(this),this.thumbMouseleaveListener=this.handleThumbMouseleave.bind(this),this.inputStartChangeListener=function(){t.handleInputChange(c.START)},this.inputEndChangeListener=function(){t.handleInputChange(c.END)},this.inputStartFocusListener=function(){t.handleInputFocus(c.START)},this.inputEndFocusListener=function(){t.handleInputFocus(c.END)},this.inputStartBlurListener=function(){t.handleInputBlur(c.START)},this.inputEndBlurListener=function(){t.handleInputBlur(c.END)},this.resizeListener=this.handleResize.bind(this),this.registerEventHandlers()},e.prototype.destroy=function(){this.deregisterEventHandlers()},e.prototype.setMin=function(t){this.min=t,this.isRange||(this.valueStart=t),this.updateUI()},e.prototype.setMax=function(t){this.max=t,this.updateUI()},e.prototype.getMin=function(){return this.min},e.prototype.getMax=function(){return this.max},e.prototype.getValue=function(){return this.value},e.prototype.setValue=function(t){if(this.isRange&&t<this.valueStart)throw new Error("end thumb value ("+t+") must be >= start thumb "+("value ("+this.valueStart+")"));this.updateValue(t,c.END)},e.prototype.getValueStart=function(){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");return this.valueStart},e.prototype.setValueStart=function(t){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");if(this.isRange&&t>this.value)throw new Error("start thumb value ("+t+") must be <= end thumb "+("value ("+this.value+")"));this.updateValue(t,c.START)},e.prototype.setStep=function(t){this.step=t,this.numDecimalPlaces=Xn(t),this.updateUI()},e.prototype.setIsDiscrete=function(t){this.isDiscrete=t,this.updateValueIndicatorUI(),this.updateTickMarksUI()},e.prototype.getStep=function(){return this.step},e.prototype.setHasTickMarks=function(t){this.hasTickMarks=t,this.updateTickMarksUI()},e.prototype.getDisabled=function(){return this.isDisabled},e.prototype.setDisabled=function(t){this.isDisabled=t,t?(this.adapter.addClass(P.DISABLED),this.isRange&&this.adapter.setInputAttribute(U.INPUT_DISABLED,"",c.START),this.adapter.setInputAttribute(U.INPUT_DISABLED,"",c.END)):(this.adapter.removeClass(P.DISABLED),this.isRange&&this.adapter.removeInputAttribute(U.INPUT_DISABLED,c.START),this.adapter.removeInputAttribute(U.INPUT_DISABLED,c.END))},e.prototype.getIsRange=function(){return this.isRange},e.prototype.layout=function(t){var n=t===void 0?{}:t,i=n.skipUpdateUI;this.rect=this.adapter.getBoundingClientRect(),this.isRange&&(this.startThumbKnobWidth=this.adapter.getThumbKnobWidth(c.START),this.endThumbKnobWidth=this.adapter.getThumbKnobWidth(c.END)),i||this.updateUI()},e.prototype.handleResize=function(){this.layout()},e.prototype.handleDown=function(t){if(!this.isDisabled){this.valueStartBeforeDownEvent=this.valueStart,this.valueBeforeDownEvent=this.value;var n=t.clientX!=null?t.clientX:t.targetTouches[0].clientX;this.downEventClientX=n;var i=this.mapClientXOnSliderScale(n);this.thumb=this.getThumbFromDownEvent(n,i),this.thumb!==null&&(this.handleDragStart(t,i,this.thumb),this.updateValue(i,this.thumb,{emitInputEvent:!0}))}},e.prototype.handleMove=function(t){if(!this.isDisabled){t.preventDefault();var n=t.clientX!=null?t.clientX:t.targetTouches[0].clientX,i=this.thumb!=null;if(this.thumb=this.getThumbFromMoveEvent(n),this.thumb!==null){var a=this.mapClientXOnSliderScale(n);i||(this.handleDragStart(t,a,this.thumb),this.adapter.emitDragStartEvent(a,this.thumb)),this.updateValue(a,this.thumb,{emitInputEvent:!0})}}},e.prototype.handleUp=function(){if(!(this.isDisabled||this.thumb===null)){var t=this.thumb===c.START?this.valueStartBeforeDownEvent:this.valueBeforeDownEvent,n=this.thumb===c.START?this.valueStart:this.value;t!==n&&this.adapter.emitChangeEvent(n,this.thumb),this.adapter.emitDragEndEvent(n,this.thumb),this.thumb=null}},e.prototype.handleThumbMouseenter=function(){!this.isDiscrete||!this.isRange||(this.adapter.addThumbClass(P.THUMB_WITH_INDICATOR,c.START),this.adapter.addThumbClass(P.THUMB_WITH_INDICATOR,c.END))},e.prototype.handleThumbMouseleave=function(){!this.isDiscrete||!this.isRange||this.adapter.isInputFocused(c.START)||this.adapter.isInputFocused(c.END)||(this.adapter.removeThumbClass(P.THUMB_WITH_INDICATOR,c.START),this.adapter.removeThumbClass(P.THUMB_WITH_INDICATOR,c.END))},e.prototype.handleMousedownOrTouchstart=function(t){var n=this,i=t.type==="mousedown"?"mousemove":"touchmove";this.adapter.registerBodyEventHandler(i,this.moveListener);var a=function(){n.handleUp(),n.adapter.deregisterBodyEventHandler(i,n.moveListener),n.adapter.deregisterEventHandler("mouseup",a),n.adapter.deregisterEventHandler("touchend",a)};this.adapter.registerBodyEventHandler("mouseup",a),this.adapter.registerBodyEventHandler("touchend",a),this.handleDown(t)},e.prototype.handlePointerdown=function(t){this.adapter.setPointerCapture(t.pointerId),this.adapter.registerEventHandler("pointermove",this.moveListener),this.handleDown(t)},e.prototype.handleInputChange=function(t){var n=Number(this.adapter.getInputValue(t));t===c.START?this.setValueStart(n):this.setValue(n),this.adapter.emitChangeEvent(t===c.START?this.valueStart:this.value,t),this.adapter.emitInputEvent(t===c.START?this.valueStart:this.value,t)},e.prototype.handleInputFocus=function(t){if(this.adapter.addThumbClass(P.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.addThumbClass(P.THUMB_WITH_INDICATOR,t),this.isRange)){var n=t===c.START?c.END:c.START;this.adapter.addThumbClass(P.THUMB_WITH_INDICATOR,n)}},e.prototype.handleInputBlur=function(t){if(this.adapter.removeThumbClass(P.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.removeThumbClass(P.THUMB_WITH_INDICATOR,t),this.isRange)){var n=t===c.START?c.END:c.START;this.adapter.removeThumbClass(P.THUMB_WITH_INDICATOR,n)}},e.prototype.handleDragStart=function(t,n,i){this.adapter.emitDragStartEvent(n,i),this.adapter.focusInput(i),t.preventDefault()},e.prototype.getThumbFromDownEvent=function(t,n){if(!this.isRange)return c.END;var i=this.adapter.getThumbBoundingClientRect(c.START),a=this.adapter.getThumbBoundingClientRect(c.END),s=t>=i.left&&t<=i.right,o=t>=a.left&&t<=a.right;return s&&o?null:s?c.START:o?c.END:n<this.valueStart?c.START:n>this.value?c.END:n-this.valueStart<=this.value-n?c.START:c.END},e.prototype.getThumbFromMoveEvent=function(t){if(this.thumb!==null)return this.thumb;if(this.downEventClientX===null)throw new Error("`downEventClientX` is null after move event.");var n=Math.abs(this.downEventClientX-t)<Gn.THUMB_UPDATE_MIN_PX;if(n)return this.thumb;var i=t<this.downEventClientX;return i?this.adapter.isRTL()?c.END:c.START:this.adapter.isRTL()?c.START:c.END},e.prototype.updateUI=function(t){this.updateThumbAndInputAttributes(t),this.updateThumbAndTrackUI(t),this.updateValueIndicatorUI(t),this.updateTickMarksUI()},e.prototype.updateThumbAndInputAttributes=function(t){if(!!t){var n=this.isRange&&t===c.START?this.valueStart:this.value,i=String(n);this.adapter.setInputAttribute(U.INPUT_VALUE,i,t),this.isRange&&t===c.START?this.adapter.setInputAttribute(U.INPUT_MIN,i,c.END):this.isRange&&t===c.END&&this.adapter.setInputAttribute(U.INPUT_MAX,i,c.START),this.adapter.getInputValue(t)!==i&&this.adapter.setInputValue(i,t);var a=this.adapter.getValueToAriaValueTextFn();a&&this.adapter.setInputAttribute(U.ARIA_VALUETEXT,a(n),t)}},e.prototype.updateValueIndicatorUI=function(t){if(!!this.isDiscrete){var n=this.isRange&&t===c.START?this.valueStart:this.value;this.adapter.setValueIndicatorText(n,t===c.START?c.START:c.END),!t&&this.isRange&&this.adapter.setValueIndicatorText(this.valueStart,c.START)}},e.prototype.updateTickMarksUI=function(){if(!(!this.isDiscrete||!this.hasTickMarks)){var t=(this.valueStart-this.min)/this.step,n=(this.value-this.valueStart)/this.step+1,i=(this.max-this.value)/this.step,a=Array.from({length:t}).fill(te.INACTIVE),s=Array.from({length:n}).fill(te.ACTIVE),o=Array.from({length:i}).fill(te.INACTIVE);this.adapter.updateTickMarks(a.concat(s).concat(o))}},e.prototype.mapClientXOnSliderScale=function(t){var n=t-this.rect.left,i=n/this.rect.width;this.adapter.isRTL()&&(i=1-i);var a=this.min+i*(this.max-this.min);return a===this.max||a===this.min?a:Number(this.quantize(a).toFixed(this.numDecimalPlaces))},e.prototype.quantize=function(t){var n=Math.round((t-this.min)/this.step);return this.min+n*this.step},e.prototype.updateValue=function(t,n,i){var a=i===void 0?{}:i,s=a.emitInputEvent;if(t=this.clampValue(t,n),this.isRange&&n===c.START){if(this.valueStart===t)return;this.valueStart=t}else{if(this.value===t)return;this.value=t}this.updateUI(n),s&&this.adapter.emitInputEvent(n===c.START?this.valueStart:this.value,n)},e.prototype.clampValue=function(t,n){t=Math.min(Math.max(t,this.min),this.max);var i=this.isRange&&n===c.START&&t>this.value;if(i)return this.value;var a=this.isRange&&n===c.END&&t<this.valueStart;return a?this.valueStart:t},e.prototype.updateThumbAndTrackUI=function(t){var n=this,i=this,a=i.max,s=i.min,o=(this.value-this.valueStart)/(a-s),d=o*this.rect.width,u=this.adapter.isRTL(),l=Ke?ne(window,"transform"):"transform";if(this.isRange){var h=this.adapter.isRTL()?(a-this.value)/(a-s)*this.rect.width:(this.valueStart-s)/(a-s)*this.rect.width,E=h+d;this.animFrame.request(ye.SLIDER_UPDATE,function(){var p=!u&&t===c.START||u&&t!==c.START;p?(n.adapter.setTrackActiveStyleProperty("transform-origin","right"),n.adapter.setTrackActiveStyleProperty("left","unset"),n.adapter.setTrackActiveStyleProperty("right",n.rect.width-E+"px")):(n.adapter.setTrackActiveStyleProperty("transform-origin","left"),n.adapter.setTrackActiveStyleProperty("right","unset"),n.adapter.setTrackActiveStyleProperty("left",h+"px")),n.adapter.setTrackActiveStyleProperty(l,"scaleX("+o+")");var m=u?E:h,T=n.adapter.isRTL()?h:E;(t===c.START||!t||!n.initialStylesRemoved)&&n.adapter.setThumbStyleProperty(l,"translateX("+m+"px)",c.START),(t===c.END||!t||!n.initialStylesRemoved)&&n.adapter.setThumbStyleProperty(l,"translateX("+T+"px)",c.END),n.removeInitialStyles(u),n.updateOverlappingThumbsUI(m,T,t)})}else this.animFrame.request(ye.SLIDER_UPDATE,function(){var p=u?n.rect.width-d:d;n.adapter.setThumbStyleProperty(l,"translateX("+p+"px)",c.END),n.adapter.setTrackActiveStyleProperty(l,"scaleX("+o+")"),n.removeInitialStyles(u)})},e.prototype.removeInitialStyles=function(t){if(!this.initialStylesRemoved){var n=t?"right":"left";this.adapter.removeThumbStyleProperty(n,c.END),this.isRange&&this.adapter.removeThumbStyleProperty(n,c.START),this.initialStylesRemoved=!0,this.resetTrackAndThumbAnimation()}},e.prototype.resetTrackAndThumbAnimation=function(){var t=this;if(!!this.isDiscrete){var n=Ke?ne(window,"transition"):"transition",i="all 0s ease 0s";this.adapter.setThumbStyleProperty(n,i,c.END),this.isRange&&this.adapter.setThumbStyleProperty(n,i,c.START),this.adapter.setTrackActiveStyleProperty(n,i),requestAnimationFrame(function(){t.adapter.removeThumbStyleProperty(n,c.END),t.adapter.removeTrackActiveStyleProperty(n),t.isRange&&t.adapter.removeThumbStyleProperty(n,c.START)})}},e.prototype.updateOverlappingThumbsUI=function(t,n,i){var a=!1;if(this.adapter.isRTL()){var s=t-this.startThumbKnobWidth/2,o=n+this.endThumbKnobWidth/2;a=o>=s}else{var d=t+this.startThumbKnobWidth/2,u=n-this.endThumbKnobWidth/2;a=d>=u}a?(this.adapter.addThumbClass(P.THUMB_TOP,i||c.END),this.adapter.removeThumbClass(P.THUMB_TOP,i===c.START?c.END:c.START)):(this.adapter.removeThumbClass(P.THUMB_TOP,c.START),this.adapter.removeThumbClass(P.THUMB_TOP,c.END))},e.prototype.convertAttributeValueToNumber=function(t,n){if(t===null)throw new Error("MDCSliderFoundation: `"+n+"` must be non-null.");var i=Number(t);if(isNaN(i))throw new Error("MDCSliderFoundation: `"+n+"` value is "+("`"+t+"`, but must be a number."));return i},e.prototype.validateProperties=function(t){var n=t.min,i=t.max,a=t.value,s=t.valueStart,o=t.step;if(n>=i)throw new Error("MDCSliderFoundation: min must be strictly less than max. "+("Current: [min: "+n+", max: "+i+"]"));if(o<=0)throw new Error("MDCSliderFoundation: step must be a positive number. "+("Current step: "+this.step));if(this.isRange){if(a<n||a>i||s<n||s>i)throw new Error("MDCSliderFoundation: values must be in [min, max] range. "+("Current values: [start value: "+s+", end value: "+a+"]"));if(s>a)throw new Error("MDCSliderFoundation: start value must be <= end value. "+("Current values: [start value: "+s+", end value: "+a+"]"));var d=(s-n)/o,u=(a-n)/o;if(d%1!==0||u%1!==0)throw new Error("MDCSliderFoundation: Slider values must be valid based on the "+("step value. Current values: [start value: "+s+", ")+("end value: "+a+"]"))}else{if(a<n||a>i)throw new Error("MDCSliderFoundation: value must be in [min, max] range. "+("Current value: "+a));var u=(a-n)/o;if(u%1!==0)throw new Error("MDCSliderFoundation: Slider value must be valid based on the "+("step value. Current value: "+a))}},e.prototype.registerEventHandlers=function(){this.adapter.registerWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.registerEventHandler("pointerdown",this.pointerdownListener),this.adapter.registerEventHandler("pointerup",this.pointerupListener)):(this.adapter.registerEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.registerEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.registerThumbEventHandler(c.START,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(c.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(c.START,"change",this.inputStartChangeListener),this.adapter.registerInputEventHandler(c.START,"focus",this.inputStartFocusListener),this.adapter.registerInputEventHandler(c.START,"blur",this.inputStartBlurListener)),this.adapter.registerThumbEventHandler(c.END,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(c.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(c.END,"change",this.inputEndChangeListener),this.adapter.registerInputEventHandler(c.END,"focus",this.inputEndFocusListener),this.adapter.registerInputEventHandler(c.END,"blur",this.inputEndBlurListener)},e.prototype.deregisterEventHandlers=function(){this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.deregisterEventHandler("pointerdown",this.pointerdownListener),this.adapter.deregisterEventHandler("pointerup",this.pointerupListener)):(this.adapter.deregisterEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.deregisterEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.deregisterThumbEventHandler(c.START,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(c.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(c.START,"change",this.inputStartChangeListener),this.adapter.deregisterInputEventHandler(c.START,"focus",this.inputStartFocusListener),this.adapter.deregisterInputEventHandler(c.START,"blur",this.inputStartBlurListener)),this.adapter.deregisterThumbEventHandler(c.END,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(c.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(c.END,"change",this.inputEndChangeListener),this.adapter.deregisterInputEventHandler(c.END,"focus",this.inputEndFocusListener),this.adapter.deregisterInputEventHandler(c.END,"blur",this.inputEndBlurListener)},e.prototype.handlePointerup=function(){this.handleUp(),this.adapter.deregisterEventHandler("pointermove",this.moveListener)},e.SUPPORTS_POINTER_EVENTS=Ke&&Boolean(window.PointerEvent)&&!kr(),e}(O);function kr(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}function Xn(r){var e=/(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(r));if(!e)return 0;var t=e[1]||"",n=e[2]||0;return Math.max(0,(t==="0"?0:t.length)-Number(n))}/**
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
 */var Ur={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},Kr={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
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
 */var ct=function(r){g(e,r);function e(t){return r.call(this,f(f({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Ur},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Kr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(O);/**
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
 */var uo=function(r){g(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass(ct.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(ct.cssClasses.ACTIVE)},e}(ct);/**
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
 */var lo=function(r){g(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.activate=function(t){if(!t){this.adapter.addClass(ct.cssClasses.ACTIVE);return}var n=this.computeContentClientRect(),i=t.width/n.width,a=t.left-n.left;this.adapter.addClass(ct.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+a+"px) scaleX("+i+")"),this.computeContentClientRect(),this.adapter.removeClass(ct.cssClasses.NO_TRANSITION),this.adapter.addClass(ct.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass(ct.cssClasses.ACTIVE)},e}(ct);/**
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
 */var me={ACTIVE:"mdc-tab--active"},zt={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
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
 */var co=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.focusOnActivate=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return me},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return zt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(me.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(me.ACTIVE),this.adapter.setAttr(zt.ARIA_SELECTED,"true"),this.adapter.setAttr(zt.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){!this.isActive()||(this.adapter.removeClass(me.ACTIVE),this.adapter.setAttr(zt.ARIA_SELECTED,"false"),this.adapter.setAttr(zt.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),n=this.adapter.getOffsetLeft(),i=this.adapter.getContentOffsetWidth(),a=this.adapter.getContentOffsetLeft();return{contentLeft:n+a,contentRight:n+a+i,rootLeft:n,rootRight:n+t}},e}(O);/**
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
 */var Ei={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},Wr={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
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
 */var ln=function(){function r(e){this.adapter=e}return r}();/**
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
 */var Gr=function(r){g(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges().right;return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.calculateScrollEdges(),i=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(n.right-t);return{finalScrollPosition:a,scrollDelta:a-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e}(ln);/**
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
 */var Xr=function(r){g(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(t-n)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t,n){return t-n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:n-t,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.max(Math.min(n.right,t),n.left)},e}(ln);/**
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
 */var Yr=function(r){g(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n+t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.getAnimatingScrollPosition=function(t,n){return t+n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:t-n,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.right,t),n.left)},e}(ln);/**
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
 */var ho=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.isAnimating=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Ei},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Wr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return n-t},e.prototype.handleInteraction=function(){!this.isAnimating||this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var n=t.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){t!==0&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(t!==0){var n=this.getIncrementScrollOperation(t);n.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL()){this.scrollToImplRTL(t);return}this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if(t==="none")return 0;var n=/\((.+?)\)/.exec(t);if(!n)return 0;var i=n[1],a=nn(i.split(","),6);a[0],a[1],a[2],a[3];var s=a[4];return a[5],parseFloat(s)},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.scrollToImpl=function(t){var n=this.getScrollPosition(),i=this.clampScrollValue(t),a=i-n;this.animate({finalScrollPosition:i,scrollDelta:a})},e.prototype.scrollToImplRTL=function(t){var n=this.getRTLScroller().scrollToRTL(t);this.animate(n)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var n=this.getScrollPosition(),i=t+n,a=this.clampScrollValue(i),s=a-n;return{finalScrollPosition:a,scrollDelta:s}},e.prototype.animate=function(t){var n=this;t.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(n,t):n-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(t),new Xr(this.adapter);var i=this.adapter.computeScrollAreaClientRect(),a=this.adapter.computeScrollContentClientRect(),s=Math.round(a.right-i.right);return this.adapter.setScrollAreaScrollLeft(t),s===n?new Yr(this.adapter):new Gr(this.adapter)},e.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},e}(O);/**
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
 */var We;function fo(r,e){if(e===void 0&&(e=!0),e&&typeof We!="undefined")return We;var t=r.createElement("div");t.classList.add(Ei.SCROLL_TEST),r.body.appendChild(t);var n=t.offsetHeight-t.clientHeight;return r.body.removeChild(t),e&&(We=n),n}/**
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
 */var B={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},nt={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
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
 */var Ht=new Set;Ht.add(B.ARROW_LEFT_KEY);Ht.add(B.ARROW_RIGHT_KEY);Ht.add(B.END_KEY);Ht.add(B.HOME_KEY);Ht.add(B.ENTER_KEY);Ht.add(B.SPACE_KEY);var xt=new Map;xt.set(nt.ARROW_LEFT_KEYCODE,B.ARROW_LEFT_KEY);xt.set(nt.ARROW_RIGHT_KEYCODE,B.ARROW_RIGHT_KEY);xt.set(nt.END_KEYCODE,B.END_KEY);xt.set(nt.HOME_KEYCODE,B.HOME_KEY);xt.set(nt.ENTER_KEYCODE,B.ENTER_KEY);xt.set(nt.SPACE_KEYCODE,B.SPACE_KEY);var po=function(r){g(e,r);function e(t){var n=r.call(this,f(f({},e.defaultAdapter),t))||this;return n.useAutomaticActivation=!1,n}return Object.defineProperty(e,"strings",{get:function(){return B},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return nt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var n=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(t)||t===n)){var i;n!==-1&&(this.adapter.deactivateTabAtIndex(n),i=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(t,i),this.scrollIntoView(t),this.adapter.notifyTabActivated(t)}},e.prototype.handleKeyDown=function(t){var n=this.getKeyFromEvent(t);if(n!==void 0)if(this.isActivationKey(n)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(n))return;var i=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),n);this.adapter.setActiveTab(i),this.scrollIntoView(i)}else{var a=this.adapter.getFocusedTabIndex();if(this.isActivationKey(n))this.adapter.setActiveTab(a);else{var i=this.determineTargetFromKey(a,n);this.adapter.focusTabAtIndex(i),this.scrollIntoView(i)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(!!this.indexIsInRange(t)){if(t===0){this.adapter.scrollTo(0);return}if(t===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(t);return}this.scrollIntoViewImpl(t)}},e.prototype.determineTargetFromKey=function(t,n){var i=this.isRTL(),a=this.adapter.getTabListLength()-1,s=n===B.END_KEY,o=n===B.ARROW_LEFT_KEY&&!i||n===B.ARROW_RIGHT_KEY&&i,d=n===B.ARROW_RIGHT_KEY&&!i||n===B.ARROW_LEFT_KEY&&i,u=t;return s?u=a:o?u-=1:d?u+=1:u=0,u<0?u=a:u>a&&(u=0),u},e.prototype.calculateScrollIncrement=function(t,n,i,a){var s=this.adapter.getTabDimensionsAtIndex(n),o=s.contentLeft-i-a,d=s.contentRight-i,u=d-nt.EXTRA_SCROLL_AMOUNT,l=o+nt.EXTRA_SCROLL_AMOUNT;return n<t?Math.min(u,0):Math.max(l,0)},e.prototype.calculateScrollIncrementRTL=function(t,n,i,a,s){var o=this.adapter.getTabDimensionsAtIndex(n),d=s-o.contentLeft-i,u=s-o.contentRight-i-a,l=u+nt.EXTRA_SCROLL_AMOUNT,h=d-nt.EXTRA_SCROLL_AMOUNT;return n>t?Math.max(l,0):Math.min(h,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,n,i,a){var s=n.rootLeft-i,o=n.rootRight-i-a,d=s+o,u=s<0||d<0,l=o>0||d>0;return u?t-1:l?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,n,i,a,s){var o=s-n.rootLeft-a-i,d=s-n.rootRight-i,u=o+d,l=o>0||u>0,h=d<0||u<0;return l?t+1:h?t-1:-1},e.prototype.getKeyFromEvent=function(t){return Ht.has(t.key)?t.key:xt.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===B.SPACE_KEY||t===B.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(t),s=this.findAdjacentTabIndexClosestToEdge(t,a,n,i);if(!!this.indexIsInRange(s)){var o=this.calculateScrollIncrement(t,s,n,i);this.adapter.incrementScroll(o)}},e.prototype.scrollIntoViewImplRTL=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(t),s=this.adapter.getScrollContentWidth(),o=this.findAdjacentTabIndexClosestToEdgeRTL(t,a,n,i,s);if(!!this.indexIsInRange(o)){var d=this.calculateScrollIncrementRTL(t,o,n,i,s);this.adapter.incrementScroll(d)}},e}(O);export{$a as $,Pa as A,Pi as B,Ge as C,ai as D,ba as E,Oa as F,Ia as G,Oi as H,ua as I,zr as J,ya as K,Ma as L,hn as M,Ct as N,Fa as O,La as P,$r as Q,Zr as R,Ua as S,Qr as T,qr as U,en as V,aa as W,xa as X,Ha as Y,Li as Z,Ea as _,Di as a,rs as a$,As as a0,ss as a1,Ts as a2,Cs as a3,qa as a4,ca as a5,ia as a6,jn as a7,ie as a8,ta as a9,la as aA,cs as aB,ms as aC,ds as aD,os as aE,as as aF,hs as aG,fs as aH,ja as aI,Wa as aJ,Es as aK,Ga as aL,ea as aM,jr as aN,Ya as aO,Xa as aP,Ds as aQ,Ns as aR,Ms as aS,Hs as aT,xs as aU,Ja as aV,Za as aW,ts as aX,Qa as aY,es as aZ,is as a_,re as aa,Ka as ab,oi as ac,ys as ad,Ss as ae,zi as af,Jr as ag,Ci as ah,rr as ai,Rs as aj,_s as ak,bs as al,Os as am,vs as an,Ls as ao,ft as ap,na as aq,qe as ar,Bt as as,Jt as at,ha as au,an as av,Xi as aw,Is as ax,Ra as ay,da as az,Qn as b,ls as b0,us as b1,ws as b2,zs as b3,js as b4,Gs as b5,Xs as b6,Ys as b7,Ta as b8,ks as b9,te as bA,oo as bB,c as bC,fa as bD,eo as bE,uo as bF,lo as bG,co as bH,ho as bI,fo as bJ,po as bK,ps as bL,Ws as ba,Pe as bb,Ps as bc,Fs as bd,Bs as be,vr as bf,Kt as bg,$s as bh,qs as bi,Zs as bj,ns as bk,gs as bl,za as bm,Qs as bn,to as bo,Js as bp,ga as bq,Ks as br,Us as bs,Vs as bt,io as bu,no as bv,ro as bw,Se as bx,so as by,ao as bz,pa as c,Ri as d,bi as e,Ca as f,ra as g,Mi as h,ka as i,Aa as j,sa as k,oa as l,ma as m,Da as n,xi as o,Na as p,ri as q,_a as r,Ai as s,tn as t,Sa as u,va as v,Ba as w,Va as x,wi as y,wa as z};
