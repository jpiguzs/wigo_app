<template>
  <div>
            <q-select  outlined options-dark  label-color="black" v-model="delivery" :options="cities" :option-value="opt => Object(opt) === opt && 'code' in opt ? opt.code : null" :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name: '- Null -'" label="Seleccione un ciudad de recogida"   />
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
    }},
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
