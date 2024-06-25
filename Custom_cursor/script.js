var main= document.querySelector(".main");
var crsr=document.querySelector(".cursor");

main.addEventListener("mousemove",function(sam){

//crsr.style.right=sam.x+"px"

crsr.style.left=sam.x+"px"
crsr.style.top=sam.y+"px"

})
