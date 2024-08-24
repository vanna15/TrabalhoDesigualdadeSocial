const caixaPrincipal = document.querySelector(".caixa-principal") ;
const caixaPerguntas = document.querySelector(".caixa-perguntas") ;
const caixaAlternativas = document.querySelector(".caixa-alternativas") ;
const caixaResultado = document.querySelector(".caixa-resultado") ;
const textoResultado = document.querySelector(".texto-resultado") ;

const perguntas =[
    {
        enunciado : "Você sabe o que é desigualdade social?",
        alternativas : [
            {
                texto: "Sim, desigualdade social se refere à distribuição desigual de recursos e oportunidades entre diferentes grupos da sociedade, como renda, educação, saúde e emprego ",
                afirmacao: "Se preocupa com a desigualdade e bem estar social." 
            },
            {
                texto: "Não, não tenho opinião formada sobre o assunto ou não me interesso" ,
                afirmacao: "Desconhece desigualdade social ou está alheio a sociedade."
            }
        ]
    },
    {
        enunciado : "A desigualdade social afeta a sociedade em que vivemos? Em que sentido?",
        alternativas : [
            {
                texto: "Toda população sofre com a desigualdade social, pois afeta tanto a parte econômica, quanto o indivíduo.",
                afirmacao: "Entende a desigualdade social como a distribuição desigual de recursos, oportunidades e poder entre diferentes grupos sociais."
            },
            {
                texto: "Não, Acho que é quando uns têm mais do que outros. É quando a sociedade não é justa." ,               
                afirmacao: "Pessoa com um conhecimento limitado sobre o tema, baseado em experiências pessoais ou informações superficiais." 
            }
        ]
    },
    {
        enunciado : "A educação é um fator importante para reduzir a desigualdade social?",
        alternativas : [
            {
                texto: "A educação de qualidade é um dos principais instrumentos para promover a mobilidade social e reduzir a desigualdade, ao proporcionar oportunidades e aumentar o capital humano.",
                afirmacao: "Defende a ideia de que a educação é um direito fundamental e um equalizador de oportunidades."
            },
            {
                texto: "Embora a educação seja importante, ela não é suficiente por si só para eliminar a desigualdade. Fatores como discriminação, acesso ao mercado de trabalho e políticas públicas também influenciam a mobilidade social." ,
                afirmacao: "Desconfia da capacidade da educação de resolver sozinha o problema da desigualdade social."
            }
        ]
    },
    {
        enunciado : "As políticas públicas atuais são eficazes em combater a desigualdade?",
        alternativas : [
            {
                texto: "Algumas políticas públicas, como programas de transferência de renda e investimentos em educação e saúde, têm contribuído para reduzir a desigualdade, especialmente entre os mais pobres.",
                afirmacao: "Acredita que as políticas públicas estão no caminho certo para reduzir a desigualdade."
            },
            {
                texto: "As políticas públicas atuais são insuficientes para enfrentar a complexidade da desigualdade social. Muitas vezes, elas são pontuais e não atacam as raízes do problema." ,
                afirmacao: "Desconfia da eficácia das políticas públicas atuais em combater a desigualdade de forma significativa."
            }
        ]
    }
] ;

let atual = 0 ;
let perguntaAtual ;
let historiaFinal = "" ;

function mostraPerguntas(){
    if (atual >= perguntas.length){
        mostraResultado() ;
        return ;
    } ;
    perguntaAtual = perguntas[atual] ;
    caixaPerguntas.textContent = perguntaAtual.enunciado ;
    caixaAlternativas.textContent = "" ;
    textoResultado.textContent    = "" ;
    mostraAlternativas() ;
} ;

mostraPerguntas() ;

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button") ;
        botaoAlternativas.textContent = alternativa.texto ;
        botaoAlternativas.addEventListener("click", ()=>respostaFinal(alternativa)) ;
        caixaAlternativas.appendChild(botaoAlternativas) ;
    } ;
} ;

function respostaFinal(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao ;
    historiaFinal   += afirmacao + " " ;
    atual++ ;
    mostraPerguntas() ;    
} ;

function mostraResultado(){
    caixaPerguntas.textContent    = "De acordo com suas respostas sobre desigualdade social, suas características são:" ;
    textoResultado.textContent    = historiaFinal ;
    caixaAlternativas.textContent = "" ;
}