import { createRouter, createWebHistory, type RouterOptions } from "vue-router";

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path:'/adicionarconta', component: () => import('@/components/conta/AdicionarConta.vue')},
        { path: '/listagemcontas', component: () => import('@/components/conta/ListagemContas.vue') },
        { path: '/transferencia', component: () => import('@/components/Transferencia.vue') }
    ]
})