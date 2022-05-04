const titel2 = document.querySelector(".titel2");
const dropdown1 = document.querySelector(".dropdown1");
const dropdown2 = document.querySelector(".dropdown2");
const dropdown3 = document.querySelector(".dropdown3");
const dropdown4 = document.querySelector(".dropdown4");

function start1() {
  dropdown1.classList.toggle("dropdown11");

  dropdown2.classList.remove("dropdown12");
  dropdown3.classList.remove("dropdown13");
  dropdown4.classList.remove("dropdown14");
}

function start2() {
  dropdown2.classList.toggle("dropdown12");

  dropdown1.classList.remove("dropdown11");
  dropdown3.classList.remove("dropdown13");
  dropdown4.classList.remove("dropdown14");
}
function start3() {
  dropdown3.classList.toggle("dropdown13");

  dropdown1.classList.remove("dropdown11");
  dropdown2.classList.remove("dropdown12");
  dropdown4.classList.remove("dropdown14");
}

function start4() {
  dropdown4.classList.toggle("dropdown14");
  
  dropdown1.classList.remove("dropdown11");
  dropdown2.classList.remove("dropdown12");
  dropdown3.classList.remove("dropdown13");
}

function openBar() {
  titel2.classList.toggle("titelActive");
}

function temizle() {
  dropdown1.classList.remove("dropdown11");
  dropdown2.classList.remove("dropdown12");
  dropdown3.classList.remove("dropdown13");
  dropdown4.classList.remove("dropdown14");
}
