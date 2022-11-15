

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";

var incLetters = false;
var incNumbers = false;
var incSymbols = false;


function displayPassword(value){

	var password_text_area = document.getElementById("password-text-area");
	password_text_area.value = ""
	password_text_area.value = value;
}

function getRandomInt(max){
	if(max == 1){
		return 1
	}
	return Math.floor(Math.random()*max)
}

function hello(){
	console.log("hello");
}

function generatePassword(incLetters,incNumbers,incSymbols,password_length){

	var password = "";
	console.log(`incLetters: ${incLetters} , incNumbers: ${incNumbers} , incSymbols: ${incSymbols}`);

	available_characters = [];

	if(incLetters == true){
		available_characters.push("incLetters");
	}
	if(incNumbers == true){
		available_characters.push("incNumbers");
	}
	if(incSymbols == true){
		available_characters.push("incSymbols");
	}

	console.log(available_characters)
	console.log(available_characters.length)

	for(i=0;i<password_length;i++){
		console.log("i: "+i)
		let set = getRandomInt(available_characters.length);
		console.log(set)

		if(available_characters[set] == "incLetters"){
			var randnum = getRandomInt(letters.length);
			password += letters[randnum];			
		}
		else if(available_characters[set] == "incNumbers"){
			var randnum = getRandomInt(numbers.length);
			password += numbers[randnum];			
		}
		else if(available_characters[set] == "incSymbols"){
			var randnum = getRandomInt(symbols.length);
			password += symbols[randnum];			
		}
	}
/*
		switch(available_characters[set]){
			case "incLetters":
				var randnum = getRandomInt(letters.length);
				password += letters[randnum];

			case "incNumbers":
				var randnum = getRandomInt(numbers.length);
				password += numbers[randnum];

			case "incSymbols":
				var randnum = getRandomInt(symbols.length);
				password += symbols[randnum]
		}
	}
*/
	console.log("password: "+password,password.length);
	displayPassword(password);
};
