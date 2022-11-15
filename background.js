

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";


function displayPassword(value){
	var password_text_area = document.getElementById("password-text-area");
	password_text_area.value = value;
}

function getRandomInt(max){
	return Math.floor(Math.random()*max)
}

function hello(){
	console.log("hello");
}

function generatePassword(password_length){

	var password = "";

	for(i=0;i<password_length;i++){
		let set = getRandomInt(2);
		switch(set){
			case 0:
				var randnum = getRandomInt(letters.length);
				password += letters[randnum];

			case 1:
				var randnum = getRandomInt(numbers.length);
				password += numbers[randnum];

			case 2:
				var randnum = getRandomInt(symbols.length);
				password += symbols[randnum];
		}
	}

	console.log("password: "+password);
	displayPassword(password);
};
