import{S as pe,i as ge,s as ve,u as k,y as I,v as w,w as b,z as q,o as h,x as m,H as fe,g as C,I as p,A as U,D as Z,q as dt,e as ce,C as oe,t as V,k as ae,l as N,b as Q,a as ne,f as R,d as re,m as se,n as ie,B as Ie,a6 as qe,T as ht,$ as le,_ as _t,V as mt,W as pt,X as gt,P as _e,a7 as x,a1 as Le,a2 as Ne,J as B,Q as tt,G as we,a8 as je,a0 as lt,a9 as vt,F as Te,aa as bt,ab as yt,ac as kt,ad as Ae}from"./index-ad01e7bd.js";import{t as nt,b as wt,l as Ve,c as Tt,I as Et,a as ue,C as rt,P as st}from"./Prismjs-256948e9.js";import{a as Ct,b as Dt,t as St}from"./QueryViewer.svelte_svelte_type_style_lang-4685c49e.js";import{a as Me,b as it,c as de}from"./index-74f16121.js";import{s as It}from"./Prismjs.svelte_svelte_type_style_lang-6b8b25e2.js";import{s as qt}from"./stores-80bb3aed.js";import{w as Oe}from"./index-d64e724b.js";function Qe(r,e){let t;return r?(Array.isArray(r)&&r.length>0?t=r[0]:t=r,t&&t._evidenceColumnTypes?t._evidenceColumnTypes.find(n=>{var s;return((s=n.name)==null?void 0:s.toLowerCase())===(e==null?void 0:e.toLowerCase())}):Ct(r).find(n=>{var s;return((s=n.name)==null?void 0:s.toLowerCase())===(e==null?void 0:e.toLowerCase())})):null}function Lt(r,e){return r<e?-1:r>e?1:r>=e?0:NaN}function*Nt(r,e){if(e===void 0)for(let t of r)t!=null&&(t=+t)>=t&&(yield t);else{let t=-1;for(let l of r)(l=e(l,++t,r))!=null&&(l=+l)>=l&&(yield l)}}function Ee(r,e){let t;if(e===void 0)for(const l of r)l!=null&&(t<l||t===void 0&&l>=l)&&(t=l);else{let l=-1;for(let n of r)(n=e(n,++l,r))!=null&&(t<n||t===void 0&&n>=n)&&(t=n)}return t}function Ce(r,e){let t;if(e===void 0)for(const l of r)l!=null&&(t>l||t===void 0&&l>=l)&&(t=l);else{let l=-1;for(let n of r)(n=e(n,++l,r))!=null&&(t>n||t===void 0&&n>=n)&&(t=n)}return t}function ot(r,e,t=0,l=r.length-1,n=Lt){for(;l>t;){if(l-t>600){const o=l-t+1,f=e-t+1,u=Math.log(o),c=.5*Math.exp(2*u/3),d=.5*Math.sqrt(u*c*(o-c)/o)*(f-o/2<0?-1:1),g=Math.max(t,Math.floor(e-f*c/o+d)),y=Math.min(l,Math.floor(e+(o-f)*c/o+d));ot(r,e,g,y,n)}const s=r[e];let i=t,a=l;for(ke(r,t,e),n(r[l],s)>0&&ke(r,t,l);i<a;){for(ke(r,i,a),++i,--a;n(r[i],s)<0;)++i;for(;n(r[a],s)>0;)--a}n(r[t],s)===0?ke(r,t,a):(++a,ke(r,a,l)),a<=e&&(t=a+1),e<=a&&(l=a-1)}return r}function ke(r,e,t){const l=r[e];r[e]=r[t],r[t]=l}function jt(r,e,t){if(r=Float64Array.from(Nt(r,t)),!!(l=r.length)){if((e=+e)<=0||l<2)return Ce(r);if(e>=1)return Ee(r);var l,n=(l-1)*e,s=Math.floor(n),i=Ee(ot(r,s).subarray(0,s+1)),a=Ce(r.subarray(s+1));return i+(a-i)*(n-s)}}function At(r,e){return jt(r,.5,e)}function at(r,e){return l=>{e=e!=null?e:{};const n={},s=Object.keys(r);for(const i of s)n[i]=r[i](l);if(e.rest&&l.length){const i=Object.keys(l[0]);for(const a of i)s.includes(a)||(n[a]=e.rest(a)(l))}return[n]}}function Vt(r,e,t,l){if(!r.length)return[];const n={};let s;if(l==null)s=Object.keys(r[0]);else{s=[];for(const i of It(l))typeof i=="function"?s.push(...i(r)):s.push(i)}for(const i of s){if(t){const a=r.map(o=>o[i]);if(!t(a))continue}n[i]=e(i)(r)}return[n]}function Il(r,e){return l=>Vt(l,e,void 0,r)}function ut(r){const e=typeof r=="function"?r:t=>t[r];return t=>Ce(t,e)}function ft(r){const e=typeof r=="function"?r:t=>t[r];return t=>Ee(t,e)}function Mt(r){const e=typeof r=="function"?r:t=>t[r];return t=>At(t,e)}function Re(r,e){let t,l=nt(r,at({min:ut(e),max:ft(e),median:Mt(e)}))[0],{maxDecimals:n,unitType:s}=Ot(r.map(i=>i[e]));return t={min:l.min,max:l.max,median:l.median,maxDecimals:n,unitType:s},t}function Pe(r,e){var t=nt(r,at({min:ut(e),max:ft(e)}));let l=t[0].min,n=t[0].max;return[l,n]}function Ot(r){var o;let e=0,t=0,l=0,n=0,s=0,i=0,a=0;if(r==null||r.length===0)return{maxDecimals:0,unitType:"unknown"};{for(let c=0;c<r.length;c++){let d=r[c];switch(typeof d){case"undefined":e++;break;case"null":t++;break;case"number":n++;let g=(o=d.toString().split(".")[1])==null?void 0:o.length;g&&g>a&&(a=g);break;case"string":l++;break;case"object":d instanceof Date?s++:d===null?t++:i++;break;case"date":s++;break}}let f,u=e+t;return n+u===r.length?f="number":l+u===r.length?f="string":s+u===r.length?f="date":i+u===r.length?f="object":f="unknown",{maxDecimals:a,unitType:f}}}function Ue(r,e){let t=wt(r,e),l=["id","gdp"],n=["of","the","and","in","on"];function s(i){return i.replace(/\S*/g,function(a){return!l.includes(a)&&!n.includes(a)?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():l.includes(a)?a.toUpperCase():a.toLowerCase()})}return t=s(t.replace(/_/g," ")),t}function ct(r,e="object"){var t,l,n,s;let i,a=[];var o;if(e==="object")for(const[f]of Object.entries(r[0])){t=f,n=Qe(r,t),l=n.evidenceType,i=Re(r,t),s=Ve(f,n,i),o=Pe(r,t);let u={[t]:{title:Ue(t,s),type:l,evidenceColumnType:n,format:s,columnUnitSummary:i,extentsLegacy:o}};a={...a,...u}}else for(const[f]of Object.entries(r[0]))t=f,n=Qe(r,t),l=n.evidenceType,i=Re(r,t),s=Ve(f,n,i),o=Pe(r,t),a.push({id:t,title:Ue(t,s),type:l,evidenceColumnType:n,format:s,columnUnitSummary:i,extentsLegacy:o});return a}function Qt(r,e,t){var s,i,a,o,f;let l=[];if(r==null)throw Error("No dataset provided");if(typeof r!="object")throw Error("'"+r+"' is not a recognized query result. Data should be provided in the format: data = {"+r.replace("data.","")+"}");if(r[0]==null)throw Error("Dataset is empty: query ran successfully, but no data was returned from the database");if(((i=(s=r[0])==null?void 0:s.error_object)==null?void 0:i.error)!=null)throw Error("SQL Error: "+((f=(o=(a=r[0])==null?void 0:a.error_object)==null?void 0:o.error)==null?void 0:f.message));if(e!=null){if(!e instanceof Array)throw Error("reqCols must be passed in as an array");for(var n=0;n<e.length;n++)if(e[n]==null)throw Error("Missing required columns");for(const[c]of Object.entries(r[0]))l.push(c);let u;for(n=0;n<e.length;n++)if(u=e[n],!l.includes(u))throw Error("'"+u+"' is not a column in the dataset");if(t!=null&&t[0]!=null){for(n=0;n<t.length;n++)if(u=t[n],!l.includes(u))throw Error("'"+u+"' is not a column in the dataset")}}}function Rt(r){let e,t,l;return{c(){e=k("span"),t=I(r[0]),this.h()},l(n){e=w(n,"SPAN",{class:!0});var s=b(e);t=q(s,r[0]),s.forEach(h),this.h()},h(){m(e,"class",l=fe(r[1]?"flash":"normal")+" svelte-dlmu54")},m(n,s){C(n,e,s),p(e,t)},p(n,[s]){s&1&&U(t,n[0]),s&2&&l!==(l=fe(n[1]?"flash":"normal")+" svelte-dlmu54")&&m(e,"class",l)},i:Z,o:Z,d(n){n&&h(e)}}}function Pt(r,e,t){let{value:l}=e,n=!0;return dt(()=>{t(1,n=!n)}),r.$$set=s=>{"value"in s&&t(0,l=s.value)},[l,n]}class Ut extends pe{constructor(e){super(),ge(this,e,Pt,Rt,ve,{value:0})}}const ql=Symbol(),Ll=Symbol(),Bt={}.VITE_BUILD_STRICT==="true";function zt(r){let e,t,l,n,s,i,a,o,f,u;return i=new Et({}),{c(){e=k("span"),t=k("span"),l=I("Error"),n=Q(),s=k("span"),ne(i.$$.fragment),a=Q(),o=k("span"),f=I(r[1]),this.h()},l(c){e=w(c,"SPAN",{class:!0});var d=b(e);t=w(d,"SPAN",{class:!0});var g=b(t);l=q(g,"Error"),g.forEach(h),n=R(d),s=w(d,"SPAN",{class:!0});var y=b(s);re(i.$$.fragment,y),y.forEach(h),a=R(d),o=w(d,"SPAN",{class:!0});var _=b(o);f=q(_,r[1]),_.forEach(h),d.forEach(h),this.h()},h(){m(t,"class","error-label svelte-gbiqqa"),m(s,"class","additional-info-icon svelte-gbiqqa"),m(o,"class","error-msg svelte-gbiqqa"),m(e,"class","error svelte-gbiqqa")},m(c,d){C(c,e,d),p(e,t),p(t,l),p(e,n),p(e,s),se(i,s,null),p(e,a),p(e,o),p(o,f),u=!0},p(c,d){(!u||d&2)&&U(f,c[1])},i(c){u||(N(i.$$.fragment,c),u=!0)},o(c){V(i.$$.fragment,c),u=!1},d(c){c&&h(e),ie(i)}}}function Ft(r){let e,t;return e=new Ut({props:{value:ue(r[2],r[3])}}),{c(){ne(e.$$.fragment)},l(l){re(e.$$.fragment,l)},m(l,n){se(e,l,n),t=!0},p(l,n){const s={};n&12&&(s.value=ue(l[2],l[3])),e.$set(s)},i(l){t||(N(e.$$.fragment,l),t=!0)},o(l){V(e.$$.fragment,l),t=!1},d(l){ie(e,l)}}}function Ht(r){let e,t,l,n,s,i;return{c(){e=k("span"),t=I("["),l=I(r[0]),n=I("]"),s=k("span"),i=I("Placeholder: no data currently referenced."),this.h()},l(a){e=w(a,"SPAN",{class:!0});var o=b(e);t=q(o,"["),l=q(o,r[0]),n=q(o,"]"),s=w(o,"SPAN",{class:!0});var f=b(s);i=q(f,"Placeholder: no data currently referenced."),f.forEach(h),o.forEach(h),this.h()},h(){m(s,"class","error-msg svelte-gbiqqa"),m(e,"class","placeholder svelte-gbiqqa")},m(a,o){C(a,e,o),p(e,t),p(e,l),p(e,n),p(e,s),p(s,i)},p(a,o){o&1&&U(l,a[0])},i:Z,o:Z,d(a){a&&h(e)}}}function Wt(r){let e,t,l,n;const s=[Ht,Ft,zt],i=[];function a(o,f){return o[0]?0:o[1]?2:1}return e=a(r),t=i[e]=s[e](r),{c(){t.c(),l=ce()},l(o){t.l(o),l=ce()},m(o,f){i[e].m(o,f),C(o,l,f),n=!0},p(o,[f]){let u=e;e=a(o),e===u?i[e].p(o,f):(oe(),V(i[u],1,1,()=>{i[u]=null}),ae(),t=i[e],t?t.p(o,f):(t=i[e]=s[e](o),t.c()),N(t,1),t.m(l.parentNode,l))},i(o){n||(N(t),n=!0)},o(o){V(t),n=!1},d(o){i[e].d(o),o&&h(l)}}}function Yt(r,e,t){let{data:l=null}=e,{row:n=0}=e,{column:s=null}=e,{placeholder:i=null}=e,a,o,f,u;return r.$$set=c=>{"data"in c&&t(4,l=c.data),"row"in c&&t(6,n=c.row),"column"in c&&t(5,s=c.column),"placeholder"in c&&t(0,i=c.placeholder)},r.$$.update=()=>{if(r.$$.dirty&243)try{if(t(1,f=void 0),!i)if(l){if(typeof l=="string")throw Error(`Received: data=${l}, expected: data={${l}}`);if(Array.isArray(l)||t(4,l=[l]),isNaN(n))throw Error("row must be a number (row="+n+")");try{Object.keys(l[n])[0]}catch{throw Error("Row "+n+" does not exist in the dataset")}t(5,s=s!=null?s:Object.keys(l[n])[0]),Qt(l,[s]),t(7,u=ct(l,"array"));let c=u.filter(d=>d.type==="date");if(c=c.map(d=>d.id),c.length>0)for(let d=0;d<c.length;d++)t(4,l=Tt(l,c[d]));t(2,a=l[n][s]),t(7,u=u.filter(d=>d.id===s)),t(3,o=u[0].format)}else throw Error("No data provided. If you referenced a query result, check that the name is correct.")}catch(c){if(t(1,f=c.message),Bt)throw f}},[i,f,a,o,l,s,n,u]}class Nl extends pe{constructor(e){super(),ge(this,e,Yt,Wt,ve,{data:4,row:6,column:5,placeholder:0})}}function Be(r){let e,t,l,n,s,i,a,o,f,u;const c=r[7].default,d=ht(c,r,r[6],null),g=d||Kt();return{c(){e=k("div"),t=k("button"),l=k("span"),n=I(r[1]),s=Q(),g&&g.c(),this.h()},l(y){e=w(y,"DIV",{});var _=b(e);t=w(_,"BUTTON",{type:!0,class:!0});var D=b(t);l=w(D,"SPAN",{});var P=b(l);n=q(P,r[1]),P.forEach(h),s=R(D),g&&g.l(D),D.forEach(h),_.forEach(h),this.h()},h(){m(t,"type","button"),m(t,"class",i=fe(r[4].class)+" svelte-12nn016")},m(y,_){C(y,e,_),p(e,t),p(t,l),p(l,n),p(t,s),g&&g.m(t,null),o=!0,f||(u=le(t,"click",function(){_t(r[3](r[0]))&&r[3](r[0]).apply(this,arguments)}),f=!0)},p(y,_){r=y,(!o||_&2)&&U(n,r[1]),d&&d.p&&(!o||_&64)&&mt(d,c,r,r[6],o?gt(c,r[6],_,null):pt(r[6]),null),(!o||_&16&&i!==(i=fe(r[4].class)+" svelte-12nn016"))&&m(t,"class",i)},i(y){o||(N(g,y),y&&_e(()=>{a||(a=x(e,Me,{duration:200},!0)),a.run(1)}),o=!0)},o(y){V(g,y),y&&(a||(a=x(e,Me,{duration:200},!1)),a.run(0)),o=!1},d(y){y&&h(e),g&&g.d(y),y&&a&&a.end(),f=!1,u()}}}function Kt(r){let e,t;return{c(){e=Le("svg"),t=Le("path"),this.h()},l(l){e=Ne(l,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var n=b(e);t=Ne(n,"path",{d:!0}),b(t).forEach(h),n.forEach(h),this.h()},h(){m(t,"d","M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"),m(e,"width","12"),m(e,"height","12"),m(e,"viewBox","0 0 24 24"),m(e,"fill","none"),m(e,"stroke-width","2"),m(e,"stroke-linecap","round"),m(e,"stroke-linejoin","round")},m(l,n){C(l,e,n),p(e,t)},p:Z,d(l){l&&h(e)}}}function Xt(r){let e,t,l=r[2]&&Be(r);return{c(){l&&l.c(),e=ce()},l(n){l&&l.l(n),e=ce()},m(n,s){l&&l.m(n,s),C(n,e,s),t=!0},p(n,[s]){n[2]?l?(l.p(n,s),s&4&&N(l,1)):(l=Be(n),l.c(),N(l,1),l.m(e.parentNode,e)):l&&(oe(),V(l,1,1,()=>{l=null}),ae())},i(n){t||(N(l),t=!0)},o(n){V(l),t=!1},d(n){l&&l.d(n),n&&h(e)}}}function Gt(r,e,t){let{$$slots:l={},$$scope:n}=e,{data:s}=e,{queryID:i}=e,{text:a="Download"}=e,{display:o}=e,{downloadData:f=u=>{const c={fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!1,filename:i!=null?i:"evidence_download",useTextFile:!1,useBom:!0,useKeysAsHeaders:!0};new Dt.ExportToCsv(c).generateCsv(u)}}=e;return r.$$set=u=>{t(4,e=Ie(Ie({},e),qe(u))),"data"in u&&t(0,s=u.data),"queryID"in u&&t(5,i=u.queryID),"text"in u&&t(1,a=u.text),"display"in u&&t(2,o=u.display),"downloadData"in u&&t(3,f=u.downloadData),"$$scope"in u&&t(6,n=u.$$scope)},e=qe(e),[s,a,o,f,e,i,n,l]}class Jt extends pe{constructor(e){super(),ge(this,e,Gt,Xt,ve,{data:0,queryID:5,text:1,display:2,downloadData:3})}}function ze(r,e,t){const l=r.slice();return l[12]=e[t],l[14]=t,l}function Fe(r,e,t){const l=r.slice();return l[15]=e[t],l[17]=t,l}function He(r,e,t){const l=r.slice();return l[18]=e[t],l}function We(r,e,t){const l=r.slice();return l[18]=e[t],l}function Ye(r){let e,t=r[18].id+"",l,n,s,i;return{c(){e=k("th"),l=I(t),this.h()},l(a){e=w(a,"TH",{class:!0,style:!0,evidencetype:!0,evidencetypefidelity:!0});var o=b(e);l=q(o,t),o.forEach(h),this.h()},h(){var a,o;m(e,"class",n=fe(r[18].type)+" svelte-1g7od2s"),B(e,"width",r[6]+"%"),m(e,"evidencetype",s=((a=r[18].evidenceColumnType)==null?void 0:a.evidenceType)||"unavailable"),m(e,"evidencetypefidelity",i=((o=r[18].evidenceColumnType)==null?void 0:o.typeFidelity)||"unavailable")},m(a,o){C(a,e,o),p(e,l)},p(a,o){var f,u;o&8&&t!==(t=a[18].id+"")&&U(l,t),o&8&&n!==(n=fe(a[18].type)+" svelte-1g7od2s")&&m(e,"class",n),o&64&&B(e,"width",a[6]+"%"),o&8&&s!==(s=((f=a[18].evidenceColumnType)==null?void 0:f.evidenceType)||"unavailable")&&m(e,"evidencetype",s),o&8&&i!==(i=((u=a[18].evidenceColumnType)==null?void 0:u.typeFidelity)||"unavailable")&&m(e,"evidencetypefidelity",i)},d(a){a&&h(e)}}}function Ke(r){let e,t=r[18].type+"",l,n,s,i;return{c(){e=k("th"),l=I(t),this.h()},l(a){e=w(a,"TH",{class:!0,style:!0,evidencetype:!0,evidencetypefidelity:!0});var o=b(e);l=q(o,t),o.forEach(h),this.h()},h(){var a,o;m(e,"class",n=r[18].type+" type-indicator svelte-1g7od2s"),B(e,"width",r[6]+"%"),m(e,"evidencetype",s=((a=r[18].evidenceColumnType)==null?void 0:a.evidenceType)||"unavailable"),m(e,"evidencetypefidelity",i=((o=r[18].evidenceColumnType)==null?void 0:o.typeFidelity)||"unavailable")},m(a,o){C(a,e,o),p(e,l)},p(a,o){var f,u;o&8&&t!==(t=a[18].type+"")&&U(l,t),o&8&&n!==(n=a[18].type+" type-indicator svelte-1g7od2s")&&m(e,"class",n),o&64&&B(e,"width",a[6]+"%"),o&8&&s!==(s=((f=a[18].evidenceColumnType)==null?void 0:f.evidenceType)||"unavailable")&&m(e,"evidencetype",s),o&8&&i!==(i=((u=a[18].evidenceColumnType)==null?void 0:u.typeFidelity)||"unavailable")&&m(e,"evidencetypefidelity",i)},d(a){a&&h(e)}}}function Zt(r){let e=(r[2]+r[14]+1).toLocaleString()+"",t;return{c(){t=I(e)},l(l){t=q(l,e)},m(l,n){C(l,t,n)},p(l,n){n&4&&e!==(e=(l[2]+l[14]+1).toLocaleString()+"")&&U(t,e)},d(l){l&&h(t)}}}function $t(r){let e=(r[2]+r[14]+1).toLocaleString()+"",t;return{c(){t=I(e)},l(l){t=q(l,e)},m(l,n){C(l,t,n)},p(l,n){n&4&&e!==(e=(l[2]+l[14]+1).toLocaleString()+"")&&U(t,e)},d(l){l&&h(t)}}}function xt(r){let e,t=(r[15]||"\xD8")+"",l;return{c(){e=k("td"),l=I(t),this.h()},l(n){e=w(n,"TD",{class:!0,style:!0});var s=b(e);l=q(s,t),s.forEach(h),this.h()},h(){m(e,"class","other svelte-1g7od2s"),B(e,"width",r[6]+"%")},m(n,s){C(n,e,s),p(e,l)},p(n,s){s&32&&t!==(t=(n[15]||"\xD8")+"")&&U(l,t),s&64&&B(e,"width",n[6]+"%")},d(n){n&&h(e)}}}function el(r){var i;let e,t,l=((i=r[15])!=null?i:"\xD8")+"",n,s;return{c(){e=k("td"),t=k("div"),n=I(l),this.h()},l(a){e=w(a,"TD",{class:!0,style:!0,title:!0});var o=b(e);t=w(o,"DIV",{class:!0});var f=b(t);n=q(f,l),f.forEach(h),o.forEach(h),this.h()},h(){m(t,"class","svelte-1g7od2s"),m(e,"class","boolean svelte-1g7od2s"),B(e,"width",r[6]+"%"),m(e,"title",s=r[15])},m(a,o){C(a,e,o),p(e,t),p(t,n)},p(a,o){var f;o&32&&l!==(l=((f=a[15])!=null?f:"\xD8")+"")&&U(n,l),o&64&&B(e,"width",a[6]+"%"),o&32&&s!==(s=a[15])&&m(e,"title",s)},d(a){a&&h(e)}}}function tl(r){let e,t,l=(r[15]||"\xD8")+"",n,s;return{c(){e=k("td"),t=k("div"),n=I(l),this.h()},l(i){e=w(i,"TD",{class:!0,style:!0,title:!0});var a=b(e);t=w(a,"DIV",{class:!0});var o=b(t);n=q(o,l),o.forEach(h),a.forEach(h),this.h()},h(){m(t,"class","svelte-1g7od2s"),m(e,"class","string svelte-1g7od2s"),B(e,"width",r[6]+"%"),m(e,"title",s=r[15])},m(i,a){C(i,e,a),p(e,t),p(t,n)},p(i,a){a&32&&l!==(l=(i[15]||"\xD8")+"")&&U(n,l),a&64&&B(e,"width",i[6]+"%"),a&32&&s!==(s=i[15])&&m(e,"title",s)},d(i){i&&h(e)}}}function ll(r){let e,t,l=ue(r[15],r[3][r[17]].format)+"",n,s;return{c(){e=k("td"),t=k("div"),n=I(l),this.h()},l(i){e=w(i,"TD",{class:!0,style:!0,title:!0});var a=b(e);t=w(a,"DIV",{class:!0});var o=b(t);n=q(o,l),o.forEach(h),a.forEach(h),this.h()},h(){m(t,"class","svelte-1g7od2s"),m(e,"class","string svelte-1g7od2s"),B(e,"width",r[6]+"%"),m(e,"title",s=ue(r[15],r[3][r[17]].format))},m(i,a){C(i,e,a),p(e,t),p(t,n)},p(i,a){a&40&&l!==(l=ue(i[15],i[3][i[17]].format)+"")&&U(n,l),a&64&&B(e,"width",i[6]+"%"),a&40&&s!==(s=ue(i[15],i[3][i[17]].format))&&m(e,"title",s)},d(i){i&&h(e)}}}function nl(r){let e,t=ue(r[15],r[3][r[17]].format,r[3][r[17]].columnUnitSummary)+"",l;return{c(){e=k("td"),l=I(t),this.h()},l(n){e=w(n,"TD",{class:!0,style:!0});var s=b(e);l=q(s,t),s.forEach(h),this.h()},h(){m(e,"class","number svelte-1g7od2s"),B(e,"width",r[6]+"%")},m(n,s){C(n,e,s),p(e,l)},p(n,s){s&40&&t!==(t=ue(n[15],n[3][n[17]].format,n[3][n[17]].columnUnitSummary)+"")&&U(l,t),s&64&&B(e,"width",n[6]+"%")},d(n){n&&h(e)}}}function rl(r){let e,t="\xD8",l,n;return{c(){e=k("td"),l=I(t),this.h()},l(s){e=w(s,"TD",{class:!0,style:!0});var i=b(e);l=q(i,t),i.forEach(h),this.h()},h(){m(e,"class",n="null "+r[3][r[17]].type+" svelte-1g7od2s"),B(e,"width",r[6]+"%")},m(s,i){C(s,e,i),p(e,l)},p(s,i){i&8&&n!==(n="null "+s[3][s[17]].type+" svelte-1g7od2s")&&m(e,"class",n),i&64&&B(e,"width",s[6]+"%")},d(s){s&&h(e)}}}function Xe(r){let e;function t(s,i){return s[15]==null?rl:s[3][s[17]].type==="number"?nl:s[3][s[17]].type==="date"?ll:s[3][s[17]].type==="string"?tl:s[3][s[17]].type==="boolean"?el:xt}let l=t(r),n=l(r);return{c(){n.c(),e=ce()},l(s){n.l(s),e=ce()},m(s,i){n.m(s,i),C(s,e,i)},p(s,i){l===(l=t(s))&&n?n.p(s,i):(n.d(1),n=l(s),n&&(n.c(),n.m(e.parentNode,e)))},d(s){n.d(s),s&&h(e)}}}function Ge(r){let e,t,l,n;function s(u,c){return u[14]===0?$t:Zt}let a=s(r)(r),o=Object.values(r[12]),f=[];for(let u=0;u<o.length;u+=1)f[u]=Xe(Fe(r,o,u));return{c(){e=k("tr"),t=k("td"),a.c(),l=Q();for(let u=0;u<f.length;u+=1)f[u].c();n=Q(),this.h()},l(u){e=w(u,"TR",{});var c=b(e);t=w(c,"TD",{class:!0,style:!0});var d=b(t);a.l(d),d.forEach(h),l=R(c);for(let g=0;g<f.length;g+=1)f[g].l(c);n=R(c),c.forEach(h),this.h()},h(){m(t,"class","index svelte-1g7od2s"),B(t,"width","10%")},m(u,c){C(u,e,c),p(e,t),a.m(t,null),p(e,l);for(let d=0;d<f.length;d+=1)f[d].m(e,null);p(e,n)},p(u,c){if(a.p(u,c),c&104){o=Object.values(u[12]);let d;for(d=0;d<o.length;d+=1){const g=Fe(u,o,d);f[d]?f[d].p(g,c):(f[d]=Xe(g),f[d].c(),f[d].m(e,n))}for(;d<f.length;d+=1)f[d].d(1);f.length=o.length}},d(u){u&&h(e),a.d(),we(f,u)}}}function Je(r){let e,t,l,n,s=(r[2]+he).toLocaleString()+"",i,a,o=(r[4]+he).toLocaleString()+"",f,u,c;return{c(){e=k("div"),t=k("input"),l=Q(),n=k("span"),i=I(s),a=I(" of "),f=I(o),this.h()},l(d){e=w(d,"DIV",{class:!0});var g=b(e);t=w(g,"INPUT",{type:!0,max:!0,step:!0,class:!0}),l=R(g),n=w(g,"SPAN",{style:!0,class:!0});var y=b(n);i=q(y,s),a=q(y," of "),f=q(y,o),y.forEach(h),g.forEach(h),this.h()},h(){m(t,"type","range"),m(t,"max",r[4]),m(t,"step","1"),m(t,"class","slider svelte-1g7od2s"),B(n,"padding-top","1px"),m(n,"class","svelte-1g7od2s"),m(e,"class","pagination svelte-1g7od2s")},m(d,g){C(d,e,g),p(e,t),je(t,r[2]),p(e,l),p(e,n),p(n,i),p(n,a),p(n,f),u||(c=[le(t,"change",r[9]),le(t,"input",r[9]),le(t,"input",r[7])],u=!0)},p(d,g){g&16&&m(t,"max",d[4]),g&4&&je(t,d[2]),g&4&&s!==(s=(d[2]+he).toLocaleString()+"")&&U(i,s),g&16&&o!==(o=(d[4]+he).toLocaleString()+"")&&U(f,o)},d(d){d&&h(e),u=!1,lt(c)}}}function sl(r){let e,t,l,n,s,i,a,o,f,u,c,d,g,y,_,D,P,ee,j,L,J,z,S,A,E,O,W=r[3],M=[];for(let v=0;v<W.length;v+=1)M[v]=Ye(We(r,W,v));let te=r[3],Y=[];for(let v=0;v<te.length;v+=1)Y[v]=Ke(He(r,te,v));let me=r[5],K=[];for(let v=0;v<me.length;v+=1)K[v]=Ge(ze(r,me,v));let X=r[4]>0&&Je(r);return z=new Jt({props:{class:"download-button",data:r[1],queryID:r[0],display:!0}}),{c(){e=k("div"),t=k("div"),l=k("table"),n=k("thead"),s=k("tr"),i=k("th"),a=Q();for(let v=0;v<M.length;v+=1)M[v].c();o=Q(),f=k("tr"),u=Q(),c=k("tr"),d=k("th"),g=Q();for(let v=0;v<Y.length;v+=1)Y[v].c();y=Q(),_=k("tr"),D=Q(),P=k("tbody");for(let v=0;v<K.length;v+=1)K[v].c();j=Q(),X&&X.c(),L=Q(),J=k("div"),ne(z.$$.fragment),this.h()},l(v){e=w(v,"DIV",{class:!0});var F=b(e);t=w(F,"DIV",{class:!0});var H=b(t);l=w(H,"TABLE",{class:!0});var T=b(l);n=w(T,"THEAD",{});var G=b(n);s=w(G,"TR",{});var be=b(s);i=w(be,"TH",{class:!0,style:!0}),b(i).forEach(h),a=R(be);for(let $=0;$<M.length;$+=1)M[$].l(be);o=R(be),be.forEach(h),f=w(G,"TR",{}),b(f).forEach(h),u=R(G),c=w(G,"TR",{class:!0});var ye=b(c);d=w(ye,"TH",{class:!0,style:!0}),b(d).forEach(h),g=R(ye);for(let $=0;$<Y.length;$+=1)Y[$].l(ye);y=R(ye),ye.forEach(h),_=w(G,"TR",{}),b(_).forEach(h),G.forEach(h),D=R(T),P=w(T,"TBODY",{});var De=b(P);for(let $=0;$<K.length;$+=1)K[$].l(De);De.forEach(h),T.forEach(h),H.forEach(h),j=R(F),X&&X.l(F),L=R(F),J=w(F,"DIV",{class:!0});var Se=b(J);re(z.$$.fragment,Se),Se.forEach(h),F.forEach(h),this.h()},h(){m(i,"class","index svelte-1g7od2s"),B(i,"width","10%"),m(d,"class","index type-indicator svelte-1g7od2s"),B(d,"width","10%"),m(c,"class","type-indicator svelte-1g7od2s"),m(l,"class","svelte-1g7od2s"),m(t,"class","container svelte-1g7od2s"),m(J,"class","footer svelte-1g7od2s"),m(e,"class","results-pane svelte-1g7od2s")},m(v,F){C(v,e,F),p(e,t),p(t,l),p(l,n),p(n,s),p(s,i),p(s,a);for(let H=0;H<M.length;H+=1)M[H].m(s,null);p(s,o),p(n,f),p(n,u),p(n,c),p(c,d),p(c,g);for(let H=0;H<Y.length;H+=1)Y[H].m(c,null);p(c,y),p(n,_),p(l,D),p(l,P);for(let H=0;H<K.length;H+=1)K[H].m(P,null);p(e,j),X&&X.m(e,null),p(e,L),p(e,J),se(z,J,null),A=!0,E||(O=le(P,"wheel",r[8]),E=!0)},p(v,[F]){if(F&72){W=v[3];let T;for(T=0;T<W.length;T+=1){const G=We(v,W,T);M[T]?M[T].p(G,F):(M[T]=Ye(G),M[T].c(),M[T].m(s,o))}for(;T<M.length;T+=1)M[T].d(1);M.length=W.length}if(F&72){te=v[3];let T;for(T=0;T<te.length;T+=1){const G=He(v,te,T);Y[T]?Y[T].p(G,F):(Y[T]=Ke(G),Y[T].c(),Y[T].m(c,y))}for(;T<Y.length;T+=1)Y[T].d(1);Y.length=te.length}if(F&108){me=v[5];let T;for(T=0;T<me.length;T+=1){const G=ze(v,me,T);K[T]?K[T].p(G,F):(K[T]=Ge(G),K[T].c(),K[T].m(P,null))}for(;T<K.length;T+=1)K[T].d(1);K.length=me.length}v[4]>0?X?X.p(v,F):(X=Je(v),X.c(),X.m(e,L)):X&&(X.d(1),X=null);const H={};F&2&&(H.data=v[1]),F&1&&(H.queryID=v[0]),z.$set(H)},i(v){A||(ee||_e(()=>{ee=tt(l,it,{}),ee.start()}),N(z.$$.fragment,v),v&&_e(()=>{S||(S=x(e,de,{},!0)),S.run(1)}),A=!0)},o(v){V(z.$$.fragment,v),v&&(S||(S=x(e,de,{},!1)),S.run(0)),A=!1},d(v){v&&h(e),we(M,v),we(Y,v),we(K,v),X&&X.d(),ie(z),v&&S&&S.end(),E=!1,O()}}}let he=5;function il(r,e,t){let l,n,s,i,{queryID:a}=e,{data:o}=e,f=0,u;function c(){u=o.slice(f,f+he),t(5,i=u)}const d=St(_=>{t(2,f=Math.min(Math.max(0,f+Math.floor(_.deltaY/Math.abs(_.deltaY))),s)),c()},60);function g(_){if(Math.abs(_.deltaX)>Math.abs(_.deltaY))return;const D=_.deltaY<0&&f===0,P=_.deltaY>0&&f===s;D||P||(_.preventDefault(),d(_))}function y(){f=vt(this.value),t(2,f)}return r.$$set=_=>{"queryID"in _&&t(0,a=_.queryID),"data"in _&&t(1,o=_.data)},r.$$.update=()=>{r.$$.dirty&2&&t(3,l=ct(o,"array")),r.$$.dirty&8&&t(6,n=90/(l.length+1)),r.$$.dirty&2&&t(4,s=Math.max(o.length-he,0)),r.$$.dirty&6&&t(5,i=o.slice(f,f+he))},[a,o,f,l,s,i,n,c,g,y]}class ol extends pe{constructor(e){super(),ge(this,e,il,sl,ve,{queryID:0,data:1})}}function al(r){let e,t,l,n,s,i,a;return{c(){e=k("button"),t=I("Compiled"),l=Q(),n=k("button"),s=I("Written"),this.h()},l(o){e=w(o,"BUTTON",{class:!0});var f=b(e);t=q(f,"Compiled"),f.forEach(h),l=R(o),n=w(o,"BUTTON",{class:!0});var u=b(n);s=q(u,"Written"),u.forEach(h),this.h()},h(){m(e,"class","off svelte-w316q2"),m(n,"class","on svelte-w316q2")},m(o,f){C(o,e,f),p(e,t),C(o,l,f),C(o,n,f),p(n,s),i||(a=le(e,"click",r[1]),i=!0)},p:Z,d(o){o&&h(e),o&&h(l),o&&h(n),i=!1,a()}}}function ul(r){let e,t,l,n,s,i,a;return{c(){e=k("button"),t=I("Compiled"),l=Q(),n=k("button"),s=I("Written"),this.h()},l(o){e=w(o,"BUTTON",{class:!0});var f=b(e);t=q(f,"Compiled"),f.forEach(h),l=R(o),n=w(o,"BUTTON",{class:!0});var u=b(n);s=q(u,"Written"),u.forEach(h),this.h()},h(){m(e,"class","on svelte-w316q2"),m(n,"class","off svelte-w316q2")},m(o,f){C(o,e,f),p(e,t),C(o,l,f),C(o,n,f),p(n,s),i||(a=le(n,"click",r[1]),i=!0)},p:Z,d(o){o&&h(e),o&&h(l),o&&h(n),i=!1,a()}}}function fl(r){let e,t,l;function n(a,o){return a[0]?ul:al}let s=n(r),i=s(r);return{c(){e=k("div"),i.c(),this.h()},l(a){e=w(a,"DIV",{class:!0});var o=b(e);i.l(o),o.forEach(h),this.h()},h(){m(e,"class","toggle svelte-w316q2")},m(a,o){C(a,e,o),i.m(e,null),l=!0},p(a,[o]){s===(s=n(a))&&i?i.p(a,o):(i.d(1),i=s(a),i&&(i.c(),i.m(e,null)))},i(a){l||(a&&_e(()=>{t||(t=x(e,de,{},!0)),t.run(1)}),l=!0)},o(a){a&&(t||(t=x(e,de,{},!1)),t.run(0)),l=!1},d(a){a&&h(e),i.d(),a&&t&&t.end()}}}function cl(r,e,t){let{showCompiled:l}=e;const n=function(){t(0,l=!l)};return r.$$set=s=>{"showCompiled"in s&&t(0,l=s.showCompiled)},[l,n]}class dl extends pe{constructor(e){super(),ge(this,e,cl,fl,ve,{showCompiled:0})}}function Ze(r){let e,t,l,n,s,i,a,o,f,u,c,d,g,y,_,D,P,ee;n=new rt({props:{toggled:r[11]}});let j=r[11]&&r[6]&&$e(r),L=r[11]&&xe(r);const J=[gl,pl,ml],z=[];function S(E,O){return E[4]?0:E[5]>0?1:2}c=S(r),d=z[c]=J[c](r);let A=r[1].length>0&&!r[4]&&r[10]&&et(r);return{c(){e=k("div"),t=k("div"),l=k("button"),ne(n.$$.fragment),s=Q(),i=I(r[0]),a=Q(),j&&j.c(),o=Q(),L&&L.c(),f=Q(),u=k("button"),d.c(),y=Q(),A&&A.c(),this.h()},l(E){e=w(E,"DIV",{class:!0});var O=b(e);t=w(O,"DIV",{class:!0});var W=b(t);l=w(W,"BUTTON",{type:!0,class:!0});var M=b(l);re(n.$$.fragment,M),s=R(M),i=q(M,r[0]),M.forEach(h),a=R(W),j&&j.l(W),o=R(W),L&&L.l(W),W.forEach(h),f=R(O),u=w(O,"BUTTON",{type:!0,class:!0});var te=b(u);d.l(te),te.forEach(h),y=R(O),A&&A.l(O),O.forEach(h),this.h()},h(){m(l,"type","button"),m(l,"class","title svelte-k8o1d9"),m(t,"class","container-a svelte-k8o1d9"),m(u,"type","button"),m(u,"class",g=fe("status-bar"+(r[4]?" error":" success")+(r[10]?" open":" closed"))+" svelte-k8o1d9"),m(e,"class","container svelte-k8o1d9")},m(E,O){C(E,e,O),p(e,t),p(t,l),se(n,l,null),p(l,s),p(l,i),p(t,a),j&&j.m(t,null),p(t,o),L&&L.m(t,null),p(e,f),p(e,u),z[c].m(u,null),p(e,y),A&&A.m(e,null),D=!0,P||(ee=[le(l,"click",r[14]),le(u,"click",r[15])],P=!0)},p(E,O){const W={};O&2048&&(W.toggled=E[11]),n.$set(W),(!D||O&1)&&U(i,E[0]),E[11]&&E[6]?j?(j.p(E,O),O&2112&&N(j,1)):(j=$e(E),j.c(),N(j,1),j.m(t,o)):j&&(oe(),V(j,1,1,()=>{j=null}),ae()),E[11]?L?(L.p(E,O),O&2048&&N(L,1)):(L=xe(E),L.c(),N(L,1),L.m(t,null)):L&&(oe(),V(L,1,1,()=>{L=null}),ae());let M=c;c=S(E),c===M?z[c].p(E,O):(oe(),V(z[M],1,1,()=>{z[M]=null}),ae(),d=z[c],d?d.p(E,O):(d=z[c]=J[c](E),d.c()),N(d,1),d.m(u,null)),(!D||O&1040&&g!==(g=fe("status-bar"+(E[4]?" error":" success")+(E[10]?" open":" closed"))+" svelte-k8o1d9"))&&m(u,"class",g),E[1].length>0&&!E[4]&&E[10]?A?(A.p(E,O),O&1042&&N(A,1)):(A=et(E),A.c(),N(A,1),A.m(e,null)):A&&(oe(),V(A,1,1,()=>{A=null}),ae())},i(E){D||(N(n.$$.fragment,E),N(j),N(L),N(d),N(A),E&&_e(()=>{_||(_=x(e,de,{},!0)),_.run(1)}),D=!0)},o(E){V(n.$$.fragment,E),V(j),V(L),V(d),V(A),E&&(_||(_=x(e,de,{},!1)),_.run(0)),D=!1},d(E){E&&h(e),ie(n),j&&j.d(),L&&L.d(),z[c].d(),A&&A.d(),E&&_&&_.end(),P=!1,lt(ee)}}}function $e(r){let e,t,l;function n(i){r[19](i)}let s={};return r[7]!==void 0&&(s.showCompiled=r[7]),e=new dl({props:s}),bt.push(()=>yt(e,"showCompiled",n)),{c(){ne(e.$$.fragment)},l(i){re(e.$$.fragment,i)},m(i,a){se(e,i,a),l=!0},p(i,a){const o={};!t&&a&128&&(t=!0,o.showCompiled=i[7],kt(()=>t=!1)),e.$set(o)},i(i){l||(N(e.$$.fragment,i),l=!0)},o(i){V(e.$$.fragment,i),l=!1},d(i){ie(e,i)}}}function xe(r){let e,t,l,n,s,i;const a=[_l,hl],o=[];function f(u,c){return u[7]?0:1}return t=f(r),l=o[t]=a[t](r),{c(){e=k("div"),l.c(),this.h()},l(u){e=w(u,"DIV",{class:!0,style:!0});var c=b(e);l.l(c),c.forEach(h),this.h()},h(){m(e,"class","code-container svelte-k8o1d9"),m(e,"style",n=`height: ${r[8]}em;`)},m(u,c){C(u,e,c),o[t].m(e,null),i=!0},p(u,c){let d=t;t=f(u),t===d?o[t].p(u,c):(oe(),V(o[d],1,1,()=>{o[d]=null}),ae(),l=o[t],l?l.p(u,c):(l=o[t]=a[t](u),l.c()),N(l,1),l.m(e,null)),(!i||c&256&&n!==(n=`height: ${u[8]}em;`))&&m(e,"style",n)},i(u){i||(N(l),u&&_e(()=>{s||(s=x(e,de,{},!0)),s.run(1)}),i=!0)},o(u){V(l),u&&(s||(s=x(e,de,{},!1)),s.run(0)),i=!1},d(u){u&&h(e),o[t].d(),u&&s&&s.end()}}}function hl(r){let e,t;return e=new st({props:{code:r[2]}}),{c(){ne(e.$$.fragment)},l(l){re(e.$$.fragment,l)},m(l,n){se(e,l,n),t=!0},p(l,n){const s={};n&4&&(s.code=l[2]),e.$set(s)},i(l){t||(N(e.$$.fragment,l),t=!0)},o(l){V(e.$$.fragment,l),t=!1},d(l){ie(e,l)}}}function _l(r){let e,t;return e=new st({props:{code:r[3]}}),{c(){ne(e.$$.fragment)},l(l){re(e.$$.fragment,l)},m(l,n){se(e,l,n),t=!0},p(l,n){const s={};n&8&&(s.code=l[3]),e.$set(s)},i(l){t||(N(e.$$.fragment,l),t=!0)},o(l){V(e.$$.fragment,l),t=!1},d(l){ie(e,l)}}}function ml(r){let e;return{c(){e=I("ran successfully but no data was returned")},l(t){e=q(t,"ran successfully but no data was returned")},m(t,l){C(t,e,l)},p:Z,i:Z,o:Z,d(t){t&&h(e)}}}function pl(r){let e,t,l=r[5].toLocaleString()+"",n,s,i=r[5]>1?"records":"record",a,o,f=r[9].toLocaleString()+"",u,c,d=r[9]>1?"properties":"property",g,y;return e=new rt({props:{toggled:r[10],color:"#3488e9"}}),{c(){ne(e.$$.fragment),t=Q(),n=I(l),s=Q(),a=I(i),o=I(" with "),u=I(f),c=Q(),g=I(d)},l(_){re(e.$$.fragment,_),t=R(_),n=q(_,l),s=R(_),a=q(_,i),o=q(_," with "),u=q(_,f),c=R(_),g=q(_,d)},m(_,D){se(e,_,D),C(_,t,D),C(_,n,D),C(_,s,D),C(_,a,D),C(_,o,D),C(_,u,D),C(_,c,D),C(_,g,D),y=!0},p(_,D){const P={};D&1024&&(P.toggled=_[10]),e.$set(P),(!y||D&32)&&l!==(l=_[5].toLocaleString()+"")&&U(n,l),(!y||D&32)&&i!==(i=_[5]>1?"records":"record")&&U(a,i),(!y||D&512)&&f!==(f=_[9].toLocaleString()+"")&&U(u,f),(!y||D&512)&&d!==(d=_[9]>1?"properties":"property")&&U(g,d)},i(_){y||(N(e.$$.fragment,_),y=!0)},o(_){V(e.$$.fragment,_),y=!1},d(_){ie(e,_),_&&h(t),_&&h(n),_&&h(s),_&&h(a),_&&h(o),_&&h(u),_&&h(c),_&&h(g)}}}function gl(r){let e;function t(s,i){return vl}let l=t(),n=l(r);return{c(){n.c(),e=ce()},l(s){n.l(s),e=ce()},m(s,i){n.m(s,i),C(s,e,i)},p(s,i){l===(l=t())&&n?n.p(s,i):(n.d(1),n=l(s),n&&(n.c(),n.m(e.parentNode,e)))},i:Z,o:Z,d(s){n.d(s),s&&h(e)}}}function vl(r){let e=r[4].message+"",t;return{c(){t=I(e)},l(l){t=q(l,e)},m(l,n){C(l,t,n)},p(l,n){n&16&&e!==(e=l[4].message+"")&&U(t,e)},d(l){l&&h(t)}}}function et(r){let e,t;return e=new ol({props:{data:r[1],queryID:r[0]}}),{c(){ne(e.$$.fragment)},l(l){re(e.$$.fragment,l)},m(l,n){se(e,l,n),t=!0},p(l,n){const s={};n&2&&(s.data=l[1]),n&1&&(s.queryID=l[0]),e.$set(s)},i(l){t||(N(e.$$.fragment,l),t=!0)},o(l){V(e.$$.fragment,l),t=!1},d(l){ie(e,l)}}}function bl(r){let e,t,l,n=r[12]&&Ze(r);return{c(){e=k("div"),n&&n.c()},l(s){e=w(s,"DIV",{});var i=b(e);n&&n.l(i),i.forEach(h)},m(s,i){C(s,e,i),n&&n.m(e,null),l=!0},p(s,[i]){s[12]?n?(n.p(s,i),i&4096&&N(n,1)):(n=Ze(s),n.c(),N(n,1),n.m(e,null)):n&&(oe(),V(n,1,1,()=>{n=null}),ae())},i(s){l||(N(n),s&&(t||_e(()=>{t=tt(e,it,{}),t.start()})),l=!0)},o(s){V(n),l=!1},d(s){s&&h(e),n&&n.d()}}}function yl(r,e,t){let l,n,s;Te(r,qt,S=>t(12,s=S));let{queryID:i}=e,{pageQueries:a}=e,{queryResult:o}=e,f=Oe(localStorage.getItem("showSQL_".concat(i))==="true"||!1);Te(r,f,S=>t(11,n=S)),f.subscribe(S=>localStorage.setItem("showSQL_".concat(i),S));const u=function(){Ae(f,n=!n,n)},c=function(){!j&&L>0&&Ae(d,l=!l,l)};let d=Oe(localStorage.getItem("showResults_".concat(i))==="true"||!1);Te(r,d,S=>t(10,l=S)),d.subscribe(S=>localStorage.setItem("showResults_".concat(i),S));let g,y,_,D,P=!0,ee,j,L,J;function z(S){P=S,t(7,P)}return r.$$set=S=>{"queryID"in S&&t(0,i=S.queryID),"pageQueries"in S&&t(17,a=S.pageQueries),"queryResult"in S&&t(1,o=S.queryResult)},r.$$.update=()=>{var S,A;r.$$.dirty&393279&&(t(18,g=a.filter(E=>E.id===i)),t(2,y=g[0].inputQueryString),t(3,_=g[0].compiledQueryString),t(6,D=g[0].compiled&&g[0].compileError===void 0),t(8,ee=Math.min(Math.max(_.split(/\r\n|\r|\n/).length,y.split(/\r\n|\r|\n/).length)*1.5+1,30)),t(4,j=(A=(S=o[0])==null?void 0:S.error_object)==null?void 0:A.error),t(5,L=null),t(9,J=null),j||(t(5,L=o.length),L>0&&t(9,J=Object.keys(o[0]).length)))},[i,o,y,_,j,L,D,P,ee,J,l,n,s,f,u,c,d,a,g,z]}class jl extends pe{constructor(e){super(),ge(this,e,yl,bl,ve,{queryID:0,pageQueries:17,queryResult:1})}}export{Jt as D,jl as Q,Nl as V,ql as a,Il as b,Qt as c,Ue as f,ct as g,Ll as p,Bt as s};
