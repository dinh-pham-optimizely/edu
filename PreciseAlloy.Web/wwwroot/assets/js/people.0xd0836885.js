import{j as l,a as s}from"./react-loader.0xbbdcfe13.js";import{r as h}from"./vendor.0x2c817467.js";import{g as d}from"./functions.0xb841f5f3.js";import{R as m}from"./require-css.0xec77fb14.js";const p=t=>{const{sources:e,src:n,alt:a,width:r,height:o,lazy:c=!0}=t;return l("picture",{className:d(t,"zzz-a-picture"),children:[e==null?void 0:e.map((i,z)=>s("source",{media:i.media,srcSet:i.srcSet},z)),s("img",{src:n,alt:a,loading:c?"lazy":void 0,width:r,height:o})]})},u=t=>{const{image:e,name:n,jobTitle:a}=t;return l("div",{className:"zzz-o-avatar",children:[s("div",{className:"zzz-o-avatar__image",children:s(p,{...e})}),l("div",{className:"zzz-o-avatar__info",children:[s("h3",{className:"zzz-o-avatar__name h4",children:n}),s("div",{className:"zzz-o-avatar__job-title",children:a})]}),s(m,{path:"b-avatar"})]})},_=t=>{const{href:e,link:n,text:a,type:r,target:o}=t,c=d(t,"zzz-a-button");return n?s("a",{href:e,className:c,target:o,children:a}):s("button",{type:r,className:c,children:a})},f=(t,e)=>{const n={}.VITE_APP_API_URL??window.location.origin,a=new URL(t,n);return e&&Object.keys(e).forEach(r=>{e[r]!==void 0&&a.searchParams.append(r,typeof e[r]=="boolean"?e[r].toString():e[r])}),a},v=async(t,e,n,a,r)=>{try{const o=f(t,n),c={method:e};return a&&(c.body=JSON.stringify(a),c.headers={"Content-Type":"application/json"}),r?fetch(o,c):fetch(o,c).then(i=>i.json())}catch(o){return Promise.reject({error:o})}},g=async(t,e)=>v(t,"GET",e),N="/api/avatar",b=()=>g(N),P=t=>{const{subHeader:e,header:n,text:a,button:r}=t,[o,c]=h.useState([]);return h.useEffect(()=>{b().then(i=>{c(i)}).catch(console.error)},[]),l("section",{className:"zzz-o-people section-margin-top-xl",children:[l("div",{className:"zzz-o-people__content",children:[e&&s("h3",{className:"zzz-o-people__sub-header",children:e}),n&&s("h2",{className:"zzz-o-people__header h1",children:n}),a&&s("div",{className:"zzz-o-people__text",dangerouslySetInnerHTML:{__html:a}})]}),o&&o.length&&s("div",{className:"zzz-o-people__items",children:o.map((i,z)=>h.createElement(u,{...i,key:z}))}),r&&s(_,{...r})]})};export{P as default};
//# sourceMappingURL=people.0xd0836885.js.map
