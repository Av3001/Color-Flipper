const colors=["green","red","rgba(133,122,200)","#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
    // console.log(document.body);
    const randomnumber=Math.floor(getRandomNumber());
    document.body.style.backgroundColor=colors[randomnumber];
    color.textContent=colors[randomnumber];
});
function getRandomNumber(){
    return Math.random()*colors.length;
}