<script setup>
import { onMounted,  inject } from "vue";
//import store
import { useteamsStore } from "../../stores/teams";
//Routing
import { useRouter } from 'vue-router'
const router = useRouter()
// import { Header, Item } from "vue3-easy-data-table";
const store = useteamsStore();

// //provide
// const provide_data = ref([])
// console.log(provide_data,'pdata');
// provide("data",provide_data)
onMounted(() => {
  store.fetchdata();
});

const headers = [
  { text: "PlayerName", value: "player_name" },

  { text: "Age", value: "age", sortable: true },
  { text: "Cricket-Skill", value: "cricket_skill" },
  { text: "Player-Status", value: "player_status" },
  { text: "Team-Name", value: "team_name" },
  { text: "Operation", value: "operation" },
];

// eventbus
// const emitter = inject("emitter");
// console.log(emitter,"listemmiter");
function updateData(val) {
  // emitter.emit("myevent", 100);
  
  router.push({ path: `/editteams/${val.id}`, params: {value:val} })
}

function deleteData(val) {
  console.log(val, "val");
  if (val) {
    store.deletedata(val);

    store.$patch((state) => {
      state.data = state.data.filter((item) => item.id !== val.id);
      console.log(store.data);
    });
  }
}
</script>

<template>
  <div class="">
    <!-- <div class="select-box ml-5">
      <v-select variant="solo" class="w-50" label="Select"></v-select>
    </div> -->

    <EasyDataTable
      class="mt-5 ml-5 mr-5"
      :headers="headers"
      :items="store.data"
      buttons-pagination
    >
      <!-- //item is use for id  -->
      <template #item-operation="item">
        <div class="operation-wrapper">
          <v-btn @click="deleteData(item)"> Delete </v-btn>
          <!-- <router-link :to="{ name: 'addteam' }"> -->
            <v-btn @click="updateData(item)"> Update </v-btn>
          <!-- </router-link> -->
        </div>
      </template>
    </EasyDataTable>
  </div>
</template>
