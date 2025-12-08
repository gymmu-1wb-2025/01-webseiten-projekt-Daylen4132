let counter = 0;

function createNewElement() {
  let newElement = document.createElement("p");

  counter = counter + 1;

  newElement.Context = "Element " + counter;

  let mainElement = document.querySelector("main");
  mainElement.appendChild(newElement);
}
