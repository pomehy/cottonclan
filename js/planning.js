let planningBase = document.querySelector('.planning__base');
let planningTotal = document.querySelector('.planning__total');
let planningResult = document.querySelector('.planning__result');

let planningButton = document.querySelector('.planning__button');




planningButton.onclick = function(evt) {    
    evt.preventDefault();
    if (planningBase.value < 10) {
        planningBase.value = 10;
    }

    let valueBase = parseInt(planningBase.value,10) + parseInt(1,10);       
    let priceBase =  Math.ceil(0.65 * (valueBase - parseInt(10,10)) ** 1.5); 
    let priceResult = 0;
    while (valueBase <= (parseInt(planningTotal.value,10))) { 
        priceResult = parseInt(priceResult,10) + (Math.ceil(0.65 * (valueBase - parseInt(10,10)) ** 1.5));
        valueBase++;
    }
    planningResult.textContent = priceResult.toLocaleString();   
};

 