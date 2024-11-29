let hardList=["Ibrahim",
"Sherqawy","Mahmoud","Khaled","Abdallah",
"Sharki","Bahgora","Ramadan"]
let easyList=["Ali","Zezo","Sasa","Essam","Easa","Ahmed"]
let normalList=["Saber","Hamdi","Mohsen","Nabil","Zakeer","Mohamed"]
let content=document.querySelector(".contenent")
let start=document.querySelector("button")
let seconds=document.querySelector(".counter")
let score=document.querySelector(".score")
let total=document.querySelector(".total")
let lvl=document.querySelector(".level")
let sec=document.querySelector(".sec")
let word=document.querySelector(".word")
let inp=document.getElementById("inp")
let finish=document.querySelector(".finish")
let div;
let wordCont;
let x=0;
let date;
let yourScore;
let level={
    "Easy":6,
    "Normal":4,
    "Hard":2
}
let lev=localStorage.getItem("level")
window.onload=ckeck
function ckeck(){
    if(lev){
        if(lev==="Easy"){
            seconds.innerHTML=level["Easy"]
            lvl.innerHTML="Easy"
            sec.innerHTML=level["Easy"]
            score.innerHTML=x
            total.innerHTML=easyList.length
            goEasy()
        }
        else if(lev==="Normal"){
            seconds.innerHTML=level["Normal"]
            lvl.innerHTML="Normal"
            sec.innerHTML=level["Normal"]
            score.innerHTML=x
            total.innerHTML=normalList.length
            goNormal()
        }
        else if(lev==="Hard"){
            seconds.innerHTML=level["Hard"]
            lvl.innerHTML="Hard"
            sec.innerHTML=level["Hard"] 
            score.innerHTML=x
            total.innerHTML=hardList.length
            goHard()
        }
    }
}
inp.onpaste = function () {
    return false;
  }
  function goEasy(){
    content.innerHTML=""
    for(let i=0;i<easyList.length;i++){
        div=document.createElement("div")
        divCont=document.createTextNode(easyList[i])
        div.appendChild(divCont)
        content.appendChild(div)
    }
  }
  function goNormal(){
    content.innerHTML=""
    for(let i=0;i<normalList.length;i++){
        div=document.createElement("div")
        divCont=document.createTextNode(normalList[i])
        div.appendChild(divCont)
        content.appendChild(div)
    }
  }
  function goHard(){
    content.innerHTML=""
    for(let i=0;i<hardList.length;i++){
        div=document.createElement("div")
        divCont=document.createTextNode(hardList[i])
        div.appendChild(divCont)
        content.appendChild(div)
    }
  }
function norEasy(){
    wordCont=word.innerHTML=easyList[Math.floor(Math.random()*easyList.length)]
    wordInd=easyList.indexOf(wordCont)
    easyList.splice(wordInd,1)
    goEasy()
    lvl.innerHTML=lev
    sec.innerHTML=level[lev]
}
function norNormal(){
    wordCont=word.innerHTML=normalList[Math.floor(Math.random()*normalList.length)]
    wordInd=normalList.indexOf(wordCont)
    normalList.splice(wordInd,1)
    goNormal()
    lvl.innerHTML=lev
    sec.innerHTML=level[lev]
}
function norHard(){
    wordCont=word.innerHTML=hardList[Math.floor(Math.random()*hardList.length)]
    wordInd=hardList.indexOf(wordCont)
    hardList.splice(wordInd,1)
    goHard()
    lvl.innerHTML=lev
    sec.innerHTML=level[lev]
}
start.onclick=getStart
function getStart(){
    start.style.display="none"
    inp.focus()
    seconds.innerHTML=level[lev]
    score.innerHTML=x
    if(lev==="Easy"){
        showEasy()
    }
    else if(lev==="Normal"){
        showNormal()
    }
    else if(lev==="Hard"){
        showHard()
    }
}
function reset(){
    start.style.display="block"
    word.innerHTML=""
    inp.value=""
}
function showEasy(){
    norEasy()
    finish.innerHTML=""
    let interval=setInterval(() => {
        seconds.innerHTML--
        if(seconds.innerHTML==="0"){  
            clearInterval(interval)
            if(inp.value.toLowerCase()===word.innerHTML.toLowerCase()){
                x++
                finish.classList.add("good")
                cong=document.createTextNode("congratsssssss")
                finish.appendChild(cong)
                reset()
                if(content.innerHTML===""){
                    alert("congratiolations you win this level ")
                    window.location="select.html"
                    localStorage.setItem(date,yourScore)
                }
            }
            else{
                finish.classList.add("bad")
                cong=document.createTextNode("failed")
                finish.appendChild(cong)
                reset()
                x=0
                goEasy()
                date=new Date()
                yourScore=`you get ${score.innerHTML} from ${total.innerHTML} at ${lev} level`
                console.log(yourScore);
                console.log(date);
                localStorage.setItem(date,yourScore)
            }
        }
    }, 1000);
}
function showNormal(){
    norNormal()
    finish.innerHTML=""
    let interval=setInterval(() => {
        seconds.innerHTML--
        if(seconds.innerHTML==="0"){  
            clearInterval(interval)
            if(inp.value.toLowerCase()===word.innerHTML.toLowerCase()){
                x++
                finish.classList.add("good")
                cong=document.createTextNode("congratsssssss")
                finish.appendChild(cong)
                reset()
                if(content.innerHTML===""){
                    alert("congratiolations you win this level ")
                    window.location="select.html"
                    localStorage.setItem(date,yourScore)
                }
            }
            else{
                finish.classList.add("bad")
                cong=document.createTextNode("failed")
                finish.appendChild(cong)
                reset()
                x=0
                goNormal()
                date=new Date()
                yourScore=`you get ${score.innerHTML} from ${total.innerHTML} at ${lev} level`
                console.log(yourScore);
                console.log(date);
                localStorage.setItem(date,yourScore)
            }
        }
    }, 1000);
}
function showHard(){
    norHard()
    finish.innerHTML=""
    let interval=setInterval(() => {
        seconds.innerHTML--
        if(seconds.innerHTML==="0"){  
            clearInterval(interval)
            if(inp.value.toLowerCase()===word.innerHTML.toLowerCase()){
                x++
                finish.classList.add("good")
                cong=document.createTextNode("congratsssssss")
                finish.appendChild(cong)
                reset()
                if(content.innerHTML===""){
                    alert("congratiolations you win this level ")
                    window.location="select.html"
                    localStorage.setItem(date,yourScore)
                }
            }
            else{
                finish.classList.add("bad")
                cong=document.createTextNode("failed")
                finish.appendChild(cong)
                reset()
                x=0
                goHard()
                date=new Date()
                yourScore=`you get ${score.innerHTML} from ${total.innerHTML} at ${lev} level`
                console.log(yourScore);
                console.log(date);
                localStorage.setItem(date,yourScore)
            }
        }
    }, 1000);
}
let backBTN=document.querySelector(".back")
backBTN.onclick=function(){
    backBTN.style.cursor="progress"
    setInterval(() => {
        window.location="select.html"
    }, 3000);
}
//*******************************************************
