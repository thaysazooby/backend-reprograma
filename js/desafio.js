function calcular(){
    const valorHora = document.querySelector('#valor-hora')
    const horasProjeto = document.querySelector('#horas-projeto')
    const salarioFinal = valorHora.value*horasProjeto.value
    const resposta = document.querySelector('#resposta')

    resposta.innerHTML += ' R$ ' + salarioFinal
}