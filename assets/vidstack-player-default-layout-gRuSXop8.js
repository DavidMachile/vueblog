const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-BpaoOxnh2-DylnTGBj.js","assets/app-DZKZIC8e.js"])))=>i.map(i=>d[i]);
var $s=Object.defineProperty;var bs=Object.getPrototypeOf;var gs=Reflect.get;var pe=e=>{throw TypeError(e)};var ys=(e,t,s)=>t in e?$s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var O=(e,t,s)=>ys(e,typeof t!="symbol"?t+"":t,s),Lt=(e,t,s)=>t.has(e)||pe("Cannot "+s);var v=(e,t,s)=>(Lt(e,t,"read from private field"),s?s.call(e):t.get(e)),b=(e,t,s)=>t.has(e)?pe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),A=(e,t,s,n)=>(Lt(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),$=(e,t,s)=>(Lt(e,t,"access private method"),s);var Gt=(e,t,s)=>gs(bs(e),s,t);import{aP as y,b as Se,e as _,ac as it,aO as we,bm as xs,ap as k,a as E,aM as Ss,an as ws,aJ as Ts,r as w,bn as Te,y as ks,bo as ke,bp as g,aI as Cs,j as qt,ba as Ce,ar as st,bq as Ae,ay as As,br as Ds,w as Ms,aL as De,bs as gt,c as at,bt as Is,s as Os,ab as _s,bu as Ps,aC as Ls,v as R,bv as Gs,aT as Ns,_ as Bs,at as Me,l as Nt,aX as Vs,bw as Fs,bx as Rs,by as Es,bl as Ie}from"./app-DZKZIC8e.js";import{A as W,T as Ws,D as me,x as o,s as Ks,L as Oe}from"./vidstack-CSQuRTzD-DdT65uXf.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qs=e=>e.strings===void 0,Hs={},Us=(e,t=Hs)=>e._$AH=t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt={ATTRIBUTE:1,CHILD:2,BOOLEAN_ATTRIBUTE:4},kt=e=>(...t)=>({_$litDirective$:e,values:t});let jt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=(e,t)=>{var s,n;const i=e._$AN;if(i===void 0)return!1;for(const l of i)(n=(s=l)._$AO)===null||n===void 0||n.call(s,t,!1),nt(l,t);return!0},xt=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},_e=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),js(t)}};function zs(e){this._$AN!==void 0?(xt(this),this._$AM=e,_e(this)):this._$AM=e}function qs(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let l=s;l<n.length;l++)nt(n[l],!1),xt(n[l]);else n!=null&&(nt(n,!1),xt(n));else nt(this,e)}const js=e=>{var t,s,n,i;e.type==yt.CHILD&&((t=(n=e)._$AP)!==null&&t!==void 0||(n._$AP=qs),(s=(i=e)._$AQ)!==null&&s!==void 0||(i._$AQ=zs))};class Pe extends jt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),_e(this),this.isConnected=t._$AU}_$AO(t,s=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)===null||n===void 0||n.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),s&&(nt(this,t),xt(this))}setValue(t){if(Qs(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=e=>e??W;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Et extends jt{constructor(t){if(super(t),this.et=W,t.type!==yt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===W||t==null)return this.ft=void 0,this.et=t;if(t===Ws)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const s=[t];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}Et.directiveName="unsafeHTML",Et.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wt extends Et{}Wt.directiveName="unsafeSVG",Wt.resultType=2;const Ys=kt(Wt);var L,ot,z,I,Kt,Qt,Le,Ge,be,Xs=(be=class extends Pe{constructor(t){super(t);b(this,I);b(this,L,null);b(this,ot,!1);b(this,z,null);A(this,ot,t.type===yt.ATTRIBUTE||t.type===yt.BOOLEAN_ATTRIBUTE)}render(t){return t!==v(this,L)&&(this.disconnected(),A(this,L,t),this.isConnected&&$(this,I,Kt).call(this)),v(this,L)?$(this,I,Qt).call(this,Se(v(this,L))):W}reconnected(){$(this,I,Kt).call(this)}disconnected(){var t;(t=v(this,z))==null||t.call(this),A(this,z,null)}},L=new WeakMap,ot=new WeakMap,z=new WeakMap,I=new WeakSet,Kt=function(){v(this,L)&&A(this,z,_($(this,I,Ge).bind(this)))},Qt=function(t){return v(this,ot)?Yt(t):t},Le=function(t){this.setValue($(this,I,Qt).call(this,t))},Ge=function(){var t;$(this,I,Le).call(this,(t=v(this,L))==null?void 0:t.call(this))},be);function a(e){return kt(Xs)(y(e))}var q,lt,wt,rt,Ht,ge,Ne=(ge=class{constructor(e,t){b(this,rt);b(this,q);b(this,lt);O(this,"elements",new Set);b(this,wt,we($(this,rt,Ht).bind(this)));A(this,q,e),A(this,lt,t)}connect(){$(this,rt,Ht).call(this);const e=new MutationObserver(v(this,wt));for(const t of v(this,q))e.observe(t,{childList:!0,subtree:!0});it(()=>e.disconnect()),it(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(e,t){xs(e)?(t.textContent="",t.append(e)):(me(null,t),me(e,t)),t.style.display||(t.style.display="contents");const s=t.firstElementChild;if(!s)return;const n=t.getAttribute("data-class");n&&s.classList.add(...n.split(" "))}},q=new WeakMap,lt=new WeakMap,wt=new WeakMap,rt=new WeakSet,Ht=function(e){if(e&&!e.some(n=>n.addedNodes.length))return;let t=!1,s=v(this,q).flatMap(n=>[...n.querySelectorAll("slot")]);for(const n of s)!n.hasAttribute("name")||this.elements.has(n)||(this.elements.add(n),t=!0);t&&v(this,lt).call(this,this.elements)},ge);let Zs=0,ft="data-slot-id";var j,Tt,Y,bt,ye,Be=(ye=class{constructor(e){b(this,Y);b(this,j);O(this,"slots");b(this,Tt,we($(this,Y,bt).bind(this)));A(this,j,e),this.slots=new Ne(e,$(this,Y,bt).bind(this))}connect(){this.slots.connect(),$(this,Y,bt).call(this);const e=new MutationObserver(v(this,Tt));for(const t of v(this,j))e.observe(t,{childList:!0});it(()=>e.disconnect())}},j=new WeakMap,Tt=new WeakMap,Y=new WeakSet,bt=function(){for(const e of v(this,j))for(const t of e.children){if(t.nodeType!==1)continue;const s=t.getAttribute("slot");if(!s)continue;t.style.display="none";let n=t.getAttribute(ft);n||t.setAttribute(ft,n=++Zs+"");for(const i of this.slots.elements){if(i.getAttribute("name")!==s||i.getAttribute(ft)===n)continue;const l=document.importNode(t,!0);s.includes("-icon")&&l.classList.add("vds-icon"),l.style.display="",l.removeAttribute("slot"),this.slots.assign(l,i),i.setAttribute(ft,n)}}},ye);function Js({name:e,class:t,state:s,paths:n,viewBox:i="0 0 32 32"}){return o`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="${i}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${Yt(e??s)}
  >
    ${E(n)?Ys(n):a(n)}
  </svg>`}var X,ut,Q,Ve,Ut,xe,tn=(xe=class{constructor(e){b(this,Q);b(this,X,{});b(this,ut,!1);O(this,"slots");this.slots=new Ne(e,$(this,Q,Ut).bind(this))}connect(){this.slots.connect()}load(){this.loadIcons().then(e=>{A(this,X,e),A(this,ut,!0),$(this,Q,Ut).call(this)})}},X=new WeakMap,ut=new WeakMap,Q=new WeakSet,Ve=function*(){for(const e of Object.keys(v(this,X))){const t=`${e}-icon`;for(const s of this.slots.elements)s.name===t&&(yield{icon:v(this,X)[e],slot:s})}},Ut=function(){if(v(this,ut))for(const{icon:e,slot:t}of $(this,Q,Ve).call(this))this.slots.assign(e,t)},xe),en=class extends tn{connect(){super.connect();const{player:e}=k();if(!e.el)return;let t,s=new IntersectionObserver(n=>{var i;(i=n[0])!=null&&i.isIntersecting&&(t==null||t(),t=void 0,this.load())});s.observe(e.el),t=it(()=>s.disconnect())}};const Bt=new WeakMap,Ct=kt(class extends Pe{render(e){return W}update(e,[t]){var s;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=(s=e.options)===null||s===void 0?void 0:s.host,this.ot(this.lt=e.element)),W}ot(e){var t;if(typeof this.G=="function"){const s=(t=this.dt)!==null&&t!==void 0?t:globalThis;let n=Bt.get(s);n===void 0&&(n=new WeakMap,Bt.set(s,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,s;return typeof this.G=="function"?(t=Bt.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.G):(s=this.G)===null||s===void 0?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Fe=Cs();function r(){return Ss(Fe)}const sn={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var Rt,dt,Z,B,ct,zt,Xt=(Rt=class extends ws{constructor(){super(...arguments);b(this,ct);b(this,dt);b(this,Z,y(()=>{const t=this.$props.when();return $(this,ct,zt).call(this,t)}));b(this,B,y(()=>{const t=this.$props.smallWhen();return $(this,ct,zt).call(this,t)}))}get isMatch(){return v(this,Z).call(this)}get isSmallLayout(){return v(this,B).call(this)}onSetup(){A(this,dt,k()),this.setAttributes({"data-match":v(this,Z),"data-sm":()=>v(this,B).call(this)?"":null,"data-lg":()=>v(this,B).call(this)?null:"","data-size":()=>v(this,B).call(this)?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),Ts(Fe,{...this.$props,when:v(this,Z),smallWhen:v(this,B),userPrefersAnnouncements:w(!0),userPrefersKeyboardAnimations:w(!0),menuPortal:w(null)})}onAttach(t){Te(t,this.$props.colorScheme)}},dt=new WeakMap,Z=new WeakMap,B=new WeakMap,ct=new WeakSet,zt=function(t){return t!=="never"&&(ks(t)?t:y(()=>t(v(this,dt).player.state))())},O(Rt,"props",sn),Rt);const Re=Xt.prototype;Ce(Re,"isMatch");Ce(Re,"isSmallLayout");function Ee(e,t){_(()=>{const{player:s}=k(),n=s.el;return n&&st(n,"data-layout",t()&&e),()=>n==null?void 0:n.removeAttribute("data-layout")})}function T(e,t){var s;return((s=e())==null?void 0:s[t])??t}function Zt(){return a(()=>{const{translations:e,userPrefersAnnouncements:t}=r();return t()?o`<media-announcer .translations=${a(e)}></media-announcer>`:null})}function D(e,t=""){return o`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:""}`}
  ></slot>`}function mt(e){return e.map(t=>D(t))}function u(e,t){return a(()=>T(e,t))}function Jt({tooltip:e}){const{translations:t}=r(),{remotePlaybackState:s}=g(),n=a(()=>`${T(t,"AirPlay")} ${Ae(s())}`),i=u(t,"AirPlay");return o`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${n}>
          ${D("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function We({tooltip:e}){const{translations:t}=r(),{remotePlaybackState:s}=g(),n=a(()=>`${T(t,"Google Cast")} ${Ae(s())}`),i=u(t,"Google Cast");return o`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${n}>
          ${D("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function At({tooltip:e}){const{translations:t}=r(),s=u(t,"Play"),n=u(t,"Pause");return o`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${u(t,"Play")}
        >
          ${mt(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ve({tooltip:e,ref:t=Ps}){const{translations:s}=r(),n=u(s,"Mute"),i=u(s,"Unmute");return o`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${u(s,"Mute")}
          ${Ct(t)}
        >
          ${mt(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${i}</span>
        <span class="vds-unmute-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function te({tooltip:e}){const{translations:t}=r(),s=u(t,"Closed-Captions On"),n=u(t,"Closed-Captions Off");return o`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${u(t,"Captions")}
        >
          ${mt(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${n}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function nn(){const{translations:e}=r(),t=u(e,"Enter PiP"),s=u(e,"Exit PiP");return o`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${u(e,"PiP")}
        >
          ${mt(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ke({tooltip:e}){const{translations:t}=r(),s=u(t,"Enter Fullscreen"),n=u(t,"Exit Fullscreen");return o`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${u(t,"Fullscreen")}
        >
          ${mt(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function fe({backward:e,tooltip:t}){const{translations:s,seekStep:n}=r(),i=e?"Seek Backward":"Seek Forward",l=u(s,i);return o`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${a(()=>(e?-1:1)*n())}
          aria-label=${l}
        >
          ${D(e?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${u(s,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function Qe(){const{translations:e}=r(),{live:t}=g(),s=u(e,"Skip To Live"),n=u(e,"LIVE");return t()?o`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${n}</span>
        </media-live-button>
      `:null}function ee(){return a(()=>{const{download:e,translations:t}=r(),s=e();if(As(s))return null;const{source:n,title:i}=g(),l=n(),d=Ds({title:i(),src:l,download:s});return E(d==null?void 0:d.url)?o`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${u(t,"Download")}
                href=${Ms(d.url,{download:d.name})}
                download=${d.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${u(t,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function se(){const{translations:e}=r();return o`
    <media-captions
      class="vds-captions"
      .exampleText=${u(e,"Captions look like this")}
    ></media-captions>
  `}function G(){return o`<div class="vds-controls-spacer"></div>`}function He(e,t){return o`
    <media-menu-portal .container=${a(e)} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function Ue(e,t,s,n){let i=E(t)?document.querySelector(t):t;i||(i=e==null?void 0:e.closest("dialog")),i||(i=document.body);const l=document.createElement("div");l.style.display="contents",l.classList.add(s),i.append(l),_(()=>{if(!l)return;const{viewType:m}=g(),c=n();st(l,"data-view-type",m()),st(l,"data-sm",c),st(l,"data-lg",!c),st(l,"data-size",c?"sm":"lg")});const{colorScheme:d}=r();return Te(l,d),l}function ze({placement:e,tooltip:t,portal:s}){const{textTracks:n}=k(),{viewType:i,seekableStart:l,seekableEnd:d}=g(),{translations:m,thumbnails:c,menuPortal:S,noModal:p,menuGroup:f,smallWhen:x}=r();if(y(()=>{var ue,de;const fs=l(),hs=d(),re=w(null);return De(n,"chapters",re.set),!((de=(ue=re())==null?void 0:ue.cues.filter(ce=>ce.startTime<=hs&&ce.endTime>=fs))!=null&&de.length)})())return null;const h=y(()=>p()?gt(e):x()?null:gt(e)),P=y(()=>!x()&&f()==="bottom"&&i()==="video"?26:0),U=w(!1);function Pt(){U.set(!0)}function ms(){U.set(!1)}const vs=o`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${a(h)}
      offset=${a(P)}
    >
      ${a(()=>U()?o`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${a(c)}
          >
            <template>
              <media-radio class="vds-chapter-radio vds-radio">
                <media-thumbnail class="vds-thumbnail"></media-thumbnail>
                <div class="vds-chapter-radio-content">
                  <span class="vds-chapter-radio-label" data-part="label"></span>
                  <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
                  <span class="vds-chapter-radio-duration" data-part="duration"></span>
                </div>
              </media-radio>
            </template>
          </media-chapters-radio-group>
        `:null)}
    </media-menu-items>
  `;return o`
    <media-menu class="vds-chapters-menu vds-menu" @open=${Pt} @close=${ms}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${u(m,"Chapters")}
          >
            ${D("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${qt(t)?a(t):t}
        >
          ${u(m,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${He(S,vs)}
    </media-menu>
  `}function Vt(e){const{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}const ne={type:"color"},an={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},on={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null},ln={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null},rn={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},St={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},K=Object.keys(St).reduce((e,t)=>({...e,[t]:w(St[t])}),{});for(const e of Object.keys(K)){const t=localStorage.getItem(`vds-player:${at(e)}`);E(t)&&K[e].set(t)}function un(){for(const e of Object.keys(K)){const t=St[e];K[e].set(t)}}let he=!1,Ft=new Set;function dn(){const{player:e}=k();Ft.add(e),it(()=>Ft.delete(e)),he||(Os(()=>{for(const t of _s(K)){const s=K[t],n=St[t],i=`--media-user-${at(t)}`,l=`vds-player:${at(t)}`;_(()=>{var S;const d=s(),m=d===n,c=m?null:cn(e,t,d);for(const p of Ft)(S=p.el)==null||S.style.setProperty(i,c);m?localStorage.removeItem(l):localStorage.setItem(l,d)})}},null),he=!0)}function cn(e,t,s){var n;switch(t){case"fontFamily":const i=s==="capitals"?"small-caps":"";return(n=e.el)==null||n.style.setProperty("--media-user-font-variant",i),mn(s);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return pn(s);case"textColor":return`rgb(${Vt(s)} / var(--media-user-text-opacity, 1))`;case"textShadow":return vn(s);case"textBg":return`rgb(${Vt(s)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${Vt(s)} / var(--media-user-display-bg-opacity, 1))`}}function pn(e){return(parseInt(e)/100).toString()}function mn(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function vn(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}let fn=0;function M({label:e="",value:t="",children:s}){if(!e)return o`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const n=`vds-menu-section-${++fn}`;return o`
    <section class="vds-menu-section" role="group" aria-labelledby=${n}>
      <div class="vds-menu-section-title">
        <header id=${n}>${e}</header>
        ${t?o`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function vt({label:e,children:t}){return o`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function H({label:e,icon:t,hint:s}){return o`
    <media-menu-button class="vds-menu-item">
      ${D("menu-arrow-left","vds-menu-close-icon")}
      ${t?D(t,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${a(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?a(s):null} </span>
      ${D("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function hn({value:e=null,options:t,hideLabel:s=!1,children:n=null,onChange:i=null}){function l(d){const{value:m,label:c}=d;return o`
      <media-radio class="vds-radio" value=${m}>
        ${D("menu-radio-check")}
        ${s?null:o`
              <span class="vds-radio-label" data-part="label">
                ${E(c)?c:a(c)}
              </span>
            `}
        ${qt(n)?n(d):n}
      </media-radio>
    `}return o`
    <media-radio-group
      class="vds-radio-group"
      value=${E(e)?e:e?a(e):""}
      @change=${i}
    >
      ${R(t)?t.map(l):a(()=>t().map(l))}
    </media-radio-group>
  `}function $n(e){return R(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function Dt(){return o`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function Mt(){return o`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function It({label:e=null,value:t=null,upIcon:s="",downIcon:n="",children:i,isMin:l,isMax:d}){const m=e||t,c=[n?D(n,"down"):null,i,s?D(s,"up"):null];return o`
    <div
      class=${`vds-menu-item vds-menu-slider-item${m?" group":""}`}
      data-min=${a(()=>l()?"":null)}
      data-max=${a(()=>d()?"":null)}
    >
      ${m?o`
            <div class="vds-menu-slider-title">
              ${[e?o`<div>${e}</div>`:null,t?o`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}const bn={...on,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},ie={...ln,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function gn(){return a(()=>{const{hasCaptions:e}=g(),{translations:t}=r();return e()?o`
      <media-menu class="vds-font-menu vds-menu">
        ${H({label:()=>T(t,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[M({label:u(t,"Font"),children:[yn(),xn()]}),M({label:u(t,"Text"),children:[Sn(),Tn(),wn()]}),M({label:u(t,"Text Background"),children:[kn(),Cn()]}),M({label:u(t,"Display Background"),children:[An(),Dn()]}),M({children:[Mn()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function yn(){return N({label:"Family",option:an,type:"fontFamily"})}function xn(){return N({label:"Size",option:bn,type:"fontSize"})}function Sn(){return N({label:"Color",option:ne,type:"textColor"})}function wn(){return N({label:"Opacity",option:ie,type:"textOpacity"})}function Tn(){return N({label:"Shadow",option:rn,type:"textShadow"})}function kn(){return N({label:"Color",option:ne,type:"textBg"})}function Cn(){return N({label:"Opacity",option:ie,type:"textBgOpacity"})}function An(){return N({label:"Color",option:ne,type:"displayBg"})}function Dn(){return N({label:"Opacity",option:ie,type:"displayBgOpacity"})}function Mn(){const{translations:e}=r();return o`
    <button class="vds-menu-item" role="menuitem" @click=${un}>
      <span class="vds-menu-item-label">${a(()=>T(e,"Reset"))}</span>
    </button>
  `}function N({label:e,option:t,type:s}){const{player:n}=k(),{translations:i}=r(),l=K[s],d=()=>T(i,e);function m(){Ns(),n.dispatchEvent(new Event("vds-font-change"))}if(t.type==="color"){let p=function(f){l.set(f.target.value),m()};return vt({label:a(d),children:o`
        <input
          class="vds-color-picker"
          type="color"
          .value=${a(l)}
          @input=${p}
        />
      `})}if(t.type==="slider"){let U=function(Pt){l.set(Pt.detail+"%"),m()};const{min:p,max:f,step:x,upIcon:h,downIcon:P}=t;return It({label:a(d),value:a(l),upIcon:h,downIcon:P,isMin:()=>l()===p+"%",isMax:()=>l()===f+"%",children:o`
        <media-slider
          class="vds-slider"
          min=${p}
          max=${f}
          step=${x}
          key-step=${x}
          .value=${a(()=>parseInt(l()))}
          aria-label=${a(d)}
          @value-change=${U}
          @drag-value-change=${U}
        >
          ${Dt()}${Mt()}
        </media-slider>
      `})}const c=$n(t.values),S=()=>{var x;const p=l(),f=((x=c.find(h=>h.value===p))==null?void 0:x.label)||"";return T(i,E(f)?f:f())};return o`
    <media-menu class=${`vds-${at(s)}-menu vds-menu`}>
      ${H({label:d,hint:S})}
      <media-menu-items class="vds-menu-items">
        ${hn({value:l,options:c,onChange({detail:p}){l.set(p),m()}})}
      </media-menu-items>
    </media-menu>
  `}function Ot({label:e,checked:t,defaultChecked:s=!1,storageKey:n,onChange:i}){const{translations:l}=r(),d=w(!!((n?localStorage.getItem(n):null)??s)),m=w(!1),c=a(Ls(d)),S=u(l,e);n&&i(Se(d)),t&&_(()=>void d.set(t()));function p(h){(h==null?void 0:h.button)!==1&&(d.set(P=>!P),n&&localStorage.setItem(n,d()?"1":""),i(d(),h),m.set(!1))}function f(h){Gs(h)&&p()}function x(h){h.button===0&&m.set(!0)}return o`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${S}
      aria-checked=${c}
      data-active=${a(()=>m()?"":null)}
      @pointerup=${p}
      @pointerdown=${x}
      @keydown=${f}
    ></div>
  `}function In(){return a(()=>{const{translations:e}=r();return o`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${H({label:()=>T(e,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[M({children:[On(),_n()]}),M({children:[gn()]})]}
        </media-menu-items>
      </media-menu>
    `})}function On(){const{userPrefersAnnouncements:e,translations:t}=r(),s="Announcements";return vt({label:u(t,s),children:Ot({label:s,storageKey:"vds-player::announcements",onChange(n){e.set(n)}})})}function _n(){return a(()=>{const{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:s}=r(),{viewType:n}=g();if(y(()=>n()!=="video"||s())())return null;const i="Keyboard Animations";return vt({label:u(e,i),children:Ot({label:i,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(l){t.set(l)}})})})}function Pn(){return a(()=>{const{noAudioGain:e,translations:t}=r(),{audioTracks:s,canSetAudioGain:n}=g();return y(()=>!(n()&&!e())&&s().length<=1)()?null:o`
      <media-menu class="vds-audio-menu vds-menu">
        ${H({label:()=>T(t,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[Ln(),Gn()]}
        </media-menu-items>
      </media-menu>
    `})}function Ln(){return a(()=>{const{translations:e}=r(),{audioTracks:t}=g(),s=u(e,"Default");return y(()=>t().length<=1)()?null:M({children:o`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${H({label:()=>T(e,"Track")})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${s}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `})})}function Gn(){return a(()=>{const{noAudioGain:e,translations:t}=r(),{canSetAudioGain:s}=g();if(y(()=>!s()||e())())return null;const{audioGain:n}=g();return M({label:u(t,"Boost"),value:a(()=>Math.round(((n()??1)-1)*100)+"%"),children:[It({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:Nn(),isMin:()=>((n()??1)-1)*100<=qe(),isMax:()=>((n()??1)-1)*100===je()})]})})}function Nn(){const{translations:e}=r(),t=u(e,"Boost"),s=qe,n=je,i=Bn;return o`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${a(s)}
      max=${a(n)}
      step=${a(i)}
      key-step=${a(i)}
    >
      ${Dt()}${Mt()}
    </media-audio-gain-slider>
  `}function qe(){const{audioGains:e}=r(),t=e();return R(t)?t[0]??0:t.min}function je(){const{audioGains:e}=r(),t=e();return R(t)?t[t.length-1]??300:t.max}function Bn(){const{audioGains:e}=r(),t=e();return R(t)?t[1]-t[0]||25:t.step}function Vn(){return a(()=>{const{translations:e}=r(),{hasCaptions:t}=g(),s=u(e,"Off");return t()?o`
      <media-menu class="vds-captions-menu vds-menu">
        ${H({label:()=>T(e,"Captions"),icon:"menu-captions"})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${s}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `:null})}function Fn(){return a(()=>{const{translations:e}=r();return o`
      <media-menu class="vds-playback-menu vds-menu">
        ${H({label:()=>T(e,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[M({children:Rn()}),En(),Hn()]}
        </media-menu-items>
      </media-menu>
    `})}function Rn(){const{remote:e}=k(),{translations:t}=r(),s="Loop";return vt({label:u(t,s),children:Ot({label:s,storageKey:"vds-player::user-loop",onChange(n,i){e.userPrefersLoopChange(n,i)}})})}function En(){return a(()=>{const{translations:e}=r(),{canSetPlaybackRate:t,playbackRate:s}=g();return t()?M({label:u(e,"Speed"),value:a(()=>s()===1?T(e,"Normal"):s()+"x"),children:[It({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:Kn(),isMin:()=>s()===Ye(),isMax:()=>s()===Xe()})]}):null})}function Ye(){const{playbackRates:e}=r(),t=e();return R(t)?t[0]??0:t.min}function Xe(){const{playbackRates:e}=r(),t=e();return R(t)?t[t.length-1]??2:t.max}function Wn(){const{playbackRates:e}=r(),t=e();return R(t)?t[1]-t[0]||.25:t.step}function Kn(){const{translations:e}=r(),t=u(e,"Speed"),s=Ye,n=Xe,i=Wn;return o`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${a(s)}
      max=${a(n)}
      step=${a(i)}
      key-step=${a(i)}
    >
      ${Dt()}${Mt()}
    </media-speed-slider>
  `}function Qn(){const{remote:e,qualities:t}=k(),{autoQuality:s,canSetQuality:n,qualities:i}=g(),{translations:l}=r(),d="Auto";return y(()=>!n()||i().length<=1)()?null:vt({label:u(l,d),children:Ot({label:d,checked:s,onChange(m,c){m?e.requestAutoQuality(c):e.changeQuality(t.selectedIndex,c)}})})}function Hn(){return a(()=>{const{hideQualityBitrate:e,translations:t}=r(),{canSetQuality:s,qualities:n,quality:i}=g(),l=y(()=>!s()||n().length<=1),d=y(()=>Ks(n()));return l()?null:M({label:u(t,"Quality"),value:a(()=>{var f,x;const m=(f=i())==null?void 0:f.height,c=e()?null:(x=i())==null?void 0:x.bitrate,S=c&&c>0?`${(c/1e6).toFixed(2)} Mbps`:null,p=T(t,"Auto");return m?`${m}p${S?` (${S})`:""}`:p}),children:[It({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:Un(),isMin:()=>d()[0]===i(),isMax:()=>d().at(-1)===i()}),Qn()]})})}function Un(){const{translations:e}=r();return o`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${u(e,"Quality")}>
      ${Dt()}${Mt()}
    </media-quality-slider>
  `}function Ze({placement:e,portal:t,tooltip:s}){return a(()=>{const{viewType:n}=g(),{translations:i,menuPortal:l,noModal:d,menuGroup:m,smallWhen:c}=r(),S=y(()=>d()?gt(e):c()?null:gt(e)),p=y(()=>!c()&&m()==="bottom"&&n()==="video"?26:0),f=w(!1);dn();function x(){f.set(!0)}function h(){f.set(!1)}const P=o`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${a(S)}
        offset=${a(p)}
      >
        ${a(()=>f()?[Fn(),In(),Pn(),Vn()]:null)}
      </media-menu-items>
    `;return o`
      <media-menu class="vds-settings-menu vds-menu" @open=${x} @close=${h}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${u(i,"Settings")}
            >
              ${D("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${qt(s)?a(s):s}
          >
            ${u(i,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${He(l,P)}
      </media-menu>
    `})}function ae({orientation:e,tooltip:t}){return a(()=>{const{pointer:s,muted:n,canSetVolume:i}=g();if(s()==="coarse"&&!n())return null;if(!i())return ve({tooltip:t});const l=w(void 0);return o`
      <div class="vds-volume" ?data-active=${a(Is(l))} ${Ct(l.set)}>
        ${ve({tooltip:t})}
        <div class="vds-volume-popup">${zn({orientation:e})}</div>
      </div>
    `})}function zn({orientation:e}={}){const{translations:t}=r();return o`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${u(t,"Volume")}
      orientation=${Yt(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function oe(){const e=w(void 0),t=w(0),{thumbnails:s,translations:n,sliderChaptersMinWidth:i,disableTimeSlider:l,seekStep:d,noScrubGesture:m}=r(),c=u(n,"Seek"),S=a(l),p=a(()=>t()<i()),f=a(s);return ke(e,()=>{const x=e();x&&t.set(x.clientWidth)}),o`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${a(d)}
      ?disabled=${S}
      ?no-swipe-gesture=${a(m)}
      ${Ct(e.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${p}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          .src=${f}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function qn(){return o`
    <div class="vds-time-group">
      ${a(()=>{const{duration:e}=g();return e()?[o`<media-time class="vds-time" type="current"></media-time>`,o`<div class="vds-time-divider">/</div>`,o`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function jn(){return a(()=>{const{live:e,duration:t}=g();return e()?Qe():t()?o`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function Je(){return a(()=>{const{live:e}=g();return e()?Qe():qn()})}function ts(){return a(()=>{const{textTracks:e}=k(),{title:t,started:s}=g(),n=w(null);return De(e,"chapters",n.set),n()&&(s()||!t())?es():o`<media-title class="vds-chapter-title"></media-title>`})}function es(){return o`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}var ss=class extends en{async loadIcons(){const e=(await Bs(async()=>{const{icons:s}=await import("./vidstack-BpaoOxnh2-DylnTGBj.js");return{icons:s}},__vite__mapDeps([0,1]))).icons,t={};for(const s of Object.keys(e))t[s]=Js({name:s,paths:e[s]});return t}},V,Yn=(V=class extends Xt{},O(V,"props",{...Gt(V,V,"props"),when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576}),V);function Xn(){return[Zt(),se(),o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[fe({backward:!0,tooltip:"top start"}),At({tooltip:"top"}),fe({tooltip:"top"}),Zn(),oe(),jn(),ae({orientation:"vertical",tooltip:"top"}),te({tooltip:"top"}),ee(),Jt({tooltip:"top"}),Jn()]}
        </media-controls-group>
      </media-controls>
    `]}function Zn(){return a(()=>{let e=w(void 0),t=w(!1),s=k(),{title:n,started:i,currentTime:l,ended:d}=g(),{translations:m}=r(),c=Fs(e),S=()=>i()||l()>0;const p=()=>`${T(m,d()?"Replay":S()?"Continue":"Play")}: ${n()}`;_(()=>{var h;c()&&document.activeElement===document.body&&((h=s.player.el)==null||h.focus({preventScroll:!0}))});function f(){const h=e(),P=!!h&&!c()&&h.clientWidth<h.children[0].clientWidth;h&&Rs(h,"vds-marquee",P),t.set(P)}function x(){return o`
        <span class="vds-title-text">
          ${a(p)}${a(()=>S()?es():null)}
        </span>
      `}return ke(e,f),n()?o`
          <span class="vds-title" title=${a(p)} ${Ct(e.set)}>
            ${[x(),a(()=>t()&&!c()?x():null)]}
          </span>
        `:G()})}function Jn(){const e="top end";return[ze({tooltip:"top",placement:e,portal:!0}),Ze({tooltip:"top end",placement:e,portal:!0})]}var ht,pt,J,C,ns,is,as,os,ls,rs,ti=(ht=class extends Me(Oe,Yn){constructor(){super(...arguments);b(this,C);b(this,pt);b(this,J,w(!1))}onSetup(){this.forwardKeepAlive=!1,A(this,pt,k()),this.classList.add("vds-audio-layout"),$(this,C,as).call(this)}onConnect(){Ee("audio",()=>this.isMatch),$(this,C,is).call(this)}render(){return a($(this,C,ns).bind(this))}},pt=new WeakMap,J=new WeakMap,C=new WeakSet,ns=function(){return this.isMatch?Xn():null},is=function(){const{menuPortal:t}=r();_(()=>{if(!this.isMatch)return;const s=Ue(this,this.menuContainer,"vds-audio-layout",()=>this.isSmallLayout),n=s?[this,s]:[this];return(this.$props.customIcons()?new Be(n):new ss(n)).connect(),t.set(s),()=>{s.remove(),t.set(null)}})},as=function(){const{pointer:t}=v(this,pt).$state;_(()=>{t()==="coarse"&&_($(this,C,os).bind(this))})},os=function(){if(!v(this,J).call(this)){Nt(this,"pointerdown",$(this,C,ls).bind(this),{capture:!0});return}Nt(this,"pointerdown",t=>t.stopPropagation()),Nt(window,"pointerdown",$(this,C,rs).bind(this))},ls=function(t){const{target:s}=t;Vs(s)&&s.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),v(this,J).set(!0))},rs=function(){v(this,J).set(!1),this.removeAttribute("data-scrubbing")},O(ht,"tagName","media-audio-layout"),O(ht,"attrs",{smallWhen:{converter(t){return t!=="never"&&!!t}}}),ht);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=kt(class extends jt{constructor(){super(...arguments),this.key=W}render(e,t){return this.key=e,t}update(e,[t,s]){return t!==this.key&&(Us(e),this.key=t),s}});var F,si=(F=class extends Xt{},O(F,"props",{...Gt(F,F,"props"),when:({viewType:t})=>t==="video",smallWhen:({width:t,height:s})=>t<576||s<380}),F);function us(){return a(()=>{const e=k(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:s}=r();if(y(()=>t()||!s())())return null;const n=w(!1),{lastKeyboardAction:i}=e.$state;_(()=>{n.set(!!i());const p=setTimeout(()=>n.set(!1),500);return()=>{n.set(!1),window.clearTimeout(p)}});const l=y(()=>{var f;const p=(f=i())==null?void 0:f.action;return p&&n()?at(p):null}),d=y(()=>`vds-kb-action${n()?"":" hidden"}`),m=y(ni),c=y(()=>{const p=ii();return p?Es(p):null});function S(){const p=c();return p?o`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${p}</div>
        </div>
      `:null}return o`
      <div class=${a(d)} data-action=${a(l)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${a(m)}</div>
        </div>
        ${a(()=>ei(i(),S()))}
      </div>
    `})}function ni(){var n;const{$state:e}=k(),t=(n=e.lastKeyboardAction())==null?void 0:n.action,s=e.audioGain()??1;switch(t){case"toggleMuted":return e.muted()?"0%":$e(e.volume(),s);case"volumeUp":case"volumeDown":return $e(e.volume(),s);default:return""}}function $e(e,t){return`${Math.round(e*t*100)}%`}function ii(){var t;const{$state:e}=k();switch((t=e.lastKeyboardAction())==null?void 0:t.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function ai(){return[Zt(),ds(),_t(),us(),se(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        ${[li(),G(),o`<media-controls-group class="vds-controls-group"></media-controls-group>`,G(),o`
            <media-controls-group class="vds-controls-group">
              ${oe()}
            </media-controls-group>
          `,o`
            <media-controls-group class="vds-controls-group">
              ${[At({tooltip:"top start"}),ae({orientation:"horizontal",tooltip:"top"}),Je(),ts(),te({tooltip:"top"}),oi(),Jt({tooltip:"top"}),We({tooltip:"top"}),ee(),nn(),Ke({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function oi(){return a(()=>{const{menuGroup:e}=r();return e()==="bottom"?le():null})}function li(){return o`
    <media-controls-group class="vds-controls-group">
      ${a(()=>{const{menuGroup:e}=r();return e()==="top"?[G(),le()]:null})}
    </media-controls-group>
  `}function ri(){return[Zt(),ds(),_t(),se(),us(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Jt({tooltip:"top start"}),We({tooltip:"bottom start"}),G(),te({tooltip:"bottom"}),ee(),le(),ae({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${G()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[G(),At({tooltip:"top"}),G()]}
        </media-controls-group>

        ${G()}

        <media-controls-group class="vds-controls-group">
          ${[Je(),ts(),Ke({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${oe()}
        </media-controls-group>
      </media-controls>
    `,di()]}function ui(){return o`
    <div class="vds-load-container">
      ${[_t(),At({tooltip:"top"})]}
    </div>
  `}function di(){return a(()=>{const{duration:e}=g();return e()===0?null:o`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function _t(){return o`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function le(){const{menuGroup:e,smallWhen:t}=r(),s=()=>e()==="top"||t()?"bottom":"top",n=y(()=>`${s()} ${e()==="top"?"end":"center"}`),i=y(()=>`${s()} end`);return[ze({tooltip:n,placement:i,portal:!0}),Ze({tooltip:n,placement:i,portal:!0})]}function ds(){return a(()=>{const{noGestures:e}=r();return e()?null:o`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `})}var $t,tt,et,cs,ps,ci=($t=class extends Me(Oe,si){constructor(){super(...arguments);b(this,et);b(this,tt)}onSetup(){this.forwardKeepAlive=!1,A(this,tt,k()),this.classList.add("vds-video-layout")}onConnect(){Ee("video",()=>this.isMatch),$(this,et,cs).call(this)}render(){return a($(this,et,ps).bind(this))}},tt=new WeakMap,et=new WeakSet,cs=function(){const{menuPortal:t}=r();_(()=>{if(!this.isMatch)return;const s=Ue(this,this.menuContainer,"vds-video-layout",()=>this.isSmallLayout),n=s?[this,s]:[this];return(this.$props.customIcons()?new Be(n):new ss(n)).connect(),t.set(s),()=>{s.remove(),t.set(null)}})},ps=function(){const{load:t}=v(this,tt).$props,{canLoad:s,streamType:n,nativeControls:i}=v(this,tt).$state;return!i()&&this.isMatch?t()==="play"&&!s()?ui():n()==="unknown"?_t():this.isSmallLayout?ri():ai():null},O($t,"tagName","media-video-layout"),O($t,"attrs",{smallWhen:{converter(t){return t!=="never"&&!!t}}}),$t);Ie(ti);Ie(ci);
