let healthLevel = document.querySelector('.level__input');
let levelAlert = document.querySelector('.level__alert');

let healthStamina = document.querySelector('.stamina__input');
let staminaAlert = document.querySelector('.stamina__alert');

let healthButton = document.querySelector('.health__button');
let healthResult = document.querySelector('.health__result');



healthButton.onclick = function(evt) {
    evt.preventDefault();  

    if (healthStamina.value < 0 || healthLevel.value < 0 || healthStamina.value == '' || healthLevel.value == '') {
        healthResult.classList.remove('health__text--success');
        healthResult.classList.add('health__text--warning');
        healthResult.textContent = " Укажите положительное число больше 10";

    } else {
        healthResult.textContent = ((parseInt(healthStamina.value,10) * parseInt(4,10)) * (parseInt(healthLevel.value,10) + parseInt(1,10)));  
       
        healthResult.classList.add('health__text--success');
    }   
};

healthLevel.oninput = function() {
    if (healthLevel.value <= 0 || healthLevel.value == '') {
        healthResult.classList.remove('health__text--success');
        healthResult.classList.add('health__text--warning');
        levelAlert.classList.remove('alert-hidden');
        healthResult.textContent = " Укажите верные данные";


    } else if (healthLevel.value > 0) {
        levelAlert.classList.add('alert-hidden');    
        healthResult.textContent = ((parseInt(healthStamina.value,10) * parseInt(4,10)) * (parseInt(healthLevel.value,10) + parseInt(1,10)));         
        healthResult.classList.add('health__text--success');
    } 
     
};

healthStamina.oninput = function() {
    if (healthStamina.value < 10 || healthStamina.value == '') {
        healthResult.classList.remove('health__text--success');
        healthResult.classList.add('health__text--warning');
        staminaAlert.classList.remove('alert-hidden');
        healthResult.textContent = " Укажите верные данные";
    } else if (healthStamina.value > 9) {
        staminaAlert.classList.add('alert-hidden');    
        healthResult.textContent = ((parseInt(healthStamina.value,10) * parseInt(4,10)) * (parseInt(healthLevel.value,10) + parseInt(1,10)));       
        healthResult.classList.add('health__text--success');
    }      
};