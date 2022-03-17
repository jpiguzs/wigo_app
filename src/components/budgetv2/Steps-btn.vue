<template>
  <div>
      <div>
           <q-btn 
           color="blue" 
           icon-right="arrow_forward" 
           label="Siguiente"
           @click="nextFunction"
           />

            <q-btn 
            color="green" 
            flat 
            icon="arrow_back"  
            label ="Volver"
            @click="back"
            v-if="this.$attrs.value !=1"
            />
            <slot></slot> 
      </div>
 
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  props:{
    nextFunction:{
     type: Function,
      default() {
        return {}
      }
    },
    back:{
     type: Function,
      default() {
        return {}
      }
    },

  }
}
</script>
