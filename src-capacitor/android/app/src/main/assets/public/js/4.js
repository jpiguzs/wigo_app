(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0845":function(t,e,n){},"8d53":function(t,e,n){},9559:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",[n("client")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header_vel",[t._v("\n    Clientes\n")]),n("q-btn",{attrs:{label:"crear",icon:"add"},on:{click:function(e){t.showModal=!t.showModal}}}),n("q-dialog",{staticClass:"flex flex-center",attrs:{persistent:"",maximized:t.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[n("supplierForm")],1),t.client.length>0?n("q-list",{attrs:{dark:"",bordered:"",separator:""}},t._l(t.client,(function(t,e){return n("supplierCard",{key:e,attrs:{client:t}})})),1):t._e()],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"  flex flex-center"},[n("q-card",{staticClass:"full-width "},[n("q-bar",[n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1),t.showCostForm?t._e():n("q-card-section",[n("div",{staticClass:"text-h6 text-primary"},[t._v("\n        "+t._s(t.client.id?"actualizar":"Crear nuevo")+" cliente\n      ")])]),n("q-card-section",[t.showCostForm?n("div",{staticClass:"text-h6 text-primary"},[t._v("\n        "+t._s(t.client.id?"actualizar":"Crear nuevo")+"  centro de costo\n      ")]):t._e()]),t.showCostForm?t._e():n("q-form",{staticClass:" q-gutter-md",on:{submit:t.store}},[n("div",[n("q-input",{attrs:{outlined:"",type:"text",label:"Nombre"},model:{value:t.client.name,callback:function(e){t.$set(t.client,"name",e)},expression:"client.name"}})],1),n("div",[n("q-checkbox",{attrs:{label:"Interno"},model:{value:t.client.internal,callback:function(e){t.$set(t.client,"internal",e)},expression:"client.internal"}})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 q-pa-sm"},[n("q-btn",{staticClass:"aboo_btn bg-green full-width",attrs:{label:t.client.id?"Actualizar":"guardar",loading:t.loading,type:"submit"}})],1),n("div",{staticClass:"col-6 q-pa-sm"},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"aboo_btn  bg-red-4 full-width",attrs:{label:"Cancelar",id:"close_form"}})],1)])]),n("q-card-section",[t.showCostForm?n("div",[n("q-input",{attrs:{outlined:"",type:"text",label:"Nombre"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 q-pa-sm"},[n("q-btn",{staticClass:"aboo_btn bg-green full-width",attrs:{label:"guardar"},on:{click:function(e){return t.addCostCenter()}}})],1),n("div",{staticClass:"col-6 q-pa-sm"},[n("q-btn",{staticClass:"aboo_btn  bg-red-4 full-width",attrs:{label:"Cancelar"},on:{click:function(e){t.showCostForm=!t.showCostForm}}})],1)])],1):t._e()]),n("q-card-section",{staticClass:"q-pa-none"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-10 bg-primary text-white text-center text-h6"},[t._v("\n            Centros de costo\n          ")]),n("div",{staticClass:"col-2 bg-primary text-white text-center text-h6"},[t.showCostForm?t._e():n("q-btn",{attrs:{icon:"add",color:"secondary"},on:{click:function(e){t.showCostForm=!t.showCostForm}}})],1),t.client.cost_center.length>0?n("q-list",{staticClass:"rounded-borders full-width",attrs:{bordered:""}},t._l(t.client.cost_center,(function(e,a){return n("q-expansion-item",{key:a,attrs:{"expand-separator":"",label:e.name}},[e.hasOwnProperty("activity")?n("q-card",[n("q-card-section",{staticClass:"text-center"},[t._v("\n              Actividades\n        ")]),e.activity.length>0?n("q-list",{staticClass:"rounded-borders full-width",attrs:{bordered:""}},t._l(e.activity,(function(e,a){return n("q-expansion-item",{key:a,attrs:{"expand-separator":"",label:e.description}},[e.demands.length>0?n("q-card",[n("q-card-section",{staticClass:"text-center"},[t._v("\n              Requisiciones\n        ")]),e.demands.length>0?n("q-list",{staticClass:"rounded-borders full-width",attrs:{bordered:""}},t._l(e.demands,(function(e,a){return n("q-expansion-item",{key:a,attrs:{"expand-separator":"",label:e.control_number}},[e.materials.length>0?n("q-card",[n("q-card-section",{staticClass:"text-center"},[t._v("\n              Materiales\n        ")])],1):t._e(),e.materials.length>0?n("q-list",{staticClass:"rounded-borders full-width",attrs:{bordered:""}},t._l(e.materials,(function(e,a){return n("q-expansion-item",{key:a,attrs:{"expand-separator":"",label:t.MaterialsLabel(e)}},[e.applicants_winner.length>0?n("q-card",[n("q-card-section",{staticClass:"text-center"},[t._v("\n              Proveedores\n        ")]),e.applicants_winner.length>0?n("q-list",{staticClass:"rounded-borders full-width",attrs:{bordered:""}},t._l(e.applicants_winner,(function(e,a){return n("q-expansion-item",{key:a,attrs:{"expand-separator":"",label:t.ApplicantLabel(e)}},[e.order.length>0?n("q-card",[n("q-card-section",{staticClass:"text-center"},[t._v("\n              Ordenes de compra\n        ")]),t._l(e.order,(function(e,a){return n("q-card-section",{key:a},[t._v("\n             nuemro de orden #00"+t._s(e.id)+", Status: "+t._s(!0===e.paid?"pagada":"Pendiente por pagar")+"\n        ")])}))],2):t._e()],1)})),1):t._e()],1):t._e()],1)})),1):t._e()],1)})),1):t._e()],1):t._e()],1)})),1):t._e()],1):t._e()],1)})),1):t._e()],1)])],1)],1)},l=[],c=(n("b0c0"),n("8d47")),d={name:"supplierForm",data:function(){return{loading:!1,name:null,showCostForm:!1}},computed:{},props:{client:{type:Object,default:function(){return{id:null,name:null,rif:null,internal:!1,cost_center:[]}}}},methods:{formated:c["a"],store:function(){this.client.name?this.client.id?this.update():this.create():this.$q.notify({message:"debe colocar un nombre",color:"red",position:"right"})},create:function(){var t=this;axios.post("/client/store",this.client).then((function(e){t.$q.notify({message:"Guardado con exitos",color:"green",position:"right"}),t.$root.$emit("client_refresh")})).catch((function(t){console.log(t)}))},update:function(){var t=this;axios.put("/client/update/"+this.client.id,this.client).then((function(e){t.$q.notify({message:"actualizado con exitos",color:"green",position:"right"}),t.$root.$emit("client_refresh")})).catch((function(t){console.log(t)}))},addCostCenter:function(){var t={name:this.name};this.client.cost_center.push(t),this.showCostForm=!1,this.name=null},MaterialsLabel:function(t){return t.name+" cantidad:"+t.quantity+" cantidad pendiente:"+t.pending_quantity},ApplicantLabel:function(t){return t.supplier.name+" cantidad: "+t.quantity+" precio: "+t.price}},mounted:function(){}},u=d,p=(n("d095"),n("2877")),m=n("f09f"),h=n("d847"),f=n("2c91"),b=n("9c40"),_=n("05c0"),q=n("a370"),v=n("0378"),w=n("27f9"),C=n("8f8e"),g=n("1c1c"),x=n("3b73"),y=n("7f67"),k=n("eebe"),F=n.n(k),$=Object(p["a"])(u,r,l,!1,null,null,null),Q=$.exports;F()($,"components",{QCard:m["a"],QBar:h["a"],QSpace:f["a"],QBtn:b["a"],QTooltip:_["a"],QCardSection:q["a"],QForm:v["a"],QInput:w["a"],QCheckbox:C["a"],QList:g["a"],QExpansionItem:x["a"]}),F()($,"directives",{ClosePopup:y["a"]});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"  item-vel full-width",attrs:{clickable:""}},[n("q-item-section",[t._v(t._s(t.client.name))]),n("q-btn",{attrs:{flat:"",dense:"",icon:"visibility"},on:{click:function(e){t.showView=!t.showView}}}),n("q-btn",{attrs:{flat:"",dense:"",icon:"edit"},on:{click:function(e){t.showForm=!t.showForm}}}),n("q-btn",{attrs:{flat:"",dense:"",icon:"delete"},on:{click:function(e){t.showDelete=!t.showDelete}}})],1),n("q-dialog",{staticClass:"flex flex-center",attrs:{persistent:"",maximized:t.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.showForm,callback:function(e){t.showForm=e},expression:"showForm"}},[n("supplierForm",{attrs:{client:t.client}})],1),n("q-dialog",{model:{value:t.showDelete,callback:function(e){t.showDelete=e},expression:"showDelete"}},[n("deleteModal",{attrs:{_id:t.client._id}})],1),n("q-dialog",{staticClass:"flex flex-center",attrs:{maximized:t.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.showView,callback:function(e){t.showView=e},expression:"showView"}},[n("Clientview",{attrs:{client:t.client}})],1)],1)},z=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("My component")])},L=[],D={data:function(){return{}}},P=D,j=Object(p["a"])(P,O,L,!1,null,null,null),E=j.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("q-card",{staticClass:"full-width full-height "},[n("q-bar",[n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1),n("div",{staticClass:"text-center text-h6"},[t._v("\n          "+t._s(t.client.name)+"\n        ")]),n("q-card-section",[t.showCostForm?n("div",[n("q-input",{attrs:{outlined:"",type:"text",label:"Nombre"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 q-pa-sm"},[n("q-btn",{staticClass:"aboo_btn bg-green full-width",attrs:{label:"guardar"},on:{click:function(e){return t.addCostCenter()}}})],1),n("div",{staticClass:"col-6 q-pa-sm"},[n("q-btn",{staticClass:"aboo_btn  bg-red-4 full-width",attrs:{label:"Cancelar"},on:{click:function(e){t.showCostForm=!t.showCostForm}}})],1)])],1):t._e()]),n("q-card-section",{staticClass:"q-pa-none"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 bg-primary text-white text-center text-h6"},[t._v("\n            Centros de costo\n          ")]),t.client.cost_center.length>0?n("q-list",{staticClass:"rounded-borders full-width",attrs:{bordered:""}},t._l(t.client.cost_center,(function(e,a){return n("q-expansion-item",{key:a,attrs:{"expand-separator":"",label:e.name}},[e.hasOwnProperty("activity")?n("q-card",[n("q-card-section",{staticClass:"text-center"},[t._v("\n              Actividades\n        ")]),e.activity.length>0?n("q-list",{staticClass:"rounded-borders full-width",attrs:{bordered:""}},t._l(e.activity,(function(e,a){return n("q-expansion-item",{key:a,attrs:{"expand-separator":"",label:e.description}},[e.demands.length>0?n("q-card",[n("q-card-section",{staticClass:"text-center"},[t._v("\n              Requisiciones\n        ")]),e.demands.length>0?n("q-list",{staticClass:"rounded-borders full-width",attrs:{bordered:""}},t._l(e.demands,(function(e,a){return n("q-expansion-item",{key:a,attrs:{"expand-separator":"",label:e.control_number}},[e.materials.length>0?n("q-card",[n("q-card-section",{staticClass:"text-center"},[t._v("\n              Materiales\n        ")])],1):t._e(),e.materials.length>0?n("q-list",{staticClass:"rounded-borders full-width",attrs:{bordered:""}},t._l(e.materials,(function(e,a){return n("q-expansion-item",{key:a,attrs:{"expand-separator":"",label:t.MaterialsLabel(e)}},[e.applicants_winner.length>0?n("q-card",[n("q-card-section",{staticClass:"text-center"},[t._v("\n              Proveedores\n        ")]),e.applicants_winner.length>0?n("q-list",{staticClass:"rounded-borders full-width",attrs:{bordered:""}},t._l(e.applicants_winner,(function(e,a){return n("q-expansion-item",{key:a,attrs:{"expand-separator":"",label:t.ApplicantLabel(e)}},[e.order.length>0?n("q-card",[n("q-card-section",{staticClass:"text-center"},[t._v("\n              Ordenes de compra\n        ")]),t._l(e.order,(function(e,a){return n("q-card-section",{key:a},[t._v("\n             numero de orden #00"+t._s(e.id)+", Status: "+t._s(!0===e.paid?"pagada":"Pendiente por pagar")+"\n        ")])}))],2):t._e()],1)})),1):t._e()],1):t._e()],1)})),1):t._e()],1)})),1):t._e()],1):t._e()],1)})),1):t._e()],1):t._e()],1)})),1):t._e()],1)])],1)],1)},I=[],N={name:"supplierForm",data:function(){return{loading:!1,name:null,showCostForm:!1}},computed:{},props:{client:{type:Object,default:function(){return{id:null,name:null,rif:null,cost_center:[]}}}},methods:{formated:c["a"],store:function(){this.client.name?this.client.id?this.update():this.create():this.$q.notify({message:"debe colocar un nombre",color:"red",position:"right"})},create:function(){var t=this;axios.post("/client/store",this.client).then((function(e){t.$q.notify({message:"Guardado con exitos",color:"green",position:"right"}),t.$root.$emit("client_refresh")})).catch((function(t){console.log(t)}))},update:function(){var t=this;axios.put("/client/update/"+this.client.id,this.client).then((function(e){t.$q.notify({message:"actualizado con exitos",color:"green",position:"right"}),t.$root.$emit("client_refresh")})).catch((function(t){console.log(t)}))},addCostCenter:function(){var t={name:this.name};this.client.cost_center.push(t),this.showCostForm=!1,this.name=null},MaterialsLabel:function(t){return t.name+" cantidad:"+t.quantity+" cantidad pendiente:"+t.pending_quantity},ApplicantLabel:function(t){return t.supplier.name+" cantidad: "+t.quantity+" precio: "+t.price}},mounted:function(){}},S=N,T=(n("c55b"),Object(p["a"])(S,A,I,!1,null,null,null)),B=T.exports;F()(T,"components",{QCard:m["a"],QBar:h["a"],QSpace:f["a"],QBtn:b["a"],QTooltip:_["a"],QCardSection:q["a"],QInput:w["a"],QList:g["a"],QExpansionItem:x["a"]}),F()(T,"directives",{ClosePopup:y["a"]});var V={data:function(){return{showForm:!1,showDelete:!1,maximizedToggle:!0,showView:!1}},components:{supplierForm:Q,deleteModal:E,Clientview:B},props:["client"],mounted:function(){var t=this;this.$root.$on("close_delete",(function(){t.showDelete=!1}))}},R=V,G=n("66e5"),J=n("4074"),H=n("24e8"),K=n("714f"),U=Object(p["a"])(R,M,z,!1,null,null,null),W=U.exports;F()(U,"components",{QItem:G["a"],QItemSection:J["a"],QBtn:b["a"],QDialog:H["a"]}),F()(U,"directives",{Ripple:K["a"]});var X=n("d784d"),Y={data:function(){return{showModal:!1,maximizedToggle:!0,client:[]}},components:{supplierForm:Q,supplierCard:W,header_vel:X["a"]},methods:{getClients:function(){var t=this;this.$q.loading.show(),axios.get("/client/index").then((function(e){t.$q.loading.hide(),console.log(e),t.client=e.data})).catch((function(e){console.log(e),t.$q.loading.hide()}))}},mounted:function(){var t=this;this.getClients(),this.$root.$on("client_refresh",(function(){t.getClients(),t.showModal=!1}))}},Z=Y,tt=Object(p["a"])(Z,s,o,!1,null,null,null),et=tt.exports;F()(tt,"components",{QBtn:b["a"],QDialog:H["a"],QList:g["a"]});var nt={components:{client:et}},at=nt,it=n("9989"),st=Object(p["a"])(at,a,i,!1,null,null,null);e["default"]=st.exports;F()(st,"components",{QPage:it["a"]})},c55b:function(t,e,n){"use strict";n("0845")},d095:function(t,e,n){"use strict";n("8d53")}}]);