// your tasks dhyan me rakho

// step 1 - ye pta kro ki kb mouse rectangle pe aaya h

// step 2 - ab ye calculate kro ki hum center se left pr h ya center se right pr h

// step 3 - ab ye calculate kro ki hum center se kitni left pr h , usi hisaab se red ki intensity change kro


const rect = document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
   var rectLoctaion = rect.getBoundingClientRect();
   var insideRectLocation = details.clientX - rectLoctaion.left;
   if(insideRectLocation< rectLoctaion.width/2){
    // console.log("left");
    var redColor = gsap.utils.mapRange(0,rectLoctaion.width/2,255,0,insideRectLocation);
    gsap.to(rect , {
      backgroundColor : `rgb(${redColor},0,0)`,
      ease : Power4,
    }
    )
   }
   else{
    // console.log("right");
    var blueColor = gsap.utils.mapRange(rectLoctaion.width/2,rectLoctaion.width,0,255,insideRectLocation);
    gsap.to(rect , {
      backgroundColor : `rgb(0,0,${blueColor})`,
      ease : Power4,
    }

    )
   }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor: "white"
    }

    )
})