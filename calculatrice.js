function AffichageChiffres(){
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('button[data-number]');
    
    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            let nombre = button.getAttribute('data-number');
            
            if (display.textContent === '0') {
                display.textContent = nombre;
            } else {
                display.textContent += nombre;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', AffichageChiffres);