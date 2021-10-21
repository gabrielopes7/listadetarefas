let texto = document.getElementById("text");
let botao = document.getElementById("send");
let botaoEx = document.getElementById("all");
let criaLista = document.getElementsByClassName("criadorLista")[0];

let armazenamento = JSON.parse(localStorage.getItem("tarefas")) || [];

botao.addEventListener("click", add);
botaoEx.addEventListener("click", excluirTodos);

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

criarLista();

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

function excluir(pos) {
  armazenamento.splice(pos, 1);
  criarLista();
  guardar();
}

function excluirTodos() {
  armazenamento = [];
  criarLista();
  guardar();
}

function guardar() {
  localStorage.setItem("tarefas", JSON.stringify(armazenamento));
}
