<template>
  <div>
      <q-card class="auth__card row ">
          <q-card-section class="col-12 flex flex-center text-h4">
                Login

          </q-card-section>
          <q-card-section class="col-12 " >
            <q-form class="q-gutter-sm" @submit="login">
            <div>
                <q-input outlined  v-model="email" type="email"  label="Correo" />
            </div>    
            <div>
                <q-input outlined  type="password"  v-model="password" label="Contraseña"  />
            </div>
            <div>
              <q-btn color="primary" class=" full-width" label="iniciar sesion"  type="submit"  />
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
                this.$route.name=== "login"? 
                this.$router.push('/') 
                :
                this.$emit('register', true);
               
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
