let levelInput = document.querySelector('.level__input');
let levelAlert = document.querySelector('.level__alert');

let staminaInput = document.querySelector('.stamina__input');
let staminaAlert = document.querySelector('.stamina__alert');

let bonusInput = document.querySelector('.bonus__input'); 
let healthResult = document.querySelector('.health__result');

let healthIcon = document.querySelector('.health__icon');

bonusInput.onchange = function() {    
    levelInput.value = 1;
    staminaInput.value = 10;
    healthResult.textContent = 80;
}

levelInput.oninput = function() {  
    if (levelInput.value > 80) {
        levelInput.value = 80;
    }  
    else if (bonusInput.checked && levelInput.value > 0) {
        levelAlert.classList.add('alert-hidden');    
        healthResult.textContent = ((parseInt(staminaInput.value,10) * parseInt(4,10)) * (parseInt(levelInput.value,10) + parseInt(1,10)) * 1.5); 
    }  
    else if (levelInput.value <= 0 || levelInput.value == '') {
        levelAlert.classList.remove('alert-hidden');
        healthResult.textContent = " Укажите верные данные";
        
    } else if (levelInput.value > 0) {
        levelAlert.classList.add('alert-hidden');    
        healthResult.textContent = ((parseInt(staminaInput.value,10) * parseInt(4,10)) * (parseInt(levelInput.value,10) + parseInt(1,10)));   
    } 
    healthIcon.classList.toggle('health__icon--boom')
     
};

staminaInput.oninput = function() {
    
    if (bonusInput.checked && staminaInput.value > 9) {  
        staminaAlert.classList.add('alert-hidden');       
        healthResult.textContent = ((parseInt(staminaInput.value,10) * parseInt(4,10)) * (parseInt(levelInput.value,10) + parseInt(1,10)) * 1.5); 
    } 
    else if (staminaInput.value < 10 || staminaInput.value == '') {        
        staminaAlert.classList.remove('alert-hidden');
        healthResult.textContent = " Укажите верные данные";
    } 
    else if (staminaInput.value > 9) {
        staminaAlert.classList.add('alert-hidden');    
        healthResult.textContent = ((parseInt(staminaInput.value,10) * parseInt(4,10)) * (parseInt(levelInput.value,10) + parseInt(1,10))); 
    }   
    healthIcon.classList.toggle('health__icon--boom')   
};




