<template>
  <div class="full-width text-white">
    <q-list dark  separator>
      <q-item class="  item-vel"   v-ripple >
        <q-item-section>Alguien</q-item-section>
        <q-item-section avatar>
          <q-avatar  text-color="white">
            <q-icon name="edit"  />
              <q-icon name="delete"/>
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
  }
}
</script>
