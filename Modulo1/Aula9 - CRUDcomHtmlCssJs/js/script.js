window.addEventListener('load', start);

// Global Var's
var globalNames = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco'];
var names = document.querySelector('#nomes');
var ul = document.createElement('ul');
var inputName = document.querySelector('#inputName');
var form = document.querySelector('form');
var isEditing = false;
var currentIndex;

function start() {
  preventFormSubmit(form);
  startInput(inputName);
  render();
}

function preventFormSubmit(object) {
  object.addEventListener('submit', function (event) {
    event.preventDefault();
  });
}

function startInput(object) {
  function insertName(newName) {
    globalNames.push(newName);
  }

  function updateName(newName) {
    globalNames[currentIndex] = newName;
    clearInput();
  }

  function handleTyping(event) {
    var hasText = !!event.target.value && event.target.value.trim() !== '';
    if (!hasText) {
      clearInput();
      return;
    }
    if (event.key === 'Enter') {
      if (isEditing) {
        updateName(event.target.value);
      } else {
        insertName(event.target.value);
      }
      isEditing = false;
      render();
    }
  }
  object.addEventListener('keyup', handleTyping);
  object.focus();
}

function render() {
  function createDeleteButton(index) {
    function deleteName() {
      globalNames.splice(index, 1);
      render();
    }
    var button = document.createElement('button');
    button.textContent = 'x';
    button.classList.add('deleteButton');
    button.addEventListener('click', deleteName);
    return button;
  }

  function createSpan(name, index) {
    function editItem() {
      inputName.value = name;
      isEditing = true;
      currentIndex = index;
    }
    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = currentName;
    span.addEventListener('click', editItem);
    return span;
  }
  var divNames = document.querySelector('#names');
  ul.innerHTML = '';
  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    var li = document.createElement('li');
    var butt = createDeleteButton(i);
    var span = createSpan(currentName, i);
    li.appendChild(butt);
    li.appendChild(span);
    ul.appendChild(li);
  }
  divNames.appendChild(ul);
  clearInput();
}

function clearInput() {
  inputName.value = '';
  inputName.focus();
}
