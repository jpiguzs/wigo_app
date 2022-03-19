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
            :options="items_filtred" 
            :option-value="opt => Object(opt) === opt && 'id' in opt ? opt.id : null" 
            :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name: '- Null -'" 
            :label="showLabel" 
            use-input
            use-chips
            multiple 
           
            behavior="menu" 
            map-options
            
               />
      </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {selected_item:null, 
      items_filtred:[],
      showLabel:'Item'
    }
  },
  props:{filter_conditions:0},
  computed:{
    items:{
      get(){
        return this.$store.getters['budget/items']
      }
    },
    

  },
  watch:{
      selected_item(selected_item){
        
        this.$emit('input', selected_item);
        this.showLabel='';
      }

    },
    beforeMount() {
      this.items_filtred = this.items.filter(item=>{
        if(this.filter_conditions === 0) return item.actions !=null;
        if(this.filter_conditions===1) return item.actions === 1  || item.actions===2;
        if(this.filter_conditions ===2) return item.actions ===1;
        if(this.filter_conditions ===3) return item.actions ===3;
      })
      //this.selected_item = this.filter_conditions === 2 : 1 : null;
    },
    beforeDestroy() {
      this.selected_item=[];
        
       this.$emit('input', this.selected_item)
      
      }
}
</script>
