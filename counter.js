var value = document.getElementById("num").innerText;


function plus(){
    var num = document.getElementById("num").innerHTML;
    num++;
    document.getElementById("num").innerHTML = num;
}

function minus(){
    var num = document.getElementById("num").innerHTML;
    num--;
    document.getElementById("num").innerHTML = num;
}

function clear(){
    document.getElementById("num").innerHTML = 0;
}

var increment=plus;
var decrement=minus;
var reset=clear;