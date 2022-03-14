<template>
  <div>
    <div v-for="(box, index) in boxes" :key="index" >
        <q-card flat>
          <q-card-section class="">
          <div class="text-center text-h6">
               caja {{index +1}}
          </div>
           <div class="text-caption">
              medidas: {{ box.width  }}cm X {{box.height}} cm X {{box.length}} cm
           </div>

          </q-card-section>
          <q-separator/>
          <q-card-section>
                <div v-for="(value, index2) in box.values" :key="index2">
                  <div>
                        Punto de entrega: {{getNameCity(value.code)}}
                    </div>
                    <div>
                      Cantidad: {{value.val}}
                    </div>
                   
                </div>
          </q-card-section>
           <q-separator/>
        </q-card>

    </div>
  </div>
</template>

<script>
import { city} from "../../status/citys.js";
export default {
  // name: 'ComponentName',
  data () {
    return {cities: city}
  },
  props:['boxes'],

  methods:{
    getNameCity(code){
      let city =this.cities.find(city => city.code===code);
      return city.name
    }
  }
}
</script>
