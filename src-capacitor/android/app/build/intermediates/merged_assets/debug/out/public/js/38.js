(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{ab2c:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",[o("role")],1)},i=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("header_vel",[e._v("\r\n        Roles de usuarios\r\n    ")]),e.$permissions("roles.agregar")?o("q-btn",{attrs:{label:"crear",icon:"add"},on:{click:function(t){e.showModal=!e.showModal}}}):e._e(),o("q-dialog",{staticClass:"flex flex-center",attrs:{persistent:"",maximized:e.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[o("rolesForm")],1),e.roles.length>0?o("q-list",{attrs:{dark:"",bordered:"",separator:""}},e._l(e.roles,(function(e,t){return o("rolesCard",{key:t,attrs:{rol:e}})})),1):e._e()],1)},n=[],r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:" full-height flex flex-center"},[o("q-card",{staticClass:"full-width full-height"},[o("q-bar",[o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[e._v("Close")])],1)],1),o("q-card-section",[o("div",{staticClass:"text-h6 text-primary"},[e._v("\r\n                "+e._s(e.roles.id?"actualizar":"Crear nuevo Rol")+"\r\n            ")])]),o("q-card-section",{staticClass:"q-gutter-md"},[e.showAddCapabilies?e._e():o("q-form",{staticClass:" q-gutter-md",on:{submit:e.store}},[o("div",[o("q-input",{attrs:{outlined:"",type:"text",label:"Nombre Rol"},model:{value:e.roles.name,callback:function(t){e.$set(e.roles,"name",t)},expression:"roles.name"}})],1),o("div",{staticClass:"text-primary text-h6"},[e._v("\r\n                    Permisos\r\n                ")]),o("q-separator"),o("div",[o("q-virtual-scroll",{staticStyle:{"max-height":"300px"},attrs:{items:e.modules,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.item;t.index;return[o("div",{staticClass:"text-primary"},[e._v("\r\n                                "+e._s(s.name)+"\r\n                            ")]),e._l(s.value,(function(t,s){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s,attrs:{tag:"label"}},[o("q-item-section",{attrs:{avatar:""}},[o("q-checkbox",{attrs:{val:t.id},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}})],1),o("q-item-section",[o("q-item-label",[e._v(e._s(t.description))])],1)],1)})),o("q-separator")]}}],null,!1,2100716499)})],1),o("div",{staticClass:"row"},[o("div",{staticClass:"col-6 q-pa-sm"},[o("q-btn",{staticClass:"aboo_btn bg-green full-width",attrs:{label:e.roles.id?"Actualizar":"Guardar",loading:e.loading,type:"submit"}})],1),o("div",{staticClass:"col-6 q-pa-sm"},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"aboo_btn  bg-red-4 full-width",attrs:{label:"Cancelar",id:"close_form"}})],1)])],1),o("div",[e.showAddCapabilies?o("div",[o("q-input",{attrs:{outlined:"",dark:"",type:"text",label:"Nombre","label-color":"white"},model:{value:e.CapabilitieName,callback:function(t){e.CapabilitieName=t},expression:"CapabilitieName"}}),o("q-btn",{staticClass:"aboo_btn primary full-width",attrs:{label:"agregar"},on:{click:e.addCapablities}}),o("q-btn",{staticClass:"aboo_btn bg-red-4 full-width",attrs:{label:"Cancelar"},on:{click:function(t){e.showAddCapabilies=!e.showAddCapabilies}}})],1):e._e()])],1),o("div",{staticClass:"text-primary"})],1)],1)},l=[],c=o("278c"),d=o.n(c),u=(o("b0c0"),o("4fad"),o("b64b"),o("c740"),o("159b"),{name:"rolesForm",data:function(){return{loading:!1,showAddCapabilies:!1,CapabilitieName:null,modules:[],permission:[],selection:[]}},computed:{},props:{roles:{type:Object,default:function(){return{id:null,name:null,permissions:[]}}}},methods:{store:function(){var e=this;this.roles.name?this.roles.id?axios.put("roles/"+this.roles.id,{name:this.roles.name,permissions:this.selection}).then((function(t){e.$q.notify({message:"Guardado con exito",color:"green",position:"right"}),e.$root.$emit("close_form")})).catch((function(t){e.$q.notify({message:"Ha ocurrido un error",color:"red",position:"right"})})):axios.post("roles",{name:this.roles.name,permissions:this.selection}).then((function(t){e.$q.notify({message:"Guardado con exito",color:"green",position:"right"}),e.$root.$emit("roles_refresh")})).catch((function(t){e.$q.notify({message:"Ha ocurrido un error",color:"red",position:"right"})})):this.$q.notify({message:"debe colocar un nombre",color:"red",position:"right"})},create:function(){var e=this;axios.post("/roles",this.roles).then((function(t){e.$q.notify({message:"Guardado con exitos",color:"green",position:"right"}),e.$root.$emit("roles_refresh")})).catch((function(e){console.log(e)}))},update:function(){},addCapablities:function(){if(!this.CapabilitieName)return this.$q.notify({message:"coloque una descripcion",color:"red",position:"right"});var e={name:this.CapabilitieName};this.roles.permission.push(e),this.showAddCapabilies=!1,this.CapabilitieName=null},getModules:function(){var e=this;this.$q.loading.show(),axios.get("/permissions").then((function(t){e.$q.loading.hide(),console.log(t.data),e.modules=[];for(var o=0,s=Object.entries(t.data);o<s.length;o++){var i=d()(s[o],2),a=i[0],n=i[1];console.log(a);var r={name:a,value:n};e.modules.push(r)}})).catch((function(t){console.log(t),e.$q.loading.hide()}))},setPermissionToUpdate:function(){for(var e=this,t=Object.keys(this.roles.permission[0]),o=function(o){var s=e.permission.findIndex((function(e){return e[t[o]]})),i=Object.keys(e.roles.permission[0][t[o]]);e.permission[s][t[o]]=i},s=0;s<t.length;s++)o(s);console.log(this.permission)},orderPermissions:function(){var e=this;this.roles.permissions.forEach((function(t){e.selection.push(t.id)}))}},mounted:function(){this.getModules(),this.roles.id&&this.orderPermissions()}}),m=u,h=o("2877"),p=o("f09f"),f=o("d847"),b=o("2c91"),g=o("9c40"),v=o("05c0"),q=o("a370"),w=o("0378"),x=o("27f9"),C=o("eb85"),_=o("a12b"),$=o("66e5"),Q=o("4074"),k=o("8f8e"),y=o("0170"),F=o("7f67"),N=o("714f"),S=o("eebe"),M=o.n(S),j=Object(h["a"])(m,r,l,!1,null,null,null),D=j.exports;M()(j,"components",{QCard:p["a"],QBar:f["a"],QSpace:b["a"],QBtn:g["a"],QTooltip:v["a"],QCardSection:q["a"],QForm:w["a"],QInput:x["a"],QSeparator:C["a"],QVirtualScroll:_["a"],QItem:$["a"],QItemSection:Q["a"],QCheckbox:k["a"],QItemLabel:y["a"]}),M()(j,"directives",{ClosePopup:F["a"],Ripple:N["a"]});var O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"  item-vel full-width",attrs:{clickable:""}},[o("q-item-section",[e._v(e._s(e.rol.name))]),e.$permissions("roles.editar")?o("q-btn",{attrs:{flat:"",dense:"",icon:"edit"},on:{click:function(t){e.showForm=!e.showForm}}}):e._e(),e.$permissions("roles.eliminar")?o("q-btn",{attrs:{flat:"",dense:"",icon:"delete"},on:{click:function(t){e.showDelete=!e.showDelete}}}):e._e()],1),o("q-dialog",{staticClass:"flex flex-center",attrs:{persistent:"",maximized:e.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:e.showForm,callback:function(t){e.showForm=t},expression:"showForm"}},[o("rolesForm",{attrs:{roles:e.rol}})],1),o("q-dialog",{model:{value:e.showDelete,callback:function(t){e.showDelete=t},expression:"showDelete"}},[o("deleteModal",{attrs:{_id:e.rol.id}})],1)],1)},z=[],A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("q-card",{staticClass:"my-card"},[o("q-card-section",{staticClass:"bg-red-5 text-white text-center"},[o("div",{staticClass:"text-h6"},[e._v("¿Seguro quiere eliminar este Rol?")])]),o("q-separator"),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{staticClass:"text-blue",attrs:{flat:""},on:{click:function(t){return e.remove()}}},[e._v("Eliminar")]),o("q-btn",{staticClass:"text-red",attrs:{flat:""},on:{click:function(t){return e.$root.$emit("close_delete")}}},[e._v("Cancelar")])],1)],1)],1)},E=[],I={data:function(){return{}},props:{_id:String},methods:{remove:function(){var e=this;this.$q.loading.show(),axios.delete("/roles/"+this._id).then((function(t){e.$q.notify({message:"eliminado con exitos con exitos",color:"green",position:"right"}),e.$q.loading.hide(),e.$root.$emit("roles_refresh"),e.$root.$emit("close_delete")})).catch((function(t){console.log(t),e.$q.loading.hide()}))}}},P=I,R=o("4b7e"),T=Object(h["a"])(P,A,E,!1,null,null,null),B=T.exports;M()(T,"components",{QCard:p["a"],QCardSection:q["a"],QSeparator:C["a"],QCardActions:R["a"],QBtn:g["a"]});var G={data:function(){return{showForm:!1,showDelete:!1,maximizedToggle:!0}},components:{rolesForm:D,deleteModal:B},props:["rol"],mounted:function(){var e=this;this.$root.$on("close_delete",(function(){e.showDelete=!1})),this.$root.$on("close_form",(function(){e.showForm=!1}))}},H=G,J=o("24e8"),L=Object(h["a"])(H,O,z,!1,null,null,null),U=L.exports;M()(L,"components",{QItem:$["a"],QItemSection:Q["a"],QBtn:g["a"],QDialog:J["a"]}),M()(L,"directives",{Ripple:N["a"]});var V=o("d784d"),K={data:function(){return{showModal:!1,maximizedToggle:!0,roles:[]}},components:{rolesForm:D,rolesCard:U,header_vel:V["a"]},methods:{getroles:function(){var e=this;this.$q.loading.show(),axios.get("/roles").then((function(t){e.$q.loading.hide(),console.log(t),e.roles=t.data})).catch((function(t){console.log(t),e.$q.loading.hide()}))}},mounted:function(){var e=this;this.getroles(),this.$root.$on("roles_refresh",(function(){e.getroles(),e.showModal=!1}))}},W=K,X=o("1c1c"),Y=Object(h["a"])(W,a,n,!1,null,null,null),Z=Y.exports;M()(Y,"components",{QBtn:g["a"],QDialog:J["a"],QList:X["a"]});var ee={components:{role:Z}},te=ee,oe=o("9989"),se=Object(h["a"])(te,s,i,!1,null,null,null);t["default"]=se.exports;M()(se,"components",{QPage:oe["a"]})}}]);