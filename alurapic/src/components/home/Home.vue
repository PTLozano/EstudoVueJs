<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <!-- <h1 v-text="titulo"></h1>
    <img :src="foto.url" v-bind:alt="foto.titulo"> -->

    <input type="search" class="filtro" placeholder="Filtre por parte do título" v-on:input="filtro = $event.target.value">

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <!-- v-meu-transform="{ incremento: 15, animacao: true }"  -->
          <imagem-responsiva 
          v-meu-transform.animacao.reverso="15" 
          :url="foto.url" 
          :titulo="foto.titulo"></imagem-responsiva>
          <!-- <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo" slot="nao-necessario-informar-name-qdo-tiver-so-um" > -->
            <meu-botao 
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove($event, foto)"
            :confirmacao="true"
            estilo="perigo"/> 
            <!-- 
              - Não está usando o : porque não é propriedade de nenhum componente, é apenas uma string 
              - O @click.native serve para pedir para efetuar o CLICK nativo do botão do componente
              - O $event é o parâmetro passado no this.$emit() do botão
              - No caso do "confirmacao" caso não seja adicionado o : antes, será considerado um texto;
                quando coloca os : é feita uma avaliação do tipo
            -->
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

export default {

  /*
  A diretiva v-bind realiza uma associação que flui da fonte de dados para a view.
  Qualquer mudança na fonte de dados fará com que a view seja atualizada para representar o novo valor.
  Já a diretiva v-on realiza uma associação de evento que flui da view para a fonte de dados.
  Para que as mudanças realizadas por v-on sejam atualizadas na view, é necessário combinar v-on com v-bind.
  */
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data () {
    return {
      titulo: 'Agora vai!',
      fotos: [
      // {
      //   titulo: 'Brasil',
      //   url: 'https://logospng.org/wp-content/uploads/bandeira-do-brasil.png'
      // },
      // {
      //   titulo: 'Brasil',
      //   url: 'https://logospng.org/wp-content/uploads/bandeira-do-brasil.png'
      // }
      ],
      // foto: {
      //   titulo: 'Brasil',
      //   url: 'https://logospng.org/wp-content/uploads/bandeira-do-brasil.png'
      // },
      filtro: ''
    }
  },

  computed: {
    fotosComFiltro() {
      if(this.filtro) {
        const exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  methods: {
    remove($event, foto) {
      alert(`Removeu ${foto.titulo} ${$event}!`);
    }
  },

  created() {
    // Busca da API os dados
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json()) // .json() é outra Promise
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}
</script>

<style>
  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>
