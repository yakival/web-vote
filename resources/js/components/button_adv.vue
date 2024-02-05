<template>
    <div>
        <button :id="getID"
                :class="getColor"
                style="font-size: 30px; width: 100%; height: 80px; padding-top: 0px;"
                v-on:mouseup="up"
                v-on:mousedown="down"
        >
            <div :id="getIDText"></div>
        </button>
    </div>
</template>

<script>
    import axios from 'axios';
    import { DxCircularGauge, DxScale, DxLabel, DxRangeContainer, DxRange, DxTitle, DxFont, DxExport } from 'devextreme-vue/circular-gauge';

    export default {
        name: "app-button",
        components: {
            DxCircularGauge, DxScale, DxLabel, DxRangeContainer, DxRange, DxTitle, DxFont, DxExport,
        },
        props: {
            pos: Number,
            data: Object,
            settings: Object,
            ro: Boolean,
            label: String,
            color: String,
            client_id: String,
        },
        data() {
            return {
                isPass: false,
                timer: Number,
                wb: 0,
            };
        },
        mounted() {
            this.ro = false;
            this.changeWidth();

        },
        created() {

        },
        computed: {
            getID: function() {
                return "btn" + this.pos;
            },
            getIDText: function() {
                return "text" + this.pos;
            },
            getLabel: function () {
                return this.label;
            },
            getColor: function () {
                if(this.data.key) {
                    if(this.data.key === this.pos.toString()){
                        $("#lamp"+this.pos).css({ color: "greenyellow" });
                        $("#btn" + this.pos).attr("class", this.color + "-active");
                        return this.color + "-active";
                    }else{
                        $("#lamp"+this.pos).css({ color: "lightgrey" });
                        $("#btn" + this.pos).attr("class", this.color);
                        return this.color;
                    }
                }else{
                    $("#lamp"+this.pos).css({ color: "lightgrey" });
                    $("#btn" + this.pos).attr("class", this.color);
                    return this.color;
                }
            },
            getDisable: function() {
                return this.ro;
            }
        },
        methods: {
            changeWidth(){
                setInterval(() => {
                    if (this.wb !== $("#btn" + this.pos).width()) {
                        $("#text" + this.pos).empty();

                        this.wb = $("#btn" + this.pos).width();
                        let canvas = document.createElement("canvas");
                        canvas.width = this.wb - 10;
                        canvas.height = 75;
                        let ctx = canvas.getContext('2d');
                        ctx.font = "30px \"Trebuchet MS\", Tahoma, Arial, sans-serif";
                        let text = this.label;
                        let metrics = ctx.measureText(text);
                        ctx.fillText(text, 10 + ((canvas.width - 20) / 2 - metrics.width / 2), 50);
                        let img = document.createElement("img");
                        img.src = canvas.toDataURL();
                        $("#text" + this.pos).append(img);
                    }
                }, 500);
            },
            down(){
                $("#btn" + this.pos).attr("class", this.color + "-active");
                this.wb = 0;
                this.sendData();
                return;
                this.isPass = false;
                this.timer = setTimeout(function(scope) {
                    scope.isPass = true;
                }, 1000, this);
            },
            up(){
                return;
                clearTimeout(this.timer);
                if(this.isPass) {
                    console.log('one seconds');
                    $("#btn" + this.pos).attr("class", this.color + "-active");
                    this.sendData();
                }
                this.isPass = false;
            },
            async sendData() {
                if(this.ro) return;
                if(this.getLabel === "") return;

                let app = this;
                this.$emit('set-disable', true);
                $("#lamp"+this.pos).css({ color: "yellow" });
                await axios.get('/api/pult/senddata.asp', {
                        params: {
                            'clientid': this.client_id,
                            'data': this.pos,
                            'fio': this.data.fio
                        }
                    })
                    .then(function (resp) {
                        this.wb = 0;
                        app.$emit('set-disable', false);
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        app.$emit('set-disable', false);
                        app.sendData();
                    });
            }
        }
    }
</script>

<style scoped>
    @media only screen and (max-width: 768px) {
        button {
            font-size: 40px;
        }
    }

    @media only screen and (max-width: 320px) {
        button {
            font-size: 20px;
        }
    }

    .green {
        width: 120px;
        height: 32px;
        padding: 0 0 2px;
        font-family: "Trebuchet MS", Tahoma, Arial, sans-serif;
        outline: none;
        position: relative;
        cursor: pointer;
        border-radius: 3px;
        color: #5D7731;
        text-shadow: 1px 1px #D0E5A4;
        border: 1px solid #89A94D;
        border-top: 1px solid #AAD063;
        border-bottom: 1px solid #6D883B;
        box-shadow:
                inset 0 1px #E0EEB6,
                inset 1px 0 #C6E08D,
                inset -1px 0 #C6E08D,
                inset 0 -1px #B4D579,
                0 4px #799545,
                0 6px #6D883B,
                0 8px 4px rgba(0,0,0,0.4)
    ;
        background: -moz-linear-gradient(top,  #cae285 0%, #a3cd5a 100%); /* FF3.6+ */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cae285), color-stop(100%,#a3cd5a)); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(top,  #cae285 0%,#a3cd5a 100%); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(top,  #cae285 0%,#a3cd5a 100%); /* Opera 11.10+ */
        background: -ms-linear-gradient(top,  #cae285 0%,#a3cd5a 100%); /* IE10+ */
        background: linear-gradient(top,  #cae285 0%,#a3cd5a 100%); /* W3C */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cae285', endColorstr='#a3cd5a',GradientType=0 ); /* IE6-9 */
        background-color: #B6D76F;
    }
    .green::-moz-focus-inner{border:0}
    .green:hover {
        border-top: 1px solid #98B85B;
        box-shadow:
                inset 0 1px #CCE3A1,
                inset 1px 0 #C6E08D,
                inset -1px 0 #C6E08D,
                inset 0 -1px #C7E18E,
                0 4px #799545,
                0 6px #6D883B,
                0 8px 4px rgba(0,0,0,0.4)
    ;
        background: -moz-linear-gradient(top,  #abd164 0%, #b9d972 100%); /* FF3.6+ */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#abd164), color-stop(100%,#b9d972)); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(top,  #abd164 0%,#b9d972 100%); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(top,  #abd164 0%,#b9d972 100%); /* Opera 11.10+ */
        background: -ms-linear-gradient(top,  #abd164 0%,#b9d972 100%); /* IE10+ */
        background: linear-gradient(top,  #abd164 0%,#b9d972 100%); /* W3C */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#abd164', endColorstr='#b9d972',GradientType=0 ); /* IE6-9 */
        background-color: #B6D76F;
    }
    .green:active {
        top: 3px;
        border: 1px solid #88A84E;
        border-top: 1px solid #6E883F;
        border-bottom: 1px solid #95B855;
        background: #A7CF5F;
        box-shadow: inset 0 2px 4px #779441;
    }
    .green-active {
        top: 3px;
        border: 5px solid red;
        border-top: 5px solid red;
        border-bottom: 5px solid red;
        background: #A7CF5F;
        box-shadow: inset 0 2px 4px #779441;
    }

    .orange {
        width: 120px;
        height: 32px;
        padding: 0 0 2px;
        font: 16px "Trebuchet MS", Tahoma, Arial, sans-serif;
        outline: none;
        position: relative;
        cursor: pointer;
        border-radius: 3px;
        color: #704A25;
        text-shadow: 1px 1px #FEDFA0;
        border: 2px solid #D2A146;
        border-top: 2px solid #EAB551;
        border-bottom: 2px solid #AF8234;
        box-shadow:
                inset 0 1px #FEE9AA,
                inset 1px 0 #FED67F,
                inset -1px 0 #FEDA85,
                inset 0 -1px #FECA6F,
                0 4px #B98A37,
                0 6px #9F7630,
                0 8px 4px rgba(0,0,0,0.4)
    ;
        background: -moz-linear-gradient(top, #feda71 0%, #febe4d 100%); /* FF3.6+ */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#feda71), color-stop(100%,#febe4d)); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(top, #feda71 0%,#febe4d 100%); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(top, #feda71 0%,#febe4d 100%); /* Opera11.10+ */
        background: -ms-linear-gradient(top, #feda71 0%,#febe4d 100%); /* IE10+ */
        background: linear-gradient(top, #feda71 0%,#febe4d 100%); /* W3C */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feda71', endColorstr='#febe4d',GradientType=0 ); /* IE6-9 */
        background-color: #FED166;
    }
    .orange::-moz-focus-inner{border:0}
    .orange:hover {
        border-top: 1px solid #E6A93D;
        box-shadow:
                inset 0 1px #FEDB98,
                inset 1px 0 #FED67F,
                inset -1px 0 #FEDA85,
                inset 0 -1px #FED781,
                0 4px #B98A37,
                0 6px #9F7630,
                0 8px 4px rgba(0,0,0,0.4)
    ;
        background: -moz-linear-gradient(top, #fec455 0%, #fecd61 100%); /* FF3.6+ */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fec455), color-stop(100%,#fecd61)); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(top, #fec455 0%,#fecd61 100%); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(top, #fec455 0%,#fecd61 100%); /* Opera11.10+ */
        background: -ms-linear-gradient(top, #fec455 0%,#fecd61 100%); /* IE10+ */
        background: linear-gradient(top, #fec455 0%,#fecd61 100%); /* W3C */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fec455', endColorstr='#fecd61',GradientType=0 ); /* IE6-9 */
        background-color: #FED166;
    }
    .orange:active {
        top: 0px;
        border: 2px solid #CF9D42;
        border-top: 2px solid #A77F35;
        border-bottom: 2px solid #E2AC48;
        background: #FEC151;
        box-shadow: inset 0 2px 4px #C49846;
    }
    .orange-active {
        top: 0px;
        border: 5px solid red;
        border-top: 5px solid red;
        border-bottom: 5px solid red;
        background: #FEC151;
        box-shadow: inset 0 2px 4px #C49846;
    }


    .pink {
        width: 120px;
        height: 32px;
        padding: 0 0 2px;
        font: 16px "Trebuchet MS", Tahoma, Arial, sans-serif;
        outline: none;
        position: relative;
        cursor: pointer;
        border-radius: 3px;
        color: #913944;
        border: 1px solid #D16573;
        border-top: 1px solid #EE8090;
        border-bottom: 1px solid #B84D5A;
        text-shadow: 1px 1px #F9A0AD;
        box-shadow:
                inset 0 1px #FBC1D0,
                inset 1px 0 #F99AAB,
                inset -1px 0 #F99AAB,
                inset 0 -1px #F68391,
                0 4px #CB5462,
                0 6px #B84D5A,
                0 8px 4px rgba(0,0,0,0.4)
    ;
        background: -moz-linear-gradient(top,  #f997b0 0%, #f56778 100%); /* FF3.6+ */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f997b0), color-stop(100%,#f56778)); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(top,  #f997b0 0%,#f56778 100%); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(top,  #f997b0 0%,#f56778 100%); /* Opera 11.10+ */
        background: -ms-linear-gradient(top,  #f997b0 0%,#f56778 100%); /* IE10+ */
        background: linear-gradient(top,  #f997b0 0%,#f56778 100%); /* W3C */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f997b0', endColorstr='#f56778',GradientType=0 ); /* IE6-9 */
        background-color: #F77E94;
    }
    .pink::-moz-focus-inner{border:0}
    .pink:hover {
        border-top: 1px solid #E26272;
        box-shadow:
                inset 0 1px #F9AAB5,
                inset 1px 0 #F99AAB,
                inset -1px 0 #F99AAB,
                inset 0 -1px #F99BAC,
                0 4px #CB5462,
                0 6px #B84D5A,
                0 8px 4px rgba(0,0,0,0.4)
    ;
        background: -moz-linear-gradient(top,  #f57184 0%, #f78297 100%); /* FF3.6+ */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f57184), color-stop(100%,#f78297)); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(top,  #f57184 0%,#f78297 100%); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(top,  #f57184 0%,#f78297 100%); /* Opera 11.10+ */
        background: -ms-linear-gradient(top,  #f57184 0%,#f78297 100%); /* IE10+ */
        background: linear-gradient(top,  #f57184 0%,#f78297 100%); /* W3C */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f57184', endColorstr='#f78297',GradientType=0 ); /* IE6-9 */
        background-color: #F77E94;
    }
    .pink:active {
        top: 3px;
        border: 2px solid #C75866;
        border-top: 2px solid #A14753;
        border-bottom: 2px solid #DA6070;
        background: #F56C7E;
        box-shadow: inset 0 2px 4px #c13345;
    }
    .pink-active {
        top: 3px;
        border: 5px solid red;
        border-top: 5px solid red;
        border-bottom: 5px solid red;
        background: #F56C7E;
        box-shadow: inset 0 2px 4px #C13345;
    }


</style>