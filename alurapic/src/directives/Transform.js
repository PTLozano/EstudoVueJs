import Vue from 'vue';

// A diretiva permite fazer ajustes específicos nos elementos
Vue.directive('meu-transform', {
    // É chamado sempre que é associado ao elemento do DOM

    // el: elemento
    // binding: valor passado por parâmetro, podendo ser uma String ou um objeto
    // vnode: 
    bind(el, binding, vnode) {

        let current = 0;
        el.addEventListener('dblclick', function() {
            // let incremento = 90;

            // if(binding.value) {
            //     incremento = binding.value.incremento;
            //     animacao =  binding.value.animacao;
            // }


            let incremento = binding.value || 90;
            if(binding.modifiers.reverso) { // o "modifiers" é o nome da diretiva .<alguma coisa>
                current-=incremento;
            } else {
                current+=incremento;
            }
            el.style.transform = `rotate(${current}deg)`;

            // if(animacao) {
            if(binding.modifiers.animacao) { // o "modifiers" é o nome da diretiva .<alguma coisa>
                el.style.transition = 'transform 0.5s';
            }
        });

    }
});