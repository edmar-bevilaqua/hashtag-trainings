//Redeclarações
let nome = "Millene";
const nomeProfessor = "Daniel";

var mensagem = "Olá";
console.log(mensagem);
var mensagem = "Bem vindo!";
console.log(mensagem);

//Reatribuições - Mutabilidade
nome = "Lira";
console.log(nome);

mensagem = "Olá, bem vindo!";
console.log(mensagem);

// //tipo Const - ERRO
// nomeProfessor = "Alon";
// console.log(nomeProfessor);

//Hoisting
var segundaMensagem; // não atribui nenhum valor
console.log(segundaMensagem);
segundaMensagem = "Uitilizando Hoisting";
console.log(segundaMensagem);

const terceiraMensagem = "Olá eu sou let"; //LET e CONST não fazem Hoisting
console.log(terceiraMensagem);

//Visibilidade

{
  console.log("Isso é um bloco");
  let idade = 60;
  const real = 50;
}

//Bloco de instrução
//function() { instrução - tarefas específicas} //Bloco da função

function executar() {
  //instruções dentro da função
  console.log("Dentro da função");
  let numero = 10;
  console.log(numero);
}

executar();
