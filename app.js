let codes =document.getElementById("codes");
let remove =document.getElementById("remove");
let play =document.getElementById("play");
let result =document.getElementById("result");

play.onclick = ()=>{
result.innerHTML = codes.value;
localStorage.setItem("RESULT",codes.value);
};

remove.onclick = ()=>{
    result.innerHTML = "";
    
    };

onload = ()=>{
    codes.value = localStorage.getItem("RESULT");
}













