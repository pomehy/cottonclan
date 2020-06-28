<?php require 'blocks/head.php' ?>
<link rel="stylesheet" href="css/weapon.css">
<title>Владение оружием</title>
</head>
<?php require 'blocks/header.php' ?>
<main class="page-main container">
    <?php require 'blocks/main-nav.php' ?>
    <section class="main-content weapon">
        <div class="row">
            <section class="col-lg-5 main-content__decription">
                <h2 class="main-content__title">Владение оружием</h2>                
                <p class="main-content__text">В игре есть три вида оружия: легкое, среднее, тяжелое. И, соответственно, есть три навыка владения оружием.</p>
                <p class="main-content__text">Чем выше ваш навык владения оружием — тем больший урон вы можете нанести сопернику.</p>
                <p class="main-content__text">Также уровень вашего мастерства позволит снизить получаемый урон от данного типа оружия.</p>
                <p class="main-content__text">Урон вашего персонажа зависит от оружия, уровня владения оружием и модификторов (экипировка, артефакты и модули)</p>
                <p class="main-content__highlight">Выберите и качайте только один тип оружия, пока не получите основные артефакты !</p>
            </section>
            <section class="col-lg-7 main-content__form calculate">
                <div class="calculate-inner">
                    <h2 class="calculate__title">Урон персонажа</h2>
                    <form class="calculate__form">
                        <div class="calculate-input-wrapper weapon-input-wrapper">
                            <div class="calculate-input-inner">
                                <label class="calculate__label" for="weapon-damadge">Урон оружия</label>
                                <input class="calculate__input weapon__damadge" type="number" name="weapon-damadge" id="weapon-damadge" value="20" min="20" required>
                            </div>
                            <div class="calculate-input-inner">
                                <label class="calculate__label" for="weapon-skill">Владение оружием</label>
                                <input class="calculate__input weapon__skill" type="number" name="weapon-skill" id="weapon-skill" value="10" min="10" required>
                            </div>
                        </div>
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="weapon-artefact">Артефакт (Кулон)</label>
                            <select class="calculate__input weapon__select" name="weapon-artefacts" id="weapon-artefact">
                                <option class="weapon__option" value="0">Обычный кулон</option>
                                <option class="weapon__option" value="1">Часы хантера</option>
                                <option class="weapon__option" value="2">Клык Вичухи</option>
                                <option class="weapon__option" value="3">Ключ от Бункера</option>
                                <option class="weapon__option" value="4">Капля</option>
                            </select>
                        </div>
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="weapon-lamp">Фонарь</label>
                            <select class="calculate__input weapon__select" name="weapon-lamps" id="weapon-lamp" value="0">
                                <option class="weapon__option" value="0">Обычный фонарь</option>
                                <option class="weapon__option" value="1">Дубинка аргумент</option>
                                <option class="weapon__option" value="2">Тактический фонарь (из покера)</option>
                            </select>
                        </div>
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="weapon-modul-knife">Штык-нож (модуль)</label>
                            <select class="calculate__input weapon__select" name="weapon-modul-knifes" id="weapon-modul-knife" value="0">
                                <option class="weapon__option" value="0">Другой модуль</option>
                                <option class="weapon__option" value="5">Кустарный нож +5</option>
                                <option class="weapon__option" value="10">Штык-нож М9 +10</option>
                                <option class="weapon__option" value="15">Штык-нож Тип 81 +15</option>
                                <option class="weapon__option" value="20">Штык 26-Х-212 +20</option>                               
                            </select>
                        </div>
                        <div class="calculate-input-wrapper">
                            <input class="calculate__check weapon__belt" type="checkbox" name="weapon-belt" id="weapon-belt" value="0">
                            <label class="calculate__label" for="weapon-belt">Пояс охотника</label>
                        </div>

                        <hr>
                        <div class="calculate-input-wrapper damadge">
                            <div class="calculate-input-inner">
                                <p class="calculate__label">По людям</p>
                                <span class="calculate__result damadge__human">20</span>
                                <img class="calculate__icon human-icon" src="img/weapon/target.svg" alt="">
                            </div>
                            <div class="calculate-input-inner">
                                <p class="calculate__label">По мутантам</p>
                                <span class="calculate__result damadge__mutant">20</span>
                                <img class="calculate__icon mutant-icon" src="img/weapon/mutant-icon.svg" alt="">
                            </div>
                            <div class="calculate-input-inner">
                                <p class="calculate__label">По боссам</p>
                                <span class="calculate__result damadge__boss">20</span>
                                <img class="calculate__icon boss-icon" src="img/weapon/boss-icon.svg" alt="">
                            </div>
                        </div>
                        <button class="calculate__button weapon__button" type="button">Рассчитать урон</button>
                    </form>                    
                </div>
            </section>
        </div>
    </section>
</main>

<?php require 'blocks/footer.php' ?>
<script src="js/weapon.js"></script>

</body>

</html>