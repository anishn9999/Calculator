let current = "0";
let previous = "";
let operator = null;

const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");

function updateDisplay() {
    currentDisplay.innerText = current;
    previousDisplay.innerText =
        previous && operator
            ? `${previous} ${operator}`
            : "";
}

function appendNumber(number) {

    if (number === "." && current.includes(".")) {
        return;
    }

    if (current === "0" && number !== ".") {
        current = number;
    } else {
        current += number;
    }

    updateDisplay();
}

function chooseOperator(op) {

    if (current === "") return;

    if (previous !== "") {
        calculate();
    }

    operator = op;
    previous = current;
    current = "";

    updateDisplay();
}

function calculate() {

    if (previous === "" || current === "" || !operator) {
        return;
    }

    let a = parseFloat(previous);
    let b = parseFloat(current);
    let result;

    switch (operator) {
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            result = b === 0 ? "Error" : a / b;
            break;
    }

    current = result.toString();
    previous = "";
    operator = null;

    updateDisplay();
}

function clearDisplay() {
    current = "0";
    previous = "";
    operator = null;

    updateDisplay();
}

function deleteNumber() {

    if (current.length === 1) {
        current = "0";
    } else {
        current = current.slice(0, -1);
    }

    updateDisplay();
}

function percentage() {

    current = (parseFloat(current) / 100).toString();

    updateDisplay();
}

document.getElementById("themeBtn").addEventListener("click", () => {

    document.body.classList.toggle("light");

});