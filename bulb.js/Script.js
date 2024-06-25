let blb=document.querySelector('.blb');
let btn= document.querySelector('button');
var flag=0

btn.addEventListener('click',function(){

          if(flag===0){
                    blb.style .backgroundColor = "yellow";
                    flag=1

          }
         else{
          blb.style .backgroundColor = "transparent";
          flag=0
         }
    

})
btn.addEventListener('click',function(){
          if(btn.innerHTML==='ON'){
                    btn.innerHTML='OFF'
          }
          else{
                    btn.innerHTML='ON'
          }


})
