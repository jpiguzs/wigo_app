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
          <div v-for="(delivery_point, index) in delivery_points" >
               <div class="row q-mt-sm">
                 <div class="col-10" >
                        <div class="text-center q-ml-sm full bg-white text-primary"> Entrega {{index + 1}}</div>
                  </div>
                  <div class="col-1">
                     <q-btn flat color="red" icon="cancel"  @click="remove(delivery_point.id)" />
                  </div>
              </div>
              <delivery  :total_cargo="total_cargo" :boxes="boxes"  :delivery_point="delivery_points[index]" :key="index" v-model="delivery_points[index]" :item_number="index" />

          </div>
             
                 
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
    id:0,
    }
  },
  props:['boxes', 'total_cargo'],
  components:{delivery},
  watch:{
    delivery_count(newVal, oldVal){
      if(newVal > oldVal){
          
        let data = {
          id: this.id,
          origin_code:this.origin_code,
          delivery_code: null,
          total: 0,
          validate:false
        }
        this.delivery_points.push(data)
        this.id++;
        setTimeout(function(){
        let point = document.getElementById('delivery_box');
        console.log(point.scrollHeight)
        point.scrollTop = point.scrollHeight;
      }, 200);
      
      
        
      }
      //this.delivery_points = [];
      
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
    remove(id){
      if(this.delivery_points.length > 1){
        let pointIndex = this.delivery_points.findIndex(point => point.id === id);
        this.delivery_points.splice(pointIndex, 1);
        this.delivery_count --;
        
      
      }else{
         this.$q.notify({
          message: "No puede eliminar este punto dado que solo queda uno",
          color: "red",
          position: "right",
        });
        return;
      }
      

    },
    
  },

}
</script>
<style>
.delivery-box{
  max-height:270px;
  overflow: auto;
}
</style>