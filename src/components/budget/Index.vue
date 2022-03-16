<template>
  <div class="q-mt-xl flex flex-center">
    <q-card class="auth__card card-top">
        <q-card-section>
     
        </q-card-section>
        <div v-show="step === 1" class="q-pa-none">
         <!--<q-checkbox v-model="all_cargo" label="Cotizar por toda la carga" color="teal" />-->
           <div class="row q-pt-md"  v-for="(box, index) in boxes" :key="index" >
                  <div class="col-10" >
                       
                        <div class="text-center q-ml-sm full bg-white text-primary"> Caja {{index + 1}}</div>
                  </div>
                  <div class="col-1">
                     <q-btn flat color="red" icon="cancel"  @click="remove(box.id)" />
                  </div>
                  <boxes :box="box" @deleteThis="remove" :indexBox="index"/>
            

           </div>
        
       
        <q-card-section v-if="boxes.length > 0">
            
            <q-card-section class="q-pa-none q-mb-md" >
              <q-btn color="blue" icon="add" round @click="boxes_count ++"/>
              <div class="text-h6">Caja</div>
            </q-card-section>
        
          <div class="q-ml-sm text-h4">
            
          </div>
          <q-btn @click="getTotalBoxes()" label="Siguiente" />
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
            
        <q-card-section>
            <pickupp :boxes="boxes" :total_cargo="all_cargo" >
                  <q-btn @click="step=1"  label="volver" />
            </pickupp>
            
        </q-card-section>
       
        </div>
        <div v-if="step===3">
        <div class="q-ml-sm text-h6">
          <div>
          Monto a pagar : {{total.toFixed(2)}}$ / {{getBs(total)}}Bs
          </div>
          
            
             
          </div>
           <div>
                <ticket :boxes="boxes" :delivery_points="delivery_points"/>
            </div>
              <div class="q-gutter-sm q-mt-sm">
                  <q-btn @click="step=2" label="volver" />
                  <q-btn color="green" @click="set_order()" label="hacer pedido" />
              </div>
              
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
      id:0,
      dolar: 0,
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
    boxes_count(newVal, oldVal){
      //this.boxes = [];
      if(newVal > oldVal){
         let data = {
          id: this.id,
          height:0,
          width:0,
          length:0,
          total:0,
          validate: false,
          quantity:0,
          values:[],
          max:0,
          max_leftover:0,
          getQuantity: function (){
            //this.quantity = 0;
            this.values.forEach(val=>{
              this.quantity = parseInt(this.quantity) + parseInt(val.val);
            })
          }
        }
        this.id++;
        
     
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
      if(this.boxes.length > 1){
        let boxIndex = this.boxes.findIndex(box => box.id === id);
        this.boxes.splice(boxIndex, 1);
        this.boxes_count --;
        
      
      }else{
         this.$q.notify({
          message: "No puede eliminar esta caja dado que solo queda una",
          color: "red",
          position: "right",
        });
        return;
      }
      

    },
    getDolar(){
      fetch('https://s3.amazonaws.com/dolartoday/data.json')
      .then(res =>res.json()).then(json =>{
        console.log(json);
        this.dolar = json.USD.promedio;
      }).catch(err=>{
        console.log(err)
      })
    },
    getBs(dolar){
      let bs = dolar * this.dolar;
      return bs.toFixed(2);
    }
    
  },
  mounted() {
    this.getDolar();
    this.boxes_count = 1;
     this.$root.$on('set_total_pick', (data)=>{
       this.total_pick = data.total;
       this.delivery_points = data.delivery_points;
       this.getTotal();
       
     })
  },
}
</script>
<style>
table {

  border-spacing: 0;
 
  overflow: hidden;
  font-size:16px;
}


th {
 
}

td:nth-child(1) {
  background: #fff ;
  color: #215A8E;
  
  
}

th:nth-child(1) {
  padding: 0 !important;
  
}

th, td {
  padding: 0.5em;
  
}
td {
  text-align:center;
}
body tr:nth-of-type(even) {
    background-color: #f3f3f3;
}
.full {
  width:75px;
  border-radius:10px;
  padding-top: 0.2em;
  padding-bottom:0.2em;
  border: 1px solid #1976D2;
}


</style>