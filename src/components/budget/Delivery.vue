<template>
  <div class="q-mt-sm"> 
        <div>
          <q-select   class="text-uppercase" input-class="text-uppercase"  popup-content-class="text-uppercase"  outlined options-dark  label-color="black" v-model="delivery" :options="cities" :option-value="opt => Object(opt) === opt && 'code' in opt ? opt.code : null" :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name: '- Null -'" label="Entrega"   />
        </div>
        <div v-for="(box, index) in boxes" v-if="!total_cargo" >
            <q-input class="q-mt-sm" outlined type="number" v-model="box.values[item_number].val" :label="'caja'+(index+1) +  '  ' +box.width + 'cm x' + ' '+box.height+ 'cm x' + ' '+ box.length+ 'cm'  "  v-on:focus="focusGet" :rules="[ val => parseInt(val) <= parseInt(box.max) || 'Sobre pasa la cantidad maxima',]" 
            :hint="'Cajas pendientes '+ box.max_leftover" v-on:keyup="setMax(index, box.values[item_number].val)"
/>
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
        this.boxes[index].max_leftover =  this.boxes[index].max;
        let box = this.boxes[index].max;
        if(val <= box){
          this.boxes[index].max_leftover = this.boxes[index].max_leftover - val;
        }
      },
      setNewMax(){
        this.boxes.forEach(box =>{
          box.max = box.max_leftover;
        })
      }
    },
    mounted() {
      this.setNewMax();
       this.boxes.forEach(box =>{
         let data = {
           val:0,
           code:null
         }
         box.values.push(data)
       })
       console.log(this.boxes)
    },

}
</script>
