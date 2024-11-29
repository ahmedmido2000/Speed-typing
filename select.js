let doneBTN=document.querySelector(".done")
let easy=document.getElementById("easy")
let normal=document.getElementById("normal")
let hard=document.getElementById("hard")
doneBTN.addEventListener("click",done)
function done(){
    localStorage.removeItem("level")
    if(easy.checked){
        localStorage.setItem("level","Easy")
        start()
    }
    else if(normal.checked){
        localStorage.setItem("level","Normal")
        start()
    }
    else if(hard.checked){       
        localStorage.setItem("level","Hard")
        start()
    }
    else{
        alert("please choose your level")
    }

}
function start(){
    doneBTN.style.cursor="progress"
    setInterval(() => {
        window.location="index.html"
    }, 3000);
}