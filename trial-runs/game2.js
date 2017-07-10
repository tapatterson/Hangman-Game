//Javascript Document

var $= function(id){
			return document.getElementById(id);
		}
		// Create an array to hold the potential word choices. Then generate a random number to pick a word from the array. List all variables here (in a global scope) to be used throughout the game.
		
		var game= ["lily","tulip","rose","daisy"];
		var choice= Math.floor(Math.random()*4);
		var answer= game[choice];
		var myLength= answer.length;
		var letters= answer.split("");
		var attemptsLeft= 12;
		var output= "";
		var userLetter="";

//Create a function to determine how many letters need to be guessed to win the game. Set the number of guesses allowed, and display "_" for the number of letters.

		document.onkeyup = function(event){
		 	var userGuess = event.key;
		}
		var setup= function(){
			for (var i = 0; i<answer.length;i++);{
				display[i]= "_ ";
				output = output + display[i];
			}
		
		document.getElementById("game").innerHTML = 
			output;
			output = "";
		}

		window.onload= function(){
			setup();
		}

		var submit= function(){
			output= " ";
			userLetter= $("letter").value;
			$("letter").value = " ";

			for (var j=0; j<answer.length;j++){
				alert(letters[j]);
				if (userLetter.toLowerCase()==letters[j]){
					display[j]= userLetter.toLowerCase();
					win--;
				}
				output=output + display[j] + " ";
			}
			document.getElementById("game").innerHTML= output;
		}

		output= " ";
		attemptsLeft= --;