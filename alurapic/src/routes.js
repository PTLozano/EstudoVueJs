import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
    {
        path: '', // Quando não coloca nada '' é o equivalente ao /
        component: Home,
        titulo: 'Home'
    },
    {
        path: '/cadastro',
        component: Cadastro,
        titulo: 'Cadastro'
    }
];