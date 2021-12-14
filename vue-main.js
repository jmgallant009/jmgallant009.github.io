import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const vueApp = new Vue({
    el: '#vapp',
    data: { 
     display: 'redbox' 
    }
  })