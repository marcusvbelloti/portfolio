// 
// JavaScript interprets code from top to bottom


let countEl = document.getElementById("count-el")
let count = 0 //inicializa a variável
let saveEl = document.getElementById("save-el")

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function delNumber(){
    count = count - 1
    countEl.innerText = count
    console.log(count)
}

function save(){
    let countStr = count + " - "
    saveEl.textContent = countStr
    countEl.textContent = 0
    count = 0
}
