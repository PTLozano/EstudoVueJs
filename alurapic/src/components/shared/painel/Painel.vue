<template>
    <div class="painel">
        <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
        <transition name="painel-fade">
            <div v-show="visivel" class="painel-conteudo">
                <!-- <slot name="nao-necessario-informar-name-qdo-tiver-so-um"></slot> -->
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
// Necessário importar com o comando: import Painel from ',/components/shared/painel/Painel.vue';

// v-bind pode ser trocado por :
// v-on pode ser trocado por @
export default {
    props: ['titulo'], // Usado para receber as informações de quem utiliza o componente

    data() {
        return {
            visivel: true
        }
    }
}
</script>

<style scoped> 
/* Quando usa o "scoped" informa que o estilo deve ser usado somente para este componente e nenhum outro, mesmo que satisfaça a condição */
  .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;

    box-shadow: 5px 5px 5px;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

    .painel-fade-enter, .painel-fade-leave-active {
        opacity: 0;
    }

    .painel-fade-enter-active, .painel-fade-leave-active {
        transition: opacity 0.5s;
    }


/*
    painel-fade-enter // antes do elemento ser incluído ou removido, o estado atual
    painel-fade-enter-active // quando o elemento esta sendo incluído
    painel-fade-leave-active // quando o elemento esta sendo removido
*/
</style>
