// 1) Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"

let loopPares=(num1)=>{
	//●	Você deve imprimir os números de 1 a 100;
	  for(let num=0; num < 10; num++){
		if((num+num1) % 2 === 0) {
			console.log(`O número ${(num+num1)} é par"`);
		}else{
			console.log(`${(num+num1)}`)
		}
		}
	}

	loopPares(3)
 
// 2)Você deve criar uma função chamada loopDeImpares que receba um número e uma palavra como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// Agora, modifique o código para que, caso esse número somado com o número passado por parâmetro seja ímpar, mostre a palavra passada por parâmetro no console.

let loopImpares=(num1,word)=>{
    for(let i=0;i<10;i++){
        if(((num1+i)%2)!=0){
            console.log(word)
        }
        else{
            console.log(i)
        }
    }
    }

loopImpares(7, "dado")

//Chamada de testes da funccao comentada para teste das demais
// loopDeImpares(0,"FizzBuzz")

// **********************************************************************


// 3)Você deve criar uma função chamada soma que receba um número como parâmetro e retorne a soma de todos os seus números anteriores, incluindo o número recebido por parâmetro.

function soma(numero){
    let soma = 0;
    for(numero;numero>0;numero--){
        soma += numero;
    }
    return soma;
}
console.log(soma(3))



// 4)Você deve criar uma função chamada newArray que receba um número como parâmetro e retorne um novo array com a quantidade de elementos equivalente ao valor do número que você passou por parâmetro.

function newArray(numero){
    var arr = [];
    for(var i=0;i<numero;i++){
        arr.push(i+1);
    }
    return arr;
}

console.log(newArray(2))



// 5)Você deve criar uma função chamada split que receba uma string e simule o comportamento da função split original. Se você não sabe como funciona, o Google pode ajudá-lo.
// Importante: Você não pode usar o String.split()


function split(string){
    var arr = [];
    for(i=0;i<string.length;i++){
        arr.push(string[i]);
    }
}
console.log(split("Olá Mundo"));

// 6) Você deve criar uma função chamada moverZeros que receba um array como parâmetro e retorne outro com os números 0 ordenados ao final.

function moverZeros(array){
    for (k=0; k<array.length;k++){
        if (array[k] == 0){
            array.splice(k,1);
            array.push(0);
        }
    }
    console.log(array);
}
moverZeros([99,1,0,0,1,15,23]);



// 7)Você deve criar uma função chamada arrayHandler que receba dois arrays de igual tamanho como parâmetros e exiba no console: "Eu sou {elemento do array 1} e eu sou {elemento do array 2}".

function arrayHandler(a,b){
    for (i=0; i<a.length;i++){
        console.log("Eu sou "+a[i]+" e eu sou "+b[i]);
    }
}
arrayHandler([1,2,3,4,5,6], ["M","y"," ","w","a","y"]);


// 8) Você deve criar uma função chamada arrayObjects que receba um número como parâmetro e retorne um array de objetos que tem uma propriedade chamada valor que contém o valor do número e seus anteriores.



function arrayObjects(num){
    var temp = [];
    for(var i=1;i<=num;i++){
        temp.push({valor:i});
    }
    return temp;
}


// 9) Você deve criar uma função chamada arrayObjectsTwo que recebe um número e uma palavra como parâmetro e retorna um array de objetos que possui: uma propriedade nomeada pela palavra passada por parâmetro e o valor dessa propriedade deve ser o número passado por parâmetro e seus anteriores.


function arrayObjectsTwo(palavra,numero){
    var temp=[];
    for(var i=1;i<=numero;i++){
        temp.push({[palavra]:[i]})
    }
    return temp;
}
console.log(arrayObjectsTwo("Tchau",5))
