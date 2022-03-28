//Set Blue
function setBlue() {
    document.body.style.backgroundColor = "Blue";
  }

//Set Black
const setBlackColor = document.getElementById("setBlack");
setBlackColor.onclick = setBlack;
//***Don't use {setBlack()}
// setBlackColor.onclick = setBlack();

function setBlack() {
    document.body.style.backgroundColor = "Black";
    const header = document.getElementsByTagName("h1")[0];
    header.style.color = "White";
}
  
//Set SeaGreen
const setGreenColor = document.getElementById("setGreen");
//Anonymous Function
setGreenColor.onclick = function () {
    document.body.style.backgroundColor = "Seagreen";
};