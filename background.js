

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+={[}]|;<>?/";

var generate_button = document.getElementById("generate-button")
generate_button.addEventListener('click', function(){ generatePassword()}, false);

var slider_value = document.getElementById("slider-value");
var password_slider = document.getElementById("password-length-updater");
slider_value.innerHTML = password_slider.value;
generatePassword()

password_slider.oninput = function(){
	slider_value.innerHTML = this.value;
	generatePassword();
}

function displayPassword(value){

	var password_text_area = document.getElementById("password-text-area");
	password_text_area.value = ""
	password_text_area.value = value;
}


function getRandomInt(max){
	if(max == 1){
		return 0
	}
	return Math.floor(Math.random()*max)
}

function hello(){
	console.log("hello");
}

function generatePassword(){

	var incLetters = document.getElementById("letters_checkbox").checked;
	var incNumbers = document.getElementById("numbers_checkbox").checked;
	var incSymbols = document.getElementById("symbols_checkbox").checked;
	var password_length = document.getElementById("password-length-updater").value;
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
	console.log("password: "+password,password.length);
	displayPassword(password);
};
