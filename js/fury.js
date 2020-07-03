let furyLevel = document.querySelector('.fury__level');
let furyChance = document.querySelector('.fury__chance');
let furyResult = document.querySelector('.fury__result');

let furyIcon = document.querySelector('.fury__icon');


furyLevel.oninput = function() {  
    if (furyLevel.value > 80) {
        furyLevel.value = 80;
    } else if (furyLevel.value > 0) {          
        furyResult.textContent =  (parseInt(furyLevel.value,10) * (parseInt(furyChance.value,10) - parseInt(30,10))); 
    } 
    furyIcon.classList.toggle('fury__icon--animate');     
};


furyChance.oninput = function() {     
    if  (furyChance.value > 70 ) {
        furyChance.value = 70;
    } else if (furyChance.value > 50) {
        furyResult.textContent =  (parseInt(furyLevel.value,10) * (parseInt(furyChance.value,10) - parseInt(30,10))); 
    }
    furyIcon.classList.toggle('fury__icon--animate')
}
