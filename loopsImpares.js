//Você deve criar uma função chamada loopDeImpares que receba um número e uma palavra como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
//Agora, modifique o código para que, caso esse número somado com o número passado por parâmetro seja ímpar, mostre a palavra passada por parâmetro no console.
/*
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

*/
    function loopDeImpares(num,palavra){
        for(var i=0;i<100;i++){
            if(((num+i)%2)!=0){
                console.log(palavra)
            }
            else{
                console.log(i)
            }
        }
    }
  
   