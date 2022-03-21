<template>
  <div >
  <expantions
  class="q-gutter-sm"
  icon="local_parking"
  :title="'Parada '+ stopIndex "
  bg="bg-green"
  :default_opened="stopIndex === 1 ? true : false"
  :showClose="true"
  :stop_id="stop.id"
  >


    <div>
      <select_cities v-model="delivery" :emit_value="false" />
    </div>
    <div>
       <q-select
            class="text-uppercase"
            input-class="text-uppercase"
            popup-content-class="text-uppercase"
            outlined
            options-dark
            label-color="black"
            v-model="action"
            :options="items"
            :option-value="opt => Object(opt) === opt && 'id' in opt ? opt.id : null"
            :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name: '- Null -'"
            :label="showLabel"

            emit-value
            clearable
            behavior="menu"
            map-options
              />
    </div>
    <div v-if="action===1  || action=== 3">
     <expantions  icon="local_shipping" title="Delivery" bg="bg-primary">
          <select_items
          v-model="selected_for_delivery"
          :filter_conditions="3" />

          <div v-if="delivery_box.length > 0">
              <delivery
              v-for="(box, index) in delivery_box"
              :key="index"
              :label="box.name"
              :box="box.box"
              :delivery_code="stop.id"
              />
          </div>
     </expantions>
    </div>
    <div v-if="action===2 || action=== 3">
     <expantions
     icon="inventory_2"
     title="Pick Up"
     bg="bg-primary"

     >
          <select_items
          v-model="selected_item"
          :filter_conditions="0" />
          <div v-if="selected_boxes.length > 0">
            <boxadd
            :pick_code="stop.id"
             v-for="(box, index) in selected_boxes"
            :key="index"
            :label="box.name"
            :box="box.box"
             />

          </div>
          <div v-if="new_boxes.length > 0">
            <div class="row q-pt-md"  v-for="(box, index) in new_boxes" :key="index" >
                  <boxes :box="box" :boxIndex="index + 1" :pick_code="stop.id"/>
            </div>
            <div class="q-pt-md">
              <q-btn color="blue" icon="add" round @click="AddBox"/>
            </div>
          </div>
     </expantions>
    </div>
   </expantions>

  </div>
</template>

<script>
import select_cities from './SelectCities'
import {items} from '../../status/items.js'
import expantions from 'components/commons/Expantions'
import select_items from './Select-items'
import boxadd from './AddQuantityBox'
import { CreateBox, CreateId } from '../../utilities/utilitiesFunctions';
import boxes from './Boxes'
import delivery from './Delivery'
export default {
  // name: 'ComponentName',
  data () {
    return {
      delivery:null,
      action:null,
      selected_item:null,
      items,
      selected_boxes:[],
      new_boxes:[],
      delivery_box:[],
      selected_for_delivery: [],
      delivery_code: null,
      showLabel:'Delivery/Pick up',
      id_stop:null,
    }
  },
  props:['boxes', 'stopIndex', 'stop', 'origin_code'],
  watch:{
    delivery(delivery)
    {
      //console.log(delivery)
      this.getTotal();
    },
    origin_code(code)
    {
        this.stop.origin_code = code;

    },
    action(action){
      this.showLabel='';
      console.log(action);

    },
    selected_for_delivery(selected_for_delivery){
      console.log('Delivery Select' , selected_for_delivery)
      if(selected_for_delivery.length > 0){
        selected_for_delivery.forEach(item =>{
          this.setForDelivery(item.id, item.name);
        })
      }
    },
    selected_item(selected_item, old_selected_item){
      console.log(selected_item)
      //for action 1
      if(old_selected_item){
        let oldIndex = old_selected_item.findIndex(item => item.actions === 1 );

        let actionIsNewBox = false
        if(oldIndex!=-1) {
        //if actions 1 in found will check if still exist inside of select item
          let newIndex = selected_item.findIndex(item => item.actions ===1);
        //if this not exist will return true
          actionIsNewBox = newIndex ===-1 ? true : false;
        }
        if(actionIsNewBox){
          this.removeAllBoxes();
        }

      }
       if(old_selected_item){
        let oldIndexN = old_selected_item.findIndex(item => item.actions === 3 );

        let actionIsSelectBox = false
        if(oldIndexN!=-1) {
        //if actions 1 in found will check if still exist inside of select item
          let newIndexN = selected_item.findIndex(item => item.actions ===3);
        //if this not exist will return true
          actionIsSelectBox= newIndexN ===-1 ? true : false;
        }
        if(actionIsSelectBox){
          this.selected_boxes = [];
        }

      }
      // check if old action contains a "create new box"


      if(selected_item.length > 0){

        selected_item.forEach(item=>{
        if(item.actions===3){
          this.SetSelectedboxes(item.id, item.name);
        }else if(item.actions===1){
          this.setNewBox()
        }
      })
      }else{
        this.selected_boxes = [];
      }

    }
  },
  components:{select_cities, expantions, select_items, boxadd, boxes, delivery},
  methods: {
    CreateBox,
    CreateId,
    SetSelectedboxes(id, name){
      let box = this.boxes.find(box => box.id === id);
      let data = {
        name,
        box
      }

      let index = this.selected_boxes.findIndex(box => box.box.id === id);
      if(index===-1)this.selected_boxes.push(data);



    },
    setForDelivery(id, name){
      let box = this.boxes.find(box => box.id === id);
      let data = {
        name,
        box
      }
      if(this.delivery_box.length > 0){
        console.log(this.delivery_box)
        let index = this.delivery_box.findIndex(box => box.box.id === id);
        if(index===-1)this.delivery_box.push(data);
      }else{
        this.delivery_box.push(data);
      }
      console.log('delivery_box',this.delivery_box)




    },
    setNewBox(){
      if(this.new_boxes.length ===0){
         let origin_code = this.boxes[this.boxes.length -1].origin_code;
        let new_box = this.CreateBox(origin_code);
        this.boxes.push(new_box);
        this.new_boxes.push(this.boxes[this.boxes.length -1]);
      }

    },
    AddBox(){
      let origin_code = this.boxes[this.boxes.length -1].origin_code;
       let data = {
         origin_code,
       }

      this.$root.$emit('add_box', data)
      this.new_boxes.push(this.boxes[this.boxes.length -1]);
    },
    remove(id){
      let boxIndex = this.new_boxes.findIndex(box => box.id === id);
      if(boxIndex !=-1)  this.new_boxes.splice(boxIndex, 1);

    },
      getTotal(){
        console.log(this.origin_code)
        let ref = this.delivery.ref.find(destiny=>{
          return destiny.code === this.origin_code;
        })

        this.stop.total =  ref.value;
        this.stop.delivery_code = this.delivery.code;
        this.delivery_code = this.delivery.code;
        console.log(this.delivery_code)
        //this.$emit('input', this.delivery_point)

      },
      removeAllBoxes(){

        let idsForDelete = this.new_boxes.map(box=>{
          return box.id;
          //console.log(idsForDelete)
          //this.$root.$emit('delete_box', box.id);
        })
        idsForDelete.forEach(boxid=>{
          this.$root.$emit('delete_box', boxid);
        })
      }
  },

  mounted() {
    /*console.log('Boxes',this.boxes);
    console.log('stopIndex',this.stopIndex);
    console.log('stop',this.stop);
    console.log('origin_code',this.origin_code);

    console.log('Items',this.items);*/
    this.id_stop = this.CreateId();

    this.$root.$on('delete_box',(id)=>{
      this.remove(id)
    })
  }
}
</script>
