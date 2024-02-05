<template>
    <div class="container" style="border-width: 4px; border-style: solid;">
        <div class="row">
            <div class="col-md-6 col-sm-6" style="vertical-align: center;">
                <table width="100%"><tr><td style="padding-top: 10px;">
                    <img  src="images/web-vote1.gif">
                </td><td>
                    <img id="opros" src="images/upload.gif" style="display: none; width: 100px;">
                </td></tr></table>
            </div>
            <div class="col-md-6 col-sm-6" style="padding-top: 10px;">
                <div class="callout callout-info">
                    <span style="font-size: 16px;">Пульт интерактивного голосования</span>
                    <p v-if="data.fio">Участник: <b>{{getFIO}}</b></p>
                    <p v-else>Новая свобода для мобильных устройств.</p>
                </div>
            </div>
        </div>
        <div v-if="data.fio && FIO.accept">
            <div class="row" style="padding-top: 25px; padding-bottom: 25px;">
                <div class="col-md-4 col-sm-4" style="text-align: center;">
                    <app-button v-bind:pos="1" v-bind:data="data" v-bind:settings="settings" v-bind:ro="getDisable" v-on:set-disable="ro = $event"></app-button>
                </div>
                <div class="col-md-4 col-sm-4" style="text-align: center;">
                    <app-button v-bind:pos="2" v-bind:data="data" v-bind:settings="settings" v-bind:ro="getDisable" v-on:set-disable="ro = $event"></app-button>
                </div>
                <div class="col-md-4 col-sm-4" style="text-align: center;">
                    <app-button v-bind:pos="3" v-bind:data="data" v-bind:settings="settings" v-bind:ro="getDisable" v-on:set-disable="ro = $event"></app-button>
                </div>
            </div>
            <div class="row" style="padding-top: 25px; padding-bottom: 25px;">
                <div class="col-md-4 col-sm-4" style="text-align: center;">
                    <app-button v-bind:pos="4" v-bind:data="data" v-bind:settings="settings" v-bind:ro="getDisable" v-on:set-disable="ro = $event"></app-button>
                </div>
                <div class="col-md-4 col-sm-4" style="text-align: center;">
                    <app-button v-bind:pos="5" v-bind:data="data" v-bind:settings="settings" v-bind:ro="getDisable" v-on:set-disable="ro = $event"></app-button>
                </div>
                <div class="col-md-4 col-sm-4" style="text-align: center;">
                    <app-button v-bind:pos="6" v-bind:data="data" v-bind:settings="settings" v-bind:ro="getDisable" v-on:set-disable="ro = $event"></app-button>
                </div>
            </div>
            <div class="row" style="padding-top: 25px; padding-bottom: 25px;">
                <div class="col-md-4 col-sm-4" style="text-align: center;">
                    <app-button v-bind:pos="7" v-bind:data="data" v-bind:settings="settings" v-bind:ro="getDisable" v-on:set-disable="ro = $event"></app-button>
                </div>
                <div class="col-md-4 col-sm-4" style="text-align: center;">
                    <app-button v-bind:pos="8" v-bind:data="data" v-bind:settings="settings" v-bind:ro="getDisable" v-on:set-disable="ro = $event"></app-button>
                </div>
                <div class="col-md-4 col-sm-4" style="text-align: center;">
                    <app-button v-bind:pos="9" v-bind:data="data" v-bind:settings="settings" v-bind:ro="getDisable" v-on:set-disable="ro = $event"></app-button>
                </div>
            </div>
            <div class="row" style="padding-top: 25px; padding-bottom: 25px;">
                <div class="col-md-4 col-sm-4" style="text-align: center;">
                    <app-button v-bind:pos="10" v-bind:data="data" v-bind:settings="settings" v-bind:ro="getDisable" v-on:set-disable="ro = $event"></app-button>
                </div>
                <div class="col-md-4 col-sm-4" style="text-align: center;">
                    <app-button v-bind:pos="11" v-bind:data="data" v-bind:settings="settings" v-bind:ro="getDisable" v-on:set-disable="ro = $event"></app-button>
                </div>
                <div class="col-md-4 col-sm-4" style="text-align: center;">
                    <app-button v-bind:pos="12" v-bind:data="data" v-bind:settings="settings" v-bind:ro="getDisable" v-on:set-disable="ro = $event"></app-button>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="card-header" style="color: #007bff; font-weight: bold; font-size: 30px; margin: 0; padding: 100px; text-align: center;">РЕГИСТРАЦИЯ</div>

            <div id="form-demo">
                <div class="widget-container">
                    <form
                            @submit="handleSubmit"
                    >
                        <DxForm
                                :form-data="FIO"
                                :show-validation-summary="false"
                                :show-colon-after-label="false"
                                validation-group="customerData"
                        >
                            <DxSimpleItem data-field="f" text>
                                <DxLabel text="ФАМИЛИЯ"/>
                                <DxRequiredRule message="Укажите Фамилию"/>
                            </DxSimpleItem>
                            <DxSimpleItem data-field="i">
                                <DxLabel text="ИМЯ"/>
                                <DxRequiredRule message="Укажите Имя"/>
                            </DxSimpleItem>
                            <DxSimpleItem data-field="o">
                                <DxLabel text="ОТЧЕСТВО"/>
                                <DxRequiredRule message="Укажите Отчество"/>
                            </DxSimpleItem>

                            <DxButtonItem
                                    :button-options="buttonOptions"
                                    horizontal-alignment="center"
                            />
                        </DxForm>
                    </form>
                </div>
                <p style="padding-bottom: 100px;"></p>
            </div>
        </div>

<!--
    <DxButton
            text="Click me"
            @click="sayHelloWorld"
    />
    -->
    </div>
</template>


<script>
    import axios from 'axios';
    import DxButton from 'devextreme-vue/button';
    import AppButton from "./button";

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
        DxAsyncRule
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
        },
        data() {
            return {
                delay: 1000,
                buttons: "",
                opros: false,
                data: {},
                settings: {},
                ro: false,
                FIO: {
                    f: "",
                    i: "",
                    o: "",
                    accept: false
                },
                buttonOptions: {
                    text: 'Зарегистрироваться',
                    type: 'success',
                    useSubmitBehavior: true
                },
            };
        },
        created() {

        },
        mounted() {
            this.loadData();
        },
        computed: {
            getDisable: function() {
                return this.ro;
            },
            getFIO: function() {
                return this.data.fio;
            }
        },
        methods: {
            loadData() {
                if(this.buttons==="") this.buttons = "1,2,3,4,5,6,7,8,9,10,11,12";
                this.readState();
                this.sendData();
            },

            async readState(){
                if(this.ro) {
                    console.log("ReadOnly");
                    setTimeout(this.readState, this.delay);
                    return;
                }
                await axios.get('/api/pult/getdata.asp')
                    .then((resp) => {
                        this.data = resp.data.data;
                        this.settings = resp.data.settings;

                        this.buttons = this.settings.buttons;
                        this.opros = this.settings.opros;
                        //setButtons(buttons);
                        if(this.opros){
                            $("#opros").show();
                        }else{
                            $("#opros").hide();
                        }
                        setTimeout(this.readState, this.delay);
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        setTimeout(this.readState, this.delay);
                    });
            },
            sayHelloWorld() {
                alert('Hello world!')
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
                await axios.post('/api/pult/senddata.asp', { 'fio': this.FIO.f + " " + this.FIO.i + " " + this.FIO.o })
                    .then(function (resp) {
                    })
                    .catch(function (resp) {
                        console.log(resp);
                    });
            }
        }

    }
</script>
