(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"3a1d":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",[o("require")],1)},r=[],n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("header_vel",[e._v("\n   solicitudes\n")]),o("q-btn",{attrs:{label:"crear",icon:"add"},on:{click:function(t){e.showModal=!e.showModal}}}),o("q-dialog",{staticClass:"flex flex-center",model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[o("requireForm")],1),e.requireS.length>0?o("q-list",{attrs:{dark:"",bordered:"",separator:""}},e._l(e.requireS,(function(e,t){return o("requireSCard",{key:t,attrs:{requireS:e}})})),1):e._e()],1)},a=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("q-card",{staticClass:"full-width",staticStyle:{"min-width":"300px"}},[o("q-card-section",{staticClass:"flex flex-center"},[o("div",{staticClass:"text-h6 text-black"},[e._v("Nuevo")])]),o("q-card-section",[e.showAddProduct?e._e():o("q-form",{staticClass:"aboo_form q-gutter-sm "},[o("div",[o("q-input",{attrs:{outlined:"",type:"textarea",label:"descripcion","label-color":"black"},model:{value:e.request.description,callback:function(t){e.$set(e.request,"description",t)},expression:"request.description"}})],1),o("div",[o("q-input",{attrs:{outlined:"",type:"text",label:"lugar","label-color":"black"},model:{value:e.request.place,callback:function(t){e.$set(e.request,"place",t)},expression:"request.place"}})],1),o("div",[o("q-input",{attrs:{outlined:"",type:"text",label:"numero de control","label-color":"black"},model:{value:e.request.controlNumber,callback:function(t){e.$set(e.request,"controlNumber",t)},expression:"request.controlNumber"}})],1),o("div",[o("q-input",{attrs:{outlined:"",type:"text",label:"ods","label-color":"black"},model:{value:e.request.ods,callback:function(t){e.$set(e.request,"ods",t)},expression:"request.ods"}})],1),o("div",[o("q-input",{attrs:{outlined:"",type:"date",label:"fecha de proyecto","label-color":"black"},model:{value:e.request.poryectDate,callback:function(t){e.$set(e.request,"poryectDate",t)},expression:"request.poryectDate"}})],1),o("div",[o("q-select",{attrs:{outlined:"","options-dark":"","label-color":"black",options:e.discipline,"option-value":function(e){return Object(e)===e&&"name"in e?e.name:null},"option-label":function(e){return Object(e)===e&&"name"in e?e.name:"- Null -"},label:"disciplina","emit-value":"","map-options":""},model:{value:e.request.discipline,callback:function(t){e.$set(e.request,"discipline",t)},expression:"request.discipline"}})],1),o("div",{staticClass:"text-black"},[e._v("\n            Materiales "),o("q-btn",{staticClass:"bg-blue",attrs:{rounded:"",icon:"add"},on:{click:function(t){e.showAddProduct=!e.showAddProduct}}}),o("div",[e.request.products.length>0?o("q-list",{staticStyle:{"max-width":"318px"},attrs:{bordered:"",separator:""}},e._l(e.request.products,(function(t,i){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:i,attrs:{clickable:""}},[o("q-item-section",[e._v(" "+e._s(t.name?t.name:t[0].name)+", "+e._s(t.quantity?t.quantity:t[0].quantity))]),o("q-item-section",[o("q-btn",{attrs:{flat:"",icon:"delete"}})],1)],1)})),1):e._e()],1)],1),o("div")]),e.showAddProduct?o("div",[o("q-input",{attrs:{outlined:"",type:"text",label:"Descripcion"},model:{value:e.productName,callback:function(t){e.productName=t},expression:"productName"}}),o("q-input",{attrs:{outlined:"",type:"text",label:"Unidades"},model:{value:e.productNr,callback:function(t){e.productNr=t},expression:"productNr"}}),o("q-btn",{staticClass:"primary full-width",attrs:{label:"agregar",color:"primary"},on:{click:e.addProduct}}),o("q-btn",{staticClass:"btn-danger full-width",attrs:{label:"Cancelar",color:"red"},on:{click:function(t){e.showAddProduct=!e.showAddProduct}}})],1):e._e()],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{attrs:{flat:"",label:e.request._id?"Actualizar":"guardar",color:"green",loading:e.loading},on:{click:function(t){return e.store()}}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"cerrar",color:"primary"}})],1)],1)],1)},l=[],c=(o("a4d3"),o("e01a"),{data:function(){return{show:!1,password:null,password_verify:null,discipline:[],loading:!1,showAddProduct:!1,productName:null,productNr:null}},props:{request:{type:Object,default:function(){return{_id:null,description:null,controlNumber:null,ods:null,status:null,place:null,products:[],poryectDate:null,discipline:null}}}},methods:{getdiscipline:function(){var e=this;this.$q.loading.show(),axios.get("/discipline").then((function(t){e.$q.loading.hide(),console.log(t),e.discipline=t.data})).catch((function(t){console.log(t),e.$q.loading.hide()}))},store:function(){this.request.description?(this.loading=!0,this.request._id?this.update():this.create()):this.$q.notify({message:"debe colocar un nombre",color:"red",position:"right"})},create:function(){var e=this;axios.post("/request",this.request).then((function(t){e.$q.notify({message:"Guardado con exitos",color:"green",position:"right"}),e.$root.$emit("request_refresh")})).catch((function(e){console.log(e)}))},update:function(){var e=this;axios.put("/request/"+this.request._id,this.request).then((function(t){e.$q.notify({message:"actualizado con exitos",color:"green",position:"right"}),e.$root.$emit("request_refresh")})).catch((function(e){console.log(e)}))},addProduct:function(){if(!this.productName)return this.$q.notify({message:"coloque una descripcion",color:"red",position:"right"});var e={name:this.productName,quantity:this.productNr,complete:!1};this.request.products.push(e),this.showAddProduct=!1,this.productName=null,this.productNr=null}},mounted:function(){this.getdiscipline()}}),u=c,d=o("2877"),p=o("f09f"),h=o("a370"),q=o("0378"),f=o("27f9"),m=o("ddd8"),g=o("9c40"),b=o("1c1c"),v=o("66e5"),_=o("4074"),w=o("4b7e"),$=o("714f"),x=o("7f67"),S=o("eebe"),k=o.n(S),C=Object(d["a"])(u,s,l,!1,null,null,null),y=C.exports;k()(C,"components",{QCard:p["a"],QCardSection:h["a"],QForm:q["a"],QInput:f["a"],QSelect:m["a"],QBtn:g["a"],QList:b["a"],QItem:v["a"],QItemSection:_["a"],QCardActions:w["a"]}),k()(C,"directives",{Ripple:$["a"],ClosePopup:x["a"]});var Q=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"  item-vel full-width",attrs:{clickable:""}},[o("q-item-section",[e._v(e._s(e.requireS.controlNumber))]),o("q-item-section",[e._v(e._s(e.statusString(e.requireS.status)))]),o("q-btn",{attrs:{flat:"",dense:"",icon:"edit"},on:{click:function(t){e.showForm=!e.showForm}}}),o("q-btn",{attrs:{flat:"",dense:"",icon:"delete"},on:{click:function(t){e.showDelete=!e.showDelete}}}),o("q-btn",{attrs:{flat:"",dense:"",icon:"visibility"},on:{click:function(t){e.showView=!e.showView}}})],1),o("q-dialog",{attrs:{persistent:""},model:{value:e.showForm,callback:function(t){e.showForm=t},expression:"showForm"}},[o("requireSForm",{attrs:{requireS:e.requireS}})],1),o("q-dialog",{model:{value:e.showDelete,callback:function(t){e.showDelete=t},expression:"showDelete"}},[o("deleteModal",{attrs:{_id:e.requireS._id}})],1),o("q-dialog",{model:{value:e.showView,callback:function(t){e.showView=t},expression:"showView"}},[o("requireSView",{attrs:{requireS:e.requireS}})],1)],1)},N=[],j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("q-card",{staticClass:"my-card"},[o("q-card-section",{staticClass:"bg-red-5 text-white text-center"},[o("div",{staticClass:"text-h6"},[e._v("¿Seguro quiere eliminar este Modulo?")])]),o("q-separator"),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{staticClass:"text-blue",attrs:{flat:""},on:{click:function(t){return e.remove()}}},[e._v("Eliminar")]),o("q-btn",{staticClass:"text-red",attrs:{flat:""},on:{click:function(t){return e.$root.$emit("close_delete")}}},[e._v("Cancelar")])],1)],1)],1)},M=[],D={data:function(){return{}},props:{_id:String},methods:{remove:function(){var e=this;this.$q.loading.show(),axios.delete("/require/"+this._id).then((function(t){e.$q.notify({message:"eliminado con exitos con exitos",color:"green",position:"right"}),e.$q.loading.hide(),e.$root.$emit("require_refresh"),e.$root.$emit("close_delete")})).catch((function(t){console.log(t),e.$q.loading.hide()}))}}},A=D,P=o("eb85"),F=Object(d["a"])(A,j,M,!1,null,null,null),O=F.exports;k()(F,"components",{QCard:p["a"],QCardSection:h["a"],QSeparator:P["a"],QCardActions:w["a"],QBtn:g["a"]});var V=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("q-card",{ref:e.requireS._id,staticClass:"bg-white"},[o("q-card-section",{staticClass:"flex flex-center bg-blue"},[e._v("\n        \n                Numero de control: "+e._s(e.requireS.controlNumber)+"\n        ")]),o("q-card-section",{staticClass:"text-blue"},[e._v("\n              status: "+e._s(e.statusString(e.requireS.status))+"\n        ")]),o("q-card-section",{staticClass:"text-blue"},[o("table",{staticClass:"full-width"},[o("tr",[o("th",[e._v("Materiales")]),o("th",[e._v("Unidades")]),o("th",[e._v("consegido")])]),e._l(e.requireS.products[0],(function(t,i){return e.requireS.products.length>0?o("tr",{key:i},[o("td",[e._v(" "+e._s(t.name)+"  ")]),o("td",[e._v(" "+e._s(t.quantity)+" ")]),o("td",[o("q-checkbox",{model:{value:t.complete,callback:function(o){e.$set(t,"complete",o)},expression:"item.complete"}})],1)]):e._e()}))],2)]),o("q-card-actions",[1===e.requireS.status||null===e.requireS.status?o("q-btn",{staticClass:"bg-green full-width",attrs:{label:"actulizar"},on:{click:function(t){return e.aprove()}}}):e._e()],1)],1)],1)},E=[],z=(o("4de4"),o("8baf")),I=o("c0e9"),B=o.n(I),L=o("bc3a"),R=o.n(L),U={data:function(){return{}},props:["requireS"],methods:{statusString:function(e){return 1===e?"Meteriales no completos":null===e?"Materiales no completos":2===e?"materiales completados":3===e?"Aprobado con requesicion creada":4===e?"trabajo en ejecucion":5===e?"trabajo culmindao":void 0},aprove:function(){var e=this,t=this.requireS.products[0].filter((function(e){return!0===e.complete}));t.length===this.requireS.products[0].length&&(this.requireS.status=2),console.log(t),R.a.put("/require/"+this.requireS._id,this.requireS).then((function(t){console.log(t),e.$q.loading.hide(),e.$q.notify({message:"actualizado con exitos",color:"green",position:"right"}),e.$root.$emit("require_refresh")})).catch((function(t){console.log(t),e.$q.loading.hide()}))},requireProdects:function(){var e=this;this.$q.loading.show(),R.a.post("/require",this.requireS).then((function(t){console.log(t),R.a.patch("/require/"+e.requireS._id,{status:3}).then((function(t){console.log(t),e.$q.loading.hide(),e.$q.notify({message:"requiscion creada  con exitos",color:"green",position:"right"}),e.$root.$emit("require_refresh")})).catch((function(t){console.log(t),e.$q.loading.hide()}))})).catch((function(t){console.log(t),e.$q.loading.hide()}))},download:function(){},downloadWithCSS:function(){var e=new z["a"],t=(this.$refs[this.requireS._id].$el.offsetWidth,this.$refs[this.requireS._id].$el.offsetHeight,document.createElement("canvas"));console.log(this.$refs[this.requireS._id].$el),B()(this.$refs[this.requireS._id].$el,{canvas:t,scale:1}).then((function(o){console.log(t);var i=o.toDataURL("image/jpeg");console.log(i),e.addImage(i,"PNG",10,10),e.save("sample.pdf")}))}}},G=U,J=o("8f8e"),T=Object(d["a"])(G,V,E,!1,null,null,null),W=T.exports;k()(T,"components",{QCard:p["a"],QCardSection:h["a"],QCheckbox:J["a"],QCardActions:w["a"],QBtn:g["a"]});var H={data:function(){return{showForm:!1,showDelete:!1,maximizedToggle:!0,showView:!1}},components:{requireSForm:y,deleteModal:O,requireSView:W},props:["requireS"],computed:{},mounted:function(){var e=this;this.$root.$on("close_delete",(function(){e.showDelete=!1})),this.$root.$on("requireS_refresh",(function(){e.showView=!1}))},methods:{statusString:function(e){return 1===e||null===e?"Materiales no completos":2===e?"Materiales completos":3===e?"Aprobado con requesicion creada":4===e?"trabajo en ejecucion":5===e?"trabajo culmindao":void 0}}},K=H,X=o("24e8"),Y=Object(d["a"])(K,Q,N,!1,null,null,null),Z=Y.exports;k()(Y,"components",{QItem:v["a"],QItemSection:_["a"],QBtn:g["a"],QDialog:X["a"]}),k()(Y,"directives",{Ripple:$["a"]});var ee=o("d784d"),te={data:function(){return{showModal:!1,maximizedToggle:!0,requireS:[]}},components:{requireSForm:y,requireSCard:Z,header_vel:ee["a"]},methods:{getrequire:function(){var e=this;this.$q.loading.show(),axios.get("/require").then((function(t){e.$q.loading.hide(),console.log(t),e.requireS=t.data})).catch((function(t){console.log(t),e.$q.loading.hide()}))}},mounted:function(){var e=this;this.getrequire(),this.$root.$on("require_refresh",(function(){e.getrequire(),e.showModal=!1}))}},oe=te,ie=Object(d["a"])(oe,n,a,!1,null,null,null),re=ie.exports;k()(ie,"components",{QBtn:g["a"],QDialog:X["a"],QList:b["a"]});var ne={components:{require:re}},ae=ne,se=o("9989"),le=Object(d["a"])(ae,i,r,!1,null,null,null);t["default"]=le.exports;k()(le,"components",{QPage:se["a"]})}}]);