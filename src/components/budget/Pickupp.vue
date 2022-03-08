<template>
  <div>
      <div>
            <q-select  outlined options-dark  label-color="black" v-model="origin_code" :options="cities" :option-value="opt => Object(opt) === opt && 'code' in opt ? opt.code : null" :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name: '- Null -'" label="Seleccione un ciudad de recogida"  emit-value map-options  />
      </div>
      <div>
          <q-btn color="blue" label="agregar punto de entrega" @click="delivery_count ++"/>

          <div v-if="delivery_points.length > 0">
              <delivery  v-for="(delivery_point, index) in delivery_points" :delivery_point="delivery_points[index]" :key="index" v-model="delivery_points[index]"/>
          </div>
          <q-btn color="green" label="calcular total" @click="getTotal()" v-if="delivery_points.length > 0"/>
      </div> 

  </div>
</template>

<script>
import delivery from './Delivery';
import { city} from "../../status/citys.js";
export default {
  // name: 'ComponentName',
  data () {
    return {cities:city,
    origin_code:null,
    delivery_count:0,
    delivery_points:[],
    }
  },
  components:{delivery},
  watch:{
    delivery_count(newVal){
      this.delivery_points = [];
      for(let index =0 ; index < newVal; index++){
        let data = {
          id: index,
          origin_code:this.origin_code,
          delivery_code: null,
          total: 0,
        }
        this.delivery_points.push(data)
      }
    }
  },
  methods: {
    getTotal(){
      let total = 0;
      this.delivery_points.forEach(point=>{
        console.log(point)
        total =total + point.total;
      })
      total  = total + (1*this.delivery_points.length)
      let data = {
        total,
        delivery_points:this.delivery_points
      }
      this.$root.$emit('set_total_pick', data)
    }
  },

}
</script>
