const decreasebutton = document.getElementById("decrease");
const resetbutton = document.getElementById("reset");
const increasebutton= document.getElementById("increase");
const countlabel= document.getElementById("countlabel");
let count = 0;

increasebutton.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreasebutton.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetbutton.onclick = function(){
    count = 0;
    countlabel.textContent= count;
}