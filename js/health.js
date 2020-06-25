let healthLevel = document.querySelector('.health__level');

let healthStamina = document.querySelector('.health__stamina');

let healthBonus = document.querySelector('.health__bonus'); 
let healthResult = document.querySelector('.health__result');

let healthIcon = document.querySelector('.health__icon');


healthBonus.onclick = function() {       
    if (healthBonus.checked) {
        healthResult.textContent = parseInt(healthResult.textContent,10) * 1.5; 
    } else {        
        healthResult.textContent = 80; 
        healthLevel.value = 1;
        healthStamina.value = 10;
    }        
};

healthLevel.oninput = function() {  
    if (healthLevel.value > 80) {
        healthLevel.value = 80;
    } else if (healthLevel.value > 0 && healthBonus.checked) {          
        healthResult.textContent = ((parseInt(healthStamina.value,10) * parseInt(4,10)) * (parseInt(healthLevel.value,10) + parseInt(1,10)) * 1.5); 
    
    } else if (healthLevel.value > 0) {          
        healthResult.textContent = ((parseInt(healthStamina.value,10) * parseInt(4,10)) * (parseInt(healthLevel.value,10) + parseInt(1,10)));   
    } 
    healthIcon.classList.toggle('health__icon--animate')
     
};

healthStamina.oninput = function() {    
    if (healthBonus.checked && healthStamina.value > 9) { 
        healthResult.textContent = ((parseInt(healthStamina.value,10) * parseInt(4,10)) * (parseInt(healthLevel.value,10) + parseInt(1,10)) * 1.5); 
    }     
    else if (healthStamina.value > 9) {       
        healthResult.textContent = ((parseInt(healthStamina.value,10) * parseInt(4,10)) * (parseInt(healthLevel.value,10) + parseInt(1,10))); 
    }   
    healthIcon.classList.toggle('health__icon--animate')   
};






