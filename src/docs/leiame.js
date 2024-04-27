//Variável com escopo de bloco
//let e const
if(true){ //escopo do bloco
    let  blocoEscopo = "Eu fico só nesse if";
    let numero = 10;
}

//sout 
console.log("Eusou um print");
CSSCounterStyleRule.log(numero);

//declaração de objeto
const meuObjeto = {name:"Matheus"}; //criamos o objeto
meuObjeto.name = "Bora codificar!"; //atribuição de valor 
//Estamos modificando a propriedade de um objeto
//e não a constante em si

//Funções nas antigas
function hello(name){
    return "Olá," + name + "!";
}

//Fuções atuaisArrow Function
//Função com parametro(nome é o parametro no problema abaixo)
const hello = nome => "Olá," + nome + "!";
//Função sem parametro 
const hellow = () => "Olá," + nome + "!";

//Exemplo

//Desestruturando objetos 
const pessoa = {
    firstName: 'João',
    lastName:'da Silva',
    age:20
};
//declarar que constantes firstName.age são = pessoa
const {firstName,age} = pessoa;
console.log(firstName);//João
console.log(age);//20

//Criar um Array
const colors = ['vermelho','azul','verde','amarelo'];
//atribuir os valores quando for array usa[]
const[firstColor, secondColor] = colors;
console.log(firstColor); //vermelho
console.log(secondColor);//azul

//e se quisesse pegar a terceira cor?
const[,,thirdColor] = colors;
console.log(thirdColor);

//Desestruturando as Funções 
function displayInfo({firstName,age}){
    // quando usamos `` conseguimos usar texto e variaveis ao mesmo tempo
    console.log(`${firstName} tem ${age} anos.`);
}
const pessoaInfo = {
    firstName:'Maria',
    lastName:'Fernandes',
    age: 25
};
displayInfo(pessoaInfo); //Maria tem 25 anos.

//Componente Funcional em React
function displayInfo({firstName,age}){
    return
    <div>
        Bem vindo,{firstName}, você tem {age} anos.
    </div>
}

//Promisses - uma promessa a ser cumprida
//Estados das Promisses: 
//Peding(Pendente) é o estado inicial 
//Fullfilled (Realizada) operação concluída
//Relected (Rejeitada) operação falhou
// async(sincrona) /await(significa aguardando a resposta)
//(só colocamos como quando queremos fazer uma operação assincrona)
//fetch (envia uma busca)

async function fetchData(){
    try{
        let response = await fetch('https://sc.senai.br/alunos/1');
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log("Houve um erro.",error)
    }
}
fetchData(); //chamando o metodo

Exercicios: 
//1. Declare duas variaveis: 
//nome com valor "React" e versão com o valor "1.0.0"
//Em seguida, exiba uma mensagem que diz 
//`Estudando ${nome} na versão ${versao}`

console.log("Hello, World!");
const nome = "React"
const versao = "1.0.0"

console.log(`Estudando ${nome} na versão ${versao}`)

// 2. Crie uma arrow function que receba 
//dois numeros e retorne a soma deles

const numero1 = 2;
const numero2 = 5;

const soma = (numero1,numero2) => numero1 + numero2;

console.log(soma(numero1,numero2));


