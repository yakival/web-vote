<template>
    <div style="background-color: #f5f5f5">
        <div id="pos" style="padding: 5px; width: 100%; height: 60px; text-align: center; display: none;">
            <div id="num" class="panel" style="background: linear-gradient(to right, #163882, #056FCA); display: inline-flex; padding: 10px; width: 500px; height: 50px;">
                <div class="imggrp">
                    <img />
                </div>
                <div class="group" style="width: 500px; padding-left: 10px; color: white; font-family: Arial; font-weight: normal; font-size: x-large; text-align: left;"></div>
                <div class="balls" style="width: 95px; padding-left: 10px; color: white; font-family: Arial; font-weight: bold; font-size: x-large; text-align: right;">
                    <input type="text" class="form-control input-vote" data-inputmask='"mask": "99999"' data-mask="">
                </div>
                <div class="send">
                    <a class="btn btn-app" style="height: 33px; padding-top: 6px; min-width: 33px;">
                        <i class="fa fa-play"></i>
                    </a>
                </div>
            </div>
        </div>
        <div id="vote" style="display: none; padding-top: 5px; height: 45px;">
            <button class="btn btn-warning" style="font-weight: bold; font-size: small; color: darkolivegreen; width: 80px;">
                <span class="badge bg-red"></span>
                <span class="cnt"></span>
            </button>
        </div>
        <div id="row_" class="row" style="padding: 5px; height: 60px; display: none;">
        </div>
        <div id="cell_" class="cell col-xs" style="text-align: center; height: 50px; display: none;">
        </div>

        <div class='row'>
            <div class='col-xs-12'>

            </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';

    export default {
        name: "app-web-control",
        components: {
        },
        data() {
            return {
                data: {},
                speedVote: 0,
                speedGroup: 0,
            }
        },
        created() {

        },
        mounted() {
            this.loadConfig();

            const str = "<table border=0 style='width: 100%;'><tr><td style='width: 100%;'><b>УПРАВЛЕНИЕ МОНИТОРИНГОМ</b></td>"+
                "<td style='padding-left: 10px;'><button id='btnOk' type='button' class='btn btn-success' title='Отправить все данные из формы для отображения' style='border-color: white;'><i class='fa fa-forward'></i>&nbsp;Отправить</button></td>"+
                "<td style='padding-left: 10px;'><button id='btnClear' type='button' class='btn btn-warning' title='Очистить данные формы' style='border-color: white;'><i class='fa fa-close'></i>&nbsp;Очистить результы</button></td>"+
                "<td style='padding-left: 10px;'><button id='btnReset' type='button' class='btn btn-danger' title='Сбросить данные мониторинга' style='border-color: white;'><i class='fa fa-undo'></i>&nbsp;Сбросить мониторинг</button></td>"+
                "</tr></table>";
            $("#info").html(str);
            $("#btnOk").on("click", () => {
                this.Send();
            });
            $("#btnClear").on("click", () => {
                this.Clear();
            });
            $("#btnReset").on("click", () => {
                this.SendClear();
            });

        },
        beforeDestroy() {

        },
        computed: {

        },
        methods: {
            async loadConfig(){
                if(this.ro) {
                    console.log("ReadOnly");
                    this.to = setTimeout(this.readState, this.delay);
                    return;
                }
                await axios.get('/api/web/readconfig')
                    .then((resp) => {
                        const JSONData = JSON.parse(resp.data.json);

                        //Анализируем дополнительные шрифты
                        if(JSONData.mesto.font.src!==""){
                            this.addStyle('body', '@font-face', '{ font-family: ' + JSONData.mesto.font.name + '; src: url(' + JSONData.mesto.font.src + '); }\n');
                        }
                        if(JSONData.text.font.src!==""){
                            this.addStyle('body', '@font-face', '{ font-family: ' + JSONData.text.font.name + '; src: url(' + JSONData.text.font.src + '); }\n');
                        }
                        if(JSONData.balls.font.src!==""){
                            this.addStyle('body', '@font-face', '{ font-family: ' + JSONData.balls.font.name + '; src: url(' + JSONData.balls.font.src + '); }\n');
                        }

                        //Сетка размещения
                        let mesto = 0
                        let block = $(".col-xs-12");
                        block.empty();
                        let cnt0 = parseInt(12/JSONData.cols)
                        for(let i=0; i<JSONData.rows; i++){
                            let row = $("#row_").clone();
                            row.attr("id", "");
                            row.attr("row", i + 1);
                            row.attr("class", "row trow");
                            row.css({ height: JSONData.height });
                            row.show();
                            block.append(row);

                            for(let j=0; j<JSONData.cols; j++){
                                mesto = i + 1 + j*JSONData.rows;
                                let cell = $("#cell_").clone();
                                cell.attr("id", "");
                                cell.attr("class", "cell col-xs-" + (cnt0));
                                cell.attr("row", i + 1);
                                cell.attr("col", j + 1);
                                cell.attr("mesto", mesto);
                                cell.css({ height: JSONData.height });
                                cell.show();
                                row.append(cell);
                                //$(".row[row=" + (i + 1) + "]").append(cell);
                            }
                        }

                        for(let i=0; i<JSONData.groups.length; i++){
                            let panel = $("#pos").find("#num").clone();
                            panel.attr("id", "num_" + JSONData.groups[i].key);
                            panel.attr("key", JSONData.groups[i].key);
                            panel.attr("row", JSONData.groups[i].row);
                            panel.attr("col", JSONData.groups[i].col);
                            panel.css({ background: "linear-gradient(to right, " + JSONData.begincolor + ", " + JSONData.endcolor + ")", width: "100%"});
                            panel.find(".group").css({ width: JSONData.width, color: JSONData.text.color, "font-size": JSONData.text.size, "font-family": JSONData.text.font.name });
                            panel.find(".group").text(JSONData.groups[i].name);
                            panel.find(".balls").css({ color: JSONData.balls.color, "font-size": JSONData.balls.size, "font-family": JSONData.balls.font.name });
                            panel.find(".balls").find("input").attr("key", JSONData.groups[i].key);
                            panel.find(".balls").find("input").attr("id", "cnt_" + JSONData.groups[i].key);
                            panel.find(".send").find("a").attr("key", JSONData.groups[i].key);
                            if(JSONData.groups[i].img!=="") panel.find(".imggrp").find("img").attr("src", "../" + JSONData.groups[i].img);
                            //panel.show();
                            $(".cell[row=" + JSONData.groups[i].row + "][col=" + JSONData.groups[i].col + "]").append(panel);
                        }

                        $(".btn-app").on("click", () => {
                            if(parseFloat($("#cnt_" + $(this).attr("key")).val())===0) return;
                            let key;
                            let val;
                            eval('key = $(this).attr("key"); val = $("#cnt_" + $(this).attr("key")).val();');
                            this.sendData('/api/web/writeform', '[{"key": "' + key  + '", "cnt": ' + val + '}]')
                        })

                        $(".input-vote").keypress(function(ev){
                            const keycode = (ev.keyCode ? ev.keyCode : ev.which);
                            if(keycode === 13) {
                                $(this).parent().parent().find(".send").find("a").click();
                            }
                        })

                    })
                    .catch(function (resp) {
                        console.log(resp);
                    });
            },
            addStyle(selector, rulename, value) {
                let stylesheet = this.getAppStylesheet();
                const cssRules = stylesheet.cssRules || stylesheet.rules;
                const rule = stylesheet.insertRule(rulename + ' ' + value, cssRules.length);
            },
            getAppStylesheet() {
                let stylesheet = document.getElementById('body-styles');
                if (!stylesheet) {
                    stylesheet = $('<style id="body-styles">').appendTo('head')[0];
                }
                stylesheet = stylesheet.sheet;
                return stylesheet;
            },
            Clear(){
                $("input[type=text]").val("");
            },
            Send(){
                let data = ""
                $("input[type=text]").each(function(index){
                    if($(this).val()!=="") data += ((data!=="")?",":"") + '{"key": "' + $(this).attr("key") + '", "cnt": ' + $(this).val() + '}';
                });
                this.sendData('/api/web/writeform', "[" + data + "]");
            },
            SendClear(){
                this.sendData('/api/web/clearform', "[]");
            },
            async sendData(addr, data) {
                await axios.post(addr, { 'data': data })
                    .then(function (resp) {

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
