"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[9744],{45773:(e,t,n)=>{n.d(t,{w:()=>g});var a=n(59496),s=n(84875),r=n.n(s),i=n(4417),c=n.n(i),l=n(51005),o=n(93493);const d=/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g;var h=n(91608),m=n(4637);const u=/((?:(?:https?:\/\/)|www\.)(?:(?:(?:[a-z\u00a1-\uffff0-9][-_]*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?:[/?#][^\s"]*)?)/gi,p=/^https?:\/\//;function f(e){return"string"==typeof e?(0,m.jsx)(m.Fragment,{children:e.split(u).map(((e,t)=>t%2?(0,m.jsx)(h.Link,{to:`${p.test(e)?"":"https://"}${e}`,children:e},t):e))}):e}const x="playlist-playlist-heading",v="playlist-playlist-playlistDescription",N="playlist-playlist-list",C="playlist-playlist-listItem",I="playlist-playlist-paragraph",g=a.memo((function({html:e,onTimeStampClick:t,enableTimestamps:n=!1,enableAutomaticLinkification:s=!1,semanticColor:i="textSubdued",className:l}){const o=(0,a.useMemo)((()=>{const a=n?e.split(d).map((e=>e.match(d)?`(<time>${e.replace("(","").replace(")","")}</time>)`:e)).join(""):e;let r;try{r=c()(a,{transform:j(t,i,s),dangerouslySetChildren:[]})}catch{r=e}return r}),[n,s,e,t,i]);return(0,m.jsx)("div",{className:r()(v,l),children:o})}));function j(e,t,n){let s=0;return{p:e=>(0,m.jsx)(l.D,{as:"p",variant:"ballad",semanticColor:t,className:I,children:n?f(e.children):e.children}),a:t=>t.href?.startsWith("#t=")?(0,m.jsx)(o.E,{onClick:e,children:t.children}):t.href?(0,m.jsx)(h.Link,{to:t.href,children:t.children}):(0,m.jsx)(m.Fragment,{children:t.children}),ul:e=>(0,m.jsx)("ul",{className:N,children:e.children}),ol:e=>(0,m.jsx)("ol",{className:N,children:e.children}),li:e=>(0,m.jsx)(l.D,{as:"li",variant:"ballad",semanticColor:t,className:C,children:n?f(e.children):e.children}),br:()=>(0,m.jsx)("br",{}),h1:e=>(0,m.jsx)(l.D,{as:"h1",variant:"balladBold",semanticColor:t,className:x,children:e.children}),h2:e=>(0,m.jsx)(l.D,{as:"h2",variant:"balladBold",semanticColor:t,className:x,children:e.children}),h3:e=>(0,m.jsx)(l.D,{as:"h3",variant:"balladBold",semanticColor:t,className:x,children:e.children}),h4:e=>(0,m.jsx)(l.D,{as:"h4",variant:"balladBold",semanticColor:t,className:x,children:e.children}),h5:e=>(0,m.jsx)(l.D,{as:"h5",variant:"balladBold",semanticColor:t,className:x,children:e.children}),h6:e=>(0,m.jsx)(l.D,{as:"h6",variant:"balladBold",semanticColor:t,className:x,children:e.children}),time:t=>(0,m.jsx)(o.E,{onClick:e,children:t.children}),_:(e,t,r)=>{const i=void 0===t?e:r;return(0,m.jsx)(a.Fragment,{children:n?f(i):i},"fragment"+s++)}}}},25143:(e,t,n)=>{n.d(t,{qj:()=>Q,GA:()=>h});var a=n(55411),s=n(13841),r=n(74834),i=n(53339),c=n(95498),l=n(69511),o=n(3893),d=n(15107);const h=(e,t)=>{const n=(0,s.TH)(),h=(0,r.W6)(o.d_6),m=(0,i.vI)(c.k.GenerativeAIContent,n),u="track"===t?d.a:d.M,p=(0,a.v9)(u);return(0,l.$S)(p,e)||h===o.U0E.VARIANT||m};var m=n(59496),u=n(6974),p=n(16668),f=n(4496),x=n(65638);function v(e,t,n){try{(0,p.sQ)({metric_type:u.MetricTypes.COUNTER,what:"request-rate",value:1,tags:{endpoint:e,statusCode:t,isFatal:n}}).catch((()=>({})))}catch(e){}}class N extends x.c{build(){const e=super.build();return e.onAfterSend=t=>{let n="unknown",a=!1;if(null!==e.endpointIdentifier&&(a=!0,n=`${e.method} ${e.hostIdentifier||"unknown-host"}::${e.endpointIdentifier}`),t)throw a&&v(n,JSON.stringify(t.status||0),JSON.stringify(0===(e.endpointIdentifier||"").indexOf("/me"))),f.m.fromResponse(t,e.method);if(a){v(n,"200","false");const t=Date.now()-(e.startTimestamp||0);!function(e,t,n){try{(0,p.sQ)({metric_type:u.MetricTypes.TIMER,what:"request-duration",value:n,tags:{endpoint:e,statusCode:t}}).catch((()=>({})))}catch(e){}}(n,"200",u.Time.fromMillis(t).asNanos())}},e}}var C=n(43616);let I=null;class g{static setSession(e){if(!e)return;const{accessToken:t}=e,n=this.getInstance();n.accessToken=t,t||n.resetPendingRequests()}static setLocale(e){this.getInstance().locale=e}static setMarket(e){this.getInstance().market=e}static resetInstance(){I=null}static getInstance(){return I||(I=this.createNew()),I}static createNew(){return new N(C.e)}}var j=n(58943);const k=e=>(0,m.useCallback)((async()=>j.Wy.getGeneratedContent(g.getInstance(),e).then((e=>e.body.content))),[e]);var b=n(51005),T=n(99302),y=n(21612);const A="expandable-description-for-seo";var R=n(84875),E=n.n(R);const O={"#":"h2","##":"h3","###":"h4","####":"h5","#####":"h6","######":"h6"},w=e=>e.split("\n").filter(Boolean).map((e=>{const t=(e=>{if(!e.startsWith("#"))return;const t=Object.keys(O).find((t=>{const n=t.length,a=new RegExp(`^#{${n}}(?!#)`);return e.match(a)}));if(t){const n=O[t];return`<${n}>${e.replace(`${t} `,"")}</${n}>`}})(e);return{htmlLine:t??`<p>${e}</p>`,isHeader:void 0!==t}}));var M=n(45773);const L="kJFJjpbeZmhT7WG2KjAM",D="gPrYeH86UvcjOx_NQYwp",_="Zf6ONkng2h6eGJg9d4l_",S="dvKxmtfViMbQHGD2OUYz",B="LzDWAa70LpBOSMc_ATzA",$="Z5EIr8RoSgmXMt0y9VsS";var P=n(4637);const G=({open:e,content:t,maxCharacters:n})=>{const a=(0,m.useMemo)((()=>t.slice(n)),[t,n]),s=(0,m.useMemo)((()=>a.indexOf(".")+1),[a]),r=(0,m.useMemo)((()=>a.slice(0,s)),[a,s]),i=(0,m.useMemo)((()=>t.slice(n+s)),[t,s,n]),c=(0,m.useMemo)((()=>t.slice(0,n)+r),[t,r,n]),l=(0,m.useCallback)((e=>w(e).map((({htmlLine:e,isHeader:t})=>(0,P.jsx)(M.w,{html:e,semanticColor:t?"textBase":"textSubdued",onTimeStampClick:()=>{}},e)))),[]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:D,children:l(c)}),(0,P.jsx)("div",{className:E()(S,{[B]:e}),"aria-hidden":!e,children:l(i)})]})},V=({open:e,handleClick:t})=>(0,P.jsx)("button",{className:_,onClick:t,"aria-controls":A,"aria-owns":A,children:(0,P.jsx)(b.D,{variant:"balladBold",className:$,children:e?T.ag.get("show_less"):`…${T.ag.get("show_more")}`})}),U=m.memo((function({content:e}){const[t,n]=(0,m.useState)(!1),[a,s]=(0,m.useState)(420),r=(0,m.useCallback)((()=>{window.innerWidth<=768?s(280):window.innerWidth>768&&280===a&&s(420)}),[a]);(0,m.useEffect)((()=>{r()}),[r]),(0,y.a)(r);return e.length<=a?(0,P.jsx)("div",{className:L,children:(0,P.jsx)("div",{className:D,children:(0,P.jsx)(b.D,{as:"p",semanticColor:"textSubdued",variant:"ballad",children:e})})}):(0,P.jsxs)("div",{className:L,"aria-expanded":t,id:A,children:[(0,P.jsx)(G,{open:t,content:e,maxCharacters:a}),(0,P.jsx)(V,{open:t,handleClick:()=>{n(!t)}})]})})),z="QoqWMT7XTnQGGR9Dz8yQ",K="I9Th3FY81SkL9vLeUDL8",Q=({title:e,uri:t})=>{const[n,a]=(0,m.useState)(""),s=k(t);return(0,m.useEffect)((()=>{!async function(){try{const e=await s();a(e)}catch(e){}}()}),[s]),n?(0,P.jsxs)("div",{className:z,children:[(0,P.jsx)(b.D,{variant:"mesto",className:K,as:"p",children:T.ag.get("generative-ai.disclaimer")}),(0,P.jsx)(b.D,{variant:"canon",as:"h1",semanticColor:"textBase",children:e}),(0,P.jsx)(U,{content:n})]}):null}},15107:(e,t,n)=>{n.d(t,{M:()=>c,a:()=>i});var a=n(23055),s=n(55993);const r=e=>e.seoExperiment,i=(0,a.P1)(r,(e=>e?.[s.p.TRACK])),c=(0,a.P1)(r,(e=>e?.[s.p.ALBUM]))},19929:(e,t,n)=>{n.d(t,{k:()=>i});var a=n(51005);const s="rTMkDBDp47Eo12ZEQv4U";var r=n(4637);const i=({copyrights:e,courtesyLine:t})=>{const n=(e||[]).map(((e,t)=>{const n=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let s;return s="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,r.jsx)(a.D,{as:"p",variant:"finale",dir:"auto",children:`${s} ${n}`},t)}));return t&&n.unshift((0,r.jsx)(a.D,{as:"p",variant:"finale",dir:"auto",children:t},n.length)),(0,r.jsx)("div",{className:s,children:n})}},53339:(e,t,n)=>{n.d(t,{vI:()=>a});const a=(e,t)=>{const n=t?new URLSearchParams(t.search):void 0;return"1"===n?.get(e)}},95498:(e,t,n)=>{n.d(t,{k:()=>a});let a=function(e){return e.I18nSEO="i18nSEO",e.RTPTrackCredits="rtpv2p2",e.BlendParty="bp",e.BlendPartyV2="bpv2",e.I18nAdditionalPages="i18nap",e.IlrTrackCanonicalTop="ilr-track-canonical-top",e.IlrTrackCanonicalBottom="ilr-track-canonical-bottom",e.IlrTrackOrganicTop="ilr-track-organic-top",e.IlrTrackOrganicBottom="ilr-track-organic-bottom",e.RichPlaylistPages="rpp",e.GenerativeAIContent="genai",e}({})},69511:(e,t,n)=>{n.d(t,{$S:()=>r,F4:()=>i,MP:()=>c});var a=n(35354);const s=({treatment:e,entityId:t,experimentId:n,treatmentVariation:a})=>{if(e&&e[t]){const s=e[t].find((e=>e.experimentId===n));return s?.treatment===a}return!1},r=(e,t)=>s({treatment:e,entityId:t,experimentId:a.Ym.GENERATIVE_AI,treatmentVariation:a.mx.VARIANT}),i=(e,t)=>s({treatment:e,entityId:t,experimentId:a.Ym.TRACK_INTERNAL_LINK_RECOMMENDER,treatmentVariation:a.tO.CANONICAL}),c=(e,t)=>s({treatment:e,entityId:t,experimentId:a.Ym.TRACK_INTERNAL_LINK_RECOMMENDER,treatmentVariation:a.tO.ORGANIC})},35354:(e,t,n)=>{n.d(t,{Ym:()=>a,mx:()=>s,tO:()=>r});let a=function(e){return e.GENERATIVE_AI="generative-ai",e.TRACK_INTERNAL_LINK_RECOMMENDER="track-ilr",e}({}),s=function(e){return e.CONTROL="0",e.VARIANT="1",e}({}),r=function(e){return e.CONTROL="0",e.CANONICAL="1",e.ORGANIC="2",e}({})}}]);
//# sourceMappingURL=9744.js.map