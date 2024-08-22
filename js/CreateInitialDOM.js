// Creation of DOM
let container = document.getElementById("container")
let cardbody = document.getElementById("card-body")

let btnDecrease = document.createElement("button");
btnDecrease.id = "btnDecrease"
btnDecrease.className = "btn btn-primary"
btnDecrease.type = "button"
btnDecrease.innerHTML = "-"
container.appendChild(btnDecrease)

let pValue = document.createElement("p");
pValue.id = "pValue"
pValue.innerHTML = "0"
container.appendChild(pValue)

let btnIncrease = document.createElement("button");
btnIncrease.id = "btnIncrease"
btnIncrease.className = "btn btn-primary"
btnIncrease.type = "button"
btnIncrease.innerHTML = "+"
container.appendChild(btnIncrease)

let btnReset = document.createElement("button");
btnReset.id = "btnReset"
btnReset.className = "btn btn-primary"
btnReset.type = "button"
btnReset.innerHTML = "Reset"
cardbody.appendChild(btnReset)