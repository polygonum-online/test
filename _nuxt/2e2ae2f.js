(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{915:function(t,e,n){"use strict";n(31),n(73);var o=n(0).a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},o)}}}),r=n(66),c=n(10),l=n(16);e.a=Object(c.a)(o,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},960:function(t,e,n){t.exports=n.p+"img/dao.d52194d.png"},961:function(t,e,n){t.exports=n.p+"img/icetea.0143fab.png"},962:function(t,e,n){t.exports=n.p+"img/morningstar.1b1fbd7.png"},963:function(t,e,n){t.exports=n.p+"img/marciuscapital.d04e8bf.png"},964:function(t,e,n){t.exports=n.p+"img/idoresearch.3ae9a9e.png"},965:function(t,e,n){t.exports=n.p+"img/metrixcapital.793855f.png"},966:function(t,e,n){t.exports=n.p+"img/zbscapital.3718325.png"},967:function(t,e,n){t.exports=n.p+"img/raptor.5724a51.png"},968:function(t,e,n){t.exports=n.p+"img/kyros.1e01b1c.png"},969:function(t,e,n){t.exports=n.p+"img/reblock.1afc330.png"},970:function(t,e,n){t.exports=n.p+"img/111PG.5387abe.png"},971:function(t,e,n){t.exports=n.p+"img/moonboots.d50a7b0.png"},972:function(t,e,n){t.exports=n.p+"img/redkite.70cd040.png"},973:function(t,e,n){t.exports=n.p+"img/gamefi.0a93ad0.png"},974:function(t,e,n){t.exports=n.p+"img/skynet.677adeb.png"},975:function(t,e,n){t.exports=n.p+"img/coinmarketcap.f2ca2ed.png"},995:function(t,e,n){"use strict";n.r(e);var o=n(960),r=n.n(o),c=n(961),l=n.n(c),d=n(962),m=n.n(d),f=n(963),h=n.n(f),v=n(964),y=n.n(v),x=n(965),k=n.n(x),w=n(966),_=n.n(w),T=n(967),D=n.n(T),S=n(968),A=n.n(S),C=n(969),V=n.n(C),j=n(970),O=n.n(j),M=n(971),$=n.n(M),E=n(972),z=n.n(E),B=n(973),J=n.n(B),L=n(974),N=n.n(L),F=n(975),G=n.n(F),H={data:function(){return{items:[[r.a,"https://daomaker.com/"],[l.a,"https://icetea.io/",!0],[m.a,"https://morningstar.ventures/",!0],[h.a,"https://twitter.com/marciuscapital"],[y.a,"http://idoresearch.ventures",!0],[k.a,"https://metrix.capital/"],[_.a,"https://zbs.capital/"],[D.a,"https://raptorcapital.io/"],[A.a,"https://kyros.ventures/"],[V.a,"https://reblock.net/"],[z.a,"https://redkite.polkafoundry.com/"],[J.a,"https://gamefi.org/"],[$.a,"https://moonbootscapital.io/",!0],[O.a,"https://111pg.io/"],[N.a,"https://skynettrading.com/"],[G.a,"https://coinmarketcap.com/currencies/polygonum-online/ico/",!1,"dofollow"]]}}},I=n(28),P=n(43),R=n.n(P),K=n(988),Q=n(898),U=n(143),W=n(915),X=n(269),Y=n(989),component=Object(I.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h50 d-flex align-center"},[n("v-container",[n("v-row",t._l(t.items,(function(i,e){return n("v-col",{key:e,staticClass:"d-flex justify-center align-center",attrs:{cols:"12",lg:"3",md:"6",sm:"12"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[n("div",{staticClass:"p-relative"},[i[2]?n("svg-icon",{staticClass:"section-badge--advisor",attrs:{name:"advisor",width:"5rem",height:"2rem"}}):t._e(),t._v(" "),n("img",{attrs:{src:i[0],alt:""}}),t._v(" "),n("v-fade-transition",[n("a",{attrs:{href:i[1],target:"_blank",rel:i[3]||"nofollow"}},[o?n("v-overlay",{attrs:{absolute:"",color:"primary"}}):t._e()],1)])],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;R()(component,{VCol:K.a,VContainer:Q.a,VFadeTransition:U.c,VHover:W.a,VOverlay:X.a,VRow:Y.a})}}]);