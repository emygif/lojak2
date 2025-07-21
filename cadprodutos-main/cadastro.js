import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAOb0fi4skGdmcGA68D2TFwiYuDlxGCaXM",
    authDomain: "loja-de-livros-8b465.firebaseapp.com",
    projectId: "loja-de-livros-8b465",
    storageBucket: "loja-de-livros-8b465.firebasestorage.app",
    messagingSenderId: "556264075539",
    appId: "1:556264075539:web:491c9995df97543be3eae6",
    measurementId: "G-Z96DPZ4H1J"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

// Elementos do formulário
const codigoProduto = document.getElementById('codigoProduto');
const nomeProduto = document.getElementById('nomeProduto');
const categoriaProduto = document.getElementById('categoriaProduto');
const quantidadeProduto = document.getElementById('quantidadeProduto');
const valorProduto = document.getElementById('valorProduto');
const btnCadastrarProduto = document.getElementById('btnCadastrarProduto');
const btnLimparProduto = document.getElementById('btnLimparProduto');

// Função para cadastrar produto
function cadastrarProduto() {
    if (!codigoProduto.value || !nomeProduto.value) {
        alert('Código e Nome são obrigatórios!');
        return;
    }

    get(ref(db, 'Produtos/' + codigoProduto.value))
        .then((snapshot) => {
            if (snapshot.exists()) {
                alert('Já existe um produto com este código!');
            } else {
                set(ref(db, 'Produtos/' + codigoProduto.value), {
                    codigo: codigoProduto.value,
                    nome: nomeProduto.value,
                    categoria: categoriaProduto.value,
                    quantidade: quantidadeProduto.value,
                    valor: valorProduto.value
                }).then(() => {
                    alert('Produto cadastrado com sucesso!');
                    limparFormulario();
                }).catch((error) => {
                    console.error('Erro ao cadastrar:', error);
                    alert('Erro ao cadastrar produto');
                });
            }
        });
}

// Função para limpar formulário
function limparFormulario() {
    codigoProduto.value = '';
    nomeProduto.value = '';
    categoriaProduto.value = '';
    quantidadeProduto.value = '';
    valorProduto.value = '';
}

// Event listeners
btnCadastrarProduto.addEventListener('click', cadastrarProduto);
btnLimparProduto.addEventListener('click', limparFormulario);