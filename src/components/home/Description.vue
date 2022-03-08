<template>
  <div class="row flex justify-center items-center q-pa-xl q-gutter-xl">
    <div class=" col-12 flex justify-center items-center ">
       <q-avatar  size="300px">
        <img
      src="/wigo_logo.jpg"
      alt="Aboonda logo"
      
    />
      </q-avatar>
    </div>
    <div class=" col-12  text-justify ">
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

       
    </div>
    <div class=" col-12 ">
      <q-btn color="primary" label="hacer cotizacion" class="full-width"  @click="$router.push('/budget')" />
    </div>
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
