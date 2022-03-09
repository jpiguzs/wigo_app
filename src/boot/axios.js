
import axios from 'axios'
import {
    Loading,
  
    
  } from 'quasar'
import { loading } from 'src/store/auth/getters';
export default ({store }, inject) => {
global.axios = axios;
// global.axios.defaults.baseURL = "http://192.168.0.117:8000/api";
global.axios.defaults.baseURL = process.env.API;


global.axios.interceptors.request.use(async function (config) {
    //const token = await _this.gettoken();

    Loading.show();
    const token = 'bearer ' + localStorage.getItem("token");
    config.headers.Authorization = token;
    return config;
});
global.axios.interceptors.response.use(function (response){
    Loading.hide();
    return response;
}, function (error){
    Loading.hide();
    if(error.response.status===401) store.commit('auth/set_expire_token', true);
    return Promise.reject(error);
})
}