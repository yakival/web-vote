<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta http-equiv="Cache-Control" content="private, max-age=0, no-cache">
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="expires" content="Fri, 20 Mar 2014 00:00:00 GMT" />

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('css/_all-skins.css') }}" rel="stylesheet">

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <script src="{{ asset('js/jquery-2.2.2.js') }}"></script>
    <script src="{{ asset('js/jsoneditor.js?id=5') }}"></script>

<body class="dx-viewport">

    <div class="content flex-center position-ref full-height">
        <div id="token" style="display: none;">{{ $token }}</div>
        <div id="clientid" style="display: none;">{{ $clientid }}</div>
        <div id="audioid" style="display: none;">{{ $audioid }}</div>
        <div id="app">
            <app></app>
        </div>
    </div>

<!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>

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