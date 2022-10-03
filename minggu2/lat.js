let link = document.getElementsByClassName("link")[0]
console.log(link.attributes)
console.log(link.getAttribute("href"));

link.style.color = "red"
link.style.backgroundColor = "green"
link.style.border = "1px solid red"

let isi = document.getElementById("isi")
let isiStyle = getComputedStyle(isi)
console.log(isiStyle.height)

const myArray = ['item 0','item 1', 'item 2']
myArray.push('item 3');
myArray.pop()
console.log(myArray.length);
let list = document.getElementsByClassName("list")
console.log(list[0].children)

let itemQuery = document.querySelector(".item")
console.log(itemQuery.parentElement)
console.log(itemQuery.closest(".list"))

console.log(itemQuery.previousElementSibling)
console.log(itemQuery.nextElementSibling)

let paragraf = document.getElementById("paragraf")
paragraf.onclick = tampilkanAlert
function tampilkanAlert(){
    alert("hai hai hai")
}

let button = document.getElementById("btn")
button.addEventListener("click", function(){
    alert("contoh dari addEventListener")
})
button.addEventListener("click", function(event){
    console.log(event.target);
})

