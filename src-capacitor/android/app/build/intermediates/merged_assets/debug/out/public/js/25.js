(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"04c8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("entry")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header_vel",[t._v("\n    Ingresos\n")]),a("div",[a("q-card",{staticClass:"full-width",staticStyle:{"min-width":"300px"}},[a("q-card-section",[a("q-select",{attrs:{clearable:"","bg-color":"white",outlined:"",options:t.options,"option-value":function(t){return Object(t)===t&&"id"in t?t.id:null},"option-label":function(t){return Object(t)===t&&"name"in t?t.name:""},"emit-value":"","map-options":"",label:"Procedencia"},model:{value:t.optionValue,callback:function(e){t.optionValue=e},expression:"optionValue"}}),t.showDonacion?a("div",{staticClass:"q-mt-md"},t._l(t.entrys,(function(e,n){return 1==e.type?a("donacion",{key:n,attrs:{donation:e}}):t._e()})),1):t._e(),t.showPrestamo?a("div",{staticClass:"q-mt-md"},t._l(t.entrys,(function(e,n){return 2==e.type?a("prestamo",{key:n,attrs:{prestamo:e}}):t._e()})),1):t._e()],1)],1)],1)],1)},i=[],r=a("d784d"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-expansion-item",{attrs:{"expand-separator":"","header-class":"bg-deep-orange-5 text-white q-mt-sm"},scopedSlots:t._u([{key:"header",fn:function(){return[a("q-item-section",[a("q-item-label",{staticClass:"text-black"},[t._v("Nombre(s) Apellido(s) : "),a("strong",[t._v(" "+t._s(t.prestamo.name)+" "+t._s(t.prestamo.last_name))])]),a("q-item-label",{staticClass:"text-black"},[t._v("Fecha :"),a("span",{},[a("strong",[t._v(" "+t._s(t._f("formatDate")(t.prestamo.created_at))+" ")])])]),a("q-item-label",{staticClass:"text-black"},[t._v("Hora :"),a("span",{},[a("strong",[t._v(" "+t._s(t._f("formatTime")(t.prestamo.created_at)))])])]),a("q-item-label",{staticClass:"text-black"},[t._v("Tipo :"),a("span",{},[a("strong",[t._v(" "+t._s("Prestamo"))])])])],1)]},proxy:!0}])},[a("q-card",[a("q-card-section",[a("q-table",{attrs:{title:"Materiales Prestamos","no-data-label":"Sin Resultado",data:t.rows,columns:t.columns,"row-key":"code"}})],1)],1)],1)],1)},c=[],m=(a("ac1f"),a("1276"),a("159b"),a("b0c0"),a("bd4c")),u={data:function(){return{columns:[],rows:[]}},computed:{},props:["prestamo"],filters:{formatDate:function(t){var e=t.split("T"),a=e[0].split("-"),n=new Date(a[0],a[1],a[2]);return m["a"].formatDate(n,"DD-MM-YYYY")},formatTime:function(t){var e=t.split("T"),a=e[1].split(":"),n=new Date(a[0],a[1]);return m["a"].formatDate(n,"hh:mm:ss A")}},methods:{columRow:function(){this.columns=[],this.rows=[],this.columns=[{name:"code",label:"Codigo",align:"center",field:"code",sortable:!0},{name:"material",label:"Materiales",align:"center",field:"material",sortable:!0},{name:"quantity",label:"Cantidad",align:"center",field:"quantity",sortable:!0}];var t=this;this.prestamo.p_material.forEach((function(e){var a={code:e.id,material:e.name,quantity:e.quantity};t.rows.push(a)}))}},mounted:function(){console.log(this.prestamo),this.columRow()}},d=u,p=a("2877"),h=a("3b73"),f=a("4074"),b=a("0170"),_=a("f09f"),v=a("a370"),w=a("eaac"),q=a("eebe"),g=a.n(q),y=Object(p["a"])(d,l,c,!1,null,null,null),x=y.exports;g()(y,"components",{QExpansionItem:h["a"],QItemSection:f["a"],QItemLabel:b["a"],QCard:_["a"],QCardSection:v["a"],QTable:w["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-expansion-item",{attrs:{"expand-separator":"","header-class":"bg-deep-orange-5 text-white q-mt-sm"},scopedSlots:t._u([{key:"header",fn:function(){return[a("q-item-section",[a("q-item-label",{staticClass:"text-black"},[t._v("Nombre(s) Apellido(s) : "),a("strong",[t._v(" "+t._s(t.donation.name)+" "+t._s(t.donation.last_name))])]),a("q-item-label",{staticClass:"text-black"},[t._v("Fecha :"),a("span",{},[a("strong",[t._v(" "+t._s(t._f("formatDate")(t.donation.created_at))+" ")])])]),a("q-item-label",{staticClass:"text-black"},[t._v("Hora :"),a("span",{},[a("strong",[t._v(" "+t._s(t._f("formatTime")(t.donation.created_at)))])])]),a("q-item-label",{staticClass:"text-black"},[t._v("Tipo :"),a("span",{},[a("strong",[t._v(" "+t._s("Donacion"))])])])],1)]},proxy:!0}])},[a("q-card",[a("q-card-section",[a("q-table",{attrs:{title:"Materiales Donacion","no-data-label":"Sin Resultado",data:t.rows,columns:t.columns,"row-key":"code"}})],1)],1)],1)],1)},D=[],k={data:function(){return{columns:[],rows:[]}},computed:{},props:["donation"],filters:{formatDate:function(t){var e=t.split("T"),a=e[0].split("-"),n=new Date(a[0],a[1],a[2]);return m["a"].formatDate(n,"DD-MM-YYYY")},formatTime:function(t){var e=t.split("T"),a=e[1].split(":"),n=new Date(a[0],a[1]);return m["a"].formatDate(n,"hh:mm:ss A")}},methods:{columRow:function(){this.columns=[],this.rows=[],this.columns=[{name:"code",label:"Codigo",align:"center",field:"code",sortable:!0},{name:"material",label:"Materiales",align:"center",field:"material",sortable:!0},{name:"quantity",label:"Cantidad",align:"center",field:"quantity",sortable:!0}];var t=this;this.donation.p_material.forEach((function(e){var a={code:e.id,material:e.name,quantity:e.quantity};t.rows.push(a)}))}},mounted:function(){console.log(this.donation),this.columRow()}},Q=k,T=Object(p["a"])(Q,C,D,!1,null,null,null),S=T.exports;g()(T,"components",{QExpansionItem:h["a"],QItemSection:f["a"],QItemLabel:b["a"],QCard:_["a"],QCardSection:v["a"],QTable:w["a"]});var I={data:function(){return{showDonacion:!1,showPrestamo:!1,showTableMaterial:!1,options:[{id:1,name:"Donacion"},{id:2,name:"Prestamos"}],optionValue:""}},components:{header_vel:r["a"],prestamo:x,donacion:S},computed:{entrys:{get:function(){return this.$store.getters["entry/entrys"]}}},watch:{optionValue:function(t,e){switch(console.log(t),t){case 1:this.showReIngreso=!1,this.showDonacion=!0,this.showPrestamo=!1,this.showOC=!1;break;case 2:this.showReIngreso=!1,this.showDonacion=!1,this.showPrestamo=!0,this.showOC=!1;break}}},methods:{ver:function(){console.log(this.entrys)}},mounted:function(){this.ver()}},M=I,P=a("ddd8"),E=Object(p["a"])(M,s,i,!1,null,null,null),O=E.exports;g()(E,"components",{QCard:_["a"],QCardSection:v["a"],QSelect:P["a"]});var R={components:{entry:O},methods:{inicialize:function(){this.$store.dispatch("entry/getentry")}},mounted:function(){this.inicialize()}},Y=R,j=a("9989"),$=Object(p["a"])(Y,n,o,!1,null,null,null);e["default"]=$.exports;g()($,"components",{QPage:j["a"]})}}]);