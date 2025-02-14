const btn = document.querySelector("#throttle")
const throttleFunction=(func,delay)=>{
    let prev = 0;
    return(...args) =>{
        let now = new Date().getTime();
        if(now - prev > delay){
            prev = now;
            return func(...args);
        }
    }
}

var rect = document.querySelector("#center");
rect.addEventListener("mousemove", throttleFunction((details)=>{
   var div = document.createElement("div");
   div.classList.add('imagediv');
   div.style.left = details.clientX +"px";
   div.style.top = details.clientY +"px";

   var img = document.createElement("img");
   img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoRAM8VbTHTlFwB9v3BRa0ZlFUioRZH5lqQ&s");
   
   div.appendChild(img);
   document.body.appendChild(div);

   gsap.to(img,{
    y : "0",
    ease : Power1,
    duration : .6
   });

   gsap.to(img,{
    y : "100%",
    delay: .6,
    ease : Power2,
    
   });

   setTimeout(function(){
      div.remove();
   },2000)
},400)
);



// hmara mouse jb chal rha h toh kayi bar chal rha h jisse kai baar card create ho jaega and wo hum nhi chahte

// mouse jitni baar chalra h chle..bas execution of fnction km baar ho --isi concept ko bi=olte g throttling (kisi code k number of execution ko km krdena)


// jo bhi cheez iss throttle function k andar aaegi wo der se chlegi

// hr baar ek div bano, div ko basolute kro , ek width and height do , overflow hidden kro and div k andar image banao and uss image ko neeche push krdo aur finally image ko animated way me upar lao