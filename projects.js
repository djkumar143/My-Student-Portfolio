const showImage1=()=>{
    var divObj = document.getElementById("theImage_pirate");
       //Use the specification method before using prefixed versions
      if (divObj.requestFullscreen) {
        divObj.requestFullscreen();
      }
      else if (divObj.msRequestFullscreen) {
        divObj.msRequestFullscreen();               
      }
      else if (divObj.mozRequestFullScreen) {
        divObj.mozRequestFullScreen();      
      }
      else if (divObj.webkitRequestFullscreen) {
        divObj.webkitRequestFullscreen();       
      } else {
        console.log("Fullscreen API is not supported");
      } 
}


const showImage2=()=>{
    var divObj = document.getElementById("theImage_banana");
       //Use the specification method before using prefixed versions
      if (divObj.requestFullscreen) {
        divObj.requestFullscreen();
      }
      else if (divObj.msRequestFullscreen) {
        divObj.msRequestFullscreen();               
      }
      else if (divObj.mozRequestFullScreen) {
        divObj.mozRequestFullScreen();      
      }
      else if (divObj.webkitRequestFullscreen) {
        divObj.webkitRequestFullscreen();       
      } else {
        console.log("Fullscreen API is not supported");
      } 
}


