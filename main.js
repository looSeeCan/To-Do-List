let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

//create function
const event1 = function () {
    let paragraph = document.createElement('p'); //everytime we push this butto a new paragraph will be created with document.createElement('p')
    paragraph.classList.add("paragraph-styling");//grabs the style in the css file and adds it to  this paragraph
    paragraph.innerText = inputField.value;// adds the input field value -what ever you type in the input- to the paragraph 
    toDoContainer.appendChild(paragraph);//we need to append the paragraph to our toDoContainer. puts the paragraph that was created into the div class toDoContainer
    inputField.value = "";//empties the input field after each click 
    paragraph.addEventListener("click", function () {
        paragraph.style.textDecoration = "line-through";//when the paragraph word is clicked, a line will cross thru it. indicating the task is complete
    
    })
    paragraph.addEventListener("dblclick", () => {
        toDoContainer.removeChild(paragraph);
    })
};

addToDoButton.addEventListener("click", function () {
    event1();
})
    // // let btn = document.querySelector('button');
    // let result = document.querySelector('h1');
    
    document.body.addEventListener("keypress", (e) => {
        if(e.key === "Enter") {
            if(inputField.value) {
            event1();
            }else{
                
            };
            // result.innerText = "Enter Key Pressed"
            
            // if (inputField.value) {//if there is something in the input then
            // let paragraph = document.createElement('p');
            // paragraph.innerText = inputField.value;
            // toDoContainer.appendChild(paragraph);
            // inputField.value = "";
            // }else{//if there is nothing there then do nothing or alert
                
            // }
        }
    })