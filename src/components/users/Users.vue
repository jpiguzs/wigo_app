<template>
  <div>
   <userForm/>

  <div class="q-mt-md">
   <userCard/>  
    <userCard/>


  </div>
  </div>
</template>

<script>
import userForm from './UsersForm'
import userCard from './UsersCard'
export default {
  // name: 'ComponentName',
  data () {
    return {

    }
  },
  components:{userForm, userCard}
}
</script>
