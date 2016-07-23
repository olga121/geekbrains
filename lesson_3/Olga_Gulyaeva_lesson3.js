// Ольга Гуляева - урок 2

"use strict"

var user;

	while (user !== null){	

user = prompt( "Введите число от 1 до 1000000");

if ( Number(user) && 1 <= user <= 1000000){

	if (isPrime(user)){
		document.getElementById("selfmade").innerText = user + " простое число!"}	
	else {
		document.getElementById("selfmade").innerText = user + " не простое число"}
} else {
	if (user !== null){
	document.getElementById("selfmade").innerText = " Вы ввели неверное число"}	
		}
//Завершение цикла while
}

//функция, определяющая простые числа
function isPrime(n){
	if (n < 2) {
		return false}
	if (n != Math.round(n)){
		return false}
	var isPrime = true;
	for (var i = 2; i <= Math.sqrt(n); i++){
		if (n % i == 0) {
			isPrime = false}
	}
return isPrime;
}


//Определение максимального простого числа в диапазоне
var x;
x = 0;
while (x < 1000){

if (isPrime(x)){
	var maxPrimeN = x}

  x++;
}
document.getElementById("MaxPrime").innerText = maxPrimeN + " - максимальное простое число в диапазоне до 1000 ";


