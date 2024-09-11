const display =document.getElementById('display');
const decrease =document.getElementById('decrease');
const reset=document.getElementById('reset');
const increase =document.getElementById('increase');

let count = 0;



increase.addEventListener('click' , function (){
    count++;
    display.innerText=count; 
    

});


decrease.addEventListener('click' , function (){
    count--;
    display.innerText=count; 


});

reset.addEventListener('click' , function (){
    count=0;
    display.innerText=count; 

});


document.addEventListener('click', function(){
    if (count >=0 && count < 10) {
        display.style.color= 'green';
        }
        else if(count<0){
            display.style.color='blue';
        }
        else if (count >= 10){
            display.style.color= 'red';
        }

});






