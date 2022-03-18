import { Notify } from 'quasar'
export const CreateId = ()=>{
    let id = 'box'+ Date.now();
    return id;
}
export const CreateBox = (origin_code=null)=>{
    let box = {
        id: CreateId(),
        height:0,
        width:0,
        length:0,
        total:0,
        validate: false,
        delivery_validate:false,
        quantity:0,
        values:[],
        origin_code,
        max:0,
        max_leftover:0,
        notify:Notify,
        purgeValues: function () {
          let values = this.values.filter(val =>  parseInt(val.val=== 0))
          values.forEach(val =>{
            let index = this.values.findIndex(value=> value.id ===val.id);
            this.values.splice(index, 1);
          })
        },
        getQuantity: function (){
          //this.quantity = 0;
          this.values.forEach(val=>{
            this.quantity = parseInt(this.quantity) + parseInt(val.val);
          })
        },
        seTleftover: function() {
          let total = 0;
          this.values.forEach(val=>{
            console.log(val.val)
            total += parseInt(val.val) 
          })
          
          this.max_leftover = this.max - total;
          
        },
        setValidate: function () {
          this.delivery_validate= true; 
          if(this.max_leftover!=0){
            this.delivery_validate = false;
             this.notify({
                message: "tienes cajas por llenar",
                color: "red",
                position: "right",
              });
              //return;
          } else{
            this.values.forEach(val=>{
            console.log(val)
            if(val.code === null){
              this.delivery_validate = false;
               this.notify({
                message: "debes selecionar todos sitios",
                color: "red",
                position: "right",
              });
            }
          
          })
            
          }
          
          
        },
        
      }
      return box;

}