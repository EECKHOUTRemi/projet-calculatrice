let display = document.querySelector('.display');
let number1 = "";
let operator = "";
let number2 = "";

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
    operator = opClicked;
    display.textContent += operator;
    if (hasAnyOperator(current)) return;
}

function AffichageChiffres() {
    let buttons = document.querySelectorAll('button[data-number]');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            let nombre = button.getAttribute('data-number');

            if (display.textContent === '0') {
                display.textContent = nombre;
            } else {
                display.textContent += nombre;
            }

            if (operator === "") {
                number1 += nombre;
            } else {
                number2 += nombre;
            }
        });
    });
}

function AffichageOperateurs() {
    let buttons = document.querySelectorAll('button[data-operator]');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            let operator = button.getAttribute('data-operator');

            ValidationSaisie(operator);
        });
    });
}

function ClearButton() {
    let clearButton = document.querySelector('.clear');

    clearButton.addEventListener('click', function () {
        display.textContent = '0';
    });
}

function Calculer() {
    let equalsButton = document.querySelector('.equals');

    equalsButton.addEventListener('click', function () {
        if (number1 === "" || operator === "" || number2 === "") {
            return
        } else {
            const calcul = number1 + operator + number2;
            const resultat = eval(calcul);
            display.textContent = resultat;
            number1 = resultat.toString();
            operator = "";
            number2 = "";
        }
    });
}

function InitialiserCalculatrice() {
    AffichageChiffres();
    AffichageOperateurs();
    ClearButton();
    Calculer();
}

document.addEventListener('DOMContentLoaded', InitialiserCalculatrice);