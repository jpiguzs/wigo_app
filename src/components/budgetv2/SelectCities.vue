<template>
  <div>
            <q-select 
            class="text-uppercase" 
            input-class="text-uppercase"  
            popup-content-class="text-uppercase"  
            outlined options-dark  
            label-color="black" 
            v-model="code" 
            :options="cities" 
            :option-value="opt => Object(opt) === opt && 'code' in opt ? opt.code : null" 
            :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name: '- Null -'" 
            :label="showLabel"  
            :emit-value="emit_value" 
            
            behavior="menu"
            map-options  />
      </div>
</template>

<script>
import { city} from "../../status/citys.js";
export default {
  // name: 'ComponentName',
  data () {
    return {
      cities:city,
      code: null,
      showLabel:'Ciudad'
    }
  },
  props:{emit_value:{
    type: Boolean,
    default: true
  }},
  watch:{
    code(code){
      this.$emit('input', code);
      this.showLabel='';
    }


  }

}
</script>
