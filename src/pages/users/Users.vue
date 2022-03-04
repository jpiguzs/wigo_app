<template>
  <q-page padding>
    <!-- content -->
    <users/>
  </q-page>
</template>

<script>
import users from 'components/users/Users'
export default {
  name: 'PageUsers',
  components:{users}
}
</script>
