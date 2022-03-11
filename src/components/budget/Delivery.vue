<template>
  <div> 
        <div>
          <q-select  outlined options-dark  label-color="black" v-model="delivery" :options="cities" :option-value="opt => Object(opt) === opt && 'code' in opt ? opt.code : null" :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name: '- Null -'" label="Seleccione punto de entrega"   />
        </div>
        <div v-for="(box, index) in boxes">
            <q-input outlined v-model="box.values[item_number]" :label="'caja'+(index+1)" />
        </div> 
      </div>
</template>

<script>
import { city} from "../../status/citys.js";
export default {
  // name: 'ComponentName',
  data () {
    return { cities: city, delivery:null}
  },
   props:{delivery_point: {
      type: Object,
      default: function() {
        return { id: null, origin_code: null,   delivery_code:null, total:0};
      }
    },boxes:{
      type:Array
    },item_number:0},
    watch :{delivery(newVal){
      this.getTotal();
    },
    'delivery_point.delivery_code'(newVal){
      if(newVal === null && this.delivery != null){
        this.getTotal()
      }
    }
    },
    methods: {
      getTotal(){
      
        let ref = this.delivery.ref.find(destiny=>{
          return destiny.code === this.delivery_point.origin_code;
        })
        
        this.delivery_point.total =  ref.value;
        this.delivery_point.delivery_code = this.delivery.code;
        this.$emit('input', this.delivery_point)
        
      }
    },
    mounted() {
     
    },

}
</script>
