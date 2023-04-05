
 

import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'

import './router/index'
import router from './router/index'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import mitt from 'mitt';                  // Import mitt
const emitter = mitt(); 
// console.log(emitter,); 
// import bootstrap from 'bootstrap'
const vuetify = createVuetify({
  components,
  directives,
})



//Create Pinia Instance 
const pinia = createPinia()
const app = createApp(App)

//use pinia Instance
app.use(pinia)
app.component('EasyDataTable', Vue3EasyDataTable);

app.use(vuetify)
app.use(router)
app.provide('emitter', emitter);  
app.mount('#app')