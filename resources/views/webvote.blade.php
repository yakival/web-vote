<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Web-Vote</title>


    <!-- Styles -->
    <link href="{{ asset('css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('css/animate.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/lightbox.css') }}" rel="stylesheet">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    <link id="css-preset" href="{{ asset('css/presets/preset1.css') }}" rel="stylesheet">
    <link href="{{ asset('css/responsive.css') }}" rel="stylesheet">

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' rel='stylesheet' type='text/css'>

    <style>
        .red-number {
            display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 20px;
            padding: 2px;
            text-align: center;
            border-radius: 50%;
            background: red;
        }
        .green-number {
            display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 20px;
            padding: 2px;
            text-align: center;
            border-radius: 50%;
            background: lime;
        }
    </style>
</head><!--/head-->

<body>

<!--.preloader-->
<div class="preloader"> <i class="fa fa-circle-o-notch fa-spin"></i></div>
<!--/.preloader-->


<header id="home">
    <div id="home-slider" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
            <div class="item active" style="background-image: url('../images/slider/1.jpg')">
                <div class="caption">
                    <h1 class="animated fadeInLeftBig">Вас ждёт <span>WEB-Vote</span></h1>
                    <p class="animated fadeInRightBig">ОТКРОЙТЕ ДЛЯ СЕБЯ НОВЫЕ ВОЗМОЖНОСТИ В ИНТЕРАКТИВНОМ ОПРОСЕ</p>
                    <a data-scroll class="btn btn-start animated fadeInUpBig" href="#services">Начать знакомство</a>
                </div>
            </div>
        </div>

        <a id="tohash" href="#services"><i class="fa fa-angle-down"></i></a>

    </div><!--/#home-slider-->
    <div class="main-nav">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="\">
                    <h1><img class="img-responsive" src="/images/web-vote1.jpeg" alt="logo" style="width: 4.5em;"></h1>
                </a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="scroll active"><a href="#home" title="Начальная страница"><i class="fa fa-home" style="font-size: 24px;"></i></a></li>
                    <li class="scroll"><a href="#services" title="О системе"><i class="fa fa-info-circle" style="font-size: 24px;"></i></a></li>
                    <li class="scroll"><a href="#blog" title="Презентации работы системы в разных режимах">Презентации</a></li>
                    <li class="scroll"><a href="#support">Поддержка</a></li>
                    <li class="scroll"><a href="#contact">Контакты</a></li>
                </ul>
            </div>
        </div>
    </div><!--/#main-nav-->
</header><!--/#home-->
<section id="services">
    <div class="container">
        <div class="heading wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
            <div class="row">
                <div class="text-center col-sm-8 col-sm-offset-2">
                    <p>
                    <h2>На кончиках пальцев</h2>
                    <p>
                        В наш цифровой век, пожалуй, уже и не встретишь человека без смартфона, планшета или ноутбука.
                        <br>Вот мы и решили этим воспользоваться.
                    <p>
                        С помощью нашей программы можно получить обратную связь от аудитории, не используя никаких дополнительных дорогостоящих устройств или гаджетов. Достаточно иметь обычный Wi-Fi роутер и ноутбук.
                    <p>
                        Какой лектор или докладчик не сталкивался с отсутствием внимания аудитории, часть которой зачем-то "сидит" в своих телефонах, переписываясь в соцсетях или просматривая модные блоги и т.д.
                        <br>Попробуйте задействовать аудиторию в опросе с использованием их же мобильных устройств, которые уже не смогут отвлечь внимание слушателей во время голосования и быть использованы для других целей, т.к. они (гаджеты) будут зарегистрированы во внутренней сети лектора, который сразу будет видеть сколько человек реально участвует в опросе.
                </div>
            </div>
        </div>
        <div class="text-center our-services">
            <div class="row">
                <div class="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div class="service-icon">
                        <a style="color: white;" href="#about-1"><i class="fa fa-umbrella"></i></a>
                    </div>
                    <div class="service-info">
                        <h3>Технологии под вашим контролем</h3>
                        <p>Организация и проведение мероприятия.</p>
                    </div>
                </div>
                <div class="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="450ms">
                    <div class="service-icon">
                        <a style="color: white;" href="#about-2"><i class="fa fa-cog"></i></a>
                    </div>
                    <div class="service-info">
                        <h3>Лёгкая настройка</h3>
                        <p>Подключение участников к процедуре голосования</p>
                    </div>
                </div>
                <div class="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="550ms">
                    <div class="service-icon">
                        <a style="color: white;" href="#about-3"><i class="fa fa-rub"></i></a>
                    </div>
                    <div class="service-info">
                        <h3>Экономия средств</h3>
                        <p>Сравнение систем голосования по основным параметрам</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section><!--/#services-->
<section id="about-1" class="parallax" style="background-image: url(../images/about-bg.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <div class="about-info wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <h2>Технологии под вашим контролем</h2>
                    <p>Установив наше приложение на компьютер или ноутбук, лектор получает возможность переформатировать обычную презентацию PowerPoint в презентацию для проведения голосования. В приложении можно ввести необходимый web адрес для точки доступа.
                </div>
            </div>
            <div class="text-center col-sm-6">
                <img class="img-responsive" src="images/about/notebook.jpeg" alt="">
            </div>
        </div>
    </div>
</section><!--/#about-us-->
<section id="about-2" class="parallax" style="background-image: url(../images/about-bg.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <div class="about-info wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <h2>Лёгкая настройка</h2>
                    <table style="width: 100%;">
                        <td style="padding-right: 20px;">
                            <img class="img-responsive" src="images/about/phone.gif" alt="">
                        </td>
                        <td>
                            <p>Участники мероприятия регистрируются во внутренней сети и переходят по адресу, указанному лектором.
                            <p>Сразу после этого они могут участвовать в голосовании.
                        </td>
                    </table>
                </div>
            </div>
            <div class="col-sm-6">
                <img class="img-responsive" src="images/about/network.png" alt="">
            </div>
        </div>
    </div>
</section><!--/#about-us-->
<section id="about-3" class="parallax" style="background-image: url(../images/about-bg.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="about-info wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <h2>Сравнение систем голосования</h2>
                    <img class="img-responsive" src="images/present1/present1_2.jpg" alt="">
                </div>
            </div>
            <div class="col-sm-6">
            </div>
        </div>
    </div>
</section><!--/#about-us-->

<section id="blog" class="parallax" style="background-image: url(../images/present1-bg.jpg);">
    <div class="container">
        <div class="row">
            <div class="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
                <h2>Презентация системы голосования WEB-Vote</h2>
            </div>
        </div>
        <div class="blog-posts">
            <div class="row">
                <div class="col-sm-12 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div class="post-thumb">
                        <div id="post-carousel"  class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#post-carousel" data-slide-to="0" class="active"></li>
                                <li data-target="#post-carousel" data-slide-to="1"></li>
                                <li data-target="#post-carousel" data-slide-to="2"></li>
                                <li data-target="#post-carousel" data-slide-to="3"></li>
                                <li data-target="#post-carousel" data-slide-to="4"></li>
                                <li data-target="#post-carousel" data-slide-to="5"></li>
                                <li data-target="#post-carousel" data-slide-to="6"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="item active">
                                    <a href="#"><img class="img-responsive" src="images/present1/present1_1.jpg" alt=""></a>
                                </div>
                                <div class="item">
                                    <a href="#"><img class="img-responsive" src="images/present1/present1_2.jpg" alt=""></a>
                                </div>
                                <div class="item">
                                    <a href="#"><img class="img-responsive" src="images/present1/present1_3.jpg" alt=""></a>
                                </div>
                                <div class="item">
                                    <a href="#"><img class="img-responsive" src="images/present1/present1_4.jpg" alt=""></a>
                                </div>
                                <div class="item">
                                    <a href="#"><img class="img-responsive" src="images/present1/present1_5.jpg" alt=""></a>
                                </div>
                                <div class="item">
                                    <a href="#"><img class="img-responsive" src="images/present1/present1_6.jpg" alt=""></a>
                                </div>
                            </div>
                            <a class="blog-left-control" href="#post-carousel" role="button" data-slide="prev"><i class="fa fa-angle-left"></i></a>
                            <a class="blog-right-control" href="#post-carousel" role="button" data-slide="next"><i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section><!--/#blog-->
<section id="blog1" class="parallax" style="background-image: url(../images/present1-bg.jpg);">
    <div class="container">
        <div class="row">
            <div class="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
                <h2>Пример использования Web-Vote при голосовании</h2>
            </div>
        </div>
        <div class="blog-posts">
            <div class="row">
                <div class="col-sm-12 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div class="post-thumb">
                        <div id="post-carousel1"  class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#post-carousel1" data-slide-to="0" class="active"></li>
                                <li data-target="#post-carousel1" data-slide-to="1"></li>
                                <li data-target="#post-carousel1" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="item active">
                                    <a href="#"><img class="img-responsive" src="images/present2/present2_2.jpg" alt=""></a>
                                </div>
                                <div class="item">
                                    <a href="#"><img class="img-responsive" src="images/present2/present2_3.jpg" alt=""></a>
                                </div>
                                <div class="item">
                                    <a href="#"><img class="img-responsive" src="images/present2/present2_4.jpg" alt=""></a>
                                </div>
                            </div>
                            <a class="blog-left-control" href="#post-carousel1" role="button" data-slide="prev"><i class="fa fa-angle-left"></i></a>
                            <a class="blog-right-control" href="#post-carousel1" role="button" data-slide="next"><i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section><!--/#blog1-->

<section id="support">
    <div class="container">
        <div class="heading wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
            <div class="row">
                <div class="text-center col-sm-8 col-sm-offset-2">
                    <p>
                    <h2>Поддержка и адаптация</h2>
                    <p>
                        Наша программа постоянно находится в процессе обновления. Дополняем её возможности с учётом пожеланий заказчиков.
                    <p>
                        Мы изменили кнопки голосования, когда потребовалось три кнопки вместо двенадцати. Добавили возможность трансляции голосования через наш сервер по протоколу SRT, что даёт меньшую задержку, чем на youtube.
                    <p style="text-align: center; display: inline-block;">
                        <img class="img-responsive" src="images/support/button-3.jpeg" alt=""></p>
                    <p>
                        Разработали возможность анимированного вывода результатов голосования для международного конкурса молодых исполнителей имени М. Магомаева.
                    <p>
                </div>
            </div>
            <div class="row">
                <div class="text-center col-sm-12" style="overflow: auto;">
                            <video src="images/magomaev.mp4" controls autoplay loop></video>
                </div>
            </div>
        </div>
    </div>
</section><!--/#services-->

<section id="contact">
    <div id="contact-us" class="parallax">
        <div class="container">
            <div class="row">
                <div class="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <h2>Контакты</h2>
                    <p>Связаться с нами можно через форму обратной связи или самостоятельно по адресу электронной почты.</p>
                    <p>Вы можете получить коммерческое предложение,
                        как по <b>WEB-Vote</b>, так и по системе интерактивного голосования <b>I-Vote</b>, для их совместного использования.</p>
                </div>
            </div>
            <div class="contact-form wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div class="row">
                    <div class="col-sm-6">
                        <form id="main-contact-form" name="contact-form" method="post" action="/api/webvote/mail">
                            <div class="row  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="text" name="name" class="form-control" placeholder="ФИО" required="required">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="email" name="email" class="form-control" placeholder="Email Address" required="required">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" name="subject" class="form-control" placeholder="Тема" required="required">
                            </div>
                            <div class="form-group">
                                <textarea name="message" id="message" class="form-control" rows="4" placeholder="Напишите сообщение" required="required"></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn-submit">Пока подключаем. Отправляйте по ссылке.</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-6">
                        <div class="contact-info wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <ul class="address">
                                <li><i class="fa fa-phone"></i> <span> Phone:</span>  +7 (963) 782-7534, +7 (926) 469-1417  </li>
                                <li><i class="fa fa-envelope"></i> <span> Email:</span>  <a href="mailto:info@web-vote.ru">  info@web-vote.ru</a></li>
                                <li><i class="fa fa-globe"></i> <span> Website:</span>  <a href="#">www.web-vote.ru</a></li>
                                <li><i class="fa fa-telegram"></i> <span> Telegram:</span>  <a href="https://t.me/+ng3sAqoYDEc5OTYy">WEB-VOTE</a></li>
                            </ul>
                            <br>
                            <p style="text-align: center; display: inline-block;">
                                <img class="img-responsive" src="images/contacts/gibrid.jpeg" alt=""></p>
                            <p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section><!--/#contact-->
<footer id="footer">
    <div class="footer-top wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
        <div class="container text-center">
            <div class="footer-logo">
                <a href="/"><img class="img-responsive" src="/images/web-vote1.jpeg" alt=""></a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <p>&copy; 2022 web-vote.ru</p>
                </div>
                <div class="col-sm-6">
                    <p class="pull-right"></p>
                </div>
            </div>
        </div>
    </div>
</footer>

<script src="{{ asset('js/jquery-2.2.2.js') }}"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/jquery.inview.min.js') }}"></script>
<script src="{{ asset('js/wow.min.js') }}"></script>
<script src="{{ asset('js/mousescroll.js') }}"></script>
<script src="{{ asset('js/smoothscroll.js') }}"></script>
<script src="{{ asset('js/jquery.countTo.js') }}"></script>
<script src="{{ asset('js/lightbox.min.js') }}"></script>
<script src="{{ asset('js/main.js') }}"></script>

<script id="__bs_script__">//<![CDATA[
    (function() {
        try {
            var script = document.createElement('script');
            if ('async') {
                script.async = true;
            }
            script.src = 'http://HOST:3000/browser-sync/browser-sync-client.js?v=3.0.2'.replace("HOST", location.hostname);
            if (document.body) {
                document.body.appendChild(script);
            } else if (document.head) {
                document.head.appendChild(script);
            }
        } catch (e) {
            console.error("Browsersync: could not append script tag", e);
        }
    })()
    //]]></script>

</body>
</html>