console.log("this is notes app");


showNotes();                    //to show the Notes 

//if user add note it add to the Local storage

let addBtn = document.getElementById("addBtn");         //adding event listener when botton is click
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let titleTxt = document.getElementById("titleTxt");
    let checkTxt = document.getElementById('check');    
    let date1 = new Date();

    if (addTxt.value == "" || titleTxt.value == "") {
        let alrt = document.getElementById("alrt");
        alrt.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> Please Enter Some thing in text field
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        setTimeout(() => {
            alrt.innerHTML = "";
        }, 2000);
    }
    else {
        let notes = localStorage.getItem("notes");                           //geting the items from local storage
        // let title = localStorage.getItem("title");
        // let check = localStorage.getItem("check");
      
        let dates = localStorage.getItem("dates");
        if (notes == null /*&& title == null && check == null*/) {
            notesObj = [];
            // titleObj = [];   //if there is nothing in local storage key notes title and check then make a notesObj titleObj and checkObj
            // checkObj = [];
            // dateObj =[];
        }
        else {
            notesObj = JSON.parse(notes);
            // titleObj = JSON.parse(title);           //if there is something in local storage key in title notes and check then
            // checkObj = JSON.parse(check);
            // dateObj = JSON.parse(dates);           //the value to the notesObj titleObj and checkObj(checkObj have the information the 
                                                  //cheox is clicked or not)
        }
        console.log(notesObj);

        let myObj = {
            Stitle : titleTxt.value,
            Stext : addTxt.value,
            Scheck : checkTxt.checked,
            Sdate : date1.toDateString(),
            
        }

      
        notesObj.push(myObj);
        // titleObj.push(titleTxt.value);          //adding the value of text fielt tittle field and check box click or not to Objs
        // checkObj.push(checkTxt.checked);
        // dateObj.push(date1.toDateString());
        // console.log(dateObj, typeof dateObj)
        localStorage.setItem("notes", JSON.stringify(notesObj))
        // localStorage.setItem("title", JSON.stringify(titleObj))     //setting the value to the local storage respective there key
        // localStorage.setItem("check", JSON.stringify(checkObj))
        // localStorage.setItem("dates", JSON.stringify(dateObj))
        addTxt.value = "";
        titleTxt.value = "";
        checkTxt.checked = false;
        
        
        showNotes();
    }
})

//function to show elements from local storage

function showNotes() {          //this show those thing which are in local storage
 
    let notes = localStorage.getItem("notes");                           //geting the items from local storage
    // let title = localStorage.getItem("title");
    // let check = localStorage.getItem("check");
  
    let dates = localStorage.getItem("dates");
    if (notes == null /*&& title == null && check == null*/) {
        notesObj = [];
        // titleObj = [];   //if there is nothing in local storage key notes title and check then make a notesObj titleObj and checkObj
        // checkObj = [];
        // dateObj =[];
    }
    else {
        notesObj = JSON.parse(notes);
        // titleObj = JSON.parse(title);           //if there is something in local storage key in title notes and check then
        // checkObj = JSON.parse(check);
        // dateObj = JSON.parse(dates);           //the value to the notesObj titleObj and checkObj(checkObj have the information the 
                                              //cheox is clicked or not)
    }


    
    let html = "";                          
    notesObj.forEach((element, index) => {              //iterate the notesObj let us take if noteObj contain ["h", "dslfsdj", dsjdsjl]
        if(element.Scheck == true){                    //check if CheckObj[0] .... so on have true value
                                                        //if true then then add this type of code 
        html += ` <div class="card my-2 mx-2 noteCard" id="noOne${index}" style="width: 18rem;">
        <div class="card-body">                             
        <h6 style="color:red">Important</h6>
        <h5 class="card-title style="display:inline-block"">${element.Stitle}</h5>
        <p class="card-text cardP" id="txtNote">${element.Stext}</p>
        <button class="btn btn-primary" id="${index}" onclick="deleteIt(this.id)">Delete Note</button><span style="float:right; margin-right:5px;font-size:13px">${element.Sdate}</span>
        
        </div>
        </div>`
    }
    else{               //else this type of code
        html += ` <div class="card my-2 mx-2 noteCard" id="noOne${index}" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title" style="display:inline-block">${element.Stitle}</h5>
        <p class="card-text cardP" id="txtNote">${element.Stext}</p>
        <button class="btn btn-primary" id="${index}" onclick="deleteIt(this.id)">Delete Note</button><span style="float:right; margin-right:5px;font-size:13px">${element.Sdate}</span>
        
        </div>
        </div>`   
    }
    });
   
    // console.log(checkObj)
    let showNote = document.getElementById("showNote");             
    if (notesObj.length != 0) {         
        showNote.innerHTML = html;
    }
    else {
        showNote.innerHTML = `Nothing to show use "Add to Note Section to add a Note! :)`    //if notesObj donts have any thing then don't show any card and show this  text
    }   
}

//function to delete element

function deleteIt(index) {              //for deleting in local storage whic effect showing in card deleteIt(this.id) it give the index of this element
    // console.log(index)
    let notes = localStorage.getItem("notes");
    // let title = localStorage.getItem("title");
//    let check = localStorage.getItem("check");
//    let date1 = new Date();
//    let dates = localStorage.getItem("dates");
   if (notes == null /*&& title == null && check == null*/) {
       notesObj = [];
    //    titleObj = [];      
    //    checkObj = []; 
    //    dateObj =[];        
   }
   else {
       notesObj = JSON.parse(notes);
    //    titleObj = JSON.parse(title);           
    //    checkObj = JSON.parse(check); 
    //    dateObj = JSON.parse(dates); 
   }
   notesObj.splice(index, 1);
    // titleObj.splice(index, 1)           //splice out that particular thing
    // checkObj.splice(index, 1);
    // dateObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    // localStorage.setItem("title", JSON.stringify(titleObj))
    // localStorage.setItem("check", JSON.stringify(titleObj))
    // localStorage.setItem("dates", JSON.stringify(dateObj))
    showNotes()

}

function clr() {

    localStorage.clear();
    showNotes()             //clear the loacl storage
}


//searching the things
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {          //adding input event listener which fire when anything is inputted
    let inpVal = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName("noteCard");         //grabing noteCard class
    // console.log(noteCard)
    Array.from(noteCard).forEach((element) => {         //iterating through the classes having name noteCard
        // console.log(element)
        let cardTxt = element.getElementsByTagName('p')[0].innerText.toLowerCase(); //grabing the inner text of noteCard having p 
        if (cardTxt.includes(inpVal)) {                                             //element first
            element.style.display = "block"
        }
        else {
            element.style.display = "none"
        }
    })
  
})
