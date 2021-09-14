var userInput = document.getElementById("input");
var todoList = document.getElementById("todos");






function keypressEnter(event){
    if(inputValidation() > 0 && event.which === 13){
        createTodoList();
    }
}
userInput.addEventListener("keypress" , keypressEnter);


function inputValidation(){
    return userInput.value.length;
}


//create todoList
function createTodoList(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    todoList.appendChild(li);
    userInput.value="";

    function lineThroughLi(){
        li.classList.toggle("lineThrough")
    }
    li.addEventListener("click" , lineThroughLi);

    function clearLi(){
        li.classList.toggle("clear")
    }
    li.addEventListener("contextmenu" , clearLi)
}


