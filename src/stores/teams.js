 
import { defineStore } from "pinia";
import {ref,reactive,computed}  from 'vue'
import axios from "axios"

export const useteamsStore = defineStore('teams',()=>{
//state
let data = ref([]);
let count = ref(0)
console.log(data,"data------");

//getters
const getdata = computed(()=>{
   return  data.value
})
//actions 

async function fetchdata() {
    try {
        const res = await axios.get('http://localhost:3000/teams')
        console.log(res,"res");
        this.data = res.data
        console.log(data,"data");
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
      
} 
function increment (){
    count.value++
}
async function setdata(data) {
    try{
        const res = await axios.post("http://localhost:3000/teams",data)
        console.log(res,"res--->");
        this.data.push(res)
    }
    catch(error){
        alert(error,"error")
    }
}
 return{
    data,
    getdata,
    fetchdata,
    count,
    increment,
    setdata
 }
})