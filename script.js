let option=document.getElementById("option");
let btn=document.getElementById("area");
let heading=document.querySelectorAll(".box h1")[0];
let answer=document.getElementById("ans");
function optionChange(){
  heading.innerHTML=`Click here to find area of ${option.value}`;
  answer.innerHTML="";
}
btn.addEventListener("click",e=>{
let choice=option.value;
switch (choice) {
				case "Circle":
				Circle();
				break;
				case "Square":
				Square();
				break;
				case "Rectangle":
				Rectangle();
				break;
				case "Triangle":
				Triangle();
				break;
				case "Semicircle":
				Semicircle();
				break;
				case "Trapezium":
				Trapezium();
				break;
				case "Cube":
				Cube();
				break;
				case "Cylinder":
				Cylinder();
				break;
				case "Sphere":
				Sphere();
				break;
				default:
				alert("not");
}
});
function Circle() {
	let radius=prompt("Enter the radius");
	let radiusSq=radius*radius;
	let area=Math.PI*radiusSq;
	answer.innerHTML=`Area: ${area}`;
}
function Square() {
	let side=prompt("Enter the side");
	let area=side*side;
	answer.innerHTML=`Area: ${area}`;
}
function Rectangle(){
	let length=prompt("Enter the length");
	let breadth=prompt("Enter the breadth");
	let area=length*breadth;
	answer.innerHTML=`Area: ${area}`;
}
function Triangle() {
	let height=prompt("Enter height");
	let base=prompt("Base");
	let area=0.5*(base*height);
	answer.innerHTML=`Area: ${area}`;
}
function Semicircle() {
	let diameter=prompt("Enter the Diameter");
	let radius=diameter/2;
	let radiusSq=radius*radius;
	let area=(Math.PI*radius)/2;
	answer.innerHTML=`Area: ${area}`;
}
function Trapezium() {
	let a=parseInt(prompt("Enter first base(a)"));
	let b=parseInt(prompt("Enter second base(b)"));
	let height=prompt("Enter height");
	let area=0.5*(a+b)*height;
	console.log(area)
	answer.innerHTML=`Area: ${area}`;
}
function Cube() {
	let side=prompt("Enter the side");
	let area=6*(side*side)
	answer.innerHTML=`Area: ${area}`;
}
function Cylinder(){
	let radius=prompt("Enter the radius");
	let height=prompt("Enter the height")
	let radiusSq=radius*radius;
	let area=(2*Math.PI*radius*height)+(2*Math.PI*radiusSq);
	answer.innerHTML=`Area: ${area}`;
}
function Sphere() {
let radius=prompt("Enter the radius");
let radiusSq=radius*radius;
let area=4*Math.PI*radiusSq;
answer.innerHTML=`Area: ${area}`;
}
