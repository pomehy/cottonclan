<?php require 'blocks/head.php'?>    
    <link rel="stylesheet" href="css/fury.css">    
    <title>ЯРОСТЬ</title>
</head>
<?php require 'blocks/header.php' ?>
<main class="page-main container">
    <?php require 'blocks/main-nav.php' ?>
    <section class="main-content fury">
        <div class="row">
            <section class="col-lg-6 main-content__decription ">
                <h2 class="main-content__title">ЯРОСТЬ</h2>
                <p class="main-content__text">Ярость — это характеристика, от которой зависит, как часто вы будете наносить в бою двойной урон.</p>
                <p class="main-content__text">Шанс двойного урона не может быть больше 70%.</p>
                <p class="main-content__text">Ярость можно быстро усилить за счёт бонуса от экипировки.</p>
                <p class="main-content__highlight">С каждым новым уровнем шанс двойного урона снижается на 1%.</p>
            </section>
            <section class="col-lg-6 main-content__form calculate">
                <div class="calculate-inner">
                    <h2 class="calculate__title">Расчёт ярости</h2>
                    <form class="calculate__form">
                    <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="fury-level">Уровень персонажа (max 80)</label>
                            <input class="calculate__input fury__level" type="number" name="fury-level" id="fury-level"  value="1" max="80" min="1" required>
                        </div>
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="fury-chance">Желаемый шанс х2 урона в %</label>
                            <input class="calculate__input fury__chance" type="number" name="fury-chance" id="fury-chance" value="50" min="50"  max="70" required>
                        </div>                        
                        <div class="calculate-input-wrapper">
                            <p class="calculate__label">Количество ярости</p>
                            <span class="calculate__result fury__result">20</span>
                            <img class="fury__icon" src="img/fury/fury-icon.svg" alt="">
                        </div>                        
                    </form>
                    <p class="calculate__important">С каждым новым уровнем шанс двойного урона снижается на 1% !</p>
                </div>
            </section>
        </div>
    </section>
</main>
<?php require 'blocks/footer.php' ?>

<script src="js/fury.js"></script>
  
</body>
    </html>