<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

console.log(useForm,"useForm");
const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        player_name(value) {
        console.log();
      if (value?.length > 1) return true;

      return "PlayerName needs to be at least 2 characters.";
    },
    age(value) {
      if (value?.length > 1 &&  value) return true;

      return "Please Enter Your Age";
    },
    cricket_skill(value) {
      if (value) return true;

      return "Select an item.";
    },  player_status(value) {
      if (value) return true;

      return "Select an item.";
    },  team(value) {
      if (value) return true;

      return "Select an item.";
    },
    
  },
});
const player_name = useField("player_name");
const age = useField("age");
const cricket_skill = useField("cricket_skill");
const player_status = useField("player_status");
const team = useField("team");

const cricket_skill_array = ref(["Bestman", "Bowler", "AllRounder"]);
const player_status_array = ref(['Captain','Vicecaptain','Player'])
const teams = ref(["Red Squad","Marvel Monsters","The Hustlers","Daybreak Demos"," Grey Mighty","Trojan Octree","Team Mavericks"])  
const submit = handleSubmit((values) => {

});

</script>

<template>
  <div class="container-fluid container-demo">
      <div>
     
        <form class="form" @submit.prevent="submit">
          <v-text-field
            v-model="player_name.value.value"
            :counter="10"
            :error-messages="player_name.errorMessage.value"
            label="Player Name"
          ></v-text-field>

          <v-text-field
            v-model="age.value.value"
            :counter="7"
            :error-messages="age.errorMessage.value"
            label="Player Age"
          ></v-text-field>

        

          <v-select
            v-model="player_status.value.value"
            :items="cricket_skill_array"
            :error-messages="player_status.errorMessage.value"
            label="Cricket Skills"
          ></v-select>

          <v-select
          v-model="cricket_skill.value.value"
          :items="player_status_array"
          :error-messages="cricket_skill.errorMessage.value"
          label="Player Status"
        ></v-select>


        <v-select
        v-model="team.value.value"
        :items="teams"
        :error-messages="team.errorMessage.value"
        label="Select Your Team"
      ></v-select>
          <v-btn class="me-4" type="submit"> submit </v-btn>

          <v-btn @click="handleReset"> clear </v-btn>
        </form>
        </div>
  </div>
</template>

<style >
.container-demo {
  background: url("../../assets/cricketbg.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  opacity: 0.8;
}
.container-demo .form{
color: white !important;
margin-left: 12.5rem;
margin-right: 12.5rem;
padding-top: 10rem;
}
.container-demo .form .v-field--variant-filled .v-field__overlay {
opacity: 0.6;
}
.container-demo .form  .v-field__field{
    color:black
}
</style>

