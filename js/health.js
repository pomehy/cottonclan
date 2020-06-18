let levelInput = document.querySelector('.level__input');
let levelAlert = document.querySelector('.level__alert');

let staminaInput = document.querySelector('.stamina__input');
let staminaAlert = document.querySelector('.stamina__alert');

let bonusInput = document.querySelector('.bonus__input'); 

let healthButton = document.querySelector('.health__button');
let healthResult = document.querySelector('.health__result');



levelInput.oninput = function() {    
    if (levelInput.value <= 0 || levelInput.value == '') {
        
        levelAlert.classList.remove('alert-hidden');
        healthResult.textContent = " Укажите верные данные";
        
    } else if (levelInput.value > 0) {
        levelAlert.classList.add('alert-hidden');    
        healthResult.textContent = ((parseInt(staminaInput.value,10) * parseInt(4,10)) * (parseInt(levelInput.value,10) + parseInt(1,10)));    
        
    } else if (levelInput.value > 0 && bonusInput.checked) {
        levelAlert.classList.add('alert-hidden');    
        healthResult.textContent = ((parseInt(staminaInput.value,10) * parseInt(4,10)) * (parseInt(levelInput.value,10) + parseInt(1,10)));

        let resultValue = healthResult.textContent; 
    }  
     
};

staminaInput.oninput = function() {
    if (staminaInput.value < 10 || staminaInput.value == '') {        
        staminaAlert.classList.remove('alert-hidden');
        healthResult.textContent = " Укажите верные данные";
    } 
    else if (staminaInput.value > 9) {
        staminaAlert.classList.add('alert-hidden');    
        healthResult.textContent = ((parseInt(staminaInput.value,10) * parseInt(4,10)) * (parseInt(levelInput.value,10) + parseInt(1,10))); 
    }  
    else if (staminaInput.value > 9) {
        staminaAlert.classList.add('alert-hidden');    
        healthResult.textContent = ((parseInt(staminaInput.value,10) * parseInt(4,10)) * (parseInt(levelInput.value,10) + parseInt(1,10)));      
        
    } 
      
};

