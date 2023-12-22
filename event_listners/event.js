// event listener

// elemenent.addeventListner('click',function);

const buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("i also love  javascript");
}

buttonTwo.addEventListener("click", alertBtn);

// mouseover
const newBackgroundColor = document.querySelector(".box-3");

function changeColor() {
  newBackgroundColor.style.backgroundColor = "green";
}

newBackgroundColor.addEventListener("mouseover", changeColor);

// REVEAL EVENT

const revealBtn = document.querySelector("reveal-btn");
const hiddenCont = document.querySelector(".hidden-content");

function revealContent() {
  if (hiddenCont.classList.contains("reveal-btn")) {
    hiddenCont.classList.remove("reveal-btn");
  } else {
    hiddenCont.classList.add("reveal-btn");
  }
}

revealBtn.addEventListener("click", revealContent);

// EVENT PROBAGATION
