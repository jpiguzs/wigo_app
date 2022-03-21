<template>
  <div class="row">
      <q-expansion-item

      :class=" showClose ? 'shadow-1 overflow-hidden col-10' : 'shadow-1 overflow-hidden col-12'"
      style="border-radius: 10px"
      :icon="icon"
      :label="title"
      :default-opened="default_opened"
      :header-class="bg+' text-white text-center'"
      expand-icon-class="text-white"


    >
    <q-card>
        <q-card-section>
         <slot></slot>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  <q-btn v-if="showClose"  class="col-1 btn--custom" flat icon="cancel" @click="remove()"/>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  props:{icon:null,
  title:null,
  bg:null,
  default_opened:false,
   showClose:false,
   stop_id:null},
   methods:{

     remove(){
       //alert()
       this.$root.$emit('delete_this_stop', this.stop_id)
     }
   }
}
</script>
<style>
.btn--custom{
  max-height: 32px !important;
}
</style>
