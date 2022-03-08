<template>
  <div>
  <q-card class="auth__card row" >
   <q-card-section class="col-12">
     <div class="text-center text-h4">
        Registro
    </div>
   </q-card-section>
   <q-card-section class="col-12 q-gutter-sm"  >
      <div><q-input outlined  v-model="name" label="nombre" /></div>
      <div><q-input outlined  v-model="carnet_id" label="Cedula/rif" /></div>
      <div><q-input outlined v-model="tlf" label="telefono" /></div>
      <div><q-input outlined  v-model="email" label="correo" /></div>
      
          
          
          
          <div>
              <q-btn color="primary" class=" full-width" label="registro"  type="submit" @click="$router.push('/menu')" />
            </div>
   </q-card-section> 
  </q-card>
   
        
          
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
