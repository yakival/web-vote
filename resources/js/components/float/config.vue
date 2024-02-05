<template>
    <div>
        <div class="row">
            <div id='input_container' class='col-md-12'>
                <div id='editor' style="padding: 10px; overflow:scroll; "></div>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';
    import notify from 'devextreme/ui/notify';

    export default {
        name: "app-web-config",
        components: {
            notify,
        },
        data() {
            return {
                jsoneditor: Object,
                data: {},
            }
        },
        created() {

        },
        mounted() {
            this.readConfig();

            const str = "<table border=0 style='width: 100%;'><tr><td style='width: 100%;'><b>ПАРАМЕТРЫ ОТОБРАЖЕНИЯ</b></td>"+
                "<td style='padding-left: 10px;'><button id='btnOkParams' type='button' class='btn btn-success' title='Сохранить' style='border-color: white;'><i class='fa fa-save'></i>&nbsp;Сохранить конфигурацию</button></td>"+
                "<td style='padding-left: 10px;'><button id='btnSaveParams' type='button' class='btn btn-info' title='Сохранить конфигурацию в файл' style='border-color: white;'><i class='fa fa-download'></td>"+
                "<td style='padding-left: 10px;'><input type=\"file\" id=\"selectFile\" value=\"Import\" style='display: none;' />" +
                    "<button id='btnLoadParams' type='button' class='btn btn-info' title='Загрузить конфигурацию из файла' style='border-color: white;'><i class='fa fa-upload'></td>"+
                "</tr></table>";
            $("#info").html(str);
            $("#btnOkParams").on("click", () => {
                this.sendData();
            });
            $("#btnSaveParams").on("click", () => {
                this.saveFile();
            });

            $("#btnLoadParams").on("click", () => {
                $("#selectFile").click();
            });
            $("#selectFile").change(() => {
                this.loadFile();
            });

       },
        beforeDestroy() {

        },
        computed: {

        },
        methods: {
            saveFile() {
                const data = JSON.stringify(this.data)
                const blob = new Blob([data], {type: 'text/plain'})
                const e = document.createEvent('MouseEvents'),
                    a = document.createElement('a');
                a.download = "config.json";
                a.href = window.URL.createObjectURL(blob);
                a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
                e.initEvent('click', true, false);
                a.dispatchEvent(e);
                notify({
                    message: 'Данные конфигурации записаны в файл.',
                    position: {
                        my: 'center top',
                        at: 'center top'
                    }
                }, 'success', 3000);
            },
            loadFile() {
                const files = document.getElementById('selectFile').files;
                if (files.length <= 0) {
                    return false;
                }
                const fr = new FileReader();
                fr.onload = e => {
                    this.data = JSON.parse(e.target.result);
                    this.jsoneditor.setValue(this.data);
                    notify({
                        message: 'Данные конфигурации загружены из файла.',
                        position: {
                            my: 'center top',
                            at: 'center top'
                        }
                    }, 'success', 3000);
                }
                fr.readAsText(files.item(0));
            },
            async readConfig(){
                await axios.get('/api/web/readconfig')
                    .then((resp) => {
                        this.data = JSON.parse(resp.data.json);

                        JSONEditor.defaults.options.theme = 'bootstrap3';
                        JSONEditor.defaults.options.iconlib = "fontawesome4";
                        JSONEditor.defaults.options["disable_edit_json"] = true;
                        JSONEditor.defaults.options["disable_properties"] = true;
                        JSONEditor.defaults.options.object_layout = "grid";
                        $("#editor").css({ height: window.innerHeight});

                        // Initialize the editor
                        this.jsoneditor = new JSONEditor(document.getElementById("editor"),{
                            schema: {
                                "title": "Список параметров",
                                "type": "object",
                                "properties": {
                                    "bgimage": {
                                        "type": "string",
                                        "title": "Фоновое изображение",
                                        "minLength": 4,
                                    },
                                    "headimage": {
                                        "type": "string",
                                        "title": "Изображение для заголовка",
                                        "minLength": 4,
                                    },
                                    "rows": {
                                        "type": "integer",
                                        "format": "number",
                                        "title": "Количество строк для размещения участников",
                                        "minimum": 0
                                    },
                                    "cols": {
                                        "type": "integer",
                                        "format": "number",
                                        "title": "Количество столбцов для размещения участников",
                                        "minimum": 0
                                    },
                                    "width": {
                                        "type": "integer",
                                        "format": "number",
                                        "title": "Ширина панели участника",
                                        "default": 600,
                                        "minimum": 0
                                    },
                                    "height": {
                                        "type": "integer",
                                        "format": "number",
                                        "title": "Высота панели участника",
                                        "default": 65,
                                        "minimum": 0
                                    },
                                    "begincolor": {
                                        "type": "string",
                                        "format": "color",
                                        "title": "Начальный цвет панели участника",
                                        "default": "#163882"
                                    },
                                    "endcolor": {
                                        "type": "string",
                                        "format": "color",
                                        "title": "Конечный цвет панели участника",
                                        "default": "#056FCA"
                                    },
                                    "speedVote": {
                                        "type": "integer",
                                        "format": "number",
                                        "title": "Время анимации количества очков на панель",
                                        "default": 1000,
                                        "minimum": 0
                                    },
                                    "speedGroup": {
                                        "type": "integer",
                                        "format": "number",
                                        "title": "Время анимации панелей при смене рейтинга",
                                        "default": 1000,
                                        "minimum": 0
                                    },
                                    "mesto": {
                                        "type": "object",
                                        "title": "Оформление текста (место участника в рейтинге)",
                                        "options": { "collapsed": true },
                                        "properties": {
                                            "color": {
                                                "type": "string",
                                                "format": "color",
                                                "title": "Цвет шрифта",
                                                "default": "#FFFF00"
                                            },
                                            "size": {
                                                "type": "string",
                                                "title": "Размер шрифта",
                                                "default": "x-large"
                                            },
                                            "font": {
                                                "type": "object",
                                                "title": "Шрифт",
                                                "options": { "collapsed": false },
                                                "properties": {
                                                    "name": {
                                                        "type": "string",
                                                        "title": "Название шрифта",
                                                        "minLength": 4,
                                                        "default": "Arial"
                                                    },
                                                    "src": {
                                                        "type": "string",
                                                        "title": "Ссылка на дополнительный шрифт (если шрифт стандартный, то ссылка пустая)",
                                                        "minLength": 4,
                                                        "default": "Arial"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "text": {
                                        "type": "object",
                                        "title": "Оформление текста (информации об участнике)",
                                        "options": { "collapsed": true },
                                        "properties": {
                                            "color": {
                                                "type": "string",
                                                "format": "color",
                                                "title": "Цвет шрифта",
                                                "default": "#99CCFF"
                                            },
                                            "size": {
                                                "type": "string",
                                                "title": "Размер шрифта",
                                                "default": "x-large"
                                            },
                                            "font": {
                                                "type": "object",
                                                "title": "Шрифт",
                                                "options": { "collapsed": false },
                                                "properties": {
                                                    "name": {
                                                        "type": "string",
                                                        "title": "Название шрифта",
                                                        "minLength": 4,
                                                        "default": "Arial"
                                                    },
                                                    "src": {
                                                        "type": "string",
                                                        "title": "Ссылка на дополнительный шрифт (если шрифт стандартный, то ссылка пустая)",
                                                        "minLength": 4,
                                                        "default": "Arial"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "balls": {
                                        "type": "object",
                                        "title": "Оформление текста (количество баллов участника)",
                                        "options": { "collapsed": true },
                                        "properties": {
                                            "color": {
                                                "type": "string",
                                                "format": "color",
                                                "title": "Цвет шрифта",
                                                "default": "#FFFFFF"
                                            },
                                            "size": {
                                                "type": "string",
                                                "title": "Размер шрифта",
                                                "default": "x-large"
                                            },
                                            "font": {
                                                "type": "object",
                                                "title": "Шрифт",
                                                "options": { "collapsed": false },
                                                "properties": {
                                                    "name": {
                                                        "type": "string",
                                                        "title": "Название шрифта",
                                                        "minLength": 4,
                                                        "default": "Arial"
                                                    },
                                                    "src": {
                                                        "type": "string",
                                                        "title": "Ссылка на дополнительный шрифт (если шрифт стандартный, то ссылка пустая)",
                                                        "minLength": 4,
                                                        "default": "Arial"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "vote": {
                                        "type": "object",
                                        "title": "Оформление панели поступающих результаттов",
                                        "options": { "collapsed": true },
                                        "properties": {
                                            "colorpanel": {
                                                "type": "string",
                                                "format": "color",
                                                "title": "Цвет блока",
                                                "default": "#FFCC00"
                                            },
                                            "colorfont": {
                                                "type": "string",
                                                "format": "color",
                                                "title": "Цвет шрифта",
                                                "default": "#3300CC"
                                            }
                                        }
                                    },
                                    "groups": {
                                        "type": "array",
                                        "format": "table",
                                        "title": "Список участников",
                                        "uniqueItems": true,
                                        "options": { "collapsed": false },
                                        "items": {
                                            "type": "object",
                                            "title": "Участник",
                                            "options": { "collapsed": true },
                                            "properties": {
                                                "key": {
                                                    "type": "integer",
                                                    "format": "number",
                                                    "title": "Номер участника (кнопка на пульте)",
                                                    "minimum": 1
                                                },
                                                "name": {
                                                    "type": "string",
                                                    "title": "Обозначение",
                                                    "minLength": 4
                                                },
                                                "img": {
                                                    "type": "string",
                                                    "title": "Иконка"
                                                },
                                                "col": {
                                                    "type": "integer",
                                                    "format": "number",
                                                    "title": "Колонка размещения",
                                                    "minimum": 1
                                                },
                                                "row": {
                                                    "type": "integer",
                                                    "format": "number",
                                                    "title": "Строка размещения",
                                                    "minimum": 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        this.jsoneditor.setValue(this.data);

                    })
                    .catch(function (resp) {
                        console.log(resp);
                    });
            },
            async sendData() {
                await axios.post('/api/web/writeconfig', { 'data': JSON.stringify(this.jsoneditor.getValue()) })
                    .then(function (resp) {
                        notify({
                            message: 'Данные конфигурации сохранены.',
                            position: {
                                my: 'center top',
                                at: 'center top'
                            }
                        }, 'success', 3000);

                    })
                    .catch(function (resp) {
                        console.log(resp);
                    });
            }

        }
    }
</script>

<style scoped>

</style>
