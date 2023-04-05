<script setup>
import { ref,inject, onMounted } from "vue";
import { useField, useForm } from "vee-validate";
import { useRoute } from 'vue-router';
//import store for additem in api
import { useteamsStore } from "../../stores/teams";
const store = useteamsStore();
let data = ref([])
const player_name= "vihang"
      const age= ref('')
      console.log(age);
      const cricket_skill= ref('')
      const player_status= ref('')
      const team_name= ref('')
      const id= ref('') 
onMounted(()=>{
  const route = useRoute();
   store.data.filter((e)=>{
      console.log(e);
     if(e.id == route.params.id){
  data.value = e
     }
 })
console.log(data,"datatatat");
})
     
      const cricket_skill_array = ref(["Bestman", "Bowler", "AllRounder"]);
const player_status_array = ref(['Captain','Vicecaptain','Player'])
const teams = ref(["Red Squad","Marvel Monsters","The Hustlers","Daybreak Demos"," Grey Mighty","Trojan Octree","Team Mavericks"])  

function submit(){
 
}
// background: url("../../assets/cricketbg.jpeg");
  // background-size: cover;
  // background-repeat: no-repeat;
  // height: 100vh;
  // width: 100vw;
</script>

<template>
  <div class="container-fluid container-demo">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        
        <form class="form-data" @submit.prevent="submit">
      
      <v-text-field v-model="data.player_name" label="Player_name">
      </v-text-field>
      <v-text-field 
      v-model="data.age"
      label="age"
      >
      </v-text-field>
      <v-select
                v-model="data.player_status"
                :items="cricket_skill_array"
                label="Cricket Skills"
      ></v-select>
      <v-select
              v-model="data.cricket_skill"
              :items="player_status_array"
         
              label="Player Status"
            ></v-select>
    
    
            <v-select
            v-model="data.team_name"
            :items="teams"
           
            label="Select Your Team"
          ></v-select>
          <v-btn type="submit" class="mr-5">submit</v-btn>
          <v-btn type="reset">reset</v-btn>
      </form> </div>
      <div class="col-3"></div>
      </div>
   
   
  </div>

  
</template>

<style scoped>

.container-demo {

  margin: 0;
  padding: 0;
  opacity: 0.8;
}
.container-demo .form-data{
  padding-top: 10rem;

}


</style>

