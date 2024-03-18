const inputProduto = document.getElementById('produto');
        const respostaH4 = document.getElementById('resposta');
        const totalCarrinhoDiv = document.getElementById('totalCarrinho');
        let carrinho = [];

        function consultarPreco() {
            const produto = inputProduto.value.toLowerCase();
            switch (produto) {
                case 'morango':
                    respostaH4.innerText = 'R$ 5,99/Kg';
                    break;
                case 'laranja':
                    respostaH4.innerText = 'R$ 7,99/Kg';
                    break;
                default:
                    respostaH4.innerText = 'Produto não cadastrado';
                    break;
            }
        }

        function adicionarAoCarrinho() {
            const produto = inputProduto.value.toLowerCase();
            let precoTexto = respostaH4.innerText;
            if (precoTexto !== 'Produto não cadastrado' && precoTexto.startsWith('R$')) {
                let preco = parseFloat(precoTexto.replace('R$ ', '').replace('/Kg', '').replace(',', '.'));
                carrinho.push({ nome: produto, preco });
                alert(`${produto} adicionado ao carrinho.`);
            } else {
                alert('Por favor, consulte o preço antes de adicionar ao carrinho.');
            }
        }

        function mostrarTotal() {
            if (carrinho.length === 0) {
                alert('Carrinho vazio');
                return;
            }
            let total = carrinho.reduce((acc, {preco}) => acc + preco, 0);
            totalCarrinhoDiv.innerText = `Total do Carrinho: R$ ${total.toFixed(2)}`;
        }