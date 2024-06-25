var conta = document.querySelector(".cont");
var love= document.querySelector("i");

conta.addEventListener("dblclick",function(){

          love.style. transform ='translate(-50%,-50%) scale(1)'
          love.style.opacity=1;

         setTimeout(() => {
           love.style. opacity=0;        
         }, 1000);

         setTimeout(() => {
          love.style. transform ='translate(-50%,-50%) scale(0)'
         }, 2000);
})
