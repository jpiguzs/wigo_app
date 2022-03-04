<template>
  <q-page class="flex flex-center">
      <login/>
  </q-page>
</template>

<script>
import login  from 'components/auth/Login'
export default {
  name: 'PageIndex',
   data() {
     return {
       text:null
     }
   }, 
   components:{login}
}
</script>
