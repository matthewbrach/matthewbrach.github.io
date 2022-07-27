




async function starttext() {
    document.getElementById("biotext").style.opacity = ".05";
    document.getElementById("siggy").style.opacity = "1";
}


document.getElementById("chimestatus").innerHTML = "silent";

document.getElementById("biotext").style.opacity = "0.2";



async function swaptext(){
    
    document.getElementById("biotext").style.opacity = "1";
    document.getElementById("siggy").style.opacity = ".1";

    setTimeout(() => { starttext ()
             }, "25000")
}



 async function play(){
    prepare();
    
    setInterval(function updateTime(){
        
        //test time
        //var hours = 7
        //var minutes = 30
        
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var mill = currentTime.getMilliseconds();
        //console.log(hours,minutes);
        
        
		if(hours === 12 && minutes === 15 &&  seconds === 0){console.log("caught")}
                else if(hours === 0 && minutes === 0 &&  seconds === 0){prepare(),chimeeight(),console.log("s8")}
                else if(hours === 4 && minutes === 0 &&  seconds === 0){prepare(),chimeeight(),console.log("s8")}
                else if(hours === 8 && minutes === 0 &&  seconds === 0){prepare(),chimeeight(),console.log("s8")}
                else if(hours === 12 && minutes === 0 &&  seconds === 0){prepare(),chimeeight(),console.log("s8")}
                else if(hours === 16 && minutes === 0 &&  seconds === 0){prepare(),chimeeight(),console.log("s8")}
                else if(hours === 20 && minutes === 0 &&  seconds === 0){prepare(),chimeeight(),console.log("s8")}
              
                


                else if(hours === 3 && minutes === 30 &&  seconds === 0){prepare(),chimeseven(),console.log("s7")}
                else if(hours === 7 && minutes === 30 &&  seconds === 0){prepare(),chimeseven(),console.log("s7")}
                else if(hours === 11 && minutes === 30 &&  seconds === 0){prepare(),chimeseven(),console.log("s7")}
                else if(hours === 15 && minutes === 30 &&  seconds === 0){prepare(),chimeseven(),console.log("s7")}
                else if(hours === 19 && minutes === 30 &&  seconds === 0){prepare(),chimeseven(),console.log("s7")}
                else if(hours === 23 && minutes === 30 &&  seconds === 0){prepare(),chimeseven(),console.log("s7")}
                
                
                else if(hours === 3 && minutes === 0 &&  seconds === 0){prepare(),chimesix(),console.log("s6")}
                else if(hours === 7 && minutes === 0 &&  seconds === 0){prepare(),chimesix(),console.log("s6")}
                else if(hours === 11 && minutes === 0 &&  seconds === 0){prepare(),chimesix(),console.log("s6")}
                else if(hours === 15 && minutes === 0 &&  seconds === 0){prepare(),chimesix(),console.log("s6")}
                else if(hours === 19 && minutes === 0 &&  seconds === 0){prepare(),chimesix(),console.log("s6")}
                else if(hours === 23 && minutes === 0 &&  seconds === 0){prepare(),chimesix(),console.log("s6")}
                

                else if(hours === 2 && minutes === 30 &&  seconds === 0){prepare(),chimefive(),console.log("s5")}
                else if(hours === 6 && minutes === 30 &&  seconds === 0){prepare(),chimefive(),console.log("s5")}
                else if(hours === 10 && minutes === 30 &&  seconds === 0){prepare(),chimefive(),console.log("s5")}
                else if(hours === 14 && minutes === 30 &&  seconds === 0){prepare(),chimefive(),console.log("s5")}
                else if(hours === 18 && minutes === 30 &&  seconds === 0){prepare(),chimefive(),console.log("s5")}
                else if(hours === 22 && minutes === 30 &&  seconds === 0){prepare(),chimefive(),console.log("s5")}

                else if(hours === 2 && minutes === 0 &&  seconds === 0){prepare(),chimefour(),console.log("s4")}
                else if(hours === 6 && minutes === 0 &&  seconds === 0){prepare(),chimefour(),console.log("s4")}
                else if(hours === 10 && minutes === 0 &&  seconds === 0){prepare(),chimefour(),console.log("s4")}
                else if(hours === 14 && minutes === 0 &&  seconds === 0){prepare(),chimefour(),console.log("s4")}
                else if(hours === 18 && minutes === 0 &&  seconds === 0){prepare(),chimefour(),console.log("s4")}
                else if(hours === 22 && minutes === 0 &&  seconds === 0){prepare(),chimefour(),console.log("s4")}

                else if(hours === 1 && minutes === 30 &&  seconds === 0){prepare(),chimethree(),console.log("s3")}
                else if(hours === 5 && minutes === 30 &&  seconds === 0){prepare(),chimethree(),console.log("s3")}
                else if(hours === 9 && minutes === 30 &&  seconds === 0){prepare(),chimethree(),console.log("s3")}
                else if(hours === 13 && minutes === 30 &&  seconds === 0){prepare(),chimethree(),console.log("s3")}
                else if(hours === 17 && minutes === 30 &&  seconds === 0){prepare(),chimethree(),console.log("s3")}
                else if(hours === 21 && minutes === 30 &&  seconds === 0){prepare(),chimethree(),console.log("s3")}
                

                else if(hours === 1 && minutes === 0 &&  seconds === 0){prepare(),chimetwice(),console.log("s2")}
                else if(hours === 5 && minutes === 0 &&  seconds === 0){prepare(),chimetwice(),console.log("s2")}
                else if(hours === 9 && minutes === 0 &&  seconds === 0){prepare(),chimetwice(),console.log("s2")}
                else if(hours === 13 && minutes === 0 &&  seconds === 0){prepare(),chimetwice(),console.log("s2")}
                else if(hours === 17 && minutes === 0 &&  seconds === 0){prepare(),chimetwice(),console.log("s2")}
                else if(hours === 21 && minutes === 0 &&  seconds === 0){prepare(),chimetwice(),console.log("s2")}
               
                else if(hours === 0 && minutes === 30 &&  seconds === 0){prepare(),chime(),console.log("s1")}
                else if(hours === 4 && minutes === 30 &&  seconds === 0){prepare(),chime(),console.log("s1")}
                else if(hours === 8 && minutes === 30 &&  seconds === 0){prepare(),chime(),console.log("s1")}
                else if(hours === 12 && minutes === 30 &&  seconds === 0){prepare(),chime(),console.log("s1")}
                else if(hours === 16 && minutes === 30 &&  seconds === 0){prepare(),chime(),console.log("s1")}
                else if(hours === 20 && minutes === 30 &&  seconds === 0){prepare(),chime(),console.log("s1")}

                

document.getElementById('chimestatus').innerHTML = ["enabled"];
                
               
                
         },1000);
         console.log("enabled")
        }

    //Chime Sounds

    async function prepare(){
       
         var click = new AudioContext()
         var o = click.createOscillator()
         var  g = click.createGain()
         var frequency =6500
         o.connect(g)
         o.start(0)
         o.type = "sawtooth"
         o.frequency.value = frequency
         g.connect(click.destination)
         g.gain.exponentialRampToValueAtTime(0.0000000001, click.currentTime + .05)

         setTimeout(() => {  console.log("moving hammer sound");

         var click2 = new AudioContext()
         var o = click2.createOscillator()
         var  g = click2.createGain()
         var frequency =6000
         o.connect(g)
         o.start(0)
         o.type = "sawtooth"
         o.frequency.value = frequency
         g.connect(click2.destination)
         g.gain.exponentialRampToValueAtTime(0.0000000001, click2.currentTime + .05)
        }, 750);

     }





    async function chime(){
        // with thanks to https://marcgg.com/blog/2016/11/01/javascript-audio/ for the sound creation idea and code
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
         setTimeout( chime, 500);
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
    


  //  with thanks to https://dev.to/code_mystery/simple-analog-clock-using-html-css-javascript-2c6a
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  
   function setDate() {
    const now = new Date();
  
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
  
  setInterval(setDate, 1000);
  
  setDate();

  
 
    
    
            
     

     