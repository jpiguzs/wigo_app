<template>
  <div>
            <q-select
            
            class="text-uppercase" 
            input-class="text-uppercase"  
            popup-content-class="text-uppercase"  
            outlined 
            options-dark  
            label-color="black" 
            v-model="selected_item" 
            :options="items" 
            :option-value="opt => Object(opt) === opt && 'id' in opt ? opt.id : null" 
            :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name: '- Null -'" 
            label="items" 
            use-input
            use-chips
            multiple 
            clearable 
            behavior="menu" 
            map-options   />
      </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {selected_item:null}
  },
  computed:{
    items:{
      get(){
        return this.$store.getters['budget/items']
      }
    },
    

  },
  watch:{
      selected_item(selected_item){
        
        this.$emit('input', selected_item)
      }

    },
    beforeDestroy() {
      this.selected_item=[];
        
       this.$emit('input', this.selected_item)
      
      }
}
</script>
