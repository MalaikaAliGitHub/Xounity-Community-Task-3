let text=document.getElementById("para");
let button=document.getElementById("btn");


function FindAge(){
    let input=parseInt(prompt("Enter Age:"));
    if(input>=18){
         text.innerHTML="You are allowed To Drink Coffee";
    }
    else{
        text.innerHTML="You are not allowed To Drink Coffee";        
    }
    
}
button.addEventListener('click',FindAge);




