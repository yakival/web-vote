<template>
    <div class="container-fluid">
        <div class="row rowvideo" style="padding: 5px;">
            <div id="cellvideo" class="col-sm-8" style="vertical-align: center;">
                <div id="player-parent">
                    {{ getURL }}
                    <iframe id="myFrame" frameborder="0" style="width: 100%;" src=""></iframe>
                    <!--
                    <video
                            id="video"
                            class="video-js vjs-default-skin"
                            :style="{width: '100%'}"
                            preload="auto"
                            data-setup='{"techOrder": ["youtube"], "youtube": { "playsinline": 1, "disablekb": 1, "controls": 0 }, "sources": [{ "type": "video/youtube", "src": "https://youtu.be/635uup08DLU"}] }'
                    >
                    </video>
                    -->
                </div>
            </div>
            <div id="cellbuttons" class="col-sm-4" style="vertical-align: center;">
                <div class="">
                    <div v-if="(getFIO && FIO.accept)">
                        <div v-show="!opros">
                            <div class="row" style="padding-top: 10px; padding-bottom: 10px; text-align: center;">
                                <div class="col-sm-12" style="text-align: center;">
                                    <span class="h3" style="color: blue;">Ожидание начала голосования ...</span>
                                </div>
                            </div>
                        </div>
                        <div v-show="opros">
                            <div class="row" style="padding-top: 10px; padding-bottom: 10px; text-align: center;">
                                <div class="col-sm-12" style="text-align: center;">
                                    <span class="h3 blink" style="color: red;">Идёт голосование {{getTimerStr}}...</span>
                                </div>
                            </div>
                            <div class="row" style="padding-top: 10px; padding-bottom: 10px;">
                                <div class="col-sm-12" style="text-align: center;">
                                    <app-button
                                            v-bind:pos="1"
                                            v-bind:label="'ЗА'"
                                            v-bind:color="'green'"
                                            v-bind:data="data"
                                            v-bind:settings="settings"
                                            v-bind:ro="getDisable"
                                            v-on:set-disable="ro = $event"
                                            v-bind:client_id="getClient"
                                    >
                                    </app-button>
                                </div>
                            </div>
                            <div class="row" style="padding-top: 10px; padding-bottom: 10px;">
                                <div class="col-sm-12" style="text-align: center;">
                                    <app-button
                                            v-bind:pos="2"
                                            v-bind:label="'ВОЗДЕРЖАЛСЯ'"
                                            v-bind:color="'orange'"
                                            v-bind:data="data"
                                            v-bind:settings="settings"
                                            v-bind:ro="getDisable"
                                            v-on:set-disable="ro = $event"
                                            v-bind:client_id="getClient"
                                    >
                                    </app-button>
                                </div>
                            </div>
                            <div class="row" style="padding-top: 10px; padding-bottom: 10px;">
                                <div class="col-sm-12" style="text-align: center;">
                                    <app-button
                                            v-bind:pos="3"
                                            v-bind:label="'ПРОТИВ'"
                                            v-bind:color="'pink'"
                                            v-bind:data="data"
                                            v-bind:settings="settings"
                                            v-bind:ro="getDisable"
                                            v-on:set-disable="ro = $event"
                                            v-bind:client_id="getClient"
                                    >
                                    </app-button>
                                </div>
                            </div>

                            <div class="row">
                                <div id="cellGauge" class="col-sm-12" style="vertical-align: center;">
                                    <div id="timer" class="center-section" style="text-align: -webkit-center; padding-top: 20px; display: none;">
                                        <DxCircularGauge
                                                id="gauge"
                                                :value="getTimer"
                                        >
                                            <DxSize
                                                    :width="160"
                                                    :height="160"
                                            />
                                            <DxGeometry
                                                    :start-angle="90"
                                                    :end-angle="90"
                                            ></DxGeometry>
                                            <DxScale
                                                    :start-value="getTimerMax"
                                                    :end-value="0"
                                                    :tick-interval="1"
                                                    :orientation="'outside'"
                                                    :allow-decimals="false"
                                            >
                                                <DxLabel
                                                        :visible="false"
                                                />
                                            </DxScale>
                                            <DxValueIndicator
                                                    :background-color="'red'"
                                                    :offset="-5"
                                                    :size="10"
                                                    :type="'rangeBar'"
                                                    color="#03a9f4"
                                            >

                                            </DxValueIndicator>
                                        </DxCircularGauge>
                                        <div class="speed-value" style="text-align: center; width: 100%;">
                                            <span><span style="font-size: 40px; font-weight: bold;">{{getTimerText}}</span><br><span style="font-size: 30px; color: red;">секунд</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="card-header h3" style="width: 100%; color: #007bff; margin: 0; padding: 10px; text-align: center; font-family: 'Times New Roman'">
                            <span style="color: red;">У Вас не подтверждены права на участие в голосовании.</span><br><br>
                            Пройдите авторизацию через личный кабинет АИС АПМ.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    //import 'videojs-youtube/dist/Youtube.min.js';
    //import 'video.js/dist/video-js.min.css';
    //import 'video.js/dist/video.min.js';

    //import 'video.js/dist/video-js.css'
    //import 'videojs-flash'

    import axios from 'axios';
    import DxButton from 'devextreme-vue/button';
    import AppButton from "./button";
    import { DxCircularGauge, DxSize, DxScale, DxRangeContainer, DxRange, DxTitle, DxFont, DxExport, DxGeometry, DxValueIndicator } from 'devextreme-vue/circular-gauge';

    import DxForm, {
        DxGroupItem,
        DxSimpleItem,
        DxButtonItem,
        DxLabel,
        DxRequiredRule,
        DxCompareRule,
        DxRangeRule,
        DxStringLengthRule,
        DxPatternRule,
        DxEmailRule,
        DxAsyncRule,
    } from 'devextreme-vue/form';
    import DxAutocomplete from 'devextreme-vue/autocomplete';
    import notify from 'devextreme/ui/notify';

    export default {
        name: "app-pult",
        components: {
            AppButton,
            DxButton,
            DxGroupItem,
            DxSimpleItem,
            DxButtonItem,
            DxLabel,
            DxRequiredRule,
            DxCompareRule,
            DxPatternRule,
            DxRangeRule,
            DxEmailRule,
            DxStringLengthRule,
            DxForm,
            DxAutocomplete,
            DxAsyncRule,
            notify,
            DxCircularGauge, DxSize, DxScale, DxRangeContainer, DxRange, DxTitle, DxFont, DxExport, DxGeometry, DxValueIndicator,
        },
        data() {
            return {
                delay: 1000,
                buttons: "",
                opros: false,
                data: { fio: "" },
                settings: {},
                ro: false,
                to: 0,
                FIO: {
                    f: "",
                    i: "",
                    o: "",
                    accept: false
                },
                client_id: "",
                buttonOptions: {
                    text: 'Зарегистрироваться',
                    type: 'success',
                    useSubmitBehavior: true
                },
                timerSec: 0,
                timerSec_: 0,
                timer: Number,

                oldURL: "",
                playerOptions: {
                    sources: [{
                        type: 'video/mp4',
                        src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
                    }],
                    autoplay: true,
                },
            }
        },
        created() {
            this.client_id = $("#clientid").html();
            if(this.client_id.length>1){
                this.FIO.f = this.client_id;
                this.FIO.i = "";
                this.FIO.o = "";
                this.FIO.accept = true;
            }
            console.log(this.client_id);
        },
        mounted() {
            //if($("#token").html() === ""){
            //    $("#cellvideo").remove();
            //    $("#cellbuttons").removeClass("col-sm-4");
            //    $("#cellbuttons").addClass("col-sm-12");
            //}else {
                //let obj = $(".vjs-default-skin")[0];
                let obj = $("#myFrame")[0];
                console.log($(obj).width());
                $(obj).height($(obj).width() / 16 * 9);
            //}
            this.loadData();
            this.sendData();
            //setTimeout(this.showTimer, 1000, 120);
        },
        beforeDestroy() {
            console.log("DESTROY");
            clearTimeout(this.to);
        },
        computed: {
            getDisable: function() {
                return this.ro;
            },
            getFIO: function() {
                if(!this.data){
                    return null;
                }else {
                    return this.data.fio;
                }
            },
            getURL: function() {
                //vjsYoutube()
                if(this.oldURL === ""){
                    if(this.settings.url !== ""){
                        this.oldURL = this.settings.url;
                        $("#myFrame").prop('src', "video?url=" + this.settings.url);
                    }
                }else{
                    if(this.settings.url !== this.oldURL){
                        this.oldURL = this.settings.url;
                        $("#myFrame").prop('src', "video?url=" + this.settings.url);
                    }
                }
            },
            getClient: function() {
                return this.client_id;
            },
            getVideoHeight(){
                let obj = $("#movie_player");
                if(obj.length > 0) {
                    return obj.width() / 4 * 3;
                }else{
                    return "100%"
                }
            },
            getGaugeWidth(){
                return window.innerWidth / 2;
            },
            getTimerMax: function() {
                return this.timerSec;
            },
            getTimer: function() {
                return this.timerSec_;
            },
            getTimerText: function() {
                return this.timerSec - this.timerSec_;
            },
            getOpros: function(){
                return this.opros;
            },
            getTimerStr: function() {
                if((this.timerSec - this.timerSec_) === 0){
                    return "";
                }else {
                    return " - " + (this.timerSec - this.timerSec_) + " сек";
                }
            },
        },
        methods: {
            loadData() {
                if(this.buttons==="") this.buttons = "1,2,3,4,5,6,7,8,9,10,11,12";
                this.readState();
                this.sendData();
            },
            showTimer(sec){
                if(this.timerSec === 0) {
                    this.timerSec = sec;
                    this.timerSec_ = 0;
                    //$("#timer").show();
                    this.timer = setInterval(function (scope) {
                        scope.timerSec_++;
                        if (scope.timerSec_ >= scope.timerSec) {
                            clearInterval(scope.timer);
                            //$("#timer").hide();
                        }
                    }, 1000, this);
                }
            },
            async readState(){
                if(this.ro) {
                    console.log("ReadOnly");
                    this.to = setTimeout(this.readState, this.delay);
                    return;
                }
                await axios.get('/api/pult/getdata.asp?clientid=' + this.client_id)
                    .then((resp) => {
                        this.data = resp.data.data;
                        this.settings = resp.data.settings;

                        this.buttons = this.settings.buttons;
                        this.opros = this.settings.opros;
                        if(this.opros === "0") this.opros = false;
                        if(this.opros === "1") this.opros = true;
                        //setButtons(buttons);
                        if(this.opros){
                            //$("#opros").show();
                            if(this.settings.timer>0){
                                this.showTimer(this.settings.timer);
                            }
                        }else{
                            //$("#opros").hide();
                            clearInterval(this.timer);
                            this.timerSec = 0;
                            this.timerSec_ = 0;
                            $("#timer").hide();
                        }
                        this.to = setTimeout(this.readState, this.delay);
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        this.to = setTimeout(this.readState, this.delay);
                    });
            },
            handleSubmit(e) {
                notify({
                    message: 'Данные о регистрации отправлены.',
                    position: {
                        my: 'center top',
                        at: 'center top'
                    }
                }, 'success', 3000);
                this.FIO.accept = true;
                this.sendData();
                e.preventDefault();
            },
            async sendData() {
                let app = this;
                await axios.get('/api/pult/senddata.asp', {
                        params: {
                            'clientid': this.client_id,
                            'fio': this.FIO.f + " " + this.FIO.i + " " + this.FIO.o
                        }
                    })
                    .then(function (resp) {
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        app.sendData();
                    });
            }
        }

    }
</script>

<style scoped>
    .speed-value {
        position: absolute;
        left: 0;
        top: 30%;
        text-align: center;
    }

    .speed-value > span {
        font-weight: lighter;
    }

    .blink {
        -webkit-animation: blink1 2s linear infinite;
        animation: blink1 2s linear infinite;
        font-weight: bold;
    }
    @-webkit-keyframes blink1 {
        0% { opacity: 1; }
        50% { opacity: 1; }
        75% { opacity: .7; }
        100% { opacity: 0; }
    }
    @keyframes blink1 {
        0% { opacity: 1; }
        50% { opacity: 1; }
        75% { opacity: .7; }
        100% { opacity: 0; }
    }
</style>