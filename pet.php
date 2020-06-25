<?php require 'blocks/head.php' ?>
<link rel="stylesheet" href="css/pet.css">
<title>Питомец</title>
</head>
<?php require 'blocks/header.php' ?>
<main class="page-main container">
    <?php require 'blocks/main-nav.php' ?>
    <section class="main-content pet">
        <div class="row">
            <section class="col-lg-6 main-content__decription">
                <h2 class="main-content__title">Питомец</h2>
                <p class="main-content__text">Максимальный уровень питомца - 35 !</p>
                <p class="main-content__text">После достижения питомцем 35-го уровня – его характеристики (здоровье, урон) прекратят свой рост.</p>
                <p class="main-content__text">Опыт питомца можно увеличивать от боя к бою (1ХР за победный бой). Тем самым увеличивая стоимость питомца <b>на 20 пуль</b> в случае его продажи</p>
                <p class="main-content__text">Максимальное количество боёв с питомцем - 200 в день.</p>
                <table class="pet__table">
                    <tr>
                        <td>Питомец</td>
                        <td>Минимум дней для получения 35 ур.</td>
                    </tr>
                    <tr>
                        <td>Овчарка</td>
                        <td>32 дня</td>
                    </tr>
                    <tr>
                        <td>Алабай</td>
                        <td>46 дней</td>
                    </tr>
                    <tr>
                        <td>Волк</td>
                        <td>60 дней</td>
                    </tr>
                    <tr>
                        <td>Страж</td>
                        <td>75 дней</td>
                    </tr>
                </table>
                <p class="main-content__highlight">Цель питомца - пули от продажи питомца и бонус к характеристикам от достижения "Кинолог"!</p>
            </section>
            <section class="col-lg-6 main-content__form calculate">
                <div class="calculate-inner">
                    <h2 class="calculate__title">Расчёт стоимости</h2>
                    <form class="calculate__form">
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="pet-select">Питомец</label>
                            <select class="calculate__input pet__select" name="pets" id="pet-select">
                                <option value="1">Овчарка</option>
                                <option value="2">Алабай</option>
                                <option value="3">Волк</option>
                                <option value="4">Страж</option>
                            </select>
                        </div>
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="pet-level">Уровень питомца (max 35)</label>
                            <input class="calculate__input pet__level" type="number" name="" id="label" value="1" max="35" min="0" required>
                        </div>                        
                        <div class="calculate-input-wrapper">
                            <p class="calculate__label">Количество корма</p>
                            <span class="calculate__result pet__food">0</span>
                        </div>
                        <div class="calculate-input-wrapper">
                            <p class="calculate__label">Цена продажи</p>
                            <span class="calculate__result pet__price">0</span>
                        </div>
                    </form>
                    <p class="calculate__important">"Овчарку" быстрее и дешевле прокачать до 35 уровня !</p>
                </div>
            </section>
        </div>
    </section>
</main>

<?php require 'blocks/footer.php' ?>
<script src="js/pet.js"></script>
</body>

</html>