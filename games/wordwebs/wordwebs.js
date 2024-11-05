var wordwebs = document.getElementById("wordwebs");

function createWord(x,y,phrase){
	var hideS = /[0-9a-zA-Z]/gi;
	//Wrap the input in a form to allow submission when pressing enter.
	var form = document.createElement("form");
	var word = document.createElement("input");
	var submit = document.createElement("input")
	submit.setAttribute("type","submit");
	submit.setAttribute("style","display: none;");
	word.setAttribute("type","text");
	word.setAttribute("phrase",phrase)
	word.setAttribute("placeholder",phrase.replace(hideS,'*'));
	form.appendChild(word);
	form.appendChild(submit);
	wordwebs.appendChild(form);
	form.onsubmit = function(){
		form.reset();
		console.log(word.getAttribute("phrase").indexOf(word.value));
		if (word.getAttribute("phrase").indexOf(word.value)==0){
		word.setAttribute("placeholder","submitted");
		}else{
			word.setAttribute("placeholder","nah");
		}
		return false;
	};
}

document.addEventListener("DOMContentLoaded", function(){
createWord(10,10,"i'm filing for divorce!");
});