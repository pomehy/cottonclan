<?php require 'blocks/head.php' ?>
<link rel="stylesheet" href="css/planning.css">
<title>Стоимость характеристик</title>
</head>
<?php require 'blocks/header.php' ?>
<main class="page-main container">
    <?php require 'blocks/main-nav.php' ?>
    <section class="main-content planning">
        <div class="row">
            <section class="col-lg-6 main-content__decription">
                <h2 class="main-content__title">Стоимость характеристик</h2>
                <p class="main-content__text">Стоимость базовых характеристик для всех параметров единая (выносливость, меткость, ярость, владение).</p>
                <p class="main-content__text">С помощью данного калькулятора можно узнать количество пуль для получения нужного значения характеристик.</p>
                
                
                <p class="main-content__highlight">Зная свой уровень, можно спланировать время, за которое вы достигните нужных характеристик! (в разработке)</p>
            </section>
            <section class="col-lg-6 main-content__form calculate">
                <div class="calculate-inner">
                    <h2 class="calculate__title">Стоимость характеристик</h2>
                    <form class="calculate__form">
                    <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="planning-base">Базовое значение</label>
                            <input class="calculate__input planning__base" type="number" name="planning-base" id="planning-base" value="10" min="0" required>
                        </div>                        
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="planning-total">Желаемое значение</label>
                            <input class="calculate__input planning__total" type="number" name="planning-total" id="planning-total" value="0" min="0" required>
                        </div> 
                        <div class="calculate-input-wrapper">
                            <p class="calculate__label">Стоимость в пулях</p>                            
                            <span class="calculate__result planning__result">0</span>
                        </div>
                        <button class="calculate__button planning__button" type="button">Рассчитать</button>
                    </form>
                    
                </div>
            </section>
        </div>
    </section>
</main>
<?php require 'blocks/footer.php' ?>
<script src="js/planning.js"></script>
</body>

</html>