<script setup lang="ts">
import { ref } from 'vue'
let num = ref(0)

const add = () => {
    num.value++
}

</script>
<template>
    <div>login page</div>
    {{ num }}
    <button @click="add">increment</button>
</template>