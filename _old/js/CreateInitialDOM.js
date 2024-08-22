// Creation of DOM
let btnDecrease = document.createElement("button");
btnDecrease.id = "btnDecrease"
btnDecrease.innerHTML = "-"
document.body.appendChild(btnDecrease)

let pValue = document.createElement("p");
pValue.id = "pValue"
pValue.innerHTML = "0"
document.body.appendChild(pValue)

let btnIncrease = document.createElement("button");
btnIncrease.id = "btnIncrease"
btnIncrease.innerHTML = "+"
document.body.appendChild(btnIncrease)