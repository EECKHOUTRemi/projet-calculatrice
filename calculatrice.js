
//Validation Saisie
function IsLastCharOperator(str) {
    const last = str.slice(-1);
    return ["+", "-", "*", "/"].includes(last);
}

function hasAnyOperator(str) {
    return /[+\-*/]/.test(str);

}

function ValidationSaisie(operator) {
    const current = display.textContent;
    if (current == "0") return;
    if (IsLastCharOperator(current)) return;
    display.textContent += operator;
    if (hasAnyOperator(current)) return;
}

function AffichageChiffres() {
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('button[data-number]');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            let nombre = button.getAttribute('data-number');

            if (display.textContent === '0') {
                display.textContent = nombre;
            } else {
                display.textContent += nombre;
            }
        });
    });
}

function AffichageOperateurs() {
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('button[data-operator]');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            let operator = button.getAttribute('data-operator');

            if (display.textContent === '0') {
                display.textContent = operator;
            } else {
                display.textContent += operator;
            }
        });
    });
}

function InitialiserCalculatrice() {
    AffichageChiffres();
    AffichageOperateurs();
}

document.addEventListener('DOMContentLoaded', InitialiserCalculatrice);

