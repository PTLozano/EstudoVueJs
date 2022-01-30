<template>
    <nav>
        <ul>
            <li v-for="rota in rotas">
                <router-link :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    //props: ['rotas']
    props: {
        rotas: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
  .corpo {
    font-family: Helvetica, Arial, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .pagina-enter, .pagina-leave-active {
      opacity: 0;
  }

  .pagina-enter-active, .pagina-leave-active {
      transition: opacity 0.5s;
  }

</style>
