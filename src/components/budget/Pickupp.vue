<template>
  <div class="q-gutter-sm">
      <div class="text-h6">
           Pick up/Entrega
      </div>
      <div>
            <q-select class="text-uppercase" input-class="text-uppercase"  popup-content-class="text-uppercase"  outlined options-dark  label-color="black" v-model="origin_code" :options="cities" :option-value="opt => Object(opt) === opt && 'code' in opt ? opt.code : null" :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name: '- Null -'" label="Pick up"  emit-value map-options  />
      </div>
      <div>
          

          <div v-if="delivery_points.length > 0" class="delivery-box" id="delivery_box" >
              <delivery  :total_cargo="total_cargo" :boxes="boxes" v-for="(delivery_point, index) in delivery_points" :delivery_point="delivery_points[index]" :key="index" v-model="delivery_points[index]" :item_number="index" />
          </div>
          <div class="row">
            <div class="col-3 text-center q-mt-sm">
                  <q-btn color="blue" icon="add" round @click="delivery_count ++"/>
                <div class="text-h6 q-pa-sm">Entrega</div>
            </div>
          
          </div>
            <div class="q-gutter-sm"> 
              <slot></slot>
              <q-btn color="green" label="calcular" @click="getTotal()" v-if="delivery_points.length > 0"/>
            </div>      
          
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
  props:['boxes', 'total_cargo'],
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
          validate:false
        }
        this.delivery_points.push(data)
        setTimeout(function(){
        let point = document.getElementById('delivery_box');
        console.log(point.scrollHeight)
        point.scrollTop = point.scrollHeight;
      }, 200);
      
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
    },
    
  },

}
</script>
<style>
.delivery-box{
  max-height:240px;
  overflow: auto;
}
</style>