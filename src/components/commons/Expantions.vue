<template>
  <div>
      <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 10px"
      :icon="icon"
      :label="title"
      
      header-class="bg-primary text-white text-center"
      expand-icon-class="text-white"
    >
    <q-card>
        <q-card-section>
         <slot></slot>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  props:['icon', 'title']
}
</script>
