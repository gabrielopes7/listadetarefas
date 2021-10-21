let texto = document.getElementById("text");
let botao = document.getElementById("send");
let botaoEx = document.getElementById("all");
let criaLista = document.getElementsByClassName("criadorLista")[0];

let armazenamento = JSON.parse(localStorage.getItem("tarefas")) || []; // Essa variavel puxa os itens guardados no localStorage ou inicia como um array vazio.

botao.addEventListener("click", add);
botaoEx.addEventListener("click", excluirTodos);

//Essa função abaixo, faz a renderização da lista, puxando o armazenamento e colocar os elementos da lista na tela.

function criarLista() {
  criaLista.innerHTML = "";

  for (elemento of armazenamento) {
    let lista = document.createElement("li");
    let texto = document.createTextNode(elemento);

    let linkExcluir = document.createElement("a");
    let textoExcluir = document.createTextNode("Excluir");
    let posF = armazenamento.indexOf(elemento);
    linkExcluir.setAttribute("onclick", `excluir (${posF})`);
    linkExcluir.setAttribute("href", "#");
    linkExcluir.appendChild(textoExcluir);

    lista.appendChild(texto);
    lista.appendChild(linkExcluir);
    criaLista.appendChild(lista);
  }
}


criarLista(); // Faz a chamada da função na abertura da página.


// Essa função adiciona o texto do input dentro do localStorage, faz teste de input vazio e chama a lista para ser renderizada e guarda o valor dentro do localStorage.
function add() {
  if (texto.value == "") {
    window.alert("Por favor, digite uma tarefa!");
  } else {
    armazenamento.push(texto.value);
    texto.value = "";
    texto.focus();
    criarLista();
    guardar();
  }
}

// Essa função pega o ultimo index do armazenamento no localStorage e exclui ela, chamando a renderização da lista e guardando a informação no localStorage novamente.
function excluir(pos) {
  armazenamento.splice(pos, 1);
  criarLista();
  guardar();
}


// Essa função exclui tudo que há dentro do armazenamento , chamando a renderização da lista e guardando a nova informação no localStorage.
function excluirTodos() {
  armazenamento = [];
  criarLista();
  guardar();
}

// Essa função exclusivamente é chamada para guardar as informações no localStorage.

function guardar() {
  localStorage.setItem("tarefas", JSON.stringify(armazenamento));
}
