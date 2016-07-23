// Ольга Гуляева - урок 2

"use strict"

var userInput;

	while (userInput !== null){	

userInput = prompt( "Введите число от 1 до 1000000");

if ( Number(userInput) && 1 <= userInput <= 1000000 ){

	switch(+userInput){
		case 0:
			document.getElementsByTagName("body")[0].innerText = userInput + " не простое число!";
			break;
		case 1:
			document.getElementsByTagName("body")[0].innerText = userInput + " не простое число!";
			break;
		case 2:
			document.getElementsByTagName("body")[0].innerText = userInput + " простое число!";
			break;
		case 3:
			document.getElementsByTagName("body")[0].innerText = userInput + " простое число!";
			break;
		default:
			for (var j = 2; j <= Math.sqrt(userInput); j++){
				if (userInput % j == 0){
					document.getElementsByTagName("body")[0].innerText = userInput + " не простое число";
					break;
				}
				document.getElementsByTagName("body")[0].innerText = userInput + " простое число!";		
			}
		}
} else {
	document.getElementsByTagName("body")[0].innerText = "Вы ввели неверное число ";
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