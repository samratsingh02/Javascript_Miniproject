let mode=document.querySelector("#mode");
let body=document.querySelector('body');


let count=0;
mode.addEventListener('click',()=>{
        if(count==0){
          body.style.backgroundColor='black'
          body.style. color='white'
          count=1;
        }
        else{
          body.style.backgroundColor='white'
          count=0;
          body.style.color='black'

        }

})
