

var incrementCounter=document.getElementById("increment");
var decrementCounter=document.getElementById("decrement");
var resetCounter=document.getElementById("reset");
var errorMsg=document.getElementById("error-msg");

var counter = document.getElementById("num").innerText;

incrementCounter.onclick=increment;
decrementCounter.onclick=decrement;
resetCounter.onclick=reset;


function increment(){
    
    var num = document.getElementById("num").innerHTML;
    num++;
    document.getElementById("num").innerHTML = num;
    if(counter==0)
    {
       decrementCounter.disabled = false;
    }
    else{
        errorMsg.innerText="";
    }
}

function decrement(){
    
    var num = document.getElementById("num").innerHTML;
    num--;
    document.getElementById("num").innerHTML = num;

    if(num==0)
    {
        errorMsg.innerText="Error : Cannot go below 0";
        decrementCounter.disabled = true;
    }
}

function reset(){
    document.getElementById("num").innerHTML = 0;
    if(counter==0)
    {
        errorMsg.innerText=" ";
       decrementCounter.disabled = false;
    }
}








