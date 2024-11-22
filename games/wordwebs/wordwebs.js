var wordwebs = document.getElementById("wordwebs");

var connections = {"word1":{"x":100,"y":100,"word":"Classic Arcade Games","start":true,
"connectedIDs":["word2","word3","word4","word5"]
},
"word2":{"x":150,"y":60,"word":"Tetris",
"connectedIDs":["word1"]
},
"word3":{"x":30,"y":60,"word":"Pac-Man",
"connectedIDs":["word1"]
},
"word4":{"x":30,"y":140,"word":"Super Mario Bros.",
"connectedIDs":["word1"]
},
"word5":{"x":215,"y":140,"word":"Donkey Kong",
"connectedIDs":["word1"]
}
};

function createWord(x,y,phrase,show,wordid){
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
	word.id = wordid;
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
		}
		word.value="";
		form.reset();
	};
	return word;
}

document.addEventListener("DOMContentLoaded", function(){
	//This automates creation of our wordweb grids slightly
var ids = Object.keys(connections);
for (const a of ids){
var con = connections[a];
if (con.start){
	createWord(con.x,con.y,con.word,con.start,a);
}else{
createWord(con.x,con.y,con.word,a);
}
}
});