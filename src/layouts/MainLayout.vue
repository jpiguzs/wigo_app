<template>
  <q-layout view="lHh Lpr lFf">

 <q-toolbar class="bg-white text-primary fixed z-top" style="top:0">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-avatar>
        <img
      src="/wigo_logo.jpg"
      alt="Aboonda logo"
      style="width:100px"
    />
      </q-avatar>

      <q-toolbar-title></q-toolbar-title>
       <q-btn flat   label="cotizar" @click="$router.push('/budget')" />
      
        <div v-if="!user" >
             <q-btn flat   label="login" @click="auth_to(1)" />
              <q-btn flat  label="registro" @click="auth_to(2)" />
     
        </div>
        <div v-if="user" >
          <div class="text-uppercase">{{user.name}}</div>
            
        </div>
         <q-btn v-if="user" flat label="salir" @click="logout()"/>
        <!--<q-btn v-if="user" flat label="Historial" @click="$router.push('/cotization')"/>-->

      <q-btn flat round dense icon="home" @click="$router.push('/')" />
    </q-toolbar>
     
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  computed :{
      user :{
        get(){
         return this.$store.getters['auth/user'];
        }
      }
  },
  methods: {
    auth_to(action){
      this.$router.push({name:action ===1 ? 'login' : "register"  , params:{action:action}})
    },
    logout(){
      this.$store.commit('auth/log_out')
      this.$router.push('/')
       this.$store.commit('auth/set_expire_token', false)
    },
  }
}
</script>
