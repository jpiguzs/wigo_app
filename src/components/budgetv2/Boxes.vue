<template>
  <div class="q-ml-sm col-12 row" v-on:blur="GetTotal">

      <div class="col-10" >
        <div class="text-center  full bg-white text-primary"> Caja {{boxIndex }} </div>
      </div>
      <div class="col-1">
          <q-btn flat color="red" icon="cancel"  @click="remove(box.id)" />
      </div>


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

    <div class="col-12" v-if="showDescripcion">
      <q-input label="Descripcion"></q-input>
    </div>


  </div>
</template>

<script>
import {CreateId,} from '../../utilities/utilitiesFunctions';
export default {
  // name: 'ComponentName',
  data () {
    return {
      quantity:0,
      showDescripcion:false,
      item_number:null
    }
  },
  props:{box: {
      type: Object,
      default: function() {
        return { id: null, height: null,   width:null, length:null, total:0 , validate:false, max:0, max_leftover:0};
      }
    },
    boxIndex:null,

    pick_code:null},
    methods: {
      CreateId,
      GetTotal(){

        let gratis=0.45454545454545453;
        console.log('entro aqui get total')
        //this.box.total = ((this.box.height * this.box.width * this.box.length)/4400)* this.quantity;
        if(this.box.height!= null && this.box.width != null && this.box.length != null ){
          this.box.validate= true;
        }
        if(this.box.max==1 &&gratis=== (parseInt(this.box.height)*parseInt(this.box.width)*parseInt(this.box.length))/4400){

          this.showDescripcion=true;
       }

        this.box.max_leftover = this.box.max
        this.box.pickup[this.item_number].quantity = this.box.max;
      },
      remove(id){
        this.$root.$emit('delete_box', id)



    },

      focusGet(e){

        document.getElementById(e.target.id).select()

      },
    },
    mounted() {

      let data = {
        quantity:0,
        box_id:this.box.id,
        pick_code:this.pick_code,
        id:this.CreateId(),

      }
      let index = this.box.pickup.push(data);
      this.item_number = (index - 1)
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
