let weaponDamadge = document.querySelector('.weapon__damadge');
let weaponSkill = document.querySelector('.weapon__skill');

let weaponArtefact = document.getElementById('weapon-artefact');
let weaponLamp = document.getElementById('weapon-lamp');
let weaponModulKnife = document.getElementById('weapon-modul-knife');

let weaponBelt = document.querySelector('.weapon__belt');

let damadgeHuman = document.querySelector('.damadge__human');
let damadgeMutant = document.querySelector('.damadge__mutant');
let damadgeBoss = document.querySelector('.damadge__boss');

let weaponButton = document.querySelector('.weapon__button');

let damadgeСharacterHuman = 0;
let damadgeСharacterMutant = 0;
let damadgeСharacterBoss = 0;

weaponBelt.onchange = function() {
    if (weaponBelt.checked) {        
        weaponSkill.value = parseInt(weaponSkill.value,10) + parseInt(30,10);
        weaponBelt.value = 5;
        console.log('checked');
        console.log(parseInt(weaponBelt.value,10));
    } else { 
        
        weaponSkill.value = parseInt(weaponSkill.value,10) - parseInt(30,10);
        weaponBelt.value = 0;     
        console.log('unchecked');
        console.log(parseInt(weaponBelt.value,10));
    }    
};

weaponDamadge.onchange = function() {
    if (weaponDamadge.value < 20) {
        weaponDamadge.value = 20;
    }
};
weaponSkill.onchange = function() {
    if (weaponSkill.value < 10) {
        weaponSkill.value = 10;
    }
};


weaponButton.onclick = function(evt) {
    evt.preventDefault(); 
    
    if (weaponArtefact.value == 1 && weaponLamp.value == 1) {         
        damadgeHuman.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(10,10) + parseInt(3,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(10,10) + parseInt(3,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1);
        
        console.log('Урон с Часами и Дубинкой');
    } else if (weaponArtefact.value == 2 && weaponLamp.value == 1) {
        damadgeHuman.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(10,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(3,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(3,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        console.log('Урон с Клыком и Дубинкой');
    } else if (weaponArtefact.value == 3 && weaponLamp.value == 1) { 
        damadgeHuman.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(3,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(3,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        console.log('Урон с Ключом и Дубинкой');
    } else if (weaponArtefact.value == 4 && weaponLamp.value == 1) {         
        damadgeHuman.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(15,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(weaponLamp.value,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(15,10) + parseInt(3,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        console.log('Урон с Каплей и Дубинкой');
     
    } else if (weaponArtefact.value == 1 && weaponLamp.value == 2) { 
        damadgeHuman.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(3,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(10,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(10,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1);              
        console.log('Урон с Часами и Фонарём Тактическим');
    } else if (weaponArtefact.value == 2 && weaponLamp.value == 2) {         
        damadgeHuman.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(10,10) + parseInt(3,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1);
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        console.log('Урон с Клыком и Фонарём Тактическим');
    } else if (weaponArtefact.value == 3 && weaponLamp.value == 2) { 
        damadgeHuman.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(3,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        console.log('Урон с Ключом и Фонарём Тактическим');
    } else if (weaponArtefact.value == 4 && weaponLamp.value == 2) {         
        damadgeHuman.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(15,10) + parseInt(3,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(15,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1);
        console.log('Урон с Каплей и Фонарём Тактическим');
    } else if (weaponArtefact.value == 1) {
        damadgeHuman.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(10,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1);
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(10,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1);
        console.log('Урон с Часами');
    } else if (weaponArtefact.value == 2) {
        damadgeHuman.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(10,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1);
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1);
        console.log('Урон с Клыком');
    } else if (weaponArtefact.value == 3) {
        damadgeHuman.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1);
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(10,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1);
        console.log('Урон с Ключом');
    } else if (weaponArtefact.value == 4) {
        damadgeHuman.textContent = Math.floor((parseInt(weaponDamadge.value,10) - parseInt(15,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10)  + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1);
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(15,10)  + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1);          
        console.log('Урон с Каплей');
    } else if (weaponLamp.value == 1) {
        damadgeHuman.textContent = Math.floor(parseInt(weaponDamadge.value,10) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(3,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(3,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        console.log('Урон с Дубинкой');
    }  else if (weaponLamp.value == 2) {
        damadgeHuman.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(3,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1);
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1);      
        console.log('Урон с Тактическим');
    } 
    else {
        damadgeHuman.textContent = Math.floor(parseInt(weaponDamadge.value,10) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeMutant.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(weaponModulKnife.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        damadgeBoss.textContent = Math.floor((parseInt(weaponDamadge.value,10) + parseInt(weaponModulKnife.value,10) + parseInt(weaponBelt.value,10)) * parseInt(weaponSkill.value,10) * 0.1); 
        console.log('Урон без артефакта и фонаря');
    }
};