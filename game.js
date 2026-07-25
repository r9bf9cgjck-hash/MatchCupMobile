const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let selectedHero = "habib";
let playing = false;


const heroes = {
habib:{
name:"Хабиб",
color:"red"
},

salaudin:{
name:"Салаудин",
color:"pink"
},

aziz:{
name:"Азиз",
color:"orange"
},

abdul:{
name:"Абдул",
color:"gold"
},

muhammad:{
name:"Мухаммад",
color:"cyan"
},

muhammadjr:{
name:"Мухаммад Jr",
color:"lightblue"
}

};



let players=[];



document.querySelectorAll(".player").forEach(card=>{

card.addEventListener("click",()=>{

document.querySelectorAll(".player")
.forEach(x=>x.classList.remove("selected"));


card.classList.add("selected");


selectedHero = card.dataset.id;


console.log("Выбран:", selectedHero);


});

});





document.getElementById("startBtn").onclick=function(){


document.getElementById("menu")
.classList.add("hidden");


document.getElementById("hud")
.classList.remove("hidden");


playing=true;


players=[

{
name:heroes[selectedHero].name,
x:150,
y:400,
color:heroes[selectedHero].color
},


{
name:"Союзник",
x:150,
y:250,
color:"red"
},


{
name:"Соперник",
x:450,
y:400,
color:"blue"
},


{
name:"Соперник Jr",
x:450,
y:550,
color:"darkblue"
}


];


};





function draw(){


ctx.fillStyle="#2e7d32";
ctx.fillRect(0,0,600,800);



ctx.strokeStyle="white";
ctx.beginPath();
ctx.moveTo(300,0);
ctx.lineTo(300,800);
ctx.stroke();



players.forEach(p=>{


ctx.beginPath();

ctx.arc(
p.x,
p.y,
25,
0,
Math.PI*2
);


ctx.fillStyle=p.color;
ctx.fill();


ctx.fillStyle="white";
ctx.font="16px Arial";
ctx.fillText(
p.name,
p.x-30,
p.y-35
);



});



requestAnimationFrame(draw);

}



draw();
