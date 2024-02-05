<template>
    <div id="monitor">
        <div id="pos" style="padding: 5px; width: 100%; height: 60px; text-align: center; display: none;">
            <div id="num" class="panel" style="background: linear-gradient(to right, #163882, #056FCA); display: inline-flex; padding: 10px; width: 500px; height: 50px;">
                <div class="mesto" style="width: 25px; color: yellow; font-family: Arial; font-weight: bold; font-size: x-large; text-align: left;"></div>
                <div class="imggrp">
                    <img />
                </div>
                <div class="group" style="width: 500px; padding-left: 10px; color: white; font-family: Arial; font-weight: normal; font-size: x-large; text-align: left;"></div>
                <div class="balls" style="width: 70px; padding-left: 10px; color: white; font-family: Arial; font-weight: bold; font-size: x-large; text-align: right;"></div>
            </div>
        </div>
        <div id="vote" style="display: none; padding-top: 5px; height: 45px;">
            <button class="btn btn-panel" style="font-weight: bold; font-size: small; color: darkolivegreen; background-color: cyan; width: 80px;">
                <span class="badge bg-red" style="background-color: white; color: red;"></span>
                <span class="cnt"></span>
            </button>
        </div>
        <div id="row_" class="row" style="padding: 5px; height: 60px; display: none;">
        </div>
        <div id="cell_" class="cell col-xs" style="text-align: center; height: 50px; display: none;">
        </div>

        <div class='row'>
            <div class='col-xs-11'>

                <div id="himg" style="text-align: center; padding-bottom: 10px;">
                    <img id="imghead">
                </div>

            </div>
            <div class='col-xs-1'>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';

    export default {
        name: "app-web-monitor",
        components: {
        },
        data() {
            return {
                data: {},
                speedVote: 0,
                speedGroup: 0,
                colorfont: "",
                colorpanel: "",
                mTotal: [],
                to: 0,
            }
        },
        created() {

        },
        mounted() {
            this.loadData();

            const str = "<b>МОНИТОРИНГ РЕЗУЛЬТАТОВ</b>";
            $("#info").html(str);

        },
        beforeDestroy() {
            clearTimeout(this.to);
        },
        computed: {

        },
        methods: {
            async loadData(){
                await axios.get('/api/web/readconfig')
                    .then((resp) => {
                        this.loadConfig(JSON.parse(resp.data.json), true)
                    })
                    .catch(function (resp) {
                        console.log(resp);
                });
            },
            loadConfig(JSONData, autoStart){
                this.speedVote = JSONData.speedVote;
                this.speedGroup = JSONData.speedGroup;

                if(JSONData.bgimage!=="") $("body").attr("background", JSONData.bgimage);
                if(JSONData.headimage!=="") $("#imghead").attr("src", JSONData.headimage);

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

                this.colorfont = JSONData.colorfont;
                this.colorpanel = JSONData.colorpanel;

                //Сетка размещения
                let mesto = 0
                let block = $(".col-xs-11");
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
                        $(".row[row=" + (i + 1) + "]").append(cell);
                    }
                }

                for(let i=0; i<JSONData.groups.length; i++){
                    let panel = $("#pos").find("#num").clone();
                    panel.attr("id", "num_" + JSONData.groups[i].key);
                    panel.attr("key", JSONData.groups[i].key);
                    panel.attr("row", JSONData.groups[i].row);
                    panel.attr("col", JSONData.groups[i].col);
                    panel.attr("balls", "");
                    panel.attr("mesto", JSONData.groups[i].key);
                    $(".cell[row=" + JSONData.groups[i].row + "][col=" + JSONData.groups[i].col + "]").attr("mesto", JSONData.groups[i].key);
                    panel.css({ background: "linear-gradient(to right, " + JSONData.begincolor + ", " + JSONData.endcolor + ")", width: JSONData.width, height: JSONData.height-10 });
                    panel.find(".mesto").css({ color: JSONData.mesto.color, "font-size": JSONData.mesto.size, "font-family": JSONData.mesto.font.name });
                    panel.find(".group").css({ width: JSONData.width, color: JSONData.text.color, "font-size": JSONData.text.size, "font-family": JSONData.text.font.name });
                    panel.find(".group").text(JSONData.groups[i].name);
                    panel.find(".balls").css({ color: JSONData.balls.color, "font-size": JSONData.balls.size, "font-family": JSONData.balls.font.name });
                    if(JSONData.groups[i].img!=="") panel.find(".imggrp").find("img").attr("src", JSONData.groups[i].img);
                    $(".cell[row=" + JSONData.groups[i].row + "][col=" + JSONData.groups[i].col + "]").append(panel);
                }

                if(JSONData.headimage!==""){
                    $("#imghead").on("load", function(){
                        $('.panel[id^=num_]').each( function(index){
                            let row = $(this).attr("row");
                            let col = $(this).attr("col");
                            let cell = $(".cell[row=" + row + "][col=" + col + "]")
                            let mesto = cell.attr("mesto");
                            $(this).attr("mesto", mesto);
                            $(this).css({ top: $(this).offset().top, left: $(this).offset().left, position: 'absolute' });
                            $(this).detach();
                            $("body").append($(this));
                        });
                        if(autoStart) this.to = setTimeout(this.getData, 2000);
                    })
                }else{
                    $('.panel[id^=num_]').each( function(index){
                        $('.panel[id^=num_]').each( function(index){
                            let row = $(this).attr("row");
                            let col = $(this).attr("col");
                            let cell = $(".cell[row=" + row + "][col=" + col + "]")
                            let mesto = cell.attr("mesto");
                            $(this).attr("mesto", mesto);
                            $(this).css({ top: $(this).offset().top, left: $(this).offset().left, position: 'absolute' });
                            $(this).detach();
                            $("body").append($(this));
                        });
                    });
                    if(autoStart) this.to = setTimeout(this.getData, 2000);
                }

            },
            async getData() {
                await axios.get('/api/web/readdata')
                    .then((resp) => {
                        if(resp.data.json !== null) {
                            const JSONData = JSON.parse(resp.data.json);

                            if (JSONData.length === 0) {
                                this.resetGroups();
                            } else {
                                JSONData.sort(function (a, b) {
                                    return (b.cnt - a.cnt)
                                });
                                for (let i = 0; i < JSONData.length; i++) {
                                    let clone = $("#vote").clone();
                                    let panel = clone.find(".btn-panel");
                                    panel.css({color: this.colorfont, "background-color": this.colorpanel});
                                    clone.attr("id", "vote_" + JSONData[i].key);
                                    clone.attr("key", JSONData[i].key);
                                    clone.attr("pos", i + 1);
                                    clone.attr("balls", JSONData[i].cnt);
                                    clone.css({top: i * 40, left: window.innerWidth - 85, position: 'absolute'});
                                    panel.find(".bg-red").text(JSONData[i].key);
                                    panel.find(".cnt").text(JSONData[i].cnt);
                                    clone.show();
                                    clone.appendTo('body');
                                }
                            }
                            let lst = $("[id ^= vote_]");
                            if(lst.length > 0) {
                                clearTimeout(this.to);
                                this.to = setTimeout(this.moveVote, 1000, lst[0]);
                            } else {
                                this.to = setTimeout(this.getData, 2000);
                            }

                        }else{
                            this.to = setTimeout(this.getData, 2000);
                        }
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        this.to = setTimeout(this.getData, 2000);
                    });
            },
            async resetGroups(){
                $(".trow").remove();
                $(".panel[id ^= num_]").remove();
                await axios.get('/api/web/readconfig')
                    .then((resp) => {
                        this.loadConfig(JSON.parse(resp.data.json), false)
                    })
                    .catch(function (resp) {
                        console.log(resp);
                    });
            },
            moveVote(obj){
                let src = $(obj);
                let dst = $('#num_'+src.attr("key"));
                src.animate({
                        top: dst.offset().top,
                        left: dst.offset().left + dst.width() - 80,
                        opacity: 0.5 //с уменьшением прозрачности
                    }, this.speedVote,
                    //по завершении анимации удаляем элемент:
                    () => {
                        this.mTotal = []

                        const arr = $('.panel[id^=num_]');
                        for(let i=0; i<arr.length; i++) {
                            this.mTotal.push({
                                key: $(arr[i]).attr("key"),
                                row: $(arr[i]).attr("row"),
                                col: $(arr[i]).attr("col"),
                                mesto: $(arr[i]).attr("mesto"),
                                balls: ($(arr[i]).attr("balls")==="")?0:parseFloat($(arr[i]).attr("balls")),
                                obj: $('#num_'+$(arr[i]).attr("key")),
                                obj_top: $('#num_'+$(arr[i]).attr("key")).offset().top,
                                obj_left: $('#num_'+$(arr[i]).attr("key")).offset().left,
                                nmesto: "",
                                obj1: null,
                                obj1_top: 0,
                                obj1_left: 0
                            });
                        }

                        for(let j=0; j<this.mTotal.length; j++){
                            if(this.mTotal[j].key === $(src).attr("key")){
                                this.mTotal[j].balls += parseFloat($(src).attr("balls"));
                                dst.attr("balls", this.mTotal[j].balls);
                                dst.find(".balls").text(this.mTotal[j].balls);
                                break;
                            }
                        }
                        this.mTotal.sort(function(a, b){
                            if ((b.balls===0)&&(a.balls===0)) {
                                return parseFloat(a.mesto) - parseFloat(b.mesto);
                            }
                            return(b.balls - a.balls);
                        });
                        let ppos = 0;
                        for(let i=0; i<this.mTotal.length; i++){
                            this.mTotal[i].nmesto = "" + (i + 1);
                            this.mTotal[i].obj1 = this.getByMesto(this.mTotal[i].nmesto);
                            this.mTotal[i].obj1_top = this.mTotal[i].obj1.offset().top;
                            this.mTotal[i].obj1_left = this.mTotal[i].obj1.offset().left;
                            if(this.mTotal[i].balls>0) $('#num_'+this.mTotal[i].key).find(".mesto").text(i + 1);
                        }
                        $(src).remove();
                        this.moveGroups_();
                    }
                )
            },
            moveGroups_(){
                let obj;
                let obj1;
                let mesto;
                let nmesto;
                let x, y;
                for(let i=0; i<this.mTotal.length; i++){
                    if((this.mTotal[i].nmesto !== "")&&(this.mTotal[i].nmesto !== this.mTotal[i].mesto)){
                        obj = this.mTotal[i].obj;
                        obj1 = this.mTotal[i].obj1;
                        mesto = this.mTotal[i].mesto;
                        nmesto = this.mTotal[i].nmesto;
                        x = this.mTotal[i].obj_left;
                        y = this.mTotal[i].obj_top;
                        const x1 = this.mTotal[i].obj1_left;
                        const y1 = this.mTotal[i].obj1_top;

                        this.moveGroups(obj, obj1, x1, y1);
                    }
                }

                for(let i=0; i<this.mTotal.length; i++){
                    if((this.mTotal[i].nmesto !== "")&&(this.mTotal[i].nmesto !== this.mTotal[i].mesto)){
                        this.mTotal[i].obj.attr("mesto", this.mTotal[i].nmesto);
                    }
                }
                let lst = $("[id ^= vote_]");
                if(lst.length > 0) {
                    clearTimeout(this.to);
                    this.to = setTimeout(this.moveVote, 1000, lst[0]);
                } else {
                    this.to = setTimeout(this.getData, 2000);
                }
            },
            moveGroups(obj, obj1, x, y){
                if(obj.attr("id") !== obj1.attr("id")){
                    obj.animate({
                            top: y,
                            left: x,
                            opacity: 0.5 //с уменьшением прозрачности
                        }, this.speedGroup,
                        //по завершении анимации удаляем элемент:
                        function() {
                            $(this).css({ opacity: 1 });
                        })
                }
            },
            getByMesto(val){
                for(let i=0; i<this.mTotal.length; i++){
                    if(this.mTotal[i].mesto === val){
                        return $('#num_'+this.mTotal[i].key);
                    }
                }
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

<style >
    html { overflow-x: hidden; overflow-y: hidden; }

</style>