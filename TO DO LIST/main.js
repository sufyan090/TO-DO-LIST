let addtextbutton = document.getElementById("addtodo");
let todocontainer = document.getElementById("todocontainer");
let inputfield = document.getElementById("inputfield");

addtextbutton.addEventListener('click', function(){
    var paragraph = document.createElement("h1");
    paragraph.classList.add("para-styling");
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.style.borderBottom = "1px solid orange";
    paragraph.style.padding = "5px";
    paragraph.style.textTransform = "Uppercase";

    if(inputfield.value == ""){
        paragraph.innerText = "";
    }
    else{
        paragraph.innerText = inputfield.value;
    }

    paragraph.addEventListener('click', function(){
        this.style.textDecoration = "line-through";
        this.style.color = "grey";
    });

    paragraph.addEventListener('dblclick', function(){
        this.style.display = "none";
    })
})
