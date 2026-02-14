var hitrn=0;
function makeBubble(){
    var clutter= "";

for (var i=1; i<=112;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += ` <div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter;
}
var timer =30;
function runTimer(){
      var cleartimer=  setInterval(function(){
            if (timer>0){
            timer--;
            document.querySelector("#timervalue").innerHTML = timer;
        }
        else{
            clearInterval(cleartimer);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER
            <span><h6 >YOUR SCORE IS ${score}</h6></span></h1>`;
        }
        },1000);

}
function getNewHit(){
    hitrn= Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}
var score=0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click",function(details){
   var clickednum = (Number(details.target.textContent));
   if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }
})
getNewHit();
runTimer();
makeBubble();

