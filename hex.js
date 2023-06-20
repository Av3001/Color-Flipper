
const btn=document.getElementById("hexbtn");
const span=document.querySelector(".color");
// alert(color);
function colorChange(){
    var color=document.getElementById("input").value;
    document.body.style.backgroundColor=color
    span.textContent=color
};