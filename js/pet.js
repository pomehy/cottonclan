let petSelect = document.querySelector('.pet__select');
let petLevel = document.querySelector('.pet__level');

let petFood = document.querySelector('.pet__food');
let petPrice = document.querySelector('.pet__price');
 
petSelect.onchange = function() {
    petLevel.value = 1;
    petFood.textContent = 0; 
    petPrice.textContent = 0;  
    
};



petLevel.oninput = function() {
    if (petLevel.value < 0) {
        petLevel.value = 0;
    } 
    else if (petLevel.value > 35) {
        petLevel.value == 35;
        petFood.textContent = 'Максимальный уровень - 35';           
    } 
    else if (petSelect.value == 2) {

        let petFoodK = parseInt(15,10) + parseInt(15,10) * 
        ((parseInt(petLevel.value,10) - parseInt(1,10))  - parseInt(1,10));

        let petFoodK3 = (parseInt(15,10) + parseInt(petFoodK,10)) * 
        (parseInt(petLevel.value,10) - parseInt(1,10));

        
        petFood.textContent = parseInt(petFoodK3,10) / parseInt(2,10);   
        

    } else if (petSelect.value == 3) {

        let petFoodK = parseInt(20,10) + parseInt(20,10) * 
        ((parseInt(petLevel.value,10) - parseInt(1,10))  - parseInt(1,10));

        let petFoodK3 = (parseInt(20,10) + parseInt(petFoodK,10)) * 
        (parseInt(petLevel.value,10) - parseInt(1,10));

        petFood.textContent = parseInt(petFoodK3,10) / parseInt(2,10);  
        
    
    } else if (petSelect.value == 4) {

        let petFoodK = parseInt(25,10) + parseInt(25,10) * 
        ((parseInt(petLevel.value,10) - parseInt(1,10))  - parseInt(1,10));

        let petFoodK3 = (parseInt(25,10) + parseInt(petFoodK,10)) * 
        (parseInt(petLevel.value,10) - parseInt(1,10));

        petFood.textContent = parseInt(petFoodK3,10) / parseInt(2,10);   
        
        
    } else if (petSelect.value == 1) {
        if (petLevel.value == 2) {
            petFood.textContent = 5;
        } else if (petLevel.value == 3) {
            petFood.textContent = 15;
        } else if (petLevel.value == 4) {
            petFood.textContent = 30;
        } else if (petLevel.value == 5) {
            petFood.textContent = 55;
        } else if (petLevel.value == 6) {
            petFood.textContent = 105;
        } else if (petLevel.value == 7) {
            petFood.textContent = 155;
        } else if (petLevel.value == 8) {
            petFood.textContent = 230;
        } else if (petLevel.value == 9) {
            petFood.textContent = 305;
        } else if (petLevel.value == 10) {
            petFood.textContent = 405;
        } else if (petLevel.value == 11) {
            petFood.textContent = 505;
        } else if (petLevel.value == 12) {
            petFood.textContent = 630;
        } else if (petLevel.value == 13) {
            petFood.textContent = 755;
        } else if (petLevel.value == 14) {
            petFood.textContent = 880;
        } else if (petLevel.value == 15) {
            petFood.textContent = 1030;
        } else if (petLevel.value == 16) {
            petFood.textContent = 1180;
        } else if (petLevel.value == 17) {
            petFood.textContent = 1330;
        } else if (petLevel.value == 18) {
            petFood.textContent = 1480;
        } else if (petLevel.value == 19) {
            petFood.textContent = 1630;
        } else if (petLevel.value == 20) {
            petFood.textContent = 1830;
        } else if (petLevel.value == 21) {
            petFood.textContent = 2030;
        } else if (petLevel.value == 22) {
            petFood.textContent = 2230;
        } else if (petLevel.value == 23) {
            petFood.textContent = 2430;
        } else if (petLevel.value == 24) {
            petFood.textContent = 2680;
        } else if (petLevel.value == 25) {
            petFood.textContent = 2930;
        } else if (petLevel.value == 26) {
            petFood.textContent = 3180;
        } else if (petLevel.value == 27) {
            petFood.textContent = 3450;
        } else if (petLevel.value == 28) {
            petFood.textContent = 3750;
        } else if (petLevel.value == 29) {
            petFood.textContent = 4050;
        } else if (petLevel.value == 30) {
            petFood.textContent = 4350;
        } else if (petLevel.value == 31) {
            petFood.textContent = 4650;
        } else if (petLevel.value == 32) {
            petFood.textContent = 5050;
        } else if (petLevel.value == 33) {
            petFood.textContent = 5450;
        } else if (petLevel.value == 34) {
            petFood.textContent = 5850;
        } else if (petLevel.value == 35) {
            petFood.textContent = 6250;  
        }        
    }
    petPrice.textContent = petFood.textContent * 20;   
    
};
