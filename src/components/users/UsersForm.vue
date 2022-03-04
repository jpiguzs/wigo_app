<template>
  <div>
   <q-btn label="crear" class="btn btn-green" @click="show = !show"/> 
  <q-dialog v-model="show">
      <q-card class="full-width">
        <q-card-section class="flex flex-center">
          <div class="text-h6 text-black">Nuevo</div>
        </q-card-section>

        <q-card-section  >
            <q-form class="aboo_form q-gutter-sm" @submit="login">
                 <div>
                <q-input outlined v-model="name" type="text"  label="Nombre" label-color="black" />
            </div>    
            <div>
                <q-input outlined v-model="email" type="email"  label="Correo" label-color="black" />
            </div>    
            <div>
                <q-input outlined  type="password"  v-model="password" label="Contraseña" label-color="black" />
            </div>
            <div>
                <q-input outlined  type="ver"  v-model="password_verify" label="verificar Contraseña" label-color="black" />
            </div>
            <div>
           
            </div>
            </q-form>
          </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="guardar" color="green" v-close-popup />
          <q-btn flat label="cerrar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>



  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      show:false
    }
  }
}
</script>
