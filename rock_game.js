let computer=document.getElementById('computer');
let player=document.getElementById('player');
let result=document.getElementById('result');

let butns=document.querySelectorAll('button');
 
var p2;
var p1;
butns.forEach((but)=>{
    but.addEventListener('click',(event)=>{
         p1=event.target.value;
        player.innerText=`Player :${p1}`
        computerTurn();
        
        computer.innerText=`Computer :${p2}`;
       
        result.innerText=`Result :${ checkWin()}`


    })

})

function computerTurn(){
let num=Math.floor(Math.random()*3+1);
console.log(num)
  switch(num){
  case 1:
    p2='ROCK';
    break;
    case 2:
        p2='PAPER';
        break;
     
           
            default :
            p2='SCISSOR';
           

  }
  
}
function checkWin(){
    if(p1==p2){
        return 'Drawn'
    }
    else if(p1=='ROCK'){
        return p2=='SCISSOR'? "YOU WIN":"YOU LOSE"
    }
    else if(p1=='SCISSOR'){
        return p2=='PAPER'? "YOU WIN":"YOU LOSE"
    }
    else if(p1=='PAPER'){
        return p2=='ROCK'? "YOU WIN":"YOU LOSE"
    }
}
