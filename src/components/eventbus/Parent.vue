<script setup>
import child from "../eventbus/child.vue"
import { onMounted,  inject } from "vue";
const emitter = inject("emitter");
console.log(emitter,"called");
function hello(){
    // console.log("hello");
    emitter.emit("myevent", 100);
}
</script>
<template>
    <div>
     

        <child/>
        <v-btn @click="hello()">call eventbus</v-btn>
    </div>
</template>