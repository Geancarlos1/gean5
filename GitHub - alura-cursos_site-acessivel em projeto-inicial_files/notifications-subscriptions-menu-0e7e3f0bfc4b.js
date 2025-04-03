"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["notifications-subscriptions-menu"],{50045:(e,t,s)=>{s.d(t,{I:()=>a});let a=(0,s(96540).createContext)(null)},73218:(e,t,s)=>{s.d(t,{l:()=>a});let a=()=>void 0},264:(e,t,s)=>{let a;var n,i=s(11110),l=s(74848),r=s(96540),o=s(89323),c=s(10312),d=s(38621),u=s(57572);let h=(a="/notifications/subscribe",async e=>{try{let t=await (0,u.DI)(a,{method:"POST",body:e});if(t.ok)return t;return Error("Failed to update")}catch(e){return e}});var m=s(8338),p=s(52464);let b={NONE:"none",WATCHING:"watching",IGNORING:"ignoring",CUSTOM:"custom"},y={[b.NONE]:"Participating and @mentions",[b.WATCHING]:"All Activity",[b.IGNORING]:"Ignore",[b.CUSTOM]:"Custom"},f={...y,[b.NONE]:"Participating"},x={[b.NONE]:"Watch",[b.WATCHING]:"Unwatch",[b.IGNORING]:"Stop ignoring",[b.CUSTOM]:"Unwatch"},C=[{name:y[b.NONE],description:"Only receive notifications from this repository when participating or @mentioned.",subscriptionType:b.NONE},{name:y[b.WATCHING],description:"Notified of all notifications on this repository.",subscriptionType:b.WATCHING},{name:y[b.IGNORING],description:"Never be notified.",subscriptionType:b.IGNORING},{name:y[b.CUSTOM],description:"Select events you want to be notified of in addition to participating and @mentions.",trailingIcon:(0,r.createElement)(d.ArrowRightIcon),subscriptionType:b.CUSTOM}],g=e=>e in x?x[e]:"",N=(e,t)=>{let s=g(e),a=f[e];return e===b.IGNORING?`${s} in ${t}`:`${s}: ${a} in ${t}`};function v(e){return(0,l.jsx)(m.l,{selectionVariant:"single",children:C.map((t,s)=>(0,l.jsxs)(r.Fragment,{children:[(0,l.jsxs)(m.l.Item,{selected:t.subscriptionType===e.selected,onSelect:()=>e.onSelect(t.subscriptionType),children:[(0,l.jsx)(p.A,{sx:{fontWeight:"bold"},children:t.name}),(0,l.jsx)(m.l.Description,{variant:"block",children:t.description}),t.trailingIcon?(0,l.jsx)(m.l.TrailingVisual,{children:t.trailingIcon}):null]}),s!==C.length-1?(0,l.jsx)(m.l.Divider,{}):""]},s))})}try{v.displayName||(v.displayName="SubscriptionList")}catch{}var T=s(73451),j=s(65607),S=s(82009),_=s(55847),I=s(94977),w=s(63867);let A={footerContainer:"FooterActions-module__footerContainer--Z9ixI",buttonsContainer:"FooterActions-module__buttonsContainer--lkkwg"};function k(e){let[t,s]=(0,r.useState)(!1),a=(0,r.useCallback)(()=>(e.nextFocusRef?.current?.focus(),!0),[e.nextFocusRef]),n=(0,r.useCallback)(()=>{s(!0)},[]),i=(0,r.useCallback)(()=>{e.onApply(),setTimeout(()=>{e?.checkStatus&&e.checkStatus(n)},600)},[e,n]);return(0,l.jsxs)("div",{className:A.footerContainer,children:[e.showError?(0,l.jsx)(p.A,{sx:{py:3,pl:3,color:"var(--fgColor-muted, var(--color-fg-muted))"},children:"Error. Please try again."}):null,(0,l.jsxs)("div",{className:A.buttonsContainer,style:e.overrideButtonStyles??{padding:"var(--base-size-16)"},children:[!e.showError&&t?(0,l.jsx)(w.A,{size:"small",sx:{mr:2}}):null,(0,l.jsx)(_.Q,{size:"small",onClick:()=>e.onCancel(),onBlur:t=>{e.disabled&&a(t)},children:"Cancel"}),(0,l.jsx)(_.Q,{disabled:e.disabled,variant:"primary",size:"small",onClick:()=>i(),onBlur:a,sx:{ml:2},children:"Apply"})]})]})}try{k.displayName||(k.displayName="FooterActions")}catch{}function R(e){let[t,s]=(0,r.useState)(!1),[a,n]=(0,r.useState)(""),i=e.items.filter(e=>e?.text?.toLowerCase().startsWith(a.toLowerCase())),o=(0,r.useCallback)(()=>{e.applyLabels(),s(!1)},[e]),c=(0,r.useCallback)(()=>{e.resetLabels(),s(!1)},[e]),d=r.memo(O);return(0,l.jsx)(S.X,{title:"Select labels",renderAnchor:t=>0===e.items.length?(0,l.jsx)(I.A,{text:"Add labels to this repository to filter on them.",direction:"s",children:(0,l.jsx)(d,{anchorProps:t,itemsLength:e.items.length,labelsText:e.labelsText})}):(0,l.jsx)(d,{anchorProps:t,itemsLength:e.items.length,labelsText:e.labelsText}),placeholderText:"Filter labels",open:t,onOpenChange:s,items:i,selected:e.selectedLabels,onSelectedChange:e.onChangeLabels,onFilterChange:n,showItemDividers:!0,overlayProps:{width:"small",height:"medium",maxHeight:"medium"},footer:(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsx)(k,{onCancel:c,onApply:o,overrideButtonStyles:{padding:"var(--base-size-8)"}})})})}let O=({anchorProps:e,itemsLength:t,labelsText:s})=>(0,l.jsx)(_.Q,{leadingVisual:d.TagIcon,trailingAction:d.TriangleDownIcon,...e,"aria-label":"Filter labels","aria-describedby":"select-labels","aria-haspopup":"dialog",size:"small",disabled:0===t,children:0===t?"No labels available":(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"color-fg-muted",children:"Labels: "}),(0,l.jsx)("span",{id:"select-labels",children:s})]})});try{R.displayName||(R.displayName="FilterLabels")}catch{}try{(n=ButtonFilter).displayName||(n.displayName="ButtonFilter")}catch{}let L=e=>{let t=G(e,2);if(e.length>=2){if(2===e.length)return P(e);let s=G(e,3);if(s.length>30)return`${t.slice(0,30)}... +${e.length-2} more`;{let t=e.length>3?` +${e.length-3} more`:"";return`${s}${t}`}}if(1!==e.length)return"All";{let t=e[0]?.text||"";return t.length>30?`${t.slice(0,30)}...`:t}},P=e=>{let t=e[0]?.text||"",s=G(e,2);return s.length>30?t.length>25?`${t.slice(0,25)}... +1 more`:`${s.slice(0,30)}...`:s},G=(e,t)=>e.slice(0,t).map(e=>e.text).join(", "),E=e=>{switch(e){case"PullRequest":return"Pull requests";case"SecurityAlert":return"Security alerts";default:return`${e}s`}},F={filterContainer:"ThreadList-module__filterContainer--eNebD",threadContent:"ThreadList-module__threadContent--Ry8II",threadRow:"ThreadList-module__threadRow--lx6FW"};function M(e){let[t,s]=(0,r.useState)(e.appliedThreads),[a,n]=(0,r.useState)(e.appliedLabels),[i,o]=(0,r.useState)(e.appliedLabels),[c,d]=(0,r.useState)(()=>L(e.appliedLabels));(0,r.useEffect)(()=>{e.appliedLabels.length>0&&!t.includes("Issue")&&s([...t,"Issue"])},[]);let u=(0,r.useCallback)(e=>{t&&t.includes(e)?s(t.filter(t=>t!==e)):s([...t,e])},[t]),h=(0,r.useCallback)(()=>{e.applyThreads(t)},[e,t]),m=(0,r.useCallback)(e=>{o(e),d(L(e))},[]),b=(0,r.useCallback)(()=>{n(i)},[i]),y=(0,r.useCallback)(()=>{o(a),d(L(a))},[a]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:F.threadContent,children:e.subscribableThreadTypes.map((s,a)=>(0,l.jsxs)("div",{className:F.threadRow,style:a===e.subscribableThreadTypes.length-1?{}:{borderBottom:"1px solid var(--borderColor-default, var(--color-border-default))"},children:[(0,l.jsxs)(T.A,{children:[(0,l.jsx)(j.A,{checked:t.includes(s.name),onChange:()=>u(s.name)}),(0,l.jsx)(T.A.Label,{children:E(s.name)})]}),s.enabled?null:(0,l.jsxs)(p.A,{as:"p",sx:{fontSize:"12px",m:0,color:"var(--fgColor-muted)",ml:"var(--base-size-24)"},children:[E(s.name)," are not enabled for this repository"]}),(0,l.jsx)("div",{"aria-live":"polite",children:"Issue"===s.name&&e.showLabelSubscriptions&&t.includes("Issue")?(0,l.jsx)("div",{className:F.filterContainer,children:(0,l.jsx)(R,{filterAction:h,items:e.repoLabels,labelsText:c,onChangeLabels:m,selectedLabels:i,applyLabels:b,resetLabels:y})}):null})]},a))}),(0,l.jsx)(k,{onCancel:e.cancelMenuCallback,onApply:()=>e.saveThreads(t,i),showError:e.showError,disabled:0===t.length||e.isSavingThreads})]})}try{M.displayName||(M.displayName="ThreadList")}catch{}let $={watchCounter:"NotificationsSubscriptionsMenu-module__watchCounter--nAbhU",watchButton:"NotificationsSubscriptionsMenu-module__watchButton--ifxlS"};function W({repositoryId:e,repositoryName:t,watchersCount:s,subscriptionType:a,subscribableThreadTypes:n,repositoryLabels:i,showLabelSubscriptions:u}){let m=(0,r.useMemo)(()=>i.map(e=>({id:e.id,text:e.name,selected:e.subscribed})),[i]),p=m.filter(e=>e.selected),y=(0,r.useMemo)(()=>n.map(e=>e.subscribed||"Issue"===e.name&&u&&p.length>0?e.name:null).filter(e=>null!==e),[n,u,p]),[f,x]=(0,r.useState)(!1),[C,T]=(0,r.useState)(!1),[j,S]=(0,r.useState)(y.length>0?b.CUSTOM:a),[_,I]=(0,r.useState)(j),[w,A]=(0,r.useState)(y),[k,R]=(0,r.useState)(p),[O,L]=(0,r.useState)(!1),P=(0,r.useRef)(null),G=(0,r.useCallback)(()=>{T(!1),S(_)},[_]),E=(0,r.useCallback)(async(t,s)=>{L(!0),A(t),R(s),I(b.CUSTOM);let a=new FormData;a.set("do","custom"),a.set("repository_id",e),t.map(e=>{a.append("thread_types[]",e)}),s.map(e=>{e.id&&a.append("labels[]",e.id.toString())}),(await h(a)).ok?(T(!1),L(!1)):x(!0)},[e]),F=(0,r.useCallback)(async t=>{let s=new FormData;t===b.IGNORING?s.set("do","ignore"):t===b.WATCHING?s.set("do","subscribed"):(t===b.NONE||t===b.CUSTOM&&0===w.length)&&s.set("do","included"),s.append("thread_types[]",""),s.set("repository_id",e),await h(s)},[e,w]),W=(0,r.useCallback)(e=>{e===b.CUSTOM?(T(!0),S(b.CUSTOM)):(S(e),I(e),F(e),A([]))},[S]),B=(0,r.useCallback)(e=>{A(e)},[A]),U=(0,r.useMemo)(()=>N(j,t),[j,t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"d-md-none",children:(0,l.jsxs)(o.W,{children:[(0,l.jsx)(o.W.Button,{"data-testid":"notifications-subscriptions-menu-button-desktop",leadingVisual:j===b.IGNORING?d.BellSlashIcon:d.EyeIcon,trailingAction:null,className:$.watchButton,"aria-label":U,children:(0,l.jsx)(l.Fragment,{})}),(0,l.jsx)(o.W.Overlay,{width:"medium",children:(0,l.jsx)(v,{selected:j,onSelect:W})})]})}),(0,l.jsx)("div",{className:"d-none d-md-block",children:(0,l.jsxs)(o.W,{children:[(0,l.jsxs)(o.W.Button,{"data-testid":"notifications-subscriptions-menu-button-mobile",size:"small",leadingVisual:j===b.IGNORING?d.BellSlashIcon:d.EyeIcon,sx:{'&& [data-component="leadingVisual"]':{color:"var(--fgColor-muted, var(--color-fg-muted))"}},"aria-label":U,children:[g(j),(0,l.jsx)("span",{className:`ml-2 Counter rounded-3 ${$.watchCounter}`,children:s})]}),(0,l.jsx)(o.W.Overlay,{width:"medium",children:(0,l.jsx)(v,{selected:j,onSelect:W})})]})}),(0,l.jsx)(c.A,{returnFocusRef:P,isOpen:C,onDismiss:()=>G(),"aria-labelledby":"header",children:(0,l.jsxs)("div",{"data-testid":"inner",children:[(0,l.jsxs)(c.A.Header,{id:"header",children:["Subscribe to events for ",t]}),(0,l.jsx)(M,{subscribableThreadTypes:n,showLabelSubscriptions:u,cancelMenuCallback:G,appliedThreads:w,repoLabels:m,subscribedThreads:y,applyThreads:B,appliedLabels:k,saveThreads:E,showError:f,isSavingThreads:O})]})})]})}try{W.displayName||(W.displayName="NotificationsSubscriptionsMenu")}catch{}(0,i.k)("notifications-subscriptions-menu",{Component:W})},64128:(e,t,s)=>{s.d(t,{Y:()=>a});function a(){let e={};return e.promise=new Promise((t,s)=>{e.resolve=t,e.reject=s}),e}},74753:(e,t,s)=>{s.d(t,{A:()=>r});let{getItem:a,setItem:n,removeItem:i}=(0,s(80688).A)("localStorage"),l="REACT_PROFILING_ENABLED",r={enable:()=>n(l,"true"),disable:()=>i(l),isEnabled:()=>!!a(l)}},45996:(e,t,s)=>{s.d(t,{A:()=>i});var a=s(38568),n=s(96540);function i(){let e=(0,n.useRef)(!1),t=(0,n.useCallback)(()=>e.current,[]);return(0,a.N)(()=>(e.current=!0,()=>{e.current=!1}),[]),t}},38568:(e,t,s)=>{s.d(t,{N:()=>i});var a=s(47584),n=s(96540);let i=void 0!==a.cg?.document?.createElement?n.useLayoutEffect:n.useEffect},82060:(e,t,s)=>{s.d(t,{A:()=>i});var a=s(45996),n=s(96540);let i=function(e){let t=(0,a.A)(),[s,i]=(0,n.useState)(e);return[s,(0,n.useCallback)(e=>{t()&&i(e)},[t])]}},57572:(e,t,s)=>{function a(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let s=function(e){let t=new URL(e,window.location.origin),s=new URL(window.location.href,window.location.origin),a=s.searchParams.get("_features");a&&!t.searchParams.has("_features")&&t.searchParams.set("_features",a);let n=s.searchParams.get("_tracing");return n&&!t.searchParams.has("_tracing")&&t.searchParams.set("_tracing",n),e.startsWith("/")?`${t.pathname}${t.search}`:t.href}(e),n={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(s,{...t,headers:n})}function n(e,t){let s={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},n=t?.body?JSON.stringify(t.body):void 0;return a(e,{...t,body:n,headers:s})}function i(e,t={}){let s={...t.headers,"GitHub-Is-React":"true"};return a(e,{...t,headers:s})}function l(e,t){let s={...t?.headers??{},"GitHub-Is-React":"true"};return n(e,{...t,headers:s})}s.d(t,{DI:()=>a,QJ:()=>i,Sr:()=>l,lS:()=>n})},59418:(e,t,s)=>{s.d(t,{y:()=>l});var a=s(74848),n=s(21728),i=s(50045);function l(e){let t,s,l;let r=(0,n.c)(7),{children:o,appName:c,category:d,metadata:u}=e;return r[0]!==c||r[1]!==d||r[2]!==u?(s={appName:c,category:d,metadata:u},r[0]=c,r[1]=d,r[2]=u,r[3]=s):s=r[3],t=s,r[4]!==o||r[5]!==t?(l=(0,a.jsx)(i.I.Provider,{value:t,children:o}),r[4]=o,r[5]=t,r[6]=l):l=r[6],l}try{l.displayName||(l.displayName="AnalyticsProvider")}catch{}},18347:(e,t,s)=>{s.d(t,{BP:()=>u,D3:()=>d,O8:()=>o});var a=s(74848),n=s(21728),i=s(96540),l=s(47584),r=s(38568);let o={ServerRender:"ServerRender",ClientHydrate:"ClientHydrate",ClientRender:"ClientRender"},c=(0,i.createContext)(o.ClientRender);function d(e){let t,s,d,u;let h=(0,n.c)(8),{wasServerRendered:m,children:p}=e;h[0]!==m?(t=()=>l.X3?o.ServerRender:m?o.ClientHydrate:o.ClientRender,h[0]=m,h[1]=t):t=h[1];let[b,y]=(0,i.useState)(t);return h[2]!==b?(s=()=>{b!==o.ClientRender&&y(o.ClientRender)},d=[b],h[2]=b,h[3]=s,h[4]=d):(s=h[3],d=h[4]),(0,r.N)(s,d),h[5]!==p||h[6]!==b?(u=(0,a.jsx)(c.Provider,{value:b,children:p}),h[5]=p,h[6]=b,h[7]=u):u=h[7],u}function u(){return(0,i.useContext)(c)}try{c.displayName||(c.displayName="RenderPhaseContext")}catch{}try{d.displayName||(d.displayName="RenderPhaseProvider")}catch{}},67136:(e,t,s)=>{s.d(t,{Qn:()=>o,T8:()=>d,Y6:()=>h,k6:()=>u});var a=s(74848),n=s(65556),i=s(96540),l=s(73218),r=s(82060);let o=5e3,c=(0,i.createContext)({addToast:l.l,addPersistedToast:l.l,clearPersistedToast:l.l}),d=(0,i.createContext)({toasts:[],persistedToast:null});function u({children:e}){let[t,s]=(0,r.A)([]),[l,u]=(0,i.useState)(null),{safeSetTimeout:h}=(0,n.A)(),m=(0,i.useCallback)(function(e){s([...t,e]),h(()=>s(t.slice(1)),o)},[t,h,s]),p=(0,i.useCallback)(function(e){u(e)},[u]),b=(0,i.useCallback)(function(){u(null)},[u]),y=(0,i.useMemo)(()=>({addToast:m,addPersistedToast:p,clearPersistedToast:b}),[p,m,b]),f=(0,i.useMemo)(()=>({toasts:t,persistedToast:l}),[t,l]);return(0,a.jsx)(c.Provider,{value:y,children:(0,a.jsx)(d.Provider,{value:f,children:e})})}function h(){return(0,i.useContext)(c)}try{c.displayName||(c.displayName="ToastContext")}catch{}try{d.displayName||(d.displayName="InternalToastsContext")}catch{}try{u.displayName||(u.displayName="ToastContextProvider")}catch{}},91958:(e,t,s)=>{s.d(t,{V:()=>h});var a=s(74848),n=s(96540),i=s(67136),l=s(38621),r=s(65556),o=s(16255);let c={info:"",success:"Toast--success",error:"Toast--error"},d={info:(0,a.jsx)(l.InfoIcon,{}),success:(0,a.jsx)(l.CheckIcon,{}),error:(0,a.jsx)(l.StopIcon,{})},u=({message:e,timeToLive:t,icon:s,type:i="info",role:l="log"})=>{let[u,h]=n.useState(!0),{safeSetTimeout:m}=(0,r.A)();return(0,n.useEffect)(()=>{t&&m(()=>h(!1),t-300)},[m,t]),(0,a.jsx)(o.Z,{children:(0,a.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,a.jsxs)("div",{className:`Toast ${c[i]} ${u?"Toast--animateIn":"Toast--animateOut"}`,id:"ui-app-toast","data-testid":`ui-app-toast-${i}`,role:l,children:[(0,a.jsx)("span",{className:"Toast-icon",children:s||d[i]}),(0,a.jsx)("span",{className:"Toast-content",children:e})]})})})};try{u.displayName||(u.displayName="Toast")}catch{}function h(){let{toasts:e,persistedToast:t}=(0,n.useContext)(i.T8);return(0,a.jsxs)(a.Fragment,{children:[e.map((e,t)=>(0,a.jsx)(u,{message:e.message,icon:e.icon,timeToLive:i.Qn,type:e.type,role:e.role},t)),t&&(0,a.jsx)(u,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{h.displayName||(h.displayName="Toasts")}catch{}}},e=>{var t=t=>e(e.s=t);e.O(0,["primer-react","react-core","react-lib","octicons-react","vendors-node_modules_primer_behaviors_dist_esm_index_mjs","vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-434cb6","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-e7dcdd","vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js","ui_packages_failbot_failbot_ts"],()=>t(264)),e.O()}]);
//# sourceMappingURL=notifications-subscriptions-menu-54c28605809d.js.map