<script setup lang="ts">
import AdicionarConta from './components/conta/AdicionarConta.vue';
import ListaOpcoes from './components/ListaOpcoes.vue'
import Slogan from './components/telainicial/TituloSlogan.vue'
</script>

<template>
  <header>
    <slogan />
  </header>
  <ListaOpcoes/>
  <RouterView/>
</template>
