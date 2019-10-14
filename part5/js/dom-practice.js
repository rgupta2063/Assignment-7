/*eslint-env browser*/

//STEP 1
function displayMessage(){
    "use strict";
    window.alert("I have been clicked");
}


//STEP 2
var myElement = document.getElementById("myButton");
myElement.onclick = function (){
    window.alert("I have been clicked");
}


//STEP 3
function writeMessage(){
    "use strict";
    window.alert("I have been clicked");
}
myButton.addEventListener("click", writeMessage);


//STEP 4
myButton.addEventListener("click", function(){
    "use strict";
    window.alert("I have been clicked");
});


//STEP 5
function init(){
    "use strict";
    var myButton = window.document.getElementById("myButton");
    myButton.addEventListener("click", function(){
        window.alert("I have been clicked");
    });
}
window.addEventListener("load", init);
