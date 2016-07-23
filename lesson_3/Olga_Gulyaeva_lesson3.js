// Ольга Гуляева - урок 2

"use strict"

//var x;
//
//	while (x !== null){	

function CheckNumber(){
	var number = document.getElementById("number").value;
	if (!isNaN(number)){
		if(isPrime(number)){
			document.getElementById("result").innerHTML = number + " простое число!";
		} else { document.getElementById("result").innerHTML = number + " не простое число";
	} else { document.getElementById("result").innerHTML = "Пожалуйта, введите число";
	}
}








// Max prime number in range from 0 till 1000000

function MaxprimeNumber(){
	var MaxPrimeNumber = 3;
	for (var i = 4; i <= 1000000; i++){
		for (var k = 2; k <= Math.sqrt(i); k++){
			if (i % k == 0){
				x = false;
				break;
			}
			var x = true;
		}
		if(x){
			MaxPrimeNumber = i;
		}
	}		
	alert ("Максимальное простое число " + MaxPrimeNumber)
}
MaxprimeNumber()