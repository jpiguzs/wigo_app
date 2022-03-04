<template>
  <div>
      <q-card class="aboo_card glass full-width border-glass-1">
          <q-card-section class="flex flex-center">
                Login

          </q-card-section>
          <q-card-section  >
            <q-form class="aboo_form q-gutter-sm" @submit="login">
            <div>
                <q-input outlined dark v-model="email" type="email"  label="Correo" label-color="white" />
            </div>    
            <div>
                <q-input outlined dark type="password"  v-model="password" label="Contraseña" label-color="white" />
            </div>
            <div>
              <q-btn class="bg-green-9 full-width" label="iniciar sesion"  type="submit" @click="$router.push('/menu')" />
            </div>
            </q-form>
          </q-card-section>
      </q-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email:null,
      password:null,
    }
  },
  methods: {
     login() {
            let email = this.email;
            let password = this.password;
            let connections = [];
            const _this = this;
            this.$store.dispatch('auth/login', {
                email,
                password
            }).then(res => {
                let user = res.data.user;
                if(user.rol_id===2){
                     this.$router.push('/support')
                } if(user.rol_id===1){
                  this.$router.push('/main')
                }
               
                /*this.$root.$emit('hide_dialog');
                /this.get_notifications(res.data.user.id);
                this.$store.dispatch("chat/getChats").then(response => {
                        response.map((n, index) => {
                            connections.push(
                                this.ChatService.getMessages(n.id).subscribe(message => {
                                    //console.log(message);
                                    let data = {
                                        message: message.message,
                                        chat_id: message.room
                                    };
                                    if (n.id == message.room)
                                        _this.$store.commit("chat/set_message", data);
                                })
                            );
                            //console.log(message)
                        });

                        //this.$store.commit('chat/conections', connections)
                    })
                    .catch(error => {
                        console.log(error);
                    });*/
            }).catch(err => {
                console.log(err);
                this.$q.notify({
                    message: err,
                    color: 'red',
                    position: 'right'
                });
            })
        },
  },
}
</script>
