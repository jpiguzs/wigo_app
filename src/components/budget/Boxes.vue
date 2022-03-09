<template>
  <div>
      <div class="text-center text-h6">
          tipo de caja {{box.id + 1}}
      </div>
    <div>
      <q-input outlined type="number" v-model="quantity" label="cantidad" v-on:keyup="GetTotal" />
    </div>
    <div>
      <q-input outlined type="number" v-model="box.height" label="altura (cm)" v-on:keyup="GetTotal"  />
    </div>
    <div>
      <q-input outlined type="number" v-model="box.width" label="anchura (cm)" v-on:keyup="GetTotal" />
    </div>
    <div>
      <q-input outlined type="number" v-model="box.length" label="largo (cm)" v-on:keyup="GetTotal"  />
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      quantity:null
    }
  },
  props:{box: {
      type: Object,
      default: function() {
        return { id: null, height: null,   width:null, length:null, total:0 , validate:false};
      }
    }},
    methods: {
      GetTotal(){
        this.box.total = ((this.box.height * this.box.width * this.box.length)/4400)* this.quantity;
        if(this.box.height!= null && this.box.width != null && this.box.length != null ){
          this.box.validate= true;
        }
      }
    },
}
</script>
