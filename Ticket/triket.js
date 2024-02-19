 const btn = document.getElementsByClassName("btn");
const add = [];
    let loos =40;
    let count =0;
 for(let button of btn){
    button.addEventListener("click",function(){
        
         const balue = button.innerText;
         if (add.includes(balue)){
            alert('alredy selcted')
            
         }
         else if(add.length>3  ) {
            alert('allready 4 selected')
            
          
         }
         else{
            add.push(balue)
            
        count = add.length;
        loos -=1;
         }
        console.log(add);
        button.style.backgroundColor= '#1dd100' ;
        num("total-seat",loos)
        num("seat-count",count)
        
    })
 }

 function num(id,value){

    let set = document.getElementById(id);
    set.innerText = value;

 }

