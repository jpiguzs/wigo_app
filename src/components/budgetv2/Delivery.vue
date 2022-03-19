<template>
  <div>

      <q-input 
      v-model="box.values[index_item].val" 
      outlined 
      type="number"  
      :label="label" 
      
      :rules="[ val => setMax(parseInt(val)) || 'Sobrepasa la cantidad maxima',]"
      :hint="'Cajas pendientes '+ box.max_leftover" />
      
  
  </div>
</template>

<script>
import {CreateId,} from '../../utilities/utilitiesFunctions';
export default {
  // name: 'ComponentName',
  data () {
    return {
      quantity: null,
      index_item: null,
    }
  },
  props:{
    label:{
      type: String,
      default:"Caja Default"
    },
    box:{
        type: Object,
        default: function() {
          return {
            id: null, 
            height: null,   
            width:null, 
            length:null, 
            total:0 , 
            validate:false, 
            max:0, 
            max_leftover:0,
          }
       
        }      
    },
    delivery_code:null,
  
  },
  watch:{
    delivery_code(delivery_code){
      console.log(delivery_code)
      this.box.values[this.index_item].code = delivery_code;
      console.log(this.box.values)
    }
  },
  methods: {
    CreateId,
     setMax(val){
      if(val){
        let val_toString =  val.toString()
        let val_add = val_toString.substr(0,val_toString.length-1)
        if(val_add){
          console.log(val_add, )
          this.box.max_leftover = parseInt(this.box.max_leftover) + parseInt(val_add)
        }
        //console.log(val)
        let value = parseInt(val)
        let box = parseInt(this.box.max_leftover);
        console.log(box, val,"vass")
        if(value <= box){
          this.box.seTleftover();
          //console.log(val )
           return true;
        }else{
          return false;
        }
      }else{
        return true;
      }
       
       
      },
      
  },
  mounted() {
      let data = {
           val:0,
           code:this.delivery_code,
           id: this.CreateId()
           //delivery_point_id:this.delivery_point.id,
           
         }
        let index = this.box.values.push(data);
        this.index_item = (index - 1)
         this.box.seTleftover();
  }
}
</script>
