//MINHA RESOLUÇÃO

function formatZeros (num) {
    return num >=10 ? num : `0${num}`
}

const data = new Date ();
const diaSemana = data.getDay();
const dia = formatZeros(data.getDate());
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = formatZeros(data.getHours());
const minuto = formatZeros(data.getMinutes());
const segundo = formatZeros(data.getSeconds());
const ms = data.getMilliseconds();

const diaSemanaTxt = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira'
];

const mesTxt = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];


const texto = `Hoje é ${diaSemanaTxt[diaSemana]}, ${dia} de ${mesTxt[mes]} de ${ano}, e são ${hora}h ${minuto}m ${segundo}.${ms}s`;

const resultado = document.querySelector('#resultado');
resultado.innerHTML = texto;

console.log(texto);

/*//SOLUÇÃO PROFESSOR 1
const data = new Date ();
const resultado = document.querySelector('#resultado');
resultado.innerHTML = data.toLocaleString ('pt-BR', {dateStyle: 'full', timeStyle:'short'});*/
