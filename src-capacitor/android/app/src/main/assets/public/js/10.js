(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"5aa6":function(t,n,e){},b8e4:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",[e("notifications")],1)},o=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("header_vel",[t._v("\n    Notificaciones\n")]),e("notificationCard")],1)},c=[],s=e("d784d"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.notifications,(function(n,i){return e("q-slide-item",{key:i,staticClass:"notification__card"},[e("div",{class:1===n.type?"notification_content pending":"notification_content info"},[e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){return t.cardHandler(n)}}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{class:1===n.type?"text-orange":"text-blue",attrs:{name:1===n.type?" pending_actions ":"info",size:"3em"}})],1),e("q-item-section",[e("div",{staticClass:"text-h6 text-bold"},[t._v("\n            "+t._s(n.title)+"\n        ")]),t._v("\n          "+t._s(n.description)+"\n        ")])],1)],1)])})),1)},l=[],u={data:function(){return{}},computed:{notifications:{get:function(){return this.$store.getters["auth/notifications"]}}},methods:{cardHandler:function(t){this.$store.commit("auth/remove_notifications",t.id),axios.patch("/notifications/read/"+t.id).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.$router.push({name:t.url,params:{id:t.target_id}})}}},d=u,f=(e("f408"),e("2877")),p=e("de1d"),m=e("66e5"),_=e("4074"),v=e("0016"),h=e("714f"),b=e("eebe"),g=e.n(b),x=Object(f["a"])(d,r,l,!1,null,null,null),w=x.exports;g()(x,"components",{QSlideItem:p["a"],QItem:m["a"],QItemSection:_["a"],QIcon:v["a"]}),g()(x,"directives",{Ripple:h["a"]});var q={data:function(){return{}},components:{notificationCard:w,header_vel:s["a"]}},$=q,k=Object(f["a"])($,a,c,!1,null,null,null),Q=k.exports,y={components:{notifications:Q}},C=y,I=e("9989"),j=Object(f["a"])(C,i,o,!1,null,null,null);n["default"]=j.exports;g()(j,"components",{QPage:I["a"]})},f408:function(t,n,e){"use strict";e("5aa6")}}]);