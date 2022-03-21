<template>
  <div>
    <div>
        <!--<div>
            Monto a pagar : {{total.toFixed(2)}}$ / {{getBs(total)}}Bs
          </div> -->
    </div>

    <div class="row text-white bg-primary text-capitalize text-bold">
        <div class="col-1">

      </div>
      <div class="col-4">
          descripciòn
      </div>

      <div class="col-2">
Medida
      </div>
      <div class="col-2">
Cant
      </div>
      <div class="col-2">
Precio
      </div>

    </div>
    <div v-for="(point, index) in points" :key="index" >
        <q-card flat>
            <q-card-section  >
              <div class="row text-capitalize text-bold">
                <div class="col-12 text-black ">

                  {{point.description1}}
                   <q-icon name="local_shipping" size="25px" color="info" float-right/>

                </div>
                <div class="col-12 text-black">
                  <q-icon name="local_shipping" size="25px" color="info" float-right/>
                  {{point.description2}}
                </div>


              </div>

              <!--{{point.description}} -->


            </q-card-section>

            <q-card-secction>
              <table class="full-width text-center text-black">
                 <thead>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  <tr v-for="(value, index2) in point.boxes" :key="index2">
                    <td>{{"Delivery"}}</td>
                    <td>{{ value.width}}x{{value.height}}x{{value.length}}</td>
                    <td>{{value.quantity}}</td>
                    <td>{{ getFree(value) }}$</td>

                  </tr>
                    <tr v-for="(value, index3) in point.pick" :key="index3">
                    <td>{{"Pick"}}</td>
                    <td>{{ value.width}}x{{value.height}}x{{value.length}}</td>
                    <td>{{value.quantity}}</td>
                    <td>0</td>

                  </tr>
                </tbody>
                 <!--<tfoot class="text-h7 text-uppercase">
                  <tr>
                    <td></td>
                    <td>Total</td>
                    <td></td>
                    <td>{{total.toFixed(2)}} $ / {{getBs(total)}} Bs</td>
                  </tr>
                </tfoot> -->
              </table>


            </q-card-secction>




          <q-separator/>
        </q-card>

    </div>

    <q-card >

      <div class="row text-white bg-black text-bold">
        <div class="col-8">

        </div>

         <div class="col-4 text-right">
            {{'Total: $ '}} {{total.toFixed(2)}}
        </div>
      </div>
       <div class="row text-white bg-black text-bold">
        <div class="col-8">

        </div>

         <div class="col-4 text-right">
            {{'Bs '}} {{ getBs(total)}}
        </div>
      </div>
    </q-card>

    <div>

    </div>
  </div>
</template>

<script>
import { city} from "../../status/citys.js";
export default {
  // name: 'ComponentName',
  data () {
    return {cities: city, points:[], dolar:null,showWigo:false}
  },
  props:['boxes', 'stops' ,'total'],

  methods:{
    getNameCity(code){
      let city =this.cities.find(city => city.code===code);
      if(city){
        return city.name
      }
      else{ return 'no existe'}
    },
    setPoints(){
      console.log(this.stops)
      this.stops.forEach(point=>{
        console.log(point)
        let description = this.getNameCity(point.origin_code)+' / '+this.getNameCity(point.delivery_code);
        let boxes = [];
        let pick = [];
        this.boxes.forEach(box=>{
          console.log(box, 'caja')
          console.log(point)
          let box_found = box.values.filter(val=> val.code === point.id);
          let pickup_found = box.pickup.filter(pick=> pick.pick_code === point.id);
          let box_description = 'Caja '+ (box.id+1);
          console.log(box_found, 'found');
          if(box_found.length > 0){
            box_found.forEach(bx=>{
              let data = {
            description: box_description,
            quantity: bx.val,
            width:box.width,
            height:box.height,
            length:box.length,
            price:(((parseInt(box.width)*parseInt(box.height)*parseInt(box.length))/4400)*parseInt(bx.val))*0.05,
          }
          boxes.push(data);
            })

          }
          if(pickup_found.length > 0){
            pickup_found.forEach(pic=>{
              let pickupp = {
              description:box_description,
              quantity:pic.quantity,
              width:box.width,
              height:box.height,
              length:box.length,

            }
            pick.push(pickupp)
            })

          }


        })
        let data2 = {
          description:description,
          description1:this.getNameCity(point.origin_code),
          description2:this.getNameCity(point.delivery_code),
          boxes:boxes,
          pick:pick,
        }
          this.points.push(data2)

      })
      console.log(this.points, 'puntos')
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
    },
     getBss(value,dolar){
      let gratis=0.45454545454545453;
      let bs = dolar * this.dolar;

       if(value.quantity==1){
          if(gratis=== (parseInt(value.width)*parseInt(value.height)*parseInt(value.length))/4400){
            return 0;
          }
          return bs.toFixed(2);

       }
       else{
         return bs.toFixed(2);
       }
    },

    getFree(value){
       // {{ value.width}} cm x {{value.height}} cm x {{value.length}} cm

       let gratis=0.45454545454545453;

       if(value.quantity==1){
          if(gratis=== (parseInt(value.width)*parseInt(value.height)*parseInt(value.length))/4400){
            return 0;
          }

          return value.price.toFixed(2);
          //this.showWigo=false;
       }
       else{
         return value.price.toFixed(2);
         //this.showWigo=false;
       }

    }



  },
  mounted() {
    this.getDolar();
    this.setPoints();

    console.log('Box', this.boxes);
    console.log('stops', this.stops);
    console.log('total', this.total);

  }
}
</script>
