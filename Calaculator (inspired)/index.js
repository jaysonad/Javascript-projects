//calculator part

const display = document.getElementById("dosplay");

function appendToDisplay(input){
    display.value += (input);

}
function clearDisplay(){
    display.value = ""
}
function calculate(){
    try{
    display.value = eval(display.value);   
}
    catch(error){
        display.value = "Error"
    }

}