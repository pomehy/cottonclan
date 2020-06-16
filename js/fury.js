let furyLevel = document.querySelector('.fury__level');
let furyPercent = document.querySelector('.fury__percent');
let furyResult = document.querySelector('.fury__result');
let furyButton = document.querySelector('.fury__button');

furyButton.onclick = function(evt) {
    evt.preventDefault();     

     furyResult.textContent = (parseInt(furyLevel.value,10) *(parseInt(furyPercent.value,10) - parseInt(30,10)));
};

furyLevel.oninput = function() {
    furyResult.textContent = (parseInt(furyLevel.value,10) *(parseInt(furyPercent.value,10) - parseInt(30,10)));
};
furyPercent.oninput = function() {
    furyResult.textContent = (parseInt(furyLevel.value,10) *(parseInt(furyPercent.value,10) - parseInt(30,10)));
};
