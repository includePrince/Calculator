function zero(){
    document.getElementById("ansArea").value += '0';
}
function one(){
    document.getElementById("ansArea").value += '1';
}
function two(){
    document.getElementById("ansArea").value += '2';
}
function three(){
    document.getElementById("ansArea").value += '3';
}
function four(){
    document.getElementById("ansArea").value += '4';
}
function five(){
    document.getElementById("ansArea").value += '5';
}
function six(){
    document.getElementById("ansArea").value += '6';
}
function seven(){
    document.getElementById("ansArea").value += '7';
}
function eight(){
    document.getElementById("ansArea").value += '8';
}
function nine(){
    document.getElementById("ansArea").value += '9';
}
function dot(){
    document.getElementById("ansArea").value += '.';
}
function add(){
    document.getElementById("ansArea").value += '+';
}
function substract(){
    document.getElementById("ansArea").value += '-';
}
function multiply(){
    document.getElementById("ansArea").value += '*';
}
function divide(){
    document.getElementById("ansArea").value += '/';
}
function ans(){
    document.getElementById("ansArea").value = eval(document.getElementById("ansArea").value);
}
function reset(){
    document.getElementById("ansArea").value = "";
}
function backSpace(){
    document.getElementById("ansArea").value = document.getElementById("ansArea").value.substring(0, document.getElementById("ansArea").value.length-1);
}
