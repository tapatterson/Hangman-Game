//Create array of word choices.
//Use "_ _" for letter spaces.
//Track user guesses
var allLetters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var flowers= ["lily", "tulip","rose","daisy","carnation","sunflower"];
//tracks guesses made by the user
var lettersPressed= [];
var computerGuess=flowers[Math.floor(Math.random()*flowers.length)];
var wordLength= computerGuess.length;
var guesses= 0;
var counter= 0;
var lineSpace= [];
var guessesLeft= 12;
var refresh= false;

//To figure out how many line spaces to use
for (var i=0; i<computerGuess.length; i++){
	lineSpace.push("_ ");
}

document.onkeyup= function(){
	var userGuess= String.fromCharCode(event.keyCode).toLowerCase();
	var qtyOfletters= 0;
	var letterT= false;
	var lettersChosen= false;

//Shows letters on the screen
	for (var j=0; j<lettersPressed.length; j++){
		if(userGuess===lettersPressed[j]){
			lettersChosen=true;
		}
	}

	for (var i=0;i<allLetters.length;i++){
		if(allLetters[i]==userGuess){
			if(lettersChosen==false){
				letterT= true;
				lettersPressed.push(userGuess);
				lettersPressed.forEach(function(element){
					return element;
				});
			}
		}

	}

	//compares letters guessed with letters in the word

	for(var i= wordLength-1; i>=0; i--){
		if computerGuess.CharAt(i)==userGuess){
			qtyOfLetters++;
			counter=1
			lineSpace[i]=userGuess;
		}
	}
	if (counter==0 &&letterT==true){
		guesses++;
		guessesLeft--;
		alert("You have" +"guessesLeft"+ remaining);
	}
	else
		counter=0;
}

	html="<p> Enter a letter</p> <p>Letters Guessed:</p>";document.querySelector("game").innerHTML

//Displays letters that user pressed
	for (i=0;i<guesses.length;i++){
		var Span = document.createElement("span");
		game.appendChild(Span);
		Span.innerHTML= lettersPressed[i]+", ";
	}

	var spaceDiv = document.createElement("div");
	game.appendChild(spaceDiv);
	spaceDiv.innerHTML= "<br> Here is the word<br>";

	for (i=0; i<lineSpace.length;i++){
			var wordSpan= document.createElement("span");
			game.appendChild(wordSpan);
			wordSpan.innerHTML=lineSpace[i]+" ";
	}

	var guessesLeftDiv = document.createElement("div");
		game.appendChild(guessesLeftDiv);
		guessesLeftDiv.innerHTML= "Guesses Left:" + guessesLeft;

	var complete= true;
//If user guesses all letters correctly while still having guesses remaining, they win the game. 
//If not, they lose the game.
	for (var i=0; i<lineSpace.length;i++){
		if (lineSpace[i]==="_"){
			complete= false;
		}
	}

	if (complete){
		wins++;
		alert("You won!");
		refresh();
	}

	if (guessesLeft===0){
		losses++;
		alert("You lose!");
		refresh();
	}

	function refresh(){
		location.reload();
	}
}
