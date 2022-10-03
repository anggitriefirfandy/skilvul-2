let btnDecrement = document.getElementById("decrement");
let btnIncrement = document.getElementById("increment");
let counter = document.getElementById("counter");

let angka = 0

btnIncrement.addEventListener("click", function(){
    angka = angka + 1;
    counter.innerText = angka
})

btnDecrement.addEventListener("click", function(){
    angka = angka - 1;
    counter.innerText = angka
});

String.prototype.reverse = function(){
    let s = ""
    for(let i = String(this).length-1; i >= 0; i--) {
        s = s + String(this)[i]
    }
    return s
}
console.log("Anggit".reverse())