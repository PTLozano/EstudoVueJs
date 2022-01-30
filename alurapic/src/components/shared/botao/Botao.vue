<template>
    <button @click="disparaAcao()" class="botao botao-perigo" :type="tipo">{{rotulo}}</button>
</template>

<script>
export default ({
    // props: ['tipo', 'rotulo']
    props: {
        tipo: {
            type: String,
            required: true
        },
        rotulo: {
            type: String,
            required: true
        }
    },

    methods: {
        disparaAcao() {
            if(confirm('Confirma a operação?')) {
                // O this.$emit() permite disparar o evento com o nome informado
                this.$emit('botaoAtivado', new Date());
            }
        }
    }
})
</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>