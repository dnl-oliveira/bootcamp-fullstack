window.addEventListener('load', start);

var inputRed = null;
var inputGreen = null;
var inputBlue = null;
var valueRed = null;
var valueGreen = null;
var valueBlue = null;

function start() {
  inputRed = document.querySelector('#inputRed');
  inputRed.addEventListener('input', inputColor);
  valueRed = document.querySelector('#valueRed');

  inputGreen = document.querySelector('#inputGreen');
  inputGreen.addEventListener('input', inputColor);
  valueGreen = document.querySelector('#valueGreen');

  inputBlue = document.querySelector('#inputBlue');
  inputBlue.addEventListener('input', inputColor);
  valueBlue = document.querySelector('#valueBlue');
  resetInputs();
}
function resetInputs() {
  valueRed.value = 0;
  valueGreen.value = 0;
  valueBlue.value = 0;
  inputGreen.value = 0;
  inputBlue.value = 0;
  inputRed.value = 0;
}

function inputColor(event) {
  var idInputEvent = event.target.id;

  switch (idInputEvent) {
    case 'inputRed': {
      valueRed.classList.add('inputActive');
      valueRed.value = event.target.value;
      break;
    }
    case 'inputGreen': {
      valueGreen.classList.add('inputActive');
      valueGreen.value = event.target.value;
      break;
    }
    case 'inputBlue': {
      valueBlue.classList.add('inputActive');
      valueBlue.value = event.target.value;
      break;
    }
    default: {
      console.log('Deu ruim');
    }
  }
  setColors();
}

function setColors(R, G, B) {
  var R = valueRed.value;
  var G = valueGreen.value;
  var B = valueBlue.value;

  var square = document.querySelector('.square');
  square.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}
