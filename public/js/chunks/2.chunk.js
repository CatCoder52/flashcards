(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{222:function(e,t,r){"use strict";r.r(t);var a=r(3),n=r.n(a);function o(e,t,r,a,n,o,c){try{var i=e[o](c),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(a,n)}var c={props:{userData:Object},data:function(){return{dialog:!1}},methods:{remove:function(){var e,t=this;return(e=n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("profile/removeProfile",t.userData.id);case 3:t.$router.push({name:"home"}),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var t=this,r=arguments;return new Promise((function(a,n){var c=e.apply(t,r);function i(e){o(c,a,n,i,s,"next",e)}function s(e){o(c,a,n,i,s,"throw",e)}i(void 0)}))})()}}},i=r(12),s=r(14),u=r.n(s),l=r(127),d=r(208),v=r(15),p=r(565),f=r(567),h=Object(i.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-btn",e._g({attrs:{color:"red",dark:""}},a),[e._v("Remove account")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Do you really want remove your account?")]),e._v(" "),r("v-card-text",[e._v("Your account's data, decks and cards will be deleted.")]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Disagree")]),e._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.remove}},[e._v("Agree")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=h.exports;u()(h,{VBtn:l.a,VCard:d.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VDialog:p.a,VSpacer:f.a})}}]);
//# sourceMappingURL=2.chunk.js.map?id=d0a141f0d6ded4fc3eb8