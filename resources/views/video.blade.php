<!doctype html>
<html>
    <head>
        <meta http-equiv="Cache-Control" content="private, max-age=0, no-cache">
        <meta http-equiv="pragma" content="no-cache" />
        <meta http-equiv="expires" content="Fri, 20 Mar 2014 00:00:00 GMT" />

        <link type="text/css" rel="stylesheet" href="{{ asset('css/video-js.min.css') }}" />

        <script src="{{ asset('js/jquery-2.2.2.js') }}"></script>
        <script src="{{ asset('js/sldp-v2.17.5.min.js') }}"></script>

    </head>
    <body style="background-color: black;">
        <div id='sldp_player_wrapper'></div>

    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', initPlayer);
        let sldpPlayer;
        function initPlayer(){
            sldpPlayer = SLDP.init({
                container: 'sldp_player_wrapper',
                stream_url: "{{ $url }}",
                height: '100%',
                width: '100%',
                autoplay: true
            });

            let obj = $(".sldp_player_wrp_video")[0];
            $(obj).width($(document).width() - 20);
            $(obj).height($(document).height() - 20);
        }

        function removePlayer(){
            sldpPlayer.destroy()
        }

    </script>
</html>
