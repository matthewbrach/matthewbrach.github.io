document.getElementById("button1").onclick = function() {chime()};
document.getElementById("button2").onclick = function() {chimetwice()};
document.getElementById("button3").onclick = function() {chimethree()};
document.getElementById("button4").onclick = function() {chimefour()};
document.getElementById("button5").onclick = function() {chimefive()};
document.getElementById("button6").onclick = function() {chimesix()};
document.getElementById("button7").onclick = function() {chimeseven()};
document.getElementById("button8").onclick = function() {chimeeight()};
document.getElementById("button9").onclick = function() {alarm()};


async function chime(){
    // with thanks to https://marcgg.com/blog/2016/11/01/javascript-audio/ 
     var context = new AudioContext()
     var o = context.createOscillator()
     var  g = context.createGain()
     var frequency =1760
     o.connect(g)
     o.start(0)
     o.type = "triangle"
     o.frequency.value = frequency
     g.connect(context.destination)
     g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 3)
 }
     
 async function chimetwice(){
     chime()
     setTimeout( chime, 300);
 }

 async function chimethree(){
    chimetwice();
    setTimeout(chime, 1750);
}
 
 async function chimefour(){
    chimetwice();
    setTimeout( chimetwice, 1750);
}
 
async function chimefive(){
    chimefour();
    setTimeout(chime,3250)
}

async function chimesix(){
    chimetwice();
    setTimeout(chimefour, 1750);
    
}

async function chimeseven(){
    chimesix()
    setTimeout(chime,5000)
}

async function chimeeight(){
    chimefour();
    setTimeout(chimefour, 3750);
    
}

async function alarm(){
    setTimeout(chime,150);
    
}









    
