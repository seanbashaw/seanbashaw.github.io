var wheel = document.getElementById("facts");
var facttext = document.getElementById("facttext");
var wheelbutton = document.getElementById("spinwheelbutton");
const factmap = new Map();
factmap.set('🍕',"Sean has perfected his own pizza dough recipe and can make a pizza like nobody's business!");
factmap.set('🥧',"Sean once bet his mom he could memorize 50 digits of PI for $100 in an hour...and won.");
factmap.set('🌉',"Sean currently lives in the San Francisco Bay Area. He has excellent food and fun activity recommendations for you!");
factmap.set('🏃🏼',"Sean has done three years of cross country and one year of track in school.")
factmap.set('🍇',"Sean's parents currently reside in Napa and he occasionally visits to enjoy the vibes.")
factmap.set('🧀',"Sean's favorite cheese include pepper jack, burrata, havarti, and any aged cheddars.")
factmap.set('🎮',"Sean's top choices for video games are Portal, Fallout, and Baba is You.");
factmap.set('🐀',"Sean was born in 1996, which in the chinese zodiac translates to Year of the Rat.")
factmap.set('☕️',"Sean met Phil from Philz Coffee on the first day that the Palo Alto location opened.")
factmap.set('☘️',"Sean is Irish on both sides and his father went to Notre Dame. He likes to attend the Stanford-Notre Dame rivalry.")
factmap.set('🐅',"Sean went to school at Rochester Institute of Technology, home of the tigers!")
factmap.set('🐦',"Sean's family loved birds. At one point his family had 6 birds, including an African Grey parrot named Frankie!")
factmap.set('🦴',"In second grade Sean broke his femur bone, which is the hardest bone to break in the human body!")
factmap.set('🍑',"In third grade, Sean played James in 'James and the Giant Peach'")
factmap.set('♎',"Sean is a Libra, a sign known for being great at launching new initiatives and having an eye for fashion.")
factmap.set('🍩',"Sean lived in Boston for a year and a half...fully embracing the dunkin donuts lifestyle!")
const wheelio=Array.from(factmap.keys());
var spinner = 0;
wheel.innerHTML=wheelio.join("");
var slottime=0;
var isSpinning=false;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function spinonce(){
	wheelio.push(wheelio.shift());
	wheel.innerHTML=wheelio.join("");
}
function spinwheel(){
	if (!isSpinning){
	spinner = setInterval(spinonce
	,150);
	isSpinning=true;
	wheelbutton.innerText="Stop The Wheel";
	}else{
		clearInterval(spinner);
		facttext.innerHTML=factmap.get(wheelio[0]);
		wheelbutton.innerText="Spin The Wheel!";
		isSpinning=false;
	}
	
}
