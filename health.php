<?php require 'blocks/head.php' ?>
<link rel="stylesheet" href="css/health.css">
<title>Выносливость</title>
</head>
<?php require 'blocks/header.php' ?>
<main class="page-main container">
    <?php require 'blocks/main-nav.php' ?>
    <section class="main-content health">
        <div class="row">
            <section class="col-lg-6 main-content__decription">
                <h2 class="main-content__title">Выносливость</h2>
                <p class="main-content__text">Выносливость влияет на количество здоровья вашего персонажа. Чем больше выносливости , тем больше
                    здоровья.</p>
                <p class="main-content__text">На количество здоровья влияет уровень персонажа.</p>
                <p class="main-content__text">Здоровье можно увеличить за счёт "энергетиков" (байкалы, конфеты, сухари и т.д.) - максимальный
                    бонус + 50% !</p>
                <p class="main-content__text">Большой запас здоровья эффективно иметь против мутантов в Данжах и Рейдах на боссов.</p>
                <p class="main-content__text">В клановой войне количество здоровья необхоидмо сводить к минимуму, так противник не сможет
                        "настрелять" много очков урона в КВ !</p>
                <p class="main-content__highlight">Усиливать персонажа эффективнее за счёт увеличения других
                        характеристик (меткость, владение оружием, ярость) !</p>
            </section>
            <section class="col-lg-6 main-content__form calculate">
                <div class="calculate-inner">
                    <h2 class="calculate__title">Расчёт здоровья</h2>
                    <form class="calculate__form">
                    <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="health-level">Уровень персонажа (max 80)</label>
                            <input class="calculate__input health__level" type="number" name="health-level" id="health-level" value="1" max="80" min="1" required>
                        </div>
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="health-stamina">Выносливость (min 10)</label>
                            <input class="calculate__input health__stamina" type="number" name="health-stamina" id="health-stamina" value="10" min="10" required>
                        </div>
                        <div class="calculate-input-wrapper">
                            <input class="calculate__check health__bonus" type="checkbox" name="health-bonus" id="health-bonus">
                            <label class="calculate__label" for="health-bonus">Бонус от "Байкалов" +50%"</label>
                        </div>
                        <div class="calculate-input-wrapper">
                            <p class="calculate__label">Здоровье персонажа</p>
                            <span class="calculate__result health__result">80</span>
                            <img class="health__icon" src="img/health/heart-icon.svg" alt="">
                        </div>
                    </form>
                    <p class="calculate__important">Чем меньше здоровья у вашего персонажа, тем он ценнее для клана в
                            котором вы играете!</p>
                </div>
            </section>
        </div>
    </section>
</main>
<?php require 'blocks/footer.php' ?>
<script src="js/health.js"></script>
</body>

</html>