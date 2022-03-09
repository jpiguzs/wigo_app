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
      <div><q-input outlined  v-model="password" label="contraseña"  type="password" /></div>
      <div><q-input outlined  v-model="password_verify"   type="password" label="verifcar contraseña" /></div>
      
          
          
          
          <div>
              <q-btn color="primary" class=" full-width" label="registro"  type="submit" @click="register()" />
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
      password:null,
      password_verify:null,

    }
  },
  props:['boxes', 'delivery_points', 'total'],
  methods: {
    register(){
      if (this.password != this.password_verify || this.password === null) {
        this.$q.notify({
          message: "las contraseñas deben coincidir",
          color: "red",
          position: "right",
        });
        return;
      }
      if (this.tlf === null) {
        this.$q.notify({
          message: "debe colocar un numero de telfono",
          color: "red",
          position: "right",
        });
        return;
      }
      if (this.name === null) {
        this.$q.notify({
          message: "debe colocar un nombre",
          color: "red",
          position: "right",
        });
        return;
      }
      if (this.email === null) {
        this.$q.notify({
          message: "debe colocar un correo",
          color: "red",
          position: "right",
        });
        return;
      }
      this.$store.dispatch('auth/register', {
        name:this.name, 
        tlf:this.tlf, 
        email:this.email,
        password:this.password_verify, 
        carnet_id:this.carnet_id}).then(res=>{
          this.$route.name=== "register"? 
          this.$router.push('/') 
          :
          this.$emit('register', true);
      }).catch(err=>{

      })
    }
  },
}
</script>
