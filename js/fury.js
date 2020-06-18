let furyLevel = document.querySelector('.fury-level__input');
let furyChance = document.querySelector('.fury-chance__input');
let furyResult = document.querySelector('.fury__result');



furyLevel.oninput = function() { 
    if (furyLevel.value < 1 ) {
        furyLevel.value = 1;
    } else if  (furyLevel.value > 80 ) {
        furyLevel.value = 80;
    } else  {
        furyResult.textContent =  (parseInt(furyLevel.value,10) * (parseInt(furyChance.value,10) - parseInt(30,10))); 
    }
}

furyChance.oninput = function() {     
    if  (furyChance.value > 70 ) {
        furyChance.value = 70;
    } else if (furyChance.value > 50) {
        furyResult.textContent =  (parseInt(furyLevel.value,10) * (parseInt(furyChance.value,10) - parseInt(30,10))); 
    }

}
