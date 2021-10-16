//document.getElementById("count-el").innerText = 7;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment(){

    count++;
    countEl.textContent = count;
    console.log(countEl);

}
//let count = 0;
    
//document.addEventListener("click", function incr(){
//    count++;
//    document.getElementById("count-el").innerText = count;
//    console.log(count);
//})
// the above way will give an output to clicks on anywhere on the page; using onclick="function()" in html will allow it to 
//be specific to that particular element
 
function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}