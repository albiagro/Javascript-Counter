document.addEventListener("click", function(e) { // Catch all clicks on document

    let pValueCurrent = Number(pValue.textContent) // Current counter value
    let pValueUpdated // Store in one variable the result

    if (e.target.id === btnIncrease.id){ // If user clicked "+"
        pValueUpdated = IncreaseValue(pValueCurrent)
    }
    else if (e.target.id === btnDecrease.id) { // If user clicked "-"
        pValueUpdated = DecreaseValue(pValueCurrent)
    }
    else {
        // Do nothing and exit
        return;
    }

    pValue.textContent = pValueUpdated // Show the new value

})

function IncreaseValue(currentValue) {
    return currentValue += 1
}

function DecreaseValue(currentValue) {
    return currentValue > 0 ? currentValue -= 1 : currentValue // If value is 0, I will not decrease it
}