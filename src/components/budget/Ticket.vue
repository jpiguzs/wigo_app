<template>
  <div>
    <div v-for="(point, index) in points" :key="index" >
        <q-card flat>
          <q-card-section class="">
          <div class=" text-h6 text-uppercase">
               {{point.description}}
          </div>
          <div v-for="(value, index2) in point.boxes" :key="index2">
                  <div>
                        <div class="row">
                        <div class="col-2 ">
                        {{value.description}} 
                        </div>
                        <div class="col-8">
                             {{ value.width}} cm x {{value.height}} cm x {{value.length}} cm 
                        </div>    
                        
                       
                        
                        </div>
                        
                         
                    </div>
                    <div>
                       Cantidad : {{value.quantity}}
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
    return {cities: city, points:[]}
  },
  props:['boxes', 'delivery_points'],

  methods:{
    getNameCity(code){
      let city =this.cities.find(city => city.code===code);
      if(city){
        return city.name
      }
      else{ return 'no existe'}
    },
    setPoints(){
      this.delivery_points.forEach(point=>{
       let description = this.getNameCity(point.origin_code)+' -----> '+this.getNameCity(point.delivery_code);
        let boxes = [];
        this.boxes.forEach(box=>{
          console.log(box)
          let box_found = box.values.find(val=> val.code === point.delivery_code);
          let box_description = 'Caja '+ (box.id+1);
          console
          if(box_found){
             let data = {
            description: box_description,
            quantity: box_found.val,
            width:box.width,
            height:box.height,
            length:box.length,
          }
          boxes.push(data);
          }
         
        
        })
        let data2 = {
          description:description,
          boxes:boxes
        }
          this.points.push(data2)
          
      })
      console.log(this.points, 'puntos')
    }

  },
  mounted() {
    this.setPoints();
  }
}
</script>
