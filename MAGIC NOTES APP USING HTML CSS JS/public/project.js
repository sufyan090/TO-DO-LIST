console.log("WELCOME TO NOTES APP PROJECT");
showNotes();

// // localStorage.clear();
let addbtn = document.getElementById("addBtn");
addbtn.addEventListener("click", function () {
    let notetext = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes)
    }

    notesArr.push(notetext.value);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    notetext.value = "";
    // console.log(notesArr , typeof(this));
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes)
    }

    let html = "";
    notesArr.forEach(function (element, index) {
        html += ` <div class="card my-2 mx-2" style="width: 15rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)" type="button">Delete Note</button>
            </div>
        </div> `
    });

    let mainNote = document.getElementById("notes");
    if (notesArr.length != 0) {
        mainNote.innerHTML = html;
    }
    else {
        mainNote.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}


function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }
    notesArr.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    showNotes();
}




let searchtxt = document.getElementById("searchbar");
searchtxt.addEventListener("input", function () {
    let inputVal = searchtxt.value;
    console.log("input event fired", inputVal);

    let noteCard = document.getElementsByClassName("card");
    Array.from(noteCard).forEach(function(element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputVal)){
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
        console.log(cardtxt);
    })
})





