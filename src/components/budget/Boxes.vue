<template>
  <div class="q-ml-sm col-12 row">

     <!-- <div class="text-center row text-h6">
         <div class="col-11">
         Caja {{box.id + 1}}
         </div>
         <div class="col-1">
         <q-btn flat color="red" icon="cancel"  @click="deleteThis()" />
         </div>
      </div>-->


    <div class="col-3">
      <q-input outlined dense class="input_new"  type="number" v-model="box.height" label="Alto (cm)" v-on:change="GetTotal" v-on:focus="focusGet" />
    </div>
    <div class="col-3">
      <q-input outlined dense class="input_new" type="number" v-model="box.width" label="Ancho (cm)" v-on:change="GetTotal" v-on:focus="focusGet" />
    </div>
    <div class="col-3">
      <q-input outlined dense  class="input_new" type="number"  v-model="box.length" label="Largo (cm)" v-on:change="GetTotal" v-on:focus="focusGet"  />
    </div>
    <div class="col-3">
      <q-input outlined dense class="input_new" type="number" v-model="box.max" label="cant" v-on:change="GetTotal" v-on:focus="focusGet" />
    </div>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      quantity:0
    }
  },
  props:{box: {
      type: Object,
      default: function() {
        return { id: null, height: null,   width:null, length:null, total:0 , validate:false, max:0, max_leftover:0};
      }
    }, boxIndex:null},
    methods: {
      GetTotal(){
        //this.box.total = ((this.box.height * this.box.width * this.box.length)/4400)* this.quantity;
        if(this.box.height!= null && this.box.width != null && this.box.length != null ){
          this.box.validate= true;
        }
        this.box.max_leftover = this.box.max
      },
      deleteThis(){
        this.$emit('deleteThis',this.box.id)
      },
      focusGet(e){
        console.log(e.target);
        document.getElementById(e.target.id).select()
      }
    },
}
</script>
<style>
.input_new  {
  width:75px;

}
.q-field__label{
  text-overflow:clip !important;
  overflow:visible !important;
}
</style>
