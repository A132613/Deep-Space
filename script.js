const avanca = document.querySelectorAll('.btn-proximo');
const volta = document.querySelectorAll('.back');

/*back.forEach(button =>{
    button.addEventListener('click', function(){
        const avanca = document.querySelector('.ativo');
        const back =

    })

})
*/

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximopasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximopasso).classList.add('ativo');
        back.classList.remove('ativo');
        document.getElementById(voltar).classList.add('ativo');
    })
})