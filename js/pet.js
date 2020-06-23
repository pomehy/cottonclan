let petSelect = document.querySelector('.pet__select');
let petLevel = document.querySelector('.pet-level__input');

let petFood = document.querySelector('.pet__food');
let petPrice = document.querySelector('.pet__price');
 
petSelect.onchange = function() {
    petLevel.value = 1;
    petFood.value = 0; 
    petPrice.value = 0;  
    
};


petLevel.oninput = function() {
    if (petLevel.value < 1) {
        petLevel.value = 1;
    } else if (petLevel.value > 35) {
        petLevel.value = 35;
    } else if (petSelect.value == 2) {

        let petFoodK = parseInt(15,10) + parseInt(15,10) * 
        ((parseInt(petLevel.value,10) - parseInt(1,10))  - parseInt(1,10));

        let petFoodK3 = (parseInt(15,10) + parseInt(petFoodK,10)) * 
        (parseInt(petLevel.value,10) - parseInt(1,10));

        petFood.value = parseInt(petFoodK3,10) / parseInt(2,10);   
        

    } else if (petSelect.value == 3) {

        let petFoodK = parseInt(20,10) + parseInt(20,10) * 
        ((parseInt(petLevel.value,10) - parseInt(1,10))  - parseInt(1,10));

        let petFoodK3 = (parseInt(20,10) + parseInt(petFoodK,10)) * 
        (parseInt(petLevel.value,10) - parseInt(1,10));

        petFood.value = parseInt(petFoodK3,10) / parseInt(2,10);  
        
    
    } else if (petSelect.value == 4) {

        let petFoodK = parseInt(25,10) + parseInt(25,10) * 
        ((parseInt(petLevel.value,10) - parseInt(1,10))  - parseInt(1,10));

        let petFoodK3 = (parseInt(25,10) + parseInt(petFoodK,10)) * 
        (parseInt(petLevel.value,10) - parseInt(1,10));

        petFood.value = parseInt(petFoodK3,10) / parseInt(2,10);  
    } else if (petSelect.value == 1) {
        if (petLevel.value == 2) {
            petFood.value = 5;
        } else if (petLevel.value == 3) {
            petFood.value = 15;
        } else if (petLevel.value == 4) {
            petFood.value = 30;
        } else if (petLevel.value == 5) {
            petFood.value = 55;
        } else if (petLevel.value == 6) {
            petFood.value = 105;
        } else if (petLevel.value == 7) {
            petFood.value = 155;
        } else if (petLevel.value == 8) {
            petFood.value = 230;
        } else if (petLevel.value == 9) {
            petFood.value = 305;
        } else if (petLevel.value == 10) {
            petFood.value = 405;
        } else if (petLevel.value == 11) {
            petFood.value = 505;
        } else if (petLevel.value == 12) {
            petFood.value = 630;
        } else if (petLevel.value == 13) {
            petFood.value = 755;
        } else if (petLevel.value == 14) {
            petFood.value = 880;
        } else if (petLevel.value == 15) {
            petFood.value = 1030;
        } else if (petLevel.value == 16) {
            petFood.value = 1180;
        } else if (petLevel.value == 17) {
            petFood.value = 1330;
        } else if (petLevel.value == 18) {
            petFood.value = 1480;
        } else if (petLevel.value == 19) {
            petFood.value = 1630;
        } else if (petLevel.value == 20) {
            petFood.value = 1830;
        } else if (petLevel.value == 21) {
            petFood.value = 2030;
        } else if (petLevel.value == 22) {
            petFood.value = 2230;
        } else if (petLevel.value == 23) {
            petFood.value = 2430;
        } else if (petLevel.value == 24) {
            petFood.value = 2680;
        } else if (petLevel.value == 25) {
            petFood.value = 2930;
        } else if (petLevel.value == 26) {
            petFood.value = 3180;
        } else if (petLevel.value == 27) {
            petFood.value = 3450;
        } else if (petLevel.value == 28) {
            petFood.value = 3750;
        } else if (petLevel.value == 29) {
            petFood.value = 4050;
        } else if (petLevel.value == 30) {
            petFood.value = 4350;
        } else if (petLevel.value == 31) {
            petFood.value = 4650;
        } else if (petLevel.value == 32) {
            petFood.value = 5050;
        } else if (petLevel.value == 33) {
            petFood.value = 5450;
        } else if (petLevel.value == 34) {
            petFood.value = 5850;
        } else if (petLevel.value == 35) {
            petFood.value = 6250;  
        }        
    }
    petPrice.value = petFood.value * 20;
};
