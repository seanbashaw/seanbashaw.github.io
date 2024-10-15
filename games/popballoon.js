var balloons = document.getElementById("balloons");
function createRandomBalloon(size){
var col =	getRandomColor();
createBalloon(document.documentElement.scrollWidth*Math.random(),document.documentElement.scrollHeight*Math.random(), col,20,col);
}
function createBalloon(x,y,color,size,id){
var balloon = document.createElementNS('http://www.w3.org/2000/svg','svg');
var balloonmain = document.createElementNS('http://www.w3.org/2000/svg','polygon');
var balloonknot = document.createElementNS("http://www.w3.org/2000/svg","ellipse");
var balloonstring = document.createElementNS("http://www.w3.org/2000/svg","line");
var balWidth = Math.abs(getPointAtDegree(0,size)[0]-getPointAtDegree(Math.PI,size)[0]);
var balHeight = Math.abs(-(getPointAtDegree(Math.PI/2,size)[1]-getPointAtDegree(-Math.PI/2,size)[1]));
balloonstring.setAttribute("stroke","black");
balloonstring.setAttribute("x1",balWidth/2);
balloonstring.setAttribute("x2",balWidth/2);
balloonstring.setAttribute("y1",balHeight*.95);
balloonstring.setAttribute("y2",balHeight*.95+100);
balloon.appendChild(balloonstring);
balloon.appendChild(balloonmain);
balloon.appendChild(balloonknot);
balloon.onclick = function() {balloon.remove();balloonList-=id};
balloons.appendChild(balloon);
balloon.setAttribute('id',id);
balloon.setAttribute('x',x);
balloon.setAttribute('y',y);
balloonknot.setAttribute('rx',size/7);
balloonknot.setAttribute('ry',size/14);
balloonknot.setAttribute('cx',balWidth/2);
balloonknot.setAttribute('cy',balHeight*.95);
balloonknot.setAttribute('fill',color);
balloonknot.setAttribute('class','knot');
balloonmain.setAttribute('points',createBalloonString(size*.95,30,balWidth,balHeight));
balloonmain.setAttribute('fill',color);
return balloon;
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function getPointAtDegree(degree,size){
	length = size * (1 + (.375/Math.cosh(2.75*(degree-Math.PI/2))))
	return [(Math.cos(degree)*length),(Math.sin(degree)*length)];
}
function createBalloonString(size,resolution,balWidth,balHeight){
	string = "";
	slice = ((Math.PI*2)/resolution);
	for (let a = -Math.PI*5; a < Math.PI*5; a+=slice){
		points = getPointAtDegree(a*slice,size);
		string+=(points[0]+balWidth/2)+","+(points[1]+(balHeight*.80)/2)+" ";
	}
	return string;
}
function balloonsFloat(){
	for (let b of balloons.getElementsByTagName('svg')){
	var yb = Number(b.getAttribute('y'))-.3;
	b.setAttribute('y',yb);
}
}
function newBalloon(){
var colo = getRandomColor();
createBalloon(Math.random()*document.documentElement.scrollWidth,document.documentElement.scrollHeight,colo,20,'balloon'+colo)

}
document.addEventListener("click", function(e){
if (e.target.tagName=="body"){
	balloons.onclick(e);
}
});
document.addEventListener("DOMContentLoaded", function(){
	balloons.setAttribute('width',document.documentElement.scrollWidth);
	balloons.setAttribute('height',document.documentElement.scrollHeight);
   	createBalloon(40,40,'#FF0000',20,'redbal');
   	for (var d = 0; d < 20; d++){
   		createRandomBalloon(20);
   	}
   	setInterval(balloonsFloat,1000/30);
   	setInterval(newBalloon,2000)
});
