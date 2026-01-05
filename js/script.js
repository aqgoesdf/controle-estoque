/*AqGoEs | Dev*/
const form = document.getElementById('formProduto');
const erro = document.getElementById('erro');
const tabela = document.getElementById('tabelaProdutos');

let produtos = [];



form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const quantidade = Number(document.getElementById('quantidade').value)

    if(!nome || quantidade <= 0){
        erro.textContent = 'Preencha corretamente os dados';
        return;
    }

    erro.textContent = '';

    const produto = {
        nome: nome,
        quantidade: quantidade
    };

    produtos.push(produto);
    

    atualizaTabela();
    form.reset()
});

/*Atualização da tabela*/
function atualizaTabela() {
    tabela.innerHTML = '';


    produtos.forEach((produto, index) => {
        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.quantidade}</td>
            <td>
                <button class="acao" onclick="entrada(${index})">+</button>
                <button class="acao" onclick="saida(${index})">-</button>
            </td>
        `;

        tabela.appendChild(linha);
    });
}

/*Função entrada de produtos*/
function entrada(index){
    produtos[index].quantidade++;
    atualizaTabela();
}

/*Função saída de produtos*/
function saida(index){
    if(produtos[index].quantidade > 0){
       produtos[index].quantidade--;
       atualizaTabela();
    }
}