(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"1f9a":function(e,t,a){"use strict";a.r(t);var s,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("removeDemand")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("header_vel",[e._v("\r\n        Material por Requisicion\r\n    ")]),a("q-btn",{attrs:{label:"Buscar",icon:"search"},on:{click:function(t){e.showModal=!e.showModal}}}),a("q-dialog",{staticClass:"flex flex-center",attrs:{persistent:""},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[a("searchForm")],1),a("div",{staticClass:"q-mb-md"}),a("q-list",{staticClass:"text-black",attrs:{dark:"",bordered:"",separator:""}},e._l(e.search,(function(e,t){return a("searchCard",{key:t,attrs:{search:e}})})),1)],1)},r=[],l=a("c973"),c=a.n(l),u=(a("96cf"),a("ac1f"),a("841c"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-expansion-item",{attrs:{"expand-separator":"","header-class":"bg-grey-13 text-white q-mt-sm"},scopedSlots:e._u([{key:"header",fn:function(){return[a("q-item-section",[a("q-item-label",{staticClass:"text-black"},[e._v("Numero de Control : "),a("strong",[e._v(e._s(e.search.control_number))])]),a("q-item-label",{staticClass:"text-black"},[e._v("Descripcion : "+e._s(e.search.description))]),a("q-item-label",{staticClass:"text-black"},[e._v("Solicitado por : "),a("span",{},[a("strong",[e._v(" "+e._s(e.search.request_user.name)+" "+e._s(e.search.request_user.last_name)+" ")])])]),a("q-item-label",{staticClass:"text-black"},[e._v("Estado :\r\n                    "),a("q-badge",{staticClass:"text-black",attrs:{color:e.stepColor(e.search.step_id),label:e.search.step.step}})],1),a("q-item-label",{staticClass:"text-black"},[e._v("Fecha :"),a("span",{},[a("strong",[e._v(" "+e._s(e._f("formatDate")(e.search.created_at))+" ")])])]),a("q-item-label",{staticClass:"text-black"},[e._v("Hora :"),a("span",{},[a("strong",[e._v(" "+e._s(e._f("formatTime")(e.search.created_at))+" ")])])])],1)]},proxy:!0}])},[a("q-card",[a("q-card-section",[a("q-table",{attrs:{title:"Lista Materiales",data:e.rows,columns:e.columns,"row-key":"materialId","no-data-label":"Sin Resultado",separator:"vertical",selection:"multiple",selected:e.selected},on:{"update:selected":function(t){e.selected=t}},scopedSlots:e._u([{key:"body-cell-quantityInventory",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-badge",{attrs:{color:e.quantityColor(t.row.quantityInventory)}},[a("div",{staticClass:"my-table-details text-black "},[e._v("\r\n                                    "+e._s(t.row.quantityInventory)+"\r\n                                ")])])],1)]}}])}),3!=e.search.step_id&&1==e.showBtnRetirar?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 q-pa-sm"},[a("q-btn",{staticClass:"aboo_btn bg-green full-width",attrs:{label:"Retirar"},on:{click:function(t){return e.ModalQuantity()}}})],1)]):e._e()],1)],1)],1),a("q-dialog",{staticClass:"flex flex-center",attrs:{persistent:"",maximized:e.maximizedToggle},model:{value:e.showModalQuantity,callback:function(t){e.showModalQuantity=t},expression:"showModalQuantity"}},[a("q-card",{staticClass:"modal-card"},[a("q-card-section",{staticClass:"bg-primary text-white"},[a("div",{staticClass:"text-subtitle2"},[e._v("Materiales por Retirar")])]),a("q-separator"),a("q-card-section",[a("q-form",{staticClass:"aboo_form q-gutter-sm"},[a("q-select",{attrs:{clearable:"","bg-color":"white",outlined:"",options:e.options,"option-value":function(e){return Object(e)===e&&"id"in e?e.id:null},"option-label":function(e){return Object(e)===e&&"name"in e?e.name:""},"emit-value":"","map-options":"",label:"Entrego a:"},model:{value:e.optionValue,callback:function(t){e.optionValue=t},expression:"optionValue"}}),e.showInterno?a("div",[a("div"),a("div",[a("q-input",{attrs:{disable:"",type:"text",label:"Nombre","label-color":"black"},model:{value:e.nameInterno,callback:function(t){e.nameInterno=t},expression:"nameInterno"}})],1),a("div",[a("q-input",{attrs:{disable:"",type:"text",label:"Apellido","label-color":"black"},model:{value:e.last_nameInterno,callback:function(t){e.last_nameInterno=t},expression:"last_nameInterno"}})],1)]):e._e(),e.showExterno?a("div",[a("div",[a("q-input",{attrs:{type:"text",label:"Nombre",hint:"Retiro del Material","label-color":"black"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",[a("q-input",{attrs:{type:"text",label:"Apellido",hint:"Retiro del Material","label-color":"black"},model:{value:e.last_name,callback:function(t){e.last_name=t},expression:"last_name"}})],1),a("div",[a("q-input",{attrs:{type:"text",label:"Cedula",hint:"Retiro del Material","label-color":"black"},model:{value:e.cedula,callback:function(t){e.cedula=t},expression:"cedula"}})],1)]):e._e(),a("div",[a("strong",[e._v("Responsable : "+e._s(e.user.name)+" "+e._s(e.user.last_name))])])],1)],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("q-checkbox",{attrs:{color:"secondary",label:"Todos","true-value":"si","false-value":"no"},model:{value:e.allQuantity,callback:function(t){e.allQuantity=t},expression:"allQuantity"}})],1)]),a("form",{on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.saveDemandMaterial(t)}}},[e._l(e.selected,(function(t,s){return a("q-card-section",{key:s},[a("div",{staticClass:"text-h6 text-primary"},[a("q-input",{ref:"quantityInput",refInFor:!0,attrs:{label:t.material,hint:"Cant : "+t.quantity,"stack-label":"",rules:[function(e){return!!e||"* Obligatorio"},function(e){return e<=t.quantity||"La cantidad debe ser menor o igual que "+t.quantity}],disable:e.disable},model:{value:t.cantSelected,callback:function(a){e.$set(t,"cantSelected",a)},expression:"material.cantSelected"}})],1)])})),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 q-pa-sm"},[a("q-btn",{staticClass:"aboo_btn bg-green full-width",attrs:{label:"Entregar",type:"submit"}})],1),a("div",{staticClass:"col-6 q-pa-sm"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"aboo_btn  bg-red-4 full-width",attrs:{label:"Cancelar"}})],1)])],2)],1)],1),a("q-dialog",{staticClass:"flex flex-center",attrs:{persistent:""},model:{value:e.showModalPassword,callback:function(t){e.showModalPassword=t},expression:"showModalPassword"}},[a("q-card",{staticClass:"modal-card"},[a("q-card-section",[a("div",{staticClass:"text--primary text-center"},[e._v("\r\n                    Ingrese su ultimo 4 digito de su contrasena\r\n                ")]),a("q-input",{attrs:{standout:"text-white",filled:"",type:e.isPwd?"password":"text",hint:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 q-pa-sm"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"aboo_btn bg-green full-width",attrs:{label:"Autorizar"}})],1),a("div",{staticClass:"col-6 q-pa-sm"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"aboo_btn  bg-red-4 full-width",attrs:{label:"Rechazar"}})],1)])],1)],1)],1),a("q-dialog",{staticClass:"flex flex-center",attrs:{persistent:""},model:{value:e.showDeliveryNote,callback:function(t){e.showDeliveryNote=t},expression:"showDeliveryNote"}},[a("q-card",{staticClass:"modal-card"},[a("q-card-section",[a("div",{staticClass:"text--primary text-center"},[e._v("\r\n                    Lista de Materiales Entregados\r\n                ")]),e._l(e.search.delivery_note,(function(t,s){return a("q-card-section",{key:s},[a("div",{staticClass:"text-h6 text-primary"},[a("q-input",{attrs:{label:e.searchMaterial(t.material_id),"stack-label":"",readonly:""},model:{value:t.quantity,callback:function(a){e.$set(t,"quantity",a)},expression:"note.quantity"}})],1),a("small",[a("strong",[e._v(" "+e._s(e._f("formatDate")(t.created_at))+" / "+e._s(e._f("formatTime")(t.created_at))+" ")])])])})),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 q-pa-sm"}),a("div",{staticClass:"col-6 q-pa-sm"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"aboo_btn  bg-red-4 full-width",attrs:{label:"cerrar"}})],1)])],2)],1)],1),a("q-dialog",{staticClass:"flex flex-center",attrs:{persistent:"",maximized:e.maximizedToggle},model:{value:e.showNotaEntrega,callback:function(t){e.showNotaEntrega=t},expression:"showNotaEntrega"}},[a("q-card",{staticClass:"modal-card"},[a("q-card-section",{staticClass:"bg-primary text-white"},[a("div",{staticClass:"text-subtitle2"},[e._v("Nota de Entrega")])]),a("q-separator"),a("q-card-section",[a("q-form",{staticClass:"aboo_form q-gutter-sm"},[a("div",[a("strong",[e._v("Yo: "+e._s(e.user.name)+" "+e._s(e.user.last_name)+" entrego a:")])]),e.showInterno?a("div",[a("div",[a("q-select",{attrs:{clearable:"","bg-color":"white",outlined:"",options:e.userFilter,"option-value":function(e){return Object(e)===e&&"id"in e?e.id:null},"option-label":function(e){return Object(e)===e&&"name"in e?e.name+" "+e.last_name:""},"use-input":"",label:"Nombre y Apellido",readonly:""},on:{filter:e.filter_user},scopedSlots:e._u([{key:"no-option",fn:function(){return[a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"text-grey"},[e._v("\r\n                                    no hay resultados\r\n                                    ")])],1)]},proxy:!0}],null,!1,1753278141),model:{value:e.userSeleted,callback:function(t){e.userSeleted=t},expression:"userSeleted"}})],1)]):e._e(),e.showExterno?a("div",[a("div",[a("q-input",{attrs:{type:"text",label:"Nombre","label-color":"black",readonly:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",[a("q-input",{attrs:{type:"text",label:"Apellido","label-color":"black",readonly:""},model:{value:e.last_name,callback:function(t){e.last_name=t},expression:"last_name"}})],1),a("div",[a("q-input",{attrs:{type:"text",label:"Apellido","label-color":"black",readonly:""},model:{value:e.cedula,callback:function(t){e.cedula=t},expression:"cedula"}})],1)]):e._e(),a("div",[a("strong",[e._v("los siguientes materiales: ")])])])],1),a("form",[e._l(e.selected,(function(t,s){return a("q-card-section",{key:s},[a("div",{staticClass:"text-h6 text-primary"},[a("q-input",{ref:"quantityInput",refInFor:!0,attrs:{label:t.material,hint:"Cant : "+t.quantity,"stack-label":"",rules:[function(e){return!!e||"* Obligatorio"},function(e){return e<=t.quantity||"La cantidad debe ser menor o igual que "+t.quantity}],disable:!0},model:{value:t.cantSelected,callback:function(a){e.$set(t,"cantSelected",a)},expression:"material.cantSelected"}})],1)])})),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 q-pa-sm"},[a("q-btn",{staticClass:"aboo_btn  bg-green full-width",attrs:{label:"Finalizar"},on:{click:function(t){return e.reset()}}})],1)])],2)],1)],1)],1)}),d=[],m=a("9523"),h=a.n(m),p=(a("1276"),a("159b"),a("4de4"),a("b0c0"),a("bd4c")),b=a("cf46"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-card-section",[a("div",{staticClass:"text-h6 text-primary"},[e._v("\n        "+e._s(" Buscar  estamos aquiiii")+"\n      ")])])],1)},v=[],q={data:function(){return{}},props:["material"],methods:{},mounted:function(){console.log("Material Selected",this.material)}},y=q,g=a("2877"),_=a("a370"),w=a("eebe"),x=a.n(w),C=Object(g["a"])(y,f,v,!1,null,null,null),k=C.exports;x()(C,"components",{QCardSection:_["a"]});var I=(s={name:"searchCard",data:function(){return{disable:!1,userSeleted:"",userFilter:[],name:"",last_name:"",cedula:"",nameInterno:"",last_nameInterno:"",maximizedToggle:!0,showForm:!1,showModalPassword:!1,showModalQuantity:!1,showDelete:!1,showDeliveryNote:!1,showIconDeliveryNote:!1,showNotaEntrega:!1,fecha:"",rows:[],columns:[],password:"",showModal:!1,isPwd:!0,selected:[],userResponsable:[],filter:"",allQuantity:"no",quantitySeleted:"",options:[{id:1,name:"Interno"},{id:2,name:"Externo"}],optionValue:"",showInterno:!1,showExterno:!1,showBtnRetirar:!1}},components:{tabla:b["a"],materialQuantity:k},props:["search"],computed:{user:{get:function(){return this.$store.getters["auth/user"]}},users:{get:function(){return this.$store.getters["users/users"]}}},filters:{formatDate:function(e){var t=e.split("T"),a=t[0].split("-"),s=new Date(a[0],a[1],a[2]);return p["a"].formatDate(s,"DD-MM-YYYY")},formatTime:function(e){var t=e.split("T"),a=t[1].split(":"),s=new Date(a[0],a[1]);return p["a"].formatDate(s,"hh:mm:ss A")}},watch:{allQuantity:function(e,t){"si"==e?(console.log(this.selected),this.disable=!0,this.selected.forEach((function(e){e.quantityInventory<e.quantity?e.cantSelected=e.quantityInventory:e.cantSelected=e.quantityTotal-e.quantitySeleted}))):(this.disable=!1,this.selected.forEach((function(e){e.cantSelected=0})))},optionValue:function(e,t){switch(e){case 1:this.showInterno=!0,this.showExterno=!1;break;case 2:this.showInterno=!1,this.showExterno=!0;break}}}},h()(s,"components",{}),h()(s,"methods",{getUsers:function(){var e=this;axios.get("user/users").then((function(t){e.userFilter=t.data})).catch((function(e){console.log(e)}))},filter_user:function(e,t,a){var s=this;e.length<2?a():t((function(){var t=e.toLowerCase();s.userFilter=s.users.filter((function(e){return e.name.toLowerCase().indexOf(t)>-1}))}))},statusColor:function(e){var t="";switch(e){case 1:t="lime-6";break;case 2:t="teal-6";break;case 3:t="orange-6";break;case 4:t="green-6";break;case 5:t="yellow";break;case 6:t="deep-orange-6";break;case 7:t="positive";break}return t},stepColor:function(e){var t="";switch(e){case 1:t="yellow";break;case 2:t="indigo-5";break;case 3:t="positive";break;case 4:t="teal-6";break}return t},quantityColor:function(e){var t="";return 0==e?t="red":e>=1&&e<=3?t="yellow":e>=4&&(t="positive"),t},columRow:function(){this.columns=[{name:"material",label:"Materiales",align:"center",field:"material",sortable:!0},{name:"um",label:"UM",align:"center",field:"um",sortable:!0},{name:"quantityInventory",label:"Cantidad Reservada",align:"center",field:"quantityInventory",sortable:!0},{name:"quantity",label:"Por Retirar",align:"center",field:"quantity",sortable:!0},{name:"quantitySeleted",label:"Retirado",align:"center",field:"quantitySeleted",sortable:!0}];var e=this;this.search.materials.forEach((function(t){var a={materialId:t.id,demandId:e.search.id,step:e.search.step.step,material:t.name,um:t.measure.measure,quantityInventory:null==t.inventory?0:t.inventory.block_stock,quantity:t.quantity-t.quantity_selected,quantitySeleted:t.quantity_selected,statuMaterialId:t.status_id,statuMaterial:t.status.name,cantSelected:0,inventoryId:null==t.inventory?0:t.inventory.id,quantityTotal:t.quantity};e.rows.push(a),null!=t.inventory&&t.inventory.block_stock>0&&(e.showBtnRetirar=!0),t.quantity==t.quantity_selected&&e.selected.push(a)}))},ModalQuantity:function(){if(0==this.selected.length)this.$q.notify({message:"Debe seleccionar un material ",color:"red",position:"right"});else{var e=0;this.selected.forEach((function(t){t.quantityInventory>0&&e++})),e===this.selected.length?this.showModalQuantity=!0:this.$q.notify({message:"Selecciones los productos con Stock Disponible",color:"red",position:"right"})}},searchMaterial:function(e){var t;return t=this.search.materials.filter((function(t){return t.id==e})),t[0].name},saveDemandMaterial:function(){var e=this,t=0;this.$refs.quantityInput.forEach((function(e){e.validate()&&t++}));for(var a=0,s=0;s<this.selected.length;s++){if(parseInt(this.$refs.quantityInput[s].value)>this.selected[s].quantity){this.$q.notify({message:"Material que desea retirar supera el que establecio ",color:"red",position:"right"});break}a++,this.selected[s].quantitySeleted=parseInt(this.$refs.quantityInput[s].value)+parseInt(this.selected[s].quantitySeleted),this.selected[s].quantityInventory=parseInt(this.selected[s].quantityInventory)-parseInt(this.$refs.quantityInput[s].value)}this.$refs.quantityInput.length===t&&this.selected.length===a&&(this.responsable(),this.$q.loading.show(),this.$store.dispatch("demands/saveDemandMaterial",[this.userResponsable,this.selected]).then((function(t){e.$q.notify({message:"Material retirado con exitos",color:"green",position:"right"}),e.$q.loading.hide(),e.showModalQuantity=!1,e.showNotaEntrega=!0})).catch((function(e){console.log(e)})))},reset:function(){this.showNotaEntrega=!1,this.showInterno=!1,this.showExterno=!1,this.optionValue="",this.selected.forEach((function(e){e.cantSelected=0})),this.$root.$emit("inventory_refresh")},responsable:function(){var e={id:1==this.showInterno?this.userSeleted.id:0,name:1==this.showInterno?this.userSeleted.name:this.name,last_name:1==this.showInterno?this.userSeleted.last_name:this.last_name,cedula:1==this.showInterno?0:this.cedula,user_id:this.user.id,tipo:1==this.showInterno?1:2};this.userResponsable.push(e)},cargarSelect:function(){this.optionValue=1,this.nameInterno=this.search.request_user.name,this.last_nameInterno=this.search.request_user.last_name}}),h()(s,"mounted",(function(){var e=this;console.log("Demands",this.search),this.$store.dispatch("users/getUsers"),this.cargarSelect(),this.columRow(),this.getUsers(),this.$root.$on("close_delete",(function(){e.showDelete=!1})),this.$root.$on("updateDone",(function(){e.showForm=!1,e.$root.$emit("users_refresh")}))})),s),$=I,Q=(a("dc31"),a("3b73")),S=a("4074"),M=a("0170"),D=a("58a81"),E=a("f09f"),N=a("eaac"),R=a("9c40"),F=a("db86"),P=a("0016"),T=a("24e8"),B=a("eb85"),L=a("0378"),O=a("ddd8"),z=a("66e5"),j=a("27f9"),A=a("8f8e"),V=a("7f67"),Y=Object(g["a"])($,u,d,!1,null,null,null),U=Y.exports;x()(Y,"components",{QExpansionItem:Q["a"],QItemSection:S["a"],QItemLabel:M["a"],QBadge:D["a"],QCard:E["a"],QCardSection:_["a"],QTable:N["a"],QBtn:R["a"],QTd:F["a"],QIcon:P["a"],QDialog:T["a"],QSeparator:B["a"],QForm:L["a"],QSelect:O["a"],QItem:z["a"],QInput:j["a"],QCheckbox:A["a"]}),x()(Y,"directives",{ClosePopup:V["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"  flex flex-center"},[a("q-card",{staticClass:"full-width "},[a("q-bar",[a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[e._v("Close")])],1)],1),a("q-card-section",[a("div",{staticClass:"text-h6 text-primary"},[e._v("\n        "+e._s(" Buscar ")+"\n      ")])]),a("q-form",{staticClass:" q-gutter-md",on:{submit:e.store}},[a("div",[a("q-input",{attrs:{outlined:"",type:"text",label:"Numero de Control"},model:{value:e.numberControl,callback:function(t){e.numberControl=t},expression:"numberControl"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 q-pa-sm"},[a("q-btn",{staticClass:"aboo_btn bg-green full-width",attrs:{label:"Buscar",loading:e.loading,type:"submit"}})],1),a("div",{staticClass:"col-6 q-pa-sm"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"aboo_btn  bg-red-4 full-width",attrs:{label:"Cancelar",id:"close_form"}})],1)])])],1)],1)},H=[],G=(a("498a"),{name:"SearchDemandsForm",data:function(){return{loading:!1,numberControl:""}},computed:{},props:{},methods:{store:function(){this.numberControl?(this.loading=!0,this.search()):this.$q.notify({message:"Debe colocar el numero de control",color:"red",position:"right"})},create:function(){var e=this;this.$store.dispatch("diciplines/store",this.discipline).then((function(t){e.$q.notify({message:"Disciplina guardado con exitos",color:"green",position:"right"}),e.$root.$emit("discipline_refresh")})).catch((function(e){console.log(e)}))},update:function(){var e=this;this.$store.dispatch("diciplines/update",this.discipline).then((function(t){e.$q.notify({message:"Disciplina actualizada con exitos",color:"green",position:"right"}),e.$root.$emit("update_dicipline")})).catch((function(e){console.log(e)}))},search:function(){var e=this,t=new FormData;t.append("control_number",this.numberControl.trim()),this.$store.dispatch("demands/searchControlNumber",t).then((function(t){e.$q.notify({message:"Busqueda Exitosa",color:"green",position:"right"}),e.$root.$emit("searchControlNumber_refresh")})).catch((function(e){console.log(e)}))}},mounted:function(){}}),K=G,W=a("d847"),X=a("2c91"),Z=a("05c0"),ee=Object(g["a"])(K,J,H,!1,null,null,null),te=ee.exports;x()(ee,"components",{QCard:E["a"],QBar:W["a"],QSpace:X["a"],QBtn:R["a"],QTooltip:Z["a"],QCardSection:_["a"],QForm:L["a"],QInput:j["a"]}),x()(ee,"directives",{ClosePopup:V["a"]});var ae=a("d784d"),se={name:"IndexRemoveDemand",data:function(){return{showModal:!1,search:[]}},components:{searchCard:U,header_vel:ae["a"],searchForm:te},computed:{},methods:{cargarLista:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("demands/getDemands");case 2:return t.next=4,e.$store.getters["demands/demands"];case 4:e.search=t.sent;case 5:case"end":return t.stop()}}),t)})))()},cargarListaNumeroControl:function(){var e=this;return c()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.getters["demands/searchControlNumber"];case 2:e.search=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;this.cargarLista(),this.$root.$on("searchControlNumber_refresh",(function(){e.showModal=!1,e.cargarListaNumeroControl()})),this.$root.$on("searchMaterial_refresh",(function(){e.cargarLista()}))}},ne=se,oe=a("1c1c"),ie=Object(g["a"])(ne,i,r,!1,null,null,null),re=ie.exports;x()(ie,"components",{QBtn:R["a"],QDialog:T["a"],QList:oe["a"]});var le={name:"PageRemoveDemand",data:function(){return{}},components:{removeDemand:re},methods:{inicialize:function(){}},mounted:function(){this.inicialize()}},ce=le,ue=a("9989"),de=Object(g["a"])(ce,n,o,!1,null,null,null);t["default"]=de.exports;x()(de,"components",{QPage:ue["a"]})},"44e1":function(e,t,a){},dc31:function(e,t,a){"use strict";a("44e1")}}]);