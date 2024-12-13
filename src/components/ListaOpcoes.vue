<template>
    <div class="componente">
        <h1>Clique em uma opção abaixo</h1>
        <div class="lista">
            <opcao nomeOpcao="Contas" destino="/listagemcontas" />
            <opcao nomeOpcao="Transferência" destino="/transferencia" />
        </div>
    </div>
</template>

<script setup lang="ts">
import opcao from './telainicial/opcao.vue';
</script>

<style scoped>
.lista {
    display: flex;
}
</style>