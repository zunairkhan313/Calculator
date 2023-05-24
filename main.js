// let outputScreen = document.getElementById("result");

// function display(value){
//     outputScreen.value = outputScreen.value + value;
// }
// function Calculate(){
//         outputScreen.value = eval(outputScreen.value);
// }
// function Clear(){
//     outputScreen.value = "";
// }
// function del(){
//     outputScreen.value = outputScreen.value.slice(0,-1);
// }










let inputBox = document.getElementById("result");

function Clear(){
    inputBox.value = "";
}
function del(){
    inputBox.value = inputBox.value.slice(0,-1);
}
function display(value){
    inputBox.value = inputBox.value + value;
}
function Calculate(){
    inputBox.value = eval(inputBox.value);
}





