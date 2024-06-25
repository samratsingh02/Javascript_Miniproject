  var freind= document.querySelector('.add');
   var head=document.querySelector('h5');

 var flag=0;
   
   
  freind.addEventListener('click', function(){

         
if(flag==0){
          head.innerHTML="Freinds";
          head.style .color='green';
          freind.innerHTML='Remove';
          flag=1;

}
else{
          head.innerHTML="Stranger";
          head.style .color='red';
          freind.innerHTML='Add Freinds';
          flag=0;
}
    

  })




     
