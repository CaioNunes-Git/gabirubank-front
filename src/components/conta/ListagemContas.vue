<template>
    <h1>Listagem Contas</h1>
    <div class="botao">
        <button @click="router.replace('adicionarconta')">Adicionar Conta</button>
    </div>

    <div class="contas">
        <table>
            <thead>
                <tr>
                    <th scope="col"> Numero Conta </th>
                    <th scope="col"> Saldo </th>
                    <th scope="col">Proprietário</th>
                    <th scope="col"> Tipo de Conta </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="conta in data" :key="conta.id">
                    <th>{{ conta.numConta }}</th>
                    <th>R$ {{ conta.saldo.toFixed(2) }}</th>
                    <th>{{ conta.pessoa.nome }}</th>
                    <th>
                        {{ conta.tipoConta }}
                    </th>  
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';


interface Conta {
    id: number,
    numConta: number,
    saldo: number,
    tipoConta: string
    pessoa: Pessoa
}

interface Pessoa {
    id: number,
    nome: string,
    cpf: string,
    telefone: string
}

const data: Conta[] = [
    {
        id: 1,
        numConta: 12345,
        saldo: 1500.50,
        tipoConta: "Corrente",
        pessoa: {
            id: 1,
            nome: "João Silva",
            cpf: "123.456.789-00",
            telefone: "(11) 91234-5678"
        }
    },
    {
        id: 2,
        numConta: 67890,
        saldo: 2500.00,
        tipoConta: "Poupança",
        pessoa: {
            id: 2,
            nome: "Maria Oliveira",
            cpf: "987.654.321-00",
            telefone: "(21) 99876-5432"
        }
    },
    {
        id: 3,
        numConta: 11223,
        saldo: 10000.75,
        tipoConta: "Corrente",
        pessoa: {
            id: 3,
            nome: "Carlos Almeida",
            cpf: "123.123.123-12",
            telefone: "(31) 98888-7777"
        }
    }
];
</script>

<style scoped>
    th,td{
        border: 1px solid ;
        padding: 8px;
        text-align: center;
    }
    .contas{
        margin: 10px;
        display: flex;
        justify-content: center;
        font-size: 1.5em;
    }

    .botao{
        display: flex;
        justify-content: right;
    }

    .botao button{
        font-size: 1.2em;
    }
</style>

