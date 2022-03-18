<template>
  <div>
      <q-input v-model="quantity" v-on:blur="setNewMax" outlined type="number"  :label="label" />
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      quantity:null,
    }
  },
  props:{
    label:{
      type: String,
      default:"Caja Default"
    },
    box:{
        type: Object,
        default: function() {
          return {
            id: null, 
            height: null,   
            width:null, 
            length:null, 
            total:0 , 
            validate:false, 
            max:0, 
            max_leftover:0,
          }
       
        }      
    },
  
  },
  methods: {
      setNewMax(){
        if(this.quantity){
          this.box.max = parseInt(this.box.max) + parseInt(this.quantity);
          this.box.seTleftover()
        }
        
        console.log(this.box)
      }

  },
  mounted() {
    this.$root.$on('set_new_max',()=>{
      this.setNewMax();
    })
  }

  }

</script>

