//Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
//Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"

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
  
  