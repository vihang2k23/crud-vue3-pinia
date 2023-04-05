 
import { defineStore } from "pinia";
import {ref,reactive,computed}  from 'vue'
import axios from "axios"

export const useteamsStore = defineStore('teams',()=>{
//state
let data = ref([]);

// console.log(data,"data------");

//getters
const getdata = computed(()=>{
   return  data.value
})
//actions 

async function fetchdata() {
    try {
        const res = await axios.get('http://localhost:3000/teams')
        // console.log(res,"res");
        this.data = res.data
        // console.log(this.data,"data");
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
      
} 

async function setdata(data) {
    try{
        const res = await axios.post("http://localhost:3000/teams",data)
        console.log(res,"res--->");
        this.data.push(res)
        // console.log(this.data,"response data");
    }
    catch(error){
        alert(error,"error")
    }
}

async function deletedata(value){
    try{
        await axios.delete("http://localhost:3000/teams/"+value.id)
    }catch(error){
        alert(error,"error")
    }
}
async function updatedata(value,data){
    try{
       const res =  await axios.put("http://localhost:3000/teams/"+value.id,data)
       console.log(res);
    }catch(error){
        alert(error,"error")
    }
}
 return{
    data,
    getdata,
    
   deletedata,
   fetchdata,
    setdata
 }
})