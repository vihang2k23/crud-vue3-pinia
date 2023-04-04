<script setup>

import {reactive, ref} from 'vue'

const headers = [
      { text: "PlayerName", value: "name" },
  
      { text: "Age", value: "age", sortable: true },
      {text:"Cricket-Skill", value:'cricketskill'},
      {text:'Player-Status',value:'playerstatus'},
      { text: "Operation", value: "operation" },
    ];

    const items= [
      { "name": "Curry", "age": 20 },
      { "name": "James",  "age": 21 },
      { "name": "Jordan",   "age": 22 },
      { "name": "Curry",  "age": 20 },
      { "name": "James", "height": 180, "weight": 75, "age": 21 },
      { "name": "Jordan", "height": 181, "weight": 73, "age": 22 },
       
    ];
    console.log(headers);


</script>


    <template>  

       <div  class="container">
       <div class="select-box ml-5">
        <v-select
        variant="solo"
      class=" w-50  "
      label="Select"
    ></v-select>

       </div>
        <EasyDataTable
        class="mt-5 ml-5 mr-5"
    :headers="headers"
    :items="items"
    buttons-pagination
>
<template #item-operation>
    <div class="operation-wrapper">
      <img
        alt="vihang"
        class="operation-icon"
        @click="deleteItem()"
      />
      <img
        
        class="operation-icon"
        @click="editItem()"
      />
    </div>
  </template>
</EasyDataTable>
       </div>
      </template>
