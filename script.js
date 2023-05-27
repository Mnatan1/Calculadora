function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

function toggleContact() {
  var contactInfo = document.getElementById("contactInfo");
  contactInfo.classList.toggle("active");
}

function appendToDisplay(value) {
  var display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  var display = document.getElementById("display");
  display.value = "";
}

function calculate() {
  var display = document.getElementById("display");

  try {
    var result = eval(display.value);
    display.value = display.value + " = " + result;
  } catch (error) {
    display.value = "Erro";
  }
}
