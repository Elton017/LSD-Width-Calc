
const airQuantity = document.querySelector("#quantity")
const velocity = document.querySelector("#velocity")
const depth = document.querySelector("#depth")
const freeArea = document.querySelector("#freearea")
const result = document.querySelector("#result")

function calculateWidth() {
    const airQuantity = document.querySelector("#quantity").valueAsNumber;
    const velocity = document.querySelector("#velocity").valueAsNumber;
    const depth = document.querySelector("#depth").valueAsNumber;
    const freeArea = document.querySelector("#freearea").valueAsNumber;
  
    const width = (airQuantity / 1000) / (velocity * (depth / 1000)) * 1000 / (freeArea / 100);
  
    return width;
}

document.addEventListener("DOMContentLoaded", () => {
    const width = calculateWidth();
    result.textContent = width.toFixed(2);
})

const inputs = [airQuantity, velocity, depth, freeArea]

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        const width = calculateWidth();
        result.textContent = width.toFixed(2);
    })
})

