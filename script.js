/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:

*/

alert("Bem vindo vamos fazer alguns calculos com os valores que irá nos fornecer")

let numberOne = Number(prompt("Digite o primeiro valor "))
let numberTwo = Number(prompt("Digite o segundo valor "))

let addition = (numberOne + numberTwo)
let subtraction = (numberOne - numberTwo)
let multiplication = (numberOne * numberTwo)
let division = (numberOne / numberTwo)
let restOfDivision = (numberOne % numberTwo)

alert(addition)
alert(subtraction)
alert(multiplication)
alert(division.toFixed(2))
alert(restOfDivision)

if(addition%2 == 0){
    alert(`A soma de ${numberOne} e ${numberTwo} é ${addition} e este valor é par`)
}else{
    alert(`A soma de ${numberOne} e ${numberTwo} é ${addition} e este valor é impar`)
}

if(numberOne != numberTwo){
    alert("Os números são diferentes")
}else{
    alert("Os números são iguais")
}