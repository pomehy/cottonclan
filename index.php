<?php require 'blocks/head.php'?> 
   
    <title>CottonClan - Главная</title>
</head>
<?php require 'blocks/header.php' ?>
<main class="page-main container">
    <?php require 'blocks/main-nav.php' ?>
    <section class="main-content health">
        <div class="row">
            <section class="col-lg-6 main-content__decription">
                <h2 class="main-content__title">Раздел в разработке</h2>
                <p class="main-content__text">Пока можете ознакомиться с разделами "Выносливость", "Ярость", "Питомец" !</p>
                <p class="main-content__highlight">Пока можете ознакомиться с разделами "Выносливость", "Ярость", "Питомец" !</p>
            </section>
            <section class="col-lg-6 main-content__form calculate">
                <div class="calculate-inner">
                    <h2 class="calculate__title">Контакты для связи </h2>
                    <form class="calculate__form">
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="label">Лейбл</label>
                            <select class="calculate__input" name="" id="label">
                                <option value="1">Первый</option>
                                <option value="2">Второй</option>
                                <option value="3">Третий</option>
                                <option value="4">Четвертый</option>
                            </select>
                        </div>
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label" for="label">Лейбл</label>
                            <input class="calculate__input" type="number" name="" id="label" value="1" max="35" min="0" required>
                        </div>
                        <div class="calculate-input-wrapper">
                            <input class="calculate__check" type="checkbox" name="" id="check">
                            <label class="calculate__label" for="check">checkbox</label>
                        </div>
                        <div class="calculate-input-wrapper">
                            <p class="calculate__label">Результат №1</p>
                            <span class="calculate__result">0</span>
                        </div>                        
                    </form>
                    <p class="calculate__important">Lorem, ipsum dolor.</p>
                </div>
            </section>
        </div>
    </section>
</main>

<?php require 'blocks/footer.php' ?>

</body>
    </html>