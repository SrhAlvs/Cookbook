//Gerado por ChatGPT, caso não entenda no futuro ;-;
// Função para ordenar as receitas por tipo de refeição
function porRefeicao() {
    const receitas = document.querySelectorAll('a');
    const body = document.querySelector('body');

    // Remover as receitas do corpo do documento
    receitas.forEach(receita => {
        body.removeChild(receita);
    });

    // Adicionar as receitas de acordo com o tipo de refeição
    ['cafeLanche', 'almocoJanta', 'snacks', 'sobremesa'].forEach(tipo => {
        receitas.forEach(receita => {
            if (receita.classList.contains(tipo)) {
                body.appendChild(receita);
            }
        });
    });
}

// Função para ordenar as receitas por ordem alfabética
function porAlfabeto() {
    const receitas = document.querySelectorAll('a');
    const body = document.querySelector('body');

    // Obter uma matriz das receitas e classificar por texto
    const receitasArray = Array.from(receitas);
    receitasArray.sort((a, b) => {
        const textoA = a.textContent.toLowerCase();
        const textoB = b.textContent.toLowerCase();
        if (textoA < textoB) return -1;
        if (textoA > textoB) return 1;
        return 0;
    });

    // Remover as receitas do corpo do documento
    receitasArray.forEach(receita => {
        body.removeChild(receita);
    });

    // Adicionar as receitas classificadas de volta ao corpo do documento
    receitasArray.forEach(receita => {
        body.appendChild(receita);
    });
}

// Adicionar ouvintes de evento de clique aos botões
document.getElementById('alfabeto').addEventListener('click', porAlfabeto);
document.getElementById('refeicao').addEventListener('click', porRefeicao);