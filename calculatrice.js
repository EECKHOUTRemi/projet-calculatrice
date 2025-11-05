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
