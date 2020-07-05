<?php require 'blocks/head.php' ?>

<title>Помощник по игре Метро 2033 (приложение ВК) - CottonClan</title>
</head>
<?php require 'blocks/header.php' ?>
<main class="page-main container">
    <?php require 'blocks/main-nav.php' ?>
    <section class="main-content">
        <div class="row">
            <section class="col-lg-6 main-content__decription">
                <h2 class="main-content__title">Добро пожаловать !</h2>
                <p class="main-content__text">Данный сайт - является помощником для игроков приложения Метро 2033 !</p>
                <p class="main-content__text">Вы сможете планировать развитие своего персонажа, узнаете его потенциал с "ДОНАТОМ" и "БЕЗ ДОНАТА". </p>
                <p class="main-content__text">Познакомитесь с полезными фишками и лайфахакми по игре !</p>
                <p class="main-content__text">И ещё много интересного и полезного... "не всё сразу"</p>
                <p class="main-content__text"><em>Администрация сайта признаёт исключительное авторское право: разработчиков игры, Студии - «KramBamBoo» / Студии - «КЕФИР!» - на весь игровой контент и
право владельца бренда «МЕТРО 2033» Д. Глуховского. Администрация готова удалить, подпадающий под объекты этого права, контент сайта, либо его элементы, по просьбе законных владельцев.</em></p>
                <p class="main-content__highlight">Проект в разработке, разделы дополняются, оставайтесь с нами ! С вашей помощью это будет быстрее :)</p>
            </section>
            <section class="col-lg-6 main-content__form calculate">
                <div class="calculate-inner">
                    <h2 class="calculate__title">Контакты для связи </h2>
                    <a href="https://vk.com/hlopkov_gleb" target="_blank" class="calculate__button vk-button">Cotton G (Вконтакте)</a>
                </div>
                <div class="calculate-inner donate">
                    <h2 class="calculate__title donate__title">Поддержать проект</h2>
                    <form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
                        <input type="hidden" name="receiver" value="410012056580101">
                        <input type="hidden" name="formcomment" value="Проект «Помощник Метро 2033»">
                        <input type="hidden" name="short-dest" value="Проект «Помощник Метро 2033»">                        
                        <input type="hidden" name="quickpay-form" value="donate">
                        <input type="hidden" name="targets" value="транзакция: Проект «Помощник Метро 2033»">
                        <label class="calculate__label" for="sum">Сумма пожертвования (руб.)</label>
                        <input class="calculate__input donate__input" type="number" name="sum" value="100" min="10" data-type="number">                        
                       
                        <div class="calculate-input-wrapper">
                            <textarea class="calculate__textarea" type="hidden" name="comment" rows="3">На развитие проекта от ...</textarea>
                        </div>
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label">
                                <input class="calculate__radio" type="radio" name="paymentType" value="PC">
                                Яндекс.Деньгами
                            </label>
                        </div>
                        <div class="calculate-input-wrapper">
                            <label class="calculate__label">
                                <input type="radio" name="paymentType" value="AC">
                                Банковской картой
                            </label>
                        </div>
                        <button class="calculate__button donate-button" type="submit" value="Поддержать проект">Поддержать проект</button>
                    </form>                    
                </div>
            </section>
        </div>
    </section>
</main>

<?php require 'blocks/footer.php' ?>

</body>

</html>