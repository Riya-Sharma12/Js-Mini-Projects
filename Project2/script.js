window.addEventListener("mousemove",function(details){
    var rect = this.document.querySelector("#center");
    var xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (100 +  rect.getBoundingClientRect().width / 2),
        details.clientX
    );
  gsap.to('#center',{
     left : xval + "px",
     ease : Power3
  });
});