const buttons = document.getElementsByTagName("button");
const outPut = document.querySelector("#input");
const clear = document.querySelector("#btn__clear");
let equal = [];
let operator = false;






    outPut.length <10;
    for (var i = 0; i < buttons.length; i += 1) {
        if (buttons[i].innerHTML === "=") {
        buttons[i].addEventListener("click", calculate(i));
        } else if (buttons[i].innerHTML === "AC") {
        equal = [];
        } else {
        buttons[i].addEventListener("click", add(i));
        }
    }


    clear.addEventListener("click" ,function(){
        outPut.innerHTML = "0";l = [];
        operator = false;
    })


    function add(i) {
        return function () {
        if (buttons[i].innerHTML === "/") {
            clicked(this);
            opera("/");
        } else if (buttons[i].innerHTML === "×") {
            clicked(this);
            opera("*");
        } else if (buttons[i].innerHTML === "+") {
            clicked(this);
            opera("+");
        } else if (buttons[i].innerHTML === "-") {
            clicked(this);
            opera("-");
        } else {
            removeClicked();
            if (checkNumber(equal[equal.length - 1])) {
            equal = [];
            equal.push(buttons[i].innerHTML);
            operl = true;
            } else {
            equal.push(buttons[i].innerHTML);
            }
            if (outPut.innerHTML === "0") {
            outPut.innerHTML = buttons[i].innerHTML;
            } else if (operator) {
            outPut.innerHTML = buttons[i].innerHTML;
            } else {
            outPut.innerHTML += buttons[i].innerHTML;
            }
            if (outPut.innerHTML === "0") {
            outPut.innerHTML = buttons[i].innerHTML;
            }
            operator = false;
        }
        };
    }
    
    function removeClicked(i) {
        var elems = document.querySelectorAll(".clicked");
        [].forEach.call(elems, function (el) {
        el.classList.remove("clicked");
        });
    }


    function clicked(i) {
        removeClicked(i);
        i.classList.add("clicked");
    }


    function calculate(i) {
        return function () {
            if (equal.length == 0) {
                    return;
                } else {
                    var answer = eval(equal.join(""));
                    if (answer % 1 === 0) {
                    outPut.innerHTML = answer;
                    }
                     else {
                    outPut.innerHTML = answer;
                    }
                    equal = [];
                    equal.push(answer);
                    operator = false;
            }
        };
    }
    function opera(str) {
        if (!operator) {
        equal.push(str);
        operator = true;
        } else {
        equal.pop();
        equal.push(str);
        }
    }
    function checkNumber(v) {
        if (typeof v == "string") {
        return false;
        } else if (typeof v == "number") {
        return true;
        }
    }
    

