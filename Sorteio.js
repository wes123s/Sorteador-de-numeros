// Seleciona os elementos do DOM
const inputMin = document.querySelector('input[placeholder="entre"]');
const inputMax = document.querySelector('input[placeholder="e"]');
const button = document.querySelector('button');

// Adiciona um evento de clique ao botão
button.addEventListener('click', () => {
    // Obtém os valores dos inputs
    const min = parseInt(inputMin.value);
    const max = parseInt(inputMax.value);

    // Verifica se os valores são válidos
    if (isNaN(min) || isNaN(max)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    if (min >= max) {
        alert('O valor mínimo deve ser menor que o valor máximo.');
        return;
    }

    // Gera um número aleatório entre min e max
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibe o número sorteado
    alert(`Número sorteado: ${randomNumber}`);
});