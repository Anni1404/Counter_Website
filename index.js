const decresebtn=document.getElementById("decrese");
const resetbtn=document.getElementById("reset");
const incresebtn=document.getElementById("increse");
let count=0;

incresebtn.onclick=function() {
    count++;
    countLabel.textContent=count;
}
decresebtn.onclick=function() {
    count--;
    countLabel.textContent=count;
}
resetbtn.onclick=function() {
    count=0;
    countLabel.textContent=count;
}