var wordwebs = document.getElementById("wordwebs");
var connections = {};
function createWord(x,y,phrase,show){
	var hideS = /[0-9a-zA-Z]/gi;
	//Wrap the input in a form to allow submission when pressing enter.
	var form = document.createElement("form");
	var word = document.createElement("input");
	var submit = document.createElement("input")
	submit.setAttribute("type","submit");
	submit.setAttribute("style","display: none;");
	word.setAttribute("type","text");
	word.setAttribute("phrase",phrase);
	word.setAttribute("amtSlvd",0);
	word.setAttribute("placeholder",show?phrase:phrase.replace(hideS,'*'));
	word.setAttribute('size',phrase.length);
	word.setAttribute("style","position:absolute; ");
	word.style.left = x+"px";
	word.style.top = y+"px";
	form.appendChild(word);
	form.appendChild(submit);
	wordwebs.appendChild(form);
	word.addEventListener('focusin',function(event){
		console.log(event);
		word.classList.add("selected-word");
	});
	word.addEventListener('focusout',function(event){
			word.classList.remove("selected-word");
	});
	form.onsubmit = function(event){
		event.preventDefault();
		console.log(word.getAttribute("phrase").toLowerCase().indexOf(word.value.toLowerCase(),0));
		if (word.getAttribute("phrase").toLowerCase().indexOf(word.value.toLowerCase())==0){
			var phrase = word.getAttribute("phrase");
			console.log(phrase);
			word.setAttribute("placeholder",phrase.slice(0,word.value.length)+phrase.slice(word.value.length).replace(hideS,'*'));
		}else{
			//word.setAttribute("placeholder","nah");
		}
		word.value="";
		form.reset();
	};
	return word;
}
function connectWords(a,b){
	var cont = document.createElementNS('http://www.w3.org/2000/svg','svg');
	var wordConnection = document.createElementNS("http://www.w3.org/2000/svg","line");
	wordConnection.setAttribute("stroke","black");
	//wordConnection.setAttribute("x1",a.getBoundingClientRect().width/2+a.getBoundingClientRect().left);
	//wordConnection.setAttribute("x2",b.getBoundingClientRect().width/2+b.getBoundingClientRect().left);
	wordConnection.setAttribute("x1",0);
	wordConnection.setAttribute("x2",0);
	wordConnection.setAttribute("y1",a.getBoundingClientRect().height/2+a.getBoundingClientRect().top);
	wordConnection.setAttribute("y2",b.getBoundingClientRect().height/2+b.getBoundingClientRect().top);
	cont.appendChild(wordConnection)
	wordwebs.appendChild(cont);
}

document.addEventListener("DOMContentLoaded", function(){
createWord(50,10,"Gold",true);
createWord(0,50,"Golden Gate Bridge",false);
createWord(200,50,"Gold Rush",false);
createWord(100,100,"California",false);
});