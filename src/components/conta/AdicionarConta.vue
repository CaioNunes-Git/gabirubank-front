<template>
    <div class="dados_pessoa">
        <h1>Dados Pessoais</h1>
        <form class="inputs">
            <div class="internal">
                <p for="nome"> Nome </p>
                <input type="text" placeholder="Digite seu nome" name="nome"></input>
            </div>

            <div class="internal">
                <p for="cpf"> CPF </p>
                <input placeholder="Digite seu CPF" name="cpf">
            </div>

            <div class="internal">
                <p for="telefone"> Telefone </p>
                <input placeholder="Digite seu telefone" name="telefone">
            </div>
        </form>
    </div>

    <div class="dados_conta">
        <h1>Dados da Conta</h1>
        <form class="inputs">
            <div class="internal">
                <p> Número </p>
                <input />
            </div>

            <div class="internal">
                <p> Digito </p>
                <input maxlength="1" />
            </div>

            <div class="internal">
                <p for="tconta"> Tipo da Conta </p>
                <select name="tconta">
                    <option>Poupança</option>
                    <option>Corrente</option>
                </select>
            </div>
        </form>
    </div>
    <div>
        <button @click="router.replace('listagemcontas')">Voltar</button>
        <button>Salvar</button>
    </div>
</template>

<script setup>
import router from '@/router';


</script>

<style scoped>

button {
    font-size: 1.35em;
    margin:0px 2px 15px 0px;
    border-radius: 10px;
    float: right;
}

input,
.internal select {
    width: 180px;
    height: 30px;
    border-radius: 10px;
    font-size: 0.8em;
}

.internal p {
    font-style: normal;
}

.dados_pessoa {
    margin-bottom: 130px;
    font-size: 1.5em;
}

.dados_conta {
    font-size: 1.5em;
    margin-bottom: 100px;
}

.internal {
    float: left;
    width: 200px;
    text-align: center;
}
</style>