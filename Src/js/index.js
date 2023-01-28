/* 
Criar algoritmos que irão cumprir uma função
Pensar como o código irá funcionar, pensar na lógica da programação

Objetivo n°1 -  Quando o usuário clicar no botão de veja o trailer, devemos abrir o modal com o vídeo do trailer
        - Passo 1 - Dar um jeito de pegar o elemento que representa o botão na tela usando o js
        - Passo 2 - Dar um jeito de identificar quando o usuário clicar no botão
        - Passo 3 - Dar um jeito d epegar o elemento da modal no js
        - Passo 4 - Abrir na Tela 
Objetivo n°2 - Quando o usuário clicar no X devemos fechar o modal
        - Passo 1 - Dar um jeito de pega ro elemento de fechar modal usando js
        - Passo 2 - Dar um jeito de identificar quando o usuário clicar no X
        - Passo 3 - Fechar modal
*/


console.log('mostrar o document',document);

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;



function alternarModal() {
        modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
        alternarModal();
        video.setAttribute("src", linkDoVideo); 
});


botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});









