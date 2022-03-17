<template>
  <div class="q-gutter-sm">
      <div class="text-h6">
           Pick up
      </div>
      <div>
           <select_cities v-model="origin_code" />
      </div>
      <select_items 
        v-if="origin_code"
        :discard="2"
        v-model="selected_item"
       
      />
      <!--box-->
      <div v-if="boxes.length > 0 && origin_code" >
      <div class="row q-pt-md"  v-for="(box, index) in boxes" :key="index" >        
                  <boxes :box="box" :boxIndex="index + 1"/>
        </div>
        <q-card-section class="row items-start w  q-mb-md" >
        <div class="col-12">
             <q-btn color="blue" icon="add" round @click="AddBox"/>
        </div>
           
            <div class="text-h6 col-12">Caja</div>
        </q-card-section>
        </div>
      
  </div>
</template>

<script>

import { city} from "../../status/citys.js";
import select_items from './Select-items';

import select_cities from './SelectCities'
import boxes from './Boxes'
export default {
  // name: 'ComponentName',
  data () {
    return {cities:city,
    origin_code:null,
    selected_item: null,
   
    id:0,
    }
  },
  props:['boxes'],
  components:{select_items, boxes, select_cities},
  watch:{
      selected_item(selected_item){
        let data ={
          origin_code:this.origin_code,
          selected_item,
        }
        //this.CreateBox();
        this.$emit('selectedItems', data );
        console.log(data, 'desde origina'); 
      },
      

  },
  methods: {
     AddBox(){
       let data = {
         origin_code:this.origin_code,
       }
       console.log(data)
      this.$root.$emit('add_box', data)
    },
  }
  

}
</script>
<style>
.delivery-box{
  max-height:270px;
  overflow: auto;
}
</style>