function updatewatch(){
  //console.log('tock')
    var hours= new Date().getHours();
    var watch;
  if (hours >= 20 && hours < 24) {watch="First Watch"}
    else if (hours >=18 && hours <20) {watch="Second Dog Watch"}
    else if (hours >=16 && hours <18) {watch="First Dog Watch"}
    else if (hours >=12 && hours <16) {watch="Afternoon Watch"}
    else if (hours >=8 && hours <12) {watch="Forenoon Watch"}
    else if (hours >=4 && hours <8) {watch="Morning Watch"}
    else if (hours >=0 && hours <4) {watch="Middle Watch"}
     
  
          document.getElementById('watch').innerHTML = [watch];
          //console.log(watch)
    }
        updatewatch()
        setInterval(updatewatch, 1000)
      

