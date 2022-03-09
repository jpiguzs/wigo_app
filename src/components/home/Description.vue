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
    <div class=" col-12 text-h6 text-center ">
      Siempre a Tiempo con tus entregas

       
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
