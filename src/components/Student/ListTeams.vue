<script setup>
import { onMounted, reactive, ref } from "vue";
import { useteamsStore } from "../../stores/teams";
const store = useteamsStore();
console.log(store, "store");

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

const items = store.data;
console.log(store,"iyteammsss");
</script>

<template>
  <div class="">
    <!-- <div class="select-box ml-5">
      <v-select variant="solo" class="w-50" label="Select"></v-select>
    </div> -->
    <h1>{{ store.count }}</h1>
    <button @click="store.increment">+</button>
    <EasyDataTable
      class="mt-5 ml-5 mr-5"
      :headers="headers"
      :items="store.data"
      buttons-pagination
    >
      <template #item-operation>
        <div class="operation-wrapper">
          <img alt="vihang" class="operation-icon" @click="deleteItem()" />
          <img class="operation-icon" @click="editItem()" />
        </div>
      </template>
    </EasyDataTable>
  </div>
</template>
