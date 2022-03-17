<template>
  <div class="q-mt-xl flex flex-center" >
  <q-card class="auth__card card-top">
    <transition enter-active-class="animate__animated animate__backInLeft"   >
     <q-card-section v-show="step===1" >
      <origin  :boxes="boxes" @selectedItems="SelectedItems"/>
     </q-card-section>
     </transition>
    <transition enter-active-class="animate__animated animate__backInLeft"  >
          <q-card-section v-show="step===2">
              <stops />
          </q-card-section>
     </transition>

     <q-card-actions>
     
      <stepsBtn v-if="boxes.length > 0" :nextFunction="test" v-model="step" :back="back"/>
     </q-card-actions>
  </q-card>
  
  </div>
</template>

<script>
import origin from './Origin'
import {CreateId, CreateBox } from '../../utilities/utilitiesFunctions';
import stepsBtn from './Steps-btn';
import stops from './Stops'
import 'animate.css';
export default {
  // name: 'ComponentName',
  data () {
    return {
      boxes:[],
      step:1
    }
  },
  components:{origin, stepsBtn, stops},
  methods: {
    CreateBox,
    SelectedItems(data){
      console.log(data)
      if(data.selected_item.length > 0){
        data.selected_item.forEach(items=>{
          if(items.actions === 1){
           this.AddBox(data)
          }
        })
        
        
      }
      else{
        this.boxes= []
        
      }

     

    },
    remove(id){
      console.log(id)
      if(this.boxes.length > 1){
        let boxIndex = this.boxes.findIndex(box => box.id === id);
        this.boxes.splice(boxIndex, 1);
       
      
      }else{
         this.$q.notify({
          message: "No puede eliminar esta caja dado que solo queda una",
          color: "red",
          position: "right",
        });
        return;
      }
    },
    AddBox(data){
       let box = this.CreateBox(data.origin_code);
        this.boxes.push(box)
    },
    test(){
      this.next();
    },
    next(){
      //let total = 0;
      let index = this.boxes.findIndex(box =>{
       return box.validate === false;
      })
      if(index!=-1){
        this.$q.notify({
          message: "debe llenar todos las medidas de la caja",
          color: "red",
          position: "right",
        });
        return;
      }
      
      //console.log(this.truck_quantity);
      
      this.step++;
    },
    back(){
      if(this.step > 1){
        this.step--;
      }
      
    }
  },
  mounted(){
    this.$root.$on('delete_box',(id)=>{
      this.remove(id);
    }),
    this.$root.$on('add_box',(data)=>{
      this.AddBox(data);
    })
    
  }
}
</script>
