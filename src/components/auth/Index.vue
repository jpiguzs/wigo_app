<template>
  <div class="flex flex-center text-primary">
    <div v-if="action===1">
      <login />
    </div>
    <div v-if="action===2">
      <register />
    </div>
  
  </div>
</template>

<script>
import login from './Login'
import register from './Register'
export default {
  // name: 'ComponentName',
  data () {
    return {
      action:1
    }
  },
  components:{register, login},
  watch:{
    '$route.name' : function(newVal){
       let action = newVal=== "login"? 1 :2;
      this.changeAction(action)
    },
  },
  methods:{
    changeAction(action){
      this.action = action
    }
  },
  mounted() {
    console.log(this.$route)
    let action = this.$route.name=== "login"? 1 :2;
    this.changeAction(action)
  }

}
</script>
