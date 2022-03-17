<template>
  <div class="q-gutter-sm">
   <div class="text-h6">
          Paradas
    </div>
    <div>
      <select_cities v-model="stop_code" />
    </div>
    <div>
       <q-select
            class="text-uppercase" 
            input-class="text-uppercase"  
            popup-content-class="text-uppercase"  
            outlined 
            options-dark  
            label-color="black" 
            v-model="action" 
            :options="items" 
            :option-value="opt => Object(opt) === opt && 'id' in opt ? opt.id : null" 
            :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name: '- Null -'" 
            label="Delivery/Pick up" 
          
            emit-value
            clearable 
            behavior="menu" 
            map-options 
              />
    </div>
    <div v-if="action===1  || action=== 3">
     <expantions  icon="local_shipping" title="Delivery">
          seccion de delivery 
     </expantions>
    </div>
    <div v-if="action===2 || action=== 3">
     <expantions  icon="inventory_2" title="Pick Up">
          <select_items v-model="selected_item" />
     </expantions>
    </div>
   
  </div>
</template>

<script>
import select_cities from './SelectCities'
import {items} from '../../status/items.js'
import expantions from 'components/commons/Expantions'
import select_items from './Select-items'
export default {
  // name: 'ComponentName',
  data () {
    return {
      stop_code:null,
      action:null,
      selected_item:null,
      items
    }
  },
  watch:{
    action(action){
      console.log(action)
    }
  },
  components:{select_cities, expantions, select_items}
}
</script>
