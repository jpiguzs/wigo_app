<template>
  <div class="q-mt-xl flex flex-center">
    <q-card class="auth__card">
        <q-card-section>
           Cotizaciòn
        </q-card-section>
        <div v-show="step === 1">
         <q-checkbox v-model="all_cargo" label="Cotizar por toda la carga" color="teal" />
        <q-card-section v-if="boxes.length > 0">
            <div class="row">
                <boxes v-for="(box, index) in boxes" class="col-md-4 col-sm-12 full-width" :box="box" :key="index" @deleteThis="remove" />
            </div>
            <q-card-section>
              <q-btn color="blue" icon="add" label="agregar otras especificaciones de caja" @click="boxes_count ++"/>
              
            </q-card-section>
        
          <div class="q-ml-sm text-h4">
            
          </div>
          <q-btn @click="getTotalBoxes()" label="Sigiuiente" />
        </q-card-section>
        </div>
        <div v-show="step===2">
        <div class="q-ml-sm ">
        <div class="text-h4">
         
        </div>
            <div>
           
            </div>
            <div>
                
            </div>
            
          </div>
            <q-btn @click="step=1" label="volver" />
        <q-card-section>
            <pickupp :boxes="boxes" :total_cargo="all_cargo" />
        </q-card-section>
       
        </div>
        <div v-show="step===3">
        <div class="q-ml-sm text-h4">
            Monto a pagar : {{total}}$
             
          </div>
           <div>
                <ticket :boxes="boxes"/>
            </div>
              
            <q-btn @click="step=2" label="volver" />
                <q-btn color="green" @click="set_order()" label="hacer pedido" />
        <q-card-section>
         
        </q-card-section>
       
        </div>
        <div v-show="step===4">
        <div>
            Monto  a pagar : {{total}}$
           
            <div>
                <q-checkbox v-model="express" label="hacer pedido Express" color="teal" />
            </div>
            <q-separator/>
            <div class="q-gutter-sm row">
                <div class="text-center col-12 text-uppercase">
                    Metodos de pago
                </div>
                  <q-radio class="col-12" v-model="payment_methods" :val="1"  label="binance" >
                      <q-avatar>
                        <img
                      src="/binance.png"
                      alt="Aboonda logo"
                      style="width:20px; height: 20px"
                    />
                  </q-avatar>
                  </q-radio>
                  <q-radio class="col-12" v-model="payment_methods" :val="2" label="PayPal" >
                   <q-avatar>
                        <img
                      src="/paypal.jpeg"
                      alt="Aboonda logo"
                    style="width:20px; height: 20px"
                    />
                    </q-avatar>
                  </q-radio>
                  <q-radio class="col-12" v-model="payment_methods" :val="3" label="Tarjeta de credito" >
                    <q-avatar>
                       <q-icon name="payment" />
                    </q-avatar>
                  </q-radio>
                  <q-radio class="col-12" v-model="payment_methods" :val="4" label="Efectivo" > 
                  <q-avatar>
                       <q-icon name="payments" />
                    </q-avatar>
                  </q-radio>
                  <q-radio class="col-12" v-model="payment_methods" :val="5" label="Transferencias" > 
                  <q-avatar>
                       <q-icon name="account_balance" />
                    </q-avatar>
                  </q-radio>
    </div>
          </div>
           <q-separator/>
          <div v-if="!user">
              <div v-if="actions===1">
                <login />
                <q-btn  color="primary" label="registro" @click="actions=2" /> 
              </div>
              <div v-if="actions===2">
                <resgister />
                <q-btn  color="primary" label="login" @click="actions=1" /> 
              </div>
          </div v-if="user">
            <q-btn color="green" @click="set_order()" label="hacer pedido" />
             <q-btn @click="step=2" label="volver" />
          <div>
          
          </div>
          
           
              
        
       
        </div>
        <q-card-section>
          <div v-show="step===5">
            <div class="flex flex-center">
                  <q-icon name="done" color="teal" size="4.4em" />
                  <div class="text-h6">
                      hemos recibido su cotizacion de forma exitosa,
                      proto nos comunicaremos con usted, gracias por su preferencias
                  </div>
            </div>
          </div>
        </q-card-section>
    </q-card>
  </div>
</template>

<script>
import  boxes from './Boxes'
import pickupp from './Pickupp'
import contact from './Contact'
import login from 'components/auth/Login'
import resgister from 'components/auth/Register'
import ticket from './Ticket'
export default {
  // name: 'ComponentName',
  data () {
    return {
      total:null,
      total_pick:null,
      boxes:[],
      boxes_count:0,
      total_boxes:0,
      step:1,
      delivery_points:[],
      actions:1,
      percentage:0,
      truck_quantity:0,
      express: false,
      payment_methods:1,
      all_cargo:false,
    }
  },
  computed:{
    user:{
      get(){
        return this.$store.getters['auth/user']
      }
    }
  },
  components:{boxes,pickupp, contact, login, resgister, ticket },
  watch:{
    express(newVal){
      if(newVal){
        this.total = this.total + 7;
      }else{
       this.total = this.total -7;
      }
    },
    boxes_count(newVal){
      this.boxes = [];
      console.log(newVal)
      for( let index=0; index < newVal; index++){
        let data = {
          id: index,
          height:0,
          width:0,
          length:0,
          total:0,
          validate: false,
          quantity:0,
          values:[],
          getQuantity: function (){
            this.values.forEach(val=>{
              this.quantity = parseInt(this.quantity) + parseInt(val.val);
            })
          }
        }
        this.boxes.push(data)
      }
      //console.log(this.boxes)
    },
    all_cargo(newVal){
      if(newVal){
        this.step =2;
      }
    }
    
  },
  methods: {
    getTotalBoxes(){
    
      let total = 0;
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
      this.step = 2;
    },
    getTotal(){
      //this.getTotalBoxes()
      this.total_boxes = 0;
      this.total = 0;
       let total = 0;
       if(!this.all_cargo){
           this.boxes.forEach(box=>{
        box.getQuantity();
        box.total= ((box.height * box.width * box.length)/4400)* box.quantity;;
        total = total+ box.total;
        //total = total + box.total;
      })
      //console.log(total)
      this.percentage = (total*100)/400;
      this.total_boxes = total > 140 ? total * 0.05 : 7;
      this.total_boxes = this.total_boxes.toFixed(2);
      }
    
      else{
        this.percentage = ((1800000/4400)*100)/400;
        this.total_boxes = (1800000/4400)*0.05;
        console.log(this.total_boxes, 'total de cajas')
        this.total_boxes = this.total_boxes.toFixed(2)
      }
      //this.percentage = this.percentage.toFixed(2);
      //this.truck_quantity = this.percentage/100 > 0 ? this.percentage/100 : 1 ;
      this.total = parseFloat(this.total_boxes) + parseFloat (this.total_pick.toFixed(2));
      //console.log(this.total_pick, 'listo')
      this.step = 3;
    },
    set_order(){
      if(!this.user){
        this.step= 4
      }else{
        axios.post("budget/register", {total:this.total, delivery_points:this.delivery_points, boxes:this.boxes, payment_methods:this.payment_methods, express:this.express, all_cargo:this.all_cargo}).then(res => {
          console.log(res.data)
          this.step = 5;
        }).catch(err=>{

        })
      }
    },
    remove(id){
      this.boxes.splice(id, 1);
      

    }
    
  },
  mounted() {
    this.boxes_count = 1;
     this.$root.$on('set_total_pick', (data)=>{
       this.total_pick = data.total;
       this.delivery_points = data.delivery_points;
       this.getTotal();
       
     })
  },
}
</script>
