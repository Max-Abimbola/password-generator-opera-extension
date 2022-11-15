

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";

chrome.browserAction.onClicked.addListener(function(){
	console.log('This button was clicked!');
});

function checkURL(tabID, changeInfo, tab){
	// If it satisfies the criteria (the URL containing 'www.opera.com')
	if (tab.url.indexOf('www.opera.com') > -1) {
		// Shows the page action
		chrome.pageAction.show(tabID);
	}
}
chrome.tabs.onUpdated.addListener(checkURL);

function displayPassword(){
	var password_text_area = document.getElementById("password-text-area");
	password_text_area.value = "Hello World";
}

function getRandomInt(max){
	return Math.floor(Math.random()*max)
}

function generatePassword(){

	const password = ""


	for(i=0;i<password_length;i++){
		let set = getRandomInt(3);
		switch(set){
			case 0:
				var randnum = getRandomInt(len(letters));
				password += letters[randnum];

			case 1:
				var randnum = getRandomInt(len(numbers));
				password += numbers[randnum];

			case 2:
				var randnum = getRandomInt(len(symbols));
				password += symbols[randnum];
		}
		let char =
	}

	console.log(password);
}
