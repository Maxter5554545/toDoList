let asmr = document.getElementsByTagName("LI")
for (let i = 0; i < asmr.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt)
    asmr[i].appendChild(span)
}
//click on the close item to hide the list 
let close = document.getElementsByClassName("close")
for(let i = 0; i < close.length; i++){
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

//Add check item when clicked any item on the list
let listt = document.querySelector("ul");
listt.addEventListener("click", function(ev){
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false)

function newlist(){
    let li = document.createElement("li");
    let noy = document.getElementById("newId").value;
    let txtt = document.createTextNode(noy)
    li.appendChild(txtt);
    if (noy === ''){
        alert("Please enter any thing!! ")
    }
    else{
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("newId").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close"; 
    span.appendChild(txt);
    li.appendChild(span);

    let close = document.getElementsByClassName("close")
    for(let i = 0; i < close.length; i++){
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}