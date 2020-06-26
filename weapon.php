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
                <p class="main-content__text">Пока можете ознакомиться с разделами "Выносливость", "Ярость", "Питомец" !</p>
                <p class="main-content__highlight">Пока можете ознакомиться с разделами "Выносливость", "Ярость", "Питомец" !</p>
            </section>
            <section class="col-lg-7 main-content__form calculate">
                <div class="calculate-inner">
                    <h2 class="calculate__title">Урон персонажа</h2>
                    <form class="calculate__form">
                        <div class="calculate-input-wrapper weapon-input-wrapper">
                            <div class="calculate-input-inner">
                                <label class="calculate__label" for="weapon-damadge">Урон оружия</label>
                                <input class="calculate__input weapon__damadge" type="number" name="weapon-damadge" id="weapon-damadge" value="11" min="11" required>
                            </div>
                            <div class="calculate-input-inner">
                                <label class="calculate__label" for="weapon-skill">Владение оружием</label>
                                <input class="calculate__input weapon__skill" type="number" name="weapon-skill" id="weapon-skill" value="10" min="10" required disabled>
                            </div>
                        </div>
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="weapon-artefact">Артефакт (Кулон)</label>
                            <select class="calculate__input weapon__select" name="weapon-artefacts" id="weapon-artefact" disabled>
                                <option class="weapon__option" value="0">Обычный кулон</option>
                                <option class="weapon__option" value="1">Часы хантера</option>
                                <option class="weapon__option" value="2">Клык Вичухи</option>
                                <option class="weapon__option" value="3">Ключ от Бункера</option>
                                <option class="weapon__option" value="4">Капля</option>
                            </select>
                        </div>
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="weapon-lamp">Фонарь</label>
                            <select class="calculate__input weapon__select" name="weapon-lamps" id="weapon-lamp" disabled>
                                <option class="weapon__option" value="0">Обычный фонарь</option>
                                <option class="weapon__option" value="1">Дубинка аргумент</option>
                                <option class="weapon__option" value="2">Тактический фонарь (из покера)</option>
                            </select>
                        </div>
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="weapon-modul-knife">Штык-нож (модуль)</label>
                            <select class="calculate__input weapon__select" name="weapon-modul-knifes" id="weapon-modul-knife" disabled>
                                <option class="weapon__option" value="0"></option>
                                <option class="weapon__option" value="1">Кустарный нож +5</option>
                                <option class="weapon__option" value="2">Штык-нож М9 +10</option>
                                <option class="weapon__option" value="3">Штык-нож Тип 81 +15</option>
                                <option class="weapon__option" value="4">Штык 26-Х-212 +20</option>
                                <option class="weapon__option" value="5">Другой модуль</option>
                            </select>
                        </div>
                        <div class="calculate-input-wrapper">
                            <input class="calculate__check weapon__belt" type="checkbox" name="weapon-belt" id="weapon-belt" disabled>
                            <label class="calculate__label" for="weapon-belt">Пояс охотника</label>
                        </div>
                        <div class="calculate-input-wrapper damadge">
                            <div class="calculate-input-inner">
                                <p class="calculate__label">По людям</p>
                                <span class="calculate__result damadge__human">11</span>
                            </div>
                            <div class="calculate-input-inner">
                                <p class="calculate__label">По мутантам</p>
                                <span class="calculate__result damadge__mutant">11</span>
                            </div>
                            <div class="calculate-input-inner">
                                <p class="calculate__label">По боссам</p>
                                <span class="calculate__result damadge__boss">11</span>
                            </div>
                        </div>
                    </form>
                    <p class="calculate__important">
                        
                    </p>
                </div>
            </section>
        </div>
    </section>
</main>

<?php require 'blocks/footer.php' ?>
<script src="js/weapon2.js"></script>

</body>

</html>