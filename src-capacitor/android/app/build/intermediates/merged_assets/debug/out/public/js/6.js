(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"1eb3":function(e,a,t){},5682:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",[t("review")],1)},n=[],o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"q-pa-md"},[e.ready?t("div",[t("div",{staticClass:"row q-my-lg"},[t("div",{staticClass:"col-4 col-sm-4 border-black q-pa-sm"},[e._v("\n                Solicitante:\n            ")]),t("div",{staticClass:"col-8 col-sm-8 border-black q-pa-sm"},[e._v("\n                "+e._s(e.acp.demand.request_user.name)+"\n            ")]),t("div",{staticClass:"col-4 col-sm-4 border-black q-pa-sm"},[e._v("\n                Numero de Requisicion:\n            ")]),t("div",{staticClass:"col-8 col-sm-8 border-black q-pa-sm"},[e._v("\n                "+e._s(e.acp.demand.control_number)+"\n            ")]),t("div",{staticClass:"col-4 col-sm-4 border-black q-pa-sm"},[e._v("\n                Fecha De Requisicion:\n            ")]),t("div",{staticClass:"col-8 col-sm-8 border-black q-pa-sm"},[e._v("\n                "+e._s(e.fecha.getDate()+"-"+(e.fecha.getMonth()+1)+"-"+e.fecha.getFullYear())+"\n            ")]),t("div",{staticClass:"col-4 col-sm-4 border-black q-pa-sm"},[e._v("\n                Fecha De Este Informe:\n            ")]),t("div",{staticClass:"col-8 col-sm-8 border-black q-pa-sm"},[e._v("\n                "+e._s(e.fecha_acp.getDate()+"-"+(e.fecha_acp.getMonth()+1)+"-"+e.fecha_acp.getFullYear())+"\n            ")]),t("div",{staticClass:"col-4 col-sm-4 border-black q-pa-sm"},[e._v("\n                Justificacion de la compra de los bienes y/o contratacion del servicio:\n            ")]),t("div",{staticClass:"col-8 col-sm-8 border-black q-pa-sm"},[e._v("\n                "+e._s(e.acp.justification)+"\n            ")])]),t("q-table",{attrs:{title:"Acp",data:e.rows,columns:e.columns,"row-key":"name","hide-bottom":!0},scopedSlots:e._u([{key:"header",fn:function(a){return[t("q-tr",{attrs:{props:a}},e._l(a.cols,(function(s){return t("q-th",{key:s.name,staticClass:"text-italic text-black",attrs:{props:a}},[e._v("\n                        "+e._s(s.label)+"\n                    ")])})),1)]}},{key:"body",fn:function(a){return[t("q-tr",{attrs:{props:a}},e._l(e.columns,(function(s,n){return t("q-td",{key:s.name,staticStyle:{background:"white",color:"black"},style:a.row[s.name]&&a.row[s.name].recomendation?"background: #1dbf1d;":"background: white;",attrs:{props:a}},[a.row[s.name]?t("div",[t("div",[e._v("\n                                "+e._s(0==n||"Total"==a.row.Item?a.row[s.name]:"")+"\n                                "),0==n&&"Total"!=a.row.Item?t("div",[e._v("Cantidad: "+e._s(a.row.quantity))]):e._e()]),e._v("\n                            "+e._s(a.row[s.name].string)+"\n                            "),0!=n&&"Total"!=a.row.Item?t("q-radio",{attrs:{val:s.name},model:{value:e.selected[a.row.index],callback:function(t){e.$set(e.selected,a.row.index,t)},expression:"selected[props.row.index]"}}):e._e(),t("div",[a.row[s.name].detalle?t("q-btn",{attrs:{color:"green",size:"xs"},on:{click:function(t){return e.alert(a.row[s.name].detalle)}}},[e._v("Detalle")]):e._e()],1),"Total"!=a.row.Item&&0==n?t("q-btn",{attrs:{size:"xs",color:"red"},on:{click:function(t){return e.rechazar(a.row.index)}}},[e._v("Rechazar")]):e._e(),"Total"!=a.row.Item&&0==n?t("q-popup-edit",{attrs:{title:"Nota",buttons:""},model:{value:e.notas[a.row.index],callback:function(t){e.$set(e.notas,a.row.index,t)},expression:"notas[props.row.index]"}},[t("q-input",{attrs:{dense:"",autofocus:""},model:{value:e.notas[a.row.index],callback:function(t){e.$set(e.notas,a.row.index,t)},expression:"notas[props.row.index]"}})],1):e._e()],1):e._e()])})),1)]}}],null,!1,3322194759)}),t("div",{staticClass:"row q-my-lg"},[t("div",{staticClass:"col-4 col-sm-4 border-black q-pa-sm"},[e._v("\n                EVALUACIÓN TÉCNICA (SI APLICA):\n            ")]),t("div",{staticClass:"col-8 col-sm-8 border-black q-pa-sm"},[e._v("\n                "+e._s(e.acp.tech_evaluation)+"\n            ")]),t("div",{staticClass:"col-4 col-sm-4 border-black q-pa-sm"},[e._v("\n                EVALUACIÓN ECONÓMICA:\n            ")]),t("div",{staticClass:"col-8 col-sm-8 border-black q-pa-sm"},[e._v("\n                "+e._s(e.acp.economic_evaluation)+"\n            ")]),t("div",{staticClass:"col-4 col-sm-4 border-black q-pa-sm"},[e._v("\n                RECOMENDACIÓN INTEGRAL:\n            ")]),t("div",{staticClass:"col-8 col-sm-8 border-black q-pa-sm"},[e._v("\n                "+e._s(e.acp.recomendation)+"\n            ")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"q-mt-lg"},[e._v("\n                    Rechazados:\n                    "),e._l(e.notas,(function(a,s){return t("div",{key:s},[a?t("div",[t("q-btn",{attrs:{round:"",dense:"",color:"deep-orange",icon:"close"},on:{click:function(a){return e.quitar_nota(s)}}}),e._v(" "+e._s(e.rows[s].Item+" :"+a)+"\n                        ")],1):e._e()])}))],2)]),t("div",{staticClass:"col-12 col-sm-6"},[t("div",{staticClass:"q-mt-lg"},[e._v("\n                    Seleccionados:\n                    "),e._l(e.selected,(function(a,s){return t("div",{key:s},[a?t("div",{staticClass:"selected q-pa-sm"},[e._v("\n                            "+e._s(e.rows[s].Item+" : "+a)+"\n                        ")]):e._e()])}))],2)])]),t("q-btn",{staticClass:"q-mt-lg",attrs:{color:"secondary",label:"Guardar"},on:{click:function(a){return e.save()}}})],1):e._e()])},c=[],i=(t("a434"),t("159b"),t("caad"),t("2532"),t("b0c0"),t("a4d3"),t("e01a"),t("7db0"),{data:function(){return{acp:null,columns:[],rows:[],ready:!1,selected:null,notas:null,proveedores:null,fecha:null,fecha_acp:null}},mounted:function(){var e=this;this.$route.params.acp?(this.acp=this.$route.params.acp,this.fecha=new Date(this.acp.demand.created_at),this.fecha_acp=new Date(this.acp.created_at),this.setup()):axios.get("acp/"+this.$route.params.id).then((function(a){e.acp=a.data,e.fecha=new Date(e.acp.demand.created_at),e.fecha_acp=new Date(e.acp.created_at),e.setup()}))},methods:{alert:function(e){console.log(e),this.$q.dialog({title:"Detalle",message:e}).onOk((function(){})).onCancel((function(){})).onDismiss((function(){}))},rechazar:function(e){console.log("ENTRE"),console.log(e),this.selected[e]=0},quitar_nota:function(e){console.log(e),console.log(this.notas),this.notas.splice(e,1)},setup:function(){var e=this;this.proveedores=[],this.acp.applicants.forEach((function(a){e.proveedores.includes(a.supplier.name)||e.proveedores.push(a.supplier.name)}));var a={name:"Item",required:!0,label:"Item",align:"center",field:"Item"};this.columns.push(a);var t=new Array(this.proveedores.length);this.proveedores.forEach((function(a){var s={name:a,required:!0,label:a,align:"center",field:a};e.columns.push(s),t[a]={precio:0,total:0}}));var s="",n={},o=0;this.acp.applicants.forEach((function(a,c){s!=a.material.name&&(0!=c&&(n["index"]=o,e.rows.push(n),o++),s=a.material.name,n={}),n["Item"]=s,n[a.supplier.name]={string:"C/U: "+a.price+"$ | Total :"+a.price*a.material.order_quantity+"$",detalle:a.description,recomendation:a.recomendation},n["quantity"]=a.material.order_quantity,t[a.supplier.name].precio=t[a.supplier.name].precio+a.price,t[a.supplier.name].total=t[a.supplier.name].total+a.price*a.material.order_quantity,c==e.acp.applicants.length-1&&(n["index"]=o,e.rows.push(n),o++,n={},n["Item"]="Total",e.proveedores.forEach((function(e){n[e]=t[e].total+"$"})),e.rows.push(n),console.log(e.rows),e.selected=new Array(e.rows.length-1),e.notas=new Array(e.rows.length-1))})),this.ready=!0},save:function(){for(var e=this,a=[],t=[],s=0;s<this.rows.length-1;s++)if(!this.selected[s]&&!this.notas[s])return void this.$q.notify({type:"negative",message:"Le Falta Seleccionar el producto "+this.rows[s].Item});for(var n=function(s){if(e.selected[s]){var n=e.acp.applicants.find((function(a){return a.supplier.name==e.selected[s]&&a.material.name==e.rows[s].Item}));n&&a.push(n.id)}if(e.notas[s]){var o=e.acp.applicants.find((function(a){return a.material.name==e.rows[s].Item}));if(o){var c={material_id:o.material.id,nota:e.notas[s]};t.push(c)}}},o=0;o<this.rows.length-1;o++)n(o);this.$q.loading.show(),axios.post("acp/select_applicants/"+this.acp.id,{selected:a,rejected:t}).then((function(a){e.$router.push("/acp/pending"),e.$q.notify({type:"positive",message:a.data}),e.$q.loading.hide()})).catch((function(e){console.log(e)}))},update:function(){console.log("CLICK")}},watch:{selected:function(){for(var e in this.selected)this.notas.splice(e,1)}}}),r=i,l=(t("739a"),t("2877")),d=t("eaac"),p=t("bd08"),u=t("357e"),m=t("db86"),v=t("3786"),h=t("9c40"),f=t("42a1"),_=t("27f9"),b=t("eebe"),w=t.n(b),q=Object(l["a"])(r,o,c,!1,null,null,null),g=q.exports;w()(q,"components",{QTable:d["a"],QTr:p["a"],QTh:u["a"],QTd:m["a"],QRadio:v["a"],QBtn:h["a"],QPopupEdit:f["a"],QInput:_["a"]});var C={components:{review:g}},k=C,y=t("9989"),I=Object(l["a"])(k,s,n,!1,null,null,null);a["default"]=I.exports;w()(I,"components",{QPage:y["a"]})},"739a":function(e,a,t){"use strict";t("1eb3")}}]);