<template>
  <div class="q-mt-xl flex flex-center" >
  <q-card class="auth__card card-top">
    <transition enter-active-class="animate__animated animate__backInLeft"   >
     <q-card-section v-show="step===1" >
      <origin  
      :boxes="boxes" 
      v-model="origin_code" 
      @selectedItems="SelectedItems"
      />
     </q-card-section>
     </transition>
    <transition enter-active-class="animate__animated animate__backInLeft"  >
          <q-card-section v-show="step===2">
              <div v-if="stops.length > 0" >
                <stops class="q-mt-md" :origin_code="origin_code" :boxes="boxes" v-for="(stop, index) in stops" :stop="stop" :stopIndex='index + 1' :key="index" />
              </div>
              <div class="row items-start text-center w  q-mt-md" >
                <div class="col-12">
                    <q-btn color="blue" icon="add" round @click="AddStops"/>
                </div>
                  
                <div class="text-h6 col-12">Paradas</div>
              </div>
              
          </q-card-section>
     </transition>
     <transition enter-active-class="animate__animated animate__backInLeft"  >
      <q-card-section v-if="step===3">
        <ticket :total="total" :boxes="boxes" :stops="stops"  />
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
import ticket from 'components/budget/Ticket'
import 'animate.css';
export default {
  // name: 'ComponentName',
  data () {
    return {
      boxes:[],
      step:1,
      stops:[],
      origin_code:null,
      total_pick:null,
      total:null,
      total_boxes:null,
    }
  },
  components:{origin, stepsBtn, stops, ticket},
  watch:{
    origin_code(origin_code){
      console.log(origin_code)
    }
  },
  methods: {
    CreateId,
    CreateBox,
    SelectedItems(data){
     
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
      AddStops(){
        let stop ={
          id:this.CreateId(),
          origin_code:this.origin_code,
          delivery_code: null,
          total: 0,
          validate:false
        }
        this.stops.push(stop);

      },
    remove(id){
      
      if(this.boxes.length > 1){
        let boxIndex = this.boxes.findIndex(box => box.id === id);
        this.boxes.splice(boxIndex, 1);
        this.$store.commit('budget/REMOVE_ITEM',id);
       
      
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
      if(this.step===1) this.next();
      if(this.step===2) this.getTotal();
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

      
      
      this.setItemsTolist()
      this.step++;
      if(this.step === 2 && this.stops.length === 0){
        this.AddStops()
      }
    },
    back(){
      if(this.step > 1){
        this.step--;
      }
      
    },
    setItemsTolist(){
      this.boxes.forEach((box, index) =>{
        let name = 'caja'+(index+1) +  '  ' +box.width + 'cm x' + ' '+box.height+ 'cm x' + ' '+ box.length+ 'cm' 
        let data = {
          name:name,
          id: box.id,
          actions:3
        };
        this.$store.commit('budget/SET_ITEM', data)
      })
    },
     getTotal(){
      //this.getTotalBoxes()
      this.total_boxes = 0;
      this.total = 0;
       let total = 0;
      
        this.boxes.forEach(box=>{
        box.purgeValues();
        box.getQuantity();
        box.total= ((box.height * box.width * box.length)/4400)* box.quantity;;
        total = total+ box.total;
        let validate = box.setValidate();
        //total = total + box.total;
      });
     /* let index = this.boxes.findIndex(box =>{
       return box.delivery_validate === false;
      })
      if(index!=-1){
        
        return;
      }*/
      //console.log(total)
      let total_pick = 0;
      this.stops.forEach(point=>{
        console.log(point)
        total_pick =total_pick + point.total;
      })
      
     
      total_pick  = total_pick + (1*this.stops.length);
      this.total_pick = total_pick;

      this.total_boxes = total > 140 ? total * 0.05 : 7;
      this.total_boxes = this.total_boxes.toFixed(2);
     
   
        this.percentage = ((1800000/4400)*100)/400;
        this.total_boxes = (1800000/4400)*0.05;
        console.log(this.total_boxes, 'total de cajas')
        this.total_boxes = this.total_boxes.toFixed(2)
      
      //this.percentage = this.percentage.toFixed(2);
      //this.truck_quantity = this.percentage/100 > 0 ? this.percentage/100 : 1 ;
      this.total = parseFloat(this.total_boxes) + parseFloat (this.total_pick.toFixed(2));
      //console.log(this.total_pick, 'listo')
      //this.step = 3;
      console.log(this.total)
      this.step++;
    },
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
