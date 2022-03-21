<template>
  <div>
      <q-input v-model="quantity" v-on:blur="setNewMax" outlined type="number"  :label="label" />
  </div>
</template>

<script>
import {CreateId,} from '../../utilities/utilitiesFunctions';
export default {
  // name: 'ComponentName',
  data () {
    return {
      quantity:null,
      item_number:null
    }
  },
  props:{
    label:{
      type: String,
      default:"Caja Default"
    },
    pick_code:null,
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
      CreateId,
      setNewMax(){
        if(this.quantity){
          this.box.max = parseInt(this.box.max) + parseInt(this.quantity);
          this.box.pickup[this.item_number].quantity = this.quantity;
          this.box.seTleftover()
        }

        console.log(this.box)
      }

  },
  mounted() {
    this.$root.$on('set_new_max',()=>{
      this.setNewMax();
    })
    let data = {
        quantity:0,
        box_id:this.box.id,
        pick_code:this.pick_code,
        id:this.CreateId(),

      }
      let index = this.box.pickup.push(data);
      this.item_number = (index - 1)
  }

  }

</script>

