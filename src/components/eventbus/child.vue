<script setup>
import { onMounted,  inject } from "vue";
const data = ""
const emitter = inject("emitter");
onMounted(()=>{
   
    emitter.on("myevent",(val)=>{
        console.log(val,"valllllll");
     
    })
})
</script>
<template>
    <h1>
        hello child compo eventbus 
    </h1>
</template>