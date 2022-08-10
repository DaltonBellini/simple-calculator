
//+ - * / %
alert('Olá, seja bem vindo a calculadora simples, onde podera realizar calculos de "Soma, Subtração, Multiplicação e Divisão,"')
let numberOne = prompt('Digite o primeiro número da operação')
let numberTwo = prompt('Digite o segundo número da operação')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mul = numberOne * numberTwo
let div = numberOne / numberTwo
let res = numberOne % numberTwo

alert ('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplcação: ' + mul)
alert('Divisâo: ' + div )
alert('Resto da divisão: ' +  res)