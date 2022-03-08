<template>
  <div>
    <div class="full-width">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <imagen />
        
        </div>
            <div class="col-md-6 col-sm-12">
             <description />
        
         </div>

      </div>
    </div>
  
  </div>
</template>

<script>
import imagen from './image'
import description from './Description'
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  components:{imagen, description}
}
</script>
