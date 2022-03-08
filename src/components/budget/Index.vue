<template>
  <div>
    <q-card>
        <q-card-section>
            Creacion de presupuesto
        </q-card-section>
        <div v-show="step === 1">
        <q-card-section>
            <q-input v-model="boxes_count" label="Tipos de cajas" />
        </q-card-section>
        <q-card-section v-if="boxes.length > 0">
            <div class="row">
                <boxes v-for="(box, index) in boxes" class="col-md-4 col-sm-12" :box="box" :key="index" />
            </div>
        
          <div>
            total de cajas : {{total_boxes}}
          </div>
          <q-btn @click="getTotalBoxes()" label="calcular total por cajas" />
        </q-card-section>
        </div>
        <div v-show="step===2">
        <div>
            total de cajas : {{total_boxes}}$
          </div>
        <q-card-section>
            <pickupp />
        </q-card-section>
       
        </div>
        <div v-show="step===3">
        <div>
            total a pagar : {{total}}$
          </div>
            <q-btn @click="step=2" label="volver" />
                <q-btn color="green" @click="step=4" label="hacer pedido" />
        <q-card-section>
         
        </q-card-section>
       
        </div>
        <div v-show="step===4">
        <div>
            total a pagar : {{total}}$
          </div>
          <contact :boxes="boxes" :total="total" :delivery_points="delivery_points" />
            <q-btn @click="step=2" label="volver" />
              
        <q-card-section>
         
        </q-card-section>
       
        </div>
    </q-card>
  </div>
</template>

<script>
import  boxes from './Boxes'
import pickupp from './Pickupp'
import contact from './Contact'
export default {
  // name: 'ComponentName',
  data () {
    return {
      total:null,
      total_pick:null,
      boxes:[],
      boxes_count:0,
      total_boxes:0,
      step:1,
      delivery_points:[]
    }
  },
  components:{boxes,pickupp, contact },
  watch:{
    boxes_count(newVal){
      this.boxes = [];
      console.log(newVal)
      for( let index=0; index < newVal; index++){
        let data = {
          id: index,
          height:null,
          width:null,
          length:null,
          total:0
        }
        this.boxes.push(data)
      }
      console.log(this.boxes)
    }
  },
  methods: {
    getTotalBoxes(){
      let total = 0;
      this.boxes.forEach(box=>{
        total = total + box.total;
      })
      console.log(total)
      this.total_boxes = total > 140 ? total * 0.05 : 7;
      this.step = 2;
    },
    getTotal(){
      this.total = this.total_boxes + this.total_pick;
      this.step = 3;
    }
  },
  mounted() {
     this.$root.$on('set_total_pick', (data)=>{
       this.total_pick = data.total;
       this.delivery_points = data.delivery_points;
       this.getTotal();
       
     })
  },
}
</script>
