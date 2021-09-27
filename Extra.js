function Extra(){
	let Extra = document.getElementById('MindGame').value;
	if (Extra == 'RPS'){
		var output= "<fieldset><legend>Rock ,Paper, Scissors</legend>"+
				"<select id="+"'rps'"+"><option value="+"'Nothing'"+"selected>Pick One to Play</option>"+
				"<option value="+"'Rock'"+">Rock</option>"+
				"<option value="+"'Paper'"+">Paper</option>"+
				"<option value="+"'Scissors'"+">Scissors</option>"+
			"</select>"+	
			"</br>"+
			"<button onclick="+'RPS()'+">Let's Play</button>"+
			"</fieldset></br>"+
			"<p id="+"'answer'"+"></p>";
	}
	else if (Extra == 'Guess'){
		var output= "<fieldset><legend>Guess A Number between 1 and 5</legend>"+
				"<label>I have a number in mind, See if you can Guess it</br><input id='Guess' type='number' min='1' max='5'></label>"+
				"</br>"+"<button onclick="+'GuessGame()'+">Let's Play</button>"+
			"</fieldset></br>"+
			"<p id="+"'answer'"+"></p>";
	}
	else if (Extra == 'Magic'){
		var output= "<fieldset><legend>Ask the Magic 8 Ball</legend>"+
				"<label>Magic 8 Ball<input id='Magic' type='text' min='1' max='5'></label>"+
				"</br>"+"<button onclick="+'Magic8()'+">Ask the 8 Ball</button>"+
			"</fieldset></br>"+
			"<p id="+"'answer'"+"></p>";
	}
	else{
		var output = "<h2 style="+"'color:red'"+">Pick a Game to play</h2>";
	}
	document.getElementById('secassign').innerHTML=output;
}

function RPS(){
let rps = document.getElementById('rps').value;
var random = Math.floor(Math.random() * 3) + 1;
//1-Rock, 2-Paper, 3-Sciccor
let one="Rock",	two="Paper", three="Scissors";
//now comes the if statement
var result = false, say = false;
if(rps=="Nothing"){
	say= "<h2 style="+"'color:red'"+">Missing parameter</h2>";
}
else if (random==1 && rps == one){
	result = "DRAW!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+one+"</br><hr> Thank you for Playing!!</h2>";
}
else if (random==1 && rps == two){
	result = "YOU WIN!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+one+"</br><hr> Thank you for Playing!!</h2>";
}
 else if (random==1 && rps == three){
	result = "YOU LOSE!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+one+"</br><hr> Thank you for Playing!!</h2>";
}
else if (random==2 && rps == one){
	result = "YOU LOSE!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+two+"</br><hr> Thank you for Playing!!</h2>";
}
else if (random==2 && rps == two){
	result = "DRAW!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+two+"</br><hr> Thank you for Playing!!</h2>";
}
 else if (random==2 && rps == three){
	result = "YOU WIN!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+two+"</br><hr> Thank you for Playing!!</h2>";
}
else if (random==3 && rps == one){
	result = "YOU WIN!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+three+"</br><hr> Thank you for Playing!!</h2>";
}
else if (random==3 && rps == two){
	result = "YOU LOSE!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+three+"</br><hr> Thank you for Playing!!</h2>";
}
 else if (random==3 && rps == three){
	result = "DRAW!!";
	say="<h1>"+result+"</h1><h2>You Chose: "+rps+", Computer Chose "+three+"</br><hr> Thank you for Playing!!</h2>";
}
document.getElementById('answer').innerHTML=say;
}

function GuessGame(){
let Guess = document.getElementById('Guess').value;
var random = Math.floor(Math.random() * 5) + 1;
if(Guess==""){
	say= "<h2 style="+"'color:red'"+">Missing Guess parameter</h2>";
}
else if (Guess == random){
	say="<h1>Congrats You Got it Right!!</br><hr> Thank you for Playing!!</h2>";
}
else if (Guess != random){
	say="<h1> Sorry you got it wrong</br> The Number was "+random+"</h1><h2>You Chose: "+Guess+"</br><hr> Thank you for Playing!!</h2>";
}
 document.getElementById('answer').innerHTML=say;
}

function Magic8(){
let Magic = document.getElementById('Magic').value;
var random = Math.floor(Math.random() * 20) + 1;
var say=false, message=false;
if (Magic ==""){
	say= "<h2 style="+"'color:red'"+">Ask the Magic 8 Ball a question</h2>";
}
else{
	if(random===1){
		message=' It is certain.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===2){
		message=' It is decidedly so.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===3){
		message=' Without a doubt.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===4){
		message=' Yes – definitely';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===5){
		message=' You may rely on it.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===6){
		message=' As I see it, yes.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===7){
		message=' Most likely.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===8){
		message=' Outlook good.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===9){
		message=' Yes.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===10){
		message=' Signs point to yes.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===11){
		message=' Reply hazy, try again.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===12){
		message=' Ask again later.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===13){
		message=' Better not tell you now.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===14){
		message=' Cannot predict now.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===15){
		message=' Concentrate and ask again.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===16){
		message=' Don\'t count on it.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===17){
		message=' My reply is no.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===18){
		message=' My sources say no.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===19){
		message=' Outlook not so good';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
	else if(random===20){
		message=' Very doubtful.';
		say='<h1>You asked: '+Magic+'</br> 8Ball Said:'+message+'</h1>';
	}
}
document.getElementById('answer').innerHTML=say;
}

function dis(val)
{
document.getElementById("edu").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("edu").value
let y = eval(x)
document.getElementById("edu").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("edu").value = "";
document.getElementById('alert').innerHTML=""
}

function ale(){
	document.getElementById('alert').innerHTML="<b>Add a closing bracket ) after you input the number</b>"
}


function roundTo() {
	var roundTo = parseInt(document.getElementById('roundTo').value);
	var roundNum = parseFloat(document.getElementById('roundNum').value);
	var roundAns = parseFloat(roundNum.toFixed(roundTo));
	document.getElementById('roundOut').value = roundAns;
}