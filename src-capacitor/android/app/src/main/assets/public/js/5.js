(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0851":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"bdg-black"},[n("signature")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("VueSignaturePad",{ref:"signaturePad",attrs:{id:"signature",width:"100%",height:"80vh",images:t.imgs,options:t.options}})],1)]),n("div",{staticClass:"q-mt-md"},[n("div",{staticClass:"row q-gutter-md justify-center"},[n("q-btn",{staticClass:"col-2",attrs:{outline:"",label:"limpiar",icon:"restore"},on:{click:t.undo}}),n("q-btn",{staticClass:"col-2",attrs:{outline:"",label:"guardar",icon:"save_alt"},on:{click:t.save}}),n("q-btn",{staticClass:"col-2",attrs:{outline:"",label:"Color picker",icon:"color_lens"}},[n("q-menu",[n("q-color",{model:{value:t.hex,callback:function(e){t.hex=e},expression:"hex"}})],1)],1)],1)]),n("div",{staticClass:"q-mt-md"},t._l(t.imgs,(function(t,e){return n("div",{key:e,staticClass:"row q-gutter-md justify-center"},[n("img",{staticStyle:{border:"thin silver solid"},attrs:{src:t}})])})),0)])},o=[],r={name:"MySignaturePad",computed:{options:function(){return{penColor:this.hex}}},data:function(){return{imgs:[],hex:"#000",file:null}},methods:{undo:function(){this.$refs.signaturePad.undoSignature()},save:function(){var t=this.$refs.signaturePad.saveSignature(),e=(t.isEmpty,t.data,this.$refs.signaturePad.signaturePad.canvas);e.toBlob((function(t){var e=new FormData;e.append("file",t),axios.post("/user/set_signature",e).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}),"image/png",1)}},mounted:function(){window.screen.orientation.lock("landscape")},beforeDestroy:function(){window.screen.orientation.unlock()}},c=r,l=(n("a8e5"),n("2877")),u=n("9c40"),d=n("4e73"),f=n("b498"),g=n("eebe"),m=n.n(g),p=Object(l["a"])(c,i,o,!1,null,null,null),v=p.exports;m()(p,"components",{QBtn:u["a"],QMenu:d["a"],QColor:f["a"]});var h={components:{signature:v}},b=h,w=n("9989"),C=Object(l["a"])(b,a,s,!1,null,null,null);e["default"]=C.exports;m()(C,"components",{QPage:w["a"]})},a8e5:function(t,e,n){"use strict";n("df91")},df91:function(t,e,n){}}]);