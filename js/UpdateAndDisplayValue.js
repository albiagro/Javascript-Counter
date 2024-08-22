document.addEventListener("click", function(e) { // Catch all clicks on document

    let pValueCurrent = Number(pValue.textContent) // Current counter value
    let pValueUpdated // Store in one variable the result

    switch (e.target.id) {
        case btnIncrease.id: pValueUpdated = IncreaseValue(pValueCurrent); break; // If user clicked "+"
        case btnDecrease.id: pValueUpdated = DecreaseValue(pValueCurrent); break; // If user clicked "-"
        case btnReset.id: pValueUpdated = 0; break; // If user clicked "Reset"
        default: return; // Do nothing and exit
    }

    pValue.textContent = pValueUpdated // Show the new value
})

function IncreaseValue(currentValue) {
    return currentValue += 1
}

function DecreaseValue(currentValue) {
    return currentValue > 0 ? currentValue -= 1 : currentValue // If value is 0, I will not decrease it
}