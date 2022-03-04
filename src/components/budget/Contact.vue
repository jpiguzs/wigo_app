<template>
  <div>
    <div class="text-center">
        formulario de contacto
    </div>
          <q-input v-model="name" label="nombre" />
          <q-input v-model="email" label="correo" />
          <q-input v-model="tlf" label="telefono" />
          <q-input v-model="carnet_id" label="Cedula/rif" />
    <div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      name:null,
      email:null,
      tlf:null,
      carnet_id:null,

    }
  },
  props:['boxes', 'delivery_points', 'total']
}
</script>
