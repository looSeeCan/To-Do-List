let addToDoButton = document.getElementById("addToDo"); //this is for the button. id = addToDo.
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

//create function here so I do not have to repeat
const appendToDoContainer = function (item) {
    item.classList.add("paragraph-styling");//grabs the style in the css file and adds it to  this paragraph
    toDoContainer.appendChild(item);//we need to append the paragraph to our toDoContainer. puts the paragraph that was created into the div class toDoContainer
    inputField.value = "";//empties the input field after each click 
    item.addEventListener("click", function () {
        item.style.textDecoration = "line-through";//when the paragraph word is clicked, a line will cross thru it. indicating the task is complete  
    })
    item.addEventListener("dblclick", () => {
        toDoContainer.removeChild(item);
    })
};

//<p>
const p = function () {
    if(inputField.value) {
        let paragraph = document.createElement('p'); //everytime we push this butto a new paragraph will be created with document.createElement('p')
        paragraph.classList.add("paragraph-styling");//grabs the style in the css file and adds it to  this paragraph
        paragraph.innerText = inputField.value;// adds the input field value -what ever you type in the input- to the paragraph 
        appendToDoContainer(paragraph);
    }else {
        alert("The field can not be empty ");
    };            
};    

//<ul>
const createList = function () {
    if (inputField.value) {
    let listView = document.createElement('ul');
        let listViewItem=document.createElement('li');
        listViewItem.appendChild(document.createTextNode(inputField.value));
        listView.appendChild(listViewItem);
        appendToDoContainer(listView);
    }else {
        alert("The field is empty");
    };
};


addToDoButton.addEventListener("click", function () { 
        createList();
        // p();
})
//this was originally document.body. but, it was working funny when I I would tab over to the button. I changed it to inputField and now it works better.
inputField.addEventListener('keypress', function (e) { //specifically for the inputfield
    if (e.key === "Enter")  {
        createList();
        // p()
    }else{
    };
})


// function setCaret() {
//     var el = document.getElementById("editable")
//     var range = document.createRange()
//     var sel = window.getSelection()
    
//     range.setStart(el.childNodes[2], 5)
//     range.collapse(true)
    
//     sel.removeAllRanges()
//     sel.addRange(range)
// }
// <div id="editable" contenteditable="true">
//   text text text<br>text text text<br>text text text<br>
// </div>

// <button id="button" onclick="setCaret()">focus</button>


