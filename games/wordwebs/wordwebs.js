var wordwebs = document.getElementById("wordwebs");

var connections = {
	"word1":{"x":100,"y":100,"word":"Classic Arcade Games","show":true,
	"connectedIDs":["word2","word3","word4","word5"]
	},
	"word2":{"x":150,"y":60,"word":"Tetris","show":false,
	"connectedIDs":["word1"]
	},
	"word3":{"x":30,"y":60,"word":"Pac-Man","show":false,
	"connectedIDs":["word1"]
	},
	"word4":{"x":30,"y":140,"word":"Super Mario Bros.","show":false,
	"connectedIDs":["word1"]
	},
	"word5":{"x":215,"y":140,"word":"Donkey Kong","show":false,
	"connectedIDs":["word1"]
	}
};
function tryWord(wordID,event){
	var word = document.getElementById(wordID);
	if (word.getAttribute("phrase").toLowerCase().indexOf(word.value.toLowerCase())==0){
			var phrase = word.getAttribute("phrase");
			word.setAttribute("placeholder",phrase.slice(0,word.value.length)+phrase.slice(word.value.length).replace(hideS,'*'));
		}
}

function createWord(x,y,phrase,show,wordid){
	var hideS = /[0-9a-zA-Z]/gi;
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
		word.classList.add("selected-word");
		//Wordlists
		wordlist = connections[word.id]['connectedIDs']
		for (const w of wordlist){
			document.getElementById(w).classList.add("connected-word")
		}
	});
	word.addEventListener('focusout',function(event){
			word.classList.remove("selected-word");
				//Wordlists
		wordlist = connections[word.id]['connectedIDs']
		for (const w of wordlist){
			document.getElementById(w).classList.remove("connected-word")
		}
	});
	form.onsubmit = function(event,propogate=true){
		event.preventDefault();
		if (word.getAttribute("phrase").toLowerCase().indexOf(word.value.toLowerCase())==0&&word.value.length>0){
			var phrase = word.getAttribute("phrase");
			word.setAttribute("placeholder",phrase.slice(0,word.value.length)+phrase.slice(word.value.length).replace(hideS,'*'));
		}
				//Wordlists
		wordlist = connections[word.id]['connectedIDs']
		if (propogate){
		for (const w of wordlist){
			var wa = document.getElementById(w).parentElement;
			event.srcElement=wa;
			wa[0].value=word.value;
			wa.onsubmit(event,false);
		}
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
	createWord(con.x,con.y,con.word,con.show,a);
}
});