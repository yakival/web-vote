<template>
    <div class="container" style="border-width: 4px; border-style: solid;">
        <div class="row">
            <div class="col-md-12 col-sm-12" style="vertical-align: center;">
                <table width="100%">
                    <tr>
                        <td style="padding-top: 10px;">
                            <img  src="images/web-vote1.gif" style="width: 337px;">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div style="overflow: auto; height: 87vh;">
            <div class="card-header" style="color: #007bff; font-weight: bold; font-size: 30px; margin: 0; padding: 20px; text-align: center;">КОНФИГУРАЦИЯ</div>

            <div id="form-demo">
                <div class="widget-container">
                    <form
                            @submit="handleSubmit"
                    >
                        <DxForm
                                :form-data="this.settings"
                                :show-validation-summary="false"
                                :show-colon-after-label="false"
                                validation-group="customerData"
                        >
                            <DxItem data-field="authpage" editor-type="dxCheckBox">
                                <DxLabel text="Встроенная авторизация" location="left"/>
                            </DxItem>
                            <DxGroupItem
                                    caption="ОПИСАНИЕ ПОЛЕЙ АВТОРИЗАЦИИ"
                                    :col-count="4"
                            >
                                <DxSimpleItem data-field="fields_json.field1.active" editor-type="dxCheckBox">
                                    <DxLabel text="Подключить поле №1" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="fields_json.field1.name" text>
                                    <DxLabel text="Подпись поля №1" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="fields_json.field2.active" editor-type="dxCheckBox">
                                    <DxLabel text="Подключить поле №2" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="fields_json.field2.name" text>
                                    <DxLabel text="Подпись поля №2" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="fields_json.field3.active" editor-type="dxCheckBox">
                                    <DxLabel text="Подключить поле №3" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="fields_json.field3.name" text>
                                    <DxLabel text="Подпись поля №3" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="fields_json.field4.active" editor-type="dxCheckBox">
                                    <DxLabel text="Подключить поле №4" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="fields_json.field4.name" text>
                                    <DxLabel text="Подпись поля №4" location="left"/>
                                </DxSimpleItem>
                            </DxGroupItem>

                            <DxSimpleItem data-field="url_json.url" text>
                                <DxLabel text="БАЗОВЫЙ АДРЕС ТРАНСЛЯЦИИ С ОРИГИНАЛЬНЫМ ЗВУКОМ" location="left"/>
                            </DxSimpleItem>
                            <DxGroupItem
                                    caption="АДРЕС ТРАНСЛЯЦИИ (ЗВУКОВАЯ ДОРОЖКА)"
                                    :col-count="2"
                            >
                                <DxSimpleItem data-field="url_json.urlch1" text>
                                    <DxLabel text="Дорожка №1" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="url_json.urlch5" text>
                                    <DxLabel text="Дорожка №5" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="url_json.urlch2" text>
                                    <DxLabel text="Дорожка №2" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="url_json.urlch6" text>
                                    <DxLabel text="Дорожка №6" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="url_json.urlch3" text>
                                    <DxLabel text="Дорожка №3" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="url_json.urlch7" text>
                                    <DxLabel text="Дорожка №7" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="url_json.urlch4" text>
                                    <DxLabel text="Дорожка №4" location="left"/>
                                </DxSimpleItem>
                                <DxSimpleItem data-field="url_json.urlch8" text>
                                    <DxLabel text="Дорожка №8" location="left"/>
                                </DxSimpleItem>
                            </DxGroupItem>

                            <!--
                            <DxSimpleItem data-field="baseurl" text>
                                <DxLabel text="АДРЕС ФУНКЦИИ ПРОВЕРКИ НА ПОРТАЛЕ"/>
                            </DxSimpleItem>
                            <DxSimpleItem data-field="oauthurl" text>
                                <DxLabel text="АДРЕС СЕРВЕРА АВТОРИЗАЦИИ"/>
                            </DxSimpleItem>
                            -->

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
    </div>
</template>


<script>
    import axios from 'axios';
    import DxButton from 'devextreme-vue/button';
    import AppButton from "./button";
    import { DxCheckBox } from 'devextreme-vue/check-box';

    import DxForm, {
        DxGroupItem,
        DxSimpleItem,
        DxItem,
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
        name: "app-config",
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
            DxCheckBox,
            DxItem,
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
                client_id: "",
                buttonOptions: {
                    text: 'Сохранить настройки',
                    type: 'success',
                    useSubmitBehavior: true
                },
            };
        },
        created() {


        },
        mounted() {
            this.client_id = $("#clientid").html();
            this.loadData();
        },
        beforeDestroy() {

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
                //this.sendData();
            },
            async readState(){
                await axios.get('/api/pult/getdata.asp?clientid=' + this.client_id)
                    .then((resp) => {
                        this.data = resp.data.data;
                        this.settings = resp.data.settings;
                        if(resp.data.settings.url.indexOf("{") !== -1) {
                            this.settings.url_json = JSON.parse(resp.data.settings.url);
                        }else{
                            this.settings.url_json = {url: resp.data.settings.url};
                        }
                        if(this.settings.authpage === "0") this.settings.authpage = false;
                        if(this.settings.authpage === "1") this.settings.authpage = true;
                        if(resp.data.settings.fields.indexOf("{") !== -1) {
                            this.settings.fields_json = JSON.parse(resp.data.settings.fields);
                        }else{
                            this.settings.fields_json = {
                                field1: {active: true, name: "ФАМИЛИЯ"},
                                field2: {active: true, name: "ИМЯ"},
                                field3: {active: true, name: "ОТЧЕСТВО"},
                                field4: {active: false, name: ""},
                            };
                        }

                        this.buttons = this.settings.buttons;
                        this.opros = this.settings.opros;
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        this.readState();
                    });
            },
            handleSubmit(e) {
                notify({
                    message: 'Данные конфигурации отправлены.',
                    position: {
                        my: 'center top',
                        at: 'center top'
                    }
                }, 'success', 3000);
                this.sendData();
                e.preventDefault();
                return false;
            },
            async sendData() {
                if(this.settings.authpage) this.settings.authpage = "1";
                if(!this.settings.authpage) this.settings.authpage = "0";
                await axios.get('/api/pult/saveconfig.asp', {
                        params: {
                            'clientid': this.client_id,
                            'url': JSON.stringify(this.settings.url_json),
                            'fields': JSON.stringify(this.settings.fields_json),
                            'baseurl': this.settings.baseurl,
                            'oauthurl': this.settings.baseurl,
                            'authpage': this.settings.authpage,
                        }
                    })
                    .then(function (resp) {
                    })
                    .catch(function (resp) {
                        console.log(resp);
                    });
            }
        }

    }
</script>
