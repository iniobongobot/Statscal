function Magic8(){
let Magic = document.getElementById('textbox').value;
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
}document.getElementById('answer').innerHTML=say;
document.getElementById('textbox').value = "";

};

const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition || window.mozSpeechRecognition;
  
const recognition = new SpeechRecognition();
 
//var Textbox = $('#textbox');
var instructions = $('#instructions');
 
let Content = '';
 
recognition.continuous = false;
 
recognition.onresult = function(event) {
 
  var current = event.resultIndex;
 
  let transcript = event.results[current][0].transcript;
 console.log(event.results[current][0]);
    Content = transcript;
    document.getElementById('textbox').value = Content;
    console.log(Content);

    
  
};
 
recognition.onstart = function() { 
  instructions.text('Voice recognition is ON.');
}
 
recognition.onspeechend = function() {
  instructions.text('No activity.');
}
 
recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('Try again.');  
  }
}
 
function start(e) {
  if (Content.length) {
    Content += ' ';
  }
  document.getElementById('textbox').value = "";

  recognition.start();
  
};

function lear(){
	document.getElementById('textbox').value = "";
	Content = "";
	transcript = "";

	console.log(Content);
}
 
//Textbox.on('input', function() {
//  Content = $(this).val();
//});
