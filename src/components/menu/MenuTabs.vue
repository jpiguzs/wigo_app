<template>
<div class="full-width text-white">
    <q-list dark  separator>
      <q-item class="  item-vel"  clickable v-ripple @click="$router.push(url)">
        <q-item-section>{{name}}</q-item-section>
        <q-item-section avatar>
          <q-avatar  text-color="white">
            <q-icon name="navigate_next"  />
          </q-avatar>
        </q-item-section>
      </q-item >
    </q-list>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  props:{
    name:String,
    url:String,
  }
}
</script>
