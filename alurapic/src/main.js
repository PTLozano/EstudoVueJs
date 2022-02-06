import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes'; // É necessário usar as {} porque no routes.js não foi usado export default
import './directives/Transform'; // É necessário importar as diretivas, mas não informa o nome

Vue.use(VueResource); // Necessário para registrar globalmente e poder ser utilizado em qualquer lugar
Vue.use(VueRouter); // Necessário para fazer o roteamento das páginas; vai interceptar na URL o que vier depois de /#/ como a rota

// Necessário a linha de baixo para associar o routes ao VueRouter
const router = new VueRouter({
  // A linha abaixo é equivalente a "routes: routes"
  routes,
  mode: 'history' // É utilizado para não aparecer o /#/ na barra de endereço, mas o servidor tem que estar preparado
});

new Vue({
  el: '#app',
  router, // ou "router: router"
  render: h => h(App)
})
