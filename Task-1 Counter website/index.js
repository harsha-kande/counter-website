document.querySelector(".increase").addEventListener("click", increase);
document.querySelector(".decrease").addEventListener("click", decrease);


function increase(){
    var count = Number(document.querySelector("h1").innerHTML);
    count++;
    updateCount(count);
}
function decrease(){
    var count = parseInt(document.querySelector("h1").innerHTML);
    if(count>0){
        count--;
        updateCount(count);
    }
    else{
        alert("Count cannot go less than 0");
    }
}
function updateCount(count){
    document.querySelector("h1").innerHTML = count;
}