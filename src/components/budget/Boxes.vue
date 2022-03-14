<template>
  <div>
  
      <div class="text-center row text-h6">
         <div class="col-11">
         Caja {{box.id + 1}}
         </div>
         <div class="col-1">
         <q-btn flat color="red" icon="cancel"  @click="deleteThis()" />
         </div>   
      </div>
    
    <div>
      <q-input outlined type="number" v-model="box.height" label="Altura (cm)" v-on:keyup="GetTotal" v-on:focus="focusGet" />
    </div>
    <div>
      <q-input outlined type="number" v-model="box.width" label="Anchura (cm)" v-on:keyup="GetTotal" v-on:focus="focusGet" />
    </div>
    <div>
      <q-input outlined type="number"  v-model="box.length" label="Largo (cm)" v-on:keyup="GetTotal" v-on:focus="focusGet"  />
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
        //this.box.total = ((this.box.height * this.box.width * this.box.length)/4400)* this.quantity;
        if(this.box.height!= null && this.box.width != null && this.box.length != null ){
          this.box.validate= true;
        }
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
