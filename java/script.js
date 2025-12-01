import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from  './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");
const botaoJogarNovamento = document.querySelector(".novamente-botao");
const botaoInicial = document.querySelector(".iniciar-botao");
const telaIniciar = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click',iniciaJogo);
function iniciaJogo (){
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultados.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta (){
    if (atual >= Perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual =Perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent =alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
    function mostraAfirmacoes(){
        for(const afirmacoes of perguntaAtual.afirmacoes){

        }
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + "";
    if (opcaoSelecionada.proxima !== undefined){
        atual = opcaoSelecionada.proxima;
    }else{
        mostraResultado();
        return;
    }
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = 'Em 2050, ${nome}';
    textoResultados.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultados.classList.add("mostrar");
    botaoJogarNovamente.addEventListener("click",jogaNovamente)
}
function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultados.classList.remove("mostrar");
    mostraPergunta();
}
function substituiNome(){
    for (const pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
substituiNome();