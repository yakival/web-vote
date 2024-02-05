<!doctype html>
<html>
    <head>
        <meta http-equiv="Cache-Control" content="private, max-age=0, no-cache">
        <meta http-equiv="pragma" content="no-cache" />
        <meta http-equiv="expires" content="Fri, 20 Mar 2014 00:00:00 GMT" />

        <link type="text/css" rel="stylesheet" href="{{ asset('css/video-js.min.css') }}" />

        <script src="{{ asset('js/jquery-2.2.2.js') }}"></script>
        <script src="{{ asset('js/video.min.js') }}"></script>
        <script src="{{ asset('js/Youtube.min.js') }}"></script>

    </head>
    <body style="background-color: black;">
        <video
                id="video"
                class="video-js vjs-default-skin"
                style="width: 100%;"
                controls
                autoplay
                preload="auto"
                data-setup='{ "techOrder": ["youtube"], "youtube": { "playsinline": 1, "controls": 0 }, "sources": [{ "type": "video/youtube", "src": "{{ $url }}"}] }'
        >
        </video>
   </body>

    <script type="text/javascript">
        $(document).ready( function() {
            let obj = $(".vjs-default-skin")[0];
            $(obj).height($(document).height() - 20);

        })

    </script>

</html>
