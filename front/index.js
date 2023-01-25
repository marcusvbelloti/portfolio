// 
// JavaScript interprets code from top to bottom


let countEl = document.getElementById("count-el")
let count = 0 //inicializa a variável

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function subtraction(){
    count = count - 1
    countEl.innerText = count
    console.log(count)
}
