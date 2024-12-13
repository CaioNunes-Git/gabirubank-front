<template>
    <button @click="router.replace(destino)">{{ nomeOpcao }}</button>
</template>

<script setup lang="ts">
import router from '@/router';

interface Props {
    nomeOpcao: string,
    destino: string
}

defineProps<Props>()
</script>

<style scoped>
button {
    padding: 0px;
    background-color: rgb(10, 69, 4);
    color: white;
    font-weight: bold;
    margin: 5px 10px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 100%;
    line-height: 2em;
    font-size: 15px;
}

button:hover {
    background-color: green;
    transition-duration: 0.4s;
}
</style>