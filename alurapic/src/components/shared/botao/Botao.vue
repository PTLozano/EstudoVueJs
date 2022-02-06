<template>
    <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{rotulo}}</button>
</template>

<script>
export default ({
    // props: ['tipo', 'rotulo', 'confirmacao', 'estilo']
    props: {
        tipo: {
            type: String,
            required: true
        },
        rotulo: {
            type: String,
            required: true
        },
        // Quando não é obrigatório pode ser
        // confirmacao: Boolean
        // estilo: String
        confirmacao: {
            type: Boolean,
            required: false
        },
        estilo: {
            type: String,
            required: false
        }
    },

    methods: {
        disparaAcao() {
            if(this.confirmacao) {
                if(confirm('Confirma a operação?')) {
                    // O this.$emit() permite disparar o evento com o nome informado
                    this.$emit('botaoAtivado', new Date());
                }
                return;
            }
            
            this.$emit('botaoAtivado', new Date());
        }
    },

    computed: {
        estiloDoBotao() {
            switch(this.estilo) {
                case 'perigo':
                    return 'botao-perigo';
                default: // padrao
                    return 'botao-padrao';
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