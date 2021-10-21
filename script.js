// ​Crie uma lista de tarefas que tenha um input para receber a tarefa, e armazene na memória utilizando o LocalStorage.

// Dica: Utilize Arrays e Json

let texto = document.getElementById("text");
let botao = document.getElementById("send");


botao.addEventListener("click", add);



function armazenar(text){
    localStorage.setItem("tarefas", JSON.stringify(text));
    armazenamento.push(JSON.parse(localStorage.getItem("tarefas")));
    localStorage.setItem("tarefas", JSON.stringify(armazenamento))
}   


function add() {
  let criarLista = document.getElementsByClassName("criadorLista")[0];
  let lista = document.createElement("li");
  let linha = document.createElement("hr");

  lista.append(texto.value);
  criarLista.appendChild(lista);
  criarLista.appendChild(linha);

  armazenar(texto.value);
}
