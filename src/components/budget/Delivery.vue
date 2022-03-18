<template>
  <div class="q-mt-sm"> 
        <div>
          <q-select   class="text-uppercase" input-class="text-uppercase"  popup-content-class="text-uppercase"  outlined options-dark  label-color="black" v-model="delivery" :options="cities" :option-value="opt => Object(opt) === opt && 'code' in opt ? opt.code : null" :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name: '- Null -'" label="Entrega"   />
        </div>
        <div v-for="(box, index) in boxes" v-if="!total_cargo" >
            <q-input class="q-mt-sm" outlined type="number" 
            v-model="box.values[item_number].val" :label="'caja'+(index+1) +  '  ' +box.width + 'cm x' + ' '+box.height+ 'cm x' + ' '+ box.length+ 'cm'  "  
            v-on:focus="focusGet" 
            :rules="[ val => setMax(index,parseInt(val)) || 'Sobrepasa la cantidad maxima',]" 
            :hint="'Cajas pendientes '+ box.max_leftover" />
        </div> 
      </div>
</template>

<script>
import { city} from "../../status/citys.js";
export default {
  // name: 'ComponentName',
  data () {
    return { cities: city, delivery:null}
  },
   props:{delivery_point: {
      type: Object,
      default: function() {
        return { id: null, origin_code: null,   delivery_code:null, total:0};
      }
    },boxes:{
      type:Array
    },item_number:0,
    total_cargo:false},
    watch :{delivery(newVal){
      this.getTotal();
    },
    'delivery_point.delivery_code'(newVal){
      if(newVal === null && this.delivery != null){
        this.getTotal()
      }
    }
    },
    methods: {
      getTotal(){
      
        let ref = this.delivery.ref.find(destiny=>{
          return destiny.code === this.delivery_point.origin_code;
        })
        
        this.delivery_point.total =  ref.value + this.boxes.length;
        this.delivery_point.delivery_code = this.delivery.code;
        this.boxes.forEach(box=>{
        
          box.values[this.item_number].code = this.delivery.code
        })
        this.$emit('input', this.delivery_point)
        
      },
      focusGet(e){
        console.log(e.target);
        document.getElementById(e.target.id).select()
      },
      setMax(index, val){
      if(val){
        let val_toString =  val.toString()
        let val_add = val_toString.substr(0,val_toString.length-1)
        if(val_add){
          console.log(val_add, )
          this.boxes[index].max_leftover = parseInt(this.boxes[index].max_leftover) + parseInt(val_add)
        }
        //console.log(val)
        let value = parseInt(val)
        let box = parseInt(this.boxes[index].max_leftover);
        console.log(box, val,"vass")
        if(value <= box){
          this.boxes[index].seTleftover();
          //console.log(val )
           return true;
        }else{
          return false;
        }
      }else{
        return true;
      }
       
       
      },
      setNewMax(){
        this.boxes.forEach(box =>{
          box.max = box.max_leftover;
        })
      }
    },
    mounted() {
      //this.setNewMax();
       this.boxes.forEach(box =>{
         let data = {
           val:0,
           code:null,
           delivery_point_id:this.delivery_point.id,
           
         }
         box.values.push(data);
         box.seTleftover()
       })
       console.log(this.boxes)
    },

}
</script>
